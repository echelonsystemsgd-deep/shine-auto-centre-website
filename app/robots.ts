import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Prototype mode: Disallow all web crawlers
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
    sitemap: "https://www.shineauto.co.uk/sitemap.xml",
  };
}
