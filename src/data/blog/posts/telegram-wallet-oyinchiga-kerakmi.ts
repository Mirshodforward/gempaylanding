// Avtoblogyoz yasagan maqola (2026-11-04). Niyat: O'zbekistondagi o'yinchi Telegram Wallet haqidagi shov-shuvni ko'rib, «telegram wallet o'yinchiga kerakmi» kabi so'zlar bilan qidiradi. U Stars, Premium, UC yoki olmos olish uchun hamyon ochish, TON yoki kripto kerakmi va hamyonsiz so'mda qanday xarid qilish mumkinligini bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://core.telegram.org/bots/blockchain-guidelines
//   https://telegram.org/faq
//   https://telegram.org/blog

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "telegram-wallet-oyinchiga-kerakmi",
  game: null,
  type: "info",
  datePublished: "2026-11-04",
  dateModified: "2026-11-04",
  keywords: ["telegram wallet o'yinchiga kerakmi","telegram wallet nima","telegram stars hamyonsiz sotib olish","telegram premium kriptosiz olish","uc olish uchun ton kerakmi","telegram wallet kerakmi","stars so'mda sotib olish","нужен ли telegram wallet","telegram wallet для чего нужен","купить telegram stars без кошелька","премиум телеграм без криптовалюты","ton кошелек для игр"],
  locales: {
    uz: {
      title: "Telegram Wallet o‘yinchiga kerakmi: UC, Stars va Premium hamyonsiz",
      metaTitle: "Telegram Wallet o‘yinchiga kerakmi",
      metaDescription: "Yo‘q: Stars, Premium, UC yoki olmos olish uchun Telegram Wallet, TON yoki kripto shart emas. Ular so‘mda UzCard, HUMO, Click yoki Uzum Bank bilan olinadi.",
      excerpt: "Yo‘q: Stars, Premium, UC yoki olmos olish uchun Telegram Wallet, TON yoki kripto shart emas. Ular so‘mda UzCard, HUMO, Click yoki Uzum Bank bilan olinadi.",
      answer: "Yo‘q: Stars, Premium, UC yoki olmos olish uchun Telegram Wallet, TON yoki kripto shart emas. Ular so‘mda UzCard, HUMO, Click yoki Uzum Bank bilan olinadi.",
      body: [
        {
          t: "p",
          text: "Oddiy o‘yinchiga Telegram Wallet shart emas. Stars, Premium, PUBG UC, Mobile Legends va Free Fire olmosi, CODM CP olish uchun hamyon ham, TON ham, boshqa kripto ham so‘ralmaydi. GemPay’da bularning hammasi so‘mda olinadi: UzCard, HUMO, Click, Uzum Bank yoki bot balansi bilan.",
        },
        {
          t: "h2",
          id: "wallet-haqidagi-postlar-oyinchiga-nimani",
          text: "Wallet haqidagi postlar o‘yinchiga nimani o‘zgartiradi?",
        },
        {
          t: "p",
          text: "Telegram kanallarida Wallet’da hamyonlar soni tez o‘sayotgani va faollashtirish shartlari o‘zgargani haqida postlar uchraydi. Bu raqamlar ham, shartlar ham Telegram’ning rasmiy sahifalarida tasdiqlanmagan. Shuning uchun ularga qarab pul sarflash yoki shoshib hamyon ochish shart emas.",
        },
        {
          t: "p",
          text: "O‘yinchini aslida boshqa savol qiziqtiradi: hamyonsiz Stars, Premium yoki UC olsa bo‘ladimi? Bo‘ladi. Hamyon kripto bilan bog‘liq amallarda kerak bo‘ladi, masalan, TON blokcheynidagi mini ilovalar va aktivlar bilan ishlaganda. Bunday holatlar quyida alohida bo‘limda ko‘rsatilgan.",
        },
        {
          t: "p",
          text: "Matn uch xil vaziyatdagi o‘yinchiga mo‘ljallangan:",
        },
        {
          t: "list",
          items: [
            "o‘zi yoki squad uchun Stars olmoqchi bo‘lgan;",
            "jamoadoshiga Premium sovg‘a qilmoqchi bo‘lgan;",
            "«hamma hamyon ochyapti, menga ham kerakmi» deb ikkilanayotgan.",
          ],
        },
        {
          t: "h2",
          id: "wallet-bilan-oyin-valyutasining-farqi",
          text: "Wallet bilan o‘yin valyutasining farqi nimada?",
        },
        {
          t: "p",
          text: "Telegram’ning mini ilovalar uchun <a href=\"https://core.telegram.org/bots/blockchain-guidelines\" target=\"_blank\" rel=\"noopener\">blokcheyn qoidalarida</a> Wallet TON blokcheynidagi aktivlarni boshqaradigan hamyonlarga misol sifatida keltiriladi. U yerda Tonkeeper va MyTonWallet ham tilga olinadi.",
        },
        {
          t: "p",
          text: "Biroq shu sahifadagi hamyon bo‘limi oddiy foydalanuvchi uchun yo‘riqnoma emas. U asosan hamyon vazifasini bajaradigan mini ilovalar uchun yozilgan qo‘shimcha misollardan iborat. Wallet’ni ochish va faollashtirish bo‘yicha Telegram’ning alohida rasmiy yo‘riqnomasi bu maqolada tasdiqlanmagan.",
        },
        {
          t: "p",
          text: "Chalkashlik odatda «hammasi baribir pul-ku» degan fikrdan boshlanadi. Aslida bular uch xil narsa:",
        },
        {
          t: "list",
          items: [
            "<strong>UC, olmos, CP</strong> — o‘yin ichidagi valyuta. U faqat o‘sha o‘yinda sarflanadi va Player ID’ga tushadi.",
            "<strong>Telegram Stars</strong> — Telegram ichidagi valyuta. U @username’ga yuboriladi.",
            "<strong>TON</strong> — blokcheyn aktivi. U hamyonda turadi va hamyon manzili orqali ishlatiladi.",
          ],
        },
        {
          t: "p",
          text: "Bu tizimlar bir-birining o‘rnini bosmaydi. Masalan, Stars o‘yin valyutasiga aylanmaydi: Stars olib, keyin ularni UC yoki olmosga almashtirib bo‘lmaydi. To‘rt xil valyutaning batafsil taqqoslovi <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">Telegram Stars, UC, olmos va Steam balansi</a> maqolasida berilgan.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "qaysi-xaridga-hamyon-kerak-qaysi",
          text: "Qaysi xaridga hamyon kerak, qaysi biriga kerak emas?",
        },
        {
          t: "p",
          text: "O‘yinchi ko‘p oladigan narsalar bitta jadvalda:",
        },
        {
          t: "table",
          head: [
            "Xarid",
            "Nima so‘raladi",
            "Hamyon yoki TON",
            "Narx va to‘lov",
          ],
          rows: [
            [
              "Telegram Stars (bir buyurtmada 50 dan 10 000 tagacha)",
              "@username",
              "Kerak emas",
              `1 ta: karta yoki balansdan ${som(STARS_UNIT_CARD, "uz")}, Click yoki Uzum Bank orqali ${som(STARS_UNIT_ONLINE, "uz")}`,
            ],
            [
              "Telegram Premium, 3 oy",
              "@username",
              "Kerak emas",
              `${som(premium(3), "uz")}`,
            ],
            [
              "Telegram Premium, 6 oy",
              "@username",
              "Kerak emas",
              `${som(premium(6), "uz")}`,
            ],
            [
              "Telegram Premium, 12 oy",
              "@username",
              "Kerak emas",
              `${som(premium(12), "uz")}`,
            ],
            [
              "PUBG UC, MLBB olmosi, Free Fire olmosi, CODM CP",
              "Player ID",
              "Kerak emas",
              "Narx botda ko‘rsatiladi",
            ],
            [
              "TON’dagi kripto mini ilova yoki token",
              "Ulangan hamyon",
              "Kerak, TON Connect orqali",
              "Mini ilova shartiga bog‘liq",
            ],
          ],
        },
        {
          t: "p",
          text: "Jadvaldan uchta xulosa chiqadi:",
        },
        {
          t: "list",
          items: [
            "Hamyon faqat oxirgi qatorda kerak.",
            "Premium narxi hamma to‘lov usulida bir xil, 1 oylik tarif esa yo‘q.",
            "Stars narxi to‘lov usuliga bog‘liq: karta o‘tkazmasi yoki balans Click va Uzum Bank orqali onlayn to‘lovdan arzonroq tushadi.",
          ],
        },
        {
          t: "p",
          text: "Yana bir cheklov bor. Bir buyurtmada 50 tadan kam yoki 10 000 tadan ortiq Stars olinmaydi. Kattaroq miqdor kerak bo‘lsa, bir nechta buyurtma beriladi.",
        },
        {
          t: "h2",
          id: "hamyon-qaysi-holatlarda-haqiqatan-kerak",
          text: "Hamyon qaysi holatlarda haqiqatan kerak?",
        },
        {
          t: "p",
          text: "Hamyon kripto bilan bog‘liq amallar uchun kerak. Telegram’ning <a href=\"https://core.telegram.org/bots/blockchain-guidelines\" target=\"_blank\" rel=\"noopener\">mini ilovalar qoidalari</a> bu sohada quyidagi talablarni qo‘yadi:",
        },
        {
          t: "list",
          items: [
            "Kripto mini ilovalar token va blokcheyn aktivlarini yaratish va tarqatishda faqat TON blokcheynidan foydalanishi kerak.",
            "Ular faqat TON Connect SDK orqali ulangan kripto hamyonlar bilan ishlaydi.",
            "Boshqa blokcheynlarda ishlagan mini ilovalar 2025-yil 21-fevralgacha TON’ga o‘tishi kerak edi.",
          ],
        },
        {
          t: "p",
          text: "Alohida mavzu — kolleksion sovg‘alar. <a href=\"https://telegram.org/blog\" target=\"_blank\" rel=\"noopener\">Telegram blogida</a> 2025-yil 24-yanvarda ularni blokcheynga ko‘chirish haqida post chiqqan. Bu sovg‘ani blokcheynga chiqarmoqchi bo‘lganlarga tegishli. Oddiy Stars yoki Premium sovg‘asiga bu jarayon aloqador emas.",
        },
        {
          t: "p",
          text: "Demak, hamyon haqida o‘ylash uchun quyidagilardan biri bo‘lishi kerak:",
        },
        {
          t: "list",
          items: [
            "TON’dagi o‘yin yoki mini ilovada token yig‘yapsiz;",
            "blokcheyn aktivlarini saqlayapsiz;",
            "sovg‘ani blokcheynga chiqarmoqchisiz.",
          ],
        },
        {
          t: "p",
          text: "Maqsadingiz faqat o‘yin valyutasi va Telegram obunasi bo‘lsa, bu holatlarning birortasi sizga tegishli emas.",
        },
        {
          t: "h2",
          id: "stars-yoki-premiumni-hamyonsiz-somda",
          text: "Stars yoki Premium’ni hamyonsiz, so‘mda qanday olish mumkin?",
        },
        {
          t: "p",
          text: "GemPay’da Stars va Premium @username bo‘yicha olinadi. Premium Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi. Akkauntingizga hech kim kirmaydi.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "<a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>’ni yoki uning Mini App’ini oching.",
            "Stars yoki Premium bo‘limini tanlang.",
            "O‘zingizning yoki jamoadoshingizning @username’ini kiriting. Parol ham, kod ham so‘ralmaydi.",
            "Stars miqdorini (50 dan 10 000 tagacha) yoki Premium muddatini (3, 6 yoki 12 oy) tanlang.",
            "UzCard, HUMO, Click, Uzum Bank yoki bot balansi bilan to‘lang. Stars ham, Premium ham bir necha soniyada tushadi.",
          ],
        },
        {
          t: "p",
          text: "Eng ko‘p uchraydigan xato — username’da bitta harfni adashtirish. Jamoadoshga sovg‘a qilsangiz, uning username’ini chatdagi profilidan ko‘chirib oling, eslab yozmang. Ko‘p odam username o‘rniga ekranda ko‘rinadigan ismni kiritib qo‘yadi, bu ham xato.",
        },
        {
          t: "p",
          text: "Stars bo‘yicha batafsil qo‘llanma: <a href=\"/blog/telegram-stars-sotib-olish-gempay\">Telegram Stars sotib olish GemPay’da</a>. Premium o‘yinchiga amalda nima berishi haqida: <a href=\"/blog/telegram-premium-oyinchi-uchun\">Telegram Premium o‘yinchiga nima beradi</a>.",
        },
        {
          t: "h2",
          id: "uc-yoki-olmosni-hamyonsiz-qanday",
          text: "UC yoki olmosni hamyonsiz qanday to‘ldirish mumkin?",
        },
        {
          t: "p",
          text: "O‘yin valyutasida username o‘rniga Player ID kiritiladi. Jarayon quyidagicha:",
        },
        {
          t: "list",
          items: [
            "botda o‘yinni tanlaysiz va Player ID’ni kiritasiz;",
            "bot shu ID’ga tegishli nikni ko‘rsatadi;",
            "nik to‘g‘ri bo‘lsa, tasdiqlab to‘laysiz;",
            "valyuta 1–5 daqiqada avtomatik tushadi.",
          ],
        },
        {
          t: "p",
          text: "Nik o‘zingiz kutgan nik bilan mos kelmasa, to‘lamang. ID’ni o‘yindagi profildan qaytadan ko‘chirib, yana tekshiring. Mobile Legends’da User ID’dan tashqari Server ID ham bor. Ular haqida <a href=\"/blog/mobile-legends-user-id-server-id-qayerda\">Mobile Legends User ID va Server ID qayerda</a> maqolasida yozilgan.",
        },
        {
          t: "p",
          text: "To‘lov UzCard, HUMO, Click, Uzum Bank yoki bot balansi bilan qilinadi. Rossiyada bo‘lsangiz, SBP orqali to‘lash mumkin. Visa va Mastercard qabul qilinmaydi. Xorijiy karta, VPN yoki kripto ham kerak emas.",
        },
        {
          t: "p",
          text: "Jamoadoshga UC yoki olmos sovg‘a qilish uchun uning Player ID’sini bilish kifoya. Paroli, pochtasi yoki SMS kodi so‘ralmaydi. PUBG’da ID qayerda turishini bilmasangiz, <a href=\"/blog/pubg-mobile-player-id-qayerda\">PUBG Mobile Player ID qayerda</a> maqolasini o‘qing.",
        },
        {
          t: "p",
          text: "Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi. Hisobga tushgan valyuta esa qaytarilmaydi. Batafsil shartlar <a href=\"https://www.gempay.uz/tolov-va-qaytarish\">to‘lov va qaytarish</a> sahifasida.",
        },
        {
          t: "h2",
          id: "wallet-mavzusida-oyinchiga-qanday-shubhali",
          text: "Wallet mavzusida o‘yinchiga qanday shubhali takliflar keladi?",
        },
        {
          t: "p",
          text: "Mavzu qanchalik ko‘p muhokama qilinsa, u bilan bog‘liq aldov urinishlari ham shuncha ko‘payadi. O‘yinchilarga odatda shunday xabarlar yoziladi:",
        },
        {
          t: "list",
          items: [
            "«UC yoki olmosni TON’ga arzon beraman, hamyonimga o‘tkazing».",
            "«Premium yoqilishi uchun hamyoningizga TON tashlang».",
            "«Sovg‘angizni ochish uchun hamyonni shu botga ulang».",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Hamyonning seed-iborasi, Telegram’dan kelgan kod va o‘yin paroli hech kimga berilmaydi. Shulardan birini so‘ragan «sotuvchi» yoki «admin» bilan suhbatni to‘xtating.",
        },
        {
          t: "p",
          text: "Notanish mini ilova hamyon ulashni so‘rasa, avval u nima qilishini aniqlang. Telegram qoidalari mini ilovalardan hamyonni TON Connect orqali ulashni talab qiladi. Lekin bu ilovaning o‘zi ishonchli ekanini anglatmaydi: ulanishga rozilik berishdan oldin uni kim yaratganini tekshiring.",
        },
        {
          t: "p",
          text: "Kanal postlaridagi raqamlar va «faollashtirish to‘lovi» haqidagi gaplar fakt emas. Telegram’ning <a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">FAQ sahifasida</a> ham undagi ma’lumot eskirgan bo‘lishi mumkinligi ochiq yozilgan. Kanal postlari esa bundan ham tez eskiradi. Akkauntni himoyalash bo‘yicha to‘liq ro‘yxat: <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">O‘yin hisobini xavfsiz to‘ldirish</a>.",
        },
        {
          t: "h2",
          id: "maqsadingizga-qarab-qaysi-yolni-tanlash",
          text: "Maqsadingizga qarab qaysi yo‘lni tanlash kerak?",
        },
        {
          t: "list",
          items: [
            "<strong>O‘zingizga yoki squad chati uchun Premium kerak.</strong> @username bo‘yicha so‘mda olasiz, hamyon kerak emas.",
            "<strong>Jamoadoshingizga Premium sovg‘a qilmoqchisiz.</strong> Uning @username’ini kiritasiz, Premium rasmiy sovg‘a mexanizmi orqali ulanadi.",
            "<strong>Stars bilan to‘lanadigan bot yoki mini ilova uchun yulduz kerak.</strong> Stars’ni so‘mda olasiz, ular Telegram ichida qoladi.",
            "<strong>Jamoadoshingizga UC yoki olmos kerak.</strong> Uning Player ID’si orqali to‘g‘ridan-to‘g‘ri to‘ldirasiz.",
            "<strong>TON’dagi kripto mini ilovalardan foydalanmoqchisiz.</strong> Bu holatda hamyon kerak bo‘ladi. Lekin bu o‘yin xarajatlaridan alohida masala, uni alohida o‘rganing.",
          ],
        },
        {
          t: "p",
          text: "GemPay mustaqil xizmat. Buyurtma bo‘yicha savol tug‘ilsa, buyurtma raqamini ko‘rsatib, <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>’ga yozing.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Blockchain Guidelines",
              href: "https://core.telegram.org/bots/blockchain-guidelines",
            },
            {
              label: "Telegram FAQ",
              href: "https://telegram.org/faq",
            },
            {
              label: "Telegram Blog",
              href: "https://telegram.org/blog",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Hamyonim yo‘q — Stars yoki Premium buyurtma qilsam bo‘ladimi?",
          a: "Bo‘ladi. GemPay’da ikkalasi uchun ham faqat @username kiritiladi, to‘lov esa so‘mda karta, Click, Uzum Bank yoki bot balansi orqali qilinadi.",
        },
        {
          q: "UC yoki olmosni TON bilan to‘lash arzonroq emasmi?",
          a: "GemPay’da o‘yin valyutasi TON evaziga sotilmaydi, narx botda so‘mda ko‘rsatiladi. «TON’ga arzon» deb yozadigan notanish odam bilan kelishuvda na buyurtma raqami, na qaytarish sharti bo‘ladi.",
        },
        {
          q: "Wallet ishlashi uchun avval TON tashlash kerak degani rostmi?",
          a: "Faollashtirish to‘lovi va uning bekor qilingani haqidagi gaplar faqat kanal postlarida uchraydi, rasmiy manbada tasdiqlanmagan. O‘yin xaridlari uchun hamyonning o‘zi kerak emas, shuning uchun bu savol ularga ta’sir qilmaydi.",
        },
        {
          q: "Jamoadoshimda hamyon yo‘q. Premium sovg‘asi unga baribir ulanadimi?",
          a: "Ulanadi. Premium uning @username’i bo‘yicha Telegram’ning sovg‘a mexanizmi orqali yoqiladi. Undan hamyon ham, parol ham so‘ralmaydi.",
        },
        {
          q: "Ortib qolgan Stars’ni UC yoki olmosga aylantirsa bo‘ladimi?",
          a: "Yo‘q, Stars o‘yin valyutasiga aylanmaydi. UC yoki olmos kerak bo‘lsa, ular Player ID orqali alohida to‘ldiriladi.",
        },
        {
          q: "Sotuvchi Premium uchun seed-iboramni so‘rayapti. Nima qilay?",
          a: "Seed-ibora va Telegram kodini bermang, suhbatni to‘xtating. Premium ulash uchun @username’ning o‘zi yetarli.",
        },
        {
          q: "Visa kartam ham, kriptom ham yo‘q. Qanday to‘layman?",
          a: "UzCard yoki HUMO karta, Click, Uzum Bank yoki bot balansi yetarli. Rossiyada bo‘lsangiz, SBP ishlaydi. Visa va Mastercard qabul qilinmaydi, VPN ham kerak emas.",
        },
      ],
    },
    ru: {
      title: "Нужен ли геймеру Telegram Wallet: UC, Stars и Premium без кошелька",
      metaTitle: "Нужен ли геймеру Telegram Wallet",
      metaDescription: "Нет: для Stars, Premium, UC и алмазов не нужны Telegram Wallet, TON или крипта. Всё оплачивается в сумах — UzCard, HUMO, Click или Uzum Bank.",
      excerpt: "Нет: для Stars, Premium, UC и алмазов не нужны Telegram Wallet, TON или крипта. Всё оплачивается в сумах — UzCard, HUMO, Click или Uzum Bank.",
      answer: "Нет: для Stars, Premium, UC и алмазов не нужны Telegram Wallet, TON или крипта. Всё оплачивается в сумах — UzCard, HUMO, Click или Uzum Bank.",
      body: [
        {
          t: "p",
          text: "Обычному геймеру Telegram Wallet не нужен. Для покупки Stars, Premium, UC в PUBG, алмазов в Mobile Legends и Free Fire или CP в CODM не требуются ни кошелёк, ни TON, ни другая криптовалюта. В GemPay всё это покупается в сумах: картой UzCard или HUMO, через Click, Uzum Bank или с баланса бота.",
        },
        {
          t: "h2",
          id: "wallet-haqidagi-postlar-oyinchiga-nimani",
          text: "Что посты о Wallet меняют для геймера?",
        },
        {
          t: "p",
          text: "В Telegram-каналах встречаются посты о том, что число кошельков в Wallet быстро растёт, а условия активации поменялись. Ни эти цифры, ни условия не подтверждены на официальных страницах Telegram. Поэтому тратить деньги или срочно заводить кошелёк из-за таких новостей незачем.",
        },
        {
          t: "p",
          text: "На самом деле геймера волнует другой вопрос: можно ли купить Stars, Premium или UC без кошелька? Можно. Кошелёк нужен для операций с криптой — например, при работе с мини-приложениями и активами в блокчейне TON. Такие случаи разобраны ниже в отдельном разделе.",
        },
        {
          t: "p",
          text: "Текст рассчитан на игроков в трёх ситуациях:",
        },
        {
          t: "list",
          items: [
            "хотите купить Stars себе или для сквада;",
            "хотите подарить Premium тиммейту;",
            "сомневаетесь: «все заводят кошелёк — может, и мне надо?».",
          ],
        },
        {
          t: "h2",
          id: "wallet-bilan-oyin-valyutasining-farqi",
          text: "Чем Wallet отличается от игровой валюты?",
        },
        {
          t: "p",
          text: "В <a href=\"https://core.telegram.org/bots/blockchain-guidelines\" target=\"_blank\" rel=\"noopener\">правилах Telegram по блокчейну для мини-приложений</a> Wallet упоминается как пример кошелька для управления активами в блокчейне TON. Там же названы Tonkeeper и MyTonWallet.",
        },
        {
          t: "p",
          text: "Однако раздел о кошельках на этой странице — не инструкция для обычного пользователя. Это дополнительные примеры для мини-приложений, которые работают в основном как криптокошелёк. Отдельная официальная инструкция Telegram по открытию и активации Wallet в этой статье не подтверждена.",
        },
        {
          t: "p",
          text: "Путаница обычно начинается с мысли «это же всё деньги». На деле это три разные вещи:",
        },
        {
          t: "list",
          items: [
            "<strong>UC, алмазы, CP</strong> — внутриигровая валюта. Тратится только в своей игре и зачисляется на Player ID.",
            "<strong>Telegram Stars</strong> — валюта внутри Telegram. Отправляется на @username.",
            "<strong>TON</strong> — блокчейн-актив. Хранится в кошельке и используется через адрес кошелька.",
          ],
        },
        {
          t: "p",
          text: "Эти системы друг друга не заменяют. Например, Stars не превращаются в игровую валюту: купить звёзды, а потом обменять их на UC или алмазы нельзя. Подробное сравнение четырёх валют — в статье <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">Telegram Stars, UC, алмазы и баланс Steam</a>.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "qaysi-xaridga-hamyon-kerak-qaysi",
          text: "Для какой покупки нужен кошелёк, а для какой нет?",
        },
        {
          t: "p",
          text: "То, что геймеры покупают чаще всего, — в одной таблице:",
        },
        {
          t: "table",
          head: [
            "Покупка",
            "Что нужно указать",
            "Кошелёк или TON",
            "Цена и оплата",
          ],
          rows: [
            [
              "Telegram Stars (от 50 до 10 000 за заказ)",
              "@username",
              "Не нужен",
              `1 звезда: картой или с баланса ${som(STARS_UNIT_CARD, "ru")}, через Click или Uzum Bank ${som(STARS_UNIT_ONLINE, "ru")}`,
            ],
            [
              "Telegram Premium, 3 месяца",
              "@username",
              "Не нужен",
              `${som(premium(3), "ru")}`,
            ],
            [
              "Telegram Premium, 6 месяцев",
              "@username",
              "Не нужен",
              `${som(premium(6), "ru")}`,
            ],
            [
              "Telegram Premium, 12 месяцев",
              "@username",
              "Не нужен",
              `${som(premium(12), "ru")}`,
            ],
            [
              "UC в PUBG, алмазы MLBB, алмазы Free Fire, CP в CODM",
              "Player ID",
              "Не нужен",
              "Цена указана в боте",
            ],
            [
              "Крипто-мини-приложение или токен в TON",
              "Подключённый кошелёк",
              "Нужен, через TON Connect",
              "Зависит от условий мини-приложения",
            ],
          ],
        },
        {
          t: "p",
          text: "Из таблицы следуют три вывода:",
        },
        {
          t: "list",
          items: [
            "Кошелёк нужен только в последней строке.",
            "Цена Premium одинакова при любом способе оплаты, а тарифа на 1 месяц нет.",
            "Цена Stars зависит от способа оплаты: перевод с карты или баланс выходит дешевле онлайн-оплаты через Click и Uzum Bank.",
          ],
        },
        {
          t: "p",
          text: "Есть ещё одно ограничение. За один заказ нельзя купить меньше 50 или больше 10 000 Stars. Если нужно больше, оформляют несколько заказов.",
        },
        {
          t: "h2",
          id: "hamyon-qaysi-holatlarda-haqiqatan-kerak",
          text: "В каких случаях кошелёк действительно нужен?",
        },
        {
          t: "p",
          text: "Кошелёк нужен для операций с криптой. <a href=\"https://core.telegram.org/bots/blockchain-guidelines\" target=\"_blank\" rel=\"noopener\">Правила Telegram для мини-приложений</a> устанавливают здесь такие требования:",
        },
        {
          t: "list",
          items: [
            "Крипто-мини-приложения должны использовать только блокчейн TON для создания и распространения токенов и блокчейн-активов.",
            "Они работают только с криптокошельками, подключёнными через TON Connect SDK.",
            "Мини-приложения, работавшие на других блокчейнах, должны были перейти на TON до 21 февраля 2025 года.",
          ],
        },
        {
          t: "p",
          text: "Отдельная тема — коллекционные подарки. В <a href=\"https://telegram.org/blog\" target=\"_blank\" rel=\"noopener\">блоге Telegram</a> 24 января 2025 года вышел пост о переносе таких подарков в блокчейн. Это касается тех, кто хочет вывести подарок в блокчейн. К обычным подаркам в виде Stars или Premium этот процесс отношения не имеет.",
        },
        {
          t: "p",
          text: "Итак, думать о кошельке имеет смысл, только если верно одно из трёх:",
        },
        {
          t: "list",
          items: [
            "вы собираете токены в игре или мини-приложении на TON;",
            "вы храните блокчейн-активы;",
            "вы хотите вывести подарок в блокчейн.",
          ],
        },
        {
          t: "p",
          text: "Если вам нужны только игровая валюта и подписка Telegram, ни один из этих случаев вас не касается.",
        },
        {
          t: "h2",
          id: "stars-yoki-premiumni-hamyonsiz-somda",
          text: "Как купить Stars или Premium без кошелька, в сумах?",
        },
        {
          t: "p",
          text: "В GemPay Stars и Premium покупаются по @username. Premium подключается через официальный механизм подарков Telegram. В ваш аккаунт никто не входит.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Откройте <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> или его Mini App.",
            "Выберите раздел Stars или Premium.",
            "Введите свой @username или username тиммейта. Ни пароль, ни код не запрашиваются.",
            "Выберите количество Stars (от 50 до 10 000) или срок Premium (3, 6 или 12 месяцев).",
            "Оплатите картой UzCard или HUMO, через Click, Uzum Bank или с баланса бота. И Stars, и Premium приходят за несколько секунд.",
          ],
        },
        {
          t: "p",
          text: "Самая частая ошибка — перепутать одну букву в username. Если дарите тиммейту, скопируйте его username из профиля в чате, а не вводите по памяти. Многие вместо username вписывают отображаемое имя — это тоже ошибка.",
        },
        {
          t: "p",
          text: "Подробная инструкция по звёздам: <a href=\"/blog/telegram-stars-sotib-olish-gempay\">покупка Telegram Stars в GemPay</a>. О том, что Premium реально даёт игроку: <a href=\"/blog/telegram-premium-oyinchi-uchun\">что Telegram Premium даёт геймеру</a>.",
        },
        {
          t: "h2",
          id: "uc-yoki-olmosni-hamyonsiz-qanday",
          text: "Как пополнить UC или алмазы без кошелька?",
        },
        {
          t: "p",
          text: "Для игровой валюты вместо username указывается Player ID. Порядок такой:",
        },
        {
          t: "list",
          items: [
            "выбираете игру в боте и вводите Player ID;",
            "бот показывает ник, привязанный к этому ID;",
            "если ник верный, подтверждаете и платите;",
            "валюта зачисляется автоматически за 1–5 минут.",
          ],
        },
        {
          t: "p",
          text: "Если ник не совпадает с ожидаемым, не платите. Заново скопируйте ID из профиля в игре и проверьте ещё раз. В Mobile Legends, помимо User ID, есть ещё Server ID — о них написано в статье <a href=\"/blog/mobile-legends-user-id-server-id-qayerda\">где найти User ID и Server ID в Mobile Legends</a>.",
        },
        {
          t: "p",
          text: "Оплата — картой UzCard или HUMO, через Click, Uzum Bank или с баланса бота. Если вы в России, можно заплатить через СБП. Visa и Mastercard не принимаются. Зарубежная карта, VPN или крипта тоже не нужны.",
        },
        {
          t: "p",
          text: "Чтобы подарить тиммейту UC или алмазы, достаточно знать его Player ID. Пароль, почта или SMS-код не нужны. Если не знаете, где в PUBG найти ID, прочитайте статью <a href=\"/blog/pubg-mobile-player-id-qayerda\">где найти Player ID в PUBG Mobile</a>.",
        },
        {
          t: "p",
          text: "Если заказ не выполнен, деньги возвращаются полностью в течение 3 рабочих дней. Зачисленная на счёт валюта не возвращается. Подробные условия — на странице <a href=\"https://www.gempay.uz/tolov-va-qaytarish\">оплата и возврат</a>.",
        },
        {
          t: "h2",
          id: "wallet-mavzusida-oyinchiga-qanday-shubhali",
          text: "Какие подозрительные предложения на тему Wallet получают геймеры?",
        },
        {
          t: "p",
          text: "Чем активнее обсуждают тему, тем больше вокруг неё попыток обмана. Игрокам обычно пишут так:",
        },
        {
          t: "list",
          items: [
            "«Отдам UC или алмазы дёшево за TON, переведи на мой кошелёк».",
            "«Чтобы Premium включился, закинь TON на свой кошелёк».",
            "«Чтобы открыть подарок, подключи кошелёк к этому боту».",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Seed-фразу кошелька, код от Telegram и пароль от игры никому не сообщайте. Если «продавец» или «админ» просит что-то из этого — прекращайте разговор.",
        },
        {
          t: "p",
          text: "Если незнакомое мини-приложение просит подключить кошелёк, сначала разберитесь, что оно делает. Правила Telegram требуют от мини-приложений подключать кошелёк через TON Connect. Но это не значит, что само приложение надёжно: прежде чем соглашаться на подключение, проверьте, кто его создал.",
        },
        {
          t: "p",
          text: "Цифры из постов в каналах и разговоры о «плате за активацию» — не факты. Даже на <a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">странице FAQ Telegram</a> прямо сказано, что информация там может быть устаревшей. Посты в каналах устаревают ещё быстрее. Полный чек-лист по защите аккаунта: <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">как безопасно пополнить игровой счёт</a>.",
        },
        {
          t: "h2",
          id: "maqsadingizga-qarab-qaysi-yolni-tanlash",
          text: "Какой путь выбрать в зависимости от цели?",
        },
        {
          t: "list",
          items: [
            "<strong>Нужен Premium себе или для чата сквада.</strong> Покупаете в сумах по @username, кошелёк не нужен.",
            "<strong>Хотите подарить Premium тиммейту.</strong> Вводите его @username, Premium подключается через официальный механизм подарков.",
            "<strong>Нужны звёзды для бота или мини-приложения, где платят Stars.</strong> Покупаете Stars в сумах, они остаются внутри Telegram.",
            "<strong>Тиммейту нужны UC или алмазы.</strong> Пополняете напрямую по его Player ID.",
            "<strong>Хотите пользоваться крипто-мини-приложениями на TON.</strong> Тут кошелёк понадобится. Но это отдельная от игровых трат история — изучайте её отдельно.",
          ],
        },
        {
          t: "p",
          text: "GemPay — независимый сервис. Если есть вопрос по заказу, напишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> и укажите номер заказа.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Blockchain Guidelines",
              href: "https://core.telegram.org/bots/blockchain-guidelines",
            },
            {
              label: "Telegram FAQ",
              href: "https://telegram.org/faq",
            },
            {
              label: "Telegram Blog",
              href: "https://telegram.org/blog",
            },
          ],
        },
      ],
      faq: [
        {
          q: "У меня нет кошелька — можно заказать Stars или Premium?",
          a: "Можно. В GemPay для обоих нужен только @username, а оплата идёт в сумах картой, через Click, Uzum Bank или с баланса бота.",
        },
        {
          q: "Разве платить за UC или алмазы в TON не дешевле?",
          a: "В GemPay игровая валюта за TON не продаётся, цена указана в боте в сумах. В сделке с незнакомцем, который пишет «дёшево за TON», нет ни номера заказа, ни условий возврата.",
        },
        {
          q: "Правда, что для работы Wallet сначала нужно закинуть TON?",
          a: "Слухи о плате за активацию и её отмене встречаются только в постах каналов и официально не подтверждены. Для игровых покупок кошелёк сам по себе не нужен, так что этот вопрос на них не влияет.",
        },
        {
          q: "У тиммейта нет кошелька. Подарочный Premium ему всё равно подключится?",
          a: "Подключится. Premium включается по его @username через механизм подарков Telegram, и от него не потребуют ни кошелька, ни пароля.",
        },
        {
          q: "Можно ли превратить оставшиеся Stars в UC или алмазы?",
          a: "Нет, Stars не конвертируются в игровую валюту. Если нужны UC или алмазы, их пополняют отдельно по Player ID.",
        },
        {
          q: "Продавец просит мою seed-фразу для Premium. Что делать?",
          a: "Не сообщайте seed-фразу и код от Telegram, прекратите переписку. Для подключения Premium хватает одного @username.",
        },
        {
          q: "У меня нет ни Visa, ни крипты. Как оплатить?",
          a: "Достаточно карты UzCard или HUMO, Click, Uzum Bank или баланса бота, а из России работает СБП. Visa и Mastercard не принимаются, VPN тоже не нужен.",
        },
      ],
    },
  },
};

export default article;
