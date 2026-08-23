/**
 * IndexNow — `npm run indexnow`.
 *
 * NIMA BU: Bing va Yandex qo'llab-quvvatlaydigan protokol. Sayt o'zi
 * «shu manzillar yangilandi» deb xabar beradi va krauler kelishini kutib
 * o'tirmaydi. Yandex O'zbekistonda ikkinchi asosiy qidiruv tizimi va
 * uning kraulerlari sekin — yangi maqola indeksga tushishi haftalab
 * cho'zilishi mumkin. IndexNow buni soatlarga tushiradi.
 *
 * Google IndexNow'ni QO'LLAB-QUVVATLAMAYDI — u uchun sitemap va Search
 * Console ishlaydi. Shuning uchun bu skript sitemap o'rnini bosmaydi,
 * uni to'ldiradi.
 *
 * SOZLASH:
 *   1. Tasodifiy kalit yarating (8-128 belgi, harf va raqam):
 *        node -e "console.log(crypto.randomUUID().replace(/-/g,''))"
 *   2. `src/data/site.ts` → `INDEXNOW_KEY` ga yozing.
 *   3. `public/<kalit>.txt` fayl yarating, ichida FAQAT o'sha kalit tursin.
 *   4. Deploy qiling, keyin shu skriptni ishga tushiring.
 *
 * Kalitsiz ishga tushirilsa — nima qilish kerakligini aytadi va chiqadi.
 */

import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const site = await readFile(path.join(ROOT, "src", "data", "site.ts"), "utf8");
const KEY = site.match(/INDEXNOW_KEY\s*=\s*"([^"]*)"/)?.[1] || "";
const SITE_URL = site.match(/SITE_URL\s*=\s*"([^"]+)"/)?.[1] || "";
const host = SITE_URL.replace(/^https?:\/\//, "");

if (!KEY) {
  console.log(
    [
      "IndexNow kaliti sozlanmagan.",
      "",
      "1) Kalit yarating:",
      '   node -e "console.log(crypto.randomUUID().replace(/-/g,\'\'))"',
      "2) src/data/site.ts → INDEXNOW_KEY ga yozing",
      "3) public/<kalit>.txt yarating, ichida faqat o'sha kalit tursin",
      "4) Deploy qiling va bu skriptni qayta ishga tushiring",
    ].join("\n"),
  );
  process.exit(0);
}

// Kalit fayli haqiqatan mavjudmi — bo'lmasa IndexNow so'rovni rad etadi
const keyFile = path.join(ROOT, "public", `${KEY}.txt`);
if (!existsSync(keyFile)) {
  console.error(`❌ public/${KEY}.txt topilmadi. Ichida faqat kalit turishi kerak.`);
  process.exit(1);
}
const keyFileBody = (await readFile(keyFile, "utf8")).trim();
if (keyFileBody !== KEY) {
  console.error(`❌ public/${KEY}.txt ichidagi qiymat kalitga mos emas.`);
  process.exit(1);
}

// Manzillar sitemapdan — ya'ni faqat indekslanadigan, kanonik sahifalar
const sitemapPath = path.join(ROOT, "dist", "sitemap.xml");
if (!existsSync(sitemapPath)) {
  console.error("❌ dist/sitemap.xml yo'q. Avval `npm run build`.");
  process.exit(1);
}
const xml = await readFile(sitemapPath, "utf8");
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if (!urls.length) {
  console.error("❌ sitemapda manzil yo'q.");
  process.exit(1);
}

// Bitta so'rovda 10 000 tagacha manzil ruxsat etiladi
const body = { host, key: KEY, keyLocation: `${SITE_URL}/${KEY}.txt`, urlList: urls };

const res = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

// 200 va 202 — qabul qilindi. 422 — manzillar host bilan mos emas.
if (res.ok) {
  console.log(`✓ ${urls.length} ta manzil IndexNow'ga yuborildi (${res.status})`);
} else {
  console.error(`❌ IndexNow ${res.status}: ${await res.text()}`);
  process.exit(1);
}
