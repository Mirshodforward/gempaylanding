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
 *     Host `SITE_URL` dan keladi — u saytga xizmat qilayotgan host bilan
 *     bir xil bo'lishi SHART (`www`), aks holda har bir `<loc>` redirect
 *     bo'lib qoladi va Google ularni indeksdan chiqaradi.
 *   · Tarjimasi yo'q maqola O'Z tilida sitemapga TUSHMAYDI (`noindex` oladi).
 *   · `lastmod` — haqiqiy o'zgarish sanasi. `new Date()` yozilsa Google
 *     har buildda «hammasi yangilandi» deb ko'radi va `lastmod` ga umuman
 *     ishonishni to'xtatadi.
 */

import type { APIRoute } from "astro";
import { CATALOG } from "../data/games";
import { ANDROID_APP } from "../data/app";
import { isReadyToIndex } from "../data/gameContent";
import { ARTICLES, articlesFor, localesOf } from "../data/blog";
import { LEGAL_DOCS } from "../data/legal";
import { UPDATED as TELEGRAM_UPDATED } from "../data/telegram";
import { LOCALES, DEFAULT_LOCALE, absoluteUrl, localePath, type Locale } from "../data/site";

/**
 * Statik sahifalarning oxirgi JIDDIY o'zgarish sanasi — HAR SAHIFA UCHUN ALOHIDA.
 *
 * NEGA BITTA SANA EMAS: ilgari hammasi uchun bitta `STATIC_LASTMOD`
 * (2026-08-23) turardi. Sentabrda bosh sahifaga ilova chizig'i va to'lov
 * usullari tuzatishi kirdi, sana esa o'zgarmadi — Google uchun «hech narsa
 * o'zgarmagan». Teskarisi ham yomon: bitta sanani yangilasak o'nlab sahifa
 * birdaniga «yangilandi» deb ko'rinadi va `lastmod` ishonchini yo'qotadi.
 *
 * QOIDA: sahifaning MATNI yoki TUZILISHI o'zgarganda shu jadvaldagi sanani
 * yangilang. Sarlavha/futerdagi havola o'zgarishi hisobga olinmaydi — u har
 * sahifada bor, lekin sahifa mazmunini o'zgartirmaydi. Sana manbasi:
 * `git log -1 --format=%cs -- <sahifa fayli>`.
 */
const LASTMOD = {
  /** Bosh sahifa: Telegram Stars/Premium chizig'i qo'shildi */
  home: "2026-10-23",
  /** Katalog hub — `CatalogPage.astro` */
  catalog: "2026-09-12",
  /** Biz haqimizda — `AboutPage.astro` */
  about: "2026-08-24",
  /** O'yin sahifalari — `gameContent.ts` (to'lov usullari tuzatildi) */
  games: "2026-09-12",
  /** Telegram Stars/Premium — narx tekshirilgan sana `telegram.ts` da */
  telegram: TELEGRAM_UPDATED,
} as const;

type Entry = {
  path: string;
  lastmod: string;
  changefreq: "daily" | "weekly" | "monthly";
  priority: number;
  /** Qaysi tillarda mavjud — hreflang juftliklari uchun */
  locales: readonly Locale[];
};

/** Maqolalar orasidagi eng oxirgi tahrir — blog ro'yxati sahifasining `lastmod`i. */
function latestArticleDate(): string {
  return ARTICLES.map((a) => a.dateModified).sort().at(-1) ?? LASTMOD.home;
}

function collect(): Entry[] {
  const out: Entry[] = [
    { path: "", lastmod: LASTMOD.home, changefreq: "weekly", priority: 1.0, locales: LOCALES },
    // Katalog hub — o'ziga xos matni bor va har sahifadan havola oladi
    { path: "oyinlar", lastmod: LASTMOD.catalog, changefreq: "weekly", priority: 0.95, locales: LOCALES },
    // Telegram Stars va Premium — pul sahifalari, katalog bilan bir og'irlikda.
    // Ularning `lastmod`i narx tekshirilgan sana: tarif o'zgarsa sahifa ham
    // o'zgargan bo'ladi, boshqa holda — yo'q.
    { path: "stars", lastmod: LASTMOD.telegram, changefreq: "weekly", priority: 0.95, locales: LOCALES },
    { path: "premium", lastmod: LASTMOD.telegram, changefreq: "weekly", priority: 0.95, locales: LOCALES },
    // Ishonch sahifasi — E-E-A-T signali, har tilda to'liq matni bor
    { path: "haqida", lastmod: LASTMOD.about, changefreq: "monthly", priority: 0.6, locales: LOCALES },
    // Android ilovasi — do'kon sahifasi o'rnini bosadi, shuning uchun
    // ustuvorligi yuqori. `lastmod` reliz sanasidan: ilova yangilanmasa
    // sahifa ham o'zgarmagan bo'ladi.
    { path: "ilova", lastmod: ANDROID_APP.released, changefreq: "monthly", priority: 0.8, locales: LOCALES },
  ];

  // Huquqiy hujjatlar. Ustuvorligi past — ular pul so'roviga javob
  // bermaydi. Lekin indeksda TURISHI kerak: to'lov tizimlari va bank
  // ularni ochiq deb ko'rishi shart, Google esa pul bilan ishlaydigan
  // saytda bunday sahifalar borligini ishonch signali deb oladi.
  //
  // `lastmod` har hujjatning O'Z tahriri sanasidan olinadi — oferta
  // o'zgarganda xavfsizlik sahifasi ham «yangilandi» deb ko'rinmasligi
  // kerak, aks holda `lastmod` ga bo'lgan ishonch yo'qoladi.
  for (const d of LEGAL_DOCS) {
    out.push({
      path: d.slug,
      lastmod: d.updated,
      changefreq: "monthly",
      priority: 0.5,
      locales: LOCALES,
    });
  }

  // Blog ro'yxati faqat MAQOLASI BOR tillarda. Bo'sh ro'yxat sahifasi
  // `noindex` oladi (`BlogPage.astro`), demak u sitemapda ham turmasligi
  // kerak — aks holda Search Console'da «Submitted URL marked noindex».
  // `lastmod` — eng oxirgi maqola sanasi: ro'yxat aynan o'shanda o'zgargan.
  const blogLocales = LOCALES.filter((l) => articlesFor(l).length > 0);
  if (blogLocales.length) {
    out.push({
      path: "blog",
      lastmod: latestArticleDate(),
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
      lastmod: LASTMOD.games,
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
