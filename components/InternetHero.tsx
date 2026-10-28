"use client";

import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { scrollToWithPhysics } from "@/lib/scrollPhysics";
import { trackEvent } from "@/lib/analytics";

export default function InternetHero() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 bg-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #4E0DBA 1.2px, transparent 1.2px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex justify-center mb-6">
          <Breadcrumbs
            items={[{ label: "Fiber Internet" }]}
            variant="light"
          />
        </div>

        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="hero-fade-in inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4E0DBA] mb-3 sm:mb-4">
            <span>ICT Infrastructure</span>
          </div>

          <h1 className="hero-fade-in text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#16143E] leading-[1.14] mb-4 sm:mb-6 font-display tracking-tight text-center">
            100+ km of Your{" "}
            <span className="text-gradient">Own Fibre Network</span>
          </h1>

          <p className="hero-fade-in text-[#16143E]/75 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto font-body text-center">
            Broadnet operates its own optical fibre backbone across Avadi — delivering symmetric, dedicated high-speed internet to homes and enterprises with reliable fibre continuity.
          </p>

          <div className="hero-fade-in flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 w-full max-w-xs sm:max-w-none">
            <button
              type="button"
              onClick={() => {
                trackEvent("coverage_check", { category: "InternetHero", label: "CheckAvailability" });
                scrollToWithPhysics("enquiry");
              }}
              className="btn-crimson min-h-[48px] px-6 sm:px-7 text-sm sm:text-base font-bold justify-center shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              <span>Check Fibre Availability</span>
              <ArrowRight size={16} aria-hidden="true" />
            </button>

            <a
              href="https://wa.me/918681888111?text=Hello%20Broadnet%2C%20I%20would%20like%20to%20enquire%20about%20Broadnet%20Fibre%20Internet%20plans."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { category: "InternetHero", label: "WhatsAppQuery" })}
              className="min-h-[48px] px-5 sm:px-6 rounded-full bg-[#16143E]/[0.04] hover:bg-[#16143E]/[0.08] border border-[#16143E]/12 text-[#16143E]/80 hover:text-[#16143E] text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 transition-transform duration-150 active:scale-[0.96] w-full sm:w-auto"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="hero-fade-in flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-1">
            <div
              role="status"
              aria-label="Network status: Operational"
              className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20"
            >
              <span
                className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse motion-reduce:animate-none"
                aria-hidden="true"
              />
              <span className="text-xs sm:text-sm font-semibold text-[#16143E]/90">
                Network Operational
              </span>
            </div>
            <div className="text-xs sm:text-sm font-medium text-[#16143E]/75">
              2,500+ active subscribers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

