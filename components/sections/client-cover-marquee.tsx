import { ClientCoverImage } from "@/components/ui/client-cover-image";
import { clientCovers } from "@/lib/clients-covers";
import { cn } from "@/lib/utils";

type ClientCoverMarqueeProps = {
  className?: string;
  itemClassName?: string;
  imageSizes?: string;
  showGradient?: boolean;
};

export function ClientCoverMarquee({
  className,
  itemClassName,
  imageSizes = "160px",
  showGradient = false,
}: ClientCoverMarqueeProps) {
  const itemClass = cn(
    "relative h-32 w-32 shrink-0 overflow-hidden border border-border/80 bg-surface-elevated sm:h-40 sm:w-40",
    itemClassName,
  );

  return (
    <div className={cn("cover-marquee-mask relative", className)}>
      <div className="cover-marquee-track flex w-max">
        {[0, 1].map((set) => (
          <div
            key={set}
            className={cn(
              "cover-marquee-set flex shrink-0 gap-4 sm:gap-5",
              set === 1 && "cover-marquee-set-clone",
            )}
            aria-hidden={set === 1 ? true : undefined}
          >
            {clientCovers.map((cover) => (
              <div key={`${set}-${cover.src}`} className={itemClass}>
                <ClientCoverImage
                  cover={cover}
                  fill
                  sizes={imageSizes}
                  draggable={false}
                />
                {showGradient ? (
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-transparent" />
                ) : null}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
