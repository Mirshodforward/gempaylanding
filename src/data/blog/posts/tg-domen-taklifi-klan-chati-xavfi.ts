// Avtoblogyoz yasagan maqola (2026-11-12). Niyat: Klan yoki o'yin chatida «prem.tg 1 900 GRAM'ga sotildi, mintdan oldin qisqa nom olib qo'y» degan taklifni olgan o'yinchi «.tg domen sotib olish taklifi xavflimi, klan kanaliga kerakmi» deb qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://fragment.com/about
//   https://core.telegram.org/api/fragment

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "tg-domen-taklifi-klan-chati-xavfi",
  game: null,
  type: "trust",
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  keywords: ["tg domen sotib olish taklifi","tg domen xavflimi","klan kanali uchun tg domen","prem.tg sotildi","GDomains firibgarlik","kolleksion username klan kanali","tg domen GRAM to'lov","домен .tg купить","GDomains развод","домен tg для канала клана","prem.tg продан 1900 GRAM","коллекционный юзернейм Fragment"],
  locales: {
    uz: {
      title: "Klan chatida .tg domen sotib olish taklifi: xavflimi, kanalga kerakmi?",
      metaTitle: "Klan chatida .tg domen sotib olish taklifi",
      metaDescription: "Ha, xavfli: .tg nomlar Telegram’da ishlashi rasman tasdiqlanmagan, klan kanaliga oddiy @username yetadi. GRAM yubormang, hamyon kalitini bermang.",
      excerpt: "Ha, xavfli: .tg nomlar Telegram’da ishlashi rasman tasdiqlanmagan, klan kanaliga oddiy @username yetadi. GRAM yubormang, hamyon kalitini bermang.",
      answer: "Ha, xavfli: .tg nomlar Telegram’da ishlashi rasman tasdiqlanmagan, klan kanaliga oddiy @username yetadi. GRAM yubormang, hamyon kalitini bermang.",
      body: [
        {
          t: "h2",
          id: "klan-chatida-kelgan-tg-domen",
          text: "Klan chatida kelgan .tg domen taklifi xavflimi?",
        },
        {
          t: "p",
          text: "Ha, xavf bor. Chatga «prem.tg 1 900 GRAM’ga sotildi, mintdan oldin qisqa nom olib qo‘y» degan xabar tushgan bo‘lsa, taklifni tekshirmaguningizcha GRAM yubormang. Hamyoningizni ham hech qanday saytga ulamang.",
        },
        {
          t: "p",
          text: "Sababi shu: GDomains, «reg.tg» va @tgdomains_bot haqida Telegram, Fragment yoki TON’ning rasmiy sahifalarida ma’lumot topilmadi. Ularni rasmiy loyiha deyishga asos yo‘q.",
        },
        {
          t: "p",
          text: "Rasmiy manbalarda .tg nomlar zonasi Telegram ichida yoki TON blokcheynida borligi ham tasdiqlanmagan. Demak, «klan.tg» yoki «prem.tg» kabi nom kanalingiz manzili bo‘lib ishlashini hech kim rasman va’da qilmagan.",
        },
        {
          t: "p",
          text: "«1 900 GRAM’ga sotildi» degan raqam ham dalil emas. Bu gap kanal postlaridan tarqalgan, uni mustaqil tekshirib bo‘lmadi. Bitim haqiqatan bo‘lgan taqdirda ham, sizga taklif qilingan nomni kimdir keyin qimmatroq sotib olishini u ko‘rsatmaydi.",
        },
        {
          t: "p",
          text: "Sotuvchilar ko‘pincha bitta so‘zga suyanadi. Telegram’ning <a href=\"https://core.telegram.org/api/fragment\" target=\"_blank\" rel=\"noopener\">Fragment haqidagi texnik hujjatida</a> «Telegram domains» iborasi uchraydi, lekin u username’lar haqida, .tg zonasi haqida emas. E’londa «Telegram domeni» deb yozilgan bo‘lsa, gap aynan nima haqida ketayotganini aniqlab oling.",
        },
        {
          t: "h2",
          id: "mintdan-oldin-ulgur-degan-shoshiltirish",
          text: "«Mintdan oldin ulgur» degan shoshiltirish nimani anglatadi?",
        },
        {
          t: "p",
          text: "Mint — NFT’ni blokcheynda birinchi marta chiqarish. «Mintdan oldin ol» degani «hali hamma ko‘rmagan, arzon paytda ulgur» degan da’vo. Bunday xabarlarda odatda muddat yaqinligi aytiladi, chatdagi sotuvchi esa «hozir olmasang, ertaga qimmatlashadi» deb qo‘shadi.",
        },
        {
          t: "p",
          text: "Bu bosim usuli. Vaqt cheklovi sizga o‘ylash, klan admini bilan maslahatlashish va tekshirish uchun fursat qoldirmaydi. Halol sotuvchi shoshiltirmaydi.",
        },
        {
          t: "p",
          text: "Oddiy misol. Turnirdan keyin klan chatida notanish a’zo «sardor uchun qisqa nom bor, faqat bizning klanga» deb yozadi va shaxsiy xabarga chaqiradi. Shaxsiyda esa «bron uchun 5 GRAM tashla, qolganini keyin» deydi. Shu ikki qadamning o‘zi yetarli ogohlantirish.",
        },
        {
          t: "p",
          text: "Quyidagi belgilarga e’tibor bering:",
        },
        {
          t: "list",
          items: [
            "sotuvchi umumiy chatdan shaxsiy xabarga o‘tishni so‘raydi;",
            "oldindan GRAM yoki «bron uchun» kichik summa talab qiladi;",
            "«hamyonni faollashtirish» yoki «egalikni tasdiqlash» uchun to‘lov so‘raydi;",
            "seed-ibora, maxfiy kalit yoki Telegram’ga kirish kodini so‘raydi;",
            "savdoni notanish «garant» bot yoki akkaunt orqali o‘tkazishni taklif qiladi;",
            "klan chatiga admin ruxsatisiz havola tashlaydi;",
            "«faqat klan a’zolariga maxsus narx» deb ishontiradi.",
          ],
        },
        {
          t: "p",
          text: "Bularning har biri alohida ogohlantirish. Ikkitasi birga kelsa, suhbatni to‘xtating va klan adminiga xabar bering. Gift savdosidagi shunga o‘xshash sxemalar <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">o‘yin chatidagi gift taklifi</a> haqidagi maqolada yozilgan.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "klan-kanaliga-qanday-manzil-kerak",
          text: "Klan kanaliga qanday manzil kerak: @username, kolleksion username yoki .tg nom?",
        },
        {
          t: "p",
          text: "Klan kanaliga jamoadoshlar oson topadigan va yodda qoladigan manzil kerak. Telegram’da bu vazifani @username bajaradi. Uchala variant yonma-yon:",
        },
        {
          t: "table",
          head: [
            "Variant",
            "Qayerdan olinadi",
            "Telegram’da ishlashi",
            "Egalik nimaga tayanadi",
            "Xavf darajasi",
          ],
          rows: [
            [
              "Oddiy @username",
              "Kanal egasi Telegram’ning o‘zida o‘rnatadi",
              "Kanalning ochiq manzili bo‘ladi",
              "Telegram akkauntingiz",
              "Past: qisqa nom band bo‘lishi mumkin, xolos",
            ],
            [
              "Kolleksion username",
              "Fragment platformasida sotiladi va sotib olinadi",
              "Oddiy @username kabi ishlaydi, global qidiruvda chiqadi",
              "TON blokcheyni, TON hamyon manzili",
              "O‘rtacha: hamyon kaliti yo‘qolsa, Fragment uni tiklay olmaydi",
            ],
            [
              "Uchinchi tomon .tg nomi",
              "GDomains kabi tashqi loyihalar",
              "Rasmiy manbalarda tasdiqlanmagan",
              "Faqat sotuvchining va’dasi",
              "Yuqori",
            ],
          ],
        },
        {
          t: "p",
          text: "Kolleksion username haqidagi ma’lumotlar Telegram’ning <a href=\"https://core.telegram.org/api/fragment\" target=\"_blank\" rel=\"noopener\">texnik hujjatidan</a> olindi. Unga ko‘ra, bunday username’lar Fragment orqali savdo qilinadi va egaligini TON blokcheyni ta’minlaydi.",
        },
        {
          t: "p",
          text: "Ko‘pchilik klanga oddiy @username yetadi. Aynan qisqa, chiroyli manzil kerak bo‘lsa, Telegram bilan bog‘liqligi hujjatda yozilgan yo‘l — Fragment’dagi kolleksion username. .tg nom bu yo‘lga kirmaydi.",
        },
        {
          t: "h2",
          id: "pul-tolashdan-oldin-sotuvchini-qanday",
          text: "Pul to‘lashdan oldin sotuvchini qanday tekshirish mumkin?",
        },
        {
          t: "p",
          text: "Sotuvchi qanchalik ishonchli ko‘rinmasin, tekshiruvni o‘zingiz qiling:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Aniq so‘rang: bu .tg nommi yoki Telegram @username’mi? Javob noaniq bo‘lsa yoki mavzu o‘zgartirilsa, shu yerda to‘xtang.",
            "Username bo‘lsa, uni Fragment’da o‘zingiz qidiring. Chatdagi havolani bosmang, fragment.com manzilini brauzerga qo‘lda yozing.",
            "Savdoni «bot» orqali qilish taklif qilinsa, username’i «bot» bilan tugashini tekshiring. Soxta botlarni ajratish <a href=\"/blog/game-bilan-tugaydigan-donat-boti-tekshirish\">«…game» nomli botlar haqidagi maqolada</a> ko‘rsatilgan.",
            "«Faollashtirish», «tasdiqlash» yoki «bron» uchun GRAM yubormang. Bunday so‘rovlar qanday ishlashi <a href=\"/blog/gram-wallet-faollashtirish-oyinchiga-kerakmi\">GRAM Wallet faollashtirish</a> haqidagi maqolada tushuntirilgan.",
            "Klan admini yoki tajribali jamoadosh bilan maslahatlashing. Bitta savolga ham aniq javob olmasangiz, xariddan voz keching.",
          ],
        },
        {
          t: "p",
          text: "Sotuvchiga beriladigan uchta foydali savol: nom qaysi blokcheyn manzilida turibdi, savdo qaysi platformada o‘tadi va nom Telegram’da qayerda ko‘rinadi. Halol sotuvchi bularga skrinshot emas, tekshirsa bo‘ladigan javob beradi.",
        },
        {
          t: "h2",
          id: "nega-hamyon-kalitini-hech-kimga",
          text: "Nega hamyon kalitini hech kimga bermaslik kerak?",
        },
        {
          t: "p",
          text: "Kolleksiya buyumi kimniki ekanini hamyon manzili belgilaydi. Kalitni qo‘lga kiritgan odam amalda yangi egaga aylanadi.",
        },
        {
          t: "note",
          tone: "info",
          text: "Fragment’ning <a href=\"https://fragment.com/about\" target=\"_blank\" rel=\"noopener\">«How does Fragment work?»</a> sahifasiga ko‘ra, kolleksiya buyumi ochiq TON blokcheynida tegishli manzil egasining mulki sifatida doimiy qayd etiladi. Fragment maxfiy kalitlarni saqlamaydi, shuning uchun hamyonni tiklay olmaydi.",
        },
        {
          t: "p",
          text: "Shu sahifada yana bir foydali gap bor: ega kolleksiya buyumini TON blokcheyni orqali boshqa odamga bepul o‘tkaza oladi. Fragment’dagi savdoda esa 5% platforma komissiyasi va taxminan 1 Gram blokcheyn to‘lovi olinadi.",
        },
        {
          t: "p",
          text: "Shuning uchun quyidagi gaplar shubhali:",
        },
        {
          t: "list",
          items: [
            "«o‘tkazish uchun alohida to‘lov qiling»;",
            "«kalitingni yubor, o‘zim o‘tkazib beraman»;",
            "«egalikni tasdiqlash uchun seed-iborani kiriting».",
          ],
        },
        {
          t: "p",
          text: "«Yordam» yoki «support» nomidan IP manzil va boshqa ma’lumot so‘ralgan holatlar <a href=\"/blog/getgems-ip-bloklash-vpn-oyinchi-xavfsizligi\">Getgems IP bloklash haqidagi maqolada</a> ko‘rib chiqilgan.",
        },
        {
          t: "h2",
          id: "gram-yuborib-qoygan-bolsangiz-nima",
          text: "GRAM yuborib qo‘ygan bo‘lsangiz, nima qilish kerak?",
        },
        {
          t: "p",
          text: "Vahima qilmang, lekin tez harakat qiling:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Sotuvchiga boshqa pul yubormang. «Qaytarib beramiz, faqat komissiyani to‘lang» degan va’da ko‘pincha aldovning ikkinchi bosqichi bo‘ladi.",
            "Yozishmalar, sotuvchining username’i, to‘lov manzili va tranzaksiya skrinshotlarini saqlang.",
            "Seed-ibora yoki kalitni bergan bo‘lsangiz, qolgan aktivlarni darhol yangi hamyonga o‘tkazing. Telegram’da ikki bosqichli tekshiruv parolini yoqing yoki yangilang — tartibi <a href=\"/blog/888-anonim-raqam-oyinchi-akkaunt-himoyasi\">+888 akkauntni himoyalash</a> maqolasida bor.",
            "Sotuvchi akkauntiga Telegram’da shikoyat qiling. Klan adminidan chatdagi xabarni o‘chirishni va boshqalarni ogohlantirishni so‘rang.",
            "«Yo‘qolgan kriptoni qaytaramiz» deydigan xizmatlarga murojaat qilmang. Blokcheynda yuborilgan GRAM’ni qaytarib olish mumkinligi bu maqolada tasdiqlanmagan, bunday «yordamchilar» esa ko‘pincha o‘zi yangi firibgarlik bo‘ladi.",
          ],
        },
        {
          t: "h2",
          id: "klan-byudjetini-nimaga-sarflash-mantiqliroq",
          text: "Klan byudjetini nimaga sarflash mantiqliroq?",
        },
        {
          t: "p",
          text: "Ochiq aytamiz: GemPay .tg nom ham, kolleksion username ham sotmaydi. Lekin klanga haqiqatan foyda beradigan xaridlarni hamyonsiz va so‘mda qilsa bo‘ladi.",
        },
        {
          t: "list",
          items: [
            `<strong>Telegram Stars jamoadoshga.</strong> Bir buyurtmada 50 dan 10 000 tagacha, faqat oluvchining @username’i kerak. Donasi karta o‘tkazmasi yoki bot balansidan ${som(STARS_UNIT_CARD, "uz")}, Click yoki Uzum Bank orqali ${som(STARS_UNIT_ONLINE, "uz")}. Bir necha soniyada tushadi.`,
            `<strong>Telegram Premium klan admini yoki sardorga.</strong> 3 oy — ${som(premium(3), "uz")}, 6 oy — ${som(premium(6), "uz")}, 12 oy — ${som(premium(12), "uz")}. @username bo‘yicha Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi, akkauntga kirilmaydi.`,
            "<strong>UC, olmos va CP.</strong> Faqat Player ID kerak, parol so‘ralmaydi. Nik tekshirib ko‘rsatiladi, siz tasdiqlaganingizdan keyin to‘lanadi. Valyuta odatda 1–5 daqiqada avtomatik tushadi.",
          ],
        },
        {
          t: "p",
          text: "Stars o‘yin valyutasiga aylanmaydi. Jamoadoshga UC kerak bo‘lsa, Stars emas, UC oling. Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi. Hisobga tushgan valyuta esa qaytarilmaydi, shuning uchun ID va username’ni to‘lovdan oldin tekshiring.",
        },
        {
          t: "p",
          text: "Bularning hammasi <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> ichida, UzCard, HUMO, Click, Uzum Bank yoki bot balansi bilan to‘lanadi. Sovg‘ani keyin tashqi bozorga chiqarmoqchi bo‘lsangiz, avval <a href=\"/blog/sovgani-marketpleysga-otkazish-xavfsizmi-oyinchi\">sovg‘ani marketpleysga o‘tkazish xavflari</a> bilan tanishing.",
        },
        {
          t: "sources",
          items: [
            {
              label: "How does Fragment work?",
              href: "https://fragment.com/about",
            },
            {
              label: "Fragment collectibles",
              href: "https://core.telegram.org/api/fragment",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Sotuvchi «@tgdomains_bot orqali nomni o‘zingga yozdir» deyapti. Nima qilay?",
          a: "Bu bot haqida Telegram, Fragment yoki TON’ning rasmiy sahifalarida hech narsa yo‘q. Unga GRAM yubormang va hamyoningizni ulamang.",
        },
        {
          q: "Klan sardori .tg nomni kanalimizga bog‘lab beraman deyapti. Ishonsa bo‘ladimi?",
          a: ".tg nom Telegram kanalining manzili bo‘lib ishlashi rasmiy manbalarda tasdiqlanmagan. Klan kanaliga oddiy @username qo‘ying, juda qisqa nom kerak bo‘lsa — Fragment’dagi kolleksion username’ga qarang.",
        },
        {
          q: "Sotuvchi Getgems’dagi sotuv skrinshotini tashladi. Bu dalil bo‘ladimi?",
          a: "Yo‘q. Skrinshot nom kimdir tomonidan sotuvga qo‘yilganini ko‘rsatadi, xolos — uning Telegram’da ishlashini isbotlamaydi. Skrinshot soxta ham bo‘lishi mumkin.",
        },
        {
          q: "«Garant bot orqali qilamiz» deyishsa, rozi bo‘lsam bo‘ladimi?",
          a: "Klan admini ham tanimaydigan «garant» — firibgarlikning tipik belgisi. Username’i «bot» bilan tugamasa, bu bot emas, oddiy akkaunt.",
        },
        {
          q: "Kolleksion username’ni keyin Fragment’da sotsam, qancha ushlab qolinadi?",
          a: "Fragment sahifasiga ko‘ra, har bir savdodan 5% komissiya va taxminan 1 Gram blokcheyn to‘lovi olinadi. Nomni boshqa odamga o‘tkazishning o‘zi bepul, shuning uchun «o‘tkazish haqi» so‘ralsa, shubhalaning.",
        },
        {
          q: "GemPay orqali klan kanaliga qisqa nom olsa bo‘ladimi?",
          a: "Yo‘q, GemPay domen yoki kolleksion username sotmaydi. Botda jamoadoshlarga Stars, Premium va o‘yin valyutasini so‘mda olish mumkin.",
        },
        {
          q: "Jamoadosh .tg nomni sovg‘a qilmoqchi, lekin «hamyoningni ulab tasdiqla» deyapti. Bu normalmi?",
          a: "Yo‘q. Haqiqiy sovg‘ani olish uchun sizdan to‘lov, seed-ibora yoki notanish saytga hamyon ulash talab qilinmasligi kerak.",
        },
      ],
    },
    ru: {
      title: "Домен .tg предлагают в чате клана: это опасно и нужен ли он каналу?",
      metaTitle: "Домен .tg предлагают в чате клана",
      metaDescription: "Да, опасно: Telegram официально не подтверждал, что имена .tg в нём работают, а каналу клана хватит обычного @username.",
      excerpt: "Да, опасно: Telegram официально не подтверждал, что имена .tg в нём работают, а каналу клана хватит обычного @username. Не шлите GRAM и не отдавайте ключ кошелька.",
      answer: "Да, опасно: Telegram официально не подтверждал, что имена .tg в нём работают, а каналу клана хватит обычного @username. Не шлите GRAM и не отдавайте ключ кошелька.",
      body: [
        {
          t: "h2",
          id: "klan-chatida-kelgan-tg-domen",
          text: "Опасно ли предложение купить домен .tg в чате клана?",
        },
        {
          t: "p",
          text: "Да, риск есть. Допустим, в чат пришло сообщение «prem.tg продали за 1 900 GRAM, успей взять короткое имя до минта». Не отправляйте GRAM, пока не проверите предложение. И не подключайте кошелёк ни к какому сайту.",
        },
        {
          t: "p",
          text: "Причина простая: на официальных страницах Telegram, Fragment и TON нет никаких сведений о GDomains, «reg.tg» и @tgdomains_bot. Называть их официальными проектами нет оснований.",
        },
        {
          t: "p",
          text: "Официальные источники не подтверждают и того, что зона .tg существует внутри Telegram или в блокчейне TON. Значит, никто официально не обещал, что имя вроде «klan.tg» или «prem.tg» станет адресом вашего канала.",
        },
        {
          t: "p",
          text: "Цифра «продали за 1 900 GRAM» тоже ничего не доказывает. Она разошлась по постам в каналах, и проверить её независимо не удалось. Даже если такая сделка была, это не значит, что имя, которое предлагают вам, потом кто-то купит дороже.",
        },
        {
          t: "p",
          text: "Продавцы часто цепляются за одно слово. В <a href=\"https://core.telegram.org/api/fragment\" target=\"_blank\" rel=\"noopener\">технической документации Telegram о Fragment</a> есть выражение «Telegram domains», но речь там об username, а не о зоне .tg. Если в объявлении написано «домен Telegram», уточните, что именно продают.",
        },
        {
          t: "h2",
          id: "mintdan-oldin-ulgur-degan-shoshiltirish",
          text: "Что значит «успей до минта»?",
        },
        {
          t: "p",
          text: "Минт — это первый выпуск NFT в блокчейне. «Бери до минта» означает: «пока не все заметили, успей купить дёшево». В таких сообщениях обычно пишут, что срок вот-вот закончится, а продавец в чате добавляет: «не возьмёшь сейчас — завтра будет дороже».",
        },
        {
          t: "p",
          text: "Так на вас давят. Из-за спешки не остаётся времени подумать, посоветоваться с админом клана и всё проверить. Честный продавец не торопит.",
        },
        {
          t: "p",
          text: "Простой пример. После турнира незнакомый участник пишет в чат клана: «есть короткое имя для капитана, только для нашего клана» — и зовёт в личку. Там он просит: «кинь 5 GRAM за бронь, остальное потом». Уже этих двух шагов хватает, чтобы насторожиться.",
        },
        {
          t: "p",
          text: "Признаки, на которые стоит обратить внимание:",
        },
        {
          t: "list",
          items: [
            "продавец просит перейти из общего чата в личные сообщения;",
            "требует заранее прислать GRAM или небольшую сумму «за бронь»;",
            "просит оплату за «активацию кошелька» или «подтверждение владения»;",
            "спрашивает seed-фразу, приватный ключ или код для входа в Telegram;",
            "предлагает провести сделку через незнакомого бота-«гаранта» или аккаунт;",
            "кидает ссылки в чат клана без разрешения админа;",
            "уверяет, что цена «специальная, только для участников клана».",
          ],
        },
        {
          t: "p",
          text: "Каждый из этих признаков сам по себе тревожный. Если совпали хотя бы два, прекратите разговор и предупредите админа клана. Похожие схемы при торговле подарками разобраны в статье <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">о предложениях купить подарок в игровом чате</a>.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "klan-kanaliga-qanday-manzil-kerak",
          text: "Какой адрес нужен каналу клана: @username, коллекционный username или имя .tg?",
        },
        {
          t: "p",
          text: "Каналу клана нужен адрес, который сокомандники легко найдут и запомнят. В Telegram для этого есть @username. Три варианта рядом:",
        },
        {
          t: "table",
          head: [
            "Вариант",
            "Где взять",
            "Работает ли в Telegram",
            "На чём держится владение",
            "Уровень риска",
          ],
          rows: [
            [
              "Обычный @username",
              "Владелец канала задаёт его прямо в Telegram",
              "Становится публичным адресом канала",
              "Ваш аккаунт Telegram",
              "Низкий: разве что короткое имя может оказаться занято",
            ],
            [
              "Коллекционный username",
              "Покупается и продаётся на платформе Fragment",
              "Работает как обычный @username и находится через глобальный поиск",
              "Блокчейн TON, адрес TON-кошелька",
              "Средний: если ключ от кошелька потерян, Fragment его не восстановит",
            ],
            [
              "Имя .tg от третьей стороны",
              "Сторонние проекты вроде GDomains",
              "В официальных источниках не подтверждено",
              "Только обещание продавца",
              "Высокий",
            ],
          ],
        },
        {
          t: "p",
          text: "Сведения о коллекционных username взяты из <a href=\"https://core.telegram.org/api/fragment\" target=\"_blank\" rel=\"noopener\">технической документации Telegram</a>. Там сказано, что такие username продаются через Fragment, а владение ими обеспечивает блокчейн TON.",
        },
        {
          t: "p",
          text: "Большинству кланов хватит обычного @username. Если нужен именно короткий и красивый адрес, то путь, связь которого с Telegram описана в документации, — коллекционный username на Fragment. Имена .tg к нему не относятся.",
        },
        {
          t: "h2",
          id: "pul-tolashdan-oldin-sotuvchini-qanday",
          text: "Как проверить продавца до оплаты?",
        },
        {
          t: "p",
          text: "Даже если продавец выглядит надёжным, проверьте всё сами:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Спросите прямо: это имя .tg или @username в Telegram? Если ответ размытый или вас уводят от темы, на этом остановитесь.",
            "Если это username, найдите его на Fragment сами. Не нажимайте ссылку из чата: наберите адрес fragment.com в браузере вручную.",
            "Если сделку предлагают провести через «бота», убедитесь, что его username заканчивается на «bot». Как отличить поддельного бота, показано в статье <a href=\"/blog/game-bilan-tugaydigan-donat-boti-tekshirish\">о ботах с именем на «…game»</a>.",
            "Не отправляйте GRAM за «активацию», «подтверждение» или «бронь». Как устроены такие просьбы, объясняется в статье <a href=\"/blog/gram-wallet-faollashtirish-oyinchiga-kerakmi\">об активации GRAM Wallet</a>.",
            "Посоветуйтесь с админом клана или опытным сокомандником. Если хотя бы на один вопрос не получили чёткого ответа, откажитесь от покупки.",
          ],
        },
        {
          t: "p",
          text: "Три полезных вопроса продавцу: на каком адресе в блокчейне лежит имя, на какой платформе пройдёт сделка и где имя будет видно в Telegram. Честный продавец ответит так, чтобы это можно было проверить, а не пришлёт скриншот.",
        },
        {
          t: "h2",
          id: "nega-hamyon-kalitini-hech-kimga",
          text: "Почему нельзя никому отдавать ключ от кошелька?",
        },
        {
          t: "p",
          text: "Кому принадлежит коллекционный предмет, определяет адрес кошелька. Тот, кто получил ключ, по сути становится новым владельцем.",
        },
        {
          t: "note",
          tone: "info",
          text: "На странице Fragment <a href=\"https://fragment.com/about\" target=\"_blank\" rel=\"noopener\">«How does Fragment work?»</a> сказано, что коллекционный предмет навсегда записывается в открытом блокчейне TON как собственность владельца соответствующего адреса. Fragment не хранит приватные ключи, поэтому восстановить кошелёк не может.",
        },
        {
          t: "p",
          text: "На той же странице есть ещё одна полезная деталь: владелец может бесплатно передать коллекционный предмет другому человеку через блокчейн TON. А при продаже на Fragment берётся комиссия платформы 5% и блокчейн-сбор около 1 Gram.",
        },
        {
          t: "p",
          text: "Поэтому такие фразы должны насторожить:",
        },
        {
          t: "list",
          items: [
            "«за передачу нужна отдельная оплата»;",
            "«скинь ключ, я сам всё переведу»;",
            "«введи seed-фразу, чтобы подтвердить владение».",
          ],
        },
        {
          t: "p",
          text: "Случаи, когда от имени «помощи» или «поддержки» просят IP-адрес и другие данные, разобраны в статье <a href=\"/blog/getgems-ip-bloklash-vpn-oyinchi-xavfsizligi\">о блокировке по IP в Getgems</a>.",
        },
        {
          t: "h2",
          id: "gram-yuborib-qoygan-bolsangiz-nima",
          text: "Что делать, если вы уже отправили GRAM?",
        },
        {
          t: "p",
          text: "Без паники, но действуйте быстро:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Больше не отправляйте продавцу денег. Обещание «вернём, только оплати комиссию» — часто второй этап того же обмана.",
            "Сохраните переписку, username продавца, адрес, на который платили, и скриншоты транзакции.",
            "Если вы отдали seed-фразу или ключ, сразу переведите оставшиеся активы в новый кошелёк. В Telegram включите или смените пароль двухэтапной проверки — порядок действий описан в статье <a href=\"/blog/888-anonim-raqam-oyinchi-akkaunt-himoyasi\">о защите аккаунта с номером +888</a>.",
            "Пожалуйтесь в Telegram на аккаунт продавца. Попросите админа клана удалить сообщение из чата и предупредить остальных.",
            "Не обращайтесь в сервисы, которые обещают «вернуть потерянную крипту». В этой статье не подтверждено, что отправленные в блокчейне GRAM можно вернуть, а такие «помощники» часто сами оказываются новой схемой обмана.",
          ],
        },
        {
          t: "h2",
          id: "klan-byudjetini-nimaga-sarflash-mantiqliroq",
          text: "На что разумнее тратить бюджет клана?",
        },
        {
          t: "p",
          text: "Скажем честно: GemPay не продаёт ни имена .tg, ни коллекционные username. Но покупки, которые реально пригодятся клану, можно сделать без кошелька и в сумах.",
        },
        {
          t: "list",
          items: [
            `<strong>Telegram Stars для сокомандника.</strong> От 50 до 10 000 штук в одном заказе, нужен только @username получателя. Цена за штуку — ${som(STARS_UNIT_CARD, "ru")} при оплате переводом с карты или с баланса бота, ${som(STARS_UNIT_ONLINE, "ru")} через Click или Uzum Bank. Звёзды приходят за несколько секунд.`,
            `<strong>Telegram Premium для админа или капитана клана.</strong> 3 месяца — ${som(premium(3), "ru")}, 6 месяцев — ${som(premium(6), "ru")}, 12 месяцев — ${som(premium(12), "ru")}. Подключается по @username через официальный механизм подарков Telegram, входить в аккаунт не нужно.`,
            "<strong>UC, алмазы и CP.</strong> Нужен только Player ID, пароль не спрашивают. Бот проверяет и показывает ник, оплата — после вашего подтверждения. Валюта обычно приходит автоматически за 1–5 минут.",
          ],
        },
        {
          t: "p",
          text: "Stars не превращаются в игровую валюту. Если сокоманднику нужны UC, берите UC, а не Stars. Если заказ не выполнен, деньги полностью вернут в течение 3 рабочих дней. Валюту, которая уже пришла на счёт, не возвращают, поэтому проверяйте ID и username до оплаты.",
        },
        {
          t: "p",
          text: "Всё это есть в <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>. Оплатить можно картой UzCard или HUMO, через Click, Uzum Bank или с баланса бота. Если потом захотите вывести подарок на внешний рынок, сначала прочитайте <a href=\"/blog/sovgani-marketpleysga-otkazish-xavfsizmi-oyinchi\">о рисках переноса подарка на маркетплейс</a>.",
        },
        {
          t: "sources",
          items: [
            {
              label: "How does Fragment work?",
              href: "https://fragment.com/about",
            },
            {
              label: "Fragment collectibles",
              href: "https://core.telegram.org/api/fragment",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Продавец говорит: «оформи имя на себя через @tgdomains_bot». Что делать?",
          a: "На официальных страницах Telegram, Fragment и TON об этом боте ничего нет. Не отправляйте ему GRAM и не подключайте свой кошелёк.",
        },
        {
          q: "Капитан клана обещает привязать имя .tg к нашему каналу. Можно ему верить?",
          a: "Официальные источники не подтверждают, что имя .tg может работать как адрес канала в Telegram. Поставьте каналу обычный @username, а если нужно совсем короткое имя, посмотрите коллекционные username на Fragment.",
        },
        {
          q: "Продавец прислал скриншот продажи на Getgems. Это доказательство?",
          a: "Нет. Скриншот показывает только то, что кто-то выставил имя на продажу. Работает ли оно в Telegram, он не доказывает, к тому же картинку легко подделать.",
        },
        {
          q: "Предлагают провести сделку «через бота-гаранта». Соглашаться?",
          a: "«Гарант», которого не знает даже админ клана, — типичный признак мошенничества. Если его username не заканчивается на «bot», это не бот, а обычный аккаунт.",
        },
        {
          q: "Сколько удержат, если я потом продам коллекционный username на Fragment?",
          a: "По данным Fragment, с каждой продажи берут комиссию 5% и блокчейн-сбор около 1 Gram. Передать имя другому человеку можно бесплатно, так что просьба оплатить «перевод» должна насторожить.",
        },
        {
          q: "Можно ли через GemPay купить короткое имя для канала клана?",
          a: "Нет, GemPay не продаёт домены и коллекционные username. В боте за сумы можно купить сокомандникам Stars, Premium и игровую валюту.",
        },
        {
          q: "Сокомандник хочет подарить мне имя .tg, но просит «подключить кошелёк для подтверждения». Это нормально?",
          a: "Нет. Чтобы принять настоящий подарок, не нужно ничего платить, называть seed-фразу или подключать кошелёк к незнакомому сайту.",
        },
      ],
    },
  },
};

export default article;
