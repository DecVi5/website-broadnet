import type { Metadata } from "next";
import { MapPin, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquirySection from "@/components/EnquirySection";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceAreaCoverageClient from "./ServiceAreaCoverageClient";
import { getCctvServiceJsonLd, getBreadcrumbJsonLd } from "@/lib/jsonLd";

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
    "CCTV Ambattur",
    "CCTV Poonamallee",
    "Broadband Avadi pincode",
  ],
  alternates: {
    canonical: "https://www.broadnet.in/service-areas",
  },
};

export default function ServiceAreasPage() {
  const serviceJsonLd = getCctvServiceJsonLd();
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "https://www.broadnet.in" },
    { name: "Service Areas", url: "https://www.broadnet.in/service-areas" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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

        {/* Google Maps Live Dispatch Hub & Coverage Map */}
        <section className="py-16 bg-white border-t border-[#16143E]/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#EF1313] block mb-2 font-display">
                Local Dispatch Center &amp; Service Radius
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#16143E] font-display">
                Our On-Ground Dispatch Map
              </h2>
              <p className="text-sm text-[#16143E]/70 mt-2">
                Technicians dispatched directly from our Avadi central office across all Chennai localities.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden border border-[#16143E]/12 shadow-lg bg-white">
              <div className="p-4 bg-[#16143E] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#EF1313] flex items-center justify-center text-white flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-bold font-display">BroadNet Central Dispatch HQ</div>
                    <div className="text-xs text-white/65">1093, Fire Station Road, TNHB, Avadi, Chennai 600054</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=1093,+Fire+Station+Road,+TNHB,+Avadi,+Chennai,+Tamil+Nadu+600054"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-[#EF1313] hover:bg-[#d00e0e] text-white text-xs font-bold inline-flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
              <div className="aspect-[16/9] sm:aspect-[21/9] w-full min-h-[300px]">
                <iframe
                  title="BroadNet Service Areas Dispatch Map - Avadi Chennai"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.5562779777974!2d80.09848577508006!3d13.127246987199994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52631555555555%3A0x7d3e4d9c4909a47a!2sFire%20Station%20Rd%2C%20TNHB%20Mig%20V%20Block%2C%20Avadi%2C%20Tamil%20Nadu%20600054!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[320px]"
                />
              </div>
            </div>
          </div>
        </section>

        <EnquirySection initialService="Service Area Enquiry" initialType="security" />
      </main>
      <Footer />
    </>
  );
}
