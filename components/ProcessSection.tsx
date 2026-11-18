"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  MapPin,
  FileText,
  Wrench,
  CheckCircle2,
  Headphones,
  ArrowRight,
  ShieldCheck,
  Phone,
  Sparkles,
} from "lucide-react";
import { scrollToWithPhysics } from "@/lib/scrollPhysics";
import { useLanguage } from "@/lib/i18n";
import { trackEvent } from "@/lib/analytics";

const STEPS = [
  {
    step: "01",
    title: "Enquiry",
    short: "Connect with our technical desk via WhatsApp, call, or web form.",
    details: "We assess your property type (villa, apartment, factory, office) and recommend immediate options.",
    turnaround: "< 15 Mins Response",
    icon: MessageSquare,
    badge: "Instant Response",
    highlight: false,
  },
  {
    step: "02",
    title: "Engineering Assessment",
    short: "Comprehensive technical review across Chennai to inspect angles & cable paths.",
    details: "Senior engineer maps blind spots, measures cable runs, assesses lighting for ColorVu vs IR, and checks backup points.",
    turnaround: "Same-Day / 24h",
    icon: MapPin,
    badge: "Technical Review",
    highlight: true,
  },
  {
    step: "03",
    title: "Quotation",
    short: "Transparent itemized proposal with genuine Hikvision / CP PLUS hardware.",
    details: "Detailed breakdown of camera models, DVR/NVR channels, WD Purple hard drives, and conduit piping costs.",
    turnaround: "Within 2 Hours",
    icon: FileText,
    badge: "Zero Hidden Fees",
    highlight: false,
  },
  {
    step: "04",
    title: "Installation",
    short: "Concealed conduit piping, neat rack cabling, and precision camera mounting.",
    details: "Certified in-house technicians install heavy-duty PVC casings, patch panels, and calibrated focal angles.",
    turnaround: "Scheduled to Suit You",
    icon: Wrench,
    badge: "Certified In-House",
    highlight: false,
  },
  {
    step: "05",
    title: "Testing & Handover",
    short: "Live mobile viewing setup, NVR recording verification, and complete training.",
    details: "We configure Hik-Connect or gCMOB on family/staff phones, test 2-way audio, and hand over admin passwords.",
    turnaround: "Same-Day Handover",
    icon: CheckCircle2,
    badge: "Quality Verified",
    highlight: false,
  },
  {
    step: "06",
    title: "AMC & Support",
    short: "Guaranteed < 2-hour technician dispatch, annual maintenance & warranty help.",
    details: "Direct Avadi-based support desk for lens cleaning, drive health checks, firmware upgrades, and RMA replacements.",
    turnaround: "< 2-Hour SLA",
    icon: Headphones,
    badge: "< 2-Hour Response",
    highlight: true,
  },
];

export default function ProcessSection() {
  const { lang, t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#080D14] border-b border-slate-200/90 dark:border-[#1E2E42] text-slate-900 dark:text-[#F4F7FA] relative overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EF1313]/10 dark:bg-[#EF1313]/20 text-[#EF1313] dark:text-rose-400 text-xs font-bold uppercase tracking-wider mb-3 font-display">
            <Sparkles size={13} />
            <span>Turnkey Engineering Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight font-display">
            How We Deliver Your Security System
          </h2>
          <p className="text-slate-600 dark:text-[#A5B1BE] text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Every step is handled directly by certified in-house engineers—never outsourced to third-party contractors.
          </p>
        </div>

        {/* Compact 6-Step Grid (No duplicated detail pane) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className={`p-6 rounded-2xl transition-all duration-300 relative border flex flex-col justify-between ${
                  s.highlight
                    ? "bg-white dark:bg-[#0D1520] border-[#EF1313]/40 dark:border-[#EF1313]/50 shadow-md ring-1 ring-[#EF1313]/20"
                    : "bg-white dark:bg-[#0D1520] border-slate-200/90 dark:border-[#1E2E42] shadow-xs hover:border-[#4E0DBA]/40 dark:hover:border-violet-500/40 hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-2xl sm:text-3xl font-extrabold font-phone ${
                      s.highlight ? "text-[#EF1313] dark:text-rose-400" : "text-slate-300 dark:text-slate-600"
                    }`}>
                      {s.step}
                    </span>
                    <span className={`text-[10.5px] font-bold px-2.5 py-0.5 rounded-full ${
                      s.highlight
                        ? "bg-[#EF1313]/10 dark:bg-[#EF1313]/20 text-[#EF1313] dark:text-rose-400 border border-[#EF1313]/30"
                        : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400"
                    }`}>
                      {s.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-2.5">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      s.highlight
                        ? "bg-[#EF1313] text-white"
                        : "bg-[#4E0DBA]/10 text-[#4E0DBA] dark:bg-violet-500/20 dark:text-violet-300"
                    }`}>
                      <Icon size={18} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                      {s.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1 leading-snug">
                    {s.short}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-[#A5B1BE] leading-relaxed">
                    {s.details}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/80 dark:border-[#1E2E42] flex items-center justify-between text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  <span>Turnaround:</span>
                  <span className="text-slate-900 dark:text-white font-bold font-phone">{s.turnaround}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 dark:bg-[#0D1520] border border-slate-800 dark:border-[#1E2E42] text-white flex flex-wrap items-center justify-between gap-4 shadow-xl">
          <div>
            <h4 className="text-lg sm:text-xl font-bold font-display">
              Ready to Plan Your Security &amp; Network Setup?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 dark:text-[#A5B1BE] mt-1">
              Connect with our certified specialists in Avadi &amp; Chennai for an itemized proposal.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => {
                trackEvent("quote_request", { category: "ProcessSection" });
                scrollToWithPhysics("enquiry");
              }}
              className="btn-crimson min-h-[44px] text-xs sm:text-sm font-bold glow-btn-crimson cursor-pointer w-full sm:w-auto justify-center rounded-full"
            >
              <span>Request Detailed Quote</span>
              <ArrowRight size={14} />
            </button>
            <a
              href="tel:+918681888111"
              data-copy-phone="true"
              title="Click to copy 86818 88111"
              onClick={() => trackEvent("call_click", { category: "ProcessSection" })}
              className="min-h-[44px] px-5 py-2.5 rounded-full border border-white/20 hover:bg-white/10 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-colors w-full sm:w-auto cursor-pointer"
            >
              <Phone size={13} className="text-[#EF1313]" />
              <span className="font-phone font-bold tracking-wider">86818 88111</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
