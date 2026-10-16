"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ShieldCheck,
  CreditCard,
  Zap,
  Phone,
  MapPin,
  Clock,
  ChevronDown,
  Lock,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import BroadnetLogo from "@/components/BroadnetLogo";
import PartnerLogo from "@/components/PartnerLogo";
import { SITE_CONFIG } from "@/data/site";
import { trackEvent } from "@/lib/analytics";

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

interface ProviderCardProps {
  id: "broadnet" | "bsnl" | "railwire";
  name: string;
  badge: string;
  badgeColor: string;
  portalUrl: string;
  portalDisplay: string;
  accentColor: string;
  tagline: string;
  audience: string;
  identifierTitle: string;
  identifierDetails: string[];
  steps: string[];
  paymentModes: string[];
}

const PROVIDERS: ProviderCardProps[] = [
  {
    id: "broadnet",
    name: "Broadnet Fiber Portal",
    badge: "Direct Private Network",
    badgeColor: "bg-[#4E0DBA]/15 text-[#4E0DBA] border-[#4E0DBA]/30",
    portalUrl: "https://portal.broadnet.in/login",
    portalDisplay: "portal.broadnet.in",
    accentColor: "#4E0DBA",
    tagline: "Broadnet's Optical Backbone Subscribers",
    audience: "Subscribers directly connected to Broadnet's 100+ km private fiber infrastructure in Avadi & Chennai.",
    identifierTitle: "What you need to login:",
    identifierDetails: [
      "Registered Username or Account ID",
      "Registered Mobile Number (for OTP reset)",
      "Account Password",
    ],
    steps: [
      "Click 'Open Broadnet Portal' below to launch portal.broadnet.in",
      "Enter your Broadnet Username and Password",
      "Review your plan details and select 'Pay / Renew'",
      "Complete payment via UPI (GPay/PhonePe), Card, or Net Banking",
    ],
    paymentModes: ["UPI (GPay / PhonePe / Paytm)", "Credit & Debit Cards", "Net Banking", "Instant GST Invoices"],
  },
  {
    id: "bsnl",
    name: "BSNL Bharat Fibre Portal",
    badge: "Authorized Franchisee",
    badgeColor: "bg-[#003399]/15 text-[#003399] border-[#003399]/30",
    portalUrl: "https://portal.bsnl.in/myportal/cfa.do",
    portalDisplay: "portal.bsnl.in",
    accentColor: "#003399",
    tagline: "BSNL Landline & Bharat Fibre (CFA)",
    audience: "Subscribers with BSNL FTTH broadband or landline connections deployed and serviced through Broadnet.",
    identifierTitle: "What you need to pay:",
    identifierDetails: [
      "BSNL Landline / FTTH Number (with 044 STD code)",
      "BSNL Consumer / Account Number (on monthly bill)",
      "Quick Pay requires NO password or login account",
    ],
    steps: [
      "Click 'Open BSNL CFA Portal' below to launch portal.bsnl.in",
      "Select 'Landline / Bharat Fibre (FTTH)'",
      "Enter your phone number with STD code (e.g. 044XXXXXXXX)",
      "View outstanding dues and pay instantly via UPI or BBPS",
    ],
    paymentModes: ["Bharat BillPay (BBPS)", "All UPI Apps", "Net Banking & Debit/Credit Cards", "Govt. Official Receipt"],
  },
  {
    id: "railwire",
    name: "Railwire Billing Portal",
    badge: "Official RailTel Partner",
    badgeColor: "bg-[#0C2340]/15 text-[#0C2340] border-[#0C2340]/30",
    portalUrl: "https://tn.railwire.co.in/",
    portalDisplay: "tn.railwire.co.in",
    accentColor: "#0C2340",
    tagline: "Railwire Tamil Nadu Subscribers",
    audience: "Subscribers on RailTel / Railwire broadband managed and maintained through Broadnet's distribution grid.",
    identifierTitle: "What you need to login:",
    identifierDetails: [
      "Railwire User ID (starts with RW...)",
      "Registered Mobile Number for OTP login",
      "Self-care portal credentials",
    ],
    steps: [
      "Click 'Open Railwire Portal' below to launch tn.railwire.co.in",
      "Enter your Railwire Subscriber ID or Registered Mobile",
      "Enter password or verify via Mobile OTP",
      "Choose your package, renew pack, or recharge add-on OTTs",
    ],
    paymentModes: ["UPI Quick Recharge", "Debit & Credit Cards", "Net Banking", "Instant SMS Confirmation"],
  },
];

const BILLING_FAQS = [
  {
    q: "How soon will my internet reconnect after making an online payment?",
    a: "Payments made through the official portals (Broadnet, BSNL, or Railwire) reflect automatically within 5 to 15 minutes. We recommend power-cycling (restarting) your optical ONT/router for 2 minutes after payment to pull the latest active session from the server.",
  },
  {
    q: "Can I pay using Google Pay, PhonePe, or Paytm?",
    a: "Yes! All three portals fully support UPI payments. You can scan the dynamic QR code or enter your UPI ID on your mobile device for instant 10-second payment processing.",
  },
  {
    q: "What if I am not sure which company provides my connection?",
    a: "Look at your Wi-Fi name (SSID), your monthly SMS receipt, or call our local Avadi billing desk directly at +91 86818 88111. You can also WhatsApp us your name and installation address, and we will immediately tell you your provider and account ID.",
  },
  {
    q: "Can I make an offline payment in cash or cheque?",
    a: "Yes! Walk into our Avadi office at 1093 Fire Station Road, TNHB, Avadi, Chennai 600054. Our desk is open Monday through Saturday (9:00 AM – 8:30 PM) and Sunday (10:00 AM – 2:00 PM) for cash, UPI QR, and cheque collections with printed receipts.",
  },
  {
    q: "Can I upgrade or change my broadband plan while paying?",
    a: "Yes! On both the Broadnet and Railwire portals, you can select plan upgrades during renewal. For BSNL Bharat Fibre plan changes, you can submit a change request on the BSNL portal or contact our Broadnet team for free assisted plan migration.",
  },
];

export default function PayBillClient() {
  const [activeTab, setActiveTab] = useState<"all" | "broadnet" | "bsnl" | "railwire">("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handlePortalClick = (provider: string, url: string) => {
    trackEvent("bill_pay_click", {
      category: "PayBillPage",
      label: provider,
      value: 1,
    });
  };

  const filteredProviders =
    activeTab === "all" ? PROVIDERS : PROVIDERS.filter((p) => p.id === activeTab);

  return (
    <div className="bg-[#FAF9FF] min-h-screen text-[#16143E]">
      {/* 1. Page Hero Header */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-white via-[#F5F2FD] to-[#FAF9FF] border-b border-[#16143E]/8 overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#4E0DBA]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-10 w-[400px] h-[250px] bg-[#EF1313]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center mb-6">
            <Breadcrumbs items={[{ label: "Pay Internet Bill" }]} variant="light" />
          </div>

          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4E0DBA]/10 border border-[#4E0DBA]/20 text-[#4E0DBA] text-xs font-bold uppercase tracking-wider mb-4"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              <Zap size={13} className="text-[#EF1313]" />
              <span>Official Subscriber Billing Gateways</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] leading-tight mb-5 font-display"
            >
              Pay Your Internet Bill.
              <span className="block mt-1 text-gradient">Fast, Secure &amp; Direct.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="text-base sm:text-lg text-[#16143E]/70 leading-relaxed mb-6 max-w-2xl mx-auto font-body"
            >
              Broadnet operates and services three premier high-speed broadband networks across Avadi and Chennai:{" "}
              <strong className="text-[#4E0DBA]">Broadnet Private Fiber</strong>,{" "}
              <strong className="text-[#003399]">BSNL Bharat Fibre</strong>, and{" "}
              <strong className="text-[#0C2340]">Railwire Broadband</strong>. Select your service provider below to access their official, encrypted payment interface.
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-semibold text-[#16143E]/80"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#16143E]/10 shadow-xs">
                <ShieldCheck size={14} className="text-emerald-600" />
                <span>100% Official Gateways</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#16143E]/10 shadow-xs">
                <Zap size={14} className="text-[#EF1313]" />
                <span>Instant Auto-Reconnection</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#16143E]/10 shadow-xs">
                <CreditCard size={14} className="text-[#4E0DBA]" />
                <span>All UPI, Cards &amp; NetBanking</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Provider Tabs Filter */}
      <section className="sticky top-24 z-30 bg-white/95 backdrop-blur-md border-b border-[#16143E]/10 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#16143E]/60 uppercase tracking-wider hidden sm:inline mr-1" style={{ fontFamily: "Syne, sans-serif" }}>
                Select Provider:
              </span>
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "all"
                    ? "bg-[#16143E] text-white shadow-sm"
                    : "bg-[#16143E]/5 text-[#16143E]/70 hover:bg-[#16143E]/10 hover:text-[#16143E]"
                }`}
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                All 3 Providers
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("broadnet")}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === "broadnet"
                    ? "bg-[#4E0DBA] text-white shadow-sm"
                    : "bg-[#4E0DBA]/8 text-[#4E0DBA] hover:bg-[#4E0DBA]/15"
                }`}
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                <span className="w-2 h-2 rounded-full bg-[#EF1313]" />
                <span>Broadnet Fiber</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("bsnl")}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === "bsnl"
                    ? "bg-[#003399] text-white shadow-sm"
                    : "bg-[#003399]/8 text-[#003399] hover:bg-[#003399]/15"
                }`}
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>BSNL Bharat Fibre</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("railwire")}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === "railwire"
                    ? "bg-[#0C2340] text-white shadow-sm"
                    : "bg-[#0C2340]/8 text-[#0C2340] hover:bg-[#0C2340]/15"
                }`}
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Railwire</span>
              </button>
            </div>

            {/* Quick Phone Helper */}
            <a
              href="tel:+918681888111"
              className="hidden lg:flex items-center gap-2 text-xs font-bold text-[#16143E]/80 hover:text-[#EF1313] transition-colors flex-shrink-0"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              <Phone size={13} className="text-[#EF1313]" />
              <span>Billing Desk: 86818 88111</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. The 3 Main Parts (Provider Cards) */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredProviders.map((provider) => {
              const isBroadnet = provider.id === "broadnet";
              const isBsnl = provider.id === "bsnl";
              const isRailwire = provider.id === "railwire";

              return (
                <motion.div
                  key={provider.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl border border-[#16143E]/10 shadow-xl shadow-[#16143E]/5 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:border-[#16143E]/20 transition-all duration-300"
                >
                  {/* Top Header Strip with Brand Styling */}
                  <div
                    className={`p-6 sm:p-7 border-b border-[#16143E]/8 ${
                      isBroadnet
                        ? "bg-gradient-to-br from-[#F6F1FF] to-[#FFFFFF]"
                        : isBsnl
                        ? "bg-gradient-to-br from-[#EFF6FF] to-[#FFFFFF]"
                        : "bg-gradient-to-br from-[#F0FDF4]/50 via-[#F8FAFC] to-[#FFFFFF]"
                    }`}
                  >
                    {/* Badge & Part Indicator */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className={`text-[11px] font-bold px-3 py-1 rounded-full border ${provider.badgeColor}`}
                        style={{ fontFamily: "Syne, sans-serif" }}
                      >
                        {provider.badge}
                      </span>
                      <span className="text-[11px] font-semibold text-[#16143E]/40 uppercase tracking-wider">
                        {isBroadnet ? "Part 1 of 3" : isBsnl ? "Part 2 of 3" : "Part 3 of 3"}
                      </span>
                    </div>

                    {/* Logo & Brand Display */}
                    <div className="h-12 flex items-center mb-3">
                      {isBroadnet && <BroadnetLogo />}
                      {isBsnl && <PartnerLogo brand="BSNL" className="h-9 w-auto" />}
                      {isRailwire && <PartnerLogo brand="RailWire" className="h-9 w-auto" />}
                    </div>

                    <h2
                      className="text-xl sm:text-2xl font-bold text-[#16143E] mb-1 font-display"
                    >
                      {provider.name}
                    </h2>

                    <p className="text-xs font-semibold text-[#16143E]/60 mb-3" style={{ fontFamily: "Syne, sans-serif" }}>
                      {provider.tagline}
                    </p>

                    <p className="text-xs text-[#16143E]/70 leading-relaxed font-body">
                      {provider.audience}
                    </p>
                  </div>

                  {/* Body: Requirements & Steps */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                    {/* Required Identifiers */}
                    <div className="p-4 rounded-2xl bg-[#16143E]/[0.02] border border-[#16143E]/8">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#16143E] mb-2 font-display">
                        <Lock size={13} className="text-[#4E0DBA]" />
                        <span>{provider.identifierTitle}</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-[#16143E]/75">
                        {provider.identifierDetails.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#16143E]/40 mt-1.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 4-Step Instructions */}
                    <div>
                      <div className="text-xs font-bold text-[#16143E]/80 uppercase tracking-wider mb-3 font-display">
                        Quick Payment Steps:
                      </div>
                      <ol className="space-y-2.5 text-xs text-[#16143E]/75">
                        {provider.steps.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span
                              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 text-white ${
                                isBroadnet
                                  ? "bg-[#4E0DBA]"
                                  : isBsnl
                                  ? "bg-[#003399]"
                                  : "bg-[#0C2340]"
                              }`}
                            >
                              {idx + 1}
                            </span>
                            <span className="leading-tight pt-0.5">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Supported Payment Modes */}
                    <div className="pt-2">
                      <div className="text-[11px] font-semibold text-[#16143E]/50 mb-2">
                        Supported Methods:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {provider.paymentModes.map((mode, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-medium px-2 py-1 rounded-md bg-[#16143E]/5 text-[#16143E]/80"
                          >
                            ✓ {mode}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-6 sm:p-7 pt-4 bg-[#16143E]/[0.02] border-t border-[#16143E]/8 space-y-3">
                    {/* Primary Button Opening Payment Interface */}
                    <a
                      href={provider.portalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handlePortalClick(provider.name, provider.portalUrl)}
                      className={`w-full py-3.5 px-5 rounded-2xl font-bold text-xs sm:text-sm text-white flex items-center justify-center gap-2 shadow-lg transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer ${
                        isBroadnet
                          ? "bg-gradient-to-r from-[#4E0DBA] to-[#6A1EDB] hover:from-[#3D0A93] hover:to-[#5815BD] shadow-[#4E0DBA]/25"
                          : isBsnl
                          ? "bg-gradient-to-r from-[#003399] to-[#0055EE] hover:from-[#002877] hover:to-[#0044CC] shadow-[#003399]/25"
                          : "bg-gradient-to-r from-[#0C2340] to-[#1E3A5F] hover:from-[#08172B] hover:to-[#152B47] shadow-[#0C2340]/25"
                      }`}
                      style={{ fontFamily: "Syne, sans-serif" }}
                      aria-label={`Open official ${provider.name} payment portal in new tab`}
                    >
                      <span>Pay on {provider.portalDisplay}</span>
                      <ExternalLink size={15} />
                    </a>

                    <div className="flex items-center justify-between text-[11px] text-[#16143E]/50 px-1">
                      <span className="flex items-center gap-1">
                        <Lock size={10} className="text-emerald-600" />
                        <span>SSL 256-bit Encrypted</span>
                      </span>
                      <span className="truncate max-w-[170px] text-right font-mono">
                        {provider.portalDisplay}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>



      {/* 5. In-Person Billing & Avadi Office Walk-In */}
      <section className="py-12 bg-[#FAF9FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-[#16143E]/10 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#4E0DBA]/10 text-[#4E0DBA] flex items-center justify-center flex-shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#16143E] mb-1 font-display">
                  Avadi Branch Payment Desk
                </h4>
                <p className="text-xs text-[#16143E]/65 leading-relaxed font-body">
                  {SITE_CONFIG.address.full}
                </p>
                <div className="text-[11px] font-semibold text-[#4E0DBA] mt-2">
                  Cash, UPI QR &amp; Cheque accepted
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#16143E]/10 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EF1313]/10 text-[#EF1313] flex items-center justify-center flex-shrink-0">
                <Clock size={22} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#16143E] mb-1 font-display">
                  Billing Desk Timings
                </h4>
                <p className="text-xs text-[#16143E]/65 leading-relaxed font-body">
                  Monday – Saturday: 9:00 AM – 8:30 PM<br />
                  Sunday: 10:00 AM – 2:00 PM
                </p>
                <div className="text-[11px] font-semibold text-emerald-600 mt-2">
                  Instant printed physical receipt
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#16143E]/10 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <Phone size={22} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#16143E] mb-1 font-display">
                  Telephone Billing Support
                </h4>
                <p className="text-xs text-[#16143E]/65 leading-relaxed font-body">
                  Call our central dispatch desk at <strong>{SITE_CONFIG.phones.primary}</strong> for quick line reset or payment confirmation.
                </p>
                <div className="text-[11px] font-semibold text-[#16143E]/80 mt-2">
                  &lt; 2-Hour Response Time
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Frequently Asked Questions */}
      <section className="py-14 sm:py-18 bg-white border-t border-[#16143E]/8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#16143E] mb-3 font-display">
              Bill Payment Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-[#16143E]/60 font-body">
              Common questions about broadband recharges, online portals, and line reconnections.
            </p>
          </div>

          <div className="space-y-3">
            {BILLING_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#16143E]/10 overflow-hidden transition-colors bg-[#FAF9FF]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-[#16143E] hover:text-[#4E0DBA] transition-colors cursor-pointer"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "rotate-180 text-[#EF1313]" : "text-[#16143E]/40"
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-4 sm:px-5 pb-5 pt-0 text-xs sm:text-sm text-[#16143E]/70 leading-relaxed font-body border-t border-[#16143E]/5"
                      >
                        <p>{faq.a}</p>
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
