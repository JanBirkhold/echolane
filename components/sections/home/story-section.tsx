import { BilingualBlock } from "@/components/sections/site-chrome";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { images, studioIntro } from "@/lib/content";

export function StorySection() {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-8">
          <ScrollReveal className="lg:col-span-5 lg:pt-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-accent-hot">
              The Studio
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
              {studioIntro.titleDe}
            </h2>
            <div className="mt-10 space-y-6 border-l border-accent-hot/40 pl-6">
              <BilingualBlock
                de={studioIntro.bodyDe}
                en={studioIntro.bodyEn}
                className="text-[15px] sm:text-base"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120} className="relative lg:col-span-7">
            <div className="relative aspect-[4/3] lg:-mr-12 lg:aspect-[16/11] xl:-mr-24">
              <ParallaxImage
                src={images.controlRoom}
                alt="Echolane Control Room — Harrison Console und Monitoring"
                sizes="(max-width: 1024px) 100vw, 58vw"
                intensity={0.12}
                wrapperClassName="absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-8 -left-4 hidden h-32 w-32 border border-accent-hot/30 lg:block"
            />
          </ScrollReveal>
        </div>

        <ScrollReveal delay={180} className="mt-20 lg:mt-28">
          <ul className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {studioIntro.offerings.map((item, index) => (
              <li
                key={item.de}
                className="group bg-background p-6 transition hover:bg-surface sm:p-8"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent-hot/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-foreground">
                  {item.de}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-muted">
                  {item.en}
                </p>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
