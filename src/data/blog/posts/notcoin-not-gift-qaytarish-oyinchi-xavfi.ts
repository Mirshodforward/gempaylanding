// Avtoblogyoz yasagan maqola (2026-11-20). Niyat: Klan chatida Notcoin Toygers o'yinchoqlari uchun pul qaytaryapti degan xabarni ko'rgan o'yinchi «Notcoin not_gift qaytarish» so'zi bilan qidiradi. U buyruqni yozish xavfsizmi, USDT (TON) uchun hamyon ochish kerakmi va soxta botdan qanday saqlanishni bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/verify
//   https://telegram.org/tos/eu-dsa
//   https://telegram.org/faq

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "notcoin-not-gift-qaytarish-oyinchi-xavfi",
  game: null,
  type: "trust",
  datePublished: "2026-11-20",
  dateModified: "2026-11-20",
  keywords: ["notcoin not_gift pul qaytarish","not_gift buyrug'i","notcoin toygers pul qaytarish","toygers o'yinchoq skam","notcoin bot rasmiymi","usdt ton hamyon kerakmi","soxta telegram bot qanday aniqlash","notcoin возврат средств toygers","not_gift notcoin","toygers скам возврат","notcoin_bot возврат usdt","как отличить фейкового бота telegram"],
  locales: {
    uz: {
      title: "Notcoin /not_gift pul qaytarish: klan chatidagi buyruqni yozish xavfsizmi?",
      metaTitle: "Notcoin /not_gift pul qaytarish",
      metaDescription: "Buyruqning o‘zi akkauntni ochib bermaydi, lekin Notcoin pul qaytarayotgani rasman tasdiqlanmagan. Bot kod, seed so‘z yoki to‘lov so‘rasa, darhol to‘xtang.",
      excerpt: "Buyruqning o‘zi akkauntni ochib bermaydi, lekin Notcoin pul qaytarayotgani rasman tasdiqlanmagan. Bot kod, seed so‘z yoki to‘lov so‘rasa, darhol to‘xtang.",
      answer: "Buyruqning o‘zi akkauntni ochib bermaydi, lekin Notcoin pul qaytarayotgani rasman tasdiqlanmagan. Bot kod, seed so‘z yoki to‘lov so‘rasa, darhol to‘xtang.",
      body: [
        {
          t: "p",
          text: "Botga /not_gift yozishning o‘zi akkauntingizni hech kimga ochib bermaydi. Lekin Notcoin Toygers o‘yinchoqlari uchun pul qaytarayotgani rasmiy manbalarda tasdiqlanmagan. Xavf buyruqning o‘zida emas, undan keyin bot nima so‘rashida.",
        },
        {
          t: "p",
          text: "Klan chatlarida bir kanal postining forwardi tarqalyapti: «Toygers o‘yinchoqlariga buyurtma berganlarga pul qaytariladi, botga /not_gift yozing, to‘lov USDT (TON)da». Quyida shu xabarni ko‘rgan o‘yinchi uchun: buyruq nimaga olib keladi, hamyon ochish kerakmi va soxta botni qanday ajratish mumkin.",
        },
        {
          t: "h2",
          id: "botga-not-gift-yuborsam-u",
          text: "Botga /not_gift yuborsam, u mendan nimani ko‘radi?",
        },
        {
          t: "p",
          text: "Buyruq oddiy xabar. Telegram FAQ’ga ko‘ra, bot sizning ochiq ismingiz, username’ingiz, profil rasmingiz va unga yozgan xabarlaringizni ko‘radi (<a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a>).",
        },
        {
          t: "p",
          text: "Telefon raqamingiz, oxirgi faollik vaqtingiz va boshqa chatlaringiz esa botga ko‘rinmaydi — faqat o‘zingiz ulashsangiz ko‘rinadi. Shuning uchun buyruqdan keyin «Kontaktni ulashish» tugmasi chiqsa, bosmang.",
        },
        {
          t: "p",
          text: "Havolalarda boshqa gap. Bot yuborgan havolani ochsangiz, o‘sha sayt IP manzilingizni ko‘radi. IP’ning o‘zi akkauntga kirish kaliti emas, lekin bunday havoladan keyin ko‘pincha kod, parol yoki hamyon so‘raydigan sahifa chiqadi.",
        },
        {
          t: "p",
          text: "Postda ko‘rsatilgan bot rasmiy Notcoin boti ekanini tasdiqlaydigan rasmiy sahifa topilmadi. Shu sabab uning username’ini bu yerda keltirmaymiz va havola bermaymiz.",
        },
        {
          t: "h2",
          id: "forwarddagi-oltita-davo-qaysi-biri",
          text: "Forwarddagi oltita da’vo: qaysi biri tekshiruvdan o‘tdi?",
        },
        {
          t: "p",
          text: "Xabarning manbasi — bitta kanal posti, rasmiy e’lon emas. Undagi har bir gapni alohida tekshirdik:",
        },
        {
          t: "table",
          head: [
            "Xabardagi da’vo",
            "Rasmiy manbada bormi",
            "O‘yinchi nima qiladi",
          ],
          rows: [
            [
              "Notcoin Toygers o‘yinchoqlari uchun pul qaytaryapti",
              "Tasdiqlanmagan",
              "Rasmiy e’lonni kutadi",
            ],
            [
              "Pul /not_gift buyrug‘i orqali so‘raladi",
              "Tasdiqlanmagan",
              "Botga shaxsiy ma’lumot kiritmaydi",
            ],
            [
              "Qaytarish uchun 100 000 dollar ajratilgan",
              "Tasdiqlanmagan",
              "Katta summaga qarab qaror qilmaydi",
            ],
            [
              "Pul bir kishining shaxsiy mablag‘idan beriladi",
              "Tasdiqlanmagan",
              "Buni dalil deb hisoblamaydi",
            ],
            [
              "To‘lov USDT (TON)da bo‘ladi",
              "Tasdiqlanmagan",
              "Hamyon ochishga shoshilmaydi",
            ],
            [
              "Postdagi bot rasmiy",
              "Tasdiqlovchi sahifa topilmadi",
              "Botni o‘zi tekshiradi",
            ],
          ],
        },
        {
          t: "p",
          text: "Oltita qatorning birortasi ham rasmiy e’lon bilan tasdiqlanmagan. Bunday xabarga ishonib pul, kod yoki hamyon ma’lumotini bermang.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "toygersga-buyurtma-bermagan-oyinchi-buyruqni",
          text: "Toygers’ga buyurtma bermagan o‘yinchi buyruqni yozishi kerakmi?",
        },
        {
          t: "p",
          text: "Yo‘q. Xabardagi taklif o‘yinchoqqa buyurtma berganlarga qaratilgan. Buyurtma bermagan bo‘lsangiz, botga yozganingiz bilan sizga qaytadigan pul yo‘q.",
        },
        {
          t: "p",
          text: "Klan chatlarida bunday forwardlar yo‘l-yo‘lakay «to‘ldirilib» boradi. Mana shunday qo‘shimchalarni ko‘rsangiz, ehtiyot bo‘ling:",
        },
        {
          t: "list",
          items: [
            "«Buyurtma shart emas, hammaga beriladi» — asl xabarda bunday gap yo‘q.",
            "«Ustiga Stars yoki UC bonus ham bor» — buni hech qanday manba aytmagan.",
            "«Do‘st taklif qilsang, summa oshadi» — ko‘p odamni shubhali botga yig‘ishning eski usuli.",
            "«Jamoadoshlar nomidan ham yozib qo‘y» — birovning username’i yoki Player ID’sini notanish botga kiritishning keragi yo‘q.",
          ],
        },
        {
          t: "p",
          text: "Bonus va’dasi bilan keladigan shunga o‘xshash xabarlar haqida: <a href=\"/blog/ton-gram-otkazish-xabari-oyinchi-aldov\">TON’ni GRAM’ga o‘tkazish xabari aldovmi</a>.",
        },
        {
          t: "h2",
          id: "usdt-ton-olish-uchun-hamyon",
          text: "USDT (TON) olish uchun hamyon ochish shartmi?",
        },
        {
          t: "p",
          text: "Qaytarish uchun USDT (TON) hamyoni kerakmi, degan savolga rasmiy javob topilmadi. To‘lov USDT’da bo‘lishi ham faqat postda yozilgan.",
        },
        {
          t: "p",
          text: "Toygers’ga haqiqatan buyurtma bergan bo‘lsangiz ham, avval rasmiy e’lonni kuting. Hamyon kerak bo‘lib qolsa, uni chatdagi havola orqali emas, o‘zingiz ochasiz.",
        },
        {
          t: "p",
          text: "Pul qaytarish jarayoni bu narsalarni so‘ramasligi kerak:",
        },
        {
          t: "list",
          items: [
            "hamyonning seed so‘zlari yoki maxfiy kaliti;",
            "notanish sahifada «hamyonni ulash» tugmasi;",
            "«hamyonni faollashtirish» uchun kichik o‘tkazma.",
          ],
        },
        {
          t: "p",
          text: "Bulardan bittasi so‘ralsa, shu joyda to‘xtang.",
        },
        {
          t: "p",
          text: "O‘yinchi uchun asosiy gap: UC, olmos, Stars yoki Premium olish uchun USDT, TON yoki hamyon umuman kerak emas. Batafsil: <a href=\"/blog/fragment-usdt-usdc-oyinchi-stars-donat\">Fragment’dagi USDT o‘yinchiga kerakmi</a> va <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">Telegram Wallet o‘yinchiga kerakmi</a>.",
        },
        {
          t: "h2",
          id: "nusxa-botni-asl-botdan-qanday",
          text: "Nusxa botni asl botdan qanday farqlaysiz?",
        },
        {
          t: "p",
          text: "Firibgarlar ko‘pincha mashhur bot nomiga bitta harf bilan farq qiladigan nusxa ochadi. Yozishdan oldin besh narsani tekshiring:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Botni forward yoki chatdagi tugma orqali ochmang. Qidiruvdan o‘zingiz toping va username’ni harfma-harf solishtiring: ortiqcha harf, qo‘shimcha «_» yoki raqam bormi.",
            "Profildagi belgiga qarang. Rasmiy tasdiq belgisini chatlarga faqat Telegram qo‘ya oladi, uchinchi tomon tasdiqlovchilarining belgisi esa butunlay boshqacha ko‘rinadi (<a href=\"https://telegram.org/verify\" target=\"_blank\" rel=\"noopener\">Page Verification Guidelines</a>). Bunday tasdiqning maqsadi — firibgarlikning oldini olish.",
            "FAKE yoki SCAM yorlig‘ini qidiring. O‘zini boshqa birov qilib ko‘rsatadigan yoki aldashga urinadigan bot va akkauntlarga shunday yorliq qo‘yilishi mumkin, u ochiq profilda ko‘rinadi (<a href=\"https://telegram.org/tos/eu-dsa\" target=\"_blank\" rel=\"noopener\">telegram.org/tos/eu-dsa</a>).",
            "Bot kimniki ekanini aniqlang. Telegram’ning ma’lum vazifalar uchun rasmiy botlari bor, lekin postdagi botning rasmiyligini tasdiqlovchi sahifa topilmadi. Rasmiylik isbotlanmagan botga ma’lumot bermang.",
            "Birinchi xabarlardayoq havola, hamyon ulash yoki to‘lov so‘ralsa, chatni yoping.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Ism yoki avatarga qo‘shilgan ko‘k emoji belgini egasi o‘zi qo‘yadi. Rasmiy belgini esa faqat Telegram beradi.",
        },
        {
          t: "h2",
          id: "buyruqdan-keyingi-qadamda-nima-soralsa",
          text: "Buyruqdan keyingi qadamda nima so‘ralsa, chatni yopasiz?",
        },
        {
          t: "p",
          text: "Quyidagilardan biri so‘ralsa, suhbatni davom ettirmang. Pul qaytarish uchun ham, donat uchun ham ular kerak emas:",
        },
        {
          t: "list",
          items: [
            "Telegram kirish kodi yoki ikki bosqichli tekshiruv (2FA) paroli;",
            "hamyonning seed so‘zlari yoki «hamyonni ulash» havolasi;",
            "pulni olish uchun oldindan «komissiya», «gaz» yoki «faollashtirish» to‘lovi;",
            "kartaning to‘liq ma’lumotlari yoki bankdan kelgan SMS kod;",
            "PUBG, Mobile Legends yoki boshqa o‘yin akkauntining paroli.",
          ],
        },
        {
          t: "p",
          text: "Masalan, bot «Sizga 50 USDT qaytariladi, lekin tarmoq to‘lovi uchun avval 1 TON yuboring» deydi. Bu holatda siz hech narsa qaytarib olmaysiz — aksincha, yangi pul yuborasiz. Qaytarish uchun pul so‘rash — aldovning eng ko‘p uchraydigan shakli.",
        },
        {
          t: "p",
          text: "O‘yin chatlaridagi shunga o‘xshash sxemalar: <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">o‘yin chatida firibgarlikni qanday tanish mumkin</a> va <a href=\"/blog/ton-manzilga-donat-tolovi-oyinchi-xavfi\">TON manzilga to‘lash xavfi</a>.",
        },
        {
          t: "h2",
          id: "shubhali-bot-va-forwardga-qayerga",
          text: "Shubhali bot va forwardga qayerga shikoyat qilinadi?",
        },
        {
          t: "p",
          text: "Telegram’ning barcha ilovalarida «Report» tugmasi bor — u kontentni moderatorlarga yuboradi (<a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a>).",
        },
        {
          t: "p",
          text: "Kontaktlaringizda yo‘q odam yozsa, o‘sha ekranning o‘zidan bloklab, shikoyat qilish mumkin. FAQ’ga ko‘ra, biror akkauntning keraksiz xabarlari haqida foydalanuvchilar shikoyat qilsa, Telegram o‘sha akkauntni cheklaydi.",
        },
        {
          t: "p",
          text: "Kimdir sizning nomingizdan firibgarlik qilayotgan bo‘lsa, Telegram @NoToScam’ga murojaat qilishni aytadi. Noqonuniy kontent haqida <a href=\"https://telegram.org/tos/eu-dsa\" target=\"_blank\" rel=\"noopener\">alohida sahifa</a> orqali xabar berish mumkin.",
        },
        {
          t: "p",
          text: "Klan adminiga ham ayting. Forward chatdan o‘chirilsa, yangi kelgan jamoadoshlar unga ishonib qolmaydi.",
        },
        {
          t: "p",
          text: "Botga shikoyat qilish bo‘yicha Telegram’ning bosqichma-bosqich qo‘llanmasi topilmadi, shuning uchun bu yerda faqat umumiy yo‘llar berildi.",
        },
        {
          t: "h2",
          id: "uc-olmos-va-stars-olishga",
          text: "UC, olmos va Stars olishga bu xabar ta’sir qiladimi?",
        },
        {
          t: "p",
          text: "Yo‘q. Toygers haqidagi xabar o‘yin valyutasi yoki Telegram Stars olish tartibini o‘zgartirmaydi.",
        },
        {
          t: "p",
          text: "GemPay’da o‘yin valyutasi faqat Player ID bo‘yicha olinadi. Nik to‘lovdan oldin tekshirib ko‘rsatiladi, parol hech qachon so‘ralmaydi. Tasdiqlab to‘laganingizdan keyin valyuta 1–5 daqiqada avtomatik tushadi.",
        },
        {
          t: "p",
          text: "Stars va Premium uchun faqat @username kerak. Stars bir buyurtmada 50 dan 10 000 tagacha olinadi:",
        },
        {
          t: "table",
          head: [
            "Nima olasiz",
            "Narx",
          ],
          rows: [
            [
              "1 ta Stars — karta o‘tkazmasi yoki bot balansi",
              `${som(STARS_UNIT_CARD, "uz")}`,
            ],
            [
              "1 ta Stars — Click yoki Uzum Bank orqali onlayn",
              `${som(STARS_UNIT_ONLINE, "uz")}`,
            ],
            [
              "Premium 3 oy",
              `${som(premium(3), "uz")}`,
            ],
            [
              "Premium 6 oy",
              `${som(premium(6), "uz")}`,
            ],
            [
              "Premium 12 oy",
              `${som(premium(12), "uz")}`,
            ],
          ],
        },
        {
          t: "p",
          text: "To‘lov UzCard, HUMO, Click, Uzum Bank yoki bot balansi orqali qilinadi. USDT, TON, kripto yoki xorijiy karta kerak emas.",
        },
        {
          t: "note",
          tone: "info",
          text: "Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi. Hisobga tushgan valyuta esa qaytarilmaydi. Savol bo‘lsa, buyurtma raqami bilan <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>’ga yozing.",
        },
        {
          t: "p",
          text: "GemPay mustaqil xizmat, Notcoin yoki Telegram bilan rasmiy aloqa da’vo qilmaydi. Xarid uchun faqat <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>’ni ishlating va uni ham username bo‘yicha harfma-harf tekshiring.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Page Verification Guidelines",
              href: "https://telegram.org/verify",
            },
            {
              label: "User guidance for the EU Digital Services Act",
              href: "https://telegram.org/tos/eu-dsa",
            },
            {
              label: "Telegram FAQ",
              href: "https://telegram.org/faq",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Bot telefon raqamimni so‘rayapti — ulashsam pulni tezroq olamanmi?",
          a: "Raqam ulashish pul qaytarishni tezlashtirishi haqida rasmiy ma’lumot yo‘q. Siz o‘zingiz bermasangiz, bot raqamingizni bilmaydi — shunday qolgani ma’qul.",
        },
        {
          q: "Buyruqdan keyin bot havola yubordi, ochib qo‘ydim. Endi nima qilaman?",
          a: "Sahifani yoping, unda hech narsa kiritmang. Sayt IP manzilingizni ko‘rgan bo‘lishi mumkin, lekin kod, parol yoki seed so‘z kiritmagan bo‘lsangiz, ular hech kimga o‘tmagan. Kiritib qo‘ygan bo‘lsangiz, Telegram 2FA parolini va hamyonni darhol almashtiring.",
        },
        {
          q: "Ismida ko‘k belgi bor bot rasmiy bo‘ladimi?",
          a: "Har doim emas. Haqiqiy tasdiq belgisini faqat Telegram beradi, emoji esa ismga istalgan odam qo‘sha oladi. Uchinchi tomon tasdiqlovchilarining belgisi ham Telegram belgisiga o‘xshamaydi.",
        },
        {
          q: "Forwardni klandagilarga yana tarqatsam bo‘ladimi?",
          a: "Tarqatmagan ma’qul: xabardagi da’volarning birortasi rasman tasdiqlanmagan. Uning o‘rniga adminga yozing va xabarni «Report» orqali belgilang.",
        },
        {
          q: "Qaytarishga qo‘shib Stars yoki UC berishadimi?",
          a: "Bunday va’da asl xabarda ham, rasmiy manbalarda ham yo‘q. «Qaytarish bilan birga UC» degan gap ko‘rsangiz, aldov deb hisoblang.",
        },
        {
          q: "Bu voqea bo‘yicha aniqlik bo‘lguncha UC yoki Premium olishni kutishim kerakmi?",
          a: "Kutish shart emas: o‘yin valyutasi Player ID, Stars va Premium esa @username bo‘yicha so‘mda olinadi. Notcoin xabari bu tartibga hech qanday aloqasi yo‘q.",
        },
      ],
    },
    ru: {
      title: "Возврат Notcoin через /not_gift: безопасно ли писать боту из чата клана?",
      metaTitle: "Возврат Notcoin через /not_gift",
      metaDescription: "Сама команда не открывает доступ к аккаунту, но возврат денег от Notcoin официально не подтверждён. Если бот просит код, seed-фразу или оплату — стоп.",
      excerpt: "Сама команда не открывает доступ к аккаунту, но возврат денег от Notcoin официально не подтверждён. Если бот просит код, seed-фразу или оплату — стоп.",
      answer: "Сама команда не открывает доступ к аккаунту, но возврат денег от Notcoin официально не подтверждён. Если бот просит код, seed-фразу или оплату — стоп.",
      body: [
        {
          t: "p",
          text: "Если отправить боту /not_gift, это само по себе никому не откроет доступ к вашему аккаунту. Но официальные источники не подтверждают, что Notcoin возвращает деньги за игрушки Toygers. Опасна не сама команда, а то, что бот попросит после неё.",
        },
        {
          t: "p",
          text: "По чатам кланов расходится пересланный пост одного канала: «Тем, кто заказывал игрушки Toygers, вернут деньги. Напишите боту /not_gift, выплата в USDT (TON)». Ниже — для игрока, который увидел это сообщение: что происходит после команды, нужно ли заводить кошелёк и как отличить поддельного бота.",
        },
        {
          t: "h2",
          id: "botga-not-gift-yuborsam-u",
          text: "Что бот узнает обо мне, если я отправлю /not_gift?",
        },
        {
          t: "p",
          text: "Команда — это обычное сообщение. По данным Telegram FAQ, бот видит ваше публичное имя, username, фото профиля и сообщения, которые вы ему отправили (<a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a>).",
        },
        {
          t: "p",
          text: "Номер телефона, время последнего входа и другие чаты боту не видны, пока вы сами ими не поделитесь. Поэтому если после команды появится кнопка «Поделиться контактом», не нажимайте её.",
        },
        {
          t: "p",
          text: "Со ссылками всё иначе. Когда вы открываете ссылку от бота, сайт видит ваш IP-адрес. Сам по себе IP не даёт доступа к аккаунту, но после таких ссылок обычно открывается страница, где просят код, пароль или данные кошелька.",
        },
        {
          t: "p",
          text: "Официальной страницы, которая подтверждала бы, что бот из поста — это официальный бот Notcoin, найти не удалось. Поэтому его username мы здесь не приводим и ссылку не даём.",
        },
        {
          t: "h2",
          id: "forwarddagi-oltita-davo-qaysi-biri",
          text: "Шесть заявлений из пересланного поста: что подтвердилось?",
        },
        {
          t: "p",
          text: "Источник сообщения — пост одного канала, а не официальное объявление. Мы проверили каждое заявление отдельно:",
        },
        {
          t: "table",
          head: [
            "Заявление из сообщения",
            "Есть ли в официальных источниках",
            "Что делать игроку",
          ],
          rows: [
            [
              "Notcoin возвращает деньги за игрушки Toygers",
              "Не подтверждено",
              "Ждать официального объявления",
            ],
            [
              "Деньги запрашиваются командой /not_gift",
              "Не подтверждено",
              "Не вводить личные данные в бота",
            ],
            [
              "На возвраты выделено 100 000 долларов",
              "Не подтверждено",
              "Не принимать решение из-за крупной суммы",
            ],
            [
              "Деньги выплачиваются из личных средств одного человека",
              "Не подтверждено",
              "Не считать это доказательством",
            ],
            [
              "Выплата будет в USDT (TON)",
              "Не подтверждено",
              "Не торопиться заводить кошелёк",
            ],
            [
              "Бот из поста — официальный",
              "Подтверждающая страница не найдена",
              "Проверить бота самому",
            ],
          ],
        },
        {
          t: "p",
          text: "Ни одна из шести строк не подтверждена официальным объявлением. Не отдавайте деньги, коды или данные кошелька, поверив такому сообщению.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "toygersga-buyurtma-bermagan-oyinchi-buyruqni",
          text: "Нужно ли писать команду, если я не заказывал Toygers?",
        },
        {
          t: "p",
          text: "Нет. Предложение из сообщения адресовано тем, кто заказывал игрушки. Если вы ничего не заказывали, возвращать вам нечего, сколько бы вы ни писали боту.",
        },
        {
          t: "p",
          text: "В чатах кланов такие пересылки по дороге обрастают «дополнениями». Если видите что-то из этого, будьте осторожны:",
        },
        {
          t: "list",
          items: [
            "«Заказ не нужен, дают всем» — в исходном сообщении такого нет.",
            "«Сверху ещё бонус Stars или UC» — этого не говорил ни один источник.",
            "«Пригласишь друга — сумма вырастет» — старый способ собрать побольше людей в подозрительного бота.",
            "«Напиши и за тиммейтов» — вводить чужой username или Player ID в незнакомого бота незачем.",
          ],
        },
        {
          t: "p",
          text: "О похожих сообщениях с обещанием бонусов: <a href=\"/blog/ton-gram-otkazish-xabari-oyinchi-aldov\">сообщение о переводе TON в GRAM — это обман?</a>",
        },
        {
          t: "h2",
          id: "usdt-ton-olish-uchun-hamyon",
          text: "Обязательно ли заводить кошелёк, чтобы получить USDT (TON)?",
        },
        {
          t: "p",
          text: "Официального ответа на вопрос, нужен ли для возврата кошелёк USDT (TON), найти не удалось. То, что выплата будет в USDT, тоже написано только в посте.",
        },
        {
          t: "p",
          text: "Даже если вы действительно заказывали Toygers, сначала дождитесь официального объявления. Если кошелёк всё-таки понадобится, заводите его сами, а не по ссылке из чата.",
        },
        {
          t: "p",
          text: "Процесс возврата не должен требовать:",
        },
        {
          t: "list",
          items: [
            "seed-фразу или приватный ключ кошелька;",
            "кнопку «подключить кошелёк» на незнакомой странице;",
            "небольшой перевод для «активации кошелька».",
          ],
        },
        {
          t: "p",
          text: "Если просят что-то из этого — на этом остановитесь.",
        },
        {
          t: "p",
          text: "Главное для игрока: чтобы купить UC, алмазы, Stars или Premium, не нужны ни USDT, ни TON, ни кошелёк. Подробнее: <a href=\"/blog/fragment-usdt-usdc-oyinchi-stars-donat\">нужен ли игроку USDT на Fragment</a> и <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">нужен ли игроку Telegram Wallet</a>.",
        },
        {
          t: "h2",
          id: "nusxa-botni-asl-botdan-qanday",
          text: "Как отличить бота-копию от настоящего?",
        },
        {
          t: "p",
          text: "Мошенники часто создают копию известного бота с названием, которое отличается на одну букву. Прежде чем писать, проверьте пять вещей:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Не открывайте бота из пересланного сообщения или по кнопке в чате. Найдите его сами через поиск и сверьте username побуквенно: нет ли лишней буквы, дополнительного «_» или цифры.",
            "Посмотрите на значок в профиле. Официальную галочку верификации чатам может ставить только Telegram, а значки сторонних верификаторов выглядят совершенно иначе (<a href=\"https://telegram.org/verify\" target=\"_blank\" rel=\"noopener\">Page Verification Guidelines</a>). Цель такой верификации — предотвращать мошенничество.",
            "Поищите метку FAKE или SCAM. Её могут поставить ботам и аккаунтам, которые выдают себя за других или пытаются обмануть пользователей, и она видна в публичном профиле (<a href=\"https://telegram.org/tos/eu-dsa\" target=\"_blank\" rel=\"noopener\">telegram.org/tos/eu-dsa</a>).",
            "Выясните, чей это бот. У Telegram есть официальные боты для определённых задач, но страницы, подтверждающей официальный статус бота из поста, найти не удалось. Не давайте данные боту, чья официальность не доказана.",
            "Если уже в первых сообщениях просят перейти по ссылке, подключить кошелёк или заплатить — закрывайте чат.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Синий эмодзи в имени или на аватарке владелец ставит сам. Официальную галочку выдаёт только Telegram.",
        },
        {
          t: "h2",
          id: "buyruqdan-keyingi-qadamda-nima-soralsa",
          text: "Что должны попросить после команды, чтобы вы закрыли чат?",
        },
        {
          t: "p",
          text: "Если просят что-то из списка ниже, не продолжайте разговор. Ни для возврата денег, ни для доната это не нужно:",
        },
        {
          t: "list",
          items: [
            "код входа в Telegram или пароль двухэтапной проверки (2FA);",
            "seed-фразу кошелька или ссылку «подключить кошелёк»;",
            "предварительную «комиссию», «газ» или плату за «активацию», чтобы получить деньги;",
            "полные данные карты или SMS-код из банка;",
            "пароль от аккаунта PUBG, Mobile Legends или другой игры.",
          ],
        },
        {
          t: "p",
          text: "Например, бот пишет: «Вам вернут 50 USDT, но сначала отправьте 1 TON на сетевую комиссию». В этом случае вы ничего не возвращаете, а наоборот — отправляете новые деньги. Просьба заплатить за возврат — самая частая форма обмана.",
        },
        {
          t: "p",
          text: "Похожие схемы в игровых чатах: <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">как распознать мошенничество в игровом чате</a> и <a href=\"/blog/ton-manzilga-donat-tolovi-oyinchi-xavfi\">чем опасна оплата на TON-адрес</a>.",
        },
        {
          t: "h2",
          id: "shubhali-bot-va-forwardga-qayerga",
          text: "Куда пожаловаться на подозрительного бота и пересылку?",
        },
        {
          t: "p",
          text: "Во всех приложениях Telegram есть кнопка «Report» — она отправляет контент модераторам (<a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a>).",
        },
        {
          t: "p",
          text: "Если пишет человек не из ваших контактов, его можно заблокировать и пожаловаться прямо с того же экрана. Согласно FAQ, когда пользователи жалуются на нежелательные сообщения от аккаунта, Telegram его ограничивает.",
        },
        {
          t: "p",
          text: "Если кто-то мошенничает от вашего имени, Telegram советует обращаться в @NoToScam. О незаконном контенте можно сообщить через <a href=\"https://telegram.org/tos/eu-dsa\" target=\"_blank\" rel=\"noopener\">отдельную страницу</a>.",
        },
        {
          t: "p",
          text: "Скажите и админу клана. Если пересылку удалят из чата, новые тиммейты на неё не попадутся.",
        },
        {
          t: "p",
          text: "Пошаговой инструкции Telegram о том, как пожаловаться именно на бота, найти не удалось, поэтому здесь приведены только общие способы.",
        },
        {
          t: "h2",
          id: "uc-olmos-va-stars-olishga",
          text: "Влияет ли это сообщение на покупку UC, алмазов и Stars?",
        },
        {
          t: "p",
          text: "Нет. Новость про Toygers не меняет порядок покупки игровой валюты или Telegram Stars.",
        },
        {
          t: "p",
          text: "В GemPay игровую валюту покупают только по Player ID. Ник проверяется и показывается до оплаты, пароль не спрашивают никогда. После подтверждения и оплаты валюта зачисляется автоматически за 1–5 минут.",
        },
        {
          t: "p",
          text: "Для Stars и Premium нужен только @username. За один заказ можно взять от 50 до 10 000 Stars:",
        },
        {
          t: "table",
          head: [
            "Что покупаете",
            "Цена",
          ],
          rows: [
            [
              "1 Stars — перевод с карты или баланс бота",
              `${som(STARS_UNIT_CARD, "ru")}`,
            ],
            [
              "1 Stars — онлайн через Click или Uzum Bank",
              `${som(STARS_UNIT_ONLINE, "ru")}`,
            ],
            [
              "Premium на 3 месяца",
              `${som(premium(3), "ru")}`,
            ],
            [
              "Premium на 6 месяцев",
              `${som(premium(6), "ru")}`,
            ],
            [
              "Premium на 12 месяцев",
              `${som(premium(12), "ru")}`,
            ],
          ],
        },
        {
          t: "p",
          text: "Оплата — через UzCard, HUMO, Click, Uzum Bank или баланс бота. USDT, TON, криптовалюта и зарубежная карта не нужны.",
        },
        {
          t: "note",
          tone: "info",
          text: "Если заказ не выполнен, деньги полностью возвращаются в течение 3 рабочих дней. Зачисленная на счёт валюта не возвращается. Если есть вопросы, напишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> и укажите номер заказа.",
        },
        {
          t: "p",
          text: "GemPay — независимый сервис и не заявляет об официальной связи с Notcoin или Telegram. Для покупок пользуйтесь только <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> и его тоже сверяйте по username побуквенно.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Page Verification Guidelines",
              href: "https://telegram.org/verify",
            },
            {
              label: "User guidance for the EU Digital Services Act",
              href: "https://telegram.org/tos/eu-dsa",
            },
            {
              label: "Telegram FAQ",
              href: "https://telegram.org/faq",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Бот просит номер телефона — если поделюсь, деньги придут быстрее?",
          a: "Официальных данных о том, что номер ускоряет возврат, нет. Пока вы сами его не отправите, бот вашего номера не знает — и пусть так и остаётся.",
        },
        {
          q: "После команды бот прислал ссылку, и я её открыл. Что теперь делать?",
          a: "Закройте страницу и ничего на ней не вводите. Сайт мог увидеть ваш IP-адрес, но если вы не вводили код, пароль или seed-фразу, они никому не достались. Если ввели — сразу смените пароль 2FA в Telegram и перенесите средства в новый кошелёк.",
        },
        {
          q: "Бот с синей галочкой в имени — официальный?",
          a: "Не всегда. Настоящую галочку выдаёт только Telegram, а эмодзи в имя может добавить кто угодно. Значки сторонних верификаторов тоже не похожи на значок Telegram.",
        },
        {
          q: "Можно переслать это сообщение дальше в клан?",
          a: "Лучше не надо: ни одно из заявлений в нём официально не подтверждено. Вместо этого напишите админу и отметьте сообщение через «Report».",
        },
        {
          q: "Вместе с возвратом дадут Stars или UC?",
          a: "Такого обещания нет ни в исходном сообщении, ни в официальных источниках. Если видите фразу «вместе с возвратом — UC», считайте это обманом.",
        },
        {
          q: "Стоит ли подождать с покупкой UC или Premium, пока всё не прояснится?",
          a: "Ждать не нужно: игровую валюту покупают по Player ID, а Stars и Premium — по @username, оплачивая в сумах. Новость про Notcoin к этому порядку никакого отношения не имеет.",
        },
      ],
    },
  },
};

export default article;
