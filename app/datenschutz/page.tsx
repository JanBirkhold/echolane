import Link from "next/link";
import { CinematicSection } from "@/components/sections/cinematic/page-section";
import { contact, siteConfig } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Datenschutz — Echolane Recording Studio Bergen",
  description:
    "Datenschutzerklärung der Website www.echolane.de — Informationen zur Verarbeitung personenbezogener Daten.",
  path: "/datenschutz",
});

export default function DatenschutzPage() {
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
            Datenschutzerklärung
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-muted">
            Stand: {new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}
          </p>
        </div>
      </section>

      <CinematicSection>
        <article className="mx-auto max-w-3xl space-y-10 text-sm leading-relaxed text-muted">
          <section aria-labelledby="ds-verantwortlicher">
            <h2
              id="ds-verantwortlicher"
              className="text-base font-semibold text-foreground"
            >
              1. Verantwortlicher
            </h2>
            <p className="mt-4">
              Verantwortlich für die Datenverarbeitung auf dieser Website im
              Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <address className="mt-4 space-y-1 not-italic">
              <p>{contact.name}</p>
              <p>{contact.studio}</p>
              <p>{contact.address}</p>
              <p>
                {contact.city}, {contact.country}
              </p>
            </address>
            <p className="mt-4">
              E-Mail:{" "}
              <a
                href={`mailto:${contact.email}`}
                className="text-foreground transition hover:text-accent-hot"
              >
                {contact.email}
              </a>
            </p>
          </section>

          <section aria-labelledby="ds-ueberblick">
            <h2
              id="ds-ueberblick"
              className="text-base font-semibold text-foreground"
            >
              2. Überblick
            </h2>
            <p className="mt-4">
              Diese Datenschutzerklärung informiert Sie über Art, Umfang und
              Zweck der Verarbeitung personenbezogener Daten beim Besuch von{" "}
              <a
                href={siteConfig.url}
                className="text-foreground transition hover:text-accent-hot"
              >
                {siteConfig.url.replace(/^https:\/\//, "")}
              </a>
              .
            </p>
            <p className="mt-4">
              Wir setzen keine Analyse-Tools (z.&nbsp;B. Google Analytics) ein
              und verwenden keine Marketing-Cookies. Es findet kein Profiling
              statt.
            </p>
          </section>

          <section aria-labelledby="ds-hosting">
            <h2
              id="ds-hosting"
              className="text-base font-semibold text-foreground"
            >
              3. Hosting und Server-Logfiles
            </h2>
            <p className="mt-4">
              Diese Website wird bei einem externen Hosting-Anbieter betrieben.
              Beim Aufruf der Website werden automatisch Informationen in
              sogenannten Server-Logfiles erhoben, die Ihr Browser übermittelt.
              Dazu können gehören: IP-Adresse, Datum und Uhrzeit der Anfrage,
              aufgerufene URL, Referrer-URL, Browsertyp und -version,
              Betriebssystem sowie ggf. Fehlermeldungen.
            </p>
            <p className="mt-4">
              <strong className="font-medium text-foreground">
                Rechtsgrundlage:
              </strong>{" "}
              Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO (berechtigtes Interesse
              an der sicheren Bereitstellung und Stabilität der Website).
            </p>
            <p className="mt-4">
              Die Logfiles werden in der Regel nach kurzer Zeit automatisch
              gelöscht, sofern keine längere Aufbewahrung zu
              Sicherheitszwecken erforderlich ist.
            </p>
          </section>

          <section aria-labelledby="ds-schriften">
            <h2
              id="ds-schriften"
              className="text-base font-semibold text-foreground"
            >
              4. Schriftarten (Geist)
            </h2>
            <p className="mt-4">
              Für die Darstellung der Website verwenden wir die Schriftarten{" "}
              <strong className="font-medium text-foreground">Geist</strong> und{" "}
              <strong className="font-medium text-foreground">Geist Mono</strong>{" "}
              (Lizenz über Google Fonts / Vercel).
            </p>
            <p className="mt-4">
              <strong className="font-medium text-foreground">
                Wichtig:
              </strong>{" "}
              Die Schriftdateien werden beim Build-Prozess lokal auf unseren
              Server eingebunden und von dort ausgeliefert (
              <code className="text-foreground">next/font</code>
              ). Beim Besuch der Website{" "}
              <strong className="font-medium text-foreground">
                findet keine Verbindung zu Servern von Google
              </strong>{" "}
              statt — es werden keine IP-Adressen oder andere
              personenbezogene Daten an Google übermittelt, um Schriften
              anzuzeigen.
            </p>
            <p className="mt-4">
              <strong className="font-medium text-foreground">
                Rechtsgrundlage:
              </strong>{" "}
              Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO (technisch notwendige
              Darstellung der Website).
            </p>
          </section>

          <section aria-labelledby="ds-kontaktformular">
            <h2
              id="ds-kontaktformular"
              className="text-base font-semibold text-foreground"
            >
              5. Kontaktformular
            </h2>
            <p className="mt-4">
              Auf der Kontaktseite können Sie uns eine Nachricht übermitteln.
              Dabei werden die von Ihnen eingegebenen Daten (z.&nbsp;B. Name,
              E-Mail-Adresse, Betreff, Nachricht) verarbeitet.
            </p>
            <p className="mt-4">
              <strong className="font-medium text-foreground">
                Aktueller Stand:
              </strong>{" "}
              Der E-Mail-Versand (SMTP) ist noch nicht aktiv. Das Formular dient
              derzeit als Vorschau — Ihre Eingaben werden nicht an unsere
              Server übermittelt oder gespeichert. Bitte kontaktieren Sie uns
              bis zur Freischaltung direkt per E-Mail oder Telefon.
            </p>
            <p className="mt-4">
              Sobald der Versand aktiviert ist, erfolgt die Übermittlung per
              E-Mail an uns zur Bearbeitung Ihrer Anfrage.
            </p>
            <p className="mt-4">
              <strong className="font-medium text-foreground">
                Rechtsgrundlage:
              </strong>{" "}
              Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO (vorvertragliche
              Maßnahmen) bzw. Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO
              (berechtigtes Interesse an der Beantwortung von Anfragen).
            </p>
          </section>

          <section aria-labelledby="ds-kontakt-direkt">
            <h2
              id="ds-kontakt-direkt"
              className="text-base font-semibold text-foreground"
            >
              6. Kontakt per E-Mail oder Telefon
            </h2>
            <p className="mt-4">
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten
              wir Ihre Angaben zur Bearbeitung der Anfrage. Die Daten geben
              Sie freiwillig an.
            </p>
            <p className="mt-4">
              <strong className="font-medium text-foreground">
                Rechtsgrundlage:
              </strong>{" "}
              Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b bzw. lit.&nbsp;f DSGVO.
            </p>
          </section>

          <section aria-labelledby="ds-youtube">
            <h2
              id="ds-youtube"
              className="text-base font-semibold text-foreground"
            >
              7. YouTube-Videos (Zwei-Klick-Lösung)
            </h2>
            <p className="mt-4">
              Auf der Startseite können YouTube-Videos eingebettet werden. Die
              Einbindung erfolgt erst, nachdem Sie aktiv auf „Abspielen“
              klicken (Zwei-Klick-Lösung). Bis dahin wird kein YouTube-Player
              geladen.
            </p>
            <p className="mt-4">
              Nach dem Klick wird der Player über{" "}
              <code className="text-foreground">youtube-nocookie.com</code>{" "}
              (Google Ireland Limited / Google LLC) geladen. Dabei können
              personenbezogene Daten (z.&nbsp;B. IP-Adresse, Geräteinformationen)
              an Google übermittelt werden. Google kann Cookies setzen und
              Daten in die USA übertragen.
            </p>
            <p className="mt-4">
              Vorschaubilder der Videos werden über unsere Website ausgeliefert;
              technisch können dabei Verbindungen zu Servern von Google
              (i.ytimg.com) entstehen.
            </p>
            <p className="mt-4">
              <strong className="font-medium text-foreground">
                Rechtsgrundlage:
              </strong>{" "}
              Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a DSGVO (Einwilligung durch
              aktives Abspielen).
            </p>
            <p className="mt-4">
              Weitere Informationen:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition hover:text-accent-hot"
              >
                Google Datenschutzerklärung
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="ds-externe-bilder">
            <h2
              id="ds-externe-bilder"
              className="text-base font-semibold text-foreground"
            >
              8. Externe Bildquellen
            </h2>
            <p className="mt-4">
              Für einzelne Cover-Abbildungen im Portfolio werden Bilder von{" "}
              <strong className="font-medium text-foreground">Discogs</strong>{" "}
              (i.discogs.com) eingebunden. Beim Laden dieser Bilder kann Ihre
              IP-Adresse an Discogs übermittelt werden.
            </p>
            <p className="mt-4">
              <strong className="font-medium text-foreground">
                Rechtsgrundlage:
              </strong>{" "}
              Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO (Darstellung des
              Portfolios).
            </p>
          </section>

          <section aria-labelledby="ds-externe-links">
            <h2
              id="ds-externe-links"
              className="text-base font-semibold text-foreground"
            >
              9. Externe Links
            </h2>
            <p className="mt-4">
              Unsere Website enthält Links zu externen Diensten (z.&nbsp;B.{" "}
              YouTube, Facebook, Google Maps). Beim Anklicken verlassen Sie
              unsere Website. Für die Datenverarbeitung auf den Zielseiten
              sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </section>

          <section aria-labelledby="ds-cookies">
            <h2
              id="ds-cookies"
              className="text-base font-semibold text-foreground"
            >
              10. Cookies
            </h2>
            <p className="mt-4">
              Diese Website setzt keine eigenen Tracking- oder
              Marketing-Cookies. Technisch notwendige Cookies können durch
              den Hosting-Anbieter oder — nach aktivem Abspielen eines
              YouTube-Videos — durch Google gesetzt werden.
            </p>
          </section>

          <section aria-labelledby="ds-ssl">
            <h2
              id="ds-ssl"
              className="text-base font-semibold text-foreground"
            >
              11. SSL-/TLS-Verschlüsselung
            </h2>
            <p className="mt-4">
              Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
              am „https://“ in der Adresszeile Ihres Browsers.
            </p>
          </section>

          <section aria-labelledby="ds-rechte">
            <h2
              id="ds-rechte"
              className="text-base font-semibold text-foreground"
            >
              12. Ihre Rechte
            </h2>
            <p className="mt-4">Sie haben gegenüber uns folgende Rechte:</p>
            <ul className="mt-4 list-inside list-disc space-y-2">
              <li>Auskunft (Art.&nbsp;15 DSGVO)</li>
              <li>Berichtigung (Art.&nbsp;16 DSGVO)</li>
              <li>Löschung (Art.&nbsp;17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art.&nbsp;18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art.&nbsp;20 DSGVO)</li>
              <li>Widerspruch (Art.&nbsp;21 DSGVO)</li>
              <li>
                Widerruf erteilter Einwilligungen (Art.&nbsp;7 Abs.&nbsp;3
                DSGVO)
              </li>
            </ul>
            <p className="mt-4">
              Zur Ausübung Ihrer Rechte wenden Sie sich an{" "}
              <a
                href={`mailto:${contact.email}`}
                className="text-foreground transition hover:text-accent-hot"
              >
                {contact.email}
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="ds-beschwerde">
            <h2
              id="ds-beschwerde"
              className="text-base font-semibold text-foreground"
            >
              13. Beschwerderecht
            </h2>
            <p className="mt-4">
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
              zu beschweren. Zuständig ist u.&nbsp;a. die Landesbeauftragte
              für den Datenschutz Niedersachsen.
            </p>
          </section>

          <nav
            aria-label="Rechtliche Seiten"
            className="flex flex-wrap gap-x-6 gap-y-2 border-t border-border/70 pt-8"
          >
            <Link
              href="/impressum"
              className="text-sm text-accent-hot transition hover:underline"
            >
              Impressum
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
