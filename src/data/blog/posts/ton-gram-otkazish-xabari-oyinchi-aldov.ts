// Avtoblogyoz yasagan maqola (2026-11-19). Niyat: Klan chatida yoki shaxsiy xabarda «TON'ni GRAM'ga o'tkazing, yangi token yoki UC/Stars bonusini oling» degan taklif olgan o'zbekistonlik o'yinchi «TON GRAM o'tkazish xabari aldovmi» deb qidiradi. U xabar firibgarlik ekanini, nimani bosmaslik kerakligini va donatini xavfsiz qanday davom ettirishni bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://ton.org/
//   https://ton.org/media

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "ton-gram-otkazish-xabari-oyinchi-aldov",
  game: null,
  type: "trust",
  datePublished: "2026-11-19",
  dateModified: "2026-11-19",
  keywords: ["TON GRAM o'tkazish xabari","TON GRAM aldov","Toncoin Gram almashtirish firibgarlik","Gram migratsiya xabari","TON GRAM UC bonus","klan chatida Gram taklifi","Gram yangi token olish aldov","обменять TON на GRAM развод","миграция TON в GRAM мошенники","TON GRAM скам рассылка","получить новые токены GRAM","Toncoin переименование Gram"],
  locales: {
    uz: {
      title: "«TON’ni GRAM’ga o‘tkazing, UC bonus oling» xabari keldi: bu aldovmi?",
      metaTitle: "«TON’ni GRAM’ga o‘tkazing, UC bonus oling» xabari keldi",
      metaDescription: "Ha, aldov deb biling: TON’ni GRAM’ga o‘tkazgani uchun UC yoki Stars bonusi rasmiy manbalarda yo‘q. Havolani ochmang, UC va Stars so‘mda, hamyonsiz olinadi.",
      excerpt: "Ha, aldov deb biling: TON’ni GRAM’ga o‘tkazgani uchun UC yoki Stars bonusi rasmiy manbalarda yo‘q. Havolani ochmang, UC va Stars so‘mda, hamyonsiz olinadi.",
      answer: "Ha, aldov deb biling: TON’ni GRAM’ga o‘tkazgani uchun UC yoki Stars bonusi rasmiy manbalarda yo‘q. Havolani ochmang, UC va Stars so‘mda, hamyonsiz olinadi.",
      body: [
        {
          t: "h2",
          id: "otkazing-va-bonus-oling-degan",
          text: "«O‘tkazing va bonus oling» degan taklif rostmi?",
        },
        {
          t: "p",
          text: "Yo‘q, bunday taklifni aldov deb biling. TON’ni GRAM’ga «o‘tkazgan» o‘yinchiga UC, olmos yoki Stars bonusi berilishi rasmiy manbalarda yozilmagan. UC esa PUBG Mobile akkauntingizga Player ID bo‘yicha tushadi. Uni biror tanganing nomi bilan bog‘laydigan rasmiy yo‘l yo‘q.",
        },
        {
          t: "p",
          text: "Firibgarlar bu safar haqiqiy yangilikdan foydalanyapti. <a href=\"https://ton.org/\" target=\"_blank\" rel=\"noopener\">ton.org</a> saytiga ko‘ra, TON blokcheynining o‘z tangasi Gram deb ataladi, tikeri — GRAM. O‘sha saytda bu tanga ilgari Toncoin deb ham atalgani yozilgan. Ya’ni gap yangi token haqida emas, avvalgi tanganing nomi haqida.",
        },
        {
          t: "p",
          text: "Bu mavzu Telegram kanallarida tarqalgan bir postdan keyin ko‘p muhokama qilindi. Postdagi qo‘shimcha detallar va sanalar bu maqolada tasdiqlanmagan. Balanslar o‘zgarmay qolishi haqida ham rasmiy iqtibos topilmadi. Lekin chatdagi havola orqali qilinadigan «almashtirish» yoki «migratsiya» rasmiy manbalarda ko‘rsatilmagan.",
        },
        {
          t: "p",
          text: "Nega aynan o‘yinchilarga yozishadi? Klan chatida hamma bir-birini taniydi, xabarlar tez o‘qiladi. «Bonus UC» degan so‘zni ko‘rgan o‘yinchi o‘ylab ko‘rishdan oldin bosadi. Firibgar haqiqiy yangilikka soxta «sovg‘a» qo‘shadi, xolos.",
        },
        {
          t: "h2",
          id: "tanga-nomi-ozgargani-oyinchi-donatiga",
          text: "Tanga nomi o‘zgargani o‘yinchi donatiga tegadimi?",
        },
        {
          t: "p",
          text: "Jadvalning ikkinchi ustunida faqat rasmiy saytda yozilgan narsalar bor. Uchinchi ustun — bu o‘yinchi uchun nimani anglatishi.",
        },
        {
          t: "table",
          head: [
            "Nima",
            "Rasmiy manbada",
            "O‘yinchiga ta’siri",
          ],
          rows: [
            [
              "Tanga nomi",
              "Gram — TON blokcheynining o‘z tangasi (<a href=\"https://ton.org/\" target=\"_blank\" rel=\"noopener\">ton.org</a>)",
              "UC, olmos va CP xaridiga aloqasi yo‘q",
            ],
            [
              "Avvalgi nomi",
              "Toncoin deb ham atalgan",
              "Toncoin va Gram — bitta tanga, «yangi token» emas",
            ],
            [
              "Tiker",
              "GRAM",
              "Hamyondagi GRAM yozuvi — tanganing qisqa belgisi",
            ],
            [
              "Nimaga ishlatiladi",
              "Tarmoq komissiyasi, validatsiya, ovoz berish va boshqalar",
              "O‘yin valyutasi sifatida tilga olinmagan",
            ],
            [
              "Logotip",
              "Gram va TON uchun alohida; Gram belgisi — ko‘k romb ichida oq yulduz (<a href=\"https://ton.org/media\" target=\"_blank\" rel=\"noopener\">ton.org/media</a>)",
              "Logotipni istalgan kishi nusxalay oladi",
            ],
            [
              "Telegram Stars",
              "Gram bilan sotib olish mumkin",
              "Majburiy emas: Stars so‘mda, @username bo‘yicha ham olinadi",
            ],
          ],
        },
        {
          t: "p",
          text: "UC, Mobile Legends olmosi va CoD Mobile CP o‘yin akkauntiga Player ID bo‘yicha tushadi. Ular o‘yin ichidagi valyuta, hamyonda turmaydi. Shuning uchun nom o‘zgargani sabab ular bilan hech narsa qilish shart emas.",
        },
        {
          t: "p",
          text: "Telegram Premium ham hamyonga bog‘liq emas: u @username bo‘yicha, Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi. Nom almashuvining donatga ta’siri haqida alohida yozganmiz: <a href=\"/blog/toncoin-gram-nomi-oyinchi-donatiga-tasiri\">«Toncoin endi Gram» xabari va o‘yinchi donati</a>.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "aldov-xabarini-qanday-tanish-mumkin",
          text: "Aldov xabarini qanday tanish mumkin: 7 ta belgi",
        },
        {
          t: "p",
          text: "Odatda bunday xabar taxminan shunday bo‘ladi:",
        },
        {
          t: "note",
          tone: "warn",
          text: "«Klan, diqqat! TON endi GRAM. Eski tangalarni botda bugun almashtiring — har bir ishtirokchiga bonus UC va Stars. Kech qolganlarning tangasi yo‘qoladi.»",
        },
        {
          t: "p",
          text: "Unda quyidagi belgilardan bir nechtasi bor. Bittasini ko‘rsangiz ham ehtiyot bo‘ling, ikkitasini ko‘rsangiz — suhbatni to‘xtating.",
        },
        {
          t: "list",
          items: [
            "<strong>Yangilik bilan «bonus» birga.</strong> «TON’ni GRAM’ga almashtiring», «yangi tokenlarni oling», «migratsiyadan o‘ting» — va yoniga «+ UC», «+ olmos» yoki «+ Stars».",
            "<strong>Muddat bilan qo‘rqitish.</strong> «Bugun ulgurmasangiz, tangalar yonib ketadi.» Shoshiltirish o‘ylashga vaqt qoldirmaslik uchun kerak.",
            "<strong>Hamyonni ulash talabi.</strong> Havola yoki Mini App ochib, hamyonni «ulash» yoki tranzaksiyani «imzolash» so‘raladi.",
            "<strong>«Tasdiqlash» to‘lovi.</strong> Avval ozgina tanga yuborish so‘raladi. Shunga o‘xshash sxemani <a href=\"/blog/gram-wallet-faollashtirish-oyinchiga-kerakmi\">GRAM Wallet’ni faollashtirish haqidagi maqolada</a> ko‘rib chiqqanmiz.",
            "<strong>Maxfiy ma’lumot so‘rash.</strong> Seed so‘zlar, Telegram kirish kodi, 2FA paroli so‘raladi.",
            "<strong>O‘yin akkauntiga kirish.</strong> «Bonus UC’ni yozish uchun» o‘yin login va paroli so‘raladi. UC tushirish uchun Player ID’dan boshqa narsa kerak emas.",
            "<strong>Tanish odamdan kelgan xabar.</strong> Klandoshning akkaunti buzilgan bo‘lishi mumkin. Unga boshqa yo‘l bilan — ovozli chatda yoki telefon orqali — so‘rab ko‘ring.",
          ],
        },
        {
          t: "p",
          text: "To‘g‘ri logotip ham ishonch belgisi emas. Ko‘k romb ichidagi oq yulduz rasmiy brend sahifasida hamma uchun ochiq, uni soxta saytga qo‘yish oson.",
        },
        {
          t: "p",
          text: "«Gram’ni username’imga yubor, UC tashlab beraman» deyishsa, bu boshqa sxema: <a href=\"/blog/username-boyicha-gram-otkazma-oyinchi-xavfi\">username bo‘yicha Gram o‘tkazma xavfi</a>.",
        },
        {
          t: "h2",
          id: "nimani-bosmaslik-va-hech-kimga",
          text: "Nimani bosmaslik va hech kimga bermaslik kerak?",
        },
        {
          t: "note",
          tone: "info",
          text: "Hech kimga bermang: seed so‘zlar, Telegram kirish kodi, 2FA paroli, o‘yin akkauntining paroli va «tasdiqlash» uchun so‘ralgan tanga.",
        },
        {
          t: "p",
          text: "<a href=\"https://ton.org/\" target=\"_blank\" rel=\"noopener\">ton.org</a> saytida Telegram jamoasining Gram hamyoni non-custodial, ya’ni mablag‘ni o‘zida saqlamaydigan hamyon deb ta’riflangan. Bundan amaliy xulosa: chatdagi «admin» yoki bot tangangizni o‘z-o‘zidan «ko‘chirib» bera olmaydi. Firibgarga sizning kalitingiz yoki sizning imzongiz kerak. «Migratsiya» xabarlari aynan shuni so‘raydi.",
        },
        {
          t: "p",
          text: "Notanish havola, fayl va hamyon ulashni so‘raydigan Mini App’ni ochmang. Hamyonga noma’lum token yoki NFT tushib qolsa ham, undagi havolaga kirmang — bu haqda: <a href=\"/blog/axlat-nft-mish-mishi-oyinchi-hamyoni\">axlat NFT haqidagi ogohlantirish</a>.",
        },
        {
          t: "p",
          text: "O‘yinchi uchun oddiy qoida: UC, olmos yoki CP olishda parol va kod hech qachon kerak emas. Faqat Player ID.",
        },
        {
          t: "h2",
          id: "shunday-xabar-kelsa-5-qadamda",
          text: "Shunday xabar kelsa, 5 qadamda nima qilish kerak?",
        },
        {
          t: "steps",
          items: [
            {
              title: "Havolani ochmang va javob yozmang",
              text: "«Qiziq, nima ekan» deb kirish ham xavfli: soxta sahifa darhol hamyon yoki kod so‘raydi.",
            },
            {
              title: "Jo‘natuvchini tekshiring",
              text: "Klandosh bo‘lsa, unga boshqa yo‘l bilan yozing yoki qo‘ng‘iroq qiling. Akkaunti buzilganini u sizdan bilib qolishi mumkin.",
            },
            {
              title: "Nomni faqat rasmiy saytdan tekshiring",
              text: "Tanga nomi va logotiplar haqidagi ma’lumot <a href=\"https://ton.org/\" target=\"_blank\" rel=\"noopener\">ton.org</a> va <a href=\"https://ton.org/media\" target=\"_blank\" rel=\"noopener\">ton.org/media</a> sahifalarida. Chatdagi skrinshotga emas, shu sahifalarga qarang.",
            },
            {
              title: "Shikoyat qiling",
              text: "Xabarni «Report spam» orqali belgilang va klan adminiga skrinshot yuboring.",
            },
            {
              title: "Klanni ogohlantiring",
              text: "Chatga qisqa yozing: «Gram bonusi haqidagi havolani ochmanglar». Admindan bunday xabarlarni o‘chirib, jo‘natuvchini chiqarib yuborishni so‘rang.",
            },
          ],
        },
        {
          t: "h2",
          id: "havolaga-kirib-biror-narsa-kiritib",
          text: "Havolaga kirib, biror narsa kiritib qo‘ygan bo‘lsangiz-chi?",
        },
        {
          t: "p",
          text: "Nima kiritganingizga qarab harakat qiling va kechiktirmang.",
        },
        {
          t: "list",
          items: [
            "<strong>Telegram kodi yoki 2FA paroli.</strong> Telegram sozlamalaridagi faol seanslar ro‘yxatini oching va o‘zingiz tanimagan barcha qurilmalarni chiqarib yuboring. Keyin ikki bosqichli tekshiruv parolini yoqing yoki yangisiga almashtiring.",
            "<strong>Seed so‘zlar.</strong> Bu hamyonni buzilgan deb hisoblang: undan boshqa foydalanmang va unga yangi pul qo‘ymang. Mablag‘ qaytishini hech kim va’da qila olmaydi.",
            "<strong>O‘yin akkauntining paroli.</strong> Parolni o‘yin yoki unga bog‘langan pochta orqali almashtiring. Boshqa qurilmalardan chiqing, bog‘langan pochta va raqam o‘zgartirilmaganini tekshiring.",
            "<strong>Karta ma’lumotlari.</strong> Darhol bankingizga murojaat qiling va kartani bloklating.",
            "<strong>Tanga yuborib qo‘ydingiz.</strong> «Qaytarib beramiz» degan va’daga ishonib yana pul yubormang — bu aldovning davomi bo‘lishi mumkin.",
          ],
        },
        {
          t: "p",
          text: "Agar keyin tahdid yoki shantaj boshlansa, shu rejaga amal qiling: <a href=\"/blog/tahdid-bilan-akkaunt-talab-qilish-oyinchi\">tahdid qilib akkaunt talab qilishsa nima qilish kerak</a>.",
        },
        {
          t: "h2",
          id: "donatni-gramsiz-somda-qanday-davom",
          text: "Donatni Gram’siz, so‘mda qanday davom ettirish mumkin?",
        },
        {
          t: "p",
          text: "Ko‘p o‘yinchida TON umuman yo‘q, unga UC, olmos yoki Stars kerak, xolos. Bu holda tanga nomining o‘zgarishi donatga hech qanday ta’sir qilmaydi. GemPay’da hammasi so‘mda olinadi.",
        },
        {
          t: "p",
          text: "<strong>O‘yin valyutasi.</strong> PUBG Mobile UC, Mobile Legends va Free Fire olmosi, CoD Mobile CP Player ID bo‘yicha olinadi. Bot avval nikni topib ko‘rsatadi. Siz tasdiqlaganingizdan keyin to‘laysiz, valyuta 1–5 daqiqada avtomatik tushadi. Parol so‘ralmaydi. Narxlar botda ko‘rsatiladi.",
        },
        {
          t: "p",
          text: `<strong>Telegram Stars.</strong> Faqat @username kerak, bir buyurtmada 50 tadan 10 000 tagacha, bir necha soniyada tushadi. 1 ta Stars narxi karta yoki bot balansidan ${som(STARS_UNIT_CARD, "uz")}, Click yoki Uzum Bank orqali ${som(STARS_UNIT_ONLINE, "uz")}. Esda tuting: Stars o‘yin valyutasiga aylanmaydi. Tafsilotlar — <a href="/stars">Stars sahifasida</a>.`,
        },
        {
          t: "p",
          text: `<strong>Telegram Premium.</strong> 3 oy — ${som(premium(3), "uz")}, 6 oy — ${som(premium(6), "uz")}, 12 oy — ${som(premium(12), "uz")}. Akkauntga kirilmaydi, Premium @username bo‘yicha bir necha soniyada faollashadi. Tafsilotlar — <a href="/premium">Premium sahifasida</a>.`,
        },
        {
          t: "table",
          head: [
            "Nima olasiz",
            "Nima kerak",
            "Hamyon yoki Gram kerakmi",
          ],
          rows: [
            [
              "UC, olmos, CP",
              "Player ID",
              "Yo‘q",
            ],
            [
              "Telegram Stars",
              "@username",
              "Yo‘q",
            ],
            [
              "Telegram Premium",
              "@username",
              "Yo‘q",
            ],
          ],
        },
        {
          t: "p",
          text: "To‘lov UzCard, HUMO, Click, Uzum Bank yoki bot balansi orqali qilinadi. Kripto, VPN va hamyon kerak emas, Gram esa GemPay’ning to‘lov usullari orasida yo‘q. Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi: <a href=\"/tolov-va-qaytarish\">to‘lov va qaytarish</a>.",
        },
        {
          t: "p",
          text: "GemPay’ning boti — <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>, yordam — <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>, unga buyurtma raqami bilan yoziladi. Boshqa akkauntdan GemPay nomi bilan «Gram bonus» haqida xabar kelsa, u GemPay’dan emas. Hamyonsiz donat haqida yana: <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">Telegram Wallet o‘yinchiga kerakmi</a>.",
        },
        {
          t: "sources",
          items: [
            {
              label: "TON — The Leading L1 Blockchain",
              href: "https://ton.org/",
            },
            {
              label: "Media Assets",
              href: "https://ton.org/media",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Menda TON umuman yo‘q, faqat UC olaman. Bu xabar menga ham tegishlimi?",
          a: "Faqat ehtiyot bo‘lish ma’nosida. UC Player ID bo‘yicha so‘mda olinadi va tanga nomiga bog‘liq emas, shuning uchun «o‘tkazadigan» hech narsangiz yo‘q.",
        },
        {
          q: "Xabarni klandoshim yubordi. Unga ishonsam bo‘ladimi?",
          a: "Kim yuborganiga emas, nima so‘ralayotganiga qarang. Tanish akkaunt ham buzilgan bo‘lishi mumkin: klandoshingizga boshqa yo‘l bilan qo‘ng‘iroq qiling, havolani esa ochmang.",
        },
        {
          q: "Gram bilan PUBG UC yoki MLBB olmosini sotib olsa bo‘ladimi?",
          a: "ton.org Gram bilan Telegram Stars olish mumkinligini yozadi, UC yoki olmos haqida esa gap yo‘q. GemPay’da Gram qabul qilinmaydi: o‘yin valyutasi UzCard, HUMO, Click, Uzum Bank yoki bot balansi bilan olinadi.",
        },
        {
          q: "Klan chatidagi «Gram» logotipi rasmiynikiga o‘xshaydi. Demak, xabar haqiqiymi?",
          a: "Yo‘q. Gram va TON logotiplari rasmiy brend sahifasida hammaga ochiq turadi. Haqiqiylikni rasm emas, so‘ralayotgan narsa ko‘rsatadi: hamyon ulash, kod yoki to‘lov so‘ralsa — aldov.",
        },
        {
          q: "Bonus UC olish uchun avval ozgina Gram yuborishim kerak ekan. Arziydimi?",
          a: "Yo‘q. Nom almashuvi uchun kimgadir tanga yuborish talabi rasmiy manbalarda ko‘rsatilmagan. Yuborilgan tanga UC kelishini ta’minlamaydi.",
        },
        {
          q: "Kimdir GemPay xodimi bo‘lib, Gram bonus haqida yozdi. Nima qilay?",
          a: "Javob bermang va xabarni spam deb belgilang. GemPay’ning boti faqat @Gempayuz_bot, yordami — @StarsPaymeeSupport, to‘lov esa so‘mda qilinadi.",
        },
      ],
    },
    ru: {
      title: "«Переведи TON в GRAM и получи бонус UC»: это обман?",
      metaTitle: "«Переведи TON в GRAM и получи бонус UC»: это обман?",
      metaDescription: "Да, это обман: бонусов UC или Stars за перевод TON в GRAM в официальных источниках нет. Ссылку не открывайте — UC и Stars покупают в сумах без кошелька.",
      excerpt: "Да, это обман: бонусов UC или Stars за перевод TON в GRAM в официальных источниках нет. Ссылку не открывайте — UC и Stars покупают в сумах без кошелька.",
      answer: "Да, это обман: бонусов UC или Stars за перевод TON в GRAM в официальных источниках нет. Ссылку не открывайте — UC и Stars покупают в сумах без кошелька.",
      body: [
        {
          t: "h2",
          id: "otkazing-va-bonus-oling-degan",
          text: "Правда ли, что за «перевод» дают бонус?",
        },
        {
          t: "p",
          text: "Нет, такое предложение считайте обманом. В официальных источниках нигде не сказано, что игрок получит UC, алмазы или Stars, если «переведёт» TON в GRAM. UC зачисляются на аккаунт PUBG Mobile по Player ID. Официального способа, который связывал бы их с названием какой-либо монеты, нет.",
        },
        {
          t: "p",
          text: "На этот раз мошенники опираются на настоящую новость. По данным сайта <a href=\"https://ton.org/\" target=\"_blank\" rel=\"noopener\">ton.org</a>, собственная монета блокчейна TON называется Gram, её тикер — GRAM. Там же сказано, что раньше эту монету называли и Toncoin. Речь идёт не о новом токене, а о названии прежней монеты.",
        },
        {
          t: "p",
          text: "Тему активно обсуждают после поста, который разошёлся по Telegram-каналам. Дополнительные подробности и даты из этого поста в нашей статье не подтверждены. Официальной цитаты о том, что балансы останутся без изменений, мы тоже не нашли. Но «обмена» или «миграции» по ссылке из чата официальные источники не упоминают.",
        },
        {
          t: "p",
          text: "Почему пишут именно игрокам? В клановом чате все друг друга знают, сообщения читают быстро. Игрок видит слова «бонусные UC» и нажимает раньше, чем успевает подумать. Мошенник просто добавляет к реальной новости фальшивый «подарок».",
        },
        {
          t: "h2",
          id: "tanga-nomi-ozgargani-oyinchi-donatiga",
          text: "Касается ли смена названия монеты игрового доната?",
        },
        {
          t: "p",
          text: "Во втором столбце таблицы — только то, что написано на официальном сайте. В третьем — что это значит для игрока.",
        },
        {
          t: "table",
          head: [
            "Что",
            "В официальном источнике",
            "Что это значит для игрока",
          ],
          rows: [
            [
              "Название монеты",
              "Gram — собственная монета блокчейна TON (<a href=\"https://ton.org/\" target=\"_blank\" rel=\"noopener\">ton.org</a>)",
              "К покупке UC, алмазов и CP отношения не имеет",
            ],
            [
              "Прежнее название",
              "Также называлась Toncoin",
              "Toncoin и Gram — одна монета, а не «новый токен»",
            ],
            [
              "Тикер",
              "GRAM",
              "Надпись GRAM в кошельке — краткое обозначение монеты",
            ],
            [
              "Для чего используется",
              "Комиссии сети, валидация, голосование и другое",
              "Как игровая валюта не упоминается",
            ],
            [
              "Логотип",
              "Отдельные для Gram и TON; значок Gram — белая звезда в синем ромбе (<a href=\"https://ton.org/media\" target=\"_blank\" rel=\"noopener\">ton.org/media</a>)",
              "Скопировать логотип может кто угодно",
            ],
            [
              "Telegram Stars",
              "Можно купить за Gram",
              "Не обязательно: Stars можно купить и в сумах, по @username",
            ],
          ],
        },
        {
          t: "p",
          text: "UC, алмазы Mobile Legends и CP в CoD Mobile зачисляются на игровой аккаунт по Player ID. Это внутриигровая валюта, в кошельке она не хранится. Поэтому из-за смены названия с ней ничего делать не нужно.",
        },
        {
          t: "p",
          text: "Telegram Premium тоже не зависит от кошелька: он подключается по @username через официальный механизм подарков Telegram. О том, как переименование влияет на донат, мы писали отдельно: <a href=\"/blog/toncoin-gram-nomi-oyinchi-donatiga-tasiri\">сообщение «Toncoin теперь Gram» и игровой донат</a>.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "aldov-xabarini-qanday-tanish-mumkin",
          text: "Как распознать мошенническое сообщение: 7 признаков",
        },
        {
          t: "p",
          text: "Обычно такое сообщение выглядит примерно так:",
        },
        {
          t: "note",
          tone: "warn",
          text: "«Клан, внимание! TON теперь GRAM. Обменяйте старые монеты в боте сегодня — каждому участнику бонусные UC и Stars. У опоздавших монеты сгорят».",
        },
        {
          t: "p",
          text: "В нём встречается сразу несколько признаков из списка ниже. Заметили один — будьте осторожны, заметили два — прекращайте разговор.",
        },
        {
          t: "list",
          items: [
            "<strong>Новость вместе с «бонусом».</strong> «Обменяйте TON на GRAM», «получите новые токены», «пройдите миграцию» — и рядом «+ UC», «+ алмазы» или «+ Stars».",
            "<strong>Запугивание сроком.</strong> «Не успеете сегодня — монеты сгорят». Спешка нужна, чтобы у вас не осталось времени подумать.",
            "<strong>Требование подключить кошелёк.</strong> Просят открыть ссылку или Mini App, «подключить» кошелёк или «подписать» транзакцию.",
            "<strong>Платёж «для подтверждения».</strong> Сначала просят отправить немного монет. Похожую схему мы разбирали в <a href=\"/blog/gram-wallet-faollashtirish-oyinchiga-kerakmi\">статье об активации GRAM Wallet</a>.",
            "<strong>Запрос секретных данных.</strong> Просят seed-фразу, код входа в Telegram, пароль 2FA.",
            "<strong>Вход в игровой аккаунт.</strong> Просят логин и пароль от игры, якобы «чтобы начислить бонусные UC». Для зачисления UC не нужно ничего, кроме Player ID.",
            "<strong>Сообщение от знакомого.</strong> Аккаунт соклановца могли взломать. Уточните у него другим способом — в голосовом чате или по телефону.",
          ],
        },
        {
          t: "p",
          text: "Правильный логотип — тоже не признак подлинности. Белая звезда в синем ромбе открыто лежит на официальной странице с бренд-материалами, поставить её на фальшивый сайт несложно.",
        },
        {
          t: "p",
          text: "Если говорят «скинь Gram на мой username, а я закину тебе UC», это уже другая схема: <a href=\"/blog/username-boyicha-gram-otkazma-oyinchi-xavfi\">чем опасен перевод Gram по username</a>.",
        },
        {
          t: "h2",
          id: "nimani-bosmaslik-va-hech-kimga",
          text: "Что нельзя нажимать и никому отдавать?",
        },
        {
          t: "note",
          tone: "info",
          text: "Никому не передавайте: seed-фразу, код входа в Telegram, пароль 2FA, пароль от игрового аккаунта и монеты, которые просят «для подтверждения».",
        },
        {
          t: "p",
          text: "На сайте <a href=\"https://ton.org/\" target=\"_blank\" rel=\"noopener\">ton.org</a> кошелёк Gram от команды Telegram описан как non-custodial — то есть кошелёк, который не хранит ваши средства у себя. Практический вывод: ни «админ» из чата, ни бот не могут сами «перенести» ваши монеты. Мошеннику нужен ваш ключ или ваша подпись. Именно их и просят сообщения о «миграции».",
        },
        {
          t: "p",
          text: "Не открывайте незнакомые ссылки, файлы и Mini App, которые просят подключить кошелёк. Даже если в кошелёк пришёл неизвестный токен или NFT, не переходите по ссылке внутри него — подробнее в материале <a href=\"/blog/axlat-nft-mish-mishi-oyinchi-hamyoni\">о предупреждении про мусорные NFT</a>.",
        },
        {
          t: "p",
          text: "Простое правило для игрока: для покупки UC, алмазов или CP пароль и код не нужны никогда. Только Player ID.",
        },
        {
          t: "h2",
          id: "shunday-xabar-kelsa-5-qadamda",
          text: "Пришло такое сообщение: что делать за 5 шагов?",
        },
        {
          t: "steps",
          items: [
            {
              title: "Не открывайте ссылку и не отвечайте",
              text: "Зайти «просто посмотреть» тоже опасно: фальшивая страница сразу попросит кошелёк или код.",
            },
            {
              title: "Проверьте отправителя",
              text: "Если это соклановец, напишите ему другим способом или позвоните. Возможно, он узнает от вас, что его аккаунт взломан.",
            },
            {
              title: "Сверяйте название только на официальном сайте",
              text: "Сведения о названии монеты и логотипах есть на страницах <a href=\"https://ton.org/\" target=\"_blank\" rel=\"noopener\">ton.org</a> и <a href=\"https://ton.org/media\" target=\"_blank\" rel=\"noopener\">ton.org/media</a>. Смотрите туда, а не на скриншот из чата.",
            },
            {
              title: "Пожалуйтесь",
              text: "Отметьте сообщение как спам через «Сообщить о спаме» и отправьте скриншот админу клана.",
            },
            {
              title: "Предупредите клан",
              text: "Коротко напишите в чат: «Ссылку про бонус за Gram не открывайте». Попросите админа удалять такие сообщения и исключить отправителя.",
            },
          ],
        },
        {
          t: "h2",
          id: "havolaga-kirib-biror-narsa-kiritib",
          text: "А если вы уже перешли по ссылке и что-то ввели?",
        },
        {
          t: "p",
          text: "Действуйте в зависимости от того, что именно ввели, и не откладывайте.",
        },
        {
          t: "list",
          items: [
            "<strong>Код Telegram или пароль 2FA.</strong> Откройте в настройках Telegram список активных сеансов и завершите все сеансы на устройствах, которых вы не узнаёте. Затем включите двухэтапную аутентификацию или смените её пароль на новый.",
            "<strong>Seed-фраза.</strong> Считайте кошелёк скомпрометированным: больше им не пользуйтесь и не кладите туда новые деньги. Вернуть средства никто пообещать не может.",
            "<strong>Пароль от игрового аккаунта.</strong> Смените пароль через игру или привязанную почту. Выйдите со всех других устройств и проверьте, не изменены ли привязанные почта и номер.",
            "<strong>Данные карты.</strong> Сразу свяжитесь с банком и заблокируйте карту.",
            "<strong>Вы уже отправили монеты.</strong> Не отправляйте деньги ещё раз, поверив обещанию «мы всё вернём», — это может быть продолжением обмана.",
          ],
        },
        {
          t: "p",
          text: "Если после этого начались угрозы или шантаж, действуйте по этому плану: <a href=\"/blog/tahdid-bilan-akkaunt-talab-qilish-oyinchi\">что делать, если требуют аккаунт с угрозами</a>.",
        },
        {
          t: "h2",
          id: "donatni-gramsiz-somda-qanday-davom",
          text: "Как продолжать донатить без Gram, в сумах?",
        },
        {
          t: "p",
          text: "У многих игроков TON вообще нет — им нужны только UC, алмазы или Stars. В этом случае смена названия монеты на донат никак не влияет. В GemPay всё покупается в сумах.",
        },
        {
          t: "p",
          text: "<strong>Игровая валюта.</strong> UC в PUBG Mobile, алмазы Mobile Legends и Free Fire, CP в CoD Mobile покупаются по Player ID. Бот сначала находит и показывает ник. Вы подтверждаете — и только потом платите, валюта автоматически приходит за 1–5 минут. Пароль не запрашивается. Цены указаны в боте.",
        },
        {
          t: "p",
          text: `<strong>Telegram Stars.</strong> Нужен только @username, за один заказ — от 50 до 10 000 звёзд, приходят за несколько секунд. Цена 1 звезды — ${som(STARS_UNIT_CARD, "ru")} с карты или баланса бота, ${som(STARS_UNIT_ONLINE, "ru")} через Click или Uzum Bank. Учтите: Stars не превращаются в игровую валюту. Подробности — <a href="/stars">на странице Stars</a>.`,
        },
        {
          t: "p",
          text: `<strong>Telegram Premium.</strong> 3 месяца — ${som(premium(3), "ru")}, 6 месяцев — ${som(premium(6), "ru")}, 12 месяцев — ${som(premium(12), "ru")}. Входить в аккаунт не нужно: Premium активируется по @username за несколько секунд. Подробности — <a href="/premium">на странице Premium</a>.`,
        },
        {
          t: "table",
          head: [
            "Что покупаете",
            "Что нужно",
            "Нужен ли кошелёк или Gram",
          ],
          rows: [
            [
              "UC, алмазы, CP",
              "Player ID",
              "Нет",
            ],
            [
              "Telegram Stars",
              "@username",
              "Нет",
            ],
            [
              "Telegram Premium",
              "@username",
              "Нет",
            ],
          ],
        },
        {
          t: "p",
          text: "Оплата — через UzCard, HUMO, Click, Uzum Bank или баланс бота. Криптовалюта, VPN и кошелёк не нужны, а Gram среди способов оплаты GemPay нет. Если заказ не выполнен, деньги полностью возвращаются в течение 3 рабочих дней: <a href=\"/tolov-va-qaytarish\">оплата и возврат</a>.",
        },
        {
          t: "p",
          text: "Бот GemPay — <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>, поддержка — <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>, писать туда нужно с номером заказа. Если с другого аккаунта от имени GemPay пишут про «бонус за Gram», это не GemPay. Ещё о донате без кошелька: <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">нужен ли игроку Telegram Wallet</a>.",
        },
        {
          t: "sources",
          items: [
            {
              label: "TON — The Leading L1 Blockchain",
              href: "https://ton.org/",
            },
            {
              label: "Media Assets",
              href: "https://ton.org/media",
            },
          ],
        },
      ],
      faq: [
        {
          q: "У меня вообще нет TON, я только покупаю UC. Это сообщение касается и меня?",
          a: "Только в смысле осторожности. UC покупаются в сумах по Player ID и от названия монеты не зависят, так что «переводить» вам нечего.",
        },
        {
          q: "Сообщение прислал соклановец. Ему можно доверять?",
          a: "Смотрите не на то, кто прислал, а на то, что просят. Знакомый аккаунт тоже могли взломать: позвоните соклановцу другим способом, а ссылку не открывайте.",
        },
        {
          q: "Можно ли купить UC в PUBG или алмазы MLBB за Gram?",
          a: "На ton.org написано, что за Gram можно купить Telegram Stars, а про UC и алмазы там ничего нет. GemPay не принимает Gram: игровая валюта оплачивается через UzCard, HUMO, Click, Uzum Bank или баланс бота.",
        },
        {
          q: "Логотип «Gram» в клановом чате похож на официальный. Значит, сообщение настоящее?",
          a: "Нет. Логотипы Gram и TON открыто доступны всем на официальной странице бренда. Подлинность определяет не картинка, а то, что от вас просят: подключить кошелёк, код или платёж — значит, обман.",
        },
        {
          q: "Чтобы получить бонусные UC, сначала нужно отправить немного Gram. Стоит ли?",
          a: "Нет. Официальные источники не говорят, что из-за смены названия нужно кому-то отправлять монеты. Отправленные монеты не гарантируют, что UC придут.",
        },
        {
          q: "Кто-то назвался сотрудником GemPay и написал про бонус за Gram. Что делать?",
          a: "Не отвечайте и отметьте сообщение как спам. Бот GemPay — только @Gempayuz_bot, поддержка — @StarsPaymeeSupport, а оплата проходит в сумах.",
        },
      ],
    },
  },
};

export default article;
