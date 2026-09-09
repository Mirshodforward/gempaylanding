/**
 * Huquqiy sahifalar modeli — oferta, to'lov va qaytarish, to'lov
 * xavfsizligi, aloqa.
 *
 * NEGA BLOG MODELI QAYTA ISHLATILADI: bu sahifalar ham uzun matn, ham
 * jadval, ham ro'yxat va ogohlantirish bloklaridan iborat — blogdagi
 * `Block` modeli aynan shu ish uchun yasalgan va uni `ArticleBody` bitta
 * joyda chizadi. Alohida render yozilsa uslub ikkiga bo'linardi va mobil
 * jadval skrolli kabi allaqachon hal qilingan narsalar qaytadan
 * buzilardi.
 *
 * Huquqiy sahifaga blogda kerak bo'lmagan uchta blok qo'shiladi:
 * to'lov belgilari, rekvizitlar va aloqa kanallari. Ular `Block` ga
 * QO'SHILMAYDI — aks holda blog renderi va `blockText` ham o'zgarardi.
 * Ular alohida turda, `LegalBody` esa oddiy bloklarni `ArticleBody` ga
 * uzatib, faqat shu uchtasini o'zi chizadi.
 */

import { blockText, type Block, type FaqItem } from "../blog/types";
import type { IconName } from "../../components/icons";
import type { Locale } from "../site";

/** Faqat huquqiy sahifada uchraydigan bloklar. */
export type LegalOnlyBlock =
  /** Qabul qilinadigan to'lov tizimlari belgilari — МПС talabi */
  | { t: "paymarks" }
  /** Yuridik shaxs rekvizitlari — `site.ts` dagi `LEGAL` dan */
  | { t: "requisites" }
  /** Telefon / pochta / Telegram kartochkalari — `CONTACT` dan */
  | { t: "contacts" };

export type LegalBlock = Block | LegalOnlyBlock;

export type LegalContent = {
  /** H1 */
  title: string;
  /** `<title>` — ≤60 belgi, brend qo'shilishidan oldin */
  metaTitle: string;
  /** Meta description — 140-160 belgi */
  metaDescription: string;
  /** AEO javob bloki — 40-60 so'z, mustaqil tushunarli */
  answer: string;
  /** Non ushog'idagi va futerdagi qisqa nom */
  short: string;
  body: LegalBlock[];
  faq: FaqItem[];
};

export type LegalDoc = {
  /** Manzil (til prefiksisiz): `oferta`, `aloqa` ... */
  slug: string;
  icon: IconName;
  /**
   * Oxirgi jiddiy tahrir, `yyyy-mm-dd`. Sahifada ko'rinadi va sitemapga
   * `lastmod` bo'lib tushadi. Huquqiy hujjatda bu sana bezak emas: nizoda
   * foydalanuvchi qaysi tahrirga rozi bo'lgani shundan aniqlanadi.
   */
  updated: string;
  /**
   * Uch tilning HAMMASI majburiy — `Partial` emas. Huquqiy sahifa bir
   * tilda yo'q bo'lsa, o'sha til uchun sayt tugallanmagan hisoblanadi va
   * bank tekshiruvida ham shunday ko'rinadi.
   */
  locales: Record<Locale, LegalContent>;
};

/** Mundarija — `h2` bloklaridan. Blogdagi `toc` bilan bir xil qoida. */
export function tocOf(blocks: LegalBlock[]): { id: string; text: string }[] {
  return blocks.flatMap((b) => (b.t === "h2" ? [{ id: b.id, text: b.text }] : []));
}

/** Sof matn — `wordCount` va tekshiruvlar uchun. */
export function legalText(b: LegalBlock): string[] {
  switch (b.t) {
    case "paymarks":
    case "requisites":
    case "contacts":
      return [];
    default:
      // Qolgani blogdagi bloklar — o'sha yerdagi ajratgich ishlaydi.
      return blockText(b);
  }
}
