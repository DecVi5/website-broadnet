import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PayBillClient from "@/components/PayBillClient";
import { SITE_CONFIG } from "@/data/site";

export const metadata: Metadata = {
  title: "Pay Internet Bill Online | Broadnet, BSNL Bharat Fibre & Railwire Recharge",
  description:
    "Official online bill payment and quick recharge portal for Broadnet Internet Services, BSNL Bharat Fibre, and Railwire Broadband subscribers across Avadi and Chennai. Instant UPI, Net Banking & card payments.",
  keywords: [
    "pay Broadnet bill online",
    "portal.broadnet.in login",
    "BSNL Bharat Fibre bill payment Avadi",
    "portal.bsnl.in cfa pay",
    "Railwire billing recharge Tamil Nadu",
    "tn.railwire.co.in",
    "broadband bill payment Avadi",
    "fiber internet recharge Chennai",
  ],
  alternates: {
    canonical: "https://www.broadnet.in/pay-bill",
  },
  openGraph: {
    title: "Pay Internet Bill Online | Broadnet, BSNL & Railwire Billing",
    description:
      "Direct links to official payment interfaces for Broadnet Fiber, BSNL Bharat Fibre, and Railwire Broadband subscribers in Avadi and Chennai.",
    url: "https://www.broadnet.in/pay-bill",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pay Broadnet, BSNL and Railwire Internet Bills Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pay Internet Bill Online | Broadnet Services",
    description: "Official payment portals for Broadnet, BSNL Bharat Fibre, and Railwire subscribers.",
    images: ["/og-image.png"],
  },
};

export default function PayBillPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Pay Internet Bill Online | Broadnet, BSNL & Railwire",
    "url": "https://www.broadnet.in/pay-bill",
    "description":
      "Official billing and online recharge interfaces for Broadnet Fiber, BSNL Bharat Fibre, and Railwire Broadband in Avadi and Chennai.",
    "provider": {
      "@type": "LocalBusiness",
      "name": SITE_CONFIG.name,
      "telephone": SITE_CONFIG.phones.primaryFormatted,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": SITE_CONFIG.address.street,
        "addressLocality": SITE_CONFIG.address.area,
        "addressRegion": SITE_CONFIG.address.state,
        "postalCode": SITE_CONFIG.address.pincode,
        "addressCountry": "IN",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header activePage="Pay Bill" />
      <main>
        <PayBillClient />
      </main>
      <Footer />
    </>
  );
}
