import { getPortfolioJsonLd, portfolioEntries } from "@/lib/portfolio";

export function PortfolioJsonLd() {
  const jsonLd = getPortfolioJsonLd(portfolioEntries);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
