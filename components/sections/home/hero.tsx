import Image from "next/image";
import Link from "next/link";
import { contact, images, siteConfig } from "@/lib/content";
import { contactHref } from "@/lib/contact-intents";
import { btnPrimaryOutline, btnSecondary } from "@/lib/button-styles";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <Image
        src={images.hero}
        alt="Echolane Recording Studio — Control Room"
        fill
        priority
        className="hero-zoom-image object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(0,232,214,0.07),transparent_50%)]" />
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background/40 to-transparent" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[90rem] flex-col justify-end px-4 pb-16 pt-32 sm:px-8 sm:pb-24 lg:px-12">
        <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-steel">
          Bergen / Hohne
        </p>

        <h1 className="mt-5 max-w-4xl text-[clamp(2.5rem,8vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-foreground">
          Echolane Recording Studio
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-300 sm:text-lg">
          Recording · Mixing · Mastering
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href={contactHref("session")}
            className={cn(btnPrimaryOutline, "group gap-3")}
          >
            Studio anfragen
            <span
              aria-hidden="true"
              className="transition group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
          <Link href="/studios" className={btnSecondary}>
            Equipment
          </Link>
        </div>

        <p className="mt-14 max-w-2xl border-t border-border/60 pt-6 text-xs leading-relaxed tracking-wide text-muted sm:text-sm">
          {siteConfig.description}
          <span className="mx-2 text-border">·</span>
          {contact.city}
        </p>
      </div>
    </section>
  );
}
