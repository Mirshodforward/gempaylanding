// Mobile Legends klasteri — info maqola. Reja: .plan/articles/mobile-legends-olmos-nima-va-paketlar.json
// (publishRank 18). Yozildi: 2026-10-27, qo'lda, uz + ru. Uchta mavjud maqola shu slug'ga havola beradi.
//
// FAKTLAR: paket zinapoyasi 86 / 172 / 257 / 344 / 429 / 514 / 706 va yuqori (gameContent.ts
// bilan bir xil; asosiy+bonus «odatda»); birinchi xarid bonusi Moonton tomonidan;
// Starlight — oylik a'zolik, Weekly Diamond Pass — bir qism darhol, qolgani kunlik
// kirishda; Battle Point va Ticket bepul valyutalar. Miqdorlar ehtiyot bilan, raqamli
// narx yo'q. NARX YO'Q.

import type { Article } from "../types";

const article: Article = {
  slug: "mobile-legends-olmos-nima-va-paketlar",
  game: "mobile-legends",
  type: "info",
  datePublished: "2026-10-27",
  dateModified: "2026-10-27",
  pillar: false,
  keywords: [
    "mobile legends olmos nima",
    "mobile legends olmos paketlari",
    "mobile legends starlight nima",
    "weekly diamond pass nima",
    "mobile legends olmosga nima olish mumkin",
    "mobile legends bonus olmos",
    "mobile legends bepul olmos",
    "алмазы mobile legends что это",
  ],
  locales: {
    uz: {
      title: "Mobile Legends olmos nima, unga nima sotib olinadi va paketlar qanday tuzilgan",
      metaTitle: "Mobile Legends olmos nima va qanday paketlar bor",
      metaDescription:
        "Mobile Legends olmos nima, unga nima olinadi, paketlar qanday tuzilgan, birinchi xarid bonusi, Starlight va Weekly Diamond Pass farqi, narx nimaga bog'liq.",
      excerpt:
        "Olmos, Battle Point va Ticket farqi, olmosga nima sotiladi, 86 dan yuqoriga paket zinapoyasi, ikki " +
        "barobar bonus qachon ishlaydi, Starlight va Weekly Diamond Pass kimga mos va bepul olmos haqida haqiqat.",
      answer:
        "Olmos — Mobile Legends'ning asosiy pullik valyutasi: skinlar, yangi qahramonlar, Magic Wheel va Lucky " +
        "Box aylantirishlari, Starlight a'zoligi va Weekly Diamond Pass unga olinadi. Paketlar kichikdan kattaga " +
        "zinapoya bo'lib keladi va ko'piga bonus olmos qo'shiladi; birinchi xaridda Moonton ikki barobar bonus " +
        "beradi. Olmos akkauntga bog'lanadi va o'tkazilmaydi. So'mdagi summa kursga qarab o'zgaradi, joriy narxni bot ko'rsatadi.",
      body: [
        {
          t: "p",
          text:
            "Mobile Legends'da uch xil «pul» bor va yangi o'yinchi ularni aralashtiradi: Battle Point bilan qahramon ochiladi, Ticket bilan ayrim buyumlar, olmos bilan esa eng qiziq narsalar — skinlar, Starlight, aylanmalar. Bu maqola olmos haqida: unga nima sotiladi, paketlar qanday tuzilgan va qaysi obunani qachon olish ma'noli. To'ldirishning o'zi <a href=\"/blog/mobile-legends-olmos-sotib-olish\">olmos sotib olish qo'llanmasida</a>, shartlar <a href=\"/oyinlar/mobile-legends\">Mobile Legends sahifasida</a>.",
        },

        { t: "h2", id: "olmos-nima", text: "Olmos nima va Battle Point'dan farqi" },
        {
          t: "facts",
          items: [
            { k: "Olmos (Diamond)", v: "Pullik valyuta: haqiqiy pulga olinadi, skin va obunalarga ketadi" },
            { k: "Battle Point (BP)", v: "Bepul: matchlardan tushadi, qahramon ochishga ketadi, skinga yetmaydi" },
            { k: "Ticket", v: "Bepul: tadbir va Lucky Box dan tushadi, cheklangan buyumlarga" },
            { k: "Kimga bog'langan", v: "Olmos akkauntga (User ID + Server ID), qurilmaga emas" },
            { k: "O'tkazish", v: "Boshqa akkauntga o'tkazilmaydi; do'stga uning ID siga to'ldirish yoki o'yin ichida skin sovg'a qilish mumkin" },
          ],
        },
        {
          t: "p",
          text:
            "Nega eng qiziq narsalar aynan olmosga: Moonton bepul valyutalar bilan o'yinning asosini — qahramonlarni — hammaga ochib beradi, ko'rinish va imtiyozlarni esa olmos ortida qoldiradi. Skin o'yinga kuch bermaydi, lekin kollektsiya va ko'rinish uchun aynan u olinadi.",
        },

        { t: "h2", id: "nimaga", text: "Olmosga nima sotib olish mumkin" },
        {
          t: "list",
          items: [
            "<strong>Skinlar.</strong> Elite, Special, Epic va Legend darajalari — narxi daraja bilan o'sadi. Eng qimmatlari to'g'ridan-to'g'ri sotilmaydi, Magic Wheel yoki tadbir orqali chiqadi.",
            "<strong>Yangi qahramonlar.</strong> Chiqqan zahoti olmosga, bir necha haftadan keyin Battle Point'ga ham. Shoshmasangiz, olmos sarflamasdan ochasiz.",
            "<strong>Magic Wheel va Lucky Box.</strong> Aylantirish natijasi tasodifiy; Magic Wheel'da ma'lum aylanishdan keyin Legend skin kafolati bor, lekin bu ko'p olmos.",
            "<strong>Starlight a'zoligi.</strong> Oylik: eksklyuziv skin, bosqichli mukofotlar va Starlight fragment do'koni.",
            "<strong>Weekly Diamond Pass va Twilight Pass.</strong> Olmosni yoki mukofotlarni kunlar davomida beradigan obunalar.",
            "<strong>Nick o'zgartirish kartasi, emote, recall va eliminatsiya effektlari.</strong> Profilni bezaydigan mayda buyumlar.",
          ],
        },
        {
          t: "p",
          text:
            "Bepul yo'l bilan ham olinadigan narsalar: qahramonlar (BP bilan), ayrim oddiy skinlar (tadbir va fragment do'koni), Lucky Box mukofotlari. Faqat olmosga: Starlight, Epic va Legend skinlar, Magic Wheel, obunalar.",
        },

        { t: "h2", id: "paketlar", text: "Olmos paketlari qanday tuzilgan" },
        {
          t: "table",
          caption: "Odatiy zinapoya. Har paket asosiy va bonus qismdan iborat; joriy ro'yxat va tarkib botda.",
          head: ["Paket", "Odatda tarkibi", "Nimaga yetadi"],
          rows: [
            ["86 olmos", "78 + 8", "Nick kartasi, Weekly Diamond Pass yoki bitta Elite skinning bir qismi"],
            ["172 olmos", "156 + 16", "Oddiy Elite skin"],
            ["257 olmos", "234 + 23", "Special skin yoki Starlight a'zoligi"],
            ["344 olmos", "312 + 32", "Special skin va Weekly Diamond Pass"],
            ["429 olmos", "390 + 39", "Epic skinga yaqin"],
            ["514 olmos", "468 + 46", "Epic skin"],
            ["706 olmos", "625 + 81", "Epic skin va qo'shimcha xaridlar"],
            ["Undan yuqori", "Asosiy + kattaroq bonus", "Magic Wheel seriyasi, bir nechta skin, tadbirlar"],
          ],
        },
        {
          t: "p",
          text:
            "Birinchi xarid bonusi alohida mexanizm: Moonton har paket darajasi uchun birinchi marta sotib olganda bonusni ikki barobar qiladi, va bu bonus akkauntga bir martalik. Uni o'yin ichidagi Recharge oynasidan tekshirish mumkin: ikki barobar belgisi turgan paketni oling, chunki aynan o'sha paket bir olmosga eng arzon tushadi. GemPay bu bonusga ta'sir qilmaydi — u nashriyotniki va qaysi yo'l bilan to'ldirsangiz ham ishlaydi.",
        },

        { t: "h2", id: "starlight-wdp", text: "Starlight va Weekly Diamond Pass: qaysi biri kimga" },
        {
          t: "table",
          caption: "Ikkala mahsulot ham olmos miqdori emas, muddat sotadi.",
          head: ["Mahsulot", "Muddati", "Nima beradi", "Kunlik kirish kerakmi", "Kimga mos"],
          rows: [
            ["Starlight", "Kalendar oyi", "Eksklyuziv skin, bosqichli mukofotlar, Starlight fragment do'koni", "Yo'q, lekin topshiriqlar bor", "Har oy skin yig'adiganlarga"],
            ["Starlight Plus", "Kalendar oyi", "Starlight + qo'shimcha Starlight darajalari va mukofotlar", "Yo'q", "Mukofotlarni tezroq olmoqchi bo'lganlarga"],
            ["Weekly Diamond Pass", "7 kun", "Bir qism olmos darhol, qolgani har kuni kirishda", "Ha, har kuni", "Har kuni o'ynaydiganlarga — olmos yig'ishning eng arzon yo'li"],
            ["Twilight Pass", "Cheklangan davr", "Topshiriqlar orqali ochiladigan mukofotlar treki", "Topshiriqlar", "Davr davomida faol o'ynaydiganlarga"],
          ],
        },
        {
          t: "note",
          tone: "warn",
          title: "Starlight'ni oy oxirida olmang",
          text:
            "Starlight kalendar oyiga bog'langan: qaysi kuni olsangiz ham, u oy tugashi bilan yopiladi. Oyning oxirgi kunlarida olsangiz, skin qo'lingizda qoladi, lekin haftalik topshiriqlar va daraja mukofotlarining ko'pini yig'ib ulgurmaysiz. Oy boshida oling.",
        },
        {
          t: "p",
          text:
            "Weekly Diamond Pass'ning mantiqi teskari: u olmosni bir yo'la emas, kunlik kirishda beradi. Har kuni kirmasangiz, o'sha kunning olmosi kuyadi — shuning uchun u faqat har kuni o'ynaydiganlarga foydali. Ikkalasini bir vaqtda ushlab turish mumkin, ular bir-biriga xalaqit bermaydi.",
        },

        { t: "h2", id: "narx", text: "Narx nimaga bog'liq" },
        {
          t: "p",
          text:
            "Olmosning bazaviy narxi Moonton'da, so'mdagi summa esa provayder tarifi va USDT kursi orqali keladi — kurs siljisa summa ham siljiydi, shuning uchun saytda raqam yozilmaydi. Yana ikki narsa: katta paketda bir olmosning tannarxi pastroq, va onlayn to'lov tizimi komissiyasi yakuniy summaga qo'shilishi mumkin. Joriy narx botda, paket tanlaganingizda, to'lovdan oldin ko'rsatiladi. Usullarni solishtirish — <a href=\"/blog/mobile-legends-olmos-arzon-qayerdan-olish\">qayerdan arzon olish maqolasida</a>.",
        },

        { t: "h2", id: "bepul-olmos", text: "Bepul olmos: nima haqiqat, nima aldov" },
        {
          t: "p",
          text:
            "Rasmiy bepul manbalar bor, lekin kam: tadbirlar, kirish mukofotlari, Lucky Box, ba'zan tadbir kodlari. Ular bilan Starlight yig'ilmaydi. «Olmos generatori», mod APK va «olmos hack» saytlari esa olmos bermaydi: balans Moonton serverida saqlanadi va tashqi sayt unga yoza olmaydi. Bunday sahifalar akkaunt ma'lumotini oladi yoki telefonga zararli dastur o'rnatadi, mod ilovalar esa akkaunt blokiga olib boradi. Umumiy qoida <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">xavfsiz to'ldirish qo'llanmasida</a>.",
        },

        { t: "h2", id: "botda", text: "Paketlarni botda ko'ring" },
        {
          t: "p",
          text:
            "Joriy paketlar, birinchi xarid belgisi va so'mdagi narx <a href=\"https://t.me/Gempayuz_bot\">@Gempayuz_bot</a> da Mobile Legends'ni tanlaganingizda ko'rinadi. User ID va Server ID kiritasiz, bot nikingizni bepul ko'rsatadi, tasdiqlagach so'mda to'laysiz — olmos taxminan bir daqiqada tushadi. ID qayerda turishi <a href=\"/blog/mobile-legends-user-id-server-id-qayerda\">alohida yozilgan</a>.",
        },
        { t: "cta", text: "Paketni tanlang, ID ni kiriting, nikni bepul ko'ring — olmos so'mda, bir daqiqada." },

        {
          t: "sources",
          items: [
            { label: "Mobile Legends: Bang Bang — rasmiy sayt", href: "https://www.mobilelegends.com/", note: "qahramonlar, tadbirlar va mavsum yangiliklari" },
          ],
        },
        {
          t: "links",
          title: "Mobile Legends bo'yicha boshqa qo'llanmalar",
          items: [
            { label: "Mobile Legends olmos sotib olish — so'mda, 1 daqiqada", href: "/blog/mobile-legends-olmos-sotib-olish" },
            { label: "User ID va Server ID qayerda", href: "/blog/mobile-legends-user-id-server-id-qayerda" },
            { label: "Olmos kelmadi: sabab va yechim", href: "/blog/mobile-legends-olmos-kelmadi-nima-qilish" },
            { label: "Olmosni qayerdan olish arzon", href: "/blog/mobile-legends-olmos-arzon-qayerdan-olish" },
            { label: "Mobile Legends to'ldirish sahifasi", href: "/oyinlar/mobile-legends" },
          ],
        },
      ],
      faq: [
        { q: "Olmos nima uchun kerak?", a: "Skinlar, yangi qahramonlarni chiqqan zahoti ochish, Magic Wheel va Lucky Box, Starlight va Weekly Diamond Pass obunalari va profil bezaklari uchun. Qahramonlarning o'zi Battle Point bilan ham ochiladi." },
        { q: "Olmos paketlari bir-biridan qanday farq qiladi?", a: "Miqdor va bonus ulushi bilan: 86 dan 706 gacha va yuqori, har biri asosiy va bonus qismdan iborat. Katta paketda bir olmos arzonroq tushadi. Joriy ro'yxat botda." },
        { q: "Birinchi xaridda bonus bormi?", a: "Ha, Moonton har paket darajasi uchun birinchi xaridda bonusni ikki barobar qiladi, bir martalik. O'yin ichidagi Recharge oynasida belgisi turadi; GemPay orqali to'ldirganda ham ishlaydi." },
        { q: "Starlight nima va nima beradi?", a: "Oylik a'zolik: eksklyuziv skin, bosqichli mukofotlar va Starlight fragment do'koni. Kalendar oyiga bog'langan — oy boshida olgan ma'qul." },
        { q: "Weekly Diamond Pass foydalimi?", a: "Har kuni o'ynasangiz — ha, bu olmos yig'ishning eng arzon yo'li: bir qism darhol, qolgani 7 kun davomida kunlik kirishda. Kirmagan kunning olmosi kuyadi." },
        { q: "Bepul olmos generatorlari ishlaydimi?", a: "Yo'q. Olmos balansi Moonton serverida, tashqi sayt unga yoza olmaydi. Bunday saytlar akkaunt ma'lumotini o'g'irlaydi, mod ilovalar esa akkauntni blokka olib boradi." },
        { q: "Olmosni boshqa akkauntga o'tkazsam bo'ladimi?", a: "Yo'q. Lekin do'stingizning User ID va Server ID sini kiritib, to'ldirishni to'g'ridan-to'g'ri unga qilasiz, yoki o'yin ichidagi sovg'a mexanizmi orqali skin sovg'a qilasiz." },
      ],
    },

    ru: {
      title: "Что такое алмазы Mobile Legends, что на них купить и как устроены пакеты",
      metaTitle: "Алмазы Mobile Legends: что это и какие есть пакеты",
      metaDescription:
        "Что такое алмазы Mobile Legends, что на них покупают, как устроены пакеты, бонус первой покупки, " +
        "разница Starlight и Weekly Diamond Pass и от чего зависит цена.",
      excerpt:
        "Разница алмазов, Battle Point и Ticket, что продаётся за алмазы, лестница пакетов от 86, когда " +
        "работает двойной бонус, кому подходят Starlight и Weekly Diamond Pass и правда о бесплатных алмазах.",
      answer:
        "Алмазы — основная платная валюта Mobile Legends: за них покупают скины, новых героев, прокруты Magic " +
        "Wheel и Lucky Box, членство Starlight и Weekly Diamond Pass. Пакеты идут лестницей от маленького к " +
        "большому, к большинству добавляется бонус; при первой покупке Moonton удваивает бонус. Алмазы привязаны " +
        "к аккаунту и не передаются. Сумма в сумах привязана к курсу, актуальную показывает бот.",
      body: [
        {
          t: "p",
          text:
            "В Mobile Legends три вида «денег», и новичок их путает: за Battle Point открывают героев, за Ticket — отдельные предметы, а за алмазы — всё самое интересное: скины, Starlight, рулетки. Эта статья про алмазы: что за них продаётся, как устроены пакеты и какую подписку когда брать. Само пополнение — в <a href=\"/blog/mobile-legends-olmos-sotib-olish\">руководстве по покупке алмазов</a>, условия — на <a href=\"/oyinlar/mobile-legends\">странице Mobile Legends</a>.",
        },

        { t: "h2", id: "olmos-nima", text: "Что такое алмазы и чем они отличаются от Battle Point" },
        {
          t: "facts",
          items: [
            { k: "Алмазы (Diamond)", v: "Платная валюта: покупается за реальные деньги, уходит на скины и подписки" },
            { k: "Battle Point (BP)", v: "Бесплатная: капает за матчи, открывает героев, на скины не хватает" },
            { k: "Ticket", v: "Бесплатная: из событий и Lucky Box, на ограниченный набор предметов" },
            { k: "К чему привязаны", v: "К аккаунту (User ID + Server ID), а не к устройству" },
            { k: "Передача", v: "На другой аккаунт не переносятся; можно пополнить друга по его ID или подарить скин в игре" },
          ],
        },
        {
          t: "p",
          text:
            "Почему самое интересное именно за алмазы: бесплатными валютами Moonton открывает всем основу игры — героев, а внешний вид и привилегии оставляет за алмазами. Скин не даёт силы в бою, но ради коллекции и вида покупают именно его.",
        },

        { t: "h2", id: "nimaga", text: "Что можно купить за алмазы" },
        {
          t: "list",
          items: [
            "<strong>Скины.</strong> Уровни Elite, Special, Epic и Legend — цена растёт с уровнем. Самые дорогие напрямую не продаются, выпадают из Magic Wheel или событий.",
            "<strong>Новые герои.</strong> Сразу после выхода — за алмазы, через несколько недель — и за Battle Point. Если не спешить, героя открывают без алмазов.",
            "<strong>Magic Wheel и Lucky Box.</strong> Результат прокрута случайный; в Magic Wheel после определённого числа прокрутов гарантирован Legend-скин, но это много алмазов.",
            "<strong>Членство Starlight.</strong> Месячное: эксклюзивный скин, поэтапные награды и магазин фрагментов Starlight.",
            "<strong>Weekly Diamond Pass и Twilight Pass.</strong> Подписки, выдающие алмазы или награды в течение дней.",
            "<strong>Карта смены ника, эмоции, эффекты recall и устранения.</strong> Мелочи, украшающие профиль.",
          ],
        },
        {
          t: "p",
          text: "Что можно получить и бесплатно: героев (за BP), отдельные простые скины (события и магазин фрагментов), награды Lucky Box. Только за алмазы: Starlight, скины Epic и Legend, Magic Wheel, подписки.",
        },

        { t: "h2", id: "paketlar", text: "Как устроены пакеты алмазов" },
        {
          t: "table",
          caption: "Обычная лестница. Каждый пакет состоит из основы и бонуса; актуальный список и состав — в боте.",
          head: ["Пакет", "Обычный состав", "На что хватает"],
          rows: [
            ["86 алмазов", "78 + 8", "Карта ника, Weekly Diamond Pass или часть Elite-скина"],
            ["172 алмаза", "156 + 16", "Обычный Elite-скин"],
            ["257 алмазов", "234 + 23", "Special-скин или членство Starlight"],
            ["344 алмаза", "312 + 32", "Special-скин и Weekly Diamond Pass"],
            ["429 алмазов", "390 + 39", "Почти Epic-скин"],
            ["514 алмазов", "468 + 46", "Epic-скин"],
            ["706 алмазов", "625 + 81", "Epic-скин и дополнительные покупки"],
            ["Больше", "Основа + бонус крупнее", "Серия Magic Wheel, несколько скинов, события"],
          ],
        },
        {
          t: "p",
          text:
            "Бонус первой покупки — отдельный механизм: Moonton удваивает бонус при первой покупке каждого уровня пакета, и этот бонус одноразовый на аккаунт. Проверить его можно в окне Recharge внутри игры: берите пакет со значком удвоения, потому что именно он даёт самую низкую цену за алмаз. GemPay на этот бонус не влияет — он издателя и работает при любом способе пополнения.",
        },

        { t: "h2", id: "starlight-wdp", text: "Starlight и Weekly Diamond Pass: что кому" },
        {
          t: "table",
          caption: "Оба товара продают не количество алмазов, а срок.",
          head: ["Товар", "Срок", "Что даёт", "Нужен ежедневный вход?", "Кому подходит"],
          rows: [
            ["Starlight", "Календарный месяц", "Эксклюзивный скин, поэтапные награды, магазин фрагментов Starlight", "Нет, но есть задания", "Тем, кто собирает скин каждый месяц"],
            ["Starlight Plus", "Календарный месяц", "Starlight + дополнительные уровни и награды Starlight", "Нет", "Тем, кто хочет награды быстрее"],
            ["Weekly Diamond Pass", "7 дней", "Часть алмазов сразу, остальное ежедневно при входе", "Да, каждый день", "Тем, кто играет ежедневно — самый дешёвый способ копить алмазы"],
            ["Twilight Pass", "Ограниченный период", "Трек наград, открываемых заданиями", "Задания", "Тем, кто активно играет весь период"],
          ],
        },
        {
          t: "note",
          tone: "warn",
          title: "Не берите Starlight в конце месяца",
          text:
            "Starlight привязан к календарному месяцу: в какой бы день вы ни купили, он закроется с концом месяца. Купив в последние дни, скин вы получите, но большинство недельных заданий и наград за уровни собрать не успеете. Берите в начале месяца.",
        },
        {
          t: "p",
          text:
            "У Weekly Diamond Pass логика обратная: алмазы выдаются не разом, а при ежедневном входе. Не зашли в какой-то день — алмазы этого дня сгорают, поэтому он полезен только тем, кто играет каждый день. Держать оба одновременно можно, друг другу они не мешают.",
        },

        { t: "h2", id: "narx", text: "От чего зависит цена" },
        {
          t: "p",
          text:
            "Базовая цена алмазов — у Moonton, а сумма в сумах приходит через тариф провайдера и курс USDT: сдвигается курс — сдвигается и сумма, поэтому на сайте цифра не пишется. Ещё два момента: в большом пакете себестоимость одного алмаза ниже, а комиссия онлайн-оплаты может добавляться к итоговой сумме. Текущая цена показывается в боте при выборе пакета, до оплаты. Сравнение способов — в <a href=\"/blog/mobile-legends-olmos-arzon-qayerdan-olish\">статье о том, где дешевле</a>.",
        },

        { t: "h2", id: "bepul-olmos", text: "Бесплатные алмазы: что правда, а что обман" },
        {
          t: "p",
          text:
            "Официальные бесплатные источники есть, но их мало: события, награды за вход, Lucky Box, иногда коды событий. На Starlight так не накопить. А «генераторы алмазов», мод-APK и сайты «взлом алмазов» алмазов не дают: баланс хранится на сервере Moonton, и внешний сайт записать в него не может. Такие страницы забирают данные аккаунта или ставят на телефон вредоносную программу, а моды ведут к блокировке аккаунта. Общее правило — в <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">руководстве по безопасному пополнению</a>.",
        },

        { t: "h2", id: "botda", text: "Посмотрите пакеты в боте" },
        {
          t: "p",
          text:
            "Актуальные пакеты, значок первой покупки и цена в сумах видны в <a href=\"https://t.me/Gempayuz_bot\">@Gempayuz_bot</a>, когда вы выбираете Mobile Legends. Вводите User ID и Server ID, бот бесплатно показывает ваш ник, после подтверждения платите в сумах — алмазы приходят примерно за минуту. Где находится ID — <a href=\"/blog/mobile-legends-user-id-server-id-qayerda\">в отдельной статье</a>.",
        },
        { t: "cta", text: "Выберите пакет, введите ID, бесплатно посмотрите ник — алмазы за сумы, за минуту." },

        {
          t: "sources",
          items: [
            { label: "Mobile Legends: Bang Bang — официальный сайт", href: "https://www.mobilelegends.com/", note: "герои, события и новости сезонов" },
          ],
        },
        {
          t: "links",
          title: "Другие руководства по Mobile Legends",
          items: [
            { label: "Купить алмазы Mobile Legends — за сумы, за минуту", href: "/blog/mobile-legends-olmos-sotib-olish" },
            { label: "Где User ID и Server ID", href: "/blog/mobile-legends-user-id-server-id-qayerda" },
            { label: "Алмазы не пришли: причина и решение", href: "/blog/mobile-legends-olmos-kelmadi-nima-qilish" },
            { label: "Где дешевле покупать алмазы", href: "/blog/mobile-legends-olmos-arzon-qayerdan-olish" },
            { label: "Страница пополнения Mobile Legends", href: "/oyinlar/mobile-legends" },
          ],
        },
      ],
      faq: [
        { q: "Зачем нужны алмазы?", a: "Для скинов, открытия новых героев сразу после выхода, Magic Wheel и Lucky Box, подписок Starlight и Weekly Diamond Pass и украшений профиля. Самих героев можно открыть и за Battle Point." },
        { q: "Чем пакеты алмазов отличаются друг от друга?", a: "Количеством и долей бонуса: от 86 до 706 и выше, каждый состоит из основы и бонуса. В большом пакете один алмаз дешевле. Актуальный список — в боте." },
        { q: "Есть бонус за первую покупку?", a: "Да, Moonton удваивает бонус при первой покупке каждого уровня пакета, один раз. В окне Recharge в игре стоит значок; при пополнении через GemPay бонус тоже работает." },
        { q: "Что такое Starlight и что он даёт?", a: "Месячное членство: эксклюзивный скин, поэтапные награды и магазин фрагментов Starlight. Привязан к календарному месяцу — лучше брать в начале месяца." },
        { q: "Выгоден ли Weekly Diamond Pass?", a: "Если играете каждый день — да, это самый дешёвый способ копить алмазы: часть сразу, остальное при ежедневном входе в течение 7 дней. Алмазы пропущенного дня сгорают." },
        { q: "Работают ли генераторы бесплатных алмазов?", a: "Нет. Баланс алмазов на сервере Moonton, внешний сайт в него записать не может. Такие сайты крадут данные аккаунта, а мод-приложения ведут к блокировке." },
        { q: "Можно перевести алмазы на другой аккаунт?", a: "Нет. Но можно ввести User ID и Server ID друга и пополнить напрямую его, либо подарить скин через механизм подарков в игре." },
      ],
    },
  },
};

export default article;
