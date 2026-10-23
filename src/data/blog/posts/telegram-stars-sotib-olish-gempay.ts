// Telegram Stars — GemPay'dagi oqim bo'yicha qo'llanma. 2026-10-22.
//
// NEGA BU MAQOLA starstg.uz'dagi «ozbekistonda-telegram-stars-sotib-olish»
// ni TAKRORLAMAYDI: u yerda StarsPaymee botining umumiy oqimi yozilgan.
// Bu yerda esa aynan GemPay Mini App'i — o'yin katalogi ustidagi «Telegram»
// plitkasi, o'yinchi nuqtai nazari (jamoadoshga sovg'a, Stars ≠ UC) va
// GemPay'ning to'lov usullari. Ikki sayt bir jamoaniki; bir xil matn ikki
// domenda tursa Google bittasini tashlaydi.
//
// Raqamlar `telegram.ts` dan — matnda qo'lda narx yo'q.

import type { Article } from "../types";
import {
  STARS_UNIT_CARD,
  STARS_UNIT_ONLINE,
  STARS_MIN,
  STARS_MAX,
  starsCardPrice,
  starsOnlinePrice,
  som,
  num,
} from "../../telegram";

const uz = (n: number) => som(n, "uz");
const ru = (n: number) => som(n, "ru");
const MAX = num(STARS_MAX);

const article: Article = {
  slug: "telegram-stars-sotib-olish-gempay",
  game: null,
  type: "howto",
  datePublished: "2026-10-23",
  dateModified: "2026-10-23",
  pillar: true,
  keywords: [
    "telegram stars sotib olish",
    "telegram stars gempay",
    "telegram yulduz sotib olish",
    "stars username orqali",
    "telegram stars uzcard",
    "telegram stars click",
    "telegram stars narxi",
    "купить telegram stars узбекистан",
  ],
  locales: {
    uz: {
      title: "Telegram Stars sotib olish: GemPay'da, so'mda, username orqali",
      metaTitle: "Telegram Stars sotib olish — GemPay'da, so'mda",
      metaDescription:
        `GemPay'da Telegram Stars sotib olish: «Telegram» bo'limi, ${STARS_MIN} dan ${MAX} gacha, ` +
        `faqat @username. UzCard, HUMO, Click, Uzum Bank — donasi ${uz(STARS_UNIT_CARD)}dan.`,
      excerpt:
        "O'yin hisobini to'ldiradigan ilovada yulduzlar ham bor: qaysi bo'limda turadi, nima so'raladi, " +
        "narx qanday hisoblanadi va qaysi uchta xato pul yo'qotadi.",
      answer:
        `Telegram Stars ni GemPay'da sotib olish uchun @Gempayuz_bot ni ochib, «Telegram» bo'limidagi ` +
        `Stars plitkasini bosasiz, ${STARS_MIN} dan ${MAX} gacha miqdor va @username kiritasiz. To'lov so'mda: ` +
        `karta o'tkazmasida donasi ${uz(STARS_UNIT_CARD)}, Click yoki Uzum Bank orqali ${uz(STARS_UNIT_ONLINE)}. ` +
        `Akkauntga kirilmaydi, parol so'ralmaydi; yulduzlar to'lov tasdiqlangach bir necha soniyada tushadi.`,
      body: [
        {
          t: "p",
          text:
            "GemPay ko'pchilik uchun PUBG UC yoki Mobile Legends olmosi uchun Telegram'dagi Mini App. Lekin o'sha Mini App'ning yuqori qismida, o'yinlar ro'yxatidan oldin, uchta plitka turadi: Stars, Premium va Gift. Bu maqola birinchisi haqida — Telegram yulduzlarini shu yerdan qanday olish, nima so'ralishi, narx qanday hisoblanishi va qaysi xatolar pul yo'qotishi haqida. Narxlar jadvali va savol-javob <a href=\"/stars\">Telegram Stars sahifasida</a> ham bor; bu yerda esa jarayon qadamma-qadam.",
        },

        { t: "h2", id: "nima-kerak", text: "Boshlashdan oldin: nima kerak va nima kerak emas" },
        {
          t: "facts",
          items: [
            { k: "Kerak", v: "Telegram akkaunti va unda o'rnatilgan @username" },
            { k: "To'lov", v: "UzCard, HUMO, Click, Uzum Bank yoki bot balansi — so'mda" },
            { k: "Miqdor", v: `Bir buyurtmada ${STARS_MIN} dan ${MAX} donagacha` },
            { k: "Kerak emas", v: "Parol, SMS kod, Visa/Mastercard, Apple ID balansi, VPN" },
          ],
        },
        {
          t: "p",
          text:
            "Yulduzlar Telegram'da faqat <strong>username</strong> bo'yicha yuboriladi — telefon raqami yoki ism bilan emas. Agar profilingizda @ bilan boshlanadigan nom bo'lmasa, Telegram sozlamalarini oching, «Username» bandida o'zingizga nom bering va saqlang. Bu bepul, bir daqiqa oladi va keyin ilovaga aynan shu nom kiritiladi. Username ochiq ma'lumot: uni bilgan odam sizga yulduz yoki sovg'a yubora oladi, lekin akkauntingizga kira olmaydi.",
        },

        { t: "h2", id: "qadamlar", text: "GemPay'da Stars sotib olish — 5 qadam" },
        {
          t: "steps",
          items: [
            {
              title: "@Gempayuz_bot ni oching va «GemPay'ni ochish»ni bosing",
              text: "Telegram qidiruvida @Gempayuz_bot ni toping, Start bosing — bot bitta tugma beradi, u Mini App'ni ochadi. Stars va Premium aynan shu Mini App'da turadi: Android APK ilovasida hozircha faqat o'yinlar va Steam bor, shuning uchun yulduzlar uchun Telegram'dagi Mini App'dan foydalaning.",
            },
            {
              title: "«Telegram» bo'limida Stars plitkasini tanlang",
              text: "Bosh ekranda o'yinlar ro'yxatidan yuqorida «Telegram» sarlavhali qator bor, yonida «StarsPaymee orqali» yozuvi — bu bo'lim ekotizimning Telegram xizmatlari tomonidan bajarilishini bildiradi. Uchta plitkadan Stars'ni bosing.",
            },
            {
              title: "Miqdorni kiriting",
              text: `Tayyor variantlardan birini tanlang yoki ${STARS_MIN} dan ${MAX} gacha istalgan sonni yozing. Ekranda summa darhol yangilanadi — karta o'tkazmasi va onlayn to'lov uchun alohida. Bir buyurtmaga ${MAX} donadan ko'p sig'maydi, kerak bo'lsa ikkinchisini berasiz.`,
            },
            {
              title: "@username'ni yozing va profilni tekshiring",
              text: "O'zingizning yoki sovg'a qilmoqchi bo'lgan odamning username'ini kiriting. Ilova Telegram'dan profilni topib, ism va avatarni ko'rsatadi. Bu bosqich bepul — aynan shu yerda to'g'ri odam ekanini tekshirasiz, chunki yulduzlar keyin boshqa akkauntga qayta yo'naltirilmaydi.",
            },
            {
              title: "To'lov usulini tanlab to'lang",
              text: "Karta o'tkazmasida ilova UzCard/HUMO karta raqami va aniq summani ko'rsatadi — bank ilovangizdan aynan shu summani yuborasiz, tizim tushumni summa bo'yicha taniydi. Click yoki Uzum Bank'da tugmani bossangiz summa tayyor turadi va to'lov o'zi tasdiqlanadi. Tasdiqdan keyin yulduzlar bir necha soniyada balansga tushadi: Telegram → Sozlamalar → «Mening yulduzlarim».",
            },
          ],
        },
        { t: "cta", text: "Stars kerakmi? @Gempayuz_bot → «Telegram» bo'limi → Stars. Faqat @username, parol yo'q." },

        { t: "h2", id: "narx", text: "Narx qanday hisoblanadi: karta o'tkazmasi va onlayn to'lov" },
        {
          t: "p",
          text:
            `Yulduzning narxi qat'iy va miqdorga to'g'ri proporsional — 1 000 dona 100 donadan o'n barobar qimmat, chegirmali «ulgurji» narx yo'q. Farq faqat to'lov yo'lida. Ilova ko'rsatgan kartaga o'tkazma qilsangiz, donasi ${uz(STARS_UNIT_CARD)}. Click yoki Uzum Bank tugmasi orqali to'lasangiz, donasi ${uz(STARS_UNIT_ONLINE)}: onlayn to'lov tizimi har tranzaksiyadan komissiya oladi va u narxga qo'shilgan.`,
        },
        {
          t: "table",
          caption: "Tayyor miqdorlar uchun so'mdagi summa. Boshqa son ham shu nisbatda hisoblanadi.",
          head: ["Miqdor", "Karta o'tkazmasi", "Click yoki Uzum Bank"],
          rows: [50, 100, 500, 1000].map((n) => [`${num(n)} yulduz`, uz(starsCardPrice(n)), uz(starsOnlinePrice(n))]),
        },
        {
          t: "list",
          items: [
            "<strong>Karta o'tkazmasida summa jadvaldagidan 950 so'mgacha kam bo'lishi mumkin.</strong> Bot bir vaqtda to'layotgan odamlarni ajratish uchun summani 50 so'mlik qadamlar bilan kamaytiradi — shuning uchun aynan ekrandagi raqamni yuboring, yaxlitlamang.",
            "Onlayn to'lov qulayroq: summani qo'lda yozish shart emas va tasdiq avtomatik. Summani aniq yoza olsangiz, karta o'tkazmasi arzonroq.",
            "Bot balansidan ham to'lasa bo'ladi — karta o'tkazmasi narxida. Balans ilovaning o'zida, o'yin buyurtmalari bilan umumiy.",
          ],
        },

        { t: "h2", id: "nimaga", text: "O'yinchi yulduzlarni nimaga sarflaydi" },
        {
          t: "list",
          items: [
            "<strong>Sovg'a</strong> — squad'dagi do'stga, kanal adminiga yoki stream olib boruvchiga. Sovg'a profilda ko'rinadi, keyin uni kolleksion nusxaga aylantirsa ham bo'ladi.",
            "<strong>Mini-o'yinlar va botlar</strong> — Telegram ichidagi o'yinlar va botlardagi xaridlar Stars bilan to'lanadi, alohida karta ulanmaydi.",
            "<strong>Yulduzli reaksiya</strong> — sevimli kanal postiga, muallifga to'g'ridan-to'g'ri daromad bo'lib tushadi.",
            "<strong>Pullik post va media</strong> — ba'zi kanallar kontentni Stars evaziga ochadi.",
            "<strong>Pullik xabar</strong> — xabarlariga narx qo'ygan odam yoki kanalga yozish.",
          ],
        },
        {
          t: "note",
          tone: "info",
          title: "Stars bilan UC yoki olmos olib bo'lmaydi",
          text:
            "Telegram Stars messenjer ichidagi valyuta. U PUBG UC, Mobile Legends olmosi yoki Steam balansiga aylanmaydi — bular GemPay katalogida alohida, Player ID bo'yicha to'ldiriladi. Farqlar <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">Stars, UC, olmos va Steam balansi taqqoslovida</a> jadval bilan yozilgan.",
        },

        { t: "h2", id: "xatolar", text: "Pul yo'qotadigan uchta xato" },
        {
          t: "list",
          ordered: true,
          items: [
            "<strong>Noto'g'ri username.</strong> Yulduzlar kiritilgan akkauntga ketadi va qaytmaydi. Ilova ko'rsatgan ism va avatarni to'lovdan oldin solishtiring; bir harf farq qilsa — ortga qaytib qayta yozing.",
            "<strong>Noto'g'ri summa.</strong> Karta o'tkazmasida tizim to'lovni aynan summa bo'yicha taniydi. Yaxlitlangan yoki kam summa buyurtmaga bog'lanmaydi va tekshiruv qo'lda o'tadi — vaqt ketadi.",
            "<strong>«Bepul Stars» va «arzon, faqat akkauntga kiring».</strong> Telegram yulduzni bepul bermaydi; akkauntga kirishni so'ragan har qanday sayt yoki bot — akkauntni o'g'irlash usuli.",
          ],
        },
        {
          t: "note",
          tone: "warn",
          title: "Telegram kirish kodini hech kimga aytmang",
          text:
            "GemPay ham, StarsPaymee ham hech qachon SMS kod, parol yoki kirish kodini so'ramaydi. Yulduzlar username bo'yicha, Telegram'ning rasmiy mexanizmi orqali yuboriladi — hisobingizga kirishning hojati yo'q. Kod so'ragan odam — firibgar.",
        },

        { t: "h2", id: "kelmadi", text: "Yulduzlar kelmasa" },
        {
          t: "list",
          ordered: true,
          items: [
            "Telegram → Sozlamalar → «Mening yulduzlarim» bo'limini oching — balans ba'zan ilova qayta ochilgandagina yangilanadi.",
            "Karta o'tkazmasida summani tekshiring: ekrandagi bilan tiyinigacha bir xil bo'lishi kerak. Tushum 1-2 daqiqada taniladi.",
            "Ilovadagi buyurtmalar tarixini oching — holat «to'langan» yoki «kutilmoqda» bo'lib turadi.",
            "Hal bo'lmasa, chek va buyurtma raqami bilan @StarsPaymeeSupport ga yozing. Texnik sabab bilan yulduzlar yuborilmagan bo'lsa, pul to'liq qaytariladi.",
          ],
        },
        {
          t: "p",
          text:
            "Qaytarish tartibi va muddatlari <a href=\"/tolov-va-qaytarish\">to'lov va pulni qaytarish sahifasida</a>. Shuni yodda tuting: yulduzlar allaqachon balansga tushgan bo'lsa, ularni Telegram qoidasiga ko'ra qaytarib bo'lmaydi — ular faqat messenjer ichida sarflanadi.",
        },

        { t: "h2", id: "premium", text: "Stars yoki Premium — qaysi biri kerak?" },
        {
          t: "p",
          text:
            "Ikkalasi bitta bo'limda turadi, lekin boshqa-boshqa narsa. Stars — sarflanadigan valyuta: sovg'a, reaksiya, bot. Premium — oylik obuna: 4 GB fayl, tez yuklab olish, reklamasiz kanallar. Jamoadoshga sovg'a kerak bo'lsa — Stars; o'zingizga turnir yozuvini siqmasdan yuborish kerak bo'lsa — Premium. Ikkinchisi haqida <a href=\"/blog/telegram-premium-oyinchi-uchun\">Premium o'yinchiga nima beradi</a> maqolasida, narxlar esa <a href=\"/premium\">Premium sahifasida</a>.",
        },
        { t: "cta", text: "Miqdorni tanlang, @username'ni yozing, so'mda to'lang — yulduzlar bir necha soniyada." },

        {
          t: "sources",
          items: [
            { label: "Telegram Stars — rasmiy e'lon", href: "https://telegram.org/blog/telegram-stars", note: "yulduzlar nima uchun kiritilgani va qayerda ishlashi" },
            { label: "Bot Payments API: Telegram Stars", href: "https://core.telegram.org/bots/payments-stars", note: "botlar va Mini App'larda Stars bilan to'lov qoidalari" },
            { label: "Fragment — Stars", href: "https://fragment.com/stars", note: "Telegram'ning rasmiy marketplace'i: Stars balansini TON hamyon orqali to'ldirish" },
          ],
        },
        {
          t: "links",
          title: "Shu mavzudagi sahifalar",
          items: [
            { label: "Telegram Stars — narxlar va savol-javob", href: "/stars" },
            { label: "Telegram Premium — narxlar va savol-javob", href: "/premium" },
            { label: "Stars, UC, olmos va Steam balansi: farqi nimada", href: "/blog/telegram-stars-yoki-oyin-valyutasi" },
            { label: "Telegram Premium o'yinchiga nima beradi", href: "/blog/telegram-premium-oyinchi-uchun" },
            { label: "O'yinlarga donat qilish — umumiy qo'llanma", href: "/blog/oyinlarga-donat-qilish-gempay" },
            { label: "To'lov va pulni qaytarish", href: "/tolov-va-qaytarish" },
          ],
        },
      ],
      faq: [
        {
          q: "GemPay orqali olish bilan StarsPaymee botidan olish farq qiladimi?",
          a: "Yo'q — bitta ekotizim, bitta narx, bitta qo'llab-quvvatlash. GemPay Mini App'ida bu bo'lim o'yin katalogi yonida turadi, shuning uchun o'yinchiga Mini App'dan chiqmasdan olish qulay.",
        },
        {
          q: "Username'siz yulduz olsa bo'ladimi?",
          a: "Yo'q. Telegram yulduzlarni faqat username bo'yicha yetkazadi. Sozlamalarda «Username» bandini oching va nom bering — bepul, bir daqiqa.",
        },
        {
          q: "Yulduzlar qancha vaqtda tushadi?",
          a: "To'lov tasdiqlangach bir necha soniyada. Karta o'tkazmasida tushumning o'zi 1-2 daqiqada taniladi, onlayn to'lovda tasdiq darhol bo'ladi.",
        },
        {
          q: "Stars'ni keyin boshqa akkauntga o'tkazib bo'ladimi?",
          a: "Yo'q, Telegram bunga yo'l qo'ymaydi. Boshqa odamga kerak bo'lsa, buyurtmada uning username'ini kiriting — yulduzlar to'g'ridan-to'g'ri unga tushadi.",
        },
        {
          q: "Eng kam nechta olsa bo'ladi?",
          a: `${STARS_MIN} ta. Bir buyurtmada eng ko'pi ${MAX} ta; ko'proq kerak bo'lsa ikkinchi buyurtma berasiz.`,
        },
        {
          q: "Bot balansi nima va u yerdan Stars olsa bo'ladimi?",
          a: `Bu ilova ichidagi so'm hisobi — o'yin buyurtmalari bilan umumiy. Undan Stars olsangiz, narx karta o'tkazmasi bilan bir xil: donasi ${uz(STARS_UNIT_CARD)}.`,
        },
        {
          q: "Click orqali olsam nega qimmatroq?",
          a: `Onlayn to'lov tizimi har tranzaksiyadan komissiya oladi, u dona narxiga qo'shilgan: ${uz(STARS_UNIT_ONLINE)} o'rniga karta o'tkazmasida ${uz(STARS_UNIT_CARD)}. Evaziga summa tayyor turadi va tasdiq avtomatik.`,
        },
        {
          q: "Chekni saqlash kerakmi?",
          a: "Ha. Buyurtma raqami ilovadagi tarixda, bank cheki esa ilovangizda qoladi. Savol chiqsa qo'llab-quvvatlash aynan shu ikkisini so'raydi.",
        },
      ],
    },

    ru: {
      title: "Купить Telegram Stars: в GemPay, за сумы, по username",
      metaTitle: "Купить Telegram Stars — в GemPay, за сумы",
      metaDescription:
        `Как купить Telegram Stars в GemPay: раздел «Telegram», от ${STARS_MIN} до ${MAX} штук, только ` +
        `@username. UzCard, HUMO, Click, Uzum Bank — от ${ru(STARS_UNIT_CARD)} за звезду.`,
      excerpt:
        "В GemPay, где вы пополняете игры, продаются и звёзды: где этот раздел, что спрашивают, как считается " +
        "цена и какие три ошибки стоят денег.",
      answer:
        `Чтобы купить Telegram Stars в GemPay, откройте @Gempayuz_bot, нажмите плитку Stars в разделе ` +
        `«Telegram», введите количество от ${STARS_MIN} до ${MAX} и @username. Оплата в сумах: переводом на карту — ` +
        `${ru(STARS_UNIT_CARD)} за звезду, через Click или Uzum Bank — ${ru(STARS_UNIT_ONLINE)}. В аккаунт никто не входит, ` +
        `пароль не нужен; звёзды приходят через несколько секунд после подтверждения платежа.`,
      body: [
        {
          t: "p",
          text:
            "Для большинства GemPay — это Mini App для UC в PUBG или алмазов Mobile Legends. Но в верхней части того же Mini App, над списком игр, стоят три плитки: Stars, Premium и Gift. Эта статья о первой: как купить здесь звёзды Telegram, что спросят, как считается цена и какие ошибки стоят денег. Таблица цен и ответы на вопросы есть и на <a href=\"/stars\">странице Telegram Stars</a>; здесь — процесс по шагам.",
        },

        { t: "h2", id: "nima-kerak", text: "Перед началом: что нужно и что не нужно" },
        {
          t: "facts",
          items: [
            { k: "Нужно", v: "Аккаунт Telegram с установленным @username" },
            { k: "Оплата", v: "UzCard, HUMO, Click, Uzum Bank или баланс бота — в сумах" },
            { k: "Количество", v: `От ${STARS_MIN} до ${MAX} штук за один заказ` },
            { k: "Не нужно", v: "Пароль, SMS-код, Visa/Mastercard, баланс Apple ID, VPN" },
          ],
        },
        {
          t: "p",
          text:
            "Звёзды в Telegram отправляются только по <strong>username</strong> — не по номеру телефона и не по имени. Если в профиле нет имени, начинающегося с @, откройте настройки Telegram, пункт «Имя пользователя», задайте его и сохраните. Это бесплатно, занимает минуту, и именно это имя потом вводится в приложении. Username — открытые данные: зная его, вам можно отправить звёзды или подарок, но войти в аккаунт нельзя.",
        },

        { t: "h2", id: "qadamlar", text: "Покупка Stars в GemPay — 5 шагов" },
        {
          t: "steps",
          items: [
            {
              title: "Откройте @Gempayuz_bot и нажмите «Открыть GemPay»",
              text: "Найдите @Gempayuz_bot в поиске Telegram, нажмите Start — бот даёт одну кнопку, она открывает Mini App. Stars и Premium находятся именно в этом Mini App: в Android-приложении пока только игры и Steam, поэтому для звёзд используйте Mini App в Telegram.",
            },
            {
              title: "В разделе «Telegram» выберите плитку Stars",
              text: "На главном экране над списком игр есть строка с заголовком «Telegram» и пометкой «через StarsPaymee» — она означает, что раздел выполняет сервис экосистемы для Telegram. Из трёх плиток нажмите Stars.",
            },
            {
              title: "Введите количество",
              text: `Выберите готовый вариант или впишите любое число от ${STARS_MIN} до ${MAX}. Сумма на экране обновляется сразу — отдельно для перевода на карту и для онлайн-оплаты. Больше ${MAX} в один заказ не поместится, при необходимости оформите второй.`,
            },
            {
              title: "Введите @username и проверьте профиль",
              text: "Укажите свой username или username того, кому дарите. Приложение найдёт профиль в Telegram и покажет имя с аватаром. Этот шаг бесплатный — именно здесь вы убеждаетесь, что это нужный человек, потому что потом звёзды на другой аккаунт не перенаправить.",
            },
            {
              title: "Выберите способ и оплатите",
              text: "При переводе на карту приложение показывает номер карты UzCard/HUMO и точную сумму — отправьте из банковского приложения ровно её, система распознаёт платёж по сумме. В Click или Uzum Bank сумма уже подставлена, платёж подтверждается сам. После подтверждения звёзды приходят за несколько секунд: Telegram → Настройки → «Мои звёзды».",
            },
          ],
        },
        { t: "cta", text: "Нужны Stars? @Gempayuz_bot → раздел «Telegram» → Stars. Только @username, без пароля." },

        { t: "h2", id: "narx", text: "Как считается цена: перевод на карту и онлайн-оплата" },
        {
          t: "p",
          text:
            `Цена звезды фиксированная и прямо пропорциональна количеству — 1 000 штук стоят ровно в десять раз дороже 100, «оптовой» скидки нет. Разница только в способе оплаты. Перевод на карту, которую показало приложение, — ${ru(STARS_UNIT_CARD)} за звезду. Оплата кнопкой Click или Uzum Bank — ${ru(STARS_UNIT_ONLINE)}: платёжная система берёт комиссию с каждой транзакции, и она включена в цену.`,
        },
        {
          t: "table",
          caption: "Сумма в сумах для готовых количеств. Любое другое число считается в той же пропорции.",
          head: ["Количество", "Перевод на карту", "Click или Uzum Bank"],
          rows: [50, 100, 500, 1000].map((n) => [`${num(n)} звёзд`, ru(starsCardPrice(n)), ru(starsOnlinePrice(n))]),
        },
        {
          t: "list",
          items: [
            "<strong>При переводе на карту сумма может быть меньше табличной — до 950 сумов.</strong> Бот уменьшает её шагами по 50 сумов, чтобы различать людей, платящих одновременно, — поэтому отправляйте ровно цифру с экрана, не округляйте.",
            "Онлайн-оплата удобнее: сумму не нужно вводить вручную, подтверждение автоматическое. Если готовы ввести сумму точно, перевод на карту дешевле.",
            "Можно оплатить с баланса бота — по цене перевода на карту. Баланс внутри приложения, общий с игровыми заказами.",
          ],
        },

        { t: "h2", id: "nimaga", text: "На что игрок тратит звёзды" },
        {
          t: "list",
          items: [
            "<strong>Подарок</strong> — другу из сквада, админу канала или стримеру. Подарок виден в профиле, позже его можно сделать коллекционным.",
            "<strong>Мини-игры и боты</strong> — покупки в играх и ботах внутри Telegram оплачиваются звёздами, карта не привязывается.",
            "<strong>Звёздная реакция</strong> — на пост любимого канала, уходит автору как прямой доход.",
            "<strong>Платные посты и медиа</strong> — некоторые каналы открывают контент за Stars.",
            "<strong>Платные сообщения</strong> — чтобы написать человеку или каналу с ценой за сообщение.",
          ],
        },
        {
          t: "note",
          tone: "info",
          title: "За Stars нельзя купить UC или алмазы",
          text:
            "Telegram Stars — валюта внутри мессенджера. Она не превращается в UC для PUBG, алмазы Mobile Legends или баланс Steam — всё это пополняется отдельно в каталоге GemPay по Player ID. Разница разобрана в таблице в статье <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">Stars, UC, алмазы и баланс Steam</a>.",
        },

        { t: "h2", id: "xatolar", text: "Три ошибки, которые стоят денег" },
        {
          t: "list",
          ordered: true,
          items: [
            "<strong>Неверный username.</strong> Звёзды уходят на введённый аккаунт и не возвращаются. Сверьте имя и аватар, которые показало приложение, до оплаты; отличается одна буква — вернитесь и введите заново.",
            "<strong>Неверная сумма.</strong> При переводе на карту система узнаёт платёж именно по сумме. Округлённая или меньшая сумма к заказу не привяжется, проверка пойдёт вручную — потеряете время.",
            "<strong>«Бесплатные Stars» и «дёшево, только войдите в аккаунт».</strong> Telegram не раздаёт звёзды бесплатно; любой сайт или бот, просящий войти в аккаунт, — способ его угнать.",
          ],
        },
        {
          t: "note",
          tone: "warn",
          title: "Никому не сообщайте код входа в Telegram",
          text:
            "Ни GemPay, ни StarsPaymee никогда не спрашивают SMS-код, пароль или код входа. Звёзды отправляются по username через официальный механизм Telegram — входить в ваш аккаунт не нужно. Тот, кто просит код, — мошенник.",
        },

        { t: "h2", id: "kelmadi", text: "Если звёзды не пришли" },
        {
          t: "list",
          ordered: true,
          items: [
            "Откройте Telegram → Настройки → «Мои звёзды» — баланс иногда обновляется только после перезапуска приложения.",
            "При переводе на карту проверьте сумму: она должна совпадать с экранной до тийина. Поступление распознаётся за 1-2 минуты.",
            "Откройте историю заказов в приложении — статус будет «оплачен» или «ожидает».",
            "Если не решилось, напишите в @StarsPaymeeSupport с чеком и номером заказа. Если звёзды не отправлены по технической причине, деньги вернут полностью.",
          ],
        },
        {
          t: "p",
          text:
            "Порядок и сроки возврата — на <a href=\"/tolov-va-qaytarish\">странице оплаты и возврата</a>. Учтите: если звёзды уже на балансе, вернуть их нельзя по правилам Telegram — они тратятся только внутри мессенджера.",
        },

        { t: "h2", id: "premium", text: "Stars или Premium — что вам нужно?" },
        {
          t: "p",
          text:
            "Они стоят в одном разделе, но это разные вещи. Stars — расходуемая валюта: подарки, реакции, боты. Premium — подписка на месяцы: файлы до 4 ГБ, быстрая загрузка, каналы без рекламы. Нужен подарок тиммейту — Stars; нужно отправить запись турнира без сжатия — Premium. О втором — в статье <a href=\"/blog/telegram-premium-oyinchi-uchun\">что Premium даёт игроку</a>, цены — на <a href=\"/premium\">странице Premium</a>.",
        },
        { t: "cta", text: "Выберите количество, введите @username, оплатите в сумах — звёзды через несколько секунд." },

        {
          t: "sources",
          items: [
            { label: "Telegram Stars — официальный анонс", href: "https://telegram.org/blog/telegram-stars", note: "зачем введены звёзды и где они работают" },
            { label: "Bot Payments API: Telegram Stars", href: "https://core.telegram.org/bots/payments-stars", note: "правила оплаты звёздами в ботах и Mini App" },
            { label: "Fragment — Stars", href: "https://fragment.com/stars", note: "официальный маркетплейс Telegram: пополнение баланса Stars через TON-кошелёк" },
          ],
        },
        {
          t: "links",
          title: "По теме",
          items: [
            { label: "Telegram Stars — цены и ответы", href: "/stars" },
            { label: "Telegram Premium — цены и ответы", href: "/premium" },
            { label: "Stars, UC, алмазы и баланс Steam: в чём разница", href: "/blog/telegram-stars-yoki-oyin-valyutasi" },
            { label: "Что Telegram Premium даёт игроку", href: "/blog/telegram-premium-oyinchi-uchun" },
            { label: "Оплата и возврат", href: "/tolov-va-qaytarish" },
          ],
        },
      ],
      faq: [
        { q: "Есть разница между покупкой в GemPay и в боте StarsPaymee?", a: "Нет — одна экосистема, одна цена, одна поддержка. В GemPay этот раздел стоит рядом с каталогом игр, поэтому игроку удобно купить, не выходя из приложения." },
        { q: "Можно купить звёзды без username?", a: "Нет. Telegram доставляет звёзды только по username. Откройте настройки, пункт «Имя пользователя», и задайте его — бесплатно, за минуту." },
        { q: "Через сколько приходят звёзды?", a: "Через несколько секунд после подтверждения платежа. При переводе на карту само поступление распознаётся за 1-2 минуты, при онлайн-оплате подтверждение мгновенное." },
        { q: "Можно потом передать Stars на другой аккаунт?", a: "Нет, Telegram этого не позволяет. Если звёзды нужны другому человеку, укажите его username в заказе — они придут прямо ему." },
        { q: "Какой минимум?", a: `${STARS_MIN} звёзд. Максимум в одном заказе — ${MAX}; нужно больше — оформите второй заказ.` },
        { q: "Что такое баланс бота и можно ли с него купить Stars?", a: `Это сумовой счёт внутри приложения, общий с игровыми заказами. Stars с него стоят как при переводе на карту: ${ru(STARS_UNIT_CARD)} за штуку.` },
        { q: "Почему через Click дороже?", a: `Платёжная система берёт комиссию с каждой транзакции, она включена в цену звезды: ${ru(STARS_UNIT_ONLINE)} вместо ${ru(STARS_UNIT_CARD)} при переводе на карту. Взамен сумма подставлена заранее, а подтверждение автоматическое.` },
        { q: "Нужно ли хранить чек?", a: "Да. Номер заказа остаётся в истории приложения, банковский чек — в вашем приложении. Если возникнет вопрос, поддержка попросит именно их." },
      ],
    },
  },
};

export default article;
