"use client";

import Link from "next/link";
import { Camera, Fingerprint, Wifi, ArrowRight, ShieldCheck, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { scrollToWithPhysics } from "@/lib/scrollPhysics";
import { useLanguage } from "@/lib/i18n";
import { trackEvent } from "@/lib/analytics";

export default function TopServicesSection() {
  const { lang, t } = useLanguage();

  const TOP_SERVICES = [
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
      price: "From ₹1,399 / Cam (Kits on enquiry)",
      href: "/security/cameras",
      icon: Camera,
      color: "#EF1313",
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
      color: "#4E0DBA",
      popular: false,
    },
    {
      id: "networking-wifi",
      title: "Enterprise Wi-Fi 6 & Structured Cabling",
      badge: "High-Speed Infrastructure",
      desc: "Seamless ceiling PoE access points and certified Cat6/Cat6A structured cabling. Designed for multi-floor villas, corporate offices, warehouses, and apartment campuses.",
      brands: ["Grandstream", "Tactine", "D-Link"],
      features: [
        "Grandstream Wi-Fi 6 ceiling APs with seamless zero-drop roaming",
        "Cat6/Cat6A gigabit patch panel termination & 24U server rack dressing",
        "Tactine UTM hardware firewall & secure site-to-site VPN",
        "Optical fiber backhaul splicing for long-distance building links",
      ],
      price: "From ₹3,200 / Access Point",
      href: "/services/enterprise-wifi",
      icon: Wifi,
      color: "#16143E",
      popular: false,
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#FAFAFE] border-b border-[#16143E]/8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EF1313]/10 text-[#EF1313] text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck size={14} />
              <span>Core Security & Networking</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Our Lead Security & Networking Disciplines
            </h2>
            <p className="text-[#16143E]/70 text-sm sm:text-base mt-2">
              Turnkey engineering deployed by certified in-house technicians across Avadi, Ambattur, Pattabiram & Chennai.
            </p>
          </div>

          <Link
            href="/services/entrance-security"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#4E0DBA] hover:text-[#EF1313] transition-colors py-2 group"
          >
            <span>View All 9 Services & Solutions</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Lead Service Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {TOP_SERVICES.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className={`rounded-3xl p-7 bg-white flex flex-col justify-between transition-all duration-300 relative border ${
                  srv.popular
                    ? "border-[#EF1313]/40 shadow-xl ring-2 ring-[#EF1313]/15"
                    : "border-[#16143E]/8 shadow-xs hover:border-[#4E0DBA]/30 hover:shadow-lg"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        srv.popular
                          ? "bg-[#EF1313] text-white shadow-md shadow-[#EF1313]/25"
                          : "bg-[#4E0DBA]/10 text-[#4E0DBA]"
                      }`}
                    >
                      <Icon size={24} />
                    </div>
                    <span
                      className={`text-[11px] font-bold px-3 py-1 rounded-full ${
                        srv.popular
                          ? "bg-[#EF1313]/10 text-[#EF1313] border border-[#EF1313]/20"
                          : "bg-[#16143E]/5 text-[#16143E]/70"
                      }`}
                    >
                      {srv.badge}
                    </span>
                  </div>

                  <h3
                    className="text-xl sm:text-2xl font-bold text-[#16143E] mb-2 leading-snug"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#16143E]/70 mb-5 leading-relaxed">
                    {srv.desc}
                  </p>

                  {/* Brand tags */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-5">
                    <span className="text-[10.5px] font-bold text-[#16143E]/50 uppercase tracking-wider mr-1">
                      Brands:
                    </span>
                    {srv.brands.map((b) => (
                      <span
                        key={b}
                        className="text-[11px] font-semibold px-2.5 py-0.5 rounded-lg bg-[#16143E]/5 text-[#16143E]/80"
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  {/* Feature bullet list */}
                  <div className="space-y-2 mb-6">
                    {srv.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-xs sm:text-[13px] text-[#16143E]/80">
                        <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#16143E]/8 space-y-2.5">
                  <div className="text-xs font-bold text-[#EF1313]">
                    {srv.price}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href={srv.href}
                      className="min-h-[44px] py-2.5 px-3 rounded-xl bg-[#16143E] hover:bg-[#232057] text-white text-xs font-bold flex items-center justify-center gap-1 transition-colors text-center"
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
                      className="min-h-[44px] py-2.5 px-3 rounded-xl bg-[#EF1313]/10 hover:bg-[#EF1313]/20 text-[#EF1313] border border-[#EF1313]/25 text-xs font-bold transition-colors cursor-pointer text-center"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner to see all 9 services */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#16143E]/10 shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#4E0DBA]/10 text-[#4E0DBA] flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="text-sm font-bold text-[#16143E]">
                Need boom barriers, intrusion alarms, or campus optical fiber?
              </div>
              <div className="text-xs text-[#16143E]/60 mt-0.5">
                We design and maintain all 9 ELV security and communication disciplines.
              </div>
            </div>
          </div>
          <Link
            href="/security"
            className="btn-crimson min-h-[44px] text-xs font-bold px-5 py-2.5 whitespace-nowrap glow-btn-crimson w-full sm:w-auto text-center justify-center flex-shrink-0"
          >
            <span>View All 9 Solutions</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
