// Avtoblogyoz yasagan maqola (2026-11-09). Niyat: Kanal yoki klan chatidan Gram Earnings mukofoti olgan o'yinchi qoldiqni Tonnel Cash Out orqali chiqarib, UC, Stars yoki Premium'ga ishlatish xavfsiz va foydalimi, buni «Tonnel Cash Out xavfsizmi» yoki «Gram Earnings qoldig'i o'yinchi» so'zlari bilan qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/tos/content-creator-rewards
//   https://fragment.com/terms
//   https://telegram.org/faq

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "tonnel-cash-out-oyinchi-xavfi",
  game: null,
  type: "trust",
  datePublished: "2026-11-09",
  dateModified: "2026-11-09",
  keywords: ["Tonnel Cash Out xavfsizmi","Gram Earnings qoldig'i o'yinchi","Tonnel Cash Out","Tonnel Marketplace xavfsizmi","Gram mukofoti bilan UC olish","Gram qoldig'ini Stars'ga ishlatish","klan kanali Gram balansi","Tonnel Cash Out безопасно ли","Gram Earnings вывод остатка","Tonnel Marketplace отзывы","вывести Gram на UC или Stars"],
  locales: {
    uz: {
      title: "Tonnel Cash Out xavfsizmi: Gram Earnings qoldig‘ini donatga ishlatish",
      metaTitle: "Tonnel Cash Out xavfsizmi",
      metaDescription: "Tonnel Cash Out xavfsizligi tasdiqlanmagan: u rasmiy Telegram va Fragment sahifalarida yo‘q. UC, Stars va Premium’ni qoldiqsiz, so‘mda olish xavfsizroq.",
      excerpt: "Tonnel Cash Out xavfsizligi tasdiqlanmagan: u rasmiy Telegram va Fragment sahifalarida yo‘q. UC, Stars va Premium’ni qoldiqsiz, so‘mda olish xavfsizroq.",
      answer: "Tonnel Cash Out xavfsizligi tasdiqlanmagan: u rasmiy Telegram va Fragment sahifalarida yo‘q. UC, Stars va Premium’ni qoldiqsiz, so‘mda olish xavfsizroq.",
      body: [
        {
          t: "h2",
          id: "tonnel-cash-outga-ishonsa-boladimi",
          text: "Tonnel Cash Out’ga ishonsa bo‘ladimi: rasmiy manbalar nima deydi?",
        },
        {
          t: "p",
          text: "Tonnel Cash Out xavfsizligi tasdiqlanmagan. Tonnel, Tonnel Marketplace va Tonnel Cash Out rasmiy Telegram va Fragment sahifalarida tilga olinmaydi. Xizmat rasman tasdiqlanmagan, lekin rad ham etilmagan. Shuning uchun uni ishonchli yoki firibgarlik deb aniq aytib bo‘lmaydi.",
        },
        {
          t: "p",
          text: "Bu mavzu o‘yinchilarga Telegram kanallaridagi postlar orqali yetib kelgan. Postlarda kanal balansidagi qoldiqni Tonnel’dagi hisobga o‘tkazish taklif qilinadi. Evaziga qoldiqning bir qismi (postda 80% deyilgan) va «konfet» degan bonus va’da qilinadi. Kanal posti rasmiy manba emas, shuning uchun bu shartlarni fakt deb hisoblamang.",
        },
        {
          t: "p",
          text: "Rasmiy hujjatlarda esa quyidagilar aniq yozilgan:",
        },
        {
          t: "list",
          items: [
            "<a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a>ga ko‘ra, uchinchi tomon ishlab chiquvchilarining botlari Telegram’ning asosiy interfeysi qismi emas. Tonnel nomi u yerda tilga olinmagan.",
            "<a href=\"https://telegram.org/tos/content-creator-rewards\" target=\"_blank\" rel=\"noopener\">Content Creator shartlari</a>ga ko‘ra, Telegram daromad yechiladigan kripto hamyonlarni nazorat qilmaydi va ular uchun javob bermaydi.",
            "O‘sha shartlarga ko‘ra, mukofot yechimini bekor qilib ham, qaytarib ham bo‘lmaydi. Noto‘g‘ri hamyon ko‘rsatilgan holatda ham shunday.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "«Gram Earnings» degan nom rasmiy sahifalarda uchramaydi. Telegram shartlarida bu mukofotlar Content Creator Rewards deb ataladi, kanaldagi summa esa Gram balance deyiladi.",
        },
        {
          t: "h2",
          id: "klan-kanali-balansidan-admin-uc",
          text: "Klan kanali balansidan admin UC va’da qilsa, bu kimning puli?",
        },
        {
          t: "p",
          text: "Bu savol ko‘pincha klan kanali admini «balansni chiqarib, hammaga UC olib beraman» deganda tug‘iladi. Telegram shartlari bu yerda ancha aniq.",
        },
        {
          t: "p",
          text: "Gram va Star balansidan mukofot olish shartlari kanal egasiga qaratilgan. Barcha mukofotlarni qayta ishlashni Telegram Fragment platformasiga topshirgan. Obunachilar yoki klan a’zolari uchun bu balansdan alohida huquq shartlarda yozilmagan.",
        },
        {
          t: "p",
          text: "Kanalda ko‘rinib turgan kutilayotgan balans hatto egasining o‘ziga ham hali tegishli mablag‘ hisoblanmaydi. U shunday maqomga yechish so‘ralib, muvaffaqiyatli o‘tkazilgandan keyingina ega bo‘ladi. Mukofot miqdorini va uni yechish usulini Telegram o‘z ixtiyori bilan belgilaydi.",
        },
        {
          t: "p",
          text: "O‘yinchi uchun bundan chiqadigan amaliy qoidalar:",
        },
        {
          t: "list",
          items: [
            "Admin kanal balansidan UC yoki Stars va’da qilsa, bu uning shaxsiy va’dasi, Telegram’niki emas.",
            "Bunday va’daga ishonib adminga yoki «vositachi»ga oldindan pul o‘tkazmang.",
            "Klan chatida bozordan arzon yulduz taklif qilinsa, xavfi alohida. Bu haqda <a href=\"/blog/arzon-stars-refund-sxemasi-oyinchi-xavfi\">klan chatidagi arzon Stars</a> maqolasini o‘qing.",
          ],
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "kanal-mukofotidan-donatgacha-uch-yol",
          text: "Kanal mukofotidan donatgacha: uch yo‘l jadvalda",
        },
        {
          t: "p",
          text: "Quyidagi jadvalda uchta yo‘l solishtirilgan. Asosiy savol bitta: oxirida o‘yinchining qo‘lida nima qoladi?",
        },
        {
          t: "table",
          head: [
            "Yo‘l",
            "Kim nazorat qiladi",
            "Nima ma’lum",
            "Asosiy xavf",
            "O‘yinchi uchun natija",
          ],
          rows: [
            [
              "Fragment orqali rasmiy yechim",
              "Telegram shartlari, Fragment",
              "Mukofot sukut bo‘yicha Gram ko‘rinishida ulangan hamyonga yechiladi. Gram mukofoti 2 kundan keyin ochiladi",
              "Yechim qaytarilmaydi, hamyon xatosi tuzatilmaydi",
              "Hamyonda Gram bor, lekin bu hali UC ham, so‘m ham emas",
            ],
            [
              "Tonnel Cash Out",
              "Uchinchi tomon xizmati",
              "Shartlar faqat kanal postlarida, rasmiy manbada yo‘q",
              "Telegram bu xizmat uchun javob bermaydi",
              "Tonnel ichida mablag‘ yoki aktiv bor, uni donatga aylantirish yo‘li noma’lum",
            ],
            [
              "So‘mda to‘g‘ridan-to‘g‘ri xarid (GemPay)",
              "GemPay",
              "UzCard, HUMO, Click, Uzum Bank yoki bot balansi bilan to‘lanadi",
              "Noto‘g‘ri Player ID yoki @username kiritish",
              "O‘yin valyutasi 1–5 daqiqada, Stars va Premium bir necha soniyada tushadi. Buyurtma bajarilmasa, pul 3 ish kunida qaytadi",
            ],
          ],
        },
        {
          t: "p",
          text: "Rasmiy yo‘l haqida yana ikki tafsilot bor. Birinchisi: Star balansidan mukofot Gramnikidan ancha kech, 21 kundan keyin yechishga ochiladi. Ikkinchisi: <a href=\"https://fragment.com/terms\" target=\"_blank\" rel=\"noopener\">Fragment shartlari</a>ga ko‘ra, ba’zi davlatlarda mukofot stablecoin yoki boshqa usulda berilishi mumkin. Bu Fragment ixtiyorida, O‘zbekiston uchun qaysi usul ishlashi esa bu maqolada tasdiqlanmagan.",
        },
        {
          t: "h2",
          id: "post-shartlari-va-gram-kursi",
          text: "Post shartlari va Gram kursi donat byudjetiga qanday ta’sir qiladi?",
        },
        {
          t: "p",
          text: "Postda yozilgan foizni kafolat deb hisoblamang. Bot ichida boshqa shart chiqishi mumkin, uni postdan emas, bot ichidan o‘qish kerak.",
        },
        {
          t: "p",
          text: "Post to‘g‘ri bo‘lsa ham, qoldiqning bir qismi Tonnel bosqichidayoq kamayadi. Undan keyin uni UC, olmos yoki Stars’ga aylantirish uchun yana kamida bitta bosqich kerak. Har bir bosqichning o‘z sharti va o‘z xavfi bor.",
        },
        {
          t: "p",
          text: "Kursni ham hisobga oling. Fragment mukofotning Gramdagi qiymatini CoinMarketCap’dagi bozor kursi bo‘yicha hisoblaydi, bu kurs taxminan har 5 daqiqada yangilanadi. Qoldiqni bir joydan boshqasiga o‘tkazib yurgan vaqtingizda uning so‘mdagi qiymati o‘zgarishi mumkin. Turnir oldidan Royale Pass olishni rejalashtirgan bo‘lsangiz, kerakli summa yetmay qolishi mumkin.",
        },
        {
          t: "p",
          text: "«Konfet» nima ekani va qancha turishi hech bir rasmiy manbada tushuntirilmagan. Uni o‘yin uchun foydali bonus deb hisoblamang.",
        },
        {
          t: "p",
          text: "Qoldiq kichik bo‘lsa, bunday zanjir ko‘pincha sarflangan vaqt va xavfga arzimaydi. Bir necha yuz UC uchun Telegram akkaunti va hamyonni xavf ostiga qo‘yish mantiqsiz.",
        },
        {
          t: "h2",
          id: "gram-qoldigidan-uc-stars-yoki",
          text: "Gram qoldig‘idan UC, Stars yoki Premium’gacha zanjir qayerda uziladi?",
        },
        {
          t: "p",
          text: "O‘yinchining rejasi odatda shunday bo‘ladi: kanal balansi → Tonnel hisobi → Tonnel ichidagi aktiv yoki hamyon → so‘m → donat. Har bir bo‘g‘inda kim javob berishi quyida ko‘rsatilgan.",
        },
        {
          t: "list",
          items: [
            "<strong>Kanal balansi.</strong> Telegram shartlari amal qiladi. Yechimni qaytarib bo‘lmaydi.",
            "<strong>Tonnel hisobi.</strong> Bu uchinchi tomon xizmati. Telegram uni nazorat qilmaydi, uning shartlari rasmiy manbada yo‘q.",
            "<strong>Hamyon yoki aktiv.</strong> Telegram kripto hamyonlar uchun javob bermaydi. Kalit yoki maxfiy so‘zni yo‘qotsangiz, ularni tiklab beradigan tomon yo‘q.",
            "<strong>So‘mga chiqarish.</strong> Gramni Click, Payme, Paynet yoki Uzum orqali so‘mga aylantirish bu maqolada tasdiqlanmagan. Shuning uchun «qoldiqni kartaga tushirib, UC olaman» rejasini ishonchli yo‘l deb ko‘rsatmaymiz.",
            "<strong>Donat.</strong> GemPay’ning to‘lov usullari ro‘yxatida Gram, TON yoki kripto yo‘q. To‘lov UzCard, HUMO, Click, Uzum Bank, bot balansi yoki Rossiyadan SBP orqali qilinadi.",
          ],
        },
        {
          t: "p",
          text: "Yana bir keng tarqalgan adashish bor: Stars o‘yin valyutasiga aylanmaydi. Tonnel orqali yulduz yoki sovg‘a olsangiz ham, undan PUBG UC yoki MLBB olmosi chiqmaydi. Valyutalar farqi jadval bilan bu maqolada: <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">Stars, UC va olmos farqi</a>.",
        },
        {
          t: "p",
          text: "Jamoadosh «hamyonni faollashtirish uchun Gram yubor» desa, avval <a href=\"/blog/gram-wallet-faollashtirish-oyinchiga-kerakmi\">GRAM Wallet faollashtirish</a> haqidagi maqolani o‘qing. Donat uchun hamyon umuman kerakmi degan savolga bu yerda javob bor: <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">Telegram Wallet o‘yinchiga kerakmi</a>.",
        },
        {
          t: "h2",
          id: "tonneldan-foydalanishga-qaror-qilsangiz-xavfni",
          text: "Tonnel’dan foydalanishga qaror qilsangiz: xavfni kamaytiradigan besh qadam",
        },
        {
          t: "p",
          text: "Qaror sizniki. Agar baribir urinib ko‘rsangiz, quyidagi tartibga amal qiling.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Bot username’i «bot» bilan tugashini tekshiring. Postdagi referal havolaga ko‘r-ko‘rona bosmang, botni qidiruv orqali o‘zingiz toping. Tekshirish usuli bu yerda: <a href=\"/blog/game-bilan-tugaydigan-donat-boti-tekshirish\">«…game» botni username bo‘yicha tekshirish</a>.",
            "Faqat rasmiy Telegram ilovasidan foydalaning. Content Creator shartlarida bu kanal egasining majburiyatlari qatorida sanalgan.",
            "Ikki bosqichli tekshiruvni yoqib qo‘ying. Kirish kodi, 2FA parol va hamyonning maxfiy so‘zlarini hech bir botga yoki «support»ga bermang.",
            "Avval eng kichik summa bilan sinab ko‘ring. O‘tkazmani qaytarib bo‘lmasligini unutmang.",
            "Har bir qadamni skrinshot qiling. Foiz, muddat va komissiyani bot ichida o‘zingiz o‘qing, kanal postiga tayanmang.",
          ],
        },
        {
          t: "p",
          text: "Tonnel’da sovg‘a olib, uni tashqi bozorga chiqarmoqchi bo‘lsangiz, nazorat kimda qolishini avval o‘qib chiqing: <a href=\"/blog/sovgani-marketpleysga-otkazish-xavfsizmi-oyinchi\">sovg‘ani marketpleysga o‘tkazish xavfsizmi</a>.",
        },
        {
          t: "h2",
          id: "donatni-gramsiz-somda-qanday-rasmiylashtirish",
          text: "Donatni Gramsiz, so‘mda qanday rasmiylashtirish mumkin?",
        },
        {
          t: "p",
          text: "Maqsad donat bo‘lsa, Gram qoldig‘i kerak emas. UC, olmos, Stars yoki Premium’ni so‘mda alohida olish mumkin.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "<a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>ni oching va bo‘limni tanlang: o‘yin, Stars yoki Premium.",
            "O‘yin uchun faqat Player ID kiriting. Bot nikni tekshirib ko‘rsatadi, siz tasdiqlaganingizdan keyin to‘lov qilinadi. Parol hech qachon so‘ralmaydi.",
            `Stars uchun faqat @username kerak. Bir buyurtmada 50 tadan 10 000 tagacha olish mumkin. Bir donasi karta o‘tkazmasi yoki bot balansidan to‘lansa ${som(STARS_UNIT_CARD, "uz")}, Click yoki Uzum Bank orqali to‘lansa ${som(STARS_UNIT_ONLINE, "uz")} turadi.`,
            `Premium uchun ham @username yetadi: 3 oy — ${som(premium(3), "uz")}, 6 oy — ${som(premium(6), "uz")}, 12 oy — ${som(premium(12), "uz")}. 1 oylik tarif yo‘q. Obuna Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi, akkauntingizga kirilmaydi. Shu yo‘l bilan jamoadoshga ham uning username’i bo‘yicha Premium sovg‘a qilish mumkin.`,
            "To‘lang va natijani tekshiring. O‘yin valyutasi 1–5 daqiqada, Stars va Premium bir necha soniyada tushadi. Muammo bo‘lsa, buyurtma raqami bilan <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>ga yozing.",
          ],
        },
        {
          t: "p",
          text: "Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi. Hisobga tushgan valyuta esa qaytarilmaydi, shuning uchun ID va username’ni to‘lovdan oldin yana bir bor tekshiring.",
        },
        {
          t: "p",
          text: "Kanal egasi bo‘lsangiz, Gram qoldig‘ini alohida, Fragment orqali rasmiy yo‘l bilan hal qilishingiz mumkin. Uni uzoq qoldirmang: Telegram yechilmagan mukofotlarga o‘z ixtiyori bilan muddat qo‘yishi mumkin, muddat o‘tgach esa ular yo‘qotilgan hisoblanadi.",
        },
        {
          t: "p",
          text: "GemPay mustaqil xizmat va Telegram yoki o‘yin ishlab chiquvchilari nomidan ish ko‘rmaydi.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Terms of Service for Content Creators",
              href: "https://telegram.org/tos/content-creator-rewards",
            },
            {
              label: "Terms of Service",
              href: "https://fragment.com/terms",
            },
            {
              label: "Telegram FAQ",
              href: "https://telegram.org/faq",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Tonnel orqali chiqargan pulimni GemPay’da UC uchun to‘lov sifatida ishlatsa bo‘ladimi?",
          a: "To‘g‘ridan-to‘g‘ri yo‘q: GemPay’ning to‘lov usullari UzCard, HUMO, Click, Uzum Bank, bot balansi va Rossiyadan SBP. Gramni o‘zbek kartasiga chiqarish yo‘li bu maqolada tasdiqlanmagan.",
        },
        {
          q: "Klan kanalining oddiy a’zosi kanaldagi Gram balansidan ulush ola oladimi?",
          a: "Telegram mukofot shartlari kanal egasiga qaratilgan, obunachilar uchun bunday huquq u yerda yozilmagan. Adminning «hammaga bo‘lib beraman» degan gapi Telegram majburiyati emas.",
        },
        {
          q: "Tonnel’da Stars olsam, ularni PUBG UC yoki MLBB olmosiga almashtirsa bo‘ladimi?",
          a: "Yo‘q, Stars Telegram ichida ishlatiladi va o‘yin valyutasiga aylanmaydi. UC yoki olmos Player ID bo‘yicha alohida olinadi.",
        },
        {
          q: "Gram kursi tushib ketsa, qoldiqning UC’dagi qiymati ham kamayadimi?",
          a: "Kamayishi mumkin: Fragment Gram qiymatini tez-tez yangilanadigan bozor kursi bo‘yicha hisoblaydi. Tonnel ichida qiymat qanday hisoblanishi esa rasmiy manbalarda ko‘rsatilmagan.",
        },
        {
          q: "Klan admini jamoadoshlarga Premium sovg‘a qilmoqchi. Buning uchun Gram qoldig‘i kerakmi?",
          a: "Kerak emas. Premium har bir jamoadoshning @username’i bo‘yicha so‘mda olinadi va Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi. 3, 6 va 12 oylik variantlar bor.",
        },
        {
          q: "To‘lov qildim, lekin UC yoki olmos kelmadi. Pul qaytadimi?",
          a: "Buyurtma bajarilmagan bo‘lsa, pul 3 ish kuni ichida to‘liq qaytariladi. Buyurtma raqamini @StarsPaymeeSupport’ga yuboring. Valyuta hisobga tushib bo‘lgan bo‘lsa, u qaytarilmaydi.",
        },
      ],
    },
    ru: {
      title: "Безопасен ли Tonnel Cash Out: можно ли потратить остаток Gram на донат",
      metaTitle: "Безопасен ли Tonnel Cash Out",
      metaDescription: "Безопасность Tonnel Cash Out не подтверждена: сервиса нет на официальных страницах Telegram и Fragment. UC, Stars и Premium надёжнее покупать в сумах.",
      excerpt: "Безопасность Tonnel Cash Out не подтверждена: сервиса нет на официальных страницах Telegram и Fragment. UC, Stars и Premium надёжнее покупать в сумах.",
      answer: "Безопасность Tonnel Cash Out не подтверждена: сервиса нет на официальных страницах Telegram и Fragment. UC, Stars и Premium надёжнее покупать в сумах.",
      body: [
        {
          t: "h2",
          id: "tonnel-cash-outga-ishonsa-boladimi",
          text: "Можно ли доверять Tonnel Cash Out: что говорят официальные источники",
        },
        {
          t: "p",
          text: "Безопасность Tonnel Cash Out не подтверждена. Tonnel, Tonnel Marketplace и Tonnel Cash Out не упоминаются на официальных страницах Telegram и Fragment. Официально сервис не подтверждён, но и не опровергнут. Поэтому однозначно назвать его надёжным или мошенническим нельзя.",
        },
        {
          t: "p",
          text: "Игроки узнали об этой теме из постов в Telegram-каналах. В них предлагают перевести остаток с баланса канала на счёт в Tonnel. Взамен обещают часть остатка (в посте говорится о 80%) и бонус под названием «конфета». Пост в канале — не официальный источник, поэтому не считайте эти условия фактом.",
        },
        {
          t: "p",
          text: "В официальных документах прямо написано следующее:",
        },
        {
          t: "list",
          items: [
            "Согласно <a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a>, боты сторонних разработчиков не входят в основной интерфейс Telegram. Tonnel там не упоминается.",
            "Согласно <a href=\"https://telegram.org/tos/content-creator-rewards\" target=\"_blank\" rel=\"noopener\">условиям для авторов контента</a>, Telegram не контролирует криптокошельки, на которые выводится доход, и не несёт за них ответственности.",
            "По тем же условиям вывод награды нельзя ни отменить, ни вернуть. Даже если указан неверный кошелёк.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Названия «Gram Earnings» на официальных страницах нет. В условиях Telegram эти награды называются Content Creator Rewards, а сумма в канале — Gram balance.",
        },
        {
          t: "h2",
          id: "klan-kanali-balansidan-admin-uc",
          text: "Админ клана обещает UC с баланса канала: чьи это деньги?",
        },
        {
          t: "p",
          text: "Обычно вопрос возникает, когда админ канала клана говорит: «Выведу баланс и всем куплю UC». Условия Telegram здесь довольно однозначны.",
        },
        {
          t: "p",
          text: "Правила получения наград с баланса Gram и Stars обращены к владельцу канала. Обработку всех наград Telegram передал платформе Fragment. Отдельных прав на этот баланс у подписчиков или участников клана в условиях не прописано.",
        },
        {
          t: "p",
          text: "Ожидаемый баланс, который виден в канале, пока не считается средствами даже самого владельца. Такой статус он получает только после того, как вывод запрошен и успешно проведён. Размер награды и способ вывода Telegram определяет на своё усмотрение.",
        },
        {
          t: "p",
          text: "Практические правила для игрока:",
        },
        {
          t: "list",
          items: [
            "Если админ обещает UC или Stars с баланса канала, это его личное обещание, а не Telegram.",
            "Не переводите деньги админу или «посреднику» заранее, поверив такому обещанию.",
            "Если в чате клана предлагают звёзды дешевле рынка — это отдельный риск. Подробнее в статье про <a href=\"/blog/arzon-stars-refund-sxemasi-oyinchi-xavfi\">дешёвые Stars в чате клана</a>.",
          ],
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "kanal-mukofotidan-donatgacha-uch-yol",
          text: "От награды канала до доната: три пути в таблице",
        },
        {
          t: "p",
          text: "Ниже сравнены три пути. Главный вопрос один: что в итоге остаётся у игрока на руках?",
        },
        {
          t: "table",
          head: [
            "Путь",
            "Кто контролирует",
            "Что известно",
            "Главный риск",
            "Итог для игрока",
          ],
          rows: [
            [
              "Официальный вывод через Fragment",
              "Условия Telegram, Fragment",
              "По умолчанию награда выводится в Gram на подключённый кошелёк. Награда в Gram доступна через 2 дня",
              "Вывод не возвращается, ошибку в кошельке не исправить",
              "В кошельке Gram, но это ещё не UC и не сумы",
            ],
            [
              "Tonnel Cash Out",
              "Сторонний сервис",
              "Условия только в постах каналов, в официальных источниках их нет",
              "Telegram за этот сервис не отвечает",
              "Внутри Tonnel есть средства или актив, путь к донату неизвестен",
            ],
            [
              "Прямая покупка в сумах (GemPay)",
              "GemPay",
              "Оплата UzCard, HUMO, Click, Uzum Bank или с баланса бота",
              "Ошибка в Player ID или @username",
              "Игровая валюта приходит за 1–5 минут, Stars и Premium — за несколько секунд. Если заказ не выполнен, деньги вернутся в течение 3 рабочих дней",
            ],
          ],
        },
        {
          t: "p",
          text: "Об официальном пути есть ещё две детали. Первая: награда с баланса Stars становится доступной для вывода гораздо позже, чем Gram, — через 21 день. Вторая: по <a href=\"https://fragment.com/terms\" target=\"_blank\" rel=\"noopener\">условиям Fragment</a> в некоторых странах награда может выплачиваться в стейблкоинах или другим способом. Это решает Fragment, а какой способ работает для Узбекистана, в этой статье не подтверждено.",
        },
        {
          t: "h2",
          id: "post-shartlari-va-gram-kursi",
          text: "Как условия поста и курс Gram влияют на бюджет доната",
        },
        {
          t: "p",
          text: "Не воспринимайте процент из поста как гарантию. В самом боте условия могут оказаться другими, и читать их нужно в боте, а не в посте.",
        },
        {
          t: "p",
          text: "Даже если пост правдив, часть остатка теряется уже на этапе Tonnel. Затем, чтобы превратить его в UC, алмазы или Stars, нужен ещё минимум один этап. У каждого этапа свои условия и свои риски.",
        },
        {
          t: "p",
          text: "Учитывайте и курс. Fragment считает стоимость награды в Gram по рыночному курсу с CoinMarketCap, который обновляется примерно каждые 5 минут. Пока вы перебрасываете остаток с места на место, его стоимость в сумах может измениться. Если вы планировали купить Royale Pass перед турниром, нужной суммы может не хватить.",
        },
        {
          t: "p",
          text: "Что такое «конфета» и сколько она стоит, не объяснено ни в одном официальном источнике. Не считайте её полезным для игры бонусом.",
        },
        {
          t: "p",
          text: "Если остаток небольшой, такая цепочка обычно не стоит потраченного времени и риска. Ставить под угрозу Telegram-аккаунт и кошелёк ради нескольких сотен UC бессмысленно.",
        },
        {
          t: "h2",
          id: "gram-qoldigidan-uc-stars-yoki",
          text: "Где рвётся цепочка от остатка Gram до UC, Stars или Premium",
        },
        {
          t: "p",
          text: "План игрока обычно выглядит так: баланс канала → счёт в Tonnel → актив или кошелёк внутри Tonnel → сумы → донат. Ниже — кто отвечает на каждом звене.",
        },
        {
          t: "list",
          items: [
            "<strong>Баланс канала.</strong> Действуют условия Telegram. Вывод вернуть нельзя.",
            "<strong>Счёт в Tonnel.</strong> Это сторонний сервис. Telegram его не контролирует, его условий в официальных источниках нет.",
            "<strong>Кошелёк или актив.</strong> Telegram не отвечает за криптокошельки. Потеряете ключ или секретную фразу — восстановить их некому.",
            "<strong>Вывод в сумы.</strong> Обмен Gram на сумы через Click, Payme, Paynet или Uzum в этой статье не подтверждён. Поэтому план «выведу остаток на карту и куплю UC» мы надёжным путём не называем.",
            "<strong>Донат.</strong> В списке способов оплаты GemPay нет Gram, TON или криптовалюты. Оплата проходит через UzCard, HUMO, Click, Uzum Bank, баланс бота или по СБП из России.",
          ],
        },
        {
          t: "p",
          text: "Ещё одно частое заблуждение: Stars не превращаются в игровую валюту. Даже если купить через Tonnel звёзды или подарок, PUBG UC или алмазов MLBB из них не получится. Разница между валютами с таблицей — в статье <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">Stars, UC и алмазы: в чём разница</a>.",
        },
        {
          t: "p",
          text: "Если тиммейт пишет «отправь Gram, чтобы активировать кошелёк», сначала прочитайте материал про <a href=\"/blog/gram-wallet-faollashtirish-oyinchiga-kerakmi\">активацию GRAM Wallet</a>. А нужен ли кошелёк для доната вообще, разобрано здесь: <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">нужен ли игроку Telegram Wallet</a>.",
        },
        {
          t: "h2",
          id: "tonneldan-foydalanishga-qaror-qilsangiz-xavfni",
          text: "Если всё же решили пользоваться Tonnel: пять шагов, снижающих риск",
        },
        {
          t: "p",
          text: "Решение за вами. Если всё-таки хотите попробовать, действуйте в таком порядке.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Проверьте, что username бота заканчивается на «bot». Не переходите вслепую по реферальной ссылке из поста — найдите бота сами через поиск. Как проверять, описано здесь: <a href=\"/blog/game-bilan-tugaydigan-donat-boti-tekshirish\">проверка бота «…game» по username</a>.",
            "Пользуйтесь только официальным приложением Telegram. В условиях для авторов контента это указано среди обязанностей владельца канала.",
            "Включите двухэтапную проверку. Не сообщайте код входа, пароль 2FA и секретную фразу кошелька ни одному боту или «саппорту».",
            "Сначала попробуйте на минимальной сумме. Помните, что перевод не возвращается.",
            "Делайте скриншот каждого шага. Процент, сроки и комиссию читайте сами внутри бота, не полагайтесь на пост в канале.",
          ],
        },
        {
          t: "p",
          text: "Если хотите купить подарок в Tonnel и вывести его на внешний рынок, сначала разберитесь, у кого остаётся контроль: <a href=\"/blog/sovgani-marketpleysga-otkazish-xavfsizmi-oyinchi\">безопасно ли переводить подарок на маркетплейс</a>.",
        },
        {
          t: "h2",
          id: "donatni-gramsiz-somda-qanday-rasmiylashtirish",
          text: "Как оформить донат без Gram, в сумах",
        },
        {
          t: "p",
          text: "Если цель — донат, остаток Gram не нужен. UC, алмазы, Stars или Premium можно купить отдельно, в сумах.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Откройте <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> и выберите раздел: игра, Stars или Premium.",
            "Для игры введите только Player ID. Бот проверит и покажет ник, оплата — после вашего подтверждения. Пароль не запрашивается никогда.",
            `Для Stars нужен только @username. В одном заказе — от 50 до 10 000 штук. Одна звезда стоит ${som(STARS_UNIT_CARD, "ru")} при оплате переводом с карты или с баланса бота и ${som(STARS_UNIT_ONLINE, "ru")} при оплате через Click или Uzum Bank.`,
            `Для Premium тоже достаточно @username: 3 месяца — ${som(premium(3), "ru")}, 6 месяцев — ${som(premium(6), "ru")}, 12 месяцев — ${som(premium(12), "ru")}. Тарифа на 1 месяц нет. Подписка подключается через официальный механизм подарков Telegram, вход в ваш аккаунт не нужен. Так же можно подарить Premium тиммейту по его username.`,
            "Оплатите и проверьте результат. Игровая валюта приходит за 1–5 минут, Stars и Premium — за несколько секунд. Если что-то пошло не так, напишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> с номером заказа.",
          ],
        },
        {
          t: "p",
          text: "Если заказ не выполнен, деньги полностью вернутся в течение 3 рабочих дней. Валюта, уже зачисленная на счёт, не возвращается, поэтому перед оплатой ещё раз проверьте ID и username.",
        },
        {
          t: "p",
          text: "Если вы владелец канала, остаток Gram можно отдельно вывести официальным путём через Fragment. Не откладывайте надолго: Telegram вправе установить срок для невыведенных наград, а после его истечения они считаются утраченными.",
        },
        {
          t: "p",
          text: "GemPay — независимый сервис и не действует от имени Telegram или разработчиков игр.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Terms of Service for Content Creators",
              href: "https://telegram.org/tos/content-creator-rewards",
            },
            {
              label: "Terms of Service",
              href: "https://fragment.com/terms",
            },
            {
              label: "Telegram FAQ",
              href: "https://telegram.org/faq",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Можно ли оплатить UC в GemPay деньгами, выведенными через Tonnel?",
          a: "Напрямую нет: GemPay принимает UzCard, HUMO, Click, Uzum Bank, баланс бота и СБП из России. Способ вывести Gram на узбекскую карту в этой статье не подтверждён.",
        },
        {
          q: "Может ли обычный участник клана получить долю с баланса Gram в канале?",
          a: "Условия наград Telegram обращены к владельцу канала, прав подписчиков там нет. Слова админа «разделю на всех» — не обязательство Telegram.",
        },
        {
          q: "Если купить Stars в Tonnel, можно обменять их на UC PUBG или алмазы MLBB?",
          a: "Нет, Stars тратятся только внутри Telegram и в игровую валюту не превращаются. UC и алмазы покупаются отдельно по Player ID.",
        },
        {
          q: "Если курс Gram упадёт, остаток в пересчёте на UC тоже уменьшится?",
          a: "Может уменьшиться: Fragment считает стоимость Gram по рыночному курсу, который часто обновляется. Как стоимость считается внутри Tonnel, официальные источники не сообщают.",
        },
        {
          q: "Админ клана хочет подарить тиммейтам Premium. Для этого нужен остаток Gram?",
          a: "Не нужен. Premium покупается в сумах по @username каждого тиммейта и подключается через официальный механизм подарков Telegram — на 3, 6 или 12 месяцев.",
        },
        {
          q: "Оплатил, но UC или алмазы не пришли. Деньги вернут?",
          a: "Если заказ не выполнен, деньги полностью вернутся в течение 3 рабочих дней — отправьте номер заказа в @StarsPaymeeSupport. Уже зачисленная валюта не возвращается.",
        },
      ],
    },
  },
};

export default article;
