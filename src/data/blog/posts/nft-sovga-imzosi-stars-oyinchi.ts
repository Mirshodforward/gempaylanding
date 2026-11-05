// Avtoblogyoz yasagan maqola (2026-11-05). Niyat: Jamoadoshidan NFT sovg'a olgan yoki klan a'zosiga sovg'a qilmoqchi bo'lgan o'yinchi sovg'adagi imzo va izohni Stars bilan olib tashlash mumkinmi, necha yulduz kerakligini «nft sovg'a imzosini olib tashlash stars» kabi so'zlar bilan qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://core.telegram.org/type/InputInvoice
//   https://core.telegram.org/api/gifts
//   https://core.telegram.org/constructor/savedStarGift
//   https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_upgraded_gift.html
//   https://core.telegram.org/constructor/starGiftAttributeOriginalDetails
//   https://core.telegram.org/constructor/starsTransaction

import type { Article } from "../types";
import { STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const article: Article = {
  slug: "nft-sovga-imzosi-stars-oyinchi",
  game: null,
  type: "info",
  datePublished: "2026-11-05",
  dateModified: "2026-11-05",
  keywords: ["nft sovg'a imzosini olib tashlash stars","nft sovg'a imzosi","telegram sovg'a izohini olib tashlash","kolleksion sovg'a asl ma'lumotlar","nft sovg'a imzo necha stars","telegram stars sotib olish so'mda","удалить подпись с nft подарка telegram","удаление подписи с подарка за звезды","сколько стоит удалить подпись nft подарка","оригинальные данные подарка telegram","подпись на подарке telegram убрать"],
  locales: {
    uz: {
      title: "NFT sovg‘a imzosini Stars bilan olib tashlash: klan sovg‘asida nima qoladi?",
      metaTitle: "NFT sovg‘a imzosini Stars bilan olib tashlash",
      metaDescription: "Ha, kolleksion sovg‘adagi asl ma’lumotlarni faqat oluvchi Stars to‘lab olib tashlay oladi. Narx hujjatda yo‘q: summani sovg‘a oynasida Telegram ko‘rsatadi.",
      excerpt: "Ha, kolleksion sovg‘adagi asl ma’lumotlarni faqat oluvchi Stars to‘lab olib tashlay oladi. Narx hujjatda yo‘q: summani sovg‘a oynasida Telegram ko‘rsatadi.",
      answer: "Ha, kolleksion sovg‘adagi asl ma’lumotlarni faqat oluvchi Stars to‘lab olib tashlay oladi. Narx hujjatda yo‘q: summani sovg‘a oynasida Telegram ko‘rsatadi.",
      body: [
        {
          t: "h2",
          id: "jamoadosh-yuborgan-nft-sovgadagi-imzoni",
          text: "Jamoadosh yuborgan NFT sovg‘adagi imzoni Stars bilan olib tashlasa bo‘ladimi?",
        },
        {
          t: "p",
          text: "Ha. Telegram’da kolleksion (NFT) sovg‘adan asl ma’lumotlarni olib tashlash uchun alohida pullik amal bor va u Telegram Stars bilan to‘lanadi. Bu Telegram API hujjatlaridagi <a href=\"https://core.telegram.org/type/InputInvoice\" target=\"_blank\" rel=\"noopener\">InputInvoice</a> va <a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">Gifts</a> sahifalarida tavsiflangan.",
        },
        {
          t: "p",
          text: "O‘yinchilar orasida bu yozuvni «imzo» deyishadi. Hujjatda esa «original details», ya’ni asl ma’lumotlar atamasi ishlatiladi. Oddiy sovg‘a kolleksionga aylantirilganda unga yozilgan matn, yuboruvchi va qabul qiluvchi alohida atribut sifatida saqlab qolinishi mumkin. Hujjatga ko‘ra, bu ma’lumotni keyinroq olib tashlash mumkin.",
        },
        {
          t: "p",
          text: "Asosiy cheklov shuki, olib tashlash imkoniyati faqat sovg‘ani qabul qilgan odamga beriladi. Sovg‘ani yuborgan jamoadosh buni qila olmaydi.",
        },
        {
          t: "p",
          text: "Misol. Klan lideri turnirdan keyin MVP bo‘lgan o‘yinchiga tabrik yozib sovg‘a yubordi, keyin sovg‘a kolleksionga aylantirildi. Asl ma’lumotlar saqlangan bo‘lsa, liderning ismi va tabrigi sovg‘aga bog‘lanib qoladi. Ularni olib tashlash qarori ham, to‘lovi ham endi MVP o‘yinchining o‘zida.",
        },
        {
          t: "h2",
          id: "klan-tegi-nik-va-tabrik",
          text: "Klan tegi, nik va tabrik: sovg‘a ichida nima qolib ketadi?",
        },
        {
          t: "p",
          text: "Rasmiy hujjatlarda tasdiqlangan qism uchta:",
        },
        {
          t: "list",
          items: [
            "<strong>Asl matn.</strong> Sovg‘a bilan kelgan xabar, agar u bo‘lsa, asl ma’lumotlar tarkibiga kiradi (<a href=\"https://core.telegram.org/constructor/starGiftAttributeOriginalDetails\" target=\"_blank\" rel=\"noopener\">starGiftAttributeOriginalDetails</a>).",
            "<strong>Yuboruvchi.</strong> Sovg‘ani kim yuborgani atributda qolishi mumkin.",
            "<strong>Qabul qiluvchi.</strong> Sovg‘a kimga yuborilgani ham shu atributga yoziladi.",
          ],
        },
        {
          t: "p",
          text: "Sana va boshqa tafsilotlarning to‘liq ro‘yxati bu maqolada tasdiqlanmagan. Aniq tarkibni bilish uchun ilovada sovg‘a kartochkasini ochib ko‘ring.",
        },
        {
          t: "p",
          text: "O‘yinchi uchun bu nimani anglatadi? Izohga yozilgan klan tegi, «GG, keyingi scrimda ko‘rishamiz» degan hazil, jamoadoshning eski niki yoki mavsum nomi xabar matni sifatida sovg‘a ichida qolishi mumkin. Hujjatlarda yozuv vaqt o‘tishi bilan o‘zi o‘chib ketishi haqida hech narsa yo‘q.",
        },
        {
          t: "p",
          text: "Yana bir misol. Klan tarqaldi, jamoadoshlar boshqa squad’larga o‘tib ketdi. Sovg‘ada esa eski klan nomi va sobiq liderning ismi turibdi. Uni ko‘rinmas qilishning hujjatlashtirilgan yo‘li bitta: oluvchi o‘zi Stars to‘lab asl ma’lumotlarni olib tashlaydi.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "olib-tashlashga-necha-yulduz-ajratish",
          text: "Olib tashlashga necha yulduz ajratish kerak?",
        },
        {
          t: "p",
          text: "Rasmiy hujjatga ko‘ra, narx hamma uchun belgilangan bitta raqam emas. Server sovg‘a uchun Stars miqdorini ko‘rsatadi va aynan shu summa to‘lanadi (<a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">Gifts</a>).",
        },
        {
          t: "p",
          text: "Yana ikki qoida bor:",
        },
        {
          t: "list",
          items: [
            "Asl ma’lumotlarni faqat narx ko‘rsatilgan sovg‘adan olib tashlash mumkin (<a href=\"https://core.telegram.org/constructor/savedStarGift\" target=\"_blank\" rel=\"noopener\">savedStarGift</a>).",
            "Imkoniyat mavjud bo‘lmasa, narx 0 deb qaytariladi. Bu «tekin» degani emas: shu sovg‘a uchun funksiya yo‘q degani (<a href=\"https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_upgraded_gift.html\" target=\"_blank\" rel=\"noopener\">TDLib</a>).",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Telegram kanallarida olib tashlash narxi haqida turli raqamlar uchraydi. Rasmiy hujjatlarda aniq summa ham, uning o‘zgargan sanasi ham yo‘q, shuning uchun bu maqolada biror raqam tasdiqlanmaydi. Amaldagi narxni faqat ilovadagi sovg‘a oynasidan tekshiring.",
        },
        {
          t: "p",
          text: "To‘g‘ri tartib shunday: avval sovg‘ani oching, ko‘rsatilgan summani yozib oling, keyin Stars balansingizni u bilan solishtiring. Yetmasa, farqni to‘ldiring.",
        },
        {
          t: "h2",
          id: "lider-mvp-va-qolgan-squad",
          text: "Lider, MVP va qolgan squad: kimning qo‘lida nima bor?",
        },
        {
          t: "p",
          text: "Asl ma’lumotlarni saqlash sovg‘a kolleksionga aylantirilayotgan paytda belgilanadi. Undan keyin olib tashlash imkoniyati faqat oluvchida qoladi.",
        },
        {
          t: "table",
          head: [
            "Kim",
            "Asl ma’lumotlarga aloqasi",
            "Olib tashlay oladimi",
            "Kim to‘laydi",
          ],
          rows: [
            [
              "Sovg‘ani yuborgan lider yoki jamoadosh",
              "Matnni u yozadi, ismi atributda qolishi mumkin",
              "Yo‘q",
              "To‘lamaydi",
            ],
            [
              "Sovg‘ani olgan o‘yinchi (masalan, MVP)",
              "Sovg‘a uning profilida turadi",
              "Ha, narx ko‘rsatilgan bo‘lsa",
              "O‘zi, o‘z akkauntidagi Stars bilan",
            ],
            [
              "Chatdagi boshqa klan a’zolari",
              "Ular nimani ko‘rishi bu maqolada tasdiqlanmagan",
              "Yo‘q",
              "To‘lamaydi",
            ],
          ],
        },
        {
          t: "p",
          text: "E’tibor bering: sovg‘ani qaysi bosqichda kim kolleksionga aylantiradi va asl ma’lumotlarni saqlashni kim tanlaydi — bu vaziyatga qarab farq qilishi mumkin. Buni eng ishonchli tarzda ilovadagi sovg‘a oynasidan aniqlash mumkin.",
        },
        {
          t: "h2",
          id: "jamoadoshingiz-uchun-starsni-siz-olib",
          text: "Jamoadoshingiz uchun Stars’ni siz olib bera olasizmi?",
        },
        {
          t: "p",
          text: "Olib tashlash tugmasini sizning o‘rningizga bosib bo‘lmaydi: amal oluvchining akkauntidan bajariladi. Lekin yulduzlarni unga olib berish mumkin.",
        },
        {
          t: "p",
          text: "GemPay’da Stars faqat @username bo‘yicha tushiriladi. Ya’ni jamoadoshingizning username’ini kiritib, yulduzlarni to‘g‘ridan-to‘g‘ri uning balansiga yuborasiz. Shundan keyin u o‘zi sovg‘a oynasida olib tashlash to‘lovini qiladi.",
        },
        {
          t: "p",
          text: "Bu, masalan, lider o‘z tabrigi sovg‘ada qolishini istamagan va «xarajatini men qilaman» degan holatda qulay. Faqat username’ni harfma-harf tekshiring: yulduzlar boshqa akkauntga tushsa, ularni qaytarib bo‘lmaydi.",
        },
        {
          t: "h2",
          id: "klan-azosiga-sovga-yuborayotganda-izohni",
          text: "Klan a’zosiga sovg‘a yuborayotganda izohni qanday yozish kerak?",
        },
        {
          t: "p",
          text: "Izoh asl ma’lumotlar ichida uzoq qolishi mumkin. Uni olib tashlash esa faqat oluvchining qo‘lida va pullik — siz yuborganingizdan keyin uni tuzata olmaysiz.",
        },
        {
          t: "p",
          text: "Izohga yozmang:",
        },
        {
          t: "list",
          items: [
            "telefon raqami yoki boshqa shaxsiy ma’lumot;",
            "o‘yin akkaunti logini, paroli yoki tiklash kodi;",
            "boshqa jamoalar haqida haqoratli gaplar;",
            "ichki klan nizolari va «chiqarib yuboramiz» kabi hazillar.",
          ],
        },
        {
          t: "p",
          text: "Bemalol yozsa bo‘ladi:",
        },
        {
          t: "list",
          items: [
            "qisqa tabrik: «Birinchi o‘rin uchun!»;",
            "turnir yoki mavsum nomi;",
            "jamoa ichidagi zararsiz hazil.",
          ],
        },
        {
          t: "p",
          text: "Ismingiz va matningiz sovg‘ada qolishini istamasangiz, yuborishdan oldin sovg‘a sozlamalarini ko‘rib chiqing. Ilovadagi aniq tugma nomi bu maqolada tasdiqlanmagan.",
        },
        {
          t: "h2",
          id: "yetishmagan-yulduzni-somda-qanday-toldirish",
          text: "Yetishmagan yulduzni so‘mda qanday to‘ldirish mumkin?",
        },
        {
          t: "p",
          text: "Stars’ni GemPay botida so‘mda olish mumkin. Xorijiy karta, Telegram Wallet, TON yoki kripto kerak emas.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "<a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>’ni oching.",
            "Telegram Stars bo‘limini tanlang.",
            "Yulduzlar tushadigan @username’ni kiriting: o‘zingiznikini yoki jamoadoshingiznikini. Boshqa ma’lumot so‘ralmaydi.",
            "Miqdorni tanlang: bir buyurtmada 50 dan 10 000 tagacha.",
            "UzCard, HUMO, Click, Uzum Bank yoki bot balansi bilan to‘lang. Yulduzlar bir necha soniyada tushadi.",
          ],
        },
        {
          t: "p",
          text: "Bitta yulduz narxi:",
        },
        {
          t: "list",
          items: [
            `karta o‘tkazmasi yoki bot balansidan to‘lansa — ${som(STARS_UNIT_CARD, "uz")};`,
            `Click yoki Uzum Bank orqali onlayn to‘lovda — ${som(STARS_UNIT_ONLINE, "uz")}.`,
          ],
        },
        {
          t: "p",
          text: "Olib tashlash summasi kichik bo‘lsa ham, buyurtma kamida 50 ta yulduzdan boshlanadi. Ortgan yulduzlar Telegram balansingizda qoladi va keyingi sovg‘alarga sarflanadi. Bot bo‘limi va ko‘p uchraydigan xatolar haqida: <a href=\"/blog/telegram-stars-sotib-olish-gempay\">GemPay’da Stars sotib olish</a>.",
        },
        {
          t: "p",
          text: "Stars o‘yin valyutasiga aylanmaydi: UC, olmos yoki CP o‘rnini bosmaydi va ular ham Stars o‘rnini bosmaydi. Farqlar jadvalda: <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">Stars, UC, olmos va Steam balansi</a>.",
        },
        {
          t: "h2",
          id: "yozuv-ochganini-va-tolov-yechilganini",
          text: "Yozuv o‘chganini va to‘lov yechilganini qanday tekshirish mumkin?",
        },
        {
          t: "p",
          text: "Asl ma’lumotlarni olib tashlash to‘lovi Stars tranzaksiyalarida alohida turdagi to‘lov sifatida qayd etiladi (<a href=\"https://core.telegram.org/constructor/starsTransaction\" target=\"_blank\" rel=\"noopener\">starsTransaction</a>). U oddiy sovg‘a xaridi bilan aralashib ketmaydi.",
        },
        {
          t: "p",
          text: "Tranzaksiyalar ro‘yxatiga ilovaning qaysi menyusidan kirilishi bu maqolada tasdiqlanmagan. Uni Stars balansi oynasidan qidirib ko‘ring.",
        },
        {
          t: "p",
          text: "Ikkinchi tekshiruv oddiyroq: sovg‘a kartochkasini qayta oching va asl matn hamda ismlar yo‘qolganini ko‘ring.",
        },
        {
          t: "p",
          text: "Muammo olib tashlashda emas, Stars’ning o‘zida bo‘lsa — GemPay’dan olgan yulduzlar balansga tushmagan bo‘lsa — buyurtma raqami bilan <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>’ga yozing. Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi. Hisobga tushgan yulduzlar esa qaytarilmaydi.",
        },
        {
          t: "h2",
          id: "oyin-chatidagi-yozuvni-ochirib-beraman",
          text: "O‘yin chatidagi «yozuvni o‘chirib beraman» xizmatlariga nega ishonmaslik kerak?",
        },
        {
          t: "p",
          text: "Olib tashlash imkoniyati faqat sovg‘a oluvchisida. Demak, begona odam bu ishni faqat sizning akkauntingizga kirib bajara oladi, boshqa yo‘l yo‘q.",
        },
        {
          t: "note",
          tone: "warn",
          text: "Kimdir kod, parol, ikki bosqichli himoya paroli so‘rasa yoki sovg‘ani «vaqtincha» unga o‘tkazishni taklif qilsa, bu firibgarlik belgisi. Suhbatni to‘xtating. O‘yin chatlaridagi shunga o‘xshash sxemalar haqida: <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">gift sotib olish taklifida firibgarlikni tanish</a>.",
        },
        {
          t: "p",
          text: "Olib tashlash narxini Telegram o‘zi ko‘rsatadi va uni ilova ichida o‘zingiz to‘laysiz. Vositachi bu narxni kamaytira olmaydi. Shuning uchun «arzonroq qilib beraman» degan gapning o‘zi shubhali.",
        },
        {
          t: "p",
          text: "NFT sovg‘alarni Fragment orqali boshqaradigan bo‘lsangiz, akkaunt ulash qoidalari alohida maqolada yozilgan: <a href=\"/blog/fragment-verifikatsiyasiz-akkaunt-ulash-oyinchi\">Fragment va jamoadoshga sovg‘a</a>.",
        },
        {
          t: "p",
          text: "GemPay Stars’ni faqat @username bo‘yicha tushiradi: akkauntga kirmaydi, parol yoki kod so‘ramaydi. GemPay mustaqil xizmat va Telegram bilan rasmiy aloqadorlik da’vo qilmaydi.",
        },
        {
          t: "sources",
          items: [
            {
              label: "InputInvoice",
              href: "https://core.telegram.org/type/InputInvoice",
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
              label: "TDLib: messageUpgradedGift Class Reference",
              href: "https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_upgraded_gift.html",
            },
            {
              label: "starGiftAttributeOriginalDetails",
              href: "https://core.telegram.org/constructor/starGiftAttributeOriginalDetails",
            },
            {
              label: "starsTransaction",
              href: "https://core.telegram.org/constructor/starsTransaction",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Turnir tashkilotchisi o‘zi yuborgan sovg‘adagi tabrikni keyin qaytarib ola oladimi?",
          a: "Yo‘q. TDLib hujjatiga ko‘ra, asl ma’lumotlarni olib tashlash faqat qabul qiluvchiga ochiq. Yuboruvchi faqat sovg‘a ketishidan oldin izohni o‘ylab yozishi mumkin.",
        },
        {
          q: "Jamoadoshim yozuvni olib tashlashi uchun Stars’ni men to‘lab bera olamanmi?",
          a: "Ha, bilvosita. Yulduzlarni uning @username’iga olib berasiz, olib tashlash to‘lovini esa u o‘z akkauntidan qiladi. GemPay botida buyurtmaga faqat username kiritiladi.",
        },
        {
          q: "Oddiy, NFT bo‘lmagan sovg‘adagi izohni ham shu yo‘l bilan o‘chirsa bo‘ladimi?",
          a: "Rasmiy hujjatlarda bu pullik amal faqat kolleksionga aylantirilgan sovg‘aning asl ma’lumotlari uchun tavsiflangan. Oddiy sovg‘a izohiga oid qoidalar bu maqolada tekshirilmagan, shuning uchun ilovada ko‘ring.",
        },
        {
          q: "Kanalda «bor-yo‘g‘i bir necha yulduz» deyilgan — shunga qarab Stars olsam bo‘ladimi?",
          a: "Bunday raqam rasmiy hujjatlarda tasdiqlanmagan. Avval sovg‘a oynasida ko‘rsatilgan summani tekshiring, keyin yetishmagan qismini to‘ldiring.",
        },
        {
          q: "Bir necha yulduz yetmayapti — GemPay’da 50 tadan kam Stars olsa bo‘ladimi?",
          a: "Yo‘q, bitta buyurtma 50 ta yulduzdan boshlanadi. Ortib qolganlari balansda saqlanadi va keyingi sovg‘alarga ishlatiladi.",
        },
        {
          q: "Yulduz o‘rniga UC yoki olmos bilan to‘lasam bo‘ladimi?",
          a: "Mumkin emas. Olib tashlash Telegram Stars bilan to‘lanadi, o‘yin valyutasi esa faqat o‘z o‘yinida ishlaydi va Stars’ga almashtirilmaydi.",
        },
      ],
    },
    ru: {
      title: "Как убрать подпись с NFT-подарка за Stars: что останется в подарке клана",
      metaTitle: "Как убрать подпись с NFT-подарка за Stars",
      metaDescription: "Да, убрать исходные данные с коллекционного подарка может только получатель — за Stars. Точной цены в документации нет: сумму Telegram показывает в окне…",
      excerpt: "Да, убрать исходные данные с коллекционного подарка может только получатель — за Stars. Точной цены в документации нет: сумму Telegram показывает в окне подарка.",
      answer: "Да, убрать исходные данные с коллекционного подарка может только получатель — за Stars. Точной цены в документации нет: сумму Telegram показывает в окне подарка.",
      body: [
        {
          t: "h2",
          id: "jamoadosh-yuborgan-nft-sovgadagi-imzoni",
          text: "Можно ли убрать за Stars подпись с NFT-подарка от тиммейта?",
        },
        {
          t: "p",
          text: "Да. В Telegram есть отдельное платное действие, которое удаляет исходные данные с коллекционного (NFT) подарка. Оплачивается оно в Telegram Stars. Это описано в документации Telegram API — на страницах <a href=\"https://core.telegram.org/type/InputInvoice\" target=\"_blank\" rel=\"noopener\">InputInvoice</a> и <a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">Gifts</a>.",
        },
        {
          t: "p",
          text: "Игроки называют эту запись «подписью». В документации используется термин «original details», то есть исходные данные. Когда обычный подарок улучшают до коллекционного, текст, отправитель и получатель могут сохраниться в нём отдельным атрибутом. По документации эти данные можно удалить позже.",
        },
        {
          t: "p",
          text: "Главное ограничение: удалить их может только тот, кто подарок получил. Тиммейт, который его отправил, этого сделать не может.",
        },
        {
          t: "p",
          text: "Пример. Лидер клана после турнира отправил подарок с поздравлением игроку, ставшему MVP. Потом подарок улучшили до коллекционного. Если исходные данные сохранились, имя лидера и его поздравление остаются привязаны к подарку. Решать, убирать их или нет, и платить за это теперь будет сам MVP.",
        },
        {
          t: "h2",
          id: "klan-tegi-nik-va-tabrik",
          text: "Тег клана, ник и поздравление: что остаётся внутри подарка?",
        },
        {
          t: "p",
          text: "В официальной документации подтверждены три составляющие:",
        },
        {
          t: "list",
          items: [
            "<strong>Исходный текст.</strong> Сообщение, пришедшее вместе с подарком, если оно было, входит в исходные данные (<a href=\"https://core.telegram.org/constructor/starGiftAttributeOriginalDetails\" target=\"_blank\" rel=\"noopener\">starGiftAttributeOriginalDetails</a>).",
            "<strong>Отправитель.</strong> В атрибуте может остаться, кто отправил подарок.",
            "<strong>Получатель.</strong> Туда же записывается, кому подарок был отправлен.",
          ],
        },
        {
          t: "p",
          text: "Полный список деталей, включая дату, в этой статье не подтверждён. Чтобы узнать точный состав, откройте карточку подарка в приложении.",
        },
        {
          t: "p",
          text: "Что это значит для игрока? Тег клана в подписи, шутка вроде «GG, увидимся на следующем скриме», старый ник тиммейта или название сезона могут остаться внутри подарка как текст сообщения. О том, что запись со временем исчезает сама, в документации ничего не сказано.",
        },
        {
          t: "p",
          text: "Ещё пример. Клан распался, тиммейты разошлись по другим сквадам. А на подарке до сих пор название старого клана и имя бывшего лидера. Задокументированный способ это скрыть один: получатель сам платит Stars и удаляет исходные данные.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "olib-tashlashga-necha-yulduz-ajratish",
          text: "Сколько звёзд нужно на удаление?",
        },
        {
          t: "p",
          text: "По официальной документации цена — не одна фиксированная цифра для всех. Сервер указывает количество Stars для конкретного подарка, и оплачивается именно эта сумма (<a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">Gifts</a>).",
        },
        {
          t: "p",
          text: "Есть ещё два правила:",
        },
        {
          t: "list",
          items: [
            "Удалить исходные данные можно только у подарка, для которого указана цена (<a href=\"https://core.telegram.org/constructor/savedStarGift\" target=\"_blank\" rel=\"noopener\">savedStarGift</a>).",
            "Если возможность недоступна, цена возвращается как 0. Это не значит, что удаление ничего не стоит: для этого подарка функции просто нет (<a href=\"https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_upgraded_gift.html\" target=\"_blank\" rel=\"noopener\">TDLib</a>).",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "В Telegram-каналах встречаются разные цифры стоимости удаления. В официальной документации нет ни точной суммы, ни даты её изменения, поэтому никакую цифру эта статья не подтверждает. Актуальную цену проверяйте только в окне подарка в приложении.",
        },
        {
          t: "p",
          text: "Правильный порядок такой: сначала откройте подарок и запишите указанную сумму, потом сравните её со своим балансом Stars. Если не хватает — докупите разницу.",
        },
        {
          t: "h2",
          id: "lider-mvp-va-qolgan-squad",
          text: "Лидер, MVP и остальной сквад: у кого какие возможности?",
        },
        {
          t: "p",
          text: "Сохранять ли исходные данные, решается в момент улучшения подарка до коллекционного. После этого возможность удалить их остаётся только у получателя.",
        },
        {
          t: "table",
          head: [
            "Кто",
            "Связь с исходными данными",
            "Может удалить",
            "Кто платит",
          ],
          rows: [
            [
              "Лидер или тиммейт, отправивший подарок",
              "Пишет текст, его имя может остаться в атрибуте",
              "Нет",
              "Не платит",
            ],
            [
              "Игрок, получивший подарок (например, MVP)",
              "Подарок находится в его профиле",
              "Да, если указана цена",
              "Он сам, звёздами со своего аккаунта",
            ],
            [
              "Остальные участники клана в чате",
              "Что они видят, в этой статье не подтверждено",
              "Нет",
              "Не платят",
            ],
          ],
        },
        {
          t: "p",
          text: "Обратите внимание: кто и на каком этапе улучшает подарок до коллекционного и кто выбирает сохранение исходных данных, может зависеть от ситуации. Надёжнее всего это видно в окне подарка в приложении.",
        },
        {
          t: "h2",
          id: "jamoadoshingiz-uchun-starsni-siz-olib",
          text: "Можно ли купить Stars тиммейту вместо него?",
        },
        {
          t: "p",
          text: "Нажать кнопку удаления за другого нельзя: действие выполняется с аккаунта получателя. Но купить ему звёзды можно.",
        },
        {
          t: "p",
          text: "В GemPay Stars зачисляются только по @username. То есть вы вводите username тиммейта и отправляете звёзды прямо на его баланс. После этого он сам оплачивает удаление в окне подарка.",
        },
        {
          t: "p",
          text: "Это удобно, например, когда лидер не хочет, чтобы его поздравление оставалось на подарке, и говорит: «Расходы беру на себя». Только сверьте username буква в букву: если звёзды уйдут на другой аккаунт, вернуть их не получится.",
        },
        {
          t: "h2",
          id: "klan-azosiga-sovga-yuborayotganda-izohni",
          text: "Как писать подпись, когда дарите подарок соклановцу?",
        },
        {
          t: "p",
          text: "Подпись может надолго остаться в исходных данных. Убрать её может только получатель, и это платно — после отправки вы её уже не исправите.",
        },
        {
          t: "p",
          text: "Не пишите в подписи:",
        },
        {
          t: "list",
          items: [
            "номер телефона и другие личные данные;",
            "логин, пароль или код восстановления игрового аккаунта;",
            "оскорбления в адрес других команд;",
            "внутренние конфликты клана и шутки вроде «выгоним тебя».",
          ],
        },
        {
          t: "p",
          text: "Спокойно можно написать:",
        },
        {
          t: "list",
          items: [
            "короткое поздравление: «За первое место!»;",
            "название турнира или сезона;",
            "безобидную внутрикомандную шутку.",
          ],
        },
        {
          t: "p",
          text: "Если не хотите, чтобы ваше имя и текст остались на подарке, перед отправкой посмотрите настройки подарка. Точное название кнопки в приложении в этой статье не подтверждено.",
        },
        {
          t: "h2",
          id: "yetishmagan-yulduzni-somda-qanday-toldirish",
          text: "Как докупить недостающие звёзды за сумы?",
        },
        {
          t: "p",
          text: "Stars можно купить за сумы в боте GemPay. Иностранная карта, Telegram Wallet, TON или криптовалюта не нужны.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Откройте <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>.",
            "Выберите раздел Telegram Stars.",
            "Введите @username, на который зачислить звёзды: свой или тиммейта. Больше ничего не спрашивают.",
            "Выберите количество: от 50 до 10 000 за один заказ.",
            "Оплатите через UzCard, HUMO, Click, Uzum Bank или с баланса бота. Звёзды приходят за несколько секунд.",
          ],
        },
        {
          t: "p",
          text: "Цена одной звезды:",
        },
        {
          t: "list",
          items: [
            `при переводе с карты или оплате с баланса бота — ${som(STARS_UNIT_CARD, "ru")};`,
            `при онлайн-оплате через Click или Uzum Bank — ${som(STARS_UNIT_ONLINE, "ru")}.`,
          ],
        },
        {
          t: "p",
          text: "Даже если сумма удаления небольшая, заказ начинается от 50 звёзд. Оставшиеся звёзды хранятся на вашем балансе в Telegram и пригодятся для следующих подарков. Про раздел бота и частые ошибки: <a href=\"/blog/telegram-stars-sotib-olish-gempay\">покупка Stars в GemPay</a>.",
        },
        {
          t: "p",
          text: "Stars не превращаются в игровую валюту: они не заменяют UC, алмазы или CP, а те не заменяют Stars. Разница — в таблице: <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">Stars, UC, алмазы и баланс Steam</a>.",
        },
        {
          t: "h2",
          id: "yozuv-ochganini-va-tolov-yechilganini",
          text: "Как проверить, что запись удалена и оплата списана?",
        },
        {
          t: "p",
          text: "Оплата удаления исходных данных отображается в транзакциях Stars как отдельный тип платежа (<a href=\"https://core.telegram.org/constructor/starsTransaction\" target=\"_blank\" rel=\"noopener\">starsTransaction</a>). Она не смешивается с обычной покупкой подарка.",
        },
        {
          t: "p",
          text: "Через какое меню приложения открывается список транзакций, в этой статье не подтверждено. Поищите его в окне баланса Stars.",
        },
        {
          t: "p",
          text: "Вторая проверка проще: откройте карточку подарка заново и убедитесь, что исходный текст и имена пропали.",
        },
        {
          t: "p",
          text: "Если проблема не в удалении, а в самих Stars — звёзды, купленные в GemPay, не пришли на баланс, — напишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> с номером заказа. Если заказ не выполнен, деньги полностью возвращаются в течение 3 рабочих дней. Звёзды, уже зачисленные на счёт, не возвращаются.",
        },
        {
          t: "h2",
          id: "oyin-chatidagi-yozuvni-ochirib-beraman",
          text: "Почему не стоит доверять услугам «уберу подпись» в игровых чатах?",
        },
        {
          t: "p",
          text: "Возможность удаления есть только у получателя подарка. Значит, посторонний человек может сделать это, лишь войдя в ваш аккаунт, — другого способа нет.",
        },
        {
          t: "note",
          tone: "warn",
          text: "Если кто-то просит код, пароль, пароль двухэтапной проверки или предлагает «временно» передать ему подарок — это признак мошенничества. Прекратите разговор. О похожих схемах в игровых чатах: <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">как распознать мошенничество с предложением купить гифт</a>.",
        },
        {
          t: "p",
          text: "Цену удаления показывает сам Telegram, и платите вы её сами внутри приложения. Посредник не может её снизить. Поэтому само обещание «сделаю дешевле» уже подозрительно.",
        },
        {
          t: "p",
          text: "Если вы управляете NFT-подарками через Fragment, правила привязки аккаунтов описаны в отдельной статье: <a href=\"/blog/fragment-verifikatsiyasiz-akkaunt-ulash-oyinchi\">Fragment и подарок тиммейту</a>.",
        },
        {
          t: "p",
          text: "GemPay зачисляет Stars только по @username: в аккаунт не входит, пароль и код не спрашивает. GemPay — независимый сервис и не заявляет об официальной связи с Telegram.",
        },
        {
          t: "sources",
          items: [
            {
              label: "InputInvoice",
              href: "https://core.telegram.org/type/InputInvoice",
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
              label: "TDLib: messageUpgradedGift Class Reference",
              href: "https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_upgraded_gift.html",
            },
            {
              label: "starGiftAttributeOriginalDetails",
              href: "https://core.telegram.org/constructor/starGiftAttributeOriginalDetails",
            },
            {
              label: "starsTransaction",
              href: "https://core.telegram.org/constructor/starsTransaction",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Может ли организатор турнира потом забрать назад поздравление со своего подарка?",
          a: "Нет. Согласно документации TDLib, удаление исходных данных доступно только получателю. Отправителю остаётся одно — продумать подпись до того, как подарок уйдёт.",
        },
        {
          q: "Могу ли я оплатить Stars, чтобы тиммейт убрал запись?",
          a: "Да, косвенно. Вы покупаете звёзды на его @username, а платёж за удаление он делает со своего аккаунта. В боте GemPay для заказа нужен только username.",
        },
        {
          q: "Можно ли так же удалить подпись с обычного подарка, не NFT?",
          a: "В официальной документации это платное действие описано только для исходных данных подарка, улучшенного до коллекционного. Правила для подписи обычного подарка в статье не проверялись, поэтому уточните в приложении.",
        },
        {
          q: "В канале пишут «всего пара звёзд» — можно покупать Stars, ориентируясь на это?",
          a: "Такая цифра официальной документацией не подтверждена. Сначала посмотрите сумму в окне подарка, а затем докупите недостающее.",
        },
        {
          q: "Не хватает нескольких звёзд — можно купить в GemPay меньше 50 Stars?",
          a: "Нет, минимальный заказ — 50 звёзд. Лишние останутся на балансе и пойдут на следующие подарки.",
        },
        {
          q: "Можно ли заплатить вместо звёзд UC или алмазами?",
          a: "Нельзя. Удаление оплачивается Telegram Stars, а игровая валюта работает только в своей игре и на Stars не обменивается.",
        },
      ],
    },
  },
};

export default article;
