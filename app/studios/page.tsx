import Image from "next/image";
import {
  BilingualBlock,
  SectionHeading,
} from "@/components/sections/site-chrome";
import { CinematicPageHero } from "@/components/sections/cinematic/page-hero";
import { CinematicSection } from "@/components/sections/cinematic/page-section";
import { EquipmentShowcase } from "@/components/sections/equipment-showcase";
import {
  harrisonConsole,
  images,
  liveRoom,
} from "@/lib/content";

import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Studios & Equipment — Harrison Console | Echolane",
  description:
    "Control Room, Live Room und Equipment — Harrison Master Console, Pro Tools HD, analoges Outboard und erstklassige Mikrofone.",
  path: "/studios",
  keywords: [
    "Recording Studio Equipment",
    "Harrison Console",
    "Control Room",
    "Live Room",
    "Pro Tools HD",
    "Tonstudio Ausstattung",
    "Aufnahmestudio Bergen",
  ],
});

export default function StudiosPage() {
  return (
    <>
      <CinematicPageHero
        image={images.studiosHero}
        alt="Echolane Recording Studio — Control Room"
        eyebrow="Studio"
        title="Studios & Equipment"
        description="Control Room, Live Room und High-End-Equipment für professionelle Musikproduktion."
        className="min-h-[58vh]"
        imageClassName="object-[28%_88%]"
        align="end"
      />

      <CinematicSection>
        <div className="overflow-hidden border border-border/80 bg-surface/60 backdrop-blur-sm">
          <div className="relative aspect-[1024/483] w-full">
            <Image
              src={images.harrison}
              alt="Harrison Master Recording Console im Echolane Control Room"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>

          <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14 lg:p-12">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-teal">
                Control Room
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
                {harrisonConsole.titleDe}
              </h2>
            </div>
            <div>
              <BilingualBlock
                de={harrisonConsole.bodyDe}
                en={harrisonConsole.bodyEn}
              />
            </div>
          </div>
        </div>
      </CinematicSection>

      <CinematicSection bordered surface>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 overflow-hidden border border-border/80 lg:order-1">
            <Image
              src={images.liveRoom}
              alt="Echolane Live Room"
              width={1500}
              height={732}
              className="aspect-[1500/732] h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl font-semibold text-accent-hot">{liveRoom.titleDe}</h2>
            <div className="mt-6">
              <BilingualBlock de={liveRoom.bodyDe} en={liveRoom.bodyEn} />
            </div>
          </div>
        </div>
      </CinematicSection>

      <CinematicSection>
        <div className="mb-12 overflow-hidden border border-border/80">
          <Image
            src={images.piano}
            alt="Ibach Konzertflügel Modell Richard Wagner"
            width={1200}
            height={621}
            className="aspect-[1200/621] w-full object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
        <SectionHeading
          eyebrow="Grand Piano"
          title="Ibach Konzertflügel"
          description="Modell Richard Wagner, 2,4 Meter — sehr klangschönes Instrument mit transparentem, voluminösem Klang."
          className="mb-14"
        />
      </CinematicSection>

      <EquipmentShowcase />
    </>
  );
}
