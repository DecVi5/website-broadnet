import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import MobileStickyBar from "@/components/MobileStickyBar";
import { getLocalBusinessJsonLd, getWebSiteJsonLd } from "@/lib/jsonLd";
import { LanguageProvider } from "@/lib/i18n";


const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#16143E",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.broadnet.in"),
  title: {
    default: "Broadnet Internet Services | Fiber Broadband & CCTV Security in Avadi, Chennai",
    template: "%s | Broadnet Internet Services",
  },
  description:
    "Broadnet delivers high-speed fiber internet from ₹499/mo, BSNL Bharat Fibre, and certified Hikvision & CP PLUS CCTV security systems with 2-hour technician dispatch across Avadi & Chennai.",
  keywords: [
    "Broadnet",
    "broadband connection Avadi",
    "fiber internet Chennai",
    "CCTV installation Avadi",
    "Hikvision CCTV dealer Chennai",
    "CP PLUS camera installation Avadi",
    "ISP Avadi",
    "BSNL Bharat Fibre Avadi",
    "Railwire FTTH Avadi",
    "biometric access control Chennai",
    "intercom system Avadi",
    "enterprise Wi-Fi installation",
    "structured cabling Avadi",
    "Boom barriers Avadi",
    "CCTV camera Thirumullaivoyal",
    "CCTV installation Ambattur",
    "CCTV installation Pattabiram",
    "CCTV Poonamallee",
  ],
  authors: [{ name: "Broadnet Internet Services", url: "https://www.broadnet.in" }],
  creator: "Broadnet Internet Services",
  publisher: "Broadnet Internet Services",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "https://www.broadnet.in",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/assets/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Avadi, Chennai, Tamil Nadu",
    "geo.position": "13.1147;80.1018",
    "ICBM": "13.1147, 80.1018",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.broadnet.in",
    siteName: "Broadnet Internet Services",
    title: "Broadnet | High-Speed Fiber Internet & CCTV Security in Avadi, Chennai",
    description:
      "Avadi's premier ISP and ELV security integrator. 100+ km private fiber network, official Hikvision & CP PLUS partner. 2-hour technician dispatch.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Broadnet Internet Services - CCTV Security Systems & Fiber Broadband",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Broadnet | Fiber Internet & Security Solutions Avadi",
    description:
      "Avadi's leading fiber ISP & certified CCTV security systems with 2-hour technician response.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessJsonLd = getLocalBusinessJsonLd();
  const webSiteJsonLd = getWebSiteJsonLd();

  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Context" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>
          <SmoothScrollProvider>
            {children}
            <MobileStickyBar />
          </SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}