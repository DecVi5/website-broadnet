import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquirySection from "@/components/EnquirySection";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Network,
  Server,
  Shield,
  Sparkles,
  CheckCircle2,
  Lock,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Structured Cabling & Network Infrastructure Chennai | Tactine Firewall Partner",
  description:
    "End-to-end LAN/WAN engineering, Cat6 structured cabling, server rack management, optical fiber fusion splicing, and Tactine UTM firewalls across Chennai & Avadi. Call 86818 88111.",
  keywords: [
    "Structured cabling Avadi",
    "Network infrastructure Chennai",
    "Server rack cabling Chennai",
    "Tactine firewall dealer Chennai",
    "Optical fiber splicing Avadi",
  ],
};

export default function NetworkingPage() {
  return (
    <>
      <Header activePage="Services" />
      <main className="bg-white text-[#16143E]">
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#F7F5FC] via-white to-white border-b border-[#16143E]/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-6">
              <Breadcrumbs
                items={[
                  { label: "Services", href: "/#services" },
                  { label: "Networking & Infrastructure" },
                ]}
                variant="light"
              />
            </div>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EF1313]/10 text-[#EF1313] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles size={13} />
                <span>Tactine Firewall Dealer & Certified Fiber Integrators</span>
              </div>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#16143E] tracking-tight mb-4"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Networking & Network Infrastructure
              </h1>
              <p className="text-base sm:text-lg text-[#16143E]/75 leading-relaxed mb-8">
                Build an uncompromising foundation for your corporate IT, surveillance cameras, and data transfers. We provide structured Cat6/Cat6A cabling, server rack cable dressing, fusion fiber splicing with OTDR testing, and Tactine hardware UTM firewalls.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#enquiry"
                  className="btn-crimson min-h-[46px] px-7 text-sm justify-center"
                >
                  Request Network Consultation
                </a>
                <a
                  href="https://wa.me/918681888111?text=Hello%20Broadnet%2C%20I%20need%20a%20quote%20for%20Structured%20Cabling%20and%20Network%20Infrastructure."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#25D366]/10 text-[#16143E] hover:bg-[#25D366]/20 text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors min-h-[46px]"
                >
                  <MessageCircle size={16} className="text-[#25D366]" /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="py-20 bg-[#FAFAFE] border-b border-[#16143E]/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-7 rounded-2xl bg-white border border-[#16143E]/10">
                <div className="w-12 h-12 rounded-xl bg-[#4E0DBA]/10 text-[#4E0DBA] flex items-center justify-center mb-4">
                  <Network size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
                  Cat6 / Cat6A Structured Cabling
                </h3>
                <p className="text-xs sm:text-sm text-[#16143E]/70 leading-relaxed mb-4">
                  Pure oxygen-free copper conduits, labeled patch panels, and keystones for workstations and CCTV feeds. Zero packet loss guaranteed.
                </p>
                <div className="text-xs text-[#4E0DBA] font-semibold">Schneider Digilink & D-Link Certified</div>
              </div>

              <div className="p-7 rounded-2xl bg-white border border-[#16143E]/10">
                <div className="w-12 h-12 rounded-xl bg-[#EF1313]/10 text-[#EF1313] flex items-center justify-center mb-4">
                  <Server size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
                  Server Racks & Fiber Splicing
                </h3>
                <p className="text-xs sm:text-sm text-[#16143E]/70 leading-relaxed mb-4">
                  Neat vertical and horizontal cable management in 6U to 42U racks. Precision core-alignment fusion fiber splicing for multi-building connectivity.
                </p>
                <div className="text-xs text-[#EF1313] font-semibold">OTDR Certified Low DB Loss</div>
              </div>

              <div className="p-7 rounded-2xl bg-white border border-[#16143E]/10">
                <div className="w-12 h-12 rounded-xl bg-[#4E0DBA]/10 text-[#4E0DBA] flex items-center justify-center mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
                  Tactine UTM Firewalls
                </h3>
                <p className="text-xs sm:text-sm text-[#16143E]/70 leading-relaxed mb-4">
                  Protect corporate assets from cyber intrusions, ransomware, and unauthorized data leakage with hardware-level firewall filtering and site-to-site VPNs.
                </p>
                <div className="text-xs text-[#4E0DBA] font-semibold">Tactine Authorised Dealer</div>
              </div>
            </div>
          </div>
        </section>

        <EnquirySection initialService="Structured Cabling & Networking" initialType="security" />
      </main>
      <Footer />
    </>
  );
}
