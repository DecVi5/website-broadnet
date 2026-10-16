"use client";

import React, { useEffect, useRef } from "react";
import { isLowEndDevice, isTouchDevice, prefersReducedMotion } from "@/lib/devicePerformance";

// Google Antigravity chromatic spectrum by angle (0° to 360°)
// 0° (Right): Crimson Red (#EA4335 / #EF1313)
// 60° (Top-Right): Coral Orange (#F97316)
// 100° (Top): Golden Yellow (#FBBC04)
// 140° (Top-Left): Lime Gold (#EAB308)
// 180° - 220° (Left): Vibrant Google Blue & Sky Cyan (#1A73E8 / #3186FF)
// 270° (Bottom): Deep Violet & BroadNet Purple (#7C3AED / #4E0DBA)
// 320° (Bottom-Right): Magenta & Pink (#A855F7 / #EC4899)
function getAntigravityColor(angleRad: number): string {
  let deg = ((angleRad * 180) / Math.PI) % 360;
  if (deg < 0) deg += 360;

  if (deg >= 340 || deg < 25) {
    return "#EA4335";
  } else if (deg >= 25 && deg < 65) {
    return "#F97316";
  } else if (deg >= 65 && deg < 115) {
    return "#FBBC04";
  } else if (deg >= 115 && deg < 155) {
    return "#EAB308";
  } else if (deg >= 155 && deg < 235) {
    return deg < 195 ? "#3186FF" : "#1A73E8";
  } else if (deg >= 235 && deg < 290) {
    return "#4E0DBA";
  } else if (deg >= 290 && deg < 340) {
    return "#A855F7";
  }
  return "#3186FF";
}

interface FluidGranule {
  baseXRatio: number;     // Normalized home X [0..1]
  baseYRatio: number;     // Normalized home Y [0..1]
  homeAngle: number;      // Resting tangent angle
  x: number;              // Current physical X
  y: number;              // Current physical Y
  vx: number;             // Fluid velocity X
  vy: number;             // Fluid velocity Y
  length: number;         // Capsule length (8.5px - 14px)
  width: number;          // Capsule thickness (2.6px - 3.2px)
  isDot: boolean;         // Circular speckle flag
  color: string;          // Chromatic spectrum color
  maxOpacity: number;     // Peak opacity when revealed (0.75 - 0.95)
  opacity: number;        // Current opacity (0 at rest)
  trailLife: number;      // Activation energy (0 at rest)
  angle: number;          // Current orientation angle
  swirlDir: number;       // +1 or -1 for natural eddy currents
}

export interface AntigravityProps {
  className?: string;
  [key: string]: unknown;
}

export default function Antigravity({ className = "" }: AntigravityProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mouseRef = useRef<{
    x: number;
    y: number;
    lastX: number;
    lastY: number;
    vx: number;
    vy: number;
    active: boolean;
    lastMoveTime: number;
  }>({
    x: -9999,
    y: -9999,
    lastX: -9999,
    lastY: -9999,
    vx: 0,
    vy: 0,
    active: false,
    lastMoveTime: 0,
  });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let rafId: number = 0;
    let isVisible = true;
    let isTabActive = true;
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || 750;

    const isTouch = isTouchDevice();
    const isLowEnd = isLowEndDevice();
    const shouldReduceMotion = prefersReducedMotion();

    const dpr = isLowEnd ? 1 : Math.min(window.devicePixelRatio || 1, 2);
    let cachedRect = canvas.getBoundingClientRect();

    const resize = () => {
      if (!container || !canvas) return;
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cachedRect = canvas.getBoundingClientRect();
    };

    resize();

    // Fluid Granule initialization matching Google Antigravity layout
    const granules: FluidGranule[] = [];
    const numRings = isLowEnd ? 8 : isTouch || width < 768 ? 10 : 14;
    const minRadius = Math.min(width, height) * 0.16;
    const maxRadius = Math.max(width, height) * 0.82;
    const ringStep = (maxRadius - minRadius) / numRings;

    const centerX = width * 0.5;
    const centerY = height * 0.46;

    for (let rIndex = 0; rIndex < numRings; rIndex++) {
      const ringRadius = minRadius + rIndex * ringStep;
      const circumference = 2 * Math.PI * ringRadius;
      const granuleSpacing = 42 + rIndex * 2.2;
      const granulesInRing = Math.floor(circumference / granuleSpacing);

      for (let g = 0; g < granulesInRing; g++) {
        const angleJitter = (Math.random() - 0.5) * (Math.PI / granulesInRing) * 0.6;
        const baseAngle = (g / granulesInRing) * Math.PI * 2 + rIndex * 0.25 + angleJitter;
        const radialJitter = (Math.random() - 0.5) * (ringStep * 0.45);

        // Exact approved grain size: tiny dots (2.2px) and capsules (2.6-3.2px width, 8.5-14px length)
        const isDot = Math.random() < 0.16;
        const widthPx = isDot ? 2.2 : 2.6 + Math.random() * 0.6;
        const lengthPx = isDot ? 2.2 : 8.5 + Math.random() * 5.5;

        const color = getAntigravityColor(baseAngle);
        const maxOpacity = 0.75 + Math.random() * 0.22;
        const effectiveR = ringRadius + radialJitter;

        const homeX = centerX + Math.cos(baseAngle) * effectiveR;
        const homeY = centerY + Math.sin(baseAngle) * effectiveR;

        granules.push({
          baseXRatio: homeX / width,
          baseYRatio: homeY / height,
          homeAngle: baseAngle + Math.PI / 2,
          x: homeX,
          y: homeY,
          vx: 0,
          vy: 0,
          length: lengthPx,
          width: widthPx,
          isDot,
          color,
          maxOpacity,
          opacity: 0,        // Completely hidden at rest!
          trailLife: 0,      // Zero excitation energy at rest
          angle: baseAngle + Math.PI / 2,
          swirlDir: Math.random() > 0.5 ? 1 : -1,
        });
      }
    }

    // Pointer move & fluid velocity tracker
    const onPointerMove = (e: PointerEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;

      if (px >= -80 && px <= rect.width + 80 && py >= -80 && py <= rect.height + 80) {
        const m = mouseRef.current;
        const now = performance.now();
        const dtMs = Math.max(10, Math.min(60, now - m.lastMoveTime));

        if (m.lastX !== -9999) {
          // Compute filtered fluid velocity imparted by cursor
          const rawVx = ((px - m.lastX) / dtMs) * 16;
          const rawVy = ((py - m.lastY) / dtMs) * 16;
          // Smooth low-pass filter to eliminate jitter while retaining high responsiveness
          m.vx = m.vx * 0.35 + Math.max(-26, Math.min(26, rawVx)) * 0.65;
          m.vy = m.vy * 0.35 + Math.max(-26, Math.min(26, rawVy)) * 0.65;
        }

        m.lastX = px;
        m.lastY = py;
        m.x = px;
        m.y = py;
        m.active = true;
        m.lastMoveTime = now;
      }
    };

    const onPointerUp = () => {
      // Touch release / pointer up: gracefully decelerate
      mouseRef.current.vx *= 0.5;
      mouseRef.current.vy *= 0.5;
    };

    const onPointerLeave = () => {
      const m = mouseRef.current;
      m.active = false;
      m.vx = 0;
      m.vy = 0;
      m.x = -9999;
      m.y = -9999;
      m.lastX = -9999;
      m.lastY = -9999;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    document.addEventListener("mouseleave", onPointerLeave);

    const onScroll = () => {
      if (canvas) cachedRect = canvas.getBoundingClientRect();
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !rafId) {
          lastTime = performance.now();
          loop(lastTime);
        }
      },
      { threshold: 0.01 }
    );
    observer.observe(container);

    const onVisibilityChange = () => {
      isTabActive = !document.hidden;
      if (isTabActive && isVisible && !rafId) {
        lastTime = performance.now();
        loop(lastTime);
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const ro = new ResizeObserver(() => resize());
    ro.observe(container);

    // Fluid Physics & Render Loop
    let lastTime = performance.now();

    const loop = (now: number) => {
      if (!isVisible || !isTabActive) {
        rafId = 0;
        return;
      }

      lastTime = now;
      const m = mouseRef.current;

      // When the mouse is stationary, its velocity smoothly dissipates
      const timeSinceMove = now - m.lastMoveTime;
      if (timeSinceMove > 50) {
        m.vx *= 0.86;
        m.vy *= 0.86;
        if (Math.abs(m.vx) < 0.05) m.vx = 0;
        if (Math.abs(m.vy) < 0.05) m.vy = 0;
      }

      const mouseSpeed = Math.hypot(m.vx, m.vy);
      // Fluid influence radius: particles within this zone react fluidly
      const revealRadius = isTouch ? 180 : 230;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < granules.length; i++) {
        const p = granules[i];
        const homeX = p.baseXRatio * width;
        const homeY = p.baseYRatio * height;

        const dx = p.x - m.x;
        const dy = p.y - m.y;
        const dist = Math.hypot(dx, dy);

        // 1. Fluid Proximity Reaction (only excited by active cursor motion)
        const isMouseMoving = m.active && timeSinceMove < 120 && mouseSpeed > 0.15;

        if (isMouseMoving && dist < revealRadius) {
          const prox = 1 - dist / revealRadius;
          // Smooth cubic hermite falloff
          const smoothProx = prox * prox * (3 - 2 * prox);

          // Fluid excitation: motion injects energy into the fluid field
          const motionEnergy = Math.min(1.0, mouseSpeed * 0.18);
          const targetEnergy = smoothProx * (0.35 + 0.65 * motionEnergy);
          p.trailLife = Math.max(p.trailLife, targetEnergy);

          if (dist > 1) {
            const nx = dx / dist; // Normalized outward normal from cursor
            const ny = dy / dist;
            // Tangent perpendicular vector (curl direction around cursor)
            const tx = -ny;
            const ty = nx;

            // A. Fluid Streamlines (flow parts smoothly around the cursor)
            const vDotN = -(m.vx * nx + m.vy * ny); // Velocity moving towards particle
            if (vDotN > 0) {
              // Cursor is advancing toward particle: push along streamlines
              const streamPush = vDotN * smoothProx * 0.55;
              p.vx += nx * streamPush;
              p.vy += ny * streamPush;

              // Tangential diversion (fluid slipping sideways around the obstacle)
              const crossZ = m.vx * ny - m.vy * nx;
              const side = crossZ >= 0 ? 1 : -1;
              const divert = vDotN * smoothProx * 0.35 * side;
              p.vx += tx * divert;
              p.vy += ty * divert;
            }

            // B. Fluid Viscous Drag (wake pulled along with cursor movement)
            if (mouseSpeed > 0.3) {
              const dragFactor = smoothProx * smoothProx * 0.28;
              p.vx += m.vx * dragFactor;
              p.vy += m.vy * dragFactor;
            }

            // C. Fluid Swirl / Micro-Vortex (natural organic eddies)
            const swirl = Math.sin(smoothProx * Math.PI) * p.swirlDir * 1.6;
            p.vx += tx * swirl;
            p.vy += ty * swirl;

            // D. Soft Fluid Pressure (gentle repulsion on near proximity)
            const pressure = smoothProx * smoothProx * 2.8;
            p.vx += nx * pressure;
            p.vy += ny * pressure;
          }
        }

        // 2. Dissipation towards REST (completely hidden at rest!)
        // When mouse is stationary or moving away, fluid wake dissipates quickly
        if (!isMouseMoving) {
          p.trailLife *= 0.86;
        } else {
          p.trailLife *= 0.93;
        }

        if (p.trailLife < 0.005) {
          p.trailLife = 0;
        }

        // Target opacity based on fluid excitation energy (0 at rest!)
        const targetOpacity = Math.pow(p.trailLife, 1.15) * p.maxOpacity;
        p.opacity += (targetOpacity - p.opacity) * (isMouseMoving ? 0.24 : 0.38);

        // Snap to true 0 opacity so no faint ghost particles linger at rest
        if (p.opacity < 0.015) {
          p.opacity = 0;
        }

        // 3. Fluid Elastic Relaxation (viscous return to home concentric ring)
        const springX = (homeX - p.x) * 0.038;
        const springY = (homeY - p.y) * 0.038;
        p.vx += springX;
        p.vy += springY;

        // Fluid Viscous Damping
        p.vx *= 0.915;
        p.vy *= 0.915;

        // Position update
        p.x += p.vx;
        p.y += p.vy;

        // 4. Streamline Particle Orientation (aligns with fluid velocity)
        const currentSpeed = Math.hypot(p.vx, p.vy);
        let targetAngle = p.homeAngle;
        if (currentSpeed > 0.4) {
          targetAngle = Math.atan2(p.vy, p.vx);
        }

        let angleDiff = targetAngle - p.angle;
        while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
        p.angle += angleDiff * 0.16;

        // 5. Draw only when visible (saves 100% CPU/GPU fillrate at rest!)
        if (p.opacity > 0.015) {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.angle);
          ctx.globalAlpha = p.opacity;
          ctx.fillStyle = p.color;

          if (p.isDot) {
            ctx.beginPath();
            ctx.arc(0, 0, p.width / 2, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.beginPath();
            if (typeof ctx.roundRect === "function") {
              ctx.roundRect(-p.length / 2, -p.width / 2, p.length, p.width, p.width / 2);
            } else {
              ctx.rect(-p.length / 2, -p.width / 2, p.length, p.width);
            }
            ctx.fill();
          }

          ctx.restore();
        }
      }

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("mouseleave", onPointerLeave);
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className={`w-full h-full relative pointer-events-none select-none ${className}`}>
      <canvas ref={canvasRef} className="block w-full h-full pointer-events-none" />
    </div>
  );
}
