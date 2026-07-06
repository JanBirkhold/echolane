import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { masteringText, services } from "@/lib/content";

export function ProcessTimeline() {
  const steps = [
    { ...services[0], step: "01" },
    { ...services[1], step: "02" },
    { ...services[2], step: "03" },
  ];

  return (
    <section
      aria-labelledby="process-heading"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(0,232,214,0.04)_50%,transparent_100%)]"
      />

      <div className="mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-12">
        <ScrollReveal className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-teal">
            Process
          </p>
          <h2
            id="process-heading"
            className="mt-4 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl lg:text-5xl"
          >
            {masteringText.title}
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
            {masteringText.bodyDe.split("\n\n")[0]}
          </p>
        </ScrollReveal>

        <ol className="relative mt-16 space-y-0 border-l border-border/80 pl-8 sm:pl-12">
          {steps.map((step, index) => (
            <li key={step.title}>
              <ScrollReveal delay={index * 100}>
              <div className="relative pb-16 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-[2.05rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-accent-hot bg-background sm:-left-[2.55rem]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-hot" />
                </span>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent-hot">
                  {step.step} — {step.title}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-stone-300 sm:text-base">
                  {step.descriptionDe}
                </p>
                <p className="mt-3 max-w-3xl text-xs leading-relaxed text-muted sm:text-sm">
                  {step.descriptionEn}
                </p>
              </div>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
