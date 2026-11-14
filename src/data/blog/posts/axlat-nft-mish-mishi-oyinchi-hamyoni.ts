// Avtoblogyoz yasagan maqola (2026-11-14). Niyat: Klan yoki o'yin chatida «axlat NFT bilan ishlasang, hamyon bo'shaydi yoki bloklanadi» degan ogohlantirishni o'qigan o'yinchi bu rostmi, uning TON hamyoni, Telegram akkaunti, Stars va donati xavf ostidami — shuni bilmoqchi va «axlat NFT hamyonni bo'shatadimi» deb qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/blog/wear-gifts-blockchain-and-more

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "axlat-nft-mish-mishi-oyinchi-hamyoni",
  game: null,
  type: "trust",
  datePublished: "2026-11-14",
  dateModified: "2026-11-14",
  keywords: ["axlat NFT hamyonni bo'shatadimi","spam NFT xavflimi","TON hamyonga notanish NFT keldi","axlat NFT yoqsam nima bo'ladi","Tonkeeper spam NFT","hamyon bo'shab qoldi NFT","мусорные NFT опасно ли","спам NFT кошелек TON","сжечь мусорный NFT потеряю средства","Tonkeeper не открывается после NFT","Stars va UC hamyonsiz olish"],
  locales: {
    uz: {
      title: "Axlat NFT hamyonni bo‘shatadimi: klan chatidagi ogohlantirish rostmi?",
      metaTitle: "Axlat NFT hamyonni bo‘shatadimi",
      metaDescription: "Axlat NFT’ning o‘zi hamyonni bo‘shatishi rasmiy manbada tasdiqlanmagan. Xavf undagi havola, imzo va seed so‘zlarda, Stars va UC donati esa hamyonga bog‘liq…",
      excerpt: "Axlat NFT’ning o‘zi hamyonni bo‘shatishi rasmiy manbada tasdiqlanmagan. Xavf undagi havola, imzo va seed so‘zlarda, Stars va UC donati esa hamyonga bog‘liq emas.",
      answer: "Axlat NFT’ning o‘zi hamyonni bo‘shatishi rasmiy manbada tasdiqlanmagan. Xavf undagi havola, imzo va seed so‘zlarda, Stars va UC donati esa hamyonga bog‘liq emas.",
      body: [
        {
          t: "h2",
          id: "axlat-nftning-ozi-hamyonni-boshatadimi",
          text: "Axlat NFT’ning o‘zi hamyonni bo‘shatadimi?",
        },
        {
          t: "p",
          text: "NFT’ga tegsangiz hamyon bo‘shaydi yoki bloklanadi degan gapni birorta rasmiy manba tasdiqlamaydi. Ammo bunday NFT bilan nima qilsangiz ham xavfsiz degan rasmiy bayonot ham topilmadi. Demak, vahimaga ham, beparvolikka ham asos yo‘q.",
        },
        {
          t: "p",
          text: "Mish-mish TON kanallaridan klan chatlariga ko‘chdi. Unda aytilishicha, hamyonga tarqatilgan axlat NFT’ni yoqsangiz yoki boshqa manzilga yuborsangiz, mablag‘ yo‘qoladi yoki hamyon bloklanadi. Ayrim kanallarda bu gap hamyon ishlab chiquvchilari tomonidan rad etilgani yozilgan. Lekin bu faqat Telegram postlarida bor, rasmiy sahifalarda yo‘q. Shuning uchun bu maqolada ham rad javob, ham ogohlantirishning o‘zi tasdiqlanmagan deb olinadi.",
        },
        {
          t: "p",
          text: "TON’ning rasmiy saytida «How to stay safe on TON &amp; Telegram» degan xavfsizlik sahifasi bor. Unda spam NFT, airdrop, NFT ichidagi havola yoki tranzaksiya imzolash haqida alohida gap yo‘q. Rasmiy yo‘riqnoma bo‘lmagani uchun umumiy ehtiyot qoidalariga tayanamiz.",
        },
        {
          t: "p",
          text: "Ogohlantirishdagi foydali qism bitta: notanish havola va tushunmagan imzodan uzoq turing. Qolgani tekshirilmagan gap.",
        },
        {
          t: "h2",
          id: "ogohlantirish-oyinchining-qaysi-puli-ga",
          text: "Ogohlantirish o‘yinchining qaysi «puli»ga tegishli?",
        },
        {
          t: "p",
          text: "O‘yinchining puli va aktivlari bir necha joyda turadi. Mish-mish ulardan faqat bittasi haqida.",
        },
        {
          t: "table",
          head: [
            "Aktiv",
            "Qayerda turadi",
            "Spam NFT bilan bog‘liqmi",
            "Nima qo‘riqlaydi",
          ],
          rows: [
            [
              "TON hamyon va undagi tokenlar",
              "Blokcheynda",
              "Ha, mish-mish shu haqda",
              "Hamyon kaliti va nimani imzolayotganingiz",
            ],
            [
              "Hamyonga chiqarilgan kolleksion sovg‘a",
              "TON blokcheynida",
              "Ha, hamyon bilan birga",
              "Hamyon kaliti",
            ],
            [
              "Telegram akkaunti",
              "Telegram’da, hamyondan alohida",
              "To‘g‘ridan-to‘g‘ri emas",
              "Kirish kodi va ikki bosqichli tekshiruv paroli",
            ],
            [
              "Telegram Stars",
              "Telegram ichida, akkauntga bog‘langan",
              "Yo‘q, TON hamyonda turmaydi",
              "Telegram akkaunt himoyasi",
            ],
            [
              "UC, olmos, CP",
              "O‘yin akkauntida, Player ID’ga bog‘langan",
              "Yo‘q",
              "O‘yin akkauntiga kirish usuli",
            ],
          ],
        },
        {
          t: "p",
          text: "Hamyonida kripto yoki sovg‘a saqlamaydigan o‘yinchiga bu mish-mish o‘z-o‘zidan tahdid solmaydi. Hamyoni bor o‘yinchi uchun esa xavf NFT’ning o‘zidan emas, undan keyingi harakatlardan chiqadi.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "nega-bu-mish-mish-aynan",
          text: "Nega bu mish-mish aynan klan chatlarida tez tarqaladi?",
        },
        {
          t: "p",
          text: "Telegram kolleksion sovg‘alarni TON blokcheyni orqali boshqaga o‘tkazish va auksionga qo‘yish imkonini bergan (<a href=\"https://telegram.org/blog/wear-gifts-blockchain-and-more\" target=\"_blank\" rel=\"noopener\">Telegram blogi</a>, 2025-yil yanvar, ma’lumot o‘zgargan bo‘lishi mumkin). Klanda sovg‘a almashadigan o‘yinchilarning ko‘pida shu sababli hamyon bor. Hamyonga notanish narsa tushsa, u chatda darhol muhokama bo‘ladi.",
        },
        {
          t: "p",
          text: "O‘sha blogda sovg‘ani TON hamyonga o‘tkazgach, uni tashqi xizmatlarga ulash mumkinligi aytilgan. Firibgarlar aynan shundan foydalanadi: hamyonni «tekshirish», «tozalash» yoki «sovg‘a qiymatini bilish» uchun tashqi sayt yoki botga ulashni taklif qiladi.",
        },
        {
          t: "p",
          text: "Shunday holatni tasavvur qiling. Klan chatiga «Axlat NFT keldimi? Hamyoningiz xavfda! Tekshirish uchun shu botga ulaning» degan xabar tashlandi. Ostida havola bor. Qo‘rqitadigan matn va «yechim» bitta xabarda kelgan bo‘lsa, ogohlantirishning o‘zi tuzoqdir. Rost ogohlantirish sizdan hamyon ulashni so‘ramaydi.",
        },
        {
          t: "p",
          text: "Sovg‘a yoki gift sotib olish taklifini aldovdan ajratish belgilari <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">giftni sotib olish taklifi haqidagi maqolada</a> bor.",
        },
        {
          t: "h2",
          id: "xavf-aslida-qaysi-harakatda",
          text: "Xavf aslida qaysi harakatda?",
        },
        {
          t: "p",
          text: "Rasmiy TON hujjatida bu mavzu bo‘yicha yo‘riqnoma yo‘q. Shuning uchun quyidagi ro‘yxat umumiy xavfsizlik qoidasi. Har bir holatda zararni NFT emas, sizning harakatingiz keltiradi:",
        },
        {
          t: "list",
          items: [
            "NFT tavsifidagi yoki chatdagi havolani ochib, tashqi saytga hamyonni ulash.",
            "Sayt yoki botga tiklash so‘zlarini (seed) kiritish. Bu so‘zlar hamyon kaliti, ularni hech qayerga yozmang.",
            "Ilova nima uchun imzo so‘rayotganini o‘qimasdan «Tasdiqlash» tugmasini bosish. Imzolangan tranzaksiya sizning nomingizdan bajariladi.",
            "«NFT’ni men olib tashlab beraman, hamyoningni ulab ber» deydigan klandosh yoki «garant» bot.",
            "«Hamyonni tiklash» bahonasida Telegram kirish kodi yoki ikki bosqichli parolni so‘rash. Bu hamyonga emas, Telegram akkauntingizga qaratilgan urinish.",
          ],
        },
        {
          t: "p",
          text: "Chatga tashlangan havolalar va spam shikoyatlari haqida: <a href=\"/blog/klan-chatida-shubhali-havola-spam-cheklov\">klan chatida shubhali havola keldi</a>.",
        },
        {
          t: "h2",
          id: "ogohlantirishni-oqigach-nima-qilish-kerak",
          text: "Ogohlantirishni o‘qigach nima qilish kerak?",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Hamyondagi notanish NFT’ga shoshilib tegmang. Uni yoqish, yuborish yoki sotish xavfli ekani ham, xavfsiz ekani ham rasman tasdiqlanmagan.",
            "Xabar ichidagi «tekshiruv» havolasini ham, NFT tavsifidagi havolani ham ochmang.",
            "Gap qayerdan chiqqanini aniqlang: hamyon ilovasining rasmiy kanali yoki sayti nima deyapti. Skrinshot va forward qilingan matn manba emas.",
            "Telegram’da ikki bosqichli tekshiruv parolini yoqing. Bunda kirish kodining o‘zi akkauntga kirishga yetmaydi. Batafsil: <a href=\"/blog/888-anonim-raqam-oyinchi-akkaunt-himoyasi\">akkauntni buzishdan himoyalash</a>.",
            "Hamyonda katta mablag‘ yoki qimmat sovg‘a bo‘lsa, tiklash so‘zlari faqat sizda, qog‘ozda turganini tekshiring. Ularni «support» deb yozganlarga ham bermang.",
          ],
        },
        {
          t: "h2",
          id: "xabarni-oqib-nimadir-bosib-qoygan",
          text: "Xabarni o‘qib, nimadir bosib qo‘ygan bo‘lsangiz-chi?",
        },
        {
          t: "p",
          text: "Hammasi nima bosganingizga bog‘liq. Hamyon ilovasi vaqtincha ochilmasa yoki balans ko‘rinmasa, bu hali o‘g‘irlik degani emas. Ayrim kanallar bunday holatni xizmatdagi nosozlik deb izohlagan, lekin rasmiy tasdiq yo‘q. Bunday paytda:",
        },
        {
          t: "list",
          items: [
            "ilovani yangilang va biroz kuting;",
            "internet va boshqa ilovalar ishlayotganini tekshiring;",
            "tiklash so‘zlarini «tekshirib ko‘rish uchun» notanish ilova yoki saytga kiritmang.",
          ],
        },
        {
          t: "p",
          text: "Hamyonni tashqi saytga ulagan, biror tranzaksiyani imzolagan yoki seed so‘zlarni kiritgan bo‘lsangiz, vaziyat jiddiyroq. Qolgan mablag‘ va sovg‘alarni o‘zingiz yangi yaratgan hamyonga o‘tkazishni o‘ylab ko‘ring. Telegram kodini bergan bo‘lsangiz, faol seanslarni tekshirib, begonalarini yoping.",
        },
        {
          t: "note",
          tone: "warn",
          text: "Yordamni faqat hamyon ilovasining o‘zidagi rasmiy aloqa orqali so‘rang. Shaxsiy xabarga o‘zi yozib kelgan «yordamchi» — firibgar.",
        },
        {
          t: "h2",
          id: "hamyondagi-sovgani-nima-qoriqlaydi",
          text: "Hamyondagi sovg‘ani nima qo‘riqlaydi?",
        },
        {
          t: "p",
          text: "<a href=\"https://telegram.org/blog/wear-gifts-blockchain-and-more\" target=\"_blank\" rel=\"noopener\">Telegram blogiga</a> ko‘ra, blokcheynga o‘tkazilgan sovg‘a egasining qo‘lida qoladi. Egasi Telegram akkauntiga kira olmay qolsa yoki uni o‘chirib yuborsa ham, sovg‘a uniki bo‘lib qolaveradi.",
        },
        {
          t: "p",
          text: "Buning teskari tomoni ham bor. Bunday sovg‘ani Telegram paroli emas, hamyon kaliti qo‘riqlaydi. Kalit kimda bo‘lsa, sovg‘ani o‘sha boshqaradi.",
        },
        {
          t: "p",
          text: "O‘yinchi uchun amaliy xulosa:",
        },
        {
          t: "list",
          items: [
            "turnir yoki tug‘ilgan kun uchun olgan qimmat sovg‘ani hamyonga chiqarsangiz, uni hamyondagi pul kabi qo‘riqlang;",
            "sovg‘a Telegram’da qolsa, akkaunt himoyasi birinchi o‘rinda: kirish kodi va ikki bosqichli parol;",
            "sovg‘ani TON’dan Telegram’ga qaytarish mumkinmi, bu maqolada tasdiqlanmagan, chiqarish narxi ham topilmadi. Shuning uchun chiqarishdan oldin yaxshilab o‘ylang.",
          ],
        },
        {
          t: "h2",
          id: "stars-premium-va-ucni-hamyonsiz",
          text: "Stars, Premium va UC’ni hamyonsiz qanday olish mumkin?",
        },
        {
          t: "p",
          text: "Donat va Telegram xaridlari uchun TON hamyon kerak emas. Bu xaridlar hamyon orqali o‘tmaydi, shuning uchun hamyondagi NFT ularga bog‘liq emas. Batafsil: <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">Telegram Wallet o‘yinchiga kerakmi</a>.",
        },
        {
          t: "p",
          text: "GemPay’da bu xaridlar quyidagicha qilinadi:",
        },
        {
          t: "list",
          items: [
            `<strong>Stars</strong> — faqat @username bo‘yicha, bitta buyurtmada 50 dan 10 000 tagacha. Karta o‘tkazmasi yoki bot balansidan donasi ${som(STARS_UNIT_CARD, "uz")}, Click yoki Uzum Bank orqali ${som(STARS_UNIT_ONLINE, "uz")}. Bir necha soniyada tushadi.`,
            `<strong>Premium</strong> — @username bo‘yicha Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi, akkauntingizga kirilmaydi. 3 oy — ${som(premium(3), "uz")}, 6 oy — ${som(premium(6), "uz")}, 12 oy — ${som(premium(12), "uz")}. 1 oylik tarif yo‘q.`,
            "<strong>UC, olmos, CP</strong> — faqat Player ID kerak, parol so‘ralmaydi. Avval nik tekshirib ko‘rsatiladi, tasdiqlaganingizdan keyin to‘laysiz. Valyuta 1–5 daqiqada tushadi.",
          ],
        },
        {
          t: "p",
          text: "To‘lov UzCard, HUMO, Click, Uzum Bank yoki bot balansi orqali qilinadi. Kripto, VPN va xorijiy karta kerak emas. Stars o‘yin valyutasiga aylanmaydi. Shuning uchun klandoshga sovg‘ani u ko‘proq qayerda faolligiga qarab tanlang: o‘yinda bo‘lsa UC yoki olmos, chatda bo‘lsa Stars yoki Premium.",
        },
        {
          t: "p",
          text: "Kimdir chatda donat uchun TON manzil tashlasa, nega pul yubormaslik kerakligi <a href=\"/blog/ton-manzilga-donat-tolovi-oyinchi-xavfi\">TON manzilga to‘lov haqidagi maqolada</a> yozilgan. Buyurtma <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> orqali beriladi. Savol bo‘lsa, buyurtma raqamini ko‘rsatib <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>ga yozing.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Telegram blogi: Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More (24.01.2025)",
              href: "https://telegram.org/blog/wear-gifts-blockchain-and-more",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Hamyonga axlat NFT tushsa, PUBG yoki MLBB’dagi UC va olmosim yo‘qolishi mumkinmi?",
          a: "Yo‘q, o‘yin valyutasi o‘yin akkauntida saqlanadi va Player ID’ga bog‘langan, TON hamyon bilan aloqasi yo‘q. O‘yin akkauntiga xavf faqat parol yoki kirish kodini birovga berganda paydo bo‘ladi.",
        },
        {
          q: "Telegram’dagi Stars’im hamyondagi spam NFT sababli kamayadimi?",
          a: "Stars TON hamyonda turmaydi, ular Telegram akkauntingizga bog‘langan. Shuning uchun Stars uchun akkaunt himoyasi muhimroq: kirish kodini hech kimga bermang va ikki bosqichli parolni yoqing.",
        },
        {
          q: "Klandosh «hamyoningni ulab ber, axlat NFT’ni tozalab beraman» desa, nima qilay?",
          a: "Rad eting: NFT sababli hamyonni begona sayt yoki botga ulashga hech qanday asos yo‘q. Klandoshning akkaunti buzilgan bo‘lishi ham mumkin, shuning uchun u bilan boshqa yo‘l orqali, masalan o‘yin ichida yoki ovozli chatda bog‘lanib, buni so‘rab ko‘ring.",
        },
        {
          q: "Bu ogohlantirishni klan chatida hammaga forward qilish kerakmi?",
          a: "Vahimali matnni tarqatmang, ayniqsa ichida havola bo‘lsa. Undan ko‘ra qisqa eslatma yozing: notanish havolani ochmang, seed so‘zlar va Telegram kodini hech kimga bermang.",
        },
        {
          q: "TON hamyonim yo‘q bo‘lsa, menga bu xavf bormi?",
          a: "NFT orqali to‘g‘ridan-to‘g‘ri xavf yo‘q, chunki mish-mish hamyon egalari haqida. Lekin shu mavzuni bahona qilib Telegram kodi yoki parol so‘raydigan xabarlar sizga ham kelishi mumkin.",
        },
        {
          q: "GemPay Stars yoki UC uchun hamyon manzili yoki seed so‘zlarni so‘raydimi?",
          a: "Yo‘q. Stars va Premium uchun @username, o‘yin valyutasi uchun Player ID yetadi. GemPay nomidan hamyon, seed yoki parol so‘ragan odam GemPay emas.",
        },
      ],
    },
    ru: {
      title: "Спам-NFT опустошит кошелёк: правда ли предупреждение из чата клана?",
      metaTitle: "Спам-NFT опустошит кошелёк",
      metaDescription: "Нет официального подтверждения, что спам-NFT сам опустошает кошелёк. Опасны ссылки, подписи и seed-фраза, а Stars и донат UC от кошелька не зависят.",
      excerpt: "Нет официального подтверждения, что спам-NFT сам опустошает кошелёк. Опасны ссылки, подписи и seed-фраза, а Stars и донат UC от кошелька не зависят.",
      answer: "Нет официального подтверждения, что спам-NFT сам опустошает кошелёк. Опасны ссылки, подписи и seed-фраза, а Stars и донат UC от кошелька не зависят.",
      body: [
        {
          t: "h2",
          id: "axlat-nftning-ozi-hamyonni-boshatadimi",
          text: "Может ли спам-NFT сам опустошить кошелёк?",
        },
        {
          t: "p",
          text: "Ни один официальный источник не подтверждает, что кошелёк опустеет или заблокируется, если тронуть такой NFT. Но и официального заявления, что с ним можно делать что угодно, тоже нет. Поводов для паники нет, но и для беспечности тоже.",
        },
        {
          t: "p",
          text: "Слух пришёл в чаты кланов из TON-каналов. Суть такая: если сжечь разосланный по кошелькам мусорный NFT или отправить его на другой адрес, деньги пропадут или кошелёк заблокируют. В некоторых каналах пишут, что разработчики кошелька это опровергли. Но опровержение есть только в постах в Telegram, на официальных страницах его нет. Поэтому здесь неподтверждёнными считаются и само предупреждение, и опровержение.",
        },
        {
          t: "p",
          text: "На официальном сайте TON есть страница о безопасности «How to stay safe on TON &amp; Telegram». Отдельно о спам-NFT, аирдропах, ссылках внутри NFT или подписи транзакций там ничего не сказано. Официальной инструкции нет, поэтому опираемся на общие правила осторожности.",
        },
        {
          t: "p",
          text: "Полезное в предупреждении одно: держитесь подальше от незнакомых ссылок и подписей, которые вам непонятны. Остальное не проверено.",
        },
        {
          t: "h2",
          id: "ogohlantirish-oyinchining-qaysi-puli-ga",
          text: "Какие «деньги» игрока это касается?",
        },
        {
          t: "p",
          text: "Деньги и активы игрока лежат в нескольких местах. Слух касается только одного из них.",
        },
        {
          t: "table",
          head: [
            "Актив",
            "Где хранится",
            "Связан со спам-NFT",
            "Что его защищает",
          ],
          rows: [
            [
              "TON-кошелёк и токены в нём",
              "В блокчейне",
              "Да, слух как раз об этом",
              "Ключ кошелька и внимание к тому, что вы подписываете",
            ],
            [
              "Коллекционный подарок, выведенный в кошелёк",
              "В блокчейне TON",
              "Да, вместе с кошельком",
              "Ключ кошелька",
            ],
            [
              "Аккаунт Telegram",
              "В Telegram, отдельно от кошелька",
              "Не напрямую",
              "Код входа и пароль двухэтапной проверки",
            ],
            [
              "Telegram Stars",
              "Внутри Telegram, привязаны к аккаунту",
              "Нет, в TON-кошельке не хранятся",
              "Защита аккаунта Telegram",
            ],
            [
              "UC, алмазы, CP",
              "В игровом аккаунте, привязаны к Player ID",
              "Нет",
              "Способ входа в игровой аккаунт",
            ],
          ],
        },
        {
          t: "p",
          text: "Если у игрока в кошельке нет ни крипты, ни подарков, слух ему сам по себе ничем не грозит. Если кошелёк есть, опасен не сам NFT, а то, что вы с ним делаете дальше.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "nega-bu-mish-mish-aynan",
          text: "Почему этот слух так быстро расходится по чатам кланов?",
        },
        {
          t: "p",
          text: "Telegram дал возможность передавать коллекционные подарки другим через блокчейн TON и выставлять их на аукцион (<a href=\"https://telegram.org/blog/wear-gifts-blockchain-and-more\" target=\"_blank\" rel=\"noopener\">блог Telegram</a>, январь 2025 года, данные могли устареть). Поэтому у многих игроков, которые обмениваются подарками в клане, есть кошелёк. Стоит прийти в него чему-то незнакомому — и в чате сразу начинается обсуждение.",
        },
        {
          t: "p",
          text: "В том же блоге сказано, что подарок, переведённый в TON-кошелёк, можно подключать к внешним сервисам. Этим и пользуются мошенники: предлагают подключить кошелёк к стороннему сайту или боту, чтобы «проверить», «очистить» его или «узнать цену подарка».",
        },
        {
          t: "p",
          text: "Представьте ситуацию. В чат клана падает сообщение: «Пришёл мусорный NFT? Кошелёк в опасности! Подключись к этому боту для проверки». Ниже ссылка. Если пугающий текст и «решение» пришли в одном сообщении, ловушка — само предупреждение. Честное предупреждение не просит подключать кошелёк.",
        },
        {
          t: "p",
          text: "Как отличить настоящее предложение купить подарок от обмана, разобрано в <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">статье о предложении купить гифт</a>.",
        },
        {
          t: "h2",
          id: "xavf-aslida-qaysi-harakatda",
          text: "В каком действии на самом деле риск?",
        },
        {
          t: "p",
          text: "В официальной документации TON инструкции на эту тему нет. Поэтому список ниже — общие правила безопасности. В каждом случае вред приносит не NFT, а ваше действие:",
        },
        {
          t: "list",
          items: [
            "Открыть ссылку из описания NFT или из чата и подключить кошелёк к стороннему сайту.",
            "Ввести на сайте или в боте слова восстановления (seed-фразу). Эти слова и есть ключ от кошелька, их нельзя вводить никуда.",
            "Нажать «Подтвердить», не прочитав, что именно приложение просит подписать. Подписанная транзакция выполняется от вашего имени.",
            "Соклановец или бот-«гарант», который говорит: «Я уберу NFT, подключи мне кошелёк».",
            "Просьба назвать код входа в Telegram или пароль двухэтапной проверки под предлогом «восстановления кошелька». Это попытка добраться не до кошелька, а до вашего аккаунта Telegram.",
          ],
        },
        {
          t: "p",
          text: "О ссылках в чате и жалобах на спам: <a href=\"/blog/klan-chatida-shubhali-havola-spam-cheklov\">в чате клана пришла подозрительная ссылка</a>.",
        },
        {
          t: "h2",
          id: "ogohlantirishni-oqigach-nima-qilish-kerak",
          text: "Что делать после такого предупреждения?",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Не спешите трогать незнакомый NFT в кошельке. Официально не подтверждено ни то, что сжигать, отправлять или продавать его опасно, ни то, что это безопасно.",
            "Не открывайте ни ссылку на «проверку» из сообщения, ни ссылку из описания NFT.",
            "Выясните, откуда взялась информация: что пишет официальный канал или сайт приложения-кошелька. Скриншот и пересланный текст — не источник.",
            "Включите в Telegram пароль двухэтапной проверки. Тогда одного кода входа будет мало, чтобы войти в аккаунт. Подробнее: <a href=\"/blog/888-anonim-raqam-oyinchi-akkaunt-himoyasi\">как защитить аккаунт от взлома</a>.",
            "Если в кошельке крупная сумма или дорогой подарок, убедитесь, что слова восстановления есть только у вас и записаны на бумаге. Не давайте их даже тем, кто представляется «поддержкой».",
          ],
        },
        {
          t: "h2",
          id: "xabarni-oqib-nimadir-bosib-qoygan",
          text: "А если вы уже что-то нажали?",
        },
        {
          t: "p",
          text: "Всё зависит от того, что именно вы нажали. Если приложение кошелька временно не открывается или не видно баланса, это ещё не кража. Некоторые каналы объясняли такое сбоем в сервисе, но официального подтверждения нет. В этом случае:",
        },
        {
          t: "list",
          items: [
            "обновите приложение и немного подождите;",
            "проверьте интернет и работают ли другие приложения;",
            "не вводите слова восстановления в незнакомое приложение или на сайт «просто проверить».",
          ],
        },
        {
          t: "p",
          text: "Если вы подключили кошелёк к стороннему сайту, подписали какую-то транзакцию или ввели seed-фразу, ситуация серьёзнее. Подумайте о том, чтобы перевести оставшиеся средства и подарки в новый кошелёк, созданный вами самостоятельно. Если вы сообщили код от Telegram, проверьте активные сеансы и завершите чужие.",
        },
        {
          t: "note",
          tone: "warn",
          text: "Просите помощи только через официальный контакт внутри самого приложения-кошелька. «Помощник», который сам написал вам в личку, — мошенник.",
        },
        {
          t: "h2",
          id: "hamyondagi-sovgani-nima-qoriqlaydi",
          text: "Что защищает подарок в кошельке?",
        },
        {
          t: "p",
          text: "По данным <a href=\"https://telegram.org/blog/wear-gifts-blockchain-and-more\" target=\"_blank\" rel=\"noopener\">блога Telegram</a>, подарок, переведённый в блокчейн, остаётся у владельца. Даже если владелец потеряет доступ к аккаунту Telegram или удалит его, подарок по-прежнему принадлежит ему.",
        },
        {
          t: "p",
          text: "У этого есть обратная сторона. Такой подарок защищает не пароль Telegram, а ключ кошелька. У кого ключ, тот и распоряжается подарком.",
        },
        {
          t: "p",
          text: "Что это значит для игрока:",
        },
        {
          t: "list",
          items: [
            "если выводите в кошелёк дорогой подарок, полученный за турнир или на день рождения, берегите его так же, как деньги в кошельке;",
            "если подарок остаётся в Telegram, на первом месте защита аккаунта: код входа и пароль двухэтапной проверки;",
            "можно ли вернуть подарок из TON обратно в Telegram, в этой статье не подтверждено, стоимость вывода тоже не найдена. Поэтому перед выводом хорошо всё обдумайте.",
          ],
        },
        {
          t: "h2",
          id: "stars-premium-va-ucni-hamyonsiz",
          text: "Как купить Stars, Premium и UC без кошелька?",
        },
        {
          t: "p",
          text: "Для доната и покупок в Telegram TON-кошелёк не нужен. Эти покупки идут не через кошелёк, поэтому NFT в кошельке на них не влияет. Подробнее: <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">нужен ли игроку Telegram Wallet</a>.",
        },
        {
          t: "p",
          text: "В GemPay это работает так:",
        },
        {
          t: "list",
          items: [
            `<strong>Stars</strong> — только по @username, от 50 до 10 000 за один заказ. Переводом с карты или с баланса бота — ${som(STARS_UNIT_CARD, "ru")} за штуку, через Click или Uzum Bank — ${som(STARS_UNIT_ONLINE, "ru")}. Приходят за несколько секунд.`,
            `<strong>Premium</strong> — подключается по @username через официальный механизм подарков Telegram, в ваш аккаунт никто не входит. 3 месяца — ${som(premium(3), "ru")}, 6 месяцев — ${som(premium(6), "ru")}, 12 месяцев — ${som(premium(12), "ru")}. Тарифа на 1 месяц нет.`,
            "<strong>UC, алмазы, CP</strong> — нужен только Player ID, пароль не спрашивают. Сначала вам показывают проверенный ник, платите вы после подтверждения. Валюта приходит за 1–5 минут.",
          ],
        },
        {
          t: "p",
          text: "Оплата — UzCard, HUMO, Click, Uzum Bank или баланс бота. Крипта, VPN и иностранная карта не нужны. Stars не превращаются в игровую валюту. Поэтому подарок соклановцу выбирайте по тому, где он активнее: в игре — UC или алмазы, в чате — Stars или Premium.",
        },
        {
          t: "p",
          text: "Почему не стоит отправлять деньги, если кто-то кидает в чат TON-адрес для доната, объяснено в <a href=\"/blog/ton-manzilga-donat-tolovi-oyinchi-xavfi\">статье об оплате на TON-адрес</a>. Заказ оформляется через <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>. Если есть вопросы, напишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> и укажите номер заказа.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Telegram blogi: Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More (24.01.2025)",
              href: "https://telegram.org/blog/wear-gifts-blockchain-and-more",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Если в кошелёк пришёл спам-NFT, могу ли я потерять UC и алмазы в PUBG или MLBB?",
          a: "Нет, игровая валюта хранится в игровом аккаунте и привязана к Player ID, с TON-кошельком она никак не связана. Риск для игрового аккаунта появляется, только если вы сообщили кому-то пароль или код входа.",
        },
        {
          q: "Могут ли мои Stars в Telegram уменьшиться из-за спам-NFT в кошельке?",
          a: "Stars лежат не в TON-кошельке, а на вашем аккаунте Telegram. Поэтому для них важнее защита аккаунта: никому не сообщайте код входа и включите пароль двухэтапной проверки.",
        },
        {
          q: "Соклановец пишет: «Подключи кошелёк, я почищу мусорный NFT». Что делать?",
          a: "Откажитесь: из-за NFT нет никаких причин подключать кошелёк к чужому сайту или боту. Аккаунт соклановца могли взломать, так что свяжитесь с ним другим способом, например в игре или в голосовом чате, и переспросите.",
        },
        {
          q: "Стоит ли пересылать это предупреждение всем в чате клана?",
          a: "Не распространяйте панический текст, особенно если в нём есть ссылка. Лучше напишите короткое напоминание: не открывать незнакомые ссылки и никому не давать seed-фразу и код от Telegram.",
        },
        {
          q: "Если у меня нет TON-кошелька, мне это грозит?",
          a: "Прямой угрозы через NFT нет: слух касается владельцев кошельков. Но сообщения, которые под этим предлогом выманивают код Telegram или пароль, могут прийти и вам.",
        },
        {
          q: "Просит ли GemPay адрес кошелька или seed-фразу для покупки Stars или UC?",
          a: "Нет. Для Stars и Premium достаточно @username, для игровой валюты — Player ID. Тот, кто от имени GemPay просит кошелёк, seed-фразу или пароль, к GemPay отношения не имеет.",
        },
      ],
    },
  },
};

export default article;
