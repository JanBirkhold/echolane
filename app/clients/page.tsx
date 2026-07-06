import { ClientCoverFlow } from "@/components/sections/client-cover-flow";
import { PortfolioJsonLd } from "@/components/sections/portfolio/portfolio-json-ld";
import { CinematicPageHero } from "@/components/sections/cinematic/page-hero";
import { CinematicSection } from "@/components/sections/cinematic/page-section";
import { clientsList, images } from "@/lib/content";

import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Clients & References — Artists & Labels | Echolane",
  description:
    "Künstler und Labels, die im Echolane Recording Studio aufgenommen haben — von David Hasselhoff bis Philip Sayce.",
  path: "/clients",
  keywords: [
    "Recording Studio Clients",
    "Artist References",
    "Rock Metal Studio",
    "David Hasselhoff Recording",
    "Studio Referenzen",
  ],
});

export default function ClientsPage() {
  const clients = clientsList
    .split("•")
    .map((c) => c.trim())
    .filter(Boolean);

  return (
    <>
      <PortfolioJsonLd />
      <CinematicPageHero
        image={images.hero}
        alt="Echolane Recording Studio — Client Portfolio"
        eyebrow="Referenzen"
        title="Our Clients"
        description="Produktionen und Releases, die im Echolane Recording Studio entstanden sind."
      />

      <CinematicSection bordered surface>
        <ClientCoverFlow />
      </CinematicSection>

      <CinematicSection>
        <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-accent-hot">
          Künstler & Labels
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {clients.map((client) => (
            <li
              key={client}
              className="group relative origin-center border border-border/80 bg-surface/60 px-4 py-3 text-sm text-muted backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:z-10 hover:scale-[1.08] hover:border-accent-hot/45 hover:bg-surface/95 hover:text-foreground hover:shadow-[0_16px_48px_rgba(0,232,214,0.14)] motion-reduce:transition-none motion-reduce:hover:scale-100"
            >
              <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] motion-reduce:transform-none">
                {client}
              </span>
            </li>
          ))}
        </ul>
      </CinematicSection>
    </>
  );
}
