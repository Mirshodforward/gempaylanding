// Avtoblogyoz yasagan maqola (2026-11-19). Niyat: Klan chatida App Store'dagi yangi Gram Wallet ilovasi haqida eshitgan o'yinchi «gram wallet telegram orqali kirish xavfsizmi» deb qidiradi. U ilovaga Telegram akkauntini, ya'ni kod va ikki bosqichli tekshiruvni ulasa, Stars, Premium va klan chati xavf ostida qoladimi va UC yoki Stars olish uchun bu ilova kerakmi, shuni bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/blog/wear-gifts-blockchain-and-more
//   https://core.telegram.org/api/gifts
//   https://fragment.com/about
//   https://ton.org/media

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "gram-wallet-telegram-ulash-oyinchi-xavfi",
  game: null,
  type: "trust",
  datePublished: "2026-11-19",
  dateModified: "2026-11-19",
  keywords: ["gram wallet telegram orqali kirish","gram wallet xavfsizmi","gram wallet ilovasi","gram wallet 2fa telegram","telegram 2fa parolini berish xavfsizmi","gram wallet stars uchun kerakmi","telegram kodini ilovaga kiritish","gram wallet вход через telegram","gram wallet безопасно ли","gram wallet двухфакторная аутентификация telegram","нужен ли кошелек для telegram stars","gram wallet mytonwallet"],
  locales: {
    uz: {
      title: "Gram Wallet’ga Telegram orqali kirish xavfsizmi: Stars, UC va klan chati",
      metaTitle: "Gram Wallet’ga Telegram orqali kirish xavfsizmi",
      metaDescription: "Xavfsiz deyishga asos yo‘q: Telegram kodi va 2FA parolini hech qanday ilovaga kiritmang. UC, Stars va Premium olish uchun Gram Wallet kerak emas.",
      excerpt: "Xavfsiz deyishga asos yo‘q: Telegram kodi va 2FA parolini hech qanday ilovaga kiritmang. UC, Stars va Premium olish uchun Gram Wallet kerak emas.",
      answer: "Xavfsiz deyishga asos yo‘q: Telegram kodi va 2FA parolini hech qanday ilovaga kiritmang. UC, Stars va Premium olish uchun Gram Wallet kerak emas.",
      body: [
        {
          t: "h2",
          id: "gram-walletga-telegram-akkaunt-bilan",
          text: "Gram Wallet’ga Telegram akkaunt bilan kirish xavfsizmi?",
        },
        {
          t: "p",
          text: "Uni xavfsiz deyishga asos yo‘q. App Store’da paydo bo‘lgan Gram Wallet ilovasini kim yaratgani rasmiy manbalarda tasdiqlanmagan. Kalitlarni qanday saqlashi va unda Telegram orqali kirish yoki ikki bosqichli himoya borligi ham tasdiqlanmagan. Bu haqda hozircha faqat Telegram kanallarida tarqalgan xabar bor.",
        },
        {
          t: "p",
          text: "O‘yinchi uchun asosiy qoida shu: Telegram’ning kirish kodi va ikki bosqichli tekshiruv (2FA) paroli tashqi ilova, sayt yoki chatga yozilmaydi. Kod faqat rasmiy Telegram ilovasiga kiritiladi.",
        },
        {
          t: "p",
          text: "2FA paroli faqat kirishni himoya qilmaydi. Telegram hujjatiga ko‘ra, kolleksion sovg‘ani TON blokcheyniga NFT qilib chiqarish uchun aynan shu parol kerak (<a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">Telegram Gifts</a>). Demak, parolni olgan odam akkauntingizga kirishi bilan cheklanmay, sovg‘alaringizni ham boshqara olishi mumkin.",
        },
        {
          t: "p",
          text: "UC, olmos, CP, Stars yoki Premium olish uchun bu ilovaga hech narsa ulash shart emas. Sababi quyida.",
        },
        {
          t: "h2",
          id: "klan-chatidagi-gaplar-rasmiy-manbalarga",
          text: "Klan chatidagi gaplar rasmiy manbalarga to‘g‘ri keladimi?",
        },
        {
          t: "p",
          text: "Ilova haqida chatlarda turli gaplar aylanyapti. Ularni rasmiy manbalar bilan solishtirdik:",
        },
        {
          t: "table",
          head: [
            "Chatda aytiladi",
            "Rasmiy manbada",
          ],
          rows: [
            [
              "Ilovani taniqli TON hamyon jamoasi chiqargan",
              "Tasdiqlanmagan, rasmiy e’lon topilmadi",
            ],
            [
              "Gram Wallet’da Telegram orqali ikki bosqichli himoya bor",
              "Tasdiqlanmagan",
            ],
            [
              "Ilova Telegram sovg‘alari va NFT bilan ishlaydi",
              "Rasmiy ma’lumot yo‘q",
            ],
            [
              "Klandoshdan sovg‘a olish uchun Gram Wallet kerak",
              "Bunday talab yo‘q",
            ],
          ],
        },
        {
          t: "p",
          text: "Rasmiy hujjatlarda boshqa narsa tasdiqlangan. Kolleksion sovg‘ani blokcheynga chiqarishda Telegram’ning o‘z 2FA paroli so‘raladi. Shundan keyin NFT’ni Fragment’ga import qilish uchun havola beriladi. Ba’zi sovg‘alarni esa faqat belgilangan sanadan keyin chiqarish mumkin (<a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">core.telegram.org</a>). Bularning hech biri Gram Wallet haqida emas.",
        },
        {
          t: "p",
          text: "Ikonka ham hech narsani isbotlamaydi. TON’ning media sahifasida Gram tokenining standart belgisi ko‘rsatilgan: ko‘k olmos ustidagi oq yulduz (<a href=\"https://ton.org/media\" target=\"_blank\" rel=\"noopener\">TON Media Assets</a>). Ilovada shunga o‘xshash belgi turishi uning ishonchli ekanini bildirmaydi: rasmni istalgan odam nusxalay oladi. Bu rasmiy qoida emas, bizning ehtiyot maslahatimiz.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "kod-va-2fa-parolni-bersangiz",
          text: "Kod va 2FA parolni bersangiz, o‘yinchining nimasi xavf ostida qoladi?",
        },
        {
          t: "p",
          text: "O‘yinchining Telegram’dagi deyarli hamma narsasi bitta akkauntda turadi:",
        },
        {
          t: "table",
          head: [
            "Nima",
            "Qayerda saqlanadi",
            "Kod va parol begona qo‘lga o‘tsa",
          ],
          rows: [
            [
              "Stars balansi",
              "Telegram akkauntida",
              "Akkaunt bilan birga boshqa odam nazoratiga o‘tishi mumkin",
            ],
            [
              "Premium obunasi",
              "Telegram akkauntida",
              "Akkaunt bilan birga ketadi",
            ],
            [
              "Kolleksion sovg‘alar",
              "Telegram akkauntida",
              "Boshqa foydalanuvchiga o‘tkazilishi yoki 2FA paroli bilan blokcheynga chiqarilishi mumkin",
            ],
            [
              "Klan guruhi va kanalidagi admin huquqi",
              "Telegram akkauntida",
              "Begona odam guruhni boshqarib, a’zolarga sizning nomingizdan yozishi mumkin",
            ],
            [
              "PUBG UC, MLBB olmosi, CODM CP",
              "O‘yin akkauntida",
              "Telegram’ga bog‘liq emas. Lekin o‘yin loginini Telegram chatlarida saqlagan bo‘lsangiz, u ham ochiladi",
            ],
          ],
        },
        {
          t: "p",
          text: "Klan admini uchun xavf ikki barobar. Akkauntingizni egallagan odam guruhga havola tashlab, klandoshlardan «turnir badali» yoki «UC uchun» pul so‘rashi mumkin. Ular xabar sizdan kelganini ko‘rib, ishonib qolishi ham mumkin.",
        },
        {
          t: "p",
          text: "Kolleksion sovg‘ani blokcheynga chiqarish yo‘li Telegram’ning o‘zida bor: profil → Sovg‘alar → sovg‘ani tanlash → Transfer → Send via Blockchain (<a href=\"https://telegram.org/blog/wear-gifts-blockchain-and-more\" target=\"_blank\" rel=\"noopener\">Telegram blogi</a>). Bu qadamlar begona ilovada emas, Telegram ichida bajariladi. Shuning uchun «sovg‘ani hamyonga ulash uchun» Telegram kodini so‘ragan ilovaga ehtiyoj yo‘q.",
        },
        {
          t: "p",
          text: "Kirish kodi va ikki bosqichli tekshiruvni mustahkamlash bo‘yicha alohida qo‘llanma: <a href=\"/blog/888-anonim-raqam-oyinchi-akkaunt-himoyasi\">+888 akkauntni buzishdan qanday himoyalash</a>.",
        },
        {
          t: "h2",
          id: "uc-stars-yoki-premium-olish",
          text: "UC, Stars yoki Premium olish uchun Gram Wallet kerakmi?",
        },
        {
          t: "p",
          text: "Yo‘q. GemPay’da hech bir xarid hamyonga bog‘liq emas:",
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
              "Faqat @username; bir buyurtmada 50 dan 10 000 tagacha",
              `1 dona: ${som(STARS_UNIT_CARD, "uz")} karta yoki balansdan, ${som(STARS_UNIT_ONLINE, "uz")} Click yoki Uzum Bank orqali`,
              "Yo‘q",
            ],
            [
              "Telegram Premium",
              "Faqat @username; Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi",
              `3 oy — ${som(premium(3), "uz")}, 6 oy — ${som(premium(6), "uz")}, 12 oy — ${som(premium(12), "uz")}`,
              "Yo‘q",
            ],
            [
              "UC, olmos, CP",
              "Faqat Player ID; nik tekshirib ko‘rsatiladi",
              "Botda ko‘rsatiladi",
              "Yo‘q",
            ],
          ],
        },
        {
          t: "p",
          text: "To‘lov UzCard, HUMO, Click, Uzum Bank yoki bot balansi orqali qilinadi. Visa va Mastercard qabul qilinmaydi. Xorijiy karta, VPN yoki kripto kerak emas.",
        },
        {
          t: "p",
          text: "Premium ulanganda akkauntingizga kirilmaydi. 1 oylik tarif yo‘q. Stars bir necha soniyada, UC va olmos odatda 1–5 daqiqada tushadi. Stars o‘yin valyutasiga aylanmaydi: jamoaga UC kerak bo‘lsa, uni Player ID bo‘yicha alohida oling.",
        },
        {
          t: "p",
          text: "GemPay o‘yin paroli, Telegram kirish kodi yoki 2FA parolini so‘ramaydi. Xarid <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> orqali qilinadi. Batafsil qadamlar: <a href=\"/blog/telegram-stars-sotib-olish-gempay\">Telegram Stars sotib olish: GemPay’da, so‘mda</a>.",
        },
        {
          t: "p",
          text: "Jamoadoshga kolleksion sovg‘a berish uchun ham hamyon ilovasi kerak emas. Telegram uni ichkarida boshqa foydalanuvchiga o‘tkazishga ruxsat beradi. Ba’zan bu tekin, ba’zan Stars bilan pullik bo‘ladi (<a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">Telegram Gifts</a>). Hamyon umuman qachon kerak bo‘lishi haqida: <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">Telegram Wallet o‘yinchiga kerakmi</a>.",
        },
        {
          t: "h2",
          id: "ilovani-baribir-sinamoqchi-bolsangiz-qayerda",
          text: "Ilovani baribir sinamoqchi bo‘lsangiz, qayerda to‘xtash kerak?",
        },
        {
          t: "p",
          text: "Gram Wallet’ni donatdan boshqa sabab bilan sinamoqchi bo‘lsangiz, quyidagi tartibga amal qiling:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Ilovani klan chatidagi havoladan emas, App Store qidiruvidan toping. Ishlab chiquvchi nomini loyihaning rasmiy saytidagi havola bilan solishtiring.",
            "Ilova Telegram kirish kodi yoki 2FA parolini so‘rasa, shu zahoti to‘xtating va uni o‘chiring.",
            "Kalit saqlamaydigan hamyonda kalitlar faqat egasida bo‘ladi, zaxira nusxasini ham o‘zingiz saqlaysiz (<a href=\"https://fragment.com/about\" target=\"_blank\" rel=\"noopener\">How does Fragment work?</a>). Seed so‘zlarni hech kimga, hech qanday «tekshiruv» botiga bermang.",
            "Qaysi TON hamyonlar misol qilib keltirilganini chatdagi tavsiyadan emas, Fragment’ning <a href=\"https://fragment.com/about\" target=\"_blank\" rel=\"noopener\">rasmiy sahifasidan</a> o‘qing.",
            "Maqsadingiz faqat Stars, Premium yoki UC bo‘lsa, ilovani umuman o‘rnatmang.",
          ],
        },
        {
          t: "h2",
          id: "kod-yoki-parol-begona-ilovaga",
          text: "Kod yoki parol begona ilovaga ketib qolsa, nimadan boshlash kerak?",
        },
        {
          t: "p",
          text: "Vaqtni boy bermang. Tartib quyidagicha:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Telegram sozlamalarida qurilmalar (faol seanslar) ro‘yxatini oching va notanish seanslarning hammasini yoping.",
            "2FA parolini yangisiga almashtiring. Parolni tiklash uchun ulangan email sizniki ekanini tekshiring.",
            "Stars balansi, Premium holati va kolleksion sovg‘alar joyidami, tekshiring. Sovg‘a o‘tkazilgan bo‘lsa, qachon va kimga ketganini yozib qo‘ying.",
            "Klan guruhi va kanalidagi adminlar ro‘yxatini ko‘rib chiqing, shubhali huquqlarni olib tashlang.",
            "Klandoshlarni ogohlantiring: akkauntingizdan pul yoki kod so‘ralsa, ishonmasinlar. Ilovaga seed so‘zlar ham kiritilgan bo‘lsa, qolgan mablag‘ni yangi hamyonga o‘tkazishni o‘ylang.",
          ],
        },
        {
          t: "p",
          text: "Keyin kimdir tahdid qilib akkaunt yoki kod talab qilsa, bu maqola yordam beradi: <a href=\"/blog/tahdid-bilan-akkaunt-talab-qilish-oyinchi\">tahdid bilan akkaunt talab qilishsa nima qilish kerak</a>.",
        },
        {
          t: "h2",
          id: "gram-wallet-orqali-arzon-stars",
          text: "«Gram Wallet orqali arzon Stars» taklifini qanday tanish mumkin?",
        },
        {
          t: "p",
          text: "Yangi ilova haqida gap chiqishi bilan chatlarda «shu hamyon orqali arzon Stars yoki UC» degan takliflar ham paydo bo‘ladi. Quyidagi belgilardan biri bo‘lsa, suhbatni to‘xtating:",
        },
        {
          t: "list",
          items: [
            "avval ilovani o‘rnatib, uni Telegram bilan ulash talab qilinadi;",
            "kod yoki 2FA parolni «tasdiqlash uchun» yuborish so‘raladi;",
            "Gram yoki TON’ni oldindan yuborish kerak bo‘ladi;",
            "narx bozordagidan ancha past;",
            "«faqat bugun», «joylar tugayapti» degan shoshiltirish bor.",
          ],
        },
        {
          t: "p",
          text: "Bu belgilar Stars yoki UC kelishini emas, akkaunt yoki pul yo‘qolishi mumkinligini bildiradi. Hamyonni «faollashtirish» uchun pul so‘rash sxemasi bu yerda ko‘rib chiqilgan: <a href=\"/blog/gram-wallet-faollashtirish-oyinchiga-kerakmi\">GRAM Wallet faollashtirish: o‘yinchiga kerakmi</a>. Hamyon nomlari haqidagi boshqa mish-mishlar: <a href=\"/blog/wallet-walt-oyinchi-stars-donat\">Wallet va Walt mish-mishi</a>.",
        },
        {
          t: "p",
          text: "GemPay buyurtmasida muammo bo‘lsa, buyurtma raqamini yozib <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>’ga murojaat qiling. Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi. Hisobga tushgan valyuta qaytarilmaydi.",
        },
        {
          t: "note",
          tone: "info",
          text: "GemPay mustaqil xizmat. U Telegram yoki o‘yin ishlab chiquvchilari bilan hamkorlik qilishini da’vo qilmaydi.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More",
              href: "https://telegram.org/blog/wear-gifts-blockchain-and-more",
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
              label: "TON Media Assets",
              href: "https://ton.org/media",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Gram Wallet «tasdiqlash» uchun Telegram’ga kelgan kodni so‘rayapti — yozaymi?",
          a: "Yozmang. Telegram kodi va 2FA paroli faqat rasmiy Telegram ilovasida ishlatiladi. Ularni olgan begona dastur akkauntga kira olishi mumkin.",
        },
        {
          q: "Hamyon ilovasi bo‘lmasa, klandoshim sovg‘a qilgan Premium yoki Stars yetib boradimi?",
          a: "Ha, yetib boradi. Ular @username bo‘yicha Telegram akkauntining o‘ziga tushadi va hech qanday hamyon ilovasini talab qilmaydi.",
        },
        {
          q: "Telegram akkauntimni hamyonga ulasam, PUBG UC yoki MLBB olmosim xavf ostida qoladimi?",
          a: "UC va olmos o‘yin akkauntida saqlanadi, Telegram’da emas. Ammo o‘yin login va parolini Telegram chatlarida saqlagan bo‘lsangiz, akkauntga kirgan odam ularni ham ko‘radi.",
        },
        {
          q: "Turnirda yutgan kolleksion sovg‘amni sotish uchun yangi hamyon ilovasi kerakmi?",
          a: "Sovg‘ani blokcheynga chiqarish Telegram ichida, Transfer menyusidan boshlanadi. 2FA parolini ham Telegram o‘zi so‘raydi. Uchinchi tomon ilovasiga parol berish shart emas.",
        },
        {
          q: "Klan chatida kimdir Gram Wallet havolasini tashladi — uni bosib ko‘rsam xavflimi?",
          a: "Havola soxta sahifaga olib borishi mumkin. Ilovani faqat App Store qidiruvidan toping va ishlab chiquvchi nomini loyihaning rasmiy sayti bilan solishtiring.",
        },
        {
          q: "GemPay Stars yoki Premium uchun Telegram kodini so‘raydimi?",
          a: "Yo‘q. Stars va Premium uchun faqat @username, o‘yin valyutasi uchun faqat Player ID kerak. Kod yoki parol so‘ragan «GemPay xodimi» firibgar.",
        },
      ],
    },
    ru: {
      title: "Безопасно ли входить в Gram Wallet через Telegram: Stars, UC и чат клана",
      metaTitle: "Безопасно ли входить в Gram Wallet через Telegram",
      metaDescription: "Нет оснований считать это безопасным: не вводите код Telegram и пароль 2FA ни в какие приложения. Для покупки UC, Stars и Premium Gram Wallet не нужен.",
      excerpt: "Нет оснований считать это безопасным: не вводите код Telegram и пароль 2FA ни в какие приложения. Для покупки UC, Stars и Premium Gram Wallet не нужен.",
      answer: "Нет оснований считать это безопасным: не вводите код Telegram и пароль 2FA ни в какие приложения. Для покупки UC, Stars и Premium Gram Wallet не нужен.",
      body: [
        {
          t: "h2",
          id: "gram-walletga-telegram-akkaunt-bilan",
          text: "Безопасно ли входить в Gram Wallet через аккаунт Telegram?",
        },
        {
          t: "p",
          text: "Нет оснований считать это безопасным. Официальные источники не подтверждают, кто создал приложение Gram Wallet, появившееся в App Store. Не подтверждено и то, как оно хранит ключи, есть ли в нём вход через Telegram или двухэтапная защита. Пока об этом говорит только сообщение, которое разошлось по Telegram-каналам.",
        },
        {
          t: "p",
          text: "Главное правило для игрока: код входа Telegram и пароль двухэтапной проверки (2FA) нельзя вводить в сторонние приложения, на сайтах или в чатах. Код вводится только в официальном приложении Telegram.",
        },
        {
          t: "p",
          text: "Пароль 2FA защищает не только вход. По документации Telegram, именно он нужен, чтобы вывести коллекционный подарок в блокчейн TON как NFT (<a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">Telegram Gifts</a>). Значит, человек с вашим паролем сможет не только зайти в аккаунт, но и распоряжаться вашими подарками.",
        },
        {
          t: "p",
          text: "Для покупки UC, алмазов, CP, Stars или Premium к этому приложению ничего подключать не нужно. Почему — ниже.",
        },
        {
          t: "h2",
          id: "klan-chatidagi-gaplar-rasmiy-manbalarga",
          text: "Совпадает ли то, что говорят в чате клана, с официальными источниками?",
        },
        {
          t: "p",
          text: "О приложении в чатах ходят разные слухи. Мы сверили их с официальными источниками:",
        },
        {
          t: "table",
          head: [
            "Что говорят в чате",
            "Что в официальных источниках",
          ],
          rows: [
            [
              "Приложение выпустила известная команда TON-кошелька",
              "Не подтверждено, официального анонса нет",
            ],
            [
              "В Gram Wallet есть двухэтапная защита через Telegram",
              "Не подтверждено",
            ],
            [
              "Приложение работает с подарками Telegram и NFT",
              "Официальной информации нет",
            ],
            [
              "Чтобы получить подарок от соклановца, нужен Gram Wallet",
              "Такого требования нет",
            ],
          ],
        },
        {
          t: "p",
          text: "В официальной документации подтверждено другое. При выводе коллекционного подарка в блокчейн Telegram запрашивает собственный пароль 2FA. После этого выдаётся ссылка для импорта NFT на Fragment. А некоторые подарки можно вывести только после указанной даты (<a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">core.telegram.org</a>). Ничего из этого к Gram Wallet не относится.",
        },
        {
          t: "p",
          text: "Иконка тоже ничего не доказывает. На медиастранице TON указан стандартный значок токена Gram — белая звезда на синем ромбе (<a href=\"https://ton.org/media\" target=\"_blank\" rel=\"noopener\">TON Media Assets</a>). Похожий значок в приложении не говорит о том, что ему можно доверять: картинку может скопировать кто угодно. Это не официальное правило, а наш совет из соображений осторожности.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "kod-va-2fa-parolni-bersangiz",
          text: "Чем рискует игрок, если отдаст код и пароль 2FA?",
        },
        {
          t: "p",
          text: "Почти всё, что есть у игрока в Telegram, привязано к одному аккаунту:",
        },
        {
          t: "table",
          head: [
            "Что",
            "Где хранится",
            "Если код и пароль попадут в чужие руки",
          ],
          rows: [
            [
              "Баланс Stars",
              "В аккаунте Telegram",
              "Вместе с аккаунтом может перейти под контроль другого человека",
            ],
            [
              "Подписка Premium",
              "В аккаунте Telegram",
              "Уходит вместе с аккаунтом",
            ],
            [
              "Коллекционные подарки",
              "В аккаунте Telegram",
              "Их могут передать другому пользователю или с паролем 2FA вывести в блокчейн",
            ],
            [
              "Права админа в группе и канале клана",
              "В аккаунте Telegram",
              "Посторонний сможет управлять группой и писать участникам от вашего имени",
            ],
            [
              "PUBG UC, алмазы MLBB, CP в CODM",
              "В игровом аккаунте",
              "От Telegram не зависят. Но если вы хранили логин от игры в чатах Telegram, он тоже окажется открыт",
            ],
          ],
        },
        {
          t: "p",
          text: "Для админа клана риск двойной. Тот, кто захватит ваш аккаунт, может кинуть в группу ссылку и попросить у соклановцев деньги «на взнос за турнир» или «на UC». А они, увидев сообщение от вас, могут и поверить.",
        },
        {
          t: "p",
          text: "Вывести коллекционный подарок в блокчейн можно в самом Telegram: профиль → Подарки → выбрать подарок → Transfer → Send via Blockchain (<a href=\"https://telegram.org/blog/wear-gifts-blockchain-and-more\" target=\"_blank\" rel=\"noopener\">блог Telegram</a>). Всё это делается внутри Telegram, а не в стороннем приложении. Поэтому приложение, которое просит код Telegram «чтобы подключить подарок к кошельку», вам не нужно.",
        },
        {
          t: "p",
          text: "Отдельная инструкция о том, как защитить код входа и усилить двухэтапную проверку: <a href=\"/blog/888-anonim-raqam-oyinchi-akkaunt-himoyasi\">как защитить аккаунт от взлома через +888</a>.",
        },
        {
          t: "h2",
          id: "uc-stars-yoki-premium-olish",
          text: "Нужен ли Gram Wallet, чтобы купить UC, Stars или Premium?",
        },
        {
          t: "p",
          text: "Нет. В GemPay ни одна покупка не зависит от кошелька:",
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
              "Только @username; за один заказ от 50 до 10 000 звёзд",
              `1 звезда: ${som(STARS_UNIT_CARD, "ru")} картой или с баланса, ${som(STARS_UNIT_ONLINE, "ru")} через Click или Uzum Bank`,
              "Нет",
            ],
            [
              "Telegram Premium",
              "Только @username; подключается через официальный механизм подарков Telegram",
              `3 месяца — ${som(premium(3), "ru")}, 6 месяцев — ${som(premium(6), "ru")}, 12 месяцев — ${som(premium(12), "ru")}`,
              "Нет",
            ],
            [
              "UC, алмазы, CP",
              "Только Player ID; ник проверяется и показывается",
              "Указана в боте",
              "Нет",
            ],
          ],
        },
        {
          t: "p",
          text: "Оплатить можно через UzCard, HUMO, Click, Uzum Bank или с баланса бота. Visa и Mastercard не принимаются. Зарубежная карта, VPN или криптовалюта не нужны.",
        },
        {
          t: "p",
          text: "При подключении Premium в ваш аккаунт никто не входит. Тарифа на 1 месяц нет. Stars приходят за несколько секунд, UC и алмазы — обычно за 1–5 минут. Stars не превращаются в игровую валюту: если команде нужны UC, покупайте их отдельно по Player ID.",
        },
        {
          t: "p",
          text: "GemPay не просит пароль от игры, код входа Telegram или пароль 2FA. Покупка оформляется через <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>. Подробные шаги: <a href=\"/blog/telegram-stars-sotib-olish-gempay\">как купить Telegram Stars в GemPay за сумы</a>.",
        },
        {
          t: "p",
          text: "Чтобы подарить соклановцу коллекционный подарок, приложение-кошелёк тоже не нужно. Telegram позволяет передать его другому пользователю прямо внутри мессенджера. Иногда это бесплатно, иногда — за Stars (<a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">Telegram Gifts</a>). О том, когда кошелёк вообще может понадобиться: <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">нужен ли игроку Telegram Wallet</a>.",
        },
        {
          t: "h2",
          id: "ilovani-baribir-sinamoqchi-bolsangiz-qayerda",
          text: "Если всё же хотите попробовать приложение — где остановиться?",
        },
        {
          t: "p",
          text: "Если вы хотите попробовать Gram Wallet не ради доната, а по другой причине, действуйте так:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Ищите приложение через поиск в App Store, а не по ссылке из чата клана. Сверьте имя разработчика со ссылкой на официальном сайте проекта.",
            "Если приложение просит код входа Telegram или пароль 2FA, сразу остановитесь и удалите его.",
            "В некастодиальном кошельке ключи есть только у владельца, и резервную копию вы храните сами (<a href=\"https://fragment.com/about\" target=\"_blank\" rel=\"noopener\">How does Fragment work?</a>). Никому не отдавайте seed-фразу — ни людям, ни «ботам для проверки».",
            "Какие TON-кошельки приводятся в пример, узнавайте не из советов в чате, а на <a href=\"https://fragment.com/about\" target=\"_blank\" rel=\"noopener\">официальной странице</a> Fragment.",
            "Если вам нужны только Stars, Premium или UC, не устанавливайте приложение вообще.",
          ],
        },
        {
          t: "h2",
          id: "kod-yoki-parol-begona-ilovaga",
          text: "Код или пароль ушли в чужое приложение — с чего начать?",
        },
        {
          t: "p",
          text: "Не теряйте время. Порядок такой:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Откройте в настройках Telegram список устройств (активных сеансов) и завершите все незнакомые.",
            "Смените пароль 2FA на новый. Проверьте, что почта для восстановления пароля принадлежит вам.",
            "Убедитесь, что баланс Stars, статус Premium и коллекционные подарки на месте. Если подарок передали, запишите, когда и кому он ушёл.",
            "Просмотрите список админов в группе и канале клана, уберите подозрительные права.",
            "Предупредите соклановцев: если с вашего аккаунта просят деньги или код — пусть не верят. Если в приложение вводилась и seed-фраза, подумайте о том, чтобы перевести оставшиеся средства на новый кошелёк.",
          ],
        },
        {
          t: "p",
          text: "Если потом кто-то начнёт с угрозами требовать аккаунт или код, поможет эта статья: <a href=\"/blog/tahdid-bilan-akkaunt-talab-qilish-oyinchi\">что делать, если с угрозами требуют аккаунт</a>.",
        },
        {
          t: "h2",
          id: "gram-wallet-orqali-arzon-stars",
          text: "Как распознать предложение «дешёвые Stars через Gram Wallet»?",
        },
        {
          t: "p",
          text: "Стоит появиться слухам о новом приложении, как в чатах начинают предлагать «дешёвые Stars или UC через этот кошелёк». Прекращайте разговор, если видите хотя бы один из признаков:",
        },
        {
          t: "list",
          items: [
            "требуют сначала установить приложение и привязать его к Telegram;",
            "просят прислать код или пароль 2FA «для подтверждения»;",
            "нужно заранее отправить Gram или TON;",
            "цена намного ниже рыночной;",
            "торопят: «только сегодня», «места заканчиваются».",
          ],
        },
        {
          t: "p",
          text: "Эти признаки говорят не о том, что Stars или UC придут, а о том, что можно потерять аккаунт или деньги. Схема, где просят деньги за «активацию» кошелька, разобрана здесь: <a href=\"/blog/gram-wallet-faollashtirish-oyinchiga-kerakmi\">активация GRAM Wallet: нужна ли игроку</a>. Другие слухи о названиях кошельков: <a href=\"/blog/wallet-walt-oyinchi-stars-donat\">слух о Wallet и Walt</a>.",
        },
        {
          t: "p",
          text: "Если с заказом в GemPay что-то не так, напишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> и укажите номер заказа. Если заказ не выполнен, деньги полностью возвращаются в течение 3 рабочих дней. Валюта, которая уже пришла на счёт, не возвращается.",
        },
        {
          t: "note",
          tone: "info",
          text: "GemPay — независимый сервис. Он не заявляет о сотрудничестве с Telegram или разработчиками игр.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More",
              href: "https://telegram.org/blog/wear-gifts-blockchain-and-more",
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
              label: "TON Media Assets",
              href: "https://ton.org/media",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Gram Wallet просит код из Telegram «для подтверждения» — вводить?",
          a: "Нет. Код Telegram и пароль 2FA вводятся только в официальном приложении Telegram. Сторонняя программа, получив их, может зайти в ваш аккаунт.",
        },
        {
          q: "Дойдут ли Premium или Stars, которые подарил соклановец, если у меня нет приложения-кошелька?",
          a: "Да, дойдут. Они зачисляются по @username прямо на аккаунт Telegram, никакое приложение-кошелёк для этого не требуется.",
        },
        {
          q: "Если привяжу Telegram к кошельку, будут ли под угрозой мои UC в PUBG или алмазы MLBB?",
          a: "UC и алмазы хранятся в игровом аккаунте, а не в Telegram. Но если логин и пароль от игры лежат у вас в чатах Telegram, тот, кто войдёт в аккаунт, увидит и их.",
        },
        {
          q: "Нужно ли новое приложение-кошелёк, чтобы продать коллекционный подарок, выигранный на турнире?",
          a: "Вывод подарка в блокчейн начинается внутри Telegram, через меню Transfer, и пароль 2FA запрашивает сам Telegram. Отдавать пароль стороннему приложению не нужно.",
        },
        {
          q: "В чате клана кто-то скинул ссылку на Gram Wallet — опасно её открывать?",
          a: "Ссылка может вести на поддельную страницу. Ищите приложение только через поиск в App Store и сверяйте имя разработчика с официальным сайтом проекта.",
        },
        {
          q: "Просит ли GemPay код Telegram для покупки Stars или Premium?",
          a: "Нет. Для Stars и Premium нужен только @username, для игровой валюты — только Player ID. «Сотрудник GemPay», который просит код или пароль, — мошенник.",
        },
      ],
    },
  },
};

export default article;
