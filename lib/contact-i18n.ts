import { directions as directionsDe } from "@/lib/content";

export type ContactLocale = "de" | "en";

export const contactI18n = {
  de: {
    heroEyebrow: "Kontakt",
    heroTitle: "Hier erreichen Sie uns",
    studio: "Studio",
    routePlan: "Route planen",
    phone: "Telefon",
    mobile: "Mobil",
    email: "E-Mail",
    social: "Social",
    directions: "Anfahrt",
    directionsHannover: "Aus Richtung Hannover",
    directionsHamburg: "Aus Richtung Hamburg",
    directionsHannoverBody: directionsDe.hannover,
    directionsHamburgBody: directionsDe.hamburg,
    formEyebrow: "Anfrage",
    formTitle: "Projekt anfragen",
    formIntro: "Wir melden uns zeitnah — in der Regel innerhalb von 24 Stunden.",
    formSmtpNotice:
      "Hinweis: E-Mail-Versand (SMTP) muss noch eingerichtet werden. Das Formular dient aktuell als Vorschau.",
    formSent:
      "Anfrage erfasst. E-Mail-Versand (SMTP) ist noch nicht aktiv — bitte direkt an info@echolane.de schreiben oder anrufen.",
    labelName: "Name",
    labelEmail: "E-Mail",
    labelSubject: "Betreff",
    labelPhone: "Telefon",
    labelMessage: "Nachricht",
    placeholderName: "Ihr Name",
    placeholderEmail: "name@beispiel.de",
    placeholderSubject: "Recording / Mixing / Mastering",
    placeholderPhone: "+49 …",
    placeholderMessage: "Projekt, Terminwunsch, Stilrichtung …",
    submit: "Anfrage senden",
    mailSubjectFallback: (name: string) => `Studio Anfrage von ${name}`,
    required: "Pflichtfeld",
  },
  en: {
    heroEyebrow: "Contact",
    heroTitle: "Get in touch",
    studio: "Studio",
    routePlan: "Get directions",
    phone: "Phone",
    mobile: "Mobile",
    email: "Email",
    social: "Social",
    directions: "Directions",
    directionsHannover: "From Hannover",
    directionsHamburg: "From Hamburg",
    directionsHannoverBody:
      'From Hannover on the A7 northbound: take exit "Fuhrberg / Celle / Bergen-Belsen", follow signs to Bergen-Belsen, drive through the town, turn left at the next street (in the wide curve) — the studio is on your left after 500 metres.',
    directionsHamburgBody:
      'From Hamburg on the A7 southbound: take exit "Soltau Süd", follow B3 towards Bergen, in Bergen turn right towards Bergen-Belsen after the Shell station, follow the road, about 1 km after leaving town turn right in the wide curve — the studio is on your left after 500 metres.',
    formEyebrow: "Inquiry",
    formTitle: "Request a session",
    formIntro: "We will get back to you shortly — usually within 24 hours.",
    formSmtpNotice:
      "Note: SMTP email delivery still needs to be configured. This form is currently a preview only.",
    formSent:
      "Inquiry captured. SMTP email delivery is not active yet — please email info@echolane.de directly or call us.",
    labelName: "Name",
    labelEmail: "Email",
    labelSubject: "Subject",
    labelPhone: "Phone",
    labelMessage: "Message",
    placeholderName: "Your name",
    placeholderEmail: "name@example.com",
    placeholderSubject: "Recording / Mixing / Mastering",
    placeholderPhone: "+49 …",
    placeholderMessage: "Project, preferred dates, genre …",
    submit: "Send inquiry",
    mailSubjectFallback: (name: string) => `Studio inquiry from ${name}`,
    required: "Required",
  },
} as const;

export function getContactCopy(locale: ContactLocale) {
  return contactI18n[locale];
}
