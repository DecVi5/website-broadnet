import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | Broadnet Internet Services Avadi",
  description:
    "Privacy Policy for Broadnet Internet Services. How we collect, handle, and protect customer data for broadband connections and security system installations.",
  alternates: {
    canonical: "https://www.broadnet.in/privacy-policy/",
  },
  openGraph: {
    title: "Privacy Policy | Broadnet Internet Services",
    description:
      "Information handling and privacy commitments for Broadnet customers across Chennai and Avadi.",
    url: "https://www.broadnet.in/privacy-policy/",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Broadnet Privacy Policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Broadnet",
    description: "Privacy commitments for Broadnet Internet Services customers.",
    images: ["/og-image.png"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header activePage="About Us" />
      <main className="bg-white text-[#16143E] min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} variant="light" />

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#16143E] mt-6 mb-4"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Privacy Policy
          </h1>
          <p className="text-xs text-[#16143E]/50 uppercase tracking-wider mb-8 font-semibold">
            Last Updated: 1 November 2026 · Broadnet Internet Services, Avadi, Chennai
          </p>

          <div className="prose prose-slate max-w-none space-y-6 text-sm sm:text-base leading-relaxed text-[#16143E]/80">
            <section>
              <h2 className="text-xl font-bold text-[#16143E] mb-2 font-display">1. Information We Collect</h2>
              <p>
                When you request a quotation, service site survey, fiber broadband connection, or electronic security installation from Broadnet, we collect standard contact and location details needed to deliver on-ground engineering services:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Full Name and Contact Phone Number</li>
                <li>Email address (optional, for quotation summaries and invoices)</li>
                <li>Premises address, building type, and locality in Chennai/Avadi</li>
                <li>Technical project specifications and service requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#16143E] mb-2 font-display">2. How We Use Your Information</h2>
              <p>
                Your information is strictly used for operational service delivery:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Dispatching certified technicians to your site for feasibility audits and installation</li>
                <li>Sending pre-filled WhatsApp estimates and itemized quotations</li>
                <li>Managing ongoing broadband subscriber connectivity and bill generation</li>
                <li>Providing after-sales maintenance, AMC visits, and warranty service</li>
              </ul>
              <p className="mt-2 font-semibold text-[#16143E]">
                We never sell, rent, or trade your personal information to third-party telemarketers or advertisers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#16143E] mb-2 font-display">3. Video Footage &amp; Data Confidentiality</h2>
              <p>
                During CCTV or access control system handovers, all default passwords are reset, and live credentials (such as Hik-Connect or gCMOB accounts) are created solely on your private personal devices. Broadnet maintains zero remote backdoor access to customer camera feeds once client commissioning is finalized.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#16143E] mb-2 font-display">4. Contact Our Data Desk</h2>
              <p>
                If you have questions regarding this privacy policy or wish to update your subscriber records, please contact our administrative desk:
              </p>
              <div className="p-4 rounded-2xl bg-[#F8F9FD] border border-[#16143E]/10 mt-3 text-xs sm:text-sm">
                <p className="font-bold text-[#16143E]">Broadnet Internet Services</p>
                <p>1093, Fire Station Road, TNHB, Avadi, Chennai – 600 054</p>
                <p>Email: <a href="mailto:admin@broadnet.in" className="text-[#4E0DBA] font-semibold hover:underline">admin@broadnet.in</a> | Phone: +91 86818 88111</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

