import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CCTVLandingClient from "./CCTVLandingClient";
import { CCTV_LANDING_FAQS } from "@/data/cctvLandingData";
import {
  getCctvPackagesJsonLd,
  getCctvServiceJsonLd,
  getFaqPageJsonLd,
  getBreadcrumbJsonLd,
} from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "CCTV Installation & Service in Avadi, Chennai | Broadnet Surveillance Division",
  description:
    "Official Hikvision & CP PLUS CCTV camera sales, installation and AMC services across Avadi & Chennai. HD, IP, Audio & ColorVu cameras. Professional on-site survey and 2-hour technician dispatch. Call 86818 88111.",
  keywords: [
    "CCTV installation Avadi",
    "CCTV dealers Chennai",
    "Hikvision camera installation Chennai",
    "CP PLUS CCTV Avadi",
    "CCTV AMC Chennai",
    "IP camera installation Avadi",
    "Security camera setup Avadi",
    "CCTV Thirumullaivoyal",
    "CCTV Ambattur",
    "CCTV Pattabiram",
    "CCTV Poonamallee",
  ],
  alternates: {
    canonical: "https://www.broadnet.in/cctv-landing",
  },
  openGraph: {
    title: "CCTV Installation & Service in Avadi, Chennai | Broadnet",
    description:
      "Official Hikvision & CP PLUS CCTV camera sales, installation and AMC services across Avadi & Chennai. Professional on-site survey and 2-hour technician dispatch.",
    url: "https://www.broadnet.in/cctv-landing",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Broadnet CCTV Camera Sales and Installation Avadi Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CCTV Installation & Service in Avadi, Chennai | Broadnet",
    description:
      "Official Hikvision & CP PLUS CCTV camera sales, installation and AMC services across Avadi & Chennai.",
    images: ["/og-image.png"],
  },
};

export default function CCTVLandingPage() {
  const packagesJsonLd = getCctvPackagesJsonLd();
  const serviceJsonLd = getCctvServiceJsonLd();
  const faqJsonLd = getFaqPageJsonLd(CCTV_LANDING_FAQS);
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "https://www.broadnet.in" },
    { name: "CCTV Surveillance", url: "https://www.broadnet.in/cctv-landing" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(packagesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header activePage="CCTV" />
      <main>
        <CCTVLandingClient />
      </main>
      <Footer />
    </>
  );
}

