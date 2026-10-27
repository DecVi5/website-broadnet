"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  ChevronDown,
  ChevronRight,
  Camera,
  ArrowRight,
  Users,
  ShieldCheck,
  Shield,
  Wifi,
  MapPin,
  Network,
  CreditCard,
} from "lucide-react";
import BroadnetLogo from "./BroadnetLogo";
import { scrollToWithPhysics } from "@/lib/scrollPhysics";
import { trackEvent } from "@/lib/analytics";

const SECURITY_SERVICES = [
  { id: "cctv", shortTitle: "CCTV Surveillance", href: "/security/cameras" },
  { id: "door-phones", shortTitle: "Video Door Phones", href: "/security/door-phones" },
  { id: "access-control", shortTitle: "Biometric Access Control", href: "/security/access-control" },
  { id: "intrusion-alarms", shortTitle: "Intrusion Alarms", href: "/security/intrusion-alarms" },
  { id: "entrance-security", shortTitle: "Boom Barriers & Screening", href: "/services/entrance-security" },
];

const INTERNET_NETWORKING_SERVICES = [
  { id: "internet", shortTitle: "Fiber Broadband Plans", href: "/internet" },
  { id: "pay-bill", shortTitle: "Pay Internet Bill (3 Portals)", href: "/pay-bill" },
  { id: "enterprise-wifi", shortTitle: "Enterprise & Industrial Wi-Fi", href: "/services/enterprise-wifi" },
  { id: "networking", shortTitle: "Network Infrastructure & Firewalls", href: "/services/networking" },
];

function WhatsAppIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
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

export default function Header({ activePage = "" }: { activePage?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSecurityOpen, setMobileSecurityOpen] = useState(true);
  const [mobileInternetOpen, setMobileInternetOpen] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState<"security" | "internet">("security");

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();
  const isHomePage = pathname === "/" || activePage === "Home";
  const isServices =
    pathname?.startsWith("/security") ||
    pathname?.startsWith("/services") ||
    pathname?.startsWith("/cctv") ||
    pathname?.startsWith("/internet") ||
    pathname?.startsWith("/service-areas") ||
    activePage === "Services" ||
    activePage === "Service Areas";
  const isProjects =
    pathname?.startsWith("/projects") ||
    activePage === "Projects" ||
    activePage === "Past Projects";
  const isAbout =
    pathname?.startsWith("/about") ||
    pathname?.startsWith("/industries") ||
    activePage === "About Us" ||
    activePage === "Industries";
  const isPayBill = pathname === "/pay-bill" || activePage === "Pay Bill";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveServiceTab("security");
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 180);
  };

  const handleEnquiryClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    setMobileOpen(false);
    setDropdownOpen(false);
    const enquiryEl = document.getElementById("enquiry");
    if (enquiryEl) {
      e.preventDefault();
      window.history.pushState(null, "", "#enquiry");
      scrollToWithPhysics("enquiry");
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-header-scrolled" : "glass-header"
        }`}
        style={{ overflow: "visible" }}
      >
        {/* Main Clean Header Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-18 gap-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <BroadnetLogo />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-[#16143E]/[0.03] p-1 rounded-full border border-[#16143E]/8 backdrop-blur-md">
              <Link
                href="/"
                className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-200 ${
                  isHomePage && !isServices && !isAbout
                    ? "text-[#4E0DBA] bg-white shadow-xs"
                    : "text-[#16143E]/75 hover:text-[#16143E] hover:bg-white/60"
                }`}
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  type="button"
                  className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                    isServices
                      ? "text-[#4E0DBA] bg-white shadow-xs"
                      : "text-[#16143E]/75 hover:text-[#16143E] hover:bg-white/60"
                  }`}
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  <span>Services</span>
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180 text-[#EF1313]" : "text-[#16143E]/50"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.98 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 rounded-2xl bg-white/98 backdrop-blur-xl border border-[#16143E]/10 shadow-2xl shadow-[#16143E]/10 p-2 z-50 flex gap-2 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3"
                    >
                      {/* Left Column: Categories */}
                      <div className="w-56 flex flex-col gap-1 pr-1 border-r border-[#16143E]/8">
                        {/* 1. Security Solutions (Active / Hoverable tab) */}
                        <div
                          onMouseEnter={() => setActiveServiceTab("security")}
                          className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer ${
                            activeServiceTab === "security"
                              ? "bg-[#4E0DBA]/[0.08] text-[#4E0DBA]"
                              : "text-[#16143E]/80 hover:text-[#4E0DBA] hover:bg-[#16143E]/[0.04]"
                          }`}
                          style={{ fontFamily: "Syne, sans-serif" }}
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-[#4E0DBA]/10 text-[#4E0DBA] flex items-center justify-center flex-shrink-0">
                              <ShieldCheck size={14} />
                            </div>
                            <div className="text-left">
                              <span className="block leading-tight">Security Solutions</span>
                              <span className="text-[10px] text-[#16143E]/50 font-medium block">
                                5 Systems
                              </span>
                            </div>
                          </div>
                          <ChevronRight
                            size={13}
                            className={`transition-transform duration-150 ${
                              activeServiceTab === "security"
                                ? "translate-x-0.5 text-[#4E0DBA]"
                                : "text-[#16143E]/30"
                            }`}
                          />
                        </div>

                        {/* 2. Internet & Networking (Active / Hoverable tab) */}
                        <div
                          onMouseEnter={() => setActiveServiceTab("internet")}
                          className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer ${
                            activeServiceTab === "internet"
                              ? "bg-[#EF1313]/[0.08] text-[#EF1313]"
                              : "text-[#16143E]/80 hover:text-[#EF1313] hover:bg-[#16143E]/[0.04]"
                          }`}
                          style={{ fontFamily: "Syne, sans-serif" }}
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-[#EF1313]/10 text-[#EF1313] flex items-center justify-center flex-shrink-0">
                              <Wifi size={14} />
                            </div>
                            <div className="text-left">
                              <span className="block leading-tight">Internet & Networks</span>
                              <span className="text-[10px] text-[#16143E]/50 font-medium block">
                                Fiber, Wi-Fi & Cabling
                              </span>
                            </div>
                          </div>
                          <ChevronRight
                            size={13}
                            className={`transition-transform duration-150 ${
                              activeServiceTab === "internet"
                                ? "translate-x-0.5 text-[#EF1313]"
                                : "text-[#16143E]/30"
                            }`}
                          />
                        </div>

                        <div className="my-0.5 border-t border-[#16143E]/8" />

                        {/* 3. Service Areas (Direct link to /service-areas) */}
                        <Link
                          href="/service-areas"
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold text-[#16143E]/80 hover:text-[#4E0DBA] hover:bg-[#4E0DBA]/[0.06] transition-all duration-150 group"
                          style={{ fontFamily: "Syne, sans-serif" }}
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                              <MapPin size={14} />
                            </div>
                            <div className="text-left">
                              <span className="block leading-tight">Service Areas</span>
                              <span className="text-[10px] text-[#16143E]/50 font-medium block">
                                Avadi & Chennai
                              </span>
                            </div>
                          </div>
                          <ArrowRight
                            size={12}
                            className="opacity-0 -translate-x-1 text-emerald-600 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150"
                          />
                        </Link>
                      </div>

                      {/* Right Sub-Panel */}
                      {activeServiceTab === "security" && (
                        <div className="w-64 flex flex-col gap-0.5 pl-1 py-1">
                          <div className="px-3 pb-1.5 mb-1 border-b border-[#16143E]/6 flex items-center justify-between">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#4E0DBA]">
                              Security Systems
                            </span>
                            <span className="text-[10px] text-[#16143E]/40 font-medium">
                              Certified Install
                            </span>
                          </div>

                          {SECURITY_SERVICES.map((srv) => (
                            <Link
                              key={srv.id}
                              href={srv.href}
                              onClick={() => setDropdownOpen(false)}
                              className="group flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-semibold text-[#16143E]/80 hover:text-[#4E0DBA] hover:bg-[#16143E]/[0.04] transition-all duration-150"
                              style={{ fontFamily: "Syne, sans-serif" }}
                            >
                              <span className="transition-transform duration-150 group-hover:translate-x-1">
                                {srv.shortTitle}
                              </span>
                              <ArrowRight
                                size={12}
                                className="opacity-0 -translate-x-1.5 text-[#4E0DBA] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150"
                              />
                            </Link>
                          ))}
                        </div>
                      )}

                      {activeServiceTab === "internet" && (
                        <div className="w-64 flex flex-col gap-0.5 pl-1 py-1">
                          <div className="px-3 pb-1.5 mb-1 border-b border-[#16143E]/6 flex items-center justify-between">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#EF1313]">
                              Internet & Networking
                            </span>
                            <span className="text-[10px] text-[#16143E]/40 font-medium">
                              High-Speed Infrastructure
                            </span>
                          </div>

                          {INTERNET_NETWORKING_SERVICES.map((srv) => (
                            <Link
                              key={srv.id}
                              href={srv.href}
                              onClick={() => setDropdownOpen(false)}
                              className="group flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-semibold text-[#16143E]/80 hover:text-[#EF1313] hover:bg-[#16143E]/[0.04] transition-all duration-150"
                              style={{ fontFamily: "Syne, sans-serif" }}
                            >
                              <span className="transition-transform duration-150 group-hover:translate-x-1">
                                {srv.shortTitle}
                              </span>
                              <ArrowRight
                                size={12}
                                className="opacity-0 -translate-x-1.5 text-[#EF1313] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150"
                              />
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Pay Bill */}
              <Link
                href="/pay-bill"
                className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-200 ${
                  isPayBill
                    ? "text-[#4E0DBA] bg-white shadow-xs"
                    : "text-[#16143E]/75 hover:text-[#16143E] hover:bg-white/60"
                }`}
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Pay Bill
              </Link>

              {/* Projects */}
              <Link
                href="/projects"
                className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-200 ${
                  isProjects
                    ? "text-[#4E0DBA] bg-white shadow-xs"
                    : "text-[#16143E]/75 hover:text-[#16143E] hover:bg-white/60"
                }`}
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Projects
              </Link>

              {/* About Us Direct Link */}
              <Link
                href="/about"
                className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-200 ${
                  isAbout
                    ? "text-[#4E0DBA] bg-white shadow-xs"
                    : "text-[#16143E]/75 hover:text-[#16143E] hover:bg-white/60"
                }`}
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                About Us
              </Link>
            </nav>

            {/* Desktop Quick Actions */}
            <div className="hidden md:flex items-center gap-2.5">
              <a
                href="tel:+918681888111"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-[#16143E] hover:text-[#EF1313] hover:bg-[#16143E]/5 transition-colors"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                <Phone size={14} className="text-[#EF1313]" />
                <span>86818 88111</span>
              </a>

              <a
                href="https://wa.me/918681888111?text=Hello%20Broadnet%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] flex items-center justify-center transition-colors"
                aria-label="WhatsApp Broadnet"
              >
                <WhatsAppIcon size={16} />
              </a>

              <Link
                href="/contact#enquiry"
                onClick={handleEnquiryClick}
                className="btn-crimson text-xs py-2 px-4 shadow-sm glow-btn-crimson font-bold rounded-full"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Burger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2.5 rounded-xl text-[#16143E] hover:bg-[#16143E]/5 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/98 backdrop-blur-2xl border-t border-[#16143E]/10 max-h-[85vh] overflow-y-auto custom-scrollbar-light px-4 py-4 shadow-2xl"
            >
              <div className="space-y-1.5">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-4 py-2.5 rounded-xl text-sm font-bold text-[#16143E] hover:bg-[#16143E]/5"
                >
                  Home
                </Link>

                {/* Mobile Services Accordion */}
                <div className="rounded-xl border border-[#16143E]/8 overflow-hidden bg-[#FAFAFE]">
                  <div className="flex items-center justify-between pr-2">
                    <span className="px-4 py-2.5 text-sm font-bold text-[#16143E] flex items-center gap-2">
                      <Camera size={16} className="text-[#EF1313]" />
                      <span>Services</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#16143E]/60 cursor-pointer"
                      aria-label="Toggle services list"
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          mobileServicesOpen ? "rotate-180 text-[#EF1313]" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {mobileServicesOpen && (
                    <div className="px-2 pb-2 space-y-1.5 border-t border-[#16143E]/8 pt-1.5">
                      {/* 1. Security Solutions (Sub-Accordion) */}
                      <div className="rounded-lg border border-[#16143E]/6 bg-white overflow-hidden">
                        <button
                          type="button"
                          onClick={() => setMobileSecurityOpen(!mobileSecurityOpen)}
                          className="w-full flex items-center justify-between px-3 py-2.5 min-h-[44px] text-xs font-bold text-[#16143E] hover:text-[#4E0DBA] transition-colors cursor-pointer"
                        >
                          <span className="flex items-center gap-2">
                            <ShieldCheck size={14} className="text-[#4E0DBA]" />
                            <span>Security Solutions</span>
                          </span>
                          <ChevronDown
                            size={13}
                            className={`transition-transform duration-200 ${
                              mobileSecurityOpen ? "rotate-180 text-[#EF1313]" : "text-[#16143E]/40"
                            }`}
                          />
                        </button>

                        {mobileSecurityOpen && (
                          <div className="px-2 pb-2 space-y-0.5 border-t border-[#16143E]/6 pt-1 bg-[#FAFAFE]">
                            {SECURITY_SERVICES.map((srv) => (
                              <Link
                                key={srv.id}
                                href={srv.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center justify-between px-2.5 py-2.5 min-h-[44px] rounded-md text-xs font-semibold text-[#16143E]/80 hover:text-[#4E0DBA] hover:bg-white transition-all"
                              >
                                <span>{srv.shortTitle}</span>
                                <ArrowRight size={11} className="text-[#16143E]/30" />
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* 2. Internet & Networking (Sub-Accordion) */}
                      <div className="rounded-lg border border-[#16143E]/6 bg-white overflow-hidden">
                        <button
                          type="button"
                          onClick={() => setMobileInternetOpen(!mobileInternetOpen)}
                          className="w-full flex items-center justify-between px-3 py-2.5 min-h-[44px] text-xs font-bold text-[#16143E] hover:text-[#EF1313] transition-colors cursor-pointer"
                        >
                          <span className="flex items-center gap-2">
                            <Wifi size={14} className="text-[#EF1313]" />
                            <span>Internet & Networking</span>
                          </span>
                          <ChevronDown
                            size={13}
                            className={`transition-transform duration-200 ${
                              mobileInternetOpen ? "rotate-180 text-[#EF1313]" : "text-[#16143E]/40"
                            }`}
                          />
                        </button>

                        {mobileInternetOpen && (
                          <div className="px-2 pb-2 space-y-0.5 border-t border-[#16143E]/6 pt-1 bg-[#FAFAFE]">
                            {INTERNET_NETWORKING_SERVICES.map((srv) => (
                              <Link
                                key={srv.id}
                                href={srv.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center justify-between px-2.5 py-2.5 min-h-[44px] rounded-md text-xs font-semibold text-[#16143E]/80 hover:text-[#EF1313] hover:bg-white transition-all"
                              >
                                <span>{srv.shortTitle}</span>
                                <ArrowRight size={11} className="text-[#16143E]/30" />
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="my-0.5 border-t border-[#16143E]/8" />

                      {/* 3. Service Areas (Direct Link) */}
                      <Link
                        href="/service-areas"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 min-h-[44px] rounded-lg text-xs font-bold text-[#16143E] hover:text-[#4E0DBA] hover:bg-white transition-all"
                      >
                        <span className="flex items-center gap-2">
                          <MapPin size={14} className="text-emerald-500" />
                          <span>Service Areas</span>
                        </span>
                        <ArrowRight size={12} className="text-[#16143E]/30" />
                      </Link>
                    </div>
                  )}
                </div>

                {/* Mobile Pay Bill Link */}
                <Link
                  href="/pay-bill"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold text-[#4E0DBA] bg-[#4E0DBA]/[0.06] border border-[#4E0DBA]/15 hover:bg-[#4E0DBA]/[0.1]"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  <span className="flex items-center gap-2">
                    <CreditCard size={15} className="text-[#4E0DBA]" />
                    <span>Pay Internet Bill (3 Portals)</span>
                  </span>
                  <ArrowRight size={14} className="text-[#4E0DBA]" />
                </Link>

                {/* Mobile Projects */}
                <Link
                  href="/projects"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold text-[#16143E] hover:bg-[#16143E]/5"
                >
                  <span>Projects</span>
                  <ArrowRight size={14} className="text-[#16143E]/30" />
                </Link>

                {/* Mobile About Us Link */}
                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold text-[#16143E] hover:bg-[#16143E]/5"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  <span className="flex items-center gap-2">
                    <Users size={16} className="text-[#4E0DBA]" />
                    <span>About Us</span>
                  </span>
                  <ArrowRight size={14} className="text-[#16143E]/30" />
                </Link>
              </div>

              {/* Mobile CTA Strip */}
              <div className="pt-4 mt-4 border-t border-[#16143E]/10 flex flex-col gap-2">
                <a
                  href="tel:+918681888111"
                  className="w-full py-2.5 rounded-xl bg-[#16143E] text-white text-xs font-bold flex items-center justify-center gap-2"
                >
                  <Phone size={14} className="text-[#EF1313]" /> Call 86818 88111
                </a>
                <Link
                  href="/contact#enquiry"
                  onClick={handleEnquiryClick}
                  className="w-full btn-crimson text-xs py-2.5 justify-center rounded-full"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}