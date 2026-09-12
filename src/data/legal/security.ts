/**
 * To'lov xavfsizligi — `/tolov-xavfsizligi`.
 *
 * NEGA ALOHIDA SAHIFA: xalqaro to'lov tizimlari (МПС) savdo nuqtasidan
 * ikki narsani ochiq ko'rsatishni talab qiladi — qabul qilinadigan
 * tizimlar belgilari va 3-D Secure orqali qo'shimcha tasdiqlash. Bankka
 * esa firibgarlikka qarshi choralar tavsifi kerak: shubhali to'lov
 * qanday aniqlanadi va cheklanadi.
 *
 * MUHIM: bu sahifa faqat HAQIQATDA qo'llaniladigan choralarni sanaydi.
 * «Harbiy darajadagi shifrlash» kabi bo'sh iboralar ataylab yo'q — ular
 * tekshiruvda ham, foydalanuvchida ham ishonch qozonmaydi.
 */

import type { LegalDoc } from "./types";
import { SUPPORT_URL, localCards, intlCards, ACCEPTS_INTL_CARDS, localePath } from "../site";

const LOCAL = localCards.map((m) => m.name).join(" va ");
const LOCAL_RU = localCards.map((m) => m.name).join(" и ");
const LOCAL_EN = localCards.map((m) => m.name).join(" and ");
const INTL = intlCards.map((m) => m.name).join(", ");

/**
 * 3-D Secure bo'limi MA'LUMOTGA bog'langan.
 *
 * Hozir xalqaro karta qabul qilinmaydi, ya'ni «Visa'ni 3-D Secure bilan
 * tasdiqlaysiz» deb yozish yolg'on bo'lardi — bank tekshiruvida esa aynan
 * shunday nomuvofiqlik ko'zga tashlanadi. Shu bilan birga bo'limni
 * butunlay o'chirib tashlab ham bo'lmaydi: ekvayring kengayganda u
 * qaytishi kerak.
 *
 * Yechim: `site.ts` ga xalqaro karta qo'shilsa (`kind: "card-intl"`),
 * bayroq o'zi yonadi va to'liq 3-D Secure matni qaytadi. Kodga tegish
 * shart emas.
 */
const INTL_ON = ACCEPTS_INTL_CARDS;

export const SECURITY: LegalDoc = {
  slug: "tolov-xavfsizligi",
  icon: "lock",
  updated: "2026-09-09",

  locales: {
    // ------------------------------------------------------------ uz ----
    uz: {
      title: "To'lov xavfsizligi",
      metaTitle: "To'lov xavfsizligi — 3-D Secure va antifrod",
      metaDescription:
        "GemPay'da karta ma'lumotlari qanday himoyalanadi: 3-D Secure, OTP tasdiqlash, " +
        "PCI DSS talablari va firibgarlikka qarshi nazorat. Biz nimani hech qachon so'ramaymiz.",
      short: "To'lov xavfsizligi",
      answer:
        "GemPay karta ma'lumotlarini ko'rmaydi va saqlamaydi — ular to'lov tashkilotining " +
        "PCI DSS talablariga javob beruvchi himoyalangan sahifasiga kiritiladi. Xalqaro kartalar " +
        "3-D Secure bilan, mahalliy kartalar SMS orqali bir martalik kod bilan tasdiqlanadi. " +
        "Shubhali to'lovlar bank shartnomasiga muvofiq tekshiriladi.",

      body: [
        { t: "h2", id: "kim", text: "Karta ma'lumotlarini kim qayta ishlaydi" },
        {
          t: "p",
          text:
            "Karta raqami, amal qilish muddati va CVV kodi <strong>GemPay'ga umuman " +
            "kelmaydi</strong>. Ular to'g'ridan-to'g'ri to'lov tashkilotining himoyalangan " +
            "sahifasiga kiritiladi va o'sha yerda qoladi.",
        },
        {
          t: "facts",
          items: [
            { k: "Kim qayta ishlaydi", v: "O'zbekiston qonunchiligiga muvofiq faoliyat yurituvchi to'lov tashkiloti" },
            { k: "GemPay nimani ko'radi", v: "Faqat to'lov holati: o'tdi yoki o'tmadi" },
            { k: "Karta raqami saqlanadimi", v: "Yo'q — GemPay tizimlarida umuman bo'lmaydi" },
            { k: "Ulanish", v: "TLS shifrlangan kanal, HSTS majburiy" },
            { k: "Standart", v: "PCI DSS — kartalarni qayta ishlash bo'yicha xalqaro talab" },
          ],
        },
        {
          t: "note",
          tone: "info",
          title: "Bu saytda to'lov qabul qilinmaydi",
          text:
            "gempay.uz — tanishtiruvchi sayt. Bu yerda karta so'raydigan forma yo'q va hech " +
            "qachon bo'lmaydi. To'lov faqat Telegram'dagi Mini App ichida, to'lov " +
            "tashkilotining oynasida amalga oshiriladi.",
        },

        { t: "h2", id: "3ds", text: INTL_ON ? "3-D Secure — xalqaro kartalar uchun" : "Xalqaro kartalar va 3-D Secure" },
        ...(INTL_ON
          ? [

            {
              t: "p",
              text: `<strong>${INTL}</strong> kartalari bilan to'lov 3-D Secure protokoli orqali qo'shimcha tasdiqlanadi. Visa'da bu <strong>Visa Secure</strong>, Mastercard'da <strong>Mastercard Identity Check</strong> deb ataladi.`,
            },
            {
              t: "p",
              text:
                "3-D Secure to'lovni tasdiqlash huquqini <strong>kartani chiqargan bankka</strong> " +
                "beradi. Ya'ni karta raqamini bilgan odam ham, sizning bankingiz bergan tasdiqsiz " +
                "to'lovni yakunlay olmaydi.",
            },
            {
              t: "steps",
              items: [
                {
                  title: "Karta kiritiladi",
                  text: "To'lov tashkilotining himoyalangan sahifasida. GemPay bu ma'lumotni ko'rmaydi.",
                },
                {
                  title: "Bank tasdiq so'raydi",
                  text: "Sahifa kartani chiqargan bankka yo'naltiriladi: bank ilovasidagi push, SMS kodi yoki biometrika.",
                },
                {
                  title: "Siz tasdiqlaysiz",
                  text: "Tasdiq bank tomonida bo'ladi. Kod faqat sizga keladi va uni hech kimga aytish kerak emas.",
                },
                {
                  title: "To'lov yakunlanadi",
                  text: "Bank javobidan keyin to'lov o'tadi va buyurtma bajarilishga uzatiladi.",
                },
              ],
            },
            {
              t: "note",
              tone: "warn",
              title: "3-D Secure kodini hech kimga aytmang",
              text:
                "Bankdan kelgan bir martalik kod faqat siz uchun. GemPay xodimi ham, qo'llab-" +
                "quvvatlash ham bu kodni hech qachon so'ramaydi. Kimdir so'rasa — bu firibgarlik.",
            },
            ]
          : [
          {
            t: "p",
            text:
              "GemPay hozircha xalqaro to'lov tizimlari kartalarini qabul qilmaydi. " +
              "To'lov O'zbekiston kartalari va mahalliy hamyonlar orqali, so'mda o'tadi — " +
              "shuning uchun xorijiy karta ochish, valyuta konvertatsiyasi yoki VPN kerak emas.",
          },
          {
            t: "note",
            tone: "info",
            title: "3-D Secure nima va u qachon qo'llanadi",
            text:
              "3-D Secure — xalqaro kartalar uchun qo'shimcha tasdiqlash protokoli (Visa'da " +
              "<strong>Visa Secure</strong>, Mastercard'da <strong>Mastercard Identity Check</strong>). " +
              "U to'lovni tasdiqlash huquqini kartani chiqargan bankka beradi. Xalqaro kartalar " +
              "qabul qilina boshlaganda shu himoya majburiy bo'ladi va bu sahifada batafsil " +
              "yoziladi. Hozirgi to'lovlar quyidagi bo'limda tavsiflangan usulda tasdiqlanadi.",
          },
            ]),

        { t: "h2", id: "otp", text: `Mahalliy kartalar — ${LOCAL}` },
        {
          t: "p",
          text: `${LOCAL} kartalari 3-D Secure o'rniga SMS orqali yuboriladigan bir martalik kod (OTP) bilan tasdiqlanadi. Himoya mantig'i bir xil: to'lovni faqat telefoniga kod kelgan odam yakunlay oladi.`,
        },
        {
          t: "list",
          items: [
            "Kod kartaga bog'langan telefon raqamiga keladi.",
            "Kodning amal qilish muddati cheklangan — odatda bir necha daqiqa.",
            "Kod noto'g'ri kiritilsa to'lov o'tmaydi va pul yechilmaydi.",
            "Kutilmaganda kod kelsa — kimdir kartangizni ishlatmoqchi. Kodni kiritmang va bankingizga xabar bering.",
          ],
        },

        { t: "h2", id: "antifrod", text: "Firibgarlikka qarshi choralar" },
        {
          t: "p",
          text:
            "GemPay ekvayer bank bilan tuzilgan shartnomaga muvofiq to'lovlarni nazorat qiladi. " +
            "Maqsad ikki tomonlama: kartadorni o'z mablag'i noqonuniy ishlatilishidan, xizmatni " +
            "esa firibgarlikdan himoya qilish.",
        },
        {
          t: "list",
          items: [
            "<strong>To'lov monitoringi</strong> — g'ayrioddiy chastota, summa va takrorlanish alomatlari kuzatiladi.",
            "<strong>Limitlar</strong> — bitta hisob va bitta karta uchun sutkalik chegara qo'llaniladi.",
            "<strong>Qo'shimcha tasdiqlash</strong> — shubha tug'ilsa 3-D Secure yoki OTP majburiy bo'ladi.",
            "<strong>Vaqtincha to'xtatish</strong> — shubhali buyurtma tekshiruv tugagunicha ushlab turiladi.",
            "<strong>Rad etish</strong> — firibgarlik alomati tasdiqlansa xizmat ko'rsatilmaydi, mablag' to'lov manbaiga qaytariladi.",
            "<strong>Bank bilan almashinuv</strong> — nizoli to'lov (chargeback) bo'yicha bank so'roviga hujjat bilan javob beriladi.",
          ],
        },
        {
          t: "note",
          tone: "info",
          title: "Tekshiruv qancha davom etadi",
          text:
            "Aksariyat buyurtmalar avtomatik o'tadi va tekshiruv sezilmaydi. Qo'lda ko'rib " +
            "chiqish kerak bo'lsa, bu odatda bir necha soat, eng ko'pi bilan 3 ish kuni davom " +
            "etadi. Natijasi qanday bo'lishidan qat'i nazar, sizga xabar beriladi.",
        },

        { t: "h2", id: "shubha", text: "Shubhali to'lov aniqlansa nima bo'ladi" },
        {
          t: "table",
          caption: "Nazorat natijasi bo'yicha harakatlar",
          head: ["Alomat", "Choralar", "Foydalanuvchi uchun natija"],
          rows: [
            ["Qisqa vaqtda ko'p urinish", "Karta vaqtincha cheklanadi", "Biroz kutish, keyin qayta urinish"],
            ["Karta egasi tasdiqlamagan to'lov", "Buyurtma to'xtatiladi, bank xabardor qilinadi", "Mablag' manbaga qaytariladi"],
            ["Bitta kartadan ko'p turli hisoblar", "Qo'shimcha tekshiruv", "Tasdiqlash so'ralishi mumkin"],
            ["Chargeback so'rovi", "Bankka hujjatlar taqdim etiladi", "Natija bank qaroriga bog'liq"],
          ],
        },
        {
          t: "p",
          text: `Buyurtmangiz xato to'xtatilgan deb hisoblasangiz — buyurtma raqami bilan qo'llab-quvvatlashga yozing: ${SUPPORT_URL}. Tekshiruv natijasi tushuntiriladi.`,
        },

        { t: "h2", id: "soramaymiz", text: "Biz hech qachon so'ramaydigan narsalar" },
        {
          t: "list",
          items: [
            "O'yin hisobingiz <strong>paroli</strong> yoki unga kirish ma'lumotlari.",
            "Karta <strong>PIN kodi</strong> yoki orqasidagi <strong>CVV</strong>.",
            "Bankdan yoki Telegram'dan kelgan <strong>bir martalik kod</strong>.",
            "Elektron pochta yoki Telegram hisobining paroli.",
            "Kartangiz to'liq surati yoki hujjat nusxasi — Telegram orqali.",
          ],
        },
        {
          t: "note",
          tone: "warn",
          title: "To'ldirish uchun faqat ochiq Player ID kerak",
          text:
            "Bu — o'yin profilingizda har kim ko'radigan raqam. Uni bilgan odam sizga narsa " +
            "yubora oladi, lekin hisobingizga KIRA OLMAYDI. Boshqa hech narsa so'ralmaydi.",
        },

        { t: "h2", id: "tavsiya", text: "Kartadorga tavsiyalar" },
        {
          t: "list",
          items: [
            "Kartangizda 3-D Secure yoki SMS xabarnoma yoqilganini tekshiring — bu eng arzon himoya.",
            "To'lovlar uchun alohida karta yoki cheklangan limitli virtual kartadan foydalaning.",
            "Buyurtmadan keyin bank xabarnomasidagi summani ekrandagi summa bilan solishtiring.",
            "Notanish to'lov ko'rsangiz avval bankingizga, so'ng bizga xabar bering.",
            "GemPay nomidan yozgan «yordamchi» dan ehtiyot bo'ling — rasmiy kanal bitta: " +
              `<a href="${SUPPORT_URL}" rel="nofollow noopener" target="_blank">qo'llab-quvvatlash</a>.`,
          ],
        },
        {
          t: "links",
          title: "Tegishli sahifalar",
          items: [
            { label: "To'lov va pulni qaytarish", href: `${localePath("uz", "tolov-va-qaytarish")}` },
            { label: "Ommaviy oferta", href: `${localePath("uz", "oferta")}` },
            { label: "Aloqa", href: `${localePath("uz", "aloqa")}` },
          ],
        },
      ],

      faq: [
        {
          q: "GemPay karta raqamimni ko'radimi?",
          a:
            "Yo'q. Karta ma'lumotlari to'lov tashkilotining himoyalangan sahifasiga kiritiladi va " +
            "o'sha yerda qoladi. GemPay faqat to'lov o'tgan-o'tmaganini biladi.",
        },
        {
          q: "3-D Secure nima va u menga nima beradi?",
          a:
            "Bu xalqaro kartalar uchun qo'shimcha tasdiqlash bosqichi: to'lovni yakunlash uchun " +
            "kartani chiqargan bank sizdan tasdiq so'raydi. Karta raqamini bilgan begona odam " +
            "shu bosqichdan o'ta olmaydi.",
        },
        {
          q: "Nega buyurtmam tekshiruvga tushdi?",
          a:
            "Bank shartnomasiga muvofiq shubhali alomatlar — g'ayrioddiy chastota, takrorlanuvchi " +
            "urinishlar yoki mos kelmaydigan ma'lumot — qo'lda ko'rib chiqishni talab qiladi. " +
            "Bu odatda bir necha soat, eng ko'pi 3 ish kuni davom etadi.",
        },
        {
          q: "SMS kodini qo'llab-quvvatlashga aytsam bo'ladimi?",
          a:
            "Hech qachon. GemPay xodimi bir martalik kodni hech qanday sababda so'ramaydi. " +
            "Kod so'ragan har qanday odam — firibgar, hatto GemPay nomidan yozgan bo'lsa ham.",
        },
        {
          q: "Kartamdan roziligimsiz pul yechilgan bo'lsa nima qilay?",
          a:
            "Avval kartangiz bankiga murojaat qiling va kartani bloklang. Keyin bizga buyurtma " +
            "vaqti va summasi bilan yozing — tekshiruvda bank bilan hamkorlik qilamiz.",
        },
      ],
    },

    // ------------------------------------------------------------ ru ----
    ru: {
      title: "Безопасность платежей",
      metaTitle: "Безопасность платежей — 3-D Secure и антифрод",
      metaDescription:
        "Как защищены данные карты в GemPay: 3-D Secure, подтверждение по OTP, требования " +
        "PCI DSS и контроль подозрительных операций. Что мы никогда не спрашиваем.",
      short: "Безопасность платежей",
      answer:
        "GemPay не видит и не хранит данные карты — они вводятся на защищённой странице платёжной " +
        "организации, отвечающей требованиям PCI DSS. Международные карты подтверждаются через " +
        "3-D Secure, местные — одноразовым кодом по SMS. Подозрительные платежи проверяются в " +
        "соответствии с договором с банком.",

      body: [
        { t: "h2", id: "kim", text: "Кто обрабатывает данные карты" },
        {
          t: "p",
          text:
            "Номер карты, срок действия и CVV <strong>вообще не поступают в GemPay</strong>. " +
            "Они вводятся непосредственно на защищённой странице платёжной организации и " +
            "остаются там.",
        },
        {
          t: "facts",
          items: [
            { k: "Кто обрабатывает", v: "Платёжная организация, действующая по законодательству Узбекистана" },
            { k: "Что видит GemPay", v: "Только статус платежа: прошёл или нет" },
            { k: "Хранится ли номер карты", v: "Нет — его нет в системах GemPay вообще" },
            { k: "Соединение", v: "Шифрованный канал TLS, обязательный HSTS" },
            { k: "Стандарт", v: "PCI DSS — международное требование к обработке карт" },
          ],
        },
        {
          t: "note",
          tone: "info",
          title: "На этом сайте оплата не принимается",
          text:
            "gempay.uz — витрина. Здесь нет формы, запрашивающей карту, и никогда не будет. " +
            "Оплата проходит только в Mini App внутри Telegram, в окне платёжной организации.",
        },

        { t: "h2", id: "3ds", text: INTL_ON ? "3-D Secure — для международных карт" : "Международные карты и 3-D Secure" },
        ...(INTL_ON
          ? [

            {
              t: "p",
              text: `Платежи картами <strong>${INTL}</strong> дополнительно подтверждаются по протоколу 3-D Secure. У Visa он называется <strong>Visa Secure</strong>, у Mastercard — <strong>Mastercard Identity Check</strong>.`,
            },
            {
              t: "p",
              text:
                "3-D Secure передаёт право подтвердить платёж <strong>банку, выпустившему карту</strong>. " +
                "То есть даже тот, кто знает номер карты, не завершит платёж без подтверждения, " +
                "полученного от вашего банка.",
            },
            {
              t: "steps",
              items: [
                {
                  title: "Ввод карты",
                  text: "На защищённой странице платёжной организации. GemPay этих данных не видит.",
                },
                {
                  title: "Банк запрашивает подтверждение",
                  text: "Страница перенаправляется в банк-эмитент: push в приложении, код по SMS или биометрия.",
                },
                {
                  title: "Вы подтверждаете",
                  text: "Подтверждение происходит на стороне банка. Код приходит только вам, и сообщать его никому не нужно.",
                },
                {
                  title: "Платёж завершается",
                  text: "После ответа банка платёж проходит, а заказ уходит на исполнение.",
                },
              ],
            },
            {
              t: "note",
              tone: "warn",
              title: "Никому не сообщайте код 3-D Secure",
              text:
                "Одноразовый код от банка предназначен только вам. Ни сотрудник GemPay, ни поддержка " +
                "никогда его не спрашивают. Если кто-то просит код — это мошенничество.",
            },
            ]
          : [
          {
            t: "p",
            text:
              "GemPay пока не принимает карты международных платёжных систем. Оплата проходит " +
              "картами Узбекистана и местными кошельками, в сумах — поэтому не нужны ни " +
              "зарубежная карта, ни конвертация валюты, ни VPN.",
          },
          {
            t: "note",
            tone: "info",
            title: "Что такое 3-D Secure и когда он применяется",
            text:
              "3-D Secure — протокол дополнительного подтверждения для международных карт (у Visa " +
              "это <strong>Visa Secure</strong>, у Mastercard — <strong>Mastercard Identity Check</strong>). " +
              "Он передаёт право подтвердить платёж банку-эмитенту. Когда приём международных карт " +
              "будет подключён, эта защита станет обязательной и будет описана здесь подробно. " +
              "Текущие платежи подтверждаются способом, описанным в следующем разделе.",
          },
            ]),

        { t: "h2", id: "otp", text: `Местные карты — ${LOCAL_RU}` },
        {
          t: "p",
          text: `Карты ${LOCAL_RU} подтверждаются не через 3-D Secure, а одноразовым кодом по SMS (OTP). Логика защиты та же: завершить платёж может только тот, кому пришёл код.`,
        },
        {
          t: "list",
          items: [
            "Код приходит на номер телефона, привязанный к карте.",
            "Срок действия кода ограничен — обычно несколько минут.",
            "Если код введён неверно, платёж не проходит и деньги не списываются.",
            "Если код пришёл неожиданно — кто-то пытается воспользоваться вашей картой. Не вводите его и сообщите в банк.",
          ],
        },

        { t: "h2", id: "antifrod", text: "Меры против мошенничества" },
        {
          t: "p",
          text:
            "GemPay контролирует платежи в соответствии с договором, заключённым с банком-эквайером. " +
            "Цель двойная: защитить держателя карты от незаконного использования его средств, а " +
            "сервис — от мошенничества.",
        },
        {
          t: "list",
          items: [
            "<strong>Мониторинг платежей</strong> — отслеживаются необычная частота, суммы и повторы.",
            "<strong>Лимиты</strong> — применяется суточное ограничение на один аккаунт и одну карту.",
            "<strong>Дополнительное подтверждение</strong> — при подозрении 3-D Secure или OTP становится обязательным.",
            "<strong>Временная приостановка</strong> — подозрительный заказ удерживается до завершения проверки.",
            "<strong>Отказ</strong> — при подтверждении признаков мошенничества услуга не оказывается, средства возвращаются на источник платежа.",
            "<strong>Обмен с банком</strong> — по спорным платежам (chargeback) на запрос банка предоставляются документы.",
          ],
        },
        {
          t: "note",
          tone: "info",
          title: "Сколько длится проверка",
          text:
            "Большинство заказов проходит автоматически, и проверка незаметна. Если нужен ручной " +
            "разбор, он обычно занимает несколько часов, максимум 3 рабочих дня. О результате " +
            "сообщается в любом случае.",
        },

        { t: "h2", id: "shubha", text: "Что происходит при подозрительном платеже" },
        {
          t: "table",
          caption: "Действия по результатам контроля",
          head: ["Признак", "Меры", "Результат для пользователя"],
          rows: [
            ["Много попыток за короткое время", "Карта временно ограничивается", "Подождать и повторить"],
            ["Платёж не подтверждён держателем карты", "Заказ останавливается, банк уведомляется", "Средства возвращаются на источник"],
            ["С одной карты много разных аккаунтов", "Дополнительная проверка", "Может потребоваться подтверждение"],
            ["Запрос chargeback", "В банк передаются документы", "Результат зависит от решения банка"],
          ],
        },
        {
          t: "p",
          text: `Если считаете, что заказ остановлен по ошибке, напишите в поддержку с номером заказа: ${SUPPORT_URL}. Результат проверки будет разъяснён.`,
        },

        { t: "h2", id: "soramaymiz", text: "Что мы никогда не спрашиваем" },
        {
          t: "list",
          items: [
            "<strong>Пароль</strong> от игрового аккаунта или данные для входа в него.",
            "<strong>PIN-код</strong> карты или <strong>CVV</strong> с её оборота.",
            "<strong>Одноразовый код</strong> из банка или из Telegram.",
            "Пароль от электронной почты или аккаунта Telegram.",
            "Полное фото карты или скан документа — через Telegram.",
          ],
        },
        {
          t: "note",
          tone: "warn",
          title: "Для пополнения нужен только открытый Player ID",
          text:
            "Это число, которое в игровом профиле видит каждый. Знающий его может отправить вам " +
            "что-то, но ВОЙТИ в аккаунт не сможет. Ничего другого не запрашивается.",
        },

        { t: "h2", id: "tavsiya", text: "Рекомендации держателю карты" },
        {
          t: "list",
          items: [
            "Проверьте, что на карте включены 3-D Secure или SMS-уведомления — это самая дешёвая защита.",
            "Используйте для платежей отдельную карту или виртуальную с ограниченным лимитом.",
            "После заказа сверьте сумму в уведомлении банка с суммой на экране.",
            "Увидев незнакомый платёж, сначала сообщите в банк, затем нам.",
            "Остерегайтесь «помощников», пишущих от имени GemPay — официальный канал один: " +
              `<a href="${SUPPORT_URL}" rel="nofollow noopener" target="_blank">поддержка</a>.`,
          ],
        },
        {
          t: "links",
          title: "Связанные страницы",
          items: [
            { label: "Оплата и возврат средств", href: `${localePath("ru", "tolov-va-qaytarish")}` },
            { label: "Публичная оферта", href: `${localePath("ru", "oferta")}` },
            { label: "Контакты", href: `${localePath("ru", "aloqa")}` },
          ],
        },
      ],

      faq: [
        {
          q: "Видит ли GemPay номер моей карты?",
          a:
            "Нет. Данные карты вводятся на защищённой странице платёжной организации и остаются " +
            "там. GemPay знает только, прошёл платёж или нет.",
        },
        {
          q: "Что такое 3-D Secure и что он мне даёт?",
          a:
            "Это дополнительный шаг подтверждения для международных карт: чтобы завершить платёж, " +
            "банк-эмитент запрашивает подтверждение у вас. Посторонний, знающий номер карты, этот " +
            "шаг не пройдёт.",
        },
        {
          q: "Почему мой заказ попал на проверку?",
          a:
            "В соответствии с договором с банком подозрительные признаки — необычная частота, " +
            "повторяющиеся попытки или несовпадающие данные — требуют ручного разбора. Обычно это " +
            "несколько часов, максимум 3 рабочих дня.",
        },
        {
          q: "Можно ли сообщить код из SMS поддержке?",
          a:
            "Никогда. Сотрудник GemPay не запрашивает одноразовый код ни при каких обстоятельствах. " +
            "Любой, кто просит код, — мошенник, даже если пишет от имени GemPay.",
        },
        {
          q: "С карты списали деньги без моего согласия. Что делать?",
          a:
            "Сначала обратитесь в банк вашей карты и заблокируйте её. Затем напишите нам, указав " +
            "время и сумму операции — при проверке мы сотрудничаем с банком.",
        },
      ],
    },

    // ------------------------------------------------------------ en ----
    en: {
      title: "Payment security",
      metaTitle: "Payment security — 3-D Secure and anti-fraud",
      metaDescription:
        "How card data is protected at GemPay: 3-D Secure, OTP confirmation, PCI DSS " +
        "requirements and monitoring of suspicious payments. What we will never ask you for.",
      short: "Payment security",
      answer:
        "GemPay never sees or stores card data — it is entered on the payment organisation's " +
        "secure page, which meets PCI DSS requirements. International cards are confirmed through " +
        "3-D Secure and local cards by a one-time SMS code. Suspicious payments are reviewed under " +
        "the agreement with the acquiring bank.",

      body: [
        { t: "h2", id: "kim", text: "Who processes card data" },
        {
          t: "p",
          text:
            "The card number, expiry date and CVV <strong>never reach GemPay</strong>. They are " +
            "entered directly on the payment organisation's secure page and stay there.",
        },
        {
          t: "facts",
          items: [
            { k: "Who processes it", v: "A payment organisation operating under Uzbek law" },
            { k: "What GemPay sees", v: "Only the payment status: approved or declined" },
            { k: "Is the card number stored", v: "No — it never exists in GemPay's systems" },
            { k: "Connection", v: "TLS-encrypted, HSTS enforced" },
            { k: "Standard", v: "PCI DSS — the international requirement for card processing" },
          ],
        },
        {
          t: "note",
          tone: "info",
          title: "No payment is taken on this site",
          text:
            "gempay.uz is a shopfront. There is no form here that asks for a card, and there never " +
            "will be. Payment happens only inside the Telegram Mini App, in the payment " +
            "organisation's own window.",
        },

        { t: "h2", id: "3ds", text: INTL_ON ? "3-D Secure — for international cards" : "International cards and 3-D Secure" },
        ...(INTL_ON
          ? [

            {
              t: "p",
              text: `Payments with <strong>${INTL}</strong> cards are additionally confirmed through the 3-D Secure protocol. Visa calls it <strong>Visa Secure</strong>; Mastercard calls it <strong>Mastercard Identity Check</strong>.`,
            },
            {
              t: "p",
              text:
                "3-D Secure hands the right to approve a payment to <strong>the bank that issued the " +
                "card</strong>. So even someone who knows the card number cannot complete a payment " +
                "without the confirmation your bank asks you for.",
            },
            {
              t: "steps",
              items: [
                {
                  title: "The card is entered",
                  text: "On the payment organisation's secure page. GemPay does not see these details.",
                },
                {
                  title: "The bank asks for confirmation",
                  text: "The page hands off to the issuing bank: a push in its app, an SMS code, or biometrics.",
                },
                {
                  title: "You confirm",
                  text: "Confirmation happens on the bank's side. The code goes only to you, and you never need to share it.",
                },
                {
                  title: "The payment completes",
                  text: "Once the bank answers, the payment goes through and the order moves to fulfilment.",
                },
              ],
            },
            {
              t: "note",
              tone: "warn",
              title: "Never share a 3-D Secure code",
              text:
                "The one-time code from your bank is for you alone. No GemPay staff member and no " +
                "support agent will ever ask for it. If someone asks, it is fraud.",
            },
            ]
          : [
          {
            t: "p",
            text:
              "GemPay does not currently accept international payment system cards. Payment goes " +
              "through Uzbek cards and local wallets, in som — so there is no need for a foreign " +
              "card, currency conversion or a VPN.",
          },
          {
            t: "note",
            tone: "info",
            title: "What 3-D Secure is, and when it applies",
            text:
              "3-D Secure is the extra confirmation protocol for international cards (Visa calls it " +
              "<strong>Visa Secure</strong>, Mastercard <strong>Mastercard Identity Check</strong>). " +
              "It hands the right to approve a payment to the issuing bank. If international cards " +
              "are enabled, that protection becomes mandatory and will be described here in full. " +
              "Payments today are confirmed the way the next section describes.",
          },
            ]),

        { t: "h2", id: "otp", text: `Local cards — ${LOCAL_EN}` },
        {
          t: "p",
          text: `${LOCAL_EN} cards are confirmed with a one-time SMS code (OTP) rather than 3-D Secure. The protection works the same way: only the person who received the code can complete the payment.`,
        },
        {
          t: "list",
          items: [
            "The code goes to the phone number linked to the card.",
            "It expires quickly — usually within a few minutes.",
            "If the code is wrong the payment fails and no money is taken.",
            "If a code arrives unexpectedly, someone is trying to use your card. Do not enter it; tell your bank.",
          ],
        },

        { t: "h2", id: "antifrod", text: "Anti-fraud measures" },
        {
          t: "p",
          text:
            "GemPay monitors payments under the agreement it has with the acquiring bank. The aim " +
            "runs both ways: protecting cardholders from unauthorised use of their money, and " +
            "protecting the service from fraud.",
        },
        {
          t: "list",
          items: [
            "<strong>Payment monitoring</strong> — unusual frequency, amounts and repeat patterns are watched.",
            "<strong>Limits</strong> — a daily cap applies per account and per card.",
            "<strong>Step-up authentication</strong> — where there is doubt, 3-D Secure or OTP becomes mandatory.",
            "<strong>Temporary hold</strong> — a suspicious order is held until the review finishes.",
            "<strong>Refusal</strong> — where fraud is confirmed the service is not provided and the money returns to its source.",
            "<strong>Cooperation with the bank</strong> — on disputed payments (chargebacks) documents are supplied at the bank's request.",
          ],
        },
        {
          t: "note",
          tone: "info",
          title: "How long a review takes",
          text:
            "Most orders pass automatically and the check is invisible. Where a manual review is " +
            "needed it usually takes a few hours, and at most 3 working days. You are told the " +
            "outcome either way.",
        },

        { t: "h2", id: "shubha", text: "What happens with a suspicious payment" },
        {
          t: "table",
          caption: "Action taken after a check",
          head: ["Signal", "Measure", "What it means for you"],
          rows: [
            ["Many attempts in a short window", "The card is temporarily restricted", "Wait, then try again"],
            ["Payment not confirmed by the cardholder", "Order stopped, bank notified", "Money returns to its source"],
            ["One card across many different accounts", "Additional review", "Confirmation may be requested"],
            ["Chargeback request", "Documents supplied to the bank", "Outcome rests with the bank"],
          ],
        },
        {
          t: "p",
          text: `If you believe an order was stopped in error, message support with the order number: ${SUPPORT_URL}. You will get an explanation of the result.`,
        },

        { t: "h2", id: "soramaymiz", text: "What we will never ask for" },
        {
          t: "list",
          items: [
            "The <strong>password</strong> to your game account, or any way to log into it.",
            "Your card <strong>PIN</strong> or the <strong>CVV</strong> on the back.",
            "A <strong>one-time code</strong> from your bank or from Telegram.",
            "Your email or Telegram account password.",
            "A full photo of your card or a scan of your ID — over Telegram.",
          ],
        },
        {
          t: "note",
          tone: "warn",
          title: "A top-up needs only the public Player ID",
          text:
            "That is the number everyone can see on your game profile. Someone who knows it can " +
            "send you something, but cannot LOG IN to your account. Nothing else is ever needed.",
        },

        { t: "h2", id: "tavsiya", text: "Advice for cardholders" },
        {
          t: "list",
          items: [
            "Check that 3-D Secure or SMS alerts are switched on for your card — the cheapest protection there is.",
            "Use a separate card for payments, or a virtual one with a low limit.",
            "After ordering, compare the amount in your bank alert with the amount on screen.",
            "If you see a payment you do not recognise, tell your bank first, then us.",
            "Be wary of anyone offering help in GemPay's name — there is one official channel: " +
              `<a href="${SUPPORT_URL}" rel="nofollow noopener" target="_blank">support</a>.`,
          ],
        },
        {
          t: "links",
          title: "Related pages",
          items: [
            { label: "Payments and refunds", href: `${localePath("en", "tolov-va-qaytarish")}` },
            { label: "Public offer", href: `${localePath("en", "oferta")}` },
            { label: "Contact", href: `${localePath("en", "aloqa")}` },
          ],
        },
      ],

      faq: [
        {
          q: "Does GemPay see my card number?",
          a:
            "No. Card details are entered on the payment organisation's secure page and stay there. " +
            "GemPay only learns whether the payment succeeded.",
        },
        {
          q: "What is 3-D Secure and what does it do for me?",
          a:
            "It is an extra confirmation step for international cards: to complete a payment, the " +
            "issuing bank asks you to approve it. A stranger who knows your card number cannot get " +
            "past that step.",
        },
        {
          q: "Why was my order put under review?",
          a:
            "Under the agreement with the bank, suspicious signals — unusual frequency, repeated " +
            "attempts or mismatched details — require a manual look. That usually takes a few " +
            "hours, at most 3 working days.",
        },
        {
          q: "Can I give the SMS code to support?",
          a:
            "Never. No GemPay agent asks for a one-time code under any circumstances. Anyone who " +
            "asks for one is a fraudster, even if they write in GemPay's name.",
        },
        {
          q: "Money was taken from my card without my consent. What should I do?",
          a:
            "Contact your card's bank first and block the card. Then write to us with the time and " +
            "amount of the transaction — we cooperate with the bank during the investigation.",
        },
      ],
    },
  },
};
