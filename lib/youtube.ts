export const youtubeChannel = {
  url: "https://www.youtube.com/@echolanerecordingstudio7050/videos",
  handle: "@echolanerecordingstudio7050",
} as const;

export const youtubeVideos = [
  {
    id: "TgZnd2CJOz0",
    title: 'NITROGODS — "Rats and Rumours" (Official Video)',
  },
  {
    id: "nkm2TQDiErE",
    title: "Kensington Road — Here We Go Now (Official Video)",
  },
  {
    id: "B17YdWJYfaM",
    title: "Annihilator — Twisted Lobotomy (Official Video)",
  },
  {
    id: "5z73INOh_sU",
    title: "Donkey Pilots — No Right (Official Music Video)",
  },
  {
    id: "aTci5yxrt5Q",
    title: "Phillip Boa & The Voodooclub — Bells Of Sweetness (Official Video)",
  },
  {
    id: "pfRAjpWuu1g",
    title: "Lamin David feat. Street Jam — Wenn Ich Friere",
  },
  {
    id: "5EHZAiu28Eo",
    title: "Беляев — Всё под контролем (Official Video)",
  },
  {
    id: "jCj7n-2D1D4",
    title:
      "Drum Recording with Michael Wolpers — Kai Schwerdtfeger — Echolane Recording Studio",
  },
  {
    id: "zkxxlabzXis",
    title: "Cowboy Diplomacy — Mountain Man (Live Studio Session)",
  },
  {
    id: "RskMv8aI-co",
    title:
      "Echolane Recording Studio — Hey Joe — Terry Mono´s Swingerclub (Live Session)",
  },
  {
    id: "dnHrsMMRPr4",
    title:
      "Echolane Recording Studio — Smoke On The Water — Terry Mono´s Swingerclub (Live Session)",
  },
  {
    id: "upoQYdyoB3U",
    title: "The Keltics — Recording Session 2021",
  },
  {
    id: "9m0CQuK7hoc",
    title:
      "Moonlight Sonata — Ludwig van Beethoven (3rd Movement) — Kai Schwerdtfeger",
  },
  {
    id: "MD6Lp_bJDN0",
    title: "Paganini 5th Caprice (Crossroads) — Steve Vai — Cover",
  },
  {
    id: "NGm-tDXHFc0",
    title: "Tequila And Cocaine",
  },
] as const;

export type YoutubeVideo = (typeof youtubeVideos)[number];

export function youtubeThumbnail(id: string, quality: "hq" | "max" = "max") {
  return quality === "max"
    ? `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
    : `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

export function youtubeEmbedUrl(id: string, autoplay = false) {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
  });
  if (autoplay) params.set("autoplay", "1");
  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}

export function youtubeWatchUrl(id: string) {
  return `https://www.youtube.com/watch?v=${id}`;
}
