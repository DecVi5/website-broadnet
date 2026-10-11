"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  MapPin,
  Search,
  CheckCircle2,
  Clock,
  Zap,
  Wifi,
  Send,
  MessageCircle,
  AlertCircle,
  Check,
  ChevronRight,
  Sparkles,
  Phone,
  User,
  X,
  Loader2,
} from "lucide-react";
import { scrollToWithPhysics } from "@/lib/scrollPhysics";
import { trackEvent } from "@/lib/analytics";
import { buildWhatsAppLink, normalizeTel } from "@/data/site";

export interface LocationData {
  name: string;
  pincode: string;
  zone: string;
  status: "available" | "coming_soon";
  speed: string;
  sameDay: boolean;
  landmark?: string;
}

export const SERVING_LOCATIONS: LocationData[] = [
  // Zone: Avadi Core (600054)
  { name: "TNHB Avadi", pincode: "600054", zone: "Avadi Core", status: "available", speed: "Up to 300 Mbps", sameDay: true, landmark: "Near Fire Station & Bus Terminus" },
  { name: "Fire Station Road", pincode: "600054", zone: "Avadi Core", status: "available", speed: "Up to 300 Mbps", sameDay: true, landmark: "Broadnet HQ Backbone Feeder" },
  { name: "JB Nagar & Vasantham Nagar", pincode: "600054", zone: "Avadi Core", status: "available", speed: "Up to 300 Mbps", sameDay: true },
  { name: "Gandhi Nagar & Nehru Nagar", pincode: "600054", zone: "Avadi Core", status: "available", speed: "Up to 300 Mbps", sameDay: true },
  { name: "Kamaraj Nagar", pincode: "600054", zone: "Avadi Core", status: "available", speed: "Up to 300 Mbps", sameDay: true },
  { name: "Cholambedu", pincode: "600054", zone: "Avadi Core", status: "available", speed: "Up to 300 Mbps", sameDay: true, landmark: "Cholambedu High Road" },
  { name: "Anna Nagar Avadi", pincode: "600054", zone: "Avadi Core", status: "available", speed: "Up to 300 Mbps", sameDay: true },
  { name: "Vaishnavi Nagar", pincode: "600054", zone: "Avadi Core", status: "available", speed: "Up to 300 Mbps", sameDay: true },
  { name: "HVF Estate & Ordnance Road", pincode: "600054", zone: "Avadi Core", status: "available", speed: "Up to 300 Mbps", sameDay: true },

  // Zone: Avadi Surrounds (600071 / 600055)
  { name: "Paruthipattu", pincode: "600071", zone: "Avadi Outskirts", status: "available", speed: "Up to 300 Mbps", sameDay: true },
  { name: "Kovilpathu", pincode: "600071", zone: "Avadi Outskirts", status: "available", speed: "Up to 300 Mbps", sameDay: true },
  { name: "Mittanamallee", pincode: "600055", zone: "Avadi Outskirts", status: "available", speed: "Up to 200 Mbps", sameDay: true, landmark: "IAF Gate Feeder" },
  { name: "Morai", pincode: "600055", zone: "Avadi Outskirts", status: "available", speed: "Up to 200 Mbps", sameDay: false },

  // Zone: Thirumullaivoyal (600062)
  { name: "Thirumullaivoyal", pincode: "600062", zone: "Thirumullaivoyal", status: "available", speed: "Up to 300 Mbps", sameDay: true, landmark: "CTH Road Corridor" },
  { name: "Thirumullaivoyal Pudur", pincode: "600062", zone: "Thirumullaivoyal", status: "available", speed: "Up to 300 Mbps", sameDay: true },
  { name: "Manikandapuram", pincode: "600062", zone: "Thirumullaivoyal", status: "available", speed: "Up to 300 Mbps", sameDay: true },
  { name: "Women's Industrial Estate", pincode: "600062", zone: "Thirumullaivoyal", status: "available", speed: "Up to 300 Mbps", sameDay: true, landmark: "Enterprise Industrial Hub" },
  { name: "Sivasakthi Nagar", pincode: "600062", zone: "Thirumullaivoyal", status: "available", speed: "Up to 300 Mbps", sameDay: true },

  // Zone: Pattabiram & Thandurai (600072)
  { name: "Pattabiram", pincode: "600072", zone: "Pattabiram", status: "available", speed: "Up to 300 Mbps", sameDay: true, landmark: "Pattabiram Railway Station Area" },
  { name: "Thandurai", pincode: "600072", zone: "Pattabiram", status: "available", speed: "Up to 300 Mbps", sameDay: true },
  { name: "Sekkadu", pincode: "600072", zone: "Pattabiram", status: "available", speed: "Up to 300 Mbps", sameDay: true },
  { name: "Iyyappan Nagar", pincode: "600072", zone: "Pattabiram", status: "available", speed: "Up to 300 Mbps", sameDay: true },
  { name: "Military Siding", pincode: "600072", zone: "Pattabiram", status: "available", speed: "Up to 300 Mbps", sameDay: true },

  // Zone: Ambattur (600053)
  { name: "Ambattur OT", pincode: "600053", zone: "Ambattur", status: "available", speed: "Up to 300 Mbps", sameDay: true },
  { name: "Menambedu", pincode: "600053", zone: "Ambattur", status: "available", speed: "Up to 300 Mbps", sameDay: true },
  { name: "Ram Nagar", pincode: "600053", zone: "Ambattur", status: "available", speed: "Up to 300 Mbps", sameDay: true },

  // Zone: Poonamallee (600056)
  { name: "Poonamallee Trunk Road", pincode: "600056", zone: "Poonamallee", status: "available", speed: "Up to 200 Mbps", sameDay: true },
  { name: "Senneerkuppam", pincode: "600056", zone: "Poonamallee", status: "available", speed: "Up to 200 Mbps", sameDay: true },
  { name: "Kumananchavadi", pincode: "600056", zone: "Poonamallee", status: "coming_soon", speed: "Up to 200 Mbps", sameDay: false, landmark: "Line Expansion Active" },
  { name: "Nemilichery & Thiruninravur", pincode: "602024", zone: "Outer Feeder", status: "coming_soon", speed: "Up to 200 Mbps", sameDay: false, landmark: "Pre-Booking Open" },
];

const ZONE_FILTERS = [
  "All Zones",
  "Avadi Core",
  "Thirumullaivoyal",
  "Pattabiram",
  "Ambattur",
  "Poonamallee",
];

export default function LocationChecker() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedZone, setSelectedZone] = useState("All Zones");
  const [activeResult, setActiveResult] = useState<LocationData | null>(null);
  const [isNotAvailable, setIsNotAvailable] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Lead capture state for coming_soon / not_available
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadError, setLeadError] = useState("");

  const ref = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  // Autocomplete matching list
  const autocompleteSuggestions = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q || q.length < 1) return [];
    return SERVING_LOCATIONS.filter(
      (loc) =>
        loc.name.toLowerCase().includes(q) ||
        loc.pincode.includes(q) ||
        loc.zone.toLowerCase().includes(q) ||
        (loc.landmark && loc.landmark.toLowerCase().includes(q))
    ).slice(0, 6);
  }, [searchQuery]);

  // Filtered list for directory view
  const filteredLocations = useMemo(() => {
    return SERVING_LOCATIONS.filter((loc) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        loc.name.toLowerCase().includes(q) ||
        loc.pincode.includes(q) ||
        loc.zone.toLowerCase().includes(q) ||
        (loc.landmark && loc.landmark.toLowerCase().includes(q));

      const matchesZone = selectedZone === "All Zones" || loc.zone === selectedZone;
      return matchesSearch && matchesZone;
    });
  }, [searchQuery, selectedZone]);

  const handleSelectLocation = (loc: LocationData) => {
    setActiveResult(loc);
    setIsNotAvailable(false);
    setShowDropdown(false);
    setSearchQuery(loc.name);
    setLeadSubmitted(false);
    setLeadError("");
    trackEvent("coverage_check", {
      area: loc.name,
      pincode: loc.pincode,
      status: loc.status,
    });
  };

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const q = searchQuery.trim().toLowerCase();
    if (!q) return;

    // Check direct match
    const exact = SERVING_LOCATIONS.find(
      (l) => l.name.toLowerCase() === q || l.pincode === q
    );
    if (exact) {
      handleSelectLocation(exact);
      return;
    }

    const partial = autocompleteSuggestions[0];
    if (partial) {
      handleSelectLocation(partial);
      return;
    }

    // No match found -> Not Available State
    setActiveResult(null);
    setIsNotAvailable(true);
    setShowDropdown(false);
    setLeadSubmitted(false);
    setLeadError("");
    trackEvent("coverage_check", {
      area: searchQuery,
      status: "not_available",
    });
  };

  const handleBookLocation = (locName: string) => {
    trackEvent("lead_click", { action: "book_fiber", area: locName });
    window.dispatchEvent(
      new CustomEvent("broadnet:select-service", {
        detail: { service: "Broadnet FTTH Plans" },
      })
    );
    window.dispatchEvent(
      new CustomEvent("broadnet:set-location", {
        detail: { location: locName },
      })
    );
    scrollToWithPhysics("enquiry");
  };

  const handleLeadCapture = async (e: React.FormEvent, locationTitle: string, statusType: "coming_soon" | "not_available") => {
    e.preventDefault();
    if (!leadName.trim() || !leadPhone.trim()) {
      setLeadError("Please provide your name and phone number.");
      return;
    }
    const clean = leadPhone.replace(/[\s\-\(\)]/g, "");
    if (!/^(?:\+?91|0)?[6-9]\d{9}$/.test(clean)) {
      setLeadError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    setLeadSubmitting(true);
    setLeadError("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: leadName.trim(),
          phone: leadPhone.trim(),
          location: locationTitle,
          enquiryType: statusType === "coming_soon" ? "Coverage Expansion Waitlist" : "Coverage Feasibility Request",
          requirements: ["Broadnet FTTH Feasibility"],
          message: `Coverage Checker Lead [${statusType.toUpperCase()}]: Customer requested optical fiber feasibility for area: ${locationTitle}`,
        }),
      });

      if (res.ok) {
        setLeadSubmitted(true);
        trackEvent("form_submit", {
          form_name: "coverage_lead",
          area: locationTitle,
          status: statusType,
        });
      } else {
        const d = await res.json();
        setLeadError(d.error || "Failed to submit. Please call 86818 88111 directly.");
      }
    } catch {
      setLeadError("Network error. Please WhatsApp us directly at 86818 88111.");
    } finally {
      setLeadSubmitting(false);
    }
  };

  return (
    <section
      ref={ref}
      id="coverage"
      className="py-20 sm:py-24 bg-[#07091E] relative overflow-hidden text-white"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#4E0DBA]/15 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#EF1313]/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00C2FF] mb-3">
            <Wifi size={14} className="animate-pulse" />
            100+ KM Optical Fiber Network Reach
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Check Fiber Broadband Availability <span className="text-gradient">in Your Area</span>
          </h2>
          <p className="text-white/65 text-sm sm:text-base leading-relaxed">
            Broadnet operates private high-speed fiber rings across Avadi and nearby areas. Enter your locality or pincode for instant connection feasibility.
          </p>
        </motion.div>

        {/* Search & Quick Check Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto bg-[#110E2E]/90 border border-white/12 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl mb-12 relative"
        >
          {/* Search Input Form */}
          <form onSubmit={handleSearchSubmit} className="relative mb-4">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
            />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowDropdown(true);
                setIsNotAvailable(false);
              }}
              onFocus={() => {
                if (searchQuery.trim().length > 0) setShowDropdown(true);
              }}
              placeholder="Search locality or pincode (e.g. TNHB, Cholambedu, 600054)..."
              className="w-full bg-[#18143F] border border-white/15 focus:border-[#00C2FF] focus:ring-2 focus:ring-[#00C2FF]/20 text-white rounded-2xl py-4 pl-12 pr-28 text-sm sm:text-base outline-none transition-all placeholder:text-white/35 font-body"
            />

            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setShowDropdown(false);
                    setActiveResult(null);
                    setIsNotAvailable(false);
                  }}
                  aria-label="Clear search query"
                  className="p-2 text-white/50 hover:text-white rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                >
                  <X size={16} />
                </button>
              )}
              <button
                type="submit"
                className="min-h-[44px] px-4 rounded-xl bg-[#00C2FF] hover:bg-[#00a6db] text-[#07091E] font-bold text-xs flex items-center gap-1 cursor-pointer transition-colors shadow-sm"
              >
                <span>Check</span>
              </button>
            </div>

            {/* Autocomplete Dropdown */}
            <AnimatePresence>
              {showDropdown && autocompleteSuggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="absolute left-0 right-0 top-full mt-2 bg-[#16123D] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-30"
                >
                  <div className="p-2 text-[11px] font-bold uppercase tracking-wider text-white/40 border-b border-white/8 px-4">
                    Matching Coverage Areas
                  </div>
                  <div className="max-h-60 overflow-y-auto custom-scrollbar-dark">
                    {autocompleteSuggestions.map((loc) => (
                      <button
                        key={loc.name}
                        type="button"
                        onClick={() => handleSelectLocation(loc)}
                        className="w-full min-h-[48px] px-4 py-2.5 text-left hover:bg-white/10 transition-colors flex items-center justify-between gap-3 cursor-pointer border-b border-white/5 last:border-0"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <MapPin size={15} className="text-[#00C2FF] flex-shrink-0" />
                          <div className="truncate">
                            <span className="font-semibold text-sm text-white block truncate">
                              {loc.name}
                            </span>
                            <span className="text-[11px] text-white/50 block">
                              Pincode: {loc.pincode} · Zone: {loc.zone}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              loc.status === "available"
                                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                                : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                            }`}
                          >
                            {loc.status === "available" ? "Live" : "Coming Soon"}
                          </span>
                          <ChevronRight size={13} className="text-white/40" />
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>

          {/* Quick Zone Filter Chips (Wrapping responsive layout with 44px touch targets) */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs text-white/50 font-bold uppercase tracking-wider whitespace-nowrap mr-1">
              Filter:
            </span>
            {ZONE_FILTERS.map((zone) => (
              <button
                key={zone}
                type="button"
                onClick={() => {
                  setSelectedZone(zone);
                  setActiveResult(null);
                  setIsNotAvailable(false);
                }}
                className={`min-h-[44px] px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 border flex items-center justify-center cursor-pointer ${
                  selectedZone === zone
                    ? "bg-[#4E0DBA] border-[#4E0DBA] text-white shadow-md shadow-[#4E0DBA]/40"
                    : "bg-white/5 border-white/10 text-white/70 hover:text-white hover:border-white/25"
                }`}
              >
                {zone}
              </button>
            ))}
          </div>

          {/* STATE 1: AVAILABLE (Active Result with status === "available") */}
          <AnimatePresence>
            {activeResult && activeResult.status === "available" && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: 10 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: 10 }}
                transition={{ duration: 0.35 }}
                className="mt-6 pt-6 border-t border-white/10 overflow-hidden"
              >
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-[#18143F] to-emerald-500/5 border border-emerald-500/35">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h4
                          className="text-xl sm:text-2xl font-bold text-white"
                          style={{ fontFamily: "Syne, sans-serif" }}
                        >
                          {activeResult.name}
                        </h4>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-white/80 border border-white/10">
                          {activeResult.pincode}
                        </span>
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                          <CheckCircle2 size={12} className="text-emerald-400" />
                          <span>100% Fiber Ready</span>
                        </span>
                      </div>
                      <p className="text-white/60 text-xs">
                        Zone: <strong className="text-white/85">{activeResult.zone}</strong>
                        {activeResult.landmark && ` · ${activeResult.landmark}`}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <button
                        type="button"
                        onClick={() => handleBookLocation(activeResult.name)}
                        className="flex-1 sm:flex-initial min-h-[44px] px-5 py-2.5 rounded-xl bg-[#EF1313] hover:bg-[#d00e0e] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-[#EF1313]/30 transition-all cursor-pointer"
                      >
                        <Send size={13} />
                        <span>Book Connection</span>
                      </button>

                      <a
                        href={buildWhatsAppLink({
                          text: `Hi Broadnet, I am located in ${activeResult.name} (${activeResult.pincode}). Please verify fiber availability and arrange installation.`,
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all"
                      >
                        <MessageCircle size={14} className="fill-white" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-white/10 text-xs">
                    <div>
                      <span className="text-white/40 block">Max Fiber Speed</span>
                      <span className="font-bold text-white">{activeResult.speed}</span>
                    </div>
                    <div>
                      <span className="text-white/40 block">Installation</span>
                      <span className="font-bold text-emerald-400">
                        {activeResult.sameDay ? "Same-Day Setup" : "24–48 Hours"}
                      </span>
                    </div>
                    <div>
                      <span className="text-white/40 block">Hardware Included</span>
                      <span className="font-bold text-white">Free ONT Router</span>
                    </div>
                    <div>
                      <span className="text-white/40 block">Local SLA Response</span>
                      <span className="font-bold text-white">&lt; 2 Hr SLA Dispatch</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* STATE 2: COMING SOON (Active Result with status === "coming_soon") */}
          <AnimatePresence>
            {activeResult && activeResult.status === "coming_soon" && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: 10 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: 10 }}
                transition={{ duration: 0.35 }}
                className="mt-6 pt-6 border-t border-white/10 overflow-hidden"
              >
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-[#18143F] to-amber-500/5 border border-amber-500/35">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h4
                          className="text-xl sm:text-2xl font-bold text-white"
                          style={{ fontFamily: "Syne, sans-serif" }}
                        >
                          {activeResult.name}
                        </h4>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-white/80 border border-white/10">
                          {activeResult.pincode}
                        </span>
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                          <Clock size={12} className="text-amber-400" />
                          <span>Line Expansion Underway</span>
                        </span>
                      </div>
                      <p className="text-white/60 text-xs">
                        Fiber cabling is actively expanding into {activeResult.name}. Pre-register for priority installation when the distribution box goes live.
                      </p>
                    </div>

                    <a
                      href={buildWhatsAppLink({
                        text: `Hi Broadnet, I am in ${activeResult.name} (${activeResult.pincode}) where expansion is underway. Please notify me when fiber goes live.`,
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] px-4 py-2.5 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all"
                    >
                      <MessageCircle size={14} className="fill-white" />
                      <span>WhatsApp Desk</span>
                    </a>
                  </div>

                  {/* Lead Capture for Coming Soon */}
                  {leadSubmitted ? (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2 font-medium">
                      <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                      <span>You are registered on the priority waitlist! Our Avadi technician will call you as soon as the line is spliced.</span>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => handleLeadCapture(e, activeResult.name, "coming_soon")}
                      className="pt-4 border-t border-white/10"
                    >
                      <div className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2">
                        Get Notified When Live & Receive Free Installation
                      </div>
                      <div className="grid sm:grid-cols-3 gap-2.5">
                        <div className="relative">
                          <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                          <input
                            type="text"
                            placeholder="Your Name"
                            value={leadName}
                            onChange={(e) => setLeadName(e.target.value)}
                            className="w-full bg-[#16123D] border border-white/15 rounded-xl py-2.5 pl-9 pr-3 text-xs text-white placeholder:text-white/40 outline-none focus:border-amber-400 min-h-[44px]"
                          />
                        </div>
                        <div className="relative">
                          <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                          <input
                            type="tel"
                            placeholder="10-digit Mobile Number"
                            value={leadPhone}
                            onChange={(e) => setLeadPhone(e.target.value)}
                            className="w-full bg-[#16123D] border border-white/15 rounded-xl py-2.5 pl-9 pr-3 text-xs text-white placeholder:text-white/40 outline-none focus:border-amber-400 min-h-[44px]"
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={leadSubmitting}
                          className="min-h-[44px] px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#07091E] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50"
                        >
                          {leadSubmitting ? (
                            <Loader2 size={14} className="animate-spin" />
                          ) : (
                            <Check size={14} />
                          )}
                          <span>Notify Me When Live</span>
                        </button>
                      </div>
                      {leadError && (
                        <p className="mt-1.5 text-[11px] text-[#EF1313] font-medium">{leadError}</p>
                      )}
                    </form>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* STATE 3: NOT AVAILABLE (Search returned no area or pincode) */}
          <AnimatePresence>
            {isNotAvailable && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: 10 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: 10 }}
                transition={{ duration: 0.35 }}
                className="mt-6 pt-6 border-t border-white/10 overflow-hidden"
              >
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-red-500/10 via-[#18143F] to-red-500/5 border border-red-500/30">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h4
                          className="text-xl sm:text-2xl font-bold text-white"
                          style={{ fontFamily: "Syne, sans-serif" }}
                        >
                          {searchQuery}
                        </h4>
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 flex items-center gap-1">
                          <AlertCircle size={12} className="text-red-400" />
                          <span>Not Yet In Core Network</span>
                        </span>
                      </div>
                      <p className="text-white/60 text-xs">
                        Fiber is not yet connected to this exact pin or locality. However, our trunk line may run nearby. Submit your details for feasibility verification by our engineering team.
                      </p>
                    </div>

                    <a
                      href={buildWhatsAppLink({
                        text: `Hi Broadnet, I want to check optical fiber feasibility for area: "${searchQuery}". Please check if a connection can be extended to my street.`,
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] px-4 py-2.5 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all"
                    >
                      <MessageCircle size={14} className="fill-white" />
                      <span>WhatsApp Enquiry</span>
                    </a>
                  </div>

                  {/* Lead Capture for Not Available */}
                  {leadSubmitted ? (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2 font-medium">
                      <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                      <span>Feasibility request submitted! Our field engineer will check cable proximity and call you within 24 hours.</span>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => handleLeadCapture(e, searchQuery, "not_available")}
                      className="pt-4 border-t border-white/10"
                    >
                      <div className="text-xs font-bold uppercase tracking-wider text-red-300 mb-2">
                        Request Field Feasibility & Splicing Assessment
                      </div>
                      <div className="grid sm:grid-cols-3 gap-2.5">
                        <div className="relative">
                          <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                          <input
                            type="text"
                            placeholder="Your Name"
                            value={leadName}
                            onChange={(e) => setLeadName(e.target.value)}
                            className="w-full bg-[#16123D] border border-white/15 rounded-xl py-2.5 pl-9 pr-3 text-xs text-white placeholder:text-white/40 outline-none focus:border-[#EF1313] min-h-[44px]"
                          />
                        </div>
                        <div className="relative">
                          <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                          <input
                            type="tel"
                            placeholder="10-digit Mobile Number"
                            value={leadPhone}
                            onChange={(e) => setLeadPhone(e.target.value)}
                            className="w-full bg-[#16123D] border border-white/15 rounded-xl py-2.5 pl-9 pr-3 text-xs text-white placeholder:text-white/40 outline-none focus:border-[#EF1313] min-h-[44px]"
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={leadSubmitting}
                          className="min-h-[44px] px-4 rounded-xl bg-[#EF1313] hover:bg-[#d00e0e] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50 shadow-md shadow-[#EF1313]/30"
                        >
                          {leadSubmitting ? (
                            <Loader2 size={14} className="animate-spin" />
                          ) : (
                            <Send size={14} />
                          )}
                          <span>Request Feasibility</span>
                        </button>
                      </div>
                      {leadError && (
                        <p className="mt-1.5 text-[11px] text-[#EF1313] font-medium">{leadError}</p>
                      )}
                    </form>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Condensed Serving Locations Directory */}
        <div className="max-w-5xl mx-auto mb-12 bg-[#100D2C]/80 border border-white/10 rounded-3xl p-5 sm:p-7 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-white/8">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#00C2FF]/10 border border-[#00C2FF]/20 flex items-center justify-center">
                <MapPin size={15} className="text-[#00C2FF]" />
              </div>
              <h3
                className="text-base font-bold text-white"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Serving Localities & Fiber Clusters
              </h3>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/10 text-white/70 font-mono font-medium">
                {filteredLocations.length} Areas
              </span>
            </div>
            <span className="text-xs text-white/50">
              Click any area to test feasibility & book
            </span>
          </div>

          {filteredLocations.length > 0 ? (
            <div className="max-h-[300px] overflow-y-auto pr-1.5 custom-scrollbar-dark">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {filteredLocations.map((loc) => {
                  const isSelected = activeResult?.name === loc.name;
                  return (
                    <button
                      key={loc.name}
                      type="button"
                      onClick={() => handleSelectLocation(loc)}
                      className={`w-full min-h-[48px] px-3.5 py-2.5 rounded-xl border text-left transition-all duration-200 flex items-center justify-between gap-2 group cursor-pointer ${
                        isSelected
                          ? "bg-[#4E0DBA]/30 border-[#00C2FF] shadow-md shadow-[#00C2FF]/10 ring-1 ring-[#00C2FF]/60"
                          : "bg-[#141038]/70 border-white/8 hover:border-white/20 hover:bg-[#1B1647]"
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span
                          className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                            loc.status === "available"
                              ? "bg-emerald-400 shadow-[0_0_6px_#34D399]"
                              : "bg-amber-400 shadow-[0_0_6px_#FBBF24]"
                          }`}
                          title={loc.status === "available" ? "Fiber Live" : "Line Expansion"}
                        />
                        <div className="min-w-0 flex items-baseline gap-1.5 truncate">
                          <span className="font-semibold text-xs text-white group-hover:text-[#00C2FF] transition-colors truncate">
                            {loc.name}
                          </span>
                          <span className="text-[10px] font-mono text-white/40 flex-shrink-0">
                            {loc.pincode}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                          {loc.speed.replace("Up to ", "").replace(" [CONFIRM]", "")}
                        </span>
                        <ChevronRight
                          size={12}
                          className={`transition-transform duration-200 ${
                            isSelected
                              ? "text-[#00C2FF] translate-x-0.5"
                              : "text-white/25 group-hover:text-white/60"
                          }`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Empty Search Fallback */
            <div className="p-8 rounded-3xl bg-[#110E2A] border border-white/10 text-center max-w-xl mx-auto">
              <AlertCircle size={32} className="text-amber-400 mx-auto mb-3" />
              <h4 className="text-lg font-bold text-white mb-2">
                Locality Not in List?
              </h4>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                Broadnet continuously extends private optical cables across Avadi and surrounding taluks. Send your street location to our engineering team for instant feasibility mapping.
              </p>
              <button
                type="button"
                onClick={() => handleSearchSubmit()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#EF1313] hover:bg-[#d00e0e] text-white text-xs font-bold transition-all shadow-md cursor-pointer mr-2"
              >
                <span>Request Feasibility for &ldquo;{searchQuery}&rdquo;</span>
              </button>
            </div>
          )}
        </div>

        {/* Network Infrastructure Trust Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-3xl bg-[#0D0A24] border border-white/8">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#4E0DBA]/20 border border-[#4E0DBA]/30 flex items-center justify-center flex-shrink-0">
              <Zap size={18} className="text-[#A78BFA]" />
            </div>
            <div>
              <h5 className="font-bold text-sm text-white mb-1">
                Zero Third-Party Reseller Mesh
              </h5>
              <p className="text-white/50 text-xs leading-relaxed">
                Direct optical connections from our private headend ring. Dedicated symmetric bandwidth engineered to prevent evening congestion.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#EF1313]/20 border border-[#EF1313]/30 flex items-center justify-center flex-shrink-0">
              <Clock size={18} className="text-[#EF1313]" />
            </div>
            <div>
              <h5 className="font-bold text-sm text-white mb-1">
                Local Avadi Technician SLA
              </h5>
              <p className="text-white/50 text-xs leading-relaxed">
                Technician response within 2 hours; site visits scheduled at your convenience.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 size={18} className="text-emerald-400" />
            </div>
            <div>
              <h5 className="font-bold text-sm text-white mb-1">
                Free Optical ONT Equipment
              </h5>
              <p className="text-white/50 text-xs leading-relaxed">
                All live coverage areas qualify for 100% Free Installation and free-to-use high gain optical ONT routers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
