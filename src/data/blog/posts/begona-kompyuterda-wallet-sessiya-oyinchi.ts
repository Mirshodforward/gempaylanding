// Avtoblogyoz yasagan maqola (2026-11-11). Niyat: Kompyuter klubida yoki do‘stining kompyuterida Telegram’ga kirib, hamyonni Fragment’ga ulagan o‘yinchi bu ulanish telefoniga ham o‘tishi va begona kompyuterda qolgan sessiya orqali hamyoni, Stars’i yoki akkauntiga kirilishi mumkinligidan xavotirda. U «begona kompyuterda telegram wallet sessiya xavfi» kabi so‘zlar bilan qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://core.telegram.org/api/gifts
//   https://telegram.org/blog/wear-gifts-blockchain-and-more
//   https://fragment.com/terms

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "begona-kompyuterda-wallet-sessiya-oyinchi",
  game: null,
  type: "trust",
  datePublished: "2026-11-11",
  dateModified: "2026-11-11",
  keywords: ["begona kompyuterda telegram wallet sessiyasi","kompyuter klubida telegramdan chiqish","fragment hamyon ulanishini uzish","telegram seansni yakunlash telefondan","telegram wallet sinxronlash xavfi","hamyon sessiyasi o'g'irlanishi","сессия telegram wallet на чужом компьютере","как выйти из telegram на чужом компьютере","отключить кошелек от fragment","синхронизация telegram wallet между устройствами","кража сессии ton кошелька"],
  locales: {
    uz: {
      title: "Begona kompyuterda Telegram Wallet sessiyasi: hamyon va Stars xavfdami?",
      metaTitle: "Begona kompyuterda Telegram Wallet sessiyasi",
      metaDescription: "Xavf bor: begona kompyuterda qolgan Telegram seansi va Fragment ulanishini darhol yoping. Ulanish telefonga sinxronlanishi esa rasman tasdiqlanmagan.",
      excerpt: "Xavf bor: begona kompyuterda qolgan Telegram seansi va Fragment ulanishini darhol yoping. Ulanish telefonga sinxronlanishi esa rasman tasdiqlanmagan.",
      answer: "Xavf bor: begona kompyuterda qolgan Telegram seansi va Fragment ulanishini darhol yoping. Ulanish telefonga sinxronlanishi esa rasman tasdiqlanmagan.",
      body: [
        {
          t: "h2",
          id: "klubdagi-kompyuterda-ulangan-hamyon-endi",
          text: "Klubdagi kompyuterda ulangan hamyon endi telefoningizda ham chiqadimi?",
        },
        {
          t: "p",
          text: "Yangi Telegram Wallet ulanishlarni qurilmalar o‘rtasida sinxronlashini Telegram, TON yoki Fragment rasman tasdiqlamagan. Bu gap Telegram kanalidagi postdan tarqaldi. Postga ko‘ra, hamyonni kompyuterda Fragment’ga ulasangiz, xuddi shu sessiya telefonda ham paydo bo‘ladi.",
        },
        {
          t: "p",
          text: "Postda «bitta sessiyani o‘g‘irlashsa, hammasiga kirish olinadi» degan fikr ham bor. Bu rasmiy bayonot emas, kanal muallifining taxmini. Hamyon sessiyasi shu yo‘l bilan o‘g‘irlanganini tasdiqlaydigan rasmiy ma’lumot topilmadi.",
        },
        {
          t: "p",
          text: "Ammo xavotiringiz o‘rinli. Sinxronlash chiqadimi-yo‘qmi, klub kompyuterida ochiq qolgan Telegram yoki brauzerdagi Fragment sahifasini sizdan keyin o‘tirgan odam ko‘rishi mumkin. Shuning uchun quyidagi reja hali chiqmagan funksiyaga emas, hozirgi holatga qaratilgan.",
        },
        {
          t: "p",
          text: "Yangi funksiya chiqqanini rasmiy kanallar va ilova yangilanishidan bilasiz. Klan chatidagi skrinshot buni isbotlamaydi. Hamyon o‘yinchiga umuman kerakmi, degan savolga alohida javob berganmiz: <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">Telegram Wallet o‘yinchiga kerakmi</a>.",
        },
        {
          t: "h2",
          id: "begona-kompyuterda-aynan-nima-qolib",
          text: "Begona kompyuterda aynan nima qolib ketishi mumkin?",
        },
        {
          t: "p",
          text: "Klubdan chiqib ketganingizda kompyuterda bir nechta narsa qolishi mumkin. Ularning xavfi ham, yopilish usuli ham har xil.",
        },
        {
          t: "table",
          head: [
            "Nima qoladi",
            "Keyingi odam nimaga kira oladi",
            "Qanday yopiladi",
          ],
          rows: [
            [
              "Telegram Desktop yoki Web seansi",
              "Chatlar, klan guruhi, Stars sarflanadigan to‘lov oynalari",
              "Ilovadan chiqish va telefondan seansni yakunlash",
            ],
            [
              "Brauzerda ochiq Fragment sahifasi va ulangan hamyon",
              "Hamyonga bog‘langan kolleksiyalar ko‘rinadi, sahifa orqali amal boshlanishi mumkin",
              "Saytdan chiqish, ulanishni hamyon ilovasida tekshirish",
            ],
            [
              "Brauzerda saqlangan parol, avtoto‘ldirish, yuklangan fayllar",
              "Saytlarga qayta kirish",
              "Tarix va saqlangan ma’lumotlarni o‘chirish, inkognito rejim",
            ],
            [
              "Kompyuterga yozilgan seed so‘zlar yoki skrinshot",
              "Hamyonning o‘zi butunlay boshqa qo‘lga o‘tadi",
              "Faylni o‘chirish va aktivlarni yangi hamyonga o‘tkazish",
            ],
          ],
        },
        {
          t: "p",
          text: "<a href=\"https://fragment.com/terms\" target=\"_blank\" rel=\"noopener\">Fragment shartlari</a>ga ko‘ra, u yerda olingan kolleksiyalar egasining TON hamyoniga bog‘lanadi. Kirish ma’lumotlari, qurilma va zaxira nusxani saqlash uchun esa faqat foydalanuvchi javob beradi.",
        },
        {
          t: "p",
          text: "Do‘stingizning kompyuteri klubnikidan xavfsizroq tuyuladi, lekin qoida bir xil. Do‘stingiz yomon niyatli bo‘lmasa ham, uning kompyuterida virus bo‘lishi yoki ukasi Telegram’ni ochib qolishi mumkin.",
        },
        {
          t: "note",
          tone: "info",
          text: "Klub kompyuteridagi Telegram’dan chiqsangiz, faqat Telegram yopiladi. Brauzerdagi Fragment va hamyon ulanishi o‘z holicha qolgan deb hisoblang va uni alohida tekshiring.",
        },
        {
          t: "p",
          text: "Hamyonni Fragment’dan uzishning aniq tartibi bu maqolada tasdiqlanmagan. Tugma qayerdaligini hamyon ilovangizdan qidiring.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "klubdan-chiqayotganda-va-uyga-kelganda",
          text: "Klubdan chiqayotganda va uyga kelganda nima qilish kerak?",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Kompyuterdan turishdan oldin Telegram Desktop yoki Web’dan to‘liq chiqing. Shunchaki oynani yopsangiz, seans tugamaydi.",
            "Brauzerda Fragment va hamyon ulangan boshqa saytlardan chiqing. Tarix, cookie va saqlangan parollarni o‘chiring.",
            "Telefonda Telegram sozlamalaridagi faol seanslar ro‘yxatini («Qurilmalar» bo‘limi) oching va klub kompyuteridagi seansni yakunlang. Notanish qurilma ko‘rinsa, uni ham yoping.",
            "Hamyon ilovasida ulangan saytlar ro‘yxatini ko‘ring va tanimaganlarini uzing. Bu bo‘lim har ilovada boshqa joyda turadi.",
            "Telegram’da ikki bosqichli tekshiruv parolini yoqing yoki almashtiring. Batafsil: <a href=\"/blog/888-anonim-raqam-oyinchi-akkaunt-himoyasi\">+888 akkauntni himoyalash</a>.",
          ],
        },
        {
          t: "p",
          text: "Eng oddiy himoya — begona kompyuterda hamyonni umuman ulamaslik. Klubda o‘ynash uchun hamyon kerak emas.",
        },
        {
          t: "h2",
          id: "hamyonda-ton-yoki-nft-sovga",
          text: "Hamyonda TON yoki NFT sovg‘a bo‘lsa, xavf nega jiddiyroq?",
        },
        {
          t: "p",
          text: "Telegram akkauntidagi muammoni ko‘pincha seansni yopib hal qilsa bo‘ladi. Blokcheynda esa «orqaga» tugmasi yo‘q. <a href=\"https://fragment.com/terms\" target=\"_blank\" rel=\"noopener\">Fragment shartlari</a>da buning sabablari aniq yozilgan:",
        },
        {
          t: "list",
          items: [
            "TON blokcheynidagi tranzaksiyalar qaytarilmaydi. Klubda kimdir hamyoningizdan o‘tkazma qilsa, uni bekor qilib bo‘lmaydi.",
            "Kirish ma’lumotlari yo‘qolsa, Fragment hamyonni ham, undagi kolleksiyalarni ham tiklay olmaydi.",
            "Pul chiqarishdan oldin to‘g‘ri hamyon ulanganini tekshirish foydalanuvchining o‘z vazifasi. Begona kompyuterda shoshilib, avvalgi foydalanuvchi qoldirgan hamyonni tanlab yuborish oson.",
          ],
        },
        {
          t: "p",
          text: "Sovg‘alarda ham shunday. <a href=\"https://telegram.org/blog/wear-gifts-blockchain-and-more\" target=\"_blank\" rel=\"noopener\">Telegram blogi</a>ga ko‘ra, blokcheynga chiqarilgan sovg‘a Telegram akkauntiga kirish yo‘qolsa ham egasida qoladi. Teskari tomoni ham bor: hamyon kaliti begona qo‘lga o‘tsa, sovg‘a ham u bilan ketadi.",
        },
        {
          t: "p",
          text: "<a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">Telegram hujjatlari</a>ga ko‘ra, TON’dagi sovg‘ani profilga bog‘lash egalikni o‘zgartirmaydi — egalik hamyonda qoladi. Demak, bu yerda hamma narsa profilga emas, hamyon himoyasiga bog‘liq.",
        },
        {
          t: "h2",
          id: "begona-kompyuterda-sovgani-blokcheynga-chiqarish",
          text: "Begona kompyuterda sovg‘ani blokcheynga chiqarish mumkinmi?",
        },
        {
          t: "p",
          text: "Texnik jihatdan mumkin, lekin buni qilmang. <a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">Telegram hujjatlari</a>ga ko‘ra, kolleksion sovg‘ani TON’da NFT’ga aylantirish mumkin, jarayon oxirida esa Fragment’ga import qilish uchun havola beriladi.",
        },
        {
          t: "p",
          text: "Bu amal uchun amaldagi 2FA parolingiz kerak. Klub kompyuterida tugma bosishlarni yozib oladigan dastur o‘rnatilgan bo‘lsa, parolni o‘z qo‘lingiz bilan begonaga berib qo‘ygan bo‘lasiz. Klub kompyuterida nima o‘rnatilganini esa siz tekshira olmaysiz.",
        },
        {
          t: "p",
          text: "Yana bir detal: ba’zi sovg‘alarni faqat belgilangan sanadan keyin chiqarish mumkin. Bu sanani Telegram belgilaydi, jamoadosh emas. Kimdir «hozir chiqar, ertaga kech bo‘ladi» deb shoshiltirsa, bu bosim.",
        },
        {
          t: "note",
          tone: "warn",
          text: "Jamoadoshga sovg‘a berish uchun hamyon shart emas: kolleksion sovg‘ani Telegram ichida boshqa foydalanuvchiga o‘tkazsa bo‘ladi. Tashqi joyga o‘tkazish xavfi haqida: <a href=\"/blog/sovgani-marketpleysga-otkazish-xavfsizmi-oyinchi\">sovg‘ani marketpleysga o‘tkazish</a>. Eksportni faqat o‘z qurilmangizda qiling.",
        },
        {
          t: "h2",
          id: "stars-premium-va-uc-begona",
          text: "Stars, Premium va UC begona kompyuterdagi hamyonga bog‘liqmi?",
        },
        {
          t: "p",
          text: "Yo‘q. Stars hamyonda emas, Telegram akkauntingizda hisoblanadi. Ochiq qolgan Telegram seansi orqali kimdir ularni bot yoki kanaldagi to‘lovga sarflab yuborishi mumkin. Bunga qarshi hamyonni uzish emas, seansni yakunlash yordam beradi.",
        },
        {
          t: "p",
          text: "GemPay’da Stars va Premium @username bo‘yicha olinadi, akkauntingizga kirilmaydi:",
        },
        {
          t: "list",
          items: [
            `<strong>Stars</strong> — donasi ${som(STARS_UNIT_CARD, "uz")} (karta o‘tkazmasi yoki bot balansi) yoki ${som(STARS_UNIT_ONLINE, "uz")} (Click, Uzum Bank). Bir buyurtmada 50 dan 10 000 tagacha.`,
            `<strong>Premium</strong> — 3 oy ${som(premium(3), "uz")}, 6 oy ${som(premium(6), "uz")}, 12 oy ${som(premium(12), "uz")}. Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi, shuning uchun jamoadoshga ham username’i bo‘yicha sovg‘a qilsa bo‘ladi.`,
            "<strong>UC, olmos, CP</strong> — Player ID bo‘yicha tushadi, parol hech qachon so‘ralmaydi. Nik tekshirib ko‘rsatiladi, siz tasdiqlaganingizdan keyin to‘lov qilinadi.",
          ],
        },
        {
          t: "p",
          text: "To‘lov UzCard, HUMO, Click, Uzum Bank yoki bot balansidan qilinadi. Xorijiy karta, VPN, kripto va hamyon kerak emas. Stars o‘yin valyutasiga aylanmaydi, UC uchun alohida buyurtma beriladi.",
        },
        {
          t: "p",
          text: "Klub kompyuterida hech narsa kiritishingiz shart emas: xaridni telefoningizdagi <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> orqali qilasiz. Umumiy qoidalar: <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">o‘yin hisobini xavfsiz to‘ldirish</a>.",
        },
        {
          t: "h2",
          id: "klubda-kimdir-sessiyani-sinxronlab-beray",
          text: "Klubda kimdir «sessiyani sinxronlab beray» desa — bu qanday aldov?",
        },
        {
          t: "p",
          text: "Sinxronlash haqidagi mish-mish firibgarlarga tayyor bahona bo‘lib qoldi. Klubda yoki o‘yin chatida eshitiladigan tipik gaplar:",
        },
        {
          t: "list",
          items: [
            "«Hamyoningni mening kompyuterimda Fragment’ga ulab, sovg‘ani ko‘chirib beraman.»",
            "«Telefoningda shu QR-kodni skaner qil, sessiya ikkala qurilmada bo‘ladi.»",
            "«Seed so‘zlarni ayt, seni yangi Wallet’ga o‘tkazib qo‘yaman.»",
            "«Wallet bot ochilmayapti, mening hisobim orqali qilamiz.» Bu bahona haqida: <a href=\"/blog/desktop-wallet-bot-ochilmayapti-oyinchi\">Desktop’da Wallet bot ochilmayapti</a>.",
          ],
        },
        {
          t: "p",
          text: "Ogohlantiruvchi belgilar: seed so‘zlar, Telegram kirish kodi yoki 2FA paroli so‘raladi, vaqt bilan shoshiltiriladi, notanish bot yoki havola beriladi.",
        },
        {
          t: "p",
          text: "Begona odamning ekranidagi QR-kodni Telegram yoki hamyon orqali skaner qilmang. Bu sizning seansingiz yoki ulanishingizni o‘sha qurilmaga berib qo‘yishi mumkin.",
        },
        {
          t: "p",
          text: "GemPay supportiga (<a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>) faqat buyurtma raqami bilan yoziladi. Parol, kod yoki seed so‘zlarni hech kimga yubormang. O‘zini «support» deb tanishtirgan odam ham bundan mustasno emas.",
        },
        {
          t: "h2",
          id: "seans-yopilmay-qolgan-yoki-notanish",
          text: "Seans yopilmay qolgan yoki notanish o‘tkazma ko‘rinsa, nima qilasiz?",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Telefoningizdan Telegram’dagi barcha begona seanslarni darhol yakunlang.",
            "Agar 2FA parolni kompyuterda tergan bo‘lsangiz, uni almashtiring.",
            "Hamyonga ulangan saytlarni uzing. Agar seed so‘zlar kompyuterga yozilgan yoki ekranda ochilgan bo‘lsa, aktivlarni o‘zingiz yaratgan yangi hamyonga o‘tkazish kerak bo‘lishi mumkin. Hamyon ilovasida kalitni almashtirish funksiyasi bor-yo‘qligi bu maqolada tasdiqlanmagan.",
            "Tez harakat qiling: blokcheyndagi o‘tkazma qaytmaydi, Fragment esa yo‘qolgan kirish ma’lumotlarini tiklamaydi.",
            "Klub ma’muriga kompyuterni tekshirib ko‘rishni ayting. Keyingi safar Stars, Premium va donatni faqat o‘z telefoningizdan oling.",
          ],
        },
        {
          t: "p",
          text: "Agar o‘tkazma allaqachon ketgan bo‘lsa, «qaytarib beraman» deb sizdan pul so‘ragan har qanday «yordamchi» ikkinchi marta aldamoqchi bo‘ladi.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Telegram Gifts",
              href: "https://core.telegram.org/api/gifts",
            },
            {
              label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More",
              href: "https://telegram.org/blog/wear-gifts-blockchain-and-more",
            },
            {
              label: "Terms of Service – Fragment",
              href: "https://fragment.com/terms",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Klubda Telegram’dan chiqishni unutdim. Uydan turib uni yopsa bo‘ladimi?",
          a: "Ha, telefoningizdagi faol seanslar ro‘yxatidan klub kompyuterini topib, seansni yakunlaysiz. Brauzerda ulangan hamyon bu bilan yopilmaydi, uni hamyon ilovasida alohida tekshiring.",
        },
        {
          q: "Telefondan klub seansini yopdim. Endi Fragment’dagi hamyonim ham xavfsizmi?",
          a: "Bunga ishonib qolmang: Telegram’dan chiqish hamyonning saytga ulanishini avtomatik uzishi tasdiqlanmagan. Hamyon ilovasidagi ulangan saytlar ro‘yxatini ham ko‘rib chiqing.",
        },
        {
          q: "Do‘stimning noutbukida hamyonni ulagandim. U mening TON’imni o‘zi yuborib yuboradimi?",
          a: "Ulanish qanday huquq berishi hamyon ilovasiga bog‘liq, bu maqolada buni tasdiqlay olmaymiz. Ulanishni uzing va noutbukda seed so‘zlar yoki parol qolmaganini tekshiring, chunki TON o‘tkazmasini keyin qaytarib bo‘lmaydi.",
        },
        {
          q: "Klan chatida «Wallet endi kompyuter va telefonni birlashtiradi» deyishyapti. Ishonaymi?",
          a: "Hozircha bu faqat kanal postidan chiqqan gap, Telegram, TON yoki Fragment buni e’lon qilmagan. Chatdagi skrinshotga emas, rasmiy kanal va ilova yangilanishiga qarang.",
        },
        {
          q: "Klub kompyuterida GemPay orqali UC yoki Stars olsam xavflimi?",
          a: "Bunga hojat yo‘q: buyurtmani o‘z telefoningizdagi @Gempayuz_bot’da berasiz. UC uchun Player ID, Stars va Premium uchun @username yetarli, parol so‘ralmaydi.",
        },
        {
          q: "Jamoadoshga Premium sovg‘a qilish uchun hamyonni Fragment’ga ulashim kerakmi?",
          a: "Yo‘q. GemPay’da Premium jamoadoshning @username’i bo‘yicha Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi. To‘lov so‘mda UzCard, HUMO, Click yoki Uzum Bank bilan qilinadi.",
        },
        {
          q: "Klubdan keyin hamyonimdan TON chiqib ketibdi. Klub ma’muri yoki Fragment qaytara oladimi?",
          a: "Yo‘q, Fragment shartlariga ko‘ra TON blokcheynidagi o‘tkazmani hech kim bekor qila olmaydi. Qolgan aktivlarni yangi hamyonga o‘tkazing, «qaytarib beraman» deb pul so‘raganlarga esa ishonmang.",
        },
      ],
    },
    ru: {
      title: "Сеанс Telegram Wallet на чужом компьютере: под угрозой ли кошелёк и Stars?",
      metaTitle: "Сеанс Telegram Wallet на чужом компьютере",
      metaDescription: "Риск есть: сразу закройте сеанс Telegram и подключение к Fragment на чужом компьютере. Синхронизация подключения с телефоном официально не подтверждена.",
      excerpt: "Риск есть: сразу закройте сеанс Telegram и подключение к Fragment на чужом компьютере. Синхронизация подключения с телефоном официально не подтверждена.",
      answer: "Риск есть: сразу закройте сеанс Telegram и подключение к Fragment на чужом компьютере. Синхронизация подключения с телефоном официально не подтверждена.",
      body: [
        {
          t: "h2",
          id: "klubdagi-kompyuterda-ulangan-hamyon-endi",
          text: "Подключили кошелёк на компьютере в клубе — теперь он появится и на телефоне?",
        },
        {
          t: "p",
          text: "Ни Telegram, ни TON, ни Fragment официально не подтверждали, что новый Telegram Wallet синхронизирует подключения между устройствами. Этот слух пошёл из поста в одном Telegram-канале. По словам автора, если подключить кошелёк к Fragment на компьютере, та же сессия появится и на телефоне.",
        },
        {
          t: "p",
          text: "В посте есть и такая мысль: «украдут одну сессию — получат доступ ко всему». Это не официальное заявление, а предположение автора канала. Официальных данных о том, что сессии кошелька крадут именно так, найти не удалось.",
        },
        {
          t: "p",
          text: "Но беспокоитесь вы не зря. Будет синхронизация или нет, открытый Telegram на клубном компьютере или страницу Fragment в браузере может увидеть тот, кто сядет за компьютер после вас. Поэтому план ниже рассчитан на то, что есть сейчас, а не на функцию, которая ещё не вышла.",
        },
        {
          t: "p",
          text: "О новой функции вы узнаете из официальных каналов и обновления приложения. Скриншот в чате клана ничего не доказывает. Нужен ли игроку кошелёк вообще, мы разбирали отдельно: <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">нужен ли Telegram Wallet игроку</a>.",
        },
        {
          t: "h2",
          id: "begona-kompyuterda-aynan-nima-qolib",
          text: "Что именно может остаться на чужом компьютере?",
        },
        {
          t: "p",
          text: "Когда вы уходите из клуба, на компьютере может остаться сразу несколько вещей. Риск у них разный, и закрываются они по-разному.",
        },
        {
          t: "table",
          head: [
            "Что остаётся",
            "К чему получит доступ следующий человек",
            "Как закрыть",
          ],
          rows: [
            [
              "Сеанс Telegram Desktop или Web",
              "Чаты, группа клана, окна оплаты, где тратятся Stars",
              "Выйти из приложения и завершить сеанс с телефона",
            ],
            [
              "Открытая в браузере страница Fragment и подключённый кошелёк",
              "Видны коллекционные предметы, привязанные к кошельку; через страницу можно начать операцию",
              "Выйти с сайта, проверить подключение в приложении кошелька",
            ],
            [
              "Сохранённые в браузере пароли, автозаполнение, скачанные файлы",
              "Повторный вход на сайты",
              "Очистить историю и сохранённые данные, работать в режиме инкогнито",
            ],
            [
              "Seed-фраза или её скриншот на компьютере",
              "Кошелёк целиком оказывается в чужих руках",
              "Удалить файл и перевести активы на новый кошелёк",
            ],
          ],
        },
        {
          t: "p",
          text: "Согласно <a href=\"https://fragment.com/terms\" target=\"_blank\" rel=\"noopener\">условиям Fragment</a>, купленные там коллекционные предметы привязываются к TON-кошельку владельца. А за сохранность данных для входа, устройств и резервных копий отвечает только сам пользователь.",
        },
        {
          t: "p",
          text: "Компьютер друга кажется надёжнее клубного, но правило то же. Даже если у друга нет плохих намерений, на его компьютере может оказаться вирус, а младший брат может случайно открыть ваш Telegram.",
        },
        {
          t: "note",
          tone: "info",
          text: "Выйдя из Telegram на клубном компьютере, вы закрываете только Telegram. Считайте, что Fragment в браузере и подключение кошелька остались как были, и проверяйте их отдельно.",
        },
        {
          t: "p",
          text: "Точный порядок отключения кошелька от Fragment в этой статье не подтверждён. Где нужная кнопка, ищите в своём приложении кошелька.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "klubdan-chiqayotganda-va-uyga-kelganda",
          text: "Что сделать, уходя из клуба, и когда вернётесь домой?",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Прежде чем встать из-за компьютера, полностью выйдите из Telegram Desktop или Web. Если просто закрыть окно, сеанс не завершится.",
            "Выйдите из Fragment и других сайтов, к которым подключали кошелёк. Очистите историю, cookie и сохранённые пароли.",
            "На телефоне откройте в настройках Telegram список активных сеансов (раздел «Устройства») и завершите сеанс клубного компьютера. Видите незнакомое устройство — закройте и его.",
            "В приложении кошелька посмотрите список подключённых сайтов и отключите те, которые не узнаёте. В каждом приложении этот раздел находится в своём месте.",
            "Включите или смените в Telegram пароль двухэтапной проверки. Подробнее: <a href=\"/blog/888-anonim-raqam-oyinchi-akkaunt-himoyasi\">как защитить аккаунт +888</a>.",
          ],
        },
        {
          t: "p",
          text: "Самая простая защита — вообще не подключать кошелёк на чужом компьютере. Чтобы играть в клубе, кошелёк не нужен.",
        },
        {
          t: "h2",
          id: "hamyonda-ton-yoki-nft-sovga",
          text: "Почему риск выше, если в кошельке есть TON или NFT-подарки?",
        },
        {
          t: "p",
          text: "Проблему с аккаунтом Telegram чаще всего можно решить, завершив сеанс. В блокчейне кнопки «назад» нет. В <a href=\"https://fragment.com/terms\" target=\"_blank\" rel=\"noopener\">условиях Fragment</a> причины прописаны прямо:",
        },
        {
          t: "list",
          items: [
            "Транзакции в блокчейне TON не отменяются. Если кто-то в клубе сделает перевод с вашего кошелька, отменить его не получится.",
            "Если вы потеряете данные для входа, Fragment не сможет восстановить ни кошелёк, ни коллекционные предметы в нём.",
            "Проверить перед выводом средств, что подключён правильный кошелёк, — задача самого пользователя. На чужом компьютере в спешке легко выбрать кошелёк, который оставил предыдущий пользователь.",
          ],
        },
        {
          t: "p",
          text: "С подарками то же самое. Как пишет <a href=\"https://telegram.org/blog/wear-gifts-blockchain-and-more\" target=\"_blank\" rel=\"noopener\">блог Telegram</a>, подарок, выведенный в блокчейн, остаётся у владельца, даже если тот потеряет доступ к аккаунту Telegram. Но есть и обратная сторона: если ключ от кошелька попадёт в чужие руки, подарок уйдёт вместе с ним.",
        },
        {
          t: "p",
          text: "Согласно <a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">документации Telegram</a>, привязка подарка из TON к профилю не меняет владельца — права остаются у кошелька. Значит, здесь всё зависит не от профиля, а от защиты кошелька.",
        },
        {
          t: "h2",
          id: "begona-kompyuterda-sovgani-blokcheynga-chiqarish",
          text: "Можно ли выводить подарок в блокчейн на чужом компьютере?",
        },
        {
          t: "p",
          text: "Технически можно, но не стоит. По <a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">документации Telegram</a>, коллекционный подарок можно превратить в NFT в сети TON, а в конце процесса выдаётся ссылка для импорта на Fragment.",
        },
        {
          t: "p",
          text: "Для этого нужен действующий пароль двухэтапной проверки (2FA). Если на клубном компьютере стоит программа, которая записывает нажатия клавиш, вы своими руками отдадите пароль постороннему. А что установлено на клубном компьютере, вы проверить не можете.",
        },
        {
          t: "p",
          text: "Ещё одна деталь: некоторые подарки можно вывести только после определённой даты. Эту дату устанавливает Telegram, а не сокомандник. Если вас торопят — «выводи сейчас, завтра будет поздно», — это давление.",
        },
        {
          t: "note",
          tone: "warn",
          text: "Чтобы подарить что-то сокоманднику, кошелёк не нужен: коллекционный подарок можно передать другому пользователю прямо в Telegram. О рисках передачи на внешние площадки: <a href=\"/blog/sovgani-marketpleysga-otkazish-xavfsizmi-oyinchi\">перевод подарка на маркетплейс</a>. Экспорт делайте только со своего устройства.",
        },
        {
          t: "h2",
          id: "stars-premium-va-uc-begona",
          text: "Зависят ли Stars, Premium и UC от кошелька на чужом компьютере?",
        },
        {
          t: "p",
          text: "Нет. Stars хранятся не в кошельке, а на вашем аккаунте Telegram. Через незакрытый сеанс Telegram их могут потратить на оплату в боте или канале. Против этого помогает не отключение кошелька, а завершение сеанса.",
        },
        {
          t: "p",
          text: "В GemPay Stars и Premium оформляются по @username, в ваш аккаунт никто не заходит:",
        },
        {
          t: "list",
          items: [
            `<strong>Stars</strong> — ${som(STARS_UNIT_CARD, "ru")} за штуку (перевод с карты или баланс бота) или ${som(STARS_UNIT_ONLINE, "ru")} (Click, Uzum Bank). В одном заказе — от 50 до 10 000 штук.`,
            `<strong>Premium</strong> — 3 месяца ${som(premium(3), "ru")}, 6 месяцев ${som(premium(6), "ru")}, 12 месяцев ${som(premium(12), "ru")}. Подключается через официальный механизм подарков Telegram, поэтому его можно подарить и сокоманднику по его username.`,
            "<strong>UC, алмазы, CP</strong> — зачисляются по Player ID, пароль не запрашивается никогда. Бот показывает ник для проверки, оплата проходит только после вашего подтверждения.",
          ],
        },
        {
          t: "p",
          text: "Оплатить можно картой UzCard или HUMO, через Click, Uzum Bank или с баланса бота. Иностранная карта, VPN, криптовалюта и кошелёк не нужны. Stars не превращаются в игровую валюту — для UC оформляется отдельный заказ.",
        },
        {
          t: "p",
          text: "На клубном компьютере вводить ничего не нужно: покупку вы делаете через <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> на своём телефоне. Общие правила: <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">как безопасно пополнить игровой счёт</a>.",
        },
        {
          t: "h2",
          id: "klubda-kimdir-sessiyani-sinxronlab-beray",
          text: "В клубе предлагают «синхронизировать сессию» — что это за развод?",
        },
        {
          t: "p",
          text: "Слух о синхронизации стал для мошенников готовым поводом. Типичные фразы, которые можно услышать в клубе или в игровом чате:",
        },
        {
          t: "list",
          items: [
            "«Подключу твой кошелёк к Fragment на своём компе и перенесу подарок».",
            "«Отсканируй этот QR-код телефоном — сессия будет на обоих устройствах».",
            "«Скажи seed-фразу, перенесу тебя на новый Wallet».",
            "«Wallet-бот не открывается, давай через мой аккаунт». Об этой отговорке: <a href=\"/blog/desktop-wallet-bot-ochilmayapti-oyinchi\">Wallet-бот не открывается в Desktop</a>.",
          ],
        },
        {
          t: "p",
          text: "Тревожные признаки: просят seed-фразу, код входа в Telegram или пароль 2FA, торопят, присылают незнакомого бота или ссылку.",
        },
        {
          t: "p",
          text: "Не сканируйте через Telegram или кошелёк QR-код с чужого экрана. Так вы можете отдать свой сеанс или подключение кошелька этому устройству.",
        },
        {
          t: "p",
          text: "В поддержку GemPay (<a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>) пишут только с номером заказа. Никому не отправляйте пароль, код или seed-фразу. Это касается и тех, кто представляется «поддержкой».",
        },
        {
          t: "h2",
          id: "seans-yopilmay-qolgan-yoki-notanish",
          text: "Сеанс остался открытым или появился незнакомый перевод — что делать?",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "С телефона сразу завершите все чужие сеансы Telegram.",
            "Если вводили пароль 2FA на чужом компьютере, смените его.",
            "Отключите сайты, подключённые к кошельку. Если seed-фраза была записана на компьютере или открыта на экране, возможно, придётся перевести активы на новый кошелёк, созданный вами. Есть ли в приложении кошелька функция смены ключа, в этой статье не подтверждено.",
            "Действуйте быстро: перевод в блокчейне не вернуть, а Fragment не восстанавливает утерянные данные для входа.",
            "Попросите администратора клуба проверить компьютер. В следующий раз покупайте Stars, Premium и донат только со своего телефона.",
          ],
        },
        {
          t: "p",
          text: "Если перевод уже ушёл, любой «помощник», который просит у вас деньги за «возврат», пытается обмануть вас второй раз.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Telegram Gifts",
              href: "https://core.telegram.org/api/gifts",
            },
            {
              label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More",
              href: "https://telegram.org/blog/wear-gifts-blockchain-and-more",
            },
            {
              label: "Terms of Service – Fragment",
              href: "https://fragment.com/terms",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Забыл выйти из Telegram в клубе. Можно закрыть сеанс из дома?",
          a: "Да: найдите клубный компьютер в списке активных сеансов на телефоне и завершите его. Кошелёк, подключённый в браузере, при этом не отключается — его нужно проверить отдельно в приложении кошелька.",
        },
        {
          q: "Я закрыл клубный сеанс с телефона. Мой кошелёк на Fragment теперь в безопасности?",
          a: "Не стоит на это рассчитывать: то, что выход из Telegram автоматически отключает кошелёк от сайта, не подтверждено. Просмотрите ещё и список подключённых сайтов в приложении кошелька.",
        },
        {
          q: "Я подключал кошелёк на ноутбуке друга. Он сможет сам отправить мои TON?",
          a: "Какие права даёт подключение, зависит от приложения кошелька — в этой статье мы не можем это подтвердить. Отключите подключение и убедитесь, что на ноутбуке не остались seed-фраза или пароль: перевод TON потом не вернуть.",
        },
        {
          q: "В чате клана пишут, что Wallet теперь объединяет компьютер и телефон. Верить?",
          a: "Пока это лишь слова из поста в канале: ни Telegram, ни TON, ни Fragment об этом не объявляли. Ориентируйтесь на официальные каналы и обновления приложения, а не на скриншот из чата.",
        },
        {
          q: "Опасно ли покупать UC или Stars через GemPay с клубного компьютера?",
          a: "В этом нет нужды: заказ оформляется в @Gempayuz_bot на вашем телефоне. Для UC достаточно Player ID, для Stars и Premium — @username, пароль не запрашивается.",
        },
        {
          q: "Чтобы подарить сокоманднику Premium, нужно подключать кошелёк к Fragment?",
          a: "Нет. В GemPay Premium подключается по @username сокомандника через официальный механизм подарков Telegram. Оплата — в сумах картой UzCard, HUMO, через Click или Uzum Bank.",
        },
        {
          q: "После клуба с кошелька ушли TON. Администратор клуба или Fragment могут их вернуть?",
          a: "Нет: по условиям Fragment перевод в блокчейне TON никто отменить не может. Переведите оставшиеся активы на новый кошелёк и не верьте тем, кто просит деньги за «возврат».",
        },
      ],
    },
  },
};

export default article;
