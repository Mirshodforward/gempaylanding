// Avtoblogyoz yasagan maqola (2026-11-17). Niyat: Telegramdagi klan yoki turnir guruhi sardori kirish arizalarini AI bot yoki kirish testi bilan qanday tekshirishni va testda Player ID, daraja yoki rank so‘rash mumkinmi, parol va kod esa nega so‘ralmasligini «klan guruhiga kirish arizasi bot tekshiruv» kabi so‘zlar bilan qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/blog/watch-apps-and-more
//   https://telegram.org/faq
//   https://core.telegram.org/bots/api-changelog
//   https://core.telegram.org/bots/api

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "klan-guruhiga-ariza-ai-bot-tekshiruv",
  game: null,
  type: "howto",
  datePublished: "2026-11-17",
  dateModified: "2026-11-17",
  keywords: ["klan guruhiga kirish arizasi bot","telegram guruhga ariza tekshiruv bot","klan guruhi kirish testi","AI qo‘riqchi bot telegram","guruhga kirish arizasi player id","turnir guruhi ariza tekshirish","telegram ai guardian guruh","заявки на вступление в группу telegram бот","ai бот модерация заявок telegram","тест для вступления в клан telegram","проверка заявок в чат клана бот"],
  locales: {
    uz: {
      title: "Klan guruhiga kirish arizasini bot bilan tekshirish: testda nima so‘raladi",
      metaTitle: "Klan guruhiga kirish arizasini bot bilan tekshirish",
      metaDescription: "Ha: Telegram kirish arizalarini admin qilingan AI botga tekshirtirishga ruxsat beradi. Testda Player ID va rank so‘raladi, parol va kod esa so‘ralmaydi.",
      excerpt: "Ha: Telegram kirish arizalarini admin qilingan AI botga tekshirtirishga ruxsat beradi. Testda Player ID va rank so‘raladi, parol va kod esa so‘ralmaydi.",
      answer: "Ha: Telegram kirish arizalarini admin qilingan AI botga tekshirtirishga ruxsat beradi. Testda Player ID va rank so‘raladi, parol va kod esa so‘ralmaydi.",
      body: [
        {
          t: "h2",
          id: "klan-guruhiga-kirish-arizalarini-botga",
          text: "Klan guruhiga kirish arizalarini botga tekshirtirsa bo‘ladimi?",
        },
        {
          t: "p",
          text: "Ha. Guruhga kirishni ariza orqali qilish va arizalarni admin qilingan AI botga tekshirtirish mumkin. Bu <a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a> sahifasida yozilgan.",
        },
        {
          t: "p",
          text: "Funksiya Telegram blogida 2026-yil 11-iyunda «AI Guardians», ya’ni AI qo‘riqchilar nomi bilan <a href=\"https://telegram.org/blog/watch-apps-and-more\" target=\"_blank\" rel=\"noopener\">e’lon qilingan</a>.",
        },
        {
          t: "p",
          text: "IQ-test haqida bitta aniqlik kiritamiz. Blogda u faqat misol sifatida keltirilgan va guruhga kirishga emas, izoh yozishga bog‘langan. Telegram’da tayyor test yo‘q: qo‘riqchi bot arizachiga mini-ilova ochib beradi, savollarni esa bot egasi o‘zi tuzadi.",
        },
        {
          t: "p",
          text: "Demak bot shunchaki vosita. Testda nima so‘ralishi va bu savollar xavfsizmi — buning uchun klan sardori javob beradi.",
        },
        {
          t: "h2",
          id: "ai-qoriqchi-bot-klanda-aniq",
          text: "AI qo‘riqchi bot klanda aniq nimalarni qila oladi?",
        },
        {
          t: "p",
          text: "Quyidagi imkoniyatlar Telegram blogi va <a href=\"https://core.telegram.org/bots/api\" target=\"_blank\" rel=\"noopener\">Bot API hujjatiga</a> asoslangan.",
        },
        {
          t: "table",
          head: [
            "Imkoniyat",
            "Klan yoki turnir guruhi uchun ma’nosi",
          ],
          rows: [
            [
              "Arizani qabul qilish",
              "Testdan o‘tgan o‘yinchi sardorni kutmasdan guruhga kiradi",
            ],
            [
              "Arizani rad etish",
              "Talabga mos kelmaganlar chatga kirmaydi",
            ],
            [
              "Qarorni adminlarga qoldirish («queue»)",
              "Shubhali ariza sardor yoki uning yordamchisiga o‘tadi",
            ],
            [
              "Arizachiga mini-ilova ko‘rsatish",
              "Savollar, Player ID maydoni va rank tanlovi shu yerda bo‘ladi",
            ],
            [
              "Chatdagi qoidabuzarlarga chora ko‘rish",
              "Faqat guruh egasi buni xohlasa ishlaydi",
            ],
            [
              "Arizalarni qaysi bot ko‘rayotgani",
              "Buni faqat adminlar ko‘radi",
            ],
          ],
        },
        {
          t: "p",
          text: "Bu ishni istalgan bot bajara olmaydi. Hujjatga ko‘ra, arizalarni faqat shu imkoniyatni qo‘llaydigan botga topshirish mumkin.",
        },
        {
          t: "p",
          text: "Klanda o‘z botini yozadigan dasturchi bo‘lsa, unga <a href=\"https://core.telegram.org/bots/api-changelog\" target=\"_blank\" rel=\"noopener\">Bot API o‘zgarishlar ro‘yxatini</a> ko‘rsating. 10.1 versiyasida answerChatJoinRequestQuery va sendChatJoinRequestWebApp usullari hamda guard_bot maydoni qo‘shilgan.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "klan-uchun-kirish-tekshiruvini-qanday",
          text: "Klan uchun kirish tekshiruvini qanday sozlash mumkin: 5 qadam",
        },
        {
          t: "steps",
          items: [
            {
              title: "Kirishni ariza orqali qiling",
              text: "Telegram havola orqali kiradigan har bir kishi uchun admin tasdig‘ini talab qilishga ruxsat beradi.",
            },
            {
              title: "Mos botni tanlang",
              text: "Arizalarni ko‘rib chiqishni qo‘llaydigan botni toping yoki klan dasturchisiga yozdiring. Oddiy chat-bot bu ishni qila olmaydi.",
            },
            {
              title: "Botni admin qiling va unga can_invite_users huquqini bering",
              text: "Bu huquqsiz bot arizalar haqida xabar olmaydi, ularni qabul ham, rad ham qila olmaydi. Boshqa huquqlarni kerak bo‘lmasa bermang.",
            },
            {
              title: "Mini-ilova uchun savollar yozing",
              text: "Player ID, nik, rank va rol kabi ochiq ma’lumotlar yetadi. Nimani so‘rash mumkinligi keyingi bo‘limdagi jadvalda.",
            },
            {
              title: "Noaniq arizalarni o‘zingizga qoldiring",
              text: "Bot ikkilangan holatda arizani rad etmasin, adminlarga qoldirsin. Shunda kuchli o‘yinchi bot xatosi sabab chetda qolib ketmaydi.",
            },
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Ilovadagi aniq menyu va sozlamalar nomi bu maqolada tasdiqlanmagan: ularni tanlagan botingiz qo‘llanmasida va Telegram sozlamalarida tekshiring. Funksiya pullikmi yoki Premium talab qiladimi — rasmiy manbalarda bu haqda ma’lumot yo‘q.",
        },
        {
          t: "h3",
          text: "Qaror sizda qoladi",
        },
        {
          t: "p",
          text: "Bot «queue» bilan qoldirgan arizalar adminlarni kutadi. Sardor tez-tez oflayn bo‘lsa, ishonchli yordamchini ham admin qiling, aks holda yaxshi nomzod javob ololmay boshqa klanga ketib qoladi. Kunda bir marta navbatni ko‘rib chiqish ham yetadi.",
        },
        {
          t: "h2",
          id: "kirish-testida-player-id-daraja",
          text: "Kirish testida Player ID, daraja va rankni so‘rash mumkinmi?",
        },
        {
          t: "p",
          text: "Ha. Bular ochiq ma’lumotlar: ular bilan birovning akkauntiga kirib bo‘lmaydi. Chegara oddiy: o‘yinchi kimligini bildiradigan narsani so‘rash mumkin, akkauntni ochadigan narsani esa so‘rab bo‘lmaydi.",
        },
        {
          t: "table",
          head: [
            "Testda so‘rash mumkin",
            "Hech qachon so‘ralmaydi",
          ],
          rows: [
            [
              "PUBG Player ID yoki Free Fire UID",
              "O‘yin akkaunti paroli",
            ],
            [
              "O‘yindagi nik",
              "SMS yoki Telegram kirish kodi",
            ],
            [
              "Mobile Legends’da User ID va Server ID",
              "Telegram ikki bosqichli tekshiruv (2FA) paroli",
            ],
            [
              "Joriy rank, tier yoki daraja",
              "Steam login va paroli",
            ],
            [
              "Asosiy rol: snayper, tank, support",
              "Pochta paroli",
            ],
            [
              "Qaysi soatlarda o‘ynashi",
              "Hamyonning seed so‘zlari",
            ],
            [
              "Mikrofon bor-yo‘qligi",
              "Karta raqami va CVV",
            ],
          ],
        },
        {
          t: "p",
          text: "Rankni tekshirish uchun skrinshot bilan Player ID’ni birga so‘rang. Keyin ID bo‘yicha profilni o‘yinda o‘zingiz ochib, skrinshotdagi rank bilan solishtiring.",
        },
        {
          t: "p",
          text: "Yangi o‘yinchilar ko‘pincha ID qayerdaligini bilmaydi. Test oynasiga yo‘riqnoma havolasini qo‘ying: <a href=\"/blog/pubg-mobile-player-id-qayerda\">PUBG Mobile Player ID qayerda turadi</a> va <a href=\"/blog/mobile-legends-user-id-server-id-qayerda\">Mobile Legends User ID va Server ID qayerda</a>.",
        },
        {
          t: "h3",
          text: "PUBG klani uchun test namunasi",
        },
        {
          t: "list",
          items: [
            "Player ID raqamingiz qanday? (faqat raqamlar)",
            "O‘yindagi nikingiz qanday yoziladi?",
            "Hozirgi va eng yuqori tieringiz qaysi? (skrinshot ilova qiling)",
            "Squad’da qaysi rolda o‘ynaysiz va qachon onlayn bo‘lasiz?",
          ],
        },
        {
          t: "h3",
          text: "Mobile Legends klani uchun test namunasi",
        },
        {
          t: "list",
          items: [
            "User ID va Server ID (masalan, ikki maydonda alohida)",
            "Joriy rank va eng ko‘p o‘ynaydigan qahramoningiz",
            "Asosiy liniyangiz: gold, exp, mid, roam yoki jungle",
            "Turnirlarda qatnashganmisiz?",
          ],
        },
        {
          t: "p",
          text: "Bunday savollar yangi o‘yinchini cho‘chitmaydi, sardorga esa qaror qilish uchun yetarli ma’lumot beradi.",
        },
        {
          t: "h2",
          id: "nega-testda-parol-kod-va",
          text: "Nega testda parol, kod va hamyon kaliti bo‘lmasligi kerak?",
        },
        {
          t: "list",
          items: [
            "<strong>Bu tekshiruv emas, akkauntni tortib olish usuli.</strong> Kod yoki parolni yig‘adigan test bilan arizachining Telegram yoki o‘yin akkauntini egallab olsa bo‘ladi.",
            "<strong>Tajribali o‘yinchilarni qo‘rqitadi.</strong> Parol so‘raydigan testni ko‘rgan geymer arizani tashlab ketishi mumkin, klan obro‘si esa tushadi.",
            "<strong>Bot buzilsa, hamma xavf ostida qoladi.</strong> Bot begona qo‘lga o‘tsa, yig‘ilgan maxfiy ma’lumot ham ketadi. Player ID esa oshkor bo‘lsa ham akkauntni ochmaydi.",
            "<strong>Qoida bitta.</strong> Test o‘yinchi kimligini va qaysi darajada o‘ynashini aniqlaydi, akkauntga kirish huquqini so‘ramaydi.",
          ],
        },
        {
          t: "p",
          text: "Donat xizmatlarida ham shu chegara bor: GemPay o‘yin valyutasi uchun faqat Player ID so‘raydi, parolni hech qachon so‘ramaydi. Klan testi ham bu chegaradan chiqmasin. Batafsil: <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">o‘yin hisobini xavfsiz to‘ldirishda nima so‘raladi</a>.",
        },
        {
          t: "h2",
          id: "arizalar-uchun-qaysi-botga-ishonish",
          text: "Arizalar uchun qaysi botga ishonish mumkin?",
        },
        {
          t: "list",
          items: [
            "<strong>Username’ni va bot profilini tekshiring.</strong> «Bot» deb tanishtirilgan akkaunt aslida oddiy foydalanuvchi bo‘lib chiqishi mumkin. Buni qanday farqlash haqida: <a href=\"/blog/game-bilan-tugaydigan-donat-boti-tekshirish\">botni username bo‘yicha tekshirish</a>.",
            "<strong>To‘lov so‘raydigan botni darhol olib tashlang.</strong> Arizachidan Stars, sovg‘a, pul yoki kod so‘raydigan qo‘riqchi bot klan manfaatiga ishlamayapti.",
            "<strong>Ortiqcha huquq bermang.</strong> Arizalar uchun can_invite_users yetadi. Xabarlarni o‘chirish yoki a’zolarni chiqarib yuborish kerak bo‘lsagina qo‘shimcha huquq bering.",
            "<strong>Reklamadagi notanish botlarni admin qilmang.</strong> Ular kimga tegishli va ma’lumotni qayerga yuborishini tekshirib bo‘lmaydi.",
            "<strong>Avval sinab ko‘ring.</strong> Bir necha kun bot hamma arizani sizga qoldirsin. Qarorlari mantiqli ekaniga ishonch hosil qilgandan keyin avtomatik qabulni yoqing.",
          ],
        },
        {
          t: "h2",
          id: "testdan-otganlardan-keyin-klan-chatida",
          text: "Testdan o‘tganlardan keyin klan chatida tartibni qanday saqlash mumkin?",
        },
        {
          t: "p",
          text: "Kirish testi kim kirishini filtrlaydi, lekin a’zo keyin o‘zini qanday tutishini kafolatlamaydi. Guruh egasi xohlasa, AI qo‘riqchi chatga qoidabuzar xabar yozganlarga ham chora ko‘radi. Bot va a’zolar bir xil tushunishi uchun qoidalarni aniq yozib, pin qilib qo‘ygan ma’qul.",
        },
        {
          t: "p",
          text: "Chat qoidalariga quyidagilarni kiriting:",
        },
        {
          t: "list",
          items: [
            "notanish havolalar va «arzon UC» takliflari taqiqlanadi;",
            "oldindan to‘lov so‘rash va «garant» orqali savdo qilish mumkin emas;",
            "shubhali xabar ko‘rgan a’zo havolani ochmaydi, uni adminga yuboradi.",
          ],
        },
        {
          t: "p",
          text: "Shubhali havola va spam shikoyatlari qanday ishlashi haqida: <a href=\"/blog/klan-chatida-shubhali-havola-spam-cheklov\">klan chatida shubhali havola keldi</a>.",
        },
        {
          t: "note",
          tone: "warn",
          text: "Qoidalarga alohida qator qo‘shing: «Adminlar va bot hech qachon a’zodan kod yoki parol so‘ramaydi». Shunda admin nomidan shaxsiy chatga yozgan firibgarni a’zolar tezroq taniydi.",
        },
        {
          t: "h2",
          id: "turnir-golibiga-yoki-yangi-azoga",
          text: "Turnir g‘olibiga yoki yangi a’zoga sovg‘ani qanday berish mumkin?",
        },
        {
          t: "p",
          text: "Sardorlar ko‘pincha turnir g‘olibini yoki faol a’zoni mukofotlaydi. Buning uchun ham parol kerak emas: o‘yin valyutasi Player ID bo‘yicha, Telegram Stars va Premium esa @username bo‘yicha yuboriladi.",
        },
        {
          t: "table",
          head: [
            "Sovg‘a",
            "Nima kerak",
            "Qachon tushadi",
            "Narxi",
          ],
          rows: [
            [
              "UC, olmos yoki CP",
              "Player ID",
              "1–5 daqiqada",
              "Botda ko‘rsatiladi",
            ],
            [
              "Telegram Stars",
              "@username",
              "Bir necha soniyada",
              `1 donasi ${som(STARS_UNIT_CARD, "uz")} karta yoki balansdan, ${som(STARS_UNIT_ONLINE, "uz")} Click yoki Uzum Bank orqali`,
            ],
            [
              "Telegram Premium",
              "@username",
              "Bir necha soniyada",
              `3 oy ${som(premium(3), "uz")}, 6 oy ${som(premium(6), "uz")}, 12 oy ${som(premium(12), "uz")}`,
            ],
          ],
        },
        {
          t: "p",
          text: "<a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>’da o‘yinchi niki to‘lovdan oldin ko‘rsatiladi. Nik g‘olibniki bilan mos kelmasa, to‘lamasdan to‘xtab, ID’ni qayta tekshiring. Stars bir buyurtmada 50 dan 10 000 tagacha olinadi va o‘yin valyutasiga aylanmaydi. Premium Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi, akkauntga kirilmaydi. 1 oylik tarif yo‘q.",
        },
        {
          t: "p",
          text: "To‘lov UzCard, HUMO, Click, Uzum Bank yoki bot balansi orqali qilinadi, Visa va Mastercard qabul qilinmaydi. Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi, hisobga tushgan valyuta esa qaytarilmaydi. Savol bo‘lsa, buyurtma raqami bilan <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>’ga yozing.",
        },
        {
          t: "p",
          text: "GemPay — mustaqil xizmat, Telegram va o‘yin ishlab chiquvchilari bilan hamkorlikni da’vo qilmaydi.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Smartwatch Apps, Rich Text for Bots, AI Guardians for Groups, and Much More",
              href: "https://telegram.org/blog/watch-apps-and-more",
            },
            {
              label: "Telegram FAQ",
              href: "https://telegram.org/faq",
            },
            {
              label: "Bot API changelog",
              href: "https://core.telegram.org/bots/api-changelog",
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
          q: "Kirish testiga rank skrinshotini so‘rash to‘g‘rimi yoki faqat Player ID yetadimi?",
          a: "Ikkalasini birga so‘ragan ma’qul. Skrinshotni tahrirlash oson, Player ID bo‘yicha esa profilni o‘yinda o‘zingiz ochib, rankni solishtira olasiz.",
        },
        {
          q: "Testda telefon raqami yoki yoshni so‘rash kerakmi?",
          a: "Klanga qabul uchun bunga ehtiyoj yo‘q: o‘yin mahoratini ID, rank va rol ko‘rsatadi. Telefon raqami shaxsiy ma’lumot, uni yig‘adigan test esa arizachida haqli ravishda shubha uyg‘otadi.",
        },
        {
          q: "Ariza «queue»da qolsa-yu, men oflayn bo‘lsam nima bo‘ladi?",
          a: "Admin ko‘rib chiqmaguncha ariza kutib turadi. Uzoq kuttirmaslik uchun ishonchli jamoadoshingizni ham admin qilib qo‘ying.",
        },
        {
          q: "Bot o‘rniga arizalarni faqat o‘zim tekshirsam bo‘ladimi?",
          a: "Ha, Telegram havola orqali kiradigan har bir kishi uchun oddiy admin tasdig‘ini yoqishga ruxsat beradi. Bot arizalar ko‘payib, qo‘lda ko‘rib chiqishga ulgurmay qolganda asqotadi.",
        },
        {
          q: "Test savollarini Telegram o‘zi beradimi?",
          a: "Yo‘q. Telegram botga arizachiga mini-ilova ochish imkonini beradi, savollar va baholash qoidasini esa bot egasi yoki klan dasturchisi yozadi.",
        },
        {
          q: "Arizachi Player ID’ni bersa, uning o‘yin akkauntiga zarar yetishi mumkinmi?",
          a: "Player ID — ochiq raqam, u bilan akkauntga kirib bo‘lmaydi. Xavf ID bilan birga parol, kirish kodi yoki pochta ma’lumoti so‘ralganda paydo bo‘ladi.",
        },
        {
          q: "Turnir g‘olibiga UC’ni uning parolisiz qanday yuborsam bo‘ladi?",
          a: "@Gempayuz_bot’ga g‘olibning Player ID’sini kiriting, chiqqan nikni tekshirib, so‘mda to‘lang. UC 1–5 daqiqada avtomatik tushadi.",
        },
      ],
    },
    ru: {
      title: "Проверка заявок в клан ботом в Telegram: что спрашивать в тесте",
      metaTitle: "Проверка заявок в клан ботом в Telegram",
      metaDescription: "Да: Telegram позволяет поручить проверку заявок AI-боту с правами админа. В тесте можно спрашивать Player ID и ранг, но никогда пароль или код.",
      excerpt: "Да: Telegram позволяет поручить проверку заявок AI-боту с правами админа. В тесте можно спрашивать Player ID и ранг, но никогда пароль или код.",
      answer: "Да: Telegram позволяет поручить проверку заявок AI-боту с правами админа. В тесте можно спрашивать Player ID и ранг, но никогда пароль или код.",
      body: [
        {
          t: "h2",
          id: "klan-guruhiga-kirish-arizalarini-botga",
          text: "Можно ли поручить боту проверку заявок в клановую группу?",
        },
        {
          t: "p",
          text: "Да. Вход в группу можно сделать только по заявке, а проверку заявок поручить AI-боту с правами администратора. Это описано на странице <a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a>.",
        },
        {
          t: "p",
          text: "Telegram <a href=\"https://telegram.org/blog/watch-apps-and-more\" target=\"_blank\" rel=\"noopener\">анонсировал функцию</a> в блоге 11 июня 2026 года под названием «AI Guardians» — «AI-стражи».",
        },
        {
          t: "p",
          text: "Про IQ-тест нужно уточнить. В блоге он упоминается только как пример, и речь там не о входе в группу, а о праве писать комментарии. Готового теста в Telegram нет: бот-страж открывает заявителю мини-приложение, а вопросы для него составляет владелец бота.",
        },
        {
          t: "p",
          text: "Получается, что бот — это только инструмент. За то, какие вопросы задаёт тест и безопасны ли они, отвечает лидер клана.",
        },
        {
          t: "h2",
          id: "ai-qoriqchi-bot-klanda-aniq",
          text: "Что именно AI-страж умеет делать в клане?",
        },
        {
          t: "p",
          text: "Список составлен по блогу Telegram и <a href=\"https://core.telegram.org/bots/api\" target=\"_blank\" rel=\"noopener\">документации Bot API</a>.",
        },
        {
          t: "table",
          head: [
            "Возможность",
            "Что это значит для клана или турнирной группы",
          ],
          rows: [
            [
              "Одобрить заявку",
              "Игрок, прошедший тест, попадает в группу, не дожидаясь лидера",
            ],
            [
              "Отклонить заявку",
              "Те, кто не подходит по требованиям, в чат не попадают",
            ],
            [
              "Оставить решение админам («queue»)",
              "Сомнительная заявка уходит лидеру или его заму",
            ],
            [
              "Показать заявителю мини-приложение",
              "Здесь будут вопросы, поле для Player ID и выбор ранга",
            ],
            [
              "Наказывать нарушителей в чате",
              "Работает, только если этого хочет владелец группы",
            ],
            [
              "Видно, какой бот обрабатывает заявки",
              "Это видят только администраторы",
            ],
          ],
        },
        {
          t: "p",
          text: "Подойдёт не каждый бот. Согласно документации, обработку заявок можно передать только боту, который поддерживает эту возможность.",
        },
        {
          t: "p",
          text: "Если в клане есть разработчик, который пишет своего бота, покажите ему <a href=\"https://core.telegram.org/bots/api-changelog\" target=\"_blank\" rel=\"noopener\">список изменений Bot API</a>. В версии 10.1 добавлены методы answerChatJoinRequestQuery и sendChatJoinRequestWebApp, а также поле guard_bot.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "klan-uchun-kirish-tekshiruvini-qanday",
          text: "Как настроить проверку на вход в клан: 5 шагов",
        },
        {
          t: "steps",
          items: [
            {
              title: "Включите вход по заявке",
              text: "Telegram позволяет требовать одобрения админа для всех, кто заходит по ссылке.",
            },
            {
              title: "Подберите подходящего бота",
              text: "Найдите бота, который умеет обрабатывать заявки, или попросите клановую разработку. Обычный чат-бот с этим не справится.",
            },
            {
              title: "Сделайте бота админом и выдайте ему право can_invite_users",
              text: "Без него бот не получает уведомлений о заявках и не может ни одобрить их, ни отклонить. Остальные права без необходимости не давайте.",
            },
            {
              title: "Напишите вопросы для мини-приложения",
              text: "Хватит открытых данных: Player ID, ник, ранг и роль. Что можно спрашивать, а что нельзя — в таблице в следующем разделе.",
            },
            {
              title: "Спорные заявки оставляйте себе",
              text: "Если бот сомневается, пусть не отклоняет заявку, а передаёт её админам. Так сильный игрок не останется за бортом из-за ошибки бота.",
            },
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Точные названия меню и настроек в приложении в этой статье не подтверждены: смотрите их в инструкции к выбранному боту и в настройках Telegram. Платная ли функция и нужен ли для неё Premium, в официальных источниках не сказано.",
        },
        {
          t: "h3",
          text: "Последнее слово за вами",
        },
        {
          t: "p",
          text: "Заявки, которые бот отложил через «queue», ждут админов. Если лидер часто бывает офлайн, назначьте админом и надёжного зама — иначе хороший кандидат так и не дождётся ответа и уйдёт в другой клан. Разбирать очередь раз в день вполне достаточно.",
        },
        {
          t: "h2",
          id: "kirish-testida-player-id-daraja",
          text: "Можно ли спрашивать в тесте Player ID, уровень и ранг?",
        },
        {
          t: "p",
          text: "Да. Это открытые данные: с ними в чужой аккаунт не войти. Граница простая: спрашивать можно то, что говорит, кто этот игрок, и нельзя то, что открывает доступ к аккаунту.",
        },
        {
          t: "table",
          head: [
            "Можно спрашивать в тесте",
            "Нельзя спрашивать никогда",
          ],
          rows: [
            [
              "Player ID в PUBG или UID в Free Fire",
              "Пароль от игрового аккаунта",
            ],
            [
              "Ник в игре",
              "Код из SMS или код входа в Telegram",
            ],
            [
              "User ID и Server ID в Mobile Legends",
              "Пароль двухэтапной проверки (2FA) Telegram",
            ],
            [
              "Текущий ранг, тир или уровень",
              "Логин и пароль Steam",
            ],
            [
              "Основная роль: снайпер, танк, саппорт",
              "Пароль от почты",
            ],
            [
              "В какие часы играет",
              "Seed-фразу кошелька",
            ],
            [
              "Есть ли микрофон",
              "Номер карты и CVV",
            ],
          ],
        },
        {
          t: "p",
          text: "Чтобы проверить ранг, просите скриншот вместе с Player ID. Потом сами откройте профиль по ID в игре и сравните ранг со скриншотом.",
        },
        {
          t: "p",
          text: "Новички часто не знают, где найти свой ID. Добавьте в окно теста ссылки на инструкции: <a href=\"/blog/pubg-mobile-player-id-qayerda\">где найти Player ID в PUBG Mobile</a> и <a href=\"/blog/mobile-legends-user-id-server-id-qayerda\">где User ID и Server ID в Mobile Legends</a>.",
        },
        {
          t: "h3",
          text: "Пример теста для клана PUBG",
        },
        {
          t: "list",
          items: [
            "Ваш Player ID? (только цифры)",
            "Как пишется ваш ник в игре?",
            "Текущий и максимальный тир? (приложите скриншот)",
            "Какая у вас роль в скваде и когда вы обычно онлайн?",
          ],
        },
        {
          t: "h3",
          text: "Пример теста для клана Mobile Legends",
        },
        {
          t: "list",
          items: [
            "User ID и Server ID (например, двумя отдельными полями)",
            "Текущий ранг и самый частый герой",
            "Основная линия: gold, exp, mid, roam или jungle",
            "Участвовали ли в турнирах?",
          ],
        },
        {
          t: "p",
          text: "Такие вопросы не отпугнут новичка, а лидеру дадут достаточно информации для решения.",
        },
        {
          t: "h2",
          id: "nega-testda-parol-kod-va",
          text: "Почему в тесте не должно быть паролей, кодов и ключей кошелька?",
        },
        {
          t: "list",
          items: [
            "<strong>Это не проверка, а способ угнать аккаунт.</strong> Тест, который собирает коды или пароли, позволяет захватить Telegram или игровой аккаунт заявителя.",
            "<strong>Это отпугивает опытных игроков.</strong> Увидев тест с запросом пароля, геймер может бросить заявку, а репутация клана пострадает.",
            "<strong>Если бота взломают, под угрозой окажутся все.</strong> Вместе с ботом в чужие руки уйдут и собранные секретные данные. А утёкший Player ID аккаунт не открывает.",
            "<strong>Правило одно.</strong> Тест выясняет, кто игрок и на каком уровне играет, но не просит доступа к аккаунту.",
          ],
        },
        {
          t: "p",
          text: "У донат-сервисов та же граница: GemPay для покупки игровой валюты просит только Player ID и никогда не спрашивает пароль. Пусть и клановый тест за неё не выходит. Подробнее: <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">что спрашивают при безопасном пополнении игрового счёта</a>.",
        },
        {
          t: "h2",
          id: "arizalar-uchun-qaysi-botga-ishonish",
          text: "Какому боту можно доверить заявки?",
        },
        {
          t: "list",
          items: [
            "<strong>Проверьте username и профиль бота.</strong> Аккаунт, который представляется ботом, может оказаться обычным пользователем. Как отличить: <a href=\"/blog/game-bilan-tugaydigan-donat-boti-tekshirish\">проверка бота по username</a>.",
            "<strong>Сразу удаляйте бота, который просит оплату.</strong> Бот-страж, требующий от заявителя Stars, подарок, деньги или код, работает не в интересах клана.",
            "<strong>Не давайте лишних прав.</strong> Для заявок хватает can_invite_users. Дополнительные права нужны, только если бот должен удалять сообщения или исключать участников.",
            "<strong>Не делайте админами незнакомых ботов из рекламы.</strong> Невозможно проверить, кому они принадлежат и куда отправляют данные.",
            "<strong>Сначала протестируйте.</strong> Пару дней пусть бот передаёт все заявки вам. Включайте автоматическое одобрение, только когда убедитесь, что его решения разумны.",
          ],
        },
        {
          t: "h2",
          id: "testdan-otganlardan-keyin-klan-chatida",
          text: "Как поддерживать порядок в клановом чате после теста?",
        },
        {
          t: "p",
          text: "Тест на входе отсеивает тех, кто заходит, но не гарантирует, как участник будет вести себя дальше. Если владелец группы захочет, AI-страж может наказывать и тех, кто пишет в чат с нарушениями. Чтобы бот и участники понимали правила одинаково, лучше сформулировать их чётко и закрепить.",
        },
        {
          t: "p",
          text: "Что стоит включить в правила чата:",
        },
        {
          t: "list",
          items: [
            "запрещены незнакомые ссылки и предложения «дешёвых UC»;",
            "нельзя просить предоплату и торговать через «гаранта»;",
            "увидев подозрительное сообщение, участник не открывает ссылку, а пересылает её админу.",
          ],
        },
        {
          t: "p",
          text: "Как работают жалобы на подозрительные ссылки и спам: <a href=\"/blog/klan-chatida-shubhali-havola-spam-cheklov\">в клановый чат пришла подозрительная ссылка</a>.",
        },
        {
          t: "note",
          tone: "warn",
          text: "Добавьте в правила отдельную строку: «Админы и бот никогда не просят у участников код или пароль». Тогда мошенника, который пишет в личку от имени админа, узнают быстрее.",
        },
        {
          t: "h2",
          id: "turnir-golibiga-yoki-yangi-azoga",
          text: "Как подарить что-то победителю турнира или новому участнику?",
        },
        {
          t: "p",
          text: "Лидеры часто награждают победителя турнира или активного участника. Пароль для этого тоже не нужен: игровая валюта отправляется по Player ID, а Telegram Stars и Premium — по @username.",
        },
        {
          t: "table",
          head: [
            "Подарок",
            "Что нужно",
            "Когда придёт",
            "Цена",
          ],
          rows: [
            [
              "UC, алмазы или CP",
              "Player ID",
              "За 1–5 минут",
              "Указана в боте",
            ],
            [
              "Telegram Stars",
              "@username",
              "За несколько секунд",
              `1 звезда — ${som(STARS_UNIT_CARD, "ru")} с карты или баланса, ${som(STARS_UNIT_ONLINE, "ru")} через Click или Uzum Bank`,
            ],
            [
              "Telegram Premium",
              "@username",
              "За несколько секунд",
              `3 месяца — ${som(premium(3), "ru")}, 6 месяцев — ${som(premium(6), "ru")}, 12 месяцев — ${som(premium(12), "ru")}`,
            ],
          ],
        },
        {
          t: "p",
          text: "В <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> ник игрока показывается до оплаты. Если он не совпадает с ником победителя, остановитесь, не платите и перепроверьте ID. Stars можно купить от 50 до 10 000 штук за один заказ, в игровую валюту они не превращаются. Premium подключается через официальный механизм подарков Telegram, входить в аккаунт не нужно. Тарифа на 1 месяц нет.",
        },
        {
          t: "p",
          text: "Оплатить можно картой UzCard, HUMO, через Click, Uzum Bank или с баланса бота; Visa и Mastercard не принимаются. Если заказ не выполнен, деньги полностью вернутся в течение 3 рабочих дней, а зачисленная на счёт валюта не возвращается. Если есть вопросы, пишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> и указывайте номер заказа.",
        },
        {
          t: "p",
          text: "GemPay — независимый сервис и не заявляет о партнёрстве с Telegram или разработчиками игр.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Smartwatch Apps, Rich Text for Bots, AI Guardians for Groups, and Much More",
              href: "https://telegram.org/blog/watch-apps-and-more",
            },
            {
              label: "Telegram FAQ",
              href: "https://telegram.org/faq",
            },
            {
              label: "Bot API changelog",
              href: "https://core.telegram.org/bots/api-changelog",
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
          q: "Просить в тесте скриншот ранга или хватит одного Player ID?",
          a: "Лучше и то, и другое. Скриншот легко подделать, а по Player ID вы сами откроете профиль в игре и сверите ранг.",
        },
        {
          q: "Стоит ли спрашивать в тесте номер телефона или возраст?",
          a: "Для приёма в клан это не нужно: уровень игры видно по ID, рангу и роли. Номер телефона — личные данные, и тест, который их собирает, вполне обоснованно настораживает заявителя.",
        },
        {
          q: "Что будет, если заявка ушла в «queue», а я офлайн?",
          a: "Заявка ждёт, пока её не рассмотрит админ. Чтобы люди не ждали долго, назначьте админом ещё и надёжного сокомандника.",
        },
        {
          q: "Можно проверять заявки самому, без бота?",
          a: "Да, Telegram позволяет включить обычное одобрение админом для всех, кто заходит по ссылке. Бот пригодится, когда заявок станет слишком много для ручной проверки.",
        },
        {
          q: "Вопросы для теста выдаёт сам Telegram?",
          a: "Нет. Telegram даёт боту возможность открыть заявителю мини-приложение, а вопросы и правила оценки пишет владелец бота или разработчик клана.",
        },
        {
          q: "Может ли заявитель пострадать, если отдаст свой Player ID?",
          a: "Player ID — открытый номер, по нему в аккаунт не зайти. Опасно, когда вместе с ID просят пароль, код входа или данные от почты.",
        },
        {
          q: "Как отправить UC победителю турнира, не зная его пароля?",
          a: "Введите Player ID победителя в @Gempayuz_bot, проверьте появившийся ник и оплатите в сумах. UC зачислятся автоматически за 1–5 минут.",
        },
      ],
    },
  },
};

export default article;
