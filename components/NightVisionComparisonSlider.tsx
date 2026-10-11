"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import {
  Sparkles,
  Eye,
  SlidersHorizontal,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Camera,
  MessageCircle,
  Layers,
  Maximize2,
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { scrollToWithPhysics } from "@/lib/scrollPhysics";

interface NightVisionComparisonProps {
  id?: string;
  className?: string;
  onOpenPackageModal?: (packageId: string) => void;
}

export default function NightVisionComparisonSlider({
  id = "night-vision-comparison",
  className = "",
  onOpenPackageModal,
}: NightVisionComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [currentTime, setCurrentTime] = useState("23:14:56");
  const containerRef = useRef<HTMLDivElement>(null);

  // Keep timestamp alive for realism
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-GB", { hour12: false })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 2) percentage = 2;
    if (percentage > 98) percentage = 98;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleInteractionEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleInteractionEnd);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleInteractionEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleInteractionEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleInteractionEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleInteractionEnd]);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX);
    trackEvent("comparison_slider_interact", { category: "NightVisionSlider" });
  };

  const setPreset = (pos: number, name: string) => {
    setSliderPosition(pos);
    trackEvent("comparison_preset_click", { preset: name });
  };

  const handleBookClick = () => {
    trackEvent("colorvu_upgrade_click", { category: "NightVisionSlider" });
    if (onOpenPackageModal) {
      onOpenPackageModal("popular-home-4");
    } else if (document.getElementById("packages")) {
      scrollToWithPhysics("packages");
    } else if (document.getElementById("enquiry")) {
      scrollToWithPhysics("enquiry");
    } else {
      window.location.href = "/security/cameras#packages";
    }
  };

  return (
    <section
      id={id}
      className={`py-20 sm:py-28 bg-gradient-to-b from-[#0B091E] via-[#120F2E] to-[#0A081D] text-white relative overflow-hidden ${className}`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#4E0DBA]/20 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#EF1313]/15 rounded-full blur-3xl pointer-events-none -z-0" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #8B5CF6 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#EF1313]/20 via-[#4E0DBA]/25 to-[#EF1313]/20 border border-[#EF1313]/40 text-white font-bold text-xs sm:text-sm mb-4 shadow-lg shadow-[#EF1313]/10">
            <Sparkles size={14} className="text-[#EF1313] animate-pulse" />
            <span>Live Interactive Visual Comparison</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Grainy Black & White at Midnight? <br />
            <span className="text-gradient">Or 24/7 Vivid True Color?</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed font-body">
            Drag the slider across the live feed below to experience how BroadNet&apos;s ColorVu F1.0 super-aperture optics transform pitch-black darkness into crystal-clear, color-accurate evidence.
          </p>

          {/* Preset Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              type="button"
              onClick={() => setPreset(10, "show_colorvu")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                sliderPosition < 25
                  ? "bg-[#EF1313] text-white border-[#EF1313] shadow-md shadow-[#EF1313]/30"
                  : "bg-white/5 hover:bg-white/10 text-white/80 border-white/10"
              }`}
            >
              ✨ 100% ColorVu View
            </button>
            <button
              type="button"
              onClick={() => setPreset(50, "split_view")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                sliderPosition >= 40 && sliderPosition <= 60
                  ? "bg-[#4E0DBA] text-white border-[#8B5CF6] shadow-md shadow-[#4E0DBA]/40"
                  : "bg-white/5 hover:bg-white/10 text-white/80 border-white/10"
              }`}
            >
              ⚖️ 50/50 Split Comparison
            </button>
            <button
              type="button"
              onClick={() => setPreset(90, "show_ir")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                sliderPosition > 75
                  ? "bg-zinc-700 text-white border-zinc-500 shadow-md"
                  : "bg-white/5 hover:bg-white/10 text-white/80 border-white/10"
              }`}
            >
              🌑 Old IR Night Vision
            </button>
          </div>
        </div>

        {/* ── THE INTERACTIVE SPLIT SLIDER STAGE ───────────────────────── */}
        <div className="relative max-w-5xl mx-auto rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-white/15 via-white/5 to-transparent border border-white/15 shadow-[0_25px_80px_-15px_rgba(0,0,0,0.9)]">
          <div
            ref={containerRef}
            onClick={handleContainerClick}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden cursor-ew-resize select-none bg-black"
          >
            {/* 1. Base Layer (Right / Behind): ColorVu Full Color Vision */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/assets/colorvu-night-vision.jpg"
                alt="BroadNet 4K ColorVu Full Color Night Vision Surveillance Feed"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-center pointer-events-none"
              />

              {/* ColorVu Side Badge (Top Right) */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex flex-col items-end gap-1.5 pointer-events-none">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#00C2FF]/20 border border-[#00C2FF]/60 text-white backdrop-blur-md shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#00C2FF] animate-ping" />
                  <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-cyan-200">
                    BroadNet ColorVu Pro (4K True Color)
                  </span>
                </div>
                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-[10px] text-emerald-400 font-semibold border border-emerald-500/30">
                  ✓ F1.0 Super Lens · Clear Plate & Face OCR
                </span>
              </div>
            </div>

            {/* 2. Top Layer (Left / Clipped): Traditional IR Black & White */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden will-change-[clip-path]"
              style={{
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              }}
            >
              <Image
                src="/assets/traditional-ir-night-vision.jpg"
                alt="Traditional Grainy Infrared IR Black and White Night Vision Feed"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-center pointer-events-none"
              />

              {/* IR Side Badge (Top Left) */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex flex-col items-start gap-1.5 pointer-events-none">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/70 border border-white/20 text-white backdrop-blur-md shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Old 1080p IR Night Vision
                  </span>
                </div>
                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-[10px] text-red-300 font-medium border border-red-500/30">
                  ✗ Grainy B&W · IR Flare Washout · Unreadable Plate
                </span>
              </div>
            </div>

            {/* 3. Real-time Surveillance HUD Stamp (Bottom Left & Right) */}
            <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 z-20 pointer-events-none font-mono text-[10px] sm:text-xs text-white/90 bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-md border border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>LIVE • CAM 01: VILLA ENTRANCE DRIVEWAY</span>
            </div>
            <div className="absolute bottom-3 right-4 sm:bottom-4 sm:right-6 z-20 pointer-events-none font-mono text-[10px] sm:text-xs text-white/90 bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-md border border-white/10 hidden sm:block">
              <span>{currentTime} IST • 30 FPS • H.265+</span>
            </div>

            {/* 4. DRAGGABLE SPLIT HANDLE & GLOW LINE */}
            <div
              className="absolute top-0 bottom-0 z-30 pointer-events-none will-change-transform"
              style={{
                left: `${sliderPosition}%`,
                transform: "translateX(-50%)",
              }}
            >
              {/* Vertical Glowing Divider Line */}
              <div className="w-[3px] h-full bg-gradient-to-b from-[#EF1313] via-white to-[#4E0DBA] shadow-[0_0_15px_#EF1313,0_0_25px_#4E0DBA]" />

              {/* Center Handle Knob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white text-[#16143E] shadow-[0_0_25px_rgba(239,19,19,0.8),0_4px_15px_rgba(0,0,0,0.5)] border-2 border-[#EF1313] flex items-center justify-center pointer-events-auto cursor-ew-resize transition-transform hover:scale-110 active:scale-95">
                <SlidersHorizontal size={18} className="text-[#EF1313]" />
              </div>

              {/* Drag Prompt Tooltip */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/25 text-[10px] font-bold text-white uppercase tracking-wider whitespace-nowrap hidden sm:block shadow-xl">
                ⇄ Drag to Compare
              </div>
            </div>
          </div>
        </div>

        {/* ── SIDE-BY-SIDE SPECIFICATION BREAKDOWN ─────────────────────── */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Card 1: Traditional Infrared (The Problem) */}
          <div className="rounded-3xl p-6 sm:p-8 bg-[#16123D]/60 border border-white/10 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400 flex-shrink-0">
                <XCircle size={20} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                  Old Traditional Infrared (IR)
                </h3>
                <span className="text-xs text-white/50">Standard 720p / 1080p Dome & Bullet</span>
              </div>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <XCircle size={15} className="text-red-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Monochrome Grayscale:</strong> Can never identify color of trespasser clothes, vehicle color, or hair.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle size={15} className="text-red-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Infrared Glare Blowout:</strong> Reflected IR LEDs turn vehicle number plates into solid blinding white blocks.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle size={15} className="text-red-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Dark Shadow Blindspots:</strong> Distance beyond 15m fades into pitch-black noise and sensor grain.
                </span>
              </li>
            </ul>
          </div>

          {/* Card 2: BroadNet ColorVu (The Solution) */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#1E144D] to-[#120D38] border-2 border-[#EF1313]/50 relative overflow-hidden shadow-xl shadow-[#EF1313]/10">
            {/* Glow accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#EF1313]/15 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between gap-3 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#EF1313] flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-[#EF1313]/30">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-display flex items-center gap-2">
                    <span>BroadNet ColorVu Pro</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Recommended
                    </span>
                  </h3>
                  <span className="text-xs text-white/60">F1.0 Super Aperture + Warm LED</span>
                </div>
              </div>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-white/85">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>24/7 Full-Color Clarity:</strong> Retains true vivid color even in total 0.0005 Lux darkness.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Readable Number Plates & Faces:</strong> Crystal clear facial recognition and high-contrast license plate capture.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Smart AI AcuSense:</strong> Eliminates false alarms from rain/leaves by distinguishing humans and vehicles.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Call to Action Card */}
        <div className="mt-12 max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#16143E] via-[#2A175B] to-[#16143E] border border-[#8B5CF6]/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1.5">
              <ShieldCheck size={14} />
              <span>Available in All 4-Camera &amp; 8-Camera Kits</span>
            </div>
            <h4
              className="text-xl sm:text-2xl font-bold text-white"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Upgrade Your Home or Business to ColorVu Today
            </h4>
            <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-lg">
              Includes free on-site survey across Avadi & Chennai, concealed conduit piping, and 2-Year replacement warranty.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto flex-shrink-0">
            <button
              type="button"
              onClick={handleBookClick}
              className="btn-crimson glow-btn-crimson w-full sm:w-auto py-3.5 px-6 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg"
            >
              <span>View ColorVu Packages</span>
              <ArrowRight size={15} />
            </button>
            <a
              href="https://wa.me/918681888111?text=Hello%20Broadnet%2C%20I%20saw%20the%20ColorVu%20Night%20Vision%20comparison%20slider%20on%20your%20website%20and%20want%20a%20quote%20for%20a%20ColorVu%20CCTV%20setup."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3 px-5 rounded-full border border-emerald-400/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle size={15} />
              <span>WhatsApp Quote</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
