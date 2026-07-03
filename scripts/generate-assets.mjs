// Build every PNG icon + OG image from public/gempaylogo.png.
// Run with: npm run assets   (requires sharp + source logo in public/)
import sharp from "sharp";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const pub = join(here, "..", "public");
const SOURCE = join(pub, "gempaylogo.png");
const BG = { r: 7, g: 10, b: 20, alpha: 1 }; // #070A14 — site background

if (!existsSync(SOURCE)) {
  console.error("✗ Missing public/gempaylogo.png — add the brand logo first.");
  process.exit(1);
}

/** Tighter center crop for small icons so the GP mark fills the favicon tab. */
function cropFactor(size) {
  if (size <= 16) return 0.46;
  if (size <= 32) return 0.50;
  if (size <= 48) return 0.54;
  if (size <= 180) return 0.62;
  return 0.72;
}

async function squareIcon(size) {
  const meta = await sharp(SOURCE).metadata();
  const factor = cropFactor(size);
  const crop = Math.round(Math.min(meta.width, meta.height) * factor);
  const left = Math.round((meta.width - crop) / 2);
  const top = Math.round((meta.height - crop) / 2);

  return sharp(SOURCE)
    .extract({ left, top, width: crop, height: crop })
    .resize(size, size, { fit: "fill", background: BG })
    .png();
}

// ── Square icons (favicon / PWA / apple-touch) ──────────────────────────
const icons = [
  ["favicon-16x16.png", 16],
  ["favicon-32x32.png", 32],
  ["favicon-48x48.png", 48],
  ["apple-touch-icon.png", 180],
  ["icon-192x192.png", 192],
  ["icon-512x512.png", 512],
];

for (const [name, size] of icons) {
  await (await squareIcon(size)).toFile(join(pub, name));
  console.log("✓", name);
}

// ── Open Graph image: logo + wordmark on dark gradient ───────────────────
const ogMeta = await sharp(SOURCE).metadata();
const ogCrop = Math.round(Math.min(ogMeta.width, ogMeta.height) * 0.68);
const ogLeft = Math.round((ogMeta.width - ogCrop) / 2);
const ogTop = Math.round((ogMeta.height - ogCrop) / 2);

const logoOg = await sharp(SOURCE)
  .extract({ left: ogLeft, top: ogTop, width: ogCrop, height: ogCrop })
  .resize(300, 300, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="bg" cx="50%" cy="38%" r="78%">
      <stop offset="0%" stop-color="#1A1030"/>
      <stop offset="55%" stop-color="#0A0F1E"/>
      <stop offset="100%" stop-color="#05080F"/>
    </radialGradient>
    <linearGradient id="word" x1="0" y1="0" x2="1" y2="0">
      <stop stop-color="#EAF0FB"/><stop offset="1" stop-color="#C4B5FD"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <image href="data:image/png;base64,${logoOg.toString("base64")}" x="450" y="72" width="300" height="300"/>
  <text x="600" y="430" font-family="Sora, Segoe UI, sans-serif" font-size="88" font-weight="800" fill="url(#word)" text-anchor="middle">Gempay</text>
  <text x="600" y="492" font-family="Inter, Segoe UI, sans-serif" font-size="34" font-weight="600" fill="#B07CFF" text-anchor="middle">O'yin valyutalari — arzon va bir daqiqada</text>
  <text x="600" y="548" font-family="Inter, Segoe UI, sans-serif" font-size="26" font-weight="500" fill="#94A3B8" text-anchor="middle">PUBG UC · Mobile Legends · Free Fire · 200+ o'yin</text>
</svg>`;

await sharp(Buffer.from(og)).png().toFile(join(pub, "og-image.png"));
console.log("✓ og-image.png");

console.log("\nDone. All brand assets generated from public/gempaylogo.png.");
