"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function UnderDevelopmentBanner() {
  return (
    <aside
      aria-label="Website development notification"
      className="w-full bg-gradient-to-r from-[#16143E] via-[#2D1254] to-[#16143E] text-white border-b border-white/10 px-3 py-2 text-xs relative z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center text-center gap-2 px-2">
        <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/20 text-amber-400">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
        </span>
        <p className="truncate sm:whitespace-normal text-white/90">
          <strong className="text-amber-300 font-bold uppercase tracking-wider text-[11px] mr-1.5">
            Website Under Development:
          </strong>
          <span>New features &amp; customer portal rolling out. Broadband installations &amp; security services are </span>
          <strong className="text-emerald-400 font-semibold">100% active</strong>.
        </p>
        <Link
          href="/under-development"
          className="hidden sm:inline-flex items-center gap-1 text-purple-300 hover:text-white font-bold ml-2 underline underline-offset-2 transition-colors cursor-pointer flex-shrink-0"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          <span>View Roadmap</span>
          <ArrowRight size={12} />
        </Link>
      </div>
    </aside>
  );
}
