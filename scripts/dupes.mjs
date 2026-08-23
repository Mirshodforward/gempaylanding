/**
 * Maqolalar orasidagi takroriylikni topadi — `npm run dupes`.
 *
 * NEGA KERAK: 45 maqolani 45 ta mustaqil agent yozadi, va ularning
 * hammasiga bir xil mahsulot qoidalari beriladi. Natijada ular
 * kelishmasdan turib bir xil jumlalarni yozib qo'yishi tabiiy —
 * «UzCard, HUMO, Click, Payme yoki Paynet orqali so'mda to'laysiz» kabi.
 *
 * Bir-ikkitasi zararsiz: bu mahsulotning haqiqiy tavsifi va u
 * takrorlanishi kerak. Lekin butun XATBOSHI takrorlansa, Google buni
 * shablon deb ko'radi va o'sha maqolalarni «thin content» toifasiga
 * qo'shadi. Aynan shu narsa o'yin sahifalarida bir marta sodir bo'lgan.
 *
 * Shuning uchun tekshiruv jumla darajasida ishlaydi va faqat UZUN
 * takrorlarni ko'rsatadi — qisqa, muqarrar iboralar tinch qoldiriladi.
 */

import { readFile, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIR = path.join(ROOT, ".plan", "generated", "articles");

/** Shundan uzun jumla takrorlansa — muammo. Qisqa iboralar muqarrar. */
const MIN_WORDS = 12;
/** Shundan ko'p maqolada uchrasa — shablon. */
const MAX_ARTICLES = 2;

if (!existsSync(DIR)) {
  console.log("Yaratilgan maqolalar yo'q.");
  process.exit(0);
}

/** Obyekt ichidagi barcha matnni yig'adi. */
function strings(v, out = []) {
  if (typeof v === "string") out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === "object") Object.values(v).forEach((x) => strings(x, out));
  return out;
}

/** Taqqoslash uchun normallashtirish — teg, tinish belgisi va registr olib tashlanadi. */
const norm = (s) =>
  s
    .replace(/<[^>]+>/g, " ")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();

const bySentence = new Map(); // jumla → slug to'plami
const articles = [];

for (const f of (await readdir(DIR)).filter((x) => x.endsWith(".json"))) {
  const a = JSON.parse(await readFile(path.join(DIR, f), "utf8"));
  articles.push(a.slug);
  const seen = new Set();
  for (const raw of strings({ body: a.body, faq: a.faq, answer: a.answer })) {
    for (const s of String(raw).split(/(?<=[.!?])\s+/)) {
      const n = norm(s);
      if (n.split(" ").length < MIN_WORDS) continue;
      if (seen.has(n)) continue;
      seen.add(n);
      (bySentence.get(n) ?? bySentence.set(n, new Set()).get(n)).add(a.slug);
    }
  }
}

const shared = [...bySentence.entries()]
  .filter(([, slugs]) => slugs.size > MAX_ARTICLES)
  .sort((a, b) => b[1].size - a[1].size || b[0].length - a[0].length);

console.log(`${articles.length} ta maqola tekshirildi (${MIN_WORDS}+ so'zli jumlalar)\n`);

if (!shared.length) {
  console.log("✓ shablon jumla topilmadi");
  process.exit(0);
}

console.log(`⚠️  ${shared.length} ta jumla ${MAX_ARTICLES} tadan ko'p maqolada takrorlanadi:\n`);
for (const [sentence, slugs] of shared.slice(0, 25)) {
  console.log(`  ${slugs.size} maqolada:`);
  console.log(`    "${sentence.slice(0, 150)}${sentence.length > 150 ? "…" : ""}"`);
  console.log(`    ${[...slugs].join(", ")}\n`);
}

// Bu ogohlantirish, xato emas: qaror matnni o'qigan odamniki. Mahsulot
// qoidasini takrorlash (masalan to'lov usullari ro'yxati) — normal;
// butun xatboshini takrorlash — yo'q.
console.log("Bular xato emas, KO'RIB CHIQISH uchun. Mahsulot faktini takrorlash normal,");
console.log("butun xatboshi yoki tushuntirishni takrorlash — shablon belgisi.");
