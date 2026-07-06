import Link from "next/link";
import { ClientCoverMarquee } from "@/components/sections/client-cover-marquee";
import { contactHref } from "@/lib/contact-intents";
import { btnPrimary } from "@/lib/button-styles";

export function ExperienceSection() {
  return (
    <section
      aria-labelledby="experience-heading"
      className="relative overflow-hidden border-y border-border bg-surface py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(64,181,173,0.08),transparent_55%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-teal">
            Erfahrung & Referenzen
          </p>
          <h2
            id="experience-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Über vier Jahrzehnte Studio-Exzellenz
          </h2>
          <p className="mt-4 text-lg font-medium tracking-tight text-stone-300 sm:text-xl">
            We&apos;ve spent four decades preparing for your next project.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
            Seit den 1980er-Jahren verbinden wir analoge Wärme mit digitaler
            Präzision — von der ersten Demo bis zum Master für Major Labels und
            Independent-Künstler weltweit. Harrison-Konsole, erstklassige
            Mikrofone, jahrzehntelange Produktionsroutine: Ihr Sound ist bei uns
            in erfahrenen Händen.
          </p>
          <p className="mt-3 text-xs leading-relaxed text-muted/75 sm:text-sm">
            Four decades of recording, mixing and mastering — trusted by artists
            from David Hasselhoff to Philip Sayce and labels from Sony to indie
            imprints.
          </p>
        </div>

        <ClientCoverMarquee
          className="mt-14 sm:mt-16"
          itemClassName="rounded-xl shadow-lg shadow-black/25"
          imageSizes="176px"
          showGradient
        />

        <div className="mt-12 flex flex-col items-center gap-4 sm:mt-14">
          <Link href={contactHref("session")} className={btnPrimary}>
            Book a Session
          </Link>
          <Link
            href="/clients"
            className="text-sm text-muted transition hover:text-accent-hot"
          >
            Alle Referenzen ansehen →
          </Link>
        </div>
      </div>
    </section>
  );
}
