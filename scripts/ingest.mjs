/**
 * Yaratilgan matnni saytga kiritadi — `npm run ingest`.
 *
 * Kirish:
 *   .plan/generated/articles/*.json   → src/data/blog/posts/<slug>.ts
 *   .plan/generated/games/*.json      → src/data/gameContent.ts
 *
 * MUHIM: bu skript matnni SHUNCHAKI KO'CHIRMAYDI — avval tekshiradi va
 * qoidabuzarlikni topsa TO'XTAYDI. Sabab oddiy: bu matn avtomatik
 * yaratilgan, avtomatik yaratilgan matn esa ishonchli emas. Saytga
 * chiqadigan har bir da'vo tekshiruvdan o'tishi kerak, ayniqsa narx va
 * xavfsizlik bilan bog'liqlari.
 *
 * Tekshiruvlar (`--force` bilan ogohlantirishga aylanadi):
 *   1. NARX — hech qanday so'm/dollar summasi bo'lmasin. Narx botda jonli
 *      ko'rsatiladi; saytdagi raqam bir haftada yolg'onga aylanadi.
 *   2. APOSTROF — o'zbekcha matnda faqat ASCII `'`. Aralash apostrof
 *      qidiruvda mos kelmaslikka olib keladi va mashina tarjimasi belgisi.
 *   3. META uzunligi — title ≤60, description 140-160.
 *   4. H2 `id` — takrorlanmasin va ASCII bo'lsin (mundarija havolalari).
 *   5. ICHKI HAVOLA — mavjud sahifaga ko'rsatsin, aks holda 404.
 *   6. XAVFSIZLIK — «parol», «SMS kod», «akkauntni bering» kabi maslahat
 *      bo'lmasin.
 */

import { readFile, writeFile, readdir, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const GEN = path.join(ROOT, ".plan", "generated");
const POSTS = path.join(ROOT, "src", "data", "blog", "posts");

const FORCE = process.argv.includes("--force");

const problems = [];
const warnings = [];
const fail = (where, msg) => problems.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);

// ------------------------------------------------------------ tekshiruv ----

/** Matndagi barcha satrlarni yig'adi — blok turidan qat'i nazar. */
function allStrings(v, out = []) {
  if (typeof v === "string") out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => allStrings(x, out));
  else if (v && typeof v === "object") Object.values(v).forEach((x) => allStrings(x, out));
  return out;
}

/**
 * Narx da'vosi. `60 UC`, `1800 olmos` — bu MIQDOR, ruxsat.
 * `12 000 so'm`, `$1.5`, `2 dollar` — bu NARX, taqiqlanadi.
 */
const PRICE_RE =
  /(\d[\d\s  .,]{2,}\s*(so'?m|sum|сум|so'mga|UZS)|[$€]\s?\d|\d+[.,]?\d*\s*(dollar|доллар|USD|USDT))/i;

/** O'zbek matnida bo'lmasligi kerak bo'lgan apostroflar */
const BAD_APOSTROPHE = /[ʻʼ‘’´`]/;

/**
 * Xavfli maslahat — mahsulot HECH QACHON parol yoki kod so'ramaydi.
 *
 * MUHIM NOZIKLIK: maqolalar aynan shu jumlalarni FIRIBGARLIK NAMUNASI
 * sifatida keltiradi («"Akkauntingizni bering" degan takliflardan
 * ehtiyot bo'ling»). Ya'ni iboraning o'zi hali muammo emas — muammo uni
 * MASLAHAT sifatida berish. Shuning uchun yaqin atrofda ogohlantirish
 * belgisi bo'lsa, tekshiruv o'tkazib yuboriladi va bu HAR DOIM
 * ogohlantirish (`warn`) darajasida qoladi: qaror odamga havola qilinadi,
 * chunki buni ishonchli aniqlaydigan qoida yo'q.
 */
const UNSAFE_RE =
  /(parolingizni\s+(bering|yuboring|kiriting)|SMS\s*kod(ingiz)?ni\s+(bering|yuboring)|akkauntingizni\s+bering|hisobingizga\s+kirish\s+uchun\s+parol)/i;

/** Ogohlantirish konteksti — bu so'zlar bo'lsa, jumla maslahat emas, ogohlik */
const WARNING_CTX =
  /(firibgar|aldov|ehtiyot|xavf|ishonmang|bermang|yo'l qo'ymang|hech qachon|taklif|scam|yo'qotish)/i;

function checkText(where, strings, { uzbek = true } = {}) {
  for (const s of strings) {
    if (PRICE_RE.test(s)) fail(where, `narx yozilgan → "${s.slice(0, 120)}"`);
    if (uzbek && BAD_APOSTROPHE.test(s)) {
      fail(where, `noto'g'ri apostrof (faqat ASCII ') → "${s.slice(0, 90)}"`);
    }
    if (UNSAFE_RE.test(s) && !WARNING_CTX.test(s)) {
      warn(where, `xavfli bo'lishi mumkin, ko'rib chiqing → "${s.slice(0, 140)}"`);
    }
  }
}

function checkMeta(where, { metaTitle, metaDescription }) {
  if (metaTitle && metaTitle.length > 60) {
    warn(where, `metaTitle ${metaTitle.length} belgi (≤60) → "${metaTitle}"`);
  }
  if (metaDescription) {
    const n = metaDescription.length;
    if (n < 130 || n > 165) warn(where, `metaDescription ${n} belgi (140-160 kerak)`);
  }
}

function wordsOf(s) {
  return String(s).trim().split(/\s+/).length;
}

// --------------------------------------------------------- havola bazasi ----

/** Saytda mavjud yo'llar — ichki havolalar shularga tushishi kerak. */
async function knownPaths() {
  const games = (await readFile(path.join(ROOT, "src", "data", "games.ts"), "utf8"))
    .matchAll(/slug:\s*"([a-z0-9-]+)"/g);
  const set = new Set(["/oyinlar", "/blog", "/"]);
  for (const m of games) set.add(`/oyinlar/${m[1]}`);
  // Yozilayotgan va allaqachon yozilgan maqolalar
  if (existsSync(path.join(GEN, "articles"))) {
    for (const f of await readdir(path.join(GEN, "articles"))) {
      if (f.endsWith(".json")) set.add(`/blog/${f.replace(/\.json$/, "")}`);
    }
  }
  if (existsSync(POSTS)) {
    for (const f of await readdir(POSTS)) {
      if (f.endsWith(".ts")) set.add(`/blog/${f.replace(/\.ts$/, "")}`);
    }
  }
  return set;
}

// ---------------------------------------------------------------- yozish ----

const q = (s) => JSON.stringify(s);

function serialiseBlocks(blocks) {
  return blocks
    .map((b) => {
      const parts = [`t: ${q(b.t)}`];
      if (b.id) parts.push(`id: ${q(b.id)}`);
      if (b.text !== undefined) parts.push(`text: ${q(b.text)}`);
      if (b.ordered !== undefined) parts.push(`ordered: ${b.ordered}`);
      if (b.title !== undefined) parts.push(`title: ${q(b.title)}`);
      if (b.tone !== undefined) parts.push(`tone: ${q(b.tone)}`);
      if (b.caption !== undefined) parts.push(`caption: ${q(b.caption)}`);
      if (b.head !== undefined) parts.push(`head: ${JSON.stringify(b.head)}`);
      if (b.rows !== undefined) parts.push(`rows: ${JSON.stringify(b.rows)}`);
      if (b.items !== undefined) parts.push(`items: ${JSON.stringify(b.items)}`);
      return `    { ${parts.join(", ")} }`;
    })
    .join(",\n");
}

function articleModule(a, meta) {
  return `// AVTOMATIK KIRITILGAN — \`npm run ingest\`.
// Manba reja: .plan/articles/${a.slug}.json
// Qo'lda tahrirlash mumkin; keyingi ingest faqat yangi fayllarni qo'shadi.

import type { Article } from "../types";

const article: Article = {
  slug: ${q(a.slug)},
  game: ${meta.game ? q(meta.game) : "null"},
  type: ${q(meta.type)},
  datePublished: ${q(meta.date)},
  dateModified: ${q(meta.date)},
  pillar: ${Boolean(meta.pillar)},
  keywords: ${JSON.stringify(meta.keywords)},
  locales: {
    uz: {
      title: ${q(a.title)},
      metaTitle: ${q(a.metaTitle)},
      metaDescription: ${q(a.metaDescription)},
      excerpt: ${q(a.excerpt)},
      answer: ${q(a.answer)},
      body: [
${serialiseBlocks(a.body)}
      ],
      faq: ${JSON.stringify(a.faq, null, 8).replace(/\n/g, "\n      ")},
    },
  },
};

export default article;
`;
}

// ------------------------------------------------------------------ ishga ---

const DATE = process.env.PUB_DATE || new Date().toISOString().slice(0, 10);

async function ingestArticles() {
  const dir = path.join(GEN, "articles");
  if (!existsSync(dir)) return [];

  const known = await knownPaths();
  // Rejalashtirilgan barcha maqola sluglari — hali yozilmagan bo'lsa ham
  const planned = new Set(
    (await readdir(path.join(ROOT, ".plan", "articles")))
      .filter((f) => f.endsWith(".json") && !f.startsWith("_"))
      .map((f) => f.replace(/\.json$/, "")),
  );
  await mkdir(POSTS, { recursive: true });

  // Yozish KECHIKTIRILADI: barcha tekshiruvlar tugamaguncha bironta fayl
  // ham tegilmaydi. Aks holda muvaffaqiyatsiz tekshiruvdan keyin ham manba
  // qisman o'zgargan bo'lardi va repo nomuvofiq holatda qolardi.
  const pending = [];
  for (const file of (await readdir(dir)).filter((f) => f.endsWith(".json"))) {
    const a = JSON.parse(await readFile(path.join(dir, file), "utf8"));
    const where = `maqola ${a.slug}`;

    // Reja fayli — kategoriya, kalit so'z va o'yin shundan olinadi
    const briefPath = path.join(ROOT, ".plan", "articles", `${a.slug}.json`);
    if (!existsSync(briefPath)) {
      fail(where, "reja fayli topilmadi (.plan/articles/)");
      continue;
    }
    const brief = JSON.parse(await readFile(briefPath, "utf8"));

    checkText(where, allStrings(a));
    checkMeta(where, a);

    const aw = wordsOf(a.answer);
    if (aw < 35 || aw > 75) warn(where, `answer ${aw} so'z (40-60 kerak)`);

    // H2 `id` — mundarija havolalari shunga bog'liq
    const h2 = a.body.filter((b) => b.t === "h2");
    if (h2.length < 4) fail(where, `atigi ${h2.length} ta H2 (kamida 4)`);
    const ids = new Set();
    for (const h of h2) {
      if (!h.id) fail(where, `H2 da id yo'q → "${h.text}"`);
      else if (!/^[a-z0-9-]+$/.test(h.id)) fail(where, `H2 id ASCII kebab emas → "${h.id}"`);
      else if (ids.has(h.id)) fail(where, `H2 id takrorlangan → "${h.id}"`);
      ids.add(h.id);
    }

    // Ichki havolalar mavjud sahifaga tushsinmi
    const hrefs = [
      ...allStrings(a).flatMap((s) => [...s.matchAll(/href="(\/[^"#]*)"?/g)].map((m) => m[1])),
      ...a.body.filter((b) => b.t === "links").flatMap((b) => (b.items || []).map((i) => i.href)),
    ];
    for (const h of hrefs) {
      const clean = String(h).split("#")[0].replace(/\/$/, "") || "/";
      if (known.has(clean)) continue;
      // Rejada bor, lekin hali yozilmagan maqola — vaqtinchalik holat.
      // Keyingi to'lqin kelganda o'zi hal bo'ladi, shuning uchun bu
      // ogohlantirish. Deploy oldidan `npm run links` o'lik havola
      // qolmaganini tekshiradi.
      const slug = clean.startsWith("/blog/") ? clean.slice(6) : null;
      if (slug && planned.has(slug)) warn(where, `havola hali yozilmagan maqolaga → ${h}`);
      else fail(where, `ichki havola rejada ham yo'q → ${h}`);
    }
    if (!hrefs.some((h) => String(h).startsWith("/oyinlar/"))) {
      warn(where, "o'yin sahifasiga havola yo'q");
    }

    const words = allStrings(a.body).join(" ").split(/\s+/).length;
    if (words < 900) warn(where, `${words} so'z (1100-1800 mo'ljallangan)`);

    pending.push([
      path.join(POSTS, `${a.slug}.ts`),
      articleModule(a, {
        game: brief.game,
        type: brief.type,
        date: DATE,
        pillar: brief.publishRank <= 5,
        keywords: [brief.spec.primaryKeyword, ...(brief.spec.secondaryKeywords || [])].slice(0, 8),
      }),
    ]);
  }
  return pending;
}

async function ingestGameCopy() {
  const dir = path.join(GEN, "games");
  if (!existsSync(dir)) return { pending: [], count: 0 };

  const out = {};
  let n = 0;
  for (const file of (await readdir(dir)).filter((f) => f.endsWith(".json"))) {
    const g = JSON.parse(await readFile(path.join(dir, file), "utf8"));
    for (const [locale, copy] of Object.entries(g)) {
      if (locale === "slug" || !copy || typeof copy !== "object") continue;
      const where = `o'yin ${g.slug}/${locale}`;
      checkText(where, allStrings(copy), { uzbek: locale === "uz" });
      checkMeta(where, copy);
      (out[g.slug] ??= {})[locale] = copy;
      n++;
    }
  }
  if (!n) return { pending: [], count: 0 };

  const body = Object.entries(out)
    .map(([slug, byLocale]) => `  ${q(slug)}: ${JSON.stringify(byLocale, null, 2).replace(/\n/g, "\n  ")},`)
    .join("\n");

  const target = path.join(ROOT, "src", "data", "gameContent.ts");
  const file = await readFile(target, "utf8");
  const marker = "export const GAME_CONTENT: GameContentMap = {};";
  const replacement = `export const GAME_CONTENT: GameContentMap = {\n${body}\n};`;
  const next = file.includes(marker)
    ? file.replace(marker, replacement)
    : file.replace(/export const GAME_CONTENT: GameContentMap = \{[\s\S]*?\n\};/, replacement);
  return { pending: [[target, next]], count: n };
}

const articleWrites = await ingestArticles();
const gameResult = await ingestGameCopy();

if (warnings.length) {
  console.log(`\n⚠️  ${warnings.length} ta ogohlantirish:`);
  warnings.forEach((w) => console.log(`   ${w}`));
}

if (problems.length) {
  console.log(`\n❌ ${problems.length} ta muammo:`);
  problems.forEach((p) => console.log(`   ${p}`));
  if (!FORCE) {
    console.log("\nHech narsa kiritilmadi. Tuzating yoki `--force` bilan ishga tushiring.");
    process.exit(1);
  }
}

// Tekshiruvlar o'tdi — endi yozamiz
for (const [file, contents] of [...articleWrites, ...gameResult.pending]) {
  await writeFile(file, contents);
}

console.log(`\n✓ ${articleWrites.length} ta maqola, ${gameResult.count} ta o'yin matni kiritildi`);
