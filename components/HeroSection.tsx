"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
import CursorGrid from "@/components/CursorGrid";

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
      className="relative min-h-[88vh] flex flex-col items-center justify-start overflow-hidden pt-28 sm:pt-36 pb-16 bg-white text-[#16143E] scroll-mt-24"
    >
      {/* Background Interactive CursorGrid & Radial Aurora Glows */}
      <div className="absolute inset-0 select-none overflow-hidden z-0">
        <CursorGrid
          cellSize={60}
          color="#4E0DBA"
          radius={175}
          falloff="smooth"
          holdTime={220}
          fadeDuration={900}
          lineWidth={0.9}
          maxOpacity={0.22}
          fillOpacity={0.02}
          gridOpacity={0.015}
          cellRadius={4}
          glowBlur={12}
          clickPulse={true}
          pulseSpeed={520}
        />
        {/* Purple top-left aura */}
        <div
          className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full pointer-events-none opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(78,13,186,0.18) 0%, transparent 70%)" }}
        />
        {/* Crimson top-right aura */}
        <div
          className="absolute top-20 -right-20 w-[600px] h-[600px] rounded-full pointer-events-none opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(239,19,19,0.16) 0%, transparent 70%)" }}
        />
        {/* Subtle center ambient light */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full pointer-events-none opacity-20 blur-3xl"
          style={{ background: "radial-gradient(ellipse at center, rgba(78,13,186,0.12) 0%, transparent 70%)" }}
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center text-center">
        {/* Main Punchy Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6 text-[#16143E] max-w-4xl"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          Engineered{" "}
          <span className="text-[#EF1313] relative inline-block">
            Surveillance.
            <span className="absolute left-0 bottom-1.5 w-full h-1 bg-[#EF1313]/20 rounded-full" />
          </span>
          <br />
          Intelligent <span className="text-[#4E0DBA]">Security Systems.</span>
        </motion.h1>

        {/* Description: 1 to 2 clean lines about the company */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-[#16143E]/80 text-base sm:text-lg md:text-xl leading-relaxed mb-9 max-w-2xl font-normal"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          {t("hero.desc")}
        </motion.p>

        {/* Above the fold CTAs: Exactly One Primary & One Secondary */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mb-6"
        >
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
        </motion.div>

        {/* Reassurance line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 text-xs text-[#16143E]/75 font-medium mb-8"
        >
          <Sparkles size={14} className="text-[#EF1313] flex-shrink-0" />
          <span>
            <strong>100% Free On-Site Inspection</strong> across Avadi & Chennai · Zero Obligation Survey
          </span>
        </motion.div>
      </div>

      {/* Rotating Brand Certifications & Authorizations Moving Track - Full Width Corner to Corner */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.22 }}
        className="w-full mb-12 relative overflow-hidden select-none z-10"
      >
        <div className="flex items-center justify-center gap-3 mb-4 max-w-5xl mx-auto px-4">
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#4E0DBA]/30" />
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#4E0DBA] flex items-center gap-1.5">
            <Award size={13} className="text-[#4E0DBA]" />
            Authorized Brand Partnerships & Credentials
          </span>
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#4E0DBA]/30" />
        </div>

        {/* Continuous Full-Width Corner-to-Corner Moving Stream with Silky Soft Gradient Blends */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          {/* Left Screen Corner Gradient Blend Overlay */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-44 md:w-60 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />

          {/* Right Screen Corner Gradient Blend Overlay */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-44 md:w-60 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />

          <motion.div
            className="flex gap-4.5 w-max py-2 pl-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 38,
            }}
          >
            {[...BRAND_CREDENTIALS, ...BRAND_CREDENTIALS, ...BRAND_CREDENTIALS, ...BRAND_CREDENTIALS].map((b, idx) => (
              <motion.div
                key={`${b.brand}-${idx}`}
                whileHover={{ scale: 1.05, rotate: 0, y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={`w-[290px] sm:w-[320px] flex-shrink-0 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#16143E]/10 hover:border-[#4E0DBA] shadow-xs hover:shadow-xl transition-all duration-300 text-left cursor-pointer group/card ${b.rotation}`}
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
                      color: b.accent,
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Main Container for Metrics */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center text-center">

        {/* Dynamic Metric Numbers Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 w-full"
        >
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
                className="text-[11px] text-[#EF1313] font-semibold"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {m.detail}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="mt-10 flex flex-col items-center gap-1 text-[#16143E]/40 z-20">
        <span className="text-[10px] tracking-widest uppercase font-bold">
          Explore Services
        </span>
        <ChevronDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
}