"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CreditCard,
  Video,
  Activity,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Phone,
  MessageCircle,
  Sparkles,
  Send,
  Zap,
  Layers,
  Check,
  Headphones,
  HelpCircle,
  ChevronDown,
  Shield,
  Wifi,
  MapPin,
  Camera,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_CONFIG } from "@/data/site";
import { trackEvent } from "@/lib/analytics";
import { scrollToWithPhysics } from "@/lib/scrollPhysics";

function WhatsAppIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z" />
    </svg>
  );
}

const UPCOMING_MODULES = [
  {
    icon: CreditCard,
    title: "Self-Service Bill Pay & Quick Recharge",
    tag: "Live Beta",
    tagColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    desc: "Renew fiber broadband subscriptions in under 10 seconds with instant UPI receipts, GST invoice downloads, and data quota monitors.",
    progress: 95,
    href: "/pay-bill",
    hrefText: "Open Bill Payment Portals",
  },
  {
    icon: Video,
    title: "Interactive CCTV Studio & AI Simulator",
    tag: "Feature Preview",
    tagColor: "bg-[#EF1313]/20 text-rose-300 border-[#EF1313]/30",
    desc: "Compare ColorVu night vision vs standard IR cameras in real-time, simulate lens coverage angles, and build custom multi-camera packages.",
    progress: 85,
    href: "/security/cameras",
    hrefText: "Explore Camera Packages",
  },
  {
    icon: Activity,
    title: "Fiber Feasibility & Live Line Diagnostics",
    tag: "Rolling Out",
    tagColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    desc: "Instant fiber point-of-presence checking by building or street, automated latency ping tests, and priority 2-hour technician slot booking.",
    progress: 88,
    href: "/internet",
    hrefText: "Check Fiber Plans",
  },
  {
    icon: ShieldCheck,
    title: "Digital AMC & Equipment Warranty Tracker",
    tag: "Coming Soon",
    tagColor: "bg-[#4E0DBA]/30 text-purple-200 border-[#4E0DBA]/40",
    desc: "Track camera serial numbers, check 2-year warranty expiry dates, submit 1-tap service requests, and view dispatched engineer tracking.",
    progress: 75,
  },
];

const ROADMAP_STEPS = [
  { step: "Phase 1", label: "Core High-Performance Engine", status: "completed" },
  { step: "Phase 2", label: "Interactive Service & CCTV Catalogs", status: "completed" },
  { step: "Phase 3", label: "Live Estimators & Studio Demos", status: "in-progress" },
  { step: "Phase 4", label: "Customer Portal & Online Payments", status: "up-next" },
];

const STATUS_FAQS = [
  {
    q: "Can I book a CCTV installation or fiber broadband while the site is upgrading?",
    a: "Yes, 100%! Our physical operations are completely uninterrupted. Certified engineers are dispatched daily across Avadi and Chennai between 9:00 AM and 8:30 PM. You can call +91 86818 88111 or WhatsApp us anytime for same-day site inspections.",
  },
  {
    q: "How do I pay my internet bill while the new portal is in progress?",
    a: "We have direct payment gateway access available right now on our Pay Bill page for Broadnet Fiber, BSNL Bharat Fibre, and Railwire Broadband. You can also make offline payments at our Avadi Fire Station Road office.",
  },
  {
    q: "Are my warranty, AMC, and on-site support coverage still valid?",
    a: "Yes. All hardware purchased through Broadnet comes with official 2-year manufacturer warranties and emergency on-site support within 2 hours. Our local dispatch center in Avadi maintains all records and service histories securely.",
  },
  {
    q: "When will the complete self-service portal launch?",
    a: "We are deploying incremental updates every week. Key modules like quick bill pay and package visualizers are already live, with full account self-care launching later this quarter.",
  },
];

export default function UnderDevelopmentClient() {
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setSubscribed(true);
    trackEvent("under_development_notify_signup", { email: emailInput, feature: selectedFeature });
  };

  const handleEnquiryClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const enquiryEl = document.getElementById("enquiry");
    if (enquiryEl) {
      e.preventDefault();
      window.history.pushState(null, "", "#enquiry");
      scrollToWithPhysics("enquiry");
    }
  };

  return (
    <div className="bg-[#09081E] text-white min-h-screen">
      {/* 1. Page Hero Header */}
      <section className="relative pt-32 pb-16 sm:pb-24 overflow-hidden border-b border-white/10">
        {/* Glowing Background Auras */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[750px] h-[450px] rounded-full blur-[140px] opacity-35"
            style={{
              background: "radial-gradient(circle, #4E0DBA 0%, #EF1313 70%, transparent 100%)",
            }}
          />
          <div
            className="absolute top-1/2 -right-20 w-[500px] h-[400px] rounded-full blur-[130px] opacity-25"
            style={{
              background: "radial-gradient(circle, #38BDF8 0%, #4E0DBA 80%, transparent 100%)",
            }}
          />
          {/* Subtle Isometric Grid Texture */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumbs */}
          <div className="flex justify-center mb-6">
            <Breadcrumbs items={[{ label: "Website Under Active Development" }]} variant="dark" />
          </div>

          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md mb-6 shadow-xl"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
              </span>
              <span
                className="text-xs font-bold tracking-wider uppercase text-amber-300"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Platform Upgrade In Progress • v2.4 Beta
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight font-display"
            >
              Website Under Active Development.
              <span className="block mt-2 bg-gradient-to-r from-[#FF5E5E] via-[#C084FC] to-[#60A5FA] bg-clip-text text-transparent">
                Upgrading Your Digital Security Experience.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="text-base sm:text-lg text-white/70 leading-relaxed font-body mb-8 max-w-2xl mx-auto"
            >
              We are engineering a modern self-service platform with instant CCTV simulations, fiber diagnostics, and online bill payments. While we roll out these digital features, our on-ground operations are{" "}
              <span className="text-emerald-400 font-semibold underline decoration-emerald-500/50 underline-offset-4">
                100% active and running 24/7
              </span>
              .
            </motion.p>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            >
              <a
                href={SITE_CONFIG.phones.primaryTel}
                className="px-6 py-3 rounded-full bg-white text-[#16143E] hover:bg-white/90 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all duration-200 shadow-xl hover:scale-[1.02]"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                <Phone size={15} className="text-[#EF1313]" />
                <span>Call {SITE_CONFIG.phones.primary}</span>
              </a>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp.cleanNumber}?text=Hi%20Broadnet,%20I%20saw%20your%20website%20under%20development%20and%20need%20quick%20assistance.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all duration-200 shadow-xl hover:scale-[1.02]"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                <WhatsAppIcon size={16} />
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                href="/pay-bill"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all duration-200"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                <CreditCard size={15} className="text-emerald-400" />
                <span>Pay Internet Bill</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Live Operational Status Grid */}
      <section className="py-12 bg-white/[0.02] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-5 sm:p-7 backdrop-blur-xl shadow-2xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <div
                    className="text-sm sm:text-base font-bold text-white flex items-center gap-2"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    On-Ground Operations Status
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase">
                      Fully Operational
                    </span>
                  </div>
                  <p className="text-xs text-white/50">
                    All customer bookings, 2-hour technician dispatches, and emergency fiber repairs continue without interruption.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-white/70">
                <Clock size={14} className="text-amber-400" />
                <span>Next Portal Deployment: <strong className="text-white">Tonight at 11:30 PM IST</strong></span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-1">
                  Field Installations
                </div>
                <div className="text-base sm:text-lg font-bold text-white flex items-center gap-2 font-display">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Active 9AM–8:30PM
                </div>
                <div className="text-[11px] text-white/40 mt-1">CCTV & Biometric Teams</div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-1">
                  Technician SLA
                </div>
                <div className="text-base sm:text-lg font-bold text-white flex items-center gap-2 font-display">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  &lt; 2-Hour Response
                </div>
                <div className="text-[11px] text-white/40 mt-1">Avadi & Chennai Wide</div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-1">
                  Fiber Network
                </div>
                <div className="text-base sm:text-lg font-bold text-white flex items-center gap-2 font-display">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  99.9% NOC Uptime
                </div>
                <div className="text-[11px] text-white/40 mt-1">100+ km Private Fiber</div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-500/[0.08] border border-amber-500/20">
                <div className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider mb-1">
                  Web Portal Engine
                </div>
                <div className="text-base sm:text-lg font-bold text-amber-200 flex items-center gap-2 font-display">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  85% Built (v2.4)
                </div>
                <div className="text-[11px] text-amber-300/60 mt-1">Phase 3 in Progress</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Roadmap Progress Bar & Upcoming Modules */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Roadmap Progress Bar */}
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <Layers size={16} className="text-[#A855F7]" />
                <span className="text-xs font-bold uppercase tracking-wider text-white/80 font-display">
                  Digital Platform Roadmap
                </span>
              </div>
              <span className="text-xs font-semibold text-white/60">
                Overall Progress: <strong className="text-white">85% Complete</strong>
              </span>
            </div>

            {/* Shimmering Progress Bar */}
            <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden relative mb-5 p-[1px]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "85%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-[#4E0DBA] via-[#EF1313] to-[#38BDF8] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]" />
              </motion.div>
            </div>

            {/* Roadmap Steps */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {ROADMAP_STEPS.map((r) => (
                <div
                  key={r.step}
                  className={`p-3 rounded-xl border text-xs transition-all ${
                    r.status === "completed"
                      ? "bg-emerald-500/[0.08] border-emerald-500/25 text-emerald-300"
                      : r.status === "in-progress"
                      ? "bg-amber-500/[0.1] border-amber-500/30 text-amber-200"
                      : "bg-white/[0.02] border-white/5 text-white/50"
                  }`}
                >
                  <div className="flex items-center justify-between font-bold mb-1">
                    <span>{r.step}</span>
                    {r.status === "completed" ? (
                      <span className="flex items-center gap-1 text-[10px] text-emerald-400">
                        <Check size={11} /> Done
                      </span>
                    ) : r.status === "in-progress" ? (
                      <span className="flex items-center gap-1 text-[10px] text-amber-400">
                        <Zap size={11} /> Active
                      </span>
                    ) : (
                      <span className="text-[10px] text-white/40">Upcoming</span>
                    )}
                  </div>
                  <div className="font-medium text-[11px] leading-tight">{r.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Modules Cards Grid */}
          <div className="mb-16">
            <div className="text-center sm:text-left mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-display">
                What We&apos;re Building For You
              </h2>
              <p className="text-xs sm:text-sm text-white/60">
                Explore upcoming tools and newly rolled out self-service capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {UPCOMING_MODULES.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    className="group relative p-6 rounded-3xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between shadow-xl"
                  >
                    <div>
                      {/* Header: Icon & Tag */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/[0.06] group-hover:bg-[#4E0DBA]/20 border border-white/10 group-hover:border-[#4E0DBA]/40 flex items-center justify-center text-white group-hover:text-purple-300 transition-colors">
                          <Icon size={22} />
                        </div>
                        <span
                          className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${item.tagColor}`}
                        >
                          {item.tag}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-purple-200 transition-colors font-display">
                        {item.title}
                      </h3>

                      <p className="text-xs text-white/60 leading-relaxed mb-4 font-body">
                        {item.desc}
                      </p>

                      {item.href && (
                        <div className="mb-4">
                          <Link
                            href={item.href}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 hover:text-white transition-colors bg-emerald-500/15 hover:bg-emerald-500/25 px-3 py-1.5 rounded-full border border-emerald-500/30"
                            style={{ fontFamily: "Syne, sans-serif" }}
                          >
                            <span>{item.hrefText || "Open Module"}</span>
                            <ArrowRight size={12} />
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Progress Indicator */}
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-white/40 mb-1.5">
                        <span>Module Build</span>
                        <span className="font-semibold text-white/70">{item.progress}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#4E0DBA] to-[#EF1313]"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Immediate Assistance & Live Dispatch Callout */}
          <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#1B1242] via-[#141238] to-[#25103F] border border-white/15 shadow-2xl overflow-hidden mb-16">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#EF1313]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EF1313]/20 border border-[#EF1313]/30 text-rose-300 text-xs font-bold mb-3">
                  <Headphones size={13} />
                  Need An Installation or Repair Today?
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-display">
                  Don&apos;t Wait For The Portal — Our Engineers Are Ready Right Now.
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-body">
                  Whether you need a new 4K CCTV camera system installed, an on-site survey at your premises, or high-speed fiber broadband in Avadi or Chennai, our team is standing by to assist you.
                </p>
              </div>

              {/* Quick Action CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 flex-shrink-0">
                <a
                  href={SITE_CONFIG.phones.primaryTel}
                  className="px-5 py-3 rounded-full bg-white text-[#16143E] hover:bg-white/90 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all duration-200 shadow-xl hover:scale-[1.02]"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  <Phone size={15} className="text-[#EF1313]" />
                  <span>Call {SITE_CONFIG.phones.primary}</span>
                </a>

                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp.cleanNumber}?text=Hi%20Broadnet,%20I%20saw%20your%20website%20under%20development%20and%20need%20quick%20assistance%20for%20CCTV/Internet.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all duration-200 shadow-xl hover:scale-[1.02]"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  <WhatsAppIcon size={16} />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href="#enquiry"
                  onClick={handleEnquiryClick}
                  className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all duration-200 cursor-pointer"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  <span>Request Quick Quotation</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Early Access / Feature Request Notification Box */}
          <div className="max-w-2xl mx-auto text-center bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md mb-16">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-[#4E0DBA]/20 border border-[#4E0DBA]/40 text-purple-300 mb-3">
              <Sparkles size={20} />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-display">
              Want Early Access When The Portal Launches?
            </h3>
            <p className="text-xs text-white/60 mb-5 font-body">
              Get notified first about online bill payment, digital AMC monitoring, and exclusive subscriber perks.
            </p>

            <AnimatePresence mode="wait">
              {subscribed ? (
                <motion.div
                  key="subscribed"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <CheckCircle2 size={18} />
                  <span>Thank you! We&apos;ll notify you at <strong>{emailInput}</strong> as soon as the portal launches.</span>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleNotifySubmit}
                  className="flex flex-col sm:flex-row items-center gap-2 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your email or phone number"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 text-xs sm:text-sm focus:outline-none focus:border-[#4E0DBA] transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#4E0DBA] hover:bg-[#3D0A93] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 flex-shrink-0 transition-colors shadow-lg cursor-pointer"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    <Send size={13} />
                    <span>Notify Me</span>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

            {/* Quick Vote Pills */}
            <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap items-center justify-center gap-2">
              <span className="text-[11px] text-white/40">Vote for top priority:</span>
              {["Online Bill Pay", "Camera Angle Studio", "Live Line Diagnostic", "AMC Portal"].map((feature) => (
                <button
                  key={feature}
                  type="button"
                  onClick={() => setSelectedFeature(feature)}
                  className={`text-[11px] px-2.5 py-1 rounded-full border transition-all cursor-pointer ${
                    selectedFeature === feature
                      ? "bg-[#4E0DBA] text-white border-purple-400 font-bold"
                      : "bg-white/[0.04] text-white/60 border-white/10 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {selectedFeature === feature ? `✓ ${feature}` : feature}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Development & Status FAQs */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-2 font-display">
                <HelpCircle size={14} /> Questions &amp; Service Continuity
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {STATUS_FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={faq.q}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-amber-300 transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`text-white/50 flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-amber-400" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-white/70 leading-relaxed font-body border-t border-white/5 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 5. Quick Links to Core Services */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-lg font-bold text-white mb-1 font-display">Explore Active Services</h3>
              <p className="text-xs text-white/50">Direct links to our operational service portals and packages.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Link
                href="/security/cameras"
                className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/5 hover:border-red-500/40 text-center transition-all group"
              >
                <div className="w-8 h-8 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <Camera size={16} />
                </div>
                <div className="text-xs font-bold text-white group-hover:text-red-300 transition-colors">CCTV Cameras</div>
                <div className="text-[10px] text-white/40 mt-0.5">CP PLUS &amp; Hikvision</div>
              </Link>

              <Link
                href="/internet"
                className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/5 hover:border-blue-500/40 text-center transition-all group"
              >
                <div className="w-8 h-8 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <Wifi size={16} />
                </div>
                <div className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors">Fiber Broadband</div>
                <div className="text-[10px] text-white/40 mt-0.5">Up to 300 Mbps</div>
              </Link>

              <Link
                href="/pay-bill"
                className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/5 hover:border-emerald-500/40 text-center transition-all group"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <CreditCard size={16} />
                </div>
                <div className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">Pay Bill Online</div>
                <div className="text-[10px] text-white/40 mt-0.5">3 Provider Portals</div>
              </Link>

              <Link
                href="/contact"
                className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/5 hover:border-purple-500/40 text-center transition-all group"
              >
                <div className="w-8 h-8 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <MapPin size={16} />
                </div>
                <div className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors">Avadi Office</div>
                <div className="text-[10px] text-white/40 mt-0.5">Fire Station Road</div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
