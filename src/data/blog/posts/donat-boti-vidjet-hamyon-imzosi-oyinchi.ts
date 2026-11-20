// Avtoblogyoz yasagan maqola (2026-11-20). Niyat: Klan chatida yoki donat botida xabar ichida o‘yin, tugma yoki «UC olish» vidjetini ko‘rgan o‘yinchi «bot vidjet hamyon ulash xavfsizmi» yoki «Telegram bot vidjet UC» deb qidiradi. U vidjet TON hamyon imzosini so‘rasa, nima qilishni va UC, Stars yoki Premium olish uchun bunga ehtiyoj bor-yo‘qligini bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://core.telegram.org/bots/api-changelog
//   https://core.telegram.org/bots/widgets
//   https://core.telegram.org/bots/api

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "donat-boti-vidjet-hamyon-imzosi-oyinchi",
  game: null,
  type: "trust",
  datePublished: "2026-11-20",
  dateModified: "2026-11-20",
  keywords: ["bot vidjet hamyon imzosi xavfsizmi","telegram bot vidjet UC","donat boti hamyon ulash xavfsizmi","TON hamyon imzo so‘rayapti","telegram vidjet hamyon tranzaksiya imzolash","bot api 10.4 vidjet xavfsizlik","UC olish uchun hamyon kerakmi","виджет бота подпись кошелька безопасно","telegram бот виджет TON кошелек","бот просит подписать транзакцию TON","виджет в сообщении бота UC мошенничество"],
  locales: {
    uz: {
      title: "Donat botining vidjeti TON hamyon imzosini so‘rasa: tasdiqlash xavfsizmi?",
      metaTitle: "Donat botining vidjeti TON hamyon imzosini so‘rasa",
      metaDescription: "Tasdiqlamang: UC, olmos, Stars va Premium olish uchun TON hamyon imzosi kerak emas. Vidjet so‘rovini rad etsangiz, to‘lov ham, imzo ham bajarilmaydi.",
      excerpt: "Tasdiqlamang: UC, olmos, Stars va Premium olish uchun TON hamyon imzosi kerak emas. Vidjet so‘rovini rad etsangiz, to‘lov ham, imzo ham bajarilmaydi.",
      answer: "Tasdiqlamang: UC, olmos, Stars va Premium olish uchun TON hamyon imzosi kerak emas. Vidjet so‘rovini rad etsangiz, to‘lov ham, imzo ham bajarilmaydi.",
      body: [
        {
          t: "h2",
          id: "bot-vidjeti-hamyon-imzosini-sorasa",
          text: "Bot vidjeti hamyon imzosini so‘rasa, tasdiqlash kerakmi?",
        },
        {
          t: "p",
          text: "Tasdiqlamang. UC, olmos, CP, Stars yoki Premium olish uchun TON hamyon imzosi kerak emas. Bunday so‘rovni rad etish to‘g‘ri yo‘l.",
        },
        {
          t: "p",
          text: "Ochilgan oyna soxta bo‘lmasligi ham mumkin. Telegram’ning <a href=\"https://core.telegram.org/bots/widgets\" target=\"_blank\" rel=\"noopener\">vidjetlar hujjatiga</a> ko‘ra, vidjet foydalanuvchidan Telegram’ning ichki hamyoni orqali to‘lov yoki imzo so‘ray oladi. Demak, oyna texnik jihatdan haqiqiy Telegram oynasi bo‘lishi mumkin. Lekin bu uni yuborgan botga ishonish kerak degani emas.",
        },
        {
          t: "p",
          text: "Hamyon oynasida qaysi bot so‘rayotgani, summa va pul qayerga ketishi ko‘rsatiladi. Oxirgi qarorni siz qilasiz. Rad etsangiz, bot REJECTED javobini oladi, to‘lov ham, imzo ham bajarilmaydi.",
        },
        {
          t: "p",
          text: "Asosiy farqni eslab qoling: imzo va to‘lov kripto hamyonda bajariladi. UC, olmos va CP esa Player ID bo‘yicha o‘yin akkauntiga tushadi. Bu ikki yo‘l bir-biriga ulanmagan, shuning uchun hamyonda imzo qo‘yish o‘yindagi balansni to‘ldirmaydi.",
        },
        {
          t: "h2",
          id: "xabar-ichidagi-uc-olish-vidjeti",
          text: "Xabar ichidagi «UC olish» vidjeti nima va qayerdan chiqdi?",
        },
        {
          t: "p",
          text: "<a href=\"https://core.telegram.org/bots/api-changelog\" target=\"_blank\" rel=\"noopener\">Bot API 10.4</a> 2026-yil 9-noyabrda chiqdi. Shu yangilanishda botlar xabar ichida HTML-vidjet yubora oladigan bo‘ldi.",
        },
        {
          t: "p",
          text: "Vidjet — xabarning o‘zida chiziladigan kichik interaktiv blok. Mini App alohida ochiladi, vidjet esa xabarning bir qismi bo‘lib qoladi va internetga chiqa olmaydi.",
        },
        {
          t: "p",
          text: "Vidjetlar bosqichma-bosqich joriy qilinmoqda. Hozircha production muhitida ular faqat shaxsiy chatlarga yuboriladi. Ya’ni «UC olish» vidjeti odatda bot bilan yakkama-yakka suhbatda chiqadi. Klan guruhida vidjetga o‘xshash narsa ko‘rsangiz, bu oddiy tugma yoki havola bo‘lishi mumkin. Unga ham xuddi shunday ehtiyot bilan qarang.",
        },
        {
          t: "p",
          text: "Mavzu Telegram kanallarida tarqalgan xabardan olingan. U yerda vidjetlar bilan «o‘yinlar» ham yuborish mumkinligi aytilgan, lekin rasmiy hujjatda bu vidjet misoli sifatida tasdiqlanmagan. Shuning uchun quyida faqat hujjatda yozilgan narsalar keltirilgan.",
        },
        {
          t: "p",
          text: "Chiroyli dizayn botning halol ekanini isbotlamaydi. UC tushgan-tushmaganini qayerdan bilish haqida: <a href=\"/blog/donat-boti-jadvalli-xabar-uc-tekshirish\">donat boti chiroyli chek yuborsa, nimaga qarash kerak</a>.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "vidjet-nima-qila-oladi-nima",
          text: "Vidjet nima qila oladi, nima qila olmaydi?",
        },
        {
          t: "p",
          text: "Jadval Telegram hujjatiga asoslangan. Uchinchi ustunda bu donat qidirayotgan o‘yinchi uchun nimani anglatishi yozilgan.",
        },
        {
          t: "table",
          head: [
            "Imkoniyat",
            "Rasmiy hujjatda",
            "O‘yinchi uchun ma’nosi",
          ],
          rows: [
            [
              "Botga so‘rov yuborish va javob olish",
              "Ha, bot allow_queries’ni yoqqan bo‘lsa; aks holda barcha so‘rovlar rad etiladi",
              "Bosgan har bir tugmangiz botga boradi",
            ],
            [
              "Yangi xabarsiz yangilanish",
              "Ha, bot vidjet ma’lumotini o‘zgartira oladi",
              "«Qolgan paket: 3 ta» kabi raqamni bot xohlagancha almashtiradi",
            ],
            [
              "Bitta vidjetni ko‘p xabarda ishlatish",
              "Ha, umumiy vidjet bitta obyekt, ommaviy ma’lumotini bot o‘zgartira oladi",
              "Bir xil «aksiya» ko‘p odamga birdan ko‘rinadi",
            ],
            [
              "Internetga chiqish, sayt ochish",
              "Yo‘q: tarmoq bloklangan, tashqi resurs yuklanmaydi, boshqa sahifaga o‘tolmaydi",
              "Vidjetning o‘zi sizni boshqa saytga olib o‘tmaydi",
            ],
            [
              "Fonda o‘zi ishlash",
              "Yo‘q, so‘rov faqat bosilganda ketadi",
              "Bosmasangiz, botga hech narsa ketmaydi",
            ],
            [
              "Boshqa chatga nusxalash",
              "Yo‘q, copyMessage va copyMessages vidjetni rad etadi",
              "«Do‘stlaringizga nusxalab yuboring» topshirig‘i ma’nosiz",
            ],
            [
              "Hamyondan to‘lov yoki imzo so‘rash",
              "Ha, lekin siz tasdiqlaydigan oyna orqali",
              "Asosiy xavf shu yerda",
            ],
          ],
        },
        {
          t: "p",
          text: "Hujjatga ko‘ra, vidjetdagi JavaScript brauzer yoki WebView’da emas, QuickJS deb ataladigan kichik dvigatelda ishlaydi. Tarmoqqa chiqish usullari xato beradi. Ya’ni vidjet sizga ikki yo‘l bilan ta’sir qila oladi: bosganingizda botga ketadigan so‘rov va hamyon oynasi.",
        },
        {
          t: "h2",
          id: "telegram-hamyon-oynasi-ochildi-tasdiqlash",
          text: "Telegram hamyon oynasi ochildi: «Tasdiqlash»dan oldin besh tekshiruv",
        },
        {
          t: "p",
          text: "Oyna ochildi, «Tasdiqlash» tugmasi turibdi. Bosishdan oldin quyidagilarni ketma-ket ko‘rib chiqing:",
        },
        {
          t: "steps",
          items: [
            {
              title: "Bot nomi",
              text: "Oynada so‘rovni qaysi bot yuborgani ko‘rsatiladi. Uni siz bilgan, avval buyurtma bergan bot bilan solishtiring. Botni username bo‘yicha qanday tekshirish haqida: <a href=\"/blog/game-bilan-tugaydigan-donat-boti-tekshirish\">«…game» bilan tugaydigan donat boti</a>.",
            },
            {
              title: "Summa va qabul qiluvchi",
              text: "Manzil pul qayerga ketishini ko‘rsatadi, UC kelishini ta’minlamaydi. Batafsil: <a href=\"/blog/ton-manzilga-donat-tolovi-oyinchi-xavfi\">TON manzilga donat uchun to‘lash xavfi</a>.",
            },
            {
              title: "Imzo nima uchun kerak",
              text: "Imzo aynan shu botga tegishli domen uchun qo‘yiladi: u «bot» so‘zi va bot ID raqamidan iborat. Hujjat botlarga imzoni hamyonning ochiq kaliti bilan tekshirib, kalitni blokcheyndagi manzilga bog‘lashni tavsiya qiladi. Oddiy tilda: imzo bilan siz shu botga «bu hamyon meniki» deb isbot berasiz. UC yoki olmos sotib olish uchun bunga sabab yo‘q.",
            },
            {
              title: "Bot nimani ko‘radi",
              text: "Hamyon chaqiruvida botga profilingizdagi TON hamyon kartasi, uning manzili va balansi beriladi. Notanish bot balansingizni bilsa, keyingi «taklif»ni shunga moslab yuborishi mumkin.",
            },
            {
              title: "Shubha bo‘lsa, rad eting",
              text: "Bot REJECTED javobini oladi, to‘lov ham, imzo ham bajarilmaydi.",
            },
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Hamyon kartasini botga berish uchun alohida rozilik so‘ralishi va bot maxfiy kalitlarni hech qachon olmasligi bu maqolada tasdiqlanmagan. Shuning uchun hamyon kaliti va seed so‘zlarni hech qayerga yozmang.",
        },
        {
          t: "h2",
          id: "uc-olmos-stars-va-premium",
          text: "UC, olmos, Stars va Premium uchun hamyon imzosi kerakmi?",
        },
        {
          t: "p",
          text: "Yo‘q. Jadvalda GemPay’da nima olish uchun nima so‘ralishi ko‘rsatilgan:",
        },
        {
          t: "table",
          head: [
            "Nima olasiz",
            "Nima so‘raladi",
            "Qanday to‘lanadi",
            "Hamyon kerakmi",
          ],
          rows: [
            [
              "UC, olmos, CP",
              "Faqat Player ID, nik tekshirib ko‘rsatiladi",
              "UzCard, HUMO, Click, Uzum Bank yoki bot balansi",
              "Yo‘q",
            ],
            [
              "Telegram Stars",
              "Faqat @username",
              `1 tasi ${som(STARS_UNIT_CARD, "uz")} karta yoki balansdan, ${som(STARS_UNIT_ONLINE, "uz")} Click yoki Uzum Bank orqali`,
              "Yo‘q",
            ],
            [
              "Telegram Premium",
              "Faqat @username",
              `3 oy — ${som(premium(3), "uz")}, 6 oy — ${som(premium(6), "uz")}, 12 oy — ${som(premium(12), "uz")}`,
              "Yo‘q",
            ],
          ],
        },
        {
          t: "p",
          text: "O‘yin valyutasi uchun nikni tasdiqlaganingizdan keyin to‘laysiz, valyuta 1–5 daqiqada avtomatik tushadi. Stars bir buyurtmada 50 dan 10 000 tagacha olinadi va bir necha soniyada keladi. Lekin Stars o‘yin valyutasiga aylanmaydi: jamoadoshga UC kerak bo‘lsa, uning Player ID’si bo‘yicha UC oling. Chatda faol klandoshga esa uning @username’i bo‘yicha Stars yoki Premium berish mumkin — buning uchun ham hamyon kerak emas.",
        },
        {
          t: "p",
          text: "<a href=\"/premium\">Premium</a> Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi, akkauntga kirilmaydi. Narx hamma to‘lov usulida bir xil, 1 oylik tarif yo‘q.",
        },
        {
          t: "p",
          text: "GemPay’da parol, kod, seed so‘z yoki hamyon imzosi so‘ralmaydi. Visa/Mastercard qabul qilinmaydi, xorijiy karta, VPN yoki kripto kerak emas. Bu mavzu batafsil: <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">Telegram Wallet o‘yinchiga kerakmi</a>.",
        },
        {
          t: "h2",
          id: "qaysi-vidjet-sorovi-firibgarlik-belgisi",
          text: "Qaysi vidjet so‘rovi firibgarlik belgisi?",
        },
        {
          t: "list",
          items: [
            "<strong>«Imzo qo‘ying — bonus UC yoki olmos oling».</strong> O‘yin valyutasi Player ID bo‘yicha tushadi. Imzo uchun UC berilishi rasmiy manbalarda yo‘q.",
            "<strong>«Hamyoningiz yo‘qmi? Hozir ochamiz».</strong> Hujjatga ko‘ra, hamyoni yo‘q foydalanuvchiga hamyon chaqiruvi paytida hamyon yaratiladi. Bu sizni avval hamyon ochishga, keyin unga pul solishga undaydigan sxemaning boshlanishi bo‘lishi mumkin.",
            "<strong>Taymer, «oxirgi 5 ta paket».</strong> Bot vidjetdagi ma’lumotni istalgan payt o‘zgartira oladi. Bunday yozuvlar sizni shoshiltirish uchun qo‘yiladi.",
            "<strong>Guruhda faqat sizga ko‘rinadigan javob.</strong> Vaqtinchalik xabarlar Bot API 10.2 da kiritilgan. 10.4 da botlar tugma bosilganda istalgan chatda shunday javob yubora oladigan bo‘ldi, faqat kanalning direct messages chatlari bundan mustasno. Bunday javobni faqat tugmani bosgan odam ko‘radi. Klandoshlaringiz bu taklifni ko‘rmaydi, shuning uchun skrinshot olib, adminlarga ko‘rsating.",
            "<strong>«Vidjetni do‘stlarga nusxalab yuboring».</strong> Vidjetni nusxalab bo‘lmaydi. Bunday topshiriq reklama yoki aldov belgisi.",
            "<strong>Kod, 2FA parol, seed so‘z yoki «tekshiruv uchun» kichik o‘tkazma.</strong> Bularning birortasi so‘ralsa, darhol to‘xtang.",
          ],
        },
        {
          t: "h2",
          id: "imzo-qoyib-yuborgan-bolsangiz-nima",
          text: "Imzo qo‘yib yuborgan bo‘lsangiz, nima qilish kerak?",
        },
        {
          t: "p",
          text: "Vahima qilmang, lekin kechiktirmang ham. Imzo yoki to‘lov faqat siz tasdiqlagan oynada bajarilgan. Keyingi so‘rovlarning hammasini rad eting.",
        },
        {
          t: "list",
          items: [
            "Botni bloklang. Suhbatni o‘chirmang: u dalil sifatida kerak bo‘ladi.",
            "Klan adminlariga xabar bering, boshqalar ham shu botga tushib qolmasin.",
            "Hamyonda nima o‘zgarganini o‘zingiz tekshiring. Imzo botga aynan nimalarga ruxsat bergani bu maqolada tasdiqlanmagan. Shuning uchun kalit va seed so‘zni hech kimga bermang, «tiklab beraman» deb yozgan begona akkauntlarga javob qaytarmang.",
            "Telegram akkauntini ham tekshiring: ikki bosqichli parol yoqilganmi, notanish seanslar yo‘qmi. Qo‘llanma: <a href=\"/blog/888-anonim-raqam-oyinchi-akkaunt-himoyasi\">akkauntni +888 orqali buzishdan himoyalash</a>.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Savolingiz GemPay buyurtmasi bilan bog‘liq bo‘lsa, faqat <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>’ga buyurtma raqami bilan yozing. Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi, hisobga tushgan valyuta qaytarilmaydi. Shartlar: <a href=\"/tolov-va-qaytarish\">to‘lov va qaytarish</a>.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Bot API changelog",
              href: "https://core.telegram.org/bots/api-changelog",
            },
            {
              label: "Telegram Widgets",
              href: "https://core.telegram.org/bots/widgets",
            },
            {
              label: "Telegram Bot API",
              href: "https://core.telegram.org/bots/api",
            },
          ],
        },
      ],
      faq: [
        {
          q: "«UC olish» tugmasini bosib qo‘ydim, endi hamyonimdagi pul ketadimi?",
          a: "Tugmani bosishning o‘zi pul yechmaydi: hujjatga ko‘ra to‘lov va imzo faqat hamyon oynasida siz tasdiqlaganingizdan keyin bajariladi. Oyna ochilsa, «Tasdiqlash» o‘rniga rad etishni tanlang.",
        },
        {
          q: "Notanish donat boti hamyonimda qancha TON borligini bilib oladimi?",
          a: "Hamyon chaqiruvi bo‘lsa, ha: botga profilingizdagi TON hamyon kartasi, manzil va balans beriladi. Buning uchun alohida rozilik so‘ralishi tasdiqlanmagan, shuning uchun bunday botlardagi hamyon so‘rovlarini ochmang.",
        },
        {
          q: "Klan guruhida vidjet ko‘rdim — guruhlarga ham vidjet yuborilyaptimi?",
          a: "Production muhitida vidjetlar hozircha faqat shaxsiy chatlarga yuboriladi. Guruhdagi «vidjet» ko‘pincha oddiy tugma yoki havola bo‘ladi va u ham tekshiruvni talab qiladi.",
        },
        {
          q: "Hamyonim yo‘q edi, vidjet bosgandan keyin hamyon paydo bo‘ldi — bu xavflimi?",
          a: "Hamyon chaqiruvi paytida hamyoni yo‘q foydalanuvchiga hamyon yaratiladi, bu pul yechilganini bildirmaydi. Lekin keyin «hamyonni to‘ldiring» degan so‘rovlar kelsa, bajarmang.",
        },
        {
          q: "GemPay boti UC yoki Stars uchun hamyon imzosini so‘raydimi?",
          a: "Yo‘q. @Gempayuz_bot o‘yin valyutasi uchun Player ID, Stars va Premium uchun @username so‘raydi, to‘lov esa so‘mda karta, Click, Uzum Bank yoki bot balansidan o‘tadi.",
        },
        {
          q: "Vidjetda «UC tushdi» deb yozildi, lekin o‘yinda yo‘q. Qaysi biriga ishonay?",
          a: "O‘yindagi balansga ishoning. Bot vidjet ma’lumotini xohlagan payt o‘zgartira oladi, shuning uchun undagi yozuv dalil emas.",
        },
        {
          q: "Menga hali vidjet kelmagan, do‘stimga kelgan. Nega?",
          a: "Telegram vidjetlarni bosqichma-bosqich joriy qilyapti, ular hammada bir vaqtda paydo bo‘lmasligi mumkin. Bu imkoniyat Bot API’ning 2026-yil 9-noyabrdagi 10.4 versiyasida qo‘shilgan.",
        },
      ],
    },
    ru: {
      title: "Виджет донат-бота просит подпись TON-кошелька: безопасно ли подтверждать?",
      metaTitle: "Виджет донат-бота просит подпись TON-кошелька",
      metaDescription: "Не подтверждайте: для UC, алмазов, Stars и Premium подпись TON-кошелька не нужна. Если отклонить запрос виджета, не пройдёт ни оплата, ни подпись.",
      excerpt: "Не подтверждайте: для UC, алмазов, Stars и Premium подпись TON-кошелька не нужна. Если отклонить запрос виджета, не пройдёт ни оплата, ни подпись.",
      answer: "Не подтверждайте: для UC, алмазов, Stars и Premium подпись TON-кошелька не нужна. Если отклонить запрос виджета, не пройдёт ни оплата, ни подпись.",
      body: [
        {
          t: "h2",
          id: "bot-vidjeti-hamyon-imzosini-sorasa",
          text: "Виджет бота просит подпись кошелька — подтверждать?",
        },
        {
          t: "p",
          text: "Не подтверждайте. Для покупки UC, алмазов, CP, Stars или Premium подпись TON-кошелька не нужна. Такой запрос лучше отклонить.",
        },
        {
          t: "p",
          text: "При этом само окно может быть настоящим. Согласно <a href=\"https://core.telegram.org/bots/widgets\" target=\"_blank\" rel=\"noopener\">документации Telegram по виджетам</a>, виджет может попросить пользователя оплатить что-то или поставить подпись через встроенный кошелёк Telegram. То есть технически это может быть настоящее окно Telegram. Но это ещё не повод доверять боту, который его вызвал.",
        },
        {
          t: "p",
          text: "В окне кошелька видно, какой бот отправил запрос, какая сумма и куда уходят деньги. Решение принимаете вы. Если отклонить запрос, бот получит ответ REJECTED, и не пройдёт ни оплата, ни подпись.",
        },
        {
          t: "p",
          text: "Главное различие такое: подпись и оплата выполняются в криптокошельке, а UC, алмазы и CP зачисляются на игровой аккаунт по Player ID. Эти два пути никак не связаны, поэтому подпись в кошельке не пополнит баланс в игре.",
        },
        {
          t: "h2",
          id: "xabar-ichidagi-uc-olish-vidjeti",
          text: "Что за виджет «Получить UC» внутри сообщения и откуда он взялся?",
        },
        {
          t: "p",
          text: "<a href=\"https://core.telegram.org/bots/api-changelog\" target=\"_blank\" rel=\"noopener\">Bot API 10.4</a> вышел 9 ноября 2026 года. С этим обновлением боты научились отправлять HTML-виджеты прямо внутри сообщений.",
        },
        {
          t: "p",
          text: "Виджет — это небольшой интерактивный блок, который отрисовывается внутри самого сообщения. Mini App открывается отдельно, а виджет остаётся частью сообщения и не может выходить в интернет.",
        },
        {
          t: "p",
          text: "Виджеты внедряют поэтапно. Пока в production-среде их можно отправлять только в личные чаты. Поэтому виджет «Получить UC» обычно приходит в личной переписке с ботом. Если в клановой группе вы видите что-то похожее на виджет, это может быть обычная кнопка или ссылка. К ней стоит относиться так же осторожно.",
        },
        {
          t: "p",
          text: "Тема взята из сообщения, которое разошлось по Telegram-каналам. Там сказано, что через виджеты можно отправлять и «игры», но официальная документация не приводит игры как пример виджета. Поэтому ниже — только то, что написано в документации.",
        },
        {
          t: "p",
          text: "Красивое оформление не доказывает, что бот честный. Как проверить, пришли ли UC, мы разбирали в статье <a href=\"/blog/donat-boti-jadvalli-xabar-uc-tekshirish\">донат-бот прислал красивый чек — на что смотреть</a>.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "vidjet-nima-qila-oladi-nima",
          text: "Что виджет умеет и чего не умеет?",
        },
        {
          t: "p",
          text: "Таблица составлена по документации Telegram. В третьем столбце — что это значит для игрока, который ищет, где задонатить.",
        },
        {
          t: "table",
          head: [
            "Возможность",
            "В официальной документации",
            "Что это значит для игрока",
          ],
          rows: [
            [
              "Отправлять боту запросы и получать ответы",
              "Да, если бот включил allow_queries; иначе все запросы отклоняются",
              "Каждое ваше нажатие уходит боту",
            ],
            [
              "Обновляться без нового сообщения",
              "Да, бот может менять данные виджета",
              "Цифру вроде «Осталось пакетов: 3» бот меняет когда угодно",
            ],
            [
              "Один виджет во многих сообщениях",
              "Да, общий виджет — один объект, его публичные данные бот может менять",
              "Одна и та же «акция» видна сразу многим людям",
            ],
            [
              "Выходить в интернет, открывать сайты",
              "Нет: сеть заблокирована, внешние ресурсы не загружаются, перейти на другую страницу нельзя",
              "Сам виджет не перебросит вас на другой сайт",
            ],
            [
              "Работать в фоне",
              "Нет, запрос уходит только по нажатию",
              "Не нажали — боту ничего не ушло",
            ],
            [
              "Копироваться в другой чат",
              "Нет, copyMessage и copyMessages отклоняют виджеты",
              "Задание «скопируй и отправь друзьям» не имеет смысла",
            ],
            [
              "Просить оплату или подпись из кошелька",
              "Да, но через окно, которое подтверждаете вы",
              "Главный риск именно здесь",
            ],
          ],
        },
        {
          t: "p",
          text: "По документации JavaScript виджета выполняется не в браузере и не в WebView, а в QuickJS — небольшом движке JavaScript. Любые сетевые методы выдают ошибку. Выходит, повлиять на вас виджет может только двумя способами: через запрос, который уходит боту при нажатии, и через окно кошелька.",
        },
        {
          t: "h2",
          id: "telegram-hamyon-oynasi-ochildi-tasdiqlash",
          text: "Открылось окно кошелька Telegram: пять проверок перед «Подтвердить»",
        },
        {
          t: "p",
          text: "Окно открыто, кнопка «Подтвердить» на месте. Прежде чем нажать, проверьте по порядку:",
        },
        {
          t: "steps",
          items: [
            {
              title: "Имя бота",
              text: "В окне указано, какой бот отправил запрос. Сравните его с ботом, которого вы знаете и у которого уже заказывали. Как проверить бота по username: <a href=\"/blog/game-bilan-tugaydigan-donat-boti-tekshirish\">донат-бот, у которого имя заканчивается на «…game»</a>.",
            },
            {
              title: "Сумма и получатель",
              text: "Адрес показывает, куда уйдут деньги, но не гарантирует, что придут UC. Подробнее: <a href=\"/blog/ton-manzilga-donat-tolovi-oyinchi-xavfi\">чем опасна оплата доната на TON-адрес</a>.",
            },
            {
              title: "Зачем нужна подпись",
              text: "Подпись ставится для домена конкретного бота: он состоит из слова «bot» и ID бота. Документация советует ботам проверять подпись публичным ключом кошелька и привязывать ключ к адресу кошелька в блокчейне. Проще говоря, подписью вы доказываете этому боту, что кошелёк ваш. Для покупки UC или алмазов это не нужно.",
            },
            {
              title: "Что увидит бот",
              text: "При вызове кошелька бот получает TON-карточку кошелька из вашего профиля, её адрес и баланс. Если незнакомый бот знает ваш баланс, следующее «предложение» он может подогнать под эту сумму.",
            },
            {
              title: "Сомневаетесь — отклоняйте",
              text: "Бот получит REJECTED, и не пройдёт ни оплата, ни подпись.",
            },
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Мы не нашли подтверждения, что для передачи карточки кошелька боту спрашивается отдельное согласие и что бот никогда не получает секретные ключи. Поэтому ключ кошелька и seed-фразу нигде не вводите.",
        },
        {
          t: "h2",
          id: "uc-olmos-stars-va-premium",
          text: "Нужна ли подпись кошелька для UC, алмазов, Stars и Premium?",
        },
        {
          t: "p",
          text: "Нет. В таблице — что спрашивают в GemPay для каждой покупки:",
        },
        {
          t: "table",
          head: [
            "Что покупаете",
            "Что нужно указать",
            "Как оплатить",
            "Нужен ли кошелёк",
          ],
          rows: [
            [
              "UC, алмазы, CP",
              "Только Player ID, ник показывается для проверки",
              "UzCard, HUMO, Click, Uzum Bank или баланс бота",
              "Нет",
            ],
            [
              "Telegram Stars",
              "Только @username",
              `1 звезда — ${som(STARS_UNIT_CARD, "ru")} с карты или баланса, ${som(STARS_UNIT_ONLINE, "ru")} через Click или Uzum Bank`,
              "Нет",
            ],
            [
              "Telegram Premium",
              "Только @username",
              `3 месяца — ${som(premium(3), "ru")}, 6 месяцев — ${som(premium(6), "ru")}, 12 месяцев — ${som(premium(12), "ru")}`,
              "Нет",
            ],
          ],
        },
        {
          t: "p",
          text: "За игровую валюту вы платите после того, как подтвердите ник, и валюта автоматически приходит за 1–5 минут. Stars можно взять от 50 до 10 000 за один заказ, они приходят за несколько секунд. Но Stars не превращаются в игровую валюту: если тиммейту нужны UC, берите UC по его Player ID. Активному в чате соклановцу можно подарить Stars или Premium по его @username — кошелёк для этого тоже не нужен.",
        },
        {
          t: "p",
          text: "<a href=\"/premium\">Premium</a> подключается через официальный механизм подарков Telegram, входить в ваш аккаунт для этого не нужно. Цена одинаковая при любом способе оплаты, тарифа на 1 месяц нет.",
        },
        {
          t: "p",
          text: "В GemPay не спрашивают пароль, код, seed-фразу или подпись кошелька. Visa/Mastercard не принимаются, но зарубежная карта, VPN или криптовалюта и не нужны. Подробнее об этом — в статье <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">нужен ли игроку Telegram Wallet</a>.",
        },
        {
          t: "h2",
          id: "qaysi-vidjet-sorovi-firibgarlik-belgisi",
          text: "Какие запросы виджета указывают на мошенничество?",
        },
        {
          t: "list",
          items: [
            "<strong>«Поставь подпись — получи бонусные UC или алмазы».</strong> Игровая валюта зачисляется по Player ID. Официальные источники нигде не упоминают UC за подпись.",
            "<strong>«Нет кошелька? Сейчас откроем».</strong> По документации пользователю без кошелька он создаётся в момент вызова кошелька. Так может начинаться схема, где вас сначала уговаривают завести кошелёк, а потом — положить на него деньги.",
            "<strong>Таймер, «последние 5 пакетов».</strong> Бот может менять данные виджета когда угодно. Такие надписи ставят, чтобы вы поторопились.",
            "<strong>Ответ в группе, который видите только вы.</strong> Эфемерные сообщения появились в Bot API 10.2. В 10.4 боты могут отправлять такой ответ на нажатие кнопки в любом чате, кроме чатов личных сообщений каналов (channel direct messages). Его видит только тот, кто нажал кнопку. Соклановцы этого предложения не увидят, поэтому сделайте скриншот и покажите админам.",
            "<strong>«Скопируй виджет и отправь друзьям».</strong> Виджет нельзя скопировать. Такое задание выдаёт рекламу или обман.",
            "<strong>Код, пароль 2FA, seed-фраза или небольшой перевод «для проверки».</strong> Если просят хоть что-то из этого, сразу прекращайте общение.",
          ],
        },
        {
          t: "h2",
          id: "imzo-qoyib-yuborgan-bolsangiz-nima",
          text: "Уже поставили подпись — что делать?",
        },
        {
          t: "p",
          text: "Не паникуйте, но и не откладывайте. Подпись или оплата выполнились только в том окне, которое вы подтвердили. Все следующие запросы отклоняйте.",
        },
        {
          t: "list",
          items: [
            "Заблокируйте бота. Переписку не удаляйте: она пригодится как доказательство.",
            "Предупредите админов клана, чтобы другие не попались на этого бота.",
            "Сами проверьте, что изменилось в кошельке. Какие именно права подпись дала боту, мы подтвердить не смогли. Поэтому ключ и seed-фразу никому не передавайте и не отвечайте незнакомым аккаунтам, которые пишут «помогу восстановить».",
            "Проверьте и Telegram-аккаунт: включён ли двухэтапный пароль и нет ли незнакомых сеансов. Инструкция: <a href=\"/blog/888-anonim-raqam-oyinchi-akkaunt-himoyasi\">как защитить аккаунт от взлома через +888</a>.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Если вопрос касается заказа в GemPay, пишите только в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> с номером заказа. Если заказ не выполнен, деньги полностью возвращаются в течение 3 рабочих дней. Валюта, которая уже зачислена на счёт, не возвращается. Условия: <a href=\"/tolov-va-qaytarish\">оплата и возврат</a>.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Bot API changelog",
              href: "https://core.telegram.org/bots/api-changelog",
            },
            {
              label: "Telegram Widgets",
              href: "https://core.telegram.org/bots/widgets",
            },
            {
              label: "Telegram Bot API",
              href: "https://core.telegram.org/bots/api",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Я нажал кнопку «Получить UC» — теперь деньги из кошелька уйдут?",
          a: "Само нажатие ничего не списывает: по документации оплата и подпись проходят только после вашего подтверждения в окне кошелька. Если окно откроется, вместо «Подтвердить» выберите отклонение.",
        },
        {
          q: "Узнает ли незнакомый донат-бот, сколько TON у меня в кошельке?",
          a: "При вызове кошелька — да: бот получает TON-карточку кошелька из вашего профиля, адрес и баланс. Отдельное согласие на это, по нашим данным, не подтверждено, так что не открывайте запросы кошелька от таких ботов.",
        },
        {
          q: "Увидел виджет в клановой группе — их что, уже шлют в группы?",
          a: "В production-среде виджеты пока можно отправлять только в личные чаты. «Виджет» в группе чаще всего оказывается обычной кнопкой или ссылкой, и её тоже стоит проверить.",
        },
        {
          q: "Кошелька не было, а после нажатия на виджет он появился. Это опасно?",
          a: "Пользователю без кошелька он создаётся в момент вызова кошелька, и это не значит, что с вас что-то списали. Но если потом начнут просить «пополнить кошелёк», не делайте этого.",
        },
        {
          q: "Бот GemPay просит подпись кошелька за UC или Stars?",
          a: "Нет. @Gempayuz_bot спрашивает Player ID для игровой валюты и @username для Stars и Premium, а оплата идёт в сумах с карты, через Click, Uzum Bank или с баланса бота.",
        },
        {
          q: "В виджете написано «UC зачислены», а в игре их нет. Чему верить?",
          a: "Верьте балансу в игре. Бот может в любой момент поменять данные виджета, так что надпись в нём ничего не доказывает.",
        },
        {
          q: "Другу виджеты уже приходят, а мне нет. Почему?",
          a: "Telegram внедряет виджеты поэтапно, поэтому у всех они могут появиться в разное время. Эта возможность добавлена в версии Bot API 10.4 от 9 ноября 2026 года.",
        },
      ],
    },
  },
};

export default article;
