import { cn } from "@/lib/utils";

export const btnPrimary =
  "inline-flex items-center justify-center rounded-none border border-accent-hot bg-accent-hot px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-background transition hover:bg-foreground hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-hot";

export const btnPrimaryOutline =
  "inline-flex items-center justify-center rounded-none border border-accent-hot bg-accent-hot/10 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-accent-hot transition hover:bg-accent-hot hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-hot";

export const btnSecondary =
  "inline-flex items-center justify-center rounded-none border border-steel/40 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-stone-300 transition hover:border-foreground hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-hot";

export const btnGhost =
  "inline-flex items-center justify-center rounded-none border border-accent-hot/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent-hot transition hover:bg-accent-hot hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-hot";

export function btnClass(
  variant: "primary" | "primaryOutline" | "secondary" | "ghost",
  className?: string,
) {
  const map = {
    primary: btnPrimary,
    primaryOutline: btnPrimaryOutline,
    secondary: btnSecondary,
    ghost: btnGhost,
  };
  return cn(map[variant], className);
}
