"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

// ─────────────────────────────────────────────────────────────────────────────
// Google Antigravity WebGL Simulation Engine
// Faithfully reproduced from https://antigravity.google/
//
// Pipeline:
// 1. 2D Poisson Disk Sampling generates natural, organic particle distribution.
// 2. GPU Simulation Shader computes gravitational ring attraction, simplex noise
//    displacements, ripple waves, velocity damping, and dynamic scale.
// 3. Ping-Pong WebGLRenderTargets (256x256 Float textures) simulate fluid physics.
// 4. Render Shader draws SDF rounded capsules (sdRoundBox) oriented radially
//    from the ring center, with Google chromatic color blending (Blue, Red, Yellow).
// 5. 3D Raycasting plane maps mouse cursor smoothly to the gravitational ring center.
// ─────────────────────────────────────────────────────────────────────────────

const SNOISE_GLSL = `
  vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
  vec4 permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
  float permute(float x) { return floor(mod(((x * 34.0) + 1.0) * x, 289.0)); }

  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  float taylorInvSqrt(float r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 1.0 / 7.0;
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
  }
`;

const SIM_VERTEX_SHADER = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

const SIM_FRAGMENT_SHADER = `
  precision highp float;
  uniform sampler2D uPosition;
  uniform sampler2D uPosRefs;
  uniform vec2 uRingPos;
  uniform float uTime;
  uniform float uDeltaTime;
  uniform float uRingRadius;
  uniform float uRingWidth;
  uniform float uRingWidth2;
  uniform float uRingDisplacement;

  ${SNOISE_GLSL}

  void main() {
    vec2 simTexCoords = gl_FragCoord.xy / vec2(256.0, 256.0);
    vec4 pFrame = texture2D(uPosition, simTexCoords);

    float scale = pFrame.z;
    float velocity = pFrame.w;
    vec2 refPos = texture2D(uPosRefs, simTexCoords).xy;

    float time = uTime * 0.5;
    vec2 curentPos = refPos;

    vec2 pos = pFrame.xy;
    pos *= 0.8;

    float dist = distance(curentPos.xy, uRingPos);
    float noise0 = snoise(vec3(curentPos.xy * 0.2 + vec2(18.4924, 72.9744), time * 0.5));
    float dist1 = distance(curentPos.xy + (noise0 * 0.005), uRingPos);

    float t = smoothstep(uRingRadius - (uRingWidth * 2.0), uRingRadius, dist) - smoothstep(uRingRadius, uRingRadius + uRingWidth, dist1);
    float t2 = smoothstep(uRingRadius - (uRingWidth2 * 2.0), uRingRadius, dist) - smoothstep(uRingRadius, uRingRadius + uRingWidth2, dist1);
    float t3 = smoothstep(uRingRadius + uRingWidth2, uRingRadius, dist);

    t = pow(t, 2.0);
    t2 = pow(t2, 3.0);

    t += t2 * 3.0;
    t += t3 * 0.35;
    t += snoise(vec3(curentPos.xy * 30.0 + vec2(11.4924, 12.9744), time * 0.5)) * t3 * 0.5;

    float nS = snoise(vec3(curentPos.xy * 2.0 + vec2(18.4924, 72.9744), time * 0.5));
    t += pow((nS + 1.5) * 0.5, 2.0) * 0.55;

    // Mid scale noise
    float noise1 = snoise(vec3(curentPos.xy * 4.0 + vec2(88.494, 32.4397), time * 0.35));
    float noise2 = snoise(vec3(curentPos.xy * 4.0 + vec2(50.904, 120.947), time * 0.35));

    // Close scale noise
    float noise3 = snoise(vec3(curentPos.xy * 20.0 + vec2(18.4924, 72.9744), time * 0.5));
    float noise4 = snoise(vec3(curentPos.xy * 20.0 + vec2(50.904, 120.947), time * 0.5));

    vec2 disp = vec2(noise1, noise2) * 0.03;
    disp += vec2(noise3, noise4) * 0.005;

    // Fluid sine ripple
    disp.x += sin((refPos.x * 20.0) + (time * 4.0)) * 0.02 * clamp(dist, 0.0, 1.0);
    disp.y += cos((refPos.y * 20.0) + (time * 3.0)) * 0.02 * clamp(dist, 0.0, 1.0);

    // Gravitational displacement towards/away from ring center
    pos -= (uRingPos - (curentPos + disp)) * pow(t2, 0.75) * uRingDisplacement;

    // Scale dampening & transition
    float scaleDiff = t - scale;
    scaleDiff *= 0.2;
    scale += scaleDiff;

    vec2 finalPos = curentPos + disp + (pos * 0.25);

    velocity *= 0.5;
    velocity += scale * 0.25;

    gl_FragColor = vec4(finalPos, scale, velocity);
  }
`;

const RENDER_VERTEX_SHADER = `
  precision highp float;
  attribute vec4 seeds;

  uniform sampler2D uPosition;
  uniform float uTime;
  uniform float uParticleScale;
  uniform float uPixelRatio;
  uniform int uColorScheme;

  varying vec4 vSeeds;
  varying float vVelocity;
  varying vec2 vLocalPos;
  varying vec2 vScreenPos;
  varying float vScale;

  void main() {
    vec4 pos = texture2D(uPosition, uv);
    vSeeds = seeds;
    vVelocity = pos.w;
    vScale = pos.z;
    vLocalPos = pos.xy;
    vec4 viewSpace = modelViewMatrix * vec4(vec3(pos.xy, 0.0), 1.0);

    gl_Position = projectionMatrix * viewSpace;
    vScreenPos = gl_Position.xy;

    // Exact Google Antigravity point sizing:
    // Yields ~18-22px elongated capsules on the active ring, and ~4-5px dots outside.
    gl_PointSize = max(1.5, ((vScale * 5.4 + 1.2) * (uPixelRatio * 0.5) * uParticleScale * 2.45));
  }
`;

const RENDER_FRAGMENT_SHADER = `
  precision highp float;

  varying vec4 vSeeds;
  varying vec2 vScreenPos;
  varying vec2 vLocalPos;
  varying float vScale;
  varying float vVelocity;

  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;

  uniform vec2 uRingPos;
  uniform vec2 uRez;

  uniform float uAlpha;
  uniform float uTime;
  uniform int uColorScheme;

  ${SNOISE_GLSL}

  #define PI 3.1415926535897932384626433832795

  float sdRoundBox(in vec2 p, in vec2 b, in vec4 r) {
    r.xy = (p.x > 0.0) ? r.xy : r.zw;
    r.x  = (p.y > 0.0) ? r.x  : r.y;
    vec2 q = abs(p) - b + r.x;
    return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r.x;
  }

  vec2 rotate(vec2 v, float a) {
    float s = sin(a);
    float c = cos(a);
    return mat2(c, s, -s, c) * v;
  }

  void main() {
    float noiseAngle = snoise(vec3(vLocalPos * 10.0 + vec2(18.4924, 72.9744), uTime * 0.85));
    float noiseColor = snoise(vec3(vLocalPos * 2.0 + vec2(74.664, 91.556), uTime * 0.5));
    noiseColor = (noiseColor + 1.0) * 0.5;

    // Angle relative to ring position (radial radiation)
    float angle = atan(vLocalPos.y - uRingPos.y, vLocalPos.x - uRingPos.x);

    vec2 uv = gl_PointCoord.xy;
    uv -= vec2(0.5);
    uv.y *= -1.0;
    uv = rotate(uv, -angle + (noiseAngle * 0.5));

    // Google chromatic palette interpolation
    float h = 0.8;
    float progress = smoothstep(0.0, 0.75, pow(noiseColor, 2.0));
    vec3 col = mix(mix(uColor1, uColor2, progress / h), mix(uColor2, uColor3, (progress - h) / (1.0 - h)), step(h, progress));
    vec3 color = col;

    // Elegant, ultra-slender rounded capsule pill: width 0.48, height 0.075, corner radius 0.075 (6.4:1 ratio)
    float rounded = sdRoundBox(uv, vec2(0.48, 0.075), vec4(0.075));
    rounded = smoothstep(0.035, 0.0, rounded);

    // Alpha with gentle scale fade and soft max opacity
    float a = uAlpha * rounded * smoothstep(0.08, 0.22, vScale);

    if (a < 0.01) {
      discard;
    }

    color = clamp(color, 0.0, 1.0);
    // Dynamic velocity color saturation
    color = mix(color, color * clamp(vVelocity * 1.25, 0.35, 1.0), float(uColorScheme));

    gl_FragColor = vec4(color, clamp(a, 0.0, 1.0));
  }
`;

// 1D Perlin Noise generator for organic wandering
class Noise1D {
  private r: number[] = [];
  private readonly MAX_VERTICES = 256;
  private readonly MAX_VERTICES_MASK = 255;
  private scale = 1;
  private amplitude = 1;

  constructor() {
    for (let i = 0; i < this.MAX_VERTICES; ++i) {
      this.r.push(Math.random());
    }
  }

  getVal(e: number): number {
    const t = e * this.scale;
    const n = Math.floor(t);
    const frac = t - n;
    const i = frac * frac * (3 - 2 * frac);
    const a = ((n % this.MAX_VERTICES_MASK) + this.MAX_VERTICES_MASK) % this.MAX_VERTICES_MASK;
    const o = (a + 1) % this.MAX_VERTICES_MASK;
    return (this.r[a] * (1 - i) + this.r[o] * i) * this.amplitude;
  }
}

// Bridson's Poisson Disk Sampling in 2D
function generatePoissonPoints(
  width: number,
  height: number,
  minDist: number,
  maxDist: number,
  maxTries = 20
): Array<[number, number]> {
  const cellSize = minDist / Math.SQRT2;
  const gridW = Math.ceil(width / cellSize);
  const gridH = Math.ceil(height / cellSize);
  const grid = new Int32Array(gridW * gridH).fill(-1);
  const points: Array<[number, number]> = [];
  const active: number[] = [];

  function addPoint(x: number, y: number) {
    const idx = points.length;
    points.push([x, y]);
    active.push(idx);
    const gx = Math.floor(x / cellSize);
    const gy = Math.floor(y / cellSize);
    if (gx >= 0 && gx < gridW && gy >= 0 && gy < gridH) {
      grid[gy * gridW + gx] = idx;
    }
  }

  addPoint(width * 0.5, height * 0.5);

  while (active.length > 0) {
    const randIdx = Math.floor(Math.random() * active.length);
    const pointIdx = active[randIdx];
    const [px, py] = points[pointIdx];
    let found = false;

    for (let t = 0; t < maxTries; t++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = minDist + Math.random() * (maxDist - minDist);
      const nx = px + Math.cos(angle) * radius;
      const ny = py + Math.sin(angle) * radius;

      if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;

      const gx = Math.floor(nx / cellSize);
      const gy = Math.floor(ny / cellSize);

      let tooClose = false;
      const minX = Math.max(0, gx - 2);
      const maxX = Math.min(gridW - 1, gx + 2);
      const minY = Math.max(0, gy - 2);
      const maxY = Math.min(gridH - 1, gy + 2);

      for (let y = minY; y <= maxY && !tooClose; y++) {
        for (let x = minX; x <= maxX; x++) {
          const neighbor = grid[y * gridW + x];
          if (neighbor !== -1) {
            const [ox, oy] = points[neighbor];
            const dSq = (ox - nx) ** 2 + (oy - ny) ** 2;
            if (dSq < minDist * minDist) {
              tooClose = true;
              break;
            }
          }
        }
      }

      if (!tooClose) {
        addPoint(nx, ny);
        found = true;
        break;
      }
    }

    if (!found) {
      active[randIdx] = active[active.length - 1];
      active.pop();
    }
  }

  return points;
}

export interface AntigravityProps {
  className?: string;
  opacity?: number;
  [key: string]: unknown;
}

export default function Antigravity({ className = "", opacity = 0.62 }: AntigravityProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || 750;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    // Exact Antigravity attributes from https://antigravity.google/
    const density = 230;
    const ringWidth = 0.006;
    const ringWidth2 = 0.107;
    const ringDisplacement = 0.62;
    const particlesScale = 0.59;

    // Linear mapping matching Google Antigravity
    const pMin = (density - 0) * (2 - 10) / (300 - 0) + 10;
    const pMax = (density - 0) * (3 - 11) / (300 - 0) + 11;

    // 1. Generate Poisson Disk Points across 500x500 box
    const rawPoints = generatePoissonPoints(500, 500, pMin, pMax, 20);
    const count = Math.min(rawPoints.length, 65536);

    // 2. Setup Three.js Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        precision: "highp",
      });
    } catch (e) {
      console.warn("[Antigravity] WebGL initialization fallback:", e);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(pixelRatio);
    renderer.setClearColor(0x000000, 0);

    // Camera & Raycast Plane
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.z = 3.1;

    const mainScene = new THREE.Scene();
    const raycastPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(12.5, 12.5),
      new THREE.MeshBasicMaterial({ visible: false, side: THREE.DoubleSide })
    );
    mainScene.add(raycastPlane);

    // 3. Create Position DataTexture & Ping-Pong RenderTargets
    const SIZE = 256;
    const texData = new Float32Array(SIZE * SIZE * 4);
    for (let t = 0; t < count; t++) {
      const n = t * 4;
      texData[n + 0] = (rawPoints[t][0] - 250) * (1 / 250);
      texData[n + 1] = (rawPoints[t][1] - 250) * (1 / 250);
      texData[n + 2] = 0;
      texData[n + 3] = 0;
    }

    const posTex = new THREE.DataTexture(texData, SIZE, SIZE, THREE.RGBAFormat, THREE.FloatType);
    posTex.needsUpdate = true;

    const rtOptions = {
      wrapS: THREE.ClampToEdgeWrapping,
      wrapT: THREE.ClampToEdgeWrapping,
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat,
      type: renderer.capabilities.isWebGL2 ? THREE.FloatType : THREE.HalfFloatType,
      depthBuffer: false,
      stencilBuffer: false,
    };

    let rt1 = new THREE.WebGLRenderTarget(SIZE, SIZE, rtOptions);
    let rt2 = new THREE.WebGLRenderTarget(SIZE, SIZE, rtOptions);

    // Clear RTs
    renderer.setRenderTarget(rt1);
    renderer.clear();
    renderer.setRenderTarget(rt2);
    renderer.clear();
    renderer.setRenderTarget(null);

    // 4. Simulation Quad & Material
    const simScene = new THREE.Scene();
    const simCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const simMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uPosition: { value: posTex },
        uPosRefs: { value: posTex },
        uRingPos: { value: new THREE.Vector2(0, 0) },
        uRingRadius: { value: 0.175 },
        uDeltaTime: { value: 0 },
        uRingWidth: { value: ringWidth },
        uRingWidth2: { value: ringWidth2 },
        uRingDisplacement: { value: ringDisplacement },
        uTime: { value: 0 },
      },
      vertexShader: SIM_VERTEX_SHADER,
      fragmentShader: SIM_FRAGMENT_SHADER,
    });
    const simQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), simMaterial);
    simScene.add(simQuad);

    // 5. Points Mesh & Render Material
    const geom = new THREE.BufferGeometry();
    const uvs = new Float32Array(count * 2);
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count * 4);

    for (let e = 0; e < count; e++) {
      const col = e % SIZE;
      const row = Math.floor(e / SIZE);
      uvs[e * 2] = col / SIZE;
      uvs[e * 2 + 1] = row / SIZE;

      seeds[e * 4] = Math.random();
      seeds[e * 4 + 1] = Math.random();
      seeds[e * 4 + 2] = Math.random();
      seeds[e * 4 + 3] = Math.random();
    }

    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geom.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
    geom.setAttribute("seeds", new THREE.BufferAttribute(seeds, 4));

    let particleScale = (width / 2000) * particlesScale;

    const renderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uPosition: { value: posTex },
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color("#2c64ed") }, // Google Chromatic Blue
        uColor2: { value: new THREE.Color("#f84242") }, // Google Chromatic Red / Coral
        uColor3: { value: new THREE.Color("#ffcf03") }, // Google Chromatic Yellow / Amber
        uAlpha: { value: opacity },
        uRingPos: { value: new THREE.Vector2(0, 0) },
        uRez: { value: new THREE.Vector2(width, height) },
        uParticleScale: { value: particleScale },
        uPixelRatio: { value: pixelRatio },
        uColorScheme: { value: 1 }, // Light mode
      },
      vertexShader: RENDER_VERTEX_SHADER,
      fragmentShader: RENDER_FRAGMENT_SHADER,
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });

    const pointsMesh = new THREE.Points(geom, renderMaterial);
    pointsMesh.position.set(0, 0, 0);
    pointsMesh.scale.set(5, 5, 5);
    mainScene.add(pointsMesh);

    // 6. Interaction State & Noise
    const noise = new Noise1D();
    const ringPos = new THREE.Vector2(0, 0);
    const cursorPos = new THREE.Vector2(0, 0);
    const mouse = new THREE.Vector2();
    const intersectionPoint = new THREE.Vector3();
    const raycaster = new THREE.Raycaster();
    let isIntersecting = false;

    // Track mouse pointer across window, with bounds check relative to hero canvas
    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;

      if (px < -100 || px > rect.width + 100 || py < -100 || py > rect.height + 100) {
        isIntersecting = false;
        return;
      }

      mouse.x = (px / rect.width) * 2 - 1;
      mouse.y = -(py / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(raycastPlane);
      if (intersects.length > 0) {
        intersectionPoint.copy(intersects[0].point);
        isIntersecting = true;
      } else {
        isIntersecting = false;
      }
    };

    const onPointerLeave = () => {
      isIntersecting = false;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("mouseleave", onPointerLeave);
    window.addEventListener("pointerleave", onPointerLeave);

    // Resize Handler
    const resize = () => {
      if (!container || !canvas) return;
      width = container.clientWidth;
      height = container.clientHeight;

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      particleScale = (width / 2000) * particlesScale;
      renderMaterial.uniforms.uRez.value.set(width, height);
      renderMaterial.uniforms.uParticleScale.value = particleScale;
      renderMaterial.uniforms.uPixelRatio.value = pixelRatio;
    };

    const ro = new ResizeObserver(() => resize());
    ro.observe(container);

    // Visibility Observer
    let isVisible = true;
    let isTabActive = !document.hidden;
    let rafId: number = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !rafId) {
          lastTime = clock.getElapsedTime();
          loop();
        }
      },
      { threshold: 0.01 }
    );
    observer.observe(container);

    const onVisibilityChange = () => {
      isTabActive = !document.hidden;
      if (isTabActive && isVisible && !rafId) {
        lastTime = clock.getElapsedTime();
        loop();
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    // Warm up the simulation buffer so the ring is fully formed immediately
    for (let i = 0; i < 6; i++) {
      const warmTime = i * 0.05;
      simMaterial.uniforms.uPosition.value = i === 0 ? posTex : rt1.texture;
      simMaterial.uniforms.uTime.value = warmTime;
      simMaterial.uniforms.uDeltaTime.value = 0.05;
      simMaterial.uniforms.uRingRadius.value = 0.175;
      simMaterial.uniforms.uRingPos.value = ringPos;
      simMaterial.uniforms.uRingWidth.value = ringWidth;
      simMaterial.uniforms.uRingWidth2.value = ringWidth2;
      simMaterial.uniforms.uRingDisplacement.value = ringDisplacement;

      renderer.setRenderTarget(rt2);
      renderer.render(simScene, simCamera);
      renderer.setRenderTarget(null);

      const temp = rt1;
      rt1 = rt2;
      rt2 = temp;
    }

    // 7. Render Loop
    const clock = new THREE.Clock();
    let lastTime = clock.getElapsedTime();

    const loop = () => {
      if (!isVisible || !isTabActive) {
        rafId = 0;
        return;
      }

      const time = clock.getElapsedTime();
      const dt = Math.min(0.05, time - lastTime);
      lastTime = time;

      // Wandering Noise Drift
      const n = (noise.getVal(time * 0.66 + 94.234) - 0.5) * 2;
      const r = (noise.getVal(time * 0.75 + 21.028) - 0.5) * 2;

      if (isIntersecting) {
        // Active mouse attraction: ring center shifts smoothly towards cursor
        cursorPos.set(intersectionPoint.x * 0.175 + n * 0.05, intersectionPoint.y * 0.175 + r * 0.05);
        ringPos.set(
          ringPos.x + (cursorPos.x - ringPos.x) * 0.035,
          ringPos.y + (cursorPos.y - ringPos.y) * 0.035
        );
      } else {
        // Idle resting state: gentle wandering centered around zero
        cursorPos.set(n * 0.08, r * 0.05);
        ringPos.set(
          ringPos.x + (cursorPos.x - ringPos.x) * 0.015,
          ringPos.y + (cursorPos.y - ringPos.y) * 0.015
        );
      }

      // Step A: GPU Simulation Pass
      simMaterial.uniforms.uPosition.value = rt1.texture;
      simMaterial.uniforms.uTime.value = time;
      simMaterial.uniforms.uDeltaTime.value = dt;
      simMaterial.uniforms.uRingRadius.value =
        0.175 + Math.sin(time * 1.0) * 0.03 + Math.cos(time * 3.0) * 0.02;
      simMaterial.uniforms.uRingPos.value = ringPos;
      simMaterial.uniforms.uRingWidth.value = ringWidth;
      simMaterial.uniforms.uRingWidth2.value = ringWidth2;
      simMaterial.uniforms.uRingDisplacement.value = ringDisplacement;

      renderer.setRenderTarget(rt2);
      renderer.render(simScene, simCamera);
      renderer.setRenderTarget(null);

      // Step B: Final Particle Render Pass
      renderMaterial.uniforms.uPosition.value = rt2.texture;
      renderMaterial.uniforms.uTime.value = time;
      renderMaterial.uniforms.uRingPos.value = ringPos;
      renderMaterial.uniforms.uParticleScale.value = particleScale;
      renderMaterial.uniforms.uPixelRatio.value = pixelRatio;

      renderer.autoClear = false;
      renderer.clear();
      renderer.render(mainScene, camera);

      // Ping-Pong Swap
      const temp = rt1;
      rt1 = rt2;
      rt2 = temp;

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("mouseleave", onPointerLeave);
      window.removeEventListener("pointerleave", onPointerLeave);
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      ro.disconnect();

      geom.dispose();
      renderMaterial.dispose();
      simMaterial.dispose();
      posTex.dispose();
      rt1.dispose();
      rt2.dispose();
      raycastPlane.geometry.dispose();
      (raycastPlane.material as THREE.Material).dispose();
      renderer.dispose();
    };
  }, [opacity]);

  return (
    <div ref={containerRef} className={`w-full h-full relative pointer-events-none select-none ${className}`}>
      <canvas ref={canvasRef} className="block w-full h-full pointer-events-none" />
    </div>
  );
}
