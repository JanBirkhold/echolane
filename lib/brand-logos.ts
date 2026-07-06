export type BrandSlug =
  | "otari"
  | "telefunken"
  | "protools"
  | "digidesign"
  | "lavry"
  | "apple"
  | "ableton"
  | "harrison"
  | "soundcraft"
  | "akg"
  | "neumann"
  | "sennheiser"
  | "shure"
  | "electrovoice"
  | "dw"
  | "klarkteknik"
  | "peavey"
  | "avalon"
  | "focusrite"
  | "dbx"
  | "universal-audio"
  | "ssl"
  | "manley"
  | "aphex"
  | "spl"
  | "mercury"
  | "sonotec"
  | "bbe"
  | "alesis"
  | "korg"
  | "lexicon"
  | "tc-electronic"
  | "glockenklang"
  | "rtw"
  | "behringer"
  | "tascam"
  | "gibson"
  | "ibanez"
  | "fender"
  | "trace-elliot"
  | "vox"
  | "mesa-boogie"
  | "marshall"
  | "yamaha"
  | "ibach"
  | "bowers-wilkins"
  | "bryston"
  | "quested"
  | "genelec"
  | "krk";

type BrandIcon = {
  label: string;
  type: "path";
  path: string;
  viewBox?: string;
};

type BrandWordmark = {
  label: string;
  type: "wordmark";
  display: string;
  style?: "wide" | "script" | "compact";
};

export type BrandDefinition = BrandIcon | BrandWordmark;

export const brandLogos: Record<BrandSlug, BrandDefinition> = {
  protools: {
    label: "Pro Tools",
    type: "path",
    path: "M.505 15.452Q.27 14.63.14 13.762.01 12.891.01 12q0-2.49.94-4.673.94-2.184 2.572-3.804Q5.155 1.902 7.339.938 9.523 0 12.012 0q2.465 0 4.65.94 2.183.962 3.815 2.583 1.633 1.62 2.572 3.804.94 2.184.94 4.673 0 .869-.118 1.714-.118.846-.352 1.644.21.047.34.07l.13.024-1.363 3.429-.188-.012-.54-.106Q21.1 19.937 20.02 20.9q-1.057.987-2.325 1.668-1.268.68-2.724 1.056-1.433.376-2.96.376-1.55 0-3.005-.376-1.433-.375-2.7-1.068-1.269-.693-2.35-1.656-1.08-.963-1.878-2.16-.282.094-.434.117l-.153.024-1.48-3.382.118.012.376-.059zM22.744 12q0-2.23-.846-4.18-.845-1.95-2.301-3.405-1.456-1.456-3.429-2.301-1.949-.846-4.156-.846-2.231 0-4.18.846-1.973.845-3.429 2.3Q2.947 5.872 2.102 7.82 1.256 9.77 1.256 12q0 .751.106 1.491.106.74.317 1.444.892-.516 2.02-1.972 1.127-1.456 1.808-2.912.352-.728.916-1.597.54-.869 1.338-1.632.799-.763 1.855-1.256 1.057-.517 2.396-.517 1.315 0 2.419.587 1.103.587 1.913 1.35.81.764 1.304 1.492.516.727.657.986.165.282.47.94.329.633.728 1.361.4.728.822 1.433.423.68.798 1.033.259.258.564.446.305.188.61.329.212-.728.33-1.48.117-.751.117-1.526zM12.012 22.732q1.338 0 2.583-.305 1.268-.33 2.383-.916 1.116-.587 2.055-1.41.94-.821 1.668-1.83-.94-.494-2.173-1.645-1.233-1.15-2.5-3.358-.142-.235-.494-.94-.352-.704-.857-1.455-.505-.752-1.115-1.339t-1.268-.587q-.681 0-1.386.634-.704.61-1.303 1.386-.6.775-1.022 1.503-.423.704-.54.916-1.174 2.066-2.477 3.205-1.304 1.139-2.29 1.656.728 1.01 1.667 1.831.963.846 2.079 1.433 1.115.587 2.36.892 1.268.329 2.63.329z",
  },
  digidesign: {
    label: "Digidesign",
    type: "wordmark",
    display: "DIGIDESIGN",
    style: "compact",
  },
  sennheiser: {
    label: "Sennheiser",
    type: "path",
    path: "M0 3v18h24V3zm13.209 1.659c-1.428.548-2.799 1.757-3.905 4.182-.321.703-.925 2.062-1.2 2.67-2.224 4.882-3.364 5.932-6.72 5.932V4.35H13.15c.184-.011.235.25.06.309zm9.428 1.894V19.65H10.851c-.181.005-.227-.25-.055-.309 1.427-.548 2.798-1.757 3.904-4.182.321-.703.926-2.062 1.2-2.67 2.22-4.882 3.36-5.932 6.716-5.932z",
  },
  apple: {
    label: "Apple Logic",
    type: "path",
    path: "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701",
  },
  vox: {
    label: "Vox",
    type: "path",
    path: "M0 8.198l4.182 7.604h2.442L8.15 13.07a4.276 4.276 0 0 1 2.054-4.872H7.112l-1.677 3.216-1.706-3.216zm14.342 0a4.24 4.24 0 0 1 1.923 2.206c.784 2.081-.098 4.415-2.145 5.398h2.767l1.564-1.754 1.42 1.754H24l-3.505-4.032 3.088-3.572H19.41l-.952 1.249-.931-1.249zm-2.09 1.596c-.949 0-1.913.69-2.074 1.775a2.132 2.132 0 0 0 2.064 2.483c1.268.01 2.192-1.126 2.156-2.18-.013-1.015-.877-2.08-2.146-2.078z",
  },
  yamaha: {
    label: "Yamaha",
    type: "path",
    viewBox: "0 0 24 24",
    path: "M12 0a12 12 0 1012 12A12 12 0 0012 0zm-.412 1.377A10.648 10.648 0 0122.664 12 10.648 10.648 0 0112 22.664a10.648 10.648 0 01-.412-21.287zM12 1.9a.184.184 0 00-.172.131l-.883 2.526a.39.39 0 000 .097.3.3 0 00.133.25.926.926 0 01.074 1.465 2.345 2.345 0 00-.82 1.79v.903L5.865 6.498l-.547.953 4.987 2.877v.692l-.602.347-4.978-2.88-.551.954L8.602 12l-.782.45a2.345 2.345 0 00-1.127 1.616.93.93 0 01-1.312.668.293.293 0 00-.277 0 .324.324 0 00-.079.063l-1.742 2.037a.188.188 0 00.176.305l2.633-.493a.36.36 0 00.09-.035.3.3 0 00.152-.238.926.926 0 011.232-.781 2.345 2.345 0 001.954-.184l.78-.451v5.104h1.098v-5.756l.598-.344.598.344v5.756h1.1v-5.123l.78.45a2.345 2.345 0 001.954.184.926.926 0 011.234.782.285.285 0 00.149.238.36.36 0 00.09.035l2.634.492a.184.184 0 00.176-.305l.004.02-1.744-2.037a.39.39 0 00-.075-.063.3.3 0 00-.28 0 .938.938 0 01-.864-.035.93.93 0 01-.434-.633 2.368 2.368 0 00-1.14-1.609l-.782-.45 4.436-2.558-.549-.955-4.98 2.873-.602-.347v-.692l4.985-2.877-.547-.953L13.7 9.062v-.904a2.345 2.345 0 00-.803-1.789.922.922 0 01.079-1.465.309.309 0 00.128-.25.27.27 0 000-.097L12.18 2.03a.184.184 0 00-.18-.13z",
  },
  ableton: {
    label: "Ableton",
    type: "path",
    viewBox: "0 0 24 24",
    path: "M12 2a10 10 0 100 20 10 10 0 000-20zm-1.1 5.2h2.2v11.6h-2.2V7.2zm-3.8 2.4h2.2v7.2H7.1V9.6zm7.6 0h2.2v7.2h-2.2V9.6z",
  },
  otari: { label: "Otari", type: "wordmark", display: "OTARI", style: "wide" },
  telefunken: {
    label: "Telefunken",
    type: "wordmark",
    display: "TELEFUNKEN",
    style: "wide",
  },
  lavry: { label: "Lavry", type: "wordmark", display: "LAVRY", style: "compact" },
  harrison: {
    label: "Harrison",
    type: "wordmark",
    display: "HARRISON",
    style: "wide",
  },
  soundcraft: {
    label: "Soundcraft",
    type: "wordmark",
    display: "SOUNDCRAFT",
    style: "wide",
  },
  akg: { label: "AKG", type: "wordmark", display: "AKG", style: "compact" },
  neumann: {
    label: "Neumann",
    type: "wordmark",
    display: "NEUMANN",
    style: "wide",
  },
  shure: { label: "Shure", type: "wordmark", display: "Shure", style: "script" },
  electrovoice: {
    label: "Electro-Voice",
    type: "wordmark",
    display: "EV",
    style: "compact",
  },
  dw: { label: "DW", type: "wordmark", display: "DW", style: "compact" },
  klarkteknik: {
    label: "Klark Teknik",
    type: "wordmark",
    display: "KLARK TEKNIK",
    style: "compact",
  },
  peavey: { label: "Peavey", type: "wordmark", display: "PEAVEY", style: "wide" },
  avalon: { label: "Avalon", type: "wordmark", display: "AVALON", style: "wide" },
  focusrite: {
    label: "Focusrite",
    type: "wordmark",
    display: "FOCUSRITE",
    style: "wide",
  },
  dbx: { label: "DBX", type: "wordmark", display: "dbx", style: "compact" },
  "universal-audio": {
    label: "Universal Audio",
    type: "wordmark",
    display: "1176",
    style: "compact",
  },
  ssl: { label: "SSL", type: "wordmark", display: "SSL", style: "compact" },
  manley: { label: "Manley", type: "wordmark", display: "MANLEY", style: "wide" },
  aphex: { label: "Aphex", type: "wordmark", display: "APHEX", style: "compact" },
  spl: { label: "SPL", type: "wordmark", display: "SPL", style: "compact" },
  mercury: {
    label: "Mercury",
    type: "wordmark",
    display: "MERCURY",
    style: "wide",
  },
  sonotec: { label: "Sontec", type: "wordmark", display: "SONTEC", style: "wide" },
  bbe: { label: "BBE", type: "wordmark", display: "BBE", style: "compact" },
  alesis: { label: "Alesis", type: "wordmark", display: "ALESIS", style: "wide" },
  korg: { label: "Korg", type: "wordmark", display: "KORG", style: "compact" },
  lexicon: {
    label: "Lexicon",
    type: "wordmark",
    display: "LEXICON",
    style: "wide",
  },
  "tc-electronic": {
    label: "TC Electronic",
    type: "wordmark",
    display: "TC",
    style: "compact",
  },
  glockenklang: {
    label: "Glockenklang",
    type: "wordmark",
    display: "GLOCKENKLANG",
    style: "compact",
  },
  rtw: { label: "RTW", type: "wordmark", display: "RTW", style: "compact" },
  behringer: {
    label: "Behringer",
    type: "wordmark",
    display: "BEHRINGER",
    style: "compact",
  },
  tascam: { label: "Tascam", type: "wordmark", display: "TASCAM", style: "wide" },
  gibson: { label: "Gibson", type: "wordmark", display: "Gibson", style: "script" },
  ibanez: { label: "Ibanez", type: "wordmark", display: "IBANEZ", style: "wide" },
  fender: { label: "Fender", type: "wordmark", display: "Fender", style: "script" },
  "trace-elliot": {
    label: "Trace Elliot",
    type: "wordmark",
    display: "TRACE ELLIOT",
    style: "compact",
  },
  "mesa-boogie": {
    label: "Mesa Boogie",
    type: "wordmark",
    display: "MESA",
    style: "compact",
  },
  marshall: {
    label: "Marshall",
    type: "wordmark",
    display: "MARSHALL",
    style: "wide",
  },
  ibach: { label: "Ibach", type: "wordmark", display: "IBACH", style: "wide" },
  "bowers-wilkins": {
    label: "Bowers & Wilkins",
    type: "wordmark",
    display: "B&W",
    style: "compact",
  },
  bryston: { label: "Bryston", type: "wordmark", display: "BRYSTON", style: "wide" },
  quested: { label: "Quested", type: "wordmark", display: "QUESTED", style: "wide" },
  genelec: {
    label: "Genelec",
    type: "wordmark",
    display: "GENELEC",
    style: "wide",
  },
  krk: { label: "KRK", type: "wordmark", display: "KRK", style: "compact" },
};
