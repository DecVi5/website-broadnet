"use client";

import Link from "next/link";
import { Camera, Fingerprint, Wifi, ArrowRight, ShieldCheck, CheckCircle2, Globe, Cpu } from "lucide-react";
import { scrollToWithPhysics } from "@/lib/scrollPhysics";
import { useLanguage } from "@/lib/i18n";
import { trackEvent } from "@/lib/analytics";

export default function TopServicesSection() {
  const { lang, t } = useLanguage();

  const SECURITY_SERVICES = [
    {
      id: "cctv",
      title: "HD & 4K CCTV Video Surveillance",
      badge: "Lead Division · Most Popular",
      desc: "Turnkey IP and HD camera installations with 24/7 ColorVu night vision, smart AI vehicle/human detection, surveillance-grade HDD recording loops, and live mobile monitoring.",
      brands: ["Hikvision", "CP PLUS", "Dahua"],
      features: [
        "ColorVu 24/7 full-color night vision with zero blind spots",
        "Concealed PVC conduit wiring & neat aesthetic finish",
        "Encrypted live remote viewing on iOS, Android & Windows",
        "2-Year manufacturer warranty + rapid local dispatch",
      ],
      price: "From ₹1,399 / Cam",
      href: "/security/cameras",
      icon: Camera,
      accent: "#EF1313",
      popular: true,
    },
    {
      id: "access-door-phones",
      title: "Biometrics & Smart Video Door Phones",
      badge: "Commercial & Residential",
      desc: "Authorized eSSL biometric attendance and touch-free facial recognition integrated with Hikvision 7-inch HD touchscreen video door phones and electronic electromagnetic door locks.",
      brands: ["eSSL", "Hikvision", "CCL"],
      features: [
        "Face recognition & optical fingerprint biometric terminals",
        "7-inch HD touchscreen video door phone with electronic latch",
        "Automated attendance report generation & HR software sync",
        "Sterile, tamper-proof entrance and visitor management",
      ],
      price: "From ₹3,999 to Enterprise",
      href: "/security/door-phones",
      icon: Fingerprint,
      accent: "#4E0DBA",
      popular: false,
    },
  ];

  const CONNECTIVITY_SERVICES = [
    {
      id: "fiber-broadband",
      title: "Private Optical Fiber Broadband",
      badge: "Ultra-Fast · Symmetrical",
      desc: "High-speed optical fiber internet powered by Broadnet's 100+ km private ring network across Avadi. 1:1 symmetrical upload/download speeds and zero evening congestion.",
      brands: ["BSNL Bharat Fibre", "RailWire", "Broadnet Dedicated"],
      features: [
        "Symmetric upload & download speeds up to 300+ Mbps",
        "Dual-band 5GHz Gigabit Wi-Fi ONT router included",
        "< 2-hour technician response & local Avadi wireline team",
        "OTT bundle add-ons: Disney+ Hotstar, SonyLIV, ZEE5",
      ],
      price: "From ₹499 / Month",
      href: "/internet",
      icon: Globe,
      accent: "#EF1313",
      popular: true,
    },
    {
      id: "networking-wifi",
      title: "Enterprise Wi-Fi 6 & Structured Cabling",
      badge: "High-Speed Infrastructure",
      desc: "Seamless ceiling PoE access points and certified Cat6/Cat6A structured cabling. Designed for multi-floor villas, corporate offices, warehouses, and apartment campuses.",
      brands: ["Grandstream", "Tactine", "D-Link"],
      features: [
        "Grandstream Wi-Fi 6 ceiling APs with seamless zero-drop roaming",
        "Cat6/Cat6A gigabit patch panel termination & 24U rack dressing",
        "Tactine UTM hardware firewall & secure site-to-site VPN",
        "Optical fiber backhaul splicing for multi-building links",
      ],
      price: "From ₹3,200 / Access Point",
      href: "/services/enterprise-wifi",
      icon: Wifi,
      accent: "#4E0DBA",
      popular: false,
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-slate-50 dark:bg-[#080D14] border-b border-slate-200/90 dark:border-[#1E2E42] relative overflow-hidden transition-colors duration-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EF1313]/10 dark:bg-[#EF1313]/20 text-[#EF1313] dark:text-rose-400 text-xs font-bold uppercase tracking-wider mb-3 font-display">
              <ShieldCheck size={14} />
              <span>Two Core Divisions · Engineered in Avadi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight font-display">
              Internet & Security Infrastructure
            </h2>
            <p className="text-slate-600 dark:text-[#A5B1BE] text-sm sm:text-base mt-2">
              Turnkey engineering deployed by certified in-house technicians across Avadi, Ambattur, Thirumullaivoyal & Chennai.
            </p>
          </div>

          <Link
            href="/security"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#4E0DBA] dark:text-violet-400 hover:text-[#EF1313] dark:hover:text-rose-400 transition-colors py-2 group font-display"
          >
            <span>View All 9 Services & Solutions</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Division 1: Security & Surveillance */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200/80 dark:border-[#1E2E42]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#EF1313]/10 dark:bg-[#EF1313]/20 text-[#EF1313] dark:text-rose-400 flex items-center justify-center">
                <Camera size={18} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
                01. Security & Intelligent Surveillance
              </h3>
            </div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 hidden sm:inline">
              Hikvision · CP PLUS · eSSL
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {SECURITY_SERVICES.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.id}
                  className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative border ${
                    srv.popular
                      ? "bg-white dark:bg-[#0D1520] border-[#EF1313]/40 dark:border-[#EF1313]/50 shadow-xl ring-1 ring-[#EF1313]/20"
                      : "bg-white dark:bg-[#0D1520] border-slate-200/90 dark:border-[#1E2E42] shadow-xs hover:border-[#4E0DBA]/40 dark:hover:border-violet-500/40 hover:shadow-lg"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                          srv.popular
                            ? "bg-[#EF1313] text-white shadow-md shadow-[#EF1313]/25"
                            : "bg-[#4E0DBA]/10 text-[#4E0DBA] dark:bg-violet-500/20 dark:text-violet-300"
                        }`}
                      >
                        <Icon size={22} />
                      </div>
                      <span
                        className={`text-[11px] font-bold px-3 py-1 rounded-full ${
                          srv.popular
                            ? "bg-[#EF1313]/10 dark:bg-[#EF1313]/20 text-[#EF1313] dark:text-rose-300 border border-[#EF1313]/30"
                            : "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        {srv.badge}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug font-display">
                      {srv.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-[#A5B1BE] mb-4 leading-relaxed">
                      {srv.desc}
                    </p>

                    {/* Brand tags */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-5">
                      <span className="text-[10.5px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mr-1">
                        Brands:
                      </span>
                      {srv.brands.map((b) => (
                        <span
                          key={b}
                          className="text-[11px] font-semibold px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/5"
                        >
                          {b}
                        </span>
                      ))}
                    </div>

                    {/* Feature bullet list */}
                    <div className="space-y-2 mb-6">
                      {srv.features.map((f) => (
                        <div key={f} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
                          <CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80 dark:border-[#1E2E42] space-y-2.5">
                    <div className="text-xs font-bold text-[#EF1313] dark:text-rose-400 font-phone">
                      {srv.price}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href={srv.href}
                        className="min-h-[44px] py-2 px-3 rounded-xl bg-slate-900 dark:bg-[#162333] hover:bg-slate-800 dark:hover:bg-[#1E2E42] text-white text-xs font-bold flex items-center justify-center gap-1 transition-colors text-center border border-transparent dark:border-[#1E2E42]"
                      >
                        <span>Explore Details</span>
                        <ArrowRight size={12} />
                      </Link>
                      <button
                        type="button"
                        onClick={() => {
                          trackEvent("quote_request", { category: "TopServices", label: srv.id });
                          scrollToWithPhysics("enquiry");
                        }}
                        className="min-h-[44px] py-2 px-3 rounded-xl bg-[#EF1313]/10 hover:bg-[#EF1313]/20 text-[#EF1313] dark:text-rose-400 border border-[#EF1313]/30 text-xs font-bold transition-colors cursor-pointer text-center"
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Division 2: Internet & Connectivity */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200/80 dark:border-[#1E2E42]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#4E0DBA]/10 dark:bg-violet-500/20 text-[#4E0DBA] dark:text-violet-400 flex items-center justify-center">
                <Wifi size={18} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
                02. Internet & High-Speed Connectivity
              </h3>
            </div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 hidden sm:inline">
              100+ km Private Fiber · BSNL Bharat Fibre · RailWire
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {CONNECTIVITY_SERVICES.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.id}
                  className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative border ${
                    srv.popular
                      ? "bg-white dark:bg-[#0D1520] border-[#4E0DBA]/40 dark:border-violet-500/50 shadow-xl ring-1 ring-[#4E0DBA]/20"
                      : "bg-white dark:bg-[#0D1520] border-slate-200/90 dark:border-[#1E2E42] shadow-xs hover:border-[#4E0DBA]/40 dark:hover:border-violet-500/40 hover:shadow-lg"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                          srv.popular
                            ? "bg-[#4E0DBA] text-white shadow-md shadow-[#4E0DBA]/25"
                            : "bg-[#4E0DBA]/10 text-[#4E0DBA] dark:bg-violet-500/20 dark:text-violet-300"
                        }`}
                      >
                        <Icon size={22} />
                      </div>
                      <span
                        className={`text-[11px] font-bold px-3 py-1 rounded-full ${
                          srv.popular
                            ? "bg-[#4E0DBA]/10 dark:bg-violet-500/20 text-[#4E0DBA] dark:text-violet-300 border border-[#4E0DBA]/30"
                            : "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        {srv.badge}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug font-display">
                      {srv.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-[#A5B1BE] mb-4 leading-relaxed">
                      {srv.desc}
                    </p>

                    {/* Brand tags */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-5">
                      <span className="text-[10.5px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mr-1">
                        Networks:
                      </span>
                      {srv.brands.map((b) => (
                        <span
                          key={b}
                          className="text-[11px] font-semibold px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/5"
                        >
                          {b}
                        </span>
                      ))}
                    </div>

                    {/* Feature bullet list */}
                    <div className="space-y-2 mb-6">
                      {srv.features.map((f) => (
                        <div key={f} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
                          <CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80 dark:border-[#1E2E42] space-y-2.5">
                    <div className="text-xs font-bold text-[#4E0DBA] dark:text-violet-400 font-phone">
                      {srv.price}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href={srv.href}
                        className="min-h-[44px] py-2 px-3 rounded-xl bg-slate-900 dark:bg-[#162333] hover:bg-slate-800 dark:hover:bg-[#1E2E42] text-white text-xs font-bold flex items-center justify-center gap-1 transition-colors text-center border border-transparent dark:border-[#1E2E42]"
                      >
                        <span>View Plans</span>
                        <ArrowRight size={12} />
                      </Link>
                      <button
                        type="button"
                        onClick={() => {
                          trackEvent("quote_request", { category: "TopServices", label: srv.id });
                          scrollToWithPhysics("coverage");
                        }}
                        className="min-h-[44px] py-2 px-3 rounded-xl bg-[#4E0DBA]/10 dark:bg-violet-500/20 hover:bg-[#4E0DBA]/20 text-[#4E0DBA] dark:text-violet-300 border border-[#4E0DBA]/30 text-xs font-bold transition-colors cursor-pointer text-center"
                      >
                        Check Locality
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner to see all solutions */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0D1520] border border-slate-200/90 dark:border-[#1E2E42] shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 transition-colors">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#4E0DBA]/10 text-[#4E0DBA] dark:bg-violet-500/20 dark:text-violet-300 flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white font-display">
                Need boom barriers, intrusion alarms, or campus optical fiber?
              </div>
              <div className="text-xs text-slate-600 dark:text-[#A5B1BE] mt-0.5">
                We design and maintain all 9 ELV security and communication disciplines.
              </div>
            </div>
          </div>
          <Link
            href="/security"
            className="btn-crimson min-h-[44px] text-xs font-bold px-6 py-2.5 whitespace-nowrap glow-btn-crimson w-full sm:w-auto text-center justify-center flex-shrink-0 rounded-full"
          >
            <span>View All 9 Solutions</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
