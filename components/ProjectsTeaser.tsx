"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import ProjectsGallery from "@/components/ProjectsGallery";
import { useLanguage } from "@/lib/i18n";

export default function ProjectsTeaser() {
  const { lang, t } = useLanguage();

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-[#16143E]/8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#4E0DBA]/10 text-[#4E0DBA] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles size={13} />
              <span>Proven Local Track Record</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Real Deployments Across Chennai
            </h2>
            <p className="text-[#16143E]/70 text-sm sm:text-base mt-2">
              From residential societies to manufacturing plants and medical clinics—see actual installations delivered by our certified in-house technicians.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#EF1313] hover:underline py-2 group"
          >
            <span>View All Installations & Gallery</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <ProjectsGallery isTeaser={true} />
      </div>
    </section>
  );
}
