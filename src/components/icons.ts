/**
 * Inline SVG ikonalar.
 *
 * NEGA kutubxona emas: ikona paketi (lucide-react va h.k.) sof statik saytga
 * React runtime'ini olib keladi — bu ~40 KB JS, sahifada esa bitta ham
 * interaktiv element yo'q. Bu yerdagi yo'llar to'g'ridan-to'g'ri HTML ichiga
 * chiqadi: 0 KB JS, 0 ta qo'shimcha so'rov, keshlash muammosi ham yo'q.
 *
 * Uslub — Lucide (24×24, stroke 2, yumaloq uchlar). Yangi ikona qo'shsangiz
 * shu qolipda qoling, aks holda vizual og'irligi boshqacha bo'lib ko'zga
 * tashlanadi.
 */

export type IconName = keyof typeof PATHS;

const PATHS = {
  "shield-check":
    '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',

  wallet:
    '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',

  zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',

  telegram:
    '<path d="M21.8 4.3 2.9 11.6c-1.1.4-1.1 1.1-.2 1.4l4.8 1.5 1.8 5.6c.2.6.4.8.8.8.5 0 .7-.2 1-.5l2.3-2.2 4.8 3.5c.9.5 1.5.2 1.7-.8l3.1-14.6c.3-1.2-.4-1.8-1.2-1.5z"/>',

  receipt:
    '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z"/><path d="M8 8h8"/><path d="M8 12h6"/>',

  headset:
    '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M18 14h3v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z"/><path d="M3 14v-3a9 9 0 0 1 18 0v3"/>',

  check: '<path d="M20 6 9 17l-5-5"/>',

  "check-circle": '<circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/>',

  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',

  "credit-card": '<rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/>',

  "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',

  "chevron-right": '<path d="m9 18 6-6-6-6"/>',

  "chevron-down": '<path d="m6 9 6 6 6-6"/>',

  menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',

  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',

  globe:
    '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z"/>',

  "id-card":
    '<rect width="20" height="15" x="2" y="4.5" rx="2.5"/><circle cx="8.5" cy="10.5" r="2"/><path d="M5 16c.7-1.5 2-2.2 3.5-2.2S11.3 14.5 12 16"/><path d="M15 9.5h4"/><path d="M15 13h4"/>',

  sparkles:
    '<path d="M12 3l1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5l4.6-1.9z"/><path d="M18.5 15.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/>',

  gem: '<path d="M6.5 3h11l3.5 6-9 12L3 9z"/><path d="M3 9h18"/><path d="M9.5 3 8 9l4 12 4-12-1.5-6"/>',

  "external-link": '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M20 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6"/>',

  "alert-triangle":
    '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',

  gamepad:
    '<path d="M6 11h4"/><path d="M8 9v4"/><path d="M15 12h.01"/><path d="M18 10h.01"/><path d="M17.3 5H6.7A4.7 4.7 0 0 0 2 9.7L2.8 16a3.3 3.3 0 0 0 5.8 1.7l.6-.7h5.6l.6.7A3.3 3.3 0 0 0 21.2 16L22 9.7A4.7 4.7 0 0 0 17.3 5z"/>',

  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
} as const;

/**
 * Ikonani SVG satri sifatida qaytaradi.
 * `set:html` bilan chiqariladi — Astro uni HTML deb yozadi, qochirmaydi.
 */
export function icon(name: IconName, size = 20, extraClass = ""): string {
  const body = PATHS[name];
  // `currentColor` — ikona atrofdagi matn rangini oladi, alohida bo'yash shart emas.
  // `telegram` va `gem` to'ldirilgan, qolganlari chiziqli.
  const filled = name === "telegram";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" ${
    filled
      ? 'fill="currentColor" stroke="none"'
      : 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"'
  } class="${extraClass}" aria-hidden="true" focusable="false">${body}</svg>`;
}

export const ICON_NAMES = Object.keys(PATHS) as IconName[];
