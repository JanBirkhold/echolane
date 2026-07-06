import { ServiceFeature } from "@/components/sections/home/service-feature";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { images, services } from "@/lib/content";

const serviceLinks = [
  {
    src: images.liveRoom,
    alt: "Echolane Live Room",
    href: "/studios",
    intent: "recording" as const,
  },
  {
    src: images.harrison,
    alt: "Harrison Master Recording Console",
    href: "/studios",
    intent: "mixing" as const,
  },
  {
    src: images.controlRoom,
    alt: "Echolane Control Room — Mastering",
    href: "/mastering",
    intent: "mastering" as const,
  },
] as const;

export function ServicesSection() {
  return (
    <section id="services" className="relative border-t border-border">
      <div className="mx-auto max-w-[90rem] px-4 pb-8 pt-24 sm:px-8 lg:px-12 lg:pt-32">
        <ScrollReveal className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-teal">
            Services
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
            Recording · Mixing · Mastering
          </h2>
        </ScrollReveal>
      </div>

      {services.map((service, index) => (
        <ServiceFeature
          key={service.title}
          service={service}
          image={serviceLinks[index].src}
          imageAlt={serviceLinks[index].alt}
          href={serviceLinks[index].href}
          intent={serviceLinks[index].intent}
          index={index}
        />
      ))}
    </section>
  );
}
