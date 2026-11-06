// Avtoblogyoz yasagan maqola (2026-11-06). Niyat: Spamdan himoyalanish uchun Telegram'da kiruvchi xabarlarni Stars evaziga pullik qilgan o'yinchi yoki klan sardori jamoadoshlari tekin yozishi uchun maxsus havola yaratish mumkinligini va buni qanday qilishni «telegram pullik xabarlar bepul havola» so'zi bilan qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/blog/wear-gifts-blockchain-and-more
//   https://telegram.org/blog/welcome-messages-buttons-TG-13
//   https://core.telegram.org/bots/api-changelog#august-24-2026

import type { Article } from "../types";
import { STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const article: Article = {
  slug: "pullik-xabarlar-jamoadosh-bepul-havola",
  game: null,
  type: "info",
  datePublished: "2026-11-06",
  dateModified: "2026-11-06",
  keywords: ["telegram pullik xabarlar bepul havola","telegram pullik xabarlar","pullik xabarlar stars","telegram bepul xabar havolasi","klan chati spamdan himoya","telegram xabarlar uchun stars","платные сообщения телеграм бесплатная ссылка","ссылка для бесплатных сообщений telegram","платные входящие сообщения телеграм","телеграм сообщения за звезды","как отключить платные сообщения телеграм"],
  locales: {
    uz: {
      title: "Telegram pullik xabarlar: klan uchun bepul havola yaratsa bo‘ladimi?",
      metaTitle: "Telegram pullik xabarlar: klan uchun bepul havola yaratsa",
      metaDescription: "Hozircha yo‘q: pullik xabarlarda jamoadoshlar tekin yozishi uchun havola rasmiy Telegram manbalarida tasdiqlanmagan, bu haqda faqat kanal posti bor.",
      excerpt: "Hozircha yo‘q: pullik xabarlarda jamoadoshlar tekin yozishi uchun havola rasmiy Telegram manbalarida tasdiqlanmagan, bu haqda faqat kanal posti bor.",
      answer: "Hozircha yo‘q: pullik xabarlarda jamoadoshlar tekin yozishi uchun havola rasmiy Telegram manbalarida tasdiqlanmagan, bu haqda faqat kanal posti bor.",
      body: [
        {
          t: "h2",
          id: "pullik-xabarlar-yoqilganda-jamoadoshlar-uchun",
          text: "Pullik xabarlar yoqilganda jamoadoshlar uchun tekin havola yaratish mumkinmi?",
        },
        {
          t: "p",
          text: "Hozircha bunga tayanib bo‘lmaydi. Kiruvchi xabarlar pullik bo‘lsa ham tekin yozish uchun havola yaratish mumkinligi haqida bitta Telegram kanalida post tarqaldi. Biz tekshirgan rasmiy Telegram manbalarida esa bunday funksiya tasdiqlanmagan. Shuning uchun quyida u tayyor imkoniyat sifatida berilmaydi.",
        },
        {
          t: "p",
          text: "Vaziyat ko‘p sardorga tanish. Lichkaga notanishlar «arzon UC», «akkaunt sotaman» degan takliflar va shubhali havolalar tashlaydi. Kiruvchi xabarlarni Stars evaziga pullik qilsangiz, bunday yozuvlar kamayadi. Lekin endi o‘z squad a’zolaringiz ham scrim vaqtini yoki turnir ro‘yxatini kelishish uchun yozishdan oldin ikkilanib qoladi.",
        },
        {
          t: "p",
          text: "«Jamoaga alohida tekin havola» g‘oyasi shuning uchun qulay ko‘rinadi: begonalar to‘laydi, o‘zingiznikilar to‘lamaydi. Hozircha esa bu g‘oyaning ortida rasmiy e’lon yo‘q.",
        },
        {
          t: "note",
          tone: "info",
          text: "Funksiyani ilovangizda o‘zingiz ko‘rmaguncha jamoadoshlarga «endi tekin yozasizlar» deb va’da bermang. Aks holda kimdir kutilmaganda Stars sarflaydi yoki muhim xabar yuborilmay qoladi.",
        },
        {
          t: "h2",
          id: "rasmiy-manbalar-bu-haqda-nima",
          text: "Rasmiy manbalar bu haqda nima deydi?",
        },
        {
          t: "p",
          text: "Telegram yangiliklarini ikki joydan tekshirish mumkin: oddiy foydalanuvchilar uchun blog va dasturchilar uchun hujjatlar.",
        },
        {
          t: "p",
          text: "Telegram blogidagi 2026-yil 25-avgust postida sovg‘alarga oid yangilik bitta. Bu <a href=\"https://telegram.org/blog/welcome-messages-buttons-TG-13\" target=\"_blank\" rel=\"noopener\">Marketplace’dan sotib olingan sovg‘aga imzo va izoh qo‘shish</a> imkoniyati. Pullik xabarlar uchun maxsus havola u yerda tilga olinmagan.",
        },
        {
          t: "p",
          text: "<a href=\"https://core.telegram.org/bots/api-changelog#august-24-2026\" target=\"_blank\" rel=\"noopener\">Bot API o‘zgarishlar ro‘yxatida</a> 26-oktabr holatiga eng so‘nggi yozuv 24-avgustdagi Bot API 10.3 edi. Demak, shu muddatgacha rasmiy hujjatlarda bunday yangilik ko‘rinmagan.",
        },
        {
          t: "p",
          text: "Bu funksiya hech qachon chiqmaydi degani emas. Amaliy qoida oddiy: kanal yozgan yangilikni <a href=\"https://telegram.org/blog\" target=\"_blank\" rel=\"noopener\">rasmiy blogda</a> e’lon chiqmaguncha mish-mish deb hisoblang. Turnir oldidan jamoa aloqasini tasdiqlanmagan funksiyaga qurish xabarlarni yo‘qotishga olib kelishi mumkin.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "squad-aloqasining-qaysi-qismi-qayerda",
          text: "Squad aloqasining qaysi qismi qayerda bo‘lgani qulay?",
        },
        {
          t: "p",
          text: "Tekin havola bo‘lmasa ham, lichkani pullik qoldirib jamoa ishini yo‘qotmaslik mumkin. Buning uchun har bir vazifani o‘ziga mos joyga ko‘chirish kerak. Pastdagi jadval odatiy klan vaziyatlari uchun tuzilgan.",
        },
        {
          t: "table",
          head: [
            "Vazifa",
            "Qayerda yuritgan ma’qul",
            "Nega",
          ],
          rows: [
            [
              "Scrim vaqti, tarkib, kim o‘ynaydi",
              "Yopiq klan guruhi",
              "Hamma bir joyda ko‘radi, sardorga alohida yozish shart emas",
            ],
            [
              "Turnir jadvali va natijalar",
              "E’lonlar kanali",
              "Faqat sardor yozadi, lichka bir xil savollar bilan to‘lmaydi",
            ],
            [
              "Yangi o‘yinchini qabul qilish",
              "Guruhga taklif havolasi",
              "Nomzod tanishish uchun sizga shaxsan yozishi shart emas",
            ],
            [
              "Shaxsiy masala, nizo, almashtirish",
              "Lichka",
              "Bu yerda pullik sozlama spamdan himoya qiladi",
            ],
            [
              "Notanishlarning takliflari",
              "Pullik lichka yoki «Report spam»",
              "Spam yuboruvchiga to‘lov to‘siq bo‘ladi",
            ],
          ],
        },
        {
          t: "p",
          text: "Shu taqsimotda jamoadoshlar sizga lichkada kamdan-kam yozadi. Pullik sozlama esa asosan begonalarni to‘xtatadi.",
        },
        {
          t: "h2",
          id: "funksiya-sizning-telegramingizga-kelganini-qanday",
          text: "Funksiya sizning Telegram’ingizga kelganini qanday tekshirasiz?",
        },
        {
          t: "p",
          text: "Tekshiruv bir necha daqiqa oladi va tashqi xizmat kerak emas.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Telegram ilovasini App Store yoki Google Play’dan eng so‘nggi versiyaga yangilang. Eski versiyada yangi tugma ko‘rinmasligi mumkin.",
            "<a href=\"https://telegram.org/blog\" target=\"_blank\" rel=\"noopener\">telegram.org/blog</a> sahifasida pullik xabarlar haqida yangi e’lon bor-yo‘qligini qarang. Faqat shu yerda e’lon qilingan funksiyani haqiqiy deb hisoblang.",
            "Sozlamalarda kim sizga xabar yoza olishi belgilanadigan maxfiylik bo‘limini oching. Havola yaratish tugmasi bor-yo‘qligini ko‘ring.",
            "Tugma bo‘lsa, havolani avval bitta ishonchli jamoadoshga yuboring. U Stars to‘lamasdan yoza olishini va xabar sizga yetib kelishini sinab ko‘ring. Shundan keyingina butun squad’ga tarqating.",
            "Tugma bo‘lmasa, funksiya sizga hali kelmagan yoki umuman chiqmagan. Tashqi bot yoki saytdan «havola generatori» qidirmang.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Menyu nomlari ilova versiyasi va platformaga qarab farq qilishi mumkin. Aniq yo‘lni ilovaning o‘zida tekshiring.",
        },
        {
          t: "h2",
          id: "klan-guruhini-lichka-orniga-qanday",
          text: "Klan guruhini lichka o‘rniga qanday sozlash mumkin?",
        },
        {
          t: "p",
          text: "Guruh lichkaning o‘rnini bosishi uchun uni bir marta tartibga solish kifoya:",
        },
        {
          t: "list",
          items: [
            "<strong>Alohida mavzular.</strong> Scrim, turnir va savdo-sotiq gaplarini aralashtirmang. Muhim kelishuvni qadab qo‘ying (pin), shunda kech qo‘shilgan o‘yinchi ham uni topadi.",
            "<strong>Bitta e’lonlar joyi.</strong> Jadval va o‘zgarishlarni faqat bir joyda e’lon qiling, lichkada takrorlamang. Shunda «soat nechida?» degan savollar sizga kelmaydi.",
            "<strong>Taklif havolasini nazorat qiling.</strong> Havola ochiq chatlarda aylanib yursa, guruhga begonalar kirib spam tashlay boshlaydi. Kerak bo‘lsa, havolani yangilang.",
            "<strong>Istisnolarni ilovada ko‘ring.</strong> Pullik xabar sozlamasida kim to‘lovsiz yoza olishini ilovaning o‘zi ko‘rsatadi. Istisnolar ro‘yxati bu maqolada tasdiqlanmagan, shuning uchun jamoadoshlaringiz qaysi toifaga tushishini sozlamada tekshiring.",
            "<strong>Spamga shikoyat qiling.</strong> Spam baribir kelsa, uni «Report spam» orqali belgilang. Bu mexanizm qanday ishlashi haqida: <a href=\"/blog/klan-chatida-shubhali-havola-spam-cheklov\">klan chatidagi shubhali havola</a>.",
          ],
        },
        {
          t: "h2",
          id: "tekin-yozish-havolasi-niqobida-qanday",
          text: "«Tekin yozish havolasi» niqobida qanday firibgarlik bo‘lishi mumkin?",
        },
        {
          t: "p",
          text: "Yangi funksiya haqida mish-mish tarqalsa, uning atrofida soxta «xizmatlar» paydo bo‘ladi. O‘yin chatlarida quyidagi belgilarga e’tibor bering:",
        },
        {
          t: "list",
          items: [
            "Bot yoki «admin» havolani «faollashtirish» uchun Telegram’dan kelgan kodni so‘raydi. Bu akkauntni egallash usuli, havolaga aloqasi yo‘q.",
            "Kirish kodi va ikki bosqichli tekshiruv parolini hech kimga bermang. Klan admini yoki tanish o‘yinchi so‘rasa ham.",
            "Havola uchun oldindan Stars yoki pul so‘ralsa, suhbatni to‘xtating. Rasmiy funksiya chiqsa, u ilovaning ichida ishlaydi.",
            "Notanish saytlardan «yangi Telegram» APK’sini yuklamang. Ilovani rasmiy do‘kondan yoki <a href=\"https://telegram.org\" target=\"_blank\" rel=\"noopener\">telegram.org</a> orqali yangilang.",
            "Sovg‘a savdosida ham xuddi shu sxemalar uchraydi: kod, oldindan to‘lov, notanish «garant». Batafsil: <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">o‘yin chatida gift sotib olish taklifi</a>.",
          ],
        },
        {
          t: "h2",
          id: "pullik-xabar-yoki-sovga-uchun",
          text: "Pullik xabar yoki sovg‘a uchun Stars kerak bo‘lsa, ularni so‘mda qanday olish mumkin?",
        },
        {
          t: "p",
          text: "Pullik xabarni yoqib qo‘ygan boshqa klan sardoriga yozmoqchi bo‘lsangiz yoki jamoadoshga sovg‘a yubormoqchi bo‘lsangiz, Stars kerak bo‘ladi. GemPay’da ular @username bo‘yicha olinadi, akkauntingizga kirilmaydi. Bir buyurtmada 50 dan 10 000 tagacha yulduz olish mumkin, ular bir necha soniyada tushadi.",
        },
        {
          t: "table",
          head: [
            "To‘lov usuli",
            "1 ta Stars narxi",
          ],
          rows: [
            [
              "UzCard yoki HUMO kartasidan o‘tkazma, bot balansi",
              `${som(STARS_UNIT_CARD, "uz")}`,
            ],
            [
              "Click yoki Uzum Bank orqali onlayn to‘lov",
              `${som(STARS_UNIT_ONLINE, "uz")}`,
            ],
          ],
        },
        {
          t: "p",
          text: "Visa va Mastercard qabul qilinmaydi. Xorijiy karta, VPN yoki kripto kerak emas. Buyurtma <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> orqali beriladi.",
        },
        {
          t: "p",
          text: "Stars o‘yin valyutasiga aylanmaydi. UC, olmos yoki CP uchun alohida buyurtma kerak, farqi <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">Stars va o‘yin valyutasi</a> maqolasida tushuntirilgan. Qadamma-qadam qo‘llanma: <a href=\"/blog/telegram-stars-sotib-olish-gempay\">GemPay’da Stars sotib olish</a>. Premium squad chati uchun nima berishi haqida: <a href=\"/blog/telegram-premium-oyinchi-uchun\">Telegram Premium o‘yinchi uchun</a>.",
        },
        {
          t: "p",
          text: "GemPay mustaqil xizmat va Telegram bilan hamkorlik da’vo qilmaydi. Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi. Savol bo‘lsa, <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>’ga buyurtma raqami bilan yozing.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More",
              href: "https://telegram.org/blog/wear-gifts-blockchain-and-more",
            },
            {
              label: "Welcome Messages, Buttons in Messages and Signed Gifts",
              href: "https://telegram.org/blog/welcome-messages-buttons-TG-13",
            },
            {
              label: "Bot API changelog",
              href: "https://core.telegram.org/bots/api-changelog#august-24-2026",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Jamoadoshim pullik lichkamga yozsa, Stars kimdan yechiladi?",
          a: "Pullik xabarlarning g‘oyasi yozayotgan odam to‘lashiga asoslangan. Aniq summa va kim istisno ekanini Telegram yozishdan oldin oynada ko‘rsatadi, bu maqolada ular tasdiqlanmagan.",
        },
        {
          q: "Do‘stimda «tekin havola» tugmasi bor ekan, menda yo‘q — nega?",
          a: "Avval ilovangizni yangilang va telegram.org/blog’da e’lon bor-yo‘qligini qarang. Biz tekshirgan rasmiy manbalarda bunday funksiya topilmadi, shuning uchun skrinshotga emas, o‘z ilovangizga ishoning.",
        },
        {
          q: "Tekin yozish havolasini yaratib beradigan bot bormi?",
          a: "Bunday botlarga ishonmang. Kod, parol yoki oldindan Stars so‘raydigan bot akkauntingizni egallashga urinayotgan bo‘lishi mumkin.",
        },
        {
          q: "Spam ko‘p bo‘lsa, pullik sozlamani o‘chirib qo‘yganim ma’qulmi?",
          a: "O‘chirsangiz, notanishlar yana to‘lovsiz yoza oladi. Odatda lichkani pullik qoldirib, jamoa gaplarini yopiq klan guruhiga ko‘chirgan qulayroq.",
        },
        {
          q: "Lichkam pullik bo‘lsa, klan guruhidagi xabarlar ham pullik bo‘lib qoladimi?",
          a: "Bu sozlama sizga keladigan shaxsiy xabarlar uchun mo‘ljallangan. Guruhda yozishga alohida shart qo‘yilgan-qo‘yilmaganini guruh sozlamalarida tekshiring.",
        },
        {
          q: "Lichkamdan yig‘ilgan Stars’ni UC yoki olmosga aylantirsa bo‘ladimi?",
          a: "Yo‘q, Stars o‘yin valyutasiga aylanmaydi. UC, olmos yoki CP GemPay botida alohida buyurtma bilan, Player ID bo‘yicha olinadi.",
        },
      ],
    },
    ru: {
      title: "Платные сообщения Telegram: есть ли бесплатная ссылка для клана?",
      metaTitle: "Платные сообщения Telegram",
      metaDescription: "Пока нет: ссылка, по которой тиммейты пишут бесплатно при платных сообщениях, не подтверждена официальными источниками Telegram — о ней писал лишь канал.",
      excerpt: "Пока нет: ссылка, по которой тиммейты пишут бесплатно при платных сообщениях, не подтверждена официальными источниками Telegram — о ней писал лишь канал.",
      answer: "Пока нет: ссылка, по которой тиммейты пишут бесплатно при платных сообщениях, не подтверждена официальными источниками Telegram — о ней писал лишь канал.",
      body: [
        {
          t: "h2",
          id: "pullik-xabarlar-yoqilganda-jamoadoshlar-uchun",
          text: "Можно ли создать бесплатную ссылку для тиммейтов, если включены платные сообщения?",
        },
        {
          t: "p",
          text: "Пока на это рассчитывать нельзя. В одном Telegram-канале разошёлся пост: якобы можно создать ссылку, по которой вам пишут бесплатно, даже если входящие сообщения платные. В официальных источниках Telegram, которые мы проверили, такая функция не подтверждена. Поэтому ниже она не описывается как готовая возможность.",
        },
        {
          t: "p",
          text: "Ситуация знакома многим капитанам. В личку пишут незнакомцы: «дешёвые UC», «продам аккаунт», подозрительные ссылки. Если сделать входящие сообщения платными за Stars, такого становится меньше. Но теперь и игроки вашего сквада задумаются, прежде чем написать насчёт времени скрима или состава на турнир.",
        },
        {
          t: "p",
          text: "Поэтому идея «отдельной бесплатной ссылки для команды» выглядит удобной: чужие платят, свои — нет. Но официального анонса за этой идеей пока нет.",
        },
        {
          t: "note",
          tone: "info",
          text: "Не обещайте тиммейтам «теперь пишете бесплатно», пока сами не увидите функцию в своём приложении. Иначе кто-то неожиданно потратит Stars или важное сообщение так и не дойдёт.",
        },
        {
          t: "h2",
          id: "rasmiy-manbalar-bu-haqda-nima",
          text: "Что об этом говорят официальные источники?",
        },
        {
          t: "p",
          text: "Новости Telegram можно проверить в двух местах: в блоге для обычных пользователей и в документации для разработчиков.",
        },
        {
          t: "p",
          text: "В посте блога Telegram от 25 августа 2026 года новинка, касающаяся подарков, одна. Это возможность <a href=\"https://telegram.org/blog/welcome-messages-buttons-TG-13\" target=\"_blank\" rel=\"noopener\">добавить подпись и комментарий к подарку, купленному в Marketplace</a>. Специальная ссылка для платных сообщений там не упоминается.",
        },
        {
          t: "p",
          text: "В <a href=\"https://core.telegram.org/bots/api-changelog#august-24-2026\" target=\"_blank\" rel=\"noopener\">журнале изменений Bot API</a> по состоянию на 26 октября последней записью была Bot API 10.3 от 24 августа. Значит, до этой даты такой новинки в официальной документации не было.",
        },
        {
          t: "p",
          text: "Это не значит, что функция никогда не появится. Практическое правило простое: пока в <a href=\"https://telegram.org/blog\" target=\"_blank\" rel=\"noopener\">официальном блоге</a> нет анонса, новость из канала — это слух. Если перед турниром строить связь команды на неподтверждённой функции, можно потерять сообщения.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "squad-aloqasining-qaysi-qismi-qayerda",
          text: "Где удобнее вести разные части общения сквада?",
        },
        {
          t: "p",
          text: "Даже без бесплатной ссылки можно оставить личку платной и не потерять командную работу. Для этого каждую задачу нужно перенести в подходящее место. Таблица ниже составлена для типичных клановых ситуаций.",
        },
        {
          t: "table",
          head: [
            "Задача",
            "Где лучше вести",
            "Почему",
          ],
          rows: [
            [
              "Время скрима, состав, кто играет",
              "Закрытая группа клана",
              "Все видят в одном месте, писать капитану отдельно не нужно",
            ],
            [
              "Расписание и результаты турниров",
              "Канал объявлений",
              "Пишет только капитан, личка не забивается одинаковыми вопросами",
            ],
            [
              "Приём нового игрока",
              "Ссылка-приглашение в группу",
              "Кандидату не нужно писать вам лично, чтобы познакомиться",
            ],
            [
              "Личные вопросы, конфликты, замены",
              "Личка",
              "Здесь платная настройка защищает от спама",
            ],
            [
              "Предложения от незнакомцев",
              "Платная личка или «Report spam»",
              "Оплата становится барьером для спамера",
            ],
          ],
        },
        {
          t: "p",
          text: "При таком распределении тиммейты пишут вам в личку редко. А платная настройка в основном отсекает посторонних.",
        },
        {
          t: "h2",
          id: "funksiya-sizning-telegramingizga-kelganini-qanday",
          text: "Как проверить, появилась ли функция в вашем Telegram?",
        },
        {
          t: "p",
          text: "Проверка занимает несколько минут, сторонние сервисы не нужны.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Обновите Telegram до последней версии через App Store или Google Play. В старой версии новой кнопки может не быть.",
            "Посмотрите на <a href=\"https://telegram.org/blog\" target=\"_blank\" rel=\"noopener\">telegram.org/blog</a>, есть ли новый анонс о платных сообщениях. Настоящей считайте только функцию, объявленную там.",
            "Откройте в настройках раздел конфиденциальности, где задаётся, кто может вам писать. Проверьте, есть ли кнопка создания ссылки.",
            "Если кнопка есть, сначала отправьте ссылку одному надёжному тиммейту. Пусть он проверит, что может написать без оплаты Stars и что сообщение до вас доходит. Только после этого раздавайте ссылку всему скваду.",
            "Если кнопки нет, функция до вас ещё не дошла или вообще не вышла. Не ищите «генератор ссылок» в сторонних ботах и на сайтах.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Названия пунктов меню могут отличаться в зависимости от версии приложения и платформы. Точный путь проверяйте в самом приложении.",
        },
        {
          t: "h2",
          id: "klan-guruhini-lichka-orniga-qanday",
          text: "Как настроить группу клана вместо лички?",
        },
        {
          t: "p",
          text: "Чтобы группа заменила личку, её достаточно один раз привести в порядок:",
        },
        {
          t: "list",
          items: [
            "<strong>Отдельные темы.</strong> Не смешивайте скримы, турниры и торговлю. Важные договорённости закрепляйте (pin) — тогда их найдёт и игрок, который присоединился позже.",
            "<strong>Одно место для объявлений.</strong> Публикуйте расписание и изменения только в одном месте и не дублируйте их в личке. Тогда вопросы «во сколько?» перестанут приходить вам.",
            "<strong>Следите за ссылкой-приглашением.</strong> Если ссылка гуляет по открытым чатам, в группу начнут заходить посторонние и спамить. При необходимости обновите ссылку.",
            "<strong>Исключения смотрите в приложении.</strong> Кто может писать без оплаты, показывает сама настройка платных сообщений. Список исключений в этой статье не подтверждён, поэтому проверьте в настройках, к какой категории относятся ваши тиммейты.",
            "<strong>Жалуйтесь на спам.</strong> Если спам всё равно приходит, отмечайте его через «Report spam». Как работает этот механизм, читайте в статье <a href=\"/blog/klan-chatida-shubhali-havola-spam-cheklov\">о подозрительной ссылке в чате клана</a>.",
          ],
        },
        {
          t: "h2",
          id: "tekin-yozish-havolasi-niqobida-qanday",
          text: "Какое мошенничество может прятаться под видом «ссылки для бесплатных сообщений»?",
        },
        {
          t: "p",
          text: "Как только появляется слух о новой функции, вокруг него возникают фальшивые «сервисы». В игровых чатах обращайте внимание на такие признаки:",
        },
        {
          t: "list",
          items: [
            "Бот или «админ» просит код из Telegram, чтобы «активировать» ссылку. Это способ угнать аккаунт, к ссылке он отношения не имеет.",
            "Никому не сообщайте код входа и пароль двухэтапной проверки — даже если просит админ клана или знакомый игрок.",
            "Если за ссылку заранее просят Stars или деньги, прекращайте разговор. Если официальная функция выйдет, она будет работать внутри приложения.",
            "Не скачивайте APK «нового Telegram» с незнакомых сайтов. Обновляйте приложение через официальный магазин или <a href=\"https://telegram.org\" target=\"_blank\" rel=\"noopener\">telegram.org</a>.",
            "В торговле подарками встречаются те же схемы: код, предоплата, незнакомый «гарант». Подробнее — в статье <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">о предложении купить гифт в игровом чате</a>.",
          ],
        },
        {
          t: "h2",
          id: "pullik-xabar-yoki-sovga-uchun",
          text: "Как купить Stars за сумы для платных сообщений или подарков?",
        },
        {
          t: "p",
          text: "Stars понадобятся, если вы хотите написать капитану другого клана с включёнными платными сообщениями или отправить подарок тиммейту. В GemPay их покупают по @username, входить в ваш аккаунт не нужно. За один заказ можно взять от 50 до 10 000 звёзд, они приходят за несколько секунд.",
        },
        {
          t: "table",
          head: [
            "Способ оплаты",
            "Цена 1 Stars",
          ],
          rows: [
            [
              "Перевод с карты UzCard или HUMO, баланс бота",
              `${som(STARS_UNIT_CARD, "ru")}`,
            ],
            [
              "Онлайн-оплата через Click или Uzum Bank",
              `${som(STARS_UNIT_ONLINE, "ru")}`,
            ],
          ],
        },
        {
          t: "p",
          text: "Visa и Mastercard не принимаются. Зарубежная карта, VPN или криптовалюта не нужны. Заказ оформляется через <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>.",
        },
        {
          t: "p",
          text: "Stars не превращаются в игровую валюту. Для UC, алмазов или CP нужен отдельный заказ — разница объяснена в статье <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">о Stars и игровой валюте</a>. Пошаговая инструкция: <a href=\"/blog/telegram-stars-sotib-olish-gempay\">покупка Stars в GemPay</a>. Что Premium даёт для чата сквада, читайте в статье <a href=\"/blog/telegram-premium-oyinchi-uchun\">Telegram Premium для игрока</a>.",
        },
        {
          t: "p",
          text: "GemPay — независимый сервис и не заявляет о партнёрстве с Telegram. Если заказ не выполнен, деньги возвращаются полностью в течение 3 рабочих дней. Если есть вопросы, напишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> и укажите номер заказа.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More",
              href: "https://telegram.org/blog/wear-gifts-blockchain-and-more",
            },
            {
              label: "Welcome Messages, Buttons in Messages and Signed Gifts",
              href: "https://telegram.org/blog/welcome-messages-buttons-TG-13",
            },
            {
              label: "Bot API changelog",
              href: "https://core.telegram.org/bots/api-changelog#august-24-2026",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Если тиммейт пишет в мою платную личку, с кого списываются Stars?",
          a: "Идея платных сообщений в том, что платит тот, кто пишет. Точную сумму и то, кто попадает в исключения, Telegram показывает в окне перед отправкой — в этой статье эти детали не подтверждены.",
        },
        {
          q: "У друга есть кнопка «бесплатной ссылки», а у меня нет — почему?",
          a: "Сначала обновите приложение и проверьте, есть ли анонс на telegram.org/blog. В проверенных нами официальных источниках такой функции не нашлось, так что верьте своему приложению, а не скриншоту.",
        },
        {
          q: "Есть ли бот, который сделает ссылку для бесплатных сообщений?",
          a: "Таким ботам доверять не стоит. Бот, который просит код, пароль или Stars вперёд, скорее всего, пытается захватить ваш аккаунт.",
        },
        {
          q: "Если спама много, может, лучше отключить платную настройку?",
          a: "Тогда незнакомцы снова смогут писать бесплатно. Обычно удобнее оставить личку платной, а командные разговоры перенести в закрытую группу клана.",
        },
        {
          q: "Если личка платная, сообщения в группе клана тоже станут платными?",
          a: "Эта настройка рассчитана на личные сообщения, которые приходят вам. Есть ли отдельные условия для сообщений в группе, проверьте в настройках самой группы.",
        },
        {
          q: "Можно ли обменять Stars, собранные в личке, на UC или алмазы?",
          a: "Нет, Stars не превращаются в игровую валюту. UC, алмазы или CP покупаются отдельным заказом в боте GemPay по Player ID.",
        },
      ],
    },
  },
};

export default article;
