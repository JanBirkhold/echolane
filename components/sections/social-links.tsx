import { cn } from "@/lib/utils";
import { socials } from "@/lib/content";

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
  variant?: "default" | "footer";
};

function SocialIcon({ icon }: { icon: (typeof socials)[number]["icon"] }) {
  if (icon === "youtube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    );
  }

  if (icon === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 fill-none stroke-current stroke-[1.75]"
    >
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function SocialLinks({
  className,
  iconClassName,
  variant = "default",
}: SocialLinksProps) {
  return (
    <ul
      className={cn("flex flex-wrap items-center gap-3", className)}
      aria-label="Social Media"
    >
      {socials.map((social) => (
        <li key={social.href}>
          <a
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={
              social.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            aria-label={social.label}
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-full border transition",
              variant === "footer"
                ? "border-border bg-background text-muted hover:border-accent-hot/50 hover:text-accent-hot"
                : "border-white/15 bg-white/5 text-stone-200 backdrop-blur-sm hover:border-accent-hot/50 hover:bg-accent-hot/10 hover:text-accent-hot",
              iconClassName,
            )}
          >
            <SocialIcon icon={social.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}
