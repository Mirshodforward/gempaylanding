// Avtoblogyoz yasagan maqola (2026-11-09). Niyat: Telegram sozlamalarida Wallet yo‘qolib, uning o‘rniga Walt chiqqanini eshitgan o‘zbek o‘yinchi «wallet walt stars donat» deb qidirib, bu o‘zgarish Stars, Premium, UC va olmos xaridiga hamda jamoadoshga sovg‘a qilishga ta’sir qiladimi va endi hamyon kerakmi, bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://docs.ton.org/onboarding/wallet-apps/telegram
//   https://docs.ton.org/contracts/standard/wallets/telegram/overview
//   https://docs.ton.org/onboarding/wallet-apps/deep-links

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "wallet-walt-oyinchi-stars-donat",
  game: null,
  type: "info",
  datePublished: "2026-11-09",
  dateModified: "2026-11-09",
  keywords: ["wallet walt stars donat","telegram wallet walt","walt telegram nima","wallet walt o‘yinchi","telegram stars hamyonsiz sotib olish","telegram money nima","uc olish uchun hamyon kerakmi","walt кошелек telegram","wallet стал walt","telegram wallet исчез из настроек","купить telegram stars без кошелька","telegram money кошелек"],
  locales: {
    uz: {
      title: "Wallet va Walt mish-mishi: Stars va UC donatiga endi hamyon kerakmi?",
      metaTitle: "Wallet va Walt mish-mishi",
      metaDescription: "Yo‘q: Stars va Premium @username, UC va olmos Player ID bo‘yicha so‘mda olinadi, hamyon shart emas. Wallet’ning Walt’ga aylanishi rasman tasdiqlanmagan.",
      excerpt: "Yo‘q: Stars va Premium @username, UC va olmos Player ID bo‘yicha so‘mda olinadi, hamyon shart emas. Wallet’ning Walt’ga aylanishi rasman tasdiqlanmagan.",
      answer: "Yo‘q: Stars va Premium @username, UC va olmos Player ID bo‘yicha so‘mda olinadi, hamyon shart emas. Wallet’ning Walt’ga aylanishi rasman tasdiqlanmagan.",
      body: [
        {
          t: "h2",
          id: "walt-xabaridan-keyin-stars-premium",
          text: "Walt xabaridan keyin Stars, Premium va UC olish o‘zgaradimi?",
        },
        {
          t: "p",
          text: "Yo‘q. Donat ham, Telegram xaridlari ham hamyonga bog‘lanmagan. Shuning uchun hamyon nomi haqidagi mish-mish ularga ta’sir qilmaydi.",
        },
        {
          t: "p",
          text: "O‘yinchining odatiy xaridlari uch xil ma’lumotga tayanadi:",
        },
        {
          t: "list",
          items: [
            "<strong>Telegram Stars</strong> — oluvchining @username’i.",
            "<strong>Telegram Premium</strong> — @username. Obuna Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi, akkauntga kirilmaydi.",
            "<strong>UC, olmos, CP</strong> — o‘yindagi Player ID.",
          ],
        },
        {
          t: "p",
          text: "To‘lov so‘mda qilinadi: UzCard, HUMO, Click, Uzum Bank yoki bot balansi orqali. Rossiyadan SBP bilan ham to‘lash mumkin. Visa va Mastercard qabul qilinmaydi. Xorijiy karta, VPN yoki kripto kerak emas.",
        },
        {
          t: "p",
          text: "Menyudagi hamyon qanday nomlanishi yoki umuman ko‘rinishi bu oqimga ta’sir qilmaydi. Hamyonning o‘yinchiga keragi bormi degan savol <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">Telegram Wallet o‘yinchiga kerakmi</a> maqolasida alohida ko‘rilgan.",
        },
        {
          t: "h2",
          id: "qaysi-xaridga-hamyon-kerak-boladi",
          text: "Qaysi xaridga hamyon kerak bo‘ladi?",
        },
        {
          t: "p",
          text: "Jadvalda o‘yinchi odatda pul sarflaydigan narsalar jamlangan. Hamyon faqat oxirgi qatorda kerak, u esa donat emas.",
        },
        {
          t: "table",
          head: [
            "Nima olinadi",
            "Nima so‘raladi",
            "Hamyon kerakmi",
            "Narx va to‘lov",
          ],
          rows: [
            [
              "Telegram Stars",
              "@username",
              "Yo‘q",
              `Donasi: karta yoki balansdan ${som(STARS_UNIT_CARD, "uz")}, Click yoki Uzum Bank orqali ${som(STARS_UNIT_ONLINE, "uz")}`,
            ],
            [
              "Telegram Premium (3, 6, 12 oy)",
              "@username",
              "Yo‘q",
              `${som(premium(3), "uz")}, ${som(premium(6), "uz")}, ${som(premium(12), "uz")} — hamma to‘lov usulida bir xil`,
            ],
            [
              "PUBG UC, MLBB va Free Fire olmosi, CODM CP",
              "Player ID",
              "Yo‘q",
              "So‘mda, narx botda ko‘rsatiladi",
            ],
            [
              "Gram yoki TON o‘tkazish, dApp’ga ulanish",
              "Hamyon manzili",
              "Ha",
              "Kriptoda",
            ],
          ],
        },
        {
          t: "p",
          text: "ton.org hujjatlariga ko‘ra, Telegram’ning ichki hamyoni «Telegram Money» deb ataladi va TON asosiy tarmog‘ida ishlaydi. U aktivlarni qabul qiladi va TON Connect orqali markazlashmagan ilovalarga ulanadi. Bu kripto bilan ishlash vositasi, o‘yin hisobini to‘ldirish usuli emas.",
        },
        {
          t: "p",
          text: "Yana bir narsani yodda tuting: Stars o‘yin valyutasiga aylanmaydi. Yulduzlar bilan PUBG’da UC ham, MLBB’da olmos ham olib bo‘lmaydi. Qaysi «pul» qayerda ishlashini <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">Stars, UC, olmos va Steam balansi taqqoslovida</a> ko‘rish mumkin.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "walt-haqida-nima-tasdiqlangan-nima",
          text: "Walt haqida nima tasdiqlangan, nima yo‘q?",
        },
        {
          t: "p",
          text: "Gap Telegram kanalidagi postdan chiqdi. Unda Wallet sozlamalardan g‘oyib bo‘lgani, hamyon saytida esa «Wallet becomes Walt» yozuvi va yangi logotip chiqqani aytiladi. Biz bu da’volarni rasmiy manbalar bilan solishtirdik:",
        },
        {
          t: "list",
          items: [
            "<strong>Nom o‘zgarishi.</strong> telegram.org va core.telegram.org’da bu haqda e’lon topilmadi.",
            "<strong>Yangi logotip va ekran.</strong> Rasmiy manbalarda tasdiqlanmadi.",
            "<strong>Sana.</strong> Nom o‘zgarishi yoki ishga tushish sanasi hech qayerda ko‘rsatilmagan.",
            "<strong>Ichki hamyon nomi.</strong> <a href=\"https://docs.ton.org/onboarding/wallet-apps/telegram\" target=\"_blank\" rel=\"noopener\">ton.org hujjatida</a> u «Telegram Money» deb yozilgan, «Walt» so‘zi umuman uchramaydi.",
          ],
        },
        {
          t: "p",
          text: "@wallet boti bilan Telegram Money bitta mahsulotmi yoki ikki xilmi — buni ham rasmiy manbalar aniq aytmagan. Shuning uchun ularni bir narsa deb hisoblamang.",
        },
        {
          t: "note",
          tone: "info",
          text: "Kanal posti rasmiy manba emas. U tasdiqlanmaguncha xarid rejasini o‘zgartirishga hojat yo‘q.",
        },
        {
          t: "h2",
          id: "squad-azosiga-premium-yoki-stars",
          text: "Squad a’zosiga Premium yoki Stars qanday yuboriladi?",
        },
        {
          t: "p",
          text: "Tartib avvalgidek: jamoadoshning @username’i yetarli. Uning akkauntiga kirilmaydi, undan kod yoki parol so‘ralmaydi.",
        },
        {
          t: "p",
          text: "Misol: sardor kecha klan urushida jamoani olib chiqqan merganga 3 oylik Premium yubormoqchi. Yoki saralash bosqichidan keyin har bir a’zoga bir dasta Stars bermoqchi. Ikkala holatda ham tartib bir xil:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "<a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>’ni oching.",
            "Stars yoki Premium bo‘limini tanlang.",
            "Jamoadoshning @username’ini uning profilidan nusxalab qo‘ying.",
            "Stars uchun miqdorni (bir buyurtmada 50 dan 10 000 tagacha) yoki Premium uchun muddatni (3, 6 yoki 12 oy) belgilang.",
            `To‘lang: Stars donasi UzCard, HUMO yoki balansdan ${som(STARS_UNIT_CARD, "uz")}, Click yoki Uzum Bank orqali ${som(STARS_UNIT_ONLINE, "uz")}.`,
          ],
        },
        {
          t: "p",
          text: "Stars bir necha soniyada tushadi. Premium ham bir necha soniyada faollashadi. Premium’da 1 oylik tarif yo‘q.",
        },
        {
          t: "p",
          text: "Eng ko‘p uchraydigan xato — username’dagi ortiqcha harf yoki tushib qolgan pastki chiziq. Squad chatida ko‘rinadigan ism bilan username ko‘pincha har xil bo‘ladi. Shuning uchun ko‘rinadigan ismni emas, @ bilan boshlanadigan nomni oling. Ishonchingiz komil bo‘lmasa, jamoadoshdan username’ini chatga o‘zi yozib berishini so‘rang.",
        },
        {
          t: "p",
          text: "Sovg‘a baribir bormasa, sabab odatda oluvchining maxfiylik sozlamalarida bo‘ladi: <a href=\"/blog/jamoadoshga-sovga-yuborib-bolmayapti-sabab\">jamoadoshga sovg‘a bormasa</a> maqolasini ko‘ring. Yulduz xaridining to‘liq qo‘llanmasi: <a href=\"/blog/telegram-stars-sotib-olish-gempay\">GemPay’da Stars sotib olish</a>.",
        },
        {
          t: "h2",
          id: "menyuda-hamyon-bandini-kormasangiz-donatga",
          text: "Menyuda hamyon bandini ko‘rmasangiz, donatga xalaqit beradimi?",
        },
        {
          t: "p",
          text: "Yo‘q, bu holat donatga ham, akkauntga ham xavf degani emas. Rasmiy hujjatda quyidagilar yozilgan:",
        },
        {
          t: "list",
          items: [
            "Telegram Desktop’da ichki hamyon asosiy menyudagi «Money» bandida turadi.",
            "Bu band faqat Telegram akkaunt uchun hamyonga kirishni yoqqandagina chiqadi. Klandoshingizda band bor-u, sizda yo‘q bo‘lsa, bu cheklov yoki buzilish belgisi emas.",
            "tg://ton havolasi kanal monetizatsiyasiga bog‘liq alohida TON balansi ekranini ochadi, Telegram Money’ni emas (<a href=\"https://docs.ton.org/onboarding/wallet-apps/deep-links\" target=\"_blank\" rel=\"noopener\">deep link hujjati</a>). Klan kanalingiz daromadi shu ekranda ko‘rinsa, uni hamyon bilan adashtirmang.",
          ],
        },
        {
          t: "p",
          text: "@wallet botining ochilmasligi ham Stars yoki UC xaridiga xalaqit bermaydi. Bu holat <a href=\"/blog/desktop-wallet-bot-ochilmayapti-oyinchi\">Telegram Desktop’da Wallet bot ochilmasa</a> maqolasida batafsil yozilgan.",
        },
        {
          t: "h2",
          id: "hamyondagi-qoldiqni-hozir-uc-yoki",
          text: "Hamyondagi qoldiqni hozir UC yoki Stars’ga aylantirish kerakmi?",
        },
        {
          t: "p",
          text: "Shoshilmang. Nom o‘zgarsa @wallet’dagi mablag‘larga nima bo‘lishi haqida rasmiy ma’lumot yo‘q. Demak, mish-mish ortidan qoldiqni arzonga sotishga asos yo‘q. «Tezroq chiqarib qolay» deb uni notanish obmenga yuborish esa pulni yo‘qotishning eng tez yo‘li.",
        },
        {
          t: "p",
          text: "Telegram Money haqida ton.org hujjatlarida quyidagilar yozilgan:",
        },
        {
          t: "list",
          items: [
            "Joriy tiklash iborasi bilan hamyonni boshqa mos hamyon ilovasiga import qilish mumkin.",
            "Hamyon kontraktini yangilash uchun validatorlar umumiy vaznining 75% dan ortig‘i kerak. Telegram ham, boshqa hech kim ham buni chetlab o‘ta olmaydi.",
            "WalletTg kontraktidagi hamyon egalari yangilanishlardan voz kecha olmaydi.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Bu faktlar Telegram Money va uning WalletTg kontraktiga tegishli. Ularni @wallet botidagi mablag‘larga tatbiq etib bo‘lmaydi.",
        },
        {
          t: "p",
          text: "Donat uchun kripto zanjiri umuman kerak emas. Masalan, ertangi turnir uchun Royale Pass kerak bo‘lsa, hamyondagi qoldiqni sotish o‘rniga UC’ni to‘g‘ridan-to‘g‘ri so‘mda — karta, Click yoki Uzum Bank bilan olish oddiyroq. Hamyondagi aktivlar masalasini esa rasmiy e’lon chiqqanda alohida hal qilasiz.",
        },
        {
          t: "h2",
          id: "klan-chatida-walt-bahonasida-nima",
          text: "Klan chatida Walt bahonasida nima so‘rashadi?",
        },
        {
          t: "p",
          text: "Shov-shuvli yangilik paydo bo‘lishi bilan chatlarda «yordam» takliflari ko‘payadi. Quyidagi so‘rovlardan birini ko‘rsangiz, suhbatni to‘xtating:",
        },
        {
          t: "list",
          items: [
            "«Walt’ga o‘tmasangiz, hamyon yopiladi — hozir faollashtiring».",
            "«Ko‘chirish uchun 0.1 yuboring, qaytarib beramiz».",
            "«Balansni saqlab qolish uchun tiklash iborangizni botga yozing».",
            "«Walt yangi foydalanuvchilarga Stars tarqatyapti, havolani bosing».",
            "«Hamyonni o‘zim to‘g‘rilab beraman, SMS-kodni tashlang».",
          ],
        },
        {
          t: "p",
          text: "Bu so‘rovlar nega xavfli:",
        },
        {
          t: "list",
          items: [
            "Tiklash iborasi hamyon va undagi mablag‘ ustidan to‘liq nazorat beradi. Hujjat uni ochiq matnda hech kimga bermaslikni talab qiladi.",
            "t.me/sendgrams shaklidagi havola tg://sendgrams deep link bilan bir xil parametrlarni qabul qiladi, ya’ni Gram yuborish oynasini ochishi mumkin. Tasdiqlash tugmasini bosishdan oldin summa va manzilni o‘qing.",
            "Donat sotuvchisiga parol, SMS-kod yoki ibora kerak emas. GemPay o‘yin uchun faqat Player ID, Telegram xaridi uchun esa @username so‘raydi.",
          ],
        },
        {
          t: "p",
          text: "«Faollashtirish» bahonasidagi shunga o‘xshash tuzoq <a href=\"/blog/gram-wallet-faollashtirish-oyinchiga-kerakmi\">GRAM Wallet faollashtirish</a> maqolasida tahlil qilingan.",
        },
        {
          t: "h2",
          id: "buyurtma-kechiksa-yoki-xato-chiqsa",
          text: "Buyurtma kechiksa yoki xato chiqsa, nima qilinadi?",
        },
        {
          t: "p",
          text: "Walt atrofidagi mish-mishning buyurtma kechikishiga aloqasi yo‘q. GemPay’da donat oqimi quyidagicha:",
        },
        {
          t: "list",
          items: [
            "To‘lovdan oldin nik tekshirib ko‘rsatiladi. To‘lov faqat siz tasdiqlaganingizdan keyin o‘tadi. Ekranda notanish nik chiqsa, Player ID’da xato bor — to‘lamang, raqamni qayta tekshiring.",
            "UC va olmos 1–5 daqiqada avtomatik tushadi.",
            "Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi. Hisobga tushgan valyuta qaytarilmaydi. Batafsil: <a href=\"https://www.gempay.uz/tolov-va-qaytarish\">to‘lov va qaytarish</a>.",
          ],
        },
        {
          t: "p",
          text: "Muammo chiqsa, <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>’ga yozing. Xabarga buyurtma raqamini, kiritilgan Player ID yoki @username’ni va to‘lov vaqtini qo‘shing — shunda javob tezroq keladi.",
        },
        {
          t: "note",
          tone: "info",
          text: "GemPay mustaqil xizmat va Telegram nomidan gapirmaydi. Walt bo‘yicha rasmiy xabar telegram.org yoki ton.org’da chiqsa, maqola yangilanadi.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Telegram Money — the native Gram wallet",
              href: "https://docs.ton.org/onboarding/wallet-apps/telegram",
            },
            {
              label: "WalletTg: Telegram wallet contract",
              href: "https://docs.ton.org/contracts/standard/wallets/telegram/overview",
            },
            {
              label: "Deep links",
              href: "https://docs.ton.org/onboarding/wallet-apps/deep-links",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Walt chiqsa, oldin olgan UC yoki olmosim yo‘qolmaydimi?",
          a: "Yo‘q. O‘yin valyutasi Player ID bo‘yicha o‘yin akkauntiga tushadi va Telegram’dagi hamyonga bog‘liq emas. Hamyon nomi haqidagi xabar o‘yin balansingizga tegmaydi.",
        },
        {
          q: "Stars’ni keyinroq UC yoki MLBB olmosiga almashtirsa bo‘ladimi?",
          a: "Bo‘lmaydi: yulduzlar faqat Telegram ichida ishlaydi va o‘yin valyutasiga aylanmaydi. UC yoki olmos kerak bo‘lsa, ularni alohida, Player ID orqali oling.",
        },
        {
          q: "Jamoadoshimda hech qanday hamyon yo‘q. Unga Premium sovg‘a qila olamanmi?",
          a: "Ha. Premium uning @username’i bo‘yicha Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi. Undan hamyon, kod yoki parol talab qilinmaydi.",
        },
        {
          q: "Turnir oyi uchun Premium’ni 1 oyga olsa bo‘ladimi?",
          a: "GemPay’da 1 oylik tarif yo‘q. Tanlov 3, 6 yoki 12 oy, narx esa qaysi to‘lov usulini tanlasangiz ham bir xil.",
        },
        {
          q: "Donatni Visa yoki Mastercard bilan to‘lasa bo‘ladimi?",
          a: "Yo‘q, bu kartalar qabul qilinmaydi. UzCard, HUMO, Click, Uzum Bank yoki bot balansidan foydalaning, Rossiyadan esa SBP orqali to‘lash mumkin.",
        },
        {
          q: "Chatda «Walt support» nomidan yozib, kod yoki iborani so‘rashyapti. Nima qilay?",
          a: "Hech narsa yubormang va suhbatni to‘xtating: kod yoki tiklash iborasini so‘rash firibgarlik belgisi. GemPay bo‘yicha savollar bilan @StarsPaymeeSupport’ga o‘zingiz buyurtma raqami bilan yozasiz.",
        },
      ],
    },
    ru: {
      title: "Wallet стал Walt: нужен ли кошелёк для Stars, Premium и доната UC?",
      metaTitle: "Wallet стал Walt: нужен ли кошелёк для Stars, Premium",
      metaDescription: "Нет: Stars и Premium покупаются по @username, UC и алмазы — по Player ID в сумах, кошелёк не нужен. Переименование Wallet в Walt официально не подтверждено.",
      excerpt: "Нет: Stars и Premium покупаются по @username, UC и алмазы — по Player ID в сумах, кошелёк не нужен. Переименование Wallet в Walt официально не подтверждено.",
      answer: "Нет: Stars и Premium покупаются по @username, UC и алмазы — по Player ID в сумах, кошелёк не нужен. Переименование Wallet в Walt официально не подтверждено.",
      body: [
        {
          t: "h2",
          id: "walt-xabaridan-keyin-stars-premium",
          text: "Изменится ли покупка Stars, Premium и UC после новости о Walt?",
        },
        {
          t: "p",
          text: "Нет. Ни донат, ни покупки в Telegram не привязаны к кошельку, поэтому слухи о его названии их не затрагивают.",
        },
        {
          t: "p",
          text: "Обычные покупки игрока опираются на три вида данных:",
        },
        {
          t: "list",
          items: [
            "<strong>Telegram Stars</strong> — @username получателя.",
            "<strong>Telegram Premium</strong> — @username. Подписка подключается через официальный механизм подарков Telegram.",
            "<strong>UC, алмазы, CP</strong> — Player ID в игре.",
          ],
        },
        {
          t: "p",
          text: "Оплата идёт в сумах: через UzCard, HUMO, Click, Uzum Bank или баланс бота. Из России можно оплатить через СБП. Зарубежная карта, VPN или криптовалюта не нужны.",
        },
        {
          t: "p",
          text: "Как называется кошелёк в меню и виден ли он вообще — на этот процесс не влияет. Нужен ли кошелёк игроку в принципе, разобрано отдельно в статье <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">нужен ли Telegram Wallet игроку</a>.",
        },
        {
          t: "h2",
          id: "qaysi-xaridga-hamyon-kerak-boladi",
          text: "Для какой покупки нужен кошелёк?",
        },
        {
          t: "p",
          text: "В таблице собрано то, на что игрок обычно тратит деньги. Кошелёк нужен только в последней строке — и это не донат.",
        },
        {
          t: "table",
          head: [
            "Что покупается",
            "Что запрашивают",
            "Нужен ли кошелёк",
            "Цена и оплата",
          ],
          rows: [
            [
              "Telegram Stars",
              "@username",
              "Нет",
              `За одну звезду: с карты или баланса ${som(STARS_UNIT_CARD, "ru")}, через Click или Uzum Bank ${som(STARS_UNIT_ONLINE, "ru")}`,
            ],
            [
              "Telegram Premium (3, 6, 12 месяцев)",
              "@username",
              "Нет",
              `${som(premium(3), "ru")}, ${som(premium(6), "ru")}, ${som(premium(12), "ru")} — одинаково при любом способе оплаты`,
            ],
            [
              "UC в PUBG, алмазы MLBB и Free Fire, CP в CODM",
              "Player ID",
              "Нет",
              "В сумах, цена указана в боте",
            ],
            [
              "Перевод Gram или TON, подключение к dApp",
              "Адрес кошелька",
              "Да",
              "В криптовалюте",
            ],
          ],
        },
        {
          t: "p",
          text: "Согласно документации ton.org, встроенный кошелёк Telegram работает в основной сети TON. Он принимает активы и подключается к децентрализованным приложениям через TON Connect. Это инструмент для работы с криптой, а не способ пополнить игровой аккаунт.",
        },
        {
          t: "p",
          text: "И ещё одно: Stars не превращаются в игровую валюту. За звёзды не купить ни UC в PUBG, ни алмазы в MLBB. Какие «деньги» где работают, показано в <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">сравнении Stars, UC, алмазов и баланса Steam</a>.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "walt-haqida-nima-tasdiqlangan-nima",
          text: "Что о Walt подтверждено, а что нет?",
        },
        {
          t: "p",
          text: "Всё началось с поста в Telegram-канале. В нём говорится, что Wallet пропал из настроек, а на сайте кошелька появилась надпись «Wallet becomes Walt» и новый логотип. Мы сверили эти утверждения с официальными источниками.",
        },
        {
          t: "table",
          head: [
            "Утверждение",
            "В официальном источнике",
          ],
          rows: [
            [
              "Wallet переименуют в Walt",
              "На telegram.org и core.telegram.org объявления не найдено",
            ],
            [
              "Вышли новый логотип и экран",
              "В разрешённых источниках не подтверждено",
            ],
            [
              "Дата изменения",
              "Нигде не указана",
            ],
            [
              "Название встроенного кошелька Telegram",
              "В <a href=\"https://docs.ton.org/onboarding/wallet-apps/telegram\" target=\"_blank\" rel=\"noopener\">документации ton.org</a> он называется «Telegram Money», слова «Walt» там нет",
            ],
          ],
        },
        {
          t: "p",
          text: "Один ли это продукт — бот @wallet и Telegram Money — или два разных, тоже не подтвердил ни один официальный источник. Поэтому не считайте их одним и тем же.",
        },
        {
          t: "note",
          tone: "info",
          text: "Пост в канале — не официальный источник. Пока он не подтверждён, менять планы покупок игроку незачем.",
        },
        {
          t: "h2",
          id: "squad-azosiga-premium-yoki-stars",
          text: "Как отправить Premium или Stars участнику сквада?",
        },
        {
          t: "p",
          text: "Порядок остался прежним: достаточно @username тиммейта. Вход в его аккаунт не нужен, код или пароль у него не спрашивают.",
        },
        {
          t: "p",
          text: "Пример: капитан хочет подарить 3 месяца Premium снайперу, который вчера вытащил команду в клановой войне. Или раздать каждому участнику по пачке Stars после квалификации. В обоих случаях действуйте так:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Откройте <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>.",
            "Выберите раздел Stars или Premium.",
            "Скопируйте @username тиммейта из его профиля и вставьте.",
            "Укажите количество Stars (от 50 до 10 000 за один заказ) или срок Premium (3, 6 или 12 месяцев).",
            `Оплатите: одна звезда стоит ${som(STARS_UNIT_CARD, "ru")} с UzCard, HUMO или баланса и ${som(STARS_UNIT_ONLINE, "ru")} через Click или Uzum Bank.`,
          ],
        },
        {
          t: "p",
          text: "Stars приходят за несколько секунд, Premium тоже активируется за несколько секунд. Тарифа на 1 месяц у Premium нет.",
        },
        {
          t: "p",
          text: "Частая ошибка — лишняя буква или подчёркивание в username. В чате сквада ник и username часто различаются, поэтому берите не отображаемое имя, а имя, начинающееся с @.",
        },
        {
          t: "p",
          text: "Если подарок всё равно не доходит, причина обычно в настройках приватности получателя: смотрите статью <a href=\"/blog/jamoadoshga-sovga-yuborib-bolmayapti-sabab\">почему подарок не доходит до тиммейта</a>. Полная инструкция по покупке звёзд — <a href=\"/blog/telegram-stars-sotib-olish-gempay\">покупка Stars в GemPay</a>.",
        },
        {
          t: "h2",
          id: "menyuda-hamyon-bandini-kormasangiz-donatga",
          text: "Пропал пункт кошелька в меню — с аккаунтом что-то не так?",
        },
        {
          t: "p",
          text: "Это ещё не значит, что с аккаунтом проблема. В официальной документации сказано следующее:",
        },
        {
          t: "list",
          items: [
            "В Telegram Desktop встроенный кошелёк находится в главном меню, в пункте «Money».",
            "Этот пункт появляется, только когда Telegram включает доступ к кошельку для аккаунта. Если у друга пункт есть, а у вас нет, — это не признак ограничения или взлома.",
            "Ссылка tg://ton открывает отдельный экран баланса TON, связанный с монетизацией каналов (<a href=\"https://docs.ton.org/onboarding/wallet-apps/deep-links\" target=\"_blank\" rel=\"noopener\">документация по deep links</a>). Этот экран с доходом кланового канала — не кошелёк.",
          ],
        },
        {
          t: "p",
          text: "Даже если бот @wallet не открывается, покупке Stars или UC это не мешает. Подробно об этом — в статье <a href=\"/blog/desktop-wallet-bot-ochilmayapti-oyinchi\">не открывается бот Wallet в Telegram Desktop</a>.",
        },
        {
          t: "h2",
          id: "hamyondagi-qoldiqni-hozir-uc-yoki",
          text: "Стоит ли срочно переводить остаток кошелька в UC или Stars?",
        },
        {
          t: "p",
          text: "Не спешите. Официальной информации о том, что будет со средствами в @wallet при смене названия, нет. Поэтому нет причин из-за слухов продавать остаток по дешёвке или отправлять его в незнакомый обменник, чтобы «успеть вывести». А второе — самый быстрый способ потерять деньги.",
        },
        {
          t: "p",
          text: "О Telegram Money в документации ton.org написано:",
        },
        {
          t: "list",
          items: [
            "С текущей фразой восстановления кошелёк можно импортировать в другое совместимое приложение-кошелёк.",
            "Для обновления контракта кошелька нужно больше 75% общего веса валидаторов. Ни Telegram, ни кто-либо другой не может обойти это требование.",
            "Владельцы кошелька не могут отказаться от обновлений контракта.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Эти факты относятся к Telegram Money и его контракту WalletTg. Переносить их на средства в боте @wallet нельзя.",
        },
        {
          t: "p",
          text: "Для доната криптоцепочка вообще не нужна. UC, алмазы, Stars и Premium покупаются напрямую в сумах — картой, через Click или Uzum Bank.",
        },
        {
          t: "h2",
          id: "klan-chatida-walt-bahonasida-nima",
          text: "Что просят в клановом чате под предлогом Walt?",
        },
        {
          t: "p",
          text: "Как только появляется громкая новость, в чатах становится больше предложений «помочь». Если видите одну из этих просьб, прекращайте разговор:",
        },
        {
          t: "list",
          items: [
            "«Не перейдёте на Walt — кошелёк закроют, активируйте сейчас».",
            "«Для переноса отправьте 0.1, мы вернём».",
            "«Чтобы сохранить баланс, напишите боту фразу восстановления».",
            "«Walt раздаёт Stars новым пользователям, жмите на ссылку».",
          ],
        },
        {
          t: "p",
          text: "Чем опасна каждая из них:",
        },
        {
          t: "list",
          items: [
            "Фраза восстановления даёт полный контроль над кошельком и средствами на нём. Документация требует никому не передавать её открытым текстом.",
            "Ссылка вида t.me/sendgrams принимает те же параметры, что и deep link tg://sendgrams, то есть может открыть окно отправки Gram. Прежде чем нажать кнопку подтверждения, прочитайте сумму и адрес.",
            "Продавцу доната не нужны пароль, SMS-код или фраза. GemPay запрашивает для игры только Player ID, а для покупок в Telegram — @username.",
          ],
        },
        {
          t: "p",
          text: "Похожая ловушка с «активацией» разобрана в статье <a href=\"/blog/gram-wallet-faollashtirish-oyinchiga-kerakmi\">об активации GRAM Wallet</a>.",
        },
        {
          t: "h2",
          id: "buyurtma-kechiksa-yoki-xato-chiqsa",
          text: "Что делать, если заказ задерживается или возникла ошибка?",
        },
        {
          t: "p",
          text: "Слухи вокруг Walt никак не связаны с задержкой заказа. В GemPay донат проходит так:",
        },
        {
          t: "list",
          items: [
            "Перед оплатой ник проверяется и показывается, оплата проходит только после вашего подтверждения.",
            "UC и алмазы зачисляются автоматически за 1–5 минут.",
            "Если заказ не выполнен, деньги полностью возвращаются в течение 3 рабочих дней. Зачисленная на аккаунт валюта не возвращается. Подробнее: <a href=\"https://www.gempay.uz/tolov-va-qaytarish\">оплата и возврат</a>.",
          ],
        },
        {
          t: "p",
          text: "Если возникла проблема, напишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>. Укажите в сообщении номер заказа, введённый Player ID или @username и время оплаты — так ответ придёт быстрее.",
        },
        {
          t: "note",
          tone: "info",
          text: "GemPay — независимый сервис и не говорит от имени Telegram. Если официальное сообщение о Walt появится на telegram.org или ton.org, статья будет обновлена.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Telegram Money — the native Gram wallet",
              href: "https://docs.ton.org/onboarding/wallet-apps/telegram",
            },
            {
              label: "WalletTg: Telegram wallet contract",
              href: "https://docs.ton.org/contracts/standard/wallets/telegram/overview",
            },
            {
              label: "Deep links",
              href: "https://docs.ton.org/onboarding/wallet-apps/deep-links",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Правда ли, что Wallet переименовали в Walt?",
          a: "Пока это лишь пост в Telegram-канале. На telegram.org и core.telegram.org такого объявления нет, а в документации ton.org встроенный кошелёк Telegram называется Telegram Money.",
        },
        {
          q: "Нужен ли TON или кошелёк, чтобы подарить Premium тиммейту?",
          a: "Нет, хватит его @username. Подписка подключается через официальный механизм подарков Telegram, в аккаунт получателя никто не заходит.",
        },
        {
          q: "Можно ли купить UC или алмазы за Telegram Stars?",
          a: "Нельзя: звёзды не конвертируются в игровую валюту. UC, алмазы и CP оплачиваются отдельно в сумах по Player ID.",
        },
        {
          q: "В чате пишут, что для перехода на Walt нужно отправить 0.1. Отправлять?",
          a: "Нет. Официально такой «активации» нет, а просьба прислать монеты или фразу восстановления — типичная схема обмана.",
        },
        {
          q: "Что делать, если звёзды не пришли тиммейту?",
          a: "Сначала проверьте, без ошибок ли введён @username, и попросите получателя посмотреть настройки приватности подарков. Если заказ не выполнен, деньги вернутся в течение 3 рабочих дней — напишите в поддержку с номером заказа.",
        },
      ],
    },
  },
};

export default article;
