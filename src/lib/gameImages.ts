/**
 * O'yin muqovalari — `src/assets/games/` dan.
 *
 * `import.meta.glob` bilan olinadi, chunki fayllar `games.ts` dagi ro'yxatga
 * qarab dinamik tanlanadi. `eager: true` — build vaqtida hal bo'ladi, ya'ni
 * brauzerga hech qanday qo'shimcha JS ketmaydi.
 *
 * Bu rasmlar `<Image>` orqali ishlatilgani uchun Astro ularni avtomatik
 * webp/avif ga o'giradi, kerakli o'lchamda kesadi va nomiga content-hash
 * qo'yadi (ya'ni abadiy keshlanadi).
 */

import type { ImageMetadata } from "astro";

const modules = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/games/*.{png,jpg,jpeg,webp}",
  { eager: true },
);

/** `{ "pubg-mobile": ImageMetadata, ... }` */
const BY_SLUG: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => [
    path.split("/").pop()!.replace(/\.\w+$/, ""),
    mod.default,
  ]),
);

export function gameImage(slug: string): ImageMetadata | undefined {
  return BY_SLUG[slug];
}
