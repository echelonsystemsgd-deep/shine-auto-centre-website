import type { MetadataRoute } from "next";
import { isPrototypeMode, getSiteUrl } from "@/lib/business";

/**
 * Robots configuration with single-flag PROTOTYPE_MODE toggle
 * When NEXT_PUBLIC_PROTOTYPE_MODE is true (default): blocks all crawling
 * When NEXT_PUBLIC_PROTOTYPE_MODE is false: allows indexing and advertises sitemap
 */
export default function robots(): MetadataRoute.Robots {
  const isPrototype = isPrototypeMode();
  const siteUrl = getSiteUrl();

  if (isPrototype) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
