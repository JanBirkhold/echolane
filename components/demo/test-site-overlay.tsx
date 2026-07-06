"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  isDemoOverlayEnabled,
  testSiteOverlayConfig,
  testSiteOverlayContact,
  testSiteSlides,
} from "@/lib/test-site-overlay";
import { cn } from "@/lib/utils";

export function TestSiteOverlay() {
  if (!isDemoOverlayEnabled) {
    return null;
  }

  return <TestSiteOverlayActive />;
}

function TestSiteOverlayActive() {
  const [visible, setVisible] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const slide = testSiteSlides[slideIndex];

  const clearHideTimer = useCallback(() => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  }, []);

  const showSlide = useCallback(() => {
    clearHideTimer();
    setVisible(true);
    hideTimerRef.current = setTimeout(() => {
      setVisible(false);
      setSlideIndex((current) => (current + 1) % testSiteSlides.length);
    }, testSiteOverlayConfig.visibleMs);
  }, [clearHideTimer]);

  const dismiss = useCallback(() => {
    clearHideTimer();
    setVisible(false);
  }, [clearHideTimer]);

  useEffect(() => {
    const initialTimer = setTimeout(showSlide, testSiteOverlayConfig.initialDelayMs);
    const interval = setInterval(showSlide, testSiteOverlayConfig.intervalMs);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
      clearHideTimer();
    };
  }, [clearHideTimer, showSlide]);

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 bottom-4 z-[90] flex justify-center px-4 transition-all duration-500 sm:bottom-6",
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0",
      )}
      aria-hidden={!visible}
    >
      <aside
        role="status"
        aria-live="polite"
        className={cn(
          "pointer-events-auto w-full max-w-lg border border-accent-hot/40 bg-background/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-md sm:p-5",
          !visible && "invisible",
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent-hot">
              Vorschau · Neues echolane.de
            </p>
            <h2 className="mt-1 text-sm font-semibold tracking-tight text-foreground sm:text-base">
              {slide.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={dismiss}
            className="inline-flex h-9 min-w-9 shrink-0 items-center justify-center border border-border/80 text-xs text-muted transition hover:border-accent-hot/40 hover:text-foreground"
            aria-label="Hinweis schließen"
          >
            ✕
          </button>
        </div>

        <div className="mt-3 grid gap-2 sm:grid-cols-2 sm:gap-3">
          <div className="border border-border/70 bg-surface/80 px-3 py-2.5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
              {slide.oldLabel}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">
              {slide.oldText}
            </p>
          </div>
          <div className="border border-accent-hot/30 bg-accent-hot/5 px-3 py-2.5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-hot">
              {slide.newLabel}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-foreground sm:text-sm">
              {slide.newText}
            </p>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-border/60 pt-3">
          <p className="text-[11px] text-muted">
            {slideIndex + 1}/{testSiteSlides.length} · Was sich für Echolane
            verändert
          </p>
          <p className="text-[11px] text-muted">
            {testSiteOverlayContact.label}{" "}
            <a
              href={`mailto:${testSiteOverlayContact.email}`}
              className="font-medium text-accent-hot transition hover:text-foreground"
            >
              {testSiteOverlayContact.email}
            </a>
          </p>
        </div>
      </aside>
    </div>
  );
}
