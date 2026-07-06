import type { ContactLocale } from "@/lib/contact-i18n";

export type ContactIntentId =
  | "recording"
  | "mixing"
  | "mastering"
  | "session"
  | "general";

export const contactIntents: Record<
  ContactIntentId,
  { de: string; en: string }
> = {
  recording: {
    de: "Recording Anfrage",
    en: "Recording inquiry",
  },
  mixing: {
    de: "Mixing Anfrage",
    en: "Mixing inquiry",
  },
  mastering: {
    de: "Mastering Anfrage",
    en: "Mastering inquiry",
  },
  session: {
    de: "Studio Session / Buchung",
    en: "Studio session booking",
  },
  general: {
    de: "Studio Anfrage",
    en: "Studio inquiry",
  },
};

export function contactHref(intent: ContactIntentId = "general") {
  return `/kontakt?zweck=${intent}#anfrage`;
}

export function parseContactIntent(value: string | null): ContactIntentId | null {
  if (!value) return null;
  if (value in contactIntents) return value as ContactIntentId;
  return null;
}

export function getContactIntentSubject(
  intent: ContactIntentId | null,
  locale: ContactLocale,
) {
  if (!intent) return "";
  return contactIntents[intent][locale];
}
