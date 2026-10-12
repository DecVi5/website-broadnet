import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquirySection from "@/components/EnquirySection";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedSolutions from "@/components/RelatedSolutions";
import HardwareGallery from "@/components/HardwareGallery";
import {
  Shield,
  Camera,
  CheckCircle2,
  Clock,
  Phone,
  MessageCircle,
  ArrowRight,
  Eye,
  HardDrive,
  Smartphone,
  CloudRain,
  Cpu,
  BadgeCheck,
  Star,
  Quote,
  HelpCircle,
  Building,
  Home,
  Store,
  Layers,
  Sparkles,
  Server,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "CCTV Camera Installation in Avadi, Chennai | CP PLUS & Hikvision HD/4K Systems",
  description:
    "Official CP PLUS & Hikvision certified CCTV camera installation in Avadi. Complete 4-camera kits from ₹8,499, enterprise IP solutions with no upper ceiling. 2-hour technician dispatch, professional site inspection.",
  keywords: [
    "CCTV installation Avadi",
    "Hikvision CCTV dealer Chennai",
    "CP PLUS camera Avadi",
    "home security cameras Avadi",
    "commercial CCTV installation Chennai",
    "4K IP camera Avadi",
    "CCTV repair and AMC Avadi",
  ],
  alternates: {
    canonical: "https://www.broadnet.in/security/cameras",
  },
  openGraph: {
    title: "CCTV Camera Installation & Services in Avadi | Broadnet",
    description:
      "24/7 HD & 4K CCTV surveillance systems. Professional site survey, concealed conduit wiring, mobile live monitoring, and 2-hour local technician dispatch in Avadi.",
    url: "https://www.broadnet.in/security/cameras",
  },
};

import PackageCard from "@/components/PackageCard";
import NightVisionComparisonSlider from "@/components/NightVisionComparisonSlider";
import { CCTV_PACKAGES } from "@/data/site";

const WHAT_IS_IT_POINTS = [
  {
    icon: Camera,
    title: "High-Definition Optical Sensors",
    desc: "From 2MP Full-HD to 8MP 4K resolution lenses equipped with Wide Dynamic Range (WDR) and ColorVu apertures that capture vivid color in low light.",
  },
  {
    icon: HardDrive,
    title: "Dedicated Surveillance Storage (DVR/NVR)",
    desc: "Engineered with Western Digital Purple or Seagate SkyHawk hard drives designed specifically for continuous 24/7/365 read-write video loops.",
  },
  {
    icon: Cpu,
    title: "AI AcuSense Motion Analytics",
    desc: "Smart onboard deep-learning algorithms classify human targets and vehicles, eliminating 95% of false alarms caused by rain, wind, or animals.",
  },
  {
    icon: Smartphone,
    title: "Encrypted Mobile Cloud Streaming",
    desc: "Secure remote gateways enable sub-second live video feeds and recorded playback on iPhone, Android, and PC software anywhere in the world.",
  },
];

const WHO_IS_IT_FOR = [
  {
    icon: Home,
    title: "Independent Villas & Homes",
    tag: "Residential",
    desc: "Protect perimeter boundary walls, main entrances, and parking ports. Monitor children playing, senior parents, and courier deliveries with crystal-clear audio.",
    benefits: ["Main gate & driveway monitoring", "Night-time boundary protection", "Mobile live viewing for working couples"],
  },
  {
    icon: Building,
    title: "Apartment Complexes & RWAs",
    tag: "Societies",
    desc: "Centralized surveillance for staircases, lift lobbies, basements, and entry boom barriers. High-capacity NVRs with long retention loops.",
    benefits: ["Multi-channel NVR recording racks", "Vehicle number plate tracking", "Shared security guard booth console"],
  },
  {
    icon: Store,
    title: "Retail Shops & Supermarkets",
    tag: "Commercial",
    desc: "Prevent inventory shrinkage, monitor cash billing counters with high-definition optical clarity, and ensure customer satisfaction across all aisles.",
    benefits: ["Cash counter high-zoom focus", "Shutter break-in deterrence", "Employee shift time oversight"],
  },
  {
    icon: Layers,
    title: "Factories & Warehouses",
    tag: "Industrial",
    desc: "Multi-acre perimeter coverage with optical fiber backhauls, 360° PTZ tracking speed domes, and heavy-duty IP67 weatherproof enclosures.",
    benefits: ["No upper ceiling camera scaling", "Long-distance fiber optic networking", "Perimeter tripwire breach alarms"],
  },
];

const HARDWARE_GALLERY_ITEMS = [
  {
    title: "CP PLUS / Hikvision Dome Camera",
    category: "Indoor Surveillance",
    description: "Compact, vandal-resistant dome housing ideal for living rooms, retail aisles, and office ceilings with wide-angle coverage.",
    imageSrc: "/assets/dome_camera_clean.png",
    specs: ["1080p to 4K Ultra HD", "Built-in Microphone for Audio", "30m Smart Infrared Range"],
    status: "In Stock",
  },
  {
    title: "Full-Color ColorVu Bullet Camera",
    category: "Outdoor Perimeter",
    description: "Heavy-duty metal bullet camera engineered for outdoor boundary walls, driveways, and gates with 24/7 vivid color night vision.",
    imageSrc: "/assets/colorvu-night-vision.jpg",
    specs: ["F1.0 Super Aperture", "IP67 Weatherproof Rating", "Active White Light Warning"],
    status: "In Stock",
  },
  {
    title: "Traditional IR Night Vision",
    category: "Infrared Comparison",
    description: "Standard infrared surveillance sensor offering dependable monochrome nighttime coverage for budget-conscious properties.",
    imageSrc: "/assets/traditional-ir-night-vision.jpg",
    specs: ["Monochrome Infrared Night Mode", "Smart IR Anti-Overexposure", "Cost-Effective Security"],
    status: "Available",
  },
  {
    title: "Enterprise 16/32-Channel NVR Rack",
    category: "Central Storage",
    description: "Commercial network video recording hub with multi-terabyte surveillance HDDs, HDMI 4K output, and gigabit POE switches.",
    specs: ["Up to 32TB Storage Capacity", "Continuous 30-Day Backup Loop", "Dual Gigabit LAN Ports"],
    status: "Ready Stock",
  },
  {
    title: "360° Optical PTZ Speed Dome",
    category: "Industrial & Campus",
    description: "Motorized pan-tilt-zoom camera with 25x optical zoom and auto-tracking capabilities for expansive factory yards and parking lots.",
    specs: ["25x Optical Zoom Precision", "360° Continuous High-Speed Pan", "Smart Auto-Tracking AI"],
    status: "Custom Order",
  },
  {
    title: "Concealed Conduit Cabling Setup",
    category: "Installation Finish",
    description: "Heavy-duty PVC conduit routing preserving building architectural aesthetics with zero exposed or dangling cables.",
    specs: ["100% Concealed PVC Conduits", "Rodent-Proof & Weather-Shielded", "Clean Aesthetic Handover"],
    status: "Standard SLA",
  },
];

const WORKFLOW = [
  {
    step: "01",
    title: "Site Survey & Blind-Spot Audit",
    desc: "Our certified security engineer visits your property in Avadi to map entry points, lighting conditions, and eliminate all camera blind spots.",
  },
  {
    step: "02",
    title: "Concealed Conduit Cabling",
    desc: "We route cables through heavy-duty concealed PVC conduits to protect against tampering, rodents, and weather without damaging your walls.",
  },
  {
    step: "03",
    title: "DVR/NVR & Surveillance Storage",
    desc: "We configure certified CP PLUS or Hikvision recording units with surveillance-rated hard drives for uninterrupted 24/7 video recording loops.",
  },
  {
    step: "04",
    title: "Mobile App Sync & Handover",
    desc: "We configure encrypted live monitoring on your iPhone, Android, and laptops, conduct staff/family training, and issue your 2-year warranty certificate.",
  },
];

const REVIEWS = [
  {
    quote:
      "BroadNet handled our entire 48-flat apartment complex surveillance. The conduit work was completely concealed without damaging building aesthetics. When a camera angle needed adjustment, their technician arrived within 90 minutes. That local SLA makes all the difference.",
    author: "K. Senthil Nathan",
    role: "President, Residents Welfare Association",
    location: "Kaveri Nagar, Avadi",
    system: "16-Camera Hikvision 4K IP Network",
  },
  {
    quote:
      "We run a retail grocery supermarket on MTH Road. BroadNet installed 8 CP PLUS cameras covering all cash counters and aisles. The mobile app lets me monitor everything clearly in real-time even when I am travelling for stock purchases.",
    author: "B. Sundaram",
    role: "Proprietor, Sundaram Supermarket",
    location: "MTH Road, Avadi",
    system: "8-Camera CP PLUS 1080p Kit",
  },
  {
    quote:
      "After a burglary incident in our neighborhood, we needed security urgently. BroadNet completed the site inspection and installed 4 ColorVu cameras the very next afternoon. Crisp night color clarity and superb customer care.",
    author: "R. Meenakshi",
    role: "Villa Homeowner",
    location: "TNHB Colony, Avadi",
    system: "4-Camera Hikvision ColorVu System",
  },
];

const FAQS = [
  {
    q: "Do you offer on-site inspections in Avadi?",
    a: "Yes! We provide on-site inspections across Avadi, Thirumullaivoyal, Ambattur, Pattabiram, Poonamallee, and surrounding areas. Our engineer assesses your premises, identifies blind spots, and provides an itemized quotation with zero obligation.",
  },
  {
    q: "Can I view my CCTV cameras on my smartphone when I am away from home?",
    a: "Absolutely. We set up official mobile applications (gCMOB for CP PLUS, Hik-Connect for Hikvision) on your iPhone, Android phone, tablet, and PC. As long as your DVR/NVR is connected to the internet, you can stream live footage and playback recordings from anywhere in the world.",
  },
  {
    q: "What happens if our home internet is down? Do the cameras still record?",
    a: "Yes. All our CCTV systems record continuously to the on-site DVR/NVR surveillance hard disk 24 hours a day, 7 days a week, regardless of internet connectivity. Internet is only required when you want to view live feeds remotely on your mobile phone.",
  },
  {
    q: "Why do you emphasize 'No Upper Ceiling' for packages?",
    a: "Whether you need a simple 2-camera setup for an independent home or an enterprise 128-camera industrial network spanning multiple factory sheds with optical fiber backhauls and license plate recognition, Broadnet has certified engineering capacity to design and execute any scale without limits.",
  },
  {
    q: "What is your warranty and maintenance support in Avadi?",
    a: "All equipment comes with 2 years manufacturer replacement warranty. Because our engineering hub is located right at Fire Station Road, Avadi, our dispatch team provides guaranteed on-site service support with emergency response under 2 hours.",
  },
];

import { getCctvPackagesJsonLd, getFaqPageJsonLd } from "@/lib/jsonLd";

export default function CamerasPage() {
  const packagesJsonLd = getCctvPackagesJsonLd();
  const faqJsonLd = getFaqPageJsonLd(FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(packagesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
                items={[
                  { label: "Security Solutions", href: "/security" },
                  { label: "CCTV Cameras" },
                ]}
                variant="light"
              />
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Heading & Details */}
              <div className="lg:col-span-7">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#16143E] leading-[1.12] font-display tracking-tight mb-6">
                  Ensure Security.
                  <br />
                  <span className="text-gradient">24/7 Ultra-HD & 4K CCTV Surveillance.</span>
                </h1>

                <p className="text-[#16143E]/70 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-7 max-w-2xl font-body">
                  High-definition surveillance engineered for independent villas, gated apartment communities, retail shops, and commercial factories across Avadi &amp; Chennai. Full-color night vision, concealed conduit wiring, and live smartphone monitoring.
                </p>

                {/* 4 Key Points: Square Boxed In Line */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 mb-7 sm:mb-8">
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#EF1313]/30 hover:shadow-md transition-all flex flex-col items-start group">
                    <div className="w-10 h-10 rounded-xl bg-[#EF1313]/10 text-[#EF1313] flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                      <Eye size={19} />
                    </div>
                    <div className="text-xs sm:text-[13px] font-bold text-[#16143E] font-display leading-tight truncate w-full">
                      1080p to 4K
                    </div>
                    <div className="text-[11px] sm:text-xs text-[#16143E]/60 mt-1 leading-tight font-body truncate w-full">
                      ColorVu Night Vision
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#4E0DBA]/30 hover:shadow-md transition-all flex flex-col items-start group">
                    <div className="w-10 h-10 rounded-xl bg-[#4E0DBA]/10 text-[#4E0DBA] flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                      <HardDrive size={19} />
                    </div>
                    <div className="text-xs sm:text-[13px] font-bold text-[#16143E] font-display leading-tight truncate w-full">
                      24/7 HDD
                    </div>
                    <div className="text-[11px] sm:text-xs text-[#16143E]/60 mt-1 leading-tight font-body truncate w-full">
                      Surveillance Storage
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-emerald-500/30 hover:shadow-md transition-all flex flex-col items-start group">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                      <Layers size={19} />
                    </div>
                    <div className="text-xs sm:text-[13px] font-bold text-[#16143E] font-display leading-tight truncate w-full">
                      100% Concealed
                    </div>
                    <div className="text-[11px] sm:text-xs text-[#16143E]/60 mt-1 leading-tight font-body truncate w-full">
                      Conduit Cabling
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-500/30 hover:shadow-md transition-all flex flex-col items-start group">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                      <Shield size={19} />
                    </div>
                    <div className="text-xs sm:text-[13px] font-bold text-[#16143E] font-display leading-tight truncate w-full">
                      2-Year Warranty
                    </div>
                    <div className="text-[11px] sm:text-xs text-[#16143E]/60 mt-1 leading-tight font-body truncate w-full">
                      On-Site Hardware
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#packages"
                    className="btn-crimson flex items-center gap-2 text-sm font-bold shadow-lg shadow-[#EF1313]/25 hover:shadow-xl hover:shadow-[#EF1313]/35 transition-all"
                  >
                    <span>View Camera Packages</span>
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href="https://wa.me/918681888111?text=Hi%20Broadnet,%20I%20am%20looking%20for%20CCTV%20Camera%20installation%20in%20Avadi.%20Please%20share%20a%20quotation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-sm transition-all shadow-md shadow-emerald-500/20 hover:shadow-lg"
                  >
                    <MessageCircle size={16} className="fill-white" />
                    <span>WhatsApp Quote</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean CCTV Hardware Showcase */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm sm:max-w-md">
                  {/* Decorative Frame */}
                  <div className="relative bg-gradient-to-b from-white via-slate-50/50 to-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(22,20,62,0.06)] overflow-hidden flex flex-col items-center justify-center">
                    {/* Ambient Aura Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-[#EF1313]/15 via-[#4E0DBA]/10 to-transparent blur-3xl rounded-full pointer-events-none" />

                    {/* Genuine Camera Hardware Image */}
                    <div className="relative z-10 w-full flex items-center justify-center py-4">
                      <Image
                        src="/assets/realistic_cctv.png"
                        alt="Ultra-HD 4K CCTV Camera Hardware"
                        width={320}
                        height={320}
                        className="object-contain drop-shadow-[0_20px_35px_rgba(22,20,62,0.18)] hover:scale-105 transition-transform duration-500 max-h-[300px] w-auto"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. "What is it" Section (Architecture & Technology Overview) */}
        <section className="py-20 sm:py-24 bg-white text-[#16143E] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF1313] mb-3 font-display">
                <span className="w-4 h-px bg-[#EF1313]" /> Architecture & Technology <span className="w-4 h-px bg-[#EF1313]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight font-display mb-4">
                What is a Modern CCTV Surveillance System?
              </h2>
              <p className="text-[#16143E]/65 text-base sm:text-lg leading-relaxed">
                Modern electronic video surveillance is far more than a simple camera on the wall. It is an integrated security ecosystem combining precision optics, dedicated continuous storage, edge AI motion filtering, and low-latency cloud gateways:
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
                <span className="w-4 h-px bg-[#4E0DBA]" /> Tailored Scenarios <span className="w-4 h-px bg-[#4E0DBA]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight font-display mb-4">
                Who is Professional CCTV For?
              </h2>
              <p className="text-[#16143E]/65 text-base sm:text-lg leading-relaxed">
                Whether protecting a single-family home or securing an industrial manufacturing campus, our installations are custom engineered for your specific operational scale:
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
          sectionSubtitle="Visual Hardware Gallery"
          sectionTitle="Official CP PLUS & Hikvision Hardware Showcase"
          sectionDescription="Take a close look at our high-grade optical cameras, continuous recording NVR racks, and precision conduit installations across Avadi."
          items={HARDWARE_GALLERY_ITEMS}
          theme="light"
        />

        {/* Interactive Night Vision vs ColorVu 4K Split Comparison Slider */}
        <NightVisionComparisonSlider />

        {/* Relevance to Modern Security Challenges */}
        <section className="py-20 sm:py-24 bg-white text-[#16143E] relative overflow-hidden border-t border-[#16143E]/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF1313] mb-3 font-display">
                <span className="w-4 h-px bg-[#EF1313]" /> The Modern Security Reality <span className="w-4 h-px bg-[#EF1313]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight font-display mb-4">
                Why Professional CCTV Is Essential in Today&apos;s Environment
              </h2>
              <p className="text-[#16143E]/65 text-base sm:text-lg leading-relaxed">
                As residential neighborhoods expand and commercial activity intensifies in Chennai and Avadi, unmonitored boundaries create unnecessary vulnerability. Here is why an active surveillance network is the primary line of defense:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Active Deterrence of Trespassing",
                  desc: "Visible, professionally positioned CCTV bullet cameras deter over 85% of opportunistic property trespassing, vehicle tampering, and boundary breaches before they occur.",
                },
                {
                  icon: Smartphone,
                  title: "Real-Time Peace of Mind While Away",
                  desc: "Working couples and frequent travelers can instantly check live feeds of elderly parents, children arriving from school, or pets with crystal-clear audio and zero lag.",
                },
                {
                  icon: Eye,
                  title: "24/7 ColorVu Night Vision Evidence",
                  desc: "Most security incidents occur under low light. Unlike older grainy black-and-white cameras, our ColorVu sensors record vivid, full-color footage with readable facial features and vehicle license plates.",
                },
                {
                  icon: Store,
                  title: "Commercial Cash Counter & Inventory Oversight",
                  desc: "Retail shops, clinics, and offices eliminate cash discrepancies, unauthorized employee shrinkage, and customer dispute confusion with high-angle HD cameras.",
                },
                {
                  icon: Cpu,
                  title: "AI Human & Vehicle Motion Filtering",
                  desc: "Forget spam alerts caused by stray animals, tree branches, or wind. Smart AcuSense AI filters movement to notify your phone only when an actual person or vehicle crosses your perimeter.",
                },
                {
                  icon: HardDrive,
                  title: "Legally Admissible High-Definition Evidence",
                  desc: "Surveillance-grade continuous recording ensures tamper-free timestamped footage, critical for police FIR reports, insurance claims, and legal documentation.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-7 rounded-3xl bg-[#F8F9FD] border border-[#16143E]/8 hover:border-[#EF1313]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#16143E]/5 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#EF1313]/10 text-[#EF1313] flex items-center justify-center mb-5 group-hover:bg-[#EF1313] group-hover:text-white transition-colors">
                    <item.icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-[#16143E] mb-3 font-display">{item.title}</h3>
                  <p className="text-[#16143E]/65 text-sm leading-relaxed font-body">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. "Price" Section (Packages & Transparent Tiers) */}
        <section id="packages" className="py-20 sm:py-28 bg-[#0B091E] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF1313] mb-3 font-display">
                <span className="w-4 h-px bg-[#EF1313]" /> Transparent Packages <span className="w-4 h-px bg-[#EF1313]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display mb-4">
                Tailored CCTV Packages For Every Budget
              </h2>
              <p className="text-white/65 text-base sm:text-lg leading-relaxed">
                Starting from single-camera additions to high-density commercial campuses with <strong>no upper ceiling</strong>. We customize cable lengths, hard disk capacities, and camera counts to match your exact premises.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {CCTV_PACKAGES.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} variant="dark" />
              ))}
            </div>

            {/* Scope / No Upper Ceiling Banner */}
            <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 max-w-4xl mx-auto text-center">
              <h4 className="text-lg font-bold text-white mb-2 font-display">
                Need a Custom Configuration or Enterprise Quote?
              </h4>
              <p className="text-xs sm:text-sm text-white/65 max-w-2xl mx-auto mb-5 leading-relaxed">
                We handle industrial complexes, multi-acre warehouses, schools, and apartment associations requiring 16 to 128+ cameras, optical fiber media converters, and continuous NVR storage racks.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#quote-form"
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

        {/* How We Deliver the Service (Workflow) */}
        <section className="py-20 sm:py-24 bg-white text-[#16143E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF1313] mb-3 font-display">
                <span className="w-4 h-px bg-[#EF1313]" /> The Broadnet Standard <span className="w-4 h-px bg-[#EF1313]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight font-display mb-4">
                How We Deliver CCTV Installation
              </h2>
              <p className="text-[#16143E]/65 text-base sm:text-lg leading-relaxed">
                Every installation is executed by certified in-house technicians—never subcontracted out. Here is what our 4-step installation protocol looks like:
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

        {/* Client Testimonials */}
        <section className="py-20 bg-[#F8F9FD] border-t border-[#16143E]/8 text-[#16143E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4E0DBA] mb-3 font-display">
                <span className="w-4 h-px bg-[#4E0DBA]" /> Verified Social Proof <span className="w-4 h-px bg-[#4E0DBA]" />
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#16143E] font-display mb-4">
                What Our Surveillance Clients in Avadi Say
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

        {/* FAQs */}
        <section className="py-20 bg-white text-[#16143E]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF1313] mb-3 font-display">
                <HelpCircle size={14} className="text-[#EF1313]" /> Common Questions
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#16143E] font-display">
                Frequently Asked Questions About CCTV Setup
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

        {/* Complementary Solutions */}
        <RelatedSolutions currentKey="cameras" />

        {/* 6. "Enquiry" Section */}
        <div id="quote-form">
          <EnquirySection initialService="CCTV Installation & Services" initialType="security" />
        </div>
      </main>
      <Footer />
    </>
  );
}
