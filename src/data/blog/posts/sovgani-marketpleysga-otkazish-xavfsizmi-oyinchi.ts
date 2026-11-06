// Avtoblogyoz yasagan maqola (2026-11-06). Niyat: Jamoadoshidan yoki klan tadbirida kolleksion sovg‘a olgan o‘yinchi o‘yin kanallarida Portals kabi marketpleys reklamasini ko‘rib, «telegram sovg‘ani marketpleysga o‘tkazish xavfsizmi» deb qidiradi. U sovg‘a topshirilgach nima bo‘lishini, nazorat kimda qolishini va qanday xavflar borligini bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/blog/gift-marketplace-and-more
//   https://telegram.org/blog/profile-music-gift-themes
//   https://core.telegram.org/api/gifts
//   https://telegram.org/blog/wear-gifts-blockchain-and-more
//   https://telegram.org/blog/collectible-gifts-and-more

import type { Article } from "../types";
import { STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const article: Article = {
  slug: "sovgani-marketpleysga-otkazish-xavfsizmi-oyinchi",
  game: null,
  type: "trust",
  datePublished: "2026-11-06",
  dateModified: "2026-11-06",
  keywords: ["telegram sovg‘ani marketpleysga o‘tkazish xavfsizmi","telegram sovga marketpleys xavfsizmi","portals telegram xavfsizmi","kolleksion sovga sotish telegram","telegram sovgani ton hamyonga o‘tkazish","telegram gift marketplace","безопасно ли передавать подарки на маркетплейс telegram","portals telegram подарки безопасно","передать подарок telegram на маркет","продать подарок telegram","подарки telegram TON кошелек"],
  locales: {
    uz: {
      title: "Telegram sovg‘ani marketpleysga o‘tkazish xavfsizmi: nazorat kimda qoladi",
      metaTitle: "Telegram sovg‘ani marketpleysga o‘tkazish xavfsizmi",
      metaDescription: "Telegram tashqi marketpleyslar xavfsizligiga baho bermagan: o‘tkazilgan sovg‘a nazoratingizdan chiqadi. Xavfsizroq yo‘l — ichki bozor va sovg‘a takliflari.",
      excerpt: "Telegram tashqi marketpleyslar xavfsizligiga baho bermagan: o‘tkazilgan sovg‘a nazoratingizdan chiqadi. Xavfsizroq yo‘l — ichki bozor va sovg‘a takliflari.",
      answer: "Telegram tashqi marketpleyslar xavfsizligiga baho bermagan: o‘tkazilgan sovg‘a nazoratingizdan chiqadi. Xavfsizroq yo‘l — ichki bozor va sovg‘a takliflari.",
      body: [
        {
          t: "p",
          text: "Klan tadbirida yoki jamoadoshdan kolleksion sovg‘a oldingiz. Endi o‘yin kanallarida «sovg‘angni marketga qo‘y, qimmat sotamiz» degan reklamalar chiqyapti. Sovg‘ani topshirishdan oldin bitta savolga javob bering: u qayerga ketadi va kim boshqaradi?",
        },
        {
          t: "h2",
          id: "rasmiy-manbalar-nimani-xavfsiz-deb",
          text: "Rasmiy manbalar nimani xavfsiz deb ataydi?",
        },
        {
          t: "p",
          text: "Telegram o‘z bozorini e’lon qilganda uni <a href=\"https://telegram.org/blog/gift-marketplace-and-more\" target=\"_blank\" rel=\"noopener\">xavfsiz va qulay sovg‘alar bozori</a> deb ta’riflagan. Unda boshqa foydalanuvchilardan kolleksion sovg‘ani Stars’ga sotib olish va o‘zingiznikini sotish mumkin. <a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">Texnik hujjatda</a> sovg‘a takliflari ham himoyalangan usul deb yozilgan: ular xaridorni ham, egani ham firibgarlikdan saqlaydi.",
        },
        {
          t: "p",
          text: "TON hamyonga chiqarish haqida esa Telegram boshqacha gapiradi. Bu yo‘l <a href=\"https://telegram.org/blog/wear-gifts-blockchain-and-more\" target=\"_blank\" rel=\"noopener\">auksion saytlari kabi tashqi servislarga ulanish</a> imkonini beradi, xolos. Tashqi servisning o‘zi xavfsizmi yoki yo‘qmi — bu haqda rasmiy gap yo‘q.",
        },
        {
          t: "p",
          text: "Portals va shunga o‘xshash servislar bo‘yicha Telegram yoki TON’ning rasmiy xavfsizlik bahosi topilmadi. Shuning uchun ularni Telegram’ning bir qismi deb hisoblamang.",
        },
        {
          t: "p",
          text: "O‘yin kanallarida «shuncha ming sovg‘a marketga topshirildi», «marketdagi sovg‘alar million dollar turadi» degan postlar ko‘p chiqadi. Bunday raqamlar rasmiy manbalarda tasdiqlanmagan. Ko‘pchilik qilyapti degani xavfsiz degani emas.",
        },
        {
          t: "h2",
          id: "klan-sovgasini-topshirish-nimani-anglatadi",
          text: "Klan sovg‘asini «topshirish» nimani anglatadi: uch xil yo‘l",
        },
        {
          t: "p",
          text: "Telegram kolleksion sovg‘ani <a href=\"https://telegram.org/blog/collectible-gifts-and-more\" target=\"_blank\" rel=\"noopener\">boshqa foydalanuvchiga o‘tkazish yoki NFT marketpleyslarida auksionga qo‘yish</a> mumkinligini aytadi. «Marketga o‘tkazish» deganda odatda uch xil harakat nazarda tutiladi. Ularning xavfi ham har xil.",
        },
        {
          t: "table",
          head: [
            "Yo‘l",
            "Sovg‘a qayerda turadi",
            "Nazorat kimda",
            "Rasmiy manbada himoya haqida",
          ],
          rows: [
            [
              "Telegram ichidagi bozorga sotuvga qo‘yish",
              "Profilingizda, «Sale» belgisi bilan",
              "Sotilguncha sizda",
              "Bozor xavfsiz deb ta’riflangan",
            ],
            [
              "Boshqa akkaunt yoki marketpleys botiga o‘tkazish",
              "Oluvchining profilida",
              "Oluvchida",
              "Bunday kelishuvni himoyalash haqida gap yo‘q",
            ],
            [
              "TON hamyonga chiqarish",
              "Blokcheynda, profilga bog‘langan bo‘lishi mumkin",
              "Hamyon egasida",
              "Faqat tashqi servislarga ulanish imkoni aytilgan",
            ],
          ],
        },
        {
          t: "p",
          text: "Tashqi servis sovg‘ani o‘z akkauntiga yoki botiga o‘tkazishni so‘rasa, bu oddiy o‘tkazma hisoblanadi. Sovg‘a profilingizdan chiqadi va uni endi boshqa tomon boshqaradi. Sovg‘ani qaytarish yoki sotuv pulini berish o‘sha servisning qoidasi va halolligiga bog‘liq bo‘ladi.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "sovga-topshirilgach-nazorat-kimda-qoladi",
          text: "Sovg‘a topshirilgach nazorat kimda qoladi?",
        },
        {
          t: "p",
          text: "Misol. Turnirdan keyin klan sardori sizga kolleksion sovg‘a berdi, u profilingizda bezak bo‘lib turibdi. Squad kanalida reklama chiqdi: «sovg‘ani botimizga o‘tkaz, ikki baravar qimmat sotib beramiz». Har bir yo‘lda nima bo‘lishini ko‘raylik.",
        },
        {
          t: "h3",
          text: "Ichki bozorga qo‘ysangiz",
        },
        {
          t: "p",
          text: "Sovg‘a sotilguncha profilingizda qoladi, unga faqat «Sale» belgisi qo‘shiladi. Fikringiz o‘zgarsa, «Unlist» tugmasi bilan sotuvni bekor qilasiz. Nazorat oxirigacha sizda bo‘ladi.",
        },
        {
          t: "h3",
          text: "Begona akkaunt yoki botga o‘tkazsangiz",
        },
        {
          t: "p",
          text: "Sovg‘a oluvchining profiliga o‘tadi. Telegram bunday o‘tkazmani qaytarishni va’da qilmagan. Servis yopilsa, akkaunti bloklansa yoki javob bermay qo‘ysa, sovg‘ani Telegram orqali talab qilishning rasmiy yo‘li ko‘rsatilmagan.",
        },
        {
          t: "h3",
          text: "TON hamyonga chiqarsangiz",
        },
        {
          t: "p",
          text: "Texnik hujjatga ko‘ra blokcheyndagi sovg‘a profilga bog‘langan holda ko‘rinishi mumkin, lekin egalik TON hamyonda qoladi. Ya’ni hamyon kimniki bo‘lsa, sovg‘a ham o‘shaniki. Profilda ko‘rinib turishi egalik belgisi emas.",
        },
        {
          t: "h2",
          id: "tashqi-marketpleysda-qanday-xavflar-bor",
          text: "Tashqi marketpleysda qanday xavflar bor?",
        },
        {
          t: "list",
          items: [
            "<strong>Rasmiy baho yo‘q.</strong> Telegram tashqi servislarga ulanish mumkinligini aytgan, lekin ular uchun javobgarlikni o‘z zimmasiga olmagan.",
            "<strong>Reklama — isbot emas.</strong> Kanal muallifining servis bilan qanday kelishuvi borligini bilmaysiz. Postdagi va’da xavfsizlik dalili bo‘la olmaydi.",
            "<strong>Soxta botlar va Mini App’lar.</strong> Mashhur servis nomini taqlid qiluvchi akkauntlar bo‘lishi mumkin. Kirish kodi, 2FA paroli yoki hamyon tiklash so‘zlari so‘ralsa, darhol to‘xtang.",
            "<strong>Noaniq narx va komissiya.</strong> Ichki bozorda ham sotuvchi narxning <a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">komissiya koeffitsienti</a> bilan hisoblangan ulushini oladi. Aniq foiz hujjatda ko‘rsatilmagan. Tashqi servis shartlari esa butunlay alohida.",
            "<strong>Orqaga yo‘l yo‘q.</strong> O‘tkazilgan sovg‘aning qaytishi faqat oluvchining xohishiga bog‘liq.",
          ],
        },
        {
          t: "p",
          text: "Shubhali havolalar klan chatida qanday tarqalishi va Telegram qachon cheklov qo‘yishi haqida <a href=\"/blog/klan-chatida-shubhali-havola-spam-cheklov\">alohida maqola</a> bor. Sovg‘a sotib olish taklifidagi aldov belgilari <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">bu yerda</a> jamlangan.",
        },
        {
          t: "h2",
          id: "sotmoqchi-bolsangiz-tashqi-bot-orniga",
          text: "Sotmoqchi bo‘lsangiz: tashqi bot o‘rniga ichki bozor",
        },
        {
          t: "p",
          text: "Sovg‘ani pulga aylantirish niyatingiz bo‘lsa, uni begona botga topshirmang. Telegram’ning o‘z bozoridan foydalaning. Tartibi <a href=\"https://telegram.org/blog/gift-marketplace-and-more\" target=\"_blank\" rel=\"noopener\">rasmiy blogda</a> tasvirlangan:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Kolleksion sovg‘ani profilingizda oching.",
            "Atributlar ichidagi «Value» maydonini ko‘ring — u <a href=\"https://telegram.org/blog/profile-music-gift-themes\" target=\"_blank\" rel=\"noopener\">taxminiy qayta sotish narxini</a> ko‘rsatadi. Tashqi reklamadagi va’dani shu bilan solishtiring.",
            "«Sell» tugmasini bosib, narxni Stars’da kiriting.",
            "Sovg‘a bozorda chiqqani va profilingizda «Sale» belgisi turganini tekshiring.",
            "Xaridor chiqmasa yoki fikringiz o‘zgarsa, «Unlist» tugmasini bosing.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Turnirda endigina olingan sovg‘ada «Sell» ishlamasa, qayta sotish sanasi cheklovi qo‘yilgan bo‘lishi mumkin. Texnik hujjatga ko‘ra bunday sovg‘ani faqat belgilangan sanadan keyin sotuvga qo‘yish mumkin.",
        },
        {
          t: "p",
          text: "Bu yo‘lning asosiy afzalligi: sovg‘a sotilguncha qo‘lingizdan chiqmaydi. Xaridor topilmasa, hech narsa yo‘qotmaysiz.",
        },
        {
          t: "h2",
          id: "xaridor-togridan-togri-yozsa-taklif",
          text: "Xaridor to‘g‘ridan-to‘g‘ri yozsa: taklif va chat kelishuvi farqi",
        },
        {
          t: "p",
          text: "Ko‘pincha jamoadosh yoki notanish o‘yinchi shaxsiy chatga yozadi: «sovg‘angni sotasanmi?». Texnik hujjatga ko‘ra Telegram’dagi sovg‘a takliflari Telegram tomonidan himoyalangan. Ular to‘g‘ridan-to‘g‘ri sotuvda ikkala tomonni firibgarlikdan saqlaydi.",
        },
        {
          t: "p",
          text: "Chatdagi og‘zaki kelishuv esa bu himoyaga kirmaydi. Tipik iboralar:",
        },
        {
          t: "list",
          items: [
            "«Avval sen sovg‘ani o‘tkaz, keyin pulni tashlayman».",
            "«Ishonchli garant bot bor, sovg‘ani unga yubor».",
            "«Kartangga so‘mda o‘tkazdim, mana chek skrinshoti». Skrinshotni tahrirlash oson, pul hisobingizga tushganini faqat bank ilovasida tekshiring.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Jamoadosh tanish bo‘lsa ham qoida o‘zgarmaydi: kelishuvni Telegram’ning taklif mexanizmi yoki ichki bozor orqali qiling. Tanish nomdan yozgan odam har doim o‘sha odam bo‘lavermaydi — akkaunt buzilgan bo‘lishi mumkin.",
        },
        {
          t: "h2",
          id: "sovgani-ton-hamyonga-chiqarishdan-oldin",
          text: "Sovg‘ani TON hamyonga chiqarishdan oldin nimani bilish kerak?",
        },
        {
          t: "list",
          items: [
            "Telegram ma’lumotiga ko‘ra sovg‘ani TON blokcheyni orqali o‘tkazish yoki auksionga qo‘yish mumkin. Hamyonga chiqarish tashqi servislarga yo‘l ochadi.",
            "Egalik hamyonda qoladi. Hamyonga kim kira olsa, sovg‘ani ham o‘sha boshqaradi. Shuning uchun tiklash so‘zlarini hech kimga bermang.",
            "Chiqarish qadamlari, narxi va kutish muddati bu maqolada tasdiqlanmagan. Ilovada nima ko‘rsatilsa, shunga qarang.",
            "Kolleksion sovg‘adagi asl ma’lumotlar va ularni olib tashlash haqida: <a href=\"/blog/nft-sovga-imzosi-stars-oyinchi\">klan sovg‘asida nima qoladi</a>.",
            "Hamyon Stars yoki o‘yin donati uchun shart emas. Batafsil: <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">Telegram Wallet o‘yinchiga kerakmi</a>.",
          ],
        },
        {
          t: "p",
          text: "Sovg‘ani faqat profilda bezak sifatida saqlamoqchi bo‘lsangiz, uni hamyonga chiqarishga hojat yo‘q.",
        },
        {
          t: "h2",
          id: "topshirishdan-oldin-oyinchining-tekshiruv-royxati",
          text: "Topshirishdan oldin o‘yinchining tekshiruv ro‘yxati",
        },
        {
          t: "list",
          items: [
            "Bot nomi va havolasini reklama postidan olmang, o‘zingiz qidirib tekshiring.",
            "Kirish kodi, parol, 2FA va hamyon so‘zlarini hech kimga bermang.",
            "Tashqi taklifni ko‘rib chiqishdan oldin «Value» maydoni va ichki bozordagi o‘xshash sovg‘alar narxini solishtiring.",
            "Sovg‘a sardor yoki jamoadoshdan kelgan bo‘lsa, sotishdan oldin u bilan gaplashing. Klanda sovg‘ani jimgina sotib yuborish yaxshi qabul qilinmasligi mumkin.",
            "Maqsadingiz o‘yin valyutasi bo‘lsa, yodda tuting: Stars UC, olmos yoki CP’ga aylanmaydi. Qaysi valyuta nimaga kerakligini <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">bu taqqoslashda</a> ko‘ring. GemPay’da o‘yin valyutasi so‘mda, faqat Player ID bo‘yicha olinadi, parol so‘ralmaydi.",
            `Aksincha, jamoadoshga sovg‘a olish uchun Stars kerak bo‘lsa, <a href="https://t.me/Gempayuz_bot" target="_blank" rel="noopener">@Gempayuz_bot</a> narxlari: 1 ta Stars karta o‘tkazmasi yoki balansdan ${som(STARS_UNIT_CARD, "uz")}, Click yoki Uzum Bank orqali ${som(STARS_UNIT_ONLINE, "uz")}. Bir buyurtmada 50 dan 10 000 tagacha olish mumkin, faqat @username kerak.`,
          ],
        },
        {
          t: "sources",
          items: [
            {
              label: "Gift Marketplace, Posting Several Stories at Once, Auto-Translate For Channels",
              href: "https://telegram.org/blog/gift-marketplace-and-more",
            },
            {
              label: "Music on Profiles, Stickers Mini App, New Profiles, and More",
              href: "https://telegram.org/blog/profile-music-gift-themes",
            },
            {
              label: "Telegram Gifts",
              href: "https://core.telegram.org/api/gifts",
            },
            {
              label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More",
              href: "https://telegram.org/blog/wear-gifts-blockchain-and-more",
            },
            {
              label: "Collectible Gifts, Message Search Filters and More",
              href: "https://telegram.org/blog/collectible-gifts-and-more",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Kanalda reklama qilingan sovg‘a marketini Telegram tekshirganmi?",
          a: "Bunday tekshiruv haqida rasmiy ma’lumot topilmadi. Telegram himoyalangan deb atagan vositalar faqat ikkita: o‘zining sovg‘alar bozori va sovg‘a takliflari.",
        },
        {
          q: "Botga o‘tkazgan sovg‘amni servis qaytarmasa, Telegram yordam beradimi?",
          a: "Telegram bunday o‘tkazmani qaytarishni va’da qilmagan. Sovg‘aning taqdiri uni olgan servisning qoidasi va halolligiga bog‘liq bo‘lib qoladi.",
        },
        {
          q: "Ichki bozorga qo‘ygan sovg‘am bilan profil bezagi saqlanib qoladimi?",
          a: "Ha, sotilmaguncha sovg‘a sizda qoladi, unga faqat «Sale» belgisi qo‘shiladi. Sotishdan voz kechsangiz, «Unlist» bilan e’londan olib tashlaysiz.",
        },
        {
          q: "Turnirda olgan sovg‘amda «Sell» tugmasi ishlamayapti — nima qilay?",
          a: "Unga qayta sotish sanasi cheklovi qo‘yilgan bo‘lishi mumkin. Bunday sovg‘a ko‘rsatilgan sanagacha sotuvga chiqmaydi, shu kunni kutish kerak.",
        },
        {
          q: "Sovg‘a sotilsa, qo‘limga to‘liq narx tushadimi?",
          a: "Har doim ham emas: texnik hujjatga ko‘ra sotuvchi komissiya koeffitsientiga ko‘ra hisoblangan ulushni oladi. Aniq foiz e’lon qilinmagan, summani sotuvga qo‘yish oynasida ko‘ring.",
        },
        {
          q: "Sovg‘adan tushgan Stars’ni PUBG yoki MLBB donatiga ishlatsa bo‘ladimi?",
          a: "Yo‘q, Stars o‘yin valyutasiga almashtirilmaydi. UC, olmos yoki CP alohida, so‘mda Player ID orqali to‘ldiriladi.",
        },
        {
          q: "Klandoshim sovg‘amni sotib olmoqchi — pulni qanday xavfsiz olaman?",
          a: "Sovg‘ani oldindan o‘tkazmang va «garant bot» xizmatidan voz keching. Savdoni Telegram’ning sovg‘a taklifi yoki ichki bozor orqali qiling: bu yo‘llar ikkala tomonni himoyalaydi.",
        },
      ],
    },
    ru: {
      title: "Передать подарок Telegram на маркетплейс: безопасно ли и у кого контроль",
      metaTitle: "Передать подарок Telegram на маркетплейс",
      metaDescription: "Telegram не оценивал безопасность внешних маркетплейсов: переданный подарок уходит из-под вашего контроля. Надёжнее — внутренний рынок и предложения о покупке.",
      excerpt: "Telegram не оценивал безопасность внешних маркетплейсов: переданный подарок уходит из-под вашего контроля. Надёжнее — внутренний рынок и предложения о покупке.",
      answer: "Telegram не оценивал безопасность внешних маркетплейсов: переданный подарок уходит из-под вашего контроля. Надёжнее — внутренний рынок и предложения о покупке.",
      body: [
        {
          t: "p",
          text: "На клановом ивенте или от тиммейта вам достался коллекционный подарок. Теперь в игровых каналах мелькает реклама: «выставь подарок на маркет, продадим дорого». Прежде чем что-то отдавать, ответьте на один вопрос: куда уйдёт подарок и кто будет им распоряжаться?",
        },
        {
          t: "h2",
          id: "rasmiy-manbalar-nimani-xavfsiz-deb",
          text: "Что официальные источники называют безопасным?",
        },
        {
          t: "p",
          text: "Объявляя о запуске своего рынка, Telegram описал его как <a href=\"https://telegram.org/blog/gift-marketplace-and-more\" target=\"_blank\" rel=\"noopener\">безопасный и удобный рынок подарков</a>. Там можно купить коллекционный подарок у других пользователей за Stars и продать свой. В <a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">технической документации</a> защищённым способом названы и предложения о покупке подарка (gift offers): они берегут от мошенничества и покупателя, и владельца.",
        },
        {
          t: "p",
          text: "О выводе на TON-кошелёк Telegram говорит иначе. Этот путь лишь даёт возможность <a href=\"https://telegram.org/blog/wear-gifts-blockchain-and-more\" target=\"_blank\" rel=\"noopener\">подключиться к внешним сервисам, например аукционным площадкам</a>. Безопасен ли сам внешний сервис — официально об этом ничего не сказано.",
        },
        {
          t: "p",
          text: "Официальной оценки безопасности Portals и похожих сервисов от Telegram или TON найти не удалось. Поэтому не считайте их частью Telegram.",
        },
        {
          t: "p",
          text: "В игровых каналах часто встречаются посты вроде «на маркет уже сдали столько-то тысяч подарков» или «подарки на маркете стоят миллионы долларов». В официальных источниках такие цифры не подтверждены. То, что так делают многие, ещё не значит, что это безопасно.",
        },
        {
          t: "h2",
          id: "klan-sovgasini-topshirish-nimani-anglatadi",
          text: "Что значит «сдать» клановый подарок: три разных пути",
        },
        {
          t: "p",
          text: "Telegram пишет, что коллекционный подарок можно <a href=\"https://telegram.org/blog/collectible-gifts-and-more\" target=\"_blank\" rel=\"noopener\">передать другому пользователю или выставить на аукцион на NFT-маркетплейсах</a>. Под «перевести на маркет» обычно понимают одно из трёх действий, и риски у них разные.",
        },
        {
          t: "table",
          head: [
            "Путь",
            "Где находится подарок",
            "У кого контроль",
            "Что о защите сказано в официальных источниках",
          ],
          rows: [
            [
              "Выставить на продажу на рынке внутри Telegram",
              "В вашем профиле, с меткой «Sale»",
              "У вас — до момента продажи",
              "Рынок описан как безопасный",
            ],
            [
              "Передать другому аккаунту или боту маркетплейса",
              "В профиле получателя",
              "У получателя",
              "О защите таких сделок ничего не сказано",
            ],
            [
              "Вывести на TON-кошелёк",
              "В блокчейне, может быть привязан к профилю",
              "У владельца кошелька",
              "Упомянута только возможность подключиться к внешним сервисам",
            ],
          ],
        },
        {
          t: "p",
          text: "Если внешний сервис просит передать подарок на его аккаунт или бота, это обычная передача. Подарок уходит из вашего профиля, и распоряжается им уже другая сторона. Вернут ли вам подарок или выплатят ли деньги за продажу, зависит только от правил и честности этого сервиса.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "sovga-topshirilgach-nazorat-kimda-qoladi",
          text: "У кого остаётся контроль после передачи подарка?",
        },
        {
          t: "p",
          text: "Пример. После турнира капитан клана подарил вам коллекционный подарок, и он красуется в профиле. В канале сквада появилась реклама: «переведи подарок нашему боту, продадим в два раза дороже». Разберём, что происходит в каждом случае.",
        },
        {
          t: "h3",
          text: "Если выставить на внутренний рынок",
        },
        {
          t: "p",
          text: "До продажи подарок остаётся в вашем профиле, к нему лишь добавляется метка «Sale». Передумали — снимаете продажу кнопкой «Unlist». Контроль до конца остаётся за вами.",
        },
        {
          t: "h3",
          text: "Если передать чужому аккаунту или боту",
        },
        {
          t: "p",
          text: "Подарок переходит в профиль получателя. Telegram не обещал отменять такие передачи. Если сервис закроется, его аккаунт заблокируют или он перестанет отвечать, официального способа вернуть подарок через Telegram не указано.",
        },
        {
          t: "h3",
          text: "Если вывести на TON-кошелёк",
        },
        {
          t: "p",
          text: "По технической документации подарок в блокчейне может отображаться привязанным к профилю, но владение остаётся за TON-кошельком. Проще говоря, чей кошелёк — того и подарок. То, что подарок виден в профиле, ещё не признак владения.",
        },
        {
          t: "h2",
          id: "tashqi-marketpleysda-qanday-xavflar-bor",
          text: "Чем рискуете на внешнем маркетплейсе?",
        },
        {
          t: "list",
          items: [
            "<strong>Нет официальной оценки.</strong> Telegram сообщил, что к внешним сервисам можно подключиться, но ответственности за них на себя не брал.",
            "<strong>Реклама — не доказательство.</strong> Вы не знаете, какая договорённость у автора канала с сервисом. Обещание в посте не подтверждает безопасность.",
            "<strong>Поддельные боты и Mini App.</strong> Встречаются аккаунты, которые копируют название известного сервиса. Если просят код входа, пароль 2FA или фразу восстановления кошелька — сразу останавливайтесь.",
            "<strong>Непрозрачная цена и комиссия.</strong> Даже на внутреннем рынке продавец получает долю цены, рассчитанную через <a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">коэффициент комиссии</a>. Точный процент в документации не указан. А условия внешних сервисов — отдельная история.",
            "<strong>Пути назад нет.</strong> Вернётся ли переданный подарок, решает только получатель.",
          ],
        },
        {
          t: "p",
          text: "О том, как подозрительные ссылки расходятся по клановым чатам и когда Telegram вводит ограничения, есть <a href=\"/blog/klan-chatida-shubhali-havola-spam-cheklov\">отдельная статья</a>. Признаки обмана в предложениях купить подарок собраны <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">здесь</a>.",
        },
        {
          t: "h2",
          id: "sotmoqchi-bolsangiz-tashqi-bot-orniga",
          text: "Хотите продать: внутренний рынок вместо внешнего бота",
        },
        {
          t: "p",
          text: "Если цель — превратить подарок в деньги, не отдавайте его чужому боту. Пользуйтесь рынком самого Telegram. Порядок действий описан в <a href=\"https://telegram.org/blog/gift-marketplace-and-more\" target=\"_blank\" rel=\"noopener\">официальном блоге</a>:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Откройте коллекционный подарок в своём профиле.",
            "Посмотрите поле «Value» в атрибутах — оно показывает <a href=\"https://telegram.org/blog/profile-music-gift-themes\" target=\"_blank\" rel=\"noopener\">примерную цену перепродажи</a>. Сравните её с тем, что обещает внешняя реклама.",
            "Нажмите «Sell» и укажите цену в Stars. В русском интерфейсе названия кнопок могут отличаться.",
            "Проверьте, что подарок появился на рынке, а в профиле стоит метка «Sale».",
            "Если покупатель не нашёлся или вы передумали, нажмите «Unlist».",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Если на только что полученном турнирном подарке «Sell» не срабатывает, возможно, на нём стоит ограничение по дате перепродажи. По технической документации такой подарок можно выставить на продажу только начиная с указанной даты.",
        },
        {
          t: "p",
          text: "Главное преимущество этого пути: подарок не уходит из ваших рук до продажи. Не нашёлся покупатель — вы ничего не теряете.",
        },
        {
          t: "h2",
          id: "xaridor-togridan-togri-yozsa-taklif",
          text: "Покупатель пишет напрямую: предложение против договорённости в чате",
        },
        {
          t: "p",
          text: "Часто тиммейт или незнакомый игрок пишет в личку: «продашь подарок?». По технической документации предложения о покупке подарка в Telegram защищены самим Telegram. При прямой продаже они берегут от мошенничества обе стороны.",
        },
        {
          t: "p",
          text: "Устная договорённость в чате под эту защиту не попадает. Типичные фразы:",
        },
        {
          t: "list",
          items: [
            "«Сначала переведи подарок, потом скину деньги».",
            "«Есть надёжный бот-гарант, отправь подарок ему».",
            "«Перевёл тебе на карту в сумах, вот скрин чека». Скриншот легко подделать — поступление денег проверяйте только в банковском приложении.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Даже если тиммейт знакомый, правило то же: проводите сделку через механизм предложений Telegram или внутренний рынок. Тот, кто пишет со знакомого аккаунта, не всегда тот самый человек — аккаунт могли взломать.",
        },
        {
          t: "h2",
          id: "sovgani-ton-hamyonga-chiqarishdan-oldin",
          text: "Что знать перед выводом подарка на TON-кошелёк?",
        },
        {
          t: "list",
          items: [
            "По данным Telegram, подарки можно передавать или выставлять на аукцион через блокчейн TON. Вывод на кошелёк открывает доступ к внешним сервисам.",
            "Владение остаётся за кошельком. Кто имеет доступ к кошельку, тот распоряжается и подарком. Поэтому никому не сообщайте фразу восстановления.",
            "Шаги вывода, его стоимость и сроки ожидания в этой статье не подтверждены. Ориентируйтесь на то, что показывает приложение.",
            "Об исходных данных в коллекционном подарке и их удалении: <a href=\"/blog/nft-sovga-imzosi-stars-oyinchi\">что остаётся в клановом подарке</a>.",
            "Кошелёк не нужен ни для Stars, ни для игрового доната. Подробнее: <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">нужен ли игроку Telegram Wallet</a>.",
          ],
        },
        {
          t: "p",
          text: "Если подарок нужен вам только как украшение профиля, выводить его на кошелёк незачем.",
        },
        {
          t: "h2",
          id: "topshirishdan-oldin-oyinchining-tekshiruv-royxati",
          text: "Чек-лист игрока перед передачей подарка",
        },
        {
          t: "list",
          items: [
            "Не берите название и ссылку на бота из рекламного поста — найдите и проверьте сами.",
            "Никому не сообщайте код входа, пароль, 2FA и фразу кошелька.",
            "Прежде чем рассматривать внешнее предложение, сравните поле «Value» и цены похожих подарков на внутреннем рынке.",
            "Если подарок от капитана или тиммейта, поговорите с ним до продажи. Молча продать подарок в клане могут воспринять не очень хорошо.",
            "Если ваша цель — игровая валюта, помните: Stars не превращаются в UC, алмазы или CP. Какая валюта для чего нужна, смотрите в <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">этом сравнении</a>. В GemPay игровая валюта покупается в сумах только по Player ID, пароль не запрашивается.",
            `А если наоборот нужны Stars, чтобы купить подарок тиммейту, цены в <a href="https://t.me/Gempayuz_bot" target="_blank" rel="noopener">@Gempayuz_bot</a> такие: 1 Stars — ${som(STARS_UNIT_CARD, "ru")} при переводе с карты или с баланса, ${som(STARS_UNIT_ONLINE, "ru")} через Click или Uzum Bank. За один заказ можно взять от 50 до 10 000 штук, нужен только @username.`,
          ],
        },
        {
          t: "sources",
          items: [
            {
              label: "Gift Marketplace, Posting Several Stories at Once, Auto-Translate For Channels",
              href: "https://telegram.org/blog/gift-marketplace-and-more",
            },
            {
              label: "Music on Profiles, Stickers Mini App, New Profiles, and More",
              href: "https://telegram.org/blog/profile-music-gift-themes",
            },
            {
              label: "Telegram Gifts",
              href: "https://core.telegram.org/api/gifts",
            },
            {
              label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More",
              href: "https://telegram.org/blog/wear-gifts-blockchain-and-more",
            },
            {
              label: "Collectible Gifts, Message Search Filters and More",
              href: "https://telegram.org/blog/collectible-gifts-and-more",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Telegram проверял маркет подарков, который рекламируют в канале?",
          a: "Официальных данных о такой проверке не нашлось. Защищёнными Telegram называет только два инструмента: собственный рынок подарков и предложения о покупке подарка.",
        },
        {
          q: "Если сервис не вернёт подарок, переданный его боту, Telegram поможет?",
          a: "Telegram не обещал отменять такие передачи. Судьба подарка зависит от правил и порядочности сервиса, который его получил.",
        },
        {
          q: "Подарок, выставленный на внутренний рынок, останется украшением профиля?",
          a: "Да, пока его не купили, он ваш — добавляется только метка «Sale». Передумаете продавать — снимите объявление кнопкой «Unlist».",
        },
        {
          q: "На турнирном подарке не работает кнопка «Sell» — что делать?",
          a: "Скорее всего, на нём действует ограничение по дате перепродажи. До указанной даты такой подарок на продажу не выставить — остаётся подождать.",
        },
        {
          q: "Если подарок купят, я получу всю цену?",
          a: "Не обязательно: по технической документации продавцу достаётся доля, рассчитанная с учётом коэффициента комиссии. Точный процент не публиковался — итоговую сумму смотрите в окне выставления на продажу.",
        },
        {
          q: "Можно потратить Stars от продажи подарка на донат в PUBG или MLBB?",
          a: "Нет, Stars не обмениваются на игровую валюту. UC, алмазы или CP пополняются отдельно — в сумах по Player ID.",
        },
        {
          q: "Соклановец хочет купить мой подарок — как безопасно получить оплату?",
          a: "Не передавайте подарок заранее и откажитесь от «бота-гаранта». Проводите сделку через предложение о покупке подарка в Telegram или внутренний рынок — эти способы защищают обе стороны.",
        },
      ],
    },
  },
};

export default article;
