/**
 * Blog reyestri — barcha maqolalar shu yerdan yig'iladi.
 *
 * Har maqola `posts/<slug>.ts` da alohida fayl bo'lib turadi va standart
 * eksport sifatida `Article` beradi. `import.meta.glob` ularni build vaqtida
 * avtomatik yig'adi, ya'ni yangi maqola qo'shish uchun shu faylni
 * TAHRIRLASH SHART EMAS — fayl qo'shildi, tamom.
 */

import type { Article, ArticleContent } from "./types";
import { readingMinutes } from "./types";
import type { Locale } from "../site";

const modules = import.meta.glob<{ default: Article }>("./posts/*.ts", { eager: true });

/** Barcha maqolalar — yangi chiqqani birinchi. */
export const ARTICLES: Article[] = Object.values(modules)
  .map((m) => m.default)
  .filter(Boolean)
  .sort((a, b) => (a.dateModified < b.dateModified ? 1 : -1));

export function articleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

/**
 * Shu tilda HAQIQIY tarkifi bor maqolalar.
 *
 * MUHIM: tarjimasi yo'q maqola ro'yxatda ham, sitemapda ham chiqmaydi va
 * `noindex` oladi. Aks holda uch tilda bir xil o'zbekcha matn turgan uchta
 * URL paydo bo'lardi — bu klassik dublikat kontent va butun domenning
 * ishonchini tushiradi.
 */
export function articlesFor(locale: Locale): Article[] {
  return ARTICLES.filter((a) => Boolean(a.locales[locale]));
}

export function contentFor(article: Article, locale: Locale): ArticleContent | null {
  return article.locales[locale] ?? null;
}

/** Maqola qaysi tillarda mavjud — hreflang uchun. */
export function localesOf(article: Article): Locale[] {
  return (Object.keys(article.locales) as Locale[]).filter((l) => Boolean(article.locales[l]));
}

/** Bir o'yinga tegishli maqolalar — o'yin sahifasidagi «Foydali maqolalar». */
export function articlesForGame(gameSlug: string, locale: Locale): Article[] {
  return articlesFor(locale).filter((a) => a.game === gameSlug);
}

/**
 * O'xshash maqolalar — avval shu o'yinning boshqa maqolalari, keyin
 * kalit so'zi kesishganlari. Ichki havolalar SEO'da og'irlik uzatadi,
 * shuning uchun har maqolada kamida uchtasi bo'lishi kerak.
 */
export function relatedArticles(article: Article, locale: Locale, limit = 4): Article[] {
  const pool = articlesFor(locale).filter((a) => a.slug !== article.slug);
  const kw = new Set(article.keywords);

  const scored = pool.map((a) => {
    let score = 0;
    if (a.game && a.game === article.game) score += 10;
    score += a.keywords.filter((k) => kw.has(k)).length * 2;
    if (a.pillar) score += 1;
    return { a, score };
  });

  return scored
    .sort((x, y) => y.score - x.score)
    .slice(0, limit)
    .map((s) => s.a);
}

export function minutesOf(article: Article, locale: Locale): number {
  const c = article.locales[locale];
  return c ? readingMinutes(c) : 1;
}
