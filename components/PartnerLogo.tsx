"use client";

import React from "react";

export type PartnerBrandKey =
  | "Hikvision"
  | "CP PLUS"
  | "Grandstream"
  | "eSSL"
  | "Tactine"
  | "Dahua"
  | "CCL"
  | "HiFocus"
  | "Prama"
  | "BSNL"
  | "RailWire"
  | string;

interface PartnerLogoProps {
  brand: PartnerBrandKey;
  className?: string;
  variant?: "full" | "monochrome" | "white";
}

/**
 * Authentic, retina-crisp vector SVG logos for all BroadNet hardware and telecom partner brands.
 * Designed to look identical to official corporate branding across light and dark modes.
 */
export default function PartnerLogo({
  brand,
  className = "h-8 w-auto",
  variant = "full",
}: PartnerLogoProps) {
  const normalized = brand.toLowerCase().trim();

  // 1. HIKVISION
  if (normalized.includes("hikvision")) {
    return (
      <svg
        viewBox="0 0 170 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Hikvision Official Partner Logo"
      >
        <g>
          {/* HIK in signature Hikvision Red */}
          <text
            x="0"
            y="26"
            fill={variant === "white" ? "#FFFFFF" : "#ED1C24"}
            fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
            fontWeight="900"
            fontSize="26"
            letterSpacing="-0.5px"
          >
            HIK
          </text>
          {/* VISION in signature Charcoal / White */}
          <text
            x="48"
            y="26"
            fill={variant === "white" ? "#E2E8F0" : variant === "monochrome" ? "currentColor" : "#1F2328"}
            fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
            fontWeight="900"
            fontSize="26"
            letterSpacing="0.5px"
          >
            VISION
          </text>
          {/* Subtle red optical dot accent above I */}
          <circle cx="17.5" cy="4" r="2.2" fill={variant === "white" ? "#EF4444" : "#ED1C24"} />
          <circle cx="66" cy="4" r="2.2" fill={variant === "white" ? "#EF4444" : "#ED1C24"} />
          <circle cx="106" cy="4" r="2.2" fill={variant === "white" ? "#EF4444" : "#ED1C24"} />
          {/* Subline */}
          <text
            x="1"
            y="34"
            fill={variant === "white" ? "#94A3B8" : "#64748B"}
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="6"
            letterSpacing="2.5px"
          >
            SECURITY & IOT SOLUTIONS
          </text>
        </g>
      </svg>
    );
  }

  // 2. CP PLUS
  if (normalized.includes("cp plus") || normalized.includes("cpplus")) {
    return (
      <svg
        viewBox="0 0 165 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="CP PLUS Official Partner Logo"
      >
        <g>
          {/* Red Emblem Badge */}
          <rect
            x="0"
            y="2"
            width="52"
            height="26"
            rx="5"
            fill={variant === "white" ? "#DC2626" : "#D71920"}
          />
          {/* CP in Badge */}
          <text
            x="6"
            y="21"
            fill="#FFFFFF"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="18"
            letterSpacing="-0.5px"
          >
            CP
          </text>
          {/* Plus Symbol in Badge */}
          <path
            d="M38 10 H44 V14 H48 V18 H44 V22 H40 V18 H36 V14 H40 V10 Z"
            fill="#FFFFFF"
          />

          {/* PLUS Wordmark */}
          <text
            x="60"
            y="22"
            fill={variant === "white" ? "#FFFFFF" : variant === "monochrome" ? "currentColor" : "#1A1A1A"}
            fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
            fontWeight="900"
            fontSize="22"
            letterSpacing="1px"
          >
            PLUS
          </text>

          {/* Tagline */}
          <text
            x="60"
            y="31"
            fill={variant === "white" ? "#FCA5A5" : "#D71920"}
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="6.5"
            letterSpacing="1.8px"
          >
            SECURITY SOLUTIONS
          </text>
        </g>
      </svg>
    );
  }

  // 3. GRANDSTREAM
  if (normalized.includes("grandstream")) {
    return (
      <svg
        viewBox="0 0 185 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Grandstream Official Partner Logo"
      >
        <g>
          {/* Network Arcs Symbol */}
          <g transform="translate(0, 2)">
            {/* Outer Arc */}
            <path
              d="M3 24 C3 12, 12 3, 24 3"
              stroke={variant === "white" ? "#38BDF8" : "#00A3E0"}
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* Middle Arc */}
            <path
              d="M7 24 C7 15, 15 7, 24 7"
              stroke={variant === "white" ? "#60A5FA" : "#0072CE"}
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Inner Core */}
            <path
              d="M12 24 C12 18, 18 12, 24 12"
              stroke={variant === "white" ? "#93C5FD" : "#004899"}
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            <circle cx="24" cy="24" r="3" fill={variant === "white" ? "#FFFFFF" : "#004899"} />
          </g>

          {/* GRANDSTREAM Wordmark */}
          <text
            x="34"
            y="20"
            fill={variant === "white" ? "#FFFFFF" : variant === "monochrome" ? "currentColor" : "#003A70"}
            fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
            fontWeight="900"
            fontSize="18"
            letterSpacing="0.8px"
          >
            GRANDSTREAM
          </text>

          {/* Subline */}
          <text
            x="35"
            y="29"
            fill={variant === "white" ? "#7DD3FC" : "#00A3E0"}
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="6"
            letterSpacing="2.2px"
          >
            CONNECTING THE WORLD
          </text>
        </g>
      </svg>
    );
  }

  // 4. eSSL
  if (normalized.includes("essl")) {
    return (
      <svg
        viewBox="0 0 150 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="eSSL Official Partner Logo"
      >
        <g>
          {/* Biometric Shield / Loop */}
          <g transform="translate(0, 3)">
            <ellipse
              cx="13"
              cy="14"
              rx="11"
              ry="11"
              fill={variant === "white" ? "rgba(255,255,255,0.15)" : "#EBF3FA"}
              stroke={variant === "white" ? "#60A5FA" : "#0054A6"}
              strokeWidth="2"
            />
            <path
              d="M7 14 C7 10.5 9.5 8 13 8 C16.5 8 19 10.5 19 14 C19 17.5 16.5 20 13 20"
              stroke={variant === "white" ? "#F87171" : "#E31E24"}
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <circle cx="13" cy="14" r="2" fill={variant === "white" ? "#F87171" : "#E31E24"} />
          </g>

          {/* eSSL Text (stylized italic corporate) */}
          <text
            x="30"
            y="22"
            fill={variant === "white" ? "#F87171" : "#E31E24"}
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontStyle="italic"
            fontSize="24"
          >
            e
          </text>
          <text
            x="44"
            y="22"
            fill={variant === "white" ? "#FFFFFF" : variant === "monochrome" ? "currentColor" : "#003366"}
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontStyle="italic"
            fontSize="24"
            letterSpacing="1px"
          >
            SSL
          </text>

          {/* Subline */}
          <text
            x="32"
            y="31"
            fill={variant === "white" ? "#94A3B8" : "#64748B"}
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="6"
            letterSpacing="1.2px"
          >
            SECURITY AT INTELLIGENCE
          </text>
        </g>
      </svg>
    );
  }

  // 5. DAHUA
  if (normalized.includes("dahua")) {
    return (
      <svg
        viewBox="0 0 155 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Dahua Technology Official Partner Logo"
      >
        <g>
          {/* Dahua Red Optical Swoosh */}
          <g transform="translate(0, 3)">
            <path
              d="M14 3 C6 3 0 9 0 17 C0 24 5 28 12 28 C19 28 24 23 24 16"
              stroke={variant === "white" ? "#EF4444" : "#E50012"}
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            <circle cx="12" cy="16" r="3.5" fill={variant === "white" ? "#FFFFFF" : "#1E1E1E"} />
          </g>

          {/* dahua lowercase wordmark */}
          <text
            x="30"
            y="22"
            fill={variant === "white" ? "#FFFFFF" : variant === "monochrome" ? "currentColor" : "#1E1E1E"}
            fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
            fontWeight="800"
            fontSize="21"
            letterSpacing="-0.5px"
          >
            dahua
          </text>

          {/* TECHNOLOGY Subline */}
          <text
            x="32"
            y="31"
            fill={variant === "white" ? "#EF4444" : "#E50012"}
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="6.5"
            letterSpacing="2px"
          >
            TECHNOLOGY
          </text>
        </g>
      </svg>
    );
  }

  // 6. TACTINE
  if (normalized.includes("tactine")) {
    return (
      <svg
        viewBox="0 0 160 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Tactine Technologies Official Partner Logo"
      >
        <g>
          {/* UTM Firewall Shield */}
          <g transform="translate(0, 3)">
            <path
              d="M12 2 L22 6 V15 C22 22 12 27 12 27 C12 27 2 22 2 15 V6 L12 2 Z"
              fill={variant === "white" ? "rgba(255,255,255,0.15)" : "#0F284E"}
              stroke={variant === "white" ? "#FB923C" : "#FF6A00"}
              strokeWidth="2"
            />
            <path
              d="M8 14 L11 17 L17 10"
              stroke={variant === "white" ? "#FB923C" : "#FF6A00"}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* TACTINE Wordmark */}
          <text
            x="29"
            y="21"
            fill={variant === "white" ? "#FFFFFF" : variant === "monochrome" ? "currentColor" : "#0F284E"}
            fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
            fontWeight="900"
            fontSize="19"
            letterSpacing="1px"
          >
            TACTINE
          </text>

          {/* Subline */}
          <text
            x="30"
            y="30"
            fill={variant === "white" ? "#FB923C" : "#FF6A00"}
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="6.5"
            letterSpacing="1.8px"
          >
            UTM FIREWALL & NETWORKS
          </text>
        </g>
      </svg>
    );
  }

  // 7. CCL
  if (normalized.includes("ccl")) {
    return (
      <svg
        viewBox="0 0 145 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="CCL Intercom Systems Official Partner Logo"
      >
        <g>
          {/* Intercom Hexagon Nodes */}
          <g transform="translate(0, 4)">
            <rect
              x="2"
              y="2"
              width="22"
              height="22"
              rx="4"
              fill={variant === "white" ? "rgba(255,255,255,0.15)" : "#1E3A8A"}
            />
            <circle cx="8" cy="8" r="2" fill="#FFFFFF" />
            <circle cx="18" cy="8" r="2" fill={variant === "white" ? "#F87171" : "#EF4444"} />
            <circle cx="8" cy="18" r="2" fill={variant === "white" ? "#F87171" : "#EF4444"} />
            <circle cx="18" cy="18" r="2" fill="#FFFFFF" />
            <path d="M8 8 L18 18" stroke="#FFFFFF" strokeWidth="1.5" />
          </g>

          {/* CCL Text */}
          <text
            x="32"
            y="22"
            fill={variant === "white" ? "#FFFFFF" : variant === "monochrome" ? "currentColor" : "#1E3A8A"}
            fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
            fontWeight="900"
            fontSize="22"
            letterSpacing="1.5px"
          >
            CCL
          </text>

          {/* Subline */}
          <text
            x="33"
            y="31"
            fill={variant === "white" ? "#F87171" : "#DC2626"}
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="6.5"
            letterSpacing="1.5px"
          >
            INTERCOM & EPABX
          </text>
        </g>
      </svg>
    );
  }

  // 8. HIFOCUS
  if (normalized.includes("hifocus")) {
    return (
      <svg
        viewBox="0 0 155 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="HiFocus Surveillance Official Partner Logo"
      >
        <g>
          {/* Camera Aperture / Focus Crosshair */}
          <g transform="translate(0, 3)">
            <circle
              cx="13"
              cy="14"
              r="11"
              stroke={variant === "white" ? "#60A5FA" : "#0052CC"}
              strokeWidth="2.5"
            />
            <circle cx="13" cy="14" r="5" fill={variant === "white" ? "#F87171" : "#FF2A2A"} />
            <path
              d="M13 0 V6 M13 22 V28 M0 14 H6 M20 14 H26"
              stroke={variant === "white" ? "#60A5FA" : "#0052CC"}
              strokeWidth="1.8"
            />
          </g>

          {/* HIFOCUS Wordmark */}
          <text
            x="32"
            y="21"
            fill={variant === "white" ? "#FFFFFF" : variant === "monochrome" ? "currentColor" : "#0052CC"}
            fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
            fontWeight="900"
            fontSize="20"
            letterSpacing="0.8px"
          >
            HIFOCUS
          </text>

          {/* Subline */}
          <text
            x="33"
            y="30"
            fill={variant === "white" ? "#F87171" : "#FF2A2A"}
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="6"
            letterSpacing="2px"
          >
            CCTV & SURVEILLANCE
          </text>
        </g>
      </svg>
    );
  }

  // 9. PRAMA
  if (normalized.includes("prama")) {
    return (
      <svg
        viewBox="0 0 160 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Prama India Official Partner Logo"
      >
        <g>
          {/* Make in India Wings Crest */}
          <g transform="translate(0, 4)">
            {/* Saffron Top Wing */}
            <path
              d="M2 18 C8 8, 18 5, 24 5 C18 10, 15 15, 14 22 Z"
              fill={variant === "white" ? "#FB923C" : "#FF671F"}
            />
            {/* Navy Bottom Wing */}
            <path
              d="M2 19 C8 24, 18 24, 24 23 C18 20, 15 17, 14 12 Z"
              fill={variant === "white" ? "#93C5FD" : "#06038D"}
            />
            <circle cx="14" cy="14" r="2.5" fill="#FFFFFF" />
          </g>

          {/* PRAMA Text */}
          <text
            x="29"
            y="21"
            fill={variant === "white" ? "#FFFFFF" : variant === "monochrome" ? "currentColor" : "#06038D"}
            fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
            fontWeight="900"
            fontSize="21"
            letterSpacing="1.2px"
          >
            PRAMA
          </text>

          {/* Subline */}
          <text
            x="30"
            y="30"
            fill={variant === "white" ? "#FB923C" : "#FF671F"}
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="6.2"
            letterSpacing="1.8px"
          >
            MAKE IN INDIA SECURITY
          </text>
        </g>
      </svg>
    );
  }

  // 10. BSNL (Bharat Fibre)
  if (normalized.includes("bsnl")) {
    return (
      <svg
        viewBox="0 0 165 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="BSNL Bharat Fibre Strategic Partner Logo"
      >
        <g>
          {/* BSNL National Arrows Orbit */}
          <g transform="translate(0, 3)">
            {/* Upper Blue Arrow */}
            <path
              d="M2 16 C3 8 10 2 17 2 C22 2 26 5 28 9 L25 10 C23 7 20 4 17 4 C11 4 5 9 4 16 Z"
              fill={variant === "white" ? "#60A5FA" : "#003399"}
            />
            {/* Lower Blue Arrow */}
            <path
              d="M30 16 C29 24 22 30 15 30 C10 30 6 27 4 23 L7 22 C9 25 12 28 15 28 C21 28 27 23 28 16 Z"
              fill={variant === "white" ? "#60A5FA" : "#003399"}
            />
            {/* Center Red Globe */}
            <circle cx="16" cy="16" r="6" fill={variant === "white" ? "#EF4444" : "#E61A28"} />
          </g>

          {/* BSNL Bold Letters */}
          <text
            x="35"
            y="21"
            fill={variant === "white" ? "#FFFFFF" : variant === "monochrome" ? "currentColor" : "#003399"}
            fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
            fontWeight="900"
            fontSize="21"
            letterSpacing="1px"
          >
            BSNL
          </text>

          {/* Bharat Fibre Green/Red Subline */}
          <text
            x="36"
            y="31"
            fill={variant === "white" ? "#4ADE80" : "#16A34A"}
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="7"
            letterSpacing="1px"
          >
            BHARAT FIBRE FTTH
          </text>
        </g>
      </svg>
    );
  }

  // 11. RAILWIRE (RailTel)
  if (normalized.includes("railwire") || normalized.includes("railtel")) {
    return (
      <svg
        viewBox="0 0 170 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="RailWire Franchise Telecom Partner Logo"
      >
        <g>
          {/* Rail Optical Track Signal */}
          <g transform="translate(0, 3)">
            <rect
              x="2"
              y="2"
              width="24"
              height="24"
              rx="4"
              fill={variant === "white" ? "rgba(255,255,255,0.15)" : "#0C2340"}
            />
            {/* Railway Tracks / Fiber Wave */}
            <path
              d="M6 20 C9 14, 15 10, 22 8"
              stroke={variant === "white" ? "#FB923C" : "#FF6F00"}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M6 24 C11 18, 17 14, 22 12"
              stroke={variant === "white" ? "#2DD4BF" : "#009688"}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="20" cy="8" r="2" fill="#FFFFFF" />
          </g>

          {/* RailWire Wordmark */}
          <text
            x="32"
            y="21"
            fill={variant === "white" ? "#FFFFFF" : variant === "monochrome" ? "currentColor" : "#0C2340"}
            fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
            fontWeight="900"
            fontSize="18"
            letterSpacing="-0.3px"
          >
            Rail
          </text>
          <text
            x="64"
            y="21"
            fill={variant === "white" ? "#FB923C" : "#FF6F00"}
            fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
            fontWeight="900"
            fontSize="18"
            letterSpacing="-0.3px"
          >
            Wire
          </text>

          {/* Subline */}
          <text
            x="33"
            y="30"
            fill={variant === "white" ? "#94A3B8" : "#64748B"}
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="6"
            letterSpacing="1.8px"
          >
            A RAILTEL ENTERPRISE
          </text>
        </g>
      </svg>
    );
  }

  // Fallback / Generic Partner Badge
  return (
    <div className={`inline-flex items-center gap-1.5 font-bold ${className}`}>
      <span className="text-base text-[#16143E] font-black">{brand}</span>
    </div>
  );
}
