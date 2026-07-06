"use client";

import { cn } from "@/lib/utils";
import type { ContactLocale } from "@/lib/contact-i18n";

type LocaleToggleProps = {
  locale: ContactLocale;
  onChange: (locale: ContactLocale) => void;
  className?: string;
};

export function LocaleToggle({ locale, onChange, className }: LocaleToggleProps) {
  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "inline-flex border border-border/80 bg-background/90 backdrop-blur-md",
        className,
      )}
    >
      {(["de", "en"] as const).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => onChange(lang)}
          aria-pressed={locale === lang}
          className={cn(
            "min-w-[2.75rem] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition",
            locale === lang
              ? "bg-accent-hot text-background"
              : "text-muted hover:text-foreground",
          )}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
