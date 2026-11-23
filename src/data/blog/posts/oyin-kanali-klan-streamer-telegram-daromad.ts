// Avtoblogyoz yasagan maqola (2026-11-23). Niyat: O‘yin kanali yuritadigan, klan admini yoki streamer «o‘yin kanalidan Telegram’da qanday pul ishlayman» deb qidiradi. U o‘yin auditoriyasida qaysi rasmiy vosita ishlashini bilmoqchi: Star reaksiya, pullik klip, efirdagi xayriya, yopiq klan kanali obunasi, reklama ulushi, taklif qilingan postlar. Ishlangan Stars bilan nima qilish mumkinligini ham bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/blog/monetization-for-channels
//   https://core.telegram.org/api/revenue
//   https://core.telegram.org/api/stars
//   https://telegram.org/blog/checklists-suggested-posts

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "oyin-kanali-klan-streamer-telegram-daromad",
  game: null,
  type: "info",
  datePublished: "2026-11-23",
  dateModified: "2026-11-23",
  keywords: ["o'yin kanalidan pul ishlash telegram","telegram kanaldan daromad o'yin","klan kanali monetizatsiya","telegram star reaksiya kanal","telegram pullik media klip","telegram kanal stars obuna","streamer telegram daromad","telegram stars yechib olish","заработок на игровом канале телеграм","монетизация телеграм канала stars","платные реакции звезды телеграм канал","как вывести звезды телеграм"],
  locales: {
    uz: {
      title: "O‘yin kanalidan Telegram’da pul ishlash: klan admini va streamer uchun",
      metaTitle: "O‘yin kanalidan Telegram’da pul ishlash",
      metaDescription: "O‘yin kanali Star reaksiya, pullik klip, yopiq kanal obunasi, taklif qilingan post, pullik xabar va reklama ulushidan pul ishlaydi. Stars Fragment’da yechiladi.",
      excerpt: "O‘yin kanali Star reaksiya, pullik klip, yopiq kanal obunasi, taklif qilingan post, pullik xabar va reklama ulushidan pul ishlaydi. Stars Fragment’da yechiladi.",
      answer: "O‘yin kanali Star reaksiya, pullik klip, yopiq kanal obunasi, taklif qilingan post, pullik xabar va reklama ulushidan pul ishlaydi. Stars Fragment’da yechiladi.",
      body: [
        {
          t: "h2",
          id: "oyin-kanalidan-telegramda-qanday-pul",
          text: "O‘yin kanalidan Telegram’da qanday pul ishlash mumkin?",
        },
        {
          t: "p",
          text: "O‘yin kanali Telegram’ning oltita rasmiy vositasidan daromad oladi: Star reaksiya, pullik media, Stars obunasi, taklif qilingan postlar, pullik xabarlar va reklama daromadi ulushi. Ularning qoidalari <a href=\"https://core.telegram.org/api/stars\" target=\"_blank\" rel=\"noopener\">Telegram Stars texnik sahifasida</a> va Telegram blogida yozilgan.",
        },
        {
          t: "p",
          text: "Klan kanali yoki streamer odatda uchta vositadan boshlaydi: Star reaksiya, pullik klip va yopiq kanal obunasi. Bu vositalar uchun obunachi chegarasi bu maqolada tasdiqlanmagan. Bu yerda obunachi sonidan ko‘ra yangi klipingizni kutadigan faol tomoshabinlar muhimroq.",
        },
        {
          t: "p",
          text: "Jonli efirdagi xayriya va kanalga sovg‘a yuborish haqida rasmiy manba topilmadi. Ularga reja qurmang, batafsil pastroqda.",
        },
        {
          t: "p",
          text: "GemPay daromad vositasi emas. U sizga va tomoshabinlaringizga Telegram Stars va Premium’ni so‘mda, @username bo‘yicha olishga yordam beradi. GemPay mustaqil xizmat, Telegram’ning bo‘linmasi emas.",
        },
        {
          t: "h2",
          id: "qaysi-vosita-qaysi-oyin-kanaliga",
          text: "Qaysi vosita qaysi o‘yin kanaliga mos: umumiy xarita",
        },
        {
          t: "table",
          head: [
            "Vosita",
            "O‘yin kanalidagi misol",
            "Kimga mos",
            "Mehnat",
            "Pul qanday tushadi",
          ],
          rows: [
            [
              "Star reaksiya",
              "1v4 clutch yoki chicken dinner klipiga Stars bosiladi",
              "Kichik klan kanalidan katta kanalgacha",
              "Kam: odatdagi postlar yetadi",
              "Stars’ning 100 foizi kanal egasiga",
            ],
            [
              "Pullik media",
              "Turnirdagi to‘liq POV yozuv, sezgirlik sozlamalari",
              "O‘rta streamer kanali",
              "O‘rtacha: montaj kerak",
              "Stars kanal balansiga o‘tadi",
            ],
            [
              "Stars obunasi",
              "Yopiq kanal: scrim jadvali, strategiya, replay tahlili",
              "Faol klan, jamoa, murabbiy",
              "Ko‘p: doimiy yangi kontent",
              "Obunachidan davriy to‘lov",
            ],
            [
              "Taklif qilingan post",
              "Boshqa klanning yollash e’loni, turnirga ro‘yxat posti",
              "Taniqli o‘yin kanali",
              "Kam: e’lonni tekshirish",
              "Stars yoki kriptovalyuta, 24 soatdan keyin",
            ],
            [
              "Pullik xabarlar",
              "Streamerga savol yoki sharh uchun to‘lov",
              "Ko‘p xabar oladigan streamer",
              "Kam: sozlash va javob berish",
              "Yozuvchi Stars bilan to‘laydi",
            ],
            [
              "Reklama ulushi",
              "O‘yin yangiliklari, patch notes, eSport natijalari",
              "Ko‘rishlari ko‘p katta kanal",
              "O‘rtacha: muntazam kontent",
              "Daromadning 50 foizi egaga, Fragment orqali",
            ],
          ],
        },
        {
          t: "p",
          text: "Obunachi chegarasi, boost darajasi va Premium kerakmi-yo‘qmi, bu maqolada tasdiqlanmagan. Ularni kanal sozlamalarida tekshiring.",
        },
        {
          t: "p",
          text: "Kichik klan kanali reaksiya va obunadan boshlagani ma’qul. Reklama ulushi faqat ko‘rishlar ko‘p bo‘lganda sezilarli pul beradi.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "star-reaksiya-va-pullik-klip",
          text: "Star reaksiya va pullik klip: tomoshabin nima uchun to‘laydi?",
        },
        {
          t: "p",
          text: "<strong>Star reaksiya.</strong> Tomoshabin postga oddiy emoji o‘rniga Stars bilan reaksiya bosadi. Texnik sahifaga ko‘ra, bu Stars’ning 100 foizi kanal egasiga tushadi. Ko‘pincha Stars haftaning eng zo‘r kill-montajiga bosiladi. MLBB’dagi savage yoki Free Fire’da oxirgi zonada yolg‘iz qolib olingan g‘alaba ham shunday klip.",
        },
        {
          t: "p",
          text: "<strong>Pullik media.</strong> Klip yoki rasm yopiq turadi, tomoshabin uni Stars bilan ochadi. Sotib olinganda Stars kanal balansiga o‘tadi. Nimani yopsa bo‘ladi:",
        },
        {
          t: "list",
          items: [
            "turnirdagi o‘yinning boshidan oxirigacha POV yozuvi;",
            "Free Fire yoki PUBG uchun sezgirlik va HUD sozlamalari;",
            "Erangel yoki Bermuda xaritasida tushish rejasi, izohlari bilan.",
          ],
        },
        {
          t: "p",
          text: "Pullik media narxining chegaralari va boshqa tafsilotlar bu maqolada tasdiqlanmagan, ularni Telegram ilovasida tekshiring.",
        },
        {
          t: "p",
          text: "Hamma kontentni yopmang. Ochiq klip yangi tomoshabin olib keladi. Pullik versiya esa ustiga nimadir qo‘shsin: to‘liq yozuv, sekinlashtirilgan tahlil yoki ovozli izoh.",
        },
        {
          t: "p",
          text: `Reaksiya bosish uchun tomoshabinda Stars bo‘lishi kerak. O‘zbekistonda ularni <a href="https://t.me/Gempayuz_bot" target="_blank" rel="noopener">@Gempayuz_bot</a> orqali olish mumkin. Karta o‘tkazmasi yoki bot balansidan bittasining narxi ${som(STARS_UNIT_CARD, "uz")}, Click yoki Uzum Bank orqali ${som(STARS_UNIT_ONLINE, "uz")}. Bitta buyurtmada 50 dan 10 000 tagacha Stars olinadi. Bosqichlari <a href="/blog/telegram-stars-sotib-olish-gempay">Stars sotib olish qo‘llanmasida</a>. Stars UC va olmosdan qanday farq qilishini <a href="/blog/telegram-stars-yoki-oyin-valyutasi">valyutalar taqqosida</a> yozganmiz.`,
        },
        {
          t: "h2",
          id: "yopiq-klan-kanali-stars-obunasi",
          text: "Yopiq klan kanali Stars obunasi bilan qanday ishlaydi?",
        },
        {
          t: "p",
          text: "Kanal foydalanuvchidan muntazam haq oladigan obuna yarata oladi. Klan uchun qulay yo‘li: umumiy chat ochiq qoladi, scrim jadvali, strategiyalar va replay tahlillari obunali yopiq kanalga joylanadi.",
        },
        {
          t: "p",
          text: "Obuna davri va narx chegarasi bu maqolada tasdiqlanmagan. Ularni Telegram ilovasida obunani sozlayotganda tekshiring.",
        },
        {
          t: "p",
          text: "Obuna klanda janjal chiqarmasligi uchun uchta qoida:",
        },
        {
          t: "list",
          items: [
            "obunani haqiqiy qo‘shimcha kontent uchun so‘rang, chatga kirish uchun emas;",
            "klan a’zolarini to‘lashga majburlamang, aks holda faol o‘yinchilar ketishi mumkin;",
            "obunachi nima olishini kanal tavsifida aniq yozing: haftasiga nechta tahlil, qaysi o‘yin, qaysi rejim.",
          ],
        },
        {
          t: "p",
          text: "Obunachi Stars’ni GemPay botidan olishi mumkin: faqat @username kerak, Stars bir necha soniyada tushadi. Bir narsani oldindan ayting: Stars o‘yin valyutasiga aylanmaydi. Obunaga ketgan Stars UC yoki olmos bo‘lib qaytmaydi.",
        },
        {
          t: "h2",
          id: "taklif-qilingan-postlar-va-pullik",
          text: "Taklif qilingan postlar va pullik xabarlar: turnir e’lonlari pul keltiradimi?",
        },
        {
          t: "p",
          text: "<a href=\"https://telegram.org/blog/checklists-suggested-posts\" target=\"_blank\" rel=\"noopener\">Telegram blogiga</a> ko‘ra, obunachilar kanalga kontentni taklif qilingan post sifatida yubora oladi. Bunday post kanalga direct messages orqali keladi. Taklif qiluvchi uni joylash evaziga kanal egasiga Stars yoki kriptovalyuta taklif qilishi mumkin.",
        },
        {
          t: "p",
          text: "O‘yin kanalida bu odatda shunday bo‘ladi: boshqa klan yangi a’zo izlayotgani haqida e’lon yuboradi yoki turnir tashkilotchisi ro‘yxatga yozilish postini taklif qiladi. Siz postni o‘qib chiqasiz, rozi bo‘lsangiz joylaysiz.",
        },
        {
          t: "p",
          text: "Mukofot post joylanganidan 24 soat o‘tib tushadi. Post muddatidan oldin o‘chirilsa, Telegram summani taklif qiluvchiga to‘liq qaytaradi. Turnir e’lonini kamida bir sutka kanalda qoldiring.",
        },
        {
          t: "p",
          text: "<strong>Pullik xabarlar.</strong> Kanal pullik xabarlarni yoqsa, unga yozish uchun Stars to‘lanadi. Streamerda «UC ber», «akkaunt ber» kabi xabarlar kamayishi, jiddiy savollar esa qolishi mumkin. Narx chegaralari bu maqolada tasdiqlanmagan. Jamoadoshlar to‘lovsiz yozishi uchun havola bor degan mish-mishni <a href=\"/blog/pullik-xabarlar-jamoadosh-bepul-havola\">alohida maqolada</a> tekshirganmiz.",
        },
        {
          t: "h2",
          id: "reklama-daromadi-ulushi-katta-oyin",
          text: "Reklama daromadi ulushi katta o‘yin kanaliga qancha beradi?",
        },
        {
          t: "p",
          text: "<a href=\"https://core.telegram.org/api/revenue\" target=\"_blank\" rel=\"noopener\">Texnik sahifaga</a> ko‘ra, kanal egalari kanalida ko‘rsatilgan reklamadan tushgan daromadning 50 foizini oladi. Reklama beruvchilar reklamani kriptovalyuta bilan sotib oladi, kanal egasi esa o‘z ulushini <a href=\"https://fragment.com\" target=\"_blank\" rel=\"noopener\">Fragment</a> orqali yechadi.",
        },
        {
          t: "p",
          text: "Bu vosita ko‘rishlari ko‘p kanalga mos: o‘yin yangiliklari, yangilanish tafsilotlari, eSport natijalari. Daromad ko‘rsatilgan reklamadan hisoblanadi, shuning uchun kichik klan kanaliga reklama ulushi kam pul berishi mumkin. Obunachi soni bo‘yicha shartni kanal sozlamalarida tekshiring, bu maqolada raqam keltirilmaydi.",
        },
        {
          t: "p",
          text: "Yana ikki narsani bilib qo‘ying:",
        },
        {
          t: "list",
          items: [
            "Telegram Premium obunachisi reklamani o‘chira oladi. Auditoriyangizda Premium’chilar ko‘p bo‘lsa, reklama ko‘rishlari kamroq bo‘lishi mumkin. Premium o‘yinchiga yana nima berishi <a href=\"/blog/telegram-premium-oyinchi-uchun\">shu maqolada</a>.",
            "Kanal egasi reklamani barcha obunachilar uchun o‘chira oladi. Buning uchun boost darajasi kerak, lekin u rasmiy sahifada raqam bilan ko‘rsatilmagan.",
          ],
        },
        {
          t: "h2",
          id: "efirda-stars-yigish-kanalga-sovga",
          text: "Efirda Stars yig‘ish, kanalga sovg‘a va affiliate: qaysisiga ishonsa bo‘ladi?",
        },
        {
          t: "p",
          text: "Jonli efir paytida Stars bilan xayriya olish haqida rasmiy manba topilmadi. Kanallarda tarqalgan «efirda Stars yig‘ing» degan postlarga qarab reja tuzmang. Efirdagi eng zo‘r lahzani keyin klip qilib joylang: unga Star reaksiya bosilishi yoki uni pullik media qilish mumkin.",
        },
        {
          t: "p",
          text: "Kanalga Star sovg‘asi yuborish ham bu maqolada tasdiqlanmagan. Ilovangizda bunday tugma o‘zi chiqsagina undan foydalaning.",
        },
        {
          t: "p",
          text: "Affiliate dasturini ishlab chiquvchilar o‘z mini ilovasi uchun ochadi. Oddiy klan kanaliga bu kam to‘g‘ri keladi, komissiya foizi esa rasmiy manbada berilmagan.",
        },
        {
          t: "note",
          tone: "warn",
          text: "«Efirda Stars to‘playman, keyin sizga UC qilib beraman» degan taklif firibgarlik belgisi. Stars o‘yin valyutasiga aylanmaydi, UC faqat Player ID bo‘yicha to‘ldiriladi.",
        },
        {
          t: "h2",
          id: "kanal-balansidagi-starsni-qanday-yechish",
          text: "Kanal balansidagi Stars’ni qanday yechish va qayerga sarflash mumkin?",
        },
        {
          t: "p",
          text: "Texnik sahifaga ko‘ra, Star reaksiyadan kelgan Stars’ni kriptovalyuta mukofotiga almashtirish yoki subsidiyalangan reklamaga sarflash mumkin. Kanal egasi o‘z kanalini Telegram Ad platformasida reklama qila oladi. Reklama daromadini esa Telegram reklamasi, kolleksion username yoki Premium giveaway’ga qayta sarflash mumkin.",
        },
        {
          t: "p",
          text: "Stars’ni yechish tartibi:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Kanal egasining akkauntidan ish boshlang. Texnik sahifaga ko‘ra, Stars’ni faqat ega yecha oladi, oddiy admin yecha olmaydi.",
            "Balans belgilangan minimumga yetganini tekshiring. Rasmiy sahifada minimum raqami yo‘q, uni ilovadan ko‘ring.",
            "Yechish so‘rovini yuboring. Telegram sizga Fragment’dagi noyob sahifa havolasini beradi.",
            "O‘sha Fragment sahifasida mukofot uchun kerakli ma’lumotni kiriting.",
            "Faqat Telegram bergan havoladan foydalaning. Birov chatda yuborgan «Stars yechish» havolasini ochmang.",
          ],
        },
        {
          t: "p",
          text: "Yechishda qancha kutish va komissiya bor-yo‘qligi bu maqolada tasdiqlanmagan, ularni Fragment sahifasida tekshiring.",
        },
        {
          t: "p",
          text: `O‘yin kanali uchun g‘oya: Premium giveaway yoki turnir sovrini bilan yangi a’zo jalb qiling. G‘olibga Premium’ni GemPay orqali @username bo‘yicha sovg‘a qilish ham mumkin, 3 oyligi ${som(premium(3), "uz")}. Sovrinni bir nechta g‘olibga qanday tarqatish <a href="/blog/turnir-golibiga-uc-stars-sovrin-tarqatish">turnir sovrini qo‘llanmasida</a> yozilgan.`,
        },
        {
          t: "h2",
          id: "donator-starsni-qaytarib-olsa-daromadni",
          text: "Donator Stars’ni qaytarib olsa: daromadni qanday asrash kerak?",
        },
        {
          t: "p",
          text: "Stars Apple kabi provayderlar orqali sotib olinadi. Ular xaridorga 21 kun ichida pulini qaytarishi mumkin, shunda Stars balansingizdan yechilishi mumkin. Bu 21 kun provayderning qaytarish muddati. Uni taklif qilingan post mukofotidagi 24 soat bilan adashtirmang.",
        },
        {
          t: "p",
          text: "Daromadni asrash uchun:",
        },
        {
          t: "list",
          items: [
            "Star reaksiya, pullik klip, obuna va taklif qilingan postlarni birga ishlating: bittasi to‘xtasa, qolganlari ishlayveradi;",
            "taklif qilingan postlar uchun kriptovalyutada haq olgan xavfsizroq, chunki bunday to‘lovni xaridor qaytarib ololmaydi;",
            "bir martalik katta Stars tushumini darhol sarflamang;",
            "«arzon Stars» bilan kelgan donatorlardan ehtiyot bo‘ling, <a href=\"/blog/arzon-stars-refund-sxemasi-oyinchi-xavfi\">bunday Stars nega yo‘qolishi mumkinligini</a> tushuntirganmiz;",
            "tomoshabin Stars’ni qayerdan olishni so‘rasa, faqat @username so‘raydigan, kod va parol so‘ramaydigan yo‘lni ko‘rsating.",
          ],
        },
        {
          t: "sources",
          items: [
            {
              label: "Sharing Revenue with Channel Owners",
              href: "https://telegram.org/blog/monetization-for-channels",
            },
            {
              label: "Channel and bot ad revenue",
              href: "https://core.telegram.org/api/revenue",
            },
            {
              label: "Telegram Stars",
              href: "https://core.telegram.org/api/stars",
            },
            {
              label: "Checklists, Suggested Posts and More Monetization Options for Channels",
              href: "https://telegram.org/blog/checklists-suggested-posts",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Klan kanalim kichkina bo‘lsa, Telegram’da pul ishlay olamanmi?",
          a: "Ha, Star reaksiya, pullik klip va yopiq kanal obunasini sinab ko‘rsa bo‘ladi, ularda faol tomoshabin hal qiladi. Obunachi chegarasi bor-yo‘qligini kanal sozlamalarida ko‘ring.",
        },
        {
          q: "Star reaksiyadan kelgan Stars’ni UC yoki olmosga almashtirsa bo‘ladimi?",
          a: "Yo‘q. Stars o‘yin valyutasiga aylanmaydi, UC, olmos va CP Player ID bo‘yicha alohida to‘ldiriladi.",
        },
        {
          q: "Boshqa klanning e’lonini pullik joylasam, haqini qachon olaman?",
          a: "Post joylanib, bir sutka turgandan keyin. Undan oldin o‘chirib yuborsangiz, pul e’lon egasiga to‘liq qaytadi.",
        },
        {
          q: "Telegram’da jonli efir paytida Stars bilan xayriya olish mumkinmi?",
          a: "Bu imkoniyat haqida rasmiy manba topilmadi, unga tayanmang. Efirning zo‘r lahzalarini klip qilib joylang va Star reaksiya yoki pullik media orqali daromad oling.",
        },
        {
          q: "Kanaldan ishlangan Stars’ni so‘mga qanday aylantiraman?",
          a: "Rasmiy yo‘l bor: Fragment orqali kriptovalyuta mukofotiga almashtirish yoki Stars’ni kanal reklamasiga sarflash. Stars’ni to‘g‘ridan-to‘g‘ri so‘mga o‘tkazish rasmiy manbada yo‘q, GemPay ham buni qilmaydi.",
        },
        {
          q: "Tomoshabinlarim Star reaksiya uchun Stars’ni O‘zbekistonda qayerdan oladi?",
          a: "@Gempayuz_bot’dan @username bo‘yicha UzCard, HUMO, Click yoki Uzum Bank bilan, bir buyurtmada 50 dan 10 000 tagacha. Visa va Mastercard qabul qilinmaydi, muammo bo‘lsa buyurtma raqami bilan @StarsPaymeeSupport’ga yoziladi.",
        },
        {
          q: "Donator Stars’ni qaytarib olsa, kanal balansidan yechiladimi?",
          a: "Yechilishi mumkin: Apple kabi provayder 21 kun ichida xaridorga pulni qaytarsa, Stars balansingizdan ketishi mumkin. Katta tushumni shoshib sarflamang.",
        },
      ],
    },
    ru: {
      title: "Как заработать на игровом канале в Telegram: админу клана и стримеру",
      metaTitle: "Как заработать на игровом канале в Telegram",
      metaDescription: "Игровой канал зарабатывает на Star-реакциях, платных клипах, подписке, предложенных постах, платных сообщениях и доле от рекламы. Stars выводят через Fragment.",
      excerpt: "Игровой канал зарабатывает на Star-реакциях, платных клипах, подписке, предложенных постах, платных сообщениях и доле от рекламы. Stars выводят через Fragment.",
      answer: "Игровой канал зарабатывает на Star-реакциях, платных клипах, подписке, предложенных постах, платных сообщениях и доле от рекламы. Stars выводят через Fragment.",
      body: [
        {
          t: "h2",
          id: "oyin-kanalidan-telegramda-qanday-pul",
          text: "Как заработать на игровом канале в Telegram?",
        },
        {
          t: "p",
          text: "У Telegram есть шесть официальных инструментов дохода для игрового канала: Star-реакции, платные медиа, подписка за Stars, предложенные посты, платные сообщения и доля от рекламы. Их правила описаны на <a href=\"https://core.telegram.org/api/stars\" target=\"_blank\" rel=\"noopener\">технической странице Telegram Stars</a> и в блоге Telegram.",
        },
        {
          t: "p",
          text: "Канал клана или стример обычно начинает с трёх инструментов: Star-реакции, платные клипы и подписка на закрытый канал. Порог по подписчикам для них в этой статье не подтверждён. Здесь важнее не число подписчиков, а активные зрители, которые ждут вашего следующего клипа.",
        },
        {
          t: "p",
          text: "Официальных источников о донатах во время прямого эфира и подарках каналу найти не удалось. Не стройте на них планы — подробнее ниже.",
        },
        {
          t: "p",
          text: "GemPay не инструмент заработка. Он помогает вам и вашим зрителям покупать Telegram Stars и Premium за сумы по @username. GemPay — независимый сервис, а не подразделение Telegram.",
        },
        {
          t: "h2",
          id: "qaysi-vosita-qaysi-oyin-kanaliga",
          text: "Какой инструмент подходит какому игровому каналу: общая карта",
        },
        {
          t: "table",
          head: [
            "Инструмент",
            "Пример в игровом канале",
            "Кому подходит",
            "Усилия",
            "Как приходят деньги",
          ],
          rows: [
            [
              "Star-реакция",
              "Зрители ставят Stars на клип с клатчем 1v4 или chicken dinner",
              "От маленького канала клана до большого",
              "Мало: хватает обычных постов",
              "100% Stars — владельцу канала",
            ],
            [
              "Платные медиа",
              "Полная POV-запись с турнира, настройки чувствительности",
              "Канал стримера среднего размера",
              "Средне: нужен монтаж",
              "Stars поступают на баланс канала",
            ],
            [
              "Подписка за Stars",
              "Закрытый канал: расписание скримов, стратегии, разбор реплеев",
              "Активный клан, команда, тренер",
              "Много: нужен постоянный новый контент",
              "Регулярные платежи от подписчика",
            ],
            [
              "Предложенный пост",
              "Объявление о наборе в другой клан, пост о регистрации на турнир",
              "Известный игровой канал",
              "Мало: проверить объявление",
              "Stars или криптовалюта через 24 часа",
            ],
            [
              "Платные сообщения",
              "Плата за вопрос или комментарий стримеру",
              "Стример, которому много пишут",
              "Мало: настроить и отвечать",
              "Автор сообщения платит в Stars",
            ],
            [
              "Доля от рекламы",
              "Игровые новости, патчноуты, результаты киберспорта",
              "Крупный канал с большим охватом",
              "Средне: регулярный контент",
              "50% дохода — владельцу, через Fragment",
            ],
          ],
        },
        {
          t: "p",
          text: "Порог по подписчикам, уровень бустов и нужен ли Premium — в этой статье не подтверждено. Проверьте это в настройках канала.",
        },
        {
          t: "p",
          text: "Маленькому каналу клана лучше начать с реакций и подписки. Доля от рекламы даёт ощутимые деньги только при большом числе просмотров.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "star-reaksiya-va-pullik-klip",
          text: "Star-реакции и платные клипы: за что платит зритель?",
        },
        {
          t: "p",
          text: "<strong>Star-реакция.</strong> Вместо обычного эмодзи зритель ставит на пост реакцию за Stars. По данным технической страницы, 100% этих Stars получает владелец канала. Чаще всего Stars прилетают на лучший килл-монтаж недели. Сюда же относятся savage в MLBB или победа в Free Fire, когда ты остался один в последней зоне.",
        },
        {
          t: "p",
          text: "<strong>Платные медиа.</strong> Клип или картинка закрыты, зритель открывает их за Stars. При покупке Stars переходят на баланс канала. Что можно закрыть:",
        },
        {
          t: "list",
          items: [
            "POV-запись турнирного матча от начала до конца;",
            "настройки чувствительности и HUD для Free Fire или PUBG;",
            "план высадки на Эрангеле или Бермуде с комментариями.",
          ],
        },
        {
          t: "p",
          text: "Ограничения по цене платных медиа и другие детали в этой статье не подтверждены — проверьте их в приложении Telegram.",
        },
        {
          t: "p",
          text: "Не закрывайте весь контент. Открытые клипы приводят новых зрителей. А платная версия пусть даёт что-то сверху: полную запись, замедленный разбор или голосовой комментарий.",
        },
        {
          t: "p",
          text: `Чтобы поставить реакцию, у зрителя должны быть Stars. В Узбекистане их можно купить через <a href="https://t.me/Gempayuz_bot" target="_blank" rel="noopener">@Gempayuz_bot</a>. Одна звезда стоит ${som(STARS_UNIT_CARD, "ru")} при переводе с карты или с баланса бота и ${som(STARS_UNIT_ONLINE, "ru")} через Click или Uzum Bank. За один заказ можно купить от 50 до 10 000 Stars. Пошагово — в <a href="/blog/telegram-stars-sotib-olish-gempay">инструкции по покупке Stars</a>. Чем Stars отличаются от UC и алмазов, мы разобрали в <a href="/blog/telegram-stars-yoki-oyin-valyutasi">сравнении валют</a>.`,
        },
        {
          t: "h2",
          id: "yopiq-klan-kanali-stars-obunasi",
          text: "Как работает закрытый канал клана с подпиской за Stars?",
        },
        {
          t: "p",
          text: "Канал может создать подписку, которая регулярно списывает плату с пользователя. Удобная схема для клана: общий чат остаётся открытым, а расписание скримов, стратегии и разборы реплеев публикуются в закрытом канале по подписке.",
        },
        {
          t: "p",
          text: "Период подписки и ограничения по цене в этой статье не подтверждены. Проверьте их в приложении Telegram, когда будете настраивать подписку.",
        },
        {
          t: "p",
          text: "Три правила, чтобы подписка не рассорила клан:",
        },
        {
          t: "list",
          items: [
            "просите плату за реальный дополнительный контент, а не за доступ в чат;",
            "не заставляйте участников клана платить, иначе активные игроки могут уйти;",
            "чётко пропишите в описании канала, что получает подписчик: сколько разборов в неделю, по какой игре, в каком режиме.",
          ],
        },
        {
          t: "p",
          text: "Подписчик может купить Stars в боте GemPay: нужен только @username, звёзды приходят за несколько секунд. Предупредите заранее: Stars не превращаются в игровую валюту. Потраченные на подписку Stars не вернутся в виде UC или алмазов.",
        },
        {
          t: "h2",
          id: "taklif-qilingan-postlar-va-pullik",
          text: "Предложенные посты и платные сообщения: приносят ли деньги анонсы турниров?",
        },
        {
          t: "p",
          text: "Согласно <a href=\"https://telegram.org/blog/checklists-suggested-posts\" target=\"_blank\" rel=\"noopener\">блогу Telegram</a>, подписчики могут присылать в канал контент как предложенные посты. Такой пост приходит в канал через direct messages. Автор может предложить владельцу канала Stars или криптовалюту за публикацию.",
        },
        {
          t: "p",
          text: "В игровом канале это обычно выглядит так: другой клан присылает объявление о наборе игроков или организатор турнира предлагает пост о регистрации. Вы читаете пост и, если согласны, публикуете.",
        },
        {
          t: "p",
          text: "Вознаграждение приходит через 24 часа после публикации. Если удалить пост раньше срока, Telegram полностью вернёт сумму автору. Оставляйте анонс турнира в канале минимум на сутки.",
        },
        {
          t: "p",
          text: "<strong>Платные сообщения.</strong> Если канал включил платные сообщения, за возможность написать в него платят Stars. У стримера может стать меньше сообщений вроде «дай UC» или «дай аккаунт», а серьёзные вопросы останутся. Ограничения по цене в этой статье не подтверждены. Слух о ссылке, по которой тиммейты могут писать без оплаты, мы проверили в <a href=\"/blog/pullik-xabarlar-jamoadosh-bepul-havola\">отдельной статье</a>.",
        },
        {
          t: "h2",
          id: "reklama-daromadi-ulushi-katta-oyin",
          text: "Сколько даёт доля от рекламы большому игровому каналу?",
        },
        {
          t: "p",
          text: "Согласно <a href=\"https://core.telegram.org/api/revenue\" target=\"_blank\" rel=\"noopener\">технической странице</a>, владельцы каналов получают 50% дохода от рекламы, показанной в их канале. Рекламодатели покупают рекламу за криптовалюту, а владелец канала выводит свою долю через <a href=\"https://fragment.com\" target=\"_blank\" rel=\"noopener\">Fragment</a>.",
        },
        {
          t: "p",
          text: "Этот инструмент подходит каналам с большим охватом: игровые новости, подробности обновлений, результаты киберспорта. Доход считается от показанной рекламы, поэтому маленькому каналу клана доля от рекламы может принести немного. Условие по числу подписчиков проверьте в настройках канала — в этой статье цифра не приводится.",
        },
        {
          t: "p",
          text: "Ещё две вещи, которые стоит знать:",
        },
        {
          t: "list",
          items: [
            "Подписчик Telegram Premium может отключить рекламу. Если среди вашей аудитории много пользователей Premium, показов рекламы может быть меньше. Что ещё Premium даёт игроку — в <a href=\"/blog/telegram-premium-oyinchi-uchun\">этой статье</a>.",
            "Владелец канала может отключить рекламу для всех подписчиков. Для этого нужен определённый уровень бустов, но на официальной странице он не указан цифрой.",
          ],
        },
        {
          t: "h2",
          id: "efirda-stars-yigish-kanalga-sovga",
          text: "Донаты Stars на стриме, подарки каналу и партнёрка: чему можно верить?",
        },
        {
          t: "p",
          text: "Официальных источников о сборе Stars во время прямого эфира найти не удалось. Не стройте план по постам вида «собирайте Stars на стриме», которые расходятся по каналам. Лучший момент эфира потом выложите клипом: на него могут поставить Star-реакцию, или его можно сделать платным медиа.",
        },
        {
          t: "p",
          text: "Отправка Star-подарков каналу в этой статье тоже не подтверждена. Пользуйтесь этой функцией, только если кнопка сама появилась у вас в приложении.",
        },
        {
          t: "p",
          text: "Партнёрскую (affiliate) программу открывают разработчики для своего мини-приложения. Обычному каналу клана это мало подходит, а процент комиссии в официальном источнике не указан.",
        },
        {
          t: "note",
          tone: "warn",
          text: "Предложение «соберу Stars на стриме, потом переведу тебе в UC» — признак мошенничества. Stars не превращаются в игровую валюту, а UC пополняется только по Player ID.",
        },
        {
          t: "h2",
          id: "kanal-balansidagi-starsni-qanday-yechish",
          text: "Как вывести Stars с баланса канала и на что их потратить?",
        },
        {
          t: "p",
          text: "Согласно технической странице, Stars от Star-реакций можно обменять на вознаграждение в криптовалюте или потратить на субсидированную рекламу. Владелец канала может продвигать свой канал на рекламной платформе Telegram. А доход от рекламы можно реинвестировать в рекламу Telegram, коллекционные юзернеймы или розыгрыши Premium.",
        },
        {
          t: "p",
          text: "Порядок вывода Stars:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Работайте с аккаунта владельца канала. По данным технической страницы, вывести Stars может только владелец, обычный админ — нет.",
            "Проверьте, что баланс достиг установленного минимума. На официальной странице цифры минимума нет — смотрите её в приложении.",
            "Отправьте запрос на вывод. Telegram выдаст ссылку на уникальную страницу во Fragment.",
            "На этой странице Fragment укажите данные, нужные для получения вознаграждения.",
            "Пользуйтесь только ссылкой, которую дал Telegram. Не открывайте ссылки «для вывода Stars», которые кто-то прислал в чат.",
          ],
        },
        {
          t: "p",
          text: "Сколько ждать вывода и есть ли комиссия, в этой статье не подтверждено — проверьте это на странице Fragment.",
        },
        {
          t: "p",
          text: `Идея для игрового канала: привлекайте новых участников розыгрышем Premium или призом за турнир. Победителю можно подарить Premium через GemPay по @username, 3 месяца стоят ${som(premium(3), "ru")}. Как раздать приз нескольким победителям, описано в <a href="/blog/turnir-golibiga-uc-stars-sovrin-tarqatish">руководстве по турнирным призам</a>.`,
        },
        {
          t: "h2",
          id: "donator-starsni-qaytarib-olsa-daromadni",
          text: "Если донатер вернёт Stars: как сохранить доход?",
        },
        {
          t: "p",
          text: "Stars покупают через провайдеров вроде Apple. Они могут вернуть покупателю деньги в течение 21 дня, и тогда Stars могут списаться с вашего баланса. Эти 21 день — срок возврата у провайдера. Не путайте их с 24 часами для вознаграждения за предложенный пост.",
        },
        {
          t: "p",
          text: "Чтобы сохранить доход:",
        },
        {
          t: "list",
          items: [
            "используйте Star-реакции, платные клипы, подписку и предложенные посты вместе: если один источник встанет, остальные продолжат работать;",
            "за предложенные посты надёжнее брать оплату в криптовалюте — такой платёж покупатель вернуть не может;",
            "не тратьте сразу крупное разовое поступление Stars;",
            "осторожнее с донатерами, которые пришли с «дешёвыми Stars», — <a href=\"/blog/arzon-stars-refund-sxemasi-oyinchi-xavfi\">почему такие звёзды могут пропасть</a>, мы объяснили отдельно;",
            "если зритель спрашивает, где купить Stars, советуйте способ, где просят только @username, а не код и пароль.",
          ],
        },
        {
          t: "sources",
          items: [
            {
              label: "Sharing Revenue with Channel Owners",
              href: "https://telegram.org/blog/monetization-for-channels",
            },
            {
              label: "Channel and bot ad revenue",
              href: "https://core.telegram.org/api/revenue",
            },
            {
              label: "Telegram Stars",
              href: "https://core.telegram.org/api/stars",
            },
            {
              label: "Checklists, Suggested Posts and More Monetization Options for Channels",
              href: "https://telegram.org/blog/checklists-suggested-posts",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Канал клана совсем маленький — можно ли на нём заработать в Telegram?",
          a: "Да, можно попробовать Star-реакции, платные клипы и подписку на закрытый канал — там решают активные зрители. Есть ли порог по подписчикам, смотрите в настройках канала.",
        },
        {
          q: "Можно ли обменять Stars от реакций на UC или алмазы?",
          a: "Нет. Stars не становятся игровой валютой, а UC, алмазы и CP пополняются отдельно по Player ID.",
        },
        {
          q: "Если я опубликую объявление другого клана за плату, когда получу деньги?",
          a: "Через сутки после публикации, если пост всё это время провисел. Удалите раньше — деньги полностью вернутся автору объявления.",
        },
        {
          q: "Можно ли принимать донаты в Stars во время прямого эфира в Telegram?",
          a: "Официального источника об этой возможности не нашлось, полагаться на неё не стоит. Нарежьте яркие моменты стрима в клипы и зарабатывайте на Star-реакциях или платных медиа.",
        },
        {
          q: "Как перевести заработанные на канале Stars в сумы?",
          a: "Официальный путь — обменять их через Fragment на вознаграждение в криптовалюте или потратить на рекламу канала. Прямого перевода Stars в сумы в официальных источниках нет, и GemPay такого не делает.",
        },
        {
          q: "Где мои зрители в Узбекистане могут купить Stars для реакций?",
          a: "В @Gempayuz_bot по @username — картой UzCard, HUMO, через Click или Uzum Bank, от 50 до 10 000 штук за заказ. Visa и Mastercard не принимаются, а при проблеме пишут в @StarsPaymeeSupport с номером заказа.",
        },
        {
          q: "Если донатер вернёт деньги за Stars, их спишут с баланса канала?",
          a: "Могут списать: если провайдер вроде Apple вернёт покупателю деньги в течение 21 дня, Stars могут уйти с вашего баланса. Поэтому не спешите тратить крупные поступления.",
        },
      ],
    },
  },
};

export default article;
