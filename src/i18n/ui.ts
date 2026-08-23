/**
 * Landing matnlari — uz / ru / en.
 *
 * Komponentlar `lang` oladi va shu yerdan o'qiydi, shuning uchun uch til
 * AYNAN bir xil qolipni ishlatadi. Yangi bo'lim qo'shsangiz — uchala tilga
 * ham yozing, aks holda TypeScript xato beradi (`Record<Locale, ...>`).
 *
 * USLUB QOIDALARI:
 *   · O'zbekcha — lotin, oddiy apostrof (`o'yin`, `so'm`). Aynan shu shakl
 *     qidiruvda eng ko'p teriladi.
 *   · Narx YOZILMAYDI. Narx botda jonli ko'rsatiladi va kursga bog'liq
 *     (`modules/gameTopup/pricing.js`) — saytdagi raqam bir haftada yolg'onga
 *     aylanadi.
 *   · Va'da faqat mahsulot haqiqatan qiladigan ish: ID tekshiruvi, so'mda
 *     to'lov, avtomatik yetkazish.
 */

import type { Locale } from "../data/site";

export type Copy = {
  /** `<html lang>` bilan mos til nomi — til almashtirgichda */
  nav: {
    games: string;
    how: string;
    why: string;
    blog: string;
    faq: string;
    cta: string;
    menu: string;
    close: string;
  };
  hero: {
    badge: string;
    titleLead: string;
    titleAccent: string;
    titleTail: string;
    lede: string;
    /** AEO to'g'ridan-to'g'ri javob — sahifada KO'RINADI, LLM shuni iqtibos qiladi */
    answer: string;
    ctaPrimary: string;
    ctaSecondary: string;
    payLabel: string;
    stats: { value: string; label: string }[];
  };
  games: {
    eyebrow: string;
    title: string;
    lede: string;
    popular: string;
    open: string;
    /** Kartochkadagi «UC to'ldirish» qolipi — `{unit}` almashtiriladi */
    topupOf: string;
    all: string;
  };
  how: {
    eyebrow: string;
    title: string;
    lede: string;
    steps: { title: string; text: string }[];
    note: string;
  };
  why: {
    eyebrow: string;
    title: string;
    lede: string;
    items: { icon: string; title: string; text: string }[];
  };
  trust: {
    eyebrow: string;
    title: string;
    lede: string;
    points: string[];
    cta: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    lede: string;
    items: { q: string; a: string }[];
  };
  cta: {
    title: string;
    lede: string;
    primary: string;
    secondary: string;
  };
  footer: {
    tagline: string;
    colGames: string;
    colCompany: string;
    colHelp: string;
    about: string;
    blog: string;
    support: string;
    api: string;
    ecosystem: string;
    rights: string;
    disclaimer: string;
  };
  /** O'yin sahifasi uchun umumiy matnlar — `{game}`, `{unit}` almashtiriladi */
  game: {
    breadcrumbHome: string;
    breadcrumbGames: string;
    titleTemplate: string;
    metaTemplate: string;
    descTemplate: string;
    answerTemplate: string;
    needLabel: string;
    etaLabel: string;
    payLabel: string;
    idWhere: string;
    howTitle: string;
    faqTitle: string;
    relatedTitle: string;
    ctaTitle: string;
    regionTitle: string;
    packagesTitle: string;
    packagesText: string;
  };
  blog: {
    title: string;
    lede: string;
    readMore: string;
    minutes: string;
    updated: string;
    backToBlog: string;
    tocTitle: string;
    answerTitle: string;
    faqTitle: string;
    sourcesTitle: string;
    relatedTitle: string;
    allPosts: string;
  };
};

const uz: Copy = {
  nav: {
    games: "O'yinlar",
    how: "Qanday ishlaydi",
    why: "Nega GemPay",
    blog: "Blog",
    faq: "Savollar",
    cta: "Botni ochish",
    menu: "Menyu",
    close: "Yopish",
  },
  hero: {
    badge: "O'zbekiston uchun",
    titleLead: "O'yin hisobingizni",
    titleAccent: "so'mda",
    titleTail: "to'ldiring",
    lede:
      "PUBG UC, Mobile Legends olmosi, Free Fire, CODM CP va yana 6 ta xizmat — " +
      "UzCard, HUMO, Click yoki Payme bilan. Xorijiy karta ham, VPN ham, kripto ham kerak emas.",
    answer:
      "GemPay — Telegram bot orqali o'yin valyutasini so'mda to'ldirish xizmati. " +
      "O'yinni tanlaysiz, Player ID ni kiritasiz, nikingiz bepul tekshirilib ko'rsatiladi — " +
      "tasdiqlaganingizdan keyingina to'laysiz. Kredit 1-5 daqiqada avtomatik tushadi. " +
      "To'lov: UzCard, HUMO, Click, Payme, Paynet.",
    ctaPrimary: "Telegram'da ochish",
    ctaSecondary: "O'yinlarni ko'rish",
    payLabel: "To'lov usullari",
    stats: [
      { value: "10", label: "xizmat" },
      { value: "1-5", label: "daqiqada yetkazish" },
      { value: "24/7", label: "avtomatik ishlaydi" },
    ],
  },
  games: {
    eyebrow: "Katalog",
    title: "Qaysi o'yinni to'ldiramiz?",
    lede: "Har biri uchun kerak bo'ladigan ID va o'rtacha yetkazish vaqti kartochkada ko'rsatilgan.",
    popular: "Mashhur",
    open: "Ochish",
    topupOf: "{unit} to'ldirish",
    all: "Barcha xizmatlar",
  },
  how: {
    eyebrow: "Qanday ishlaydi",
    title: "To'rt qadam, o'rtacha ikki daqiqa",
    lede: "Hech qanday ro'yxatdan o'tish yo'q — Telegram hisobingiz yetadi.",
    steps: [
      {
        title: "Botni oching",
        text: "Telegram'da @Gempayuz_bot ni oching. Mini App ochiladi — alohida ilova o'rnatish shart emas.",
      },
      {
        title: "O'yinni va paketni tanlang",
        text: "Katalogdan o'yinni tanlaysiz, paketlar joriy narx bilan so'mda ko'rinadi.",
      },
      {
        title: "ID ni kiriting — nik tekshiriladi",
        text:
          "Player ID ni yozasiz, tizim o'yin serveridan nikingizni bepul so'rab oladi va ekranda ko'rsatadi. " +
          "Noto'g'ri odamga pul ketishi shu bosqichda to'xtaydi.",
      },
      {
        title: "So'mda to'lang",
        text: "UzCard, HUMO, Click, Payme, Paynet yoki bot balansi. Kredit 1-5 daqiqada hisobingizga tushadi.",
      },
    ],
    note: "ID tekshiruvi bepul va to'lovdan OLDIN bo'ladi — tasdiqlamaguningizcha pul yechilmaydi.",
  },
  why: {
    eyebrow: "Nega GemPay",
    title: "Nima uchun aynan shu yerda",
    lede: "Vositachi tanlashda faqat narx emas, xatolikdan qanday himoyalanganingiz ham muhim.",
    items: [
      {
        icon: "shield-check",
        title: "ID to'lovdan oldin tekshiriladi",
        text:
          "Nikingiz ekranda ko'rsatiladi va siz tasdiqlaysiz. Bitta raqam xato terilib, " +
          "begona hisobga UC ketib qolishi — bu yerda mumkin emas.",
      },
      {
        icon: "wallet",
        title: "To'liq so'mda",
        text:
          "UzCard, HUMO, Click, Payme, Paynet. Visa/Mastercard, xorijiy hamyon yoki " +
          "kriptovalyuta talab qilinmaydi.",
      },
      {
        icon: "zap",
        title: "Avtomatik yetkazish",
        text:
          "Buyurtma odam qo'li bilan emas, provayder API'si orqali bajariladi — " +
          "o'rtacha 1-5 daqiqa, tunda ham, bayramda ham.",
      },
      {
        icon: "telegram",
        title: "Telegram ichida",
        text:
          "Ro'yxatdan o'tish, parol, alohida ilova yo'q. Mini App to'g'ridan-to'g'ri " +
          "chatdan ochiladi va tarixingiz shu yerda qoladi.",
      },
      {
        icon: "receipt",
        title: "Har buyurtmaga chek",
        text:
          "Har bir to'lov tarixda saqlanadi: qaysi o'yin, qaysi ID, qancha, qachon. " +
          "Bahsli holatda ko'rsatadigan narsangiz bor.",
      },
      {
        icon: "headset",
        title: "Tirik qo'llab-quvvatlash",
        text:
          "Buyurtma tushmasa yoki savol chiqsa — @StarsPaymeeSupport javob beradi. " +
          "Bot javobi emas, odam.",
      },
    ],
  },
  trust: {
    eyebrow: "Xavfsizlik",
    title: "Hisobingiz sizda qoladi",
    lede:
      "GemPay hech qachon parolingizni, SMS kodingizni yoki hisobingizga kirishni so'ramaydi. " +
      "To'ldirish uchun faqat OCHIQ Player ID kifoya — o'yin ichida har kim ko'radigan raqam.",
    points: [
      "Parol yoki tasdiqlash kodi hech qachon so'ralmaydi",
      "Faqat ochiq Player ID kerak — hisobga kirilmaydi",
      "To'lov O'zbekiston to'lov tizimlari orqali o'tadi",
      "Nik tasdiqlanmaguncha pul yechilmaydi",
      "Har buyurtma tarixda saqlanadi",
    ],
    cta: "Botni ochish",
  },
  faq: {
    eyebrow: "Savol-javob",
    title: "Ko'p so'raladigan savollar",
    lede: "Javob topilmasa — @StarsPaymeeSupport ga yozing.",
    items: [
      {
        q: "GemPay nima va u qanday ishlaydi?",
        a:
          "GemPay — o'yin valyutasini O'zbekiston so'mida to'ldirish xizmati. Telegram bot " +
          "(@Gempayuz_bot) ichidagi Mini App orqali ishlaydi: o'yinni tanlaysiz, Player ID ni " +
          "kiritasiz, nikingiz tekshirilib ko'rsatiladi, so'ngra so'mda to'laysiz. Kredit " +
          "o'rtacha 1-5 daqiqada avtomatik tushadi.",
      },
      {
        q: "Qaysi kartalar bilan to'lash mumkin?",
        a:
          "UzCard, HUMO, shuningdek Click, Payme va Paynet. Visa yoki Mastercard shart emas — " +
          "aynan shu sabab O'zbekistondagi ko'pchilik rasmiy do'konlardan to'lay olmaydi.",
      },
      {
        q: "Player ID ni noto'g'ri kiritsam nima bo'ladi?",
        a:
          "Hech narsa yo'qotmaysiz. To'lovdan oldin tizim ID bo'yicha nikingizni o'yin " +
          "serveridan so'rab oladi va ekranda ko'rsatadi. Nik notanish bo'lsa — bekor qilasiz " +
          "va ID ni qayta kiritasiz. Pul faqat siz tasdiqlagandan keyin yechiladi.",
      },
      {
        q: "Kredit qancha vaqtda tushadi?",
        a:
          "Ko'pchilik o'yinda 1-3 daqiqa. Delta Force va Asphalt 9 da provayder tomonida " +
          "biroz uzoqroq — 5 daqiqagacha. Har o'yin kartochkasida o'rtacha vaqt yozilgan.",
      },
      {
        q: "Hisobimga kirish kerakmi? Parol so'raladimi?",
        a:
          "Yo'q. Faqat ochiq Player ID kerak — bu o'yin profilingizda har kim ko'radigan raqam. " +
          "Parol, SMS kod yoki hisobga kirish HECH QACHON so'ralmaydi. Kimdir shuni so'rasa — " +
          "bu firibgarlik.",
      },
      {
        q: "Narxlar qayerda ko'rsatilgan?",
        a:
          "Narxlar botning o'zida, paket tanlash bosqichida so'mda ko'rsatiladi. Saytda ataylab " +
          "yozilmagan: narx dollar kursiga bog'liq va o'zgarib turadi, statik sahifadagi raqam " +
          "esa tez orada noto'g'ri bo'lib qolardi.",
      },
      {
        q: "VPN kerakmi?",
        a: "Yo'q. Xizmat O'zbekistondan to'g'ridan-to'g'ri ishlaydi, hech qanday VPN yoki proksi talab qilinmaydi.",
      },
      {
        q: "Buyurtma tushmasa nima qilaman?",
        a:
          "Botdagi «Tarix» bo'limida buyurtma holati ko'rinadi. Belgilangan vaqtdan keyin ham " +
          "tushmasa, @StarsPaymeeSupport ga buyurtma raqami bilan yozing — tekshirib, " +
          "yetkazamiz yoki pulni qaytaramiz.",
      },
    ],
  },
  cta: {
    title: "Bir daqiqada to'ldiring",
    lede: "Telegram hisobingiz bor bo'lsa — hammasi tayyor. Ro'yxatdan o'tish kerak emas.",
    primary: "Telegram'da ochish",
    secondary: "Blogni o'qish",
  },
  footer: {
    tagline: "O'yin hisobini O'zbekiston so'mida to'ldirish — Telegram ichida, avtomatik.",
    colGames: "O'yinlar",
    colCompany: "Loyiha",
    colHelp: "Yordam",
    about: "Biz haqimizda",
    blog: "Blog",
    support: "Qo'llab-quvvatlash",
    api: "Developer API",
    ecosystem: "StarsPaymee — Telegram Stars",
    rights: "Barcha huquqlar himoyalangan.",
    disclaimer:
      "GemPay — mustaqil xizmat. O'yin nomlari va logolari o'z egalarining savdo belgilari; " +
      "GemPay ular bilan rasmiy hamkorlikda emas.",
  },
  game: {
    breadcrumbHome: "Bosh sahifa",
    breadcrumbGames: "O'yinlar",
    titleTemplate: "{game} {unit} sotib olish — so'mda | GemPay",
    metaTemplate: "{game} {unit}",
    descTemplate:
      "{game} uchun {unit} ni O'zbekiston so'mida to'ldiring: UzCard, HUMO, Click, Payme. " +
      "ID bepul tekshiriladi, kredit {eta} da avtomatik tushadi.",
    answerTemplate:
      "{game} da {unit} ni so'mda to'ldirish uchun Telegram'dagi @Gempayuz_bot ni oching, " +
      "{game} ni tanlang va {idLabel} ni kiriting. Nikingiz bepul tekshirilib ko'rsatiladi — " +
      "tasdiqlagach paketni tanlab UzCard, HUMO, Click yoki Payme bilan to'laysiz. " +
      "Kredit {eta} da avtomatik tushadi.",
    needLabel: "Nima kerak",
    etaLabel: "Yetkazish",
    payLabel: "To'lov",
    idWhere: "ID ni qayerdan topaman",
    howTitle: "{game} ni qanday to'ldirish",
    faqTitle: "{game} — savol-javob",
    relatedTitle: "Foydali maqolalar",
    ctaTitle: "{game} hisobini hoziroq to'ldiring",
    regionTitle: "Muhim eslatma",
    packagesTitle: "Qanday paketlar bor",
    packagesText:
      "Paketlar ro'yxati va joriy narxlar botda ko'rsatiladi — ular provayder katalogidan " +
      "jonli olinadi va dollar kursiga qarab yangilanadi.",
  },
  blog: {
    title: "Blog",
    lede: "O'yin to'ldirish bo'yicha qo'llanmalar, taqqoslashlar va muammo yechimlari.",
    readMore: "O'qish",
    minutes: "daqiqa",
    updated: "Yangilandi",
    backToBlog: "Blogga qaytish",
    tocTitle: "Mundarija",
    answerTitle: "Qisqa javob",
    faqTitle: "Savol-javob",
    sourcesTitle: "Manbalar",
    relatedTitle: "O'xshash maqolalar",
    allPosts: "Barcha maqolalar",
  },
};

const ru: Copy = {
  nav: {
    games: "Игры",
    how: "Как это работает",
    why: "Почему GemPay",
    blog: "Блог",
    faq: "Вопросы",
    cta: "Открыть бота",
    menu: "Меню",
    close: "Закрыть",
  },
  hero: {
    badge: "Для Узбекистана",
    titleLead: "Пополните игровой счёт",
    titleAccent: "в сумах",
    titleTail: "",
    lede:
      "PUBG UC, алмазы Mobile Legends, Free Fire, CP для CODM и ещё 6 сервисов — " +
      "картой UzCard, HUMO, через Click или Payme. Без зарубежной карты, VPN и криптовалюты.",
    answer:
      "GemPay — сервис пополнения игровой валюты в сумах через Telegram-бота. " +
      "Вы выбираете игру, вводите Player ID, система бесплатно проверяет и показывает ваш ник — " +
      "оплата проходит только после вашего подтверждения. Зачисление автоматическое, за 1-5 минут. " +
      "Оплата: UzCard, HUMO, Click, Payme, Paynet.",
    ctaPrimary: "Открыть в Telegram",
    ctaSecondary: "Смотреть игры",
    payLabel: "Способы оплаты",
    stats: [
      { value: "10", label: "сервисов" },
      { value: "1-5", label: "минут на зачисление" },
      { value: "24/7", label: "работает автоматически" },
    ],
  },
  games: {
    eyebrow: "Каталог",
    title: "Какую игру пополняем?",
    lede: "Нужный ID и среднее время зачисления указаны прямо на карточке.",
    popular: "Популярное",
    open: "Открыть",
    topupOf: "Пополнение: {unit}",
    all: "Все сервисы",
  },
  how: {
    eyebrow: "Как это работает",
    title: "Четыре шага, в среднем две минуты",
    lede: "Никакой регистрации — достаточно вашего аккаунта Telegram.",
    steps: [
      {
        title: "Откройте бота",
        text: "Откройте @Gempayuz_bot в Telegram. Запустится Mini App — отдельное приложение ставить не нужно.",
      },
      {
        title: "Выберите игру и пакет",
        text: "Выбираете игру в каталоге, пакеты показываются с актуальной ценой в сумах.",
      },
      {
        title: "Введите ID — ник проверится",
        text:
          "Вводите Player ID, система бесплатно запрашивает ваш ник с игрового сервера и показывает его. " +
          "Ошибка в одной цифре останавливается именно здесь.",
      },
      {
        title: "Оплатите в сумах",
        text: "UzCard, HUMO, Click, Payme, Paynet или баланс бота. Зачисление за 1-5 минут.",
      },
    ],
    note: "Проверка ID бесплатна и происходит ДО оплаты — деньги не списываются, пока вы не подтвердите ник.",
  },
  why: {
    eyebrow: "Почему GemPay",
    title: "Почему именно здесь",
    lede: "При выборе посредника важна не только цена, но и то, как вы защищены от ошибки.",
    items: [
      {
        icon: "shield-check",
        title: "ID проверяется до оплаты",
        text:
          "Ваш ник показывается на экране, и вы его подтверждаете. Опечатка в одной цифре " +
          "и UC на чужом аккаунте — здесь невозможно.",
      },
      {
        icon: "wallet",
        title: "Полностью в сумах",
        text:
          "UzCard, HUMO, Click, Payme, Paynet. Visa/Mastercard, зарубежный кошелёк или " +
          "криптовалюта не требуются.",
      },
      {
        icon: "zap",
        title: "Автоматическое зачисление",
        text:
          "Заказ выполняется не вручную, а через API провайдера — в среднем 1-5 минут, " +
          "ночью и в праздники тоже.",
      },
      {
        icon: "telegram",
        title: "Внутри Telegram",
        text:
          "Ни регистрации, ни пароля, ни отдельного приложения. Mini App открывается прямо " +
          "из чата, история остаётся там же.",
      },
      {
        icon: "receipt",
        title: "Чек на каждый заказ",
        text:
          "Каждый платёж сохраняется в истории: какая игра, какой ID, сколько и когда. " +
          "В спорной ситуации вам есть что показать.",
      },
      {
        icon: "headset",
        title: "Живая поддержка",
        text:
          "Если заказ не пришёл или появился вопрос — ответит @StarsPaymeeSupport. " +
          "Человек, а не автоответчик.",
      },
    ],
  },
  trust: {
    eyebrow: "Безопасность",
    title: "Аккаунт остаётся у вас",
    lede:
      "GemPay никогда не просит пароль, SMS-код или доступ к аккаунту. Для пополнения " +
      "достаточно ОТКРЫТОГО Player ID — номера, который в игре видит любой.",
    points: [
      "Пароль и коды подтверждения не запрашиваются никогда",
      "Нужен только открытый Player ID — вход в аккаунт не выполняется",
      "Оплата проходит через платёжные системы Узбекистана",
      "Деньги не списываются, пока ник не подтверждён",
      "Каждый заказ сохраняется в истории",
    ],
    cta: "Открыть бота",
  },
  faq: {
    eyebrow: "Вопросы и ответы",
    title: "Частые вопросы",
    lede: "Не нашли ответ — напишите в @StarsPaymeeSupport.",
    items: [
      {
        q: "Что такое GemPay и как он работает?",
        a:
          "GemPay — сервис пополнения игровой валюты в узбекских сумах. Работает через Mini App " +
          "в Telegram-боте @Gempayuz_bot: выбираете игру, вводите Player ID, система показывает " +
          "ваш ник для подтверждения, затем вы платите в сумах. Зачисление автоматическое, " +
          "в среднем 1-5 минут.",
      },
      {
        q: "Какими картами можно оплатить?",
        a:
          "UzCard, HUMO, а также Click, Payme и Paynet. Visa или Mastercard не нужны — именно " +
          "поэтому большинству пользователей в Узбекистане недоступна оплата в официальных магазинах.",
      },
      {
        q: "Что будет, если я введу Player ID неправильно?",
        a:
          "Вы ничего не потеряете. До оплаты система запрашивает ваш ник по ID с игрового сервера " +
          "и показывает его на экране. Если ник незнакомый — отменяете и вводите ID заново. " +
          "Деньги списываются только после вашего подтверждения.",
      },
      {
        q: "Как быстро приходит зачисление?",
        a:
          "В большинстве игр 1-3 минуты. В Delta Force и Asphalt 9 на стороне провайдера дольше — " +
          "до 5 минут. Среднее время указано на карточке каждой игры.",
      },
      {
        q: "Нужен ли вход в аккаунт? Спросят ли пароль?",
        a:
          "Нет. Нужен только открытый Player ID — номер, который виден в вашем игровом профиле любому. " +
          "Пароль, SMS-код или доступ к аккаунту НИКОГДА не запрашиваются. Если кто-то это просит — " +
          "это мошенничество.",
      },
      {
        q: "Где указаны цены?",
        a:
          "Цены показываются в самом боте, на шаге выбора пакета, в сумах. На сайте их намеренно нет: " +
          "цена зависит от курса доллара и меняется, а число на статической странице быстро стало бы " +
          "неверным.",
      },
      {
        q: "Нужен ли VPN?",
        a: "Нет. Сервис работает из Узбекистана напрямую, VPN или прокси не требуются.",
      },
      {
        q: "Что делать, если заказ не пришёл?",
        a:
          "Статус виден в разделе «История» в боте. Если после заявленного времени зачисления нет — " +
          "напишите в @StarsPaymeeSupport с номером заказа: проверим и либо доставим, либо вернём деньги.",
      },
    ],
  },
  cta: {
    title: "Пополните за минуту",
    lede: "Есть аккаунт Telegram — значит всё готово. Регистрация не нужна.",
    primary: "Открыть в Telegram",
    secondary: "Читать блог",
  },
  footer: {
    tagline: "Пополнение игрового счёта в узбекских сумах — внутри Telegram, автоматически.",
    colGames: "Игры",
    colCompany: "Проект",
    colHelp: "Помощь",
    about: "О нас",
    blog: "Блог",
    support: "Поддержка",
    api: "Developer API",
    ecosystem: "StarsPaymee — Telegram Stars",
    rights: "Все права защищены.",
    disclaimer:
      "GemPay — независимый сервис. Названия и логотипы игр являются товарными знаками их " +
      "владельцев; GemPay не состоит с ними в официальном партнёрстве.",
  },
  game: {
    breadcrumbHome: "Главная",
    breadcrumbGames: "Игры",
    titleTemplate: "{game}: купить {unit} за сумы | GemPay",
    metaTemplate: "{game} {unit}",
    descTemplate:
      "Пополнение {unit} для {game} в узбекских сумах: UzCard, HUMO, Click, Payme. " +
      "ID проверяется бесплатно, зачисление за {eta} автоматически.",
    answerTemplate:
      "Чтобы пополнить {unit} в {game} за сумы, откройте @Gempayuz_bot в Telegram, выберите " +
      "{game} и введите {idLabel}. Ваш ник бесплатно проверится и появится на экране — после " +
      "подтверждения выбираете пакет и платите картой UzCard, HUMO, через Click или Payme. " +
      "Зачисление автоматическое, за {eta}.",
    needLabel: "Что нужно",
    etaLabel: "Зачисление",
    payLabel: "Оплата",
    idWhere: "Где найти ID",
    howTitle: "Как пополнить {game}",
    faqTitle: "{game} — вопросы и ответы",
    relatedTitle: "Полезные статьи",
    ctaTitle: "Пополните {game} прямо сейчас",
    regionTitle: "Важное примечание",
    packagesTitle: "Какие есть пакеты",
    packagesText:
      "Список пакетов и актуальные цены показываются в боте — они берутся из каталога " +
      "провайдера вживую и обновляются вслед за курсом доллара.",
  },
  blog: {
    title: "Блог",
    lede: "Руководства, сравнения и разбор проблем по пополнению игр.",
    readMore: "Читать",
    minutes: "мин",
    updated: "Обновлено",
    backToBlog: "Вернуться в блог",
    tocTitle: "Содержание",
    answerTitle: "Коротко",
    faqTitle: "Вопросы и ответы",
    sourcesTitle: "Источники",
    relatedTitle: "Похожие статьи",
    allPosts: "Все статьи",
  },
};

const en: Copy = {
  nav: {
    games: "Games",
    how: "How it works",
    why: "Why GemPay",
    blog: "Blog",
    faq: "FAQ",
    cta: "Open the bot",
    menu: "Menu",
    close: "Close",
  },
  hero: {
    badge: "Built for Uzbekistan",
    titleLead: "Top up your game account",
    titleAccent: "in so'm",
    titleTail: "",
    lede:
      "PUBG UC, Mobile Legends diamonds, Free Fire, CODM CP and six more services — " +
      "paid with UzCard, HUMO, Click or Payme. No foreign card, no VPN, no crypto.",
    answer:
      "GemPay tops up in-game currency in Uzbek so'm through a Telegram bot. " +
      "You pick the game, enter your Player ID, and your nickname is verified and shown for free — " +
      "you only pay after confirming it. Delivery is automatic within 1-5 minutes. " +
      "Payment: UzCard, HUMO, Click, Payme, Paynet.",
    ctaPrimary: "Open in Telegram",
    ctaSecondary: "Browse games",
    payLabel: "Payment methods",
    stats: [
      { value: "10", label: "services" },
      { value: "1-5", label: "minutes to deliver" },
      { value: "24/7", label: "fully automatic" },
    ],
  },
  games: {
    eyebrow: "Catalogue",
    title: "Which game are we topping up?",
    lede: "The ID you need and the average delivery time are on every card.",
    popular: "Popular",
    open: "Open",
    topupOf: "{unit} top-up",
    all: "All services",
  },
  how: {
    eyebrow: "How it works",
    title: "Four steps, about two minutes",
    lede: "No sign-up — your Telegram account is enough.",
    steps: [
      {
        title: "Open the bot",
        text: "Open @Gempayuz_bot in Telegram. The Mini App launches right there — nothing to install.",
      },
      {
        title: "Pick the game and a pack",
        text: "Choose your game from the catalogue; packs are listed with their current price in so'm.",
      },
      {
        title: "Enter your ID — the nickname is checked",
        text:
          "Type your Player ID and the system fetches your nickname from the game server for free and " +
          "shows it. A single mistyped digit is caught right here.",
      },
      {
        title: "Pay in so'm",
        text: "UzCard, HUMO, Click, Payme, Paynet or your bot balance. Credit lands within 1-5 minutes.",
      },
    ],
    note: "The ID check is free and happens BEFORE payment — nothing is charged until you confirm the nickname.",
  },
  why: {
    eyebrow: "Why GemPay",
    title: "What makes this different",
    lede: "When you pick a reseller, price is only half of it — the other half is how you are protected from mistakes.",
    items: [
      {
        icon: "shield-check",
        title: "ID verified before payment",
        text:
          "Your nickname appears on screen and you confirm it. One wrong digit sending UC to a " +
          "stranger simply cannot happen here.",
      },
      {
        icon: "wallet",
        title: "Entirely in so'm",
        text:
          "UzCard, HUMO, Click, Payme, Paynet. No Visa/Mastercard, no foreign wallet, no crypto required.",
      },
      {
        icon: "zap",
        title: "Automatic delivery",
        text:
          "Orders run through the provider API rather than a human — 1-5 minutes on average, " +
          "overnight and on holidays too.",
      },
      {
        icon: "telegram",
        title: "Inside Telegram",
        text:
          "No sign-up, no password, no separate app. The Mini App opens straight from the chat and " +
          "your history stays with it.",
      },
      {
        icon: "receipt",
        title: "A receipt for every order",
        text:
          "Every payment is stored: which game, which ID, how much, when. If anything is disputed, " +
          "you have something to show.",
      },
      {
        icon: "headset",
        title: "Real support",
        text: "If an order does not arrive, @StarsPaymeeSupport answers — a person, not an autoresponder.",
      },
    ],
  },
  trust: {
    eyebrow: "Safety",
    title: "Your account stays yours",
    lede:
      "GemPay never asks for your password, an SMS code, or access to your account. Topping up " +
      "needs only your PUBLIC Player ID — the number anyone can see in-game.",
    points: [
      "Passwords and verification codes are never requested",
      "Only the public Player ID is needed — we never log into your account",
      "Payments run through Uzbekistan's own payment systems",
      "Nothing is charged until the nickname is confirmed",
      "Every order is kept in your history",
    ],
    cta: "Open the bot",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    lede: "Still stuck? Message @StarsPaymeeSupport.",
    items: [
      {
        q: "What is GemPay and how does it work?",
        a:
          "GemPay tops up in-game currency in Uzbek so'm. It runs as a Mini App inside the Telegram bot " +
          "@Gempayuz_bot: pick your game, enter your Player ID, confirm the nickname it shows you, then " +
          "pay in so'm. Delivery is automatic and takes 1-5 minutes on average.",
      },
      {
        q: "Which cards can I pay with?",
        a:
          "UzCard and HUMO, plus Click, Payme and Paynet. Visa or Mastercard is not required — which is " +
          "exactly why most people in Uzbekistan cannot pay in the official stores.",
      },
      {
        q: "What if I enter the wrong Player ID?",
        a:
          "You lose nothing. Before payment the system looks your nickname up on the game server and shows " +
          "it. If it is not you, cancel and re-enter the ID. Money is only taken after you confirm.",
      },
      {
        q: "How fast does the credit arrive?",
        a:
          "1-3 minutes for most games. Delta Force and Asphalt 9 take longer on the provider side — up to " +
          "5 minutes. The average is printed on each game card.",
      },
      {
        q: "Do I need to log in? Will you ask for my password?",
        a:
          "No. Only your public Player ID is needed — the number visible on your in-game profile. Passwords, " +
          "SMS codes and account access are NEVER requested. Anyone asking for them is scamming you.",
      },
      {
        q: "Where are the prices?",
        a:
          "Prices show inside the bot at the pack-selection step, in so'm. They are deliberately not on this " +
          "site: pricing follows the dollar rate and moves, so a number printed on a static page would soon " +
          "be wrong.",
      },
      {
        q: "Do I need a VPN?",
        a: "No. The service works directly from Uzbekistan; no VPN or proxy is needed.",
      },
      {
        q: "What if my order does not arrive?",
        a:
          "The status is visible under History in the bot. If it is past the stated delivery time, message " +
          "@StarsPaymeeSupport with the order number — we will either deliver it or refund you.",
      },
    ],
  },
  cta: {
    title: "Top up in about a minute",
    lede: "If you have Telegram, you are ready. No registration needed.",
    primary: "Open in Telegram",
    secondary: "Read the blog",
  },
  footer: {
    tagline: "Game top-ups in Uzbek so'm — inside Telegram, fully automatic.",
    colGames: "Games",
    colCompany: "Project",
    colHelp: "Help",
    about: "About",
    blog: "Blog",
    support: "Support",
    api: "Developer API",
    ecosystem: "StarsPaymee — Telegram Stars",
    rights: "All rights reserved.",
    disclaimer:
      "GemPay is an independent service. Game names and logos are trademarks of their respective owners; " +
      "GemPay is not officially affiliated with them.",
  },
  game: {
    breadcrumbHome: "Home",
    breadcrumbGames: "Games",
    titleTemplate: "Buy {game} {unit} in Uzbekistan | GemPay",
    metaTemplate: "{game} {unit}",
    descTemplate:
      "Top up {unit} for {game} in Uzbek so'm: UzCard, HUMO, Click, Payme. " +
      "Your ID is verified free and the credit lands automatically in {eta}.",
    answerTemplate:
      "To top up {unit} in {game} with so'm, open @Gempayuz_bot in Telegram, choose {game} and enter " +
      "your {idLabel}. Your nickname is verified and shown for free — confirm it, pick a pack and pay " +
      "with UzCard, HUMO, Click or Payme. The credit arrives automatically within {eta}.",
    needLabel: "What you need",
    etaLabel: "Delivery",
    payLabel: "Payment",
    idWhere: "Where to find your ID",
    howTitle: "How to top up {game}",
    faqTitle: "{game} — FAQ",
    relatedTitle: "Useful reading",
    ctaTitle: "Top up {game} now",
    regionTitle: "Important note",
    packagesTitle: "Which packs are available",
    packagesText:
      "The pack list and current prices are shown in the bot — they come live from the provider " +
      "catalogue and follow the dollar rate.",
  },
  blog: {
    title: "Blog",
    lede: "Guides, comparisons and fixes for game top-ups.",
    readMore: "Read",
    minutes: "min",
    updated: "Updated",
    backToBlog: "Back to blog",
    tocTitle: "Contents",
    answerTitle: "Short answer",
    faqTitle: "FAQ",
    sourcesTitle: "Sources",
    relatedTitle: "Related articles",
    allPosts: "All articles",
  },
};

export const COPY: Record<Locale, Copy> = { uz, ru, en };

export function t(locale: Locale): Copy {
  return COPY[locale];
}

/** `"{game} {unit} sotib olish"` → qiymatlar bilan to'ldiradi. */
export function fill(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? `{${k}}`);
}
