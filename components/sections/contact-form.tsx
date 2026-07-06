"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { btnPrimary } from "@/lib/button-styles";
import {
  getContactCopy,
  type ContactLocale,
} from "@/lib/contact-i18n";
import {
  getContactIntentSubject,
  parseContactIntent,
} from "@/lib/contact-intents";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full border border-border/80 bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted/50 focus:border-accent-hot";

type ContactFormProps = {
  locale: ContactLocale;
};

export function ContactForm({ locale }: ContactFormProps) {
  const searchParams = useSearchParams();
  const intent = parseContactIntent(searchParams.get("zweck"));
  const intentSubject = getContactIntentSubject(intent, locale);

  const [sent, setSent] = useState(false);
  const [subject, setSubject] = useState(intentSubject);
  const copy = getContactCopy(locale);

  useEffect(() => {
    setSent(false);
    setSubject(intentSubject);
  }, [locale, intentSubject]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div
      id="anfrage"
      className="scroll-mt-28 border border-border/80 bg-surface/60 p-6 backdrop-blur-sm sm:p-8"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-hot">
        {copy.formEyebrow}
      </p>
      <h2 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
        {copy.formTitle}
      </h2>
      <p className="mt-2 text-sm text-muted">{copy.formIntro}</p>

      {sent ? (
        <p
          className="mt-8 border border-accent-hot/30 bg-accent-hot/10 px-4 py-4 text-sm text-accent-hot"
          role="status"
        >
          {copy.formSent}
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
                {copy.labelName} *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder={copy.placeholderName}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
                {copy.labelEmail} *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder={copy.placeholderEmail}
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="subject"
                className="mb-1.5 block text-sm text-muted"
              >
                {copy.labelSubject}
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                placeholder={copy.placeholderSubject}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm text-muted">
                {copy.labelPhone}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder={copy.placeholderPhone}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
              {copy.labelMessage} *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder={copy.placeholderMessage}
              className={cn(inputClass, "resize-y")}
            />
          </div>

          <p className="border border-border/70 bg-background/80 px-3 py-2.5 text-xs leading-relaxed text-muted">
            {copy.formSmtpNotice}
          </p>

          <button type="submit" className={cn(btnPrimary, "w-full sm:w-auto")}>
            {copy.submit}
          </button>
        </form>
      )}
    </div>
  );
}
