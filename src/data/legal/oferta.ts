/**
 * Ommaviy oferta — `/oferta`.
 *
 * NEGA KERAK: to'lov tizimlari (МПС) va ekvayer bank saytdan xizmat
 * shartlarini ochiq talab qiladi. Bundan tashqari bu hujjat foydalanuvchi
 * bilan tuzilgan SHARTNOMA o'rnini bosadi — nizoda tomonlar aynan shu
 * matnga tayanadi.
 *
 * YOZISH QOIDASI: bu yerda faqat mahsulot HAQIQATAN qiladigan ish
 * yozilgan. Kafolat berib bo'lmaydigan narsa («har doim 1 daqiqada»,
 * «har qanday holatda qaytaramiz») ataylab yozilmagan — bajarilmaydigan
 * va'da ofertani foydasiz, nizoda esa zararli qiladi.
 */

import type { LegalDoc } from "./types";
import {
  BOT_USERNAME,
  BOT_URL,
  SUPPORT_URL,
  PAYMENT_METHODS,
  LEGAL,
  localePath,
} from "../site";

const PAY = PAYMENT_METHODS.map((m) => m.name).join(", ");

export const OFERTA: LegalDoc = {
  slug: "oferta",
  icon: "scale",
  updated: LEGAL.offerRevision,

  locales: {
    // ------------------------------------------------------------ uz ----
    uz: {
      title: "Ommaviy oferta",
      metaTitle: "Ommaviy oferta — xizmat shartlari",
      metaDescription:
        "GemPay ommaviy ofertasi: xizmat nimadan iborat, buyurtma qanday rasmiylashtiriladi, " +
        "tomonlar nimaga javob beradi va pul qaysi hollarda qaytariladi.",
      short: "Ommaviy oferta",
      answer:
        "Ommaviy oferta — GemPay bilan foydalanuvchi o'rtasidagi shartnoma. Unda xizmat nimadan " +
        "iborat, buyurtma qanday rasmiylashtiriladi va to'lanadi, kredit qancha vaqtda yetkaziladi, " +
        "tomonlar nimaga javob beradi va pul qaysi hollarda qaytarilishi yozilgan. Botda to'lovni " +
        "tasdiqlash — ofertaga rozilik demakdir.",

      body: [
        {
          t: "note",
          tone: "info",
          title: "Qisqacha",
          text:
            "Bu sahifa — rasmiy hujjat. Agar sizga faqat amaliy javob kerak bo'lsa: " +
            `to'lov usullari va pul qaytarish tartibi <a href="${localePath("uz", "tolov-va-qaytarish")}">alohida sahifada</a>, ` +
            `karta xavfsizligi esa <a href="${localePath("uz", "tolov-xavfsizligi")}">bu yerda</a> tushuntirilgan.`,
        },

        { t: "h2", id: "atamalar", text: "1. Atamalar va ta'riflar" },
        {
          t: "p",
          text:
            "Ushbu ofertada quyidagi atamalar shu ma'noda ishlatiladi. Ta'riflar matnning " +
            "qolgan qismini bir xil tushunish uchun keltirilgan.",
        },
        {
          t: "facts",
          items: [
            {
              k: "Ijrochi",
              v: "Xizmatni ko'rsatuvchi tomon — GemPay brendi ostida ishlovchi tashkilot. To'liq rekvizitlar shu sahifaning oxirida.",
            },
            {
              k: "Foydalanuvchi",
              v: "Botda buyurtma rasmiylashtirgan va to'lovni tasdiqlagan jismoniy shaxs.",
            },
            {
              k: "Xizmat",
              v: "O'yin hisobiga ichki valyuta yoki hamyon mablag'ini yetkazish — foydalanuvchi ko'rsatgan ochiq Player ID bo'yicha.",
            },
            {
              k: "Bot",
              v: `Telegram'dagi @${BOT_USERNAME} va uning ichidagi Mini App. Buyurtma, to'lov va tarix faqat shu yerda bo'ladi.`,
            },
            {
              k: "Player ID",
              v: "O'yin profilidagi ochiq identifikator. U bilan hisobga KIRIB bo'lmaydi, faqat unga narsa yuborish mumkin.",
            },
            {
              k: "Provayder",
              v: "Ijrochi integratsiya qilgan yetkazib beruvchi. Kredit uning API'si orqali o'yin serveriga uzatiladi.",
            },
            {
              k: "Buyurtma",
              v: "Tanlangan o'yin, paket va Player ID dan iborat, to'lov bilan tasdiqlangan so'rov.",
            },
          ],
        },

        { t: "h2", id: "predmet", text: "2. Oferta predmeti" },
        {
          t: "p",
          text:
            "Ijrochi foydalanuvchining topshirig'iga binoan o'yin ichki valyutasini yoki hamyon " +
            "mablag'ini foydalanuvchi ko'rsatgan hisobga yetkazish bo'yicha xizmat ko'rsatadi, " +
            "foydalanuvchi esa bu xizmat uchun O'zbekiston so'mida haq to'laydi.",
        },
        {
          t: "note",
          tone: "warn",
          title: "Ijrochi o'yin nashriyotining rasmiy vakili emas",
          text:
            "GemPay — mustaqil vositachi xizmat. O'yin nomlari, logolari va savdo belgilari o'z " +
            "egalariga tegishli. Ijrochi o'yin qoidalari, akkaunt bloklanishi, o'yin ichidagi " +
            "narx yoki aksiyalar uchun javob bermaydi — bular nashriyot ixtiyorida.",
        },
        {
          t: "p",
          text:
            "Xizmat O'zbekiston Respublikasi hududida, so'mda ko'rsatiladi. Ijrochi xizmat " +
            "qamrovini, o'yinlar ro'yxatini va paketlarni oldindan xabar bermasdan " +
            "o'zgartirishga haqli — bu allaqachon to'langan buyurtmalarga taalluqli emas.",
        },

        { t: "h2", id: "buyurtma", text: "3. Buyurtma qanday rasmiylashtiriladi" },
        {
          t: "steps",
          items: [
            {
              title: "O'yin va paket tanlanadi",
              text: "Botda katalogdan o'yin, so'ngra kerakli paket tanlanadi. Har paketning so'mdagi narxi shu yerda ko'rinadi.",
            },
            {
              title: "Player ID kiritiladi",
              text:
                "Foydalanuvchi o'z Player ID sini (kerak bo'lsa server ID sini ham) kiritadi. Bu ma'lumotning " +
                "to'g'riligi uchun javobgarlik foydalanuvchida.",
            },
            {
              title: "Nik tekshiriladi",
              text:
                "Tizim ID bo'yicha o'yinchi nikini o'yin serveridan so'rab oladi va ekranda ko'rsatadi. " +
                "Bu bosqich BEPUL va to'lovdan oldin bo'ladi — aynan shu yerda xatoni tuzatish mumkin.",
            },
            {
              title: "To'lov tasdiqlanadi",
              text:
                "Foydalanuvchi nik o'ziniki ekaniga ishonch hosil qilib to'lovni tasdiqlaydi. Shu daqiqadan " +
                "boshlab oferta qabul qilingan hisoblanadi.",
            },
          ],
        },
        {
          t: "note",
          tone: "warn",
          title: "Nikni tekshirish — foydalanuvchining majburiyati",
          text:
            "Ekranda ko'rsatilgan nik sizniki emasligini ko'rsangiz, to'lovni tasdiqlamang. " +
            "Tasdiqlangandan keyin kredit AYNAN o'sha hisobga tushadi va uni qaytarib olib bo'lmaydi — " +
            "bu o'yin tomonidagi cheklov, Ijrochi buni o'zgartira olmaydi.",
        },

        { t: "h2", id: "narx", text: "4. Narx va to'lov tartibi" },
        {
          t: "p",
          text:
            "Xizmat narxi so'mda belgilanadi va to'lov paytida botda ko'rsatiladi. Narx " +
            "provayder katalogidan jonli olinadi hamda valyuta kursiga bog'liq, shuning uchun u " +
            "vaqt o'tishi bilan o'zgarishi mumkin.",
        },
        {
          t: "note",
          tone: "info",
          title: "Saytda narx yozilmagan — ataylab",
          text:
            "Statik sahifaga yozilgan raqam bir hafta ichida haqiqatga to'g'ri kelmay qoladi va " +
            "bajarilmaydigan va'daga aylanadi. Shuning uchun yagona haqiqiy narx — to'lov " +
            "oynasida ko'rsatilgani. Buyurtma aynan o'sha narxda bajariladi.",
        },
        {
          t: "p",
          text: `To'lov quyidagi usullar bilan qabul qilinadi: <strong>${PAY}</strong>. To'lov O'zbekiston Respublikasi qonunchiligiga muvofiq faoliyat yurituvchi to'lov tashkiloti orqali amalga oshiriladi.`,
        },
        { t: "paymarks" },
        {
          t: "p",
          text:
            "Karta ma'lumotlari Ijrochiga uzatilmaydi va uning tizimlarida saqlanmaydi — ular " +
            "to'g'ridan-to'g'ri to'lov tashkilotining himoyalangan sahifasiga kiritiladi. " +
            `Batafsil: <a href="${localePath("uz", "tolov-xavfsizligi")}">to'lov xavfsizligi</a>.`,
        },

        { t: "h2", id: "yetkazish", text: "5. Xizmatning bajarilishi" },
        {
          t: "p",
          text:
            "To'lov tasdiqlangach buyurtma provayderga avtomatik uzatiladi. Odatda kredit " +
            "1-5 daqiqada yetkaziladi. Bu muddat o'yin va provayder navbatiga bog'liq va " +
            "kafolatlangan muddat emas.",
        },
        {
          t: "list",
          items: [
            "Buyurtma bajarilgach botda holat <strong>«bajarildi»</strong> ga o'zgaradi va tarixda saqlanadi.",
            "Provayder buyurtmani rad etsa yoki texnik nosozlik yuz bersa, mablag' <strong>to'liq qaytariladi</strong> yoki buyurtma qayta bajariladi — tanlov foydalanuvchida.",
            "Yetkazish 24 soatdan oshsa, buyurtma bajarilmagan hisoblanadi va mablag' qaytariladi.",
          ],
        },
        {
          t: "p",
          text: `Bajarilish tartibi va muddatlari <a href="${localePath("uz", "tolov-va-qaytarish")}">to'lov va pulni qaytarish</a> sahifasida batafsil yozilgan.`,
        },

        { t: "h2", id: "majburiyat", text: "6. Tomonlarning huquq va majburiyatlari" },
        { t: "h3", text: "Ijrochi majburiyatlari" },
        {
          t: "list",
          items: [
            "Buyurtmani to'langan paket bo'yicha, ko'rsatilgan Player ID ga yetkazish.",
            "To'lovdan oldin nikni tekshirish imkonini bepul berish.",
            "Buyurtma bajarilmasa mablag'ni qaytarish yoki qayta yetkazish.",
            "Foydalanuvchi murojaatiga javob berish va buyurtma tarixini taqdim etish.",
            "Shaxsiy ma'lumotlarni faqat xizmat ko'rsatish uchun ishlatish.",
          ],
        },
        { t: "h3", text: "Ijrochi huquqlari" },
        {
          t: "list",
          items: [
            "Shubhali to'lovni tekshirish uchun buyurtmani vaqtincha to'xtatish — bank bilan tuzilgan shartnomaga muvofiq.",
            "Firibgarlik alomatlari aniqlansa xizmat ko'rsatishni rad etib, mablag'ni to'lov manbaiga qaytarish.",
            "Katalog, paketlar va narxlarni o'zgartirish.",
            "Oferta shartlarini o'zgartirish — bu sahifada e'lon qilish yo'li bilan.",
          ],
        },
        { t: "h3", text: "Foydalanuvchi majburiyatlari" },
        {
          t: "list",
          items: [
            "To'g'ri Player ID kiritish va to'lovdan oldin ko'rsatilgan nikni tekshirish.",
            "Faqat o'ziga qonuniy tegishli to'lov vositasidan foydalanish.",
            "Xizmatdan qonunga va o'yin qoidalariga zid maqsadda foydalanmaslik.",
            "Muammo yuzaga kelsa buyurtma raqami bilan murojaat qilish.",
          ],
        },

        { t: "h2", id: "javobgarlik", text: "7. Javobgarlik va uning chegaralari" },
        {
          t: "p",
          text:
            "Ijrochining javobgarligi har qanday holatda ham nizo yuzaga kelgan buyurtma " +
            "summasidan oshmaydi. Ijrochi bilvosita zarar, boy berilgan foyda yoki o'yin " +
            "ichidagi imkoniyatlar uchun javob bermaydi.",
        },
        {
          t: "table",
          caption: "Kim nimaga javob beradi",
          head: ["Holat", "Javobgar", "Natija"],
          rows: [
            ["To'lov o'tdi, kredit tushmadi", "Ijrochi", "To'liq qaytarish yoki qayta yetkazish"],
            ["Provayder yoki o'yin serveri ishlamayapti", "Ijrochi", "Qaytarish; muddat uzayishi mumkin"],
            ["Xato Player ID kiritildi, kredit boshqa hisobga tushdi", "Foydalanuvchi", "Qaytarib bo'lmaydi"],
            ["O'yin akkaunti nashriyot tomonidan bloklandi", "Nashriyot", "Ijrochi ta'sir qila olmaydi"],
            ["Karta egasi roziligisiz ishlatildi", "Foydalanuvchi", "Bank bilan birga tekshiriladi, xizmat rad etiladi"],
          ],
        },
        {
          t: "p",
          text:
            "Ijrochi yengib bo'lmas kuch holatlari (fors-major), shu jumladan aloqa uzilishi, " +
            "o'yin serverining rejadan tashqari to'xtashi yoki uchinchi tomon tizimlaridagi " +
            "nosozliklar tufayli kechikish uchun javobgar emas. Bunday holatda buyurtma " +
            "bajariladi yoki mablag' qaytariladi.",
        },

        { t: "h2", id: "qaytarish", text: "8. Pulni qaytarish" },
        {
          t: "p",
          text:
            "Xizmat bajarilmagan bo'lsa, mablag' to'liq qaytariladi. Bajarilgan buyurtma — " +
            "ya'ni kredit ko'rsatilgan hisobga tushgan bo'lsa — qaytarilmaydi, chunki o'yin " +
            "hisobiga tushgan ichki valyutani texnik jihatdan olib bo'lmaydi.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Murojaat botdagi qo'llab-quvvatlash orqali yoki elektron pochtaga yuboriladi.",
            "Murojaatda buyurtma raqami, sana va to'lov usuli ko'rsatiladi.",
            "Ijrochi murojaatni <strong>3 ish kuni</strong> ichida ko'rib chiqadi.",
            "Qaror ijobiy bo'lsa mablag' <strong>to'lov qilingan usulga</strong> qaytariladi.",
            "Bankka tushishi to'lov tashkilotiga bog'liq — odatda 1-10 ish kuni.",
          ],
        },
        {
          t: "p",
          text: `To'liq ro'yxat — qaysi holatda qaytariladi va qaysisida yo'q — <a href="${localePath("uz", "tolov-va-qaytarish")}">to'lov va pulni qaytarish</a> sahifasida.`,
        },

        { t: "h2", id: "maxfiylik", text: "9. Shaxsiy ma'lumotlar" },
        {
          t: "p",
          text:
            "Ijrochi xizmat ko'rsatish uchun zarur bo'lgan eng kam ma'lumotni qayta ishlaydi: " +
            "Telegram hisobi identifikatori, kiritilgan Player ID va buyurtma tarixi. " +
            "Bu ma'lumot buyurtmani bajarish, tarixni ko'rsatish va nizoni hal qilish uchun kerak.",
        },
        {
          t: "list",
          items: [
            "Karta raqami, amal qilish muddati va CVV Ijrochiga <strong>umuman kelmaydi</strong> — ular to'lov tashkilotida qoladi.",
            "Ma'lumot uchinchi shaxslarga sotilmaydi va reklama maqsadida uzatilmaydi.",
            "Ma'lumot provayderga faqat buyurtmani bajarish uchun zarur hajmda uzatiladi.",
            "Qonun talab qilgan hollarda vakolatli organga ma'lumot berilishi mumkin.",
          ],
        },
        {
          t: "p",
          text:
            "Foydalanuvchi o'z ma'lumotlarini o'chirishni so'rashga haqli. Buyurtma tarixi " +
            "buxgalteriya va nizo ehtimoli uchun qonunda belgilangan muddat davomida saqlanadi.",
        },

        { t: "h2", id: "nizo", text: "10. Nizolarni hal qilish" },
        {
          t: "p",
          text:
            "Tomonlar nizoni avvalo muzokara yo'li bilan hal qilishga harakat qiladi. " +
            "Murojaat yozma shaklda — botdagi qo'llab-quvvatlash yoki elektron pochta orqali — " +
            "yuboriladi va 15 kun ichida ko'rib chiqiladi.",
        },
        {
          t: "p",
          text:
            "Kelishuvga erishilmasa, nizo O'zbekiston Respublikasi qonunchiligiga muvofiq " +
            "hal qilinadi. Ofertaga nisbatan O'zbekiston Respublikasi huquqi qo'llaniladi.",
        },

        { t: "h2", id: "amal", text: "11. Ofertaning amal qilishi va o'zgarishi" },
        {
          t: "p",
          text:
            "Oferta shu sahifada e'lon qilingan paytdan kuchga kiradi va muddatsiz amal qiladi. " +
            "Ijrochi shartlarni o'zgartirishga haqli; yangi tahrir shu sahifada e'lon qilinadi va " +
            "sahifa boshidagi <strong>yangilanish sanasi</strong> o'zgaradi.",
        },
        {
          t: "note",
          tone: "good",
          title: "Allaqachon to'langan buyurtmaga eski tahrir qo'llaniladi",
          text:
            "Shartlar o'zgarsa, bu siz to'lagan buyurtmaga ta'sir qilmaydi — unga to'lov " +
            "paytida amal qilgan tahrir qo'llaniladi. Yangi shartlar faqat keyingi " +
            "buyurtmalarga taalluqli.",
        },
        {
          t: "p",
          text: `Ofertaning joriy tahriri botda to'lovni tasdiqlash orqali qabul qilinadi. Rozi bo'lmasangiz — xizmatdan foydalanmang; bot: <a href="${BOT_URL}" rel="nofollow noopener" target="_blank">@${BOT_USERNAME}</a>.`,
        },

        { t: "h2", id: "rekvizit", text: "12. Ijrochi rekvizitlari" },
        { t: "requisites" },
        { t: "contacts" },
      ],

      faq: [
        {
          q: "Ofertaga qachon rozilik bergan bo'laman?",
          a:
            "Botda to'lovni tasdiqlagan paytda. Alohida imzo yoki qog'oz shartnoma kerak emas — " +
            "ommaviy oferta shu tarzda qabul qilinadi.",
        },
        {
          q: "Xato Player ID kiritsam pul qaytariladimi?",
          a:
            "Yo'q. Kredit siz ko'rsatgan hisobga tushadi va o'yin hisobidan ichki valyutani " +
            "qaytarib olish texnik jihatdan mumkin emas. Aynan shuning uchun to'lovdan oldin " +
            "ekranda nik ko'rsatiladi — uni tekshirish yagona himoya.",
        },
        {
          q: "GemPay o'yin nashriyotining rasmiy hamkorimi?",
          a:
            "Yo'q. GemPay — mustaqil vositachi xizmat. O'yin nomlari va logolari o'z egalarining " +
            "savdo belgilari. Akkaunt bloklanishi yoki o'yin qoidalari bo'yicha qarorlar " +
            "nashriyot ixtiyorida.",
        },
        {
          q: "Oferta shartlari o'zgarsa nima bo'ladi?",
          a:
            "Yangi tahrir shu sahifada e'lon qilinadi va yangilanish sanasi o'zgaradi. " +
            "Allaqachon to'langan buyurtmalarga to'lov paytidagi tahrir qo'llaniladi.",
        },
        {
          q: "Chek yoki to'lov tasdig'ini qayerdan olaman?",
          a:
            "Har bir buyurtma botdagi tarixda saqlanadi: sana, paket, summa va holat. " +
            `Qo'shimcha tasdiq kerak bo'lsa qo'llab-quvvatlashga yozing: ${SUPPORT_URL}.`,
        },
      ],
    },
    // ------------------------------------------------------------ ru ----
    ru: {
      title: "Публичная оферта",
      metaTitle: "Публичная оферта — условия оказания услуг",
      metaDescription:
        "Публичная оферта GemPay: в чём состоит услуга, как оформляется и оплачивается заказ, " +
        "за что отвечают стороны и в каких случаях возвращаются деньги.",
      short: "Публичная оферта",
      answer:
        "Публичная оферта — договор между GemPay и пользователем. В нём указано, в чём состоит " +
        "услуга, как оформляется и оплачивается заказ, за какое время зачисляется пополнение, " +
        "за что отвечают стороны и когда возвращаются деньги. Подтверждение оплаты в боте " +
        "означает согласие с офертой.",

      body: [
        {
          t: "note",
          tone: "info",
          title: "Коротко",
          text:
            "Эта страница — официальный документ. Если нужен практический ответ: " +
            `способы оплаты и порядок возврата — на <a href="${localePath("ru", "tolov-va-qaytarish")}">отдельной странице</a>, ` +
            `безопасность карт — <a href="${localePath("ru", "tolov-xavfsizligi")}">здесь</a>.`,
        },

        { t: "h2", id: "atamalar", text: "1. Термины и определения" },
        {
          t: "p",
          text:
            "В настоящей оферте термины используются в указанном ниже значении. Определения " +
            "приведены для однозначного понимания остального текста.",
        },
        {
          t: "facts",
          items: [
            {
              k: "Исполнитель",
              v: "Сторона, оказывающая услугу, — организация, работающая под брендом GemPay. Полные реквизиты в конце страницы.",
            },
            {
              k: "Пользователь",
              v: "Физическое лицо, оформившее заказ в боте и подтвердившее оплату.",
            },
            {
              k: "Услуга",
              v: "Зачисление внутриигровой валюты или средств кошелька на счёт по открытому Player ID, указанному пользователем.",
            },
            {
              k: "Бот",
              v: `@${BOT_USERNAME} в Telegram и Mini App внутри него. Заказ, оплата и история — только там.`,
            },
            {
              k: "Player ID",
              v: "Открытый идентификатор игрового профиля. По нему нельзя войти в аккаунт — можно только отправить на него зачисление.",
            },
            {
              k: "Провайдер",
              v: "Поставщик, с которым у исполнителя интеграция. Зачисление уходит на игровой сервер через его API.",
            },
            {
              k: "Заказ",
              v: "Запрос из выбранной игры, пакета и Player ID, подтверждённый оплатой.",
            },
          ],
        },

        { t: "h2", id: "predmet", text: "2. Предмет оферты" },
        {
          t: "p",
          text:
            "Исполнитель по поручению пользователя оказывает услугу зачисления внутриигровой " +
            "валюты или средств кошелька на указанный пользователем счёт, а пользователь " +
            "оплачивает эту услугу в узбекских сумах.",
        },
        {
          t: "note",
          tone: "warn",
          title: "Исполнитель не является официальным представителем издателя игры",
          text:
            "GemPay — независимый посреднический сервис. Названия игр, логотипы и товарные знаки " +
            "принадлежат их правообладателям. Исполнитель не отвечает за правила игры, блокировку " +
            "аккаунта, внутриигровые цены и акции — это решения издателя.",
        },
        {
          t: "p",
          text:
            "Услуга оказывается на территории Республики Узбекистан, в сумах. Исполнитель вправе " +
            "изменять перечень игр, пакетов и охват услуги без предварительного уведомления — " +
            "это не распространяется на уже оплаченные заказы.",
        },

        { t: "h2", id: "buyurtma", text: "3. Как оформляется заказ" },
        {
          t: "steps",
          items: [
            {
              title: "Выбор игры и пакета",
              text: "В боте выбирается игра, затем нужный пакет. Цена каждого пакета в сумах отображается здесь же.",
            },
            {
              title: "Ввод Player ID",
              text:
                "Пользователь вводит свой Player ID (при необходимости — и ID сервера). За правильность " +
                "этих данных отвечает пользователь.",
            },
            {
              title: "Проверка ника",
              text:
                "Система запрашивает ник игрока по ID с игрового сервера и показывает его на экране. " +
                "Этот шаг БЕСПЛАТНЫЙ и выполняется до оплаты — именно здесь можно исправить ошибку.",
            },
            {
              title: "Подтверждение оплаты",
              text:
                "Убедившись, что ник свой, пользователь подтверждает оплату. С этого момента оферта " +
                "считается принятой.",
            },
          ],
        },
        {
          t: "note",
          tone: "warn",
          title: "Проверка ника — обязанность пользователя",
          text:
            "Если показанный ник не ваш, не подтверждайте оплату. После подтверждения зачисление " +
            "уйдёт именно на этот счёт, и вернуть его нельзя — это ограничение на стороне игры, " +
            "исполнитель не может его изменить.",
        },

        { t: "h2", id: "narx", text: "4. Цена и порядок оплаты" },
        {
          t: "p",
          text:
            "Стоимость услуги определяется в сумах и отображается в боте в момент оплаты. Цена " +
            "берётся из каталога провайдера в реальном времени и зависит от курса валют, поэтому " +
            "со временем может меняться.",
        },
        {
          t: "note",
          tone: "info",
          title: "На сайте цен нет — намеренно",
          text:
            "Цифра, записанная на статичной странице, за неделю перестаёт соответствовать " +
            "действительности и превращается в невыполнимое обещание. Поэтому единственная " +
            "настоящая цена — та, что показана в окне оплаты. Заказ выполняется именно по ней.",
        },
        {
          t: "p",
          text: `Оплата принимается следующими способами: <strong>${PAY}</strong>. Платёж проводится через платёжную организацию, действующую в соответствии с законодательством Республики Узбекистан.`,
        },
        { t: "paymarks" },
        {
          t: "p",
          text:
            "Данные карты не передаются исполнителю и не хранятся в его системах — они вводятся " +
            "непосредственно на защищённой странице платёжной организации. " +
            `Подробнее: <a href="${localePath("ru", "tolov-xavfsizligi")}">безопасность платежей</a>.`,
        },

        { t: "h2", id: "yetkazish", text: "5. Исполнение услуги" },
        {
          t: "p",
          text:
            "После подтверждения оплаты заказ автоматически передаётся провайдеру. Обычно " +
            "зачисление занимает 1-5 минут. Этот срок зависит от игры и очереди провайдера и не " +
            "является гарантированным.",
        },
        {
          t: "list",
          items: [
            "После исполнения статус в боте меняется на <strong>«выполнен»</strong> и сохраняется в истории.",
            "Если провайдер отклонил заказ или произошёл технический сбой, средства <strong>возвращаются полностью</strong> либо заказ выполняется повторно — выбор за пользователем.",
            "Если зачисление не произошло в течение 24 часов, заказ считается неисполненным и средства возвращаются.",
          ],
        },
        {
          t: "p",
          text: `Порядок и сроки исполнения подробно описаны на странице <a href="${localePath("ru", "tolov-va-qaytarish")}">оплата и возврат</a>.`,
        },

        { t: "h2", id: "majburiyat", text: "6. Права и обязанности сторон" },
        { t: "h3", text: "Обязанности исполнителя" },
        {
          t: "list",
          items: [
            "Выполнить заказ по оплаченному пакету на указанный Player ID.",
            "Бесплатно предоставить возможность проверить ник до оплаты.",
            "Вернуть средства или выполнить заказ повторно, если он не исполнен.",
            "Отвечать на обращения и предоставлять историю заказов.",
            "Использовать персональные данные только для оказания услуги.",
          ],
        },
        { t: "h3", text: "Права исполнителя" },
        {
          t: "list",
          items: [
            "Приостановить заказ для проверки подозрительного платежа — в соответствии с договором с банком.",
            "Отказать в услуге при признаках мошенничества и вернуть средства на источник платежа.",
            "Изменять каталог, пакеты и цены.",
            "Изменять условия оферты путём публикации на этой странице.",
          ],
        },
        { t: "h3", text: "Обязанности пользователя" },
        {
          t: "list",
          items: [
            "Указать верный Player ID и проверить показанный ник до оплаты.",
            "Использовать только законно принадлежащее ему платёжное средство.",
            "Не использовать услугу в целях, противоречащих закону и правилам игры.",
            "При возникновении проблемы обращаться с номером заказа.",
          ],
        },

        { t: "h2", id: "javobgarlik", text: "7. Ответственность и её пределы" },
        {
          t: "p",
          text:
            "Ответственность исполнителя в любом случае не превышает суммы заказа, по которому " +
            "возник спор. Исполнитель не отвечает за косвенные убытки, упущенную выгоду и " +
            "внутриигровые возможности.",
        },
        {
          t: "table",
          caption: "Кто за что отвечает",
          head: ["Ситуация", "Ответственный", "Результат"],
          rows: [
            ["Оплата прошла, зачисления нет", "Исполнитель", "Полный возврат или повторное зачисление"],
            ["Провайдер или игровой сервер недоступен", "Исполнитель", "Возврат; срок может увеличиться"],
            ["Введён неверный Player ID, зачисление ушло на чужой счёт", "Пользователь", "Возврат невозможен"],
            ["Игровой аккаунт заблокирован издателем", "Издатель", "Исполнитель не может повлиять"],
            ["Карта использована без согласия владельца", "Пользователь", "Проверка совместно с банком, отказ в услуге"],
          ],
        },
        {
          t: "p",
          text:
            "Исполнитель не отвечает за задержки, вызванные обстоятельствами непреодолимой силы, " +
            "включая сбои связи, внеплановую остановку игрового сервера и неполадки в системах " +
            "третьих лиц. В таком случае заказ выполняется либо средства возвращаются.",
        },

        { t: "h2", id: "qaytarish", text: "8. Возврат средств" },
        {
          t: "p",
          text:
            "Если услуга не оказана, средства возвращаются полностью. Исполненный заказ — то есть " +
            "когда зачисление поступило на указанный счёт — возврату не подлежит, поскольку " +
            "внутриигровую валюту технически невозможно списать обратно.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Обращение направляется через поддержку в боте или на электронную почту.",
            "В обращении указываются номер заказа, дата и способ оплаты.",
            "Исполнитель рассматривает обращение в течение <strong>3 рабочих дней</strong>.",
            "При положительном решении средства возвращаются <strong>тем же способом</strong>, которым была произведена оплата.",
            "Срок поступления в банк зависит от платёжной организации — обычно 1-10 рабочих дней.",
          ],
        },
        {
          t: "p",
          text: `Полный перечень — когда возврат возможен, а когда нет — на странице <a href="${localePath("ru", "tolov-va-qaytarish")}">оплата и возврат</a>.`,
        },

        { t: "h2", id: "maxfiylik", text: "9. Персональные данные" },
        {
          t: "p",
          text:
            "Исполнитель обрабатывает минимум данных, необходимых для оказания услуги: " +
            "идентификатор аккаунта Telegram, введённый Player ID и историю заказов. Эти данные " +
            "нужны для исполнения заказа, отображения истории и разрешения спора.",
        },
        {
          t: "list",
          items: [
            "Номер карты, срок действия и CVV <strong>вообще не поступают</strong> исполнителю — они остаются в платёжной организации.",
            "Данные не продаются третьим лицам и не передаются в рекламных целях.",
            "Провайдеру данные передаются только в объёме, необходимом для исполнения заказа.",
            "В случаях, предусмотренных законом, данные могут быть предоставлены уполномоченному органу.",
          ],
        },
        {
          t: "p",
          text:
            "Пользователь вправе запросить удаление своих данных. История заказов хранится в " +
            "течение срока, установленного законом, — для бухгалтерского учёта и на случай спора.",
        },

        { t: "h2", id: "nizo", text: "10. Разрешение споров" },
        {
          t: "p",
          text:
            "Стороны стремятся урегулировать спор путём переговоров. Обращение направляется в " +
            "письменной форме — через поддержку в боте или на электронную почту — и " +
            "рассматривается в течение 15 дней.",
        },
        {
          t: "p",
          text:
            "Если соглашение не достигнуто, спор разрешается в соответствии с законодательством " +
            "Республики Узбекистан. К оферте применяется право Республики Узбекистан.",
        },

        { t: "h2", id: "amal", text: "11. Срок действия и изменение оферты" },
        {
          t: "p",
          text:
            "Оферта вступает в силу с момента публикации на этой странице и действует бессрочно. " +
            "Исполнитель вправе изменять условия; новая редакция публикуется здесь же, и " +
            "<strong>дата обновления</strong> в начале страницы меняется.",
        },
        {
          t: "note",
          tone: "good",
          title: "К уже оплаченному заказу применяется прежняя редакция",
          text:
            "Изменение условий не затрагивает оплаченный вами заказ — к нему применяется редакция, " +
            "действовавшая на момент оплаты. Новые условия распространяются только на последующие заказы.",
        },
        {
          t: "p",
          text: `Действующая редакция оферты принимается подтверждением оплаты в боте. Если вы не согласны — не пользуйтесь услугой; бот: <a href="${BOT_URL}" rel="nofollow noopener" target="_blank">@${BOT_USERNAME}</a>.`,
        },

        { t: "h2", id: "rekvizit", text: "12. Реквизиты исполнителя" },
        { t: "requisites" },
        { t: "contacts" },
      ],

      faq: [
        {
          q: "В какой момент я соглашаюсь с офертой?",
          a:
            "В момент подтверждения оплаты в боте. Отдельная подпись или бумажный договор не нужны — " +
            "публичная оферта принимается именно так.",
        },
        {
          q: "Вернут ли деньги, если я ввёл неверный Player ID?",
          a:
            "Нет. Зачисление уходит на указанный вами счёт, а списать внутриигровую валюту обратно " +
            "технически невозможно. Именно поэтому до оплаты на экране показывается ник — его " +
            "проверка и есть единственная защита.",
        },
        {
          q: "GemPay — официальный партнёр издателя игры?",
          a:
            "Нет. GemPay — независимый посреднический сервис. Названия игр и логотипы являются " +
            "товарными знаками правообладателей. Решения о блокировке аккаунта и правилах игры " +
            "принимает издатель.",
        },
        {
          q: "Что будет, если условия оферты изменятся?",
          a:
            "Новая редакция публикуется на этой странице, и дата обновления меняется. К уже " +
            "оплаченным заказам применяется редакция, действовавшая на момент оплаты.",
        },
        {
          q: "Где взять чек или подтверждение оплаты?",
          a:
            "Каждый заказ сохраняется в истории бота: дата, пакет, сумма и статус. Если нужно " +
            `дополнительное подтверждение, напишите в поддержку: ${SUPPORT_URL}.`,
        },
      ],
    },
    // ------------------------------------------------------------ en ----
    en: {
      title: "Public offer",
      metaTitle: "Public offer — terms of service",
      metaDescription:
        "GemPay public offer: what the service covers, how an order is placed and paid for, " +
        "what each side is responsible for and when money is refunded.",
      short: "Public offer",
      answer:
        "The public offer is the agreement between GemPay and the user. It sets out what the " +
        "service covers, how an order is placed and paid for, how long delivery takes, what each " +
        "side is responsible for and when money is refunded. Confirming payment in the bot means " +
        "accepting the offer.",

      body: [
        {
          t: "note",
          tone: "info",
          title: "In short",
          text:
            "This page is the formal document. If you only need the practical answer: " +
            `payment methods and the refund procedure are on a <a href="${localePath("en", "tolov-va-qaytarish")}">separate page</a>, ` +
            `and card security is explained <a href="${localePath("en", "tolov-xavfsizligi")}">here</a>.`,
        },

        { t: "h2", id: "atamalar", text: "1. Terms and definitions" },
        {
          t: "p",
          text:
            "In this offer the following terms carry the meanings given below. The definitions " +
            "are here so the rest of the text reads the same way for both sides.",
        },
        {
          t: "facts",
          items: [
            {
              k: "Provider of the service",
              v: "The party performing the service — the company operating under the GemPay brand. Full details at the end of this page.",
            },
            {
              k: "User",
              v: "The individual who placed an order in the bot and confirmed payment.",
            },
            {
              k: "Service",
              v: "Delivering in-game currency or wallet funds to the account identified by the public Player ID the user supplied.",
            },
            {
              k: "Bot",
              v: `@${BOT_USERNAME} on Telegram and the Mini App inside it. Ordering, payment and history all happen there.`,
            },
            {
              k: "Player ID",
              v: "The public identifier of a game profile. It cannot be used to log in — only to send something to that account.",
            },
            {
              k: "Supplier",
              v: "The upstream partner GemPay is integrated with. Delivery reaches the game server through its API.",
            },
            {
              k: "Order",
              v: "A request made up of the chosen game, package and Player ID, confirmed by payment.",
            },
          ],
        },

        { t: "h2", id: "predmet", text: "2. Subject of the offer" },
        {
          t: "p",
          text:
            "GemPay delivers in-game currency or wallet funds to the account the user specifies, " +
            "on the user's instruction, and the user pays for that service in Uzbek som.",
        },
        {
          t: "note",
          tone: "warn",
          title: "GemPay is not an official representative of any game publisher",
          text:
            "GemPay is an independent reseller. Game names, logos and trademarks belong to their " +
            "owners. GemPay is not responsible for game rules, account bans, in-game pricing or " +
            "promotions — those are the publisher's decisions.",
        },
        {
          t: "p",
          text:
            "The service is provided in the Republic of Uzbekistan, in som. GemPay may change the " +
            "list of games, the packages and the scope of the service without prior notice — this " +
            "does not affect orders already paid for.",
        },

        { t: "h2", id: "buyurtma", text: "3. How an order is placed" },
        {
          t: "steps",
          items: [
            {
              title: "Pick the game and package",
              text: "You choose the game in the bot's catalog, then the package. Each package shows its price in som right there.",
            },
            {
              title: "Enter the Player ID",
              text:
                "You enter your Player ID (and a server ID where the game needs one). Getting these " +
                "right is your responsibility.",
            },
            {
              title: "The nickname is checked",
              text:
                "The system asks the game server for the nickname behind that ID and shows it on screen. " +
                "This step is FREE and happens before payment — it is where a mistake can still be fixed.",
            },
            {
              title: "Payment is confirmed",
              text:
                "Once you have checked that the nickname is yours, you confirm payment. From that moment " +
                "the offer counts as accepted.",
            },
          ],
        },
        {
          t: "note",
          tone: "warn",
          title: "Checking the nickname is the user's responsibility",
          text:
            "If the nickname shown is not yours, do not confirm payment. After confirmation the " +
            "delivery goes to exactly that account and cannot be reversed — that is a limitation on " +
            "the game's side, and GemPay cannot change it.",
        },

        { t: "h2", id: "narx", text: "4. Price and payment" },
        {
          t: "p",
          text:
            "The price is set in som and shown in the bot at the moment of payment. It comes live " +
            "from the supplier's catalog and follows the exchange rate, so it changes over time.",
        },
        {
          t: "note",
          tone: "info",
          title: "There are no prices on this site — deliberately",
          text:
            "A number written on a static page stops being true within a week and turns into a " +
            "promise that cannot be kept. So the only real price is the one in the payment screen, " +
            "and the order is fulfilled at exactly that price.",
        },
        {
          t: "p",
          text: `Payment is accepted by: <strong>${PAY}</strong>. Payments are processed through a payment organisation operating under the laws of the Republic of Uzbekistan.`,
        },
        { t: "paymarks" },
        {
          t: "p",
          text:
            "Card details never reach GemPay and are not stored in its systems — they are entered " +
            "directly on the payment organisation's secure page. " +
            `More on this: <a href="${localePath("en", "tolov-xavfsizligi")}">payment security</a>.`,
        },

        { t: "h2", id: "yetkazish", text: "5. Performing the service" },
        {
          t: "p",
          text:
            "Once payment is confirmed the order goes to the supplier automatically. Delivery " +
            "normally takes 1-5 minutes. That window depends on the game and the supplier's queue " +
            "and is not a guaranteed time.",
        },
        {
          t: "list",
          items: [
            "When the order completes, its status in the bot changes to <strong>completed</strong> and stays in your history.",
            "If the supplier rejects the order or a technical failure occurs, the money is <strong>refunded in full</strong> or the order is retried — your choice.",
            "If delivery has not happened within 24 hours, the order counts as unfulfilled and the money is refunded.",
          ],
        },
        {
          t: "p",
          text: `Timings and the exact procedure are set out on the <a href="${localePath("en", "tolov-va-qaytarish")}">payments and refunds</a> page.`,
        },

        { t: "h2", id: "majburiyat", text: "6. Rights and obligations" },
        { t: "h3", text: "GemPay undertakes to" },
        {
          t: "list",
          items: [
            "Deliver the package paid for to the Player ID given.",
            "Offer the free nickname check before payment.",
            "Refund or retry an order that was not fulfilled.",
            "Answer enquiries and provide the order history.",
            "Use personal data only to provide the service.",
          ],
        },
        { t: "h3", text: "GemPay may" },
        {
          t: "list",
          items: [
            "Hold an order while a suspicious payment is checked — under its agreement with the acquiring bank.",
            "Refuse service where there are signs of fraud and return the money to its source.",
            "Change the catalog, the packages and the prices.",
            "Change these terms by publishing a new version on this page.",
          ],
        },
        { t: "h3", text: "The user undertakes to" },
        {
          t: "list",
          items: [
            "Enter the correct Player ID and check the nickname shown before paying.",
            "Use only a payment instrument they are legally entitled to use.",
            "Not use the service for anything against the law or the game's rules.",
            "Quote the order number when reporting a problem.",
          ],
        },

        { t: "h2", id: "javobgarlik", text: "7. Liability and its limits" },
        {
          t: "p",
          text:
            "GemPay's liability never exceeds the amount of the order the dispute concerns. It does " +
            "not cover indirect losses, lost profit or in-game opportunities.",
        },
        {
          t: "table",
          caption: "Who is responsible for what",
          head: ["Situation", "Responsible", "Outcome"],
          rows: [
            ["Payment went through, nothing was delivered", "GemPay", "Full refund or redelivery"],
            ["Supplier or game server unavailable", "GemPay", "Refund; delivery may take longer"],
            ["Wrong Player ID entered, delivery went elsewhere", "User", "No refund possible"],
            ["Game account banned by the publisher", "Publisher", "Outside GemPay's control"],
            ["Card used without the holder's consent", "User", "Checked with the bank, service refused"],
          ],
        },
        {
          t: "p",
          text:
            "GemPay is not liable for delays caused by events outside its control, including network " +
            "outages, unscheduled game-server downtime and failures in third-party systems. In such " +
            "cases the order is either fulfilled or refunded.",
        },

        { t: "h2", id: "qaytarish", text: "8. Refunds" },
        {
          t: "p",
          text:
            "If the service was not performed, the money is refunded in full. A fulfilled order — " +
            "one where the delivery reached the account given — is not refundable, because in-game " +
            "currency cannot technically be taken back off an account.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Send a request through support in the bot or by email.",
            "Include the order number, the date and the payment method.",
            "GemPay reviews the request within <strong>3 working days</strong>.",
            "If it is approved, the money goes back <strong>to the method it was paid with</strong>.",
            "How fast it reaches the bank is up to the payment organisation — usually 1-10 working days.",
          ],
        },
        {
          t: "p",
          text: `The full list of what is and is not refundable is on the <a href="${localePath("en", "tolov-va-qaytarish")}">payments and refunds</a> page.`,
        },

        { t: "h2", id: "maxfiylik", text: "9. Personal data" },
        {
          t: "p",
          text:
            "GemPay processes the minimum needed to provide the service: your Telegram account " +
            "identifier, the Player ID you entered and your order history. That data is used to " +
            "fulfil the order, show your history and settle disputes.",
        },
        {
          t: "list",
          items: [
            "Card number, expiry date and CVV <strong>never reach GemPay</strong> — they stay with the payment organisation.",
            "Data is not sold to third parties and is not passed on for advertising.",
            "Data goes to the supplier only to the extent needed to fulfil the order.",
            "Where the law requires it, data may be provided to the competent authority.",
          ],
        },
        {
          t: "p",
          text:
            "You may ask for your data to be deleted. Order history is kept for the period the law " +
            "requires, for accounting and in case of a dispute.",
        },

        { t: "h2", id: "nizo", text: "10. Resolving disputes" },
        {
          t: "p",
          text:
            "Both sides try to settle a dispute by negotiation first. Send your enquiry in writing — " +
            "through support in the bot or by email — and it will be reviewed within 15 days.",
        },
        {
          t: "p",
          text:
            "If no agreement is reached, the dispute is resolved under the laws of the Republic of " +
            "Uzbekistan, which also govern this offer.",
        },

        { t: "h2", id: "amal", text: "11. Validity and changes" },
        {
          t: "p",
          text:
            "This offer takes effect when published on this page and stays in force indefinitely. " +
            "GemPay may change the terms; a new version is published here and the " +
            "<strong>updated date</strong> at the top of the page changes with it.",
        },
        {
          t: "note",
          tone: "good",
          title: "An order already paid for keeps the older version",
          text:
            "A change in terms does not affect an order you have already paid for — the version in " +
            "force at the time of payment applies to it. New terms apply only to later orders.",
        },
        {
          t: "p",
          text: `You accept the current version by confirming payment in the bot. If you do not agree, do not use the service; the bot is <a href="${BOT_URL}" rel="nofollow noopener" target="_blank">@${BOT_USERNAME}</a>.`,
        },

        { t: "h2", id: "rekvizit", text: "12. Company details" },
        { t: "requisites" },
        { t: "contacts" },
      ],

      faq: [
        {
          q: "When exactly do I accept this offer?",
          a:
            "When you confirm payment in the bot. No separate signature or paper contract is " +
            "needed — that is how a public offer is accepted.",
        },
        {
          q: "Will I get a refund if I entered the wrong Player ID?",
          a:
            "No. The delivery goes to the account you specified, and in-game currency cannot be " +
            "taken back off an account. That is exactly why the nickname is shown before payment — " +
            "checking it is the only safeguard.",
        },
        {
          q: "Is GemPay an official partner of the game publishers?",
          a:
            "No. GemPay is an independent reseller. Game names and logos are the trademarks of their " +
            "owners, and decisions about account bans or game rules rest with the publisher.",
        },
        {
          q: "What happens if the terms change?",
          a:
            "A new version is published on this page and the updated date changes. Orders already " +
            "paid for keep the version that was in force when they were paid.",
        },
        {
          q: "Where do I get a receipt or proof of payment?",
          a:
            "Every order is kept in the bot's history: date, package, amount and status. If you need " +
            `anything further, message support: ${SUPPORT_URL}.`,
        },
      ],
    },
  },
};
