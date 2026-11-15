// Avtoblogyoz yasagan maqola (2026-11-15). Niyat: Fragment'da yoki klan chatida TON Connect ro'yxatidagi yangi «Telegram Messenger» hamyonini ko'rgan o'zbekistonlik o'yinchi «Fragment yangi Telegram hamyon Stars» deb qidiradi. U o'ziga yoki jamoadoshiga Stars va Premium olish uchun bu hamyonni ulash kerakmi, ulash xavfsizmi va UC donatiga ta'siri bormi — shuni bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://fragment.com/about
//   https://core.telegram.org/bots/blockchain-guidelines
//   https://core.telegram.org/bots/api-changelog

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "fragment-yangi-telegram-hamyon-oyinchi-stars",
  game: null,
  type: "info",
  datePublished: "2026-11-15",
  dateModified: "2026-11-15",
  keywords: ["Fragment yangi Telegram hamyon Stars","Fragment Telegram Messenger hamyon","TON Connect Telegram hamyon o‘yinchi","Stars olish uchun hamyon kerakmi","jamoadoshga Premium sovg‘a hamyonsiz","Telegram Stars so‘mda sotib olish","UC donat Telegram hamyon","новый Telegram кошелёк Fragment","Telegram Messenger TON Connect Fragment","купить Telegram Stars без кошелька","Telegram Premium в подарок сумы"],
  locales: {
    uz: {
      title: "Fragment’dagi yangi Telegram hamyon: Stars, Premium va UC uchun ulash kerakmi?",
      metaTitle: "Fragment’dagi yangi Telegram hamyon",
      metaDescription: "Yo‘q, Fragment’dagi yangi «Telegram Messenger» hamyonini ulash shart emas: Stars va Premium @username, UC esa Player ID bo‘yicha so‘mda olinadi.",
      excerpt: "Yo‘q, Fragment’dagi yangi «Telegram Messenger» hamyonini ulash shart emas: Stars va Premium @username, UC esa Player ID bo‘yicha so‘mda olinadi.",
      answer: "Yo‘q, Fragment’dagi yangi «Telegram Messenger» hamyonini ulash shart emas: Stars va Premium @username, UC esa Player ID bo‘yicha so‘mda olinadi.",
      body: [
        {
          t: "h2",
          id: "stars-yoki-premium-olish-uchun",
          text: "Stars yoki Premium olish uchun Fragment’ga «Telegram Messenger» hamyonini ulash kerakmi?",
        },
        {
          t: "p",
          text: "Yo‘q. O‘zingizga ham, jamoadoshingizga ham Stars yoki Premium olish uchun Fragment’ga hamyon ulamaysiz. Bu yangi «Telegram Messenger» yozuviga ham, boshqa har qanday TON hamyonga ham tegishli.",
        },
        {
          t: "p",
          text: "Stars va Premium Telegram akkauntiga bog‘langan. Ularni yetkazish uchun oluvchining @username’i yetadi, hamyon manzili esa umuman kerak emas.",
        },
        {
          t: "p",
          text: "GemPay’da bu quyidagicha:",
        },
        {
          t: "list",
          items: [
            `<strong>Stars.</strong> Bir buyurtmada 50 dan 10 000 tagacha, faqat @username so‘raladi, bir necha soniyada tushadi. Karta o‘tkazmasi yoki bot balansidan to‘lansa, donasi ${som(STARS_UNIT_CARD, "uz")}, Click yoki Uzum Bank orqali onlayn to‘lansa, ${som(STARS_UNIT_ONLINE, "uz")}.`,
            `<strong>Premium.</strong> @username bo‘yicha Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi, akkauntga kirilmaydi. 3 oy — ${som(premium(3), "uz")}, 6 oy — ${som(premium(6), "uz")}, 12 oy — ${som(premium(12), "uz")}. Narx barcha to‘lov usullarida bir xil, 1 oylik tarif yo‘q.`,
            "<strong>To‘lov.</strong> UzCard, HUMO, Click, Uzum Bank yoki bot balansi. TON, kripto, xorijiy karta va VPN kerak emas.",
          ],
        },
        {
          t: "p",
          text: "Fragment’da hamyon yuqori o‘ng burchakdagi «Connect TON» tugmasi bilan ulanadi (<a href=\"https://fragment.com/about\" target=\"_blank\" rel=\"noopener\">Fragment qanday ishlaydi</a>). Bu qadam Fragment’ning o‘zida TON bilan ishlaydiganlar uchun. So‘mda Stars olayotgan o‘yinchining yo‘lida u yo‘q. Hamyon umuman o‘yinchiga kerakmi, degan savol alohida ko‘rilgan: <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">Telegram Wallet o‘yinchiga kerakmi</a>.",
        },
        {
          t: "h2",
          id: "telegram-messenger-yozuvi-haqida-telegram",
          text: "«Telegram Messenger» yozuvi haqida Telegram hujjatlari nima deydi?",
        },
        {
          t: "p",
          text: "Yangi yozuv haqidagi gaplar asosan kanal postlari va chatlardagi skrinshotlar orqali tarqalmoqda. Kanal posti rasmiy manba emas. Shuning uchun har bir da’voni Telegram va Fragment hujjatlari bilan solishtirdik.",
        },
        {
          t: "table",
          head: [
            "Chatdagi da’vo",
            "Rasmiy manbada",
            "O‘yinchi uchun ma’nosi",
          ],
          rows: [
            [
              "Fragment’ning TON Connect ro‘yxatida «Telegram Messenger» alohida yozuv bo‘lib chiqqan",
              "Tasdiqlanmagan",
              "Stars va Premium xaridi bunga bog‘liq emas",
            ],
            [
              "Uning ikonkasi boshqacha, «Wallet in Telegram»dan alohida turadi",
              "Tasdiqlanmagan",
              "Ta’siri yo‘q",
            ],
            [
              "Bosilsa hozircha @wallet ochiladi",
              "Tasdiqlanmagan",
              "Sinab ko‘rish shart emas",
            ],
            [
              "Hamyonlar reyestrida yozuvning o‘z havolasi va ko‘prigi bor",
              "Bu maqolada tekshirilmagan",
              "Ta’siri yo‘q",
            ],
            [
              "Mini App’lar kripto hamyon bilan faqat TON Connect SDK orqali ishlaydi",
              "Telegram qoidalarida bor",
              "Bu Mini App ishlab chiquvchilariga qo‘yilgan talab",
            ],
            [
              "TON Connect’da hamyon tanlovini cheklash taqiqlangan, funksiya mavjudligiga bog‘liq holatlar bundan mustasno",
              "Telegram qoidalarida bor",
              "Ro‘yxatdagi hamyonlar to‘plamini ilova o‘zboshimchalik bilan qisqartira olmaydi",
            ],
            [
              "Bot API’ga TON hamyon kartasi va TON o‘tkazmasi uchun klasslar qo‘shilgan",
              "Changelog’da bor",
              "Botlar uchun texnik yangilik, Stars va Premium olish tartibi o‘zgarmaydi",
            ],
          ],
        },
        {
          t: "p",
          text: "Mini App qoidalari Telegram’ning <a href=\"https://core.telegram.org/bots/blockchain-guidelines\" target=\"_blank\" rel=\"noopener\">blokcheyn bo‘yicha yo‘riqnomasida</a> yozilgan. U yerda ilova ichida tranzaksiyani TON Connect orqali imzolashga ruxsat borligi ham aytilgan.",
        },
        {
          t: "p",
          text: "<a href=\"https://core.telegram.org/bots/api-changelog\" target=\"_blank\" rel=\"noopener\">Bot API changelog’ida</a> TonWalletCard, TonWalletCardSticker, TonNft, TonNftAttribute va TonWalletTransfer klasslari qayd etilgan. Botga keladigan so‘rovda foydalanuvchining TON hamyon kartasi va hamyonda imzolangan ma’lumot bo‘lishi mumkinligi ham yozilgan. Bu botlar hamyon bilan qanday ishlashi haqida. Foydalanuvchiga «hamyon ulang» degan talab emas.",
        },
        {
          t: "p",
          text: "Yangi yozuv aynan qaysi hamyonga tegishli ekani va O‘zbekistonda qanday ishlashi rasman e’lon qilinmagan. Bu haqda taxmin qilmaymiz.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "uc-olmos-yoki-cp-olayotgan",
          text: "UC, olmos yoki CP olayotgan o‘yinchiga yangi hamyon nima o‘zgartiradi?",
        },
        {
          t: "p",
          text: "Hech narsa. PUBG Mobile UC, Mobile Legends va Free Fire olmosi, Call of Duty Mobile CP o‘yin akkauntiga Player ID bo‘yicha tushadi. Telegram hamyoni bu zanjirda qatnashmaydi.",
        },
        {
          t: "p",
          text: "GemPay’da o‘yin donati shunday ishlaydi:",
        },
        {
          t: "list",
          items: [
            "faqat Player ID so‘raladi, parol hech qachon so‘ralmaydi;",
            "bot nikni tekshirib ko‘rsatadi, siz tasdiqlaganingizdan keyingina to‘lov qilinadi;",
            "valyuta 1–5 daqiqada avtomatik tushadi;",
            "o‘yin valyutasi narxlari botda ko‘rsatiladi.",
          ],
        },
        {
          t: "p",
          text: "Stars ham UC yoki olmosga aylanmaydi. Ya’ni hamyon ham, Stars ham o‘yin valyutasining o‘rnini bosmaydi. Qaysi «pul» qayerda sarflanishi <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">Telegram Stars yoki o‘yin valyutasi</a> maqolasidagi jadvalda bor.",
        },
        {
          t: "p",
          text: "Misol: klandoshingiz «yangi hamyonni ulasang, UC chegirma bilan tushadi» deb yozdi. Hamyon va UC narxi o‘rtasidagi bunday bog‘liqlik hech bir rasmiy manbada yo‘q. Bu gapni tekshirilmagan mish-mish deb qabul qiling.",
        },
        {
          t: "h2",
          id: "fragment-ton-yoki-somdagi-bot",
          text: "Fragment + TON yoki so‘mdagi bot: o‘yinchi uchun farq jadvalda",
        },
        {
          t: "p",
          text: "Ikki yo‘lni o‘yinchining kundalik ehtiyojlari bo‘yicha solishtiramiz.",
        },
        {
          t: "table",
          head: [
            "Mezon",
            "Fragment + TON hamyon",
            "GemPay bot (so‘mda)",
          ],
          rows: [
            [
              "Boshlash uchun nima kerak",
              "TON hamyon (Fragment misol sifatida TonKeeper va MyTonWallet’ni keltiradi) va uni «Connect TON» orqali ulash",
              "Stars va Premium uchun @username, o‘yin uchun Player ID",
            ],
            [
              "To‘lov",
              "Ulangan TON hamyon orqali",
              "UzCard, HUMO, Click, Uzum Bank, bot balansi; Rossiyadan SBP. Visa/Mastercard qabul qilinmaydi",
            ],
            [
              "Kalitlar",
              "Faqat sizda. Fragment yo‘qolgan hamyonni tiklab bera olmaydi",
              "Hamyon yo‘q, saqlanadigan kalit ham yo‘q",
            ],
            [
              "UC, olmos, CP",
              "Fragment’da yo‘q",
              "Player ID bo‘yicha, 1–5 daqiqada",
            ],
            [
              "Squad do‘stiga sovg‘a",
              "Hamyonni o‘zingiz boshqarasiz",
              "@username kiritiladi, xolos",
            ],
            [
              "Buyurtma bajarilmasa",
              "Bu maqolada ko‘rib chiqilmagan",
              "Pul 3 ish kuni ichida to‘liq qaytariladi, tushgan valyuta qaytarilmaydi",
            ],
          ],
        },
        {
          t: "p",
          text: "Qaytarish tartibi <a href=\"/tolov-va-qaytarish\">to‘lov va qaytarish</a> sahifasida batafsil yozilgan.",
        },
        {
          t: "p",
          text: "Kripto bilan ishlamaydigan o‘yinchiga so‘mdagi yo‘l soddaroq: hamyon ochish, zaxira so‘zlarni saqlash va avval TON sotib olish kerak bo‘lmaydi. Fragment narxlarini bu yerda solishtirmadik: ularni tekshirilgan manbada topmadik.",
        },
        {
          t: "h2",
          id: "squad-dostiga-stars-yoki-premium",
          text: "Squad do‘stiga Stars yoki Premium: 5 qadam, faqat @username bilan",
        },
        {
          t: "p",
          text: "Jamoadoshingizga sovg‘a qilish uchun undan kod, parol yoki hamyon manzili so‘ramaysiz. Faqat @username’ini bilib oling.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "<a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>ni yoki uning Mini App’ini oching.",
            "Stars yoki Premium bo‘limiga o‘ting. Stars uchun 50 dan 10 000 tagacha miqdor kiriting, Premium uchun 3, 6 yoki 12 oyni tanlang.",
            "Jamoadoshingizning @username’ini kiriting va harfma-harf solishtiring. Bitta harf xato bo‘lsa, sovg‘a boshqa odamga ketishi mumkin. Klan chatidagi nikni emas, uning profilidagi @username’ni nusxalang.",
            "UzCard, HUMO, Click, Uzum Bank yoki balans bilan so‘mda to‘lang. Premium narxi hamma usulda bir xil, Stars’da esa karta va onlayn to‘lov narxi farq qiladi.",
            "Bir necha soniyadan keyin jamoadoshingizdan tushganini so‘rang. Kelmagan bo‘lsa, buyurtma raqami bilan <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>ga yozing.",
          ],
        },
        {
          t: "p",
          text: "Nima sovg‘a qilishni hali tanlamagan bo‘lsangiz, <a href=\"/blog/jamoadosh-tugilgan-kuniga-telegram-sovga\">jamoadosh tug‘ilgan kuniga Telegram sovg‘a</a> maqolasida UC, Premium va Stars qaysi holatga mos kelishi yozilgan.",
        },
        {
          t: "h2",
          id: "fragmentga-hamyon-ulashdan-oldingi-tekshiruv",
          text: "Fragment’ga hamyon ulashdan oldingi tekshiruv ro‘yxati",
        },
        {
          t: "p",
          text: "Ayrim o‘yinchilar Fragment’dan boshqa ishlar uchun foydalanadi. Ulashga qaror qilgan bo‘lsangiz, quyidagilarni oldindan tekshiring:",
        },
        {
          t: "list",
          items: [
            "<a href=\"https://fragment.com\" target=\"_blank\" rel=\"noopener\">fragment.com</a> manzilini o‘zingiz yozib oching. Chatda tashlangan havoladan kirmang.",
            "Hamyonni faqat yuqori o‘ngdagi «Connect TON» tugmasi orqali ulang.",
            "Ulagandan keyin to‘g‘ri hamyon tanlanganini qayta ko‘ring. Fragment buni o‘zi ham tavsiya qiladi.",
            "Seed so‘zlarni hech kimga, hech qanday botga yozmang. Fragment sahifasiga ko‘ra, mablag‘ kalitlari faqat egasida bo‘ladi.",
            "Zaxira so‘zlarni o‘zingiz saqlang. Fragment maxfiy kalitlarni saqlamaydi va yo‘qolgan hamyonni tiklay olmaydi.",
            "«Telegram Messenger» yozuvini bosganda nima ochilishi rasman tasdiqlanmagan. Ikkilansangiz, o‘zingiz tanigan hamyon bilan ishlang yoki rasmiy e’lonni kuting.",
          ],
        },
        {
          t: "p",
          text: "Bir nechta Telegram akkauntni Fragment’ga ulash masalasi alohida yozilgan: <a href=\"/blog/fragment-verifikatsiyasiz-akkaunt-ulash-oyinchi\">Fragment verifikatsiyasiz akkaunt ulash</a>.",
        },
        {
          t: "h2",
          id: "hamyonni-ulab-ol-stars-ikki",
          text: "«Hamyonni ulab ol, Stars ikki barobar» kabi xabarlarni qanday ajratasiz?",
        },
        {
          t: "p",
          text: "Har bir yangi mish-mishdan keyin klan chatlarida «imkoniyat» haqidagi xabarlar ko‘payadi. Ko‘pincha ular shunday ko‘rinadi:",
        },
        {
          t: "list",
          items: [
            "«Yangi Telegram hamyonni faollashtirish uchun avval TON tashla.»",
            "«Hamyonni ulasang, Stars ikki barobar bo‘ladi.»",
            "«Ulash uchun seed so‘zlarni shu botga yoz.»",
            "Fragment’ga o‘xshash, lekin manzili boshqa sahifaga havola.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Stars, Premium yoki UC olish uchun hamyonni faollashtirish, oldindan kripto yuborish yoki seed so‘z aytish kerak emas. Shunday talab qo‘yilsa, suhbatni to‘xtating va havolani ochmang.",
        },
        {
          t: "p",
          text: "Begona kompyuterda Telegram yoki hamyon ochiq qolgan bo‘lsa, uni yopish tartibi <a href=\"/blog/begona-kompyuterda-wallet-sessiya-oyinchi\">begona kompyuterdagi Wallet sessiyasi</a> maqolasida bor. Hamyon nomi o‘zgarishi haqidagi shunga o‘xshash mish-mish <a href=\"/blog/wallet-walt-oyinchi-stars-donat\">Wallet va Walt</a> maqolasida tahlil qilingan.",
        },
        {
          t: "p",
          text: "GemPay Telegram’dan mustaqil xizmat va Telegram nomidan gapirmaydi. Buyurtma uchun hamyon ham, seed so‘z ham so‘ralmaydi: o‘yin donatiga Player ID, Stars va Premium’ga @username yetadi.",
        },
        {
          t: "sources",
          items: [
            {
              label: "How does Fragment work?",
              href: "https://fragment.com/about",
            },
            {
              label: "Blockchain Guidelines",
              href: "https://core.telegram.org/bots/blockchain-guidelines",
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
          q: "«Telegram Messenger»ni sinab ko‘rish uchun ulab qo‘ydim. Endi Stars xaridim shu hamyondan yechiladimi?",
          a: "Yo‘q. GemPay’da Stars so‘mda karta, Click, Uzum Bank yoki balans bilan to‘lanadi, ulangan hamyon bu to‘lovda ishtirok etmaydi. Yozuvning o‘zi nima qilishi esa rasman tasdiqlanmagan.",
        },
        {
          q: "Jamoadoshimga Premium olib bermoqchiman. U menga kirish kodini yuborishi kerakmi?",
          a: "Kerak emas va so‘ramang ham. Premium uning @username’iga Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi, akkauntiga hech kim kirmaydi.",
        },
        {
          q: "Chatda «yangi hamyon orqali Stars arzonroq» deyishyapti. Bu rostmi?",
          a: `Bunday gap rasmiy manbalarda yo‘q. GemPay’da Stars narxi faqat to‘lov usuliga bog‘liq: karta yoki balans bilan donasi ${som(STARS_UNIT_CARD, "uz")}, Click yoki Uzum Bank bilan ${som(STARS_UNIT_ONLINE, "uz")}.`,
        },
        {
          q: "Ortiqcha Stars’ni klan uchun UC’ga aylantirsa bo‘ladimi?",
          a: "Yo‘q, Stars o‘yin valyutasiga almashtirilmaydi. UC alohida buyurtma bilan, Player ID bo‘yicha o‘yin akkauntiga tushadi.",
        },
        {
          q: "Fragment’ga ulagan hamyonimning zaxira so‘zlarini yo‘qotdim. Fragment yordam beradimi?",
          a: "Yo‘q: Fragment maxfiy kalitlarni saqlamaydi, shuning uchun hamyonni tiklay olmaydi. Zaxira so‘zlarni boshidan faqat o‘zingiz biladigan joyda saqlash kerak.",
        },
        {
          q: "Jamoadoshimga Stars yubordim, u esa tushmaganini aytyapti. Nima qilay?",
          a: "Avval u @username’ni to‘g‘ri kiritganingizni tekshiring, keyin buyurtma raqami bilan @StarsPaymeeSupport’ga yozing. Buyurtma bajarilmagan bo‘lsa, pul 3 ish kuni ichida to‘liq qaytariladi.",
        },
      ],
    },
    ru: {
      title: "Новый кошелёк Telegram во Fragment: нужен ли он для Stars, Premium и UC?",
      metaTitle: "Новый кошелёк Telegram во Fragment",
      metaDescription: "Нет, подключать новый кошелёк «Telegram Messenger» во Fragment не нужно: Stars и Premium покупаются в сумах по @username, а UC — по Player ID.",
      excerpt: "Нет, подключать новый кошелёк «Telegram Messenger» во Fragment не нужно: Stars и Premium покупаются в сумах по @username, а UC — по Player ID.",
      answer: "Нет, подключать новый кошелёк «Telegram Messenger» во Fragment не нужно: Stars и Premium покупаются в сумах по @username, а UC — по Player ID.",
      body: [
        {
          t: "h2",
          id: "stars-yoki-premium-olish-uchun",
          text: "Нужно ли подключать кошелёк «Telegram Messenger» во Fragment, чтобы купить Stars или Premium?",
        },
        {
          t: "p",
          text: "Нет. Чтобы купить Stars или Premium себе или тиммейту, кошелёк во Fragment подключать не нужно. Это касается и новой записи «Telegram Messenger», и любого другого TON-кошелька.",
        },
        {
          t: "p",
          text: "Stars и Premium привязаны к аккаунту Telegram. Для доставки хватает @username получателя, а адрес кошелька не нужен вовсе.",
        },
        {
          t: "p",
          text: "В GemPay это работает так:",
        },
        {
          t: "list",
          items: [
            `<strong>Stars.</strong> От 50 до 10 000 за один заказ. Нужен только @username, звёзды приходят за несколько секунд. При оплате переводом с карты или с баланса бота одна звезда стоит ${som(STARS_UNIT_CARD, "ru")}, при онлайн-оплате через Click или Uzum Bank — ${som(STARS_UNIT_ONLINE, "ru")}.`,
            `<strong>Premium.</strong> Подключается по @username через официальный механизм подарков Telegram, в аккаунт никто не входит. 3 месяца — ${som(premium(3), "ru")}, 6 месяцев — ${som(premium(6), "ru")}, 12 месяцев — ${som(premium(12), "ru")}. Цена одинакова при любом способе оплаты, тарифа на 1 месяц нет.`,
            "<strong>Оплата.</strong> UzCard, HUMO, Click, Uzum Bank или баланс бота. TON, криптовалюта, зарубежная карта и VPN не нужны.",
          ],
        },
        {
          t: "p",
          text: "Во Fragment кошелёк подключается кнопкой «Connect TON» в правом верхнем углу (<a href=\"https://fragment.com/about\" target=\"_blank\" rel=\"noopener\">как работает Fragment</a>). Этот шаг нужен тем, кто работает с TON на самом Fragment. Игроку, который покупает Stars за сумы, он не нужен. Нужен ли игроку кошелёк вообще, мы разобрали отдельно: <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">нужен ли игроку Telegram Wallet</a>.",
        },
        {
          t: "h2",
          id: "telegram-messenger-yozuvi-haqida-telegram",
          text: "Что говорят документы Telegram о записи «Telegram Messenger»?",
        },
        {
          t: "p",
          text: "Слухи о новой записи расходятся в основном через посты каналов и скриншоты в чатах. Пост в канале — не официальный источник. Поэтому каждое утверждение мы сверили с документацией Telegram и Fragment.",
        },
        {
          t: "table",
          head: [
            "Утверждение из чата",
            "В официальном источнике",
            "Что это значит для игрока",
          ],
          rows: [
            [
              "В списке TON Connect на Fragment появилась отдельная запись «Telegram Messenger»",
              "Не подтверждено",
              "Покупка Stars и Premium от этого не зависит",
            ],
            [
              "У неё своя иконка, и она стоит отдельно от «Wallet in Telegram»",
              "Не подтверждено",
              "Ни на что не влияет",
            ],
            [
              "Пока при нажатии открывается @wallet",
              "Не подтверждено",
              "Проверять самому не обязательно",
            ],
            [
              "У записи есть своя ссылка и мост в реестре кошельков",
              "В этой статье не проверялось",
              "Ни на что не влияет",
            ],
            [
              "Mini App работают с криптокошельками только через TON Connect SDK",
              "Есть в правилах Telegram",
              "Это требование к разработчикам Mini App",
            ],
            [
              "В TON Connect запрещено ограничивать выбор кошельков, кроме случаев, когда это зависит от поддержки функций",
              "Есть в правилах Telegram",
              "Приложение не может по своему усмотрению сокращать список кошельков",
            ],
            [
              "В Bot API добавлены классы для карточки TON-кошелька и TON-перевода",
              "Есть в changelog",
              "Техническая новинка для ботов, порядок покупки Stars и Premium не меняется",
            ],
          ],
        },
        {
          t: "p",
          text: "Правила для Mini App описаны в <a href=\"https://core.telegram.org/bots/blockchain-guidelines\" target=\"_blank\" rel=\"noopener\">руководстве Telegram по блокчейну</a>. Там же сказано, что подписывать транзакцию внутри приложения через TON Connect разрешено.",
        },
        {
          t: "p",
          text: "В <a href=\"https://core.telegram.org/bots/api-changelog\" target=\"_blank\" rel=\"noopener\">changelog Bot API</a> упомянуты классы TonWalletCard, TonWalletCardSticker, TonNft, TonNftAttribute и TonWalletTransfer. Там же написано, что запрос к боту может содержать карточку TON-кошелька пользователя и данные, подписанные его кошельком. Речь о том, как боты работают с кошельком. Требования «подключите кошелёк» к пользователю здесь нет.",
        },
        {
          t: "p",
          text: "К какому именно кошельку относится новая запись и как она работает в Узбекистане, официально не объявлено. Гадать об этом мы не будем.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "uc-olmos-yoki-cp-olayotgan",
          text: "Что меняет новый кошелёк для игрока, который покупает UC, алмазы или CP?",
        },
        {
          t: "p",
          text: "Ничего. UC в PUBG Mobile, алмазы в Mobile Legends и Free Fire, CP в Call of Duty Mobile зачисляются на игровой аккаунт по Player ID. Кошелёк Telegram в этой цепочке не участвует.",
        },
        {
          t: "p",
          text: "Донат в игры через GemPay устроен так:",
        },
        {
          t: "list",
          items: [
            "нужен только Player ID, пароль не спрашивают никогда;",
            "бот проверяет и показывает ник, оплата проходит только после вашего подтверждения;",
            "валюта зачисляется автоматически за 1–5 минут;",
            "цены на игровую валюту показаны в боте.",
          ],
        },
        {
          t: "p",
          text: "Stars тоже не превращаются в UC или алмазы. То есть ни кошелёк, ни Stars не заменяют игровую валюту. Где тратится каждая из этих «валют», показано в таблице в статье <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">Telegram Stars или игровая валюта</a>.",
        },
        {
          t: "p",
          text: "Пример: соклановец пишет: «Подключишь новый кошелёк — UC придут со скидкой». Ни один официальный источник не связывает кошелёк с ценой UC. Считайте это непроверенным слухом.",
        },
        {
          t: "h2",
          id: "fragment-ton-yoki-somdagi-bot",
          text: "Fragment + TON или бот в сумах: разница для игрока в таблице",
        },
        {
          t: "p",
          text: "Сравним оба пути с точки зрения того, что игроку нужно каждый день.",
        },
        {
          t: "table",
          head: [
            "Критерий",
            "Fragment + TON-кошелёк",
            "Бот GemPay (в сумах)",
          ],
          rows: [
            [
              "Что нужно для начала",
              "TON-кошелёк (в пример Fragment приводит TonKeeper и MyTonWallet), подключённый через «Connect TON»",
              "Для Stars и Premium — @username, для игр — Player ID",
            ],
            [
              "Оплата",
              "Через подключённый TON-кошелёк",
              "UzCard, HUMO, Click, Uzum Bank, баланс бота; из России — СБП. Visa/Mastercard не принимаются",
            ],
            [
              "Ключи",
              "Только у вас. Восстановить потерянный кошелёк Fragment не может",
              "Кошелька нет, хранить ключи не нужно",
            ],
            [
              "UC, алмазы, CP",
              "На Fragment их нет",
              "По Player ID, за 1–5 минут",
            ],
            [
              "Подарок другу по скваду",
              "Кошельком управляете сами",
              "Достаточно ввести @username",
            ],
            [
              "Если заказ не выполнен",
              "В этой статье не рассматривалось",
              "Деньги полностью возвращаются в течение 3 рабочих дней, зачисленная валюта не возвращается",
            ],
          ],
        },
        {
          t: "p",
          text: "Подробно порядок возврата описан на странице <a href=\"/tolov-va-qaytarish\">оплата и возврат</a>.",
        },
        {
          t: "p",
          text: "Игроку, который не работает с криптой, путь в сумах проще: не нужно открывать кошелёк, хранить резервную фразу и сначала покупать TON. Цены Fragment мы здесь не сравнивали: в проверенных источниках их не нашли.",
        },
        {
          t: "h2",
          id: "squad-dostiga-stars-yoki-premium",
          text: "Stars или Premium другу по скваду: 5 шагов, только по @username",
        },
        {
          t: "p",
          text: "Чтобы сделать подарок тиммейту, не нужно спрашивать у него код, пароль или адрес кошелька. Узнайте только его @username.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Откройте <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> или его Mini App.",
            "Перейдите в раздел Stars или Premium. Для Stars укажите количество от 50 до 10 000, для Premium выберите 3, 6 или 12 месяцев.",
            "Введите @username тиммейта и сверьте его по буквам. Ошибка в одной букве — и подарок может уйти другому человеку. Копируйте не ник из чата клана, а @username из профиля.",
            "Оплатите в сумах: UzCard, HUMO, Click, Uzum Bank или баланс. Цена Premium одинакова при любом способе, а у Stars цена при оплате картой и онлайн отличается.",
            "Через несколько секунд спросите у тиммейта, всё ли пришло. Если нет — напишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> и укажите номер заказа.",
          ],
        },
        {
          t: "p",
          text: "Если ещё не решили, что подарить, загляните в статью <a href=\"/blog/jamoadosh-tugilgan-kuniga-telegram-sovga\">подарок тиммейту на день рождения в Telegram</a>: там разобрано, в каком случае лучше UC, Premium или Stars.",
        },
        {
          t: "h2",
          id: "fragmentga-hamyon-ulashdan-oldingi-tekshiruv",
          text: "Чек-лист перед подключением кошелька к Fragment",
        },
        {
          t: "p",
          text: "Некоторые игроки пользуются Fragment для других задач. Если решили подключить кошелёк, заранее проверьте следующее:",
        },
        {
          t: "list",
          items: [
            "Открывайте <a href=\"https://fragment.com\" target=\"_blank\" rel=\"noopener\">fragment.com</a>, набрав адрес вручную. Не переходите по ссылкам из чатов.",
            "Подключайте кошелёк только кнопкой «Connect TON» в правом верхнем углу.",
            "После подключения ещё раз убедитесь, что выбран нужный кошелёк. Fragment и сам это советует.",
            "Никому и ни одному боту не пишите seed-фразу. По словам Fragment, ключи от средств есть только у владельца.",
            "Храните резервную фразу сами. Fragment не хранит приватные ключи и не может восстановить потерянный кошелёк.",
            "Что открывается при нажатии на «Telegram Messenger», официально не подтверждено. Если сомневаетесь, работайте со знакомым кошельком или дождитесь официального объявления.",
          ],
        },
        {
          t: "p",
          text: "Как подключать к Fragment несколько аккаунтов Telegram, мы разобрали отдельно: <a href=\"/blog/fragment-verifikatsiyasiz-akkaunt-ulash-oyinchi\">подключение аккаунтов к Fragment без верификации</a>.",
        },
        {
          t: "h2",
          id: "hamyonni-ulab-ol-stars-ikki",
          text: "Как распознать сообщения вроде «Подключи кошелёк — Stars удвоятся»?",
        },
        {
          t: "p",
          text: "После каждого нового слуха в чатах кланов становится больше сообщений о «возможностях». Чаще всего они выглядят так:",
        },
        {
          t: "list",
          items: [
            "«Чтобы активировать новый кошелёк Telegram, сначала закинь TON».",
            "«Подключишь кошелёк — Stars удвоятся».",
            "«Для подключения напиши seed-фразу этому боту».",
            "Ссылка на страницу, похожую на Fragment, но с другим адресом.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Для покупки Stars, Premium или UC не нужно активировать кошелёк, заранее отправлять криптовалюту или называть seed-фразу. Если от вас этого требуют, прекращайте разговор и не открывайте ссылку.",
        },
        {
          t: "p",
          text: "Если Telegram или кошелёк остались открытыми на чужом компьютере, как закрыть сессию, описано в статье <a href=\"/blog/begona-kompyuterda-wallet-sessiya-oyinchi\">сессия Wallet на чужом компьютере</a>. Похожий слух о смене названия кошелька разобран в статье <a href=\"/blog/wallet-walt-oyinchi-stars-donat\">Wallet и Walt</a>.",
        },
        {
          t: "p",
          text: "GemPay — независимый от Telegram сервис, и от имени Telegram он не говорит. Для заказа не спрашивают ни кошелёк, ни seed-фразу: для доната в игры хватает Player ID, для Stars и Premium — @username.",
        },
        {
          t: "sources",
          items: [
            {
              label: "How does Fragment work?",
              href: "https://fragment.com/about",
            },
            {
              label: "Blockchain Guidelines",
              href: "https://core.telegram.org/bots/blockchain-guidelines",
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
          q: "Я подключил «Telegram Messenger», чтобы попробовать. Теперь оплата Stars будет списываться с этого кошелька?",
          a: "Нет. В GemPay за Stars платят в сумах картой, через Click, Uzum Bank или с баланса, подключённый кошелёк в оплате не участвует. А что делает сама запись, официально не подтверждено.",
        },
        {
          q: "Хочу купить Premium тиммейту. Он должен прислать мне код для входа?",
          a: "Не должен, и просить его об этом не нужно. Premium подключается на его @username через официальный механизм подарков Telegram, в его аккаунт никто не входит.",
        },
        {
          q: "В чате говорят, что через новый кошелёк Stars дешевле. Это правда?",
          a: `В официальных источниках такого нет. В GemPay цена Stars зависит только от способа оплаты: картой или с баланса — ${som(STARS_UNIT_CARD, "ru")} за штуку, через Click или Uzum Bank — ${som(STARS_UNIT_ONLINE, "ru")}.`,
        },
        {
          q: "Можно ли обменять лишние Stars на UC для клана?",
          a: "Нет, Stars не обмениваются на игровую валюту. UC покупаются отдельным заказом и зачисляются на игровой аккаунт по Player ID.",
        },
        {
          q: "Я потерял резервную фразу от кошелька, который подключал к Fragment. Fragment поможет?",
          a: "Нет: Fragment не хранит приватные ключи, поэтому восстановить кошелёк не может. Резервную фразу с самого начала нужно хранить там, где о ней знаете только вы.",
        },
        {
          q: "Отправил тиммейту Stars, а он говорит, что ничего не пришло. Что делать?",
          a: "Сначала проверьте, правильно ли вы ввели его @username, затем напишите в @StarsPaymeeSupport и укажите номер заказа. Если заказ не выполнен, деньги полностью вернутся в течение 3 рабочих дней.",
        },
      ],
    },
  },
};

export default article;
