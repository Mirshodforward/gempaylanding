// Taqqoslash hub'i — o'yinga xos taqqoslovlar (PUBG, MLBB, Free Fire) shu
// sahifaga havola beradi. Reja: .plan/articles/oyin-valyutasi-qayerdan-arzon.json
// (publishRank 16, pillar). Yozildi: 2026-10-23, qo'lda, uz + ru.
//
// NEGA HUB: uchta o'yin taqqoslovi «qayerdan arzon» degan brendsiz umumiy
// so'rov uchun bir-biri bilan raqobatlashardi. Bu sahifa umumiy so'rovni
// o'ziga oladi: narx NIMADAN yig'iladi, uch yo'l kimga mos, arzonlik ortida
// qanday xavf bor. O'yin maqolalari faqat o'z o'yini nomi bilan keladi.
//
// NARX YO'Q — README qoidasi. Bu yerda birorta so'm summasi yozilmaydi,
// faqat narxning tuzilishi.

import type { Article } from "../types";

const article: Article = {
  slug: "oyin-valyutasi-qayerdan-arzon",
  game: null,
  type: "comparison",
  datePublished: "2026-10-23",
  dateModified: "2026-10-23",
  pillar: true,
  keywords: [
    "o'yin valyutasi qayerdan arzon",
    "o'yin puli qayerdan olish",
    "o'yin to'ldirish qayerda arzon",
    "donat qayerdan olish",
    "o'yin valyutasi narxi nega farq qiladi",
    "o'yin to'ldirish o'zbekiston",
    "uc olmos arzon",
    "где дешевле купить игровую валюту",
  ],
  locales: {
    uz: {
      title: "O'yin valyutasini qayerdan olish arzon: uch yo'l halol taqqoslandi",
      metaTitle: "O'yin puli qayerdan arzon: rasmiy do'kon, sayt, mahalliy",
      metaDescription:
        "UC, olmos va CP ni rasmiy do'kon, xorijiy sayt yoki mahalliy xizmatdan olish: narx nimadan " +
        "yig'iladi, qaysi yo'l O'zbekistonda ishlaydi va arzonlik ortidagi xavf.",
      excerpt:
        "Narx nimadan yig'iladi, nega bir xil paket har joyda boshqacha turadi, uch yo'l kimga mos va " +
        "bozordan ancha arzon taklif nimani anglatadi — o'yin tanlamasdan, umumiy qoida.",
      answer:
        "O'yin valyutasini olishning uch yo'li bor: o'yin ichidagi rasmiy do'kon, xorijiy vositachi sayt va " +
        "mahalliy xizmat. Rasmiy do'kon O'zbekistonda ko'pincha xalqaro karta so'raydi, xorijiy sayt dollarda " +
        "hisoblab konvertatsiya va komissiya qo'shadi. So'mda to'laydigan mahalliy xizmat odatda eng kam " +
        "qo'shimcha xarajat beradi. Eng muhimi: bozor narxidan ancha arzon taklif odatda tejash emas, xavf belgisi.",
      body: [
        {
          t: "p",
          text:
            "«Qayerdan arzon?» degan savolga bitta sayt nomi bilan javob berib bo'lmaydi: narx o'yinga, to'lov usuliga va shu kungi kursga qarab o'zgaradi. Lekin narx NIMADAN yig'ilishini bilsangiz, har qanday taklifni o'zingiz baholay olasiz. Shu maqola o'sha asosni beradi; aniq o'yinlar bo'yicha taqqoslovlar alohida: <a href=\"/blog/pubg-uc-qayerdan-sotib-olish-taqqoslash\">PUBG UC</a>, <a href=\"/blog/mobile-legends-olmos-arzon-qayerdan-olish\">Mobile Legends olmosi</a> va <a href=\"/blog/free-fire-olmos-arzon-qayerdan-olish\">Free Fire olmosi</a>.",
        },

        { t: "h2", id: "uch-yol", text: "Qisqacha: uch yo'l va ular kimga mos" },
        {
          t: "table",
          caption: "O'zbekistondagi o'yinchi uchun asosiy yo'llar yonma-yon. Telegram'dagi shaxsiy sotuvchi alohida qator — u yo'l emas, xavf.",
          head: ["Yo'l", "To'lov", "Nima so'raladi", "Kuchli tomoni", "Zaif tomoni"],
          rows: [
            ["Rasmiy do'kon: o'yin ichi, Google Play, App Store, nashriyot sayti", "Ko'pincha xalqaro karta yoki do'kon balansi", "Hech narsa — akkauntning o'zi", "Eng ishonchli, aksiyalar birinchi shu yerda", "O'zbekiston kartalari ko'pincha o'tmaydi"],
            ["Xorijiy vositachi sayt", "Dollarda: xalqaro karta, PayPal, kripto, gift-card", "Player ID", "Tanlov keng", "Konvertatsiya va komissiya, xorijiy til, uzoq qaytarish"],
            ["Mahalliy xizmat, so'mda", "UzCard, HUMO, Click, Uzum Bank", "Player ID, nik tekshiruvi bilan", "Konvertatsiya yo'q, o'zbek tilida qo'llab-quvvatlash", "Katalog rasmiy do'kondan torroq"],
            ["Telegram'dagi shaxsiy sotuvchi", "Shaxsiy kartaga o'tkazma", "Ko'pincha akkauntning o'zi", "Arzon ko'rinadi", "Chek yo'q, kafolat yo'q, akkaunt xavf ostida"],
          ],
        },

        { t: "h2", id: "narx-nimadan", text: "Nega bir xil paket har joyda boshqacha turadi" },
        {
          t: "p",
          text:
            "Bitta 660 UC yoki 1060 olmos paketining so'mdagi narxi to'rt qatlamdan yig'iladi, va aynan shu qatlamlar saytdan saytga farq qiladi.",
        },
        {
          t: "facts",
          items: [
            { k: "1. Nashriyot bazasi", v: "Narx dollarda yoki hudud valyutasida belgilanadi; arzon hududlar ham bor, lekin akkaunt hududi birinchi kirishda qotib qoladi" },
            { k: "2. Valyuta kursi", v: "Provayderlar odatda USDT yoki dollar kursiga bog'lanadi — kurs siljisa so'mdagi raqam ham siljiydi" },
            { k: "3. To'lov tizimi komissiyasi", v: "Onlayn to'lov shlyuzi har tranzaksiyadan ulush oladi; karta o'tkazmasida bu yo'q yoki kam" },
            { k: "4. Vositachi ustamasi", v: "Xizmatning o'z foydasi — oshkora narxda shu yerda, yashirin narxda esa «komissiya» qatorida chiqadi" },
          ],
        },
        {
          t: "p",
          text:
            "Shuning uchun GemPay saytida o'yin valyutasi narxi yozilmaydi: kurs har kuni o'zgaradi va statik sahifadagi raqam bir haftada yolg'onga aylanadi. Aniq summa botda, paket tanlanganda, to'lovdan oldin ko'rsatiladi — <a href=\"/oyinlar\">har o'yin sahifasida</a> bu alohida aytilgan.",
        },

        { t: "h2", id: "rasmiy", text: "Rasmiy do'kon: qachon eng yaxshi tanlov" },
        {
          t: "p",
          text:
            "Halol bo'laylik: xalqaro kartasi yoki Google Play balansi bor odam uchun o'yin ichidagi do'kon ko'pincha eng oddiy va eng arzon yo'l. Vositachi yo'q, ustama yo'q, birinchi xarid bonusi va mavsumiy aksiyalar avval shu yerda chiqadi, valyuta esa bir zumda tushadi.",
        },
        {
          t: "p",
          text:
            "Muammo O'zbekistonda boshlanadi. Google Play va App Store qabul qiladigan to'lov usullari mamlakat bo'yicha belgilanadi, va UzCard yoki HUMO bu ro'yxatda ko'pincha yo'q; nashriyotning o'z saytlari ham odatda xalqaro karta yoki PayPal kutadi. Natijada rasmiy yo'l «eng arzon, lekin to'lab bo'lmaydigan» bo'lib qoladi. Agar sizda ishlaydigan xalqaro karta bo'lsa — rasmiy do'kondan foydalaning, bu maqola sizga kerak emas.",
        },

        { t: "h2", id: "xorijiy", text: "Xorijiy vositachi saytlar: arzon ko'rinadi, lekin" },
        {
          t: "p",
          text:
            "Xalqaro top-up saytlari paketni dollarda ko'rsatadi va shu raqam ko'pincha mahalliy narxdan kichik ko'rinadi. Yashirin xarajat uch joyda: bankingizning konvertatsiya kursi va xalqaro to'lov komissiyasi, kartaning umuman o'tmasligi ehtimoli, va muammo chiqqanda xorijiy tildagi, sekin qo'llab-quvvatlash. Ba'zilari to'lovni faqat kripto yoki gift-card orqali oladi — bu yana bitta almashuv va yana bitta ustama degani.",
        },
        {
          t: "p",
          text:
            "Yetkazish ham bir xil emas: ayrim saytlar buyurtmani qo'lda bajaradi va soatlab kutish normal hisoblanadi. Qaysi xalqaro saytlar O'zbekiston kartasini qabul qiladi va qaysilari rad etadi — <a href=\"/blog/pubg-uc-qayerdan-sotib-olish-taqqoslash\">PUBG taqqoslovida</a> aniq misollar bilan.",
        },

        { t: "h2", id: "mahalliy", text: "Mahalliy xizmat orqali so'mda" },
        {
          t: "p",
          text:
            "Mahalliy xizmat rasmiy provayder bilan integratsiya qiladi va valyutani Player ID bo'yicha, API orqali yetkazadi. Siz so'mda, odatdagi UzCard, HUMO, Click yoki Uzum Bank bilan to'laysiz, konvertatsiya yo'q, chek va buyurtma tarixi bor, qo'llab-quvvatlash o'zbek tilida. Narx rasmiy do'kondan biroz yuqori bo'lishi mumkin — ustama shu xizmat uchun — lekin xorijiy sayt bilan taqqoslaganda konvertatsiya yo'qotishi yo'qligi ko'pincha farqni yopadi.",
        },
        {
          t: "p",
          text:
            "GemPay shu toifada: o'nta xizmat, to'lovdan oldin bepul nik tekshiruvi va 1-5 daqiqada avtomatik yetkazish. Qaysi o'yinlar borligi <a href=\"/oyinlar\">katalogda</a>, nima so'ralishi va so'ralmasligi esa <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">xavfsiz to'ldirish qo'llanmasida</a>.",
        },

        { t: "h2", id: "xavf", text: "Arzonlik ortidagi xavf belgilari" },
        {
          t: "p",
          text:
            "Bozor narxidan sezilarli past taklif ko'pincha tejash emas: xizmat o'z ustamasini yo'qotib ishlamaydi, demak farq boshqa joydan qoplanadi.",
        },
        {
          t: "list",
          items: [
            "<strong>O'g'irlangan karta bilan to'ldirish.</strong> Valyuta keladi, lekin bir necha kundan keyin karta egasi to'lovni bekor qiladi, nashriyot valyutani olib qo'yadi va akkauntga cheklov yoki blok qo'yishi mumkin.",
            "<strong>Akkauntga kirishni so'rash.</strong> «Kirib to'ldiramiz, shunda arzon» — bu narx emas, akkauntingiz uchun to'lov.",
            "<strong>Shaxsiy kartaga oldindan to'lov.</strong> Chek yo'q, buyurtma raqami yo'q, shikoyat qiladigan joy yo'q.",
            "<strong>Shoshiltirish.</strong> Taymer, «faqat bugun», «oxirgi 3 ta» — o'ylab ko'rishga vaqt bermaslik usuli.",
            "<strong>Soxta skrinshotlar va sharhlar.</strong> Telegram kanalidagi «mijoz» xabarlari bir xil uslubda va bir necha daqiqa oralig'ida yozilgan bo'lsa, ular bitta odamniki.",
          ],
        },
        {
          t: "note",
          tone: "warn",
          title: "Arzon narxning haqiqiy bahosi",
          text:
            "O'g'irlangan karta bilan olingan valyuta nashriyot tomonidan qaytarib olinganda, akkaunt tarixida «chargeback» belgisi qoladi. Ba'zi o'yinlar shundan keyin akkauntni to'ldirishdan umuman cheklab qo'yadi — ya'ni tejalgan pul akkauntning o'ziga tushadi.",
        },

        { t: "h2", id: "royxat", text: "Tanlash uchun tekshiruv ro'yxati" },
        {
          t: "list",
          ordered: true,
          items: [
            "<strong>Nima so'raladi?</strong> Faqat ochiq Player ID bo'lishi kerak. Parol, kod yoki akkaunt so'ralsa — yopib qo'ying.",
            "<strong>Narx qachon ko'rinadi?</strong> To'lovdan oldin, aniq summa sifatida. «To'lab ko'ring, keyin aytamiz» — yo'q.",
            "<strong>Nik tekshiruvi bormi?</strong> ID bo'yicha o'yinchi nomi to'lovdan oldin ko'rsatilishi kerak; Steam'da buning o'rniga loginni o'zingiz tekshirasiz.",
            "<strong>Chek va tarix beriladimi?</strong> Buyurtma raqami bo'lmagan to'lov — isbotlab bo'lmaydigan to'lov.",
            "<strong>Qaytarish shartlari yozilganmi?</strong> Bajarilmagan buyurtma uchun pul qaytishi aniq sahifada turishi kerak.",
            "<strong>Qo'llab-quvvatlash tirikmi?</strong> To'lovdan oldin bitta savol yozib ko'ring — javob tezligi muammo chiqqandagi tezlikni ko'rsatadi.",
            "<strong>Taqqoslashda yakuniy summani oling.</strong> Bonus bilan birga tushadigan miqdorni to'lanadigan oxirgi raqamga bo'ling — bir birlik narxi chiqadi. Faqat shu raqamlarni solishtiring, reklama yozuvini emas.",
          ],
        },
        { t: "cta", text: "Narxni o'zingiz ko'ring: botda o'yinni tanlang, paketni oching — summa so'mda, to'lovdan oldin." },

        {
          t: "sources",
          items: [
            { label: "Google Play: qabul qilinadigan to'lov usullari", href: "https://support.google.com/googleplay/answer/2651410", note: "mamlakat bo'yicha ro'yxat — rasmiy do'kon nega hamma uchun ochiq emas" },
          ],
        },
        {
          t: "links",
          title: "Shu mavzudagi sahifalar",
          items: [
            { label: "O'yinlar katalogi — 10 ta xizmat", href: "/oyinlar" },
            { label: "PUBG UC ni qayerdan olish: Midasbuy va boshqalar", href: "/blog/pubg-uc-qayerdan-sotib-olish-taqqoslash" },
            { label: "Mobile Legends olmosi qayerdan arzon", href: "/blog/mobile-legends-olmos-arzon-qayerdan-olish" },
            { label: "Free Fire olmosi qayerdan arzon va xavfsiz", href: "/blog/free-fire-olmos-arzon-qayerdan-olish" },
            { label: "O'yin hisobini xavfsiz to'ldirish", href: "/blog/oyin-pul-xavfsiz-toldirish" },
            { label: "To'lov va pulni qaytarish", href: "/tolov-va-qaytarish" },
          ],
        },
      ],
      faq: [
        {
          q: "Nega bir xil paket turli saytlarda har xil turadi?",
          a: "Narx to'rt narsadan yig'iladi: nashriyot bazasi, valyuta kursi, to'lov tizimi komissiyasi va vositachi ustamasi. Dollarda hisoblaydigan sayt kurs o'zgarganda avtomatik qimmatlashadi, konvertatsiya yo'qotishi esa bankingiz tomonida qo'shiladi.",
        },
        {
          q: "Eng arzon taklifni tanlash to'g'rimi?",
          a: "Har doim emas. Bozor narxidan sezilarli past taklif odatda ikki narsadan biri: o'g'irlangan karta bilan to'ldirish yoki umuman yetkazmaslik. Birinchisida bir necha kundan keyin o'tkazma bekor qilinadi va akkaunt cheklanishi mumkin.",
        },
        {
          q: "Xizmat akkaunt parolimni so'rasa nima qilay?",
          a: "To'xtating. O'yin valyutasini to'ldirish uchun faqat ochiq Player ID kerak. Parol, SMS kod yoki akkauntni vaqtincha berish hech qanday to'ldirish usulida talab qilinmaydi.",
        },
        {
          q: "Narx qachon aniq ko'rinishi kerak?",
          a: "To'lovdan oldin, aniq summa sifatida, bonus bilan birga. Narxni faqat to'lagandan keyin aytadigan yoki «kelishamiz» deydigan xizmat bilan ishlamang.",
        },
        {
          q: "Kurs ko'tarilsa, allaqachon to'langan buyurtma qimmatlashadimi?",
          a: "Yo'q. Summa buyurtma yaratilgan paytdagi kurs bo'yicha qotiriladi va to'lov o'sha summada o'tadi. Ertangi buyurtma boshqacha turishi normal holat.",
        },
        {
          q: "Nashriyot aksiyasi va sotuvchi aksiyasi — farqi bormi?",
          a: "Ha. Birinchi xarid bonusi yoki mavsumiy qo'shimcha valyutani nashriyot beradi va u qaysi yo'l bilan olsangiz ham akkauntga tushadi. Sotuvchining «aksiyasi» esa faqat uning ustamasi: u tejash ham bo'lishi mumkin, o'g'irlangan karta ham.",
        },
        {
          q: "Chek yoki buyurtma tarixi nega kerak?",
          a: "Bahsli holatda ko'rsatadigan yagona dalil shu. Buyurtma tarixi bo'lmagan xizmatda yetkazilmagan to'lovni isbotlash deyarli imkonsiz.",
        },
      ],
    },

    ru: {
      title: "Где дешевле покупать игровую валюту: три пути в честном сравнении",
      metaTitle: "Где дешевле игровая валюта: магазин, сайт, местный сервис",
      metaDescription:
        "UC, алмазы и CP через официальный магазин, зарубежный сайт или местный сервис: из чего " +
        "складывается цена, какой путь работает в Узбекистане и чем опасна дешевизна.",
      excerpt:
        "Из чего складывается цена, почему один пакет везде стоит по-разному, какой путь кому подходит и что " +
        "означает предложение намного дешевле рынка — общее правило без привязки к игре.",
      answer:
        "Купить игровую валюту можно тремя путями: в официальном магазине игры, на зарубежном сайте-посреднике " +
        "и в местном сервисе. Официальный магазин в Узбекистане обычно требует международную карту, зарубежный " +
        "сайт считает в долларах и добавляет конвертацию с комиссией. Местный сервис с оплатой в сумах обычно " +
        "даёт наименьшие лишние расходы. И главное: цена заметно ниже рынка — обычно не экономия, а признак риска.",
      body: [
        {
          t: "p",
          text:
            "На вопрос «где дешевле?» нельзя ответить названием одного сайта: цена зависит от игры, способа оплаты и курса на сегодня. Но если понимать, ИЗ ЧЕГО она складывается, любое предложение можно оценить самому. Эта статья даёт именно такую основу; сравнения по конкретным играм — отдельно: <a href=\"/blog/pubg-uc-qayerdan-sotib-olish-taqqoslash\">UC для PUBG</a>, <a href=\"/blog/mobile-legends-olmos-arzon-qayerdan-olish\">алмазы Mobile Legends</a> и <a href=\"/blog/free-fire-olmos-arzon-qayerdan-olish\">алмазы Free Fire</a>.",
        },

        { t: "h2", id: "uch-yol", text: "Коротко: три пути и кому они подходят" },
        {
          t: "table",
          caption: "Основные пути для игрока из Узбекистана рядом. Частный продавец в Telegram — отдельная строка: это не путь, а риск.",
          head: ["Путь", "Оплата", "Что спрашивают", "Сильная сторона", "Слабая сторона"],
          rows: [
            ["Официальный магазин: в игре, Google Play, App Store, сайт издателя", "Чаще международная карта или баланс магазина", "Ничего — сам аккаунт", "Самый надёжный, акции появляются здесь первыми", "Карты Узбекистана часто не проходят"],
            ["Зарубежный сайт-посредник", "В долларах: международная карта, PayPal, крипта, подарочные карты", "Player ID", "Широкий выбор", "Конвертация и комиссия, чужой язык, долгий возврат"],
            ["Местный сервис, в сумах", "UzCard, HUMO, Click, Uzum Bank", "Player ID с проверкой ника", "Без конвертации, поддержка на узбекском", "Каталог уже, чем у официального магазина"],
            ["Частный продавец в Telegram", "Перевод на личную карту", "Часто сам аккаунт", "Выглядит дёшево", "Нет чека, нет гарантии, аккаунт под угрозой"],
          ],
        },

        { t: "h2", id: "narx-nimadan", text: "Почему один и тот же пакет везде стоит по-разному" },
        {
          t: "p",
          text: "Цена одного пакета в 660 UC или 1060 алмазов в сумах складывается из четырёх слоёв, и именно они отличаются от сайта к сайту.",
        },
        {
          t: "facts",
          items: [
            { k: "1. База издателя", v: "Цена задаётся в долларах или валюте региона; есть дешёвые регионы, но регион аккаунта фиксируется при первом входе" },
            { k: "2. Курс валюты", v: "Провайдеры обычно привязаны к курсу USDT или доллара — сдвинулся курс, сдвинулась и цифра в сумах" },
            { k: "3. Комиссия платёжной системы", v: "Онлайн-шлюз берёт долю с каждой транзакции; при переводе на карту её нет или она меньше" },
            { k: "4. Наценка посредника", v: "Собственная прибыль сервиса — при честной цене она внутри, при скрытой всплывает строкой «комиссия»" },
          ],
        },
        {
          t: "p",
          text:
            "Поэтому на сайте GemPay цены игровой валюты не пишутся: курс меняется каждый день, и число на статической странице за неделю превращается в ложь. Точная сумма показывается в боте при выборе пакета, до оплаты — на <a href=\"/oyinlar\">странице каждой игры</a> это сказано отдельно.",
        },

        { t: "h2", id: "rasmiy", text: "Официальный магазин: когда это лучший выбор" },
        {
          t: "p",
          text:
            "Скажем честно: для человека с международной картой или балансом Google Play магазин внутри игры — часто самый простой и самый дешёвый путь. Нет посредника, нет наценки, бонус за первую покупку и сезонные акции появляются здесь первыми, а валюта приходит мгновенно.",
        },
        {
          t: "p",
          text:
            "Проблема начинается в Узбекистане. Способы оплаты, которые принимают Google Play и App Store, задаются по странам, и UzCard или HUMO в этом списке часто нет; сайты издателей тоже обычно ждут международную карту или PayPal. В итоге официальный путь оказывается «самым дешёвым, но неоплачиваемым». Если у вас есть рабочая международная карта — пользуйтесь официальным магазином, эта статья вам не нужна.",
        },

        { t: "h2", id: "xorijiy", text: "Зарубежные сайты-посредники: выглядит дёшево, но" },
        {
          t: "p",
          text:
            "Международные top-up сайты показывают пакет в долларах, и эта цифра часто выглядит меньше местной. Скрытые расходы в трёх местах: курс конвертации и комиссия вашего банка за международный платёж, вероятность, что карта вообще не пройдёт, и медленная поддержка на чужом языке, когда что-то пойдёт не так. Часть сайтов принимает оплату только криптой или подарочными картами — это ещё один обмен и ещё одна наценка.",
        },
        {
          t: "p",
          text:
            "Доставка тоже разная: некоторые сайты выполняют заказы вручную, и ожидание часами считается нормой. Какие международные сайты принимают карту из Узбекистана, а какие отклоняют — с конкретными примерами в <a href=\"/blog/pubg-uc-qayerdan-sotib-olish-taqqoslash\">сравнении для PUBG</a>.",
        },

        { t: "h2", id: "mahalliy", text: "Местный сервис за сумы" },
        {
          t: "p",
          text:
            "Местный сервис интегрируется с официальным провайдером и доставляет валюту по Player ID через API. Вы платите в сумах привычными UzCard, HUMO, Click или Uzum Bank, без конвертации, с чеком и историей заказов, поддержка на узбекском. Цена может быть чуть выше, чем в официальном магазине, — наценка за сам сервис, — но по сравнению с зарубежным сайтом отсутствие потерь на конвертации часто закрывает эту разницу.",
        },
        {
          t: "p",
          text:
            "GemPay в этой категории: десять сервисов, бесплатная проверка ника до оплаты и автоматическая доставка за 1-5 минут. Какие игры есть — в <a href=\"/oyinlar\">каталоге</a>, что спрашивают и чего не спрашивают — в <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">руководстве по безопасному пополнению</a>.",
        },

        { t: "h2", id: "xavf", text: "Признаки риска за низкой ценой" },
        {
          t: "p",
          text: "Предложение заметно ниже рынка чаще всего не экономия: сервис не работает себе в убыток, значит разница покрывается откуда-то ещё.",
        },
        {
          t: "list",
          items: [
            "<strong>Пополнение с краденой карты.</strong> Валюта приходит, но через несколько дней владелец карты отменяет платёж, издатель снимает валюту и может ограничить или заблокировать аккаунт.",
            "<strong>Просьба войти в аккаунт.</strong> «Войдём и пополним, так дешевле» — это не цена, это плата вашим аккаунтом.",
            "<strong>Предоплата на личную карту.</strong> Нет чека, нет номера заказа, некуда жаловаться.",
            "<strong>Давление.</strong> Таймер, «только сегодня», «осталось 3» — способ не дать подумать.",
            "<strong>Поддельные скриншоты и отзывы.</strong> Если «клиенты» в Telegram-канале пишут в одном стиле с интервалом в минуты, это один человек.",
          ],
        },
        {
          t: "note",
          tone: "warn",
          title: "Настоящая цена дешёвой цены",
          text:
            "Когда издатель забирает валюту, купленную с краденой карты, в истории аккаунта остаётся отметка о возвратном платеже. Некоторые игры после этого вообще ограничивают аккаунту пополнение — сэкономленные деньги оплачиваются самим аккаунтом.",
        },

        { t: "h2", id: "royxat", text: "Чек-лист для выбора" },
        {
          t: "list",
          ordered: true,
          items: [
            "<strong>Что спрашивают?</strong> Только открытый Player ID. Просят пароль, код или аккаунт — закрывайте.",
            "<strong>Когда видна цена?</strong> До оплаты, точной суммой. «Заплатите, потом скажем» — нет.",
            "<strong>Есть проверка ника?</strong> Имя игрока по ID должно показываться до оплаты; в Steam вместо этого вы сами проверяете логин.",
            "<strong>Дают чек и историю?</strong> Платёж без номера заказа — платёж, который нельзя доказать.",
            "<strong>Прописаны условия возврата?</strong> Возврат за невыполненный заказ должен стоять на отдельной странице.",
            "<strong>Поддержка живая?</strong> Напишите один вопрос до оплаты — скорость ответа покажет скорость при проблеме.",
            "<strong>Сравнивайте итоговую сумму.</strong> Количество с бонусом разделите на последнюю цифру к оплате — получится цена единицы. Сравнивайте только эти цифры, а не рекламные надписи.",
          ],
        },
        { t: "cta", text: "Посмотрите цену сами: выберите игру в боте, откройте пакет — сумма в сумах, до оплаты." },

        {
          t: "sources",
          items: [
            { label: "Google Play: принимаемые способы оплаты", href: "https://support.google.com/googleplay/answer/2651410", note: "список по странам — почему официальный магазин доступен не всем" },
          ],
        },
        {
          t: "links",
          title: "По теме",
          items: [
            { label: "Каталог игр — 10 сервисов", href: "/oyinlar" },
            { label: "Где купить UC для PUBG: Midasbuy и другие", href: "/blog/pubg-uc-qayerdan-sotib-olish-taqqoslash" },
            { label: "Где дешевле алмазы Mobile Legends", href: "/blog/mobile-legends-olmos-arzon-qayerdan-olish" },
            { label: "Где дешевле и безопаснее алмазы Free Fire", href: "/blog/free-fire-olmos-arzon-qayerdan-olish" },
            { label: "Как безопасно пополнить игровой аккаунт", href: "/blog/oyin-pul-xavfsiz-toldirish" },
            { label: "Оплата и возврат", href: "/tolov-va-qaytarish" },
          ],
        },
      ],
      faq: [
        { q: "Почему один пакет на разных сайтах стоит по-разному?", a: "Цена складывается из четырёх частей: база издателя, курс валюты, комиссия платёжной системы и наценка посредника. Сайт, считающий в долларах, дорожает автоматически при росте курса, а потери на конвертации добавляет уже ваш банк." },
        { q: "Правильно ли выбирать самое дешёвое предложение?", a: "Не всегда. Цена заметно ниже рынка — обычно одно из двух: пополнение с краденой карты или вообще отсутствие доставки. В первом случае через несколько дней платёж отменят, а аккаунт могут ограничить." },
        { q: "Что делать, если сервис просит пароль от аккаунта?", a: "Остановиться. Для пополнения игровой валюты нужен только открытый Player ID. Пароль, SMS-код или передача аккаунта не требуются ни при одном способе пополнения." },
        { q: "Когда должна быть видна точная цена?", a: "До оплаты, точной суммой, вместе с бонусом. С сервисом, который называет цену только после оплаты или говорит «договоримся», не работайте." },
        { q: "Если курс вырастет, подорожает ли уже оплаченный заказ?", a: "Нет. Сумма фиксируется по курсу на момент создания заказа, и платёж проходит именно на неё. То, что завтрашний заказ будет стоить иначе, — нормально." },
        { q: "Акция издателя и акция продавца — есть разница?", a: "Да. Бонус за первую покупку или сезонную дополнительную валюту даёт издатель, и она зачисляется, каким бы путём вы ни купили. «Акция» продавца — это только его наценка: это может быть экономия, а может быть краденая карта." },
        { q: "Зачем нужны чек и история заказов?", a: "Это единственное доказательство в спорной ситуации. В сервисе без истории заказов недоставленный платёж почти невозможно доказать." },
      ],
    },
  },
};

export default article;
