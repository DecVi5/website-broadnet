"use client";

import Link from "next/link";
import { ArrowRight, Construction } from "lucide-react";

export default function UnderDevelopmentBanner() {
  return (
    <aside
      aria-label="Website under construction notification"
      className="w-full bg-gradient-to-r from-[#16143E] via-[#2D1254] to-[#16143E] text-white border-b border-amber-400/20 px-3 py-2 text-xs relative z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center text-center gap-2 px-2 flex-wrap sm:flex-nowrap">
        <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/20 text-amber-400">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
        </span>

        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/35 text-amber-300 font-bold text-[10px] tracking-wider uppercase flex-shrink-0">
          <Construction size={11} />
          <span>Under Construction</span>
        </span>

        <p className="text-white/90 text-[11px] sm:text-xs">
          <span className="sm:hidden">
            Services are <strong className="text-emerald-400 font-semibold">100% Active</strong>.
          </span>
          <span className="hidden sm:inline">
            This website is temporarily under construction and will be completed soon. All internet &amp; CCTV services are{" "}
            <strong className="text-emerald-400 font-semibold">100% active</strong>.
          </span>
        </p>

        <Link
          href="/under-development"
          className="inline-flex items-center gap-1 text-amber-300 hover:text-white font-bold ml-1 underline underline-offset-2 transition-colors cursor-pointer flex-shrink-0 text-[11px] sm:text-xs"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          <span>Progress</span>
          <ArrowRight size={11} />
        </Link>
      </div>
    </aside>
  );
}
