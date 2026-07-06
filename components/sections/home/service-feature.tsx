import Link from "next/link";
import { ServiceIcon } from "@/components/ui/service-icons";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ParallaxImage } from "@/components/ui/parallax-image";
import type { ContactIntentId } from "@/lib/contact-intents";
import { contactHref } from "@/lib/contact-intents";
import type { services } from "@/lib/content";

type Service = (typeof services)[number];

type ServiceFeatureProps = {
  service: Service;
  image: string;
  imageAlt: string;
  index: number;
  href: string;
  intent: ContactIntentId;
};

export function ServiceFeature({
  service,
  image,
  imageAlt,
  index,
  href,
  intent,
}: ServiceFeatureProps) {
  const reversed = index % 2 === 1;

  return (
    <ScrollReveal delay={index * 80}>
      <article className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-12">
        <div
          className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-6 ${
            reversed ? "" : ""
          }`}
        >
          <div
            className={`relative lg:col-span-7 ${
              reversed ? "lg:order-2 lg:col-start-6" : ""
            }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[16/10]">
              <ParallaxImage
                src={image}
                alt={imageAlt}
                sizes="(max-width: 1024px) 100vw, 55vw"
                intensity={0.1}
                wrapperClassName="absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                <ServiceIcon name={service.icon} className="w-20 sm:w-24" />
              </div>
            </div>
            <span
              aria-hidden="true"
              className="absolute -top-6 font-mono text-[clamp(4rem,12vw,9rem)] font-semibold leading-none tracking-tighter text-surface-elevated/80"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div
            className={`lg:col-span-5 ${
              reversed ? "lg:order-1 lg:col-start-1 lg:row-start-1" : "lg:pl-8"
            }`}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-teal">
              {service.title}
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl lg:text-5xl">
              {service.title}
            </h3>
            <p className="mt-6 text-base leading-relaxed text-stone-300">
              {service.descriptionDe}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {service.descriptionEn}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href={href}
                className="group inline-flex items-center gap-3 border-b border-accent-hot/50 pb-1 text-sm font-semibold uppercase tracking-[0.16em] text-accent-hot transition hover:border-accent-hot"
              >
                Mehr erfahren
                <span
                  aria-hidden="true"
                  className="transition group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
              <Link
                href={contactHref(intent)}
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-foreground transition hover:text-accent-hot"
              >
                Anfragen
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </article>
    </ScrollReveal>
  );
}
