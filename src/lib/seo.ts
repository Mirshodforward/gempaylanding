/**
 * SEO / AEO yadrosi — meta, hreflang va JSON-LD quruvchilar.
 *
 * Bu yerdagi funksiyalar SOF: kirish — sahifa ma'lumoti, chiqish — obyekt.
 * Astro komponentlari ularni chaqirib, natijani `<script type="application/ld+json">`
 * ichiga qo'yadi. Shu tufayli sxemalarni testda tekshirish oson va bir xil
 * mantiq ikki joyda takrorlanmaydi.
 *
 * ATAMALAR:
 *   SEO — qidiruv tizimi uchun (Google, Yandex)
 *   AEO — javob mashinalari uchun (ChatGPT, Perplexity, Gemini, Alisa).
 *         AEO'ning asosiy talabi: savolga TO'G'RIDAN-TO'G'RI javob sahifada
 *         ko'rinadigan matn bo'lsin va u tuzilma (FAQPage/HowTo) bilan
 *         belgilansin — shundagina model uni iqtibos qilib oladi.
 */

import {
  SITE_URL,
  ORG,
  BOT_URL,
  SUPPORT_URL,
  absoluteUrl,
  localePath,
  LOCALES,
  DEFAULT_LOCALE,
  type Locale,
} from "../data/site";

// ============================================================== hreflang ====

export type Alternate = { hreflang: string; href: string };

/**
 * Bir sahifaning barcha tillardagi variantlari.
 *
 * `x-default` — qaysi til ham mos kelmasa ko'rsatiladigan sahifa. Uni
 * TASHLAB KETMANG: usiz Google ko'p tilli saytda qaysi variantni xalqaro
 * natijalarda ko'rsatishni o'zi taxmin qiladi va ko'pincha noto'g'ri tanlaydi.
 *
 * @param path tilsiz yo'l — `""` (bosh sahifa), `"oyinlar/pubg-mobile"`
 * @param available faqat shu tillarda tarkib bor (blog tarjimasiz bo'lishi mumkin)
 */
export function alternatesFor(path: string, available: readonly Locale[] = LOCALES): Alternate[] {
  const list: Alternate[] = available.map((l) => ({
    hreflang: l === "uz" ? "uz" : l,
    href: absoluteUrl(localePath(l, path)),
  }));
  const fallback = available.includes(DEFAULT_LOCALE) ? DEFAULT_LOCALE : available[0];
  list.push({ hreflang: "x-default", href: absoluteUrl(localePath(fallback, path)) });
  return list;
}

// ================================================================ JSON-LD ===

/** Har bir sxema `@id` oladi — shunda ular bir-biriga havola qila oladi
 *  va Google ularni bitta korxonaning bog'liq tugunlari deb ko'radi. */
const ID = {
  org: `${SITE_URL}/#organization`,
  site: `${SITE_URL}/#website`,
  service: `${SITE_URL}/#service`,
  logo: `${SITE_URL}/#logo`,
};

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ID.org,
    name: ORG.name,
    legalName: ORG.legalName,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      "@id": ID.logo,
      url: absoluteUrl("/icon-512.png"),
      width: 512,
      height: 512,
      caption: ORG.name,
    },
    image: { "@id": ID.logo },
    foundingDate: ORG.founded,
    areaServed: { "@type": "Country", name: ORG.countryName, identifier: ORG.country },
    sameAs: [...ORG.sameAs],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: SUPPORT_URL,
        availableLanguage: ["uz", "ru", "en"],
        areaServed: ORG.country,
      },
    ],
  };
}

export function websiteSchema(locale: Locale) {
  return {
    "@type": "WebSite",
    "@id": ID.site,
    url: SITE_URL,
    name: ORG.name,
    inLanguage: locale,
    publisher: { "@id": ID.org },
  };
}

/**
 * Asosiy xizmat — «o'yin hisobini to'ldirish». `OfferCatalog` ichida har bir
 * o'yin alohida taklif bo'lib turadi.
 *
 * NARX YOZILMAYDI: `Offer.price` majburiy emas, lekin yozilsa — HAQIQIY va
 * yangi bo'lishi shart. Narximiz USDT kursiga qarab kuniga o'zgaradi, statik
 * saytda esa u eskiradi. Eskirgan narx Merchant/Rich Results'da «mismatch»
 * ogohlantirishi va ishonch yo'qolishiga olib keladi, shuning uchun faqat
 * valyuta va mavjudlik ko'rsatiladi.
 */
export function serviceSchema(
  locale: Locale,
  games: { title: string; slug: string; unit: string }[],
  copy: { name: string; description: string },
) {
  return {
    "@type": "Service",
    "@id": ID.service,
    name: copy.name,
    description: copy.description,
    provider: { "@id": ID.org },
    serviceType: "Game currency top-up",
    areaServed: { "@type": "Country", name: ORG.countryName, identifier: ORG.country },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: BOT_URL,
      availableLanguage: ["uz", "ru", "en"],
    },
    inLanguage: locale,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: copy.name,
      itemListElement: games.map((g, i) => ({
        "@type": "Offer",
        position: i + 1,
        url: absoluteUrl(localePath(locale, `oyinlar/${g.slug}`)),
        priceCurrency: ORG.currency,
        availability: "https://schema.org/InStock",
        acceptedPaymentMethod: ORG.paymentMethods.map((m) => ({
          "@type": "PaymentMethod",
          name: m,
        })),
        itemOffered: {
          "@type": "Service",
          name: `${g.title} — ${g.unit}`,
          serviceType: "Game currency top-up",
        },
      })),
    },
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(locale: Locale, crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(localePath(locale, c.path)),
    })),
  };
}

export type Faq = { q: string; a: string };

/**
 * FAQPage — AEO'ning eng kuchli quroli. Google «People also ask» va
 * ChatGPT/Perplexity aynan shu bloklardan javob oladi.
 *
 * SHART: bu yerdagi har bir savol-javob sahifaning O'ZIDA ham ko'rinishi
 * kerak. Faqat JSON-LD'da bo'lgan FAQ — «structured data mismatch» va
 * qo'lda jarima sababi.
 */
export function faqSchema(items: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export type HowToStep = { name: string; text: string };

export function howToSchema(opts: {
  name: string;
  description: string;
  steps: HowToStep[];
  totalMinutes?: number;
  image?: string;
}) {
  return {
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    ...(opts.image ? { image: absoluteUrl(opts.image) } : {}),
    // ISO 8601 davomiylik — `PT2M` = 2 daqiqa
    ...(opts.totalMinutes ? { totalTime: `PT${opts.totalMinutes}M` } : {}),
    tool: { "@type": "HowToTool", name: "Telegram" },
    supply: ORG.paymentMethods.map((m) => ({ "@type": "HowToSupply", name: m })),
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function blogPostingSchema(opts: {
  locale: Locale;
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  image: string;
  keywords: string[];
  wordCount?: number;
}) {
  const url = absoluteUrl(localePath(opts.locale, `blog/${opts.slug}`));
  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: opts.title.slice(0, 110),
    description: opts.description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    inLanguage: opts.locale,
    image: [absoluteUrl(opts.image)],
    keywords: opts.keywords.join(", "),
    ...(opts.wordCount ? { wordCount: opts.wordCount } : {}),
    author: { "@id": ID.org },
    publisher: { "@id": ID.org },
    isPartOf: { "@id": ID.site },
  };
}

/** Bosh sahifadagi o'yin kataki — `ItemList` bo'lib qidiruvda karusel bo'la oladi. */
export function itemListSchema(
  locale: Locale,
  games: { title: string; slug: string }[],
  name: string,
) {
  return {
    "@type": "ItemList",
    name,
    numberOfItems: games.length,
    itemListElement: games.map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: g.title,
      url: absoluteUrl(localePath(locale, `oyinlar/${g.slug}`)),
    })),
  };
}

/**
 * Barcha sxemalarni BITTA `@graph` ga yig'adi.
 *
 * Nega bitta: sahifada 5 ta alohida `<script>` bo'lsa, ular orasidagi
 * `@id` havolalari ishlashiga kafolat yo'q. `@graph` esa Google uchun aniq
 * signal — bularning hammasi bir sahifaning bog'liq tugunlari.
 */
export function graph(...nodes: (object | null | undefined | false)[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.filter(Boolean),
  };
}
