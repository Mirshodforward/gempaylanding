/**
 * Sitemap — qo'lda quriladi, `@astrojs/sitemap` emas.
 *
 * NEGA: bizga har URL uchun ALOHIDA `priority` va `lastmod` kerak (pul
 * sahifalari, pillar maqolalar va oddiy maqolalar bir xil og'irlikda emas),
 * shuningdek har yozuv ichida `xhtml:link` hreflang juftliklari turishi
 * kerak. Integratsiya bularning ikkalasini ham yetarlicha nozik
 * boshqarmaydi.
 *
 * QOIDALAR:
 *   · Faqat 200 qaytaradigan, indekslanadigan, kanonik URL'lar kiradi.
 *   · Tarjimasi yo'q maqola O'Z tilida sitemapga TUSHMAYDI (`noindex` oladi).
 *   · `lastmod` — haqiqiy o'zgarish sanasi. `new Date()` yozilsa Google
 *     har buildda «hammasi yangilandi» deb ko'radi va `lastmod` ga umuman
 *     ishonishni to'xtatadi.
 */

import type { APIRoute } from "astro";
import { CATALOG } from "../data/games";
import { isReadyToIndex } from "../data/gameContent";
import { ARTICLES, articlesFor, localesOf } from "../data/blog";
import { LOCALES, DEFAULT_LOCALE, absoluteUrl, localePath, type Locale } from "../data/site";

/** Statik sahifalarning oxirgi jiddiy o'zgarishi — QO'LDA boshqariladi. */
const STATIC_LASTMOD = "2026-08-23";

type Entry = {
  path: string;
  lastmod: string;
  changefreq: "daily" | "weekly" | "monthly";
  priority: number;
  /** Qaysi tillarda mavjud — hreflang juftliklari uchun */
  locales: readonly Locale[];
};

function collect(): Entry[] {
  const out: Entry[] = [
    { path: "", lastmod: STATIC_LASTMOD, changefreq: "weekly", priority: 1.0, locales: LOCALES },
    // Katalog hub — o'ziga xos matni bor va har sahifadan havola oladi
    { path: "oyinlar", lastmod: STATIC_LASTMOD, changefreq: "weekly", priority: 0.95, locales: LOCALES },
  ];

  // Blog ro'yxati faqat MAQOLASI BOR tillarda. Bo'sh ro'yxat sahifasi
  // `noindex` oladi (`BlogPage.astro`), demak u sitemapda ham turmasligi
  // kerak — aks holda Search Console'da «Submitted URL marked noindex».
  const blogLocales = LOCALES.filter((l) => articlesFor(l).length > 0);
  if (blogLocales.length) {
    out.push({
      path: "blog",
      lastmod: STATIC_LASTMOD,
      changefreq: "daily",
      priority: 0.8,
      locales: blogLocales,
    });
  }

  // Pul sahifalari — konversiya shu yerda bo'ladi, eng yuqori ustuvorlik.
  //
  // O'ziga xos matni yo'q sahifa `noindex` oladi (`GamePage.astro`), shuning
  // uchun u sitemapga ham TUSHMAYDI. Sitemapda `noindex` sahifa turishi —
  // Search Console'da «Submitted URL marked noindex» xatosi va butun
  // sitemapga bo'lgan ishonchning pasayishi demak.
  for (const g of CATALOG) {
    const langs = LOCALES.filter((l) => isReadyToIndex(g.slug, l));
    if (!langs.length) continue;
    out.push({
      path: `oyinlar/${g.slug}`,
      lastmod: STATIC_LASTMOD,
      changefreq: "weekly",
      priority: 0.9,
      locales: langs,
    });
  }

  for (const a of ARTICLES) {
    const langs = localesOf(a);
    if (!langs.length) continue;
    out.push({
      path: `blog/${a.slug}`,
      lastmod: a.dateModified,
      changefreq: a.pillar ? "weekly" : "monthly",
      priority: a.pillar ? 0.85 : 0.7,
      locales: langs,
    });
  }

  return out;
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const GET: APIRoute = () => {
  const entries = collect();
  const urls: string[] = [];

  for (const e of entries) {
    // Har til uchun alohida `<url>`, lekin ichidagi hreflang ro'yxati bir xil —
    // shu tuzilishni Google talab qiladi (o'zaro tasdiqlangan juftliklar).
    const links = [
      ...e.locales.map(
        (l) =>
          `<xhtml:link rel="alternate" hreflang="${l}" href="${esc(absoluteUrl(localePath(l, e.path)))}"/>`,
      ),
      `<xhtml:link rel="alternate" hreflang="x-default" href="${esc(
        absoluteUrl(localePath(e.locales.includes(DEFAULT_LOCALE) ? DEFAULT_LOCALE : e.locales[0], e.path)),
      )}"/>`,
    ].join("");

    for (const l of e.locales) {
      urls.push(
        `<url>` +
          `<loc>${esc(absoluteUrl(localePath(l, e.path)))}</loc>` +
          `<lastmod>${e.lastmod}</lastmod>` +
          `<changefreq>${e.changefreq}</changefreq>` +
          // Standart bo'lmagan til biroz pastroq — kanonik variant uz
          `<priority>${(l === DEFAULT_LOCALE ? e.priority : e.priority - 0.05).toFixed(2)}</priority>` +
          links +
          `</url>`,
      );
    }
  }

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ` +
    `xmlns:xhtml="http://www.w3.org/1999/xhtml">` +
    urls.join("") +
    `</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
