// Telegram Premium — o'yinchi nuqtai nazaridan. 2026-10-22.
//
// starstg.uz'da Premium haqida o'nlab maqola bor (narxi, eng oson usul,
// bepul olish mumkinmi, muddati tugasa...). Bu maqola ularni
// takrorlamaydi: u obunani squad chati, turnir yozuvi va patch-note
// kanallari nuqtai nazaridan ko'radi va GemPay'dagi oqimni yozadi.
// Shu bilan birga halol: kimga kerak EMASligi ham aytiladi.

import type { Article } from "../types";
import { PREMIUM_PLANS, premiumPerMonth, som, somApprox } from "../../telegram";

const uz = (n: number) => som(n, "uz");
const ru = (n: number) => som(n, "ru");
const P = (m: number) => PREMIUM_PLANS.find((p) => p.months === m)!;
const SAVE = Math.round((1 - premiumPerMonth(P(12)) / premiumPerMonth(P(3))) * 100);

const article: Article = {
  slug: "telegram-premium-oyinchi-uchun",
  game: null,
  type: "info",
  datePublished: "2026-10-23",
  dateModified: "2026-10-23",
  pillar: false,
  keywords: [
    "telegram premium o'yinchi uchun",
    "telegram premium nima beradi",
    "telegram premium 4 gb",
    "telegram premium olish gempay",
    "telegram premium narxi so'mda",
    "telegram premium reklamasiz",
    "telegram premium для геймера",
  ],
  locales: {
    uz: {
      title: "Telegram Premium o'yinchiga nima beradi — va uni GemPay'da so'mda qanday olish mumkin",
      metaTitle: "Telegram Premium o'yinchi uchun: nima beradi, narxi",
      metaDescription:
        `Telegram Premium o'yinchi uchun: 4 GB gameplay, tez yuklab olish, reklamasiz kanallar, ovozni matnga. ` +
        `GemPay'da 3, 6, 12 oy — ${uz(P(3).price)}dan, parolsiz.`,
      excerpt:
        "Obuna haqida reklama tilida emas, squad chati va turnir kanallari nuqtai nazaridan: qaysi funksiya " +
        "haqiqatan kerak, qaysi biri bezak, kimga umuman kerak emas — va uni so'mda qanday olinadi.",
      answer:
        `Telegram Premium o'yinchiga 4 GB gacha fayl yuborish, tezlik cheklovisiz yuklab olish, kanallarda reklamasiz ` +
        `tasma, ovozli xabarni matnga aylantirish va chat tarjimasini beradi. GemPay'da obuna «Telegram» ` +
        `bo'limidan 3, 6 yoki 12 oyga olinadi: 3 oy ${uz(P(3).price)}, 12 oy ${uz(P(12).price)}. Faqat @username ` +
        `kerak, parol so'ralmaydi; to'lov UzCard, HUMO, Click yoki Uzum Bank bilan so'mda.`,
      body: [
        {
          t: "p",
          text:
            "Premium'ni odatda «stiker, emoji va animatsion avatar» deb sotishadi. O'yinchi uchun esa qiymat boshqa joyda: 30 daqiqalik turnir yozuvini siqmasdan yuborish, squad'ning ovozli xabarini match paytida ovozsiz o'qish, inglizcha patch-note kanalini bir bosishda tarjima qilish. Quyida obunaning har bir funksiyasi aynan shu nuqtai nazardan — va oxirida halol bo'lim: kimga u kerak emas. Narxlar jadvali va savol-javob <a href=\"/premium\">Premium sahifasida</a>.",
        },

        { t: "h2", id: "fayllar", text: "4 GB: turnir yozuvi siqilmasdan ketadi" },
        {
          t: "p",
          text:
            "Oddiy akkauntda bitta faylning chegarasi 2 GB. 1080p da yozilgan 20-30 daqiqalik gameplay bu chegaradan osonlik bilan oshadi — natijada yo video siqiladi va sifat ketadi, yo faylni bo'laklarga bo'lishga to'g'ri keladi. Premium bilan chegara 4 GB: yozuv asl sifatida, bitta fayl bo'lib ketadi. Klan kanaliga highlight yuboradigan yoki murabbiyga to'liq matchni ko'rsatadigan odam uchun bu obunaning asosiy sababi.",
        },
        {
          t: "p",
          text:
            "Shuni ham bilib qo'ying: chegara yuklab OLISHGA emas, yuklashga tegishli. Premium'siz odam sizning 4 GB faylingizni bemalol yuklab oladi — faqat sekinroq.",
        },

        { t: "h2", id: "yuklab-olish", text: "Tezlik cheklovisiz yuklab olish" },
        {
          t: "p",
          text:
            "Telegram oddiy akkauntlarda katta fayl yuklab olish tezligini cheklaydi. Kanaldan 1-2 GB li video yoki arxivni olayotganda bu sezilarli: Premium'da cheklov yo'q va tezlik internetingiz qancha bersa, shuncha bo'ladi. Turnir yozuvlari, mod arxivlari emas — rasmiy o'yin yangilanishlari haqidagi uzun videolar va stream kesmalari uchun eng ko'p seziladi.",
        },

        { t: "h2", id: "reklama", text: "Reklamasiz kanallar" },
        {
          t: "p",
          text:
            "Katta ochiq kanallarda Telegram'ning o'z reklamasi (sponsor xabarlari) chiqadi. O'yin yangiliklari, turnir e'lonlari va klan kanallarini kuzatadigan odam uni kuniga o'nlab marta ko'radi. Premium bu xabarlarni yashiradi. Kanal adminlarining o'z reklamasi, albatta, qoladi — bu Telegram'ning emas, ularning posti.",
        },

        { t: "h2", id: "ovoz-tarjima", text: "Ovozli xabar matnga, kanal tarjimaga" },
        {
          t: "p",
          text:
            "Match paytida squad chatiga ovozli xabar keladi — tinglashga vaqt ham, imkon ham yo'q. Premium'da xabar ostida «matnga aylantirish» tugmasi bor: ovoz bir necha soniyada matn bo'lib chiqadi va uni ovozsiz o'qiysiz. Xuddi shu narsa video-xabarlar bilan ham ishlaydi.",
        },
        {
          t: "p",
          text:
            "Ikkinchi funksiya — butun chat yoki kanalni tarjima qilish. Rasmiy patch-note'lar odatda ingliz tilida, CIS hamjamiyat kanallari — rus tilida chiqadi. Premium bilan kanalning tepasida tarjima tugmasi paydo bo'ladi va keyingi postlar tanlangan tilda o'qiladi. Tarjima mashina tarjimasi, lekin yangilanishda nima o'zgarganini tushunish uchun yetarli.",
        },

        { t: "h2", id: "profil", text: "Profil: emoji-status, stikerlar, avatar" },
        {
          t: "p",
          text:
            "Bu qism bezak, lekin o'yinchilar uchun ma'noli bezak: ism yonidagi emoji-status (klan belgisi, sevimli o'yin), premium stikerlar va animatsion avatar. Klan chatida kim Premium'da ekani ko'rinadi. Funksional foyda bermaydi — shuni bilib oling va faqat shuning uchun obuna olmang.",
        },

        { t: "h2", id: "kimga-kerak-emas", text: "Kimga kerak emas" },
        {
          t: "list",
          items: [
            "Telegram'ni faqat yozishma uchun ishlatsangiz va katta fayl yubormasangiz — 2 GB chegarasi sizga hech qachon tegmaydi.",
            "Bir-ikki kanalni kuzatsangiz — reklama ham shunchalik kam ko'rinadi.",
            "Byudjet cheklangan bo'lsa — o'yin ichidagi UC yoki olmos sizga ko'proq foyda beradi. Obuna o'yindagi hech narsani ochmaydi.",
            "Ovozli xabarlarni tinglab o'qiydigan va inglizchani bemalol tushunadigan odamga transkripsiya va tarjima ham ortiqcha.",
          ],
        },

        { t: "h2", id: "narx", text: "Narxi va qaysi muddat foydali" },
        {
          t: "table",
          caption: "GemPay'dagi tariflar. Narx barcha to'lov usulida bir xil.",
          head: ["Muddat", "Jami", "Oyiga"],
          rows: PREMIUM_PLANS.map((p) => [`${p.months} oy`, uz(p.price), somApprox(premiumPerMonth(p), "uz")]),
        },
        {
          t: "p",
          text:
            `Muddat uzaygani sari bir oy arzonlashadi: 12 oylikda oy ${somApprox(premiumPerMonth(P(12)), "uz")}ga tushadi, bu 3 oylikdagi ${somApprox(premiumPerMonth(P(3)), "uz")}dan taxminan ${SAVE}% arzon. Premium'dan bir yil davomida foydalanishga ishonchingiz komil bo'lsa — 12 oy; sinab ko'rmoqchi bo'lsangiz — 3 oy. Bir oylik tarif GemPay'dagi oqimda yo'q; u kerak bo'lsa, <a href="https://www.starstg.uz/uz/premium" target="_blank" rel="noopener">StarsPaymee'ning Premium sahifasida</a> bor.`,
        },
        {
          t: "note",
          tone: "info",
          title: "Click'da ham, karta o'tkazmasida ham bir xil",
          text:
            "Stars'dan farqli, Premium'ga onlayn to'lov ustamasi qo'shilmaydi. Qaysi usulni tanlasangiz ham jadvaldagi summani to'laysiz — shuning uchun qulayrog'ini tanlang: Click yoki Uzum Bank summani o'zi qo'yadi va tasdiqlaydi.",
        },

        { t: "h2", id: "qanday-olinadi", text: "GemPay'da qanday olinadi" },
        {
          t: "steps",
          items: [
            {
              title: "@Gempayuz_bot → «GemPay'ni ochish»",
              text: "Mini App ochiladi. «Telegram» bo'limi shu yerda; Android ilovasida hozircha u yo'q.",
            },
            {
              title: "«Telegram» bo'limida Premium plitkasini bosing",
              text: "O'yinlar ro'yxatidan yuqorida Stars, Premium va Gift plitkalari turadi.",
            },
            {
              title: "Muddat va @username",
              text: "3, 6 yoki 12 oyni tanlang. O'zingizning yoki sovg'a qilmoqchi bo'lgan odamning username'ini yozing — ilova profilni topib ko'rsatadi, shu yerda tekshirasiz.",
            },
            {
              title: "So'mda to'lang",
              text: "Karta o'tkazmasida ko'rsatilgan summani aynan yuborasiz, Click yoki Uzum Bank'da tasdiq avtomatik. Obuna to'lovdan keyin bir necha soniyada ulanadi va Telegram → Sozlamalar → Telegram Premium bo'limida ko'rinadi.",
            },
          ],
        },
        { t: "cta", text: "Premium kerakmi? @Gempayuz_bot → «Telegram» bo'limi → Premium. Username bilan, parolsiz." },

        { t: "h2", id: "xavfsizlik", text: "Nima so'ralmaydi — va «bepul Premium» haqida" },
        {
          t: "p",
          text:
            "Obuna Telegram'ning rasmiy sovg'a mexanizmi (Gift Premium) orqali ulanadi: siz username berasiz, Telegram obunani o'sha akkauntga biriktiradi. Akkauntga kirish, parol, SMS yoki kirish kodi — bularning hech biri kerak emas va so'ralmaydi.",
        },
        {
          t: "note",
          tone: "warn",
          title: "«Bepul Premium» va «yarim narx, akkauntga kiring»",
          text:
            "Telegram Premium'ni bepul bermaydi. Akkauntga kirishni so'raydigan takliflar — akkauntni o'g'irlash yoki uni boshqa odamlarga ijaraga berish sxemalari. Narx rasmiy tarifdan ancha past bo'lsa ham shubhalaning: Telegram'dan o'g'irlangan karta bilan olingan obuna keyin bekor qilinadi.",
        },

        {
          t: "sources",
          items: [
            { label: "Telegram Premium FAQ", href: "https://telegram.org/faq_premium", note: "imkoniyatlarning rasmiy ro'yxati va chegaralar" },
            { label: "Telegram Premium e'loni (2022)", href: "https://telegram.org/blog/700-million-and-premium", note: "obuna qachon va nima uchun kiritilgani" },
            { label: "Fragment — Premium", href: "https://fragment.com/premium", note: "Telegram'ning rasmiy marketplace'i: Premium'ni kripto-hamyon bilan sovg'a qilish" },
          ],
        },
        {
          t: "links",
          title: "Shu mavzudagi sahifalar",
          items: [
            { label: "Telegram Premium — narxlar va savol-javob", href: "/premium" },
            { label: "Telegram Stars — narxlar va savol-javob", href: "/stars" },
            { label: "Telegram Stars sotib olish — GemPay'da", href: "/blog/telegram-stars-sotib-olish-gempay" },
            { label: "Stars, UC, olmos va Steam balansi: farqi nimada", href: "/blog/telegram-stars-yoki-oyin-valyutasi" },
            { label: "O'yinlar katalogi — UC, olmos, CP", href: "/oyinlar" },
          ],
        },
      ],
      faq: [
        { q: "Premium o'yin ichida biror narsa beradimi?", a: "Yo'q. Bu Telegram obunasi: u UC, olmos yoki skin bermaydi va o'yin akkauntiga umuman tegmaydi. O'yin valyutasi GemPay katalogida alohida olinadi." },
        { q: "4 GB chegarasi qaysi fayllarga tegishli?", a: "Har qanday bitta faylga — video, arxiv, hujjat. Premium'siz chegara 2 GB. Yuklab olishga chegara yo'q: Premium'siz odam ham 4 GB faylni oladi, faqat sekinroq." },
        { q: "Obuna tugasa yuborgan fayllarim o'chadimi?", a: "Yo'q. Fayllar va chatlar joyida qoladi; faqat Premium funksiyalari (4 GB, tez yuklab olish, reklamasiz tasma) o'chadi. Hech qanday avtomatik to'lov ham bo'lmaydi." },
        { q: "Do'stimga sovg'a qilsam bo'ladimi?", a: "Ha — buyurtmada uning @username'ini yozasiz. Obuna Telegram'ning rasmiy sovg'a mexanizmi orqali unga ulanadi, u hech narsa qilishi shart emas." },
        { q: "Narx Click'da qimmatroqmi?", a: "Yo'q. Premium barcha to'lov usulida bir xil narxda — karta o'tkazmasi, Click, Uzum Bank yoki bot balansi." },
        { q: "12 oylikni bir martada to'laymanmi?", a: `Ha, ${uz(P(12).price)} bir martada, keyin yil davomida to'lov yo'q. Oylik hisobda bu ${somApprox(premiumPerMonth(P(12)), "uz")} — eng arzon variant.` },
        { q: "Premium allaqachon bor — yangisi ustiga qo'shiladimi?", a: "Ha, Telegram sovg'a qilingan muddatni joriy obunaning ustiga qo'shadi. Tugashini kutish shart emas." },
      ],
    },

    ru: {
      title: "Что Telegram Premium даёт игроку — и как купить его в GemPay за сумы",
      metaTitle: "Telegram Premium для игрока: что даёт и сколько стоит",
      metaDescription:
        `Telegram Premium глазами игрока: геймплей до 4 ГБ, быстрая загрузка, каналы без рекламы, голос в текст. ` +
        `В GemPay на 3, 6, 12 месяцев — от ${ru(P(3).price)}, без пароля.`,
      excerpt:
        "Не рекламным языком, а с точки зрения чата сквада и турнирных каналов: какие функции нужны на самом деле, " +
        "какие — украшение, кому подписка не нужна вовсе, и как её купить за сумы.",
      answer:
        `Telegram Premium даёт игроку файлы до 4 ГБ, загрузку без ограничения скорости, ленту каналов без рекламы, ` +
        `расшифровку голосовых и перевод чатов. В GemPay подписка покупается в разделе «Telegram» на 3, 6 или ` +
        `12 месяцев: 3 месяца ${ru(P(3).price)}, 12 месяцев ${ru(P(12).price)}. Нужен только @username, пароль не ` +
        `спрашивают; оплата в сумах через UzCard, HUMO, Click или Uzum Bank.`,
      body: [
        {
          t: "p",
          text:
            "Premium обычно продают как «стикеры, эмодзи и анимированный аватар». Для игрока ценность в другом: отправить 30-минутную запись турнира без сжатия, прочитать голосовое из сквада во время матча без звука, перевести англоязычный канал с патчноутами одним нажатием. Ниже каждая функция подписки именно с этой стороны — и в конце честный раздел: кому она не нужна. Таблица цен и ответы на вопросы — на <a href=\"/premium\">странице Premium</a>.",
        },

        { t: "h2", id: "fayllar", text: "4 ГБ: запись турнира уходит без сжатия" },
        {
          t: "p",
          text:
            "У обычного аккаунта лимит одного файла — 2 ГБ. Геймплей на 20-30 минут в 1080p легко его превышает — в итоге либо видео сжимается и теряет качество, либо файл приходится резать. С Premium лимит 4 ГБ: запись уходит в исходном качестве одним файлом. Для того, кто шлёт хайлайты в канал клана или показывает тренеру полный матч, это главная причина подписки.",
        },
        {
          t: "p",
          text: "Важно: лимит касается отправки, а не скачивания. Человек без Premium спокойно скачает ваш файл на 4 ГБ — просто медленнее.",
        },

        { t: "h2", id: "yuklab-olish", text: "Загрузка без ограничения скорости" },
        {
          t: "p",
          text:
            "Для обычных аккаунтов Telegram ограничивает скорость скачивания больших файлов. Когда берёте из канала видео или архив на 1-2 ГБ, это заметно: с Premium ограничения нет, скорость упирается только в ваш интернет. Заметнее всего на длинных видео об официальных обновлениях игр и нарезках стримов.",
        },

        { t: "h2", id: "reklama", text: "Каналы без рекламы" },
        {
          t: "p",
          text:
            "В больших открытых каналах показывается собственная реклама Telegram (спонсорские сообщения). Тот, кто читает игровые новости, анонсы турниров и каналы клана, видит её десятки раз в день. Premium эти сообщения скрывает. Реклама самих админов, разумеется, остаётся — это их пост, а не Telegram.",
        },

        { t: "h2", id: "ovoz-tarjima", text: "Голосовые в текст, каналы в перевод" },
        {
          t: "p",
          text:
            "Во время матча в чат сквада прилетает голосовое — слушать нет ни времени, ни возможности. В Premium под сообщением есть кнопка расшифровки: голос за несколько секунд превращается в текст, и вы читаете его без звука. То же работает с видеосообщениями.",
        },
        {
          t: "p",
          text:
            "Вторая функция — перевод целого чата или канала. Официальные патчноуты выходят на английском, каналы СНГ-сообщества — на русском. С Premium вверху канала появляется кнопка перевода, и следующие посты читаются на выбранном языке. Перевод машинный, но понять, что изменилось в обновлении, хватает.",
        },

        { t: "h2", id: "profil", text: "Профиль: эмодзи-статус, стикеры, аватар" },
        {
          t: "p",
          text:
            "Эта часть — украшение, но для игроков осмысленное: эмодзи-статус рядом с именем (знак клана, любимая игра), премиум-стикеры и анимированный аватар. В чате клана видно, у кого Premium. Функциональной пользы нет — знайте это и не берите подписку только ради этого.",
        },

        { t: "h2", id: "kimga-kerak-emas", text: "Кому не нужно" },
        {
          t: "list",
          items: [
            "Если Telegram только для переписки и больших файлов вы не шлёте — лимит 2 ГБ вас никогда не коснётся.",
            "Если читаете один-два канала — рекламы вы видите так же мало.",
            "Если бюджет ограничен — UC или алмазы в игре дадут больше. Подписка ничего в игре не открывает.",
            "Тому, кто слушает голосовые и свободно читает по-английски, расшифровка и перевод тоже лишние.",
          ],
        },

        { t: "h2", id: "narx", text: "Цена и какой срок выгоднее" },
        {
          t: "table",
          caption: "Тарифы в GemPay. Цена одинакова при любом способе оплаты.",
          head: ["Срок", "Итого", "В месяц"],
          rows: PREMIUM_PLANS.map((p) => [`${p.months} мес.`, ru(p.price), somApprox(premiumPerMonth(p), "ru")]),
        },
        {
          t: "p",
          text:
            `Чем дольше срок, тем дешевле месяц: в годовом тарифе он обходится в ${somApprox(premiumPerMonth(P(12)), "ru")}, что примерно на ${SAVE}% дешевле ${somApprox(premiumPerMonth(P(3)), "ru")} в 3-месячном. Уверены, что будете пользоваться год — берите 12 месяцев; хотите попробовать — 3. Тарифа на один месяц в GemPay нет; если он нужен, он есть на <a href="https://www.starstg.uz/ru/premium" target="_blank" rel="noopener">странице Premium у StarsPaymee</a>.`,
        },
        {
          t: "note",
          tone: "info",
          title: "В Click и при переводе на карту — одинаково",
          text:
            "В отличие от Stars, к Premium наценка за онлайн-оплату не добавляется. Какой бы способ вы ни выбрали, платите сумму из таблицы — поэтому берите удобный: Click или Uzum Bank подставят сумму сами и подтвердят платёж.",
        },

        { t: "h2", id: "qanday-olinadi", text: "Как купить в GemPay" },
        {
          t: "steps",
          items: [
            { title: "@Gempayuz_bot → «Открыть GemPay»", text: "Откроется Mini App. Раздел «Telegram» здесь; в Android-приложении его пока нет." },
            { title: "В разделе «Telegram» нажмите плитку Premium", text: "Над списком игр стоят плитки Stars, Premium и Gift." },
            { title: "Срок и @username", text: "Выберите 3, 6 или 12 месяцев. Введите свой username или username того, кому дарите, — приложение найдёт и покажет профиль, здесь же сверяете." },
            { title: "Оплатите в сумах", text: "При переводе на карту отправьте ровно указанную сумму, в Click или Uzum Bank подтверждение автоматическое. Подписка подключается через несколько секунд и видна в Telegram → Настройки → Telegram Premium." },
          ],
        },
        { t: "cta", text: "Нужен Premium? @Gempayuz_bot → раздел «Telegram» → Premium. По username, без пароля." },

        { t: "h2", id: "xavfsizlik", text: "Что не спрашивают — и о «бесплатном Premium»" },
        {
          t: "p",
          text:
            "Подписка подключается через официальный механизм подарка Telegram (Gift Premium): вы даёте username, Telegram привязывает подписку к этому аккаунту. Вход в аккаунт, пароль, SMS или код входа — ничего из этого не нужно и не спрашивается.",
        },
        {
          t: "note",
          tone: "warn",
          title: "«Бесплатный Premium» и «полцены, только войдите в аккаунт»",
          text:
            "Telegram не раздаёт Premium бесплатно. Предложения, где нужно войти в аккаунт, — схемы кражи аккаунта или сдачи его в аренду посторонним. Насторожитесь и при цене намного ниже официальной: подписка, купленная с украденной карты, потом аннулируется.",
        },

        {
          t: "sources",
          items: [
            { label: "Telegram Premium FAQ", href: "https://telegram.org/faq_premium", note: "официальный список возможностей и лимитов" },
            { label: "Анонс Telegram Premium (2022)", href: "https://telegram.org/blog/700-million-and-premium", note: "когда и зачем введена подписка" },
            { label: "Fragment — Premium", href: "https://fragment.com/premium", note: "официальный маркетплейс Telegram: Premium в подарок за криптовалюту" },
          ],
        },
        {
          t: "links",
          title: "По теме",
          items: [
            { label: "Telegram Premium — цены и ответы", href: "/premium" },
            { label: "Telegram Stars — цены и ответы", href: "/stars" },
            { label: "Купить Telegram Stars — в GemPay", href: "/blog/telegram-stars-sotib-olish-gempay" },
            { label: "Stars, UC, алмазы и баланс Steam: в чём разница", href: "/blog/telegram-stars-yoki-oyin-valyutasi" },
            { label: "Каталог игр — UC, алмазы, CP", href: "/oyinlar" },
          ],
        },
      ],
      faq: [
        { q: "Даёт ли Premium что-то внутри игры?", a: "Нет. Это подписка Telegram: она не даёт UC, алмазы или скины и вообще не касается игрового аккаунта. Игровая валюта покупается отдельно в каталоге GemPay." },
        { q: "На какие файлы действует лимит 4 ГБ?", a: "На любой один файл — видео, архив, документ. Без Premium лимит 2 ГБ. На скачивание лимита нет: человек без Premium тоже получит файл на 4 ГБ, просто медленнее." },
        { q: "Если подписка закончится, мои файлы удалятся?", a: "Нет. Файлы и чаты остаются; отключаются только функции Premium (4 ГБ, быстрая загрузка, лента без рекламы). Автосписаний тоже не будет." },
        { q: "Можно подарить другу?", a: "Да — укажите в заказе его @username. Подписка подключится ему через официальный механизм подарка Telegram, делать ему ничего не нужно." },
        { q: "Через Click дороже?", a: "Нет. Premium стоит одинаково при любом способе — перевод на карту, Click, Uzum Bank или баланс бота." },
        { q: "Годовой тариф платится сразу?", a: `Да, ${ru(P(12).price)} одним платежом, дальше в течение года платить не нужно. В пересчёте на месяц это ${somApprox(premiumPerMonth(P(12)), "ru")} — самый дешёвый вариант.` },
        { q: "У меня уже есть Premium — новый срок добавится?", a: "Да, Telegram прибавляет подаренный срок к текущей подписке. Ждать окончания не нужно." },
      ],
    },
  },
};

export default article;
