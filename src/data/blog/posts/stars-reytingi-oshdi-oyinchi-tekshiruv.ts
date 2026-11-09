// Avtoblogyoz yasagan maqola (2026-11-09). Niyat: Telegram'da Stars sarflaydigan o'zbek o'yinchisi profilidagi reyting oshganini ko'rib, «telegram reyting oshdi o'yinchi» deb qidiradi va Stars xaridi, refund va jamoadoshga sovg'a reytingga qanday ta'sir qilishini, kanal xabari rostligini bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/blog/post-search-story-albums-and-more
//   https://core.telegram.org/api/stars

import type { Article } from "../types";
import { STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const article: Article = {
  slug: "stars-reytingi-oshdi-oyinchi-tekshiruv",
  game: null,
  type: "info",
  datePublished: "2026-11-09",
  dateModified: "2026-11-09",
  keywords: ["telegram stars reytingi oshdi","telegram reyting oshdi","telegram reytingni tekshirish","stars reyting refund","sovg'a reytingga ta'sir","telegram reyting manfiy","рейтинг telegram stars","рейтинг в телеграм вырос","телеграм пересчитал звезды","как проверить рейтинг telegram","рефанд звезд рейтинг"],
  locales: {
    uz: {
      title: "Telegram reyting oshdi: o‘yinchi Stars sarfi va sovg‘ani qanday tekshiradi?",
      metaTitle: "Telegram reyting oshdi: o‘yinchi Stars sarfi",
      metaDescription: "Telegram reytinglarni qayta hisoblagani rasman e’lon qilinmagan. Reyting Stars sarfi bilan oshadi, refund va sovg‘ani Stars’ga aylantirish bilan tushadi.",
      excerpt: "Telegram reytinglarni qayta hisoblagani rasman e’lon qilinmagan. Reyting Stars sarfi bilan oshadi, refund va sovg‘ani Stars’ga aylantirish bilan tushadi.",
      answer: "Telegram reytinglarni qayta hisoblagani rasman e’lon qilinmagan. Reyting Stars sarfi bilan oshadi, refund va sovg‘ani Stars’ga aylantirish bilan tushadi.",
      body: [
        {
          t: "h2",
          id: "reyting-oshganini-kordim-avval-nimani",
          text: "Reyting oshganini ko‘rdim: avval nimani tekshiraman?",
        },
        {
          t: "p",
          text: "Kanal postiga ishonishdan oldin o‘z Stars tarixingizga qarang. Raqam o‘zgarishining izohi ko‘pincha o‘zingiz qilgan amallarda topiladi.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Telegram’ni so‘nggi versiyaga yangilang.",
            "O‘z profilingizni oching va reyting nishonini toping.",
            "Joriy daraja va raqamni skrinshot qilib qo‘ying. Keyingi o‘zgarishni shu bilan solishtirasiz.",
            "Ilova kutilayotgan (pending) reytingni ko‘rsatsa, uning qo‘llanish sanasini yozib oling. Bu ma’lumotni faqat siz ko‘rasiz.",
            "So‘nggi haftalardagi Stars amallaringizni sanab chiqing: jamoadoshlarga sovg‘a, pullik xabar, kanal postini moliyalashtirish, refund, sovg‘ani Stars’ga aylantirish.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Tugma va bo‘lim nomlari ilova versiyasi va qurilmaga qarab farq qiladi. Nishon ko‘rinmasa, avval ilovani yangilang.",
        },
        {
          t: "p",
          text: "Raqam oshgan bo‘lsa va yaqinda klan uchun sovg‘a olgan bo‘lsangiz, izoh shu sarfda bo‘lishi mumkin. Raqam pasaygan bo‘lsa, refund yoki Stars’ga aylantirilgan sovg‘ani qidiring. Hech qanday amal esda bo‘lmasa, kutilayotgan reyting qo‘llangan bo‘lishi mumkin. Bu haqda keyingi bo‘limda.",
        },
        {
          t: "h2",
          id: "reytinglar-qayta-hisoblandi-degan-post",
          text: "«Reytinglar qayta hisoblandi» degan post: rasmiy izi bormi?",
        },
        {
          t: "p",
          text: "Yo‘q. Telegram sarflangan Stars’ni qayta hisoblagani yoki hammaning reytingi oshgani haqida rasmiy e’lon topilmadi. Bunday xabar Telegram blogidan emas, kanallardan tarqalgan.",
        },
        {
          t: "p",
          text: "Rasmiy manbada boshqa gap bor. <a href=\"https://telegram.org/blog/post-search-story-albums-and-more\" target=\"_blank\" rel=\"noopener\">Telegram blogidagi e’longa</a> ko‘ra, profildagi reyting Stars bilan qilingan muvaffaqiyatli tranzaksiyalarning umumiy hajmiga asoslanadi.",
        },
        {
          t: "p",
          text: "Raqam to‘satdan o‘zgarishining hujjatlangan izohi bitta: kutilayotgan reyting. <a href=\"https://core.telegram.org/api/stars\" target=\"_blank\" rel=\"noopener\">Stars hujjatida</a> yozilishicha, foydalanuvchi uni faqat o‘zi uchun ko‘radi va u belgilangan sanada qo‘llanadi. Ya’ni bir kunda kelgan o‘zgarish ommaviy qayta hisob emas, sizning oldingi amallaringiz bo‘lishi mumkin. Biroq aynan sizning holatingizda shu sabab bo‘lganini tashqaridan hech kim tasdiqlay olmaydi.",
        },
        {
          t: "p",
          text: "Formula o‘zgargani yoki refund uchun minuslar qayta sanalgani haqida ham rasmiy ma’lumot yo‘q.",
        },
        {
          t: "p",
          text: "Yangilikni o‘zingiz tekshirish uchun:",
        },
        {
          t: "list",
          items: [
            "<a href=\"https://telegram.org/blog\" target=\"_blank\" rel=\"noopener\">telegram.org blogida</a> e’lonni qidiring;",
            "Stars qoidalarini <a href=\"https://core.telegram.org/api/stars\" target=\"_blank\" rel=\"noopener\">core.telegram.org’dagi Stars sahifasida</a> ko‘ring;",
            "ikkalasida ham yo‘q bo‘lsa, xabarni fakt emas, gap deb qabul qiling.",
          ],
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "klan-va-turnir-kanallari-uchun",
          text: "Klan va turnir kanallari uchun reyting nima beradi?",
        },
        {
          t: "p",
          text: "Reyting profilingizdagi raqamli nishon. U Telegram’dagi darajangizni ko‘rsatadi va kanal egalariga Suggested Posts hamda boshqa so‘rovlarda sizga ishonish mumkinligini bildiradi.",
        },
        {
          t: "p",
          text: "O‘yinchi uchun misol: klaningizga yangi a’zo kerak va siz katta turnir kanaliga e’lon taklif qilmoqchisiz. Kanal egasi taklifni ko‘rganda profilingizdagi reytingga ham qaraydi. Yuqori raqam ishonch qo‘shadi, lekin postni qabul qilish yoki qilmaslikni baribir kanal egasi hal qiladi.",
        },
        {
          t: "p",
          text: "Reytingni nima bilan adashtirmaslik kerak:",
        },
        {
          t: "list",
          items: [
            "U PUBG, MLBB yoki Free Fire’dagi rangingiz va statistikangiz bilan bog‘liq emas.",
            "U Stars tranzaksiyalariga asoslanadi. UC, olmos va CP o‘yin ichida, Telegram’dan tashqarida yuradi.",
            "Stars o‘yin valyutasiga aylanmaydi. Reytingni ko‘tarish uchun sarflangan Stars UC bo‘lib qaytmaydi.",
          ],
        },
        {
          t: "p",
          text: "Qaysi valyuta qayerda ishlashi haqida: <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">Telegram Stars, UC, olmos va Steam balansi</a>.",
        },
        {
          t: "h2",
          id: "qaysi-amallar-reytingga-yoziladi-oyinchi",
          text: "Qaysi amallar reytingga yoziladi: o‘yinchi jadvali",
        },
        {
          t: "table",
          head: [
            "Amal",
            "O‘yinchi hayotidan misol",
            "Reytingga ta’siri",
          ],
          rows: [
            [
              "Sovg‘a sotib olish",
              "Match MVP’siga sovg‘a",
              "Oshiradi",
            ],
            [
              "Pullik xabar (Paid Messages) yuborish",
              "Strimer yoki murabbiyga pullik xabar",
              "Oshiradi",
            ],
            [
              "Suggested Posts’ni Stars bilan moliyalashtirish",
              "Turnir kanalida klan e’loni",
              "Oshiradi",
            ],
            [
              "Stars xaridini qaytarish (refund)",
              "Olingan Stars uchun pulni qaytarish",
              "Kamaytiradi",
            ],
            [
              "Sovg‘ani Stars’ga aylantirish",
              "Kelgan sovg‘ani Stars’ga almashtirish",
              "Kamaytiradi",
            ],
            [
              "Telegram Premium olish",
              "Obuna xaridi",
              "Rasmiy manbada aytilmagan",
            ],
            [
              "UC, olmos yoki CP olish",
              "O‘yin ichidagi donat",
              "Stars tranzaksiyasi emas, reytingga ta’siri aytilmagan",
            ],
          ],
        },
        {
          t: "p",
          text: "Oshiruvchi amallar Telegram blogida, kamaytiruvchilari Stars hujjatida yozilgan.",
        },
        {
          t: "p",
          text: "Umumiy mantiq shunday: Stars sarflanganda reyting o‘sadi, Stars qaytib kelganda pasayadi.",
        },
        {
          t: "p",
          text: "Bir Star necha ballga tengligi va qaysi darajaga necha Stars kerakligi e’lon qilinmagan. «Yana shuncha Stars sarflasangiz keyingi darajaga chiqasiz» degan hisob-kitoblar taxmin, ularga ishonib Stars sarflamang.",
        },
        {
          t: "h2",
          id: "jamoadoshga-sovga-berdim-u-uni",
          text: "Jamoadoshga sovg‘a berdim, u uni Stars’ga aylantirdi: kimga minus?",
        },
        {
          t: "p",
          text: "Klanda sovg‘a odatiy hol: g‘alaba uchun, tug‘ilgan kunga yoki yangi a’zoga. Sovg‘a sotib olish reytingni oshiradigan amallar ro‘yxatida bor.",
        },
        {
          t: "p",
          text: "Stars hujjatida sovg‘ani Stars’ga aylantirish shu amalni qilgan foydalanuvchi reytingini kamaytirishi aytilgan. Ya’ni gap sovg‘ani aylantirgan jamoadosh haqida. Sovg‘ani sotib olgan sizning reytingingizga bu qanday ta’sir qilishi hujjatda alohida yozilmagan. Shuning uchun «mening reytingim ham tushadi» deb ham, «menga umuman ta’sir qilmaydi» deb ham qat’iy aytib bo‘lmaydi.",
        },
        {
          t: "p",
          text: "Kanallarda «sovg‘a qilingan sovg‘ani oluvchi sotsa, beruvchining reytingi kamaymaydi» degan gap ham yuradi. U rasmiy manbalarda tasdiqlanmagan.",
        },
        {
          t: "p",
          text: "Amaliy maslahat: sovg‘ani jamoadoshingiz saqlab qo‘yishini istasangiz, unga oldindan ayting. Uning profilidagi reytingni ham Stars’ga aylantirish pasaytiradi, buni bilishi foydali.",
        },
        {
          t: "p",
          text: "Sovg‘a umuman yetib bormasa, sabab ko‘pincha oluvchining maxfiylik sozlamalarida bo‘ladi: <a href=\"/blog/jamoadoshga-sovga-yuborib-bolmayapti-sabab\">Telegram sovg‘a yuborib bo‘lmayapti</a>.",
        },
        {
          t: "h2",
          id: "refund-va-bozordan-arzon-stars",
          text: "Refund va bozordan arzon Stars: reyting manfiyga tushadimi?",
        },
        {
          t: "p",
          text: "Tushishi mumkin. Stars hujjatiga ko‘ra:",
        },
        {
          t: "list",
          items: [
            "reyting ham, daraja ham manfiy son bo‘lishi mumkin;",
            "reyting ma’lum chegaralarga yetganda daraja oshadi yoki tushadi;",
            "Stars xaridini qaytarish reytingni kamaytiradi.",
          ],
        },
        {
          t: "p",
          text: "Misol: o‘yinchi Stars oldi va ularni turnirdan oldin jamoadoshlarga sovg‘aga sarfladi. Keyin xaridni qaytardi. Sarf reytingni ko‘targan, refund esa uni pasaytiradi. Natija avvalgidan past bo‘lishi mumkin. Aniq raqam formulaga bog‘liq, formula esa e’lon qilinmagan.",
        },
        {
          t: "p",
          text: "Klan chatlarida bozordan ancha arzon Stars takliflari ham shu mavzuga bog‘liq. Bunday sxemalarda refund xavfi bor, batafsil: <a href=\"/blog/arzon-stars-refund-sxemasi-oyinchi-xavfi\">Klan chatida arzon Stars xavflimi</a>.",
        },
        {
          t: "h2",
          id: "reytingni-asrash-uchun-oyinchi-nimaga",
          text: "Reytingni asrash uchun o‘yinchi nimaga e’tibor bersin?",
        },
        {
          t: "p",
          text: "Reytingni oshirib beradigan sir yo‘q. Lekin uni keraksiz tushirmaslik mumkin:",
        },
        {
          t: "list",
          items: [
            "Stars’ni aniq sotuvchidan oling, keyin qaytarishga to‘g‘ri kelmasin.",
            "O‘zingiz ham sababsiz refund so‘ramang.",
            "Kelgan sovg‘ani Stars’ga aylantirishdan oldin bu reytingni pasaytirishini eslang.",
            "«Reytingni oshirib beramiz» degan xizmatlarga pul bermang. Formula ochiq emas, demak bunday va’daning asosi yo‘q.",
            "Bot username’i «bot» bilan tugashini tekshiring. Qoida va misollar: <a href=\"/blog/game-bilan-tugaydigan-donat-boti-tekshirish\">«…game» botini tekshirish</a>.",
            "Kirish kodi, ikki bosqichli tekshiruv paroli va o‘yin akkaunti parolini hech kimga bermang.",
          ],
        },
        {
          t: "p",
          text: "Reyting haqidagi post ostida notanish havola kelsa, uni ochmang. Klan chatida shunday havolalar bilan nima qilish kerakligi: <a href=\"/blog/klan-chatida-shubhali-havola-spam-cheklov\">Klan chatida shubhali havola keldi</a>.",
        },
        {
          t: "h2",
          id: "starsni-somda-olish-va-reyting",
          text: "Stars’ni so‘mda olish va reyting: nimani bilish kerak?",
        },
        {
          t: "p",
          text: "GemPay’da Stars @username bo‘yicha olinadi, bir buyurtmada 50 dan 10 000 tagacha. 1 ta Stars narxi:",
        },
        {
          t: "list",
          items: [
            `karta o‘tkazmasi (UzCard, HUMO) yoki bot balansidan — ${som(STARS_UNIT_CARD, "uz")};`,
            `Click yoki Uzum Bank orqali onlayn to‘lovda — ${som(STARS_UNIT_ONLINE, "uz")}.`,
          ],
        },
        {
          t: "p",
          text: "Faqat username kerak, parol so‘ralmaydi. Stars bir necha soniyada tushadi. Xorijiy karta, VPN yoki kripto kerak emas. Visa/Mastercard qabul qilinmaydi.",
        },
        {
          t: "p",
          text: "Bir farqni yodda tuting. Stars sotib olishning o‘zi reytingni oshirishi rasmiy manbada alohida aytilmagan. Ro‘yxatda Stars’ni sarflash bor: sovg‘a olish, pullik xabar yuborish, Suggested Posts’ni moliyalashtirish.",
        },
        {
          t: "p",
          text: "GemPay mustaqil xizmat va Telegram nomidan gapirmaydi. Reyting qoidalarini faqat Telegram belgilaydi. Bosqichma-bosqich qo‘llanma: <a href=\"/blog/telegram-stars-sotib-olish-gempay\">Telegram Stars sotib olish: GemPay’da, so‘mda</a>. Bot: <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Public Post Search, Story Albums, Gift Collections and More",
              href: "https://telegram.org/blog/post-search-story-albums-and-more",
            },
            {
              label: "Telegram Stars",
              href: "https://core.telegram.org/api/stars",
            },
          ],
        },
      ],
      faq: [
        {
          q: "UC yoki olmos sotib olsam, Telegram reytingim oshadimi?",
          a: "Oshishi aytilmagan. Reyting Telegram Stars bilan qilingan tranzaksiyalarga asoslanadi, UC va olmos esa Player ID bo‘yicha o‘yin akkauntiga tushadi.",
        },
        {
          q: "Hech narsa qilmagan edim, reyting bir kunda sakrab ketdi. Bu xatomi?",
          a: "Hujjatda kutilayotgan reyting tushunchasi bor: u oldingi amallaringizdan yig‘ilib, belgilangan sanada qo‘llanadi. Ommaviy qayta hisoblash rasman e’lon qilinmagan.",
        },
        {
          q: "Turnir kanali egasi reytingimga qarab e’lonimni rad etishi mumkinmi?",
          a: "Reyting kanal egalariga sizga ishonish mumkinligini ko‘rsatish uchun kerak. Postni qabul qilish qarori baribir kanal egasida qoladi.",
        },
        {
          q: "Keyingi darajaga chiqish uchun qancha Stars kerak?",
          a: "Buni hech kim aniq ayta olmaydi: chegaralar va bir Star qiymati e’lon qilinmagan. Aniq son aytgan kanal taxmin qilyapti.",
        },
        {
          q: "Reytingni oshirib beradigan botga to‘lasam bo‘ladimi?",
          a: "Tavsiya etilmaydi. Formula ochiq emas, shuning uchun bunday va’dani tekshirib bo‘lmaydi. Ko‘pincha bunday botlar kod yoki parol so‘raydi.",
        },
        {
          q: "Reytingim minusga tushsa, profilim cheklanadimi?",
          a: "Hujjat reyting manfiy bo‘lishi mumkinligini aytadi, lekin cheklov haqida hech narsa yozmaydi. Past raqam kanal egalarining ishonchiga ta’sir qilishi mumkin, shuning uchun keraksiz refunddan saqlaning.",
        },
      ],
    },
    ru: {
      title: "Рейтинг в Telegram вырос: как игроку проверить траты Stars и подарки",
      metaTitle: "Рейтинг в Telegram вырос: как игроку проверить траты Stars",
      metaDescription: "Официально Telegram не объявлял о пересчёте рейтингов. Рейтинг растёт от трат Stars и падает после возврата и обмена подарков на Stars.",
      excerpt: "Официально Telegram не объявлял о пересчёте рейтингов. Рейтинг растёт от трат Stars и падает после возврата и обмена подарков на Stars.",
      answer: "Официально Telegram не объявлял о пересчёте рейтингов. Рейтинг растёт от трат Stars и падает после возврата и обмена подарков на Stars.",
      body: [
        {
          t: "h2",
          id: "reyting-oshganini-kordim-avval-nimani",
          text: "Рейтинг вырос: что проверить в первую очередь?",
        },
        {
          t: "p",
          text: "Прежде чем верить посту в канале, откройте свою историю Stars. Объяснение изменения цифры чаще всего находится в ваших собственных действиях.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Обновите Telegram до последней версии.",
            "Откройте свой профиль и найдите значок рейтинга.",
            "Сделайте скриншот текущего уровня и цифры. С ним вы сравните следующее изменение.",
            "Если приложение показывает ожидающий (pending) рейтинг, запишите дату его применения. Эти данные видите только вы.",
            "Перечислите свои операции со Stars за последние недели: подарки тиммейтам, платные сообщения, оплата постов в каналах, возвраты, обмен подарков на Stars.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Названия кнопок и разделов зависят от версии приложения и устройства. Если значка не видно, сначала обновите приложение.",
        },
        {
          t: "p",
          text: "Если цифра выросла, а вы недавно покупали подарки для клана, дело может быть в этих тратах. Если упала — ищите возврат или подарок, обменянный на Stars. Если никаких действий не припоминаете, возможно, применился ожидающий рейтинг. Об этом — в следующем разделе.",
        },
        {
          t: "h2",
          id: "reytinglar-qayta-hisoblandi-degan-post",
          text: "Пост «рейтинги пересчитали»: есть ли официальное подтверждение?",
        },
        {
          t: "p",
          text: "Нет. Официального объявления о том, что Telegram пересчитал потраченные Stars или поднял рейтинг всем пользователям, не найдено. Такие сообщения расходятся по каналам, а не из блога Telegram.",
        },
        {
          t: "p",
          text: "В официальном источнике сказано другое. Согласно <a href=\"https://telegram.org/blog/post-search-story-albums-and-more\" target=\"_blank\" rel=\"noopener\">объявлению в блоге Telegram</a>, рейтинг в профиле основан на общем объёме успешных транзакций со Stars.",
        },
        {
          t: "p",
          text: "Документированное объяснение внезапного изменения цифры одно — ожидающий рейтинг. В <a href=\"https://core.telegram.org/api/stars\" target=\"_blank\" rel=\"noopener\">документации по Stars</a> сказано, что пользователь видит его только у себя и что он применяется в назначенную дату. То есть скачок за один день может быть не массовым пересчётом, а результатом ваших прошлых действий. Но подтвердить со стороны, что в вашем случае причина именно в этом, никто не может.",
        },
        {
          t: "p",
          text: "Официальных данных о смене формулы или о пересчёте минусов за возвраты тоже нет.",
        },
        {
          t: "p",
          text: "Чтобы проверить новость самостоятельно:",
        },
        {
          t: "list",
          items: [
            "поищите объявление в <a href=\"https://telegram.org/blog\" target=\"_blank\" rel=\"noopener\">блоге telegram.org</a>;",
            "посмотрите правила Stars на <a href=\"https://core.telegram.org/api/stars\" target=\"_blank\" rel=\"noopener\">странице Stars на core.telegram.org</a>;",
            "если ни там, ни там ничего нет, считайте сообщение слухом, а не фактом.",
          ],
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "klan-va-turnir-kanallari-uchun",
          text: "Что рейтинг даёт для клана и турнирных каналов?",
        },
        {
          t: "p",
          text: "Рейтинг — это числовой значок в вашем профиле. Он показывает ваш уровень в Telegram и даёт владельцам каналов понять, что вам можно доверять в Suggested Posts и других запросах.",
        },
        {
          t: "p",
          text: "Пример из жизни игрока: клану нужны новые участники, и вы хотите предложить объявление в большой турнирный канал. Владелец канала, получив предложение, посмотрит и на рейтинг в вашем профиле. Высокая цифра добавляет доверия, но принять пост или нет, всё равно решает владелец канала.",
        },
        {
          t: "p",
          text: "С чем не стоит путать рейтинг:",
        },
        {
          t: "list",
          items: [
            "Он никак не связан с вашим рангом и статистикой в PUBG, MLBB или Free Fire.",
            "Он основан на транзакциях со Stars. UC, алмазы и CP живут внутри игры, вне Telegram.",
            "Stars не превращаются в игровую валюту. Stars, потраченные ради рейтинга, не вернутся в виде UC.",
          ],
        },
        {
          t: "p",
          text: "Какая валюта где работает: <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">Telegram Stars, UC, алмазы и баланс Steam</a>.",
        },
        {
          t: "h2",
          id: "qaysi-amallar-reytingga-yoziladi-oyinchi",
          text: "Какие действия учитываются в рейтинге: таблица для игрока",
        },
        {
          t: "table",
          head: [
            "Действие",
            "Пример из жизни игрока",
            "Влияние на рейтинг",
          ],
          rows: [
            [
              "Покупка подарка",
              "Подарок MVP матча",
              "Повышает",
            ],
            [
              "Отправка платного сообщения (Paid Messages)",
              "Платное сообщение стримеру или тренеру",
              "Повышает",
            ],
            [
              "Оплата Suggested Posts в Stars",
              "Объявление клана в турнирном канале",
              "Повышает",
            ],
            [
              "Возврат покупки Stars (refund)",
              "Возврат денег за купленные Stars",
              "Понижает",
            ],
            [
              "Обмен подарка на Stars",
              "Обмен полученного подарка на Stars",
              "Понижает",
            ],
            [
              "Покупка Telegram Premium",
              "Оформление подписки",
              "В официальном источнике не указано",
            ],
            [
              "Покупка UC, алмазов или CP",
              "Донат внутри игры",
              "Не транзакция со Stars, влияние на рейтинг не указано",
            ],
          ],
        },
        {
          t: "p",
          text: "Повышающие действия перечислены в блоге Telegram, понижающие — в документации по Stars.",
        },
        {
          t: "p",
          text: "Общая логика такая: когда Stars тратятся, рейтинг растёт, когда Stars возвращаются — падает.",
        },
        {
          t: "p",
          text: "Сколько баллов стоит одна Star и сколько Stars нужно для каждого уровня, не публиковалось. Расчёты вида «потратьте ещё столько-то Stars, и выйдете на следующий уровень» — догадки, не тратьте Stars, полагаясь на них.",
        },
        {
          t: "h2",
          id: "jamoadoshga-sovga-berdim-u-uni",
          text: "Подарил подарок тиммейту, а он обменял его на Stars: кому минус?",
        },
        {
          t: "p",
          text: "Подарки в клане — обычное дело: за победу, на день рождения или новичку. Покупка подарка входит в список действий, повышающих рейтинг.",
        },
        {
          t: "p",
          text: "В документации по Stars сказано, что обмен подарка на Stars снижает рейтинг пользователя, который это сделал. То есть речь о тиммейте, обменявшем подарок. Как это отражается на рейтинге того, кто подарок купил, в документации отдельно не написано. Поэтому нельзя уверенно сказать ни «мой рейтинг тоже упадёт», ни «на меня это никак не повлияет».",
        },
        {
          t: "p",
          text: "В каналах ходит и утверждение, что «если получатель продаст подаренный подарок, рейтинг дарителя не снизится». Официальными источниками оно не подтверждено.",
        },
        {
          t: "p",
          text: "Практический совет: если хотите, чтобы тиммейт сохранил подарок, скажите ему об этом заранее. Ему тоже полезно знать, что обмен на Stars снизит рейтинг в его профиле.",
        },
        {
          t: "p",
          text: "Если подарок вообще не доходит, причина чаще всего в настройках приватности получателя: <a href=\"/blog/jamoadoshga-sovga-yuborib-bolmayapti-sabab\">не получается отправить подарок в Telegram</a>.",
        },
        {
          t: "h2",
          id: "refund-va-bozordan-arzon-stars",
          text: "Возврат и дешёвые Stars с рынка: может ли рейтинг уйти в минус?",
        },
        {
          t: "p",
          text: "Может. Согласно документации по Stars:",
        },
        {
          t: "list",
          items: [
            "и рейтинг, и уровень могут быть отрицательными числами;",
            "при достижении определённых порогов рейтинга уровень повышается или понижается;",
            "возврат покупки Stars снижает рейтинг.",
          ],
        },
        {
          t: "p",
          text: "Пример: игрок купил Stars и перед турниром потратил их на подарки тиммейтам. Потом оформил возврат покупки. Траты подняли рейтинг, а возврат его опускает. Итог может оказаться ниже, чем было. Точная цифра зависит от формулы, а формула не опубликована.",
        },
        {
          t: "p",
          text: "С этим связаны и предложения Stars в клановых чатах намного дешевле рынка. В таких схемах есть риск возврата, подробнее: <a href=\"/blog/arzon-stars-refund-sxemasi-oyinchi-xavfi\">опасны ли дешёвые Stars из кланового чата</a>.",
        },
        {
          t: "h2",
          id: "reytingni-asrash-uchun-oyinchi-nimaga",
          text: "Как игроку не уронить рейтинг?",
        },
        {
          t: "p",
          text: "Секрета, который поднимет рейтинг, нет. Но не ронять его зря вполне можно:",
        },
        {
          t: "list",
          items: [
            "Покупайте Stars у понятного продавца, чтобы потом не пришлось оформлять возврат.",
            "Сами тоже не просите возврат без причины.",
            "Прежде чем обменять полученный подарок на Stars, помните, что это снизит рейтинг.",
            "Не платите сервисам, которые обещают «поднять рейтинг». Формула закрыта, значит, у такого обещания нет основы.",
            "Проверяйте, что username бота заканчивается на «bot». Правило и примеры: <a href=\"/blog/game-bilan-tugaydigan-donat-boti-tekshirish\">как проверить бота «…game»</a>.",
            "Никому не сообщайте код входа, пароль двухэтапной проверки и пароль от игрового аккаунта.",
          ],
        },
        {
          t: "p",
          text: "Если под постом о рейтинге пришла незнакомая ссылка, не открывайте её. Что делать с такими ссылками в клановом чате: <a href=\"/blog/klan-chatida-shubhali-havola-spam-cheklov\">в клановый чат пришла подозрительная ссылка</a>.",
        },
        {
          t: "h2",
          id: "starsni-somda-olish-va-reyting",
          text: "Покупка Stars в сумах и рейтинг: что нужно знать?",
        },
        {
          t: "p",
          text: "В GemPay Stars покупаются по @username, от 50 до 10 000 за один заказ. Цена 1 Star:",
        },
        {
          t: "list",
          items: [
            `переводом с карты (UzCard, HUMO) или с баланса бота — ${som(STARS_UNIT_CARD, "ru")};`,
            `при онлайн-оплате через Click или Uzum Bank — ${som(STARS_UNIT_ONLINE, "ru")}.`,
          ],
        },
        {
          t: "p",
          text: "Нужен только username, пароль не запрашивается. Stars приходят за несколько секунд. Иностранная карта, VPN или криптовалюта не нужны. Visa/Mastercard не принимаются.",
        },
        {
          t: "p",
          text: "Помните об одном различии. В официальном источнике отдельно не сказано, что сама покупка Stars повышает рейтинг. В списке указаны траты Stars: покупка подарков, отправка платных сообщений, оплата Suggested Posts.",
        },
        {
          t: "p",
          text: "GemPay — независимый сервис и не говорит от имени Telegram. Правила рейтинга определяет только Telegram. Пошаговая инструкция: <a href=\"/blog/telegram-stars-sotib-olish-gempay\">покупка Telegram Stars в GemPay, в сумах</a>. Бот: <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Public Post Search, Story Albums, Gift Collections and More",
              href: "https://telegram.org/blog/post-search-story-albums-and-more",
            },
            {
              label: "Telegram Stars",
              href: "https://core.telegram.org/api/stars",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Если я куплю UC или алмазы, вырастет ли мой рейтинг в Telegram?",
          a: "Об этом нигде не сказано. Рейтинг строится на транзакциях с Telegram Stars, а UC и алмазы зачисляются на игровой аккаунт по Player ID.",
        },
        {
          q: "Я ничего не делал, а рейтинг за день резко вырос. Это ошибка?",
          a: "В документации есть понятие ожидающего рейтинга: он накапливается из ваших прошлых действий и применяется в назначенную дату. О массовом пересчёте официально не объявлялось.",
        },
        {
          q: "Может ли владелец турнирного канала отклонить моё объявление из-за рейтинга?",
          a: "Рейтинг нужен, чтобы показать владельцам каналов, что вам можно доверять. Но решение о публикации поста всё равно принимает владелец канала.",
        },
        {
          q: "Сколько Stars нужно, чтобы выйти на следующий уровень?",
          a: "Точно этого никто не скажет: пороги и вес одной Star не опубликованы. Канал, называющий конкретное число, просто гадает.",
        },
        {
          q: "Можно ли заплатить боту, который обещает поднять рейтинг?",
          a: "Не стоит. Формула закрыта, поэтому проверить такое обещание невозможно. К тому же такие боты часто просят код или пароль.",
        },
        {
          q: "Если рейтинг уйдёт в минус, ограничат ли мой профиль?",
          a: "В документации сказано, что рейтинг может быть отрицательным, но об ограничениях ничего не говорится. Низкая цифра может повлиять на доверие владельцев каналов, так что избегайте лишних возвратов.",
        },
      ],
    },
  },
};

export default article;
