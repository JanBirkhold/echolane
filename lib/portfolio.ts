export type PortfolioRole =
  | "Recording Engineer"
  | "Mixing Engineer"
  | "Mastering Engineer"
  | "Producer";

export type PortfolioEntry = {
  id: string;
  artist: string;
  album?: string;
  year?: number;
  genre: string;
  roles: PortfolioRole[];
  credit: string;
  cover: string;
};

export const portfolioEngineer = "Kai Schwerdtfeger";

export const portfolioEntries: PortfolioEntry[] = [
  {
    id: "kensington-road",
    artist: "Kensington Road",
    album: "Lumidor",
    year: 2018,
    genre: "Rock / Alternative",
    roles: [],
    credit: "",
    cover:
      "https://i.discogs.com/xTQRt64z7qb3aXIkFH4-2oA7CKIxi4rKsoMEp_Y0rxM/rs:fit/g:sm/q:90/h:900/w:900/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzNTE4/Mzg2LTE1NjIzMDU2/NjYtNDU5NC5qcGVn.jpeg",
  },
  {
    id: "nitrogods-rats-rumours",
    artist: "Nitrogods",
    album: "Rats & Rumours",
    year: 2014,
    genre: "Hard Rock / Rock'n' Roll",
    roles: ["Recording Engineer", "Mixing Engineer"],
    credit: "Recorded by / Mixed by Kai Schwerdtfeger",
    cover: "/images/portfolio/nitrogods-rats-rumours.jpg",
  },
  {
    id: "hollywood-burnouts-excess",
    artist: "Hollywood Burnouts",
    album: "Excess All Areas",
    year: 2012,
    genre: "Sleaze Rock / Hard Rock",
    roles: ["Recording Engineer", "Mixing Engineer", "Mastering Engineer"],
    credit: "Engineer / Mixed by / Mastered by Kai Schwerdtfeger",
    cover:
      "https://i.discogs.com/ClDZPvtYFugqbZRpbggbP4LzVWh35MeEx8TkX9BDkrA/rs:fit/g:sm/q:90/h:900/w:900/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM4NDYw/MTMtMTYyMTQ0MjQy/NS0xMzYxLmpwZWc.jpeg",
  },
  {
    id: "fire-in-fairyland-lit",
    artist: "Fire In Fairyland",
    album: "Lit",
    year: 2010,
    genre: "Alternative Rock / Post-Hardcore",
    roles: ["Mixing Engineer", "Mastering Engineer"],
    credit: "Mixed by / Mastered by Kai Schwerdtfeger",
    cover:
      "https://i.discogs.com/Mhgiq2NcH0N6kJ09x6xEP5biEWX09S3QtvqsrZbwfO8/rs:fit/g:sm/q:90/h:900/w:900/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwMzQ5/NDMzLTE2MzI0ODIw/NTAtMjM2MS5qcGVn.jpeg",
  },
  {
    id: "semargl",
    artist: "Semargl",
    album: "Satanic Pop Metal",
    year: 2013,
    genre: "Black Metal / Pagan Metal",
    roles: ["Recording Engineer", "Mixing Engineer", "Mastering Engineer"],
    credit:
      "Recorded, mixed and mastered at Echolane Recording Studio by Kai Schwerdtfeger",
    cover:
      "https://i.discogs.com/gXhE82F3t94MiQ_uSsayNE-9gdUsAxlYSWs1dzCOxbo/rs:fit/g:sm/q:90/h:900/w:900/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5Mzk1/MDEtMTM4MDAzMTMz/Mi03MTYzLmpwZWc.jpeg",
  },
];

export function getPortfolioJsonLd(entries: PortfolioEntry[] = portfolioEntries) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Echolane Recording Studio — Portfolio",
    description: `Selected productions engineered by ${portfolioEngineer}`,
    itemListElement: entries.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "MusicRecording",
        name: entry.album ?? entry.artist,
        byArtist: {
          "@type": "MusicGroup",
          name: entry.artist,
        },
        ...(entry.year ? { datePublished: String(entry.year) } : {}),
        genre: entry.genre,
        producer: {
          "@type": "Person",
          name: portfolioEngineer,
        },
        image: entry.cover.startsWith("/")
          ? `https://www.echolane.de${entry.cover}`
          : entry.cover,
      },
    })),
  };
}
