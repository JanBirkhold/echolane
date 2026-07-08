"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { btnPrimary } from "@/lib/button-styles";
import { navigation } from "@/lib/content";
import { contactHref } from "@/lib/contact-intents";
import { cn } from "@/lib/utils";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? (
        <>
          <path d="M6 6l12 12" />
          <path d="M18 6 6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}

function navHref(href: string) {
  return href === "/kontakt" ? contactHref("general") : href;
}

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelId = useId();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    close();
  }, [close, pathname]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [close, open]);

  const overlay =
    open && mounted ? (
      <div className="fixed inset-0 z-[100] lg:hidden">
        <button
          type="button"
          className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"
          aria-label="Menü schließen"
          onClick={close}
        />

        <nav
          id={panelId}
          aria-label="Mobile Navigation"
          className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-accent-hot/25 bg-surface shadow-[0_0_80px_rgba(0,0,0,0.65)]"
        >
          <div className="flex items-center justify-between border-b border-border/70 px-5 pb-4 pt-[max(1rem,env(safe-area-inset-top))]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-hot">
              Navigation
            </p>
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center border border-border/80 bg-background text-foreground transition hover:border-accent-hot/50 hover:text-accent-hot"
              aria-label="Menü schließen"
              onClick={close}
            >
              <MenuIcon open />
            </button>
          </div>

          <ul className="flex-1 overflow-y-auto px-3 py-3">
            {navigation.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={navHref(item.href)}
                    className={cn(
                      "block border-l-2 px-4 py-4 text-lg font-medium tracking-[0.01em] transition-colors focus-visible:outline-none",
                      active
                        ? "border-accent-hot bg-accent-hot/10 text-accent-hot"
                        : "border-transparent text-foreground hover:border-accent-hot/50 hover:bg-surface-elevated hover:text-accent-hot",
                    )}
                    aria-current={active ? "page" : undefined}
                    onClick={close}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="border-t border-border/70 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <Link
              href={contactHref("general")}
              className={cn(btnPrimary, "w-full text-center")}
              onClick={close}
            >
              Anfrage senden
            </Link>
          </div>
        </nav>
      </div>
    ) : null;

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className={cn(
          "inline-flex min-h-11 items-center gap-2 border px-3 py-2 text-sm font-semibold uppercase tracking-[0.14em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-hot",
          open
            ? "border-accent-hot bg-accent-hot text-background"
            : "border-accent-hot/70 bg-surface-elevated text-foreground hover:border-accent-hot hover:bg-accent-hot/10 hover:text-accent-hot",
        )}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        onClick={() => setOpen((current) => !current)}
      >
        <MenuIcon open={open} />
        <span>Menü</span>
      </button>

      {mounted && overlay ? createPortal(overlay, document.body) : null}
    </div>
  );
}
