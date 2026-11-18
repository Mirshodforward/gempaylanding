// Avtoblogyoz yasagan maqola (2026-11-18). Niyat: O'zbekistondagi o'yinchi va Telegram foydalanuvchisi klan chatida «botlar bloklanadi, endi faqat Stars» degan xabarni ko'rib, «Telegram botlari bloklanadimi, endi botda nima bilan to'layman, Durov nima dedi» deb qidiradi. U Telegram xabari va Durov posti nimani anglatishini, o'zi ishlatadigan botlar va donatga qanday ta'sir qilishini hamda Stars'ni qayerdan olishni bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://core.telegram.org/bots/payments-stars
//   https://telegram.org/tos/bot-developers
//   https://core.telegram.org/api/stars
//   https://fragment.com/terms
//   https://fragment.com/stars/buy

import type { Article } from "../types";
import { STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const article: Article = {
  slug: "telegram-botlar-bloklanadimi-faqat-stars-oyinchi",
  game: null,
  type: "info",
  datePublished: "2026-11-18",
  dateModified: "2026-11-18",
  keywords: ["telegram botlar bloklanadimi faqat stars","botlarda endi faqat stars bilan to'lash","durov stars botlar posti","telegram mini ilova raqamli xizmat stars","telegram bot tolov stars gram","stars somda sotib olish","ai bot stars bilan tolash","телеграм боты заблокируют только звезды","дуров боты только stars","оплата в ботах только telegram stars","telegram stars мини-приложения цифровые товары","купить telegram stars в узбекистане"],
  locales: {
    uz: {
      title: "«Endi faqat Stars»: Telegram botlari bloklanadimi va o‘yinchi nima qiladi?",
      metaTitle: "«Endi faqat Stars»: Telegram botlari bloklanadimi",
      metaDescription: "Yo‘q, hamma botlar emas: ogohlantirish raqamli xizmat uchun Stars’dan boshqa to‘lov olayotgan botlarga tegishli. Pul olmaydigan botlar haqida xabarda gap yo‘q.",
      excerpt: "Yo‘q, hamma botlar emas: ogohlantirish raqamli xizmat uchun Stars’dan boshqa to‘lov olayotgan botlarga tegishli. Pul olmaydigan botlar haqida xabarda gap yo‘q.",
      answer: "Yo‘q, hamma botlar emas: ogohlantirish raqamli xizmat uchun Stars’dan boshqa to‘lov olayotgan botlarga tegishli. Pul olmaydigan botlar haqida xabarda gap yo‘q.",
      body: [
        {
          t: "p",
          text: "Yo‘q, hamma botlar bloklanmaydi. Telegram ogohlantirishi faqat bot yoki mini-ilova ichida raqamli tovar yoki xizmat uchun Telegram Stars’dan boshqa yo‘l bilan pul olayotganlarga qaratilgan.",
        },
        {
          t: "h2",
          id: "klan-chatidagi-hamma-botlar-bloklanadi",
          text: "Klan chatidagi «hamma botlar bloklanadi» xabari rostmi?",
        },
        {
          t: "p",
          text: "Qoidaning o‘zi rasmiy hujjatlarda allaqachon yozilgan. Telegram’ning <a href=\"https://core.telegram.org/bots/payments-stars\" target=\"_blank\" rel=\"noopener\">Stars to‘lovlari hujjatida</a> aytilishicha, bot va mini-ilovalarda raqamli tovar va xizmat uchun barcha to‘lovlar faqat Telegram Stars bilan bo‘lishi kerak. <a href=\"https://telegram.org/tos/bot-developers\" target=\"_blank\" rel=\"noopener\">Bot dasturchilari shartlarida</a> ham bunday to‘lovlarni uchinchi tomon to‘lov provayderlari orqali o‘tkazib bo‘lmasligi, bitim esa faqat Stars almashinuvi bilan bajarilishi yozilgan.",
        },
        {
          t: "p",
          text: "Yangilik boshqa narsada. 2026-yil noyabrida Telegram dasturchilarga to‘lovlar tekshirilayotgani haqida xabar yubordi. 17-noyabrda esa Pavel Durov bu haqda o‘z kanalida yozdi. Klan chatiga «botlar bloklanadi» bo‘lib yetib kelgan gap shu ikki matndan chiqqan.",
        },
        {
          t: "p",
          text: "Klan statistikasi, turnir jadvali, eslatma yoki musiqa boti kabi pul olmaydigan botlar haqida xabarda gap yo‘q. Ularni hozirdan tashlab ketish yoki o‘rniga boshqasini qidirish shart emas.",
        },
        {
          t: "p",
          text: "Chatda qayta aytilgan gapga emas, asl manbaga tayaning. Quyida ikkala matnning mazmuni berilgan.",
        },
        {
          t: "h2",
          id: "ogohlantirish-kimdan-keldi-va-unda",
          text: "Ogohlantirish kimdan keldi va unda nima yozilgan?",
        },
        {
          t: "h3",
          text: "Telegram jamoasining dasturchilarga xabari",
        },
        {
          t: "p",
          text: "Telegram xabarida yozilishicha, Stars Apple va Google ilova ichidagi xaridlari orqali sotiladi. Shu sababli bot va mini-ilovalarda raqamli tovar faqat Stars evaziga sotiladi: «digital goods can only be sold for Telegram Stars».",
        },
        {
          t: "p",
          text: "Xabar oxirida ogohlantirish bor. Raqamli tovar uchun Stars’dan boshqa to‘lov olayotgan bot yoki mini-ilova «may be blocked at any time, without warning», ya’ni istalgan vaqtda ogohlantirishsiz bloklanishi mumkin. Telegram shu hafta barcha bot va mini-ilovalardagi to‘lovlarni tahlil qilishni davom ettirayotganini yozib, qo‘shimcha qilgan: «There will be no further notice» — boshqa ogohlantirish bo‘lmaydi.",
        },
        {
          t: "h3",
          text: "Durovning 17-noyabrdagi posti",
        },
        {
          t: "p",
          text: "Durov o‘z kanalida shunday yozdi: «Telegram bots and mini apps can accept only Stars (*Grams) for digital services». Mazmuni: bot va mini-ilovalar raqamli xizmat uchun faqat Stars qabul qila oladi. Avtoritar davlatlardagi VPN botlarni esa u istisno deb atadi.",
        },
        {
          t: "note",
          tone: "info",
          text: "Bu ikki matn rasmiy sahifalarda alohida e’lon sifatida topilmadi. Ular Telegram nomidan yuborilgan xabar va Durov posti sifatida keltirilyapti. «Raqamli xizmat faqat Stars bilan» qoidasining o‘zi esa <a href=\"https://core.telegram.org/bots/payments-stars\" target=\"_blank\" rel=\"noopener\">Stars to‘lovlari hujjatida</a> va <a href=\"https://telegram.org/tos/bot-developers\" target=\"_blank\" rel=\"noopener\">dasturchilar shartlarida</a> yozilgan.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "oyinchi-ishlatadigan-qaysi-botlarga-bu",
          text: "O‘yinchi ishlatadigan qaysi botlarga bu qoida tegadi?",
        },
        {
          t: "p",
          text: "Telegram xabariga ko‘ra, raqamli tovar va xizmat — bot yoki mini-ilova raqamli shaklda yetkazib beradigan va pul oladigan har qanday narsa. Dasturchilar shartlarida esa Telegram raqamli tovar nimaligini Apple va Google ta’riflariga qarab belgilashi aytilgan.",
        },
        {
          t: "table",
          head: [
            "Bot nima uchun pul oladi",
            "Telegram xabarida yoki rasmiy sahifada",
            "O‘yinchi uchun ma’nosi",
          ],
          rows: [
            [
              "Botning o‘ziga obuna (masalan, klan statistikasi botining pullik tarifi)",
              "Xabardagi ro‘yxatda bor",
              "Obuna Stars bilan to‘lanadi",
            ],
            [
              "Telegram integratsiyasidagi pullik vosita (guruh moderatsiyasi, avto-post)",
              "Xabardagi ro‘yxatda bor",
              "To‘lov Stars bilan",
            ],
            [
              "Uchinchi tomon AI modellariga kirish (build yoki strategiya so‘raladigan AI bot)",
              "Xabardagi ro‘yxatda bor",
              "To‘lov Stars bilan",
            ],
            [
              "Shu xizmatlarning kreditlari va tokenlari",
              "Xabardagi ro‘yxatda bor",
              "Kredit to‘plami ham Stars bilan",
            ],
            [
              "Jismoniy tovar (geymer sichqoncha sotadigan do‘kon boti)",
              "Hujjatga ko‘ra boshqa valyuta va provayder ishlatish mumkin, to‘lovni Telegram o‘zi o‘tkazmaydi",
              "Bu qoida tegmaydi",
            ],
            [
              "To‘lov olmaydigan bot",
              "Xabarda tilga olinmagan",
              "Hech narsa o‘zgarmaydi",
            ],
            [
              "O‘yin valyutasi donati",
              "Xabarda alohida tilga olinmagan",
              "Bu maqolada taxmin qilinmaydi",
            ],
          ],
        },
        {
          t: "p",
          text: "Raqamli xizmatlar ro‘yxati Telegram xabaridan olingan, rasmiy sahifalarda u aynan shu ko‘rinishda topilmadi. Shuning uchun aniq bir bot ro‘yxatga kiradimi, degan savolga yakuniy javobni faqat Telegram bera oladi.",
        },
        {
          t: "h2",
          id: "telefon-dokonlari-qoidasi-stars-nega",
          text: "Telefon do‘konlari qoidasi: Stars nega yagona yo‘l bo‘lib qoldi?",
        },
        {
          t: "p",
          text: "Telegram xabarida sabab aniq ko‘rsatilgan: Apple va Google ilova ichida sotiladigan raqamli tovar ularning ichki xaridlari (in-app purchase) orqali to‘lanishini talab qiladi. Xabar App Review Guidelines’ning 3.1.1 va 4.7 bandlariga hamda Google Play to‘lov siyosatiga ishora qiladi.",
        },
        {
          t: "p",
          text: "Stars aynan shu ichki xaridlar orqali sotiladi. Bot ichidagi raqamli xizmatga Stars bilan to‘lansa, to‘lov do‘kon talablari doirasida qoladi. Karta yoki tashqi havola orqali to‘lansa, bu talabdan chetga chiqadi.",
        },
        {
          t: "p",
          text: "Apple va Google qoidalarining asl matni bu maqolada tekshirilmagan. Sabab Telegram xabari asosida keltirildi.",
        },
        {
          t: "p",
          text: "O‘yinchi uchun bu qaror donatga qarshi qaratilmagan. Bu mobil ilovalar do‘konlari bilan bog‘liq to‘lov qoidasi. Stars, UC va olmos nega bir-birining o‘rnini bosmasligi haqida: <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">qaysi valyuta nimaga kerak</a>.",
        },
        {
          t: "h2",
          id: "durov-nima-qilmoqchi-grams-kripto",
          text: "Durov nima qilmoqchi: «(*Grams)», kripto va VPN istisnosi",
        },
        {
          t: "p",
          text: "Durovning niyati haqida faqat uning postidagi gaplarga tayanish mumkin. Undan ortiq biror rejani unga nisbat berish taxmin bo‘lib qoladi.",
        },
        {
          t: "list",
          items: [
            "<strong>Yulduzcha va Gram.</strong> Postda «(*Grams)» belgisi alohida izohlanmagan. Stars’ni Gram bilan olish yo‘li esa Fragment’da bor: u yerda Stars balansini o‘zingiz yoki do‘stlaringiz uchun to‘ldirish mumkin — <a href=\"https://fragment.com/stars/buy\" target=\"_blank\" rel=\"noopener\">Fragment’da Stars olish</a>.",
            "<strong>Kripto amallar.</strong> Telegram xabarida yozilishicha, bot yoki mini-ilova saqlash, almashtirish va swap’dan tashqari kripto amallarni bajarsa, faqat GRAM ishlatishi mumkin. Bu band UC yoki olmos xaridiga bevosita aloqador emas.",
            "<strong>VPN istisnosi.</strong> Durov postiga ko‘ra, avtoritar davlatlardagi VPN botlar istisno. Bu istisno rasmiy hujjatlarda topilmadi, bu faqat Durovning so‘zi.",
            "<strong>O‘yinchi uchun amaliy xulosa.</strong> Gram sotib olish shart emas: Stars’ni so‘mda ham olish mumkin. Gram nomi donatga qanday ta’sir qilishi haqida: <a href=\"/blog/toncoin-gram-nomi-oyinchi-donatiga-tasiri\">Toncoin endi Gram — donatga ta’siri</a>.",
          ],
        },
        {
          t: "h2",
          id: "bloklash-qanday-boladi-va-hali",
          text: "Bloklash qanday bo‘ladi va hali nimalar noma’lum?",
        },
        {
          t: "p",
          text: "Ma’lum bo‘lgan narsalar:",
        },
        {
          t: "list",
          items: [
            "Telegram xabariga ko‘ra, qoidani buzayotgan bot yoki mini-ilova ogohlantirishsiz bloklanishi mumkin. Tekshiruv shu hafta davom etyapti, boshqa xabarnoma bo‘lmaydi.",
            "Dasturchilar shartlariga ko‘ra, qoida buzilsa, Bot Platformasi yoki Telegram ilovalaridan vaqtincha yoki butunlay chetlatish mumkin.",
          ],
        },
        {
          t: "p",
          text: "Hali noma’lum narsalar:",
        },
        {
          t: "list",
          items: [
            "Bloklanadigan botlar ro‘yxati va tekshiruv qachon tugashi rasmiy sahifalarda yo‘q.",
            "To‘lov olmaydigan oddiy botlar haqida rasmiy sahifalarda alohida gap yo‘q. Xabar faqat pul olayotgan botlarni tilga oladi.",
            "Bloklangan botda oldin to‘langan obuna nima bo‘lishi rasmiy hujjatda tasvirlanmagan.",
          ],
        },
        {
          t: "p",
          text: "Amaliy maslahat: bot AI krediti yoki pullik funksiya uchun karta raqamiga o‘tkazma yoki tashqi to‘lov havolasini so‘rasa, katta summani oldindan to‘lamang. Avval bot egasidan to‘lov qanday bo‘lishini so‘rang.",
        },
        {
          t: "h2",
          id: "ai-bot-yoki-pullik-funksiyaga",
          text: "AI bot yoki pullik funksiyaga Stars bilan to‘lash: 5 qadam",
        },
        {
          t: "p",
          text: "Raqamli xizmat uchun bot ichidagi to‘lov endi Stars bilan bo‘ladi. Masalan, jamoa tarkibini tahlil qiladigan AI bot yoki klan guruhidagi pullik moderatsiya funksiyasi uchun shunday to‘lanadi:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "To‘lov oynasida narx Stars’da ko‘rsatilganini tekshiring. Bot username’i «bot» bilan tugashiga ham qarang: <a href=\"/blog/game-bilan-tugaydigan-donat-boti-tekshirish\">donat botini username bo‘yicha tekshirish</a>.",
            "Telegram’dagi Stars balansingizni oching va qancha yetmayotganini hisoblang.",
            `Yetmaganini oling. Gram’ingiz bo‘lsa, Fragment’da olsa bo‘ladi. So‘mda olish uchun @Gempayuz_bot’da faqat @username kiritiladi, bir buyurtmada 50 tadan 10 000 tagacha. 1 ta Stars karta o‘tkazmasi (UzCard/HUMO) yoki bot balansidan to‘lansa ${som(STARS_UNIT_CARD, "uz")}, Click yoki Uzum Bank orqali onlayn to‘lovda ${som(STARS_UNIT_ONLINE, "uz")}. Visa/Mastercard qabul qilinmaydi, VPN yoki kripto kerak emas. Batafsil: <a href="/blog/telegram-stars-sotib-olish-gempay">GemPay’da Stars sotib olish</a>.`,
            "Stars bir necha soniyada tushadi, shundan keyin bot ichidagi to‘lovni tasdiqlang. Stars jamoadoshingizga kerak bo‘lsa, uning @username’ini kiriting, parol so‘ralmaydi.",
            "Stars bilan to‘langan xizmat ishlamasa, avval bot egasiga yozing: hujjatga ko‘ra dasturchi raqamli xizmat uchun to‘langan Stars’ni Bot API orqali qaytara oladi. GemPay buyurtmasi bo‘yicha savol bo‘lsa, @StarsPaymeeSupport’ga buyurtma raqami bilan yozing.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Stars UC, olmos yoki CP’ga aylanmaydi. O‘yin valyutasi GemPay’da alohida, Player ID bo‘yicha olinadi va o‘yin akkauntiga tushadi. GemPay mustaqil xizmat, Telegram nomidan ish yuritmaydi. Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi.",
        },
        {
          t: "h2",
          id: "klaningiz-uchun-pullik-bot-yuritsangiz",
          text: "Klaningiz uchun pullik bot yuritsangiz: Stars’ga o‘tish rejasi",
        },
        {
          t: "p",
          text: "Ba’zi o‘yinchilar klani uchun pullik funksiyali bot yuritadi. Quyidagi reja rasmiy <a href=\"https://core.telegram.org/bots/payments-stars\" target=\"_blank\" rel=\"noopener\">Stars to‘lovlari hujjati</a> va <a href=\"https://core.telegram.org/api/stars\" target=\"_blank\" rel=\"noopener\">Stars API</a> asosida tuzilgan:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Raqamli xizmat uchun hisob-fakturaning currency maydoniga XTR yozing.",
            "Raqamli xizmatda provider_token ishlatmang. U faqat jismoniy tovar va xizmat sotishda kerak, jismoniy tovar uchun esa boshqa valyuta va provayder ishlatish mumkin.",
            "Pulni qaytarish kerak bo‘lsa, refundStarPayment metodidan foydalaning.",
            "Daromadni hisoblang. Dasturchilar shartlariga ko‘ra, har bir Star uchun 0,013 USD ekvivalentida mukofot olish mumkin. Bot balansidagi Stars esa Telegram’ga tegishli va o‘z-o‘zidan qiymatga ega emas.",
            "Mukofotni yeching. Maxsus metod noyob Fragment sahifasi havolasini qaytaradi. Balans belgilangan eng kam miqdordan kam bo‘lmasligi kerak, aniq raqam hujjatda berilmagan. Mukofot Fragment orqali beriladi, olingan tranzaksiyani bekor qilib bo‘lmaydi. Fragment bu imkoniyatni vaqtincha yoki butunlay olib qo‘yishi ham mumkin.",
          ],
        },
        {
          t: "p",
          text: "Botingiz shu paytgacha karta orqali pul olgan bo‘lsa, yangi to‘lov tartibini klanga oldindan e’lon qiling. Shunda klandoshlar Stars’ni vaqtida olib qo‘yadi.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Bot Payments API for Digital Goods and Services",
              href: "https://core.telegram.org/bots/payments-stars",
            },
            {
              label: "Telegram Bot Platform Developer Terms of Service",
              href: "https://telegram.org/tos/bot-developers",
            },
            {
              label: "Telegram Stars API",
              href: "https://core.telegram.org/api/stars",
            },
            {
              label: "Fragment Terms of Service",
              href: "https://fragment.com/terms",
            },
            {
              label: "Fragment — Buy Stars",
              href: "https://fragment.com/stars/buy",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Klan chatida «endi UC ham faqat Stars bilan olinadi» deyishyapti — rostmi?",
          a: "Telegram xabarida o‘yin valyutasi alohida tilga olinmagan, shuning uchun bu gap tasdiqlanmagan. GemPay’da UC Player ID bo‘yicha so‘mda olinadi, joriy to‘lov usullarini botning o‘zida tekshiring.",
        },
        {
          q: "Turnir yoki klan boti ishtirok uchun Stars so‘rasa, bunga ishonsa bo‘ladimi?",
          a: "Stars so‘ralishining o‘zi qoidaga zid emas, lekin bu turnir halol ekanini ko‘rsatmaydi. Username «bot» bilan tugashini va to‘lov Telegram oynasida o‘tishini tekshiring, faqat tashkilotchini avvaldan bilsangiz to‘lang.",
        },
        {
          q: "Jamoadoshimning AI boti uchun unga Stars yuborsam, uning parolini bilishim kerakmi?",
          a: "Yo‘q. Stars @username bo‘yicha yuboriladi, na parol, na kirish kodi kerak. Kim kod so‘rasa, suhbatni to‘xtating.",
        },
        {
          q: "Stars’ni olish uchun Fragment va Gram o‘yinchiga shartmi?",
          a: "Shart emas. Fragment — Gram’i borlar uchun bir yo‘l, so‘mda esa UzCard, HUMO, Click yoki Uzum Bank bilan @Gempayuz_bot orqali olsa bo‘ladi.",
        },
        {
          q: "Ishlatayotgan botim bloklanganini qanday bilaman?",
          a: "Telegram bloklangan botlar ro‘yxatini e’lon qilmagan. Bot javob bermay qolsa, yangi to‘lovni to‘xtatib turing va bot egasining rasmiy kanalidan holatni so‘rang.",
        },
        {
          q: "GemPay’da 1 ta Stars qancha turadi va qancha vaqtda tushadi?",
          a: `Karta o‘tkazmasi yoki balansdan ${som(STARS_UNIT_CARD, "uz")}, Click yoki Uzum Bank orqali onlayn to‘lovda ${som(STARS_UNIT_ONLINE, "uz")}. Bir buyurtmada 50 tadan 10 000 tagacha olsa bo‘ladi, yulduzlar bir necha soniyada tushadi.`,
        },
        {
          q: "Botdagi Stars’ni keyin UC yoki olmosga almashtirsa bo‘ladimi?",
          a: "Yo‘q, Stars o‘yin valyutasiga aylanmaydi. UC yoki olmos kerak bo‘lsa, ularni Player ID bo‘yicha alohida oling.",
        },
      ],
    },
    ru: {
      title: "«Теперь только Stars»: заблокируют ли ботов Telegram и что делать игроку?",
      metaTitle: "«Теперь только Stars»: заблокируют ли ботов Telegram",
      metaDescription: "Нет, не все боты: предупреждение касается ботов, которые берут оплату за цифровые услуги не в Stars. О ботах без платежей в сообщении ничего нет.",
      excerpt: "Нет, не все боты: предупреждение касается ботов, которые берут оплату за цифровые услуги не в Stars. О ботах без платежей в сообщении ничего нет.",
      answer: "Нет, не все боты: предупреждение касается ботов, которые берут оплату за цифровые услуги не в Stars. О ботах без платежей в сообщении ничего нет.",
      body: [
        {
          t: "p",
          text: "Нет, заблокируют не всех ботов. Предупреждение Telegram касается только тех ботов и мини-приложений, которые берут оплату за цифровые товары или услуги не в Telegram Stars, а другим способом.",
        },
        {
          t: "h2",
          id: "klan-chatidagi-hamma-botlar-bloklanadi",
          text: "Правда ли, что «всех ботов заблокируют», как пишут в чате клана?",
        },
        {
          t: "p",
          text: "Само правило уже давно есть в официальных документах. В <a href=\"https://core.telegram.org/bots/payments-stars\" target=\"_blank\" rel=\"noopener\">документации по платежам в Stars</a> сказано, что в ботах и мини-приложениях за цифровые товары и услуги можно платить только в Telegram Stars. В <a href=\"https://telegram.org/tos/bot-developers\" target=\"_blank\" rel=\"noopener\">условиях для разработчиков ботов</a> тоже написано, что такие платежи нельзя проводить через сторонних платёжных провайдеров, а сделка должна проходить только через обмен Stars.",
        },
        {
          t: "p",
          text: "Новое здесь другое. В ноябре 2026 года Telegram разослал разработчикам сообщение о том, что платежи проверяются. А 17 ноября Павел Дуров написал об этом в своём канале. Фраза «ботов заблокируют», которая дошла до чата клана, родилась из этих двух текстов.",
        },
        {
          t: "p",
          text: "О ботах, которые не берут денег, в сообщении ничего нет: бот клановой статистики, турнирной таблицы, напоминаний или музыки. Бросать их уже сейчас или искать замену не нужно.",
        },
        {
          t: "p",
          text: "Опирайтесь на первоисточник, а не на пересказ в чате. Ниже — суть обоих текстов.",
        },
        {
          t: "h2",
          id: "ogohlantirish-kimdan-keldi-va-unda",
          text: "Откуда пришло предупреждение и что в нём сказано?",
        },
        {
          t: "h3",
          text: "Сообщение команды Telegram разработчикам",
        },
        {
          t: "p",
          text: "В сообщении Telegram объясняется, что Stars продаются через встроенные покупки Apple и Google. Поэтому в ботах и мини-приложениях цифровые товары продаются только за Stars: «digital goods can only be sold for Telegram Stars».",
        },
        {
          t: "p",
          text: "В конце — предупреждение. Бот или мини-приложение, которое берёт за цифровой товар оплату не в Stars, «may be blocked at any time, without warning», то есть может быть заблокировано в любой момент и без предупреждения. Telegram пишет, что на этой неделе продолжает анализировать платежи во всех ботах и мини-приложениях, и добавляет: «There will be no further notice» — других уведомлений не будет.",
        },
        {
          t: "h3",
          text: "Пост Дурова от 17 ноября",
        },
        {
          t: "p",
          text: "Дуров написал в своём канале: «Telegram bots and mini apps can accept only Stars (*Grams) for digital services». Смысл такой: боты и мини-приложения могут принимать за цифровые услуги только Stars. VPN-боты в авторитарных странах он назвал исключением.",
        },
        {
          t: "note",
          tone: "info",
          text: "На официальных страницах эти два текста как отдельные объявления не найдены. Они приводятся как сообщение, отправленное от имени Telegram, и как пост Дурова. Само правило «цифровые услуги — только за Stars» записано в <a href=\"https://core.telegram.org/bots/payments-stars\" target=\"_blank\" rel=\"noopener\">документации по платежам в Stars</a> и в <a href=\"https://telegram.org/tos/bot-developers\" target=\"_blank\" rel=\"noopener\">условиях для разработчиков</a>.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "oyinchi-ishlatadigan-qaysi-botlarga-bu",
          text: "Каких ботов, которыми пользуется игрок, это касается?",
        },
        {
          t: "p",
          text: "По сообщению Telegram, цифровой товар или услуга — это всё, что бот или мини-приложение доставляет в цифровом виде и за что берёт деньги. В условиях для разработчиков сказано, что Telegram определяет цифровые товары по определениям Apple и Google.",
        },
        {
          t: "table",
          head: [
            "За что бот берёт деньги",
            "В сообщении Telegram или на официальной странице",
            "Что это значит для игрока",
          ],
          rows: [
            [
              "Подписка на самого бота (например, платный тариф бота клановой статистики)",
              "Есть в списке из сообщения",
              "Подписка оплачивается в Stars",
            ],
            [
              "Платный инструмент в интеграции с Telegram (модерация группы, автопостинг)",
              "Есть в списке из сообщения",
              "Оплата в Stars",
            ],
            [
              "Доступ к сторонним AI-моделям (AI-бот, у которого спрашивают билд или стратегию)",
              "Есть в списке из сообщения",
              "Оплата в Stars",
            ],
            [
              "Кредиты и токены этих сервисов",
              "Есть в списке из сообщения",
              "Пакет кредитов тоже за Stars",
            ],
            [
              "Физический товар (бот магазина игровых мышек)",
              "По документации можно использовать другие валюты и провайдеров, сам Telegram такие платежи не проводит",
              "Правило не касается",
            ],
            [
              "Бот, который не берёт оплату",
              "В сообщении не упоминается",
              "Ничего не меняется",
            ],
            [
              "Донат игровой валюты",
              "Отдельно в сообщении не упоминается",
              "В этой статье не домысливаем",
            ],
          ],
        },
        {
          t: "p",
          text: "Список цифровых услуг взят из сообщения Telegram, на официальных страницах в таком виде он не найден. Поэтому окончательно ответить, попадает ли в него конкретный бот, может только Telegram.",
        },
        {
          t: "h2",
          id: "telefon-dokonlari-qoidasi-stars-nega",
          text: "Правило магазинов приложений: почему Stars стали единственным способом?",
        },
        {
          t: "p",
          text: "В сообщении Telegram причина названа прямо: Apple и Google требуют, чтобы цифровые товары, которые продаются внутри приложения, оплачивались через их встроенные покупки (in-app purchase). Сообщение ссылается на пункты 3.1.1 и 4.7 App Review Guidelines и на платёжную политику Google Play.",
        },
        {
          t: "p",
          text: "Stars продаются как раз через эти встроенные покупки. Если цифровая услуга в боте оплачивается в Stars, платёж остаётся в рамках требований магазинов. Если картой или по внешней ссылке — выходит за эти рамки.",
        },
        {
          t: "p",
          text: "Оригинальный текст правил Apple и Google в этой статье не проверялся. Причина приведена по сообщению Telegram.",
        },
        {
          t: "p",
          text: "Для игрока это решение не направлено против доната. Это платёжное правило, связанное с магазинами мобильных приложений. Почему Stars, UC и алмазы не заменяют друг друга: <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">какая валюта для чего нужна</a>.",
        },
        {
          t: "h2",
          id: "durov-nima-qilmoqchi-grams-kripto",
          text: "Чего хочет Дуров: «(*Grams)», крипта и исключение для VPN",
        },
        {
          t: "p",
          text: "О намерениях Дурова можно судить только по тому, что написано в его посте. Приписывать ему какие-то планы сверх этого — уже догадки.",
        },
        {
          t: "list",
          items: [
            "<strong>Звёздочка и Gram.</strong> Пометка «(*Grams)» в посте отдельно не поясняется. Способ купить Stars за Gram есть на Fragment: там можно пополнить баланс Stars себе или друзьям — <a href=\"https://fragment.com/stars/buy\" target=\"_blank\" rel=\"noopener\">покупка Stars на Fragment</a>.",
            "<strong>Криптооперации.</strong> В сообщении Telegram сказано, что если бот или мини-приложение выполняет криптооперации помимо хранения, обмена и свопа, оно может использовать только GRAM. К покупке UC или алмазов этот пункт напрямую не относится.",
            "<strong>Исключение для VPN.</strong> По посту Дурова, VPN-боты в авторитарных странах — исключение. В официальных документах этого исключения нет, это только слова Дурова.",
            "<strong>Практический вывод для игрока.</strong> Покупать Gram не обязательно: Stars можно купить и за сумы. Как новое название Gram влияет на донат: <a href=\"/blog/toncoin-gram-nomi-oyinchi-donatiga-tasiri\">Toncoin теперь Gram — что с донатом</a>.",
          ],
        },
        {
          t: "h2",
          id: "bloklash-qanday-boladi-va-hali",
          text: "Как будут блокировать и что пока неизвестно?",
        },
        {
          t: "p",
          text: "Что известно:",
        },
        {
          t: "list",
          items: [
            "По сообщению Telegram, бот или мини-приложение, нарушающее правило, может быть заблокировано без предупреждения. Проверка идёт на этой неделе, других уведомлений не будет.",
            "По условиям для разработчиков, за нарушение правил можно получить временный или постоянный бан на Bot Platform или в приложениях Telegram.",
          ],
        },
        {
          t: "p",
          text: "Что пока неизвестно:",
        },
        {
          t: "list",
          items: [
            "Списка ботов под блокировку и сроков окончания проверки на официальных страницах нет.",
            "Про обычных ботов, которые не берут оплату, на официальных страницах отдельно ничего не сказано. Сообщение упоминает только ботов, которые берут деньги.",
            "Что будет с ранее оплаченной подпиской в заблокированном боте, в официальной документации не описано.",
          ],
        },
        {
          t: "p",
          text: "Практический совет: если бот просит за AI-кредиты или платную функцию перевод на номер карты или оплату по внешней ссылке, не платите крупную сумму вперёд. Сначала спросите у владельца бота, как будет проходить оплата.",
        },
        {
          t: "h2",
          id: "ai-bot-yoki-pullik-funksiyaga",
          text: "Как оплатить AI-бота или платную функцию в Stars: 5 шагов",
        },
        {
          t: "p",
          text: "Цифровые услуги внутри бота теперь оплачиваются в Stars. Например, так платят за AI-бота, который разбирает состав команды, или за платную модерацию в группе клана:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Проверьте, что в окне оплаты цена указана в Stars. Посмотрите и на username бота — он должен заканчиваться на «bot»: <a href=\"/blog/game-bilan-tugaydigan-donat-boti-tekshirish\">как проверить донат-бота по username</a>.",
            "Откройте свой баланс Stars в Telegram и посчитайте, сколько не хватает.",
            `Докупите недостающее. Если у вас есть Gram, можно купить на Fragment. Чтобы купить за сумы, в @Gempayuz_bot вводится только @username, за один заказ — от 50 до 10 000 штук. 1 Stars при оплате переводом с карты (UzCard/HUMO) или с баланса бота стоит ${som(STARS_UNIT_CARD, "ru")}, при онлайн-оплате через Click или Uzum Bank — ${som(STARS_UNIT_ONLINE, "ru")}. Visa/Mastercard не принимаются, VPN и крипта не нужны. Подробнее: <a href="/blog/telegram-stars-sotib-olish-gempay">покупка Stars в GemPay</a>.`,
            "Stars приходят за несколько секунд, после этого подтвердите оплату в боте. Если Stars нужны тиммейту, введите его @username — пароль не нужен.",
            "Если услуга, оплаченная в Stars, не работает, сначала напишите владельцу бота: по документации разработчик может вернуть Stars за цифровую услугу через Bot API. Если вопрос по заказу в GemPay, напишите в @StarsPaymeeSupport с номером заказа.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Stars не превращаются в UC, алмазы или CP. Игровая валюта покупается в GemPay отдельно, по Player ID, и зачисляется на игровой аккаунт. GemPay — независимый сервис и не действует от имени Telegram. Если заказ не выполнен, деньги полностью возвращаются в течение 3 рабочих дней.",
        },
        {
          t: "h2",
          id: "klaningiz-uchun-pullik-bot-yuritsangiz",
          text: "Если вы ведёте платного бота для клана: план перехода на Stars",
        },
        {
          t: "p",
          text: "Некоторые игроки ведут для своего клана ботов с платными функциями. План ниже составлен по официальной <a href=\"https://core.telegram.org/bots/payments-stars\" target=\"_blank\" rel=\"noopener\">документации по платежам в Stars</a> и <a href=\"https://core.telegram.org/api/stars\" target=\"_blank\" rel=\"noopener\">Stars API</a>:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Для цифровой услуги укажите в поле currency счёта значение XTR.",
            "Не используйте provider_token для цифровых услуг. Он нужен только при продаже физических товаров и услуг, а для физических товаров можно использовать другие валюты и провайдеров.",
            "Если нужно вернуть деньги, используйте метод refundStarPayment.",
            "Посчитайте доход. По условиям для разработчиков, за каждую Star можно получить вознаграждение, эквивалентное 0,013 USD. При этом Stars на балансе бота принадлежат Telegram и сами по себе ценности не имеют.",
            "Выведите вознаграждение. Специальный метод возвращает уникальную ссылку на страницу Fragment. Баланс должен быть не меньше установленного минимума, точная цифра в документации не указана. Вознаграждение выдаётся через Fragment, полученную транзакцию отменить нельзя. Fragment также может временно или навсегда отключить эту возможность.",
          ],
        },
        {
          t: "p",
          text: "Если ваш бот до сих пор принимал оплату картой, заранее объявите клану о новом порядке оплаты. Так соклановцы успеют вовремя запастись Stars.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Bot Payments API for Digital Goods and Services",
              href: "https://core.telegram.org/bots/payments-stars",
            },
            {
              label: "Telegram Bot Platform Developer Terms of Service",
              href: "https://telegram.org/tos/bot-developers",
            },
            {
              label: "Telegram Stars API",
              href: "https://core.telegram.org/api/stars",
            },
            {
              label: "Fragment Terms of Service",
              href: "https://fragment.com/terms",
            },
            {
              label: "Fragment — Buy Stars",
              href: "https://fragment.com/stars/buy",
            },
          ],
        },
      ],
      faq: [
        {
          q: "В чате клана пишут, что «теперь и UC покупают только за Stars» — это правда?",
          a: "Игровая валюта в сообщении Telegram отдельно не упоминается, так что это утверждение не подтверждено. В GemPay UC покупаются за сумы по Player ID, актуальные способы оплаты смотрите в самом боте.",
        },
        {
          q: "Турнирный или клановый бот просит Stars за участие — можно ли ему верить?",
          a: "Просить Stars правило не запрещает, но это ещё не доказывает, что турнир честный. Убедитесь, что username заканчивается на «bot», а оплата проходит в окне Telegram, и платите, только если организатор вам знаком.",
        },
        {
          q: "Если я отправляю тиммейту Stars для его AI-бота, нужен ли мне его пароль?",
          a: "Нет. Stars отправляются по @username, ни пароль, ни код входа не нужны. Если кто-то просит код, прекращайте разговор.",
        },
        {
          q: "Обязательно ли игроку пользоваться Fragment и Gram, чтобы купить Stars?",
          a: "Нет. Fragment — один из вариантов для тех, у кого есть Gram, а за сумы Stars можно купить через @Gempayuz_bot с UzCard, HUMO, Click или Uzum Bank.",
        },
        {
          q: "Как узнать, что бот, которым я пользуюсь, заблокирован?",
          a: "Список заблокированных ботов Telegram не публиковал. Если бот перестал отвечать, приостановите новые платежи и уточните ситуацию в официальном канале владельца бота.",
        },
        {
          q: "Сколько стоит 1 Stars в GemPay и как быстро он приходит?",
          a: `При переводе с карты или с баланса — ${som(STARS_UNIT_CARD, "ru")}, при онлайн-оплате через Click или Uzum Bank — ${som(STARS_UNIT_ONLINE, "ru")}. За один заказ можно купить от 50 до 10 000 звёзд, они приходят за несколько секунд.`,
        },
        {
          q: "Можно ли потом обменять Stars из бота на UC или алмазы?",
          a: "Нет, Stars не превращаются в игровую валюту. Если нужны UC или алмазы, покупайте их отдельно по Player ID.",
        },
      ],
    },
  },
};

export default article;
