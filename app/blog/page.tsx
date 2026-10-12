import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquirySection from "@/components/EnquirySection";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Tag,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Security & Networking Knowledge Hub | CCTV in Avadi, Chennai Blog",
  description:
    "Expert security guides, CCTV installation tips in Avadi, biometric attendance rules, and network infrastructure advice from certified engineers at Broadnet.",
  keywords: [
    "CCTV installation in Avadi",
    "Security camera guide Chennai",
    "Biometric attendance setup Chennai",
    "Best CCTV dealer Avadi",
    "Hikvision ColorVu camera review",
  ],
};

const POSTS = [
  {
    slug: "cctv-installation-in-avadi-guide",
    title: "CCTV Installation in Avadi: The Complete 2026 Buying & Setup Guide",
    excerpt:
      "Planning to secure your house or store in Avadi? Learn the key differences between IP vs HD cameras, storage calculation, conduit cable routing, and how to plan an expert on-site survey.",
    date: "March 2026",
    readTime: "5 min read",
    category: "CCTV & Surveillance",
    featured: true,
  },
  {
    slug: "colorvu-vs-traditional-ir-night-vision",
    title: "ColorVu vs Traditional IR Night Vision: Which Camera Is Best for Chennai Homes?",
    excerpt:
      "Say goodbye to grainy black-and-white night footage. Discover why Hikvision ColorVu and CP PLUS Full-Color technology give you vivid color evidence even in complete midnight darkness.",
    date: "February 2026",
    readTime: "4 min read",
    category: "Camera Technology",
    featured: false,
  },
  {
    slug: "biometric-attendance-systems-chennai-offices",
    title: "Biometric Attendance for Offices in Chennai: Face Recognition vs Fingerprint",
    excerpt:
      "How to eliminate proxy punching and automate payroll in Chennai businesses. Exploring eSSL contactless facial terminals, shift roistering, and cloud software.",
    date: "January 2026",
    readTime: "6 min read",
    category: "Biometrics & HR",
    featured: false,
  },
  {
    slug: "why-install-video-door-phone-villas-avadi",
    title: "Why Independent Villas in Avadi Need Smart Video Door Phones (VDP)",
    excerpt:
      "Screen delivery riders, prevent unexpected trespassers, and release your front gate latch from an indoor touch monitor or smartphone app.",
    date: "December 2025",
    readTime: "4 min read",
    category: "Home Automation",
    featured: false,
  },
  {
    slug: "structured-cat6-cabling-guide-chennai-offices",
    title: "Structured Cat6 Cabling vs Wi-Fi: How to Network Your Office Without Latency",
    excerpt:
      "Why professional server rack management, patch panels, and copper cabling are vital for corporate teams handling VoIP, cloud CRM, and surveillance streams.",
    date: "November 2025",
    readTime: "5 min read",
    category: "Network Infrastructure",
    featured: false,
  },
  {
    slug: "automatic-boom-barriers-apartment-societies",
    title: "Automatic Boom Barriers for Apartment Societies in Chennai: RFID vs FASTag",
    excerpt:
      "Regulate visitor chaos and ensure registered resident vehicle entry with heavy-duty motorized boom barriers and long-range windshield RFID sensors.",
    date: "October 2025",
    readTime: "5 min read",
    category: "Entrance Security",
    featured: false,
  },
];

export default function BlogPage() {
  return (
    <>
      <Header activePage="Blog" />
      <main className="bg-white text-[#16143E]">
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#F7F5FC] via-white to-white border-b border-[#16143E]/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-6">
              <Breadcrumbs
                items={[{ label: "Blog & Security Guides" }]}
                variant="light"
              />
            </div>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EF1313]/10 text-[#EF1313] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles size={13} />
                <span>Knowledge Base & Local Security Advice</span>
              </div>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#16143E] tracking-tight mb-4"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Security & Technology Insights
              </h1>
              <p className="text-base sm:text-lg text-[#16143E]/75 leading-relaxed">
                Practical guides written by our certified engineers on camera selection, biometric compliance, enterprise Wi-Fi design, and network infrastructure across Avadi and Chennai.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-[#FAFAFE] border-b border-[#16143E]/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {POSTS.map((post) => (
                <article
                  key={post.slug}
                  className="p-7 rounded-3xl bg-white border border-[#16143E]/10 hover:border-[#EF1313]/35 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#4E0DBA]/10 text-[#4E0DBA]">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-[#16143E]/50 font-medium">
                        <Calendar size={13} />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <h2
                      className="text-xl font-bold text-[#16143E] mb-3 leading-snug group-hover:text-[#EF1313] transition-colors"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {post.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#16143E]/70 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#16143E]/8 flex items-center justify-between">
                    <span className="text-xs text-[#16143E]/50 flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                    <a
                      href="#enquiry"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#EF1313] group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Ask an Engineer</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <EnquirySection initialService="Blog Consultation" initialType="security" />
      </main>
      <Footer />
    </>
  );
}
