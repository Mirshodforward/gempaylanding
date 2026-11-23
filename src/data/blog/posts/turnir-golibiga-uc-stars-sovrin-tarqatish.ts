// Avtoblogyoz yasagan maqola (2026-11-23). Niyat: Turnir tashkilotchisi, klan lideri yoki o‘yin kanali egasi g‘oliblarga UC, olmos, CP yoki Stars’ni ko‘p o‘yinchiga birdan tarqatish yo‘lini qidiradi. U Google’ga «turnir g‘oliblariga UC sovrin berish», «klan a’zolariga Stars tarqatish» yoki «sovrin fondini qanday tarqatish» deb yozadi.
// Faktlar tekshirilgan manbalar:
//   https://core.telegram.org/api/giveaways
//   https://telegram.org/blog/giveaways
//   https://telegram.org/faq_premium
//   https://fragment.com/premium
//   https://telegram.org/blog/star-giveaways-iv-in-browser
//   https://telegram.org/tos/stars

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "turnir-golibiga-uc-stars-sovrin-tarqatish",
  game: "pubg-mobile",
  type: "howto",
  datePublished: "2026-11-23",
  dateModified: "2026-11-23",
  keywords: ["turnir g'oliblariga uc sovrin","turnir g'oliblariga stars tarqatish","klan a'zolariga stars sovg'a qilish","sovrin fondini tarqatish","pubg turnir sovrini uc","mobile legends turnir olmos sovrin","telegram stars give-away kanal","призы победителям турнира UC","раздать Telegram Stars победителям","призовой фонд турнира PUBG Mobile","розыгрыш звёзд Telegram в канале"],
  locales: {
    uz: {
      title: "Turnir g‘oliblariga UC, olmos va Stars sovrinini qanday tarqatish kerak",
      metaTitle: "Turnir g‘oliblariga UC, olmos va Stars sovrinini qanday",
      metaDescription: "Sovrinni har g‘olibga alohida buyurtma bilan yuboring: UC, olmos va CP Player ID, Stars va Premium @username bo‘yicha so‘mda tushadi. Parol so‘ralmaydi.",
      excerpt: "Sovrinni har g‘olibga alohida buyurtma bilan yuboring: UC, olmos va CP Player ID, Stars va Premium @username bo‘yicha so‘mda tushadi. Parol so‘ralmaydi.",
      answer: "Sovrinni har g‘olibga alohida buyurtma bilan yuboring: UC, olmos va CP Player ID, Stars va Premium @username bo‘yicha so‘mda tushadi. Parol so‘ralmaydi.",
      body: [
        {
          t: "p",
          text: "Har bir g‘olibga sovrinni alohida buyurtma bilan yuborish eng ishonchli yo‘l. UC, olmos va CP o‘yinchining Player ID’siga, Stars va Premium esa @username’iga tushadi. Turnir tugadi, chatda «sovrin qachon?» degan savollar boshlandi — fondni hisoblash, ID yig‘ish va yuborish tartibi pastda.",
        },
        {
          t: "h2",
          id: "golibga-qaysi-sovrin-mos-uc",
          text: "G‘olibga qaysi sovrin mos: UC, olmos, CP, Stars yoki Premium?",
        },
        {
          t: "p",
          text: "Turnir bitta o‘yinda o‘tsa, sovrin ham o‘sha o‘yin valyutasida bo‘lgani ma’qul: PUBG Mobile’da UC, Mobile Legends va Free Fire’da olmos, Call of Duty: Mobile’da CP. Bir nechta o‘yinli aralash turnir yoki Telegram hamjamiyatidagi tanlov uchun Stars qulayroq. Klan chatida faol, kanal yuritadigan a’zoga Premium mos keladi.",
        },
        {
          t: "table",
          head: [
            "Sovrin",
            "G‘olibdan nima so‘raladi",
            "Qayerga tushadi",
            "Qancha vaqtda",
            "Kimga mos",
          ],
          rows: [
            [
              "PUBG Mobile UC",
              "Player ID",
              "O‘yin akkauntiga",
              "1–5 daqiqa",
              "PUBG turniri g‘oliblari",
            ],
            [
              "Mobile Legends olmosi",
              "User ID va Server ID",
              "O‘yin akkauntiga",
              "1–5 daqiqa",
              "MLBB turniri",
            ],
            [
              "Free Fire olmosi, CODM CP",
              "Player ID",
              "O‘yin akkauntiga",
              "1–5 daqiqa",
              "Shu o‘yinlar bo‘yicha turnir",
            ],
            [
              "Telegram Stars",
              "@username",
              "Telegram’dagi Stars balansiga",
              "Bir necha soniya",
              "Aralash turnir, kanal tanlovi",
            ],
            [
              "Telegram Premium",
              "@username",
              "Telegram akkauntiga obuna sifatida",
              "Bir necha soniya",
              "Chatda faol a’zo, MVP",
            ],
          ],
        },
        {
          t: "p",
          text: "Stars o‘yin valyutasiga aylanmaydi: PUBG o‘ynaydigan g‘olib Stars bilan UC ololmaydi. <a href=\"https://telegram.org/blog/star-giveaways-iv-in-browser\" target=\"_blank\" rel=\"noopener\">Telegram blogida</a> yozilishicha, Stars’ni kanallardagi pullik media va eksklyuziv obunalarga sarflash mumkin. Shuning uchun sovrin turini g‘olib bilan oldindan kelishib oling. Valyutalar farqi <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">Telegram Stars, UC va olmos taqqoslovida</a> batafsil yozilgan.",
        },
        {
          t: "p",
          text: "Klandosh boshqa mamlakatda yashasa ham Premium yetib boradi. <a href=\"https://telegram.org/faq_premium\" target=\"_blank\" rel=\"noopener\">Telegram Premium FAQ</a>’ga ko‘ra sovg‘a qilingan obunalar global tarifda hisoblanadi va istalgan mamlakatdagi foydalanuvchiga yuboriladi.",
        },
        {
          t: "h2",
          id: "sovrin-fondini-elon-qilishdan-oldin",
          text: "Sovrin fondini e’lon qilishdan oldin byudjet qanday hisoblanadi?",
        },
        {
          t: "p",
          text: "Avval o‘rinlar ro‘yxatini tuzing, keyin har bir o‘ringa sovrin turi va miqdorini yozing. Jamoaviy turnirda bitta o‘rinni butun jamoa oladi, shuning uchun fond o‘rinlar soniga emas, sovrin oladigan o‘yinchilar soniga qarab hisoblanadi.",
        },
        {
          t: "p",
          text: "Hisob uchun narxlar:",
        },
        {
          t: "list",
          items: [
            `<strong>Stars:</strong> UzCard/HUMO o‘tkazmasi yoki bot balansidan donasi ${som(STARS_UNIT_CARD, "uz")}, Click yoki Uzum Bank orqali ${som(STARS_UNIT_ONLINE, "uz")}. Bitta buyurtmada 50 dan 10 000 tagacha.`,
            `<strong>Premium:</strong> 3 oy — ${som(premium(3), "uz")}, 6 oy — ${som(premium(6), "uz")}, 12 oy — ${som(premium(12), "uz")}. Narx hamma to‘lov usulida bir xil, 1 oylik tarif yo‘q.`,
            "<strong>UC, olmos va CP:</strong> narx paketga qarab botda ko‘rsatiladi. Fondni e’lon qiladigan kuni botdagi joriy narxni tekshiring.",
          ],
        },
        {
          t: "p",
          text: "Misol: jamoalar to‘rt kishilik bo‘lgan turnir uchun fond shunday chiqadi.",
        },
        {
          t: "table",
          head: [
            "O‘rin",
            "Sovrin",
            "Miqdor",
            "Narx",
            "Jami",
          ],
          rows: [
            [
              "1-o‘rin (jamoa)",
              "UC",
              "Har o‘yinchiga katta paket",
              "Botda tekshiring",
              "Paket narxi × jamoa a’zolari",
            ],
            [
              "2-o‘rin (jamoa)",
              "UC",
              "Har o‘yinchiga kichikroq paket",
              "Botda tekshiring",
              "Paket narxi × jamoa a’zolari",
            ],
            [
              "3-o‘rin (jamoa)",
              "Stars",
              "Har o‘yinchiga 500",
              `500 × ${som(STARS_UNIT_CARD, "uz")}`,
              `2 000 × ${som(STARS_UNIT_CARD, "uz")}`,
            ],
            [
              "MVP",
              "Premium",
              "3 oy",
              `${som(premium(3), "uz")}`,
              `${som(premium(3), "uz")}`,
            ],
            [
              "Zaxira",
              "Stars",
              "100",
              `100 × ${som(STARS_UNIT_CARD, "uz")}`,
              `100 × ${som(STARS_UNIT_CARD, "uz")}`,
            ],
          ],
        },
        {
          t: "p",
          text: "Zaxira qatori teng ochko, qayta o‘yin yoki kutilmagan qo‘shimcha nominatsiya uchun kerak. Stars sovrinini 50 tadan kam qilib belgilamang: bitta buyurtma shundan boshlanadi.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "goliblardan-qaysi-malumotni-yigish-kerak",
          text: "G‘oliblardan qaysi ma’lumotni yig‘ish kerak va nima so‘ralmaydi?",
        },
        {
          t: "p",
          text: "Natija e’lon qilingach, har bir g‘olibdan bitta xabarda quyidagilarni oling:",
        },
        {
          t: "list",
          items: [
            "<strong>O‘yin valyutasi uchun:</strong> Player ID va o‘yindagi nik. Mobile Legends’da User ID va Server ID ikkalasi ham kerak. Nikni keyin bot ko‘rsatgan nik bilan solishtirasiz.",
            "<strong>Stars va Premium uchun:</strong> @username. Telefon raqami yoki profildagi ism kerak emas.",
            "<strong>Tasdiq:</strong> ID skrinshoti va «ha, bu mening akkauntim» degan yozma javob.",
          ],
        },
        {
          t: "p",
          text: "Hech qachon so‘ralmaydi: o‘yin akkaunti paroli, SMS yoki Telegram kirish kodi, ikki bosqichli tekshiruv paroli, karta ma’lumoti. Bularni tashkilotchi ham, GemPay ham so‘ramaydi.",
        },
        {
          t: "p",
          text: "Yig‘ilgan ro‘yxatdagi odatiy kamchiliklar:",
        },
        {
          t: "list",
          items: [
            "@username’da ortiqcha bo‘shliq yoki boshida ikkita «@».",
            "Bir-biriga o‘xshash belgilar: kichik «l» va katta «I», nol va «O» harfi.",
            "G‘olib turnirdan keyin username’ini o‘zgartirgan — uni yuborish kuni qayta so‘rang.",
            "Player ID o‘rniga nik yoki klan tegi yuborilgan.",
          ],
        },
        {
          t: "p",
          text: "ID qayerda turishini g‘olibga tushuntirish uchun <a href=\"/blog/pubg-mobile-player-id-qayerda\">PUBG Mobile Player ID qo‘llanmasini</a> yoki <a href=\"/blog/mobile-legends-user-id-server-id-qayerda\">Mobile Legends User ID va Server ID haqidagi maqolani</a> yuboring.",
        },
        {
          t: "h2",
          id: "gempay-orqali-sovrinni-goliblarga-qanday",
          text: "GemPay orqali sovrinni g‘oliblarga qanday yuborasiz?",
        },
        {
          t: "p",
          text: "Har g‘olibga alohida buyurtma bering. Shunda har sovrinning o‘z buyurtma raqami bo‘ladi va muammo chiqsa, faqat bitta qatorni tekshirasiz.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "<a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>’ni oching va bo‘limni tanlang: o‘yin (UC, olmos, CP) yoki Telegram Stars/Premium.",
            "Ro‘yxatdagi birinchi g‘olibning Player ID’si yoki @username’ini kiriting. O‘yin bo‘limida bot nikni tekshirib ko‘rsatadi — uni ro‘yxatdagi nik bilan solishtiring.",
            "Paket yoki miqdorni tanlang va UzCard, HUMO, Click, Uzum Bank yoki bot balansi bilan to‘lang. Visa va Mastercard qabul qilinmaydi.",
            "Buyurtma raqamini ro‘yxatda g‘olib qatoriga yozing va g‘olibdan sovrin tushganini tasdiqlashni so‘rang.",
            "Tasdiq kelgach, keyingi g‘olibga o‘ting. Navbat bilan ishlasangiz, xato birinchi buyurtmadayoq ko‘rinadi va qolganlariga ko‘chmaydi.",
          ],
        },
        {
          t: "p",
          text: `UC, olmos va CP odatda 1–5 daqiqada avtomatik tushadi, Stars va Premium esa bir necha soniyada. Premium @username bo‘yicha Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi, g‘olibning akkauntiga kirilmaydi. Botda balansingiz bo‘lsa, Stars buyurtmalarini balansdan to‘lash qulay: narx ${som(STARS_UNIT_CARD, "uz")} bo‘yicha hisoblanadi. Rossiyada yashaydigan a’zo SBP orqali to‘lashi mumkin.`,
        },
        {
          t: "p",
          text: "Har bir o‘yin bo‘yicha batafsil tartib <a href=\"/blog/oyinlarga-donat-qilish-gempay\">o‘yinlarga donat qo‘llanmasida</a>, Stars bo‘limi esa <a href=\"/blog/telegram-stars-sotib-olish-gempay\">Telegram Stars sotib olish maqolasida</a> yozilgan.",
        },
        {
          t: "h2",
          id: "telegram-kanalidagi-give-away-vositasi",
          text: "Telegram kanalidagi give-away vositasi turnir uchun yaraydimi?",
        },
        {
          t: "p",
          text: "O‘rinlar bo‘yicha sovrin uchun yaramaydi. <a href=\"https://core.telegram.org/api/giveaways\" target=\"_blank\" rel=\"noopener\">Telegram hujjatiga</a> ko‘ra give-away g‘oliblarini Telegram tasodifiy tanlaydi. Turnirda esa g‘olibni o‘yin natijasi aniqlaydi, shuning uchun 1-o‘rin olgan jamoani give-away orqali mukofotlab bo‘lmaydi.",
        },
        {
          t: "p",
          text: "Turnirni kuzatayotgan tomoshabinlar uchun esa bu vosita foydali. Masalan, final efiri paytida kanal obunachilari orasida Stars yoki Premium o‘ynatsa bo‘ladi.",
        },
        {
          t: "list",
          items: [
            "Kanal va superguruh administratorlari huquqlaridan qat’i nazar give-away boshlay oladi. <a href=\"https://telegram.org/blog/star-giveaways-iv-in-browser\" target=\"_blank\" rel=\"noopener\">Telegram blogiga</a> ko‘ra Stars give-away’ni kanal va guruh egalari o‘tkazadi.",
            "Premium give-away’da obunalar soni va muddati belgilanadi. G‘oliblar sovg‘a kodi yozilgan havola oladi (<a href=\"https://telegram.org/blog/giveaways\" target=\"_blank\" rel=\"noopener\">Telegram e’loni</a>).",
            "Stars give-away’da yulduzlarni g‘oliblarga Telegram o‘zi avtomatik tarqatadi.",
            "Ikkala tur ham oldindan to‘lanadi.",
            "Tugash sanasi albatta ko‘rsatiladi. Qatnashish uchun qo‘shimcha kanal yoki guruhga a’zolikni talab qilish, faqat yangi obunachilarni qo‘shish va ishtirokchilarni mamlakatlar ro‘yxati bilan cheklash mumkin.",
            "<a href=\"https://telegram.org/faq_premium\" target=\"_blank\" rel=\"noopener\">Premium FAQ</a>’ga ko‘ra give-away o‘tkazgan kanal 4 ta boostning hammasini darhol oladi.",
          ],
        },
        {
          t: "p",
          text: "Telegram give-away hujjatlari faqat Premium va Stars haqida. UC, olmos va CP esa o‘yin akkauntiga Player ID bo‘yicha alohida yuboriladi. Amaliy sxema: o‘rinlar sovrini — botdagi alohida buyurtmalar, tomoshabinlar uchun o‘yin — kanaldagi give-away.",
        },
        {
          t: "h2",
          id: "starsni-ozimga-olib-keyin-goliblarga",
          text: "Stars’ni o‘zimga olib, keyin g‘oliblarga bo‘lib bersam bo‘ladimi?",
        },
        {
          t: "p",
          text: "Yo‘q. <a href=\"https://telegram.org/tos/stars\" target=\"_blank\" rel=\"noopener\">Telegram Stars shartlariga</a> ko‘ra shaxsiy balansdagi Stars’ni sotish, yechib olish yoki boshqa akkauntga o‘tkazish mumkin emas. Ularni qayta tarqatishga urinish ham taqiqlangan. Ya’ni klan lideri 5 000 Stars’ni o‘z akkauntiga olib, keyin a’zolarga bo‘lib berolmaydi.",
        },
        {
          t: "p",
          text: "To‘g‘ri yo‘l ikkita: har g‘olibning o‘z @username’iga alohida buyurtma berish yoki kanalda Telegram’ning o‘z Stars give-away vositasidan foydalanish.",
        },
        {
          t: "note",
          tone: "info",
          text: "Stars bo‘yicha xatoni keyin tuzatib bo‘lmaydi. Shartlarda Stars sotuvi yakuniy ekani va Telegram keraksiz yoki adashib qilingan xarid uchun pul qaytarmasligi yozilgan. Stars uchinchi tomon orqali olinsa, to‘lov masalasi o‘sha tomon bilan hal qilinadi.",
        },
        {
          t: "h2",
          id: "xato-id-yoki-username-bilan",
          text: "Xato ID yoki username bilan yuborilsa nima bo‘ladi?",
        },
        {
          t: "list",
          items: [
            "<strong>O‘yin valyutasi:</strong> nik to‘lovdan oldin ko‘rsatiladi. Nik ro‘yxatdagidan farq qilsa, to‘lamang va g‘olibdan ID’ni qayta so‘rang. Bu bosqichda pul hali yechilmagan bo‘ladi.",
            "<strong>Stars va Premium:</strong> boshqa mavjud @username’ga ketgan sovrinni qaytarib bo‘lmaydi. GemPay qoidasiga ko‘ra hisobga tushgan valyuta qaytarilmaydi, Telegram ham Stars xaridini qaytarmaydi.",
            "<strong>Bajarilmagan buyurtma:</strong> pul 3 ish kuni ichida to‘liq qaytariladi. Batafsil: <a href=\"/tolov-va-qaytarish\">To‘lov va qaytarish</a>.",
            "<strong>Sovrin ko‘rinmasa:</strong> g‘olib avval o‘yindagi balansni yoki Telegram’dagi Stars balansini tekshirsin. Keyin <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>’ga buyurtma raqami bilan yozing. Qayta to‘lamang, aks holda bitta sovrin ikki marta ketishi mumkin.",
          ],
        },
        {
          t: "table",
          head: [
            "Holat",
            "Ehtimoliy sabab",
            "Nima qilish kerak",
          ],
          rows: [
            [
              "Bot nikni topmadi",
              "Player ID o‘rniga nik yoki xato raqam yuborilgan",
              "G‘olibdan profil skrinshotini so‘rang",
            ],
            [
              "MLBB’da nik chiqmadi",
              "Server ID tushib qolgan",
              "User ID’ni Server ID bilan birga qayta kiriting",
            ],
            [
              "Stars boshqa odamga ketdi",
              "Username o‘zgargan yoki xato yozilgan",
              "Qaytarilmaydi, keyingi safar yuborish kuni username’ni qayta tasdiqlating",
            ],
            [
              "G‘olib sovrinni ko‘rmayapti",
              "Yetkazish vaqti hali o‘tmagan",
              "5 daqiqa kuting, keyin buyurtma raqami bilan yordamga yozing",
            ],
          ],
        },
        {
          t: "h2",
          id: "sovrin-fondi-eloni-va-sovrinlar",
          text: "Sovrin fondi e’loni va «sovrinlar yuborildi» postida nima bo‘lishi kerak?",
        },
        {
          t: "p",
          text: "Turnir boshlanishidan oldingi e’londa:",
        },
        {
          t: "list",
          items: [
            "har bir o‘rin uchun sovrin turi va miqdori;",
            "g‘olibdan nima so‘ralishi: Player ID yoki @username;",
            "sovrin qachon yuborilishi, masalan, natija e’lon qilingandan keyin;",
            "parol va kod so‘ralmasligi. Bu gap firibgarlarning soxta «sovrin» xabarlaridan himoya qiladi.",
          ],
        },
        {
          t: "p",
          text: "Aniq daqiqa yoki ortiqcha va’da yozmang — «natijadan keyin» degan ibora yetarli.",
        },
        {
          t: "note",
          tone: "info",
          text: "Namuna: «Sovrin fondi: 1-o‘rin — har o‘yinchiga UC, 2-o‘rin — har o‘yinchiga UC, 3-o‘rin — har o‘yinchiga Stars, MVP — 3 oylik Telegram Premium. G‘oliblardan faqat Player ID va @username so‘raymiz, parol va kod so‘ralmaydi. Sovrinlar natija e’lon qilingandan keyin yuboriladi.»",
        },
        {
          t: "p",
          text: "Tarqatish paytida o‘zingiz uchun bitta jadval yuriting. Unda har g‘olib bo‘yicha o‘rin va nik, Player ID yoki @username, sovrin turi va miqdori, buyurtma raqami va sanasi, to‘lov cheki hamda g‘olibning skrinshot bilan tasdig‘i turadi. Kimdir «menga kelmadi» desa, bahsni shu jadval bir daqiqada hal qiladi.",
        },
        {
          t: "p",
          text: "Hammasi yuborilgach, kanalga g‘oliblar ro‘yxati va «sovrinlar yuborildi» postini joylang. Keyingi turnirda qatnashchilar va homiylar shu postga qarab ishonadi. Turnirdan tashqari bitta jamoadoshni mukofotlamoqchi bo‘lsangiz, <a href=\"/blog/jamoadosh-tugilgan-kuniga-telegram-sovga\">jamoadoshga sovg‘a tanlash maqolasi</a> yordam beradi.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Giveaways and gifts",
              href: "https://core.telegram.org/api/giveaways",
            },
            {
              label: "Giveaways in Channels and Free Premium",
              href: "https://telegram.org/blog/giveaways",
            },
            {
              label: "Telegram Premium FAQ",
              href: "https://telegram.org/faq_premium",
            },
            {
              label: "Fragment – Telegram Premium",
              href: "https://fragment.com/premium",
            },
            {
              label: "Star Giveaways and More",
              href: "https://telegram.org/blog/star-giveaways-iv-in-browser",
            },
            {
              label: "Terms of Service for Telegram Stars",
              href: "https://telegram.org/tos/stars",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Bir buyurtmada bir nechta g‘olibga Stars yuborsa bo‘ladimi?",
          a: "GemPay’da Stars buyurtmasi bitta @username uchun beriladi, shuning uchun har g‘olibga alohida buyurtma qiling. Bunda har sovrinning o‘z raqami bo‘ladi va kim nima olgani aniq ko‘rinadi.",
        },
        {
          q: "G‘olib Stars oldi, lekin unga UC kerak edi — almashtirib bo‘ladimi?",
          a: "Yo‘q. Stars o‘yin valyutasiga aylanmaydi, Telegram shartlari esa balansdagi Stars’ni boshqa akkauntga o‘tkazishni taqiqlaydi. Sovrin turini yuborishdan oldin g‘olib bilan kelishib oling.",
        },
        {
          q: "Turnir g‘olibining PUBG akkauntiga UC tushirish uchun uning paroli kerakmi?",
          a: "Kerak emas: UC Player ID bo‘yicha tushadi, bot esa to‘lovdan oldin nikni ko‘rsatadi. Parol yoki kod so‘ragan har qanday «tashkilotchi»dan ehtiyot bo‘ling.",
        },
        {
          q: "Klan a’zolaridan yig‘ilgan pulni Visa karta bilan to‘lasa bo‘ladimi?",
          a: "Yo‘q, Visa va Mastercard qabul qilinmaydi. UzCard, HUMO, Click, Uzum Bank yoki bot balansidan foydalaning, Rossiyadagi a’zo esa SBP orqali to‘lay oladi.",
        },
        {
          q: "Sovrin uchun eng kami necha Stars yuborish mumkin?",
          a: "Bitta buyurtma 50 Stars’dan boshlanadi va 10 000 tagacha bo‘ladi. Bundan kichik sovrin kerak bo‘lsa, boshqa turini tanlang.",
        },
        {
          q: "Sovrin g‘olibga tushmasa, kimga murojaat qilinadi?",
          a: "G‘olib avval o‘yindagi yoki Telegram’dagi balansini tekshirsin, o‘zgarish bo‘lmasa @StarsPaymeeSupport’ga buyurtma raqami bilan yozing. Bajarilmagan buyurtma uchun pul 3 ish kuni ichida to‘liq qaytariladi.",
        },
        {
          q: "Kanaldagi Stars give-away’da tarqatilmay qolgan Stars nima bo‘ladi?",
          a: "Telegram hujjatida ma’lum holatda qolgan Stars give-away tashkilotchisiga qaytarilishi aytilgan, lekin aniq sharti bu maqolada tasdiqlanmagan. Give-away’ni boshlashdan oldin uning oynasidagi shartlarni o‘qing.",
        },
      ],
    },
    ru: {
      title: "Как раздать призы победителям турнира: UC, алмазы и Telegram Stars",
      metaTitle: "Как раздать призы победителям турнира",
      metaDescription: "Отправляйте приз каждому победителю отдельным заказом: UC, алмазы и CP — по Player ID, Stars и Premium — по @username, в сумах. Пароль не нужен.",
      excerpt: "Отправляйте приз каждому победителю отдельным заказом: UC, алмазы и CP — по Player ID, Stars и Premium — по @username, в сумах. Пароль не нужен.",
      answer: "Отправляйте приз каждому победителю отдельным заказом: UC, алмазы и CP — по Player ID, Stars и Premium — по @username, в сумах. Пароль не нужен.",
      body: [
        {
          t: "p",
          text: "Надёжнее всего отправлять приз каждому победителю отдельным заказом. UC, алмазы и CP зачисляются на Player ID игрока, Stars и Premium — на его @username. Турнир закончился, в чате уже спрашивают «когда призы?». Ниже — как посчитать фонд, собрать ID и разослать призы.",
        },
        {
          t: "h2",
          id: "golibga-qaysi-sovrin-mos-uc",
          text: "Какой приз подходит победителю: UC, алмазы, CP, Stars или Premium?",
        },
        {
          t: "p",
          text: "Если турнир проходил в одной игре, приз лучше выдать в её валюте: UC в PUBG Mobile, алмазы в Mobile Legends и Free Fire, CP в Call of Duty: Mobile. Для смешанного турнира по нескольким играм или конкурса в Telegram-сообществе удобнее Stars. Активному участнику кланового чата, который ведёт свой канал, подойдёт Premium.",
        },
        {
          t: "table",
          head: [
            "Приз",
            "Что нужно от победителя",
            "Куда зачисляется",
            "За какое время",
            "Кому подходит",
          ],
          rows: [
            [
              "UC для PUBG Mobile",
              "Player ID",
              "На игровой аккаунт",
              "1–5 минут",
              "Победителям турнира по PUBG",
            ],
            [
              "Алмазы Mobile Legends",
              "User ID и Server ID",
              "На игровой аккаунт",
              "1–5 минут",
              "Турнир по MLBB",
            ],
            [
              "Алмазы Free Fire, CP для CODM",
              "Player ID",
              "На игровой аккаунт",
              "1–5 минут",
              "Турнир по этим играм",
            ],
            [
              "Telegram Stars",
              "@username",
              "На баланс Stars в Telegram",
              "Несколько секунд",
              "Смешанный турнир, конкурс в канале",
            ],
            [
              "Telegram Premium",
              "@username",
              "На аккаунт Telegram как подписка",
              "Несколько секунд",
              "Активный участник чата, MVP",
            ],
          ],
        },
        {
          t: "p",
          text: "Stars не превращаются в игровую валюту: победитель, который играет в PUBG, не купит на них UC. Как сказано в <a href=\"https://telegram.org/blog/star-giveaways-iv-in-browser\" target=\"_blank\" rel=\"noopener\">блоге Telegram</a>, Stars можно тратить на платный контент и эксклюзивные подписки в каналах. Поэтому тип приза стоит заранее согласовать с победителем. Чем отличаются валюты, подробно разобрано в <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">сравнении Telegram Stars, UC и алмазов</a>.",
        },
        {
          t: "p",
          text: "Premium дойдёт, даже если соклановец живёт в другой стране. Согласно <a href=\"https://telegram.org/faq_premium\" target=\"_blank\" rel=\"noopener\">FAQ по Telegram Premium</a>, подаренные подписки считаются по глобальному тарифу, и их можно отправить пользователю в любой стране.",
        },
        {
          t: "h2",
          id: "sovrin-fondini-elon-qilishdan-oldin",
          text: "Как посчитать бюджет перед объявлением призового фонда?",
        },
        {
          t: "p",
          text: "Сначала составьте список мест, затем впишите для каждого тип и размер приза. В командном турнире одно место получает вся команда, поэтому фонд считают не по числу мест, а по числу игроков, которые получат приз.",
        },
        {
          t: "p",
          text: "Цены для расчёта:",
        },
        {
          t: "list",
          items: [
            `<strong>Stars:</strong> переводом с UzCard/HUMO или с баланса бота — ${som(STARS_UNIT_CARD, "ru")} за штуку, через Click или Uzum Bank — ${som(STARS_UNIT_ONLINE, "ru")}. В одном заказе — от 50 до 10 000 штук.`,
            `<strong>Premium:</strong> 3 месяца — ${som(premium(3), "ru")}, 6 месяцев — ${som(premium(6), "ru")}, 12 месяцев — ${som(premium(12), "ru")}. Цена одинакова при любом способе оплаты, тарифа на 1 месяц нет.`,
            "<strong>UC, алмазы и CP:</strong> цена зависит от пакета и указана в боте. В день объявления фонда сверьтесь с актуальной ценой в боте.",
          ],
        },
        {
          t: "p",
          text: "Пример фонда для турнира, где в командах по четыре игрока:",
        },
        {
          t: "table",
          head: [
            "Место",
            "Приз",
            "Размер",
            "Цена",
            "Итого",
          ],
          rows: [
            [
              "1-е место (команда)",
              "UC",
              "Крупный пакет каждому игроку",
              "Смотрите в боте",
              "Цена пакета × игроки команды",
            ],
            [
              "2-е место (команда)",
              "UC",
              "Пакет поменьше каждому игроку",
              "Смотрите в боте",
              "Цена пакета × игроки команды",
            ],
            [
              "3-е место (команда)",
              "Stars",
              "По 500 каждому игроку",
              `500 × ${som(STARS_UNIT_CARD, "ru")}`,
              `2 000 × ${som(STARS_UNIT_CARD, "ru")}`,
            ],
            [
              "MVP",
              "Premium",
              "3 месяца",
              `${som(premium(3), "ru")}`,
              `${som(premium(3), "ru")}`,
            ],
            [
              "Резерв",
              "Stars",
              "100",
              `100 × ${som(STARS_UNIT_CARD, "ru")}`,
              `100 × ${som(STARS_UNIT_CARD, "ru")}`,
            ],
          ],
        },
        {
          t: "p",
          text: "Резерв нужен на случай равенства очков, переигровки или неожиданной дополнительной номинации. Не назначайте приз меньше 50 Stars: с этого количества начинается один заказ.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "goliblardan-qaysi-malumotni-yigish-kerak",
          text: "Какие данные собрать у победителей и что у них не спрашивать?",
        },
        {
          t: "p",
          text: "После объявления результатов получите от каждого победителя одним сообщением:",
        },
        {
          t: "list",
          items: [
            "<strong>Для игровой валюты:</strong> Player ID и игровой ник. Для Mobile Legends нужны и User ID, и Server ID. Ник потом сверите с тем, который покажет бот.",
            "<strong>Для Stars и Premium:</strong> @username. Номер телефона или имя в профиле не нужны.",
            "<strong>Подтверждение:</strong> скриншот ID и письменный ответ «да, это мой аккаунт».",
          ],
        },
        {
          t: "p",
          text: "Никогда не запрашиваются: пароль от игрового аккаунта, код из SMS или код входа в Telegram, пароль двухэтапной проверки, данные карты. Их не спрашивает ни организатор, ни GemPay.",
        },
        {
          t: "p",
          text: "Типичные ошибки в собранном списке:",
        },
        {
          t: "list",
          items: [
            "Лишний пробел в @username или два «@» в начале.",
            "Похожие символы: строчная «l» и заглавная «I», ноль и буква «O».",
            "Победитель сменил username после турнира — переспросите его в день отправки.",
            "Вместо Player ID прислали ник или клан-тег.",
          ],
        },
        {
          t: "p",
          text: "Чтобы объяснить победителю, где найти ID, отправьте ему <a href=\"/blog/pubg-mobile-player-id-qayerda\">инструкцию по Player ID в PUBG Mobile</a> или <a href=\"/blog/mobile-legends-user-id-server-id-qayerda\">статью про User ID и Server ID в Mobile Legends</a>.",
        },
        {
          t: "h2",
          id: "gempay-orqali-sovrinni-goliblarga-qanday",
          text: "Как отправить призы победителям через GemPay?",
        },
        {
          t: "p",
          text: "Оформляйте отдельный заказ на каждого победителя. Тогда у каждого приза будет свой номер заказа, и при проблеме придётся проверять только одну строку.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Откройте <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> и выберите раздел: игра (UC, алмазы, CP) или Telegram Stars/Premium.",
            "Введите Player ID или @username первого победителя из списка. В игровом разделе бот проверит и покажет ник — сверьте его с ником в списке.",
            "Выберите пакет или количество и оплатите через UzCard, HUMO, Click, Uzum Bank или с баланса бота. Visa и Mastercard не принимаются.",
            "Запишите номер заказа в строку победителя и попросите его подтвердить, что приз пришёл.",
            "После подтверждения переходите к следующему победителю. Если работать по очереди, ошибка всплывёт уже на первом заказе и не повторится в остальных.",
          ],
        },
        {
          t: "p",
          text: `UC, алмазы и CP обычно зачисляются автоматически за 1–5 минут, Stars и Premium — за несколько секунд. Premium подключается по @username через официальный механизм подарков Telegram, входить в аккаунт победителя не нужно. Если у вас есть баланс в боте, заказы Stars удобно оплачивать с него: цена считается по ${som(STARS_UNIT_CARD, "ru")}. Участник из России может оплатить через СБП.`,
        },
        {
          t: "p",
          text: "Подробный порядок для каждой игры — в <a href=\"/blog/oyinlarga-donat-qilish-gempay\">инструкции по донату в игры</a>, а раздел Stars описан в <a href=\"/blog/telegram-stars-sotib-olish-gempay\">статье о покупке Telegram Stars</a>.",
        },
        {
          t: "h2",
          id: "telegram-kanalidagi-give-away-vositasi",
          text: "Подходит ли для турнира розыгрыш в Telegram-канале?",
        },
        {
          t: "p",
          text: "Для призов за места — нет. Согласно <a href=\"https://core.telegram.org/api/giveaways\" target=\"_blank\" rel=\"noopener\">документации Telegram</a>, победителей розыгрыша Telegram выбирает случайно. В турнире же победителя определяет результат игры, поэтому наградить команду с 1-го места через розыгрыш не получится.",
        },
        {
          t: "p",
          text: "А вот для зрителей турнира инструмент полезен. Например, во время трансляции финала можно разыграть Stars или Premium среди подписчиков канала.",
        },
        {
          t: "list",
          items: [
            "Администраторы каналов и супергрупп могут запускать розыгрыш с любым набором прав. По данным <a href=\"https://telegram.org/blog/star-giveaways-iv-in-browser\" target=\"_blank\" rel=\"noopener\">блога Telegram</a>, розыгрыши Stars проводят владельцы каналов и групп.",
            "В розыгрыше Premium задаются количество и срок подписок. Победители получают ссылку с подарочным кодом (<a href=\"https://telegram.org/blog/giveaways\" target=\"_blank\" rel=\"noopener\">анонс Telegram</a>).",
            "В розыгрыше Stars Telegram сам автоматически распределяет звёзды между победителями.",
            "Оба вида розыгрыша оплачиваются заранее.",
            "Дата окончания указывается обязательно. Можно потребовать подписку на дополнительные каналы или группы, допустить только новых подписчиков и ограничить участников списком стран.",
            "Согласно <a href=\"https://telegram.org/faq_premium\" target=\"_blank\" rel=\"noopener\">FAQ по Premium</a>, канал, проводящий розыгрыш, сразу получает все 4 буста.",
          ],
        },
        {
          t: "p",
          text: "Документация Telegram о розыгрышах касается только Premium и Stars. UC, алмазы и CP отправляются отдельно, на игровой аккаунт по Player ID. Рабочая схема: призы за места — отдельными заказами в боте, игра для зрителей — розыгрыш в канале.",
        },
        {
          t: "h2",
          id: "starsni-ozimga-olib-keyin-goliblarga",
          text: "Можно ли купить Stars себе и потом раздать победителям?",
        },
        {
          t: "p",
          text: "Нет. Согласно <a href=\"https://telegram.org/tos/stars\" target=\"_blank\" rel=\"noopener\">условиям Telegram Stars</a>, Stars с личного баланса нельзя продавать, выводить или переводить на другой аккаунт. Попытки перераспределять их тоже запрещены. То есть лидер клана не может купить себе 5 000 Stars, а потом раздать их участникам.",
        },
        {
          t: "p",
          text: "Правильных пути два: отдельный заказ на @username каждого победителя или встроенный в Telegram розыгрыш Stars в канале.",
        },
        {
          t: "note",
          tone: "info",
          text: "Ошибку со Stars потом не исправить. В условиях сказано, что продажа Stars окончательна и Telegram не возвращает деньги за ненужные или случайные покупки. Если Stars куплены через третью сторону, вопросы оплаты решаются с этой стороной.",
        },
        {
          t: "h2",
          id: "xato-id-yoki-username-bilan",
          text: "Что будет, если отправить приз на неверный ID или username?",
        },
        {
          t: "list",
          items: [
            "<strong>Игровая валюта:</strong> ник показывается до оплаты. Если он не совпадает с ником в списке, не платите и переспросите ID у победителя. На этом этапе деньги ещё не списаны.",
            "<strong>Stars и Premium:</strong> приз, ушедший на чужой существующий @username, вернуть нельзя. По правилам GemPay зачисленная валюта не возвращается, и Telegram тоже не возвращает покупки Stars.",
            "<strong>Невыполненный заказ:</strong> деньги полностью возвращаются в течение 3 рабочих дней. Подробнее: <a href=\"/tolov-va-qaytarish\">Оплата и возврат</a>.",
            "<strong>Приз не видно:</strong> пусть победитель сначала проверит игровой баланс или баланс Stars в Telegram. Затем напишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> с номером заказа. Не платите повторно, иначе один приз может уйти дважды.",
          ],
        },
        {
          t: "table",
          head: [
            "Ситуация",
            "Вероятная причина",
            "Что делать",
          ],
          rows: [
            [
              "Бот не нашёл ник",
              "Вместо Player ID прислали ник или неверный номер",
              "Попросите у победителя скриншот профиля",
            ],
            [
              "В MLBB не появился ник",
              "Пропущен Server ID",
              "Введите User ID заново вместе с Server ID",
            ],
            [
              "Stars ушли другому человеку",
              "Username изменился или написан с ошибкой",
              "Не возвращаются; в следующий раз подтверждайте username в день отправки",
            ],
            [
              "Победитель не видит приз",
              "Время зачисления ещё не вышло",
              "Подождите 5 минут, затем напишите в поддержку с номером заказа",
            ],
          ],
        },
        {
          t: "h2",
          id: "sovrin-fondi-eloni-va-sovrinlar",
          text: "Что написать в анонсе призового фонда и в посте «призы отправлены»?",
        },
        {
          t: "p",
          text: "В анонсе до начала турнира укажите:",
        },
        {
          t: "list",
          items: [
            "тип и размер приза за каждое место;",
            "что потребуется от победителя: Player ID или @username;",
            "когда отправят призы — например, после объявления результатов;",
            "что пароль и коды не запрашиваются. Эта фраза защищает от фальшивых «призовых» сообщений мошенников.",
          ],
        },
        {
          t: "p",
          text: "Не пишите точное время в минутах и лишних обещаний — формулировки «после результатов» достаточно.",
        },
        {
          t: "note",
          tone: "info",
          text: "Образец: «Призовой фонд: 1-е место — UC каждому игроку, 2-е место — UC каждому игроку, 3-е место — Stars каждому игроку, MVP — Telegram Premium на 3 месяца. От победителей нужны только Player ID и @username, пароль и коды не запрашиваются. Призы отправим после объявления результатов».",
        },
        {
          t: "p",
          text: "Во время раздачи ведите для себя одну таблицу. В ней по каждому победителю: место и ник, Player ID или @username, тип и размер приза, номер и дата заказа, чек об оплате и подтверждение победителя со скриншотом. Если кто-то скажет «мне не пришло», спор решится по этой таблице за минуту.",
        },
        {
          t: "p",
          text: "Когда всё отправлено, опубликуйте в канале список победителей и пост «призы отправлены». На следующем турнире участники и спонсоры будут доверять вам, глядя на этот пост. Если хотите наградить одного соклановца вне турнира, поможет <a href=\"/blog/jamoadosh-tugilgan-kuniga-telegram-sovga\">статья о выборе подарка для тиммейта</a>.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Giveaways and gifts",
              href: "https://core.telegram.org/api/giveaways",
            },
            {
              label: "Giveaways in Channels and Free Premium",
              href: "https://telegram.org/blog/giveaways",
            },
            {
              label: "Telegram Premium FAQ",
              href: "https://telegram.org/faq_premium",
            },
            {
              label: "Fragment – Telegram Premium",
              href: "https://fragment.com/premium",
            },
            {
              label: "Star Giveaways and More",
              href: "https://telegram.org/blog/star-giveaways-iv-in-browser",
            },
            {
              label: "Terms of Service for Telegram Stars",
              href: "https://telegram.org/tos/stars",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Можно ли одним заказом отправить Stars сразу нескольким победителям?",
          a: "В GemPay заказ Stars оформляется на один @username, поэтому на каждого победителя нужен отдельный заказ. Так у каждого приза будет свой номер, и сразу видно, кто что получил.",
        },
        {
          q: "Победитель получил Stars, а ему нужны были UC — можно обменять?",
          a: "Нет. Stars не превращаются в игровую валюту, а условия Telegram запрещают переводить Stars с баланса на другой аккаунт. Тип приза согласуйте с победителем до отправки.",
        },
        {
          q: "Нужен ли пароль победителя, чтобы зачислить UC на его аккаунт PUBG?",
          a: "Не нужен: UC приходят по Player ID, а бот до оплаты показывает ник. Будьте осторожны с любым «организатором», который просит пароль или код.",
        },
        {
          q: "Можно ли оплатить призы деньгами клана с карты Visa?",
          a: "Нет, Visa и Mastercard не принимаются. Используйте UzCard, HUMO, Click, Uzum Bank или баланс бота, а участник из России может заплатить через СБП.",
        },
        {
          q: "Какое минимальное количество Stars можно отправить в качестве приза?",
          a: "Один заказ начинается от 50 Stars и может доходить до 10 000. Если нужен приз поменьше, выберите другой тип.",
        },
        {
          q: "Куда обращаться, если приз не дошёл до победителя?",
          a: "Пусть победитель сначала проверит игровой баланс или баланс в Telegram; если изменений нет, напишите в @StarsPaymeeSupport с номером заказа. За невыполненный заказ деньги полностью возвращаются в течение 3 рабочих дней.",
        },
        {
          q: "Что происходит с нераспределёнными Stars в розыгрыше в канале?",
          a: "В документации Telegram сказано, что в определённом случае оставшиеся Stars возвращаются организатору розыгрыша, но точное условие в этой статье не подтверждено. Перед запуском прочитайте условия в окне розыгрыша.",
        },
      ],
    },
  },
};

export default article;
