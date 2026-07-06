import Link from "next/link";
import { CinematicSection } from "@/components/sections/cinematic/page-section";
import { contact, siteConfig } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Impressum — Echolane Recording Studio Bergen",
  description: "Impressum — Echolane Recording Studio, Kai Schwerdtfeger.",
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/70 py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,232,214,0.06),transparent_55%)]"
        />
        <div className="relative mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-accent-hot">
            Rechtliches
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Impressum
          </h1>
        </div>
      </section>

      <CinematicSection>
        <article className="mx-auto max-w-3xl space-y-10 text-sm leading-relaxed text-muted">
          <section aria-labelledby="impressum-anbieter">
            <h2
              id="impressum-anbieter"
              className="text-base font-semibold text-foreground"
            >
              Angaben gemäß § 5 DDG
            </h2>
            <address className="mt-4 space-y-1 not-italic">
              <p>{contact.name}</p>
              <p>{contact.studio}</p>
              <p>{contact.address}</p>
              <p>
                {contact.city}, {contact.country}
              </p>
            </address>
          </section>

          <section aria-labelledby="impressum-kontakt">
            <h2
              id="impressum-kontakt"
              className="text-base font-semibold text-foreground"
            >
              Kontakt
            </h2>
            <ul className="mt-4 space-y-2">
              <li>
                Telefon:{" "}
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="text-foreground transition hover:text-accent-hot"
                >
                  {contact.phone}
                </a>
              </li>
              <li>
                Mobil:{" "}
                <a
                  href={`tel:${contact.mobile.replace(/\s/g, "")}`}
                  className="text-foreground transition hover:text-accent-hot"
                >
                  {contact.mobile}
                </a>
              </li>
              <li>
                E-Mail:{" "}
                <a
                  href={`mailto:${contact.email}`}
                  className="text-foreground transition hover:text-accent-hot"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </section>

          <section aria-labelledby="impressum-geltung">
            <h2
              id="impressum-geltung"
              className="text-base font-semibold text-foreground"
            >
              Geltungsbereich
            </h2>
            <p className="mt-4">
              Dieses Impressum gilt für die Website{" "}
              <a
                href={siteConfig.url}
                className="text-foreground transition hover:text-accent-hot"
              >
                {siteConfig.url.replace(/^https:\/\//, "")}
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="impressum-streit">
            <h2
              id="impressum-streit"
              className="text-base font-semibold text-foreground"
            >
              Verbraucherstreitbeilegung
            </h2>
            <p className="mt-4">
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>

          <section aria-labelledby="impressum-urheber">
            <h2
              id="impressum-urheber"
              className="text-base font-semibold text-foreground"
            >
              Urheberrecht
            </h2>
            <p className="mt-4">
              Inhalte und Werke auf dieser Website unterliegen dem deutschen
              Urheberrecht. Hinweise auf Rechtsverletzungen richten Sie bitte an{" "}
              <a
                href={`mailto:${contact.email}`}
                className="text-foreground transition hover:text-accent-hot"
              >
                {contact.email}
              </a>
              .
            </p>
          </section>

          <nav
            aria-label="Rechtliche Seiten"
            className="flex flex-wrap gap-x-6 gap-y-2 border-t border-border/70 pt-8"
          >
            <Link
              href="/datenschutz"
              className="text-sm text-accent-hot transition hover:underline"
            >
              Datenschutz
            </Link>
            <Link
              href="/"
              className="text-sm text-accent-hot transition hover:underline"
            >
              ← Zurück zur Startseite
            </Link>
          </nav>
        </article>
      </CinematicSection>
    </>
  );
}
