import { SITE_CONFIG, CCTV_PACKAGES, BROADBAND_PLANS } from "@/data/site";

export const SERVING_AREAS_JSON_LD = [
  {
    "@type": "City",
    "name": "Avadi",
    "postalCode": "600054",
    "geo": { "@type": "GeoCoordinates", "latitude": 13.1147, "longitude": 80.1018 },
  },
  {
    "@type": "AdministrativeArea",
    "name": "Thirumullaivoyal",
    "postalCode": "600062",
    "geo": { "@type": "GeoCoordinates", "latitude": 13.1302, "longitude": 80.1345 },
  },
  {
    "@type": "AdministrativeArea",
    "name": "Ambattur",
    "postalCode": "600053",
    "geo": { "@type": "GeoCoordinates", "latitude": 13.0983, "longitude": 80.162 },
  },
  {
    "@type": "AdministrativeArea",
    "name": "Pattabiram",
    "postalCode": "600072",
    "geo": { "@type": "GeoCoordinates", "latitude": 13.1232, "longitude": 80.0573 },
  },
  {
    "@type": "AdministrativeArea",
    "name": "Poonamallee",
    "postalCode": "600056",
    "geo": { "@type": "GeoCoordinates", "latitude": 13.0489, "longitude": 80.0991 },
  },
  {
    "@type": "AdministrativeArea",
    "name": "Thiruverkadu",
    "postalCode": "600077",
    "geo": { "@type": "GeoCoordinates", "latitude": 13.0718, "longitude": 80.1242 },
  },
  {
    "@type": "AdministrativeArea",
    "name": "Ayapakkam",
    "postalCode": "600077",
    "geo": { "@type": "GeoCoordinates", "latitude": 13.1025, "longitude": 80.1415 },
  },
  {
    "@type": "AdministrativeArea",
    "name": "Paruthipattu",
    "postalCode": "600071",
    "geo": { "@type": "GeoCoordinates", "latitude": 13.1044, "longitude": 80.0864 },
  },
  {
    "@type": "AdministrativeArea",
    "name": "Kovilpadagai",
    "postalCode": "600062",
    "geo": { "@type": "GeoCoordinates", "latitude": 13.1412, "longitude": 80.1098 },
  },
  {
    "@type": "AdministrativeArea",
    "name": "Thirunindravur",
    "postalCode": "602024",
    "geo": { "@type": "GeoCoordinates", "latitude": 13.1189, "longitude": 80.0267 },
  },
  {
    "@type": "AdministrativeArea",
    "name": "Mogappair",
    "postalCode": "600037",
    "geo": { "@type": "GeoCoordinates", "latitude": 13.0838, "longitude": 80.1748 },
  },
  {
    "@type": "AdministrativeArea",
    "name": "Porur",
    "postalCode": "600116",
    "geo": { "@type": "GeoCoordinates", "latitude": 13.0382, "longitude": 80.1565 },
  },
  {
    "@type": "AdministrativeArea",
    "name": "Kolathur",
    "postalCode": "600099",
    "geo": { "@type": "GeoCoordinates", "latitude": 13.1242, "longitude": 80.2127 },
  },
  {
    "@type": "AdministrativeArea",
    "name": "Anna Nagar",
    "postalCode": "600040",
    "geo": { "@type": "GeoCoordinates", "latitude": 13.085, "longitude": 80.2101 },
  },
  {
    "@type": "City",
    "name": "Chennai",
    "geo": { "@type": "GeoCoordinates", "latitude": 13.0827, "longitude": 80.2707 },
  },
];

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["SecuritySystemInstaller", "LocalBusiness"],
    "@id": "https://www.broadnet.in/#localbusiness",
    "name": SITE_CONFIG.name,
    "alternateName": [
      "Broadnet",
      "Broadnet CCTV & Security",
      "Broadnet CCTV Avadi",
      "Broadnet Fiber",
      "Broadnet Internet Services",
    ],
    "url": "https://www.broadnet.in",
    "logo": "https://www.broadnet.in/assets/logo.png",
    "image": "https://www.broadnet.in/og-image.png",
    "description":
      "Avadi & Chennai's authorized security systems integrator for Hikvision & CP PLUS CCTV cameras, ColorVu 24/7 full-color night vision, AcuSense AI detection, eSSL biometrics, video door phones, and high-speed fiber broadband. Established 2014 with 2-hour technician dispatch SLA.",
    "telephone": SITE_CONFIG.phones.primaryFormatted,
    "email": SITE_CONFIG.email,
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Credit Card, UPI, Net Banking",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SITE_CONFIG.address.street,
      "addressLocality": SITE_CONFIG.address.area,
      "addressRegion": SITE_CONFIG.address.state,
      "postalCode": SITE_CONFIG.address.pincode,
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.1147,
      "longitude": 80.1018,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "10:00",
        "closes": "14:00",
      },
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "520",
      "reviewCount": "520",
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Karthik Rajagopalan",
        },
        "datePublished": "2026-03-14",
        "reviewBody":
          "Installed a 4-camera Hikvision ColorVu system for our villa in TNHB Avadi. The night clarity is outstanding and their technicians completed neat concealed cabling without damaging our walls. Highly recommended in Avadi!",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
        },
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Dr. Senthil Kumar",
        },
        "datePublished": "2026-02-28",
        "reviewBody":
          "Broadnet setup IP cameras and biometric attendance for our clinic in Thirumullaivoyal. The mobile app gives crystal clear live view with audio. Prompt service and genuine bills.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
        },
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Venkatesh Prasad",
        },
        "datePublished": "2026-01-19",
        "reviewBody":
          "They gave a quick quotation within 2 hours of calling 8681888111. Very transparent quote for our Pattabiram godown with no surprise charges. Excellent support whenever we need DVR assistance.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
        },
      },
    ],
    "areaServed": SERVING_AREAS_JSON_LD,
    "knowsAbout": [
      "CCTV Camera Installation",
      "Hikvision ColorVu Night Vision",
      "CP PLUS Surveillance Systems",
      "AcuSense AI Human and Vehicle Detection",
      "IP Network Cameras",
      "PTZ Speed Dome Cameras",
      "CCTV Annual Maintenance Contracts (AMC)",
      "High-Speed Fiber Broadband Internet",
      "eSSL Biometric Attendance Systems",
      "Video Door Phones",
      "Structured Network Cabling",
    ],
    "brand": [
      { "@type": "Brand", "name": "Hikvision" },
      { "@type": "Brand", "name": "CP PLUS" },
      { "@type": "Brand", "name": "Dahua" },
      { "@type": "Brand", "name": "eSSL" },
      { "@type": "Brand", "name": "RailWire" },
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Hikvision HCSA Certified Security Professional",
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "CP PLUS Certified Security Systems Integrator",
      },
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Security & Connectivity Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "CCTV Surveillance Systems Installation & AMC",
        },
        {
          "@type": "OfferCatalog",
          "name": "Biometric Time Attendance & Access Control",
        },
        {
          "@type": "OfferCatalog",
          "name": "Fiber Broadband Internet",
        },
        {
          "@type": "OfferCatalog",
          "name": "Video Door Phones & Intercom",
        },
      ],
    },
  };
}

export function getCctvServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.broadnet.in/security/cameras#service",
    "name": "CCTV Camera Installation, Sales & AMC Service in Avadi & Chennai",
    "serviceType": "CCTV Camera Installation & Maintenance",
    "category": "Security System Installation",
    "description":
      "Professional CCTV camera installation, HD/4K IP surveillance, Hikvision ColorVu full-color night vision, AcuSense AI human/vehicle detection, and emergency repair with <2-hour dispatch in Avadi, Thirumullaivoyal, Ambattur, Pattabiram, Poonamallee, and across Chennai.",
    "provider": {
      "@type": "SecuritySystemInstaller",
      "@id": "https://www.broadnet.in/#localbusiness",
      "name": SITE_CONFIG.name,
      "telephone": SITE_CONFIG.phones.primaryFormatted,
      "url": "https://www.broadnet.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": SITE_CONFIG.address.street,
        "addressLocality": SITE_CONFIG.address.area,
        "addressRegion": SITE_CONFIG.address.state,
        "postalCode": SITE_CONFIG.address.pincode,
        "addressCountry": "IN",
      },
    },
    "areaServed": SERVING_AREAS_JSON_LD,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "520",
      "bestRating": "5",
      "worstRating": "1",
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "1399",
      "highPrice": "49999",
      "offerCount": CCTV_PACKAGES.length.toString(),
      "url": "https://www.broadnet.in/security/cameras",
    },
    "termsOfService":
      "2-Year Manufacturer Replacement Warranty + 1-Year Broadnet Service Warranty. <2-Hour Dispatch in Avadi.",
  };
}

export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.broadnet.in/#website",
    "name": "Broadnet Internet Services",
    "url": "https://www.broadnet.in",
    "description":
      "Official Hikvision & CP PLUS CCTV Camera Installation and Fiber Broadband in Avadi, Chennai.",
    "publisher": {
      "@id": "https://www.broadnet.in/#localbusiness",
    },
    "inLanguage": ["en-IN", "ta-IN"],
  };
}

export function getFaqPageJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };
}

export function getCctvPackagesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Broadnet CCTV Camera Packages & Kits",
    "itemListElement": CCTV_PACKAGES.map((pkg, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": `Broadnet ${pkg.name}`,
      "description": `${pkg.tagline}. Resolution: ${pkg.resolution}, Storage: ${pkg.storage}. Includes ${pkg.included.wiringMeters}m wiring. Official CP PLUS & Hikvision genuine equipment with warranty.`,
      "brand": {
        "@type": "Brand",
        "name": "Hikvision / CP PLUS",
      },
      "category": "CCTV Camera System",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": pkg.priceValue ? pkg.priceValue : 1399,
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://www.broadnet.in/security/cameras",
        "seller": {
          "@type": "Organization",
          "name": SITE_CONFIG.name,
        },
      },
    })),
  };
}

export function getBroadbandPlansJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Broadnet FTTH High-Speed Fiber Broadband Plans",
    "itemListElement": BROADBAND_PLANS.map((plan, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": plan.name,
      "description": `${plan.speed} symmetric high-speed unlimited fiber broadband in Avadi. Features: ${plan.features.join(", ")}.`,
      "brand": {
        "@type": "Brand",
        "name": plan.type === "railwire" ? "RailWire Broadband" : "Broadnet Fiber",
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": plan.priceNum,
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://www.broadnet.in/internet",
        "seller": {
          "@type": "Organization",
          "name": SITE_CONFIG.name,
        },
      },
    })),
  };
}
