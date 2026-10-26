"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Home,
  ArrowRight,
  ShieldCheck,
  Wifi,
  MapPin,
  CreditCard,
  Phone,
  MessageCircle,
  HelpCircle,
  Compass,
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const POPULAR_DESTINATIONS = [
  {
    title: "CCTV Security Surveillance",
    desc: "Hikvision & CP PLUS turnkey installations, ColorVu night vision, AcuSense AI detection.",
    href: "/cctv-landing",
    icon: ShieldCheck,
    badge: "Most Requested",
    accent: "#EF1313",
  },
  {
    title: "Fiber Broadband Plans",
    desc: "100+ km private fiber network in Avadi, BSNL Bharat Fibre, and RailWire FTTH bundles.",
    href: "/internet",
    icon: Wifi,
    badge: "From ₹499/mo",
    accent: "#4E0DBA",
  },
  {
    title: "Avadi & Chennai Service Areas",
    desc: "Check fiber coverage and 2-hour emergency technician dispatch across all local pin codes.",
    href: "/service-areas",
    icon: MapPin,
    badge: "Coverage Map",
    accent: "#16143E",
  },
  {
    title: "Online Bill Payment",
    desc: "Quick access to BroadNet private portal, RailWire, and BSNL Bharat Fibre recharge portals.",
    href: "/pay-bill",
    icon: CreditCard,
    badge: "Self-Service",
    accent: "#059669",
  },
];

export default function NotFoundClient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[85vh] pt-32 pb-24 overflow-hidden bg-gradient-to-b from-[#FAFAFE] via-white to-[#F5F5FC] text-[#16143E]">
      {/* Background Decorative Mesh & Radial Glows */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #4E0DBA 1.2px, transparent 1.2px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#EF1313]/5 via-[#4E0DBA]/8 to-[#EF1313]/5 blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Status Badge */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EF1313]/10 border border-[#EF1313]/25 text-[#EF1313] mb-6 shadow-2xs"
        >
          <span className="w-2 h-2 rounded-full bg-[#EF1313] animate-pulse" aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-wider font-display">
            Diagnostic 404 · Route Not Found
          </span>
        </motion.div>

        {/* Large Styled 404 Graphic */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-4 flex items-center justify-center select-none"
        >
          <div
            className="text-7xl sm:text-9xl md:text-[11rem] font-extrabold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#16143E] via-[#4E0DBA] to-[#EF1313]"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            404
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#16143E] tracking-tight mb-4 max-w-2xl leading-[1.15]"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          Connection Lost in Transit.
        </motion.h1>

        {/* Reassuring Subtitle */}
        <motion.p
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-[#16143E]/75 max-w-xl mb-8 leading-relaxed"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          The page or link you followed does not exist, has been moved, or the URL was entered incorrectly. Don’t worry — our fiber networks and security engineers across Avadi are 100% operational.
        </motion.p>

        {/* Primary CTAs */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.26 }}
          className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mb-14 w-full max-w-md sm:max-w-none"
        >
          <Link
            href="/"
            onClick={() => trackEvent("404_home_click", { category: "404", label: "BackToHome" })}
            className="btn-crimson min-h-[48px] sm:min-h-[52px] px-7 sm:px-8 text-sm sm:text-base font-bold justify-center shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 rounded-full cursor-pointer w-full sm:w-auto"
          >
            <Home size={17} aria-hidden="true" />
            <span>Return to Home</span>
          </Link>

          <a
            href="https://wa.me/918681888111?text=Hello%20Broadnet%2C%20I%20hit%20a%20404%20missing%20page%20on%20your%20website%20and%20need%20assistance."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("404_whatsapp_click", { category: "404", label: "WhatsAppQuery" })}
            className="min-h-[48px] sm:min-h-[52px] px-6 sm:px-7 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/35 text-[#15803d] text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-2xs cursor-pointer w-full sm:w-auto"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            <MessageCircle size={18} className="text-[#25D366]" aria-hidden="true" />
            <span>WhatsApp Tech Desk · 86818 88111</span>
          </a>
        </motion.div>

        {/* Helpful Popular Destinations Header */}
        <div className="w-full flex items-center justify-center gap-3 mb-6">
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#4E0DBA]/30" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#4E0DBA] flex items-center gap-1.5 font-display">
            <Compass size={14} className="text-[#4E0DBA]" aria-hidden="true" />
            Popular Helpful Destinations
          </span>
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#4E0DBA]/30" />
        </div>

        {/* Popular Destinations Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-12">
          {POPULAR_DESTINATIONS.map((dest, i) => {
            const Icon = dest.icon;
            return (
              <motion.div
                key={dest.title}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.3 + i * 0.06 }}
                className="h-full"
              >
                <Link
                  href={dest.href}
                  onClick={() => trackEvent("404_destination_click", { category: "404", label: dest.title })}
                  className="group flex flex-col justify-between h-full p-5 rounded-2xl bg-white border border-[#16143E]/10 hover:border-[#4E0DBA]/40 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-200 text-left cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                        style={{ backgroundColor: `${dest.accent}12`, color: dest.accent }}
                      >
                        <Icon size={20} aria-hidden="true" />
                      </div>
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border"
                        style={{
                          backgroundColor: `${dest.accent}08`,
                          borderColor: `${dest.accent}25`,
                          color: dest.accent,
                        }}
                      >
                        {dest.badge}
                      </span>
                    </div>

                    <h2
                      className="text-base font-bold text-[#16143E] group-hover:text-[#4E0DBA] transition-colors mb-1.5"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {dest.title}
                    </h2>
                    <p
                      className="text-xs text-[#16143E]/70 leading-relaxed mb-4"
                      style={{ fontFamily: "DM Sans, sans-serif" }}
                    >
                      {dest.desc}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4E0DBA] group-hover:text-[#EF1313] transition-colors pt-2 border-t border-[#16143E]/5">
                    <span>Visit Page</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Emergency Assistance Footer Card */}
        <div className="w-full max-w-2xl p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#16143E]/[0.03] via-[#4E0DBA]/[0.05] to-[#16143E]/[0.03] border border-[#16143E]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#16143E] text-white flex items-center justify-center flex-shrink-0">
              <Phone size={16} aria-hidden="true" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#16143E]">
                Need immediate phone assistance?
              </div>
              <div className="text-[11px] text-[#16143E]/70">
                Direct Avadi Dispatch Desk · Mon–Sat 9AM–7PM · 24/7 Emergency Line
              </div>
            </div>
          </div>

          <a
            href="tel:+918681888111"
            className="px-5 py-2 rounded-full bg-[#16143E] text-white text-xs font-bold hover:bg-[#4E0DBA] transition-colors flex-shrink-0 inline-flex items-center gap-1.5 cursor-pointer"
          >
            <Phone size={13} aria-hidden="true" />
            <span>Call 86818 88111</span>
          </a>
        </div>
      </div>
    </section>
  );
}
