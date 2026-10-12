import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquirySection from "@/components/EnquirySection";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Wifi,
  Sparkles,
  CheckCircle2,
  Radio,
  Sliders,
  Shield,
  MessageCircle,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Wi-Fi Access Points & Enterprise Wi-Fi Chennai | Grandstream Certified Partner",
  description:
    "Grandstream Certified Network Specialists installing enterprise Wi-Fi 6 access points, seamless multi-floor mesh, guest captive portals, and cloud management across Chennai & Avadi. Call 86818 88111.",
  keywords: [
    "Enterprise Wi-Fi installation Chennai",
    "Grandstream access points Avadi",
    "Villa Wi-Fi mesh setup Chennai",
    "Hotel Wi-Fi captive portal Chennai",
    "Wi-Fi 6 access points Avadi",
  ],
};

export default function EnterpriseWifiPage() {
  return (
    <>
      <Header activePage="Services" />
      <main className="bg-white text-[#16143E]">
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#F7F5FC] via-white to-white border-b border-[#16143E]/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <div className="flex justify-center mb-6">
              <Breadcrumbs
                items={[
                  { label: "Services", href: "/#services" },
                  { label: "Enterprise Wi-Fi & Access Points" },
                ]}
                variant="light"
              />
            </div>

            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4E0DBA]/10 text-[#4E0DBA] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles size={13} />
                <span>Grandstream Certified Network Specialists</span>
              </div>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#16143E] tracking-tight mb-4 text-center"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Enterprise Wi-Fi &amp; High-Density Access Points
              </h1>
              <p className="text-base sm:text-lg text-[#16143E]/75 leading-relaxed mb-8 max-w-2xl mx-auto text-center">
                Eliminate dead zones, dropped WhatsApp video calls, and buffer delays across large villas, multi-floor corporate offices, hotels, and schools. We design high-throughput Wi-Fi 6 deployments with zero-handoff roaming and centralized cloud dashboards.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#enquiry"
                  className="btn-crimson min-h-[46px] px-7 text-sm justify-center"
                >
                  Request Wi-Fi Heatmap Survey
                </a>
                <a
                  href="https://wa.me/918681888111?text=Hello%20Broadnet%2C%20I%20would%20like%20to%20enquire%20about%20Enterprise%20Wi-Fi%20installation."
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

        {/* Feature Highlights */}
        <section className="py-20 bg-[#FAFAFE] border-b border-[#16143E]/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-7 rounded-2xl bg-white border border-[#16143E]/10">
                <div className="w-12 h-12 rounded-xl bg-[#4E0DBA]/10 text-[#4E0DBA] flex items-center justify-center mb-4">
                  <Wifi size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
                  Wi-Fi 6 Gigabit Speeds
                </h3>
                <p className="text-xs sm:text-sm text-[#16143E]/70 leading-relaxed mb-4">
                  Support up to 250+ concurrent devices per access point with OFDMA and MU-MIMO technology, ensuring latency-free Zoom meetings and 4K streaming.
                </p>
                <div className="text-xs text-[#4E0DBA] font-semibold">Grandstream GWN Series Hardware</div>
              </div>

              <div className="p-7 rounded-2xl bg-white border border-[#16143E]/10">
                <div className="w-12 h-12 rounded-xl bg-[#EF1313]/10 text-[#EF1313] flex items-center justify-center mb-4">
                  <Radio size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
                  Zero-Handoff Seamless Roaming
                </h3>
                <p className="text-xs sm:text-sm text-[#16143E]/70 leading-relaxed mb-4">
                  Walk from the ground floor garden to the terrace without call disconnection. Your device automatically handshakes to the strongest ceiling node.
                </p>
                <div className="text-xs text-[#EF1313] font-semibold">802.11k/r/v Fast Transition Standards</div>
              </div>

              <div className="p-7 rounded-2xl bg-white border border-[#16143E]/10">
                <div className="w-12 h-12 rounded-xl bg-[#4E0DBA]/10 text-[#4E0DBA] flex items-center justify-center mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
                  Guest Captive Portal & VLANs
                </h3>
                <p className="text-xs sm:text-sm text-[#16143E]/70 leading-relaxed mb-4">
                  Keep guest visitors separated from internal billing servers and CCTV networks. Brand the login splash screen with your company logo and OTP login.
                </p>
                <div className="text-xs text-[#4E0DBA] font-semibold">Enterprise Cyber-Shield Compliance</div>
              </div>
            </div>
          </div>
        </section>

        <EnquirySection initialService="Enterprise Wi-Fi" initialType="security" />
      </main>
      <Footer />
    </>
  );
}
