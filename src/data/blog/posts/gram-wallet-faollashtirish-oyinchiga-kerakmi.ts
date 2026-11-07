// Avtoblogyoz yasagan maqola (2026-11-07). Niyat: O‘yinchi kanal va klan chatlarida «GRAM Wallet chiqdi, 0.1 yuborib faollashtiring» degan xabarni ko‘rib, «gram wallet faollashtirish» deb qidiradi. U bu hamyon rasman ishga tushganmi, Stars, Premium yoki donat uchun kerakmi va jamoadoshga «faollashtirish uchun» Gram yuborish xavfsizmi, shuni bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://core.telegram.org/api/stars
//   https://core.telegram.org/api/gifts
//   https://telegram.org/tos/wallet

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "gram-wallet-faollashtirish-oyinchiga-kerakmi",
  game: null,
  type: "info",
  datePublished: "2026-11-07",
  dateModified: "2026-11-07",
  keywords: ["gram wallet faollashtirish","gram wallet telegram","gram hamyon qanday ochiladi","0.1 gram yuborish faollashtirish","telegram gram wallet rasmiymi","gram wallet firibgarlik","telegram stars hamyonsiz","как активировать gram wallet","gram wallet телеграм","отправить 0.1 для активации кошелька","gram кошелек телеграм развод"],
  locales: {
    uz: {
      title: "GRAM Wallet faollashtirish: o‘yinchiga kerakmi va 0.1 yuborish xavfsizmi?",
      metaTitle: "GRAM Wallet faollashtirish",
      metaDescription: "GRAM Wallet chiqqani va uni 0.1 yuborib faollashtirish rasman tasdiqlanmagan, jamoadoshga Gram yubormang. Stars, Premium va donat uchun hamyon kerak emas.",
      excerpt: "GRAM Wallet chiqqani va uni 0.1 yuborib faollashtirish rasman tasdiqlanmagan, jamoadoshga Gram yubormang. Stars, Premium va donat uchun hamyon kerak emas.",
      answer: "GRAM Wallet chiqqani va uni 0.1 yuborib faollashtirish rasman tasdiqlanmagan, jamoadoshga Gram yubormang. Stars, Premium va donat uchun hamyon kerak emas.",
      body: [
        {
          t: "h2",
          id: "gram-wallet-chiqdi-degan-xabarning",
          text: "«GRAM Wallet chiqdi» degan xabarning ortida rasmiy e’lon bormi?",
        },
        {
          t: "p",
          text: "Yo‘q. Telegram GRAM Wallet’ni ishga tushirgani haqida rasmiy e’lon topilmadi. Uni foydalanuvchilarga asta-sekin ochayotgani haqida ham rasmiy ma’lumot yo‘q. Xabar Telegram kanallaridagi postdan tarqalgan. Kanal posti esa, qanchalik ko‘p ulashilmasin, rasmiy manba hisoblanmaydi.",
        },
        {
          t: "p",
          text: "«Gram» so‘zi Telegram’ning <a href=\"https://core.telegram.org/api/stars\" target=\"_blank\" rel=\"noopener\">Stars bo‘yicha texnik hujjatida</a> reklama daromadi kontekstida uchraydi. Kanal va bot adminlari reklama daromadi tarixini va balansini nanogramlarda ko‘rishi mumkin. Bir nanogram — bir Gramning milliarddan bir qismi. Bu hisob birligi haqidagi texnik izoh, hamyon ishga tushgani haqidagi e’lon emas.",
        },
        {
          t: "p",
          text: "Faktlar 2026-yil 7-noyabr holatiga tekshirildi. Yangilik haqiqiy bo‘lsa, u <a href=\"https://telegram.org\" target=\"_blank\" rel=\"noopener\">telegram.org</a> yoki <a href=\"https://core.telegram.org\" target=\"_blank\" rel=\"noopener\">core.telegram.org</a> kabi rasmiy sahifalarda chiqadi. Shunga o‘xshab tarqalgan yana bir «hamyon» g‘oyasini <a href=\"/blog/gram-hamyon-bezash-konsepti-oyinchi\">Gram hamyon bezash konsepti</a> maqolasida tahlil qilganmiz.",
        },
        {
          t: "h2",
          id: "postdagi-tort-davo-qaysi-biri",
          text: "Postdagi to‘rt da’vo: qaysi biri tasdiqlangan?",
        },
        {
          t: "p",
          text: "Postda to‘rtta da’vo bor. Ularning holati quyidagicha:",
        },
        {
          t: "list",
          items: [
            "<strong>«Hamyon foydalanuvchilarda paydo bo‘la boshladi».</strong> Rasmiy e’lon yo‘q.",
            "<strong>«Boshqa foydalanuvchiga kamida 0.1 💎 yuborsangiz, hamyon faollashadi».</strong> Tasdiqlanmagan. Biz ko‘rgan rasmiy hujjatlarda bunday faollashtirish to‘lovi tasvirlanmagan.",
            "<strong>«Hamyon Money yorlig‘ida chiqadi».</strong> Tasdiqlanmagan.",
            "<strong>«Hozircha faqat mablag‘ yuborish va balansni to‘ldirish bor».</strong> Tasdiqlanmagan.",
          ],
        },
        {
          t: "p",
          text: "💎 belgisi aynan qaysi valyutani bildirishi va «Gram» nomi nimaga tegishli ekani ham bu maqolada tasdiqlanmagan. Shuning uchun bu haqda taxmin qilmaymiz.",
        },
        {
          t: "p",
          text: "Amaliy qoida oddiy: mavjudligi tasdiqlanmagan funksiyani «sinab ko‘rish» uchun pul o‘tkazmang. Funksiya rostdan chiqsa, uning shartlari rasmiy e’londa yoziladi, klan chatidagi xabarda emas.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "uc-olmos-stars-yoki-premium",
          text: "UC, olmos, Stars yoki Premium olish uchun GRAM Wallet kerakmi?",
        },
        {
          t: "p",
          text: "Yo‘q. O‘yinchi odatda sotib oladigan narsalarning hech biri bu hamyonga bog‘lanmagan:",
        },
        {
          t: "table",
          head: [
            "Nima olmoqchisiz",
            "Nima so‘raladi",
            "Hamyon kerakmi",
          ],
          rows: [
            [
              "PUBG Mobile UC",
              "Player ID",
              "Yo‘q",
            ],
            [
              "Mobile Legends olmosi",
              "User ID va Server ID",
              "Yo‘q",
            ],
            [
              "Free Fire olmosi",
              "Player ID",
              "Yo‘q",
            ],
            [
              "Call of Duty: Mobile CP",
              "Player ID",
              "Yo‘q",
            ],
            [
              "Telegram Stars",
              "@username",
              "Yo‘q",
            ],
            [
              "Telegram Premium",
              "@username",
              "Yo‘q",
            ],
            [
              "Telegram sovg‘asi",
              "Stars balansi",
              "Yo‘q",
            ],
          ],
        },
        {
          t: "p",
          text: "Telegram hujjatiga ko‘ra, Stars — botlar va mini ilovalarda raqamli tovar va xizmat sotib olish hamda kontent yaratuvchilarga sovg‘a yuborish uchun virtual birlik. Do‘st uchun Stars olish Telegram’ning sovg‘a variantlari orqali ishlaydi. Oddiy sovg‘a esa foydalanuvchi balansidagi Stars hisobidan sotib olinadi (<a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">Gifts hujjati</a>). Stars’ni Fragment orqali ham to‘lash mumkin, bu usulda kattaroq xarid qilsa bo‘ladi.",
        },
        {
          t: "p",
          text: "Aniqlik uchun: sovg‘a yoki Stars yuborishda GRAM Wallet kerakmi-yo‘qmi, Telegram bu haqda to‘g‘ridan-to‘g‘ri gapirmagan. Ammo hozirgi rasmiy hujjatlardagi tavsifda bu jarayonlar uchun hamyon tilga olinmaydi.",
        },
        {
          t: "p",
          text: "GemPay’da to‘lov so‘mda qilinadi: UzCard, HUMO, Click, Uzum Bank yoki bot balansi, Rossiyadan esa SBP orqali. Xorijiy karta, VPN yoki kripto kerak emas. Hamyon mavzusi batafsil: <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">Telegram Wallet o‘yinchiga kerakmi</a>.",
        },
        {
          t: "h2",
          id: "jamoadosh-hamyonimni-faollashtirish-uchun-0",
          text: "Jamoadosh «hamyonimni faollashtirish uchun 0.1 yubor» desa, yuborish xavfsizmi?",
        },
        {
          t: "p",
          text: "Yo‘q, yubormang. Faollashtirish uchun to‘lov talabi rasman tasdiqlanmagan, demak so‘rovning o‘zi shubhali.",
        },
        {
          t: "p",
          text: "Telegram 2019-yilda chiqargan <a href=\"https://telegram.org/tos/wallet\" target=\"_blank\" rel=\"noopener\">Grams Wallet shartlari</a> 2019-yil 8-oktabrda yangilangan. Unda har bir Gram tranzaksiyasi TON blokcheyni reyestrida tasdiqlanib, qayd etilishi kerakligi yozilgan. Bu shartlar bugungi kanal xabaridagi hamyonga tegishli ekani tasdiqlanmagan. Ammo xulosa bitta: o‘tkazmani qaytarib olishning rasmiy yo‘li manbalarda tasvirlanmagan. Yuborilgan summani «bekor qilish» tugmasiga umid qilmang.",
        },
        {
          t: "p",
          text: "O‘sha shartlarda yana bir muhim gap bor: foydalanuvchi kirish ma’lumotlarini yo‘qotsa, Telegram ularni tiklay olmaydi. Shuning uchun seed-fraza, Telegram kodi yoki parolni hech kimga bermang. Bu jamoadoshga ham, o‘zini «admin» deb tanishtirgan odamga ham tegishli.",
        },
        {
          t: "note",
          tone: "info",
          text: "Klan chatidagi tipik sxemalar: buzilgan jamoadosh akkauntidan «tez 0.1 yubor, keyin qaytaraman» xabari; «faollashtirish» havolasi ochilgach Telegram kodini so‘rash; «sen bitta yuborsang, men ikki baravar qaytaraman» degan va’da.",
        },
        {
          t: "p",
          text: "O‘yin chatidagi boshqa aldov shakllari haqida: <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">gift sotib olish taklifi va firibgarlik belgilari</a>.",
        },
        {
          t: "h2",
          id: "chatda-gram-wallet-faollashtiring-xabari",
          text: "Chatda «GRAM Wallet faollashtiring» xabari kelsa, nima qilish kerak?",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Havolani ochmang va hech qanday summa yubormang, hatto «atigi 0.1» bo‘lsa ham.",
            "Xabarni jamoadosh rostdan o‘zi yuborganini aniqlang. Unga boshqa yo‘l bilan yozing: ovozli chatda yoki o‘yin ichidagi xabarda. Uning akkaunti buzilgan bo‘lishi mumkin.",
            "Yangilikni faqat rasmiy manbada qidiring: telegram.org yoki core.telegram.org. Skrinshot va kanal posti tasdiq hisoblanmaydi.",
            "O‘z akkauntingizni tekshiring: faol seanslar ro‘yxatida notanish qurilmalarni yoping va ikki bosqichli tekshiruvni yoqing.",
            "Xabar spam bo‘lsa, «Report spam» qiling va klan adminiga ayting. Bunday holatda Telegram akkauntni qanday cheklashi haqida: <a href=\"/blog/klan-chatida-shubhali-havola-spam-cheklov\">klan chatidagi shubhali havola</a>.",
          ],
        },
        {
          t: "h2",
          id: "0-1-yuborib-boldim-endi",
          text: "0.1 yuborib bo‘ldim — endi nima qilaman?",
        },
        {
          t: "p",
          text: "Tashvishlanmang, lekin vaqtni ham yo‘qotmang. Birinchi navbatda keyingi zararning oldini olish kerak:",
        },
        {
          t: "list",
          items: [
            "<strong>Qo‘shimcha to‘lamang.</strong> «Faollashmadi, yana 0.5 yubor» yoki «qaytarish uchun komissiya to‘la» degan so‘rov — aldovning ikkinchi bosqichi.",
            "<strong>Havolani ochgan bo‘lsangiz,</strong> faol seanslarni tekshiring va notanish qurilmalarni chiqarib yuboring.",
            "<strong>Kod yoki parolni kiritgan bo‘lsangiz,</strong> parolni darhol almashtiring va ikki bosqichli tekshiruvni yoqing.",
            "<strong>Klanni ogohlantiring.</strong> Firibgar odatda bitta buzilgan akkaunt orqali butun chatga yozadi.",
            "<strong>«Pulni qaytarib beraman» degan yordamchilarga ishonmang.</strong> Ular ham odatda oldindan to‘lov yoki kod so‘raydi.",
          ],
        },
        {
          t: "p",
          text: "Yuborilgan summani faqat oluvchi o‘z xohishi bilan qaytarishi mumkin. Shu sababli bunday so‘rovlarni oldindan rad etish ancha oson.",
        },
        {
          t: "h2",
          id: "turnir-golibi-yoki-tugilgan-kun",
          text: "Turnir g‘olibi yoki tug‘ilgan kun: jamoadoshga nima berish mumkin?",
        },
        {
          t: "p",
          text: "Jamoadosh turnirda yutdimi yoki tug‘ilgan kunimi — uni sovg‘alash uchun hech qanday hamyonni «faollashtirish» kerak emas:",
        },
        {
          t: "list",
          items: [
            `<strong>Stars.</strong> GemPay’da faqat jamoadoshning @username’i kiritiladi. Bir buyurtmada 50 dan 10 000 tagacha olish mumkin. 1 ta Stars narxi karta o‘tkazmasi yoki bot balansi bilan ${som(STARS_UNIT_CARD, "uz")}, Click yoki Uzum Bank bilan ${som(STARS_UNIT_ONLINE, "uz")}. Yulduzlar bir necha soniyada tushadi. Qadamlar: <a href="/blog/telegram-stars-sotib-olish-gempay">GemPay’da Stars sotib olish</a>.`,
            `<strong>Premium.</strong> 3 oy — ${som(premium(3), "uz")}, 6 oy — ${som(premium(6), "uz")}, 12 oy — ${som(premium(12), "uz")}. Narx barcha to‘lov usulida bir xil, 1 oylik tarif yo‘q. Obuna @username bo‘yicha Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi, akkauntga kirilmaydi.`,
            "<strong>Telegram sovg‘asi.</strong> U Stars balansidan olinadi. Oluvchi sovg‘ani profilida ko‘rsatishi yoki Stars’ga aylantirishi mumkin.",
            "<strong>UC, olmos, CP.</strong> Stars o‘yin valyutasiga aylanmaydi. Jamoadoshga donat kerak bo‘lsa, hisob uning Player ID’si bo‘yicha to‘ldiriladi. Valyuta 1–5 daqiqada avtomatik tushadi.",
          ],
        },
        {
          t: "p",
          text: "Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi. Hisobga tushgan valyuta esa qaytarilmaydi. Shuning uchun username yoki ID’ni to‘lovdan oldin qayta tekshiring.",
        },
        {
          t: "h2",
          id: "hamyon-rostdan-chiqsa-oyinchi-nimaga",
          text: "Hamyon rostdan chiqsa, o‘yinchi nimaga qarashi kerak?",
        },
        {
          t: "p",
          text: "Rasmiy e’lon chiqsa ham, «hech narsa o‘zgarmaydi» deb oldindan aytib bo‘lmaydi. Aniq javobni e’londagi shartlar beradi. Tekshiruv ro‘yxati:",
        },
        {
          t: "list",
          items: [
            "E’lon rasmiy domendami — telegram.org yoki core.telegram.org?",
            "Funksiya ilova menyusida o‘zi paydo bo‘ldimi yoki kimdir «yoqib beraman» deyaptimi? Ikkinchisi — xavf belgisi.",
            "Sizdan kod, parol yoki seed-fraza so‘ralyaptimi? Bunday ma’lumotni hech kimga bermang.",
            "Faollashtirish uchun begonaga pul yuborish talab qilinyaptimi? Rasmiy shartlarda yozilmagan bo‘lsa, yubormang.",
          ],
        },
        {
          t: "p",
          text: "Beta versiyadagi mish-mishlarni rasmiy yangilikdan ajratish uchun: <a href=\"/blog/telegram-beta-balans-qr-kod-oyinchi\">Telegram beta yangi funksiyalari va klanga Stars berish</a>.",
        },
        {
          t: "p",
          text: "GemPay mustaqil xizmat va Telegram bilan rasmiy aloqa da’vo qilmaydi. Bugun ham Stars va Premium uchun @username, donat uchun Player ID yetarli, hamyon kerak emas.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Telegram Stars",
              href: "https://core.telegram.org/api/stars",
            },
            {
              label: "Telegram Gifts",
              href: "https://core.telegram.org/api/gifts",
            },
            {
              label: "Grams Wallet",
              href: "https://telegram.org/tos/wallet",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Klan chatida hamma GRAM Wallet haqida gapiryapti, men bir narsani o‘tkazib yubordimmi?",
          a: "Yo‘q. Hamyon chiqqani haqida rasmiy e’lon topilmagan, shuning uchun sozlamalarda hech narsani «yoqish» shart emas. Do‘stingiz ko‘rsatgan skrinshot ham tasdiq emas.",
        },
        {
          q: "Jamoadoshga 0.1 yuborgandim, hamyon chiqmadi. Pulni qaytarsa bo‘ladimi?",
          a: "Bunday o‘tkazmani qaytarishning rasmiy yo‘li manbalarda tasvirlanmagan, faqat oluvchi o‘z xohishi bilan qaytarishi mumkin. «Qaytarib beraman» deb yana to‘lov yoki kod so‘raganlarga javob bermang.",
        },
        {
          q: "GemPay’dan olgan Stars yoki Premium qandaydir hamyonga tushadimi?",
          a: "Yo‘q. Stars buyurtmada ko‘rsatilgan @username egasining Telegram akkauntiga tushadi. Premium esa Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi.",
        },
        {
          q: "UC yoki MLBB olmosini Gram yoki TON bilan to‘lay olamanmi?",
          a: "GemPay’da kripto qabul qilinmaydi: UzCard, HUMO, Click, Uzum Bank, bot balansi yoki Rossiyadan SBP ishlaydi. Donat uchun o‘yindagi ID kifoya.",
        },
        {
          q: "Kanal adminiman: reklama daromadimdagi Gram shu hamyonga bog‘liqmi?",
          a: "Telegram hujjatida reklama daromadi nanogramlarda ko‘rsatilishi aytilgan. Biroq kanallarda tarqalayotgan GRAM Wallet bilan bog‘liqligi rasman tasdiqlanmagan.",
        },
        {
          q: "«Faollashtirish» havolasidan keyin Telegram kodi so‘ralsa-chi?",
          a: "Kodni hech kimga kiritmang va yubormang. Bu kod akkauntingizga kirish uchun ishlatiladi. Jamoadoshingizga boshqa yo‘l bilan bog‘laning: uning akkaunti buzilgan bo‘lishi mumkin.",
        },
      ],
    },
    ru: {
      title: "Активация GRAM Wallet: нужна ли игроку и безопасно ли отправлять 0.1?",
      metaTitle: "Активация GRAM Wallet: нужна ли игроку",
      metaDescription: "Запуск GRAM Wallet и его активация переводом 0.1 официально не подтверждены — не отправляйте Gram тиммейту. Для Stars, Premium и доната кошелёк не нужен.",
      excerpt: "Запуск GRAM Wallet и его активация переводом 0.1 официально не подтверждены — не отправляйте Gram тиммейту. Для Stars, Premium и доната кошелёк не нужен.",
      answer: "Запуск GRAM Wallet и его активация переводом 0.1 официально не подтверждены — не отправляйте Gram тиммейту. Для Stars, Premium и доната кошелёк не нужен.",
      body: [
        {
          t: "h2",
          id: "gram-wallet-chiqdi-degan-xabarning",
          text: "Есть ли официальное объявление за новостью «вышел GRAM Wallet»?",
        },
        {
          t: "p",
          text: "Нет. Официального объявления о запуске GRAM Wallet от Telegram найти не удалось. Нет и официальных данных о том, что кошелёк постепенно открывают пользователям. Новость разошлась из поста в Telegram-каналах. А пост в канале не считается официальным источником, сколько бы раз его ни репостнули.",
        },
        {
          t: "p",
          text: "Слово «Gram» встречается в <a href=\"https://core.telegram.org/api/stars\" target=\"_blank\" rel=\"noopener\">технической документации Telegram по Stars</a> в контексте доходов от рекламы. Админы каналов и ботов могут смотреть историю и баланс рекламного дохода в нанограммах. Один нанограмм — это одна миллиардная часть Gram. Это техническое пояснение о единице учёта, а не объявление о запуске кошелька.",
        },
        {
          t: "p",
          text: "Факты проверены по состоянию на 7 ноября 2026 года. Если новость настоящая, она появится на официальных страницах — <a href=\"https://telegram.org\" target=\"_blank\" rel=\"noopener\">telegram.org</a> или <a href=\"https://core.telegram.org\" target=\"_blank\" rel=\"noopener\">core.telegram.org</a>. Похожую «кошельковую» идею, которая разошлась тем же путём, мы разбирали в статье о <a href=\"/blog/gram-hamyon-bezash-konsepti-oyinchi\">концепте украшения Gram-кошелька</a>.",
        },
        {
          t: "h2",
          id: "postdagi-tort-davo-qaysi-biri",
          text: "Четыре утверждения из поста: что из этого подтверждено?",
        },
        {
          t: "p",
          text: "В посте четыре утверждения. Вот их статус:",
        },
        {
          t: "list",
          items: [
            "<strong>«Кошелёк начал появляться у пользователей».</strong> Официального объявления нет.",
            "<strong>«Отправьте другому пользователю минимум 0.1 💎 — и кошелёк активируется».</strong> Не подтверждено. В официальных документах, которые мы видели, такой платы за активацию нет.",
            "<strong>«Кошелёк появится во вкладке Money».</strong> Не подтверждено.",
            "<strong>«Пока доступны только отправка средств и пополнение баланса».</strong> Не подтверждено.",
          ],
        },
        {
          t: "p",
          text: "Какую именно валюту обозначает значок 💎 и к чему относится название «Gram», в этой статье тоже не подтверждено. Поэтому гадать на эту тему не будем.",
        },
        {
          t: "p",
          text: "Практическое правило простое: не переводите деньги, чтобы «попробовать» функцию, существование которой не подтверждено. Если функция действительно выйдет, её условия будут написаны в официальном объявлении, а не в сообщении в чате клана.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "uc-olmos-stars-yoki-premium",
          text: "Нужен ли GRAM Wallet, чтобы купить UC, алмазы, Stars или Premium?",
        },
        {
          t: "p",
          text: "Нет. Ничто из того, что обычно покупает игрок, к этому кошельку не привязано:",
        },
        {
          t: "table",
          head: [
            "Что хотите купить",
            "Что нужно указать",
            "Нужен ли кошелёк",
          ],
          rows: [
            [
              "UC для PUBG Mobile",
              "Player ID",
              "Нет",
            ],
            [
              "Алмазы Mobile Legends",
              "User ID и Server ID",
              "Нет",
            ],
            [
              "Алмазы Free Fire",
              "Player ID",
              "Нет",
            ],
            [
              "CP для Call of Duty: Mobile",
              "Player ID",
              "Нет",
            ],
            [
              "Telegram Stars",
              "@username",
              "Нет",
            ],
            [
              "Telegram Premium",
              "@username",
              "Нет",
            ],
            [
              "Подарок в Telegram",
              "Баланс Stars",
              "Нет",
            ],
          ],
        },
        {
          t: "p",
          text: "По документации Telegram, Stars — это виртуальная единица для покупки цифровых товаров и услуг в ботах и мини-приложениях, а также для подарков авторам контента. Покупка Stars для друга работает через варианты подарков Telegram. Обычный подарок покупается за Stars с баланса пользователя (<a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">документация по Gifts</a>). Stars можно оплатить и через Fragment — так получаются более крупные покупки.",
        },
        {
          t: "p",
          text: "Для точности: нужен ли GRAM Wallet для отправки подарков или Stars, Telegram прямо не говорил. Но в описании этих процессов в текущих официальных документах кошелёк не упоминается.",
        },
        {
          t: "p",
          text: "В GemPay оплата идёт в сумах: UzCard, HUMO, Click, Uzum Bank или баланс бота, а из России — через СБП. Зарубежная карта, VPN или крипта не нужны. Подробнее о кошельках: <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">нужен ли игроку Telegram Wallet</a>.",
        },
        {
          t: "h2",
          id: "jamoadosh-hamyonimni-faollashtirish-uchun-0",
          text: "Тиммейт просит «скинь 0.1, чтобы активировать мой кошелёк» — безопасно ли отправлять?",
        },
        {
          t: "p",
          text: "Нет, не отправляйте. Плата за активацию официально не подтверждена, а значит, подозрительна уже сама просьба.",
        },
        {
          t: "p",
          text: "<a href=\"https://telegram.org/tos/wallet\" target=\"_blank\" rel=\"noopener\">Условия Grams Wallet</a>, которые Telegram выпустил в 2019 году, обновлялись 8 октября 2019 года. В них сказано, что каждая транзакция с Gram должна подтверждаться и записываться в реестр блокчейна TON. Что эти условия относятся к кошельку из сегодняшней новости в канале, не подтверждено. Но вывод один: официального способа вернуть перевод в источниках не описано. Не рассчитывайте на кнопку «отменить» для отправленной суммы.",
        },
        {
          t: "p",
          text: "В тех же условиях есть ещё одна важная деталь: если пользователь потеряет данные для входа, Telegram не сможет их восстановить. Поэтому никому не сообщайте сид-фразу, код из Telegram или пароль. Это касается и тиммейта, и человека, который представился «админом».",
        },
        {
          t: "note",
          tone: "info",
          text: "Типичные схемы в чате клана: сообщение «скинь быстро 0.1, потом верну» со взломанного аккаунта тиммейта; ссылка «на активацию», после которой просят код из Telegram; обещание «отправишь одну — верну в два раза больше».",
        },
        {
          t: "p",
          text: "О других видах обмана в игровых чатах: <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">предложение купить гифт и признаки мошенничества</a>.",
        },
        {
          t: "h2",
          id: "chatda-gram-wallet-faollashtiring-xabari",
          text: "Что делать, если в чат пришло «активируйте GRAM Wallet»?",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Не открывайте ссылку и не отправляйте никаких сумм, даже если это «всего 0.1».",
            "Убедитесь, что сообщение действительно написал тиммейт. Свяжитесь с ним другим способом: в голосовом чате или через сообщения в игре. Его аккаунт мог быть взломан.",
            "Ищите новость только в официальных источниках: telegram.org или core.telegram.org. Скриншот и пост в канале подтверждением не считаются.",
            "Проверьте свой аккаунт: закройте незнакомые устройства в списке активных сеансов и включите двухэтапную аутентификацию.",
            "Если это спам, нажмите «Report spam» и сообщите админу клана. Как в таком случае Telegram может ограничить аккаунт, читайте в статье о <a href=\"/blog/klan-chatida-shubhali-havola-spam-cheklov\">подозрительной ссылке в чате клана</a>.",
          ],
        },
        {
          t: "h2",
          id: "0-1-yuborib-boldim-endi",
          text: "Я уже отправил 0.1 — что теперь делать?",
        },
        {
          t: "p",
          text: "Без паники, но и время не теряйте. Главное сейчас — не допустить нового ущерба:",
        },
        {
          t: "list",
          items: [
            "<strong>Не доплачивайте.</strong> Просьбы «не активировалось, скинь ещё 0.5» или «оплати комиссию за возврат» — это второй этап обмана.",
            "<strong>Если открыли ссылку,</strong> проверьте активные сеансы и завершите незнакомые устройства.",
            "<strong>Если ввели код или пароль,</strong> сразу смените пароль и включите двухэтапную аутентификацию.",
            "<strong>Предупредите клан.</strong> Мошенник обычно пишет всему чату через один взломанный аккаунт.",
            "<strong>Не верьте «помощникам», которые обещают вернуть деньги.</strong> Они тоже, как правило, просят предоплату или код.",
          ],
        },
        {
          t: "p",
          text: "Отправленную сумму может вернуть только получатель — и только по своему желанию. Поэтому отказать в таких просьбах заранее гораздо проще.",
        },
        {
          t: "h2",
          id: "turnir-golibi-yoki-tugilgan-kun",
          text: "Победа в турнире или день рождения: что можно подарить тиммейту?",
        },
        {
          t: "p",
          text: "Тиммейт выиграл турнир или у него день рождения — чтобы его поздравить, не нужно «активировать» никакой кошелёк:",
        },
        {
          t: "list",
          items: [
            `<strong>Stars.</strong> В GemPay указывается только @username тиммейта. В одном заказе — от 50 до 10 000 штук. Цена 1 Stars при переводе с карты или с баланса бота — ${som(STARS_UNIT_CARD, "ru")}, через Click или Uzum Bank — ${som(STARS_UNIT_ONLINE, "ru")}. Звёзды приходят за несколько секунд. Пошагово: <a href="/blog/telegram-stars-sotib-olish-gempay">как купить Stars в GemPay</a>.`,
            `<strong>Premium.</strong> 3 месяца — ${som(premium(3), "ru")}, 6 месяцев — ${som(premium(6), "ru")}, 12 месяцев — ${som(premium(12), "ru")}. Цена одинаковая при любом способе оплаты, тарифа на 1 месяц нет. Подписка подключается по @username через официальный механизм подарков Telegram, вход в аккаунт не нужен.`,
            "<strong>Подарок в Telegram.</strong> Покупается за Stars с баланса. Получатель может показать подарок в профиле или превратить его в Stars.",
            "<strong>UC, алмазы, CP.</strong> Stars не превращаются в игровую валюту. Если тиммейту нужен донат, счёт пополняется по его Player ID. Валюта зачисляется автоматически за 1–5 минут.",
          ],
        },
        {
          t: "p",
          text: "Если заказ не выполнен, деньги полностью возвращаются в течение 3 рабочих дней. Зачисленная на счёт валюта не возвращается. Поэтому перед оплатой ещё раз проверьте username или ID.",
        },
        {
          t: "h2",
          id: "hamyon-rostdan-chiqsa-oyinchi-nimaga",
          text: "Если кошелёк всё-таки выйдет — на что смотреть игроку?",
        },
        {
          t: "p",
          text: "Даже если выйдет официальное объявление, заранее сказать «ничего не изменится» нельзя. Точный ответ дадут условия в самом объявлении. Чек-лист:",
        },
        {
          t: "list",
          items: [
            "Объявление на официальном домене — telegram.org или core.telegram.org?",
            "Функция сама появилась в меню приложения или кто-то предлагает «включить» её за вас? Второе — тревожный знак.",
            "У вас просят код, пароль или сид-фразу? Такие данные не сообщайте никому.",
            "Для активации требуют отправить деньги постороннему? Если этого нет в официальных условиях — не отправляйте.",
          ],
        },
        {
          t: "p",
          text: "Как отличить слухи о бета-версии от официальных новостей: <a href=\"/blog/telegram-beta-balans-qr-kod-oyinchi\">новые функции Telegram beta и Stars для клана</a>.",
        },
        {
          t: "p",
          text: "GemPay — независимый сервис и не заявляет об официальной связи с Telegram. И сегодня для Stars и Premium достаточно @username, для доната — Player ID, кошелёк не нужен.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Telegram Stars",
              href: "https://core.telegram.org/api/stars",
            },
            {
              label: "Telegram Gifts",
              href: "https://core.telegram.org/api/gifts",
            },
            {
              label: "Grams Wallet",
              href: "https://telegram.org/tos/wallet",
            },
          ],
        },
      ],
      faq: [
        {
          q: "В чате клана все обсуждают GRAM Wallet — я что-то пропустил?",
          a: "Нет. Официального объявления о выходе кошелька нет, так что ничего «включать» в настройках не нужно. Скриншот от друга тоже не подтверждение.",
        },
        {
          q: "Я отправил тиммейту 0.1, а кошелёк так и не появился. Можно вернуть деньги?",
          a: "Официального способа вернуть такой перевод в источниках не описано — вернуть может только получатель, если захочет сам. Не отвечайте тем, кто обещает «вернуть» и просит ещё оплату или код.",
        },
        {
          q: "Stars или Premium из GemPay попадают в какой-то кошелёк?",
          a: "Нет. Stars зачисляются в Telegram-аккаунт владельца @username, указанного в заказе. Premium подключается через официальный механизм подарков Telegram.",
        },
        {
          q: "Можно оплатить UC или алмазы MLBB в Gram или TON?",
          a: "Криптовалюту GemPay не принимает: работают UzCard, HUMO, Click, Uzum Bank, баланс бота или СБП из России. Для доната достаточно игрового ID.",
        },
        {
          q: "Я админ канала: Gram в моём рекламном доходе связан с этим кошельком?",
          a: "В документации Telegram сказано, что рекламный доход отображается в нанограммах. Но связь с GRAM Wallet, о котором пишут в каналах, официально не подтверждена.",
        },
        {
          q: "А если после ссылки «на активацию» просят код из Telegram?",
          a: "Никуда его не вводите и никому не отправляйте: этим кодом входят в ваш аккаунт. Свяжитесь с тиммейтом другим способом — его аккаунт мог быть взломан.",
        },
      ],
    },
  },
};

export default article;
