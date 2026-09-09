/**
 * Huquqiy sahifalar reyestri.
 *
 * Sahifalar, futer havolalari, sitemap va `/llms.txt` — hammasi shu
 * ro'yxatdan oziqlanadi. Yangi hujjat qo'shish uchun uni shu yerga
 * qo'shish kifoya: marshrut fayllari `getStaticPaths` orqali o'zi
 * yaratiladi, futer va sitemap ham o'zi ergashadi.
 */

import { OFERTA } from "./oferta";
import { PAYMENTS } from "./payments";
import { SECURITY } from "./security";
import { CONTACTS } from "./contact";
import type { LegalDoc } from "./types";
import type { Locale } from "../site";

export * from "./types";

/**
 * TARTIB futerda va sahifalar orasidagi havolalarda saqlanadi: avval
 * shartnoma (oferta), keyin pul, keyin xavfsizlik, oxirida aloqa. Bu
 * foydalanuvchining savol ketma-ketligi — «nima shart → qancha va qanday
 * to'layman → xavfsizmi → kimga yozaman».
 */
export const LEGAL_DOCS: readonly LegalDoc[] = [OFERTA, PAYMENTS, SECURITY, CONTACTS];

export const LEGAL_SLUGS: readonly string[] = LEGAL_DOCS.map((d) => d.slug);

export function legalBySlug(slug: string): LegalDoc | undefined {
  return LEGAL_DOCS.find((d) => d.slug === slug);
}

/** Futer va sahifalararo havolalar uchun qisqa ro'yxat. */
export function legalNav(locale: Locale) {
  return LEGAL_DOCS.map((d) => ({
    slug: d.slug,
    icon: d.icon,
    label: d.locales[locale].short,
  }));
}

/** Sitemap uchun — eng oxirgi tahrir sanasi. */
export function legalLastmod(): string {
  return LEGAL_DOCS.map((d) => d.updated).sort().at(-1)!;
}
