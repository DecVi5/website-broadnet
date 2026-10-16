"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Construction, ArrowRight, X, Clock, Phone, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { trackEvent } from "@/lib/analytics";

export default function UnderDevelopmentSign() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (nextState) {
      trackEvent("under_development_interact", { source: "bottom_left_sign", action: "open" });
    }
  };

  return (
    <div
      className="fixed bottom-20 md:bottom-5 left-3 md:left-5 z-40 select-none print:hidden pointer-events-auto"
      aria-label="Website development status sign"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.95 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mb-3 w-[calc(100vw-1.5rem)] sm:w-84 max-w-sm rounded-2xl bg-[#120F35]/95 backdrop-blur-2xl border border-amber-400/30 text-white shadow-2xl p-4 sm:p-5 max-h-[70vh] overflow-y-auto custom-scrollbar-dark"
            style={{
              boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5), 0 0 25px rgba(245,158,11,0.15)",
            }}
          >
            {/* Popover Header */}
            <div className="flex items-start justify-between gap-2 pb-3 border-b border-white/10 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <Construction size={16} />
                </div>
                <div>
                  <div
                    className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    <span>Temporarily Under Construction</span>
                  </div>
                  <div className="text-[11px] text-amber-300 font-medium flex items-center gap-1 mt-0.5">
                    <Clock size={11} />
                    <span>Completing Soon • Phase 3 of 4</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close status card"
              >
                <X size={15} />
              </button>
            </div>

            {/* Popover Message */}
            <p className="text-xs text-white/75 leading-relaxed mb-3">
              Our website is temporarily under construction and will be completed soon. We are engineering a modern self-service platform with instant CCTV simulations and bill pay.
            </p>

            {/* Operational Continuity Callout */}
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300 flex items-center gap-2 mb-3.5">
              <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
              <span>
                <strong>100% Operational:</strong> On-ground technician dispatches and fiber connections continue uninterrupted.
              </span>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2">
              <Link
                href="/under-development"
                onClick={() => setIsOpen(false)}
                className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-[#4E0DBA] to-[#EF1313] hover:opacity-95 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md transition-all cursor-pointer"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                <span>View Full Roadmap &amp; Progress</span>
                <ArrowRight size={13} />
              </Link>

              <a
                href={SITE_CONFIG.phones.primaryTel}
                className="w-full py-2 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                <Phone size={12} className="text-[#EF1313]" />
                <span>Call Dispatch: {SITE_CONFIG.phones.primary}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Bottom Left Sign */}
      <motion.button
        type="button"
        onClick={toggleOpen}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="group relative flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-[#120F35]/95 hover:bg-[#1a164b] border border-amber-400/40 hover:border-amber-400/70 text-white shadow-xl backdrop-blur-xl transition-all duration-200 cursor-pointer"
        style={{
          boxShadow: "0 8px 24px -4px rgba(0,0,0,0.45), 0 0 16px rgba(245,158,11,0.25)",
        }}
        aria-expanded={isOpen}
        aria-label="Website Under Development Sign - Click to view status"
      >
        {/* Pulsing Beacon Indicator */}
        <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-80" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
        </span>

        {/* Construction Icon */}
        <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
          <Construction size={13} />
        </div>

        {/* Primary Required Sign Text */}
        <span
          className="text-[11px] sm:text-[13px] font-bold text-white tracking-wide font-display group-hover:text-amber-200 transition-colors"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          <span className="hidden sm:inline">Under Development</span>
          <span className="sm:hidden">Dev Status</span>
        </span>

        {/* Secondary Micro Badge */}
        <span className="hidden sm:inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 uppercase tracking-wider">
          Completing Soon
        </span>
      </motion.button>
    </div>
  );
}
