export const siteConfig = {
  name: "Echolane Recording Studio",
  shortName: "echolane",
  description:
    "High-End Recording Studio in Bergen/Hohne — Recording, Mixing, Mastering mit legendärer Harrison-Konsole.",
  url: "https://www.echolane.de",
  locale: "de_DE",
};

export const contact = {
  studio: "Echolane Recording Studio",
  name: "Kai Schwerdtfeger",
  address: "Blücherstraße 1",
  city: "29303 Bergen/Hohne",
  country: "Germany",
  phone: "+49 (0)5051 914046",
  mobile: "+49 (0)176 32647786",
  email: "info@echolane.de",
  facebook: "https://www.facebook.com/kai.schwerdtfeger.3",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Bl%C3%BCcherstra%C3%9Fe+1,+29303+Bergen/Hohne,+Germany",
};

export const socials = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@echolanerecordingstudio7050",
    icon: "youtube" as const,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/kai.schwerdtfeger.3",
    icon: "facebook" as const,
  },
  {
    label: "E-Mail",
    href: "mailto:info@echolane.de",
    icon: "mail" as const,
  },
] as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Kontakt Studio", href: "/kontakt" },
  { label: "Clients", href: "/clients" },
  { label: "Mastering", href: "/mastering" },
  { label: "Studios", href: "/studios" },
] as const;

export const images = {
  logo: "/images/ca2a5a_bff264349bbe41dba7de4c8ada2dd85b.png.png",
  brandIcon: "/images/ca2a5a_bddff556ee184d6abf8506a8d0503dc7.png.png",
  favicon: "/icons/favicon-32.png",
  favicon16: "/icons/favicon-16.png",
  favicon48: "/icons/favicon-48.png",
  appleTouchIcon: "/icons/favicon-180.png",
  icon192: "/icons/favicon-192.png",
  icon512: "/icons/favicon-512.png",
  iconMaskable512: "/icons/favicon-maskable-512.png",
  hero: "/images/58d0b6_6351bcd5cdb74743b70da2a7c32c9bc2_mv2.jpg.jpg",
  heroAlt: "/images/58d0b6_8cfe2bfc76b743ddb68023c2154a060e_mv2.jpg.jpg",
  masteringHero:
    "/images/58d0b6_2781931017d14d569296d92bc4d4b1c4~mv2_d_5153_3435_s_4_2.avif",
  controlRoom: "/images/20230301-DSCF5464-HDR.avif",
  studiosHero:
    "/images/studios/58d0b6_8cfe2bfc76b743ddb68023c2154a060e~mv2.avif",
  liveRoom: "/images/studios/live-room.jpg",
  harrison: "/images/20230301-DSCF5464-HDR.avif",
  piano: "/images/studios/grand-piano.jpeg",
  gallery: [
    "/images/58d0b6_0056db16076c4c19aa5c0fe8a4a0faef_mv2.jpeg.jpeg",
    "/images/58d0b6_0653ca943e324e1b8d3fda90f4f95ff2_mv2.jpeg.jpeg",
    "/images/58d0b6_0ab7a90884a043db8134f5c175ef38f9_mv2.jpeg.jpeg",
    "/images/58d0b6_1d87be48c6224146bb00b8d3c49e708c_mv2.jpeg.jpeg",
    "/images/58d0b6_258ac760e8854e0885b66fb6db728430_mv2.jpeg.jpeg",
    "/images/58d0b6_287049259a024a76b36d67d8ce3b2738_mv2.jpeg.jpeg",
    "/images/58d0b6_442808bb63ca4238a325e38449d4e46e_mv2.jpeg.jpeg",
    "/images/58d0b6_44ac75c6ad4541999d03dbc7f8c1663e_mv2.jpeg.jpeg",
    "/images/58d0b6_62d18247e81140f38b1da4d9b15be2f0_mv2.jpeg.jpeg",
    "/images/58d0b6_635223e6e04c4dcbb7e22bfdbe151162_mv2.jpeg.jpeg",
    "/images/58d0b6_68ee53530b6e48b7ac0eff66e891158f_mv2.jpeg.jpeg",
    "/images/58d0b6_722cf43930634486aa25cff2e54ebf19_mv2.jpeg.jpeg",
    "/images/58d0b6_89945165f2b84f5595c1b7bb9837e7f8_mv2.jpeg.jpeg",
    "/images/58d0b6_a6106e1676934c21b6387cd255e5d430_mv2.jpeg.jpeg",
    "/images/58d0b6_bd2d9c8762c040379a9c1b7a1d81a893_mv2.jpeg.jpeg",
    "/images/58d0b6_3a66f36c48d44c2791f8d70f6a8c0979_mv2.jpg.jpg",
    "/images/58d0b6_b42f143bff0142c196958c9f34312b25_mv2.jpg.jpg",
    "/images/58d0b6_bccca3530e5f4a3c81aed003afaa868a_mv2.jpg.jpg",
    "/images/58d0b6_cd30344139a5487bb1a4ea70b48ce4ae_mv2.jpg.jpg",
    "/images/58d0b6_d191f4be188a4dc1b0fc22e42ae96a7a_mv2.jpeg.jpeg",
  ],
};

export const services = [
  {
    icon: "recording" as const,
    title: "Recording",
    descriptionDe:
      "Bands, Big Bands, Chöre, Orchester — hochwertige Sprachaufnahmen mit exzellenten Vorverstärkern, Kondensator- und Röhrenmikrofonen.",
    descriptionEn:
      "Bands, big bands, choirs, orchestras — high-quality preamps, condenser and tube microphones.",
  },
  {
    icon: "mixing" as const,
    title: "Mixing",
    descriptionDe:
      "Ob 24 Spuren analog auf 2-Zoll-Tape oder 192 Audiospuren im Pro Tools HD System — große Auswahl an analogem Outboard, Plug-Ins und 1/4-Zoll Mastermaschine.",
    descriptionEn:
      "24 tracks analog on 2 inch tapes, or 192 audio tracks in Pro Tools HD — analog outboard, PlugIns and 1/4 master machine for mix-down.",
  },
  {
    icon: "mastering" as const,
    title: "Mastering",
    descriptionDe:
      "High-End Audio-Mastering für Musikproduktionen auf DVD und CD — weltweit für Künstler, Musiker, Bands, Produzenten, Major- und Independent-Labels.",
    descriptionEn:
      "High Class Audio-Mastering for DVD and CD productions — worldwide for artists, musicians, bands, producers, major and indie labels.",
  },
];

export const studioIntro = {
  titleDe: "Leistungen // Services",
  bodyDe: `Unser Echolane Recording Studio ist ein außergewöhnliches Tonstudio, gebaut um allen Ansprüchen der Musiker, Produzenten und Techniker im Studioalltag absolut gerecht zu werden.

Altbewährte Technik wurde mit neuester digitaler Peripherie sinnvoll vereint. Die Zusammenarbeit mit namhaften Produzenten, Toningenieuren, Studiomusikern, Komponisten und Arrangeuren gewährleistet professionelle Ergebnisse.`,
  bodyEn: `Our Echolane Recording Studio is a unique recording studio for high end and low budget music manufacturing. Built for musicians, producers and engineers in the studio everyday life.

Old-proven technology was united with the newest digital periphery. The collaboration with famous producers, sound engineers, studio musicians, composers and arrangers guarantees professional results.`,
  offerings: [
    {
      de: "MUSIKPRODUKTION — Vom Demo bis zur fertigen High-End CD/DVD-Produktion in allen Stilrichtungen.",
      en: "MUSIC PRODUCTION — From demos up to High End CD/DVD production in all music styles.",
    },
    {
      de: "HÖRBÜCHER/HÖRSPIELVERTONUNG — Wir fertigen Hörbücher komplett oder vertonen fertige Aufnahmen.",
      en: "AUDIOBOOKS — Complete audiobook production or voice-over for existing recordings.",
    },
    {
      de: "SONGWRITING & AUFTRAGSPRODUKTIONEN — Komposition, Arrangement und Produktion für Unternehmen und die Musikindustrie.",
      en: "SONGWRITING — We realize song ideas — compose, arrange and produce for enterprise and the music industry.",
    },
    {
      de: "SOUNDDESIGN & PROGRAMMING — Für Film, Musiktrailer oder wo außergewöhnliche Sounds gebraucht werden.",
      en: "SOUND DESIGN — For film, music trailers or wherever unusual sounds are needed.",
    },
    {
      de: "WERBEMUSIK — Jingles für Rundfunk, Fernsehen oder Kino.",
      en: "PROMOTIONAL MUSIC — Jingles for radio, television or cinema.",
    },
    {
      de: "LIVERECORDING — Mobile Konzert- und Liveaufnahmen mit professionellem Equipment und bester Mikrofontechnik.",
      en: "LIVE RECORDING — Mobile concert and live recordings with professional systems and finest microphone technology.",
    },
  ],
};

export const harrisonConsole = {
  titleDe: "Harrison Master Recording Console",
  bodyDe: `Im Mittelpunkt des Studios wurde eine legendäre Harrison Masterkonsole (Baujahr '80) installiert. Dieses analoge Mischpult zählt zu den bestklingensten Recording-Pulten, die je gebaut wurden — im Einsatz auf zahlreichen Michael Jackson, Abba, AC/DC, Led Zeppelin oder Queen-Produktionen.

Technisch in absolut einwandfreiem Zustand, speziell für moderne Musikproduktionen automatisiert und modifiziert. Der extrem warme Sound begeistert einfach jeden und bringt ein exzellentes Klangergebnis.`,
  bodyEn: `In the focus of the studio a legendary Harrison Console (year 1980) has been installed — one of the best sounding recording consoles ever built. AC/DC's "Back in Black", Queen, Led Zeppelin, Abba, Michael Jackson's "Thriller" and "Bad" were recorded on Harrison consoles.

Quadrophonie inline console, 56-Channel Mix-Down, Parametric EQs, Split EQs and HP-Filters, 24er Routing Optifile VCA-Automation.`,
};

export const liveRoom = {
  titleDe: "Live Room",
  bodyDe:
    "Der hervorragend klingende Aufnahmeraum bietet unzählige Möglichkeiten der variablen Akustik. Raum-in-Raum gebaut, ca. 100 qm und optimale Deckenhöhe von ca. 5,5 m. Massivholzboden und nicht-parallele Wände — Naturambience der Extraklasse.",
  bodyEn:
    "The great sounding recording room offers endless possibilities of variable acoustics. About 100 sqm and optimum ceiling height of 5.5 m. Solid wood floor and non-parallel walls — an excellent live room with fantastic natural ambience.",
};

export const masteringText = {
  title: "Echolane Mastering Service",
  bodyDe: `Wir haben uns unter anderem auf Online-Mastering spezialisiert. Wir bieten High-End-Class Audio-Mastering für Musikproduktionen an, arbeiten weltweit für Künstler, Musiker, Bands, Produzenten, Major- und Independent-Labels.

Das Mastering ist stets einer der wichtigsten Arbeitsabschnitte einer Musikproduktion. Der Echolane Mastering Service ist durch langjährige Erfahrung und feinste Studiotechnik in der Lage, Ihr Audio-Material auf die High-End-Class-Ebene zu veredeln.

Das Ziel des Masterings ist es, Tonaufnahmen eine bessere Qualität zu verleihen und Kompatibilität auf möglichst vielen Wiedergabegeräten zu ermöglichen. Ein ausgewogenes Stereobild, gute Mono-Kompatibilität und ausgeglichener Frequenzgang spielen eine große Rolle.`,
  bodyEn: `We have specialized in online mastering. We offer high class audio mastering for music production on CD and DVD, working worldwide for artists, musicians, bands, producers, major and independent labels.

Mastering is always one of the most important processes within a music production. The Echolane Mastering Service enriches your audio material to High Class level through years of experience and the finest studio equipment.`,
};

export const clientsList =
  "Annihilator • Asya Pritchard • Austin/Catasso/Kelly (UK) • As You Like It • Annemarie Eilfeld • Anna-Maria Zimmermann • Amy Elaine • Alias Julius • A.TO.W • A.M. Projekt • 3rd Grade Burn • 2 For Rock • Back Bones • Belajev • Ballroom Blitz • Beyond Extreme • Black Cat Bones • Brandon Giles & The Tricky Two Band (USA) • Burning Eden • Carlos Daio (Angola) • Chris Elaine • Christian Fahrenheit • Cindy Marlow • Contra Punkt Hörbuchverlag • Cosmic Orange • David Hasselhoff (USA) • Damnation Defaced • Dan Crow • Die Papierflieger • Digger Barnes Band • Dima Mondello • DJ Paul Swain (UK) • Don Airey & friends (UK) • Donkey Pilots • Donovan Daley (UK) • Downfall A.D. • Dynamite Roadkill • EMI Music Publishing Germany • Enter Metropolis • Face Buster • Fire In Fairyland • Gender Traffic • Gransten Blues Band (Schweden) • Greyhound Buzz • Hollywood Burnouts • Horst Dobrunz • Hot 187 • Isabell Schmidt • Jan Gerfast Bluesband (Sweden) • Jason Buie Band (Kanada) • Javier Vargas (Spanien) • Jimmy James • JW-Jones Blues Band • Kensington Road • King Curry • Kryptonaut • Los Brandos • Lost Venture • Magic A • Mario Ehrenberg-Kempf • Martin Scholz • Marcus Deml • Melanie Dekker • Michael Strauss • Mississippi Mudsharks (USA) • Mons Born & Friends • Morblus (Italien) • Mystica • Mystica Solitudinis • Nikki Puppet • Nitrogods • NeroX • Peter Scholle • Philip Sayce • PHILIP.andYOU • Phillip Boa And The Voodooclub • Plantat • Riefenstahl • Rise Like a Phoenix • Ross Antony • Route Corazon • rude records • Ryan McGarvey • Satoshi • Seegang Musikverlag e.K. • Semargl (Ukraine) • Sersch • SKO (Frankreich) • Splithammer • Stars and Bars • Substyle • Steve Link Band • Subtune • Suckbeatz • Supreme • Syringa • Telamo / Sony Music • The Awakening • The Gentiles (UK) • The Keltics • The Rock Band • The Twisters (Kanada) • Thomsen • Thorbjörn Risager & Band • Todd Wolfe (USA) • Tom Principato • Treibhaus • Two Angels • Vargas Blues Band (Spanien) • Vdelli • Veto268 • Victory • Willi Logan (UK) • Vent Quid Music • Yoshio";

export const directions = {
  hannover: `Aus Richtung Hannover, die A7 nordwärts befahrend: Abfahrt "Fuhrberg / Celle / Bergen-Belsen" runter, der Beschilderung folgen, in Richtung Bergen-Belsen, den Ort komplett durchfahren, nächste Straße (in der großen Kurve) links abbiegen — nach 500 Metern ist das Studio (linker Hand) erreicht.`,
  hamburg: `Aus Richtung Hamburg, die A7 südwärts befahrend: Abfahrt "Soltau Süd" runter, der B3 Richtung Bergen folgen, in Bergen nach der Shell-Tankstelle Richtung Bergen-Belsen rechts fahren, der Straße folgen, nach Ortsausgang ca. 1 km in der großen Kurve rechts abbiegen — nach 500 Metern ist das Studio (linker Hand) erreicht.`,
};

