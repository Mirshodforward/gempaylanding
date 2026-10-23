// Taqqoslash: Telegram Stars, o'yin valyutasi (UC/olmos/CP/token), Steam
// balansi va Premium. 2026-10-22.
//
// NEGA SHU MAVZU: GemPay'da to'rt xil «pul» bitta ekranda sotiladi
// va mijoz ularni aralashtiradi («Stars bilan UC olsam bo'ladimi?»).
// starstg.uz'da bunday taqqoslov yo'q (o'xshash maqola 2026-09-21 da
// o'chirilib, umumiy o'yin maqolasiga yo'naltirilgan) — bu GemPay uchun
// bo'sh va o'ziga xos burchak.

import type { Article } from "../types";
import { STARS_UNIT_CARD, STARS_MIN, STARS_MAX, som, num } from "../../telegram";

const uz = (n: number) => som(n, "uz");
const ru = (n: number) => som(n, "ru");

const article: Article = {
  slug: "telegram-stars-yoki-oyin-valyutasi",
  game: null,
  type: "comparison",
  datePublished: "2026-10-23",
  dateModified: "2026-10-23",
  pillar: false,
  keywords: [
    "telegram stars yoki uc",
    "stars va o'yin valyutasi farqi",
    "telegram stars bilan uc olish",
    "uc olmos stars farqi",
    "steam balansi va stars",
    "telegram stars nima",
    "stars vs uc",
    "telegram stars или uc",
  ],
  locales: {
    uz: {
      title: "Telegram Stars, UC, olmos va Steam balansi: qaysi valyuta nimaga kerak",
      metaTitle: "Telegram Stars yoki UC va olmos — farqi nimada",
      metaDescription:
        "Telegram Stars, PUBG UC, olmos va Steam balansi — qayerda ishlaydi, nima so'raladi, bir-biriga " +
        "aylanadimi. Taqqoslash jadvali, GemPay'da qaysi bo'lim.",
      excerpt:
        "To'rt xil «pul» bitta joyda sotiladi, lekin ular bir-birining o'rnini bosmaydi. Jadval bilan: qayerda " +
        "sarflanadi, nima bilan olinadi, qaytariladimi va qaysi vaziyatda qaysi biri kerak.",
      answer:
        "Telegram Stars faqat Telegram ichida (sovg'a, bot, reaksiya, pullik post) ishlaydi va o'yin valyutasiga " +
        "aylanmaydi. PUBG UC, Mobile Legends olmosi va CODM CP faqat o'z o'yinida amal qiladi, Steam balansi esa Steam " +
        "do'konida. GemPay'da hammasi so'mda olinadi: Stars — «Telegram» bo'limida @username bilan, o'yin " +
        "valyutasi — katalogda Player ID bilan, Steam — login bilan.",
      body: [
        {
          t: "p",
          text:
            "GemPay'ga kirgan odam bitta ekranda to'rt xil narsani ko'radi: Stars va Premium plitkalari, o'yinlar katalogi va Steam. Hammasi so'mda, hammasi bitta Mini App'da — shuning uchun «Stars olib, keyin UC ga almashtirsam bo'ladimi?» degan savol tez-tez keladi. Javob: yo'q, va buning sababi muhim. Quyida har bir «valyuta» qayerda ishlashi, nima so'ralishi va qaytariladimi — avval jadvalda, keyin alohida.",
        },

        { t: "h2", id: "jadval", text: "Bir jadvalda" },
        {
          t: "table",
          caption: "GemPay'da sotiladigan to'rt xil mahsulot — bir-biriga aylanmaydi.",
          head: ["Mahsulot", "Qayerda ishlaydi", "Nima so'raladi", "Ilovaning qaysi bo'limi", "Yetkazish"],
          rows: [
            ["Telegram Stars", "Telegram: sovg'a, bot, reaksiya, pullik post", "@username", "«Telegram» bo'limi", "Bir necha soniya"],
            ["Telegram Premium", "Telegram obunasi — valyuta emas", "@username", "«Telegram» bo'limi", "Bir necha soniya"],
            ["UC, olmos, CP, token", "Faqat o'z o'yinida", "Player ID (ba'zida Server ID yoki platforma)", "O'yinlar katalogi", "1-5 daqiqa"],
            ["Steam balansi", "Steam do'koni", "Steam login (account name)", "Katalog — Steam", "~1 daqiqa"],
          ],
        },

        { t: "h2", id: "stars", text: "Telegram Stars — messenjer ichidagi valyuta" },
        {
          t: "p",
          text:
            `Stars'ni Telegram 2024-yilda kiritgan: botlar va Mini App'lardagi raqamli xizmatlar, sovg'alar, pullik postlar va reaksiyalar shu valyuta bilan to'lanadi. U hamyondagi pul emas — o'zingizning Telegram akkauntingizga bog'langan balans. GemPay'da yulduzlar «Telegram» bo'limida, @username bo'yicha, ${STARS_MIN} dan ${num(STARS_MAX)} donagacha sotiladi; narxi qat'iy, donasi ${uz(STARS_UNIT_CARD)}dan. Batafsil oqim <a href="/blog/telegram-stars-sotib-olish-gempay">Stars sotib olish qo'llanmasida</a>, narx jadvali <a href="/stars">Stars sahifasida</a>.`,
        },
        {
          t: "p",
          text:
            "Asosiy qoida: Stars Telegram'dan tashqariga chiqmaydi. Uni boshqa akkauntga o'tkazib bo'lmaydi, pulga qaytarib bo'lmaydi va — eng muhimi — bironta o'yinning do'koni uni qabul qilmaydi. PUBG Mobile Stars'ni bilmaydi.",
        },

        { t: "h2", id: "oyin", text: "UC, olmos, CP, token — har o'yinning o'z puli" },
        {
          t: "p",
          text:
            "O'yin valyutasini nashriyot chiqaradi va u faqat o'sha o'yinning do'konida ishlaydi: UC — PUBG Mobile'da, olmos — Mobile Legends va Free Fire'da (ikkisi ham alohida!), CP — Call of Duty: Mobile'da, token — Honor of Kings va Asphalt 9'da. Mobile Legends olmosi Free Fire'ga o'tmaydi, garchi ikkalasi «olmos» deb atalsa ham.",
        },
        {
          t: "p",
          text:
            "GemPay'da bu valyutalar katalogda, ochiq Player ID bo'yicha to'ldiriladi. Narx saytda yozilmaydi — u provayder katalogidan jonli keladi va dollar kursiga bog'liq, shuning uchun faqat ilovada, paket tanlanganda ko'rinadi. Yana bir farq: o'yin valyutasida to'lovdan oldin nik tekshiruvi bor — ilova ID bo'yicha o'yinchi nomini ko'rsatadi, siz tasdiqlaysiz. Stars'da buning o'rniga username bo'yicha profil ko'rsatiladi.",
        },

        { t: "h2", id: "steam", text: "Steam balansi — hamyon, valyuta emas" },
        {
          t: "p",
          text:
            "Steam'da o'yin ichidagi valyuta emas, hamyonning o'zi to'ldiriladi: unga tushgan summa Steam do'konidagi istalgan o'yin, DLC yoki ichki xaridga ketadi. GemPay'da buning uchun Steam login (account name) kiritiladi — profildagi nik yoki e-pochta emas. Nik tekshiruvi bu yerda yo'q, shuning uchun loginni o'zingiz diqqat bilan tekshirasiz. Shartlar <a href=\"/oyinlar/steam\">Steam sahifasida</a>.",
        },

        { t: "h2", id: "premium", text: "Premium — obuna, valyuta emas" },
        {
          t: "p",
          text:
            "Premium ro'yxatda turgani uchun uni ham «pul» deb o'ylashadi, lekin u muddatli obuna: 3, 6 yoki 12 oyga Telegram'ning qo'shimcha funksiyalarini ochadi va tugaydi. U hech narsa sotib olmaydi, balansga tushmaydi, o'yinga tegmaydi. O'yinchi uchun nimasi foydali — <a href=\"/blog/telegram-premium-oyinchi-uchun\">alohida maqolada</a>.",
        },

        { t: "h2", id: "aylantirish", text: "Bir-biriga aylanadimi?" },
        {
          t: "facts",
          items: [
            { k: "Stars → UC yoki olmos", v: "Yo'q. O'yin do'konlari Stars'ni qabul qilmaydi" },
            { k: "UC → Stars", v: "Yo'q. O'yin valyutasi o'yindan chiqmaydi" },
            { k: "Steam balansi → o'yin valyutasi", v: "Faqat Steam ichidagi o'yinlarda, Steam do'koni orqali" },
            { k: "Bot balansi → hammasi", v: "Ha. Ilovadagi so'm balansidan istalgan bo'limda to'lasa bo'ladi" },
          ],
        },
        {
          t: "p",
          text:
            "Yagona umumiy nuqta — ilovaning so'm balansi: unga pul tushirsangiz, undan ham Stars, ham UC, ham Steam uchun to'lash mumkin. Lekin bu almashuv emas, to'lov usuli. Alohida eslatma: StarsPaymee botida balansdagi Telegram yulduzlarini so'm balansiga almashtirish xizmati bor — bu GemPay'dagi oqim emas, boshqa bot va <a href=\"https://www.starstg.uz/uz/blog/telegram-stars-sotish-premium-pubg-uc\" target=\"_blank\" rel=\"noopener\">alohida qo'llanma</a>.",
        },

        { t: "h2", id: "qaysi", text: "Qaysi birini olish kerak — vaziyatga qarab" },
        {
          t: "list",
          items: [
            "<strong>Royale Pass, skin, sandiq</strong> → o'sha o'yinning valyutasi (UC, olmos, CP). Katalogdan o'yinni tanlang.",
            "<strong>Steam'dagi o'yin yoki DLC</strong> → Steam balansi, login bilan.",
            "<strong>Telegram'da do'stga sovg'a, stream'ga reaksiya, bot ichidagi xarid</strong> → Stars, username bilan.",
            "<strong>4 GB fayl, reklamasiz kanallar, ovozni matnga</strong> → Premium, username bilan.",
            "<strong>Telegram ichidagi mini-o'yin</strong> → Stars. Bu o'yin valyutasi emas, bot to'lovi.",
          ],
        },

        { t: "h2", id: "xavfsizlik", text: "Nima so'raladi va nima so'ralmaydi" },
        {
          t: "p",
          text:
            "To'rt mahsulotning hammasida so'raladigan narsa — OCHIQ identifikator: username, Player ID yoki Steam login. Bularni bilgan odam sizga narsa yubora oladi, lekin akkauntingizga kira olmaydi. Parol, SMS kod, Telegram kirish kodi yoki Steam Guard kodi hech qaysi bo'limda so'ralmaydi — so'ralsa, bu GemPay emas.",
        },
        {
          t: "note",
          tone: "warn",
          title: "Bitta farq: nik tekshiruvi",
          text:
            "O'yin valyutasida ilova ID bo'yicha nikni ko'rsatadi, Stars va Premium'da — username bo'yicha profilni. Steam'da esa tekshiruv yo'q: login noto'g'ri bo'lsa, pul begona hisobga tushadi va qaytmaydi. Steam loginini sozlamalardan nusxalab oling, xotiradan yozmang.",
        },

        { t: "h2", id: "narx", text: "Narxni qayerdan ko'rish" },
        {
          t: "p",
          text:
            "Stars va Premium narxi qat'iy va <a href=\"/stars\">Stars</a> hamda <a href=\"/premium\">Premium</a> sahifalarida jadval bilan turadi. O'yin valyutasi va Steam narxi esa faqat ilovada: ular provayderdan jonli keladi va kursga qarab o'zgaradi — saytga yozilgan raqam bir haftada noto'g'ri bo'lib qolardi. Har ikki holda ham yakuniy summa to'lov tugmasidan oldin ekranda ko'rinadi.",
        },
        { t: "cta", text: "Kerakli bo'limni tanlang: Stars va Premium — «Telegram» plitkalarida, UC, olmos va Steam — katalogda." },

        {
          t: "sources",
          items: [
            { label: "Telegram Stars — rasmiy e'lon", href: "https://telegram.org/blog/telegram-stars", note: "Stars qayerda ishlaydi va nimaga sarflanadi" },
            { label: "Telegram Premium FAQ", href: "https://telegram.org/faq_premium", note: "Premium obuna ekani va nimalarni ochishi" },
            { label: "Bot Payments API: Telegram Stars", href: "https://core.telegram.org/bots/payments-stars", note: "Mini App va botlardagi Stars to'lovi" },
          ],
        },
        {
          t: "links",
          title: "Shu mavzudagi sahifalar",
          items: [
            { label: "Telegram Stars — narxlar va savol-javob", href: "/stars" },
            { label: "Telegram Premium — narxlar va savol-javob", href: "/premium" },
            { label: "O'yinlar katalogi — 10 ta xizmat", href: "/oyinlar" },
            { label: "PUBG Mobile UC to'ldirish", href: "/oyinlar/pubg-mobile" },
            { label: "Steam hamyonini to'ldirish", href: "/oyinlar/steam" },
            { label: "Telegram Stars sotib olish — GemPay'da", href: "/blog/telegram-stars-sotib-olish-gempay" },
            { label: "Telegram Premium o'yinchiga nima beradi", href: "/blog/telegram-premium-oyinchi-uchun" },
          ],
        },
      ],
      faq: [
        { q: "Stars bilan PUBG UC olsa bo'ladimi?", a: "Yo'q. PUBG Mobile do'koni Stars'ni qabul qilmaydi va GemPay ham ularni almashtirmaydi. UC katalogdan, Player ID bo'yicha, so'mda olinadi." },
        { q: "UC yoki olmosni Stars'ga aylantirsa-chi?", a: "Ham yo'q. O'yin valyutasi o'yin ichidan chiqmaydi — uni na pulga, na Stars'ga qaytarib bo'ladi." },
        { q: "Stars qaytariladimi?", a: "Balansga tushgach — yo'q, bu Telegram qoidasi. Texnik sabab bilan umuman yuborilmagan bo'lsa, to'lov to'liq qaytariladi." },
        { q: "UC yoki olmos qaytariladimi?", a: "Hisobga tushgach — yo'q, o'yin valyutasini chiqarib bo'lmaydi. Shuning uchun to'lovdan oldin nik tekshiruvi bor. Buyurtma bajarilmasa, pul qaytariladi." },
        { q: "Premium bilan o'yinda bonus bormi?", a: "Yo'q. Premium Telegram obunasi, u o'yin akkauntiga tegmaydi va hech qanday o'yin bonusi bermaydi." },
        { q: "Nega Stars narxi saytda bor, UC niki yo'q?", a: "Stars va Premium tarifi qat'iy va oylab o'zgarmaydi. UC va olmos narxi provayder katalogidan jonli keladi va dollar kursiga bog'liq — saytga yozilsa tez eskiradi, shuning uchun u faqat ilovada." },
        { q: "Bitta buyurtmada Stars va UC ni birga olsa bo'ladimi?", a: "Yo'q, bular alohida bo'limlar va alohida buyurtmalar. Lekin ikkalasini ham ilovadagi bitta so'm balansidan to'lash mumkin." },
      ],
    },

    ru: {
      title: "Telegram Stars, UC, алмазы и баланс Steam: какая валюта для чего нужна",
      metaTitle: "Telegram Stars или UC и алмазы — в чём разница",
      metaDescription:
        "Telegram Stars, UC для PUBG, алмазы и баланс Steam — где работают, что спрашивают, конвертируются ли. " +
        "Таблица для игрока и в каком разделе GemPay что покупается.",
      excerpt:
        "Четыре вида «денег» продаются в одном месте, но не заменяют друг друга. С таблицей: где тратятся, " +
        "чем покупаются, возвращаются ли и в какой ситуации какое нужно.",
      answer:
        "Telegram Stars работают только внутри Telegram (подарки, боты, реакции, платные посты) и в игровую валюту не " +
        "превращаются. UC для PUBG, алмазы Mobile Legends и CP для CODM действуют только в своей игре, баланс Steam — в " +
        "магазине Steam. В GemPay всё покупается за сумы: Stars — в разделе «Telegram» по @username, игровая " +
        "валюта — в каталоге по Player ID, Steam — по логину.",
      body: [
        {
          t: "p",
          text:
            "Открыв GemPay, человек видит на одном экране четыре разные вещи: плитки Stars и Premium, каталог игр и Steam. Всё за сумы, всё в одном Mini App — поэтому вопрос «куплю Stars, а потом обменяю на UC?» приходит регулярно. Ответ: нет, и причина важна. Ниже — где работает каждая «валюта», что для неё спрашивают и возвращается ли она: сначала в таблице, затем по отдельности.",
        },

        { t: "h2", id: "jadval", text: "В одной таблице" },
        {
          t: "table",
          caption: "Четыре продукта в GemPay — друг в друга не конвертируются.",
          head: ["Продукт", "Где работает", "Что спрашивают", "Раздел приложения", "Доставка"],
          rows: [
            ["Telegram Stars", "Telegram: подарки, боты, реакции, платные посты", "@username", "Раздел «Telegram»", "Несколько секунд"],
            ["Telegram Premium", "Подписка Telegram — не валюта", "@username", "Раздел «Telegram»", "Несколько секунд"],
            ["UC, алмазы, CP, токены", "Только в своей игре", "Player ID (иногда Server ID или платформа)", "Каталог игр", "1-5 минут"],
            ["Баланс Steam", "Магазин Steam", "Логин Steam (account name)", "Каталог — Steam", "~1 минута"],
          ],
        },

        { t: "h2", id: "stars", text: "Telegram Stars — валюта внутри мессенджера" },
        {
          t: "p",
          text:
            `Stars Telegram ввёл в 2024 году: этой валютой оплачиваются цифровые услуги в ботах и Mini App, подарки, платные посты и реакции. Это не деньги в кошельке, а баланс, привязанный к вашему аккаунту Telegram. В GemPay звёзды продаются в разделе «Telegram» по @username, от ${STARS_MIN} до ${num(STARS_MAX)} штук; цена фиксированная, от ${ru(STARS_UNIT_CARD)} за звезду. Процесс по шагам — в <a href="/blog/telegram-stars-sotib-olish-gempay">руководстве по покупке Stars</a>, таблица цен — на <a href="/stars">странице Stars</a>.`,
        },
        {
          t: "p",
          text:
            "Главное правило: Stars не выходят за пределы Telegram. Их нельзя передать на другой аккаунт, обменять на деньги и — самое важное — ни один игровой магазин их не принимает. PUBG Mobile о Stars не знает.",
        },

        { t: "h2", id: "oyin", text: "UC, алмазы, CP, токены — у каждой игры свои деньги" },
        {
          t: "p",
          text:
            "Игровую валюту выпускает издатель, и работает она только в магазине своей игры: UC — в PUBG Mobile, алмазы — в Mobile Legends и Free Fire (причём это разные алмазы!), CP — в Call of Duty: Mobile, токены — в Honor of Kings и Asphalt 9. Алмазы Mobile Legends в Free Fire не переносятся, хотя называются одинаково.",
        },
        {
          t: "p",
          text:
            "В GemPay эта валюта пополняется в каталоге по открытому Player ID. Цена на сайте не пишется — она приходит из каталога провайдера вживую и зависит от курса доллара, поэтому видна только в приложении при выборе пакета. Ещё отличие: для игровой валюты перед оплатой есть проверка ника — приложение показывает имя игрока по ID, вы подтверждаете. Для Stars вместо этого показывается профиль по username.",
        },

        { t: "h2", id: "steam", text: "Баланс Steam — кошелёк, а не валюта" },
        {
          t: "p",
          text:
            "В Steam пополняется не внутриигровая валюта, а сам кошелёк: сумма на нём идёт на любую игру, DLC или внутреннюю покупку в магазине Steam. В GemPay для этого вводится логин Steam (account name) — не ник из профиля и не почта. Проверки ника здесь нет, поэтому логин вы проверяете сами. Условия — на <a href=\"/oyinlar/steam\">странице Steam</a>.",
        },

        { t: "h2", id: "premium", text: "Premium — подписка, а не валюта" },
        {
          t: "p",
          text:
            "Premium стоит в том же списке, и его тоже принимают за «деньги», но это подписка на срок: на 3, 6 или 12 месяцев она открывает дополнительные функции Telegram и заканчивается. Она ничего не покупает, не ложится на баланс и не касается игр. Что в ней полезно игроку — в <a href=\"/blog/telegram-premium-oyinchi-uchun\">отдельной статье</a>.",
        },

        { t: "h2", id: "aylantirish", text: "Конвертируются ли они друг в друга?" },
        {
          t: "facts",
          items: [
            { k: "Stars → UC или алмазы", v: "Нет. Игровые магазины не принимают Stars" },
            { k: "UC → Stars", v: "Нет. Игровая валюта не покидает игру" },
            { k: "Баланс Steam → игровая валюта", v: "Только в играх внутри Steam, через магазин Steam" },
            { k: "Баланс бота → всё", v: "Да. С сумового баланса приложения можно платить в любом разделе" },
          ],
        },
        {
          t: "p",
          text:
            "Единственная общая точка — сумовой баланс приложения: пополнив его, вы можете платить с него и за Stars, и за UC, и за Steam. Но это не обмен, а способ оплаты. Отдельно отметим: в боте StarsPaymee есть услуга обмена звёзд с баланса Telegram на сумовой баланс — это не процесс в GemPay, а другой бот и <a href=\"https://www.starstg.uz/ru/blog/telegram-stars-sotish-premium-pubg-uc\" target=\"_blank\" rel=\"noopener\">отдельное руководство</a>.",
        },

        { t: "h2", id: "qaysi", text: "Что покупать — по ситуации" },
        {
          t: "list",
          items: [
            "<strong>Royale Pass, скин, ящик</strong> → валюта той игры (UC, алмазы, CP). Выберите игру в каталоге.",
            "<strong>Игра или DLC в Steam</strong> → баланс Steam, по логину.",
            "<strong>Подарок другу в Telegram, реакция стримеру, покупка внутри бота</strong> → Stars, по username.",
            "<strong>Файлы до 4 ГБ, каналы без рекламы, голос в текст</strong> → Premium, по username.",
            "<strong>Мини-игра внутри Telegram</strong> → Stars. Это не игровая валюта, а оплата боту.",
          ],
        },

        { t: "h2", id: "xavfsizlik", text: "Что спрашивают и что нет" },
        {
          t: "p",
          text:
            "Во всех четырёх случаях спрашивают ОТКРЫТЫЙ идентификатор: username, Player ID или логин Steam. Зная их, вам можно что-то отправить, но войти в аккаунт нельзя. Пароль, SMS-код, код входа в Telegram или код Steam Guard не запрашиваются ни в одном разделе — если спрашивают, это не GemPay.",
        },
        {
          t: "note",
          tone: "warn",
          title: "Одно отличие: проверка ника",
          text:
            "Для игровой валюты приложение показывает ник по ID, для Stars и Premium — профиль по username. В Steam проверки нет: при неверном логине деньги уйдут на чужой аккаунт и не вернутся. Скопируйте логин Steam из настроек, не пишите по памяти.",
        },

        { t: "h2", id: "narx", text: "Где смотреть цену" },
        {
          t: "p",
          text:
            "Цены Stars и Premium фиксированные и стоят таблицами на страницах <a href=\"/stars\">Stars</a> и <a href=\"/premium\">Premium</a>. Цены игровой валюты и Steam — только в приложении: они приходят от провайдера вживую и меняются вслед за курсом, число на сайте устарело бы за неделю. В обоих случаях итоговая сумма видна на экране до кнопки оплаты.",
        },
        { t: "cta", text: "Выберите нужный раздел: Stars и Premium — на плитках «Telegram», UC, алмазы и Steam — в каталоге." },

        {
          t: "sources",
          items: [
            { label: "Telegram Stars — официальный анонс", href: "https://telegram.org/blog/telegram-stars", note: "где работают Stars и на что тратятся" },
            { label: "Telegram Premium FAQ", href: "https://telegram.org/faq_premium", note: "Premium — подписка и что она открывает" },
            { label: "Bot Payments API: Telegram Stars", href: "https://core.telegram.org/bots/payments-stars", note: "оплата Stars в Mini App и ботах" },
          ],
        },
        {
          t: "links",
          title: "По теме",
          items: [
            { label: "Telegram Stars — цены и ответы", href: "/stars" },
            { label: "Telegram Premium — цены и ответы", href: "/premium" },
            { label: "Каталог игр — 10 сервисов", href: "/oyinlar" },
            { label: "Пополнение UC в PUBG Mobile", href: "/oyinlar/pubg-mobile" },
            { label: "Пополнение кошелька Steam", href: "/oyinlar/steam" },
            { label: "Купить Telegram Stars — в GemPay", href: "/blog/telegram-stars-sotib-olish-gempay" },
            { label: "Что Telegram Premium даёт игроку", href: "/blog/telegram-premium-oyinchi-uchun" },
          ],
        },
      ],
      faq: [
        { q: "Можно купить UC для PUBG за Stars?", a: "Нет. Магазин PUBG Mobile не принимает Stars, и GemPay их не обменивает. UC покупаются в каталоге по Player ID, за сумы." },
        { q: "А UC или алмазы превратить в Stars?", a: "Тоже нет. Игровая валюта не покидает игру — её нельзя вернуть ни в деньги, ни в Stars." },
        { q: "Возвращаются ли Stars?", a: "После зачисления на баланс — нет, таково правило Telegram. Если по технической причине они вообще не были отправлены, оплата возвращается полностью." },
        { q: "Возвращаются ли UC или алмазы?", a: "После зачисления — нет, игровую валюту не вывести. Поэтому перед оплатой есть проверка ника. Если заказ не выполнен, деньги возвращаются." },
        { q: "Даёт ли Premium бонусы в игре?", a: "Нет. Premium — подписка Telegram, она не касается игрового аккаунта и никаких игровых бонусов не даёт." },
        { q: "Почему цена Stars есть на сайте, а UC — нет?", a: "Тариф Stars и Premium фиксированный и месяцами не меняется. Цена UC и алмазов приходит из каталога провайдера вживую и зависит от курса доллара — на сайте она быстро устарела бы, поэтому показывается только в приложении." },
        { q: "Можно купить Stars и UC одним заказом?", a: "Нет, это разные разделы и разные заказы. Но оплатить оба можно с одного сумового баланса в приложении." },
      ],
    },
  },
};

export default article;
