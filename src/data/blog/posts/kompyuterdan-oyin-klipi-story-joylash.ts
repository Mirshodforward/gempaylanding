// Avtoblogyoz yasagan maqola (2026-11-20). Niyat: Kompyuterda o‘ynaydigan o‘zbek geymer «kompyuterdan telegram story joylash» deb qidiradi: u PC’da yozilgan o‘yin klipi yoki skrinshotni o‘z profiliga yoki klan kanaliga story qilib qo‘yish mumkinmi, Desktop Canary’da bu imkoniyat chiqqanmi va hozir buni qaysi yo‘l bilan qilsa bo‘lishini bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/tour/stories
//   https://telegram.org/faq
//   https://telegram.org/blog/stories

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "kompyuterdan-oyin-klipi-story-joylash",
  game: null,
  type: "howto",
  datePublished: "2026-11-20",
  dateModified: "2026-11-20",
  keywords: ["kompyuterdan telegram story joylash","telegram desktop story qo‘shish","pc dan telegram story qo‘yish","o‘yin klipini telegram story qilish","telegram canary story","klan kanali story boost","kompyuterdan video story qilish","как выложить историю в телеграм с компьютера","сторис телеграм с пк","telegram desktop публикация историй","как добавить сторис в телеграм на компьютере"],
  locales: {
    uz: {
      title: "Kompyuterdan Telegram story joylash: PC’dagi o‘yin klipini qanday qo‘yish",
      metaTitle: "Kompyuterdan Telegram story joylash",
      metaDescription: "Hozircha telefon orqali: Telegram story yaratishni iOS va Android uchun ko‘rsatadi. Klipni Desktop’dan telefonga o‘tkazib, o‘sha yerda joylang.",
      excerpt: "Hozircha telefon orqali: Telegram story yaratishni iOS va Android uchun ko‘rsatadi. Klipni Desktop’dan telefonga o‘tkazib, o‘sha yerda joylang.",
      answer: "Hozircha telefon orqali: Telegram story yaratishni iOS va Android uchun ko‘rsatadi. Klipni Desktop’dan telefonga o‘tkazib, o‘sha yerda joylang.",
      body: [
        {
          t: "h2",
          id: "pcda-yozilgan-galaba-klipini-telegram",
          text: "PC’da yozilgan g‘alaba klipini Telegram story’ga to‘g‘ridan-to‘g‘ri qo‘ysa bo‘ladimi?",
        },
        {
          t: "p",
          text: "Hozircha bunga tayanib bo‘lmaydi. Telegram’ning <a href=\"https://telegram.org/tour/stories\" target=\"_blank\" rel=\"noopener\">Stories sahifasida</a> story yaratish faqat ikki holatda tasvirlangan: iOS’da chatlar ro‘yxatidagi [+] tugmasi va Android’da kamera belgisi. Kompyuter versiyasi u yerda umuman tilga olinmagan. Shuning uchun ishonchli yo‘l bitta: klipni telefonga o‘tkazasiz va story’ni telefondan joylaysiz.",
        },
        {
          t: "p",
          text: "Akkaunt turi bunga to‘siq bo‘lmaydi. O‘sha sahifaga ko‘ra, Telegram’ning istalgan foydalanuvchisi story ko‘ra oladi, joylay oladi va ularga munosabat bildira oladi. Premium yoki alohida akkaunt shart emas. Faqat qaysi qurilmadan joylashingiz muhim.",
        },
        {
          t: "h2",
          id: "klipni-pcdan-telefonga-olib-otib",
          text: "Klipni PC’dan telefonga olib o‘tib story qilish: 5 qadam",
        },
        {
          t: "p",
          text: "Misol: kecha kechqurun kompyuterda ace oldingiz, klip esa ekran yozuvchi dastur papkasida turibdi. Uni story qilish uchun:",
        },
        {
          t: "steps",
          items: [
            {
              title: "Klipni kompyuterda qisqartiring",
              text: "Butun raundni emas, eng kuchli lahzani qoldiring: clutch, ace yoki g‘alaba kadrini. Story telefonda tik ekranda ochiladi, shuning uchun asosiy harakat kadr markazida bo‘lsin. Story’ga qancha uzunlikdagi video sig‘ishi bu maqolada tasdiqlanmagan. Klip sig‘masa, buni joylash paytida ko‘rasiz.",
            },
            {
              title: "Telegram Desktop’dan klipni «Saqlangan xabarlar»ga yuboring",
              text: "Faylni chatga sudrab tashlang yoki qisqich belgisi orqali tanlang. Klip siqilib qolmasligini istasangiz, uni fayl sifatida yuborishni tanlang.",
            },
            {
              title: "Telefonda klipni galereyaga saqlang",
              text: "O‘sha akkaunt bilan telefonda «Saqlangan xabarlar»ni oching, videoni yuklab oling va xotiraga saqlang.",
            },
            {
              title: "Story oynasini oching",
              text: "iOS’da chatlar ro‘yxatidagi [+] tugmasini, Android’da kamera belgisini bosing. Keyin galereyadan klipni tanlang.",
            },
            {
              title: "Joylashdan oldin auditoriyani tanlang",
              text: "<a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a>ga ko‘ra, to‘rt variant bor: hamma, kontaktlaringiz, yaqin do‘stlar yoki o‘zingiz tuzgan ro‘yxat. Klan taktikasi ko‘rinib turgan klipni faqat jamoadoshlar ro‘yxatiga qo‘ying.",
            },
          ],
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "klipni-telefonga-otkazishning-qaysi-yoli",
          text: "Klipni telefonga o‘tkazishning qaysi yo‘li sizga mos?",
        },
        {
          t: "p",
          text: "Bitta-ikkita klip uchun «Saqlangan xabarlar» yetarli. Bir kechada o‘nlab lahza yozib olgan bo‘lsangiz, boshqa yo‘l tezroq bo‘lishi mumkin.",
        },
        {
          t: "table",
          head: [
            "Yo‘l",
            "Qachon qulay",
            "Nimaga e’tibor bering",
          ],
          rows: [
            [
              "«Saqlangan xabarlar»",
              "1–2 ta klip, kabel yo‘q",
              "Katta fayl internet tezligiga qarab sekin yuklanadi",
            ],
            [
              "Kabel orqali nusxalash",
              "Klip og‘ir yoki bir nechta",
              "Oldin telefonda bo‘sh joyni tekshiring",
            ],
            [
              "O‘zingizning bulut xotirangiz",
              "Klip boshqa qurilmada ham kerak bo‘lsa",
              "Notanish «video konvertor» saytlariga Telegram yoki o‘yin akkaunti bilan kirmang",
            ],
            [
              "Desktop’dagi story tugmasi",
              "Faqat tugma sizda haqiqatan ko‘rinsa",
              "Rasman tasdiqlanmagan, keyin o‘zgarishi yoki yo‘qolishi mumkin",
            ],
          ],
        },
        {
          t: "p",
          text: "Videoni kesish yoki tik formatga o‘tkazish uchun hech qanday servisga Telegram kodi yoki parol kerak emas. Shunday narsa so‘ralsa, sahifani yoping.",
        },
        {
          t: "h2",
          id: "chatda-desktopda-story-chiqdi-deyishsa",
          text: "Chatda «Desktop’da story chiqdi» deyishsa, nimaga ishonish kerak?",
        },
        {
          t: "p",
          text: "Telegram kanallarida tarqalgan xabarga ko‘ra, story joylash Desktop’ning Canary #113 versiyasiga qo‘shilgan. Buning rasmiy tasdig‘i topilmadi, «Canary #113» degan versiya ham rasmiy manbalarda yo‘q. Turnir klipini joylash rejasini shu xabarga qarab tuzmang.",
        },
        {
          t: "p",
          text: "Xabarni o‘zingiz bir necha daqiqada tekshirib ko‘rishingiz mumkin:",
        },
        {
          t: "list",
          items: [
            "Telegram Desktop’ni oching. Chatlar ro‘yxatining yuqorisida va profil menyusida story yaratish tugmasi bor-yo‘qligini qarang. Tugma bo‘lmasa, bu nosozlik emas: Telegram’ning rasmiy yo‘riqnomasida Desktop umuman yo‘q.",
            "Yangilikni <a href=\"https://telegram.org\" target=\"_blank\" rel=\"noopener\">telegram.org</a> va Telegram’ning rasmiy e’lonlaridan tekshiring. Desktop’ning o‘zgarishlar ro‘yxati bu maqolada tekshirilmagan, shuning uchun u yerda nima yozilgani haqida bir narsa deya olmaymiz.",
            "Tugma chiqqan bo‘lsa, avval sinab ko‘ring: story’ni bitta ishonchli jamoadoshga ko‘rinadigan qilib joylang va u to‘g‘ri ochilganini so‘rang.",
            "Chatga «story qo‘yadigan Telegram» deb tashlangan havola yoki .exe faylni o‘rnatmang. Telegram dasturini faqat rasmiy saytdan yuklab oling.",
          ],
        },
        {
          t: "p",
          text: "Boshqa beta mish-mishlari <a href=\"/blog/telegram-beta-balans-qr-kod-oyinchi\">Telegram beta funksiyalari haqidagi maqolada</a> tahlil qilingan. Desktop’da bot ochilmay qolsa nima qilish kerakligi esa <a href=\"/blog/desktop-wallet-bot-ochilmayapti-oyinchi\">bu maqolada</a> yozilgan.",
        },
        {
          t: "h2",
          id: "joylangan-klip-bilan-pcdan-nima",
          text: "Joylangan klip bilan PC’dan nima qilsa bo‘ladi, nimani faqat telefondan?",
        },
        {
          t: "p",
          text: "Klipni telefondan qo‘ygandan keyin ham kompyuter butunlay foydasiz emas. Bir amalni PC’dan qilsa bo‘ladi, boshqasini esa faqat telefondan.",
        },
        {
          t: "table",
          head: [
            "Amal",
            "PC’dan bo‘ladimi",
            "Manba",
          ],
          rows: [
            [
              "Kim ko‘rishini o‘zgartirish",
              "Ha, story faol turganda istalgan qurilmangizdan",
              "<a href=\"https://telegram.org/tour/stories\" target=\"_blank\" rel=\"noopener\">Telegram Stories</a>",
            ],
            [
              "Story’ni tahrirlash",
              "Yo‘q, faqat story joylangan qurilmada",
              "<a href=\"https://telegram.org/tour/stories\" target=\"_blank\" rel=\"noopener\">Telegram Stories</a>",
            ],
            [
              "Yangi story yaratish",
              "Rasmiy yo‘riqnomada faqat iOS va Android bor",
              "<a href=\"https://telegram.org/tour/stories\" target=\"_blank\" rel=\"noopener\">Telegram Stories</a>",
            ],
          ],
        },
        {
          t: "p",
          text: "Amalda bu shunday ishlaydi. Klipni hammaga ochiq qo‘ydingiz, keyin kadrda raqib klan ko‘rmasligi kerak bo‘lgan joylashuv borligini payqadingiz. Story hali faol bo‘lsa, telefonni qidirib o‘tirmasdan, kompyuterdan auditoriyani jamoadoshlar ro‘yxatigacha toraytirasiz.",
        },
        {
          t: "p",
          text: "Yozuvdagi xato esa boshqa gap. Turnir sanasi yoki ro‘yxatdan o‘tish sharti noto‘g‘ri yozilgan bo‘lsa, uni faqat klipni joylagan telefondan tuzatish mumkin. Shuning uchun e’lon matnini joylashdan oldin bir marta qayta o‘qib chiqing.",
        },
        {
          t: "h2",
          id: "klan-kanaliga-galaba-klipini-qoyish",
          text: "Klan kanaliga g‘alaba klipini qo‘yish uchun jamoadan nima so‘raladi?",
        },
        {
          t: "p",
          text: "Kanal story’si shaxsiy story kabi darhol ishlamaydi. <a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a>da yozilishicha, kanal va guruhlar yetarlicha boost to‘plagandan keyingina story joylay oladi. Bu imkoniyat Stories e’lon qilingan <a href=\"https://telegram.org/blog/stories\" target=\"_blank\" rel=\"noopener\">blog postida</a> yangi boost tizimi bilan birga tanishtirilgan.",
        },
        {
          t: "p",
          text: "Demak, klan kanalida story bo‘lishi uchun jamoadoshlarni kanalga boost berishga chaqirish kerak. Nechta boost kerakligi bu maqolada tasdiqlanmagan. Aniq sonni chatdagi «falon ta yetadi» degan gapdan emas, Telegram ilovaning o‘zi ko‘rsatgan raqamdan biling.",
        },
        {
          t: "p",
          text: "Kanalda story qo‘yib bo‘lmasa, uchta narsani tekshiring:",
        },
        {
          t: "list",
          items: [
            "Kanal yetarlicha boost to‘plaganmi?",
            "Sizning admin huquqlaringiz story joylashga yetadimi? Ishonchingiz komil bo‘lmasa, kanal egasi bilan aniqlashtiring.",
            "Kanal nomidan ham kompyuterdagi tugma rasman tasdiqlanmagan. Telefondan urinib ko‘rganmisiz?",
          ],
        },
        {
          t: "p",
          text: "Klan kanalini sozlash, jumladan username tanlash haqida <a href=\"/blog/klan-kanaliga-bir-nechta-username-limit\">klan kanali username’lari haqidagi maqolani</a> o‘qing.",
        },
        {
          t: "h2",
          id: "oyin-skrinshotini-story-qilishdan-oldin",
          text: "O‘yin skrinshotini story qilishdan oldin nimani yashirish kerak?",
        },
        {
          t: "note",
          tone: "info",
          text: "Player ID’ning o‘zi akkauntni ochmaydi. Shunday bo‘lsa ham, uni hamma ko‘radigan story’ga qo‘yish shart emas.",
        },
        {
          t: "p",
          text: "Kadrda quyidagilar ko‘rinmasin:",
        },
        {
          t: "list",
          items: [
            "kirish oynasi, QR-kod, SMS yoki Telegram kodi;",
            "bank ilovasi, karta raqami yoki to‘lov cheki;",
            "ovozli chatdagi sheriklarning shaxsiy ma’lumotlari va klanning ichki taktikasi. Bunday klipni «yaqin do‘stlar» yoki tanlangan ro‘yxatga qo‘ying.",
          ],
        },
        {
          t: "p",
          text: "Story ostiga «UC beraman, parolingni yubor» degan javob kelsa, bu aldov. Donat uchun parol kerak emas: GemPay ham faqat Player ID so‘raydi. Qaysi ma’lumot ochiq, qaysi biri esa akkauntdan ayirishi mumkinligi <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">o‘yin hisobini xavfsiz to‘ldirish</a> maqolasida batafsil yozilgan.",
        },
        {
          t: "h2",
          id: "klipga-birinchi-bolib-reaksiya-bildirgan",
          text: "Klipga birinchi bo‘lib reaksiya bildirgan jamoadoshga nima sovg‘a qilish mumkin?",
        },
        {
          t: "p",
          text: "G‘alaba klipiga birinchi bo‘lib munosabat bildirgan yoki o‘sha raundda sizni qutqargan sherikka kichik sovg‘a qilish mumkin. <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>da uchta variant bor:",
        },
        {
          t: "list",
          items: [
            "<strong>UC, olmos yoki CP.</strong> Faqat jamoadoshning Player ID’si kerak. Nik to‘lovdan oldin tekshirib ko‘rsatiladi, valyuta 1–5 daqiqada avtomatik tushadi.",
            `<strong>Telegram Stars.</strong> @username bo‘yicha beriladi, bir buyurtmada 50 dan 10 000 tagacha olish mumkin, bir necha soniyada tushadi. Bitta Stars karta o‘tkazmasi yoki bot balansidan ${som(STARS_UNIT_CARD, "uz")}, Click yoki Uzum Bank orqali ${som(STARS_UNIT_ONLINE, "uz")}. Stars o‘yin valyutasiga aylanmaydi.`,
            `<strong>Telegram Premium.</strong> @username bo‘yicha Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi, akkauntga kirilmaydi. 3 oy — ${som(premium(3), "uz")}, 6 oy — ${som(premium(6), "uz")}, 12 oy — ${som(premium(12), "uz")}. 1 oylik tarif yo‘q.`,
          ],
        },
        {
          t: "p",
          text: "To‘lov UzCard, HUMO, Click, Uzum Bank yoki bot balansi orqali qilinadi. Qaysi sovg‘a kimga mosligi <a href=\"/blog/jamoadosh-tugilgan-kuniga-telegram-sovga\">jamoadoshga sovg‘a tanlash haqidagi maqolada</a>, Premium chatda nima berishi esa <a href=\"/blog/telegram-premium-oyinchi-uchun\">Premium o‘yinchiga nima beradi</a> maqolasida yozilgan. Buyurtmada muammo chiqsa, buyurtma raqami bilan <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>ga yozing.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Telegram Stories",
              href: "https://telegram.org/tour/stories",
            },
            {
              label: "Telegram FAQ",
              href: "https://telegram.org/faq",
            },
            {
              label: "Stories and 10 Years of Telegram",
              href: "https://telegram.org/blog/stories",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Klipni ertalab hammaga ochiq qo‘ygan edim. Kechqurun PC’dan uni faqat klanga ko‘rinadigan qilsam bo‘ladimi?",
          a: "Ha, story hali faol bo‘lsa, bo‘ladi. Telegram auditoriyani istalgan qurilmangizdan o‘zgartirishga ruxsat beradi, kompyuter ham shunga kiradi.",
        },
        {
          q: "Story ostidagi turnir sanasini xato yozibman. Kompyuterdan tuzatsam bo‘ladimi?",
          a: "Yo‘q, tahrirlashni faqat story joylangan qurilmada qilish mumkin. Klipni qaysi telefondan qo‘ygan bo‘lsangiz, o‘sha telefonni oching.",
        },
        {
          q: "Klandoshim chatga «story qo‘yadigan Telegram» faylini tashladi. Ishlatsam bo‘ladimi?",
          a: "Ishlatmang. Desktop’da story joylash rasman tasdiqlanmagan, notanish o‘rnatish fayli esa akkauntingizni xavf ostiga qo‘yishi mumkin. Telegram’ni faqat telegram.org’dan yuklab oling.",
        },
        {
          q: "Jamoadoshlar kanalimizga boost bersa, unga story qo‘ya olamizmi?",
          a: "Ha, Telegram’ga ko‘ra, kanal yetarlicha boost to‘plagach story joylay oladi. Qancha boost kerakligini Telegram ilovaning o‘zida tekshiring.",
        },
        {
          q: "Premium’siz oddiy akkauntdan g‘alaba klipini story qilsa bo‘ladimi?",
          a: "Bo‘ladi: Telegram story joylashni barcha foydalanuvchilarga ochgan. Premium’ni faqat uning qo‘shimcha imkoniyatlari kerak bo‘lsa oling.",
        },
        {
          q: "Yarim soatlik stream yozuvini story qilsam, to‘liq ketadimi?",
          a: "Story uzunligi chegarasi bu maqolada tasdiqlanmagan, lekin uzun yozuvni bunday formatda ko‘rish noqulay. Undan 1–2 ta eng yaxshi lahzani kesib oling.",
        },
        {
          q: "Skrinshotda Player ID ko‘rinib turibdi. Story’ga qo‘yish xavflimi?",
          a: "ID’ning o‘zi akkauntga kirishga yetmaydi, lekin bunday skrinshotni faqat jamoadoshlarga ko‘rsatgan ma’qul. Kadrda kod, QR yoki to‘lov cheki bo‘lsa, uni joylamang.",
        },
      ],
    },
    ru: {
      title: "Как выложить историю в Telegram с компьютера: игровой клип с ПК",
      metaTitle: "Как выложить историю в Telegram с компьютера",
      metaDescription: "Пока только через телефон: Telegram описывает создание историй для iOS и Android. Перенесите клип с Desktop на телефон и опубликуйте его оттуда.",
      excerpt: "Пока только через телефон: Telegram описывает создание историй для iOS и Android. Перенесите клип с Desktop на телефон и опубликуйте его оттуда.",
      answer: "Пока только через телефон: Telegram описывает создание историй для iOS и Android. Перенесите клип с Desktop на телефон и опубликуйте его оттуда.",
      body: [
        {
          t: "h2",
          id: "pcda-yozilgan-galaba-klipini-telegram",
          text: "Можно ли выложить в историю Telegram клип победы, записанный на ПК, напрямую?",
        },
        {
          t: "p",
          text: "Пока на это рассчитывать нельзя. На <a href=\"https://telegram.org/tour/stories\" target=\"_blank\" rel=\"noopener\">странице Stories</a> Telegram описывает создание истории только для двух платформ. На iOS для этого есть кнопка [+] в списке чатов, на Android — значок камеры. Версия для компьютера там вообще не упоминается. Поэтому надёжный путь один: перенести клип на телефон и опубликовать историю с него.",
        },
        {
          t: "p",
          text: "Тип аккаунта значения не имеет. По той же странице, любой пользователь Telegram может смотреть истории, публиковать их и реагировать на них. Ни Premium, ни отдельный аккаунт не нужны. Важно только устройство, с которого вы публикуете.",
        },
        {
          t: "h2",
          id: "klipni-pcdan-telefonga-olib-otib",
          text: "Как перенести клип с ПК на телефон и сделать из него историю: 5 шагов",
        },
        {
          t: "p",
          text: "Пример: вчера вечером вы сделали эйс на компьютере, и клип лежит в папке программы для записи экрана. Чтобы превратить его в историю:",
        },
        {
          t: "steps",
          items: [
            {
              title: "Обрежьте клип на компьютере",
              text: "Оставьте не весь раунд, а самый яркий момент: клатч, эйс или кадр победы. История открывается на телефоне вертикально, поэтому главное действие должно быть в центре кадра. Какой длины видео помещается в историю, в этой статье не подтверждено. Если клип окажется слишком длинным, это будет видно при публикации.",
            },
            {
              title: "Отправьте клип из Telegram Desktop в «Избранное»",
              text: "Перетащите файл в чат или выберите его через значок скрепки. Если не хотите, чтобы клип сжался, отправьте его как файл.",
            },
            {
              title: "Сохраните клип в галерею телефона",
              text: "Откройте на телефоне «Избранное» в том же аккаунте, скачайте видео и сохраните его в память.",
            },
            {
              title: "Откройте окно создания истории",
              text: "На iOS нажмите кнопку [+] в списке чатов, на Android — значок камеры. Затем выберите клип из галереи.",
            },
            {
              title: "Перед публикацией выберите аудиторию",
              text: "Согласно <a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a>, вариантов четыре: все, ваши контакты, близкие друзья или список, который вы составите сами. Если в клипе видна тактика клана, показывайте его только списку сокомандников.",
            },
          ],
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "klipni-telefonga-otkazishning-qaysi-yoli",
          text: "Какой способ перенести клип на телефон подойдёт вам?",
        },
        {
          t: "p",
          text: "Для одного-двух клипов хватит «Избранного». Если за вечер вы записали десятки моментов, другой вариант может оказаться быстрее.",
        },
        {
          t: "table",
          head: [
            "Способ",
            "Когда удобен",
            "На что обратить внимание",
          ],
          rows: [
            [
              "«Избранное»",
              "1–2 клипа, кабеля под рукой нет",
              "Большой файл грузится медленно, всё зависит от скорости интернета",
            ],
            [
              "Копирование по кабелю",
              "Клип тяжёлый или клипов несколько",
              "Сначала проверьте свободное место на телефоне",
            ],
            [
              "Ваше собственное облачное хранилище",
              "Клип нужен и на других устройствах",
              "Не входите в незнакомые «видеоконвертеры» через аккаунт Telegram или игровой аккаунт",
            ],
            [
              "Кнопка историй в Desktop",
              "Только если она у вас действительно появилась",
              "Официально не подтверждена, может измениться или исчезнуть",
            ],
          ],
        },
        {
          t: "p",
          text: "Чтобы обрезать видео или сделать его вертикальным, никакому сервису не нужны код от Telegram или пароль. Если их просят, закройте страницу.",
        },
        {
          t: "h2",
          id: "chatda-desktopda-story-chiqdi-deyishsa",
          text: "В чате пишут «в Desktop появились истории» — чему верить?",
        },
        {
          t: "p",
          text: "Если верить сообщению, которое разошлось по Telegram-каналам, публикацию историй добавили в версию Desktop Canary #113. Официального подтверждения этому не нашлось, а версии «Canary #113» нет в официальных источниках. Не стройте на этом сообщении планы по публикации турнирного клипа.",
        },
        {
          t: "p",
          text: "Проверить новость самостоятельно можно за несколько минут:",
        },
        {
          t: "list",
          items: [
            "Откройте Telegram Desktop. Посмотрите, есть ли кнопка создания истории над списком чатов и в меню профиля. Если её нет, это не сбой: в официальной инструкции Telegram версия Desktop вообще не упоминается.",
            "Ищите новость на <a href=\"https://telegram.org\" target=\"_blank\" rel=\"noopener\">telegram.org</a> и в официальных анонсах Telegram. Список изменений Desktop для этой статьи не проверялся, так что сказать, что там написано, мы не можем.",
            "Если кнопка появилась, сначала протестируйте её: опубликуйте историю только для одного надёжного сокомандника и спросите, нормально ли она открылась.",
            "Не устанавливайте ссылки и .exe-файлы, которые кидают в чат под видом «Telegram с историями». Скачивайте Telegram только с официального сайта.",
          ],
        },
        {
          t: "p",
          text: "Другие слухи о бета-версиях разобраны в <a href=\"/blog/telegram-beta-balans-qr-kod-oyinchi\">статье о бета-функциях Telegram</a>. Что делать, если в Desktop не открывается бот, описано в <a href=\"/blog/desktop-wallet-bot-ochilmayapti-oyinchi\">этой статье</a>.",
        },
        {
          t: "h2",
          id: "joylangan-klip-bilan-pcdan-nima",
          text: "Что можно сделать с опубликованным клипом на ПК, а что только с телефона?",
        },
        {
          t: "p",
          text: "Даже когда клип уже выложен с телефона, компьютер не становится бесполезным. Одно действие доступно с ПК, другое — только с телефона.",
        },
        {
          t: "table",
          head: [
            "Действие",
            "Можно ли с ПК",
            "Источник",
          ],
          rows: [
            [
              "Изменить круг зрителей",
              "Да, с любого вашего устройства, пока история активна",
              "<a href=\"https://telegram.org/tour/stories\" target=\"_blank\" rel=\"noopener\">Telegram Stories</a>",
            ],
            [
              "Отредактировать историю",
              "Нет, только на устройстве, с которого её опубликовали",
              "<a href=\"https://telegram.org/tour/stories\" target=\"_blank\" rel=\"noopener\">Telegram Stories</a>",
            ],
            [
              "Создать новую историю",
              "В официальной инструкции есть только iOS и Android",
              "<a href=\"https://telegram.org/tour/stories\" target=\"_blank\" rel=\"noopener\">Telegram Stories</a>",
            ],
          ],
        },
        {
          t: "p",
          text: "На практике это работает так. Вы выложили клип для всех, а потом заметили в кадре позицию, которую вражескому клану видеть не стоит. Пока история активна, не нужно искать телефон: сузьте аудиторию до списка сокомандников прямо с компьютера.",
        },
        {
          t: "p",
          text: "С ошибкой в подписи всё иначе. Если неправильно указали дату турнира или условия регистрации, исправить это можно только с того телефона, с которого выложили клип. Поэтому перечитайте текст анонса перед публикацией.",
        },
        {
          t: "h2",
          id: "klan-kanaliga-galaba-klipini-qoyish",
          text: "Что нужно от команды, чтобы выложить клип победы в канал клана?",
        },
        {
          t: "p",
          text: "История канала не работает сразу, как личная. В <a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a> сказано, что каналы и группы могут публиковать истории только после того, как наберут достаточно бустов. Эту возможность представили вместе с новой системой бустов в <a href=\"https://telegram.org/blog/stories\" target=\"_blank\" rel=\"noopener\">посте</a>, где анонсировали Stories.",
        },
        {
          t: "p",
          text: "Значит, чтобы у канала клана появились истории, нужно попросить сокомандников отдать каналу свои бусты. Сколько их требуется, в этой статье не подтверждено. Точное число смотрите в самом приложении Telegram, а не в сообщениях из чата вроде «хватит стольких-то».",
        },
        {
          t: "p",
          text: "Если в канал не получается выложить историю, проверьте три вещи:",
        },
        {
          t: "list",
          items: [
            "Набрал ли канал достаточно бустов?",
            "Хватает ли ваших прав администратора для публикации историй? Если не уверены, уточните у владельца канала.",
            "Кнопка на компьютере не подтверждена официально и для историй от имени канала. Пробовали опубликовать с телефона?",
          ],
        },
        {
          t: "p",
          text: "О настройке канала клана, в том числе о выборе юзернейма, читайте в <a href=\"/blog/klan-kanaliga-bir-nechta-username-limit\">статье о юзернеймах для канала клана</a>.",
        },
        {
          t: "h2",
          id: "oyin-skrinshotini-story-qilishdan-oldin",
          text: "Что скрыть на игровом скриншоте перед публикацией в историю?",
        },
        {
          t: "note",
          tone: "info",
          text: "Сам по себе Player ID не открывает доступ к аккаунту. И всё же выкладывать его в историю, которую видят все, незачем.",
        },
        {
          t: "p",
          text: "В кадре не должно быть:",
        },
        {
          t: "list",
          items: [
            "окна входа, QR-кода, SMS или кода от Telegram;",
            "банковского приложения, номера карты или чека об оплате;",
            "личных данных напарников из голосового чата и внутренней тактики клана. Такой клип показывайте «Близким друзьям» или выбранному списку.",
          ],
        },
        {
          t: "p",
          text: "Если под историей пишут «дам UC, скинь пароль», это обман. Для доната пароль не нужен: GemPay тоже просит только Player ID. Какие данные можно показывать, а какие могут стоить вам аккаунта, подробно разобрано в статье о <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">безопасном пополнении игрового счёта</a>.",
        },
        {
          t: "h2",
          id: "klipga-birinchi-bolib-reaksiya-bildirgan",
          text: "Что подарить сокомандику, который первым отреагировал на клип?",
        },
        {
          t: "p",
          text: "Напарнику, который первым отреагировал на клип победы или вытащил вас в том раунде, можно сделать небольшой подарок. В <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> есть три варианта:",
        },
        {
          t: "list",
          items: [
            "<strong>UC, алмазы или CP.</strong> Нужен только Player ID сокомандника. Ник проверяется и показывается до оплаты, валюта зачисляется автоматически за 1–5 минут.",
            `<strong>Telegram Stars.</strong> Отправляются по @username, за один заказ можно купить от 50 до 10 000 звёзд, приходят за несколько секунд. Одна звезда стоит ${som(STARS_UNIT_CARD, "ru")} при переводе с карты или оплате с баланса бота и ${som(STARS_UNIT_ONLINE, "ru")} через Click или Uzum Bank. Stars не конвертируются в игровую валюту.`,
            `<strong>Telegram Premium.</strong> Подключается по @username через официальный механизм подарков Telegram, вход в аккаунт не нужен. 3 месяца — ${som(premium(3), "ru")}, 6 месяцев — ${som(premium(6), "ru")}, 12 месяцев — ${som(premium(12), "ru")}. Тарифа на 1 месяц нет.`,
          ],
        },
        {
          t: "p",
          text: "Оплатить можно через UzCard, HUMO, Click, Uzum Bank или с баланса бота. Какой подарок кому подойдёт, рассказано в <a href=\"/blog/jamoadosh-tugilgan-kuniga-telegram-sovga\">статье о выборе подарка сокомандику</a>. Что Premium даёт в чате, разобрано в статье <a href=\"/blog/telegram-premium-oyinchi-uchun\">«Что Telegram Premium даёт игроку»</a>. Если с заказом возникла проблема, напишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> и укажите номер заказа.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Telegram Stories",
              href: "https://telegram.org/tour/stories",
            },
            {
              label: "Telegram FAQ",
              href: "https://telegram.org/faq",
            },
            {
              label: "Stories and 10 Years of Telegram",
              href: "https://telegram.org/blog/stories",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Утром я выложил клип для всех. Можно вечером с ПК оставить его видимым только для клана?",
          a: "Да, если история ещё активна. Telegram позволяет менять аудиторию с любого вашего устройства, в том числе с компьютера.",
        },
        {
          q: "Я ошибся с датой турнира в подписи к истории. Можно исправить с компьютера?",
          a: "Нет, редактировать историю можно только на том устройстве, с которого она опубликована. Откройте тот телефон, с которого выкладывали клип.",
        },
        {
          q: "Соклановец скинул в чат файл «Telegram с историями». Можно его установить?",
          a: "Не устанавливайте. Публикация историй в Desktop официально не подтверждена, а незнакомый установщик может поставить ваш аккаунт под угрозу. Скачивайте Telegram только с telegram.org.",
        },
        {
          q: "Если сокомандники отдадут бусты нашему каналу, мы сможем выкладывать в него истории?",
          a: "Да, по данным Telegram, канал может публиковать истории, когда наберёт достаточно бустов. Сколько их нужно, смотрите в самом приложении Telegram.",
        },
        {
          q: "Можно выложить клип победы в историю с обычного аккаунта без Premium?",
          a: "Можно: Telegram открыл публикацию историй всем пользователям. Premium берите, только если нужны его дополнительные возможности.",
        },
        {
          q: "Если выложить в историю запись стрима на полчаса, она уйдёт целиком?",
          a: "Ограничение длины истории в этой статье не подтверждено, но длинную запись в таком формате смотреть неудобно. Вырежьте из неё 1–2 лучших момента.",
        },
        {
          q: "На скриншоте виден мой Player ID. Опасно выкладывать его в историю?",
          a: "Одного ID недостаточно, чтобы войти в аккаунт, но такой скриншот лучше показывать только сокомандникам. Если в кадре есть код, QR или чек об оплате, не публикуйте его.",
        },
      ],
    },
  },
};

export default article;
