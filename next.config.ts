import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // Disabled so /api/enquiry serverless function runs on Vercel
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "three"],
  },
};

export default nextConfig;
