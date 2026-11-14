// Avtoblogyoz yasagan maqola (2026-11-14). Niyat: Klan chatida yoki Stars kanalida «kitlar Plush Pepe sotib olyapti, giftlar qimmatlaydi» degan postni ko‘rgan o‘yinchi bu signalga ishonib, hozir NFT sovg‘a sotib olish kerakmi yoki bu xaypmi, deb qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/faq
//   https://telegram.org/blog/gift-marketplace-and-more
//   https://core.telegram.org/api/gifts
//   https://fragment.com/about
//   https://fragment.com/gifts/plushpepe

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "kitlar-plush-pepe-xaridi-oyinchi-signal",
  game: null,
  type: "trust",
  datePublished: "2026-11-14",
  dateModified: "2026-11-14",
  keywords: ["kitlar plush pepe sotib olyapti","plush pepe sotib olish kerakmi","plush pepe narxi","telegram nft sovg‘a qimmatlaydimi","telegram gift narxi o‘sadimi","plush pepe xayp","киты покупают plush pepe","plush pepe цена","подарки telegram вырастут в цене","стоит ли покупать nft подарок telegram","плюш пепе купить"],
  locales: {
    uz: {
      title: "Kitlar Plush Pepe sotib olyapti: o‘yinchi hozir NFT sovg‘a olsinmi?",
      metaTitle: "Kitlar Plush Pepe sotib olyapti",
      metaDescription: "Yo‘q, kanal posti hech narsani isbotlamaydi: kitlar xaridi va narx o‘sishi rasman tasdiqlanmagan. Plush Pepe o‘yinda foyda bermaydi, narxi kafolatlanmagan.",
      excerpt: "Yo‘q, kanal posti hech narsani isbotlamaydi: kitlar xaridi va narx o‘sishi rasman tasdiqlanmagan. Plush Pepe o‘yinda foyda bermaydi, narxi kafolatlanmagan.",
      answer: "Yo‘q, kanal posti hech narsani isbotlamaydi: kitlar xaridi va narx o‘sishi rasman tasdiqlanmagan. Plush Pepe o‘yinda foyda bermaydi, narxi kafolatlanmagan.",
      body: [
        {
          t: "h2",
          id: "kitlar-plush-pepe-sotib-olyapti",
          text: "«Kitlar Plush Pepe sotib olyapti» posti nimani isbotlaydi?",
        },
        {
          t: "p",
          text: "Hech narsani isbotlamaydi. Bu Telegram kanalidagi post, rasmiy manba emas. Unga ishonib hozir NFT sovg‘a sotib olishga asos yo‘q.",
        },
        {
          t: "p",
          text: "Postda yirik egalardan biri («kit») uzoq tanaffusdan keyin yana faollashgani va avval ko‘plab Plush Pepe hamda Heart Locket sotib olgani aytiladi. Bu xaridlarni rasmiy manba tasdiqlamaydi. Shuning uchun ism ham, raqamlar ham bu yerda fakt sifatida keltirilmaydi.",
        },
        {
          t: "p",
          text: "«Xitoylik kitlar ham Plush Pepe olishni boshladi» degan gap ham faqat kanal postida bor. Sovg‘alar narxi o‘sadi degan bashorat <a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a>da ham, <a href=\"https://fragment.com/about\" target=\"_blank\" rel=\"noopener\">Fragment</a> sahifasida ham yo‘q.",
        },
        {
          t: "p",
          text: "Bunday postlar ko‘pincha bir xil quriladi: shov-shuvli sarlavha, «o‘sish boshlanyaptimi?» degan savol, ba’zan oxirida Stars yoki sovg‘a sotadigan joyga havola. Post muallifi savdodan manfaatdor emasligini tekshirib bo‘lmaydi. Buni yodda tuting.",
        },
        {
          t: "p",
          text: "Yirik xaridor narxni qisqa muddatga ko‘tarishi mumkin, lekin bu narx keyin ham baland turadi degani emas. Xarid to‘xtasa, narx tushishi mumkin. Shunda kech qo‘shilgan xaridor qimmatga olgan sovg‘asi bilan qolib ketadi.",
        },
        {
          t: "h2",
          id: "plush-pepe-aslida-nima-va",
          text: "Plush Pepe aslida nima va uning «qiymati» qayerdan keladi?",
        },
        {
          t: "p",
          text: "Telegram FAQ’ga ko‘ra, sovg‘a boshqa foydalanuvchiga yoki kanalga xabar bilan yuboriladigan animatsion narsa. U Telegram Stars bilan to‘lanadi.",
        },
        {
          t: "p",
          text: "Olingan sovg‘ani profildagi «Gifts» bo‘limida ko‘rsatish yoki qaytadan Stars’ga aylantirish mumkin. Oz miqdordagi Stars to‘lab, uni kolleksion sovg‘aga ham aylantirsa bo‘ladi.",
        },
        {
          t: "p",
          text: "Kolleksion sovg‘a Telegram rassomlari chizgan model, fon va belgidan iborat noyob ko‘rinish hamda raqam oladi. Ba’zi birikmalar boshqalaridan noyobroq.",
        },
        {
          t: "p",
          text: "Plush Pepe shunday kolleksiyalardan biri. <a href=\"https://fragment.com/gifts/plushpepe\" target=\"_blank\" rel=\"noopener\">Fragment’dagi kolleksiya sahifasida</a> tekshirilgan paytda 2 485 dona ko‘rsatilgan. Bu son vaqt o‘tishi bilan o‘zgarishi mumkin.",
        },
        {
          t: "p",
          text: "Plush Pepe’ning «qiymati» bitta narsaga bog‘liq: boshqa xaridorlar unga qancha to‘lashga tayyor. O‘yinda u hech narsa bermaydi: PUBG Mobile’da skin, Mobile Legends’da olmos yoki Free Fire’da bonus ochmaydi. U faqat Telegram profilingizda ko‘rinadi.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "savdo-tarixi-va-value-maydoni",
          text: "Savdo tarixi va «Value» maydoni nimani ko‘rsatadi, nimani ko‘rsatmaydi?",
        },
        {
          t: "p",
          text: "Kanaldagi signallarni rasmiy manbalar bilan solishtirsak, quyidagi manzara chiqadi.",
        },
        {
          t: "table",
          head: [
            "Da’vo yoki signal",
            "Rasmiy manbada bormi",
            "O‘yinchi nima qiladi",
          ],
          rows: [
            [
              "«Kitlar Plush Pepe sotib olyapti»",
              "Tasdiqlanmagan",
              "Fakt deb qabul qilmaydi",
            ],
            [
              "«Giftlar qimmatlaydi»",
              "Bunday bashorat yo‘q",
              "Bashoratga Stars tikmaydi",
            ],
            [
              "Sovg‘adagi «Value» maydoni",
              "Bor: taxminiy qayta sotish narxini ko‘rsatadi",
              "Kanaldagi raqam bilan solishtiradi",
            ],
            [
              "Fragment’dagi oldingi sotuvlar",
              "Bor, kolleksiya sahifasida",
              "Sana va dona raqamiga qaraydi",
            ],
            [
              "Hozirgi eng past narx (floor)",
              "Bu maqolada tasdiqlanmagan",
              "Xariddan oldin o‘zi tekshiradi",
            ],
          ],
        },
        {
          t: "p",
          text: "Fragment sahifasida Plush Pepe #1821 88 888 ga, #1515 esa 2025-yil 18-avgustda 48 000 ga sotilgani ko‘rinadi. Sahifada valyuta ko‘rsatilmagan, shuning uchun bu summalarni TON yoki dollar deb hisoblamang.",
        },
        {
          t: "p",
          text: "Bitta qimmat sotuv hamma Plush Pepe shu narxda sotiladi degani emas. Har bir dona model, fon va belgi birikmasi bilan farq qiladi, noyob birikma esa boshqacha baholanadi.",
        },
        {
          t: "p",
          text: "«Value» maydoni ham faqat taxminiy qayta sotish narxini ko‘rsatadi. U sovg‘ani shu narxda sota olishingizga kafolat emas.",
        },
        {
          t: "h2",
          id: "kit-signaliga-ishonib-sotib-olsangiz",
          text: "Kit signaliga ishonib sotib olsangiz, qanday xavflar bor?",
        },
        {
          t: "list",
          items: [
            "<strong>Narx xavfi.</strong> Rasmiy manbalarda narx o‘sishi haqida hech qanday va’da yo‘q. Signal xayp bo‘lib chiqsa, sovg‘a siz olgan narxdan arzonlashib qolishi mumkin.",
            "<strong>Komissiya.</strong> Sotganda narxning hammasi qo‘lingizga tushmaydi. <a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">Telegram Gifts hujjati</a>ga ko‘ra, ichki bozorda sotuvchi narxning komissiya parametriga bog‘liq qismini oladi. Foizi esa raqam bilan yozilmagan. Fragment’da har sotuvdan 5% platforma to‘lovi olinadi. Bu ikkisini aralashtirmang.",
            "<strong>Muddat cheklovi.</strong> Ayrim sovg‘alarni sotuvga qo‘yish yoki blokcheynga eksport qilishga faqat belgilangan sanadan boshlab ruxsat berilishi mumkin. Narx tusha boshlaganda darhol sota olmasligingiz mumkin.",
            "<strong>Tashqi marketpleys va «garant» botlar.</strong> Ichki bozordan tashqariga o‘tkazilgan sovg‘a nazoratingizdan chiqadi. Batafsil: <a href=\"/blog/sovgani-marketpleysga-otkazish-xavfsizmi-oyinchi\">sovg‘ani marketpleysga o‘tkazish xavfsizmi</a>.",
            "<strong>Shubhali arzon Stars.</strong> Sovg‘ani notanish sotuvchidan olingan Stars bilan sotib olsangiz, refund yoki qoida buzilishi tufayli Stars balansdan yechilishi mumkin. Batafsil: <a href=\"/blog/arzon-stars-refund-sxemasi-oyinchi-xavfi\">klan chatidagi arzon Stars xavfi</a>.",
          ],
        },
        {
          t: "h2",
          id: "signal-rostmi-yoki-xaypmi-5",
          text: "Signal rostmi yoki xaypmi — 5 qadamda qanday tekshiriladi?",
        },
        {
          t: "steps",
          items: [
            {
              title: "Manbani tekshiring",
              text: "Yangilik <a href=\"https://telegram.org/blog\" target=\"_blank\" rel=\"noopener\">Telegram blogi</a>da yoki Telegram’ning rasmiy kanalida bormi? Kanal posti va skrinshot fakt emas.",
            },
            {
              title: "«Value» maydoniga qarang",
              text: "Sovg‘ani Telegram ichida oching va taxminiy qayta sotish narxini kanaldagi raqam bilan solishtiring.",
            },
            {
              title: "Savdo tarixini ko‘ring",
              text: "<a href=\"https://fragment.com/gifts/plushpepe\" target=\"_blank\" rel=\"noopener\">Fragment’dagi Plush Pepe sahifasi</a>da oxirgi sotuvlar sanasiga e’tibor bering. Bitta katta sotuv trend emas.",
            },
            {
              title: "Faqat ichki bozordan oling",
              text: "Telegram 2025-yil 8-mayda kolleksion sovg‘alarni xavfsiz sotish va sotib olish mumkin bo‘lgan <a href=\"https://telegram.org/blog/gift-marketplace-and-more\" target=\"_blank\" rel=\"noopener\">yangi bozorni e’lon qildi</a>. Unda sovg‘alar Stars bilan olinadi, sotuvdagi sovg‘ada esa «Sale» belgisi turadi.",
            },
            {
              title: "Taklif mexanizmidan foydalaning",
              text: "Taklif berganingizda to‘lovingiz band qilinadi. Egasi rad etsa yoki taklif muddati o‘tsa, pul avtomatik qaytadi. Ilova taklif summasi sovg‘aning taxminiy qiymatiga qanchalik yaqinligini ham ko‘rsatishi kerak. Shaxsiy xabarda oldindan qilingan to‘lovda bunday himoya yo‘q.",
            },
          ],
        },
        {
          t: "h2",
          id: "klan-chatidagi-plush-pepe-sotaman",
          text: "Klan chatidagi «Plush Pepe sotaman» xabarida qaysi belgilar firibgarlikni ko‘rsatadi?",
        },
        {
          t: "p",
          text: "Kit haqidagi post tarqalgandan keyin chatlarda «arzon Plush Pepe» takliflari ham ko‘payishi mumkin. Quyidagi belgilardan birini ko‘rsangiz, suhbatni to‘xtating:",
        },
        {
          t: "list",
          items: [
            "Telegram kodi, parol, ikki bosqichli tekshiruv paroli yoki hamyonning seed so‘zlari so‘ralsa.",
            "Oldindan Stars, Gram yoki TON manziliga pul yuborish so‘ralsa. Batafsil: <a href=\"/blog/ton-manzilga-donat-tolovi-oyinchi-xavfi\">TON manzilga to‘lash nega xavfli</a>.",
            "«Kitlar olyapti, ertaga qimmatlaydi, hozir ol» deb shoshiltirishsa.",
            "Notanish «garant» bot yoki ichki bozordan tashqariga olib chiqadigan havola berilsa. Batafsil: <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">gift sotib olish taklifida firibgarlikni tanish</a>.",
            "Narx bozordagidan ancha arzon bo‘lsa. Halol sotuvchi sovg‘ani o‘zi ichki bozorga qo‘ya oladi: profilda sovg‘ani ochadi, «Sell»ni bosadi va narxni Stars’da belgilaydi. O‘rtada vositachi kerak emas.",
          ],
        },
        {
          t: "h2",
          id: "oyinchi-uchun-starsni-qayerga-sarflash",
          text: "O‘yinchi uchun Stars’ni qayerga sarflash foydaliroq: Plush Pepe, Premium yoki UC?",
        },
        {
          t: "p",
          text: "Ko‘pchilik o‘yinchi uchun asl savol «qaysi sovg‘a qimmatlaydi?» emas, «pul qayerda foyda beradi?». GemPay narxlari bilan taqqoslash:",
        },
        {
          t: "table",
          head: [
            "Variant",
            "O‘yinda yoki chatda nima beradi",
            "Narx qanday ko‘rinadi",
            "Qayta sotiladimi",
          ],
          rows: [
            [
              "Kolleksion sovg‘a (Plush Pepe)",
              "Profilni bezaydi, o‘yinda foydasi yo‘q",
              "Bozorda, xaridorlar talabiga qarab",
              "Ha, lekin narx kafolatlanmagan va komissiya bor",
            ],
            [
              "Telegram Premium",
              "Klan chati va kanallar uchun qo‘shimcha funksiyalar",
              `3 oy ${som(premium(3), "uz")}, 6 oy ${som(premium(6), "uz")}, 12 oy ${som(premium(12), "uz")}; 1 oylik tarif yo‘q`,
              "Yo‘q",
            ],
            [
              "Telegram Stars",
              "Jamoadoshga sovg‘a yuborish, ichki bozorda kolleksion sovg‘a olish",
              `1 dona ${som(STARS_UNIT_CARD, "uz")} (karta yoki balans), Click yoki Uzum Bank orqali ${som(STARS_UNIT_ONLINE, "uz")}`,
              "Yo‘q, Stars o‘yin valyutasiga aylanmaydi",
            ],
            [
              "UC, olmos, CP",
              "O‘yindagi skin, pass va boshqa narsalar",
              "Narxi botda ko‘rsatiladi",
              "Yo‘q",
            ],
          ],
        },
        {
          t: "p",
          text: "GemPay’da Premium narxi hamma to‘lov usulida bir xil. U @username bo‘yicha Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi, akkauntingizga kirilmaydi. Stars bir buyurtmada 50 tadan 10 000 tagacha olinadi, buning uchun faqat @username kerak. UC, olmos va CP Player ID bo‘yicha 1–5 daqiqada tushadi, parol so‘ralmaydi.",
        },
        {
          t: "p",
          text: "Qisqa qoida: ko‘p o‘ynasangiz, UC yoki olmos oling. Chatda faol bo‘lsangiz, Premium oling. Tanlovni jamoadoshga qoldirmoqchi bo‘lsangiz, Stars bering. Plush Pepe va o‘yin valyutasi o‘rtasidagi tanlov haqida <a href=\"/blog/plush-pepe-narxi-oyinchi-stars-sarflash\">alohida maqola</a> bor. Valyutalar farqi esa <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">Stars, UC va olmos taqqoslovida</a> tushuntirilgan.",
        },
        {
          t: "h2",
          id: "baribir-plush-pepe-olmoqchi-bolsangiz",
          text: "Baribir Plush Pepe olmoqchi bo‘lsangiz, nimani yodda tutish kerak?",
        },
        {
          t: "note",
          tone: "info",
          text: "Faqat yo‘qotsangiz ham ziyon qilmaydigan Stars’ni ishlating. Donat yoki Premium uchun ajratilgan pulni sovg‘a savdosiga sarflamang.",
        },
        {
          t: "list",
          items: [
            "<strong>Yangi cheklangan kolleksiyalar auksion orqali chiqadi.</strong> Telegram FAQ’ga ko‘ra, ba’zi cheklangan to‘plamlar faqat Premium foydalanuvchilar uchun. Kanaldagi «maxfiy chiqish» yoki «yopiq savdo» xabarlarini rasmiy e’lon bilan solishtiring.",
            "<strong>O‘tkazish va blokcheyn.</strong> Kolleksion sovg‘ani boshqa foydalanuvchiga o‘tkazish yoki TON blokcheyniga NFT sifatida ko‘chirish mumkin. Blokcheynga ko‘chirilgan sovg‘a Telegram akkaunti o‘chirilsa ham egasida qoladi. Lekin hamyon kalitini hech kimga bermang, «tekshiruv uchun» degan bahona bilan so‘rashsa ham.",
            "<strong>Sotishdan oldin hisoblang.</strong> Ichki bozorda ham, Fragment’da ham komissiya bor. Komissiya chegirilgandan keyingi summa xarid narxidan oshmasa, zarar ko‘rasiz.",
            "<strong>Nega olayotganingizni o‘zingizga aniq ayting.</strong> Sovg‘a sizga yoqgani uchun olsangiz, bu normal. Agar yagona sabab «kitlar olyapti» degan post bo‘lsa, qarorni siz emas, kanal qilgan bo‘ladi.",
          ],
        },
        {
          t: "p",
          text: "GemPay kolleksion sovg‘a sotmaydi va ularning narxini bashorat qilmaydi. Stars, Premium va o‘yin valyutasini <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> orqali so‘mda, parolsiz olish mumkin.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Telegram FAQ",
              href: "https://telegram.org/faq",
            },
            {
              label: "Gift Marketplace, Posting Several Stories at Once, Auto-Translate For Channels",
              href: "https://telegram.org/blog/gift-marketplace-and-more",
            },
            {
              label: "Telegram Gifts",
              href: "https://core.telegram.org/api/gifts",
            },
            {
              label: "How does Fragment work?",
              href: "https://fragment.com/about",
            },
            {
              label: "Plush Pepes",
              href: "https://fragment.com/gifts/plushpepe",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Kanalda yozilgan «kit» haqiqatan juda ko‘p Plush Pepe sotib olganmi?",
          a: "Buni hech bir rasmiy manba tasdiqlamaydi, gap faqat kanal postida bor. Postdagi raqamlarga qarab sovg‘a sotib olish qarorini qabul qilmang.",
        },
        {
          q: "Plush Pepe narxi oshishi kafolatlanganmi?",
          a: "Yo‘q. Narx qancha xaridor topilishiga bog‘liq va pasayishi ham mumkin. Rasmiy sahifalarda o‘sish haqida bashorat ham, va’da ham yo‘q.",
        },
        {
          q: "Fragment’dagi 88 888 degan sotuv narxi TON’dami yoki Stars’dami?",
          a: "Kolleksiya sahifasida bu sotuvning valyutasi yozilmagan. Shuning uchun summani TON, Stars yoki dollarga aylantirib hisoblash to‘g‘ri emas.",
        },
        {
          q: "Plush Pepe’ni sotsam, Stars’ning hammasi menga qaytadimi?",
          a: "Yo‘q, sotuvdan ulush ushlab qolinadi. Telegram ichki bozorida bu ulush komissiya parametriga bog‘liq va foizi hujjatda ko‘rsatilmagan. Fragment’da esa platforma har sotuvdan 5% oladi.",
        },
        {
          q: "Plush Pepe’ni Stars’ga yoki UC’ga almashtirsa bo‘ladimi?",
          a: "Kolleksion sovg‘ani ichki bozorga qo‘yib, Stars’da o‘zingiz belgilagan narxda sotishingiz mumkin. Lekin uni kim va qachon sotib olishi noma’lum. UC yoki olmos olishning iloji yo‘q, chunki Stars o‘yin valyutasiga aylanmaydi.",
        },
        {
          q: "Jamoadosh Plush Pepe’ni arzonga sotmoqchi, oldindan to‘lasam bo‘ladimi?",
          a: "Shaxsiy xabarda oldindan to‘lamang: sovg‘a kelmasa, pulni qaytarib olish qiyin. Undan sovg‘ani ichki bozorga qo‘yishini so‘rang. U yerda taklif bersangiz, to‘lov band qilinadi va rad etilsa, avtomatik qaytadi.",
        },
        {
          q: "Plush Pepe olish uchun TON hamyon kerakmi?",
          a: "Telegram ichki bozorida kolleksion sovg‘alar Stars bilan olinadi, hamyon shart emas. TON blokcheyniga ko‘chirish ixtiyoriy alohida qadam. U holda ham hamyon kalitini hech kimga bermang.",
        },
      ],
    },
    ru: {
      title: "Киты скупают Plush Pepe: стоит ли игроку сейчас покупать NFT-подарок?",
      metaTitle: "Киты скупают Plush Pepe: стоит ли игроку сейчас покупать",
      metaDescription: "Нет, пост в канале ничего не доказывает: покупки китов и рост цен официально не подтверждены. Plush Pepe ничего не даёт в игре, цена не гарантирована.",
      excerpt: "Нет, пост в канале ничего не доказывает: покупки китов и рост цен официально не подтверждены. Plush Pepe ничего не даёт в игре, цена не гарантирована.",
      answer: "Нет, пост в канале ничего не доказывает: покупки китов и рост цен официально не подтверждены. Plush Pepe ничего не даёт в игре, цена не гарантирована.",
      body: [
        {
          t: "h2",
          id: "kitlar-plush-pepe-sotib-olyapti",
          text: "Что доказывает пост «Киты скупают Plush Pepe»?",
        },
        {
          t: "p",
          text: "Ничего. Это пост в Telegram-канале, а не официальный источник. Покупать NFT-подарок прямо сейчас только из-за него нет оснований.",
        },
        {
          t: "p",
          text: "В посте говорится, что один из крупных держателей («кит») после долгого перерыва снова проявил активность, а раньше купил много Plush Pepe и Heart Locket. Официальные источники эти покупки не подтверждают, поэтому ни имя, ни цифры мы здесь как факт не приводим.",
        },
        {
          t: "p",
          text: "Фраза «китайские киты тоже начали скупать Plush Pepe» тоже есть только в посте канала. Прогнозов роста цен на подарки нет ни в <a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">FAQ Telegram</a>, ни на странице <a href=\"https://fragment.com/about\" target=\"_blank\" rel=\"noopener\">Fragment</a>.",
        },
        {
          t: "p",
          text: "Такие посты обычно устроены одинаково: громкий заголовок, вопрос «начинается рост?», иногда в конце — ссылка туда, где продают Stars или подарки. Проверить, что автор не заинтересован в продажах, невозможно. Держите это в голове.",
        },
        {
          t: "p",
          text: "Крупный покупатель может ненадолго поднять цену, но это не значит, что она удержится. Покупки прекратятся — цена может упасть. И тот, кто зашёл последним, останется с подарком, купленным втридорога.",
        },
        {
          t: "h2",
          id: "plush-pepe-aslida-nima-va",
          text: "Что такое Plush Pepe на самом деле и откуда берётся его «ценность»?",
        },
        {
          t: "p",
          text: "Согласно FAQ Telegram, подарок — это анимированный предмет, который отправляют другому пользователю или каналу вместе с сообщением. Оплачивается он в Telegram Stars.",
        },
        {
          t: "p",
          text: "Полученный подарок можно показать в разделе «Gifts» своего профиля или обменять обратно на Stars. А ещё за небольшое количество Stars его можно улучшить до коллекционного.",
        },
        {
          t: "p",
          text: "Коллекционный подарок получает уникальный облик — модель, фон и символ, нарисованные художниками Telegram, — а также номер. Одни сочетания встречаются реже других.",
        },
        {
          t: "p",
          text: "Plush Pepe — одна из таких коллекций. На <a href=\"https://fragment.com/gifts/plushpepe\" target=\"_blank\" rel=\"noopener\">странице коллекции во Fragment</a> на момент проверки было указано 2 485 штук. Со временем это число может меняться.",
        },
        {
          t: "p",
          text: "«Ценность» Plush Pepe зависит от одного: сколько готовы за него заплатить другие покупатели. В игре он ничего не даёт — не открывает скин в PUBG Mobile, алмазы в Mobile Legends или бонус во Free Fire. Его видно только в вашем профиле Telegram.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "savdo-tarixi-va-value-maydoni",
          text: "Что показывают история продаж и поле «Value», а что — нет?",
        },
        {
          t: "p",
          text: "Если сопоставить сигналы из каналов с официальными источниками, картина получается такая.",
        },
        {
          t: "table",
          head: [
            "Утверждение или сигнал",
            "Есть ли в официальном источнике",
            "Что делает игрок",
          ],
          rows: [
            [
              "«Киты скупают Plush Pepe»",
              "Не подтверждено",
              "Не принимает за факт",
            ],
            [
              "«Подарки подорожают»",
              "Такого прогноза нет",
              "Не ставит Stars на прогноз",
            ],
            [
              "Поле «Value» у подарка",
              "Есть: показывает примерную цену перепродажи",
              "Сверяет с цифрой из канала",
            ],
            [
              "Прошлые продажи во Fragment",
              "Есть, на странице коллекции",
              "Смотрит на дату и номер экземпляра",
            ],
            [
              "Текущая минимальная цена (floor)",
              "В этой статье не подтверждена",
              "Проверяет сам перед покупкой",
            ],
          ],
        },
        {
          t: "p",
          text: "На странице Fragment видно, что Plush Pepe #1821 продан за 88 888, а #1515 — 18 августа 2025 года за 48 000. Валюта на странице не указана, поэтому не считайте эти суммы ни в TON, ни в долларах.",
        },
        {
          t: "p",
          text: "Одна дорогая продажа не значит, что любой Plush Pepe уйдёт по такой же цене. Каждый экземпляр отличается сочетанием модели, фона и символа, а редкое сочетание и оценивается иначе.",
        },
        {
          t: "p",
          text: "Поле «Value» тоже показывает лишь примерную цену перепродажи. Это не гарантия, что вы продадите подарок именно за столько.",
        },
        {
          t: "h2",
          id: "kit-signaliga-ishonib-sotib-olsangiz",
          text: "Какие риски, если купить по сигналу о китах?",
        },
        {
          t: "list",
          items: [
            "<strong>Ценовой риск.</strong> В официальных источниках нет никаких обещаний роста цены. Если сигнал окажется хайпом, подарок может подешеветь относительно цены покупки.",
            "<strong>Комиссия.</strong> При продаже вы получите не всю сумму. По <a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">документации Telegram Gifts</a>, на внутреннем рынке продавец получает часть цены, зависящую от параметра комиссии, а сам процент цифрой не указан. Во Fragment с каждой продажи берётся платформенный сбор 5%. Не путайте эти две комиссии.",
            "<strong>Ограничение по сроку.</strong> Некоторые подарки разрешено выставлять на продажу или выводить в блокчейн только начиная с определённой даты. Когда цена начнёт падать, продать сразу может не получиться.",
            "<strong>Внешние маркетплейсы и боты-«гаранты».</strong> Подарок, выведенный за пределы внутреннего рынка, выходит из-под вашего контроля. Подробнее: <a href=\"/blog/sovgani-marketpleysga-otkazish-xavfsizmi-oyinchi\">безопасно ли переводить подарок на маркетплейс</a>.",
            "<strong>Подозрительно дешёвые Stars.</strong> Если покупать подарок на Stars от неизвестного продавца, после возврата платежа или нарушения правил Stars могут списать с баланса. Подробнее: <a href=\"/blog/arzon-stars-refund-sxemasi-oyinchi-xavfi\">риск дешёвых Stars из клан-чата</a>.",
          ],
        },
        {
          t: "h2",
          id: "signal-rostmi-yoki-xaypmi-5",
          text: "Правда или хайп: как проверить сигнал за 5 шагов?",
        },
        {
          t: "steps",
          items: [
            {
              title: "Проверьте источник",
              text: "Есть ли новость в <a href=\"https://telegram.org/blog\" target=\"_blank\" rel=\"noopener\">блоге Telegram</a> или в официальном канале Telegram? Пост в канале и скриншот — не факт.",
            },
            {
              title: "Посмотрите на поле «Value»",
              text: "Откройте подарок внутри Telegram и сравните примерную цену перепродажи с цифрой из канала.",
            },
            {
              title: "Изучите историю продаж",
              text: "На <a href=\"https://fragment.com/gifts/plushpepe\" target=\"_blank\" rel=\"noopener\">странице Plush Pepe во Fragment</a> обратите внимание на даты последних продаж. Одна крупная сделка — ещё не тренд.",
            },
            {
              title: "Покупайте только на внутреннем рынке",
              text: "8 мая 2025 года Telegram <a href=\"https://telegram.org/blog/gift-marketplace-and-more\" target=\"_blank\" rel=\"noopener\">анонсировал новый маркетплейс</a>, где можно безопасно покупать и продавать коллекционные подарки. Там они покупаются за Stars, а у подарка на продаже стоит метка «Sale».",
            },
            {
              title: "Пользуйтесь механизмом предложений",
              text: "Когда вы делаете предложение, оплата резервируется. Если владелец откажет или срок предложения истечёт, деньги вернутся автоматически. Приложение также должно показывать, насколько сумма предложения близка к примерной стоимости подарка. У предоплаты в личных сообщениях такой защиты нет.",
            },
          ],
        },
        {
          t: "h2",
          id: "klan-chatidagi-plush-pepe-sotaman",
          text: "Какие признаки мошенничества в сообщении «Продам Plush Pepe» в клан-чате?",
        },
        {
          t: "p",
          text: "После разлетевшегося поста о китах в чатах может стать больше предложений «дешёвого Plush Pepe». Увидели хотя бы один из признаков ниже — прекращайте разговор:",
        },
        {
          t: "list",
          items: [
            "Просят код из Telegram, пароль, пароль двухэтапной аутентификации или seed-фразу кошелька.",
            "Просят заранее отправить Stars, Gram или деньги на TON-адрес. Подробнее: <a href=\"/blog/ton-manzilga-donat-tolovi-oyinchi-xavfi\">почему опасно платить на TON-адрес</a>.",
            "Торопят: «киты скупают, завтра подорожает, бери сейчас».",
            "Дают незнакомого бота-«гаранта» или ссылку, уводящую с внутреннего рынка. Подробнее: <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">как распознать мошенничество при покупке гифта</a>.",
            "Цена заметно ниже рыночной. Честный продавец может сам выставить подарок на внутренний рынок: открыть его в профиле, нажать «Sell» и указать цену в Stars. Посредник для этого не нужен.",
          ],
        },
        {
          t: "h2",
          id: "oyinchi-uchun-starsni-qayerga-sarflash",
          text: "На что игроку выгоднее потратить Stars: Plush Pepe, Premium или UC?",
        },
        {
          t: "p",
          text: "Для большинства игроков настоящий вопрос не «какой подарок подорожает?», а «где деньги принесут пользу?». Сравнение по ценам GemPay:",
        },
        {
          t: "table",
          head: [
            "Вариант",
            "Что даёт в игре или в чате",
            "Как выглядит цена",
            "Можно ли перепродать",
          ],
          rows: [
            [
              "Коллекционный подарок (Plush Pepe)",
              "Украшает профиль, в игре бесполезен",
              "На рынке, зависит от спроса покупателей",
              "Да, но цена не гарантирована и есть комиссия",
            ],
            [
              "Telegram Premium",
              "Дополнительные функции для клан-чата и каналов",
              `3 месяца ${som(premium(3), "ru")}, 6 месяцев ${som(premium(6), "ru")}, 12 месяцев ${som(premium(12), "ru")}; тарифа на 1 месяц нет`,
              "Нет",
            ],
            [
              "Telegram Stars",
              "Отправить подарок тиммейту, купить коллекционный подарок на внутреннем рынке",
              `1 звезда ${som(STARS_UNIT_CARD, "ru")} (картой или с баланса), через Click или Uzum Bank ${som(STARS_UNIT_ONLINE, "ru")}`,
              "Нет, Stars не конвертируются в игровую валюту",
            ],
            [
              "UC, алмазы, CP",
              "Скины, пропуски и другое в игре",
              "Цена указана в боте",
              "Нет",
            ],
          ],
        },
        {
          t: "p",
          text: "В GemPay цена Premium одинакова при любом способе оплаты. Подписка подключается по @username через официальный механизм подарков Telegram, входить в ваш аккаунт не нужно. Stars можно купить от 50 до 10 000 за один заказ, для этого нужен только @username. UC, алмазы и CP приходят по Player ID за 1–5 минут, пароль не запрашивается.",
        },
        {
          t: "p",
          text: "Короткое правило: много играете — берите UC или алмазы. Активны в чате — берите Premium. Хотите оставить выбор тиммейту — дарите Stars. Выбору между Plush Pepe и игровой валютой посвящена <a href=\"/blog/plush-pepe-narxi-oyinchi-stars-sarflash\">отдельная статья</a>, а разница между валютами разобрана в <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">сравнении Stars, UC и алмазов</a>.",
        },
        {
          t: "h2",
          id: "baribir-plush-pepe-olmoqchi-bolsangiz",
          text: "Если всё же хотите купить Plush Pepe, что нужно помнить?",
        },
        {
          t: "note",
          tone: "info",
          text: "Тратьте только те Stars, потеря которых вам не навредит. Деньги, отложенные на донат или Premium, в торговлю подарками не вкладывайте.",
        },
        {
          t: "list",
          items: [
            "<strong>Новые лимитированные коллекции выходят через аукционы.</strong> По FAQ Telegram, некоторые лимитированные наборы доступны только пользователям Premium. Сообщения в каналах о «тайном релизе» или «закрытых продажах» сверяйте с официальным анонсом.",
            "<strong>Передача и блокчейн.</strong> Коллекционный подарок можно передать другому пользователю или перенести в блокчейн TON как NFT. Подарок, перенесённый в блокчейн, остаётся у владельца, даже если удалить аккаунт Telegram. Но ключ от кошелька не давайте никому, даже если просят «для проверки».",
            "<strong>Считайте до продажи.</strong> Комиссия есть и на внутреннем рынке, и во Fragment. Если сумма после вычета комиссии не превышает цену покупки, вы в минусе.",
            "<strong>Честно ответьте себе, зачем покупаете.</strong> Нравится подарок — это нормальная причина. Если же единственный довод — пост «киты скупают», то решение за вас принял канал.",
          ],
        },
        {
          t: "p",
          text: "GemPay не продаёт коллекционные подарки и не прогнозирует их цены. Stars, Premium и игровую валюту можно купить в <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> — в сумах, без пароля.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Telegram FAQ",
              href: "https://telegram.org/faq",
            },
            {
              label: "Gift Marketplace, Posting Several Stories at Once, Auto-Translate For Channels",
              href: "https://telegram.org/blog/gift-marketplace-and-more",
            },
            {
              label: "Telegram Gifts",
              href: "https://core.telegram.org/api/gifts",
            },
            {
              label: "How does Fragment work?",
              href: "https://fragment.com/about",
            },
            {
              label: "Plush Pepes",
              href: "https://fragment.com/gifts/plushpepe",
            },
          ],
        },
      ],
      faq: [
        {
          q: "«Кит» из поста правда скупил много Plush Pepe?",
          a: "Ни один официальный источник этого не подтверждает — это есть только в посте канала. Не решайте, покупать ли подарок, по цифрам из такого поста.",
        },
        {
          q: "Гарантирован ли рост цены Plush Pepe?",
          a: "Нет. Цена зависит от того, сколько найдётся покупателей, и может пойти вниз. На официальных страницах нет ни прогнозов роста, ни обещаний.",
        },
        {
          q: "Продажа за 88 888 во Fragment — это в TON или в Stars?",
          a: "На странице коллекции валюта этой сделки не указана. Поэтому пересчитывать сумму в TON, Stars или доллары некорректно.",
        },
        {
          q: "Если продам Plush Pepe, получу все Stars обратно?",
          a: "Нет, с продажи удерживается доля. На внутреннем рынке Telegram она зависит от параметра комиссии, и процент в документации не указан. Fragment берёт с каждой продажи 5%.",
        },
        {
          q: "Можно ли обменять Plush Pepe на Stars или UC?",
          a: "Коллекционный подарок можно выставить на внутренний рынок по своей цене в Stars, но неизвестно, кто и когда его купит. Получить UC или алмазы не выйдет: Stars в игровую валюту не превращаются.",
        },
        {
          q: "Тиммейт продаёт Plush Pepe дёшево — можно заплатить ему заранее?",
          a: "Не платьте заранее в личных сообщениях: если подарок не придёт, вернуть деньги будет трудно. Попросите выставить подарок на внутренний рынок — там ваше предложение резервирует оплату, а при отказе она возвращается автоматически.",
        },
        {
          q: "Нужен ли TON-кошелёк, чтобы купить Plush Pepe?",
          a: "На внутреннем рынке Telegram коллекционные подарки покупаются за Stars, кошелёк не обязателен. Перенос в блокчейн TON — отдельный шаг по желанию, и даже тогда ключ от кошелька никому не передавайте.",
        },
      ],
    },
  },
};

export default article;
