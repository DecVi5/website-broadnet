"use client";

import Link from "next/link";
import Image from "next/image";

interface BroadnetLogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function BroadnetLogo({
  variant = "light",
  className = "",
}: BroadnetLogoProps) {
  const isDark = variant === "dark";

  return (
    <Link
      href="/"
      className={`inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4E0DBA] rounded-xl transition-transform active:scale-[0.98] ${className}`}
      aria-label="Broadnet Internet & Security Services - Home"
    >
      <Image
        src="/assets/logo.png"
        alt="Broadnet Internet & Security Services Logo"
        width={200}
        height={82}
        className={`h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105 ${
          isDark ? "brightness-0 invert" : ""
        }`}
        priority
      />
    </Link>
  );
}
