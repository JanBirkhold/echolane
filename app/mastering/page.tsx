import Link from "next/link";
import {
  BilingualBlock,
  SectionHeading,
} from "@/components/sections/site-chrome";
import { CinematicPageHero } from "@/components/sections/cinematic/page-hero";
import { CinematicSection } from "@/components/sections/cinematic/page-section";
import { contactHref } from "@/lib/contact-intents";
import { btnPrimary } from "@/lib/button-styles";
import { images, masteringText } from "@/lib/content";

import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Online Mastering Service — High-End Audio | Echolane",
  description:
    "Echolane Mastering Service — Online-Mastering, High-End-Class Audio für CD, DVD und Streaming weltweit.",
  path: "/mastering",
  keywords: [
    "Online Mastering",
    "Mastering Service",
    "Mastering Engineer Germany",
    "CD Mastering",
    "Streaming Mastering",
    "High-End Mastering",
  ],
});

export default function MasteringPage() {
  return (
    <>
      <CinematicPageHero
        image={images.masteringHero}
        alt="Echolane Mastering"
        eyebrow="Online Mastering"
        title={masteringText.title}
      />

      <CinematicSection>
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Online Mastering"
            title="High-End Class Audio"
            className="mb-10"
          />
          <BilingualBlock
            de={masteringText.bodyDe}
            en={masteringText.bodyEn}
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              "Stereobild & Mono-Kompatibilität",
              "Frequenzgang-Optimierung",
              "Dynamik & Song-Feeling erhalten",
            ].map((point) => (
              <div
                key={point}
                className="border border-border/80 bg-surface/60 p-5 text-center text-sm text-muted backdrop-blur-sm"
              >
                {point}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href={contactHref("mastering")} className={btnPrimary}>
              Mastering anfragen
            </Link>
          </div>
        </div>
      </CinematicSection>
    </>
  );
}
