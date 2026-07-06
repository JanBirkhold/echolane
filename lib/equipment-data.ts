import type { BrandSlug } from "@/lib/brand-logos";

export type EquipmentItem = {
  brand: BrandSlug | null;
  name: string;
  featured?: boolean;
};

export type EquipmentCategory = {
  id: string;
  title: string;
  subtitle: string;
  items: EquipmentItem[];
};

export const equipmentCategories: EquipmentCategory[] = [
  {
    id: "recorders",
    title: "Recorders",
    subtitle: "Analog-Tape, Pro Tools HD & High-End Wandlung",
    items: [
      {
        brand: "otari",
        name: 'Otari MTR 90/2, 24 Track 2" Tape Recorder mit Autolocator',
      },
      {
        brand: "telefunken",
        name: 'Telefunken M15 A 1/4" Mastermaschine',
      },
      {
        brand: "protools",
        name: "Pro Tools HD 3 ACCEL System",
      },
      {
        brand: "digidesign",
        name: "3× Digidesign 192 Interface (32 analog In / Out)",
      },
      {
        brand: "lavry",
        name: "Lavry Gold AD 122-96 MX — Mastering AD Converter",
      },
      {
        brand: "apple",
        name: "Logic Audio Recording System",
      },
      { brand: "ableton", name: "Ableton" },
      {
        brand: null,
        name: "Aktuelle hochwertige Plug-Ins auf MAC und PC",
      },
    ],
  },
  {
    id: "mixers",
    title: "Mixers",
    subtitle: "Legendäre Harrison-Konsole & digitales Live-Mischpult",
    items: [
      {
        brand: "harrison",
        name: "Harrison Master Recording Console — Analog, Quadrophonie Inlineconsole, 56-Channel im Mix-Down, parametrische EQs, Split EQs und HP-Filtern, 24er Routing, Optifile Mischautomation",
        featured: true,
      },
      {
        brand: "soundcraft",
        name: "Soundcraft Si Performer 2 digitales Mischpult",
      },
    ],
  },
  {
    id: "microphones",
    title: "Microphones",
    subtitle: "Kondensator-, Bändchen- & Dynamikmikrofone für jeden Einsatz",
    items: [
      { brand: "akg", name: "AKG 535 C — 2×" },
      { brand: "akg", name: "AKG D 12" },
      { brand: "akg", name: "AKG D 112" },
      { brand: "akg", name: "AKG D 125" },
      { brand: "akg", name: "AKG C 414 XLII — 2×" },
      { brand: "akg", name: "AKG C12 VR Röhrenmikrofon" },
      { brand: "dw", name: "DW Moon-Mic (Sub-Mic)" },
      { brand: "electrovoice", name: "Electro-Voice RE 27" },
      { brand: "klarkteknik", name: "Klark Technik DN 6051" },
      { brand: "neumann", name: "Neumann/Gefell UM 57 Röhrenmikrofon" },
      { brand: "neumann", name: "Neumann U87" },
      { brand: "neumann", name: "Neumann TLM 103 — 2×" },
      { brand: "neumann", name: "Neumann/Telefunken KM 84" },
      { brand: "neumann", name: "Neumann KM 184 — 2×" },
      { brand: "peavey", name: "Peavey PVM 22" },
      { brand: "sennheiser", name: "Sennheiser MD 421 — 8×" },
      { brand: "sennheiser", name: "Sennheiser MD 441 — 3×" },
      { brand: "sennheiser", name: "Sennheiser MD 211 N — 2×" },
      { brand: "sennheiser", name: "Sennheiser E 906 — 2×" },
      { brand: "sennheiser", name: "Sennheiser Grenzfläche E912 — 2×" },
      { brand: "shure", name: "Shure Beta 52 — 2×" },
      { brand: "shure", name: "Shure Beta 87A" },
      { brand: "shure", name: "Shure Beta 57A — 3×" },
      { brand: "shure", name: "Shure SM 58 — 5×" },
      { brand: "shure", name: "Shure SM 57 — 5×" },
      { brand: "shure", name: "Shure 517 SA" },
      { brand: "shure", name: "Shure Beta 91 Grenzfläche" },
    ],
  },
  {
    id: "outboard",
    title: "Outboard Gear",
    subtitle: "Analoge Kompressoren, EQs, Effekte & Mastering-Kette",
    items: [
      { brand: "avalon", name: "Avalon VT-747SP Stereo Compressor/EQ" },
      { brand: "focusrite", name: "Focusrite Red 3 Dual Compressor Limiter" },
      { brand: "dbx", name: "2× DBX 160 A Compressor" },
      { brand: "dbx", name: "DBX 566 Dual Vacuum Tube Röhren Compressor" },
      { brand: "universal-audio", name: "1176 LN Compressor" },
      { brand: "universal-audio", name: "1176 Blue Strip Compressor" },
      { brand: "ssl", name: "SSL XLogic G Series Compressor" },
      {
        brand: "manley",
        name: "Manley Variable MU Stereo Mastering Compressor",
      },
      { brand: "aphex", name: "Aphex Dominator Compressor" },
      { brand: "spl", name: "SPL Transient Designer" },
      { brand: "spl", name: "SPL Frontliner Channel-Strip" },
      { brand: "mercury", name: "2× Mercury EQ-P1 Program Equalizer" },
      { brand: "focusrite", name: "Focusrite Red 2 EQ" },
      { brand: "sonotec", name: "Sontec M250 EP Clone Mastering EQ" },
      { brand: "spl", name: "2× SPL De-Esser 9629" },
      { brand: "bbe", name: "BBE 882i Sonic Maximizer" },
      { brand: "alesis", name: "Alesis Quadraverb" },
      { brand: "yamaha", name: "Yamaha SPX 900 Multieffektgerät" },
      { brand: "yamaha", name: "Yamaha SPX 90II Multieffektgerät" },
      { brand: "korg", name: "Korg SDD 3000 Digital Delay" },
      { brand: "lexicon", name: "Lexicon 300L Digital Reverb Effects Processor" },
      {
        brand: "lexicon",
        name: "Lexicon PCM 70 Digital Reverb Effects Processor",
      },
      {
        brand: "tc-electronic",
        name: "T.C. Electronics M5000 Digital Audio Reverb",
      },
      { brand: "glockenklang", name: "Glockenklang Noisegate" },
      { brand: "rtw", name: "RTW Digital Level Meter" },
      { brand: "klarkteknik", name: "Klark Teknik DN 60 Spectrum Analyzer" },
      { brand: "korg", name: "Korg DT-Pro Stimmgerät" },
      { brand: null, name: "Adam Smith Zeta Three Synchronizer" },
      { brand: "spl", name: "SPL Headphone Amp" },
      { brand: "behringer", name: "Behringer 4 Channel Headphone Amplifier" },
      { brand: "tascam", name: "Tascam CD-201 CD-Player" },
    ],
  },
  {
    id: "instruments",
    title: "Instruments",
    subtitle: "E-Gitarren, Verstärker, Bass & Konzertflügel",
    items: [
      { brand: "gibson", name: "Gibson Custom Black Beauty E-Gitarre" },
      { brand: "gibson", name: "Gibson Custom Cherry Sunburst" },
      { brand: "gibson", name: "Gibson J-15 NT" },
      { brand: "peavey", name: "Peavey Custom Telecaster" },
      { brand: "ibanez", name: "Ibanez 7620" },
      { brand: "fender", name: "Fender Stratocaster" },
      { brand: "fender", name: "Fender Westerngitarre 12-saitig" },
      { brand: "trace-elliot", name: "Trace Elliot 715X Bass Combo" },
      { brand: "trace-elliot", name: 'Trace Elliot 1048 4×10" Bassbox' },
      { brand: "tc-electronic", name: "TC Electronic G-System" },
      { brand: "fender", name: "Fender Tone Master Custom Shop" },
      { brand: "vox", name: "Vox Night Train NT50" },
      { brand: "mesa-boogie", name: "Mesa Boogie Dual Rectifier" },
      { brand: "marshall", name: "Marshall JCM 900 Lead Series" },
      { brand: "marshall", name: "Marshall JTM45" },
      {
        brand: "marshall",
        name: 'Marshall 1960TV Greenback speakers 4×12"',
      },
      { brand: "marshall", name: 'Marshall 1960 4×12"' },
      {
        brand: "mesa-boogie",
        name: 'MESA BOOGIE RECTIFIER 4×12" Celestion Vintage 30 (Oversize) Gitarren-Box',
      },
      { brand: "fender", name: "Fender Custom Shop 4×12" },
      { brand: "fender", name: "Fender Precision Bass" },
      { brand: "yamaha", name: "Yamaha P-90 Stagepiano" },
      { brand: null, name: "Diverse Effektgeräte" },
      {
        brand: "ibach",
        name: "Ibach Konzertflügel Modell Richard Wagner (1905)",
        featured: true,
      },
    ],
  },
  {
    id: "monitoring",
    title: "Monitoring",
    subtitle: "Referenz-Monitore & Bi-Amped Main System",
    items: [
      {
        brand: "bowers-wilkins",
        name: "B&W Bowers & Wilkins Nautilus 802 — Bi-Amped 2× Bryston 4BST amplifiers",
      },
      { brand: "quested", name: "Quested H210" },
      { brand: "genelec", name: "Genelec 1031A" },
      {
        brand: "krk",
        name: "KRK ST 8 / Harrison X150 MOS-Fet amplifier",
      },
      {
        brand: "yamaha",
        name: "Yamaha NS-10 / Harrison X150 MOS-Fet amplifier",
      },
    ],
  },
];

export function getCategoryBrands(category: EquipmentCategory): BrandSlug[] {
  const brands = category.items
    .map((item) => item.brand)
    .filter((brand): brand is BrandSlug => brand !== null);

  return [...new Set(brands)];
}
