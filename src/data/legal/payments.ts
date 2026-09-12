/**
 * To'lov va pulni qaytarish — `/tolov-va-qaytarish`.
 *
 * NEGA ALOHIDA SAHIFA: ekvayer bank «to'lov va qaytarish tartibi» ni
 * ofertadan alohida, oddiy tilda ko'rishni so'raydi — kartador uzun
 * huquqiy matnni o'qimasligi mumkin. Bu sahifa aynan shu ehtiyoj uchun:
 * savol → javob, jadval, aniq muddat.
 *
 * MUHIM: bu yerdagi har bir muddat va shart ofertadagi bilan BIR XIL
 * bo'lishi shart. Ikki sahifa bir-biriga zid gapirsa, nizoda foydali
 * bo'lgani emas, foydalanuvchi uchun qulayi qo'llaniladi — bu esa doim
 * saytga qarshi ishlaydi.
 */

import type { LegalDoc } from "./types";
import { SUPPORT_URL, localCards, walletMethods, localePath } from "../site";

const LOCAL = localCards.map((m) => m.name).join(", ");

/**
 * Hamyonlar hudud bo'yicha ajratiladi: O'zbekistondagi foydalanuvchi
 * uchun Click va Uzum Bank, Rossiyadagi uchun SBP. Ularni bitta qatorga
 * qo'shib yuborish jadvalni chalg'ituvchi qilardi — o'zbek foydalanuvchi
 * o'ziga tegishli bo'lmagan usulni izlab qolardi.
 */
const WALLET = walletMethods
  .filter((m) => m.region === "UZ")
  .map((m) => m.name)
  .join(", ");
const WALLET_RU = walletMethods
  .filter((m) => m.region === "RU")
  .map((m) => m.name)
  .join(", ");

export const PAYMENTS: LegalDoc = {
  slug: "tolov-va-qaytarish",
  icon: "rotate-ccw",
  updated: "2026-09-09",

  locales: {
    // ------------------------------------------------------------ uz ----
    uz: {
      title: "To'lov va pulni qaytarish",
      metaTitle: "To'lov va pulni qaytarish tartibi",
      metaDescription:
        "GemPay'da qanday to'lash mumkin: UzCard, HUMO, Click va Uzum Bank. " +
        "Pul qaysi hollarda qaytariladi, arizani qanday berish va mablag' necha kunda tushadi.",
      short: "To'lov va qaytarish",
      answer:
        "GemPay'da to'lov O'zbekiston so'mida qabul qilinadi: UzCard, HUMO, " +
        "Click va Uzum Bank. Buyurtma bajarilmasa pul to'liq qaytariladi — ariza 3 ish kunida " +
        "ko'rib chiqiladi va mablag' to'lov qilingan usulga qaytariladi. Kredit hisobga tushib " +
        "bo'lgan buyurtma qaytarilmaydi.",

      body: [
        { t: "h2", id: "usullar", text: "Qanday to'lash mumkin" },
        {
          t: "p",
          text:
            "To'lov O'zbekiston so'mida qabul qilinadi. Valyuta konvertatsiyasi talab " +
            "qilinmaydi, kriptovalyuta ham kerak emas.",
        },
        { t: "paymarks" },
        {
          t: "table",
          caption: "Qabul qilinadigan to'lov usullari",
          head: ["Usul", "Turi", "Tasdiqlash"],
          rows: [
            [LOCAL, "O'zbekiston bank kartasi", "SMS orqali bir martalik kod (OTP)"],
            [WALLET, "Hamyon va bank ilovasi", "Ilovadagi tasdiq"],
            [WALLET_RU, "Rossiyadan to'lov", "Bank ilovasidagi tasdiq"],
            ["Bot balansi", "Botdagi ichki hisob", "Qo'shimcha tasdiq kerak emas"],
          ],
        },
        {
          t: "note",
          tone: "info",
          title: "To'lov botda amalga oshiriladi",
          text:
            "Bu sayt tanishtiruvchi sahifa — bu yerda to'lov qabul qilinmaydi. Buyurtma va " +
            "to'lov Telegram'dagi Mini App ichida bo'ladi, karta ma'lumotlari esa to'lov " +
            "tashkilotining himoyalangan sahifasiga kiritiladi.",
        },

        { t: "h2", id: "qanday", text: "To'lov qanday o'tadi" },
        {
          t: "steps",
          items: [
            {
              title: "Paket tanlanadi",
              text: "So'mdagi aniq summa to'lovdan oldin ekranda ko'rinadi. Yashirin komissiya qo'shilmaydi.",
            },
            {
              title: "Player ID tekshiriladi",
              text: "Tizim nikni o'yin serveridan bepul so'rab oladi. Nik noto'g'ri bo'lsa — to'lovni tasdiqlamang.",
            },
            {
              title: "To'lov usuli tanlanadi",
              text: "Karta yoki hamyon tanlanadi va tasdiqlash so'raladi: OTP kodi, 3-D Secure yoki hamyon ilovasi.",
            },
            {
              title: "Kredit yetkaziladi",
              text: "Tasdiqdan keyin buyurtma provayderga uzatiladi. Odatda 1-5 daqiqa, holat botda ko'rinadi.",
            },
          ],
        },

        { t: "h2", id: "chek", text: "Chek va buyurtma tarixi" },
        {
          t: "p",
          text:
            "Har bir buyurtma botdagi tarixda saqlanadi: sana, o'yin, paket, so'mdagi summa, " +
            "Player ID va holat. Bu yozuv to'lov tasdig'i vazifasini bajaradi va nizoda asosiy " +
            "hujjat hisoblanadi.",
        },
        {
          t: "list",
          items: [
            "Bank tomonidagi chek — kartangiz ilovasida yoki SMS xabarida bo'ladi.",
            "Buyurtma raqami har bir murojaatda kerak bo'ladi — uni tarixdan oling.",
            "Qo'shimcha tasdiq kerak bo'lsa qo'llab-quvvatlashga yozing.",
          ],
        },

        { t: "h2", id: "qaytarish", text: "Pul qaysi hollarda qaytariladi" },
        {
          t: "p",
          text:
            "Asosiy qoida sodda: <strong>xizmat bajarilmagan bo'lsa — pul qaytariladi</strong>. " +
            "Bajarilgan buyurtma qaytarilmaydi, chunki o'yin hisobiga tushgan ichki valyutani " +
            "texnik jihatdan olib bo'lmaydi.",
        },
        {
          t: "table",
          caption: "Holat bo'yicha qaror",
          head: ["Holat", "Qaytariladimi", "Muddat"],
          rows: [
            ["To'lov o'tdi, kredit tushmadi", "+", "Ariza ko'rib chiqilgach, 1-10 ish kuni"],
            ["Provayder buyurtmani rad etdi", "+", "Avtomatik, qo'shimcha ariza kerak emas"],
            ["Texnik nosozlik tufayli buyurtma uzildi", "+", "Ariza ko'rib chiqilgach"],
            ["24 soatda yetkazilmadi", "+", "Bajarilmagan hisoblanadi"],
            ["Ikki marta to'lov o'tib ketdi", "+", "Ortiqchasi to'liq qaytariladi"],
            ["Kredit tushdi, foydalanuvchi fikridan qaytdi", "-", "Qaytarilmaydi"],
            ["Xato Player ID kiritildi, kredit boshqa hisobga tushdi", "-", "Qaytarilmaydi"],
            ["O'yin akkaunti nashriyot tomonidan bloklandi", "-", "Nashriyot qarori"],
          ],
        },

        { t: "h2", id: "ariza", text: "Qaytarishni qanday so'rash kerak" },
        {
          t: "list",
          ordered: true,
          items: [
            "Botdagi qo'llab-quvvatlashga yoki elektron pochtaga yozing.",
            "<strong>Buyurtma raqamini</strong>, sanasini va to'lov usulini ko'rsating.",
            "Muammoni qisqacha yozing: nima kutilgan edi va nima bo'ldi.",
            "Kerak bo'lsa o'yin ichidagi ekran rasmini biriktiring.",
            "Ariza <strong>3 ish kuni</strong> ichida ko'rib chiqiladi va javob beriladi.",
          ],
        },
        {
          t: "note",
          tone: "good",
          title: "Pul to'lagan usulingizga qaytadi",
          text:
            "Karta bilan to'lagan bo'lsangiz — o'sha kartaga, hamyon bilan to'lagan bo'lsangiz — " +
            "o'sha hamyonga. Boshqa rekvizitga o'tkazish mumkin emas: bu firibgarlikka qarshi " +
            "qoida va bank shartnomasi talabi.",
        },

        { t: "h2", id: "muddat", text: "Muddatlar" },
        {
          t: "facts",
          items: [
            { k: "Ariza ko'rib chiqiladi", v: "3 ish kunigacha" },
            { k: "Qaytarish boshlanadi", v: "Ijobiy qarordan keyin darhol" },
            { k: "Kartaga tushadi", v: "1-10 ish kuni — bankka bog'liq" },
            { k: "Hamyonga tushadi", v: "Odatda 1-3 ish kuni" },
            { k: "Ariza qabul qilinadi", v: "To'lov sanasidan 30 kun ichida" },
          ],
        },
        {
          t: "p",
          text:
            "Qaytarish boshlangach mablag'ning kelib tushishi <strong>bankka bog'liq</strong> va " +
            "GemPay bu bosqichni tezlashtira olmaydi. 10 ish kunidan keyin ham pul kelmasa — " +
            "avval kartangiz bankiga murojaat qiling, keyin bizga yozing.",
        },

        { t: "h2", id: "qaytarilmaydi", text: "Qaytarilmaydigan hollar" },
        {
          t: "list",
          items: [
            "Kredit siz ko'rsatgan hisobga <strong>tushib bo'lgan</strong> bo'lsa — buyurtma bajarilgan hisoblanadi.",
            "Player ID xato kiritilgan va kredit boshqa o'yinchiga tushgan bo'lsa. To'lovdan oldin nik aynan shuning uchun ko'rsatiladi.",
            "O'yin akkaunti nashriyot tomonidan bloklangan bo'lsa — bu GemPay ta'sir qila olmaydigan qaror.",
            "Xizmat qoidalarini buzish yoki firibgarlik alomatlari aniqlangan bo'lsa.",
          ],
        },
        {
          t: "note",
          tone: "warn",
          title: "Nikni tekshirish — yagona himoya",
          text:
            "To'lovdan oldin ekranda o'yinchi niki ko'rsatiladi. Bu bosqich bepul va aynan xatoni " +
            "tutish uchun qo'yilgan. Nik notanish bo'lsa to'lovni tasdiqlamang — tasdiqdan keyin " +
            "kredit qaytmaydi.",
        },
        {
          t: "links",
          title: "Tegishli sahifalar",
          items: [
            { label: "Ommaviy oferta", href: `${localePath("uz", "oferta")}` },
            { label: "To'lov xavfsizligi va 3-D Secure", href: `${localePath("uz", "tolov-xavfsizligi")}` },
            { label: "Aloqa", href: `${localePath("uz", "aloqa")}` },
          ],
        },
      ],

      faq: [
        {
          q: "To'lov o'tdi, lekin kredit kelmadi. Nima qilay?",
          a:
            "Avval 15 daqiqa kuting — band vaqtda navbat cho'ziladi. Keyin buyurtma raqami bilan " +
            "qo'llab-quvvatlashga yozing. Buyurtma bajarilmagan bo'lsa, pul to'liq qaytariladi " +
            "yoki kredit qayta yuboriladi.",
        },
        {
          q: "Pul necha kunda qaytadi?",
          a:
            "Ariza 3 ish kunida ko'rib chiqiladi. Ijobiy qarordan keyin qaytarish darhol " +
            "boshlanadi, kartaga esa bank tezligiga qarab 1-10 ish kunida tushadi.",
        },
        {
          q: "Boshqa kartaga qaytarish mumkinmi?",
          a:
            "Yo'q. Pul faqat to'lov qilingan usulga qaytariladi. Bu firibgarlikka qarshi qoida — " +
            "u kartangizni boshqa odam ishlatgan holatda sizni himoya qiladi.",
        },
        {
          q: "Komissiya olinadimi?",
          a:
            "GemPay qaytarish uchun komissiya olmaydi. Bank yoki hamyon o'z tarifiga ko'ra " +
            "ushlab qolishi mumkin — buni to'lov tashkiloti belgilaydi.",
        },
        {
          q: "Visa yoki Mastercard bilan to'lash mumkinmi?",
          a:
            "Yo'q, xalqaro kartalar hozircha qabul qilinmaydi — va ular kerak ham emas. " +
            "To'lov O'zbekiston kartalari (UzCard, HUMO), Click va Uzum Bank ilovalari orqali " +
            "so'mda o'tadi, ya'ni xorijiy karta ochish yoki valyuta almashtirish shart emas.",
        },
      ],
    },

    // ------------------------------------------------------------ ru ----
    ru: {
      title: "Оплата и возврат средств",
      metaTitle: "Оплата и возврат средств — порядок",
      metaDescription:
        "Как оплатить в GemPay: UzCard, HUMO, Click и Uzum Bank. В каких случаях возвращаются " +
        "деньги, как подать заявление и за сколько рабочих дней приходит возврат.",
      short: "Оплата и возврат",
      answer:
        "Оплата в GemPay принимается в узбекских сумах: карты UzCard и HUMO, приложения " +
        "Click и Uzum Bank, баланс бота. Если заказ не выполнен, деньги возвращаются полностью — заявление " +
        "рассматривается за 3 рабочих дня, средства уходят тем же способом, которым была оплата. " +
        "Выполненный заказ возврату не подлежит.",

      body: [
        { t: "h2", id: "usullar", text: "Способы оплаты" },
        {
          t: "p",
          text:
            "Оплата принимается в узбекских сумах. Конвертация валюты не требуется, " +
            "криптовалюта не нужна.",
        },
        { t: "paymarks" },
        {
          t: "table",
          caption: "Принимаемые способы оплаты",
          head: ["Способ", "Тип", "Подтверждение"],
          rows: [
            [LOCAL, "Карта банка Узбекистана", "Одноразовый код по SMS (OTP)"],
            [WALLET, "Кошелёк и банковское приложение", "Подтверждение в приложении"],
            [WALLET_RU, "Оплата из России", "Подтверждение в банковском приложении"],
            ["Баланс бота", "Внутренний счёт в боте", "Дополнительное подтверждение не требуется"],
          ],
        },
        {
          t: "note",
          tone: "info",
          title: "Оплата проходит в боте",
          text:
            "Этот сайт — витрина, оплата здесь не принимается. Заказ и платёж выполняются в " +
            "Mini App внутри Telegram, а данные карты вводятся на защищённой странице платёжной " +
            "организации.",
        },

        { t: "h2", id: "qanday", text: "Как проходит платёж" },
        {
          t: "steps",
          items: [
            {
              title: "Выбор пакета",
              text: "Точная сумма в сумах видна на экране до оплаты. Скрытых комиссий нет.",
            },
            {
              title: "Проверка Player ID",
              text: "Система бесплатно запрашивает ник с игрового сервера. Если ник чужой — не подтверждайте оплату.",
            },
            {
              title: "Выбор способа оплаты",
              text: "Выбирается карта или кошелёк, затем запрашивается подтверждение: код OTP, 3-D Secure или приложение кошелька.",
            },
            {
              title: "Зачисление",
              text: "После подтверждения заказ уходит провайдеру. Обычно 1-5 минут, статус виден в боте.",
            },
          ],
        },

        { t: "h2", id: "chek", text: "Чек и история заказов" },
        {
          t: "p",
          text:
            "Каждый заказ сохраняется в истории бота: дата, игра, пакет, сумма в сумах, Player ID " +
            "и статус. Эта запись выполняет роль подтверждения оплаты и является основным " +
            "документом при споре.",
        },
        {
          t: "list",
          items: [
            "Чек со стороны банка — в приложении вашей карты или в SMS.",
            "Номер заказа нужен при каждом обращении — возьмите его из истории.",
            "Если требуется дополнительное подтверждение, напишите в поддержку.",
          ],
        },

        { t: "h2", id: "qaytarish", text: "Когда возвращаются деньги" },
        {
          t: "p",
          text:
            "Основное правило простое: <strong>если услуга не оказана — деньги возвращаются</strong>. " +
            "Выполненный заказ возврату не подлежит, поскольку внутриигровую валюту технически " +
            "невозможно списать обратно.",
        },
        {
          t: "table",
          caption: "Решение по ситуации",
          head: ["Ситуация", "Возврат", "Срок"],
          rows: [
            ["Оплата прошла, зачисления нет", "+", "После рассмотрения, 1-10 рабочих дней"],
            ["Провайдер отклонил заказ", "+", "Автоматически, заявление не нужно"],
            ["Заказ прерван из-за технического сбоя", "+", "После рассмотрения"],
            ["Не зачислено в течение 24 часов", "+", "Считается неисполненным"],
            ["Платёж прошёл дважды", "+", "Лишнее возвращается полностью"],
            ["Зачислено, пользователь передумал", "-", "Не возвращается"],
            ["Введён неверный Player ID, зачисление ушло другому", "-", "Не возвращается"],
            ["Игровой аккаунт заблокирован издателем", "-", "Решение издателя"],
          ],
        },

        { t: "h2", id: "ariza", text: "Как запросить возврат" },
        {
          t: "list",
          ordered: true,
          items: [
            "Напишите в поддержку в боте или на электронную почту.",
            "Укажите <strong>номер заказа</strong>, дату и способ оплаты.",
            "Коротко опишите проблему: что ожидалось и что произошло.",
            "При необходимости приложите скриншот из игры.",
            "Заявление рассматривается в течение <strong>3 рабочих дней</strong>, ответ обязателен.",
          ],
        },
        {
          t: "note",
          tone: "good",
          title: "Деньги вернутся тем же способом",
          text:
            "Платили картой — вернётся на ту же карту, кошельком — на тот же кошелёк. Перевод на " +
            "другие реквизиты невозможен: это правило защиты от мошенничества и требование " +
            "договора с банком.",
        },

        { t: "h2", id: "muddat", text: "Сроки" },
        {
          t: "facts",
          items: [
            { k: "Рассмотрение заявления", v: "до 3 рабочих дней" },
            { k: "Начало возврата", v: "сразу после положительного решения" },
            { k: "Поступление на карту", v: "1-10 рабочих дней — зависит от банка" },
            { k: "Поступление в кошелёк", v: "обычно 1-3 рабочих дня" },
            { k: "Приём заявлений", v: "в течение 30 дней с даты оплаты" },
          ],
        },
        {
          t: "p",
          text:
            "После запуска возврата скорость поступления <strong>зависит от банка</strong>, и " +
            "GemPay не может ускорить этот этап. Если через 10 рабочих дней деньги не пришли — " +
            "сначала обратитесь в банк вашей карты, затем напишите нам.",
        },

        { t: "h2", id: "qaytarilmaydi", text: "Когда возврат невозможен" },
        {
          t: "list",
          items: [
            "Зачисление <strong>уже поступило</strong> на указанный вами счёт — заказ считается выполненным.",
            "Player ID введён неверно и зачисление ушло другому игроку. Ник показывается до оплаты именно для этого.",
            "Игровой аккаунт заблокирован издателем — на это решение GemPay повлиять не может.",
            "Выявлено нарушение правил сервиса или признаки мошенничества.",
          ],
        },
        {
          t: "note",
          tone: "warn",
          title: "Проверка ника — единственная защита",
          text:
            "До оплаты на экране показывается ник игрока. Этот шаг бесплатный и сделан именно для " +
            "того, чтобы поймать ошибку. Если ник незнакомый — не подтверждайте оплату: после " +
            "подтверждения зачисление не отзывается.",
        },
        {
          t: "links",
          title: "Связанные страницы",
          items: [
            { label: "Публичная оферта", href: `${localePath("ru", "oferta")}` },
            { label: "Безопасность платежей и 3-D Secure", href: `${localePath("ru", "tolov-xavfsizligi")}` },
            { label: "Контакты", href: `${localePath("ru", "aloqa")}` },
          ],
        },
      ],

      faq: [
        {
          q: "Оплата прошла, а зачисления нет. Что делать?",
          a:
            "Сначала подождите 15 минут — в часы пик очередь растягивается. Затем напишите в " +
            "поддержку с номером заказа. Если заказ не выполнен, деньги вернут полностью или " +
            "отправят зачисление повторно.",
        },
        {
          q: "За сколько дней вернутся деньги?",
          a:
            "Заявление рассматривается за 3 рабочих дня. После положительного решения возврат " +
            "запускается сразу, а на карту деньги приходят за 1-10 рабочих дней — по скорости банка.",
        },
        {
          q: "Можно вернуть на другую карту?",
          a:
            "Нет. Деньги возвращаются только тем способом, которым была произведена оплата. " +
            "Это правило защиты от мошенничества: оно защищает вас, если картой воспользовался " +
            "кто-то другой.",
        },
        {
          q: "Берётся ли комиссия?",
          a:
            "GemPay не берёт комиссию за возврат. Банк или кошелёк может удержать свою по " +
            "собственному тарифу — это определяет платёжная организация.",
        },
        {
          q: "Можно ли оплатить картой Visa или Mastercard?",
          a:
            "Нет, международные карты пока не принимаются — и они не нужны. Оплата проходит " +
            "картами Узбекистана (UzCard, HUMO) и через приложения Click и Uzum Bank, в сумах: " +
            "открывать зарубежную карту или менять валюту не требуется.",
        },
      ],
    },

    // ------------------------------------------------------------ en ----
    en: {
      title: "Payments and refunds",
      metaTitle: "Payments and refunds — how it works",
      metaDescription:
        "How to pay on GemPay: UzCard, HUMO, Click and Uzum Bank. When money is refunded, how " +
        "to request it, and how many working days a refund takes to reach your card.",
      short: "Payments and refunds",
      answer:
        "GemPay takes payment in Uzbek som: UzCard and HUMO cards, the Click and Uzum Bank " +
        "apps, and your bot balance. If an order is not fulfilled the money is refunded in full — requests are " +
        "reviewed within 3 working days and refunds go back to the method used to pay. A " +
        "fulfilled order is not refundable.",

      body: [
        { t: "h2", id: "usullar", text: "Ways to pay" },
        {
          t: "p",
          text:
            "Payment is taken in Uzbek som. No currency conversion is required and no " +
            "cryptocurrency is involved.",
        },
        { t: "paymarks" },
        {
          t: "table",
          caption: "Accepted payment methods",
          head: ["Method", "Type", "Confirmation"],
          rows: [
            [LOCAL, "Uzbek bank card", "One-time SMS code (OTP)"],
            [WALLET, "Wallet and banking app", "Confirmed in the app"],
            [WALLET_RU, "Paying from Russia", "Confirmed in the banking app"],
            ["Bot balance", "Internal balance in the bot", "No extra confirmation needed"],
          ],
        },
        {
          t: "note",
          tone: "info",
          title: "Payment happens in the bot",
          text:
            "This site is a shopfront and takes no payments. Ordering and payment happen in the " +
            "Mini App inside Telegram, and card details are entered on the payment organisation's " +
            "secure page.",
        },

        { t: "h2", id: "qanday", text: "How a payment goes through" },
        {
          t: "steps",
          items: [
            {
              title: "Pick a package",
              text: "The exact amount in som is on screen before you pay. There are no hidden fees.",
            },
            {
              title: "The Player ID is checked",
              text: "The system fetches the nickname from the game server, free of charge. If it is not yours, do not confirm.",
            },
            {
              title: "Choose how to pay",
              text: "Pick a card or wallet, then confirm: an OTP code, 3-D Secure, or your wallet app.",
            },
            {
              title: "Delivery",
              text: "After confirmation the order goes to the supplier. Usually 1-5 minutes; the status is visible in the bot.",
            },
          ],
        },

        { t: "h2", id: "chek", text: "Receipts and order history" },
        {
          t: "p",
          text:
            "Every order is stored in the bot's history: date, game, package, amount in som, Player " +
            "ID and status. That record serves as proof of payment and is the primary document in " +
            "any dispute.",
        },
        {
          t: "list",
          items: [
            "The bank-side receipt is in your card app or in an SMS.",
            "The order number is needed for every enquiry — take it from your history.",
            "If you need anything further as proof, message support.",
          ],
        },

        { t: "h2", id: "qaytarish", text: "When money is refunded" },
        {
          t: "p",
          text:
            "The rule is simple: <strong>if the service was not performed, the money comes back</strong>. " +
            "A fulfilled order is not refundable, because in-game currency cannot technically be " +
            "taken back off an account.",
        },
        {
          t: "table",
          caption: "Outcome by situation",
          head: ["Situation", "Refund", "Timing"],
          rows: [
            ["Payment went through, nothing delivered", "+", "After review, 1-10 working days"],
            ["Supplier rejected the order", "+", "Automatic, no request needed"],
            ["Order interrupted by a technical failure", "+", "After review"],
            ["Nothing delivered within 24 hours", "+", "Counts as unfulfilled"],
            ["Payment taken twice", "+", "The extra charge is returned in full"],
            ["Delivered, then the user changed their mind", "-", "Not refundable"],
            ["Wrong Player ID entered, delivery went elsewhere", "-", "Not refundable"],
            ["Game account banned by the publisher", "-", "The publisher's decision"],
          ],
        },

        { t: "h2", id: "ariza", text: "How to request a refund" },
        {
          t: "list",
          ordered: true,
          items: [
            "Message support in the bot, or send an email.",
            "Give the <strong>order number</strong>, the date and the payment method.",
            "Describe the problem briefly: what you expected and what happened.",
            "Attach an in-game screenshot if it helps.",
            "The request is reviewed within <strong>3 working days</strong> and always answered.",
          ],
        },
        {
          t: "note",
          tone: "good",
          title: "Money returns the way it was paid",
          text:
            "Paid by card, it goes back to that card; paid by wallet, back to that wallet. It " +
            "cannot be sent to different details — that is an anti-fraud rule and a requirement of " +
            "the agreement with the bank.",
        },

        { t: "h2", id: "muddat", text: "Timings" },
        {
          t: "facts",
          items: [
            { k: "Request reviewed", v: "within 3 working days" },
            { k: "Refund started", v: "immediately after approval" },
            { k: "Reaches a card", v: "1-10 working days — up to the bank" },
            { k: "Reaches a wallet", v: "usually 1-3 working days" },
            { k: "Requests accepted", v: "within 30 days of payment" },
          ],
        },
        {
          t: "p",
          text:
            "Once a refund is started, how fast it lands <strong>depends on the bank</strong>, and " +
            "GemPay cannot speed that stage up. If nothing has arrived after 10 working days, ask " +
            "your card's bank first, then write to us.",
        },

        { t: "h2", id: "qaytarilmaydi", text: "When a refund is not possible" },
        {
          t: "list",
          items: [
            "The delivery has <strong>already reached</strong> the account you specified — the order counts as fulfilled.",
            "The Player ID was wrong and the delivery went to another player. The nickname is shown before payment for exactly this reason.",
            "The game account was banned by the publisher — a decision GemPay cannot influence.",
            "The service's rules were broken, or there are signs of fraud.",
          ],
        },
        {
          t: "note",
          tone: "warn",
          title: "Checking the nickname is the only safeguard",
          text:
            "The player's nickname is shown before payment. That step is free and exists to catch " +
            "mistakes. If the nickname is unfamiliar, do not confirm — after confirmation the " +
            "delivery cannot be recalled.",
        },
        {
          t: "links",
          title: "Related pages",
          items: [
            { label: "Public offer", href: `${localePath("en", "oferta")}` },
            { label: "Payment security and 3-D Secure", href: `${localePath("en", "tolov-xavfsizligi")}` },
            { label: "Contact", href: `${localePath("en", "aloqa")}` },
          ],
        },
      ],

      faq: [
        {
          q: "Payment went through but nothing arrived. What now?",
          a:
            "Wait 15 minutes first — queues stretch at peak times. Then message support with your " +
            "order number. If the order was not fulfilled you get a full refund, or the delivery " +
            "is sent again.",
        },
        {
          q: "How long does a refund take?",
          a:
            "The request is reviewed within 3 working days. Once approved the refund starts " +
            "immediately, and reaches a card in 1-10 working days depending on the bank.",
        },
        {
          q: "Can it be refunded to a different card?",
          a:
            "No. Money only goes back to the method it was paid with. That is an anti-fraud rule, " +
            "and it protects you if someone else used your card.",
        },
        {
          q: "Is there a fee for a refund?",
          a:
            "GemPay charges nothing for a refund. A bank or wallet may apply its own tariff — that " +
            "is set by the payment organisation, not by us.",
        },
        {
          q: "Can I pay with Visa or Mastercard?",
          a:
            "No, international cards are not accepted at the moment — and they are not needed. " +
            "Payment goes through Uzbek cards (UzCard, HUMO) and the Click and Uzum Bank apps, " +
            "in som, so there is no foreign card to open and no currency to exchange.",
        },
      ],
    },
  },
};
