// Avtoblogyoz yasagan maqola (2026-11-12). Niyat: O‘zbekistondagi o‘yinchi kanalda «har bir Telegram foydalanuvchisiga komissiyasiz Gram hamyon» degan xabarni o‘qigan. Endi u UC, olmos, Stars yoki Premium uchun Gram bilan to‘lash so‘mda karta bilan to‘lashdan arzon va xavfsizroqmi, deb bilmoqchi va «komissiyasiz gram hamyon donat» deb qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://ton.org/
//   https://core.telegram.org/bots/widgets
//   https://core.telegram.org/bots/api-changelog

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "komissiyasiz-gram-hamyon-donat-arzonmi",
  game: null,
  type: "comparison",
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  keywords: ["komissiyasiz gram hamyon donat","gram bilan uc sotib olish","gram bilan stars sotib olish","gram hamyon o‘zbekistonda","telegram gram wallet komissiya","donat so‘mda kartadan","gram yoki karta qaysi arzon","кошелек gram без комиссии","купить stars за gram","донат uc за gram","gram кошелек телеграм узбекистан","комиссия перевода gram ton"],
  locales: {
    uz: {
      title: "Komissiyasiz Gram hamyon: UC va Stars donatiga Gram so‘mdan arzonmi?",
      metaTitle: "Komissiyasiz Gram hamyon: UC va Stars donatiga Gram so‘mdan",
      metaDescription: "Yo‘q, arzonligi tasdiqlanmagan: Gram o‘tkazmasida kichik komissiya bor, Gram’ni avval olish kerak, UC va olmos uchun esa Gram yo‘li rasmiy manbada yo‘q.",
      excerpt: "Yo‘q, arzonligi tasdiqlanmagan: Gram o‘tkazmasida kichik komissiya bor, Gram’ni avval olish kerak, UC va olmos uchun esa Gram yo‘li rasmiy manbada yo‘q.",
      answer: "Yo‘q, arzonligi tasdiqlanmagan: Gram o‘tkazmasida kichik komissiya bor, Gram’ni avval olish kerak, UC va olmos uchun esa Gram yo‘li rasmiy manbada yo‘q.",
      body: [
        {
          t: "h2",
          id: "gram-bilan-donat-qilish-somda",
          text: "Gram bilan donat qilish so‘mda karta bilan to‘lashdan arzonmi?",
        },
        {
          t: "p",
          text: "Buni hech qaysi rasmiy manba tasdiqlamaydi. «Komissiyasiz» degan so‘z Telegram kanalidagi postdan olingan. <a href=\"https://ton.org/\" target=\"_blank\" rel=\"noopener\">ton.org</a> esa Gram o‘tkazmalari uchun tarmoq komissiyasi borligini yozadi. Yana bir narsa: hamyoningizda Gram bo‘lmasa, to‘lashdan oldin uni qayerdandir olishingiz kerak, bu ham alohida qadam.",
        },
        {
          t: "p",
          text: "Postda «bu yoz», «insoniyat tarixidagi eng yirik hamyon» va «milliarddan ortiq foydalanuvchi» degan gaplar ham bor. Telegram’ning rasmiy blogida bunday e’lon, sana yoki da’vo topilmadi. Ularni tasdiqlangan yangilik deb emas, kanal muallifining gapi deb o‘qing.",
        },
        {
          t: "p",
          text: "Rasmiy manbada tasdiqlangan narsa kamroq. TON saytiga ko‘ra, Telegram jamoasi yaratgan non-custodial Gram hamyoni messenger interfeysiga o‘rnatilgan. Gram — TON blokcheynining asosiy tangasi.",
        },
        {
          t: "p",
          text: "O‘yinchi uchun bundan chiqadigan xulosa oddiy: hamyon paydo bo‘lgani donat qilish tartibini o‘zgartirmaydi. UC, olmos va CP o‘yindagi Player ID bo‘yicha, Stars va Premium esa @username bo‘yicha olinadi. Ularning hech biriga hamyon kerak emas. Batafsil: <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">Telegram Wallet o‘yinchiga kerakmi</a>.",
        },
        {
          t: "h2",
          id: "gram-otkazmasida-tarmoq-qancha-ushlaydi",
          text: "Gram o‘tkazmasida tarmoq qancha ushlaydi?",
        },
        {
          t: "p",
          text: "Oz, lekin nolga teng emas. TON saytida yozilishicha, Gram tarmoqdagi komissiyalarni to‘lash uchun ham ishlatiladi. Ya’ni har bir o‘tkazma uchun tarmoqqa haq to‘lanadi.",
        },
        {
          t: "p",
          text: "Rasmiy sahifadagi taxminiy summalar:",
        },
        {
          t: "list",
          items: [
            "Gram o‘tkazmasi — taxminan 0,00039 Gram;",
            "USDt o‘tkazmasi — taxminan 0,001 Gram;",
            "komissiyalar qat’iy belgilangan, tarmoq yuklamasiga qarab o‘zgarmaydi.",
          ],
        },
        {
          t: "p",
          text: "Demak, to‘g‘risi «komissiyasiz» emas, «komissiyasi juda kichik». Shuning uchun Gram yo‘lini hisoblayotganda tarmoq haqini nol deb olmang.",
        },
        {
          t: "note",
          tone: "info",
          text: "Tarmoq komissiyasi xarajatning faqat bir qismi. Gram’ni olish va uni hamyonga keltirish bosqichida qancha ketishini rasmiy manbalar ko‘rsatmaydi. Shu sabab umumiy summani oldindan aytib bo‘lmaydi.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "uc-olmos-stars-va-premium",
          text: "UC, olmos, Stars va Premium: Gram bilan va so‘mda qanday to‘lanadi?",
        },
        {
          t: "p",
          text: "Har bir xaridni alohida qarasak, Gram faqat bitta holatda rasman tasdiqlangan yo‘l bo‘lib chiqadi — Telegram Stars.",
        },
        {
          t: "table",
          head: [
            "Xarid",
            "Gram bilan to‘lash: rasmiy manba nima deydi",
            "So‘mda GemPay orqali",
            "Nima kerak",
          ],
          rows: [
            [
              "Telegram Stars",
              "ton.org’ga ko‘ra Stars’ni Gram bilan sotib olish mumkin",
              `donasi ${som(STARS_UNIT_CARD, "uz")} (karta yoki balans) yoki ${som(STARS_UNIT_ONLINE, "uz")} (Click, Uzum Bank); bir buyurtmada 50 dan 10 000 tagacha`,
              "@username",
            ],
            [
              "Telegram Premium",
              "Gram bilan to‘g‘ridan-to‘g‘ri olish rasmiy manbada aytilmagan",
              `3 oy — ${som(premium(3), "uz")}, 6 oy — ${som(premium(6), "uz")}, 12 oy — ${som(premium(12), "uz")}; 1 oylik tarif yo‘q`,
              "@username",
            ],
            [
              "PUBG Mobile UC",
              "rasmiy manbada yo‘q",
              "narx botda, 1–5 daqiqada tushadi",
              "Player ID",
            ],
            [
              "Mobile Legends va Free Fire olmosi",
              "rasmiy manbada yo‘q",
              "narx botda, 1–5 daqiqada tushadi",
              "Player ID (MLBB’da Server ID ham)",
            ],
            [
              "Call of Duty: Mobile CP",
              "rasmiy manbada yo‘q",
              "narx botda, 1–5 daqiqada tushadi",
              "Player ID",
            ],
          ],
        },
        {
          t: "p",
          text: "Ba’zi o‘yinchilar «Gram’ni Stars’ga, Stars’ni UC’ga aylantiraman» deb rejalaydi. Bu zanjir ishlamaydi: Stars o‘yin valyutasiga aylanmaydi, ular Telegram ichidagi raqamli tovar, kontent va xizmatlar uchun. Qaysi «pul» qayerda sarflanishi bu yerda: <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">Telegram Stars, UC, olmos va Steam balansi</a>.",
        },
        {
          t: "h2",
          id: "gram-yolida-oyinchi-qancha-bosqichdan",
          text: "Gram yo‘lida o‘yinchi qancha bosqichdan o‘tadi?",
        },
        {
          t: "p",
          text: "So‘mda to‘lagan o‘yinchi bitta to‘lov qiladi. Gram bilan to‘laydigan o‘yinchi esa kamida uch bosqichdan o‘tadi:",
        },
        {
          t: "list",
          items: [
            "<strong>Gram olish.</strong> Uni Click, Payme, Paynet yoki Uzum orqali olish mumkinligi rasmiy manbada aytilmagan. Gram’ni Fragment orqali to‘ldirish haqidagi gaplar ham tasdiqlanmagan.",
            "<strong>Gram’ni hamyonga keltirish.</strong> Har bir o‘tkazmada tarmoq komissiyasi ushlanadi.",
            "<strong>Hamyondan to‘lash.</strong> Stars uchun bu yo‘l rasman tasdiqlangan, UC va olmos uchun yo‘q.",
          ],
        },
        {
          t: "p",
          text: "Gram’ning so‘mdagi qiymati rasmiy manbalarda ko‘rsatilmagan. Shuning uchun «bitta Stars Gram’da necha so‘mga tushadi» degan savolga oldindan aniq javob yo‘q, bugungi hisob ertaga boshqacha chiqishi mumkin.",
        },
        {
          t: "p",
          text: "So‘mdagi to‘lovda summa buyurtma paytida ekranda turadi. Oylik donat byudjetini oldindan rejalaydigan o‘yinchi uchun bu sezilarli farq.",
        },
        {
          t: "p",
          text: "Klan chatida yana bir taklif uchraydi: «Gram’ni username’imga tashla, UC keyin». Bunday to‘lov nega UC kelishini ta’minlamasligi bu yerda yozilgan: <a href=\"/blog/username-boyicha-gram-otkazma-oyinchi-xavfi\">username bo‘yicha Gram o‘tkazma</a>.",
        },
        {
          t: "h2",
          id: "gram-bilan-tolash-xavfsizroqmi-yoki",
          text: "Gram bilan to‘lash xavfsizroqmi yoki xavfliroq?",
        },
        {
          t: "p",
          text: "Xavf boshqacha, lekin kam emas. Telegram hujjatiga ko‘ra, to‘lovni foydalanuvchi qurilmasidagi hamyon amalga oshiradi va u profilda ko‘rinadigan kartadan farq qilishi mumkin.",
        },
        {
          t: "p",
          text: "Telefon almashtiradigan o‘yinchi bunga e’tibor bersin: hamyon zaxira nusxasi o‘chirilgan bo‘lsa, har bir qurilmada alohida kalit va alohida hamyon bo‘ladi. Eski telefondagi hamyon yangisida o‘z-o‘zidan chiqmasligi mumkin.",
        },
        {
          t: "p",
          text: "Mini-ilovalar Gram hamyonga TON Connect va deeplink orqali ulanadi. <a href=\"https://core.telegram.org/bots/widgets\" target=\"_blank\" rel=\"noopener\">Vidjet hujjatida</a> yozilishicha, vidjet sizdan to‘lov yoki imzo so‘rashi mumkin. Oynada bot, summa va qabul qiluvchi ko‘rsatiladi, tasdiqni esa o‘zingiz berasiz. Bosishdan oldin shu uch qatorni o‘qing: notanish bot yoki manzil chiqsa, to‘xtang.",
        },
        {
          t: "p",
          text: "Klan chatidagi asosiy xavf texnik emas, odamlar bilan bog‘liq. Notanish sotuvchi «UC uchun Gram yubor» desa, Gram ketadi, UC esa kelmasligi mumkin. Pulni qaytarishning tasdiqlangan yo‘li ham yo‘q. Shunday holatlar tahlili: <a href=\"/blog/ton-manzilga-donat-tolovi-oyinchi-xavfi\">TON manzilga donat to‘lovi</a>.",
        },
        {
          t: "p",
          text: "So‘mdagi to‘lovda o‘yinchi faqat Player ID yoki @username beradi, parol so‘ralmaydi. GemPay’da buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi. Hisobga tushib bo‘lgan valyuta qaytarilmaydi.",
        },
        {
          t: "h2",
          id: "telegramda-hamyon-menyusi-yoq-bolsa",
          text: "Telegram’da hamyon menyusi yo‘q bo‘lsa, o‘yinchi nima qiladi?",
        },
        {
          t: "p",
          text: "Hech narsa qilish shart emas: donat uchun hamyon kerak emas. Telegram hujjatida aytilishicha, ilovaning eski versiyalarida va hamyon mavjud bo‘lmagan mamlakatlarda hamyon bo‘lmaydi. O‘zbekiston shu ro‘yxatdami, rasmiy manbada yozilmagan. «Har bir foydalanuvchiga» degan gap shu sabab ham tasdiqlanmagan.",
        },
        {
          t: "p",
          text: "Amalda bilish kerak bo‘lgan narsalar:",
        },
        {
          t: "list",
          items: [
            "Hamyoni yo‘q foydalanuvchiga hamyon birinchi marta kerak bo‘lganda yaratiladi. Uni «ochib beraman» degan bot yoki odamga ehtiyoj yo‘q.",
            "«Hamyonni faollashtirish uchun 0.1 yubor» degan xabarlarga javob bermang: <a href=\"/blog/gram-wallet-faollashtirish-oyinchiga-kerakmi\">GRAM Wallet faollashtirish</a>.",
            "Hamyon nomi o‘zgargani yoki yangi bot chiqqani haqidagi mish-mishlar donat tartibiga ta’sir qilmaydi: <a href=\"/blog/wallet-walt-oyinchi-stars-donat\">Wallet va Walt mish-mishi</a>.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "<a href=\"https://core.telegram.org/bots/api-changelog\" target=\"_blank\" rel=\"noopener\">Bot API o‘zgarishlar ro‘yxatiga</a> TonWalletCard, TonNft kabi klasslar va TON hamyon o‘tkazmalari haqidagi xizmat xabarlari qo‘shilgan. Bu bot ishlab chiquvchilar uchun texnik yangilik, O‘zbekistonda hamyon ochilganini bildirmaydi.",
        },
        {
          t: "h2",
          id: "donatni-somda-hamyonsiz-qanday-tolash",
          text: "Donatni so‘mda hamyonsiz qanday to‘lash mumkin?",
        },
        {
          t: "p",
          text: "Gram, hamyon, VPN yoki xorijiy karta kerak emas. Tartib o‘yin valyutasi uchun ham, Telegram xizmatlari uchun ham bir xil:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "<a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>’ni oching.",
            "Bo‘limni tanlang: o‘yin (UC, olmos, CP) yoki Telegram Stars / Premium.",
            "O‘yin uchun Player ID kiriting va bot ko‘rsatgan nikni tekshiring. Stars yoki Premium uchun @username kiriting.",
            "To‘lov usulini tanlang: UzCard, HUMO, Click, Uzum Bank yoki bot balansi, Rossiyadan SBP. Visa va Mastercard qabul qilinmaydi.",
            "Natijani tekshiring: Stars bir necha soniyada tushadi, Premium Telegram’ning rasmiy sovg‘a mexanizmi orqali bir necha soniyada faollashadi, o‘yin valyutasi 1–5 daqiqada keladi. Muammo bo‘lsa, buyurtma raqami bilan <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>’ga yozing.",
          ],
        },
        {
          t: "p",
          text: "Premium narxi barcha to‘lov usullarida bir xil. Stars’da esa karta o‘tkazmasi yoki balans bilan to‘lash Click yoki Uzum Bank orqali onlayn to‘lovdan arzonroq tushadi.",
        },
        {
          t: "h2",
          id: "qaysi-vaziyatda-gram-qaysi-vaziyatda",
          text: "Qaysi vaziyatda Gram, qaysi vaziyatda so‘m qulayroq?",
        },
        {
          t: "p",
          text: "Gram faqat bitta holatda o‘zini oqlashi mumkin: u allaqachon hamyoningizda bo‘lsa va sizga aynan Stars kerak bo‘lsa.",
        },
        {
          t: "list",
          items: [
            "<strong>Hamyonda Gram bor, Stars kerak.</strong> Telegram ichida Gram bilan Stars olish mumkin. Tasdiqlash oynasida summa va qabul qiluvchini tekshiring.",
            "<strong>Kanal egasi yoki strimersiz.</strong> Telegram reklama daromadi Gram’da to‘lanishi mumkin, uni Stars’ga sarflash qo‘shimcha almashtirishsiz yo‘l bo‘ladi.",
            "<strong>UC, olmos yoki CP kerak.</strong> Player ID bo‘yicha so‘mda to‘lang: Gram yo‘li rasmiy manbada yo‘q.",
            "<strong>Jamoadoshga Premium yoki Stars sovg‘a qilmoqchisiz.</strong> Uning @username’i bo‘yicha so‘mda to‘lang, summa oldindan ma’lum.",
            "<strong>Hamyon menyusi ko‘rinmaydi yoki Gram qayerdan olinishini bilmaysiz.</strong> So‘mdagi to‘lov — aniq va qisqa yo‘l.",
          ],
        },
        {
          t: "p",
          text: "Gram’ni faqat donat uchun olish arzonroq chiqishini hech qaysi rasmiy manba tasdiqlamaydi. So‘mdagi karta to‘lovi esa kamroq bosqichli va narxi oldindan ko‘rinadi.",
        },
        {
          t: "sources",
          items: [
            {
              label: "TON — The Leading L1 Blockchain",
              href: "https://ton.org/",
            },
            {
              label: "Telegram Widgets",
              href: "https://core.telegram.org/bots/widgets",
            },
            {
              label: "Bot API changelog",
              href: "https://core.telegram.org/bots/api-changelog",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Kanaldagi «komissiyasiz Gram hamyon» xabari tufayli donat qilish tartibi o‘zgardimi?",
          a: "Yo‘q. Bu xabar kanal posti, Telegram blogida bunday e’lon topilmadi. UC va olmos hamon Player ID bo‘yicha, Stars va Premium @username bo‘yicha olinadi.",
        },
        {
          q: "Gram bilan PUBG UC yoki Mobile Legends olmosini to‘g‘ridan-to‘g‘ri olsa bo‘ladimi?",
          a: "Rasmiy manbalarda bunday yo‘l tasvirlanmagan. O‘yin valyutasini so‘mda UzCard, HUMO, Click yoki Uzum Bank bilan to‘lab, Player ID bo‘yicha olish mumkin.",
        },
        {
          q: "Gram bilan olingan Stars’ni keyin UC’ga almashtirsa bo‘ladimi?",
          a: "Yo‘q, Stars o‘yin valyutasiga aylanmaydi va faqat Telegram ichida sarflanadi. UC kerak bo‘lsa, uni darhol Player ID bo‘yicha oling.",
        },
        {
          q: "Telefonimni almashtirsam, Gram hamyonim yangi telefonda ham bo‘ladimi?",
          a: "Zaxira sozlamasiga bog‘liq: Telegram hujjatiga ko‘ra, zaxira o‘chirilgan bo‘lsa, har qurilmada alohida kalit va hamyon bo‘ladi. Eski telefonni tozalashdan oldin zaxira yoqilganini tekshiring.",
        },
        {
          q: "Klan do‘stim «Gram tashlab tur, UC’ni keyin olib beraman» desa, nima qilay?",
          a: "Oldindan Gram yubormang: yuborilgan Gram UC kelishini ta’minlamaydi. Unga Player ID’ingizni bering yoki UC’ni o‘zingiz so‘mda oling.",
        },
        {
          q: "Stars Gram’da necha so‘mga tushishini oldindan hisoblasa bo‘ladimi?",
          a: "Aniq hisoblab bo‘lmaydi, chunki rasmiy manbalarda Gram’ning so‘mdagi qiymati ko‘rsatilmagan. So‘mda to‘lasangiz, summa buyurtma paytida ko‘rinadi.",
        },
        {
          q: "Telegram Premium’ni Gram bilan olish so‘mdagi narxdan arzonroqmi?",
          a: "Premium’ni Gram bilan to‘g‘ridan-to‘g‘ri olish rasmiy manbada aytilmagan, solishtiradigan narx ham yo‘q. GemPay’da 3, 6 va 12 oylik tariflar har qanday to‘lov usulida bir xil narxda.",
        },
      ],
    },
    ru: {
      title: "Gram-кошелёк «без комиссии»: донат UC и Stars через Gram дешевле, чем в сумах?",
      metaTitle: "Gram-кошелёк «без комиссии»",
      metaDescription: "Это не подтверждено. За перевод Gram берётся небольшая комиссия, Gram ещё нужно где-то купить, а оплату UC и алмазов через Gram официальные источники не…",
      excerpt: "Это не подтверждено. За перевод Gram берётся небольшая комиссия, Gram ещё нужно где-то купить, а оплату UC и алмазов через Gram официальные источники не описывают.",
      answer: "Это не подтверждено. За перевод Gram берётся небольшая комиссия, Gram ещё нужно где-то купить, а оплату UC и алмазов через Gram официальные источники не описывают.",
      body: [
        {
          t: "h2",
          id: "gram-bilan-donat-qilish-somda",
          text: "Донат через Gram дешевле, чем оплата картой в сумах?",
        },
        {
          t: "p",
          text: "Официальные источники этого не подтверждают. Слова «без комиссии» взяты из поста в Telegram-канале. А <a href=\"https://ton.org/\" target=\"_blank\" rel=\"noopener\">ton.org</a> пишет, что за переводы Gram сеть берёт комиссию. Есть и ещё одна деталь: если Gram в кошельке нет, перед оплатой его нужно где-то купить. Это отдельный шаг.",
        },
        {
          t: "p",
          text: "В том же посте говорится про «этим летом», «крупнейший кошелёк в истории человечества» и «больше миллиарда пользователей». В официальном блоге Telegram мы не нашли ни такого объявления, ни такой даты, ни таких заявлений. Это слова автора канала, а не подтверждённая новость.",
        },
        {
          t: "p",
          text: "Официально подтверждено гораздо меньше. Сайт TON пишет, что некастодиальный Gram-кошелёк от команды Telegram встроен в интерфейс мессенджера. Gram — основная монета блокчейна TON.",
        },
        {
          t: "p",
          text: "Что это значит для игрока: с появлением кошелька порядок доната не меняется. UC, алмазы и CP покупаются по игровому Player ID, Stars и Premium — по @username. Кошелёк ни для чего из этого не нужен. Подробнее: <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">нужен ли игроку Telegram Wallet</a>.",
        },
        {
          t: "h2",
          id: "gram-otkazmasida-tarmoq-qancha-ushlaydi",
          text: "Сколько сеть берёт за перевод Gram?",
        },
        {
          t: "p",
          text: "Немного, но и не ноль. По данным сайта TON, Gram в том числе нужен, чтобы платить сетевые комиссии. Значит, за каждый перевод сети платится сбор.",
        },
        {
          t: "p",
          text: "Примерные суммы с официальной страницы:",
        },
        {
          t: "list",
          items: [
            "перевод Gram — около 0,00039 Gram;",
            "перевод USDt — около 0,001 Gram;",
            "комиссии фиксированные и не зависят от нагрузки на сеть.",
          ],
        },
        {
          t: "p",
          text: "Поэтому правильнее говорить не «без комиссии», а «с очень маленькой комиссией». Когда считаете, во сколько обойдётся оплата через Gram, не принимайте сетевой сбор за ноль.",
        },
        {
          t: "note",
          tone: "info",
          text: "Сетевая комиссия — лишь часть расходов. Во что обходится покупка Gram и его перевод в кошелёк, официальные источники не пишут. Поэтому итоговую сумму заранее не назвать.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "uc-olmos-stars-va-premium",
          text: "UC, алмазы, Stars и Premium: как платить через Gram и как в сумах?",
        },
        {
          t: "p",
          text: "Если пройтись по каждой покупке, путь через Gram официально подтверждён только в одном случае — для Telegram Stars.",
        },
        {
          t: "table",
          head: [
            "Покупка",
            "Оплата через Gram: что говорит официальный источник",
            "В сумах через GemPay",
            "Что нужно",
          ],
          rows: [
            [
              "Telegram Stars",
              "по данным ton.org, Stars можно купить за Gram",
              `одна звезда — ${som(STARS_UNIT_CARD, "ru")} (карта или баланс) или ${som(STARS_UNIT_ONLINE, "ru")} (Click, Uzum Bank); в одном заказе от 50 до 10 000`,
              "@username",
            ],
            [
              "Telegram Premium",
              "прямая покупка за Gram в официальных источниках не упоминается",
              `3 месяца — ${som(premium(3), "ru")}, 6 месяцев — ${som(premium(6), "ru")}, 12 месяцев — ${som(premium(12), "ru")}; тарифа на 1 месяц нет`,
              "@username",
            ],
            [
              "UC в PUBG Mobile",
              "в официальных источниках нет",
              "цена в боте, зачисление за 1–5 минут",
              "Player ID",
            ],
            [
              "Алмазы Mobile Legends и Free Fire",
              "в официальных источниках нет",
              "цена в боте, зачисление за 1–5 минут",
              "Player ID (в MLBB ещё и Server ID)",
            ],
            [
              "CP в Call of Duty: Mobile",
              "в официальных источниках нет",
              "цена в боте, зачисление за 1–5 минут",
              "Player ID",
            ],
          ],
        },
        {
          t: "p",
          text: "Некоторые игроки придумывают цепочку «обменяю Gram на Stars, а Stars — на UC». Она не работает. Stars не превращаются в игровую валюту: ими платят за цифровые товары, контент и сервисы внутри Telegram. Где какие «деньги» тратятся, разобрано здесь: <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">Telegram Stars, UC, алмазы и баланс Steam</a>.",
        },
        {
          t: "h2",
          id: "gram-yolida-oyinchi-qancha-bosqichdan",
          text: "Через сколько шагов проходит игрок, если платит через Gram?",
        },
        {
          t: "p",
          text: "Кто платит в сумах, делает один платёж. Кто платит через Gram, проходит минимум три шага:",
        },
        {
          t: "list",
          items: [
            "<strong>Купить Gram.</strong> Официальные источники не пишут, что Gram можно купить через Click, Payme, Paynet или Uzum. Разговоры о пополнении Gram через Fragment тоже не подтверждены.",
            "<strong>Перевести Gram в кошелёк.</strong> С каждого перевода сеть удерживает комиссию.",
            "<strong>Заплатить из кошелька.</strong> Для Stars такой путь официально подтверждён, для UC и алмазов — нет.",
          ],
        },
        {
          t: "p",
          text: "Сколько Gram стоит в сумах, официальные источники не указывают. Поэтому заранее точно не скажешь, во сколько сумов обойдётся одна звезда, купленная за Gram. Сегодняшний расчёт завтра может выйти другим.",
        },
        {
          t: "p",
          text: "При оплате в сумах сумма видна на экране прямо при оформлении заказа. Если вы заранее планируете месячный бюджет на донат, разница ощутимая.",
        },
        {
          t: "p",
          text: "В клановом чате встречается и такое предложение: «Скинь Gram на мой username, UC потом». Почему такой платёж не гарантирует, что UC придут, разобрано здесь: <a href=\"/blog/username-boyicha-gram-otkazma-oyinchi-xavfi\">перевод Gram по username</a>.",
        },
        {
          t: "h2",
          id: "gram-bilan-tolash-xavfsizroqmi-yoki",
          text: "Платить через Gram безопаснее или рискованнее?",
        },
        {
          t: "p",
          text: "Риски другие, но не меньше. Документация Telegram говорит, что платёж проводит кошелёк на устройстве пользователя. Он может не совпадать с картой, которая видна в профиле.",
        },
        {
          t: "p",
          text: "Если меняете телефон, учтите: когда резервная копия кошелька выключена, на каждом устройстве свой ключ и свой кошелёк. Кошелёк со старого телефона может сам не появиться на новом.",
        },
        {
          t: "p",
          text: "Мини-приложения подключаются к Gram-кошельку через TON Connect и диплинки. В <a href=\"https://core.telegram.org/bots/widgets\" target=\"_blank\" rel=\"noopener\">документации по виджетам</a> сказано, что виджет может попросить вас оплатить или подписать операцию. В окне видны бот, сумма и получатель, а подтверждаете операцию вы сами. Перед нажатием прочитайте эти три строки. Если там незнакомый бот или адрес, остановитесь.",
        },
        {
          t: "p",
          text: "Главный риск в клановом чате связан не с техникой, а с людьми. Незнакомый продавец пишет «пришли Gram за UC», Gram уходит, а UC могут и не прийти. Подтверждённого способа вернуть деньги нет. Разбор похожих случаев: <a href=\"/blog/ton-manzilga-donat-tolovi-oyinchi-xavfi\">оплата доната на TON-адрес</a>.",
        },
        {
          t: "p",
          text: "При оплате в сумах вы даёте только Player ID или @username, пароль никто не спрашивает. Если заказ в GemPay не выполнен, деньги полностью возвращаются в течение 3 рабочих дней. Валюта, которая уже пришла на счёт, не возвращается.",
        },
        {
          t: "h2",
          id: "telegramda-hamyon-menyusi-yoq-bolsa",
          text: "Что делать игроку, если в Telegram нет меню кошелька?",
        },
        {
          t: "p",
          text: "Ничего: для доната кошелёк не нужен. В документации Telegram сказано, что кошелька нет в старых версиях приложения и в странах, где он недоступен. Входит ли Узбекистан в их число, официальный источник не говорит. По этой же причине не подтверждена и фраза «для каждого пользователя».",
        },
        {
          t: "p",
          text: "На практике полезно знать:",
        },
        {
          t: "list",
          items: [
            "Если кошелька нет, он создаётся в первый раз, когда понадобится. Ботам и людям, которые предлагают «открыть» его за вас, доверять незачем.",
            "Не отвечайте на сообщения вроде «отправь 0.1, чтобы активировать кошелёк»: <a href=\"/blog/gram-wallet-faollashtirish-oyinchiga-kerakmi\">активация GRAM Wallet</a>.",
            "Слухи о том, что кошелёк переименовали или вышел новый бот, на порядок доната не влияют: <a href=\"/blog/wallet-walt-oyinchi-stars-donat\">слух про Wallet и Walt</a>.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "В <a href=\"https://core.telegram.org/bots/api-changelog\" target=\"_blank\" rel=\"noopener\">список изменений Bot API</a> добавили классы вроде TonWalletCard и TonNft, а также служебные сообщения о переводах в TON-кошельке. Это техническая новость для разработчиков ботов. Из неё не следует, что кошелёк заработал в Узбекистане.",
        },
        {
          t: "h2",
          id: "donatni-somda-hamyonsiz-qanday-tolash",
          text: "Как оплатить донат в сумах без кошелька?",
        },
        {
          t: "p",
          text: "Gram, кошелёк, VPN и зарубежная карта не нужны. Порядок одинаковый и для игровой валюты, и для сервисов Telegram:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Откройте <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>.",
            "Выберите раздел: игра (UC, алмазы, CP) или Telegram Stars / Premium.",
            "Для игры введите Player ID и проверьте ник, который покажет бот. Для Stars или Premium введите @username.",
            "Выберите способ оплаты: UzCard, HUMO, Click, Uzum Bank, баланс бота или SBP из России. Visa и Mastercard не принимаются.",
            "Проверьте результат. Stars приходят за несколько секунд. Premium подключается за несколько секунд через официальный механизм подарков Telegram. Игровая валюта приходит за 1–5 минут. Если что-то пошло не так, напишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> и укажите номер заказа.",
          ],
        },
        {
          t: "p",
          text: "Цена Premium одинакова при любом способе оплаты. Stars дешевле обходятся при оплате переводом с карты или с баланса, чем при онлайн-оплате через Click или Uzum Bank.",
        },
        {
          t: "h2",
          id: "qaysi-vaziyatda-gram-qaysi-vaziyatda",
          text: "Когда удобнее Gram, а когда — сумы?",
        },
        {
          t: "p",
          text: "Gram может быть оправдан только в одном случае: он уже лежит у вас в кошельке, а нужны вам именно Stars.",
        },
        {
          t: "list",
          items: [
            "<strong>Gram в кошельке есть, нужны Stars.</strong> Внутри Telegram Stars можно купить за Gram. В окне подтверждения проверьте сумму и получателя.",
            "<strong>Вы владелец канала или стример.</strong> Доход от рекламы в Telegram могут выплачивать в Gram. Если тратить его на Stars, ничего дополнительно обменивать не придётся.",
            "<strong>Нужны UC, алмазы или CP.</strong> Платите в сумах по Player ID: оплату через Gram официальные источники не описывают.",
            "<strong>Хотите подарить тиммейту Premium или Stars.</strong> Платите в сумах по его @username, сумма известна заранее.",
            "<strong>Меню кошелька не видно или непонятно, где взять Gram.</strong> Оплата в сумах — понятный и короткий путь.",
          ],
        },
        {
          t: "p",
          text: "Что Gram, купленный только ради доната, выйдет дешевле, официальные источники не подтверждают. Оплата картой в сумах проходит в меньшее число шагов, и цену видно заранее.",
        },
        {
          t: "sources",
          items: [
            {
              label: "TON — The Leading L1 Blockchain",
              href: "https://ton.org/",
            },
            {
              label: "Telegram Widgets",
              href: "https://core.telegram.org/bots/widgets",
            },
            {
              label: "Bot API changelog",
              href: "https://core.telegram.org/bots/api-changelog",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Из-за поста о «Gram-кошельке без комиссии» порядок доната изменился?",
          a: "Нет. Это пост в канале, а в блоге Telegram такого объявления нет. UC и алмазы по-прежнему покупаются по Player ID, Stars и Premium — по @username.",
        },
        {
          q: "Можно ли купить UC в PUBG или алмазы Mobile Legends напрямую за Gram?",
          a: "Официальные источники такой способ не описывают. Игровую валюту можно оплатить в сумах через UzCard, HUMO, Click или Uzum Bank и получить по Player ID.",
        },
        {
          q: "Можно ли потом обменять Stars, купленные за Gram, на UC?",
          a: "Нет. Stars не превращаются в игровую валюту, их тратят только внутри Telegram. Если нужны UC, сразу покупайте их по Player ID.",
        },
        {
          q: "Если я сменю телефон, Gram-кошелёк будет и на новом?",
          a: "Это зависит от настроек резервной копии. По документации Telegram, если она выключена, у каждого устройства свой ключ и свой кошелёк. Прежде чем сбрасывать старый телефон, проверьте, что копия включена.",
        },
        {
          q: "Друг из клана пишет: «Скинь Gram, UC куплю потом». Что делать?",
          a: "Не отправляйте Gram заранее: перевод не гарантирует, что UC придут. Дайте ему свой Player ID или купите UC сами в сумах.",
        },
        {
          q: "Можно ли заранее посчитать, сколько сумов стоит одна звезда при покупке за Gram?",
          a: "Точно — нет: официальные источники не указывают стоимость Gram в сумах. При оплате в сумах сумма видна сразу при оформлении заказа.",
        },
        {
          q: "Telegram Premium за Gram выйдет дешевле, чем в сумах?",
          a: "Прямая покупка Premium за Gram в официальных источниках не упоминается, так что сравнивать не с чем. В GemPay тарифы на 3, 6 и 12 месяцев стоят одинаково при любом способе оплаты.",
        },
      ],
    },
  },
};

export default article;
