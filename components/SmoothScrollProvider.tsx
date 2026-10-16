"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { isLowEndDevice } from "@/lib/devicePerformance";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (lenisRef.current && typeof window !== "undefined" && !window.location.hash) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  useEffect(() => {
    // Respect prefers-reduced-motion, coarse pointer (mobile touch), or low-end hardware
    if (typeof window !== "undefined") {
      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        window.matchMedia("(pointer: coarse)").matches ||
        isLowEndDevice()
      ) {
        return;
      }
    }

    // Initialize Lenis with snappy, responsive deceleration for high-refresh desktop
    const lenis = new Lenis({
      duration: 0.75,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      infinite: false,
      autoRaf: false,
    });

    lenisRef.current = lenis;
    if (typeof window !== "undefined") {
      (window as unknown as { lenis: Lenis }).lenis = lenis;
    }

    let rafId: number = 0;
    let isTabVisible = true;

    function raf(time: number) {
      if (isTabVisible) {
        lenis.raf(time);
      }
      rafId = requestAnimationFrame(raf);
    }

    const onVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    rafId = requestAnimationFrame(raf);

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      if (rafId) cancelAnimationFrame(rafId);
      lenis.destroy();
      if (typeof window !== "undefined") {
        (window as unknown as { lenis: Lenis | null }).lenis = null;
      }
    };
  }, []);

  return <>{children}</>;
}
