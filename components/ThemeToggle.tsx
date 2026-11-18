"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/theme";

interface ThemeToggleProps {
  className?: string;
  size?: "sm" | "md";
}

export default function ThemeToggle({ className = "", size = "md" }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <button
        type="button"
        className={`inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 opacity-60 pointer-events-none ${
          size === "sm" ? "h-8 w-8 text-xs" : "h-9 w-9 text-sm"
        } ${className}`}
        aria-hidden="true"
      >
        <span className="w-4 h-4 rounded-full bg-slate-700/50 animate-pulse" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4E0DBA] cursor-pointer ${
        size === "sm" ? "h-8 w-8" : "h-9 w-9"
      } ${
        isDark
          ? "bg-[#121D2A] text-[#F4F7FA] border border-[#1E2E42] hover:bg-[#162333] hover:border-slate-600 shadow-xs"
          : "bg-slate-100 text-slate-900 border border-slate-200/90 hover:bg-slate-200/80 hover:border-slate-300 shadow-xs"
      } ${className}`}
      aria-label={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
      title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
    >
      <span className="sr-only">
        {isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
      </span>
      {isDark ? (
        <Sun size={17} className="text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon size={16} className="text-slate-700 transition-transform duration-300 -rotate-12 hover:rotate-0" />
      )}
    </button>
  );
}
