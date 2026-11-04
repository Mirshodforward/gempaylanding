// Avtoblogyoz yasagan maqola (2026-11-04). Niyat: Squad chatlari va o'yin guruhlarida ko'p stiker oladigan O'zbekistondagi o'yinchi stiker zaifligi haqidagi ogohlantirishni ko'rib, «telegram stiker orqali buzish» deb qidiradi. U o'yin akkauntlari va Telegram'ini qanday himoya qilishni, guruh sozlamalarini qanday o'zgartirishni va ilovani qanday yangilashni bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://core.telegram.org/api/stickers
//   https://bugs.telegram.org/c/65400/7

import type { Article } from "../types";

const article: Article = {
  slug: "oyin-guruhida-telegram-stiker-xavfi-himoya",
  game: null,
  type: "trust",
  datePublished: "2026-11-04",
  dateModified: "2026-11-04",
  keywords: ["telegram stiker orqali buzish","telegram stiker xavfi o‘yin guruhi","telegram stiker zaiflik himoya","telegram ochilmayapti stiker","telegram yangilash 12.9.4","guruhda stikerni cheklash telegram","взлом через стикер телеграм","уязвимость стикеров telegram","telegram вылетает из-за стикера","rlottie уязвимость telegram","как запретить стикеры в группе телеграм"],
  locales: {
    uz: {
      title: "Telegram stiker orqali buzish mumkinmi: o‘yinchi uchun himoya rejasi",
      metaTitle: "Telegram stiker orqali buzish mumkinmi",
      metaDescription: "Rasmiy hisobotda stiker sabab iOS’dagi Telegram ishdan chiqqani qayd etilgan, akkaunt buzilgani emas. Ilovani 12.9.4 yoki undan yangi versiyaga yangilang.",
      excerpt: "Rasmiy hisobotda stiker sabab iOS’dagi Telegram ishdan chiqqani qayd etilgan, akkaunt buzilgani emas. Ilovani 12.9.4 yoki undan yangi versiyaga yangilang.",
      answer: "Rasmiy hisobotda stiker sabab iOS’dagi Telegram ishdan chiqqani qayd etilgan, akkaunt buzilgani emas. Ilovani 12.9.4 yoki undan yangi versiyaga yangilang.",
      body: [
        {
          t: "h2",
          id: "telegram-stiker-orqali-oyinchining-akkauntini",
          text: "Telegram stiker orqali o‘yinchining akkauntini buzish mumkinmi?",
        },
        {
          t: "p",
          text: "Telegram’ning xatoliklar platformasida stiker bilan bog‘liq bitta muammo qayd etilgan: iOS ilovasi ishdan chiqqan. Akkauntni egallash, xabarlarni o‘g‘irlash yoki telefonda begona kod ishga tushishi haqida rasmiy manbada gap yo‘q.",
        },
        {
          t: "p",
          text: "Hisobot muallifining yozishicha, ilova har safar yopilgan. Xato jurnallaridagi rlottie kutubxonasiga oid stek <strong>SIGABRT</strong> bilan tugagan. Platforma moderatori muammoga qandaydir stiker sabab bo‘lganini va keyingi yangilanishda tuzatilishini yozgan. Hisobot maqomiga ko‘ra, xato oxirgi marta 12.9.3.34622 versiyasida takrorlangan va <strong>12.9.4</strong> da tuzatilgan.",
        },
        {
          t: "p",
          text: "Kanallarda tarqalayotgan postlarda bundan jiddiyroq gaplar bor: xotira shikastlanishi, hujumchi o‘z kodini ishga tushirishi, stiker server tekshiruvlaridan o‘tib ketishi, yangi kutubxonaga shoshilinch o‘tish. Bu da’volar rasmiy manbada topilmadi. Ularni squad chatiga fakt sifatida tashlamang. Vahima tarqalgani bilan hech kim himoyalanib qolmaydi.",
        },
        {
          t: "p",
          text: "Hisobot iOS ilovasiga tegishli. Android va Desktop bo‘yicha rasmiy ma’lumot bu maqolada tasdiqlanmagan.",
        },
        {
          t: "p",
          text: "PUBG Mobile, Mobile Legends yoki Free Fire akkauntlari Telegram’dan alohida turadi. Stiker orqali o‘yin akkaunti o‘g‘irlangani haqida rasmiy ma’lumot yo‘q. Ammo shunday ogohlantirishlar tarqalgan kunlari firibgarlar ham faollashadi. O‘yinchi uchun asosiy tahdid aynan ular.",
        },
        {
          t: "h2",
          id: "squad-chatidagi-stiker-nega-bosmasangiz",
          text: "Squad chatidagi stiker nega bosmasangiz ham o‘zi o‘ynaydi?",
        },
        {
          t: "p",
          text: "Telegram hujjatlariga ko‘ra, animatsiyali stikerlar Lottie vektor animatsiyalaridir. Ular maxsus .tgs formatidagi fayl ko‘rinishida keladi va rlottie kutubxonasi yordamida ijro etiladi (<a href=\"https://core.telegram.org/api/stickers\" target=\"_blank\" rel=\"noopener\">Stickers and masks</a>).",
        },
        {
          t: "p",
          text: "Amalda bu shuni anglatadi: chatni ochganingizda ekrandagi stikerlarni ilovaning o‘zi chizadi, siz hech narsani bosmaysiz. Klan guruhida, turnir chatida yoki duo sherigingiz bilan yozishmada stikerlar chat ochilishi bilan harakatlanadi.",
        },
        {
          t: "p",
          text: "Shuning uchun bitta muammoli stiker butun chatni ochib bo‘lmaydigan qilib qo‘yishi mumkin. Rasmiy hisobot ham aynan shunday holat haqida: ilova chatlar ochilganda yoki xabar yuborilganda yopilgan.",
        },
        {
          t: "p",
          text: "O‘yin guruhlarida Premium stikerlar va animatsiyali emoji ham ko‘p uchraydi. Bu xato Premium bilan bog‘liqligi haqida rasmiy manbada gap yo‘q. Obuna o‘yinchiga aslida nima berishini alohida yozganmiz: <a href=\"/blog/telegram-premium-oyinchi-uchun\">Telegram Premium o‘yinchiga nima beradi</a>.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "klan-yoki-turnir-guruhida-qaysi",
          text: "Klan yoki turnir guruhida qaysi signal nimani anglatadi?",
        },
        {
          t: "table",
          head: [
            "Nima bo‘lyapti",
            "Bu nimani anglatishi mumkin",
            "Birinchi qadam",
          ],
          rows: [
            [
              "iPhone’da Telegram ochilgan zahoti yopiladi",
              "Rasmiy hisobotdagi holatga o‘xshash",
              "Ilovani yangilang, bo‘lmasa stikerni Telegram Desktop orqali o‘chiring",
            ],
            [
              "Turnir guruhiga notanish akkaunt ketma-ket stiker tashlayapti",
              "Spam yoki ataylab uyushtirilgan oqim",
              "Admin a’zoni cheklaydi va xabarlarni o‘chiradi",
            ],
            [
              "Kimdir «stikerni tekshiruvchi bot»ga o‘tishni yoki SMS kod yuborishni so‘rayapti",
              "Firibgarlik",
              "Kodni hech kimga bermang, havolani ochmang",
            ],
            [
              "Jamoadosh «yangi patch» deb fayl yoki APK yuborgan",
              "Begona o‘rnatish fayli",
              "Ochmang, yangilanishni faqat rasmiy do‘kondan oling",
            ],
            [
              "Ilova odatdagidek ishlayapti",
              "Xavf belgisi yo‘q",
              "Shunchaki versiyani tekshirib qo‘ying",
            ],
          ],
        },
        {
          t: "p",
          text: "Jamoadoshdan kelgan g‘alati faylga alohida e’tibor bering: uning akkaunti buzilgan bo‘lishi mumkin. Unga boshqa yo‘l bilan, masalan ovozli chatda yoki o‘yin ichida yozib, faylni rostdan u yuborganini aniqlang.",
        },
        {
          t: "h2",
          id: "telefondagi-telegram-versiyasi-12-9",
          text: "Telefondagi Telegram versiyasi 12.9.4 dan eskimi — qanday bilish mumkin?",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "App Store yoki Google Play’da Telegram sahifasini oching.",
            "«Yangilash» (Update) tugmasi bor-yo‘qligiga qarang.",
            "Tugma bo‘lsa, yangilang va ilovani qayta oching.",
            "Telegram sozlamalarini oxirigacha pastga suring: versiya raqami odatda shu yerda yozilgan bo‘ladi.",
            "iPhone’da raqamni 12.9.4 bilan solishtiring. Hisobot maqomiga ko‘ra, xato shu versiyada tuzatilgan. Raqam undan katta bo‘lsa ham hammasi joyida.",
          ],
        },
        {
          t: "p",
          text: "Yangilanishni faqat rasmiy do‘kon yoki <a href=\"https://telegram.org\" target=\"_blank\" rel=\"noopener\">telegram.org</a> orqali oling. Chatda yuborilgan o‘rnatish fayllari, «tezkor patch» havolalari va noma’lum saytlar yangilanish manbai bo‘la olmaydi.",
        },
        {
          t: "p",
          text: "Do‘konda yangi versiya hali ko‘rinmasa, keyinroq qayta tekshiring. Yangilanish qanday tartibda tarqatilishi haqida rasmiy ma’lumot bu maqolada tasdiqlanmagan.",
        },
        {
          t: "p",
          text: "Turnir yoki klan urushi kuni yangilashni oxirgi daqiqaga qoldirmang. Yuklab olish va qayta kirish vaqt oladi, lobby ochilganda esa chat qo‘l ostida bo‘lishi kerak.",
        },
        {
          t: "h2",
          id: "squad-chati-ochilmay-qolsa-uni",
          text: "Squad chati ochilmay qolsa, uni qanday qaytarish mumkin?",
        },
        {
          t: "p",
          text: "Rasmiy hisobotdagi foydalanuvchi ilovani odatdagidek, belgisidan ochganda u darhol yopilganini yozgan. Moderator vaqtinchalik yechim sifatida muammoli stikerni Telegram Desktop orqali o‘chirishni taklif qilgan. Shunga tayanib, quyidagi tartibda harakat qiling:",
        },
        {
          t: "list",
          items: [
            "<strong>Avval yangilang.</strong> Do‘konda yangi versiya bo‘lsa, boshqa narsaga urinishdan oldin uni o‘rnating.",
            "<strong>Kompyuterdan o‘chiring.</strong> Yangilash yordam bermasa yoki u hali chiqmagan bo‘lsa, kompyuterda Telegram Desktop’ga kiring va oxirgi kelgan muammoli stikerni chatdan o‘chiring.",
            "<strong>Stiker guruhda bo‘lsa, adminga yozing.</strong> Stikerni o‘zingiz o‘chira olmasangiz, admin xabarni guruhdan olib tashlashi mumkin.",
            "<strong>Kompyuter yo‘q bo‘lsa,</strong> ilovasi ishlayotgan jamoadosh-admindan stikerni olib tashlashni so‘rang.",
            "<strong>Keyin qayta tekshiring.</strong> Telefonni o‘chirib yoqing va Telegram’ni qayta oching.",
          ],
        },
        {
          t: "p",
          text: "Ilovani o‘chirib, qayta o‘rnatishni o‘ylayotgan bo‘lsangiz, avval kirish kodi qaysi raqamga yoki qurilmaga kelishini aniqlab oling. Ikki bosqichli parol qo‘yilgan bo‘lsa, uni eslab qoling. Aks holda chatdan emas, akkauntga kirish imkonidan ayrilib qolishingiz mumkin.",
        },
        {
          t: "h2",
          id: "oyin-guruhi-admini-stiker-oqimini",
          text: "O‘yin guruhi admini stiker oqimini qanday cheklaydi?",
        },
        {
          t: "p",
          text: "Klan yoki turnir guruhini boshqarsangiz, iPhone’dagi jamoadoshlaringiz chatining ishlashi sizga ham bog‘liq. Hamma yangilanib olguncha quyidagilar yordam berishi mumkin:",
        },
        {
          t: "list",
          items: [
            "<strong>A’zolar ruxsatlarini toraytiring.</strong> Guruh ruxsatlarida stiker va GIF yuborishni vaqtincha cheklash imkoni bor. Menyu nomlari versiyaga qarab farq qilishi mumkin, shuning uchun ularni ilovaning o‘zida tekshiring.",
            "<strong>Yangi kelganlarni nazorat qiling.</strong> Sekin rejimni (Slow Mode) yoqing yoki guruhga faqat tanish jamoadoshlarni qabul qiling.",
            "<strong>E’lonlar kanalidagi muhokamani kuzating.</strong> Kanalga ulangan guruhda kim yozishi mumkinligini sozlamalardan tekshirib chiqing.",
            "<strong>Kechikmasdan harakat qiling.</strong> Shubhali stikerni darhol o‘chiring va yuboruvchini cheklang. Shunda boshqa a’zolarning chati ham ishdan chiqmaydi.",
            "<strong>Guruhga qisqa e’lon yozing:</strong> «iPhone’dagilar Telegram’ni yangilasin, chatda fayl va patch tarqatmang».",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Bu choralar rasmiy tuzatishning o‘rnini bosmaydi. Ular faqat hamma yangilanib olguncha noqulaylikni kamaytiradi.",
        },
        {
          t: "h2",
          id: "stiker-vahimasidan-foydalanib-oyinchilarni-qanday",
          text: "Stiker vahimasidan foydalanib o‘yinchilarni qanday aldashadi?",
        },
        {
          t: "p",
          text: "Ogohlantirish tarqalgan kunlari quyidagi ssenariylarga ehtiyot bo‘ling:",
        },
        {
          t: "list",
          items: [
            "«Sizga zararli stiker keldi, akkauntni tekshiramiz» deb SMS kod yoki ikki bosqichli parolni so‘rashadi.",
            "«Himoya patchi» nomi bilan APK yoki boshqa fayl yuborishadi.",
            "«Xavfsizlik uchun» deb PUBG, MLBB yoki Free Fire akkauntining parolini so‘rashadi.",
            "«Zararli stikerdan himoyalandingiz, mukofotingiz — tekin UC yoki olmos» degan havola tashlashadi.",
          ],
        },
        {
          t: "p",
          text: "Bunday va’dalar ortida nima turishi haqida batafsil: <a href=\"/blog/free-fire-bepul-olmos-haqiqatmi\">Free Fire bepul olmos haqiqatmi</a>.",
        },
        {
          t: "note",
          tone: "info",
          text: "Parol yoki SMS kod so‘ragan «donat xizmati»dan uzoqroq yuring. GemPay o‘yin valyutasi uchun faqat Player ID so‘raydi. Nik tekshirib ko‘rsatiladi, parol esa hech qachon so‘ralmaydi. Telegram Stars va Premium uchun faqat @username kerak. Premium Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi, akkauntga kirilmaydi.",
        },
        {
          t: "p",
          text: "GemPay faqat <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> va yordam akkaunti <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> orqali ishlaydi. Boshqa nomdagi «support» sizga o‘zi birinchi bo‘lib yozsa, ishonmang. To‘ldirishda qaysi ma’lumotni bersa bo‘ladi, qaysi birini berish xavfli — buni <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">o‘yin hisobini xavfsiz to‘ldirish</a> maqolasida yozganmiz. Kimdir «xarid uchun hamyon ulang» desa, <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">Telegram Wallet o‘yinchiga kerakmi</a> maqolasini o‘qing.",
        },
        {
          t: "h2",
          id: "telegram-muammosi-oyin-akkauntlariga-otib",
          text: "Telegram muammosi o‘yin akkauntlariga o‘tib ketmasligi uchun nima qilish kerak?",
        },
        {
          t: "p",
          text: "Telegram ishdan chiqsa yoki unga kirish yo‘qolsa, bu o‘yin akkauntingizni qulflab qo‘ymasligi kerak. Quyidagilarni bir marta sozlab qo‘ysangiz yetadi:",
        },
        {
          t: "list",
          items: [
            "<strong>O‘yin akkauntini bitta kanalga bog‘lamang.</strong> Faqat Telegram yoki bitta telefon raqami orqali kirish xavfli. O‘yin ichida qo‘shimcha kirish usulini, masalan pochtani, ulang.",
            "<strong>Ikki bosqichli parolni tekshiring.</strong> Telegram sozlamalarining maxfiylik bo‘limida u yoqilganmi, ko‘rib chiqing. Kod va parolni hech kimga bermang.",
            "<strong>Faol seanslarni ko‘rib chiqing.</strong> Qurilmalar ro‘yxatida notanish telefon yoki kompyuter bo‘lsa, uni chiqarib yuboring.",
            "<strong>Raqamni almashtirishdan oldin tayyorgarlik ko‘ring.</strong> SIM kartani almashtirish yoki sotishdan oldingi tekshiruv ro‘yxati: <a href=\"/blog/raqam-sotishdan-oldin-oyin-akkauntini-himoyalash\">raqam sotishdan oldin o‘yin akkauntini himoyalash</a>.",
            "<strong>Jamoaga faqat tasdiqlangan ma’lumotni yuboring.</strong> «Stiker iPhone’dagi Telegram’ni yopib qo‘ygani rasmiy qayd etilgan, 12.9.4 da tuzatilgan deb ko‘rsatilgan — ilovani yangilang». Shu bitta gap uzun vahimali postdan ko‘ra foydaliroq.",
          ],
        },
        {
          t: "sources",
          items: [
            {
              label: "Stickers and masks",
              href: "https://core.telegram.org/api/stickers",
            },
            {
              label: "Telegram crashes when opening Chats or sending messages",
              href: "https://bugs.telegram.org/c/65400/7",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Squad chatiga kirmasam ham stiker orqali PUBG yoki MLBB akkauntimni olib qo‘yishlari mumkinmi?",
          a: "Rasmiy hisobotda bunday holat yo‘q, unda faqat iPhone’dagi ilovaning yopilib qolishi qayd etilgan. O‘yin akkauntingiz uchun asosiy xavf — parol yoki SMS kodni so‘raydigan firibgarlar.",
        },
        {
          q: "Androidda o‘ynayman — bu stiker muammosi menga ham tegishlimi?",
          a: "Hisobot iOS ilovasi haqida, Android bo‘yicha tasdiqlangan ma’lumot topilmadi. Shunday bo‘lsa ham, Google Play’da Telegram’ning yangi versiyasi chiqqan-chiqmaganini tekshirib turing.",
        },
        {
          q: "Guruh admini bo‘lmasam, shubhali stiker yuborgan odamdan qanday himoyalanaman?",
          a: "Stikerni o‘zingizda o‘chiring va yuboruvchi haqida adminga xabar bering. Agar u shaxsiy chatga yozayotgan notanish odam bo‘lsa, uni bloklab qo‘ying.",
        },
        {
          q: "Jamoadosh «Telegram patchi» deb fayl yubordi, uni o‘rnatsam bo‘ladimi?",
          a: "Yo‘q, Telegram’ni faqat App Store, Google Play yoki telegram.org orqali yangilang. Faylni rostdan u yuborganini jamoadoshdan boshqa yo‘l bilan so‘rab bilib oling.",
        },
        {
          q: "Telegram yopilib qolganda turnir guruhidagi xabarlarni qayerdan o‘qiyman?",
          a: "Kompyuter bo‘lsa, Telegram Desktop’ga kiring — u orqali muammoli stikerni ham olib tashlash mumkin. Kompyuter bo‘lmasa, muhim e’lonlarni vaqtincha o‘yin ichidagi chatga yozib turishni so‘rang.",
        },
        {
          q: "Stiker vahimasi paytida GemPay’dan UC yoki Stars olish xavfsizmi?",
          a: "GemPay o‘yin uchun faqat Player ID, Stars va Premium uchun faqat @username so‘raydi. Parol yoki SMS kod hech qachon so‘ralmaydi. Buyurtmani @Gempayuz_bot’da bering, savol tug‘ilsa @StarsPaymeeSupport’ga buyurtma raqami bilan yozing.",
        },
      ],
    },
    ru: {
      title: "Можно ли взломать Telegram через стикер: план защиты для геймера",
      metaTitle: "Можно ли взломать Telegram через стикер",
      metaDescription: "В официальном баг-репорте стикер вызывал вылет Telegram на iOS, а не взлом аккаунта. Обновите приложение до версии 12.9.4 или новее.",
      excerpt: "В официальном баг-репорте стикер вызывал вылет Telegram на iOS, а не взлом аккаунта. Обновите приложение до версии 12.9.4 или новее.",
      answer: "В официальном баг-репорте стикер вызывал вылет Telegram на iOS, а не взлом аккаунта. Обновите приложение до версии 12.9.4 или новее.",
      body: [
        {
          t: "h2",
          id: "telegram-stiker-orqali-oyinchining-akkauntini",
          text: "Можно ли взломать аккаунт геймера через стикер в Telegram?",
        },
        {
          t: "p",
          text: "На платформе баг-репортов Telegram зафиксирована одна проблема, связанная со стикером: вылетало приложение на iOS. Об угоне аккаунта, краже переписки или запуске чужого кода на телефоне в официальном источнике ничего не сказано.",
        },
        {
          t: "p",
          text: "Автор отчёта пишет, что приложение закрывалось каждый раз. Стек в логах ошибок относился к библиотеке rlottie и заканчивался на <strong>SIGABRT</strong>. Модератор платформы ответил, что причина — какой-то стикер и что ошибку исправят в следующем обновлении. Судя по статусу отчёта, последний раз ошибка воспроизводилась в версии 12.9.3.34622, а исправлена в <strong>12.9.4</strong>.",
        },
        {
          t: "p",
          text: "В постах, которые расходятся по каналам, звучат более серьёзные вещи: повреждение памяти, запуск кода злоумышленника, стикер, который проходит серверные проверки, срочный переход на новую библиотеку. В официальных источниках этих утверждений нет. Не пересылайте их в чат сквада как факт: паника никого не защищает.",
        },
        {
          t: "p",
          text: "Отчёт касается приложения для iOS. Официальные данные по Android и Desktop в этой статье не подтверждены.",
        },
        {
          t: "p",
          text: "Аккаунты PUBG Mobile, Mobile Legends и Free Fire существуют отдельно от Telegram. Официальных сведений о краже игрового аккаунта через стикер нет. Но в дни, когда расходятся такие предупреждения, активизируются мошенники. Для геймера главная угроза — именно они.",
        },
        {
          t: "h2",
          id: "squad-chatidagi-stiker-nega-bosmasangiz",
          text: "Почему стикер в чате сквада проигрывается, даже если на него не нажимать?",
        },
        {
          t: "p",
          text: "По документации Telegram, анимированные стикеры — это векторные анимации Lottie. Они приходят файлом в специальном формате .tgs и воспроизводятся с помощью библиотеки rlottie (<a href=\"https://core.telegram.org/api/stickers\" target=\"_blank\" rel=\"noopener\">Stickers and masks</a>).",
        },
        {
          t: "p",
          text: "На практике это значит: когда вы открываете чат, стикеры на экране отрисовывает само приложение, нажимать ничего не нужно. В группе клана, турнирном чате или переписке с напарником по дуо стикеры начинают двигаться сразу после открытия чата.",
        },
        {
          t: "p",
          text: "Поэтому один проблемный стикер может сделать весь чат недоступным. Официальный отчёт описывает именно такую ситуацию: приложение закрывалось при открытии чатов или отправке сообщения.",
        },
        {
          t: "p",
          text: "В игровых группах часто встречаются и Premium-стикеры, и анимированные эмодзи. О связи этой ошибки с Premium в официальном источнике ничего нет. Что подписка на самом деле даёт игроку, мы разобрали отдельно: <a href=\"/blog/telegram-premium-oyinchi-uchun\">что Telegram Premium даёт геймеру</a>.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "klan-yoki-turnir-guruhida-qaysi",
          text: "Что означает тот или иной сигнал в группе клана или турнира?",
        },
        {
          t: "table",
          head: [
            "Что происходит",
            "Что это может значить",
            "Первый шаг",
          ],
          rows: [
            [
              "На iPhone Telegram закрывается сразу после запуска",
              "Похоже на случай из официального отчёта",
              "Обновите приложение, если не помогло — удалите стикер через Telegram Desktop",
            ],
            [
              "Незнакомый аккаунт кидает в турнирную группу стикеры один за другим",
              "Спам или намеренная атака",
              "Админ ограничивает участника и удаляет сообщения",
            ],
            [
              "Кто-то просит перейти в «бот для проверки стикеров» или прислать код из SMS",
              "Мошенничество",
              "Никому не сообщайте код, не открывайте ссылку",
            ],
            [
              "Тиммейт прислал файл или APK под видом «нового патча»",
              "Сторонний установочный файл",
              "Не открывайте, обновления берите только из официального магазина",
            ],
            [
              "Приложение работает как обычно",
              "Признаков угрозы нет",
              "Просто проверьте версию",
            ],
          ],
        },
        {
          t: "p",
          text: "Особенно внимательно относитесь к странным файлам от тиммейтов: их аккаунт мог быть взломан. Свяжитесь с человеком другим способом — например, в голосовом чате или в самой игре — и уточните, действительно ли файл отправил он.",
        },
        {
          t: "h2",
          id: "telefondagi-telegram-versiyasi-12-9",
          text: "Как узнать, старше ли Telegram на телефоне версии 12.9.4?",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Откройте страницу Telegram в App Store или Google Play.",
            "Посмотрите, есть ли кнопка «Обновить» (Update).",
            "Если кнопка есть, обновите приложение и откройте его заново.",
            "Пролистайте настройки Telegram до самого низа: номер версии обычно указан там.",
            "На iPhone сравните номер с 12.9.4. По статусу отчёта ошибка исправлена именно в этой версии. Если номер больше — тоже всё в порядке.",
          ],
        },
        {
          t: "p",
          text: "Обновления берите только в официальном магазине или на <a href=\"https://telegram.org\" target=\"_blank\" rel=\"noopener\">telegram.org</a>. Установочные файлы из чатов, ссылки на «срочный патч» и незнакомые сайты источником обновления быть не могут.",
        },
        {
          t: "p",
          text: "Если в магазине новой версии пока нет, проверьте позже. Официальных данных о том, в каком порядке распространяется обновление, в этой статье нет.",
        },
        {
          t: "p",
          text: "В день турнира или клановой войны не откладывайте обновление на последнюю минуту. Загрузка и повторный вход занимают время, а когда открывается лобби, чат должен быть под рукой.",
        },
        {
          t: "h2",
          id: "squad-chati-ochilmay-qolsa-uni",
          text: "Как вернуть чат сквада, если он перестал открываться?",
        },
        {
          t: "p",
          text: "Пользователь из официального отчёта писал, что приложение вылетало сразу при обычном запуске по иконке. В качестве временного решения модератор предложил удалить проблемный стикер через Telegram Desktop. Исходя из этого, действуйте в таком порядке:",
        },
        {
          t: "list",
          items: [
            "<strong>Сначала обновитесь.</strong> Если в магазине есть новая версия, установите её, прежде чем пробовать что-то ещё.",
            "<strong>Удалите с компьютера.</strong> Если обновление не помогло или ещё не вышло, зайдите в Telegram Desktop на компьютере и удалите из чата последний проблемный стикер.",
            "<strong>Если стикер в группе — напишите админу.</strong> Если сами удалить стикер не можете, админ уберёт сообщение из группы.",
            "<strong>Если компьютера нет,</strong> попросите тиммейта-админа, у которого приложение работает, удалить стикер.",
            "<strong>Потом проверьте снова.</strong> Перезагрузите телефон и откройте Telegram заново.",
          ],
        },
        {
          t: "p",
          text: "Если думаете удалить и переустановить приложение, сначала выясните, на какой номер или устройство придёт код входа. Если включён облачный пароль (двухэтапная аутентификация), убедитесь, что помните его. Иначе можно потерять не чат, а доступ к самому аккаунту.",
        },
        {
          t: "h2",
          id: "oyin-guruhi-admini-stiker-oqimini",
          text: "Как админу игровой группы ограничить поток стикеров?",
        },
        {
          t: "p",
          text: "Если вы управляете группой клана или турнира, работа чата у ваших тиммейтов с iPhone зависит и от вас. Пока все не обновились, может помочь следующее:",
        },
        {
          t: "list",
          items: [
            "<strong>Сузьте права участников.</strong> В разрешениях группы можно временно запретить отправку стикеров и GIF. Названия пунктов меню зависят от версии, поэтому проверяйте их в самом приложении.",
            "<strong>Контролируйте новичков.</strong> Включите медленный режим (Slow Mode) или принимайте в группу только знакомых тиммейтов.",
            "<strong>Следите за обсуждением в канале объявлений.</strong> Проверьте в настройках, кто может писать в группе, привязанной к каналу.",
            "<strong>Действуйте без промедления.</strong> Сразу удаляйте подозрительный стикер и ограничивайте отправителя. Тогда чат не сломается и у остальных участников.",
            "<strong>Напишите в группу короткое объявление:</strong> «У кого iPhone — обновите Telegram, файлы и патчи в чат не кидайте».",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Эти меры не заменяют официальное исправление. Они лишь уменьшают неудобства, пока все не обновятся.",
        },
        {
          t: "h2",
          id: "stiker-vahimasidan-foydalanib-oyinchilarni-qanday",
          text: "Как мошенники используют панику вокруг стикеров, чтобы обмануть игроков?",
        },
        {
          t: "p",
          text: "В дни, когда расходится предупреждение, остерегайтесь таких сценариев:",
        },
        {
          t: "list",
          items: [
            "«Вам пришёл вредоносный стикер, проверим аккаунт» — и просят код из SMS или облачный пароль.",
            "Присылают APK или другой файл под названием «защитный патч».",
            "«Для безопасности» просят пароль от аккаунта PUBG, MLBB или Free Fire.",
            "Кидают ссылку «Вы защищены от вредоносного стикера, ваша награда — бесплатные UC или алмазы».",
          ],
        },
        {
          t: "p",
          text: "Что стоит за такими обещаниями, подробно разобрано здесь: <a href=\"/blog/free-fire-bepul-olmos-haqiqatmi\">бесплатные алмазы Free Fire — правда или нет</a>.",
        },
        {
          t: "note",
          tone: "info",
          text: "Держитесь подальше от «донат-сервиса», который просит пароль или код из SMS. GemPay для игровой валюты запрашивает только Player ID. Ник проверяется и показывается вам, пароль не спрашивают никогда. Для Telegram Stars и Premium нужен только @username. Premium подключается через официальный механизм подарков Telegram, без входа в аккаунт.",
        },
        {
          t: "p",
          text: "GemPay работает только через <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> и аккаунт поддержки <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>. Если вам первым пишет «support» с другим именем, не доверяйте. Какие данные можно сообщать при пополнении, а какие опасно, — в статье <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">как безопасно пополнить игровой счёт</a>. А если кто-то говорит «для покупки подключите кошелёк», прочитайте <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">нужен ли геймеру Telegram Wallet</a>.",
        },
        {
          t: "h2",
          id: "telegram-muammosi-oyin-akkauntlariga-otib",
          text: "Что сделать, чтобы проблемы с Telegram не задели игровые аккаунты?",
        },
        {
          t: "p",
          text: "Если Telegram вылетает или доступ к нему потерян, это не должно блокировать ваш игровой аккаунт. Достаточно один раз настроить следующее:",
        },
        {
          t: "list",
          items: [
            "<strong>Не привязывайте игровой аккаунт к одному каналу.</strong> Вход только через Telegram или один номер телефона — это риск. Подключите в игре дополнительный способ входа, например почту.",
            "<strong>Проверьте облачный пароль.</strong> Посмотрите в разделе конфиденциальности настроек Telegram, включён ли он. Никому не сообщайте ни код, ни пароль.",
            "<strong>Просмотрите активные сеансы.</strong> Если в списке устройств есть незнакомый телефон или компьютер, завершите этот сеанс.",
            "<strong>Готовьтесь заранее к смене номера.</strong> Чек-лист перед заменой или продажей SIM-карты: <a href=\"/blog/raqam-sotishdan-oldin-oyin-akkauntini-himoyalash\">как защитить игровой аккаунт перед продажей номера</a>.",
            "<strong>Отправляйте команде только проверенную информацию.</strong> «Официально зафиксировано, что стикер вызывал вылет Telegram на iPhone, исправлено в 12.9.4 — обновите приложение». Одна такая фраза полезнее длинного панического поста.",
          ],
        },
        {
          t: "sources",
          items: [
            {
              label: "Stickers and masks",
              href: "https://core.telegram.org/api/stickers",
            },
            {
              label: "Telegram crashes when opening Chats or sending messages",
              href: "https://bugs.telegram.org/c/65400/7",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Могут ли через стикер увести мой аккаунт PUBG или MLBB, даже если я не захожу в чат сквада?",
          a: "В официальном отчёте такого случая нет — там описан только вылет приложения на iPhone. Главная опасность для игрового аккаунта — мошенники, которые выпрашивают пароль или код из SMS.",
        },
        {
          q: "Я играю на Android — меня эта проблема со стикером тоже касается?",
          a: "Отчёт посвящён приложению для iOS, подтверждённых данных по Android не найдено. Тем не менее периодически проверяйте в Google Play, не вышла ли новая версия Telegram.",
        },
        {
          q: "Я не админ группы. Как защититься от человека, который прислал подозрительный стикер?",
          a: "Удалите стикер у себя и сообщите об отправителе админу. Если это незнакомец, пишущий в личку, просто заблокируйте его.",
        },
        {
          q: "Тиммейт прислал файл с подписью «патч для Telegram». Можно его установить?",
          a: "Нет, обновляйте Telegram только через App Store, Google Play или telegram.org. Уточните у тиммейта другим способом, действительно ли файл прислал он.",
        },
        {
          q: "Где читать сообщения турнирной группы, если Telegram вылетает?",
          a: "Если есть компьютер, зайдите в Telegram Desktop — через него можно и удалить проблемный стикер. Если компьютера нет, попросите временно дублировать важные объявления во внутриигровом чате.",
        },
        {
          q: "Безопасно ли покупать UC или Stars в GemPay, пока все паникуют из-за стикеров?",
          a: "GemPay просит для игр только Player ID, а для Stars и Premium — только @username; пароль или код из SMS не запрашивается никогда. Оформляйте заказ в @Gempayuz_bot, а с вопросами пишите в @StarsPaymeeSupport, указав номер заказа.",
        },
      ],
    },
  },
};

export default article;
