import Link from "next/link";
import { MobileNav } from "@/components/sections/mobile-nav";
import { btnGhost } from "@/lib/button-styles";
import { SocialLinks } from "@/components/sections/social-links";
import { cn } from "@/lib/utils";
import { contact, navigation, siteConfig } from "@/lib/content";
import { contactHref } from "@/lib/contact-intents";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-6 px-4 py-4 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="group shrink-0 border-l-2 border-accent-hot/50 pl-3 transition hover:border-accent-hot sm:pl-4"
        >
          <span className="block text-sm font-semibold tracking-[-0.02em] text-foreground transition group-hover:text-accent-hot sm:text-base lg:text-lg">
            {siteConfig.name}
          </span>
        </Link>

        <nav
          aria-label="Hauptnavigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={
                item.href === "/kontakt"
                  ? contactHref("general")
                  : item.href
              }
              className="site-nav-link rounded-md px-3 py-2.5 text-sm font-medium tracking-[0.02em] text-muted transition-colors duration-300 hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={contactHref("general")}
            className={cn(
              btnGhost,
              "hidden transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(0,232,214,0.12)] sm:inline-flex",
            )}
          >
            Anfrage senden
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-[90rem] gap-10 px-4 py-14 sm:px-8 lg:grid-cols-3 lg:px-12">
        <div>
          <p className="border-l-2 border-accent-hot/40 pl-3 text-sm font-semibold tracking-[-0.02em] text-foreground">
            {siteConfig.name}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            High-End Recording Studio in Bergen/Hohne — Recording, Mixing &
            Mastering mit legendärer Harrison-Konsole.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-hot">
            Kontakt
          </h2>
          <address className="space-y-1 text-sm not-italic text-muted">
            <p>{contact.studio}</p>
            <p>{contact.name}</p>
            <p>{contact.address}</p>
            <p>
              {contact.city}, {contact.country}
            </p>
            <p>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="transition hover:text-foreground"
              >
                {contact.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${contact.email}`}
                className="transition hover:text-accent-hot"
              >
                {contact.email}
              </a>
            </p>
          </address>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-hot">
            Navigation
          </h2>
          <ul className="space-y-2 text-sm text-muted">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/impressum" className="transition hover:text-foreground">
                Impressum
              </Link>
            </li>
            <li>
              <Link
                href="/datenschutz"
                className="transition hover:text-foreground"
              >
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-4 py-8">
        <div className="mx-auto flex max-w-[90rem] flex-col items-center justify-between gap-6 sm:flex-row sm:px-8 lg:px-12">
          <SocialLinks variant="footer" />
          <p className="text-center text-xs text-muted sm:text-right">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-hot">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}

type BilingualBlockProps = {
  de: string;
  en?: string;
  className?: string;
};

export function BilingualBlock({ de, en, className }: BilingualBlockProps) {
  return (
    <div className={cn("space-y-4 text-muted leading-relaxed", className)}>
      <p>{de}</p>
      {en ? <p className="text-sm opacity-80">{en}</p> : null}
    </div>
  );
}
