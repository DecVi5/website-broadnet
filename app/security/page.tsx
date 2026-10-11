import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SecurityFinder from "@/components/SecurityFinder";
import EnquirySection from "@/components/EnquirySection";
import Breadcrumbs from "@/components/Breadcrumbs";
import HardwareGallery from "@/components/HardwareGallery";
import {
  Shield,
  Camera,
  Lock,
  Zap,
  Radio,
  AlertTriangle,
  BadgeCheck,
  ArrowRight,
  Clock,
  Wrench,
  CheckCircle2,
  Building,
  Phone,
  MessageCircle,
  Wifi,
  Home,
  Store,
  Layers,
  Fingerprint,
  Eye,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Electronic Security & CCTV Surveillance in Avadi, Chennai | Broadnet",
  description:
    "Official CP PLUS & Hikvision partner for CCTV surveillance, smart video door phones, eSSL biometric access control, and perimeter alarms in Avadi. Complete packages with no upper ceiling. 2-hour technician dispatch.",
  keywords: [
    "CCTV installation Avadi",
    "Hikvision dealer Chennai",
    "CP PLUS camera Avadi",
    "biometric access control Avadi",
    "video door phone installation",
    "perimeter intrusion alarm Chennai",
    "security camera price Avadi",
    "electronic security Avadi",
  ],
  alternates: {
    canonical: "https://www.broadnet.in/security",
  },
  openGraph: {
    title: "Electronic Security & Surveillance Systems in Avadi | Broadnet",
    description:
      "Certified Hikvision & CP PLUS surveillance, smart video door phones, and biometric access control with 2-hour technician dispatch in Avadi.",
    url: "https://www.broadnet.in/security",
  },
};

const WHAT_IS_IT_POINTS = [
  {
    icon: Camera,
    title: "HD & 4K CCTV Video Surveillance",
    desc: "CP PLUS & Hikvision optical systems with ColorVu night vision, continuous surveillance NVR recording, and mobile streaming.",
  },
  {
    icon: Zap,
    title: "Smart Video Door Intercoms",
    desc: "7-inch color touch consoles with all-weather outdoor doorbells and remote electronic gate latch release capabilities.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Access & Time-Attendance",
    desc: "eSSL AI contactless face recognition, optical fingerprint readers, 600lbs EM locks, and automated payroll software.",
  },
  {
    icon: AlertTriangle,
    title: "Active Perimeter & Intrusion Alarms",
    desc: "Compound wall laser photo-beams, pet-immune motion sensors, 110dB acoustic sirens, and cellular GSM auto-dialers.",
  },
];

const WHO_IS_IT_FOR = [
  {
    icon: Home,
    title: "Independent Villas & Residences",
    tag: "Residential",
    desc: "Complete perimeter cameras, video door phones for doorstep safety, and compound wall laser trip alarms.",
    benefits: ["See callers before opening doors", "24/7 ColorVu night vision", "Emergency phone call on wall breach"],
  },
  {
    icon: Building,
    title: "Apartment Complexes & RWAs",
    tag: "Societies",
    desc: "Centralized NVR surveillance racks, multi-apartment intercom risers, and RFID automated boom barriers.",
    benefits: ["Guard booth direct intercom", "Multi-flat video door networks", "Quarterly preventive maintenance AMC"],
  },
  {
    icon: Store,
    title: "Retail Shops & Commercial Showrooms",
    tag: "Commercial",
    desc: "High-resolution cash counter cameras, rolling shutter intrusion sensors, and employee attendance terminals.",
    benefits: ["Billing counter zoom focus", "Rolling shutter breach alarms", "Automated monthly payroll reports"],
  },
  {
    icon: Layers,
    title: "Factories & Industrial Tech Parks",
    tag: "Industrial",
    desc: "Optical fiber mesh backhauls, 360° PTZ tracking domes, motorized flap turnstiles, and quad-beam laser perimeter grids.",
    benefits: ["No upper ceiling camera scaling", "Worker shift attendance sync", "Enterprise central monitoring integration"],
  },
];

const HARDWARE_GALLERY_ITEMS = [
  {
    title: "CP PLUS / Hikvision 4K Dome Camera",
    category: "CCTV Surveillance",
    description: "Wide-angle indoor and retail dome camera with built-in audio microphone and 30m smart infrared.",
    specs: ["1080p to 4K Ultra HD", "Built-In Audio Mic", "Vandal-Resistant Housing"],
    status: "In Stock",
  },
  {
    title: "7-Inch Smart Video Door Console",
    category: "Door Intercom",
    description: "Capacitive color touchscreen console with visitor snapshot logging and remote gate latch release.",
    specs: ["7-Inch High-Clarity Screen", "Two-Way Audio Talk-Back", "Electric Lock Relay Output"],
    status: "Ready Stock",
  },
  {
    title: "eSSL AI Face & Fingerprint Terminal",
    category: "Access Control",
    description: "Sub-second 0.2s contactless facial recognition scanner with anti-spoofing dual infrared cameras.",
    specs: ["0.2s Verification Speed", "3,000 Face Profile Memory", "Automated Payroll Sync"],
    status: "Ready Stock",
  },
  {
    title: "Compound Wall Dual Laser Beam Pillars",
    category: "Perimeter Defense",
    description: "Photo-electric laser tripwire sensors creating an invisible perimeter line along compound parapets.",
    specs: ["40m to 100m Laser Span", "IP65 Weatherproof Enclosure", "Zero Pet False Alarms"],
    status: "In Stock",
  },
  {
    title: "600 lbs Heavy-Duty Magnetic Lock",
    category: "Access Hardware",
    description: "Industrial electromagnetic latch with frameless glass U-brackets and power battery backup.",
    specs: ["600 lbs (280 kg) Holding Force", "Fail-Safe Fire Release", "Glass & Wood Door Brackets"],
    status: "Ready Stock",
  },
  {
    title: "16-Channel Surveillance NVR Rack",
    category: "Storage & Servers",
    description: "Central network video recording hub with multi-terabyte surveillance HDDs and gigabit POE switch.",
    specs: ["Up to 32TB Hard Disk Space", "Continuous 30-Day Video Loop", "Encrypted Cloud Sync"],
    status: "Standard SLA",
  },
];

const DOMAINS = [
  {
    icon: Camera,
    title: "HD & 4K CCTV Surveillance Systems",
    desc: "Complete IP & HD camera setups from CP PLUS and Hikvision with ColorVu night vision, NVR recording loops, and zero-latency smartphone remote monitoring.",
    badge: "CP PLUS CSE • Hikvision HCSA",
    startingPrice: "From ₹1,399 / Cam",
    ceilingNote: "No Upper Ceiling (16, 32, 64+ Channel Systems)",
    features: [
      "1080p to 4K Ultra-HD resolution with color night vision",
      "AI human & vehicle detection eliminating false alarms",
      "Concealed conduit piping protecting building aesthetics",
      "Surveillance-grade WD Purple / Seagate SkyHawk storage",
    ],
    pageUrl: "/security/cameras",
    ctaText: "Explore Camera Packages",
    color: "#EF1313",
  },
  {
    icon: Zap,
    title: "Smart Video Door Phones (VDP)",
    desc: "HD touchscreen door intercoms allowing you to see, speak with, and remotely unlock front gates for courier agents or visitors without opening the door.",
    badge: "Home & Villa Security",
    startingPrice: "From ₹3,999",
    ceilingNote: "Scalable for Multi-Apartment Complexes",
    features: [
      "7-Inch capacitive touchscreen indoor display panel",
      "Wide-angle infrared night vision outdoor doorbell camera",
      "One-touch electronic gate latch release from screen or phone",
      "Automatic visitor snapshot logging with photo memory",
    ],
    pageUrl: "/security/door-phones",
    ctaText: "Explore Video Door Phones",
    color: "#4E0DBA",
  },
  {
    icon: Lock,
    title: "eSSL Biometric Access Control & Attendance",
    desc: "Contactless facial recognition and optical fingerprint door locks with automated cloud attendance software for offices, clinics, schools, and factories.",
    badge: "eSSL Authorized Partner",
    startingPrice: "From ₹4,500",
    ceilingNote: "Enterprise Multi-Door & Turnstile Deployments",
    features: [
      "Sub-second (0.2s) contactless facial recognition & fingerprint",
      "Heavy-duty 600lbs electromagnetic (EM) door latch release",
      "Automated Excel & payroll attendance report generation",
      "Emergency battery backup maintaining security during blackouts",
    ],
    pageUrl: "/security/access-control",
    ctaText: "Explore Biometric Systems",
    color: "#4E0DBA",
  },
  {
    icon: AlertTriangle,
    title: "Perimeter Alarms & Intrusion Detection",
    desc: "Active boundary defense with compound wall laser trip beams, passive infrared sensors, loud 110dB sirens, and automated GSM phone calls upon breach.",
    badge: "Active Defense",
    startingPrice: "From ₹6,999",
    ceilingNote: "Multi-Zone Perimeter Laser Defense",
    features: [
      "Dual photo-electric laser trip beams for boundary walls",
      "Piercing 110dB outdoor siren scaring off intruders instantly",
      "Cellular GSM dialer automatically calling 5 mobile numbers",
      "Pet-immune motion sensors preventing false alarms",
    ],
    pageUrl: "/security/intrusion-alarms",
    ctaText: "Explore Intrusion Alarms",
    color: "#EF1313",
  },
  {
    icon: Radio,
    title: "Multi-Station Intercom & EPABX Systems",
    desc: "Dedicated internal communication infrastructure connecting security guard booths, individual flats, and management offices without recurring call costs.",
    badge: "Apartments & Societies",
    startingPrice: "Custom Society Quote",
    ceilingNote: "8 to 500+ Flats Network",
    features: [
      "Connects 8 to 500+ flats with dedicated security intercom lines",
      "Guard-to-resident visitor verification protocol",
      "Zero monthly subscription fees or external telephony charges",
      "Durable wiring and lightning surge protection",
    ],
    pageUrl: "/contact?service=Intercom+System",
    ctaText: "Request Society Intercom Survey",
    color: "#4E0DBA",
  },
  {
    icon: Shield,
    title: "RFID Boom Barriers & Flap Turnstiles",
    desc: "Automated vehicular access with RFID / ANPR license plate integration and pedestrian flap barriers for gated communities, factories, and corporate tech parks.",
    badge: "Authorized Dealer",
    startingPrice: "Custom Commercial Quote",
    ceilingNote: "High-Frequency Automated Barriers",
    features: [
      "Heavy-duty motorized barrier arms with safety edge sensors",
      "Automatic fast RFID tag vehicle entry with anti-smash loop",
      "Pedestrian optical flap barriers with access card integration",
      "Manual clutch override in case of complete power failure",
    ],
    pageUrl: "/contact?service=Boom+%26+Flap+Barriers",
    ctaText: "Request Barrier Consultation",
    color: "#EF1313",
  },
];

const TRUST_PILLARS = [
  {
    icon: BadgeCheck,
    title: "Official Brand Authorization",
    desc: "We are direct certified partners of CP PLUS, Hikvision, and eSSL. 100% genuine equipment with official 2-year on-site replacement warranty.",
  },
  {
    icon: Clock,
    title: "< 2-Hour Local Technician SLA",
    desc: "Our engineering operations hub is physically located right on Fire Station Road in Avadi. We don't make you wait days for a technician.",
  },
  {
    icon: Wrench,
    title: "Concealed Conduit Cabling",
    desc: "We never leave loose, dangling wires. All wiring is routed through heavy-duty concealed PVC conduits to protect building aesthetics.",
  },
  {
    icon: Building,
    title: "From ₹1,399 to Enterprise Scale",
    desc: "Whether you need a single doorbell camera for your villa or a 128-camera industrial mesh for a factory, we deliver without upper ceiling limits.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <Header activePage="Security" />
      <main>
        {/* 1. Hero Section (Heading + Details on Left, Placeholder + Use Case on Right) */}
        <section className="relative pt-32 pb-20 sm:pb-28 bg-white text-[#16143E] overflow-hidden border-b border-[#16143E]/5">
          {/* Subtle ambient glow & grid pattern */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage: "radial-gradient(circle, #4E0DBA 1.5px, transparent 1.5px)",
                backgroundSize: "36px 36px",
              }}
            />
            <div className="absolute top-1/4 -right-20 w-[550px] h-[450px] bg-red-100/40 blur-[140px] rounded-full" />
            <div className="absolute bottom-10 left-10 w-[500px] h-[400px] bg-purple-100/50 blur-[150px] rounded-full" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb Navigation */}
            <div className="mb-6">
              <Breadcrumbs
                items={[{ label: "Security Solutions" }]}
                variant="light"
              />
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2.5 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold border border-[#EF1313]/25 text-[#EF1313] bg-[#EF1313]/10 shadow-2xs">
                    <BadgeCheck size={14} className="text-[#EF1313] flex-shrink-0" />
                    CP PLUS • Hikvision • eSSL Authorized
                  </span>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-100/90 text-[#16143E]/80 border border-slate-200/80 shadow-2xs">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    &lt; 2-Hour Local Technician Dispatch
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#16143E] leading-[1.12] mb-5 font-display tracking-tight">
                  Intelligent Security.
                  <br />
                  <span className="text-gradient">Zero Compromise.</span>
                </h1>

                <p className="text-[#16143E]/70 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl font-body">
                  Official CP PLUS, Hikvision, and eSSL certified electronic security solutions engineered for residential villas, gated communities, commercial retail, and industrial facilities across Avadi &amp; Chennai.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "CCTV, Door Phones, Biometrics & Alarms",
                    "No upper ceiling on enterprise scaling",
                    "100% Concealed conduit piping",
                    "2-Year replacement warranty & local SLA",
                  ].map((feat) => (
                    <div
                      key={feat}
                      className="flex items-center gap-2.5 text-sm font-medium text-[#16143E]/85 bg-slate-50/80 border border-slate-200/70 rounded-xl px-3.5 py-2.5 shadow-2xs hover:border-[#EF1313]/30 hover:bg-white transition-all"
                    >
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4">
                  <a href="#solutions-catalog" className="btn-crimson flex items-center gap-2 text-sm font-bold shadow-lg shadow-[#EF1313]/25 hover:shadow-xl hover:shadow-[#EF1313]/35 transition-all">
                    <span>Explore Solutions</span>
                    <ArrowRight size={15} />
                  </a>
                  <a
                    href="https://wa.me/918681888111?text=Hi%20Broadnet,%20I%20am%20looking%20for%20security%20solutions%20in%20Avadi."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-sm transition-all shadow-md shadow-emerald-500/20 hover:shadow-lg"
                  >
                    <MessageCircle size={16} className="fill-white" />
                    <span>WhatsApp Quote</span>
                  </a>
                  <a
                    href="tel:+918681888111"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-50 hover:bg-slate-100 text-[#16143E] font-semibold text-sm transition-all border border-slate-200 shadow-2xs hover:border-slate-300"
                  >
                    <Phone size={15} className="text-[#EF1313]" />
                    <span>Call: 86818 88111</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Card + Hardware Placeholder */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="relative bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(22,20,62,0.08)] overflow-hidden ring-1 ring-slate-900/[0.04]">
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-[#EF1313]/10 to-[#4E0DBA]/10 blur-3xl rounded-full pointer-events-none" />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#EF1313]">
                          Full Security Stack
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/80 inline-flex items-center gap-1.5 shadow-2xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Complete Portfolio
                        </span>
                      </div>

                      {/* Hardware Asset Placeholder */}
                      <div className="relative h-56 sm:h-64 w-full flex flex-col items-center justify-center my-3 bg-gradient-to-b from-slate-50/90 to-slate-100/60 rounded-2xl border-2 border-dashed border-slate-200/90 p-6 text-center group transition-all duration-300 hover:border-[#EF1313]/40 hover:bg-slate-50">
                        {/* Technical Corner Brackets / Reticle */}
                        <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-slate-300 group-hover:border-[#EF1313]/60 transition-colors pointer-events-none" />
                        <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-slate-300 group-hover:border-[#EF1313]/60 transition-colors pointer-events-none" />
                        <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-slate-300 group-hover:border-[#EF1313]/60 transition-colors pointer-events-none" />
                        <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-slate-300 group-hover:border-[#EF1313]/60 transition-colors pointer-events-none" />

                        <div className="relative mb-3.5">
                          <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200/80 shadow-md shadow-slate-200/60 flex items-center justify-center text-[#EF1313] group-hover:scale-105 group-hover:shadow-lg transition-transform">
                            <Shield size={30} strokeWidth={1.8} className="text-[#EF1313]" />
                          </div>
                          <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#EF1313]" />
                          </span>
                        </div>

                        <div className="text-sm font-bold text-[#16143E] font-display">
                          Integrated Security Hub
                        </div>
                        <p className="text-xs text-[#16143E]/55 mt-1 font-medium max-w-[240px]">
                          CCTV Surveillance, Video Door Phones, Biometrics &amp; Perimeter Laser Grids
                        </p>

                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-[11px] font-mono text-[#16143E]/70 mt-3 shadow-2xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#EF1313]" />
                          ELV Infrastructure Placeholder
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-100 mb-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-[#16143E] font-bold text-base">End-to-End ELV Systems</div>
                            <p className="text-xs text-[#16143E]/55">Certified In-House Technicians</p>
                          </div>
                          <span className="text-sm font-bold text-[#EF1313] bg-red-50 border border-red-200/90 px-3 py-1.5 rounded-lg shadow-2xs">
                            Starts ₹1,399
                          </span>
                        </div>
                      </div>

                      {/* Prominent Use Case Tag */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#16143E]/50">
                          Primary Use Case
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-[#16143E] border border-slate-200/80 shadow-2xs">
                          <Building size={12} className="text-[#EF1313]" />
                          Residential &amp; Commercial Portfolios
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl px-4 py-3 shadow-[0_12px_30px_rgba(22,20,62,0.12)] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#EF1313]/10 border border-[#EF1313]/20 flex items-center justify-center text-[#EF1313] flex-shrink-0">
                      <Shield size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#16143E]">2,500+ Deployments</div>
                      <div className="text-[11px] text-[#16143E]/55">Across Avadi &amp; Chennai</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. "What is it" Section */}
        <section className="py-20 sm:py-24 bg-white text-[#16143E] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF1313] mb-3 font-display">
                <span className="w-4 h-px bg-[#EF1313]" /> Unified Electronic Defense <span className="w-4 h-px bg-[#EF1313]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight font-display mb-4">
                What is Broadnet Electronic Security?
              </h2>
              <p className="text-[#16143E]/65 text-base sm:text-lg leading-relaxed">
                We deliver complete physical and digital surveillance infrastructure engineered into four synchronized domains, backed by our dedicated optical fiber backhauls:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
              {WHAT_IS_IT_POINTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-7 rounded-3xl bg-[#F8F9FD] border border-[#16143E]/10 hover:border-[#EF1313]/35 transition-all duration-300 hover:shadow-xl hover:shadow-[#16143E]/5 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-[#EF1313]/10 text-[#EF1313] flex items-center justify-center mb-5 group-hover:bg-[#EF1313] group-hover:text-white transition-colors shadow-sm">
                        <Icon size={22} />
                      </div>
                      <h3 className="text-lg font-bold text-[#16143E] mb-3 font-display">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-[#16143E]/65 leading-relaxed font-body">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. "Who is it for" Section */}
        <section className="py-20 sm:py-24 bg-[#F8F9FD] border-t border-[#16143E]/8 text-[#16143E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4E0DBA] mb-3 font-display">
                <span className="w-4 h-px bg-[#4E0DBA]" /> Sectors & Premise Types <span className="w-4 h-px bg-[#4E0DBA]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight font-display mb-4">
                Who Are Our Security Solutions Designed For?
              </h2>
              <p className="text-[#16143E]/65 text-base sm:text-lg leading-relaxed">
                Whether you are securing a family villa, managing an apartment society, or running a manufacturing facility, our systems scale seamlessly:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
              {WHO_IS_IT_FOR.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-7 rounded-3xl bg-white border border-[#16143E]/10 hover:border-[#4E0DBA]/35 transition-all duration-300 hover:shadow-xl hover:shadow-[#16143E]/5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-11 h-11 rounded-xl bg-[#4E0DBA]/10 text-[#4E0DBA] flex items-center justify-center">
                          <Icon size={20} />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#4E0DBA] bg-[#4E0DBA]/10 px-2.5 py-0.5 rounded-md">
                          {item.tag}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-[#16143E] mb-2 font-display">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-[#16143E]/65 leading-relaxed mb-6 font-body">{item.desc}</p>
                    </div>

                    <div className="pt-4 border-t border-[#16143E]/8 space-y-2">
                      {item.benefits.map((b) => (
                        <div key={b} className="flex items-center gap-2 text-xs text-[#16143E]/80">
                          <CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. "Images" Section (Hardware & Ecosystem Gallery) */}
        <HardwareGallery
          sectionSubtitle="Hardware Showcase"
          sectionTitle="Certified Hardware & System Components"
          sectionDescription="View certified CP PLUS, Hikvision, and eSSL hardware components engineered for 24/7 reliability and tamper resistance."
          items={HARDWARE_GALLERY_ITEMS}
          theme="light"
        />

        {/* Interactive "Find Your Perfect Solution" Quiz/Recommendation */}
        <SecurityFinder />

        {/* 5. "Price" & Detailed Domain Showcase Grid */}
        <section id="solutions-catalog" className="py-24 bg-[#0B091E] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF1313] mb-3 font-display">
                <span className="w-4 h-px bg-[#EF1313]" /> Packages & Pricing Portals <span className="w-4 h-px bg-[#EF1313]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display mb-4">
                Full-Spectrum Electronic Security Packages
              </h2>
              <p className="text-white/65 text-base sm:text-lg leading-relaxed">
                Click into any specific security domain below to view complete technical specifications, camera kits, and customized package pricing with <strong>no upper ceiling</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {DOMAINS.map((domain) => {
                const Icon = domain.icon;
                return (
                  <div
                    key={domain.title}
                    className="p-7 rounded-3xl bg-[#16143E]/70 border border-white/10 flex flex-col justify-between hover:border-[#EF1313]/35 transition-all duration-300 hover:shadow-xl hover:shadow-black/30 group"
                  >
                    <div>
                      {/* Header & Badges */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="text-[11px] font-bold text-[#A78BFA] uppercase tracking-wider">
                          {domain.badge}
                        </span>
                        <span className="text-xs font-bold text-[#EF1313] bg-[#EF1313]/10 border border-[#EF1313]/25 px-2.5 py-0.5 rounded-md">
                          {domain.startingPrice}
                        </span>
                      </div>

                      <div className="flex items-start gap-3.5 mb-4">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${domain.color}25`, color: domain.color }}
                        >
                          <Icon size={20} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white font-display leading-snug group-hover:text-[#EF1313] transition-colors">
                            {domain.title}
                          </h3>
                          <span className="text-[11px] text-white/50 block mt-0.5">{domain.ceilingNote}</span>
                        </div>
                      </div>

                      <p className="text-white/65 text-xs sm:text-sm leading-relaxed mb-6">
                        {domain.desc}
                      </p>

                      <ul className="space-y-2.5 mb-7 pt-4 border-t border-white/10">
                        {domain.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2 text-xs text-white/80 leading-snug">
                            <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <Link
                        href={domain.pageUrl}
                        className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-white/10 hover:bg-[#EF1313] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                      >
                        <span>{domain.ctaText}</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Broadnet Trust Pillars */}
        <section className="py-20 bg-[#F8F9FD] border-t border-[#16143E]/8 text-[#16143E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4E0DBA] mb-3 font-display">
                <span className="w-4 h-px bg-[#4E0DBA]" /> The Broadnet Assurance <span className="w-4 h-px bg-[#4E0DBA]" />
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#16143E] font-display mb-4">
                Why Property Owners Choose Us For Security in Avadi
              </h2>
              <p className="text-[#16143E]/65 text-base leading-relaxed">
                We combine the engineering reliability of an integrated ISP with certified electronic security specialists:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TRUST_PILLARS.map((tp) => {
                const Icon = tp.icon;
                return (
                  <div key={tp.title} className="p-7 rounded-3xl bg-white border border-[#16143E]/8 shadow-sm">
                    <div className="w-12 h-12 rounded-2xl bg-[#EF1313]/10 text-[#EF1313] flex items-center justify-center mb-5">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-bold text-base text-[#16143E] mb-2 font-display">{tp.title}</h3>
                    <p className="text-xs text-[#16143E]/65 leading-relaxed font-body">{tp.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* High-Speed Fiber Backbone Cross-Link Banner */}
        <section className="py-14 bg-white border-t border-[#16143E]/8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="p-8 rounded-3xl bg-gradient-to-r from-[#16143E] via-[#1D1A52] to-[#252060] text-white border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#00C2FF]/15 text-[#00C2FF] flex items-center justify-center flex-shrink-0 mt-1">
                  <Wifi size={24} />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#00C2FF] mb-1 font-display">
                    Integrated ISP Backbone
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    Need High-Speed Optical Fiber for Your Security Cameras?
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 mt-1.5 max-w-xl font-body leading-relaxed">
                    Broadnet operates 100+ km of dedicated fiber in Avadi. Ensure zero-buffering 24/7 CCTV mobile feeds, instant cloud sync, and single-window technician support.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 flex-shrink-0 w-full md:w-auto">
                <Link
                  href="/internet"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#00C2FF] hover:bg-[#00a8dd] text-[#16143E] font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Explore Fiber Plans</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/#coverage"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-colors text-center"
                >
                  Check Coverage
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 6. "Enquiry" Section */}
        <EnquirySection initialType="security" />
      </main>
      <Footer />
    </>
  );
}
