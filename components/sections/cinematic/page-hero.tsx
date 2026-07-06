import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

type CinematicPageHeroProps = {
  image: string | StaticImageData;
  alt: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  priority?: boolean;
  imageClassName?: string;
  align?: "start" | "end";
};

export function CinematicPageHero({
  image,
  alt,
  eyebrow,
  title,
  description,
  className,
  priority = true,
  imageClassName,
  align = "start",
}: CinematicPageHeroProps) {
  return (
    <section
      className={cn("relative min-h-[52vh] overflow-hidden", className)}
    >
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        className={cn("object-cover object-center scale-105", imageClassName)}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/15" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,232,214,0.08),transparent_50%)]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div
        className={cn(
          "relative mx-auto flex min-h-[inherit] max-w-[90rem] items-end px-4 pb-12 pt-28 sm:px-8 sm:pb-16 lg:px-12",
          align === "end" && "justify-end",
        )}
      >
        <div className="max-w-3xl border-l border-accent-hot/40 pl-6 sm:pl-8">
          {eyebrow ? (
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-accent-hot">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
