import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquirySection from "@/components/EnquirySection";
import Breadcrumbs from "@/components/Breadcrumbs";
import HardwareGallery from "@/components/HardwareGallery";
import RelatedSolutions from "@/components/RelatedSolutions";
import {
  Fingerprint,
  CheckCircle2,
  Users,
  ArrowRight,
  Phone,
  MessageCircle,
  BadgeCheck,
  FileSpreadsheet,
  Lock,
  Building,
  Layers,
  Store,
  Zap,
  HelpCircle,
  Star,
  Quote,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Biometric Time Attendance Systems in Chennai & Avadi | eSSL Authorised Partner",
  description:
    "Authorised eSSL biometric time attendance installations across Chennai and Avadi. Facial recognition, fingerprint readers, cloud attendance software, and automated payroll integration. Call 86818 88111.",
  keywords: [
    "Biometric attendance system Avadi",
    "eSSL biometric Chennai",
    "Fingerprint attendance machine Avadi",
    "Face recognition attendance Chennai",
    "Biometric payroll software Chennai",
  ],
};

const WHAT_IS_IT_POINTS = [
  {
    icon: Fingerprint,
    title: "Dual Biometric Sensor Technology",
    desc: "Sub-second optical fingerprint scanning and AI infrared facial recognition with 3D depth geometry preventing photo spoofing.",
  },
  {
    icon: FileSpreadsheet,
    title: "Automated Payroll & Shift Software",
    desc: "Cloud and desktop software calculating shift times, overtime hours, late penalties, and one-click monthly Excel/CSV exports.",
  },
  {
    icon: Users,
    title: "Real-Time Cloud & Multi-Branch Sync",
    desc: "Centralize employee check-ins across multiple branches in Chennai and Avadi with real-time mobile app oversight for HR managers.",
  },
  {
    icon: Zap,
    title: "Battery Backup & Access Relay",
    desc: "Dedicated internal rechargeable battery backup sustaining operations during blackouts, with optional relay output for door locking.",
  },
];

const WHO_IS_IT_FOR = [
  {
    icon: Building,
    title: "Corporate Offices & IT Hubs",
    tag: "Commercial",
    desc: "Eliminate buddy punching, automate leave calculations, and provide employees seamless contactless facial entry.",
    benefits: ["Touchless AI face recognition", "One-click payroll spreadsheet export", "Automated employee attendance sync"],
  },
  {
    icon: Layers,
    title: "Factories & Manufacturing Plants",
    tag: "Industrial",
    desc: "Track multiple rotational shifts, contractor attendance, and overtime hours across rotating worker schedules with 100% presence authenticity.",
    benefits: ["Shift & overtime calculation", "Rugged dust-resistant hardware", "Battery backup during grid outages"],
  },
  {
    icon: Users,
    title: "Clinics, Hospitals & Labs",
    tag: "Healthcare",
    desc: "Maintain medical-grade hygiene with contactless access into ICU wards, sterile operation rooms, and pharmaceutical stores.",
    benefits: ["Zero-touch hygienic face scan", "Staff shift attendance audit", "Timestamped visitor logs"],
  },
  {
    icon: Store,
    title: "Retail Showrooms & Schools",
    tag: "Institutions",
    desc: "Monitor staff punctuality, prevent payroll leakage, and generate instant attendance reports for administrative reviews.",
    benefits: ["Daily opening/closing audit", "Automated late grace period logs", "Revoke resigned staff access instantly"],
  },
];

const HARDWARE_GALLERY_ITEMS = [
  {
    title: "eSSL AI Face Recognition Terminal",
    category: "Contactless Attendance",
    description: "High-speed AI terminal with live-body spoof detection, 3,000 face capacity, and real-time cloud attendance sync.",
    specs: ["0.2s Contactless Verification", "Anti-Spoofing Dual IR Cameras", "3,000 Face & RFID Card Memory"],
    status: "Ready Stock",
  },
  {
    title: "eSSL Optical Fingerprint Reader",
    category: "Time & Attendance",
    description: "Standalone biometric attendance machine with scratch-resistant optical sensor and USB/LAN log download.",
    specs: ["1,000 Fingerprint Capacity", "100,000 Transaction Logs", "USB & TCP/IP Network Sync"],
    status: "In Stock",
  },
  {
    title: "Desktop & Cloud Payroll Sync Software",
    category: "Software Management",
    description: "Comprehensive employee management software with shift rosters, leave calculations, and automated monthly Excel export.",
    specs: ["One-Click Payroll CSV Export", "Multi-Shift Roster Management", "Live Real-Time Cloud Sync"],
    status: "Included Free",
  },
  {
    title: "Access Control Relay & EM Lock Kit",
    category: "Access Latches",
    description: "600 lbs heavy-duty electromagnetic door lock compatible with glass, wooden, and aluminum office doors.",
    specs: ["600 lbs Holding Force", "Fail-Safe Safety Design", "Glass / Wooden Door Brackets"],
    status: "Ready Stock",
  },
  {
    title: "Motorized Flap Barrier Turnstile",
    category: "Enterprise Access",
    description: "Optical motorized pedestrian turnstiles with integrated face recognition scanners and anti-tailgating sensors for tech parks.",
    specs: ["High-Throughput Pedestrian Flow", "Anti-Tailgating Sensor Matrix", "Fire Alarm Auto-Drop Wings"],
    status: "Custom SLA",
  },
  {
    title: "Heavy-Duty Power Backup Module",
    category: "Power Reliability",
    description: "Continuous 12V rechargeable battery backup ensuring attendance logging never stops during grid power cuts.",
    specs: ["4 to 8 Hour Battery Runtime", "Overload & Surge Protection", "Seamless Online Switching"],
    status: "Standard SLA",
  },
];

const PACKAGES = [
  {
    name: "Standalone Attendance Machine",
    tagline: "Essential attendance logging for clinics, retail shops & small offices",
    price: "₹4,500",
    unit: "standalone device with software",
    badge: "Attendance Only",
    popular: false,
    features: [
      "High-Precision Optical Fingerprint Sensor",
      "RFID Smart Keycard Reader Integration",
      "Up to 1,000 Users & 100,000 Transaction Logs",
      "USB Flash Drive & TCP/IP Network Log Export",
      "Free Desktop Attendance & Shift Management Software",
      "1-Year On-Site Manufacturer Warranty",
    ],
    ctaText: "Order Attendance Terminal",
  },
  {
    name: "Complete Biometric Door Lock Kit",
    tagline: "Secures entry doors with fingerprint verification and magnetic lock",
    price: "₹9,999",
    unit: "reader + lock + backup kit",
    badge: "Most Popular",
    popular: true,
    features: [
      "eSSL Biometric Reader with Door Access Relay",
      "600 lbs Heavy-Duty Electromagnetic (EM) Lock",
      "Stainless Steel Push-to-Exit Switch",
      "Power Supply with Inbuilt Battery Backup",
      "Compatible with Glass, Wooden & Aluminum Doors",
      "Concealed wiring & professional bracket fabrication",
      "2-Year On-Site Hardware Warranty",
    ],
    ctaText: "Book Biometric Lock Kit",
  },
  {
    name: "AI Face Recognition Terminal",
    tagline: "Ultra-fast contactless hygiene scanning for modern corporate offices",
    price: "₹14,500",
    unit: "AI touchless terminal",
    badge: "Contactless AI",
    popular: false,
    features: [
      "Sub-Second (0.2s) Contactless Facial Recognition",
      "Live Person Spoof Detection (prevents photo cheating)",
      "Supports 3,000 Face Profiles & RFID Cards",
      "Cloud Attendance Software with Real-Time Mobile Sync",
      "Automated Excel, CSV & Payroll Software Export",
      "Access control relay output for automatic door release",
      "Priority 2-Hour SLA Local Technician Support",
    ],
    ctaText: "Book Face Scan Terminal",
  },
  {
    name: "Multi-Branch Cloud Enterprise Grid",
    tagline: "Enterprise access management for tech parks, factories & educational campuses",
    price: "Custom Quote",
    unit: "No Upper Ceiling — Any Scale",
    badge: "Enterprise Scale",
    popular: false,
    features: [
      "Centralized Multi-Door Controller Panels",
      "Motorized Optical Flap Barriers & Tripod Turnstiles",
      "Visitor Management Kiosk with QR-code visitor passes",
      "Multi-Branch Cloud Sync with Centralized Dashboard",
      "Integration with Fire Alarm for Emergency Auto-Release",
      "Annual Maintenance Contract (AMC) with quarterly audits",
      "Dedicated technician support within 90 minutes",
    ],
    ctaText: "Request Enterprise Survey",
  },
];

const REVIEWS = [
  {
    quote:
      "Our medical clinic shifted from manual registers to BroadNet's eSSL biometric system. Attendance reports export cleanly and unauthorized access into sensitive pharmacy rooms has been completely eliminated.",
    author: "Dr. A. Meenakshi",
    role: "Chief Medical Director, LifeCare Centre",
    location: "Avadi, Chennai",
    system: "eSSL Face Recognition & EM Lock Setup",
  },
  {
    quote:
      "We run a precision engineering unit in Ambattur Industrial Estate with 60 workers on rotating shifts. BroadNet installed the biometric machine with backup battery. Shift timing and overtime calculation is now 100% accurate.",
    author: "K. Muralidharan",
    role: "Operations Head, Precision Tools",
    location: "Ambattur / Avadi Corridor",
    system: "eSSL Fingerprint Attendance System",
  },
  {
    quote:
      "BroadNet installed electromagnetic locks on our corporate office glass doors with push-to-exit buttons and RFID keycards. Neat bracket mounting and prompt local support whenever we onboard new staff.",
    author: "V. Shweta",
    role: "HR & Facilities Manager",
    location: "TNHB Main Road, Avadi",
    system: "Glass Door Biometric Access Control",
  },
];

const FAQS = [
  {
    q: "Can the biometric attendance machine work during power cuts?",
    a: "Yes! Our machines come with internal rechargeable battery backups or external power supply units that keep the system running for 4 to 8 hours during electrical outages.",
  },
  {
    q: "How does the cloud software sync attendance across multiple branches in Chennai?",
    a: "All eSSL smart terminals connect via your local Wi-Fi or LAN. Punch logs are instantly pushed to a centralized cloud database, allowing HR heads in head office to see real-time attendance across all branches.",
  },
  {
    q: "Can we export attendance data directly into payroll software like Tally or GreytHR?",
    a: "Yes. The provided software includes one-click automated export to Microsoft Excel, CSV, and direct API/file integration with Tally, GreytHR, Keka, and standard payroll engines.",
  },
  {
    q: "Can face recognition be fooled by employee photos on mobile screens?",
    a: "No. Our AI facial recognition terminals feature dual infrared sensors and 3D depth liveliness detection that completely reject 2D photos, videos, or printed masks.",
  },
];

export default function BiometricAttendancePage() {
  return (
    <>
      <Header activePage="Services" />
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
            <div className="absolute top-1/4 -right-20 w-[550px] h-[450px] bg-purple-100/40 blur-[140px] rounded-full" />
            <div className="absolute bottom-10 left-10 w-[500px] h-[400px] bg-red-100/50 blur-[150px] rounded-full" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb Navigation */}
            <div className="mb-6">
              <Breadcrumbs
                items={[
                  { label: "Services", href: "/#services" },
                  { label: "Biometric Time Attendance" },
                ]}
                variant="light"
              />
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Copy & Value Proposition */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2.5 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#4E0DBA]/10 text-[#4E0DBA] border border-[#4E0DBA]/25 shadow-2xs">
                    <BadgeCheck size={14} className="text-[#4E0DBA]" />
                    Official eSSL Authorised Partner
                  </span>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-100/90 text-[#16143E]/80 border border-slate-200/80 shadow-2xs">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    &lt; 2-Hour On-Site Technician Dispatch in Avadi
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#16143E] leading-[1.12] font-display tracking-tight mb-6">
                  Frictionless Attendance.
                  <br />
                  <span className="text-gradient">Biometric Time Attendance &amp; Face Scan.</span>
                </h1>

                <p className="text-[#16143E]/70 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl font-body">
                  Eliminate proxy attendance, automate multi-shift payroll hours, and secure restricted zones with certified eSSL facial recognition, optical fingerprint readers, and cloud management software across Avadi &amp; Chennai.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "0.2s Touchless Face Recognition",
                    "Automated Excel & Payroll Reports",
                    "Battery Backup for Power Outages",
                    "Multi-Branch Cloud Sync Support",
                  ].map((feat) => (
                    <div
                      key={feat}
                      className="flex items-center gap-2.5 text-sm font-medium text-[#16143E]/85 bg-slate-50/80 border border-slate-200/70 rounded-xl px-3.5 py-2.5 shadow-2xs hover:border-[#4E0DBA]/30 hover:bg-white transition-all"
                    >
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#packages"
                    className="btn-crimson flex items-center gap-2 text-sm font-bold shadow-lg shadow-[#EF1313]/25 hover:shadow-xl hover:shadow-[#EF1313]/35 transition-all"
                  >
                    <span>View Attendance Packages</span>
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href="https://wa.me/918681888111?text=Hi%20Broadnet,%20I%20am%20interested%20in%20Biometric%20Time%20Attendance%20systems%20in%20Avadi.%20Please%20share%20pricing."
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

              {/* Right Column: Visual Showcase + Hardware Placeholder */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="relative bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(22,20,62,0.08)] overflow-hidden ring-1 ring-slate-900/[0.04]">
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-[#4E0DBA]/10 to-[#EF1313]/10 blur-3xl rounded-full pointer-events-none" />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#A78BFA]">
                          Time &amp; Attendance
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/80 inline-flex items-center gap-1.5 shadow-2xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          eSSL Certified Tech
                        </span>
                      </div>

                      {/* Hardware Asset Placeholder */}
                      <div className="relative h-56 sm:h-64 w-full flex flex-col items-center justify-center my-3 bg-gradient-to-b from-slate-50/90 to-slate-100/60 rounded-2xl border-2 border-dashed border-slate-200/90 p-6 text-center group transition-all duration-300 hover:border-[#4E0DBA]/40 hover:bg-slate-50">
                        {/* Technical Corner Brackets / Reticle */}
                        <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-slate-300 group-hover:border-[#4E0DBA]/60 transition-colors pointer-events-none" />
                        <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-slate-300 group-hover:border-[#4E0DBA]/60 transition-colors pointer-events-none" />
                        <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-slate-300 group-hover:border-[#4E0DBA]/60 transition-colors pointer-events-none" />
                        <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-slate-300 group-hover:border-[#4E0DBA]/60 transition-colors pointer-events-none" />

                        <div className="relative mb-3.5">
                          <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200/80 shadow-md shadow-slate-200/60 flex items-center justify-center text-[#4E0DBA] group-hover:scale-105 group-hover:shadow-lg transition-transform">
                            <Fingerprint size={30} strokeWidth={1.8} className="text-[#4E0DBA]" />
                          </div>
                          <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4E0DBA]" />
                          </span>
                        </div>

                        <div className="text-sm font-bold text-[#16143E] font-display">
                          eSSL Attendance Console
                        </div>
                        <p className="text-xs text-[#16143E]/55 mt-1 font-medium max-w-[240px]">
                          High-speed optical fingerprint and contactless facial recognition with automated cloud payroll sync
                        </p>

                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-[11px] font-mono text-[#16143E]/70 mt-3 shadow-2xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4E0DBA]" />
                          Time &amp; Attendance Placeholder
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-100 mb-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h2 className="text-[#16143E] font-bold text-lg">eSSL Series</h2>
                            <p className="text-xs text-[#16143E]/55">Standalone &amp; Multi-Branch Systems</p>
                          </div>
                          <span className="text-sm font-bold text-[#EF1313] bg-red-50 border border-red-200/90 px-3 py-1.5 rounded-lg shadow-2xs">
                            Starts ₹4,500
                          </span>
                        </div>
                      </div>

                      {/* Prominent Use Case Tag */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#16143E]/50">
                          Primary Use Case
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-[#16143E] border border-slate-200/80 shadow-2xs">
                          <Building size={12} className="text-[#4E0DBA]" />
                          Offices, Factories &amp; Clinics
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl px-4 py-3 shadow-[0_12px_30px_rgba(22,20,62,0.12)] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <FileSpreadsheet size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#16143E]">Automated Reports</div>
                      <div className="text-[11px] text-[#16143E]/55">One-click monthly payroll sync</div>
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
                <span className="w-4 h-px bg-[#EF1313]" /> System Architecture <span className="w-4 h-px bg-[#EF1313]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight font-display mb-4">
                What is Biometric Time Attendance & Face Recognition?
              </h2>
              <p className="text-[#16143E]/65 text-base sm:text-lg leading-relaxed">
                Biometric time attendance eliminates paper register books and manual Excel calculation errors. It pairs optical fingerprint and contactless facial scanning terminals with automated HR shift calculation software:
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
                <span className="w-4 h-px bg-[#4E0DBA]" /> Workplaces & Sectors <span className="w-4 h-px bg-[#4E0DBA]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight font-display mb-4">
                Who Needs Biometric Time Attendance?
              </h2>
              <p className="text-[#16143E]/65 text-base sm:text-lg leading-relaxed">
                Discover how businesses, industrial plants, hospitals, and educational institutions eliminate wage leakage and track staff hours:
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

        {/* 4. "Images" Section (Hardware & Software Gallery) */}
        <HardwareGallery
          sectionSubtitle="Hardware Showcase"
          sectionTitle="Official eSSL Attendance Terminals & Software"
          sectionDescription="Explore our AI facial recognition terminals, optical fingerprint sensors, and centralized payroll sync software interfaces."
          items={HARDWARE_GALLERY_ITEMS}
          theme="light"
        />

        {/* 5. "Price" Section */}
        <section id="packages" className="py-20 sm:py-28 bg-[#0B091E] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF1313] mb-3 font-display">
                <span className="w-4 h-px bg-[#EF1313]" /> Packages & Pricing <span className="w-4 h-px bg-[#EF1313]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display mb-4">
                Tailored Biometric Solutions For Any Facility
              </h2>
              <p className="text-white/65 text-base sm:text-lg leading-relaxed">
                From standalone clinic attendance machines to multi-building corporate campuses with <strong>no upper ceiling</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PACKAGES.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                    pkg.popular
                      ? "bg-[#16143E] border-2 border-[#EF1313] shadow-2xl shadow-[#EF1313]/20"
                      : "bg-[#120F2E] border border-white/10 hover:border-white/25"
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#EF1313] text-white shadow-md">
                      {pkg.badge}
                    </span>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-[#A78BFA] uppercase tracking-wider">
                        {pkg.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 font-display">{pkg.name}</h3>
                    <p className="text-xs text-white/55 mb-6 leading-relaxed">{pkg.tagline}</p>

                    <div className="mb-6 pb-6 border-b border-white/10">
                      <div className="text-3xl font-bold text-white font-display">{pkg.price}</div>
                      <div className="text-xs text-white/50 mt-1">{pkg.unit}</div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-xs text-white/80 leading-relaxed">
                          <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <a
                      href={`https://wa.me/918681888111?text=${encodeURIComponent(
                        `Hi Broadnet, I am interested in the ${pkg.name} (${pkg.price}) for Biometric Attendance in Avadi. Please share details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full min-h-[44px] px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors ${
                        pkg.popular
                          ? "bg-[#EF1313] hover:bg-[#d60e0e] text-white"
                          : "bg-white/10 hover:bg-white/20 text-white"
                      }`}
                    >
                      <span>{pkg.ctaText}</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-[#F8F9FD] border-t border-[#16143E]/8 text-[#16143E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4E0DBA] mb-3 font-display">
                <span className="w-4 h-px bg-[#4E0DBA]" /> Verified Commercial Reviews <span className="w-4 h-px bg-[#4E0DBA]" />
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#16143E] font-display mb-4">
                Trusted by Businesses & Facilities Across Avadi
              </h2>
              <div className="flex items-center justify-center gap-1 text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#F59E0B]" />
                ))}
                <span className="text-xs font-bold text-[#16143E] ml-2">4.9 / 5.0 Rating</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {REVIEWS.map((rev) => (
                <div
                  key={rev.author}
                  className="p-7 rounded-3xl bg-white border border-[#16143E]/10 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-[#EF1313]/10 text-[#EF1313] flex items-center justify-center mb-4">
                      <Quote size={18} />
                    </div>
                    <p className="text-sm text-[#16143E]/75 italic leading-relaxed mb-6 font-body">
                      &ldquo;{rev.quote}&rdquo;
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#16143E]/8">
                    <div className="font-bold text-sm text-[#16143E]">{rev.author}</div>
                    <div className="text-xs text-[#16143E]/55">{rev.role}</div>
                    <div className="text-xs font-semibold text-[#EF1313] mt-1">{rev.system}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white text-[#16143E]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF1313] mb-3 font-display">
                <HelpCircle size={14} className="text-[#EF1313]" /> Common Inquiries
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#16143E] font-display">
                Biometric Time Attendance FAQs
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq) => (
                <div key={faq.q} className="p-6 rounded-2xl bg-[#F8F9FD] border border-[#16143E]/8">
                  <h3 className="font-bold text-base text-[#16143E] mb-2 font-display">{faq.q}</h3>
                  <p className="text-xs sm:text-sm text-[#16143E]/70 leading-relaxed font-body">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. "Enquiry" Section */}
        <EnquirySection initialService="Biometric Time Attendance" initialType="security" />
      </main>
      <Footer />
    </>
  );
}
