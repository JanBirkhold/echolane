export type TestSiteSlide = {
  id: string;
  title: string;
  oldLabel: string;
  oldText: string;
  newLabel: string;
  newText: string;
};

export const testSiteSlides: TestSiteSlide[] = [
  {
    id: "visibility",
    title: "Mehr Kunden finden Echolane",
    oldLabel: "Bisher",
    oldText:
      "Die alte Seite wird online kaum wahrgenommen — viele suchen ein Studio, landen aber woanders.",
    newLabel: "Mit der neuen Seite",
    newText:
      "Besser auffindbar bei Google und in KI-Suchen. Mehr Chancen auf Anfragen aus der Region und ganz Deutschland.",
  },
  {
    id: "trust",
    title: "Stärkerer erster Eindruck",
    oldLabel: "Bisher",
    oldText:
      "Besucher sehen schnell „eine normale Website“ — nicht das High-End-Studio, das ihr wirklich seid.",
    newLabel: "Mit der neuen Seite",
    newText:
      "Sofort Studio-Atmosphäre und Professionalität. Besucher spüren: Hier passt Qualität — wie an der Harrison-Konsole.",
  },
  {
    id: "mobile",
    title: "Auch unterwegs überzeugen",
    oldLabel: "Bisher",
    oldText:
      "Auf dem Handy wirkt die Seite oft umständlich. Viele Interessenten brechen ab, bevor sie anfragen.",
    newLabel: "Mit der neuen Seite",
    newText:
      "Klar und schnell auf dem Smartphone. Mehr Anfragen von Bands und Künstlern — direkt nach der Probe oder vom Tourbus.",
  },
  {
    id: "references",
    title: "Eure Referenzen arbeiten für euch",
    oldLabel: "Bisher",
    oldText:
      "Starke Clients, Covers und Videos kommen kaum rüber. Das volle Potenzial eurer Arbeit bleibt unsichtbar.",
    newLabel: "Mit der neuen Seite",
    newText:
      "Referenzen und Clips im Mittelpunkt. Besucher sehen sofort: Hier wurde schon viel Großes produziert — Vertrauen steigt.",
  },
  {
    id: "inquiries",
    title: "Mehr Anfragen, weniger Hürden",
    oldLabel: "Bisher",
    oldText:
      "Kontakt war nicht immer einfach — besonders für internationale Künstler oder spontane Anfragen.",
    newLabel: "Mit der neuen Seite",
    newText:
      "Klarer Weg zur Anfrage, auf Deutsch und Englisch. Weniger Reibung bedeutet mehr Gespräche und mehr gebuchte Sessions.",
  },
  {
    id: "growth",
    title: "Langfristig erfolgreicher",
    oldLabel: "Bisher",
    oldText:
      "Eine veraltete Website kostet Vertrauen — und bei jedem Update Zeit und Nerven.",
    newLabel: "Mit der neuen Seite",
    newText:
      "Moderne, schnelle Basis, die mitwächst. Ihr wirkt am Markt stärker — und könnt euch aufs Studio konzentrieren, nicht auf Technik.",
  },
];

export const testSiteOverlayContact = {
  label: "Fragen zum Redesign?",
  email: "janbirkhold@gmail.com",
} as const;

export const testSiteOverlayConfig = {
  intervalMs: 30_000,
  visibleMs: 8_000,
  initialDelayMs: 5_000,
} as const;

export const isDemoOverlayEnabled =
  process.env.NEXT_PUBLIC_DEMO_OVERLAY === "true";
