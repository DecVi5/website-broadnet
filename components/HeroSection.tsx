"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  ArrowRight,
  Sparkles,
  ChevronDown,
  ShieldCheck,
  Award,
} from "lucide-react";
import { scrollToWithPhysics } from "@/lib/scrollPhysics";
import { COMPANY_NUMBERS } from "@/data/services";
import { useLanguage } from "@/lib/i18n";
import { trackEvent } from "@/lib/analytics";

function MobileAntigravityFallback() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-[#2c64ed]/25" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-[#f84242]/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full border border-[#ffcf03]/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] rounded-full bg-radial from-[#2c64ed]/[0.08] via-[#f84242]/[0.04] to-transparent blur-2xl" />
      <span className="absolute top-[40%] left-[24%] w-4 h-1.5 rounded-full bg-[#2c64ed]/40 -rotate-12" />
      <span className="absolute top-[58%] right-[24%] w-4 h-1.5 rounded-full bg-[#f84242]/40 rotate-45" />
      <span className="absolute top-[32%] right-[30%] w-3 h-1.5 rounded-full bg-[#ffcf03]/45 -rotate-30" />
      <span className="absolute bottom-[34%] left-[32%] w-3.5 h-1.5 rounded-full bg-[#2c64ed]/35 rotate-15" />
    </div>
  );
}

const Antigravity = dynamic(() => import("@/components/Antigravity"), {
  ssr: false,
  loading: () => <MobileAntigravityFallback />,
});



function WhatsAppIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z" />
    </svg>
  );
}

const BRAND_CREDENTIALS = [
  {
    brand: "Hikvision",
    cert: "HCSA Certified Security Partner",
    category: "IP & ColorVu Surveillance",
    badge: "Certified Partner",
    accent: "#EF1313",
    rotation: "-rotate-1",
  },
  {
    brand: "CP PLUS",
    cert: "Certified Surveillance Engineers",
    category: "4K & Smart Dual-Light CCTV",
    badge: "Certified Integrator",
    accent: "#EF1313",
    rotation: "rotate-1",
  },
  {
    brand: "eSSL Security",
    cert: "Authorised Partner",
    category: "Biometric Attendance & Access Control",
    badge: "Authorised Partner",
    accent: "#4E0DBA",
    rotation: "-rotate-2",
  },
  {
    brand: "Grandstream",
    cert: "Certified Network Specialists",
    category: "Enterprise Wi-Fi 6 & VoIP",
    badge: "Certified Specialist",
    accent: "#4E0DBA",
    rotation: "rotate-1",
  },
  {
    brand: "RailWire",
    cert: "Official Franchise Partner",
    category: "High-Speed FTTH & OTT Telecom",
    badge: "Official Franchisee",
    accent: "#EF1313",
    rotation: "-rotate-1",
  },
  {
    brand: "BSNL FTTH",
    cert: "Strategic Telecom Partner",
    category: "National Bharat Fibre Deployments",
    badge: "Strategic Partner",
    accent: "#4E0DBA",
    rotation: "rotate-2",
  },
  {
    brand: "Dahua Technology",
    cert: "Installation Partner",
    category: "Smart Surveillance & AI Analytics",
    badge: "Installation Partner",
    accent: "#EF1313",
    rotation: "-rotate-1",
  },
  {
    brand: "Tactine",
    cert: "Authorised Dealer",
    category: "UTM Hardware Firewalls & VPN",
    badge: "Authorised Dealer",
    accent: "#16143E",
    rotation: "rotate-1",
  },
];

export default function HeroSection() {
  const { lang, t } = useLanguage();
  const [tick, setTick] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isCoarse = window.matchMedia("(pointer: coarse)").matches;
      const isSmall = window.innerWidth < 768;
      if (!isCoarse && !isSmall) {
        setIsDesktop(true);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = setInterval(() => setTick((t) => (t + 1) % COMPANY_NUMBERS.length), 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-hero flex flex-col items-center justify-start overflow-hidden pt-24 sm:pt-36 pb-12 sm:pb-16 bg-white text-[#16143E] scroll-mt-24"
    >
      {/* Interactive Google Antigravity Concentric Ripple Canvas (Desktop only) or CSS Fallback (Mobile) */}
      <div className="absolute inset-0 select-none overflow-hidden z-0 pointer-events-none">
        {isDesktop ? <Antigravity /> : <MobileAntigravityFallback />}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center text-center">
        {/* Live operational badge */}
        <div className="hero-fade-in inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-900 mb-6 shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
          </span>
          <span className="text-xs font-bold uppercase tracking-wider font-display">
            Direct Technician Dispatch · Avadi & Chennai
          </span>
        </div>

        {/* Primary Clear H1 Headline */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#16143E] tracking-tight mb-5 max-w-4xl leading-[1.08]"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          {t("hero.title1")}
          <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#EF1313] via-[#4E0DBA] to-[#EF1313] pb-1">
            {t("hero.title2")}
          </span>
        </h1>

        {/* Clear Subtitle */}
        <p
          className="text-base sm:text-lg md:text-xl text-[#16143E]/75 max-w-2xl mb-8 leading-relaxed font-normal"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          {t("hero.desc")}
        </p>

        {/* CTA Buttons */}
        <div className="hero-fade-in flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6 w-full max-w-xs sm:max-w-none mx-auto">
          {/* Primary CTA */}
          <button
            type="button"
            onClick={() => {
              trackEvent("quote_request", { category: "Hero", label: "PrimaryCTA" });
              scrollToWithPhysics("enquiry");
            }}
            className="btn-crimson min-h-[52px] px-8 text-sm sm:text-base font-bold justify-center glow-btn-crimson group cursor-pointer shadow-lg hover:shadow-xl transition-all"
          >
            <span>{t("hero.primaryCta")}</span>
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary CTA */}
          <a
            href="https://wa.me/918681888111?text=Hello%20Broadnet%2C%20I%20would%20like%20to%20enquire%20about%20your%20services%20and%20get%20a%20quote."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { category: "Hero", label: "SecondaryCTA" })}
            className="min-h-[52px] px-7 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/35 text-[#15803d] text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            <WhatsAppIcon size={18} className="text-[#25D366]" />
            <span>{t("hero.whatsappCta")} · 86818 88111</span>
          </a>
        </div>

        {/* Reassurance line */}
        <div className="hero-fade-in inline-flex items-center gap-2 text-xs text-[#16143E]/75 font-medium mb-8">
          <Sparkles size={14} className="text-[#EF1313] flex-shrink-0" />
          <span>
            <strong>Professional On-Site Inspection</strong> across Avadi & Chennai · Transparent Quotations
          </span>
        </div>
      </div>

      {/* Rotating Brand Certifications & Authorizations Moving Track */}
      <div className="hero-fade-in w-full mb-12 relative overflow-hidden select-none z-10">
        <div className="flex items-center justify-center gap-3 mb-4 max-w-5xl mx-auto px-4">
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#4E0DBA]/30" />
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#4E0DBA] flex items-center gap-1.5">
            <Award size={13} className="text-[#4E0DBA]" />
            Authorized Brand Partnerships & Credentials
          </span>
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#4E0DBA]/30" />
        </div>

        {/* Continuous Full-Width Corner-to-Corner Moving Stream */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-44 md:w-60 bg-gradient-to-r from-[#FAFAFE] via-[#FAFAFE]/80 to-transparent z-20" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-44 md:w-60 bg-gradient-to-l from-[#FAFAFE] via-[#FAFAFE]/80 to-transparent z-20" />

          <div className="animate-marquee-gpu flex gap-4.5 w-max py-2 pl-4 hover:[animation-play-state:paused]">
            {[...BRAND_CREDENTIALS, ...BRAND_CREDENTIALS].map((b, idx) => (
              <div
                key={`${b.brand}-${idx}`}
                className={`w-[260px] sm:w-[320px] flex-shrink-0 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#16143E]/10 hover:border-[#4E0DBA] shadow-xs hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 hover:rotate-0 transition-transform duration-200 text-left cursor-pointer group/card ${b.rotation} transform-gpu`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-base sm:text-lg font-bold text-[#16143E] group-hover/card:text-[#4E0DBA] transition-colors"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {b.brand}
                  </span>
                  <span
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                    style={{
                      backgroundColor: `${b.accent}12`,
                      color: b.accent === "#16143E" ? "#4E0DBA" : b.accent,
                    }}
                  >
                    <ShieldCheck size={11} />
                    <span>{b.badge}</span>
                  </span>
                </div>

                <div
                  className="text-xs font-bold text-[#16143E] mb-1 leading-snug"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {b.cert}
                </div>
                <div
                  className="text-[11px] text-[#16143E]/65 leading-tight"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  {b.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Container for Metrics */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center text-center">
        {/* Dynamic Metric Numbers Strip */}
        <div className="hero-fade-in grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 w-full">
          {COMPANY_NUMBERS.map((m, i) => (
            <div
              key={m.label}
              className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 text-center relative overflow-hidden group cursor-pointer ${
                tick === i
                  ? "border-[#4E0DBA]/40 bg-gradient-to-b from-[#4E0DBA]/[0.08] to-white shadow-lg shadow-[#4E0DBA]/5 scale-[1.02]"
                  : "border-[#16143E]/10 bg-white/90 shadow-2xs hover:border-[#4E0DBA]/30 hover:shadow-sm"
              }`}
              onClick={() => setTick(i)}
            >
              <div
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#16143E] mb-1 group-hover:text-[#4E0DBA] transition-colors"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {m.value}
              </div>
              <div
                className="text-xs sm:text-[13px] text-[#16143E] font-bold uppercase tracking-wider mb-0.5"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {m.label}
              </div>
              <div
                className="text-[11px] text-[#DC2626] font-semibold"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {m.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="mt-10 flex flex-col items-center gap-1 text-[#16143E]/70 z-20">
        <span className="text-[10px] tracking-widest uppercase font-bold">
          Explore Services
        </span>
        <ChevronDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
}