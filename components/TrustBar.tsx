"use client";

import { ShieldCheck, Clock, Award, Star, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { SITE_CONFIG } from "@/data/site";

export default function TrustBar() {
  const { t } = useLanguage();

  const TRUST_ITEMS = [
    {
      icon: ShieldCheck,
      title: "12+ Years",
      subtitle: "Established in Avadi (2014)",
      highlight: false,
    },
    {
      icon: Clock,
      title: "< 2-Hour SLA",
      subtitle: "Rapid Technician Response",
      highlight: true,
    },
    {
      icon: MapPin,
      title: "100+ km Fiber",
      subtitle: "Private Network Across Chennai",
      highlight: false,
    },
    {
      icon: Award,
      title: "Authorized Partner",
      subtitle: "Hikvision & CP PLUS Certified",
      highlight: false,
    },
    {
      icon: Star,
      title: `${SITE_CONFIG.stats.rating} ★ Rating`,
      subtitle: `${SITE_CONFIG.stats.reviewCount}+ Verified Reviews`,
      highlight: false,
    },
  ];

  return (
    <section className="bg-white dark:bg-[#0D1520] text-slate-900 dark:text-[#F4F7FA] py-5 sm:py-6 border-y border-slate-200/90 dark:border-[#1E2E42] relative z-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 items-center">
          {TRUST_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                  idx === 4 ? "col-span-2 md:col-span-1 justify-center md:justify-start" : ""
                } ${
                  item.highlight
                    ? "bg-[#EF1313]/[0.08] dark:bg-[#EF1313]/15 border border-[#EF1313]/25"
                    : "bg-slate-50 dark:bg-[#121D2A] border border-slate-200/80 dark:border-[#1E2E42] hover:border-slate-300 dark:hover:border-slate-600"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    item.highlight
                      ? "bg-[#EF1313] text-white"
                      : "bg-[#4E0DBA]/10 text-[#4E0DBA] dark:bg-violet-500/20 dark:text-violet-300"
                  }`}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold tracking-tight text-slate-900 dark:text-white leading-tight font-display">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-tight mt-0.5">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
