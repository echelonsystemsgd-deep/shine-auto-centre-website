import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shine Auto Centre",
    short_name: "Shine Auto",
    description: "Car repairs, servicing, accident bodywork, and resprays in Stanwell & Ashford TW15 3AE.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#080B14",
    theme_color: "#080B14",
    categories: ["automotive", "business"],
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-maskable-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
