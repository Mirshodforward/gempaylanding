/**
 * Saytning yagona haqiqat manbasi — domen, havolalar, tillar, tasdiqlash kodlari.
 *
 * MUHIM: `SITE_URL` saytga xizmat qilayotgan host bilan AYNAN bir xil bo'lishi
 * shart. Nomuvofiqlik sitemapdagi har bir manzilni redirect'ga aylantiradi va
 * Google ularni «Page with redirect» deb indeksdan chiqaradi.
 */
export const SITE_URL = "https://gempay.uz";

/** Telegram bot / Mini App. Bot username o'zgarsa — faqat shu qator. */
export const BOT_USERNAME = "Gempayuz_bot";
export const BOT_URL = `https://t.me/${BOT_USERNAME}`;

/** Qo'llab-quvvatlash — StarsPaymee ekotizimi bilan umumiy. */
export const SUPPORT_URL = "https://t.me/StarsPaymeeSupport";

/** Ekotizimdagi qardosh loyiha (Telegram Stars / Premium / Gift). */
export const STARSPAYMEE_URL = "https://starstg.uz";
export const STARSPAYMEE_BOT_URL = "https://t.me/StarsPaymee_bot";

/** Developer API + Swagger. */
export const API_URL = "https://api.gempay.uz";
export const DOCS_URL = `${API_URL}/docs`;

/**
 * O'yin sahifasidan botga o'tish havolasi.
 *
 * `start` payload ATRIBUTSIYA uchun — bot uni hozircha marshrutlashda
 * ishlatmaydi (`modules/multiBot/gampayBot.js` har qanday /start ga bir xil
 * «Ilovani ochish» tugmasini beradi). Botga marshrutlash qo'shilsa, landing
 * tomonda o'zgartirish kerak bo'lmaydi — kod allaqachon yuboriladi.
 */
export function botLinkFor(gameCode?: string): string {
  return gameCode ? `${BOT_URL}?start=g_${gameCode}` : BOT_URL;
}

// ---------------------------------------------------------------- tillar ----

export const LOCALES = ["uz", "ru", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "uz";

/** `hreflang` va `og:locale` uchun to'liq kodlar. */
export const LOCALE_TAG: Record<Locale, string> = {
  uz: "uz-UZ",
  ru: "ru-RU",
  en: "en-US",
};

export const LOCALE_OG: Record<Locale, string> = {
  uz: "uz_UZ",
  ru: "ru_RU",
  en: "en_US",
};

export const LOCALE_LABEL: Record<Locale, string> = {
  uz: "O'zbekcha",
  ru: "Русский",
  en: "English",
};

/**
 * Til prefiksi. Standart til (uz) ildizda turadi — `/`, `/oyinlar/pubg-mobile`.
 * Qolganlari prefiks oladi — `/ru`, `/ru/oyinlar/pubg-mobile`.
 */
export function localePath(locale: Locale, path = ""): string {
  const clean = path.replace(/^\/+/, "").replace(/\/+$/, "");
  const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
  return clean ? `${prefix}/${clean}` : prefix || "/";
}

/**
 * To'liq kanonik manzil (trailing slash YO'Q — astro.config bilan bir xil).
 *
 * Bosh sahifa `https://gempay.uz` — slashSIZ. Bu MUHIM: canonical bir
 * shaklda, hreflang boshqa shaklda yozilsa (`/` bor/yo'q), Google juftlikni
 * «tasdiqlanmagan» deb hisoblaydi va ko'p tilli klaster butunlay buziladi.
 * Shuning uchun ikkalasi ham AYNAN shu funksiyadan o'tadi.
 */
export function absoluteUrl(path: string): string {
  const clean = String(path).replace(/^\/+/, "").replace(/\/+$/, "");
  return clean ? `${SITE_URL}/${clean}` : SITE_URL;
}

// --------------------------------------------------------- tasdiqlashlar ----

/**
 * Qidiruv panellari uchun tasdiqlash kodlari. Har bir panel «HTML tag» usulini
 * bersa, faqat `content="..."` qiymatini qo'ying. Bo'sh qiymat uchun meta-teg
 * umuman chiqmaydi.
 *
 * - google:  Search Console → Settings → Ownership verification → HTML tag
 * - yandex:  Yandex Webmaster → Индексирование → Мета-тег
 * - bing:    Bing Webmaster Tools → HTML Meta Tag (msvalidate.01)
 */
export const VERIFICATION = {
  google: "",
  yandex: "",
  bing: "",
} as const;

/**
 * IndexNow kaliti — Bing/Yandex ga yangi sahifani soniyalarda bildiradi.
 * Kalit yaratilgach: shu yerga yozing, `public/<kalit>.txt` fayl ichida ham
 * aynan shu satr turishi kerak (`npm run indexnow` shuni tekshiradi).
 */
export const INDEXNOW_KEY = "";

// ------------------------------------------------------------- tashkilot ----

export const ORG = {
  name: "GemPay",
  legalName: "GemPay",
  /** Xizmat qamrovi — JSON-LD `areaServed` va lokal SEO uchun. */
  country: "UZ",
  countryName: "O'zbekiston",
  /** Qabul qilinadigan to'lov usullari — JSON-LD va UI bitta ro'yxatdan oladi. */
  paymentMethods: ["UzCard", "HUMO", "Click", "Payme", "Paynet"],
  currency: "UZS",
  founded: "2025",
  sameAs: [BOT_URL, STARSPAYMEE_URL, STARSPAYMEE_BOT_URL],
} as const;
