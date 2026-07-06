import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { clientCovers } from "@/lib/clients-covers";

const roleLabels = ["Recording", "Mixing", "Mastering"] as const;

export function PortfolioGrid() {
  const featuredCovers = clientCovers.slice(0, 12);

  return (
    <section
      id="referenzen"
      aria-labelledby="portfolio-heading"
      className="border-t border-border bg-surface py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-12">
        <ScrollReveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-accent-hot">
              References
            </p>
            <h2
              id="portfolio-heading"
              className="mt-4 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl"
            >
              Our Clients
            </h2>
          </div>
          <Link
            href="/clients"
            className="text-sm font-medium uppercase tracking-[0.14em] text-muted transition hover:text-accent-hot"
          >
            Alle Referenzen →
          </Link>
        </ScrollReveal>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {featuredCovers.map((cover, index) => (
            <li key={cover.id}>
              <ScrollReveal delay={(index % 4) * 60}>
              <Link
                href="/clients"
                className="group relative block aspect-square overflow-hidden bg-background"
              >
                <Image
                  src={cover.src}
                  alt={`Album Cover ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                  quality={85}
                />
                <div className="absolute inset-0 bg-background/0 transition duration-500 group-hover:bg-background/50" />
                <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition duration-500 group-hover:translate-y-0">
                  <span className="inline-block border border-accent-hot/60 bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-hot">
                    {roleLabels[index % roleLabels.length]}
                  </span>
                </div>
              </Link>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
