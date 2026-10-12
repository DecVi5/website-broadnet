/**
 * Broadnet Analytics Abstraction
 * 
 * Provides safe event dispatch without vendor lock-in.
 * Supports Google Analytics (gtag), Google Tag Manager (dataLayer),
 * or custom event listeners.
 */

export type AnalyticsEvent =
  | "call_click"
  | "whatsapp_click"
  | "form_submit"
  | "coverage_check"
  | "package_click"
  | "lead_click"
  | "quote_request"
  | "comparison_slider_interact"
  | "comparison_preset_click"
  | "colorvu_upgrade_click"
  | "under_development_notify_signup"
  | "under_development_interact"
  | "bill_pay_click";

export interface AnalyticsPayload {
  category?: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
}

export function trackEvent(eventName: AnalyticsEvent, payload?: AnalyticsPayload) {
  if (typeof window === "undefined") return;

  try {
    // 1. Google Analytics (gtag.js)
    if (typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", eventName, {
        event_category: payload?.category || "General",
        event_label: payload?.label || "",
        value: payload?.value,
        ...payload,
      });
    }

    // 2. Google Tag Manager (dataLayer)
    const win = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
    if (Array.isArray(win.dataLayer)) {
      win.dataLayer.push({
        event: eventName,
        ...payload,
      });
    }

    // 3. Custom DOM Event for extensible tracking
    const customEvent = new CustomEvent("broadnet_analytics", {
      detail: { event: eventName, ...payload },
    });
    window.dispatchEvent(customEvent);

    // 4. Debug in development
    if (process.env.NODE_ENV === "development") {
      console.log(`[Analytics Event: ${eventName}]`, payload);
    }
  } catch (err) {
    // Analytics should never break user interactions
    console.debug("[Analytics Error]", err);
  }
}
