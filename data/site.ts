/**
 * Broadnet Internet Services — Single Source of Truth
 * 
 * Centralised business facts, contact points, pricing, SLAs, warranty terms,
 * and review statistics.
 *
 * NOTE: Values marked with [CONFIRM] require explicit confirmation from the client/business owner.
 * Never invent figures or alter confirmed parameters.
 */

export interface ContactInfo {
  name: string;
  shortName: string;
  tagline: string;
  foundedYear: number;
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  phones: {
    primary: string;
    secondary: string;
    primaryFormatted: string;
    secondaryFormatted: string;
    primaryTel: string;
    secondaryTel: string;
  };
  whatsapp: {
    number: string;
    cleanNumber: string;
    defaultMessage: string;
  };
  email: string;
  hours: string;
  stats: {
    reviewCount: string;
    rating: string;
    projectsCompleted: string;
    yearsInOperation: string;
    staffCount: string;
    fiberNetworkKm: string;
  };
  sla: {
    technicianResponse: string;
    serviceScheduling: string;
  };
  maxBroadbandSpeed: string;
  warranty: {
    cctv: string;
    biometric: string;
    networking: string;
    routerOnt: string;
  };
}

export const SITE_CONFIG: ContactInfo = {
  name: "Broadnet Internet Services",
  shortName: "Broadnet",
  tagline: "CCTV Security Systems & Fiber Broadband",
  foundedYear: 2014,
  address: {
    street: "1093 Fire Station Road, TNHB",
    area: "Avadi",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600054",
    full: "1093 Fire Station Road, TNHB, Avadi, Chennai 600054",
  },
  phones: {
    primary: "86818 88111",
    secondary: "86818 88111",
    primaryFormatted: "+91 86818 88111",
    secondaryFormatted: "+91 86818 88111",
    primaryTel: "tel:+918681888111",
    secondaryTel: "tel:+918681888111",
  },
  whatsapp: {
    number: "+918681888111",
    cleanNumber: "918681888111",
    defaultMessage: "Hello Broadnet, I would like to enquire about your services and get a quote.",
  },
  email: "admin@broadnet.in",
  // Business operating hours
  hours: "Mon – Sat: 9:00 AM – 8:30 PM, Sun: 10:00 AM – 2:00 PM",
  stats: {
    reviewCount: "500+",
    rating: "4.9",
    projectsCompleted: "2,500+",
    yearsInOperation: "12+",
    staffCount: "10+",
    fiberNetworkKm: "100+ km",
  },
  sla: {
    // Priority technician response and service scheduling
    technicianResponse: "< 2-Hour Technician Response in Avadi & Chennai",
    serviceScheduling: "Prompt Service & Installation (Same-Day / Next-Day Scheduling)",
  },
  maxBroadbandSpeed: "300 Mbps",
  warranty: {
    cctv: "2-Year Manufacturer Replacement Warranty + 1-Year Broadnet Service Warranty",
    biometric: "1-Year On-Site Manufacturer Warranty",
    networking: "1-Year Hardware Warranty",
    routerOnt: "1-Year Replacement Warranty",
  },
};

export interface PackageIncludedDetails {
  wiringMeters: number;
  extraWiringCost: string;
  gstNote: string;
  warranty: string;
}

export interface CCTVPackage {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceValue?: number;
  unit: string;
  badge?: string;
  popular?: boolean;
  cameraCount: number;
  resolution: string;
  storage: string;
  dvrChannels: string;
  features: string[];
  included: PackageIncludedDetails;
  ctaText: string;
}

/**
 * Reconciled CCTV Packages
 * Unified across /security/cameras, /cctv-landing, homepage, and configurator.
 */
export const CCTV_PACKAGES: CCTVPackage[] = [
  {
    id: "upgrade-single",
    name: "Standalone Camera Upgrade",
    tagline: "Ideal for expanding existing DVR setups or single-point monitoring",
    price: "Enquire",
    unit: "per camera onwards",
    badge: "Budget Friendly",
    popular: false,
    cameraCount: 1,
    resolution: "2MP Full HD 1080p",
    storage: "Existing Storage",
    dvrChannels: "Existing DVR compatible",
    features: [
      "2MP Full HD 1080p Resolution",
      "Infrared Night Vision up to 20m",
      "Weatherproof IP66 bullet or indoor dome",
      "Compatible with existing CP PLUS & Hikvision DVRs",
      "Precision focal alignment & connection testing",
    ],
    included: {
      wiringMeters: 10,
      extraWiringCost: "₹35 / metre beyond 10m",
      gstNote: "Exclusive of 18% GST",
      warranty: "1-Year On-Site Manufacturer Warranty",
    },
    ctaText: "Order Camera Upgrade",
  },
  {
    id: "home-starter-2",
    name: "2-Camera Home Starter Kit",
    tagline: "Perfect for independent houses, duplex entry points & small retail counters",
    price: "Enquire",
    unit: "complete turnkey kit",
    badge: "Compact Setup",
    popular: false,
    cameraCount: 2,
    resolution: "2MP Full HD (Indoor Dome + Outdoor Bullet)",
    storage: "500GB Surveillance HDD",
    dvrChannels: "4-Channel HD DVR",
    features: [
      "2x 2MP Full HD Cameras (Indoor Dome + Outdoor Bullet)",
      "4-Channel High Definition DVR / XVR with HDMI/VGA out",
      "500GB Surveillance-Grade Storage Hard Disk",
      "Power Supply SMPS & Water-Resistant Junction Boxes",
      "Live Mobile Viewing App Setup on Android & iPhone",
      "Neat PVC conduit concealment routing",
    ],
    included: {
      wiringMeters: 40,
      extraWiringCost: "₹35 / metre beyond 40m",
      gstNote: "Exclusive of 18% GST",
      warranty: "2-Year Manufacturer Replacement Warranty + 1-Year Broadnet Service",
    },
    ctaText: "Book 2-Camera Kit",
  },
  {
    id: "popular-home-4",
    name: "4-Camera Popular Security Kit",
    tagline: "Our #1 best-selling setup for residential compounds, villas & retail shops",
    price: "Enquire",
    unit: "complete turnkey kit",
    badge: "Most Popular",
    popular: true,
    cameraCount: 4,
    resolution: "2MP / 3MP ColorVu Full-Color Night Vision",
    storage: "1TB WD Purple / Seagate SkyHawk HDD",
    dvrChannels: "4-Channel Smart Audio DVR",
    features: [
      "4x 2MP / 3MP ColorVu / Full-Color Night Vision Cameras",
      "4-Channel Smart Audio DVR with Built-in Mic Support",
      "1TB WD Purple / Seagate SkyHawk 24/7 Surveillance HDD",
      "Centralized 12V 5A Power Distribution Unit",
      "High-grade BNC & DC connectors with weather boots",
      "Mobile App remote monitoring configuration on multiple devices",
      "Concealed heavy-duty conduit installation",
    ],
    included: {
      wiringMeters: 90,
      extraWiringCost: "₹35 / metre beyond 90m",
      gstNote: "Exclusive of 18% GST",
      warranty: "2-Year Manufacturer Replacement Warranty + 1-Year Broadnet Service",
    },
    ctaText: "Book 4-Camera Kit",
  },
  {
    id: "society-enterprise-8",
    name: "8-Camera Society & Enterprise Kit",
    tagline: "Engineered for gated communities, apartments, warehouses & schools",
    price: "Enquire",
    unit: "complete turnkey kit",
    badge: "Heavy-Duty IP / HD",
    popular: false,
    cameraCount: 8,
    resolution: "3MP / 5MP IP Network or HD High-Res",
    storage: "2TB WD Purple 24/7 HDD",
    dvrChannels: "8-Channel NVR / DVR",
    features: [
      "8x 3MP / 5MP IP Network or HD High-Res Weatherproof Cameras",
      "8-Channel Network Video Recorder (NVR) / High-Definition DVR",
      "2TB Surveillance Hard Drive (15-20 Days continuous loop)",
      "Smart Dual-Light IR + Warm LED for dark corners",
      "Multi-User Access (Guard Cabin + Association President)",
      "High-Speed Gigabit PoE Switch & Cat6 shielded cabling",
      "Dedicated technician dispatch with priority SLA",
    ],
    included: {
      wiringMeters: 180,
      extraWiringCost: "₹35 / metre beyond 180m",
      gstNote: "Exclusive of 18% GST",
      warranty: "2-Year Manufacturer Replacement Warranty + 1-Year Broadnet Service",
    },
    ctaText: "Book 8-Camera Setup",
  },
  {
    id: "commercial-custom",
    name: "Enterprise & Industrial Surveillance",
    tagline: "Custom-architected for multi-building campuses, factories & commercial parks",
    price: "Enquire",
    unit: "Any scale (16 to 128+ channels)",
    badge: "Enterprise Scale",
    popular: false,
    cameraCount: 16,
    resolution: "4K Ultra-HD + 360° PTZ Optical Zoom",
    storage: "RAID / Redundant Surveillance Storage",
    dvrChannels: "16–64+ Channel Enterprise NVR",
    features: [
      "16 to 64+ Channel 4K IP Surveillance with PTZ 360° Tracking",
      "ANPR / OCR Automated Vehicle Number Plate Recognition",
      "Optical Fiber Backhaul for long-distance perimeter feeds",
      "Centralized Command Center / Multi-Monitor Video Wall Setup",
      "Server Rack Integration, Optical Fiber Splicing & Patch Panels",
      "Custom SLA AMC Contract with priority on-site dispatch",
    ],
    included: {
      wiringMeters: 0,
      extraWiringCost: "Itemized as per custom site survey",
      gstNote: "Itemized with standard GST on quotation",
      warranty: "2-Year OEM Warranty + Custom Annual Maintenance Contract",
    },
    ctaText: "Request Enterprise Survey",
  },
];

export interface BroadbandPlan {
  id: string;
  name: string;
  speed: string;
  price: string;
  priceNum: number;
  period: string;
  popular?: boolean;
  badge?: string;
  type: "broadnet" | "railwire";
  ottApps?: string[];
  features: string[];
}

export const BROADBAND_PLANS: BroadbandPlan[] = [
  {
    id: "broadnet-60",
    name: "Broadnet Fiber 60",
    speed: "60 Mbps",
    price: "₹499",
    priceNum: 499,
    period: "month",
    type: "broadnet",
    features: [
      "Symmetric 60 Mbps Download & Upload",
      "Truly Unlimited Data — Zero Evening Throttling",
      "Free Standard Installation & Free ONT Router",
      "Low Latency Local Peering (YouTube, Netflix, Prime)",
      "Local Technician Support in Avadi",
    ],
  },
  {
    id: "broadnet-100",
    name: "Broadnet Fiber 100",
    speed: "100 Mbps",
    price: "₹599",
    priceNum: 599,
    period: "month",
    popular: true,
    badge: "Most Popular",
    type: "broadnet",
    features: [
      "Symmetric 100 Mbps Download & Upload",
      "Truly Unlimited High-Speed Fiber Data",
      "Free Dual-Band Wi-Fi 5 ONT on 6-Month Advance",
      "Ideal for 4K Streaming & Multi-Device Work-From-Home",
      "Priority Avadi Line Support",
    ],
  },
  {
    id: "broadnet-125",
    name: "Broadnet Fiber 125",
    speed: "125 Mbps",
    price: "₹699",
    priceNum: 699,
    period: "month",
    type: "broadnet",
    features: [
      "Symmetric 125 Mbps Speed",
      "Zero Data Caps & Zero FUP Limits",
      "Dual-Band Gigabit Wi-Fi Included",
      "Multi-User Simultaneous HD Streaming",
      "Same-Day Resolution Guarantee in Avadi",
    ],
  },
  {
    id: "broadnet-150",
    name: "Broadnet Fiber 150",
    speed: "150 Mbps",
    price: "₹799",
    priceNum: 799,
    period: "month",
    type: "broadnet",
    features: [
      "Symmetric 150 Mbps Ultra-Fast Speed",
      "Sub-10ms Gaming Latency & Direct Cloud Peering",
      "Dual-Band Wi-Fi Router + Gigabit Ports",
      "Dedicated High-Priority Bandwidth",
      "Priority Avadi Support Desk",
    ],
  },
  {
    id: "railwire-50-ott",
    name: "Railwire 50 + OTT",
    speed: "50 Mbps",
    price: "₹599",
    priceNum: 599,
    period: "month",
    type: "railwire",
    badge: "OTT Included",
    ottApps: ["Amazon Prime Video", "20+ OTT Apps", "450+ Live Channels"],
    features: [
      "50 Mbps Railwire FTTH Backbone Connection",
      "Amazon Prime Video + 20+ OTT Bundled",
      "450+ Live Regional TV Channels",
      "National Optical Backbone Reliability",
      "Local Avadi Franchisee Support by Broadnet",
    ],
  },
  {
    id: "railwire-100-ott",
    name: "Railwire 100 + OTT",
    speed: "100 Mbps",
    price: "₹799",
    priceNum: 799,
    period: "month",
    popular: true,
    badge: "Best Entertainment",
    type: "railwire",
    ottApps: ["Amazon Prime Video", "Disney+ Hotstar", "Zee5", "SonyLIV", "450+ Live Channels"],
    features: [
      "100 Mbps Railwire FTTH High-Speed Internet",
      "Amazon Prime Video + 20 Leading OTT Subscriptions",
      "450+ Live Channels with Catch-Up TV",
      "Unlimited Data with Zero Buffering",
      "Local Installation by Broadnet Avadi Engineers",
    ],
  },
  {
    id: "railwire-150-ott",
    name: "Railwire 150 + OTT",
    speed: "150 Mbps",
    price: "₹1,099",
    priceNum: 1099,
    period: "month",
    type: "railwire",
    ottApps: ["Amazon Prime Video", "20+ Premium OTTs", "450+ Live Channels"],
    features: [
      "150 Mbps High-Throughput Broadband",
      "Full Premium OTT Bundle with 4K Streaming",
      "Low Latency Cloud & Video Conferencing",
      "Dual-Band Gigabit Hardware Supported",
      "Avadi Dedicated Tech Support",
    ],
  },
  {
    id: "railwire-200-ott",
    name: "Railwire 200 + OTT",
    speed: "200 Mbps",
    price: "₹1,199",
    priceNum: 1199,
    period: "month",
    type: "railwire",
    ottApps: ["Amazon Prime Video", "20+ Premium OTTs", "450+ Live Channels"],
    features: [
      "200 Mbps Blazing Fast FTTH Speed",
      "Complete Entertainment & OTT Entertainment Suite",
      "Supports 15+ Devices Simultanously",
      "24/7 Optical Line Monitoring",
      "Broadnet Avadi On-Site Dispatch",
    ],
  },
];

/**
 * Normalise any Indian phone link to tel:+91XXXXXXXXXX
 */
export function normalizeTel(phone: string): string {
  const digits = phone.replace(/[^0-9]/g, "");
  if (digits.length === 10) {
    return `tel:+91${digits}`;
  }
  if (digits.length === 12 && digits.startsWith("91")) {
    return `tel:+${digits}`;
  }
  return `tel:+918681888111`;
}

/**
 * Builds a clean, professional WhatsApp prefilled link from user input.
 * Avoids awkward default strings like "My Name is a customer."
 */
export function buildWhatsAppLink(options?: {
  text?: string;
  service?: string;
  location?: string;
  name?: string;
  phone?: string;
  packageId?: string;
  estimatePrice?: string;
}): string {
  const phone = SITE_CONFIG.whatsapp.cleanNumber;

  if (options?.text) {
    return `https://wa.me/${phone}?text=${encodeURIComponent(options.text)}`;
  }

  const parts: string[] = ["Hello Broadnet,"];

  if (options?.service) {
    parts.push(`I would like to enquire about ${options.service}.`);
  } else {
    parts.push("I would like to enquire about your services and get an estimate.");
  }

  if (options?.estimatePrice) {
    parts.push(`(Estimated configuration: ${options.estimatePrice})`);
  }

  if (options?.location && options.location.trim()) {
    parts.push(`Location: ${options.location.trim()}.`);
  }

  if (options?.name && options.name.trim()) {
    parts.push(`My name is ${options.name.trim()}.`);
  }

  if (options?.phone && options.phone.trim()) {
    parts.push(`Contact: ${options.phone.trim()}.`);
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(parts.join(" "))}`;
}
