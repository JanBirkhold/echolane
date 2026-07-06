"use client";

import { useState } from "react";
import { CinematicPageHero } from "@/components/sections/cinematic/page-hero";
import { CinematicSection } from "@/components/sections/cinematic/page-section";
import { ContactDetails } from "@/components/sections/contact-details";
import { Suspense } from "react";
import { ContactForm } from "@/components/sections/contact-form";
import { LocaleToggle } from "@/components/sections/locale-toggle";
import {
  getContactCopy,
  type ContactLocale,
} from "@/lib/contact-i18n";
import { images } from "@/lib/content";

export function ContactPageContent() {
  const [locale, setLocale] = useState<ContactLocale>("de");
  const copy = getContactCopy(locale);

  return (
    <>
      <div className="relative">
        <div className="absolute right-4 top-4 z-20 sm:right-8 lg:right-12">
          <LocaleToggle locale={locale} onChange={setLocale} />
        </div>

        <CinematicPageHero
          image={images.heroAlt}
          alt=""
          eyebrow={copy.heroEyebrow}
          title={copy.heroTitle}
        />
      </div>

      <CinematicSection>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <ContactDetails locale={locale} />

          <div className="space-y-6">
            <Suspense fallback={null}>
              <ContactForm locale={locale} />
            </Suspense>

            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-hot">
                {copy.directions}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <article className="border border-border/80 bg-surface/60 p-6 backdrop-blur-sm">
                  <h3 className="text-sm font-medium text-foreground">
                    {copy.directionsHannover}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {copy.directionsHannoverBody}
                  </p>
                </article>
                <article className="border border-border/80 bg-surface/60 p-6 backdrop-blur-sm">
                  <h3 className="text-sm font-medium text-foreground">
                    {copy.directionsHamburg}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {copy.directionsHamburgBody}
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </CinematicSection>
    </>
  );
}
