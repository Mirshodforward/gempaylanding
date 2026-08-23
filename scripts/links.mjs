/**
 * O'lik havola tekshiruvchisi — `npm run links` (build'dan KEYIN).
 *
 * NEGA KERAK: maqolalar bir-biriga havola beradi va ular navbatma-navbat
 * yoziladi. Hali yozilmagan maqolaga berilgan havola build'ni buzmaydi —
 * u shunchaki 404 ga olib boradi. Sayt chiqqach esa bunday havolalar ikki
 * zarar keltiradi: o'quvchi yo'qoladi va Google «soft 404» topib, sahifaga
 * bo'lgan ishonchni tushiradi.
 *
 * Shuning uchun bu tekshiruv DEPLOY OLDIDAN majburiy: `dist/` dagi har bir
 * HTML fayl o'qiladi va undagi har bir ichki havola haqiqiy faylga
 * tushishi tekshiriladi.
 *
 * Vercel `cleanUrls: true` bilan ishlaydi, ya'ni `/blog/x` → `blog/x.html`.
 * Tekshiruv aynan shu qoidani takrorlaydi.
 */

import { readFile, readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");

if (!existsSync(DIST)) {
  console.error("❌ dist/ yo'q. Avval `npm run build`.");
  process.exit(1);
}

/** `dist/` ichidagi barcha fayllarni rekursiv yig'adi. */
async function walk(dir, out = []) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await walk(p, out);
    else out.push(p);
  }
  return out;
}

const files = await walk(DIST);
const htmlFiles = files.filter((f) => f.endsWith(".html"));

/** Manzil → fayl. `cleanUrls` qoidasi bilan bir xil. */
function resolves(urlPath) {
  const clean = urlPath.replace(/^\//, "").replace(/\/$/, "");
  if (!clean) return existsSync(path.join(DIST, "index.html"));
  return (
    existsSync(path.join(DIST, `${clean}.html`)) ||
    existsSync(path.join(DIST, clean, "index.html")) ||
    // statik fayl (rasm, shrift, sitemap...)
    existsSync(path.join(DIST, clean))
  );
}

const dead = new Map();
const anchorMisses = new Map();
let checked = 0;

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const from = "/" + path.relative(DIST, file).replace(/\.html$/, "").replace(/\/index$/, "");

  // Sahifadagi `id` lar — langar havolalarni tekshirish uchun
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));

  for (const m of html.matchAll(/href="([^"]+)"/g)) {
    const href = m[1];
    // Tashqi havola, pochta, telefon va ma'lumot manzillari tekshirilmaydi
    if (/^(https?:|mailto:|tel:|data:|#)/.test(href)) {
      // Faqat o'z sahifasidagi langar
      if (href.startsWith("#") && href.length > 1 && !ids.has(href.slice(1))) {
        (anchorMisses.get(from) ?? anchorMisses.set(from, []).get(from)).push(href);
      }
      continue;
    }
    checked++;
    const [urlPath, hash] = href.split("#");
    if (!resolves(urlPath)) {
      (dead.get(from) ?? dead.set(from, []).get(from)).push(href);
      continue;
    }
    // Boshqa sahifadagi langarni ham tekshiramiz
    if (hash) {
      const targetFile = [
        path.join(DIST, `${urlPath.replace(/^\//, "")}.html`),
        path.join(DIST, urlPath.replace(/^\//, ""), "index.html"),
      ].find((p) => existsSync(p));
      if (targetFile) {
        const targetHtml = await readFile(targetFile, "utf8");
        if (!new RegExp(`\\sid="${hash.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`).test(targetHtml)) {
          (anchorMisses.get(from) ?? anchorMisses.set(from, []).get(from)).push(href);
        }
      }
    }
  }
}

console.log(`${htmlFiles.length} ta sahifa, ${checked} ta ichki havola tekshirildi`);

if (anchorMisses.size) {
  console.log(`\n⚠️  langar topilmadi:`);
  for (const [from, list] of anchorMisses) {
    console.log(`   ${from}`);
    [...new Set(list)].forEach((h) => console.log(`      ${h}`));
  }
}

if (dead.size) {
  const total = [...dead.values()].reduce((n, l) => n + l.length, 0);
  console.log(`\n❌ ${total} ta o'lik havola:`);
  for (const [from, list] of dead) {
    console.log(`   ${from}`);
    [...new Set(list)].forEach((h) => console.log(`      → ${h}`));
  }
  process.exit(1);
}

console.log("✓ o'lik havola yo'q");
