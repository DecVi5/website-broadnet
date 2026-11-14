"use client";

import { useEffect, useRef, useState } from "react";
import { isLowEndDevice, prefersReducedMotion } from "@/lib/devicePerformance";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });
  const isHovering = useRef(false);
  const isClicked = useRef(false);
  const isOverInput = useRef(false);
  const isVisible = useRef(false);
  const rafId = useRef<number>(0);

  useEffect(() => {
    // Only enable on desktop precision pointer devices with sufficient hardware
    if (
      typeof window === "undefined" ||
      window.matchMedia("(pointer: coarse)").matches ||
      prefersReducedMotion() ||
      isLowEndDevice()
    ) {
      return;
    }

    setEnabled(true);

    let isLoopRunning = false;
    let currentScale = 1;

    const requestTick = () => {
      if (!isLoopRunning) {
        isLoopRunning = true;
        rafId.current = requestAnimationFrame(animate);
      }
    };

    const updateRingStyle = () => {
      const el = ringRef.current;
      if (!el) return;

      if (!isVisible.current || isOverInput.current) {
        el.style.opacity = "0";
        return;
      }

      el.style.opacity = "1";
      if (isHovering.current) {
        el.style.borderColor = "#EF1313";
        el.style.boxShadow =
          "0 0 16px 3px rgba(239,19,19,0.35), 0 0 28px 6px rgba(239,19,19,0.15)";
      } else {
        el.style.borderColor = "rgba(78, 13, 186, 0.45)";
        el.style.boxShadow =
          "0 0 12px 2px rgba(78,13,186,0.25)";
      }
    };

    const animate = () => {
      const factor = 0.28;
      const dx = pos.current.x - ring.current.x;
      const dy = pos.current.y - ring.current.y;
      ring.current.x += dx * factor;
      ring.current.y += dy * factor;

      const targetScale = isClicked.current ? 0.75 : isHovering.current ? 1.35 : 1;
      currentScale += (targetScale - currentScale) * 0.2;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x.toFixed(1)}px, ${ring.current.y.toFixed(1)}px, 0) scale(${currentScale.toFixed(2)})`;
      }

      // Stop loop when resting to conserve CPU
      if (Math.abs(dx) > 0.2 || Math.abs(dy) > 0.2 || Math.abs(targetScale - currentScale) > 0.01) {
        rafId.current = requestAnimationFrame(animate);
      } else {
        isLoopRunning = false;
      }
    };

    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      if (!isVisible.current) {
        isVisible.current = true;
        ring.current.x = e.clientX;
        ring.current.y = e.clientY;
        updateRingStyle();
      }
      requestTick();
    };

    const onDown = () => {
      isClicked.current = true;
      requestTick();
    };

    const onUp = () => {
      isClicked.current = false;
      requestTick();
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInput = !!target.closest("input, textarea, select, [contenteditable='true']");
      const isInteractive = !isInput && !!target.closest(
        "a, button, [role='button'], input[type='submit'], .interactive, .cursor-pointer"
      );

      let changed = false;
      if (isOverInput.current !== isInput) {
        isOverInput.current = isInput;
        changed = true;
      }
      if (isHovering.current !== isInteractive) {
        isHovering.current = isInteractive;
        changed = true;
      }

      if (changed) {
        updateRingStyle();
        requestTick();
      }
    };

    const onLeaveWindow = () => {
      isVisible.current = false;
      updateRingStyle();
    };

    const onEnterWindow = () => {
      isVisible.current = true;
      updateRingStyle();
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("mouseup", onUp, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseleave", onLeaveWindow);
    document.addEventListener("mouseenter", onEnterWindow);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeaveWindow);
      document.removeEventListener("mouseenter", onEnterWindow);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ringRef}
      className="cursor-ring pointer-events-none fixed top-0 left-0 rounded-full z-[99998] will-change-transform"
      style={{
        opacity: 0,
      }}
    />
  );
}
