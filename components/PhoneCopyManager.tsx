"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { Check, Copy, Phone, ArrowUpRight } from "lucide-react";

export function copyPhoneNumberToClipboard(
  rawNumber: string = "8681888111",
  displayNumber: string = "86818 88111"
): boolean {
  if (typeof window === "undefined") return false;

  const textToCopy = displayNumber || rawNumber;

  let success = false;
  if (navigator?.clipboard?.writeText) {
    navigator.clipboard.writeText(textToCopy).catch(() => {
      // Fallback
      fallbackCopy(textToCopy);
    });
    success = true;
  } else {
    success = fallbackCopy(textToCopy);
  }

  // Trigger tactile haptic on supported devices
  if (typeof navigator !== "undefined" && "vibrate" in navigator) {
    try {
      navigator.vibrate(35);
    } catch {
      /* ignore */
    }
  }

  // Dispatch custom event to notify PhoneCopyManager toast
  window.dispatchEvent(
    new CustomEvent("phone-copied", {
      detail: {
        number: displayNumber,
        rawNumber: rawNumber.replace(/\D/g, ""),
      },
    })
  );

  return success;
}

function fallbackCopy(text: string): boolean {
  try {
    const el = document.createElement("textarea");
    el.value = text;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(el);
    return ok;
  } catch {
    return false;
  }
}

export default function PhoneCopyManager() {
  const [toast, setToast] = useState<{
    visible: boolean;
    number: string;
    rawNumber: string;
  }>({
    visible: false,
    number: "86818 88111",
    rawNumber: "8681888111",
  });

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const showToast = useCallback((number: string, rawNumber: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);

    setToast({
      visible: true,
      number: number || "86818 88111",
      rawNumber: rawNumber || "8681888111",
    });

    timerRef.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3200);
  }, []);

  useEffect(() => {
    // 1. Listen for custom "phone-copied" events dispatched by code
    const handleCopied = (e: Event) => {
      const customEvent = e as CustomEvent<{ number?: string; rawNumber?: string }>;
      const num = customEvent.detail?.number || "86818 88111";
      const raw = customEvent.detail?.rawNumber || "8681888111";
      showToast(num, raw);
    };

    window.addEventListener("phone-copied", handleCopied);

    // 2. Global delegate click listener on the entire document
    // Any link or element with href="tel:..." or data-copy-phone or containing 8681888111 will copy to clipboard!
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Find closest anchor or button or phone-marked element
      const trigger = target.closest(
        'a[href^="tel:"], [data-copy-phone], button[data-copy-phone], .copy-phone-trigger, .font-phone'
      ) as HTMLElement | null;

      if (trigger) {
        let extractedNumber = "86818 88111";
        let raw = "8681888111";

        if (trigger instanceof HTMLAnchorElement && trigger.href.startsWith("tel:")) {
          const hrefNum = trigger.href.replace(/^tel:/, "").trim();
          raw = hrefNum.replace(/\D/g, "");
          extractedNumber = trigger.innerText?.trim() || hrefNum;
          // If the inner text contains "Call 86818 88111", extract just the number
          const match = extractedNumber.match(/\+?\d[\d\s-]{7,}\d/);
          if (match) {
            extractedNumber = match[0].trim();
          } else {
            extractedNumber = "86818 88111";
          }
        } else if (trigger.classList.contains("font-phone") || trigger.hasAttribute("data-copy-phone")) {
          const text = trigger.innerText?.trim();
          const match = text.match(/\+?\d[\d\s-]{7,}\d/);
          if (match) {
            extractedNumber = match[0].trim();
            raw = extractedNumber.replace(/\D/g, "");
          }
        }

        // Copy to clipboard
        copyPhoneNumberToClipboard(raw, extractedNumber);

        // On desktop precision pointers (mouse/trackpad), prevent tel: action that opens Skype/FaceTime errors
        const isDesktop =
          typeof window !== "undefined" &&
          window.matchMedia("(pointer: fine)").matches &&
          window.innerWidth >= 768;

        if (isDesktop && trigger instanceof HTMLAnchorElement && trigger.href.startsWith("tel:")) {
          e.preventDefault();
        }
      }
    };

    document.addEventListener("click", handleClick, { capture: true });

    return () => {
      window.removeEventListener("phone-copied", handleCopied);
      document.removeEventListener("click", handleClick, { capture: true });
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [showToast]);

  if (!toast.visible) return null;

  return (
    <aside
      aria-label="Notification"
      aria-live="polite"
      role="status"
      className="fixed top-5 left-1/2 -translate-x-1/2 z-[999999] pointer-events-auto transition-all duration-300 ease-out animate-hero-fade-in"
    >
      <div className="flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-[#16143E]/95 backdrop-blur-md text-white border border-[#4E0DBA]/40 shadow-2xl shadow-[#16143E]/50">
        {/* Animated Green Check Badge */}
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#25D366] text-white flex-shrink-0 shadow-sm animate-pulse">
          <Check size={14} strokeWidth={3} />
        </span>

        {/* Message */}
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <span className="text-white/80 font-medium">Copied</span>
          <span className="font-phone font-bold text-amber-300 tracking-wider px-1.5 py-0.5 rounded bg-white/10 border border-white/15">
            {toast.number}
          </span>
          <span className="text-white/80 font-medium hidden sm:inline">to clipboard!</span>
        </div>

        {/* Action quick links */}
        <div className="flex items-center gap-1.5 pl-2 border-l border-white/20">
          <a
            href={`tel:+91${toast.rawNumber}`}
            className="px-2.5 py-1 rounded-full bg-[#EF1313] hover:bg-[#dc2626] text-white text-[11px] font-bold flex items-center gap-1 transition-colors cursor-pointer"
            title="Call this number directly"
          >
            <Phone size={11} />
            <span>Call</span>
          </a>
          <a
            href={`https://wa.me/91${toast.rawNumber}?text=Hello%20Broadnet%2C%20I%20have%20an%20enquiry.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#4ade80] text-[11px] font-bold flex items-center gap-1 transition-colors cursor-pointer"
            title="Chat on WhatsApp"
          >
            <span>WhatsApp</span>
            <ArrowUpRight size={11} />
          </a>
        </div>
      </div>
    </aside>
  );
}
