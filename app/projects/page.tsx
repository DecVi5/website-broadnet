import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquirySection from "@/components/EnquirySection";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectsGallery from "@/components/ProjectsGallery";
import { Sparkles, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects & Installation Gallery Chennai | Broadnet Internet & Security",
  description:
    "View completed CCTV, biometric attendance, network cabling, and boom barrier projects across Avadi, Pattabiram, Ambattur, and Chennai. Real installations since 2014.",
  keywords: [
    "CCTV projects Chennai",
    "Security camera installation gallery Avadi",
    "Broadnet installations",
    "Biometric installation photos Chennai",
  ],
  alternates: {
    canonical: "https://www.broadnet.in/projects",
  },
  openGraph: {
    title: "Projects & Installation Gallery Chennai | Broadnet Internet & Security",
    description:
      "Explore 2,500+ completed CCTV, biometric access, and networking deployments across Chennai & Avadi.",
    url: "https://www.broadnet.in/projects",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Broadnet Security and Network Installations Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects & Installation Gallery Chennai | Broadnet",
    description:
      "Explore 2,500+ completed CCTV, biometric access, and networking deployments across Chennai & Avadi.",
    images: ["/og-image.png"],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Header activePage="Projects" />
      <main className="bg-white text-[#16143E]">
        <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#F7F5FC] via-white to-white border-b border-[#16143E]/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <div className="flex justify-center mb-6">
              <Breadcrumbs
                items={[{ label: "Projects & Gallery" }]}
                variant="light"
              />
            </div>

            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4E0DBA]/10 text-[#4E0DBA] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles size={13} />
                <span>2,500+ Deployments Completed Since 2014</span>
              </div>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#16143E] tracking-tight mb-4 text-center"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Our Installation Showcase
              </h1>
              <p className="text-base sm:text-lg text-[#16143E]/75 leading-relaxed mb-8 max-w-2xl mx-auto text-center">
                Explore real projects engineered by our in-house certified technicians. Filter by project category or click any project to view complete cabling scope, deployed hardware, and outcomes.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#enquiry"
                  className="btn-crimson min-h-[46px] px-7 text-sm justify-center glow-btn-crimson"
                >
                  Request a Custom Quotation
                </a>
                <a
                  href="tel:+918681888111"
                  className="px-5 py-2.5 rounded-full border border-[#16143E]/20 text-[#16143E] text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors min-h-[46px] hover:bg-white"
                >
                  <Phone size={14} className="text-[#EF1313]" /> Call 86818 88111
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Projects Gallery with Lightbox and Categories */}
        <section className="py-16 sm:py-20 bg-[#FAFAFE] border-b border-[#16143E]/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ProjectsGallery isTeaser={false} />
          </div>
        </section>

        <EnquirySection initialService="Projects & Installation Quote" initialType="security" />
      </main>
      <Footer />
    </>
  );
}
