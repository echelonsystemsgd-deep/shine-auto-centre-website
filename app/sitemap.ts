import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.shineauto.co.uk";
  const lastModified = new Date();

  const coreRoutes = [
    "",
    "/services",
    "/gallery",
    "/faq",
    "/contact",
    "/quote",
    "/privacy-policy",
    "/cookies",
    "/accessibility-statement",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...coreRoutes, ...serviceRoutes];
}
