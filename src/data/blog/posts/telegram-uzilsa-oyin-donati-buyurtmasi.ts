// Avtoblogyoz yasagan maqola (2026-11-05). Niyat: Telegram ulanmay qolgan paytda bot orqali UC, olmos yoki CP buyurtma qilgan yoki qilmoqchi bo'lgan O'zbekistondagi o'yinchi «Telegram ishlamasa donat nima bo'ladi» deb qidiradi: to'lov va buyurtma yo'qolmasligini, ulanish tiklangach nimani tekshirishni va proksi botlari xavfsizmi ekanini bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://core.telegram.org/proxy

import type { Article } from "../types";

const article: Article = {
  slug: "telegram-uzilsa-oyin-donati-buyurtmasi",
  game: null,
  type: "problem",
  datePublished: "2026-11-05",
  dateModified: "2026-11-05",
  keywords: ["telegram ishlamasa donat","telegram uzilsa uc nima bo'ladi","telegram ishlamayapti olmos kelmadi","donat to'lovi o'tdi telegram ochilmayapti","telegram proksi o'yinchi uchun","bepul proksi bot xavfsizmi","не работает телеграм донат","телеграм не работает uc не пришли","оплатил донат а телеграм не работает","прокси для телеграм безопасно ли","алмазы не пришли телеграм бот"],
  locales: {
    uz: {
      title: "Telegram ishlamasa donat nima bo‘ladi: UC, olmos va CP yo‘qolmaydimi?",
      metaTitle: "Telegram ishlamasa donat nima bo‘ladi",
      metaDescription: "Telegram uzilishi donatni yo‘qotmaydi: UC, olmos va CP Player ID bo‘yicha o‘yin akkauntiga tushadi. Ulanish qaytgach, avval o‘yindagi balansni tekshiring.",
      excerpt: "Telegram uzilishi donatni yo‘qotmaydi: UC, olmos va CP Player ID bo‘yicha o‘yin akkauntiga tushadi. Ulanish qaytgach, avval o‘yindagi balansni tekshiring.",
      answer: "Telegram uzilishi donatni yo‘qotmaydi: UC, olmos va CP Player ID bo‘yicha o‘yin akkauntiga tushadi. Ulanish qaytgach, avval o‘yindagi balansni tekshiring.",
      body: [
        {
          t: "h2",
          id: "telegram-uzilsa-tolangan-uc-yoki",
          text: "Telegram uzilsa, to‘langan UC yoki olmos yo‘qolib qoladimi?",
        },
        {
          t: "p",
          text: "Yo‘q. UC, olmos yoki CP Telegram akkauntiga emas, Player ID bo‘yicha o‘yin akkauntingizga tushadi. @Gempayuz_bot faqat buyurtma beriladigan oyna. Valyuta botda saqlanmaydi, shuning uchun Telegram ochilmay qolishi o‘yindagi balansga ta’sir qilmaydi.",
        },
        {
          t: "p",
          text: "GemPay’da o‘yin valyutasi to‘lovdan keyin 1–5 daqiqada avtomatik tushadi. Telegram ulanmasdan aylanib tursa ham, natijani o‘yinning o‘zida, balans oynasida ko‘rasiz.",
        },
        {
          t: "p",
          text: "Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi. Hisobga tushgan valyuta esa qaytarilmaydi.",
        },
        {
          t: "p",
          text: "Bitta noaniqlik bor: uzilish paytida Click, Uzum Bank yoki karta orqali qilingan to‘lov qanday qayta ishlanishi bu maqolada tasdiqlanmagan. Shuning uchun ulanish tiklangach buyurtma holatini botda albatta tekshiring.",
        },
        {
          t: "note",
          tone: "info",
          text: "Kanallarda «Telegram tamom» kabi postlar tez tarqaladi. Ular rasmiy manba emas: uzilish qachon, qayerda va qancha davom etgani bunday postlardan bilinmaydi.",
        },
        {
          t: "p",
          text: "Buyurtma odatda qanday o‘tishini <a href=\"/blog/oyinlarga-donat-qilish-gempay\">donat bo‘yicha to‘liq qo‘llanmada</a> ko‘rishingiz mumkin.",
        },
        {
          t: "h2",
          id: "buyurtma-qaysi-bosqichda-uzildi-va",
          text: "Buyurtma qaysi bosqichda uzildi va har birida nima qilinadi?",
        },
        {
          t: "p",
          text: "Nima qilish kerakligi aloqa qaysi paytda uzilganiga bog‘liq. GemPay’da tartib shunday: Player ID kiritiladi, bot nikni tekshirib ko‘rsatadi, siz tasdiqlaysiz va shundan keyingina to‘lov bo‘ladi.",
        },
        {
          t: "table",
          head: [
            "Qayerda uzildi",
            "Pul yechildimi",
            "Valyuta holati",
            "Keyingi qadam",
          ],
          rows: [
            [
              "Player ID kiritildi, nik chiqmadi",
              "Yo‘q",
              "Buyurtma boshlanmagan",
              "Ulanish tiklangach boshidan boshlang",
            ],
            [
              "Nik chiqdi, lekin tasdiqlamadingiz",
              "Yechilmagan bo‘lishi kerak, chunki to‘lov tasdiqdan keyin",
              "Yo‘q",
              "Karta SMS’ini tekshiring, keyin qaytadan boshlang",
            ],
            [
              "To‘lov oynasi ochildi, natija ko‘rinmadi",
              "Noma’lum",
              "Noma’lum",
              "Bank tarixini ko‘ring, qayta to‘lamang",
            ],
            [
              "To‘lov o‘tdi, botdan xabar kelmadi",
              "Ha",
              "1–5 daqiqada tushishi kerak",
              "O‘yinda balansni tekshiring, tushmasa supportga yozing",
            ],
            [
              "«Bajarildi» xabari keldi",
              "Ha",
              "Akkauntda",
              "O‘yinni qayta ishga tushirib balansni ko‘ring",
            ],
          ],
        },
        {
          t: "p",
          text: "Misol: PUBG Mobile uchun UC buyurtma qildingiz, to‘lov oynasida kartani tasdiqladingiz va shu zahoti Telegram uzildi. Bot javob bermayapti, bankdan esa yechim haqida SMS keldi. Bu holatda yangi buyurtma bermaysiz. PUBG’ni ochib UC balansiga qaraysiz. UC tushgan bo‘lsa, buyurtma bajarilgan, botdagi holatni esa ulanish tiklangach ko‘rasiz. Tushmagan bo‘lsa, keyingi bo‘limdagi tartib bilan davom etasiz.",
        },
        {
          t: "p",
          text: "Yana bir holat: Call of Duty: Mobile uchun CP olmoqchi edingiz, lekin aloqa nik chiqishidan oldin uzildi. Bu yerda xavotirga sabab yo‘q. Nik tasdiqlanmagan ekan, to‘lov bosqichiga yetib kelinmagan.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "ulanish-tiklangach-nimani-va-qaysi",
          text: "Ulanish tiklangach nimani va qaysi tartibda tekshirish kerak?",
        },
        {
          t: "p",
          text: "Tartib muhim: avval valyuta, keyin pul, keyin bot. Shunda ortiqcha xavotir va ikkinchi to‘lovdan qochasiz.",
        },
        {
          t: "steps",
          items: [
            {
              title: "O‘yinga kirib balansni ko‘ring",
              text: "PUBG Mobile’da UC, Mobile Legends va Free Fire’da olmos, Call of Duty: Mobile’da CP. Raqam o‘zgarmagan bo‘lsa, o‘yindan to‘liq chiqib qayta kiring.",
            },
            {
              title: "Bank yoki to‘lov ilovasidagi tarixni oching",
              text: "UzCard, HUMO, Click yoki Uzum Bank ilovasida yechim bor-yo‘qligini va uning vaqtini ko‘ring. Bot balansidan to‘lagan bo‘lsangiz, balans qoldig‘ini tekshiring.",
            },
            {
              title: "@Gempayuz_bot’ni ochib buyurtma holatiga qarang",
              text: "Buyurtma raqamini yozib oling, u keyin kerak bo‘ladi.",
            },
            {
              title: "Natija aniq bo‘lmaguncha yangi buyurtma bermang",
              text: "Pul yechilgan, valyuta esa hali ko‘rinmayapti — bu hali «yo‘qoldi» degani emas.",
            },
            {
              title: "Valyuta tushmagan, pul yechilgan bo‘lsa, supportga yozing",
              text: "<a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>’ga buyurtma raqami bilan murojaat qiling.",
            },
          ],
        },
        {
          t: "p",
          text: "Odatdagi yetkazish vaqti 1–5 daqiqa. Uzilish tufayli ancha ko‘proq vaqt o‘tgan bo‘lsa ham, birinchi qadam o‘zgarmaydi: avval o‘yinga qarang.",
        },
        {
          t: "p",
          text: "O‘yinlar bo‘yicha sabablar alohida yozilgan: <a href=\"/blog/pubg-uc-kelmadi-nima-qilish\">PUBG UC kelmadi</a>, <a href=\"/blog/mobile-legends-olmos-kelmadi-nima-qilish\">Mobile Legends olmos kelmadi</a> va <a href=\"/blog/free-fire-olmos-kelmadi-id-topilmadi\">Free Fire olmos kelmadi</a>.",
        },
        {
          t: "h2",
          id: "nega-aloqa-yoqligida-qayta-buyurtma",
          text: "Nega aloqa yo‘qligida qayta buyurtma bermaslik kerak?",
        },
        {
          t: "note",
          tone: "info",
          text: "Ikkinchi to‘lov birinchisining o‘rnini bosmaydi. Ikkala buyurtma ham bajarilishi mumkin.",
        },
        {
          t: "p",
          text: "Bot jim turganda «birinchisi o‘tmadi shekilli» deb yana to‘lash — uzilish paytidagi eng qimmat xato. Birinchi buyurtma aslida bajarilgan bo‘lishi mumkin, shunchaki natija sizga ko‘rinmagan.",
        },
        {
          t: "p",
          text: "Misol: Free Fire uchun olmos oldingiz, bot javob bermadi va siz yana bir marta to‘ladingiz. Ulanish tiklangach ikkala buyurtma ham bajarilgani ma’lum bo‘ldi — akkauntda ikki baravar olmos. Hisobga tushgan valyuta qaytarilmaydi, ya’ni ortiqcha olmosni pulga aylantirib bo‘lmaydi.",
        },
        {
          t: "p",
          text: "Pulni qaytarish qoidasi faqat bajarilmagan buyurtmaga tegishli: bunday holatda summa 3 ish kuni ichida to‘liq qaytariladi. Shartlar <a href=\"https://www.gempay.uz/tolov-va-qaytarish\">to‘lov va qaytarish sahifasida</a> yozilgan.",
        },
        {
          t: "p",
          text: "Oldini olish oson. To‘lovdan keyin aloqa uzilsa, botni qayta-qayta bosmang. O‘yindagi balans va bank tarixini tekshiring: ular Telegram’ga bog‘liq emas, shuning uchun bot jim turganda ham holatni ko‘rsatadi.",
        },
        {
          t: "h2",
          id: "buyurtmani-tugatish-uchun-proksi-yoqsangiz",
          text: "Buyurtmani tugatish uchun proksi yoqsangiz, nima o‘zgaradi?",
        },
        {
          t: "p",
          text: "Buyurtmaning o‘zi o‘zgarmaydi, faqat ilovaning Telegram’ga ulanish yo‘li o‘zgaradi. Proksi Telegram ilovasining o‘zida bor funksiya. Telegram’ning <a href=\"https://core.telegram.org/proxy\" target=\"_blank\" rel=\"noopener\">MTProxy sahifasiga</a> ko‘ra, barcha mobil va desktop ilovalar proksi orqali ulanishga imkon beradi. MTProxy ayrim hududlarda Telegram’ga kirishni cheklovchi senzurani chetlab o‘tish uchun mo‘ljallangan. Istalgan foydalanuvchi mavjud tugunga ulanishi yoki o‘zinikini ishga tushirishi mumkin.",
        },
        {
          t: "p",
          text: "Amaliy jihatdan bilish kerak bo‘lgan narsalar:",
        },
        {
          t: "list",
          items: [
            "Ilovalar odatda ikki turdagi proksini qo‘llaydi: SOCKS5 va MTProto.",
            "Android’da sozlama shu yerda: Settings &gt; Data and Storage &gt; Proxy Settings, sahifaning pastida.",
            "iOS va Telegram Desktop’dagi aniq yo‘l bu maqolada tasdiqlanmagan — ilova sozlamalaridan qidiring.",
            "Proksi yoqilganda chatlar ro‘yxati tepasida qalqon belgisi chiqadi. Belgi bo‘lmasa, ulanish proksi orqali ketmayapti.",
          ],
        },
        {
          t: "p",
          text: "Botga kirgach, qadamlar avvalgidek: Player ID, nik tekshiruvi, tasdiq, to‘lov. Bot username’ini baribir tekshirib turing: proksi orqali kirish soxta botni haqiqiysiga aylantirmaydi.",
        },
        {
          t: "h2",
          id: "proksi-operatori-nimani-koradi-va",
          text: "Proksi operatori nimani ko‘radi va o‘yinchi unga nimani bermasligi kerak?",
        },
        {
          t: "p",
          text: "Uzilish haqidagi postlar ko‘pincha «zudlik bilan ulaning» degan havola bilan keladi. Bunday postlardagi «oq ro‘yxatlarda ham ishlaydi» kabi da’volarni rasmiy manba tasdiqlamaydi. Asosiy savol — proksini kim boshqaradi. Telegram bu haqda quyidagilarni yozadi:",
        },
        {
          t: "list",
          items: [
            "Faqat ishonchli proksini tanlang: aks holda u trafikni yetkazmasligi yoki IP manzilingiz Telegram’ga ulanayotganini qayd etishi mumkin.",
            "Yomon niyatli operator qaysi IP’dan, qaysi vaqtlarda ulanayotganingizni va Telegram’dan foydalanishga urinayotganingizni yig‘ishi mumkin.",
            "Operator username yoki akkaunt ID’ingizni ko‘rmaydi, chatlar ro‘yxati va faoliyatingizga kira olmaydi.",
            "Ulangach chatlar ro‘yxatida operator reklama qilayotgan notanish kanal paydo bo‘lishi mumkin.",
            "MTProxy bilan birga ishonchli VPN’ni ham ko‘rib chiqish tavsiya etiladi.",
          ],
        },
        {
          t: "p",
          text: "Demak, operator texnik jihatdan sizning yozishmalaringiz yoki buyurtmalaringizni ko‘rmaydi. Xavf boshqa joyda: «proksi ulab beradigan bot» sizdan to‘g‘ridan-to‘g‘ri ma’lumot so‘rashi mumkin. Telegram kirish kodi, o‘yin paroli yoki karta ma’lumotini so‘ragan bunday botdan darhol uzoqlashing. Reklama kanalida «arzon UC» yoki «tezkor donat» havolasi chiqsa, unga o‘tmang.",
        },
        {
          t: "h2",
          id: "uzilish-paytida-firibgarlar-oyinchidan-nimani",
          text: "Uzilish paytida firibgarlar o‘yinchidan nimani so‘raydi?",
        },
        {
          t: "p",
          text: "Aloqa beqaror paytda soxta «yordamchilar» faollashadi. Quyidagi belgilardan biri bo‘lsa, suhbatni to‘xtating:",
        },
        {
          t: "list",
          items: [
            "«Asosiy bot ishlamayapti, mana zaxira bot» degan xabar va boshqa username.",
            "O‘yin akkauntining paroli yoki logini so‘ralishi.",
            "Telegram’ga kirish kodi so‘ralishi.",
            "Pulni shaxsiy kartaga o‘tkazish taklifi.",
            "Notanish akkauntdan «support» nomi bilan yozib, «buyurtmangizda muammo bor» deyish.",
          ],
        },
        {
          t: "p",
          text: "GemPay’da o‘yin uchun faqat Player ID kerak, parol hech qachon so‘ralmaydi. Nik tekshirib ko‘rsatiladi va siz uni tasdiqlaganingizdan keyingina to‘lov bo‘ladi. Bot va support username’ini harfma-harf solishtiring: <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> va <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>.",
        },
        {
          t: "p",
          text: "GemPay mustaqil xizmat. O‘yin ishlab chiquvchisi yoki Telegram nomidan yozib, «akkauntingizni tekshiramiz» deyayotgan «xodim»ga ishonmang. To‘liq ro‘yxat: <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">o‘yin hisobini xavfsiz to‘ldirish</a>.",
        },
        {
          t: "h2",
          id: "supportga-nima-yuborsangiz-masala-tezroq",
          text: "Supportga nima yuborsangiz, masala tezroq hal bo‘ladi?",
        },
        {
          t: "p",
          text: "Murojaat <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>’ga buyurtma raqami bilan yoziladi. Hammasini bitta xabarda yuboring:",
        },
        {
          t: "list",
          items: [
            "buyurtma raqami;",
            "o‘yin nomi va Player ID (Mobile Legends uchun Server ID ham);",
            "to‘lov vaqti va usuli: UzCard, HUMO, Click, Uzum Bank yoki bot balansi;",
            "bank chekidan yoki to‘lov tarixidan skrinshot;",
            "o‘yin ichidagi balans skrinshoti.",
          ],
        },
        {
          t: "p",
          text: "Uzilish paytida bir nechta urinish bo‘lgan bo‘lsa, har birining vaqtini alohida yozing. Shunda qaysi to‘lov qaysi buyurtmaga tegishli ekanini aniqlash osonlashadi.",
        },
        {
          t: "p",
          text: "O‘yin paroli, Telegram kirish kodi va kartaning to‘liq ma’lumotlarini hech kimga yubormang — supportga ham.",
        },
        {
          t: "p",
          text: "Agar buyurtma bajarilmagani aniqlansa, pul 3 ish kuni ichida to‘liq qaytariladi.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Telegram MTProxy",
              href: "https://core.telegram.org/proxy",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Telegram ishlamay turganda o‘yinda UC paydo bo‘ldi, lekin botdan xabar kelmadi — hammasi joyidami?",
          a: "Ha, valyuta akkauntga tushgan bo‘lsa, buyurtma bajarilgan. Bot xabarini ulanish tiklangach ko‘rasiz, yangi buyurtma berish shart emas.",
        },
        {
          q: "Kartamdan pul yechildi, Telegram esa ochilmayapti — pulim qaytadimi?",
          a: "Avval o‘yindagi balansni tekshiring: valyuta odatda 1–5 daqiqada tushadi. Tushmagan va buyurtma bajarilmagan bo‘lsa, pul 3 ish kuni ichida to‘liq qaytariladi — Telegram ishlagach buyurtma raqami bilan supportga yozing.",
        },
        {
          q: "Shoshilib Mobile Legends olmosini Server ID’siz kiritib qo‘ydim — nima qilaman?",
          a: "Bot ko‘rsatgan nik sizniki bo‘lmasa yoki umuman chiqmasa, to‘lamang va ID’ni qayta kiriting. To‘lab qo‘ygan bo‘lsangiz, buyurtma raqami va to‘g‘ri ID bilan supportga yozing; hisobga tushgan valyuta qaytarilmasligini yodda tuting.",
        },
        {
          q: "Proksiga ulangach botga kirdim, buyurtma xavfsiz bo‘ladimi?",
          a: "Buyurtma tartibi proksi bilan ham o‘sha-o‘sha. Telegram ma’lumotiga ko‘ra operator chatlaringizni ko‘rmaydi, lekin IP manzilingizni yozib olishi mumkin, shuning uchun ishonchli proksi tanlang.",
        },
        {
          q: "Proksi ulangach chiqqan kanalda «arzon UC» havolasi turibdi — ishonsa bo‘ladimi?",
          a: "Yo‘q, bu proksi operatori targ‘ib qilayotgan kanal, GemPay bilan bog‘liq emas. Havolaga o‘tmang va proksiga ishonmasangiz, uni ilova sozlamalarida o‘chirib qo‘ying.",
        },
        {
          q: "Telegram ishlamasa, UC yoki olmosni boshqa yo‘l bilan buyurtma qilsa bo‘ladimi?",
          a: "GemPay buyurtmalari @Gempayuz_bot va uning Mini App’i orqali beriladi, boshqa kanal bu maqolada tasdiqlanmagan. Ulanish tiklanishini kuting yoki Telegram’ning o‘z proksi sozlamasidan foydalaning, «zaxira bot» takliflariga ishonmang.",
        },
        {
          q: "Uzilish paytida bot ikki marta to‘lov oynasini ochdi — qaysi birini to‘lash kerak?",
          a: "Shoshib ikkalasini ham to‘lamang. Avval bank tarixida yechim bor-yo‘qligini va botdagi buyurtma holatini tekshiring; noaniq qolsa, to‘lashdan oldin supportdan so‘rang.",
        },
      ],
    },
    ru: {
      title: "Telegram не работает — что будет с донатом: UC, алмазы и CP не пропадут?",
      metaTitle: "Telegram не работает — что будет с донатом: UC, алмазы",
      metaDescription: "Сбой Telegram не съедает донат: UC, алмазы и CP зачисляются в игровой аккаунт по Player ID. Когда связь вернётся, первым делом проверьте баланс в игре.",
      excerpt: "Сбой Telegram не съедает донат: UC, алмазы и CP зачисляются в игровой аккаунт по Player ID. Когда связь вернётся, первым делом проверьте баланс в игре.",
      answer: "Сбой Telegram не съедает донат: UC, алмазы и CP зачисляются в игровой аккаунт по Player ID. Когда связь вернётся, первым делом проверьте баланс в игре.",
      body: [
        {
          t: "h2",
          id: "telegram-uzilsa-tolangan-uc-yoki",
          text: "Если Telegram отключился, оплаченные UC или алмазы пропадут?",
        },
        {
          t: "p",
          text: "Нет. UC, алмазы или CP приходят не в аккаунт Telegram, а в ваш игровой аккаунт по Player ID. @Gempayuz_bot — это только окно, через которое оформляется заказ. Валюта в боте не хранится, поэтому то, что Telegram не открывается, на баланс в игре не влияет.",
        },
        {
          t: "p",
          text: "В GemPay игровая валюта зачисляется автоматически через 1–5 минут после оплаты. Даже если Telegram висит на «Соединение…», результат вы увидите в самой игре, на экране баланса.",
        },
        {
          t: "p",
          text: "Если заказ не выполнен, деньги возвращаются полностью в течение 3 рабочих дней. Валюта, которая уже зачислена на счёт, не возвращается.",
        },
        {
          t: "p",
          text: "Есть одна неясность: как обрабатывается платёж через Click, Uzum Bank или карту, сделанный во время сбоя, в этой статье не подтверждено. Поэтому, когда связь восстановится, обязательно проверьте статус заказа в боте.",
        },
        {
          t: "note",
          tone: "info",
          text: "В каналах быстро расходятся посты вроде «Telegram всё». Это не официальный источник: из таких постов нельзя понять, когда, где и как долго длился сбой.",
        },
        {
          t: "p",
          text: "Как обычно проходит заказ, можно посмотреть в <a href=\"/blog/oyinlarga-donat-qilish-gempay\">полном руководстве по донату</a>.",
        },
        {
          t: "h2",
          id: "buyurtma-qaysi-bosqichda-uzildi-va",
          text: "На каком этапе оборвался заказ и что делать в каждом случае?",
        },
        {
          t: "p",
          text: "Действия зависят от того, в какой момент пропала связь. В GemPay порядок такой: вы вводите Player ID, бот проверяет и показывает ник, вы подтверждаете — и только после этого идёт оплата.",
        },
        {
          t: "table",
          head: [
            "Где оборвалось",
            "Списаны ли деньги",
            "Статус валюты",
            "Следующий шаг",
          ],
          rows: [
            [
              "Player ID введён, ник не появился",
              "Нет",
              "Заказ не начат",
              "Когда связь вернётся, начните заново",
            ],
            [
              "Ник появился, но вы не подтвердили",
              "Не должны, ведь оплата идёт после подтверждения",
              "Нет",
              "Проверьте SMS по карте, затем начните заново",
            ],
            [
              "Открылось окно оплаты, результат не виден",
              "Неизвестно",
              "Неизвестно",
              "Посмотрите историю в банке, не платите повторно",
            ],
            [
              "Оплата прошла, сообщения от бота нет",
              "Да",
              "Должна прийти за 1–5 минут",
              "Проверьте баланс в игре, если не пришла — пишите в поддержку",
            ],
            [
              "Пришло сообщение «Выполнено»",
              "Да",
              "На аккаунте",
              "Перезапустите игру и посмотрите баланс",
            ],
          ],
        },
        {
          t: "p",
          text: "Пример: вы заказали UC для PUBG Mobile, подтвердили карту в окне оплаты — и в ту же секунду Telegram отключился. Бот молчит, а банк прислал SMS о списании. В этой ситуации новый заказ не оформляете. Открываете PUBG и смотрите баланс UC. Если UC пришли, заказ выполнен, а статус в боте увидите, когда связь восстановится. Если не пришли, действуете по схеме из следующего раздела.",
        },
        {
          t: "p",
          text: "Другой случай: вы хотели купить CP для Call of Duty: Mobile, но связь пропала ещё до того, как появился ник. Здесь волноваться не о чем. Раз ник не подтверждён, до оплаты дело не дошло.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "ulanish-tiklangach-nimani-va-qaysi",
          text: "Что и в каком порядке проверить, когда связь вернётся?",
        },
        {
          t: "p",
          text: "Порядок важен: сначала валюта, потом деньги, потом бот. Так вы избежите лишней паники и второго платежа.",
        },
        {
          t: "steps",
          items: [
            {
              title: "Зайдите в игру и посмотрите баланс",
              text: "В PUBG Mobile — UC, в Mobile Legends и Free Fire — алмазы, в Call of Duty: Mobile — CP. Если цифра не изменилась, полностью выйдите из игры и зайдите снова.",
            },
            {
              title: "Откройте историю в банке или платёжном приложении",
              text: "В приложении UzCard, HUMO, Click или Uzum Bank проверьте, было ли списание и в какое время. Если платили с баланса бота, проверьте остаток.",
            },
            {
              title: "Откройте @Gempayuz_bot и посмотрите статус заказа",
              text: "Запишите номер заказа — он понадобится дальше.",
            },
            {
              title: "Не оформляйте новый заказ, пока не станет ясен результат",
              text: "Деньги списаны, а валюты пока не видно — это ещё не значит «пропало».",
            },
            {
              title: "Если валюта не пришла, а деньги списаны, напишите в поддержку",
              text: "Обратитесь в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> с номером заказа.",
            },
          ],
        },
        {
          t: "p",
          text: "Обычное время зачисления — 1–5 минут. Даже если из-за сбоя прошло намного больше, первый шаг не меняется: сначала смотрите в игру.",
        },
        {
          t: "p",
          text: "Причины по отдельным играм разобраны в статьях: <a href=\"/blog/pubg-uc-kelmadi-nima-qilish\">не пришли UC в PUBG</a>, <a href=\"/blog/mobile-legends-olmos-kelmadi-nima-qilish\">не пришли алмазы в Mobile Legends</a> и <a href=\"/blog/free-fire-olmos-kelmadi-id-topilmadi\">не пришли алмазы в Free Fire</a>.",
        },
        {
          t: "h2",
          id: "nega-aloqa-yoqligida-qayta-buyurtma",
          text: "Почему нельзя оформлять заказ повторно, пока нет связи?",
        },
        {
          t: "note",
          tone: "info",
          text: "Второй платёж не заменяет первый. Выполниться могут оба заказа.",
        },
        {
          t: "p",
          text: "Заплатить ещё раз, потому что бот молчит и «наверное, первый не прошёл», — самая дорогая ошибка во время сбоя. Первый заказ вполне мог выполниться, просто вы не увидели результат.",
        },
        {
          t: "p",
          text: "Пример: вы купили алмазы для Free Fire, бот не ответил, и вы оплатили ещё раз. Когда связь вернулась, оказалось, что выполнены оба заказа — на аккаунте вдвое больше алмазов. Зачисленная валюта не возвращается, то есть лишние алмазы обратно в деньги не превратить.",
        },
        {
          t: "p",
          text: "Правило возврата касается только невыполненного заказа: в этом случае сумма возвращается полностью в течение 3 рабочих дней. Условия описаны на <a href=\"https://www.gempay.uz/tolov-va-qaytarish\">странице об оплате и возврате</a>.",
        },
        {
          t: "p",
          text: "Избежать этого просто. Если связь пропала после оплаты, не жмите на бота снова и снова. Проверьте баланс в игре и историю в банке: они не зависят от Telegram, поэтому показывают реальную картину, даже когда бот молчит.",
        },
        {
          t: "h2",
          id: "buyurtmani-tugatish-uchun-proksi-yoqsangiz",
          text: "Что изменится, если включить прокси, чтобы завершить заказ?",
        },
        {
          t: "p",
          text: "Сам заказ не меняется — меняется только способ, которым приложение подключается к Telegram. Прокси — встроенная функция приложения Telegram. Согласно <a href=\"https://core.telegram.org/proxy\" target=\"_blank\" rel=\"noopener\">странице Telegram о MTProxy</a>, все мобильные и десктопные приложения позволяют подключаться через прокси. MTProxy предназначен для обхода цензуры, которая ограничивает доступ к Telegram в некоторых регионах. Любой пользователь может подключиться к существующему узлу или запустить свой.",
        },
        {
          t: "p",
          text: "Что полезно знать на практике:",
        },
        {
          t: "list",
          items: [
            "Приложения обычно поддерживают два типа прокси: SOCKS5 и MTProto.",
            "На Android настройка находится здесь: Settings &gt; Data and Storage &gt; Proxy Settings, внизу страницы.",
            "Точный путь в iOS и Telegram Desktop в этой статье не подтверждён — ищите в настройках приложения.",
            "Когда прокси включён, над списком чатов появляется значок щита. Если значка нет, соединение идёт не через прокси.",
          ],
        },
        {
          t: "p",
          text: "После входа в бота шаги прежние: Player ID, проверка ника, подтверждение, оплата. Username бота всё равно сверяйте: вход через прокси не делает поддельного бота настоящим.",
        },
        {
          t: "h2",
          id: "proksi-operatori-nimani-koradi-va",
          text: "Что видит оператор прокси и чего игроку нельзя ему давать?",
        },
        {
          t: "p",
          text: "Посты о сбоях часто приходят со ссылкой «срочно подключайтесь». Заявления вроде «работает даже при белых списках» официальный источник не подтверждает. Главный вопрос — кто управляет прокси. Telegram пишет об этом так:",
        },
        {
          t: "list",
          items: [
            "Выбирайте только надёжный прокси: иначе он может не доставить трафик или зафиксировать, что ваш IP-адрес подключается к Telegram.",
            "Недобросовестный оператор может собирать данные о том, с какого IP и в какое время вы подключаетесь, и о самом факте использования Telegram.",
            "Оператор не видит ваш username или ID аккаунта и не имеет доступа к списку чатов и вашей активности.",
            "После подключения в списке чатов может появиться незнакомый канал, который продвигает оператор.",
            "Вместе с MTProxy рекомендуется рассмотреть и надёжный VPN.",
          ],
        },
        {
          t: "p",
          text: "Значит, технически оператор не видит ваши переписки или заказы. Риск в другом: «бот, который подключит прокси», может попросить данные напрямую. Если такой бот просит код входа в Telegram, пароль от игры или данные карты, сразу уходите. Если в рекламном канале мелькает ссылка на «дешёвые UC» или «быстрый донат», не переходите по ней.",
        },
        {
          t: "h2",
          id: "uzilish-paytida-firibgarlar-oyinchidan-nimani",
          text: "Что мошенники просят у игроков во время сбоя?",
        },
        {
          t: "p",
          text: "Когда связь нестабильна, активизируются фальшивые «помощники». Если заметили хотя бы один из признаков ниже, прекращайте разговор:",
        },
        {
          t: "list",
          items: [
            "Сообщение «основной бот не работает, вот резервный» с другим username.",
            "Просьба назвать пароль или логин от игрового аккаунта.",
            "Просьба прислать код входа в Telegram.",
            "Предложение перевести деньги на личную карту.",
            "Незнакомый аккаунт пишет от имени «поддержки» и сообщает, что «с вашим заказом проблема».",
          ],
        },
        {
          t: "p",
          text: "В GemPay для игр нужен только Player ID, пароль никогда не запрашивается. Ник проверяется и показывается, и оплата идёт только после вашего подтверждения. Сверяйте username бота и поддержки буква в букву: <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> и <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>.",
        },
        {
          t: "p",
          text: "GemPay — независимый сервис. Не доверяйте «сотруднику», который пишет от имени разработчика игры или Telegram и предлагает «проверить ваш аккаунт». Полный список правил: <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">как безопасно пополнять игровой счёт</a>.",
        },
        {
          t: "h2",
          id: "supportga-nima-yuborsangiz-masala-tezroq",
          text: "Что отправить в поддержку, чтобы вопрос решился быстрее?",
        },
        {
          t: "p",
          text: "Обращение пишется в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> с номером заказа. Отправьте всё одним сообщением:",
        },
        {
          t: "list",
          items: [
            "номер заказа;",
            "название игры и Player ID (для Mobile Legends — ещё и Server ID);",
            "время и способ оплаты: UzCard, HUMO, Click, Uzum Bank или баланс бота;",
            "скриншот банковского чека или истории платежей;",
            "скриншот баланса в игре.",
          ],
        },
        {
          t: "p",
          text: "Если во время сбоя было несколько попыток, укажите время каждой отдельно. Так проще понять, какой платёж к какому заказу относится.",
        },
        {
          t: "p",
          text: "Пароль от игры, код входа в Telegram и полные данные карты не отправляйте никому — в том числе поддержке.",
        },
        {
          t: "p",
          text: "Если выяснится, что заказ не выполнен, деньги вернутся полностью в течение 3 рабочих дней.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Telegram MTProxy",
              href: "https://core.telegram.org/proxy",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Пока Telegram не работал, UC в игре появились, а сообщения от бота нет — всё в порядке?",
          a: "Да, раз валюта пришла на аккаунт, заказ выполнен. Сообщение бота вы увидите, когда связь вернётся, новый заказ оформлять не нужно.",
        },
        {
          q: "С карты списали деньги, а Telegram не открывается — деньги вернут?",
          a: "Сначала проверьте баланс в игре: валюта обычно приходит за 1–5 минут. Если она не пришла и заказ не выполнен, деньги вернут полностью в течение 3 рабочих дней — когда Telegram заработает, напишите в поддержку с номером заказа.",
        },
        {
          q: "В спешке ввёл ID в Mobile Legends без Server ID — что делать?",
          a: "Если бот показал чужой ник или не показал никакого, не оплачивайте и введите ID заново. Если уже оплатили, напишите в поддержку с номером заказа и правильным ID; помните, что зачисленная валюта не возвращается.",
        },
        {
          q: "Зашёл в бота через прокси — заказ будет безопасным?",
          a: "Порядок заказа через прокси тот же самый. По данным Telegram, оператор не видит ваши чаты, но может записать IP-адрес, поэтому выбирайте надёжный прокси.",
        },
        {
          q: "После подключения прокси появился канал со ссылкой на «дешёвые UC» — можно доверять?",
          a: "Нет, это канал, который продвигает оператор прокси, к GemPay он отношения не имеет. Не переходите по ссылке, а если не доверяете прокси, отключите его в настройках приложения.",
        },
        {
          q: "Если Telegram не работает, можно заказать UC или алмазы другим способом?",
          a: "Заказы GemPay оформляются через @Gempayuz_bot и его Mini App, другой канал в этой статье не подтверждён. Дождитесь восстановления связи или воспользуйтесь встроенной настройкой прокси в Telegram и не верьте предложениям «резервного бота».",
        },
        {
          q: "Во время сбоя бот дважды открыл окно оплаты — какое оплачивать?",
          a: "Не оплачивайте оба в спешке. Сначала проверьте, было ли списание в истории банка, и посмотрите статус заказа в боте; если ясности нет, спросите поддержку до оплаты.",
        },
      ],
    },
  },
};

export default article;
