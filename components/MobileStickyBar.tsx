"use client";

import { Phone, MessageCircle, Send } from "lucide-react";
import { scrollToWithPhysics } from "@/lib/scrollPhysics";
import { trackEvent } from "@/lib/analytics";
import { useLanguage } from "@/lib/i18n";

export default function MobileStickyBar() {
  return (
    <aside
      aria-label="Quick Mobile Contact Bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-3 py-2 bg-white/95 backdrop-blur-2xl border-t border-[#16143E]/12 shadow-[0_-8px_30px_rgba(22,20,62,0.16)]"
      style={{ paddingBottom: "max(0.6rem, env(safe-area-inset-bottom))" }}
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* 1. Direct Call (min-h-[48px] tap target) */}
        <a
          href="tel:+918681888111"
          onClick={() => trackEvent("call_click", { category: "MobileStickyBar" })}
          className="flex flex-col items-center justify-center min-h-[48px] py-1 px-1 rounded-xl bg-[#16143E]/5 hover:bg-[#16143E]/10 border border-[#16143E]/10 text-[#16143E] active:scale-95 transition-all text-center"
          aria-label="Call Broadnet support directly"
        >
          <Phone size={16} className="text-[#EF1313] mb-0.5" />
          <span className="text-[11px] font-bold" style={{ fontFamily: "Syne, sans-serif" }}>
            Call Now
          </span>
        </a>

        {/* 2. WhatsApp (min-h-[48px] tap target) */}
        <a
          href="https://wa.me/918681888111?text=Hello%20Broadnet%2C%20I%20would%20like%20to%20enquire%20about%20your%20services%20and%20get%20a%20free%20site%20visit."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { category: "MobileStickyBar" })}
          className="flex flex-col items-center justify-center min-h-[48px] py-1 px-1 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/35 text-[#16143E] active:scale-95 transition-all text-center relative"
          aria-label="Chat with Broadnet on WhatsApp"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 absolute top-1.5 right-2 animate-ping" />
          <MessageCircle size={16} className="text-[#25D366] mb-0.5" />
          <span className="text-[11px] font-bold text-[#15803d]" style={{ fontFamily: "Syne, sans-serif" }}>
            WhatsApp
          </span>
        </a>

        {/* 3. Free Quote / Site Visit (min-h-[48px] tap target) */}
        <button
          type="button"
          onClick={() => {
            trackEvent("quote_request", { category: "MobileStickyBar" });
            if (document.getElementById("enquiry")) {
              scrollToWithPhysics("enquiry");
            } else if (document.getElementById("cctv-quote-form")) {
              scrollToWithPhysics("cctv-quote-form");
            } else {
              window.location.href = "/contact#enquiry";
            }
          }}
          className="flex flex-col items-center justify-center min-h-[48px] py-1 px-1 rounded-xl bg-[#EF1313] hover:bg-[#d81010] text-white shadow-md shadow-[#EF1313]/30 active:scale-95 transition-all text-center cursor-pointer glow-btn-crimson"
          aria-label="Request a free site visit and quotation"
        >
          <Send size={15} className="text-white mb-0.5" />
          <span className="text-[11px] font-bold" style={{ fontFamily: "Syne, sans-serif" }}>
            Free Quote
          </span>
        </button>
      </div>
    </aside>
  );
}
