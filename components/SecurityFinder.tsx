"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Camera,
  Zap,
  Lock,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  RotateCcw,
  MessageCircle,
  Building2,
  Home,
  Store,
  Factory,
  Quote,
} from "lucide-react";

interface Option {
  id: string;
  label: string;
  desc: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
}

interface Step {
  id: string;
  question: string;
  subtitle: string;
  options: Option[];
}

const STEPS: Step[] = [
  {
    id: "premise",
    question: "What type of property are you looking to secure?",
    subtitle: "Select the environment where the security equipment will be deployed.",
    options: [
      {
        id: "villa",
        label: "Independent House / Villa",
        desc: "Private residence, compound wall, family safety & front gate",
        icon: Home,
      },
      {
        id: "apartment",
        label: "Apartment Society / Gated Community",
        desc: "Multi-flat community, guard cabin, shared gates, common areas",
        icon: Building2,
      },
      {
        id: "commercial",
        label: "Retail Store / Commercial Office",
        desc: "Showrooms, clinic, corporate office, employee entrance & cash area",
        icon: Store,
      },
      {
        id: "industrial",
        label: "Warehouse / Factory / Yard",
        desc: "Large boundary, logistics bay, vehicle entries & perimeter",
        icon: Factory,
      },
    ],
  },
  {
    id: "need",
    question: "What is your primary security objective?",
    subtitle: "Choose the main capability you need Broadnet to solve.",
    options: [
      {
        id: "cameras",
        label: "24/7 Video Surveillance & Night Recording",
        desc: "High-definition IP cameras, night vision, mobile live feed & evidence",
        icon: Camera,
      },
      {
        id: "doorphone",
        label: "Front Door Screening & Intercom",
        desc: "Verify callers before opening, 2-way audio & electronic door release",
        icon: Zap,
      },
      {
        id: "access",
        label: "Biometric Access Control & Attendance",
        desc: "Fingerprint/Face scan door locks, staff attendance & restricted zones",
        icon: Lock,
      },
      {
        id: "alarms",
        label: "Perimeter Trip Alarms & Anti-Intrusion",
        desc: "Boundary wall laser beams, loud sirens & GSM automated call alerts",
        icon: AlertTriangle,
      },
    ],
  },
  {
    id: "scale",
    question: "What is the expected coverage scale?",
    subtitle: "Approximate number of security points or cameras needed.",
    options: [
      {
        id: "compact",
        label: "Compact Setup (1 – 4 Points)",
        desc: "Front entrance, cash register, driveway, or single floor",
      },
      {
        id: "medium",
        label: "Standard Coverage (5 – 16 Points)",
        desc: "All boundary corners, floor corridors, multiple rooms/offices",
      },
      {
        id: "enterprise",
        label: "Enterprise Scale (16+ Points / Multi-Floor)",
        desc: "Campus-wide ELV network, optical fiber backbone & command rack",
      },
    ],
  },
];

interface Recommendation {
  title: string;
  badge: string;
  tagline: string;
  startingPrice: string;
  ceilingNote: string;
  highlights: string[];
  specs: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    location: string;
  };
  pageUrl: string;
  pageLabel: string;
  waText: string;
}

const RECOMMENDATIONS: Record<string, Recommendation> = {
  cameras: {
    title: "HD & 4K CCTV Surveillance Systems",
    badge: "Official CP PLUS CSE & Hikvision HCSA Partner",
    tagline: "Uncompromising 24/7 video monitoring with AI human detection and crystal-clear night vision.",
    startingPrice: "From ₹1,399 / Camera (Kits from ₹8,499)",
    ceilingNote: "No Upper Ceiling — Fully Scalable for 16, 32, 64+ Channel Enterprise Deployments",
    highlights: [
      "1080p Full HD to 4K Ultra-HD with ColorVu 24/7 full-color night vision",
      "Instant live mobile app viewing on iOS, Android & Windows PC with zero latency",
      "Tamper-resistant concealed conduit cabling engineered by certified technicians",
      "Surveillance-grade WD Purple / Seagate SkyHawk HDD for continuous loop recording",
    ],
    specs: ["Weatherproof IP67", "Smart Motion Alerts", "H.265+ Video Compression", "2-Year On-Site Warranty"],
    testimonial: {
      quote:
        "BroadNet handled our entire 48-flat apartment complex surveillance. The conduit work was completely concealed without damaging aesthetics. When a camera angle needed adjustment, their technician arrived within 90 minutes.",
      author: "K. Senthil Nathan",
      role: "President, Residents Welfare Association",
      location: "Kaveri Nagar, Avadi",
    },
    pageUrl: "/security/cameras",
    pageLabel: "View Complete Camera Packages & Specs",
    waText: "Hi Broadnet, the Security Solution Finder recommended CCTV Surveillance Systems for my property. Please provide a quotation.",
  },
  doorphone: {
    title: "Smart Video Door Phones (VDP) & Intercom",
    badge: "CP PLUS & Hikvision Certified Solutions",
    tagline: "Screen, speak, and remotely unlock your front gate without opening the door to strangers.",
    startingPrice: "From ₹3,999 (7-inch HD Display + Doorbell Kit)",
    ceilingNote: "No Upper Ceiling — Scalable for Multi-Story Buildings and Multi-Apartment Complexes",
    highlights: [
      "7-inch crystal-clear indoor touch panel with high-fidelity 2-way intercom",
      "Wide-angle 120° outdoor doorbell camera equipped with infrared night vision",
      "Integrated electronic door strike latch release directly from the indoor screen or smartphone",
      "Automatic visitor snapshot memory and tamper alarm whenever someone approaches the gate",
    ],
    specs: ["Touchscreen Panel", "Infrared Night Vision", "Remote Electric Latch", "Visitor Photo Memory"],
    testimonial: {
      quote:
        "We installed the smart video door phone for our villa in TNHB Avadi. When children or elderly parents are home alone, they can clearly see and speak to delivery personnel before unlocking the door. Truly essential security.",
      author: "R. Anand",
      role: "Homeowner",
      location: "TNHB Colony, Avadi",
    },
    pageUrl: "/security/door-phones",
    pageLabel: "View Video Door Phone Packages & Options",
    waText: "Hi Broadnet, the Security Solution Finder recommended Video Door Phones for my home. Please share available packages.",
  },
  access: {
    title: "Biometric Access Control & Time-Attendance",
    badge: "eSSL Authorized Partner & Installer",
    tagline: "Contactless facial recognition and optical fingerprint access to safeguard premises and automate staff logs.",
    startingPrice: "From ₹4,500 (Standalone Biometric Terminal)",
    ceilingNote: "No Upper Ceiling — Multi-Door Central Server Integration & Flap Barrier Turnstiles",
    highlights: [
      "Sub-second (0.3s) facial recognition and high-precision optical fingerprint scanner",
      "Heavy-duty electromagnetic lock integration with emergency exit release buttons",
      "Centralized cloud/local software generating automated time-attendance & payroll reports",
      "Built-in battery backup ensuring continuous door security during unexpected power cuts",
    ],
    specs: ["Face & Fingerprint", "Automated Excel Logs", "Heavy EM Latch", "Power Backup Included"],
    testimonial: {
      quote:
        "Our clinic shifted from paper logs to BroadNet's eSSL biometric system. Attendance reports export cleanly and unauthorized access into sensitive pharmacy rooms has been completely eliminated.",
      author: "Dr. A. Meenakshi",
      role: "Chief Medical Director, LifeCare Centre",
      location: "Avadi, Chennai",
    },
    pageUrl: "/security/access-control",
    pageLabel: "View Biometric Access Control Packages",
    waText: "Hi Broadnet, the Security Solution Finder recommended Biometric Access Control for our facility. Please provide details.",
  },
  alarms: {
    title: "Perimeter Alarms & Intrusion Detection",
    badge: "Hikvision Certified Intrusion Defense",
    tagline: "Active boundary defense with laser trip beams, dual-tech sensors, and loud GSM sirens.",
    startingPrice: "From ₹6,999 (GSM Control Panel + Motion Sensors)",
    ceilingNote: "No Upper Ceiling — Full Compound Perimeter Multi-Zone Protection",
    highlights: [
      "Infrared photo-beam sensors for compound walls detecting unauthorized perimeter climbing",
      "Loud 110dB outdoor deterrent siren triggering immediately upon verified fence breach",
      "Automated GSM auto-dialer calls up to 5 family or manager mobile numbers instantly",
      "Pet-immune indoor motion sensors preventing false alarms caused by birds or domestic animals",
    ],
    specs: ["Laser Wall Beams", "GSM Auto-Dialer", "110dB Siren", "Zero False Triggers"],
    testimonial: {
      quote:
        "We had blind spots along our rear warehouse boundary wall. BroadNet installed perimeter laser sensors with instant siren and phone call alert. Flawless execution and prompt local service.",
      author: "S. Raghavan",
      role: "Logistics Manager",
      location: "Pattabiram Industrial Corridor, Avadi",
    },
    pageUrl: "/security/intrusion-alarms",
    pageLabel: "View Perimeter Intrusion Alarm Packages",
    waText: "Hi Broadnet, the Security Solution Finder recommended Perimeter Alarms for my property. Please provide pricing and options.",
  },
};

export default function SecurityFinder() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({
    premise: "villa",
    need: "cameras",
    scale: "compact",
  });
  const [showResult, setShowResult] = useState(false);

  const step = STEPS[currentStep];

  const handleSelectOption = (optionId: string) => {
    setAnswers((prev) => ({ ...prev, [step.id]: optionId }));
    if (currentStep < STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setShowResult(false);
  };

  // Determine recommendation key
  const recommendedKey = answers.need || "cameras";
  const rec = RECOMMENDATIONS[recommendedKey] || RECOMMENDATIONS.cameras;

  return (
    <section id="solution-finder" className="py-20 sm:py-24 bg-[#0B091E] text-white relative overflow-hidden">
      {/* Decorative ambient glows */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[400px] bg-[#EF1313]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[400px] bg-[#4E0DBA]/15 blur-[150px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF1313] mb-3">
            <Sparkles size={14} className="text-[#EF1313]" />
            Interactive Security Advisor
            <span className="w-4 h-px bg-[#EF1313]" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display mb-4">
            Find the Perfect Solution For You
          </h2>
          <p className="text-white/65 text-base sm:text-lg leading-relaxed">
            Answer 3 quick questions about your property and requirements. We will analyze your security profile, suggest the ideal certified system, and direct you to the dedicated package page.
          </p>
        </div>

        {/* Wizard Box */}
        <div className="max-w-4xl mx-auto bg-[#120F2E] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-[#16143E]/40 relative overflow-hidden">
          {!showResult ? (
            <div>
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-8 pb-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#EF1313] uppercase tracking-wider">
                    Question {currentStep + 1} of {STEPS.length}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  {STEPS.map((s, idx) => (
                    <div
                      key={s.id}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentStep
                          ? "w-8 bg-[#EF1313]"
                          : idx < currentStep
                          ? "w-4 bg-emerald-400"
                          : "w-4 bg-white/15"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Question */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display">
                    {step.question}
                  </h3>
                  <p className="text-white/60 text-sm mb-6">{step.subtitle}</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {step.options.map((opt) => {
                      const Icon = opt.icon;
                      const isSelected = answers[step.id] === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => handleSelectOption(opt.id)}
                          className={`text-left p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between group ${
                            isSelected
                              ? "bg-[#EF1313]/15 border-[#EF1313] text-white shadow-lg shadow-[#EF1313]/10"
                              : "bg-white/[0.03] border-white/10 hover:border-white/30 text-white/85 hover:bg-white/[0.06]"
                          }`}
                        >
                          <div className="flex items-start gap-3.5 mb-3">
                            {Icon && (
                              <div
                                className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                                  isSelected
                                    ? "bg-[#EF1313] text-white"
                                    : "bg-white/10 text-white/70 group-hover:text-white"
                                }`}
                              >
                                <Icon size={20} />
                              </div>
                            )}
                            <div>
                              <div className="font-bold text-base text-white">{opt.label}</div>
                              <p className="text-xs text-white/55 mt-1 leading-relaxed">{opt.desc}</p>
                            </div>
                          </div>
                          <div className="flex justify-end pt-2">
                            <span
                              className={`text-xs font-semibold flex items-center gap-1 ${
                                isSelected ? "text-[#EF1313]" : "text-white/40 group-hover:text-white/75"
                              }`}
                            >
                              Select <ArrowRight size={12} />
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {currentStep > 0 && (
                    <div className="mt-6 flex justify-start">
                      <button
                        type="button"
                        onClick={() => setCurrentStep((prev) => prev - 1)}
                        className="text-xs font-semibold text-white/60 hover:text-white flex items-center gap-1.5 transition-colors"
                      >
                        ← Back to previous question
                      </button>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            /* Result Recommendation Card */
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Recommended Match for Your Requirements (98% Compatibility)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-white/60 hover:text-white flex items-center gap-1.5 font-medium transition-colors"
                >
                  <RotateCcw size={13} />
                  Retake Questions
                </button>
              </div>

              {/* Match Header */}
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#EF1313]/15 text-[#EF1313] border border-[#EF1313]/30">
                    {rec.badge}
                  </span>
                  <div className="text-right">
                    <span className="text-sm font-bold text-white block">{rec.startingPrice}</span>
                    <span className="text-[11px] text-white/50">{rec.ceilingNote}</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3">
                  {rec.title}
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                  {rec.tagline}
                </p>

                {/* Key Highlights */}
                <div className="grid sm:grid-cols-2 gap-3 mb-6 pt-4 border-t border-white/10">
                  {rec.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85">
                      <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Spec badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {rec.specs.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-white/75"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specific Testimonial */}
              <div className="bg-[#16143E] border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EF1313]/15 border border-[#EF1313]/30 flex items-center justify-center flex-shrink-0 text-[#EF1313]">
                  <Quote size={18} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-white/80 italic leading-relaxed mb-3">
                    &ldquo;{rec.testimonial.quote}&rdquo;
                  </p>
                  <div className="text-xs">
                    <span className="font-bold text-white block">{rec.testimonial.author}</span>
                    <span className="text-white/50">{rec.testimonial.role} • {rec.testimonial.location}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <Link
                  href={rec.pageUrl}
                  className="w-full sm:flex-1 min-h-[48px] px-6 py-3 rounded-xl bg-[#EF1313] hover:bg-[#d60e0e] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#EF1313]/25 transition-all group"
                >
                  <span>{rec.pageLabel}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={`https://wa.me/918681888111?text=${encodeURIComponent(rec.waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle size={16} className="fill-white" />
                  <span>WhatsApp Quotation</span>
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
