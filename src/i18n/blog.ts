// Blog content + UI strings for the Gempay blog (UZ / RU / EN).
// Each post is authored in all three languages and shares one slug, so the
// uz/ru/en versions hreflang-link cleanly. Pages read from here the same way
// the landing components read from copy.ts.

import { POSTS_NEW } from "./blog-posts-new";

export type BlogLang = "uz" | "ru" | "en";
export const BLOG_LANGS: BlogLang[] = ["uz", "ru", "en"];

export const blogBase = (lang: BlogLang) => (lang === "uz" ? "" : `/${lang}`);
export const blogIndexPath = (lang: BlogLang) => `${blogBase(lang)}/blog`;
export const postPath = (lang: BlogLang, slug: string) => `${blogBase(lang)}/blog/${slug}`;
export const homePath = (lang: BlogLang) => (lang === "en" ? "/en/blog" : blogBase(lang) || "/");

/** A single content block. Authored by key-presence for terse, readable data. */
export type Block =
  | { p: string }
  | { h2: string }
  | { h3: string }
  | { ul: string[] }
  | { quote: string };

export interface PostContent {
  title: string;
  description: string;
  excerpt: string;
  keywords: string;
  body: Block[];
}

export interface BlogPost {
  slug: string;
  date: string;       // ISO publish date
  readMins: number;
  accent: string;     // hex accent for the card
  tag: Record<BlogLang, string>;
  uz: PostContent;
  ru: PostContent;
  en: PostContent;
}

/** UI chrome strings for the blog header / footer / index, per language. */
export const BLOG_UI: Record<BlogLang, {
  langName: string;
  nav: { home: string; blog: string; play: string };
  indexLabel: string;
  indexTitle: string;
  indexSubtitle: string;
  minRead: string;
  readMore: string;
  published: string;
  related: string;
  backToBlog: string;
  ctaTitle: string;
  ctaText: string;
  ctaPlay: string;
  ctaDocs: string;
  tagline: string;
  rights: string;
  metaIndexTitle: string;
  metaIndexDesc: string;
}> = {
  uz: {
    langName: "O'zbekcha",
    nav: { home: "Bosh sahifa", blog: "Blog", play: "To'ldirish" },
    indexLabel: "Blog",
    indexTitle: "O'yin valyutalari: qo'llanma, narxlar va maslahatlar",
    indexSubtitle: "PUBG UC, Mobile Legends olmos, Free Fire va boshqa o'yin valyutalarini arzon, tez va xavfsiz to'ldirish bo'yicha qo'llanmalar — hammasi bir joyda.",
    minRead: "daqiqa o'qish",
    readMore: "O'qish",
    published: "Nashr qilingan",
    related: "O'xshash maqolalar",
    backToBlog: "Barcha maqolalar",
    ctaTitle: "O'qidingmi? Endi to'ldirib ko'r",
    ctaText: "Botni och, o'yiningni tanla va valyutani bir daqiqada hisobingga ol.",
    ctaPlay: "Telegram botni ochish",
    ctaDocs: "Developer API",
    tagline: "200+ o'yin uchun valyutani arzon va bir daqiqada to'ldirish xizmati.",
    rights: "Barcha huquqlar himoyalangan.",
    metaIndexTitle: "Blog — Gempay | O'yin valyutalari qo'llanma va narxlar",
    metaIndexDesc: "Gempay blogi: PUBG UC, Mobile Legends olmos, Free Fire va boshqa o'yin valyutalarini arzon va tez to'ldirish qo'llanmalari, Player ID, to'lov usullari va maslahatlar.",
  },
  ru: {
    langName: "Русский",
    nav: { home: "Главная", blog: "Блог", play: "Пополнить" },
    indexLabel: "Блог",
    indexTitle: "Игровая валюта: гайды, цены и советы",
    indexSubtitle: "Гайды по дешёвому, быстрому и безопасному пополнению PUBG UC, алмазов Mobile Legends, Free Fire и другой игровой валюты — всё в одном месте.",
    minRead: "мин чтения",
    readMore: "Читать",
    published: "Опубликовано",
    related: "Похожие статьи",
    backToBlog: "Все статьи",
    ctaTitle: "Прочитал? Теперь пополни",
    ctaText: "Открой бота, выбери игру и получи валюту на аккаунт за минуту.",
    ctaPlay: "Открыть Telegram-бота",
    ctaDocs: "Developer API",
    tagline: "Сервис пополнения игровой валюты для 200+ игр — дёшево и за минуту.",
    rights: "Все права защищены.",
    metaIndexTitle: "Блог — Gempay | Гайды и цены по игровой валюте",
    metaIndexDesc: "Блог Gempay: гайды по дешёвому и быстрому пополнению PUBG UC, алмазов Mobile Legends, Free Fire и другой игровой валюты, Player ID, способы оплаты и советы.",
  },
  en: {
    langName: "English",
    nav: { home: "Home", blog: "Blog", play: "Top up" },
    indexLabel: "Blog",
    indexTitle: "Game currency: guides, prices and tips",
    indexSubtitle: "Guides on topping up PUBG UC, Mobile Legends diamonds, Free Fire and other game currency cheaply, quickly and safely — all in one place.",
    minRead: "min read",
    readMore: "Read",
    published: "Published",
    related: "Related articles",
    backToBlog: "All articles",
    ctaTitle: "Done reading? Now top up",
    ctaText: "Open the bot, pick your game and get the currency on your account in a minute.",
    ctaPlay: "Open the Telegram bot",
    ctaDocs: "Developer API",
    tagline: "A service that tops up game currency for 200+ games — cheap and in a minute.",
    rights: "All rights reserved.",
    metaIndexTitle: "Blog — Gempay | Game currency guides and prices",
    metaIndexDesc: "The Gempay blog: guides on topping up PUBG UC, Mobile Legends diamonds, Free Fire and other game currency cheaply and fast, Player ID, payment methods and tips.",
  },
};

export const POSTS: BlogPost[] = [
  // ── 1. PUBG UC ──────────────────────────────────────────────────────────
  {
    slug: "pubg-mobile-uc-arzon",
    date: "2026-06-10",
    readMins: 7,
    accent: "#F2A900",
    tag: { uz: "PUBG UC", ru: "PUBG UC", en: "PUBG UC" },
    uz: {
      title: "PUBG Mobile UC ni arzon va tez sotib olish — to'liq qo'llanma",
      description: "PUBG Mobile UC ni arzon va xavfsiz sotib olish: UC nima, narxi qancha, Player ID qayerdan olinadi va Gempay orqali bir daqiqada to'ldirish bo'yicha 2026 qo'llanma.",
      excerpt: "PUBG UC kerakmi-yu, qimmat va sekin to'ldirishdan charchadingizmi? UC nima, qanchaga arzon olish mumkin va akkauntingizga bir daqiqada qanday yetkazish — hammasi shu yerda.",
      keywords: "pubg uc, pubg uc arzon, pubg uc sotib olish, pubg mobile uc to'ldirish, pubg uc narxi, pubg uc id orqali, uc arzon olish, pubg mobile top up, pubg uc o'zbekiston, buy pubg uc cheap",
      body: [
        { p: "PUBG Mobile'da Royale Pass, kiyim-kechak yoki qurol skinlari — deyarli hammasi UC (Unknown Cash) orqali olinadi. Lekin ko'pchilik o'yinchilar UC ni o'yin ichidagi rasmiy do'kondan, eng qimmat kursda sotib oladi. Aslida UC ni ancha arzonroq va xuddi shunday tez to'ldirish mumkin. Bu qo'llanmada UC nima ekani, qanchaga turishi va Gempay orqali bir daqiqada qanday olishni ko'rsatamiz." },
        { h2: "PUBG UC nima?" },
        { p: "UC — bu PUBG Mobile'ning ichki valyutasi. U bilan Royale Pass (RP), UC Crate, kostyumlar, qurol skinlari va boshqa narsalar sotib olinadi. UC akkauntingizga Player ID orqali biriktiriladi, ya'ni qaysi qurilmada o'ynamang, balans saqlanib qoladi." },
        { h2: "PUBG UC qancha turadi va qayerda arzon?" },
        { p: "O'yin ichidagi do'konda UC eng qimmat kursda sotiladi, chunki Google va Apple o'z komissiyasini qo'shadi. Tashqi to'ldirish xizmatlari esa UC ni to'g'ridan-to'g'ri Player ID orqali yetkazadi va ancha past narx taklif qiladi. Asosiy farqlar:" },
        { ul: [
          "Rasmiy do'kon: eng qimmat, lekin darhol — store komissiyasi narxga qo'shiladi.",
          "Tashqi to'ldirish (Gempay kabi): tannarxga yaqin kurs, ID orqali bir daqiqada yetkaziladi.",
          "Shubhali arzon takliflar: juda past narx, lekin akkaunt xavfsizligi va yetkazib berish kafolatsiz — ehtiyot bo'ling.",
        ] },
        { p: "Gempay UC narxini tannarxga eng yaqin kursda hisoblaydi va ortiqcha komissiya qo'shmaydi — shuning uchun bozordagi eng arzon variantlardan biri bo'ladi. Aniq narxni har bir UC paketi yonida botda ko'rasiz." },
        { h2: "Player ID ni qayerdan olaman?" },
        { p: "UC ni ID orqali to'ldirish uchun PUBG Mobile Player ID (Character ID) kerak. Uni topish oson:" },
        { ul: [
          "PUBG Mobile'ni oching va asosiy ekranda profilingizni bosing.",
          "Profil oynasida ismingiz tagida raqamli ID ko'rsatiladi (masalan 5XXXXXXXXX).",
          "Shu raqamni nusxalab oling — to'ldirishda aynan shu ID kerak bo'ladi.",
        ] },
        { quote: "ID orqali to'ldirishda login yoki parol so'ralmaydi. Hech kimga akkaunt parolingizni bermang — faqat ochiq Player ID yetarli." },
        { h2: "Gempay orqali UC ni qanday to'ldiraman?" },
        { p: "Jarayon uch qadamdan iborat va bir daqiqadan kam vaqt oladi:" },
        { ul: [
          "Telegram'da Gempay botini oching va o'yinlar ro'yxatidan PUBG Mobile'ni tanlang.",
          "Kerakli UC paketini (60, 325, 660, 1800 UC va h.k.) tanlang va Player ID'ni kiriting.",
          "Payme, Click yoki karta bilan to'lang — UC odatda bir daqiqada akkauntingizga tushadi.",
        ] },
        { h2: "UC to'ldirishda xavfsizlik" },
        { p: "Ishonchli to'ldirish bir necha oddiy qoidaga amal qilishni talab qiladi: hech qachon akkaunt login/parolingizni bermang, faqat Player ID orqali to'ldiring, har bir buyurtma uchun chek va holatni kuzating. Gempay'da har bir buyurtma kuzatiladi va valyuta yetkazib berilmasa, to'lov qaytariladi." },
        { h2: "Tez-tez beriladigan savollar" },
        { h3: "UC qancha vaqtda keladi?" },
        { p: "Odatda to'lovdan so'ng bir daqiqa ichida. Kamdan-kam hollarda provayder tomonida kechikish bo'lsa, holatni botdan kuzatasiz." },
        { h3: "Ban xavfi bormi?" },
        { p: "ID orqali rasmiy yetkazib berishda akkauntga xavf yo'q, chunki login ma'lumotlari umuman ishlatilmaydi." },
        { p: "Qisqasi: PUBG UC ni rasmiy do'kondan qimmatga olishning hojati yo'q. Gempay orqali xuddi shu UC ni arzonroq narxda va bir daqiqada to'ldiring." },
      ],
    },
    ru: {
      title: "Как купить PUBG Mobile UC дёшево и быстро — полный гайд",
      description: "Как купить PUBG Mobile UC дёшево и безопасно: что такое UC, сколько стоит, где взять Player ID и как пополнить через Gempay за минуту. Гайд 2026.",
      excerpt: "Нужны UC, а пополнять дорого и долго надоело? Что такое UC, как купить дёшево и как доставить на аккаунт за минуту — всё здесь.",
      keywords: "pubg uc, пубг юси дёшево, купить uc pubg, пополнить uc pubg mobile, цена uc pubg, uc по id, купить uc дёшево, pubg mobile top up, pubg uc узбекистан, buy pubg uc cheap",
      body: [
        { p: "В PUBG Mobile почти всё — Royale Pass, костюмы, скины оружия — покупается за UC (Unknown Cash). Но большинство игроков берут UC во внутриигровом магазине по самому дорогому курсу. На деле UC можно пополнить заметно дешевле и так же быстро. В этом гайде разберём, что такое UC, сколько он стоит и как получить его через Gempay за минуту." },
        { h2: "Что такое UC в PUBG?" },
        { p: "UC — внутренняя валюта PUBG Mobile. За неё покупают Royale Pass (RP), UC Crate, костюмы, скины оружия и многое другое. UC привязывается к аккаунту по Player ID, поэтому баланс сохраняется на любом устройстве." },
        { h2: "Сколько стоит UC и где дешевле?" },
        { p: "Во внутриигровом магазине UC дороже всего, потому что Google и Apple добавляют свою комиссию. Внешние сервисы пополнения доставляют UC напрямую по Player ID и предлагают цену заметно ниже. Основные различия:" },
        { ul: [
          "Официальный магазин: дороже всего, но мгновенно — комиссия стора в цене.",
          "Внешнее пополнение (как Gempay): курс близко к себестоимости, доставка по ID за минуту.",
          "Подозрительно дешёвые предложения: очень низкая цена, но без гарантий безопасности и доставки — будьте осторожны.",
        ] },
        { p: "Gempay считает цену UC по курсу, максимально близкому к себестоимости, без лишних комиссий — поэтому это один из самых дешёвых вариантов на рынке. Точную цену видно рядом с каждым пакетом UC в боте." },
        { h2: "Где взять Player ID?" },
        { p: "Чтобы пополнить UC по ID, нужен PUBG Mobile Player ID (Character ID). Найти его легко:" },
        { ul: [
          "Откройте PUBG Mobile и нажмите на профиль на главном экране.",
          "В окне профиля под ником показан числовой ID (например 5XXXXXXXXX).",
          "Скопируйте этот номер — именно он нужен при пополнении.",
        ] },
        { quote: "При пополнении по ID логин и пароль не запрашиваются. Никому не давайте пароль от аккаунта — достаточно открытого Player ID." },
        { h2: "Как пополнить UC через Gempay?" },
        { p: "Процесс из трёх шагов и занимает меньше минуты:" },
        { ul: [
          "Откройте бота Gempay в Telegram и выберите PUBG Mobile из списка игр.",
          "Выберите нужный пакет UC (60, 325, 660, 1800 UC и т.д.) и введите Player ID.",
          "Оплатите через Payme, Click или картой — UC обычно приходит на аккаунт за минуту.",
        ] },
        { h2: "Безопасность при пополнении UC" },
        { p: "Надёжное пополнение требует пары простых правил: никогда не передавайте логин/пароль, пополняйте только по Player ID, сохраняйте чек и следите за статусом заказа. В Gempay каждый заказ отслеживается, и если валюта не доставлена — оплата возвращается." },
        { h2: "Частые вопросы" },
        { h3: "За сколько приходят UC?" },
        { p: "Обычно в течение минуты после оплаты. В редких случаях задержки на стороне провайдера статус виден прямо в боте." },
        { h3: "Есть ли риск бана?" },
        { p: "При официальной доставке по ID риска для аккаунта нет, так как данные входа вообще не используются." },
        { p: "Коротко: переплачивать за UC в официальном магазине не нужно. Пополняйте те же UC через Gempay дешевле и за минуту." },
      ],
    },
    en: {
      title: "How to Buy PUBG Mobile UC Cheap and Fast — Full Guide",
      description: "How to buy PUBG Mobile UC cheaply and safely: what UC is, how much it costs, where to find your Player ID and how to top up via Gempay in a minute. 2026 guide.",
      excerpt: "Need UC but tired of paying too much and waiting? What UC is, how to buy it cheap, and how to deliver it to your account in a minute — it's all here.",
      keywords: "pubg uc, buy pubg uc cheap, pubg mobile uc top up, pubg uc price, pubg uc by id, cheap uc, pubg mobile top up, pubg uc uzbekistan",
      body: [
        { p: "In PUBG Mobile almost everything — the Royale Pass, outfits, weapon skins — is bought with UC (Unknown Cash). Yet most players buy UC in the in-game store at the most expensive rate. In reality you can top up UC noticeably cheaper and just as fast. This guide covers what UC is, how much it costs, and how to get it via Gempay in a minute." },
        { h2: "What is UC in PUBG?" },
        { p: "UC is PUBG Mobile's in-game currency. It buys the Royale Pass (RP), UC Crates, outfits, weapon skins and more. UC is tied to your account by Player ID, so your balance follows you on any device." },
        { h2: "How much does UC cost and where is it cheaper?" },
        { p: "In the in-game store UC is the most expensive because Google and Apple add their own cut. External top-up services deliver UC directly by Player ID and offer a noticeably lower price. The key differences:" },
        { ul: [
          "Official store: most expensive but instant — the store fee is baked into the price.",
          "External top-up (like Gempay): a rate close to cost, delivered by ID in a minute.",
          "Suspiciously cheap offers: very low price but no safety or delivery guarantee — be careful.",
        ] },
        { p: "Gempay prices UC at a rate close to cost with no extra commission — making it one of the cheapest options around. You see the exact price next to each UC pack in the bot." },
        { h2: "Where do I find my Player ID?" },
        { p: "To top up UC by ID you need your PUBG Mobile Player ID (Character ID). It's easy to find:" },
        { ul: [
          "Open PUBG Mobile and tap your profile on the main screen.",
          "In the profile window your numeric ID is shown under your nickname (e.g. 5XXXXXXXXX).",
          "Copy that number — it's exactly what you'll need to top up.",
        ] },
        { quote: "Topping up by ID never asks for a login or password. Never share your account password — your public Player ID is enough." },
        { h2: "How do I top up UC via Gempay?" },
        { p: "The process is three steps and takes under a minute:" },
        { ul: [
          "Open the Gempay bot in Telegram and pick PUBG Mobile from the game list.",
          "Choose the UC pack you want (60, 325, 660, 1800 UC, etc.) and enter your Player ID.",
          "Pay with Payme, Click or a card — UC usually reaches your account in a minute.",
        ] },
        { h2: "Staying safe when topping up UC" },
        { p: "Reliable top-ups come down to a few simple rules: never hand over your login/password, top up only by Player ID, and keep the receipt and order status. With Gempay every order is tracked, and if the currency isn't delivered, your payment is refunded." },
        { h2: "Frequently asked questions" },
        { h3: "How fast does UC arrive?" },
        { p: "Usually within a minute of payment. In the rare case of a provider-side delay, you can track the status right in the bot." },
        { h3: "Is there a ban risk?" },
        { p: "With official delivery by ID there is no risk to your account, because login details are never used." },
        { p: "In short: there's no need to overpay for UC in the official store. Top up the same UC via Gempay cheaper and in a minute." },
      ],
    },
  },

  // ── 2. Mobile Legends diamonds ──────────────────────────────────────────
  {
    slug: "mobile-legends-olmos-toldirish",
    date: "2026-06-14",
    readMins: 6,
    accent: "#3B82F6",
    tag: { uz: "Mobile Legends", ru: "Mobile Legends", en: "Mobile Legends" },
    uz: {
      title: "Mobile Legends olmos to'ldirish: ID, server va arzon narxlar",
      description: "Mobile Legends olmos (diamonds) ni arzon to'ldirish: User ID va Zone ID qayerdan olinadi, narxlar qanday va Gempay orqali bir daqiqada qanday to'ldirish.",
      excerpt: "Mobile Legends'da olmos kerakmi? User ID va Zone ID ni qayerdan olish, qanchaga arzon to'ldirish va skin yoki Starlight'ni bir daqiqada olish — to'liq qo'llanma.",
      keywords: "mobile legends olmos, ml olmos to'ldirish, mobile legends olmos arzon, mobile legends diamond, ml diamond to'ldirish, mobile legends id va zone id, mobile legends top up, ml olmos narxi, mobile legends diamonds uzbekistan",
      body: [
        { p: "Mobile Legends: Bang Bang'da olmos (diamonds) — eng muhim valyuta. U bilan yangi qahramonlar, skinlar, Starlight a'zoligi va Magic Wheel aylantirishlari olinadi. Olmosni o'yin ichida olish qimmat tushadi, lekin User ID orqali to'ldirsangiz, ancha arzonga olasiz. Quyida hammasini tushuntiramiz." },
        { h2: "Mobile Legends olmosi nima uchun kerak?" },
        { p: "Olmos — ML'ning premium valyutasi. Asosiy ishlatilishi:" },
        { ul: [
          "Yangi qahramon va premium skinlar sotib olish.",
          "Starlight Member va Twilight Pass a'zoligi.",
          "Magic Wheel, Lucky Spin va boshqa eventlarda qatnashish.",
        ] },
        { h2: "User ID va Zone ID ni qayerdan olaman?" },
        { p: "Mobile Legends'ni to'ldirish uchun ikkita raqam kerak: User ID va Zone ID. Ularni topish oson:" },
        { ul: [
          "O'yinni oching va chap yuqoridagi profil avataringizni bosing.",
          "Ismingiz tagida ikki raqam ko'rasiz, masalan: 12345678 (1234).",
          "Birinchisi — User ID, qavs ichidagisi — Zone ID. To'ldirishda ikkalasini ham kiriting.",
        ] },
        { quote: "Zone ID ni unutmang — faqat User ID bilan olmos noto'g'ri akkauntga tushishi mumkin. Har doim ikkala raqamni tekshiring." },
        { h2: "Olmos qancha turadi va qayerda arzon?" },
        { p: "O'yin ichidagi do'konda olmos store komissiyasi bilan sotiladi, shuning uchun qimmat. Gempay esa olmosni to'g'ridan-to'g'ri ID orqali yetkazadi va tannarxga yaqin kursda taklif qiladi. Double Diamond aksiyasi (birinchi to'ldirishga bonus) ham odatda ID orqali to'ldirishda saqlanib qoladi." },
        { h2: "Gempay orqali olmos to'ldirish — 3 qadam" },
        { ul: [
          "Gempay botini oching va Mobile Legends'ni tanlang.",
          "Olmos paketini tanlang (86, 172, 257, 706 olmos va h.k.), User ID va Zone ID ni kiriting.",
          "Payme, Click yoki karta bilan to'lang — olmos bir daqiqada hisobingizga tushadi.",
        ] },
        { h2: "Maslahatlar" },
        { ul: [
          "Birinchi marta to'ldirayotgan bo'lsangiz, Double Diamond bonusi bor paketni tanlang.",
          "Katta paketlar odatda har bir olmos uchun arzonroq tushadi.",
          "ID va Zone ID ni kiritishdan oldin ikki marta tekshiring.",
        ] },
        { h2: "Xulosa" },
        { p: "Mobile Legends olmosini qimmat narxda o'yin do'konidan olishning hojati yo'q. User ID va Zone ID ni tayyorlab, Gempay orqali arzonroq narxda va bir daqiqada to'ldiring — skin va Starlight sizni kutmoqda." },
      ],
    },
    ru: {
      title: "Пополнение алмазов Mobile Legends: ID, сервер и низкие цены",
      description: "Как дёшево пополнить алмазы Mobile Legends: где взять User ID и Zone ID, какие цены и как пополнить через Gempay за минуту.",
      excerpt: "Нужны алмазы в Mobile Legends? Где взять User ID и Zone ID, как пополнить дёшево и получить скин или Starlight за минуту — полный гайд.",
      keywords: "mobile legends алмазы, алмазы мобайл легендс, пополнить алмазы ml, mobile legends diamond, пополнение алмазов ml, mobile legends id и zone id, mobile legends top up, цена алмазов ml, mobile legends diamonds узбекистан",
      body: [
        { p: "В Mobile Legends: Bang Bang алмазы (diamonds) — главная валюта. За них берут новых героев, скины, подписку Starlight и прокрутки Magic Wheel. Во внутриигровом магазине алмазы дороги, но если пополнять по User ID, выходит заметно дешевле. Ниже разбираем всё по шагам." },
        { h2: "Зачем нужны алмазы в Mobile Legends?" },
        { p: "Алмазы — премиум-валюта ML. Основное применение:" },
        { ul: [
          "Покупка новых героев и премиум-скинов.",
          "Подписки Starlight Member и Twilight Pass.",
          "Участие в Magic Wheel, Lucky Spin и других ивентах.",
        ] },
        { h2: "Где взять User ID и Zone ID?" },
        { p: "Для пополнения Mobile Legends нужны два числа: User ID и Zone ID. Найти их легко:" },
        { ul: [
          "Откройте игру и нажмите на аватар профиля в левом верхнем углу.",
          "Под ником вы увидите два числа, например: 12345678 (1234).",
          "Первое — User ID, в скобках — Zone ID. При пополнении вводите оба.",
        ] },
        { quote: "Не забывайте Zone ID — только с User ID алмазы могут уйти не на тот аккаунт. Всегда проверяйте оба числа." },
        { h2: "Сколько стоят алмазы и где дешевле?" },
        { p: "Во внутриигровом магазине алмазы продаются с комиссией стора, поэтому дороже. Gempay доставляет алмазы напрямую по ID и предлагает курс близко к себестоимости. Акция Double Diamond (бонус за первое пополнение) обычно сохраняется и при пополнении по ID." },
        { h2: "Пополнение алмазов через Gempay — 3 шага" },
        { ul: [
          "Откройте бота Gempay и выберите Mobile Legends.",
          "Выберите пакет алмазов (86, 172, 257, 706 и т.д.), введите User ID и Zone ID.",
          "Оплатите через Payme, Click или картой — алмазы придут на аккаунт за минуту.",
        ] },
        { h2: "Советы" },
        { ul: [
          "Если пополняете впервые, выберите пакет с бонусом Double Diamond.",
          "Крупные пакеты обычно дешевле в пересчёте на один алмаз.",
          "Дважды проверьте ID и Zone ID перед вводом.",
        ] },
        { h2: "Вывод" },
        { p: "Не нужно переплачивать за алмазы Mobile Legends в игровом магазине. Подготовьте User ID и Zone ID и пополняйте через Gempay дешевле и за минуту — скины и Starlight уже ждут." },
      ],
    },
    en: {
      title: "Topping Up Mobile Legends Diamonds: ID, Server and Low Prices",
      description: "How to top up Mobile Legends diamonds cheaply: where to find your User ID and Zone ID, what the prices are and how to top up via Gempay in a minute.",
      excerpt: "Need diamonds in Mobile Legends? Where to find your User ID and Zone ID, how to top up cheaply and grab a skin or Starlight in a minute — a full guide.",
      keywords: "mobile legends diamonds, top up ml diamonds, mobile legends diamond cheap, mobile legends id and zone id, mobile legends top up, ml diamond price",
      body: [
        { p: "In Mobile Legends: Bang Bang diamonds are the main currency. They buy new heroes, skins, the Starlight membership and Magic Wheel spins. Diamonds are expensive in the in-game store, but topping up by User ID is noticeably cheaper. Below we break it all down step by step." },
        { h2: "What are diamonds used for in Mobile Legends?" },
        { p: "Diamonds are ML's premium currency. The main uses:" },
        { ul: [
          "Buying new heroes and premium skins.",
          "Starlight Member and Twilight Pass subscriptions.",
          "Joining Magic Wheel, Lucky Spin and other events.",
        ] },
        { h2: "Where do I find my User ID and Zone ID?" },
        { p: "To top up Mobile Legends you need two numbers: a User ID and a Zone ID. They're easy to find:" },
        { ul: [
          "Open the game and tap your profile avatar in the top-left corner.",
          "Under your nickname you'll see two numbers, e.g. 12345678 (1234).",
          "The first is the User ID, the one in brackets is the Zone ID. Enter both when topping up.",
        ] },
        { quote: "Don't forget the Zone ID — with the User ID alone, diamonds can go to the wrong account. Always double-check both numbers." },
        { h2: "How much do diamonds cost and where is it cheaper?" },
        { p: "In the in-game store diamonds carry the store's fee, so they cost more. Gempay delivers diamonds directly by ID at a rate close to cost. The Double Diamond promo (a bonus on your first top-up) usually still applies when topping up by ID." },
        { h2: "Topping up diamonds via Gempay — 3 steps" },
        { ul: [
          "Open the Gempay bot and pick Mobile Legends.",
          "Choose a diamond pack (86, 172, 257, 706, etc.), enter your User ID and Zone ID.",
          "Pay with Payme, Click or a card — diamonds reach your account in a minute.",
        ] },
        { h2: "Tips" },
        { ul: [
          "If it's your first top-up, pick a pack with the Double Diamond bonus.",
          "Larger packs are usually cheaper per diamond.",
          "Double-check the ID and Zone ID before submitting.",
        ] },
        { h2: "Conclusion" },
        { p: "There's no need to overpay for Mobile Legends diamonds in the game store. Have your User ID and Zone ID ready and top up via Gempay cheaper and in a minute — skins and Starlight are waiting." },
      ],
    },
  },

  // ── 3. Free Fire diamonds ───────────────────────────────────────────────
  {
    slug: "free-fire-olmos-arzon",
    date: "2026-06-18",
    readMins: 6,
    accent: "#FB7233",
    tag: { uz: "Free Fire", ru: "Free Fire", en: "Free Fire" },
    uz: {
      title: "Free Fire olmoslarini arzon to'ldirish: 2026 qo'llanma",
      description: "Free Fire olmos (diamonds) ni arzon va tez to'ldirish: Player ID qayerdan olinadi, narxlar va Gempay orqali bir daqiqada to'ldirish bo'yicha to'liq qo'llanma.",
      excerpt: "Free Fire'da olmos kerakmi? Player ID ni qayerdan topish, qanchaga arzon to'ldirish va Elite Pass yoki bundle'ni bir daqiqada olish — hammasi shu maqolada.",
      keywords: "free fire olmos, free fire olmos to'ldirish, free fire olmos arzon, free fire diamond, ff olmos to'ldirish, free fire player id, free fire top up, free fire diamonds narxi, free fire diamonds uzbekistan",
      body: [
        { p: "Free Fire'da olmos (diamonds) — Elite Pass, qahramonlar, kostyumlar va qurol skinlarini olish uchun kerak bo'lgan asosiy valyuta. Ko'pchilik uni o'yin do'konidan qimmat narxda oladi, lekin Player ID orqali to'ldirsangiz, xuddi shu olmosni arzonroq olasiz. Mana to'liq qo'llanma." },
        { h2: "Free Fire olmosi nimaga ishlatiladi?" },
        { ul: [
          "Elite Pass va a'zolik (Weekly/Monthly Membership) sotib olish.",
          "Qahramonlar, kostyumlar va qurol skinlari.",
          "Luck Royale, Faded Wheel va boshqa eventlarda qatnashish.",
        ] },
        { h2: "Free Fire Player ID ni qayerdan olaman?" },
        { p: "To'ldirish uchun Player ID kerak — uni topish juda oson:" },
        { ul: [
          "Free Fire'ni oching va chap yuqoridagi profil avataringizni bosing.",
          "Profil oynasida 'Player ID' yonida raqam ko'rsatiladi.",
          "Shu raqamni nusxalang — to'ldirishda aynan shu ID kiritiladi.",
        ] },
        { quote: "Player ID ochiq ma'lumot — uni berishdan qo'rqmang. Lekin parol yoki tasdiqlash kodini hech kimga bermang." },
        { h2: "Olmos qancha turadi va qayerda arzon?" },
        { p: "O'yin ichidagi do'konda olmos store komissiyasi bilan sotiladi. Gempay esa olmosni ID orqali to'g'ridan-to'g'ri yetkazadi va tannarxga yaqin, eng arzon narxlardan birini taklif qiladi. Aniq narxni har bir paket yonida botda ko'rasiz." },
        { h2: "Gempay orqali Free Fire to'ldirish — 3 qadam" },
        { ul: [
          "Gempay botini oching va Free Fire'ni tanlang.",
          "Olmos paketini tanlang (100, 310, 520, 1060 olmos va h.k.) va Player ID'ni kiriting.",
          "Payme, Click yoki karta bilan to'lang — olmos bir daqiqada hisobingizga tushadi.",
        ] },
        { h2: "Tez-tez beriladigan savollar" },
        { h3: "Olmos qancha vaqtda keladi?" },
        { p: "Odatda to'lovdan keyin bir daqiqa ichida hisobingizga tushadi." },
        { h3: "Akkauntga xavf bormi?" },
        { p: "Yo'q. ID orqali to'ldirishda login va parol ishlatilmaydi, shuning uchun akkauntingiz xavfsiz." },
        { h2: "Xulosa" },
        { p: "Free Fire olmosini qimmatga olishning hojati yo'q. Player ID'ni tayyorlab, Gempay orqali arzon va bir daqiqada to'ldiring — Elite Pass va yangi bundle sizni kutmoqda." },
      ],
    },
    ru: {
      title: "Как дёшево пополнить алмазы Free Fire: гайд 2026",
      description: "Как дёшево и быстро пополнить алмазы Free Fire: где взять Player ID, какие цены и как пополнить через Gempay за минуту. Полный гайд.",
      excerpt: "Нужны алмазы в Free Fire? Где найти Player ID, как пополнить дёшево и получить Elite Pass или бандл за минуту — всё в этой статье.",
      keywords: "free fire алмазы, пополнить алмазы free fire, free fire алмазы дёшево, free fire diamond, ff алмазы, free fire player id, free fire top up, цена алмазов free fire, free fire diamonds узбекистан",
      body: [
        { p: "В Free Fire алмазы (diamonds) — главная валюта для Elite Pass, героев, костюмов и скинов оружия. Многие берут их в игровом магазине по высокой цене, но при пополнении по Player ID те же алмазы выходят дешевле. Вот полный гайд." },
        { h2: "Зачем нужны алмазы в Free Fire?" },
        { ul: [
          "Покупка Elite Pass и подписок (Weekly/Monthly Membership).",
          "Герои, костюмы и скины оружия.",
          "Участие в Luck Royale, Faded Wheel и других ивентах.",
        ] },
        { h2: "Где взять Player ID в Free Fire?" },
        { p: "Для пополнения нужен Player ID — найти его очень легко:" },
        { ul: [
          "Откройте Free Fire и нажмите на аватар профиля слева вверху.",
          "В окне профиля рядом с 'Player ID' показан номер.",
          "Скопируйте этот номер — именно его вводят при пополнении.",
        ] },
        { quote: "Player ID — открытые данные, делиться им не страшно. Но пароль или код подтверждения не давайте никому." },
        { h2: "Сколько стоят алмазы и где дешевле?" },
        { p: "Во внутриигровом магазине алмазы идут с комиссией стора. Gempay доставляет алмазы напрямую по ID и предлагает курс близко к себестоимости — одну из самых низких цен. Точную цену видно рядом с каждым пакетом в боте." },
        { h2: "Пополнение Free Fire через Gempay — 3 шага" },
        { ul: [
          "Откройте бота Gempay и выберите Free Fire.",
          "Выберите пакет алмазов (100, 310, 520, 1060 и т.д.) и введите Player ID.",
          "Оплатите через Payme, Click или картой — алмазы придут на аккаунт за минуту.",
        ] },
        { h2: "Частые вопросы" },
        { h3: "За сколько приходят алмазы?" },
        { p: "Обычно в течение минуты после оплаты." },
        { h3: "Есть ли риск для аккаунта?" },
        { p: "Нет. При пополнении по ID логин и пароль не используются, поэтому аккаунт в безопасности." },
        { h2: "Вывод" },
        { p: "Переплачивать за алмазы Free Fire не нужно. Подготовьте Player ID и пополняйте через Gempay дёшево и за минуту — Elite Pass и новые бандлы уже ждут." },
      ],
    },
    en: {
      title: "How to Top Up Free Fire Diamonds Cheaply: 2026 Guide",
      description: "How to top up Free Fire diamonds cheaply and fast: where to find your Player ID, what the prices are and how to top up via Gempay in a minute. Full guide.",
      excerpt: "Need diamonds in Free Fire? Where to find your Player ID, how to top up cheaply and grab the Elite Pass or a bundle in a minute — it's all in this article.",
      keywords: "free fire diamonds, top up free fire diamonds, free fire diamonds cheap, free fire diamond, ff diamonds, free fire player id, free fire top up, free fire diamonds price",
      body: [
        { p: "In Free Fire diamonds are the main currency for the Elite Pass, characters, outfits and weapon skins. Many players buy them in the in-game store at a high price, but topping up by Player ID gets you the same diamonds cheaper. Here's the full guide." },
        { h2: "What are diamonds used for in Free Fire?" },
        { ul: [
          "Buying the Elite Pass and memberships (Weekly/Monthly).",
          "Characters, outfits and weapon skins.",
          "Joining Luck Royale, the Faded Wheel and other events.",
        ] },
        { h2: "Where do I find my Free Fire Player ID?" },
        { p: "Topping up needs a Player ID — and it's very easy to find:" },
        { ul: [
          "Open Free Fire and tap your profile avatar in the top-left.",
          "In the profile window a number is shown next to 'Player ID'.",
          "Copy that number — it's exactly what you enter when topping up.",
        ] },
        { quote: "Your Player ID is public — there's no harm in sharing it. But never give anyone your password or a verification code." },
        { h2: "How much do diamonds cost and where is it cheaper?" },
        { p: "In the in-game store diamonds carry the store's fee. Gempay delivers diamonds directly by ID at a rate close to cost — one of the lowest prices around. You see the exact price next to each pack in the bot." },
        { h2: "Topping up Free Fire via Gempay — 3 steps" },
        { ul: [
          "Open the Gempay bot and pick Free Fire.",
          "Choose a diamond pack (100, 310, 520, 1060, etc.) and enter your Player ID.",
          "Pay with Payme, Click or a card — diamonds reach your account in a minute.",
        ] },
        { h2: "Frequently asked questions" },
        { h3: "How fast do diamonds arrive?" },
        { p: "Usually within a minute of payment." },
        { h3: "Is there any risk to my account?" },
        { p: "No. Topping up by ID never uses your login or password, so your account stays safe." },
        { h2: "Conclusion" },
        { p: "There's no need to overpay for Free Fire diamonds. Have your Player ID ready and top up via Gempay cheaply and in a minute — the Elite Pass and new bundles are waiting." },
      ],
    },
  },

  // ── 4. Where to buy game currency ───────────────────────────────────────
  {
    slug: "oyin-valyutasi-qayerdan-arzon",
    date: "2026-06-22",
    readMins: 7,
    accent: "#7C5CFF",
    tag: { uz: "Qo'llanma", ru: "Гайд", en: "Guide" },
    uz: {
      title: "O'yin valyutasini qayerdan arzon va xavfsiz olish kerak?",
      description: "O'yin valyutasini (UC, olmos, gold) qayerdan arzon va xavfsiz olish: do'kon, tashqi xizmatlar va Gempay'ni solishtirish, narx hamda firibgarlikdan saqlanish.",
      excerpt: "Nega o'yin do'koni qimmat? Tashqi to'ldirish xavfsizmi? O'yin valyutasini eng arzon va ishonchli olishning yo'llari va firibgarlikdan saqlanish bo'yicha qo'llanma.",
      keywords: "o'yin valyutasi arzon, o'yin valyutasini qayerdan olish, o'yin pulini arzon to'ldirish, o'yin valyutasi xavfsiz, top up xavfsiz, o'yin valyutasi firibgarlik, o'yin valyutasi o'zbekiston, игровая валюта дёшево безопасно",
      body: [
        { p: "PUBG UC, Mobile Legends olmos, Free Fire diamond yoki Standoff 2 gold — qaysi o'yinni o'ynamang, ertami-kechmi valyuta to'ldirish kerak bo'ladi. Savol shu: uni qayerdan olgan ma'qul — o'yin do'konidan, tashqi xizmatdan yoki 'arzon' deb reklama qilinadigan noma'lum sotuvchidan? Keling, hammasini solishtiramiz." },
        { h2: "1. O'yin ichidagi rasmiy do'kon" },
        { p: "Eng oson, lekin eng qimmat yo'l. Google Play va App Store har bir tranzaksiyaga 30% gacha komissiya qo'shadi, va bu to'g'ridan-to'g'ri narxda aks etadi. Afzalligi — darhol va kafolatlangan; kamchiligi — siz ortiqcha to'laysiz." },
        { h2: "2. Tashqi to'ldirish xizmatlari" },
        { p: "Bu xizmatlar valyutani to'g'ridan-to'g'ri Player ID orqali yetkazadi. Store komissiyasi yo'qligi sababli narx ancha past bo'ladi. Yaxshi xizmatning belgilari:" },
        { ul: [
          "Aniq narx va paketlar ochiq ko'rsatiladi.",
          "Faqat Player ID so'raladi — login yoki parol emas.",
          "Buyurtma holati kuzatiladi va yetkazilmasa pul qaytariladi.",
          "Mahalliy to'lov (Payme, Click, karta) qo'llab-quvvatlanadi.",
        ] },
        { h2: "3. 'Juda arzon' noma'lum sotuvchilar" },
        { p: "Ijtimoiy tarmoqlarda 'eng arzon UC' deb reklama qiladigan shaxslar ko'p. Ba'zilari halol, lekin ko'pchiligi xavfli. Quyidagi belgilarga e'tibor bering:" },
        { ul: [
          "Akkaunt login/parolingizni so'rashadi — bu jiddiy xavf belgisi.",
          "Oldindan to'lovni faqat shaxsiy kartaga so'rashadi, hech qanday chek yo'q.",
          "Narx bozordan keskin past — 'juda yaxshi' takliflar ko'pincha firib.",
        ] },
        { quote: "Oltin qoida: hech kim akkaunt parolingizni so'rashga haqli emas. Rasmiy to'ldirish faqat ochiq Player ID orqali ishlaydi." },
        { h2: "Eng yaxshi tanlov: arzon va xavfsizlik birga" },
        { p: "Ideal yechim — tashqi xizmatning arzon narxi va rasmiy do'konning xavfsizligini birlashtirgan xizmat. Gempay aynan shunday ishlaydi: narx tannarxga yaqin, to'ldirish faqat Player ID orqali, har bir buyurtma kuzatiladi va valyuta yetkazilmasa to'lov avtomatik qaytariladi. To'lov esa Payme, Click yoki karta orqali." },
        { h2: "Xulosa" },
        { p: "O'yin valyutasini arzon olish mumkin — lekin xavfsizlikni qurbon qilmasdan. Login/parol so'ramaydigan, narxi ochiq va to'lovni kafolatlaydigan xizmatni tanlang. Gempay shu mezonlarning barchasiga javob beradi va 200+ o'yinni bir joyda to'ldiradi." },
      ],
    },
    ru: {
      title: "Где покупать игровую валюту дёшево и безопасно?",
      description: "Где брать игровую валюту (UC, алмазы, голду) дёшево и безопасно: сравнение магазина, внешних сервисов и Gempay, цены и защита от мошенничества.",
      excerpt: "Почему игровой магазин дорогой? Безопасно ли внешнее пополнение? Как купить игровую валюту дешевле и надёжнее и как не попасться мошенникам.",
      keywords: "игровая валюта дёшево, где купить игровую валюту, пополнить игру дёшево, игровая валюта безопасно, безопасный top up, мошенничество игровая валюта, игровая валюта узбекистан",
      body: [
        { p: "PUBG UC, алмазы Mobile Legends, diamonds Free Fire или голда Standoff 2 — в какую бы игру вы ни играли, рано или поздно нужно пополнять валюту. Вопрос в том, где это лучше делать: в игровом магазине, во внешнем сервисе или у неизвестного продавца, который рекламирует «дёшево»? Давайте сравним." },
        { h2: "1. Официальный магазин внутри игры" },
        { p: "Самый простой, но самый дорогой путь. Google Play и App Store добавляют до 30% комиссии к каждой транзакции, и это прямо отражается в цене. Плюс — мгновенно и с гарантией; минус — вы переплачиваете." },
        { h2: "2. Внешние сервисы пополнения" },
        { p: "Такие сервисы доставляют валюту напрямую по Player ID. Без комиссии стора цена заметно ниже. Признаки хорошего сервиса:" },
        { ul: [
          "Чёткая цена и пакеты показаны открыто.",
          "Запрашивается только Player ID — не логин и пароль.",
          "Статус заказа отслеживается, не доставили — деньги возвращают.",
          "Поддерживается локальная оплата (Payme, Click, карта).",
        ] },
        { h2: "3. «Очень дешёвые» неизвестные продавцы" },
        { p: "В соцсетях много людей, рекламирующих «самые дешёвые UC». Некоторые честные, но многие опасны. Обратите внимание на признаки:" },
        { ul: [
          "Просят логин/пароль от аккаунта — это серьёзный тревожный сигнал.",
          "Просят предоплату только на личную карту, без чека.",
          "Цена резко ниже рынка — «слишком хорошие» предложения часто обман.",
        ] },
        { quote: "Золотое правило: никто не вправе просить пароль от вашего аккаунта. Официальное пополнение работает только по открытому Player ID." },
        { h2: "Лучший выбор: дёшево и безопасно вместе" },
        { p: "Идеальное решение — сервис, объединяющий низкую цену внешнего пополнения и безопасность официального магазина. Именно так работает Gempay: цена близко к себестоимости, пополнение только по Player ID, каждый заказ отслеживается, а если валюта не доставлена — оплата возвращается автоматически. Оплата — через Payme, Click или картой." },
        { h2: "Вывод" },
        { p: "Покупать игровую валюту дёшево можно — но не жертвуя безопасностью. Выбирайте сервис, который не просит логин/пароль, показывает цену открыто и гарантирует оплату. Gempay отвечает всем этим критериям и пополняет 200+ игр в одном месте." },
      ],
    },
    en: {
      title: "Where to Buy Game Currency Cheaply and Safely?",
      description: "Where to get game currency (UC, diamonds, gold) cheaply and safely: comparing the store, external services and Gempay, prices and protection from scams.",
      excerpt: "Why is the game store expensive? Is external top-up safe? How to buy game currency cheaper and more reliably, and how not to fall for scammers.",
      keywords: "game currency cheap, where to buy game currency, cheap game top up, game currency safe, safe top up, game currency scam, game currency uzbekistan",
      body: [
        { p: "PUBG UC, Mobile Legends diamonds, Free Fire diamonds or Standoff 2 gold — whatever you play, sooner or later you'll need to top up. The question is where: the in-game store, an external service, or an unknown seller advertising 'cheap'? Let's compare them all." },
        { h2: "1. The official in-game store" },
        { p: "The simplest but most expensive route. Google Play and the App Store add up to 30% in fees on every transaction, and that goes straight into the price. The upside is it's instant and guaranteed; the downside is you overpay." },
        { h2: "2. External top-up services" },
        { p: "These services deliver currency directly by Player ID. With no store fee, the price is noticeably lower. Signs of a good service:" },
        { ul: [
          "Clear prices and packs shown openly.",
          "Only the Player ID is requested — not a login or password.",
          "Order status is tracked, and if undelivered, you get refunded.",
          "Local payment (Payme, Click, card) is supported.",
        ] },
        { h2: "3. 'Very cheap' unknown sellers" },
        { p: "Social media is full of people advertising 'the cheapest UC'. Some are honest, but many are risky. Watch for these signs:" },
        { ul: [
          "They ask for your account login/password — a serious red flag.",
          "They demand prepayment to a personal card with no receipt.",
          "The price is far below the market — 'too good' offers are often a scam.",
        ] },
        { quote: "The golden rule: no one has the right to ask for your account password. Official top-up works only via your public Player ID." },
        { h2: "The best choice: cheap and safe together" },
        { p: "The ideal solution combines the low price of external top-up with the safety of the official store. That's exactly how Gempay works: prices close to cost, top-up only by Player ID, every order tracked, and if currency isn't delivered the payment is refunded automatically. Payment is via Payme, Click or card." },
        { h2: "Conclusion" },
        { p: "You can buy game currency cheaply — without sacrificing safety. Choose a service that never asks for a login/password, shows prices openly and guarantees payment. Gempay meets all of these and tops up 200+ games in one place." },
      ],
    },
  },

  // ── 5. How Gempay works ─────────────────────────────────────────────────
  {
    slug: "gempay-orqali-toldirish",
    date: "2026-06-26",
    readMins: 5,
    accent: "#22D3EE",
    tag: { uz: "Gempay", ru: "Gempay", en: "Gempay" },
    uz: {
      title: "Gempay orqali o'yin pulini 1 daqiqada to'ldirish — qo'llanma",
      description: "Gempay nima va qanday ishlaydi: Telegram bot orqali 200+ o'yin valyutasini to'ldirish, to'lov usullari (Payme, Click, karta) va bir daqiqada yetkazib berish.",
      excerpt: "Gempay — Telegram orqali ishlaydigan o'yin valyutalari xizmati. U qanday ishlaydi, qaysi o'yinlarni qo'llab-quvvatlaydi va birinchi buyurtmani qanday berish kerak?",
      keywords: "gempay, gempay nima, gempay bot, o'yin pulini to'ldirish, o'yin valyutalari telegram, payme bilan o'yin to'ldirish, click bilan o'yin valyutasi, gempay qo'llanma, gempay uz",
      body: [
        { p: "Gempay — Telegram orqali ishlaydigan o'yin valyutalari xizmati. 200+ o'yin va 4600+ paketni bir joyda, arzon narxda va bir daqiqada to'ldiradi. Ilova o'rnatish, uzoq ro'yxatdan o'tish yoki xorijiy karta — hech narsa kerak emas. Mana qanday ishlashi." },
        { h2: "Gempay qanday ishlaydi?" },
        { p: "Hammasi Telegram bot ichida — @Gempayuz_bot. Buyurtma jarayoni juda sodda:" },
        { ul: [
          "Botni oching va 200+ o'yindan keragini tanlang (PUBG, Mobile Legends, Free Fire, Standoff 2 va h.k.).",
          "Kerakli paketni tanlang va o'yin akkauntingiz Player ID'sini kiriting.",
          "Payme, Click yoki karta bilan to'lang — valyuta odatda bir daqiqada hisobingizga tushadi.",
        ] },
        { h2: "Qaysi o'yinlarni qo'llab-quvvatlaydi?" },
        { p: "Eng mashhurlari: PUBG Mobile (UC), Mobile Legends (olmos), Free Fire (olmos), Standoff 2 (gold), Genshin Impact (kristallar), Roblox (Robux), Brawl Stars (gems), Valorant (VP), Call of Duty Mobile (CP), Telegram Premium va Stars — hammasi 200+ o'yin. Qidirayotgan o'yiningizni bot ichidagi qidiruvdan topasiz." },
        { h2: "To'lov usullari" },
        { p: "Gempay mahalliy to'lov tizimlari bilan ishlaydi, shuning uchun xorijiy karta yoki valyuta konvertatsiyasi kerak emas:" },
        { ul: [
          "Payme — bir necha bosishda.",
          "Click — tez va qulay.",
          "Bank kartasi (UZCARD/HUMO) — to'g'ridan-to'g'ri.",
        ] },
        { quote: "Har bir buyurtma uchun aniq summa ko'rsatiladi va to'lov avtomatik tasdiqlanadi — qo'lda chek yuborish shart emas." },
        { h2: "Agar valyuta kelmasa?" },
        { p: "Har bir buyurtma boshidan oxirigacha kuzatiladi. Agar provayder valyutani yetkazib bera olmasa, to'lovingiz avtomatik yoki qo'lda qaytariladi. Savol bo'lsa, 24/7 qo'llab-quvvatlash botdan doim onlayn." },
        { h2: "Developerlar uchun" },
        { p: "Agar siz o'z botingiz yoki saytingizga o'yin valyutalarini ulashni istasangiz, Gempay'ning Developer API'si bor: REST + JSON, USDT balans, idempotency va avto-refund. To'liq Swagger hujjatlari api.gempay.uz/docs manzilida." },
        { h2: "Boshlash" },
        { p: "Birinchi buyurtmangizni berish bir daqiqadan kam vaqt oladi. @Gempayuz_bot ni oching, o'yiningizni tanlang va arzon narxda, tez to'ldiring." },
      ],
    },
    ru: {
      title: "Как пополнить игровую валюту за минуту через Gempay — гайд",
      description: "Что такое Gempay и как он работает: пополнение валюты 200+ игр через Telegram-бота, способы оплаты (Payme, Click, карта) и доставка за минуту.",
      excerpt: "Gempay — сервис игровой валюты в Telegram. Как он работает, какие игры поддерживает и как оформить первый заказ?",
      keywords: "gempay, что такое gempay, gempay бот, пополнить игровую валюту, игровая валюта telegram, оплата payme игры, click игровая валюта, gempay гайд, gempay uz",
      body: [
        { p: "Gempay — сервис игровой валюты в Telegram. Пополняет 200+ игр и 4600+ пакетов в одном месте, по низкой цене и за минуту. Не нужно ставить приложение, проходить долгую регистрацию или иметь зарубежную карту. Вот как это работает." },
        { h2: "Как работает Gempay?" },
        { p: "Всё внутри Telegram-бота — @Gempayuz_bot. Процесс заказа предельно простой:" },
        { ul: [
          "Откройте бота и выберите нужную игру из 200+ (PUBG, Mobile Legends, Free Fire, Standoff 2 и т.д.).",
          "Выберите нужный пакет и введите Player ID игрового аккаунта.",
          "Оплатите через Payme, Click или картой — валюта обычно приходит за минуту.",
        ] },
        { h2: "Какие игры поддерживаются?" },
        { p: "Самые популярные: PUBG Mobile (UC), Mobile Legends (алмазы), Free Fire (алмазы), Standoff 2 (голда), Genshin Impact (кристаллы), Roblox (Robux), Brawl Stars (гемы), Valorant (VP), Call of Duty Mobile (CP), Telegram Premium и Stars — и так до 200+ игр. Нужную игру найдёте через поиск внутри бота." },
        { h2: "Способы оплаты" },
        { p: "Gempay работает с локальными платёжными системами, поэтому не нужна зарубежная карта или конвертация валюты:" },
        { ul: [
          "Payme — в пару кликов.",
          "Click — быстро и удобно.",
          "Банковская карта (UZCARD/HUMO) — напрямую.",
        ] },
        { quote: "Для каждого заказа показывается точная сумма, а платёж подтверждается автоматически — слать чек вручную не нужно." },
        { h2: "А если валюта не пришла?" },
        { p: "Каждый заказ отслеживается от начала до конца. Если провайдер не смог доставить валюту, оплата возвращается автоматически или вручную. Есть вопрос — поддержка 24/7 всегда онлайн в боте." },
        { h2: "Для разработчиков" },
        { p: "Если хотите подключить игровую валюту к своему боту или сайту, у Gempay есть Developer API: REST + JSON, USDT баланс, идемпотентность и авто-возврат. Полная документация Swagger — api.gempay.uz/docs." },
        { h2: "Начало" },
        { p: "Оформить первый заказ — меньше минуты. Откройте @Gempayuz_bot, выберите игру и пополняйте дёшево и быстро." },
      ],
    },
    en: {
      title: "How to Top Up Game Currency in a Minute with Gempay — Guide",
      description: "What Gempay is and how it works: topping up currency for 200+ games via a Telegram bot, payment methods (Payme, Click, card) and delivery in a minute.",
      excerpt: "Gempay is a game-currency service inside Telegram. How it works, which games it supports and how to place your first order.",
      keywords: "gempay, what is gempay, gempay bot, top up game currency, game currency telegram, payme game top up, click game currency, gempay guide, gempay uz",
      body: [
        { p: "Gempay is a game-currency service inside Telegram. It tops up 200+ games and 4600+ packs in one place, at a low price and in a minute. No app to install, no long sign-up, no foreign card needed. Here's how it works." },
        { h2: "How does Gempay work?" },
        { p: "Everything happens inside the Telegram bot — @Gempayuz_bot. The ordering process is dead simple:" },
        { ul: [
          "Open the bot and pick your game from 200+ (PUBG, Mobile Legends, Free Fire, Standoff 2, etc.).",
          "Choose the pack you want and enter your game account's Player ID.",
          "Pay with Payme, Click or a card — the currency usually arrives in a minute.",
        ] },
        { h2: "Which games are supported?" },
        { p: "The most popular: PUBG Mobile (UC), Mobile Legends (diamonds), Free Fire (diamonds), Standoff 2 (gold), Genshin Impact (crystals), Roblox (Robux), Brawl Stars (gems), Valorant (VP), Call of Duty Mobile (CP), Telegram Premium and Stars — up to 200+ games in total. Find yours with the search inside the bot." },
        { h2: "Payment methods" },
        { p: "Gempay works with local payment systems, so there's no need for a foreign card or currency conversion:" },
        { ul: [
          "Payme — in a couple of taps.",
          "Click — fast and convenient.",
          "Bank card (UZCARD/HUMO) — directly.",
        ] },
        { quote: "Each order shows the exact amount and the payment is confirmed automatically — no need to send a receipt by hand." },
        { h2: "What if the currency doesn't arrive?" },
        { p: "Every order is tracked from start to finish. If the provider can't deliver, your payment is refunded automatically or manually. Got a question — 24/7 support is always online in the bot." },
        { h2: "For developers" },
        { p: "If you want to plug game currency into your own bot or site, Gempay has a Developer API: REST + JSON, a USDT balance, idempotency and auto-refund. Full Swagger docs at api.gempay.uz/docs." },
        { h2: "Getting started" },
        { p: "Placing your first order takes under a minute. Open @Gempayuz_bot, pick your game and top up cheaply and fast." },
      ],
    },
  },

  ...POSTS_NEW,
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);

// ── SEO helpers shared by the blog pages ────────────────────────────────
export const SITE = "https://gempay.uz";
export const abs = (path: string) => `${SITE}${path}`;

/** hreflang map for an index page (no slug) or a single post (with slug). */
export const blogHreflangs = (slug?: string) =>
  BLOG_LANGS.map((l) => ({ lang: l, href: abs(slug ? postPath(l, slug) : blogIndexPath(l)) }));

/** Combined keyword string for the blog index of a given language. */
export const indexKeywords = (lang: BlogLang) =>
  POSTS.map((p) => p[lang].keywords).join(", ");

const ORG = { "@type": "Organization", name: "Gempay", url: SITE, logo: `${SITE}/icon-512x512.png` };
const homeItem = (lang: BlogLang) =>
  lang === "en" ? abs(blogIndexPath(lang)) : lang === "uz" ? SITE : `${SITE}/${lang}`;

/** JSON-LD for a blog index page: Blog listing + breadcrumb. */
export function indexSchema(lang: BlogLang) {
  const ui = BLOG_UI[lang];
  const canonical = abs(blogIndexPath(lang));
  return [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: ui.metaIndexTitle,
      description: ui.metaIndexDesc,
      url: canonical,
      inLanguage: lang,
      publisher: ORG,
      blogPost: POSTS.map((p) => ({
        "@type": "BlogPosting",
        headline: p[lang].title,
        description: p[lang].description,
        url: abs(postPath(lang, p.slug)),
        datePublished: p.date,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: ui.nav.home, item: homeItem(lang) },
        { "@type": "ListItem", position: 2, name: ui.nav.blog, item: canonical },
      ],
    },
  ];
}

/** JSON-LD for a single post: BlogPosting + breadcrumb. */
export function postSchema(lang: BlogLang, post: BlogPost) {
  const ui = BLOG_UI[lang];
  const url = abs(postPath(lang, post.slug));
  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post[lang].title,
      description: post[lang].description,
      image: `${SITE}/og-image.png`,
      datePublished: post.date,
      dateModified: post.date,
      inLanguage: lang,
      keywords: post[lang].keywords,
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: ORG,
      publisher: {
        "@type": "Organization",
        name: "Gempay",
        url: SITE,
        logo: { "@type": "ImageObject", url: `${SITE}/icon-512x512.png` },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: ui.nav.home, item: homeItem(lang) },
        { "@type": "ListItem", position: 2, name: ui.nav.blog, item: abs(blogIndexPath(lang)) },
        { "@type": "ListItem", position: 3, name: post[lang].title, item: url },
      ],
    },
  ];
}
