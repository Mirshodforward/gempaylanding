/**
 * Shriftlarni Google Fonts'dan yuklab, `public/fonts/` ga qo'yadi va
 * `src/styles/fonts.css` ni yozadi — `npm run fonts`.
 *
 * NEGA o'zimizda hostlaymiz: `fonts.googleapis.com` ga havola render'ni
 * bloklaydigan qo'shimcha DNS + TLS + 2 ta so'rov qo'shadi (~200-400 ms
 * mobil 4G'da). Bu to'g'ridan-to'g'ri LCP ga urиладi, LCP esa Google
 * reytingiga. O'z domenimizdan berilgan woff2 esa HTML bilan bir ulanishda
 * keladi va `preload` bilan darhol boshlanadi.
 *
 * Faqat KERAKLI subsetlar olinadi: lotin (uz/en) + kirill (ru). Vetnam,
 * grek va cyrillic-ext tashlab yuboriladi — ular fayl hajmini bekorga
 * ikkilantiradi.
 */

import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const FONT_DIR = path.join(ROOT, "public", "fonts");

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

/** Olinadigan subsetlar — qolganlari tashlanadi. */
const KEEP = new Set(["latin", "latin-ext", "cyrillic"]);

const FAMILIES = [
  { family: "Unbounded", axis: "wght@500..800", file: "unbounded" },
  { family: "Manrope", axis: "wght@400..800", file: "manrope" },
];

/** Google CSS'ni `/* subset *​/` izohlari bo'yicha bo'laklarga ajratadi. */
function parseFaces(css) {
  const out = [];
  const re = /\/\*\s*([a-z-]+)\s*\*\/\s*@font-face\s*\{([^}]+)\}/g;
  let m;
  while ((m = re.exec(css))) {
    const [, subset, body] = m;
    const url = body.match(/url\((https:[^)]+)\)/)?.[1];
    const range = body.match(/unicode-range:\s*([^;]+);/)?.[1]?.trim();
    const weight = body.match(/font-weight:\s*([^;]+);/)?.[1]?.trim();
    if (url && range) out.push({ subset, url, range, weight });
  }
  return out;
}

await mkdir(FONT_DIR, { recursive: true });

const blocks = [
  "/* AVTOMATIK YARATILGAN — `npm run fonts`. Qo'lda tahrirlamang. */",
  "/* Manba: Google Fonts, o'z domenimizda hostlanadi (tashqi so'rov yo'q). */",
  "",
];

for (const f of FAMILIES) {
  const css = await fetch(`https://fonts.googleapis.com/css2?family=${f.family}:${f.axis}&display=swap`, {
    headers: { "User-Agent": UA },
  }).then((r) => r.text());

  const faces = parseFaces(css).filter((x) => KEEP.has(x.subset));
  if (!faces.length) throw new Error(`${f.family}: kerakli subsetlar topilmadi`);

  for (const face of faces) {
    const name = `${f.file}-${face.subset}.woff2`;
    const buf = Buffer.from(await fetch(face.url, { headers: { "User-Agent": UA } }).then((r) => r.arrayBuffer()));
    await writeFile(path.join(FONT_DIR, name), buf);
    console.log(`  ${name}  ${(buf.length / 1024).toFixed(1)} KB`);

    blocks.push(
      `@font-face {`,
      `  font-family: "${f.family}";`,
      `  font-style: normal;`,
      `  font-weight: ${face.weight};`,
      `  font-display: swap;`,
      `  src: url("/fonts/${name}") format("woff2");`,
      `  unicode-range: ${face.range};`,
      `}`,
      "",
    );
  }
  console.log(`✓ ${f.family}`);
}

await writeFile(path.join(ROOT, "src", "styles", "fonts.css"), blocks.join("\n"));
console.log("✓ src/styles/fonts.css yozildi");
