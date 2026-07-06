import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { portfolioEntries } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

type PortfolioShowcaseProps = {
  className?: string;
  showHeading?: boolean;
};

export function PortfolioShowcase({
  className,
  showHeading = true,
}: PortfolioShowcaseProps) {
  return (
    <section
      aria-labelledby="portfolio-showcase-heading"
      className={cn("py-20 sm:py-28", className)}
    >
      <div className="mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-12">
        {showHeading ? (
          <ScrollReveal className="mb-14 max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-teal">
              Portfolio
            </p>
            <h2
              id="portfolio-showcase-heading"
              className="mt-4 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl lg:text-5xl"
            >
              Engineered Releases
            </h2>
            <p className="mt-4 text-sm text-muted sm:text-base">
              Öffentlich belegbare Produktionen und Credits von Kai Schwerdtfeger
              — Rock, Metal, Blues und Alternative.
            </p>
          </ScrollReveal>
        ) : null}

        <ol className="divide-y divide-border/70">
          {portfolioEntries.map((entry, index) => (
            <li key={entry.id}>
              <ScrollReveal delay={index * 50}>
                <article className="group grid gap-6 py-8 sm:grid-cols-[7.5rem_1fr] sm:items-start sm:gap-8 lg:grid-cols-[9rem_1fr] lg:gap-10 lg:py-10">
                  <div className="relative aspect-square w-full max-w-[9rem] overflow-hidden sm:max-w-none">
                    <Image
                      src={entry.cover}
                      alt={`${entry.artist}${entry.album ? ` — ${entry.album}` : ""}`}
                      fill
                      sizes="144px"
                      className="object-cover transition duration-500 group-hover:brightness-110"
                      loading="lazy"
                    />
                  </div>

                  <div className="min-w-0 space-y-3">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent-hot transition-colors duration-300 group-hover:text-brand-teal">
                          {entry.artist}
                        </p>
                        {entry.album ? (
                          <h3 className="mt-1 text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-brand-teal sm:text-2xl">
                            {entry.album}
                          </h3>
                        ) : null}
                      </div>
                      {entry.year ? (
                        <span className="font-mono text-xs text-muted">
                          {entry.year}
                        </span>
                      ) : null}
                    </div>

                    <p className="text-xs uppercase tracking-[0.16em] text-muted">
                      {entry.genre}
                    </p>

                    {entry.roles.length > 0 ? (
                      <p className="text-xs leading-relaxed text-stone-300">
                        {entry.roles.join(" · ")}
                      </p>
                    ) : null}

                    {entry.credit ? (
                      <p className="max-w-2xl text-sm leading-relaxed text-muted">
                        {entry.credit}
                      </p>
                    ) : null}
                  </div>
                </article>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
