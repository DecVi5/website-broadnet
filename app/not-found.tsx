import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotFoundClient from "@/components/NotFoundClient";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Broadnet Internet Services & Security Systems",
  description:
    "The page you are looking for does not exist or has been relocated. Explore Broadnet's fiber internet plans, CCTV security systems, and direct technician support across Avadi and Chennai.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <Header activePage="" />
      <main id="main-content">
        <NotFoundClient />
      </main>
      <Footer />
    </>
  );
}
