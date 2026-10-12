import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import TopServicesSection from "@/components/TopServicesSection";
import PackagePricingTeaser from "@/components/PackagePricingTeaser";
import NightVisionComparisonSlider from "@/components/NightVisionComparisonSlider";
import ProcessSection from "@/components/ProcessSection";
import ProjectsTeaser from "@/components/ProjectsTeaser";
import HomeFiberSection from "@/components/HomeFiberSection";
import LocationChecker from "@/components/LocationChecker";
import TestimonialsSection from "@/components/TestimonialsSection";
import HomeFaqSection from "@/components/HomeFaqSection";
import EnquirySection from "@/components/EnquirySection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Broadnet | CCTV Camera Installation & Security Systems in Chennai & Avadi",
  description:
    "Broadnet Internet Services (Est. 2014): Official Hikvision & CP PLUS CCTV camera installation, eSSL biometric attendance, video door phones, and enterprise networking across Chennai. Call 86818 88111.",
  alternates: {
    canonical: "https://www.broadnet.in",
  },
  openGraph: {
    title: "Broadnet | CCTV Security Systems & Fiber Internet in Chennai & Avadi",
    description:
      "Avadi & Chennai's authorized security systems integrator for Hikvision & CP PLUS CCTV cameras, eSSL biometrics, and high-speed fiber broadband. Established 2014.",
    url: "https://www.broadnet.in",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Broadnet Security Systems and Fiber Broadband",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Broadnet | CCTV Security Systems & Fiber Broadband",
    description:
      "Official Hikvision & CP PLUS CCTV camera installations and high-speed fiber broadband across Avadi & Chennai.",
    images: ["/og-image.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <Header activePage="Home" />
      <main>
        {/* 1. Hero with one clear H1, one primary CTA, one secondary CTA, and HUD simulation */}
        <HeroSection />

        {/* 2. Unified Trust Bar with verified statistics and certifications */}
        <TrustBar />

        {/* 3. Top 3 Services (CCTV, Biometrics + Video Door Phones, Wi-Fi + Networking) with View All link */}
        <TopServicesSection />

        {/* 4. Package Pricing Teaser with shared PackageCard component */}
        <PackagePricingTeaser />

        {/* 4.5 Interactive ColorVu vs Traditional IR Night Vision Split Comparison Slider */}
        <NightVisionComparisonSlider />

        {/* 5. 6-Step Compact Protocol (No duplicated detail pane) */}
        <ProcessSection />

        {/* 6. Real Projects Teaser showcasing completed Chennai installations */}
        <ProjectsTeaser />

        {/* 7. Fiber Broadband — Customer-Facing Dedicated Section */}
        <HomeFiberSection />

        {/* 8. Interactive Coverage Checker by Locality / Pincode */}
        <LocationChecker />

        {/* 9. Verified Google Reviews & Customer Testimonials */}
        <TestimonialsSection />

        {/* 10. Frequently Asked Questions with FAQPage JSON-LD schema */}
        <HomeFaqSection />

        {/* 11. Quote Enquiry Form */}
        <EnquirySection />
      </main>
      <Footer />
    </>
  );
}
