// Avtoblogyoz yasagan maqola (2026-11-12). Niyat: Klan chatida sotuvchi yoki jamoadosh UC, Stars yoki Premium uchun «username'imga Gram yubor» deb so'ragan o'yinchi «username bo'yicha gram o'tkazma» deb qidiradi. U bu funksiya rostmi, shunday to'lash xavfsizmi va donat uchun hamyon kerakmi, bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://core.telegram.org/bots/api
//   https://fragment.com/about
//   https://fragment.com/username/resolved

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "username-boyicha-gram-otkazma-oyinchi-xavfi",
  game: null,
  type: "trust",
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  keywords: ["username bo'yicha gram o'tkazma","username orqali gram yuborish","gram yubor klan chati","telegram username ton o'tkazma xavfsizmi","uc uchun gram to'lash","telegram hamyonni akkauntga bog'lash","перевод gram по юзернейму","перевод TON по юзернейму telegram","привязка кошелька к telegram аккаунту","скинь gram за UC развод","telegram бета перевод по username"],
  locales: {
    uz: {
      title: "Username bo‘yicha Gram o‘tkazma: klan chatida UC uchun to‘lash xavfsizmi?",
      metaTitle: "Username bo‘yicha Gram o‘tkazma",
      metaDescription: "Yo‘q: username bo‘yicha Gram o‘tkazma rasman tasdiqlanmagan, oldindan yuborilgan Gram esa UC kelishini ta’minlamaydi. UC, Stars va Premium so‘mda olinadi.",
      excerpt: "Yo‘q: username bo‘yicha Gram o‘tkazma rasman tasdiqlanmagan, oldindan yuborilgan Gram esa UC kelishini ta’minlamaydi. UC, Stars va Premium so‘mda olinadi.",
      answer: "Yo‘q: username bo‘yicha Gram o‘tkazma rasman tasdiqlanmagan, oldindan yuborilgan Gram esa UC kelishini ta’minlamaydi. UC, Stars va Premium so‘mda olinadi.",
      body: [
        {
          t: "p",
          text: "Telegram ichida @username bo‘yicha Gram yuborish imkoni rasmiy manbalarda hozircha tasdiqlanmagan. Klan chatida kimdir «yangi funksiya chiqdi, username’imga Gram tashla, UC darhol tushadi» desa, buni tekshirib bo‘lmaydi. UC, Stars va Premium olish uchun esa Gram ham, hamyon ham kerak emas.",
        },
        {
          t: "h2",
          id: "usernameimga-gram-tashla-degan-gapning",
          text: "«Username’imga Gram tashla» degan gapning asosi bormi?",
        },
        {
          t: "p",
          text: "Bu gap Telegram kanallaridagi postlardan tarqalgan: go‘yo yangi beta-versiyada hamyonni akkauntga bog‘lab, uzun manzil o‘rniga username bo‘yicha pul yuborish mumkin bo‘larmish. Kanal posti rasmiy manba emas. Bunday beta yoki username bo‘yicha o‘tkazma haqida telegram.org’da e’lon topilmadi.",
        },
        {
          t: "p",
          text: "Rasmiy hujjatda faqat hamyonning profilda ko‘rinishiga oid o‘zgarishlar bor. <a href=\"https://core.telegram.org/bots/api\" target=\"_blank\" rel=\"noopener\">Telegram Bot API</a>ning 10.4 versiyasida:",
        },
        {
          t: "list",
          items: [
            "shaxsiy chatlar uchun foydalanuvchining profil sahifasida ko‘rinadigan TON hamyon kartasi maydoni qo‘shilgan;",
            "TonWalletCard, TonWalletCardSticker, TonNft va TonNftAttribute klasslari qo‘shilgan;",
            "StoryAreaPosition klassining nomi AreaPosition’ga o‘zgargan, chunki endi u TON hamyon kartalaridagi stikerlarning joyini ham tavsiflaydi.",
          ],
        },
        {
          t: "p",
          text: "Bular kartaning profilda qanday ko‘rinishi va bezalishi bilan bog‘liq. Username yozib pul yuborish tartibi bu maqolada tasdiqlanmagan. O‘yinchi uchun xulosa oddiy: «yangi funksiya bor» degan gap pul yuborish uchun asos emas.",
        },
        {
          t: "h2",
          id: "chatda-gram-qanday-bahonalar-bilan",
          text: "Chatda Gram qanday bahonalar bilan so‘raladi?",
        },
        {
          t: "p",
          text: "Yangi funksiya haqidagi mish-mishdan firibgarlar foydalanadi: ko‘pchilik uni hali tushunmaydi, shuning uchun «hamma shunaqa qilyapti, tezroq yubor» degan gap ishonchli eshitiladi. Klan va squad chatlarida tez-tez uchraydigan holatlar:",
        },
        {
          t: "list",
          items: [
            "<strong>«Arzon UC» sotuvchisi.</strong> «Botsiz, to‘g‘ridan-to‘g‘ri Gram’da arzonroq beraman, username’imga tashla» deydi.",
            "<strong>«Premium ulab beraman» degan jamoadosh.</strong> Avval Gram so‘raydi, keyin Premium ulashga va’da beradi.",
            "<strong>Turnir badalini yig‘ayotgan «admin».</strong> Ishtirok to‘lovini faqat Gram’da, o‘zining shaxsiy username’iga so‘raydi.",
            "<strong>«Funksiyani sinab ko‘raylik» degan tanish.</strong> Avval kichik summa so‘raydi, keyin kattaroq summa so‘raydi.",
          ],
        },
        {
          t: "p",
          text: "Hammasida bitta naqsh bor: pul oldindan ketadi, tovarni oldindan tekshirib bo‘lmaydi, to‘lov uchun buyurtma ham, murojaat qiladigan yordam xizmati ham yo‘q. TON manzilga to‘lash nega xavfli ekani <a href=\"/blog/ton-manzilga-donat-tolovi-oyinchi-xavfi\">TON manzilga donat to‘lovi haqidagi maqolada</a> yozilgan. «Hamyonni faollashtirish uchun yubor» degan bahona esa <a href=\"/blog/gram-wallet-faollashtirish-oyinchiga-kerakmi\">GRAM Wallet faollashtirish haqidagi maqolada</a> tahlil qilingan.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "otkazma-haqidagi-xizmat-xabari-uc",
          text: "O‘tkazma haqidagi xizmat xabari UC kelganini bildiradimi?",
        },
        {
          t: "p",
          text: "Yo‘q. Bot API’da TON hamyoni bilan qilingan o‘tkazma chatda xizmat xabari bo‘lib ko‘rsatilishi yozilgan. Bunday xabar pul harakatlangani haqida xolos. UC Player ID’ingizga tushgani yoki Premium ulangani undan bilinmaydi.",
        },
        {
          t: "p",
          text: "Hujjatda xabar ichida TON blokcheynidagi manzilni ko‘rsatadigan alohida element ham tilga olingan. Manzil chiroyli blokda chiqsa ham, uning egasi kimligi va u halol ekani bundan bilinmaydi.",
        },
        {
          t: "note",
          tone: "info",
          text: "Sotuvchi «mana, sen yuborgan Gram keldi, UC yo‘lda» deb skrinshot tashlashi mumkin. Rasm qalbaki bo‘lishi mumkin. UC, olmos va CP’ni o‘yin ichidagi balansdan, Stars’ni Telegram’dagi balansingizdan tekshiring.",
        },
        {
          t: "h2",
          id: "username-hamyon-manzili-va-player",
          text: "@username, hamyon manzili va Player ID: qaysi biri nimaga kerak?",
        },
        {
          t: "p",
          text: "Chatlarda bular ko‘pincha aralashtirib yuboriladi, lekin har birining vazifasi alohida:",
        },
        {
          t: "table",
          head: [
            "Ma’lumot",
            "Nima ekan",
            "Donatda o‘rni",
          ],
          rows: [
            [
              "Telegram @username",
              "Akkauntingizning ochiq nomi",
              "Stars va Premium uchun faqat shu kerak",
            ],
            [
              "TON hamyon manzili",
              "Blokcheyndagi uzun manzil",
              "Kerak emas",
            ],
            [
              "Fragment’da sotib olingan username",
              "Egaligi xaridda ishlatilgan TON hamyoniga o‘tadi",
              "Kerak emas",
            ],
            [
              "Player ID",
              "O‘yin akkauntining raqami",
              "UC, olmos va CP uchun faqat shu kerak",
            ],
          ],
        },
        {
          t: "p",
          text: "<a href=\"https://fragment.com/about\" target=\"_blank\" rel=\"noopener\">Fragment</a>da sotib olingan nom haqiqatan ham hamyonga bog‘liq. Masalan, <a href=\"https://fragment.com/username/resolved\" target=\"_blank\" rel=\"noopener\">@resolved</a> sahifasida uning TON Web 3.0 manzili resolved.t.me ekani yozilgan. Lekin bundan Telegram chatida istalgan username’ga Gram yuborsa bo‘ladi degan xulosa chiqmaydi. Sotuvchi «username hamyonga ulangan, ko‘rdingmi» deb aynan shu chalkashlikdan foydalanadi.",
        },
        {
          t: "h2",
          id: "ochiq-hamyon-klandagi-oyinchiga-qanday",
          text: "Ochiq hamyon klandagi o‘yinchiga qanday xavf tug‘diradi?",
        },
        {
          t: "p",
          text: "Ikki xizmatni bir-biridan ajratib qarang:",
        },
        {
          t: "list",
          items: [
            "<strong>Fragment</strong> hamyonni Telegram akkauntiga bog‘lashga imkon beradigan ma’lumotni saqlamasligini aytadi. Lekin Fragment’da taklif bergan hamyonni hamma ko‘radi.",
            "<strong>Telegram</strong>’da esa Bot API hujjatiga ko‘ra hamyon kartasi foydalanuvchining profil sahifasida ko‘rinadi.",
          ],
        },
        {
          t: "p",
          text: "Amalda bu shuni anglatadi: hamyon kartasi profilingizda tursa, klan chatidagi har kim uni ko‘radi va hamyoningiz sizniki ekanini biladi. Kriptoga qiziqishingizni bilgan firibgar sizga «yangi funksiya» bahonasi bilan yozishi osonlashadi. Kartani profilga chiqarish ixtiyoriymi yoki yo‘qmi, rasmiy manbada aytilmagan, bu maqolada tasdiqlanmagan.",
        },
        {
          t: "p",
          text: "Hamyon bo‘ladimi yoki yo‘qmi, akkauntni alohida himoyalang: ikki bosqichli tekshiruv parolini yoqing, kirish kodini hech kimga aytmang. To‘liq reja <a href=\"/blog/888-anonim-raqam-oyinchi-akkaunt-himoyasi\">akkauntni buzishdan himoyalash haqidagi maqolada</a> bor.",
        },
        {
          t: "h2",
          id: "jamoadosh-gram-sorasa-nima-qilish",
          text: "Jamoadosh Gram so‘rasa, nima qilish kerak: 5 qadam",
        },
        {
          t: "steps",
          items: [
            {
              title: "Shoshilmang",
              text: "Oldindan Gram yubormang. «Aksiya tugayapti», «hozir yubormasang, kech» degan gaplar bosim uchun aytiladi.",
            },
            {
              title: "So‘rayotgan odamni boshqa kanal orqali tekshiring",
              text: "Ovozli chatda gaplashing yoki o‘yindagi do‘stlar ro‘yxati orqali yozing. Tanish jamoadoshning Telegram akkaunti buzilgan bo‘lishi mumkin.",
            },
            {
              title: "Aslida nima kerakligini aniqlang",
              text: "UC, olmos yoki CP uchun Player ID kerak, Stars va Premium uchun esa @username.",
            },
            {
              title: "Kerakli narsani o‘zingiz so‘mda oling yoki jamoadoshga sovg‘a qiling",
              text: "<a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>da Stars bir buyurtmada 50 dan 10 000 tagacha olinadi, Premium esa 3, 6 yoki 12 oyga ulanadi. Sovg‘a uchun jamoadoshning @username’i yetadi.",
            },
            {
              title: "Shubhali akkauntga shikoyat qiling",
              text: "Klan adminini ogohlantiring, kod, parol va hamyonning maxfiy so‘zlarini hech kimga bermang. Shikoyat qilinganda nima bo‘lishi <a href=\"/blog/klan-chatida-shubhali-havola-spam-cheklov\">shubhali havola va spam cheklovi haqidagi maqolada</a> yozilgan.",
            },
          ],
        },
        {
          t: "h2",
          id: "donatni-gramsiz-somda-qanday-olasiz",
          text: "Donatni Gram’siz, so‘mda qanday olasiz?",
        },
        {
          t: "p",
          text: "GemPay’da hamma narsa mahalliy to‘lov bilan, so‘mda olinadi:",
        },
        {
          t: "table",
          head: [
            "Tovar",
            "So‘raladigan ma’lumot",
            "Narx",
            "Tushish vaqti",
          ],
          rows: [
            [
              "PUBG Mobile UC, Mobile Legends va Free Fire olmosi, CODM CP",
              "Player ID",
              "Botda ko‘rsatiladi",
              "1–5 daqiqa, avtomatik",
            ],
            [
              "Telegram Stars",
              "@username",
              `1 dona: karta o‘tkazmasi yoki balansdan ${som(STARS_UNIT_CARD, "uz")}, Click yoki Uzum Bank orqali ${som(STARS_UNIT_ONLINE, "uz")}`,
              "Bir necha soniya",
            ],
            [
              "Telegram Premium",
              "@username",
              `3 oy ${som(premium(3), "uz")}, 6 oy ${som(premium(6), "uz")}, 12 oy ${som(premium(12), "uz")}`,
              "Bir necha soniya",
            ],
          ],
        },
        {
          t: "p",
          text: "Bilib qo‘ying:",
        },
        {
          t: "list",
          items: [
            "O‘yin donatida bot avval nikni tekshirib ko‘rsatadi, to‘lov siz uni tasdiqlaganingizdan keyin qilinadi. Parol hech qachon so‘ralmaydi.",
            "Premium Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi, akkauntga kirilmaydi. 1 oylik tarif yo‘q, narx har qanday to‘lov usulida bir xil.",
            "Stars’ni o‘yin valyutasiga aylantirib bo‘lmaydi. UC kerak bo‘lsa, UC buyurtma qilinadi.",
            "To‘lov UzCard, HUMO, Click, Uzum Bank yoki bot balansi orqali, Rossiyadan esa SBP orqali qilinadi. Visa va Mastercard qabul qilinmaydi, xorijiy karta, VPN yoki kripto kerak emas.",
            "Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi, lekin hisobga tushgan valyuta qaytarilmaydi. Muammo chiqsa, buyurtma raqamini yozib <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>ga murojaat qiling.",
          ],
        },
        {
          t: "p",
          text: "Chatdagi notanish odamga yuborilgan Gram uchun buyurtma ham, murojaat qiladigan joy ham bo‘lmaydi. O‘yinchiga hamyon umuman kerakmi degan savolga <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">Telegram Wallet haqidagi maqolada</a> javob berilgan.",
        },
        {
          t: "h2",
          id: "funksiya-haqiqatan-chiqsa-klanda-nima",
          text: "Funksiya haqiqatan chiqsa, klanda nima o‘zgaradi?",
        },
        {
          t: "p",
          text: "Username bo‘yicha o‘tkazma keyinchalik chiqishi mumkin. Unda ham bir nechta narsa o‘zgarmaydi:",
        },
        {
          t: "list",
          items: [
            "<strong>Dalil rasmiy manbadan bo‘lishi kerak.</strong> Yangilik telegram.org yoki core.telegram.org’da e’lon qilinadi. Kanal posti, skrinshot va «beta’da ko‘rdim» degan gap dalil bo‘lmaydi.",
            "<strong>Oldindan to‘lash xavfi qoladi.</strong> Username yozish uzun manzilni kiritishdan oson, xolos. Pulni olgan odam UC yoki Premium berishga baribir majbur bo‘lmaydi.",
            "<strong>Profilda nima ko‘rinishini o‘zingiz tekshiring.</strong> Ilovada hamyon kartasini kim ko‘rishi bo‘yicha sozlama bo‘lsa, kartani profilga chiqarishdan oldin shu sozlamani ko‘rib chiqing.",
            "<strong>Boshqa mish-mishlarni ham tekshiring.</strong> Profildagi balans tugmasi va QR-kod haqidagi gaplar <a href=\"/blog/telegram-beta-balans-qr-kod-oyinchi\">Telegram beta funksiyalari haqidagi maqolada</a> ko‘rib chiqilgan.",
          ],
        },
        {
          t: "sources",
          items: [
            {
              label: "Telegram Bot API",
              href: "https://core.telegram.org/bots/api",
            },
            {
              label: "How does Fragment work?",
              href: "https://fragment.com/about",
            },
            {
              label: "resolved (Fragment)",
              href: "https://fragment.com/username/resolved",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Sotuvchi «Gram yubor, UC darhol tushadi» desa, ishonsam bo‘ladimi?",
          a: "Yo‘q. Notanish odamga oldindan yuborilgan Gram UC’ning Player ID’ingizga tushishini ta’minlamaydi va bu to‘lov uchun pulni qaytaradigan buyurtma ham bo‘lmaydi. UC’ni Player ID bo‘yicha so‘mda olgan ma’qul.",
        },
        {
          q: "Jamoadosh username’imni bilsa, hamyonimga yoki akkauntimga kira oladimi?",
          a: "Username — hammaga ochiq nom, faqat uning o‘zi bilan hech qayerga kirib bo‘lmaydi. Xavf siz o‘zingiz bergan ma’lumotda: kirish kodi, ikki bosqichli tekshiruv paroli va hamyonning maxfiy so‘zlarini hech kimga aytmang.",
        },
        {
          q: "Jamoadoshimga Premium sovg‘a qilsam, u menga nima berishi kerak?",
          a: "Faqat @username’ini. Premium Telegram’ning sovg‘a mexanizmi orqali ulanadi, jamoadoshning hamyon manzili ham, akkauntiga kirish ham kerak emas.",
        },
        {
          q: "Gram yubordim, UC kelmadi. Pulni qaytarib olsa bo‘ladimi?",
          a: "Chatdagi notanish odamga yuborilgan pulni undirib beradigan joy yo‘q, hammasi uning insofiga qoladi. Akkauntga shikoyat qiling, klan adminini ogohlantiring va boshqa hech narsa yubormang.",
        },
        {
          q: "Klan admini turnir badalini Gram’da so‘rasa, nima qilay?",
          a: "Avval bu haqiqatan admin ekanini ovozli chat yoki o‘yindagi do‘stlar ro‘yxati orqali aniqlang, chunki akkaunt buzilgan bo‘lishi mumkin. Pulni kimningdir shaxsiy username’iga oldindan yuborish baribir xavfli.",
        },
        {
          q: "Telegram Stars bilan UC to‘lasam bo‘ladimi?",
          a: "Yo‘q, Stars o‘yin valyutasiga aylanmaydi. UC Player ID bo‘yicha alohida buyurtma qilinadi va so‘mda to‘lanadi.",
        },
      ],
    },
    ru: {
      title: "Перевод Gram по username: безопасно ли платить за UC в чате клана?",
      metaTitle: "Перевод Gram по username: безопасно ли платить за UC в чате",
      metaDescription: "Нет: перевод Gram по username официально не подтверждён, а Gram, отправленный заранее, не гарантирует UC. UC, Stars и Premium покупаются в сумах.",
      excerpt: "Нет: перевод Gram по username официально не подтверждён, а Gram, отправленный заранее, не гарантирует UC. UC, Stars и Premium покупаются в сумах.",
      answer: "Нет: перевод Gram по username официально не подтверждён, а Gram, отправленный заранее, не гарантирует UC. UC, Stars и Premium покупаются в сумах.",
      body: [
        {
          t: "p",
          text: "Официальные источники пока не подтверждают, что внутри Telegram можно отправить Gram по @username. Если в чате клана пишут: «Вышла новая функция, кинь Gram на мой username, UC придут сразу», — проверить это невозможно. А для покупки UC, Stars и Premium не нужны ни Gram, ни кошелёк.",
        },
        {
          t: "h2",
          id: "usernameimga-gram-tashla-degan-gapning",
          text: "Есть ли основания у фразы «кинь Gram на мой username»?",
        },
        {
          t: "p",
          text: "Эта история пошла из постов в Telegram-каналах. Там пишут, что в новой бета-версии якобы можно привязать кошелёк к аккаунту и отправлять деньги по username вместо длинного адреса. Пост в канале — не официальный источник. Объявлений о такой бете или о переводах по username на telegram.org не нашлось.",
        },
        {
          t: "p",
          text: "В официальной документации есть только изменения, связанные с тем, как кошелёк отображается в профиле. В версии 10.4 <a href=\"https://core.telegram.org/bots/api\" target=\"_blank\" rel=\"noopener\">Telegram Bot API</a>:",
        },
        {
          t: "list",
          items: [
            "для личных чатов добавлено поле с карточкой TON-кошелька, которая видна на странице профиля пользователя;",
            "добавлены классы TonWalletCard, TonWalletCardSticker, TonNft и TonNftAttribute;",
            "класс StoryAreaPosition переименован в AreaPosition, потому что теперь он описывает и расположение стикеров на карточках TON-кошельков.",
          ],
        },
        {
          t: "p",
          text: "Всё это касается того, как карточка выглядит и оформляется в профиле. Порядок отправки денег по username в этой статье не подтверждён. Вывод для игрока простой: слова «появилась новая функция» — не повод переводить деньги.",
        },
        {
          t: "h2",
          id: "chatda-gram-qanday-bahonalar-bilan",
          text: "Под какими предлогами в чате просят Gram?",
        },
        {
          t: "p",
          text: "Слухами о новой функции пользуются мошенники. Многие в ней ещё не разобрались, поэтому фраза «все так делают, скидывай быстрее» звучит убедительно. Вот что чаще всего встречается в чатах кланов и сквадов:",
        },
        {
          t: "list",
          items: [
            "<strong>Продавец «дешёвых UC».</strong> Говорит: «Без бота, напрямую за Gram выйдет дешевле, кидай на мой username».",
            "<strong>Тиммейт, который «подключит Premium».</strong> Сначала просит Gram, потом обещает подключить Premium.",
            "<strong>«Админ», который собирает взнос за турнир.</strong> Требует оплату участия только в Gram и только на свой личный username.",
            "<strong>Знакомый, который предлагает «протестировать функцию».</strong> Сначала просит небольшую сумму, потом сумму побольше.",
          ],
        },
        {
          t: "p",
          text: "Схема везде одна: деньги уходят вперёд, товар заранее не проверить, у оплаты нет ни заказа, ни поддержки, куда можно обратиться. Почему платить на TON-адрес опасно, разобрано в <a href=\"/blog/ton-manzilga-donat-tolovi-oyinchi-xavfi\">статье об оплате доната на TON-адрес</a>. Отговорка «отправь, чтобы активировать кошелёк» разобрана в <a href=\"/blog/gram-wallet-faollashtirish-oyinchiga-kerakmi\">статье об активации GRAM Wallet</a>.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "otkazma-haqidagi-xizmat-xabari-uc",
          text: "Значит ли служебное сообщение о переводе, что UC пришли?",
        },
        {
          t: "p",
          text: "Нет. В Bot API сказано, что перевод с TON-кошелька показывается в чате как служебное сообщение. Оно говорит только о том, что деньги куда-то ушли. Зачислены ли UC на ваш Player ID и подключён ли Premium, из него не узнать.",
        },
        {
          t: "p",
          text: "В документации упоминается и отдельный элемент, который показывает в сообщении адрес в блокчейне TON. Даже если адрес выведен красивым блоком, из этого не следует, кто его владелец и честен ли он.",
        },
        {
          t: "note",
          tone: "info",
          text: "Продавец может прислать скриншот: «Вот, твой Gram пришёл, UC уже в пути». Картинку легко подделать. UC, алмазы и CP проверяйте по балансу внутри игры, а Stars — по своему балансу в Telegram.",
        },
        {
          t: "h2",
          id: "username-hamyon-manzili-va-player",
          text: "@username, адрес кошелька и Player ID: что для чего нужно?",
        },
        {
          t: "p",
          text: "В чатах их часто путают, но у каждого своя задача:",
        },
        {
          t: "table",
          head: [
            "Данные",
            "Что это",
            "Роль в донате",
          ],
          rows: [
            [
              "@username в Telegram",
              "Публичное имя вашего аккаунта",
              "Для Stars и Premium нужен только он",
            ],
            [
              "Адрес TON-кошелька",
              "Длинный адрес в блокчейне",
              "Не нужен",
            ],
            [
              "Username, купленный на Fragment",
              "Право владения переходит к TON-кошельку, с которого его купили",
              "Не нужен",
            ],
            [
              "Player ID",
              "Номер игрового аккаунта",
              "Для UC, алмазов и CP нужен только он",
            ],
          ],
        },
        {
          t: "p",
          text: "Имя, купленное на <a href=\"https://fragment.com/about\" target=\"_blank\" rel=\"noopener\">Fragment</a>, действительно связано с кошельком. Например, на странице <a href=\"https://fragment.com/username/resolved\" target=\"_blank\" rel=\"noopener\">@resolved</a> указано, что его адрес TON Web 3.0 — resolved.t.me. Но из этого не следует, что в чате Telegram можно отправить Gram на любой username. Продавец, который говорит «username привязан к кошельку, видишь?», играет как раз на этой путанице.",
        },
        {
          t: "h2",
          id: "ochiq-hamyon-klandagi-oyinchiga-qanday",
          text: "Чем открытый кошелёк опасен для игрока в клане?",
        },
        {
          t: "p",
          text: "Не смешивайте два разных сервиса:",
        },
        {
          t: "list",
          items: [
            "<strong>Fragment</strong> заявляет, что не хранит данных, по которым кошелёк можно связать с аккаунтом Telegram. При этом кошелёк, сделавший ставку на Fragment, видят все.",
            "<strong>В Telegram</strong>, согласно документации Bot API, карточка кошелька видна на странице профиля пользователя.",
          ],
        },
        {
          t: "p",
          text: "На практике это значит: если карточка кошелька есть в вашем профиле, её видит любой участник чата клана и знает, что кошелёк ваш. Мошеннику, который понял, что вы интересуетесь криптой, проще написать вам под предлогом «новой функции». Добровольно ли показывать карточку в профиле, официальные источники не говорят — в этой статье это не подтверждено.",
        },
        {
          t: "p",
          text: "Есть у вас кошелёк или нет, аккаунт нужно защищать отдельно: включите пароль двухэтапной проверки и никому не называйте код входа. Полный план — в <a href=\"/blog/888-anonim-raqam-oyinchi-akkaunt-himoyasi\">статье о защите аккаунта от взлома</a>.",
        },
        {
          t: "h2",
          id: "jamoadosh-gram-sorasa-nima-qilish",
          text: "Тиммейт просит Gram: что делать, 5 шагов",
        },
        {
          t: "steps",
          items: [
            {
              title: "Не торопитесь",
              text: "Не отправляйте Gram заранее. Фразы «акция заканчивается», «не отправишь сейчас — будет поздно» нужны, чтобы надавить.",
            },
            {
              title: "Проверьте человека по другому каналу",
              text: "Поговорите в голосовом чате или напишите через список друзей в игре. Telegram-аккаунт знакомого тиммейта могли взломать.",
            },
            {
              title: "Выясните, что на самом деле нужно",
              text: "Для UC, алмазов или CP нужен Player ID, для Stars и Premium — @username.",
            },
            {
              title: "Купите нужное сами в сумах или подарите тиммейту",
              text: "В <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> Stars покупаются от 50 до 10 000 за один заказ, а Premium подключается на 3, 6 или 12 месяцев. Для подарка достаточно @username тиммейта.",
            },
            {
              title: "Пожалуйтесь на подозрительный аккаунт",
              text: "Предупредите админа клана и никому не сообщайте коды, пароли и секретные слова кошелька. Что происходит после жалобы, описано в <a href=\"/blog/klan-chatida-shubhali-havola-spam-cheklov\">статье о подозрительных ссылках и ограничениях за спам</a>.",
            },
          ],
        },
        {
          t: "h2",
          id: "donatni-gramsiz-somda-qanday-olasiz",
          text: "Как получить донат без Gram, в сумах?",
        },
        {
          t: "p",
          text: "В GemPay всё покупается в сумах, местными способами оплаты:",
        },
        {
          t: "table",
          head: [
            "Товар",
            "Что нужно указать",
            "Цена",
            "Сроки зачисления",
          ],
          rows: [
            [
              "UC в PUBG Mobile, алмазы Mobile Legends и Free Fire, CP в CODM",
              "Player ID",
              "Указана в боте",
              "1–5 минут, автоматически",
            ],
            [
              "Telegram Stars",
              "@username",
              `За 1 штуку: переводом с карты или с баланса ${som(STARS_UNIT_CARD, "ru")}, через Click или Uzum Bank ${som(STARS_UNIT_ONLINE, "ru")}`,
              "Несколько секунд",
            ],
            [
              "Telegram Premium",
              "@username",
              `3 месяца ${som(premium(3), "ru")}, 6 месяцев ${som(premium(6), "ru")}, 12 месяцев ${som(premium(12), "ru")}`,
              "Несколько секунд",
            ],
          ],
        },
        {
          t: "p",
          text: "Что важно знать:",
        },
        {
          t: "list",
          items: [
            "В игровом донате бот сначала проверяет и показывает ник, а оплата проходит только после вашего подтверждения. Пароль не спрашивают никогда.",
            "Premium подключается через официальный механизм подарков Telegram, входить в аккаунт не нужно. Тарифа на 1 месяц нет, цена одинакова при любом способе оплаты.",
            "Stars нельзя превратить в игровую валюту. Нужны UC — заказываете UC.",
            "Оплата — через UzCard, HUMO, Click, Uzum Bank или баланс бота, из России — через СБП. Visa и Mastercard не принимаются, иностранная карта, VPN или крипта не нужны.",
            "Если заказ не выполнен, деньги полностью возвращаются в течение 3 рабочих дней, но уже зачисленная валюта не возвращается. Если возникла проблема, напишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> и укажите номер заказа.",
          ],
        },
        {
          t: "p",
          text: "У Gram, отправленного незнакомцу из чата, нет ни заказа, ни места, куда можно обратиться. Нужен ли игроку кошелёк вообще, разобрано в <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">статье о Telegram Wallet</a>.",
        },
        {
          t: "h2",
          id: "funksiya-haqiqatan-chiqsa-klanda-nima",
          text: "Что изменится в клане, если функция всё-таки выйдет?",
        },
        {
          t: "p",
          text: "Перевод по username может появиться позже. Но и тогда кое-что останется прежним:",
        },
        {
          t: "list",
          items: [
            "<strong>Подтверждение должно быть из официального источника.</strong> Новости публикуются на telegram.org или core.telegram.org. Пост в канале, скриншот и «я видел в бете» доказательством не считаются.",
            "<strong>Риск предоплаты никуда не денется.</strong> Ввести username проще, чем длинный адрес, — и только. Получив деньги, человек всё равно не обязан отдавать UC или Premium.",
            "<strong>Проверьте сами, что видно в профиле.</strong> Если в приложении есть настройка, кто видит карточку кошелька, посмотрите её до того, как выводить карточку в профиль.",
            "<strong>Проверяйте и другие слухи.</strong> Разговоры о кнопке баланса в профиле и QR-коде разобраны в <a href=\"/blog/telegram-beta-balans-qr-kod-oyinchi\">статье о функциях беты Telegram</a>.",
          ],
        },
        {
          t: "sources",
          items: [
            {
              label: "Telegram Bot API",
              href: "https://core.telegram.org/bots/api",
            },
            {
              label: "How does Fragment work?",
              href: "https://fragment.com/about",
            },
            {
              label: "resolved (Fragment)",
              href: "https://fragment.com/username/resolved",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Продавец говорит: «Скинь Gram, UC придут сразу». Можно ему верить?",
          a: "Нет. Gram, заранее отправленный незнакомцу, не гарантирует, что UC поступят на ваш Player ID, и заказа, по которому вернули бы деньги, у такой оплаты нет. Надёжнее купить UC по Player ID в сумах.",
        },
        {
          q: "Если тиммейт знает мой username, он сможет зайти в мой кошелёк или аккаунт?",
          a: "Username — публичное имя, по нему одному никуда не войти. Опасны только данные, которые вы отдадите сами: никому не называйте код входа, пароль двухэтапной проверки и секретные слова кошелька.",
        },
        {
          q: "Хочу подарить тиммейту Premium. Что он должен мне сообщить?",
          a: "Только свой @username. Premium подключается через механизм подарков Telegram, поэтому ни адрес кошелька тиммейта, ни вход в его аккаунт не нужны.",
        },
        {
          q: "Я отправил Gram, а UC не пришли. Можно вернуть деньги?",
          a: "Деньги, отправленные незнакомцу из чата, взыскать негде: всё зависит от его честности. Пожалуйтесь на аккаунт, предупредите админа клана и больше ничего не отправляйте.",
        },
        {
          q: "Админ клана просит оплатить взнос за турнир в Gram. Как быть?",
          a: "Сначала убедитесь через голосовой чат или список друзей в игре, что это действительно админ: его аккаунт могли взломать. Отправлять деньги заранее на чей-то личный username рискованно в любом случае.",
        },
        {
          q: "Можно ли оплатить UC звёздами Telegram Stars?",
          a: "Нет, Stars не превращаются в игровую валюту. UC заказываются отдельно по Player ID и оплачиваются в сумах.",
        },
      ],
    },
  },
};

export default article;
