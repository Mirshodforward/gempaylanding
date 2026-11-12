// Avtoblogyoz yasagan maqola (2026-11-12). Niyat: Klan yoki o‘yin chatida sotuvchi UC, Stars yoki Premium uchun TON manzil tashlagan. O‘yinchi bu manzilga pul yuborish xavfsizmi va macOS beta’dagi hamyon oynasi egasini tasdiqlaydimi, shuni «chatdagi TON manzilga to‘lash xavfsizmi UC donat» kabi so‘zlar bilan qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://core.telegram.org/bots/api-changelog
//   https://core.telegram.org/bots/api

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "ton-manzilga-donat-tolovi-oyinchi-xavfi",
  game: null,
  type: "trust",
  datePublished: "2026-11-12",
  dateModified: "2026-11-12",
  keywords: ["ton manzilga donat uchun pul yuborish","chatdagi ton manzilga to‘lash xavfsizmi","uc uchun ton manzil firibgarlik","telegram ton manzil sotuvchi tekshirish","stars ton manzil orqali sotib olish","klan chatida ton manzil","ton manzil kimniki telegram","перевод на ton адрес за донат","продавец uc просит оплату в ton","безопасно ли платить на ton адрес в чате","тон адрес мошенники telegram","купить uc без криптовалюты узбекистан"],
  locales: {
    uz: {
      title: "Klan chatidagi TON manzilga UC donat uchun to‘lash xavfsizmi?",
      metaTitle: "Klan chatidagi TON manzilga UC donat uchun to‘lash",
      metaDescription: "Yo‘q: notanish sotuvchining TON manziliga UC, Stars yoki Premium uchun pul yubormang. Manzil pul qayerga ketishini ko‘rsatadi, tovar kelishini emas.",
      excerpt: "Yo‘q: notanish sotuvchining TON manziliga UC, Stars yoki Premium uchun pul yubormang. Manzil pul qayerga ketishini ko‘rsatadi, tovar kelishini emas.",
      answer: "Yo‘q: notanish sotuvchining TON manziliga UC, Stars yoki Premium uchun pul yubormang. Manzil pul qayerga ketishini ko‘rsatadi, tovar kelishini emas.",
      body: [
        {
          t: "h2",
          id: "klan-chatidagi-sotuvchi-uc-uchun",
          text: "Klan chatidagi sotuvchi UC uchun TON manzil yubordi: pul o‘tkazsam bo‘ladimi?",
        },
        {
          t: "p",
          text: "Yo‘q, notanish sotuvchining TON manziliga donat uchun pul yubormang. Manzil faqat pul qayerga borishini ko‘rsatadi. Sotuvchi UC, Stars yoki Premium’ni haqiqatan berishini u hech qanday isbotlamaydi.",
        },
        {
          t: "p",
          text: "Vaziyat odatda bir xil. Squad yoki klan chatida post chiqadi: «PUBG UC arzon, to‘lov faqat TON’da» yoki «Premium sovg‘a qilaman, manzilga tashlang». Ostida harf va raqamlardan iborat uzun satr turadi.",
        },
        {
          t: "p",
          text: "Aslida bu xaridlarning birortasiga hamyon kerak emas. UC va olmos Player ID bo‘yicha olinadi, Stars va Premium uchun @username yetadi. TON, kripto, VPN yoki xorijiy karta shart emas. Batafsil: <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">Telegram Wallet o‘yinchiga kerakmi</a>.",
        },
        {
          t: "p",
          text: "Pulni qaytarishda ham farq bor. Botda qilingan xarid bo‘yicha qo‘llab-quvvatlash xizmatiga buyurtma raqami bilan yozish mumkin. Notanish manzilga ketgan pulni qaytarish yo‘li esa bu maqolada tasdiqlanmagan.",
        },
        {
          t: "h2",
          id: "sotuvchi-nega-aynan-tonda-tolashni",
          text: "Sotuvchi nega aynan TON’da to‘lashni so‘raydi?",
        },
        {
          t: "p",
          text: "Halol sotuvchiga to‘lov usulini cheklashning foydasi kam: xaridor qancha ko‘p usulda to‘lay olsa, savdo shuncha ko‘p bo‘ladi. «Faqat TON» degan shartning o‘zi bir narsani bildiradi: siz bilan sotuvchi o‘rtasida hech kim qolmaydi.",
        },
        {
          t: "p",
          text: "Bunday to‘lovda bularning birortasi bo‘lmaydi:",
        },
        {
          t: "list",
          items: [
            "<strong>buyurtma raqami</strong>, ya’ni nimaga to‘laganingizni ko‘rsatadigan yozuv;",
            "<strong>nik tekshiruvi</strong>, ya’ni UC aynan sizning akkauntingizga borishini to‘lovdan oldin ko‘rish;",
            "<strong>mustaqil yordam xizmati</strong>, ya’ni sotuvchi javob bermay qo‘ysa yozadigan joy.",
          ],
        },
        {
          t: "p",
          text: "Misol: o‘yinchi 660 UC uchun chatdagi manzilga TON yuboradi. Sotuvchi «tranzaksiya ko‘rinmayapti, yana bir marta yubor» deydi, keyin uni bloklaydi. Na nik, na buyurtma raqami bor. O‘yinchi faqat manzilni va yozishmani saqlab qoladi.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "telegram-ton-manzilni-taniganini-sotuvchi",
          text: "Telegram TON manzilni taniganini sotuvchi tekshirilgani deb tushunish to‘g‘rimi?",
        },
        {
          t: "p",
          text: "Yo‘q. Bot API 10.4 versiyasida xabar elementlariga TON blokcheynidagi manzillar uchun «ton_address» turi qo‘shilgan (<a href=\"https://core.telegram.org/bots/api-changelog\" target=\"_blank\" rel=\"noopener\">Bot API changelog</a>). Hujjatda bu tur «TON blokcheynidagi manzil» deb ta’riflangan va ro‘yxatda bank karta raqami turi («bank_card_number») bilan yonma-yon turadi (<a href=\"https://core.telegram.org/bots/api\" target=\"_blank\" rel=\"noopener\">Telegram Bot API</a>). Rich xabarlar uchun alohida RichTextTonAddress klassi ham qo‘shilgan.",
        },
        {
          t: "p",
          text: "Demak, Telegram satrni ko‘rinishiga qarab manzil deb aniqlaydi, xuddi karta raqamini aniqlagani kabi. Bu sotuvchining halolligi haqida hech narsa demaydi. Firibgarning manzili ham, jamoadoshingizning manzili ham chatda bir xil ko‘rinadi.",
        },
        {
          t: "p",
          text: "Chatda bosiladigan karta raqami kartaning egasi vijdonli ekanini anglatmaydi. TON manzil uchun ham shu qoida ishlaydi.",
        },
        {
          t: "h2",
          id: "macos-betada-manzil-yonida-profil",
          text: "macOS beta’da manzil yonida profil chiqsa, sotuvchiga ishonsa bo‘ladimi?",
        },
        {
          t: "p",
          text: "Bu mavzu bitta Telegram kanali postidan tarqalgan. Unda macOS beta versiyasida TON manzil bosilsa, hamyon egasi ko‘rinadigan yangi oyna ochilishi aytilgan.",
        },
        {
          t: "note",
          tone: "info",
          text: "Bu oyna, undagi imkoniyatlar va qaysi versiyada chiqqani rasmiy manbada tasdiqlanmagan. Uni mish-mish deb qabul qiling.",
        },
        {
          t: "p",
          text: "Rasmiy hujjatlarda esa boshqa narsa bor. Bot API’ga TON hamyon kartasi uchun TonWalletCard klassi va ton_wallet_card maydoni qo‘shilgan (<a href=\"https://core.telegram.org/bots/api-changelog\" target=\"_blank\" rel=\"noopener\">Bot API changelog</a>). Shaxsiy chatlarda bu karta foydalanuvchining profil sahifasida ko‘rsatiladi (<a href=\"https://core.telegram.org/bots/api\" target=\"_blank\" rel=\"noopener\">Telegram Bot API</a>).",
        },
        {
          t: "p",
          text: "Faraz qiling, manzil yonida sotuvchining profili haqiqatan ko‘rindi. Bundan faqat bitta xulosa chiqadi: hamyon shu akkauntga bog‘langan. Sotuvchi UC’ni yuborishiga bu dalil emas. Firibgar o‘z hamyonini o‘z profiliga ulab qo‘yishi mumkin, chunki «tekshirilgan» ko‘rinish unga ko‘proq ishonch keltiradi.",
        },
        {
          t: "p",
          text: "Eksplorerdagi tranzaksiyalar tarixi ham faqat hamyon ishlatilayotganini ko‘rsatadi. Bu haqda: <a href=\"/blog/gram-org-eksplorer-oyinchiga-kerakmi\">gram.org eksplorer o‘yinchiga kerakmi</a>.",
        },
        {
          t: "h2",
          id: "sotuvchining-qaysi-gaplaridan-keyin-suhbatni",
          text: "Sotuvchining qaysi gaplaridan keyin suhbatni to‘xtatish kerak?",
        },
        {
          t: "p",
          text: "Quyidagilardan bittasi bo‘lsa ham, pul yubormang:",
        },
        {
          t: "list",
          items: [
            "<strong>«Faqat TON, karta olmayman».</strong> So‘mda to‘lash va xaridni tekshirish yo‘li ataylab yopilyapti.",
            "<strong>Bozordan ancha past narx va «aksiya hozir tugaydi».</strong> Shoshiltirishdan maqsad o‘ylab olishga vaqt qoldirmaslik.",
            "<strong>Notanish «garant» yoki vositachi bot.</strong> Uning username’ini tekshiring: <a href=\"/blog/game-bilan-tugaydigan-donat-boti-tekshirish\">«…game» bilan tugaydigan donat boti</a>.",
            "<strong>Jamoadosh kutilmaganda «mana shu manzilga tashla» deb yozadi.</strong> Akkaunti buzilgan bo‘lishi mumkin. Unga boshqa yo‘l bilan murojaat qiling: ovozli qo‘ng‘iroq qiling yoki o‘yin ichidagi chatda yozing.",
            "<strong>«To‘lov o‘tdi» degan skrinshot.</strong> Bot API’da hamyon o‘tkazmalari uchun xizmat xabarlari bor (<a href=\"https://core.telegram.org/bots/api-changelog\" target=\"_blank\" rel=\"noopener\">changelog</a>), lekin chatga tashlangan rasm xizmat xabari emas. Bunday rasmni soxtalashtirish oson. Faqat o‘yindagi balansga ishoning.",
            "<strong>Player ID bilan birga parol, SMS kod yoki seed-ibora so‘ralishi.</strong> Bu to‘g‘ridan-to‘g‘ri o‘g‘irlik. Boshqa sxemalar: <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">o‘yin chatida firibgarlikni tanish</a>.",
          ],
        },
        {
          t: "h2",
          id: "chatdagi-ton-manzil-va-gempayuz",
          text: "Chatdagi TON manzil va @Gempayuz_bot: nimasi bilan farq qiladi?",
        },
        {
          t: "table",
          head: [
            "Mezon",
            "Chatdagi sotuvchi, TON manzilga",
            "@Gempayuz_bot, so‘mda",
          ],
          rows: [
            [
              "Sizdan nima kerak",
              "Hamyon va kripto",
              "Player ID yoki @username",
            ],
            [
              "To‘lov usuli",
              "Faqat TON",
              "UzCard, HUMO, Click, Uzum Bank, bot balansi; Rossiyadan SBP",
            ],
            [
              "To‘lovdan oldin nik",
              "Ko‘rsatilmaydi",
              "Nik ko‘rsatiladi, tasdiqlagandan keyin to‘lanadi",
            ],
            [
              "Qachon tushadi",
              "Sotuvchi nima va’da qilsa",
              "O‘yin valyutasi 1–5 daqiqada, Stars va Premium bir necha soniyada",
            ],
            [
              "Buyurtma bajarilmasa",
              "Qaytarish tartibi tasdiqlanmagan",
              "Pul 3 ish kuni ichida to‘liq qaytariladi",
            ],
            [
              "Kimga yoziladi",
              "Faqat sotuvchining o‘ziga",
              "@StarsPaymeeSupport, buyurtma raqami bilan",
            ],
          ],
        },
        {
          t: "p",
          text: "Botda ikkita cheklovni bilib qo‘ying: hisobga tushib bo‘lgan valyuta qaytarilmaydi, Visa va Mastercard qabul qilinmaydi.",
        },
        {
          t: "p",
          text: "GemPay mustaqil xizmat. U Telegram yoki o‘yin ishlab chiquvchilari bilan hamkorlik qilishini da’vo qilmaydi. Asosiy farq shunda: nimaga va kimning akkauntiga to‘layotganingiz to‘lovdan oldin ko‘rinadi.",
        },
        {
          t: "h2",
          id: "pul-manzilga-ketib-bolgan-bolsa",
          text: "Pul manzilga ketib bo‘lgan bo‘lsa nima qilaman?",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Boshqa pul yubormang: «tekshiruv», «komissiya» yoki «aktivlashtirish» uchun ham. Ikkinchi to‘lovni so‘rash ham ko‘pincha sxemaning bir qismi.",
            "Yozishmani, manzilni va o‘tkazma ma’lumotlarini saqlang. Chatni o‘chirmang.",
            "Sotuvchi akkauntiga shikoyat qiling va klan adminlarini ogohlantiring. Shikoyatlar qanday ko‘rib chiqiladi: <a href=\"/blog/klan-chatida-shubhali-havola-spam-cheklov\">klan chatida shubhali havola</a>.",
            "Kod, parol yoki hamyon kalitini bergan bo‘lsangiz, darhol ikki bosqichli tekshiruv parolini yoqing va begona seanslarni yoping. To‘liq ro‘yxat: <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">o‘yin hisobini xavfsiz to‘ldirish</a>.",
            "O‘yindagi balansni tekshiring. UC tushmagan bo‘lsa, keyingi xaridni nik tekshiriladigan yo‘l bilan, Player ID orqali qiling.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "TON o‘tkazmasini bekor qilish mumkinmi, bu maqolada tasdiqlanmagan. GemPay boshqa sotuvchiga qilingan to‘lovni qaytara olmaydi, chunki bu pul uning tizimidan o‘tmagan.",
        },
        {
          t: "h2",
          id: "donatni-hamyon-va-kriptosiz-qanday",
          text: "Donatni hamyon va kriptosiz qanday olaman?",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "<a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>’ni oching va bo‘limni tanlang: o‘yin, Stars yoki Premium.",
            "O‘yin uchun Player ID kiriting. Stars yoki Premium uchun o‘zingizning yoki jamoadoshingizning @username’ini yozing. Parol so‘ralmaydi.",
            "O‘yin bo‘limida bot ko‘rsatgan nikni tekshiring. Nik to‘g‘ri bo‘lsa, tasdiqlang.",
            `UzCard, HUMO, Click, Uzum Bank yoki bot balansi bilan to‘lang. 1 ta Stars karta yoki balansdan to‘lansa ${som(STARS_UNIT_CARD, "uz")}, Click yoki Uzum Bank orqali to‘lansa ${som(STARS_UNIT_ONLINE, "uz")} turadi. Bir buyurtmada 50 tadan 10 000 tagacha Stars olish mumkin. Premium: 3 oy — ${som(premium(3), "uz")}, 6 oy — ${som(premium(6), "uz")}, 12 oy — ${som(premium(12), "uz")}. 1 oylik tarif yo‘q.`,
            "Natijani tekshiring. O‘yin valyutasi 1–5 daqiqada tushadi, Stars bir necha soniyada keladi. Jamoadoshga Premium Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi, uning akkauntiga hech kim kirmaydi.",
          ],
        },
        {
          t: "p",
          text: "Stars o‘yin valyutasiga aylanmaydi: UC kerak bo‘lsa, o‘yin bo‘limini tanlang. Qaytarish shartlari: <a href=\"/tolov-va-qaytarish\">To‘lov va qaytarish</a>.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Bot API changelog",
              href: "https://core.telegram.org/bots/api-changelog",
            },
            {
              label: "Telegram Bot API",
              href: "https://core.telegram.org/bots/api",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Sotuvchi «TON’da to‘lasang chegirma beraman» desa, rozi bo‘laymi?",
          a: "Rozi bo‘lmang. Chegirma ko‘pincha xaridorni tekshirib bo‘lmaydigan to‘lovga ko‘ndirish uchun taklif qilinadi. UC kelmasa, chegirmaning o‘zi emas, to‘langan butun summa yo‘qoladi.",
        },
        {
          q: "Tonscan’da manzil orqali ko‘p tranzaksiya o‘tgan bo‘lsa, sotuvchi ishonchli degani bo‘ladimi?",
          a: "Yo‘q. Tarixdan hamyon faol ekani ko‘rinadi, lekin o‘sha to‘lovlar uchun kimdir UC olgani ko‘rinmaydi. Ko‘p odamni aldagan hamyon ham faol bo‘ladi.",
        },
        {
          q: "Jamoadoshimga Premium sovg‘a qilmoqchiman. Uning TON manzilini so‘rashim kerakmi?",
          a: "Shart emas. Botga uning @username’ini yozasiz, qolganini Telegram’ning sovg‘a mexanizmi bajaradi. Jamoadoshingizdan kod ham, parol ham so‘ralmaydi.",
        },
        {
          q: "Chatdagi sotuvchiga TON yubordim, UC kelmadi. GemPay yordam bera oladimi?",
          a: "Bu pulni GemPay qaytara olmaydi, chunki to‘lov uning botidan o‘tmagan. GemPay faqat @Gempayuz_bot’da qilingan buyurtmalar uchun javob beradi: ular bajarilmasa, pul 3 ish kuni ichida qaytariladi.",
        },
        {
          q: "Stars’ni faqat kripto bilan olish mumkinmi?",
          a: "Yo‘q. @Gempayuz_bot’da Stars @username bo‘yicha so‘mda olinadi. To‘lov uchun mahalliy karta, Click, Uzum Bank yoki bot balansi yetadi.",
        },
        {
          q: "Sotuvchi «TON keldi, lekin men ko‘rmayapman, qayta yubor» desa nima qilaman?",
          a: "Ikkinchi marta yubormang, bu keng tarqalgan usul. Yozishma va manzilni saqlab qo‘ying, sotuvchi akkauntiga shikoyat qiling va klan adminlarini ogohlantiring.",
        },
      ],
    },
    ru: {
      title: "Безопасно ли платить за UC на TON-адрес из клан-чата?",
      metaTitle: "Безопасно ли платить за UC на TON-адрес из клан-чата?",
      metaDescription: "Нет: не переводите деньги на TON-адрес незнакомого продавца за UC, Stars или Premium. Адрес показывает, куда уйдут деньги, но не гарантирует товар.",
      excerpt: "Нет: не переводите деньги на TON-адрес незнакомого продавца за UC, Stars или Premium. Адрес показывает, куда уйдут деньги, но не гарантирует товар.",
      answer: "Нет: не переводите деньги на TON-адрес незнакомого продавца за UC, Stars или Premium. Адрес показывает, куда уйдут деньги, но не гарантирует товар.",
      body: [
        {
          t: "h2",
          id: "klan-chatidagi-sotuvchi-uc-uchun",
          text: "Продавец в клан-чате прислал TON-адрес для оплаты UC: переводить деньги?",
        },
        {
          t: "p",
          text: "Нет, не переводите деньги на TON-адрес незнакомого продавца за донат. Адрес показывает только, куда уйдут деньги. Он ничем не доказывает, что продавец действительно отдаст UC, Stars или Premium.",
        },
        {
          t: "p",
          text: "Обычно всё выглядит одинаково. В чате сквада или клана появляется пост: «PUBG UC дёшево, оплата только в TON» или «Подарю Premium, кидай на адрес». Под ним длинная строка из букв и цифр.",
        },
        {
          t: "p",
          text: "На самом деле ни для одной из этих покупок кошелёк не нужен. UC и алмазы покупаются по Player ID, для Stars и Premium хватает @username. TON, криптовалюта, VPN или зарубежная карта не требуются. Подробнее: <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">нужен ли игроку Telegram Wallet</a>.",
        },
        {
          t: "p",
          text: "Разница есть и в возврате денег. По покупке в боте можно написать в поддержку с номером заказа. А способ вернуть деньги, ушедшие на незнакомый адрес, в этой статье не подтверждён.",
        },
        {
          t: "h2",
          id: "sotuvchi-nega-aynan-tonda-tolashni",
          text: "Почему продавец просит платить именно в TON?",
        },
        {
          t: "p",
          text: "Честному продавцу мало пользы ограничивать способы оплаты: чем больше способов есть у покупателя, тем больше продаж. Условие «только TON» говорит об одном: между вами и продавцом не остаётся никого.",
        },
        {
          t: "p",
          text: "При такой оплате нет ничего из этого:",
        },
        {
          t: "list",
          items: [
            "<strong>номера заказа</strong>, то есть записи о том, за что вы заплатили;",
            "<strong>проверки ника</strong>, то есть возможности до оплаты увидеть, что UC уйдут именно на ваш аккаунт;",
            "<strong>независимой поддержки</strong>, то есть места, куда писать, если продавец перестал отвечать.",
          ],
        },
        {
          t: "p",
          text: "Пример: игрок отправляет TON на адрес из чата за 660 UC. Продавец пишет: «Транзакции не вижу, отправь ещё раз», а потом блокирует его. Ни ника, ни номера заказа нет. У игрока остаются только адрес и переписка.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "telegram-ton-manzilni-taniganini-sotuvchi",
          text: "Если Telegram распознаёт TON-адрес, значит ли это, что продавец проверен?",
        },
        {
          t: "p",
          text: "Нет. В версии Bot API 10.4 в элементы сообщений добавили тип «ton_address» для адресов в блокчейне TON (<a href=\"https://core.telegram.org/bots/api-changelog\" target=\"_blank\" rel=\"noopener\">Bot API changelog</a>). В документации этот тип описан как «адрес в блокчейне TON» и стоит в списке рядом с типом номера банковской карты («bank_card_number») (<a href=\"https://core.telegram.org/bots/api\" target=\"_blank\" rel=\"noopener\">Telegram Bot API</a>). Для rich-сообщений добавили и отдельный класс RichTextTonAddress.",
        },
        {
          t: "p",
          text: "Получается, Telegram определяет строку как адрес по её виду — так же, как определяет номер карты. О честности продавца это ничего не говорит. Адрес мошенника и адрес вашего тиммейта в чате выглядят одинаково.",
        },
        {
          t: "p",
          text: "Кликабельный номер карты в чате не означает, что её владелец добросовестный. С TON-адресом работает то же правило.",
        },
        {
          t: "h2",
          id: "macos-betada-manzil-yonida-profil",
          text: "В бете для macOS рядом с адресом показывается профиль — можно доверять продавцу?",
        },
        {
          t: "p",
          text: "Эта тема разошлась из одного поста в Telegram-канале. В нём говорится, что в бета-версии для macOS при нажатии на TON-адрес открывается новое окно, где виден владелец кошелька.",
        },
        {
          t: "note",
          tone: "info",
          text: "Это окно, его возможности и версия, в которой оно появилось, официальным источником не подтверждены. Считайте это слухом.",
        },
        {
          t: "p",
          text: "В официальной документации есть другое. В Bot API добавили класс TonWalletCard и поле ton_wallet_card для карточки TON-кошелька (<a href=\"https://core.telegram.org/bots/api-changelog\" target=\"_blank\" rel=\"noopener\">Bot API changelog</a>). В личных чатах эта карточка показывается на странице профиля пользователя (<a href=\"https://core.telegram.org/bots/api\" target=\"_blank\" rel=\"noopener\">Telegram Bot API</a>).",
        },
        {
          t: "p",
          text: "Допустим, рядом с адресом действительно показался профиль продавца. Из этого следует только одно: кошелёк привязан к этому аккаунту. Это не доказывает, что продавец отправит UC. Мошенник вполне может привязать свой кошелёк к своему профилю: «проверенный» вид вызывает больше доверия.",
        },
        {
          t: "p",
          text: "История транзакций в эксплорере тоже показывает лишь то, что кошельком пользуются. Об этом: <a href=\"/blog/gram-org-eksplorer-oyinchiga-kerakmi\">нужен ли игроку эксплорер gram.org</a>.",
        },
        {
          t: "h2",
          id: "sotuvchining-qaysi-gaplaridan-keyin-suhbatni",
          text: "После каких слов продавца пора прекращать разговор?",
        },
        {
          t: "p",
          text: "Если есть хотя бы один пункт из списка, деньги не отправляйте:",
        },
        {
          t: "list",
          items: [
            "<strong>«Только TON, карту не принимаю».</strong> Оплату в сумах и проверку покупки намеренно исключают.",
            "<strong>Цена сильно ниже рынка и «акция вот-вот закончится».</strong> Торопят, чтобы не оставить времени подумать.",
            "<strong>Незнакомый «гарант» или бот-посредник.</strong> Проверьте его username: <a href=\"/blog/game-bilan-tugaydigan-donat-boti-tekshirish\">донат-бот с именем на «…game»</a>.",
            "<strong>Тиммейт неожиданно пишет «кинь на этот адрес».</strong> Его аккаунт могли взломать. Свяжитесь с ним другим способом: позвоните голосом или напишите во внутриигровой чат.",
            "<strong>Скриншот «оплата прошла».</strong> В Bot API есть служебные сообщения для переводов из кошелька (<a href=\"https://core.telegram.org/bots/api-changelog\" target=\"_blank\" rel=\"noopener\">changelog</a>), но картинка, брошенная в чат, — не служебное сообщение. Подделать её легко. Верьте только балансу в игре.",
            "<strong>Вместе с Player ID просят пароль, SMS-код или seed-фразу.</strong> Это прямая кража. Другие схемы: <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">как распознать мошенничество в игровом чате</a>.",
          ],
        },
        {
          t: "h2",
          id: "chatdagi-ton-manzil-va-gempayuz",
          text: "TON-адрес из чата и @Gempayuz_bot: в чём разница?",
        },
        {
          t: "table",
          head: [
            "Критерий",
            "Продавец из чата, на TON-адрес",
            "@Gempayuz_bot, в сумах",
          ],
          rows: [
            [
              "Что нужно от вас",
              "Кошелёк и криптовалюта",
              "Player ID или @username",
            ],
            [
              "Способ оплаты",
              "Только TON",
              "UzCard, HUMO, Click, Uzum Bank, баланс бота; из России — СБП",
            ],
            [
              "Ник до оплаты",
              "Не показывается",
              "Ник показывается, оплата после подтверждения",
            ],
            [
              "Когда приходит",
              "Как пообещает продавец",
              "Игровая валюта за 1–5 минут, Stars и Premium за несколько секунд",
            ],
            [
              "Если заказ не выполнен",
              "Порядок возврата не подтверждён",
              "Деньги полностью возвращаются в течение 3 рабочих дней",
            ],
            [
              "Куда писать",
              "Только самому продавцу",
              "@StarsPaymeeSupport, с номером заказа",
            ],
          ],
        },
        {
          t: "p",
          text: "Учтите два ограничения бота: уже зачисленная на счёт валюта не возвращается, Visa и Mastercard не принимаются.",
        },
        {
          t: "p",
          text: "GemPay — независимый сервис. Он не заявляет о сотрудничестве с Telegram или разработчиками игр. Главное отличие в другом: за что и на чей аккаунт вы платите, видно ещё до оплаты.",
        },
        {
          t: "h2",
          id: "pul-manzilga-ketib-bolgan-bolsa",
          text: "Деньги уже ушли на адрес — что делать?",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Больше ничего не отправляйте — ни за «проверку», ни за «комиссию», ни за «активацию». Просьба о втором платеже часто тоже часть схемы.",
            "Сохраните переписку, адрес и данные перевода. Чат не удаляйте.",
            "Пожалуйтесь на аккаунт продавца и предупредите админов клана. Как рассматриваются жалобы: <a href=\"/blog/klan-chatida-shubhali-havola-spam-cheklov\">подозрительная ссылка в клан-чате</a>.",
            "Если вы отдали код, пароль или ключ от кошелька, сразу включите облачный пароль (двухэтапную проверку) и завершите чужие сеансы. Полный список: <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">как безопасно пополнять игровой счёт</a>.",
            "Проверьте баланс в игре. Если UC не пришли, следующую покупку делайте по Player ID — там, где ник проверяется.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Можно ли отменить перевод в TON, в этой статье не подтверждено. GemPay не может вернуть деньги, отправленные другому продавцу: они не проходили через его систему.",
        },
        {
          t: "h2",
          id: "donatni-hamyon-va-kriptosiz-qanday",
          text: "Как получить донат без кошелька и криптовалюты?",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Откройте <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> и выберите раздел: игра, Stars или Premium.",
            "Для игры введите Player ID. Для Stars или Premium укажите свой @username или username тиммейта. Пароль не нужен.",
            "В разделе игры проверьте ник, который покажет бот. Если всё верно — подтвердите.",
            `Оплатите через UzCard, HUMO, Click, Uzum Bank или с баланса бота. 1 Stars стоит ${som(STARS_UNIT_CARD, "ru")} при оплате картой или с баланса и ${som(STARS_UNIT_ONLINE, "ru")} — через Click или Uzum Bank. В одном заказе можно взять от 50 до 10 000 Stars. Premium: 3 месяца — ${som(premium(3), "ru")}, 6 месяцев — ${som(premium(6), "ru")}, 12 месяцев — ${som(premium(12), "ru")}. Тарифа на 1 месяц нет.`,
            "Проверьте результат. Игровая валюта приходит за 1–5 минут, Stars — за несколько секунд. Тиммейту Premium подключается через официальный механизм подарков Telegram, в его аккаунт никто не входит.",
          ],
        },
        {
          t: "p",
          text: "Stars не превращаются в игровую валюту: если нужны UC, выбирайте раздел игры. Условия возврата: <a href=\"/tolov-va-qaytarish\">Оплата и возврат</a>.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Bot API changelog",
              href: "https://core.telegram.org/bots/api-changelog",
            },
            {
              label: "Telegram Bot API",
              href: "https://core.telegram.org/bots/api",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Продавец обещает скидку, если заплатить в TON. Соглашаться?",
          a: "Не соглашайтесь. Скидкой часто уговаривают на оплату, которую нельзя проверить. Если UC не придут, вы потеряете не только скидку, а всю заплаченную сумму.",
        },
        {
          q: "Если через адрес в Tonscan прошло много транзакций, значит продавец надёжный?",
          a: "Нет. История показывает, что кошелёк активен, но не показывает, получил ли кто-то UC за эти платежи. Кошелёк, через который обманули многих, тоже выглядит активным.",
        },
        {
          q: "Хочу подарить тиммейту Premium. Нужно спрашивать его TON-адрес?",
          a: "Не нужно. Вы пишете боту его @username, остальное делает механизм подарков Telegram. У тиммейта не спрашивают ни код, ни пароль.",
        },
        {
          q: "Отправил TON продавцу из чата, UC не пришли. GemPay поможет?",
          a: "Вернуть эти деньги GemPay не может: платёж не проходил через его бота. GemPay отвечает только за заказы в @Gempayuz_bot — если такой заказ не выполнен, деньги возвращаются в течение 3 рабочих дней.",
        },
        {
          q: "Stars можно купить только за криптовалюту?",
          a: "Нет. В @Gempayuz_bot Stars покупаются в сумах по @username. Для оплаты хватит местной карты, Click, Uzum Bank или баланса бота.",
        },
        {
          q: "Продавец пишет: «TON пришли, но я их не вижу, отправь ещё раз». Что делать?",
          a: "Второй раз не отправляйте — это распространённый приём. Сохраните переписку и адрес, пожалуйтесь на аккаунт продавца и предупредите админов клана.",
        },
      ],
    },
  },
};

export default article;
