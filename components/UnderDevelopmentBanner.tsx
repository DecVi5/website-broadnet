"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, ArrowRight, X, Sparkles } from "lucide-react";
import { scrollToWithPhysics } from "@/lib/scrollPhysics";

export default function UnderDevelopmentBanner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if dismissed in session
    const dismissed = sessionStorage.getItem("broadnet_dev_banner_dismissed");
    if (dismissed === "true") {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("broadnet_dev_banner_dismissed", "true");
  };

  const handleScrollToRoadmap = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById("under-development");
    if (el) {
      e.preventDefault();
      window.history.pushState(null, "", "#under-development");
      scrollToWithPhysics("under-development");
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <aside
        aria-label="Website development notification"
        className="w-full bg-gradient-to-r from-[#16143E] via-[#2D1254] to-[#16143E] text-white border-b border-white/10 px-3 py-2 text-xs relative z-50 shadow-sm"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-hidden text-left mx-auto sm:mx-0">
            <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/20 text-amber-400">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            </span>
            <p className="truncate sm:whitespace-normal text-white/90">
              <strong className="text-amber-300 font-bold uppercase tracking-wider text-[11px] mr-1.5">
                Website Under Active Development:
              </strong>
              <span>New customer portal &amp; tools rolling out. Installations &amp; fiber network are </span>
              <strong className="text-emerald-400 font-semibold">100% active</strong>.
            </p>
            <a
              href="#under-development"
              onClick={handleScrollToRoadmap}
              className="hidden md:inline-flex items-center gap-1 text-purple-300 hover:text-white font-bold ml-2 underline underline-offset-2 transition-colors cursor-pointer flex-shrink-0"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              <span>View Roadmap</span>
              <ArrowRight size={12} />
            </a>
          </div>

          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Dismiss development banner"
            className="text-white/50 hover:text-white p-1 rounded-md transition-colors flex-shrink-0 cursor-pointer"
          >
            <X size={14} />
          </button>
        </div>
      </aside>
    </AnimatePresence>
  );
}
