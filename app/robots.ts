import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Only disallow indexing if explicitly disabled via environment variable
  const isBlocked = process.env.NEXT_PUBLIC_DISABLE_INDEXING === "true";

  if (isBlocked) {
    return {
      rules: [
        {
          userAgent: "*",
          disallow: "/",
        },
      ],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Google-Extended",
          "Applebot-Extended",
          "CCBot",
          "cohere-ai",
          "Amazonbot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://broadnet.in/sitemap.xml",
  };
}
