// Avtoblogyoz yasagan maqola (2026-11-09). Niyat: Kompyuterda Telegram Desktop ishlatadigan o'yinchi @wallet bosganda bot o'rniga ichki hamyon ochilganini ko'radi va bu Wallet botidagi balansga, Stars yoki UC xaridiga ta'sir qiladimi, deb «telegram desktop wallet bot ochilmayapti» so'zi bilan qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://docs.ton.org/onboarding/wallet-apps/telegram
//   https://docs.ton.org/onboarding/wallet-apps/deep-links
//   https://telegram.org/blog

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "desktop-wallet-bot-ochilmayapti-oyinchi",
  game: null,
  type: "problem",
  datePublished: "2026-11-09",
  dateModified: "2026-11-09",
  keywords: ["telegram desktop wallet bot ochilmayapti","wallet bot ochilmayapti kompyuterda","telegram desktop @wallet hamyon","telegram money desktop","wallet bot balans yo‘qoldimi","telegram hamyon stars xarid","не открывается wallet бот telegram desktop","telegram desktop @wallet открывает кошелек","встроенный кошелек telegram desktop","кошелек telegram money gram","wallet бот баланс пропал"],
  locales: {
    uz: {
      title: "Telegram Desktop’da Wallet bot ochilmayapti: UC va Stars xaridiga ta’siri",
      metaTitle: "Telegram Desktop’da Wallet bot ochilmayapti",
      metaDescription: "Yo‘q: Stars @username, UC esa Player ID bo‘yicha so‘mda olinadi, Wallet botiga bog‘liq emas. @wallet bot o‘rniga hamyon ochishi rasman tasdiqlanmagan.",
      excerpt: "Yo‘q: Stars @username, UC esa Player ID bo‘yicha so‘mda olinadi, Wallet botiga bog‘liq emas. @wallet bot o‘rniga hamyon ochishi rasman tasdiqlanmagan.",
      answer: "Yo‘q: Stars @username, UC esa Player ID bo‘yicha so‘mda olinadi, Wallet botiga bog‘liq emas. @wallet bot o‘rniga hamyon ochishi rasman tasdiqlanmagan.",
      body: [
        {
          t: "h2",
          id: "kompyuterda-wallet-hamyonni-ochsa-stars",
          text: "Kompyuterda @wallet hamyonni ochsa, Stars yoki UC xaridim to‘xtaydimi?",
        },
        {
          t: "p",
          text: "Yo‘q. Stars, Premium va o‘yin valyutasini so‘mda olish Wallet botiga bog‘lanmagan:",
        },
        {
          t: "list",
          items: [
            "Stars va Premium @username bo‘yicha beriladi.",
            "UC, olmos va CP Player ID bo‘yicha tushadi.",
          ],
        },
        {
          t: "p",
          text: "Bu zanjirda hamyon umuman qatnashmaydi.",
        },
        {
          t: "p",
          text: "Telegram Desktop’da @wallet bosilganda bot o‘rniga ichki hamyon ochilayotgani haqida hozircha faqat Telegram kanalidagi post bor. Telegram yoki TON’ning rasmiy manbalarida bu tasdiqlanmagan. Kompyuteringizda shunga o‘xshash holatni ko‘rsangiz ham, uning sababi va qaysi akkauntlarga tegishli ekani rasman tushuntirilmagan.",
        },
        {
          t: "p",
          text: "Rasman ma’lum bo‘lgani boshqa narsa. TON hujjatiga ko‘ra, Telegram Desktop’dagi o‘rnatilgan hamyon bandi faqat Telegram akkaunt uchun hamyonga kirishni yoqqandagina paydo bo‘ladi (<a href=\"https://docs.ton.org/onboarding/wallet-apps/telegram\" target=\"_blank\" rel=\"noopener\">TON hujjati</a>). Shuning uchun bu band hamma akkauntda ham ko‘rinmasligi mumkin.",
        },
        {
          t: "p",
          text: "Shu sababli klan chatida bir odamda hamyon bor, boshqasida yo‘q bo‘lsa, bu Telegram nosozligi emas. Uni «yoqib beraman» deganlarga ishonmang.",
        },
        {
          t: "p",
          text: "Hamyon o‘yinchiga umuman kerakmi, degan savolga alohida javob berganmiz: <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">Telegram Wallet o‘yinchiga kerakmi</a>.",
        },
        {
          t: "h2",
          id: "bot-orniga-nima-ochildi-beshta",
          text: "Bot o‘rniga nima ochildi: beshta holat jadvalda",
        },
        {
          t: "p",
          text: "Ko‘pincha «bot ochilmayapti» degani aslida «kutilmagan oyna ochildi» degani bo‘ladi. Avval qayerda turganingizni aniqlang.",
        },
        {
          t: "table",
          head: [
            "Ekranda nima",
            "Belgisi",
            "Nima qilasiz",
          ],
          rows: [
            [
              "Bot chati",
              "Yuqorida bot nomi, pastda xabar maydoni yoki «Start» tugmasi",
              "Username’ni avval ishlatgan manzil bilan harfma-harf solishtiring",
            ],
            [
              "Mini App paneli",
              "Chat ustida alohida panel, ichida ilova interfeysi",
              "Panel qaysi bot ichida ochilganini sarlavhadan ko‘ring",
            ],
            [
              "O‘rnatilgan hamyon oynasi",
              "Chat emas, botga xabar yozib bo‘lmaydi",
              "Kerak bo‘lmasa yoping, hech narsa kiritmang",
            ],
            [
              "Brauzer sahifasi",
              "Telegram tashqarisida, manzil satri bor",
              "Domenni tekshiring, kod va kalit so‘z kiritmang",
            ],
            [
              "Soxta akkaunt",
              "Nomi «wallet»ga o‘xshaydi, lekin harfi yoki qo‘shimchasi boshqa",
              "Yozishmang, bloklang",
            ],
          ],
        },
        {
          t: "p",
          text: "Saytdagi havolani bossangiz, Telegram o‘zi ochilib hamyonni ko‘rsatishi mumkin. Bu hujjatlashtirilgan xatti-harakat: hamyon havolalari boshqa ilova yoki brauzerdan bosilganda ham o‘rnatilgan Telegram ilovasidagi hamyonni ochadi (<a href=\"https://docs.ton.org/onboarding/wallet-apps/deep-links\" target=\"_blank\" rel=\"noopener\">deep link hujjati</a>). Oynaning o‘zi xavf belgisi emas. Lekin undan keyin kalit so‘z yoki to‘lov so‘ralsa, darhol to‘xtang.",
        },
        {
          t: "p",
          text: "Donat sotayotgan akkaunt haqiqiy botmi yoki oddiy profilmi — buni username bo‘yicha qanday ajratish haqida: <a href=\"/blog/game-bilan-tugaydigan-donat-boti-tekshirish\">donat botini username bo‘yicha tekshirish</a>.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "wallet-botidagi-mablag-va-stars",
          text: "Wallet botidagi mablag‘ va Stars hisobim bilan nima bo‘ladi?",
        },
        {
          t: "p",
          text: "Havola o‘zgarishi Wallet botidagi balansga qanday ta’sir qilishi haqida rasmiy manbalarda ma’lumot yo‘q. Bu maqolada ham balans haqida hech narsa va’da qilinmaydi.",
        },
        {
          t: "p",
          text: "Tekshirishning amaliy yo‘li bor: botni telefondagi Telegram’da qidiruv orqali oching va balansni o‘sha yerda ko‘ring. Kompyuterda bitta havola boshqa oyna ochgani balans haqida hech narsa demaydi.",
        },
        {
          t: "p",
          text: "Shoshilib mablag‘ni «xavfsiz joyga» ko‘chirmang. Telegram’dagi har qanday o‘zgarish atrofida firibgarlar aynan shunday paytda «yordam» taklif qilib yozadi.",
        },
        {
          t: "note",
          tone: "info",
          text: "GemPay orqali olingan Stars Telegram akkauntingizga, UC, olmos va CP esa o‘yin akkauntingizga tushadi. Ular Wallet botida saqlanmaydi, shuning uchun bot ochilmasa ham ularga ta’sir qilmaydi.",
        },
        {
          t: "h2",
          id: "desktopda-wallet-kutilganidek-ishlamasa-5",
          text: "Desktop’da @wallet kutilganidek ishlamasa: 5 qadamli tekshiruv",
        },
        {
          t: "p",
          text: "Bu tekshiruv hech kimga ma’lumot berishni talab qilmaydi.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Telegram Desktop’ni yangilang, dasturni to‘liq yopib, qayta ishga tushiring.",
            "Havolani bosmang: o‘ng tugma bilan manzilini ko‘chirib ko‘ring. «@wallet» yozuvi ostida boshqa kanal yoki sayt yashiringan bo‘lishi mumkin.",
            "Xuddi shu botni telefondagi Telegram’da qidiruv orqali oching. Telefonda bot ochilib, balans ko‘rinsa, gap faqat kompyuterdagi havolada.",
            "Ochilgan akkaunt username’ini avval ishlatgan manzil bilan solishtiring. Ortiqcha harf, pastki chiziq, «support» yoki «official» qo‘shimchasi — shubha belgisi.",
            "Hamyon oynasi kerak bo‘lmasa, yoping. Kalit so‘z, kod yoki parol kiritmang, hech qanday to‘lovni tasdiqlamang.",
          ],
        },
        {
          t: "p",
          text: "Besh qadamdan keyin ham bot faqat kompyuterda ochilmasa, uni vaqtincha telefondan ishlating. Ayni paytda o‘yin xaridlarini odatdagidek davom ettiring: ular bu botga bog‘liq emas.",
        },
        {
          t: "h2",
          id: "kompyuterdan-stars-premium-va-ucni",
          text: "Kompyuterdan Stars, Premium va UC’ni hamyonsiz qanday olish mumkin?",
        },
        {
          t: "p",
          text: "O‘yinchiga kerakli narsalarning hech biri hamyon talab qilmaydi. GemPay’da (<a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>) har bir mahsulot uchun nima so‘ralishi quyidagicha:",
        },
        {
          t: "table",
          head: [
            "Mahsulot",
            "Nima so‘raladi",
            "Narx",
            "Tushish vaqti",
            "Hamyon",
          ],
          rows: [
            [
              "Telegram Stars",
              "@username, bir buyurtmada 50 dan 10 000 tagacha",
              `1 dona ${som(STARS_UNIT_CARD, "uz")} (karta yoki balans), ${som(STARS_UNIT_ONLINE, "uz")} (Click yoki Uzum Bank)`,
              "Bir necha soniya",
              "Kerak emas",
            ],
            [
              "Telegram Premium",
              "@username; 3, 6 yoki 12 oy",
              `${som(premium(3), "uz")}, ${som(premium(6), "uz")}, ${som(premium(12), "uz")}`,
              "Bir necha soniya",
              "Kerak emas",
            ],
            [
              "UC, olmos, CP",
              "Faqat Player ID, nik tekshirib ko‘rsatiladi",
              "Botda ko‘rsatiladi",
              "1–5 daqiqa",
              "Kerak emas",
            ],
          ],
        },
        {
          t: "p",
          text: "Kompyuterdagi Telegram’dan buyurtma tartibi:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Telegram Desktop qidiruviga @Gempayuz_bot deb yozing va botni oching.",
            "Kerakli bo‘limni tanlang: Stars, Premium yoki o‘yin.",
            "Stars yoki Premium uchun oluvchining @username’ini, o‘yin uchun Player ID kiriting.",
            "Ko‘rsatilgan nik yoki username to‘g‘riligini tekshiring, keyin miqdorni tanlang.",
            "UzCard, HUMO, Click, Uzum Bank yoki bot balansi bilan to‘lang. Rossiyadan SBP orqali to‘lash ham mumkin.",
          ],
        },
        {
          t: "p",
          text: "Visa va Mastercard qabul qilinmaydi. Xorijiy karta, VPN, kripto yoki hamyon kerak emas.",
        },
        {
          t: "p",
          text: "Premium’da 1 oylik tarif yo‘q, narx hamma to‘lov usulida bir xil. U Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi, akkauntga kirilmaydi. Jamoadoshga sovg‘a qilsangiz ham uning paroli yoki kodi so‘ralmaydi, faqat @username kerak.",
        },
        {
          t: "p",
          text: "Stars o‘yin valyutasiga aylanmaydi: klan uchun UC kerak bo‘lsa, uni alohida buyurtma qilasiz.",
        },
        {
          t: "p",
          text: "Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi. Hisobga tushgan valyuta esa qaytarilmaydi. Batafsil: <a href=\"/blog/telegram-stars-sotib-olish-gempay\">Telegram Stars sotib olish</a>.",
        },
        {
          t: "h2",
          id: "hamyon-yangilandi-bahonasida-oyinchilarni-qanday",
          text: "«Hamyon yangilandi» bahonasida o‘yinchilarni qanday aldashadi?",
        },
        {
          t: "p",
          text: "Hamyon atrofidagi har bir mish-mish firibgarlar uchun yangi ssenariy bo‘ladi. Klan chatlarida va shaxsiy xabarlarda ko‘p uchraydiganlari:",
        },
        {
          t: "list",
          items: [
            "«Wallet endi Desktop’da ishlamaydi, balansni saqlab qolish uchun kalit so‘zlarni yuboring».",
            "«Yangi hamyonni faollashtirish uchun oz miqdor o‘tkazing». Bu sxema haqida alohida yozganmiz: <a href=\"/blog/gram-wallet-faollashtirish-oyinchiga-kerakmi\">GRAM Wallet faollashtirish</a>.",
            "Klan chatiga tashlangan «hamyon ulasangiz UC beriladi» havolasi.",
            "Nomi «wallet»ga juda o‘xshagan profil yoki «Telegram xodimi» deb yozgan akkaunt.",
          ],
        },
        {
          t: "p",
          text: "Kalit so‘zlar, Telegram’ga kirish kodi va ikki bosqichli tekshiruv paroli hech kimga berilmaydi. Donat xizmati ham ularni so‘ramaydi: o‘yin uchun faqat Player ID, Telegram xaridi uchun faqat @username kerak. Nima ochiq ma’lumot, nima esa akkauntni yo‘qotishga olib kelishi haqida: <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">o‘yin hisobini xavfsiz to‘ldirish</a>.",
        },
        {
          t: "h2",
          id: "kanal-postiga-qarab-nimani-ozgartirmaslik",
          text: "Kanal postiga qarab nimani o‘zgartirmaslik kerak?",
        },
        {
          t: "p",
          text: "Hujjat bilan tasdiqlangan:",
        },
        {
          t: "list",
          items: [
            "Telegram Desktop’dagi hamyon bandi faqat Telegram akkaunt uchun hamyonga kirishni yoqqanda ko‘rinadi.",
            "Hamyon havolalari brauzer yoki boshqa ilovadan bosilganda ham o‘rnatilgan Telegram ilovasida hamyonni ochadi.",
            "<a href=\"https://telegram.org/blog\" target=\"_blank\" rel=\"noopener\">Telegram blogida</a> «Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More» sarlavhali e’lon bor. U kolleksion sovg‘alar haqida, oddiy Stars yoki UC xaridi haqida emas.",
          ],
        },
        {
          t: "p",
          text: "Tasdiqlanmagan:",
        },
        {
          t: "list",
          items: [
            "@wallet havolasi Desktop’da bot o‘rniga hamyonni ochishi.",
            "Bunday yo‘naltirish telefon va boshqa qurilmalarda ham bo‘lishi.",
            "Bu o‘zgarish sovg‘a, Stars yoki NFT yuborishga ta’sir qilishi.",
          ],
        },
        {
          t: "p",
          text: "Rasmiy e’lon chiqmaguncha xarid tartibi o‘zgarmaydi: Stars va Premium uchun @username, donat uchun Player ID. Hamyon ochish, mablag‘ ko‘chirish yoki biror ma’lumot yuborishga hojat yo‘q. Boshqa tasdiqlanmagan beta funksiyalar haqida: <a href=\"/blog/telegram-beta-balans-qr-kod-oyinchi\">Telegram beta yangi funksiyalari</a>.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Telegram Money — the native Gram wallet",
              href: "https://docs.ton.org/onboarding/wallet-apps/telegram",
            },
            {
              label: "Deep links",
              href: "https://docs.ton.org/onboarding/wallet-apps/deep-links",
            },
            {
              label: "Telegram Blog",
              href: "https://telegram.org/blog",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Telegram Desktop’da Wallet bot ochilmayapti. Stars’ni endi faqat telefondan olamanmi?",
          a: "Yo‘q, GemPay botida Stars uchun faqat @username so‘raladi. Buyurtmani kompyuterdagi Telegram’dan ham, telefondan ham berish mumkin.",
        },
        {
          q: "Klandoshimda kompyuterdagi Telegram’da hamyon bandi bor, menda yo‘q. Mening Telegram’im buzilganmi?",
          a: "Buzilmagan: TON hujjatiga ko‘ra bu band Telegram aynan shu akkaunt uchun hamyonga kirishni ochgandagina chiqadi. Uni tashqaridan «yoqib berish»ni taklif qilganlarga ishonmang.",
        },
        {
          q: "Wallet botidagi pulimni hozir boshqa hamyonga ko‘chirib qo‘yaymi?",
          a: "Rasmiy manbalarda bunday talab yo‘q. Balansni telefondagi Telegram’da botning o‘zida ko‘ring va kanal postiga qarab o‘tkazma qilmang.",
        },
        {
          q: "PUBG UC yoki MLBB olmos olish uchun Telegram’da hamyon ochishim kerakmi?",
          a: "Kerak emas. O‘yin valyutasi Player ID bo‘yicha so‘mda olinadi va 1–5 daqiqada o‘yin akkauntiga tushadi.",
        },
        {
          q: "Turnir saytidagi tugmani bosdim, kompyuterda Telegram hamyon bilan ochildi. Nima qilay?",
          a: "Hamyon havolalari tashqi saytdan bosilganda ham Telegram’ni ochishi hujjatda bor, shuning uchun oynaning o‘zi qo‘rqinchli emas. Sizga kerak bo‘lmasa, hech narsa tasdiqlamay yoping.",
        },
        {
          q: "Klan chatida «Desktop yangilanishi uchun hamyon kalitini yuboring» degan xabar keldi. Bu rostmi?",
          a: "Yo‘q, bu aldov. Kalit so‘zlar va kirish kodini hech bir xizmat so‘ramaydi. Yuboruvchini bloklang va klandoshlaringizni ogohlantiring.",
        },
      ],
    },
    ru: {
      title: "Telegram Desktop не открывает бот Wallet: что будет с покупкой Stars и UC",
      metaTitle: "Telegram Desktop не открывает бот Wallet",
      metaDescription: "Нет: Stars покупают по @username, а UC — по Player ID, за сумы и без бота Wallet. То, что @wallet открывает кошелёк вместо бота, официально не подтверждено.",
      excerpt: "Нет: Stars покупают по @username, а UC — по Player ID, за сумы и без бота Wallet. То, что @wallet открывает кошелёк вместо бота, официально не подтверждено.",
      answer: "Нет: Stars покупают по @username, а UC — по Player ID, за сумы и без бота Wallet. То, что @wallet открывает кошелёк вместо бота, официально не подтверждено.",
      body: [
        {
          t: "h2",
          id: "kompyuterda-wallet-hamyonni-ochsa-stars",
          text: "Если на компьютере @wallet открывает кошелёк, остановится ли покупка Stars или UC?",
        },
        {
          t: "p",
          text: "Нет. Покупка Stars, Premium и игровой валюты за сумы с ботом Wallet никак не связана:",
        },
        {
          t: "list",
          items: [
            "Stars и Premium выдаются по @username.",
            "UC, алмазы и CP зачисляются по Player ID.",
          ],
        },
        {
          t: "p",
          text: "Кошелёк в этой цепочке вообще не участвует.",
        },
        {
          t: "p",
          text: "О том, что в Telegram Desktop при нажатии на @wallet вместо бота открывается встроенный кошелёк, пока есть только пост в Telegram-канале. В официальных источниках Telegram и TON это не подтверждено. Даже если вы видите что-то похожее на своём компьютере, причина и круг затронутых аккаунтов официально не объяснены.",
        },
        {
          t: "p",
          text: "Официально известно другое. Согласно документации TON, пункт встроенного кошелька в Telegram Desktop появляется только тогда, когда Telegram включает доступ к кошельку для конкретного аккаунта (<a href=\"https://docs.ton.org/onboarding/wallet-apps/telegram\" target=\"_blank\" rel=\"noopener\">документация TON</a>). Поэтому этот пункт может быть виден не у всех.",
        },
        {
          t: "p",
          text: "Значит, если в чате клана у одного кошелёк есть, а у другого нет, — это не сбой Telegram. Не верьте тем, кто обещает его «включить».",
        },
        {
          t: "p",
          text: "Нужен ли кошелёк игроку в принципе, мы разбирали отдельно: <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">нужен ли игроку Telegram Wallet</a>.",
        },
        {
          t: "h2",
          id: "bot-orniga-nima-ochildi-beshta",
          text: "Что открылось вместо бота: пять ситуаций в таблице",
        },
        {
          t: "p",
          text: "Часто «бот не открывается» на деле означает «открылось не то окно». Сначала поймите, где вы оказались.",
        },
        {
          t: "table",
          head: [
            "Что на экране",
            "Признак",
            "Что делать",
          ],
          rows: [
            [
              "Чат с ботом",
              "Вверху имя бота, внизу поле ввода или кнопка «Start»",
              "Сверьте username по буквам с тем, которым пользовались раньше",
            ],
            [
              "Панель Mini App",
              "Отдельная панель поверх чата с интерфейсом приложения",
              "По заголовку проверьте, внутри какого бота она открылась",
            ],
            [
              "Окно встроенного кошелька",
              "Это не чат, написать боту нельзя",
              "Если не нужно — закройте, ничего не вводите",
            ],
            [
              "Страница в браузере",
              "Вне Telegram, есть адресная строка",
              "Проверьте домен, не вводите коды и секретные слова",
            ],
            [
              "Поддельный аккаунт",
              "Имя похоже на «wallet», но отличается буквой или приставкой",
              "Не переписывайтесь, заблокируйте",
            ],
          ],
        },
        {
          t: "p",
          text: "Если нажать ссылку на сайте, Telegram может сам открыться и показать кошелёк. Это задокументированное поведение: ссылки кошелька открывают кошелёк в установленном приложении Telegram, даже если нажаты из другого приложения или браузера (<a href=\"https://docs.ton.org/onboarding/wallet-apps/deep-links\" target=\"_blank\" rel=\"noopener\">документация по deep links</a>). Само окно — не признак опасности. Но если после него просят секретную фразу или оплату, сразу остановитесь.",
        },
        {
          t: "p",
          text: "Как по username отличить настоящего бота от обычного профиля, который продаёт донат: <a href=\"/blog/game-bilan-tugaydigan-donat-boti-tekshirish\">проверка донат-бота по username</a>.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "wallet-botidagi-mablag-va-stars",
          text: "Что будет со средствами в боте Wallet и с моими Stars?",
        },
        {
          t: "p",
          text: "В официальных источниках нет данных о том, как смена поведения ссылки влияет на баланс в боте Wallet. В этой статье мы тоже ничего не обещаем насчёт баланса.",
        },
        {
          t: "p",
          text: "Проверить можно на практике: откройте бота через поиск в Telegram на телефоне и посмотрите баланс там. То, что на компьютере одна ссылка открыла другое окно, о балансе ничего не говорит.",
        },
        {
          t: "p",
          text: "Не спешите переводить средства «в безопасное место». Вокруг любых изменений в Telegram мошенники пишут именно в такие моменты и предлагают «помощь».",
        },
        {
          t: "note",
          tone: "info",
          text: "Stars, купленные через GemPay, зачисляются на ваш аккаунт Telegram, а UC, алмазы и CP — на игровой аккаунт. В боте Wallet они не хранятся, поэтому проблемы с ботом их не затрагивают.",
        },
        {
          t: "h2",
          id: "desktopda-wallet-kutilganidek-ishlamasa-5",
          text: "Если @wallet в Desktop работает не так, как ждали: проверка в 5 шагов",
        },
        {
          t: "p",
          text: "Для этой проверки никому не нужно ничего сообщать.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Обновите Telegram Desktop, полностью закройте программу и запустите заново.",
            "Не нажимайте на ссылку: скопируйте её адрес правой кнопкой мыши и посмотрите. Под надписью «@wallet» может скрываться другой канал или сайт.",
            "Откройте того же бота через поиск в Telegram на телефоне. Если там бот открывается и баланс виден, дело только в ссылке на компьютере.",
            "Сравните username открывшегося аккаунта с тем, которым пользовались раньше. Лишняя буква, нижнее подчёркивание, приставка «support» или «official» — повод насторожиться.",
            "Если окно кошелька не нужно, закройте его. Не вводите секретную фразу, код или пароль и не подтверждайте никаких платежей.",
          ],
        },
        {
          t: "p",
          text: "Если и после пяти шагов бот не открывается только на компьютере, временно пользуйтесь им с телефона. Игровые покупки при этом продолжайте как обычно: от этого бота они не зависят.",
        },
        {
          t: "h2",
          id: "kompyuterdan-stars-premium-va-ucni",
          text: "Как купить Stars, Premium и UC с компьютера без кошелька?",
        },
        {
          t: "p",
          text: "Ничего из того, что нужно игроку, кошелька не требует. Вот что запрашивают в GemPay (<a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>) для каждого товара:",
        },
        {
          t: "table",
          head: [
            "Товар",
            "Что нужно",
            "Цена",
            "Срок зачисления",
            "Кошелёк",
          ],
          rows: [
            [
              "Telegram Stars",
              "@username, от 50 до 10 000 за заказ",
              `1 штука — ${som(STARS_UNIT_CARD, "ru")} (карта или баланс), ${som(STARS_UNIT_ONLINE, "ru")} (Click или Uzum Bank)`,
              "Несколько секунд",
              "Не нужен",
            ],
            [
              "Telegram Premium",
              "@username; 3, 6 или 12 месяцев",
              `${som(premium(3), "ru")}, ${som(premium(6), "ru")}, ${som(premium(12), "ru")}`,
              "Несколько секунд",
              "Не нужен",
            ],
            [
              "UC, алмазы, CP",
              "Только Player ID, ник показывается для проверки",
              "Указана в боте",
              "1–5 минут",
              "Не нужен",
            ],
          ],
        },
        {
          t: "p",
          text: "Как оформить заказ из Telegram на компьютере:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Введите @Gempayuz_bot в поиске Telegram Desktop и откройте бота.",
            "Выберите нужный раздел: Stars, Premium или игра.",
            "Для Stars или Premium укажите @username получателя, для игры — Player ID.",
            "Проверьте, что показанный ник или username верный, затем выберите количество.",
            "Оплатите через UzCard, HUMO, Click, Uzum Bank или с баланса бота. Из России можно оплатить через СБП.",
          ],
        },
        {
          t: "p",
          text: "Visa и Mastercard не принимаются. Зарубежная карта, VPN, криптовалюта или кошелёк не нужны.",
        },
        {
          t: "p",
          text: "Тарифа на 1 месяц у Premium нет, цена одинакова при любом способе оплаты. Подписка подключается через официальный механизм подарков Telegram, вход в аккаунт не требуется. Даже если дарите сокоманднику, его пароль или код не спрашивают — нужен только @username.",
        },
        {
          t: "p",
          text: "Stars не превращаются в игровую валюту: если клану нужны UC, их заказывают отдельно.",
        },
        {
          t: "p",
          text: "Если заказ не выполнен, деньги полностью возвращаются в течение 3 рабочих дней. Валюта, уже зачисленная на счёт, не возвращается. Подробнее: <a href=\"/blog/telegram-stars-sotib-olish-gempay\">покупка Telegram Stars</a>.",
        },
        {
          t: "h2",
          id: "hamyon-yangilandi-bahonasida-oyinchilarni-qanday",
          text: "Как игроков обманывают под предлогом «кошелёк обновился»?",
        },
        {
          t: "p",
          text: "Каждый слух о кошельке превращается у мошенников в новый сценарий. Что чаще всего встречается в чатах кланов и в личке:",
        },
        {
          t: "list",
          items: [
            "«Wallet больше не работает в Desktop, пришлите секретные слова, чтобы сохранить баланс».",
            "«Чтобы активировать новый кошелёк, переведите небольшую сумму». Об этой схеме мы писали отдельно: <a href=\"/blog/gram-wallet-faollashtirish-oyinchiga-kerakmi\">активация GRAM Wallet</a>.",
            "Ссылка в чате клана вида «подключи кошелёк — получишь UC».",
            "Профиль с именем, очень похожим на «wallet», или аккаунт, который представляется «сотрудником Telegram».",
          ],
        },
        {
          t: "p",
          text: "Секретные слова, код входа в Telegram и пароль двухэтапной проверки никому не передаются. Донат-сервису они тоже не нужны: для игры достаточно Player ID, для покупок в Telegram — @username. Какие данные открытые, а какие ведут к потере аккаунта: <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">как безопасно пополнить игровой счёт</a>.",
        },
        {
          t: "h2",
          id: "kanal-postiga-qarab-nimani-ozgartirmaslik",
          text: "Что не стоит менять из-за поста в канале?",
        },
        {
          t: "p",
          text: "Подтверждено документацией:",
        },
        {
          t: "list",
          items: [
            "Пункт кошелька в Telegram Desktop виден, только когда Telegram включает доступ к кошельку для аккаунта.",
            "Ссылки кошелька открывают кошелёк в установленном приложении Telegram, даже если нажаты из браузера или другого приложения.",
            "В <a href=\"https://telegram.org/blog\" target=\"_blank\" rel=\"noopener\">блоге Telegram</a> есть анонс «Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More». Он посвящён коллекционным подаркам, а не обычной покупке Stars или UC.",
          ],
        },
        {
          t: "p",
          text: "Не подтверждено:",
        },
        {
          t: "list",
          items: [
            "Что ссылка @wallet в Desktop открывает кошелёк вместо бота.",
            "Что такое перенаправление есть на телефоне и других устройствах.",
            "Что это изменение влияет на отправку подарков, Stars или NFT.",
          ],
        },
        {
          t: "p",
          text: "Пока нет официального анонса, порядок покупки не меняется: для Stars и Premium — @username, для доната — Player ID. Открывать кошелёк, переводить средства или кому-то что-то отправлять не нужно. О других неподтверждённых бета-функциях: <a href=\"/blog/telegram-beta-balans-qr-kod-oyinchi\">новые функции бета-версии Telegram</a>.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Telegram Money — the native Gram wallet",
              href: "https://docs.ton.org/onboarding/wallet-apps/telegram",
            },
            {
              label: "Deep links",
              href: "https://docs.ton.org/onboarding/wallet-apps/deep-links",
            },
            {
              label: "Telegram Blog",
              href: "https://telegram.org/blog",
            },
          ],
        },
      ],
      faq: [
        {
          q: "В Telegram Desktop не открывается бот Wallet. Теперь Stars можно купить только с телефона?",
          a: "Нет, в боте GemPay для Stars нужен только @username. Заказ можно оформить и из Telegram на компьютере, и с телефона.",
        },
        {
          q: "У соклановца в Telegram на компьютере есть пункт кошелька, а у меня нет. Мой Telegram сломан?",
          a: "Не сломан: по документации TON этот пункт появляется, только когда Telegram открывает доступ к кошельку именно для этого аккаунта. Не доверяйте тем, кто предлагает «включить» его со стороны.",
        },
        {
          q: "Стоит ли прямо сейчас перевести деньги из бота Wallet в другой кошелёк?",
          a: "Официальные источники такого не требуют. Посмотрите баланс в самом боте через Telegram на телефоне и не делайте переводов из-за поста в канале.",
        },
        {
          q: "Нужно ли заводить кошелёк в Telegram, чтобы купить UC в PUBG или алмазы в MLBB?",
          a: "Не нужно. Игровая валюта покупается за сумы по Player ID и приходит на игровой аккаунт за 1–5 минут.",
        },
        {
          q: "Нажал кнопку на сайте турнира, и на компьютере открылся Telegram с кошельком. Что делать?",
          a: "В документации указано, что ссылки кошелька открывают Telegram даже с внешнего сайта, так что само окно не повод для паники. Если оно вам не нужно, закройте его, ничего не подтверждая.",
        },
        {
          q: "В чате клана написали: «Для обновления Desktop пришлите ключ от кошелька». Это правда?",
          a: "Нет, это обман. Секретные слова и код входа не запрашивает ни один сервис. Заблокируйте отправителя и предупредите соклановцев.",
        },
      ],
    },
  },
};

export default article;
