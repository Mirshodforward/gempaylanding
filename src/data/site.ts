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

// ------------------------------------------------------------------ to'lov ----

/**
 * To'lov usulining turi.
 *
 * Bu maydon shunchaki yorliq emas — undan HUQUQIY matn oziqlanadi. Xalqaro
 * to'lov tizimlari (МПС) qoidasiga ko'ra saytda ularning belgilari va 3-D
 * Secure haqidagi ma'lumot turishi shart; mahalliy kartalar OTP bilan,
 * hamyonlar esa o'z ilovasidagi tasdiq bilan ishlaydi. `/tolov-xavfsizligi`
 * sahifasi qaysi bo'limni chiqarishni AYNAN shu maydonga qarab hal qiladi.
 */
export type PaymentKind = "card-local" | "card-intl" | "wallet";

export type PaymentMethod = {
  /** `public/pay/<id>.svg` fayl nomi bilan bir xil */
  id: string;
  name: string;
  kind: PaymentKind;
};

/**
 * Qabul qilinadigan to'lov usullari — YAGONA ro'yxat.
 *
 * Bu yerdan to'rt joy oziqlanadi: bosh sahifadagi belgilar qatori, o'yin
 * sahifasidagi «To'lov» qatori, JSON-LD `acceptedPaymentMethod` va
 * `/tolov-va-qaytarish` sahifasi. Ro'yxatni faqat shu yerda o'zgartiring —
 * qolgan hamma joy ergashadi.
 *
 * TARTIB ataylab: avval kartalar (ular pul so'roviga javob beradi), keyin
 * hamyonlar. Xalqaro kartalar mahalliylardan keyin turadi, chunki asosiy
 * auditoriya O'zbekistonda.
 */
export const PAYMENT_METHODS: readonly PaymentMethod[] = [
  { id: "uzcard", name: "UzCard", kind: "card-local" },
  { id: "humo", name: "HUMO", kind: "card-local" },
  { id: "visa", name: "Visa", kind: "card-intl" },
  { id: "mastercard", name: "Mastercard", kind: "card-intl" },
  { id: "click", name: "Click", kind: "wallet" },
  { id: "payme", name: "Payme", kind: "wallet" },
  { id: "paynet", name: "Paynet", kind: "wallet" },
] as const;

export const cardMethods = PAYMENT_METHODS.filter((m) => m.kind !== "wallet");
export const localCards = PAYMENT_METHODS.filter((m) => m.kind === "card-local");
export const intlCards = PAYMENT_METHODS.filter((m) => m.kind === "card-intl");
export const walletMethods = PAYMENT_METHODS.filter((m) => m.kind === "wallet");

/** Xalqaro karta qabul qilinsa — 3-D Secure bo'limi majburiy bo'ladi. */
export const ACCEPTS_INTL_CARDS = intlCards.length > 0;

// ------------------------------------------------------------- tashkilot ----

export const ORG = {
  name: "GemPay",
  legalName: "GemPay",
  /** Xizmat qamrovi — JSON-LD `areaServed` va lokal SEO uchun. */
  country: "UZ",
  countryName: "O'zbekiston",
  /** Qabul qilinadigan to'lov usullari — JSON-LD va UI bitta ro'yxatdan oladi. */
  paymentMethods: PAYMENT_METHODS.map((m) => m.name),
  currency: "UZS",
  founded: "2025",
  sameAs: [BOT_URL, STARSPAYMEE_URL, STARSPAYMEE_BOT_URL],
} as const;

// --------------------------------------------------------------- rekvizit ----

/**
 * Yuridik shaxs rekvizitlari — ommaviy oferta va aloqa sahifasi shu yerdan
 * oziqlanadi.
 *
 * NEGA BO'SH TURIBDI: bu maydonlarni o'ylab topib bo'lmaydi, ular haqiqiy
 * guvohnomadan ko'chiriladi. To'ldirilmagan maydonni sahifa UMUMAN
 * chiqarmaydi — yolg'on rekvizitdan ko'ra yo'q rekvizit yaxshi. `npm run
 * legal` esa deploy oldidan nimasi yetishmayotganini nomma-nom aytadi.
 *
 * Bank va to'lov tizimlari (МПС) hujjatlarni tekshirganda aynan shu
 * ro'yxatni so'raydi.
 */
export const LEGAL = {
  /** Tashkiliy-huquqiy shakl: «MChJ», «YATT», «Yakka tartibdagi tadbirkor» */
  entityType: "",
  /** Rasmiy to'liq nom — guvohnomadagidek, qo'shtirnoqsiz */
  name: "",
  /** STIR (INN) — 9 raqam */
  inn: "",
  /** Yuridik manzil — viloyat, shahar, ko'cha, uy */
  address: "",
  /** Davlat ro'yxatidan o'tkazilgan sana, `yyyy-mm-dd` */
  registeredOn: "",
  /** Bank rekvizitlari — oferta oxirida ko'rsatiladi */
  bank: { name: "", account: "", mfo: "" },
  /**
   * Ofertaning joriy tahriri, `yyyy-mm-dd`. Matnni o'zgartirsangiz shu
   * sanani ham yangilang: foydalanuvchi qaysi tahrirga rozi bo'lganini
   * shundan biladi, nizoda esa aynan shu sana hal qiladi.
   */
  offerRevision: "2026-09-09",
} as const;

/**
 * Aloqa kanallari.
 *
 * TELEFON MAJBURIY: to'lov tizimlari qoidasiga ko'ra saytda kartadorlar
 * bog'lana oladigan telefon raqami bo'lishi shart. Telegram yetarli emas —
 * bank uni rasmiy kanal deb hisoblamaydi.
 */
export const CONTACT = {
  /** Xalqaro formatda: `+998 71 200 00 00` */
  phone: "",
  /** Umumiy murojaatlar uchun */
  email: "",
  /**
   * To'lov, chek va pul qaytarish bo'yicha alohida quti. Bo'sh bo'lsa
   * sahifa umumiy pochtani ko'rsatadi — ikkita bir xil manzil chiqmaydi.
   */
  billingEmail: "",
  telegram: SUPPORT_URL,
} as const;

/** `tel:` havolasi — bo'shliq, qavs va tirelar olib tashlanadi. */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

/** Pul qaytarish va chek bo'yicha pochta; alohidasi bo'lmasa — umumiysi. */
export const billingEmail = CONTACT.billingEmail || CONTACT.email;

/**
 * Saytni huquqiy jihatdan to'liq qiladigan maydonlar.
 *
 * `npm run legal` shu ro'yxat bo'yicha tekshiradi. Ro'yxat kodda turibdi,
 * skriptda emas — maydon qo'shilsa, tekshiruv o'zi ergashadi.
 */
export const REQUIRED_LEGAL_FIELDS: readonly { path: string; label: string }[] = [
  { path: "LEGAL.entityType", label: "tashkiliy-huquqiy shakl (MChJ / YATT)" },
  { path: "LEGAL.name", label: "rasmiy nom" },
  { path: "LEGAL.inn", label: "STIR (INN)" },
  { path: "LEGAL.address", label: "yuridik manzil" },
  { path: "CONTACT.phone", label: "telefon raqami — МПС talabi" },
  { path: "CONTACT.email", label: "elektron pochta" },
] as const;
