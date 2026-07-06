import type { Metadata } from "next";
import { contact, images, siteConfig } from "@/lib/content";
import { youtubeChannel } from "@/lib/youtube";

export const seoKeywords = {
  de: [
    "Aufnahmestudio",
    "Recording Studio",
    "Tonstudio Bergen",
    "Tonstudio Niedersachsen",
    "Mixing Engineer",
    "Mastering Studio",
    "Harrison Konsole",
    "Rock Recording Studio",
    "Metal Recording Studio",
    "Professional Recording Studio Germany",
    "Kai Schwerdtfeger",
    "Echolane",
    "Studio mieten Hannover",
    "Online Mastering",
  ],
  en: [
    "recording studio Germany",
    "mixing and mastering studio",
    "professional recording studio",
    "rock metal recording studio",
    "Harrison console studio",
    "audio engineering Germany",
    "mastering engineer",
    "recording studio Lower Saxony",
    "Echolane Recording Studio",
    "Kai Schwerdtfeger",
    "online mastering service",
    "analog recording studio",
  ],
} as const;

export const seoGeo = {
  lat: 52.7947,
  lng: 9.9356,
} as const;

export const seoSameAs = [
  contact.facebook,
  contact.instagram,
  youtubeChannel.url,
  contact.mapsUrl,
] as const;

const defaultOgImage = "/images/20230301-DSCF5464-HDR.avif";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [...seoKeywords.de, ...seoKeywords.en],
}: PageSeoInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  return {
    metadataBase: new URL(siteConfig.url),
    title: { absolute: title },
    description,
    keywords: keywords.join(", "),
    alternates: {
      canonical: url,
      languages: {
        "de-DE": url,
        en: url,
        "x-default": url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      alternateLocale: ["en_US"],
      type: "website",
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage],
    },
  };
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: ["de-DE", "en"],
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        url: siteConfig.url,
        logo: `${siteConfig.url}${images.icon512}`,
        image: `${siteConfig.url}${defaultOgImage}`,
        description: siteConfig.description,
        email: contact.email,
        telephone: contact.phone,
        sameAs: seoSameAs,
        address: {
          "@type": "PostalAddress",
          streetAddress: contact.address,
          addressLocality: "Bergen",
          addressRegion: "Niedersachsen",
          postalCode: "29303",
          addressCountry: "DE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: seoGeo.lat,
          longitude: seoGeo.lng,
        },
        areaServed: ["DE", "EU", "Worldwide"],
        knowsAbout: [
          "Recording",
          "Mixing",
          "Mastering",
          "Rock music production",
          "Metal music production",
          "Analog recording",
        ],
        founder: { "@id": `${siteConfig.url}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: contact.name,
        jobTitle: "Recording, Mixing & Mastering Engineer",
        worksFor: { "@id": `${siteConfig.url}/#organization` },
        sameAs: [contact.facebook, contact.instagram],
      },
      {
        "@type": "RecordingStudio",
        "@id": `${siteConfig.url}/#recording-studio`,
        name: siteConfig.name,
        url: `${siteConfig.url}/studios`,
        parentOrganization: { "@id": `${siteConfig.url}/#organization` },
        address: {
          "@type": "PostalAddress",
          streetAddress: contact.address,
          postalCode: "29303",
          addressLocality: "Bergen/Hohne",
          addressCountry: "DE",
        },
      },
    ],
  };
}
