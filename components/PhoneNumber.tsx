"use client";

import React, { useState } from "react";
import { Copy, Check, Phone } from "lucide-react";
import { copyPhoneNumberToClipboard } from "./PhoneCopyManager";

export interface PhoneNumberProps {
  number?: string;
  rawNumber?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  className?: string;
  numberClassName?: string;
  showIcon?: boolean;
  iconSize?: number;
  showCopyHint?: boolean;
  asLink?: boolean;
  href?: string;
}

export default function PhoneNumber({
  number = "86818 88111",
  rawNumber = "8681888111",
  prefix,
  suffix,
  className = "",
  numberClassName = "",
  showIcon = false,
  iconSize = 14,
  showCopyHint = true,
  asLink = false,
  href,
}: PhoneNumberProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    // Always copy to clipboard
    copyPhoneNumberToClipboard(rawNumber, number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    // If on desktop and it's a tel: link, prevent default so it doesn't try to open FaceTime/Skype
    if (typeof window !== "undefined" && window.innerWidth >= 768 && !href?.startsWith("https://wa.me")) {
      e.preventDefault();
    }
  };

  const content = (
    <span
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          copyPhoneNumberToClipboard(rawNumber, number);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }
      }}
      title="Click to copy phone number to clipboard"
      data-copy-phone="true"
      className={`inline-flex items-center gap-1.5 cursor-pointer group/phone select-all transition-all duration-150 ${className}`}
    >
      {showIcon && (
        <Phone
          size={iconSize}
          className="text-[#EF1313] group-hover/phone:scale-110 transition-transform flex-shrink-0"
        />
      )}
      {prefix && <span className="opacity-90">{prefix}</span>}

      <span
        className={`font-phone font-semibold tracking-wide tabular-nums transition-colors duration-150 ${
          copied ? "text-[#25D366]" : ""
        } ${numberClassName}`}
      >
        {number}
      </span>

      {suffix && <span className="opacity-90">{suffix}</span>}

      {showCopyHint && (
        <span
          className={`inline-flex items-center justify-center w-4 h-4 rounded text-[10px] transition-all ml-0.5 ${
            copied
              ? "text-[#25D366] scale-110"
              : "opacity-40 group-hover/phone:opacity-100 group-hover/phone:text-amber-500"
          }`}
          aria-label={copied ? "Copied" : "Copy to clipboard"}
        >
          {copied ? <Check size={12} strokeWidth={3} /> : <Copy size={11} />}
        </span>
      )}
    </span>
  );

  if (asLink) {
    const linkHref = href || `tel:+91${rawNumber}`;
    return (
      <a
        href={linkHref}
        onClick={handleClick}
        className="inline-flex items-center text-inherit no-underline"
        title="Click to copy (or call on mobile)"
      >
        {content}
      </a>
    );
  }

  return content;
}

