// Avtoblogyoz yasagan maqola (2026-11-16). Niyat: Klan yoki turnir kanalini yuritadigan o‘yinchi kanal postida «endi 20 ta username» xabarini ko‘rgach, «klan kanaliga bir nechta username» deb qidiradi. U limit rostdan oshganini, kanalga qo‘shimcha collectible username kerakmi-yo‘qligini va chatdagi flipperlardan username olish xavfli emasligini bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://core.telegram.org/api/fragment
//   https://fragment.com/about
//   https://core.telegram.org/method/account.toggleUsername
//   https://core.telegram.org/method/channels.toggleUsername
//   https://core.telegram.org/api/config

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "klan-kanaliga-bir-nechta-username-limit",
  game: null,
  type: "info",
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  keywords: ["klan kanaliga bir nechta username","telegram kanalga username qo'shish","collectible username kanalga ulash","telegram 20 ta username rostmi","fragment username kanal","USERNAMES_ACTIVE_TOO_MUCH","несколько юзернеймов на канал телеграм","привязать 20 юзернеймов телеграм","коллекционный юзернейм канал","лимит юзернеймов телеграм","фрагмент юзернейм привязать к каналу"],
  locales: {
    uz: {
      title: "Klan kanaliga bir nechta username: «endi 20 ta» rostmi va kerakmi?",
      metaTitle: "Klan kanaliga bir nechta username",
      metaDescription: "Ha, o‘zingizga tegishli kanalga Fragment’dan olingan bir nechta collectible username ulash mumkin. Limit 10 dan 20 ga oshgani esa rasman tasdiqlanmagan.",
      excerpt: "Ha, o‘zingizga tegishli kanalga Fragment’dan olingan bir nechta collectible username ulash mumkin. Limit 10 dan 20 ga oshgani esa rasman tasdiqlanmagan.",
      answer: "Ha, o‘zingizga tegishli kanalga Fragment’dan olingan bir nechta collectible username ulash mumkin. Limit 10 dan 20 ga oshgani esa rasman tasdiqlanmagan.",
      body: [
        {
          t: "p",
          text: "Klan yoki turnir kanaliga bir nechta username ulash mumkin. Faqat oddiy @nom bittadan oshmaydi, qolganlari Fragment’dan olingan collectible username bo‘lishi kerak. «Endi 20 ta» degan raqam esa Telegram yoki Fragment e’lonlarida topilmadi, u faqat kanal postiga tayanadi.",
        },
        {
          t: "h2",
          id: "endi-20-ta-username-posti",
          text: "«Endi 20 ta username» posti: klan kanali uchun nima rost?",
        },
        {
          t: "p",
          text: "Telegram’ning texnik hujjatida yozilishicha, foydalanuvchi o‘ziga tegishli akkaunt, superguruh va kanalga Fragment’dan olingan bir nechta collectible username biriktira oladi (<a href=\"https://core.telegram.org/api/fragment\" target=\"_blank\" rel=\"noopener\">Fragment collectibles</a>). Demak, klan kanalining egasi siz bo‘lsangiz, unga qo‘shimcha manzil qo‘sha olasiz.",
        },
        {
          t: "p",
          text: "Fragment’ning <a href=\"https://fragment.com/about\" target=\"_blank\" rel=\"noopener\">How does Fragment work?</a> sahifasida yana bir shart bor: profil, guruh yoki kanalda oddiy username ko‘pi bilan bitta bo‘ladi. Masalan, kanalingiz @lochin_clan bo‘lsa, yoniga ikkinchi oddiy nom ochib bo‘lmaydi. @lochin kabi qo‘shimcha nom faqat Fragment’da sotib olinadigan collectible bo‘la oladi.",
        },
        {
          t: "p",
          text: "Rasmiy hujjatdan postdagidan ko‘ra boshqacharoq manzara chiqadi:",
        },
        {
          t: "list",
          items: [
            "ulangan collectible nom darhol ishlamaydi, uni alohida faollashtirish kerak;",
            "kanalda faol username’lar soni cheklangan, chegaraga yetganda USERNAMES_ACTIVE_TOO_MUCH xatosi qaytadi (<a href=\"https://core.telegram.org/method/channels.toggleUsername\" target=\"_blank\" rel=\"noopener\">channels.toggleUsername</a>);",
            "bu chegara nechta ekani rasmiy sahifalarda yozilmagan — na 10, na 20.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Avval bitta nom oling va u kanalda faol bo‘lishini tekshiring. Bir yo‘la uch-to‘rtta nom olib qo‘ysangiz, faollashtirishda xato chiqishi va ortiqchasi kanalga ulangan bo‘lsa ham ishlamay turishi mumkin.",
        },
        {
          t: "h2",
          id: "klan-admini-10-va-20",
          text: "Klan admini 10 va 20 raqamiga qayerda duch keladi?",
        },
        {
          t: "p",
          text: "Telegram ilovalari sozlamalarining ro‘yxatida (<a href=\"https://core.telegram.org/api/config\" target=\"_blank\" rel=\"noopener\">Client configuration</a>) 10 va 20 raqamlari haqiqatan bor. Lekin ular username soni emas, bitta foydalanuvchi nechta ochiq kanal yoki superguruh yarata olishi haqida: Premium’siz — 10, Premium bilan — 20.",
        },
        {
          t: "table",
          head: [
            "Raqam",
            "Postda nima deyilgan",
            "Rasmiy hujjatda nimani bildiradi",
            "Klan admini uchun ma’nosi",
          ],
          rows: [
            [
              "10",
              "Eski username limiti",
              "Premium’siz foydalanuvchi yarata oladigan ochiq kanal va superguruhlar",
              "Klan, turnir, savdo kanallari va ochiq guruhlar soni shunga yetsa, yangisini ochish qiyinlashadi",
            ],
            [
              "20",
              "Yangi username limiti",
              "Premium foydalanuvchi yarata oladigan ochiq kanal va superguruhlar",
              "Ko‘p ochiq chat yuritadigan admin uchun Premium foyda beradi",
            ],
            [
              "Faol username chegarasi",
              "20 ta",
              "Bor, lekin raqami ko‘rsatilmagan",
              "Yangi nom yoqilmasa, sabab shu chegara bo‘lishi mumkin",
            ],
          ],
        },
        {
          t: "p",
          text: "Masalan, sizda klan kanali, ikkita turnir kanali, savdo kanali va bir nechta ochiq guruh bor. Yangi ochiq kanal ochishda cheklovga duch kelsangiz, buni username sotib olib hal qilib bo‘lmaydi — bu boshqa limit.",
        },
        {
          t: "p",
          text: "Username chegarasi Premium’ga bog‘liqmi yoki profil va kanalda farq qiladimi — bu haqda rasmiy ma’lumot yo‘q.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "klan-kanaliga-qoshimcha-collectible-username",
          text: "Klan kanaliga qo‘shimcha collectible username qachon foyda beradi?",
        },
        {
          t: "p",
          text: "Foyda beradigan vaziyatlar:",
        },
        {
          t: "list",
          items: [
            "klan nomini o‘zgartirdingiz, lekin yangi o‘yinchilar hali eski nom bilan qidiradi;",
            "liga yoki turnir uchun qisqa, oson aytiladigan manzil kerak;",
            "boshqa birov klan nomiga o‘xshash kanal ochib, o‘yinchilarni chalg‘itishidan xavotirdasiz;",
            "kanal ham o‘zbekcha, ham ruscha nom bilan topilishi kerak.",
          ],
        },
        {
          t: "p",
          text: "Odatda keraksiz bo‘lgan vaziyatlar:",
        },
        {
          t: "list",
          items: [
            "4–5 kishilik squad kanali;",
            "faqat taklif havolasi bilan kiriladigan yopiq klan chati — collectible nom ochiq kanal va guruhlarga beriladi;",
            "klan asosan o‘yin ichidagi chatda gaplashadi.",
          ],
        },
        {
          t: "p",
          text: "Bunday hollarda bitta oddiy @username yetarli. Collectible nom o‘yinda reyting, UC yoki skin bermaydi, u faqat kanalga yana bir manzil qo‘shadi. Klan chatlarida taklif qilinadigan .tg nomlar haqida <a href=\"/blog/tg-domen-taklifi-klan-chati-xavfi\">.tg domen taklifi bo‘yicha maqolada</a> yozilgan.",
        },
        {
          t: "h2",
          id: "collectible-nomni-klan-kanaliga-ulash",
          text: "Collectible nomni klan kanaliga ulash: 5 qadam",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Nomni <a href=\"https://fragment.com/about\" target=\"_blank\" rel=\"noopener\">fragment.com</a> saytidan oling. Chatdagi skrinshot yoki «menda bor» degan gapga tayanmang.",
            "Fragment’da nomni sizga tegishli ochiq kanal yoki guruhga biriktiring. Fragment qoidasiga ko‘ra, nom shaxsiy profilga yoki siz egalik qiladigan ochiq kanal va guruhlarga beriladi.",
            "Telegram’da yangi nomni faollashtiring. Biriktirilgan nom avvaliga nofaol turadi. Tugma ilovaning qaysi joyida turishi rasmiy manbada tasvirlanmagan, odatda kanalning username sozlamalarida izlanadi.",
            "Qaysi nom asosiy ko‘rinishini tanlang. Ro‘yxatda birinchi turgan username interfeysda asosiy nom bo‘lib chiqadi, tartibni esa o‘zgartirish mumkin.",
            "USERNAMES_ACTIVE_TOO_MUCH chiqsa, kam ishlatiladigan collectible nomlardan birini nofaol qilib, yangisini qayta yoqib ko‘ring. Oddiy username’ni nofaol qilib bo‘lmaydi, shuning uchun u joy bo‘shatmaydi.",
          ],
        },
        {
          t: "p",
          text: "Tanlov doimiy emas: Fragment’ga ko‘ra, nomni istalgan paytda boshqa chatga o‘tkazish mumkin. Fragment’ga qaysi Telegram akkaunti bilan kirish haqida <a href=\"/blog/fragment-verifikatsiyasiz-akkaunt-ulash-oyinchi\">Fragment’ga akkaunt ulash bo‘yicha maqolada</a> yozilgan.",
        },
        {
          t: "h2",
          id: "klan-tarkibi-ozgarsa-yopiq-kanal",
          text: "Klan tarkibi o‘zgarsa: yopiq kanal, ko‘chish va klan boti",
        },
        {
          t: "p",
          text: "Klanlar tez o‘zgaradi: tarkib yangilanadi, kanal yopiq qilinadi yoki butunlay yangisi ochiladi. Har bir holatda username bilan nima bo‘ladi:",
        },
        {
          t: "list",
          items: [
            "<strong>Kanal yopiq qilindi.</strong> Kanal yoki superguruhdagi barcha collectible nomlarni bir yo‘la nofaol qilish mumkin. Texnik hujjatda kanalni yopiq (private) qilish aynan shunga misol qilib keltirilgan.",
            "<strong>Klan yangi kanalga ko‘chdi.</strong> Nomni yangi kanalga o‘tkazish mumkin, lekin u kanal ham sizga tegishli bo‘lishi kerak. Admin bo‘lish yetarli ekani manbalarda aytilmagan.",
            "<strong>Nom klan botiga kerak.</strong> Ko‘p klanlar turnir ro‘yxati yoki natijalar uchun bot ishlatadi. Collectible nomni botga biriktirish uchun uni bir martalik to‘lov bilan upgrade qilish kerak va Fragment’ga ko‘ra bu qaytarilmaydi. To‘lov miqdori bu maqolada tasdiqlanmagan, uni Fragment’da ko‘ring.",
          ],
        },
        {
          t: "p",
          text: "Shuning uchun chiroyli turnir nomini botga ulashdan oldin o‘ylab ko‘ring: keyinroq uni kanalga qaytarmoqchi bo‘lsangiz, upgrade’ni bekor qilib bo‘lmaydi.",
        },
        {
          t: "h2",
          id: "klan-chatidagi-flipperdan-username-olish",
          text: "Klan chatidagi flipperdan username olish: qayerda tuzoq bor?",
        },
        {
          t: "p",
          text: "Flipperlar nomlarni arzonroq olib, qimmatroq sotadi. «Limit oshdi» degan xabar ularga qo‘l keladi: chatda «hamma ko‘p nom oladi, narx ko‘tariladi, hozir oling» degan gaplar tarqaladi. Limit oshgani esa tasdiqlanmagan.",
        },
        {
          t: "p",
          text: "Quyidagilarni ko‘rsangiz, savdoni to‘xtating:",
        },
        {
          t: "list",
          items: [
            "pulni Fragment’dan tashqarida — kartaga yoki TON manzilga — oldindan yuborish so‘ralsa;",
            "«garant» sifatida notanish bot yoki uchinchi odam taklif qilinsa;",
            "nomni «o‘tkazish uchun» Telegram kodi, 2FA paroli yoki hamyon kaliti so‘ralsa;",
            "«bir soatdan keyin qimmatlashadi» deb shoshiltirishsa;",
            "sotuvchi nomni faqat o‘z kanalida ko‘rsatib, Fragment’dagi sahifasini bermasa.",
          ],
        },
        {
          t: "p",
          text: "Xavfsizroq yo‘l: nomni Fragment’da o‘zingiz qidiring va faqat o‘sha yerda sotib oling. Keyin u kanalingizga biriktirilgani va faol ekanini o‘zingiz tekshiring. Akkauntni himoyalash uchun 2FA’ni yoqing — bu haqda <a href=\"/blog/888-anonim-raqam-oyinchi-akkaunt-himoyasi\">+888 va akkaunt himoyasi bo‘yicha maqolada</a>. O‘xshash sxemalar: <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">o‘yin chatidagi gift sotuv takliflari</a> va <a href=\"/blog/ton-manzilga-donat-tolovi-oyinchi-xavfi\">TON manzilga to‘lov xavfi</a>.",
        },
        {
          t: "h2",
          id: "usernamega-pul-ajratishdan-oldin-klanga",
          text: "Username’ga pul ajratishdan oldin: klanga kerakliroq xaridlar",
        },
        {
          t: "p",
          text: "GemPay username sotmaydi. Lekin klan hayotida tez-tez kerak bo‘ladigan narsalarni <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> orqali so‘mda olish mumkin: UzCard, HUMO, Click, Uzum Bank yoki bot balansi bilan.",
        },
        {
          t: "list",
          items: [
            `<strong>Admin uchun Telegram Premium.</strong> 3 oy — ${som(premium(3), "uz")}, 6 oy — ${som(premium(6), "uz")}, 12 oy — ${som(premium(12), "uz")}. @username bo‘yicha Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi, akkauntga kirilmaydi. Ko‘p ochiq kanal yuritadigan adminda ochiq chat yaratish limiti 10 dan 20 ga oshadi. Batafsil: <a href="/blog/telegram-premium-oyinchi-uchun">Telegram Premium o‘yinchiga nima beradi</a>.`,
            `<strong>Turnir g‘oliblariga Stars.</strong> 1 ta Stars karta o‘tkazmasi yoki balans bilan ${som(STARS_UNIT_CARD, "uz")}, Click yoki Uzum Bank orqali ${som(STARS_UNIT_ONLINE, "uz")}. Bir buyurtmada 50 dan 10 000 tagacha, faqat @username kerak. Stars o‘yin valyutasiga aylanmaydi.`,
            "<strong>UC, olmos yoki CP.</strong> Faqat Player ID bo‘yicha tushiriladi, parol so‘ralmaydi. Nik to‘lovdan oldin tekshirib ko‘rsatiladi.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Hisobga tushgan valyuta qaytarilmaydi. Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi. Savol bo‘lsa, buyurtma raqami bilan <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>’ga yozing.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Fragment collectibles",
              href: "https://core.telegram.org/api/fragment",
            },
            {
              label: "How does Fragment work?",
              href: "https://fragment.com/about",
            },
            {
              label: "account.toggleUsername",
              href: "https://core.telegram.org/method/account.toggleUsername",
            },
            {
              label: "channels.toggleUsername",
              href: "https://core.telegram.org/method/channels.toggleUsername",
            },
            {
              label: "Client configuration",
              href: "https://core.telegram.org/api/config",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Klan kanaliga ikkinchi oddiy @nom ochsa bo‘ladimi?",
          a: "Yo‘q. Fragment’ga ko‘ra kanalda oddiy username bittadan ko‘p bo‘lmaydi, qo‘shimcha manzil uchun collectible nom kerak.",
        },
        {
          q: "Yangi nomni yoqsam xato chiqyapti, axir limit 20 ta emasmi?",
          a: "USERNAMES_ACTIVE_TOO_MUCH xatosi kanaldagi faol nomlar chegarasiga yetganingizni bildiradi. Bu chegaraning aniq raqami rasman e’lon qilinmagan, shuning uchun 20 ga tayanmang — keraksiz collectible nomni nofaol qiling.",
        },
        {
          q: "Admin Premium olsa, kanalga sig‘adigan nomlar ko‘payadimi?",
          a: "Bunday bog‘liqlik rasmiy manbalarda aytilmagan. Premium bilan 10 dan 20 ga oshadigan narsa — siz ochishingiz mumkin bo‘lgan ochiq kanal va superguruhlar soni.",
        },
        {
          q: "Klandoshim o‘z username’ini mening kanalimga ulab bera oladimi?",
          a: "Fragment qoidasida nom egasining o‘ziga tegishli chatga biriktirilishi aytilgan. Begona kanalga to‘g‘ridan-to‘g‘ri ulash tasdiqlanmagan, shuning uchun tartibni Fragment’da aniqlang, chatdagi vositachilarga ishonmang.",
        },
        {
          q: "Kanal havolasida qaysi nom asosiy bo‘lib chiqadi?",
          a: "Ro‘yxatda birinchi turgan nom asosiy bo‘ladi, tartibini esa almashtirsa bo‘ladi. Oddiy @nom nofaol qilinmaydi, u boshqa nomlar bilan birga ishlayveradi.",
        },
        {
          q: "GemPay’da kanal uchun username sotib olsa bo‘ladimi?",
          a: "Yo‘q, collectible nomlar Fragment’da sotiladi. GemPay botida so‘mda Telegram Stars, Premium va o‘yin valyutasi olinadi.",
        },
      ],
    },
    ru: {
      title: "Несколько username для канала клана: правда ли «теперь 20» и нужно ли",
      metaTitle: "Несколько username для канала клана",
      metaDescription: "Да, к своему каналу можно привязать несколько коллекционных username с Fragment. А рост лимита с 10 до 20 официально не подтверждён.",
      excerpt: "Да, к своему каналу можно привязать несколько коллекционных username с Fragment. А рост лимита с 10 до 20 официально не подтверждён.",
      answer: "Да, к своему каналу можно привязать несколько коллекционных username с Fragment. А рост лимита с 10 до 20 официально не подтверждён.",
      body: [
        {
          t: "p",
          text: "К каналу клана или турнира можно привязать несколько username. Но обычный @адрес бывает только один, остальные должны быть коллекционными username, купленными на Fragment. А цифра «теперь 20» не нашлась ни в объявлениях Telegram, ни на Fragment: её источник — только пост в канале.",
        },
        {
          t: "h2",
          id: "endi-20-ta-username-posti",
          text: "Пост «теперь 20 username»: что из этого правда для канала клана?",
        },
        {
          t: "p",
          text: "Техническая документация Telegram говорит: пользователь может привязать несколько коллекционных (collectible) username с Fragment к своему аккаунту, а также к своим супергруппам и каналам (<a href=\"https://core.telegram.org/api/fragment\" target=\"_blank\" rel=\"noopener\">Fragment collectibles</a>). Значит, если канал клана принадлежит вам, дополнительный адрес к нему добавить можно.",
        },
        {
          t: "p",
          text: "На странице Fragment <a href=\"https://fragment.com/about\" target=\"_blank\" rel=\"noopener\">How does Fragment work?</a> есть ещё одно условие: у профиля, группы или канала может быть не больше одного обычного username. Например, если канал называется @lochin_clan, второй обычный адрес рядом с ним не создать. Дополнительное имя вроде @lochin может быть только коллекционным, а такие имена продаются на Fragment.",
        },
        {
          t: "p",
          text: "В официальной документации всё выглядит не так, как в посте:",
        },
        {
          t: "list",
          items: [
            "привязанное коллекционное имя начинает работать не сразу: его нужно отдельно активировать;",
            "число активных username в канале ограничено, и при достижении предела возвращается ошибка USERNAMES_ACTIVE_TOO_MUCH (<a href=\"https://core.telegram.org/method/channels.toggleUsername\" target=\"_blank\" rel=\"noopener\">channels.toggleUsername</a>);",
            "каков этот предел, на официальных страницах не сказано: ни 10, ни 20 там нет.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Сначала купите одно имя и проверьте, что оно стало активным в канале. Если взять сразу три-четыре, при активации может появиться ошибка. Тогда лишние имена будут привязаны к каналу, но работать не будут.",
        },
        {
          t: "h2",
          id: "klan-admini-10-va-20",
          text: "Откуда админ клана берёт цифры 10 и 20?",
        },
        {
          t: "p",
          text: "В списке настроек приложений Telegram (<a href=\"https://core.telegram.org/api/config\" target=\"_blank\" rel=\"noopener\">Client configuration</a>) цифры 10 и 20 действительно есть. Только относятся они не к числу username, а к тому, сколько публичных каналов или супергрупп может создать один пользователь: 10 без Premium и 20 с Premium.",
        },
        {
          t: "table",
          head: [
            "Цифра",
            "Что сказано в посте",
            "Что означает в официальной документации",
            "Что это значит для админа клана",
          ],
          rows: [
            [
              "10",
              "Старый лимит username",
              "Сколько публичных каналов и супергрупп может создать пользователь без Premium",
              "Если канал клана, турнирные и торговый каналы вместе с открытыми группами упёрлись в это число, новый открыть будет сложнее",
            ],
            [
              "20",
              "Новый лимит username",
              "Сколько публичных каналов и супергрупп может создать пользователь с Premium",
              "Админу, который ведёт много открытых чатов, Premium будет полезен",
            ],
            [
              "Предел активных username",
              "20 штук",
              "Предел есть, но число не указано",
              "Если новое имя не включается, причина может быть в этом пределе",
            ],
          ],
        },
        {
          t: "p",
          text: "Пример: у вас канал клана, два турнирных канала, торговый канал и несколько открытых групп. Если при создании очередного публичного канала вы упёрлись в ограничение, покупка username не поможет: это совсем другой лимит.",
        },
        {
          t: "p",
          text: "Зависит ли предел username от Premium и различается ли он для профиля и канала, официальные источники не сообщают.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "klan-kanaliga-qoshimcha-collectible-username",
          text: "Когда каналу клана правда нужен дополнительный коллекционный username?",
        },
        {
          t: "p",
          text: "Когда он пригодится:",
        },
        {
          t: "list",
          items: [
            "клан сменил название, а новые игроки до сих пор ищут его по старому;",
            "для лиги или турнира нужен короткий адрес, который легко произнести;",
            "вы опасаетесь, что кто-то создаст канал с похожим названием и будет сбивать игроков с толку;",
            "канал должен находиться и по узбекскому, и по русскому названию.",
          ],
        },
        {
          t: "p",
          text: "Когда обычно не нужен:",
        },
        {
          t: "list",
          items: [
            "канал сквада на 4–5 человек;",
            "закрытый чат клана, куда попадают только по пригласительной ссылке: коллекционные имена присваиваются открытым каналам и группам;",
            "клан общается в основном во внутриигровом чате.",
          ],
        },
        {
          t: "p",
          text: "В таких случаях хватит одного обычного @username. Коллекционное имя не даёт в игре ни рейтинга, ни UC, ни скинов: оно просто добавляет каналу ещё один адрес. Про имена .tg, которые предлагают в клановых чатах, мы писали в <a href=\"/blog/tg-domen-taklifi-klan-chati-xavfi\">статье о предложениях домена .tg</a>.",
        },
        {
          t: "h2",
          id: "collectible-nomni-klan-kanaliga-ulash",
          text: "Как привязать коллекционное имя к каналу клана: 5 шагов",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Купите имя на сайте <a href=\"https://fragment.com/about\" target=\"_blank\" rel=\"noopener\">fragment.com</a>. Не верьте скриншоту из чата или словам «у меня есть».",
            "На Fragment привяжите имя к своему открытому каналу или группе. По правилам Fragment, имя можно присвоить личному профилю или открытым каналам и группам, владельцем которых вы являетесь.",
            "Активируйте новое имя в Telegram: после привязки оно неактивно. Где именно в приложении находится нужная кнопка, официальный источник не описывает. Обычно её ищут в настройках username канала.",
            "Выберите, какое имя будет основным. Первое username в списке отображается в интерфейсе как основное, а порядок можно поменять.",
            "Если появилась ошибка USERNAMES_ACTIVE_TOO_MUCH, отключите одно из редко используемых коллекционных имён и попробуйте включить новое ещё раз. Обычный username отключить нельзя, поэтому места он не освободит.",
          ],
        },
        {
          t: "p",
          text: "Выбор не окончательный: по данным Fragment, имя можно в любой момент перенести в другой чат. Каким аккаунтом Telegram входить на Fragment, читайте в <a href=\"/blog/fragment-verifikatsiyasiz-akkaunt-ulash-oyinchi\">статье о подключении аккаунта к Fragment</a>.",
        },
        {
          t: "h2",
          id: "klan-tarkibi-ozgarsa-yopiq-kanal",
          text: "Если клан меняется: закрытый канал, переезд и бот клана",
        },
        {
          t: "p",
          text: "Кланы меняются быстро: обновляется состав, канал делают закрытым или заводят новый. Вот что в каждом случае происходит с username:",
        },
        {
          t: "list",
          items: [
            "<strong>Канал стал закрытым.</strong> Все коллекционные имена канала или супергруппы можно отключить одним действием. В технической документации перевод канала в закрытый (private) приводится как раз как пример такого случая.",
            "<strong>Клан переехал в новый канал.</strong> Имя можно перенести, но новый канал тоже должен принадлежать вам. Достаточно ли быть в нём админом, источники не уточняют.",
            "<strong>Имя нужно боту клана.</strong> Многие кланы ведут через бота список участников турнира или результаты. Чтобы привязать коллекционное имя к боту, его нужно улучшить (upgrade) за разовую плату, и, по данным Fragment, отменить это нельзя. Размер платы в этой статье не подтверждён, смотрите его на Fragment.",
          ],
        },
        {
          t: "p",
          text: "Поэтому подумайте, прежде чем отдавать красивое турнирное имя боту. Если потом захотите вернуть его каналу, улучшение отменить не получится.",
        },
        {
          t: "h2",
          id: "klan-chatidagi-flipperdan-username-olish",
          text: "Покупка username у флиппера из клан-чата: в чём подвох?",
        },
        {
          t: "p",
          text: "Флипперы покупают имена подешевле и перепродают дороже. Новость о том, что «лимит вырос», им на руку: по чатам расходится «все сейчас будут брать много имён, цены поднимутся, берите сейчас». При этом рост лимита не подтверждён.",
        },
        {
          t: "p",
          text: "Прекращайте сделку, если:",
        },
        {
          t: "list",
          items: [
            "просят заранее перевести деньги в обход Fragment, на карту или TON-адрес;",
            "в качестве «гаранта» предлагают незнакомого бота или третьего человека;",
            "«для передачи» имени просят код Telegram, пароль 2FA или ключ кошелька;",
            "торопят: «через час будет дороже»;",
            "продавец показывает имя только у себя в канале и не даёт ссылку на его страницу на Fragment.",
          ],
        },
        {
          t: "p",
          text: "Безопаснее так: найдите имя на Fragment сами и покупайте только там. Затем лично проверьте, что оно привязано к вашему каналу и активно. Чтобы защитить аккаунт, включите 2FA, подробности в <a href=\"/blog/888-anonim-raqam-oyinchi-akkaunt-himoyasi\">статье о +888 и защите аккаунта</a>. Похожие схемы разобраны в материалах о <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">предложениях продать гифт в игровом чате</a> и <a href=\"/blog/ton-manzilga-donat-tolovi-oyinchi-xavfi\">рисках оплаты на TON-адрес</a>.",
        },
        {
          t: "h2",
          id: "usernamega-pul-ajratishdan-oldin-klanga",
          text: "Прежде чем тратиться на username: что клану нужнее",
        },
        {
          t: "p",
          text: "GemPay не продаёт username. Но то, что клану нужно постоянно, можно купить в сумах через <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>: картой UzCard или HUMO, через Click, Uzum Bank или с баланса бота.",
        },
        {
          t: "list",
          items: [
            `<strong>Telegram Premium для админа.</strong> 3 месяца — ${som(premium(3), "ru")}, 6 месяцев — ${som(premium(6), "ru")}, 12 месяцев — ${som(premium(12), "ru")}. Подключается по @username через официальный механизм подарков Telegram, входить в аккаунт не нужно. У админа, который ведёт много публичных каналов, лимит на создание открытых чатов вырастет с 10 до 20. Подробнее: <a href="/blog/telegram-premium-oyinchi-uchun">что Telegram Premium даёт игроку</a>.`,
            `<strong>Stars для победителей турнира.</strong> 1 Stars стоит ${som(STARS_UNIT_CARD, "ru")} при оплате переводом с карты или с баланса и ${som(STARS_UNIT_ONLINE, "ru")} через Click или Uzum Bank. За один заказ можно купить от 50 до 10 000 Stars, нужен только @username. В игровую валюту Stars не конвертируются.`,
            "<strong>UC, алмазы или CP.</strong> Зачисляются только по Player ID, пароль не нужен. Ник проверяется и показывается до оплаты.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Валюта, которая уже пришла на счёт, не возвращается. Если заказ не выполнен, деньги вернут полностью в течение 3 рабочих дней. Если есть вопросы, напишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> и укажите номер заказа.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Fragment collectibles",
              href: "https://core.telegram.org/api/fragment",
            },
            {
              label: "How does Fragment work?",
              href: "https://fragment.com/about",
            },
            {
              label: "account.toggleUsername",
              href: "https://core.telegram.org/method/account.toggleUsername",
            },
            {
              label: "channels.toggleUsername",
              href: "https://core.telegram.org/method/channels.toggleUsername",
            },
            {
              label: "Client configuration",
              href: "https://core.telegram.org/api/config",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Можно ли сделать каналу клана второй обычный @адрес?",
          a: "Нет. По данным Fragment, обычный username у канала может быть только один. Для дополнительного адреса нужно коллекционное имя.",
        },
        {
          q: "При включении нового имени выходит ошибка — разве лимит не 20?",
          a: "Ошибка USERNAMES_ACTIVE_TOO_MUCH означает, что канал достиг предела активных имён. Сколько составляет этот предел, официально не объявлено, так что не рассчитывайте на 20. Отключите ненужное коллекционное имя.",
        },
        {
          q: "Если админ купит Premium, у канала станет больше username?",
          a: "Официальные источники такой связи не упоминают. С Premium с 10 до 20 растёт другое — число публичных каналов и супергрупп, которые вы можете создать.",
        },
        {
          q: "Может ли соклановец привязать свой username к моему каналу?",
          a: "По правилам Fragment, владелец привязывает имя к чату, который принадлежит ему самому. Возможность напрямую привязать имя к чужому каналу не подтверждена, поэтому уточняйте порядок на Fragment и не доверяйтесь посредникам из чатов.",
        },
        {
          q: "Какое имя будет основным в ссылке на канал?",
          a: "Основным считается имя, которое стоит первым в списке, а порядок можно менять. Обычный @адрес отключить нельзя, он продолжает работать вместе с остальными.",
        },
        {
          q: "Можно ли купить username для канала в GemPay?",
          a: "Нет, коллекционные имена продаются на Fragment. В боте GemPay за сумы покупают Telegram Stars, Premium и игровую валюту.",
        },
      ],
    },
  },
};

export default article;
