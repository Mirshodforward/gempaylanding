// Steam klasteri, 2/3 — ishonch/ID maqolasi. 2026-10-27, qo'lda, uz + ru.
//
// Boshqa o'yinlardagi «Player ID qayerda» maqolalarining Steam varianti.
// Steam'da nik tekshiruvi YO'Q, shuning uchun bu klasterdagi eng muhim sahifa:
// noto'g'ri login = qaytmaydigan pul.
//
// FAKTLAR:
//   · Steam Support FAQ (2816-BE67-5B69-0FEC, 2026-10-27 da o'qildi): akkaunt
//     nomi va SteamID o'zgarmaydi, hatto Support ham o'zgartira olmaydi; profil
//     nomi istalgan vaqtda o'zgaradi; SteamID64 — 17 xonali raqam.
//   · Steam Guard FAQ (06B0-26E6-2CF8-254C): ikkinchi himoya qatlami, notanish
//     qurilmadan kirishda kod so'raladi.
//   · Bot `steamTopup/orderCreate.js`: login harf bilan boshlanadi, harf/raqam/
//     pastki chiziq, 3-32 belgi; email va SteamID rad etiladi; profil havolasidan
//     `/id/<nom>` qismini o'zi ajratib oladi — lekin custom URL login bilan bir
//     xil bo'lmasligi mumkin, shuning uchun maqola havola qo'yishni TAVSIYA
//     QILMAYDI. Tekshiruv faqat format bo'yicha; mavjudlik yoki egalik
//     tekshirilmaydi.
//   · Mini App `SteamLoginGuide.jsx`: mobil ilovada profil rasmi → pastda
//     «Сменить аккаунт» qatori ostidagi nom; kompyuterda ism → «Об аккаунте».

import type { Article } from "../types";

const article: Article = {
  slug: "steam-login-qayerda-account-name",
  game: "steam",
  type: "trust",
  datePublished: "2026-10-27",
  dateModified: "2026-10-27",
  pillar: false,
  keywords: [
    "steam login qayerda",
    "steam account name nima",
    "steam login nima",
    "steam login va nik farqi",
    "steam id nima",
    "steam login berish xavfsizmi",
    "steam loginni topish",
    "где найти логин steam",
  ],
  locales: {
    uz: {
      title: "Steam login (account name) qayerda turadi va uni berish xavfsizmi",
      metaTitle: "Steam login qayerda turadi va uni berish xavfsizmi",
      metaDescription:
        "Steam login, nik, SteamID va email farqi, account name'ni kompyuter, telefon va brauzerda qayerdan " +
        "ko'rish, nega xato kiritib bo'lmaydi, nima so'ralmaydi.",
      excerpt:
        "Steam'da nik tekshiruvi yo'q, shuning uchun login birinchi martadanoq to'g'ri bo'lishi kerak: to'rt " +
        "xil nomning farqi, loginni uch joydan topish, profil havolasi nega login emas va bot nimani tekshiradi.",
      answer:
        "Steam login (account name) — Steam'ga kirishda yoziladigan nom; u yaratilgandan keyin o'zgarmaydi, hatto " +
        "Steam Support ham o'zgartira olmaydi. Profil nomi (nik) istalgan vaqtda o'zgaradi, SteamID esa 17 xonali " +
        "raqam — ikkalasi login emas. Loginni Steam'da yuqori o'ngdagi ismingiz orqali ochiladigan Account details " +
        "sahifasida ko'rasiz. Uni berish akkauntga kirish imkonini bermaydi; parol va Steam Guard kodi esa hech " +
        "qachon berilmaydi.",
      body: [
        {
          t: "p",
          text:
            "PUBG yoki Mobile Legends'da to'ldirishdan oldin bot nikingizni ko'rsatadi va siz tasdiqlaysiz. Steam'da bunday tekshiruv yo'q: hamyon login bo'yicha to'ldiriladi va login xato bo'lsa, pul mavjud boshqa akkauntga tushadi, Valve esa hamyon pulini akkauntlar orasida ko'chirmaydi. Shuning uchun Steam'da eng muhim savol «qancha turadi» emas, «loginim aynan qaysi» degan savol. Quyida to'rt xil nomning farqi, loginni topishning uch yo'li va bot nimani tekshirib, nimani tekshira olmasligi.",
        },

        { t: "h2", id: "farq", text: "Login, nik, SteamID, email va profil havolasi — besh xil narsa" },
        {
          t: "table",
          caption: "Steam akkauntidagi nomlar. To'ldirishga faqat birinchisi kerak.",
          head: ["Nom", "Qayerda ko'rinadi", "O'zgaradimi", "To'ldirishga kerakmi"],
          rows: [
            ["Account name (login)", "Account details sahifasining boshida", "Yo'q, hech qachon", "Ha — faqat shu"],
            ["Profil nomi (nik)", "Profil, do'stlar ro'yxati, o'yin ichida", "Istalgan vaqtda", "Yo'q"],
            ["SteamID (17 xonali raqam)", "Profil sozlamalarida, custom URL bo'lmasa havolada", "Yo'q", "Yo'q — bot raqamni rad etadi"],
            ["Email", "Akkaunt sozlamalari", "O'zgartirsa bo'ladi", "Yo'q — bot @ bilan nomni rad etadi"],
            ["Profil havolasi (custom URL)", "steamcommunity.com/id/… manzili", "O'zgaradi", "Yo'q — login bilan bir xil bo'lmasligi mumkin"],
          ],
        },
        {
          t: "p",
          text:
            "Eng ko'p chalkashlik nik bilan. Nik ko'zga ko'rinadigan, chiroyli va boshqa odamlarda ham takrorlanadigan nom; login esa ro'yxatdan o'tishda bir marta tanlangan va qotib qolgan. Steam Support rasmiy sahifasida buni aniq yozgan: akkaunt nomi va SteamID o'zgarmaydi, profil nomi esa istalgan vaqtda o'zgaradi.",
        },

        { t: "h2", id: "kompyuter", text: "Kompyuterda: Account details sahifasi" },
        {
          t: "list",
          ordered: true,
          items: [
            "Steam ilovasida yuqori o'ngdagi ismingizni bosing — menyu ochiladi.",
            "Menyudan «Account details» (ruscha interfeysda «Об аккаунте») qatorini tanlang.",
            "Sahifaning eng tepasida ismingiz, uning ostida esa «Account name: …» qatori turadi — ikki nuqtadan keyingi so'z sizning loginingiz.",
            "Uni belgilab nusxalang. Qo'lda yozsangiz, oldida yoki oxirida bo'shliq qolib ketmasin.",
          ],
        },

        { t: "h2", id: "mobil", text: "Mobil Steam ilovasida" },
        {
          t: "list",
          ordered: true,
          items: [
            "Ilovani oching va yuqoridagi profil rasmingizni bosing.",
            "Ochilgan sahifada pastga tushing: «Change account» (ruscha «Сменить аккаунт») qatorini toping.",
            "Shu qator ostida yozilgan qisqa nom — loginingiz. Ustidagi katta harfli nom nik, u emas.",
            "Ishonch hosil qilish uchun o'sha sahifadan «Account details» ga ham kirib, «Account name» qatorini solishtiring.",
          ],
        },
        {
          t: "p",
          text:
            "Uchinchi yo'l — brauzer: store.steampowered.com/account sahifasiga kiring, login sahifa boshida ko'rsatiladi. Brauzer yoki ilova sizni avtomatik kiritib yuborgan bo'lsa, loginni eslab qolmagan bo'lishingiz tabiiy — aynan shu sahifalar uni ko'rsatadi, chiqib-qayta kirish shart emas.",
        },

        { t: "h2", id: "havola", text: "Profil havolasi nega login emas" },
        {
          t: "p",
          text:
            "Ko'pchilik profil manzilini yuboradi: steamcommunity.com/id/ dan keyingi so'zni login deb o'ylaydi. Bu custom URL — profil sozlamalarida o'zingiz tanlaydigan va istalgan vaqtda o'zgartiradigan nom. U login bilan bir xil bo'lishi ham, butunlay boshqa bo'lishi ham mumkin. GemPay boti havola qo'yilsa, undan shu qismni o'zi ajratib oladi, lekin u haqiqatan login ekanini tekshira olmaydi. Shuning uchun havola emas, Account details'dagi qatorni oling.",
        },
        {
          t: "note",
          tone: "warn",
          title: "Custom URL login bilan bir xil bo'lmasa",
          text:
            "Pul o'sha custom URL nomiga ega bo'lgan boshqa akkauntga tushishi yoki provayder tomonidan rad etilishi mumkin. Birinchi holatda pul qaytmaydi. Bitta qoida: botga faqat «Account name» qatoridagi nom kiritiladi.",
        },

        { t: "h2", id: "bot", text: "GemPay boti nimani tekshiradi — va nimani tekshira olmaydi" },
        {
          t: "p",
          text:
            "Bot loginni formati bo'yicha tekshiradi: u harf bilan boshlanishi, faqat harf, raqam va pastki chiziqdan iborat bo'lishi kerak. Email kiritsangiz, bot «Email emas, Steam login kiriting» deydi; raqamli SteamID kiritsangiz, uni ham rad etadi. Bu tekshiruv yozuv xatolarining bir qismini ushlaydi, lekin ikki narsani bila olmaydi: bunday login umuman mavjudmi va u sizniki mi. Steam provayderlarga nikni so'rab olish imkonini bermaydi — shuning uchun o'yinlardagi kabi tasdiqlash oynasi bu yerda yo'q.",
        },
        {
          t: "facts",
          items: [
            { k: "Tekshiriladi", v: "Format: harf bilan boshlanadi, harf, raqam, pastki chiziq, 3-32 belgi" },
            { k: "Tekshirilmaydi", v: "Login mavjudligi va u sizga tegishli ekani" },
            { k: "Natija", v: "Mavjud bo'lmagan login — buyurtma xato bilan to'xtaydi, pul qaytadi; mavjud, lekin begona login — pul o'sha akkauntga tushadi va qaytmaydi" },
            { k: "Sizning tekshiruvingiz", v: "Account details'dagi qator bilan harfma-harf solishtirish" },
          ],
        },

        { t: "h2", id: "xavfsizlik", text: "Loginni berish xavfsizmi va nima hech qachon berilmaydi" },
        {
          t: "p",
          text:
            "Login o'zi akkauntga kirish uchun yetarli emas: kirish uchun parol va, Steam Guard yoqilgan bo'lsa, notanish qurilmada kod ham kerak. Steam Guard aynan shu uchun: u login va paroldan keyingi ikkinchi himoya qatlami. Shuning uchun loginni to'ldirish xizmatiga berish akkauntni ochmaydi. Xavf boshqa joyda — quyidagilarni so'ragan odamda.",
        },
        {
          t: "list",
          items: [
            "<strong>Parol.</strong> Hech qanday to'ldirish uchun kerak emas. So'ragan xizmat akkauntni olmoqchi.",
            "<strong>Steam Guard kodi.</strong> Bu kod kirishni tasdiqlaydi — uni aytgan paytingizda kimdir kirmoqda.",
            "<strong>Email paroli.</strong> Pochta orqali Steam parolini ham tiklab olishadi.",
            "<strong>«Steam Support» nomidan yozgan odamga ma'lumot.</strong> Rasmiy yordam faqat help.steampowered.com orqali ishlaydi, chatda kod so'ramaydi.",
            "<strong>Trade yoki «buyumingizni tekshirish» havolalari.</strong> Klassik akkaunt o'g'irlash yo'li — soxta kirish sahifasi.",
          ],
        },
        {
          t: "p",
          text:
            "Umumiy qoida barcha o'yinlar uchun bir xil va <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">xavfsiz to'ldirish qo'llanmasida</a> batafsil: ochiq identifikator beriladi, parol va kodlar hech qachon.",
        },

        { t: "h2", id: "yoqotdim", text: "Loginni eslay olmasam" },
        {
          t: "p",
          text:
            "Kirgan holatda bo'lsangiz — yuqoridagi uch yo'ldan biri, login sahifada ko'rsatiladi. Kira olmasangiz, Steam Support'ning kirish yordam vositasi email yoki telefon raqami orqali akkauntni topib beradi; bu rasmiy sahifada bo'ladi, uchinchi tomon xizmatlarida emas. Loginni «taxminan» eslab yozmang: bitta harf farqi boshqa birovning akkaunti bo'lishi mumkin.",
        },
        { t: "cta", text: "Loginni Account details'dan nusxalang, botga qo'ying, so'mda to'lang — balans o'sha akkauntga tushadi." },

        {
          t: "sources",
          items: [
            { label: "Steam Support: SteamID, Steam Account Names", href: "https://help.steampowered.com/en/faqs/view/2816-BE67-5B69-0FEC", note: "akkaunt nomi va SteamID o'zgarmaydi, profil nomi o'zgaradi" },
            { label: "Steam Support: Steam Guard", href: "https://help.steampowered.com/en/faqs/view/06B0-26E6-2CF8-254C", note: "login va paroldan keyingi ikkinchi himoya qatlami" },
          ],
        },
        {
          t: "links",
          title: "Steam bo'yicha boshqa qo'llanmalar",
          items: [
            { label: "Steam hamyoni nima va uni so'mda qanday to'ldirish", href: "/blog/steam-hamyoni-nima-va-somda-toldirish" },
            { label: "Steam balansi tushmadi: sabablari va yechimi", href: "/blog/steam-balansi-tushmadi-nima-qilish" },
            { label: "Steam hamyonini to'ldirish sahifasi", href: "/oyinlar/steam" },
            { label: "O'yin hisobini xavfsiz to'ldirish — umumiy qoida", href: "/blog/oyin-pul-xavfsiz-toldirish" },
          ],
        },
      ],
      faq: [
        { q: "Login va nik bir xil bo'lsa-chi?", a: "Bo'lishi mumkin, lekin tekshirib ko'ring: nik istalgan vaqtda o'zgaradi va boshqalarda takrorlanadi, login esa yagona va o'zgarmas. Botga Account details'dagi qatorni kiriting, nikni emas." },
        { q: "Email bilan to'ldirsa bo'ladimi?", a: "Yo'q. Bot @ belgisi bor nomni rad etadi. Email — kirish uchun ishlatiladigan manzil, login esa boshqa, qisqa nom." },
        { q: "SteamID bilan to'ldirsa bo'ladimi?", a: "Yo'q. SteamID 17 xonali raqam, bot uni qabul qilmaydi — provayder hamyonni faqat login bo'yicha to'ldiradi." },
        { q: "Profil havolasini qo'ysam bo'ladimi?", a: "Bot havoladan nomni ajratib oladi, lekin custom URL login bilan bir xil bo'lmasligi mumkin. Pul begona akkauntga ketmasligi uchun havola emas, Account details'dagi nomni kiriting." },
        { q: "Nega bot nikni ko'rsatmaydi, o'yinlarda-ku ko'rsatadi?", a: "O'yin provayderlari ID bo'yicha o'yinchi nomini qaytaradi, Steam esa bunday imkoniyat bermaydi. Shuning uchun Steam'da tekshiruv sizning zimmangizda — loginni solishtiring." },
        { q: "Noto'g'ri login kiritib yubordim, nima bo'ladi?", a: "Bunday login mavjud bo'lmasa, provayder rad etadi va pul qaytariladi. Login mavjud, lekin boshqa odamniki bo'lsa, balans o'sha akkauntga tushadi va Valve uni qaytarmaydi. Shuning uchun to'lovdan oldin solishtirish shart." },
        { q: "Loginni berish akkauntni xavf ostiga qo'yadimi?", a: "Yo'q. Kirish uchun parol va Steam Guard kerak, login yolg'iz hech narsa bermaydi. Parol, Steam Guard kodi va email parolini esa hech kimga bermang." },
      ],
    },

    ru: {
      title: "Где находится логин Steam (account name) и безопасно ли его сообщать",
      metaTitle: "Где логин Steam и безопасно ли его сообщать",
      metaDescription:
        "Логин Steam, ник, SteamID и почта: в чём разница, где увидеть account name на компьютере, в телефоне " +
        "и браузере, почему ошибка необратима, что не спрашивают.",
      excerpt:
        "В Steam нет проверки ника, поэтому логин должен быть верным с первого раза: разница пяти имён, три места, " +
        "где найти логин, почему ссылка на профиль — не логин и что проверяет бот.",
      answer:
        "Логин Steam (account name) — имя, которым вы входите в Steam; после создания оно не меняется, даже Steam " +
        "Support не может его изменить. Имя профиля (ник) меняется когда угодно, SteamID — 17-значное число, и ни " +
        "то, ни другое не логин. Логин виден на странице Account details, которая открывается через ваше имя в " +
        "правом верхнем углу Steam. Сообщить его — не значит дать доступ к аккаунту; пароль и код Steam Guard не " +
        "сообщаются никогда.",
      body: [
        {
          t: "p",
          text:
            "В PUBG или Mobile Legends перед пополнением бот показывает ваш ник, и вы подтверждаете. В Steam такой проверки нет: кошелёк пополняется по логину, и при ошибке в логине деньги уходят на чужой существующий аккаунт, а Valve средства кошелька между аккаунтами не переносит. Поэтому главный вопрос в Steam не «сколько стоит», а «какой именно у меня логин». Ниже — разница пяти имён, три способа найти логин и что бот проверяет, а что проверить не может.",
        },

        { t: "h2", id: "farq", text: "Логин, ник, SteamID, почта и ссылка на профиль — пять разных вещей" },
        {
          t: "table",
          caption: "Имена в аккаунте Steam. Для пополнения нужно только первое.",
          head: ["Имя", "Где видно", "Меняется?", "Нужно для пополнения?"],
          rows: [
            ["Account name (логин)", "В начале страницы Account details", "Нет, никогда", "Да — только оно"],
            ["Имя профиля (ник)", "Профиль, список друзей, в игре", "Когда угодно", "Нет"],
            ["SteamID (17 цифр)", "В настройках профиля, в ссылке без custom URL", "Нет", "Нет — бот отклоняет число"],
            ["Почта", "Настройки аккаунта", "Можно изменить", "Нет — бот отклоняет имя с @"],
            ["Ссылка на профиль (custom URL)", "Адрес steamcommunity.com/id/…", "Меняется", "Нет — может не совпадать с логином"],
          ],
        },
        {
          t: "p",
          text:
            "Чаще всего путают с ником. Ник — видимое, красивое имя, которое может повторяться у других; логин выбран один раз при регистрации и закреплён. Steam Support на официальной странице пишет прямо: имя аккаунта и SteamID не меняются, имя профиля можно менять в любое время.",
        },

        { t: "h2", id: "kompyuter", text: "На компьютере: страница Account details" },
        {
          t: "list",
          ordered: true,
          items: [
            "В приложении Steam нажмите своё имя в правом верхнем углу — откроется меню.",
            "Выберите пункт «Account details» (в русском интерфейсе «Об аккаунте»).",
            "В самом верху страницы — ваше имя, под ним строка «Account name: …». Слово после двоеточия и есть логин.",
            "Выделите и скопируйте его. Если набираете вручную, следите, чтобы не осталось пробела в начале или конце.",
          ],
        },

        { t: "h2", id: "mobil", text: "В мобильном приложении Steam" },
        {
          t: "list",
          ordered: true,
          items: [
            "Откройте приложение и нажмите на свою аватарку вверху.",
            "Прокрутите открывшуюся страницу вниз до строки «Change account» (по-русски «Сменить аккаунт»).",
            "Короткое имя под этой строкой — ваш логин. Крупное имя над ним — ник, он не подходит.",
            "Для уверенности зайдите с той же страницы в «Account details» и сверьте строку «Account name».",
          ],
        },
        {
          t: "p",
          text:
            "Третий путь — браузер: откройте store.steampowered.com/account, логин показан в начале страницы. Если браузер или приложение входят автоматически, вы могли логин просто не запомнить — именно эти страницы его показывают, выходить и входить заново не нужно.",
        },

        { t: "h2", id: "havola", text: "Почему ссылка на профиль — не логин" },
        {
          t: "p",
          text:
            "Многие присылают адрес профиля и считают слово после steamcommunity.com/id/ логином. Это custom URL — имя, которое вы сами выбираете в настройках профиля и можете менять. Оно может совпадать с логином, а может быть совсем другим. Если вставить ссылку, бот GemPay сам вырежет из неё эту часть, но проверить, что это действительно логин, не сможет. Поэтому берите не ссылку, а строку из Account details.",
        },
        {
          t: "note",
          tone: "warn",
          title: "Если custom URL не совпадает с логином",
          text:
            "Деньги могут уйти на другой аккаунт, у которого такой логин есть, или провайдер отклонит заказ. В первом случае деньги не вернуть. Одно правило: в бот вводится только имя из строки «Account name».",
        },

        { t: "h2", id: "bot", text: "Что проверяет бот GemPay — и чего проверить не может" },
        {
          t: "p",
          text:
            "Бот проверяет логин по формату: он должен начинаться с буквы и состоять только из букв, цифр и подчёркивания. Введёте почту — бот ответит «Email emas, Steam login kiriting»; введёте числовой SteamID — тоже отклонит. Эта проверка ловит часть опечаток, но двух вещей знать не может: существует ли такой логин и ваш ли он. Steam не даёт провайдерам запросить ник — поэтому окна подтверждения, как в играх, здесь нет.",
        },
        {
          t: "facts",
          items: [
            { k: "Проверяется", v: "Формат: начинается с буквы, буквы, цифры, подчёркивание, 3-32 символа" },
            { k: "Не проверяется", v: "Существование логина и его принадлежность вам" },
            { k: "Результат", v: "Несуществующий логин — заказ остановится с ошибкой, деньги вернутся; существующий чужой логин — деньги уйдут на тот аккаунт и не вернутся" },
            { k: "Ваша проверка", v: "Сверить побуквенно со строкой в Account details" },
          ],
        },

        { t: "h2", id: "xavfsizlik", text: "Безопасно ли сообщать логин и что не сообщают никогда" },
        {
          t: "p",
          text:
            "Одного логина для входа недостаточно: нужен пароль, а при включённом Steam Guard — ещё и код на незнакомом устройстве. Steam Guard для того и существует: это второй уровень защиты после логина и пароля. Поэтому логин, сообщённый сервису пополнения, аккаунт не открывает. Опасность в другом — в тех, кто просит перечисленное ниже.",
        },
        {
          t: "list",
          items: [
            "<strong>Пароль.</strong> Не нужен ни для какого пополнения. Сервис, который его просит, хочет забрать аккаунт.",
            "<strong>Код Steam Guard.</strong> Этот код подтверждает вход — пока вы его называете, кто-то входит.",
            "<strong>Пароль от почты.</strong> Через почту сбрасывают и пароль Steam.",
            "<strong>Данные человеку, пишущему от имени «Steam Support».</strong> Официальная поддержка работает только через help.steampowered.com и не спрашивает коды в чате.",
            "<strong>Ссылки на «проверку предмета» или трейд.</strong> Классический угон аккаунта через поддельную страницу входа.",
          ],
        },
        {
          t: "p",
          text:
            "Общее правило для всех игр одно и подробно разобрано в <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">руководстве по безопасному пополнению</a>: открытый идентификатор сообщается, пароль и коды — никогда.",
        },

        { t: "h2", id: "yoqotdim", text: "Если не помню логин" },
        {
          t: "p",
          text:
            "Если вы вошли в аккаунт — любой из трёх способов выше, логин показан на странице. Если войти не получается, инструмент помощи со входом в Steam Support найдёт аккаунт по почте или телефону; это происходит на официальной странице, а не в сторонних сервисах. Не вводите логин «по памяти, примерно»: разница в одну букву может оказаться чужим аккаунтом.",
        },
        { t: "cta", text: "Скопируйте логин из Account details, вставьте в бот, оплатите в сумах — баланс придёт на тот самый аккаунт." },

        {
          t: "sources",
          items: [
            { label: "Steam Support: SteamID, Steam Account Names", href: "https://help.steampowered.com/en/faqs/view/2816-BE67-5B69-0FEC", note: "имя аккаунта и SteamID не меняются, имя профиля меняется" },
            { label: "Steam Support: Steam Guard", href: "https://help.steampowered.com/en/faqs/view/06B0-26E6-2CF8-254C", note: "второй уровень защиты после логина и пароля" },
          ],
        },
        {
          t: "links",
          title: "Другие руководства по Steam",
          items: [
            { label: "Что такое кошелёк Steam и как пополнить его за сумы", href: "/blog/steam-hamyoni-nima-va-somda-toldirish" },
            { label: "Баланс Steam не пришёл: причины и решение", href: "/blog/steam-balansi-tushmadi-nima-qilish" },
            { label: "Страница пополнения кошелька Steam", href: "/oyinlar/steam" },
            { label: "Как безопасно пополнить игровой аккаунт — общее правило", href: "/blog/oyin-pul-xavfsiz-toldirish" },
          ],
        },
      ],
      faq: [
        { q: "А если логин и ник одинаковые?", a: "Бывает, но проверьте: ник меняется когда угодно и повторяется у других, логин — единственный и постоянный. В бот вводите строку из Account details, а не ник." },
        { q: "Можно пополнить по почте?", a: "Нет. Бот отклоняет имя со знаком @. Почта — адрес для входа, а логин — другое, короткое имя." },
        { q: "Можно пополнить по SteamID?", a: "Нет. SteamID — 17-значное число, бот его не принимает: провайдер пополняет кошелёк только по логину." },
        { q: "Можно вставить ссылку на профиль?", a: "Бот вырежет имя из ссылки, но custom URL может не совпадать с логином. Чтобы деньги не ушли на чужой аккаунт, вводите не ссылку, а имя из Account details." },
        { q: "Почему бот не показывает ник, как в играх?", a: "Игровые провайдеры возвращают имя игрока по ID, а Steam такой возможности не даёт. Поэтому в Steam проверка на вас — сверяйте логин." },
        { q: "Ввёл неверный логин, что будет?", a: "Если такого логина нет, провайдер отклонит заказ и деньги вернутся. Если логин существует и принадлежит другому человеку, баланс уйдёт на его аккаунт, и Valve его не вернёт. Поэтому сверка до оплаты обязательна." },
        { q: "Сообщённый логин ставит аккаунт под угрозу?", a: "Нет. Для входа нужны пароль и Steam Guard, один логин ничего не даёт. А вот пароль, код Steam Guard и пароль от почты не сообщайте никому." },
      ],
    },
  },
};

export default article;
