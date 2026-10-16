/**
 * Utilities for detecting device hardware capabilities and user preferences
 * to optimize animations, frame pacing, and resource usage on low-end devices.
 */

export function isTouchDevice(): boolean {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(pointer: coarse)").matches ||
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0
  );
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isLowEndDevice(): boolean {
  if (typeof window === "undefined" || typeof navigator === "undefined") return false;

  // 1. Accessibility override
  if (prefersReducedMotion()) return true;

  // 2. CPU concurrency: Budget mobile and low-power hardware typically have <= 4 cores
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) {
    return true;
  }

  // 3. Device Memory API (Chrome/Edge/Android): devices with <= 4 GB RAM
  const navAny = navigator as unknown as { deviceMemory?: number };
  if (typeof navAny.deviceMemory === "number" && navAny.deviceMemory <= 4) {
    return true;
  }

  return false;
}
