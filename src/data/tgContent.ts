/**
 * Telegram Stars va Premium sahifalarining MATNI — uz / ru / en.
 *
 * Raqamlar bu yerda yozilmaydi: ular `telegram.ts` dan `som()` orqali
 * keladi, shunda tarif o'zgarganda matn ham o'zi yangilanadi.
 *
 * NEGA STARSTG.UZ MATNI KO'CHIRILMAGAN: ikkala sayt bitta jamoaniki va
 * bir xil mahsulotni sotadi. Bir xil matn ikki domenda tursa Google
 * ikkalasidan bittasini tanlaydi va qolganini «nusxa» deb tashlaydi.
 * Shuning uchun bu sahifalar GemPay nuqtai nazaridan yoziladi: o'yinchi
 * uchun Stars nimaga kerak, o'yin valyutasidan farqi nima, ilovaning
 * qaysi bo'limida turadi.
 *
 * USLUB: README qoidalari — o'zbekcha lotin, ASCII apostrof, va'da faqat
 * mahsulot haqiqatan qiladigan ish. «100% kafolat», «har doim» yo'q.
 */

import type { Locale } from "./site";
import type { IconName } from "../components/icons";
import {
  STARS_UNIT_CARD,
  STARS_UNIT_ONLINE,
  STARS_MIN,
  STARS_MAX,
  PREMIUM_PLANS,
  PREMIUM_BEST,
  premiumPerMonth,
  starsCardPrice,
  starsOnlinePrice,
  som,
  somApprox,
  num,
} from "./telegram";

export type TgProduct = "stars" | "premium";

export type TgFeature = { icon: IconName; title: string; text: string };
export type TgStep = { title: string; text: string };
export type TgTrust = { value: string; title: string; text: string };

export type TgCopy = {
  /** `<title>` — ≤60 belgi */
  metaTitle: string;
  /** 140-160 belgi */
  metaDescription: string;
  keywords: string[];
  /** Non ushog'i va sxemadagi mahsulot nomi */
  crumb: string;
  eyebrow: string;
  h1: string;
  lede: string;
  badges: string[];
  /**
   * «Telegram» bo'limi QAYERDA turishi — Mini App'da, Android APK'da emas.
   * Android ilova (`gampayapp`, v1.1.1) hozircha faqat 9 o'yin va Steam'ni
   * biladi; Stars/Premium plitkalari faqat Telegram Mini App'da (jonli
   * bundle'da 2026-10-23 da tekshirildi). Sahifa buni hero'da aytadi.
   */
  appNote: string;
  /** AEO javob — 40-60 so'z */
  answer: string;
  ctaPrimary: string;
  ctaPrices: string;
  prices: {
    eyebrow: string;
    title: string;
    lede: string;
    /** Jadval ustunlari — Stars: miqdor/karta/onlayn, Premium: muddat/oyiga/jami */
    cols: [string, string, string];
    /** Stars: «yulduz», Premium: «oy» */
    unit: string;
    popular: string;
    best: string;
    note: string;
  };
  features: { eyebrow: string; title: string; lede: string; items: TgFeature[] };
  steps: { eyebrow: string; title: string; lede: string; items: TgStep[]; cta: string };
  pay: {
    eyebrow: string;
    title: string;
    lede: string;
    /** `PAYMENT_METHODS` id → shu usul bilan aynan shu mahsulotni qanday to'lash */
    methods: Record<string, string>;
    balance: string;
    note: string;
  };
  trust: { eyebrow: string; title: string; lede: string; items: TgTrust[]; disclosure: string };
  faqTitle: string;
  faq: { q: string; a: string }[];
  guides: { eyebrow: string; title: string; slugs: string[] };
  cta: { title: string; lede: string; primary: string };
};

// Qisqa yordamchilar — matn ichida raqam yozilmasin.
const card = (n: number, l: Locale) => som(starsCardPrice(n), l);
const online = (n: number, l: Locale) => som(starsOnlinePrice(n), l);
const plan = (m: number) => PREMIUM_PLANS.find((p) => p.months === m)!;
const monthly = (m: number, l: Locale) => somApprox(premiumPerMonth(plan(m)), l);
/** 12 oylik tarif 3 oylikka nisbatan oyiga necha foiz arzon */
const SAVE_PCT = Math.round((1 - premiumPerMonth(plan(12)) / premiumPerMonth(plan(3))) * 100);

const STARS_GUIDES = [
  "telegram-stars-sotib-olish-gempay",
  "telegram-stars-yoki-oyin-valyutasi",
  "telegram-premium-oyinchi-uchun",
  "oyinlarga-donat-qilish-gempay",
];
const PREMIUM_GUIDES = [
  "telegram-premium-oyinchi-uchun",
  "telegram-stars-yoki-oyin-valyutasi",
  "telegram-stars-sotib-olish-gempay",
  "oyinlarga-donat-qilish-gempay",
];

// =========================================================== STARS · uz ====

const starsUz: TgCopy = {
  metaTitle: "Telegram Stars sotib olish so'mda — GemPay'da",
  metaDescription:
    `Telegram Stars ni O'zbekistonda so'mda oling: UzCard, HUMO, Click yoki Uzum Bank. ` +
    `Faqat @username kerak, ${STARS_MIN} tadan, donasi ${som(STARS_UNIT_CARD, "uz")}dan. Parol so'ralmaydi.`,
  keywords: [
    "telegram stars sotib olish",
    "telegram stars narxi",
    "yulduz sotib olish",
    "telegram yulduz olish",
    "telegram stars uzcard humo",
    "telegram stars click orqali",
    "stars so'mda",
  ],
  crumb: "Telegram Stars",
  eyebrow: "Telegram Stars",
  h1: "Telegram Stars sotib olish — so'mda, o'yin hisobi bilan bir joyda",
  lede:
    "Yulduzlar o'yin hisobini to'ldiradigan o'sha GemPay Mini App'ida sotiladi: «Telegram» bo'limini " +
    "ochasiz, miqdorni tanlaysiz, @username'ni yozasiz va UzCard, HUMO, Click yoki Uzum Bank bilan " +
    "so'mda to'laysiz. Akkauntga kirish, parol yoki xorijiy karta kerak emas.",
  badges: [
    `${STARS_MIN} tadan ${num(STARS_MAX)} tagacha`,
    `Donasi ${som(STARS_UNIT_CARD, "uz")}dan`,
    "Faqat @username",
    "Xorijiy kartasiz",
  ],
  appNote:
    "«Telegram» bo'limi Telegram'dagi GemPay Mini App'da turadi (@Gempayuz_bot). Android APK ilovasida hozircha faqat o'yinlar va Steam bor.",
  answer:
    `Telegram Stars ni GemPay orqali so'mda sotib olish uchun @Gempayuz_bot ni oching, ilovadagi ` +
    `«Telegram» bo'limida Stars'ni tanlang, miqdorni (${STARS_MIN} dan ${num(STARS_MAX)} gacha) va ` +
    `@username'ni kiriting. To'lov UzCard, HUMO, Click yoki Uzum Bank bilan: karta o'tkazmasida donasi ` +
    `${som(STARS_UNIT_CARD, "uz")}, onlayn to'lovda ${som(STARS_UNIT_ONLINE, "uz")}. Yulduzlar to'lov ` +
    `tasdiqlangach bir necha soniyada balansga tushadi.`,
  ctaPrimary: "Stars sotib olish",
  ctaPrices: "Narxlarni ko'rish",
  prices: {
    eyebrow: "Narxlar",
    title: "Telegram Stars narxi so'mda",
    lede:
      "Narx miqdorga to'g'ri proporsional. Dona narxi to'lov yo'liga bog'liq: bot ko'rsatgan kartaga " +
      "o'tkazma arzonroq, Click yoki Uzum Bank ilovasidagi onlayn to'lov biroz qimmatroq, lekin " +
      "avtomatik tasdiqlanadi.",
    cols: ["Miqdor", `Karta o'tkazmasi · ${som(STARS_UNIT_CARD, "uz")}/dona`, `Click · Uzum Bank · ${som(STARS_UNIT_ONLINE, "uz")}/dona`],
    unit: "yulduz",
    popular: "Mashhur",
    best: "Eng foydali",
    note:
      `Jadvalda tayyor paketlar; Mini App'da ${STARS_MIN} dan ${num(STARS_MAX)} gacha istalgan sonni kiritasiz. ` +
      "Yakuniy summa to'lov tugmasidan oldin ekranda ko'rinadi — jadval ma'lumot uchun, tarif o'zgarsa " +
      "ekrandagi raqam ustun. Karta o'tkazmasida bot parallel to'lovlarni ajratish uchun summani 50 so'mlik " +
      "qadamlar bilan, 950 so'mgacha kamaytirishi mumkin — ekrandagi summani aynan yuboring.",
  },
  features: {
    eyebrow: "Nimaga kerak",
    title: "O'yinchiga Telegram Stars nimaga kerak?",
    lede: "Yulduzlar Telegram ichida sarflanadigan valyuta. O'yin valyutasidan farqli, u ilovadan tashqariga chiqmaydi.",
    items: [
      {
        icon: "gift",
        title: "Jamoadoshga sovg'a",
        text: "Squad'dagi do'stga yoki kanal adminiga Telegram sovg'asi yuborasiz — u profilda ko'rinadi, kolleksionga ham aylantirsa bo'ladi.",
      },
      {
        icon: "gamepad",
        title: "Mini-o'yinlar va botlar",
        text: "Telegram ichidagi o'yinlar va botlardagi xaridlar Stars bilan to'lanadi — alohida karta ulash shart emas.",
      },
      {
        icon: "star",
        title: "Reaksiya va pullik post",
        text: "Sevimli kanalda yulduzli reaksiya qo'yish, pullik post yoki mediani ochish.",
      },
      {
        icon: "message-circle",
        title: "Pullik xabarlar",
        text: "Xabarlariga narx qo'ygan odam yoki kanalga yozish uchun — Telegram shunda Stars so'raydi.",
      },
      {
        icon: "users",
        title: "Boshqa odam uchun",
        text: "Buyurtmada uning @username'ini yozasiz — yulduzlar to'g'ridan-to'g'ri unga tushadi, u hech narsa qilmaydi.",
      },
      {
        icon: "coins",
        title: "UC yoki olmos o'rniga EMAS",
        text: "Stars faqat Telegram ichida ishlaydi. PUBG UC, MLBB olmos va Steam balansi GemPay katalogida alohida to'ldiriladi.",
      },
    ],
  },
  steps: {
    eyebrow: "Qo'llanma",
    title: "Telegram Stars qanday sotib olinadi — 4 qadam",
    lede: "Ro'yxatdan o'tish yo'q, Telegram hisobingiz yetadi.",
    items: [
      {
        title: "Mini App'ni oching",
        text: "Telegram'da @Gempayuz_bot → «GemPay'ni ochish». «Telegram» bo'limi aynan shu Mini App'da; Android ilovasida hozircha faqat o'yinlar va Steam bor.",
      },
      {
        title: "«Telegram» bo'limidan Stars'ni tanlang",
        text: "O'yinlar ro'yxatidan yuqorida Stars, Premium va Gift plitkalari turadi — Stars'ni bosing.",
      },
      {
        title: "Miqdor va @username",
        text: `${STARS_MIN} dan ${num(STARS_MAX)} gacha son kiriting. O'zingizning yoki sovg'a qilmoqchi bo'lgan odamning @username'ini yozing — ilova profilni topib ko'rsatadi, to'g'riligini shu yerda tekshirasiz.`,
      },
      {
        title: "So'mda to'lang",
        text: "Karta o'tkazmasida ko'rsatilgan kartaga aynan ko'rsatilgan summani yuborasiz — tizim tushumni summa bo'yicha taniydi. Click yoki Uzum Bank'da to'lov ilovada tasdiqlanadi. Yulduzlar bir necha soniyada tushadi.",
      },
    ],
    cta: "Hozir boshlash",
  },
  pay: {
    eyebrow: "To'lov",
    title: "UzCard, HUMO, Click va Uzum Bank — hammasi so'mda",
    lede:
      "Ikki yo'l bor. Karta o'tkazmasi: ilova ko'rsatgan UzCard/HUMO kartaga istalgan bank ilovasidan " +
      "aynan ko'rsatilgan summani yuborasiz. Onlayn to'lov: Click yoki Uzum Bank tugmasini bosasiz, " +
      "summa tayyor turadi, to'lov o'zi tasdiqlanadi.",
    methods: {
      uzcard: "Bank ilovangizdan ko'rsatilgan kartaga o'tkazma. Summani tiyinigacha aynan yozing — tizim to'lovni shu bo'yicha taniydi.",
      humo: "UzCard bilan bir xil tartib: istalgan bank ilovasidan o'tkazma, konvertatsiyasiz, komissiya bank tarifi bo'yicha.",
      click: `Ilovada «Click» tugmasi — summa tayyor, to'lov avtomatik tasdiqlanadi. Dona narxi ${som(STARS_UNIT_ONLINE, "uz")}.`,
      uzum: `Uzum Bank ilovasida onlayn to'lov, avtomatik tasdiq. Dona narxi ${som(STARS_UNIT_ONLINE, "uz")}.`,
    },
    balance: `Bot balansidan ham to'lasa bo'ladi — karta o'tkazmasi narxida (${som(STARS_UNIT_CARD, "uz")}/dona).`,
    note: "Visa yoki Mastercard, Apple ID balansi, TON yoki kripto kerak emas. Rasmiy App Store va Google Play yo'li aynan shularni so'raydi, UzCard/HUMO esa odatda o'tmaydi.",
  },
  trust: {
    eyebrow: "Kafolat",
    title: "Nega GemPay orqali?",
    lede: "Pulingiz va akkauntingiz uchun qoidalar",
    items: [
      { value: "@", title: "Faqat username", text: "Parol, SMS kod yoki akkauntga kirish so'ralmaydi — yulduzlar Telegram'ning rasmiy mexanizmi orqali ko'rsatilgan akkauntga boradi." },
      { value: "0", title: "Yashirin komissiya", text: "Yakuniy summa to'lov tugmasidan oldin ekranda — nima ko'rsangiz, shuni to'laysiz." },
      { value: "100%", title: "Yetkazilmasa — qaytadi", text: "Texnik sabab bilan yulduzlar yuborilmasa, to'langan summa to'liq qaytariladi." },
      { value: "1", title: "Bitta qo'llab-quvvatlash", text: "O'yinlar ham, Stars ham bitta jamoada: @StarsPaymeeSupport buyurtma raqami bo'yicha javob beradi." },
    ],
    disclosure:
      "GemPay Telegram'ning rasmiy hamkori emas — mustaqil xizmat. Yulduzlar Telegram'ning rasmiy yo'li " +
      "bilan yuboriladi va balans Telegram sozlamalarida odatdagidek ko'rinadi. Stars va Premium GemPay " +
      "Mini App'iga StarsPaymee xizmati orqali ulangan — bu bitta ekotizim.",
  },
  faqTitle: "Telegram Stars — savol-javob",
  faq: [
    {
      q: "Stars bilan PUBG UC yoki Mobile Legends olmos olsa bo'ladimi?",
      a: "Yo'q. Stars — Telegram ichidagi valyuta, u o'yin valyutasiga aylanmaydi. UC, olmos, CP va Steam balansi GemPay katalogida so'mda alohida to'ldiriladi — xuddi shu ilovada, lekin boshqa bo'limda.",
    },
    {
      q: "100 ta Telegram Stars necha so'm?",
      a: `Karta o'tkazmasida ${card(100, "uz")} (donasi ${som(STARS_UNIT_CARD, "uz")}), Click yoki Uzum Bank orqali onlayn to'lovda ${online(100, "uz")} (donasi ${som(STARS_UNIT_ONLINE, "uz")}). Boshqa miqdor ham shu nisbatda: ${STARS_MIN} ta — ${card(STARS_MIN, "uz")} / ${online(STARS_MIN, "uz")}, 500 ta — ${card(500, "uz")} / ${online(500, "uz")}. Yakuniy summa ilovada to'lovdan oldin chiqadi.`,
    },
    {
      q: "Eng kam va eng ko'p nechta olsa bo'ladi?",
      a: `Bir buyurtmada ${STARS_MIN} tadan ${num(STARS_MAX)} tagacha. Ko'proq kerak bo'lsa — bir nechta buyurtma berasiz.`,
    },
    {
      q: "@username'im yo'q bo'lsa-chi?",
      a: "Stars faqat username bo'yicha yuboriladi. Telegram sozlamalarida «Username» bandini oching va o'zingizga nom bering — bu bepul va bir daqiqa oladi. Keyin shu nomni ilovaga kiritasiz.",
    },
    {
      q: "Jamoadoshimga Stars sovg'a qilsam bo'ladimi?",
      a: "Ha. Buyurtmada uning @username'ini kiritasiz, ilova profilni ko'rsatadi — tasdiqlaysiz. U hech narsa qilishi shart emas, yulduzlar to'g'ridan-to'g'ri uning balansiga tushadi.",
    },
    {
      q: "Nega karta o'tkazmasi va onlayn to'lov narxi farq qiladi?",
      a: "Onlayn to'lov tizimlari har to'lovdan komissiya oladi va u dona narxiga qo'shilgan. Karta o'tkazmasida bunday komissiya yo'q, lekin summani ko'rsatilgandek aynan yozish kerak — tizim to'lovni shu bo'yicha taniydi.",
    },
    {
      q: "To'ladim, yulduzlar kelmadi — nima qilaman?",
      a: "Avval summani tekshiring: karta o'tkazmasida u ko'rsatilgan bilan tiyinigacha bir xil bo'lishi kerak. 1-2 daqiqa kuting, keyin ilovadagi buyurtmalar tarixini oching. Hal bo'lmasa — chek bilan @StarsPaymeeSupport ga yozing; texnik sabab bo'lsa pul qaytariladi.",
    },
    {
      q: "Yulduzlarni qaytarib so'mga aylantirib bo'ladimi?",
      a: "Oddiy foydalanuvchi uchun yo'q: Telegram Stars'ni boshqa akkauntga o'tkazish yoki pulga qaytarish imkonini bermaydi. Shuning uchun kerakli miqdorni oling — ortiqchasi sovg'a yoki reaksiyaga ketadi.",
    },
    {
      q: "GemPay'da Stars'ni kim sotadi?",
      a: "Stars va Premium GemPay Mini App'iga StarsPaymee xizmati orqali ulangan — bu bitta ekotizim, bitta qo'llab-quvvatlash. O'yinlar GemPay'da, Telegram xizmatlari StarsPaymee'da bajariladi, siz esa Mini App'dan chiqmaysiz.",
    },
    {
      q: "Visa yoki Mastercard kerakmi?",
      a: "Yo'q. UzCard, HUMO, Click yoki Uzum Bank yetarli. Rasmiy App Store va Google Play yo'lidan farqli, xorijiy karta ham, Apple ID balansi ham talab qilinmaydi.",
    },
    {
      q: "Телеграм старс (юлдуз) сотиб олиш — кирилл ёзувида қидираётганлар учун",
      a: `GemPay иловасидаги «Telegram» бўлимида юлдузлар сўмда сотилади: карта ўтказмасида донаси ${som(STARS_UNIT_CARD, "uz").replace("so'm", "сўм")}, Click ёки Uzum Bank орқали ${som(STARS_UNIT_ONLINE, "uz").replace("so'm", "сўм")}, ${STARS_MIN} тадан. Фақат @username керак, парол сўралмайди.`,
    },
  ],
  guides: { eyebrow: "Batafsil", title: "Stars haqida qo'llanmalar", slugs: STARS_GUIDES },
  cta: {
    title: "Yulduzlarni hoziroq oling",
    lede: "@Gempayuz_bot → «Telegram» bo'limi → Stars. Ro'yxatdan o'tish yo'q, faqat @username.",
    primary: "Stars sotib olish",
  },
};

// ========================================================= PREMIUM · uz ====

const premiumUz: TgCopy = {
  metaTitle: "Telegram Premium olish so'mda — 3, 6, 12 oy | GemPay",
  metaDescription:
    `Telegram Premium ni so'mda oling: 3 oy ${num(plan(3).price)}, 6 oy ${num(plan(6).price)}, ` +
    `12 oy ${num(plan(12).price)} so'm. UzCard, HUMO, Click, Uzum Bank. Faqat @username, parolsiz.`,
  keywords: [
    "telegram premium olish",
    "telegram premium sotib olish",
    "telegram premium narxi",
    "telegram premium uzcard",
    "telegram premium so'mda",
    "telegram premium 1 yillik",
    "telegram premium parolsiz",
  ],
  crumb: "Telegram Premium",
  eyebrow: "Telegram Premium",
  h1: "Telegram Premium olish — so'mda, parolsiz, GemPay'da",
  lede:
    "Obuna @username bo'yicha Telegram'ning rasmiy sovg'a mexanizmi orqali ulanadi: akkauntga kirish, " +
    "parol yoki xorijiy karta kerak emas. 3, 6 yoki 12 oy — barcha to'lov usullarida bir xil narx.",
  badges: ["3 / 6 / 12 oy", "Narx hamma usulda bir xil", "Faqat @username", "Rasmiy Gift Premium orqali"],
  appNote:
    "«Telegram» bo'limi Telegram'dagi GemPay Mini App'da turadi (@Gempayuz_bot). Android APK ilovasida hozircha faqat o'yinlar va Steam bor.",
  answer:
    `Telegram Premium ni GemPay orqali olish uchun @Gempayuz_bot ni oching, «Telegram» bo'limida Premium'ni ` +
    `tanlang, muddatni (3, 6 yoki 12 oy) va @username'ni kiriting, so'ngra UzCard, HUMO, Click yoki Uzum Bank ` +
    `bilan so'mda to'lang. Narx: 3 oy ${som(plan(3).price, "uz")}, 6 oy ${som(plan(6).price, "uz")}, 12 oy ` +
    `${som(plan(12).price, "uz")}. Obuna to'lov tasdiqlangach bir necha soniyada faollashadi.`,
  ctaPrimary: "Premium sotib olish",
  ctaPrices: "Narxlarni ko'rish",
  prices: {
    eyebrow: "Narxlar",
    title: "Telegram Premium narxi O'zbekistonda",
    lede:
      "Muddat uzaygani sari bir oy arzonroq tushadi. Komissiya to'lov usuliga qo'shilmaydi — karta " +
      "o'tkazmasi ham, Click ham bir xil summa.",
    cols: ["Muddat", "Oyiga, so'm", "Jami, so'm"],
    unit: "oy",
    popular: "Mashhur",
    best: "Eng foydali",
    note:
      `GemPay'da 3, 6 va 12 oylik muddatlar bor. 12 oylik tarifda bir oy 3 oylikka nisbatan ` +
      `taxminan ${SAVE_PCT}% arzon. Jadval ma'lumot uchun — yakuniy summa to'lovdan oldin ko'rsatiladi. ` +
      "Karta o'tkazmasida bot parallel to'lovlarni ajratish uchun summani 950 so'mgacha kamaytirishi mumkin — " +
      "ekrandagi summani aynan yuboring.",
  },
  features: {
    eyebrow: "Afzalliklar",
    title: "Premium o'yinchiga nima beradi?",
    lede: "Obuna bilan ochiladigan imkoniyatlar — o'yin chatlari va kanallari nuqtai nazaridan.",
    items: [
      {
        icon: "film",
        title: "4 GB gameplay",
        text: "Bitta faylni 4 GB gacha yuborasiz — turnir yozuvi yoki uzun stream qismi siqilmasdan ketadi. Oddiy akkauntda chegara 2 GB.",
      },
      {
        icon: "zap",
        title: "Tezroq yuklab olish",
        text: "Kanallardagi katta video va fayllar tezlik cheklovisiz yuklanadi.",
      },
      {
        icon: "eye-off",
        title: "Reklamasiz kanallar",
        text: "O'yin yangiliklari va turnir kanallarida rasmiy reklama ko'rinmaydi.",
      },
      {
        icon: "mic",
        title: "Ovozni matnga",
        text: "Squad chatidagi ovozli xabarni o'yin paytida ovozsiz, matn ko'rinishida o'qiysiz.",
      },
      {
        icon: "languages",
        title: "Chat tarjimasi",
        text: "Inglizcha yoki ruscha patch-note kanallari bir bosishda tarjima qilinadi.",
      },
      {
        icon: "sticker",
        title: "Status, stiker, emoji",
        text: "Premium stikerlar, animatsion avatar va emoji-status — profil o'yindagidek ko'rinadi.",
      },
    ],
  },
  steps: {
    eyebrow: "Qo'llanma",
    title: "Telegram Premium qanday olinadi — 4 qadam",
    lede: "Akkauntga kirilmaydi, parol so'ralmaydi.",
    items: [
      {
        title: "Mini App'ni oching",
        text: "Telegram'da @Gempayuz_bot → «GemPay'ni ochish». «Telegram» bo'limi aynan shu Mini App'da; Android ilovasida hozircha faqat o'yinlar va Steam bor.",
      },
      {
        title: "«Telegram» bo'limidan Premium'ni tanlang",
        text: "O'yinlar ro'yxatidan yuqorida Stars, Premium va Gift plitkalari turadi — Premium'ni bosing.",
      },
      {
        title: "Muddat va @username",
        text: "3, 6 yoki 12 oyni tanlang. O'zingizning yoki sovg'a qilmoqchi bo'lgan odamning @username'ini yozing — ilova profilni ko'rsatadi, to'g'riligini shu yerda tekshirasiz.",
      },
      {
        title: "So'mda to'lang — obuna faollashadi",
        text: "Karta o'tkazmasida ko'rsatilgan summani aynan yuborasiz, Click yoki Uzum Bank'da to'lov ilovada tasdiqlanadi. Premium to'lov tasdiqlangach bir necha soniyada ulanadi va Telegram sozlamalarida ko'rinadi.",
      },
    ],
    cta: "Hozir boshlash",
  },
  pay: {
    eyebrow: "To'lov",
    title: "UzCard, HUMO, Click va Uzum Bank — narx bir xil",
    lede:
      "Premium'ga shlyuz ustamasi qo'shilmaydi: qaysi usulni tanlasangiz ham, jadvaldagi summani to'laysiz. " +
      "Karta o'tkazmasida summani aynan yozish kerak, onlayn to'lovda u tayyor turadi.",
    methods: {
      uzcard: "Bank ilovangizdan ko'rsatilgan kartaga o'tkazma — summani tiyinigacha aynan yozing.",
      humo: "UzCard bilan bir xil tartib: istalgan bank ilovasidan o'tkazma, konvertatsiyasiz.",
      click: "Ilovada «Click» tugmasi — summa tayyor, to'lov avtomatik tasdiqlanadi, ustama yo'q.",
      uzum: "Uzum Bank ilovasida onlayn to'lov, avtomatik tasdiq, ustama yo'q.",
    },
    balance: "Bot balansidan ham to'lasa bo'ladi — xuddi shu narxda.",
    note: "Visa yoki Mastercard, Apple ID balansi yoki TON kerak emas. Rasmiy yo'llar — App Store, Google Play, Fragment — UzCard/HUMO bilan odatda ishlamaydi, biz aynan shu bo'shliqni yopamiz.",
  },
  trust: {
    eyebrow: "Kafolat",
    title: "Nega GemPay orqali?",
    lede: "Obuna va akkauntingiz uchun qoidalar",
    items: [
      { value: "@", title: "Faqat username", text: "Obuna Telegram'ning rasmiy Gift Premium mexanizmi orqali ulanadi. Login, parol yoki SMS kod hech qachon so'ralmaydi." },
      { value: "=", title: "Narx hamma usulda bir xil", text: "Karta o'tkazmasi, Click, Uzum Bank yoki balans — summa jadvaldagidek, ustamasiz." },
      { value: "100%", title: "Ulanmasa — qaytadi", text: "Texnik sabab bilan obuna ulanmasa, to'langan summa to'liq qaytariladi." },
      { value: "1", title: "Bitta qo'llab-quvvatlash", text: "O'yinlar ham, Premium ham bitta jamoada: @StarsPaymeeSupport buyurtma raqami bo'yicha javob beradi." },
    ],
    disclosure:
      "GemPay Telegram'ning rasmiy hamkori emas — mustaqil xizmat. Premium Telegram'ning rasmiy «sovg'a qilish» " +
      "mexanizmi orqali aynan siz ko'rsatgan akkauntga biriktiriladi. Stars va Premium GemPay Mini App'iga " +
      "StarsPaymee xizmati orqali ulangan — bu bitta ekotizim.",
  },
  faqTitle: "Telegram Premium — savol-javob",
  faq: [
    {
      q: "GemPay'da qaysi muddatlar bor? 1 oylik-chi?",
      a: "GemPay'da 3, 6 va 12 oylik tariflar bor — eng qisqasi 3 oy. Bir oylik obuna kerak bo'lsa, u StarsPaymee'da alohida sotiladi.",
    },
    {
      q: "Premium qanday ulanadi — akkauntimga kirasizmi?",
      a: "Yo'q. Obuna Telegram'ning rasmiy sovg'a (Gift Premium) mexanizmi orqali @username bo'yicha yuboriladi. Siz hech qanday kod yoki parol bermaysiz, obuna Telegram sozlamalarida odatdagidek ko'rinadi.",
    },
    {
      q: "Click orqali to'lasam qimmatroqmi?",
      a: "Yo'q. Stars'dan farqli, Premium narxi barcha usullarda bir xil: karta o'tkazmasi, Click, Uzum Bank yoki bot balansi — jadvaldagi summa.",
    },
    {
      q: "12 oylik tarif qancha tejaydi?",
      a: `12 oylikda bir oy ${monthly(12, "uz")}ga tushadi, 3 oylikda esa ${monthly(3, "uz")} — farq taxminan ${SAVE_PCT}%. 6 oylik o'rtada: oyiga ${monthly(6, "uz")}.`,
    },
    {
      q: "Do'stimga Premium sovg'a qilsam bo'ladimi?",
      a: "Ha. Buyurtmada uning @username'ini yozasiz — obuna unga Telegram'ning rasmiy sovg'a mexanizmi orqali boradi, sizning akkauntingizga emas. U hech narsa qilishi shart emas.",
    },
    {
      q: "Premium allaqachon bor — yangisi ustiga qo'shiladimi?",
      a: "Ha, Telegram sovg'a qilingan muddatni joriy obuna ustiga qo'shadi. Tugashini kutish shart emas.",
    },
    {
      q: "Obuna o'zi uzayadimi, kartadan pul yechiladimi?",
      a: "Yo'q. Bu bir martalik xarid: muddat tugagach akkaunt oddiy rejimga qaytadi, hech qanday avtomatik to'lov bo'lmaydi. Xohlasangiz qayta olasiz.",
    },
    {
      q: "To'ladim, Premium faollashmadi — nima qilaman?",
      a: "Avval summani tekshiring: karta o'tkazmasida u ko'rsatilgan bilan aynan bir xil bo'lishi kerak. 1-2 daqiqa kuting va Telegram'ni qayta oching. Keyin ilovadagi buyurtmalar tarixi yoki @StarsPaymeeSupport — chek bilan. Texnik sabab bo'lsa pul qaytariladi.",
    },
    {
      q: "Premium bilan o'yin ichida UC yoki olmos olsa bo'ladimi?",
      a: "Yo'q, Premium — Telegram obunasi, o'yin valyutasi emas. UC, olmos, CP va Steam balansi GemPay katalogida alohida, so'mda to'ldiriladi.",
    },
    {
      q: "Телеграм премиум олиш — кирилл ёзувида қидираётганлар учун",
      a: `GemPay иловасидаги «Telegram» бўлимида Premium сўмда олинади: 3 ой ${som(plan(3).price, "uz").replace("so'm", "сўм")}, 6 ой ${som(plan(6).price, "uz").replace("so'm", "сўм")}, 12 ой ${som(plan(12).price, "uz").replace("so'm", "сўм")}. UzCard, HUMO, Click ёки Uzum Bank, фақат @username — парол сўралмайди.`,
    },
  ],
  guides: { eyebrow: "Batafsil", title: "Premium haqida qo'llanmalar", slugs: PREMIUM_GUIDES },
  cta: {
    title: "Premium'ni hoziroq ulang",
    lede: "@Gempayuz_bot → «Telegram» bo'limi → Premium. Parolsiz, so'mda, bir necha soniyada.",
    primary: "Premium sotib olish",
  },
};

// =========================================================== STARS · ru ====

const starsRu: TgCopy = {
  metaTitle: "Купить Telegram Stars за сумы — в GemPay",
  metaDescription:
    `Telegram Stars (звёзды) в Узбекистане за сумы: UzCard, HUMO, Click или Uzum Bank. Нужен только ` +
    `@username, от ${STARS_MIN} штук, от ${som(STARS_UNIT_CARD, "ru")} за звезду. Пароль не нужен.`,
  keywords: [
    "купить telegram stars",
    "звёзды телеграм узбекистан",
    "telegram stars цена",
    "купить звёзды telegram сумы",
    "telegram stars uzcard humo",
    "telegram stars click",
  ],
  crumb: "Telegram Stars",
  eyebrow: "Telegram Stars",
  h1: "Купить Telegram Stars — за сумы, там же, где пополняете игры",
  lede:
    "Звёзды продаются в том же Mini App GemPay, где вы пополняете игровой счёт: открываете раздел " +
    "«Telegram», выбираете количество, вводите @username и платите в сумах через UzCard, HUMO, Click " +
    "или Uzum Bank. Вход в аккаунт, пароль и зарубежная карта не нужны.",
  badges: [
    `От ${STARS_MIN} до ${num(STARS_MAX)} штук`,
    `От ${som(STARS_UNIT_CARD, "ru")} за звезду`,
    "Только @username",
    "Без зарубежной карты",
  ],
  appNote:
    "Раздел «Telegram» находится в Mini App GemPay внутри Telegram (@Gempayuz_bot). В Android-приложении пока только игры и Steam.",
  answer:
    `Чтобы купить Telegram Stars за сумы через GemPay, откройте @Gempayuz_bot, в разделе «Telegram» ` +
    `выберите Stars, укажите количество (от ${STARS_MIN} до ${num(STARS_MAX)}) и @username. Оплата — UzCard, ` +
    `HUMO, Click или Uzum Bank: при переводе на карту звезда стоит ${som(STARS_UNIT_CARD, "ru")}, при онлайн-оплате ` +
    `${som(STARS_UNIT_ONLINE, "ru")}. Звёзды поступают на баланс через несколько секунд после подтверждения платежа.`,
  ctaPrimary: "Купить Stars",
  ctaPrices: "Смотреть цены",
  prices: {
    eyebrow: "Цены",
    title: "Цена Telegram Stars в сумах",
    lede:
      "Цена прямо пропорциональна количеству. Стоимость одной звезды зависит от способа оплаты: перевод " +
      "на карту, которую показывает бот, дешевле; онлайн-оплата через Click или Uzum Bank чуть дороже, " +
      "зато подтверждается автоматически.",
    cols: ["Количество", `Перевод на карту · ${som(STARS_UNIT_CARD, "ru")}/шт.`, `Click · Uzum Bank · ${som(STARS_UNIT_ONLINE, "ru")}/шт.`],
    unit: "звёзд",
    popular: "Популярно",
    best: "Выгоднее всего",
    note:
      `В таблице готовые пакеты; в Mini App можно ввести любое число от ${STARS_MIN} до ${num(STARS_MAX)}. ` +
      "Итоговая сумма показывается на экране до кнопки оплаты — таблица справочная, при изменении тарифа " +
      "верна цифра на экране. При переводе на карту бот может уменьшить сумму шагами по 50 сумов, до 950, " +
      "чтобы различать одновременные платежи, — отправляйте ровно ту сумму, что на экране.",
  },
  features: {
    eyebrow: "Зачем нужны",
    title: "Зачем игроку Telegram Stars?",
    lede: "Звёзды — валюта внутри Telegram. В отличие от игровой валюты, за пределы мессенджера они не выходят.",
    items: [
      { icon: "gift", title: "Подарок тиммейту", text: "Отправьте другу из сквада или админу канала подарок Telegram — он виден в профиле, его можно сделать коллекционным." },
      { icon: "gamepad", title: "Мини-игры и боты", text: "Покупки в играх и ботах внутри Telegram оплачиваются звёздами — привязывать карту не нужно." },
      { icon: "star", title: "Реакции и платные посты", text: "Звёздная реакция в любимом канале, открытие платного поста или медиа." },
      { icon: "message-circle", title: "Платные сообщения", text: "Чтобы написать человеку или каналу, который установил цену за сообщение." },
      { icon: "users", title: "Для другого человека", text: "В заказе указываете его @username — звёзды приходят прямо ему, делать ничего не нужно." },
      { icon: "coins", title: "НЕ вместо UC и алмазов", text: "Stars работают только внутри Telegram. PUBG UC, алмазы MLBB и баланс Steam пополняются отдельно в каталоге GemPay." },
    ],
  },
  steps: {
    eyebrow: "Инструкция",
    title: "Как купить Telegram Stars — 4 шага",
    lede: "Без регистрации — достаточно аккаунта Telegram.",
    items: [
      { title: "Откройте Mini App", text: "В Telegram: @Gempayuz_bot → «Открыть GemPay». Раздел «Telegram» есть именно в этом Mini App; в Android-приложении пока только игры и Steam." },
      { title: "В разделе «Telegram» выберите Stars", text: "Над списком игр стоят плитки Stars, Premium и Gift — нажмите Stars." },
      { title: "Количество и @username", text: `Введите число от ${STARS_MIN} до ${num(STARS_MAX)}. Укажите свой @username или username того, кому дарите, — приложение найдёт и покажет профиль, здесь же сверяете.` },
      { title: "Оплатите в сумах", text: "При переводе на карту отправьте ровно указанную сумму на показанную карту — система распознаёт платёж по сумме. В Click или Uzum Bank платёж подтверждается в приложении. Звёзды приходят через несколько секунд." },
    ],
    cta: "Начать сейчас",
  },
  pay: {
    eyebrow: "Оплата",
    title: "UzCard, HUMO, Click и Uzum Bank — всё в сумах",
    lede:
      "Два пути. Перевод на карту: из любого банковского приложения отправляете ровно указанную сумму на " +
      "карту UzCard/HUMO, которую показало приложение. Онлайн-оплата: нажимаете кнопку Click или Uzum Bank, " +
      "сумма уже подставлена, платёж подтверждается сам.",
    methods: {
      uzcard: "Перевод на указанную карту из приложения вашего банка. Сумму вводите точно, до тийина — по ней система распознаёт платёж.",
      humo: "Тот же порядок, что и с UzCard: перевод из любого банковского приложения, без конвертации.",
      click: `Кнопка «Click» в приложении — сумма готова, платёж подтверждается автоматически. Цена звезды ${som(STARS_UNIT_ONLINE, "ru")}.`,
      uzum: `Онлайн-оплата в приложении Uzum Bank, автоматическое подтверждение. Цена звезды ${som(STARS_UNIT_ONLINE, "ru")}.`,
    },
    balance: `Можно оплатить и с баланса бота — по цене перевода на карту (${som(STARS_UNIT_CARD, "ru")}/шт.).`,
    note: "Visa или Mastercard, баланс Apple ID, TON и крипта не нужны. Официальный путь через App Store и Google Play требует именно их, а UzCard/HUMO там обычно не проходят.",
  },
  trust: {
    eyebrow: "Гарантии",
    title: "Почему через GemPay?",
    lede: "Правила для ваших денег и аккаунта",
    items: [
      { value: "@", title: "Только username", text: "Пароль, SMS-код и вход в аккаунт не запрашиваются — звёзды уходят на указанный аккаунт через официальный механизм Telegram." },
      { value: "0", title: "Скрытых комиссий", text: "Итоговая сумма на экране до кнопки оплаты — что видите, то и платите." },
      { value: "100%", title: "Возврат, если не доставлено", text: "Если по технической причине звёзды не отправлены, оплата возвращается полностью." },
      { value: "1", title: "Одна поддержка", text: "Игры и Stars — одна команда: @StarsPaymeeSupport отвечает по номеру заказа." },
    ],
    disclosure:
      "GemPay — независимый сервис, не официальный партнёр Telegram. Звёзды отправляются официальным путём " +
      "Telegram, баланс виден в настройках как обычно. Stars и Premium подключены к Mini App GemPay через " +
      "сервис StarsPaymee — это одна экосистема.",
  },
  faqTitle: "Telegram Stars — вопросы и ответы",
  faq: [
    { q: "Можно ли за Stars купить UC для PUBG или алмазы Mobile Legends?", a: "Нет. Stars — валюта внутри Telegram, в игровую она не конвертируется. UC, алмазы, CP и баланс Steam пополняются отдельно в каталоге GemPay — в том же приложении, но в другом разделе." },
    { q: "Сколько стоят 100 Telegram Stars?", a: `Переводом на карту — ${card(100, "ru")} (по ${som(STARS_UNIT_CARD, "ru")} за звезду), через Click или Uzum Bank — ${online(100, "ru")} (по ${som(STARS_UNIT_ONLINE, "ru")}). Любое другое количество считается в той же пропорции: ${STARS_MIN} — ${card(STARS_MIN, "ru")} / ${online(STARS_MIN, "ru")}, 500 — ${card(500, "ru")} / ${online(500, "ru")}. Итог показывается в приложении до оплаты.` },
    { q: "Какой минимум и максимум?", a: `В одном заказе от ${STARS_MIN} до ${num(STARS_MAX)} звёзд. Нужно больше — оформите несколько заказов.` },
    { q: "У меня нет @username — что делать?", a: "Stars отправляются только по username. Откройте настройки Telegram, пункт «Имя пользователя», и задайте его — это бесплатно и занимает минуту. Затем введите это имя в приложении." },
    { q: "Можно подарить Stars тиммейту?", a: "Да. В заказе укажите его @username, приложение покажет профиль — подтвердите. Ему ничего делать не нужно, звёзды придут прямо на его баланс." },
    { q: "Почему перевод на карту и онлайн-оплата стоят по-разному?", a: "Онлайн-платёжные системы берут комиссию с каждого платежа, она включена в цену звезды. При переводе на карту такой комиссии нет, но сумму нужно ввести ровно как показано — по ней система распознаёт платёж." },
    { q: "Оплатил, звёзды не пришли — что делать?", a: "Сначала проверьте сумму: при переводе на карту она должна совпадать с указанной до тийина. Подождите 1-2 минуты, затем откройте историю заказов в приложении. Если не решилось — напишите в @StarsPaymeeSupport с чеком; при технической причине деньги вернут." },
    { q: "Можно ли вернуть звёзды обратно в сумы?", a: "Для обычного пользователя — нет: Telegram не позволяет передавать Stars на другой аккаунт или обменивать на деньги. Поэтому берите нужное количество — остаток уйдёт на подарки или реакции." },
    { q: "Кто продаёт Stars в GemPay?", a: "Stars и Premium подключены к GemPay через сервис StarsPaymee — это одна экосистема и одна поддержка. Игры выполняет GemPay, сервисы Telegram — StarsPaymee, а вы не выходите из Mini App." },
    { q: "Нужна ли Visa или Mastercard?", a: "Нет. Достаточно UzCard, HUMO, Click или Uzum Bank. В отличие от официального пути через App Store и Google Play, ни зарубежная карта, ни баланс Apple ID не требуются." },
  ],
  guides: { eyebrow: "Подробнее", title: "Руководства о Stars", slugs: STARS_GUIDES },
  cta: {
    title: "Получите звёзды прямо сейчас",
    lede: "@Gempayuz_bot → раздел «Telegram» → Stars. Без регистрации, только @username.",
    primary: "Купить Stars",
  },
};

// ========================================================= PREMIUM · ru ====

const premiumRu: TgCopy = {
  metaTitle: "Купить Telegram Premium за сумы — 3, 6, 12 месяцев | GemPay",
  metaDescription:
    `Telegram Premium за сумы: 3 мес. ${num(plan(3).price)}, 6 мес. ${num(plan(6).price)}, ` +
    `12 мес. ${num(plan(12).price)} сум. UzCard, HUMO, Click, Uzum Bank. Только @username, без пароля.`,
  keywords: [
    "купить telegram premium",
    "телеграм премиум узбекистан",
    "telegram premium цена сумы",
    "telegram premium uzcard",
    "telegram premium без пароля",
    "telegram premium на год",
  ],
  crumb: "Telegram Premium",
  eyebrow: "Telegram Premium",
  h1: "Купить Telegram Premium — за сумы, без пароля, в GemPay",
  lede:
    "Подписка подключается по @username через официальный механизм подарка Telegram: вход в аккаунт, " +
    "пароль и зарубежная карта не нужны. 3, 6 или 12 месяцев — одна цена при любом способе оплаты.",
  badges: ["3 / 6 / 12 месяцев", "Одна цена для всех способов", "Только @username", "Через официальный Gift Premium"],
  appNote:
    "Раздел «Telegram» находится в Mini App GemPay внутри Telegram (@Gempayuz_bot). В Android-приложении пока только игры и Steam.",
  answer:
    `Чтобы купить Telegram Premium через GemPay, откройте @Gempayuz_bot, в разделе «Telegram» выберите Premium, ` +
    `укажите срок (3, 6 или 12 месяцев) и @username, затем оплатите в сумах через UzCard, HUMO, Click или Uzum Bank. ` +
    `Цена: 3 месяца ${som(plan(3).price, "ru")}, 6 месяцев ${som(plan(6).price, "ru")}, 12 месяцев ` +
    `${som(plan(12).price, "ru")}. Подписка активируется через несколько секунд после подтверждения платежа.`,
  ctaPrimary: "Купить Premium",
  ctaPrices: "Смотреть цены",
  prices: {
    eyebrow: "Цены",
    title: "Цена Telegram Premium в Узбекистане",
    lede: "Чем дольше срок, тем дешевле месяц. Комиссия способа оплаты не добавляется — перевод на карту и Click стоят одинаково.",
    cols: ["Срок", "В месяц, сум", "Итого, сум"],
    unit: "мес.",
    popular: "Популярно",
    best: "Выгоднее всего",
    note:
      `В GemPay доступны сроки 3, 6 и 12 месяцев. В годовом тарифе месяц примерно на ${SAVE_PCT}% ` +
      "дешевле, чем в 3-месячном. Таблица справочная — итоговая сумма показывается до оплаты. " +
      "При переводе на карту бот может уменьшить сумму до 950 сумов, чтобы различать одновременные платежи, — " +
      "отправляйте ровно ту сумму, что на экране.",
  },
  features: {
    eyebrow: "Преимущества",
    title: "Что даёт Premium игроку?",
    lede: "Возможности подписки — с точки зрения игровых чатов и каналов.",
    items: [
      { icon: "film", title: "Геймплей до 4 ГБ", text: "Один файл до 4 ГБ — запись турнира или длинный фрагмент стрима уходит без сжатия. У обычного аккаунта лимит 2 ГБ." },
      { icon: "zap", title: "Быстрая загрузка", text: "Большие видео и файлы из каналов скачиваются без ограничения скорости." },
      { icon: "eye-off", title: "Каналы без рекламы", text: "В каналах с игровыми новостями и турнирами официальная реклама не показывается." },
      { icon: "mic", title: "Голос в текст", text: "Голосовое из чата сквада читаете текстом прямо во время матча, без звука." },
      { icon: "languages", title: "Перевод чатов", text: "Англоязычные патчноуты и каналы переводятся в одно нажатие." },
      { icon: "sticker", title: "Статус, стикеры, эмодзи", text: "Премиум-стикеры, анимированный аватар и эмодзи-статус — профиль выглядит как в игре." },
    ],
  },
  steps: {
    eyebrow: "Инструкция",
    title: "Как купить Telegram Premium — 4 шага",
    lede: "В аккаунт никто не входит, пароль не нужен.",
    items: [
      { title: "Откройте Mini App", text: "В Telegram: @Gempayuz_bot → «Открыть GemPay». Раздел «Telegram» есть именно в этом Mini App; в Android-приложении пока только игры и Steam." },
      { title: "В разделе «Telegram» выберите Premium", text: "Над списком игр стоят плитки Stars, Premium и Gift — нажмите Premium." },
      { title: "Срок и @username", text: "Выберите 3, 6 или 12 месяцев. Укажите свой @username или username того, кому дарите, — приложение покажет профиль, здесь же сверяете." },
      { title: "Оплатите в сумах — подписка включится", text: "При переводе на карту отправьте ровно указанную сумму, в Click или Uzum Bank платёж подтверждается в приложении. Premium подключается через несколько секунд и виден в настройках Telegram." },
    ],
    cta: "Начать сейчас",
  },
  pay: {
    eyebrow: "Оплата",
    title: "UzCard, HUMO, Click и Uzum Bank — цена одна",
    lede: "К Premium наценка платёжного шлюза не добавляется: какой бы способ вы ни выбрали, платите сумму из таблицы. При переводе на карту сумму вводите точно, при онлайн-оплате она уже подставлена.",
    methods: {
      uzcard: "Перевод на указанную карту из приложения вашего банка — сумму вводите точно, до тийина.",
      humo: "Тот же порядок, что и с UzCard: перевод из любого банковского приложения, без конвертации.",
      click: "Кнопка «Click» в приложении — сумма готова, платёж подтверждается автоматически, без наценки.",
      uzum: "Онлайн-оплата в приложении Uzum Bank, автоматическое подтверждение, без наценки.",
    },
    balance: "Можно оплатить и с баланса бота — по той же цене.",
    note: "Visa или Mastercard, баланс Apple ID или TON не нужны. Официальные пути — App Store, Google Play, Fragment — с UzCard/HUMO обычно не работают; мы закрываем именно этот пробел.",
  },
  trust: {
    eyebrow: "Гарантии",
    title: "Почему через GemPay?",
    lede: "Правила для подписки и вашего аккаунта",
    items: [
      { value: "@", title: "Только username", text: "Подписка подключается через официальный механизм Gift Premium. Логин, пароль и SMS-код не запрашиваются никогда." },
      { value: "=", title: "Одна цена для всех способов", text: "Перевод на карту, Click, Uzum Bank или баланс — сумма как в таблице, без наценки." },
      { value: "100%", title: "Возврат, если не подключено", text: "Если по технической причине подписка не включилась, оплата возвращается полностью." },
      { value: "1", title: "Одна поддержка", text: "Игры и Premium — одна команда: @StarsPaymeeSupport отвечает по номеру заказа." },
    ],
    disclosure:
      "GemPay — независимый сервис, не официальный партнёр Telegram. Premium подключается через официальный " +
      "механизм подарка Telegram к указанному вами аккаунту. Stars и Premium подключены к Mini App GemPay " +
      "через сервис StarsPaymee — это одна экосистема.",
  },
  faqTitle: "Telegram Premium — вопросы и ответы",
  faq: [
    { q: "Какие сроки есть в GemPay? А на 1 месяц?", a: "В GemPay есть тарифы на 3, 6 и 12 месяцев — самый короткий 3 месяца. Подписка на один месяц продаётся отдельно у StarsPaymee." },
    { q: "Как подключается Premium — вы входите в мой аккаунт?", a: "Нет. Подписка отправляется по @username через официальный механизм подарка (Gift Premium). Вы не сообщаете ни код, ни пароль, а подписка видна в настройках Telegram как обычно." },
    { q: "Через Click дороже?", a: "Нет. В отличие от Stars, цена Premium одинакова при любом способе: перевод на карту, Click, Uzum Bank или баланс бота — сумма из таблицы." },
    { q: "Сколько экономит годовой тариф?", a: `В годовом тарифе месяц обходится в ${monthly(12, "ru")}, в 3-месячном — ${monthly(3, "ru")}; разница около ${SAVE_PCT}%. Полугодовой посередине: ${monthly(6, "ru")} в месяц.` },
    { q: "Можно подарить Premium другу?", a: "Да. В заказе укажите его @username — подписка уйдёт ему через официальный механизм подарка Telegram, а не на ваш аккаунт. Ему ничего делать не нужно." },
    { q: "У меня уже есть Premium — новый срок добавится?", a: "Да, Telegram прибавляет подаренный срок к текущей подписке. Ждать окончания не нужно." },
    { q: "Подписка продлится сама, спишутся ли деньги?", a: "Нет. Это разовая покупка: по окончании срока аккаунт возвращается в обычный режим, автосписаний нет. При желании купите снова." },
    { q: "Оплатил, Premium не включился — что делать?", a: "Сначала проверьте сумму: при переводе на карту она должна точно совпадать с указанной. Подождите 1-2 минуты и перезапустите Telegram. Затем — история заказов в приложении или @StarsPaymeeSupport с чеком. При технической причине деньги вернут." },
    { q: "Даёт ли Premium UC или алмазы в играх?", a: "Нет, Premium — подписка Telegram, а не игровая валюта. UC, алмазы, CP и баланс Steam пополняются отдельно в каталоге GemPay, в сумах." },
  ],
  guides: { eyebrow: "Подробнее", title: "Руководства о Premium", slugs: PREMIUM_GUIDES },
  cta: {
    title: "Подключите Premium прямо сейчас",
    lede: "@Gempayuz_bot → раздел «Telegram» → Premium. Без пароля, в сумах, за несколько секунд.",
    primary: "Купить Premium",
  },
};

// =========================================================== STARS · en ====

const starsEn: TgCopy = {
  metaTitle: "Buy Telegram Stars in Uzbek So'm — GemPay",
  metaDescription:
    `Buy Telegram Stars in Uzbekistan with so'm: UzCard, HUMO, Click or Uzum Bank. Only a @username, ` +
    `from ${STARS_MIN} stars, from ${som(STARS_UNIT_CARD, "en")} each. No password or foreign card.`,
  keywords: [
    "buy telegram stars uzbekistan",
    "telegram stars price uzs",
    "telegram stars uzcard",
    "telegram stars humo",
    "buy stars telegram som",
  ],
  crumb: "Telegram Stars",
  eyebrow: "Telegram Stars",
  h1: "Buy Telegram Stars — in so'm, in the same place as your game top-ups",
  lede:
    "Stars are sold in the same GemPay Mini App you use to top up games: open the Telegram section, pick an " +
    "amount, enter a @username and pay in so'm with UzCard, HUMO, Click or Uzum Bank. No account login, " +
    "no password, no foreign card.",
  badges: [
    `From ${STARS_MIN} to ${num(STARS_MAX).replace(" ", ",")} stars`,
    `From ${som(STARS_UNIT_CARD, "en")} each`,
    "Only a @username",
    "No foreign card",
  ],
  appNote:
    "The Telegram section lives in the GemPay Mini App inside Telegram (@Gempayuz_bot). The Android app currently has only games and Steam.",
  answer:
    `To buy Telegram Stars with so'm through GemPay, open @Gempayuz_bot, choose Stars in the Telegram section, ` +
    `enter the amount (${STARS_MIN} to ${num(STARS_MAX).replace(" ", ",")}) and a @username. Pay with UzCard, HUMO, ` +
    `Click or Uzum Bank: a card transfer costs ${som(STARS_UNIT_CARD, "en")} per star, online payment ` +
    `${som(STARS_UNIT_ONLINE, "en")}. The stars land on the balance seconds after the payment is confirmed.`,
  ctaPrimary: "Buy Stars",
  ctaPrices: "See prices",
  prices: {
    eyebrow: "Prices",
    title: "Telegram Stars price in so'm",
    lede:
      "The price scales with the amount. The per-star rate depends on how you pay: a transfer to the card " +
      "the bot shows is cheaper; online payment through Click or Uzum Bank costs a little more but is " +
      "confirmed automatically.",
    cols: ["Amount", `Card transfer · ${som(STARS_UNIT_CARD, "en")}/star`, `Click · Uzum Bank · ${som(STARS_UNIT_ONLINE, "en")}/star`],
    unit: "stars",
    popular: "Popular",
    best: "Best value",
    note:
      `The table lists ready packs; in the Mini App you can enter any number from ${STARS_MIN} to ${num(STARS_MAX).replace(" ", ",")}. ` +
      "The final amount is shown on screen before the pay button — the table is a reference, the on-screen amount wins if the rate changes. " +
      "For a card transfer the bot may lower the amount in steps of 50 so'm, up to 950, to tell simultaneous payments apart — send exactly the amount on screen.",
  },
  features: {
    eyebrow: "What for",
    title: "Why would a gamer need Telegram Stars?",
    lede: "Stars are Telegram's in-app currency. Unlike game currency, they never leave the messenger.",
    items: [
      { icon: "gift", title: "A gift for a teammate", text: "Send a Telegram gift to a squad mate or a channel admin — it shows on their profile and can be upgraded to a collectible." },
      { icon: "gamepad", title: "Mini games and bots", text: "Purchases inside Telegram games and bots are paid in Stars — no card to link." },
      { icon: "star", title: "Reactions and paid posts", text: "A star reaction in your favourite channel, or unlocking a paid post or media." },
      { icon: "message-circle", title: "Paid messages", text: "For writing to a person or channel that set a price per message." },
      { icon: "users", title: "For someone else", text: "Enter their @username in the order — the stars go straight to them, nothing to do on their side." },
      { icon: "coins", title: "NOT a substitute for UC or diamonds", text: "Stars work only inside Telegram. PUBG UC, MLBB diamonds and the Steam wallet are topped up separately in the GemPay catalogue." },
    ],
  },
  steps: {
    eyebrow: "Guide",
    title: "How to buy Telegram Stars — 4 steps",
    lede: "No sign-up — your Telegram account is enough.",
    items: [
      { title: "Open the Mini App", text: "In Telegram: @Gempayuz_bot → Open GemPay. The Telegram section is in this Mini App; the Android app currently has only games and Steam." },
      { title: "Choose Stars in the Telegram section", text: "Above the game list you will see Stars, Premium and Gift tiles — tap Stars." },
      { title: "Amount and @username", text: `Enter a number from ${STARS_MIN} to ${num(STARS_MAX).replace(" ", ",")}. Type your own @username or the one you are gifting to — the app finds and shows the profile, so you check it right there.` },
      { title: "Pay in so'm", text: "For a card transfer, send exactly the amount shown to the card shown — the system matches the payment by amount. With Click or Uzum Bank the payment is confirmed in the app. The stars arrive within seconds." },
    ],
    cta: "Start now",
  },
  pay: {
    eyebrow: "Payment",
    title: "UzCard, HUMO, Click and Uzum Bank — all in so'm",
    lede:
      "Two routes. Card transfer: from any banking app, send exactly the amount shown to the UzCard/HUMO " +
      "card the app displays. Online payment: tap Click or Uzum Bank, the amount is pre-filled and the " +
      "payment confirms itself.",
    methods: {
      uzcard: "A transfer to the shown card from your banking app. Enter the amount exactly — that is how the system recognises the payment.",
      humo: "Same as UzCard: a transfer from any banking app, no currency conversion.",
      click: `The Click button in the app — amount pre-filled, confirmed automatically. ${som(STARS_UNIT_ONLINE, "en")} per star.`,
      uzum: `Online payment in the Uzum Bank app, confirmed automatically. ${som(STARS_UNIT_ONLINE, "en")} per star.`,
    },
    balance: `You can also pay from the bot balance — at the card-transfer rate (${som(STARS_UNIT_CARD, "en")}/star).`,
    note: "No Visa or Mastercard, Apple ID balance, TON or crypto needed. The official App Store and Google Play route requires exactly those, and UzCard/HUMO usually do not go through.",
  },
  trust: {
    eyebrow: "Guarantees",
    title: "Why through GemPay?",
    lede: "The rules for your money and your account",
    items: [
      { value: "@", title: "Username only", text: "No password, SMS code or account login is requested — the stars go to the named account through Telegram's official mechanism." },
      { value: "0", title: "Hidden fees", text: "The final amount is on screen before the pay button — what you see is what you pay." },
      { value: "100%", title: "Refund if not delivered", text: "If the stars are not sent for a technical reason, the payment is refunded in full." },
      { value: "1", title: "One support channel", text: "Games and Stars are one team: @StarsPaymeeSupport answers by order number." },
    ],
    disclosure:
      "GemPay is an independent service, not an official Telegram partner. Stars are sent through Telegram's " +
      "official route and the balance shows in Telegram settings as usual. Stars and Premium are connected to " +
      "the GemPay Mini App through the StarsPaymee service — one ecosystem.",
  },
  faqTitle: "Telegram Stars — FAQ",
  faq: [
    { q: "Can I buy PUBG UC or Mobile Legends diamonds with Stars?", a: "No. Stars are Telegram's internal currency and do not convert into game currency. UC, diamonds, CP and the Steam wallet are topped up separately in the GemPay catalogue — same app, different section." },
    { q: "How much do 100 Telegram Stars cost?", a: `${card(100, "en")} by card transfer (${som(STARS_UNIT_CARD, "en")} each) or ${online(100, "en")} through Click or Uzum Bank (${som(STARS_UNIT_ONLINE, "en")} each). Any other amount scales the same way. The final sum is shown in the app before payment.` },
    { q: "What are the minimum and maximum?", a: `From ${STARS_MIN} to ${num(STARS_MAX).replace(" ", ",")} stars per order. Need more — place several orders.` },
    { q: "I have no @username — what then?", a: "Stars are sent by username only. Open Telegram settings, the Username item, and set one — it is free and takes a minute. Then enter that name in the app." },
    { q: "Can I gift Stars to a teammate?", a: "Yes. Enter their @username in the order, the app shows the profile — confirm. They do nothing; the stars land straight on their balance." },
    { q: "Why do card transfer and online payment cost differently?", a: "Online payment systems charge a fee per payment and it is included in the per-star price. A card transfer has no such fee, but the amount must be entered exactly as shown — that is how the payment is matched." },
    { q: "I paid but the stars did not arrive", a: "First check the amount: for a card transfer it must match the shown sum to the last tiyin. Wait 1-2 minutes, then open the order history in the app. If it is still unresolved, message @StarsPaymeeSupport with the receipt; a technical failure is refunded." },
    { q: "Can Stars be converted back into money?", a: "Not for a regular user: Telegram does not allow transferring Stars to another account or cashing them out. Buy the amount you need — any surplus goes to gifts or reactions." },
    { q: "Who sells Stars inside GemPay?", a: "Stars and Premium are connected to GemPay through the StarsPaymee service — one ecosystem, one support channel. Games are fulfilled by GemPay, Telegram services by StarsPaymee, and you never leave the Mini App." },
    { q: "Do I need a Visa or Mastercard?", a: "No. UzCard, HUMO, Click or Uzum Bank is enough. Unlike the official App Store and Google Play route, neither a foreign card nor an Apple ID balance is required." },
  ],
  guides: { eyebrow: "Read more", title: "Guides about Stars", slugs: STARS_GUIDES },
  cta: {
    title: "Get your stars now",
    lede: "@Gempayuz_bot → Telegram section → Stars. No sign-up, only a @username.",
    primary: "Buy Stars",
  },
};

// ========================================================= PREMIUM · en ====

const premiumEn: TgCopy = {
  metaTitle: "Buy Telegram Premium in So'm — 3, 6, 12 Months | GemPay",
  metaDescription:
    `Telegram Premium in Uzbekistan, paid in so'm: 3 months ${num(plan(3).price).replace(" ", ",")}, 6 months ` +
    `${num(plan(6).price).replace(" ", ",")}, 12 months ${num(plan(12).price).replace(" ", ",")} UZS. UzCard, HUMO, Click, Uzum Bank. Username only.`,
  keywords: [
    "buy telegram premium uzbekistan",
    "telegram premium price uzs",
    "telegram premium uzcard",
    "telegram premium without password",
    "telegram premium 12 months som",
  ],
  crumb: "Telegram Premium",
  eyebrow: "Telegram Premium",
  h1: "Buy Telegram Premium — in so'm, no password, in GemPay",
  lede:
    "The subscription is attached by @username through Telegram's official gift mechanism: no account " +
    "login, no password, no foreign card. 3, 6 or 12 months — the same price whichever way you pay.",
  badges: ["3 / 6 / 12 months", "Same price for every method", "Only a @username", "Via official Gift Premium"],
  appNote:
    "The Telegram section lives in the GemPay Mini App inside Telegram (@Gempayuz_bot). The Android app currently has only games and Steam.",
  answer:
    `To buy Telegram Premium through GemPay, open @Gempayuz_bot, choose Premium in the Telegram section, pick ` +
    `the term (3, 6 or 12 months) and enter a @username, then pay in so'm with UzCard, HUMO, Click or Uzum Bank. ` +
    `Prices: 3 months ${som(plan(3).price, "en")}, 6 months ${som(plan(6).price, "en")}, 12 months ` +
    `${som(plan(12).price, "en")}. The subscription activates seconds after the payment is confirmed.`,
  ctaPrimary: "Buy Premium",
  ctaPrices: "See prices",
  prices: {
    eyebrow: "Prices",
    title: "Telegram Premium price in Uzbekistan",
    lede: "The longer the term, the cheaper each month. No payment-method fee is added — a card transfer and Click cost the same.",
    cols: ["Term", "Per month, UZS", "Total, UZS"],
    unit: "mo.",
    popular: "Popular",
    best: "Best value",
    note:
      `GemPay offers 3, 6 and 12-month terms. On the annual plan a month is about ${SAVE_PCT}% cheaper ` +
      "than on the 3-month one. The table is a reference — the final amount is shown before payment. " +
      "For a card transfer the bot may lower the amount by up to 950 so'm to tell simultaneous payments apart — " +
      "send exactly the amount on screen.",
  },
  features: {
    eyebrow: "Benefits",
    title: "What does Premium give a gamer?",
    lede: "What the subscription unlocks — seen from game chats and channels.",
    items: [
      { icon: "film", title: "Gameplay up to 4 GB", text: "A single file up to 4 GB — a tournament recording or a long stream segment goes out uncompressed. Regular accounts are capped at 2 GB." },
      { icon: "zap", title: "Faster downloads", text: "Large videos and files from channels download without the speed limit." },
      { icon: "eye-off", title: "Ad-free channels", text: "Official ads disappear from game news and tournament channels." },
      { icon: "mic", title: "Voice to text", text: "Read a squad voice message as text mid-match, with the sound off." },
      { icon: "languages", title: "Chat translation", text: "English or Russian patch-note channels translate in one tap." },
      { icon: "sticker", title: "Status, stickers, emoji", text: "Premium stickers, an animated avatar and an emoji status — your profile looks the way it does in-game." },
    ],
  },
  steps: {
    eyebrow: "Guide",
    title: "How to buy Telegram Premium — 4 steps",
    lede: "Nobody logs into your account, no password needed.",
    items: [
      { title: "Open the Mini App", text: "In Telegram: @Gempayuz_bot → Open GemPay. The Telegram section is in this Mini App; the Android app currently has only games and Steam." },
      { title: "Choose Premium in the Telegram section", text: "Above the game list you will see Stars, Premium and Gift tiles — tap Premium." },
      { title: "Term and @username", text: "Pick 3, 6 or 12 months. Type your own @username or the one you are gifting to — the app shows the profile, so you check it right there." },
      { title: "Pay in so'm — the subscription switches on", text: "For a card transfer send exactly the amount shown; with Click or Uzum Bank the payment is confirmed in the app. Premium attaches within seconds and shows in Telegram settings." },
    ],
    cta: "Start now",
  },
  pay: {
    eyebrow: "Payment",
    title: "UzCard, HUMO, Click and Uzum Bank — one price",
    lede: "No gateway markup is added to Premium: whichever method you choose, you pay the amount from the table. For a card transfer enter the amount exactly; for online payment it is pre-filled.",
    methods: {
      uzcard: "A transfer to the shown card from your banking app — enter the amount exactly.",
      humo: "Same as UzCard: a transfer from any banking app, no currency conversion.",
      click: "The Click button in the app — amount pre-filled, confirmed automatically, no markup.",
      uzum: "Online payment in the Uzum Bank app, confirmed automatically, no markup.",
    },
    balance: "You can also pay from the bot balance — at the same price.",
    note: "No Visa or Mastercard, Apple ID balance or TON needed. The official routes — App Store, Google Play, Fragment — usually do not work with UzCard/HUMO; that is exactly the gap we close.",
  },
  trust: {
    eyebrow: "Guarantees",
    title: "Why through GemPay?",
    lede: "The rules for the subscription and your account",
    items: [
      { value: "@", title: "Username only", text: "The subscription is attached through Telegram's official Gift Premium mechanism. Login, password or SMS code is never requested." },
      { value: "=", title: "Same price for every method", text: "Card transfer, Click, Uzum Bank or balance — the amount is as in the table, no markup." },
      { value: "100%", title: "Refund if not activated", text: "If the subscription fails to attach for a technical reason, the payment is refunded in full." },
      { value: "1", title: "One support channel", text: "Games and Premium are one team: @StarsPaymeeSupport answers by order number." },
    ],
    disclosure:
      "GemPay is an independent service, not an official Telegram partner. Premium is attached to the account " +
      "you name through Telegram's official gift mechanism. Stars and Premium are connected to the GemPay Mini App " +
      "through the StarsPaymee service — one ecosystem.",
  },
  faqTitle: "Telegram Premium — FAQ",
  faq: [
    { q: "Which terms does GemPay offer? Is there a 1-month plan?", a: "GemPay has 3, 6 and 12-month plans — the shortest is 3 months. A one-month subscription is sold separately by StarsPaymee." },
    { q: "How is Premium attached — do you log into my account?", a: "No. The subscription is sent by @username through the official gift mechanism (Gift Premium). You share no code or password, and the subscription shows in Telegram settings as usual." },
    { q: "Is it more expensive through Click?", a: "No. Unlike Stars, the Premium price is the same for every method: card transfer, Click, Uzum Bank or the bot balance — the amount from the table." },
    { q: "How much does the annual plan save?", a: `On the annual plan a month costs ${monthly(12, "en")}, on the 3-month plan ${monthly(3, "en")} — about ${SAVE_PCT}% less. The 6-month plan sits in between at ${monthly(6, "en")} per month.` },
    { q: "Can I gift Premium to a friend?", a: "Yes. Enter their @username in the order — the subscription goes to them through Telegram's official gift mechanism, not to your account. They do nothing." },
    { q: "I already have Premium — does the new term stack?", a: "Yes, Telegram adds the gifted term on top of the current subscription. No need to wait for it to expire." },
    { q: "Does it auto-renew or charge my card?", a: "No. It is a one-time purchase: when the term ends the account returns to normal, with no automatic charges. Buy again whenever you like." },
    { q: "I paid but Premium did not activate", a: "First check the amount: for a card transfer it must match the shown sum exactly. Wait 1-2 minutes and restart Telegram. Then check the order history in the app or message @StarsPaymeeSupport with the receipt. A technical failure is refunded." },
    { q: "Does Premium give UC or diamonds in games?", a: "No, Premium is a Telegram subscription, not game currency. UC, diamonds, CP and the Steam wallet are topped up separately in the GemPay catalogue, in so'm." },
  ],
  guides: { eyebrow: "Read more", title: "Guides about Premium", slugs: PREMIUM_GUIDES },
  cta: {
    title: "Switch Premium on now",
    lede: "@Gempayuz_bot → Telegram section → Premium. No password, in so'm, within seconds.",
    primary: "Buy Premium",
  },
};

export const TG_CONTENT: Record<TgProduct, Record<Locale, TgCopy>> = {
  stars: { uz: starsUz, ru: starsRu, en: starsEn },
  premium: { uz: premiumUz, ru: premiumRu, en: premiumEn },
};

export function tgCopy(product: TgProduct, locale: Locale): TgCopy {
  return TG_CONTENT[product][locale];
}
