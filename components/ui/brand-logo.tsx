import { brandLogos, type BrandSlug } from "@/lib/brand-logos";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  brand: BrandSlug;
  className?: string;
  animate?: boolean;
  animationDelay?: number;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "h-5 w-14",
  md: "h-7 w-20",
  lg: "h-9 w-24",
};

const wordmarkStyles = {
  wide: "text-[9px] tracking-[0.22em]",
  compact: "text-[10px] tracking-[0.14em]",
  script: "text-[11px] italic tracking-[0.04em] font-serif",
} as const;

export function BrandLogo({
  brand,
  className,
  animate = false,
  animationDelay = 0,
  size = "md",
}: BrandLogoProps) {
  const definition = brandLogos[brand];

  const wrapperClass = cn(
    "inline-flex shrink-0 items-center justify-center text-stone-300 transition duration-300 group-hover:text-brand-teal",
    sizeClasses[size],
    animate && "brand-logo-animated",
    className,
  );

  const style = animate
    ? ({ animationDelay: `${animationDelay}s` } as const)
    : undefined;

  if (definition.type === "path") {
    return (
      <svg
        viewBox={definition.viewBox ?? "0 0 24 24"}
        aria-label={definition.label}
        role="img"
        className={wrapperClass}
        style={style}
      >
        <path d={definition.path} fill="currentColor" />
      </svg>
    );
  }

  const textClass =
    definition.style === "script"
      ? wordmarkStyles.script
      : definition.style === "compact"
        ? wordmarkStyles.compact
        : wordmarkStyles.wide;

  return (
    <svg
      viewBox="0 0 120 32"
      aria-label={definition.label}
      role="img"
      className={wrapperClass}
      style={style}
    >
      <text
        x="60"
        y="20"
        textAnchor="middle"
        fill="currentColor"
        className={cn("font-semibold uppercase", textClass)}
        style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
      >
        {definition.display}
      </text>
    </svg>
  );
}

type GenericGearIconProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

export function GenericGearIcon({ className, size = "md" }: GenericGearIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn(
        "shrink-0 text-muted/50",
        size === "sm" ? "h-5 w-5" : size === "lg" ? "h-9 w-9" : "h-7 w-7",
        className,
      )}
    >
      <circle
        cx="12"
        cy="12"
        r="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      <path
        d="M12 4v2M12 18v2M4 12h2M18 12h2"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}
