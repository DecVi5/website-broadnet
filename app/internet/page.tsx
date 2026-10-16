import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquirySection from "@/components/EnquirySection";
import PlansSection from "@/components/PlansSection";
import LocationChecker from "@/components/LocationChecker";
import InternetHero from "@/components/InternetHero";
import IctSolutions from "@/components/IctSolutions";
import RelatedSolutions from "@/components/RelatedSolutions";

export const metadata: Metadata = {
  title: "High-Speed Fiber Internet & Broadband Plans in Avadi | From ₹499/mo",
  description:
    "Explore symmetric FTTH fiber internet plans from 60 to 300 Mbps in Avadi, Chennai. Includes BSNL Bharat Fibre, Railwire OTT bundles (Prime + 20 OTTs), and enterprise Wi-Fi 6.",
  keywords: [
    "fiber internet Avadi",
    "broadband plans Avadi",
    "BSNL Bharat Fibre Avadi",
    "Railwire FTTH Chennai",
    "high speed internet Avadi",
    "Wi-Fi router upgrade",
    "enterprise Wi-Fi Avadi",
  ],
  alternates: {
    canonical: "https://www.broadnet.in/internet",
  },
  openGraph: {
    title: "Fiber Broadband Plans in Avadi | Broadnet Internet Services",
    description:
      "Direct private fiber network with zero reseller bottlenecks. Unlimited broadband plans from ₹499/mo with free ONT installation.",
    url: "https://www.broadnet.in/internet",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Broadnet Fiber Internet and Broadband Plans in Avadi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiber Broadband Plans in Avadi | Broadnet",
    description: "Unlimited high-speed fiber broadband from ₹499/mo across Avadi.",
    images: ["/opengraph-image"],
  },
};

import { getBroadbandPlansJsonLd, getBreadcrumbJsonLd } from "@/lib/jsonLd";

export default function InternetPage() {
  const jsonLd = getBroadbandPlansJsonLd();
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "https://www.broadnet.in" },
    { name: "Fiber Internet", url: "https://www.broadnet.in/internet" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header activePage="Internet" />
      <main>
        <InternetHero />
        <PlansSection />
        <LocationChecker />
        <IctSolutions />
        <RelatedSolutions currentKey="internet" />
        <EnquirySection initialType="internet" />
      </main>
      <Footer />
    </>
  );
}
