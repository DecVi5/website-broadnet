import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service, warranty policy, and installation commitments for Broadnet Internet Services and security systems in Avadi, Chennai.",
  alternates: {
    canonical: "https://www.broadnet.in/terms/",
  },
  openGraph: {
    title: "Terms of Service | Broadnet Internet Services",
    description:
      "Installation terms, warranty policies, and service level agreements for Broadnet customers across Chennai and Avadi.",
    url: "https://www.broadnet.in/terms/",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Broadnet Terms of Service" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Broadnet",
    description: "Terms and conditions for Broadnet security and broadband installations.",
    images: ["/og-image.png"],
  },
};

export default function TermsPage() {
  return (
    <>
      <Header activePage="About Us" />
      <main className="bg-white text-[#16143E] min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={[{ label: "Terms of Service" }]} variant="light" />

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#16143E] mt-6 mb-4"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Terms of Service
          </h1>
          <p className="text-xs text-[#16143E]/50 uppercase tracking-wider mb-8 font-semibold">
            Last Updated: 1 November 2026 · Broadnet Internet Services, Avadi, Chennai
          </p>

          <div className="prose prose-slate max-w-none space-y-6 text-sm sm:text-base leading-relaxed text-[#16143E]/80">
            <section>
              <h2 className="text-xl font-bold text-[#16143E] mb-2 font-display">1. Turnkey Scope of Work</h2>
              <p>
                Broadnet supplies and installs genuine electronic security systems (CCTV, access control, intercoms, boom barriers) and fiber broadband connections across Chennai &amp; Avadi. Quotations are provided itemized on-site or via WhatsApp following initial technical feasibility review.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#16143E] mb-2 font-display">2. Hardware Warranty &amp; Zero Subcontracting</h2>
              <p>
                All camera units, biometric machines, and DVR/NVR hardware carry official manufacturer warranties (typically 1 to 2 years replacement warranty). Broadnet warrants all wiring, conduit workmanship, and alignment executed by our permanent in-house technician fleet.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#16143E] mb-2 font-display">3. Service Level Agreement (SLA)</h2>
              <p>
                Service calls logged through our support line (
                <a
                  href="tel:+918681888111"
                  data-copy-phone="true"
                  title="Click to copy 86818 88111"
                  className="font-phone font-bold text-[#16143E] hover:text-[#EF1313] transition-colors cursor-pointer"
                >
                  +91 86818 88111
                </a>
                ) receive rapid technician dispatch within 2 hours in Avadi and surrounding local zones (Thirumullaivoyal, Ambattur, Pattabiram, Poonamallee).
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

