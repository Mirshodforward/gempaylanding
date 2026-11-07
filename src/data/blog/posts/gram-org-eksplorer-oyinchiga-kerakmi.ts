// Avtoblogyoz yasagan maqola (2026-11-07). Niyat: Telegram orqali Stars, Premium yoki UC sotib oladigan o‘zbek o‘yinchisi «gram.org eksplorer o‘yinchiga kerakmi, xaridimni unda ko‘ramanmi» deb qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://docs.ton.org/onboarding/explorers
//   https://ton.org/

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "gram-org-eksplorer-oyinchiga-kerakmi",
  game: null,
  type: "info",
  datePublished: "2026-11-07",
  dateModified: "2026-11-07",
  keywords: ["gram.org eksplorer o‘yinchiga kerakmi","gram.org eksplorer","TON eksplorer o‘yinchi","Stars xaridini eksplorerda tekshirish","Premium xaridi blokcheynda ko‘rinadimi","UC xaridini tekshirish","Gram Toncoin o‘yinchi","gram.org эксплорер","обозреватель TON gram.org","проверить покупку Stars в эксплорере","Toncoin Gram ребрендинг","нужен ли кошелек TON для Stars"],
  locales: {
    uz: {
      title: "gram.org eksplorer o‘yinchiga kerakmi: Stars va UC xaridi ko‘rinadimi?",
      metaTitle: "gram.org eksplorer o‘yinchiga kerakmi",
      metaDescription: "Yo‘q: Stars, Premium va UC so‘mda karta, Click yoki Uzum Bank bilan olinsa, hamyoningizdan tranzaksiya chiqmaydi. Ular Telegram va o‘yinda tekshiriladi.",
      excerpt: "Yo‘q: Stars, Premium va UC so‘mda karta, Click yoki Uzum Bank bilan olinsa, hamyoningizdan tranzaksiya chiqmaydi. Ular Telegram va o‘yinda tekshiriladi.",
      answer: "Yo‘q: Stars, Premium va UC so‘mda karta, Click yoki Uzum Bank bilan olinsa, hamyoningizdan tranzaksiya chiqmaydi. Ular Telegram va o‘yinda tekshiriladi.",
      body: [
        {
          t: "h2",
          id: "gram-org-eksplorer-oyinchiga-kerakmi",
          text: "gram.org eksplorer o‘yinchiga kerakmi?",
        },
        {
          t: "p",
          text: "Stars, Premium yoki UC’ni so‘mda olsangiz, eksplorer sizga kerak emas. To‘lov UzCard, HUMO, Click, Uzum Bank yoki bot balansi orqali o‘tadi. Bunday xaridda sizning kripto hamyoningizdan hech qanday tranzaksiya chiqmaydi.",
        },
        {
          t: "p",
          text: "Eksplorer esa blokcheyndagi manzil va tranzaksiyalarni ko‘rsatadigan sayt. Sizda hamyon manzili ham, tranzaksiya xeshi ham bo‘lmagani uchun qidiradigan narsangiz yo‘q. Natija bo‘sh chiqsa, bu xato emas va xaridingiz yo‘qolgani ham emas.",
        },
        {
          t: "p",
          text: "Eksplorer faqat bitta holatda foydali bo‘ladi: o‘zingiz Gram hamyonidan pul yuborgan yoki shu hamyon bilan biror narsa to‘lagan bo‘lsangiz. Gram — TON tangasi, u Toncoin nomi bilan ham tanilgan. Hamyonning o‘zi o‘yinchiga kerakmi, degan savolga alohida javob bor: <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">Telegram Wallet o‘yinchiga kerakmi</a>.",
        },
        {
          t: "h2",
          id: "gram-org-haqida-nima-aniq",
          text: "gram.org haqida nima aniq, nima faqat kanal posti?",
        },
        {
          t: "p",
          text: "Mavzu Telegram kanalidagi postdan chiqqan. Postda gram.org TON tarmog‘ining rasmiy eksploreri deb ataladi. Kanal posti rasmiy manba emas, shuning uchun undagi da’volarni fakt sifatida olmaymiz.",
        },
        {
          t: "p",
          text: "TON’ning rasmiy hujjatlarida boshqacha yozilgan. <a href=\"https://docs.ton.org/onboarding/explorers\" target=\"_blank\" rel=\"noopener\">TON eksplorerlar sahifasida</a> rasmiy ochiq kodli eksplorer sifatida Actonscan nomlangan. U smart-kontrakt ishlab chiquvchilari uchun ekani ham ko‘rsatilgan. gram.org bu sahifada tilga olinmagan.",
        },
        {
          t: "note",
          tone: "warn",
          text: "gram.org kimga tegishli ekani, qachon ishga tushgani va unda qaysi bo‘limlar borligi bu maqolada tasdiqlanmagan. Unga hamyon ulash yoki biror ma’lumot kiritishdan oldin ehtiyot bo‘ling.",
        },
        {
          t: "p",
          text: "O‘yinchi uchun xulosa oddiy. Sayt rasmiy bo‘ladimi yoki yo‘qmi, so‘mda qilingan donat va Telegram xaridlaringizga bu ta’sir qilmaydi.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "ton-eksplorer-umuman-nimani-korsatadi",
          text: "TON eksplorer umuman nimani ko‘rsatadi?",
        },
        {
          t: "p",
          text: "TON hujjatlariga ko‘ra, eksplorerlarda quyidagilar ko‘rinadi:",
        },
        {
          t: "list",
          items: [
            "manzillar (hisoblar) balansi;",
            "Gram va token o‘tkazmalari;",
            "smart-kontrakt kodi va xotirasi;",
            "tranzaksiyalar va ular orasidagi xabarlar.",
          ],
        },
        {
          t: "p",
          text: "Ba’zi eksplorerlar tarmoq ko‘rsatkichlarini ham chiqaradi. Bularga masterchain va shardchain bloklari, validator faolligi, tranzaksiya hajmi, gaz sarfi va komissiyalar kiradi.",
        },
        {
          t: "p",
          text: "Ma’lumot TON Center’ning API v2 va API v3 interfeyslari orqali olinadi. Demak, eksplorer faqat blokcheynga tushgan yozuvni ko‘radi. Telegram’dagi Stars balansingiz, Premium muddatingiz yoki PUBG’dagi UC hisobingiz bunday yozuvlar qatoriga kirmaydi. Ular Telegram va o‘yin hisobingizda turadi, tekshiruv ham o‘sha yerda bo‘ladi.",
        },
        {
          t: "h2",
          id: "qaysi-xarid-eksplorerda-korinadi-qaysi",
          text: "Qaysi xarid eksplorerda ko‘rinadi, qaysi biri yo‘q?",
        },
        {
          t: "p",
          text: "Jadvalda o‘yinchi odatda qiladigan xaridlar ajratilgan.",
        },
        {
          t: "table",
          head: [
            "Xarid",
            "Qanday to‘lanadi",
            "Hamyoningizdan tranzaksiya bormi",
            "Qayerda tekshiriladi",
          ],
          rows: [
            [
              "Stars (GemPay)",
              `So‘mda, @username bo‘yicha: 1 ta Stars — ${som(STARS_UNIT_CARD, "uz")} karta yoki balansdan, ${som(STARS_UNIT_ONLINE, "uz")} Click yoki Uzum Bank orqali`,
              "Yo‘q",
              "Telegram’dagi Stars balansi",
            ],
            [
              "Premium (GemPay)",
              `So‘mda: 3 oy — ${som(premium(3), "uz")}, 6 oy — ${som(premium(6), "uz")}, 12 oy — ${som(premium(12), "uz")}; Telegram sovg‘a mexanizmi orqali`,
              "Yo‘q",
              "Profildagi Premium holati",
            ],
            [
              "UC, olmos, CP (GemPay)",
              "So‘mda, Player ID bo‘yicha",
              "Yo‘q",
              "O‘yin ichidagi balans",
            ],
            [
              "Premium’ni o‘zingiz kripto hamyon orqali olish",
              "Kripto hamyondan",
              "Ha",
              "Hamyon tarixi, eksplorer va profil",
            ],
            [
              "Jamoadoshga Gram yuborish",
              "Gram hamyonidan",
              "Ha",
              "Hamyon tarixi va eksplorer",
            ],
          ],
        },
        {
          t: "p",
          text: "TON sayti kriptohamyon orqali o‘zingiz yoki do‘stlaringiz uchun Telegram Premium olish mumkinligini yozadi. Shu yo‘lni tanlasangiz, hamyondan chiqqan to‘lov blokcheynda qoladi.",
        },
        {
          t: "p",
          text: "Telegram ichidagi Gram Wallet ham shu toifaga kiradi. Bu Telegram jamoasining messenjer interfeysiga o‘rnatilgan, kastodial bo‘lmagan hamyoni. Undan qilingan o‘tkazmalar blokcheynga yoziladi. ton.org ma’lumotiga ko‘ra, Gram o‘tkazmasi taxminan 0,00039 Gram turadi.",
        },
        {
          t: "p",
          text: "GemPay’da jamoadoshingizning @username’ini kiritsangiz, Stars yoki Premium unga yetadi. Lekin bu ham so‘mdagi to‘lov, sizning hamyoningizdan hech narsa chiqmaydi. Shuning uchun eksplorerda qidiradigan yozuvingiz bo‘lmaydi.",
        },
        {
          t: "h2",
          id: "gempay-orqali-olingan-stars-premium",
          text: "GemPay orqali olingan Stars, Premium yoki UC qayerda tekshiriladi?",
        },
        {
          t: "p",
          text: "So‘mdagi xaridni tekshirish uchun blokcheyn kerak emas. Quyidagi tartibda qarang:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "<a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>’da buyurtma holati va raqamini ko‘ring.",
            "Stars bo‘lsa, Telegram’dagi Stars balansini oching. Yulduzlar odatda bir necha soniyada tushadi.",
            "Premium bo‘lsa, @username egasi o‘z profilida Premium belgisi va sovg‘a xabarini tekshiradi. Obuna ham bir necha soniyada faollashadi.",
            "UC, olmos yoki CP bo‘lsa, o‘yindagi balansni yopib, qayta oching. Valyuta 1–5 daqiqada avtomatik tushadi.",
            "Natija bo‘lmasa, <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>’ga buyurtma raqami bilan yozing. Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi. Batafsil shartlar saytdagi «To‘lov va qaytarish» sahifasida.",
          ],
        },
        {
          t: "p",
          text: "Supportga yozganda buyurtma raqamini, kiritilgan @username yoki Player ID’ni va to‘lov vaqtini birga yuboring. Shunda buyurtma tezroq topiladi.",
        },
        {
          t: "p",
          text: "Ko‘p uchraydigan xatolar bor. Ba’zan username bitta harf xato yoziladi. Ba’zan ikkinchi o‘yin akkauntining ID’si kiritiladi yoki kanal nomi shaxsiy akkaunt bilan adashtiriladi. Bunday holatda eksplorer emas, buyurtmadagi ma’lumot yordam beradi.",
        },
        {
          t: "p",
          text: "O‘yin valyutasi tushganda Player ID to‘g‘ri bo‘lsa-yu, boshqa serverdagi akkauntga qarayotgan bo‘lishingiz ham mumkin. Yulduzlarni qaysi bo‘limda olish va qaysi xatolardan qochish haqida: <a href=\"/blog/telegram-stars-sotib-olish-gempay\">Telegram Stars sotib olish GemPay’da</a>.",
        },
        {
          t: "h2",
          id: "ozingiz-gram-bilan-tolagan-bolsangiz",
          text: "O‘zingiz Gram bilan to‘lagan bo‘lsangiz, eksplorerda qanday qaraysiz?",
        },
        {
          t: "p",
          text: "Misol: turnir yutug‘ini bo‘lishib, jamoadoshingizga Gram yubordingiz, u esa «kelmadi» deyapti. Yoki Premium’ni o‘zingiz hamyon orqali oldingiz. Bunday holatlar uchun TON hujjatlari quyidagi tartibni tavsiya qiladi:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Hamyon ilovasidagi tranzaksiya havolasini oching. Havola bo‘lmasa, yuboruvchi yoki qabul qiluvchi manzilini qidiring. Keyin History bo‘limidan yozuvni vaqt, kontragent va summa bo‘yicha toping.",
            "Ilova loglari yoki xizmat javobida tranzaksiya xeshi bo‘lsa, uni to‘g‘ridan-to‘g‘ri qidiruvga qo‘ying.",
            "Natijada manzil va tarmoq to‘g‘riligini tekshiring. Tranzaksiyalar History’da, tokenlar Tokens’da, NFT’lar Collectibles bo‘limida turadi.",
            "Yozuv darhol chiqmasa, biroz kuting. Yangi faollik eksplorerda kechikib paydo bo‘lishi mumkin.",
            "Sizning tomoningizda «muvaffaqiyatli» yozuvi faqat xabar yuborilganini bildiradi. Qabul qiluvchi tranzaksiyasini ham oching, bounce yoki refund bor-yo‘qligini kuzating. Token yuborgan bo‘lsangiz, uning master manzilini kerakli token bilan solishtiring.",
          ],
        },
        {
          t: "p",
          text: "Qaysi eksplorerdan foydalanishni tanlashda rasmiy hujjatdagi ro‘yxatga tayangan ma’qul. Tranzaksiyani ko‘rish uchun manzil yoki xesh yetarli. Shaxsiy kalit yoki parol bu jarayonda ishlatilmaydi.",
        },
        {
          t: "h2",
          id: "klan-chatida-donatni-eksplorerda-tasdiqlang",
          text: "Klan chatida «donatni eksplorerda tasdiqlang» degan xabar kelsa",
        },
        {
          t: "p",
          text: "Ba’zan klan chatida yoki shaxsiy xabarda «UC tushishi uchun eksplorerda tasdiqlang» yoki «Stars’ni olish uchun hamyon ulang» degan havola keladi. Bu firibgarlik belgisi. So‘mda olingan xaridni hech qanday eksplorerda tasdiqlash kerak emas.",
        },
        {
          t: "note",
          tone: "info",
          text: "Sayt seed-fraza, parol, SMS-kod yoki hamyon ulashni so‘rasa, sahifani yoping. Seed-frazani bilgan odam hamyoningizni to‘liq boshqara oladi.",
        },
        {
          t: "p",
          text: "GemPay nimani so‘rashini eslab qoling:",
        },
        {
          t: "list",
          items: [
            "o‘yin valyutasi uchun — faqat Player ID;",
            "Stars va Premium uchun — faqat @username;",
            "parol hech qachon so‘ralmaydi.",
          ],
        },
        {
          t: "p",
          text: "Shubhali havola chatda tarqalsa, nima qilish kerakligi bu yerda yozilgan: <a href=\"/blog/klan-chatida-shubhali-havola-spam-cheklov\">klan chatidagi shubhali havola</a>. Vositachiga qaysi ma’lumotni berish xavfsiz ekanini <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">o‘yin hisobini xavfsiz to‘ldirish</a> maqolasida ko‘ring.",
        },
        {
          t: "h2",
          id: "gram-nomi-oyinchi-uchun-nimani",
          text: "Gram nomi o‘yinchi uchun nimani o‘zgartiradi?",
        },
        {
          t: "p",
          text: "ton.org’da Gram TON blokcheynining asosiy tangasi deb yozilgan, u Toncoin nomi bilan ham tanilgan. Bu kripto tomonidagi nom. Stars, Premium yoki UC xaridiga aloqasi yo‘q.",
        },
        {
          t: "p",
          text: "So‘mda xarid qilsangiz, jarayon o‘zgarmaydi. Gram, hamyon yoki eksplorer kerak emas, narx so‘mda ko‘rsatiladi. Stars o‘yin valyutasiga aylanmaydi, Gram ham UC o‘rnini bosmaydi. Har biri o‘z joyida ishlatiladi.",
        },
        {
          t: "p",
          text: "Hamyonni sovg‘alar bilan bezash haqidagi gaplar ham kanal konseptlaridan chiqqan, rasmiy e’lon emas. Batafsil: <a href=\"/blog/gram-hamyon-bezash-konsepti-oyinchi\">Gram hamyon bezash konsepti</a>.",
        },
        {
          t: "sources",
          items: [
            {
              label: "TON blockchain explorers",
              href: "https://docs.ton.org/onboarding/explorers",
            },
            {
              label: "TON — The Leading L1 Blockchain",
              href: "https://ton.org/",
            },
          ],
        },
      ],
      faq: [
        {
          q: "GemPay’dan Stars oldim — buni gram.org’da ko‘rsam bo‘ladimi?",
          a: "Yo‘q. Siz kartadan yoki bot balansidan to‘lagansiz, kripto hamyoningizdan hech narsa yuborilmagan. Yulduzlar bor-yo‘qligini Telegram’dagi Stars balansida ko‘ring.",
        },
        {
          q: "Jamoadoshimga Premium sovg‘a qildim, uni qanday isbotlayman?",
          a: "So‘mda olingan Premium uchun eksplorer kerak emas. Jamoadoshingiz profilida Premium belgisi va sovg‘a xabari paydo bo‘ladi. Botdagi buyurtma raqami esa sizda dalil sifatida qoladi.",
        },
        {
          q: "UC tushmadi — biror saytda tranzaksiyani qidirishim kerakmi?",
          a: "Kerak emas: UC Player ID bo‘yicha o‘yin akkauntiga tushadi va blokcheynga bog‘liq emas. 5 daqiqa o‘tsa ham balans o‘zgarmasa, @StarsPaymeeSupport’ga buyurtma raqamini yuboring.",
        },
        {
          q: "Klandoshlar gram.org’ni Telegram’ning o‘z sayti deyapti — to‘g‘rimi?",
          a: "Bu faqat kanal postida aytilgan, rasmiy tasdiq topilmadi. TON hujjatlarida rasmiy ochiq kodli eksplorer sifatida dasturchilar uchun Actonscan ko‘rsatilgan.",
        },
        {
          q: "Turnir yutug‘idan Gram yubordim, jamoadosh olmaganini aytyapti — nima qilay?",
          a: "Faqat o‘z tomoningizdagi yozuvga ishonmang. Qabul qiluvchi manzilidagi tranzaksiyani toping va pul qaytib kelmaganini tekshiring. Yangi yozuv biroz kechikib chiqishi mumkin.",
        },
        {
          q: "Kimdir UC tushishi uchun saytga seed-fraza kiritishni aytdi — rostmi?",
          a: "Yo‘q, bu aldov. So‘mdagi donat uchun faqat Player ID kerak. Seed-frazani bergan odam hamyoningizni boshqara oladi.",
        },
      ],
    },
    ru: {
      title: "Нужен ли геймеру эксплорер gram.org: видны ли там покупки Stars и UC?",
      metaTitle: "Нужен ли геймеру эксплорер gram.org",
      metaDescription: "Нет: если Stars, Premium и UC оплачены в сумах картой, через Click или Uzum Bank, из вашего кошелька транзакций не уходит. Проверка — в Telegram и в игре.",
      excerpt: "Нет: если Stars, Premium и UC оплачены в сумах картой, через Click или Uzum Bank, из вашего кошелька транзакций не уходит. Проверка — в Telegram и в игре.",
      answer: "Нет: если Stars, Premium и UC оплачены в сумах картой, через Click или Uzum Bank, из вашего кошелька транзакций не уходит. Проверка — в Telegram и в игре.",
      body: [
        {
          t: "h2",
          id: "gram-org-eksplorer-oyinchiga-kerakmi",
          text: "Нужен ли геймеру эксплорер gram.org?",
        },
        {
          t: "p",
          text: "Если вы покупаете Stars, Premium или UC за сумы, эксплорер вам не нужен. Оплата проходит через UzCard, HUMO, Click, Uzum Bank или баланс бота. При такой покупке из вашего криптокошелька не уходит ни одной транзакции.",
        },
        {
          t: "p",
          text: "Эксплорер — это сайт, который показывает адреса и транзакции в блокчейне. У вас нет ни адреса кошелька, ни хеша транзакции, так что искать там нечего. Пустой результат — не ошибка и не признак того, что покупка потерялась.",
        },
        {
          t: "p",
          text: "Эксплорер пригодится только в одном случае: если вы сами отправляли средства из кошелька Gram или что-то им оплачивали. Gram — монета TON, её также знают под названием Toncoin. Нужен ли геймеру сам кошелёк — отдельный вопрос, ответ здесь: <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">нужен ли геймеру Telegram Wallet</a>.",
        },
        {
          t: "h2",
          id: "gram-org-haqida-nima-aniq",
          text: "Что о gram.org известно точно, а что — только из поста в канале?",
        },
        {
          t: "p",
          text: "Тема пришла из поста в Telegram-канале. В нём gram.org называют официальным эксплорером сети TON. Пост канала — не официальный источник, поэтому его утверждения мы фактами не считаем.",
        },
        {
          t: "p",
          text: "В официальной документации TON написано иначе. На <a href=\"https://docs.ton.org/onboarding/explorers\" target=\"_blank\" rel=\"noopener\">странице об эксплорерах TON</a> официальным эксплорером с открытым кодом назван Actonscan, причём с пометкой, что он предназначен для разработчиков смарт-контрактов. gram.org на этой странице не упоминается.",
        },
        {
          t: "note",
          tone: "warn",
          text: "Кому принадлежит gram.org, когда он запущен и какие в нём есть разделы, в этой статье не подтверждено. Будьте осторожны, прежде чем подключать к нему кошелёк или вводить какие-либо данные.",
        },
        {
          t: "p",
          text: "Для геймера вывод простой: официальный это сайт или нет — на ваши донаты за сумы и покупки в Telegram это не влияет.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "ton-eksplorer-umuman-nimani-korsatadi",
          text: "Что вообще показывает эксплорер TON?",
        },
        {
          t: "p",
          text: "Согласно документации TON, в эксплорерах видно:",
        },
        {
          t: "list",
          items: [
            "балансы адресов (аккаунтов);",
            "переводы Gram и токенов;",
            "код и хранилище смарт-контрактов;",
            "транзакции и сообщения между ними.",
          ],
        },
        {
          t: "p",
          text: "Некоторые эксплореры показывают и сетевые метрики: блоки masterchain и shardchain, активность валидаторов, объём транзакций, расход газа и комиссии.",
        },
        {
          t: "p",
          text: "Данные берутся через интерфейсы TON Center API v2 и API v3. Значит, эксплорер видит только то, что записано в блокчейн. Ваш баланс Stars в Telegram, срок Premium или UC на счёте в PUBG к таким записям не относятся. Они хранятся в Telegram и в игровом аккаунте — там их и проверяют.",
        },
        {
          t: "h2",
          id: "qaysi-xarid-eksplorerda-korinadi-qaysi",
          text: "Какая покупка видна в эксплорере, а какая нет?",
        },
        {
          t: "p",
          text: "В таблице разобраны покупки, которые обычно делает геймер.",
        },
        {
          t: "table",
          head: [
            "Покупка",
            "Как оплачивается",
            "Есть ли транзакция из вашего кошелька",
            "Где проверить",
          ],
          rows: [
            [
              "Stars (GemPay)",
              `В сумах, по @username: 1 Stars — ${som(STARS_UNIT_CARD, "ru")} с карты или баланса, ${som(STARS_UNIT_ONLINE, "ru")} через Click или Uzum Bank`,
              "Нет",
              "Баланс Stars в Telegram",
            ],
            [
              "Premium (GemPay)",
              `В сумах: 3 месяца — ${som(premium(3), "ru")}, 6 месяцев — ${som(premium(6), "ru")}, 12 месяцев — ${som(premium(12), "ru")}; через механизм подарков Telegram`,
              "Нет",
              "Статус Premium в профиле",
            ],
            [
              "UC, алмазы, CP (GemPay)",
              "В сумах, по Player ID",
              "Нет",
              "Баланс в игре",
            ],
            [
              "Premium самостоятельно через криптокошелёк",
              "С криптокошелька",
              "Да",
              "История кошелька, эксплорер и профиль",
            ],
            [
              "Перевод Gram тиммейту",
              "С кошелька Gram",
              "Да",
              "История кошелька и эксплорер",
            ],
          ],
        },
        {
          t: "p",
          text: "На сайте TON сказано, что через криптокошелёк можно оформить Telegram Premium себе или друзьям. Если выберете этот путь, платёж из кошелька останется в блокчейне.",
        },
        {
          t: "p",
          text: "К той же категории относится Gram Wallet внутри Telegram. Это некастодиальный кошелёк от команды Telegram, встроенный в интерфейс мессенджера. Переводы из него записываются в блокчейн. По данным ton.org, перевод Gram стоит примерно 0,00039 Gram.",
        },
        {
          t: "p",
          text: "Если в GemPay указать @username тиммейта, Stars или Premium придут ему. Но это тоже оплата в сумах — из вашего кошелька ничего не уходит, поэтому искать в эксплорере нечего.",
        },
        {
          t: "h2",
          id: "gempay-orqali-olingan-stars-premium",
          text: "Где проверить Stars, Premium или UC, купленные через GemPay?",
        },
        {
          t: "p",
          text: "Чтобы проверить покупку за сумы, блокчейн не нужен. Смотрите по порядку:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Откройте <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> и посмотрите статус и номер заказа.",
            "Если это Stars, откройте баланс Stars в Telegram. Звёзды обычно приходят за несколько секунд.",
            "Если это Premium, владелец @username проверяет в своём профиле значок Premium и сообщение о подарке. Подписка тоже активируется за несколько секунд.",
            "Если это UC, алмазы или CP, закройте и снова откройте баланс в игре. Валюта зачисляется автоматически за 1–5 минут.",
            "Если результата нет, напишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> с номером заказа. Если заказ не выполнен, деньги полностью возвращаются в течение 3 рабочих дней. Подробные условия — на странице «Оплата и возврат» на сайте.",
          ],
        },
        {
          t: "p",
          text: "В поддержку сразу отправляйте номер заказа, указанный @username или Player ID и время оплаты. Так заказ найдут быстрее.",
        },
        {
          t: "p",
          text: "Есть частые ошибки. Иногда в username ошибаются на одну букву. Иногда вводят ID второго игрового аккаунта или путают название канала с личным аккаунтом. В таких случаях поможет не эксплорер, а данные в заказе.",
        },
        {
          t: "p",
          text: "Бывает и так: Player ID верный, а вы смотрите на аккаунт на другом сервере. Где покупать звёзды и каких ошибок избегать — в статье <a href=\"/blog/telegram-stars-sotib-olish-gempay\">покупка Telegram Stars в GemPay</a>.",
        },
        {
          t: "h2",
          id: "ozingiz-gram-bilan-tolagan-bolsangiz",
          text: "Если вы сами платили в Gram, как проверить в эксплорере?",
        },
        {
          t: "p",
          text: "Пример: вы поделили призовые с турнира и отправили тиммейту Gram, а он говорит, что «не пришло». Или вы сами оформили Premium через кошелёк. Для таких случаев документация TON советует такой порядок:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Откройте ссылку на транзакцию в приложении кошелька. Если ссылки нет, найдите адрес отправителя или получателя, затем в разделе History найдите запись по времени, контрагенту и сумме.",
            "Если в логах приложения или в ответе сервиса есть хеш транзакции, вставьте его прямо в поиск.",
            "Проверьте в результате адрес и сеть. Транзакции — в History, токены — в Tokens, NFT — в разделе Collectibles.",
            "Если запись не появилась сразу, подождите. Новая активность может отображаться в эксплорере с задержкой.",
            "Статус «успешно» на вашей стороне означает лишь, что сообщение отправлено. Откройте и транзакцию получателя, проверьте, нет ли bounce или refund. Если отправляли токен, сверьте его master-адрес с нужным токеном.",
          ],
        },
        {
          t: "p",
          text: "Выбирая эксплорер, лучше опираться на список из официальной документации. Чтобы посмотреть транзакцию, достаточно адреса или хеша. Приватный ключ или пароль для этого не нужны.",
        },
        {
          t: "h2",
          id: "klan-chatida-donatni-eksplorerda-tasdiqlang",
          text: "В чате клана пишут «подтвердите донат в эксплорере»",
        },
        {
          t: "p",
          text: "Иногда в чате клана или в личке приходит ссылка с текстом «чтобы UC зачислились, подтвердите в эксплорере» или «подключите кошелёк, чтобы получить Stars». Это признак мошенничества. Покупку за сумы не нужно подтверждать ни в каком эксплорере.",
        },
        {
          t: "note",
          tone: "info",
          text: "Если сайт просит seed-фразу, пароль, SMS-код или подключение кошелька, закройте страницу. Тот, кто знает seed-фразу, получает полный контроль над вашим кошельком.",
        },
        {
          t: "p",
          text: "Запомните, что запрашивает GemPay:",
        },
        {
          t: "list",
          items: [
            "для игровой валюты — только Player ID;",
            "для Stars и Premium — только @username;",
            "пароль не запрашивается никогда.",
          ],
        },
        {
          t: "p",
          text: "Что делать, если подозрительная ссылка разошлась по чату, — здесь: <a href=\"/blog/klan-chatida-shubhali-havola-spam-cheklov\">подозрительная ссылка в чате клана</a>. Какие данные безопасно давать посреднику — в статье <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">как безопасно пополнить игровой счёт</a>.",
        },
        {
          t: "h2",
          id: "gram-nomi-oyinchi-uchun-nimani",
          text: "Что название Gram меняет для геймера?",
        },
        {
          t: "p",
          text: "На ton.org Gram назван нативной монетой блокчейна TON, её также знают как Toncoin. Это название из мира крипты, к покупке Stars, Premium или UC оно отношения не имеет.",
        },
        {
          t: "p",
          text: "Если покупаете за сумы, ничего не меняется. Не нужны ни Gram, ни кошелёк, ни эксплорер — цена указана в сумах. Stars не превращаются в игровую валюту, а Gram не заменяет UC. Каждое используется на своём месте.",
        },
        {
          t: "p",
          text: "Разговоры об оформлении кошелька подарками тоже взяты из концептов в каналах, а не из официальных анонсов. Подробнее: <a href=\"/blog/gram-hamyon-bezash-konsepti-oyinchi\">концепт оформления кошелька Gram</a>.",
        },
        {
          t: "sources",
          items: [
            {
              label: "TON blockchain explorers",
              href: "https://docs.ton.org/onboarding/explorers",
            },
            {
              label: "TON — The Leading L1 Blockchain",
              href: "https://ton.org/",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Я купил Stars в GemPay — можно увидеть это на gram.org?",
          a: "Нет. Вы платили с карты или с баланса бота, из криптокошелька ничего не отправлялось. Пришли ли звёзды, смотрите в балансе Stars в Telegram.",
        },
        {
          q: "Я подарил тиммейту Premium — как это доказать?",
          a: "Для Premium, купленного за сумы, эксплорер не нужен. У тиммейта в профиле появятся значок Premium и сообщение о подарке, а номер заказа в боте останется у вас как подтверждение.",
        },
        {
          q: "UC не пришли — нужно искать транзакцию на каком-то сайте?",
          a: "Не нужно: UC зачисляются на игровой аккаунт по Player ID и с блокчейном не связаны. Если через 5 минут баланс не изменился, отправьте номер заказа в @StarsPaymeeSupport.",
        },
        {
          q: "Соклановцы говорят, что gram.org — собственный сайт Telegram. Это правда?",
          a: "Так утверждается только в посте канала, официального подтверждения не нашлось. В документации TON официальным эксплорером с открытым кодом для разработчиков указан Actonscan.",
        },
        {
          q: "Отправил Gram из турнирного выигрыша, а тиммейт говорит, что не получил. Что делать?",
          a: "Не полагайтесь только на запись со своей стороны. Найдите транзакцию на адресе получателя и убедитесь, что средства не вернулись обратно. Новая запись может появиться с небольшой задержкой.",
        },
        {
          q: "Мне сказали ввести seed-фразу на сайте, чтобы пришли UC. Это правда?",
          a: "Нет, это обман. Для доната за сумы нужен только Player ID. Тот, кому вы отдали seed-фразу, сможет распоряжаться вашим кошельком.",
        },
      ],
    },
  },
};

export default article;
