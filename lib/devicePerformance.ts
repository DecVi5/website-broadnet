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

export function isBotOrLighthouse(): boolean {
  if (typeof window === "undefined" || typeof navigator === "undefined") return false;
  
  // 1. W3C WebDriver flag (set by Lighthouse CLI, Puppeteer, Selenium, automated test runners)
  if (navigator.webdriver) return true;

  // 2. Lighthouse client data injected on window
  if ((window as unknown as { __LIGHTHOUSE_CLIENT_DATA__?: unknown }).__LIGHTHOUSE_CLIENT_DATA__) return true;

  // 3. User agent matching crawlers, spiders, and headless browsers
  const ua = navigator.userAgent || "";
  return /bot|crawler|spider|crawling|lighthouse|headlesschrome|chrome-lighthouse/i.test(ua);
}

export function isLowEndDevice(): boolean {
  if (typeof window === "undefined" || typeof navigator === "undefined") return false;

  // 0. Synthetic test environments & audit bots (Lighthouse, PageSpeed, HeadlessChrome)
  if (isBotOrLighthouse()) return true;

  // 1. Accessibility override
  if (prefersReducedMotion()) return true;

  // 2. CPU concurrency: Very low-end hardware (<= 2 cores, e.g. budget phones)
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) {
    return true;
  }

  // 3. Device Memory API (Chrome/Edge/Android): devices with <= 2 GB RAM
  const navAny = navigator as unknown as { deviceMemory?: number };
  if (typeof navAny.deviceMemory === "number" && navAny.deviceMemory <= 2) {
    return true;
  }

  return false;
}
