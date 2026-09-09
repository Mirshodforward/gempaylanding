/**
 * Aloqa — `/aloqa`.
 *
 * NEGA ALOHIDA SAHIFA: to'lov tizimlari savdo nuqtasidan bog'lanish
 * ma'lumotlarini ochiq talab qiladi, ekvayer bank esa telefon raqamini
 * MAJBURIY deb hisoblaydi — faqat Telegram yetarli emas. Google uchun ham
 * bu E-E-A-T signali: pul bilan ishlaydigan saytda kimga murojaat qilish
 * ko'rinmasa, ishonch bahosi tushadi.
 *
 * Sahifadagi telefon, pochta va rekvizitlar `site.ts` dagi `CONTACT` va
 * `LEGAL` dan keladi. To'ldirilmagan maydon UMUMAN chiqmaydi — yolg'on
 * rekvizitdan ko'ra yo'q rekvizit yaxshi.
 */

import type { LegalDoc } from "./types";
import { SUPPORT_URL, BOT_USERNAME, localePath } from "../site";

export const CONTACTS: LegalDoc = {
  slug: "aloqa",
  icon: "headset",
  updated: "2026-09-09",

  locales: {
    // ------------------------------------------------------------ uz ----
    uz: {
      title: "Aloqa",
      metaTitle: "Aloqa — GemPay bilan bog'lanish",
      metaDescription:
        "GemPay bilan bog'lanish: telefon, elektron pochta va Telegram qo'llab-quvvatlash. " +
        "Qaysi masalada qayerga yozish kerak, javob qancha vaqtda keladi va rekvizitlar.",
      short: "Aloqa",
      answer:
        "GemPay bilan Telegram qo'llab-quvvatlash, elektron pochta yoki telefon orqali " +
        "bog'lanish mumkin. Buyurtma bo'yicha savolga eng tez javob Telegram'da keladi — " +
        "murojaatda buyurtma raqamini ko'rsating. Pul qaytarish va rasmiy murojaatlar " +
        "elektron pochta orqali qabul qilinadi.",

      body: [
        { t: "h2", id: "kanallar", text: "Bog'lanish kanallari" },
        { t: "contacts" },
        {
          t: "note",
          tone: "info",
          title: "Eng tez yo'l — botdagi qo'llab-quvvatlash",
          text:
            "Buyurtma bo'yicha savolga Telegram'da javob beriladi, chunki buyurtma tarixi " +
            "o'sha yerda turadi va operator uni darhol ko'radi. Elektron pochta rasmiy " +
            "murojaat, ariza va hujjat almashinuvi uchun qulayroq.",
        },

        { t: "h2", id: "qayerga", text: "Qaysi masalada qayerga yozish" },
        {
          t: "table",
          caption: "Murojaat turi bo'yicha kanal",
          head: ["Masala", "Qayerga", "Nima kerak"],
          rows: [
            ["To'lov o'tdi, kredit kelmadi", "Telegram", "Buyurtma raqami va sana"],
            ["Pulni qaytarish arizasi", "Elektron pochta", "Buyurtma raqami, to'lov usuli"],
            ["Buyurtma tekshiruvga tushdi", "Telegram", "Buyurtma raqami"],
            ["Chek yoki to'lov tasdig'i", "Elektron pochta", "Sana va summa"],
            ["Rasmiy shikoyat yoki nizo", "Elektron pochta", "Yozma bayon, hujjatlar"],
            ["Hamkorlik va API", "Elektron pochta", "Loyiha tavsifi"],
          ],
        },

        { t: "h2", id: "javob", text: "Javob muddati" },
        {
          t: "facts",
          items: [
            { k: "Telegram qo'llab-quvvatlash", v: "Odatda bir necha daqiqa, band vaqtda 1 soatgacha" },
            { k: "Elektron pochta", v: "1 ish kuni ichida" },
            { k: "Pulni qaytarish arizasi", v: "3 ish kunigacha ko'rib chiqiladi" },
            { k: "Rasmiy shikoyat", v: "15 kun ichida yozma javob" },
          ],
        },
        {
          t: "p",
          text:
            "Javob muddatlari ish kunlari bo'yicha hisoblanadi. Dam olish va bayram kunlarida " +
            "Telegram qo'llab-quvvatlash ishlaydi, rasmiy murojaatlar esa keyingi ish kunida " +
            "ko'rib chiqiladi.",
        },

        { t: "h2", id: "murojaat", text: "Murojaatda nima yozish kerak" },
        {
          t: "p",
          text:
            "Quyidagilarni birdaniga yozsangiz masala bir bosqichda hal bo'ladi — qo'shimcha " +
            "savol-javob kerak bo'lmaydi.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "<strong>Buyurtma raqami</strong> — botdagi tarixdan olinadi.",
            "Buyurtma <strong>sanasi va vaqti</strong>.",
            "<strong>To'lov usuli</strong>: karta yoki hamyon nomi.",
            "Nima kutilgan edi va aslida nima bo'ldi — ikki gapda.",
            "Kerak bo'lsa o'yin ichidagi yoki bank ilovasidagi ekran rasmi.",
          ],
        },
        {
          t: "note",
          tone: "warn",
          title: "Karta ma'lumotlarini yubormang",
          text:
            "Murojaatda karta raqami, CVV yoki SMS kodi KERAK EMAS va biz ularni hech qachon " +
            "so'ramaymiz. Buyurtma raqami va sana yetarli. " +
            `Batafsil: <a href="${localePath("uz", "tolov-xavfsizligi")}">to'lov xavfsizligi</a>.`,
        },

        { t: "h2", id: "rekvizit", text: "Rekvizitlar" },
        { t: "requisites" },
        {
          t: "links",
          title: "Tegishli sahifalar",
          items: [
            { label: "Ommaviy oferta", href: `${localePath("uz", "oferta")}` },
            { label: "To'lov va pulni qaytarish", href: `${localePath("uz", "tolov-va-qaytarish")}` },
            { label: "To'lov xavfsizligi", href: `${localePath("uz", "tolov-xavfsizligi")}` },
          ],
        },
      ],

      faq: [
        {
          q: "Eng tez qaysi kanal orqali javob olaman?",
          a:
            `Telegram qo'llab-quvvatlash: ${SUPPORT_URL}. Buyurtma tarixi o'sha yerda bo'lgani ` +
            "uchun operator masalani darhol ko'radi. Murojaatda buyurtma raqamini yozing.",
        },
        {
          q: "Telefon orqali bog'lansam bo'ladimi?",
          a:
            "Ha, telefon raqami shu sahifada ko'rsatilgan. Ammo buyurtma bo'yicha texnik " +
            "savollarga Telegram orqali tezroq javob beriladi — u yerda buyurtma raqami va " +
            "ekran rasmini yuborish oson.",
        },
        {
          q: "Rasmiy shikoyatni qanday yuboraman?",
          a:
            "Elektron pochtaga yozma bayon yuboring: buyurtma raqami, sana, summa va talabingiz. " +
            "Shikoyat 15 kun ichida ko'rib chiqiladi va yozma javob beriladi.",
        },
        {
          q: "GemPay nomidan yozgan odamga ishonsam bo'ladimi?",
          a:
            `Faqat rasmiy kanal ishonchli: ${SUPPORT_URL} va @${BOT_USERNAME} boti. ` +
            "Boshqa hisoblar GemPay bilan bog'liq emas. Hech kim sizdan SMS kod yoki parol " +
            "so'ramaydi.",
        },
      ],
    },

    // ------------------------------------------------------------ ru ----
    ru: {
      title: "Контакты",
      metaTitle: "Контакты — как связаться с GemPay",
      metaDescription:
        "Связь с GemPay: телефон, электронная почта и поддержка в Telegram. По какому вопросу " +
        "куда писать, за сколько приходит ответ и реквизиты компании.",
      short: "Контакты",
      answer:
        "С GemPay можно связаться через поддержку в Telegram, по электронной почте или по " +
        "телефону. Быстрее всего отвечают в Telegram — укажите в обращении номер заказа. " +
        "Заявления на возврат и официальные обращения принимаются по электронной почте.",

      body: [
        { t: "h2", id: "kanallar", text: "Каналы связи" },
        { t: "contacts" },
        {
          t: "note",
          tone: "info",
          title: "Быстрее всего — поддержка в боте",
          text:
            "На вопросы по заказу отвечают в Telegram: история заказов находится там же, и " +
            "оператор видит её сразу. Электронная почта удобнее для официальных обращений, " +
            "заявлений и обмена документами.",
        },

        { t: "h2", id: "qayerga", text: "По какому вопросу куда писать" },
        {
          t: "table",
          caption: "Канал по типу обращения",
          head: ["Вопрос", "Куда", "Что понадобится"],
          rows: [
            ["Оплата прошла, зачисления нет", "Telegram", "Номер заказа и дата"],
            ["Заявление на возврат", "Электронная почта", "Номер заказа, способ оплаты"],
            ["Заказ на проверке", "Telegram", "Номер заказа"],
            ["Чек или подтверждение оплаты", "Электронная почта", "Дата и сумма"],
            ["Официальная жалоба или спор", "Электронная почта", "Письменное изложение, документы"],
            ["Сотрудничество и API", "Электронная почта", "Описание проекта"],
          ],
        },

        { t: "h2", id: "javob", text: "Сроки ответа" },
        {
          t: "facts",
          items: [
            { k: "Поддержка в Telegram", v: "обычно несколько минут, в час пик до 1 часа" },
            { k: "Электронная почта", v: "в течение 1 рабочего дня" },
            { k: "Заявление на возврат", v: "рассматривается до 3 рабочих дней" },
            { k: "Официальная жалоба", v: "письменный ответ в течение 15 дней" },
          ],
        },
        {
          t: "p",
          text:
            "Сроки считаются по рабочим дням. В выходные и праздники поддержка в Telegram " +
            "работает, а официальные обращения рассматриваются в следующий рабочий день.",
        },

        { t: "h2", id: "murojaat", text: "Что указать в обращении" },
        {
          t: "p",
          text:
            "Если написать всё сразу, вопрос решится за один шаг — уточнения не потребуются.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "<strong>Номер заказа</strong> — берётся из истории в боте.",
            "<strong>Дата и время</strong> заказа.",
            "<strong>Способ оплаты</strong>: название карты или кошелька.",
            "Что ожидалось и что произошло — в двух предложениях.",
            "При необходимости — скриншот из игры или из банковского приложения.",
          ],
        },
        {
          t: "note",
          tone: "warn",
          title: "Не присылайте данные карты",
          text:
            "Номер карты, CVV и код из SMS в обращении НЕ НУЖНЫ, и мы никогда их не спрашиваем. " +
            "Достаточно номера заказа и даты. " +
            `Подробнее: <a href="${localePath("ru", "tolov-xavfsizligi")}">безопасность платежей</a>.`,
        },

        { t: "h2", id: "rekvizit", text: "Реквизиты" },
        { t: "requisites" },
        {
          t: "links",
          title: "Связанные страницы",
          items: [
            { label: "Публичная оферта", href: `${localePath("ru", "oferta")}` },
            { label: "Оплата и возврат средств", href: `${localePath("ru", "tolov-va-qaytarish")}` },
            { label: "Безопасность платежей", href: `${localePath("ru", "tolov-xavfsizligi")}` },
          ],
        },
      ],

      faq: [
        {
          q: "По какому каналу ответят быстрее всего?",
          a:
            `Поддержка в Telegram: ${SUPPORT_URL}. История заказов находится там же, поэтому ` +
            "оператор видит ситуацию сразу. Укажите в обращении номер заказа.",
        },
        {
          q: "Можно связаться по телефону?",
          a:
            "Да, номер указан на этой странице. Но на технические вопросы по заказу быстрее " +
            "отвечают в Telegram — там проще отправить номер заказа и скриншот.",
        },
        {
          q: "Как подать официальную жалобу?",
          a:
            "Отправьте письменное обращение на электронную почту: номер заказа, дата, сумма и ваше " +
            "требование. Жалоба рассматривается в течение 15 дней с письменным ответом.",
        },
        {
          q: "Можно ли доверять тому, кто пишет от имени GemPay?",
          a:
            `Доверять стоит только официальным каналам: ${SUPPORT_URL} и боту @${BOT_USERNAME}. ` +
            "Другие аккаунты к GemPay отношения не имеют. Никто не станет спрашивать у вас код " +
            "из SMS или пароль.",
        },
      ],
    },

    // ------------------------------------------------------------ en ----
    en: {
      title: "Contact",
      metaTitle: "Contact — how to reach GemPay",
      metaDescription:
        "Reaching GemPay: phone, email and Telegram support. Which channel to use for which " +
        "question, how quickly you get an answer, and the company details.",
      short: "Contact",
      answer:
        "You can reach GemPay through Telegram support, by email or by phone. Telegram is the " +
        "fastest for anything about an order — include the order number. Refund requests and " +
        "formal complaints are handled by email.",

      body: [
        { t: "h2", id: "kanallar", text: "Ways to reach us" },
        { t: "contacts" },
        {
          t: "note",
          tone: "info",
          title: "Support in the bot is the fastest route",
          text:
            "Questions about an order are answered on Telegram, because your order history lives " +
            "there and the agent can see it immediately. Email suits formal enquiries, written " +
            "requests and exchanging documents.",
        },

        { t: "h2", id: "qayerga", text: "Which channel for which question" },
        {
          t: "table",
          caption: "Channel by type of enquiry",
          head: ["Question", "Where", "What you need"],
          rows: [
            ["Payment went through, nothing delivered", "Telegram", "Order number and date"],
            ["Refund request", "Email", "Order number, payment method"],
            ["Order held for review", "Telegram", "Order number"],
            ["Receipt or proof of payment", "Email", "Date and amount"],
            ["Formal complaint or dispute", "Email", "Written statement, documents"],
            ["Partnerships and API", "Email", "A description of your project"],
          ],
        },

        { t: "h2", id: "javob", text: "Response times" },
        {
          t: "facts",
          items: [
            { k: "Telegram support", v: "usually minutes, up to an hour at peak times" },
            { k: "Email", v: "within 1 working day" },
            { k: "Refund request", v: "reviewed within 3 working days" },
            { k: "Formal complaint", v: "written reply within 15 days" },
          ],
        },
        {
          t: "p",
          text:
            "Times are counted in working days. Telegram support runs at weekends and on public " +
            "holidays; formal enquiries are handled on the next working day.",
        },

        { t: "h2", id: "murojaat", text: "What to include in your message" },
        {
          t: "p",
          text:
            "Send all of this at once and the matter is usually settled in a single step, with no " +
            "back-and-forth.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "The <strong>order number</strong> — from your history in the bot.",
            "The <strong>date and time</strong> of the order.",
            "The <strong>payment method</strong>: which card or wallet.",
            "What you expected and what actually happened — two sentences is enough.",
            "A screenshot from the game or your banking app, if it helps.",
          ],
        },
        {
          t: "note",
          tone: "warn",
          title: "Never send card details",
          text:
            "Your card number, CVV and SMS codes are NOT needed, and we never ask for them. The " +
            "order number and date are enough. " +
            `More on this: <a href="${localePath("en", "tolov-xavfsizligi")}">payment security</a>.`,
        },

        { t: "h2", id: "rekvizit", text: "Company details" },
        { t: "requisites" },
        {
          t: "links",
          title: "Related pages",
          items: [
            { label: "Public offer", href: `${localePath("en", "oferta")}` },
            { label: "Payments and refunds", href: `${localePath("en", "tolov-va-qaytarish")}` },
            { label: "Payment security", href: `${localePath("en", "tolov-xavfsizligi")}` },
          ],
        },
      ],

      faq: [
        {
          q: "Which channel answers fastest?",
          a:
            `Telegram support: ${SUPPORT_URL}. Your order history is there too, so the agent sees ` +
            "the situation straight away. Include the order number in your message.",
        },
        {
          q: "Can I call you?",
          a:
            "Yes, the number is on this page. For technical questions about an order Telegram is " +
            "quicker though — it is easier to send the order number and a screenshot there.",
        },
        {
          q: "How do I file a formal complaint?",
          a:
            "Send a written statement by email: order number, date, amount and what you are asking " +
            "for. Complaints are reviewed within 15 days and answered in writing.",
        },
        {
          q: "Can I trust someone messaging me on GemPay's behalf?",
          a:
            `Only the official channels: ${SUPPORT_URL} and the @${BOT_USERNAME} bot. Other ` +
            "accounts have nothing to do with GemPay. Nobody will ever ask you for an SMS code or " +
            "a password.",
        },
      ],
    },
  },
};
