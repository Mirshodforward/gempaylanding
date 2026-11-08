// Avtoblogyoz yasagan maqola (2026-11-08). Niyat: O‘zbekistondagi o‘yinchi jamoadoshi yoki boshqa foydalanuvchiga Telegram sovg‘a, Stars yoki Premium yubormoqchi bo‘lib, «telegram sovg‘a yuborib bo‘lmayapti» deb qidiradi. U sababni, ya’ni oluvchining maxfiylik sozlamasini, va boshqa yo‘lni bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://core.telegram.org/api/privacy
//   https://core.telegram.org/constructor/globalPrivacySettings
//   https://core.telegram.org/api/gifts

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "jamoadoshga-sovga-yuborib-bolmayapti-sabab",
  game: null,
  type: "problem",
  datePublished: "2026-11-08",
  dateModified: "2026-11-08",
  keywords: ["telegram sovg‘a yuborib bo‘lmayapti","telegramda sovg‘a yuborilmayapti","jamoadoshga telegram sovg‘a yuborish","telegram sovg‘a cheklangan","telegram podarok yuborib bo‘lmayapti","telegram maxfiylik sozlamasi sovg‘a","не могу отправить подарок в телеграм","телеграм подарок не отправляется","пользователь запретил подарки телеграм","как подарить telegram premium другу","telegram stars sovg‘a qilish","подарки телеграм настройки приватности"],
  locales: {
    uz: {
      title: "Telegram sovg‘a yuborib bo‘lmayapti: jamoadoshga nega bormaydi?",
      metaTitle: "Telegram sovg‘a yuborib bo‘lmayapti",
      metaDescription: "Ko‘pincha sabab oluvchida: u maxfiylik sozlamalarida ayrim sovg‘a turlarini qabul qilishni yopgan. Cheklovni faqat uning o‘zi olib tashlay oladi.",
      excerpt: "Ko‘pincha sabab oluvchida: u maxfiylik sozlamalarida ayrim sovg‘a turlarini qabul qilishni yopgan. Cheklovni faqat uning o‘zi olib tashlay oladi.",
      answer: "Ko‘pincha sabab oluvchida: u maxfiylik sozlamalarida ayrim sovg‘a turlarini qabul qilishni yopgan. Cheklovni faqat uning o‘zi olib tashlay oladi.",
      body: [
        {
          t: "p",
          text: "Klan jamoadoshingizga g‘alaba sharafiga sovg‘a yubormoqchisiz, lekin Telegram uni o‘tkazmayapti. Ko‘p hollarda bunga kartangiz ham, Stars balansingiz ham sabab emas. Jamoadosh maxfiylik sozlamalarida ayrim sovg‘a turlarini qabul qilishni yopib qo‘ygan bo‘ladi. Quyida sababni qanday aniqlash, kim nimani tuzatishi va sovg‘a o‘tmasa qanday boshqa yo‘l borligi yozilgan.",
        },
        {
          t: "h2",
          id: "nega-jamoadoshga-telegram-sovga-yuborib",
          text: "Nega jamoadoshga Telegram sovg‘a yuborib bo‘lmayapti?",
        },
        {
          t: "p",
          text: "Telegram har bir foydalanuvchiga kim u bilan qanday muloqot qila olishini alohida belgilash imkonini beradi (<a href=\"https://core.telegram.org/api/privacy\" target=\"_blank\" rel=\"noopener\">maxfiylik sozlamalari hujjati</a>). Shu sozlamalar ichida muayyan turdagi sovg‘alarni qabul qilishni taqiqlaydigan maydon bor (<a href=\"https://core.telegram.org/constructor/globalPrivacySettings\" target=\"_blank\" rel=\"noopener\">globalPrivacySettings</a>). Jamoadosh uni yoqqan bo‘lsa, siz tanlagan sovg‘a unga yetib bormaydi.",
        },
        {
          t: "p",
          text: "Bu cheklov yashirin emas. <a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">Telegram Gifts hujjatiga</a> ko‘ra, oluvchi qaysi sovg‘a turlarini olmasligini o‘zi belgilaydi va bu ma’lumot boshqa foydalanuvchilarga ko‘rinadi. Shuning uchun ilova sovg‘ani yubora olmasligingizni oldindan ko‘rsatishi mumkin.",
        },
        {
          t: "p",
          text: "Demak, tekshiruvni o‘zingizdan emas, oluvchi tomondan boshlang. Bu holatda kartani almashtirish yoki Stars’ni qayta sotib olish yordam bermaydi: eshik oluvchi tomonda yopilgan.",
        },
        {
          t: "h2",
          id: "sabab-sizdami-yoki-oluvchidami-tezkor",
          text: "Sabab sizdami yoki oluvchidami: tezkor tekshiruv jadvali",
        },
        {
          t: "p",
          text: "Sovg‘a ketmasa, vaziyatni quyidagi jadval bilan solishtiring. Oxirgi ustun kim harakat qilishi kerakligini ko‘rsatadi.",
        },
        {
          t: "table",
          head: [
            "Nima bo‘lyapti",
            "Ehtimoliy sabab",
            "Kim tuzatadi",
          ],
          rows: [
            [
              "Faqat bitta jamoadoshga sovg‘a ketmaydi, boshqalarga ketadi",
              "Oluvchi bu sovg‘a turini qabul qilishni taqiqlagan",
              "Faqat oluvchi, o‘z sozlamasida",
            ],
            [
              "Ayrim sovg‘alar Premium obunasini so‘raydi",
              "Sovg‘a Premium talab qiladi, sizda obuna yo‘q",
              "Siz: Premium olasiz yoki boshqa sovg‘a tanlaysiz",
            ],
            [
              "Klan kanaliga sovg‘a yuborib bo‘lmaydi",
              "Kanalda sovg‘alar yoqilmagan",
              "Kanal tomoni",
            ],
            [
              "Ilovada sovg‘alar bo‘limi umuman yo‘q",
              "Funksiya ilova konfiguratsiyasida o‘chirilgan bo‘lishi mumkin",
              "Foydalanuvchiga bog‘liq emas",
            ],
            [
              "Sovg‘a tanlanadi, lekin xarid yakunlanmaydi",
              "Stars balansi yetmayotgan bo‘lishi mumkin",
              "Siz: balansni tekshirasiz va to‘ldirasiz",
            ],
          ],
        },
        {
          t: "p",
          text: "Premium talabi, kanal sharti va konfiguratsiya bayrog‘i (stargifts_blocked) <a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">Telegram Gifts</a> hujjatida yozilgan. Muammo faqat bitta odamda bo‘lsa, deyarli doim birinchi qator to‘g‘ri keladi.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "jamoadoshga-nima-deb-yozish-kerak",
          text: "Jamoadoshga nima deb yozish kerak?",
        },
        {
          t: "p",
          text: "Cheklovni faqat oluvchi olib tashlay oladi, shuning uchun unga qisqa va aniq yozing. Masalan:",
        },
        {
          t: "note",
          tone: "info",
          text: "«Senga sovg‘a yubormoqchi edim, lekin Telegram o‘tkazmayapti. Maxfiylik sozlamalaringda sovg‘alar bo‘limini bir ko‘rib chiqsang. Xohlamasang ham mayli, boshqacha yo‘l topaman.»",
        },
        {
          t: "p",
          text: "Menyuning aniq yo‘li va band nomlari bu maqolada tasdiqlanmagan. Qaysi sovg‘a turlarini aynan cheklash mumkinligi ham tasdiqlanmagan. Shuning uchun taxmin bilan «falon turini yoq» deb yozmang: jamoadosh ekranda nimalar borligini o‘zi ko‘radi.",
        },
        {
          t: "p",
          text: "Jamoadosh sovg‘alarni ataylab yopgan bo‘lishi ham mumkin. Masalan, u turnir paytida chalg‘imaslikni xohlaydi yoki profilini toza saqlaydi. Bunday holatda bosim o‘tkazmang, quyidagi boshqa variantlardan foydalaning.",
        },
        {
          t: "h2",
          id: "jamoadosh-sozlamani-ozgartirgandan-keyin-nima",
          text: "Jamoadosh sozlamani o‘zgartirgandan keyin nima qilish kerak?",
        },
        {
          t: "p",
          text: "Maxfiylik sozlamasi o‘zgarganda Telegram yangilanishni akkauntning hozir kirib turgan barcha seanslariga yuboradi (<a href=\"https://core.telegram.org/api/privacy\" target=\"_blank\" rel=\"noopener\">manba</a>). Ya’ni sozlama qaysi qurilmada o‘zgartirilgan bo‘lsa ham, uning boshqa ochiq seanslari bundan xabar topadi.",
        },
        {
          t: "p",
          text: "Siz tomonda chat yoki profilni qayta ochib, sovg‘ani yana tanlab ko‘ring. Cheklov hamon ko‘rinsa, jamoadosh siz tanlagan turni emas, boshqasini ochgan bo‘lishi mumkin. Unga qaysi sovg‘ani tanlaganingizni ayting yoki u ochgan turdagi sovg‘ani tanlang.",
        },
        {
          t: "h2",
          id: "chatda-sovga-tugmasi-yoq-bolsa",
          text: "Chatda sovg‘a tugmasi yo‘q bo‘lsa, sovg‘ani qayerdan yuborish mumkin?",
        },
        {
          t: "p",
          text: "Telegram hujjatida shunday shart bor: ikkala foydalanuvchida ham display_gifts_button bayrog‘i yoqilgan bo‘lsa, shaxsiy chatning matn maydonida sovg‘a tugmasi doim turishi kerak (<a href=\"https://core.telegram.org/constructor/globalPrivacySettings\" target=\"_blank\" rel=\"noopener\">globalPrivacySettings</a>). Bayroq faqat bir tomonda yoqilgan bo‘lsa, tugma chiqmasligi mumkin.",
        },
        {
          t: "p",
          text: "Shuning uchun tugma yo‘qligi har doim taqiqni bildirmaydi. Ko‘pincha faqat tezkor tugma ko‘rsatilmayotgan bo‘ladi.",
        },
        {
          t: "p",
          text: "Ilova ishlab chiquvchilari uchun ko‘rsatmada sovg‘a oynasi sozlamalardagi «Send a Gift» bandi va chat tanlash oynasi orqali har doim ochilishi kerakligi aytilgan (<a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">Telegram Gifts</a>). Bu dasturchilarga qo‘yilgan talab, rasmiy ilova menyusining tavsifi emas. Sozlamalarda sovg‘a bandini qidirib ko‘rish mumkin, lekin uni jamoadosh qo‘ygan cheklovni chetlab o‘tish yo‘li deb hisoblamang: cheklov baribir amal qiladi.",
        },
        {
          t: "h2",
          id: "klan-sovgasini-yuborishdan-oldin-nimani",
          text: "Klan sovg‘asini yuborishdan oldin nimani tekshirish kerak: 5 qadam",
        },
        {
          t: "steps",
          items: [
            {
              title: "Oluvchini aniqlang",
              text: "Jamoadoshning @username’ini so‘rab oling va akkaunt o‘sha odamniki ekanini tekshiring. Klan chatida bir xil teg bilan boshlanadigan niklar ko‘p, adashish oson.",
            },
            {
              title: "Cheklovni ko‘ring",
              text: "Sovg‘a cheklovi boshqa foydalanuvchilarga ko‘rinadi, shuning uchun sovg‘a oynasida u bu turni olmasligi ko‘rsatilishi mumkin.",
            },
            {
              title: "Premium talabini tekshiring",
              text: "Tanlangan sovg‘a Premium so‘rasa va sizda obuna bo‘lmasa, boshqa sovg‘a tanlang yoki avval obunani ulang.",
            },
            {
              title: "Kanalga yuborsangiz, sozlamani aniqlang",
              text: "Klan kanaliga sovg‘a faqat kanalda sovg‘alar yoqilgan bo‘lsa boradi.",
            },
            {
              title: "Stars balansini tekshiring",
              text: "Balans kam bo‘lsa, <a href=\"/blog/telegram-stars-sotib-olish-gempay\">Telegram Stars sotib olish</a> qo‘llanmasida so‘mda to‘ldirish tartibi bor.",
            },
          ],
        },
        {
          t: "p",
          text: "Besh qadamdan keyin ham sovg‘a ketmasa, jamoadoshga to‘g‘ridan-to‘g‘ri yozing: cheklovni faqat u olib tashlay oladi.",
        },
        {
          t: "h2",
          id: "sovga-otmasa-jamoadoshni-boshqacha-qanday",
          text: "Sovg‘a o‘tmasa, jamoadoshni boshqacha qanday xursand qilish mumkin?",
        },
        {
          t: "p",
          text: "Jamoadosh sovg‘alarni yopgan bo‘lsa, uni sozlamani ochishga majburlash shart emas. Boshqa variantlar ham bor.",
        },
        {
          t: "list",
          items: [
            `<strong>Telegram Premium.</strong> GemPay’da Premium @username bo‘yicha Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi. Bunda akkauntga kirilmaydi, obuna bir necha soniyada faollashadi. Narxlar: 3 oy — ${som(premium(3), "uz")}, 6 oy — ${som(premium(6), "uz")}, 12 oy — ${som(premium(12), "uz")}. Narx hamma to‘lov usulida bir xil, 1 oylik tarif yo‘q. Obuna o‘yinchiga nima berishi <a href="/blog/telegram-premium-oyinchi-uchun">Premium o‘yinchiga nima beradi</a> maqolasida yozilgan.`,
            `<strong>Telegram Stars.</strong> Faqat @username kerak. 1 ta Stars narxi karta o‘tkazmasi yoki bot balansidan ${som(STARS_UNIT_CARD, "uz")}, Click yoki Uzum Bank orqali ${som(STARS_UNIT_ONLINE, "uz")}. Bir buyurtmada 50 dan 10 000 tagacha olish mumkin, yulduzlar bir necha soniyada tushadi.`,
            "<strong>O‘yin valyutasi.</strong> UC, olmos yoki CP Player ID bo‘yicha tushadi, parol hech qachon so‘ralmaydi. Nik tekshirib ko‘rsatiladi, valyuta 1–5 daqiqada avtomatik keladi. Tartib <a href=\"/blog/oyinlarga-donat-qilish-gempay\">o‘yinlarga donat qilish</a> qo‘llanmasida yozilgan.",
          ],
        },
        {
          t: "p",
          text: "Jamoadosh qo‘ygan sovg‘a cheklovi Premium sovg‘asiga qanday ta’sir qilishi bu maqolada tasdiqlanmagan. Buyurtmadan oldin <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>’da tekshiring. Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi.",
        },
        {
          t: "p",
          text: "Stars o‘yin valyutasiga aylanmaydi. Jamoadoshga UC kerak bo‘lsa, unga Stars emas, to‘g‘ridan-to‘g‘ri donat qiling.",
        },
        {
          t: "p",
          text: "To‘lov uchun UzCard, HUMO, Click, Uzum Bank yoki bot balansi ishlaydi. Visa va Mastercard qabul qilinmaydi, xorijiy karta, VPN yoki kripto kerak emas. GemPay mustaqil xizmat va Telegram bilan hamkorlik da’vo qilmaydi.",
        },
        {
          t: "h2",
          id: "yuborilgan-sovga-bilan-oluvchi-nima",
          text: "Yuborilgan sovg‘a bilan oluvchi nima qila oladi?",
        },
        {
          t: "p",
          text: "Sovg‘a o‘tgandan keyin u bilan nima qilishni oluvchi hal qiladi. <a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">Telegram Gifts</a> hujjatiga ko‘ra:",
        },
        {
          t: "list",
          items: [
            "oluvchi sovg‘ani profilida ko‘rsatishi yoki Telegram Stars’ga aylantirishi mumkin;",
            "sovg‘a uning maxfiylik sozlamasiga qarab profilda avtomatik chiqishi ham mumkin;",
            "Stars’ga aylantirish faqat belgilangan muddat ichida ishlaydi;",
            "aylantirilganda olinadigan Stars sovg‘aning sotib olingan narxidan kam bo‘ladi;",
            "kolleksion sovg‘alarning kim oshdi savdosida olingan sovg‘alarni Stars’ga aylantirib bo‘lmaydi.",
          ],
        },
        {
          t: "p",
          text: "Ismingizni yashirib yuborsangiz ham, jamoadosh sovg‘ani kim yuborganini ko‘radi. Yashirish faqat sovg‘a uning profilida ko‘rsatilganda ishlaydi: begonalar ismingizni ko‘rmaydi.",
        },
        {
          t: "p",
          text: "Klanga kolleksion sovg‘a bermoqchi bo‘lsangiz, undagi ma’lumotlar haqida <a href=\"/blog/nft-sovga-imzosi-stars-oyinchi\">NFT sovg‘a imzosi</a> maqolasini o‘qing.",
        },
        {
          t: "h2",
          id: "sovga-yopilgan-pul-bersangiz-ochamiz",
          text: "«Sovg‘a yopilgan, pul bersangiz ochamiz» degan taklif kelsa-chi?",
        },
        {
          t: "p",
          text: "Bunday taklifni rad eting. Sovg‘a sozlamasi oluvchining o‘z maxfiylik sozlamalarida turadi va uni faqat u o‘zgartira oladi. Uchinchi shaxs pul evaziga uni «ochib» bera olmaydi.",
        },
        {
          t: "p",
          text: "«Durov tug‘ilgan kuni munosabati bilan Stars tarqatyapti» kabi xabarlar ham rasmiy manbada tasdiqlanmagan. Ularning qanday aldovga aylanishi <a href=\"/blog/durov-tugilgan-kuni-aksiyasi-firibgarlik-oyinchi\">Durov tug‘ilgan kuni aksiyasi</a> maqolasida tahlil qilingan.",
        },
        {
          t: "note",
          tone: "info",
          text: "Kod, parol yoki oldindan to‘lov so‘ralsa, suhbatni darhol to‘xtating. GemPay Stars va Premium uchun faqat @username, o‘yinlar uchun faqat Player ID so‘raydi, parol hech qachon so‘ralmaydi.",
        },
        {
          t: "p",
          text: "Buyurtma bo‘yicha savol bo‘lsa, <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>’ga buyurtma raqami bilan yozing. Bajarilmagan buyurtma puli 3 ish kuni ichida qaytariladi, hisobga tushgan valyuta esa qaytarilmaydi.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Privacy settings",
              href: "https://core.telegram.org/api/privacy",
            },
            {
              label: "globalPrivacySettings",
              href: "https://core.telegram.org/constructor/globalPrivacySettings",
            },
            {
              label: "Telegram Gifts",
              href: "https://core.telegram.org/api/gifts",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Jamoadosh sovg‘alarni yopgan bo‘lsa, unga Premium sovg‘a qilsa bo‘ladimi?",
          a: "GemPay Premium’ni @username bo‘yicha Telegram’ning rasmiy sovg‘a mexanizmi orqali ulaydi. Sovg‘a cheklovi bunga ta’sir qilish-qilmasligi tasdiqlanmagan, shuning uchun avval botda tekshiring. Buyurtma bajarilmasa, pul 3 ish kuni ichida qaytariladi.",
        },
        {
          q: "Jamoadosh sovg‘ani cheklaganini qayerdan bilaman?",
          a: "Telegram bu sozlamani boshqa foydalanuvchilarga ochiq qiladi, shuning uchun ilova cheklovni sovg‘a tanlash paytida ko‘rsatishi mumkin. Ekrandagi aniq ko‘rinishi tasdiqlanmagan, eng ishonchli yo‘l — jamoadoshning o‘zidan so‘rash.",
        },
        {
          q: "Nega ba’zi sovg‘alar Premium obunasini so‘raydi?",
          a: "Telegram ayrim sovg‘alarni faqat Premium obunachilari yuborishi uchun belgilaydi. Obunangiz bo‘lmasa, boshqa sovg‘a tanlang yoki avval Premium ulang.",
        },
        {
          q: "Sovg‘a ketmasa, Stars balansimdan pul yechiladimi?",
          a: "Bu holat bo‘yicha Telegram qoidasi tasdiqlanmagan. Stars balansingiz va tranzaksiyalar tarixini Telegram’ning o‘zida tekshiring. GemPay buyurtmasi bo‘yicha savol bo‘lsa, @StarsPaymeeSupport’ga buyurtma raqami bilan yozing.",
        },
        {
          q: "Jamoadosh «ochdim» dedi, lekin sovg‘a hali ham o‘tmayapti — sabab nima?",
          a: "U siz tanlagan turni emas, boshqa sovg‘a turini ochgan bo‘lishi mumkin. Sabab Premium talabi yoki Stars yetishmasligi ham bo‘lishi mumkin. Chatni qayta ochib, boshqa sovg‘ani sinab ko‘ring.",
        },
        {
          q: "Klan kanaliga sovg‘a yuborsa bo‘ladimi?",
          a: "Ha, lekin faqat kanalda sovg‘alar yoqilgan bo‘lsa. Aks holda sovg‘ani kanal egasining yoki jamoadoshning shaxsiy akkauntiga yuborish mumkin.",
        },
        {
          q: "Telegram Stars’ni UC yoki olmosga almashtirsa bo‘ladimi?",
          a: "Yo‘q, Stars o‘yin valyutasiga aylanmaydi. UC, olmos yoki CP @Gempayuz_bot’da Player ID bo‘yicha alohida olinadi va 1–5 daqiqada tushadi.",
        },
      ],
    },
    ru: {
      title: "Не отправляется подарок в Telegram: почему тиммейт его не получает?",
      metaTitle: "Не отправляется подарок в Telegram",
      metaDescription: "Чаще всего причина у получателя: он запретил приём некоторых типов подарков в настройках конфиденциальности. Снять это ограничение может только он сам.",
      excerpt: "Чаще всего причина у получателя: он запретил приём некоторых типов подарков в настройках конфиденциальности. Снять это ограничение может только он сам.",
      answer: "Чаще всего причина у получателя: он запретил приём некоторых типов подарков в настройках конфиденциальности. Снять это ограничение может только он сам.",
      body: [
        {
          t: "p",
          text: "Вы хотите отправить тиммейту из клана подарок в честь победы, но Telegram его не пропускает. Чаще всего дело не в вашей карте и не в балансе Stars. Скорее всего, тиммейт запретил приём некоторых типов подарков в настройках конфиденциальности. Ниже разобрано, как найти причину, кто что должен исправить и как порадовать человека, если подарок так и не проходит.",
        },
        {
          t: "h2",
          id: "nega-jamoadoshga-telegram-sovga-yuborib",
          text: "Почему подарок в Telegram не доходит до тиммейта?",
        },
        {
          t: "p",
          text: "Telegram позволяет каждому пользователю отдельно настроить, кто и как может с ним взаимодействовать (<a href=\"https://core.telegram.org/api/privacy\" target=\"_blank\" rel=\"noopener\">документация по настройкам конфиденциальности</a>). Среди этих настроек есть поле, которое запрещает приём подарков определённых типов (<a href=\"https://core.telegram.org/constructor/globalPrivacySettings\" target=\"_blank\" rel=\"noopener\">globalPrivacySettings</a>). Если тиммейт его включил, выбранный вами подарок до него не дойдёт.",
        },
        {
          t: "p",
          text: "Это ограничение не скрыто. Согласно <a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">документации Telegram Gifts</a>, получатель сам указывает, какие типы подарков он не принимает, и эта информация видна другим пользователям. Поэтому приложение может заранее показать, что отправить подарок не получится.",
        },
        {
          t: "p",
          text: "Значит, начинать проверку стоит не с себя, а с получателя. Сменить карту или заново купить Stars здесь не поможет: дверь закрыта на его стороне.",
        },
        {
          t: "h2",
          id: "sabab-sizdami-yoki-oluvchidami-tezkor",
          text: "Причина у вас или у получателя: таблица быстрой проверки",
        },
        {
          t: "p",
          text: "Если подарок не уходит, сверьте ситуацию с таблицей. Последний столбец показывает, кому нужно действовать.",
        },
        {
          t: "table",
          head: [
            "Что происходит",
            "Вероятная причина",
            "Кто исправляет",
          ],
          rows: [
            [
              "Подарок не уходит только одному тиммейту, остальным — уходит",
              "Получатель запретил приём этого типа подарков",
              "Только получатель, в своих настройках",
            ],
            [
              "Некоторые подарки требуют подписку Premium",
              "Подарок доступен только с Premium, а у вас подписки нет",
              "Вы: оформляете Premium или выбираете другой подарок",
            ],
            [
              "Не получается отправить подарок в канал клана",
              "В канале не включены подарки",
              "Сторона канала",
            ],
            [
              "В приложении вообще нет раздела подарков",
              "Функция может быть отключена в конфигурации приложения",
              "От пользователя не зависит",
            ],
            [
              "Подарок выбирается, но покупка не завершается",
              "Возможно, не хватает Stars на балансе",
              "Вы: проверяете баланс и пополняете его",
            ],
          ],
        },
        {
          t: "p",
          text: "Требование Premium, условие для каналов и флаг конфигурации (stargifts_blocked) описаны в документации <a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">Telegram Gifts</a>. Если проблема только с одним человеком, почти всегда подходит первая строка.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "jamoadoshga-nima-deb-yozish-kerak",
          text: "Что написать тиммейту?",
        },
        {
          t: "p",
          text: "Снять ограничение может только получатель, поэтому напишите ему коротко и по делу. Например:",
        },
        {
          t: "note",
          tone: "info",
          text: "«Хотел отправить тебе подарок, но Telegram его не пропускает. Глянь, пожалуйста, раздел подарков в настройках конфиденциальности. Если не хочешь — ничего страшного, придумаю что-нибудь другое».",
        },
        {
          t: "p",
          text: "Точный путь в меню и названия пунктов в этой статье не подтверждены. Какие именно типы подарков можно ограничить — тоже не подтверждено. Поэтому не пишите наугад «включи такой-то тип»: тиммейт сам увидит, что у него на экране.",
        },
        {
          t: "p",
          text: "Возможно, тиммейт закрыл подарки намеренно. Например, не хочет отвлекаться во время турнира или держит профиль в чистоте. В таком случае не давите — воспользуйтесь вариантами ниже.",
        },
        {
          t: "h2",
          id: "jamoadosh-sozlamani-ozgartirgandan-keyin-nima",
          text: "Что делать после того, как тиммейт изменил настройку?",
        },
        {
          t: "p",
          text: "Когда настройка конфиденциальности меняется, Telegram отправляет обновление во все сеансы аккаунта, в которых сейчас выполнен вход (<a href=\"https://core.telegram.org/api/privacy\" target=\"_blank\" rel=\"noopener\">источник</a>). То есть на каком бы устройстве настройку ни изменили, остальные открытые сеансы об этом узнают.",
        },
        {
          t: "p",
          text: "На своей стороне заново откройте чат или профиль и снова выберите подарок. Если ограничение всё ещё видно, возможно, тиммейт открыл не тот тип, который выбрали вы, а другой. Скажите ему, какой подарок вы выбрали, или выберите подарок из открытого им типа.",
        },
        {
          t: "h2",
          id: "chatda-sovga-tugmasi-yoq-bolsa",
          text: "Нет кнопки подарка в чате: откуда ещё можно отправить подарок?",
        },
        {
          t: "p",
          text: "В документации Telegram есть условие: если у обоих пользователей включён флаг display_gifts_button, в поле ввода личного чата всегда должна отображаться кнопка подарка (<a href=\"https://core.telegram.org/constructor/globalPrivacySettings\" target=\"_blank\" rel=\"noopener\">globalPrivacySettings</a>). Если флаг включён только у одного, кнопки может не быть.",
        },
        {
          t: "p",
          text: "Поэтому отсутствие кнопки не всегда означает запрет. Часто просто не показывается быстрая кнопка.",
        },
        {
          t: "p",
          text: "В рекомендациях для разработчиков приложений сказано, что окно подарков всегда должно открываться через пункт «Send a Gift» в настройках и окно выбора чата (<a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">Telegram Gifts</a>). Это требование к разработчикам, а не описание меню официального приложения. Поискать пункт подарков в настройках можно, но не считайте его способом обойти ограничение тиммейта: оно всё равно действует.",
        },
        {
          t: "h2",
          id: "klan-sovgasini-yuborishdan-oldin-nimani",
          text: "Что проверить перед отправкой подарка для клана: 5 шагов",
        },
        {
          t: "steps",
          items: [
            {
              title: "Уточните получателя",
              text: "Попросите у тиммейта @username и убедитесь, что аккаунт принадлежит именно ему. В клановом чате много ников с одинаковым тегом в начале — перепутать легко.",
            },
            {
              title: "Посмотрите на ограничение",
              text: "Ограничение на подарки видно другим пользователям, поэтому в окне подарка может отображаться, что этот тип он не принимает.",
            },
            {
              title: "Проверьте требование Premium",
              text: "Если выбранный подарок требует Premium, а подписки у вас нет, выберите другой подарок или сначала подключите подписку.",
            },
            {
              title: "Отправляете в канал — уточните настройку",
              text: "Подарок дойдёт в канал клана, только если в канале включены подарки.",
            },
            {
              title: "Проверьте баланс Stars",
              text: "Если его мало, порядок пополнения в сумах описан в инструкции <a href=\"/blog/telegram-stars-sotib-olish-gempay\">как купить Telegram Stars</a>.",
            },
          ],
        },
        {
          t: "p",
          text: "Если и после пяти шагов подарок не уходит, напишите тиммейту напрямую: снять ограничение может только он.",
        },
        {
          t: "h2",
          id: "sovga-otmasa-jamoadoshni-boshqacha-qanday",
          text: "Подарок не проходит: чем ещё порадовать тиммейта?",
        },
        {
          t: "p",
          text: "Если тиммейт закрыл подарки, уговаривать его открыть настройку не обязательно. Есть и другие варианты.",
        },
        {
          t: "list",
          items: [
            `<strong>Telegram Premium.</strong> В GemPay Premium подключается по @username через официальный механизм подарков Telegram. Вход в аккаунт не нужен, подписка активируется за несколько секунд. Цены: 3 месяца — ${som(premium(3), "ru")}, 6 месяцев — ${som(premium(6), "ru")}, 12 месяцев — ${som(premium(12), "ru")}. Цена одинакова при любом способе оплаты, тарифа на 1 месяц нет. Что подписка даёт игроку, разобрано в статье <a href="/blog/telegram-premium-oyinchi-uchun">что Premium даёт игроку</a>.`,
            `<strong>Telegram Stars.</strong> Нужен только @username. Цена 1 Stars — ${som(STARS_UNIT_CARD, "ru")} при переводе с карты или с баланса бота, ${som(STARS_UNIT_ONLINE, "ru")} через Click или Uzum Bank. За один заказ можно купить от 50 до 10 000 звёзд, они приходят за несколько секунд.`,
            "<strong>Игровая валюта.</strong> UC, алмазы или CP зачисляются по Player ID, пароль никогда не запрашивается. Ник проверяется и показывается заранее, валюта приходит автоматически за 1–5 минут. Порядок описан в инструкции <a href=\"/blog/oyinlarga-donat-qilish-gempay\">как задонатить в игры</a>.",
          ],
        },
        {
          t: "p",
          text: "Как ограничение на подарки, установленное тиммейтом, влияет на подарок Premium, в этой статье не подтверждено. Перед заказом уточните в <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>. Если заказ не выполнен, деньги полностью возвращаются в течение 3 рабочих дней.",
        },
        {
          t: "p",
          text: "Stars не превращаются в игровую валюту. Если тиммейту нужны UC, дарите не Stars, а сразу донат.",
        },
        {
          t: "p",
          text: "Для оплаты подходят UzCard, HUMO, Click, Uzum Bank или баланс бота. Visa и Mastercard не принимаются, иностранная карта, VPN или криптовалюта не нужны. GemPay — независимый сервис и не заявляет о сотрудничестве с Telegram.",
        },
        {
          t: "h2",
          id: "yuborilgan-sovga-bilan-oluvchi-nima",
          text: "Что получатель может сделать с отправленным подарком?",
        },
        {
          t: "p",
          text: "Когда подарок дошёл, что с ним делать, решает получатель. Согласно документации <a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">Telegram Gifts</a>:",
        },
        {
          t: "list",
          items: [
            "получатель может показать подарок в профиле или превратить его в Telegram Stars;",
            "подарок может появиться в профиле автоматически — в зависимости от настроек конфиденциальности получателя;",
            "обменять подарок на Stars можно только в течение установленного срока;",
            "при обмене получается меньше Stars, чем стоил подарок при покупке;",
            "подарки, полученные на аукционах коллекционных подарков, нельзя превратить в Stars.",
          ],
        },
        {
          t: "p",
          text: "Даже если вы скроете своё имя, тиммейт увидит, кто отправил подарок. Скрытие работает только тогда, когда подарок показан в его профиле: посторонние вашего имени не увидят.",
        },
        {
          t: "p",
          text: "Если хотите подарить клану коллекционный подарок, прочитайте о данных на нём в статье <a href=\"/blog/nft-sovga-imzosi-stars-oyinchi\">подпись NFT-подарка</a>.",
        },
        {
          t: "h2",
          id: "sovga-yopilgan-pul-bersangiz-ochamiz",
          text: "Предложение «подарки закрыты, заплатите — откроем»: что делать?",
        },
        {
          t: "p",
          text: "Отказывайтесь. Настройка подарков находится в собственных настройках конфиденциальности получателя, и изменить её может только он. Третье лицо не может «открыть» её за деньги.",
        },
        {
          t: "p",
          text: "Сообщения вроде «Дуров раздаёт Stars в честь дня рождения» тоже не подтверждены официальными источниками. Как они превращаются в обман, разобрано в статье <a href=\"/blog/durov-tugilgan-kuni-aksiyasi-firibgarlik-oyinchi\">акция на день рождения Дурова</a>.",
        },
        {
          t: "note",
          tone: "info",
          text: "Если просят код, пароль или предоплату, сразу прекращайте разговор. GemPay запрашивает только @username для Stars и Premium и только Player ID для игр, пароль никогда не запрашивается.",
        },
        {
          t: "p",
          text: "Если есть вопрос по заказу, напишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> с номером заказа. Деньги за невыполненный заказ возвращаются в течение 3 рабочих дней, а зачисленная на счёт валюта не возвращается.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Privacy settings",
              href: "https://core.telegram.org/api/privacy",
            },
            {
              label: "globalPrivacySettings",
              href: "https://core.telegram.org/constructor/globalPrivacySettings",
            },
            {
              label: "Telegram Gifts",
              href: "https://core.telegram.org/api/gifts",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Тиммейт закрыл подарки — можно ли подарить ему Premium?",
          a: "GemPay подключает Premium по @username через официальный механизм подарков Telegram. Влияет ли на это ограничение подарков, не подтверждено, поэтому сначала уточните в боте. Если заказ не выполнится, деньги вернутся в течение 3 рабочих дней.",
        },
        {
          q: "Как понять, что тиммейт ограничил подарки?",
          a: "Telegram делает эту настройку видимой для других, поэтому приложение может показать ограничение при выборе подарка. Как именно это выглядит на экране, не подтверждено — надёжнее всего спросить у самого тиммейта.",
        },
        {
          q: "Почему некоторые подарки требуют Premium?",
          a: "Telegram помечает часть подарков как доступные для отправки только подписчикам Premium. Без подписки выберите другой подарок или сначала оформите Premium.",
        },
        {
          q: "Если подарок не ушёл, спишутся ли Stars с баланса?",
          a: "Правило Telegram для такого случая не подтверждено. Проверьте баланс Stars и историю транзакций в самом Telegram. По заказу в GemPay пишите в @StarsPaymeeSupport с номером заказа.",
        },
        {
          q: "Тиммейт говорит, что открыл подарки, но они всё равно не проходят. В чём дело?",
          a: "Возможно, он открыл другой тип подарков, а не тот, что выбрали вы. Причиной может быть и требование Premium или нехватка Stars. Переоткройте чат и попробуйте другой подарок.",
        },
        {
          q: "Можно ли отправить подарок в канал клана?",
          a: "Да, но только если в канале включены подарки. Иначе подарок можно отправить на личный аккаунт владельца канала или тиммейта.",
        },
        {
          q: "Можно ли обменять Telegram Stars на UC или алмазы?",
          a: "Нет, Stars не превращаются в игровую валюту. UC, алмазы или CP покупаются отдельно в @Gempayuz_bot по Player ID и приходят за 1–5 минут.",
        },
      ],
    },
  },
};

export default article;
