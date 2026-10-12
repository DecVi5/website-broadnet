import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IndustriesClient from "./IndustriesClient";

export const metadata: Metadata = {
  title: "Industry Security & Networking Solutions Chennai | Broadnet",
  description:
    "Tailored surveillance and technology systems for homes, apartments, schools, factories, hotels, and offices across Chennai & Avadi. Professional site survey. Call 86818 88111.",
  keywords: [
    "Apartment CCTV Chennai",
    "Factory security surveillance Avadi",
    "School campus CCTV Chennai",
    "Office biometric access Avadi",
    "Hotel Wi-Fi solutions Chennai",
  ],
  alternates: {
    canonical: "https://www.broadnet.in/industries",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <Header activePage="Industries" />
      <IndustriesClient />
      <Footer />
    </>
  );
}
