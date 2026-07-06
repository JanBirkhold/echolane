"use client";

import Image from "next/image";
import { useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { studioIntro } from "@/lib/content";
import {
  youtubeChannel,
  youtubeEmbedUrl,
  youtubeThumbnail,
  youtubeVideos,
  type YoutubeVideo,
} from "@/lib/youtube";
import { cn } from "@/lib/utils";

const liveRecording = studioIntro.offerings[5];

export function YoutubeShowcase() {
  const [activeId, setActiveId] = useState<YoutubeVideo["id"]>(
    youtubeVideos[0].id,
  );
  const [embedLoaded, setEmbedLoaded] = useState(false);

  const activeVideo =
    youtubeVideos.find((video) => video.id === activeId) ?? youtubeVideos[0];

  const playVideo = (id: YoutubeVideo["id"]) => {
    setActiveId(id);
    setEmbedLoaded(true);
  };

  return (
    <section
      aria-labelledby="youtube-heading"
      className="relative border-y border-border py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(64,181,173,0.06),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-12">
        <ScrollReveal className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-accent-hot">
            Video
          </p>
          <h2
            id="youtube-heading"
            className="mt-4 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl lg:text-5xl"
          >
            {liveRecording.de}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            {liveRecording.en}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80} className="mt-10 lg:mt-12">
          <div className="overflow-hidden border border-border/80 bg-black">
            <div className="relative aspect-video w-full">
              {embedLoaded ? (
                <iframe
                  key={activeId}
                  src={youtubeEmbedUrl(activeId, true)}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setEmbedLoaded(true)}
                  className="group absolute inset-0 w-full cursor-pointer"
                  aria-label={`${activeVideo.title} abspielen`}
                >
                  <Image
                    src={youtubeThumbnail(activeId)}
                    alt=""
                    fill
                    sizes="(max-width: 1280px) 100vw, 1200px"
                    className="object-cover transition duration-500 group-hover:brightness-110"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-background/25 transition group-hover:bg-background/15" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center border border-foreground/30 bg-background/75 backdrop-blur-sm transition group-hover:scale-105 group-hover:border-accent-hot sm:h-16 sm:w-16">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="ml-0.5 h-6 w-6 fill-accent-hot"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>
                </button>
              )}
            </div>

            <p className="border-t border-border/80 bg-surface/90 px-4 py-3 text-sm font-medium leading-snug text-foreground sm:px-5">
              {activeVideo.title}
            </p>
          </div>

          <ul
            className="mt-4 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Video-Auswahl"
          >
            {youtubeVideos.map((video) => {
              const isActive = video.id === activeId;

              return (
                <li key={video.id} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => playVideo(video.id)}
                    aria-label={video.title}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative h-16 w-28 overflow-hidden border transition sm:h-[4.5rem] sm:w-32",
                      isActive
                        ? "border-accent-hot ring-1 ring-accent-hot/50"
                        : "border-border/80 opacity-75 hover:border-brand-teal/50 hover:opacity-100",
                    )}
                  >
                    <Image
                      src={youtubeThumbnail(video.id, "hq")}
                      alt=""
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={120} className="mt-8">
          <a
            href={youtubeChannel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-muted transition hover:text-accent-hot"
          >
            Alle Videos auf YouTube
            <span aria-hidden="true">↗</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
