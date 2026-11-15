// Avtoblogyoz yasagan maqola (2026-11-15). Niyat: Klan chatida «Toncoin endi Gram» degan xabarni ko‘rgan o‘yinchi «toncoin gram bo‘ldi donat» deb qidiradi. U nom o‘zgarishi UC, olmos, Stars va Premium xaridiga, narxga yoki to‘lov usuliga ta’sir qiladimi, Gram sotib olish kerakmi, shuni bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://ton.org/
//   https://ton.org/en/toncoin
//   https://ton.org/media

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "toncoin-gram-nomi-oyinchi-donatiga-tasiri",
  game: null,
  type: "info",
  datePublished: "2026-11-15",
  dateModified: "2026-11-15",
  keywords: ["toncoin gram bo'ldi donat","toncoin gram uc","gram bilan stars olish","gram sotib olish kerakmi","toncoin nomi o'zgardi","uc kriptosiz sotib olish","gram wallet donat","тонкоин переименовали в грам","toncoin gram донат","грам вместо тонкоин","купить UC без криптовалюты","telegram stars за gram"],
  locales: {
    uz: {
      title: "Klan chatida «Toncoin endi Gram»: UC, olmos va Stars donati o‘zgaradimi?",
      metaTitle: "Klan chatida «Toncoin endi Gram»",
      metaDescription: "Yo‘q: Toncoin endi Gram deb ataladi, lekin UC va olmos Player ID, Stars va Premium @username bo‘yicha so‘mda olinadi — Gram sotib olish shart emas.",
      excerpt: "Yo‘q: Toncoin endi Gram deb ataladi, lekin UC va olmos Player ID, Stars va Premium @username bo‘yicha so‘mda olinadi — Gram sotib olish shart emas.",
      answer: "Yo‘q: Toncoin endi Gram deb ataladi, lekin UC va olmos Player ID, Stars va Premium @username bo‘yicha so‘mda olinadi — Gram sotib olish shart emas.",
      body: [
        {
          t: "h2",
          id: "chatdagi-toncoin-endi-gram-xabari",
          text: "Chatdagi «Toncoin endi Gram» xabari donatga nima degani?",
        },
        {
          t: "p",
          text: "Donat uchun hech narsa o‘zgarmaydi. PUBG Mobile UC, Mobile Legends va Free Fire olmosi, Call of Duty: Mobile CP Player ID bo‘yicha olinadi. Telegram Stars va Premium @username bo‘yicha olinadi. Hammasi so‘mda to‘lanadi. Bu jarayonda kriptotanga ishlatilmaydi, shuning uchun uning nomi o‘zgargani ham xaridga ta’sir qilmaydi.",
        },
        {
          t: "p",
          text: "Nom o‘zgarishi esa rost. <a href=\"https://ton.org/\" target=\"_blank\" rel=\"noopener\">ton.org</a> bosh sahifasida TON blokcheynining asosiy tangasi Gram deb yozilgan. <a href=\"https://ton.org/en/toncoin\" target=\"_blank\" rel=\"noopener\">Toncoin sahifasida</a> bu tanga ilgari Toncoin deb ham atalgani aytilgan. Demak, yangi tanga chiqmagan: bor tanga endi boshqa nom bilan yozilyapti.",
        },
        {
          t: "p",
          text: "GemPay’da donat na Gram, na Toncoin bilan to‘lanadi. Bot so‘mda ishlaydi, shuning uchun o‘yinchi uchun tartib avvalgidek qoladi. GemPay mustaqil xizmat. U Telegram, TON jamoasi yoki o‘yin ishlab chiquvchilari bilan hamkorlik da’vo qilmaydi. ton.org’dagi boshqa yangiliklar o‘yinchiga nima berishini <a href=\"/blog/ton-org-telegram-integratsiya-oyinchiga-nima\">alohida maqolada</a> yozganmiz.",
        },
        {
          t: "h2",
          id: "postdagi-davolardan-qaysi-biri-rasmiy",
          text: "Postdagi da’volardan qaysi biri rasmiy sahifada bor?",
        },
        {
          t: "p",
          text: "Klan chatlarida tarqalayotgan postlarda odatda bir nechta da’vo birga keladi. Ularni bittalab tekshirish kerak, chunki faqat bir qismi rasmiy sahifalarda tasdiqlangan.",
        },
        {
          t: "table",
          head: [
            "Xabardagi da’vo",
            "Holati",
            "Qayerda tekshirildi",
          ],
          rows: [
            [
              "Toncoin endi Gram deb ataladi",
              "Tasdiqlangan",
              "ton.org bosh sahifasi va Toncoin sahifasi",
            ],
            [
              "Tanga belgisi ham Gram nomi bilan berilgan",
              "Tasdiqlangan",
              "ton.org media sahifasi",
            ],
            [
              "Blokcheyn ham yangi nom oldi",
              "Tasdiqlanmagan: blokcheyn logosi TON nomi bilan turibdi",
              "ton.org media sahifasi",
            ],
            [
              "Kanalni Durov shaxsan @gram deb qayta nomladi",
              "Bu maqolada tasdiqlanmagan",
              "Rasmiy manba topilmadi",
            ],
            [
              "@gram kanali rasmiy",
              "Bu maqolada tasdiqlanmagan",
              "Rasmiy manba topilmadi",
            ],
            [
              "Nom qaysi kuni o‘zgardi, tikeri qanday",
              "Aniqlanmadi",
              "Rasmiy manbada topilmadi",
            ],
          ],
        },
        {
          t: "p",
          text: "<a href=\"https://ton.org/media\" target=\"_blank\" rel=\"noopener\">Media sahifasida</a> tanga belgisi Gram nomi bilan, blokcheyn logosi esa TON nomi bilan berilgan. Ya’ni yangi nom tangaga tegishli. Tarmoq nomi o‘zgargani haqida u yerda gap yo‘q.",
        },
        {
          t: "p",
          text: "Kanal kimniki va uni kim qayta nomlagani donatga aloqador emas. Lekin «rasmiy» deb tanishtirilgan kanal nomidan kelgan taklifga darrov ishonmang.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "uc-olmos-stars-va-premium",
          text: "UC, olmos, Stars va Premium uchun nima kiritiladi va qancha turadi?",
        },
        {
          t: "table",
          head: [
            "Nima olinadi",
            "Nima kiritiladi",
            "Qanday to‘lanadi",
            "Gram kerakmi",
          ],
          rows: [
            [
              "O‘yin valyutasi: UC, olmos, CP",
              "Faqat Player ID",
              "So‘mda, narx botda ko‘rsatiladi",
              "Yo‘q",
            ],
            [
              "Telegram Stars",
              "Faqat @username",
              `Donasi ${som(STARS_UNIT_CARD, "uz")} — karta o‘tkazmasi yoki balans; ${som(STARS_UNIT_ONLINE, "uz")} — Click yoki Uzum Bank`,
              "Yo‘q",
            ],
            [
              "Telegram Premium",
              "@username",
              `3 oy — ${som(premium(3), "uz")}, 6 oy — ${som(premium(6), "uz")}, 12 oy — ${som(premium(12), "uz")}`,
              "Yo‘q",
            ],
          ],
        },
        {
          t: "p",
          text: "Har bir qatorning tafsiloti:",
        },
        {
          t: "list",
          items: [
            "<strong>O‘yin valyutasi.</strong> ID kiritilgach, bot nikni tekshirib ko‘rsatadi. Nik sizniki yoki jamoadoshingizniki ekanini tasdiqlaganingizdan keyingina to‘laysiz. Valyuta 1–5 daqiqada avtomatik tushadi. Parol hech qachon so‘ralmaydi.",
            "<strong>Stars.</strong> Bir buyurtmada 50 tadan 10 000 tagacha olish mumkin. Yulduzlar bir necha soniyada tushadi.",
            "<strong>Premium.</strong> Narx hamma to‘lov usulida bir xil, 1 oylik tarif yo‘q. Obuna Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi, akkauntga kirilmaydi.",
          ],
        },
        {
          t: "p",
          text: `Misol: turnirda yaxshi o‘ynagan jamoadoshingizga 3 oylik Premium bermoqchisiz. Uning @username’ini kiritasiz va ${som(premium(3), "uz")} to‘laysiz. Obuna bir necha soniyada faollashadi. Uning telefoni, kodi yoki paroli kerak bo‘lmaydi.`,
        },
        {
          t: "p",
          text: "Bitta cheklovni yodda tuting: Stars o‘yin valyutasiga aylanmaydi. Squad uchun UC kerak bo‘lsa, uni alohida olasiz. Qaysi valyuta nimaga yarashini <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">bu taqqoslashda</a> ko‘rishingiz mumkin.",
        },
        {
          t: "h2",
          id: "starsni-gram-bilan-olish-va",
          text: "Stars’ni Gram bilan olish va so‘mda olishning farqi nimada?",
        },
        {
          t: "p",
          text: "<a href=\"https://ton.org/en/toncoin\" target=\"_blank\" rel=\"noopener\">Toncoin sahifasiga</a> ko‘ra, Telegram ichida Gram bir nechta joyda ishlatiladi:",
        },
        {
          t: "list",
          items: [
            "Telegram Stars’ni Gram bilan sotib olish mumkin.",
            "Stars va Premium giveaway’lari uchun Gram bilan oldindan to‘lash mumkin.",
            "Telegram reklamasidan tushgan daromad Gram’da to‘lanishi mumkin.",
          ],
        },
        {
          t: "p",
          text: "Tarmoqning o‘zida Gram komissiya (fee) to‘lash, validatsiya va ovoz berish uchun kerak. Bu haqda <a href=\"https://ton.org/\" target=\"_blank\" rel=\"noopener\">bosh sahifada</a> yozilgan.",
        },
        {
          t: "p",
          text: "O‘yinchi uchun ikki yo‘lning farqi quyidagicha:",
        },
        {
          t: "table",
          head: [
            "Mezon",
            "Gram bilan",
            "GemPay’da so‘mda",
          ],
          rows: [
            [
              "Boshlash uchun nima kerak",
              "Hamyon va undagi Gram",
              "UzCard, HUMO, Click, Uzum Bank yoki bot balansi",
            ],
            [
              "Narx qaysi valyutada",
              "Gram’da",
              `So‘mda: donasi ${som(STARS_UNIT_CARD, "uz")} yoki ${som(STARS_UNIT_ONLINE, "uz")}`,
            ],
            [
              "Tarmoq to‘lovi",
              "Gram o‘tkazmasi taxminan 0,00039 Gram, USDt o‘tkazmasi taxminan 0,001 Gram",
              "Kripto o‘tkazmasi yo‘q",
            ],
            [
              "UC, olmos, CP",
              "Rasmiy manbada bunday yo‘l ko‘rsatilmagan",
              "Player ID bo‘yicha, botning o‘yin bo‘limida",
            ],
            [
              "Kalitlar kimda",
              "Foydalanuvchining o‘zida",
              "Hamyon kerak emas",
            ],
          ],
        },
        {
          t: "p",
          text: "Gram yo‘li hamyonida allaqachon Gram bor odamga qulay. Hamyoni bo‘sh o‘yinchi esa avval Gram olishi, keyin uni sarflashi kerak. Bu kartadan so‘mda to‘lashdan ko‘ra ko‘proq qadam talab qiladi. Gram so‘mdan arzonroq tushadimi degan savolni <a href=\"/blog/komissiyasiz-gram-hamyon-donat-arzonmi\">mana bu maqolada</a> alohida tahlil qilganmiz.",
        },
        {
          t: "h2",
          id: "tolov-usuli-narx-yoki-hamyon",
          text: "To‘lov usuli, narx yoki hamyon talabi o‘zgardimi?",
        },
        {
          t: "p",
          text: "Yo‘q, nom o‘zgarishidan keyin ham bu uchalasi avvalgidek:",
        },
        {
          t: "list",
          items: [
            "<strong>To‘lov usullari.</strong> GemPay UzCard, HUMO, Click, Uzum Bank va bot balansini qabul qiladi. Rossiyadan SBP orqali ham to‘lash mumkin. Visa va Mastercard qabul qilinmaydi. Xorijiy karta, VPN yoki kripto kerak emas.",
            "<strong>Narx.</strong> Stars va Premium narxi yuqoridagi jadvalda, o‘yin valyutasi narxi esa botda so‘mda ko‘rsatiladi. Bu narxlar Gram kursiga bog‘liq degan gaplar bu maqolada tasdiqlanmagan.",
            "<strong>Hamyon.</strong> <a href=\"https://ton.org/\" target=\"_blank\" rel=\"noopener\">ton.org</a> ma’lumotiga ko‘ra, Telegram ichidagi hamyon Gram Wallet deb ataladi va kalitlar foydalanuvchining o‘zida saqlanadi. Demak, ularni himoyalash ham sizning zimmangizda. Faqat donat uchun bu mas’uliyatni olishning keragi yo‘q.",
            "<strong>Eski Toncoin.</strong> Nom o‘zgargani uchun tangani biror manzilga yuborish yoki «almashtirish» kerakligi rasmiy manbalarda yozilmagan.",
          ],
        },
        {
          t: "p",
          text: "Hamyon umuman qachon kerak bo‘lishini <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">Telegram Wallet haqidagi maqola</a> tushuntiradi.",
        },
        {
          t: "h2",
          id: "nom-ozgarishidan-keyin-chatda-qanday",
          text: "Nom o‘zgarishidan keyin chatda qanday aldov takliflari paydo bo‘ladi?",
        },
        {
          t: "p",
          text: "Bunday yangiliklardan keyin chatlarda «yangi qoida» haqida xabarlar ko‘payadi. Quyidagi xabarlarga javob bermang:",
        },
        {
          t: "list",
          items: [
            "<strong>«Toncoin’ingizni Gram’ga o‘tkazib beraman, manzilga tashlang».</strong> Nom o‘zgarishi uchun hech kimga tanga yuborish talab qilinmaydi.",
            "<strong>«Endi UC faqat Gram bilan, shunda arzonroq».</strong> Notanish sotuvchiga oldindan yuborilgan tanga UC kelishini ta’minlamaydi. Bu xavfni <a href=\"/blog/ton-manzilga-donat-tolovi-oyinchi-xavfi\">TON manzilga to‘lov haqidagi maqolada</a> batafsil yozganmiz.",
            "<strong>«@gram nomidan Stars yoki Premium tarqatilyapti».</strong> Kanalning rasmiyligi ham, bunday aksiya ham tasdiqlanmagan.",
            "<strong>Seed so‘zlar, Telegram kodi yoki o‘yin paroli so‘ralsa.</strong> Suhbatni o‘sha zahoti to‘xtating. GemPay faqat Player ID yoki @username so‘raydi.",
            "<strong>Nomi o‘xshash bot yoki notanish «garant».</strong> Bot manzili aynan <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> ekanini harfma-harf tekshiring.",
          ],
        },
        {
          t: "h2",
          id: "xabarni-korgandan-keyin-donatni-qanday",
          text: "Xabarni ko‘rgandan keyin donatni qanday davom ettirasiz?",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Xabardagi da’voni <a href=\"https://ton.org/en/toncoin\" target=\"_blank\" rel=\"noopener\">ton.org</a> sahifasida tekshiring: nom o‘zgarishi u yerda yozilgan, kanal haqidagi gaplar esa yo‘q.",
            "Chatdagi havolalarni ochmang, hech kimga tanga yoki pulni oldindan yubormang.",
            "<a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>’ni oching va kerakli bo‘limni tanlang: o‘yin, Stars yoki Premium.",
            "Player ID yoki @username’ni kiriting. O‘yin bo‘limida bot ko‘rsatgan nikni tekshirib, tasdiqlang.",
            "UzCard, HUMO, Click, Uzum Bank yoki balans bilan to‘lang. Buyurtma bajarilmasa, buyurtma raqami bilan <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>’ga yozing.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi. Hisobga tushib bo‘lgan valyuta qaytarilmaydi. Shartlar <a href=\"/tolov-va-qaytarish\">To‘lov va qaytarish</a> sahifasida.",
        },
        {
          t: "sources",
          items: [
            {
              label: "TON — The Leading L1 Blockchain",
              href: "https://ton.org/",
            },
            {
              label: "Explore Toncoin",
              href: "https://ton.org/en/toncoin",
            },
            {
              label: "Media Assets",
              href: "https://ton.org/media",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Klan a’zosi UC’ni Gram evaziga sotyapti — olsam bo‘ladimi?",
          a: "Tavsiya qilmaymiz: tangani oldindan yuborasiz, UC kelishiga esa hech narsa javob bermaydi. Player ID bo‘yicha so‘mda olganingizda nik to‘lovdan oldin ko‘rsatiladi.",
        },
        {
          q: "Gram qimmatlasa, botdagi Stars narxi ham oshadimi?",
          a: `GemPay’da Stars narxi so‘mda belgilangan: karta yoki balans bilan donasi ${som(STARS_UNIT_CARD, "uz")}, Click yoki Uzum Bank bilan ${som(STARS_UNIT_ONLINE, "uz")}. Bu narx Gram kursiga bog‘langani haqida tasdiqlangan ma’lumot yo‘q.`,
        },
        {
          q: "Jamoadoshga Premium sovg‘a qilish uchun Gram Wallet ochishim kerakmi?",
          a: "Kerak emas. Uning @username’i va so‘mdagi to‘lov yetadi, obunani Telegram sovg‘a sifatida faollashtiradi.",
        },
        {
          q: "Chatda «eski Toncoin’ni tez almashtiring, bo‘lmasa yo‘qoladi» deyishyapti. Rostmi?",
          a: "ton.org’da bunday muddat yoki talab yozilmagan, Toncoin va Gram bitta tanganing nomlari sifatida berilgan. «Yordam beraman» deb manzil yuborgan odamga hech narsa jo‘natmang.",
        },
        {
          q: "Gram bilan olingan Stars’ni UC yoki olmosga aylantirsa bo‘ladimi?",
          a: "Yo‘q. Stars qaysi yo‘l bilan olinganidan qat’i nazar o‘yin valyutasiga aylanmaydi, UC, olmos va CP botning o‘yin bo‘limida alohida sotiladi.",
        },
        {
          q: "Menda faqat Visa karta bor. Gram o‘rniga u bilan to‘lay olamanmi?",
          a: "Yo‘q, GemPay Visa va Mastercard’ni qabul qilmaydi. UzCard, HUMO, Click, Uzum Bank yoki bot balansi mos keladi, Rossiyadan esa SBP orqali to‘lash mumkin.",
        },
      ],
    },
    ru: {
      title: "«Toncoin теперь Gram» в чате клана: изменится ли донат UC, алмазов и Stars?",
      metaTitle: "«Toncoin теперь Gram» в чате клана",
      metaDescription: "Нет: Toncoin теперь называется Gram, но UC и алмазы покупаются по Player ID, а Stars и Premium — по @username за сумы. Покупать Gram не нужно.",
      excerpt: "Нет: Toncoin теперь называется Gram, но UC и алмазы покупаются по Player ID, а Stars и Premium — по @username за сумы. Покупать Gram не нужно.",
      answer: "Нет: Toncoin теперь называется Gram, но UC и алмазы покупаются по Player ID, а Stars и Premium — по @username за сумы. Покупать Gram не нужно.",
      body: [
        {
          t: "h2",
          id: "chatdagi-toncoin-endi-gram-xabari",
          text: "Что значит сообщение «Toncoin теперь Gram» для доната?",
        },
        {
          t: "p",
          text: "Для доната ничего не меняется. UC в PUBG Mobile, алмазы в Mobile Legends и Free Fire, CP в Call of Duty: Mobile покупаются по Player ID. Telegram Stars и Premium — по @username. Всё оплачивается в сумах. Криптовалюта в этой покупке не участвует, поэтому её новое название на неё не влияет.",
        },
        {
          t: "p",
          text: "Само переименование — правда. На главной странице <a href=\"https://ton.org/\" target=\"_blank\" rel=\"noopener\">ton.org</a> основная монета блокчейна TON названа Gram. На <a href=\"https://ton.org/en/toncoin\" target=\"_blank\" rel=\"noopener\">странице Toncoin</a> сказано, что раньше эта монета была известна как Toncoin. Значит, новой монеты не появилось: у существующей просто другое название.",
        },
        {
          t: "p",
          text: "В GemPay донат не оплачивается ни в Gram, ни в Toncoin. Бот работает в сумах, так что для игрока всё остаётся как раньше. GemPay — независимый сервис и не заявляет о партнёрстве с Telegram, командой TON или разработчиками игр. Что дают игроку другие новости с ton.org, мы разобрали <a href=\"/blog/ton-org-telegram-integratsiya-oyinchiga-nima\">в отдельной статье</a>.",
        },
        {
          t: "h2",
          id: "postdagi-davolardan-qaysi-biri-rasmiy",
          text: "Какие утверждения из поста есть на официальных страницах?",
        },
        {
          t: "p",
          text: "В постах, которые расходятся по чатам кланов, обычно смешано сразу несколько утверждений. Проверять их лучше по одному: официально подтверждена только часть.",
        },
        {
          t: "table",
          head: [
            "Утверждение в сообщении",
            "Статус",
            "Где проверено",
          ],
          rows: [
            [
              "Toncoin теперь называется Gram",
              "Подтверждено",
              "Главная страница ton.org и страница Toncoin",
            ],
            [
              "Значок монеты тоже подписан как Gram",
              "Подтверждено",
              "Медиастраница ton.org",
            ],
            [
              "Блокчейн тоже получил новое название",
              "Не подтверждено: логотип блокчейна подписан как TON",
              "Медиастраница ton.org",
            ],
            [
              "Канал в @gram лично переименовал Дуров",
              "В этой статье не подтверждено",
              "Официальный источник не найден",
            ],
            [
              "Канал @gram — официальный",
              "В этой статье не подтверждено",
              "Официальный источник не найден",
            ],
            [
              "В какой день сменилось название и какой тикер",
              "Не установлено",
              "В официальных источниках не найдено",
            ],
          ],
        },
        {
          t: "p",
          text: "На <a href=\"https://ton.org/media\" target=\"_blank\" rel=\"noopener\">медиастранице</a> значок монеты подписан как Gram, а логотип блокчейна — как TON. То есть новое название относится к монете. О переименовании самой сети там ничего не сказано.",
        },
        {
          t: "p",
          text: "Кому принадлежит канал и кто его переименовал, к донату отношения не имеет. Но предложениям от канала, который выдают за «официальный», не стоит верить сразу.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "uc-olmos-stars-va-premium",
          text: "Что вводить для UC, алмазов, Stars и Premium и сколько это стоит?",
        },
        {
          t: "table",
          head: [
            "Что покупается",
            "Что вводится",
            "Как оплачивается",
            "Нужен ли Gram",
          ],
          rows: [
            [
              "Игровая валюта: UC, алмазы, CP",
              "Только Player ID",
              "В сумах, цена указана в боте",
              "Нет",
            ],
            [
              "Telegram Stars",
              "Только @username",
              `За штуку ${som(STARS_UNIT_CARD, "ru")} — перевод с карты или баланс; ${som(STARS_UNIT_ONLINE, "ru")} — Click или Uzum Bank`,
              "Нет",
            ],
            [
              "Telegram Premium",
              "@username",
              `3 месяца — ${som(premium(3), "ru")}, 6 месяцев — ${som(premium(6), "ru")}, 12 месяцев — ${som(premium(12), "ru")}`,
              "Нет",
            ],
          ],
        },
        {
          t: "p",
          text: "Подробнее по каждой строке:",
        },
        {
          t: "list",
          items: [
            "<strong>Игровая валюта.</strong> После ввода ID бот проверяет и показывает ник. Платите только после того, как подтвердите, что это ваш ник или ник тиммейта. Валюта приходит автоматически за 1–5 минут. Пароль не запрашивается никогда.",
            "<strong>Stars.</strong> В одном заказе можно купить от 50 до 10 000 звёзд. Они приходят за несколько секунд.",
            "<strong>Premium.</strong> Цена одинакова при любом способе оплаты, тарифа на 1 месяц нет. Подписка подключается через официальный механизм подарков Telegram, в аккаунт никто не входит.",
          ],
        },
        {
          t: "p",
          text: `Пример: вы хотите подарить 3 месяца Premium тиммейту, который хорошо отыграл турнир. Вводите его @username и платите ${som(premium(3), "ru")}. Подписка активируется за несколько секунд. Его телефон, код или пароль не нужны.`,
        },
        {
          t: "p",
          text: "Одно ограничение стоит помнить: Stars не превращаются в игровую валюту. Если скваду нужны UC, их покупают отдельно. Какая валюта для чего подходит, видно в <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">этом сравнении</a>.",
        },
        {
          t: "h2",
          id: "starsni-gram-bilan-olish-va",
          text: "Чем покупка Stars за Gram отличается от покупки за сумы?",
        },
        {
          t: "p",
          text: "По данным <a href=\"https://ton.org/en/toncoin\" target=\"_blank\" rel=\"noopener\">страницы Toncoin</a>, внутри Telegram Gram используется в нескольких местах:",
        },
        {
          t: "list",
          items: [
            "Telegram Stars можно купить за Gram.",
            "Розыгрыши Stars и Premium можно оплатить в Gram заранее.",
            "Доход от рекламы в Telegram может выплачиваться в Gram.",
          ],
        },
        {
          t: "p",
          text: "В самой сети Gram нужен для оплаты комиссий, валидации и голосования. Об этом написано на <a href=\"https://ton.org/\" target=\"_blank\" rel=\"noopener\">главной странице</a>.",
        },
        {
          t: "p",
          text: "Для игрока два пути различаются так:",
        },
        {
          t: "table",
          head: [
            "Критерий",
            "За Gram",
            "В GemPay за сумы",
          ],
          rows: [
            [
              "Что нужно для начала",
              "Кошелёк и Gram на нём",
              "UzCard, HUMO, Click, Uzum Bank или баланс бота",
            ],
            [
              "В какой валюте цена",
              "В Gram",
              `В сумах: ${som(STARS_UNIT_CARD, "ru")} или ${som(STARS_UNIT_ONLINE, "ru")} за штуку`,
            ],
            [
              "Сетевая комиссия",
              "Перевод Gram — около 0,00039 Gram, перевод USDt — около 0,001 Gram",
              "Криптопереводов нет",
            ],
            [
              "UC, алмазы, CP",
              "В официальном источнике такой путь не указан",
              "По Player ID, в игровом разделе бота",
            ],
            [
              "У кого ключи",
              "У самого пользователя",
              "Кошелёк не нужен",
            ],
          ],
        },
        {
          t: "p",
          text: "Путь через Gram удобен тому, у кого на кошельке уже есть Gram. Игроку с пустым кошельком сначала придётся купить Gram, а потом его потратить. Шагов получается больше, чем при оплате картой в сумах. Выходит ли Gram дешевле сумов, мы отдельно разобрали <a href=\"/blog/komissiyasiz-gram-hamyon-donat-arzonmi\">в этой статье</a>.",
        },
        {
          t: "h2",
          id: "tolov-usuli-narx-yoki-hamyon",
          text: "Изменились ли способы оплаты, цены или требование кошелька?",
        },
        {
          t: "p",
          text: "Нет, после переименования все три пункта остались прежними:",
        },
        {
          t: "list",
          items: [
            "<strong>Способы оплаты.</strong> GemPay принимает UzCard, HUMO, Click, Uzum Bank и баланс бота. Из России можно платить через СБП. Visa и Mastercard не принимаются. Зарубежная карта, VPN или криптовалюта не нужны.",
            "<strong>Цены.</strong> Цены на Stars и Premium — в таблице выше, цена игровой валюты показывается в боте в сумах. Разговоры о том, что эти цены привязаны к курсу Gram, в этой статье не подтверждены.",
            "<strong>Кошелёк.</strong> По данным <a href=\"https://ton.org/\" target=\"_blank\" rel=\"noopener\">ton.org</a>, кошелёк внутри Telegram называется Gram Wallet, а ключи хранятся у самого пользователя. Значит, и защищать их тоже вам. Брать на себя эту ответственность только ради доната незачем.",
            "<strong>Старые Toncoin.</strong> В официальных источниках не сказано, что из-за переименования монеты нужно куда-то отправить или «обменять».",
          ],
        },
        {
          t: "p",
          text: "Когда кошелёк вообще может понадобиться, объясняет <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">статья о Telegram Wallet</a>.",
        },
        {
          t: "h2",
          id: "nom-ozgarishidan-keyin-chatda-qanday",
          text: "Какие мошеннические предложения появляются в чатах после переименования?",
        },
        {
          t: "p",
          text: "После таких новостей в чатах становится больше сообщений о «новых правилах». На эти сообщения не отвечайте:",
        },
        {
          t: "list",
          items: [
            "<strong>«Переведу ваши Toncoin в Gram, скиньте на адрес».</strong> Для переименования никому ничего отправлять не нужно.",
            "<strong>«Теперь UC только за Gram, так дешевле».</strong> Монеты, отправленные незнакомому продавцу заранее, не гарантируют, что UC придут. Подробно этот риск разобран <a href=\"/blog/ton-manzilga-donat-tolovi-oyinchi-xavfi\">в статье об оплате на TON-адрес</a>.",
            "<strong>«От имени @gram раздают Stars или Premium».</strong> Не подтверждены ни официальность канала, ни такая акция.",
            "<strong>Просят seed-фразу, код от Telegram или пароль от игры.</strong> Сразу прекращайте разговор. GemPay запрашивает только Player ID или @username.",
            "<strong>Бот с похожим именем или незнакомый «гарант».</strong> Проверьте по буквам, что адрес бота — именно <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>.",
          ],
        },
        {
          t: "h2",
          id: "xabarni-korgandan-keyin-donatni-qanday",
          text: "Как продолжить донат после такого сообщения?",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Проверьте утверждение из сообщения на странице <a href=\"https://ton.org/en/toncoin\" target=\"_blank\" rel=\"noopener\">ton.org</a>: переименование там указано, а слов о канале нет.",
            "Не открывайте ссылки из чата и никому не отправляйте монеты или деньги заранее.",
            "Откройте <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> и выберите нужный раздел: игра, Stars или Premium.",
            "Введите Player ID или @username. В игровом разделе проверьте ник, который показал бот, и подтвердите его.",
            "Оплатите через UzCard, HUMO, Click, Uzum Bank или с баланса. Если заказ не выполнен, напишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> с номером заказа.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Если заказ не выполнен, деньги полностью возвращаются в течение 3 рабочих дней. Валюта, которая уже пришла на счёт, не возвращается. Условия — на странице <a href=\"/tolov-va-qaytarish\">Оплата и возврат</a>.",
        },
        {
          t: "sources",
          items: [
            {
              label: "TON — The Leading L1 Blockchain",
              href: "https://ton.org/",
            },
            {
              label: "Explore Toncoin",
              href: "https://ton.org/en/toncoin",
            },
            {
              label: "Media Assets",
              href: "https://ton.org/media",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Соклановец продаёт UC за Gram — можно у него купить?",
          a: "Не советуем: монеты вы отправляете заранее, а за то, что UC придут, никто не отвечает. При покупке за сумы по Player ID ник показывают ещё до оплаты.",
        },
        {
          q: "Если Gram подорожает, Stars в боте тоже подорожают?",
          a: `В GemPay цена Stars установлена в сумах: ${som(STARS_UNIT_CARD, "ru")} за штуку с карты или баланса, ${som(STARS_UNIT_ONLINE, "ru")} через Click или Uzum Bank. Подтверждённых данных о привязке этой цены к курсу Gram нет.`,
        },
        {
          q: "Нужно ли открывать Gram Wallet, чтобы подарить тиммейту Premium?",
          a: "Не нужно. Хватит его @username и оплаты в сумах, а подписку Telegram активирует как подарок.",
        },
        {
          q: "В чате пишут: «Срочно обменяйте старые Toncoin, иначе пропадут». Это правда?",
          a: "На ton.org такого срока или требования нет: Toncoin и Gram там указаны как названия одной и той же монеты. Тому, кто присылает адрес и предлагает «помочь», ничего не отправляйте.",
        },
        {
          q: "Можно ли обменять Stars, купленные за Gram, на UC или алмазы?",
          a: "Нет. Как бы вы ни купили Stars, в игровую валюту они не превращаются, а UC, алмазы и CP продаются отдельно в игровом разделе бота.",
        },
        {
          q: "У меня только карта Visa. Можно заплатить ею вместо Gram?",
          a: "Нет, GemPay не принимает Visa и Mastercard. Подойдут UzCard, HUMO, Click, Uzum Bank или баланс бота, а из России можно оплатить через СБП.",
        },
      ],
    },
  },
};

export default article;
