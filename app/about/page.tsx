import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquirySection from "@/components/EnquirySection";
import MilestonesSection from "@/components/MilestonesSection";
import BrandPartnersSection from "@/components/BrandPartnersSection";
import PartnerLogo from "@/components/PartnerLogo";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Users,
  Award,
  MapPin,
  Clock,
  TrendingUp,
  Heart,
  BadgeCheck,
  ArrowRight,
  Shield,
  Wifi,
  Sparkles,
  Camera,
  Network,
  CheckCircle2,
  HardHat,
  Cpu,
  Building2,
  PhoneCall,
  Lock,
  Wrench,
  Radio,
  FileCheck2,
  UploadCloud,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Broadnet | Avadi's Leading Security & Network Integrator Since 2014",
  description:
    "Broadnet Internet Services operates in Avadi, Chennai since 2014 with 10+ certified engineers. 2,500+ installations, 100+ km fiber network, and certified partner for Hikvision, CP PLUS, Grandstream, and eSSL.",
  alternates: {
    canonical: "https://www.broadnet.in/about",
  },
  openGraph: {
    title: "About Broadnet Internet Services | 12 Years in Avadi, Chennai",
    description:
      "Avadi's technology and security systems provider. CCTV, biometrics, enterprise Wi-Fi, and network infrastructure.",
    url: "https://www.broadnet.in/about",
  },
};

const STATS = [
  { value: "2014", label: "Year Established", detail: "12+ Years Operating in Avadi", icon: Clock },
  { value: "100+ km", label: "Private OFC Backbone", detail: "Zero-Reseller Optical Mesh", icon: Wifi },
  { value: "2,500+", label: "Verified Deployments", detail: "Homes, Villas & Corporates", icon: Heart },
  { value: "< 2 Hrs", label: "Local Dispatch SLA", detail: "Avadi Engineering Hub", icon: HardHat },
];

// Dedicated photo slots for Field & Operations Gallery
const OPERATIONS_GALLERY = [
  {
    id: "hq-hub",
    title: "Central Operations Hub & Customer Desk",
    category: "Headquarters",
    location: "Fire Station Road, TNHB, Avadi",
    desc: "Our primary engineering and dispatch office, stocking certified Hikvision, CP PLUS, and eSSL inventory for instant local deployment.",
    tag: "Avadi HQ",
    color: "#4E0DBA",
    icon: Building2,
    imageSrc: "/assets/about/hq-hub.jpg",
  },
  {
    id: "fiber-splicing",
    title: "Optical Fiber Cable (OFC) Splicing & Maintenance",
    category: "Infrastructure",
    location: "Avadi & Surrounding Rings",
    desc: "Our in-house fiber crew utilizing precision core-alignment fusion splicers to maintain low-attenuation (sub-0.02dB) gigabit links across 100+ km.",
    tag: "100+ km Mesh",
    color: "#00C2FF",
    icon: Network,
    imageSrc: "/assets/about/fiber-splicing.jpg",
  },
  {
    id: "control-room",
    title: "CCTV Matrix Testing & Surveillance Lab",
    category: "Security Testing",
    location: "Broadnet Hardware Testing Bench",
    desc: "Every IP camera, NVR loop, and ColorVu night sensor undergoes a 24-hour burn-in stress test before field installation to guarantee zero DOA.",
    tag: "Zero DOA Protocol",
    color: "#EF1313",
    icon: Camera,
    imageSrc: "/assets/about/control-room.jpg",
  },
  {
    id: "dispatch-fleet",
    title: "Technician Fleet & On-Site Response Dispatch",
    category: "Field Operations",
    location: "Avadi, Ambattur & Poonamallee",
    desc: "Equipped technician response teams dispatched within 2 hours across Avadi, carrying backup cameras, switches, and emergency repair spares.",
    tag: "< 2-Hour SLA",
    color: "#22c55e",
    icon: Wrench,
    imageSrc: "/assets/about/dispatch-fleet.jpg",
  },
  {
    id: "access-turnstile",
    title: "Biometric Access Control & Turnstiles",
    category: "Corporate ELV",
    location: "Industrial Parks & Commercial Offices",
    desc: "Heavy-duty electromagnetic latches, facial recognition attendance terminals, and automated vehicular RFID boom barriers deployed seamlessly.",
    tag: "eSSL Authorized",
    color: "#4E0DBA",
    icon: Lock,
    imageSrc: "/assets/about/access-turnstile.jpg",
  },
  {
    id: "client-handover",
    title: "Client Walkthrough & Multi-Device App Sync",
    category: "Quality Assurance",
    location: "Residential Villas & Apartments",
    desc: "Complete post-installation client training: live mobile viewing configuration, playback search, motion push notifications, and warranty card handover.",
    tag: "Full Handover",
    color: "#F59E0B",
    icon: BadgeCheck,
    imageSrc: "/assets/about/client-handover.jpg",
  },
];

// Dedicated photo slots for In-House Leadership & Engineers
const TEAM_MEMBERS = [
  {
    name: "Surveillance Systems Architect",
    role: "Lead CCTV & ELV Security Engineer",
    badge: "CP PLUS CSE • Hikvision HCSA",
    experience: "12+ Years Field Experience",
    specialty: "High-density IP camera mesh, optical NVR matrix, perimeter intrusion lasers",
    imageSrc: "/assets/about/team-cctv-lead.jpg",
  },
  {
    name: "Optical Network Specialist",
    role: "Fiber Infrastructure & Transmission Lead",
    badge: "FTTH Core Fusion Specialist",
    experience: "10+ Years Optical Fiber",
    specialty: "Private 100+ km trunk design, OTDR link loss testing, symmetric gigabit feeds",
    imageSrc: "/assets/about/team-fiber-lead.jpg",
  },
  {
    name: "Biometrics & Automation Engineer",
    role: "Access Control & Turnstiles Specialist",
    badge: "eSSL Certified Systems Partner",
    experience: "8+ Years Corporate ELV",
    specialty: "Facial attendance integration, RFID boom barriers, electromagnetic drop-bolts",
    imageSrc: "/assets/about/team-access-lead.jpg",
  },
  {
    name: "Customer Operations & Dispatch Lead",
    role: "Avadi Rapid Response Coordinator",
    badge: "2-Hour Local SLA Guarantee",
    experience: "9+ Years Operations",
    specialty: "2-hour emergency technician dispatch, preventive AMC scheduling, client care",
    imageSrc: "/assets/about/team-dispatch-lead.jpg",
  },
];

// Dedicated photo slots for Official Certificates & Accreditations
const CERTIFICATE_SLOTS = [
  {
    title: "CP PLUS CSE Certification",
    credential: "Certified Surveillance Engineer",
    partner: "CP PLUS India",
    brand: "CP PLUS",
    desc: "Official factory-certified engineer authorization covering HD/IP cameras, NVRs, and AI video analytics.",
    imageSrc: "/assets/about/cert-cpplus.jpg",
  },
  {
    title: "Hikvision HCSA Partner Certification",
    credential: "Certified Security Associate",
    partner: "Hikvision Global / Prama",
    brand: "Hikvision",
    desc: "Certified partner authorization for ColorVu 24/7 color night vision, AcuSense human/vehicle detection, and perimeter defense.",
    imageSrc: "/assets/about/cert-hikvision.jpg",
  },
  {
    title: "eSSL Authorized Partner",
    credential: "Enterprise Biometric Systems",
    partner: "eSSL Security Solutions",
    brand: "eSSL",
    desc: "Direct partner authorization for contactless facial recognition, fingerprint readers, and cloud payroll software.",
    imageSrc: "/assets/about/cert-essl.jpg",
  },
  {
    title: "RailWire Telecom Partner",
    credential: "Authorized Telecom Franchise",
    partner: "RailTel Corporation of India",
    brand: "RailWire",
    desc: "Official Tier-1 telecom broadband franchise provider delivering high-speed gigabit FTTH internet in Avadi.",
    imageSrc: "/assets/about/cert-railwire.jpg",
  },
];

const VALUES = [
  {
    title: "Zero Subcontracting Guarantee",
    desc: "All installations are carried out directly by our permanent in-house staff. We never hire temporary day laborers, ensuring clean conduit wiring and tamper-free workmanship.",
  },
  {
    title: "Concealed Conduit Aesthetics",
    desc: "We respect your architectural finish. Every wire is routed through heavy-duty concealed PVC conduits or structured trunking — zero dangling, loose cables.",
  },
  {
    title: "Surveillance-Grade Storage Only",
    desc: "We exclusively install Western Digital Purple and Seagate SkyHawk surveillance drives engineered for 24/7 continuous write cycles — never cheap PC hard drives.",
  },
  {
    title: "Physical Avadi Presence",
    desc: "Our engineering operations center is physically located right on Fire Station Road, Avadi. If you ever need support, our technicians are minutes away, not days.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header activePage="About Us" />
      <main>
        {/* 1. Hero Section with Headline & Story */}
        <section className="relative pt-32 pb-20 bg-white overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: "radial-gradient(circle, #4E0DBA 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #4E0DBA 0%, transparent 70%)",
              transform: "translate(30%, -30%)",
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-6">
              <Breadcrumbs items={[{ label: "About Broadnet" }]} variant="light" />
            </div>

            <div className="grid lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Story & Philosophy */}
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4E0DBA] mb-3 font-display">
                  <span className="w-4 h-px bg-[#4E0DBA]" /> Avadi's Certified Technology Integrator
                </span>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#16143E] leading-[1.1] mb-5 font-display">
                  Built in Avadi.
                  <br />
                  <span className="text-gradient">Trusted Across Chennai.</span>
                </h1>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4E0DBA]/10 text-[#4E0DBA] font-bold text-xs sm:text-sm mb-5">
                  <Sparkles size={14} className="text-[#EF1313]" />
                  <span>“Connecting People. Securing Places. Managing Access.”</span>
                </div>

                <p className="text-[#16143E]/70 text-base sm:text-lg leading-relaxed mb-6 font-body">
                  Founded in 2014 from Fire Station Road, TNHB Avadi, Broadnet has grown from a pioneering local ISP into Avadi's premier integrated electronic security and optical network provider. With a full-time, in-house team of 10+ certified engineers and over 100 km of privately owned optical fiber, we deliver end-to-end solutions without third-party finger-pointing.
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#16143E]/80 font-semibold mb-8">
                  <div className="flex items-center gap-2 bg-[#F8F9FD] border border-[#16143E]/10 px-3.5 py-2 rounded-xl">
                    <MapPin size={16} className="text-[#EF1313] flex-shrink-0" />
                    <span>1093, Fire Station Road, TNHB, Avadi, Chennai – 600 054</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#F8F9FD] border border-[#16143E]/10 px-3.5 py-2 rounded-xl">
                    <PhoneCall size={16} className="text-[#4E0DBA] flex-shrink-0" />
                    <span>Direct Dispatch: +91 86818 88111</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a href="#photo-gallery" className="btn-crimson flex items-center gap-2 text-xs sm:text-sm font-bold">
                    <span>Explore Operations & Gallery</span>
                    <ArrowRight size={14} />
                  </a>
                  <a
                    href="https://wa.me/918681888111?text=Hello%20Broadnet%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services%20and%20schedule%20a%20site%20visit."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full border border-[#16143E]/20 hover:border-[#16143E] text-[#16143E] font-bold text-xs sm:text-sm transition-all"
                  >
                    Direct WhatsApp Chat
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Showcase Image Frame (Drop-in ready) */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#16143E]/12 bg-gradient-to-br from-[#16143E] to-[#252060] p-3 shadow-2xl shadow-[#16143E]/15 group">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#0F0D2E] flex flex-col items-center justify-center p-6 text-center border border-white/10">
                    {/* Placeholder illustration / Drop-in Image Slot */}
                    <div className="absolute inset-0 bg-[radial-gradient(#4E0DBA_1px,transparent_1px)] opacity-20 [background-size:16px_16px]" />
                    <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#00C2FF] mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Building2 size={32} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00C2FF] font-display mb-1">
                      HQ & Operations Hub
                    </span>
                    <h3 className="text-lg font-bold text-white font-display mb-1">
                      Broadnet Engineering Center
                    </h3>
                    <p className="text-xs text-white/60 max-w-xs leading-relaxed">
                      1093, Fire Station Road, TNHB, Avadi. Direct engineering dispatch, hardware testing lab & optical headend.
                    </p>

                    <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active Local Dispatch SLA (&lt; 2 Hrs)
                    </div>

                    {/* Image indicator tag */}
                    <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[9px] font-mono text-white/60 flex items-center gap-1">
                      <Camera size={10} /> Photo Slot: /assets/about/hq-hub.jpg
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Key Metrics Strip */}
        <section className="py-14 bg-[#16143E] relative overflow-hidden text-white border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="p-6 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm hover:border-[#4E0DBA]/60 hover:bg-white/[0.07] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 text-[#00C2FF] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon size={20} />
                    </div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-white font-display mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white/90 uppercase tracking-wider mb-0.5">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-white/50">{stat.detail}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. Dedicated Operations & Field Action Gallery (Drop-in Image Slots) */}
        <section id="photo-gallery" className="py-24 bg-[#F8F9FD] border-b border-[#16143E]/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4E0DBA] mb-3 font-display">
                <span className="w-4 h-px bg-[#4E0DBA]" /> Behind The Scenes <span className="w-4 h-px bg-[#4E0DBA]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight font-display mb-4">
                Field Operations & Infrastructure Gallery
              </h2>
              <p className="text-[#16143E]/65 text-base sm:text-lg leading-relaxed">
                Take an inside look at Broadnet in action: our private optical fiber trunk line deployments, clean conduit cabling benchmarks, and certified equipment testing lab in Avadi.
              </p>
            </div>

            {/* 6-Frame Responsive Photo Showcase Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {OPERATIONS_GALLERY.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="rounded-3xl bg-white border border-[#16143E]/10 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#4E0DBA]/40 transition-all duration-300 flex flex-col justify-between group"
                  >
                    {/* Visual Photo Container / Drop-in Image Frame */}
                    <div className="relative aspect-[16/10] bg-gradient-to-br from-[#16143E] via-[#211B54] to-[#120F2E] overflow-hidden flex flex-col items-center justify-center p-6 text-center border-b border-[#16143E]/8">
                      {/* Ambient grid texture */}
                      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-10 [background-size:18px_18px]" />

                      {/* Icon & Placeholder Art */}
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 shadow-lg"
                        style={{ background: `${item.color}25`, color: item.color, border: `1px solid ${item.color}40` }}
                      >
                        <Icon size={26} />
                      </div>

                      <span className="text-[11px] font-bold uppercase tracking-wider text-white/90 font-display">
                        {item.category}
                      </span>
                      <span className="text-[10px] text-white/50">{item.location}</span>

                      {/* Top Corner Badges */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-[10px] font-bold text-white border border-white/15">
                        {item.tag}
                      </div>

                      {/* Image slot identifier label */}
                      <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[9px] font-mono text-white/50 flex items-center gap-1">
                        <UploadCloud size={10} /> Image: {item.imageSrc}
                      </div>
                    </div>

                    {/* Card Description */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-[#16143E] font-display mb-2 group-hover:text-[#4E0DBA] transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#16143E]/65 leading-relaxed font-body">
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-[#16143E]/8 flex items-center justify-between text-xs font-semibold text-[#4E0DBA]">
                        <span>Broadnet Avadi Fleet</span>
                        <CheckCircle2 size={15} className="text-emerald-500" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. In-House Certified Engineering & Technical Leadership */}
        <section className="py-24 bg-white text-[#16143E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF1313] mb-3 font-display">
                <span className="w-4 h-px bg-[#EF1313]" /> Technical Personnel <span className="w-4 h-px bg-[#EF1313]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight font-display mb-4">
                The Certified Specialists Behind Your Systems
              </h2>
              <p className="text-[#16143E]/65 text-base sm:text-lg leading-relaxed">
                We believe security and optical networks require trained engineers, not subcontracted labor. Meet the in-house specialists handling your site survey, installation, and AMC maintenance.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM_MEMBERS.map((member) => (
                <div
                  key={member.role}
                  className="rounded-3xl bg-[#F8F9FD] border border-[#16143E]/10 p-6 flex flex-col justify-between hover:border-[#4E0DBA]/40 hover:shadow-xl transition-all duration-300 group"
                >
                  <div>
                    {/* Portrait Photo Container / Drop-in Image Frame */}
                    <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-[#16143E] to-[#2B236E] overflow-hidden mb-5 flex flex-col items-center justify-center p-4 text-center border border-[#16143E]/10">
                      <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/80 mb-2 group-hover:scale-110 transition-transform">
                        <Users size={28} />
                      </div>
                      <span className="text-[11px] font-bold text-white font-display">
                        {member.name}
                      </span>
                      <span className="text-[10px] text-white/50">{member.experience}</span>

                      {/* Image path guide */}
                      <div className="absolute bottom-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[8.5px] font-mono text-white/50">
                        {member.imageSrc}
                      </div>
                    </div>

                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#EF1313]/10 text-[#EF1313] border border-[#EF1313]/20 mb-2">
                      {member.badge}
                    </span>

                    <h3 className="text-base font-bold text-[#16143E] font-display mb-1.5 leading-snug">
                      {member.role}
                    </h3>
                    <p className="text-xs text-[#16143E]/65 leading-relaxed font-body">
                      {member.specialty}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#16143E]/8 flex items-center justify-between text-[11px] text-[#16143E]/50">
                    <span>Avadi Operations</span>
                    <BadgeCheck size={14} className="text-[#4E0DBA]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Brand Authorizations & Certificate Wall (Drop-in Ready) */}
        <section className="py-20 bg-[#16143E] text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00C2FF] mb-3 font-display">
                <span className="w-4 h-px bg-[#00C2FF]" /> Official Brand Credentials <span className="w-4 h-px bg-[#00C2FF]" />
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display mb-4">
                Authorized Manufacturer Certifications
              </h2>
              <p className="text-white/65 text-base leading-relaxed">
                100% genuine equipment with official manufacturer replacement warranties. We are certified direct installation and service partners for world-leading security and networking brands.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CERTIFICATE_SLOTS.map((cert) => (
                <div
                  key={cert.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 flex flex-col justify-between hover:border-[#00C2FF]/50 hover:bg-white/[0.07] transition-all group"
                >
                  <div>
                    {/* Certificate Official Brand & Credential Frame */}
                    <div className="relative aspect-[4/3] rounded-xl bg-gradient-to-b from-white/[0.08] to-black/50 border border-white/12 overflow-hidden mb-4 flex flex-col items-center justify-center p-4 text-center group-hover:border-[#00C2FF]/40 transition-colors">
                      <div className="mb-2.5 p-2 rounded-lg bg-black/40 border border-white/10 shadow-xs flex items-center justify-center">
                        <PartnerLogo brand={cert.brand} variant="white" className="h-6 w-auto max-w-[130px]" />
                      </div>
                      <span className="text-xs font-bold text-white font-display leading-tight">
                        {cert.credential}
                      </span>
                      <span className="text-[10px] text-white/60 mt-1">{cert.partner}</span>

                      <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-emerald-500/20 text-[9px] font-bold text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                        <BadgeCheck size={10} /> Verified
                      </div>
                    </div>

                    <h3 className="text-sm font-bold text-white font-display mb-1.5">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-white/60 leading-relaxed font-body">
                      {cert.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/8 flex items-center justify-between text-[11px] text-emerald-400 font-semibold">
                    <span>Verified Partner</span>
                    <BadgeCheck size={14} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Milestones Timeline & Brand Partners */}
        <MilestonesSection />
        <BrandPartnersSection />

        {/* 7. Our Principles & Workmanship Standards */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4E0DBA] mb-3 font-display">
                <span className="w-4 h-px bg-[#4E0DBA]" /> Workmanship Standard <span className="w-4 h-px bg-[#4E0DBA]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] font-display mb-4">
                Why Property Owners Choose Us
              </h2>
              <p className="text-[#16143E]/65 text-base sm:text-lg leading-relaxed">
                Four engineering commitments that define every Broadnet fiber internet and electronic security installation across Chennai:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {VALUES.map((v, i) => (
                <div
                  key={v.title}
                  className="flex gap-5 p-7 rounded-3xl bg-[#F8F9FD] border border-[#16143E]/8 hover:border-[#4E0DBA]/35 transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#4E0DBA]/10 text-[#4E0DBA] flex items-center justify-center flex-shrink-0 font-bold font-display text-base group-hover:bg-[#4E0DBA] group-hover:text-white transition-colors">
                    0{i + 1}
                  </div>
                  <div>
                    <h3 className="text-[#16143E] font-bold text-lg mb-2 font-display">{v.title}</h3>
                    <p className="text-[#16143E]/65 text-sm leading-relaxed font-body">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Direct Service Cross-Link Strip */}
        <section className="py-16 bg-[#F8F9FD] border-t border-[#16143E]/8 text-[#16143E]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#4E0DBA] font-display">
                Engineered In Avadi
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#16143E] mt-1 font-display">
                Ready to Upgrade Your Connectivity or Security?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <Link
                href="/internet"
                className="p-6 rounded-2xl bg-white border border-[#16143E]/10 hover:border-[#4E0DBA]/40 shadow-sm hover:shadow-md transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#4E0DBA]/10 text-[#4E0DBA] flex items-center justify-center flex-shrink-0 group-hover:bg-[#4E0DBA] group-hover:text-white transition-colors">
                    <Wifi size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#16143E] font-display">Fiber Internet Plans</h3>
                    <p className="text-xs text-[#16143E]/60">Symmetric speeds from ₹499/mo</p>
                  </div>
                </div>
                <ArrowRight size={16} className="text-[#4E0DBA] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/security"
                className="p-6 rounded-2xl bg-white border border-[#16143E]/10 hover:border-[#EF1313]/40 shadow-sm hover:shadow-md transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#EF1313]/10 text-[#EF1313] flex items-center justify-center flex-shrink-0 group-hover:bg-[#EF1313] group-hover:text-white transition-colors">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#16143E] font-display">Security Solutions</h3>
                    <p className="text-xs text-[#16143E]/60">CCTV, Video Door Phones & Access Control</p>
                  </div>
                </div>
                <ArrowRight size={16} className="text-[#EF1313] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* 9. Enquiry Section */}
        <EnquirySection />
      </main>
      <Footer />
    </>
  );
}
