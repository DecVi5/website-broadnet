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
    <section className="py-20 sm:py-24 bg-white border-b border-[#16143E]/8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EF1313]/10 text-[#EF1313] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles size={13} />
            <span>Turnkey CCTV Pricing</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Transparent CCTV Packages
          </h2>
          <p className="text-[#16143E]/70 text-sm sm:text-base mt-2">
            Complete turnkey solutions with genuine cameras, surveillance HDD, DVR/NVR, power supply, concealed conduit cabling, and mobile app configuration.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {teaserPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* What is Turnkey Installation Explainer */}
        <div className="mb-8 rounded-3xl bg-gradient-to-br from-[#F8F9FE] via-white to-[#F4F5FB] border border-[#16143E]/10 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#16143E]/8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4E0DBA]/10 text-[#4E0DBA] text-xs font-bold uppercase tracking-wider mb-2.5">
                <ShieldCheck size={14} className="text-[#4E0DBA]" />
                <span>Zero Hidden Costs · 100% Ready to Use</span>
              </div>
              <h3
                className="text-xl sm:text-2xl font-bold text-[#16143E] tracking-tight"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                What is a Turnkey CCTV Installation?
              </h3>
              <p className="text-xs sm:text-sm text-[#16143E]/75 mt-2 leading-relaxed">
                <strong>&ldquo;Turnkey&rdquo; means you receive a complete, fully operational security system with zero hidden costs or extra labor charges.</strong> BroadNet handles everything end-to-end: supplying 100% genuine Hikvision / CP PLUS cameras, dedicated 24/7 surveillance hard disk, power supply, neat concealed PVC conduit cabling, camera focal angle tuning, and live mobile viewing configuration on all your devices. No buying extra parts, no hiring third-party electricians &mdash; you simply turn the key to round-the-clock protection.
              </p>
            </div>

            <div className="flex-shrink-0 bg-white rounded-2xl p-4 border border-[#16143E]/8 shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={20} />
              </div>
              <div className="text-xs">
                <div className="font-bold text-[#16143E]">All-Inclusive Guarantee</div>
                <div className="text-[#16143E]/60 text-[11px] mt-0.5">Hardware + Cabling + Setup + Warranty</div>
              </div>
            </div>
          </div>

          {/* 4 Inclusions Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#16143E]/6 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#EF1313]/10 text-[#EF1313] flex items-center justify-center flex-shrink-0">
                <Camera size={18} />
              </div>
              <div>
                <h5 className="text-xs font-bold text-[#16143E]">Genuine Brand Hardware</h5>
                <p className="text-[11px] text-[#16143E]/65 mt-0.5 leading-snug">
                  Original cameras, DVR/NVR recorder &amp; 24/7 surveillance-grade HDD.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#16143E]/6 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#4E0DBA]/10 text-[#4E0DBA] flex items-center justify-center flex-shrink-0">
                <Wrench size={18} />
              </div>
              <div>
                <h5 className="text-xs font-bold text-[#16143E]">Concealed Conduit Cabling</h5>
                <p className="text-[11px] text-[#16143E]/65 mt-0.5 leading-snug">
                  Heavy-duty copper cables enclosed in neat PVC pipes with zero messy loose wires.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#16143E]/6 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center flex-shrink-0">
                <Smartphone size={18} />
              </div>
              <div>
                <h5 className="text-xs font-bold text-[#16143E]">Mobile App &amp; Remote View</h5>
                <p className="text-[11px] text-[#16143E]/65 mt-0.5 leading-snug">
                  Live feed &amp; past playback configured on all your Android, iOS phones &amp; screens.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#16143E]/6 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h5 className="text-xs font-bold text-[#16143E]">2-Year Warranty &amp; AMC</h5>
                <p className="text-[11px] text-[#16143E]/65 mt-0.5 leading-snug">
                  Full angle calibration, user demonstration, and prompt 2-hour technician support.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Configurator Teaser Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#16143E] via-[#24174D] to-[#16143E] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 text-emerald-400">
              <Calculator size={24} />
            </div>
            <div>
              <h4
                className="text-lg sm:text-xl font-bold"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Need a Custom Camera Count or Lens Setup?
              </h4>
              <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-xl">
                Try our interactive cost calculator or request a custom site survey for gated apartments, factories, or commercial showrooms.
              </p>
            </div>
          </div>

          <Link
            href="/cctv-landing"
            className="btn-crimson text-xs sm:text-sm font-bold whitespace-nowrap glow-btn-crimson"
          >
            <span>Open CCTV System Configurator</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
