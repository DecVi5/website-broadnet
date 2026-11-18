"use client";

import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Calculator,
  ShieldCheck,
  CheckCircle2,
  Camera,
  Wrench,
  Smartphone,
} from "lucide-react";
import PackageCard from "@/components/PackageCard";
import { CCTV_PACKAGES } from "@/data/site";
import { useLanguage } from "@/lib/i18n";

export default function PackagePricingTeaser() {
  const { lang, t } = useLanguage();

  // Teaser displays the 3 primary turnkey kits
  const teaserPackages = CCTV_PACKAGES.filter((p) =>
    ["home-starter-2", "popular-home-4", "society-enterprise-8"].includes(p.id)
  );

  return (
    <section className="py-20 sm:py-24 bg-white dark:bg-[#080D14] border-b border-slate-200/90 dark:border-[#1E2E42] relative overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EF1313]/10 dark:bg-[#EF1313]/20 text-[#EF1313] dark:text-rose-400 text-xs font-bold uppercase tracking-wider mb-3 font-display">
            <Sparkles size={13} />
            <span>Turnkey CCTV Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight font-display">
            Transparent CCTV Packages
          </h2>
          <p className="text-slate-600 dark:text-[#A5B1BE] text-sm sm:text-base mt-2">
            Complete turnkey solutions with genuine cameras, surveillance HDD, DVR/NVR, power supply, concealed conduit cabling, and mobile app configuration.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {teaserPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* What is Turnkey Installation Explainer */}
        <div className="mb-10 rounded-2xl bg-slate-50 dark:bg-[#0D1520] border border-slate-200/90 dark:border-[#1E2E42] p-6 sm:p-8 shadow-xs transition-colors">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200/80 dark:border-[#1E2E42]">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4E0DBA]/10 dark:bg-violet-500/20 text-[#4E0DBA] dark:text-violet-300 text-xs font-bold uppercase tracking-wider mb-2.5 font-display">
                <ShieldCheck size={14} />
                <span>Zero Hidden Costs · 100% Ready to Use</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight font-display">
                What is a Turnkey CCTV Installation?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#A5B1BE] mt-2 leading-relaxed">
                <strong className="text-slate-900 dark:text-slate-200">&ldquo;Turnkey&rdquo; means you receive a complete, fully operational security system with zero hidden costs or extra labor charges.</strong> BroadNet handles everything end-to-end: supplying 100% genuine Hikvision / CP PLUS cameras, dedicated 24/7 surveillance hard disk, power supply, neat concealed PVC conduit cabling, camera focal angle tuning, and live mobile viewing configuration on all your devices. No buying extra parts, no hiring third-party electricians &mdash; you simply turn the key to round-the-clock protection.
              </p>
            </div>

            <div className="flex-shrink-0 bg-white dark:bg-[#121D2A] rounded-xl p-4 border border-slate-200/80 dark:border-[#1E2E42] shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={20} />
              </div>
              <div className="text-xs">
                <div className="font-bold text-slate-900 dark:text-white font-display">All-Inclusive Guarantee</div>
                <div className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5">Hardware + Cabling + Setup + Warranty</div>
              </div>
            </div>
          </div>

          {/* 4 Inclusions Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-[#121D2A] border border-slate-200/80 dark:border-[#1E2E42] shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-[#EF1313]/10 text-[#EF1313] dark:text-rose-400 flex items-center justify-center flex-shrink-0">
                <Camera size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white font-display">Genuine Brand Hardware</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 leading-snug">
                  Original cameras, DVR/NVR recorder &amp; 24/7 surveillance-grade HDD.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-[#121D2A] border border-slate-200/80 dark:border-[#1E2E42] shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-[#4E0DBA]/10 text-[#4E0DBA] dark:text-violet-400 flex items-center justify-center flex-shrink-0">
                <Wrench size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white font-display">Concealed Conduit Cabling</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 leading-snug">
                  Heavy-duty copper cables enclosed in neat PVC pipes with zero messy loose wires.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-[#121D2A] border border-slate-200/80 dark:border-[#1E2E42] shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                <Smartphone size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white font-display">Mobile App &amp; Remote View</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 leading-snug">
                  Live feed &amp; past playback configured on all your Android, iOS phones &amp; screens.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-[#121D2A] border border-slate-200/80 dark:border-[#1E2E42] shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white font-display">2-Year Warranty &amp; AMC</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 leading-snug">
                  Full angle calibration, user demonstration, and prompt 2-hour technician support.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Configurator Teaser Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 dark:bg-[#0D1520] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800 dark:border-[#1E2E42]">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-white/10 dark:bg-white/5 flex items-center justify-center flex-shrink-0 text-emerald-400">
              <Calculator size={24} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-display">
                Need a Custom Camera Count or Lens Setup?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 dark:text-[#A5B1BE] mt-1 max-w-xl">
                Try our interactive cost calculator or request a custom site survey for gated apartments, factories, or commercial showrooms.
              </p>
            </div>
          </div>

          <Link
            href="/cctv-landing"
            className="btn-crimson text-xs sm:text-sm font-bold whitespace-nowrap glow-btn-crimson rounded-full px-6 py-3"
          >
            <span>Open CCTV System Configurator</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
