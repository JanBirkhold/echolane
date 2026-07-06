import { ContactPageContent } from "@/components/sections/contact-page-content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact Recording Studio Bergen/Hohne | Echolane",
  description:
    "Echolane Recording Studio — Kai Schwerdtfeger, Blücherstraße 1, 29303 Bergen/Hohne. Telefon, E-Mail und Anfahrt.",
  path: "/kontakt",
  keywords: [
    "Recording Studio Contact",
    "Tonstudio Kontakt",
    "Studio Anfrage",
    "Bergen Hohne Studio",
    "Kai Schwerdtfeger",
  ],
});

export default function KontaktPage() {
  return <ContactPageContent />;
}
