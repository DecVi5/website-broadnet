"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { getFaqPageJsonLd } from "@/lib/jsonLd";
import { useLanguage } from "@/lib/i18n";

function WhatsAppIcon({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z" />
    </svg>
  );
}

export const HOME_FAQS = [
  {
    q: "Do you offer free on-site inspections for CCTV in Avadi and Chennai?",
    a: "Yes, 100% free with zero obligation. Our certified security engineer visits your property (villa, apartment, factory, or shop) to assess viewing angles, eliminate blind spots, calculate conduit cabling runs, and provide a transparent itemized quotation.",
  },
  {
    q: "How fast is your technician dispatch SLA if an issue occurs?",
    a: "Because our headquarters and technical team are based directly at 1093 Fire Station Road, TNHB, Avadi, we guarantee < 2-hour technician response in Avadi and same-day priority dispatch across Chennai.",
  },
  {
    q: "Are the cameras and hardware authentic with manufacturer warranty?",
    a: "Yes, Broadnet is an authorized Hikvision and CP PLUS partner. We unbox original sealed boxes on your premises, hand over serial-numbered warranty certificates, and provide direct RMA replacement support.",
  },
  {
    q: "What is included in the CCTV packages? Are there hidden wiring charges?",
    a: "Our packages include cameras, DVR/NVR, surveillance HDD, power supply, mobile app sync, and dedicated conduit cabling (e.g., 40m for 2-camera, 90m for 4-camera). If your property requires extra cabling, it is charged transparently at ₹35/metre without surprises.",
  },
  {
    q: "Where is Broadnet fiber internet available?",
    a: "Fiber broadband is delivered across Avadi and nearby areas (TNHB Avadi, Thirumullaivoyal, Pattabiram, Paruthipattu, Cholambedu, etc.) powered by our private 100+ km optical fiber backbone and RailWire/BSNL partnerships.",
  },
];

export default function HomeFaqSection() {
  const { lang, t } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqJsonLd = getFaqPageJsonLd(HOME_FAQS);

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-[#16143E]/8 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EF1313]/10 text-[#EF1313] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle size={14} />
            <span>Got Questions?</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16143E] tracking-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-[#16143E]/70 text-sm sm:text-base mt-2">
            Clear answers about our site visits, pricing, warranties, and technician response times.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5 mb-10">
          {HOME_FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className={`rounded-2xl border bg-white overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-[#4E0DBA]/35 shadow-md ring-1 ring-[#4E0DBA]/10"
                    : "border-[#16143E]/10 hover:border-[#4E0DBA]/30 shadow-2xs hover:shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAFAFE] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-bold text-sm sm:text-base transition-colors duration-200 ${
                      isOpen ? "text-[#4E0DBA]" : "text-[#16143E]"
                    }`}
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                      isOpen ? "bg-[#4E0DBA]/10 text-[#4E0DBA]" : "bg-[#16143E]/5 text-[#16143E]/60"
                    }`}
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ease-out ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: {
                            duration: 0.35,
                            ease: [0.04, 0.62, 0.23, 0.98],
                          },
                          opacity: {
                            duration: 0.25,
                            delay: 0.08,
                            ease: "easeOut",
                          },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: {
                            duration: 0.28,
                            ease: [0.04, 0.62, 0.23, 0.98],
                          },
                          opacity: {
                            duration: 0.16,
                            ease: "easeIn",
                          },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#16143E]/75 leading-relaxed border-t border-[#16143E]/6 pt-4 bg-[#FAFAFE]/60">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help prompt */}
        <div className="text-center p-6 rounded-2xl bg-[#F8F9FD] border border-[#16143E]/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left text-xs sm:text-sm text-[#16143E]/80">
            <strong>Have a specific property question?</strong> Chat directly with our technical team in Avadi.
          </div>
          <a
            href="https://wa.me/918681888111?text=Hello%20Broadnet%2C%20I%20have%20a%20question%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/35 text-[#15803d] text-xs font-bold flex items-center gap-1.5 transition-colors whitespace-nowrap"
          >
            <WhatsAppIcon size={15} className="text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
