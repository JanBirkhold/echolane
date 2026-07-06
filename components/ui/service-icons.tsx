import { cn } from "@/lib/utils";

export type ServiceIconName = "recording" | "mixing" | "mastering";

type ServiceIconProps = {
  name: ServiceIconName;
  className?: string;
};

const teal = "var(--color-brand-teal)";
const white = "var(--color-foreground)";

function RecordingIcon() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className="h-full w-full">
      <circle
        cx="50"
        cy="50"
        r="46"
        fill="none"
        stroke={teal}
        strokeWidth="1.5"
      />
      <g className="service-icon-recording-inner origin-center">
        <circle
          cx="50"
          cy="50"
          r="22"
          fill="none"
          stroke={white}
          strokeWidth="1.5"
        />
        <circle
          cx="50"
          cy="50"
          r="4"
          fill={teal}
          className="service-icon-recording-dot origin-center"
        />
      </g>
    </svg>
  );
}

function MixingIcon() {
  const radii = [44, 34, 24, 14, 4];

  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className="service-icon-mixing h-full w-full origin-center"
    >
      {radii.map((r) => (
        <g key={r}>
          <path
            d={`M 50 ${50 - r} A ${r} ${r} 0 0 0 50 ${50 + r}`}
            fill="none"
            stroke={white}
            strokeWidth="1.5"
          />
          <path
            d={`M 50 ${50 - r} A ${r} ${r} 0 0 1 50 ${50 + r}`}
            fill="none"
            stroke={teal}
            strokeWidth="1.5"
          />
        </g>
      ))}
    </svg>
  );
}

function MasteringRing({
  radius,
  segments,
  offset,
  duration,
}: {
  radius: number;
  segments: number;
  offset: number;
  duration: string;
}) {
  const step = 360 / segments;

  return (
    <g
      className="service-icon-mastering-ring origin-center"
      style={{ animation: `service-spin ${duration} linear infinite` }}
    >
      {Array.from({ length: segments }, (_, i) => {
        const start = offset + i * step;
        const end = start + step * 0.72;
        const toRad = (deg: number) => (deg * Math.PI) / 180;
        const x1 = 50 + radius * Math.cos(toRad(start - 90));
        const y1 = 50 + radius * Math.sin(toRad(start - 90));
        const x2 = 50 + radius * Math.cos(toRad(end - 90));
        const y2 = 50 + radius * Math.sin(toRad(end - 90));
        const largeArc = step > 180 ? 1 : 0;
        const color = i % 2 === 0 ? teal : white;

        return (
          <path
            key={i}
            d={`M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`}
            fill="none"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        );
      })}
    </g>
  );
}

function MasteringIcon() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className="h-full w-full">
      <MasteringRing radius={44} segments={8} offset={0} duration="28s" />
      <MasteringRing radius={34} segments={6} offset={15} duration="22s" />
      <MasteringRing radius={24} segments={8} offset={8} duration="18s" />
      <MasteringRing radius={14} segments={6} offset={22} duration="14s" />
      <MasteringRing radius={4} segments={4} offset={0} duration="10s" />
    </svg>
  );
}

export function ServiceIcon({ name, className }: ServiceIconProps) {
  return (
    <div
      className={cn(
        "group/icon relative mx-auto aspect-square w-28 sm:w-32",
        className,
      )}
    >
      <div className="absolute inset-0 rounded-full bg-brand-teal/5 blur-2xl transition group-hover/icon:bg-brand-teal/10" />
      {name === "recording" ? (
        <RecordingIcon />
      ) : name === "mixing" ? (
        <MixingIcon />
      ) : (
        <MasteringIcon />
      )}
    </div>
  );
}
