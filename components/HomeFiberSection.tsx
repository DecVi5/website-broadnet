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
    <section className="py-20 sm:py-24 bg-gradient-to-b from-white to-[#F6F4FD] border-b border-[#16143E]/8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#4E0DBA]/10 text-[#4E0DBA] text-xs font-bold uppercase tracking-wider mb-3">
            <Globe size={13} />
            <span>Dedicated Avadi FTTH Network</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Fiber Broadband Across Avadi & Nearby Areas
          </h2>
          <p className="text-[#16143E]/70 text-sm sm:text-base mt-2">
            Broadnet&apos;s private 100+ km optical fiber backbone, official BSNL Bharat Fibre, and RailWire OTT packages. Symmetric speeds with zero evening throttling.
          </p>
        </div>

        {/* 3 Featured Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {featuredPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-7 bg-white flex flex-col justify-between border transition-all duration-300 relative ${
                plan.popular
                  ? "border-[#4E0DBA] shadow-xl ring-2 ring-[#4E0DBA]/20"
                  : "border-[#16143E]/10 shadow-xs hover:shadow-lg"
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
                  <h3
                    className="text-xl font-bold text-[#16143E]"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {plan.name}
                  </h3>
                  <span className="px-2.5 py-1 rounded-lg bg-[#4E0DBA]/10 text-[#4E0DBA] font-mono font-bold text-xs">
                    {plan.speed}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8F9FD] border border-[#16143E]/6 mb-5">
                  <span
                    className="text-3xl font-black text-[#16143E]"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-xs text-[#16143E]/60 ml-1">/ month</span>
                </div>

                {plan.ottApps && plan.ottApps.length > 0 && (
                  <div className="mb-4 p-3 rounded-xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 font-semibold flex items-center gap-2">
                    <Tv size={15} className="text-amber-700 flex-shrink-0" />
                    <span>Includes: {plan.ottApps.join(", ")}</span>
                  </div>
                )}

                <div className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-xs sm:text-[13px] text-[#16143E]/80">
                      <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#16143E]/8">
                <button
                  type="button"
                  onClick={() => {
                    trackEvent("quote_request", { category: "FiberSection", label: plan.id });
                    scrollToWithPhysics("coverage");
                  }}
                  className="w-full py-2.5 rounded-full bg-[#4E0DBA] hover:bg-[#3d0996] text-white text-xs font-bold transition-colors cursor-pointer text-center"
                >
                  Check Availability For This Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Action bar linking to /internet and coverage */}
        <div className="p-6 rounded-3xl bg-white border border-[#16143E]/10 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
              <Zap size={20} />
            </div>
            <div>
              <div className="text-sm font-bold text-[#16143E]">
                Free Dual-Band Gigabit ONT Router on 6-Month Advance
              </div>
              <div className="text-xs text-[#16143E]/60 mt-0.5">
                Same-day installation by our Avadi technician team at Fire Station Road.
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => scrollToWithPhysics("coverage")}
              className="px-4 py-2.5 rounded-full border border-[#16143E]/20 text-xs font-bold text-[#16143E] hover:bg-[#16143E]/5 cursor-pointer flex items-center gap-1.5"
            >
              <MapPin size={13} className="text-[#EF1313]" /> Check My Area
            </button>
            <Link
              href="/internet"
              className="btn-crimson text-xs font-bold px-5 py-2.5 glow-btn-crimson flex items-center gap-1.5"
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
