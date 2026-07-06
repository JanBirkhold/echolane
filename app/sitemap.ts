import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content";

const routes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/studios", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/mastering", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/clients", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/kontakt", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/impressum", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/datenschutz", changeFrequency: "yearly" as const, priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified,
    changeFrequency,
    priority,
  }));
}
