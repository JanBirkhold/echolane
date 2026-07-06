import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const CLIENTS_DIR = path.join(process.cwd(), "public/images/clients");
const JSON_PATH = path.join(process.cwd(), "lib/clients-covers.json");
const SIZE = 320;
const WEBP_QUALITY = 82;

const IMAGE_RE = /\.(jpe?g|png|webp|avif)$/i;

function extractId(filename) {
  const base = path.parse(filename).name;
  const wix = base.match(/^58d0b6_([a-f0-9]{16})/i);
  if (wix) return wix[1];
  return base;
}

async function optimizeCovers() {
  const inputs = fs
    .readdirSync(CLIENTS_DIR)
    .filter((file) => IMAGE_RE.test(file) && !file.startsWith("."))
    .sort((a, b) => a.localeCompare(b));

  const covers = [];
  const written = new Set();

  for (const inputName of inputs) {
    const id = extractId(inputName);
    const outputName = `${id}.webp`;
    const inputPath = path.join(CLIENTS_DIR, inputName);
    const outputPath = path.join(CLIENTS_DIR, outputName);
    const tempPath = `${outputPath}.tmp`;

    await sharp(inputPath)
      .rotate()
      .resize(SIZE, SIZE, { fit: "cover", position: "centre" })
      .webp({ quality: WEBP_QUALITY, effort: 4 })
      .toFile(tempPath);

    fs.renameSync(tempPath, outputPath);
    written.add(outputName);

    if (inputName !== outputName) {
      fs.unlinkSync(inputPath);
    }

    const { size } = fs.statSync(outputPath);
    covers.push({
      id,
      src: `/images/clients/${outputName}`,
      mediaUrl: outputName,
      width: SIZE,
      height: SIZE,
      origW: SIZE,
      origH: SIZE,
      size,
    });
  }

  for (const file of fs.readdirSync(CLIENTS_DIR)) {
    if (!file.endsWith(".webp") || file.startsWith(".")) continue;
    if (!covers.some((cover) => cover.mediaUrl === file)) {
      fs.unlinkSync(path.join(CLIENTS_DIR, file));
    }
  }

  fs.writeFileSync(JSON_PATH, `${JSON.stringify(covers, null, 2)}\n`);
  console.log(`Optimized ${covers.length} client covers to ${SIZE}px WebP.`);
}

optimizeCovers().catch((error) => {
  console.error(error);
  process.exit(1);
});
