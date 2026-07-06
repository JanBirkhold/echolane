import Image from "next/image";
import Link from "next/link";
import { contactHref } from "@/lib/contact-intents";
import { btnPrimaryOutline, btnSecondary } from "@/lib/button-styles";
import { ServiceIcon } from "@/components/ui/service-icons";
import { images, services } from "@/lib/content";

export function HeroSection() {
  return (
    <section className="relative min-h-svh overflow-hidden">
      <Image
        src={images.hero}
        alt="Echolane Recording Studio — Control Room"
        fill
        priority
        className="object-cover object-center scale-105"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-background/5" />
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative mx-auto flex min-h-svh max-w-7xl items-end px-4 pb-10 pt-28 sm:px-6 sm:pb-14 lg:px-8">
        <div className="max-w-lg rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-md sm:p-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-stone-400">
            Bergen / Hohne
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Echolane Recording Studio
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-stone-300/90 sm:text-[15px]">
            Recording · Mixing · Mastering
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={contactHref("general")} className={btnPrimaryOutline}>
              Studio anfragen
            </Link>
            <Link href="/studios" className={btnSecondary}>
              Equipment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-border bg-surface p-8 text-center transition hover:border-brand-teal/30 hover:bg-surface-elevated sm:p-10"
            >
              <ServiceIcon name={service.icon} />
              <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-brand-teal">
                {service.title}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                {service.descriptionDe}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-muted/70">
                {service.descriptionEn}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  return (
    <section id="galerie" className="border-y border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight sm:text-4xl">
          Studio Galerie
        </h2>
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {images.gallery.map((src, i) => (
            <div
              key={src}
              className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-border"
            >
              <Image
                src={src}
                alt={`Echolane Studio Impression ${i + 1}`}
                width={960}
                height={640}
                className="w-full object-cover transition duration-500 hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
