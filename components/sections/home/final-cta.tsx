import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { ClientCoverMarquee } from "@/components/sections/client-cover-marquee";
import { contactHref } from "@/lib/contact-intents";
import { btnPrimary, btnSecondary } from "@/lib/button-styles";
import { images } from "@/lib/content";

export function FinalCTA() {
  return (
    <>
      <section
        id="galerie"
        aria-labelledby="gallery-heading"
        className="py-24 sm:py-32"
      >
        <div className="mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-12">
          <ScrollReveal>
            <h2
              id="gallery-heading"
              className="mb-12 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl lg:mb-16"
            >
              Studio Galerie
            </h2>
          </ScrollReveal>

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {images.gallery.map((src, i) => (
              <ScrollReveal
                key={src}
                delay={(i % 3) * 80}
                className="mb-4 break-inside-avoid"
              >
                <div className="group overflow-hidden bg-surface">
                  <Image
                    src={src}
                    alt={`Echolane Studio Impression ${i + 1}`}
                    width={960}
                    height={640}
                    className="w-full object-cover transition duration-700 group-hover:scale-[1.03] group-hover:brightness-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="experience-heading"
        className="relative overflow-hidden border-t border-border"
      >
        <div className="relative min-h-[70vh]">
          <ParallaxImage
            src={images.liveRoom}
            alt=""
            sizes="100vw"
            intensity={0.06}
            wrapperClassName="absolute inset-0"
          />
          <div className="absolute inset-0 bg-background/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

          <div className="relative mx-auto flex min-h-[70vh] max-w-[90rem] flex-col justify-center px-4 py-24 sm:px-8 lg:px-12">
            <ScrollReveal className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-teal">
                Erfahrung & Referenzen
              </p>
              <h2
                id="experience-heading"
                className="mt-4 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl lg:text-6xl"
              >
                Über vier Jahrzehnte Studio-Exzellenz
              </h2>
              <p className="mt-5 text-lg font-medium tracking-tight text-stone-300 sm:text-xl">
                We&apos;ve spent four decades preparing for your next project.
              </p>
              <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
                Seit den 1980er-Jahren verbinden wir analoge Wärme mit digitaler
                Präzision — von der ersten Demo bis zum Master für Major Labels
                und Independent-Künstler weltweit. Harrison-Konsole,
                erstklassige Mikrofone, jahrzehntelange Produktionsroutine: Ihr
                Sound ist bei uns in erfahrenen Händen.
              </p>
              <p className="mt-3 text-xs leading-relaxed text-muted/75 sm:text-sm">
                Four decades of recording, mixing and mastering — trusted by
                artists from David Hasselhoff to Philip Sayce and labels from
                Sony to indie imprints.
              </p>

              <ClientCoverMarquee className="mt-12 sm:mt-14" />

              <div className="mt-12 flex flex-wrap gap-4">
                <Link href={contactHref("session")} className={btnPrimary}>
                  Book a Session
                </Link>
                <Link href="/clients" className={btnSecondary}>
                  Alle Referenzen ansehen →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
