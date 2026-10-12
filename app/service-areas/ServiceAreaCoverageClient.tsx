"use client";

import { useState } from "react";
import {
  MapPin,
  Search,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Globe,
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface LocalityItem {
  name: string;
  pincode: string;
  zone: string;
  cctvStatus: "Active — <2 Hr Dispatch" | "Active — Same-Day Dispatch";
  internetStatus: "Available (Broadnet Fiber)" | "Not Available (Security Only)";
  highlights: string;
}

const LOCALITIES: LocalityItem[] = [
  {
    name: "Avadi (TNHB, Fire Station Rd, JB Nagar)",
    pincode: "600054",
    zone: "Avadi Core",
    cctvStatus: "Active — <2 Hr Dispatch",
    internetStatus: "Available (Broadnet Fiber)",
    highlights: "Broadnet HQ Backbone Feeder · Rapid On-Site Inspection within 2 hours",
  },
  {
    name: "Pattabiram & Thandurai",
    pincode: "600072",
    zone: "Western Corridor",
    cctvStatus: "Active — <2 Hr Dispatch",
    internetStatus: "Not Available (Security Only)",
    highlights: "High priority CCTV, boom barrier & intercom service corridor",
  },
  {
    name: "Thiruverkadu",
    pincode: "600077",
    zone: "Western Corridor",
    cctvStatus: "Active — <2 Hr Dispatch",
    internetStatus: "Not Available (Security Only)",
    highlights: "Villas, residential layouts & commercial showroom security",
  },
  {
    name: "Paruthipattu",
    pincode: "600071",
    zone: "Avadi Surrounds",
    cctvStatus: "Active — <2 Hr Dispatch",
    internetStatus: "Available (Broadnet Fiber)",
    highlights: "Residential gated communities & villa surveillance systems",
  },
  {
    name: "Ayapakkam",
    pincode: "600077",
    zone: "TNHB Enclave",
    cctvStatus: "Active — <2 Hr Dispatch",
    internetStatus: "Not Available (Security Only)",
    highlights: "ColorVu CCTV installation, Video Door Phones & smart intercoms",
  },
  {
    name: "Thirumullaivoyal & Women's Ind Estate",
    pincode: "600062",
    zone: "Industrial & Res",
    cctvStatus: "Active — <2 Hr Dispatch",
    internetStatus: "Not Available (Security Only)",
    highlights: "Industrial factory CCTV, biometric attendance & perimeter beams",
  },
  {
    name: "Kovilpadagai",
    pincode: "600062",
    zone: "Avadi Surrounds",
    cctvStatus: "Active — <2 Hr Dispatch",
    internetStatus: "Not Available (Security Only)",
    highlights: "Quick dispatch for farmhouses, gated plots & home CCTV",
  },
  {
    name: "Thirunindravur & Nemilichery",
    pincode: "602024",
    zone: "Outer West",
    cctvStatus: "Active — Same-Day Dispatch",
    internetStatus: "Not Available (Security Only)",
    highlights: "Complete residential CCTV kits & perimeter alarm defense",
  },
  {
    name: "Ambattur & Ambattur OT",
    pincode: "600053",
    zone: "Chennai West",
    cctvStatus: "Active — <2 Hr Dispatch",
    internetStatus: "Not Available (Security Only)",
    highlights: "Industrial park structured cabling, biometric HR attendance & CCTV",
  },
  {
    name: "Poonamallee",
    pincode: "600056",
    zone: "Chennai West",
    cctvStatus: "Active — Same-Day Dispatch",
    internetStatus: "Not Available (Security Only)",
    highlights: "Commercial godowns, schools & residential apartments",
  },
  {
    name: "Central & Greater Chennai (Anna Nagar, Porur, etc.)",
    pincode: "600040 / 600116",
    zone: "All Chennai",
    cctvStatus: "Active — Same-Day Dispatch",
    internetStatus: "Not Available (Security Only)",
    highlights: "Full turnkey ELV security, biometric attendance & CCTV projects",
  },
];

export default function ServiceAreaCoverageClient() {
  const [query, setQuery] = useState("");

  const filtered = LOCALITIES.filter((loc) => {
    const q = query.toLowerCase().trim();
    return (
      !q ||
      loc.name.toLowerCase().includes(q) ||
      loc.pincode.includes(q) ||
      loc.zone.toLowerCase().includes(q)
    );
  });

  return (
    <section className="py-20 bg-[#FAFAFE] border-b border-[#16143E]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Dual Pillar Scope Notice */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          <div className="p-7 rounded-3xl bg-white border-2 border-[#EF1313]/20 shadow-xs">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#EF1313]/10 text-[#EF1313] flex items-center justify-center font-bold">
                <ShieldCheck size={22} />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#EF1313]">
                  Lead Security Division
                </span>
                <h3 className="text-xl font-bold text-[#16143E]">CCTV & Security Solutions</h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#16143E]/75 leading-relaxed mb-4">
              <strong>All of Chennai covered!</strong> Core rapid focus on Avadi, Pattabiram, Thiruverkadu, Paruthipattu, Ayapakkam, Thirumullaivoyal, Kovilpadagai, Thirunindravur, and Ambattur with guaranteed &lt;2-hour on-site technician dispatch.
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
              <CheckCircle2 size={13} /> Rapid On-Site Survey Across Chennai
            </div>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#16143E]/10 shadow-xs">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#4E0DBA]/10 text-[#4E0DBA] flex items-center justify-center font-bold">
                <Globe size={22} />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4E0DBA]">
                  Fiber Broadband
                </span>
                <h3 className="text-xl font-bold text-[#16143E]">High-Speed FTTH Internet</h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#16143E]/75 leading-relaxed mb-4">
              <strong>Available across Avadi & nearby localities!</strong> Powered by Broadnet&apos;s private 100+ km optical fiber ring, BSNL Bharat Fibre, and RailWire.
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16143E]/80 bg-[#4E0DBA]/10 px-3 py-1 rounded-full">
              <span>Serving Avadi 600054 & immediate nearby areas</span>
            </div>
          </div>
        </div>

        {/* Pincode / Locality Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#16143E]/40"
            />
            <input
              type="text"
              placeholder="Search by neighborhood name or pincode (e.g. 600054, Pattabiram, Ayapakkam)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border-2 border-[#16143E]/15 focus:border-[#4E0DBA] text-sm text-[#16143E] shadow-sm outline-none transition-all"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-[#16143E]/60">
            <span className="font-semibold">Popular searches:</span>
            {["Avadi", "Pattabiram", "Thirumullaivoyal", "Thiruverkadu", "Ayapakkam"].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setQuery(t)}
                className="px-2.5 py-0.5 rounded-full bg-white border border-[#16143E]/10 hover:border-[#EF1313] text-[11px] font-semibold text-[#16143E]/80 transition-colors cursor-pointer"
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Locality Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.length > 0 ? (
            filtered.map((loc) => (
              <div
                key={loc.name}
                className="p-6 rounded-2xl bg-white border border-[#16143E]/10 hover:border-[#EF1313]/35 shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#4E0DBA] uppercase tracking-wider">
                      {loc.zone}
                    </span>
                    <span className="text-xs font-black px-2.5 py-0.5 rounded-md bg-[#16143E]/5 text-[#16143E]">
                      {loc.pincode}
                    </span>
                  </div>

                  <h4
                    className="text-base font-bold text-[#16143E] mb-2 leading-snug"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {loc.name}
                  </h4>

                  <div className="space-y-2 mb-4 text-xs">
                    <div className="flex items-start gap-1.5">
                      <span className="font-bold text-[#EF1313]">CCTV / Security:</span>
                      <span className="text-emerald-700 font-semibold">{loc.cctvStatus}</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="font-bold text-[#4E0DBA]">Fiber Internet:</span>
                      <span
                        className={
                          loc.internetStatus.includes("Available")
                            ? "text-emerald-700 font-semibold"
                            : "text-[#16143E]/50 font-normal"
                        }
                      >
                        {loc.internetStatus}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#16143E]/65 leading-relaxed mb-4">
                    {loc.highlights}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#16143E]/8">
                  <a
                    href="tel:+918681888111"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EF1313] hover:underline"
                  >
                    <span>Request Visit in {loc.name.split(" ")[0]}</span>
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full p-8 rounded-2xl bg-white border border-[#16143E]/10 text-center">
              <AlertCircle size={28} className="text-[#EF1313] mx-auto mb-2" />
              <h4 className="text-base font-bold text-[#16143E] mb-1">
                Looking for another area in Chennai?
              </h4>
              <p className="text-xs text-[#16143E]/70 max-w-md mx-auto mb-4">
                We install CCTV surveillance and security systems across ALL Chennai neighborhoods! Call us directly at 86818 88111 to verify dispatch timing for your address.
              </p>
              <a
                href="tel:+918681888111"
                className="btn-crimson min-h-[42px] px-6 text-xs justify-center"
              >
                Call Support: 86818 88111
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
