import Link from "next/link";
import {
  Camera,
  Zap,
  Lock,
  AlertTriangle,
  Wifi,
  ArrowRight,
  Sparkles,
  Network,
  Radio,
} from "lucide-react";

interface RelatedSolutionsProps {
  currentKey:
    | "cameras"
    | "door-phones"
    | "access-control"
    | "intrusion-alarms"
    | "internet"
    | "networking"
    | "enterprise-wifi";
}

const ALL_SOLUTIONS = [
  {
    key: "cameras",
    title: "HD & 4K CCTV Cameras",
    tagline: "Hikvision & CP PLUS full-color night vision surveillance",
    price: "From ₹1,399 / Cam",
    url: "/security/cameras",
    icon: Camera,
    color: "#EF1313",
  },
  {
    key: "door-phones",
    title: "Smart Video Door Phones",
    tagline: "7-inch HD touch screen intercoms & remote gate lock release",
    price: "From ₹3,999",
    url: "/security/door-phones",
    icon: Zap,
    color: "#4E0DBA",
  },
  {
    key: "access-control",
    title: "Biometric Access Control",
    tagline: "eSSL contactless face scan, fingerprint locks & payroll logs",
    price: "From ₹4,500",
    url: "/security/access-control",
    icon: Lock,
    color: "#4E0DBA",
  },
  {
    key: "intrusion-alarms",
    title: "Perimeter Intrusion Alarms",
    tagline: "Compound wall laser trip beams, 110dB sirens & GSM calls",
    price: "From ₹6,999",
    url: "/security/intrusion-alarms",
    icon: AlertTriangle,
    color: "#EF1313",
  },
  {
    key: "internet",
    title: "High-Speed Fiber Internet",
    tagline: "Symmetric FTTH broadband from 60 to 300 Mbps with OTT bundles",
    price: "From ₹499/mo",
    url: "/internet",
    icon: Wifi,
    color: "#00C2FF",
  },
  {
    key: "networking",
    title: "Structured Cabling & Firewalls",
    tagline: "Cat6 cabling, server racks, fiber splicing & Tactine UTMs",
    price: "From ₹8,999",
    url: "/services/networking",
    icon: Network,
    color: "#4E0DBA",
  },
  {
    key: "enterprise-wifi",
    title: "Enterprise Wi-Fi 6 Access Points",
    tagline: "Grandstream seamless roaming mesh & guest captive portals",
    price: "From ₹6,500",
    url: "/services/enterprise-wifi",
    icon: Radio,
    color: "#4E0DBA",
  },
];

export default function RelatedSolutions({ currentKey }: RelatedSolutionsProps) {
  const otherSolutions = ALL_SOLUTIONS.filter((s) => s.key !== currentKey).slice(0, 3);

  return (
    <section className="py-20 bg-[#F8F9FD] border-t border-[#16143E]/8 text-[#16143E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4E0DBA] mb-2 font-display">
            <span className="w-3 h-px bg-[#4E0DBA]" /> Complete Facility Protection <span className="w-3 h-px bg-[#4E0DBA]" />
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#16143E] font-display">
            Explore Complementary Solutions
          </h2>
          <p className="text-xs sm:text-sm text-[#16143E]/65 mt-2">
            Broadnet provides integrated connectivity and electronic security for complete premises protection.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {otherSolutions.map((sol) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.key}
                className="p-6 rounded-2xl bg-white border border-[#16143E]/10 hover:border-[#4E0DBA]/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${sol.color}15`, color: sol.color }}
                    >
                      <Icon size={18} />
                    </div>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#16143E]/5 text-[#16143E]/80">
                      {sol.price}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#16143E] font-display mb-1 group-hover:text-[#4E0DBA] transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-[#16143E]/60 leading-relaxed mb-4">
                    {sol.tagline}
                  </p>
                </div>

                <Link
                  href={sol.url}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4E0DBA] hover:text-[#EF1313] transition-colors pt-3 border-t border-[#16143E]/8"
                >
                  <span>View Details & Packages</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Solution Advisor / Cross-Portal Strip */}
        <div className="max-w-5xl mx-auto p-5 sm:p-6 rounded-2xl bg-[#16143E] text-white border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#EF1313]/20 text-[#EF1313] flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
              <Sparkles size={20} />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-display">
                Need Help Diagnosing Your Exact Requirements?
              </div>
              <p className="text-xs text-white/60 mt-0.5">
                Answer 3 quick questions in our interactive Security Solution Advisor.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 flex-shrink-0">
            <Link
              href="/security#solution-finder"
              className="px-5 py-2.5 rounded-xl bg-[#EF1313] hover:bg-[#d60e0e] text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
            >
              <span>Launch Advisor</span>
              <ArrowRight size={13} />
            </Link>
            <Link
              href="/security"
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
            >
              All Portals
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
