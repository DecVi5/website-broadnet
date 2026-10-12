import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquirySection from "@/components/EnquirySection";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceAreaCoverageClient from "./ServiceAreaCoverageClient";

export const metadata: Metadata = {
  title: "Service Areas & Coverage Checker in Chennai & Avadi | Broadnet",
  description:
    "Broadnet provides CCTV installation & security integration across all of Chennai, with 2-hour dispatch in Avadi, Pattabiram, Thirumullaivoyal, and Thiruverkadu. Fiber internet available in Avadi only.",
  keywords: [
    "CCTV installation service areas Chennai",
    "CCTV Avadi",
    "CCTV Pattabiram",
    "CCTV Thirumullaivoyal",
    "CCTV Thiruverkadu",
    "CCTV Ayapakkam",
    "Broadband Avadi pincode",
  ],
};

export default function ServiceAreasPage() {
  return (
    <>
      <Header activePage="Service Areas" />
      <main className="bg-white text-[#16143E]">
        <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#F7F5FC] via-white to-white border-b border-[#16143E]/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <div className="flex justify-center mb-6">
              <Breadcrumbs
                items={[{ label: "Service Areas & Coverage" }]}
                variant="light"
              />
            </div>

            <div className="max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#EF1313] block mb-2">
                Rapid Local Dispatch &amp; Coverage Map
              </span>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#16143E] tracking-tight mb-4"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Where We Serve
              </h1>
              <p className="text-base sm:text-lg text-[#16143E]/75 leading-relaxed max-w-2xl mx-auto">
                We provide certified CCTV and security solutions across <strong>all of Chennai</strong>, with guaranteed <span className="text-[#EF1313] font-bold">&lt; 2-hour technician response</span> in the Avadi region. Our dedicated optical fiber internet operates exclusively within Avadi.
              </p>
            </div>
          </div>
        </section>

        {/* Client Interactive Checker & Locality Directory */}
        <ServiceAreaCoverageClient />

        <EnquirySection initialService="Service Area Enquiry" initialType="security" />
      </main>
      <Footer />
    </>
  );
}
