import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquirySection from "@/components/EnquirySection";
import Breadcrumbs from "@/components/Breadcrumbs";
import HardwareGallery from "@/components/HardwareGallery";
import RelatedSolutions from "@/components/RelatedSolutions";
import {
  Network,
  Server,
  Shield,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Phone,
  Layers,
  Building,
  Store,
  Building2,
  Zap,
  HelpCircle,
  Star,
  Quote,
  Activity,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Structured Cabling & Network Infrastructure Chennai | Tactine Firewall Partner",
  description:
    "End-to-end LAN/WAN engineering, Cat6/Cat6A structured cabling, server rack management, optical fiber fusion splicing with OTDR testing, and Tactine UTM firewalls across Chennai & Avadi. Call 86818 88111.",
  keywords: [
    "Structured cabling Avadi",
    "Network infrastructure Chennai",
    "Server rack cabling Chennai",
    "Tactine firewall dealer Chennai",
    "Optical fiber splicing Avadi",
    "Cat6 cabling contractor Chennai",
    "Server rack dressing Avadi",
  ],
  alternates: {
    canonical: "https://www.broadnet.in/services/networking",
  },
  openGraph: {
    title: "Structured Cabling & Network Infrastructure | Broadnet",
    description:
      "Enterprise LAN/WAN cabling, server rack dressing, optical fiber backbone splicing, and Tactine UTM cyber firewalls in Avadi & Chennai.",
    url: "https://www.broadnet.in/services/networking",
  },
};

const WHAT_IS_IT_POINTS = [
  {
    icon: Network,
    title: "Cat6 & Cat6A Structured Cabling",
    desc: "100% pure oxygen-free copper conduits, labeled patch panels, and keystones delivering gigabit and 10-gigabit throughput with zero packet loss.",
  },
  {
    icon: Server,
    title: "Server Racks & Cable Dressing",
    desc: "Neat vertical and horizontal cable organization in 6U to 42U server racks with color-coded patch cords, clean airflow, and port-by-port labeling.",
  },
  {
    icon: Activity,
    title: "Optical Fiber Fusion Splicing & OTDR",
    desc: "Core-alignment optical fiber fusion splicing connecting distant blocks and factory sheds, calibrated with calibrated OTDR dB attenuation tests.",
  },
  {
    icon: Shield,
    title: "Tactine Hardware UTM Firewalls",
    desc: "Hardware-level cyber barrier protecting corporate servers from ransomware, intrusions, unauthorized data theft, with site-to-site VPN tunnels.",
  },
];

const WHO_IS_IT_FOR = [
  {
    icon: Building,
    title: "Corporate Offices & IT Hubs",
    tag: "Commercial",
    desc: "Deliver gigabit speeds to every employee desk. Separate workstation traffic, VoIP IP-phones, and high-density video conferencing into secure VLANs.",
    benefits: ["Clean concealed desk drops", "VoIP & Zoom zero-jitter priority", "Server room rack consolidation"],
  },
  {
    icon: Layers,
    title: "Factories & Manufacturing Plants",
    tag: "Industrial",
    desc: "Connect factory sheds, weighbridges, and admin offices with long-distance noise-shielded optical fiber backbones and industrial PoE switches.",
    benefits: ["Multi-acre fiber optic mesh", "Noise-shielded armored cabling", "High-temperature rated hardware"],
  },
  {
    icon: Store,
    title: "Retail Stores & Supermarkets",
    tag: "Retail",
    desc: "Keep billing counters, POS card swipe terminals, and CCTV network switches online 24/7 with zero payment dropouts or latency delays.",
    benefits: ["POS billing machine isolation", "CCTV LAN traffic separation", "Compact wall-mount 6U/9U racks"],
  },
  {
    icon: Building2,
    title: "Schools, Colleges & Campuses",
    tag: "Institutions",
    desc: "Multi-floor structured cabling for computer labs, digital smart classrooms, administrative databases, and captive portal student Wi-Fi.",
    benefits: ["Campus-wide fiber backbone", "Student vs staff network isolation", "Content-filtering UTM policies"],
  },
];

const HARDWARE_GALLERY_ITEMS = [
  {
    title: "Schneider Digilink Cat6/Cat6A Cable Spool",
    category: "Copper Backbone",
    description: "23/24 AWG pure annealed bare copper wire designed for high-density 1Gbps and 10Gbps Ethernet data transmission.",
    specs: ["100% Pure Bare Copper", "550 MHz Frequency Tested", "Flame-Retardant Low Smoke Jacket"],
    status: "Ready Stock",
  },
  {
    title: "24/48-Port Labeled Patch Panel with Trays",
    category: "Cable Management",
    description: "19-inch rack-mount patch panels with rear cable support bars, gold-plated contacts, and numbered port labels.",
    specs: ["Cat6/Cat6A Keystone Jacks", "Rear Cable Management Bar", "Clear Numbered Port Identification"],
    status: "In Stock",
  },
  {
    title: "12U to 42U Server Rack Enclosures",
    category: "Server Enclosures",
    description: "Heavy-duty CRCA steel server racks with perforated doors, integrated cooling fans, PDU power strips, and cable organizer trays.",
    specs: ["Perforated High-Airflow Doors", "Horizontal & Vertical Organizers", "Integrated Power Distribution Unit"],
    status: "Ready Stock",
  },
  {
    title: "Optical Fiber Fusion Splice Joint Enclosure",
    category: "Fiber Backhauls",
    description: "Weatherproof dome and inline fiber joint enclosures protecting delicate optical fiber splices across outdoor conduit runs.",
    specs: ["Precision Core-Alignment Splicing", "IP68 Submersible Waterproof Seal", "OTDR dB Attenuation Tested"],
    status: "Standard SLA",
  },
  {
    title: "Tactine Enterprise UTM Hardware Firewall",
    category: "Cyber Security",
    description: "Dedicated hardware firewall appliance with deep packet inspection, gateway antivirus, intrusion prevention, and multi-WAN failover.",
    specs: ["Gigabit Throughput Filtering", "Hardware IPS & Antivirus Engine", "IPSec & SSL Site-to-Site VPN"],
    status: "Tactine Partner",
  },
  {
    title: "Heavy-Duty PVC & GI Conduit Cabling Setup",
    category: "Installation Finish",
    description: "Precision concealed or surface-mounted cable routing with inspection bends, fire-retardant PVC, and rodent-proof shielding.",
    specs: ["100% Concealed Routing Finish", "Rodent-Proof & Weather-Shielded", "Architectural Aesthetic Standards"],
    status: "Standard SLA",
  },
];

const PACKAGES = [
  {
    name: "Small Office LAN Setup",
    tagline: "Essential structured cabling for clinics, shops & offices with 10–24 users",
    price: "₹8,999",
    unit: "setup & termination (10-24 drops)",
    badge: "Startup & Retail",
    popular: false,
    ctaText: "Choose Office LAN",
    features: [
      "Up to 24 Cat6 High-Speed Node Terminations",
      "Wall-Mount 6U / 9U Server Rack Installation",
      "24-Port Cat6 Loaded Patch Panel with Labels",
      "Neat Front Cable Organizer & Numbering",
      "Full Continuity & Speed Verification Testing",
      "1-Year On-Site Installation Guarantee",
    ],
  },
  {
    name: "Corporate Structured Cabling",
    tagline: "Complete corporate network infrastructure for IT offices & corporate facilities",
    price: "₹19,999",
    unit: "cabling & rack dressing (25-60 drops)",
    badge: "Most Popular",
    popular: true,
    ctaText: "Choose Corporate Setup",
    features: [
      "25 to 60 Cat6/Cat6A Node Terminations",
      "Floor-Standing 15U to 24U Server Rack Setup",
      "Dual 24-Port Patch Panels with Horizontal Cable Trays",
      "Color-Coded Patch Cords for Workstations & VoIP",
      "Fluke Channel Continuity & Cross-Talk Certification",
      "VLAN Segmentation for Workstations, VoIP & CCTV",
      "2-Year On-Site Support & Maintenance SLA",
    ],
  },
  {
    name: "Fiber Optic Campus Backbone",
    tagline: "High-speed multi-building optical backbone for factories, colleges & warehouses",
    price: "₹24,999",
    unit: "fusion splicing & fiber backhaul",
    badge: "Campus & Industrial",
    popular: false,
    ctaText: "Choose Fiber Backbone",
    features: [
      "Outdoor Armored 6/12/24-Core Optical Fiber Laying",
      "Precision Core-Alignment Fusion Splicing",
      "Rack-Mount Optical LIU (Light Interface Units)",
      "OTDR Insertion Loss & dB Certification Report",
      "Multi-Gigabit Optical Transceiver / SFP Media Links",
      "Lightning & Surge Isolation Across Buildings",
    ],
  },
  {
    name: "Tactine Enterprise UTM Firewall",
    tagline: "Hardware-level cybersecurity, intrusion prevention & multi-WAN gateway",
    price: "₹32,000",
    unit: "hardware UTM appliance + setup",
    badge: "Cyber Defense",
    popular: false,
    ctaText: "Choose Firewall Gateway",
    features: [
      "Tactine Dedicated Hardware Firewall Appliance",
      "Deep Packet Inspection & Gateway Antivirus",
      "Intrusion Prevention System (IPS) & DDoS Shield",
      "Multi-WAN Load Balancing & Auto-Failover",
      "Site-to-Site Encrypted VPN for Remote Branches",
      "Employee Bandwidth Throttling & URL Filtering",
      "1-Year Hardware Replacement & Firmware Updates",
    ],
  },
];

const WORKFLOW = [
  {
    step: "01",
    title: "Site Survey & Fluke Cable Audit",
    desc: "Our certified network engineers map workstation nodes, calculate cable pathways, assess electrical interference, and plan server rack placements.",
  },
  {
    step: "02",
    title: "Concealed Conduit & Fiber Route Laying",
    desc: "We lay heavy-duty PVC/GI conduits and armored optical fiber cables along building pathways, maintaining standard bend radiuses and zero cable strain.",
  },
  {
    step: "03",
    title: "Patch Panel Punching & Rack Dressing",
    desc: "Every cable is neatly punched onto numbered patch panels, routed through cable organizers, and laced inside the server rack with color-coded patch leads.",
  },
  {
    step: "04",
    title: "Fluke / OTDR Testing & Certified Handover",
    desc: "We run end-to-end wiremap, cross-talk, and optical dB attenuation tests on every node, delivering detailed port documentation and test certifications.",
  },
];

const REVIEWS = [
  {
    quote:
      "BroadNet wired our entire 3-story engineering office in Ambattur with Cat6A structured cabling and a 24U server rack. The cable dressing is immaculate—every single drop is labeled and tested. When we plugged in our 45 workstations, not a single packet was lost.",
    author: "V. Raghavan",
    role: "IT Infrastructure Lead, Precision Engineering Works",
    location: "Ambattur Industrial Estate, Chennai",
    system: "60-Node Cat6A Cabling & 24U Server Rack",
  },
  {
    quote:
      "Our factory campus in Avadi has three separate sheds 300 meters apart. BroadNet laid outdoor armored fiber optic cables, performed core fusion splicing, and installed optical media converters. Our server connection between sheds is rock solid with zero lag.",
    author: "M. Gopinath",
    role: "Plant Operations Director",
    location: "Kaveri Nagar, Avadi",
    system: "Armored Fiber Optic Backbone & Splicing",
  },
  {
    quote:
      "We deployed a Tactine UTM firewall with BroadNet to prevent staff bandwidth wastage and protect our accounting database. The dual-WAN failover works seamlessly—if our primary broadband drops, it switches instantly without interrupting transactions.",
    author: "S. Annamalai",
    role: "Managing Director, Sri Krishna Textiles",
    location: "MTH Road, Avadi",
    system: "Tactine Hardware UTM & Multi-WAN Gateway",
  },
];

const FAQS = [
  {
    q: "What is the difference between Cat6 and Cat6A cabling?",
    a: "Cat6 supports speeds up to 1 Gbps up to 100 meters (and 10 Gbps up to 37–55 meters). Cat6A features enhanced shielding and a thicker gauge, supporting full 10 Gbps transmission up to the complete 100-meter run with significantly reduced alien crosstalk. We recommend Cat6A for server backbones, dense IT offices, and 4K CCTV uplinks.",
  },
  {
    q: "What is the maximum distance for optical fiber cable runs?",
    a: "Single-mode optical fiber can transmit data without signal degradation across 10 to 40 kilometers, making it ideal for connecting separate buildings, warehouses, or campus blocks. Multimode fiber is typically used inside data centers for distances up to 300–550 meters.",
  },
  {
    q: "Why do businesses need a Tactine hardware firewall instead of basic software antivirus?",
    a: "Software antivirus only runs on individual PCs and can be disabled or bypassed. A Tactine hardware UTM appliance sits directly between your internet modem and entire office network, inspecting every incoming and outgoing packet. It blocks ransomware, phishing, and botnets at the network perimeter before threats can ever touch user machines.",
  },
  {
    q: "Do you test and certify every cabling node before handover?",
    a: "Yes! Every single copper drop is verified with digital wiremap and continuity testers to guarantee zero pin mismatch, short circuits, or attenuation faults. For optical fiber backhauls, we supply OTDR (Optical Time-Domain Reflectometer) dB loss certification reports.",
  },
  {
    q: "What is your on-site service support response time in Avadi?",
    a: "Because our engineering headquarters is located directly on Fire Station Road, Avadi, our dispatch engineers provide emergency on-site support under 2 hours across Avadi, Ambattur, Thirumullaivoyal, and Chennai.",
  },
];

export default function NetworkingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Structured Cabling & Network Infrastructure",
    provider: {
      "@type": "LocalBusiness",
      name: "Broadnet Internet Services & Security Systems",
      telephone: "+91-86818-88111",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1093, Fire Station Road, TNHB, Avadi",
        addressLocality: "Chennai",
        postalCode: "600054",
        addressCountry: "IN",
      },
    },
    areaServed: ["Avadi", "Ambattur", "Thirumullaivoyal", "Chennai"],
    description:
      "Structured Cat6/Cat6A cabling, server rack cable dressing, fusion optical fiber splicing with OTDR testing, and Tactine UTM firewalls.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header activePage="Services" />
      <main>
        {/* 1. Hero Section (Heading + Value Proposition on Left, Visual Terminal Showcase on Right) */}
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
                  { label: "Networking & Infrastructure" },
                ]}
                variant="light"
              />
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Copy & Value Proposition */}
              <div className="lg:col-span-7">


                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#16143E] leading-[1.12] font-display tracking-tight mb-6">
                  Zero Downtime Backbone.
                  <br />
                  <span className="text-gradient">Structured Cabling &amp; Network Infrastructure.</span>
                </h1>

                <p className="text-[#16143E]/70 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl font-body">
                  Build an uncompromising foundation for your corporate IT, cloud servers, CCTV surveillance feeds, and high-speed data transfers. We provide structured Cat6/Cat6A cabling, server rack cable dressing, fusion optical fiber splicing with OTDR testing, and Tactine hardware UTM firewalls across Avadi &amp; Chennai.
                </p>

                {/* 4 Key Highlight Points */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Cat6 & Cat6A 10Gbps Speed Verification",
                    "6U to 42U Server Rack Cable Dressing",
                    "OTDR Certified Fusion Fiber Splicing",
                    "Tactine Hardware UTM Cybersecurity",
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

                {/* Action CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#packages"
                    className="btn-crimson flex items-center gap-2 text-sm font-bold shadow-lg shadow-[#EF1313]/25 hover:shadow-xl hover:shadow-[#EF1313]/35 transition-all"
                  >
                    <span>View Infrastructure Packages</span>
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href="https://wa.me/918681888111?text=Hi%20Broadnet,%20I%20am%20interested%20in%20Structured%20Cabling%20and%20Network%20Infrastructure%20in%20Avadi.%20Please%20share%20details."
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

              {/* Right Column: Visual Terminal Showcase */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="relative bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(22,20,62,0.08)] overflow-hidden ring-1 ring-slate-900/[0.04]">
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-[#4E0DBA]/10 to-[#EF1313]/10 blur-3xl rounded-full pointer-events-none" />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#A78BFA]">
                          Network Operations Center
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/80 inline-flex items-center gap-1.5 shadow-2xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Enterprise Grade
                        </span>
                      </div>

                      {/* Technical Console Display */}
                      <div className="relative h-56 sm:h-64 w-full flex flex-col items-center justify-center my-3 bg-gradient-to-b from-slate-50/90 to-slate-100/60 rounded-2xl border-2 border-dashed border-slate-200/90 p-6 text-center group transition-all duration-300 hover:border-[#4E0DBA]/40 hover:bg-slate-50">
                        {/* Technical Corner Brackets / Reticle */}
                        <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-slate-300 group-hover:border-[#4E0DBA]/60 transition-colors pointer-events-none" />
                        <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-slate-300 group-hover:border-[#4E0DBA]/60 transition-colors pointer-events-none" />
                        <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-slate-300 group-hover:border-[#4E0DBA]/60 transition-colors pointer-events-none" />
                        <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-slate-300 group-hover:border-[#4E0DBA]/60 transition-colors pointer-events-none" />

                        <div className="relative mb-3.5">
                          <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200/80 shadow-md shadow-slate-200/60 flex items-center justify-center text-[#4E0DBA] group-hover:scale-105 group-hover:shadow-lg transition-transform">
                            <Network size={32} strokeWidth={1.8} className="text-[#4E0DBA]" />
                          </div>
                          <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4E0DBA]" />
                          </span>
                        </div>

                        <div className="text-sm font-bold text-[#16143E] font-display">
                          Enterprise Infrastructure Console
                        </div>
                        <p className="text-xs text-[#16143E]/55 mt-1 font-medium max-w-[240px]">
                          Cat6A patch panels, server rack cable dressing, fusion fiber splicing &amp; Tactine UTMs
                        </p>

                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-[11px] font-mono text-[#16143E]/70 mt-3 shadow-2xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4E0DBA]" />
                          Schneider &amp; Tactine Certified
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-100 mb-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h2 className="text-[#16143E] font-bold text-lg">Cat6A &amp; Optical Fiber</h2>
                            <p className="text-xs text-[#16143E]/55">10–120+ Node Enterprise Deployments</p>
                          </div>
                          <span className="text-sm font-bold text-[#EF1313] bg-red-50 border border-red-200/90 px-3 py-1.5 rounded-lg shadow-2xs">
                            Starts ₹8,999
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
                          Offices, Racks &amp; Factory Sheds
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl px-4 py-3 shadow-[0_12px_30px_rgba(22,20,62,0.12)] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <Zap size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#16143E]">Fluke &amp; OTDR Tested</div>
                      <div className="text-[11px] text-[#16143E]/55">Certified Zero Packet Loss</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. "What is it" Section (Architecture & Engineering Overview) */}
        <section className="py-20 sm:py-24 bg-white text-[#16143E] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF1313] mb-3 font-display">
                <span className="w-4 h-px bg-[#EF1313]" /> Architecture &amp; Engineering <span className="w-4 h-px bg-[#EF1313]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight font-display mb-4">
                What is Professional Network Infrastructure?
              </h2>
              <p className="text-[#16143E]/65 text-base sm:text-lg leading-relaxed">
                Modern enterprise networking goes far beyond running loose ethernet cables. It is an engineered ecosystem combining certified copper backbones, disciplined server enclosures, optical fusion links, and hardware cyber firewalls:
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

        {/* 3. "Who is it for" Section (Premises & Target Segments) */}
        <section className="py-20 sm:py-24 bg-[#F8F9FD] border-t border-[#16143E]/8 text-[#16143E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4E0DBA] mb-3 font-display">
                <span className="w-4 h-px bg-[#4E0DBA]" /> Tailored Deployments <span className="w-4 h-px bg-[#4E0DBA]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight font-display mb-4">
                Who Needs Structured Network Infrastructure?
              </h2>
              <p className="text-[#16143E]/65 text-base sm:text-lg leading-relaxed">
                Whether deploying 12 workstation drops in an office or interconnecting multi-acre industrial factory sheds, our infrastructure installations are custom-engineered for your operational scale:
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

        {/* 4. "Images" Section (Hardware Gallery & Visual Demonstrations) */}
        <HardwareGallery
          sectionSubtitle="Certified Components"
          sectionTitle="Official Network Hardware & Cabling Components"
          sectionDescription="Take a close look at our Schneider Digilink Cat6A spools, precision patch panels, server rack management systems, and Tactine UTM firewalls."
          items={HARDWARE_GALLERY_ITEMS}
          theme="light"
        />

        {/* 5. "Price" Section (Packages & Infrastructure Tiers) */}
        <section id="packages" className="py-20 sm:py-28 bg-[#0B091E] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF1313] mb-3 font-display">
                <span className="w-4 h-px bg-[#EF1313]" /> Transparent Packages <span className="w-4 h-px bg-[#EF1313]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display mb-4">
                Tailored Networking Packages For Any Scale
              </h2>
              <p className="text-white/65 text-base sm:text-lg leading-relaxed">
                From compact 10-node retail setups to high-density corporate offices and industrial campuses with <strong>no upper ceiling</strong>.
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
                        `Hi Broadnet, I am interested in the ${pkg.name} (${pkg.price}) for Structured Cabling & Networking in Avadi. Please share details.`
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

            {/* Scope / No Upper Ceiling Banner */}
            <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 max-w-4xl mx-auto text-center">
              <h4 className="text-lg font-bold text-white mb-2 font-display">
                Need a Custom Multi-Building or Industrial Configuration?
              </h4>
              <p className="text-xs sm:text-sm text-white/65 max-w-2xl mx-auto mb-5 leading-relaxed">
                We handle industrial campuses, manufacturing hubs, and enterprise IT offices requiring 100 to 500+ network drops, optical fiber media backhauls, and redundant server rack dressing.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#enquiry"
                  className="btn-crimson text-xs font-bold"
                >
                  Request Custom Site Survey
                </a>
                <a
                  href="tel:+918681888111"
                  className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/15"
                >
                  Direct Call: 86818 88111
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Workflow / How We Deliver the Service */}
        <section className="py-20 sm:py-24 bg-white text-[#16143E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF1313] mb-3 font-display">
                <span className="w-4 h-px bg-[#EF1313]" /> The Broadnet Protocol <span className="w-4 h-px bg-[#EF1313]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight font-display mb-4">
                How We Deliver Structured Networking
              </h2>
              <p className="text-[#16143E]/65 text-base sm:text-lg leading-relaxed">
                Every cabling drop is executed by certified in-house network engineers—never outsourced. Here is our 4-step execution protocol:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {WORKFLOW.map((w) => (
                <div
                  key={w.step}
                  className="p-7 rounded-3xl bg-[#F8F9FD] border border-[#16143E]/8 relative group hover:border-[#EF1313]/30 transition-all duration-300"
                >
                  <span className="text-3xl font-bold text-[#EF1313]/25 group-hover:text-[#EF1313] transition-colors font-display block mb-4">
                    {w.step}
                  </span>
                  <h3 className="text-lg font-bold text-[#16143E] mb-3 font-display">{w.title}</h3>
                  <p className="text-xs sm:text-sm text-[#16143E]/65 leading-relaxed font-body">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Client Testimonials */}
        <section className="py-20 bg-[#F8F9FD] border-t border-[#16143E]/8 text-[#16143E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4E0DBA] mb-3 font-display">
                <span className="w-4 h-px bg-[#4E0DBA]" /> Commercial Track Record <span className="w-4 h-px bg-[#4E0DBA]" />
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#16143E] font-display mb-4">
                What Our Networking Clients in Chennai Say
              </h2>
              <div className="flex items-center justify-center gap-1 text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#F59E0B]" />
                ))}
                <span className="text-xs font-bold text-[#16143E] ml-2">4.9 / 5.0 Average Rating</span>
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

        {/* 8. FAQs */}
        <section className="py-20 bg-white text-[#16143E]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF1313] mb-3 font-display">
                <HelpCircle size={14} className="text-[#EF1313]" /> Common Questions
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#16143E] font-display">
                Frequently Asked Questions About Network Setup
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

        {/* 9. Complementary Solutions */}
        <RelatedSolutions currentKey="networking" />

        {/* 10. Enquiry Section */}
        <div id="enquiry">
          <EnquirySection initialService="Structured Cabling & Networking" initialType="security" />
        </div>
      </main>
      <Footer />
    </>
  );
}
