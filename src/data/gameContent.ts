/**
 * O'yin sahifalarining O'ZIGA XOS matnlari.
 *
 * NEGA ALOHIDA FAYL: `games.ts` — texnik ma'lumot (kod, rang, ID yorlig'i),
 * bu yerda esa MATN. Ikkalasini aralashtirsak, bitta jumlani tahrirlash
 * uchun katalog tuzilishiga tegishga to'g'ri kelardi.
 *
 * NEGA HAR MAYDON QOLIPDAN EMAS, QO'LDA YOZILADI
 * -----------------------------------------------------------------------
 * Dastlab bu sahifalar bitta qolipdan yasalardi: `{game}` va `{unit}` ni
 * almashtirib, o'nta sahifa chiqarilardi. Tekshiruv shuni ko'rsatdiki, bunda
 * sahifalar orasida FAQAT o'yin nomi farq qilar edi — javob bloki, to'rt
 * qadam, «qanday paketlar bor» bo'limi va meta tavsif o'ntasida ham AYNAN
 * bir xil matn bo'lardi (uch tilda — 30 ta bir xil sahifa bo'lagi).
 *
 * Google buni «thin/duplicate content» deb baholaydi va bunday to'plamdan
 * BIRONTASINI ham yaxshi joylashtirmaydi. Bundan tashqari o'nta bir xil
 * `HowTo` sxemasi jo'natilardi — bu sxemani umuman bermaslikdan yomonroq.
 *
 * Shuning uchun quyidagi maydonlar HAR O'YINGA ALOHIDA yoziladi:
 *   · `answer`   — AEO javob bloki (LLM aynan shuni iqtibos qiladi)
 *   · `steps`    — MLBB'da Server ID, Asphalt 9'da PLATFORMA, Steam'da
 *                  login — qadamlar haqiqatan boshqacha
 *   · `packages` — paket zinapoyasi har o'yinda boshqa (narxsiz)
 *   · `meta*`    — qidiruv natijasida o'nta bir xil qator turmasin
 *
 * QOIDA: bu yerda HECH QANDAY so'm narxi yozilmaydi — narx botda jonli
 * ko'rsatiladi (`modules/gameTopup/pricing.js`).
 */

import type { Locale } from "./site";

export type GameCopy = {
  /** `<title>` — ≤60 belgi, kalit so'z oldinda */
  metaTitle: string;
  /** Meta description — 140-160 belgi */
  metaDescription: string;
  /** Sahifa H1 — pul so'rovi bilan */
  h1: string;
  /** AEO javob bloki — 40-60 so'z, shu o'yinga xos tafsilot bilan boshlanadi */
  answer: string;
  /** Kirish — ikki xatboshi */
  intro: string[];
  /** Valyuta nimaga sarflanadi (shu o'yindagi haqiqiy tizim nomlari) */
  spendOn: string[];
  /** «Qanday paketlar bor» — paket zinapoyasi, NARXSIZ */
  packages: string[];
  /** To'ldirish qadamlari — shu o'yin oqimiga moslangan */
  steps: { title: string; text: string }[];
  /** ID ni topish — shu o'yin interfeysiga xos aniq yo'l */
  idSteps: string[];
  /** Aynan shu o'yinda pul yoki vaqt yo'qotadigan xato */
  gotcha?: { title: string; text: string };
  /** Sahifaga xos savol-javob — umumiy FAQ bilan takrorlanmaydi */
  faq: { q: string; a: string }[];
};

/** `slug` → til → matn. */
export type GameContentMap = Record<string, Partial<Record<Locale, GameCopy>>>;

export const GAME_CONTENT: GameContentMap = {};

/** Berilgan o'yin va til uchun matn (yo'q bo'lsa `null`). */
export function gameCopy(slug: string, locale: Locale): GameCopy | null {
  return GAME_CONTENT[slug]?.[locale] ?? null;
}

/**
 * Sahifa indekslanishga tayyormi.
 *
 * Matni yo'q sahifa qolipdagi umumiy jumlalar bilan chiqadi — ya'ni
 * qardosh sahifalarning nusxasi bo'ladi. Bunday sahifa `noindex` olishi
 * kerak: indeksga tushib, keyin «duplicate» deb tashlanishidan ko'ra,
 * umuman kirmagani yaxshi. Matn yozilgach belgi o'z-o'zidan yo'qoladi.
 */
export function isReadyToIndex(slug: string, locale: Locale): boolean {
  return Boolean(GAME_CONTENT[slug]?.[locale]);
}
