import type { MetadataRoute } from "next";
import { images, siteConfig } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    lang: "de",
    icons: [
      {
        src: images.icon192,
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: images.icon512,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: images.iconMaskable512,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
