// Avtoblogyoz yasagan maqola (2026-11-16). Niyat: Klandoshiga sotuvdan olingan eski Telegram sovg‘asini yubora olmagan va STARGIFT_INVALID xatosini ko‘rgan o‘yinchi «eski sovg‘a jamoadoshga yuborilmayapti» deb qidiradi. U xato sababini va uning o‘rniga jamoadoshga nima berish mumkinligini bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/blog/gifts-verification-platform
//   https://core.telegram.org/api/gifts
//   https://core.telegram.org/method/payments.getStarGifts
//   https://core.telegram.org/method/payments.getPaymentForm
//   https://core.telegram.org/constructor/starGift

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "jamoadoshga-eski-sovga-stargift-invalid",
  game: null,
  type: "problem",
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  keywords: ["eski sovg'a jamoadoshga yuborilmayapti","STARGIFT_INVALID xatosi","telegram sovg'a yuborilmayapti","sotuvdan olingan sovg'ani yuborish","telegram yashirin sovg'a xato","jamoadoshga telegram sovg'a","STARGIFT_INVALID что значит","не отправляется подарок телеграм","скрытые подарки телеграм ошибка","старый подарок telegram не отправляется","подарок снят с продажи telegram"],
  locales: {
    uz: {
      title: "Eski sovg‘a klandoshga ketmayapti: STARGIFT_INVALID sababi va o‘rniga nima",
      metaTitle: "Eski sovg‘a klandoshga ketmayapti",
      metaDescription: "STARGIFT_INVALID Telegram tanlangan sovg‘ani yaroqsiz deb topganini bildiradi, lekin aniq sababini aytmaydi.",
      excerpt: "STARGIFT_INVALID Telegram tanlangan sovg‘ani yaroqsiz deb topganini bildiradi, lekin aniq sababini aytmaydi. Klandoshga uning o‘rniga Stars, Premium yoki UC bering.",
      answer: "STARGIFT_INVALID Telegram tanlangan sovg‘ani yaroqsiz deb topganini bildiradi, lekin aniq sababini aytmaydi. Klandoshga uning o‘rniga Stars, Premium yoki UC bering.",
      body: [
        {
          t: "h2",
          id: "stargift-invalid-telegram-eski-sovgani",
          text: "STARGIFT_INVALID: Telegram eski sovg‘ani nega o‘tkazmayapti?",
        },
        {
          t: "p",
          text: "Bu xato Telegram tanlangan sovg‘ani hozir sotib olib yuborishga yaroqsiz deb hisoblaganini bildiradi. Texnik hujjatda uning tavsifi bitta gapdan iborat: «The passed gift is invalid» (<a href=\"https://core.telegram.org/method/payments.getPaymentForm\" target=\"_blank\" rel=\"noopener\">payments.getPaymentForm</a>). Sotuv tugaganmi, limitga yetilganmi yoki boshqa sababmi — xatoning o‘zi buni aytmaydi.",
        },
        {
          t: "p",
          text: "Xuddi shu sahifada «sovg‘a topilmadi» degan alohida xato ham bor. Demak, STARGIFT_INVALID ni «bunday sovg‘a yo‘q» deb emas, «bu sovg‘ani hozir oddiy yo‘l bilan olib bo‘lmayapti» deb tushungan ma’qul.",
        },
        {
          t: "p",
          text: "Oddiy misol: klaningiz turnirda g‘alaba qozondi, siz esa kapitanga avval sotuvdan olingan sovg‘ani yubormoqchisiz. Telegram xato qaytaradi, ammo hozir ro‘yxatda turgan sovg‘a o‘sha kapitanga bemalol ketadi. Bunday holatda muammo sizning hisobingizda emas, aynan o‘sha sovg‘ada.",
        },
        {
          t: "h3",
          text: "Kanallardagi post haqida",
        },
        {
          t: "p",
          text: "Ba’zi Telegram kanallarida «sotuvdan olingan cheksiz sovg‘alarni yuborish yopildi» degan post tarqaldi. Rasmiy e’lon ham, o‘zgarishlar ro‘yxatida yozuv ham topilmadi. Xato aynan shunday sovg‘alarda chiqishi rasman tasdiqlanmagan, Telegram buning sababini ham tushuntirmagan. Postni hozircha tekshirilmagan gap deb qabul qiling.",
        },
        {
          t: "p",
          text: "Xato matnida akkaunt cheklangani haqida hech narsa yo‘q. Gap faqat bitta sovg‘a haqida.",
        },
        {
          t: "h2",
          id: "muammo-sovgadami-yoki-klandoshdami-hujjatdagi",
          text: "Muammo sovg‘adami yoki klandoshdami: hujjatdagi to‘siqlar",
        },
        {
          t: "p",
          text: "Telegram texnik hujjatlarida sovg‘ani sotib olishga to‘sqinlik qiladigan bir nechta shart yozilgan (<a href=\"https://core.telegram.org/constructor/starGift\" target=\"_blank\" rel=\"noopener\">starGift</a>, <a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">Telegram Gifts</a>). Ular ilovada qanday ko‘rinishi hujjatda tasvirlanmagan, lekin ma’nosini bilsangiz, sababni toraytirish osonlashadi.",
        },
        {
          t: "table",
          head: [
            "Hujjatdagi shart",
            "Amalda nimani anglatadi",
            "O‘yinchi nima qiladi",
          ],
          rows: [
            [
              "Sovg‘a sotilib tugagan",
              "Uni endi hech kim sotib ololmaydi",
              "Hozir sotuvda bor dizaynni tanlang",
            ],
            [
              "Cheklangan miqdorda chiqarilgan",
              "Yana nechtasini olish mumkinligi hisoblanadi, qoldiq tugashi mumkin",
              "Qoldiq tugagan bo‘lsa, qayta urinishdan foyda yo‘q",
            ],
            [
              "Bir foydalanuvchiga limit qo‘yilgan",
              "Ulushingiz tugagan bo‘lsa, siz boshqa ololmaysiz",
              "Limit foydalanuvchiga qarab hisoblanadi: boshqa klandoshda sotib olish imkoni bor-yo‘qligini ilovada tekshiring",
            ],
            [
              "Belgilangan sanagacha yopiq",
              "Bu sovg‘ani shu sanagacha yuborib bo‘lmasligi mumkin",
              "Sanani kuting yoki boshqa sovg‘ani tanlang",
            ],
            [
              "Faqat Premium uchun",
              "Premiumsiz foydalanuvchi uni sotib ololmaydi",
              "Premium bo‘lmasa, oddiy sovg‘ani oling",
            ],
          ],
        },
        {
          t: "p",
          text: "Bu shartlarning hammasi sovg‘aning o‘ziga tegishli. Agar shu klandoshga hech qanday sovg‘a ketmasa, sabab uning tomonida bo‘lishi mumkin, masalan, sovg‘a qabul qilish sozlamalarida. Bu holat <a href=\"/blog/jamoadoshga-sovga-yuborib-bolmayapti-sabab\">jamoadoshga sovg‘a nega bormasligi</a> haqidagi maqolada alohida ko‘rib chiqilgan.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "turnir-yoki-tugilgan-kungacha-vaqt",
          text: "Turnir yoki tug‘ilgan kungacha vaqt kam: 5 qadamli tekshiruv",
        },
        {
          t: "p",
          text: "Tadbir yaqin bo‘lsa, taxmin qilib o‘tirmang — quyidagi tartibda tekshiring:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Sovg‘ani rasmiy yo‘l bilan yuboring: klandosh profilini oching va <strong>⋮ / ⋯ &gt; Send a Gift</strong> ni bosing (<a href=\"https://telegram.org/blog/gifts-verification-platform\" target=\"_blank\" rel=\"noopener\">Telegram blogi</a>).",
            "Kerakli dizayn hozirgi sovg‘alar ro‘yxatida bormi, qarang. Hujjatga ko‘ra, ilova mavjud sovg‘alar ro‘yxatini oladi (<a href=\"https://core.telegram.org/method/payments.getStarGifts\" target=\"_blank\" rel=\"noopener\">payments.getStarGifts</a>). Dizayn u yerda bo‘lmasa, uni yangidan sotib olib yuborish ehtimoli kam.",
            "Sovg‘a ma’lumotini oching: cheklangan miqdor, sana yoki Premium talabi haqida yozuv bor-yo‘qligini tekshiring.",
            "Nazorat sinovini qiling: ro‘yxatdagi boshqa sovg‘ani shu klandoshga yuborib ko‘ring. Ketsa, muammo eski sovg‘ada. Ketmasa, oluvchi tomonini tekshiring.",
            "Tugmani qayta-qayta bosmang. Xato oynasini skrinshot qiling va Stars balansingizni ko‘rib chiqing.",
          ],
        },
        {
          t: "p",
          text: "To‘rtinchi qadam eng ko‘p vaqtni tejaydi: bitta sinov bilan aybdor sovg‘ami yoki sozlamami — shuni bilib olasiz.",
        },
        {
          t: "h2",
          id: "xatodan-keyin-stars-balansini-tekshirish",
          text: "Xatodan keyin Stars balansini tekshirish kerakmi?",
        },
        {
          t: "p",
          text: "Hujjatga ko‘ra, sovg‘a xaridi to‘lov formasini so‘rashdan boshlanadi. STARGIFT_INVALID aynan shu bosqich xatolari orasida turadi (<a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">Telegram Gifts</a>, <a href=\"https://core.telegram.org/method/payments.getPaymentForm\" target=\"_blank\" rel=\"noopener\">payments.getPaymentForm</a>). Ya’ni xato xaridning eng boshida qaytadi. Shunday bo‘lsa ham, balansni bir marta tekshirib qo‘yish foydali.",
        },
        {
          t: "note",
          tone: "info",
          text: "Telegram ichidagi sovg‘a xaridlari uchun pul qaytarish qoidalari bu maqolada tasdiqlanmagan. Stars kamaygan bo‘lsa, Telegram yordam xizmatiga murojaat qiling. GemPay Telegram ichidagi sovg‘a do‘koni xaridlarini ko‘ra olmaydi va ularga javob bermaydi.",
        },
        {
          t: "h2",
          id: "klandoshga-eski-dizayn-orniga-nima",
          text: "Klandoshga eski dizayn o‘rniga nima berish: Stars, Premium yoki UC",
        },
        {
          t: "p",
          text: "Eski sovg‘a ketmasa, tadbir bekor bo‘lmaydi. Klandoshingiz ko‘proq nimaga vaqt sarflashiga qarab tanlang:",
        },
        {
          t: "table",
          head: [
            "Variant",
            "Sizdan nima kerak",
            "Qachon tushadi",
            "Kimga mos",
          ],
          rows: [
            [
              "Telegram Stars",
              "Faqat @username, bir buyurtmada 50 dan 10 000 tagacha",
              "Bir necha soniyada",
              "Sovg‘ani o‘zi tanlashni yoqtiradigan klandoshga",
            ],
            [
              "Telegram Premium",
              "Faqat @username, akkauntga kirilmaydi",
              "Bir necha soniyada faollashadi",
              "Klan chati va turnir kanallarida faol jamoadoshga",
            ],
            [
              "UC, MLBB va Free Fire olmosi, CODM CP",
              "Faqat Player ID, nik oldindan ko‘rsatiladi",
              "1–5 daqiqada",
              "Har kuni o‘ynaydigan klandoshga",
            ],
            [
              "Telegram’dagi boshqa sovg‘a",
              "Profil orqali Send a Gift",
              "Telegram ichida yuboriladi",
              "Aynan Telegram sovg‘asini kutgan jamoadoshga",
            ],
          ],
        },
        {
          t: "p",
          text: `GemPay’da 1 ta Stars karta o‘tkazmasi (UzCard, HUMO) yoki bot balansidan to‘lansa ${som(STARS_UNIT_CARD, "uz")}, Click yoki Uzum Bank orqali onlayn to‘lansa ${som(STARS_UNIT_ONLINE, "uz")} turadi. Buyurtma qanday beriladi va qaysi xatolardan qochish kerak — <a href="/blog/telegram-stars-sotib-olish-gempay">GemPay’da Stars sotib olish</a> maqolasida yozilgan.`,
        },
        {
          t: "p",
          text: `Premium Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi: 3 oyligi ${som(premium(3), "uz")}, 6 oyligi ${som(premium(6), "uz")}, 12 oyligi ${som(premium(12), "uz")}. 1 oylik tarif yo‘q. Obunaning squad chatida qaysi funksiyalari haqiqatan kerakligi <a href="/blog/telegram-premium-oyinchi-uchun">Premium o‘yinchiga nima berishi</a> haqidagi maqolada tushuntirilgan.`,
        },
        {
          t: "p",
          text: "Stars o‘yin valyutasiga aylanmaydi. Klandoshga Royale Pass yoki skin uchun pul kerak bo‘lsa, Stars emas, to‘g‘ridan-to‘g‘ri UC yoki olmos bering. Turli vaziyatlar uchun qaysi sovg‘a qulayligi <a href=\"/blog/jamoadosh-tugilgan-kuniga-telegram-sovga\">jamoadoshning tug‘ilgan kuni uchun sovg‘a</a> maqolasida taqqoslangan.",
        },
        {
          t: "h2",
          id: "jamoadoshga-sovga-yoqmasa-uni-starsga",
          text: "Jamoadoshga sovg‘a yoqmasa, uni Stars’ga qaytara oladimi?",
        },
        {
          t: "p",
          text: "Oddiy sovg‘ani olgan odam uni saqlab qo‘yishi shart emas. Telegram blogiga ko‘ra, u sovg‘adan voz kechib, uning Stars’idan bir qismini boshqa narsaga sarflashi mumkin (<a href=\"https://telegram.org/blog/gifts-verification-platform\" target=\"_blank\" rel=\"noopener\">Telegram blogi</a>). Qancha qismi qaytishi bu maqolada tasdiqlanmagan.",
        },
        {
          t: "p",
          text: "Shuning uchun dizayn klandosh uchun unchalik muhim bo‘lmasa, hozir sotuvdagi sovg‘a ham, to‘g‘ridan-to‘g‘ri Stars ham yaxshi tanlov. Ikkala holatda ham u nimaga sarflashni o‘zi hal qiladi. U aynan eski dizaynni istasa ham, uni notanish odam yoki bot orqali «tiklash» yo‘lini izlamang.",
        },
        {
          t: "h2",
          id: "klan-chatida-eski-sovgani-tiklab",
          text: "Klan chatida «eski sovg‘ani tiklab beraman» deganlarga nega ishonmaslik kerak",
        },
        {
          t: "p",
          text: "Rasmiy manbalarda sotuvdan olingan sovg‘ani yuborishning boshqa yo‘li yozilmagan. Texnik hujjatda sovg‘ani «yashirin» yoki «sotuvdan olingan» deb belgilaydigan alohida xususiyat ham topilmadi. Demak, «men qila olaman» degan va’dani tekshirishning iloji yo‘q.",
        },
        {
          t: "p",
          text: "Quyidagilardan biri so‘ralsa, suhbatni to‘xtating:",
        },
        {
          t: "list",
          items: [
            "oldindan Stars, so‘m yoki kripto yuborish;",
            "Telegram kirish kodi yoki ikki bosqichli tekshiruv paroli;",
            "PUBG, MLBB yoki boshqa o‘yin akkauntining paroli;",
            "notanish «garant» bot orqali hisob-kitob;",
            "hamyonning maxfiy so‘zlari yoki kalitlari.",
          ],
        },
        {
          t: "p",
          text: "Bunday takliflar odatda qanday ko‘rinishi <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">o‘yin chatidagi gift takliflari</a> maqolasida ko‘rsatilgan. Chatda sotiladigan arzon Stars keyin balansdan yechilishi mumkinligi esa <a href=\"/blog/arzon-stars-refund-sxemasi-oyinchi-xavfi\">refund sxemasi</a> haqidagi maqolada yozilgan. GemPay faqat @username yoki Player ID so‘raydi, parolni hech qachon so‘ramaydi.",
        },
        {
          t: "h2",
          id: "gempay-botida-klandoshga-uc-stars",
          text: "GemPay botida klandoshga UC, Stars yoki Premium yuborish tartibi",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "<a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>’ni oching.",
            "Bo‘limni tanlang: Stars, Premium yoki kerakli o‘yin.",
            "Klandoshning @username’ini yoki Player ID’sini kiriting. O‘yin uchun bot nikni ko‘rsatadi: u aynan sizning klandoshingizniki ekanini tekshirib, keyin tasdiqlang.",
            "So‘mda UzCard, HUMO, Click, Uzum Bank yoki bot balansi orqali to‘lang. Visa va Mastercard qabul qilinmaydi, xorijiy karta va VPN kerak emas.",
            "Buyurtma kelmasa, buyurtma raqami bilan <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>’ga yozing. Bajarilmagan buyurtma puli 3 ish kuni ichida to‘liq qaytariladi, hisobga tushgan valyuta esa qaytarilmaydi. Shartlar: <a href=\"https://www.gempay.uz/tolov-va-qaytarish\">To‘lov va qaytarish</a>.",
          ],
        },
        {
          t: "p",
          text: "GemPay mustaqil xizmat, Telegram yoki o‘yin ishlab chiquvchilarining hamkori emas. Telegram ichidagi sovg‘a do‘koniga ta’sir qila olmaydi: u faqat Stars, Premium va o‘yin valyutasini yetkazib beradi.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Gifts, Verification Platform and More",
              href: "https://telegram.org/blog/gifts-verification-platform",
            },
            {
              label: "Telegram Gifts",
              href: "https://core.telegram.org/api/gifts",
            },
            {
              label: "payments.getStarGifts",
              href: "https://core.telegram.org/method/payments.getStarGifts",
            },
            {
              label: "payments.getPaymentForm",
              href: "https://core.telegram.org/method/payments.getPaymentForm",
            },
            {
              label: "starGift",
              href: "https://core.telegram.org/constructor/starGift",
            },
          ],
        },
      ],
      faq: [
        {
          q: "STARGIFT_INVALID chiqqandan keyin klan chatida yozish yoki botlardan foydalanish to‘xtaydimi?",
          a: "Yo‘q, bunga asos yo‘q: xato tavsifi faqat tanlangan sovg‘a haqida gapiradi. Xabarlar va botlar odatdagidek ishlayotgan bo‘lsa, faqat boshqa sovg‘ani tanlash kifoya.",
        },
        {
          q: "Telegram’ni qayta o‘rnatsam yoki boshqa telefondan kirsam, eski sovg‘a ketadimi?",
          a: "Bunga umid qilmang. Hujjatda yozilgan to‘siqlar sovg‘aning o‘ziga tegishli, qurilmaga bog‘liqligi esa hech qayerda aytilmagan.",
        },
        {
          q: "Kanalda «yuborish yana ochildi» degan post chiqsa, qanday tekshiraman?",
          a: "Telegram’ning rasmiy blogiga qarang yoki klandosh profilidagi Send a Gift orqali shu dizaynni o‘zingiz tanlab ko‘ring. Faqat kanal postiga ishonib, pul yoki Stars sarflamang.",
        },
        {
          q: "Jamoadoshga Stars yuborsam, u bilan UC ola oladimi?",
          a: "Yo‘q, Stars Telegram ichida ishlatiladi va UC yoki olmosga almashtirilmaydi. O‘yin uchun sovg‘a qilmoqchi bo‘lsangiz, Player ID orqali to‘g‘ridan-to‘g‘ri UC oling.",
        },
        {
          q: "Turnir g‘oliblarining bir nechtasiga Premium bera olamanmi?",
          a: "Ha, Premium har bir klandoshning @username’i orqali ulanadi. Bir nechta odam uchun buyurtmani qanday berish kerakligini botda ko‘ring va har bir username’ni to‘lovdan oldin tekshiring.",
        },
        {
          q: "UC sovg‘a qilish uchun klandoshdan nima so‘rash kerak?",
          a: "Faqat uning Player ID’sini so‘rang, paroli yoki kirish kodi kerak emas. Bot to‘lovdan oldin nikni ko‘rsatadi, shunda adashganingizni darhol bilasiz.",
        },
      ],
    },
    ru: {
      title: "Старый подарок в Telegram не отправляется соклановцу: STARGIFT_INVALID",
      metaTitle: "Старый подарок в Telegram не отправляется соклановцу",
      metaDescription: "STARGIFT_INVALID значит, что Telegram счёл выбранный подарок недействительным, но причину не называет. Подарите соклановцу Stars, Premium или UC.",
      excerpt: "STARGIFT_INVALID значит, что Telegram счёл выбранный подарок недействительным, но причину не называет. Подарите соклановцу Stars, Premium или UC.",
      answer: "STARGIFT_INVALID значит, что Telegram счёл выбранный подарок недействительным, но причину не называет. Подарите соклановцу Stars, Premium или UC.",
      body: [
        {
          t: "h2",
          id: "stargift-invalid-telegram-eski-sovgani",
          text: "STARGIFT_INVALID: почему Telegram не отправляет старый подарок?",
        },
        {
          t: "p",
          text: "Эта ошибка означает, что Telegram считает выбранный подарок непригодным для покупки и отправки прямо сейчас. В технической документации её описание занимает одну фразу: «The passed gift is invalid» (<a href=\"https://core.telegram.org/method/payments.getPaymentForm\" target=\"_blank\" rel=\"noopener\">payments.getPaymentForm</a>). Закончилась ли продажа, исчерпан ли лимит или дело в чём-то ещё — из самой ошибки этого не узнать.",
        },
        {
          t: "p",
          text: "На той же странице есть отдельная ошибка «подарок не найден». Поэтому STARGIFT_INVALID лучше понимать не как «такого подарка нет», а как «этот подарок сейчас нельзя купить обычным способом».",
        },
        {
          t: "p",
          text: "Простой пример: ваш клан выиграл турнир, и вы хотите отправить капитану подарок, который раньше сняли с продажи. Telegram выдаёт ошибку, а подарок из текущего списка уходит тому же капитану без проблем. Значит, дело не в вашем аккаунте, а именно в этом подарке.",
        },
        {
          t: "h3",
          text: "Что с постом из каналов",
        },
        {
          t: "p",
          text: "В некоторых Telegram-каналах разошёлся пост о том, что отправку снятых с продажи безлимитных подарков закрыли. Ни официального объявления, ни записи в списке изменений найти не удалось. То, что ошибка появляется именно на таких подарках, официально не подтверждено, причину Telegram тоже не объяснял. Пока считайте этот пост непроверенным.",
        },
        {
          t: "p",
          text: "В тексте ошибки нет ни слова об ограничении аккаунта. Речь идёт только об одном подарке.",
        },
        {
          t: "h2",
          id: "muammo-sovgadami-yoki-klandoshdami-hujjatdagi",
          text: "Проблема в подарке или в соклановце: какие препятствия описаны в документации",
        },
        {
          t: "p",
          text: "В технической документации Telegram перечислено несколько условий, из-за которых подарок нельзя купить (<a href=\"https://core.telegram.org/constructor/starGift\" target=\"_blank\" rel=\"noopener\">starGift</a>, <a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">Telegram Gifts</a>). Как они выглядят в приложении, там не описано, но если понимать их смысл, причину сузить проще.",
        },
        {
          t: "table",
          head: [
            "Условие в документации",
            "Что это значит на практике",
            "Что делать игроку",
          ],
          rows: [
            [
              "Подарок распродан",
              "Его больше никто не может купить",
              "Выберите дизайн, который сейчас есть в продаже",
            ],
            [
              "Выпущен ограниченным тиражом",
              "Считается, сколько ещё можно купить, остаток может закончиться",
              "Если остаток кончился, повторять попытку бесполезно",
            ],
            [
              "Лимит на одного пользователя",
              "Если ваша квота исчерпана, вы больше не купите",
              "Лимит считается по пользователю: проверьте в приложении, можно ли купить его для другого соклановца",
            ],
            [
              "Закрыт до определённой даты",
              "До этой даты подарок, возможно, нельзя отправить",
              "Дождитесь даты или выберите другой подарок",
            ],
            [
              "Только для Premium",
              "Пользователь без Premium его не купит",
              "Если Premium нет, возьмите обычный подарок",
            ],
          ],
        },
        {
          t: "p",
          text: "Все эти условия относятся к самому подарку. Если этому соклановцу не уходит вообще никакой подарок, причина может быть на его стороне, например в настройках приёма подарков. Этот случай отдельно разобран в статье о том, <a href=\"/blog/jamoadoshga-sovga-yuborib-bolmayapti-sabab\">почему подарок не доходит до тиммейта</a>.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "turnir-yoki-tugilgan-kungacha-vaqt",
          text: "До турнира или дня рождения мало времени: проверка в 5 шагов",
        },
        {
          t: "p",
          text: "Если событие близко, не гадайте — проверьте по порядку:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Отправьте подарок официальным способом: откройте профиль соклановца и нажмите <strong>⋮ / ⋯ &gt; Send a Gift</strong> (<a href=\"https://telegram.org/blog/gifts-verification-platform\" target=\"_blank\" rel=\"noopener\">блог Telegram</a>).",
            "Посмотрите, есть ли нужный дизайн в текущем списке подарков. Согласно документации, приложение получает список доступных подарков (<a href=\"https://core.telegram.org/method/payments.getStarGifts\" target=\"_blank\" rel=\"noopener\">payments.getStarGifts</a>). Если дизайна там нет, купить и отправить его заново вряд ли получится.",
            "Откройте информацию о подарке: проверьте, нет ли пометки об ограниченном тираже, дате или требовании Premium.",
            "Сделайте контрольную проверку: отправьте этому же соклановцу другой подарок из списка. Ушёл — проблема в старом подарке. Не ушёл — проверяйте сторону получателя.",
            "Не жмите кнопку снова и снова. Сделайте скриншот ошибки и посмотрите баланс Stars.",
          ],
        },
        {
          t: "p",
          text: "Четвёртый шаг экономит больше всего времени: одна проверка показывает, виноват подарок или настройки.",
        },
        {
          t: "h2",
          id: "xatodan-keyin-stars-balansini-tekshirish",
          text: "Нужно ли проверять баланс Stars после ошибки?",
        },
        {
          t: "p",
          text: "Согласно документации, покупка подарка начинается с запроса платёжной формы. STARGIFT_INVALID входит в список ошибок именно этого этапа (<a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">Telegram Gifts</a>, <a href=\"https://core.telegram.org/method/payments.getPaymentForm\" target=\"_blank\" rel=\"noopener\">payments.getPaymentForm</a>). То есть ошибка возвращается в самом начале покупки. И всё же один раз проверить баланс не помешает.",
        },
        {
          t: "note",
          tone: "info",
          text: "Правила возврата за покупки подарков внутри Telegram в этой статье не подтверждены. Если Stars списались, обратитесь в поддержку Telegram. GemPay не видит покупки во внутреннем магазине подарков Telegram и не отвечает за них.",
        },
        {
          t: "h2",
          id: "klandoshga-eski-dizayn-orniga-nima",
          text: "Что подарить соклановцу вместо старого дизайна: Stars, Premium или UC",
        },
        {
          t: "p",
          text: "Если старый подарок не уходит, праздник не отменяется. Выбирайте по тому, на что соклановец тратит больше времени:",
        },
        {
          t: "table",
          head: [
            "Вариант",
            "Что нужно от вас",
            "Когда приходит",
            "Кому подойдёт",
          ],
          rows: [
            [
              "Telegram Stars",
              "Только @username, за один заказ от 50 до 10 000 штук",
              "За несколько секунд",
              "Соклановцу, который любит сам выбирать подарки",
            ],
            [
              "Telegram Premium",
              "Только @username, вход в аккаунт не нужен",
              "Активируется за несколько секунд",
              "Тиммейту, активному в чате клана и турнирных каналах",
            ],
            [
              "UC, алмазы MLBB и Free Fire, CP в CODM",
              "Только Player ID, ник показывается заранее",
              "За 1–5 минут",
              "Соклановцу, который играет каждый день",
            ],
            [
              "Другой подарок в Telegram",
              "Send a Gift через профиль",
              "Отправляется внутри Telegram",
              "Тиммейту, который ждёт именно подарок в Telegram",
            ],
          ],
        },
        {
          t: "p",
          text: `В GemPay 1 Stars стоит ${som(STARS_UNIT_CARD, "ru")} при переводе с карты (UzCard, HUMO) или оплате с баланса бота и ${som(STARS_UNIT_ONLINE, "ru")} при онлайн-оплате через Click или Uzum Bank. Как оформить заказ и каких ошибок избежать, описано в статье <a href="/blog/telegram-stars-sotib-olish-gempay">о покупке Stars в GemPay</a>.`,
        },
        {
          t: "p",
          text: `Premium подключается через официальный механизм подарков Telegram: 3 месяца — ${som(premium(3), "ru")}, 6 месяцев — ${som(premium(6), "ru")}, 12 месяцев — ${som(premium(12), "ru")}. Тарифа на 1 месяц нет. Какие функции подписки действительно нужны в чате сквада, объясняется в статье о том, <a href="/blog/telegram-premium-oyinchi-uchun">что Premium даёт игроку</a>.`,
        },
        {
          t: "p",
          text: "Stars не превращаются в игровую валюту. Если соклановцу нужны деньги на Royale Pass или скин, дарите не Stars, а сразу UC или алмазы. Какой подарок удобнее в разных ситуациях, сравнивается в статье <a href=\"/blog/jamoadosh-tugilgan-kuniga-telegram-sovga\">о подарке тиммейту на день рождения</a>.",
        },
        {
          t: "h2",
          id: "jamoadoshga-sovga-yoqmasa-uni-starsga",
          text: "Если подарок не понравился тиммейту, может ли он вернуть его в Stars?",
        },
        {
          t: "p",
          text: "Получатель обычного подарка не обязан его хранить. Согласно блогу Telegram, он может отказаться от подарка и получить часть его Stars, чтобы потратить на что-то другое (<a href=\"https://telegram.org/blog/gifts-verification-platform\" target=\"_blank\" rel=\"noopener\">блог Telegram</a>). Какая именно часть возвращается, в этой статье не подтверждено.",
        },
        {
          t: "p",
          text: "Поэтому, если дизайн для соклановца не так важен, хорошим выбором будут и подарок из текущей продажи, и просто Stars. В обоих случаях он сам решит, на что их потратить. Даже если ему нужен именно старый дизайн, не ищите способ «восстановить» его через незнакомцев или ботов.",
        },
        {
          t: "h2",
          id: "klan-chatida-eski-sovgani-tiklab",
          text: "Почему не стоит верить тем, кто в чате клана обещает «восстановить старый подарок»",
        },
        {
          t: "p",
          text: "В официальных источниках другого способа отправить снятый с продажи подарок не описано. В технической документации не нашлось и отдельного признака, который помечал бы подарок как «скрытый» или «снятый с продажи». Значит, обещание «я смогу» проверить невозможно.",
        },
        {
          t: "p",
          text: "Прекращайте разговор, если у вас просят что-то из этого:",
        },
        {
          t: "list",
          items: [
            "заранее перевести Stars, сумы или криптовалюту;",
            "код входа в Telegram или пароль двухэтапной проверки;",
            "пароль от аккаунта PUBG, MLBB или другой игры;",
            "расчёт через незнакомого бота-«гаранта»;",
            "секретные слова или ключи от кошелька.",
          ],
        },
        {
          t: "p",
          text: "Как обычно выглядят такие предложения, показано в статье <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">о предложениях гифтов в игровом чате</a>. А о том, что дешёвые Stars из чата потом могут списать с баланса, написано в статье <a href=\"/blog/arzon-stars-refund-sxemasi-oyinchi-xavfi\">о схеме с рефандом</a>. GemPay просит только @username или Player ID и никогда не спрашивает пароль.",
        },
        {
          t: "h2",
          id: "gempay-botida-klandoshga-uc-stars",
          text: "Как отправить соклановцу UC, Stars или Premium через бот GemPay",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Откройте <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>.",
            "Выберите раздел: Stars, Premium или нужную игру.",
            "Введите @username или Player ID соклановца. Для игры бот покажет ник: убедитесь, что это именно ваш соклановец, и только потом подтверждайте.",
            "Оплатите в сумах через UzCard, HUMO, Click, Uzum Bank или с баланса бота. Visa и Mastercard не принимаются, иностранная карта и VPN не нужны.",
            "Если заказ не пришёл, напишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> с номером заказа. За невыполненный заказ деньги возвращаются полностью в течение 3 рабочих дней, а зачисленная на счёт валюта не возвращается. Условия: <a href=\"https://www.gempay.uz/tolov-va-qaytarish\">Оплата и возврат</a>.",
          ],
        },
        {
          t: "p",
          text: "GemPay — независимый сервис и не является партнёром Telegram или разработчиков игр. На внутренний магазин подарков Telegram он повлиять не может: сервис доставляет только Stars, Premium и игровую валюту.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Gifts, Verification Platform and More",
              href: "https://telegram.org/blog/gifts-verification-platform",
            },
            {
              label: "Telegram Gifts",
              href: "https://core.telegram.org/api/gifts",
            },
            {
              label: "payments.getStarGifts",
              href: "https://core.telegram.org/method/payments.getStarGifts",
            },
            {
              label: "payments.getPaymentForm",
              href: "https://core.telegram.org/method/payments.getPaymentForm",
            },
            {
              label: "starGift",
              href: "https://core.telegram.org/constructor/starGift",
            },
          ],
        },
      ],
      faq: [
        {
          q: "После STARGIFT_INVALID перестанут работать сообщения в чате клана или боты?",
          a: "Нет, оснований так думать нет: описание ошибки касается только выбранного подарка. Если сообщения и боты работают как обычно, достаточно выбрать другой подарок.",
        },
        {
          q: "Если переустановить Telegram или зайти с другого телефона, старый подарок отправится?",
          a: "На это лучше не рассчитывать. Ограничения из документации относятся к самому подарку, а о зависимости от устройства там ничего не сказано.",
        },
        {
          q: "В канале написали, что «отправку снова открыли». Как это проверить?",
          a: "Загляните в официальный блог Telegram или сами попробуйте выбрать этот дизайн через Send a Gift в профиле соклановца. Не тратьте деньги или Stars, опираясь только на пост в канале.",
        },
        {
          q: "Если я отправлю тиммейту Stars, сможет ли он купить на них UC?",
          a: "Нет, Stars тратятся внутри Telegram и не обмениваются на UC или алмазы. Если хотите сделать игровой подарок, покупайте UC сразу по Player ID.",
        },
        {
          q: "Можно ли подарить Premium сразу нескольким победителям турнира?",
          a: "Да, Premium подключается по @username каждого соклановца. Как оформить заказ на несколько человек, смотрите в боте и проверяйте каждый username до оплаты.",
        },
        {
          q: "Что спросить у соклановца, чтобы подарить ему UC?",
          a: "Только его Player ID — пароль и код входа не нужны. Перед оплатой бот покажет ник, так что ошибку вы заметите сразу.",
        },
      ],
    },
  },
};

export default article;
