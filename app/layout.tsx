import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteJsonLd } from "@/components/seo/site-json-ld";
import { TestSiteOverlay } from "@/components/demo/test-site-overlay";
import { SiteFooter, SiteHeader } from "@/components/sections/site-chrome";
import { images, siteConfig } from "@/lib/content";
import { buildPageMetadata, seoKeywords } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050505",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Echolane Recording Studio — Mixing & Mastering | Bergen",
    description:
      "High-End Recording Studio in Bergen/Hohne: Recording, Mixing & Mastering mit Harrison-Konsole. Professionelles Tonstudio für Rock, Metal & Alternative.",
    path: "/",
  }),
  title: {
    default: "Echolane Recording Studio — Mixing & Mastering | Bergen",
    template: `%s | ${siteConfig.shortName}`,
  },
  keywords: [...seoKeywords.de, ...seoKeywords.en].join(", "),
  authors: [{ name: "Kai Schwerdtfeger", url: siteConfig.url }],
  creator: "Echolane Recording Studio",
  publisher: siteConfig.name,
  category: "Music Production",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: [
      { url: images.favicon16, sizes: "16x16", type: "image/png" },
      { url: images.favicon, sizes: "32x32", type: "image/png" },
      { url: images.favicon48, sizes: "48x48", type: "image/png" },
      { url: images.icon192, sizes: "192x192", type: "image/png" },
      { url: images.icon512, sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: images.appleTouchIcon, sizes: "180x180", type: "image/png" },
    ],
    shortcut: images.favicon,
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <SiteJsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-none focus:bg-accent-hot focus:px-4 focus:py-2 focus:text-background"
        >
          Zum Inhalt springen
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <TestSiteOverlay />
      </body>
    </html>
  );
}
