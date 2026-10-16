import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquirySection from "@/components/EnquirySection";
import Breadcrumbs from "@/components/Breadcrumbs";
import HardwareGallery from "@/components/HardwareGallery";
import {
  Car,
  ShieldCheck,
  CheckCircle2,
  Sliders,
  ArrowRight,
  MessageCircle,
  Phone,
  BadgeCheck,
  Building,
  Layers,
  Store,
  Users,
  Zap,
  HelpCircle,
  Star,
  Quote,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Boom Barriers, Turnstiles & Metal Detectors Chennai | Broadnet Entrance Automation",
  description:
    "Automated boom barriers, RFID vehicle tags, doorframe metal detectors (DFMD), and pedestrian flap barriers for apartments, tech parks, and factories across Chennai & Avadi. Call 86818 88111.",
  keywords: [
    "Boom barrier installation Chennai",
    "Automatic vehicle barrier Avadi",
    "Door frame metal detector DFMD Chennai",
    "Flap barrier turnstile Chennai",
    "RFID vehicle boom barrier Chennai",
  ],
};

const WHAT_IS_IT_POINTS = [
  {
    icon: Car,
    title: "Motorized High-Speed Boom Arms",
    desc: "3m to 6m telescopic and folding motorized aluminum arms with brushless DC motors, 1.5s opening speed, and anti-smash loop sensors.",
  },
  {
    icon: Zap,
    title: "Long-Range Windshield RFID Readers",
    desc: "UHF RFID antennas reading registered resident vehicle windshield tags from 6 meters away, opening gates seamlessly with zero stoppage.",
  },
  {
    icon: ShieldCheck,
    title: "Multi-Zone Metal Detectors (DFMD)",
    desc: "Multi-zone walk-through doorframe metal detectors with pinpoint LED columns, sensitivity level calibration, and transit passenger counters.",
  },
  {
    icon: Sliders,
    title: "Optical Flap Turnstiles & Mantrap Gates",
    desc: "Motorized pedestrian flap barriers and full-height turnstiles preventing tailgating in corporate office reception lobbies and tech parks.",
  },
];

const WHO_IS_IT_FOR = [
  {
    icon: Building,
    title: "Gated Apartment Communities & RWAs",
    tag: "Residential Societies",
    desc: "Automate resident car and two-wheeler access with RFID tags, while screening visitor and courier delivery vehicles at the main gate.",
    benefits: ["Zero queue resident vehicle entry", "Anti-smash safety loop detectors", "Guard booth override push button"],
  },
  {
    icon: Layers,
    title: "Tech Parks & Corporate Campuses",
    tag: "Commercial Hubs",
    desc: "Regulate high-frequency employee traffic and prevent pedestrian tailgating with motorized glass flap barriers and biometric readers.",
    benefits: ["Sub-second pedestrian throughput", "Biometric face & RFID integration", "Fire alarm emergency auto-drop wings"],
  },
  {
    icon: Store,
    title: "Factories & Logistics Warehouses",
    tag: "Industrial Logistics",
    desc: "Heavy-duty boom barriers engineered for continuous heavy truck, tanker, and container movement with boom crash protection.",
    benefits: ["Heavy truck chassis tolerance", "24/7 continuous duty cycle motors", "Manual clutch release during blackouts"],
  },
  {
    icon: Users,
    title: "Convention Halls, Malls & Schools",
    tag: "Public Safety",
    desc: "Screen large volumes of visitors for concealed weapons and unauthorized metal contraband with high-sensitivity DFMD gates.",
    benefits: ["Multi-zone pinpoint LED location", "Traffic throughput counter display", "Anti-interference circuit architecture"],
  },
];

const HARDWARE_GALLERY_ITEMS = [
  {
    title: "Automatic Motorized Boom Barrier",
    category: "Vehicle Automation",
    description: "High-speed brushless DC motor barrier with 3-6 meter telescopic aluminum arm and illuminated LED safety strips.",
    specs: ["1.5s to 3s Fast Arm Cycle", "Brushless DC Motor (5M cycles)", "Anti-Smash Pressure Sensor"],
    status: "Ready Stock",
  },
  {
    title: "Long-Range UHF RFID Reader",
    category: "RFID Scanning",
    description: "Multi-protocol UHF RFID reader reading vehicle windshield tags up to 6 meters away in harsh weather conditions.",
    specs: ["6-Meter Read Range", "IP65 Weatherproof Enclosure", "Wiegand / RS485 Controller Link"],
    status: "In Stock",
  },
  {
    title: "Multi-Zone Doorframe Metal Detector",
    category: "Security Screening",
    description: "6 to 18-zone walk-through DFMD gate with dual-side LED column alarms and adjustable sensitivity calibration.",
    specs: ["18 Detection Zones", "Pinpoint LED Location Display", "Passenger & Alarm Counter"],
    status: "Ready Stock",
  },
  {
    title: "Optical Glass Flap Barrier Turnstile",
    category: "Pedestrian Access",
    description: "Stainless steel SUS304 turnstile with tempered glass flaps, infrared anti-tailgating sensors, and biometric face sync.",
    specs: ["SUS304 Stainless Steel Shell", "Infrared Anti-Tailgating Matrix", "Emergency Auto-Retract Flaps"],
    status: "Custom SLA",
  },
  {
    title: "Handheld Security Metal Detector Wand",
    category: "Manual Inspection",
    description: "Lightweight, high-sensitivity handheld inspection scanner with audio tone and vibration alert for event security.",
    specs: ["High Ferrous Sensitivity", "Audio & Vibration Modes", "Rechargeable 9V Battery"],
    status: "In Stock",
  },
  {
    title: "Underground Vehicle Inductive Loop",
    category: "Safety Loop",
    description: "Embedded ground detector sensor preventing boom arms from lowering onto vehicles or pedestrians.",
    specs: ["Teflon-Coated Loop Cable", "Frequency Adjustment Tuning", "Zero-Smash Safety Trigger"],
    status: "Standard SLA",
  },
];

const PACKAGES = [
  {
    name: "Automatic Boom Barrier Kit",
    tagline: "Motorized boom barrier with push button and remote keyfobs for residential gates",
    price: "₹32,000",
    unit: "barrier unit + installation",
    badge: "Entry Automation",
    popular: false,
    features: [
      "4-Meter High-Visibility Aluminum Arm",
      "Heavy-Duty Motor with 100% Duty Cycle",
      "2x Wireless Remote Control Keyfobs",
      "Guard Booth Manual Push-Button Station",
      "Anti-Smash Optical Safety Photocells",
      "1-Year On-Site Manufacturer Warranty",
    ],
    ctaText: "Order Boom Barrier",
  },
  {
    name: "Complete RFID Tag Society Gate",
    tagline: "Automated hands-free vehicle entry system for apartment communities",
    price: "₹48,000",
    unit: "barrier + RFID reader + tags",
    badge: "Most Popular",
    popular: true,
    features: [
      "High-Speed Automatic Boom Barrier (3-4m)",
      "Long-Range UHF Windshield RFID Reader",
      "50x Pre-Programmed Vehicle RFID Tags",
      "Underground Anti-Smash Loop Detector",
      "Guard Booth Master Override Console",
      "Concealed cabling & foundation civil work",
      "2-Year On-Site Hardware Warranty",
    ],
    ctaText: "Book RFID Gate Kit",
  },
  {
    name: "Walk-Through Metal Detector (DFMD)",
    tagline: "Multi-zone security screening gate for halls, schools, and offices",
    price: "₹35,000",
    unit: "multi-zone DFMD gate",
    badge: "Security Screening",
    popular: false,
    features: [
      "6 to 18-Zone Pinpoint Detection Architecture",
      "Dual Side Column Alarm LED Light Strips",
      "Automated Visitor Transit & Alarm Counters",
      "Adjustable Sensitivity Calibration for Coins/Keys",
      "Sound & Visual Warning Strobe",
      "Priority 2-Hour SLA Local Support",
    ],
    ctaText: "Order DFMD Gate",
  },
  {
    name: "Corporate Optical Flap Turnstiles",
    tagline: "Motorized pedestrian entrance automation for tech parks & tech headquarters",
    price: "Custom Quote",
    unit: "Multi-Lane Turnstile Systems",
    badge: "Enterprise Scale",
    popular: false,
    features: [
      "Single or Multi-Lane Motorized Flap Barriers",
      "Integrated Face Recognition & RFID Card Scanners",
      "Infrared Anti-Tailgating Sensor Matrix",
      "Bi-Directional High-Throughput Passenger Flow",
      "Integration with Building Fire Alarms",
      "Quarterly preventive maintenance AMC options",
      "Dedicated technician support within 90 minutes",
    ],
    ctaText: "Request Turnstile Survey",
  },
];

const REVIEWS = [
  {
    quote:
      "BroadNet automated the main entry gate for our 80-villa residential community in Avadi. The RFID tags open the boom barrier smoothly without any wait time. Excellent installation and after-sales support.",
    author: "R. Jayachandran",
    role: "Secretary, Lakeview Villas RWA",
    location: "Avadi, Chennai",
    system: "Automatic Boom Barrier with RFID Tag Reader",
  },
  {
    quote:
      "We installed BroadNet's DFMD metal detector gates and handheld wands for our convention auditorium in Poonamallee. Reliable detection with zero false alarms from small metallic belts.",
    author: "M. Soundararajan",
    role: "Operations Manager, Grand Palace Hall",
    location: "Poonamallee / Avadi Corridor",
    system: "Multi-Zone Walk-Through Metal Detector",
  },
  {
    quote:
      "Our factory entrance in Ambattur needed heavy-duty boom barriers for container trailers. BroadNet fabricated the concrete base and wired safety ground loops. Flawless 24/7 continuous operation.",
    author: "V. Natarajan",
    role: "Plant Head, Premier Engineering",
    location: "Ambattur Industrial Corridor",
    system: "Heavy-Duty Industrial Boom Barrier Grid",
  },
];

const FAQS = [
  {
    q: "What happens to the boom barrier during a complete power outage?",
    a: "All boom barriers installed by BroadNet come with an internal manual clutch release key. If power fails and no generator is running, a quick turn of the key releases the arm, allowing it to be opened manually with zero resistance.",
  },
  {
    q: "How do the vehicle RFID windshield tags work in gated communities?",
    a: "We mount a long-range UHF antenna near the entrance. When a resident's car approaches within 6 meters, the reader recognizes the windshield tag and automatically opens the boom arm. Once the car passes over the underground safety loop, the arm lowers automatically.",
  },
  {
    q: "Can the boom barrier accidentally drop on a car or pedestrian?",
    a: "No. Every installation includes two redundant safety systems: an underground inductive loop detector that senses vehicle metal and optical infrared safety photocells that detect pedestrians. The arm will never lower while anything is under it.",
  },
  {
    q: "Do you handle the civil foundation and electrical conduit work?",
    a: "Yes! BroadNet provides end-to-end turnkey deployment, including RCC concrete foundation pedestal casting, concealed electrical conduit cabling, controller mounting, and software commissioning.",
  },
];

export default function EntranceSecurityPage() {
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
            <div className="absolute top-1/4 -right-20 w-[550px] h-[450px] bg-red-100/40 blur-[140px] rounded-full" />
            <div className="absolute bottom-10 left-10 w-[500px] h-[400px] bg-purple-100/50 blur-[150px] rounded-full" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb Navigation */}
            <div className="mb-6">
              <Breadcrumbs
                items={[
                  { label: "Services", href: "/#services" },
                  { label: "Boom Barriers & Entrance Security" },
                ]}
                variant="light"
              />
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2.5 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#EF1313]/10 text-[#EF1313] border border-[#EF1313]/25 shadow-2xs">
                    <BadgeCheck size={14} className="text-[#EF1313]" />
                    Heavy-Duty Commercial Entrance Automation
                  </span>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-100/90 text-[#16143E]/80 border border-slate-200/80 shadow-2xs">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    &lt; 2-Hour On-Site Technician Dispatch
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#16143E] leading-[1.12] font-display tracking-tight mb-6">
                  Secure Every Entry.
                  <br />
                  <span className="text-gradient">Boom Barriers &amp; Entrance Automation.</span>
                </h1>

                <p className="text-[#16143E]/70 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl font-body">
                  Regulate unauthorized vehicles and secure pedestrian entry points with motorized automatic boom barriers, long-range windshield RFID tags, multi-zone doorframe metal detectors (DFMD), and optical flap turnstiles in Avadi &amp; Chennai.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "1.5s High-Speed Motorized Boom Arms",
                    "Long-Range RFID Windshield Tag Readers",
                    "Anti-Smash Ground Loop Safety Detectors",
                    "Multi-Zone Walk-Through Metal Detectors",
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

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#packages"
                    className="btn-crimson flex items-center gap-2 text-sm font-bold shadow-lg shadow-[#EF1313]/25 hover:shadow-xl hover:shadow-[#EF1313]/35 transition-all"
                  >
                    <span>View Entrance Packages</span>
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href="https://wa.me/918681888111?text=Hi%20Broadnet,%20I%20am%20interested%20in%20Boom%20Barriers%20and%20Entrance%20Security%20in%20Avadi.%20Please%20share%20details."
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
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-[#EF1313]/10 to-[#4E0DBA]/10 blur-3xl rounded-full pointer-events-none" />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#EF1313]">
                          Entrance Security
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/80 inline-flex items-center gap-1.5 shadow-2xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Heavy-Duty Motors
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
                            <Car size={30} strokeWidth={1.8} className="text-[#EF1313]" />
                          </div>
                          <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#EF1313]" />
                          </span>
                        </div>

                        <div className="text-sm font-bold text-[#16143E] font-display">
                          Automatic Boom Barrier Hub
                        </div>
                        <p className="text-xs text-[#16143E]/55 mt-1 font-medium max-w-[240px]">
                          Fast RFID vehicle reader with anti-smash ground loop and pedestrian flap turnstiles
                        </p>

                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-[11px] font-mono text-[#16143E]/70 mt-3 shadow-2xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#EF1313]" />
                          Barrier Automation Placeholder
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-100 mb-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h2 className="text-[#16143E] font-bold text-lg">Commercial Automation</h2>
                            <p className="text-xs text-[#16143E]/55">Turnkey Deployment with Civil Work</p>
                          </div>
                          <span className="text-sm font-bold text-[#EF1313] bg-red-50 border border-red-200/90 px-3 py-1.5 rounded-lg shadow-2xs">
                            Starts ₹32,000
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
                          Societies, Tech Parks &amp; Tolls
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl px-4 py-3 shadow-[0_12px_30px_rgba(22,20,62,0.12)] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#EF1313]/10 border border-[#EF1313]/20 flex items-center justify-center text-[#EF1313] flex-shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#16143E]">Zero-Smash Safety</div>
                      <div className="text-[11px] text-[#16143E]/55">Dual ground loop + photocells</div>
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
                What is Entrance Security & Gate Automation?
              </h2>
              <p className="text-[#16143E]/65 text-base sm:text-lg leading-relaxed">
                Entrance security transforms perimeter gates into automated control points. It combines high-speed motorized barrier arms, long-range RFID tag scanning, anti-smash ground safety sensors, and walkthrough metal screening:
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
                <span className="w-4 h-px bg-[#4E0DBA]" /> Sectors & Premises <span className="w-4 h-px bg-[#4E0DBA]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight font-display mb-4">
                Who Needs Entrance Automation?
              </h2>
              <p className="text-[#16143E]/65 text-base sm:text-lg leading-relaxed">
                Explore how various facilities automate vehicular traffic and protect pedestrian entrances:
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

        {/* 4. "Images" Section (Hardware & Gate Automation Gallery) */}
        <HardwareGallery
          sectionSubtitle="Hardware Showcase"
          sectionTitle="Heavy-Duty Barrier Motors & Turnstiles"
          sectionDescription="View our motorized barrier arms, long-range RFID readers, walk-through DFMD metal detectors, and pedestrian turnstiles."
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
                Tailored Entrance Security Packages
              </h2>
              <p className="text-white/65 text-base sm:text-lg leading-relaxed">
                From residential society gate barriers to multi-lane corporate tech park turnstile grids with <strong>no upper ceiling</strong>.
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
                        `Hi Broadnet, I am interested in the ${pkg.name} (${pkg.price}) for Entrance Automation in Avadi. Please share details.`
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
                <span className="w-4 h-px bg-[#4E0DBA]" /> Verified Customer Experiences <span className="w-4 h-px bg-[#4E0DBA]" />
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#16143E] font-display mb-4">
                Trusted by Housing Societies & Facilities in Chennai
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
                <HelpCircle size={14} className="text-[#EF1313]" /> Common Questions
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#16143E] font-display">
                Boom Barriers & Entrance Security FAQs
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
        <EnquirySection initialService="Boom Barriers & Flap Barriers" initialType="security" />
      </main>
      <Footer />
    </>
  );
}
