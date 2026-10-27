// Steam klasteri, 1/3 — info/pillar. 2026-10-27, qo'lda, uz + ru.
//
// MANBA: starstg.uz dagi «steam-wallet-nima» mavzusi. Matn boshqa: u yerda
// umumiy «Wallet nima», bu yerda GemPay oqimi (login, dollar, so'm, bot
// holatlari) va Steam kelishuvidagi aniq qoidalar. Slug ham boshqa.
//
// FAKTLAR:
//   · Steam Subscriber Agreement 3.C: hamyon puli naqdga aylanmaydi,
//     qaytarilmaydi, o'tkazilmaydi (2026-10-27 da o'qildi).
//   · Bot `modules/steamTopup`: summa dollarda, so'm = usd × kurs (yaxlitlangan),
//     login faqat FORMAT bo'yicha tekshiriladi, yetkazish provayder API orqali —
//     darhol yoki 15 daqiqagacha «processing», xatoda pul qaytariladi.
//   · Katta summa qoidasi (bigAmountRule.js): chegaradan oshsa onlayn to'lov
//     tugmalari yopiladi — chegara matnda yozilmaydi (narx qoidasi).
// NARX YO'Q: so'm summasi, dollar miqdori, kurs — hech biri yozilmaydi.

import type { Article } from "../types";

const article: Article = {
  slug: "steam-hamyoni-nima-va-somda-toldirish",
  game: "steam",
  type: "info",
  datePublished: "2026-10-27",
  dateModified: "2026-10-27",
  pillar: true,
  keywords: [
    "steam hamyoni nima",
    "steam wallet nima",
    "steam hisobini to'ldirish",
    "steam balansini so'mda to'ldirish",
    "steam wallet uzcard humo",
    "steam gift card o'zbekiston",
    "steam hamyoni valyutasi",
    "пополнить steam кошелёк узбекистан",
  ],
  locales: {
    uz: {
      title: "Steam hamyoni nima, unga nima olinadi va uni O'zbekistonda so'mda qanday to'ldirish mumkin",
      metaTitle: "Steam hamyoni nima va uni so'mda qanday to'ldirish",
      metaDescription:
        "Steam Wallet nima, unga nima olinadi, balans qaysi valyutada, koddan farqi va O'zbekistonda so'mda " +
        "to'ldirish: UzCard, HUMO, Click, Uzum Bank, faqat login.",
      excerpt:
        "Hamyon o'yin valyutasi emas, akkauntning oldindan to'langan balansi: nimaga sarflanadi, nimaga " +
        "sarflanmaydi, kod va login orqali to'ldirishning farqi va GemPay'dagi oqim qadamma-qadam.",
      answer:
        "Steam hamyoni (Steam Wallet) — akkauntning oldindan to'langan balansi: Steam do'konidagi o'yin, DLC, " +
        "o'yin ichidagi xarid va Community Market shu balansdan to'lanadi. U naqd pulga aylanmaydi va boshqa " +
        "akkauntga o'tmaydi. O'zbekistonda uni so'mda to'ldirish yo'li — GemPay: Steam loginini kiritasiz, " +
        "dollardagi summani tanlaysiz, UzCard, HUMO, Click yoki Uzum Bank bilan to'laysiz, balans odatda bir " +
        "daqiqa atrofida tushadi.",
      body: [
        {
          t: "p",
          text:
            "PC o'yinchisi uchun Steam hamyoni UC yoki olmosdan boshqacha narsa: u bironta o'yinning valyutasi emas, Steam akkauntining o'zidagi pul. Shuning uchun u bilan bog'liq savollar ham boshqacha: balans nega dollarda ko'rinadi, kod bilan to'ldirish nega ba'zan ishlamaydi, login nega bunchalik muhim. Bu maqola shu savollarga javob beradi va GemPay orqali so'mda to'ldirishni qadamma-qadam ko'rsatadi. Shartlar va joriy holat <a href=\"/oyinlar/steam\">Steam sahifasida</a>.",
        },

        { t: "h2", id: "hamyon-nima", text: "Steam hamyoni nima va nima emas" },
        {
          t: "p",
          text:
            "Steam kelishuvi hamyonni «oldindan to'langan balans» deb ataydi: u bank hisobi ham, to'lov vositasi ham emas. Pul unga tushgach, faqat Steam ichida, faqat shu akkauntda ishlaydi. Valve buni aniq yozib qo'ygan: hamyon mablag'i naqd pulga aylanmaydi, qaytarilmaydi va boshqa akkauntga o'tkazilmaydi.",
        },
        {
          t: "facts",
          items: [
            { k: "Nima", v: "Akkauntning oldindan to'langan balansi — o'yin valyutasi emas" },
            { k: "Valyuta", v: "Akkaunt hududiga bog'liq; O'zbekiston akkauntlarida odatda dollar" },
            { k: "Boshqa akkauntga o'tkazish", v: "Yo'q — Steam kelishuvi taqiqlaydi" },
            { k: "Naqdga aylantirish yoki qaytarish", v: "Yo'q — kelishuvning 3.C bandi" },
            { k: "Nima bilan to'ldiriladi", v: "Rasmiy kassa, hamyon kodi yoki login orqali tashqi xizmat" },
          ],
        },

        { t: "h2", id: "nimaga", text: "Nimaga sarflanadi — va nimaga sarflanmaydi" },
        {
          t: "list",
          items: [
            "<strong>Steam do'konidagi o'yin, DLC va oldindan buyurtma.</strong> Chegirma mavsumida wishlist'dagi o'yin arzonlashganda pul tayyor turadi.",
            "<strong>Bepul o'yinlardagi ichki xaridlar.</strong> CS2 da Prime Status va sandiq kalitlari, Dota 2 da Dota Plus — hammasi hamyondan to'lanadi.",
            "<strong>Community Market.</strong> Skin va buyumlar faqat hamyon balansidan sotib olinadi; sotganingizda pul ham shu hamyonga qaytadi.",
            "<strong>Do'stga sovg'a.</strong> Do'konda «sovg'a sifatida sotib olish» tugmasi hamyondan to'laydi, o'yin do'stlar ro'yxatidagi odamga boradi.",
          ],
        },
        {
          t: "note",
          tone: "info",
          title: "Sarflab bo'lmaydigan narsalar",
          text:
            "Hamyon puli Epic, Origin, Battle.net yoki konsol do'konlarida ishlamaydi, boshqa odamning hamyoniga o'tmaydi va kartaga qaytarilmaydi. Do'stga pul emas, faqat o'yin sovg'a qilsa bo'ladi.",
        },

        { t: "h2", id: "valyuta", text: "Balans qaysi valyutada turadi va kurs qanday ishlaydi" },
        {
          t: "p",
          text:
            "Hamyon valyutasini Steam akkauntning hududiga qarab belgilaydi, to'ldirish xizmati emas. O'zbekistondan ochilgan akkauntlarda balans odatda dollarda ko'rinadi — shuning uchun so'mda to'lagan odam Steam'da so'm emas, dollar ko'radi va bu xato emas.",
        },
        {
          t: "p",
          text:
            "GemPay'da summa aynan shunday tanlanadi: botda dollardagi miqdorni belgilaysiz, bot uni joriy kurs bo'yicha so'mga aylantirib ko'rsatadi, siz so'mda to'laysiz, hamyonga esa tanlagan dollar summasi tushadi. Kurs botda jonli turadi va buyurtma yaratilgan paytda qotadi — ertaga boshqacha bo'lishi normal. Chegaralar, ya'ni eng kichik va eng katta summa, ham botda ko'rsatiladi; narx shu sababli saytga yozilmaydi.",
        },

        { t: "h2", id: "usullar", text: "To'ldirishning uch yo'li: rasmiy kassa, kod va login" },
        {
          t: "table",
          caption: "O'zbekistondagi o'yinchi uchun uch yo'l yonma-yon.",
          head: ["Yo'l", "Nima kerak", "O'zbekistonda to'siq", "Kimga mos"],
          rows: [
            ["Rasmiy kassa (Steam'dagi Add funds)", "Steam qabul qiladigan to'lov usuli — odatda xalqaro karta yoki elektron hamyon", "UzCard va HUMO ko'pincha o'tmaydi", "Ishlaydigan xalqaro kartasi borlarga"],
            ["Hamyon kodi yoki gift card", "Akkaunt valyutasiga mos kod", "Kod valyutasi mos kelmasa faollashmaydi; kod sotuvchisi ishonchli bo'lishi kerak", "Sovg'a qilmoqchi bo'lganlarga"],
            ["Login orqali tashqi xizmat (GemPay)", "Steam login va so'mdagi to'lov", "Nik tekshiruvi yo'q — login aniq bo'lishi shart", "Mahalliy karta bilan to'laydiganlarga"],
          ],
        },
        {
          t: "p",
          text:
            "Hamyon kodi bilan login orqali to'ldirishning farqini bilib olish muhim. Kod — Valve chiqargan va ma'lum valyutaga bog'langan vaucher: uni akkauntingizda o'zingiz faollashtirasiz, hech kimga login bermaysiz, lekin valyutasi akkauntingizniki bilan mos kelmasa, kod ishlamaydi. Login orqali to'ldirishda esa provayder balansni to'g'ridan-to'g'ri akkauntga yozadi: hech qanday kod yo'q, lekin login xato bo'lsa, pul begona akkauntga tushadi.",
        },

        { t: "h2", id: "gempay", text: "GemPay'da so'mda to'ldirish — 5 qadam" },
        {
          t: "steps",
          items: [
            {
              title: "Botda Steam'ni tanlang",
              text: "@Gempayuz_bot ni oching va katalogdan Steam'ni tanlang. Bu o'yin paketi emas, hamyon to'ldirish: tushgan balansni keyin istagan narsangizga sarflaysiz.",
            },
            {
              title: "Steam loginini (account name) kiriting",
              text: "Steam'ga kirishda yoziladigan nom — ko'rinadigan nik ham, email ham, profil havolasi ham emas. Bot loginni formati bo'yicha tekshiradi, lekin u sizniki ekanini ko'rsata olmaydi. Loginni qayerdan olish va nega bu yerda nik tekshiruvi yo'qligi — <a href=\"/blog/steam-login-qayerda-account-name\">alohida maqolada</a>.",
            },
            {
              title: "Summani tanlang",
              text: "Tayyor dollar miqdorlaridan birini bosing yoki chegaralar ichida o'zingiz yozing. So'mdagi narx darhol ko'rinadi — kurs va chegaralar botda, saytda emas.",
            },
            {
              title: "To'lov usulini tanlab to'lang",
              text: "Karta o'tkazmasida bot ko'rsatgan kartaga aynan ko'rsatilgan summani yuborasiz — tizim to'lovni summa bo'yicha taniydi. Click yoki Uzum Bank'da to'lov ilovada tasdiqlanadi. Katta summali buyurtmalarda bot onlayn to'lov tugmalarini yopib, karta o'tkazmasini qoldiradi — bu qaytarib bo'lmaydigan mahsulot uchun chargeback xavfidan himoya.",
            },
            {
              title: "Balansni Steam'da ko'ring",
              text: "To'lov tasdiqlangach bot buyurtmani provayderga uzatadi. Odatda balans bir daqiqa atrofida tushadi; provayder navbatida buyurtma 15 daqiqagacha «jarayonda» turishi mumkin. Steam'da yuqori o'ngdagi ismingiz yonidagi summaga qarang — kelmasa, <a href=\"/blog/steam-balansi-tushmadi-nima-qilish\">shu reja</a> bo'yicha harakat qiling.",
            },
          ],
        },
        { t: "cta", text: "Steam loginini kiriting, dollar summasini tanlang, so'mda to'lang — balans akkauntga o'zi tushadi." },

        { t: "h2", id: "cheklovlar", text: "Steam tomonidagi cheklovlar" },
        {
          t: "list",
          items: [
            "<strong>Cheklangan (limited) akkaunt.</strong> Yangi akkauntda do'stlik so'rovi, Market va boshqa jamoatchilik imkoniyatlari Valve belgilagan kichik summa sarflangunga qadar yopiq turadi. Hamyonni to'ldirishning o'zi bunga kiradi — lekin qoidani Steam o'zi boshqaradi, GemPay emas.",
            "<strong>Hudud va valyuta akkauntga qotib qolgan.</strong> Hamyon valyutasi akkaunt hududidan keladi; hududni o'zgartirish Steam qoidalari bilan cheklangan va to'ldirish xizmati uni o'zgartira olmaydi.",
            "<strong>Steam Guard to'sqinlik qilmaydi.</strong> To'ldirish akkauntga kirish orqali emas, tashqaridan bajariladi, shuning uchun Steam Guard va mobil autentifikator yoqiq qolaveradi.",
            "<strong>Noto'g'ri loginga ketgan pul qaytmaydi.</strong> Valve hamyon pulini akkauntlar orasida ko'chirmaydi — shuning uchun login birinchi martadanoq to'g'ri bo'lishi kerak.",
          ],
        },

        { t: "h2", id: "xavfsizlik", text: "Nima so'ralmaydi" },
        {
          t: "p",
          text:
            "Hamyonni login orqali to'ldirish uchun parol, Steam Guard kodi, email paroli yoki akkauntga kirish kerak emas va bular hech qachon so'ralmaydi. Login o'zi maxfiy ma'lumot emas: u bilan kirib bo'lmaydi, kirish uchun parol va Steam Guard kerak. Qaysi ma'lumot ochiq, qaysi biri yopiq ekani barcha o'yinlar uchun <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">xavfsiz to'ldirish qo'llanmasida</a> yozilgan.",
        },

        {
          t: "sources",
          items: [
            { label: "Steam Subscriber Agreement, 3.C Steam Wallet", href: "https://store.steampowered.com/subscriber_agreement/", note: "hamyon puli naqdga aylanmaydi, qaytarilmaydi va o'tkazilmaydi" },
            { label: "Steam: Add funds to your Steam Wallet", href: "https://store.steampowered.com/steamaccount/addfunds", note: "rasmiy kassa va hamyon nimaga sarflanishi" },
            { label: "Steam Support: SteamID va Steam Account Names", href: "https://help.steampowered.com/en/faqs/view/2816-BE67-5B69-0FEC", note: "akkaunt nomi o'zgarmaydi, profil nomi o'zgaradi" },
          ],
        },
        {
          t: "links",
          title: "Steam bo'yicha boshqa qo'llanmalar",
          items: [
            { label: "Steam login qayerda turadi va uni berish xavfsizmi", href: "/blog/steam-login-qayerda-account-name" },
            { label: "Steam balansi tushmadi: sabablari va yechimi", href: "/blog/steam-balansi-tushmadi-nima-qilish" },
            { label: "Steam hamyonini to'ldirish sahifasi", href: "/oyinlar/steam" },
            { label: "O'yin valyutasini qayerdan olish arzon", href: "/blog/oyin-valyutasi-qayerdan-arzon" },
            { label: "O'yinlarga donat qilish va Steam to'ldirish — umumiy qo'llanma", href: "/blog/oyinlarga-donat-qilish-gempay" },
          ],
        },
      ],
      faq: [
        { q: "Hamyondagi pulni qaytarib kartaga olsam bo'ladimi?", a: "Yo'q. Steam kelishuviga ko'ra hamyon mablag'i naqdga aylanmaydi va qaytarilmaydi. Shuning uchun keraklicha to'ldiring — ortiqchasi keyingi xaridga qoladi." },
        { q: "Do'stimning hamyoniga pul o'tkazsam bo'ladimi?", a: "Hamyon balansini o'tkazib bo'lmaydi. Lekin ikki yo'l bor: GemPay'da buyurtmada do'stingizning loginini kiritasiz va balans to'g'ridan-to'g'ri unga tushadi, yoki o'z hamyoningizdan unga o'yin sovg'a qilasiz." },
        { q: "So'mda to'ladim, balans nega dollarda ko'rinyapti?", a: "Chunki hamyon valyutasini akkaunt hududi belgilaydi, O'zbekiston akkauntlarida bu odatda dollar. Siz so'mda to'laysiz, bot summani kurs bo'yicha aylantiradi, hamyonga tanlangan dollar miqdori tushadi." },
        { q: "Kod bilan to'ldirish yaxshimi yoki login orqali?", a: "Kodda login berilmaydi, lekin kod valyutasi akkauntnikiga mos bo'lishi va sotuvchi ishonchli bo'lishi shart. Login orqali to'ldirishda kod yo'q, so'mda to'lanadi, lekin login xato bo'lsa pul begona akkauntga tushadi. Login aniq bo'lsa, ikkinchisi tezroq va oddiyroq." },
        { q: "Steam Guard yoqilgan bo'lsa to'ldirish ishlaydimi?", a: "Ha. To'ldirish akkauntga kirmasdan, tashqaridan bajariladi. Steam Guard yoki mobil autentifikatorni o'chirish kerak emas, kirish kodi so'ralmaydi." },
        { q: "Yangi akkauntni to'ldirsa bo'ladimi?", a: "Ha, login mavjud bo'lsa yetarli. Cheklangan akkaunt holati Valve belgilagan kichik xarid yoki to'ldirishdan keyin ochiladi — buni Steam o'zi hal qiladi." },
        { q: "Balans qancha vaqtda tushadi?", a: "Odatda bir daqiqa atrofida. Provayder navbatida buyurtma 15 daqiqagacha «jarayonda» turishi mumkin; shundan keyin ham kelmasa, buyurtma raqami bilan @StarsPaymeeSupport ga yozing." },
      ],
    },

    ru: {
      title: "Что такое кошелёк Steam, на что он тратится и как пополнить его в Узбекистане за сумы",
      metaTitle: "Кошелёк Steam: что это и как пополнить за сумы",
      metaDescription:
        "Что такое Steam Wallet, на что тратится, в какой валюте баланс, чем отличается от кода и как " +
        "пополнить в Узбекистане за сумы: UzCard, HUMO, Click, Uzum Bank.",
      excerpt:
        "Кошелёк — не игровая валюта, а предоплаченный баланс аккаунта: на что тратится, на что нет, чем код " +
        "отличается от пополнения по логину и как выглядит процесс в GemPay по шагам.",
      answer:
        "Кошелёк Steam (Steam Wallet) — предоплаченный баланс аккаунта: из него оплачиваются игры и DLC в магазине " +
        "Steam, внутриигровые покупки и Community Market. Он не обменивается на наличные и не переносится на другой " +
        "аккаунт. В Узбекистане пополнить его за сумы можно через GemPay: вводите логин Steam, выбираете сумму в " +
        "долларах, платите через UzCard, HUMO, Click или Uzum Bank, баланс обычно приходит примерно за минуту.",
      body: [
        {
          t: "p",
          text:
            "Для PC-игрока кошелёк Steam — не то же, что UC или алмазы: это не валюта конкретной игры, а деньги на самом аккаунте Steam. Поэтому и вопросы к нему другие: почему баланс в долларах, почему код иногда не срабатывает, почему так важен логин. Эта статья отвечает на них и показывает пополнение за сумы через GemPay по шагам. Условия и текущее состояние — на <a href=\"/oyinlar/steam\">странице Steam</a>.",
        },

        { t: "h2", id: "hamyon-nima", text: "Что такое кошелёк Steam и чем он не является" },
        {
          t: "p",
          text:
            "Соглашение Steam называет кошелёк «предоплаченным балансом»: это не банковский счёт и не платёжный инструмент. Попав туда, деньги работают только внутри Steam и только на этом аккаунте. Valve пишет прямо: средства кошелька не обмениваются на наличные, не возвращаются и не переносятся на другой аккаунт.",
        },
        {
          t: "facts",
          items: [
            { k: "Что это", v: "Предоплаченный баланс аккаунта — не игровая валюта" },
            { k: "Валюта", v: "Зависит от региона аккаунта; у аккаунтов из Узбекистана обычно доллары" },
            { k: "Перенос на другой аккаунт", v: "Нет — запрещено соглашением Steam" },
            { k: "Обналичить или вернуть", v: "Нет — пункт 3.C соглашения" },
            { k: "Чем пополняется", v: "Официальная касса, код кошелька или внешний сервис по логину" },
          ],
        },

        { t: "h2", id: "nimaga", text: "На что тратится — и на что нет" },
        {
          t: "list",
          items: [
            "<strong>Игры, DLC и предзаказы в магазине Steam.</strong> Деньги лежат наготове, когда игра из списка желаемого дешевеет на распродаже.",
            "<strong>Внутриигровые покупки в бесплатных играх.</strong> Prime Status и ключи от кейсов в CS2, Dota Plus в Dota 2 — всё оплачивается из кошелька.",
            "<strong>Community Market.</strong> Скины и предметы покупаются только с баланса кошелька; при продаже деньги возвращаются туда же.",
            "<strong>Подарок другу.</strong> Кнопка «купить в подарок» в магазине платит из кошелька, игра уходит человеку из списка друзей.",
          ],
        },
        {
          t: "note",
          tone: "info",
          title: "На что потратить нельзя",
          text:
            "Деньги кошелька не работают в Epic, Origin, Battle.net или консольных магазинах, не переходят в чужой кошелёк и не возвращаются на карту. Другу можно подарить игру, но не деньги.",
        },

        { t: "h2", id: "valyuta", text: "В какой валюте баланс и как работает курс" },
        {
          t: "p",
          text:
            "Валюту кошелька задаёт Steam по региону аккаунта, а не сервис пополнения. У аккаунтов, созданных из Узбекистана, баланс обычно отображается в долларах — поэтому заплативший сумами видит в Steam не сумы, а доллары, и это не ошибка.",
        },
        {
          t: "p",
          text:
            "В GemPay сумма выбирается именно так: в боте указываете количество долларов, бот переводит его по текущему курсу в сумы и показывает, вы платите в сумах, а в кошелёк приходит выбранная долларовая сумма. Курс в боте живой и фиксируется в момент создания заказа — завтра он может быть другим, это нормально. Лимиты, то есть наименьшая и наибольшая сумма, тоже показываются в боте; по этой же причине цена не пишется на сайте.",
        },

        { t: "h2", id: "usullar", text: "Три пути пополнения: касса, код и логин" },
        {
          t: "table",
          caption: "Три пути для игрока из Узбекистана рядом.",
          head: ["Путь", "Что нужно", "Препятствие в Узбекистане", "Кому подходит"],
          rows: [
            ["Официальная касса (Add funds в Steam)", "Способ оплаты, который принимает Steam, — обычно международная карта или электронный кошелёк", "UzCard и HUMO часто не проходят", "Тем, у кого есть рабочая международная карта"],
            ["Код кошелька или gift card", "Код в валюте аккаунта", "Код в другой валюте не активируется; продавец кода должен быть надёжным", "Тем, кто хочет подарить"],
            ["Внешний сервис по логину (GemPay)", "Логин Steam и оплата в сумах", "Нет проверки ника — логин должен быть точным", "Тем, кто платит местной картой"],
          ],
        },
        {
          t: "p",
          text:
            "Важно понимать разницу между кодом и пополнением по логину. Код — выпущенный Valve ваучер, привязанный к валюте: вы активируете его сами, никому не сообщая логин, но если валюта кода не совпадает с валютой аккаунта, код не сработает. При пополнении по логину провайдер зачисляет баланс прямо на аккаунт: кода нет, но при ошибке в логине деньги уйдут на чужой аккаунт.",
        },

        { t: "h2", id: "gempay", text: "Пополнение за сумы в GemPay — 5 шагов" },
        {
          t: "steps",
          items: [
            { title: "Выберите Steam в боте", text: "Откройте @Gempayuz_bot и выберите Steam в каталоге. Это не игровой пакет, а пополнение кошелька: пришедший баланс потом тратите на что угодно." },
            { title: "Введите логин Steam (account name)", text: "Имя, которым вы входите в Steam, — не видимый ник, не почта и не ссылка на профиль. Бот проверяет логин по формату, но не может показать, что он ваш. Где взять логин и почему здесь нет проверки ника — в <a href=\"/blog/steam-login-qayerda-account-name\">отдельной статье</a>." },
            { title: "Выберите сумму", text: "Нажмите одну из готовых долларовых сумм или впишите свою в пределах лимитов. Цена в сумах появляется сразу — курс и лимиты в боте, не на сайте." },
            { title: "Выберите способ и оплатите", text: "При переводе на карту отправьте ровно указанную сумму на карту, которую показал бот, — система узнаёт платёж по сумме. В Click или Uzum Bank платёж подтверждается в приложении. Для крупных заказов бот скрывает кнопки онлайн-оплаты и оставляет перевод на карту — защита от чарджбэка на невозвратном товаре." },
            { title: "Проверьте баланс в Steam", text: "После подтверждения оплаты бот передаёт заказ провайдеру. Обычно баланс приходит примерно за минуту; в очереди провайдера заказ может оставаться «в обработке» до 15 минут. Смотрите сумму рядом с вашим именем в правом верхнем углу Steam — если не пришло, действуйте по <a href=\"/blog/steam-balansi-tushmadi-nima-qilish\">этому плану</a>." },
          ],
        },
        { t: "cta", text: "Введите логин Steam, выберите сумму в долларах, оплатите в сумах — баланс придёт на аккаунт сам." },

        { t: "h2", id: "cheklovlar", text: "Ограничения со стороны Steam" },
        {
          t: "list",
          items: [
            "<strong>Ограниченный (limited) аккаунт.</strong> У нового аккаунта запросы в друзья, Market и другие функции сообщества закрыты, пока не потрачена небольшая сумма, установленная Valve. Пополнение кошелька в неё входит — но правило ведёт Steam, а не GemPay.",
            "<strong>Регион и валюта закреплены за аккаунтом.</strong> Валюта кошелька берётся из региона аккаунта; смена региона ограничена правилами Steam, и сервис пополнения изменить её не может.",
            "<strong>Steam Guard не мешает.</strong> Пополнение выполняется снаружи, без входа в аккаунт, поэтому Steam Guard и мобильный аутентификатор остаются включёнными.",
            "<strong>Деньги, ушедшие на неверный логин, не возвращаются.</strong> Valve не переносит средства кошелька между аккаунтами — поэтому логин должен быть верным с первого раза.",
          ],
        },

        { t: "h2", id: "xavfsizlik", text: "Чего не спрашивают" },
        {
          t: "p",
          text:
            "Для пополнения по логину не нужны и никогда не запрашиваются пароль, код Steam Guard, пароль от почты и вход в аккаунт. Сам логин — не секрет: войти по нему нельзя, для входа нужны пароль и Steam Guard. Какие данные открытые, а какие закрытые, для всех игр разобрано в <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">руководстве по безопасному пополнению</a>.",
        },

        {
          t: "sources",
          items: [
            { label: "Steam Subscriber Agreement, 3.C Steam Wallet", href: "https://store.steampowered.com/subscriber_agreement/", note: "средства кошелька не обналичиваются, не возвращаются и не переносятся" },
            { label: "Steam: Add funds to your Steam Wallet", href: "https://store.steampowered.com/steamaccount/addfunds", note: "официальная касса и на что тратится кошелёк" },
            { label: "Steam Support: SteamID и Steam Account Names", href: "https://help.steampowered.com/en/faqs/view/2816-BE67-5B69-0FEC", note: "имя аккаунта не меняется, имя профиля меняется" },
          ],
        },
        {
          t: "links",
          title: "Другие руководства по Steam",
          items: [
            { label: "Где находится логин Steam и безопасно ли его сообщать", href: "/blog/steam-login-qayerda-account-name" },
            { label: "Баланс Steam не пришёл: причины и решение", href: "/blog/steam-balansi-tushmadi-nima-qilish" },
            { label: "Страница пополнения кошелька Steam", href: "/oyinlar/steam" },
            { label: "Где дешевле покупать игровую валюту", href: "/blog/oyin-valyutasi-qayerdan-arzon" },
          ],
        },
      ],
      faq: [
        { q: "Можно вернуть деньги из кошелька на карту?", a: "Нет. По соглашению Steam средства кошелька не обналичиваются и не возвращаются. Пополняйте столько, сколько нужно, — остаток пойдёт на следующую покупку." },
        { q: "Можно перевести деньги в кошелёк друга?", a: "Баланс кошелька не переносится. Но есть два пути: в GemPay указать в заказе логин друга, и баланс придёт прямо ему, или из своего кошелька подарить ему игру." },
        { q: "Заплатил сумами, почему баланс в долларах?", a: "Потому что валюту кошелька задаёт регион аккаунта, у аккаунтов из Узбекистана это обычно доллары. Вы платите в сумах, бот переводит сумму по курсу, в кошелёк приходит выбранное количество долларов." },
        { q: "Что лучше: код или пополнение по логину?", a: "С кодом логин не сообщается, но валюта кода должна совпадать с валютой аккаунта, а продавец должен быть надёжным. При пополнении по логину кода нет, оплата в сумах, но ошибка в логине отправит деньги на чужой аккаунт. Если логин точный, второй путь быстрее и проще." },
        { q: "Работает ли пополнение при включённом Steam Guard?", a: "Да. Пополнение выполняется снаружи, без входа в аккаунт. Отключать Steam Guard или мобильный аутентификатор не нужно, код входа не запрашивается." },
        { q: "Можно пополнить новый аккаунт?", a: "Да, достаточно существующего логина. Статус ограниченного аккаунта снимается после небольшой покупки или пополнения, размер которого задаёт Valve, — это решает сам Steam." },
        { q: "Через сколько приходит баланс?", a: "Обычно примерно за минуту. В очереди провайдера заказ может оставаться «в обработке» до 15 минут; если и после этого ничего нет, напишите в @StarsPaymeeSupport с номером заказа." },
      ],
    },
  },
};

export default article;
