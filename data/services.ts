import {
  Camera,
  Fingerprint,
  PhoneCall,
  Wifi,
  Network,
  BellRing,
  Lock,
  Car,
  Globe,
  LucideIcon,
} from "lucide-react";

export interface ServiceDetail {
  id: string;
  order: number;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  href: string;
  badge?: string;
  isLeadDivision?: boolean;
  isMinorOffering?: boolean;
  brands: string[];
  certifications?: string[];
  features: string[];
  idealFor: string[];
  startingPrice?: string;
}

export const SERVICES_LIST: ServiceDetail[] = [
  {
    id: "cctv",
    order: 1,
    title: "CCTV Sales, Installation & Service",
    shortTitle: "CCTV Surveillance",
    tagline: "We Secure What Matters Most",
    description:
      "Avadi & Chennai's trusted lead division for IP and HD camera systems, ColorVu full-color night vision, audio & dual-light cameras, ANPR/OCR number plate recognition, cloud surveillance, and comprehensive CCTV AMC maintenance contracts.",
    href: "/security/cameras",
    badge: "Lead Division · Most Popular",
    isLeadDivision: true,
    brands: ["Hikvision", "CP PLUS", "Dahua", "HiFocus", "Prama"],
    certifications: ["Hikvision HCSA Certified", "CP PLUS Certified Surveillance Engineers"],
    startingPrice: "From ₹1,399 / Cam",
    features: [
      "IP & HD Bullet, Dome, and PTZ 360° Cameras (1080p to 4K UHD)",
      "Built-in Audio & Smart Dual-Light (IR + Warm White LED)",
      "ANPR / OCR Vehicle License Plate Recognition",
      "Cloud Surveillance & Zero-Lag Mobile Live Streaming",
      "Concealed Conduit Cabling & Tamper-Proof Junction Boxes",
      "Annual Maintenance Contracts (AMC) with <2-Hour Dispatch",
    ],
    idealFor: ["Homes & Villas", "Apartments & Gated Societies", "Commercial Stores", "Factories & Warehouses", "Schools & Colleges"],
  },
  {
    id: "biometric-attendance",
    order: 2,
    title: "Biometric Time Attendance Systems",
    shortTitle: "Biometric Attendance",
    tagline: "Precision Workforce Attendance & Automated Payroll",
    description:
      "Authorized eSSL partner deploying touchless facial recognition, multi-spectral optical fingerprint readers, and automated cloud attendance software with instant payroll export for businesses and institutions.",
    href: "/services/biometric-attendance",
    badge: "eSSL Authorised Partner",
    brands: ["eSSL", "Hikvision", "Realtime"],
    certifications: ["eSSL Authorised Enterprise Partner"],
    startingPrice: "From ₹4,500",
    features: [
      "Contactless 0.2s High-Speed Facial Recognition Terminals",
      "Scratch-Resistant Optical Fingerprint Sensors",
      "Automated Daily Shift Rosters, Overtime & Late-Mark Tracking",
      "Cloud & Local Attendance Software with Excel/Payroll Sync",
      "Built-in Battery Backup to Prevent Punch Drops during Power Outages",
      "Centralized Multi-Branch Attendance Consolidation",
    ],
    idealFor: ["Offices & IT Hubs", "Hospitals & Clinics", "Manufacturing Units", "Retail Showrooms", "Educational Institutions"],
  },
  {
    id: "door-phones",
    order: 3,
    title: "Video Door Phones (VDP)",
    shortTitle: "Video Door Phones",
    tagline: "See, Speak & Authorize Visitors Before Opening",
    description:
      "HD color touchscreen intercom monitors integrated with weatherproof pinhole doorbell cameras, smartphone remote release, and electronic latch control for modern residential protection.",
    href: "/security/door-phones",
    badge: "Smart Home Security",
    brands: ["Hikvision", "CP PLUS", "Panasonic", "CCL"],
    certifications: ["Certified Video Intercom Specialists"],
    startingPrice: "From ₹3,999",
    features: [
      "7-Inch & 10-Inch Crystal Color Indoor Touchscreen Panels",
      "Pinhole Weatherproof Night Vision Outdoor Bell Unit",
      "1-Touch Electronic Gate & Main Door Lock Release",
      "Mobile App Integration: Answer Door from Anywhere on Phone",
      "Automatic Visitor Snapshot Capture on Missed Calls",
      "Intercom Calling Between Multiple Flats / Floors",
    ],
    idealFor: ["Independent Houses & Villas", "Apartment Flats", "Duplex Homes", "Private Clinics", "Corporate Front Desks"],
  },
  {
    id: "enterprise-wifi",
    order: 4,
    title: "Wi-Fi Access Points & Enterprise Wi-Fi",
    shortTitle: "Enterprise Wi-Fi",
    tagline: "Seamless Multi-Floor High-Density Coverage Without Dead Zones",
    description:
      "Grandstream Certified Network Specialists delivering ceiling-mounted Wi-Fi 6 Gigabit access points, zero-handoff roaming across floors, cloud management, and dedicated guest captive portals.",
    href: "/services/enterprise-wifi",
    badge: "Grandstream Certified",
    brands: ["Grandstream", "Ruijie Reyee", "Aruba", "Ubiquiti"],
    certifications: ["Grandstream Certified Network Specialists"],
    startingPrice: "From ₹3,200 / AP",
    features: [
      "Wi-Fi 6 (802.11ax) Dual-Band & Tri-Band Gigabit Speeds",
      "Zero-Handoff Seamless Roaming (No Call Drops Between Rooms)",
      "High-Density Client Handling (Up to 250+ Devices Per AP)",
      "Cloud Controller Dashboard for Remote Monitoring & Bandwidth Control",
      "Custom Branded Guest Wi-Fi Captive Portal with OTP Login",
      "Clean Ceiling PoE Deployment with Hidden Cabling",
    ],
    idealFor: ["Multi-Storey Villas", "Boutique Hotels & Resorts", "Co-working & Corporate Offices", "Cafes & Restaurants", "Schools & Coaching Centers"],
  },
  {
    id: "networking",
    order: 5,
    title: "Networking & Network Infrastructure",
    shortTitle: "Network Infrastructure",
    tagline: "Rugged Structured Cabling, Server Racks & Next-Gen Firewalls",
    description:
      "End-to-end LAN/WAN engineering including Cat6/Cat6A structured cabling, server rack cable management, optical fiber splicing with OTDR testing, and Tactine UTM hardware firewalls for cyber protection.",
    href: "/services/networking",
    badge: "Tactine Firewall Dealer",
    brands: ["Tactine", "D-Link", "Schneider Digilink", "Cisco", "TP-Link Omada"],
    certifications: ["Tactine Firewall Dealer", "Certified Optical Fiber Engineers"],
    startingPrice: "Custom Project Quote",
    features: [
      "Structured Cat6/Cat6A High-Speed Copper Cabling",
      "Server Rack Setup, Patch Panel Termination & Cable Dressing",
      "Optical Fiber Backbone Deployment & Precision Fusion Splicing",
      "Tactine UTM Firewall Installation: Content Filtering & VPN",
      "Managed L2/L3 Gigabit PoE Network Switches",
      "Network Audit, Fluke Cable Certification & Performance Tuning",
    ],
    idealFor: ["Corporate Offices", "Manufacturing Plants", "Data Centers & Server Rooms", "Colleges & Labs", "Logistics Hubs"],
  },
  {
    id: "intrusion-alarms",
    order: 6,
    title: "Intrusion Alarm Systems",
    shortTitle: "Intrusion Alarms",
    tagline: "Active Perimeter Breach Detection with 110dB Deterrent",
    description:
      "Certified Hikvision intruder defense featuring infrared photoelectric compound wall beams, wireless PIR motion sensors, magnetic door contacts, and automated GSM phone call alerts.",
    href: "/security/intrusion-alarms",
    badge: "Hikvision Certified",
    brands: ["Hikvision AX PRO", "CP PLUS", "Securico"],
    certifications: ["Hikvision Certified Security Associate (HCSA)"],
    startingPrice: "From ₹6,999",
    features: [
      "Invisible Infrared Photoelectric Compound Wall Perimeter Beams",
      "Wireless PIR Motion Detectors with Pet-Immunity (No False Alarms)",
      "Piercing 110dB External Strobe Siren for Instant Intruder Deterrence",
      "Dual-Path GSM SIM + Wi-Fi Cloud Communicator Panel",
      "Automated Emergency Phone Calls & Push Alerts to 5 Numbers",
      "Emergency Panic Buttons for Elderly Family Members",
    ],
    idealFor: ["Isolated Villas & Farmhouses", "Jewellery & High-Value Retail", "Warehouses & Godowns", "Banks & Financial Offices", "Gated Compound Walls"],
  },
  {
    id: "access-control",
    order: 7,
    title: "Access Control Systems",
    shortTitle: "Access Control",
    tagline: "Restricted Door Entry with Electromagnetic Security Locks",
    description:
      "Heavy-duty 600lbs electromagnetic locks, RFID card readers, biometric door controllers, and emergency push-to-exit buttons to prevent unauthorized entry to server rooms, offices, and sensitive premises.",
    href: "/security/access-control",
    badge: "eSSL & Hikvision",
    brands: ["eSSL", "Hikvision", "ZKTeco"],
    certifications: ["Certified Physical Access Integrators"],
    startingPrice: "From ₹5,499",
    features: [
      "600 lbs Heavy-Duty Electromagnetic (EM) Locks & Drop Bolts",
      "Touchless RFID Card, Biometric Fingerprint & PIN Entry Readers",
      "Multi-Door Centralized Access Controllers with Wiegand Interface",
      "Time-Restricted Access Schedules for Employees & Cleaners",
      "Emergency Glass-Break Switch & Fire Alarm Integration",
      "Audit Trail Logs Recording Exact Entry Timestamps",
    ],
    idealFor: ["Corporate Server Rooms", "Executive Cabins", "Clinics & Laboratories", "Warehouses & Stockrooms", "Gyms & Clubhouses"],
  },
  {
    id: "entrance-security",
    order: 8,
    title: "Boom Barriers & Vehicle Access Control",
    shortTitle: "Boom Barriers & Screening",
    tagline: "Automated Vehicle Gates, Flap Barriers & Metal Detectors",
    description:
      "Motorized automatic boom barriers with RFID long-range vehicle windshield tags, walk-through metal detectors (DFMD), hand-held scanners, and optical flap barriers for crowd regulation.",
    href: "/services/entrance-security",
    badge: "Commercial Perimeter",
    brands: ["eSSL", "Hikvision", "CP PLUS"],
    certifications: ["Heavy-Duty Entrance Automation Integrators"],
    startingPrice: "Custom Site Quote",
    features: [
      "High-Speed Automatic Boom Barriers (3m to 6m Telescopic Boom)",
      "Long-Range RFID FASTag / Windshield Reader for Residents & Staff",
      "Anti-Collision Safety Loop Detectors & Infrared Photo-Sensors",
      "Walk-Through Metal Detector (DFMD) Multi-Zone Screening Frames",
      "Pedestrian Flap Barriers & Tripod Turnstiles with RFID Integration",
      "Manual Key Override for Uninterrupted Operation during Emergencies",
    ],
    idealFor: ["Apartment Entry Gates", "Tech Parks & Commercial Towers", "Factories & Industrial Yards", "Convention Centers & Malls", "Toll & Parking Lots"],
  },
  {
    id: "internet",
    order: 9,
    title: "Fiber Internet & Broadband",
    shortTitle: "Fiber Broadband",
    tagline: "Dedicated High-Speed Optical Fiber across Avadi & Nearby Areas",
    description:
      "Fiber broadband, available across Avadi and nearby areas. High-speed symmetrical internet powered by Broadnet's private 100+ km fiber network, BSNL Bharat Fibre, and RailWire.",
    href: "/internet",
    badge: "Avadi & Nearby Localities",
    isMinorOffering: false,
    brands: ["Broadnet Fiber", "BSNL Bharat Fibre", "RailWire"],
    certifications: ["BSNL FTTH Partner", "RailWire Franchise Partner"],
    startingPrice: "From ₹499 / Month",
    features: [
      "Private 100+ km Optical Fiber Backbone across Avadi",
      "Symmetric High-Speed Upload & Download up to 300 Mbps",
      "Zero-FUP Truly Unlimited Data with Local Peering",
      "Dual-Band Wi-Fi 5 / 6 Optical ONT Device Provided",
      "Official BSNL Bharat Fibre & RailWire Franchise Partner",
      "Local Avadi Support Team at Fire Station Road TNHB",
    ],
    idealFor: ["Homes in Avadi", "Local Shops & Small Businesses in Avadi and nearby areas"],
  },
];

export const BRAND_PARTNERS = [
  { name: "Hikvision", tag: "CCTV & Intrusion Alarms", cert: "HCSA Certified Partner", category: "cctv", accent: "#ED1C24" },
  { name: "CP PLUS", tag: "HD/IP Surveillance", cert: "Certified Surveillance Engineers", category: "cctv", accent: "#D71920" },
  { name: "Grandstream", tag: "Enterprise Wi-Fi & VoIP", cert: "Certified Network Specialists", category: "network", accent: "#004899" },
  { name: "eSSL", tag: "Biometrics & Access Control", cert: "Authorised Partner", category: "access", accent: "#0054A6" },
  { name: "Tactine", tag: "UTM Hardware Firewalls", cert: "Authorised Dealer", category: "network", accent: "#FF6A00" },
  // TODO: Proof needed for Dahua partner level certification tier [CONFIRM]
  { name: "Dahua", tag: "Smart Surveillance & AI", cert: "Installation Partner", category: "cctv", accent: "#E50012" },
  { name: "CCL", tag: "Intercom & Video Phones", cert: "Certified Dealer", category: "access", accent: "#1E3A8A" },
  // TODO: Proof needed for HiFocus integration partner certification tier [CONFIRM]
  { name: "HiFocus", tag: "CCTV Solutions", cert: "Integration Partner", category: "cctv", accent: "#0052CC" },
  // TODO: Proof needed for Prama channel partner certification tier [CONFIRM]
  { name: "Prama", tag: "Make in India Surveillance", cert: "Channel Partner", category: "cctv", accent: "#FF671F" },
  { name: "BSNL", tag: "Bharat Fibre FTTH", cert: "Strategic Telecom Partner", category: "telecom", accent: "#003399" },
  { name: "RailWire", tag: "High-Speed FTTH & OTT", cert: "Official Franchise Partner", category: "telecom", accent: "#0C2340" },
];

export const COMPANY_NUMBERS = [
  { value: "12+", label: "Years in Operation", detail: "Operating Since 2014" },
  { value: "10+", label: "Certified Staff", detail: "In-House Engineers" },
  { value: "2,500+", label: "Satisfied Clients", detail: "Homes & Corporates" },
  { value: "100+ km", label: "Private OFC Network", detail: "Direct Avadi Ring" },
];

export const MILESTONES = [
  { year: "2014", title: "Founded in Avadi", desc: "Started operations from Fire Station Road, delivering dedicated network connectivity." },
  { year: "2016", title: "RailWire Franchise Partner", desc: "Expanded fiber reach as official RailWire high-speed telecom partner." },
  { year: "2019", title: "BSNL FTTH Partner", desc: "Formed strategic partnership for national Bharat Fibre deployments across Avadi." },
  { year: "2024", title: "CP PLUS & Grandstream", desc: "Achieved certified surveillance engineer and enterprise Wi-Fi specialist credentials." },
  { year: "2025", title: "Hikvision Partner", desc: "Certified Hikvision HCSA security partner for advanced IP, ColorVu, and intrusion alarms." },
  { year: "2026", title: "eSSL Authorised Partner", desc: "Appointed official eSSL partner for biometric time attendance and entrance automation." },
];

export const PROCESS_STEPS = [
  { step: "01", name: "Enquiry", desc: "Connect with us via WhatsApp, call, or web form with your requirements." },
  { step: "02", name: "Assessment", desc: "Detailed technical evaluation by certified engineers to assess layout, cabling, and coverage." },
  { step: "03", name: "Quotation", desc: "Transparent itemized estimate with genuine manufacturer hardware & warranty." },
  { step: "04", name: "Installation", desc: "Clean conduit wiring, precision camera mounting, and tamper-proof terminations." },
  { step: "05", name: "Testing", desc: "Full camera focusing, mobile app configuration, remote view check, and client handover." },
  { step: "06", name: "AMC / Support", desc: "Prompt local technician dispatch, scheduled lens cleaning, and long-term maintenance." },
];

export const SERVICE_AREAS_DATA = {
  cctvSecurity: {
    coverage: "All of Chennai (with core focus on Avadi & Western Suburbs)",
    coreLocalities: [
      "Avadi",
      "Pattabiram",
      "Thiruverkadu",
      "Paruthipattu",
      "Ayapakkam",
      "Thirumullaivoyal",
      "Kovilpadagai",
      "Thirunindravur",
      "Ambattur",
      "Poonamallee",
      "Mogappair",
      "Anna Nagar",
      "Maduravoyal",
      "Porur",
    ],
  },
  internetBroadband: {
    coverage: "Avadi Only (Private OFC Backbone)",
    coreLocalities: [
      "TNHB Avadi",
      "Fire Station Road",
      "JB Nagar",
      "Vasantham Nagar",
      "Gandhi Nagar",
      "Nehru Nagar",
      "Kamaraj Nagar",
      "Cholambedu",
      "Anna Nagar Avadi",
      "Vaishnavi Nagar",
      "HVF Estate & Ordnance Road",
      "Paruthipattu (Avadi border)",
    ],
  },
};

export const CONTACT_INFO = {
  companyName: "Broadnet Internet Services",
  slogan: "Connecting People. Securing Places. Managing Access.",
  cctvTagline: "We Secure What Matters Most",
  phones: ["86818 88111"],
  primaryPhone: "86818 88111",
  secondaryPhone: "86818 88111",
  primaryPhoneClean: "8681888111",
  secondaryPhoneClean: "8681888111",
  emails: ["admin@broadnet.in", "support@broadnet.in"],
  primaryEmail: "admin@broadnet.in",
  supportEmail: "support@broadnet.in",
  address: "BroadNet Internet Services, 1093, Fire Station Road, TNHB, Avadi, Chennai – 600 054",
  googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=1093,+Fire+Station+Road,+TNHB,+Avadi,+Chennai,+Tamil+Nadu+600054",
  workingHours: "Mon — Sat: 9:00 AM — 7:00 PM (Emergency CCTV & Network on-call)",
};
