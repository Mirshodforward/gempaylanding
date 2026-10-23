// Free Fire «bepul olmos» — ishonch maqolasi. Reja:
// .plan/articles/free-fire-bepul-olmos-haqiqatmi.json (publishRank 17).
// Yozildi: 2026-10-23, qo'lda, uz + ru.
//
// NEGA SHU MAVZU: tadqiqot bo'yicha «free fire bepul olmos» — klasterdagi eng
// katta trafik, lekin SERP spam-generatorlar bilan to'la. Halol javob shu
// trafikni ushlab, qonuniy to'ldirishga olib chiqadi. Uchta mavjud maqola bu
// slug'ga allaqachon havola beradi.
//
// Rejaning «kannibalizatsiya» izohi bo'yicha UID haqidagi qisqa bo'lim ham
// shu yerga qo'shildi (UID qayerda, berish xavfsizmi) — alohida maqola emas.
//
// FAKTLAR (brief, 2026-08 da tekshirilgan): redeem-kodlar faqat
// reward.ff.garena.com da; guest akkaunt tiklanmaydi; UID profil avatarida
// nik ostida, 8-12 raqam; akkaunt hududi birinchi kirishda qotadi; sezonli
// pass hozir Booyah Pass deb ataladi. NARX YO'Q.

import type { Article } from "../types";

const article: Article = {
  slug: "free-fire-bepul-olmos-haqiqatmi",
  game: "free-fire",
  type: "trust",
  datePublished: "2026-10-23",
  dateModified: "2026-10-23",
  pillar: false,
  keywords: [
    "free fire bepul olmos",
    "free fire olmos generator",
    "free fire hack olmos",
    "free fire redeem kod",
    "free fire akkaunt o'g'irlash",
    "free fire uid berish xavfsizmi",
    "free fire olmos sotib olish xavfsizmi",
    "бесплатные алмазы free fire",
  ],
  locales: {
    uz: {
      title: "Free Fire bepul olmos: qaysi usullar haqiqiy, qaysilari firibgarlik",
      metaTitle: "Free Fire bepul olmos haqiqatmi? Generator va redeem kod",
      metaDescription:
        "Free Fire bepul olmos generatorlari ishlamaydi: ular UID va parolni o'g'irlash uchun. Haqiqiy " +
        "bepul usullar, firibgarlikning 7 belgisi va himoya ro'yxati.",
      excerpt:
        "Generator, hack va «tekshiruv» sahifalari nega texnik jihatdan ishlay olmaydi, qaysi ikki usul " +
        "haqiqatan bepul, UID ni berish xavfsizmi va akkaunt o'g'irlansa nima qilish kerak.",
      answer:
        "Free Fire'da bepul olmos beruvchi generator, hack yoki mod ilovalar ishlamaydi: olmos balansi Garena " +
        "serverida saqlanadi va tashqi sayt unga yoza olmaydi. Bunday sahifalar UID va login yig'adi, reklama " +
        "ko'rsatadi yoki zararli APK tarqatadi. Haqiqiy bepul yo'l ikkita: Garena'ning rasmiy redeem-kod sahifasi " +
        "va o'yin ichidagi rasmiy eventlar. Akkauntni Google, Facebook yoki VK ga bog'lang, parolni hech kimga bermang.",
      body: [
        {
          t: "p",
          text:
            "«Free Fire bepul olmos» deb qidirsangiz, birinchi sahifa generator saytlari, «olmos hack» videolari va «tekshiruvdan o'ting» sahifalari bilan to'la. Ularning hech biri olmos bermaydi — va bu ehtimol emas, texnik fakt. Quyida nega shunday ekani, qaysi bepul usullar haqiqiy, UID ni berish xavfsizmi va akkaunt o'g'irlansa nima qilish kerakligi yozilgan. Olmosni so'mda, xavfsiz olish esa <a href=\"/blog/free-fire-olmos-sotib-olish\">asosiy qo'llanmada</a>.",
        },

        { t: "h2", id: "generator", text: "Qisqa javob: generatorlar nega ishlamaydi" },
        {
          t: "p",
          text:
            "Olmos — o'yin ichidagi raqam emas, Garena serveridagi yozuv. U faqat ikki holatda o'zgaradi: rasmiy to'lov tasdiqlanganda yoki rasmiy event mukofot berganda. Saytdagi forma, «UID kiriting, 9999 olmos tanlang» tugmasi yoki telefonga o'rnatilgan ilova bu serverga yoza olmaydi — ularda bunday huquq yo'q va bo'lishi ham mumkin emas. Shuning uchun generator sahifasi olmos berish uchun emas, boshqa maqsadda qilingan.",
        },
        {
          t: "facts",
          items: [
            { k: "Olmos qayerda saqlanadi", v: "Garena serverida, akkauntga bog'langan holda" },
            { k: "Kim o'zgartira oladi", v: "Faqat rasmiy to'lov va rasmiy event — boshqa hech narsa" },
            { k: "Generator sahifasi nima qiladi", v: "Reklama ko'rsatadi, UID va login yig'adi, soxta kirish oynasi ochadi yoki zararli APK beradi" },
            { k: "Natija", v: "Olmos kelmaydi; eng yaxshi holda vaqt ketadi, eng yomonida akkaunt va parollar" },
          ],
        },

        { t: "h2", id: "belgilar", text: "Firibgarlikning 7 ta belgisi" },
        {
          t: "list",
          ordered: true,
          items: [
            "<strong>Login yoki parol so'raydi.</strong> Olmos qo'shish uchun akkauntga kirish kerak emas — rasmiy to'ldirish UID bo'yicha ishlaydi. Login so'ralgan joyda maqsad akkaunt.",
            "<strong>SMS yoki pochta kodini so'raydi.</strong> Kod akkauntga kirishni tasdiqlaydi. Uni yozgan paytingizda kimdir sizning akkauntingizga kirmoqda.",
            "<strong>«Tekshiruv» uchun boshqa ilova o'rnatishni talab qiladi.</strong> Human verification, «ilovani ochib 30 soniya turing» — reklama daromadi va zararli dastur tarqatish usuli.",
            "<strong>«Avval kichik to'lov qiling».</strong> Bepul deb boshlanib, «faollashtirish» uchun pul so'raydi. Pul ketadi, olmos kelmaydi.",
            "<strong>Rasmiy bo'lmagan APK beradi.</strong> «Mod», «unlimited diamonds» fayli — telefondagi saqlangan parollarni yig'adigan dastur, ustiga akkaunt bloki.",
            "<strong>Shoshiltiruvchi taymer va soxta skrinshotlar.</strong> «Faqat bugun», «oxirgi 50 ta», bir xil uslubdagi «mijoz» xabarlari — bir odamning ishi.",
            "<strong>Do'stlarga tarqatishni talab qiladi.</strong> «5 ta guruhga yuboring» — sizni tarqatuvchiga aylantirish, mukofot esa hech qachon kelmaydi.",
          ],
        },
        {
          t: "note",
          tone: "warn",
          title: "«Human verification» tuzog'i",
          text:
            "Generator saytlarining deyarli hammasi oxirida «odam ekaningizni tasdiqlang» deb ilova o'rnatish yoki so'rovnoma to'ldirishni so'raydi. Bu bosqich hech qachon tugamaydi: har «tekshiruv» yangi reklama, olmos esa yo'q. Shu oynani ko'rdingizmi — yoping.",
        },

        { t: "h2", id: "haqiqiy", text: "Haqiqiy bepul usullar va ular qancha beradi" },
        {
          t: "p",
          text:
            "Bepul olmos butunlay afsona emas, lekin manba faqat Garena'ning o'zi va miqdor kichik.",
        },
        {
          t: "list",
          items: [
            "<strong>Rasmiy redeem-kodlar.</strong> Garena kodlarni o'z ijtimoiy tarmoqlari, hamkor streamlari va eventlar orqali tarqatadi; faollashtirish faqat rasmiy reward.ff.garena.com sahifasida, bog'langan akkaunt bilan kirib. Kodning muddati qisqa, hudud bilan cheklangan va ishlatish soni chegaralangan — ko'pchilik «ishlamayapti» deganda sabab shu.",
            "<strong>O'yin ichidagi eventlar.</strong> Kunlik kirish, missiyalar, mavsumiy tadbirlar, guild mukofotlari va ba'zan Booyah Pass'ning bepul yo'nalishi. Bular olmos emas, ko'proq buyum va vaucher beradi; olmos tushsa ham, Booyah Pass uchun yetadigan miqdor yig'ilmaydi.",
            "<strong>Rasmiy e'lonlar.</strong> Garena'ning rasmiy kanallaridagi tanlovlar. «Rasmiy» ekanini saytdagi havoladan tekshiring — nomi o'xshash soxta kanallar ko'p.",
          ],
        },
        {
          t: "p",
          text:
            "Boshqa hamma narsa — «UID bo'yicha olmos yuboramiz», «admin paneli», «server xatosi» — mavjud emas. Olmos olishning qolgan yagona yo'li to'ldirish, va u so'mda ham, UID bilan ham bo'ladi: <a href=\"/oyinlar/free-fire\">Free Fire sahifasida</a> shartlar, <a href=\"/blog/free-fire-olmos-arzon-qayerdan-olish\">taqqoslovda</a> esa qaysi usul qancha turishi.",
        },

        { t: "h2", id: "uid", text: "UID berish xavfsizmi, login berish nega xavfli" },
        {
          t: "p",
          text:
            "UID — profilingizning ochiq raqami: o'yinda avatarni bossangiz, nik ostida turadi, odatda 8-12 raqam, nik o'zgarsa ham o'zgarmaydi. Uni do'stlar ro'yxatidagi har kim ko'radi. UID bilan akkauntga kirib bo'lmaydi — u faqat olmos qayerga tushishini ko'rsatadi, xuddi telefon raqami kabi. Shuning uchun halol to'ldirish xizmati aynan va faqat UID so'raydi.",
        },
        {
          t: "p",
          text:
            "Login, parol va tasdiqlash kodi esa akkauntga to'liq kirish demak. Qoida oddiy: xizmat faqat UID so'rasa — normal; parol yoki kod so'rasa — darhol to'xtating, u olmos bermoqchi emas, akkaunt olmoqchi. Umumiy qoida barcha o'yinlar uchun <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">xavfsiz to'ldirish qo'llanmasida</a>.",
        },

        { t: "h2", id: "himoya", text: "Akkauntni himoyalash: tekshiruv ro'yxati" },
        {
          t: "list",
          items: [
            "<strong>Guest akkauntni bog'lang.</strong> Mehmon akkaunti qurilmada yashaydi va yo'qolsa serverdan tiklanmaydi — sotib olingan olmos ham, Booyah Pass ham u bilan ketadi. Sozlamalarda Google, Facebook yoki VK ga bog'lang; to'ldirishdan OLDIN.",
            "<strong>Bog'langan akkauntda ikki bosqichli himoyani yoqing.</strong> Free Fire parolini emas, Google yoki Facebook parolini bilgan odam akkauntni oladi — himoya aynan o'sha yerda kerak.",
            "<strong>Tiklash uchun pochta va telefon qo'shing.</strong> Google akkauntida zaxira pochta va raqam bo'lsa, o'g'irlangan kirishni qaytarib olish osonroq.",
            "<strong>Noma'lum APK va «mod» ilovalarni o'chiring.</strong> Ular Garena qoidalarini buzadi va akkaunt blokiga olib boradi.",
            "<strong>Umumiy telefonda akkauntdan chiqing.</strong> Klubda yoki do'stning qurilmasida kirgan bo'lsangiz — o'yindan ham, Google'dan ham.",
            "<strong>Shubhali havolalarni ochmang.</strong> «Bepul olmos», «akkauntingiz bloklanadi, tasdiqlang» — ikkalasi ham soxta kirish oynasiga olib boradi.",
          ],
        },

        { t: "h2", id: "ogirlansa", text: "Akkaunt o'g'irlansa nima qilish kerak" },
        {
          t: "steps",
          items: [
            {
              title: "Bog'langan akkaunt parolini darhol o'zgartiring",
              text: "Google, Facebook yoki VK — qaysi biriga bog'langan bo'lsa. Parolni o'zgartirib, faol sessiyalarning hammasidan chiqaring. Bu o'g'rining kirishini yopadi, hatto u hali o'yinda bo'lsa ham.",
            },
            {
              title: "Garena'ning rasmiy qo'llab-quvvatlashiga murojaat qiling",
              text: "Customer Service orqali akkaunt tiklash so'rovini yuboring. Murojaat yo'li (o'yin ichida yoki ff.garena.com saytining Support bo'limida) vaqt o'tishi bilan o'zgaradi — shuning uchun faqat rasmiy saytdagi yo'ldan foydalaning. UID, eski nik, hudud, oxirgi kirish sanasi va xaridlar so'raladi — qancha aniq bo'lsa, shuncha tez.",
            },
            {
              title: "Dalillarni yig'ing",
              text: "To'ldirish cheklari, buyurtma raqamlari, profil skrinshotlari va UID ko'ringan eski suratlar — akkaunt sizniki ekanini aynan shular isbotlaydi. GemPay buyurtmalari ilovadagi tarixda saqlanadi.",
            },
            {
              title: "Do'stlaringizni ogohlantiring",
              text: "O'g'ri sizning nomingizdan «pul o'tkaz» yoki «shu havolani och» deb yozishi mumkin. Guild chatida bir xabar yetadi.",
            },
            {
              title: "Guest akkaunt bo'lsa — halol javob",
              text: "Bog'lanmagan mehmon akkauntini Garena ham tiklay olmaydi: uning serverda egasini tasdiqlaydigan hech qanday ma'lumoti yo'q. Yangi akkauntni birinchi kundan bog'lab qo'ying.",
            },
          ],
        },

        { t: "h2", id: "xavfsiz-toldirish", text: "Xavfsiz to'ldirish qanday ko'rinadi" },
        {
          t: "p",
          text:
            "Halol xizmatning belgilari bir xil: faqat UID so'raydi, nikni to'lovdan oldin bepul ko'rsatadi, yakuniy summani oldindan aytadi, chek va buyurtma raqami beradi, so'mda mahalliy to'lov qabul qiladi va tirik qo'llab-quvvatlashi bor. GemPay'da aynan shu tartib: UID kiritasiz, bot Garena serveridan nikni olib ko'rsatadi, tasdiqlaysiz, keyin UzCard, HUMO, Click yoki Uzum Bank bilan to'laysiz. Olmos odatda ikki daqiqada tushadi; kelmasa nima qilish — <a href=\"/blog/free-fire-olmos-kelmadi-id-topilmadi\">alohida maqolada</a>.",
        },
        {
          t: "note",
          tone: "info",
          title: "Hudud haqida",
          text:
            "Free Fire akkauntining hududi birinchi kirishda belgilanadi va keyin o'zgarmaydi. GemPay global versiya bilan ishlaydi; Vetnam, Tailand va Indoneziya hisoblari qo'llab-quvvatlanmaydi — bot nik tekshiruvida buni to'lovdan oldin ko'rsatadi.",
        },
        { t: "cta", text: "UID ni kiriting, nikni bepul ko'ring, keyin so'mda to'lang — generatorsiz, parolsiz." },

        {
          t: "sources",
          items: [
            { label: "Garena Free Fire — rasmiy redeem-kod sahifasi", href: "https://reward.ff.garena.com/en", note: "kodlar faqat shu yerda faollashtiriladi" },
            { label: "Free Fire: rasmiy qo'llab-quvvatlash bo'limi", href: "https://ff.garena.com/en/support/", note: "hack va mod ilovalar uchun bloklash siyosati" },
            { label: "Free Fire rasmiy sayti", href: "https://ff.garena.com/en", note: "rasmiy eventlar va e'lonlar" },
            { label: "Google: ikki bosqichli tasdiqlash", href: "https://support.google.com/accounts/answer/185839", note: "bog'langan Google akkauntini himoyalash" },
          ],
        },
        {
          t: "links",
          title: "Free Fire bo'yicha boshqa qo'llanmalar",
          items: [
            { label: "Free Fire olmos sotib olish — so'mda, 2 daqiqada", href: "/blog/free-fire-olmos-sotib-olish" },
            { label: "Olmos kelmadi yoki «ID topilmadi»", href: "/blog/free-fire-olmos-kelmadi-id-topilmadi" },
            { label: "Free Fire olmosi qayerdan arzon va xavfsiz", href: "/blog/free-fire-olmos-arzon-qayerdan-olish" },
            { label: "O'yin hisobini xavfsiz to'ldirish — umumiy qoida", href: "/blog/oyin-pul-xavfsiz-toldirish" },
            { label: "Free Fire olmos to'ldirish sahifasi", href: "/oyinlar/free-fire" },
          ],
        },
      ],
      faq: [
        {
          q: "Free Fire olmos generatorlari haqiqatan ishlaydimi?",
          a: "Yo'q. Olmos balansi Garena serverida saqlanadi va tashqi saytlar unga o'zgartirish kirita olmaydi. Bunday sahifalar reklama daromadi, ma'lumot o'g'irlash yoki zararli ilova tarqatish uchun qilingan.",
        },
        {
          q: "Bepul olmos olishning qonuniy yo'li bormi?",
          a: "Ha, lekin cheklangan: Garena'ning rasmiy redeem-kod sahifasidagi kodlar, o'yin ichidagi eventlar, kunlik missiyalar va guild mukofotlari. Bular bilan katta miqdor to'planmaydi, lekin ular xavfsiz.",
        },
        {
          q: "UID mni berish xavfsizmi?",
          a: "Ha. UID ochiq identifikator, u bilan akkauntga kirib bo'lmaydi — u faqat olmos qayerga tushishini ko'rsatadi. Xavfli narsa login, parol va tasdiqlash kodini berishdir.",
        },
        {
          q: "Kimdir parolimni so'rayapti, «ko'proq olmos beraman» deydi. Nima qilay?",
          a: "Suhbatni to'xtating va shikoyat qiling. Hech bir qonuniy xizmat parol yoki SMS kodini so'ramaydi. Parolni bergan bo'lsangiz, uni darhol o'zgartiring va bog'langan pochta himoyasini tekshiring.",
        },
        {
          q: "Guest akkauntim yo'qolsa tiklanadimi?",
          a: "Yo'q. Guest akkaunt ma'lumotlari qurilmada saqlanadi va serverdan tiklanmaydi. Shuning uchun to'ldirishdan oldin akkauntni Google, Facebook yoki VK ga bog'lash shart.",
        },
        {
          q: "Mod yoki hack ilovalar akkauntga zarar beradimi?",
          a: "Ha. Ular Garena qoidalarini buzadi va akkaunt bloklanishiga olib keladi, ustiga ko'pincha telefonga zararli dastur o'rnatadi hamda saqlangan parollarni o'g'irlaydi.",
        },
        {
          q: "Redeem kod ishlamayapti, nega?",
          a: "Kodning muddati o'tgan, u boshqa hudud uchun yoki allaqachon ishlatilgan bo'lishi mumkin. Kodlar faqat Garena'ning rasmiy redeem sahifasida, bog'langan akkaunt bilan faollashtiriladi — guest akkaunt bilan emas.",
        },
        {
          q: "Xavfsiz sotuvchini qanday farqlayman?",
          a: "Faqat UID so'raydi, to'lovdan oldin nikni ko'rsatadi, chek va buyurtma raqami beradi, so'mda mahalliy to'lovni qabul qiladi va o'zbek tilidagi qo'llab-quvvatlashga ega. Parol so'ralsa — bu firibgarlik.",
        },
      ],
    },

    ru: {
      title: "Бесплатные алмазы Free Fire: какие способы настоящие, а какие — обман",
      metaTitle: "Бесплатные алмазы Free Fire: правда? Генераторы и коды",
      metaDescription:
        "Генераторы бесплатных алмазов Free Fire не работают: они собирают UID и пароли. Настоящие бесплатные " +
        "способы, 7 признаков обмана и чек-лист защиты аккаунта.",
      excerpt:
        "Почему генераторы, читы и страницы «проверки» технически не могут работать, какие два способа " +
        "действительно бесплатны, безопасно ли сообщать UID и что делать, если аккаунт угнали.",
      answer:
        "Генераторы, читы и мод-приложения, обещающие бесплатные алмазы Free Fire, не работают: баланс алмазов " +
        "хранится на сервере Garena, и внешний сайт не может в него записать. Такие страницы собирают UID и логины, " +
        "показывают рекламу или раздают вредоносные APK. Настоящих бесплатных пути два: официальная страница " +
        "redeem-кодов Garena и официальные ивенты в игре. Привяжите аккаунт к Google, Facebook или VK и никому не " +
        "сообщайте пароль.",
      body: [
        {
          t: "p",
          text:
            "Наберите «бесплатные алмазы Free Fire» — и первая страница выдачи заполнена сайтами-генераторами, видео «взлом алмазов» и страницами «пройдите проверку». Ни один из них алмазов не даёт — и это не вероятность, а технический факт. Ниже — почему так, какие бесплатные способы настоящие, безопасно ли сообщать UID и что делать, если аккаунт угнали. Как купить алмазы за сумы и безопасно — в <a href=\"/blog/free-fire-olmos-sotib-olish\">основном руководстве</a>.",
        },

        { t: "h2", id: "generator", text: "Коротко: почему генераторы не работают" },
        {
          t: "p",
          text:
            "Алмазы — не число внутри игры, а запись на сервере Garena. Она меняется только в двух случаях: когда подтверждён официальный платёж или когда официальный ивент выдал награду. Форма на сайте, кнопка «введите UID и выберите 9999 алмазов» или приложение на телефоне записать в этот сервер не могут — у них нет такого права и быть не может. Поэтому страница-генератор сделана не для выдачи алмазов, а для другого.",
        },
        {
          t: "facts",
          items: [
            { k: "Где хранятся алмазы", v: "На сервере Garena, привязаны к аккаунту" },
            { k: "Кто может изменить баланс", v: "Только официальный платёж и официальный ивент — больше ничего" },
            { k: "Что делает страница-генератор", v: "Показывает рекламу, собирает UID и логины, открывает поддельное окно входа или раздаёт вредоносный APK" },
            { k: "Результат", v: "Алмазы не приходят; в лучшем случае потеряно время, в худшем — аккаунт и пароли" },
          ],
        },

        { t: "h2", id: "belgilar", text: "7 признаков обмана" },
        {
          t: "list",
          ordered: true,
          items: [
            "<strong>Просят логин или пароль.</strong> Чтобы добавить алмазы, вход в аккаунт не нужен — официальное пополнение работает по UID. Где просят логин, цель — аккаунт.",
            "<strong>Просят код из SMS или почты.</strong> Код подтверждает вход. В момент, когда вы его вводите, кто-то входит в ваш аккаунт.",
            "<strong>Требуют установить другое приложение «для проверки».</strong> Human verification, «откройте приложение и подождите 30 секунд» — способ заработать на рекламе и раздать вредоносное ПО.",
            "<strong>«Сначала сделайте небольшой платёж».</strong> Начинается как бесплатно, потом просят деньги «за активацию». Деньги уходят, алмазы не приходят.",
            "<strong>Дают неофициальный APK.</strong> Файл «мод», «unlimited diamonds» — программа, собирающая сохранённые пароли, плюс блокировка аккаунта.",
            "<strong>Таймер и поддельные скриншоты.</strong> «Только сегодня», «осталось 50», сообщения «клиентов» в одном стиле — работа одного человека.",
            "<strong>Требуют разослать друзьям.</strong> «Отправьте в 5 групп» — вас делают распространителем, а награда не приходит никогда.",
          ],
        },
        {
          t: "note",
          tone: "warn",
          title: "Ловушка «human verification»",
          text:
            "Почти все генераторы в конце просят «подтвердить, что вы человек» — установить приложение или заполнить опрос. Этот этап не заканчивается никогда: каждая «проверка» — новая реклама, а алмазов нет. Увидели это окно — закрывайте.",
        },

        { t: "h2", id: "haqiqiy", text: "Настоящие бесплатные способы и сколько они дают" },
        {
          t: "p",
          text: "Бесплатные алмазы — не полный миф, но источник только сама Garena, а количество небольшое.",
        },
        {
          t: "list",
          items: [
            "<strong>Официальные redeem-коды.</strong> Garena раздаёт их через свои соцсети, стримы партнёров и ивенты; активируются только на официальной странице reward.ff.garena.com при входе через привязанный аккаунт. Срок у кода короткий, он ограничен регионом и числом активаций — именно поэтому большинство кодов «не работает».",
            "<strong>Ивенты внутри игры.</strong> Ежедневный вход, миссии, сезонные события, награды гильдии и иногда бесплатная ветка Booyah Pass. Они дают скорее предметы и ваучеры, чем алмазы; даже если алмазы выпадают, на Booyah Pass их не накопить.",
            "<strong>Официальные розыгрыши.</strong> Конкурсы в официальных каналах Garena. Проверяйте «официальность» по ссылке с сайта — поддельных каналов с похожими именами много.",
          ],
        },
        {
          t: "p",
          text:
            "Всё остальное — «отправим алмазы по UID», «админ-панель», «ошибка сервера» — не существует. Единственный оставшийся путь — пополнение, и оно бывает за сумы и по UID: условия на <a href=\"/oyinlar/free-fire\">странице Free Fire</a>, сколько стоит каждый способ — в <a href=\"/blog/free-fire-olmos-arzon-qayerdan-olish\">сравнении</a>.",
        },

        { t: "h2", id: "uid", text: "Безопасно ли сообщать UID и почему опасно сообщать логин" },
        {
          t: "p",
          text:
            "UID — открытый номер профиля: нажмите на аватар в игре, он под ником, обычно 8-12 цифр, и не меняется при смене ника. Его видит любой в списке друзей. Войти в аккаунт по UID нельзя — он лишь показывает, куда зачислить алмазы, как номер телефона. Поэтому честный сервис пополнения спрашивает именно и только UID.",
        },
        {
          t: "p",
          text:
            "Логин, пароль и код подтверждения — это полный доступ к аккаунту. Правило простое: сервис просит только UID — нормально; просит пароль или код — остановитесь, он хочет не дать алмазы, а забрать аккаунт. Общее правило для всех игр — в <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">руководстве по безопасному пополнению</a>.",
        },

        { t: "h2", id: "himoya", text: "Защита аккаунта: чек-лист" },
        {
          t: "list",
          items: [
            "<strong>Привяжите гостевой аккаунт.</strong> Гостевой аккаунт живёт на устройстве и при потере с сервера не восстанавливается — купленные алмазы и Booyah Pass уходят вместе с ним. В настройках привяжите к Google, Facebook или VK — ДО пополнения.",
            "<strong>Включите двухэтапную проверку на привязанном аккаунте.</strong> Аккаунт забирает тот, кто знает пароль не от Free Fire, а от Google или Facebook, — защита нужна именно там.",
            "<strong>Добавьте почту и телефон для восстановления.</strong> С резервной почтой и номером в аккаунте Google вернуть угнанный доступ проще.",
            "<strong>Удалите неизвестные APK и «моды».</strong> Они нарушают правила Garena и ведут к блокировке.",
            "<strong>Выходите из аккаунта на чужом телефоне.</strong> Играли в клубе или на устройстве друга — выйдите и из игры, и из Google.",
            "<strong>Не открывайте подозрительные ссылки.</strong> «Бесплатные алмазы» и «ваш аккаунт будет заблокирован, подтвердите» ведут к одному и тому же поддельному окну входа.",
          ],
        },

        { t: "h2", id: "ogirlansa", text: "Что делать, если аккаунт угнали" },
        {
          t: "steps",
          items: [
            { title: "Немедленно смените пароль привязанного аккаунта", text: "Google, Facebook или VK — к чему привязан. Смените пароль и завершите все активные сессии. Это закроет вход угонщику, даже если он ещё в игре." },
            { title: "Обратитесь в официальную поддержку Garena", text: "Отправьте запрос на восстановление аккаунта в Customer Service. Способ обращения (в игре или в разделе Support на ff.garena.com) со временем меняется — пользуйтесь только путём с официального сайта. Спросят UID, старый ник, регион, дату последнего входа и покупки — чем точнее, тем быстрее." },
            { title: "Соберите доказательства", text: "Чеки пополнений, номера заказов, скриншоты профиля и старые снимки с UID — именно они доказывают, что аккаунт ваш. Заказы GemPay хранятся в истории приложения." },
            { title: "Предупредите друзей", text: "Угонщик может писать от вашего имени «переведи денег» или «открой ссылку». Одного сообщения в чат гильдии достаточно." },
            { title: "Если аккаунт гостевой — честный ответ", text: "Непривязанный гостевой аккаунт не восстановит и Garena: на сервере нет данных, подтверждающих владельца. Новый аккаунт привяжите с первого дня." },
          ],
        },

        { t: "h2", id: "xavfsiz-toldirish", text: "Как выглядит безопасное пополнение" },
        {
          t: "p",
          text:
            "Признаки честного сервиса одинаковы: спрашивает только UID, бесплатно показывает ник до оплаты, называет итоговую сумму заранее, даёт чек и номер заказа, принимает местную оплату в сумах и имеет живую поддержку. В GemPay именно так: вводите UID, бот получает ник с сервера Garena и показывает его, вы подтверждаете, затем платите через UzCard, HUMO, Click или Uzum Bank. Алмазы обычно приходят за две минуты; если не пришли — в <a href=\"/blog/free-fire-olmos-kelmadi-id-topilmadi\">отдельной статье</a>.",
        },
        {
          t: "note",
          tone: "info",
          title: "О регионе",
          text:
            "Регион аккаунта Free Fire задаётся при первом входе и потом не меняется. GemPay работает с глобальной версией; аккаунты Вьетнама, Таиланда и Индонезии не поддерживаются — бот покажет это при проверке ника до оплаты.",
        },
        { t: "cta", text: "Введите UID, посмотрите ник бесплатно, затем оплатите в сумах — без генераторов и без пароля." },

        {
          t: "sources",
          items: [
            { label: "Garena Free Fire — официальная страница redeem-кодов", href: "https://reward.ff.garena.com/en", note: "коды активируются только здесь" },
            { label: "Free Fire: официальный раздел поддержки", href: "https://ff.garena.com/en/support/", note: "политика блокировок за читы и моды" },
            { label: "Официальный сайт Free Fire", href: "https://ff.garena.com/en", note: "официальные ивенты и анонсы" },
            { label: "Google: двухэтапная аутентификация", href: "https://support.google.com/accounts/answer/185839", note: "защита привязанного аккаунта Google" },
          ],
        },
        {
          t: "links",
          title: "Другие руководства по Free Fire",
          items: [
            { label: "Купить алмазы Free Fire — за сумы, за 2 минуты", href: "/blog/free-fire-olmos-sotib-olish" },
            { label: "Алмазы не пришли или «ID не найден»", href: "/blog/free-fire-olmos-kelmadi-id-topilmadi" },
            { label: "Где дешевле и безопаснее алмазы Free Fire", href: "/blog/free-fire-olmos-arzon-qayerdan-olish" },
            { label: "Безопасное пополнение игрового аккаунта — общее правило", href: "/blog/oyin-pul-xavfsiz-toldirish" },
            { label: "Страница пополнения Free Fire", href: "/oyinlar/free-fire" },
          ],
        },
      ],
      faq: [
        { q: "Генераторы алмазов Free Fire правда работают?", a: "Нет. Баланс алмазов хранится на сервере Garena, и внешние сайты не могут его изменить. Такие страницы сделаны ради дохода от рекламы, кражи данных или раздачи вредоносных приложений." },
        { q: "Есть ли законный способ получить алмазы бесплатно?", a: "Да, но ограниченный: коды на официальной странице redeem-кодов Garena, ивенты внутри игры, ежедневные миссии и награды гильдии. Большое количество так не накопить, зато это безопасно." },
        { q: "Безопасно ли сообщать свой UID?", a: "Да. UID — открытый идентификатор, войти по нему в аккаунт нельзя — он лишь показывает, куда зачислить алмазы. Опасно сообщать логин, пароль и код подтверждения." },
        { q: "Кто-то просит мой пароль и обещает «больше алмазов». Что делать?", a: "Прекратить разговор и пожаловаться. Ни один законный сервис не спрашивает пароль или SMS-код. Если пароль уже сообщили, немедленно смените его и проверьте защиту привязанной почты." },
        { q: "Восстановится ли потерянный гостевой аккаунт?", a: "Нет. Данные гостевого аккаунта хранятся на устройстве и с сервера не восстанавливаются. Поэтому до пополнения аккаунт обязательно привязать к Google, Facebook или VK." },
        { q: "Вредят ли аккаунту моды и читы?", a: "Да. Они нарушают правила Garena и ведут к блокировке аккаунта, а вдобавок часто ставят на телефон вредоносную программу и крадут сохранённые пароли." },
        { q: "Redeem-код не работает, почему?", a: "Срок кода истёк, он для другого региона или уже использован. Коды активируются только на официальной странице Garena при входе через привязанный аккаунт — не гостевой." },
        { q: "Как отличить безопасного продавца?", a: "Спрашивает только UID, показывает ник до оплаты, даёт чек и номер заказа, принимает местную оплату в сумах и имеет поддержку на узбекском. Если просят пароль — это обман." },
      ],
    },
  },
};

export default article;
