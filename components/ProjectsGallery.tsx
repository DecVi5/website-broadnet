"use client";

import { useState } from "react";
import {
  MapPin,
  Calendar,
  Building,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Maximize2,
  X,
  Camera,
  ShieldCheck,
  Phone,
} from "lucide-react";
import { scrollToWithPhysics } from "@/lib/scrollPhysics";
import { trackEvent } from "@/lib/analytics";

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  category: "Residential Society" | "Villa" | "Healthcare" | "Industrial" | "Corporate IT" | "Commercial Retail";
  year: string;
  scope: string;
  outcome: string;
  hardware: string[];
  placeholderTag: string;
}

export const REAL_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Gated Apartment Society IP CCTV & Boom Barrier",
    location: "Pattabiram, Chennai",
    category: "Residential Society",
    year: "2025",
    scope: "16x 4K Hikvision IP Cameras + Automatic RFID Boom Barrier + 32-Channel NVR Guard Cabin Video Wall",
    outcome: "Full perimeter protection, automated vehicle entry logging, and zero unauthorized gate trespassing.",
    hardware: ["Hikvision 4K IP", "RFID Boom Barrier", "32-Ch NVR", "WD Purple 4TB"],
    placeholderTag: "[REAL PHOTO NEEDED: Pattabiram Society Guard Gate]",
  },
  {
    id: "proj-2",
    title: "Commercial Multi-Speciality Clinic Biometrics & VDP",
    location: "Thirumullaivoyal, Chennai",
    category: "Healthcare",
    year: "2025",
    scope: "eSSL Contactless Face Attendance + Hikvision 7-inch Touchscreen Video Door Phone with Electronic Latch",
    outcome: "Sterile touch-free visitor access, doctors' private cabin door lock, and automated HR attendance export.",
    hardware: ["eSSL Face Terminal", "Hikvision 7-in VDP", "Electromagnetic Latch", "Battery Backup"],
    placeholderTag: "[REAL PHOTO NEEDED: Clinic Reception & Door Lock]",
  },
  {
    id: "proj-3",
    title: "Industrial Manufacturing Facility Fiber Backbone & 360° PTZ",
    location: "Avadi Industrial Corridor",
    category: "Industrial",
    year: "2024",
    scope: "1.2 km Fusion-Spliced Optical Fiber + 8x Long-Range ColorVu Bullet Cameras + 2x Optical Zoom PTZ Units",
    outcome: "Crystal-clear night monitoring of 3-acre loading docks with zero cable attenuation across heavy machinery.",
    hardware: ["30x PTZ Cameras", "ColorVu Bullets", "Optical Fiber Ring", "Outdoor Enclosures"],
    placeholderTag: "[REAL PHOTO NEEDED: Avadi Factory Yard & PTZ Pole]",
  },
  {
    id: "proj-4",
    title: "Luxury Duplex Villa ColorVu CCTV & Mesh Wi-Fi 6",
    location: "Paruthipattu, Avadi",
    category: "Villa",
    year: "2024",
    scope: "4x CP PLUS Full-Color Night Vision Cameras + 3x Grandstream Ceiling PoE Access Points",
    outcome: "Concealed heavy PVC conduit wiring preserving interior wall aesthetics with zero-drop Wi-Fi across floors.",
    hardware: ["CP PLUS ColorVu", "Grandstream Wi-Fi 6", "Concealed PVC", "1TB Surveillance HDD"],
    placeholderTag: "[REAL PHOTO NEEDED: Villa Elevation & Concealed Cam]",
  },
  {
    id: "proj-5",
    title: "Corporate IT Office Cat6 Structured Cabling & UTM Firewall",
    location: "Ambattur Industrial Estate",
    category: "Corporate IT",
    year: "2024",
    scope: "48-Node Cat6A Patch Panel Termination + 24U Server Rack Dressing + Tactine UTM Hardware Firewall",
    outcome: "Certified gigabit throughput across all developer workstations and secure branch-to-branch VPN.",
    hardware: ["Cat6A D-Link", "24U Server Rack", "Tactine UTM", "Gigabit PoE Switches"],
    placeholderTag: "[REAL PHOTO NEEDED: Ambattur IT Server Rack Dressing]",
  },
  {
    id: "proj-6",
    title: "Retail Supermarket Audio Surveillance & Intrusion Siren",
    location: "Avadi Market High Road",
    category: "Commercial Retail",
    year: "2025",
    scope: "8x In-Built Audio Cameras covering cash tills + Hikvision Wireless AX PRO Alarm with 110dB Outdoor Siren",
    outcome: "Immediate phone notification during after-hours shutter tampering and dispute-free cash counter records.",
    hardware: ["Audio Mic Cameras", "AX PRO Alarm Panel", "GSM Dialer", "PIR Motion Sensors"],
    placeholderTag: "[REAL PHOTO NEEDED: Supermarket Aisle & Cash Counter]",
  },
];

const CATEGORIES = [
  "All Projects",
  "Residential Society",
  "Villa",
  "Healthcare",
  "Industrial",
  "Corporate IT",
  "Commercial Retail",
];

export default function ProjectsGallery({ isTeaser = false }: { isTeaser?: boolean }) {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = isTeaser
    ? REAL_PROJECTS.slice(0, 3)
    : REAL_PROJECTS.filter(
        (p) => activeCategory === "All Projects" || p.category === activeCategory
      );

  return (
    <div className="w-full">
      {/* Category Filter Tabs (shown when not teaser) */}
      {!isTeaser && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#16143E] text-white shadow-md shadow-[#16143E]/20"
                  : "bg-white text-[#16143E]/70 hover:text-[#16143E] border border-[#16143E]/10 hover:border-[#16143E]/25"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            onClick={() => setSelectedProject(proj)}
            className="rounded-3xl bg-white border border-[#16143E]/10 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Photo Area with Noticeable [REAL PHOTO NEEDED] Placeholder Card */}
              <div className="relative h-52 bg-gradient-to-br from-[#16143E] to-[#251B4E] p-6 flex flex-col justify-between text-white overflow-hidden group-hover:scale-[1.01] transition-transform">
                {/* Tech grid overlay */}
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(circle, #EF1313 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10.5px] font-bold bg-white/10 backdrop-blur-md text-white border border-white/20">
                    {proj.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#EF1313] text-white">
                    {proj.year}
                  </span>
                </div>

                {/* Prominent Placeholder Notice */}
                <div className="relative z-10 my-auto text-center p-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-amber-300 mb-1">
                    <Camera size={14} />
                    <span>[REAL PHOTO NEEDED]</span>
                  </div>
                  <div className="text-[10px] text-white/70 font-mono line-clamp-1">
                    {proj.placeholderTag}
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between text-[11px] text-white/70">
                  <span className="flex items-center gap-1 font-medium">
                    <MapPin size={12} className="text-[#EF1313]" /> {proj.location}
                  </span>
                  <span className="flex items-center gap-1 text-white/90 group-hover:text-[#EF1313] font-bold transition-colors">
                    <Maximize2 size={12} /> View Details
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6">
                <h3
                  className="text-lg sm:text-xl font-bold text-[#16143E] mb-3 group-hover:text-[#EF1313] transition-colors leading-snug"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {proj.title}
                </h3>

                <div className="space-y-2.5 text-xs text-[#16143E]/75 mb-5">
                  <div>
                    <strong className="text-[#16143E] block font-bold mb-0.5">Scope:</strong>
                    <span className="leading-relaxed line-clamp-2">{proj.scope}</span>
                  </div>
                  <div>
                    <strong className="text-emerald-700 block font-bold mb-0.5">Outcome:</strong>
                    <span className="leading-relaxed text-emerald-900 line-clamp-2">{proj.outcome}</span>
                  </div>
                </div>

                {/* Hardware Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.hardware.map((hw) => (
                    <span
                      key={hw}
                      className="text-[10.5px] font-semibold px-2.5 py-0.5 rounded-lg bg-[#16143E]/5 text-[#16143E]/75"
                    >
                      {hw}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <div className="w-full py-2.5 rounded-xl bg-[#FAFAFE] hover:bg-[#16143E] hover:text-white text-[#16143E] text-xs font-bold flex items-center justify-center gap-1.5 border border-[#16143E]/10 transition-all text-center">
                <span>View Scope & Hardware</span>
                <ArrowRight size={13} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-white/20 max-h-[90vh] overflow-y-auto custom-scrollbar-light"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#16143E]/5 hover:bg-[#16143E]/10 flex items-center justify-center text-[#16143E] cursor-pointer transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Modal Photo Area */}
            <div className="rounded-2xl bg-gradient-to-br from-[#16143E] to-[#251B4E] p-8 text-white mb-6 text-center">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#EF1313] text-white inline-block mb-3">
                {selectedProject.category} · Completed {selectedProject.year}
              </span>
              <div className="p-4 rounded-xl bg-black/30 border border-white/10 max-w-md mx-auto my-3">
                <div className="text-amber-300 font-bold text-sm mb-1">
                  {selectedProject.placeholderTag}
                </div>
                <div className="text-xs text-white/60">
                  Location: {selectedProject.location}
                </div>
              </div>
            </div>

            <h3
              className="text-2xl font-bold text-[#16143E] mb-2"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              {selectedProject.title}
            </h3>
            <div className="flex items-center gap-2 text-xs text-[#16143E]/60 mb-6">
              <MapPin size={13} className="text-[#EF1313]" />
              <span>{selectedProject.location}</span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#16143E]/80 mb-6">
              <div className="p-4 rounded-2xl bg-[#F8F9FD] border border-[#16143E]/8">
                <strong className="text-[#16143E] block font-bold mb-1">Technical Scope & Cabling:</strong>
                <p className="leading-relaxed">{selectedProject.scope}</p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                <strong className="text-emerald-900 block font-bold mb-1">Delivered Outcome:</strong>
                <p className="leading-relaxed text-emerald-950">{selectedProject.outcome}</p>
              </div>

              <div>
                <strong className="text-[#16143E] block font-bold mb-2">Hardware & Components Deployed:</strong>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.hardware.map((h) => (
                    <span
                      key={h}
                      className="px-3 py-1 rounded-lg bg-[#16143E]/5 border border-[#16143E]/10 font-semibold text-xs text-[#16143E]"
                    >
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-[#16143E]/8">
              <a
                href="tel:+918681888111"
                className="px-5 py-2.5 rounded-full border border-[#16143E]/20 text-[#16143E] text-xs font-bold flex items-center gap-1.5"
              >
                <Phone size={13} className="text-[#EF1313]" /> Call 86818 88111
              </a>
              <button
                type="button"
                onClick={() => {
                  setSelectedProject(null);
                  scrollToWithPhysics("enquiry");
                }}
                className="btn-crimson text-xs font-bold px-6 py-2.5 glow-btn-crimson cursor-pointer"
              >
                <span>Request Similar Installation</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
