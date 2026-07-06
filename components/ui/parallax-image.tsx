"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ParallaxImageProps = Omit<ImageProps, "fill"> & {
  wrapperClassName?: string;
  intensity?: number;
};

export function ParallaxImage({
  wrapperClassName,
  intensity = 0.08,
  className,
  alt,
  ...props
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const onScroll = () => {
      const rect = node.getBoundingClientRect();
      const viewport = window.innerHeight;
      const progress = (rect.top + rect.height * 0.5 - viewport * 0.5) / viewport;
      setOffset(progress * intensity * 100);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [intensity]);

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden", wrapperClassName)}
    >
      <Image
        {...props}
        alt={alt}
        fill
        className={cn(
          "object-cover transition-transform duration-100 motion-reduce:transform-none",
          className,
        )}
        style={{
          transform: `translate3d(0, ${offset}px, 0) scale(1.08)`,
        }}
      />
    </div>
  );
}
