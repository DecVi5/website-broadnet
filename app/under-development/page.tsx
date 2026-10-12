import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderDevelopmentClient from "@/components/UnderDevelopmentClient";
import EnquirySection from "@/components/EnquirySection";

export const metadata: Metadata = {
  title: "Website Under Active Development & Digital Roadmap | Broadnet Avadi",
  description:
    "Explore Broadnet's digital upgrade roadmap, live operational status, upcoming CCTV simulators and bill payment portals in Avadi, Chennai. 100% active field technician dispatches.",
  keywords: [
    "Broadnet website under development",
    "Broadnet roadmap Avadi",
    "Broadnet portal upgrade",
    "CCTV camera installation Avadi",
    "Broadnet technician dispatch Chennai",
  ],
  alternates: {
    canonical: "https://www.broadnet.in/under-development",
  },
  openGraph: {
    title: "Website Under Active Development & Digital Roadmap | Broadnet",
    description:
      "Digital upgrade status and roadmap for Broadnet. High-speed broadband and CCTV security installations remain 100% active across Avadi & Chennai.",
    url: "https://www.broadnet.in/under-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Under Active Development | Broadnet",
    description:
      "Explore upcoming digital self-service tools and 24/7 on-ground technician dispatches in Avadi & Chennai.",
  },
};

export default function UnderDevelopmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Website Under Active Development & Digital Roadmap | Broadnet",
    url: "https://www.broadnet.in/under-development",
    description:
      "Official digital roadmap, feature release timeline, and operational status for Broadnet Internet Services and Security Systems.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header activePage="" />
      <main>
        <UnderDevelopmentClient />
        <div id="enquiry">
          <EnquirySection initialService="General Inquiry & Support" initialType="general" />
        </div>
      </main>
      <Footer />
    </>
  );
}
