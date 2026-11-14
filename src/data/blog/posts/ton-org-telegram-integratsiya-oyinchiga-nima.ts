// Avtoblogyoz yasagan maqola (2026-11-14). Niyat: O'zbekistondagi o'yinchi ton.org yangilangani va «Telegram'ga integratsiya qilingan» ro'yxati haqidagi xabarni ko'rib, «ton.org o'yinchiga nima beradi» deb qidiradi: ro'yxatdagi giftlar, Stars va Mini App o'yinlar UC, Stars va Premium olishiga ta'sir qiladimi, TON kerakmi.
// Faktlar tekshirilgan manbalar:
//   https://ton.org/
//   https://telegram.org/blog/wear-gifts-blockchain-and-more
//   https://core.telegram.org/api/gifts

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "ton-org-telegram-integratsiya-oyinchiga-nima",
  game: null,
  type: "info",
  datePublished: "2026-11-14",
  dateModified: "2026-11-14",
  keywords: ["ton.org o'yinchiga nima beradi","ton.org telegram integratsiya","TON o'yinchiga kerakmi","stars uchun ton kerakmi","premium ton hamyonsiz","gram toncoin farqi","telegram mini app o'yinlar ton","ton.org интегрировано в telegram","нужен ли TON для Telegram Stars","купить Stars без криптокошелька","TON для геймеров","ton.org обновили сайт"],
  locales: {
    uz: {
      title: "ton.org o‘yinchiga nima beradi: UC, Stars va Premium uchun TON kerakmi?",
      metaTitle: "ton.org o‘yinchiga nima beradi",
      metaDescription: "ton.org’dagi ro‘yxat donatni o‘zgartirmaydi: UC va olmos Player ID, Stars va Premium @username bo‘yicha so‘mda olinadi. TON va hamyon shart emas.",
      excerpt: "ton.org’dagi ro‘yxat donatni o‘zgartirmaydi: UC va olmos Player ID, Stars va Premium @username bo‘yicha so‘mda olinadi. TON va hamyon shart emas.",
      answer: "ton.org’dagi ro‘yxat donatni o‘zgartirmaydi: UC va olmos Player ID, Stars va Premium @username bo‘yicha so‘mda olinadi. TON va hamyon shart emas.",
      body: [
        {
          t: "h2",
          id: "ton-org-haqidagi-xabar-oyinchining",
          text: "ton.org haqidagi xabar: o‘yinchining donatida biror narsa o‘zgaradimi?",
        },
        {
          t: "p",
          text: "Yo‘q, o‘zgarmaydi. UC, olmos va CP Player ID bo‘yicha, Telegram Stars va Premium esa @username bo‘yicha so‘mda olinadi. Buning uchun TON tangasi ham, kripto hamyon ham kerak emas.",
        },
        {
          t: "p",
          text: "<a href=\"https://ton.org/\" target=\"_blank\" rel=\"noopener\">ton.org</a> TON’ni Telegram ichiga qurilgan ekotizim deb ta’riflaydi. U to‘lovlar, raqamli aktivlar va mini-ilovalarni bir-biriga bog‘laydi. O‘yinchi uchun bu Telegram ichidagi yana bir to‘lov yo‘lini anglatadi. Bu yo‘l majburiy emas: undan foydalanmasangiz ham Stars, Premium yoki o‘yin valyutasini olaverasiz.",
        },
        {
          t: "p",
          text: "Saytdagi «1B+» raqami ko‘pchilikni chalg‘itadi. ton.org’ning o‘z matniga ko‘ra, bu Telegram’ning faol foydalanuvchilari soni, TON’dan foydalanuvchilar soni emas. TON uchun o‘sha sahifada boshqa ko‘rsatkich bor: oylik faol hamyonlar soni 3,3 mln. Ikki raqam boshqa-boshqa narsani o‘lchaydi, shuning uchun «hamma Telegram foydalanuvchisi TON’da» degan xulosa noto‘g‘ri.",
        },
        {
          t: "p",
          text: "ton.org qachon yangilangani rasmiy manbada ko‘rsatilmagan, shuning uchun bu yerda sana yozilmadi.",
        },
        {
          t: "h2",
          id: "telegramga-integratsiya-qilingan-royxatidagi-qaysi",
          text: "«Telegram’ga integratsiya qilingan» ro‘yxatidagi qaysi narsa o‘yinchiga tegadi?",
        },
        {
          t: "p",
          text: "ton.org’da TON Telegram’ning qaysi joylarida ishlatilishi sanab o‘tilgan. Quyidagi jadvalda shu ro‘yxat o‘yinchi nuqtai nazaridan saralangan:",
        },
        {
          t: "table",
          head: [
            "Ro‘yxatdagi mahsulot",
            "O‘yinchiga nima beradi",
            "TON yoki hamyon shartmi",
          ],
          rows: [
            [
              "Messenjerga o‘rnatilgan Telegram jamoasining hamyoni",
              "Kripto saqlash va o‘tkazish",
              "Donat uchun shart emas",
            ],
            [
              "Botlar va mini-ilovalar",
              "Telegram ichidagi o‘yinlar va do‘konlar",
              "Ilovaning o‘ziga bog‘liq",
            ],
            [
              "Telegram Stars",
              "Botlar, kontent va xizmatlarga to‘lov",
              "Gram bilan ham, so‘mda ham olinadi",
            ],
            [
              "Telegram Premium",
              "Chat va kanallar uchun qo‘shimcha imkoniyatlar",
              "Kripto hamyon bilan ham, so‘mda ham olinadi",
            ],
            [
              "Stars va Premium giveaway’lari",
              "Klan kanalida konkurs o‘tkazish",
              "Gram bilan oldindan to‘lasa bo‘ladi",
            ],
            [
              "Sovg‘alar (gift)",
              "Profil bezagi, jamoadoshga sovg‘a",
              "Faqat NFT’ga aylantirishda kerak bo‘ladi",
            ],
            [
              "Kolleksion username va raqamlar",
              "Klan kanali uchun chiroyli nom",
              "Shart emas, oddiy @username yetadi",
            ],
            [
              "Reklama daromadi",
              "Faqat kanal egasiga tegishli",
              "Daromad Gram’da to‘lanishi mumkin",
            ],
            [
              "TON saytlarini ochadigan brauzer",
              "O‘yinchiga to‘g‘ridan-to‘g‘ri foydasi yo‘q",
              "—",
            ],
          ],
        },
        {
          t: "p",
          text: "Ro‘yxatda o‘yinda kuch beradigan yoki UC’ni arzonlashtiradigan narsa yo‘q. Ko‘p bandlar kanal egalari va kripto bilan allaqachon ishlayotganlar uchun.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "uc-olmos-va-cp-olishda",
          text: "UC, olmos va CP olishda TON’ning roli bormi?",
        },
        {
          t: "p",
          text: "ton.org Gram bilan to‘lanadigan narsalar qatorida Stars, Premium va giveaway’larni sanaydi. PUBG Mobile UC, Mobile Legends olmosi yoki Call of Duty Mobile CP’ni Gram bilan olish haqida u yerda gap yo‘q.",
        },
        {
          t: "note",
          tone: "warn",
          text: "Klan chatida kimdir «UC’ni Gram bilan arzonroq beraman» desa, bu taklif ton.org’ga tayanmaydi. Notanish manzilga oldindan pul yuborish nega xavfli ekani <a href=\"/blog/ton-manzilga-donat-tolovi-oyinchi-xavfi\">TON manzilga donat to‘lovi</a> maqolasida yozilgan.",
        },
        {
          t: "p",
          text: "GemPay’da o‘yin valyutasini olish uchun faqat Player ID kerak, parol hech qachon so‘ralmaydi. Bot avval nikni tekshirib ko‘rsatadi, siz tasdiqlaganingizdan keyin to‘lov qilinadi. Valyuta 1–5 daqiqada avtomatik tushadi.",
        },
        {
          t: "p",
          text: "Stars o‘yin valyutasiga aylanmaydi. Stars’ni Gram bilan olasizmi yoki so‘mdami, baribir ular bilan UC olib bo‘lmaydi. Qaysi valyuta nimaga ketishi <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">Stars, UC va olmos farqi</a> maqolasida jadval bilan berilgan.",
        },
        {
          t: "h2",
          id: "stars-va-premium-gram-bilan",
          text: "Stars va Premium: Gram bilan olish va so‘mda olishning farqi nimada?",
        },
        {
          t: "p",
          text: "Ikkala yo‘l ham bor. Ularning farqi oldindan nima tayyorlash kerakligida va narx qayerda ko‘rsatilishida.",
        },
        {
          t: "table",
          head: [
            "Mezon",
            "Gram orqali (Telegram ichida)",
            "So‘mda (GemPay)",
          ],
          rows: [
            [
              "Nima kerak",
              "Hamyon va unda Gram",
              "@username va UzCard, HUMO, Click, Uzum Bank yoki bot balansi",
            ],
            [
              "1 ta Stars narxi",
              "Telegram oynasida ko‘rsatiladi",
              `${som(STARS_UNIT_CARD, "uz")} (karta yoki balans), ${som(STARS_UNIT_ONLINE, "uz")} (Click yoki Uzum Bank)`,
            ],
            [
              "Stars miqdori",
              "Telegram oynasida tekshiring",
              "Bir buyurtmada 50 dan 10 000 tagacha",
            ],
            [
              "Premium",
              "Kripto hamyon orqali o‘zingizga yoki do‘stga",
              `3 oy ${som(premium(3), "uz")}, 6 oy ${som(premium(6), "uz")}, 12 oy ${som(premium(12), "uz")}`,
            ],
            [
              "Tushish tezligi",
              "Bu maqolada tasdiqlanmagan",
              "Stars ham, Premium ham bir necha soniyada",
            ],
          ],
        },
        {
          t: "p",
          text: "GemPay’da Premium narxi hamma to‘lov usulida bir xil, 1 oylik tarif yo‘q. Premium Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi va akkauntingizga hech kim kirmaydi.",
        },
        {
          t: "p",
          text: "Gram yo‘li hamyonida allaqachon Gram bor odamga qulay. Boshqalar uchun avval kripto olib, keyin uni Stars’ga almashtirish ortiqcha bosqich bo‘ladi. GemPay Visa/Mastercard’ni qabul qilmaydi, lekin xorijiy karta, VPN yoki kripto ham kerak emas, mahalliy karta yetadi. Hamyon kerakmi, degan umumiy savolga <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">Telegram Wallet o‘yinchiga kerakmi</a> maqolasida javob berilgan.",
        },
        {
          t: "h2",
          id: "mini-app-oyinda-hamyon-ulashni",
          text: "Mini App o‘yinda hamyon ulashni so‘rashsa, nimaga e’tibor berish kerak?",
        },
        {
          t: "p",
          text: "ton.org’ga ko‘ra, dasturchilar Telegram’ga o‘rnatilgan botlar va mini-ilovalar yarata oladi. Stars esa Telegram ichidagi raqamli tovar va xizmatlarga sarflanadi. Mini App o‘yini hamyon ulashni so‘rasa, quyidagilarni tekshiring:",
        },
        {
          t: "list",
          items: [
            "<strong>Hamyon ulash bilan maxfiy so‘zlarni berish bir narsa emas.</strong> O‘yin, bot yoki «admin» hamyonni tiklash so‘zlarini yoki maxfiy kalitni so‘rasa, ilovadan darhol chiqing.",
            "<strong>«Bonus olish uchun avval Gram yubor» degan shart xavf belgisi.</strong> Sovrin uchun oldindan pul so‘raydigan taklifga ishonmang.",
            "<strong>Bot kimniki ekanini tekshiring.</strong> Bot nomi, havolasi va kanali bir-biriga mos kelishi kerak. Klan chatiga forward qilingan havola orqali kirmang.",
            "<strong>Telegram kirish kodini hech kimga aytmang.</strong> Kodni «tasdiqlash uchun» so‘rashsa, bu akkauntni egallab olishga urinish.",
            "<strong>Ikki bosqichli tekshiruv parolini yoqing.</strong> Shunda kod boshqa odam qo‘liga tushsa ham, akkauntga kirish uchun uning o‘zi yetmaydi.",
          ],
        },
        {
          t: "p",
          text: "To‘lov oynasida Stars varianti bo‘lsa, hamyonga tegmasdan Stars’ni so‘mda olib, o‘sha yerda sarflashingiz mumkin.",
        },
        {
          t: "h2",
          id: "klan-sovgasi-uchun-royxatdagi-giftlarning",
          text: "Klan sovg‘asi uchun ro‘yxatdagi giftlarning ahamiyati bormi?",
        },
        {
          t: "p",
          text: "ton.org Telegram sovg‘alarini TON asosidagi NFT’ga aylantirish mumkinligini yozadi. <a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">Telegram API hujjati</a> ham kolleksion sovg‘ani TON blokcheynida NFT’ga aylantirish haqida gapiradi.",
        },
        {
          t: "p",
          text: "<a href=\"https://telegram.org/blog/wear-gifts-blockchain-and-more\" target=\"_blank\" rel=\"noopener\">Telegram blogidagi e’longa</a> ko‘ra, sovg‘ani kolleksion username va raqamlar kabi TON blokcheyni orqali o‘tkazish yoki auksionga qo‘yish mumkin. Blokcheyndagi sovg‘a Telegram akkauntiga kirish yo‘qolsa yoki u o‘chirilsa ham egasining nazoratida qoladi. Har bir kolleksion sovg‘aning t.me/nft ko‘rinishidagi alohida havolasi bor.",
        },
        {
          t: "p",
          text: "API hujjatida blokcheynga chiqarishning ikki sharti qayd etilgan. Birinchisi — foydalanuvchining ikki bosqichli tekshiruv (2FA) paroli. Ikkinchisi — ba’zi sovg‘alarni faqat belgilangan sanadan keyin chiqarish mumkin.",
        },
        {
          t: "p",
          text: "Jamoadoshga sovg‘a qilish uchun uni blokcheynga chiqarish shart emas. NFT o‘yinda kuch ham, skin ham bermaydi, faqat profilni bezaydi. Shu pulga UC yoki Premium olish foydaliroq emasmi, degan savol <a href=\"/blog/plush-pepe-narxi-oyinchi-stars-sarflash\">Plush Pepe va UC taqqoslovi</a> maqolasida ko‘rib chiqilgan.",
        },
        {
          t: "h2",
          id: "jamoadoshga-stars-yoki-premiumni-tonsiz",
          text: "Jamoadoshga Stars yoki Premium’ni TON’siz qanday olib berasiz?",
        },
        {
          t: "p",
          text: "Jamoadoshingizda hamyon bo‘lmasa ham, u Stars yoki Premium’ni oddiy sovg‘a sifatida oladi. Tartibi:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "<a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>’ni Mini App yoki chat ko‘rinishida oching.",
            "Kerakli bo‘limni tanlang. Stars uchun 50 dan 10 000 tagacha miqdor yozing, Premium uchun 3, 6 yoki 12 oyni belgilang.",
            "Jamoadoshning @username’ini kiriting va chiqqan profilni u bilan solishtiring. Bitta harf xato bo‘lsa, sovg‘a boshqa akkauntga ketishi mumkin.",
            "UzCard, HUMO, Click, Uzum Bank yoki bot balansi bilan to‘lang. Rossiyadan to‘lasangiz, SBP ishlaydi.",
            "Jamoadoshingizdan tekshirib ko‘rishni so‘rang: Stars ham, Premium ham bir necha soniyada keladi. Kelmasa, buyurtma raqami bilan <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>’ga yozing.",
          ],
        },
        {
          t: "p",
          text: "Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi. Hisobga tushgan narsa esa qaytarilmaydi, shuning uchun 3-qadamni shoshmasdan bajaring. Batafsil qo‘llanma: <a href=\"/blog/telegram-stars-sotib-olish-gempay\">Telegram Stars sotib olish</a>.",
        },
        {
          t: "h2",
          id: "klan-chatidagi-ton-gaplarini-qanday",
          text: "Klan chatidagi TON gaplarini qanday tekshirasiz?",
        },
        {
          t: "p",
          text: "ton.org tarqalgach, chatlarda turli «yangilik»lar paydo bo‘ladi. Ularning ko‘pini rasmiy sahifaning o‘zida bir daqiqada tekshirsa bo‘ladi:",
        },
        {
          t: "list",
          items: [
            "<strong>«Yangi Gram tangasi chiqdi, tezroq oling».</strong> ton.org’ga ko‘ra, Gram — TON blokcheynining asosiy tangasi va u Toncoin nomi bilan ham tanilgan. Ikki nomni ikki xil tanga qilib ko‘rsatadigan taklif shu chalkashlikdan foydalanadi.",
            "<strong>«Milliard odam TON’da, sen ham hamyon och».</strong> Yuqorida aytilganidek, 1B+ Telegram foydalanuvchilariga tegishli raqam.",
            "<strong>«Endi UC ham TON orqali».</strong> ton.org ro‘yxatida o‘yin valyutasi yo‘q.",
            "<strong>Kanal yoki chat posti.</strong> Post yangilikdan xabar beradi, lekin uning o‘zi dalil emas. Har bir da’voni ton.org va telegram.org’da tekshiring.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Hamyon nomi o‘zgaradi degan mish-mishlar va ularning donatga ta’siri <a href=\"/blog/wallet-walt-oyinchi-stars-donat\">Wallet va Walt</a> maqolasida ko‘rib chiqilgan.",
        },
        {
          t: "sources",
          items: [
            {
              label: "TON — The Leading L1 Blockchain",
              href: "https://ton.org/",
            },
            {
              label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More",
              href: "https://telegram.org/blog/wear-gifts-blockchain-and-more",
            },
            {
              label: "Telegram Gifts",
              href: "https://core.telegram.org/api/gifts",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Jamoadoshim «Telegram’da hamma TON ishlatadi, hamyon och» deyapti. Bu rostmi?",
          a: "Rost emas. ton.org’dagi 1B+ raqami Telegram’ning faol foydalanuvchilariga tegishli, TON hamyonlari bilan bog‘liq emas. Stars, Premium va o‘yin valyutasini hamyonsiz olsa bo‘ladi.",
        },
        {
          q: "Stars’ni Gram bilan olsam, keyin ularni UC’ga almashtirsa bo‘ladimi?",
          a: "Yo‘q. Stars qaysi yo‘l bilan olinganidan qat’i nazar o‘yin valyutasiga aylanmaydi. UC’ni alohida, Player ID orqali olasiz.",
        },
        {
          q: "Jamoadoshimda TON hamyon bo‘lmasa, unga Premium sovg‘a qilsam boradimi?",
          a: "Ha, boradi. GemPay’da Premium oluvchining @username’i bo‘yicha Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi, buning uchun hamyon talab qilinmaydi.",
        },
        {
          q: "Mini App o‘yini Gram bilan to‘lashni so‘rayapti. Stars bilan to‘lasam bo‘lmaydimi?",
          a: "Bu o‘yinning o‘ziga bog‘liq, shuning uchun to‘lov oynasida Stars varianti bor-yo‘qligini ko‘ring. Agar bo‘lsa, Stars’ni so‘mda olib, hamyonsiz to‘lashingiz mumkin.",
        },
        {
          q: "Klan kanali uchun kolleksion username sotib olish shartmi?",
          a: "Shart emas. Kolleksion nom qo‘shimcha imkoniyat, xolos. Kanal oddiy @username bilan ham ishlayveradi.",
        },
        {
          q: "Chatda «Gram arzon, Toncoin qimmat» deyishdi. Ularning farqi bormi?",
          a: "ton.org’ga ko‘ra, bu bitta tanganing ikki nomi: Gram oldin Toncoin deb ham atalgan. Ikki nom o‘rtasidagi «narx farqi»dan foyda va’da qilinsa, ehtiyot bo‘ling.",
        },
        {
          q: "PUBG yoki MLBB donati endi TON orqali bo‘ladimi?",
          a: "ton.org’dagi ro‘yxatda o‘yin valyutasi umuman tilga olinmagan. GemPay’da UC va olmos hozir ham Player ID bo‘yicha so‘mda olinadi va 1–5 daqiqada tushadi.",
        },
      ],
    },
    ru: {
      title: "ton.org и геймер: нужен ли TON для покупки UC, Stars и Premium?",
      metaTitle: "ton.org и геймер: нужен ли TON для покупки UC, Stars",
      metaDescription: "Список на ton.org донат не меняет: UC и алмазы покупают по Player ID, а Stars и Premium — по @username, в сумах. TON и кошелёк для этого не нужны.",
      excerpt: "Список на ton.org донат не меняет: UC и алмазы покупают по Player ID, а Stars и Premium — по @username, в сумах. TON и кошелёк для этого не нужны.",
      answer: "Список на ton.org донат не меняет: UC и алмазы покупают по Player ID, а Stars и Premium — по @username, в сумах. TON и кошелёк для этого не нужны.",
      body: [
        {
          t: "h2",
          id: "ton-org-haqidagi-xabar-oyinchining",
          text: "Новость о ton.org: меняется ли что-то в донате геймера?",
        },
        {
          t: "p",
          text: "Нет, ничего не меняется. UC, алмазы и CP покупают по Player ID, а Telegram Stars и Premium — по @username, в сумах. Монета TON и криптокошелёк для этого не нужны.",
        },
        {
          t: "p",
          text: "<a href=\"https://ton.org/\" target=\"_blank\" rel=\"noopener\">ton.org</a> описывает TON как экосистему, встроенную в Telegram. Она объединяет платежи, цифровые активы и мини-приложения. Для геймера это просто ещё один способ оплаты внутри Telegram. Пользоваться им не обязательно: Stars, Premium и игровую валюту можно купить и без него.",
        },
        {
          t: "p",
          text: "Многих путает цифра «1B+» на сайте. В тексте самого ton.org сказано, что это число активных пользователей Telegram, а не пользователей TON. Для TON на той же странице приведён свой показатель: 3,3 млн активных кошельков в месяц. Цифры измеряют разное, поэтому вывод «все пользователи Telegram уже в TON» неверен.",
        },
        {
          t: "p",
          text: "Дата обновления ton.org в официальном источнике не указана, поэтому мы её не приводим.",
        },
        {
          t: "h2",
          id: "telegramga-integratsiya-qilingan-royxatidagi-qaysi",
          text: "Что из списка «интегрировано в Telegram» касается геймера?",
        },
        {
          t: "p",
          text: "На ton.org перечислено, где в Telegram используется TON. В таблице этот список разобран с точки зрения геймера:",
        },
        {
          t: "table",
          head: [
            "Продукт из списка",
            "Что даёт геймеру",
            "Нужны ли TON или кошелёк",
          ],
          rows: [
            [
              "Кошелёк от команды Telegram, встроенный в мессенджер",
              "Хранение и переводы криптовалюты",
              "Для доната не нужен",
            ],
            [
              "Боты и мини-приложения",
              "Игры и магазины внутри Telegram",
              "Зависит от конкретного приложения",
            ],
            [
              "Telegram Stars",
              "Оплата ботов, контента и сервисов",
              "Покупаются и за Gram, и в сумах",
            ],
            [
              "Telegram Premium",
              "Дополнительные возможности для чатов и каналов",
              "Оформляется и через криптокошелёк, и в сумах",
            ],
            [
              "Розыгрыши Stars и Premium",
              "Конкурсы в канале клана",
              "Можно предоплатить в Gram",
            ],
            [
              "Подарки (gifts)",
              "Украшение профиля, подарок тиммейту",
              "Нужен, только если превращать подарок в NFT",
            ],
            [
              "Коллекционные username и номера",
              "Красивое имя для канала клана",
              "Не нужен, хватит обычного @username",
            ],
            [
              "Доход от рекламы",
              "Касается только владельца канала",
              "Доход могут выплачивать в Gram",
            ],
            [
              "Браузер для сайтов в сети TON",
              "Прямой пользы для геймера нет",
              "—",
            ],
          ],
        },
        {
          t: "p",
          text: "В списке нет ничего, что даёт преимущество в игре или удешевляет UC. Большинство пунктов рассчитано на владельцев каналов и тех, кто уже работает с криптовалютой.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "uc-olmos-va-cp-olishda",
          text: "Есть ли у TON роль в покупке UC, алмазов и CP?",
        },
        {
          t: "p",
          text: "Среди того, что оплачивается в Gram, ton.org называет Stars, Premium и розыгрыши. О покупке UC для PUBG Mobile, алмазов Mobile Legends или CP для Call of Duty Mobile за Gram там ничего нет.",
        },
        {
          t: "note",
          tone: "warn",
          text: "Если в чате клана кто-то пишет «отдам UC за Gram дешевле», на ton.org это предложение не опирается. Почему опасно заранее переводить деньги на незнакомый адрес, разобрано в статье <a href=\"/blog/ton-manzilga-donat-tolovi-oyinchi-xavfi\">об оплате доната на TON-адрес</a>.",
        },
        {
          t: "p",
          text: "В GemPay для покупки игровой валюты нужен только Player ID, пароль никогда не спрашивают. Сначала бот проверяет и показывает ник, а оплата проходит после вашего подтверждения. Валюта зачисляется автоматически за 1–5 минут.",
        },
        {
          t: "p",
          text: "Stars не превращаются в игровую валюту. Купили вы их за Gram или в сумах — UC за них не получить. Для чего нужна каждая валюта, показано в таблице в статье <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">о разнице между Stars, UC и алмазами</a>.",
        },
        {
          t: "h2",
          id: "stars-va-premium-gram-bilan",
          text: "Stars и Premium: чем покупка за Gram отличается от покупки в сумах?",
        },
        {
          t: "p",
          text: "Есть оба способа. Различаются они тем, что нужно подготовить заранее и где показывают цену.",
        },
        {
          t: "table",
          head: [
            "Критерий",
            "Через Gram (внутри Telegram)",
            "В сумах (GemPay)",
          ],
          rows: [
            [
              "Что нужно",
              "Кошелёк с Gram на балансе",
              "@username и UzCard, HUMO, Click, Uzum Bank или баланс бота",
            ],
            [
              "Цена 1 Stars",
              "Показывается в окне Telegram",
              `${som(STARS_UNIT_CARD, "ru")} (карта или баланс), ${som(STARS_UNIT_ONLINE, "ru")} (Click или Uzum Bank)`,
            ],
            [
              "Количество Stars",
              "Уточняйте в окне Telegram",
              "От 50 до 10 000 за один заказ",
            ],
            [
              "Premium",
              "Через криптокошелёк, себе или другу",
              `3 месяца — ${som(premium(3), "ru")}, 6 месяцев — ${som(premium(6), "ru")}, 12 месяцев — ${som(premium(12), "ru")}`,
            ],
            [
              "Скорость зачисления",
              "В этой статье не подтверждена",
              "И Stars, и Premium — за несколько секунд",
            ],
          ],
        },
        {
          t: "p",
          text: "В GemPay цена Premium одинакова при любом способе оплаты, тарифа на 1 месяц нет. Premium подключается через официальный механизм подарков Telegram, в ваш аккаунт никто не входит.",
        },
        {
          t: "p",
          text: "Путь через Gram удобен тому, у кого Gram уже лежит в кошельке. Остальным пришлось бы сначала купить криптовалюту и только потом обменять её на Stars, а это лишний шаг. Visa и Mastercard GemPay не принимает, но иностранная карта, VPN и криптовалюта тоже не нужны: хватит местной карты. Нужен ли кошелёк вообще, разобрано в статье <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">нужен ли геймеру Telegram Wallet</a>.",
        },
        {
          t: "h2",
          id: "mini-app-oyinda-hamyon-ulashni",
          text: "Игра в Mini App просит подключить кошелёк: на что смотреть?",
        },
        {
          t: "p",
          text: "По данным ton.org, разработчики могут делать ботов и мини-приложения, встроенные в Telegram. Stars тратятся на цифровые товары и сервисы внутри Telegram. Если игра в Mini App просит подключить кошелёк, проверьте следующее:",
        },
        {
          t: "list",
          items: [
            "<strong>Подключить кошелёк и выдать секретные слова — разные вещи.</strong> Если игра, бот или «админ» просит слова для восстановления кошелька или приватный ключ, сразу выходите из приложения.",
            "<strong>Условие «сначала отправь Gram, потом получишь бонус» — тревожный знак.</strong> Не верьте предложениям, где за приз просят заплатить заранее.",
            "<strong>Проверьте, чей это бот.</strong> Имя бота, ссылка и канал должны совпадать. Не заходите по ссылке, которую переслали в чат клана.",
            "<strong>Никому не называйте код входа в Telegram.</strong> Если код просят «для подтверждения», это попытка захватить аккаунт.",
            "<strong>Включите пароль двухэтапной проверки.</strong> Тогда одного кода не хватит для входа в аккаунт, даже если он попадёт к чужому человеку.",
          ],
        },
        {
          t: "p",
          text: "Если в окне оплаты есть вариант со Stars, можно купить Stars в сумах и потратить их там же, не трогая кошелёк.",
        },
        {
          t: "h2",
          id: "klan-sovgasi-uchun-royxatdagi-giftlarning",
          text: "Важны ли подарки из списка для подарка клану?",
        },
        {
          t: "p",
          text: "ton.org пишет, что подарки Telegram можно превратить в NFT на базе TON. В <a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">документации Telegram API</a> тоже говорится о превращении коллекционного подарка в NFT в блокчейне TON.",
        },
        {
          t: "p",
          text: "Согласно <a href=\"https://telegram.org/blog/wear-gifts-blockchain-and-more\" target=\"_blank\" rel=\"noopener\">анонсу в блоге Telegram</a>, подарки, как и коллекционные username и номера, можно передавать или выставлять на аукцион через блокчейн TON. Подарок в блокчейне остаётся под контролем владельца, даже если тот потерял доступ к аккаунту Telegram или удалил его. У каждого коллекционного подарка есть своя ссылка вида t.me/nft.",
        },
        {
          t: "p",
          text: "В документации API указаны два условия вывода в блокчейн. Первое — пароль двухэтапной проверки (2FA) пользователя. Второе — некоторые подарки можно вывести только начиная с определённой даты.",
        },
        {
          t: "p",
          text: "Чтобы подарить что-то тиммейту, выводить подарок в блокчейн не нужно. NFT не даёт ни силы в игре, ни скинов, а только украшает профиль. Не лучше ли купить на эти деньги UC или Premium, разобрано в статье <a href=\"/blog/plush-pepe-narxi-oyinchi-stars-sarflash\">о сравнении Plush Pepe и UC</a>.",
        },
        {
          t: "h2",
          id: "jamoadoshga-stars-yoki-premiumni-tonsiz",
          text: "Как подарить тиммейту Stars или Premium без TON?",
        },
        {
          t: "p",
          text: "Тиммейту не нужен кошелёк: Stars или Premium придут ему как обычный подарок. Порядок такой:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Откройте <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> — как Mini App или как чат.",
            "Выберите нужный раздел. Для Stars укажите количество от 50 до 10 000, для Premium выберите срок: 3, 6 или 12 месяцев.",
            "Введите @username тиммейта и сверьте найденный профиль с ним. Если ошибиться хотя бы в одной букве, подарок может уйти на чужой аккаунт.",
            "Оплатите через UzCard, HUMO, Click, Uzum Bank или с баланса бота. Если платите из России, доступна SBP.",
            "Попросите тиммейта проверить зачисление: и Stars, и Premium приходят за несколько секунд. Если не пришло, напишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> и укажите номер заказа.",
          ],
        },
        {
          t: "p",
          text: "Если заказ не выполнен, деньги полностью возвращаются в течение 3 рабочих дней. А вот то, что уже зачислено на аккаунт, не возвращается, поэтому на 3-м шаге не торопитесь. Подробная инструкция — в статье <a href=\"/blog/telegram-stars-sotib-olish-gempay\">как купить Telegram Stars</a>.",
        },
        {
          t: "h2",
          id: "klan-chatidagi-ton-gaplarini-qanday",
          text: "Как проверить разговоры о TON в чате клана?",
        },
        {
          t: "p",
          text: "С тех пор как о ton.org заговорили, в чатах появляются всякие «новости». Большинство из них можно за минуту проверить на самой официальной странице:",
        },
        {
          t: "list",
          items: [
            "<strong>«Вышла новая монета Gram, бери быстрее».</strong> По данным ton.org, Gram — основная монета блокчейна TON, она известна и под названием Toncoin. Предложения, где два названия выдают за две разные монеты, играют именно на этой путанице.",
            "<strong>«Миллиард человек уже в TON, заводи кошелёк и ты».</strong> Как сказано выше, 1B+ — это цифра о пользователях Telegram.",
            "<strong>«Теперь и UC через TON».</strong> В списке на ton.org игровой валюты нет.",
            "<strong>Пост в канале или чате.</strong> Пост сообщает о новости, но сам по себе доказательством не является. Каждое утверждение проверяйте на ton.org и telegram.org.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Слухи о том, что кошелёк сменит название, и их влияние на донат разобраны в статье <a href=\"/blog/wallet-walt-oyinchi-stars-donat\">о Wallet и Walt</a>.",
        },
        {
          t: "sources",
          items: [
            {
              label: "TON — The Leading L1 Blockchain",
              href: "https://ton.org/",
            },
            {
              label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More",
              href: "https://telegram.org/blog/wear-gifts-blockchain-and-more",
            },
            {
              label: "Telegram Gifts",
              href: "https://core.telegram.org/api/gifts",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Тиммейт говорит: «В Telegram все пользуются TON, заведи кошелёк». Это правда?",
          a: "Нет. Цифра 1B+ на ton.org относится к активным пользователям Telegram и не связана с кошельками TON. Stars, Premium и игровую валюту можно купить без кошелька.",
        },
        {
          q: "Если купить Stars за Gram, можно потом обменять их на UC?",
          a: "Нет. Каким бы способом ни были куплены Stars, в игровую валюту они не превращаются. UC покупают отдельно, по Player ID.",
        },
        {
          q: "У тиммейта нет TON-кошелька. Дойдёт ли до него Premium в подарок?",
          a: "Да, дойдёт. В GemPay Premium подключается по @username получателя через официальный механизм подарков Telegram, кошелёк для этого не требуется.",
        },
        {
          q: "Игра в Mini App просит оплату в Gram. Можно ли заплатить Stars?",
          a: "Это зависит от самой игры, так что посмотрите, есть ли вариант со Stars в окне оплаты. Если есть, купите Stars в сумах и платите без кошелька.",
        },
        {
          q: "Обязательно ли покупать коллекционный username для канала клана?",
          a: "Нет. Коллекционное имя — просто дополнительная опция. Канал прекрасно работает и с обычным @username.",
        },
        {
          q: "В чате сказали: «Gram дешёвый, а Toncoin дорогой». Есть разница?",
          a: "По данным ton.org, это два названия одной монеты: раньше Gram называли ещё и Toncoin. Если вам обещают заработок на «разнице в цене» между ними, будьте осторожны.",
        },
        {
          q: "Донат в PUBG или MLBB теперь будет через TON?",
          a: "В списке на ton.org игровая валюта вообще не упоминается. В GemPay UC и алмазы по-прежнему покупают в сумах по Player ID, они зачисляются за 1–5 минут.",
        },
      ],
    },
  },
};

export default article;
