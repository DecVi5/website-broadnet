"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Camera,
  Star,
  CheckCircle2,
  HardDrive,
  Eye,
  Sliders,
  Sparkles,
  ArrowRight,
  Clock,
  MapPin,
  Send,
  Check,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  Building,
  Home,
  Store,
  Factory,
  Briefcase,
  Sun,
  Moon,
  Calculator,
  User,
} from "lucide-react";
import { scrollToWithPhysics } from "@/lib/scrollPhysics";
import PackageCard from "@/components/PackageCard";
import NightVisionComparisonSlider from "@/components/NightVisionComparisonSlider";
import { CCTV_PACKAGES, CCTVPackage } from "@/data/site";

const REVIEWS = [
  {
    name: "Karthik Rajagopalan",
    location: "TNHB Avadi",
    comment:
      "Installed a 4-camera Hikvision ColorVu system for our villa. The night clarity is outstanding and their technicians completed neat concealed cabling without damaging our walls. Highly recommended in Avadi!",
    stars: 5,
    tag: "Residential Installation",
  },
  {
    name: "Dr. Senthil Kumar",
    location: "Thirumullaivoyal",
    comment:
      "Broadnet setup IP cameras and biometric attendance for our clinic. The mobile app gives crystal clear live view with audio. Prompt service and genuine bills.",
    stars: 5,
    tag: "Commercial & Biometrics",
  },
  {
    name: "Venkatesh Prasad",
    location: "Pattabiram",
    comment:
      "They gave a quick quotation within 2 hours of calling 8681888111. Very transparent quote with no surprise charges. Excellent support whenever we need DVR assistance.",
    stars: 5,
    tag: "Quick Dispatch & AMC",
  },
];

const FAQS = [
  {
    q: "How do I get an exact CCTV installation quote?",
    a: "Our certified CCTV specialists review your premises layout and requirements (with priority in Avadi, Pattabiram, Thirumullaivoyal, Ambattur, Poonamallee, etc.) to assess coverage angles, identify blind spots, calculate necessary cable footage, and provide an exact, itemized quotation.",
  },
  {
    q: "Can I view the cameras live on my mobile phone when away?",
    a: "Yes! Every CCTV package includes free mobile application configuration on your Android phone, iPhone, iPad, or laptop. You can monitor live views, play back past footage, and receive push notifications from anywhere in the world.",
  },
  {
    q: "What is the difference between IP and HD cameras?",
    a: "HD (Analog HD/TVI) cameras use coaxial cable and offer fantastic 1080p to 5MP clarity at economical prices. IP (Network) cameras connect via Cat6 ethernet cables, offer ultra-high resolutions up to 4K, smart AI human/vehicle detection, and plug-and-play scalability.",
  },
  {
    q: "Do you provide CCTV Annual Maintenance Contracts (AMC)?",
    a: "Yes! We manage CCTV AMC contracts for apartments, commercial stores, factories, and schools across Chennai with guaranteed 2-hour technician dispatch, regular camera cleaning, and NVR health checks.",
  },
  {
    q: "Are the camera hardware and warranty 100% genuine?",
    a: "Absolutely. We are authorized partners for Hikvision, CP PLUS, and Dahua. Every system is unboxed in front of you with official serial numbers, brand warranty cards, and manufacturer invoices.",
  },
];

export default function CCTVLandingClient() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    locality: "",
    buildingType: "Home / Villa",
    requirement: "4-Camera Setup",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Interactive Night Vision Demo
  const [visionComparison, setVisionComparison] = useState<"colorvu" | "standard">("colorvu");

  // Interactive CCTV Estimator State
  const [calcProperty, setCalcProperty] = useState("Home / Villa");
  const [calcCamCount, setCalcCamCount] = useState<number>(4);
  const [calcTech, setCalcTech] = useState<"hd" | "colorvu" | "ip">("colorvu");
  const [calcStorage, setCalcStorage] = useState<"1tb" | "2tb" | "4tb">("1tb");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Dynamic estimate calculation
  // Reconciled with CCTV_PACKAGES base rates in data/site.ts
  const getEstimatedPrice = () => {
    let base = 0;
    if (calcCamCount === 2) base = 8499;
    else if (calcCamCount === 4) base = 14999;
    else if (calcCamCount === 8) base = 28999;
    else base = 54999; // 16+ enterprise tier

    if (calcTech === "colorvu") base += calcCamCount * 450;
    if (calcTech === "ip") base += calcCamCount * 1200;

    if (calcStorage === "2tb") base += 2200;
    if (calcStorage === "4tb") base += 4800;

    return `₹${base.toLocaleString("en-IN")}`;
  };

  const handleApplyEstimate = () => {
    const techName = calcTech === "colorvu" ? "ColorVu Full-Color" : calcTech === "ip" ? "4K IP Network" : "Standard HD";
    setForm((prev) => ({
      ...prev,
      buildingType: calcProperty,
      requirement: `${calcCamCount}-Camera Setup (${techName}, ${calcStorage.toUpperCase()} HDD)`,
    }));
    scrollToWithPhysics("cctv-quote-form");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setErrorMsg("Please provide your name and phone number.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          location: form.locality,
          enquiryType: "CCTV Landing Lead",
          requirements: [`${form.requirement} (${form.buildingType})`],
          message: `Building Type: ${form.buildingType} | Locality: ${form.locality} | Package/Req: ${form.requirement}`,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "generate_lead", {
            event_category: "CCTV_Landing",
            event_label: form.requirement,
          });
        }
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Failed to submit enquiry. Please call us directly.");
      }
    } catch {
      setErrorMsg("Something went wrong. Please call us at 86818 88111.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-[#16143E]">
      {/* 1. Hero Above the Fold */}
      <section className="relative pt-28 sm:pt-36 pb-20 bg-gradient-to-b from-[#FFF5F5] via-white to-white overflow-hidden border-b border-[#16143E]/8">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#EF1313 1px, transparent 1px), linear-gradient(90deg, #EF1313 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Top Trust Ribbon */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EF1313]/10 text-[#EF1313] text-xs font-bold uppercase tracking-wider border border-[#EF1313]/20">
              <ShieldCheck size={14} />
              <span>Lead Surveillance Division · 12+ Years in Avadi</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Active Dispatch in Avadi & Chennai · &lt;2h SLA</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#4E0DBA]/10 text-[#4E0DBA] text-xs font-bold border border-[#4E0DBA]/20">
              <Star size={12} className="fill-[#F59E0B] text-[#F59E0B]" />
              <span>4.9/5 Rating (500+ Google Reviews)</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & Instant Dispatch Buttons */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#16143E] tracking-tight leading-[1.08] mb-5"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                We Secure <br className="hidden sm:inline" />
                <span className="text-[#EF1313] relative inline-block">
                  What Matters Most.
                  <span className="absolute left-0 bottom-1 w-full h-1 bg-[#EF1313]/20 rounded-full" />
                </span>
              </h1>
              <p
                className="text-[#16143E]/80 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 font-normal"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Official <strong>Hikvision & CP PLUS CCTV camera sales</strong>, professional concealed conduit installation, and 24/7 surveillance AMC maintenance for homes, villas, apartments, and commercial facilities across Avadi & Chennai.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8">
                <button
                  type="button"
                  onClick={() => scrollToWithPhysics("cctv-quote-form")}
                  className="btn-crimson min-h-[52px] px-8 text-sm sm:text-base font-bold justify-center shadow-xl shadow-[#EF1313]/25 hover:shadow-[#EF1313]/40 cursor-pointer glow-btn-crimson"
                >
                  <span>Get Free Quotation</span>
                  <ArrowRight size={17} />
                </button>

                <a
                  href="tel:+918681888111"
                  className="min-h-[52px] px-6 rounded-full border-2 border-[#16143E]/15 hover:border-[#16143E] text-sm sm:text-base font-bold text-[#16143E] bg-white flex items-center justify-center gap-2 transition-all shadow-xs hover:shadow-md"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  <Phone size={17} className="text-[#EF1313]" />
                  <span>Call 86818 88111</span>
                </a>

                <a
                  href="https://wa.me/918681888111?text=Hello%20Broadnet%2C%20I%20would%20like%20to%20get%20a%20free%20CCTV%20quotation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[52px] px-5 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/35 text-[#15803d] text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-xs"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  <MessageCircle size={17} className="text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-[#16143E]/10 max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#16143E]/85">
                  <CheckCircle2 size={16} className="text-[#EF1313] flex-shrink-0" />
                  <span>2-Hour Fast Response</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#16143E]/85">
                  <CheckCircle2 size={16} className="text-[#EF1313] flex-shrink-0" />
                  <span>Genuine 2-Yr Warranty</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#16143E]/85">
                  <CheckCircle2 size={16} className="text-[#EF1313] flex-shrink-0" />
                  <span>ColorVu 24/7 Night Vision</span>
                </div>
              </div>
            </div>

            {/* Right Column: Quick Quote Box Above the Fold */}
            <div id="cctv-quote-form" className="lg:col-span-5 scroll-mt-28">
              <div className="rounded-3xl bg-white border-2 border-[#EF1313]/35 p-7 sm:p-8 shadow-2xl relative">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EF1313]/10 text-[#EF1313] text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles size={12} /> Free Site Survey Offer
                </div>
                <h3
                  className="text-2xl font-bold text-[#16143E] mb-1"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  Request Fast CCTV Quotation
                </h3>
                <p className="text-xs text-[#16143E]/60 mb-6">
                  Our certified engineer visits your property, checks angles & gives an exact itemized bill.
                </p>

                {submitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                    <CheckCircle2 size={40} className="text-emerald-600 mx-auto mb-2" />
                    <h4 className="text-lg font-bold text-emerald-900 mb-1">
                      Enquiry Received!
                    </h4>
                    <p className="text-xs text-emerald-700 mb-4 leading-relaxed">
                      Thank you, {form.name}! Our senior CCTV technician will call you at{" "}
                      <strong>{form.phone}</strong> within 15 minutes to discuss your requirement &amp; provide an estimate.
                    </p>
                    <a
                      href="https://wa.me/918681888111?text=Hello%20Broadnet%2C%20I%20just%20submitted%20the%20CCTV%20quote%20request."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold shadow-md shadow-[#25D366]/30"
                    >
                      <MessageCircle size={15} /> Chat on WhatsApp Now
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    {errorMsg && (
                      <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                        <AlertCircle size={14} />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-bold text-[#16143E] uppercase tracking-wider mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#16143E]/15 focus:border-[#EF1313] focus:ring-2 focus:ring-[#EF1313]/10 text-sm outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#16143E] uppercase tracking-wider mb-1">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 86818 88111"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#16143E]/15 focus:border-[#EF1313] focus:ring-2 focus:ring-[#EF1313]/10 text-sm outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#16143E] uppercase tracking-wider mb-1">
                          Locality / Area
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Avadi, Pattabiram"
                          value={form.locality}
                          onChange={(e) => setForm({ ...form, locality: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#16143E]/15 focus:border-[#EF1313] focus:ring-2 focus:ring-[#EF1313]/10 text-sm outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#16143E] uppercase tracking-wider mb-1">
                          Building Type
                        </label>
                        <select
                          value={form.buildingType}
                          onChange={(e) => setForm({ ...form, buildingType: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-[#16143E]/15 focus:border-[#EF1313] focus:ring-2 focus:ring-[#EF1313]/10 text-sm outline-none transition-all bg-white"
                        >
                          <option>Home / Villa</option>
                          <option>Apartment Society</option>
                          <option>Office / Commercial</option>
                          <option>Factory / Warehouse</option>
                          <option>School / College</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#16143E] uppercase tracking-wider mb-1">
                        Requirement / Camera Count
                      </label>
                      <select
                        value={form.requirement}
                        onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#16143E]/15 focus:border-[#EF1313] focus:ring-2 focus:ring-[#EF1313]/10 text-sm outline-none transition-all bg-white"
                      >
                        <option>2-Camera Starter Setup</option>
                        <option>4-Camera Popular Kit (Full Color)</option>
                        <option>8-Camera Commercial Setup</option>
                        <option>16+ Camera IP / Society Setup</option>
                        <option>CCTV AMC / Repair Service</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-crimson justify-center py-3 text-sm font-bold shadow-lg shadow-[#EF1313]/25 mt-2 cursor-pointer disabled:opacity-60 glow-btn-crimson"
                    >
                      {isSubmitting ? "Sending Request..." : "Request Free On-Site Inspection"}
                    </button>

                    <p className="text-[11px] text-[#16143E]/50 text-center pt-1">
                      🔒 No spam. Sent directly to <span className="font-semibold">admin@broadnet.in</span>.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive CCTV Cost Estimator & System Configurator */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F8F9FD] border-b border-[#16143E]/8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4E0DBA]/10 text-[#4E0DBA] text-xs font-bold uppercase tracking-wider mb-2">
              <Calculator size={13} />
              <span>Interactive System Configurator</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#16143E]"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Configure & Estimate Your CCTV System
            </h2>
            <p className="text-[#16143E]/70 text-sm sm:text-base mt-2">
              Select your property type, camera count, and lens technology for an instant transparent estimate.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#16143E]/12 shadow-xl max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Controls Column */}
              <div className="lg:col-span-7 space-y-6">
                {/* 1. Property Type */}
                <div>
                  <label className="block text-xs font-bold text-[#16143E] uppercase tracking-wider mb-2.5">
                    1. Select Premise Type
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {[
                      { label: "Home / Villa", icon: Home },
                      { label: "Apartment", icon: Building },
                      { label: "Retail Shop", icon: Store },
                      { label: "Warehouse", icon: Factory },
                      { label: "Office", icon: Briefcase },
                    ].map((item) => {
                      const Icon = item.icon;
                      const selected = calcProperty === item.label;
                      return (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => setCalcProperty(item.label)}
                          className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                            selected
                              ? "bg-[#EF1313]/10 border-[#EF1313] text-[#EF1313] font-bold shadow-xs"
                              : "bg-[#FAFAFE] border-[#16143E]/10 text-[#16143E]/70 hover:border-[#16143E]/30"
                          }`}
                        >
                          <Icon size={16} />
                          <span className="text-[11px] leading-tight">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Camera Count */}
                <div>
                  <label className="block text-xs font-bold text-[#16143E] uppercase tracking-wider mb-2.5">
                    2. Number of Cameras Needed
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[2, 4, 8, 16].map((count) => (
                      <button
                        key={count}
                        type="button"
                        onClick={() => setCalcCamCount(count)}
                        className={`py-2.5 px-3 rounded-xl border text-center transition-all cursor-pointer font-mono font-bold ${
                          calcCamCount === count
                            ? "bg-[#16143E] border-[#16143E] text-white shadow-xs"
                            : "bg-[#FAFAFE] border-[#16143E]/10 text-[#16143E]/70 hover:border-[#16143E]/30"
                        }`}
                      >
                        <span className="text-sm block">{count} Cams</span>
                        <span className="text-[10px] font-normal opacity-70">
                          {count === 2 ? "Basic" : count === 4 ? "Popular" : count === 8 ? "Medium" : "Large Site"}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Camera Technology */}
                <div>
                  <label className="block text-xs font-bold text-[#16143E] uppercase tracking-wider mb-2.5">
                    3. Night Vision & Resolution Tech
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "hd", label: "2MP HD", desc: "Economy IR" },
                      { id: "colorvu", label: "ColorVu 3K", desc: "24/7 Full Color" },
                      { id: "ip", label: "4K UHD IP", desc: "AI Network Cams" },
                    ].map((tech) => (
                      <button
                        key={tech.id}
                        type="button"
                        onClick={() => setCalcTech(tech.id as any)}
                        className={`py-2 px-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                          calcTech === tech.id
                            ? "bg-[#4E0DBA] border-[#4E0DBA] text-white shadow-xs"
                            : "bg-[#FAFAFE] border-[#16143E]/10 text-[#16143E]/70 hover:border-[#16143E]/30"
                        }`}
                      >
                        <span className="text-xs font-bold block">{tech.label}</span>
                        <span className="text-[10.5px] opacity-80">{tech.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Storage Days */}
                <div>
                  <label className="block text-xs font-bold text-[#16143E] uppercase tracking-wider mb-2.5">
                    4. Recording Hard Disk Storage
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "1tb", label: "1TB HDD", desc: "~12-15 Days" },
                      { id: "2tb", label: "2TB HDD", desc: "~25-30 Days" },
                      { id: "4tb", label: "4TB HDD", desc: "~50-60 Days" },
                    ].map((storage) => (
                      <button
                        key={storage.id}
                        type="button"
                        onClick={() => setCalcStorage(storage.id as any)}
                        className={`py-2 px-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                          calcStorage === storage.id
                            ? "bg-emerald-700 border-emerald-700 text-white shadow-xs"
                            : "bg-[#FAFAFE] border-[#16143E]/10 text-[#16143E]/70 hover:border-[#16143E]/30"
                        }`}
                      >
                        <span className="text-xs font-bold block">{storage.label}</span>
                        <span className="text-[10.5px] opacity-80">{storage.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Estimate Summary Box */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#16143E] to-[#251347] rounded-3xl p-6 sm:p-7 text-white flex flex-col justify-between shadow-2xl border border-white/10">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-wider text-[#EF1313] font-bold">
                      Calculated Hardware Proposal
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono font-bold">
                      IN STOCK
                    </span>
                  </div>

                  <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1" style={{ fontFamily: "Syne, sans-serif" }}>
                    {getEstimatedPrice()}
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[11px] font-bold uppercase tracking-wider mb-3">
                    <span>Estimate · Final quote after free site survey</span>
                  </div>
                  <div className="text-xs text-white/60 mb-5">
                    All-inclusive turnkey price · No hidden installation charges
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2.5 text-xs text-white/85 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">Config:</span>
                      <span className="font-bold">{calcCamCount}x {calcTech === "colorvu" ? "ColorVu" : calcTech === "ip" ? "4K IP" : "HD"} Cameras</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">Recorder:</span>
                      <span className="font-bold">{calcCamCount <= 4 ? "4-Channel" : calcCamCount <= 8 ? "8-Channel" : "16-Channel"} DVR/NVR</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">Storage:</span>
                      <span className="font-bold">{calcStorage.toUpperCase()} WD Purple 24/7 HDD</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">Warranty:</span>
                      <span className="font-bold text-emerald-400">2-Year Replacement Warranty</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">Site Survey:</span>
                      <span className="font-bold text-[#EF1313]">100% Free On-Site Inspection</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <button
                    type="button"
                    onClick={handleApplyEstimate}
                    className="w-full btn-crimson justify-center py-3 text-sm font-bold shadow-lg shadow-[#EF1313]/30 cursor-pointer glow-btn-crimson"
                  >
                    <span>Book This Setup &amp; Get Quote</span>
                    <ArrowRight size={15} />
                  </button>

                  <a
                    href={`https://wa.me/918681888111?text=Hello%20Broadnet%2C%20I%20am%20interested%20in%20the%20${calcCamCount}-camera%20${calcTech}%20CCTV%20setup%20estimated%20at%20${getEstimatedPrice()}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border border-[#25D366]/40"
                  >
                    <MessageCircle size={14} className="text-[#25D366]" />
                    <span>WhatsApp This Estimate to Tech Desk</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CCTV Packages Breakdown */}
      <section className="py-20 bg-[#FAFAFE] border-b border-[#16143E]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EF1313]">
              Transparent Turnkey Pricing
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#16143E] mt-1"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Popular Complete CCTV Packages
            </h2>
            <p className="text-[#16143E]/65 text-sm sm:text-base mt-2">
              Includes original cameras, DVR/NVR, surveillance HDD, power supply, cabling, and certified installation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CCTV_PACKAGES.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                variant="light"
                onSelect={(selectedPkg) => {
                  setForm((prev) => ({
                    ...prev,
                    requirement: `${selectedPkg.name} (${selectedPkg.price})`,
                  }));
                  scrollToWithPhysics("cctv-quote-form");
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Technology Comparison: ColorVu vs Standard IR Split Slider */}
      <NightVisionComparisonSlider
        onOpenPackageModal={(pkgId) => {
          const selectedPkg = CCTV_PACKAGES.find((p) => p.id === pkgId);
          if (selectedPkg) {
            setForm((prev) => ({
              ...prev,
              requirement: `${selectedPkg.name} (${selectedPkg.price})`,
            }));
            scrollToWithPhysics("cctv-quote-form");
          }
        }}
      />

      {/* 5. Customer Reviews Near Enquiry */}
      <section className="py-20 bg-[#FAFAFE] border-b border-[#16143E]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EF1313]">
              Verified Client Feedback
            </span>
            <h2
              className="text-3xl font-bold text-[#16143E] mt-1"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Trusted Across Avadi & Chennai
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {REVIEWS.map((rev) => (
              <div
                key={rev.name}
                className="p-6 rounded-2xl bg-white border border-[#16143E]/10 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#F59E0B] mb-3">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#F59E0B]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#16143E]/80 leading-relaxed italic mb-4">
                    “{rev.comment}”
                  </p>
                </div>

                <div className="pt-3 border-t border-[#16143E]/8">
                  <div className="text-sm font-bold text-[#16143E]">{rev.name}</div>
                  <div className="text-xs text-[#4E0DBA] font-semibold">{rev.location} · {rev.tag}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Reminder CTA */}
          <div className="p-8 rounded-3xl bg-[#16143E] text-white text-center max-w-4xl mx-auto shadow-xl border border-white/10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
              Ready to Secure Your Property with 24/7 CCTV?
            </h3>
            <p className="text-white/70 text-sm max-w-xl mx-auto mb-6">
              Call our technicians directly or request a callback. 2-hour dispatch guaranteed in Avadi and surrounding localities.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+918681888111"
                className="btn-crimson min-h-[48px] px-8 text-sm justify-center cursor-pointer glow-btn-crimson"
              >
                <Phone size={16} /> Call 86818 88111
              </a>
              <a
                href="https://wa.me/918681888111?text=Hello%20Broadnet%2C%20I%20would%20like%20a%20CCTV%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold flex items-center gap-2 min-h-[48px] transition-colors"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Interactive FAQs Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4E0DBA]">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-bold text-[#16143E] mt-1" style={{ fontFamily: "Syne, sans-serif" }}>
              Got Questions About CCTV Installation?
            </h2>
          </div>

          <div className="space-y-3.5">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-[#16143E]/10 overflow-hidden bg-[#FAFAFE] transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-3 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#16143E] flex items-center gap-2.5">
                      <HelpCircle size={17} className="text-[#EF1313] flex-shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-[#16143E]/50 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "rotate-180 text-[#EF1313]" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <p className="px-5 pb-5 text-xs sm:text-sm text-[#16143E]/75 leading-relaxed pl-11">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
