/**
 * Telegram Stars va Premium — narx va chegaralar, YAGONA manba.
 *
 * NEGA BU YERDA NARX BOR, O'YINLARDA ESA YO'Q: o'yin valyutasi provayder
 * katalogidan jonli keladi va USDT kursiga bog'liq — uni saytga yozib
 * bo'lmaydi (README). Stars va Premium esa bot `.env` ida QAT'IY tarifda
 * turadi va oylab o'zgarmaydi. Raqamni yashirish bu yerda foyda emas,
 * zarar: «telegram stars narxi» so'rovi aynan raqamni so'raydi.
 *
 * MANBA va TEKSHIRUV (2026-10-22, qayta 2026-10-23 — narx ikkala kunda bir xil, jonli API):
 *   GET https://starspaymee.starstg.uz/api/usdt-stars/price/100
 *       → price 22 000 (ya'ni 220 so'm/dona)
 *   GET https://starspaymee.starstg.uz/api/usdt-premium/price/{3,6,12}
 *       → 159 900 / 216 000 / 388 000
 *   Bot kodi: `modules/usdtStars/orderCreate.js` — 50..10 000 dona,
 *   `modules/usdtPremium/price.js` — faqat 3, 6, 12 oy.
 *   Onlayn to'lov (Click, Uzum Bank) dona narxi `payment_methods.
 *   stars_unit_price = 240` dan keladi (`modules/paymentMethods/pricing.js`).
 *
 * TARIF O'ZGARSA — faqat shu faylni yangilang va `UPDATED` ni bugungi
 * sanaga qo'ying: sahifa, jadval, JSON-LD, maqolalar va sitemap `lastmod`
 * shundan oziqlanadi. Matnga qo'lda raqam YOZMANG — `som()` ishlating.
 *
 * MINI APP'DA QAYERDA: GemPay ilovasining «Telegram» bo'limi (Stars,
 * Premium, Gift plitkalari) StarsPaymee sahifalariga ochiladi — o'yin
 * bo'limi bilan bitta ilova, bitta qo'llab-quvvatlash.
 */

import type { Locale } from "./site";

/** Shu fayldagi raqamlar oxirgi marta tekshirilgan sana — sitemap `lastmod`. */
export const UPDATED = "2026-10-23";

// ------------------------------------------------------------------ Stars --

/** Karta o'tkazmasi (UzCard/HUMO) yoki bot balansidan — dona narxi, so'm. */
export const STARS_UNIT_CARD = 220;
/** Onlayn to'lov (Click, Uzum Bank) — shlyuz komissiyasi qo'shilgan dona narxi. */
export const STARS_UNIT_ONLINE = 240;
/** Bir buyurtmadagi chegaralar — bot `orderCreate.js` bilan bir xil. */
export const STARS_MIN = 50;
export const STARS_MAX = 10_000;

/** Jadvaldagi tayyor paketlar. Ilovada istalgan son kiritiladi. */
export const STARS_PACKS = [50, 100, 150, 250, 500, 1000, 2500, 5000, 10_000] as const;
/** «Mashhur» belgisi — eng ko'p olinadigan miqdor. */
export const STARS_POPULAR = 100;

export const starsCardPrice = (n: number) => n * STARS_UNIT_CARD;
export const starsOnlinePrice = (n: number) => n * STARS_UNIT_ONLINE;

// ---------------------------------------------------------------- Premium --

export type PremiumPlan = { months: 3 | 6 | 12; price: number };

/**
 * Narx BARCHA to'lov usulida bir xil — Premium'ga shlyuz ustamasi
 * qo'shilmaydi (`FLAT_PRICED_TYPES`, bot `pricing.js`).
 * 1 oylik tarif GemPay ilovasidagi oqimda YO'Q (bot faqat 3/6/12 qabul qiladi).
 */
export const PREMIUM_PLANS: readonly PremiumPlan[] = [
  { months: 3, price: 159_900 },
  { months: 6, price: 216_000 },
  { months: 12, price: 388_000 },
];

export const premiumPerMonth = (p: PremiumPlan) => Math.round(p.price / p.months);

/** Oyiga eng arzon tarif — jadvalda «eng foydali» belgisi. */
export const PREMIUM_BEST: PremiumPlan = PREMIUM_PLANS.reduce((a, b) =>
  premiumPerMonth(b) < premiumPerMonth(a) ? b : a,
);

// -------------------------------------------------------------- format ----

/** `22000` → `22 000` — minglik ajratgich oddiy probel. */
export function num(n: number): string {
  return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

/** `22000` → «22 000 so'm» / «22 000 сум» / «22,000 UZS». */
export function som(n: number, locale: Locale): string {
  if (locale === "ru") return `${num(n)} сум`;
  if (locale === "en") return `${num(n).replace(/ /g, ",")} UZS`;
  return `${num(n)} so'm`;
}

/** Taxminiy oylik narx — «~32 300 so'm» ko'rinishida (yuzlikkacha yaxlitlab). */
export function somApprox(n: number, locale: Locale): string {
  return `~${som(Math.round(n / 100) * 100, locale)}`;
}
