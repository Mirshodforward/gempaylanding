// Avtoblogyoz yasagan maqola (2026-11-08). Niyat: VPN bilan Getgems'ga kirganda «Kirish taqiqlangan» chiqqan o'zbek o'yinchi yordam botiga IP manzil yuborish xavfsizmi, akkaunti va sovg'alariga xavf bormi, jamoadoshga sovg'a yoki Stars berish uchun Getgems kerakmi degan savollarga javobni «Getgems IP bloklash VPN» deb qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/blog/collectible-gifts-and-more
//   https://telegram.org/blog/wear-gifts-blockchain-and-more

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "getgems-ip-bloklash-vpn-oyinchi-xavfsizligi",
  game: null,
  type: "trust",
  datePublished: "2026-11-08",
  dateModified: "2026-11-08",
  keywords: ["Getgems IP bloklash VPN","Getgems kirish taqiqlangan","Getgems support IP manzil","Getgems VPN ochilmayapti","Getgems xavfsizmi","jamoadoshga Stars sovg'a qilish","Telegram sovg'a Getgems kerakmi","Getgems блокировка IP VPN","Getgems доступ запрещён","Getgems поддержка отправить IP","Getgems не открывается через VPN","безопасно ли отправлять IP боту"],
  locales: {
    uz: {
      title: "Getgems IP bloklash VPN: yordam botiga IP yuborsam, o‘yinchiga xavf bormi?",
      metaTitle: "Getgems IP bloklash VPN: yordam botiga IP yuborsam",
      metaDescription: "IP manzilning o‘zi Telegram yoki o‘yin akkauntini ochmaydi, lekin Getgems supporti IP so‘rashi tasdiqlanmagan — kod, parol va hamyon so‘zlarini bermang.",
      excerpt: "IP manzilning o‘zi Telegram yoki o‘yin akkauntini ochmaydi, lekin Getgems supporti IP so‘rashi tasdiqlanmagan — kod, parol va hamyon so‘zlarini bermang.",
      answer: "IP manzilning o‘zi Telegram yoki o‘yin akkauntini ochmaydi, lekin Getgems supporti IP so‘rashi tasdiqlanmagan — kod, parol va hamyon so‘zlarini bermang.",
      body: [
        {
          t: "h2",
          id: "klan-chatidagi-getgems-vpnni-bloklayapti",
          text: "Klan chatidagi «Getgems VPN’ni bloklayapti» xabari: nima ma’lum?",
        },
        {
          t: "p",
          text: "Aniq ma’lum narsa kam. VPN bilan Getgems’ga kirganda «Kirish taqiqlangan» chiqishi haqida faqat norasmiy Telegram kanallarida postlar bor. Bloklovni olib tashlash uchun yordam botiga IP yuborish kerakligi haqida ham shunday.",
        },
        {
          t: "p",
          text: "Getgems’ning o‘z bayonoti va foydalanish shartlari bu maqolada tekshirilmagan. Cheklangan davlatlar ro‘yxatida O‘zbekiston bor-yo‘qligi ham tekshirilmagan. Shuning uchun xatoning sababini taxmin qilmaymiz.",
        },
        {
          t: "p",
          text: "Chatga tashlangan skrinshot bir odamning bir martalik tajribasini ko‘rsatadi, xolos. U qoida yoki rasmiy e’lon emas.",
        },
        {
          t: "p",
          text: "Telegram tomonidan tasdiqlangani shu. Kolleksion sovg‘alarni boshqa foydalanuvchiga berish va NFT marketpleyslarda auksionga qo‘yish mumkin — bu haqda <a href=\"https://telegram.org/blog/collectible-gifts-and-more\" target=\"_blank\" rel=\"noopener\">rasmiy blogda</a> yozilgan. Keyinroq sovg‘alarni TON blokcheyni orqali o‘tkazish imkoni <a href=\"https://telegram.org/blog/wear-gifts-blockchain-and-more\" target=\"_blank\" rel=\"noopener\">qo‘shilgan</a>. Telegram blogi Getgems’ni nomi bilan tilga olmaydi: bu Telegram’ning bir qismi emas, alohida tashqi xizmat.",
        },
        {
          t: "p",
          text: "O‘yinchi uchun xulosa: bu tashqi saytning ichki masalasi. Uning Telegram akkauntingiz, klan chatingiz yoki PUBG va Mobile Legends profilingizga ta’sir qilishi hech qayerda tasdiqlanmagan.",
        },
        {
          t: "h2",
          id: "yordam-boti-ip-soradi-bu",
          text: "«Yordam boti» IP so‘radi: bu ma’lumot kimga nima beradi?",
        },
        {
          t: "p",
          text: "IP manzil qurilmangiz internetga qaysi tarmoq orqali chiqayotganini bildiradi. VPN yoqilgan bo‘lsa, odatda sizniki emas, VPN serverining manzili ko‘rinadi.",
        },
        {
          t: "p",
          text: "IP’ning o‘zi bilan Telegram yoki o‘yin akkauntiga kirib bo‘lmaydi. Bu umumiy tamoyil, rasmiy tavsiya emas.",
        },
        {
          t: "p",
          text: "Asosiy savol esa boshqa: so‘rov kimdan kelyapti? Getgems supporti IP so‘rashi tasdiqlanmagan. Demak, sizga yozgan «yordamchi» haqiqiy ekaniga ishonch yo‘q.",
        },
        {
          t: "p",
          text: "Soxta «support»ni shu belgilardan tanish mumkin:",
        },
        {
          t: "list",
          items: [
            "Siz hech kimga murojaat qilmagansiz, u esa o‘zi birinchi yozadi.",
            "Username xizmat saytidagi bilan mos kelmaydi yoki bitta harfi farq qiladi.",
            "«Akkauntingiz hozir o‘chadi» deb shoshiltiradi.",
            "IP’dan keyin Telegram kodini, ikki bosqichli parolni, hamyon so‘zlarini yoki «tekshiruv to‘lovi»ni so‘raydi.",
            "O‘zini bot deb tanishtirgan, lekin username’i «bot» bilan tugamaydi. Buni qanday tekshirish — <a href=\"/blog/game-bilan-tugaydigan-donat-boti-tekshirish\">bot username’ini tekshirish</a> maqolasida.",
          ],
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "jamoadosh-sorasa-ham-nima-beriladi",
          text: "Jamoadosh so‘rasa ham nima beriladi, nima berilmaydi?",
        },
        {
          t: "p",
          text: "Aldov ko‘pincha zararsiz so‘rovdan boshlanadi. Avval IP so‘raladi, keyin «tasdiqlash uchun» kod. Quyidagi jadval qaysi ma’lumot qayerga ketishi mumkinligini ko‘rsatadi.",
        },
        {
          t: "table",
          head: [
            "Ma’lumot",
            "Kimga berish mumkin",
            "Xavfi",
          ],
          rows: [
            [
              "@username",
              "Sizga Stars yoki Premium sovg‘a qiluvchiga",
              "Akkauntga kirishga yetmaydi",
            ],
            [
              "Player ID",
              "Donat qilayotgan odam yoki xizmatga",
              "Parol emas, faqat to‘ldirish uchun",
            ],
            [
              "IP manzil",
              "Faqat o‘zingiz murojaat qilgan, tekshirilgan xizmatga",
              "O‘zi kirish bermaydi, lekin aldovning birinchi qadami bo‘lishi mumkin",
            ],
            [
              "Telegram kirish kodi, ikki bosqichli parol",
              "Hech kimga",
              "Akkauntni yo‘qotish",
            ],
            [
              "TON hamyonining tiklash so‘zlari",
              "Hech kimga",
              "Hamyondagi sovg‘alar birovning qo‘liga o‘tadi",
            ],
          ],
        },
        {
          t: "p",
          text: "Hamyon so‘zlari eng xavflisi bo‘lishining sababi bor. Telegram <a href=\"https://telegram.org/blog/wear-gifts-blockchain-and-more\" target=\"_blank\" rel=\"noopener\">yozishicha</a>, blokcheynga chiqarilgan sovg‘a egasi akkauntiga kira olmay qolsa yoki uni o‘chirsa ham, sovg‘a ustidan nazorat unda qoladi. Demak, nazorat Telegram akkauntiga emas, hamyonga bog‘langan. Kalitni bilgan begona ham shu nazoratga ega bo‘lishi mumkin.",
        },
        {
          t: "p",
          text: "Akkauntni mustahkamlash rejasi — <a href=\"/blog/888-anonim-raqam-oyinchi-akkaunt-himoyasi\">+888 akkaunt himoyasi</a> maqolasida.",
        },
        {
          t: "h2",
          id: "getgems-ishlamay-tursa-kolleksion-sovgalaringiz",
          text: "Getgems ishlamay tursa, kolleksion sovg‘alaringiz qayerda bo‘ladi?",
        },
        {
          t: "p",
          text: "Sayt ochilmasligi sovg‘aning o‘zini o‘chirib yubormaydi. Marketpleys — sovg‘ani ko‘rsatish va savdo qilish uchun oyna. Getgems bo‘yicha rasmiy tushuntirish topilmadi, bu umumiy mantiq.",
        },
        {
          t: "p",
          text: "Sovg‘a qayerda turganiga qarab vaziyat ikki xil:",
        },
        {
          t: "list",
          items: [
            "<strong>Telegram profilingizdagi kolleksion sovg‘a.</strong> Telegram ma’lumotiga ko‘ra, uni boshqa foydalanuvchiga darhol berish mumkin. Tashqi saytning ochilish-ochilmasligi bunga ta’sir qilmaydi.",
            "<strong>Blokcheynga chiqarilgan sovg‘a.</strong> U TON hamyonida turadi va hamyon egasining nazoratida qoladi.",
          ],
        },
        {
          t: "p",
          text: "Istisno ham bor. Sovg‘ani savdoga qo‘ygan yoki tashqi servisga topshirgan bo‘lsangiz, uning holati o‘sha servis qoidalariga bog‘liq. Bu holat batafsil <a href=\"/blog/sovgani-marketpleysga-otkazish-xavfsizmi-oyinchi\">sovg‘ani marketpleysga o‘tkazish xavfsizmi</a> maqolasida yoritilgan.",
        },
        {
          t: "h2",
          id: "klanga-stars-premium-yoki-sovga",
          text: "Klanga Stars, Premium yoki sovg‘a: Getgems’siz bo‘ladimi?",
        },
        {
          t: "p",
          text: "Bo‘ladi. Jamoadoshni turnir g‘alabasi bilan tabriklash yoki squad sardoriga Premium sovg‘a qilish uchun tashqi bozor kerak emas. Getgems kabi xizmat faqat NFT sovg‘ani Telegram’dan tashqarida sotib olish yoki sotish uchun kerak bo‘lishi mumkin.",
        },
        {
          t: "table",
          head: [
            "Maqsad",
            "Getgems kerakmi",
            "Qanday qilinadi",
          ],
          rows: [
            [
              "Jamoadoshga Stars",
              "Yo‘q",
              `@username bo‘yicha; 1 dona ${som(STARS_UNIT_CARD, "uz")} (karta yoki balans) yoki ${som(STARS_UNIT_ONLINE, "uz")} (Click, Uzum Bank)`,
            ],
            [
              "Squad sardoriga Premium",
              "Yo‘q",
              `@username bo‘yicha: 3 oy ${som(premium(3), "uz")}, 6 oy ${som(premium(6), "uz")}, 12 oy ${som(premium(12), "uz")}`,
            ],
            [
              "O‘zingizdagi kolleksion sovg‘ani do‘stga berish",
              "Yo‘q",
              "Telegram ichida, darhol",
            ],
            [
              "Sovg‘ani blokcheynga chiqarish",
              "Yo‘q",
              "My Profile &gt; Gifts &gt; sovg‘a &gt; Transfer &gt; Send via Blockchain",
            ],
            [
              "Jamoadoshga UC, olmos yoki CP",
              "Yo‘q",
              "Uning Player ID’si bo‘yicha",
            ],
          ],
        },
        {
          t: "p",
          text: "Telegram <a href=\"https://telegram.org/blog/wear-gifts-blockchain-and-more\" target=\"_blank\" rel=\"noopener\">ta’rifiga ko‘ra</a>, blokcheynga chiqarish auksion saytlari kabi tashqi xizmatlarga ulanish imkonini beradi. Klan ichida sovg‘a almashish uchun bu qadam shart emas.",
        },
        {
          t: "p",
          text: "Yana bir nuqta: Stars o‘yin valyutasiga aylanmaydi. Jamoadoshga UC kerak bo‘lsa, unga Stars emas, Player ID bo‘yicha donat qilinadi. Hamyon umuman kerakmi degan savolga javob — <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">Telegram Wallet o‘yinchiga kerakmi</a> maqolasida.",
        },
        {
          t: "h2",
          id: "xato-chiqqan-kuni-nima-qilish",
          text: "Xato chiqqan kuni nima qilish kerak: besh qadam",
        },
        {
          t: "steps",
          items: [
            {
              title: "To‘xtab, nafas oling",
              text: "Sovg‘a yoki pul shu daqiqada yo‘qolmaydi. Aldovchi aynan sizning shoshilishingizga tayanadi.",
            },
            {
              title: "Support manzilini o‘zingiz toping",
              text: "Uni xizmatning o‘z saytidan oching. Chatga yoki kanalga tashlangan havoladan foydalanmang.",
            },
            {
              title: "Yozgan akkauntni tekshiring",
              text: "Username’ga qarang. Kod, parol, tiklash so‘zlari yoki oldindan to‘lov so‘ralsa, yozishmani yoping.",
            },
            {
              title: "Telegram himoyasini yoqing",
              text: "Ikki bosqichli tekshiruv parolini o‘rnating. Faol seanslar ro‘yxatida notanish qurilma yo‘qligini ko‘ring.",
            },
            {
              title: "Sovg‘ani joyidan qimirlatmang",
              text: "Notanish servisga yoki «garant» botga o‘tkazmang. Kerak bo‘lmasa, blokcheynga ham chiqarmang.",
            },
          ],
        },
        {
          t: "p",
          text: "Chatdagi savdo takliflaridagi tipik aldovlar — <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">gift sotib olish taklifi va firibgarlik</a> maqolasida.",
        },
        {
          t: "h2",
          id: "reklama-postidagi-vpn-bot-va",
          text: "Reklama postidagi VPN bot va «muqobil bozor»: o‘yinchi nimani hisobga oladi?",
        },
        {
          t: "p",
          text: "Bu mavzudagi kanal postlari ko‘pincha bir xil tuzilgan. Avval xato haqida yoziladi, oxirida esa muallifning VPN boti, Stars boti yoki referal havolasi turadi. «Mening botim bilan ochildi» degan gap tekshiruv emas, reklama.",
        },
        {
          t: "note",
          tone: "warn",
          text: "Marketapp va shunga o‘xshash bozorlar Telegram yoki Fragment rasmiy sahifalarida tilga olinmagan. Ularning xavfsizligi bu maqolada baholanmagan.",
        },
        {
          t: "p",
          text: "Notanish VPN xizmati internet trafigingiz qayerga ketayotganini ko‘ra olishi mumkin. Telefoningizda klan chati, bank ilovasi va o‘yin akkauntlari turibdi. Shuning uchun VPN’ni yoqishdan oldin uning ortida kim turganini o‘ylab ko‘ring. Bu umumiy maslahat.",
        },
        {
          t: "p",
          text: "Sovg‘alar bilan Fragment orqali ishlasangiz, akkaunt ulash tartibi <a href=\"/blog/fragment-verifikatsiyasiz-akkaunt-ulash-oyinchi\">Fragment verifikatsiyasiz</a> maqolasida tushuntirilgan.",
        },
        {
          t: "h2",
          id: "gempayda-stars-yoki-premium-olishda",
          text: "GemPay’da Stars yoki Premium olishda VPN, IP yoki hamyon so‘raladimi?",
        },
        {
          t: "p",
          text: "Yo‘q. GemPay’da xorijiy karta, VPN yoki kripto kerak emas. To‘lov UzCard, HUMO, Click, Uzum Bank yoki bot balansidan qilinadi, Rossiyadan esa SBP orqali. Visa va Mastercard qabul qilinmaydi.",
        },
        {
          t: "list",
          items: [
            "<strong>Stars:</strong> faqat @username so‘raladi. Bir buyurtmada 50 dan 10 000 tagacha olish mumkin, yulduzlar bir necha soniyada tushadi. Batafsil — <a href=\"/stars\">Stars sahifasida</a>.",
            "<strong>Premium:</strong> @username bo‘yicha Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi. Akkauntga kirilmaydi, obuna bir necha soniyada faollashadi. 1 oylik tarif yo‘q. Tariflar — <a href=\"/premium\">Premium sahifasida</a>.",
            "<strong>O‘yin donati:</strong> faqat Player ID kerak, parol hech qachon so‘ralmaydi. Nik tekshirib ko‘rsatiladi, tasdiqlangandan keyin to‘lanadi.",
          ],
        },
        {
          t: "p",
          text: "Buyurtmada muammo bo‘lsa, <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>’ga buyurtma raqami bilan yoziladi. Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi. Shartlar — <a href=\"/tolov-va-qaytarish\">to‘lov va qaytarish</a> sahifasida.",
        },
        {
          t: "p",
          text: "GemPay mustaqil xizmat. U Telegram yoki Getgems bilan bog‘liqlik da’vo qilmaydi va hech qachon IP manzil, kod yoki hamyon so‘zlarini so‘ramaydi.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Collectible Gifts, Message Search Filters and More",
              href: "https://telegram.org/blog/collectible-gifts-and-more",
            },
            {
              label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More",
              href: "https://telegram.org/blog/wear-gifts-blockchain-and-more",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Turnir oldidan «Getgems yordamchisi» IP so‘rab yozdi. Bersam, Telegram’imni buzib qo‘yishadimi?",
          a: "IP’ning o‘zi bilan akkauntga kirib bo‘lmaydi. Lekin bunday so‘rov odatda keyin kod yoki hamyon so‘zlarini so‘rashga ulanadi. Siz o‘zingiz murojaat qilmagan bo‘lsangiz, yozishmani shu yerda yoping.",
        },
        {
          q: "Getgems umuman ochilmayapti. Profilimdagi kolleksion sovg‘ani klandoshimga bera olamanmi?",
          a: "Ha, sovg‘a Telegram profilingizda tursa, uni Telegram ichida boshqa foydalanuvchiga berish mumkin. Bu uchun tashqi sayt kerak emas. Savdoga qo‘yilgan sovg‘aning holati esa o‘sha servis qoidalariga bog‘liq.",
        },
        {
          q: "Chatda kimdir «Getgems supporti» deb hamyonimning 24 so‘zini so‘rayapti. Bu normalmi?",
          a: "Yo‘q, bu aniq aldov belgisi. Tiklash so‘zlarini bilgan odam hamyondagi sovg‘alarni boshqara olishi mumkin. Hech narsa yubormang va support bilan faqat xizmat saytidagi havola orqali bog‘laning.",
        },
        {
          q: "Jamoadoshga NFT sovg‘a berish uchun avval uni blokcheynga chiqarishim kerakmi?",
          a: "Kerak emas. Telegram ichida kolleksion sovg‘a darhol boshqa egaga o‘tadi. Blokcheynga chiqarish ko‘proq auksion saytlari kabi tashqi xizmatlarga ulanish uchun mo‘ljallangan.",
        },
        {
          q: "GemPay’da jamoadoshimga Stars olayotganda VPN yoqib qo‘ysam bo‘ladimi?",
          a: "VPN umuman kerak emas. Faqat jamoadoshning @username’ini kiritasiz va UzCard, HUMO, Click, Uzum Bank yoki bot balansidan to‘laysiz.",
        },
        {
          q: "Getgems’dagi bloklov UC yoki olmos balansimga ta’sir qiladimi?",
          a: "Bunday bog‘liqlik hech qayerda tasdiqlanmagan. Donat o‘yin akkauntiga Player ID bo‘yicha tushadi, tashqi NFT bozori bu jarayonda qatnashmaydi.",
        },
      ],
    },
    ru: {
      title: "Getgems, VPN и блокировка по IP: можно ли отправлять IP «боту поддержки»?",
      metaTitle: "Getgems, VPN и блокировка по IP",
      metaDescription: "Сам IP не даёт доступа к Telegram или игровому аккаунту, но запрос IP от поддержки Getgems не подтверждён — не отдавайте код, пароль и слова кошелька.",
      excerpt: "Сам IP не даёт доступа к Telegram или игровому аккаунту, но запрос IP от поддержки Getgems не подтверждён — не отдавайте код, пароль и слова кошелька.",
      answer: "Сам IP не даёт доступа к Telegram или игровому аккаунту, но запрос IP от поддержки Getgems не подтверждён — не отдавайте код, пароль и слова кошелька.",
      body: [
        {
          t: "h2",
          id: "klan-chatidagi-getgems-vpnni-bloklayapti",
          text: "Сообщение в клановом чате «Getgems блокирует VPN»: что известно?",
        },
        {
          t: "p",
          text: "Точно известно немного. О том, что при входе на Getgems через VPN появляется «Доступ запрещён», пишут только неофициальные Telegram-каналы. То же касается слухов, что для снятия блокировки нужно отправить свой IP боту поддержки.",
        },
        {
          t: "p",
          text: "Собственное заявление Getgems и его пользовательское соглашение в этой статье не проверены. Есть ли Узбекистан в списке стран с ограничениями — тоже не проверено. Поэтому гадать о причине ошибки мы не будем.",
        },
        {
          t: "p",
          text: "Скриншот, брошенный в чат, показывает разовый опыт одного человека, не больше. Это не правило и не официальное объявление.",
        },
        {
          t: "p",
          text: "Вот что подтверждено со стороны Telegram. Коллекционные подарки можно передавать другим пользователям и выставлять на аукцион на NFT-маркетплейсах — об этом сказано в <a href=\"https://telegram.org/blog/collectible-gifts-and-more\" target=\"_blank\" rel=\"noopener\">официальном блоге</a>. Позже появилась <a href=\"https://telegram.org/blog/wear-gifts-blockchain-and-more\" target=\"_blank\" rel=\"noopener\">возможность</a> передавать подарки через блокчейн TON. Блог Telegram не упоминает Getgems по названию: это не часть Telegram, а отдельный внешний сервис.",
        },
        {
          t: "p",
          text: "Вывод для игрока: это внутренний вопрос стороннего сайта. Нигде не подтверждено, что он как-то влияет на ваш Telegram-аккаунт, клановый чат или профиль в PUBG и Mobile Legends.",
        },
        {
          t: "h2",
          id: "yordam-boti-ip-soradi-bu",
          text: "«Бот поддержки» попросил IP: что эти данные дают другому человеку?",
        },
        {
          t: "p",
          text: "IP-адрес показывает, через какую сеть ваше устройство выходит в интернет. Если включён VPN, обычно виден адрес VPN-сервера, а не ваш.",
        },
        {
          t: "p",
          text: "По одному IP войти в Telegram или игровой аккаунт нельзя. Это общий принцип, а не официальная рекомендация.",
        },
        {
          t: "p",
          text: "Главный вопрос другой: от кого пришёл запрос? То, что поддержка Getgems просит IP, не подтверждено. Значит, нет уверенности, что написавший вам «помощник» настоящий.",
        },
        {
          t: "p",
          text: "Фейковую «поддержку» выдают такие признаки:",
        },
        {
          t: "list",
          items: [
            "Вы никуда не обращались, а вам пишут первыми.",
            "Username не совпадает с указанным на сайте сервиса или отличается одной буквой.",
            "Торопят: «аккаунт сейчас удалят».",
            "После IP просят код входа в Telegram, облачный пароль, слова кошелька или «проверочный платёж».",
            "Представляется ботом, но username не заканчивается на «bot». Как это проверить — в статье <a href=\"/blog/game-bilan-tugaydigan-donat-boti-tekshirish\">проверка username бота</a>.",
          ],
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "jamoadosh-sorasa-ham-nima-beriladi",
          text: "Что можно дать даже тиммейту, а что нельзя никому?",
        },
        {
          t: "p",
          text: "Обман часто начинается с безобидной просьбы. Сначала просят IP, потом код «для подтверждения». Таблица показывает, какие данные кому можно передавать.",
        },
        {
          t: "table",
          head: [
            "Данные",
            "Кому можно дать",
            "Риск",
          ],
          rows: [
            [
              "@username",
              "Тому, кто дарит вам Stars или Premium",
              "Для входа в аккаунт не хватит",
            ],
            [
              "Player ID",
              "Человеку или сервису, который делает донат",
              "Это не пароль, нужен только для пополнения",
            ],
            [
              "IP-адрес",
              "Только проверенному сервису, куда вы обратились сами",
              "Сам по себе доступа не даёт, но может быть первым шагом обмана",
            ],
            [
              "Код входа в Telegram, облачный пароль",
              "Никому",
              "Потеря аккаунта",
            ],
            [
              "Секретные слова TON-кошелька",
              "Никому",
              "Подарки из кошелька уйдут в чужие руки",
            ],
          ],
        },
        {
          t: "p",
          text: "Слова кошелька опаснее всего не случайно. Как <a href=\"https://telegram.org/blog/wear-gifts-blockchain-and-more\" target=\"_blank\" rel=\"noopener\">пишет Telegram</a>, подарок, выведенный в блокчейн, остаётся под контролем владельца, даже если тот потерял доступ к аккаунту или удалил его. То есть контроль привязан не к Telegram-аккаунту, а к кошельку. Посторонний, знающий ключ, может получить тот же контроль.",
        },
        {
          t: "p",
          text: "План защиты аккаунта — в статье <a href=\"/blog/888-anonim-raqam-oyinchi-akkaunt-himoyasi\">защита аккаунта +888</a>.",
        },
        {
          t: "h2",
          id: "getgems-ishlamay-tursa-kolleksion-sovgalaringiz",
          text: "Где окажутся ваши коллекционные подарки, если Getgems не работает?",
        },
        {
          t: "p",
          text: "Если сайт не открывается, сам подарок от этого не исчезает. Маркетплейс — это витрина для показа и торговли. Официального пояснения от Getgems не нашлось, это общая логика.",
        },
        {
          t: "p",
          text: "Ситуация зависит от того, где лежит подарок:",
        },
        {
          t: "list",
          items: [
            "<strong>Коллекционный подарок в вашем профиле Telegram.</strong> По данным Telegram, его можно сразу передать другому пользователю. Работает внешний сайт или нет — на это не влияет.",
            "<strong>Подарок, выведенный в блокчейн.</strong> Он лежит в TON-кошельке и остаётся под контролем владельца кошелька.",
          ],
        },
        {
          t: "p",
          text: "Есть исключение. Если вы выставили подарок на продажу или передали внешнему сервису, его судьба зависит от правил этого сервиса. Подробно — в статье <a href=\"/blog/sovgani-marketpleysga-otkazish-xavfsizmi-oyinchi\">безопасно ли переводить подарок на маркетплейс</a>.",
        },
        {
          t: "h2",
          id: "klanga-stars-premium-yoki-sovga",
          text: "Stars, Premium или подарок клану: можно ли без Getgems?",
        },
        {
          t: "p",
          text: "Можно. Чтобы поздравить тиммейта с победой в турнире или подарить Premium капитану сквада, внешний рынок не нужен. Сервис вроде Getgems может понадобиться только для покупки или продажи NFT-подарка за пределами Telegram.",
        },
        {
          t: "table",
          head: [
            "Задача",
            "Нужен ли Getgems",
            "Как сделать",
          ],
          rows: [
            [
              "Stars тиммейту",
              "Нет",
              `По @username; 1 звезда ${som(STARS_UNIT_CARD, "ru")} (карта или баланс) или ${som(STARS_UNIT_ONLINE, "ru")} (Click, Uzum Bank)`,
            ],
            [
              "Premium капитану сквада",
              "Нет",
              `По @username: 3 месяца ${som(premium(3), "ru")}, 6 месяцев ${som(premium(6), "ru")}, 12 месяцев ${som(premium(12), "ru")}`,
            ],
            [
              "Передать свой коллекционный подарок другу",
              "Нет",
              "Внутри Telegram, мгновенно",
            ],
            [
              "Вывести подарок в блокчейн",
              "Нет",
              "My Profile &gt; Gifts &gt; подарок &gt; Transfer &gt; Send via Blockchain",
            ],
            [
              "UC, алмазы или CP тиммейту",
              "Нет",
              "По его Player ID",
            ],
          ],
        },
        {
          t: "p",
          text: "По <a href=\"https://telegram.org/blog/wear-gifts-blockchain-and-more\" target=\"_blank\" rel=\"noopener\">описанию Telegram</a>, вывод в блокчейн позволяет подключаться к внешним сервисам вроде аукционных площадок. Для обмена подарками внутри клана этот шаг не нужен.",
        },
        {
          t: "p",
          text: "Ещё момент: Stars не превращаются в игровую валюту. Если тиммейту нужны UC, донат делается по его Player ID, а не звёздами. Нужен ли кошелёк вообще — в статье <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">нужен ли игроку Telegram Wallet</a>.",
        },
        {
          t: "h2",
          id: "xato-chiqqan-kuni-nima-qilish",
          text: "Что делать в день, когда вылезла ошибка: пять шагов",
        },
        {
          t: "steps",
          items: [
            {
              title: "Остановитесь и выдохните",
              text: "Подарок и деньги не пропадут прямо сейчас. Мошенник рассчитывает именно на вашу спешку.",
            },
            {
              title: "Найдите контакт поддержки сами",
              text: "Открывайте его с сайта самого сервиса. Не переходите по ссылкам из чатов и каналов.",
            },
            {
              title: "Проверьте аккаунт, который вам написал",
              text: "Посмотрите на username. Если просят код, пароль, секретные слова или предоплату — закрывайте переписку.",
            },
            {
              title: "Включите защиту Telegram",
              text: "Установите облачный пароль двухэтапной проверки. Убедитесь, что в списке активных сеансов нет незнакомых устройств.",
            },
            {
              title: "Не трогайте подарок",
              text: "Не переводите его на незнакомый сервис или «гарант»-боту. Без необходимости не выводите и в блокчейн.",
            },
          ],
        },
        {
          t: "p",
          text: "Типичные схемы в торговых предложениях из чатов — в статье <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">предложение купить гифт и мошенничество</a>.",
        },
        {
          t: "h2",
          id: "reklama-postidagi-vpn-bot-va",
          text: "VPN-бот из рекламного поста и «альтернативный рынок»: что учесть игроку?",
        },
        {
          t: "p",
          text: "Посты в каналах на эту тему часто устроены одинаково. Сначала рассказ об ошибке, а в конце — VPN-бот автора, бот со Stars или реферальная ссылка. Фраза «у меня через мой бот открылось» — это не проверка, а реклама.",
        },
        {
          t: "note",
          tone: "info",
          text: "Marketapp и похожие площадки не упоминаются на официальных страницах Telegram и Fragment. Их безопасность в этой статье не оценивается.",
        },
        {
          t: "p",
          text: "Незнакомый VPN-сервис может видеть, куда идёт ваш интернет-трафик. А на телефоне у вас клановый чат, банковское приложение и игровые аккаунты. Поэтому прежде чем включать VPN, подумайте, кто за ним стоит. Это общий совет.",
        },
        {
          t: "p",
          text: "Если работаете с подарками через Fragment, порядок привязки аккаунта разобран в статье <a href=\"/blog/fragment-verifikatsiyasiz-akkaunt-ulash-oyinchi\">Fragment без верификации</a>.",
        },
        {
          t: "h2",
          id: "gempayda-stars-yoki-premium-olishda",
          text: "Нужны ли VPN, IP или кошелёк, чтобы купить Stars или Premium в GemPay?",
        },
        {
          t: "p",
          text: "Нет. В GemPay не нужны иностранная карта, VPN или криптовалюта. Оплата — UzCard, HUMO, Click, Uzum Bank или с баланса бота, из России — через СБП. Visa и Mastercard не принимаются.",
        },
        {
          t: "list",
          items: [
            "<strong>Stars:</strong> нужен только @username. За один заказ — от 50 до 10 000 звёзд, они приходят за несколько секунд. Подробнее — на <a href=\"/stars\">странице Stars</a>.",
            "<strong>Premium:</strong> подключается по @username через официальный механизм подарков Telegram. Входить в аккаунт не нужно, подписка активируется за несколько секунд. Тарифа на 1 месяц нет. Тарифы — на <a href=\"/premium\">странице Premium</a>.",
            "<strong>Игровой донат:</strong> нужен только Player ID, пароль не запрашивается никогда. Ник проверяется и показывается, оплата — после подтверждения.",
          ],
        },
        {
          t: "p",
          text: "Если с заказом проблема, напишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> с номером заказа. Если заказ не выполнен, деньги полностью возвращаются в течение 3 рабочих дней. Условия — на странице <a href=\"/tolov-va-qaytarish\">оплата и возврат</a>.",
        },
        {
          t: "p",
          text: "GemPay — независимый сервис. Он не заявляет о связи с Telegram или Getgems и никогда не просит IP-адрес, коды или слова кошелька.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Collectible Gifts, Message Search Filters and More",
              href: "https://telegram.org/blog/collectible-gifts-and-more",
            },
            {
              label: "Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More",
              href: "https://telegram.org/blog/wear-gifts-blockchain-and-more",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Перед турниром написал «помощник Getgems» и просит IP. Если отправлю, мой Telegram взломают?",
          a: "Одного IP для входа в аккаунт недостаточно. Но такая просьба обычно ведёт к следующей — прислать код или слова кошелька. Если вы сами никуда не обращались, лучше сразу закончить переписку.",
        },
        {
          q: "Getgems вообще не открывается. Могу я передать коллекционный подарок из профиля соклановцу?",
          a: "Да, если подарок лежит в вашем профиле Telegram, его можно передать другому пользователю прямо в приложении. Внешний сайт для этого не нужен. А вот с подарком, выставленным на продажу, всё зависит от правил площадки.",
        },
        {
          q: "В чате «поддержка Getgems» просит 24 слова от моего кошелька. Это нормально?",
          a: "Нет, это явный признак обмана. Кто знает секретные слова, тот может распоряжаться подарками в кошельке. Ничего не отправляйте и связывайтесь с поддержкой только по ссылке с сайта сервиса.",
        },
        {
          q: "Чтобы подарить тиммейту NFT-подарок, нужно сначала вывести его в блокчейн?",
          a: "Не нужно. Внутри Telegram коллекционный подарок переходит к новому владельцу сразу. Вывод в блокчейн нужен скорее для подключения к внешним сервисам вроде аукционов.",
        },
        {
          q: "Можно ли включить VPN, когда покупаю Stars тиммейту в GemPay?",
          a: "VPN тут просто не нужен. Вы вводите @username тиммейта и платите UzCard, HUMO, Click, Uzum Bank или с баланса бота.",
        },
        {
          q: "Блокировка на Getgems может задеть мой баланс UC или алмазов?",
          a: "Такая связь нигде не подтверждена. Донат зачисляется на игровой аккаунт по Player ID, внешний NFT-рынок в этом процессе не участвует.",
        },
      ],
    },
  },
};

export default article;
