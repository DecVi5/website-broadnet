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
  Zap,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowRight,
  Eye,
  Smartphone,
  Lock,
  BadgeCheck,
  Star,
  Quote,
  HelpCircle,
  Home,
  Bell,
  Camera,
  Building,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Video Door Phone Installation in Avadi, Chennai | Smart Video Doorbells & Intercom",
  description:
    "Official CP PLUS & Hikvision video door phone (VDP) systems in Avadi. 7-inch touch monitors from ₹3,999, electronic lock integration, mobile app live viewing, and 2-hour technician dispatch.",
  keywords: [
    "video door phone installation Avadi",
    "smart video doorbell Chennai",
    "CP PLUS video door phone price",
    "Hikvision video intercom Avadi",
    "door camera with screen Chennai",
    "apartment intercom system Avadi",
  ],
  alternates: {
    canonical: "https://www.broadnet.in/security/door-phones",
  },
  openGraph: {
    title: "Smart Video Door Phone & Intercom Installation in Avadi | Broadnet",
    description:
      "Screen visitors, speak with delivery personnel, and unlock gates remotely with certified video door phone systems in Avadi.",
    url: "https://www.broadnet.in/security/door-phones",
  },
};

const WHAT_IS_IT_POINTS = [
  {
    icon: Bell,
    title: "All-Weather Outdoor Camera Bell",
    desc: "IP65 weatherproof outdoor panel with wide-angle HD camera, infrared night vision, and tamper-resistant metallic enclosure.",
  },
  {
    icon: Eye,
    title: "7-Inch Indoor Color Display Console",
    desc: "Crystal-clear capacitive indoor screen displaying high-resolution live video feeds with hands-free crystal audio communication.",
  },
  {
    icon: Lock,
    title: "Electronic Gate Lock Release Relay",
    desc: "Direct integration with electromagnetic door latches or motorized gate drops, allowing one-touch unlocking from the screen or phone.",
  },
  {
    icon: Smartphone,
    title: "Smart Wi-Fi Mobile Bridge",
    desc: "Streams incoming doorbell rings directly to family smartphones (iOS & Android) with two-way voice and remote gate release.",
  },
];

const WHO_IS_IT_FOR = [
  {
    icon: Home,
    title: "Independent Villas & Duplexes",
    tag: "Residential",
    desc: "Answer the front gate from upstairs bedrooms or the ground living room without running down the stairs. Multi-monitor setups supported.",
    benefits: ["Multi-floor sub-monitor intercom", "Remote gate release button", "Zero staircase rush for deliveries"],
  },
  {
    icon: Users,
    title: "Families with Seniors & Kids",
    tag: "Family Safety",
    desc: "Ensures elderly parents and children at home alone can clearly see and talk to callers before deciding whether to unlock the door.",
    benefits: ["Large easy-to-see 7-inch display", "No opening door to strangers", "Clear two-way audio speakerphone"],
  },
  {
    icon: Smartphone,
    title: "Working Professionals",
    tag: "Remote Control",
    desc: "Receive doorbell video calls directly on your phone at work. Instruct courier agents to leave parcels securely inside your gate.",
    benefits: ["Real-time phone alerts with video", "Two-way talkback anywhere in Chennai", "Timestamped visitor snapshot log"],
  },
  {
    icon: Building,
    title: "Apartments & Gated Societies",
    tag: "Housing RWAs",
    desc: "Multi-dwelling entrance panels connecting guard security cabins with individual flats via high-durability internal riser cabling.",
    benefits: ["Guard booth direct intercom", "Multi-apartment digital keypad", "Quarterly preventive maintenance AMC"],
  },
];

const HARDWARE_GALLERY_ITEMS = [
  {
    title: "7-Inch HD Color Touch Console",
    category: "Indoor Monitor",
    description: "Slim capacitive touchscreen unit with hands-free intercom audio, visitor snapshot memory, and electronic lock trigger.",
    specs: ["7-Inch 1024x600 Color Screen", "Internal Snapshot Photo Storage", "Multi-Monitor Cascading Support"],
    status: "Ready Stock",
  },
  {
    title: "IP65 Weatherproof Outdoor Bell",
    category: "Outdoor Unit",
    description: "Vandal-resistant aluminum alloy doorbell unit with wide-angle night vision lens and backlit call button.",
    specs: ["1080p HD Wide-Angle Lens", "Infrared Night Vision up to 5m", "IP65 Rain & Dust Proof"],
    status: "In Stock",
  },
  {
    title: "Electronic Rim / Drop-Bolt Gate Lock",
    category: "Access Hardware",
    description: "Heavy-duty electromagnetic lock for main entrance gates and wooden doors, releasing instantly via screen or phone.",
    specs: ["500kg Holding Force", "Fail-Secure / Fail-Safe Options", "Stainless Steel Mechanism"],
    status: "Ready Stock",
  },
  {
    title: "Smart Wi-Fi Video Doorbell",
    category: "Wireless Solution",
    description: "Battery or wired Wi-Fi doorbell with PIR human motion detection and instant chime synchronization for modern flats.",
    specs: ["1080p Crystal HD Optics", "Two-Way Audio Talk-Back", "MicroSD Local Recording"],
    status: "In Stock",
  },
  {
    title: "Multi-Tenant Digital Entrance Panel",
    category: "Apartment Societies",
    description: "Rugged keypad entrance station with RFID keycard reader, guard intercom link, and tenant directory for multi-flat communities.",
    specs: ["Numeric Keypad & RFID Reader", "Up to 500 Flat Extensions", "Guard Security Cabin Link"],
    status: "Custom SLA",
  },
  {
    title: "Concealed Conduit Cabling & Power",
    category: "Installation Finish",
    description: "Concealed 4-core / CAT6 wiring and dedicated power supply with surge protection preserving home wall aesthetics.",
    specs: ["100% Concealed Wiring", "Surge-Protected Power Supply", "2-Year On-Site SLA"],
    status: "Standard SLA",
  },
];

const PACKAGES = [
  {
    name: "Smart Wi-Fi Video Doorbell",
    tagline: "Wireless smartphone doorbell for flats & apartments with existing chime",
    price: "₹2,499",
    unit: "standalone unit with setup",
    badge: "Compact Setup",
    popular: false,
    features: [
      "1080p Full HD Wide-Angle Door Camera",
      "Infrared Night Vision up to 5 meters",
      "Two-way Real-Time Voice Talk-Back",
      "Instant push alerts on iPhone & Android",
      "MicroSD slot for visitor video playback",
      "1-Year On-Site Hardware Warranty",
    ],
    ctaText: "Book Smart Doorbell",
  },
  {
    name: "Classic 7-Inch HD VDP Kit",
    tagline: "The quintessential wired video door phone for independent houses and villas",
    price: "₹3,999",
    unit: "indoor display + outdoor camera kit",
    badge: "Most Popular",
    popular: true,
    features: [
      "7-Inch High-Clarity Color Indoor Monitor",
      "All-Weather Metal Outdoor Camera Bell Unit",
      "One-Touch Electronic Door Latch Unlock",
      "Hands-Free Crystal Clear Two-Way Audio",
      "Concealed wiring & professional wall mounting",
      "Tamper detection alarm on outdoor bell unit",
      "2-Year On-Site Manufacturer Warranty",
    ],
    ctaText: "Order 7-Inch VDP Kit",
  },
  {
    name: "Smart Wi-Fi Connected Touch VDP",
    tagline: "Answer visitors and release front door locks directly from your smartphone",
    price: "₹7,999",
    unit: "smart touchscreen system",
    badge: "Mobile Unlocking",
    popular: false,
    features: [
      "7-Inch Capacitive Touchscreen Indoor Console",
      "Hikvision / CP PLUS HD Night Vision Camera",
      "Answer visitors on smartphone anywhere in the world",
      "Remote Electronic Gate Unlock via Mobile App",
      "Automated visitor snapshot memory (up to 1000 photos)",
      "Multi-monitor support for ground & first floors",
      "Priority 2-Hour SLA Local Technician Support",
    ],
    ctaText: "Book Smart Touch VDP",
  },
  {
    name: "Multi-Apartment Intercom Network",
    tagline: "Complete multi-dwelling intercom system for housing societies & RWAs",
    price: "Custom Quote",
    unit: "No Upper Ceiling — 8 to 500+ Flats",
    badge: "Apartment Societies",
    popular: false,
    features: [
      "Multi-Button or Digital Keypad Entrance Bell Panel",
      "Dedicated Security Guard Booth Console with Direct Call",
      "Intercom calling between residents without telecom bills",
      "Boom barrier & pedestrian turnstile integration",
      "Lightning surge protection & durable internal riser wiring",
      "Quarterly preventive maintenance AMC options",
      "Dedicated technician support within 90 minutes",
    ],
    ctaText: "Request Society Survey",
  },
];

const REVIEWS = [
  {
    quote:
      "We installed the CP PLUS video door phone for our villa in TNHB Avadi. When children or elderly parents are home alone, they can clearly see and speak to delivery personnel before unlocking the door. Truly essential security.",
    author: "R. Anand",
    role: "Villa Homeowner",
    location: "TNHB Colony, Avadi",
    system: "7-Inch Smart VDP with Electronic Gate Lock",
  },
  {
    quote:
      "BroadNet set up the multi-station entrance intercom for our 24-unit apartment building in Kaveri Nagar. Visitors now buzz the specific flat directly or check in with the guard cabin. The cabling was hidden neatly inside risers.",
    author: "G. Murugesan",
    role: "Secretary, Green Meadows Apartments",
    location: "Kaveri Nagar, Avadi",
    system: "24-Flat Building Intercom System",
  },
  {
    quote:
      "The mobile app feature is a lifesaver. When courier packages arrive and I am at my office in Ambattur, I can see the delivery agent, speak to him through my phone, and ask him to leave the parcel inside the gate.",
    author: "S. Swaminathan",
    role: "IT Professional",
    location: "JB Nagar, Avadi",
    system: "Smart Wi-Fi Touch VDP",
  },
];

const FAQS = [
  {
    q: "Can a video door phone unlock my existing main gate or door?",
    a: "Yes! We integrate an electronic strike lock or electromagnetic drop-bolt with your existing gate or front door. Pressing the 'Unlock' button on your indoor 7-inch monitor or your smartphone instantly releases the gate latch.",
  },
  {
    q: "Can I install an additional monitor on the first floor?",
    a: "Yes. Our systems support multi-monitor setups. You can have a master monitor on the ground floor and sub-monitors in the first-floor bedroom or kitchen, allowing anyone in the house to answer and unlock the door without running downstairs.",
  },
  {
    q: "Does the outdoor doorbell work during rain and harsh weather?",
    a: "All outdoor camera panels we install are IP65/IP66 weatherproof rated with specialized rain hoods and anti-corrosion metal housing engineered to withstand Chennai heat and monsoon rains.",
  },
  {
    q: "How does the system record who visited while we were away?",
    a: "Our smart VDP units automatically snap a timestamped photo of anyone who rings your doorbell and store it in internal memory. When you return home, you can review the visitor log directly on the display screen or phone app.",
  },
];

export default function DoorPhonesPage() {
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
            <div className="absolute top-1/4 -right-20 w-[550px] h-[450px] bg-purple-100/40 blur-[140px] rounded-full" />
            <div className="absolute bottom-10 left-10 w-[500px] h-[400px] bg-red-100/50 blur-[150px] rounded-full" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb Navigation */}
            <div className="mb-6">
              <Breadcrumbs
                items={[
                  { label: "Security Solutions", href: "/security" },
                  { label: "Video Door Phones" },
                ]}
                variant="light"
              />
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2.5 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#4E0DBA]/10 text-[#4E0DBA] border border-[#4E0DBA]/25 shadow-2xs">
                    <BadgeCheck size={14} className="text-[#4E0DBA]" />
                    Official CP PLUS & Hikvision Partner
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
                  See Who&apos;s Outside.
                  <br />
                  <span className="text-gradient">Smart Video Door Phones &amp; Intercoms.</span>
                </h1>

                <p className="text-[#16143E]/70 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl font-body">
                  Screen callers, speak with courier delivery agents, and remotely release electronic gate locks without ever opening your door to strangers. Installed across Avadi with concealed wiring and a 2-year warranty.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "7-Inch High-Clarity Touch Monitor",
                    "Infrared Night Vision Door Camera",
                    "Remote Electronic Gate Latch Unlock",
                    "Mobile Phone Answering on iOS & Android",
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
                    <span>View VDP Packages</span>
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href="https://wa.me/918681888111?text=Hi%20Broadnet,%20I%20am%20interested%20in%20a%20Video%20Door%20Phone%20system%20for%20my%20house%20in%20Avadi.%20Please%20share%20pricing."
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
                  {/* Decorative Card Frame */}
                  <div className="relative bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(22,20,62,0.08)] overflow-hidden ring-1 ring-slate-900/[0.04]">
                    {/* Subtle corner aura */}
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-[#4E0DBA]/10 to-[#EF1313]/10 blur-3xl rounded-full pointer-events-none" />

                    <div className="relative z-10">
                      {/* Card Header */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#4E0DBA]">
                          Smart Entrance Security
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/80 inline-flex items-center gap-1.5 shadow-2xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Ready Stock in Avadi
                        </span>
                      </div>

                      {/* Hardware Specification Card */}
                      <div className="my-4 p-5 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/80 border border-slate-200/90 space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center text-[#4E0DBA] flex-shrink-0">
                            <Zap size={22} strokeWidth={2} />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-[#16143E] font-display">
                              7&quot; HD Color Intercom Console
                            </div>
                            <div className="text-xs text-[#16143E]/60">
                              Touchscreen control with electronic door unlock
                            </div>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-200/60 space-y-1.5 text-xs text-[#16143E]/80">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4E0DBA]" />
                            <span>Full-Duplex 2-Way Handsfree HD Audio Intercom</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4E0DBA]" />
                            <span>1-Tap Remote Electromagnetic Door Latch Release</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4E0DBA]" />
                            <span>Automatic Visitor Snapshot Recording to SD Card</span>
                          </div>
                        </div>
                      </div>

                      {/* Hardware Specs & Pricing */}
                      <div className="pt-4 border-t border-slate-100 mb-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h2 className="text-[#16143E] font-bold text-lg">CP PLUS &amp; Hikvision VDP</h2>
                            <p className="text-xs text-[#16143E]/55">Complete Indoor &amp; Outdoor Kit</p>
                          </div>
                          <span className="text-sm font-bold text-[#EF1313] bg-red-50 border border-red-200/90 px-3 py-1.5 rounded-lg shadow-2xs">
                            Starts ₹3,999
                          </span>
                        </div>
                      </div>

                      {/* Prominent Use Case Tag */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#16143E]/50">
                          Primary Use Case
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-[#16143E] border border-slate-200/80 shadow-2xs">
                          <Home size={12} className="text-[#4E0DBA]" />
                          Independent Villas &amp; Homes
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Trust Float Badge */}
                  <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl px-4 py-3 shadow-[0_12px_30px_rgba(22,20,62,0.12)] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#4E0DBA]/10 border border-[#4E0DBA]/20 flex items-center justify-center text-[#4E0DBA] flex-shrink-0">
                      <Lock size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#16143E]">Electric Latch Ready</div>
                      <div className="text-[11px] text-[#16143E]/55">One-touch gate unlock from indoor screen</div>
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
                What is a Smart Video Door Phone System?
              </h2>
              <p className="text-[#16143E]/65 text-base sm:text-lg leading-relaxed">
                A video door phone acts as your home&apos;s intelligent front gateway. It synchronizes an exterior camera-equipped calling bell with crystal-clear indoor touchscreens, electronic gate latches, and your mobile device:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
              {WHAT_IS_IT_POINTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-7 rounded-3xl bg-[#F8F9FD] border border-[#16143E]/10 hover:border-[#4E0DBA]/35 transition-all duration-300 hover:shadow-xl hover:shadow-[#16143E]/5 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-[#4E0DBA]/10 text-[#4E0DBA] flex items-center justify-center mb-5 group-hover:bg-[#4E0DBA] group-hover:text-white transition-colors shadow-sm">
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
                <span className="w-4 h-px bg-[#4E0DBA]" /> Target Scenarios <span className="w-4 h-px bg-[#4E0DBA]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight font-display mb-4">
                Who Needs a Video Door Phone?
              </h2>
              <p className="text-[#16143E]/65 text-base sm:text-lg leading-relaxed">
                From single-family independent villas to multi-floor gated communities, see how video door communication enhances convenience and safety:
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

        {/* 4. "Images" Section (Hardware & Installation Gallery) */}
        <HardwareGallery
          sectionSubtitle="Hardware Showcase"
          sectionTitle="Video Door Phone Consoles & Hardware"
          sectionDescription="Precision-crafted CP PLUS and Hikvision touchscreens, all-weather outdoor bell units, and electromagnetic gate locking assemblies."
          items={HARDWARE_GALLERY_ITEMS}
          theme="light"
        />

        {/* Modern Relevance Section */}
        <section className="py-20 sm:py-24 bg-[#F8F9FD] text-[#16143E] border-t border-[#16143E]/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF1313] mb-3 font-display">
                <span className="w-4 h-px bg-[#EF1313]" /> Safety at the Doorstep <span className="w-4 h-px bg-[#EF1313]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight font-display mb-4">
                The Relevance of Smart Door Cams in Today&apos;s Homes
              </h2>
              <p className="text-[#16143E]/65 text-base sm:text-lg leading-relaxed">
                The traditional peephole and door chain are no longer sufficient. With constant delivery visits and unknown door knockers, modern doorstep security keeps your household protected:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Protection for Children & Elderly",
                  desc: "When children or elderly parents are home alone, they can view callers on a bright 7-inch color monitor without opening the main door to strangers.",
                },
                {
                  icon: Bell,
                  title: "Contactless Delivery Verification",
                  desc: "Confirm package deliveries from Amazon, Swiggy, and couriers via two-way audio. Instruct agents to leave parcels at the gate with full confidence.",
                },
                {
                  icon: Lock,
                  title: "One-Touch Electronic Gate Release",
                  desc: "No more running down the stairs or across the house to open the front gate. Tap one button on your console or phone to release the electronic latch.",
                },
                {
                  icon: Eye,
                  title: "Night-Time Infrared Visibility",
                  desc: "High-power infrared LEDs illuminate visitors clearly even in pitch darkness, preventing unexpected surprises outside your threshold.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile App Access from Anywhere",
                  desc: "When someone rings your doorbell while you are at work or travelling, your phone rings immediately with live video and audio communication.",
                },
                {
                  icon: Camera,
                  title: "Automatic Visitor Snapshot Audit",
                  desc: "Every time the doorbell rings, the system automatically takes a timestamped snapshot of the caller, preserving a permanent visitor audit trail.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-7 rounded-3xl bg-white border border-[#16143E]/8 hover:border-[#4E0DBA]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#16143E]/5 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#4E0DBA]/10 text-[#4E0DBA] flex items-center justify-center mb-5 group-hover:bg-[#4E0DBA] group-hover:text-white transition-colors">
                    <item.icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-[#16143E] mb-3 font-display">{item.title}</h3>
                  <p className="text-[#16143E]/65 text-sm leading-relaxed font-body">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. "Price" Section */}
        <section id="packages" className="py-20 sm:py-28 bg-[#0B091E] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF1313] mb-3 font-display">
                <span className="w-4 h-px bg-[#EF1313]" /> Packages & Pricing <span className="w-4 h-px bg-[#EF1313]" />
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display mb-4">
                Tailored Video Door Phone Solutions
              </h2>
              <p className="text-white/65 text-base sm:text-lg leading-relaxed">
                From affordable wireless doorbells to multi-apartment building intercom networks with <strong>no upper ceiling</strong>.
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
                        `Hi Broadnet, I am interested in the ${pkg.name} (${pkg.price}) for Video Door Phone installation in Avadi. Please share details.`
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
                <span className="w-4 h-px bg-[#4E0DBA]" /> Customer Experiences <span className="w-4 h-px bg-[#4E0DBA]" />
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#16143E] font-display mb-4">
                What Homeowners & Societies in Avadi Say
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
                    <div className="w-9 h-9 rounded-xl bg-[#4E0DBA]/10 text-[#4E0DBA] flex items-center justify-center mb-4">
                      <Quote size={18} />
                    </div>
                    <p className="text-sm text-[#16143E]/75 italic leading-relaxed mb-6 font-body">
                      &ldquo;{rev.quote}&rdquo;
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#16143E]/8">
                    <div className="font-bold text-sm text-[#16143E]">{rev.author}</div>
                    <div className="text-xs text-[#16143E]/55">{rev.role}</div>
                    <div className="text-xs font-semibold text-[#4E0DBA] mt-1">{rev.system}</div>
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
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4E0DBA] mb-3 font-display">
                <HelpCircle size={14} className="text-[#4E0DBA]" /> Common Inquiries
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#16143E] font-display">
                Video Door Phone Frequently Asked Questions
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
        <RelatedSolutions currentKey="door-phones" />

        {/* 6. "Enquiry" Section */}
        <EnquirySection initialService="Smart Video Door Phone" initialType="security" />
      </main>
      <Footer />
    </>
  );
}
