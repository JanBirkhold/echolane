"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";
import { btnGhost, btnPrimary } from "@/lib/button-styles";
import { navigation } from "@/lib/content";
import { contactHref } from "@/lib/contact-intents";
import { cn } from "@/lib/utils";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
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

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const close = useCallback(() => setOpen(false), []);

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

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className={cn(
          btnGhost,
          "inline-flex min-h-11 min-w-11 items-center justify-center px-3 py-2",
        )}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        onClick={() => setOpen((current) => !current)}
      >
        <MenuIcon open={open} />
      </button>

      {open ? (
        <div className="fixed inset-0 z-[60]">
          <button
            type="button"
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            aria-label="Menü schließen"
            onClick={close}
          />

          <nav
            id={panelId}
            aria-label="Mobile Navigation"
            className="absolute inset-y-0 right-0 flex w-[min(100%,20rem)] flex-col border-l border-border/60 bg-background shadow-[0_0_60px_rgba(0,0,0,0.45)]"
          >
            <div className="flex items-center justify-between border-b border-border/50 px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-hot">
                Menü
              </p>
              <button
                type="button"
                className={cn(
                  btnGhost,
                  "inline-flex min-h-10 min-w-10 items-center justify-center px-2 py-2",
                )}
                aria-label="Menü schließen"
                onClick={close}
              >
                <MenuIcon open />
              </button>
            </div>

            <ul className="flex-1 overflow-y-auto px-4 py-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={
                      item.href === "/kontakt"
                        ? contactHref("general")
                        : item.href
                    }
                    className="block border-b border-border/40 px-1 py-4 text-base font-medium tracking-[0.02em] text-muted transition-colors hover:text-accent-hot focus-visible:text-accent-hot focus-visible:outline-none"
                    onClick={close}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="border-t border-border/50 p-4">
              <Link
                href={contactHref("general")}
                className={cn(btnPrimary, "w-full")}
                onClick={close}
              >
                Anfrage senden
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
