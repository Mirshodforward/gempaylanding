// Manba reja: foydalanuvchi topshirgan «GemPay — umumiy blog maqolasi va
// SEO/AEO paketi», 2026-yil 11-sentabr.
//
// LOYIHADAN IKKI OG'ISH — ataylab:
//   1. NARX YO'Q. Manbada so'mdagi narxlar jadvali bor edi; README qoidasi
//      va `npm run ingest` tekshiruvi saytda summa yozishni taqiqlaydi,
//      chunki kursga bog'liq raqam bir haftada yolg'onga aylanadi.
//      O'rniga miqdorlar (60 UC, 5 olmos) va narxni SOLISHTIRISH usuli
//      qoldirildi — ular eskirmaydi.
//   2. TO'LOV USULLARI amaldagi ro'yxatdan: UzCard, HUMO, Click, Uzum
//      Bank; Rossiyadan SBP; bot balansi. Payme/Paynet va Visa/Mastercard
//      manbada ham «eskirgan» deb belgilangan edi.

import type { Article } from "../types";

const article: Article = {
  slug: "oyinlarga-donat-qilish-gempay",
  game: null,
  type: "howto",
  datePublished: "2026-09-12",
  dateModified: "2026-09-12",
  pillar: true,
  keywords: [
    "o'yinlarga donat qilish",
    "donat qilish O'zbekiston",
    "o'yin hisobini to'ldirish",
    "o'yin valyutasi sotib olish",
    "so'mda donat qilish",
    "uzcard bilan donat",
    "click orqali donat",
    "uzum bank orqali donat",
    "telegram donat bot",
    "steam hisobini to'ldirish",
    "donat necha daqiqada tushadi",
    "id orqali donat",
  ],
  locales: {
    uz: {
      title: "O'yinlarga donat qilish va Steam to'ldirish: to'liq qo'llanma",
      metaTitle: "O'yinlarga donat qilish va Steam to'ldirish",
      metaDescription:
        "O'zbekistonda o'yinlarga donat qilish: PUBG UC, Mobile Legends olmos, CODM CP va Steam hamyoni. Telegram bot orqali, so'mda: UzCard, HUMO, Click, Uzum Bank.",
      excerpt:
        "O'nta xizmat bitta botda: qaysi o'yinga nima kerak, ID qanday tekshiriladi, so'mda qanday to'lanadi va donat kechiksa nima qilish kerak.",
      answer:
        "O'yinlarga donat qilish — o'yin ichidagi valyutani pulga sotib olish. GemPay'da buni Telegram orqali qilasiz: o'yinni tanlaysiz, ochiq Player ID ni kiritasiz, ekranda chiqqan nickname'ni tasdiqlaysiz va so'mda UzCard, HUMO, Click yoki Uzum Bank bilan to'laysiz. Kredit odatda 1-5 daqiqada tushadi.",

      body: [
        {
          t: "p",
          text:
            "PUBG Mobile uchun UC kerakmi, Mobile Legends hisobiga olmos olmoqchimisiz yoki Steam hamyonini to'ldirmoqchimisiz — uch holatda ham tartib bir xil: xizmatni tanlaysiz, ID yoki loginni kiritasiz, ekrandagi nickname'ni tekshirasiz va so'mda to'laysiz. Xorijiy karta, valyuta konvertatsiyasi, VPN yoki kriptovalyuta kerak emas. Quyida donat nima ekani, katalogda nima borligi, to'lov qanday o'tishi va nimadir noto'g'ri ketsa nima qilish kerakligi yig'ilgan.",
        },

        { t: "h2", id: "donat-nima", text: "O'yinlarga donat qilish nima" },
        {
          t: "p",
          text:
            "Donat qilish — o'yin ichidagi valyuta, obuna yoki maxsus paketni haqiqiy pulga sotib olish. Har o'yinning o'z valyutasi bor: PUBG Mobile'da <strong>UC</strong>, Mobile Legends va Free Fire'da <strong>olmos</strong>, Call of Duty: Mobile'da <strong>CP</strong>, Honor of Kings'da <strong>token</strong>. Bigo Live'da olmos sovg'a yuborish uchun ishlatiladi, Steam'da esa o'yin valyutasi emas, <strong>hamyon balansi</strong> to'ldiriladi.",
        },
        {
          t: "p",
          text:
            "Paketlarning mazmuni bir xil emas va bu ko'pincha e'tibordan chetda qoladi. Oddiy valyuta paketi, haftalik obuna va pass — uchta alohida mahsulot. Shuning uchun xaridda paket nomiga, uning tarkibiga va akkauntingizga mosligiga qarang, faqat raqamga emas.",
        },
        {
          t: "note",
          tone: "info",
          title: "Donat akkauntga kirishni talab qilmaydi",
          text:
            "Halol to'ldirish uchun faqat <strong>ochiq Player ID</strong> kerak — bu o'yin profilingizda har kim ko'radigan raqam. Parol, SMS kod yoki akkauntga kirish hech qachon so'ralmaydi. Kimdir bularni so'rasa, bu firibgarlik.",
        },

        { t: "h2", id: "xizmatlar", text: "GemPay'da qaysi o'yin va xizmatlarni to'ldirish mumkin" },
        {
          t: "p",
          text:
            "Katalogda o'nta xizmat bor: sakkizta o'yin, Bigo Live va Steam. Har biri uchun qaysi ma'lumot so'ralishi va kredit qancha vaqtda tushishi quyida keltirilgan. Narxlar bu yerda ataylab yozilmagan — ular provayder katalogidan jonli olinadi va kursga qarab o'zgaradi, shuning uchun yagona to'g'ri raqam botdagi to'lov oynasida turadi.",
        },
        {
          t: "table",
          caption: "Katalogdagi xizmatlar, kerakli ma'lumot va taxminiy yetkazish muddati.",
          head: ["Xizmat", "Nima to'ldiriladi", "Nima so'raladi", "Taxminan"],
          rows: [
            ["PUBG Mobile", "UC", "Player ID", "2 daqiqa"],
            ["Mobile Legends", "Olmos", "User ID va Server ID", "1 daqiqa"],
            ["Magic Chess: Go Go", "Olmos", "User ID va Server ID", "2 daqiqa"],
            ["Free Fire", "Olmos", "Player ID", "2 daqiqa"],
            ["Call of Duty: Mobile", "CP", "Player ID (Garena)", "3 daqiqa"],
            ["Honor of Kings", "Token", "Player ID", "3 daqiqa"],
            ["Delta Force", "Delta Coins", "Player ID", "5 daqiqa"],
            ["Asphalt 9", "Token", "Player ID va platforma", "5 daqiqa"],
            ["Bigo Live", "Olmos", "Bigo ID", "3 daqiqa"],
            ["Steam", "Hamyon balansi", "Steam login (account name)", "1 daqiqa"],
          ],
        },
        {
          t: "note",
          tone: "warn",
          title: "Versiyani tekshiring",
          text:
            "Call of Duty: Mobile xizmati <strong>Garena</strong> yo'nalishi uchun. Global — Activision akkaunti bu yo'nalishga mos kelmaydi va ID topilmaydi. Mobile Legends bilan Magic Chess: Go Go ham alohida ilovalar: bir o'yinning ID si ikkinchisiga to'g'ri kelmaydi.",
        },
        {
          t: "p",
          text:
            "Har bir xizmatning o'z sahifasi bor — u yerda o'sha o'yin uchun ID qayerda turishi va qanday paketlar borligi batafsil yozilgan. To'liq ro'yxat <a href=\"/oyinlar\">o'yinlar katalogida</a>.",
        },

        { t: "h2", id: "qadamlar", text: "Telegram orqali qanday donat qilinadi" },
        {
          t: "p",
          text:
            "Buyurtma <a href=\"https://t.me/Gempayuz_bot\">@Gempayuz_bot</a> ichidagi Mini App'da rasmiylashtiriladi. Alohida sayt, ro'yxatdan o'tish yoki ilova o'rnatish kerak emas — Telegram o'zi yetarli.",
        },
        {
          t: "steps",
          items: [
            {
              title: "O'yin yoki xizmatni tanlang",
              text: "Katalogdan kerakli o'yinni oching va uning versiyasi akkauntingizga mos kelishini tekshiring — ayniqsa Call of Duty: Mobile va Mobile Legends oilasidagi o'yinlarda.",
            },
            {
              title: "ID ma'lumotlarini kiriting",
              text: "O'yinga qarab Player ID, User ID bilan Server ID yoki platforma so'raladi. Steam uchun esa account name — kirishda ishlatiladigan login kiritiladi, nickname yoki e-pochta emas.",
            },
            {
              title: "Ekrandagi nickname'ni solishtiring",
              text: "Tizim ID bo'yicha o'yinchi nomini o'yin serveridan so'rab oladi va ekranda ko'rsatadi. Bu tekshiruv bepul va to'lovdan oldin bo'ladi. Notanish nom chiqsa — to'xtang va raqamlarni qaytadan kiriting.",
            },
            {
              title: "Paketni tanlang",
              text: "Valyuta miqdori va paket tarkibini ko'rib chiqing. Obuna yoki pass bilan oddiy valyuta paketini adashtirmang — ular alohida mahsulot.",
            },
            {
              title: "To'lov usulini belgilang va yakuniy summani tekshiring",
              text: "Ekranda ko'rsatilgan summa — to'lanadigan summa. Uni tasdiqlamaguningizcha kartadan hech narsa yechilmaydi.",
            },
            {
              title: "Buyurtma holatini kuzating",
              text: "To'lov tasdiqlangach yetkazish boshlanadi. Natija botdagi buyurtmalar tarixida va Telegram xabarida ko'rinadi.",
            },
          ],
        },
        {
          t: "p",
          text:
            "Nickname'ni tekshirish — xato akkauntga donat ketishining oldini oladigan yagona bosqich, shuning uchun uni o'tkazib yubormang. ID ni qayerdan topish o'yinga qarab farq qiladi: <a href=\"/blog/pubg-mobile-player-id-qayerda\">PUBG Mobile Player ID</a> va <a href=\"/blog/mobile-legends-user-id-server-id-qayerda\">Mobile Legends User ID va Server ID</a> bo'yicha alohida qo'llanmalar bor.",
        },

        { t: "h2", id: "tolov", text: "UzCard, HUMO, Click va Uzum Bank orqali to'lash" },
        {
          t: "p",
          text:
            "To'lov O'zbekiston so'mida qabul qilinadi. Konvertatsiya ham, xorijiy karta ham talab qilinmaydi.",
        },
        {
          t: "table",
          caption: "Qabul qilinadigan to'lov usullari va ular qanday tasdiqlanadi.",
          head: ["Usul", "Turi", "Tasdiqlash"],
          rows: [
            ["UzCard", "O'zbekiston bank kartasi", "SMS orqali bir martalik kod"],
            ["HUMO", "O'zbekiston bank kartasi", "SMS orqali bir martalik kod"],
            ["Click", "Ilova orqali to'lov", "Click ilovasida tasdiq"],
            ["Uzum Bank", "Ilova orqali to'lov", "Uzum Bank ilovasida tasdiq"],
            ["SBP", "Rossiyadan to'lov", "Bank ilovasida tasdiq"],
            ["Bot balansi", "Botdagi ichki hisob", "Qo'shimcha tasdiq kerak emas"],
          ],
        },
        {
          t: "p",
          text:
            "Tanlangan usulga qarab yakuniy summa farq qilishi mumkin, shuning uchun tasdiqlashdan oldin ekrandagi raqamga bir qarab qo'ying — to'lanadigan summa aynan o'sha yerda yoziladi. Karta ma'lumotlari GemPay'ga kelmaydi: ular to'lov tashkilotining himoyalangan sahifasida qoladi. Buning qanday ishlashi <a href=\"/tolov-xavfsizligi\">to'lov xavfsizligi sahifasida</a> tushuntirilgan.",
        },
        {
          t: "note",
          tone: "info",
          title: "Visa, Mastercard yoki kripto kerak emas",
          text:
            "Xalqaro kartalar qabul qilinmaydi va ularga ehtiyoj ham yo'q — mahalliy karta yoki ilova yetarli. Payme va Paynet ham hozircha ishlamaydi. Amaldagi usullar ro'yxati har doim <a href=\"/tolov-va-qaytarish\">to'lov va qaytarish sahifasida</a> turadi.",
        },

        { t: "h2", id: "steam", text: "Steam hisobini so'mda qanday to'ldirish mumkin" },
        {
          t: "p",
          text:
            "Steam o'yinlardan ikki narsa bilan farq qiladi. Birinchidan, u yerda valyuta paketi emas, hamyonga tushadigan summa tanlanadi — chegaralar botda ko'rsatiladi. Ikkinchidan, nickname tasdiqlash bosqichi yo'q, shuning uchun loginni o'zingiz tekshirasiz.",
        },
        {
          t: "facts",
          items: [
            { k: "Nima kiritiladi", v: "Steam account name — kirishda ishlatiladigan login" },
            { k: "Nima kiritilmaydi", v: "Profildagi ko'rinadigan nickname yoki e-pochta manzili" },
            { k: "Parol kerakmi", v: "Yo'q" },
            { k: "Steam Guard kodi kerakmi", v: "Yo'q" },
            { k: "Nickname tasdig'i", v: "Yo'q — loginni o'zingiz tekshirasiz" },
            { k: "Odatiy muddat", v: "Taxminan 1 daqiqa" },
          ],
        },
        {
          t: "note",
          tone: "warn",
          title: "Login bilan nickname bir narsa emas",
          text:
            "Steam'da ko'rinadigan nomni istalgan vaqtda o'zgartirish mumkin, account name esa o'zgarmaydi va kirishda ishlatiladi. Noto'g'ri login kiritilsa mablag' begona hisobga tushadi. Loginni Steam sozlamalaridan ko'chirib oling.",
        },
        {
          t: "p",
          text: "Batafsil shartlar va joriy chegaralar <a href=\"/oyinlar/steam\">Steam sahifasida</a> ko'rsatilgan.",
        },

        { t: "h2", id: "paket-tanlash", text: "Paketni tanlashda nimalarga qarash kerak" },
        {
          t: "p",
          text:
            "Narx saytda yozilmagani uchun solishtirishni o'zingiz qilasiz — lekin bu bir daqiqalik ish va u eng ko'p pul tejaydigan bosqich.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "<strong>Kerakli mahsulotni aniqlang.</strong> PUBG Mobile'dagi 60 UC va 60 WOW Coins — alohida mahsulotlar. Free Fire'dagi haftalik obuna ham 110 olmos paketi bilan bir xil emas.",
            "<strong>Bir birlik narxini hisoblang.</strong> Yakuniy to'lov summasini olinadigan valyuta miqdoriga bo'ling. Katta paket ko'pincha arzonroq chiqadi, lekin har doim emas.",
            "<strong>Yakuniy summani solishtiring.</strong> Tanlangan to'lov usuli umumiy summani o'zgartirishi mumkin, shuning uchun taqqoslashda ekrandagi oxirgi raqamni oling.",
            "<strong>Aksiya shartlarini o'qing.</strong> Chegirmali paket bo'lsa, uning nomi va qo'llanish sharti tekshiriladi — bonus bir marta beriladimi yoki obuna davomida bo'lib beriladimi.",
          ],
        },
        {
          t: "p",
          text:
            "Bir xil miqdorni turli joylarda solishtirish bo'yicha tayyor tahlillar ham bor: <a href=\"/blog/pubg-uc-qayerdan-sotib-olish-taqqoslash\">PUBG UC ni qayerdan olish</a>, <a href=\"/blog/mobile-legends-olmos-arzon-qayerdan-olish\">Mobile Legends olmosi</a> va <a href=\"/blog/free-fire-olmos-arzon-qayerdan-olish\">Free Fire olmosi</a> bo'yicha.",
        },

        { t: "h2", id: "kechiksa", text: "Donat kechiksa yoki hisob to'lmasa nima qilish kerak" },
        {
          t: "p",
          text:
            "Birinchi qoida: takroriy xarid qilmang. Buyurtma hali jarayonda bo'lishi mumkin va ikkinchi to'lov ikkinchi buyurtma yaratadi.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Botdagi <strong>buyurtmalar tarixini</strong> oching va holatni ko'ring.",
            "O'yin ichidagi balansni yangilang — ilovani qayta ishga tushirish ko'pincha yetarli bo'ladi.",
            "To'lov tasdiqlanganiga ishonch hosil qiling: bank xabarnomasi yoki ilovadagi chek.",
            "Taxminiy muddat o'tgan bo'lsa, ayniqsa <strong>15 daqiqadan</strong> keyin ham natija yo'q bo'lsa, qo'llab-quvvatlashga yozing.",
            "Murojaatga buyurtma raqami, o'yin nomi, ID yoki Steam logini, to'lov vaqti va chekni ilova qiling.",
          ],
        },
        {
          t: "note",
          tone: "warn",
          title: "Parol va kodlarni hech kimga yubormang",
          text:
            "Murojaat uchun buyurtma raqami yetarli. Qo'llab-quvvatlash xodimi parol, SMS kod yoki Steam Guard kodini hech qachon so'ramaydi — kim so'rasa, u GemPay emas.",
        },
        {
          t: "p",
          text:
            "Buyurtma bajarilmagan bo'lsa, mablag' to'liq qaytariladi. Qaysi holatda qaytariladi, arizani qanday berish kerak va muddatlar qancha — <a href=\"/tolov-va-qaytarish\">to'lov va pulni qaytarish sahifasida</a>. O'yinga oid muammolar bo'yicha alohida qo'llanmalar ham bor: <a href=\"/blog/pubg-uc-kelmadi-nima-qilish\">UC kelmadi</a>, <a href=\"/blog/mobile-legends-olmos-kelmadi-nima-qilish\">olmos kelmadi</a> va <a href=\"/blog/free-fire-olmos-kelmadi-id-topilmadi\">Free Fire ID topilmadi</a>.",
        },

        { t: "h2", id: "boshlash", text: "Botni ochib, katalogni ko'ring" },
        {
          t: "p",
          text:
            "<a href=\"https://t.me/Gempayuz_bot\">@Gempayuz_bot</a> ni oching, kerakli o'yin yoki Steam'ni tanlang va amaldagi paketlarni ko'ring. ID yoki loginni, paket tarkibini hamda yakuniy summani tekshirib, buyurtmani tasdiqlang. Xizmat haqida batafsil ma'lumot <a href=\"/haqida\">biz haqimizda sahifasida</a>, shartlar esa <a href=\"/oferta\">ommaviy ofertada</a> yozilgan.",
        },
        {
          t: "cta",
          text: "Nickname tekshiruvi bepul: ID ni kiriting, kimga tushishini ko'ring, keyin to'lang.",
        },
        {
          t: "links",
          title: "Shu mavzudagi sahifalar",
          items: [
            { label: "O'yinlar katalogi — 10 ta xizmat", href: "/oyinlar" },
            { label: "PUBG Mobile UC sotib olish", href: "/blog/pubg-mobile-uc-sotib-olish" },
            { label: "Mobile Legends olmos sotib olish", href: "/blog/mobile-legends-olmos-sotib-olish" },
            { label: "Free Fire olmos sotib olish", href: "/blog/free-fire-olmos-sotib-olish" },
            { label: "Call of Duty: Mobile CP sotib olish", href: "/blog/call-of-duty-mobile-cp-sotib-olish" },
            { label: "To'lov va pulni qaytarish", href: "/tolov-va-qaytarish" },
          ],
        },
      ],

      faq: [
        {
          q: "GemPay nima va undan qayerda foydalanaman?",
          a: "GemPay — o'yin hisoblari, Bigo Live va Steam uchun to'ldirish xizmati. U Telegram'dagi @Gempayuz_bot ichidagi Mini App orqali ishlaydi; alohida ilova o'rnatish yoki ro'yxatdan o'tish kerak emas.",
        },
        {
          q: "Donat necha daqiqada tushadi?",
          a: "Xizmatga qarab odatda 1-5 daqiqa. Bu taxminiy muddat, kafolatlangan emas: o'yin serveri yoki provayder navbati kechiktirishi mumkin. To'lovdan keyin holatni botdagi buyurtmalar tarixidan kuzating.",
        },
        {
          q: "Uzum Bank orqali donat qilsa bo'ladimi?",
          a: "Ha. To'lov oynasida Uzum Bank ilovasi orqali to'lash mumkin, tasdiqlash o'sha ilovada bo'ladi. UzCard, HUMO kartalari va Click ham qabul qilinadi.",
        },
        {
          q: "Uzcard yoki Humo bilan to'lash uchun nima kerak?",
          a: "Kartaning o'zi va unga bog'langan telefon raqami. To'lov bankdan SMS orqali keladigan bir martalik kod bilan tasdiqlanadi. Kodni hech kimga aytmang — uni na GemPay, na bank so'raydi.",
        },
        {
          q: "O'yin parolini yoki SMS kodini yuborish kerakmi?",
          a: "Yo'q. O'yin hisobini to'ldirish uchun ochiq ID, kerak bo'lsa Server ID yoki platforma yetarli. Steam uchun account name kiritiladi. Parol, Steam Guard yoki Telegram kirish kodi hech qachon so'ralmaydi.",
        },
        {
          q: "Rossiyadan to'lasa bo'ladimi?",
          a: "Ha, SBP orqali to'lov usuli mavjud. Buyurtma oynasidagi ko'rsatmalarga amal qiling — amaldagi shartlar o'sha yerda ko'rsatiladi.",
        },
        {
          q: "Nega saytda narxlar yozilmagan?",
          a: "Narx provayder katalogidan jonli olinadi va valyuta kursiga bog'liq. Statik sahifaga yozilgan raqam bir hafta ichida haqiqatga to'g'ri kelmay qoladi, shuning uchun yagona amaldagi narx to'lov oynasida ko'rsatiladi.",
        },
        {
          q: "Visa yoki Mastercard bilan to'lash mumkinmi?",
          a: "Yo'q, xalqaro kartalar hozircha qabul qilinmaydi va ular kerak emas. UzCard, HUMO, Click yoki Uzum Bank orqali so'mda to'lash yetarli — xorijiy karta ochish yoki valyuta almashtirish shart emas.",
        },
      ],
    },
  },
};

export default article;
