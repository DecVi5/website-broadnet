"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { isLowEndDevice } from "@/lib/devicePerformance";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });


export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lenisRef = useRef<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (lenisRef.current && typeof window !== "undefined" && !window.location.hash) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  useEffect(() => {
    // Strictly skip on mobile touch, reduced motion, small screens, or low-power hardware
    if (typeof window === "undefined") return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.innerWidth < 1024 ||
      isLowEndDevice()
    ) {
      return;
    }

    let isCancelled = false;
    let rafId: number = 0;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let activeLenis: any = null;

    // Dynamically import Lenis so mobile devices never download or parse it
    import("lenis").then(({ default: Lenis }) => {
      if (isCancelled) return;

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
      activeLenis = lenis;
      (window as unknown as { lenis: unknown }).lenis = lenis;

      let isTabVisible = true;
      function raf(time: number) {
        if (isTabVisible && lenisRef.current) {
          lenisRef.current.raf(time);
        }
        rafId = requestAnimationFrame(raf);
      }

      const onVisibilityChange = () => {
        isTabVisible = !document.hidden;
      };
      document.addEventListener("visibilitychange", onVisibilityChange);

      rafId = requestAnimationFrame(raf);
    });

    return () => {
      isCancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
      if (activeLenis) activeLenis.destroy();
      lenisRef.current = null;
      if (typeof window !== "undefined") {
        (window as unknown as { lenis: unknown }).lenis = null;
      }
    };
  }, []);

  return (
    <>
      <CustomCursor />
      {children}
    </>
  );
}

