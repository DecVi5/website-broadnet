"use client";

import Link from "next/link";
import { Globe, ArrowRight, CheckCircle2, Zap, Wifi, Tv, MapPin } from "lucide-react";
import { scrollToWithPhysics } from "@/lib/scrollPhysics";
import { useLanguage } from "@/lib/i18n";
import { BROADBAND_PLANS } from "@/data/site";
import { trackEvent } from "@/lib/analytics";

export default function HomeFiberSection() {
  const { lang, t } = useLanguage();

  const featuredPlans = BROADBAND_PLANS.filter((p) =>
    ["broadnet-60", "broadnet-100", "railwire-100-ott"].includes(p.id)
  );

  return (
    <section className="py-20 sm:py-24 bg-slate-50 dark:bg-[#080D14] border-b border-slate-200/90 dark:border-[#1E2E42] text-slate-900 dark:text-[#F4F7FA] relative overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#4E0DBA]/10 dark:bg-violet-500/20 text-[#4E0DBA] dark:text-violet-300 text-xs font-bold uppercase tracking-wider mb-3 font-display">
            <Globe size={13} />
            <span>Dedicated Avadi FTTH Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight font-display">
            Fiber Broadband Across Avadi &amp; Chennai
          </h2>
          <p className="text-slate-600 dark:text-[#A5B1BE] text-sm sm:text-base mt-2">
            Broadnet&apos;s private 100+ km optical fiber backbone, official BSNL Bharat Fibre, and RailWire OTT packages. Symmetric speeds with zero evening throttling.
          </p>
        </div>

        {/* 3 Featured Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {featuredPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between border transition-all duration-300 relative ${
                plan.popular
                  ? "bg-white dark:bg-[#0D1520] border-[#4E0DBA] dark:border-violet-500 shadow-xl ring-1 ring-violet-500/20"
                  : "bg-white dark:bg-[#0D1520] border-slate-200/90 dark:border-[#1E2E42] shadow-xs hover:border-[#4E0DBA]/40 dark:hover:border-violet-500/40 hover:shadow-lg"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3.5 py-0.5 rounded-full text-[10.5px] font-bold bg-[#4E0DBA] text-white uppercase tracking-wider">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4 pt-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                    {plan.name}
                  </h3>
                  <span className="px-2.5 py-1 rounded-lg bg-[#4E0DBA]/10 dark:bg-violet-500/20 text-[#4E0DBA] dark:text-violet-300 font-phone font-bold text-xs">
                    {plan.speed}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#121D2A] border border-slate-200/80 dark:border-[#1E2E42] mb-5">
                  <span className="text-3xl font-extrabold text-slate-900 dark:text-white font-phone">
                    {plan.price}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 ml-1">/ month</span>
                </div>

                {plan.ottApps && plan.ottApps.length > 0 && (
                  <div className="mb-4 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 text-xs text-amber-900 dark:text-amber-300 font-semibold flex items-center gap-2">
                    <Tv size={15} className="text-amber-700 dark:text-amber-400 flex-shrink-0" />
                    <span>Includes: {plan.ottApps.join(", ")}</span>
                  </div>
                )}

                <div className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-200/80 dark:border-[#1E2E42]">
                <button
                  type="button"
                  onClick={() => {
                    trackEvent("quote_request", { category: "FiberSection", label: plan.id });
                    scrollToWithPhysics("coverage");
                  }}
                  className="w-full py-2.5 rounded-full bg-[#4E0DBA] hover:bg-[#3d0996] text-white text-xs font-bold transition-colors cursor-pointer text-center font-display"
                >
                  Check Availability For This Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Action bar linking to /internet and coverage */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#0D1520] border border-slate-200/90 dark:border-[#1E2E42] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
              <Zap size={20} />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white font-display">
                Free Dual-Band Gigabit ONT Router on 6-Month Advance
              </div>
              <div className="text-xs text-slate-600 dark:text-[#A5B1BE] mt-0.5">
                Same-day installation by our Avadi technician team at Fire Station Road.
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => scrollToWithPhysics("coverage")}
              className="px-5 py-2.5 rounded-full border border-slate-300 dark:border-[#1E2E42] text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer flex items-center gap-1.5 transition-colors"
            >
              <MapPin size={13} className="text-[#EF1313]" /> Check My Area
            </button>
            <Link
              href="/internet"
              className="btn-crimson text-xs font-bold px-5 py-2.5 glow-btn-crimson flex items-center gap-1.5 rounded-full"
            >
              <span>View All Broadband Plans</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
