// Avtoblogyoz yasagan maqola (2026-11-08). Niyat: Klan chatida arzon Stars yoki NFT sovg‘a taklifini olgan o‘zbek o‘yinchi «Stars refund sxemasi» xabaridan keyin bunday Stars yoki sovg‘a bloklanib qolishi mumkinmi, xavfsiz yo‘l qaysi ekanini «arzon stars klan chatida xavfli» kabi so‘zlar bilan qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/tos/stars
//   https://core.telegram.org/bots/payments-stars
//   https://core.telegram.org/bots/api
//   https://telegram.org/tos/bot-developers
//   https://telegram.org/blog/wear-gifts-blockchain-and-more
//   https://core.telegram.org/api/gifts

import type { Article } from "../types";
import { STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const article: Article = {
  slug: "arzon-stars-refund-sxemasi-oyinchi-xavfi",
  game: null,
  type: "trust",
  datePublished: "2026-11-08",
  dateModified: "2026-11-08",
  keywords: ["arzon telegram stars xavfi oyinchi","arzon stars klan chatida xavfli","stars refund sxemasi","telegram stars refund bloklanish","arzon nft sovga xavfi","jamoadoshga stars yuborish","stars sotib olish xavfsiz","дешевые telegram stars опасно","рефанд telegram stars схема","купить звезды telegram дешево риск","telegram stars списали с баланса","подарок nft заблокирован telegram"],
  locales: {
    uz: {
      title: "Klan chatida arzon Stars xavflimi: refunddan keyin yo‘qolishi mumkinmi?",
      metaTitle: "Klan chatida arzon Stars xavflimi",
      metaDescription: "Ha, xavf bor: refund yoki qoida buzilganda Telegram Stars’ni balansdan yechishi mumkin va ular bilan olingan narsalar uchun kompensatsiya bermaydi.",
      excerpt: "Ha, xavf bor: refund yoki qoida buzilganda Telegram Stars’ni balansdan yechishi mumkin va ular bilan olingan narsalar uchun kompensatsiya bermaydi.",
      answer: "Ha, xavf bor: refund yoki qoida buzilganda Telegram Stars’ni balansdan yechishi mumkin va ular bilan olingan narsalar uchun kompensatsiya bermaydi.",
      body: [
        {
          t: "p",
          text: "Klan yoki squad chatida kimdir Stars’ni bozordan ancha arzonga taklif qildi. Shu kunlarda kanallarda «Stars refund sxemasi» haqidagi post ham tarqalyapti. Quyida rasmiy qoidalar mish-mishdan ajratilgan va to‘lashdan oldin nimani tekshirish kerakligi ko‘rsatilgan.",
        },
        {
          t: "h2",
          id: "klan-chatidagi-arzon-starsning-asosiy",
          text: "Klan chatidagi arzon Stars’ning asosiy xavfi nimada?",
        },
        {
          t: "p",
          text: "Stars keyin balansdan yechilishi mumkin. <a href=\"https://telegram.org/tos/stars\" target=\"_blank\" rel=\"noopener\">Telegram Stars shartlari</a>ga ko‘ra, ilova ichidagi xarid qaytarilsa (refund) yoki shartlar buzilsa, Telegram shaxsiy balansdagi Stars’ni vaqtincha ushlab turishi yoki butunlay yechib olishi mumkin.",
        },
        {
          t: "p",
          text: "Eng og‘ir tomoni — kompensatsiya yo‘qligi. Yechilgan Stars uchun ham, ularning yo‘qolishi olib kelgan oqibat uchun ham Telegram tovon bermaydi. Shartlarda oqibatga misol ham bor: ilgari sotib olingan raqamli tovarlar, xizmatlar va obunalarning yo‘qolishi. O‘yinchi uchun bu jamoadoshga olingan sovg‘a, turnir kanaliga obuna yoki botdagi xarid bo‘lishi mumkin.",
        },
        {
          t: "p",
          text: "Chegarani aniq qo‘yamiz. Refunddan keyin oddiy xaridor qo‘lidagi kolleksion sovg‘a avtomatik bloklanadi degan rasmiy qoida bu maqolada tasdiqlanmagan. Shuning uchun «albatta bloklanadi» deb bo‘lmaydi. To‘g‘ri xulosa boshqacha: xavf bor, sizni himoya qiladigan qoida esa yo‘q.",
        },
        {
          t: "p",
          text: "Yana bir nuqta: Telegram akkaunti bekor qilinsa, qolgan Stars balansi butunlay yo‘qoladi va buning uchun ham kompensatsiya berilmaydi.",
        },
        {
          t: "h2",
          id: "refund-sxemasi-haqidagi-xabardan-oyinchi",
          text: "«Refund sxemasi» haqidagi xabardan o‘yinchi nimani bilishi kerak?",
        },
        {
          t: "note",
          tone: "info",
          text: "Mavzu Telegram kanalidagi postdan olingan, bu rasmiy e’lon emas. Telegram’ning bu hodisa haqidagi bayonoti topilmadi. Postdagi summa, muddat, zaiflik qanday ishlagani va qaysi sovg‘alar olingani tasdiqlanmagan, shuning uchun ular bu yerda takrorlanmaydi.",
        },
        {
          t: "p",
          text: "Postning o‘zi rostmi yoki yo‘qmi — o‘yinchi uchun bu ikkinchi darajali savol. Muhimi boshqa narsa: refund mexanizmi Telegram’ning rasmiy hujjatlarida yozilgan va u zanjirning oxirida turgan odamga ham ta’sir qilishi mumkin.",
        },
        {
          t: "p",
          text: "Hujjatlarda nima yozilgan:",
        },
        {
          t: "list",
          items: [
            "<a href=\"https://core.telegram.org/bots/api\" target=\"_blank\" rel=\"noopener\">Bot API</a>ga ko‘ra, xaridor Stars’ni sotib olgan to‘lov provayderi (masalan, Apple yoki Google) orqali chargeback boshlasa, qaytarilgan Stars bot balansidan yechiladi.",
            "<a href=\"https://telegram.org/tos/bot-developers\" target=\"_blank\" rel=\"noopener\">Dasturchilar shartlari</a>ga ko‘ra, to‘lov nizosi xaridor foydasiga hal bo‘lsa, qaytarilgan mablag‘ uchun sotuvchi dasturchi javob beradi.",
            "O‘sha shartlarda: refund, platformani suiiste’mol qilish shubhasi yoki qoida buzilishi bo‘lsa, Telegram dasturchi balansidagi Stars’ni ushlab turishi yoki yechishi mumkin.",
          ],
        },
        {
          t: "p",
          text: "Telegram o‘zi keraksiz yoki tasodifiy Stars xaridi uchun pul qaytarmaydi. Lekin bu refund umuman yo‘q degani emas: bot to‘lovni refundStarPayment metodi bilan qaytarishi, xaridor esa to‘lov provayderiga murojaat qilishi mumkin. Sizga arzon Stars sotgan odam keyin o‘z to‘lovini qaytarib olsa, oqibat kimga tushishini oldindan bilib bo‘lmaydi.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "arzon-stars-qayerdan-paydo-boladi",
          text: "Arzon Stars qayerdan paydo bo‘ladi va har bir taklif nimasi bilan xavfli?",
        },
        {
          t: "p",
          text: "Klan chatlarida takliflar odatda to‘rt ko‘rinishda keladi:",
        },
        {
          t: "table",
          head: [
            "Taklif",
            "Sotuvchi nima deydi",
            "Qoidaga ko‘ra nima bo‘lishi mumkin",
            "Xavf",
          ],
          rows: [
            [
              "O‘z balansidan Stars sotish",
              "«Balansimda ortiqcha Stars bor, arzonga beraman»",
              "Shaxsiy balansdagi Stars’ni shartlarda ko‘rsatilmagan maqsadda sotish yoki o‘tkazish taqiqlangan",
              "Yuqori",
            ],
            [
              "Sovg‘a «vositachiligi»",
              "«Stars bilan sovg‘a olib beraman, sen yarim narxini to‘la»",
              "Stars manbai noma’lum; manba qaytarilsa, yo‘qolgan xaridlar uchun kompensatsiya yo‘q",
              "Yuqori",
            ],
            [
              "Arzon NFT sovg‘a",
              "«Hozir to‘la, keyin yuboraman»",
              "Oldindan to‘lov olinadi, sovg‘ani tekshirib bo‘lmaydi",
              "Juda yuqori",
            ],
            [
              "«Tekin Stars» aksiyasi",
              "«Havolaga kir, Stars tarqatilyapti»",
              "Rasmiy manbada tasdiqlanmagan aksiya",
              "Juda yuqori",
            ],
          ],
        },
        {
          t: "p",
          text: "Uchinchi holat bo‘yicha batafsil: <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">o‘yin chatida gift sotib olish taklifini qanday tanish mumkin</a>. To‘rtinchisiga misol — <a href=\"/blog/durov-tugilgan-kuni-aksiyasi-firibgarlik-oyinchi\">Durov tug‘ilgan kuni «aksiyasi»</a>.",
        },
        {
          t: "p",
          text: "Alohida holat — klan lideri turnir sovrini yoki klan kanalini bezash uchun «hammadan arzon Stars yig‘ib beraman» desa. Bu yerda xavf bir kishiga emas, butun jamoaga tushadi: Stars yechilsa, ular bilan olingan sovg‘a yoki obuna uchun hech kim kompensatsiya bermaydi.",
        },
        {
          t: "p",
          text: "Umumiy belgi bitta: narx bozordan sezilarli darajada past bo‘lsa, Stars qayerdan kelganini tekshirib bo‘lmaydi.",
        },
        {
          t: "h2",
          id: "klandosh-taklifini-qabul-qilishdan-oldin",
          text: "Klandosh taklifini qabul qilishdan oldin nimani tekshirasiz?",
        },
        {
          t: "p",
          text: "Tanish nik ham, uzoq yillik klandosh ham kafolat emas — uning akkaunti buzilgan bo‘lishi mumkin. Shu tartibda tekshiring:",
        },
        {
          t: "steps",
          items: [
            {
              title: "Sotuvchi kimligini aniqlang",
              text: "Agar u o‘zini bot deb tanishtirsa, username’i «bot» bilan tugaganini tekshiring. Qanday qilinadi: <a href=\"/blog/game-bilan-tugaydigan-donat-boti-tekshirish\">«…game» nomli donat botini tekshirish</a>.",
            },
            {
              title: "Nima so‘ralayotganiga qarang",
              text: "SMS kod, parol, ikki bosqichli tekshiruv paroli yoki hamyon kaliti so‘ralsa, suhbatni shu zahoti to‘xtating.",
            },
            {
              title: "Stars manbasini so‘rang",
              text: "Shaxsiy balansdan sotish shartlarga zid. Javob noaniq bo‘lsa, rad eting.",
            },
            {
              title: "Sovg‘a havolasini oching",
              text: "Har bir kolleksion sovg‘aning t.me/nft formatidagi noyob havolasi bor (<a href=\"https://telegram.org/blog/wear-gifts-blockchain-and-more\" target=\"_blank\" rel=\"noopener\">Telegram blogi</a>). Havola berilmasa yoki boshqa domenga olib borsa, to‘xtang.",
            },
            {
              title: "Oldindan to‘lovni rad eting",
              text: "Faqat ochiq narx, buyurtma raqami va yordam aloqasi bor kanal orqali to‘lang.",
            },
          ],
        },
        {
          t: "h2",
          id: "klan-uchun-stars-olishning-uch",
          text: "Klan uchun Stars olishning uch yo‘li: kim javob beradi?",
        },
        {
          t: "p",
          text: "Qaysi yo‘lda nima ma’lum ekanini taqqoslang:",
        },
        {
          t: "table",
          head: [
            "Yo‘l",
            "Stars manbai",
            "Nima kerak",
            "Muammo bo‘lsa",
            "Shaffoflik",
          ],
          rows: [
            [
              "Telegram ilovasida o‘zingiz xarid qilasiz",
              "Ilovaning to‘lov tizimi",
              "Ilovadagi to‘lov usuli; O‘zbekiston kartasi ishlashini ilovada tekshiring",
              "Telegram keraksiz xarid uchun pul qaytarmaydi",
              "Yuqori",
            ],
            [
              "GemPay, <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>",
              "Ochiq narxli buyurtma",
              "Faqat @username",
              "Buyurtma raqami bilan <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>",
              "Yuqori",
            ],
            [
              "Klan chatidagi notanish sotuvchi",
              "Noma’lum",
              "Ko‘pincha oldindan to‘lov",
              "Murojaat qiladigan joy yo‘q",
              "Past",
            ],
          ],
        },
        {
          t: "p",
          text: `GemPay’da Stars so‘mda olinadi: UzCard, HUMO, Click, Uzum Bank yoki bot balansi bilan. Bir buyurtmada 50 tadan 10 000 tagacha Stars olish mumkin. Bir donasi karta o‘tkazmasi yoki balans orqali ${som(STARS_UNIT_CARD, "uz")}, Click yoki Uzum Bank bilan onlayn to‘lovda ${som(STARS_UNIT_ONLINE, "uz")}. Stars bir necha soniyada tushadi.`,
        },
        {
          t: "p",
          text: "GemPay mustaqil xizmat va Telegram nomidan ish ko‘rmaydi.",
        },
        {
          t: "h2",
          id: "taklifni-qabul-qilib-bolgan-bolsangiz",
          text: "Taklifni qabul qilib bo‘lgan bo‘lsangiz: endi nima qilasiz?",
        },
        {
          t: "list",
          items: [
            "<strong>Shoshib sarflamang.</strong> Shubhali Stars’ni qimmat xaridlarga ishlatmang. Ular yechilsa, ular bilan olingan narsa uchun kompensatsiya berilmaydi.",
            "<strong>Qo‘shimcha hech narsa yubormang.</strong> Sotuvchi «tasdiqlash» uchun yana pul, kod yoki ma’lumot so‘rasa, bermang. Yozishmalarni saqlab qo‘ying.",
            "<strong>Bot xaridi yetkazilmasa, botga yozing.</strong> Stars bilan bot yoki mini app’dan xarid qilgan bo‘lsangiz-u, u kelmasa, botga /paysupport yuboring. Dasturchi Stars’ni jarimasiz qaytarishi mumkin. U qonuniy refunddan bosh tortsa, Settings &gt; Your Stars bo‘limidan tranzaksiya ID’sini oling va <a href=\"https://telegram.org/tos/stars\" target=\"_blank\" rel=\"noopener\">shartlar sahifasi</a> orqali shikoyat yuboring. Bu tartib bot va mini app xaridlari uchun yozilgan, chatdagi shaxsiy savdo uchun emas.",
            "<strong>Blokcheyn — to‘liq yechim emas.</strong> Kolleksion sovg‘ani TON blokcheyniga o‘tkazish (My Profile &gt; Gifts &gt; Transfer &gt; Send via Blockchain) egasiga doimiy nazorat beradi. Ammo refund bilan bog‘liq sovg‘ani o‘tkazish mumkinmi — bu maqolada tasdiqlanmagan. Tashqi maydonchalar haqida: <a href=\"/blog/sovgani-marketpleysga-otkazish-xavfsizmi-oyinchi\">sovg‘ani marketpleysga o‘tkazish xavfsizmi</a>.",
            "<strong>O‘zingiz sotuvchiga aylanmang.</strong> Klandoshlarga o‘z balansingizdan Stars sotish ham shartlarga zid.",
          ],
        },
        {
          t: "h2",
          id: "gempayda-jamoadosh-uchun-stars-qanday",
          text: "GemPay’da jamoadosh uchun Stars qanday olinadi?",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "<a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>’ni oching va Telegram Stars bo‘limini tanlang.",
            "O‘zingizning yoki jamoadoshingizning @username’ini kiriting. Parol ham, kod ham so‘ralmaydi.",
            `Miqdorni 50 dan 10 000 gacha tanlang. Summa ${som(STARS_UNIT_CARD, "uz")} yoki ${som(STARS_UNIT_ONLINE, "uz")} bo‘yicha hisoblanganini tekshiring.`,
            "UzCard, HUMO, Click, Uzum Bank yoki bot balansi bilan to‘lang. Visa/Mastercard qabul qilinmaydi, VPN yoki kripto kerak emas.",
            "Stars bir necha soniyada tushadi. Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi. Kechiksa, buyurtma raqami bilan <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>’ga yozing.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Stars UC, olmos yoki CP’ga aylanmaydi. O‘yin valyutasi botda alohida bo‘limda, Player ID orqali olinadi. Stars bo‘limi haqida batafsil: <a href=\"/blog/telegram-stars-sotib-olish-gempay\">GemPay’da Stars sotib olish</a>.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Terms of Service for Telegram Stars",
              href: "https://telegram.org/tos/stars",
            },
            {
              label: "Bot Payments API for Digital Goods and Services",
              href: "https://core.telegram.org/bots/payments-stars",
            },
            {
              label: "Telegram Bot API",
              href: "https://core.telegram.org/bots/api",
            },
            {
              label: "Telegram Bot Platform Developer Terms of Service",
              href: "https://telegram.org/tos/bot-developers",
            },
            {
              label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More",
              href: "https://telegram.org/blog/wear-gifts-blockchain-and-more",
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
          q: "Klan lideri turnir sovrini uchun hammadan arzon Stars yig‘yapti — qo‘shilsam bo‘ladimi?",
          a: "Tavsiya qilinmaydi: shaxsiy balansdagi Stars’ni sotish va o‘tkazish shartlarga zid, manbai noma’lum Stars esa keyin yechilishi mumkin. Sovrin uchun Stars’ni narxi ochiq va buyurtma raqami beriladigan joydan oling.",
        },
        {
          q: "Arzon Stars bilan olingan NFT sovg‘a keyin yo‘qolsa, Telegram pulni qaytaradimi?",
          a: "Yo‘q. Telegram yechilgan Stars uchun ham, shu sabab yo‘qolgan raqamli tovar yoki obuna uchun ham tovon to‘lamaydi.",
        },
        {
          q: "«Refund sxemasi» haqidagi post rostmi va u menga ta’sir qiladimi?",
          a: "Bu kanal posti, Telegram uni izohlamagan va undagi raqamlar tasdiqlanmagan. Lekin refund va chargeback yo‘llari rasmiy hujjatlarda bor, shuning uchun manbai noma’lum Stars sizga ham muammo keltirishi mumkin.",
        },
        {
          q: "Chatdagi sotuvchi pulni olib, Stars yubormadi — Telegram orqali qaytarsa bo‘ladimi?",
          a: "/paysupport va tranzaksiya ID bilan shikoyat qilish tartibi bot va mini app xaridlari uchun yozilgan. Odamlar o‘rtasidagi shaxsiy savdo uchun bunday yo‘l shartlarda ko‘rsatilmagan, shuning uchun bunday to‘lovni qaytarish qiyin.",
        },
        {
          q: "Jamoadoshimga Stars’ni uning parolini so‘ramasdan yuborsa bo‘ladimi?",
          a: "Ha, GemPay botida faqat jamoadoshingizning @username’i kiritiladi. Parol, SMS kod yoki akkauntga kirish so‘ralmaydi.",
        },
        {
          q: "GemPay’dan olingan Stars’ni PUBG UC yoki MLBB olmosiga ishlatsa bo‘ladimi?",
          a: "Yo‘q, Stars o‘yin valyutasiga aylanmaydi. UC, olmos va CP botning alohida bo‘limida Player ID bo‘yicha olinadi.",
        },
      ],
    },
    ru: {
      title: "Дешёвые Stars в чате клана: могут ли они исчезнуть после возврата?",
      metaTitle: "Дешёвые Stars в чате клана",
      metaDescription: "Да, риск есть: при возврате платежа или нарушении правил Telegram может списать Stars с баланса и не компенсирует то, что на них куплено.",
      excerpt: "Да, риск есть: при возврате платежа или нарушении правил Telegram может списать Stars с баланса и не компенсирует то, что на них куплено.",
      answer: "Да, риск есть: при возврате платежа или нарушении правил Telegram может списать Stars с баланса и не компенсирует то, что на них куплено.",
      body: [
        {
          t: "p",
          text: "В чате клана или сквада кто-то предложил Stars заметно дешевле рынка. В эти же дни по каналам расходится пост о «схеме с возвратом Stars». Ниже официальные правила отделены от слухов. Отдельно разобрано, что проверить до оплаты.",
        },
        {
          t: "h2",
          id: "klan-chatidagi-arzon-starsning-asosiy",
          text: "В чём главный риск дешёвых Stars из чата клана?",
        },
        {
          t: "p",
          text: "Stars могут позже списать с баланса. Согласно <a href=\"https://telegram.org/tos/stars\" target=\"_blank\" rel=\"noopener\">условиям Telegram Stars</a>, Telegram может временно удержать Stars на личном балансе или списать их насовсем. Так бывает, если покупку внутри приложения вернули (refund) или нарушены условия.",
        },
        {
          t: "p",
          text: "Хуже всего то, что компенсации нет. Telegram не возмещает ни сами списанные Stars, ни последствия их списания. В условиях даже приведён пример таких последствий: потеря ранее купленных цифровых товаров, услуг и подписок. Для игрока это может быть подарок тиммейту, подписка на турнирный канал или покупка в боте.",
        },
        {
          t: "p",
          text: "Важно не преувеличивать. Официальное правило, по которому коллекционный подарок у обычного покупателя автоматически блокируется после возврата, в этой статье не подтверждено. Поэтому утверждать «точно заблокируют» нельзя. Верный вывод другой: риск есть, а правила, которое бы вас защищало, нет.",
        },
        {
          t: "p",
          text: "Ещё один момент: если аккаунт Telegram закроют, оставшийся баланс Stars сгорает. За эту потерю тоже ничего не компенсируют.",
        },
        {
          t: "h2",
          id: "refund-sxemasi-haqidagi-xabardan-oyinchi",
          text: "Что игроку стоит знать о посте про «схему с возвратами»?",
        },
        {
          t: "note",
          tone: "info",
          text: "Тема взята из поста в Telegram-канале, это не официальное объявление. Заявления Telegram об этом случае найти не удалось. Сумма, сроки, механизм уязвимости и список купленных подарков из поста не подтверждены, поэтому здесь они не повторяются.",
        },
        {
          t: "p",
          text: "Правда ли написано в самом посте — для игрока вопрос второстепенный. Важнее другое: механизм возвратов описан в официальных документах Telegram. И он может задеть даже того, кто стоит в самом конце цепочки.",
        },
        {
          t: "p",
          text: "Что сказано в документах:",
        },
        {
          t: "list",
          items: [
            "По <a href=\"https://core.telegram.org/bots/api\" target=\"_blank\" rel=\"noopener\">Bot API</a>: если покупатель оформил чарджбэк через платёжного провайдера, у которого покупал Stars (например, Apple или Google), возвращённые Stars списываются с баланса бота.",
            "По <a href=\"https://telegram.org/tos/bot-developers\" target=\"_blank\" rel=\"noopener\">условиям для разработчиков</a>: если платёжный спор решён в пользу покупателя, за возвращённые средства отвечает разработчик-продавец.",
            "Там же: при возвратах, подозрении на злоупотребление платформой или нарушении правил Telegram может удержать или списать Stars с баланса разработчика.",
          ],
        },
        {
          t: "p",
          text: "Сам Telegram не возвращает деньги за ненужные или случайные покупки Stars. Но это не значит, что возвратов не бывает вовсе. Бот может вернуть платёж методом refundStarPayment, а покупатель — обратиться к платёжному провайдеру. Если человек, продавший вам дешёвые Stars, потом отзовёт свой платёж, заранее не угадать, на ком это отразится.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "arzon-stars-qayerdan-paydo-boladi",
          text: "Откуда берутся дешёвые Stars и чем опасно каждое предложение?",
        },
        {
          t: "p",
          text: "В клановых чатах предложения обычно выглядят так:",
        },
        {
          t: "table",
          head: [
            "Предложение",
            "Что говорит продавец",
            "Что может случиться по правилам",
            "Риск",
          ],
          rows: [
            [
              "Продажа Stars со своего баланса",
              "«У меня лишние Stars, отдам дёшево»",
              "Продавать или передавать Stars с личного баланса в целях, не указанных в условиях, запрещено",
              "Высокий",
            ],
            [
              "«Посредничество» с подарками",
              "«Куплю подарок за Stars, заплати мне половину»",
              "Источник Stars неизвестен; если его отзовут, за потерянные покупки компенсации нет",
              "Высокий",
            ],
            [
              "Дешёвый NFT-подарок",
              "«Плати сейчас, отправлю потом»",
              "Берут предоплату, а подарок проверить невозможно",
              "Очень высокий",
            ],
            [
              "Акция «бесплатных Stars»",
              "«Переходи по ссылке, раздают Stars»",
              "Акция не подтверждена официальными источниками",
              "Очень высокий",
            ],
          ],
        },
        {
          t: "p",
          text: "Про третий случай подробнее: <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">как распознать предложение купить гифт в игровом чате</a>. Пример четвёртого — <a href=\"/blog/durov-tugilgan-kuni-aksiyasi-firibgarlik-oyinchi\">«акция» ко дню рождения Дурова</a>.",
        },
        {
          t: "p",
          text: "Отдельная ситуация — лидер клана обещает «собрать Stars дешевле всех» на приз для турнира или оформление кланового канала. Тогда риск ложится уже не на одного человека, а на всю команду. Если Stars спишут, за купленные на них подарки или подписку никто ничего не возместит.",
        },
        {
          t: "p",
          text: "Общий признак один: если цена заметно ниже рынка, проверить, откуда взялись Stars, невозможно.",
        },
        {
          t: "h2",
          id: "klandosh-taklifini-qabul-qilishdan-oldin",
          text: "Что проверить, прежде чем принять предложение соклановца?",
        },
        {
          t: "p",
          text: "Знакомый ник и многолетний соклановец — не гарантия: его аккаунт могли взломать. Проверяйте по порядку:",
        },
        {
          t: "steps",
          items: [
            {
              title: "Выясните, кто продавец",
              text: "Если он представляется ботом, убедитесь, что его username заканчивается на «bot». Как это сделать: <a href=\"/blog/game-bilan-tugaydigan-donat-boti-tekshirish\">проверка донат-бота с именем на «…game»</a>.",
            },
            {
              title: "Посмотрите, что у вас просят",
              text: "Если просят код из SMS, пароль, пароль двухэтапной проверки или ключ от кошелька, сразу прекращайте разговор.",
            },
            {
              title: "Спросите, откуда Stars",
              text: "Продажа с личного баланса противоречит условиям. Если ответ уклончивый, откажитесь.",
            },
            {
              title: "Откройте ссылку на подарок",
              text: "У каждого коллекционного подарка есть уникальная ссылка формата t.me/nft (<a href=\"https://telegram.org/blog/wear-gifts-blockchain-and-more\" target=\"_blank\" rel=\"noopener\">блог Telegram</a>). Если ссылку не дают или она ведёт на другой домен, остановитесь.",
            },
            {
              title: "Откажитесь от предоплаты",
              text: "Платите только там, где есть открытая цена, номер заказа и контакт поддержки.",
            },
          ],
        },
        {
          t: "h2",
          id: "klan-uchun-stars-olishning-uch",
          text: "Три способа купить Stars для клана: кто отвечает?",
        },
        {
          t: "p",
          text: "Сравните, что известно о каждом способе:",
        },
        {
          t: "table",
          head: [
            "Способ",
            "Источник Stars",
            "Что нужно",
            "Если возникла проблема",
            "Прозрачность",
          ],
          rows: [
            [
              "Покупаете сами в приложении Telegram",
              "Платёжная система приложения",
              "Способ оплаты в приложении; работает ли узбекская карта, проверьте в приложении",
              "Telegram не возвращает деньги за ненужную покупку",
              "Высокая",
            ],
            [
              "GemPay, <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>",
              "Заказ с открытой ценой",
              "Только @username",
              "Написать с номером заказа в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>",
              "Высокая",
            ],
            [
              "Незнакомый продавец в чате клана",
              "Неизвестен",
              "Чаще всего предоплата",
              "Обратиться некуда",
              "Низкая",
            ],
          ],
        },
        {
          t: "p",
          text: `В GemPay Stars покупаются в сумах: картой UzCard, HUMO, через Click, Uzum Bank или с баланса бота. В одном заказе — от 50 до 10 000 Stars. Одна звезда стоит ${som(STARS_UNIT_CARD, "ru")} при переводе с карты или оплате с баланса и ${som(STARS_UNIT_ONLINE, "ru")} при онлайн-оплате через Click или Uzum Bank. Stars приходят за несколько секунд.`,
        },
        {
          t: "p",
          text: "GemPay — независимый сервис и не действует от имени Telegram.",
        },
        {
          t: "h2",
          id: "taklifni-qabul-qilib-bolgan-bolsangiz",
          text: "Уже согласились на предложение: что делать теперь?",
        },
        {
          t: "list",
          items: [
            "<strong>Не торопитесь тратить.</strong> Не пускайте сомнительные Stars на дорогие покупки. Если их спишут, за купленное на них компенсации не будет.",
            "<strong>Ничего больше не отправляйте.</strong> Если продавец просит ещё денег, код или данные «для подтверждения», откажите. Сохраните переписку.",
            "<strong>Если покупка в боте не пришла, пишите боту.</strong> Если вы купили что-то за Stars в боте или мини-приложении и не получили покупку, отправьте боту команду /paysupport. Разработчик может вернуть Stars без штрафа. Если он отказывается от законного возврата, возьмите ID транзакции в разделе Settings &gt; Your Stars и отправьте жалобу через <a href=\"https://telegram.org/tos/stars\" target=\"_blank\" rel=\"noopener\">страницу условий</a>. Этот порядок описан для покупок в ботах и мини-приложениях, а не для личной сделки в чате.",
            "<strong>Блокчейн — не панацея.</strong> Перенос коллекционного подарка в блокчейн TON (My Profile &gt; Gifts &gt; Transfer &gt; Send via Blockchain) даёт владельцу постоянный контроль. Но можно ли перенести подарок, связанный с возвратом, в этой статье не подтверждено. О сторонних площадках: <a href=\"/blog/sovgani-marketpleysga-otkazish-xavfsizmi-oyinchi\">безопасно ли выводить подарок на маркетплейс</a>.",
            "<strong>Не становитесь продавцом сами.</strong> Продавать соклановцам Stars со своего баланса тоже запрещено условиями.",
          ],
        },
        {
          t: "h2",
          id: "gempayda-jamoadosh-uchun-stars-qanday",
          text: "Как купить Stars для тиммейта в GemPay?",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Откройте <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> и выберите раздел Telegram Stars.",
            "Введите свой @username или username тиммейта. Ни пароль, ни код не нужны.",
            `Выберите количество от 50 до 10 000. Проверьте, что сумма посчитана по цене ${som(STARS_UNIT_CARD, "ru")} или ${som(STARS_UNIT_ONLINE, "ru")}.`,
            "Оплатите картой UzCard, HUMO, через Click, Uzum Bank или с баланса бота. Visa/Mastercard не принимаются, VPN и криптовалюта не нужны.",
            "Stars приходят за несколько секунд. Если заказ не выполнен, деньги полностью возвращаются в течение 3 рабочих дней. При задержке напишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> и укажите номер заказа.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Stars не превращаются в UC, алмазы или CP. Игровая валюта покупается в отдельном разделе бота по Player ID. Подробнее о разделе Stars: <a href=\"/blog/telegram-stars-sotib-olish-gempay\">покупка Stars в GemPay</a>.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Terms of Service for Telegram Stars",
              href: "https://telegram.org/tos/stars",
            },
            {
              label: "Bot Payments API for Digital Goods and Services",
              href: "https://core.telegram.org/bots/payments-stars",
            },
            {
              label: "Telegram Bot API",
              href: "https://core.telegram.org/bots/api",
            },
            {
              label: "Telegram Bot Platform Developer Terms of Service",
              href: "https://telegram.org/tos/bot-developers",
            },
            {
              label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More",
              href: "https://telegram.org/blog/wear-gifts-blockchain-and-more",
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
          q: "Лидер клана собирает со всех на дешёвые Stars для турнирного приза — стоит ли скидываться?",
          a: "Не рекомендуется: продавать и передавать Stars с личного баланса запрещено условиями, а Stars неизвестного происхождения могут потом списать. Для приза берите Stars там, где цена открыта и выдают номер заказа.",
        },
        {
          q: "Если NFT-подарок, купленный на дешёвые Stars, пропадёт, Telegram вернёт деньги?",
          a: "Нет. Telegram ничего не возмещает — ни за списанные Stars, ни за цифровые товары или подписки, потерянные из-за этого.",
        },
        {
          q: "Пост про «схему с возвратами» — правда, и касается ли это меня?",
          a: "Это пост из канала, Telegram его не комментировал, а цифры из него не подтверждены. Однако возвраты и чарджбэки прописаны в официальных документах, так что Stars сомнительного происхождения могут создать проблемы и вам.",
        },
        {
          q: "Продавец из чата взял деньги и не прислал Stars — можно вернуть их через Telegram?",
          a: "Команда /paysupport и жалоба с ID транзакции предусмотрены для покупок в ботах и мини-приложениях. Для личных сделок между людьми условия такого пути не описывают, поэтому вернуть такой платёж сложно.",
        },
        {
          q: "Можно отправить тиммейту Stars, не спрашивая его пароль?",
          a: "Да, в боте GemPay вводится только @username тиммейта. Пароль, код из SMS или вход в аккаунт не запрашиваются.",
        },
        {
          q: "Можно потратить Stars из GemPay на UC в PUBG или алмазы в MLBB?",
          a: "Нет, Stars не конвертируются в игровую валюту. UC, алмазы и CP покупаются в отдельном разделе бота по Player ID.",
        },
      ],
    },
  },
};

export default article;
