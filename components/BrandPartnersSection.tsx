"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  Shield,
  BadgeCheck,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { BRAND_PARTNERS } from "@/data/services";
import { scrollToWithPhysics } from "@/lib/scrollPhysics";
import PartnerLogo from "@/components/PartnerLogo";

const CERTIFICATIONS_BADGES = [
  { name: "Hikvision HCSA", title: "Hikvision Certified Security Associate", brand: "Hikvision" },
  { name: "CP PLUS CSE", title: "CP PLUS Certified Surveillance Engineers", brand: "CP PLUS" },
  { name: "Grandstream GCNS", title: "Grandstream Certified Network Specialist", brand: "Grandstream" },
  { name: "eSSL Authorised", title: "eSSL Official Biometric Solution Partner", brand: "eSSL" },
  { name: "Tactine Dealer", title: "Tactine UTM Firewall Authorised Partner", brand: "Tactine" },
  { name: "BSNL FTTH Partner", title: "Strategic Bharat Fibre Infrastructure Partner", brand: "BSNL" },
  { name: "RailWire Franchise", title: "Official RailTel Telecom Franchisee", brand: "RailWire" },
];

const CATEGORIES = [
  { id: "all", label: "All Partner Brands", count: 11 },
  { id: "cctv", label: "CCTV & Surveillance", count: 5 },
  { id: "network", label: "Enterprise Wi-Fi & Firewalls", count: 2 },
  { id: "access", label: "Biometrics & Intercom", count: 2 },
  { id: "telecom", label: "Gigabit FTTH Telecom", count: 2 },
] as const;

export default function BrandPartnersSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredBrands =
    activeCategory === "all"
      ? BRAND_PARTNERS
      : BRAND_PARTNERS.filter((b) => ("category" in b ? b.category === activeCategory : true));

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#16143E]/8 relative overflow-hidden">
      {/* Background radial ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#4E0DBA]/[0.025] via-[#EF1313]/[0.018] to-[#00C2FF]/[0.025] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EF1313]/10 border border-[#EF1313]/20 text-[#EF1313] text-xs font-bold uppercase tracking-wider mb-3.5">
            <Award size={13} />
            <span>Authorized Hardware & Telecom Partners</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#16143E] tracking-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Direct Manufacturer Partnerships & Official Warranties
          </h2>
          <p
            className="text-[#16143E]/70 text-sm sm:text-base mt-2.5 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            BroadNet procures directly from factory distributors with authentic serial-numbered manufacturer warranties, certified installation engineers, and rapid local RMA support in Avadi.
          </p>
        </div>

        {/* Dynamic Continuous Moving Brand Marquee */}
        <div className="mb-12 relative overflow-hidden select-none">
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10" />

            <motion.div
              className="flex gap-4 py-2"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 32,
              }}
            >
              {[...BRAND_PARTNERS, ...BRAND_PARTNERS, ...BRAND_PARTNERS].map((brand, idx) => (
                <div
                  key={`marquee-${brand.name}-${idx}`}
                  className="flex-shrink-0 flex items-center gap-3 px-4.5 py-2.5 rounded-2xl bg-[#FAFAFE] border border-[#16143E]/8 shadow-2xs hover:border-[#EF1313]/30 hover:bg-white transition-all cursor-pointer group"
                  onClick={() => scrollToWithPhysics("enquiry")}
                >
                  <div className="h-7 w-28 sm:w-32 flex items-center justify-center">
                    <PartnerLogo brand={brand.name} className="h-6 w-auto max-w-[120px] object-contain" />
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 pl-2 border-l border-[#16143E]/10">
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      Genuine
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer inline-flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? "bg-[#16143E] text-white shadow-md scale-102"
                  : "bg-[#FAFAFE] text-[#16143E]/75 hover:text-[#16143E] hover:bg-slate-100 border border-[#16143E]/8"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  activeCategory === cat.id
                    ? "bg-white/20 text-white"
                    : "bg-[#16143E]/8 text-[#16143E]/70"
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 mb-12">
          <AnimatePresence mode="popLayout">
            {filteredBrands.map((brand, idx) => (
              <motion.div
                key={brand.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.28, delay: idx * 0.03 }}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-[#16143E]/10 hover:border-[#EF1313]/40 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden hover:-translate-y-1.5 cursor-pointer"
                onClick={() => scrollToWithPhysics("enquiry")}
              >
                {/* Accent top stripe */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#EF1313] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                />

                <div>
                  {/* Dedicated Logo Showcase Stage */}
                  <div className="h-16 sm:h-18 w-full rounded-xl bg-[#FAFAFE] group-hover:bg-white border border-[#16143E]/6 group-hover:border-[#16143E]/15 p-3 flex items-center justify-center mb-4 transition-all duration-300 shadow-2xs group-hover:shadow-sm">
                    <PartnerLogo
                      brand={brand.name}
                      className="h-9 w-auto max-w-[160px] object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Brand Name & Category */}
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span
                      className="text-base sm:text-lg font-bold text-[#16143E] group-hover:text-[#EF1313] transition-colors"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {brand.name}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#4E0DBA] bg-[#4E0DBA]/8 px-2 py-0.5 rounded-md border border-[#4E0DBA]/15">
                      <BadgeCheck size={11} />
                      Partner
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-[#16143E]/70 mb-2">
                    {brand.tag}
                  </div>

                  {/* Official Certification Tier */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-[11px] text-[#16143E]/80 font-medium w-full">
                    <ShieldCheck size={13} className="text-emerald-600 flex-shrink-0" />
                    <span className="truncate">{brand.cert}</span>
                  </div>
                </div>

                {/* Footer Guarantee & Action */}
                <div className="mt-4 pt-3 border-t border-[#16143E]/8 flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-emerald-700 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Official Warranty
                  </span>
                  <span className="text-[#4E0DBA] font-bold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-0.5">
                    Enquire <ArrowRight size={11} />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Certifications Badges Bar */}
        <div className="mb-10">
          <div className="text-center mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#16143E]/60">
              Verified Engineering Credentials
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {CERTIFICATIONS_BADGES.map((cert) => (
              <div
                key={cert.name}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#FAFAFE] border border-[#16143E]/8 text-xs font-semibold text-[#16143E] hover:border-[#4E0DBA]/40 hover:bg-white shadow-2xs transition-all"
              >
                <div className="w-4.5 h-4.5 rounded-full bg-[#4E0DBA]/10 text-[#4E0DBA] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={12} />
                </div>
                <div>
                  <span className="font-bold text-[#4E0DBA]">{cert.name}: </span>
                  <span className="text-[#16143E]/80">{cert.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Authenticity Guarantee Ribbon */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50/60 to-emerald-50 border border-emerald-200/80 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-emerald-950 font-medium shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <div className="font-bold text-emerald-900 text-sm">
                100% Genuine Box-Sealed Hardware Guarantee
              </div>
              <div className="text-emerald-800/85 text-xs">
                We unbox factory-sealed equipment directly on your property with serial-numbered warranty cards and local Avadi replacement support.
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => scrollToWithPhysics("enquiry")}
            className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
          >
            <span>Request Genuine Brand Quote</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </section>
  );
}
