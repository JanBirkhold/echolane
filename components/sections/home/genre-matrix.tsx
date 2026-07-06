import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { studioIntro } from "@/lib/content";

const genreLabels = [
  "Rock",
  "Metal",
  "Alternative",
  "Hardcore",
  "Progressive",
  "Modern Heavy",
] as const;

export function GenreMatrix() {
  return (
    <section
      aria-labelledby="genre-heading"
      className="border-y border-border bg-surface py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-12">
        <ScrollReveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-accent-hot">
            Genre Focus
          </p>
          <h2
            id="genre-heading"
            className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.02em] sm:text-4xl"
          >
            {studioIntro.offerings[0].de}
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted">
            {studioIntro.offerings[0].en}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100} className="mt-12">
          <ul className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3 lg:grid-cols-6">
            {genreLabels.map((genre) => (
              <li
                key={genre}
                className="group flex min-h-[5.5rem] items-center justify-center bg-background px-4 py-6 text-center transition hover:bg-surface-elevated"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-400 transition group-hover:text-accent-hot">
                  {genre}
                </span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
