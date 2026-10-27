// Free Fire klasteri — info maqola. Reja: .plan/articles/free-fire-olmos-nima-va-paketlari.json
// (publishRank 20). Yozildi: 2026-10-27, qo'lda, uz + ru. Uchta mavjud maqola shu slug'ga havola beradi.
//
// FAKTLAR (brief, 2026-08 da tekshirilgan): paketlar 100+10, 310+31, 520+52, 1060+106,
// 2180+218, 5600+560; sezonli pass — Booyah Pass (Premium va Premium Plus, olmosdagi
// narxi mavsumga qarab, «odatda» deb yoziladi), «Elite Pass» eski nom; Weekly va
// Monthly Membership olmosni kunlik beradi; Free Fire va Free Fire MAX bitta balans;
// akkaunt hududi birinchi kirishda qotadi; guest akkaunt tiklanmaydi. NARX YO'Q.

import type { Article } from "../types";

const article: Article = {
  slug: "free-fire-olmos-nima-va-paketlari",
  game: "free-fire",
  type: "info",
  datePublished: "2026-10-27",
  dateModified: "2026-10-27",
  pillar: false,
  keywords: [
    "free fire olmos nima",
    "free fire olmos paketlari",
    "free fire weekly membership",
    "free fire monthly membership",
    "free fire booyah pass",
    "free fire elite pass olmos",
    "free fire bonus olmos",
    "алмазы free fire что это",
  ],
  locales: {
    uz: {
      title: "Free Fire olmosi nima, qanday paketlar bor va narx nimaga bog'liq",
      metaTitle: "Free Fire olmosi nima va qanday paketlar bor",
      metaDescription:
        "Free Fire olmosi nima, unga nima olinadi, 100+10 dan 5600+560 gacha paketlar, Weekly va Monthly Membership, Booyah Pass va narx nimaga bog'liq.",
      excerpt:
        "Olmos bilan oltinning farqi, olmosga nima sotiladi, asosiy va bonus paket tuzilishi, Weekly va Monthly " +
        "Membership mantiqi, Booyah Pass darajalari va qaysi xarid kimga to'g'ri keladi.",
      answer:
        "Olmos (diamond) — Free Fire'ning yagona pullik valyutasi. U bilan qurol va personaj skinlari, personajlar, " +
        "pet, Booyah Pass (avvalgi Elite Pass), Weekly va Monthly Membership hamda Diamond Royale aylanishlari " +
        "olinadi. Paketlar asosiy va bonus olmosdan iborat: 100+10 dan 5600+560 gacha. Olmos akkauntga bog'lanadi, " +
        "Free Fire va Free Fire MAX bitta balansni bo'lishadi. Joriy narx so'mda botda, to'lovdan oldin ko'rinadi.",
      body: [
        {
          t: "p",
          text:
            "Free Fire'da pul ikki xil: oltin (gold) matchlardan tushadi va faqat cheklangan buyumlarga yetadi, olmos esa Garena sotadigan yagona pullik valyuta — skin, personaj, pass va obunalar unga ketadi. Bu maqola olmos haqida: paketlar nega 100+10 ko'rinishida, Membership olmosni qanday beradi, Booyah Pass nima va qaysi xarid kimga mos. To'ldirishning o'zi <a href=\"/blog/free-fire-olmos-sotib-olish\">olmos sotib olish qo'llanmasida</a>, shartlar <a href=\"/oyinlar/free-fire\">Free Fire sahifasida</a>.",
        },

        { t: "h2", id: "olmos-nima", text: "Olmos nima va qayerda ishlatiladi" },
        {
          t: "facts",
          items: [
            { k: "Olmos", v: "Pullik valyuta: haqiqiy pulga olinadi, premium kontentga ketadi" },
            { k: "Oltin (gold)", v: "Bepul: matchlardan tushadi, oltin do'konidagi cheklangan buyumlarga" },
            { k: "Kimga bog'langan", v: "Akkauntga (UID), qurilmaga emas; Free Fire va Free Fire MAX bitta balans" },
            { k: "O'tkazish", v: "Boshqa akkauntga o'tkazilmaydi, qaytarilmaydi; do'stga uning UID siga to'ldirish mumkin" },
            { k: "Hudud", v: "Akkaunt hududi birinchi kirishda qotadi — paketlar va to'ldirish yo'li shunga bog'liq" },
          ],
        },
        {
          t: "list",
          items: [
            "<strong>Qurol va personaj skinlari.</strong> Do'kon, Weapon Royale, Evo Vault — Evo qurollari darajalar bilan o'sadi.",
            "<strong>Personajlar va ularning ko'nikmalari.</strong> Alok, Chrono, Kelly kabi personajlarni ochish va kuchaytirish.",
            "<strong>Pet va emote.</strong> Pet o'z ko'nikmasi bilan, emote — ko'rinish uchun.",
            "<strong>Booyah Pass.</strong> Mavsumiy mukofotlar treki, Premium va Premium Plus darajalari.",
            "<strong>Weekly va Monthly Membership.</strong> Olmosni kunlar davomida beradigan obunalar.",
            "<strong>Diamond Royale, Incubator, Faded Wheel.</strong> Natijasi tasodifiy aylanmalar — byudjet chegarasi bilan.",
            "<strong>Bundle'lar va mavsumiy to'plamlar.</strong> Cheklangan vaqtda sotiladigan kiyim to'plamlari.",
          ],
        },

        { t: "h2", id: "paketlar", text: "Paketlar qanday tuzilgan: asosiy + bonus" },
        {
          t: "table",
          caption: "Standart zinapoya. Bonus ulushi taxminan o'ndan bir; joriy ro'yxat va tarkib botda.",
          head: ["Paket", "Jami", "Nimaga yetadi", "Kimga mos"],
          rows: [
            ["100 + 10", "110", "Weekly Membership yoki kichik buyum", "Sinab ko'rayotganlarga"],
            ["310 + 31", "341", "Booyah Pass Premium yoki bir nechta aylanish", "Faqat pass olmoqchilarga"],
            ["520 + 52", "572", "Pass va Weekly Membership birga", "Har mavsum o'ynaydiganlarga"],
            ["1060 + 106", "1166", "Booyah Pass Premium Plus yoki katta bundle", "Pass bilan birga skin olmoqchilarga"],
            ["2180 + 218", "2398", "Evo qurol darajalari, bir nechta bundle", "Faol xarid qiluvchilarga"],
            ["5600 + 560", "6160", "Katta aylanma seriyalari va kolleksiya", "Bir olmosga eng kam tranzaksiya kerak bo'lganda"],
          ],
        },
        {
          t: "p",
          text:
            "Free Fire'da bonus ulushi PUBG yoki Mobile Legends'dagidan farqli deyarli hamma paketda bir xil — taxminan o'ndan bir. Shuning uchun katta paketning foydasi bonusda emas, tranzaksiyalar sonida: bir martalik xarid kamroq bosqich, kamroq komissiya va kamroq xato ehtimoli. Bonus olmos oddiy olmosdan farq qilmaydi, u ham o'sha balansga tushadi va hamma narsaga ishlaydi; faqat ayrim aksiyalar «sotib olingan olmos» ni alohida hisoblashi mumkin, shartini tadbirda o'qing.",
        },

        { t: "h2", id: "membership", text: "Weekly va Monthly Membership: olmos oqimi" },
        {
          t: "table",
          caption: "Ikkala obuna ham olmosni bir yo'la emas, kunlar davomida beradi.",
          head: ["Obuna", "Muddati", "Qanday beradi", "Kunlik kirish", "Kimga mos"],
          rows: [
            ["Weekly Membership", "7 kun", "Bir qism olmos darhol, qolgani har kuni kirishda, ustiga kunlik bonuslar", "Ha", "Har kuni o'ynaydiganlarga — eng arzon olmos oqimi"],
            ["Monthly Membership", "30 kun", "Kattaroq boshlang'ich qism, 30 kun davomida kunlik olmos va imtiyozlar", "Ha", "Oy davomida barqaror o'ynaydiganlarga"],
          ],
        },
        {
          t: "p",
          text:
            "Ikkalasining sharti bitta: har kuni o'yinga kirish. Kirmagan kunning olmosi kuyadi, shuning uchun bir hafta dam olmoqchi bo'lsangiz, Membership o'sha haftada befoyda. Ikkalasini bir vaqtda ushlab turish mumkin — olmos ikkalasidan ham tushadi.",
        },

        { t: "h2", id: "booyah-pass", text: "Booyah Pass va eski «Elite Pass»" },
        {
          t: "p",
          text:
            "Mavsumiy pass tizimi hozir Booyah Pass deb ataladi; «Elite Pass» — o'sha tizimning eski nomi, ko'p o'yinchi hali shunday qidiradi. Bepul yo'nalish hammaga ochiq, Premium yo'nalishi olmosga: ko'p mavsumlarda Premium bir necha yuz olmos atrofida, Premium Plus taxminan ikki barobar va evaziga bir nechta darajani darhol ochadi. Aniq raqam mavsumga qarab o'zgaradi va o'yin ichidagi pass oynasida turadi. Mukofotlar mavsum davomida ochiladi va mavsum tugagach yo'qoladi — passni mavsum boshida olgan ma'qul.",
        },

        { t: "h2", id: "qaysi-xarid", text: "Qaysi xarid kimga to'g'ri keladi" },
        {
          t: "table",
          caption: "Maqsad bo'yicha tanlash. Summalar botda.",
          head: ["Maqsad", "Nima olish", "E'tibor bering"],
          rows: [
            ["Faqat Booyah Pass", "Pass narxiga yetadigan bitta paket", "Mavsum boshida oling, darajalar ochilsin"],
            ["Doimiy olmos oqimi", "Weekly yoki Monthly Membership", "Har kuni kirish shart, aks holda kuyadi"],
            ["Bitta bundle yoki skin", "Narxga mos paket, balansdagi olmosni hisobga olib", "Cheklangan vaqtli bundle qaytib kelmasligi mumkin"],
            ["Diamond Royale aylanishlari", "Seriya uchun yetadigan paket", "Natija tasodifiy — chegara qo'ying"],
            ["Katta yig'ish", "Katta paket", "Kamroq tranzaksiya, lekin ortiqcha olmos qaytmaydi"],
          ],
        },

        { t: "h2", id: "narx", text: "Narx nimaga qarab o'zgaradi" },
        {
          t: "p",
          text:
            "So'mdagi narxni to'rt narsa belgilaydi: Garena'ning paket narxi, provayderning USDT dagi tarifi, joriy USDT va so'm kursi hamda aksiya davrlari. Kurs siljisa summa ham siljiydi, shuning uchun saytda raqam yozilmaydi — yakuniy summa botda, paket tanlaganingizda, to'lovdan oldin ko'rsatiladi. Katta paketda bir olmosga tushadigan narx bir oz past, lekin Free Fire'da bu farq kichik, chunki bonus ulushi hamma paketda bir xil. Usullarni solishtirish — <a href=\"/blog/free-fire-olmos-arzon-qayerdan-olish\">qayerdan arzon maqolasida</a>.",
        },

        { t: "h2", id: "cheklovlar", text: "Bonus olmos va cheklovlar haqida bilish kerak" },
        {
          t: "list",
          items: [
            "<strong>Olmos qaytarilmaydi va o'tkazilmaydi.</strong> Hisobga tushgach, uni Garena ham chiqarib bermaydi — shuning uchun UID to'lovdan oldin tekshiriladi.",
            "<strong>Free Fire va Free Fire MAX — bitta akkaunt, bitta balans.</strong> Qaysi ilovada o'ynasangiz ham olmos bir joyda.",
            "<strong>Hudud muhim.</strong> Akkaunt hududi birinchi kirishda belgilanadi; GemPay global versiya bilan ishlaydi, Vetnam, Tailand va Indoneziya hisoblari qo'llab-quvvatlanmaydi — bot buni nik tekshiruvida ko'rsatadi.",
            "<strong>Guest akkaunt tiklanmaydi.</strong> To'ldirishdan oldin akkauntni Google, Facebook yoki VK ga bog'lang — aks holda telefon bilan birga olmos ham yo'qoladi.",
            "<strong>Bepul olmos va'dalari.</strong> Generator, hack va «tekshiruv» sahifalari olmos bermaydi — nega bunday ekani <a href=\"/blog/free-fire-bepul-olmos-haqiqatmi\">alohida maqolada</a>.",
          ],
        },

        { t: "h2", id: "toldirish", text: "Paketni tanlab, to'ldirishga o'tish" },
        {
          t: "p",
          text:
            "Joriy paketlar, Membership variantlari va so'mdagi narx <a href=\"https://t.me/Gempayuz_bot\">@Gempayuz_bot</a> da Free Fire'ni tanlaganingizda ko'rinadi. UID ni kiritasiz, bot nikingizni Garena serveridan olib bepul ko'rsatadi, tasdiqlagach UzCard, HUMO, Click yoki Uzum Bank bilan to'laysiz — olmos taxminan ikki daqiqada tushadi. Qadamlar batafsil <a href=\"/blog/free-fire-olmos-sotib-olish\">asosiy qo'llanmada</a>.",
        },
        { t: "cta", text: "Paketni tanlang, UID ni kiriting, nikni bepul ko'ring — olmos so'mda, ikki daqiqada." },

        {
          t: "sources",
          items: [
            { label: "Garena Free Fire — rasmiy sayt", href: "https://ff.garena.com/en", note: "mavsumlar, Booyah Pass va tadbirlar" },
            { label: "Garena Free Fire — rasmiy redeem-kod sahifasi", href: "https://reward.ff.garena.com/en", note: "bepul olmosning yagona rasmiy manbalaridan biri" },
          ],
        },
        {
          t: "links",
          title: "Free Fire bo'yicha boshqa qo'llanmalar",
          items: [
            { label: "Free Fire olmos sotib olish — so'mda, 2 daqiqada", href: "/blog/free-fire-olmos-sotib-olish" },
            { label: "Olmos kelmadi yoki «ID topilmadi»", href: "/blog/free-fire-olmos-kelmadi-id-topilmadi" },
            { label: "Olmosni qayerdan olish arzon va xavfsiz", href: "/blog/free-fire-olmos-arzon-qayerdan-olish" },
            { label: "Bepul olmos: haqiqatmi", href: "/blog/free-fire-bepul-olmos-haqiqatmi" },
            { label: "Free Fire to'ldirish sahifasi", href: "/oyinlar/free-fire" },
          ],
        },
      ],
      faq: [
        { q: "Free Fire'da olmos nimaga kerak?", a: "Skinlar, personajlar, pet, Booyah Pass, Weekly va Monthly Membership, Diamond Royale va Incubator aylanishlari, bundle'lar uchun. Oltin bilan faqat cheklangan buyumlar olinadi." },
        { q: "Qanday paketlar mavjud?", a: "Asosiy va bonus ko'rinishida: 100+10, 310+31, 520+52, 1060+106, 2180+218 va 5600+560 — jami 110 dan 6160 gacha. Joriy ro'yxat botda." },
        { q: "Weekly Membership nima beradi?", a: "Bir qism olmos darhol, qolgani 7 kun davomida har kuni kirishda, ustiga kunlik bonuslar. Har kuni o'ynasangiz, bu olmos olishning eng arzon yo'li; kirmagan kunning olmosi kuyadi." },
        { q: "Monthly Membership Weekly'dan farqi nimada?", a: "Muddati 30 kun, boshlang'ich qism kattaroq, kunlik olmos va qo'shimcha imtiyozlar oy davomida. Ikkalasini bir vaqtda ushlab turish mumkin." },
        { q: "Booyah Pass bilan Elite Pass bir xilmi?", a: "Ha, bu bitta tizim: Elite Pass eski nomi. Hozir Booyah Pass — bepul yo'nalish va olmosga olinadigan Premium hamda Premium Plus darajalari." },
        { q: "Bonus olmos oddiy olmosdan farq qiladimi?", a: "Yo'q, u ham o'sha balansga tushadi va hamma narsaga ishlaydi. Faqat ayrim aksiyalar «sotib olingan olmos» ni alohida sanashi mumkin — tadbir shartida yoziladi." },
        { q: "Olmosni do'stimga o'tkaza olamanmi?", a: "Yo'q, olmos akkauntga bog'langan. Lekin do'stingizning UID sini kiritib, to'ldirishni to'g'ridan-to'g'ri unga qilasiz — bot uning nikini ko'rsatadi." },
        { q: "Nega narx doim bir xil emas?", a: "So'mdagi summa provayder tarifi va USDT kursiga bog'liq, kurs siljisa summa ham siljiydi. Shuning uchun saytda raqam yo'q — joriy narx botda, to'lovdan oldin." },
      ],
    },

    ru: {
      title: "Что такое алмазы Free Fire, какие есть пакеты и от чего зависит цена",
      metaTitle: "Алмазы Free Fire: что это и какие есть пакеты",
      metaDescription:
        "Что такое алмазы Free Fire, что на них покупают, пакеты от 100+10 до 5600+560, Weekly и Monthly Membership, Booyah Pass и от чего зависит цена.",
      excerpt:
        "Разница алмазов и золота, что продаётся за алмазы, устройство пакетов «основа + бонус», логика Weekly " +
        "и Monthly Membership, уровни Booyah Pass и какая покупка кому подходит.",
      answer:
        "Алмазы (diamonds) — единственная платная валюта Free Fire. На них покупают скины оружия и персонажей, " +
        "персонажей, питомцев, Booyah Pass (бывший Elite Pass), Weekly и Monthly Membership и прокруты Diamond " +
        "Royale. Пакеты состоят из основы и бонуса: от 100+10 до 5600+560. Алмазы привязаны к аккаунту, Free Fire и " +
        "Free Fire MAX делят один баланс. Актуальная цена в сумах видна в боте до оплаты.",
      body: [
        {
          t: "p",
          text:
            "Денег в Free Fire два вида: золото (gold) капает за матчи и хватает только на ограниченные предметы, а алмазы — единственная платная валюта, которую продаёт Garena: на них уходят скины, персонажи, пропуск и подписки. Эта статья про алмазы: почему пакеты выглядят как 100+10, как Membership выдаёт алмазы, что такое Booyah Pass и какая покупка кому подходит. Само пополнение — в <a href=\"/blog/free-fire-olmos-sotib-olish\">руководстве по покупке алмазов</a>, условия — на <a href=\"/oyinlar/free-fire\">странице Free Fire</a>.",
        },

        { t: "h2", id: "olmos-nima", text: "Что такое алмазы и где они используются" },
        {
          t: "facts",
          items: [
            { k: "Алмазы", v: "Платная валюта: покупается за реальные деньги, уходит на премиум-контент" },
            { k: "Золото (gold)", v: "Бесплатная: капает за матчи, на ограниченные предметы золотого магазина" },
            { k: "К чему привязаны", v: "К аккаунту (UID), а не к устройству; Free Fire и Free Fire MAX — один баланс" },
            { k: "Передача", v: "На другой аккаунт не переносятся, не возвращаются; можно пополнить друга по его UID" },
            { k: "Регион", v: "Регион аккаунта закрепляется при первом входе — от него зависят пакеты и путь пополнения" },
          ],
        },
        {
          t: "list",
          items: [
            "<strong>Скины оружия и персонажей.</strong> Магазин, Weapon Royale, Evo Vault — Evo-оружие растёт по уровням.",
            "<strong>Персонажи и их навыки.</strong> Открыть и усилить Alok, Chrono, Kelly и других.",
            "<strong>Питомцы и эмоции.</strong> Питомец со своим навыком, эмоции — для вида.",
            "<strong>Booyah Pass.</strong> Сезонный трек наград с уровнями Premium и Premium Plus.",
            "<strong>Weekly и Monthly Membership.</strong> Подписки, выдающие алмазы в течение дней.",
            "<strong>Diamond Royale, Incubator, Faded Wheel.</strong> Рулетки со случайным результатом — с лимитом бюджета.",
            "<strong>Бандлы и сезонные наборы.</strong> Комплекты одежды, продающиеся ограниченное время.",
          ],
        },

        { t: "h2", id: "paketlar", text: "Как устроены пакеты: основа + бонус" },
        {
          t: "table",
          caption: "Стандартная лестница. Доля бонуса примерно десятая часть; актуальный список и состав — в боте.",
          head: ["Пакет", "Итого", "На что хватает", "Кому подходит"],
          rows: [
            ["100 + 10", "110", "Weekly Membership или мелкий предмет", "Тем, кто пробует"],
            ["310 + 31", "341", "Booyah Pass Premium или несколько прокрутов", "Тем, кому нужен только пропуск"],
            ["520 + 52", "572", "Пропуск и Weekly Membership вместе", "Тем, кто играет каждый сезон"],
            ["1060 + 106", "1166", "Booyah Pass Premium Plus или крупный бандл", "Тем, кто берёт скин вместе с пропуском"],
            ["2180 + 218", "2398", "Уровни Evo-оружия, несколько бандлов", "Активным покупателям"],
            ["5600 + 560", "6160", "Крупные серии рулеток и коллекция", "Когда нужно минимум транзакций на алмаз"],
          ],
        },
        {
          t: "p",
          text:
            "В Free Fire, в отличие от PUBG или Mobile Legends, доля бонуса почти во всех пакетах одинакова — около десятой части. Поэтому выгода большого пакета не в бонусе, а в числе транзакций: одна покупка — меньше шагов, меньше комиссий и меньше шансов на ошибку. Бонусные алмазы не отличаются от обычных, они зачисляются на тот же баланс и работают на всё; лишь отдельные акции могут считать «купленные алмазы» отдельно — условие написано в событии.",
        },

        { t: "h2", id: "membership", text: "Weekly и Monthly Membership: поток алмазов" },
        {
          t: "table",
          caption: "Обе подписки выдают алмазы не сразу, а по дням.",
          head: ["Подписка", "Срок", "Как выдаёт", "Ежедневный вход", "Кому подходит"],
          rows: [
            ["Weekly Membership", "7 дней", "Часть алмазов сразу, остальное ежедневно при входе, плюс дневные бонусы", "Да", "Тем, кто играет ежедневно — самый дешёвый поток алмазов"],
            ["Monthly Membership", "30 дней", "Стартовая часть крупнее, ежедневные алмазы и привилегии в течение 30 дней", "Да", "Тем, кто стабильно играет весь месяц"],
          ],
        },
        {
          t: "p",
          text:
            "Условие у обеих одно: заходить в игру каждый день. Алмазы пропущенного дня сгорают, поэтому на неделю отдыха Membership бесполезен. Держать обе одновременно можно — алмазы придут из обеих.",
        },

        { t: "h2", id: "booyah-pass", text: "Booyah Pass и старый «Elite Pass»" },
        {
          t: "p",
          text:
            "Сезонная система пропуска теперь называется Booyah Pass; «Elite Pass» — старое имя той же системы, многие игроки до сих пор ищут по нему. Бесплатная ветка открыта всем, ветка Premium — за алмазы: во многих сезонах Premium стоит несколько сотен алмазов, Premium Plus примерно вдвое дороже и сразу открывает несколько уровней. Точная цифра меняется по сезонам и указана в окне пропуска в игре. Награды открываются в течение сезона и пропадают с его концом — пропуск выгоднее брать в начале сезона.",
        },

        { t: "h2", id: "qaysi-xarid", text: "Какая покупка кому подходит" },
        {
          t: "table",
          caption: "Выбор по цели. Суммы — в боте.",
          head: ["Цель", "Что взять", "Обратите внимание"],
          rows: [
            ["Только Booyah Pass", "Один пакет, которого хватает на пропуск", "Берите в начале сезона, чтобы открыть уровни"],
            ["Постоянный поток алмазов", "Weekly или Monthly Membership", "Нужен ежедневный вход, иначе сгорает"],
            ["Один бандл или скин", "Пакет под цену с учётом алмазов на балансе", "Ограниченный по времени бандл может не вернуться"],
            ["Прокруты Diamond Royale", "Пакет на серию", "Результат случайный — задайте лимит"],
            ["Крупный запас", "Большой пакет", "Меньше транзакций, но лишние алмазы не возвращаются"],
          ],
        },

        { t: "h2", id: "narx", text: "От чего меняется цена" },
        {
          t: "p",
          text:
            "Цену в сумах задают четыре вещи: цена пакета у Garena, тариф провайдера в USDT, текущий курс USDT к суму и периоды акций. Сдвигается курс — сдвигается и сумма, поэтому на сайте цифра не пишется: итоговая сумма показывается в боте при выборе пакета, до оплаты. В большом пакете цена за алмаз чуть ниже, но в Free Fire разница невелика, потому что доля бонуса во всех пакетах одинакова. Сравнение способов — в <a href=\"/blog/free-fire-olmos-arzon-qayerdan-olish\">статье о том, где дешевле</a>.",
        },

        { t: "h2", id: "cheklovlar", text: "Что нужно знать о бонусных алмазах и ограничениях" },
        {
          t: "list",
          items: [
            "<strong>Алмазы не возвращаются и не переносятся.</strong> После зачисления их не выведет даже Garena — поэтому UID проверяется до оплаты.",
            "<strong>Free Fire и Free Fire MAX — один аккаунт и один баланс.</strong> В каком бы приложении вы ни играли, алмазы в одном месте.",
            "<strong>Регион важен.</strong> Регион аккаунта задаётся при первом входе; GemPay работает с глобальной версией, аккаунты Вьетнама, Таиланда и Индонезии не поддерживаются — бот покажет это при проверке ника.",
            "<strong>Гостевой аккаунт не восстанавливается.</strong> До пополнения привяжите аккаунт к Google, Facebook или VK — иначе вместе с телефоном пропадут и алмазы.",
            "<strong>Обещания бесплатных алмазов.</strong> Генераторы, читы и страницы «проверки» алмазов не дают — почему, разобрано в <a href=\"/blog/free-fire-bepul-olmos-haqiqatmi\">отдельной статье</a>.",
          ],
        },

        { t: "h2", id: "toldirish", text: "Выбрать пакет и перейти к пополнению" },
        {
          t: "p",
          text:
            "Актуальные пакеты, варианты Membership и цена в сумах видны в <a href=\"https://t.me/Gempayuz_bot\">@Gempayuz_bot</a>, когда вы выбираете Free Fire. Вводите UID, бот бесплатно получает ваш ник с сервера Garena и показывает его, после подтверждения платите через UzCard, HUMO, Click или Uzum Bank — алмазы приходят примерно за две минуты. Шаги подробно — в <a href=\"/blog/free-fire-olmos-sotib-olish\">основном руководстве</a>.",
        },
        { t: "cta", text: "Выберите пакет, введите UID, бесплатно посмотрите ник — алмазы за сумы, за две минуты." },

        {
          t: "sources",
          items: [
            { label: "Garena Free Fire — официальный сайт", href: "https://ff.garena.com/en", note: "сезоны, Booyah Pass и события" },
            { label: "Garena Free Fire — официальная страница redeem-кодов", href: "https://reward.ff.garena.com/en", note: "один из немногих официальных источников бесплатных алмазов" },
          ],
        },
        {
          t: "links",
          title: "Другие руководства по Free Fire",
          items: [
            { label: "Купить алмазы Free Fire — за сумы, за 2 минуты", href: "/blog/free-fire-olmos-sotib-olish" },
            { label: "Алмазы не пришли или «ID не найден»", href: "/blog/free-fire-olmos-kelmadi-id-topilmadi" },
            { label: "Где дешевле и безопаснее купить алмазы", href: "/blog/free-fire-olmos-arzon-qayerdan-olish" },
            { label: "Бесплатные алмазы: правда ли", href: "/blog/free-fire-bepul-olmos-haqiqatmi" },
            { label: "Страница пополнения Free Fire", href: "/oyinlar/free-fire" },
          ],
        },
      ],
      faq: [
        { q: "Зачем нужны алмазы в Free Fire?", a: "Для скинов, персонажей, питомцев, Booyah Pass, Weekly и Monthly Membership, прокрутов Diamond Royale и Incubator, бандлов. За золото покупаются только ограниченные предметы." },
        { q: "Какие есть пакеты?", a: "В виде «основа + бонус»: 100+10, 310+31, 520+52, 1060+106, 2180+218 и 5600+560 — итого от 110 до 6160. Актуальный список в боте." },
        { q: "Что даёт Weekly Membership?", a: "Часть алмазов сразу, остальное ежедневно при входе в течение 7 дней, плюс дневные бонусы. При ежедневной игре это самый дешёвый способ получать алмазы; алмазы пропущенного дня сгорают." },
        { q: "Чем Monthly Membership отличается от Weekly?", a: "Срок 30 дней, стартовая часть крупнее, ежедневные алмазы и дополнительные привилегии весь месяц. Держать обе одновременно можно." },
        { q: "Booyah Pass и Elite Pass — одно и то же?", a: "Да, это одна система: Elite Pass — старое название. Сейчас это Booyah Pass с бесплатной веткой и платными уровнями Premium и Premium Plus." },
        { q: "Бонусные алмазы отличаются от обычных?", a: "Нет, они зачисляются на тот же баланс и работают на всё. Лишь отдельные акции могут считать «купленные алмазы» отдельно — это прописано в условиях события." },
        { q: "Могу передать алмазы другу?", a: "Нет, алмазы привязаны к аккаунту. Но можно ввести UID друга и пополнить напрямую его — бот покажет его ник." },
        { q: "Почему цена не всегда одинаковая?", a: "Сумма в сумах зависит от тарифа провайдера и курса USDT; сдвигается курс — сдвигается и сумма. Поэтому на сайте цифры нет — текущая цена в боте, до оплаты." },
      ],
    },
  },
};

export default article;
