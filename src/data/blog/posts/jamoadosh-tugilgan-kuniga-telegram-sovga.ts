// Avtoblogyoz yasagan maqola (2026-11-13). Niyat: O'zbekistonlik o'yinchi klan yoki squad jamoadoshiga tug'ilgan kunida nima sovg'a qilishni tanlayapti: Durov kabi NFT sovg'a, Telegram Premium, Stars yoki UC/olmos. U «jamoadoshga tug'ilgan kun sovg'asi telegram» deb qidiradi va qaysi biri foydali, qanchaga tushishi va qanday yetkazilishini bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://fragment.com/gift/plushpepe-834
//   https://telegram.org/blog/wear-gifts-blockchain-and-more
//   https://telegram.org/blog/gift-marketplace-and-more
//   https://core.telegram.org/api/gifts

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "jamoadosh-tugilgan-kuniga-telegram-sovga",
  game: "pubg-mobile",
  type: "comparison",
  datePublished: "2026-11-13",
  dateModified: "2026-11-13",
  keywords: ["jamoadoshga tug'ilgan kun sovg'asi telegram","do'stga telegram premium sovg'a qilish","telegram stars sovg'a qilish","tug'ilgan kunga uc sovg'a","klan a'zosiga sovg'a","telegram nft sovg'a narxi","jamoadoshga olmos sovg'a qilish","подарок другу на день рождения телеграм","подарить telegram premium другу","подарить звезды telegram","подарить UC другу PUBG","NFT подарок Telegram на день рождения"],
  locales: {
    uz: {
      title: "Jamoadoshga tug‘ilgan kun sovg‘asi Telegram’da: NFT, Premium, Stars yoki UC?",
      metaTitle: "Jamoadoshga tug‘ilgan kun sovg‘asi Telegram’da",
      metaDescription: "Ko‘p o‘ynaydigan jamoadoshga UC yoki olmos, chatda faol bo‘lsa Premium, tanlovni unga qoldirsangiz Stars bering. NFT sovg‘a esa faqat profilni bezaydi.",
      excerpt: "Ko‘p o‘ynaydigan jamoadoshga UC yoki olmos, chatda faol bo‘lsa Premium, tanlovni unga qoldirsangiz Stars bering. NFT sovg‘a esa faqat profilni bezaydi.",
      answer: "Ko‘p o‘ynaydigan jamoadoshga UC yoki olmos, chatda faol bo‘lsa Premium, tanlovni unga qoldirsangiz Stars bering. NFT sovg‘a esa faqat profilni bezaydi.",
      body: [
        {
          t: "h2",
          id: "jamoadoshga-tugilgan-kunida-nima-sovga",
          text: "Jamoadoshga tug‘ilgan kunida nima sovg‘a qilgan ma’qul?",
        },
        {
          t: "p",
          text: "Jamoadosh ko‘p o‘ynasa, eng foydali sovg‘a — o‘zi o‘ynaydigan o‘yinning valyutasi. PUBG Mobile uchun bu UC, Mobile Legends va Free Fire uchun olmos, Call of Duty: Mobile uchun CP. Klan chatida va kanalda ko‘p o‘tirsa, Telegram Premium sovg‘a qiling. Nima yoqishini bilmasangiz, Stars bering: qayerga sarflashni o‘zi hal qiladi. Kolleksion NFT sovg‘a esa profilni bezaydi, o‘yinda hech narsa bermaydi.",
        },
        {
          t: "p",
          text: "Bu savol kanallarda tarqalgan bitta postdan keyin ko‘p berila boshladi. Postda Pavel Durov tanishiga Plush Pepe sovg‘a qilgani aytilgan. Fragment’da <a href=\"https://fragment.com/gift/plushpepe-834\" target=\"_blank\" rel=\"noopener\">Plush Pepe #834 sahifasi</a> bor va «Sold» holatida turibdi. Ammo egasi u yerda ismi bilan emas, TON hamyon manzili bilan ko‘rsatilgan. Kim kimga sovg‘a qilgani ham, xarid narxi ham rasmiy manbada tasdiqlanmagan.",
        },
        {
          t: "p",
          text: "Kolleksion sovg‘a o‘yinchiga arziydimi, degan savolga <a href=\"/blog/plush-pepe-narxi-oyinchi-stars-sarflash\">alohida maqolada</a> batafsil javob berilgan. Quyida oddiy klan a’zosi uchun tanlov ko‘rib chiqiladi: byudjet, foyda va yetkazish.",
        },
        {
          t: "h2",
          id: "tort-variant-yonma-yon-narx",
          text: "To‘rt variant yonma-yon: narx, foyda va yetkazish",
        },
        {
          t: "table",
          head: [
            "Sovg‘a",
            "Jamoadoshga nima beradi",
            "Narx",
            "Nima kerak",
            "Qancha vaqtda yetadi",
          ],
          rows: [
            [
              "Telegram Premium",
              "Telegram’ning qo‘shimcha funksiyalari",
              `3 oy — ${som(premium(3), "uz")}, 6 oy — ${som(premium(6), "uz")}, 12 oy — ${som(premium(12), "uz")}`,
              "@username",
              "Bir necha soniyada faollashadi",
            ],
            [
              "Telegram Stars",
              "Telegram ichidagi valyuta, masalan, ichki bozordagi sovg‘alar shu valyutada sotiladi",
              `Donasi ${som(STARS_UNIT_CARD, "uz")} (karta yoki balans), ${som(STARS_UNIT_ONLINE, "uz")} (Click, Uzum Bank)`,
              "@username, bir buyurtmada 50 dan 10 000 tagacha",
              "Bir necha soniyada",
            ],
            [
              "UC, olmos, CP",
              "O‘yin ichidagi xaridlar",
              "Botda ko‘rsatiladi",
              "Player ID, parol so‘ralmaydi",
              "1–5 daqiqada, avtomatik",
            ],
            [
              "Kolleksion NFT sovg‘a",
              "Profil bezagi va kolleksiya, o‘yinga ta’siri yo‘q",
              "Ichki bozorda sotuvchi Stars’da belgilaydi",
              "Stars yoki TON hamyon",
              "Sotib olish usuliga bog‘liq",
            ],
          ],
        },
        {
          t: "p",
          text: "Premium’da 1 oylik tarif yo‘q, eng qisqa muddat — 3 oy. Karta, Click, Uzum Bank yoki balans — qaysi usulda to‘lasangiz ham narx bir xil. Stars’da esa usul narxga ta’sir qiladi: karta o‘tkazmasi yoki bot balansi arzonroq chiqadi.",
        },
        {
          t: "p",
          text: "Kolleksion sovg‘ada qat’iy narx yo‘q. <a href=\"https://telegram.org/blog/gift-marketplace-and-more\" target=\"_blank\" rel=\"noopener\">Telegram blogiga</a> ko‘ra, ichki bozorda sovg‘aning egasi narxni Stars’da o‘zi qo‘yadi, shuning uchun har bir nusxa har xil turadi. GemPay kolleksion sovg‘alarni sotmaydi.",
        },
        {
          t: "note",
          tone: "info",
          text: "Buyurtma bajarilmasa, GemPay pulni 3 ish kuni ichida to‘liq qaytaradi. Hisobga tushgan valyuta esa qaytarilmaydi.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "qaysi-jamoadoshga-qaysi-sovga-mos",
          text: "Qaysi jamoadoshga qaysi sovg‘a mos keladi?",
        },
        {
          t: "p",
          text: "Eng to‘g‘ri sovg‘a — jamoadosh baribir o‘zi sotib oladigan narsa. Uning odatlariga qarang:",
        },
        {
          t: "list",
          items: [
            "<strong>PUBG’da har mavsum Pass oladi</strong> — UC. Uni Pass’ga yoki o‘zi xohlagan xaridga sarflaydi.",
            "<strong>MLBB yoki Free Fire’da skin yig‘adi</strong> — olmos. Qaysi o‘yinni ko‘proq o‘ynashini aniqlab oling: bir o‘yinning olmosi boshqasiga o‘tmaydi.",
            "<strong>CODM’da squad bilan turnirga chiqadi</strong> — CP.",
            "<strong>Klan kanalini yuritadi, turnir chatlarida ko‘p yozadi</strong> — Premium. Uning o‘yinchiga aynan nima berishi <a href=\"/blog/telegram-premium-oyinchi-uchun\">bu yerda</a> yozilgan.",
            "<strong>Nima yoqishini bilmaysiz</strong> — Stars. Faqat yodda tuting: Stars o‘yin valyutasiga aylanmaydi. To‘rt xil «pul»ning farqi <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">shu maqolada</a> jadval bilan ko‘rsatilgan.",
            "<strong>Kolleksiya yig‘adi, profilini bezashni yaxshi ko‘radi</strong> — kolleksion sovg‘a. Bunga katta byudjet kerak bo‘lishi mumkin, narxi keyin oshishi esa kafolatlanmagan.",
          ],
        },
        {
          t: "p",
          text: "Butun klan bo‘lib tabriklasangiz, pulni bir kishi yig‘ib, buyurtmani o‘zi rasmiylashtirgani qulay. Besh kishi bo‘lib olingan 12 oylik Premium yoki katta UC paketi beshta mayda sovg‘adan ko‘ra ko‘proq esda qoladi.",
        },
        {
          t: "h2",
          id: "kolleksion-nft-sovga-jamoadoshga-nima",
          text: "Kolleksion NFT sovg‘a jamoadoshga nima beradi?",
        },
        {
          t: "p",
          text: "Kolleksion sovg‘aning uchta xususiyati bor: model, fon va belgi. Har birining qanchalik kam uchrashi foizda yoziladi. Masalan, postda tilga olingan #834 nusxasida model Donatello (1%), fon Navy Blue (2%), belgi Bell Pepper (0.5%).",
        },
        {
          t: "p",
          text: "Sovg‘ani olgan jamoadosh u bilan quyidagilarni qila oladi:",
        },
        {
          t: "list",
          items: [
            "<strong>Klanga ko‘rsatadi.</strong> Har bir kolleksion sovg‘aning t.me/nft ko‘rinishidagi alohida havolasi bor (<a href=\"https://telegram.org/blog/wear-gifts-blockchain-and-more\" target=\"_blank\" rel=\"noopener\">Telegram blogi</a>), uni chatga tashlash mumkin.",
            "<strong>Boshqaga beradi.</strong> <a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">API hujjatiga</a> ko‘ra, sovg‘ani boshqa foydalanuvchiga o‘tkazish mumkin, ayrim hollarda tekin.",
            "<strong>Sotadi.</strong> Ichki bozorda narxni Stars’da qo‘yadi.",
            "<strong>Blokcheynga chiqaradi.</strong> Sovg‘ani TON’dagi NFT’ga aylantirib, Fragment’ga import qilish, keyin o‘tkazish yoki auksionga qo‘yish mumkin.",
          ],
        },
        {
          t: "p",
          text: "O‘yinda esa bu sovg‘a hech narsa bermaydi: na UC, na skin, na Pass. Kanallarda «falon dollarga sotildi» degan raqamni ko‘rsangiz, uni faktdek qabul qilmang. Fragment sahifasidagi taklif oynasi sotuv emas, egalik tarixida esa narx ko‘rsatilmagan.",
        },
        {
          t: "h2",
          id: "premium-yoki-starsni-jamoadoshga-qanday",
          text: "Premium yoki Stars’ni jamoadoshga qanday sovg‘a qilasiz?",
        },
        {
          t: "p",
          text: "Jamoadoshning @username’i yetadi. Uning akkauntiga kirish, kod yoki parol kerak emas.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Jamoadoshning aniq @username’ini oling. Yoddan yozmang, profilidan nusxa ko‘chiring: bitta harf xato bo‘lsa, sovg‘a boshqa odamga ketadi.",
            "<a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>’ni oching va Premium yoki Stars bo‘limini tanlang.",
            "Premium uchun muddatni (3, 6 yoki 12 oy), Stars uchun miqdorni (50 dan 10 000 tagacha) tanlang.",
            "UzCard, HUMO, Click, Uzum Bank yoki bot balansi bilan so‘mda to‘lang. Visa va Mastercard qabul qilinmaydi, Rossiyadan SBP orqali to‘lash mumkin.",
            "Jamoadoshdan sovg‘a kelganini so‘rang. Muammo chiqsa, <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>’ga buyurtma raqami bilan yozing.",
          ],
        },
        {
          t: "p",
          text: "Premium Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi, GemPay jamoadoshning akkauntiga kirmaydi.",
        },
        {
          t: "p",
          text: "Tug‘ilgan kun kechasi tabriklamoqchimisiz? Username’ni oldindan yozib qo‘ying, to‘lovni esa o‘sha kuni qiling. Odatda sovg‘a bir necha soniyada yetadi, lekin biror kutilmagan holat bo‘lsa, buyurtmani ozgina oldinroq bergan ma’qul.",
        },
        {
          t: "h2",
          id: "uc-yoki-olmosni-tugilgan-kunga",
          text: "UC yoki olmosni tug‘ilgan kunga qanday yetkazasiz?",
        },
        {
          t: "p",
          text: "O‘yin valyutasi Telegram akkauntiga emas, jamoadoshning o‘yin profiliga tushadi.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Jamoadoshning Player ID’sini biling. Mobile Legends’da User ID bilan Server ID birga kerak bo‘ladi. PUBG’da ID qayerda turishini <a href=\"/blog/pubg-mobile-player-id-qayerda\">bu qo‘llanmadan</a> ko‘ring. Parol so‘ramang, u kerak emas.",
            "Botda o‘yinni va paketni tanlang.",
            "ID’ni kiriting. Bot shu ID’ga tegishli nikni topib ko‘rsatadi.",
            "Nikni jamoadoshingiz nikiga solishtiring. Mos kelsa, so‘mda to‘lang.",
            "Valyuta 1–5 daqiqada avtomatik tushadi. Jamoadoshga o‘yinni qayta ochib, balansini tekshirishni ayting.",
          ],
        },
        {
          t: "p",
          text: "Nik tekshiruvini o‘tkazib yubormang. Squad’da o‘xshash niklar ko‘p bo‘ladi, ID’dagi bitta xato raqam esa valyutani notanish o‘yinchiga yuboradi. Hisobga tushgan valyuta qaytarilmaydi.",
        },
        {
          t: "h2",
          id: "sovga-yetmasa-yoki-xato-ketsa",
          text: "Sovg‘a yetmasa yoki xato ketsa nima bo‘ladi?",
        },
        {
          t: "p",
          text: "Ko‘p uchraydigan holatlar va ularning yechimi:",
        },
        {
          t: "list",
          items: [
            "<strong>Telegram sovg‘asi jamoadoshga bormayapti.</strong> Ko‘pincha sabab oluvchining maxfiylik sozlamalarida: u ayrim sovg‘a turlarini qabul qilishni yopgan bo‘ladi. Nimani tekshirish kerakligi <a href=\"/blog/jamoadoshga-sovga-yuborib-bolmayapti-sabab\">bu maqolada</a> yozilgan.",
            "<strong>Username yoki ID xato kiritildi.</strong> Valyuta boshqa akkauntga tushgan bo‘lsa, qaytarilmaydi. Shuning uchun to‘lovdan oldin nik va username’ni yana bir bor solishtiring.",
            "<strong>Pul yechildi, buyurtma bajarilmadi.</strong> Bunday holatda pul 3 ish kuni ichida to‘liq qaytariladi. Qayta to‘lashga shoshilmang, avval supportga buyurtma raqamini yuboring.",
            "<strong>UC 5 daqiqadan keyin ham ko‘rinmayapti.</strong> O‘yinni qayta ishga tushirib, balansni tekshiring. Baribir bo‘lmasa, buyurtma raqami bilan supportga yozing.",
          ],
        },
        {
          t: "h2",
          id: "klan-chatidagi-tugilgan-kun-aksiyasi",
          text: "Klan chatidagi «tug‘ilgan kun aksiyasi»ga ishonsa bo‘ladimi?",
        },
        {
          t: "p",
          text: "Yo‘q, rasmiy tasdig‘i bo‘lmasa ishonmang. Mashhur sovg‘a haqidagi xabardan keyin chatlarda «arzon NFT», «Durov aksiyasi», «garant bot» kabi takliflar ko‘payadi. Ularning maqsadi odatda bitta: oldindan pul yoki maxfiy ma’lumotni olish.",
        },
        {
          t: "note",
          tone: "warn",
          text: "Sovg‘a qilish uchun @username yoki Player ID yetadi. Kimdir Telegram kodi, o‘yin paroli, hamyon kaliti so‘rasa yoki notanish manzilga oldindan TON yoki boshqa kripto yuborishingizni so‘rasa, bu firibgarlik belgisi.",
        },
        {
          t: "p",
          text: "Bunday takliflarning boshqa belgilari <a href=\"/blog/durov-tugilgan-kuni-aksiyasi-firibgarlik-oyinchi\">alohida maqolada</a> ko‘rib chiqilgan. Jamoadoshga sovg‘a qilganda eng xavfsiz yo‘l shu: username yoki ID’ni uning o‘zidan oling, so‘mda to‘lang va to‘lovdan oldin nikni tekshiring.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Plush Pepe #834 (Fragment)",
              href: "https://fragment.com/gift/plushpepe-834",
            },
            {
              label: "Wear Collectible Gifts, Move Gifts to the Blockchain… (Telegram blog)",
              href: "https://telegram.org/blog/wear-gifts-blockchain-and-more",
            },
            {
              label: "Gift Marketplace, Posting Several Stories at Once… (Telegram blog)",
              href: "https://telegram.org/blog/gift-marketplace-and-more",
            },
            {
              label: "Telegram Gifts (API)",
              href: "https://core.telegram.org/api/gifts",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Jamoadoshga 1 oylik Premium sovg‘a qilsa bo‘ladimi?",
          a: "GemPay’da bunday tarif yo‘q: tanlov 3, 6 va 12 oylik muddatlardan iborat. Narx to‘lov usuliga qarab o‘zgarmaydi.",
        },
        {
          q: "Stars’ni jamoadosh keyin UC yoki olmosga almashtira oladimi?",
          a: "Yo‘q, Stars o‘yin valyutasiga aylanmaydi. Unga UC yoki olmos kerak bo‘lsa, valyutani to‘g‘ridan-to‘g‘ri uning Player ID’siga oling.",
        },
        {
          q: "Kutilmagan sovg‘a qilmoqchiman: jamoadoshning ID’sini qanday bilib olaman?",
          a: "ID’ni klan sardori yoki umumiy do‘stingizdan so‘rang, parol esa umuman kerak emas. Bot ID bo‘yicha nikni ko‘rsatadi, shuning uchun to‘lashdan oldin to‘g‘ri odamni tanlaganingizni bilib olasiz.",
        },
        {
          q: "Kolleksion sovg‘ani GemPay orqali olsa bo‘ladimi?",
          a: "Yo‘q, GemPay o‘yin valyutasi, Stars va Premium sotadi. Jamoadoshingizga Stars bersangiz, u ichki bozordan yoqqan sovg‘ani o‘zi tanlab olishi mumkin.",
        },
        {
          q: "Jamoadoshimda Telegram username yo‘q bo‘lsa nima qilaman?",
          a: "Stars va Premium @username bo‘yicha yuboriladi, shuning uchun u avval sozlamalarda username o‘rnatishi kerak. Kutilmagan sovg‘a qilmoqchi bo‘lsangiz, Player ID bo‘yicha UC yoki olmos olib bering.",
        },
        {
          q: "Rossiyada ishlaydigan klan a’zosi ham sovg‘a buyurtma qila oladimi?",
          a: "Ha, u Rossiyadan SBP orqali to‘lay oladi. Oluvchidan Stars va Premium uchun @username, o‘yin valyutasi uchun Player ID kerak bo‘ladi.",
        },
      ],
    },
    ru: {
      title: "Подарок тиммейту на день рождения в Telegram: NFT, Premium, Stars или UC?",
      metaTitle: "Подарок тиммейту на день рождения в Telegram",
      metaDescription: "Тиммейту, который много играет, дарите UC или алмазы. Если он активен в чатах, подойдёт Premium, а если выбор за ним — Stars.",
      excerpt: "Тиммейту, который много играет, дарите UC или алмазы. Если он активен в чатах, подойдёт Premium, а если выбор за ним — Stars. NFT-подарок только украшает профиль.",
      answer: "Тиммейту, который много играет, дарите UC или алмазы. Если он активен в чатах, подойдёт Premium, а если выбор за ним — Stars. NFT-подарок только украшает профиль.",
      body: [
        {
          t: "h2",
          id: "jamoadoshga-tugilgan-kunida-nima-sovga",
          text: "Что подарить тиммейту на день рождения?",
        },
        {
          t: "p",
          text: "Если тиммейт много играет, полезнее всего валюта его игры. Для PUBG Mobile это UC, для Mobile Legends и Free Fire — алмазы, для Call of Duty: Mobile — CP. Если он много сидит в чате клана и в каналах, подарите Telegram Premium. Не знаете, что ему нужно? Дарите Stars, и он сам решит, на что их потратить. Коллекционный NFT-подарок украшает профиль, но в игре ничего не даёт.",
        },
        {
          t: "p",
          text: "Этот вопрос стали часто задавать после одного поста, который разошёлся по каналам. В нём говорилось, что Павел Дуров подарил знакомому Plush Pepe. На Fragment действительно есть <a href=\"https://fragment.com/gift/plushpepe-834\" target=\"_blank\" rel=\"noopener\">страница Plush Pepe #834</a> со статусом «Sold». Но владелец указан там не по имени, а адресом TON-кошелька. Ни то, кто кому что подарил, ни цена покупки в официальных источниках не подтверждены.",
        },
        {
          t: "p",
          text: "Стоит ли игроку покупать коллекционный подарок, подробно разобрано в <a href=\"/blog/plush-pepe-narxi-oyinchi-stars-sarflash\">отдельной статье</a>. Здесь разберём выбор для обычного участника клана: сколько потратить, какая от подарка польза и как его доставить.",
        },
        {
          t: "h2",
          id: "tort-variant-yonma-yon-narx",
          text: "Четыре варианта рядом: цена, польза и доставка",
        },
        {
          t: "table",
          head: [
            "Подарок",
            "Что получает тиммейт",
            "Цена",
            "Что нужно",
            "Когда дойдёт",
          ],
          rows: [
            [
              "Telegram Premium",
              "Дополнительные функции Telegram",
              `3 месяца — ${som(premium(3), "ru")}, 6 месяцев — ${som(premium(6), "ru")}, 12 месяцев — ${som(premium(12), "ru")}`,
              "@username",
              "Включается за несколько секунд",
            ],
            [
              "Telegram Stars",
              "Внутренняя валюта Telegram: например, за неё продаются подарки на внутреннем маркетплейсе",
              `Одна звезда — ${som(STARS_UNIT_CARD, "ru")} (перевод с карты или баланс), ${som(STARS_UNIT_ONLINE, "ru")} (Click, Uzum Bank)`,
              "@username, от 50 до 10 000 в одном заказе",
              "За несколько секунд",
            ],
            [
              "UC, алмазы, CP",
              "Покупки внутри игры",
              "Указана в боте",
              "Player ID, пароль не нужен",
              "За 1–5 минут, автоматически",
            ],
            [
              "Коллекционный NFT-подарок",
              "Украшение профиля и коллекция, на игру не влияет",
              "На внутреннем маркетплейсе её назначает продавец в Stars",
              "Stars или TON-кошелёк",
              "Зависит от способа покупки",
            ],
          ],
        },
        {
          t: "p",
          text: "Тарифа на 1 месяц у Premium нет, минимальный срок — 3 месяца. Цена не меняется, чем бы вы ни платили: картой, через Click, Uzum Bank или с баланса. Со Stars иначе: перевод с карты или оплата с баланса бота выходят дешевле.",
        },
        {
          t: "p",
          text: "Твёрдой цены у коллекционного подарка нет. По данным <a href=\"https://telegram.org/blog/gift-marketplace-and-more\" target=\"_blank\" rel=\"noopener\">блога Telegram</a>, на внутреннем маркетплейсе владелец сам назначает цену в Stars, поэтому каждый экземпляр стоит по-своему. Коллекционные подарки GemPay не продаёт.",
        },
        {
          t: "note",
          tone: "info",
          text: "Если заказ не выполнен, GemPay возвращает деньги полностью в течение 3 рабочих дней. Валюта, которая уже пришла на счёт, не возвращается.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "qaysi-jamoadoshga-qaysi-sovga-mos",
          text: "Какой подарок подойдёт какому тиммейту?",
        },
        {
          t: "p",
          text: "Лучший подарок — то, что тиммейт и так купил бы себе сам. Посмотрите на его привычки:",
        },
        {
          t: "list",
          items: [
            "<strong>В PUBG берёт Pass каждый сезон</strong> — UC. Потратит их на Pass или на что-то другое по желанию.",
            "<strong>Собирает скины в MLBB или Free Fire</strong> — алмазы. Сначала узнайте, в какую игру он играет больше: алмазы одной игры в другую не переносятся.",
            "<strong>Выходит с отрядом на турниры в CODM</strong> — CP.",
            "<strong>Ведёт канал клана и много пишет в турнирных чатах</strong> — Premium. Что именно он даёт игроку, рассказано <a href=\"/blog/telegram-premium-oyinchi-uchun\">здесь</a>.",
            "<strong>Не знаете, что ему нравится</strong> — Stars. Только учтите: в игровую валюту Stars не превращаются. Чем отличаются четыре вида «денег», показано в таблице <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">в этой статье</a>.",
            "<strong>Собирает коллекции и любит украшать профиль</strong> — коллекционный подарок. Бюджет может понадобиться немалый, а рост цены в будущем никто не гарантирует.",
          ],
        },
        {
          t: "p",
          text: "Если поздравляете всем кланом, удобно, когда деньги собирает один человек и он же оформляет заказ. Premium на 12 месяцев или крупный пакет UC, купленный впятером, запомнится лучше, чем пять мелких подарков.",
        },
        {
          t: "h2",
          id: "kolleksion-nft-sovga-jamoadoshga-nima",
          text: "Что даёт тиммейту коллекционный NFT-подарок?",
        },
        {
          t: "p",
          text: "У коллекционного подарка три характеристики: модель, фон и символ. У каждой в процентах указано, насколько она редкая. Например, у экземпляра #834 из того поста модель Donatello (1%), фон Navy Blue (2%), символ Bell Pepper (0.5%).",
        },
        {
          t: "p",
          text: "Вот что тиммейт сможет сделать с таким подарком:",
        },
        {
          t: "list",
          items: [
            "<strong>Показать клану.</strong> У каждого коллекционного подарка своя ссылка вида t.me/nft (<a href=\"https://telegram.org/blog/wear-gifts-blockchain-and-more\" target=\"_blank\" rel=\"noopener\">блог Telegram</a>), её можно скинуть в чат.",
            "<strong>Передать другому.</strong> Судя по <a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">документации API</a>, подарок можно передать другому пользователю, иногда без оплаты.",
            "<strong>Продать.</strong> На внутреннем маркетплейсе он сам назначает цену в Stars.",
            "<strong>Вывести в блокчейн.</strong> Подарок можно превратить в NFT в сети TON и импортировать на Fragment. После этого его можно передать или выставить на аукцион.",
          ],
        },
        {
          t: "p",
          text: "В игре такой подарок ничего не даёт: ни UC, ни скинов, ни Pass. Если в каналах пишут «продан за столько-то долларов», не принимайте эту цифру за факт. Окно ставки на странице Fragment — это не продажа, а в истории владения цена не указана.",
        },
        {
          t: "h2",
          id: "premium-yoki-starsni-jamoadoshga-qanday",
          text: "Как подарить тиммейту Premium или Stars?",
        },
        {
          t: "p",
          text: "Хватит @username тиммейта. Входить в его аккаунт не нужно, код и пароль тоже не нужны.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Узнайте точный @username тиммейта. Не пишите по памяти, скопируйте из профиля: ошибётесь в одной букве — подарок уйдёт другому человеку.",
            "Откройте <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> и выберите раздел Premium или Stars.",
            "Для Premium выберите срок (3, 6 или 12 месяцев), для Stars — количество (от 50 до 10 000).",
            "Оплатите в сумах картой UzCard или HUMO, через Click, Uzum Bank или с баланса бота. Visa и Mastercard не принимаются, из России можно платить через СБП.",
            "Спросите у тиммейта, пришёл ли подарок. Если что-то пошло не так, напишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> и укажите номер заказа.",
          ],
        },
        {
          t: "p",
          text: "Premium подключается через официальный механизм подарков Telegram, в аккаунт тиммейта GemPay не заходит.",
        },
        {
          t: "p",
          text: "Хотите поздравить ровно в полночь? Запишите username заранее, а заплатите в сам день рождения. Обычно подарок доходит за несколько секунд, но на случай заминки лучше оформить заказ чуть раньше.",
        },
        {
          t: "h2",
          id: "uc-yoki-olmosni-tugilgan-kunga",
          text: "Как доставить UC или алмазы ко дню рождения?",
        },
        {
          t: "p",
          text: "Игровая валюта приходит не в Telegram, а в игровой профиль тиммейта.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Узнайте Player ID тиммейта. В Mobile Legends понадобятся сразу User ID и Server ID. Где искать ID в PUBG, смотрите в <a href=\"/blog/pubg-mobile-player-id-qayerda\">этой инструкции</a>. Пароль не спрашивайте, он не нужен.",
            "Выберите в боте игру и пакет.",
            "Введите ID. Бот найдёт и покажет ник, привязанный к этому ID.",
            "Сверьте ник с ником тиммейта. Если совпадает, оплатите в сумах.",
            "Валюта придёт автоматически за 1–5 минут. Попросите тиммейта перезапустить игру и проверить баланс.",
          ],
        },
        {
          t: "p",
          text: "Не пропускайте проверку ника. В отряде часто встречаются похожие ники, а одна неверная цифра в ID отправит валюту незнакомому игроку. Валюта, которая уже пришла на счёт, не возвращается.",
        },
        {
          t: "h2",
          id: "sovga-yetmasa-yoki-xato-ketsa",
          text: "Что делать, если подарок не дошёл или ушёл не туда?",
        },
        {
          t: "p",
          text: "Частые ситуации и что с ними делать:",
        },
        {
          t: "list",
          items: [
            "<strong>Подарок в Telegram не доходит до тиммейта.</strong> Чаще всего дело в настройках конфиденциальности получателя: у него закрыт приём некоторых видов подарков. Что проверить, рассказано <a href=\"/blog/jamoadoshga-sovga-yuborib-bolmayapti-sabab\">в этой статье</a>.",
            "<strong>Ошибка в username или ID.</strong> Если валюта пришла на чужой аккаунт, её не вернуть. Поэтому перед оплатой ещё раз сверьте ник и username.",
            "<strong>Деньги списались, а заказ не выполнен.</strong> В этом случае деньги полностью вернут в течение 3 рабочих дней. Не платите повторно, сначала отправьте в поддержку номер заказа.",
            "<strong>UC не видно и через 5 минут.</strong> Перезапустите игру и проверьте баланс. Если UC так и нет, напишите в поддержку и укажите номер заказа.",
          ],
        },
        {
          t: "h2",
          id: "klan-chatidagi-tugilgan-kun-aksiyasi",
          text: "Можно ли верить «акции на день рождения» в чате клана?",
        },
        {
          t: "p",
          text: "Нет, если нет официального подтверждения. После новости о громком подарке в чатах становится больше предложений вроде «дешёвый NFT», «акция Дурова» или «бот-гарант». Цель у них обычно одна: получить деньги вперёд или секретные данные.",
        },
        {
          t: "note",
          tone: "warn",
          text: "Чтобы сделать подарок, хватит @username или Player ID. Если у вас просят код Telegram, игровой пароль или ключ кошелька либо предлагают заранее перевести TON или другую криптовалюту на незнакомый адрес, это признак мошенничества.",
        },
        {
          t: "p",
          text: "Другие признаки таких предложений разобраны в <a href=\"/blog/durov-tugilgan-kuni-aksiyasi-firibgarlik-oyinchi\">отдельной статье</a>. Самый безопасный способ поздравить тиммейта: возьмите username или ID у него самого, оплатите в сумах и перед оплатой проверьте ник.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Plush Pepe #834 (Fragment)",
              href: "https://fragment.com/gift/plushpepe-834",
            },
            {
              label: "Wear Collectible Gifts, Move Gifts to the Blockchain… (Telegram blog)",
              href: "https://telegram.org/blog/wear-gifts-blockchain-and-more",
            },
            {
              label: "Gift Marketplace, Posting Several Stories at Once… (Telegram blog)",
              href: "https://telegram.org/blog/gift-marketplace-and-more",
            },
            {
              label: "Telegram Gifts (API)",
              href: "https://core.telegram.org/api/gifts",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Можно подарить тиммейту Premium на 1 месяц?",
          a: "В GemPay такого тарифа нет, можно выбрать 3, 6 или 12 месяцев. Цена одинаковая при любом способе оплаты.",
        },
        {
          q: "Сможет ли тиммейт потом поменять Stars на UC или алмазы?",
          a: "Нет, в игровую валюту Stars не превращаются. Если ему нужны UC или алмазы, покупайте их сразу на его Player ID.",
        },
        {
          q: "Хочу сделать сюрприз: как узнать ID тиммейта?",
          a: "Спросите ID у лидера клана или общего друга. Пароль совсем не нужен. Бот покажет ник по ID, так что вы ещё до оплаты увидите, тот ли это человек.",
        },
        {
          q: "Можно купить коллекционный подарок через GemPay?",
          a: "Нет, GemPay продаёт игровую валюту, Stars и Premium. Если подарить тиммейту Stars, он сможет сам выбрать понравившийся подарок на внутреннем маркетплейсе.",
        },
        {
          q: "Что делать, если у тиммейта нет username в Telegram?",
          a: "Stars и Premium отправляются по @username, поэтому сначала ему нужно задать username в настройках. Если хотите сделать сюрприз, купите ему UC или алмазы по Player ID.",
        },
        {
          q: "Может ли оформить подарок участник клана, который работает в России?",
          a: "Да, из России можно платить через СБП. От получателя нужен @username для Stars и Premium или Player ID для игровой валюты.",
        },
      ],
    },
  },
};

export default article;
