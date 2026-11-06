// Avtoblogyoz yasagan maqola (2026-11-06). Niyat: Telegram’da «game», «ai» yoki «agent» bilan tugaydigan UC yoki olmos sotuvchi botni ko‘rgan o‘yinchi bunday donat botiga ishonsa bo‘ladimi va uni qanday tekshirish kerakligini «telegram game bot username donat» so‘zlari bilan qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/blog/bot-revolution
//   https://core.telegram.org/method/bots.checkUsername
//   https://core.telegram.org/api/bots/managed-bots
//   https://core.telegram.org/api/links
//   https://telegram.org/blog/ai-bot-revolution-11-new-features
//   https://core.telegram.org/bots/features
//   https://core.telegram.org/bots
//   https://core.telegram.org/bots/api-changelog

import type { Article } from "../types";

const article: Article = {
  slug: "game-bilan-tugaydigan-donat-boti-tekshirish",
  game: null,
  type: "trust",
  datePublished: "2026-11-06",
  dateModified: "2026-11-06",
  keywords: ["telegram game bot username donat","game bilan tugaydigan bot","donat boti haqiqiymi","soxta donat bot tekshirish","uc sotuvchi bot firibgar","olmos bot telegram xavfsizmi","bot username bot bilan tugashi","проверить бота доната telegram","бот username заканчивается на game","фейковый бот uc telegram","мошенники донат бот телеграм"],
  locales: {
    uz: {
      title: "UC sotadigan «…game» bot: Telegram donat botini username bo‘yicha tekshirish",
      metaTitle: "UC sotadigan «…game» bot: Telegram donat botini username",
      metaDescription: "Yo‘q, bot sifatida ishonmang: Telegram qoidasiga ko‘ra har bir bot username’i «bot» bilan tugaydi, «…game» yoki «…ai» nomli «bot» esa oddiy akkaunt.",
      excerpt: "Yo‘q, bot sifatida ishonmang: Telegram qoidasiga ko‘ra har bir bot username’i «bot» bilan tugaydi, «…game» yoki «…ai» nomli «bot» esa oddiy akkaunt.",
      answer: "Yo‘q, bot sifatida ishonmang: Telegram qoidasiga ko‘ra har bir bot username’i «bot» bilan tugaydi, «…game» yoki «…ai» nomli «bot» esa oddiy akkaunt.",
      body: [
        {
          t: "h2",
          id: "klan-chatida-uc-game-degan",
          text: "Klan chatida «@uc_game» degan donat boti ko‘rindi: unga to‘lasa bo‘ladimi?",
        },
        {
          t: "p",
          text: "To‘lamang. Avval nomining oxiriga qarang. Telegram’da bot username’i faqat «bot» bilan tugashi mumkin. Bu talab Telegram blogida ham, dasturchilar uchun texnik hujjatlarda ham yozilgan (<a href=\"https://telegram.org/blog/bot-revolution\" target=\"_blank\" rel=\"noopener\">Telegram Bot Platform</a>).",
        },
        {
          t: "p",
          text: "Vaziyat odatda shunday bo‘ladi. Kimdir klan chatiga «UC 2 baravar arzon, avtomatik bot» deb havola tashlaydi. Havola ortida @uc_game, @olmos_ai yoki @donat_agent kabi nom turadi. Bu nomlar misol uchun o‘ylab topilgan, lekin sxema real. Ular bot bo‘la olmaydi. Demak, bu oddiy foydalanuvchi akkaunti, kanal yoki guruh, xabarlarga esa odam qo‘lda javob yozadi.",
        },
        {
          t: "p",
          text: "Bunday «bot»ga to‘lov qilsangiz, pul avtomatik tizimga emas, notanish odamning kartasiga ketadi. Valyuta tushmasa, so‘raydigan joy ham, buyurtma raqami ham bo‘lmaydi.",
        },
        {
          t: "p",
          text: "Teskari xulosa ham noto‘g‘ri. Username «bot» bilan tugashi uni halol qilmaydi, chunki botni istalgan odam ochishi mumkin. Shuning uchun nom tekshiruvi — faqat birinchi qadam.",
        },
        {
          t: "h2",
          id: "telegram-hujjatlarida-bot-nomi-haqida",
          text: "Telegram hujjatlarida bot nomi haqida nima yozilgan?",
        },
        {
          t: "p",
          text: "Bot nomini Telegram texnik darajada tekshiradi. Rasmiy hujjatlarda to‘rtta qoida bor:",
        },
        {
          t: "list",
          items: [
            "Username’da faqat lotin harflari, raqamlar va pastki chiziq bo‘ladi. U «bot» bilan tugaydi, to‘liq uzunligi 5–32 belgi (<a href=\"https://core.telegram.org/method/bots.checkUsername\" target=\"_blank\" rel=\"noopener\">bots.checkUsername</a>).",
            "Bot uchun «bot» qo‘shimchasisiz nom yuborilsa, Telegram API USERNAME_SUFFIX_MISSING xatosini qaytaradi. Ya’ni bunday nomni bot ololmaydi.",
            "Boshqa bot orqali yaratiladigan (managed) botlarga ham shu talab qo‘yiladi (<a href=\"https://core.telegram.org/api/bots/managed-bots\" target=\"_blank\" rel=\"noopener\">Managed bots</a>).",
            "Havola orqali bot nomi taklif qilinsa-yu, u «bot» bilan tugamasa, ilova foydalanuvchiga ko‘rsatishdan oldin nom oxiriga «bot» qo‘shadi (<a href=\"https://core.telegram.org/api/links\" target=\"_blank\" rel=\"noopener\">Deep links</a>).",
          ],
        },
        {
          t: "p",
          text: "Shu qoidalarni o‘yinchi ko‘radigan nomlarga qo‘llab ko‘ramiz:",
        },
        {
          t: "table",
          head: [
            "Username misoli",
            "Bot bo‘la oladimi",
            "Sabab",
          ],
          rows: [
            [
              "@Gempayuz_bot",
              "Ha",
              "Oxiri «bot»",
            ],
            [
              "@uc_game",
              "Yo‘q",
              "Oxiri «game»",
            ],
            [
              "@olmos_ai",
              "Yo‘q",
              "Oxiri «ai»",
            ],
            [
              "@donat_agent",
              "Yo‘q",
              "Oxiri «agent»",
            ],
            [
              "@gempay_support",
              "Yo‘q",
              "Oxiri «support» — oddiy akkaunt",
            ],
            [
              "@ucbotgame",
              "Yo‘q",
              "«bot» o‘rtada, oxirida emas",
            ],
            [
              "@uc_arzon_bot",
              "Ha, bot bo‘la oladi",
              "Nom to‘g‘ri, lekin xizmat halolligini bu isbotlamaydi",
            ],
          ],
        },
        {
          t: "p",
          text: "Oxirgi ikki qatorga e’tibor bering. «bot» so‘zi o‘rtada tursa, bu yetarli emas. Oxirida tursa, bu faqat texnik belgi, ishonch kafolati emas.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "tolovdan-oldin-bir-daqiqalik-tekshiruv",
          text: "To‘lovdan oldin bir daqiqalik tekshiruv",
        },
        {
          t: "p",
          text: "UC, olmos yoki CP olishdan oldin har safar shu besh qadamni bajaring:",
        },
        {
          t: "steps",
          items: [
            {
              title: "Profilni oching va @ dan keyingi nomni o‘qing",
              text: "Ko‘rinadigan ism emas, aynan username kerak. Ismga «UC Bot» yoki «Official» deb istalgan narsani yozish mumkin.",
            },
            {
              title: "Nomni harfma-harf solishtiring",
              text: "Tanish xizmat nomiga bitta belgi qo‘shilgan yoki almashtirilgan bo‘lishi mumkin: katta I va kichik l, nol va o harfi, «rn» va «m».",
            },
            {
              title: "Botni saytdagi havoladan oching",
              text: "Telegram qidiruvida bir-biriga o‘xshash nomlar ko‘p chiqadi. Xizmatning o‘z saytidagi tugmani bosing.",
            },
            {
              title: "Nima so‘ralayotganini baholang",
              text: "Donat uchun o‘yin ID’si yetadi: PUBG Mobile va Free Fire’da Player ID (<a href=\"/blog/pubg-mobile-player-id-qayerda\">PUBG’da qayerda turadi</a>), Mobile Legends’da User ID va Server ID (<a href=\"/blog/mobile-legends-user-id-server-id-qayerda\">ular qayerda</a>).",
            },
            {
              title: "To‘lov tartibiga qarang",
              text: "Halol xizmatda avval nik ko‘rsatiladi, siz tasdiqlaysiz, keyin to‘laysiz va buyurtma raqami olasiz. «Kartaga tashlab, chekni yuboring» degan tartib — xavf belgisi.",
            },
          ],
        },
        {
          t: "p",
          text: "Qaysi ma’lumotni bersa bo‘ladi va qaysi biri akkauntni yo‘qotishga olib keladi — <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">o‘yin hisobini xavfsiz to‘ldirish</a> maqolasida batafsil yozilgan.",
        },
        {
          t: "h2",
          id: "chat-ichida-bot-bilan-odamni",
          text: "Chat ichida bot bilan odamni qanday ajratasiz?",
        },
        {
          t: "p",
          text: "Username’ni yashirib bo‘lmaydi, lekin uni o‘qimay o‘tib ketish oson. Shunda chat oynasining yuqori qatoriga qarang. Rasmiy hujjatga ko‘ra, botda «oxirgi marta … bo‘lgan» yoki «onlayn» holati bo‘lmaydi, uning o‘rnida «bot» yorlig‘i turadi (<a href=\"https://core.telegram.org/bots\" target=\"_blank\" rel=\"noopener\">Bots: An introduction for developers</a>). Sarlavha ostida «onlayn» yozuvi ko‘rinsa, siz odam bilan gaplashyapsiz.",
        },
        {
          t: "p",
          text: "Muloqot uslubi ham ko‘p narsani aytadi:",
        },
        {
          t: "list",
          items: [
            "Bot tugma va menyu bilan ishlaydi, javobi bir xil va darhol keladi.",
            "Odam boshqaradigan akkaunt «salom, qancha UC kerak?» deb boshlaydi, bir necha daqiqa kechikib javob beradi, savolga savol bilan qaytadi.",
            "Akkaunt to‘lov uchun shaxsiy karta raqamini matn qilib yuboradi. Botda esa to‘lov bosqichi tizim ichida o‘tadi.",
          ],
        },
        {
          t: "p",
          text: "Bitta belgi o‘zi hal qilmaydi, lekin ikki-uchtasi birga chiqsa, to‘lovni to‘xtating.",
        },
        {
          t: "h2",
          id: "ai-agent-va-game-sozlari",
          text: "«AI agent» va «game» so‘zlari nega ishonch uyg‘otadi?",
        },
        {
          t: "p",
          text: "«game» qo‘shimchasi nomni o‘yinchiga yaqin qiladi: go‘yo bu o‘yin xizmatining bir qismi. «ai» va «agent» esa boshqa taassurot beradi: odam aralashmaydi, demak tez va arzon.",
        },
        {
          t: "p",
          text: "Bu taassurot bo‘sh joydan chiqmagan. Telegram botlarni sun’iy intellekt tomonga rivojlantiryapti. Blogda Bot-to-Bot funksiyasi ish jarayonlarini to‘liq avtonom agentlar bilan avtomatlashtirishga imkon berishi aytilgan (<a href=\"https://telegram.org/blog/ai-bot-revolution-11-new-features\" target=\"_blank\" rel=\"noopener\">Telegram blogi</a>). Hujjatlarda esa koordinator bot buyurtmani boshqa botlar yordamida qayta ishlaydigan ko‘p agentli misol bor (<a href=\"https://core.telegram.org/bots/features\" target=\"_blank\" rel=\"noopener\">Telegram Bot Features</a>).",
        },
        {
          t: "p",
          text: "Firibgarlar uchun muhim bo‘lgan tafsilotni eslab qoling: Telegram’dagi AI agent ham bot, shuning uchun uning nomi ham «bot» bilan tugaydi. O‘zini «AI agent» deb tanishtirgan, lekin nomi «…_agent» bilan tugaydigan suhbatdosh — oddiy akkaunt.",
        },
        {
          t: "h3",
          text: "Kanaldagi «yangi qo‘shimchalar» xabari-chi?",
        },
        {
          t: "p",
          text: "Ba’zi kanallarda botlar uchun «agent», «ai», «game», «app» kabi qo‘shimchalar va «Agent» yorlig‘i paydo bo‘lishi haqida postlar tarqaldi. Bu maqola tayyorlanganda rasmiy Telegram manbalarida bunday o‘zgarish tasdiqlanmagan. Uning Premium bilan bog‘liqligi ham tasdiqlanmagan. Hujjatlar hamon «bot» qo‘shimchasini talab qiladi.",
        },
        {
          t: "p",
          text: "Yangilikni o‘zingiz tekshirmoqchi bo‘lsangiz, <a href=\"https://telegram.org/blog\" target=\"_blank\" rel=\"noopener\">Telegram blogi</a> va <a href=\"https://core.telegram.org/bots/api-changelog\" target=\"_blank\" rel=\"noopener\">Bot API changelog</a> sahifalariga qarang. Kanal posti rasmiy e’lon emas. Bunday xabarlarni saralash haqida <a href=\"/blog/telegram-beta-balans-qr-kod-oyinchi\">Telegram beta funksiyalari va klanga Stars berish</a> maqolasida ham yozganmiz.",
        },
        {
          t: "h2",
          id: "qaysi-sorovdan-keyin-suhbatni-darhol",
          text: "Qaysi so‘rovdan keyin suhbatni darhol yopish kerak?",
        },
        {
          t: "p",
          text: "Quyidagilardan biri chiqsa, nom qanday tugashidan qat’i nazar, yozishmani to‘xtating:",
        },
        {
          t: "list",
          items: [
            "o‘yin akkaunti paroli yoki Google, Apple, Facebook orqali kirish ma’lumoti;",
            "o‘yin akkauntiga kirish uchun telefoningizga kelgan kod;",
            "Telegram kirish kodi yoki ikki bosqichli tasdiqlash paroli;",
            "«faqat bugun yarim narxda» kabi shoshiltirish va bozordagidan ancha past narx;",
            "notanish «garant» orqali yoki boshqa chatga o‘tib to‘lash talabi — bunday sxemalar <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">o‘yin chatidagi gift takliflari</a> maqolasida tahlil qilingan;",
            "klan chatiga notanish odam tashlagan donat havolasi — u bilan nima qilish haqida <a href=\"/blog/klan-chatida-shubhali-havola-spam-cheklov\">klan chatidagi shubhali havolalar</a> maqolasida yozilgan.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Telegram kodi faqat o‘z qurilmangizda akkauntga kirish uchun kerak. Uni donat uchun hech qanday bot, «operator» yoki «agent»ga bermang.",
        },
        {
          t: "h2",
          id: "pul-ketib-qolgan-bolsa-birinchi",
          text: "Pul ketib qolgan bo‘lsa, birinchi navbatda nima qilinadi?",
        },
        {
          t: "steps",
          items: [
            {
              title: "Ikkinchi marta to‘lamang",
              text: "«Komissiyani to‘lasangiz UC tushadi» yoki «tekshiruv uchun yana tashlang» — o‘sha sxemaning davomi.",
            },
            {
              title: "Hammasini skrinshot qiling",
              text: "Username, yozishma va to‘lov chekini saqlang. Akkaunt nomini o‘zgartirsa yoki chatni o‘chirsa ham, dalil qoladi.",
            },
            {
              title: "Bankka yoki to‘lov ilovasiga yozing",
              text: "Karta chiqargan bank yoki Click, Uzum Bank qo‘llab-quvvatlash xizmatiga murojaat qiling. Natija ularning qaroriga bog‘liq, shuning uchun kechiktirmang.",
            },
            {
              title: "Akkauntdan Telegram’ga shikoyat qiling",
              text: "Profildagi «Report» bandidan foydalaning va klan chatidagi do‘stlarni ogohlantiring.",
            },
            {
              title: "Kod yoki parol bergan bo‘lsangiz,",
              text: "o‘yin va Telegram parolini almashtiring, begona seanslarni yoping va ikki bosqichli tasdiqlashni yoqing.",
            },
          ],
        },
        {
          t: "p",
          text: "«Pulni qaytarish uchun karta ma’lumotingizni yuboring» degan xabar kelsa, bu ham davom etayotgan aldov. Karta ma’lumotini yubormang.",
        },
        {
          t: "h2",
          id: "gempayda-donat-haqiqiy-botni-qanday",
          text: "GemPay’da donat: haqiqiy botni qanday tanish mumkin",
        },
        {
          t: "p",
          text: "GemPay’dan UC, olmos yoki CP olayotganda ham yuqoridagi tekshiruvni o‘tkazing. Quyidagilar mos kelishi kerak:",
        },
        {
          t: "list",
          items: [
            "<strong>Bot:</strong> <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>. Nom «bot» bilan tugaydi va <a href=\"https://www.gempay.uz\">gempay.uz</a> saytidagi havola bilan bir xil.",
            "<strong>So‘raladigan ma’lumot:</strong> faqat Player ID. Parol hech qachon so‘ralmaydi.",
            "<strong>Tartib:</strong> bot nikni tekshirib ko‘rsatadi, siz tasdiqlaysiz, keyin to‘laysiz. Valyuta 1–5 daqiqada avtomatik tushadi.",
            "<strong>To‘lov:</strong> UzCard, HUMO, Click, Uzum Bank yoki bot balansi. Visa/Mastercard qabul qilinmaydi; xorijiy karta, VPN yoki kripto kerak emas.",
            "<strong>Qaytarish:</strong> buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi. Hisobga tushgan valyuta qaytarilmaydi. Batafsil ma’lumot saytdagi «To‘lov va qaytarish» sahifasida.",
            "<strong>Yordam:</strong> faqat <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>, buyurtma raqami bilan.",
          ],
        },
        {
          t: "p",
          text: "«GemPay game», «GemPay AI» yoki «GemPay support» nomi bilan yozgan akkauntlar bizniki emas. GemPay mustaqil xizmat: u Telegram yoki o‘yin ishlab chiquvchilari nomidan ish ko‘rmaydi.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Telegram Bot Platform",
              href: "https://telegram.org/blog/bot-revolution",
            },
            {
              label: "bots.checkUsername",
              href: "https://core.telegram.org/method/bots.checkUsername",
            },
            {
              label: "Managed bots",
              href: "https://core.telegram.org/api/bots/managed-bots",
            },
            {
              label: "Deep links",
              href: "https://core.telegram.org/api/links",
            },
            {
              label: "Guest AI Bots, Bot-to-Bot Chats, Chat Automation, Custom AI Styles, 100M+ Emoji & Sticker Search and Much More",
              href: "https://telegram.org/blog/ai-bot-revolution-11-new-features",
            },
            {
              label: "Telegram Bot Features",
              href: "https://core.telegram.org/bots/features",
            },
            {
              label: "Bots: An introduction for developers",
              href: "https://core.telegram.org/bots",
            },
            {
              label: "Bot API changelog",
              href: "https://core.telegram.org/bots/api-changelog",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Jamoadoshim «@olmos_ai» orqali arzon olmos olganini aytdi. Men ham olsam bo‘ladimi?",
          a: "Bir marta ishlagan bo‘lishi kafolat emas: bunday akkaunt bot emas, ortida odam turadi va keyingi to‘lovda yo‘qolib qolishi mumkin. Buyurtma raqami va qaytarish tartibi bo‘lmagan joyga to‘lov qilmang.",
        },
        {
          q: "Klan admini chatga donat botini tashladi. Unga ishonsa bo‘ladimi?",
          a: "Kim tashlaganidan qat’i nazar, username oxirini va chatdagi «bot» yorlig‘ini tekshiring. Adminning akkaunti buzilgan bo‘lishi ham mumkin, shuning uchun botni xizmatning o‘z saytidan ochgan ma’qul.",
        },
        {
          q: "Bot Player ID’dan tashqari telefon raqamim yoki kodni so‘rayapti. Bu normalmi?",
          a: "Yo‘q. O‘yin valyutasini to‘ldirish uchun ID kifoya. Kod yoki parol so‘rash akkauntni egallab olishga urinish belgisi, shuning uchun suhbatni to‘xtating.",
        },
        {
          q: "Kanalda «game» nomli botlarga ruxsat berildi degan post ko‘rdim. Qayerdan tekshiraman?",
          a: "Telegram blogi va core.telegram.org’dagi Bot API changelog sahifasiga qarang. Hozircha hujjatlar bot nomining «bot» bilan tugashini talab qiladi, postdagi gap esa tasdiqlanmagan.",
        },
        {
          q: "GemPay botida UC’dan tashqari Telegram Stars ham bormi? Ularni UC’ga almashtirsa bo‘ladimi?",
          a: "Ha, @Gempayuz_bot’da Stars va Premium ham bor. Lekin Stars o‘yin valyutasiga aylanmaydi: UC yoki olmos alohida, Player ID bo‘yicha olinadi.",
        },
        {
          q: "«…_game» akkaunti pulimni qaytarish uchun karta ma’lumotini so‘rayapti. Nima qilay?",
          a: "Hech narsa yubormang. Bu odatda ikkinchi bosqichdagi aldov. Chekni va yozishmani saqlab, bankingiz yoki to‘lov ilovasi qo‘llab-quvvatlash xizmatiga yozing.",
        },
      ],
    },
    ru: {
      title: "Бот «…game» продаёт UC: как проверить донат-бота в Telegram по username",
      metaTitle: "Бот «…game» продаёт UC: как проверить донат-бота в Telegram",
      metaDescription: "Нет, как боту ему не доверяйте: по правилам Telegram username любого бота заканчивается на «bot», а «бот» с именем «…game» или «…ai» — обычный аккаунт.",
      excerpt: "Нет, как боту ему не доверяйте: по правилам Telegram username любого бота заканчивается на «bot», а «бот» с именем «…game» или «…ai» — обычный аккаунт.",
      answer: "Нет, как боту ему не доверяйте: по правилам Telegram username любого бота заканчивается на «bot», а «бот» с именем «…game» или «…ai» — обычный аккаунт.",
      body: [
        {
          t: "h2",
          id: "klan-chatida-uc-game-degan",
          text: "В чате клана появился донат-бот «@uc_game»: можно ли ему платить?",
        },
        {
          t: "p",
          text: "Не платите. Сначала посмотрите на окончание имени. В Telegram username бота может заканчиваться только на «bot». Это требование есть и в блоге Telegram, и в технической документации для разработчиков (<a href=\"https://telegram.org/blog/bot-revolution\" target=\"_blank\" rel=\"noopener\">Telegram Bot Platform</a>).",
        },
        {
          t: "p",
          text: "Обычно всё выглядит так. Кто-то кидает в чат клана ссылку с подписью «UC в 2 раза дешевле, автоматический бот». За ссылкой стоит имя вроде @uc_game, @olmos_ai или @donat_agent. Эти имена придуманы для примера, но схема реальная. Ботом такой аккаунт быть не может. Значит, это обычный пользовательский аккаунт, канал или группа, а на сообщения отвечает человек вручную.",
        },
        {
          t: "p",
          text: "Если заплатить такому «боту», деньги уйдут не в автоматическую систему, а на карту незнакомого человека. Если валюта не придёт, спросить будет не у кого, и номера заказа у вас тоже не будет.",
        },
        {
          t: "p",
          text: "Обратный вывод тоже неверен. Окончание «bot» не делает сервис честным: бота может создать кто угодно. Поэтому проверка имени — только первый шаг.",
        },
        {
          t: "h2",
          id: "telegram-hujjatlarida-bot-nomi-haqida",
          text: "Что документация Telegram говорит об имени бота?",
        },
        {
          t: "p",
          text: "Имя бота Telegram проверяет на техническом уровне. В официальной документации есть четыре правила:",
        },
        {
          t: "list",
          items: [
            "В username допускаются только латинские буквы, цифры и нижнее подчёркивание. Он заканчивается на «bot», полная длина — 5–32 символа (<a href=\"https://core.telegram.org/method/bots.checkUsername\" target=\"_blank\" rel=\"noopener\">bots.checkUsername</a>).",
            "Если для бота передать имя без окончания «bot», Telegram API вернёт ошибку USERNAME_SUFFIX_MISSING. То есть такое имя бот получить не может.",
            "То же требование действует для управляемых (managed) ботов, которые создаются через другого бота (<a href=\"https://core.telegram.org/api/bots/managed-bots\" target=\"_blank\" rel=\"noopener\">Managed bots</a>).",
            "Если имя бота предлагается через ссылку и не заканчивается на «bot», приложение само дописывает «bot», прежде чем показать его пользователю (<a href=\"https://core.telegram.org/api/links\" target=\"_blank\" rel=\"noopener\">Deep links</a>).",
          ],
        },
        {
          t: "p",
          text: "Применим эти правила к именам, которые встречаются игрокам:",
        },
        {
          t: "table",
          head: [
            "Пример username",
            "Может ли быть ботом",
            "Причина",
          ],
          rows: [
            [
              "@Gempayuz_bot",
              "Да",
              "Заканчивается на «bot»",
            ],
            [
              "@uc_game",
              "Нет",
              "Заканчивается на «game»",
            ],
            [
              "@olmos_ai",
              "Нет",
              "Заканчивается на «ai»",
            ],
            [
              "@donat_agent",
              "Нет",
              "Заканчивается на «agent»",
            ],
            [
              "@gempay_support",
              "Нет",
              "Заканчивается на «support» — обычный аккаунт",
            ],
            [
              "@ucbotgame",
              "Нет",
              "«bot» в середине, а не в конце",
            ],
            [
              "@uc_arzon_bot",
              "Да, может быть ботом",
              "Имя корректное, но честность сервиса это не доказывает",
            ],
          ],
        },
        {
          t: "p",
          text: "Обратите внимание на две последние строки. Слова «bot» в середине имени недостаточно. А если оно стоит в конце, это лишь технический признак, а не гарантия надёжности.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "tolovdan-oldin-bir-daqiqalik-tekshiruv",
          text: "Проверка за одну минуту перед оплатой",
        },
        {
          t: "p",
          text: "Перед каждой покупкой UC, алмазов или CP проходите эти пять шагов:",
        },
        {
          t: "steps",
          items: [
            {
              title: "Откройте профиль и прочитайте имя после @",
              text: "Нужен именно username, а не отображаемое имя. В имени можно написать что угодно: «UC Bot», «Official» и так далее.",
            },
            {
              title: "Сверьте имя буква за буквой",
              text: "К названию знакомого сервиса могут добавить или заменить один символ: заглавная I и строчная l, ноль и буква o, «rn» вместо «m».",
            },
            {
              title: "Открывайте бота по ссылке с сайта",
              text: "В поиске Telegram много похожих имён. Нажимайте кнопку на собственном сайте сервиса.",
            },
            {
              title: "Оцените, что у вас просят",
              text: "Для доната достаточно игрового ID: в PUBG Mobile и Free Fire это Player ID (<a href=\"/blog/pubg-mobile-player-id-qayerda\">где он в PUBG</a>), в Mobile Legends — User ID и Server ID (<a href=\"/blog/mobile-legends-user-id-server-id-qayerda\">где их найти</a>).",
            },
            {
              title: "Посмотрите на порядок оплаты",
              text: "В честном сервисе сначала показывают ник, вы подтверждаете, затем платите и получаете номер заказа. Схема «переведи на карту и пришли чек» — тревожный сигнал.",
            },
          ],
        },
        {
          t: "p",
          text: "Какие данные можно давать, а какие приводят к потере аккаунта, подробно разобрано в статье <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">о безопасном пополнении игрового счёта</a>.",
        },
        {
          t: "h2",
          id: "chat-ichida-bot-bilan-odamni",
          text: "Как в чате отличить бота от человека?",
        },
        {
          t: "p",
          text: "Username скрыть нельзя, но его легко пропустить. Тогда посмотрите на верхнюю строку окна чата. По официальной документации, у бота нет статуса «был(а) в сети…» или «в сети» — вместо него стоит метка «bot» (<a href=\"https://core.telegram.org/bots\" target=\"_blank\" rel=\"noopener\">Bots: An introduction for developers</a>). Если под заголовком видно «в сети», вы общаетесь с человеком.",
        },
        {
          t: "p",
          text: "Многое выдаёт и манера общения:",
        },
        {
          t: "list",
          items: [
            "Бот работает через кнопки и меню, отвечает одинаково и сразу.",
            "Аккаунт, которым управляет человек, начинает с «привет, сколько UC нужно?», отвечает с задержкой в несколько минут, на вопрос отвечает вопросом.",
            "Аккаунт присылает номер личной карты текстом. У бота этап оплаты проходит внутри системы.",
          ],
        },
        {
          t: "p",
          text: "Один признак сам по себе ничего не решает, но если совпали два-три, остановите оплату.",
        },
        {
          t: "h2",
          id: "ai-agent-va-game-sozlari",
          text: "Почему слова «AI agent» и «game» вызывают доверие?",
        },
        {
          t: "p",
          text: "Окончание «game» делает имя ближе игроку: будто это часть игрового сервиса. «ai» и «agent» создают другое впечатление: человек не участвует, значит, быстро и дёшево.",
        },
        {
          t: "p",
          text: "Это впечатление возникло не на пустом месте. Telegram развивает ботов в сторону искусственного интеллекта. В блоге сказано, что функция Bot-to-Bot позволяет автоматизировать рабочие процессы с помощью полностью автономных агентов (<a href=\"https://telegram.org/blog/ai-bot-revolution-11-new-features\" target=\"_blank\" rel=\"noopener\">блог Telegram</a>). А в документации есть пример многоагентной схемы, где бот-координатор обрабатывает заказ с помощью других ботов (<a href=\"https://core.telegram.org/bots/features\" target=\"_blank\" rel=\"noopener\">Telegram Bot Features</a>).",
        },
        {
          t: "p",
          text: "Запомните деталь, которая важна именно против мошенников: AI-агент в Telegram — тоже бот, поэтому и его имя заканчивается на «bot». Собеседник, который представляется «AI-агентом», но чьё имя заканчивается на «…_agent», — обычный аккаунт.",
        },
        {
          t: "h3",
          text: "А как же пост в канале о «новых окончаниях»?",
        },
        {
          t: "p",
          text: "В некоторых каналах разошлись посты о том, что у ботов появятся окончания вроде «agent», «ai», «game», «app» и метка «Agent». На момент подготовки статьи официальные источники Telegram такое изменение не подтверждали. Связь с Premium тоже не подтверждена. Документация по-прежнему требует окончание «bot».",
        },
        {
          t: "p",
          text: "Если хотите проверить новость сами, смотрите <a href=\"https://telegram.org/blog\" target=\"_blank\" rel=\"noopener\">блог Telegram</a> и <a href=\"https://core.telegram.org/bots/api-changelog\" target=\"_blank\" rel=\"noopener\">Bot API changelog</a>. Пост в канале — не официальное объявление. О том, как отсеивать такие новости, мы писали и в статье <a href=\"/blog/telegram-beta-balans-qr-kod-oyinchi\">о бета-функциях Telegram и передаче Stars клану</a>.",
        },
        {
          t: "h2",
          id: "qaysi-sorovdan-keyin-suhbatni-darhol",
          text: "После какого запроса разговор нужно сразу закрыть?",
        },
        {
          t: "p",
          text: "Если появилось хотя бы одно из перечисленного, прекращайте переписку, как бы ни заканчивалось имя:",
        },
        {
          t: "list",
          items: [
            "пароль от игрового аккаунта или данные входа через Google, Apple, Facebook;",
            "код, пришедший на ваш телефон для входа в игровой аккаунт;",
            "код входа в Telegram или пароль двухэтапной проверки;",
            "спешка вроде «только сегодня за полцены» и цена намного ниже рыночной;",
            "требование заплатить через незнакомого «гаранта» или перейти в другой чат — такие схемы разобраны в статье <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">о предложениях гифтов в игровом чате</a>;",
            "донат-ссылка, которую незнакомец кинул в чат клана, — что с ней делать, написано в статье <a href=\"/blog/klan-chatida-shubhali-havola-spam-cheklov\">о подозрительных ссылках в чате клана</a>.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Код Telegram нужен только для входа в аккаунт на вашем собственном устройстве. Не отдавайте его ради доната никакому боту, «оператору» или «агенту».",
        },
        {
          t: "h2",
          id: "pul-ketib-qolgan-bolsa-birinchi",
          text: "Деньги уже ушли: что делать в первую очередь?",
        },
        {
          t: "steps",
          items: [
            {
              title: "Не платите второй раз",
              text: "«Оплатите комиссию, и UC придут» или «переведите ещё раз для проверки» — продолжение той же схемы.",
            },
            {
              title: "Сделайте скриншоты всего",
              text: "Сохраните username, переписку и чек об оплате. Даже если аккаунт сменит имя или удалит чат, доказательства останутся.",
            },
            {
              title: "Напишите в банк или платёжное приложение",
              text: "Обратитесь в банк, выпустивший карту, или в поддержку Click, Uzum Bank. Результат зависит от их решения, поэтому не тяните.",
            },
            {
              title: "Пожалуйтесь на аккаунт в Telegram",
              text: "Используйте пункт «Пожаловаться» в профиле и предупредите друзей в чате клана.",
            },
            {
              title: "Если вы отдали код или пароль,",
              text: "смените пароли от игры и Telegram, завершите чужие сеансы и включите двухэтапную проверку.",
            },
          ],
        },
        {
          t: "p",
          text: "Если приходит сообщение «пришлите данные карты, чтобы вернуть деньги», это тоже продолжение обмана. Данные карты не отправляйте.",
        },
        {
          t: "h2",
          id: "gempayda-donat-haqiqiy-botni-qanday",
          text: "Донат в GemPay: как узнать настоящего бота",
        },
        {
          t: "p",
          text: "Покупая UC, алмазы или CP в GemPay, проводите ту же проверку. Должно совпадать следующее:",
        },
        {
          t: "list",
          items: [
            "<strong>Бот:</strong> <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>. Имя заканчивается на «bot» и совпадает со ссылкой на сайте <a href=\"https://www.gempay.uz\">gempay.uz</a>.",
            "<strong>Какие данные нужны:</strong> только Player ID. Пароль никогда не запрашивается.",
            "<strong>Порядок:</strong> бот проверяет и показывает ник, вы подтверждаете, затем платите. Валюта поступает автоматически за 1–5 минут.",
            "<strong>Оплата:</strong> UzCard, HUMO, Click, Uzum Bank или баланс бота. Visa/Mastercard не принимаются; зарубежная карта, VPN или криптовалюта не нужны.",
            "<strong>Возврат:</strong> если заказ не выполнен, деньги полностью возвращаются в течение 3 рабочих дней. Валюта, уже зачисленная на счёт, не возвращается. Подробности — на странице «Оплата и возврат» на сайте.",
            "<strong>Поддержка:</strong> только <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>, с номером заказа.",
          ],
        },
        {
          t: "p",
          text: "Аккаунты, которые пишут от имени «GemPay game», «GemPay AI» или «GemPay support», нам не принадлежат. GemPay — независимый сервис: он не действует от имени Telegram или разработчиков игр.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Telegram Bot Platform",
              href: "https://telegram.org/blog/bot-revolution",
            },
            {
              label: "bots.checkUsername",
              href: "https://core.telegram.org/method/bots.checkUsername",
            },
            {
              label: "Managed bots",
              href: "https://core.telegram.org/api/bots/managed-bots",
            },
            {
              label: "Deep links",
              href: "https://core.telegram.org/api/links",
            },
            {
              label: "Guest AI Bots, Bot-to-Bot Chats, Chat Automation, Custom AI Styles, 100M+ Emoji & Sticker Search and Much More",
              href: "https://telegram.org/blog/ai-bot-revolution-11-new-features",
            },
            {
              label: "Telegram Bot Features",
              href: "https://core.telegram.org/bots/features",
            },
            {
              label: "Bots: An introduction for developers",
              href: "https://core.telegram.org/bots",
            },
            {
              label: "Bot API changelog",
              href: "https://core.telegram.org/bots/api-changelog",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Тиммейт говорит, что купил дешёвые алмазы через «@olmos_ai». Мне тоже можно?",
          a: "То, что один раз сработало, ничего не гарантирует: такой аккаунт — не бот, за ним стоит человек, и он может пропасть на следующем платеже. Не платите туда, где нет номера заказа и понятного порядка возврата.",
        },
        {
          q: "Админ клана скинул в чат донат-бота. Ему можно доверять?",
          a: "Неважно, кто скинул: проверьте окончание username и метку «bot» в чате. Аккаунт админа тоже могли взломать, поэтому бота лучше открывать с сайта самого сервиса.",
        },
        {
          q: "Бот кроме Player ID просит мой номер телефона или код. Это нормально?",
          a: "Нет. Для пополнения игровой валюты хватает ID. Запрос кода или пароля — признак попытки захватить аккаунт, так что прекращайте разговор.",
        },
        {
          q: "В канале увидел пост, что ботам разрешили имена с «game». Где это проверить?",
          a: "Загляните в блог Telegram и на страницу Bot API changelog на core.telegram.org. Пока документация требует, чтобы имя бота заканчивалось на «bot», а слова из поста не подтверждены.",
        },
        {
          q: "В боте GemPay кроме UC есть Telegram Stars? Их можно обменять на UC?",
          a: "Да, в @Gempayuz_bot есть и Stars, и Premium. Но Stars в игровую валюту не превращаются: UC или алмазы покупаются отдельно, по Player ID.",
        },
        {
          q: "Аккаунт «…_game» просит данные карты, чтобы вернуть мне деньги. Что делать?",
          a: "Ничего не отправляйте — обычно это второй этап обмана. Сохраните чек и переписку и напишите в поддержку своего банка или платёжного приложения.",
        },
      ],
    },
  },
};

export default article;
