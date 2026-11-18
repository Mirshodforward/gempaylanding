// Avtoblogyoz yasagan maqola (2026-11-18). Niyat: PUBG, MLBB yoki Free Fire o'yinchisi UC yoki olmos sotuvchi bot narx jadvali, skin slaydshousi yoki chiroyli «to'lov qabul qilindi» chekini yuborganda bunga ishonsa bo'ladimi va donat haqiqatan tushganini qanday tekshirishni «donat boti chiroyli xabar UC chek» kabi so'zlar bilan qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://core.telegram.org/bots/api-changelog
//   https://core.telegram.org/bots/api

import type { Article } from "../types";
import { STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const article: Article = {
  slug: "donat-boti-jadvalli-xabar-uc-tekshirish",
  game: null,
  type: "trust",
  datePublished: "2026-11-18",
  dateModified: "2026-11-18",
  keywords: ["donat boti chiroyli xabar","UC chek soxta","donat boti ishonchlimi","UC tushganini tekshirish","olmos tushmadi chek bor","telegram bot jadval slaydshou","UC sotuvchi bot firibgarlik","бот доната фейковый чек","как проверить зачисление UC","бот продажи UC мошенники","telegram rich messages бот","алмазы не пришли чек бот"],
  locales: {
    uz: {
      title: "Donat boti chiroyli chek yubordi: UC yoki olmos tushdimi, qanday bilaman?",
      metaTitle: "Donat boti chiroyli chek yubordi",
      metaDescription: "Yo‘q, ishonmang: jadval, slaydshou va chiroyli chekni istalgan bot yubora oladi. UC yoki olmos tushganini faqat o‘yindagi balans va bank ilovasi ko‘rsatadi.",
      excerpt: "Yo‘q, ishonmang: jadval, slaydshou va chiroyli chekni istalgan bot yubora oladi. UC yoki olmos tushganini faqat o‘yindagi balans va bank ilovasi ko‘rsatadi.",
      answer: "Yo‘q, ishonmang: jadval, slaydshou va chiroyli chekni istalgan bot yubora oladi. UC yoki olmos tushganini faqat o‘yindagi balans va bank ilovasi ko‘rsatadi.",
      body: [
        {
          t: "h2",
          id: "narx-jadvali-va-skin-slaydshousi",
          text: "Narx jadvali va skin slaydshousi donat do‘konining halolligini ko‘rsatadimi?",
        },
        {
          t: "p",
          text: "Yo‘q. Chiroyli xabar botning halol ekanini isbotlamaydi. UC yoki olmos akkauntingizga tushganini ham ko‘rsatmaydi.",
        },
        {
          t: "p",
          text: "2026-yil 11-iyunda chiqqan Bot API 10.1 yangilanishi botlarga Rich Messages imkoniyatini qo‘shdi. Endi botlar puxta tuzilgan matn yubora oladi, AI yozgan javobni esa oqim tarzida, ya’ni bo‘lakma-bo‘lak chiqara oladi. Bu Telegram’ning <a href=\"https://core.telegram.org/bots/api-changelog\" target=\"_blank\" rel=\"noopener\">Bot API changelog</a> sahifasida yozilgan. Imkoniyatdan bot yaratgan har kim foydalana oladi — halol do‘kon ham, bir kunlik firibgar ham.",
        },
        {
          t: "p",
          text: "Yangi bloklar orasida slaydshou, jadval, rasm, animatsiya, audio, xarita va ochilib-yopiladigan blok bor. Demak, kecha ochilgan bot ham bugun katta donat do‘koni kabi ko‘rinishi mumkin.",
        },
        {
          t: "p",
          text: "Yangilik haqida dastlab Telegram kanallarida tarqalgan xabardan bilindi. Fakt sifatida esa faqat rasmiy changelog’ga tayanish mumkin. Unda Telegram botlarning bezatilgan xabarlarini oldindan tekshirishi haqida hech narsa yozilmagan. Bezakni bot egasi o‘zi tuzadi.",
        },
        {
          t: "h2",
          id: "bot-chatidagi-qaysi-bezak-nimani",
          text: "Bot chatidagi qaysi bezak nimani isbotlamaydi?",
        },
        {
          t: "p",
          text: "Donat botida eng ko‘p uchraydigan bezaklar va ular aslida nimani anglatishi:",
        },
        {
          t: "table",
          head: [
            "Botdagi element",
            "O‘yinchi nimani ko‘radi",
            "Nimani isbotlamaydi",
          ],
          rows: [
            [
              "Narx jadvali",
              "UC yoki olmos paketlari narxlari bilan qatorma-qator",
              "To‘lov oynasida aynan shu summa chiqishini",
            ],
            [
              "Skin yoki Royale Pass slaydshousi",
              "O‘yindan olingan rasmlar birin-ketin almashadi",
              "Bot bu narsalarni haqiqatan bera olishini",
            ],
            [
              "Qalin yozuv, chizib tashlangan «eski narx», spoyler ostidagi «sir promo-kod»",
              "Chegirma va maxsus taklif taassuroti",
              "Chegirma haqiqiy ekanini — bu shunchaki matn uslubi",
            ],
            [
              "«Chek» ko‘rinishidagi blok",
              "«To‘lov qabul qilindi», buyurtma raqami, summa",
              "Bankdagi tranzaksiyani yoki o‘yin serverining javobini",
            ],
            [
              "Asta-sekin yozilib chiqayotgan javob",
              "Go‘yo operator jonli yozib o‘tirgandek",
              "Javobni odam yozayotganini — bu oqim tarzida yuborish",
            ],
          ],
        },
        {
          t: "p",
          text: "Texnik nomlari ham changelog’da bor: jadval — RichBlockTable, uning katakchalari — RichBlockTableCell, slaydshou — RichBlockSlideshow, spoyler — RichTextSpoiler, izoh — RichBlockCaption, oqim tarzidagi javob — sendRichMessageDraft. Ularning hammasi botga xabarni qanday <strong>ko‘rsatishni</strong> o‘rgatadi, xolos. Ichida nima yozilishini bot egasining o‘zi hal qiladi.",
        },
        {
          t: "p",
          text: "Ishonsa bo‘ladigan joy ikkita: o‘yin ichidagi balans va bank yoki to‘lov ilovasidagi tarix.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "tolov-qabul-qilindi-uc-yolda",
          text: "«To‘lov qabul qilindi, UC yo‘lda» degan chek nimani anglatadi?",
        },
        {
          t: "p",
          text: "Bunday chek — botning o‘z xabari. Qanchalik chiroyli bezatilgan bo‘lmasin, u pul kimga ketganini va UC qaysi Player ID’ga yuborilganini ko‘rsatmaydi.",
        },
        {
          t: "p",
          text: "Yana bir tafsilot: bot bezatilgan xabarini keyin tahrirlay oladi. Changelog’ga ko‘ra, editMessageText metodiga aynan shu maqsadda rich_message parametri qo‘shilgan. Kecha chekda «60 UC» yozilgan bo‘lsa, ertaga u yerda boshqa paket turishi mumkin. Shuning uchun chekni summa, paket va buyurtma raqami ko‘rinib turganida darhol skrinshot qilib oling.",
        },
        {
          t: "p",
          text: "<a href=\"https://core.telegram.org/bots/api\" target=\"_blank\" rel=\"noopener\">Bot API hujjatida</a> Message’dagi rich_message maydoni xabar bezatilgan formatda ekanini bildiradi. Bu faqat format haqidagi texnik belgi. Sotuvchi tekshirilgani yoki «tasdiqlangan»i degani emas.",
        },
        {
          t: "note",
          tone: "info",
          text: "Chek skrinshoti nizo chiqqanda yordam beradi. Lekin to‘lov qilinganining dalili — bank ilovasidagi tranzaksiya, donat tushganining dalili esa o‘yindagi balans.",
        },
        {
          t: "h2",
          id: "uc-yoki-olmos-haqiqatan-tushganini",
          text: "UC yoki olmos haqiqatan tushganini qanday tekshirasiz?",
        },
        {
          t: "p",
          text: "Botdagi xabarga emas, raqamlarga qarang. Tartib quyidagicha:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "O‘yinni to‘liq yopib, qayta oching. PUBG Mobile’da UC balansiga, Mobile Legends va Free Fire’da olmos hisobiga qarang. Balansni xariddan oldingisi bilan solishtiring.",
            "O‘yinda pochta yoki xaridlar tarixi bo‘lsa, uni ham oching. To‘ldirish yozuvi bo‘lsa, bu qo‘shimcha tasdiq bo‘ladi.",
            "Bank yoki to‘lov ilovasini oching: UzCard, HUMO, Click yoki Uzum Bank. Summa, vaqt va oluvchini tekshiring. Oluvchi notanish odamning shaxsiy kartasi bo‘lsa, bu xavf belgisi.",
            "Botda kiritilgan Player ID’ni o‘zingiznikiga solishtiring. MLBB’da bu User ID va Server ID ikkalasi bo‘ladi: <a href=\"/blog/mobile-legends-user-id-server-id-qayerda\">ular qayerda turadi</a>. Bitta raqam xato bo‘lsa, valyuta begona akkauntga ketadi.",
            "Valyuta va’da qilingan vaqtda tushmasa, qayta to‘lamang. Buyurtma raqami va chek skrinshoti bilan sotuvchining yordam xizmatiga yozing. Har bir holat uchun batafsil reja: <a href=\"/blog/pubg-uc-kelmadi-nima-qilish\">PUBG UC kelmadi yoki ID topilmadi</a>.",
          ],
        },
        {
          t: "p",
          text: "GemPay’da valyuta odatda 1–5 daqiqada avtomatik tushadi. Bundan uzoq kechiksa, <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>’ga buyurtma raqami bilan yozing.",
        },
        {
          t: "h2",
          id: "qaysi-sorov-yoki-taklif-chiqsa",
          text: "Qaysi so‘rov yoki taklif chiqsa, to‘lovni to‘xtatish kerak?",
        },
        {
          t: "p",
          text: "Bezak qanchalik puxta bo‘lmasin, quyidagilardan biri bo‘lsa, to‘lamang:",
        },
        {
          t: "list",
          items: [
            "Parol, SMS yoki Telegram kodi, o‘yin akkauntining logini so‘raladi. Donat uchun faqat Player ID kerak.",
            "«Bot» deb tanishtirilgan akkauntning username’i «bot» bilan tugamaydi. Buni qanday tekshirish haqida: <a href=\"/blog/game-bilan-tugaydigan-donat-boti-tekshirish\">«…game» nomli donat boti</a>.",
            "Pulni shaxsiy kartaga o‘tkazish yoki TON, Gram bilan to‘lash so‘raladi, chiroyli chek esa «tasdiq» sifatida yuboriladi.",
            "Narx bozordagidan ancha past, slaydshouda esa «faqat bugun», «oxirgi 5 ta paket» kabi shoshiltiruvchi yozuvlar bor.",
            "Bot to‘lovdan oldin nikingizni ko‘rsatmaydi va Player ID’ni tekshirmasdan pul so‘raydi.",
            "Sizni «garant» yoki vositachi botga yo‘naltirishadi. O‘xshash sxemalar: <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">o‘yin chatidagi firibgarlik belgilari</a>.",
          ],
        },
        {
          t: "p",
          text: "Nima berish mumkinu, nima mumkin emasligi <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">o‘yin hisobini xavfsiz to‘ldirish</a> maqolasida ro‘yxat bilan berilgan.",
        },
        {
          t: "h2",
          id: "narx-jadvalidagi-paket-tolov-summasiga",
          text: "Narx jadvalidagi paket to‘lov summasiga mos kelishini qanday tekshirasiz?",
        },
        {
          t: "p",
          text: "To‘lovdan oldin jadvaldagi paketni va narxni skrinshot qiling, masalan «60 UC — shuncha so‘m». So‘ng to‘lov oynasini oching va summani solishtiring.",
        },
        {
          t: "p",
          text: "Summa jadvaldagidan farq qilsa, to‘lamang va avval savol bering. Bot jadvalni keyin tahrirlay oladi, shu sabab xarid paytidagi skrinshot nizoda sizdagi ishonchli dalil bo‘ladi.",
        },
        {
          t: "p",
          text: "Jadvaldagi «bonus» yoki «x2» yozuvi ham bot matni, xolos. Akkauntga nima tushishini to‘lov oynasidagi paket nomi va o‘yindagi balans ko‘rsatadi. Paketlar qanday tuzilganini oldindan bilish uchun: <a href=\"/blog/pubg-uc-nima-paketlar-royal-pass\">UC paketlari va Royale Pass</a>.",
        },
        {
          t: "h2",
          id: "telegram-yangilanishidan-keyin-uc-olmos",
          text: "Telegram yangilanishidan keyin UC, olmos va Stars olish tartibi boshqachami?",
        },
        {
          t: "p",
          text: "Yo‘q. Yangilanish xabarlarning ko‘rinishiga tegishli, donat qanday tushishiga emas. UC va olmos avvalgidek Player ID bo‘yicha, Telegram Stars va Premium esa @username bo‘yicha olinadi.",
        },
        {
          t: "p",
          text: "Rasmiy changelog’da faqat yangi bloklar va metodlar sanalgan. 2026-yil 14-iyulda chiqqan Bot API 10.2 versiyasida ro‘yxat elementi qo‘shildi. Hujjatga ko‘ra, bot javobida 32 tagacha iqtibos ko‘rsatish mumkin, ularning umumiy uzunligi 1 024 belgigacha. To‘lov yoki donatni tekshirish haqida esa bu yerda hech narsa yo‘q.",
        },
        {
          t: "p",
          text: "Bu maqolada tasdiqlanmagan: bezatilgan xabarlar qaysi chatlarda va qaysi ilova versiyalarida to‘liq ko‘rinishi, bloklar va slaydshoudagi rasmlar soniga qanday cheklov borligi. Bot xabari sizda oddiyroq ko‘rinsa, ilovani yangilab ko‘ring. Bu botning soxta ekanini ham, halol ekanini ham bildirmaydi.",
        },
        {
          t: "h2",
          id: "gempay-botida-nimani-ozingiz-tekshira",
          text: "GemPay botida nimani o‘zingiz tekshira olasiz?",
        },
        {
          t: "p",
          text: "GemPay’da ham asosiy tekshiruv joyi — o‘yindagi balans. Bot jarayoni esa har bir bosqichni o‘zingiz nazorat qila oladigan tarzda tuzilgan:",
        },
        {
          t: "list",
          items: [
            "Bot — <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>. Username «bot» bilan tugaydi. Faqat Player ID so‘raladi, parol hech qachon so‘ralmaydi.",
            "To‘lovdan oldin nik tekshirib ko‘rsatiladi. Uni o‘zingiz tasdiqlaganingizdan keyingina to‘laysiz, shuning uchun begona akkauntga to‘lash xavfi kamayadi.",
            "To‘lov usullari: UzCard, HUMO, Click, Uzum Bank yoki bot balansi. Visa va Mastercard qabul qilinmaydi, xorijiy karta, VPN yoki kripto kerak emas.",
            "Valyuta 1–5 daqiqada avtomatik tushadi. Narxlar botda ko‘rsatiladi.",
            "Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi. Hisobga tushgan valyuta esa qaytarilmaydi. Batafsil: <a href=\"/tolov-va-qaytarish\">to‘lov va qaytarish</a>.",
            `Telegram Stars o‘yin valyutasiga aylanmaydi, shuning uchun UC olish uchun Stars sotib olish shart emas. Stars’ning bir donasi karta o‘tkazmasi yoki balansdan ${som(STARS_UNIT_CARD, "uz")}, Click yoki Uzum Bank orqali ${som(STARS_UNIT_ONLINE, "uz")} turadi.`,
          ],
        },
        {
          t: "p",
          text: "GemPay — mustaqil xizmat, Telegram yoki o‘yin ishlab chiquvchilari nomidan ish yuritmaydi.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Bot API changelog — June 11, 2026, Bot API 10.1",
              href: "https://core.telegram.org/bots/api-changelog",
            },
            {
              label: "Telegram Bot API (Message → rich_message)",
              href: "https://core.telegram.org/bots/api",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Bot «UC yuborildi» dedi, lekin o‘yinda balans o‘zgarmadi — nima qilay?",
          a: "Avval o‘yinni qayta ishga tushirib, botdagi Player ID o‘zingiznikiga to‘g‘ri kelishini tekshiring. Balans baribir o‘zgarmasa, qayta to‘lamang: buyurtma raqami va skrinshot bilan sotuvchining yordam xizmatiga murojaat qiling.",
        },
        {
          q: "Botdagi chiroyli chekni yordam xizmatiga dalil sifatida yuborsam bo‘ladimi?",
          a: "Yuboring, lekin yoniga bank yoki to‘lov ilovasidagi tranzaksiya skrinshotini ham qo‘shing. Chekni bot o‘zi yozadi va keyin o‘zgartirishi mumkin, bankdagi yozuvni esa bot o‘zgartira olmaydi.",
        },
        {
          q: "Spoyler ostida yashirilgan «sir promo-kod» haqiqiy chegirmami?",
          a: "Spoyler — bot matnni yashirish uchun ishlatadigan oddiy uslub, u chegirmani kafolatlamaydi. Kodning ishlaganini faqat to‘lov oynasidagi yakuniy summa ko‘rsatadi.",
        },
        {
          q: "Botning chiroyli xabari menda oddiy matn bo‘lib ko‘rinyapti — bot soxtami?",
          a: "Bundan bot haqida xulosa chiqarib bo‘lmaydi: bunday xabarlar qaysi ilova versiyalarida to‘liq ko‘rinishi rasman aniqlanmagan. Ilovani yangilang, botni esa username, so‘raladigan ma’lumotlar va to‘lov oluvchisiga qarab baholang.",
        },
        {
          q: "Narx jadvalini skrinshot qilgandim, endi botda boshqa narx turibdi — bu normalmi?",
          a: "Botlar bezatilgan xabarini tahrirlay oladi, shuning uchun jadval o‘zgarishi mumkin. Asosiysi, to‘lov oynasidagi summaga qarang: u kelishilgan narxdan farq qilsa, to‘lamang va skrinshotni ko‘rsatib savol bering.",
        },
        {
          q: "UC olish uchun avval Telegram Stars sotib olishim kerakmi?",
          a: "Yo‘q, Stars o‘yin valyutasiga aylanmaydi. UC, olmos va CP Player ID bo‘yicha so‘mda to‘g‘ridan-to‘g‘ri olinadi.",
        },
        {
          q: "Bot mendan Player ID’dan tashqari SMS-kod so‘rayapti — bersam bo‘ladimi?",
          a: "Bermang va suhbatni to‘xtating. SMS-kod, parol yoki login akkauntingizga kirish uchun kerak, donat uchun esa faqat Player ID yetarli.",
        },
      ],
    },
    ru: {
      title: "Бот доната прислал красивый чек: как понять, что UC или алмазы пришли?",
      metaTitle: "Бот доната прислал красивый чек",
      metaDescription: "Нет, не доверяйте: таблицу, слайд-шоу и красивый чек может прислать любой бот. Пришли ли UC или алмазы, покажут только баланс в игре и банковское приложение.",
      excerpt: "Нет, не доверяйте: таблицу, слайд-шоу и красивый чек может прислать любой бот. Пришли ли UC или алмазы, покажут только баланс в игре и банковское приложение.",
      answer: "Нет, не доверяйте: таблицу, слайд-шоу и красивый чек может прислать любой бот. Пришли ли UC или алмазы, покажут только баланс в игре и банковское приложение.",
      body: [
        {
          t: "h2",
          id: "narx-jadvali-va-skin-slaydshousi",
          text: "Доказывают ли таблица цен и слайд-шоу скинов, что донат-магазин честный?",
        },
        {
          t: "p",
          text: "Нет. Красивое сообщение не доказывает, что бот честный. Оно не показывает и того, что UC или алмазы пришли на ваш аккаунт.",
        },
        {
          t: "p",
          text: "Обновление Bot API 10.1 от 11 июня 2026 года дало ботам поддержку Rich Messages. Теперь бот может отправлять подробно структурированный текст, а ответ, написанный ИИ, — потоком, то есть выводить его по частям. Это записано на странице <a href=\"https://core.telegram.org/bots/api-changelog\" target=\"_blank\" rel=\"noopener\">Bot API changelog</a> Telegram. Воспользоваться новыми возможностями может любой, кто создал бота: и честный магазин, и мошенник-однодневка.",
        },
        {
          t: "p",
          text: "Среди новых блоков — слайд-шоу, таблица, фото, анимация, аудио, карта и раскрывающийся блок. Значит, бот, созданный вчера, уже сегодня может выглядеть как крупный донат-магазин.",
        },
        {
          t: "p",
          text: "О новинке многие сначала узнали из сообщения, которое разошлось по Telegram-каналам. Но фактом можно считать только то, что написано в официальном changelog. О том, что Telegram заранее проверяет оформленные сообщения ботов, там нет ни слова. Оформление собирает сам владелец бота.",
        },
        {
          t: "h2",
          id: "bot-chatidagi-qaysi-bezak-nimani",
          text: "Что не доказывает оформление в чате бота?",
        },
        {
          t: "p",
          text: "Вот элементы, которые чаще всего встречаются в донат-ботах, и то, что они на самом деле значат:",
        },
        {
          t: "table",
          head: [
            "Элемент в боте",
            "Что видит игрок",
            "Что это не доказывает",
          ],
          rows: [
            [
              "Таблица цен",
              "Пакеты UC или алмазов с ценами, строка за строкой",
              "Что в окне оплаты появится именно эта сумма",
            ],
            [
              "Слайд-шоу скинов или Royale Pass",
              "Скриншоты из игры сменяют друг друга",
              "Что бот действительно может это выдать",
            ],
            [
              "Жирный шрифт, зачёркнутая «старая цена», «секретный промокод» под спойлером",
              "Ощущение скидки и особого предложения",
              "Что скидка настоящая — это просто стиль текста",
            ],
            [
              "Блок в виде «чека»",
              "«Оплата получена», номер заказа, сумма",
              "Транзакцию в банке или ответ игрового сервера",
            ],
            [
              "Ответ, который печатается постепенно",
              "Будто оператор пишет вживую",
              "Что отвечает человек — это просто отправка потоком",
            ],
          ],
        },
        {
          t: "p",
          text: "Технические названия тоже есть в changelog: таблица — RichBlockTable, её ячейки — RichBlockTableCell, слайд-шоу — RichBlockSlideshow, спойлер — RichTextSpoiler, подпись — RichBlockCaption, ответ потоком — sendRichMessageDraft. Все они лишь учат бота, <strong>как показывать</strong> сообщение. Что в нём написано, решает владелец бота.",
        },
        {
          t: "p",
          text: "Доверять можно двум местам: балансу внутри игры и истории в приложении банка или платёжного сервиса.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "tolov-qabul-qilindi-uc-yolda",
          text: "Что значит чек «Оплата получена, UC в пути»?",
        },
        {
          t: "p",
          text: "Такой чек — это сообщение самого бота. Как бы красиво он ни был оформлен, он не показывает, кому ушли деньги и на какой Player ID отправлены UC.",
        },
        {
          t: "p",
          text: "Ещё одна деталь: бот может отредактировать своё оформленное сообщение позже. Согласно changelog, в метод editMessageText ради этого добавили параметр rich_message. Если вчера в чеке было «60 UC», завтра там может стоять другой пакет. Поэтому делайте скриншот чека сразу, пока видны сумма, пакет и номер заказа.",
        },
        {
          t: "p",
          text: "В <a href=\"https://core.telegram.org/bots/api\" target=\"_blank\" rel=\"noopener\">документации Bot API</a> поле rich_message в Message означает, что сообщение оформлено в расширенном формате. Это лишь технический признак формата. Он не значит, что продавец проверен или «подтверждён».",
        },
        {
          t: "note",
          tone: "info",
          text: "Скриншот чека пригодится в споре. Но доказательство оплаты — транзакция в банковском приложении, а доказательство зачисления доната — баланс в игре.",
        },
        {
          t: "h2",
          id: "uc-yoki-olmos-haqiqatan-tushganini",
          text: "Как проверить, что UC или алмазы действительно пришли?",
        },
        {
          t: "p",
          text: "Смотрите не на сообщение бота, а на цифры. Порядок такой:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Полностью закройте игру и откройте снова. В PUBG Mobile посмотрите баланс UC, в Mobile Legends и Free Fire — счёт алмазов. Сравните с балансом до покупки.",
            "Если в игре есть почта или история покупок, откройте и их. Запись о пополнении — дополнительное подтверждение.",
            "Откройте приложение банка или платёжного сервиса: UzCard, HUMO, Click или Uzum Bank. Проверьте сумму, время и получателя. Если получатель — личная карта незнакомого человека, это тревожный признак.",
            "Сверьте Player ID, введённый в боте, со своим. В MLBB это и User ID, и Server ID: <a href=\"/blog/mobile-legends-user-id-server-id-qayerda\">где они находятся</a>. Ошибка хотя бы в одной цифре — и валюта уйдёт на чужой аккаунт.",
            "Если валюта не пришла в обещанное время, не платите повторно. Напишите в поддержку продавца с номером заказа и скриншотом чека. Подробный план для каждого случая: <a href=\"/blog/pubg-uc-kelmadi-nima-qilish\">UC не пришли или ID не найден</a>.",
          ],
        },
        {
          t: "p",
          text: "В GemPay валюта обычно зачисляется автоматически за 1–5 минут. Если задержка дольше, напишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> и укажите номер заказа.",
        },
        {
          t: "h2",
          id: "qaysi-sorov-yoki-taklif-chiqsa",
          text: "При каком запросе или предложении нужно остановить оплату?",
        },
        {
          t: "p",
          text: "Каким бы аккуратным ни было оформление, не платите, если видите хотя бы одно из этого:",
        },
        {
          t: "list",
          items: [
            "Просят пароль, SMS- или Telegram-код, логин игрового аккаунта. Для доната нужен только Player ID.",
            "Username аккаунта, который называет себя «ботом», не заканчивается на «bot». Как это проверить: <a href=\"/blog/game-bilan-tugaydigan-donat-boti-tekshirish\">донат-бот с именем «…game»</a>.",
            "Просят перевести деньги на личную карту или заплатить в TON или Gram, а красивый чек присылают как «подтверждение».",
            "Цена заметно ниже рыночной, а в слайд-шоу торопят: «только сегодня», «осталось 5 пакетов».",
            "Бот не показывает ваш ник до оплаты и просит деньги, не проверив Player ID.",
            "Вас отправляют к боту-«гаранту» или посреднику. Похожие схемы: <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">признаки мошенничества в игровом чате</a>.",
          ],
        },
        {
          t: "p",
          text: "Что можно сообщать, а что нельзя, по пунктам разобрано в статье <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">как безопасно пополнить игровой счёт</a>.",
        },
        {
          t: "h2",
          id: "narx-jadvalidagi-paket-tolov-summasiga",
          text: "Как проверить, что пакет из таблицы цен совпадает с суммой к оплате?",
        },
        {
          t: "p",
          text: "До оплаты сделайте скриншот пакета и цены из таблицы, например «60 UC — столько-то сумов». Затем откройте окно оплаты и сравните сумму.",
        },
        {
          t: "p",
          text: "Если сумма отличается от таблицы, не платите и сначала задайте вопрос. Бот может отредактировать таблицу потом, поэтому скриншот, сделанный в момент покупки, — ваше надёжное доказательство в споре.",
        },
        {
          t: "p",
          text: "Надписи «бонус» или «x2» в таблице — тоже просто текст бота. Что придёт на аккаунт, покажут название пакета в окне оплаты и баланс в игре. Чтобы заранее понимать, как устроены пакеты: <a href=\"/blog/pubg-uc-nima-paketlar-royal-pass\">пакеты UC и Royale Pass</a>.",
        },
        {
          t: "h2",
          id: "telegram-yangilanishidan-keyin-uc-olmos",
          text: "Изменился ли порядок покупки UC, алмазов и Stars после обновления Telegram?",
        },
        {
          t: "p",
          text: "Нет. Обновление касается внешнего вида сообщений, а не того, как зачисляется донат. UC и алмазы, как и раньше, покупаются по Player ID, а Telegram Stars и Premium — по @username.",
        },
        {
          t: "p",
          text: "В официальном changelog перечислены только новые блоки и методы. В версии Bot API 10.2 от 14 июля 2026 года добавили элемент списка. По документации, в ответе бота можно указать до 32 цитат общей длиной до 1 024 символов. О проверке оплаты или доната там ничего нет.",
        },
        {
          t: "p",
          text: "В этой статье не подтверждено, в каких чатах и в каких версиях приложения оформленные сообщения отображаются полностью и какие есть ограничения на число блоков и фото в слайд-шоу. Если сообщение бота у вас выглядит проще, попробуйте обновить приложение. Это не говорит ни о том, что бот поддельный, ни о том, что он честный.",
        },
        {
          t: "h2",
          id: "gempay-botida-nimani-ozingiz-tekshira",
          text: "Что вы можете проверить сами в боте GemPay?",
        },
        {
          t: "p",
          text: "И в GemPay главное место проверки — баланс в игре. А процесс в боте устроен так, чтобы каждый шаг вы контролировали сами:",
        },
        {
          t: "list",
          items: [
            "Бот — <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>. Username заканчивается на «bot». Запрашивается только Player ID, пароль не спрашивают никогда.",
            "До оплаты бот проверяет и показывает ник. Платите только после того, как сами его подтвердите, — так меньше риск оплатить чужой аккаунт.",
            "Способы оплаты: UzCard, HUMO, Click, Uzum Bank или баланс бота. Visa и Mastercard не принимаются, зарубежная карта, VPN или криптовалюта не нужны.",
            "Валюта зачисляется автоматически за 1–5 минут. Цены указаны в боте.",
            "Если заказ не выполнен, деньги полностью возвращаются в течение 3 рабочих дней. Валюта, уже зачисленная на счёт, не возвращается. Подробнее: <a href=\"/tolov-va-qaytarish\">оплата и возврат</a>.",
            `Telegram Stars не превращаются в игровую валюту, поэтому покупать Stars ради UC не нужно. Одна звезда стоит ${som(STARS_UNIT_CARD, "ru")} при переводе с карты или с баланса бота и ${som(STARS_UNIT_ONLINE, "ru")} — через Click или Uzum Bank.`,
          ],
        },
        {
          t: "p",
          text: "GemPay — независимый сервис и не действует от имени Telegram или разработчиков игр.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Bot API changelog — June 11, 2026, Bot API 10.1",
              href: "https://core.telegram.org/bots/api-changelog",
            },
            {
              label: "Telegram Bot API (Message → rich_message)",
              href: "https://core.telegram.org/bots/api",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Бот написал «UC отправлены», а баланс в игре не изменился — что делать?",
          a: "Сначала перезапустите игру и убедитесь, что Player ID в боте совпадает с вашим. Если баланс всё равно прежний, не платите заново, а обратитесь в поддержку продавца с номером заказа и скриншотом.",
        },
        {
          q: "Можно ли отправить красивый чек из бота в поддержку как доказательство?",
          a: "Можно, но приложите к нему скриншот транзакции из банковского или платёжного приложения. Чек составляет сам бот и может его потом изменить, а запись в банке бот изменить не может.",
        },
        {
          q: "«Секретный промокод» под спойлером — это настоящая скидка?",
          a: "Спойлер — обычный стиль, которым бот прячет текст, скидку он не гарантирует. Работает ли код, видно только по итоговой сумме в окне оплаты.",
        },
        {
          q: "Красивое сообщение бота у меня выглядит как обычный текст — бот поддельный?",
          a: "Делать вывод о боте по этому нельзя: в каких версиях приложения такие сообщения отображаются полностью, официально не уточнено. Обновите приложение, а бота оценивайте по username, запрашиваемым данным и получателю платежа.",
        },
        {
          q: "Я сделал скриншот таблицы цен, а теперь в боте другая цена — это нормально?",
          a: "Боты могут редактировать свои оформленные сообщения, так что таблица может меняться. Главное — сумма в окне оплаты: если она отличается от оговорённой, не платите и задайте вопрос, показав скриншот.",
        },
        {
          q: "Нужно ли сначала купить Telegram Stars, чтобы получить UC?",
          a: "Нет, Stars не превращаются в игровую валюту. UC, алмазы и CP покупаются напрямую в сумах по Player ID.",
        },
        {
          q: "Бот кроме Player ID просит SMS-код — можно его дать?",
          a: "Не давайте и прекратите переписку. SMS-код, пароль или логин нужны для входа в ваш аккаунт, а для доната достаточно одного Player ID.",
        },
      ],
    },
  },
};

export default article;
