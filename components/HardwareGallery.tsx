import React from "react";
import Image from "next/image";
import { Camera, CheckCircle2 } from "lucide-react";

export interface GalleryItem {
  title: string;
  category: string;
  description: string;
  imageSrc?: string;
  specs?: string[];
  status?: string;
}

interface HardwareGalleryProps {
  sectionSubtitle?: string;
  sectionTitle?: string;
  sectionDescription?: string;
  items: GalleryItem[];
  theme?: "dark" | "light";
}

export default function HardwareGallery({
  sectionSubtitle = "Hardware Showcase",
  sectionTitle = "Certified Security Hardware & Deployments",
  sectionDescription = "Explore our CP PLUS, Hikvision, and eSSL certified hardware components, precision engineered for tamper-proof durability and seamless surveillance.",
  items,
  theme = "light",
}: HardwareGalleryProps) {
  const isDark = theme === "dark";

  return (
    <section className={`py-20 sm:py-24 ${isDark ? "bg-[#0B091E] text-white" : "bg-white text-[#16143E]"} relative overflow-hidden`}>
      {/* Background Accent Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #EF1313 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EF1313] mb-3 font-display">
            <span className="w-4 h-px bg-[#EF1313]" /> {sectionSubtitle} <span className="w-4 h-px bg-[#EF1313]" />
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-display mb-4 ${isDark ? "text-white" : "text-[#16143E]"}`}>
            {sectionTitle}
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? "text-white/65" : "text-[#16143E]/65"}`}>
            {sectionDescription}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {items.map((item, idx) => (
            <div
              key={item.title + idx}
              className={`rounded-3xl border overflow-hidden transition-all duration-300 group hover:-translate-y-1 ${
                isDark
                  ? "bg-[#16143E]/60 border-white/10 hover:border-[#EF1313]/40 shadow-xl shadow-black/20"
                  : "bg-[#F8F9FD] border-[#16143E]/10 hover:border-[#EF1313]/30 shadow-sm hover:shadow-xl hover:shadow-[#16143E]/5"
              }`}
            >
              {/* Image Frame or Aesthetic Placeholder */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#120F2E] via-[#1A1647] to-[#0E0C26]">
                {item.imageSrc ? (
                  <div className="relative w-full h-full p-4 flex items-center justify-center">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  /* Ultra-clean Branded Placeholder Frame */
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center">
                    {/* Ambient Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#EF1313]/15 blur-2xl rounded-full pointer-events-none" />

                    {/* Placeholder Icon Graphic */}
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-white mb-3 shadow-inner group-hover:scale-110 group-hover:bg-[#EF1313] transition-all duration-300">
                      <Camera size={26} className="text-white/90" />
                    </div>

                    <span className="text-[11px] font-bold text-white/90 tracking-wide uppercase font-display">
                      {item.category}
                    </span>
                    <span className="text-[10px] text-white/50 mt-0.5">
                      Broadnet Certified Hardware
                    </span>

                    {/* Frame Corner Accents */}
                    <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-white/30 rounded-tl-sm" />
                    <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-white/30 rounded-tr-sm" />
                    <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-white/30 rounded-bl-sm" />
                    <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-white/30 rounded-br-sm" />
                  </div>
                )}

                {/* Status Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#16143E]/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {item.status || "Ready Stock"}
                  </span>
                </div>

                {/* Category Pill */}
                <div className="absolute bottom-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white/90 border border-white/15">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6">
                <h3 className={`text-lg font-bold font-display mb-2 ${isDark ? "text-white group-hover:text-[#EF1313]" : "text-[#16143E] group-hover:text-[#EF1313]"} transition-colors`}>
                  {item.title}
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${isDark ? "text-white/60" : "text-[#16143E]/65"}`}>
                  {item.description}
                </p>

                {/* Key Specs */}
                {item.specs && item.specs.length > 0 && (
                  <div className={`pt-3.5 border-t ${isDark ? "border-white/10" : "border-[#16143E]/10"} space-y-2`}>
                    {item.specs.map((spec) => (
                      <div key={spec} className="flex items-center gap-2.5 text-xs font-medium">
                        <CheckCircle2
                          size={15}
                          className="text-white fill-emerald-500 flex-shrink-0"
                        />
                        <span className={isDark ? "text-slate-200" : "text-[#16143E]/85"}>
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
