/**
 * Blog tarkib modeli.
 *
 * NEGA MDX EMAS, BLOK MASSIVI: 45 maqola × 3 til = 135 ta matn. Ularni
 * qo'lda yozilgan MDX'da saqlash uch muammo tug'diradi:
 *   1. Uslub tarqaydi — har maqola o'z jadvalini o'zicha chizadi;
 *   2. SEO'ni tekshirib bo'lmaydi — `metaTitle` uzunligini yoki H2
 *      tuzilishini skript bilan nazorat qilish qiyin;
 *   3. Sxema (JSON-LD) tarkib bilan qo'lda sinxronlanadi va tez uziladi.
 *
 * Blok massivi esa TypeScript bilan tekshiriladi, bitta komponent bilan
 * chiziladi va `HowTo`/`FAQPage` sxemasi to'g'ridan-to'g'ri shu bloklardan
 * yasaladi — ya'ni ko'rinadigan matn bilan sxema HECH QACHON ajralmaydi.
 */

import type { Locale } from "../site";

/** Maqola janri — kategoriya yorlig'i va sxema turini tanlaydi. */
export type ArticleType = "howto" | "comparison" | "info" | "problem" | "trust";

// ------------------------------------------------------------------ blok ---

export type Block =
  /** H2 — mundarija shu sarlavhalardan yasaladi, `id` majburiy */
  | { t: "h2"; id: string; text: string }
  | { t: "h3"; text: string }
  | { t: "p"; text: string }
  /** Oddiy ro'yxat. `ordered` — raqamli */
  | { t: "list"; ordered?: boolean; items: string[] }
  /** Bosqichlar — `HowTo` sxemasi AYNAN shu blokdan yasaladi */
  | { t: "steps"; items: { title: string; text: string }[] }
  /** Taqqoslash jadvali. `head` — ustun nomlari, `rows` — qatorlar.
   *  Katak `"+"` yoki `"-"` bo'lsa belgi sifatida chiziladi. */
  | { t: "table"; head: string[]; rows: string[][]; caption?: string }
  /** Muhim faktlar — qisqa «kalit-qiymat» kartochkalari */
  | { t: "facts"; items: { k: string; v: string }[] }
  /** Diqqat bloki. `tone` — ohang. */
  | { t: "note"; tone: "info" | "warn" | "good"; title?: string; text: string }
  /** Matn ichidagi chaqiriq — botga havola */
  | { t: "cta"; text: string }
  /** Ichki havola bloki — boshqa maqolaga yoki o'yin sahifasiga */
  | { t: "links"; title: string; items: { label: string; href: string }[] };

// --------------------------------------------------------------- maqola ----

export type FaqItem = { q: string; a: string };

/** Bir tildagi to'liq tarkib. */
export type ArticleContent = {
  /** H1 va ro'yxat kartochkasi sarlavhasi */
  title: string;
  /** `<title>` — ≤60 belgi, kalit so'z oldinda */
  metaTitle: string;
  /** Meta description — 140-160 belgi */
  metaDescription: string;
  /** Ro'yxat kartochkasidagi qisqa tavsif */
  excerpt: string;
  /** AEO javob bloki — 40-60 so'z, mustaqil tushunarli */
  answer: string;
  body: Block[];
  faq: FaqItem[];
};

export type Article = {
  slug: string;
  /** Qaysi o'yinga tegishli — `games.ts` dagi `slug`. Umumiy maqolada `null`. */
  game: string | null;
  type: ArticleType;
  /** ISO yyyy-mm-dd */
  datePublished: string;
  dateModified: string;
  keywords: string[];
  /** Sitemap ustuvorligi: `pillar` — asosiy pul so'rovi */
  pillar?: boolean;
  /** Faqat shu tillarda tarkib bor. Yo'q til `noindex` oladi. */
  locales: Partial<Record<Locale, ArticleContent>>;
};

// ------------------------------------------------------------ yordamchi ----

/** Taxminiy o'qish vaqti — 180 so'z/daqiqa (o'zbek/rus matni uchun realroq). */
export function readingMinutes(content: ArticleContent): number {
  const text = [
    content.answer,
    ...content.body.flatMap(blockText),
    ...content.faq.flatMap((f) => [f.q, f.a]),
  ].join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).length / 180));
}

/** `wordCount` sxemasi va o'qish vaqti uchun — blokdan sof matn ajratadi. */
export function blockText(b: Block): string[] {
  switch (b.t) {
    case "h2":
    case "h3":
    case "p":
      return [b.text];
    case "list":
      return b.items;
    case "steps":
      return b.items.flatMap((s) => [s.title, s.text]);
    case "table":
      return [...b.head, ...b.rows.flat(), ...(b.caption ? [b.caption] : [])];
    case "facts":
      return b.items.flatMap((f) => [f.k, f.v]);
    case "note":
      return [...(b.title ? [b.title] : []), b.text];
    case "cta":
      return [b.text];
    case "links":
      return [b.title, ...b.items.map((i) => i.label)];
  }
}

export function wordCount(content: ArticleContent): number {
  return [content.answer, ...content.body.flatMap(blockText)].join(" ").split(/\s+/).length;
}

/** Mundarija — `h2` bloklaridan. */
export function toc(content: ArticleContent): { id: string; text: string }[] {
  return content.body.filter((b): b is Extract<Block, { t: "h2" }> => b.t === "h2").map((b) => ({
    id: b.id,
    text: b.text,
  }));
}

/** `HowTo` sxemasi uchun bosqichlar — birinchi `steps` blokidan. */
export function stepsOf(content: ArticleContent): { name: string; text: string }[] | null {
  const s = content.body.find((b): b is Extract<Block, { t: "steps" }> => b.t === "steps");
  return s ? s.items.map((i) => ({ name: i.title, text: i.text })) : null;
}
