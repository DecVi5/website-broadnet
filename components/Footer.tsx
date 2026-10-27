"use client";

import Link from "next/link";
import {
  Phone,
  MapPin,
  Mail,
  ArrowUpRight,
  Navigation,
  Clock,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import BroadnetLogo from "./BroadnetLogo";
import { SERVICES_LIST, CONTACT_INFO } from "@/data/services";

const QUICK_LINKS = [
  { label: "Home Overview", href: "/" },
  { label: "CCTV Solutions", href: "/cctv-landing" },
  { label: "Projects & Installations", href: "/projects" },
  { label: "Service Areas (Chennai / Avadi)", href: "/service-areas" },
  { label: "About Us (12 Years / 10+ Staff)", href: "/about" },
  { label: "Fiber Internet Plans", href: "/internet" },
  { label: "Pay Internet Bill (3 Portals)", href: "/pay-bill" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#120F35] via-[#16143E] to-[#0D0B24] text-white pt-16 pb-28 md:pb-14 border-t border-[#4E0DBA]/25">
      {/* Top subtle gradient divider line and radial glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4E0DBA] to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-[#EF1313]/60 via-[#4E0DBA] to-[#EF1313]/60 blur-xs" />

      {/* Ambient background aura glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-[#4E0DBA]/12 blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#EF1313]/8 blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <BroadnetLogo variant="dark" />
            </div>

            <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-3 italic">
              &ldquo;{CONTACT_INFO.slogan}&rdquo;
            </p>

            {/* Gradient Badge for CCTV Tagline */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#EF1313]/15 via-[#4E0DBA]/15 to-[#EF1313]/15 border border-[#EF1313]/30 text-xs font-bold text-white mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF1313] animate-pulse" />
              <span>CCTV: &ldquo;{CONTACT_INFO.cctvTagline}&rdquo;</span>
            </div>

            <div className="space-y-2 text-xs text-white/75 mb-5">
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <span>Operating Since 2014 · 12+ Years Trust</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                <ShieldCheck size={14} className="text-[#EF1313] flex-shrink-0" />
                <span>Hikvision & CP PLUS Certified Engineers</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                <CheckCircle2 size={14} className="text-[#A78BFA] flex-shrink-0" />
                <span>eSSL & Grandstream Authorised Partner</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-4 inline-flex items-center gap-2 text-white/90"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#4E0DBA] to-[#EF1313]" />
              <span>Explore Broadnet</span>
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-[13px]">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/65 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2 py-1.5 group touch-link"
                  >
                    <ArrowUpRight size={12} className="text-[#A78BFA] opacity-60 group-hover:opacity-100 group-hover:text-white transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-4 inline-flex items-center gap-2 text-white/90"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#EF1313] to-[#4E0DBA]" />
              <span>Services & Solutions</span>
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-[13px]">
              {SERVICES_LIST.map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={srv.href}
                    className="text-white/65 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2 py-1.5 group touch-link"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#EF1313] to-[#4E0DBA] opacity-70 group-hover:opacity-100 flex-shrink-0" />
                    <span className="truncate">{srv.shortTitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office Details */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-4 inline-flex items-center gap-2 text-white/90"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#4E0DBA] to-emerald-400" />
              <span>Avadi Dispatch Office</span>
            </h3>
            <address className="not-italic space-y-3.5 text-xs sm:text-[13px] text-white/70">
              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 flex items-center justify-center flex-shrink-0 text-[#EF1313]">
                  <MapPin size={14} />
                </div>
                <div>
                  <span className="text-white font-medium block">
                    1093, Fire Station Road, TNHB,
                  </span>
                  <span className="text-white/65">Avadi, Chennai – 600 054</span>
                  <a
                    href={CONTACT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-[#A78BFA] hover:text-white flex items-center gap-1 font-bold text-[11px]"
                  >
                    <Navigation size={11} /> Open in Google Maps
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 flex items-center justify-center flex-shrink-0 text-emerald-400">
                  <Phone size={14} />
                </div>
                <div>
                  <a href="tel:+918681888111" className="hover:text-white font-bold block text-white">
                    86818 88111
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 flex items-center justify-center flex-shrink-0 text-[#A78BFA]">
                  <Mail size={14} />
                </div>
                <div>
                  <a href="mailto:admin@broadnet.in" className="hover:text-white block text-white/80">
                    admin@broadnet.in
                  </a>
                  <a href="mailto:support@broadnet.in" className="hover:text-white block text-white/65">
                    support@broadnet.in
                  </a>
                </div>
              </div>

              <div className="flex gap-3 pt-2 border-t border-white/8 text-[11px]">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 flex items-center justify-center flex-shrink-0 text-amber-400">
                  <Clock size={14} />
                </div>
                <div>
                  <span className="text-white/90 font-medium block">Mon — Sat: 9:00 AM — 7:00 PM</span>
                  <span className="text-emerald-400 font-medium">Emergency: 24/7 On-Call Support</span>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
            <span>© {new Date().getFullYear()} Broadnet Internet Services. All Rights Reserved.</span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-semibold text-white/60 tracking-wider">
              v2.5
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-4 text-xs">
            <Link href="/cctv-landing" className="hover:text-white transition-colors">
              CCTV Division
            </Link>
            <span>·</span>
            <Link href="/service-areas" className="hover:text-white transition-colors">
              Service Areas
            </Link>
            <span>·</span>
            <Link href="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <span>·</span>
            <Link href="/projects" className="hover:text-white transition-colors">
              Projects
            </Link>
          </div>
          <div className="text-[11px] text-white/40 text-center md:text-right tracking-wide">
            Made with{" "}
            <a
              href="https://website-indianpixel.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/75 font-semibold hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Indian Pixel
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
