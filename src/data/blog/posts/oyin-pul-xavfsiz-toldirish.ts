// Ishonch hub'i — barcha o'yin maqolalari shu sahifaga havola beradi.
// Reja: .plan/articles/oyin-pul-xavfsiz-toldirish.json (publishRank 17).
// Yozildi: 2026-10-23, qo'lda, uz + ru.
//
// NEGA HUB: o'yinga xos ID maqolalari («PUBG Player ID qayerda», «MLBB User
// ID va Server ID») «ID berish xavfsizmi» savoliga har biri o'zicha javob
// berardi. Bu sahifa umumiy qoidani bir joyda beradi, o'yin maqolalari esa
// faqat o'z o'yinidagi ID joyini ko'rsatib, shu yerga havola beradi.
//
// NARX YO'Q — README qoidasi. Bu yerda umuman raqamli summa yozilmaydi.

import type { Article } from "../types";

const article: Article = {
  slug: "oyin-pul-xavfsiz-toldirish",
  game: null,
  type: "trust",
  datePublished: "2026-10-23",
  dateModified: "2026-10-23",
  pillar: true,
  keywords: [
    "o'yin hisobini xavfsiz to'ldirish",
    "id berish xavfsizmi",
    "o'yin akkaunti o'g'irlanishi",
    "donat qilish xavfsizmi",
    "player id berish mumkinmi",
    "o'yin firibgarligi",
    "akkauntni himoya qilish",
    "безопасно ли пополнять игру по id",
  ],
  locales: {
    uz: {
      title: "O'yin hisobini xavfsiz to'ldirish: nima so'raladi va nima so'ralmaydi",
      metaTitle: "O'yinga pul kiritish xavfsizmi: ID, parol, firibgarlik",
      metaDescription:
        "O'yin hisobini to'ldirishda faqat ochiq Player ID kerak. Parol, SMS kod yoki akkauntni so'ragan " +
        "xizmat firibgar. Xavf belgilari va akkauntni himoyalash ro'yxati.",
      excerpt:
        "Vositachiga pul berishdan oldin: qaysi ma'lumot ochiq, qaysi biri akkauntni yo'qotishga olib " +
        "keladi, firibgarlikning tipik shakllari va akkauntni himoyalash ro'yxati.",
      answer:
        "O'yin hisobini to'ldirish uchun faqat ochiq Player ID kerak: bu profilingizda har kim ko'radigan raqam, " +
        "u bilan akkauntga kirib bo'lmaydi. Parol, SMS yoki ilova kodi, pochta paroli, akkauntni vaqtincha berish " +
        "va ekranni ulashish hech qanday to'ldirish usulida talab qilinmaydi. Shulardan birini so'ragan xizmat " +
        "firibgar. To'lovdan oldingi nik tekshiruvi esa noto'g'ri ID ga pul ketishini to'xtatadi.",
      body: [
        {
          t: "p",
          text:
            "Vositachi orqali UC, olmos yoki Steam balansi olayotgan odamning asosiy qo'rquvi narx emas, akkaunt: «ID ni bersam, kirib olishmaydimi?», «nega parol so'rashyapti?», «arzon taklif xavfsizmi?». Bu maqola aynan shu savollarga javob beradi va qaysi o'yin bo'lishidan qat'i nazar amal qiladigan qoidani beradi. O'yiningizda ID aynan qayerda turishi esa alohida yozilgan: <a href=\"/blog/pubg-mobile-player-id-qayerda\">PUBG Mobile</a>, <a href=\"/blog/mobile-legends-user-id-server-id-qayerda\">Mobile Legends</a> va <a href=\"/blog/free-fire-olmos-sotib-olish\">Free Fire</a> uchun.",
        },

        { t: "h2", id: "player-id", text: "Player ID nima va uni berish nega xavfsiz" },
        {
          t: "p",
          text:
            "Player ID (ba'zi o'yinlarda User ID yoki UID) — akkauntning ochiq raqami. U profilda, do'stlar ro'yxatida va o'yin ichidagi statistikada ko'rinadi; klan a'zolari va tasodifiy raqiblar ham uni ko'radi. Bu raqam telefon raqamiga o'xshaydi: uni bilgan odam sizga nimadir yubora oladi, lekin hisobingizga kira olmaydi. Kirish uchun parol yoki bog'langan Google, Facebook, Apple akkaunti kerak — ular esa ochiq emas.",
        },
        {
          t: "p",
          text:
            "Rasmiy to'ldirish mexanizmi ham shunga qurilgan: nashriyotning do'koni yoki provayder API'si valyutani aynan ID bo'yicha hisobga yozadi. Shuning uchun halol xizmat ID dan boshqa hech narsa so'ramaydi — unga boshqa narsa kerak ham emas.",
        },
        {
          t: "facts",
          items: [
            { k: "Ochiq ma'lumot, berish mumkin", v: "Player ID, User ID, UID, Server ID yoki platforma, niknem, Steam account name" },
            { k: "Yopiq ma'lumot, hech qachon berilmaydi", v: "Parol, SMS yoki ilova kodi, pochta paroli, Steam Guard kodi, bog'langan Google yoki Facebook akkaunti" },
            { k: "Qoida", v: "Faqat ochiq ma'lumot so'ralsa — normal. Yopiq ma'lumot so'ralsa — to'xtang" },
          ],
        },

        { t: "h2", id: "soralmaydi", text: "Nima so'ralmasligi kerak va har biri nega xavfli" },
        {
          t: "list",
          ordered: true,
          items: [
            "<strong>Akkaunt paroli.</strong> Parol bilan akkauntga kirib, uni o'z pochtasiga bog'lab olishadi — keyin tiklab bo'lmaydi. To'ldirish uchun parol hech qachon kerak emas.",
            "<strong>SMS yoki ilova kodi.</strong> Bu kod aynan akkauntga kirishni tasdiqlaydi. Kim kodni so'rasa, u shu daqiqada sizning akkauntingizga kirmoqchi.",
            "<strong>Pochta paroli.</strong> Pochta — barcha akkauntlarning kaliti: unga kirgan odam o'yin, Telegram va bank ilovasi parollarini ham qayta tiklab oladi.",
            "<strong>Akkauntni «vaqtincha» berish.</strong> «Kirib to'ldirib beramiz» degan taklif — akkauntni ikkinchi qurilmaga ulash. Olmos kelsa ham, akkaunt endi ikki kishiniki.",
            "<strong>Ekranni ulashish yoki uzoqdan boshqaruv.</strong> Telefon ekranini ko'rsatish yoki boshqaruv ilovasini o'rnatish — parol yozayotganingizni va kodlarni to'g'ridan-to'g'ri ko'rish usuli.",
            "<strong>«Tekshiruv uchun» ilova o'rnatish.</strong> Rasmiy do'kondan tashqaridagi APK ko'pincha saqlangan parollarni yig'adigan dastur. To'ldirish uchun hech qanday qo'shimcha ilova kerak emas.",
          ],
        },
        {
          t: "note",
          tone: "warn",
          title: "Kod so'rash — akkauntni olish demak",
          text:
            "Hech bir to'ldirish xizmati, bank yoki o'yin nashriyoti sizdan kirish kodini so'ramaydi. Kodni «tekshiruv», «rasmiylashtirish» yoki «bonus» bahonasida so'ragan odam bilan suhbatni darhol tugating.",
        },

        { t: "h2", id: "sxemalar", text: "Firibgarlikning tipik shakllari" },
        {
          t: "table",
          caption: "Eng ko'p uchraydigan sxemalar — qanday ko'rinadi va nima yo'qotasiz.",
          head: ["Sxema", "Qanday ko'rinadi", "Natija"],
          rows: [
            ["Soxta bot yoki sayt", "Nomi haqiqiysidan bir harf farq qiladi, dizayni nusxa", "To'lov ketadi, valyuta kelmaydi"],
            ["«Avval to'lang, keyin yetkazamiz»", "Shaxsiy kartaga o'tkazma, chek va buyurtma raqami yo'q", "Isbotlab bo'lmaydigan yo'qotish"],
            ["O'g'irlangan karta bilan arzon to'ldirish", "Bozor narxidan ancha past, «aksiya» bahonasi", "Bir necha kundan keyin to'lov bekor qilinadi, valyuta olib qo'yiladi, akkauntga cheklov"],
            ["«Bepul olmos» yoki «bepul UC» generatori", "Sayt yoki ilova, oxirida «tekshiruv» va login so'raydi", "Akkaunt ma'lumotlari o'g'irlanadi"],
            ["«Akkauntga kirib to'ldiramiz»", "Login va parol so'raladi, go'yo arzonroq", "Akkaunt ikkinchi qurilmaga ulanadi, keyin egallanadi"],
            ["Do'st nomidan xabar", "O'g'irlangan akkauntdan «menga pul o'tkaz» yoki «shu havolani och»", "Pul yoki sizning akkauntingiz"],
          ],
        },
        {
          t: "p",
          text:
            "Bu sxemalar o'yinga qarab biroz boshqacha ko'rinadi. Free Fire atrofidagi «bepul olmos» saytlari <a href=\"/blog/free-fire-bepul-olmos-haqiqatmi\">alohida maqolada</a> ochib berilgan, Telegram'dagi shaxsiy UC sotuvchilari esa <a href=\"/blog/pubg-uc-qayerdan-sotib-olish-taqqoslash\">PUBG taqqoslovida</a>.",
        },

        { t: "h2", id: "nik-tekshiruvi", text: "To'lovdan oldin nik tekshiruvi nega muhim" },
        {
          t: "p",
          text:
            "Firibgarlikdan tashqari yana bir yo'qotish yo'li bor va u ko'proq uchraydi: noto'g'ri ID. Raqamda bitta xato — valyuta boshqa birovning amaldagi hisobiga tushadi, nashriyot esa bunday o'tkazmani ortga qaytarmaydi. Shuning uchun halol xizmat ID bo'yicha o'yinchi nikini to'lovdan OLDIN ko'rsatadi: nik siznikimi, tasdiqlaysiz, keyingina to'laysiz. Bu tekshiruv bepul bo'lishi va istalgancha takrorlanishi kerak.",
        },
        {
          t: "p",
          text:
            "Istisno — Steam: u yerda hamyon login (account name) bo'yicha to'ldiriladi va nikni ko'rsatib bo'lmaydi. Shuning uchun Steam loginini sozlamalardan nusxalab oling, xotiradan yozmang; farqi <a href=\"/oyinlar/steam\">Steam sahifasida</a> tushuntirilgan.",
        },

        { t: "h2", id: "himoya", text: "Akkauntni himoyalash: amaliy choralar" },
        {
          t: "list",
          items: [
            "<strong>Guest akkauntni bog'lang.</strong> Mehmon rejimidagi akkaunt qurilmada yashaydi: telefon yo'qolsa yoki ilova o'chirilsa, u bilan birga xaridlar ham yo'qoladi. Google, Facebook, Apple yoki o'yinning o'z hisobiga bog'lab qo'ying.",
            "<strong>Bog'langan akkauntda ikki bosqichli tasdiqlashni yoqing.</strong> Google va Facebook'da bu bir daqiqalik ish; usiz parolni bilgan odam akkauntni to'liq oladi.",
            "<strong>Har joyda alohida parol.</strong> O'yin, pochta va Telegram paroli bir xil bo'lsa, bittasining sizib chiqishi hammasini ochadi.",
            "<strong>Faol sessiyalarni tekshiring.</strong> Google va Facebook sozlamalarida qaysi qurilmalar kirganini ko'rish mumkin — notanishini chiqarib tashlang.",
            "<strong>Mod va «cheat» ilovalarni o'rnatmang.</strong> Ular akkauntni blokka olib boradi va ko'pincha saqlangan parollarni yig'adi.",
            "<strong>Umumiy telefonda akkauntdan chiqing.</strong> Klubdagi yoki do'stning qurilmasida kirgan bo'lsangiz, o'yindan va bog'langan akkauntdan chiqishni unutmang.",
            "<strong>Chek va buyurtma raqamini saqlang.</strong> Bahsli holatda ko'rsatadigan yagona dalil shu.",
          ],
        },

        { t: "h2", id: "notogri-ketsa", text: "Nimadir noto'g'ri ketsa" },
        {
          t: "steps",
          items: [
            {
              title: "Buyurtma raqamini oling",
              text: "Halol xizmatda har to'lov tarixda turadi: sana, o'yin, ID, summa, holat. Bu raqamsiz murojaat qilib bo'lmaydi. GemPay'da u ilovadagi «Tarix» bo'limida.",
            },
            {
              title: "Muddatni kuting va o'yinni qayta oching",
              text: "Yetkazish o'yinga qarab bir necha daqiqa oladi, balans esa ba'zan ilova qayta ochilgandagina yangilanadi. Belgilangan vaqt ikki barobar o'tgan bo'lsa, keyingi qadamga o'ting.",
            },
            {
              title: "Qo'llab-quvvatlashga chek bilan yozing",
              text: "Buyurtma raqami, to'lov cheki, ID va vaqt. GemPay'da bu @StarsPaymeeSupport. Hech kim sizdan parol yoki kod so'ramaydi — so'ralsa, bu qo'llab-quvvatlash emas.",
            },
            {
              title: "Bajarilmagan buyurtma uchun qaytarish",
              text: "Valyuta yetkazilmagan bo'lsa, pul to'liq qaytariladi; ariza va muddatlar to'lov va qaytarish sahifasida. Yetkazilgan valyuta qaytarilmaydi — bu nashriyot tomonidagi cheklov.",
            },
            {
              title: "Parol yoki kod berib qo'ygan bo'lsangiz",
              text: "Darhol bog'langan Google, Facebook yoki Apple parolini o'zgartiring, faol sessiyalardan chiqaring va o'yin nashriyotining yordam markaziga akkaunt tiklash so'rovini yuboring. Kechiktirgan har daqiqa akkauntni yo'qotish ehtimolini oshiradi.",
            },
          ],
        },
        {
          t: "p",
          text:
            "Qaytarish shartlari <a href=\"/tolov-va-qaytarish\">to'lov va pulni qaytarish</a> sahifasida, karta ma'lumotlari qayerda qolishi esa <a href=\"/tolov-xavfsizligi\">to'lov xavfsizligi</a> sahifasida yozilgan.",
        },

        { t: "h2", id: "gempay", text: "GemPay'da bu qanday ishlaydi" },
        {
          t: "p",
          text:
            "GemPay yuqoridagi qoidaning o'zi: faqat ochiq ID so'raladi, nik to'lovdan oldin bepul ko'rsatiladi, to'lov O'zbekiston to'lov tizimlari tomonida o'tadi va karta ma'lumotlari ilovaga kelmaydi, har buyurtma tarixda chek bilan qoladi. Katalogdagi barcha xizmatlar <a href=\"/oyinlar\">o'yinlar sahifasida</a>.",
        },
        { t: "cta", text: "ID ni kiriting, nikni ko'ring, keyin to'lang — tekshiruv bepul va to'lovdan oldin." },

        {
          t: "sources",
          items: [
            { label: "Google: ikki bosqichli tasdiqlashni yoqish", href: "https://support.google.com/accounts/answer/185839", note: "bog'langan Google akkauntini himoyalash" },
            { label: "Facebook: ikki faktorli autentifikatsiya", href: "https://www.facebook.com/help/148233965247823", note: "Facebook orqali bog'langan o'yin akkauntlari uchun" },
            { label: "Google: buzilgan akkauntni himoyalash", href: "https://support.google.com/accounts/answer/6294825", note: "parol yoki kod berib qo'yilgan holatda birinchi qadam" },
            { label: "Free Fire: rasmiy qo'llab-quvvatlash bo'limi", href: "https://ff.garena.com/en/support/", note: "hack va mod ilovalar uchun bloklash siyosati" },
          ],
        },
        {
          t: "links",
          title: "Shu mavzudagi sahifalar",
          items: [
            { label: "O'yinlar katalogi — 10 ta xizmat", href: "/oyinlar" },
            { label: "PUBG Mobile Player ID qayerda va uni berish xavfsizmi", href: "/blog/pubg-mobile-player-id-qayerda" },
            { label: "Mobile Legends User ID va Server ID qayerda", href: "/blog/mobile-legends-user-id-server-id-qayerda" },
            { label: "Free Fire bepul olmos: haqiqatmi", href: "/blog/free-fire-bepul-olmos-haqiqatmi" },
            { label: "O'yin valyutasini qayerdan olish arzon", href: "/blog/oyin-valyutasi-qayerdan-arzon" },
            { label: "To'lov xavfsizligi", href: "/tolov-xavfsizligi" },
          ],
        },
      ],
      faq: [
        {
          q: "Player ID mni bergan odam akkauntimga kira oladimi?",
          a: "Yo'q. Player ID ochiq identifikator, xuddi telefon raqami kabi: uni bilgan odam sizga narsa yubora oladi, lekin hisobingizga kira olmaydi. Kirish uchun parol yoki bog'langan hisob kerak, ular esa hech qachon so'ralmaydi.",
        },
        {
          q: "Nega ba'zi xizmatlar akkauntga kirishni so'raydi?",
          a: "Chunki ular rasmiy yo'l bilan ishlamaydi yoki firibgar. Provayder API'si ID bo'yicha yetkazadi va kirish talab qilmaydi. Akkauntni so'ragan odamga bermang — bu hisobni yo'qotishning eng keng tarqalgan yo'li.",
        },
        {
          q: "«Bepul olmos» yoki «bepul UC» saytlari ishlaydimi?",
          a: "Yo'q. Ular ikki narsani qiladi: akkaunt ma'lumotlaringizni oladi yoki cheksiz «tekshiruv» aylanishiga tushiradi. Nashriyotlar valyutani bepul tarqatmaydi, bunday saytdan foydalanish esa akkaunt blokiga sabab bo'lishi mumkin.",
        },
        {
          q: "Bozordan ancha arzon taklif nimani anglatadi?",
          a: "Ko'pincha o'g'irlangan karta bilan to'ldirish. Bir necha kundan keyin karta egasi to'lovni bekor qiladi, o'yin valyutani qaytarib oladi va akkauntga cheklov qo'yishi mumkin. Ya'ni pul ham, valyuta ham yo'qoladi.",
        },
        {
          q: "Ikki bosqichli tasdiqlash to'ldirishga xalaqit beradimi?",
          a: "Yo'q. U faqat akkauntga kirishda so'raladi, to'ldirish esa ID orqali tashqaridan bajariladi. Aksincha, u yoqilgan akkauntni o'g'irlash ancha qiyin.",
        },
        {
          q: "Steam loginini berish xavfsizmi?",
          a: "Login (account name) parol emas, u bilan kirib bo'lmaydi — hamyonni to'ldirish uchun aynan shu kerak. Parol va Steam Guard kodi esa yopiq ma'lumot, ularni hech kimga bermang.",
        },
        {
          q: "Chek yoki buyurtma tarixi nega kerak?",
          a: "Bahsli holatda ko'rsatadigan yagona dalil shu. Buyurtma tarixi bo'lmagan xizmatda yetkazilmagan to'lovni isbotlash deyarli imkonsiz, shuning uchun bunday xizmatdan uzoq turing.",
        },
      ],
    },

    ru: {
      title: "Как безопасно пополнить игровой аккаунт: что спрашивают, а что нет",
      metaTitle: "Безопасно ли пополнять игру: ID, пароль, мошенники",
      metaDescription:
        "Для пополнения игры нужен только открытый Player ID. Сервис, просящий пароль, SMS-код или " +
        "аккаунт, — мошенник. Признаки риска и чек-лист защиты аккаунта.",
      excerpt:
        "Прежде чем отдать деньги посреднику: какие данные открытые, какие ведут к потере аккаунта, " +
        "типичные схемы обмана и чек-лист защиты.",
      answer:
        "Для пополнения игрового аккаунта нужен только открытый Player ID: это номер, который виден в профиле " +
        "любому, войти с ним в аккаунт нельзя. Пароль, SMS-код или код из приложения, пароль от почты, передача " +
        "аккаунта «на время» и демонстрация экрана не требуются ни при одном способе пополнения. Сервис, который " +
        "просит что-то из этого, — мошенник. А проверка ника до оплаты останавливает перевод на чужой ID.",
      body: [
        {
          t: "p",
          text:
            "Главный страх человека, покупающего UC, алмазы или баланс Steam через посредника, — не цена, а аккаунт: «если дам ID, не войдут ли?», «почему просят пароль?», «безопасно ли дешёвое предложение?». Эта статья отвечает именно на эти вопросы и даёт правило, которое работает для любой игры. Где именно находится ID в вашей игре — в отдельных статьях: <a href=\"/blog/pubg-mobile-player-id-qayerda\">PUBG Mobile</a>, <a href=\"/blog/mobile-legends-user-id-server-id-qayerda\">Mobile Legends</a> и <a href=\"/blog/free-fire-olmos-sotib-olish\">Free Fire</a>.",
        },

        { t: "h2", id: "player-id", text: "Что такое Player ID и почему его безопасно сообщать" },
        {
          t: "p",
          text:
            "Player ID (в некоторых играх User ID или UID) — открытый номер аккаунта. Он виден в профиле, в списке друзей и в игровой статистике; его видят и участники клана, и случайные соперники. Этот номер похож на номер телефона: зная его, вам можно что-то отправить, но войти в ваш аккаунт нельзя. Для входа нужен пароль или привязанный аккаунт Google, Facebook, Apple — а они не открытые.",
        },
        {
          t: "p",
          text:
            "Официальный механизм пополнения устроен так же: магазин издателя или API провайдера зачисляет валюту именно по ID. Поэтому честный сервис не спрашивает ничего, кроме ID, — ему больше ничего и не нужно.",
        },
        {
          t: "facts",
          items: [
            { k: "Открытые данные, можно сообщать", v: "Player ID, User ID, UID, Server ID или платформа, ник, Steam account name" },
            { k: "Закрытые данные, не сообщаются никогда", v: "Пароль, SMS-код или код из приложения, пароль от почты, код Steam Guard, привязанный аккаунт Google или Facebook" },
            { k: "Правило", v: "Просят только открытое — нормально. Просят закрытое — остановитесь" },
          ],
        },

        { t: "h2", id: "soralmaydi", text: "Чего не должны спрашивать — и почему каждое опасно" },
        {
          t: "list",
          ordered: true,
          items: [
            "<strong>Пароль от аккаунта.</strong> С паролем входят в аккаунт и привязывают его к своей почте — потом не восстановить. Для пополнения пароль не нужен никогда.",
            "<strong>SMS-код или код из приложения.</strong> Этот код подтверждает именно вход. Тот, кто просит код, прямо сейчас входит в ваш аккаунт.",
            "<strong>Пароль от почты.</strong> Почта — ключ ко всем аккаунтам: получив её, сбрасывают пароли от игры, Telegram и банковского приложения.",
            "<strong>Аккаунт «на время».</strong> Предложение «войдём и пополним» — это привязка аккаунта ко второму устройству. Даже если алмазы придут, аккаунт теперь общий.",
            "<strong>Демонстрация экрана или удалённый доступ.</strong> Показ экрана телефона или установка программы удалённого управления — способ увидеть, как вы вводите пароль и коды.",
            "<strong>Установка приложения «для проверки».</strong> APK не из официального магазина часто собирает сохранённые пароли. Для пополнения никакое дополнительное приложение не нужно.",
          ],
        },
        {
          t: "note",
          tone: "warn",
          title: "Просьба назвать код — это захват аккаунта",
          text:
            "Ни один сервис пополнения, банк или издатель игры не спрашивает код входа. Если код просят «для проверки», «для оформления» или «для бонуса», сразу заканчивайте разговор.",
        },

        { t: "h2", id: "sxemalar", text: "Типичные схемы обмана" },
        {
          t: "table",
          caption: "Самые частые схемы — как выглядят и что вы теряете.",
          head: ["Схема", "Как выглядит", "Результат"],
          rows: [
            ["Поддельный бот или сайт", "Имя отличается от настоящего одной буквой, дизайн скопирован", "Деньги ушли, валюта не пришла"],
            ["«Сначала оплатите, потом доставим»", "Перевод на личную карту, без чека и номера заказа", "Потеря, которую нельзя доказать"],
            ["Дешёвое пополнение с краденой карты", "Цена заметно ниже рынка, предлог «акция»", "Через несколько дней платёж отменяют, валюту снимают, на аккаунт ставят ограничение"],
            ["Генератор «бесплатных алмазов» или UC", "Сайт или приложение, в конце «проверка» и просьба войти", "Данные аккаунта украдены"],
            ["«Войдём в аккаунт и пополним»", "Просят логин и пароль, якобы так дешевле", "Аккаунт привязывают ко второму устройству и забирают"],
            ["Сообщение от имени друга", "С угнанного аккаунта: «переведи денег» или «открой ссылку»", "Деньги или уже ваш аккаунт"],
          ],
        },
        {
          t: "p",
          text:
            "В зависимости от игры схемы выглядят чуть по-разному. Сайты «бесплатных алмазов» вокруг Free Fire разобраны в <a href=\"/blog/free-fire-bepul-olmos-haqiqatmi\">отдельной статье</a>, частные продавцы UC в Telegram — в <a href=\"/blog/pubg-uc-qayerdan-sotib-olish-taqqoslash\">сравнении для PUBG</a>.",
        },

        { t: "h2", id: "nik-tekshiruvi", text: "Почему важна проверка ника до оплаты" },
        {
          t: "p",
          text:
            "Кроме мошенничества есть ещё один путь потери, и он встречается чаще: неверный ID. Одна ошибка в цифре — и валюта уходит на чужой действующий аккаунт, а издатель такие переводы не отменяет. Поэтому честный сервис показывает ник игрока по ID ДО оплаты: ник ваш — подтверждаете, и только потом платите. Эта проверка должна быть бесплатной и повторяться сколько угодно раз.",
        },
        {
          t: "p",
          text:
            "Исключение — Steam: там кошелёк пополняется по логину (account name), и показать ник нельзя. Поэтому логин Steam копируйте из настроек, а не пишите по памяти; подробнее — на <a href=\"/oyinlar/steam\">странице Steam</a>.",
        },

        { t: "h2", id: "himoya", text: "Защита аккаунта: практические меры" },
        {
          t: "list",
          items: [
            "<strong>Привяжите гостевой аккаунт.</strong> Аккаунт в гостевом режиме живёт на устройстве: потеряли телефон или удалили игру — пропали и покупки. Привяжите к Google, Facebook, Apple или к собственному аккаунту игры.",
            "<strong>Включите двухэтапную проверку на привязанном аккаунте.</strong> В Google и Facebook это минута; без неё тот, кто узнал пароль, получает аккаунт целиком.",
            "<strong>Разные пароли везде.</strong> Если пароль от игры, почты и Telegram один, утечка одного открывает всё.",
            "<strong>Проверяйте активные сессии.</strong> В настройках Google и Facebook видно, какие устройства вошли, — незнакомые выкидывайте.",
            "<strong>Не ставьте моды и «читы».</strong> Они ведут к блокировке и часто собирают сохранённые пароли.",
            "<strong>Выходите из аккаунта на чужом телефоне.</strong> Играли в клубе или на устройстве друга — выйдите и из игры, и из привязанного аккаунта.",
            "<strong>Храните чек и номер заказа.</strong> В спорной ситуации это единственное доказательство.",
          ],
        },

        { t: "h2", id: "notogri-ketsa", text: "Если что-то пошло не так" },
        {
          t: "steps",
          items: [
            { title: "Возьмите номер заказа", text: "У честного сервиса каждый платёж есть в истории: дата, игра, ID, сумма, статус. Без этого номера обращаться не с чем. В GemPay он в разделе «История» приложения." },
            { title: "Дождитесь срока и перезапустите игру", text: "Доставка занимает несколько минут в зависимости от игры, а баланс иногда обновляется только после перезапуска. Если прошло вдвое больше заявленного времени, переходите к следующему шагу." },
            { title: "Напишите в поддержку с чеком", text: "Номер заказа, чек об оплате, ID и время. В GemPay это @StarsPaymeeSupport. Никто не попросит пароль или код — если просят, это не поддержка." },
            { title: "Возврат за невыполненный заказ", text: "Если валюта не доставлена, деньги возвращаются полностью; порядок и сроки — на странице оплаты и возврата. Доставленная валюта не возвращается — это ограничение со стороны издателя." },
            { title: "Если вы уже сообщили пароль или код", text: "Немедленно смените пароль привязанного Google, Facebook или Apple, завершите активные сессии и отправьте в центр помощи издателя запрос на восстановление аккаунта. Каждая минута промедления повышает шанс потерять аккаунт." },
          ],
        },
        {
          t: "p",
          text:
            "Условия возврата — на странице <a href=\"/tolov-va-qaytarish\">оплаты и возврата</a>, где остаются данные карты — на странице <a href=\"/tolov-xavfsizligi\">безопасности платежей</a>.",
        },

        { t: "h2", id: "gempay", text: "Как это устроено в GemPay" },
        {
          t: "p",
          text:
            "GemPay — это то самое правило в действии: спрашивается только открытый ID, ник показывается бесплатно до оплаты, платёж проходит на стороне платёжных систем Узбекистана, данные карты в приложение не попадают, каждый заказ остаётся в истории с чеком. Все сервисы каталога — на <a href=\"/oyinlar\">странице игр</a>.",
        },
        { t: "cta", text: "Введите ID, посмотрите ник, потом платите — проверка бесплатна и идёт до оплаты." },

        {
          t: "sources",
          items: [
            { label: "Google: включить двухэтапную аутентификацию", href: "https://support.google.com/accounts/answer/185839", note: "защита привязанного аккаунта Google" },
            { label: "Facebook: двухфакторная аутентификация", href: "https://www.facebook.com/help/148233965247823", note: "для игровых аккаунтов, привязанных через Facebook" },
            { label: "Google: защита взломанного аккаунта", href: "https://support.google.com/accounts/answer/6294825", note: "первый шаг, если пароль или код были сообщены" },
            { label: "Free Fire: официальный раздел поддержки", href: "https://ff.garena.com/en/support/", note: "политика блокировок за читы и моды" },
          ],
        },
        {
          t: "links",
          title: "По теме",
          items: [
            { label: "Каталог игр — 10 сервисов", href: "/oyinlar" },
            { label: "Где Player ID в PUBG Mobile и безопасно ли его сообщать", href: "/blog/pubg-mobile-player-id-qayerda" },
            { label: "Где User ID и Server ID в Mobile Legends", href: "/blog/mobile-legends-user-id-server-id-qayerda" },
            { label: "Бесплатные алмазы Free Fire: правда ли", href: "/blog/free-fire-bepul-olmos-haqiqatmi" },
            { label: "Где дешевле покупать игровую валюту", href: "/blog/oyin-valyutasi-qayerdan-arzon" },
            { label: "Безопасность платежей", href: "/tolov-xavfsizligi" },
          ],
        },
      ],
      faq: [
        { q: "Может ли человек, узнавший мой Player ID, войти в аккаунт?", a: "Нет. Player ID — открытый идентификатор, как номер телефона: зная его, вам можно что-то отправить, но войти нельзя. Для входа нужен пароль или привязанный аккаунт, а их никогда не спрашивают." },
        { q: "Почему некоторые сервисы просят войти в аккаунт?", a: "Потому что работают не официальным путём или мошенничают. API провайдера доставляет по ID и входа не требует. Не отдавайте аккаунт тому, кто его просит, — это самый частый способ его потерять." },
        { q: "Работают ли сайты «бесплатных алмазов» или «бесплатных UC»?", a: "Нет. Они делают одно из двух: забирают данные аккаунта или гоняют по бесконечной «проверке». Издатели не раздают валюту бесплатно, а использование таких сайтов может привести к блокировке." },
        { q: "Что значит предложение намного дешевле рынка?", a: "Чаще всего — пополнение с краденой карты. Через несколько дней владелец карты отменяет платёж, игра забирает валюту и может ограничить аккаунт. То есть пропадают и деньги, и валюта." },
        { q: "Мешает ли двухэтапная проверка пополнению?", a: "Нет. Она спрашивается только при входе, а пополнение выполняется снаружи по ID. Наоборот, аккаунт с включённой проверкой угнать намного сложнее." },
        { q: "Безопасно ли сообщать логин Steam?", a: "Логин (account name) — не пароль, войти с ним нельзя, и именно он нужен для пополнения кошелька. А вот пароль и код Steam Guard — закрытые данные, их не сообщайте никому." },
        { q: "Зачем нужны чек и история заказов?", a: "Это единственное доказательство в спорной ситуации. В сервисе без истории заказов недоставленный платёж почти невозможно доказать — держитесь от таких подальше." },
      ],
    },
  },
};

export default article;
