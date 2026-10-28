"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
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
  imageSrc: string;
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
    imageSrc: "/assets/projects/proj-1.jpg",
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
    imageSrc: "/assets/projects/proj-2.jpg",
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
    imageSrc: "/assets/projects/proj-3.jpg",
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
    imageSrc: "/assets/projects/proj-4.jpg",
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
    imageSrc: "/assets/projects/proj-5.jpg",
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
    imageSrc: "/assets/projects/proj-6.jpg",
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
              {/* Photo Area with Real Installation Photo */}
              <div className="relative h-52 bg-gradient-to-br from-[#16143E] to-[#251B4E] p-4 flex flex-col justify-between text-white overflow-hidden group-hover:scale-[1.01] transition-transform">
                <Image
                  src={proj.imageSrc}
                  alt={proj.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10.5px] font-bold bg-black/60 backdrop-blur-md text-white border border-white/20">
                    {proj.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#DC2626] text-white shadow-sm">
                    {proj.year}
                  </span>
                </div>

                <div className="relative z-10 flex items-center justify-between text-[11px] text-white/95">
                  <span className="flex items-center gap-1 font-semibold bg-black/50 px-2.5 py-1 rounded-lg backdrop-blur-md">
                    <MapPin size={12} className="text-[#DC2626]" /> {proj.location}
                  </span>
                  <span className="flex items-center gap-1 text-white group-hover:text-[#EF1313] font-bold transition-colors bg-black/50 px-2.5 py-1 rounded-lg backdrop-blur-md">
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

      {/* Lightbox Modal rendered via Portal to escape parent section stacking contexts */}
      {mounted &&
        selectedProject &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
            data-lenis-prevent
            onClick={() => setSelectedProject(null)}
          >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-white/20 max-h-[90vh] overflow-y-auto custom-scrollbar-light"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#16143E]/5 hover:bg-[#16143E]/10 flex items-center justify-center text-[#16143E] cursor-pointer transition-colors z-20"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Modal Photo Area */}
            <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 bg-slate-900">
              <Image
                src={selectedProject.imageSrc}
                alt={selectedProject.title}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40" />
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#EF1313] text-white shadow-md">
                  {selectedProject.category} · Completed {selectedProject.year}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-white">
                <span className="flex items-center gap-1 font-semibold bg-black/60 px-3 py-1 rounded-lg backdrop-blur-md">
                  <MapPin size={13} className="text-[#EF1313]" /> {selectedProject.location}
                </span>
                <span className="text-[11px] bg-emerald-500/80 text-white font-bold px-3 py-1 rounded-lg backdrop-blur-md">
                  Verified On-Site Deployment
                </span>
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
        </div>,
        document.body
      )}
    </div>
  );
}
