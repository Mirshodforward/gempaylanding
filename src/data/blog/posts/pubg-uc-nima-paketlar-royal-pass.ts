// PUBG Mobile klasteri — info maqola. Reja: .plan/articles/pubg-uc-nima-paketlar-royal-pass.json
// (publishRank 19). Yozildi: 2026-10-27, qo'lda, uz + ru. Ikki mavjud maqola shu slug'ga havola beradi.
//
// FAKTLAR: UC zinapoyasi 60 / 325 / 660 / 1800 / 3850 / 8100 (brief va gameContent.ts
// bilan bir xil; asosiy+bonus bo'linishi «odatda» deb yoziladi). Royale Pass UC
// narxi mavsumga qarab o'zgaradi — faqat oraliq va «o'yin ichida ko'ring» shaklida.
// WOW Coins — alohida mahsulot. NARX YO'Q: so'm, dollar, kurs yozilmaydi.

import type { Article } from "../types";

const article: Article = {
  slug: "pubg-uc-nima-paketlar-royal-pass",
  game: "pubg-mobile",
  type: "info",
  datePublished: "2026-10-27",
  dateModified: "2026-10-27",
  pillar: false,
  keywords: [
    "pubg uc nima",
    "pubg mobile uc paketlari",
    "royal pass necha uc",
    "pubg elite pass nima",
    "bonus uc qanday ishlaydi",
    "wow coins nima pubg",
    "pubg uc bilan nima olish mumkin",
    "что такое uc в pubg mobile",
  ],
  locales: {
    uz: {
      title: "UC nima va PUBG Mobile'da unga nima sotib olish mumkin: paketlar va Royale Pass",
      metaTitle: "UC nima? PUBG Mobile UC paketlari va Royale Pass",
      metaDescription:
        "UC — PUBG Mobile valyutasi: qaysi paketlar bor, bonus UC qanday ishlaydi, Royale Pass uchun qancha UC kerak, WOW Coins nima va so'mdagi narx nimaga bog'liq.",
      excerpt:
        "Xariddan oldin o'qiladigan sahifa: UC nimaga ketadi, 60 dan 8100 gacha paketlar nimaga yetadi, Royale " +
        "Pass darajalari, UC bilan adashtiriladigan boshqa valyutalar va qaysi paketni tanlash.",
      answer:
        "UC (Unknown Cash) — PUBG Mobile'ning ichki valyutasi: Royale Pass, kostyum va qurol skinlari, sandiqlar, " +
        "Rename Card va emote shu valyuta bilan olinadi. Asosiy paketlar 60, 325, 660, 1800, 3850 va 8100 UC; katta " +
        "paketga bonus UC qo'shiladi. UC akkauntga bog'lanadi, boshqa o'yinchiga o'tkazilmaydi, to'ldirish esa ochiq " +
        "Player ID orqali bo'ladi. So'mdagi narx kursga bog'liq va botda ko'rsatiladi.",
      body: [
        {
          t: "p",
          text:
            "PUBG Mobile'da deyarli hamma narsa UC bilan o'lchanadi, lekin yangi o'yinchi uchun bu valyuta chalkash: paket nomidagi raqam nimani bildiradi, bonus qayerdan keladi, Royale Pass uchun qancha yig'ish kerak, WOW Coins bilan farqi nima. Bu maqola xariddan oldin o'qiladigan sahifa. To'ldirishning o'zi, ya'ni ID, nik tekshiruvi va to'lov, <a href=\"/blog/pubg-mobile-uc-sotib-olish\">UC sotib olish qo'llanmasida</a>, shartlar <a href=\"/oyinlar/pubg-mobile\">PUBG Mobile sahifasida</a>.",
        },

        { t: "h2", id: "uc-nima", text: "UC nima va u qanday ishlaydi" },
        {
          t: "p",
          text:
            "UC — Unknown Cash qisqartmasi, PUBG Mobile'ning rasmiy pullik valyutasi. U haqiqiy pulga olinadi va faqat o'yin ichida sarflanadi: do'kon, Royale Pass, sandiqlar va tadbirlar UC so'raydi. Ikkinchi valyuta, Silver, o'ynab topiladi va faqat cheklangan buyumlarga yetadi — eng qiziq narsalar aynan UC ga sotiladi.",
        },
        {
          t: "facts",
          items: [
            { k: "To'liq nomi", v: "Unknown Cash — o'yin ichidagi pullik valyuta" },
            { k: "Qayerda ishlaydi", v: "Faqat PUBG Mobile ichida; boshqa o'yin yoki platformaga o'tmaydi" },
            { k: "Kimga bog'langan", v: "Akkauntga, qurilmaga emas — telefon almashsa ham balans qoladi" },
            { k: "O'tkazish", v: "Boshqa o'yinchiga to'g'ridan-to'g'ri o'tkazib bo'lmaydi; do'stga uning Player ID siga to'ldirish mumkin" },
            { k: "Qanday to'ldiriladi", v: "Ochiq Player ID orqali — parol va akkauntga kirish kerak emas" },
          ],
        },

        { t: "h2", id: "nimaga-ketadi", text: "UC bilan nimalar sotib olinadi" },
        {
          t: "list",
          items: [
            "<strong>Royale Pass va uning Elite darajalari.</strong> Mavsumiy pass: bepul yo'nalish hammaga, Elite va Elite Plus UC ga. Daraja oshgani sari kostyum, qurol skini va boshqa mukofotlar ochiladi.",
            "<strong>Kostyum va qurol skinlari.</strong> Do'kondagi doimiy buyumlar; mavsumiy tadbir skinlari esa faqat tadbir davrida.",
            "<strong>Sandiqlar (crate) va aylanmalar.</strong> Classic va Premium sandiqlar, Lucky Spin, Mythic Forge — bu yerda UC «tasodifiy» mukofotga ketadi, shuning uchun byudjetni oldindan belgilang.",
            "<strong>Mashina skinlari va parashyut dizaynlari.</strong> Ko'pincha tadbir aylanmalari orqali.",
            "<strong>Rename Card.</strong> Niknemni bir marta o'zgartirish kartasi — UC ga olinadi.",
            "<strong>Emote, dance va do'stlarga sovg'alar.</strong> Ayrim buyumlarni o'yin ichida do'stga sovg'a qilish mumkin.",
          ],
        },
        {
          t: "p",
          text:
            "Ajratib olish kerak: doimiy buyum (skin, kostyum) bir marta olinadi va qoladi; mavsumiy narsa (Royale Pass) mavsum bilan tugaydi; aylanmalar esa natijasi oldindan noma'lum xarajat. Byudjetni rejalashtirganda shu uch toifa alohida hisoblanadi.",
        },

        { t: "h2", id: "paketlar", text: "UC paketlari: 60 dan 8100 gacha" },
        {
          t: "table",
          caption: "Standart zinapoya. Asosiy va bonus bo'linishi odatda shunday; aniq tarkib botda paket tanlanganda ko'rinadi.",
          head: ["Paket", "Odatda tarkibi", "Nimaga yetadi", "Kimga mos"],
          rows: [
            ["60 UC", "60, bonussiz", "Rename Card yoki bitta arzon emote", "Bir martalik kichik xarid"],
            ["325 UC", "300 + 25 bonus", "Bir nechta Classic sandiq yoki kichik skin", "Sinab ko'rayotganlar"],
            ["660 UC", "600 + 60 bonus", "Royale Pass Elite uchun ko'p mavsumlarda yetadi", "Eng ko'p olinadigan paket"],
            ["1800 UC", "1500 + 300 bonus", "Elite Plus yoki Elite + bir nechta sandiq", "Pass bilan birga skin olmoqchilar"],
            ["3850 UC", "3000 + 850 bonus", "Katta tadbir aylanmalari, bir nechta kostyum", "Mavsum davomida faol xarid qiluvchilar"],
            ["8100 UC", "6000 + 2100 bonus", "Mythic yoki X-Suit darajasidagi maqsadlar", "Bir UC uchun eng kam to'lov kerak bo'lganda"],
          ],
        },
        {
          t: "p",
          text:
            "Bonus UC — paketga qo'shib beriladigan qo'shimcha miqdor, u ham xuddi oddiy UC kabi balansga tushadi va hamma narsaga ishlaydi. Paket kattalashgani sayin bonus ulushi oshadi: 660 da taxminan o'ndan bir qism, 8100 da uchdan bir qismdan ko'proq. Shuning uchun bitta katta paket ikkita kichik paketdan ko'ra ko'proq UC beradi. Nashriyot zinapoyani aksiya va mavsumga qarab o'zgartirib turadi — botdagi joriy ro'yxat har doim ustun.",
        },

        { t: "h2", id: "royale-pass", text: "Royale Pass va Elite Pass: qancha UC kerak" },
        {
          t: "p",
          text:
            "Royale Pass (o'yin ichida Royale Pass, o'zbek o'yinchilari orasida «Royal Pass») — har mavsum yangilanadigan mukofotlar zinapoyasi. Bepul yo'nalish hammaga ochiq, lekin asosiy mukofotlar Elite yo'nalishida. Elite Pass odatda bir necha yuz UC turadi — ko'p mavsumlarda 600 dan 720 UC gacha oraliqda, Elite Plus esa taxminan uch barobar qimmat va evaziga bir nechta darajani darhol ochib beradi. Aniq raqam har mavsumda o'yin ichidagi Royale Pass oynasida turadi; xariddan oldin o'sha yerga qarang, maqoladagi oraliqqa emas.",
        },
        {
          t: "note",
          tone: "info",
          title: "Darajalarni oshirganda UC ning bir qismi qaytadi",
          text:
            "Royale Pass mukofotlari orasida UC ham bor: mavsumni oxirigacha o'ynagan Elite egasi sarflagan UC ning sezilarli qismini qaytarib oladi va keyingi passga yaqinlashadi. Bu passni hozirgi mavsumda ham, keyingisida ham arzonlashtiradi — lekin faqat darajalarni haqiqatan ochsangiz.",
        },

        { t: "h2", id: "boshqa-valyutalar", text: "WOW Coins, Silver va boshqa valyutalar — UC emas" },
        {
          t: "list",
          items: [
            "<strong>WOW Coins.</strong> World of Wonder rejimi uchun alohida valyuta; alohida mahsulot sifatida to'ldiriladi va UC o'rnini bosmaydi. UC kutayotgan bo'lsangiz, bu paketni tanlamang.",
            "<strong>Silver.</strong> O'ynab topiladigan bepul valyuta; faqat Silver do'konidagi cheklangan buyumlarga yetadi, UC ga aylanmaydi.",
            "<strong>AG (Ace Gold).</strong> Ayrim hududlarda tadbir vaucherlari va sandiqlardan tushadigan ikkinchi darajali valyuta; uni ham pulga sotib olib bo'lmaydi.",
            "<strong>Tadbir tokenlari va vaucherlar.</strong> Bitta tadbirga bog'langan, tadbir tugagach kuyadi.",
          ],
        },
        {
          t: "p",
          text:
            "Asosiy xabar: paket tanlashda nomga qarang. «UC» yozuvi bo'lmagan mahsulot UC bermaydi, va noto'g'ri mahsulotga ketgan to'lov qaytarilmaydi.",
        },

        { t: "h2", id: "narx", text: "So'mdagi narx nimaga bog'liq" },
        {
          t: "p",
          text:
            "UC ning bazaviy narxini nashriyot xalqaro valyutada belgilaydi. O'zbekistonda uni so'mda sotadigan xizmat narxi provayder tarifi orqali USDT kursiga bog'lanadi, shuning uchun so'mdagi raqam kun sayin siljiydi. Aynan shu sababli bu sahifada va GemPay'ning boshqa sahifalarida narx yozilmaydi: joriy summa botda, paket tanlaganingizda, to'lovdan oldin ko'rsatiladi va to'lov o'sha summada o'tadi. Narx qatlamlari batafsil <a href=\"/blog/oyin-valyutasi-qayerdan-arzon\">qayerdan arzon degan maqolada</a>, saytlarni solishtirish esa <a href=\"/blog/pubg-uc-qayerdan-sotib-olish-taqqoslash\">PUBG taqqoslovida</a>.",
        },

        { t: "h2", id: "qaysi-paket", text: "Qaysi paketni tanlash kerak" },
        {
          t: "list",
          ordered: true,
          items: [
            "<strong>Maqsadni aniqlang.</strong> Royale Pass mi, aniq bir skin mi yoki aylanma? Passga kerakli UC o'yin ichida yozilgan, skin narxi do'konda.",
            "<strong>Balansdagi UC ni hisobga oling.</strong> Yetishmayotgan miqdorni toping — butun summani emas.",
            "<strong>Bitta katta paket ikkita kichikdan foydali.</strong> Bonus ulushi katta paketda yuqori; lekin kerak bo'lmagan UC ni «zaxiraga» olishning hojati yo'q — u qaytarilmaydi.",
            "<strong>Mavsum boshini kuting.</strong> Royale Pass yangi mavsum bilan chiqadi; aksiya va bonus tadbirlari ham shu paytga to'g'ri keladi.",
            "<strong>Aylanma uchun chegara qo'ying.</strong> Sandiq va spin natijasi tasodifiy — «yana bitta» degan xarajat eng tez o'sadigan xarajat.",
          ],
        },
        { t: "cta", text: "Paketni tanladingizmi? Botda Player ID ni kiriting, nikni bepul tekshiring va so'mda to'lang — UC taxminan ikki daqiqada." },

        {
          t: "sources",
          items: [
            { label: "PUBG Mobile — rasmiy sayt", href: "https://www.pubgmobile.com/en-US/", note: "Royale Pass va mavsum yangiliklari" },
            { label: "Midasbuy — PUBG Mobile'ning rasmiy to'ldirish markazi", href: "https://www.midasbuy.com/midasbuy/uz/buy/pubgm", note: "UC paketlari zinapoyasi va bonus tuzilishi" },
          ],
        },
        {
          t: "links",
          title: "PUBG Mobile bo'yicha boshqa qo'llanmalar",
          items: [
            { label: "PUBG Mobile UC sotib olish — so'mda, 2 daqiqada", href: "/blog/pubg-mobile-uc-sotib-olish" },
            { label: "Player ID qayerda va uni berish xavfsizmi", href: "/blog/pubg-mobile-player-id-qayerda" },
            { label: "UC kelmadi yoki ID topilmadi", href: "/blog/pubg-uc-kelmadi-nima-qilish" },
            { label: "UC ni qayerdan olish: Midasbuy va boshqalar", href: "/blog/pubg-uc-qayerdan-sotib-olish-taqqoslash" },
            { label: "PUBG Mobile UC to'ldirish sahifasi", href: "/oyinlar/pubg-mobile" },
          ],
        },
      ],
      faq: [
        { q: "UC nima degani?", a: "Unknown Cash — PUBG Mobile'ning rasmiy ichki valyutasi. U faqat o'yin ichida ishlaydi: Royale Pass, skinlar, sandiqlar va Rename Card shu valyutaga olinadi." },
        { q: "Qanday UC paketlari bor?", a: "Standart zinapoya 60, 325, 660, 1800, 3850 va 8100 UC. 325 dan boshlab paketga bonus UC qo'shiladi va bonus ulushi katta paketda yuqoriroq. Joriy ro'yxat botda ko'rinadi." },
        { q: "Royale Pass necha UC turadi?", a: "Elite Pass ko'p mavsumlarda 600 dan 720 UC gacha, Elite Plus taxminan uch barobar. Aniq raqam mavsumga qarab o'zgaradi va o'yin ichidagi Royale Pass oynasida yoziladi — xariddan oldin o'sha yerga qarang." },
        { q: "Bonus UC oddiy UC dan farq qiladimi?", a: "Yo'q. Bonus ham o'sha balansga tushadi va hamma narsaga ishlaydi. Farq faqat shunda: u katta paketga qo'shib beriladi, shuning uchun bitta katta paket ikkita kichikdan ko'proq UC beradi." },
        { q: "UC ni do'stimga o'tkazsam bo'ladimi?", a: "Yo'q, UC akkauntga bog'langan. Lekin do'stingizning Player ID sini kiritib, to'ldirishni to'g'ridan-to'g'ri uning hisobiga qilish mumkin — bot uning nikini ko'rsatadi, tasdiqlaysiz." },
        { q: "WOW Coins UC bilan bir xilmi?", a: "Yo'q. WOW Coins World of Wonder rejimi uchun alohida valyuta va alohida mahsulot. UC kerak bo'lsa, nomida «UC» bo'lgan paketni tanlang." },
        { q: "UC narxi nega o'zgarib turadi?", a: "Bazaviy narx xalqaro valyutada, so'mdagi summa esa USDT kursiga bog'liq. Kurs siljisa summa ham siljiydi, shuning uchun saytda raqam yozilmaydi — joriy narx botda, to'lovdan oldin." },
        { q: "Bepul UC olish yo'li bormi?", a: "Rasmiy yo'llar cheklangan: tadbirlar, aksiyalar va Royale Pass mukofotlari orqali oz miqdorda. Internetdagi «UC generator» va «cheksiz UC» saytlari ishlamaydi va akkaunt ma'lumotini o'g'irlash uchun qilingan." },
      ],
    },

    ru: {
      title: "Что такое UC и что на них купить в PUBG Mobile: пакеты и Royale Pass",
      metaTitle: "Что такое UC? Пакеты UC в PUBG Mobile и Royale Pass",
      metaDescription:
        "UC — валюта PUBG Mobile: какие есть пакеты, как работают бонусные UC, сколько UC нужно на Royale Pass, что такое WOW Coins и от чего зависит цена в сумах.",
      excerpt:
        "Страница для чтения перед покупкой: на что уходят UC, на что хватает пакетов от 60 до 8100, уровни " +
        "Royale Pass, другие валюты, которые путают с UC, и какой пакет выбрать.",
      answer:
        "UC (Unknown Cash) — внутренняя валюта PUBG Mobile: на неё покупают Royale Pass, костюмы и скины оружия, " +
        "ящики, Rename Card и эмоции. Основные пакеты — 60, 325, 660, 1800, 3850 и 8100 UC; к крупным пакетам " +
        "добавляются бонусные UC. UC привязаны к аккаунту, другому игроку не передаются, а пополнение идёт по " +
        "открытому Player ID. Цена в сумах зависит от курса и показывается в боте.",
      body: [
        {
          t: "p",
          text:
            "В PUBG Mobile почти всё измеряется в UC, но новичка эта валюта сбивает с толку: что значит число в названии пакета, откуда берётся бонус, сколько копить на Royale Pass, чем отличаются WOW Coins. Эта статья — то, что читают перед покупкой. Само пополнение, то есть ID, проверка ника и оплата, — в <a href=\"/blog/pubg-mobile-uc-sotib-olish\">руководстве по покупке UC</a>, условия — на <a href=\"/oyinlar/pubg-mobile\">странице PUBG Mobile</a>.",
        },

        { t: "h2", id: "uc-nima", text: "Что такое UC и как они работают" },
        {
          t: "p",
          text:
            "UC — сокращение от Unknown Cash, официальная платная валюта PUBG Mobile. Она покупается за реальные деньги и тратится только внутри игры: магазин, Royale Pass, ящики и события просят UC. Вторая валюта, Silver, зарабатывается в игре и хватает лишь на ограниченный набор предметов — всё самое интересное продаётся именно за UC.",
        },
        {
          t: "facts",
          items: [
            { k: "Полное название", v: "Unknown Cash — платная внутриигровая валюта" },
            { k: "Где работает", v: "Только внутри PUBG Mobile; в другие игры и платформы не переносится" },
            { k: "К чему привязана", v: "К аккаунту, а не к устройству — при смене телефона баланс остаётся" },
            { k: "Передача", v: "Напрямую другому игроку не передаётся; можно пополнить друга по его Player ID" },
            { k: "Как пополняется", v: "По открытому Player ID — пароль и вход в аккаунт не нужны" },
          ],
        },

        { t: "h2", id: "nimaga-ketadi", text: "Что покупают за UC" },
        {
          t: "list",
          items: [
            "<strong>Royale Pass и его уровни Elite.</strong> Сезонный пропуск: бесплатная ветка всем, Elite и Elite Plus за UC. С ростом уровня открываются костюмы, скины оружия и другие награды.",
            "<strong>Костюмы и скины оружия.</strong> Постоянные предметы в магазине; сезонные скины событий — только пока идёт событие.",
            "<strong>Ящики (crate) и рулетки.</strong> Classic и Premium ящики, Lucky Spin, Mythic Forge — здесь UC уходят на случайную награду, поэтому заранее задайте бюджет.",
            "<strong>Скины машин и парашютов.</strong> Чаще через рулетки событий.",
            "<strong>Rename Card.</strong> Карта однократной смены ника — покупается за UC.",
            "<strong>Эмоции, танцы и подарки друзьям.</strong> Часть предметов можно подарить другу внутри игры.",
          ],
        },
        {
          t: "p",
          text:
            "Стоит различать: постоянный предмет (скин, костюм) покупается один раз и остаётся; сезонное (Royale Pass) заканчивается с сезоном; рулетки — расход с заранее неизвестным результатом. При планировании бюджета эти три категории считают отдельно.",
        },

        { t: "h2", id: "paketlar", text: "Пакеты UC: от 60 до 8100" },
        {
          t: "table",
          caption: "Стандартная лестница. Деление на основу и бонус обычно такое; точный состав виден в боте при выборе пакета.",
          head: ["Пакет", "Обычный состав", "На что хватает", "Кому подходит"],
          rows: [
            ["60 UC", "60, без бонуса", "Rename Card или одна недорогая эмоция", "Разовая мелкая покупка"],
            ["325 UC", "300 + 25 бонус", "Несколько Classic-ящиков или небольшой скин", "Тем, кто пробует"],
            ["660 UC", "600 + 60 бонус", "Во многих сезонах хватает на Royale Pass Elite", "Самый популярный пакет"],
            ["1800 UC", "1500 + 300 бонус", "Elite Plus или Elite плюс несколько ящиков", "Тем, кто берёт скин вместе с пропуском"],
            ["3850 UC", "3000 + 850 бонус", "Крупные рулетки событий, несколько костюмов", "Активным покупателям в течение сезона"],
            ["8100 UC", "6000 + 2100 бонус", "Цели уровня Mythic или X-Suit", "Когда нужна минимальная цена за один UC"],
          ],
        },
        {
          t: "p",
          text:
            "Бонусные UC — добавка к пакету, которая зачисляется на тот же баланс и работает на всё. Чем больше пакет, тем выше доля бонуса: в 660 примерно десятая часть, в 8100 — больше трети. Поэтому один большой пакет даёт больше UC, чем два маленьких. Издатель меняет лестницу под акции и сезоны — актуальный список в боте всегда главнее.",
        },

        { t: "h2", id: "royale-pass", text: "Royale Pass и Elite Pass: сколько нужно UC" },
        {
          t: "p",
          text:
            "Royale Pass — лестница наград, обновляемая каждый сезон. Бесплатная ветка открыта всем, но основные награды лежат в ветке Elite. Elite Pass обычно стоит несколько сотен UC — во многих сезонах от 600 до 720 UC, Elite Plus примерно втрое дороже и взамен сразу открывает несколько уровней. Точная цифра каждого сезона показана в окне Royale Pass внутри игры; перед покупкой смотрите туда, а не на диапазон в статье.",
        },
        {
          t: "note",
          tone: "info",
          title: "Прокачивая уровни, часть UC возвращается",
          text:
            "Среди наград Royale Pass есть и UC: владелец Elite, доигравший сезон до конца, возвращает заметную часть потраченных UC и приближается к следующему пропуску. Это удешевляет пропуск и в текущем сезоне, и в следующем — но только если уровни действительно открыты.",
        },

        { t: "h2", id: "boshqa-valyutalar", text: "WOW Coins, Silver и другие валюты — это не UC" },
        {
          t: "list",
          items: [
            "<strong>WOW Coins.</strong> Отдельная валюта режима World of Wonder; пополняется как отдельный товар и UC не заменяет. Если ждёте UC, этот пакет не выбирайте.",
            "<strong>Silver.</strong> Бесплатная валюта, которую зарабатывают игрой; хватает только на ограниченные предметы Silver-магазина, в UC не превращается.",
            "<strong>AG (Ace Gold).</strong> В ряде регионов второстепенная валюта из ваучеров событий и ящиков; за деньги тоже не покупается.",
            "<strong>Жетоны и ваучеры событий.</strong> Привязаны к одному событию и сгорают после его окончания.",
          ],
        },
        {
          t: "p",
          text: "Главное: при выборе пакета смотрите на название. Товар без слова «UC» не даёт UC, а платёж за неверный товар не возвращается.",
        },

        { t: "h2", id: "narx", text: "От чего зависит цена в сумах" },
        {
          t: "p",
          text:
            "Базовую цену UC издатель задаёт в международной валюте. У сервиса, продающего UC за сумы в Узбекистане, цена привязана через тариф провайдера к курсу USDT, поэтому число в сумах сдвигается день ото дня. Именно поэтому на этой странице и на других страницах GemPay цена не пишется: текущая сумма показывается в боте при выборе пакета, до оплаты, и платёж проходит именно на неё. Слои цены подробно — в <a href=\"/blog/oyin-valyutasi-qayerdan-arzon\">статье о том, где дешевле</a>, сравнение сайтов — в <a href=\"/blog/pubg-uc-qayerdan-sotib-olish-taqqoslash\">сравнении для PUBG</a>.",
        },

        { t: "h2", id: "qaysi-paket", text: "Какой пакет выбрать" },
        {
          t: "list",
          ordered: true,
          items: [
            "<strong>Определите цель.</strong> Royale Pass, конкретный скин или рулетка? Нужные UC на пропуск указаны в игре, цена скина — в магазине.",
            "<strong>Учтите UC на балансе.</strong> Считайте недостающее количество, а не всю сумму.",
            "<strong>Один большой пакет выгоднее двух маленьких.</strong> Доля бонуса в большом пакете выше; но брать ненужные UC «про запас» незачем — они не возвращаются.",
            "<strong>Дождитесь начала сезона.</strong> Royale Pass выходит с новым сезоном; акции и бонусные события приходятся на то же время.",
            "<strong>Задайте лимит на рулетки.</strong> Результат ящика и спина случаен — расход «ещё разок» растёт быстрее всех.",
          ],
        },
        { t: "cta", text: "Выбрали пакет? Введите Player ID в боте, бесплатно проверьте ник и оплатите в сумах — UC примерно за две минуты." },

        {
          t: "sources",
          items: [
            { label: "PUBG Mobile — официальный сайт", href: "https://www.pubgmobile.com/en-US/", note: "Royale Pass и новости сезонов" },
            { label: "Midasbuy — официальный центр пополнения PUBG Mobile", href: "https://www.midasbuy.com/midasbuy/uz/buy/pubgm", note: "лестница пакетов UC и структура бонусов" },
          ],
        },
        {
          t: "links",
          title: "Другие руководства по PUBG Mobile",
          items: [
            { label: "Купить UC для PUBG Mobile — за сумы, за 2 минуты", href: "/blog/pubg-mobile-uc-sotib-olish" },
            { label: "Где Player ID и безопасно ли его сообщать", href: "/blog/pubg-mobile-player-id-qayerda" },
            { label: "UC не пришли или ID не найден", href: "/blog/pubg-uc-kelmadi-nima-qilish" },
            { label: "Где купить UC: Midasbuy и другие", href: "/blog/pubg-uc-qayerdan-sotib-olish-taqqoslash" },
            { label: "Страница пополнения UC в PUBG Mobile", href: "/oyinlar/pubg-mobile" },
          ],
        },
      ],
      faq: [
        { q: "Что значит UC?", a: "Unknown Cash — официальная внутренняя валюта PUBG Mobile. Работает только в игре: Royale Pass, скины, ящики и Rename Card покупаются за неё." },
        { q: "Какие есть пакеты UC?", a: "Стандартная лестница — 60, 325, 660, 1800, 3850 и 8100 UC. Начиная с 325 к пакету добавляются бонусные UC, и их доля выше в больших пакетах. Актуальный список виден в боте." },
        { q: "Сколько UC стоит Royale Pass?", a: "Elite Pass во многих сезонах — от 600 до 720 UC, Elite Plus примерно втрое больше. Точная цифра меняется по сезонам и указана в окне Royale Pass в игре — смотрите туда перед покупкой." },
        { q: "Бонусные UC отличаются от обычных?", a: "Нет. Бонус зачисляется на тот же баланс и работает на всё. Разница лишь в том, что он добавляется к большим пакетам, поэтому один большой пакет даёт больше UC, чем два маленьких." },
        { q: "Можно передать UC другу?", a: "Нет, UC привязаны к аккаунту. Но можно ввести Player ID друга и пополнить напрямую его аккаунт — бот покажет его ник, вы подтвердите." },
        { q: "WOW Coins — это то же, что UC?", a: "Нет. WOW Coins — отдельная валюта режима World of Wonder и отдельный товар. Если нужны UC, выбирайте пакет со словом «UC» в названии." },
        { q: "Почему цена UC постоянно меняется?", a: "Базовая цена в международной валюте, а сумма в сумах привязана к курсу USDT. Сдвигается курс — сдвигается и сумма, поэтому на сайте цифра не пишется: текущая цена в боте, до оплаты." },
        { q: "Есть способ получить UC бесплатно?", a: "Официальные способы ограничены: понемногу через события, акции и награды Royale Pass. Сайты «генератор UC» и «бесконечные UC» не работают и созданы для кражи данных аккаунта." },
      ],
    },
  },
};

export default article;
