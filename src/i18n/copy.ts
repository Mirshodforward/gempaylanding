// Bilingual content + shared data for the Gempay landing.
// Components take a `lang` ("uz" | "ru") and read from here so the UZ and RU
// pages reuse the exact same markup/design.

import type { IconName } from "../components/icons";

export type Lang = "uz" | "ru";

// Mini App is launched from the Telegram bot; the developer API + Swagger docs
// live on the api subdomain.
export const APP_URL = "https://t.me/Gempayuz_bot";
export const BOT_URL = "https://t.me/Gempayuz_bot";
export const API_URL = "https://api.gempay.uz";
export const DOCS_URL = "https://api.gempay.uz/docs";

/** A featured game shown in the catalogue grid. */
export interface Game {
  /** filename stem under /public/games/ (e.g. "pubg-mobile") */
  slug: string;
  /** accent colour (mirrors each game's brand) */
  color: string;
  /** brand name — same in every language */
  name: string;
  popular?: boolean;
  uz: { currency: string };
  ru: { currency: string };
}

// Most-searched games in the UZ market. `currency` is the in-game top-up unit.
export const GAMES: Game[] = [
  { slug: "pubg-mobile", color: "#F2A900", name: "PUBG Mobile", popular: true,
    uz: { currency: "UC" }, ru: { currency: "UC" } },
  { slug: "mobile-legends", color: "#3B82F6", name: "Mobile Legends", popular: true,
    uz: { currency: "Olmos" }, ru: { currency: "Алмазы" } },
  { slug: "free-fire", color: "#FB7233", name: "Free Fire", popular: true,
    uz: { currency: "Olmos" }, ru: { currency: "Алмазы" } },
  { slug: "standoff-2", color: "#FACC15", name: "Standoff 2",
    uz: { currency: "Gold" }, ru: { currency: "Голда" } },
  { slug: "genshin-impact", color: "#38BDF8", name: "Genshin Impact",
    uz: { currency: "Kristallar" }, ru: { currency: "Кристаллы" } },
  { slug: "roblox", color: "#22C55E", name: "Roblox", popular: true,
    uz: { currency: "Robux" }, ru: { currency: "Robux" } },
  { slug: "brawl-stars", color: "#A855F7", name: "Brawl Stars",
    uz: { currency: "Gems" }, ru: { currency: "Гемы" } },
  { slug: "valorant", color: "#FF4655", name: "Valorant",
    uz: { currency: "VP" }, ru: { currency: "VP" } },
  { slug: "clash-royale", color: "#34D399", name: "Clash Royale",
    uz: { currency: "Gems" }, ru: { currency: "Гемы" } },
  { slug: "call-of-duty-mobile", color: "#F59E0B", name: "Call of Duty Mobile",
    uz: { currency: "CP" }, ru: { currency: "CP" } },
  { slug: "telegram", color: "#22D3EE", name: "Telegram",
    uz: { currency: "Premium / Stars" }, ru: { currency: "Premium / Stars" } },
  { slug: "steam", color: "#5B9BD5", name: "Steam",
    uz: { currency: "Wallet" }, ru: { currency: "Кошелёк" } },
];

interface NavCopy { games: string; features: string; how: string; developers: string; faq: string; blog: string; play: string }
interface Feature { icon: IconName; title: string; text: string }
interface Step { title: string; text: string }
interface Stat { value: string; label: string }
interface FaqItem { q: string; a: string }

export interface Copy {
  htmlTitle: string;
  metaDescription: string;
  keywords: string;
  nav: NavCopy;
  hero: {
    badge: string;
    titleA: string;
    titleHi: string;
    titleB: string;
    desc: string;
    play: string;
    secondary: string;
    live: string;
    answer: string; // AEO direct-answer line
  };
  gamesSection: { label: string; title: string; subtitle: string; currencyLabel: string; popular: string; more: string };
  featuresSection: { label: string; title: string; subtitle: string; items: Feature[] };
  howSection: { label: string; title: string; subtitle: string; steps: Step[] };
  statsSection: { items: Stat[] };
  developersSection: { label: string; title: string; text: string; points: string[]; cta: string; codeTitle: string };
  faqSection: { label: string; title: string; subtitle: string; items: FaqItem[] };
  cta: { title: string; text: string; play: string; docs: string };
  footer: { tagline: string; product: string; community: string; rights: string; play: string; bot: string; docs: string };
}

export const COPY: Record<Lang, Copy> = {
  uz: {
    htmlTitle: "Gempay — O'yin valyutalari arzon va tez | PUBG UC, ML olmos, Free Fire",
    metaDescription:
      "Gempay — 200+ o'yin uchun valyuta va top-up paketlarini bozordagi eng arzon narxlarda, bir daqiqada to'ldirish. PUBG UC, Mobile Legends olmos, Free Fire olmos — Telegram orqali, Payme/Click/karta bilan xavfsiz to'lov.",
    keywords:
      "gempay, gempay uz, o'yin valyutalari, o'yin pulini to'ldirish, pubg uc, pubg uc arzon, pubg uc sotib olish, pubg mobile uc to'ldirish, pubg uc narxi, mobile legends olmos, ml olmos to'ldirish, mobile legends olmos arzon, free fire olmos, free fire olmos to'ldirish, standoff 2 gold, genshin kristall, roblox robux, brawl stars gems, valorant vp, telegram premium, telegram stars sotib olish, o'yin valyutasi arzon, o'yin valyutasi tez, o'yin pulini arzon to'ldirish, top up uzbekistan, o'yin top up, payme bilan o'yin pul, click bilan to'ldirish, gempay bot, o'yin valyutalari o'zbekiston, o'yin valyutalari toshkent, o'yin pulini telegram orqali, игровая валюта, пубг юси дёшево, mobile legends алмазы узбекистан",
    nav: { games: "O'yinlar", features: "Afzalliklar", how: "Qanday ishlaydi", developers: "Developerlar", faq: "Savollar", blog: "Blog", play: "To'ldirish" },
    hero: {
      badge: "200+ o'yin · bir daqiqada yetkazish",
      titleA: "O'yin valyutasi —",
      titleHi: "arzon",
      titleB: "va bir zumda.",
      desc:
        "PUBG UC, Mobile Legends olmos, Free Fire va 200+ o'yin uchun top-up. Player ID kirit, to'la — biz bir daqiqada hisobingga yetkazamiz. Eng past narx, xavfsiz to'lov.",
      play: "Hoziroq to'ldirish",
      secondary: "O'yinlarni ko'rish",
      live: "buyurtma bugun yetkazildi",
      answer:
        "Gempay — Telegram orqali ishlaydigan o'yin valyutalari xizmati. 200+ o'yin (PUBG UC, Mobile Legends, Free Fire va boshqalar) uchun top-up paketlarini bozordagi eng arzon narxlarda, Player ID orqali bir daqiqada to'ldiradi. To'lov Payme, Click yoki karta orqali.",
    },
    gamesSection: {
      label: "O'yinlar",
      title: "200+ o'yin, bitta joy",
      subtitle: "Eng mashhur o'yinlar uchun valyuta — barchasi bir narxda arzon va tez. Qidirayotgan o'yiningni botda topasan.",
      currencyLabel: "Valyuta",
      popular: "Mashhur",
      more: "va yana 190+ o'yin →",
    },
    featuresSection: {
      label: "Afzalliklar",
      title: "Nega aynan Gempay?",
      subtitle: "Arzon narx, bir daqiqalik yetkazish va xavfsiz to'lov — o'yinchilar va developerlar bir xil yoqtiradi.",
      items: [
        { icon: "tag", title: "Eng arzon narx", text: "Narx tannarxga eng yaqin kursda. Ortiqcha komissiya yo'q — bozordagi eng past narxlardan biri." },
        { icon: "zap", title: "1 daqiqada yetkazish", text: "Buyurtma avtomatik ishlov beriladi. To'lovdan so'ng valyuta odatda bir daqiqada hisobingga tushadi." },
        { icon: "shield", title: "Xavfsiz to'lov", text: "Payme, Click yoki bank kartasi. Har bir buyurtma kuzatiladi, valyuta kelmasa — pul qaytariladi." },
        { icon: "controller", title: "200+ o'yin", text: "PUBG, Mobile Legends, Free Fire, Standoff 2, Genshin, Roblox va yana yuzlab o'yin — 4600+ paket." },
        { icon: "telegram", title: "Telegram orqali", text: "Ilova o'rnatish shart emas. Botni och, o'yinni tanla va bir necha bosishda to'ldir." },
        { icon: "headset", title: "24/7 qo'llab-quvvatlash", text: "Savol yoki muammo bo'lsa — jonli yordam doim onlayn. Buyurtma tarixi va cheklar saqlanadi." },
      ],
    },
    howSection: {
      label: "Qanday ishlaydi",
      title: "3 qadamda to'ldiring",
      subtitle: "Murakkab ro'yxatdan o'tish yo'q — birinchi buyurtmangni bir daqiqada beresan.",
      steps: [
        { title: "O'yinni tanla", text: "Botni och, 200+ o'yindan keragini va kerakli paketni (UC, olmos, gold...) tanla." },
        { title: "Player ID kirit", text: "O'yin akkaunting ID raqamini kirit. Kerak bo'lsa server/zona ID ham so'raladi." },
        { title: "To'la va ol", text: "Payme, Click yoki karta bilan to'la. Valyuta bir daqiqada hisobingga tushadi." },
      ],
    },
    statsSection: {
      items: [
        { value: "200+", label: "o'yin" },
        { value: "4600+", label: "top-up paket" },
        { value: "~1 daq", label: "o'rtacha yetkazish" },
        { value: "24/7", label: "onlayn xizmat" },
      ],
    },
    developersSection: {
      label: "Developerlar uchun",
      title: "Bitta API — 200+ o'yin",
      text:
        "O'z botingiz yoki saytingizga o'yin valyutalarini ulang. REST + JSON, USDT balans, idempotency va xatoda avto-refund. Tannarx +5% narx, to'liq Swagger hujjatlari va \"Try it out\".",
      points: [
        "REST API, JSON javoblar — istalgan dasturlash tilida",
        "USDT balans: tannarx +5%, oldindan to'ldirish (Payme/Click)",
        "Idempotency kaliti va yetkazilmasa avtomatik refund",
        "Swagger UI hujjatlari va jonli \"Try it out\"",
      ],
      cta: "API hujjatlari (Swagger)",
      codeTitle: "30 soniyada boshlash",
    },
    faqSection: {
      label: "FAQ",
      title: "Ko'p beriladigan savollar",
      subtitle: "O'yin valyutasini to'ldirish haqida bilishing kerak bo'lgan hamma narsa.",
      items: [
        { q: "Gempay nima va qanday ishlaydi?", a: "Gempay — o'yin valyutalari xizmati. Siz o'yinni va paketni tanlaysiz, Player ID kiritasiz va to'laysiz — biz valyutani to'g'ridan-to'g'ri o'yin akkauntingizga, odatda bir daqiqada yetkazamiz. Hammasi Telegram bot orqali." },
        { q: "PUBG UC yoki olmos arzonmi?", a: "Ha. Narxlar tannarxga eng yaqin kursda hisoblanadi va ortiqcha komissiya qo'shilmaydi, shuning uchun Gempay bozordagi eng arzon variantlardan biri. Aniq narxni botda har bir paket yonida ko'rasiz." },
        { q: "Buyurtma qancha vaqtda yetkaziladi?", a: "Buyurtma avtomatik ishlov beriladi va valyuta odatda to'lovdan so'ng bir daqiqada hisobingizga tushadi. Kamdan-kam hollarda provayder tomonida kechikish bo'lsa, holatni botdan kuzatib turasiz." },
        { q: "Qanday to'layman?", a: "To'lovni Payme, Click yoki bank kartasi orqali amalga oshirasiz. Har bir buyurtma uchun aniq summa ko'rsatiladi va to'lov avtomatik tasdiqlanadi." },
        { q: "Player ID nima va uni qayerdan olaman?", a: "Player ID — o'yindagi akkauntingiz raqami. Uni o'yin ichidagi profil yoki sozlamalar bo'limidan ko'rasiz. Ba'zi o'yinlar (masalan Mobile Legends) qo'shimcha server/zona ID ham so'raydi — bot buni avtomatik so'raydi." },
        { q: "Pul yechildi, lekin valyuta kelmadi. Nima qilaman?", a: "Har bir buyurtma kuzatiladi. Agar provayder valyutani yetkazib bera olmasa, to'lovingiz avtomatik yoki qo'lda qaytariladi. Yordam kerak bo'lsa, 24/7 qo'llab-quvvatlashga botdan yozasiz." },
        { q: "Developerlar uchun API bormi?", a: "Ha. api.gempay.uz orqali 200+ o'yin va 4600+ paketni o'z tizimingizga ulashingiz mumkin: REST + JSON, USDT balans, idempotency, avto-refund. To'liq Swagger hujjatlari api.gempay.uz/docs manzilida." },
      ],
    },
    cta: {
      title: "Hoziroq to'ldiring",
      text: "Botni oching, o'yinni tanlang va birinchi buyurtmangizni bir daqiqada bering. Eng arzon narx, eng tez yetkazish.",
      play: "Telegram botni ochish",
      docs: "Developer API",
    },
    footer: {
      tagline: "200+ o'yin uchun valyutani arzon va bir daqiqada to'ldirish xizmati.",
      product: "Mahsulot",
      community: "Aloqa",
      rights: "Barcha huquqlar himoyalangan.",
      play: "To'ldirish (bot)",
      bot: "Telegram bot",
      docs: "Developer API",
    },
  },

  ru: {
    htmlTitle: "Gempay — Игровая валюта дёшево и быстро | PUBG UC, ML алмазы, Free Fire",
    metaDescription:
      "Gempay — пополнение игровой валюты и top-up пакетов для 200+ игр по самым низким ценам, за минуту. PUBG UC, алмазы Mobile Legends, алмазы Free Fire — через Telegram, оплата Payme/Click/картой.",
    keywords:
      "gempay, игровая валюта, пополнение игровой валюты, pubg uc, пубг юси дёшево, купить uc pubg, пополнить uc pubg mobile, mobile legends алмазы, алмазы мобайл легендс, пополнить алмазы ml, free fire алмазы, standoff 2 голда, genshin кристаллы, roblox робуксы, brawl stars гемы, valorant vp, telegram premium купить, telegram stars, игровая валюта дёшево, игровая валюта быстро, пополнение игр узбекистан, top up узбекистан, оплата payme click, игровая валюта ташкент, gempay бот",
    nav: { games: "Игры", features: "Преимущества", how: "Как работает", developers: "Разработчикам", faq: "Вопросы", blog: "Блог", play: "Пополнить" },
    hero: {
      badge: "200+ игр · доставка за минуту",
      titleA: "Игровая валюта —",
      titleHi: "дёшево",
      titleB: "и за минуту.",
      desc:
        "PUBG UC, алмазы Mobile Legends, Free Fire и 200+ игр для пополнения. Введи Player ID, оплати — и мы доставим на аккаунт за минуту. Самая низкая цена, безопасная оплата.",
      play: "Пополнить сейчас",
      secondary: "Смотреть игры",
      live: "заказов доставлено сегодня",
      answer:
        "Gempay — сервис игровой валюты в Telegram. Пополняет top-up пакеты для 200+ игр (PUBG UC, Mobile Legends, Free Fire и др.) по самым низким ценам, на Player ID, за минуту. Оплата через Payme, Click или картой.",
    },
    gamesSection: {
      label: "Игры",
      title: "200+ игр в одном месте",
      subtitle: "Валюта для самых популярных игр — всё дёшево и быстро. Нужную игру найдёшь прямо в боте.",
      currencyLabel: "Валюта",
      popular: "Популярно",
      more: "и ещё 190+ игр →",
    },
    featuresSection: {
      label: "Преимущества",
      title: "Почему именно Gempay?",
      subtitle: "Низкая цена, доставка за минуту и безопасная оплата — нравится и игрокам, и разработчикам.",
      items: [
        { icon: "tag", title: "Самая низкая цена", text: "Курс максимально близок к себестоимости. Без лишних комиссий — одна из самых низких цен на рынке." },
        { icon: "zap", title: "Доставка за минуту", text: "Заказ обрабатывается автоматически. После оплаты валюта обычно приходит на аккаунт за минуту." },
        { icon: "shield", title: "Безопасная оплата", text: "Payme, Click или банковская карта. Каждый заказ отслеживается, не доставили — деньги вернутся." },
        { icon: "controller", title: "200+ игр", text: "PUBG, Mobile Legends, Free Fire, Standoff 2, Genshin, Roblox и сотни других — 4600+ пакетов." },
        { icon: "telegram", title: "Через Telegram", text: "Не нужно ставить приложение. Открой бота, выбери игру и пополни в пару кликов." },
        { icon: "headset", title: "Поддержка 24/7", text: "Вопрос или проблема — живая поддержка всегда онлайн. История заказов и чеки сохраняются." },
      ],
    },
    howSection: {
      label: "Как работает",
      title: "Пополни за 3 шага",
      subtitle: "Никакой сложной регистрации — первый заказ оформишь за минуту.",
      steps: [
        { title: "Выбери игру", text: "Открой бота, выбери нужную игру из 200+ и пакет (UC, алмазы, голда...)." },
        { title: "Введи Player ID", text: "Укажи ID игрового аккаунта. При необходимости бот спросит и server/zone ID." },
        { title: "Оплати и получи", text: "Оплати через Payme, Click или картой. Валюта придёт на аккаунт за минуту." },
      ],
    },
    statsSection: {
      items: [
        { value: "200+", label: "игр" },
        { value: "4600+", label: "top-up пакетов" },
        { value: "~1 мин", label: "средняя доставка" },
        { value: "24/7", label: "сервис онлайн" },
      ],
    },
    developersSection: {
      label: "Разработчикам",
      title: "Один API — 200+ игр",
      text:
        "Подключи игровую валюту к своему боту или сайту. REST + JSON, USDT баланс, идемпотентность и авто-возврат при ошибке. Цена себестоимость +5%, полная документация Swagger и \"Try it out\".",
      points: [
        "REST API, ответы в JSON — на любом языке программирования",
        "USDT баланс: себестоимость +5%, пополнение заранее (Payme/Click)",
        "Ключ идемпотентности и авто-возврат, если не доставлено",
        "Документация Swagger UI и живой \"Try it out\"",
      ],
      cta: "Документация API (Swagger)",
      codeTitle: "Старт за 30 секунд",
    },
    faqSection: {
      label: "FAQ",
      title: "Частые вопросы",
      subtitle: "Всё, что нужно знать о пополнении игровой валюты.",
      items: [
        { q: "Что такое Gempay и как он работает?", a: "Gempay — сервис игровой валюты. Вы выбираете игру и пакет, вводите Player ID и оплачиваете — мы доставляем валюту прямо на игровой аккаунт, обычно за минуту. Всё через Telegram-бота." },
        { q: "PUBG UC или алмазы — это дёшево?", a: "Да. Цены считаются по курсу, максимально близкому к себестоимости, без лишних комиссий, поэтому Gempay — один из самых дешёвых вариантов на рынке. Точную цену видно рядом с каждым пакетом в боте." },
        { q: "За сколько доставляется заказ?", a: "Заказ обрабатывается автоматически, и валюта обычно приходит на аккаунт за минуту после оплаты. В редких случаях задержки на стороне провайдера статус видно прямо в боте." },
        { q: "Как оплатить?", a: "Оплата через Payme, Click или банковскую карту. Для каждого заказа показывается точная сумма, а платёж подтверждается автоматически." },
        { q: "Что такое Player ID и где его взять?", a: "Player ID — номер вашего игрового аккаунта. Его видно в профиле или настройках внутри игры. Некоторые игры (например Mobile Legends) запрашивают ещё server/zone ID — бот спросит об этом автоматически." },
        { q: "Деньги списались, а валюта не пришла. Что делать?", a: "Каждый заказ отслеживается. Если провайдер не смог доставить валюту, оплата возвращается автоматически или вручную. Если нужна помощь — напишите в поддержку 24/7 прямо в боте." },
        { q: "Есть ли API для разработчиков?", a: "Да. Через api.gempay.uz можно подключить 200+ игр и 4600+ пакетов к своей системе: REST + JSON, USDT баланс, идемпотентность, авто-возврат. Полная документация Swagger — api.gempay.uz/docs." },
      ],
    },
    cta: {
      title: "Пополни прямо сейчас",
      text: "Открой бота, выбери игру и оформи первый заказ за минуту. Самая низкая цена, самая быстрая доставка.",
      play: "Открыть Telegram-бота",
      docs: "Developer API",
    },
    footer: {
      tagline: "Сервис пополнения игровой валюты для 200+ игр — дёшево и за минуту.",
      product: "Продукт",
      community: "Контакты",
      rights: "Все права защищены.",
      play: "Пополнить (бот)",
      bot: "Telegram-бот",
      docs: "Developer API",
    },
  },
};
