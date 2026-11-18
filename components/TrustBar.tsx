"use client";

import { ShieldCheck, Clock, Award, Star, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { SITE_CONFIG } from "@/data/site";

export default function TrustBar() {
  const { t } = useLanguage();

  const TRUST_ITEMS = [
    {
      icon: ShieldCheck,
      title: "12+ Years in Avadi",
      subtitle: "Established in 2014",
      highlight: false,
    },
    {
      icon: Clock,
      title: "< 2-Hour SLA",
      subtitle: "Avadi & Chennai Response",
      highlight: true,
    },
    {
      icon: MapPin,
      title: "All Chennai Coverage",
      subtitle: "Avadi HQ & Fast Dispatch",
      highlight: false,
    },
    {
      icon: Award,
      title: "Authorized Partner",
      subtitle: "Hikvision & CP PLUS Genuine",
      highlight: false,
    },
    {
      icon: Star,
      title: `${SITE_CONFIG.stats.rating}/5 Rating`,
      subtitle: `${SITE_CONFIG.stats.reviewCount} Reviews`,
      highlight: false,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#16143E] via-[#1F1B4E] to-[#16143E] text-white py-4 sm:py-5 border-y border-white/10 shadow-lg relative z-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 sm:gap-4 items-center">
          {TRUST_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-center gap-2.5 sm:gap-3 p-2 sm:p-3 rounded-2xl transition-all ${
                  idx === 4 ? "col-span-2 md:col-span-1 justify-center md:justify-start" : ""
                } ${
                  item.highlight
                    ? "bg-[#EF1313]/15 border border-[#EF1313]/30"
                    : "bg-white/[0.04] border border-white/5 hover:bg-white/[0.08]"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    item.highlight
                      ? "bg-[#EF1313] text-white"
                      : "bg-white/10 text-[#34D399]"
                  }`}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold tracking-tight text-white leading-tight">
                    {item.title}
                  </div>
                  <div className="text-[10.5px] text-white/60 font-medium leading-tight mt-0.5">
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
