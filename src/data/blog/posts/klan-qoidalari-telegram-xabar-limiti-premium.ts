// Avtoblogyoz yasagan maqola (2026-11-18). Niyat: Klan yoki turnir kanalida uzun qoidalar, reglament va gaydlar yozadigan o‘yinchi admin «telegram uzun xabar limiti klan» so‘rovi bilan qidiradi. U bir postga qancha matn sig‘ishini, Premium yoki Rich Messages limitni rostdan oshirishini va buning uchun Premium olish arziydimi-yo‘qligini bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/faq
//   https://telegram.org/blog/communities-editor-invisible-messages
//   https://telegram.org/blog/watch-apps-and-more
//   https://core.telegram.org/bots/api
//   https://core.telegram.org/api/config

import type { Article } from "../types";
import { PREMIUM_PLANS, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "klan-qoidalari-telegram-xabar-limiti-premium",
  game: null,
  type: "info",
  datePublished: "2026-11-18",
  dateModified: "2026-11-18",
  keywords: ["telegram uzun xabar limiti klan","telegram xabar limiti premium","telegram bitta xabarga nechta belgi","klan qoidalari telegram post","telegram rich text editor premium","telegram 32768 belgi","turnir reglamenti telegram kanal","telegram premium admin uchun","лимит символов в сообщении телеграм","telegram premium длинные сообщения","редактор текста telegram premium","сколько символов в посте telegram"],
  locales: {
    uz: {
      title: "Telegram’da uzun xabar limiti: klan qoidalari bitta postga sig‘adimi?",
      metaTitle: "Telegram’da uzun xabar limiti",
      metaDescription: "Ha: Telegram FAQ’ga ko‘ra bitta xabarga 32 768 tagacha belgi sig‘adi. Sarlavha va jadvalli uzun postlar uchun muharrir esa hozircha faqat Premium’da.",
      excerpt: "Ha: Telegram FAQ’ga ko‘ra bitta xabarga 32 768 tagacha belgi sig‘adi. Sarlavha va jadvalli uzun postlar uchun muharrir esa hozircha faqat Premium’da.",
      answer: "Ha: Telegram FAQ’ga ko‘ra bitta xabarga 32 768 tagacha belgi sig‘adi. Sarlavha va jadvalli uzun postlar uchun muharrir esa hozircha faqat Premium’da.",
      body: [
        {
          t: "p",
          text: "Ko‘p hollarda sig‘adi. <a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a>’ga ko‘ra bitta xabarga 32 768 tagacha belgi sig‘adi. Bu umumiy qoidalar, jarimalar va turnir tartibini bitta postga joylash uchun katta zaxira.",
        },
        {
          t: "p",
          text: "Uzun postlar uchun Telegram alohida Rich Text Editor muharririni chiqargan. <a href=\"https://telegram.org/blog/communities-editor-invisible-messages\" target=\"_blank\" rel=\"noopener\">Telegram blogiga</a> ko‘ra, u bitta xabarda 32 768 belgigacha yuborishga imkon beradi va hozircha faqat Telegram Premium foydalanuvchilariga ochiq.",
        },
        {
          t: "h2",
          id: "bitta-postga-qancha-matn-sigadi",
          text: "Bitta postga qancha matn sig‘adi va Premium’siz-chi?",
        },
        {
          t: "p",
          text: "Rasmiy raqam bitta: bir xabarda 32 768 tagacha belgi. Premium’siz admin oddiy xabar maydonida shuncha matnni yubora oladimi, bu maqolada tasdiqlanmagan. Buni o‘z ilovangizda sinab ko‘rish eng ishonchli yo‘l: reglamentni yuboring va oxirgi bandi joyida turganini tekshiring.",
        },
        {
          t: "p",
          text: "Amalda klan admini uchun belgilar soni odatda asosiy muammo bo‘lmaydi. Muammo matnning tuzilishida. Sarlavhasiz va raqamsiz yozilgan uzun reglamentni o‘yinchi oxirigacha o‘qimaydi. Keyin esa jarima paytida «bu qoida qayerda yozilgan edi?» degan bahs boshlanadi.",
        },
        {
          t: "h2",
          id: "kanallardagi-oddiy-4-096-premium",
          text: "Kanallardagi «oddiy 4 096, Premium 8 192» xabari rostmi?",
        },
        {
          t: "p",
          text: "Telegram kanallarida «xabar limitlari oshirildi» degan post tarqalgan. Unda oddiy akkaunt, Premium va «boy xabarlar» uchun alohida raqamlar keltirilgan. Quyida ularni rasmiy manbalar bilan solishtirdik.",
        },
        {
          t: "table",
          head: [
            "Da’vo",
            "Rasmiy manbada nima bor",
            "Admin uchun xulosa",
          ],
          rows: [
            [
              "Bitta xabar — 32 768 belgigacha",
              "FAQ ham, Telegram blogi ham tasdiqlaydi",
              "Reglament uchun hajm yetarli",
            ],
            [
              "Oddiy akkaunt — 4 096 belgigacha",
              "Oddiy foydalanuvchi uchun tasdiq topilmadi; <a href=\"https://core.telegram.org/bots/api\" target=\"_blank\" rel=\"noopener\">Bot API</a>’da 4 096 bot yuboradigan matn limiti sifatida bor",
              "Bu raqamni oddiy chatga bog‘lamang",
            ],
            [
              "Premium — 8 192 belgigacha",
              "Hech bir rasmiy sahifada topilmadi",
              "Fakt deb hisoblamang",
            ],
            [
              "500 blok, 50 media, 20 ustun, 16 daraja",
              "Bu maqolada tasdiqlanmagan, Premium muharririga tegishliligi ham noma’lum",
              "Reglament rejasini bu raqamlarga qurmang",
            ],
          ],
        },
        {
          t: "p",
          text: "Qoida oddiy: kanal postidagi raqamlarga emas, telegram.org sahifalariga va ilovangizda nima ko‘rinayotganiga tayaning. Beta funksiyalar haqidagi xabarlar ham kanallarda shunday tarqaladi va ko‘pi tasdiqlanmaydi. Bu haqda <a href=\"/blog/telegram-beta-balans-qr-kod-oyinchi\">Telegram beta yangiliklari haqidagi maqolada</a> yozganmiz.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "premium-muharriri-klan-reglamentini-yozishda",
          text: "Premium muharriri klan reglamentini yozishda nima beradi?",
        },
        {
          t: "p",
          text: "<a href=\"https://telegram.org/blog/communities-editor-invisible-messages\" target=\"_blank\" rel=\"noopener\">Telegram blogiga</a> ko‘ra, muharrirda sarlavha, jadval, ro‘yxat, iqtibos va kod bloklari bor. Xabarning o‘rtasiga rasm va video ham qo‘yish mumkin. Klan admini bulardan quyidagicha foydalanadi:",
        },
        {
          t: "list",
          items: [
            "<strong>Sarlavhalar.</strong> «Umumiy qoidalar», «Jarimalar», «Turnir reglamenti» bitta postda alohida bo‘limlarga ajraladi, o‘yinchi keraklisini tez topadi.",
            "<strong>Jadval.</strong> Turnir kunlari, xaritalar navbati, jamoalar va boshlanish vaqti rasm emas, matnli jadval bo‘ladi. Vaqt o‘zgarsa, rasmni qaytadan chizish shart emas.",
            "<strong>Raqamli ro‘yxat.</strong> Taqiq va jarimalar raqamlangan bo‘lsa, bahsda «3-bandni o‘qing» deyish kifoya.",
            "<strong>Iqtibos.</strong> Admin qarorini yoki muhim ogohlantirishni ajratib ko‘rsatish mumkin, masalan: «Parol va SMS kodni hech kimga bermang».",
            "<strong>Kod bloki.</strong> Lobby ID yoki xona paroli kabi nusxa olinadigan qisqa ma’lumot uchun qulay. Akkaunt paroli esa bu yerga ham hech qachon yozilmaydi.",
            "<strong>Matn ichidagi media.</strong> Player ID qayerda turishini ko‘rsatuvchi skrinshot yoki xarita sxemasi kerakli bandning yonida turadi.",
          ],
        },
        {
          t: "h2",
          id: "muharrirda-turnir-reglamentini-qanday-yozish",
          text: "Muharrirda turnir reglamentini qanday yozish mumkin?",
        },
        {
          t: "p",
          text: "Muharrir hozircha faqat Premium’da ishlaydi, shuning uchun bu qadamlar Premium’i bor admin uchun. Premium’siz yo‘l keyingi bo‘limlarda.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Kanal yoki guruhda xabar maydoniga reglamentning birinchi qatorlarini yozing.",
            "Matn 3 qatordan oshganda ⛶ belgisi chiqadi (<a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a>). Uni bosing, muharrir ochiladi.",
            "Bo‘limlarni sarlavha bilan ajrating. Jarimalarni raqamli ro‘yxatga, sana, xarita va jamoalarni jadvalga joylang.",
            "Kerakli joyga skrinshot yoki qisqa video qo‘shing. Oxiriga savollar bo‘yicha admin bilan qanday bog‘lanishni yozing.",
            "Yuborishdan oldin postni boshidan oxirigacha o‘qib chiqing, yuborgach qadab qo‘ying (pin). ⛶ chiqmasa, avval Premium faolligini tekshiring, keyin ilovani yangilab ko‘ring.",
          ],
        },
        {
          t: "h2",
          id: "klan-boti-orqali-qoidalarni-chiqarsangiz",
          text: "Klan boti orqali qoidalarni chiqarsangiz limit qanday?",
        },
        {
          t: "p",
          text: "Ayrim klanlarda /rules kabi buyruqqa qoidalarni chiqarib beradigan bot bor. Botlar uchun limit alohida belgilangan.",
        },
        {
          t: "p",
          text: "<a href=\"https://telegram.org/blog/watch-apps-and-more\" target=\"_blank\" rel=\"noopener\">Telegram blogida</a> yozilishicha, botlar endi boy formatlash bilan bitta xabarda 32 768 belgigacha yubora oladi. Taxminan dastlabki 8 000 belgidan keyin «Show More» tugmasi chiqadi. <a href=\"https://core.telegram.org/bots/api\" target=\"_blank\" rel=\"noopener\">Bot API hujjatida</a> esa sendMessage orqali yuboriladigan matn uchun 1–4 096 belgi ko‘rsatilgan. Botingiz qaysi usulda yuborishini uni sozlagan dasturchidan so‘rang.",
        },
        {
          t: "p",
          text: "Amaliy maslahat: eng muhim qoidalarni xabarning boshiga qo‘ying. «Show More»ni bosmagan o‘yinchi faqat birinchi qismni ko‘radi va jarimalar bandiga yetib bormasligi mumkin.",
        },
        {
          t: "p",
          text: "Bot klanda boshqa vazifalarni ham bajarishi mumkin. Masalan, <a href=\"/blog/klan-guruhiga-ariza-ai-bot-tekshiruv\">kirish arizalarini bot bilan tekshirish</a> haqida alohida yozganmiz.",
        },
        {
          t: "h2",
          id: "qoidalarni-rasm-yoki-video-izohiga",
          text: "Qoidalarni rasm yoki video izohiga yozsa bo‘ladimi?",
        },
        {
          t: "p",
          text: "Kichik e’lon uchun bo‘ladi, to‘liq reglament uchun bu yo‘l to‘g‘ri kelmaydi. Telegram’ning <a href=\"https://core.telegram.org/api/config\" target=\"_blank\" rel=\"noopener\">mijoz sozlamalari hujjatida</a> media izohi (caption) uzunligi uchun Premium’i yo‘q va Premium foydalanuvchilarga alohida maksimal qiymat belgilangan. Lekin rasmiy sahifada qiymatlarning o‘zi emas, faqat parametr tavsifi bor, shuning uchun aniq raqamni bu yerda keltirmaymiz.",
        },
        {
          t: "note",
          tone: "info",
          text: "Turnir afishasi ostiga faqat qisqa e’lon yozing: sana, vaqt va ro‘yxatdan o‘tish tartibi. To‘liq qoidalarni alohida postga joylang va izohda unga havola bering.",
        },
        {
          t: "h2",
          id: "premiumsiz-uzun-klan-qoidalarini-qanday",
          text: "Premium’siz uzun klan qoidalarini qanday tartiblash mumkin?",
        },
        {
          t: "p",
          text: "Premium bo‘lmasa ham qoidalarni tartibli joylash mumkin. Buning uchun bir nechta odat yetarli:",
        },
        {
          t: "list",
          items: [
            "Qoidalarni mavzu bo‘yicha 2–4 qismga bo‘ling: umumiy qoidalar, jarimalar, turnir reglamenti, donat va xavfsizlik.",
            "Har bir qismni alohida post qiling va asosiysini qadab qo‘ying. Qolgan qismlarga havolalarni shu asosiy postga yozing.",
            "Bandlarni raqamlang. Boshiga 3–5 qatorlik qisqa xulosa yozing: yangi a’zo ko‘pincha faqat shuni o‘qiydi.",
            "Xavfsizlik bandini albatta qo‘shing. Klan admini Player ID so‘rashi mumkin, lekin parol yoki SMS kod hech qachon so‘ralmaydi. Batafsil: <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">o‘yin hisobini xavfsiz to‘ldirish</a>.",
            "Kanal manzilini ham reglamentga yozing. Username va havolalar haqida: <a href=\"/blog/klan-kanaliga-bir-nechta-username-limit\">klan kanaliga bir nechta username</a>.",
          ],
        },
        {
          t: "p",
          text: "Qisqa xulosa namunasi: «1. Mashg‘ulotga kechikish — ogohlantirish. 2. Uch marta kelmaslik — tarkibdan chiqarish. 3. Turnir qoidalari — pastdagi havolada. 4. Parol va kodni hech kimga bermang». Shu to‘rt qator yangi a’zoga eng kerakli narsani beradi, qolgani havolalarda turadi.",
        },
        {
          t: "h2",
          id: "admin-uchun-premium-olish-arziydimi",
          text: "Admin uchun Premium olish arziydimi va uni qanday ulash mumkin?",
        },
        {
          t: "p",
          text: "Reglament, gayd va turnir jadvallarini muntazam yozadigan adminga arziydi: sarlavha va jadvallar uzun matnni bitta postda o‘qiladigan qiladi. Qoidalari bir-ikki ekranga sig‘adigan kichik klanga Premium shart emas, qismlarga bo‘lingan oddiy postlar yetadi. Premium o‘yinchiga yana nima berishini <a href=\"/blog/telegram-premium-oyinchi-uchun\">Telegram Premium o‘yinchi uchun</a> maqolasida yozganmiz.",
        },
        {
          t: "table",
          head: [
            "Muddat",
            "Narx",
            "Kimga mos",
          ],
          rows: [
            [
              "3 oy",
              `${som(premium(3), "uz")}`,
              "Bitta turnir mavsumida sinab ko‘rmoqchi bo‘lgan admin",
            ],
            [
              "6 oy",
              `${som(premium(6), "uz")}`,
              "Bir necha mavsum reglament yuritadigan admin",
            ],
            [
              "12 oy",
              `${som(premium(12), "uz")}`,
              "Kanalni doimiy yuritadigan asosiy admin",
            ],
          ],
        },
        {
          t: "p",
          text: "1 oylik tarif yo‘q. Narx barcha to‘lov usullarida bir xil.",
        },
        {
          t: "p",
          text: "GemPay’da Premium @username bo‘yicha Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi. Akkauntga kirilmaydi, Premium bir necha soniyada faollashadi. Klan a’zolari pul yig‘ib, asosiy adminga sovg‘a qilishi ham mumkin. Buning uchun faqat adminning @username’i kerak, parol ham, kod ham kerak emas.",
        },
        {
          t: "p",
          text: "To‘lov UzCard, HUMO, Click, Uzum Bank yoki bot balansi orqali qilinadi, Visa va Mastercard qabul qilinmaydi. Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi. Batafsil ma’lumot <a href=\"/tolov-va-qaytarish\">to‘lov va qaytarish</a> sahifasida. Buyurtma <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> orqali beriladi, savol bo‘lsa buyurtma raqami bilan <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>’ga yozing.",
        },
        {
          t: "p",
          text: "Muharrir Telegram’ning o‘z funksiyasi, uning imkoniyatlari va kimga ochiqligi Telegram’ga bog‘liq. GemPay mustaqil xizmat va Telegram bilan hamkorlik qilishini da’vo qilmaydi. Klan chatidagi boshqa pullik funksiyalar ham kanallarda tez-tez bo‘rttirib yoziladi, masalan: <a href=\"/blog/pullik-xabarlar-jamoadosh-bepul-havola\">pullik xabarlar va jamoadosh uchun havola</a>.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Telegram FAQ",
              href: "https://telegram.org/faq",
            },
            {
              label: "Rich Text Editor, Communities, Ephemeral Messages in Groups, 350 Million GIFs",
              href: "https://telegram.org/blog/communities-editor-invisible-messages",
            },
            {
              label: "Smartwatch Apps, Rich Text for Bots, AI Guardians for Groups, and Much More",
              href: "https://telegram.org/blog/watch-apps-and-more",
            },
            {
              label: "Telegram Bot API",
              href: "https://core.telegram.org/bots/api",
            },
            {
              label: "Client configuration",
              href: "https://core.telegram.org/api/config",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Klan qoidalarim juda uzun bo‘lsa, Telegram xabarni o‘zi kesib yuboradimi?",
          a: "Limitdan oshgan oddiy xabar bilan nima bo‘lishi rasmiy manbalarda yozilmagan. Yuborgandan keyin oxirgi band joyida ekanini tekshiring, yaxshisi esa reglamentni oldindan qismlarga bo‘ling.",
        },
        {
          q: "Premium olsam, kanaldagi Premium’siz a’zolar ham jadval va sarlavhali postni ko‘radimi?",
          a: "Rasmiy manbalarda Premium faqat muharrirda yozish bilan bog‘langan, o‘quvchilar uchun alohida shart aytilmagan. Ishonch hosil qilish uchun postni Premium’i yo‘q akkauntdan ochib ko‘ring.",
        },
        {
          q: "Klandagi boshqa admin ham uzun post yozishi uchun unga ham Premium kerakmi?",
          a: "Ha. Muharrir kanalga emas, Premium’i bor foydalanuvchiga ochiladi. Shuning uchun muharrirda post yozadigan har bir adminning akkauntida Premium bo‘lishi kerak.",
        },
        {
          q: "Jarimalar jadvalini rasm qilib qo‘ygan yaxshimi yoki matnli jadval qilganmi?",
          a: "Matnli jadvalni tahrirlash oson: vaqt yoki jamoa o‘zgarsa, rasmni qayta chizish shart emas. Rasmni sxema va xaritalar uchun qoldiring.",
        },
        {
          q: "Klan bo‘lib pul yig‘ib adminga Premium olsak, buyurtmani kim beradi?",
          a: "Istalgan a’zo @Gempayuz_bot’da adminning @username’ini kiritib buyurtma bera oladi. Admindan parol yoki SMS kod so‘ralmaydi.",
        },
        {
          q: "Turnir reglamentini bot orqali chiqarsak, «Show More» tugmasi nimani bildiradi?",
          a: "Telegram uzun bot xabarini taxminan dastlabki 8 000 belgidan keyin yig‘ib qo‘yadi. Davomini o‘qish uchun tugmani bosish kerak, shuning uchun asosiy qoidalarni boshiga yozing.",
        },
        {
          q: "Kanal postidagi 500 blok va 50 media limiti rostmi?",
          a: "Bu raqamlar bu maqolada tasdiqlanmagan va Premium muharririga tegishli ekani ham noma’lum. Klan postini rejalashtirganda ularga tayanmang.",
        },
      ],
    },
    ru: {
      title: "Лимит длинного сообщения в Telegram: влезут ли правила клана в один пост?",
      metaTitle: "Лимит длинного сообщения в Telegram",
      metaDescription: "Да: по FAQ Telegram в одно сообщение помещается до 32 768 символов. А редактор для длинных постов с заголовками и таблицами пока есть только в Premium.",
      excerpt: "Да: по FAQ Telegram в одно сообщение помещается до 32 768 символов. А редактор для длинных постов с заголовками и таблицами пока есть только в Premium.",
      answer: "Да: по FAQ Telegram в одно сообщение помещается до 32 768 символов. А редактор для длинных постов с заголовками и таблицами пока есть только в Premium.",
      body: [
        {
          t: "p",
          text: "Чаще всего влезут. По данным <a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">FAQ Telegram</a>, в одно сообщение помещается до 32 768 символов. Этого с запасом хватает, чтобы собрать в одном посте общие правила, штрафы и регламент турнира.",
        },
        {
          t: "p",
          text: "Для длинных постов в Telegram появился отдельный редактор — Rich Text Editor. Как пишут в <a href=\"https://telegram.org/blog/communities-editor-invisible-messages\" target=\"_blank\" rel=\"noopener\">блоге Telegram</a>, в нём можно отправить до 32 768 символов одним сообщением. Пока он доступен только пользователям Telegram Premium.",
        },
        {
          t: "h2",
          id: "bitta-postga-qancha-matn-sigadi",
          text: "Сколько текста помещается в один пост и как без Premium?",
        },
        {
          t: "p",
          text: "Официальная цифра одна: до 32 768 символов в сообщении. Можно ли без Premium отправить столько же через обычное поле ввода, в этой статье не подтверждено. Надёжнее всего проверить это в своём приложении. Отправьте регламент и посмотрите, на месте ли последний пункт.",
        },
        {
          t: "p",
          text: "На практике количество символов редко становится главной проблемой для админа клана. Проблема обычно в структуре. Длинный регламент без заголовков и нумерации игроки до конца не дочитывают. А когда дело доходит до штрафа, начинается спор: «Где это правило вообще написано?»",
        },
        {
          t: "h2",
          id: "kanallardagi-oddiy-4-096-premium",
          text: "Правда ли, что «обычным — 4 096, с Premium — 8 192»?",
        },
        {
          t: "p",
          text: "По Telegram-каналам разошёлся пост о том, что «лимиты сообщений увеличили». В нём приводятся отдельные цифры для обычного аккаунта, для Premium и для «насыщенных сообщений». Мы сверили их с официальными источниками.",
        },
        {
          t: "table",
          head: [
            "Утверждение",
            "Что сказано в официальных источниках",
            "Вывод для админа",
          ],
          rows: [
            [
              "Одно сообщение — до 32 768 символов",
              "Подтверждают и FAQ, и блог Telegram",
              "Для регламента этого хватит",
            ],
            [
              "Обычный аккаунт — до 4 096 символов",
              "Для обычного пользователя подтверждения не нашлось. В <a href=\"https://core.telegram.org/bots/api\" target=\"_blank\" rel=\"noopener\">Bot API</a> 4 096 — это лимит текста, который отправляет бот",
              "Не переносите эту цифру на обычный чат",
            ],
            [
              "Premium — до 8 192 символов",
              "Ни на одной официальной странице не найдено",
              "Не считайте это фактом",
            ],
            [
              "500 блоков, 50 медиа, 20 столбцов, 16 уровней вложенности",
              "В этой статье не подтверждено. Относится ли это к редактору Premium, тоже неизвестно",
              "Не стройте структуру регламента на этих цифрах",
            ],
          ],
        },
        {
          t: "p",
          text: "Правило простое: опирайтесь на страницы telegram.org и на то, что видите в своём приложении, а не на цифры из постов в каналах. Новости о бета-функциях расходятся по каналам так же, и большая часть потом не подтверждается. Об этом мы писали в <a href=\"/blog/telegram-beta-balans-qr-kod-oyinchi\">статье о бета-новинках Telegram</a>.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "premium-muharriri-klan-reglamentini-yozishda",
          text: "Чем редактор Premium поможет с правилами клана?",
        },
        {
          t: "p",
          text: "Как сказано в <a href=\"https://telegram.org/blog/communities-editor-invisible-messages\" target=\"_blank\" rel=\"noopener\">блоге Telegram</a>, в редакторе есть заголовки, таблицы, списки, цитаты и блоки кода. Фото и видео можно вставить прямо в середину сообщения. Вот как это пригодится админу клана:",
        },
        {
          t: "list",
          items: [
            "<strong>Заголовки.</strong> «Общие правила», «Штрафы», «Регламент турнира» становятся отдельными разделами одного поста, и игрок быстро находит нужный.",
            "<strong>Таблица.</strong> Дни турнира, очерёдность карт, команды и время старта оформляются текстовой таблицей, а не картинкой. Если время сдвинулось, ничего не нужно перерисовывать.",
            "<strong>Нумерованный список.</strong> Когда запреты и штрафы пронумерованы, в споре достаточно написать: «Прочитай пункт 3».",
            "<strong>Цитата.</strong> Так можно выделить решение админа или важное предупреждение, например: «Никому не сообщайте пароль и код из SMS».",
            "<strong>Блок кода.</strong> Удобен для коротких данных, которые нужно скопировать: Lobby ID или пароль от комнаты. Пароль от аккаунта сюда тоже нельзя писать никогда.",
            "<strong>Медиа внутри текста.</strong> Скриншот, где показано, где найти Player ID, или схема карты стоят рядом с нужным пунктом.",
          ],
        },
        {
          t: "h2",
          id: "muharrirda-turnir-reglamentini-qanday-yozish",
          text: "Как оформить регламент турнира в редакторе?",
        },
        {
          t: "p",
          text: "Редактор пока работает только в Premium, поэтому эти шаги — для админа с подпиской. Вариант без Premium описан в следующих разделах.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Начните писать регламент в поле ввода канала или группы.",
            "Когда текст станет длиннее 3 строк, появится значок ⛶ (<a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">FAQ Telegram</a>). Нажмите на него — откроется редактор.",
            "Разделите текст на части заголовками. Штрафы оформите нумерованным списком, а даты, карты и команды — таблицей.",
            "Вставьте скриншот или короткое видео там, где они нужны. В конце напишите, как связаться с админом, если есть вопросы.",
            "Перед отправкой перечитайте пост целиком, а после отправки закрепите его. Если значок ⛶ не появляется, сначала проверьте, активен ли Premium, затем обновите приложение.",
          ],
        },
        {
          t: "h2",
          id: "klan-boti-orqali-qoidalarni-chiqarsangiz",
          text: "Какой лимит, если правила выводит бот клана?",
        },
        {
          t: "p",
          text: "В некоторых кланах есть бот, который показывает правила по команде вроде /rules. Для ботов лимиты установлены отдельно.",
        },
        {
          t: "p",
          text: "В <a href=\"https://telegram.org/blog/watch-apps-and-more\" target=\"_blank\" rel=\"noopener\">блоге Telegram</a> сказано, что теперь боты могут отправлять одним сообщением с форматированием до 32 768 символов. Примерно после первых 8 000 символов появляется кнопка «Show More». В <a href=\"https://core.telegram.org/bots/api\" target=\"_blank\" rel=\"noopener\">документации Bot API</a> для текста, который отправляется через sendMessage, указан диапазон 1–4 096 символов. Каким способом отправляет сообщения ваш бот, уточните у разработчика, который его настраивал.",
        },
        {
          t: "p",
          text: "Практический совет: ставьте самые важные правила в начало сообщения. Игрок, который не нажал «Show More», увидит только первую часть и может не дойти до штрафов.",
        },
        {
          t: "p",
          text: "Бот может выполнять в клане и другие задачи. Например, про <a href=\"/blog/klan-guruhiga-ariza-ai-bot-tekshiruv\">проверку заявок на вступление с помощью бота</a> у нас есть отдельная статья.",
        },
        {
          t: "h2",
          id: "qoidalarni-rasm-yoki-video-izohiga",
          text: "Можно ли писать правила в подписи к фото или видео?",
        },
        {
          t: "p",
          text: "Для короткого объявления — да, для полного регламента такой вариант не подходит. В <a href=\"https://core.telegram.org/api/config\" target=\"_blank\" rel=\"noopener\">документации по настройкам клиента</a> для длины подписи к медиа (caption) заданы разные максимумы для пользователей с Premium и без него. Но на официальной странице приводится только описание параметров, а не сами значения, поэтому точных цифр здесь не будет.",
        },
        {
          t: "note",
          tone: "info",
          text: "Под турнирной афишей пишите только короткое объявление: дату, время и порядок регистрации. Полные правила выложите отдельным постом и дайте на него ссылку в подписи.",
        },
        {
          t: "h2",
          id: "premiumsiz-uzun-klan-qoidalarini-qanday",
          text: "Как упорядочить длинные правила клана без Premium?",
        },
        {
          t: "p",
          text: "Правила можно выложить аккуратно и без Premium. Достаточно нескольких привычек:",
        },
        {
          t: "list",
          items: [
            "Разбейте правила на 2–4 части по темам: общие правила, штрафы, регламент турнира, донат и безопасность.",
            "Каждую часть выложите отдельным постом, а главный закрепите. Ссылки на остальные части добавьте в него.",
            "Пронумеруйте пункты. В начале дайте короткую выжимку на 3–5 строк: новички чаще всего читают только её.",
            "Обязательно добавьте пункт о безопасности. Админ клана может попросить Player ID, но пароль или код из SMS не просят никогда. Подробнее: <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">как безопасно пополнить игровой счёт</a>.",
            "Впишите в регламент и адрес канала. Про username и ссылки: <a href=\"/blog/klan-kanaliga-bir-nechta-username-limit\">несколько username для канала клана</a>.",
          ],
        },
        {
          t: "p",
          text: "Пример выжимки: «1. Опоздание на тренировку — предупреждение. 2. Три неявки — исключение из состава. 3. Правила турнира — по ссылке ниже. 4. Никому не сообщайте пароль и код». Этих четырёх строк новичку хватит, чтобы узнать главное. Остальное лежит по ссылкам.",
        },
        {
          t: "h2",
          id: "admin-uchun-premium-olish-arziydimi",
          text: "Стоит ли админу брать Premium и как его подключить?",
        },
        {
          t: "p",
          text: "Админу, который постоянно пишет регламенты, гайды и турнирные таблицы, — стоит. С заголовками и таблицами длинный текст в одном посте нормально читается. Небольшому клану, у которого правила умещаются на один-два экрана, Premium не нужен: хватит обычных постов, разбитых на части. Что ещё Premium даёт игроку, мы рассказали в статье <a href=\"/blog/telegram-premium-oyinchi-uchun\">Telegram Premium для игрока</a>.",
        },
        {
          t: "table",
          head: [
            "Срок",
            "Цена",
            "Кому подходит",
          ],
          rows: [
            [
              "3 месяца",
              `${som(premium(3), "ru")}`,
              "Админу, который хочет попробовать в течение одного турнирного сезона",
            ],
            [
              "6 месяцев",
              `${som(premium(6), "ru")}`,
              "Админу, который ведёт регламент несколько сезонов",
            ],
            [
              "12 месяцев",
              `${som(premium(12), "ru")}`,
              "Главному админу, который ведёт канал постоянно",
            ],
          ],
        },
        {
          t: "p",
          text: "Тарифа на 1 месяц нет. Цена одинакова при любом способе оплаты.",
        },
        {
          t: "p",
          text: "В GemPay Premium подключается по @username через официальный механизм подарков Telegram. Вход в аккаунт не требуется, подписка активируется за несколько секунд. Участники клана могут скинуться и подарить Premium главному админу. Для этого нужен только @username админа — ни пароль, ни код не нужны.",
        },
        {
          t: "p",
          text: "Оплатить можно картой UzCard или HUMO, через Click, Uzum Bank или с баланса бота. Visa и Mastercard не принимаются. Если заказ не выполнен, деньги полностью возвращаются в течение 3 рабочих дней. Подробнее — на странице <a href=\"/tolov-va-qaytarish\">оплата и возврат</a>. Заказ оформляется в <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>. Если появились вопросы, напишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> и укажите номер заказа.",
        },
        {
          t: "p",
          text: "Редактор — собственная функция Telegram: что он умеет и кому доступен, решает Telegram. GemPay — независимый сервис и не заявляет о сотрудничестве с Telegram. Другие платные функции для чатов клана в каналах тоже часто преувеличивают. Пример — <a href=\"/blog/pullik-xabarlar-jamoadosh-bepul-havola\">платные сообщения и ссылка для тиммейта</a>.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Telegram FAQ",
              href: "https://telegram.org/faq",
            },
            {
              label: "Rich Text Editor, Communities, Ephemeral Messages in Groups, 350 Million GIFs",
              href: "https://telegram.org/blog/communities-editor-invisible-messages",
            },
            {
              label: "Smartwatch Apps, Rich Text for Bots, AI Guardians for Groups, and Much More",
              href: "https://telegram.org/blog/watch-apps-and-more",
            },
            {
              label: "Telegram Bot API",
              href: "https://core.telegram.org/bots/api",
            },
            {
              label: "Client configuration",
              href: "https://core.telegram.org/api/config",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Если правила клана очень длинные, Telegram сам обрежет сообщение?",
          a: "Что происходит с обычным сообщением сверх лимита, в официальных источниках не сказано. После отправки проверьте, на месте ли последний пункт. А лучше заранее разбейте регламент на части.",
        },
        {
          q: "Если я возьму Premium, участники канала без подписки увидят пост с таблицами и заголовками?",
          a: "В официальных источниках Premium связан только с написанием текста в редакторе, отдельных условий для читателей там нет. Чтобы убедиться, откройте пост с аккаунта без Premium.",
        },
        {
          q: "Другому админу клана тоже нужен Premium, чтобы писать длинные посты?",
          a: "Да. Редактор открывается не каналу, а пользователю с Premium. Поэтому подписка нужна каждому админу, который пишет посты в редакторе.",
        },
        {
          q: "Таблицу штрафов лучше выложить картинкой или сделать текстовой?",
          a: "Текстовую таблицу проще править: если сдвинулось время или поменялась команда, ничего не нужно перерисовывать. Картинки оставьте для схем и карт.",
        },
        {
          q: "Если клан скинется админу на Premium, кто оформляет заказ?",
          a: "Любой участник может оформить заказ в @Gempayuz_bot, указав @username админа. Пароль или код из SMS у админа не спрашивают.",
        },
        {
          q: "Регламент турнира выводит бот. Что значит кнопка «Show More»?",
          a: "Telegram сворачивает длинное сообщение бота примерно после первых 8 000 символов. Чтобы прочитать дальше, нужно нажать кнопку, поэтому главные правила ставьте в начало.",
        },
        {
          q: "Правда ли, что лимит — 500 блоков и 50 медиа, как пишут в каналах?",
          a: "Эти цифры в статье не подтверждены. Неизвестно и то, относятся ли они к редактору Premium. Не опирайтесь на них, когда планируете пост для клана.",
        },
      ],
    },
  },
};

export default article;
