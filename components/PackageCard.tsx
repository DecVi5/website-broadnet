"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  X,
  Camera,
  HardDrive,
  Cpu,
} from "lucide-react";
import { CCTVPackage, buildWhatsAppLink } from "@/data/site";
import { scrollToWithPhysics } from "@/lib/scrollPhysics";
import { trackEvent } from "@/lib/analytics";

interface PackageCardProps {
  pkg: CCTVPackage;
  onSelect?: (pkg: CCTVPackage) => void;
  showWhatIsIncluded?: boolean;
  variant?: "light" | "dark";
}

export default function PackageCard({
  pkg,
  onSelect,
  showWhatIsIncluded = true,
  variant = "light",
}: PackageCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const isPopular = pkg.popular;
  const isDark = variant === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = origOverflow;
    };
  }, [isOpen]);

  const handleOpenDetails = () => {
    trackEvent("package_click", { category: "PackageCard", label: `OpenDetails: ${pkg.name}` });
    setIsOpen(true);
  };

  const handleBook = () => {
    trackEvent("package_click", { category: "PackageCard", label: pkg.name });
    setIsOpen(false);

    if (onSelect) {
      onSelect(pkg);
    } else {
      const formEl =
        document.getElementById("enquiry") ||
        document.getElementById("cctv-quote-form");
      if (formEl) {
        scrollToWithPhysics(formEl.id);
      } else {
        window.location.href = `/cctv-landing#cctv-quote-form`;
      }
    }
  };

  const isEnquirePrice = pkg.price.toLowerCase() === "enquire";
  const waLink = buildWhatsAppLink({
    text: isEnquirePrice
      ? `Hello Broadnet, I am interested in the ${pkg.name}. Please share package pricing details and schedule a site survey.`
      : `Hello Broadnet, I am interested in the ${pkg.name} (${pkg.price}). Please share details and schedule a site survey.`,
  });

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. COMPACT CARD (Default / Before Click)                                   */}
      {/* Shows: Name, enquiry button, few key points. Clean, compact & not very big */}
      {/* ========================================================================= */}
      <div
        onClick={handleOpenDetails}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleOpenDetails();
          }
        }}
        className={`group cursor-pointer rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-[transform,box-shadow,border-color] duration-200 transform-gpu relative border ${
          isDark
            ? isPopular
              ? "bg-[#16143E] border-2 border-[#EF1313] shadow-xl hover:shadow-2xl shadow-[#EF1313]/20 hover:border-[#EF1313]"
              : "bg-[#120F2E] border-white/10 hover:border-[#4E0DBA]/50 shadow-md hover:shadow-xl hover:-translate-y-1"
            : isPopular
              ? "bg-white border-[#EF1313] shadow-xl hover:shadow-2xl ring-2 ring-[#EF1313]/20 hover:-translate-y-1"
              : "bg-white border-[#16143E]/10 hover:border-[#4E0DBA]/40 shadow-xs hover:shadow-xl hover:-translate-y-1"
        }`}
      >
        {/* Floating Badge */}
        {pkg.badge && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
            <span
              className={`px-3.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1.5 ${
                isPopular
                  ? "bg-[#EF1313] text-white shadow-[#EF1313]/30"
                  : isDark
                    ? "bg-[#4E0DBA] text-white"
                    : "bg-[#16143E] text-white"
              }`}
            >
              <Sparkles size={11} />
              <span>{pkg.badge}</span>
            </span>
          </div>
        )}

        <div>
          {/* Header: Name + Tagline */}
          <div className="mb-4 pt-1">
            <h3
              className={`text-xl sm:text-2xl font-bold tracking-tight leading-snug group-hover:text-[#EF1313] transition-colors ${
                isDark ? "text-white" : "text-[#16143E]"
              }`}
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              {pkg.name}
            </h3>
            <p
              className={`text-xs sm:text-sm mt-1.5 leading-relaxed line-clamp-2 ${
                isDark ? "text-white/65" : "text-[#16143E]/65"
              }`}
            >
              {pkg.tagline}
            </p>
          </div>

          {/* Pricing Box (Compact) */}
          <div
            className={`p-3.5 rounded-2xl mb-4 border flex items-center justify-between ${
              isDark
                ? "bg-white/5 border-white/10"
                : "bg-[#F8F9FD] border-[#16143E]/6"
            }`}
          >
            <div>
              <span
                className={`text-2xl sm:text-3xl font-extrabold block ${
                  isDark ? "text-white" : "text-[#16143E]"
                }`}
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {pkg.price}
              </span>
              <span
                className={`text-[11px] font-medium block ${
                  isDark ? "text-white/60" : "text-[#16143E]/60"
                }`}
              >
                {pkg.unit}
              </span>
            </div>

            <span
              className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                isDark
                  ? "bg-[#4E0DBA]/20 border-[#4E0DBA]/40 text-[#A78BFA]"
                  : "bg-[#4E0DBA]/10 border-[#4E0DBA]/20 text-[#4E0DBA]"
              }`}
            >
              Turnkey
            </span>
          </div>

          {/* Few Key Points (Specs Pills) */}
          <div className="flex flex-wrap gap-1.5 mb-5 text-[11px] font-semibold">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border ${
                isDark
                  ? "bg-white/5 border-white/10 text-white/85"
                  : "bg-[#16143E]/5 border-[#16143E]/8 text-[#16143E]/80"
              }`}
            >
              <Camera size={13} className="text-[#EF1313] flex-shrink-0" />
              <span>{pkg.resolution}</span>
            </span>
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border ${
                isDark
                  ? "bg-white/5 border-white/10 text-white/85"
                  : "bg-[#16143E]/5 border-[#16143E]/8 text-[#16143E]/80"
              }`}
            >
              <HardDrive size={13} className="text-[#4E0DBA] flex-shrink-0" />
              <span>{pkg.storage}</span>
            </span>
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border ${
                isDark
                  ? "bg-white/5 border-white/10 text-white/85"
                  : "bg-[#16143E]/5 border-[#16143E]/8 text-[#16143E]/80"
              }`}
            >
              <Cpu size={13} className="text-amber-500 flex-shrink-0" />
              <span>{pkg.dvrChannels}</span>
            </span>
          </div>
        </div>

        {/* Footer Actions: Enquiry Button + Quick WhatsApp */}
        <div
          className={`pt-3 border-t flex items-center gap-2 ${
            isDark ? "border-white/10" : "border-[#16143E]/8"
          }`}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleOpenDetails();
            }}
            className={`flex-1 min-h-[44px] py-2.5 px-4 rounded-full font-bold text-xs sm:text-[13px] flex items-center justify-center gap-2 cursor-pointer transition-transform duration-150 active:scale-[0.97] shadow-sm ${
              isPopular
                ? "btn-crimson glow-btn-crimson"
                : isDark
                  ? "bg-white/10 hover:bg-white/20 text-white group-hover:bg-[#4E0DBA] group-hover:text-white"
                  : "bg-[#16143E] hover:bg-[#25225E] text-white"
            }`}
          >
            <span>Enquire Details</span>
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-150" />
          </button>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
              trackEvent("whatsapp_click", { category: "PackageCardCompact", label: pkg.name });
            }}
            className={`w-11 h-11 rounded-full flex items-center justify-center border transition-colors flex-shrink-0 ${
              isDark
                ? "bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#4ade80] border-[#25D366]/40"
                : "bg-[#25D366]/12 hover:bg-[#25D366]/20 text-[#15803d] border-[#25D366]/30"
            }`}
            title="Quick WhatsApp Inquiry"
            aria-label={`WhatsApp Inquiry for ${pkg.name}`}
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. EXPANDED MODAL OVERLAY (On Click)                                      */}
      {/* Renders in Portal to avoid disturbing sibling cards in the grid.          */}
      {/* Matches user's screenshot layout and signature dark brand styling.        */}
      {/* ========================================================================= */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <div
                className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto custom-scrollbar-dark"
                data-lenis-prevent
              >
                {/* Backdrop Blur */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  onClick={() => setIsOpen(false)}
                  className="fixed inset-0 bg-[#0A081E]/80 backdrop-blur-md -z-10"
                />

                {/* Modal Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.93, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: 16 }}
                  transition={{ type: "spring", damping: 28, stiffness: 360 }}
                  className="relative w-full max-w-md my-auto rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-[#16143E] via-[#120F2E] to-[#0D0B24] border border-[#4E0DBA]/40 shadow-2xl shadow-black/80 text-white overflow-hidden max-h-[90vh] overflow-y-auto custom-scrollbar-dark"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Subtle top border glow */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EF1313]/50 via-[#4E0DBA] to-[#EF1313]/50" />

                  {/* Close (X) Button */}
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
                    aria-label="Close package details"
                  >
                    <X size={18} />
                  </button>

                  {/* Floating Badge */}
                  {pkg.badge && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-[#4E0DBA] text-white shadow-md mb-3">
                      <Sparkles size={11} />
                      <span>{pkg.badge}</span>
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-4">
                    <h3
                      className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {pkg.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 mt-1 leading-relaxed">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Pricing Box */}
                  <div className="p-4 rounded-2xl mb-5 bg-white/5 border border-white/10">
                    <div className="flex items-baseline gap-1.5">
                      <span
                        className="text-3xl sm:text-4xl font-extrabold text-white"
                        style={{ fontFamily: "Syne, sans-serif" }}
                      >
                        {pkg.price}
                      </span>
                    </div>
                    <span className="text-[11.5px] font-medium block mt-0.5 text-white/60">
                      {pkg.unit}
                    </span>
                  </div>

                  {/* Core Specs Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5 text-[11px] font-semibold text-white/85">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border bg-white/5 border-white/10">
                      <Camera size={13} className="text-[#EF1313] flex-shrink-0" />
                      <span>{pkg.resolution}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border bg-white/5 border-white/10">
                      <HardDrive size={13} className="text-purple-400 flex-shrink-0" />
                      <span>{pkg.storage}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border bg-white/5 border-white/10">
                      <Cpu size={13} className="text-amber-400 flex-shrink-0" />
                      <span>{pkg.dvrChannels}</span>
                    </span>
                  </div>

                  {/* Full Package Inclusions */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-black uppercase tracking-wider block text-white/50">
                      Package Inclusions
                    </span>
                    <div className="space-y-2">
                      {pkg.features.map((feat) => (
                        <div
                          key={feat}
                          className="flex items-start gap-2 text-xs sm:text-[13px] text-white/80"
                        >
                          <Check
                            size={14}
                            className="text-emerald-400 flex-shrink-0 mt-0.5"
                          />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* "What's Included & Terms" Card (Red Bordered matching screenshot) */}
                  {showWhatIsIncluded && pkg.included && (
                    <div className="mb-6 p-3.5 rounded-2xl border border-[#EF1313]/30 bg-[#EF1313]/5 text-white/85 text-xs space-y-2">
                      <div className="flex items-center gap-1.5 font-bold text-[#EF1313] text-[11.5px] uppercase tracking-wider">
                        <ShieldCheck size={14} />
                        <span>What&apos;s Included & Terms</span>
                      </div>
                      <div className="space-y-1.5 text-[11px] leading-relaxed text-white/75">
                        <div>
                          <strong className="text-white">Wiring Included:</strong>{" "}
                          {pkg.included.wiringMeters > 0
                            ? `${pkg.included.wiringMeters} metres conduit cabling`
                            : "Per custom survey"}
                        </div>
                        <div>
                          <strong className="text-white">Extra Cabling:</strong>{" "}
                          {pkg.included.extraWiringCost}
                        </div>
                        <div>
                          <strong className="text-white">GST:</strong>{" "}
                          {pkg.included.gstNote}
                        </div>
                        <div>
                          <strong className="text-white">Warranty:</strong>{" "}
                          {pkg.included.warranty}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="space-y-2.5 pt-2 border-t border-white/10">
                    <button
                      type="button"
                      onClick={handleBook}
                      className={`w-full min-h-[44px] py-3 px-4 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md ${
                        isPopular
                          ? "btn-crimson glow-btn-crimson"
                          : "bg-[#2A2466] hover:bg-[#342D7D] text-white border border-white/15"
                      }`}
                    >
                      <span>{pkg.ctaText}</span>
                      <ArrowRight size={14} />
                    </button>

                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackEvent("whatsapp_click", {
                          category: "PackageCardModal",
                          label: pkg.name,
                        })
                      }
                      className="w-full min-h-[44px] py-3 px-3 rounded-full font-bold text-xs flex items-center justify-center gap-1.5 border border-[#25D366]/40 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#4ade80] transition-colors"
                    >
                      <svg
                        className="w-3.5 h-3.5 flex-shrink-0 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      <span>WhatsApp Inquiry</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
