// Avtoblogyoz yasagan maqola (2026-11-07). Niyat: Kanalda GRAM hamyonni sovg‘alar bilan bezash konseptini ko‘rgan o‘yinchi «gram hamyon bezash» deb qidiradi va bu funksiya rasmiymi, jamoadoshga sovg‘a yoki Stars olish rejasini o‘zgartiradimi, hamyon o‘yinchiga kerakmi — shuni bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://ton.org/
//   https://telegram.org/blog/wear-gifts-blockchain-and-more
//   https://telegram.org/blog/profile-music-gift-themes
//   https://telegram.org/blog/welcome-messages-buttons-TG-13

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "gram-hamyon-bezash-konsepti-oyinchi",
  game: null,
  type: "info",
  datePublished: "2026-11-07",
  dateModified: "2026-11-07",
  keywords: ["gram hamyon bezash","gram wallet sovg'a bezash","telegram hamyon kartasi rangi","gram wallet nima","telegram sovg'a profil bezash","gram toncoin farqi","кастомизация gram кошелька подарками","украсить кошелек подарками телеграм","gram wallet телеграм","концепт кошелька Туберг","подарки телеграм TON NFT"],
  locales: {
    uz: {
      title: "Gram hamyon bezash: o‘yinchi Stars va sovg‘a rejasini o‘zgartirsinmi?",
      metaTitle: "Gram hamyon bezash: o‘yinchi Stars",
      metaDescription: "Yo‘q, Gram hamyonni sovg‘alar bilan bezash rasman e’lon qilinmagan, bu kanaldagi konsept. Stars, Premium va donat olish uchun hamyon kerak emas.",
      excerpt: "Yo‘q, Gram hamyonni sovg‘alar bilan bezash rasman e’lon qilinmagan, bu kanaldagi konsept. Stars, Premium va donat olish uchun hamyon kerak emas.",
      answer: "Yo‘q, Gram hamyonni sovg‘alar bilan bezash rasman e’lon qilinmagan, bu kanaldagi konsept. Stars, Premium va donat olish uchun hamyon kerak emas.",
      body: [
        {
          t: "p",
          text: "Kanalda Gram hamyon kartasi kolleksion sovg‘a bilan bezalgan rasmni ko‘rgan bo‘lsangiz, xarid qilishga shoshilmang. Telegram ham, TON ham bunday funksiyani rasman e’lon qilmagan. Uning chiqish sanasi ham yo‘q. Jamoadoshga sovg‘a berish, Stars yoki Premium olish tartibi avvalgidek qoladi.",
        },
        {
          t: "h2",
          id: "kanaldagi-hamyon-bezagi-oyinchi-uchun",
          text: "Kanaldagi hamyon bezagi o‘yinchi uchun hozir nimani o‘zgartiradi?",
        },
        {
          t: "p",
          text: "Hozircha hech narsani. Gram Wallet kartasini sovg‘alar bilan bezash haqida rasmiy e’lon topilmadi. G‘oya Telegram kanalidagi postdan tarqalgan. Konseptni kim chizgani va u Telegram nomidan gapiradimi, bu maqolada tasdiqlanmagan.",
        },
        {
          t: "p",
          text: "Hamyonning o‘zi esa haqiqatda bor. <a href=\"https://ton.org/\" target=\"_blank\" rel=\"noopener\">TON saytida</a> yozilishicha, Telegram jamoasi yaratgan Gram Wallet messenjer interfeysiga o‘rnatilgan. U foydalanuvchining o‘zi boshqaradigan (non-custodial) hamyon. Unda bir-biringizga mablag‘ o‘tkazish, botlar va mini-ilovalar bilan ishlash mumkin.",
        },
        {
          t: "p",
          text: "O‘yinchi uchun amaliy xulosa shunday:",
        },
        {
          t: "list",
          items: [
            "klandoshga sovg‘a hozir ham profil va shaxsiy chat uchun beriladi;",
            "Stars va Premium hamon @username bo‘yicha olinadi;",
            "UC, olmos va CP o‘yin akkauntiga Player ID bo‘yicha tushadi.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Funksiya qachon chiqishi haqida rasmiy ma’lumot yo‘q. «Tez orada chiqadi» degan gapga qarab sovg‘a yoki Stars zaxira qilmang.",
        },
        {
          t: "h2",
          id: "gram-wallet-donat-qiladigan-oyinchiga",
          text: "Gram Wallet donat qiladigan o‘yinchiga kerakmi?",
        },
        {
          t: "p",
          text: "Donat uchun kerak emas. Gram TON blockchainining asosiy tangasi, u ilgari Toncoin deb ham atalgan (<a href=\"https://ton.org/\" target=\"_blank\" rel=\"noopener\">ton.org</a>). Ya’ni Gram kripto tanga, Gram Wallet esa uni saqlaydigan va o‘tkazadigan hamyon.",
        },
        {
          t: "p",
          text: "O‘yinchi odatda bir nechta «pul» bilan ishlaydi. Ular bir-biriga o‘xshab ko‘rinadi, lekin har biri boshqa joyda turadi:",
        },
        {
          t: "table",
          head: [
            "Valyuta",
            "Qayerda turadi",
            "Qanday olinadi",
            "O‘yinchiga nima beradi",
          ],
          rows: [
            [
              "UC, olmos, CP",
              "O‘yin akkauntida",
              "So‘mda, Player ID bo‘yicha",
              "Skin, pass, o‘yin ichidagi xaridlar",
            ],
            [
              "Telegram Stars",
              "Telegram akkauntida",
              "So‘mda, @username bo‘yicha",
              "Telegram ichidagi to‘lovlar",
            ],
            [
              "Telegram Premium",
              "Telegram akkauntida",
              "So‘mda, @username bo‘yicha",
              "Obuna, o‘yin valyutasi emas",
            ],
            [
              "Gram",
              "TON blockchainida, hamyonda",
              "Kripto tanga sifatida",
              "Donat uchun shart emas",
            ],
          ],
        },
        {
          t: "p",
          text: "Bu valyutalar o‘zaro avtomatik almashmaydi. Stars o‘yin valyutasiga aylanmaydi: yulduzlar bilan PUBG UC yoki Mobile Legends olmosini to‘ldirib bo‘lmaydi. Qaysi valyuta qaysi vaziyatda kerakligi <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">Stars, UC, olmos va Steam balansi taqqoslovida</a> batafsil yozilgan.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "stars-premium-va-oyin-valyutasini",
          text: "Stars, Premium va o‘yin valyutasini hamyonsiz qanday olasiz?",
        },
        {
          t: "p",
          text: "GemPay’da hammasi so‘mda olinadi. To‘lov UzCard, HUMO, Click, Uzum Bank yoki bot balansidan o‘tadi, Rossiyadan SBP orqali to‘lash mumkin. Xorijiy karta, VPN, kripto yoki Gram Wallet talab qilinmaydi. Visa va Mastercard qabul qilinmaydi.",
        },
        {
          t: "table",
          head: [
            "Xarid",
            "Nima so‘raladi",
            "Narx",
            "Hamyon kerakmi",
          ],
          rows: [
            [
              "Telegram Stars",
              "@username, bir buyurtmada 50 dan 10 000 tagacha",
              `1 tasi ${som(STARS_UNIT_CARD, "uz")} (karta yoki balans), ${som(STARS_UNIT_ONLINE, "uz")} (Click yoki Uzum Bank)`,
              "Yo‘q",
            ],
            [
              "Premium 3 oy",
              "@username",
              `${som(premium(3), "uz")}`,
              "Yo‘q",
            ],
            [
              "Premium 6 oy",
              "@username",
              `${som(premium(6), "uz")}`,
              "Yo‘q",
            ],
            [
              "Premium 12 oy",
              "@username",
              `${som(premium(12), "uz")}`,
              "Yo‘q",
            ],
            [
              "UC, olmos, CP",
              "Player ID",
              "Botda ko‘rsatiladi",
              "Yo‘q",
            ],
          ],
        },
        {
          t: "p",
          text: "Bilib qo‘yish kerak bo‘lgan tafsilotlar:",
        },
        {
          t: "list",
          items: [
            "Stars odatda bir necha soniyada tushadi. Username’ni @ belgisi bilan, xatosiz yozing: yulduzlar aynan shu akkauntga boradi.",
            "Premium Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi, akkauntga kirilmaydi. Narx barcha to‘lov usullarida bir xil, 1 oylik tarif yo‘q.",
            "O‘yin valyutasi uchun faqat Player ID kerak. Bot nikni tekshirib ko‘rsatadi, siz tasdiqlaganingizdan keyin to‘lov qilinadi. Valyuta 1–5 daqiqada avtomatik tushadi.",
            "Parol hech qachon so‘ralmaydi.",
          ],
        },
        {
          t: "p",
          text: "Hamyonning o‘yinchiga umuman keragi bormi degan savolga <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">Telegram Wallet o‘yinchiga kerakmi</a> maqolasi alohida javob beradi.",
        },
        {
          t: "h2",
          id: "klandoshga-beriladigan-sovga-bugun-nimaga",
          text: "Klandoshga beriladigan sovg‘a bugun nimaga yaraydi?",
        },
        {
          t: "p",
          text: "Hamyon kartasini bezamaydi, lekin profil va shaxsiy chatni bezaydi. Ikkalasi ham rasmiy Telegram blogida tasdiqlangan:",
        },
        {
          t: "list",
          items: [
            "<strong>Profil statusi.</strong> Kolleksion sovg‘a status qilib qo‘yilsa, unga yaltiroq yulduz effekti qo‘shiladi. Profil esa sovg‘aning fon rangi va belgisiga moslashadi (<a href=\"https://telegram.org/blog/wear-gifts-blockchain-and-more\" target=\"_blank\" rel=\"noopener\">Telegram blogi</a>).",
            "<strong>Shaxsiy chat mavzusi.</strong> Sovg‘a egasi uning asosidagi dinamik fonni istalgan shaxsiy chatga mavzu qilib qo‘ya oladi (<a href=\"https://telegram.org/blog/profile-music-gift-themes\" target=\"_blank\" rel=\"noopener\">Telegram blogi</a>). Mavzu sovg‘aning modeli va fonidan yasaladi.",
            "<strong>Bitta sovg‘a — bitta chat.</strong> Bitta sovg‘a faqat bitta chat uchun bitta mavzuni ochadi.",
            "<strong>Imzoli sovg‘a.</strong> Telegram Marketplace orqali yuborilgan sovg‘aga izoh qo‘shish mumkin, bu funksiya Signed Gifts deb ataladi (<a href=\"https://telegram.org/blog/welcome-messages-buttons-TG-13\" target=\"_blank\" rel=\"noopener\">Telegram blogi</a>).",
          ],
        },
        {
          t: "p",
          text: "Misol. Squad turnirda g‘alaba qozondi va siz sardorga kolleksion sovg‘a berdingiz. U sovg‘ani profil statusiga qo‘yishi yoki siz bilan shaxsiy chatini shu sovg‘a fonida bezashi mumkin. Agar sardor to‘rt jamoadoshi bilan alohida chatlarini bezamoqchi bo‘lsa, bitta sovg‘a yetmaydi: har bir chatga alohida sovg‘a kerak. Klan guruhi chatiga sovg‘a mavzusini qo‘yish rasmiy manbada aytilmagan, blogda faqat shaxsiy chatlar tilga olingan.",
        },
        {
          t: "p",
          text: "Shuning uchun sovg‘ani tanlashda hamyon bezagiga emas, sardorning profiliga qaysi model va fon mos tushishiga qarang.",
        },
        {
          t: "h2",
          id: "kolleksion-sovga-blockchainga-chiqsa-oyinchi",
          text: "Kolleksion sovg‘a blockchainga chiqsa, o‘yinchi nimani yutadi va nimani xavf qiladi?",
        },
        {
          t: "p",
          text: "Sovg‘aning kripto bilan rasmiy aloqasi bezakka emas, egalikka tegishli. <a href=\"https://ton.org/\" target=\"_blank\" rel=\"noopener\">ton.org</a> ma’lumotiga ko‘ra, Telegram sovg‘alarini TON asosidagi NFTga aylantirish mumkin. Telegram blogida kolleksion sovg‘alarni TON blockchaini orqali boshqa egaga o‘tkazish yoki auksionga qo‘yish mumkinligi aytilgan (<a href=\"https://telegram.org/blog/wear-gifts-blockchain-and-more\" target=\"_blank\" rel=\"noopener\">Telegram blogi</a>).",
        },
        {
          t: "p",
          text: "O‘yinchi uchun bu shuni anglatadi:",
        },
        {
          t: "list",
          items: [
            "<strong>Yutuq:</strong> sovg‘ani sotish yoki boshqa egaga berish imkoni bor.",
            "<strong>Xavf:</strong> sovg‘a Telegram’dan tashqariga chiqqach, uning taqdiri siz tanlagan platformaga bog‘liq bo‘lib qoladi.",
          ],
        },
        {
          t: "p",
          text: "NFTga aylantirish va hamyon kartasini bezash ikki xil narsa. Birinchisi rasman ishlaydi, ikkinchisi faqat kanaldagi konsept.",
        },
        {
          t: "p",
          text: "Sovg‘ani tashqi marketpleysga chiqarishni o‘ylayotgan bo‘lsangiz, avval <a href=\"/blog/sovgani-marketpleysga-otkazish-xavfsizmi-oyinchi\">sovg‘ani marketpleysga o‘tkazish xavflari</a> haqidagi maqolani o‘qing. Sovg‘adagi yuboruvchi ma’lumotlarini qanday olib tashlash mumkinligi <a href=\"/blog/nft-sovga-imzosi-stars-oyinchi\">NFT sovg‘a imzosi</a> maqolasida tushuntirilgan.",
        },
        {
          t: "h2",
          id: "konsept-haqida-eshitgach-xarid-rejasini",
          text: "Konsept haqida eshitgach, xarid rejasini qanday tuzish kerak?",
        },
        {
          t: "p",
          text: "Rasmiy e’lon chiqmaguncha, bugungi ehtiyojga qarab harakat qiling:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Yangilikni manbada tekshiring: <a href=\"https://telegram.org/blog\" target=\"_blank\" rel=\"noopener\">Telegram blogi</a> yoki <a href=\"https://ton.org/\" target=\"_blank\" rel=\"noopener\">ton.org</a>. Faqat kanal posti bo‘lsa, uni tasdiqlanmagan gap deb hisoblang.",
            "Nima uchun xarid qilayotganingizni aniqlang: klandoshni tabriklash, Premium funksiyalari yoki o‘yin ichidagi narsa.",
            "Sovg‘a kerak bo‘lsa, uni hozir ishlaydigan narsa uchun tanlang: profil statusi yoki shaxsiy chat mavzusi.",
            "Stars yoki Premium kerak bo‘lsa, ularni @username bo‘yicha so‘mda oling. Hamyon ulash shart emas.",
            "Hamyon bezagi uchun sovg‘a yoki Stars zaxira qilmang. Funksiya chiqqan taqdirda ham qaysi sovg‘alar unga mos kelishi, narxi bor-yo‘qligi noma’lum.",
          ],
        },
        {
          t: "p",
          text: "Beshinchi qadam oddiy, lekin aynan shu yerda pul behuda ketadi. Konsept rasmidagi sovg‘a keyin ishlashi hech qayerda va’da qilinmagan.",
        },
        {
          t: "p",
          text: "Telegram beta versiyalari atrofidagi boshqa mish-mishlar <a href=\"/blog/telegram-beta-balans-qr-kod-oyinchi\">beta yangi funksiyalari va klanga Stars berish</a> maqolasida ko‘rib chiqilgan. U yerdagi xulosa ham shunday: rasmiy tasdiq bo‘lmaguncha jamoadoshga Stars va Premium berish tartibi o‘zgarmaydi.",
        },
        {
          t: "h2",
          id: "hamyonni-bezab-beramiz-degan-bot",
          text: "«Hamyonni bezab beramiz» degan bot yoki xabarni qanday ajratasiz?",
        },
        {
          t: "p",
          text: "Mashhur bo‘lgan konsept nomidan «bezakni hoziroq yoqib beramiz» degan takliflar chiqishi mumkin. Mana bu belgilarga qarang:",
        },
        {
          t: "list",
          items: [
            "<strong>Seed-fraza, kod yoki parol so‘rash.</strong> Non-custodial hamyonni faqat siz boshqarasiz. Maxfiy so‘zlarni yoki Telegram’dan kelgan kodni olgan odam hamyon va akkauntni o‘zi boshqara oladi.",
            "<strong>«Oldindan faollashtirish» uchun to‘lov.</strong> E’lon qilinmagan funksiyani hech kim pulga ochib bera olmaydi.",
            "<strong>Notanish bot yoki havola.</strong> Telegram’ning o‘z funksiyasini ishlatish uchun uchinchi tomon botiga kirish shart emas.",
            "<strong>Soxta bot nomi.</strong> Telegram’da har bir bot username’i «bot» bilan tugaydi. Buni qanday tekshirish <a href=\"/blog/game-bilan-tugaydigan-donat-boti-tekshirish\">«…game» bilan tugaydigan donat boti</a> maqolasida ko‘rsatilgan.",
          ],
        },
        {
          t: "p",
          text: "GemPay boti <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> parol, kod yoki seed-fraza so‘ramaydi. Stars va Premium uchun faqat @username, o‘yin valyutasi uchun faqat Player ID kerak. Buyurtma bo‘yicha savol bo‘lsa, <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>’ga buyurtma raqami bilan yozing. Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi. Hisobga tushgan valyuta esa qaytarilmaydi.",
        },
        {
          t: "p",
          text: "GemPay mustaqil xizmat va Telegram bilan hamkorlik da’vo qilmaydi. Hamyon bezagi rasman chiqadimi yoki yo‘qmi, buni faqat Telegram yoki TON e’lonidan bilasiz.",
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
              label: "Music on Profiles, Stickers Mini App, New Profiles, and More",
              href: "https://telegram.org/blog/profile-music-gift-themes",
            },
            {
              label: "Welcome Messages, Buttons in Messages and Signed Gifts",
              href: "https://telegram.org/blog/welcome-messages-buttons-TG-13",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Jamoadoshimda Gram Wallet yo‘q. Unga Premium sovg‘a qilsam yetib boradimi?",
          a: "Ha, Premium uning @username’i bo‘yicha Telegram’ning sovg‘a mexanizmi orqali ulanadi. Na sizga, na jamoadoshingizga hamyon kerak bo‘ladi.",
        },
        {
          q: "Hamyon bezagi chiqishiga ishonib, Stars’ni oldindan ko‘proq olib qo‘ysam bo‘ladimi?",
          a: "Bunga hojat yo‘q: funksiya e’lon qilinmagan, unda Stars ishlatilishi ham noma’lum. Stars’ni aniq ehtiyoj paydo bo‘lganda oling, ular odatda bir necha soniyada tushadi.",
        },
        {
          q: "Stars’ni UC yoki Gram’ga aylantirsa bo‘ladimi?",
          a: "GemPay’da olingan Stars o‘yin valyutasiga aylanmaydi. UC alohida, Player ID bo‘yicha olinadi. Stars’ni Gram’ga almashtirish bu maqolada ko‘rib chiqilmagan.",
        },
        {
          q: "Bitta kolleksion sovg‘a bilan butun squad bilan chatlarimni bezay olamanmi?",
          a: "Yo‘q. Telegram qoidasiga ko‘ra bitta sovg‘a faqat bitta shaxsiy chat uchun bitta mavzuni ochadi, shuning uchun har bir chatga alohida sovg‘a kerak.",
        },
        {
          q: "Klan guruhi chatiga sovg‘a fonini qo‘ysa bo‘ladimi?",
          a: "Telegram blogida sovg‘a mavzulari faqat shaxsiy chatlar uchun e’lon qilingan. Guruhlar uchun bunday imkoniyat rasmiy tasdiqlanmagan.",
        },
        {
          q: "«Hamyon bezagini yoqib beraman» degan bot SMS kodni so‘rayapti. Nima qilay?",
          a: "Kodni bermang va suhbatni to‘xtating: kodni olgan odam akkauntingizga kira oladi. E’lon qilinmagan funksiyani hech qanday bot yoqib bera olmaydi.",
        },
      ],
    },
    ru: {
      title: "Gram-кошелёк с подарками: стоит ли игроку менять план на Stars и подарки?",
      metaTitle: "Gram-кошелёк с подарками: стоит ли игроку менять план на",
      metaDescription: "Нет: оформление Gram-кошелька подарками официально не анонсировано, это концепт из канала. Для Stars, Premium и доната кошелёк не нужен.",
      excerpt: "Нет: оформление Gram-кошелька подарками официально не анонсировано, это концепт из канала. Для Stars, Premium и доната кошелёк не нужен.",
      answer: "Нет: оформление Gram-кошелька подарками официально не анонсировано, это концепт из канала. Для Stars, Premium и доната кошелёк не нужен.",
      body: [
        {
          t: "p",
          text: "Если вы видели в канале картинку с карточкой Gram-кошелька, оформленной коллекционным подарком, не спешите с покупками. Ни Telegram, ни TON такую функцию официально не анонсировали, даты выхода тоже нет. Подарки тиммейтам, Stars и Premium покупаются так же, как раньше.",
        },
        {
          t: "h2",
          id: "kanaldagi-hamyon-bezagi-oyinchi-uchun",
          text: "Что оформление кошелька из канала меняет для игрока прямо сейчас?",
        },
        {
          t: "p",
          text: "Пока ничего. Официального объявления о том, что карточку Gram Wallet можно будет украсить подарками, найти не удалось. Идея разошлась из поста в Telegram-канале. Кто нарисовал концепт и говорит ли он от имени Telegram, в этой статье не подтверждено.",
        },
        {
          t: "p",
          text: "Сам кошелёк при этом существует. По данным <a href=\"https://ton.org/\" target=\"_blank\" rel=\"noopener\">сайта TON</a>, Gram Wallet от команды Telegram встроен в интерфейс мессенджера. Это некастодиальный (non-custodial) кошелёк: им управляет сам пользователь. В нём можно переводить средства друг другу, работать с ботами и мини-приложениями.",
        },
        {
          t: "p",
          text: "Практический вывод для игрока:",
        },
        {
          t: "list",
          items: [
            "подарок соклановцу по-прежнему работает для профиля и личного чата;",
            "Stars и Premium всё так же покупаются по @username;",
            "UC, алмазы и CP зачисляются на игровой аккаунт по Player ID.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Официальной информации о сроках выхода функции нет. Не запасайтесь подарками или Stars только потому, что кто-то написал «скоро выйдет».",
        },
        {
          t: "h2",
          id: "gram-wallet-donat-qiladigan-oyinchiga",
          text: "Нужен ли Gram Wallet игроку, который донатит?",
        },
        {
          t: "p",
          text: "Для доната — нет. Gram — основная монета блокчейна TON, раньше её также называли Toncoin (<a href=\"https://ton.org/\" target=\"_blank\" rel=\"noopener\">ton.org</a>). То есть Gram — это криптомонета, а Gram Wallet — кошелёк, где она хранится и откуда переводится.",
        },
        {
          t: "p",
          text: "Игрок обычно имеет дело с несколькими «валютами». Они похожи, но каждая живёт в своём месте:",
        },
        {
          t: "table",
          head: [
            "Валюта",
            "Где хранится",
            "Как покупается",
            "Что даёт игроку",
          ],
          rows: [
            [
              "UC, алмазы, CP",
              "На игровом аккаунте",
              "В сумах, по Player ID",
              "Скины, пропуски, покупки в игре",
            ],
            [
              "Telegram Stars",
              "На аккаунте Telegram",
              "В сумах, по @username",
              "Оплата внутри Telegram",
            ],
            [
              "Telegram Premium",
              "На аккаунте Telegram",
              "В сумах, по @username",
              "Подписка, не игровая валюта",
            ],
            [
              "Gram",
              "В блокчейне TON, в кошельке",
              "Как криптомонета",
              "Для доната не обязателен",
            ],
          ],
        },
        {
          t: "p",
          text: "Автоматически друг в друга эти валюты не обмениваются. Stars не превращаются в игровую валюту: пополнить ими UC в PUBG или алмазы в Mobile Legends нельзя. Какая валюта нужна в какой ситуации, подробно разобрано в <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">сравнении Stars, UC, алмазов и баланса Steam</a>.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "stars-premium-va-oyin-valyutasini",
          text: "Как купить Stars, Premium и игровую валюту без кошелька?",
        },
        {
          t: "p",
          text: "В GemPay всё покупается в сумах. Оплата проходит через UzCard, HUMO, Click, Uzum Bank или с баланса бота, из России можно платить через СБП. Иностранная карта, VPN, криптовалюта или Gram Wallet не нужны. Visa и Mastercard не принимаются.",
        },
        {
          t: "table",
          head: [
            "Покупка",
            "Что нужно указать",
            "Цена",
            "Нужен ли кошелёк",
          ],
          rows: [
            [
              "Telegram Stars",
              "@username, от 50 до 10 000 за один заказ",
              `1 звезда — ${som(STARS_UNIT_CARD, "ru")} (карта или баланс), ${som(STARS_UNIT_ONLINE, "ru")} (Click или Uzum Bank)`,
              "Нет",
            ],
            [
              "Premium на 3 месяца",
              "@username",
              `${som(premium(3), "ru")}`,
              "Нет",
            ],
            [
              "Premium на 6 месяцев",
              "@username",
              `${som(premium(6), "ru")}`,
              "Нет",
            ],
            [
              "Premium на 12 месяцев",
              "@username",
              `${som(premium(12), "ru")}`,
              "Нет",
            ],
            [
              "UC, алмазы, CP",
              "Player ID",
              "Указана в боте",
              "Нет",
            ],
          ],
        },
        {
          t: "p",
          text: "Детали, которые стоит знать заранее:",
        },
        {
          t: "list",
          items: [
            "Stars обычно приходят за несколько секунд. Пишите username со знаком @ и без опечаток: звёзды уйдут именно на этот аккаунт.",
            "Premium подключается через официальный механизм подарков Telegram, входить в аккаунт не нужно. Цена одинакова для всех способов оплаты, тарифа на 1 месяц нет.",
            "Для игровой валюты нужен только Player ID. Бот проверяет и показывает ник, оплата идёт после вашего подтверждения. Валюта зачисляется автоматически за 1–5 минут.",
            "Пароль не запрашивается никогда.",
          ],
        },
        {
          t: "p",
          text: "Нужен ли игроку кошелёк вообще, отдельно разобрано в статье <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">нужен ли Telegram Wallet игроку</a>.",
        },
        {
          t: "h2",
          id: "klandoshga-beriladigan-sovga-bugun-nimaga",
          text: "Что сегодня даёт подарок соклановцу?",
        },
        {
          t: "p",
          text: "Карточку кошелька он не украшает, зато оформляет профиль и личный чат. Оба варианта подтверждены в официальном блоге Telegram:",
        },
        {
          t: "list",
          items: [
            "<strong>Статус в профиле.</strong> Если поставить коллекционный подарок в статус, он получает эффект мерцающей звезды, а профиль подстраивается под фон и символ подарка (<a href=\"https://telegram.org/blog/wear-gifts-blockchain-and-more\" target=\"_blank\" rel=\"noopener\">блог Telegram</a>).",
            "<strong>Тема личного чата.</strong> Владелец подарка может установить динамические обои на его основе как тему в любом личном чате (<a href=\"https://telegram.org/blog/profile-music-gift-themes\" target=\"_blank\" rel=\"noopener\">блог Telegram</a>). Тема собирается из модели и фона подарка.",
            "<strong>Один подарок — один чат.</strong> Один подарок открывает одну тему только для одного чата.",
            "<strong>Подписанный подарок.</strong> К подарку, отправленному через Telegram Marketplace, можно добавить комментарий — функция называется Signed Gifts (<a href=\"https://telegram.org/blog/welcome-messages-buttons-TG-13\" target=\"_blank\" rel=\"noopener\">блог Telegram</a>).",
          ],
        },
        {
          t: "p",
          text: "Пример. Ваш сквад выиграл турнир, и вы подарили капитану коллекционный подарок. Он может поставить его в статус профиля или оформить им ваш с ним личный чат. Если капитан захочет оформить отдельные чаты с четырьмя тиммейтами, одного подарка не хватит: на каждый чат нужен свой. Возможность поставить тему подарка в групповой чат клана в официальных источниках не упоминается — в блоге речь только о личных чатах.",
        },
        {
          t: "p",
          text: "Поэтому, выбирая подарок, думайте не об оформлении кошелька, а о том, какие модель и фон подойдут к профилю капитана.",
        },
        {
          t: "h2",
          id: "kolleksion-sovga-blockchainga-chiqsa-oyinchi",
          text: "Коллекционный подарок уходит в блокчейн: что игрок выигрывает и чем рискует?",
        },
        {
          t: "p",
          text: "Официальная связь подарков с криптой касается не оформления, а владения. По данным <a href=\"https://ton.org/\" target=\"_blank\" rel=\"noopener\">ton.org</a>, подарки Telegram можно превратить в NFT на базе TON. В блоге Telegram сказано, что коллекционные подарки можно передать другому владельцу или выставить на аукцион через блокчейн TON (<a href=\"https://telegram.org/blog/wear-gifts-blockchain-and-more\" target=\"_blank\" rel=\"noopener\">блог Telegram</a>).",
        },
        {
          t: "p",
          text: "Для игрока это значит:",
        },
        {
          t: "list",
          items: [
            "<strong>Плюс:</strong> подарок можно продать или передать другому человеку.",
            "<strong>Риск:</strong> как только подарок покидает Telegram, его судьба зависит от выбранной вами платформы.",
          ],
        },
        {
          t: "p",
          text: "Превращение в NFT и оформление карточки кошелька — разные вещи. Первое официально работает, второе пока лишь концепт из канала.",
        },
        {
          t: "p",
          text: "Если думаете вывести подарок на внешний маркетплейс, сначала прочитайте о <a href=\"/blog/sovgani-marketpleysga-otkazish-xavfsizmi-oyinchi\">рисках перевода подарка на маркетплейс</a>. Как убрать с подарка данные отправителя, объясняется в статье про <a href=\"/blog/nft-sovga-imzosi-stars-oyinchi\">подпись NFT-подарка</a>.",
        },
        {
          t: "h2",
          id: "konsept-haqida-eshitgach-xarid-rejasini",
          text: "Как спланировать покупки, если услышали о концепте?",
        },
        {
          t: "p",
          text: "Пока нет официального анонса, ориентируйтесь на сегодняшние задачи:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Проверьте новость в первоисточнике: <a href=\"https://telegram.org/blog\" target=\"_blank\" rel=\"noopener\">блог Telegram</a> или <a href=\"https://ton.org/\" target=\"_blank\" rel=\"noopener\">ton.org</a>. Если есть только пост в канале, считайте его неподтверждённым.",
            "Определите, зачем вы покупаете: поздравить соклановца, получить функции Premium или что-то внутри игры.",
            "Если нужен подарок, выбирайте его под то, что работает уже сейчас: статус профиля или тему личного чата.",
            "Если нужны Stars или Premium, покупайте их в сумах по @username. Подключать кошелёк не нужно.",
            "Не копите подарки или Stars ради оформления кошелька. Даже если функция выйдет, неизвестно, какие подарки к ней подойдут и будет ли она платной.",
          ],
        },
        {
          t: "p",
          text: "Пятый шаг кажется очевидным, но именно на нём чаще всего теряются деньги. Нигде не обещано, что подарок с картинки концепта потом заработает.",
        },
        {
          t: "p",
          text: "Другие слухи вокруг бета-версий Telegram разобраны в статье о <a href=\"/blog/telegram-beta-balans-qr-kod-oyinchi\">новых функциях беты и Stars для клана</a>. Вывод там тот же: пока нет официального подтверждения, порядок передачи Stars и Premium тиммейтам не меняется.",
        },
        {
          t: "h2",
          id: "hamyonni-bezab-beramiz-degan-bot",
          text: "Как распознать бота или сообщение «оформим вам кошелёк»?",
        },
        {
          t: "p",
          text: "На волне популярного концепта могут появиться предложения «включить оформление прямо сейчас». Обращайте внимание на такие признаки:",
        },
        {
          t: "list",
          items: [
            "<strong>Просят seed-фразу, код или пароль.</strong> Некастодиальным кошельком управляете только вы. Тот, кто получит секретные слова или код от Telegram, сможет сам распоряжаться кошельком и аккаунтом.",
            "<strong>Оплата за «досрочную активацию».</strong> Неанонсированную функцию никто не может открыть за деньги.",
            "<strong>Незнакомый бот или ссылка.</strong> Чтобы пользоваться функциями самого Telegram, не нужно заходить в сторонние боты.",
            "<strong>Поддельное имя бота.</strong> В Telegram username любого бота заканчивается на «bot». Как это проверить, показано в статье про <a href=\"/blog/game-bilan-tugaydigan-donat-boti-tekshirish\">донат-бота, чьё имя оканчивается на «…game»</a>.",
          ],
        },
        {
          t: "p",
          text: "Бот GemPay <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> не запрашивает пароль, код или seed-фразу. Для Stars и Premium нужен только @username, для игровой валюты — только Player ID. Если есть вопрос по заказу, напишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> и укажите номер заказа. Если заказ не выполнен, деньги полностью возвращаются в течение 3 рабочих дней. Валюта, уже зачисленная на счёт, не возвращается.",
        },
        {
          t: "p",
          text: "GemPay — независимый сервис и не заявляет о партнёрстве с Telegram. Выйдет ли оформление кошелька официально, можно узнать только из объявлений Telegram или TON.",
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
              label: "Music on Profiles, Stickers Mini App, New Profiles, and More",
              href: "https://telegram.org/blog/profile-music-gift-themes",
            },
            {
              label: "Welcome Messages, Buttons in Messages and Signed Gifts",
              href: "https://telegram.org/blog/welcome-messages-buttons-TG-13",
            },
          ],
        },
      ],
      faq: [
        {
          q: "У моего тиммейта нет Gram Wallet. Дойдёт ли до него Premium в подарок?",
          a: "Да, Premium подключается по его @username через механизм подарков Telegram. Кошелёк не понадобится ни вам, ни ему.",
        },
        {
          q: "Стоит ли заранее купить побольше Stars в расчёте на оформление кошелька?",
          a: "Смысла нет: функция не анонсирована, и неизвестно, будут ли в ней вообще использоваться Stars. Покупайте звёзды, когда появится конкретная задача — обычно они приходят за несколько секунд.",
        },
        {
          q: "Можно ли обменять Stars на UC или Gram?",
          a: "Stars, купленные в GemPay, в игровую валюту не превращаются — UC покупается отдельно по Player ID. Обмен Stars на Gram в этой статье не рассматривается.",
        },
        {
          q: "Можно ли одним коллекционным подарком оформить чаты со всем сквадом?",
          a: "Нет. По правилам Telegram один подарок открывает одну тему только для одного личного чата, так что для каждого чата нужен свой подарок.",
        },
        {
          q: "Можно ли поставить фон подарка в групповой чат клана?",
          a: "В блоге Telegram темы из подарков анонсированы только для личных чатов. Для групп такая возможность официально не подтверждена.",
        },
        {
          q: "Бот обещает «включить оформление кошелька» и просит код из SMS. Что делать?",
          a: "Код не отправляйте и прекратите переписку: получив его, человек сможет войти в ваш аккаунт. Неанонсированную функцию не способен включить ни один бот.",
        },
      ],
    },
  },
};

export default article;
