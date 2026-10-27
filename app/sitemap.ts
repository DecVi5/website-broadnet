import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.broadnet.in";
  // Consistent release timestamp for accurate crawl cache invalidation
  const releaseDate = new Date("2026-10-09T00:00:00.000Z");

  return [
    {
      url: baseUrl,
      lastModified: releaseDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/cctv-landing`,
      lastModified: releaseDate,
      changeFrequency: "daily",
      priority: 0.98,
    },
    {
      url: `${baseUrl}/security`,
      lastModified: releaseDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/security/cameras`,
      lastModified: releaseDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/biometric-attendance`,
      lastModified: releaseDate,
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/security/door-phones`,
      lastModified: releaseDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/enterprise-wifi`,
      lastModified: releaseDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/networking`,
      lastModified: releaseDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/security/intrusion-alarms`,
      lastModified: releaseDate,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/security/access-control`,
      lastModified: releaseDate,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/services/entrance-security`,
      lastModified: releaseDate,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/internet`,
      lastModified: releaseDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/pay-bill`,
      lastModified: releaseDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: releaseDate,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified: releaseDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: releaseDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: releaseDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: releaseDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];
}
