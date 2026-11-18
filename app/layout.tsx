import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import MobileStickyBar from "@/components/MobileStickyBar";
import PhoneCopyManager from "@/components/PhoneCopyManager";
import { getLocalBusinessJsonLd, getWebSiteJsonLd } from "@/lib/jsonLd";
import { LanguageProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-phone",
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
  metadataBase: new URL("https://broadnet.in"),
  title: {
    default: "CCTV Security & Fiber Internet in Avadi | Broadnet",
    template: "%s | Broadnet",
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
  authors: [{ name: "Broadnet Internet Services", url: "https://broadnet.in" }],
  creator: "Broadnet Internet Services",
  publisher: "Broadnet Internet Services",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "https://broadnet.in",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Avadi, Chennai, Tamil Nadu",
    "geo.position": "13.1147;80.1018",
    "ICBM": "13.1147, 80.1018",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://broadnet.in",
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
    index: process.env.NEXT_PUBLIC_DISABLE_INDEXING !== "true",
    follow: process.env.NEXT_PUBLIC_DISABLE_INDEXING !== "true",
    googleBot: {
      index: process.env.NEXT_PUBLIC_DISABLE_INDEXING !== "true",
      follow: process.env.NEXT_PUBLIC_DISABLE_INDEXING !== "true",
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
    <html
      lang="en"
      className={`dark ${plusJakartaSans.variable} ${inter.variable} ${openSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Context" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('broadnet-theme');if(t==='light'){document.documentElement.classList.remove('dark');document.documentElement.classList.add('light');document.documentElement.style.colorScheme='light';}else{document.documentElement.classList.add('dark');document.documentElement.classList.remove('light');document.documentElement.style.colorScheme='dark';}}catch(e){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 dark:bg-[#080D14] dark:text-[#F4F7FA] transition-colors duration-200">
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        <ThemeProvider>
          <LanguageProvider>
            <SmoothScrollProvider>
              {children}
              <MobileStickyBar />
              <PhoneCopyManager />
            </SmoothScrollProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}