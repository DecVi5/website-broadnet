"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window !== "undefined" && !window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  if (shouldReduceMotion) {
    return <div className="w-full min-h-screen flex flex-col">{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.28,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full min-h-screen flex flex-col"
    >
      {children}
    </motion.div>
  );
}
