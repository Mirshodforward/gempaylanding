/**
 * Statik asset generatori — `npm run assets`.
 *
 * Nima yasaydi:
 *   public/favicon.ico + favicon-*.png     brauzer yorlig'i
 *   public/apple-touch-icon.png            iOS bosh ekrani (shaffofsiz, majburiy)
 *   public/icon-192.png / icon-512.png     PWA manifest
 *   public/icon-maskable-512.png           Android adaptiv (safe-zone bilan)
 *   public/og/default.png                  bosh sahifa / blog uchun zaxira
 *   public/og/<slug>.png                   har o'yin uchun alohida OG (1200×630)
 *
 * NEGA build vaqtida emas, alohida skript: bu rasmlar deyarli o'zgarmaydi
 * (o'yin qo'shilganda yoki logo almashganda). Har buildda qayta chizish
 * Vercel'da bekorga ~20 soniya yeydi. Natija `public/` da git'da yotadi.
 *
 * Sahifa ICHIDAGI rasmlar bu yerda EMAS — ular `astro:assets` orqali
 * `src/assets/` dan import qilinadi va Astro ularni avtomatik webp/avif ga
 * o'giradi, kerakli o'lchamlarda va content-hash bilan.
 */

import sharp from "sharp";
import { mkdir, writeFile, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "src", "assets");
const OUT = path.join(ROOT, "public");

// Brend ranglari — `src/styles/tokens.css` dagi qiymatlar bilan bir xil.
const BG = "#070A14";
const BRAND = "#7C5CFF";
const CYAN = "#22D3EE";
const TEXT = "#EAF0FB";
const MUTED = "#94A3B8";

/** Muqovasi oq/och bo'lgan o'yinlar — OG'da orqasiga oq plita qo'yiladi. */
const LIGHT_ART = new Set(["mobile-legends", "asphalt-9", "bigo-live", "steam"]);

/** `src/data/games.ts` dan qo'lda ko'chirilgan minimal ro'yxat.
 *  (Skript sof Node — TS importi uchun bundler kerak bo'lardi.) */
const GAMES = [
  { slug: "pubg-mobile", title: "PUBG Mobile", unit: "UC", accent: "#F5A524", eta: 2 },
  { slug: "mobile-legends", title: "Mobile Legends", unit: "Olmos", accent: "#5B8DEF", eta: 1 },
  { slug: "magic-chess-go-go", title: "Magic Chess: Go Go", unit: "Olmos", accent: "#A855F7", eta: 2 },
  { slug: "free-fire", title: "Free Fire", unit: "Olmos", accent: "#F97316", eta: 2 },
  { slug: "call-of-duty-mobile", title: "Call of Duty: Mobile", unit: "CP", accent: "#F43F5E", eta: 3 },
  { slug: "honor-of-kings", title: "Honor of Kings", unit: "Token", accent: "#EAB308", eta: 3 },
  { slug: "delta-force", title: "Delta Force", unit: "Delta Coins", accent: "#84CC16", eta: 5 },
  { slug: "asphalt-9", title: "Asphalt 9", unit: "Token", accent: "#EF4444", eta: 5 },
  { slug: "bigo-live", title: "Bigo Live", unit: "Olmos", accent: "#22D3EE", eta: 3 },
  { slug: "steam", title: "Steam", unit: "Hamyon", accent: "#66C0F4", eta: 1 },
];

const FONT = "'Helvetica Neue', Helvetica, Arial, sans-serif";

/** SVG ichida matn xavfsiz turishi uchun — `&`, `<`, apostrof va h.k. */
const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

// --------------------------------------------------------------- ikonalar ---

/**
 * Kvadrat ikona: shaffof logo → to'q fon + yumshoq binafsha nur.
 * `padding` — logo atrofidagi bo'sh joy ulushi (maskable uchun kattaroq).
 */
async function makeIcon(size, { padding = 0.14, radius = null, bg = true } = {}) {
  const inner = Math.round(size * (1 - padding * 2));
  const mark = await sharp(path.join(SRC, "brand", "gempay-mark.png"))
    .resize(inner, inner, { fit: "inside", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();
  const meta = await sharp(mark).metadata();

  const r = radius === null ? Math.round(size * 0.22) : radius;
  const plate = bg
    ? `<defs>
         <radialGradient id="g" cx="50%" cy="38%" r="72%">
           <stop offset="0%" stop-color="#2A1B5E"/>
           <stop offset="100%" stop-color="${BG}"/>
         </radialGradient>
       </defs>
       <rect width="${size}" height="${size}" rx="${r}" fill="url(#g)"/>`
    : "";

  return sharp({
    create: { width: size, height: size, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([
      ...(bg
        ? [{ input: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">${plate}</svg>`) }]
        : []),
      {
        input: mark,
        left: Math.round((size - (meta.width ?? inner)) / 2),
        top: Math.round((size - (meta.height ?? inner)) / 2),
      },
    ])
    .png()
    .toBuffer();
}

async function buildIcons() {
  await mkdir(OUT, { recursive: true });

  // Kichik o'lchamda logo tafsilotlari yo'qoladi — kamroq padding beramiz.
  for (const [size, padding] of [[16, 0.04], [32, 0.06], [48, 0.08], [96, 0.1], [180, 0.12], [192, 0.12], [512, 0.14]]) {
    const buf = await makeIcon(size, { padding });
    const name = size === 180 ? "apple-touch-icon.png" : size <= 96 ? `favicon-${size}x${size}.png` : `icon-${size}.png`;
    await writeFile(path.join(OUT, name), buf);
  }

  // Android maskable: logo «xavfsiz doira» ichida qolishi uchun 20% chekka,
  // burchak radiusi YO'Q — tizim o'zi kesadi.
  await writeFile(path.join(OUT, "icon-maskable-512.png"), await makeIcon(512, { padding: 0.22, radius: 0 }));

  // ICO — bitta faylda 16/32/48. Sharp `.ico` yozmaydi, shuning uchun
  // qo'lda yig'amiz (PNG-in-ICO — barcha zamonaviy brauzerlar tushunadi).
  const sizes = [16, 32, 48];
  const pngs = await Promise.all(sizes.map((s) => makeIcon(s, { padding: 0.05 })));
  const header = Buffer.alloc(6 + 16 * sizes.length);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(sizes.length, 4);
  let offset = header.length;
  sizes.forEach((s, i) => {
    const e = 6 + i * 16;
    header.writeUInt8(s === 256 ? 0 : s, e);
    header.writeUInt8(s === 256 ? 0 : s, e + 1);
    header.writeUInt8(0, e + 2);
    header.writeUInt8(0, e + 3);
    header.writeUInt16LE(1, e + 4);
    header.writeUInt16LE(32, e + 6);
    header.writeUInt32LE(pngs[i].length, e + 8);
    header.writeUInt32LE(offset, e + 12);
    offset += pngs[i].length;
  });
  await writeFile(path.join(OUT, "favicon.ico"), Buffer.concat([header, ...pngs]));

  console.log(`✓ ikonalar: favicon.ico, favicon-*.png, apple-touch-icon.png, icon-{192,512}.png, icon-maskable-512.png`);
}

// --------------------------------------------------------------- OG rasm ----

const OG_W = 1200;
const OG_H = 630;

/** OG fon — to'q ekran + ikkita rangli nur (o'yin aksenti bilan bo'yaladi). */
function ogBackdrop(accent) {
  return `
    <defs>
      <radialGradient id="glow1" cx="18%" cy="8%" r="62%">
        <stop offset="0%" stop-color="${BRAND}" stop-opacity="0.42"/>
        <stop offset="100%" stop-color="${BRAND}" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="glow2" cx="88%" cy="94%" r="58%">
        <stop offset="0%" stop-color="${accent}" stop-opacity="0.34"/>
        <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="rule" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="${BRAND}"/>
        <stop offset="100%" stop-color="${CYAN}"/>
      </linearGradient>
    </defs>
    <rect width="${OG_W}" height="${OG_H}" fill="${BG}"/>
    <rect width="${OG_W}" height="${OG_H}" fill="url(#glow1)"/>
    <rect width="${OG_W}" height="${OG_H}" fill="url(#glow2)"/>
    <rect x="0" y="0" width="${OG_W}" height="6" fill="url(#rule)"/>`;
}

/** Uzun sarlavhani ikki qatorga bo'ladi (SVG'da avtomatik o'ralish yo'q). */
function wrap(text, maxChars) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = "";
  for (const w of words) {
    if (!line) line = w;
    else if ((line + " " + w).length <= maxChars) line += " " + w;
    else {
      lines.push(line);
      line = w;
    }
  }
  if (line) lines.push(line);
  return lines.slice(0, 2);
}

async function makeOg({ slug, title, unit, accent, eta, art }) {
  const composites = [];

  // O'ng tomonda o'yin muqovasi — yumaloq burchakli plita ustida.
  const ART = 300;
  const artX = OG_W - ART - 84;
  const artY = Math.round((OG_H - ART) / 2) + 6;

  if (art) {
    const cover = await sharp(art).resize(ART, ART, { fit: "cover" }).toBuffer();
    const rounded = await sharp(cover)
      .composite([
        {
          input: Buffer.from(
            `<svg xmlns="http://www.w3.org/2000/svg" width="${ART}" height="${ART}"><rect width="${ART}" height="${ART}" rx="56" fill="#fff"/></svg>`,
          ),
          blend: "dest-in",
        },
      ])
      .png()
      .toBuffer();

    // Muqova ostidagi nur + ramka — oq muqovalar to'q fonda «suzib» qolmasin.
    composites.push({
      input: Buffer.from(
        `<svg xmlns="http://www.w3.org/2000/svg" width="${OG_W}" height="${OG_H}">
           <rect x="${artX - 14}" y="${artY - 14}" width="${ART + 28}" height="${ART + 28}" rx="70"
                 fill="${accent}" fill-opacity="0.16" stroke="${accent}" stroke-opacity="0.4" stroke-width="2"/>
         </svg>`,
      ),
    });
    composites.push({ input: rounded, left: artX, top: artY });
  }

  // Chapda GemPay belgisi
  const markH = 46;
  const mark = await sharp(path.join(SRC, "brand", "gempay-mark.png"))
    .resize({ height: markH })
    .toBuffer();
  composites.push({ input: mark, left: 84, top: 74 });
  const markW = (await sharp(mark).metadata()).width ?? 68;

  const titleLines = wrap(title, 17);
  const titleY = 250;
  const lineH = 74;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${OG_W}" height="${OG_H}">
    ${ogBackdrop(accent)}
    <text x="${84 + markW + 16}" y="${74 + markH - 12}" font-family="${FONT}" font-size="34" font-weight="700"
          fill="${TEXT}" letter-spacing="-0.5">GemPay</text>

    ${titleLines
      .map(
        (l, i) =>
          `<text x="84" y="${titleY + i * lineH}" font-family="${FONT}" font-size="66" font-weight="700"
                 fill="${TEXT}" letter-spacing="-2">${esc(l)}</text>`,
      )
      .join("")}

    <text x="84" y="${titleY + titleLines.length * lineH + 18}" font-family="${FONT}" font-size="40" font-weight="600"
          fill="${accent}" letter-spacing="-0.6">${esc(unit)} — so'mda to'ldirish</text>

    <g transform="translate(84, ${OG_H - 116})">
      <rect x="0" y="0" width="228" height="52" rx="26" fill="${accent}" fill-opacity="0.14"
            stroke="${accent}" stroke-opacity="0.45"/>
      <text x="26" y="34" font-family="${FONT}" font-size="24" font-weight="600" fill="${TEXT}">⚡ ~${eta} daqiqada</text>
      <text x="256" y="34" font-family="${FONT}" font-size="24" fill="${MUTED}">UzCard · HUMO · Click · Payme</text>
    </g>
  </svg>`;

  composites.unshift({ input: Buffer.from(svg) });

  await sharp({ create: { width: OG_W, height: OG_H, channels: 4, background: BG } })
    .composite(composites)
    .png({ compressionLevel: 9 })
    .toFile(path.join(OUT, "og", `${slug}.png`));
}

async function buildOg() {
  await mkdir(path.join(OUT, "og"), { recursive: true });

  for (const g of GAMES) {
    const ext = g.slug === "steam" ? "webp" : "png";
    let art = path.join(SRC, "games", `${g.slug}.${ext}`);

    // Oq muqovalar (MLBB, Asphalt, Bigo, Steam) to'q fonda yo'qoladi —
    // ostiga oq plita qo'yamiz, shunda logo o'z fonida turadi.
    if (LIGHT_ART.has(g.slug)) {
      art = await sharp(art)
        .resize(300, 300, { fit: "contain", background: "#ffffff" })
        .flatten({ background: "#ffffff" })
        .png()
        .toBuffer();
    }

    await makeOg({ ...g, art });
  }

  // Bosh sahifa / blog uchun zaxira OG — muqovasiz, faqat brend.
  await makeOg({
    slug: "default",
    title: "O'yin hisobingizni so'mda to'ldiring",
    unit: "PUBG UC, ML olmos va yana 8 ta",
    accent: BRAND,
    eta: 2,
    art: null,
  });

  console.log(`✓ OG rasmlar: ${GAMES.length + 1} ta (public/og/)`);
}

// ------------------------------------------------------------------ ishga ---

await buildIcons();
await buildOg();
console.log("✓ tayyor");
