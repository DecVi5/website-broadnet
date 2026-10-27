"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Calendar } from "lucide-react";
import { MILESTONES, COMPANY_NUMBERS } from "@/data/services";

export default function MilestonesSection() {
  const timelineRef = useRef<HTMLDivElement>(null);

  // Track scroll progress specifically through the timeline cards container
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 50%"],
  });

  // Smooth, gentle spring physics for natural progress feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 22,
    restDelta: 0.001,
  });

  // Line opacity requirement:
  // Before reaching 2016 (index 1 = ~0.2 progress), opacity is 80% (0.8).
  // Once it reaches 2016, opacity is 100% (1.0).
  const lineOpacity = useTransform(
    smoothProgress,
    [0, 0.18, 0.22, 1],
    [0.8, 0.8, 1, 1]
  );

  const lineWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // Track progress value for reactive milestone dot and border activations
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      setCurrentProgress(latest);
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  // Milestone threshold triggers (6 items evenly distributed: 0%, 20%, 40%, 60%, 80%, 100%)
  const thresholds = [0, 0.18, 0.38, 0.58, 0.78, 0.96];

  return (
    <section className="py-20 sm:py-24 bg-white border-t border-[#16143E]/8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#4E0DBA]/[0.03] via-[#EF1313]/[0.02] to-[#4E0DBA]/[0.03] blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4E0DBA]/10 text-[#4E0DBA] text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar size={13} />
            <span>12 Years of Proven Local Excellence</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight mb-4"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Milestones of Trust Since 2014
          </h2>
          <p
            className="text-[#16143E]/70 text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            From our founding at Fire Station Road, Avadi to partnering with global surveillance & networking giants, our journey is built on continuous technical credentials and client satisfaction.
          </p>
        </div>

        {/* Numbers Strip (Interactive hover cards) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {COMPANY_NUMBERS.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 rounded-2xl bg-[#FAFAFE] border border-[#16143E]/10 text-center hover:border-[#4E0DBA]/50 hover:bg-white hover:shadow-lg hover:shadow-[#4E0DBA]/10 transition-all duration-300 group cursor-pointer"
            >
              <div
                className="text-3xl sm:text-4xl font-extrabold text-[#16143E] group-hover:text-[#4E0DBA] transition-colors mb-1"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#EF1313] uppercase tracking-wider mb-0.5">
                {item.label}
              </div>
              <div className="text-xs text-[#16143E]/60 font-medium">{item.detail}</div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Horizontal / Desktop Grid */}
        <div ref={timelineRef} className="relative">
          {/* Central connecting line for desktop */}
          <div
            className="hidden lg:block absolute top-1/2 -translate-y-1/2 pointer-events-none z-0"
            style={{
              left: "8.33%",
              right: "8.33%",
              height: "3px",
            }}
          >
            {/* Background Track (Muted Line) */}
            <div className="absolute inset-0 h-[2.5px] -translate-y-1/2 bg-[#16143E]/10 rounded-full" />

            {/* Glowing Active Progress Line with Dynamic 80% -> 100% Opacity */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 left-0 h-[3px] rounded-full"
              style={{
                width: lineWidth,
                opacity: lineOpacity,
                background: "linear-gradient(90deg, #4E0DBA 0%, #7928CA 40%, #EF1313 100%)",
                boxShadow: "0 0 14px rgba(78, 13, 186, 0.7), 0 0 24px rgba(239, 19, 19, 0.45)",
              }}
            >
              {/* Glowing Head / Bead at the leading tip of the line */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 flex items-center justify-center pointer-events-none">
                {/* Soft expanding ping halo */}
                <span className="absolute w-7 h-7 rounded-full bg-[#EF1313]/30 animate-ping" />
                {/* Radiant purple/crimson aura */}
                <span className="absolute w-5 h-5 rounded-full bg-[#4E0DBA]/40 blur-xs" />
                {/* Inner glowing bead core */}
                <span className="relative w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-[#EF1313] to-[#4E0DBA] border-2 border-white shadow-[0_0_12px_#EF1313,0_0_20px_#4E0DBA]" />
              </div>
            </motion.div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-3 xl:gap-4.5 relative z-10">
            {MILESTONES.map((m, index) => {
              const isReached = currentProgress >= thresholds[index];
              return (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className={`p-3.5 sm:p-4 lg:p-3 xl:p-4.5 rounded-2xl bg-white border transition-all duration-300 group flex flex-col justify-between cursor-pointer relative overflow-hidden ${
                    isReached
                      ? "border-[#4E0DBA]/35 shadow-sm"
                      : "border-[#16143E]/12"
                  } hover:border-[#4E0DBA] hover:shadow-xl hover:shadow-[#4E0DBA]/12 hover:bg-gradient-to-b hover:from-white hover:to-[#4E0DBA]/[0.02]`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span
                        className="text-lg xl:text-xl font-extrabold text-[#EF1313] group-hover:text-[#4E0DBA] group-hover:scale-105 transition-all duration-200 inline-block"
                        style={{ fontFamily: "Syne, sans-serif" }}
                      >
                        {m.year}
                      </span>
                      <span
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          isReached
                            ? "bg-[#4E0DBA] ring-4 ring-[#4E0DBA]/25 shadow-[0_0_10px_rgba(78,13,186,0.6)] scale-110"
                            : "bg-[#16143E]/20 ring-2 ring-[#16143E]/10"
                        } group-hover:scale-125 group-hover:ring-8 group-hover:ring-[#4E0DBA]/30 group-hover:shadow-[0_0_14px_#4E0DBA]`}
                      />
                    </div>
                    <h3
                      className="text-xs sm:text-[13px] xl:text-sm font-bold text-[#16143E] group-hover:text-[#4E0DBA] transition-colors mb-1.5 leading-snug tracking-tight break-words"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {m.title}
                    </h3>
                    <p
                      className="text-[11px] xl:text-xs text-[#16143E]/65 leading-relaxed"
                      style={{ fontFamily: "DM Sans, sans-serif" }}
                    >
                      {m.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
