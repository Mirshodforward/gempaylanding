// Steam klasteri, 3/3 — muammo maqolasi. 2026-10-27, qo'lda, uz + ru.
//
// FAKTLAR (bot `modules/steamTopup/delivery.js`, `routes.js`):
//   · To'lov tasdiqlangach buyurtma provayderga uzatiladi: javob darhol
//     «completed» yoki «processing»; processing har 5 soniyada so'raladi,
//     15 daqiqagacha; muddat tugasa buyurtma «processing»da qoladi va admin
//     qayta tekshiradi (bu yiqilish emas).
//   · Provayder rad etsa — buyurtma «failed», mijozga «To'lovingiz qaytariladi»
//     xabari, qaytarish admin tomonidan qo'lda.
//   · Provayder balansi yetmasa — «processing»da qoladi, admin to'ldirgach davom etadi.
//   · Karta o'tkazmasi aynan ko'rsatilgan summada bo'lishi kerak — «boshqa summa
//     avtomatik topilmaydi» (Mini App matni); buyurtma 15 daqiqa kutadi.
//   · Noto'g'ri, lekin mavjud loginga ketgan pul qaytmaydi (SSA 3.C).
// NARX YO'Q.

import type { Article } from "../types";

const article: Article = {
  slug: "steam-balansi-tushmadi-nima-qilish",
  game: "steam",
  type: "problem",
  datePublished: "2026-10-27",
  dateModified: "2026-10-27",
  pillar: false,
  keywords: [
    "steam balansi tushmadi",
    "steam hamyoniga pul tushmadi",
    "steam to'ldirish kelmadi",
    "steam balansi ko'rinmayapti",
    "steam pul qaytarish",
    "steam buyurtma holati",
    "steam wallet не пришёл",
    "не пришли деньги steam",
  ],
  locales: {
    uz: {
      title: "Steam balansi tushmadi: sabablari va 15 daqiqalik tekshiruv rejasi",
      metaTitle: "Steam balansi tushmadi: sabablari va yechimi",
      metaDescription:
        "Steam hamyoniga pul tushmasa: 60 soniyalik tekshiruv, buyurtma holatlari, provayder navbati, " +
        "noto'g'ri login, valyuta chalkashligi, qaytarish qoidasi, support.",
      excerpt:
        "To'ladingiz, Steam'da esa eski summa: avval qayerga qarash, buyurtma holatlari nimani bildiradi, " +
        "olti sabab, qaysi holatda pul qaytadi va qo'llab-quvvatlashga nima yuborish kerak.",
      answer:
        "Steam balansi tushmasa, avval Steam'ni qayta oching va yuqori o'ngdagi ismingiz yonidagi hamyon summasiga " +
        "qarang — balans dollarda ko'rinadi, so'mda emas. Keyin GemPay'dagi buyurtma holatini oching: to'lov " +
        "tasdiqlanmagan bo'lsa summani tekshiring, «jarayonda» bo'lsa 15 daqiqagacha kuting. Shundan keyin ham yo'q " +
        "bo'lsa, buyurtma raqami, login va chek bilan @StarsPaymeeSupport ga yozing; texnik sabab bo'lsa pul to'liq " +
        "qaytariladi.",
      body: [
        {
          t: "p",
          text:
            "Steam to'ldirishda muammolarning ko'pi uch narsadan kelib chiqadi: to'lov hali tanilmagan, buyurtma provayder navbatida turibdi yoki balans allaqachon tushgan, lekin odam uni boshqa joyda va boshqa valyutada qidiryapti. Qolgan hollarda sabab login. Quyida tekshiruv tartib bilan: avval bir daqiqalik narsalar, keyin buyurtma holatlari, keyin sabablar va qaytarish qoidasi. Umumiy oqim <a href=\"/blog/steam-hamyoni-nima-va-somda-toldirish\">Steam hamyoni haqidagi maqolada</a>.",
        },

        { t: "h2", id: "tez-tekshiruv", text: "Avval 60 soniya: balans qayerda ko'rinadi" },
        {
          t: "list",
          ordered: true,
          items: [
            "Steam ilovasini to'liq yopib, qayta oching — mijoz eski balansni keshdan ko'rsatib turishi mumkin.",
            "Yuqori o'ngdagi ismingiz yonidagi summaga qarang yoki ismni bosib «Account details» ni oching — hamyon balansi o'sha yerda.",
            "Valyutani eslang: siz so'mda to'ladingiz, hamyonda esa dollar summasi ko'rinadi. Tanlagan dollar miqdorini qidiring, so'mdagi raqamni emas.",
            "Buyurtmada qaysi loginni kiritganingizni botdagi «Tarix» bo'limidan ko'ring va hozir kirgan akkaunt loginiga solishtiring — ikkita akkaunti borlar shu yerda adashadi.",
          ],
        },

        { t: "h2", id: "holatlar", text: "GemPay'dagi buyurtma holatlari nimani bildiradi" },
        {
          t: "table",
          caption: "Botdagi «Tarix» bo'limida ko'rinadigan holatlar va har birida nima qilish.",
          head: ["Holat", "Ma'nosi", "Nima qilish"],
          rows: [
            ["To'lov kutilmoqda", "Tizim pulni hali ko'rmadi. Karta o'tkazmasida summa aynan ko'rsatilgandek bo'lmasa, u avtomatik topilmaydi", "Summani solishtiring; buyurtma 15 daqiqa ichida to'lanishi kerak, aks holda yangisini oching va chekni saqlang"],
            ["To'landi, jarayonda", "Buyurtma provayderga uzatildi; u darhol yoki navbat bilan bajariladi", "15 daqiqagacha kuting. Shu vaqt ichida qayta to'lamang"],
            ["Bajarildi", "Provayder balans tushganini tasdiqladi", "Steam'ni qayta oching va dollar summasiga qarang; ko'rinmasa — supportga"],
            ["Xato", "Provayder buyurtmani rad etdi, bot sizga xabar yubordi", "Hech narsa qilmang: pul qaytariladi, savol bo'lsa support"],
          ],
        },
        {
          t: "p",
          text:
            "«Jarayonda» holati 15 daqiqadan oshsa ham bu yiqilish emas: bot buyurtmani ochiq qoldiradi va admin uni qo'lda qayta tekshiradi. Bunday holatda yangi buyurtma ochish shart emas — ikki marta to'lab qo'yasiz.",
        },

        { t: "h2", id: "sabablar", text: "Olti sabab — tez-tez uchraydiganidan kamiga" },
        {
          t: "list",
          ordered: true,
          items: [
            "<strong>To'lov tanilmagan.</strong> Karta o'tkazmasida bot aynan ko'rsatilgan summani kutadi: yaxlitlangan yoki kam summa buyurtmaga bog'lanmaydi va buyurtma «to'lov kutilmoqda»da qoladi. Bank chekini olib, buyurtma raqami bilan supportga yozing — to'lov qo'lda bog'lanadi.",
            "<strong>Provayder navbati.</strong> Steam to'ldirish tashqi provayder orqali o'tadi va ba'zan darhol emas, bir necha daqiqada bajariladi. Bot 15 daqiqagacha o'zi kutadi.",
            "<strong>Noto'g'ri, lekin mavjud login.</strong> Eng og'ir holat: pul boshqa odamning hamyoniga tushgan, buyurtma esa «bajarildi» deb turibdi. Valve hamyon pulini akkauntlar orasida ko'chirmaydi va bu summa qaytmaydi. Loginni qayerdan olish — <a href=\"/blog/steam-login-qayerda-account-name\">alohida maqolada</a>.",
            "<strong>Mavjud bo'lmagan login.</strong> Provayder rad etadi, buyurtma «xato» bo'ladi, bot «To'lovingiz qaytariladi» deb yozadi. Bu yaxshi holat: pul qaytadi, loginni tekshirib qayta buyurtma berasiz.",
            "<strong>Valyuta chalkashligi.</strong> Balans tushgan, lekin odam so'mdagi raqamni qidiryapti yoki akkaunt valyutasi kutilganidan boshqa. Hamyon valyutasini akkaunt hududi belgilaydi, to'ldirish xizmati emas.",
            "<strong>Provayder tomonidagi texnik to'xtash.</strong> Buyurtma «jarayonda» qoladi, admin tekshiradi va yo yetkazadi, yo qaytaradi. Sizdan hech narsa talab qilinmaydi, lekin yozib qo'ysangiz tezroq hal bo'ladi.",
          ],
        },

        { t: "h2", id: "support", text: "Qo'llab-quvvatlashga nima yuborish" },
        {
          t: "p",
          text:
            "@StarsPaymeeSupport ga bitta xabarda quyidagilarni yuboring — shunda tekshiruv birinchi javobdayoq boshlanadi, savol-javobga vaqt ketmaydi.",
        },
        {
          t: "facts",
          items: [
            { k: "Buyurtma raqami", v: "Botdagi «Tarix» bo'limidan" },
            { k: "Login", v: "Buyurtmada kiritilgan aynan o'sha nom" },
            { k: "To'lov cheki", v: "Bank ilovasidagi chek yoki Click, Uzum Bank tasdig'i — summa va vaqt bilan" },
            { k: "Vaqt", v: "Qachon to'laganingiz va qachon tekshirganingiz" },
            { k: "Steam skrinshoti", v: "Account details sahifasi: login va hamyon balansi bitta kadrda" },
          ],
        },
        {
          t: "note",
          tone: "warn",
          title: "Support hech qachon parol so'ramaydi",
          text:
            "Tekshiruv uchun buyurtma raqami, login va chek yetarli. Parol, Steam Guard kodi yoki akkauntga kirishni so'ragan odam — qo'llab-quvvatlash emas, hatto nomi «Support» bo'lsa ham.",
        },

        { t: "h2", id: "qaytarish", text: "Pul qachon qaytariladi — va qachon qaytmaydi" },
        {
          t: "table",
          caption: "Qaytarish qoidasi holat bo'yicha.",
          head: ["Holat", "Qaytariladimi"],
          rows: [
            ["Provayder rad etdi, buyurtma «xato»", "Ha, to'liq — to'lov qilingan usulga"],
            ["Login mavjud emas edi", "Ha — buyurtma xato bilan to'xtaydi"],
            ["Texnik sabab bilan 15 daqiqadan keyin ham yetkazilmadi", "Ha, agar admin yetkaza olmasa"],
            ["Balans sizning akkauntingizga tushdi", "Yo'q — hamyon puli qaytarilmaydi, bu Steam qoidasi"],
            ["Balans siz kiritgan boshqa odamning akkauntiga tushdi", "Yo'q — Valve pulni ko'chirmaydi, biz ham ola olmaymiz"],
          ],
        },
        {
          t: "p",
          text:
            "Ariza va muddatlar <a href=\"/tolov-va-qaytarish\">to'lov va pulni qaytarish sahifasida</a>. Oxirgi qatorga alohida e'tibor bering: Steam'da nik tekshiruvi yo'qligi uchun noto'g'ri login — o'yinlardagi noto'g'ri ID dan ham xavfliroq, chunki bot sizni to'lovdan oldin to'xtata olmaydi.",
        },

        { t: "h2", id: "oldini", text: "Keyingi safar: uch daqiqalik oldini olish" },
        {
          t: "list",
          items: [
            "Loginni «Account details» sahifasidan nusxalang, nik yoki havoladan emas, va botdagi yozuv bilan harfma-harf solishtiring.",
            "Karta o'tkazmasida summani tiyinigacha ko'rsatilgandek yozing; yaxlitlamang.",
            "Bitta buyurtma ochiq turganda ikkinchisini ochmang — provayder navbatini kuting.",
            "Buyurtma raqami va chekni to'lov paytidayoq saqlang.",
            "Hamyon qaysi valyutada ekanini oldindan bilib oling — Steam do'konidagi narx belgisi buni ko'rsatadi.",
          ],
        },
        { t: "cta", text: "Buyurtma holatini botdagi «Tarix»da ko'ring; 15 daqiqadan keyin ham yo'q bo'lsa, chek bilan supportga yozing." },

        {
          t: "sources",
          items: [
            { label: "Steam Subscriber Agreement, 3.C Steam Wallet", href: "https://store.steampowered.com/subscriber_agreement/", note: "hamyon puli qaytarilmaydi va o'tkazilmaydi" },
            { label: "Steam Support: SteamID, Steam Account Names", href: "https://help.steampowered.com/en/faqs/view/2816-BE67-5B69-0FEC", note: "akkaunt nomi o'zgarmaydi — buyurtmadagi login bilan solishtirish uchun" },
          ],
        },
        {
          t: "links",
          title: "Steam bo'yicha boshqa qo'llanmalar",
          items: [
            { label: "Steam hamyoni nima va uni so'mda qanday to'ldirish", href: "/blog/steam-hamyoni-nima-va-somda-toldirish" },
            { label: "Steam login qayerda turadi va uni berish xavfsizmi", href: "/blog/steam-login-qayerda-account-name" },
            { label: "Steam hamyonini to'ldirish sahifasi", href: "/oyinlar/steam" },
            { label: "To'lov va pulni qaytarish", href: "/tolov-va-qaytarish" },
            { label: "O'yin hisobini xavfsiz to'ldirish — umumiy qoida", href: "/blog/oyin-pul-xavfsiz-toldirish" },
          ],
        },
      ],
      faq: [
        { q: "Buyurtma «bajarildi», lekin Steam'da balans o'zgarmagan", a: "Steam'ni to'liq yopib qayta oching va Account details'dagi hamyon summasiga qarang — mijoz eski raqamni ko'rsatib turgan bo'lishi mumkin. Buyurtmadagi loginni hozir kirgan akkaunt logini bilan solishtiring. Ikkalasi ham to'g'ri bo'lsa, skrinshot bilan supportga yozing." },
        { q: "Qancha kutish kerak?", a: "Odatda balans bir daqiqa atrofida tushadi. Provayder navbatida buyurtma 15 daqiqagacha «jarayonda» turishi mumkin. Shundan keyin supportga yozing — lekin yangi buyurtma ochmang." },
        { q: "Karta o'tkazmasini yaxlitlab yubordim, endi nima bo'ladi?", a: "Tizim boshqa summani avtomatik tanimaydi, buyurtma «to'lov kutilmoqda»da qoladi. Bank cheki va buyurtma raqamini supportga yuboring — to'lov qo'lda bog'lanadi." },
        { q: "Noto'g'ri loginga to'ldirib yubordim, qaytarasizlarmi?", a: "Login mavjud bo'lmasa, provayder rad etadi va pul qaytadi. Login mavjud bo'lsa, balans o'sha akkauntga tushgan — Valve uni ko'chirmaydi va biz ham ola olmaymiz. Shuning uchun loginni to'lovdan oldin solishtirish shart." },
        { q: "Balans so'mda emas, dollarda ko'rinyapti — xatomi?", a: "Yo'q. Hamyon valyutasini akkaunt hududi belgilaydi, O'zbekiston akkauntlarida bu odatda dollar. Siz tanlagan dollar miqdorini qidiring." },
        { q: "Ikki marta to'lab qo'ydim, nima qilay?", a: "Ikkinchi to'lov ikkinchi buyurtma yaratgan bo'lsa, u ham bajariladi — hamyonga ikkala summa tushadi. Hali tanilmagan ikkinchi to'lov bo'lsa, chek bilan supportga yozing." },
        { q: "Pul qachon qaytadi?", a: "Buyurtma «xato» bo'lsa, qaytarish to'lov qilingan usulga amalga oshiriladi; ariza muddatlari to'lov va qaytarish sahifasida. Yetkazilgan balans qaytarilmaydi." },
      ],
    },

    ru: {
      title: "Баланс Steam не пришёл: причины и план проверки на 15 минут",
      metaTitle: "Баланс Steam не пришёл: причины и решение",
      metaDescription:
        "Деньги не пришли в кошелёк Steam: проверка за 60 секунд, статусы заказа, очередь провайдера, " +
        "неверный логин, валюта, правило возврата и что слать в поддержку.",
      excerpt:
        "Вы заплатили, а в Steam старая сумма: куда смотреть сначала, что означают статусы заказа, шесть причин, " +
        "когда деньги возвращаются и что отправить в поддержку.",
      answer:
        "Если баланс Steam не пришёл, сначала перезапустите Steam и посмотрите сумму кошелька рядом с вашим именем " +
        "в правом верхнем углу — баланс показан в долларах, а не в сумах. Затем откройте статус заказа в GemPay: " +
        "если оплата не подтверждена, проверьте сумму; если «в обработке», подождите до 15 минут. Если и после этого " +
        "пусто, напишите в @StarsPaymeeSupport с номером заказа, логином и чеком; при технической причине деньги " +
        "вернут полностью.",
      body: [
        {
          t: "p",
          text:
            "Большинство проблем с пополнением Steam сводится к трём вещам: платёж ещё не распознан, заказ стоит в очереди провайдера или баланс уже пришёл, но человек ищет его не там и не в той валюте. В остальных случаях причина — логин. Ниже проверка по порядку: сначала то, что занимает минуту, потом статусы заказа, затем причины и правило возврата. Весь процесс целиком — в <a href=\"/blog/steam-hamyoni-nima-va-somda-toldirish\">статье о кошельке Steam</a>.",
        },

        { t: "h2", id: "tez-tekshiruv", text: "Сначала 60 секунд: где виден баланс" },
        {
          t: "list",
          ordered: true,
          items: [
            "Полностью закройте и заново откройте Steam — клиент может показывать старый баланс из кеша.",
            "Посмотрите сумму рядом с вашим именем в правом верхнем углу или нажмите имя и откройте «Account details» — баланс кошелька там.",
            "Вспомните про валюту: вы платили сумами, а в кошельке показана сумма в долларах. Ищите выбранное количество долларов, а не число в сумах.",
            "Посмотрите в разделе «История» бота, какой логин был в заказе, и сверьте с логином аккаунта, в который вошли сейчас, — владельцы двух аккаунтов путаются именно здесь.",
          ],
        },

        { t: "h2", id: "holatlar", text: "Что означают статусы заказа в GemPay" },
        {
          t: "table",
          caption: "Статусы в разделе «История» бота и что делать в каждом.",
          head: ["Статус", "Что значит", "Что делать"],
          rows: [
            ["Ожидает оплаты", "Система ещё не увидела деньги. При переводе на карту сумма не ровно та, что показана, автоматически не находится", "Сверьте сумму; заказ нужно оплатить за 15 минут, иначе откройте новый и сохраните чек"],
            ["Оплачен, в обработке", "Заказ передан провайдеру; он выполнится сразу или в порядке очереди", "Подождите до 15 минут. Не платите повторно"],
            ["Выполнен", "Провайдер подтвердил зачисление", "Перезапустите Steam и посмотрите долларовую сумму; если не видно — в поддержку"],
            ["Ошибка", "Провайдер отклонил заказ, бот прислал вам сообщение", "Ничего не делайте: деньги вернут, при вопросах — поддержка"],
          ],
        },
        {
          t: "p",
          text:
            "Если «в обработке» длится дольше 15 минут, это не сбой: бот оставляет заказ открытым, и администратор перепроверяет его вручную. Открывать новый заказ в такой ситуации не нужно — заплатите дважды.",
        },

        { t: "h2", id: "sabablar", text: "Шесть причин — от самой частой к редкой" },
        {
          t: "list",
          ordered: true,
          items: [
            "<strong>Платёж не распознан.</strong> При переводе на карту бот ждёт ровно указанную сумму: округлённая или меньшая к заказу не привязывается, и заказ остаётся в «ожидает оплаты». Возьмите банковский чек и напишите в поддержку с номером заказа — платёж привяжут вручную.",
            "<strong>Очередь провайдера.</strong> Пополнение Steam идёт через внешнего провайдера и иногда выполняется не сразу, а за несколько минут. Бот ждёт сам до 15 минут.",
            "<strong>Неверный, но существующий логин.</strong> Самый тяжёлый случай: деньги ушли в кошелёк другого человека, а заказ показывает «выполнен». Valve не переносит средства кошелька между аккаунтами, и эта сумма не возвращается. Где брать логин — в <a href=\"/blog/steam-login-qayerda-account-name\">отдельной статье</a>.",
            "<strong>Несуществующий логин.</strong> Провайдер отклоняет заказ, статус становится «ошибка», бот пишет, что оплата будет возвращена. Это хороший случай: деньги вернутся, вы проверяете логин и заказываете заново.",
            "<strong>Путаница с валютой.</strong> Баланс пришёл, но человек ищет число в сумах, или валюта аккаунта оказалась не той, что ожидалась. Валюту кошелька задаёт регион аккаунта, а не сервис пополнения.",
            "<strong>Техническая остановка у провайдера.</strong> Заказ остаётся «в обработке», администратор проверяет и либо доставляет, либо возвращает. От вас ничего не требуется, но сообщение ускорит решение.",
          ],
        },

        { t: "h2", id: "support", text: "Что отправить в поддержку" },
        {
          t: "p",
          text: "Отправьте в @StarsPaymeeSupport одним сообщением всё перечисленное — тогда проверка начнётся с первого ответа, без уточняющих вопросов.",
        },
        {
          t: "facts",
          items: [
            { k: "Номер заказа", v: "Из раздела «История» в боте" },
            { k: "Логин", v: "Ровно то имя, что было введено в заказе" },
            { k: "Чек об оплате", v: "Чек из банковского приложения или подтверждение Click, Uzum Bank — с суммой и временем" },
            { k: "Время", v: "Когда платили и когда проверяли" },
            { k: "Скриншот Steam", v: "Страница Account details: логин и баланс кошелька в одном кадре" },
          ],
        },
        {
          t: "note",
          tone: "warn",
          title: "Поддержка никогда не спрашивает пароль",
          text:
            "Для проверки достаточно номера заказа, логина и чека. Тот, кто просит пароль, код Steam Guard или вход в аккаунт, — не поддержка, даже если называется «Support».",
        },

        { t: "h2", id: "qaytarish", text: "Когда деньги возвращаются — и когда нет" },
        {
          t: "table",
          caption: "Правило возврата по ситуациям.",
          head: ["Ситуация", "Возврат"],
          rows: [
            ["Провайдер отклонил, заказ «ошибка»", "Да, полностью — тем же способом, которым платили"],
            ["Логина не существовало", "Да — заказ останавливается с ошибкой"],
            ["По технической причине не доставлено и через 15 минут", "Да, если администратор не сможет доставить"],
            ["Баланс пришёл на ваш аккаунт", "Нет — средства кошелька не возвращаются, это правило Steam"],
            ["Баланс пришёл на чужой аккаунт, логин которого ввели вы", "Нет — Valve деньги не переносит, и мы их забрать не можем"],
          ],
        },
        {
          t: "p",
          text:
            "Заявление и сроки — на странице <a href=\"/tolov-va-qaytarish\">оплаты и возврата</a>. Обратите внимание на последнюю строку: поскольку в Steam нет проверки ника, неверный логин опаснее неверного ID в играх — бот не может остановить вас до оплаты.",
        },

        { t: "h2", id: "oldini", text: "В следующий раз: профилактика за три минуты" },
        {
          t: "list",
          items: [
            "Копируйте логин со страницы «Account details», а не из ника или ссылки, и сверяйте с полем в боте побуквенно.",
            "При переводе на карту вводите сумму до тийина, как показано; не округляйте.",
            "Пока один заказ открыт, не открывайте второй — дождитесь очереди провайдера.",
            "Сохраняйте номер заказа и чек сразу при оплате.",
            "Заранее узнайте валюту кошелька — её показывает значок цены в магазине Steam.",
          ],
        },
        { t: "cta", text: "Статус заказа смотрите в «Истории» бота; если через 15 минут ничего нет, пишите в поддержку с чеком." },

        {
          t: "sources",
          items: [
            { label: "Steam Subscriber Agreement, 3.C Steam Wallet", href: "https://store.steampowered.com/subscriber_agreement/", note: "средства кошелька не возвращаются и не переносятся" },
            { label: "Steam Support: SteamID, Steam Account Names", href: "https://help.steampowered.com/en/faqs/view/2816-BE67-5B69-0FEC", note: "имя аккаунта не меняется — для сверки с логином в заказе" },
          ],
        },
        {
          t: "links",
          title: "Другие руководства по Steam",
          items: [
            { label: "Что такое кошелёк Steam и как пополнить его за сумы", href: "/blog/steam-hamyoni-nima-va-somda-toldirish" },
            { label: "Где находится логин Steam и безопасно ли его сообщать", href: "/blog/steam-login-qayerda-account-name" },
            { label: "Страница пополнения кошелька Steam", href: "/oyinlar/steam" },
            { label: "Оплата и возврат", href: "/tolov-va-qaytarish" },
            { label: "Как безопасно пополнить игровой аккаунт — общее правило", href: "/blog/oyin-pul-xavfsiz-toldirish" },
          ],
        },
      ],
      faq: [
        { q: "Заказ «выполнен», а баланс в Steam не изменился", a: "Полностью закройте и заново откройте Steam и посмотрите сумму кошелька в Account details — клиент мог показывать старое число. Сверьте логин из заказа с логином аккаунта, в который вошли. Если оба верны, напишите в поддержку со скриншотом." },
        { q: "Сколько ждать?", a: "Обычно баланс приходит примерно за минуту. В очереди провайдера заказ может быть «в обработке» до 15 минут. После этого пишите в поддержку — но не открывайте новый заказ." },
        { q: "Округлил сумму перевода на карту, что теперь?", a: "Другую сумму система автоматически не распознаёт, заказ остаётся в «ожидает оплаты». Отправьте в поддержку банковский чек и номер заказа — платёж привяжут вручную." },
        { q: "Пополнил неверный логин, вернёте?", a: "Если логина не существует, провайдер отклонит заказ и деньги вернутся. Если логин существует, баланс ушёл на тот аккаунт — Valve его не переносит, и мы забрать не можем. Поэтому сверка логина до оплаты обязательна." },
        { q: "Баланс в долларах, а не в сумах — это ошибка?", a: "Нет. Валюту кошелька задаёт регион аккаунта, у аккаунтов из Узбекистана это обычно доллары. Ищите выбранное количество долларов." },
        { q: "Заплатил дважды, что делать?", a: "Если второй платёж создал второй заказ, он тоже выполнится — в кошелёк придут обе суммы. Если второй платёж ещё не распознан, напишите в поддержку с чеком." },
        { q: "Когда вернутся деньги?", a: "При статусе «ошибка» возврат делается тем же способом, которым платили; сроки заявления — на странице оплаты и возврата. Доставленный баланс не возвращается." },
      ],
    },
  },
};

export default article;
