/**
 * GamPay o'yin katalogi — saytning yagona haqiqat manbasi.
 *
 * MANBA: bot backend'idagi `modules/gameTopup/catalog.js` → `GAME_META`.
 * `code` bot marshrutida (`/games/:code`) va deep-link'da ishlatiladi —
 * o'zboshimchalik bilan o'zgartirmang. `slug` esa faqat SAYT manzili
 * (`/oyinlar/<slug>`) va u SEO uchun tanlangan, kod bilan bir xil emas.
 *
 * NARX YO'Q — bilib turib. Bot narxi provayder katalogidan jonli keladi va
 * USDT kursiga bog'liq (`modules/gameTopup/pricing.js`). Statik saytga
 * yozilgan raqam bir haftada eskiradi va noto'g'ri va'da bo'lib qoladi.
 * Shu yerda faqat o'zgarmaydigan ma'lumot: valyuta, kerakli ID, yetkazish
 * vaqti.
 */

import type { Locale } from "./site";

/** Har tilda bir xil tuzilish — `t(game.unit, locale)` bilan o'qiladi. */
export type I18nText = Record<Locale, string>;

export type UnitGroup = "uc" | "diamond" | "cp" | "token" | "coin" | "wallet";

export type Game = {
  /** Bot kodi — deep-link va Mini App marshruti (`/games/<code>`) */
  code: string;
  /** Sayt manzili — `/oyinlar/<slug>` */
  slug: string;
  /** Brend nomi — hech qaysi tilda tarjima qilinmaydi */
  title: string;
  /** Qisqartma — kichik kartochkalar va nav uchun */
  short: string;
  /** Nima sotib olinadi: UC, Olmos, CP… */
  unit: I18nText;
  unitGroup: UnitGroup;
  /** Brend rangi — kartochka aksenti (botdagi `accent` bilan bir xil) */
  accent: string;
  accent2: string;
  /** Buyurtma uchun nima so'raladi */
  idLabel: I18nText;
  /** Foydalanuvchi ID sini qayerdan topadi */
  idHint: I18nText;
  /** Server yoki platforma maydoni kerakmi */
  needsServer: boolean;
  /** `needsServer` bo'lsa — maydon nomi (Asphalt 9 da bu PLATFORMA) */
  serverLabel?: I18nText;
  /** O'rtacha yetkazish vaqti, daqiqada — matn tildan yasaladi */
  etaMinutes: number;
  /** Muqova oq/och fonli — dark kartada orqasiga plita kerak */
  lightArtwork?: boolean;
  /** Bosh sahifada «mashhur» belgisi */
  popular?: boolean;
  /** O'yin emas — ilova (Bigo Live, Steam). Matnlar shunga moslanadi. */
  isApp?: boolean;
  /** Provayder eslatmasi — hududiy cheklovlar bo'lsa sahifada ko'rsatiladi */
  regionNote?: I18nText;
};

/** `~2 daqiqa` / `~2 мин` / `~2 min` */
export function etaText(minutes: number, locale: Locale): string {
  if (locale === "ru") return `~${minutes} мин`;
  if (locale === "en") return `~${minutes} min`;
  return `~${minutes} daqiqa`;
}

const DIAMOND: I18nText = { uz: "Olmos", ru: "Алмазы", en: "Diamonds" };
const TOKEN: I18nText = { uz: "Token", ru: "Токены", en: "Tokens" };

const PLAYER_ID: I18nText = { uz: "Player ID", ru: "Player ID", en: "Player ID" };
const USER_ID: I18nText = { uz: "User ID", ru: "User ID", en: "User ID" };

const SERVER_ID: I18nText = { uz: "Server ID", ru: "Server ID", en: "Server ID" };
const PLATFORM: I18nText = { uz: "Platforma", ru: "Платформа", en: "Platform" };

/**
 * Tartib MUHIM — bosh sahifadagi katak shu tartibda chiziladi va u botdagi
 * `SUPPORTED_GAME_CODES` bilan bir xil (mashhurligi bo'yicha).
 */
export const GAMES: Game[] = [
  {
    code: "pubgm",
    slug: "pubg-mobile",
    title: "PUBG Mobile",
    short: "PUBG",
    unit: { uz: "UC", ru: "UC", en: "UC" },
    unitGroup: "uc",
    accent: "#F5A524",
    accent2: "#E07B00",
    idLabel: PLAYER_ID,
    idHint: {
      uz: "O'yinda: profil → ismingiz ostidagi ID raqami",
      ru: "В игре: профиль → номер ID под вашим именем",
      en: "In game: profile → the ID number under your name",
    },
    needsServer: false,
    etaMinutes: 2,
    popular: true,
  },
  {
    code: "mlbb_global",
    slug: "mobile-legends",
    title: "Mobile Legends: Bang Bang",
    short: "MLBB",
    unit: DIAMOND,
    unitGroup: "diamond",
    accent: "#5B8DEF",
    accent2: "#2B5FD0",
    idLabel: USER_ID,
    idHint: {
      uz: "O'yinda: profil → ID (qavs ichidagi raqam — Server ID)",
      ru: "В игре: профиль → ID (число в скобках — Server ID)",
      en: "In game: profile → ID (the number in brackets is the Server ID)",
    },
    needsServer: true,
    serverLabel: SERVER_ID,
    etaMinutes: 1,
    lightArtwork: true,
    popular: true,
  },
  {
    code: "magic_chess_gogo",
    slug: "magic-chess-go-go",
    title: "Magic Chess: Go Go",
    short: "MCGG",
    unit: DIAMOND,
    unitGroup: "diamond",
    accent: "#A855F7",
    accent2: "#7E22CE",
    idLabel: USER_ID,
    idHint: {
      uz: "O'yinda: profil → ID (qavs ichidagi raqam — Server ID)",
      ru: "В игре: профиль → ID (число в скобках — Server ID)",
      en: "In game: profile → ID (the number in brackets is the Server ID)",
    },
    needsServer: true,
    serverLabel: SERVER_ID,
    etaMinutes: 2,
  },
  {
    code: "freefire_global",
    slug: "free-fire",
    title: "Free Fire",
    short: "FF",
    unit: DIAMOND,
    unitGroup: "diamond",
    accent: "#F97316",
    accent2: "#C2410C",
    idLabel: PLAYER_ID,
    idHint: {
      uz: "O'yinda: profil → ismingiz ostidagi Player ID",
      ru: "В игре: профиль → Player ID под вашим именем",
      en: "In game: profile → the Player ID under your name",
    },
    needsServer: false,
    etaMinutes: 2,
    popular: true,
    regionNote: {
      uz: "Global versiya. Vetnam, Tailand va Indoneziya hisoblari qo'llab-quvvatlanmaydi.",
      ru: "Глобальная версия. Аккаунты Вьетнама, Таиланда и Индонезии не поддерживаются.",
      en: "Global build. Vietnam, Thailand and Indonesia accounts are not supported.",
    },
  },
  {
    code: "codm_sgmy",
    slug: "call-of-duty-mobile",
    title: "Call of Duty: Mobile",
    short: "CODM",
    unit: { uz: "CP", ru: "CP", en: "CP" },
    unitGroup: "cp",
    accent: "#F43F5E",
    accent2: "#BE123C",
    idLabel: PLAYER_ID,
    idHint: {
      uz: "O'yinda: profil → ID raqami (Garena SG/MY hisobi)",
      ru: "В игре: профиль → номер ID (аккаунт Garena SG/MY)",
      en: "In game: profile → ID number (Garena SG/MY account)",
    },
    needsServer: false,
    etaMinutes: 3,
    regionNote: {
      uz: "Garena SG/MY hududi. Global (Activision) hisobi bilan adashtirmang.",
      ru: "Регион Garena SG/MY. Не путайте с глобальным аккаунтом Activision.",
      en: "Garena SG/MY region. Do not confuse it with the global Activision account.",
    },
  },
  {
    code: "hok",
    slug: "honor-of-kings",
    title: "Honor of Kings",
    short: "HOK",
    unit: TOKEN,
    unitGroup: "token",
    accent: "#EAB308",
    accent2: "#A16207",
    idLabel: PLAYER_ID,
    idHint: {
      uz: "O'yinda: profil → ID raqami",
      ru: "В игре: профиль → номер ID",
      en: "In game: profile → ID number",
    },
    needsServer: false,
    etaMinutes: 3,
  },
  {
    code: "deltaforce",
    slug: "delta-force",
    title: "Delta Force",
    short: "Delta",
    unit: { uz: "Delta Coins", ru: "Delta Coins", en: "Delta Coins" },
    unitGroup: "coin",
    accent: "#84CC16",
    accent2: "#4D7C0F",
    idLabel: PLAYER_ID,
    idHint: {
      uz: "O'yinda: profil → ID raqami (masalan 10000123456)",
      ru: "В игре: профиль → номер ID (например 10000123456)",
      en: "In game: profile → ID number (e.g. 10000123456)",
    },
    needsServer: false,
    etaMinutes: 5,
  },
  {
    code: "asphalt9",
    slug: "asphalt-9",
    title: "Asphalt 9: Legends",
    short: "A9",
    unit: TOKEN,
    unitGroup: "token",
    accent: "#EF4444",
    accent2: "#B91C1C",
    idLabel: PLAYER_ID,
    idHint: {
      uz: "O'yinda: profil → Player ID. Platformani ham tanlang.",
      ru: "В игре: профиль → Player ID. Также выберите платформу.",
      en: "In game: profile → Player ID. Pick your platform too.",
    },
    // Asphalt 9 da «server» maydoni aslida PLATFORMA (Android / iOS / Windows)
    needsServer: true,
    serverLabel: PLATFORM,
    etaMinutes: 5,
    lightArtwork: true,
  },
  {
    code: "bigo",
    slug: "bigo-live",
    title: "Bigo Live",
    short: "Bigo",
    unit: DIAMOND,
    unitGroup: "diamond",
    accent: "#22D3EE",
    accent2: "#0E7490",
    idLabel: { uz: "Bigo ID", ru: "Bigo ID", en: "Bigo ID" },
    idHint: {
      uz: "Ilovada: Me → ismingiz ostidagi Bigo ID",
      ru: "В приложении: Me → Bigo ID под вашим именем",
      en: "In the app: Me → the Bigo ID under your name",
    },
    needsServer: false,
    etaMinutes: 3,
    lightArtwork: true,
    isApp: true,
  },
];

/** Steam — o'yin emas, hamyon. Katalogda oxirgi turadi. */
export const STEAM: Game = {
  code: "steam",
  slug: "steam",
  title: "Steam",
  short: "Steam",
  unit: { uz: "Hamyon", ru: "Кошелёк", en: "Wallet" },
  unitGroup: "wallet",
  accent: "#66C0F4",
  accent2: "#2A75A3",
  idLabel: { uz: "Steam login", ru: "Steam логин", en: "Steam login" },
  idHint: {
    uz: "Steam profili → Sozlamalar → hisob nomi (login, nik emas)",
    ru: "Профиль Steam → Настройки → имя аккаунта (логин, не ник)",
    en: "Steam profile → Settings → account name (the login, not the nickname)",
  },
  needsServer: false,
  etaMinutes: 1,
  isApp: true,
};

/** Bosh sahifadagi to'liq katak — 9 o'yin + Steam. */
export const CATALOG: Game[] = [...GAMES, STEAM];

export function gameBySlug(slug: string): Game | undefined {
  return CATALOG.find((g) => g.slug === slug);
}

export function gameByCode(code: string): Game | undefined {
  return CATALOG.find((g) => g.code === code);
}
