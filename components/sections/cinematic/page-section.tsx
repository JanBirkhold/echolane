import { cn } from "@/lib/utils";

type CinematicSectionProps = {
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
  surface?: boolean;
};

export function CinematicSection({
  children,
  className,
  bordered = false,
  surface = false,
}: CinematicSectionProps) {
  return (
    <section
      className={cn(
        "relative py-16 sm:py-20",
        bordered && "border-y border-border/70",
        surface && "bg-surface/40",
        className,
      )}
    >
      <div className="mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-12">{children}</div>
    </section>
  );
}
