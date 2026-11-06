// Avtoblogyoz yasagan maqola (2026-11-06). Niyat: Telegram'dan foydalanadigan o'yinchi «telegram beta yangi funksiyalar oyinchi» deb qidiradi. U profildagi balans tugmasi, QR-kod sozlash va sovg'ani hamyonga o'tkazish haqidagi beta mish-mishlardan qaysi biri rasmiy ekanini bilmoqchi. Bundan tashqari, bu o'zgarishlar jamoadoshga Stars, Premium yoki sovg'a berishiga ta'sir qiladimi, shuni aniqlamoqchi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/blog/wear-gifts-blockchain-and-more
//   https://core.telegram.org/api/gifts
//   https://core.telegram.org/constructor/savedStarGift
//   https://core.telegram.org/type/payments.StarGiftWithdrawalUrl
//   https://telegram.org/blog/collectible-gifts-and-more
//   https://translations.telegram.org/en/macos/unsorted/Gift.Withdraw.Text

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "telegram-beta-balans-qr-kod-oyinchi",
  game: null,
  type: "info",
  datePublished: "2026-11-06",
  dateModified: "2026-11-06",
  keywords: ["telegram beta yangi funksiyalar oyinchi","telegram beta balans tugmasi","telegram shaxsiy qr kod sozlash","telegram sovga hamyonga otkazish","telegram yangiliklari oyinchilar uchun","jamoadoshga stars sovga qilish","telegram sovga blokcheynga chiqarish","новые функции telegram beta","кнопка баланса в профиле telegram","персональный qr-код telegram","перевод подарков в кошелек без fragment","telegram beta утечки tbetaleak"],
  locales: {
    uz: {
      title: "Telegram beta yangi funksiyalari: klanga Stars va Premium berish o‘zgaradimi?",
      metaTitle: "Telegram beta yangi funksiyalari",
      metaDescription: "Yo‘q: profildagi balans tugmasi, QR-kod sozlash va sovg‘ani Fragment’siz hamyonga chiqarish rasmiy tasdiqlanmagan, jamoadoshga Stars va Premium berish eskicha.",
      excerpt: "Yo‘q: profildagi balans tugmasi, QR-kod sozlash va sovg‘ani Fragment’siz hamyonga chiqarish rasmiy tasdiqlanmagan, jamoadoshga Stars va Premium berish eskicha.",
      answer: "Yo‘q: profildagi balans tugmasi, QR-kod sozlash va sovg‘ani Fragment’siz hamyonga chiqarish rasmiy tasdiqlanmagan, jamoadoshga Stars va Premium berish eskicha.",
      body: [
        {
          t: "h2",
          id: "klanga-stars-yoki-premium-berish",
          text: "Klanga Stars yoki Premium berish beta sabab o‘zgaradimi?",
        },
        {
          t: "p",
          text: "Yo‘q. So‘nggi paytda kanal postlarida uchta gap aylanyapti: profildagi balans tugmasi, shaxsiy QR-kodni sozlash va sovg‘ani Fragment’siz hamyonga chiqarish. Oxirgisi TBetaLeak va @villageton xabariga tayanadi. Bularning hech biri Telegram’ning o‘z e’loni emas.",
        },
        {
          t: "p",
          text: "Da’volar <a href=\"https://telegram.org/blog\" target=\"_blank\" rel=\"noopener\">Telegram blogi</a> va <a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">dasturchilar hujjatlari</a> bilan solishtirildi. Balans tugmasi, foydalanuvchi kartasi va QR-kod sozlash haqida rasmiy manba topilmadi. Sovg‘ani Fragment’siz chiqarish ham tasdiqlanmagan.",
        },
        {
          t: "p",
          text: "O‘yinchi uchun xulosa oddiy: jamoadoshga Stars, Premium yoki o‘yin valyutasini bugun qanday bersangiz, ertaga ham shunday berasiz.",
        },
        {
          t: "p",
          text: "Beta’da ko‘ringan narsa ilova kodida paydo bo‘lgan bo‘lishi mumkin. Lekin u o‘zgarishi, kechikishi yoki umuman chiqmasligi ham mumkin. Shuning uchun klan rejasini, masalan turnir sovrinini, mish-mishga qarab tuzmang.",
        },
        {
          t: "h2",
          id: "profil-balansi-qr-va-hamyonga",
          text: "Profil balansi, QR va «hamyonga chiqarish»: postdagi da’vo va hujjatdagi holat",
        },
        {
          t: "table",
          head: [
            "Mish-mish",
            "Qayerdan tarqaldi",
            "Rasmiy holat",
            "Sovg‘a berishga ta’siri",
          ],
          rows: [
            [
              "Profildagi balans tugmasi va foydalanuvchi kartasi",
              "Kanal postlari",
              "Rasmiy manba topilmadi",
              "Ta’sir yo‘q: Stars va Premium @username bo‘yicha yuboriladi",
            ],
            [
              "Shaxsiy QR-kodni sozlash",
              "Kanal postlari",
              "Rasmiy manba topilmadi",
              "Ta’sir yo‘q: oluvchini username aniqlaydi",
            ],
            [
              "Sovg‘ani Fragment’siz hamyonga chiqarish",
              "TBetaLeak, @villageton",
              "Tasdiqlanmagan; hujjatda chiqarish Fragment’da import havolasi bilan tugaydi",
              "Faqat kolleksion sovg‘a egalariga tegishli",
            ],
            [
              "Kolleksion sovg‘ani TON orqali o‘tkazish yoki auksionga qo‘yish",
              "Telegram blogi",
              "Rasmiy",
              "Klan sovg‘asi egasi uchun ochiq imkoniyat",
            ],
          ],
        },
        {
          t: "p",
          text: "Oxirgi qator ko‘pincha mish-mish bilan aralashib ketadi. Telegram blogida yozilishicha, kolleksion sovg‘alarni kolleksion username va raqamlar kabi <a href=\"https://telegram.org/blog/wear-gifts-blockchain-and-more\" target=\"_blank\" rel=\"noopener\">TON blokcheyni orqali boshqa egaga o‘tkazish yoki auksionga qo‘yish mumkin</a>. Bu beta haqidagi taxmin emas, e’lon qilingan imkoniyat.",
        },
        {
          t: "p",
          text: "Mish-mishdagi «yangilik» boshqa narsa: sovg‘ani Fragment’siz, to‘g‘ridan-to‘g‘ri hamyonga chiqarish. Rasmiy manbada aynan shu qism yo‘q.",
        },
        {
          t: "p",
          text: "QR-kod haqida ham bir eslatma. Ilovangizda profilni ulashish uchun QR bo‘lishi mumkin, lekin Stars yoki Premium sovg‘a qilishda u ishlatilmaydi. Buyurtma uchun oluvchining username’i kerak.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "jamoadoshga-nima-berasiz-va-buning",
          text: "Jamoadoshga nima berasiz va buning uchun undan nima kerak?",
        },
        {
          t: "p",
          text: "Klanda sovg‘a turlari ko‘p, lekin har biri uchun oluvchidan boshqa ma’lumot so‘raladi. GemPay misolida:",
        },
        {
          t: "table",
          head: [
            "Sovg‘a",
            "Oluvchidan nima kerak",
            "GemPay’dagi narx",
            "Qancha vaqtda tushadi",
          ],
          rows: [
            [
              "Telegram Stars",
              "@username",
              `Donasi ${som(STARS_UNIT_CARD, "uz")} (UzCard/HUMO o‘tkazmasi yoki balans) yoki ${som(STARS_UNIT_ONLINE, "uz")} (Click, Uzum Bank); bir buyurtmada 50 dan 10 000 tagacha`,
              "Bir necha soniya",
            ],
            [
              "Telegram Premium",
              "@username",
              `3 oy — ${som(premium(3), "uz")}, 6 oy — ${som(premium(6), "uz")}, 12 oy — ${som(premium(12), "uz")}`,
              "Bir necha soniyada faollashadi",
            ],
            [
              "UC, olmos, CP",
              "Player ID",
              "Botda ko‘rsatiladi",
              "1–5 daqiqa",
            ],
          ],
        },
        {
          t: "p",
          text: "Jadvaldan uchta amaliy narsa chiqadi:",
        },
        {
          t: "list",
          items: [
            "<strong>Stars o‘yin valyutasi emas.</strong> U UC, olmos yoki CP’ga aylanmaydi. Profilda balans tugmasi paydo bo‘lsa ham bu o‘zgarmaydi.",
            "<strong>Premium narxi to‘lov usuliga bog‘liq emas.</strong> 1 oylik tarif yo‘q, eng qisqasi 3 oy.",
            "<strong>Premium akkauntga kirmasdan ulanadi.</strong> U Telegram’ning rasmiy sovg‘a mexanizmi orqali username bo‘yicha ulanadi, parol so‘ralmaydi.",
          ],
        },
        {
          t: "p",
          text: "Stars xaridining tafsilotlari <a href=\"/blog/telegram-stars-sotib-olish-gempay\">Telegram Stars sotib olish qo‘llanmasida</a> yozilgan. Premium squad chatida nimaga yarashi esa <a href=\"/blog/telegram-premium-oyinchi-uchun\">Telegram Premium o‘yinchiga nima beradi</a> maqolasida.",
        },
        {
          t: "h2",
          id: "turnir-golibini-taqdirlash-hozir-ishlaydigan",
          text: "Turnir g‘olibini taqdirlash: hozir ishlaydigan 5 qadam",
        },
        {
          t: "p",
          text: "Vaziyat: klaningiz haftalik ichki turnir o‘tkazdi. Sardor g‘olibga 3 oylik Premium va biroz Stars bermoqchi. Beta funksiyalarini kutish shart emas:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "G‘olibdan @username’ini matn ko‘rinishida so‘rang. Telefon raqami, SMS-kod yoki parol kerak emas.",
            "<a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>’ni ochib, Premium yoki Stars bo‘limini tanlang.",
            "Username’ni kiriting, keyin Premium muddatini yoki Stars miqdorini belgilang.",
            "UzCard, HUMO, Click, Uzum Bank yoki bot balansi bilan to‘lang. Visa va Mastercard qabul qilinmaydi.",
            "G‘olibdan sovg‘a tushganini tasdiqlashni so‘rang. Muammo bo‘lsa, buyurtma raqami bilan <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>’ga yozing.",
          ],
        },
        {
          t: "p",
          text: "Username’ni harfma-harf tekshiring. Klanda o‘xshash niklar ko‘p, sovg‘a esa kiritilgan username egasiga boradi. Masalan, «sniper_uz» va «sniper_uz_» ikki xil odam. O‘yindagi nik ham Telegram username’i bilan bir xil bo‘lmasligi mumkin, shuning uchun uni o‘yin profilidan ko‘chirmang — jamoadoshning o‘zidan so‘rang.",
        },
        {
          t: "p",
          text: "Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi. Hisobga tushgan valyuta qaytarilmaydi.",
        },
        {
          t: "h2",
          id: "kolleksion-sovga-egasi-uchun-chiqarish",
          text: "Kolleksion sovg‘a egasi uchun: chiqarish hozir qaysi yo‘ldan o‘tadi?",
        },
        {
          t: "p",
          text: "Bu bo‘lim klan yoki turnirdan kolleksion (noyob) sovg‘a olganlar uchun. Rasmiy blog blokcheynga o‘tkazishni aynan kolleksion sovg‘alar uchun tasvirlaydi. Oddiy Stars yoki Premium uchun bu bosqich kerak emas.",
        },
        {
          t: "p",
          text: "<a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">Telegram Gifts hujjatida</a> jarayon quyidagicha tasvirlangan:",
        },
        {
          t: "list",
          items: [
            "Chiqarish joriy foydalanuvchining 2FA parolini talab qiladi.",
            "Natijada NFT’ni Fragment’da import qilish uchun havola qaytariladi. Demak, hujjatdagi yo‘lda Fragment jarayonning bir qismi.",
            "Ba’zi sovg‘alarni hali TON blokcheyniga chiqarib bo‘lmaydi. <a href=\"https://core.telegram.org/constructor/savedStarGift\" target=\"_blank\" rel=\"noopener\">Hujjatga</a> ko‘ra, egasi ularni belgilangan vaqtdan keyin chiqara oladi.",
          ],
        },
        {
          t: "p",
          text: "Menyu nomlari ilova versiyasiga qarab farq qilishi mumkin. Aniq tugmalarni o‘z ilovangizdagi sovg‘a oynasida ko‘ring.",
        },
        {
          t: "p",
          text: "Chiqarishning TON’dagi aniq narxi va kutish muddati bu maqolada tasdiqlanmagan. Summa va shartlarni ilovaning o‘zida tekshiring.",
        },
        {
          t: "p",
          text: "Fragment’ga qanday akkaunt ulanishi va hujjat so‘raladimi degan savollar <a href=\"/blog/fragment-verifikatsiyasiz-akkaunt-ulash-oyinchi\">Fragment verifikatsiyasiz</a> maqolasida ko‘rib chiqilgan. TON hamyon umuman kerakmi degan savolga <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">Telegram Wallet o‘yinchiga kerakmi</a> maqolasida javob bor.",
        },
        {
          t: "h2",
          id: "klan-sovgasini-telegramda-qoldirish-yoki",
          text: "Klan sovg‘asini Telegram’da qoldirish yoki blokcheynga chiqarish: nimani yutasiz?",
        },
        {
          t: "p",
          text: "Javob sovg‘a bilan nima qilmoqchi ekaningizga bog‘liq. Rasmiy manbalarda quyidagilar aytilgan:",
        },
        {
          t: "list",
          items: [
            "<strong>Doimiy nazorat.</strong> Blogga ko‘ra, blokcheyndagi sovg‘a egasi Telegram akkauntiga kira olmay qolsa yoki uni o‘chirsa ham, sovg‘a ustidan nazorat unda qoladi.",
            "<strong>Tashqi xizmatlar.</strong> TON hamyondagi sovg‘ani tashqi xizmatlarga, masalan auksion saytlariga ulash mumkin.",
            "<strong>Egalik hamyonda qayd etiladi.</strong> Hujjatga ko‘ra, sovg‘a Telegram profilida ko‘rsatilsa ham egalik TON hamyonda qoladi. Shuning uchun hamyonga kirish ma’lumotlarini ehtiyot qilish kerak bo‘ladi.",
            "<strong>Kolleksionga aylantirish narxi.</strong> <a href=\"https://telegram.org/blog/collectible-gifts-and-more\" target=\"_blank\" rel=\"noopener\">Telegram blogi</a> yozishicha, sovg‘ani kolleksion sovg‘aga aylantirish oz miqdordagi Stars turadi. Bu Stars blokcheyn to‘lovlarini qoplaydi.",
          ],
        },
        {
          t: "p",
          text: "Sovg‘ani faqat profilda ko‘rsatib yurmoqchi bo‘lsangiz, uni Telegram ichida qoldirish soddaroq: hamyon, 2FA va tashqi sayt bosqichi bo‘lmaydi. Sotish yoki auksion rejangiz bo‘lsa, blokcheyn yo‘li ma’noga ega bo‘ladi.",
        },
        {
          t: "p",
          text: "Sovg‘ani tashqi platformaga berganda nazorat qanday o‘zgarishi <a href=\"/blog/sovgani-marketpleysga-otkazish-xavfsizmi-oyinchi\">sovg‘ani marketpleysga o‘tkazish xavfsizmi</a> maqolasida tushuntirilgan.",
        },
        {
          t: "h2",
          id: "yangi-funksiyani-ulab-beramiz-oyin",
          text: "«Yangi funksiyani ulab beramiz»: o‘yin chatidagi takliflarga qanday qarash kerak?",
        },
        {
          t: "p",
          text: "Beta haqida gap chiqishi bilan uni «sotadiganlar» ham paydo bo‘ladi. Klan va turnir chatlarida uchraydigan takliflar:",
        },
        {
          t: "list",
          items: [
            "«Balans tugmasini akkauntingizga hozir ulab beramiz.» Rasmiy funksiya yo‘q joyda xizmat sotilmoqda.",
            "«Yangi beta’ni shu fayldan o‘rnating.» Notanish APK telefon va akkaunt uchun xavf.",
            "«QR-kodingizni noyob qilib beramiz, avval to‘lang.» Tasdiqlanmagan funksiya nomidan pul yig‘ilmoqda.",
            "«Bot orqali sovg‘angizni Fragment’siz hamyonga chiqaramiz, 2FA’ni yuboring.» Bunday yo‘l rasmiy tasdiqlanmagan.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "2FA paroli sovg‘ani o‘zingiz chiqarayotganda faqat ilovaning o‘zida kiritiladi. Uni chatga yozish akkaunt kalitini begonaga berish bilan barobar. Kod, parol yoki oldindan to‘lov so‘ralsa, suhbatni to‘xtating.",
        },
        {
          t: "p",
          text: "GemPay parol so‘ramaydi. Stars va Premium uchun username, o‘yinlar uchun Player ID yetarli. Sovg‘a atrofidagi aldov belgilari <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">o‘yin chatida giftni sotib olish taklifi</a> maqolasida batafsil yozilgan.",
        },
        {
          t: "h2",
          id: "leakni-rasmiy-elondan-ajratish-oyinchi",
          text: "Leak’ni rasmiy e’londan ajratish: o‘yinchi uchun uch savol",
        },
        {
          t: "p",
          text: "Tekshirish uchun asosiy joylar: <a href=\"https://telegram.org/blog\" target=\"_blank\" rel=\"noopener\">Telegram blogi</a> va <a href=\"https://core.telegram.org\" target=\"_blank\" rel=\"noopener\">core.telegram.org</a> hujjatlari. Kanal posti, leak yoki skrinshot faqat signal bo‘ladi, isbot emas.",
        },
        {
          t: "p",
          text: "Yangilik haqida eshitsangiz, o‘zingizga uchta savol bering:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Telegram blogida bu haqda e’lon bormi?",
            "Funksiya ilovaning oddiy, barqaror versiyasida ko‘rinyaptimi?",
            "Undan foydalanish uchun sizdan pul, kod yoki fayl o‘rnatish so‘ralyaptimi?",
          ],
        },
        {
          t: "p",
          text: "Birinchi ikkitasiga javob «yo‘q», uchinchisiga «ha» bo‘lsa, bu yangilik emas, aldov urinishi.",
        },
        {
          t: "p",
          text: "Rasmiy e’lon chiqmaguncha jamoadoshni ishlab turgan yo‘l bilan taqdirlang. Buning uchun username yoki Player ID kerak bo‘ladi, to‘lov mahalliy karta bilan qilinadi va oxirida oluvchidan sovg‘a tushganini so‘raysiz.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More",
              href: "https://telegram.org/blog/wear-gifts-blockchain-and-more",
            },
            {
              label: "Telegram Gifts",
              href: "https://core.telegram.org/api/gifts",
            },
            {
              label: "savedStarGift",
              href: "https://core.telegram.org/constructor/savedStarGift",
            },
            {
              label: "payments.StarGiftWithdrawalUrl",
              href: "https://core.telegram.org/type/payments.StarGiftWithdrawalUrl",
            },
            {
              label: "Collectible Gifts, Message Search Filters and More",
              href: "https://telegram.org/blog/collectible-gifts-and-more",
            },
            {
              label: "Translations",
              href: "https://translations.telegram.org/en/macos/unsorted/Gift.Withdraw.Text",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Profilda balans tugmasi chiqsa, Stars bilan UC yoki olmos olsa bo‘ladimi?",
          a: "Yo‘q. Stars Telegram ichidagi valyuta, u PUBG UC, MLBB olmosi yoki CP’ga aylanmaydi. Balans tugmasi chiqqan taqdirda ham o‘yin valyutasi alohida, Player ID orqali olinadi.",
        },
        {
          q: "Jamoadoshimning Telegram username’i yo‘q. Unga Premium yoki Stars olib bersam bo‘ladimi?",
          a: "GemPay’da Stars va Premium faqat @username bo‘yicha yuboriladi. Jamoadosh avval Telegram sozlamalarida o‘ziga username o‘rnatishi kerak, keyin uni sizga yuboradi.",
        },
        {
          q: "Turnirda yutgan kolleksion sovg‘ani darhol TON hamyonga chiqara olamanmi?",
          a: "Har doim ham emas. Texnik hujjatga ko‘ra, ba’zi sovg‘alarni hali chiqarib bo‘lmaydi, egasi ularni belgilangan vaqtdan keyin chiqara oladi. Holatni sovg‘a oynasida tekshiring.",
        },
        {
          q: "Sovg‘ani chiqarishda 2FA paroli so‘ralsa, bu normalmi?",
          a: "Telegram ilovasining o‘zida so‘ralsa — ha, hujjatda chiqarish 2FA parolini talab qiladi. Lekin parolni chatdagi odam, bot yoki saytga yozish mumkin emas.",
        },
        {
          q: "Klandoshning username’ini xato yozib Premium yuborib qo‘ysam nima bo‘ladi?",
          a: "Sovg‘a kiritilgan username egasiga boradi, shuning uchun to‘lovdan oldin uni tekshiring. Bunday holatda buyurtma raqami bilan @StarsPaymeeSupport’ga yozing va vaziyatni aniqlashtiring.",
        },
        {
          q: "Jamoadoshga 20–30 ta Stars sovg‘a qilsa bo‘ladimi?",
          a: "GemPay’da bir buyurtmada eng kami 50 ta, eng ko‘pi 10 000 ta Stars olinadi. Kamroq miqdor kerak bo‘lsa, 50 talik buyurtma qilishga to‘g‘ri keladi.",
        },
      ],
    },
    ru: {
      title: "Бета Telegram: какие новые функции официальны и что меняется для клана",
      metaTitle: "Бета Telegram: какие новые функции официальны",
      metaDescription: "Нет: кнопка баланса в профиле, настройка QR-кода и вывод подарка в кошелёк без Fragment официально не подтверждены.",
      excerpt: "Нет: кнопка баланса в профиле, настройка QR-кода и вывод подарка в кошелёк без Fragment официально не подтверждены. Stars и Premium соклановцу дарятся как раньше.",
      answer: "Нет: кнопка баланса в профиле, настройка QR-кода и вывод подарка в кошелёк без Fragment официально не подтверждены. Stars и Premium соклановцу дарятся как раньше.",
      body: [
        {
          t: "h2",
          id: "klanga-stars-yoki-premium-berish",
          text: "Изменит ли бета способ дарить Stars или Premium клану?",
        },
        {
          t: "p",
          text: "Нет. В каналах, которые следят за бета-версией Telegram, обсуждают три новинки: кнопку баланса в профиле, настройку личного QR-кода и вывод подарка в кошелёк без Fragment. Слух о выводе без Fragment опирается на сообщения TBetaLeak и @villageton. Ни одна из трёх новостей не анонсирована самим Telegram.",
        },
        {
          t: "p",
          text: "Мы сверили эти утверждения с <a href=\"https://telegram.org/blog\" target=\"_blank\" rel=\"noopener\">блогом Telegram</a> и <a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">документацией для разработчиков</a>. Официального источника о кнопке баланса, карточке пользователя и настройке QR-кода не нашлось. Вывод подарка без Fragment тоже не подтверждён.",
        },
        {
          t: "p",
          text: "Как вы дарите соклановцу Stars, Premium или игровую валюту сегодня, так и продолжаете дарить.",
        },
        {
          t: "p",
          text: "То, что заметили в бете, могло появиться в коде приложения. Но функция может измениться, задержаться или не выйти вовсе. Поэтому не стройте планы клана на слухах — например, не обещайте под них приз за турнир.",
        },
        {
          t: "h2",
          id: "profil-balansi-qr-va-hamyonga",
          text: "Баланс в профиле, QR и «вывод в кошелёк»: что пишут в постах и что в документации",
        },
        {
          t: "table",
          head: [
            "Слух",
            "Откуда пошёл",
            "Официальный статус",
            "Влияние на подарки",
          ],
          rows: [
            [
              "Кнопка баланса в профиле и карточка пользователя",
              "Посты в Telegram-каналах",
              "Официальный источник не найден",
              "Нет: Stars и Premium отправляются по @username",
            ],
            [
              "Настройка личного QR-кода",
              "Посты в Telegram-каналах",
              "Официальный источник не найден",
              "Нет: получателя определяет username",
            ],
            [
              "Вывод подарка в кошелёк без Fragment",
              "TBetaLeak, @villageton",
              "Не подтверждено; в документации вывод заканчивается ссылкой на импорт во Fragment",
              "Касается только владельцев коллекционных подарков",
            ],
            [
              "Передача коллекционного подарка через TON или выставление на аукцион",
              "Блог Telegram",
              "Официально, уже работает",
              "Доступно владельцу кланового коллекционного подарка",
            ],
          ],
        },
        {
          t: "p",
          text: "Последнюю строку часто путают со слухами. В блоге Telegram сказано, что коллекционные подарки, как и коллекционные username и номера, <a href=\"https://telegram.org/blog/wear-gifts-blockchain-and-more\" target=\"_blank\" rel=\"noopener\">можно передать другому владельцу или выставить на аукцион через блокчейн TON</a>. Это не бета, а действующая функция.",
        },
        {
          t: "p",
          text: "Новинка из слухов — другое: вывод напрямую в кошелёк, без Fragment. Именно этой части в официальных источниках нет.",
        },
        {
          t: "p",
          text: "QR-код для подарка Stars или Premium не нужен. Чтобы оформить заказ, достаточно username получателя.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "jamoadoshga-nima-berasiz-va-buning",
          text: "Что подарить соклановцу и что для этого от него нужно?",
        },
        {
          t: "p",
          text: "Для каждого вида подарка у получателя спрашивают свои данные. На примере GemPay:",
        },
        {
          t: "table",
          head: [
            "Подарок",
            "Что нужно от получателя",
            "Цена в GemPay",
            "Когда зачисляется",
          ],
          rows: [
            [
              "Telegram Stars",
              "@username",
              `${som(STARS_UNIT_CARD, "ru")} за штуку (перевод с UzCard/HUMO или баланс) или ${som(STARS_UNIT_ONLINE, "ru")} (Click, Uzum Bank); в одном заказе от 50 до 10 000`,
              "За несколько секунд",
            ],
            [
              "Telegram Premium",
              "@username",
              `3 месяца — ${som(premium(3), "ru")}, 6 месяцев — ${som(premium(6), "ru")}, 12 месяцев — ${som(premium(12), "ru")}`,
              "Активируется за несколько секунд",
            ],
            [
              "UC, алмазы, CP",
              "Player ID",
              "Указана в боте",
              "1–5 минут",
            ],
          ],
        },
        {
          t: "p",
          text: "Из таблицы следуют три вывода:",
        },
        {
          t: "list",
          items: [
            "<strong>Stars — не игровая валюта.</strong> Они не превращаются в UC, алмазы или CP. Слухи о кнопке баланса этого не меняют.",
            "<strong>Цена Premium не зависит от способа оплаты.</strong> Тарифа на 1 месяц нет, самый короткий — 3 месяца.",
            "<strong>Premium подключается без входа в аккаунт.</strong> Он оформляется по username через официальный механизм подарков Telegram, пароль не нужен.",
          ],
        },
        {
          t: "p",
          text: "Подробности покупки звёзд — в <a href=\"/blog/telegram-stars-sotib-olish-gempay\">инструкции по покупке Telegram Stars</a>. Чем Premium полезен в чате сквада, разобрано в статье <a href=\"/blog/telegram-premium-oyinchi-uchun\">что Telegram Premium даёт игроку</a>.",
        },
        {
          t: "h2",
          id: "turnir-golibini-taqdirlash-hozir-ishlaydigan",
          text: "Как наградить победителя турнира: 5 шагов, которые работают уже сейчас",
        },
        {
          t: "p",
          text: "Ситуация: ваш клан провёл еженедельный внутренний турнир. Лидер хочет подарить победителю Premium на 3 месяца и немного Stars. Ждать бета-функций для этого не нужно:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Попросите у победителя @username текстом. Номер телефона, СМС-код или пароль не нужны.",
            "Откройте <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> и выберите раздел Premium или Stars.",
            "Введите username, затем укажите срок Premium или количество Stars.",
            "Оплатите через UzCard, HUMO, Click, Uzum Bank или баланс бота; из России — через SBP. Visa и Mastercard не принимаются.",
            "Попросите победителя подтвердить, что подарок пришёл. Если что-то пошло не так, напишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> и укажите номер заказа.",
          ],
        },
        {
          t: "p",
          text: "Проверяйте username до последней буквы. В кланах много похожих ников, а подарок уходит владельцу того username, который вы ввели. Одно лишнее подчёркивание или цифра в конце — это уже другой человек.",
        },
        {
          t: "p",
          text: "Если заказ не выполнен, деньги полностью возвращаются в течение 3 рабочих дней. Зачисленная на счёт валюта не возвращается.",
        },
        {
          t: "h2",
          id: "kolleksion-sovga-egasi-uchun-chiqarish",
          text: "Для владельца коллекционного подарка: как сейчас устроен вывод?",
        },
        {
          t: "p",
          text: "Этот раздел — только для тех, кто получил коллекционный (уникальный) подарок от клана или за турнир. Официальный блог описывает перенос в блокчейн именно для коллекционных подарков. Обычных Stars и Premium это не касается.",
        },
        {
          t: "p",
          text: "В <a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">документации Telegram Gifts</a> процесс описан так:",
        },
        {
          t: "list",
          items: [
            "Для вывода нужен пароль 2FA текущего пользователя.",
            "В результате возвращается ссылка для импорта NFT во Fragment. То есть при нынешнем порядке Fragment — часть процесса.",
            "Некоторые подарки пока нельзя вывести в блокчейн TON. Согласно <a href=\"https://core.telegram.org/constructor/savedStarGift\" target=\"_blank\" rel=\"noopener\">документации</a>, владелец сможет сделать это после указанного времени.",
          ],
        },
        {
          t: "p",
          text: "Названия пунктов меню могут отличаться в зависимости от версии приложения. Точные кнопки смотрите в окне подарка в своём приложении.",
        },
        {
          t: "p",
          text: "Точная стоимость вывода в TON и срок ожидания в этой статье не подтверждены. Сумму и условия проверяйте в самом приложении.",
        },
        {
          t: "p",
          text: "Какой аккаунт подключается к Fragment и нужны ли документы, разобрано в статье <a href=\"/blog/fragment-verifikatsiyasiz-akkaunt-ulash-oyinchi\">Fragment без верификации</a>. Нужен ли вообще TON-кошелёк, объясняет материал <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">нужен ли игроку Telegram Wallet</a>.",
        },
        {
          t: "h2",
          id: "klan-sovgasini-telegramda-qoldirish-yoki",
          text: "Оставить клановый подарок в Telegram или вывести в блокчейн: что вы получаете?",
        },
        {
          t: "p",
          text: "Ответ зависит от того, что вы собираетесь делать с подарком. Официальные источники говорят следующее:",
        },
        {
          t: "list",
          items: [
            "<strong>Постоянный контроль.</strong> По данным блога, подарок в блокчейне остаётся под контролем владельца, даже если тот потеряет доступ к аккаунту Telegram или удалит его.",
            "<strong>Внешние сервисы.</strong> Подарок в TON-кошельке можно подключить к внешним сервисам, например к аукционным сайтам.",
            "<strong>Владение фиксируется в кошельке.</strong> Согласно документации, даже когда подарок отображается в профиле Telegram, право собственности остаётся за TON-кошельком. За доступ к кошельку отвечаете вы сами.",
            "<strong>Улучшение до коллекционного стоит Stars.</strong> Как пишет <a href=\"https://telegram.org/blog/collectible-gifts-and-more\" target=\"_blank\" rel=\"noopener\">блог Telegram</a>, превращение подарка в коллекционный стоит небольшое количество Stars. Они покрывают комиссии блокчейна.",
          ],
        },
        {
          t: "p",
          text: "Если вы хотите просто показывать подарок в профиле, проще оставить его внутри Telegram. Тогда не понадобятся кошелёк, 2FA и сторонний сайт. Если планируете продать подарок или выставить на аукцион, путь через блокчейн имеет смысл.",
        },
        {
          t: "p",
          text: "Как меняется контроль, когда отдаёшь подарок на внешнюю площадку, объяснено в статье <a href=\"/blog/sovgani-marketpleysga-otkazish-xavfsizmi-oyinchi\">безопасно ли переводить подарок на маркетплейс</a>.",
        },
        {
          t: "h2",
          id: "yangi-funksiyani-ulab-beramiz-oyin",
          text: "«Включим новую функцию»: как относиться к предложениям в игровых чатах?",
        },
        {
          t: "p",
          text: "Стоит заговорить о бете, как появляются те, кто её «продаёт». Вот что встречается в чатах кланов и турниров:",
        },
        {
          t: "list",
          items: [
            "«Подключим кнопку баланса к вашему аккаунту прямо сейчас». Продают услугу там, где официальной функции нет.",
            "«Установите новую бету из этого файла». Незнакомый APK — риск для телефона и аккаунта.",
            "«Сделаем ваш QR-код уникальным, сначала оплатите». Деньги собирают от имени неподтверждённой функции.",
            "«Выведем ваш подарок в кошелёк без Fragment через бота, пришлите 2FA». Такой способ официально не подтверждён.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Пароль 2FA вводится только в самом приложении, когда вы сами выводите подарок. Написать его в чат — всё равно что отдать постороннему ключ от аккаунта. Если просят код, пароль или предоплату, прекращайте разговор.",
        },
        {
          t: "p",
          text: "GemPay пароль не спрашивает: для Stars и Premium достаточно username, для игр — Player ID. Признаки обмана вокруг подарков подробно описаны в статье <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">предложение купить гифт в игровом чате</a>.",
        },
        {
          t: "h2",
          id: "leakni-rasmiy-elondan-ajratish-oyinchi",
          text: "Как отличить слив от официального анонса: три вопроса для игрока",
        },
        {
          t: "p",
          text: "Главные места для проверки — <a href=\"https://telegram.org/blog\" target=\"_blank\" rel=\"noopener\">блог Telegram</a> и документация <a href=\"https://core.telegram.org\" target=\"_blank\" rel=\"noopener\">core.telegram.org</a>. Пост в канале, слив или скриншот — только сигнал, а не доказательство.",
        },
        {
          t: "p",
          text: "Услышали новость — задайте себе три вопроса:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Есть ли об этом анонс в блоге Telegram?",
            "Видна ли функция в обычной, стабильной версии приложения?",
            "Просят ли у вас за неё деньги, код или установку файла?",
          ],
        },
        {
          t: "p",
          text: "Если на первые два вопроса ответ «нет», а на третий «да», перед вами не новинка, а попытка обмана.",
        },
        {
          t: "p",
          text: "Пока официального анонса нет, награждайте соклановцев проверенным способом: username или Player ID, местная карта и подтверждение от получателя.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More",
              href: "https://telegram.org/blog/wear-gifts-blockchain-and-more",
            },
            {
              label: "Telegram Gifts",
              href: "https://core.telegram.org/api/gifts",
            },
            {
              label: "savedStarGift",
              href: "https://core.telegram.org/constructor/savedStarGift",
            },
            {
              label: "payments.StarGiftWithdrawalUrl",
              href: "https://core.telegram.org/type/payments.StarGiftWithdrawalUrl",
            },
            {
              label: "Collectible Gifts, Message Search Filters and More",
              href: "https://telegram.org/blog/collectible-gifts-and-more",
            },
            {
              label: "Translations",
              href: "https://translations.telegram.org/en/macos/unsorted/Gift.Withdraw.Text",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Нужно ли ставить бета-версию Telegram, чтобы подарить другу из клана Stars?",
          a: "Нет. Stars и Premium оформляются по @username получателя, версия приложения у вас или у него на это не влияет.",
        },
        {
          q: "Можно ли потратить подаренные Stars на UC или алмазы?",
          a: "Нет, Stars не конвертируются в игровую валюту. Если соклановцу нужны UC, алмазы или CP, их покупают отдельно по его Player ID.",
        },
        {
          q: "Нужен ли пароль или код от аккаунта друга, чтобы подарить ему Premium?",
          a: "Нет. Достаточно username: Premium подключается через официальный механизм подарков Telegram без входа в чужой аккаунт.",
        },
        {
          q: "Можно ли подарить Premium всего на месяц?",
          a: "В GemPay месячного тарифа нет. Доступны сроки 3, 6 и 12 месяцев, и цена одинакова при любом способе оплаты.",
        },
        {
          q: "Что будет с коллекционным подарком, если я потеряю доступ к Telegram?",
          a: "Если подарок уже перенесён в блокчейн, по данным блога Telegram контроль над ним остаётся у владельца. Подарок, который хранится только внутри Telegram, такой защиты не получает.",
        },
        {
          q: "Почему нельзя оплатить подарок соклановцу картой Visa?",
          a: "GemPay не принимает Visa и Mastercard. Оплата идёт картами UzCard и HUMO, через Click, Uzum Bank или балансом бота, а из России — через SBP.",
        },
      ],
    },
  },
};

export default article;
