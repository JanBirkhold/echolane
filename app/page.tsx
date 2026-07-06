import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/hero";
import { StorySection } from "@/components/sections/home/story-section";
import { YoutubeShowcase } from "@/components/sections/youtube-showcase";
import { ServicesSection } from "@/components/sections/home/services-section";
import { GenreMatrix } from "@/components/sections/home/genre-matrix";
import { ProcessTimeline } from "@/components/sections/home/process-timeline";
import { FinalCTA } from "@/components/sections/home/final-cta";
import { siteConfig } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Echolane Recording Studio — Mixing & Mastering | Bergen",
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <StorySection />
      <YoutubeShowcase />
      <ServicesSection />
      <GenreMatrix />
      <ProcessTimeline />
      <FinalCTA />
    </>
  );
}
