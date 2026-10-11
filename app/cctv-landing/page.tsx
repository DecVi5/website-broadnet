import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CCTVLandingClient from "./CCTVLandingClient";

export const metadata: Metadata = {
  title: "CCTV Installation & Service in Avadi, Chennai | Broadnet Surveillance Division",
  description:
    "Official Hikvision & CP PLUS CCTV camera sales, installation and AMC services across Avadi & Chennai. HD, IP, Audio & ColorVu cameras. Free on-site survey and 2-hour technician dispatch. Call 86818 88111.",
  keywords: [
    "CCTV installation Avadi",
    "CCTV dealers Chennai",
    "Hikvision camera installation Chennai",
    "CP PLUS CCTV Avadi",
    "CCTV AMC Chennai",
    "IP camera installation Avadi",
    "Security camera setup Avadi",
  ],
  alternates: {
    canonical: "https://www.broadnet.in/cctv-landing",
  },
  openGraph: {
    title: "CCTV Installation & Service in Avadi, Chennai | Broadnet",
    description:
      "Official Hikvision & CP PLUS CCTV camera sales, installation and AMC services across Avadi & Chennai. Free on-site survey and 2-hour technician dispatch.",
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

import { getCctvPackagesJsonLd } from "@/lib/jsonLd";

export default function CCTVLandingPage() {
  const jsonLd = getCctvPackagesJsonLd();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header activePage="CCTV" />
      <main>
        <CCTVLandingClient />
      </main>
      <Footer />
    </>
  );
}
