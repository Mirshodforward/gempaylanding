// Avtoblogyoz yasagan maqola (2026-11-03). Niyat: Jamoadoshiga Stars yoki Premium sovg'a qilmoqchi bo'lgan o'zbekistonlik o'yinchi «fragment verifikatsiyasiz bir nechta akkaunt ulash» haqida, ya'ni Fragment'da shaxsni tasdiqlash endi shartmi va bir necha Telegram akkauntini ulasa bo'ladimi, deb qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://fragment.com/terms
//   https://fragment.com/privacy
//   https://fragment.com/about
//   https://fragment.com/premium
//   https://telegram.org/tos/content-creator-rewards

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "fragment-verifikatsiyasiz-akkaunt-ulash-oyinchi",
  game: null,
  type: "info",
  datePublished: "2026-11-03",
  dateModified: "2026-11-03",
  keywords: ["fragment verifikatsiyasiz bir nechta akkaunt","fragment kyc bekor qilindi","fragment akkaunt almashtirish","fragment bir nechta telegram akkaunt","fragment sessiyasini o'chirish","jamoadoshga premium sovg'a qilish","fragment без верификации","fragment kyc отменили","fragment несколько аккаунтов","как сменить аккаунт telegram на fragment","подарить telegram premium другу без крипты"],
  locales: {
    uz: {
      title: "Fragment verifikatsiyasiz: jamoadoshga sovg‘a uchun nechta akkaunt ulanadi",
      metaTitle: "Fragment verifikatsiyasiz",
      metaDescription: "Fragment’ning rasmiy sahifalarida pasport yoki selfi talabi yo‘q. Bir vaqtda bir nechta akkaunt ulash tasdiqlanmagan — ular navbat bilan almashtiriladi.",
      excerpt: "Fragment’ning rasmiy sahifalarida pasport yoki selfi talabi yo‘q. Bir vaqtda bir nechta akkaunt ulash tasdiqlanmagan — ular navbat bilan almashtiriladi.",
      answer: "Fragment’ning rasmiy sahifalarida pasport yoki selfi talabi yo‘q. Bir vaqtda bir nechta akkaunt ulash tasdiqlanmagan — ular navbat bilan almashtiriladi.",
      body: [
        {
          t: "p",
          text: "Telegram kanallarida «Fragment endi hamma uchun ochiq, verifikatsiya shart emas, istagancha akkauntdan ulaning» degan post tarqaldi. Klan chatlarida undan tezda xulosa chiqarildi: demak, hujjatsiz va cheklovsiz ishlash mumkin.",
        },
        {
          t: "p",
          text: "Jamoadoshiga Premium yoki Stars sovg‘a qilmoqchi bo‘lgan o‘yinchi ikki narsani bilishi kerak. Birinchisi — hujjat so‘raladimi. Ikkinchisi — bir nechta Telegram akkaunt bilan amalda nima qilish mumkin. Postdagi ikkala da’vo quyida alohida tekshirildi. Javoblar kanal postidan emas, fragment.com’ning o‘z sahifalaridan olingan.",
        },
        {
          t: "h2",
          id: "hujjat-masalasi-fragment-shartlarida-nima",
          text: "Hujjat masalasi: Fragment shartlarida nima yozilgan, kanal postida nima",
        },
        {
          t: "p",
          text: "Fragment’ning hozirgi <a href=\"https://fragment.com/terms\" target=\"_blank\" rel=\"noopener\">foydalanish shartlarida</a> platforma har kimga xavfsiz va anonim xarid qilish imkonini berishi yozilgan. <a href=\"https://fragment.com/privacy\" target=\"_blank\" rel=\"noopener\">Maxfiylik siyosatiga</a> ko‘ra, alohida ro‘yxatdan o‘tish usuli yo‘q: saytga Telegram va/yoki TON hamyon orqali kiriladi.",
        },
        {
          t: "p",
          text: "Fragment xizmat uchun qat’iy zarur bo‘lmagan shaxsiy ma’lumotni yig‘maslik, yaratmaslik va qayta ishlamaslik majburiyatini oladi. Kompaniya shaxsiy ma’lumot saqlamasligini aytadi. Shu sababli uni o‘chirishni so‘rashga ham hojat qolmaydi.",
        },
        {
          t: "p",
          text: "Kanal postida esa boshqa gap bor: «KYC bekor qilindi». Rasmiy sahifalarda KYC so‘zi ham, uning bekor qilingani haqidagi e’lon ham uchramaydi. Fragment ilgari shaxsni tasdiqlashni talab qilganini ham topa olmadik. Demak, «bekor qilindi» degan da’vo bu maqolada tasdiqlanmagan.",
        },
        {
          t: "p",
          text: "Amalda bu shuni anglatadi: pasport yoki selfi tayyorlash kerakligi haqida rasmiy ko‘rsatma yo‘q. Qoidalar o‘zgarganmi-yo‘qmi, buni kanal skrinshotidan emas, fragment.com sahifalaridan tekshiring.",
        },
        {
          t: "h2",
          id: "fragment-kirishda-soraydigan-va-soramaydigan",
          text: "Fragment kirishda so‘raydigan va so‘ramaydigan narsalar",
        },
        {
          t: "p",
          text: "Hujjat so‘ralmasa ham, Fragment’da ishlash uchun shartlar bor. Ular <a href=\"https://fragment.com/about\" target=\"_blank\" rel=\"noopener\">/about sahifasida</a> va foydalanish shartlarida sanab o‘tilgan.",
        },
        {
          t: "table",
          head: [
            "Nima",
            "Holati",
            "Izoh",
          ],
          rows: [
            [
              "Telegram akkauntni ulash",
              "So‘raladi",
              "Taklif berish yoki xarid qilishdan oldin",
            ],
            [
              "TON hamyonni ulash",
              "So‘raladi",
              "Premium kriptohamyon orqali olinadi",
            ],
            [
              "Telegram’da 2FA paroli",
              "Kerak",
              "Parol yo‘q yoki juda yaqinda qo‘yilgan bo‘lsa, to‘siq bo‘ladi",
            ],
            [
              "Alohida login va parol",
              "So‘ralmaydi",
              "Ro‘yxatdan o‘tish usuli yo‘q",
            ],
            [
              "IP, brauzer, qurilma ma’lumoti",
              "Saqlanmaydi",
              "Kirish usullariga bog‘lab yozilmaydi",
            ],
            [
              "Hamyonga kirish huquqi",
              "Yo‘q",
              "Fragment hamyoningizga kira olmaydi",
            ],
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "2FA shaxsni tasdiqlash emas. U Telegram akkauntingizdagi qo‘shimcha parol, hujjat emas. Parol qancha vaqt oldin qo‘yilgan bo‘lishi kerakligi rasmiy sahifada raqam bilan ko‘rsatilmagan. Shuning uchun uni xarid kunidan ancha oldin yoqib qo‘ygan ma’qul.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "bir-nechta-akkaunt-parallel-emas",
          text: "Bir nechta akkaunt: parallel emas, navbat bilan",
        },
        {
          t: "p",
          text: "Postning ikkinchi qismi — «istagancha akkauntdan ulaning». Fragment’ning /about sahifasida faqat bitta aniq holat tasvirlangan: Telegram akkauntni saytdan to‘liq uzish va boshqa telefon raqami bilan kirish. Buning uchun Telegram ilovasida Fragment sessiyasi o‘chiriladi. Keyin sayt qayta ochiladi va boshqa akkaunt ulanadi.",
        },
        {
          t: "p",
          text: "Demak, rasmiy tavsif <strong>almashtirish</strong> haqida. Bir vaqtning o‘zida bir nechta akkauntni ulab, ular orasida o‘tib ishlash rasmiy sahifalarda tasdiqlanmagan. Cheklovsiz «istagancha» ulash ham tasdiqlanmagan. Necha marta almashtirish mumkinligi haqida na cheklov, na ruxsat yozilgan.",
        },
        {
          t: "p",
          text: "Maxfiylik tomoni ham bor. Fragment Telegram orqali va hamyon orqali kirishni bir-biriga bog‘laydigan ma’lumotni saqlamasligini aytadi. IP manzil yoki qurilma bilan bog‘laydigan ma’lumot ham saqlanmaydi. Ya’ni sayt «bu hamyon falon akkauntniki» degan yozuv yuritmaslikka va’da beradi. Lekin hozir qaysi hamyon ulanganini kuzatish baribir sizning zimmangizda.",
        },
        {
          t: "p",
          text: "Misol: sizda shaxsiy akkaunt va klan ishlari uchun ikkinchi akkaunt bor. Fragment’da avval shaxsiysi bilan ishlaysiz. Keyin sessiyani o‘chirib, ikkinchisiga o‘tasiz. Ikkalasi bir paytda ulangan holda turmaydi.",
        },
        {
          t: "h2",
          id: "asosiy-akkauntdan-ikkinchisiga-otish-android",
          text: "Asosiy akkauntdan ikkinchisiga o‘tish: Android va iOS",
        },
        {
          t: "p",
          text: "Quyidagi tartib Fragment’ning o‘z yo‘riqnomasiga asoslangan.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Fragment ulangan akkauntda Telegram ilovasini oching va Settings bo‘limiga kiring.",
            "Kerakli bo‘limga o‘ting. Android’da: Settings &gt; Privacy &amp; Security &gt; Bots and websites &gt; Logged in with Telegram. iOS’da: Settings &gt; Privacy &amp; Security &gt; Active Websites &gt; Logged in with Telegram.",
            "Ro‘yxatdan Fragment sessiyasini toping va uni o‘chiring.",
            "fragment.com saytini qayta oching va kerakli Telegram akkaunt bilan kiring.",
            "Xariddan oldin to‘g‘ri hamyon ulanganini qayta tekshiring — Fragment buni alohida tavsiya qiladi.",
          ],
        },
        {
          t: "p",
          text: "Ilovada ikkita akkaunt ochiq bo‘lsa, ro‘yxatni aynan Fragment ulangan akkauntda oching. Aks holda Fragment ro‘yxatda ko‘rinmaydi va sessiyani o‘chirib bo‘lmayapti, degan taassurot paydo bo‘ladi.",
        },
        {
          t: "h2",
          id: "fragment-orqali-jamoadoshga-premium-sovgasi",
          text: "Fragment orqali jamoadoshga Premium sovg‘asi",
        },
        {
          t: "p",
          text: "Fragment’dagi <a href=\"https://fragment.com/premium\" target=\"_blank\" rel=\"noopener\">Telegram Premium sahifasida</a> «Buy Premium for a User» bandi bor. Rasmiy tavsifga ko‘ra, u orqali obunani o‘zingiz uchun ham, do‘stga sovg‘a sifatida ham olish mumkin. Demak, jamoadoshga sovg‘a uchun akkaunt almashtirish shart emas: o‘z akkauntingizdan turib unga xarid qilasiz.",
        },
        {
          t: "p",
          text: "To‘lov kriptohamyon orqali qilinadi. Qaysi kriptovalyuta qabul qilinishi rasmiy sahifalarning turli nusxalarida turlicha nomlangan. Shuning uchun bu yerda ko‘rsatilmaydi — aniq nomini xarid oynasida tekshiring.",
        },
        {
          t: "p",
          text: "Shartlarga ko‘ra, Premium xaridi Telegram xizmat shartlari va Telegram Premium shartlariga bo‘ysunadi. Fragment’dagi Stars bo‘limi bu maqola uchun tekshirilmagan, shuning uchun u haqida da’vo yozilmadi.",
        },
        {
          t: "h2",
          id: "hujjatsiz-ham-xaridni-toxtatadigan-besh",
          text: "Hujjatsiz ham xaridni to‘xtatadigan besh to‘siq",
        },
        {
          t: "p",
          text: "Hujjat so‘ralmasligi hamma narsa ochiq degani emas. Rasmiy sahifalarda quyidagi holatlar aytilgan:",
        },
        {
          t: "list",
          items: [
            "<strong>2FA.</strong> Telegram akkauntda ikki bosqichli parol yo‘q yoki u juda yaqinda qo‘yilgan.",
            "<strong>Davlat bo‘yicha cheklov.</strong> Fragment qaysi davlatlarda va qaysi xizmatlari ishlashini istalgan vaqtda, ogohlantirishsiz cheklashi mumkin. O‘zbekiston bunday ro‘yxatda bor-yo‘qligi tasdiqlanmagan.",
            "<strong>Noto‘g‘ri hamyon yoki akkaunt.</strong> Akkaunt almashtirgandan keyin eski hamyon ulangan qolishi mumkin. Yoki saytga boshqa Telegram akkaunt bilan kirilgan bo‘lishi mumkin. Sessiyani ham, hamyonni ham qayta tekshiring.",
            "<strong>Soliq va qonunlar.</strong> Tegishli soliq va to‘lovlar, mahalliy qonunlarga rioya qilish foydalanuvchining o‘z zimmasida.",
            "<strong>Kanal yuritadiganlar uchun.</strong> Ba’zi davlatlar foydalanuvchilariga Telegram’da reklama xaridi cheklangan bo‘lishi mumkin. <a href=\"https://telegram.org/tos/content-creator-rewards\" target=\"_blank\" rel=\"noopener\">Kontent mualliflari shartlariga</a> ko‘ra, mualliflar mukofotlarini Fragment qayta ishlaydi. U ayrim foydalanuvchi yoki davlatlarga mukofot bera olmasligi mumkin. Turnir yoki stream kanali yuritsangiz, buni hisobga oling.",
          ],
        },
        {
          t: "h2",
          id: "kriptosiz-variant-stars-va-premiumni",
          text: "Kriptosiz variant: Stars va Premium’ni so‘mda yuborish",
        },
        {
          t: "p",
          text: "Fragment hamyon va kripto talab qiladi. TON hamyoni yo‘q o‘yinchi uchun boshqa yo‘l bor — <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>. GemPay — Telegram’dan mustaqil xizmat.",
        },
        {
          t: "table",
          head: [
            "Mezon",
            "Fragment",
            "GemPay",
          ],
          rows: [
            [
              "Nima ulanadi",
              "Telegram akkaunt va TON hamyon",
              "Hech narsa ulanmaydi",
            ],
            [
              "Oluvchi haqida nima kerak",
              "Xarid oynasida ko‘rsatiladi",
              "Faqat @username",
            ],
            [
              "To‘lov",
              "Kriptohamyon orqali",
              "UzCard, HUMO, Click, Uzum Bank, bot balansi",
            ],
            [
              "Kripto va VPN",
              "Kriptohamyon kerak",
              "Kerak emas",
            ],
            [
              "Bir nechta jamoadosh",
              "O‘z akkauntingizdan, almashtirmasdan",
              "Har biriga alohida buyurtma",
            ],
          ],
        },
        {
          t: "p",
          text: `<strong>Premium.</strong> 3 oy — ${som(premium(3), "uz")}, 6 oy — ${som(premium(6), "uz")}, 12 oy — ${som(premium(12), "uz")}. Narx barcha to‘lov usulida bir xil, 1 oylik tarif yo‘q. Obuna jamoadoshning @username’i bo‘yicha Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi. Uning akkauntiga kirilmaydi, obuna bir necha soniyada faollashadi. Obuna squad chatida nimani o‘zgartirishi haqida: <a href="/blog/telegram-premium-oyinchi-uchun">Telegram Premium o‘yinchiga nima beradi</a>.`,
        },
        {
          t: "p",
          text: `<strong>Stars.</strong> Karta o‘tkazmasi yoki bot balansidan 1 ta yulduz ${som(STARS_UNIT_CARD, "uz")}. Click yoki Uzum Bank orqali — ${som(STARS_UNIT_ONLINE, "uz")}. Bir buyurtmada 50 dan 10 000 tagacha olish mumkin, faqat @username kerak. Yulduzlar bir necha soniyada tushadi. Batafsil: <a href="/blog/telegram-stars-sotib-olish-gempay">Telegram Stars sotib olish GemPay’da</a>.`,
        },
        {
          t: "p",
          text: "Bu yo‘lda bir nechta akkaunt masalasi umuman chiqmaydi. Uchta jamoadoshga sovg‘a qilsangiz, uchta buyurtma ochasiz. Har birida faqat o‘sha odamning @username’ini yozasiz, o‘z sessiyangizga tegmaysiz.",
        },
        {
          t: "p",
          text: "Yodda tuting: Stars UC yoki olmosga aylanmaydi. Jamoadoshga o‘yin ichidagi valyuta kerak bo‘lsa, bu Player ID bilan alohida buyurtma. Farqlar jadvalda: <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">Telegram Stars, UC, olmos va Steam balansi</a>.",
        },
        {
          t: "h2",
          id: "akkaunt-almashtirishda-sir-saqlanadigan-malumotlar",
          text: "Akkaunt almashtirishda sir saqlanadigan ma’lumotlar",
        },
        {
          t: "p",
          text: "«Verifikatsiyasiz ulab beramiz» degan e’lonlar ko‘paygan paytda firibgarlar ham faollashadi. Quyidagilarni yodda tuting:",
        },
        {
          t: "list",
          items: [
            "Fragment shartlariga ko‘ra, kompaniya TON hamyoningizga kira olmaydi. Hamyonning kalit so‘zlarini so‘ragan har qanday «yordamchi» — firibgar.",
            "Telegram’dan kelgan kirish kodi, 2FA paroli va o‘yin akkaunti paroli hech kimga berilmaydi.",
            "«Akkauntingizga kirib, Fragment’ni o‘zimiz ulab qo‘yamiz» degan takliflarni rad eting. Sessiyani faqat o‘zingiz, o‘z telefoningizda o‘chirasiz.",
            "GemPay Stars va Premium uchun faqat @username, o‘yinlar uchun faqat Player ID so‘raydi.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Buyurtma bajarilmasa, GemPay pulni 3 ish kuni ichida to‘liq qaytaradi. Hisobga tushgan valyuta qaytarilmaydi. Savol bo‘lsa, buyurtma raqami bilan <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>ga yozing.",
        },
        {
          t: "p",
          text: "O‘yin akkauntini himoyalash bo‘yicha to‘liq ro‘yxat: <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">O‘yin hisobini xavfsiz to‘ldirish</a>.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Terms of Service",
              href: "https://fragment.com/terms",
            },
            {
              label: "Privacy",
              href: "https://fragment.com/privacy",
            },
            {
              label: "https://fragment.com/about",
              href: "https://fragment.com/about",
            },
            {
              label: "Buy Telegram Premium",
              href: "https://fragment.com/premium",
            },
            {
              label: "Terms of Service for Content Creators",
              href: "https://telegram.org/tos/content-creator-rewards",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Squad’dagi uchta do‘stimga Premium olish uchun Fragment’da akkaunt almashtirishim kerakmi?",
          a: "Yo‘q. Fragment’ning Premium sahifasi obunani boshqa foydalanuvchiga ham olishni nazarda tutadi, ya’ni o‘z akkauntingizdan turib sovg‘a qilasiz. GemPay’da esa har bir do‘st uchun alohida buyurtma ochib, uning @username’ini kiritasiz.",
        },
        {
          q: "Fragment’da shaxsiy akkauntdan klan akkauntiga o‘tsam, oldingi xaridlarim o‘chib ketadimi?",
          a: "Rasmiy yo‘riqnomada sessiyani o‘chirish faqat boshqa akkaunt bilan qayta kirish usuli sifatida berilgan. Xaridlar o‘chishi haqida u yerda hech narsa yozilmagan. Almashtirgandan keyin qaysi hamyon ulanganini baribir tekshirib qo‘ying.",
        },
        {
          q: "Hujjat so‘ralmasa, Fragment’da xarid qilishga yana nima xalal berishi mumkin?",
          a: "Eng ko‘p uchraydigani — Telegram akkauntda ikki bosqichli parolning yo‘qligi yoki uning juda yaqinda qo‘yilgani. Bundan tashqari Fragment ayrim davlatlarda xizmatlarini ogohlantirishsiz cheklashi mumkin. Noto‘g‘ri ulangan hamyon ham xaridni chalg‘itadi.",
        },
        {
          q: "Kimdir Fragment sessiyamni mening o‘rnimga o‘chirib, kerakli akkauntni ulab berishi mumkinmi?",
          a: "Bunga ehtiyoj yo‘q va bu xavfli. Sessiya o‘z telefoningizda, Telegram sozlamalaridan bir necha bosishda o‘chiriladi. Buning uchun kirish kodi yoki 2FA parolini so‘ragan odamga ishonmang.",
        },
        {
          q: "Kripto hamyonim yo‘q — jamoadoshimga Stars’ni qanday yuboraman?",
          a: "@Gempayuz_bot orqali so‘mda yuborasiz: UzCard, HUMO, Click, Uzum Bank yoki bot balansi bilan. Bitta buyurtmada 50 dan 10 000 tagacha yulduz olish mumkin, jamoadoshning @username’i yetarli.",
        },
        {
          q: "Do‘stimning Telegram’ida ikki bosqichli parol yo‘q — sovg‘a unga yetib boradimi?",
          a: "Fragment 2FA haqidagi ogohlantirishni xaridni amalga oshirayotgan akkaunt holati sifatida keltiradi. Oluvchi uchun alohida talab bu maqolada tasdiqlanmagan. GemPay orqali sovg‘a qilganda oluvchidan @username’dan boshqa narsa kerak emas.",
        },
      ],
    },
    ru: {
      title: "Fragment без верификации: сколько аккаунтов можно подключить для подарков",
      metaTitle: "Fragment без верификации: сколько аккаунтов можно",
      metaDescription: "На официальных страницах Fragment нет требования паспорта или селфи. Одновременное подключение нескольких аккаунтов не подтверждено — их меняют по очереди.",
      excerpt: "На официальных страницах Fragment нет требования паспорта или селфи. Одновременное подключение нескольких аккаунтов не подтверждено — их меняют по очереди.",
      answer: "На официальных страницах Fragment нет требования паспорта или селфи. Одновременное подключение нескольких аккаунтов не подтверждено — их меняют по очереди.",
      body: [
        {
          t: "p",
          text: "В Telegram-каналах разошёлся пост: «Fragment теперь открыт для всех, верификация не нужна, подключайтесь хоть с какого количества аккаунтов». В клановых чатах быстро сделали вывод: значит, можно работать без документов и без ограничений.",
        },
        {
          t: "p",
          text: "Игроку, который хочет подарить тиммейту Premium или Stars, важны два вопроса. Первый — спрашивают ли документы. Второй — что на практике можно делать с несколькими аккаунтами Telegram. Ответы ниже взяты не из поста в канале, а со страниц самого fragment.com.",
        },
        {
          t: "h2",
          id: "hujjat-masalasi-fragment-shartlarida-nima",
          text: "Документы: что написано в правилах Fragment и что — в посте канала",
        },
        {
          t: "p",
          text: "В действующих <a href=\"https://fragment.com/terms\" target=\"_blank\" rel=\"noopener\">условиях использования</a> Fragment сказано, что платформа позволяет любому человеку совершать покупки безопасно и анонимно. Согласно <a href=\"https://fragment.com/privacy\" target=\"_blank\" rel=\"noopener\">политике конфиденциальности</a>, отдельной регистрации нет: на сайт входят через Telegram и/или TON-кошелёк.",
        },
        {
          t: "p",
          text: "Fragment обязуется не собирать, не создавать и не обрабатывать персональные данные, которые не строго необходимы для работы сервиса. Компания заявляет, что не хранит персональную информацию. Поэтому и просить о её удалении не нужно.",
        },
        {
          t: "p",
          text: "В посте канала же написано другое: «KYC отменили». На официальных страницах нет ни слова KYC, ни объявления о его отмене. Подтверждений того, что Fragment раньше требовал проверку личности, мы тоже не нашли. Так что заявление «отменили» в этой статье не подтверждено.",
        },
        {
          t: "p",
          text: "На практике это значит: официального указания готовить паспорт или селфи нет. Изменились ли правила, проверяйте на страницах fragment.com, а не по скриншоту из канала.",
        },
        {
          t: "h2",
          id: "fragment-kirishda-soraydigan-va-soramaydigan",
          text: "Что Fragment запрашивает при входе, а что нет",
        },
        {
          t: "p",
          text: "Даже без документов для работы с Fragment есть условия. Они перечислены на <a href=\"https://fragment.com/about\" target=\"_blank\" rel=\"noopener\">странице /about</a> и в условиях использования.",
        },
        {
          t: "table",
          head: [
            "Что",
            "Статус",
            "Комментарий",
          ],
          rows: [
            [
              "Подключение аккаунта Telegram",
              "Запрашивается",
              "Перед ставкой или покупкой",
            ],
            [
              "Подключение TON-кошелька",
              "Запрашивается",
              "Покупка идёт через криптокошелёк",
            ],
            [
              "Пароль 2FA в Telegram",
              "Нужен",
              "Если пароля нет или он установлен слишком недавно, это станет препятствием",
            ],
            [
              "Отдельные логин и пароль",
              "Не запрашиваются",
              "Регистрации как таковой нет",
            ],
            [
              "Данные об IP, браузере, устройстве",
              "Не хранятся",
              "Не привязываются к способам входа",
            ],
            [
              "Доступ к кошельку",
              "Нет",
              "Fragment не может войти в ваш кошелёк",
            ],
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "2FA — это не проверка личности. Это дополнительный пароль в вашем аккаунте Telegram, а не документ. За какой срок до покупки его нужно установить, на официальной странице цифрой не указано. Поэтому лучше включить его заранее, задолго до дня покупки.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "bir-nechta-akkaunt-parallel-emas",
          text: "Несколько аккаунтов: не параллельно, а по очереди",
        },
        {
          t: "p",
          text: "Вторая часть поста — «подключайтесь хоть с какого количества аккаунтов». На странице /about Fragment описан только один конкретный сценарий: полностью отвязать аккаунт Telegram от сайта и войти с другим номером телефона. Для этого в приложении Telegram удаляют сессию Fragment. Затем сайт открывают заново и подключают другой аккаунт.",
        },
        {
          t: "p",
          text: "То есть официальное описание — про <strong>смену</strong> аккаунта. Подключить несколько аккаунтов одновременно и переключаться между ними в один клик — такое на официальных страницах не подтверждено. Подключение «без ограничений» тоже не подтверждено. Сколько раз можно менять аккаунт, не сказано: нет ни ограничения, ни разрешения.",
        },
        {
          t: "p",
          text: "Есть и сторона приватности. Fragment заявляет, что не хранит данные, связывающие вход через Telegram и вход через кошелёк между собой. Данные, привязывающие их к IP-адресу или устройству, тоже не хранятся. Иначе говоря, сайт обещает не вести записей вида «этот кошелёк принадлежит такому-то аккаунту». Но следить за тем, какой кошелёк подключён прямо сейчас, всё равно придётся вам.",
        },
        {
          t: "p",
          text: "Пример: у вас есть личный аккаунт и второй — для клановых дел. Сначала вы работаете на Fragment с личного. Потом удаляете сессию и переходите на второй. Одновременно подключёнными оба не будут.",
        },
        {
          t: "h2",
          id: "asosiy-akkauntdan-ikkinchisiga-otish-android",
          text: "Как переключиться с основного аккаунта на второй: Android и iOS",
        },
        {
          t: "p",
          text: "Порядок ниже основан на собственной инструкции Fragment.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "В аккаунте, к которому подключён Fragment, откройте Telegram и зайдите в Settings.",
            "Перейдите в нужный раздел. На Android: Settings &gt; Privacy &amp; Security &gt; Bots and websites &gt; Logged in with Telegram. На iOS: Settings &gt; Privacy &amp; Security &gt; Active Websites &gt; Logged in with Telegram.",
            "Найдите в списке сессию Fragment и удалите её.",
            "Снова откройте fragment.com и войдите с нужным аккаунтом Telegram.",
            "Перед покупкой ещё раз проверьте, что подключён правильный кошелёк, — Fragment отдельно это рекомендует.",
          ],
        },
        {
          t: "p",
          text: "Если в приложении открыто два аккаунта, смотрите список именно в том, к которому подключён Fragment. В другом аккаунте Fragment не отображается, и создаётся впечатление, что сессию удалить не получается.",
        },
        {
          t: "h2",
          id: "fragment-orqali-jamoadoshga-premium-sovgasi",
          text: "Подарок Premium тиммейту через Fragment",
        },
        {
          t: "p",
          text: "На <a href=\"https://fragment.com/premium\" target=\"_blank\" rel=\"noopener\">странице Telegram Premium</a> во Fragment есть пункт «Buy Premium for a User». Согласно официальному описанию, через него подписку можно купить и себе, и в подарок другу. Значит, для подарка тиммейту менять аккаунт не нужно: вы покупаете ему подписку со своего аккаунта.",
        },
        {
          t: "p",
          text: "Оплата идёт через криптокошелёк. Какая именно криптовалюта принимается, в разных версиях официальных страниц названо по-разному. Поэтому здесь мы её не указываем — точное название проверьте в окне покупки.",
        },
        {
          t: "p",
          text: "По условиям, покупка Premium подчиняется условиям использования Telegram и условиям Telegram Premium. Раздел Stars во Fragment для этой статьи не проверялся, поэтому утверждений о нём здесь нет.",
        },
        {
          t: "h2",
          id: "hujjatsiz-ham-xaridni-toxtatadigan-besh",
          text: "Пять препятствий, которые остановят покупку и без документов",
        },
        {
          t: "p",
          text: "Отсутствие требования документов не означает, что всё открыто. На официальных страницах названы такие ситуации:",
        },
        {
          t: "list",
          items: [
            "<strong>2FA.</strong> В аккаунте Telegram нет двухэтапного пароля или он установлен слишком недавно.",
            "<strong>Ограничения по странам.</strong> Fragment может в любой момент и без предупреждения ограничить, в каких странах он работает и какие сервисы там доступны. Есть ли Узбекистан в таком списке, не подтверждено.",
            "<strong>Не тот кошелёк или аккаунт.</strong> После смены аккаунта может остаться подключённым старый кошелёк. Или вход мог произойти с другого аккаунта Telegram. Перепроверьте и сессию, и кошелёк.",
            "<strong>Налоги и законы.</strong> Соответствующие налоги и сборы, а также соблюдение местного законодательства — на ответственности самого пользователя.",
            "<strong>Для тех, кто ведёт канал.</strong> Пользователям из некоторых стран покупка рекламы в Telegram может быть ограничена. По <a href=\"https://telegram.org/tos/content-creator-rewards\" target=\"_blank\" rel=\"noopener\">условиям для авторов контента</a>, вознаграждения авторов обрабатывает Fragment. Он может не выплачивать их отдельным пользователям или в отдельных странах. Если ведёте турнирный или стрим-канал, учитывайте это.",
          ],
        },
        {
          t: "h2",
          id: "kriptosiz-variant-stars-va-premiumni",
          text: "Вариант без крипты: Stars и Premium в сумах",
        },
        {
          t: "p",
          text: "Fragment требует кошелёк и криптовалюту. Для игрока без TON-кошелька есть другой путь — <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>. GemPay — независимый сервис и не заявляет об официальном сотрудничестве с Telegram.",
        },
        {
          t: "table",
          head: [
            "Критерий",
            "Fragment",
            "GemPay",
          ],
          rows: [
            [
              "Что подключается",
              "Аккаунт Telegram и TON-кошелёк",
              "Ничего не подключается",
            ],
            [
              "Что нужно о получателе",
              "Указывается в окне покупки",
              "Только @username",
            ],
            [
              "Оплата",
              "Через криптокошелёк",
              "UzCard, HUMO, Click, Uzum Bank, баланс бота",
            ],
            [
              "Крипта и VPN",
              "Нужен криптокошелёк",
              "Не нужны",
            ],
            [
              "Несколько тиммейтов",
              "Со своего аккаунта, без смены",
              "Отдельный заказ на каждого",
            ],
          ],
        },
        {
          t: "p",
          text: `<strong>Premium.</strong> 3 месяца — ${som(premium(3), "ru")}, 6 месяцев — ${som(premium(6), "ru")}, 12 месяцев — ${som(premium(12), "ru")}. Цена одинакова при любом способе оплаты, тарифа на 1 месяц нет. Подписка подключается по @username тиммейта через официальный механизм подарков Telegram. В его аккаунт никто не входит, подписка активируется за несколько секунд. Что подписка меняет в чате сквада: <a href="/blog/telegram-premium-oyinchi-uchun">что Telegram Premium даёт игроку</a>.`,
        },
        {
          t: "p",
          text: `<strong>Stars.</strong> Переводом с карты или с баланса бота 1 звезда стоит ${som(STARS_UNIT_CARD, "ru")}. Через Click или Uzum Bank — ${som(STARS_UNIT_ONLINE, "ru")}. В одном заказе можно взять от 50 до 10 000 звёзд, нужен только @username. Звёзды приходят за несколько секунд. Подробнее: <a href="/blog/telegram-stars-sotib-olish-gempay">покупка Telegram Stars в GemPay</a>.`,
        },
        {
          t: "p",
          text: "На этом пути вопрос нескольких аккаунтов вообще не возникает. Хотите сделать подарок трём тиммейтам — оформляете три заказа. В каждом указываете только @username этого человека, свою сессию не трогаете.",
        },
        {
          t: "p",
          text: "Помните: Stars не превращаются в UC или алмазы. Если тиммейту нужна внутриигровая валюта, это отдельный заказ по Player ID. Разница — в таблице: <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">Telegram Stars, UC, алмазы и баланс Steam</a>.",
        },
        {
          t: "h2",
          id: "akkaunt-almashtirishda-sir-saqlanadigan-malumotlar",
          text: "Что не сообщать никому при смене аккаунта",
        },
        {
          t: "p",
          text: "Когда множатся объявления «подключим без верификации», активизируются и мошенники. Держите в голове:",
        },
        {
          t: "list",
          items: [
            "По условиям Fragment, компания не имеет доступа к вашему TON-кошельку. Любой «помощник», который просит сид-фразу кошелька, — мошенник.",
            "Код входа из Telegram, пароль 2FA и пароль от игрового аккаунта никому не передаются.",
            "Отказывайтесь от предложений «зайдём в ваш аккаунт и сами подключим Fragment». Сессию удаляете только вы, на своём телефоне.",
            "GemPay для Stars и Premium запрашивает только @username, для игр — только Player ID.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Если заказ не выполнен, GemPay полностью возвращает деньги в течение 3 рабочих дней. Валюта, уже зачисленная на счёт, не возвращается. С вопросами пишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> с номером заказа.",
        },
        {
          t: "p",
          text: "Полный чек-лист по защите игрового аккаунта: <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">как безопасно пополнить игровой счёт</a>.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Terms of Service",
              href: "https://fragment.com/terms",
            },
            {
              label: "Privacy",
              href: "https://fragment.com/privacy",
            },
            {
              label: "https://fragment.com/about",
              href: "https://fragment.com/about",
            },
            {
              label: "Buy Telegram Premium",
              href: "https://fragment.com/premium",
            },
            {
              label: "Terms of Service for Content Creators",
              href: "https://telegram.org/tos/content-creator-rewards",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Чтобы купить Premium трём друзьям из сквада, мне нужно менять аккаунт на Fragment?",
          a: "Нет. Страница Premium во Fragment предусматривает покупку подписки для другого пользователя, то есть дарите вы со своего аккаунта. В GemPay вы оформляете отдельный заказ на каждого друга и указываете его @username.",
        },
        {
          q: "Если на Fragment переключиться с личного аккаунта на клановый, пропадут ли прошлые покупки?",
          a: "В официальной инструкции удаление сессии описано лишь как способ войти заново с другим аккаунтом. О пропаже покупок там ничего не сказано. После смены всё равно проверьте, какой кошелёк подключён.",
        },
        {
          q: "В клановом чате написали, что Fragment больше не просит документы, — можно на это опираться и покупать?",
          a: "Требования паспорта или селфи в документах Fragment действительно нет. Но объявление об «отмене» официально не подтверждено. Кроме документов есть и другие препятствия: требование 2FA и ограничения по странам.",
        },
        {
          q: "Если удалить сессию Fragment в настройках Telegram, меня выкинет из приложения?",
          a: "Нет. В списке «Logged in with Telegram» только сайты, на которые вы входили через Telegram. Удаление отзывает доступ Fragment, а ваш аккаунт в приложении продолжает работать.",
        },
        {
          q: "Криптокошелька нет — как отправить тиммейту Stars?",
          a: "Через @Gempayuz_bot в сумах: картой UzCard, HUMO, через Click, Uzum Bank или с баланса бота. За один заказ можно взять от 50 до 10 000 звёзд, достаточно @username тиммейта.",
        },
        {
          q: "У друга в Telegram нет двухэтапного пароля — дойдёт ли до него подарок?",
          a: "Fragment приводит предупреждение о 2FA как состояние аккаунта, с которого совершается покупка. Отдельное требование к получателю в этой статье не подтверждено. При подарке через GemPay от получателя нужен только @username.",
        },
      ],
    },
  },
};

export default article;
