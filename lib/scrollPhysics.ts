"use client";

import { prefersReducedMotion } from "@/lib/devicePerformance";

/**
 * Snappy physical smooth scrolling with responsive deceleration and soft stopping cushion.
 */
export function scrollToWithPhysics(
  targetId: string,
  options?: {
    offset?: number;
    duration?: number;
    onArrival?: () => void;
  }
) {
  if (typeof window === "undefined") return;

  const id = targetId.replace(/^#/, "");
  const targetEl = document.getElementById(id);
  if (!targetEl) return;

  // Calculate dynamic framing offset
  let offset = options?.offset;
  if (offset === undefined) {
    if (id === "enquiry") {
      const cardHeight = targetEl.offsetHeight || 440;
      const vh = window.innerHeight;
      // Vertically center the form card if it fits, with minimum 76px top buffer below fixed header
      offset = Math.max(76, Math.round((vh - cardHeight) / 2));
    } else {
      offset = 88; // 88px fixed header safe offset
    }
  }

  const targetY = Math.max(0, targetEl.getBoundingClientRect().top + window.scrollY - offset);
  const startY = window.scrollY;
  const distance = targetY - startY;

  // Dispatch scroll start event
  window.dispatchEvent(new CustomEvent("broadnet:scroll-start", { detail: { targetId: id } }));

  // If user prefers reduced motion, jump directly with 0 latency
  if (prefersReducedMotion()) {
    window.scrollTo({ top: targetY, behavior: "instant" as ScrollBehavior });
    triggerArrivalAnimation(targetEl, id);
    options?.onArrival?.();
    return;
  }

  // If Lenis is active, use its motion-graphic easing with snappy 0.7s duration
  const lenis = (window as unknown as { lenis?: { scrollTo: (target: HTMLElement, opts: Record<string, unknown>) => void } }).lenis;
  if (lenis) {
    lenis.scrollTo(targetEl, {
      offset: -offset,
      duration: 0.72,
      onComplete: () => {
        triggerArrivalAnimation(targetEl, id);
        options?.onArrival?.();
      },
    });
    return;
  }

  // If already at position
  if (Math.abs(distance) < 8) {
    triggerArrivalAnimation(targetEl, id);
    options?.onArrival?.();
    return;
  }

  // Snappy physics transit: swift glide with cushioned deceleration (320ms - 580ms max)
  const duration = options?.duration ?? Math.min(580, Math.max(320, Math.abs(distance) * 0.26));
  let startTime: number | null = null;

  // Ease-Out Quart: high initial momentum, rapid transit, gentle cushioned stop
  const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

  function step(timestamp: number) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeOutQuart(progress);

    window.scrollTo({
      top: startY + distance * ease,
      behavior: "instant" as ScrollBehavior,
    });

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      window.scrollTo({ top: targetY, behavior: "instant" as ScrollBehavior });
      const currentTarget = document.getElementById(id);
      if (currentTarget) {
        triggerArrivalAnimation(currentTarget, id);
      }
      options?.onArrival?.();
    }
  }

  requestAnimationFrame(step);
}

export function triggerArrivalAnimation(element: HTMLElement, id: string) {
  window.dispatchEvent(new CustomEvent("broadnet:section-arrived", { detail: { targetId: id } }));

  if (prefersReducedMotion()) return;

  element.classList.remove("section-arrival-cushion");
  // Use RAF to re-apply animation class without forced synchronous DOM reflow
  requestAnimationFrame(() => {
    element.classList.add("section-arrival-cushion");
  });

  setTimeout(() => {
    element.classList.remove("section-arrival-cushion");
  }, 1300);
}
