"use client";

import Image from "next/image";
import {
  useCallback,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import {
  clientCovers,
  getCircularOffset,
  modIndex,
} from "@/lib/clients-covers";
import { cn } from "@/lib/utils";

const SPACING = 132;
const MAX_ANGLE = 62;
const DRAG_SNAP = 48;
const VISIBLE_RADIUS = 5;
const COVER_COUNT = clientCovers.length;

type ClientCoverFlowProps = {
  className?: string;
};

export function ClientCoverFlow({ className }: ClientCoverFlowProps) {
  const [activeIndex, setActiveIndex] = useState(Math.floor(COVER_COUNT / 2));
  const [dragPx, setDragPx] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragMoved = useRef(false);
  const isDraggingRef = useRef(false);
  const regionRef = useRef<HTMLDivElement>(null);

  const dragOffset = dragPx / SPACING;
  const displayIndex = modIndex(activeIndex, COVER_COUNT);

  const shiftBy = useCallback((steps: number) => {
    if (steps === 0 || COVER_COUNT === 0) return;
    setActiveIndex((current) => current + steps);
  }, []);

  const goPrev = useCallback(() => shiftBy(-1), [shiftBy]);
  const goNext = useCallback(() => shiftBy(1), [shiftBy]);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    dragStartX.current = event.clientX;
    dragMoved.current = false;
    isDraggingRef.current = true;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    const delta = event.clientX - dragStartX.current;
    if (Math.abs(delta) > 4) dragMoved.current = true;
    setDragPx(delta);
  };

  const finishDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    const steps = Math.round(-dragPx / DRAG_SNAP);
    if (steps !== 0) shiftBy(steps);

    isDraggingRef.current = false;
    setDragPx(0);
    setIsDragging(false);
  };

  const onCoverClick = (offset: number) => {
    if (dragMoved.current) return;
    if (Math.abs(offset) < 0.35) return;
    shiftBy(Math.round(offset));
  };

  const onRegionKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  };

  return (
    <div className={cn("select-none", className)}>
      <div
        ref={regionRef}
        role="region"
        aria-roledescription="Karussell"
        aria-label="Album Cover Galerie"
        tabIndex={0}
        onKeyDown={onRegionKeyDown}
        className="relative mx-auto max-w-5xl outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl"
      >
        <div
          className="relative h-[min(52vw,320px)] cursor-grab touch-pan-y active:cursor-grabbing sm:h-[360px]"
          style={{ perspective: "1400px", perspectiveOrigin: "50% 42%" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={finishDrag}
          onPointerCancel={finishDrag}
        >
          <div
            className="absolute inset-0"
            style={{ transformStyle: "preserve-3d" }}
          >
            {clientCovers.map((cover, index) => {
              const offset = getCircularOffset(
                index,
                activeIndex,
                dragOffset,
                COVER_COUNT,
              );

              if (Math.abs(offset) > VISIBLE_RADIUS) return null;

              const abs = Math.abs(offset);
              const translateX = offset * SPACING;
              const rotateY = -offset * MAX_ANGLE;
              const scale = Math.max(0.52, 1 - abs * 0.13);
              const opacity = Math.max(0.28, 1 - abs * 0.2);
              const zIndex = Math.round(100 - abs * 10);
              const isCenter = Math.abs(offset) < 0.35;

              return (
                <figure
                  key={cover.id}
                  className={cn(
                    "absolute left-1/2 top-1/2 m-0 w-[min(42vw,220px)] sm:w-[240px]",
                    isCenter ? "pointer-events-none" : "cursor-pointer",
                  )}
                  style={{
                    zIndex,
                    opacity,
                    transform: `translate(-50%, -50%) translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
                    transformStyle: "preserve-3d",
                    transition: isDragging
                      ? "none"
                      : "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease",
                    willChange: isDragging ? "transform" : undefined,
                  }}
                  onClick={() => onCoverClick(offset)}
                  aria-hidden={!isCenter}
                >
                  <div
                    className={cn(
                      "relative aspect-square overflow-hidden rounded-xl border bg-surface-elevated shadow-2xl",
                      isCenter
                        ? "border-accent-hot/40 shadow-accent-hot/10"
                        : "border-border/80",
                    )}
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <Image
                      src={cover.src}
                      alt={
                        isCenter
                          ? `Album Cover ${displayIndex + 1} von ${COVER_COUNT}`
                          : ""
                      }
                      fill
                      sizes="240px"
                      className="object-cover"
                      quality={90}
                      priority={Math.abs(offset) <= 2}
                      draggable={false}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/25" />
                  </div>

                  <div
                    aria-hidden="true"
                    className="pointer-events-none relative mx-auto mt-2 h-14 w-[88%] overflow-hidden opacity-35 sm:h-16"
                    style={{
                      WebkitMaskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent)",
                      maskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent)",
                    }}
                  >
                    <div className="relative aspect-square w-full scale-y-[-1]">
                      <Image
                        src={cover.src}
                        alt=""
                        fill
                        sizes="240px"
                        className="object-cover"
                        quality={40}
                        draggable={false}
                      />
                    </div>
                  </div>
                </figure>
              );
            })}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Cover {displayIndex + 1} von {COVER_COUNT}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Vorheriges Cover"
          className="inline-flex h-11 w-11 items-center justify-center rounded-none border border-border bg-surface text-foreground transition hover:border-accent-hot/50 hover:text-accent-hot"
        >
          <ChevronIcon direction="left" />
        </button>

        <span className="min-w-[4.5rem] text-center text-sm tabular-nums text-muted">
          {displayIndex + 1} / {COVER_COUNT}
        </span>

        <button
          type="button"
          onClick={goNext}
          aria-label="Nächstes Cover"
          className="inline-flex h-11 w-11 items-center justify-center rounded-none border border-border bg-surface text-foreground transition hover:border-accent-hot/50 hover:text-accent-hot"
        >
          <ChevronIcon direction="right" />
        </button>
      </div>

      <p className="mt-3 text-center text-xs text-muted/70">
        Endlos wischen, ziehen oder Pfeiltasten — Cover antippen zum Zentrieren
      </p>
    </div>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 fill-none stroke-current stroke-2"
    >
      {direction === "left" ? (
        <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}
