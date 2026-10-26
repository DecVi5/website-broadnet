"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Building,
  GraduationCap,
  Factory,
  Hotel,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { scrollToWithPhysics } from "@/lib/scrollPhysics";

const SECTORS = [
  {
    id: "residential",
    category: "residential",
    icon: Home,
    title: "Homes & Independent Villas",
    desc: "Discrete ColorVu night vision cameras, smart video door phones (VDP), mobile remote viewing, and perimeter infrared intrusion alarms.",
    recommended: [
      "4-Camera Full-Color HD Kit",
      "Smart Touchscreen Video Door Phone",
      "Compound Wall Intrusion Beam",
    ],
    badge: "Residential",
    turnaround: "Same-Day Survey",
    hardwareBrands: "Hikvision · CP PLUS · Panasonic",
  },
  {
    id: "gated",
    category: "residential",
    icon: Building,
    title: "Apartments & Gated Societies",
    desc: "Centralized guard cabin NVR setup, long-range RFID boom barriers, intercom calling between flats, and elevator traveling cable cameras.",
    recommended: [
      "16-32 Ch IP Surveillance",
      "Automated Vehicle Boom Barrier",
      "Multi-Flat Audio/Video Intercom",
    ],
    badge: "Gated Communities",
    turnaround: "24-Hour Survey",
    hardwareBrands: "CP PLUS · Dahua · Hikvision",
  },
  {
    id: "education",
    category: "institutional",
    icon: GraduationCap,
    title: "Schools, Colleges & Institutions",
    desc: "Complete campus perimeter coverage, classroom dome cameras, RFID bus tracking attendance, and walk-through metal detectors.",
    recommended: [
      "High-Density IP Cameras",
      "Biometric Staff Attendance",
      "Campus Enterprise Wi-Fi",
    ],
    badge: "Education",
    turnaround: "Custom Survey",
    hardwareBrands: "eSSL · Grandstream · Hikvision",
  },
  {
    id: "industrial",
    category: "commercial",
    icon: Factory,
    title: "Factories, Warehouses & Industries",
    desc: "Industrial-grade explosion-proof metal bullet cameras, ANPR truck license plate capture, optical fiber backbone, and perimeter siren defense.",
    recommended: [
      "4K Optical Zoom PTZ Cameras",
      "OTDR Spliced Fiber Backbone",
      "Perimeter Infrared Beams",
    ],
    badge: "Industrial",
    turnaround: "Site Engineer Visit",
    hardwareBrands: "Tactine · Hikvision · Finolex Fiber",
  },
  {
    id: "hospitality",
    category: "commercial",
    icon: Hotel,
    title: "Hotels, Resorts & Restaurants",
    desc: "Branded guest Wi-Fi captive portals, corridor and lobby dome cameras, kitchen monitoring, and electronic keycard access integration.",
    recommended: [
      "Grandstream Wi-Fi 6 Access Points",
      "Corridor IP Dome Cameras",
      "Staff Biometric Terminals",
    ],
    badge: "Hospitality",
    turnaround: "Priority 2-Hour SLA",
    hardwareBrands: "Grandstream · eSSL · CP PLUS",
  },
  {
    id: "corporate",
    category: "commercial",
    icon: Briefcase,
    title: "Offices & IT Workspaces",
    desc: "Contactless facial recognition attendance synced with HR payroll, server room electromagnetic door locks, and Cat6 structured rack cabling.",
    recommended: [
      "eSSL Touchless Face Attendance",
      "Electromagnetic EM Door Locks",
      "Tactine UTM Firewall & Cat6 Cabling",
    ],
    badge: "Corporate",
    turnaround: "Instant Proposal",
    hardwareBrands: "eSSL · D-Link · Grandstream",
  },
];

type SectorTab = "all" | "residential" | "commercial" | "institutional";

export default function IndustriesServedSection() {
  const [activeTab, setActiveTab] = useState<SectorTab>("all");

  const filteredSectors = SECTORS.filter((s) => {
    if (activeTab === "all") return true;
    return s.category === activeTab;
  });

  return (
    <section
      id="industries"
      className="py-24 bg-[#FAFAFE] border-b border-[#16143E]/8 relative overflow-hidden scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EF1313]/10 text-[#EF1313] text-xs font-bold uppercase tracking-wider mb-3.5 border border-[#EF1313]/20">
            <Sparkles size={13} />
            <span>Sectors &amp; Facilities We Serve</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight mb-4"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Tailored Architecture for Every Facility
          </h2>
          <p className="text-[#16143E]/70 text-base sm:text-lg leading-relaxed">
            No two properties are identical. From a private villa needing zero-grain night vision to a 200-flat society demanding automated vehicle boom barriers and an IT park requiring contactless facial attendance, we engineer fit-for-purpose systems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div>
            <h3
              className="text-lg sm:text-xl font-bold text-[#16143E]"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Select Property / Sector Type
            </h3>
            <p className="text-xs sm:text-sm text-[#16143E]/60 mt-0.5">
              Explore custom equipment setups and recommended hardware architectures.
            </p>
          </div>

          <div className="inline-flex items-center p-1 rounded-2xl bg-white border border-[#16143E]/10 shadow-xs flex-wrap">
            {[
              { id: "all", label: "All Sectors (6)" },
              { id: "residential", label: "Residential & Villas" },
              { id: "commercial", label: "Commercial & Corporate" },
              { id: "institutional", label: "Institutions & Schools" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as SectorTab)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#16143E] text-white shadow-xs"
                    : "text-[#16143E]/70 hover:text-[#16143E] hover:bg-slate-50"
                }`}
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sector Cards Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSectors.map((sec) => {
              const Icon = sec.icon;
              return (
                <motion.div
                  layout
                  key={sec.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="p-7 rounded-3xl bg-white border border-[#16143E]/10 hover:border-[#4E0DBA]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#4E0DBA]/10 text-[#4E0DBA]">
                        {sec.badge}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-[#16143E]/5 text-[#16143E] flex items-center justify-center group-hover:bg-[#EF1313] group-hover:text-white transition-all shadow-xs">
                        <Icon size={22} />
                      </div>
                    </div>

                    <h4
                      className="text-xl font-bold text-[#16143E] mb-2 leading-snug group-hover:text-[#4E0DBA] transition-colors"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {sec.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#16143E]/70 leading-relaxed mb-6">
                      {sec.desc}
                    </p>

                    <div className="p-3.5 rounded-2xl bg-[#FAFAFE] border border-[#16143E]/8 mb-6 space-y-2">
                      <div className="text-[10.5px] font-bold text-[#16143E]/50 uppercase tracking-wider">
                        Engineered Packages:
                      </div>
                      {sec.recommended.map((r) => (
                        <div
                          key={r}
                          className="flex items-center gap-2 text-xs font-semibold text-[#16143E]/85"
                        >
                          <CheckCircle2
                            size={14}
                            className="text-[#EF1313] flex-shrink-0"
                          />
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#16143E]/8 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-[#16143E]/50 font-semibold uppercase">
                        Hardware:
                      </div>
                      <div className="text-[11px] font-bold text-[#16143E]/80">
                        {sec.hardwareBrands}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => scrollToWithPhysics("enquiry")}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4E0DBA] group-hover:text-[#EF1313] transition-colors cursor-pointer"
                    >
                      <span>Get On-Site Audit</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
