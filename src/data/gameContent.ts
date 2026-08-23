/**
 * O'yin sahifalarining O'ZIGA XOS matnlari.
 *
 * NEGA ALOHIDA FAYL: `games.ts` — texnik ma'lumot (kod, rang, ID yorlig'i),
 * bu yerda esa MATN. Ikkalasini aralashtirsak, bitta jumlani tahrirlash
 * uchun katalog tuzilishiga tegishga to'g'ri kelardi.
 *
 * NEGA HAR MAYDON QOLIPDAN EMAS, QO'LDA YOZILADI
 * -----------------------------------------------------------------------
 * Dastlab bu sahifalar bitta qolipdan yasalardi: `{game}` va `{unit}` ni
 * almashtirib, o'nta sahifa chiqarilardi. Tekshiruv shuni ko'rsatdiki, bunda
 * sahifalar orasida FAQAT o'yin nomi farq qilar edi — javob bloki, to'rt
 * qadam, «qanday paketlar bor» bo'limi va meta tavsif o'ntasida ham AYNAN
 * bir xil matn bo'lardi (uch tilda — 30 ta bir xil sahifa bo'lagi).
 *
 * Google buni «thin/duplicate content» deb baholaydi va bunday to'plamdan
 * BIRONTASINI ham yaxshi joylashtirmaydi. Bundan tashqari o'nta bir xil
 * `HowTo` sxemasi jo'natilardi — bu sxemani umuman bermaslikdan yomonroq.
 *
 * Shuning uchun quyidagi maydonlar HAR O'YINGA ALOHIDA yoziladi:
 *   · `answer`   — AEO javob bloki (LLM aynan shuni iqtibos qiladi)
 *   · `steps`    — MLBB'da Server ID, Asphalt 9'da PLATFORMA, Steam'da
 *                  login — qadamlar haqiqatan boshqacha
 *   · `packages` — paket zinapoyasi har o'yinda boshqa (narxsiz)
 *   · `meta*`    — qidiruv natijasida o'nta bir xil qator turmasin
 *
 * QOIDA: bu yerda HECH QANDAY so'm narxi yozilmaydi — narx botda jonli
 * ko'rsatiladi (`modules/gameTopup/pricing.js`).
 */

import type { Locale } from "./site";

export type GameCopy = {
  /** `<title>` — ≤60 belgi, kalit so'z oldinda */
  metaTitle: string;
  /** Meta description — 140-160 belgi */
  metaDescription: string;
  /** Sahifa H1 — pul so'rovi bilan */
  h1: string;
  /** AEO javob bloki — 40-60 so'z, shu o'yinga xos tafsilot bilan boshlanadi */
  answer: string;
  /** Kirish — ikki xatboshi */
  intro: string[];
  /** Valyuta nimaga sarflanadi (shu o'yindagi haqiqiy tizim nomlari) */
  spendOn: string[];
  /** «Qanday paketlar bor» — paket zinapoyasi, NARXSIZ */
  packages: string[];
  /** To'ldirish qadamlari — shu o'yin oqimiga moslangan */
  steps: { title: string; text: string }[];
  /** ID ni topish — shu o'yin interfeysiga xos aniq yo'l */
  idSteps: string[];
  /** Aynan shu o'yinda pul yoki vaqt yo'qotadigan xato */
  gotcha?: { title: string; text: string };
  /** Sahifaga xos savol-javob — umumiy FAQ bilan takrorlanmaydi */
  faq: { q: string; a: string }[];
};

/** `slug` → til → matn. */
export type GameContentMap = Record<string, Partial<Record<Locale, GameCopy>>>;

export const GAME_CONTENT: GameContentMap = {
  "asphalt-9": {
    "uz": {
      "answer": "Asphalt 9'da ikkinchi maydon server emas, platforma: Android, iOS yoki Windows - har birida alohida profil va alohida token hamyoni. Botda Player ID va platformani kiritasiz, bot nikni tekin ko'rsatadi, siz tasdiqlaysiz, so'ngra Token paketini tanlab so'mda to'laysiz. Parol yoki SMS kod so'ralmaydi. Tokenlar taxminan 5 daqiqada o'sha platformadagi profilga tushadi.",
      "faq": [
        {
          "q": "Konsolda - PlayStation yoki Switch'da o'ynayman, token olsam bo'ladimi?",
          "a": "Botdagi ro'yxat Android, iOS va Windows bilan cheklangan. Konsol profillari alohida yuritiladi va Player ID bo'yicha to'ldirilmaydi, shuning uchun konsolda o'ynasangiz xaridni o'sha konsolning do'konidan qilishga to'g'ri keladi."
        },
        {
          "q": "Do'stimga sovg'a qilmoqchiman, uning Player ID'si yetadimi?",
          "a": "Ha. Botga do'stingizning Player ID'sini va uning platformasini kiriting, bot nikni chiqaradi - tasdiqlashdan oldin nik to'g'riligini o'zidan so'rab oling. Do'stingizdan parol, SMS kod yoki akkaunt kerak emas, faqat ochiq ID va to'g'ri platforma."
        },
        {
          "q": "Xbox'da o'ynayman, Windows variantini tanlaymanmi?",
          "a": "Microsoft Store hisobi Xbox va Windows PC uchun umumiy, shu sababli Windows varianti shu profilga ishlaydi. Ikkilansangiz, ID'ni kiritib nik chiqqanini tekshiring yoki to'lovdan oldin @StarsPaymeeSupport'ga yozing."
        },
        {
          "q": "Akkauntni Gameloft yoki Facebook'ga bog'lamaganman, shunda ham to'ldirsa bo'ladimi?",
          "a": "Player ID bo'lsa, token o'sha profilga tushadi. Lekin bog'lanmagan profil qurilmaga bog'liq qoladi: o'yinni qayta o'rnatsangiz yoki telefonni almashtirsangiz, progress bilan birga tokenlar ham qaytmasligi mumkin. To'lashdan oldin akkauntni bog'lab qo'ygan ma'qul."
        },
        {
          "q": "Tokenni o'yin ichida kreditga almashtirsa bo'ladimi?",
          "a": "Ha, o'yin do'konida token evaziga kredit olish bandi bor. Almashuv nisbatini Gameloft belgilaydi va u o'yin ichida ko'rsatiladi. GemPay faqat tokenni yetkazadi, kreditga aylantirish sizning qo'lingizda qoladi."
        },
        {
          "q": "Grand Prix yoki boshqa muddatli event uchun tokenni qachon olganim ma'qul?",
          "a": "Event tugashiga kamida bir necha soat qoldirib buyurtma bering. Yetkazish odatda 5 daqiqa atrofida, lekin bank tasdig'i yoki provayder navbati uzayishi mumkin. Oxirgi daqiqada to'lash - eventni o'tkazib yuborishning odatiy sababi."
        }
      ],
      "gotcha": {
        "title": "Ikkinchi maydon server emas, platforma",
        "text": "Pul yo'qotadigan xato - platformani noto'g'ri tanlash. 2024-yilgi Unite yangilanishidan keyin progress bulut orqali ko'chadi, lekin xarid hamyoni platformaga bog'liq qoladi: Microsoft Store'dagi token telefonga o'tmaydi. Boshqa platformaga tushgan token qaytarilmaydi, shuning uchun to'lovdan oldin tanlovni tekshiring."
      },
      "h1": "Asphalt 9 (Asphalt Legends) tokenlarini sotib olish",
      "idSteps": [
        "Hangar ekranida chap yuqoridagi avatar rasmini bosing - profil oynasi ochiladi.",
        "Profile bo'limida nik ostida Player ID turadi, ustiga bossangiz nusxa olinadi.",
        "Muqobil yo'l: Menu, keyin Settings, keyin About - Gameloft Player ID shu yerda.",
        "ID'ni botga qo'ying va o'zingiz o'ynaydigan platformani alohida maydonda belgilang."
      ],
      "intro": [
        "Token - Asphalt 9'ning premium valyutasi. Kredit poygalarda o'z-o'zidan yig'iladi, token esa deyarli yig'ilmaydi: u Card Pack va Featured Car Pack ochishga, Legend Store'dagi blueprint'larni yopishga, kutish taymerini o'tkazib yuborishga ketadi. Shuning uchun uni ko'pincha S-Class mashinani yig'ayotgan yoki Grand Prix'ni muddatida tugatmoqchi bo'lgan o'yinchilar oladi.",
        "Rasmiy yo'l - Google Play, App Store yoki Microsoft Store - chet el kartasini talab qiladi, UzCard va HUMO u yerda o'tmaydi. Chet el saytlari esa ko'pincha akkauntga kirishni so'raydi va bu xavfli. GemPay'da to'lov so'mda, UzCard, HUMO, Click, Payme yoki Paynet bilan ketadi, sizdan faqat ochiq Player ID va platforma so'raladi."
      ],
      "metaDescription": "Asphalt 9 (Asphalt Legends) tokenlarini so'mda to'ldiring: Player ID va platforma - Android, iOS yoki Windows. Parol so'ralmaydi, token 5 daqiqada.",
      "metaTitle": "Asphalt 9 token sotib olish: ID va platforma | GemPay",
      "packages": [
        "Asphalt 9'da paketlar \"Token Pack 3 (220 tokens)\" ko'rinishida nomlanadi: qavs ichidagi son aynan nechta token tushishini bildiradi, oldidagi raqam esa shunchaki pog'ona nomeri.",
        "Zinapoya odatda 40, 105, 220, 470, 1275 va 3000 token atrofida bo'ladi, lekin ro'yxat va hajmlar provayder tomonidan yangilanib turadi.",
        "Joriy narx botda ko'rsatiladi."
      ],
      "spendOn": [
        "Card Pack va Relay Pack ochish",
        "Legend Store'da yetishmayotgan blueprint'larni sotib olish",
        "Featured Car Pack orqali S-Class va event mashinalari",
        "Mashinani yangilash uchun kredit sotib olish",
        "Kartochka paketi kutish taymerini o'tkazib yuborish"
      ],
      "steps": [
        {
          "title": "Botni oching va Asphalt 9'ni tanlang",
          "text": "@Gempayuz_bot'ni Telegram'da oching va katalogdan Asphalt 9'ni toping. O'yin do'konlarda Asphalt Legends nomi bilan ham turadi - bu o'sha o'yinning yangi nomi, alohida versiya emas."
        },
        {
          "title": "Player ID'ni kiriting",
          "text": "Profil oynasidagi Player ID'ni nusxalab botga qo'ying. Bu ochiq raqam va uni ko'rsatish akkauntga kirish huquqini bermaydi. Parol, SMS kod yoki Gameloft logini hech qachon so'ralmaydi."
        },
        {
          "title": "Platformani belgilang",
          "text": "Ikkinchi maydon server emas, platforma: Android, iOS yoki Windows. O'zingiz o'ynaydigan qurilmani tanlang - har platformada alohida profil va alohida token hamyoni yuritiladi."
        },
        {
          "title": "Nikni tekshiring",
          "text": "Bot ID bo'yicha profilni so'rab, nikni ekranga chiqaradi. Bu bosqich tekin va to'lovsiz. Nik o'zingizniki bo'lsa tasdiqlang, begona nom chiqsa - ID yoki platforma noto'g'ri."
        },
        {
          "title": "Paketni tanlab so'mda to'lang",
          "text": "Token paketini tanlang va UzCard, HUMO, Click, Payme yoki Paynet orqali so'mda to'lang. Joriy narx botda ko'rsatiladi. Tokenlar taxminan 5 daqiqada tanlangan platformadagi profilga tushadi."
        }
      ]
    },
    "ru": {
      "metaTitle": "Asphalt 9: покупка токенов по ID и платформе | GemPay",
      "metaDescription": "Токены Asphalt 9 (Asphalt Legends) в сумах: нужны Player ID и платформа — Android, iOS или Windows. Пароль не спрашиваем, токены приходят за 5 минут.",
      "h1": "Покупка токенов Asphalt 9 (Asphalt Legends)",
      "answer": "В Asphalt 9 второе поле — не сервер, а платформа: Android, iOS или Windows, и у каждой свой профиль и свой кошелёк токенов. В боте вы вводите Player ID и платформу, бот бесплатно показывает ник, вы подтверждаете, затем выбираете пакет Token и платите в сумах. Пароль или SMS-код не запрашиваются. Токены приходят примерно за 5 минут на профиль выбранной платформы.",
      "intro": [
        "Token — премиальная валюта Asphalt 9. Кредиты копятся в гонках сами собой, а токены почти не выпадают: они уходят на вскрытие Card Pack и Featured Car Pack, на закрытие blueprint'ов в Legend Store и на пропуск таймеров ожидания. Поэтому их чаще берут те, кто собирает машину класса S или хочет закрыть Grand Prix в срок.",
        "Официальный путь — Google Play, App Store или Microsoft Store — требует зарубежную карту, UzCard и HUMO там не проходят. А зарубежные сайты часто просят вход в аккаунт, и это опасно. В GemPay оплата идёт в сумах через UzCard, HUMO, Click, Payme или Paynet, а у вас спрашивают только открытый Player ID и платформу."
      ],
      "spendOn": [
        "Вскрытие Card Pack и Relay Pack",
        "Покупка недостающих blueprint'ов в Legend Store",
        "Машины класса S и ивентовые через Featured Car Pack",
        "Покупка кредитов на прокачку машины",
        "Пропуск таймера ожидания карточного пакета"
      ],
      "packages": [
        "В Asphalt 9 пакеты названы в виде «Token Pack 3 (220 tokens)»: число в скобках — это сколько токенов придёт, а цифра перед ним просто номер ступени.",
        "Лесенка обычно держится около 40, 105, 220, 470, 1275 и 3000 токенов, но список и объёмы провайдер время от времени обновляет.",
        "Текущая цена показывается в боте."
      ],
      "steps": [
        {
          "title": "Откройте бот и выберите Asphalt 9",
          "text": "Откройте @Gempayuz_bot в Telegram и найдите Asphalt 9 в каталоге. В магазинах игра стоит и под названием Asphalt Legends — это новое имя той же игры, а не отдельная версия."
        },
        {
          "title": "Введите Player ID",
          "text": "Скопируйте Player ID из окна профиля и вставьте в бот. Это открытый номер, и его показ не даёт доступа к аккаунту. Пароль, SMS-код или логин Gameloft не запрашиваются никогда."
        },
        {
          "title": "Укажите платформу",
          "text": "Второе поле — не сервер, а платформа: Android, iOS или Windows. Выберите то устройство, на котором играете: на каждой платформе ведётся отдельный профиль и отдельный кошелёк токенов."
        },
        {
          "title": "Проверьте ник",
          "text": "Бот запрашивает профиль по ID и выводит ник на экран. Этот шаг бесплатный, без оплаты. Ник ваш — подтверждайте; появилось чужое имя — значит, неверны ID или платформа."
        },
        {
          "title": "Выберите пакет и оплатите в сумах",
          "text": "Выберите пакет Token и оплатите в сумах через UzCard, HUMO, Click, Payme или Paynet. Текущая цена показывается в боте. Токены приходят примерно за 5 минут на профиль выбранной платформы."
        }
      ],
      "idSteps": [
        "На экране Hangar нажмите на аватар в левом верхнем углу — откроется окно профиля.",
        "В разделе Profile под ником стоит Player ID, по нажатию он копируется.",
        "Другой путь: Menu, затем Settings, затем About — Gameloft Player ID там.",
        "Вставьте ID в бот и в отдельном поле укажите платформу, на которой играете."
      ],
      "gotcha": {
        "title": "Второе поле — не сервер, а платформа",
        "text": "Ошибка, на которой теряют деньги, — неверно выбранная платформа. После обновления Unite 2024 года прогресс переносится через облако, но кошелёк покупок остаётся привязан к платформе: токены из Microsoft Store на телефон не перейдут. Токены, ушедшие на другую платформу, не возвращаются, поэтому проверьте выбор до оплаты."
      },
      "faq": [
        {
          "q": "Я играю на консоли, на PlayStation или Switch. Можно взять токены?",
          "a": "Список в боте ограничен Android, iOS и Windows. Консольные профили ведутся отдельно и по Player ID не пополняются, поэтому при игре на консоли покупку придётся делать в магазине самой консоли."
        },
        {
          "q": "Хочу подарить другу, хватит его Player ID?",
          "a": "Да. Введите в бот Player ID друга и его платформу, бот выведет ник — до подтверждения уточните у самого друга, что ник верный. Пароль, SMS-код или доступ к аккаунту от него не нужны, только открытый ID и правильная платформа."
        },
        {
          "q": "Я играю на Xbox, выбирать вариант Windows?",
          "a": "Аккаунт Microsoft Store общий для Xbox и Windows PC, поэтому вариант Windows работает с этим профилем. Если сомневаетесь, введите ID и посмотрите, появился ли ник, либо напишите в @StarsPaymeeSupport до оплаты."
        },
        {
          "q": "Аккаунт не привязан к Gameloft или Facebook, пополнение всё равно пройдёт?",
          "a": "Если есть Player ID, токены придут на этот профиль. Но непривязанный профиль остаётся завязан на устройство: переустановите игру или смените телефон — вместе с прогрессом могут не вернуться и токены. Перед оплатой лучше привязать аккаунт."
        },
        {
          "q": "Токены можно обменять на кредиты внутри игры?",
          "a": "Да, в игровом магазине есть позиция обмена токенов на кредиты. Курс обмена задаёт Gameloft, и он показывается внутри игры. GemPay только доставляет токены, а превращать их в кредиты остаётся вам."
        },
        {
          "q": "Когда лучше брать токены под Grand Prix или другой ограниченный по времени ивент?",
          "a": "Оформляйте заказ минимум за несколько часов до конца ивента. Доставка обычно занимает около 5 минут, но подтверждение банка или очередь у провайдера могут затянуться. Оплата в последнюю минуту — обычная причина пропущенного ивента."
        }
      ]
    },
    "en": {
      "metaTitle": "Asphalt 9 tokens: Player ID and platform | GemPay",
      "metaDescription": "Top up Asphalt 9 (Asphalt Legends) tokens in so'm: Player ID and platform - Android, iOS or Windows. No password asked, tokens arrive in about 5 minutes.",
      "h1": "Buying Asphalt 9 (Asphalt Legends) tokens",
      "answer": "In Asphalt 9 the second field is not a server but a platform: Android, iOS or Windows, each with its own profile and its own token wallet. In the bot you enter the Player ID and the platform, the bot shows the nickname for free, you confirm, then pick a Token pack and pay in so'm. No password or SMS code is requested. Tokens arrive in about 5 minutes on the profile of the chosen platform.",
      "intro": [
        "Tokens are the premium currency in Asphalt 9. Credits pile up on their own from racing, tokens barely do: they go on opening Card Packs and Featured Car Packs, on closing blueprints in the Legend Store, and on skipping wait timers. That is why they are usually bought by players assembling an S-Class car or trying to finish a Grand Prix in time.",
        "The official route - Google Play, App Store or Microsoft Store - needs a foreign card, and UzCard or HUMO will not go through there. Foreign sites, meanwhile, often ask you to log into the account, which is risky. With GemPay the payment goes in so'm through UzCard, HUMO, Click, Payme or Paynet, and all you are asked for is the public Player ID and the platform."
      ],
      "spendOn": [
        "Opening Card Packs and Relay Packs",
        "Buying the blueprints you are missing in the Legend Store",
        "S-Class and event cars through the Featured Car Pack",
        "Buying credits to upgrade a car",
        "Skipping the card pack wait timer"
      ],
      "packages": [
        "In Asphalt 9 the packs are named in the form \"Token Pack 3 (220 tokens)\": the number in brackets is how many tokens actually arrive, while the figure in front of it is just the step number.",
        "The ladder usually sits around 40, 105, 220, 470, 1275 and 3000 tokens, but the list and the amounts are refreshed by the provider from time to time.",
        "The current price is shown in the bot."
      ],
      "steps": [
        {
          "title": "Open the bot and pick Asphalt 9",
          "text": "Open @Gempayuz_bot in Telegram and find Asphalt 9 in the catalogue. In the stores the game also appears as Asphalt Legends - that is the new name of the same game, not a separate version."
        },
        {
          "title": "Enter the Player ID",
          "text": "Copy the Player ID from the profile window and paste it into the bot. It is a public number, and showing it gives nobody access to the account. A password, SMS code or Gameloft login is never requested."
        },
        {
          "title": "Set the platform",
          "text": "The second field is not a server but a platform: Android, iOS or Windows. Choose the device you actually play on - each platform keeps a separate profile and a separate token wallet."
        },
        {
          "title": "Check the nickname",
          "text": "The bot requests the profile by ID and puts the nickname on screen. This step is free and involves no payment. If the nickname is yours, confirm it; if a stranger's name appears, the ID or the platform is wrong."
        },
        {
          "title": "Pick a pack and pay in so'm",
          "text": "Choose a Token pack and pay in so'm with UzCard, HUMO, Click, Payme or Paynet. The current price is shown in the bot. Tokens arrive in about 5 minutes on the profile of the chosen platform."
        }
      ],
      "idSteps": [
        "On the Hangar screen, tap the avatar picture in the top left and the profile window opens.",
        "In the Profile section the Player ID sits under the nickname; tap it to copy the number.",
        "Another way: Menu, then Settings, then About - the Gameloft Player ID is there.",
        "Paste the ID into the bot and set the platform you play on in the separate field."
      ],
      "gotcha": {
        "title": "The second field is a platform, not a server",
        "text": "The mistake that costs money is picking the wrong platform. Since the 2024 Unite update progress carries over through the cloud, but the purchase wallet stays tied to the platform: tokens from the Microsoft Store do not cross over to a phone. Tokens delivered to another platform are not returned, so check your choice before you pay."
      },
      "faq": [
        {
          "q": "I play on console, on PlayStation or Switch. Can I buy tokens?",
          "a": "The list in the bot is limited to Android, iOS and Windows. Console profiles are kept separately and are not topped up by Player ID, so if you play on console you will have to buy through that console's own store."
        },
        {
          "q": "I want to gift a friend, is their Player ID enough?",
          "a": "Yes. Enter your friend's Player ID and their platform in the bot, and the bot shows the nickname - before confirming, check with them that the nickname is right. You need no password, SMS code or account access from them, only the public ID and the correct platform."
        },
        {
          "q": "I play on Xbox, should I choose the Windows option?",
          "a": "A Microsoft Store account is shared between Xbox and Windows PC, so the Windows option works with that profile. If you are unsure, enter the ID and see whether the nickname appears, or write to @StarsPaymeeSupport before paying."
        },
        {
          "q": "My account is not linked to Gameloft or Facebook, will the top-up still work?",
          "a": "If there is a Player ID, the tokens land on that profile. But an unlinked profile stays tied to the device: reinstall the game or change the phone and the tokens may not come back along with the progress. It is better to link the account before you pay."
        },
        {
          "q": "Can tokens be exchanged for credits inside the game?",
          "a": "Yes, the in-game store has an option to exchange tokens for credits. The exchange rate is set by Gameloft and is shown inside the game. GemPay only delivers the tokens; turning them into credits is left to you."
        },
        {
          "q": "When is it best to buy tokens for a Grand Prix or another timed event?",
          "a": "Place the order at least a few hours before the event ends. Delivery usually takes about 5 minutes, but a bank confirmation or a queue at the provider can drag on. Paying at the last minute is the usual reason for missing an event."
        }
      ]
    }
  },
  "bigo-live": {
    "uz": {
      "answer": "Bigo Live - o'yin emas: olmos efir xonasidagi sovg'alarga sarflanadi, strimer esa sovg'adan bin (beans) oladi, bu butunlay boshqa birlik. GemPay botida Me bo'limidagi Bigo ID ni kiritasiz, tizim nikneymni bepul ko'rsatadi, siz tasdiqlaysiz, so'mda UzCard yoki Payme bilan to'laysiz - olmos taxminan 3 daqiqada tushadi.",
      "faq": [
        {
          "q": "Strimer men yuborgan sovg'ani darhol ko'radimi?",
          "a": "Ha, sovg'a efir xonasida animatsiya bo'lib chiqadi va chatda kimdan kelgani ko'rinadi. Shu sababli olmosni efir boshlanishidan oldin olib qo'ygan ma'qul - to'ldirish o'rtacha 3 daqiqada yakunlanadi."
        },
        {
          "q": "Bitta paketni bir nechta strimerga bo'lib sarflasam bo'ladimi?",
          "a": "Ha. Olmos akkaunt hamyonida balans bo'lib turadi va biror strimerga bog'lanmaydi. Qaysi xonada qancha sarflashni o'zingiz hal qilasiz, qoldig'i keyingi efirlargacha saqlanadi."
        },
        {
          "q": "PK jang tugashiga oz qolgan bo'lsa, ulgurishning yo'li bormi?",
          "a": "To'ldirish o'rtacha 3 daqiqa oladi, PK esa qisqa bo'lishi mumkin. Agar jangni kuzatayotgan bo'lsangiz, hisob teng kelgan paytda emas, jang boshlanishidan oldin olmos olib qo'ying."
        },
        {
          "q": "Strimerman - o'zimga olmos olishning ma'nosi bormi?",
          "a": "Bor. Strimerlar ham boshqa xonalarga sovg'a yuboradi, PK jangdagi sherigini qo'llaydi va tadbirlarda qatnashadi. Ammo hisobingizdagi olmos daromadga aylanmaydi: daromad tomoshabinlar yuborgan sovg'alardan kelgan bin (beans) dan hisoblanadi."
        },
        {
          "q": "Bigo ID ni o'zgartirgan bo'lsam, botga qaysi raqamni kiritaman?",
          "a": "Hozir Me bo'limida turgan amaldagi raqamni. Eski raqam boshqa profilga tegishli bo'lib qolishi mumkin, shuning uchun nikneym tekshiruvida chiqqan nomga qarang: nom sizniki bo'lsa, ID to'g'ri."
        },
        {
          "q": "Telefondagi balans veb-versiyada ham ko'rinadimi?",
          "a": "Ha, olmos qurilmaga emas, akkauntga bog'langan. Bir xil Bigo hisobiga kirsangiz, balans ham, sarflash tarixi ham bir xil ko'rinadi."
        }
      ],
      "gotcha": {
        "title": "Strimerning ID siga to'ldirish - bu sovg'a emas",
        "text": "Ko'pchilik sevimli strimerini xursand qilmoqchi bo'lib, uning Bigo ID siga olmos to'ldiradi. Bunda strimer sovg'a emas, olmos oladi: bunday olmos bin (beans) ga aylanmaydi va yechib olinmaydi. Sovg'a bo'lishi uchun olmosni o'z hisobingizga oling, so'ng efir xonasidan yuboring."
      },
      "h1": "Bigo Live olmos to'ldirish: Bigo ID orqali, so'mda",
      "idSteps": [
        "Bigo Live ilovasini oching va pastdagi menyudan Me bo'limiga o'ting.",
        "Nikneymingiz ostida turgan 7-10 xonali raqamni toping - bu Bigo ID.",
        "Muqobil yo'l: Settings, so'ng Account bo'limi, u yerda User ID sifatida turadi.",
        "Raqamni bosib nusxa oling va botga @ belgisisiz, faqat raqamlar bilan kiriting."
      ],
      "intro": [
        "Olmos - Bigo Live ichidagi sotib olinadigan birlik: u efir xonasidagi sovg'a do'konidan strimerga animatsion sovg'a yuborish uchun ishlatiladi. Uni ikki toifa oladi - efirni kuzatib, yoqqan strimerni qo'llab-quvvatlovchi tomoshabinlar va strimerlarning o'zi: PK jangdagi sherigini, ko'p mehmonli xonadagi tanishini yoki boshqa efirni sovg'a bilan qo'llash uchun. Olmos akkaunt hamyonida turadi va faqat siz sarflaganingizda kamayadi.",
        "Rasmiy yo'l O'zbekistondagi kartaga moslashmagan: rasmiy to'ldirish sahifasi Bigo ID bilan kirishni so'raydi va to'lov usuli sifatida SBP, MIR kartasi hamda Bigo Card ni ko'rsatadi - so'm ham, UzCard ham u yerda yo'q. GemPay shu bo'shliqni yopadi: hisob-kitob so'mda ketadi, UzCard, HUMO, Click, Payme va Paynet ishlaydi, olmos esa o'sha akkauntning o'ziga tushadi."
      ],
      "metaDescription": "Bigo Live olmosini Bigo ID orqali so'mda oling: bot Me bo'limidagi ID bo'yicha nikneymni bepul ko'rsatadi, UzCard, HUMO, Click va Payme qabul qilinadi.",
      "metaTitle": "Bigo Live olmos sotib olish - so'mda, 3 daqiqada | GemPay",
      "packages": [
        "Olmos paketlari bir necha o'nlik olmosdan boshlanib, minglik va o'n minglik pog'onalargacha ko'tariladi - odatda kichik, o'rta va yirik guruhlarga bo'linadi.",
        "Paketni sovg'a rejasiga qarab tanlash qulay: bir nechta arzon animatsiya uchun quyi pog'ona yetadi, katta effektli sovg'a esa yirik paketni talab qiladi, yirik pog'onalarda ba'zan bonus olmos qo'shiladi.",
        "Joriy paketlar ro'yxati va narx botda ko'rsatiladi."
      ],
      "spendOn": [
        "Efir xonasidagi sovg'a do'konidan animatsion sovg'a yuborish",
        "PK jangda qo'llab-quvvatlayotgan tomoningizga sovg'a bilan ball qo'shish",
        "Ko'p mehmonli xonada aynan bitta mehmonni tanlab sovg'alash",
        "Ilova ichidagi VIP maqomi va maxsus tadbirlarda qatnashish"
      ],
      "steps": [
        {
          "title": "Botdagi ro'yxatdan Bigo Live ni tanlang",
          "text": "@Gempayuz_bot ni oching va Mini App ichidagi ro'yxatdan Bigo Live ni toping. Bu bo'lim o'yinlar bilan bir qatorda turadi, ammo server yoki platforma tanlash maydoni yo'q - Bigo hisobi yagona."
        },
        {
          "title": "Bigo ID raqamini kiriting",
          "text": "Me bo'limidagi 7-10 xonali raqamni yozing. Nikneym, profil havolasi yoki @ belgili nom bu yerga to'g'ri kelmaydi: tizim faqat raqam bo'yicha qidiradi."
        },
        {
          "title": "Nikneym tekshiruvidan o'ting",
          "text": "Bot ID ga bog'langan profil nomini so'rab oladi va ekranda ko'rsatadi. Bu bosqich bepul, hisobdan hech narsa yechilmaydi. Nom olmos tushishi kerak bo'lgan hisobniki ekaniga ishonch hosil qilib, tasdiqlang."
        },
        {
          "title": "Olmos paketini tanlang",
          "text": "Paketlar olmos soni bo'yicha tartiblangan. Qaysi sovg'ani yubormoqchi ekaningizga qarab tanlang: kichik animatsiyalar kam olmos oladi, katta effektli sovg'alar esa sezilarli ko'p. Narx botda ko'rsatiladi."
        },
        {
          "title": "So'mda to'lang va Wallet bo'limini tekshiring",
          "text": "UzCard, HUMO, Click, Payme yoki Paynet bilan to'laysiz. Olmos odatda 3 daqiqada tushadi, balansni Me, so'ng Wallet bo'limida ko'rasiz. Ilova ochiq turgan bo'lsa, uni yopib qayta oching."
        }
      ]
    },
    "ru": {
      "metaTitle": "Bigo Live: покупка алмазов в сумах за 3 минуты | GemPay",
      "metaDescription": "Алмазы Bigo Live по Bigo ID в сумах: бот бесплатно покажет никнейм по ID из раздела Me, оплата UzCard, HUMO, Click и Payme, зачисление за 3 минуты.",
      "h1": "Пополнение алмазов Bigo Live: по Bigo ID, в сумах",
      "answer": "Bigo Live - не игра: алмазы тратятся на подарки в эфирной комнате, а стример получает за подарок бины (beans), совсем другую единицу. В боте GemPay вы вводите Bigo ID из раздела Me, система бесплатно показывает никнейм, вы подтверждаете, платите в сумах через UzCard или Payme - алмазы приходят примерно за 3 минуты.",
      "intro": [
        "Алмазы - покупаемая внутренняя единица Bigo Live: ими из магазина подарков в эфирной комнате отправляют стримеру анимированный подарок. Покупают их две категории - зрители, которые смотрят эфир и поддерживают понравившегося стримера, и сами стримеры: чтобы поддержать подарком напарника в PK-битве, знакомого в комнате с несколькими гостями или чужой эфир. Алмазы лежат в кошельке аккаунта и уменьшаются только тогда, когда вы их тратите.",
        "Официальный путь не рассчитан на карту из Узбекистана: официальная страница пополнения просит вход по Bigo ID и предлагает в качестве способов оплаты SBP, карту MIR и Bigo Card - ни сумов, ни UzCard там нет. GemPay закрывает этот пробел: расчет идет в сумах, работают UzCard, HUMO, Click, Payme и Paynet, а алмазы приходят на тот же самый аккаунт."
      ],
      "spendOn": [
        "Отправка анимированного подарка из магазина подарков в эфирной комнате",
        "Добавление очков подарком той стороне, которую вы поддерживаете в PK-битве",
        "Подарок конкретному гостю в комнате с несколькими гостями",
        "VIP-статус внутри приложения и участие в специальных ивентах"
      ],
      "packages": [
        "Пакеты алмазов начинаются с нескольких десятков алмазов и поднимаются до тысячных и десятитысячных ступеней - обычно они разделены на малую, среднюю и крупную группы.",
        "Пакет удобно подбирать под план подарков: для нескольких недорогих анимаций хватает нижней ступени, а подарок с большим эффектом требует крупного пакета, на верхних ступенях иногда добавляются бонусные алмазы.",
        "Актуальный список пакетов и цена показываются в боте."
      ],
      "steps": [
        {
          "title": "Выберите Bigo Live в списке бота",
          "text": "Откройте @Gempayuz_bot и найдите Bigo Live в списке внутри Mini App. Этот раздел стоит в одном ряду с играми, но поля выбора сервера или платформы здесь нет - аккаунт Bigo единый."
        },
        {
          "title": "Введите номер Bigo ID",
          "text": "Напишите 7-10-значный номер из раздела Me. Никнейм, ссылка на профиль или имя со знаком @ сюда не подходят: система ищет только по номеру."
        },
        {
          "title": "Пройдите проверку никнейма",
          "text": "Бот запрашивает имя профиля, привязанного к ID, и показывает его на экране. Этот шаг бесплатный, с карты ничего не списывается. Убедитесь, что имя принадлежит тому аккаунту, куда должны прийти алмазы, и подтвердите."
        },
        {
          "title": "Выберите пакет алмазов",
          "text": "Пакеты отсортированы по количеству алмазов. Выбирайте по тому, какой подарок собираетесь отправить: небольшие анимации берут мало алмазов, а подарки с большим эффектом заметно больше. Цена показывается в боте."
        },
        {
          "title": "Оплатите в сумах и проверьте раздел Wallet",
          "text": "Оплата идет через UzCard, HUMO, Click, Payme или Paynet. Алмазы обычно приходят за 3 минуты, баланс видно в разделе Me, затем Wallet. Если приложение было открыто, закройте его и откройте заново."
        }
      ],
      "idSteps": [
        "Откройте приложение Bigo Live и перейдите в раздел Me в нижнем меню.",
        "Найдите 7-10-значный номер под вашим никнеймом - это и есть Bigo ID.",
        "Второй путь: Settings, затем раздел Account, там он указан как User ID.",
        "Скопируйте номер нажатием и введите в бот без знака @, только цифрами."
      ],
      "gotcha": {
        "title": "Пополнение на ID стримера - это не подарок",
        "text": "Многие хотят порадовать любимого стримера и пополняют алмазы прямо на его Bigo ID. В этом случае стример получает не подарок, а алмазы: такие алмазы не превращаются в бины (beans) и не выводятся. Чтобы это стало подарком, купите алмазы на свой аккаунт и отправьте их из эфирной комнаты."
      },
      "faq": [
        {
          "q": "Увидит ли стример мой подарок сразу?",
          "a": "Да, подарок выходит в эфирной комнате анимацией, и в чате видно, от кого он. Поэтому алмазы лучше взять до начала эфира - пополнение в среднем завершается за 3 минуты."
        },
        {
          "q": "Можно ли разделить один пакет между несколькими стримерами?",
          "a": "Да. Алмазы лежат балансом в кошельке аккаунта и не привязаны ни к одному стримеру. Сколько и в какой комнате потратить, решаете вы сами, а остаток сохраняется до следующих эфиров."
        },
        {
          "q": "Если до конца PK-битвы осталось мало времени, можно ли успеть?",
          "a": "Пополнение занимает в среднем 3 минуты, а PK может быть коротким. Если вы следите за битвой, берите алмазы до ее начала, а не в момент, когда счет сравнялся."
        },
        {
          "q": "Я стример - есть ли смысл покупать алмазы себе?",
          "a": "Есть. Стримеры тоже отправляют подарки в другие комнаты, поддерживают напарника в PK-битве и участвуют в ивентах. Но алмазы на вашем счете не превращаются в доход: доход считается из бинов (beans), которые приходят с подарков от зрителей."
        },
        {
          "q": "Если я менял Bigo ID, какой номер вводить в бот?",
          "a": "Тот, который сейчас стоит в разделе Me. Старый номер может уже принадлежать другому профилю, поэтому смотрите на имя, которое вышло при проверке никнейма: если имя ваше, ID верный."
        },
        {
          "q": "Виден ли баланс с телефона в веб-версии?",
          "a": "Да, алмазы привязаны к аккаунту, а не к устройству. Если вы входите в один и тот же аккаунт Bigo, баланс и история трат выглядят одинаково."
        }
      ]
    },
    "en": {
      "metaTitle": "Buy Bigo Live diamonds in so'm, 3 minutes | GemPay",
      "metaDescription": "Get Bigo Live diamonds by Bigo ID in so'm: the bot shows the nickname from your Me tab ID for free, and UzCard, HUMO, Click and Payme are accepted.",
      "h1": "Bigo Live diamond top-up: by Bigo ID, in so'm",
      "answer": "Bigo Live is not a game: diamonds are spent on gifts in a live room, and the streamer receives beans for a gift, which is a completely different unit. In the GemPay bot you enter the Bigo ID from the Me tab, the system shows the nickname for free, you confirm, and you pay in so'm with UzCard or Payme - diamonds arrive in about 3 minutes.",
      "intro": [
        "Diamonds are the purchasable in-app unit of Bigo Live: they are used to send a streamer an animated gift from the gift shop inside a live room. Two groups buy them - viewers who watch a broadcast and support a streamer they like, and streamers themselves: to back a partner in a PK battle, a friend in a multi-guest room or someone else's broadcast with a gift. Diamonds sit in the account wallet and go down only when you spend them.",
        "The official route is not built for a card from Uzbekistan: the official top-up page asks you to sign in with a Bigo ID and lists SBP, a MIR card and Bigo Card as payment methods - there is no so'm and no UzCard there. GemPay closes that gap: the settlement runs in so'm, UzCard, HUMO, Click, Payme and Paynet all work, and the diamonds land on that same account."
      ],
      "spendOn": [
        "Sending an animated gift from the gift shop in a live room",
        "Adding points with a gift to the side you support in a PK battle",
        "Gifting one specific guest in a multi-guest room",
        "In-app VIP status and taking part in special events"
      ],
      "packages": [
        "Diamond packs start at a few dozen diamonds and climb to the thousand and ten-thousand tiers - they are usually split into small, medium and large groups.",
        "It is easiest to pick a pack around your gifting plan: a lower tier is enough for several cheap animations, while a gift with a big effect needs a large pack, and the top tiers sometimes add bonus diamonds.",
        "The current pack list and the price are shown in the bot."
      ],
      "steps": [
        {
          "title": "Pick Bigo Live from the list in the bot",
          "text": "Open @Gempayuz_bot and find Bigo Live in the list inside the Mini App. This section sits alongside the games, but there is no server or platform field here - a Bigo account is single."
        },
        {
          "title": "Enter the Bigo ID number",
          "text": "Type the 7-10 digit number from the Me tab. A nickname, a profile link or a name with an @ does not fit here: the system searches by number only."
        },
        {
          "title": "Go through the nickname check",
          "text": "The bot requests the profile name linked to the ID and shows it on screen. This step is free, nothing is charged. Make sure the name belongs to the account the diamonds should land on, then confirm."
        },
        {
          "title": "Choose a diamond pack",
          "text": "Packs are sorted by diamond count. Choose based on the gift you plan to send: small animations take few diamonds, while gifts with a big effect take noticeably more. The price is shown in the bot."
        },
        {
          "title": "Pay in so'm and check the Wallet tab",
          "text": "You pay with UzCard, HUMO, Click, Payme or Paynet. Diamonds usually arrive in 3 minutes, and you see the balance under Me, then Wallet. If the app was open, close it and open it again."
        }
      ],
      "idSteps": [
        "Open the Bigo Live app and go to the Me tab in the bottom menu.",
        "Find the 7-10 digit number under your nickname - that is the Bigo ID.",
        "Alternative route: Settings, then the Account section, where it is listed as User ID.",
        "Tap the number to copy it and enter it in the bot without the @, digits only."
      ],
      "gotcha": {
        "title": "Topping up the streamer's ID is not a gift",
        "text": "Many people want to make their favorite streamer happy and top diamonds up straight to their Bigo ID. In that case the streamer gets diamonds, not a gift: those diamonds do not turn into beans and cannot be withdrawn. For it to count as a gift, buy the diamonds on your own account and send them from the live room."
      },
      "faq": [
        {
          "q": "Does the streamer see my gift right away?",
          "a": "Yes, the gift plays as an animation in the live room and the chat shows who it came from. That is why it is better to get the diamonds before the broadcast starts - a top-up finishes in about 3 minutes on average."
        },
        {
          "q": "Can I split one pack between several streamers?",
          "a": "Yes. Diamonds sit as a balance in the account wallet and are not tied to any streamer. You decide how much to spend in which room, and the remainder stays there until the next broadcasts."
        },
        {
          "q": "If a PK battle is almost over, is there a way to make it in time?",
          "a": "A top-up takes about 3 minutes on average, and a PK can be short. If you are following a battle, get the diamonds before it starts rather than at the moment the score levels out."
        },
        {
          "q": "I am a streamer - does it make sense to buy diamonds for myself?",
          "a": "It does. Streamers also send gifts to other rooms, back a partner in a PK battle and take part in events. But diamonds on your account do not turn into income: income is counted from the beans that come in from gifts sent by viewers."
        },
        {
          "q": "If I changed my Bigo ID, which number do I enter in the bot?",
          "a": "The current one shown in the Me tab. An old number may already belong to another profile, so look at the name that comes up in the nickname check: if the name is yours, the ID is right."
        },
        {
          "q": "Is the balance from my phone visible in the web version?",
          "a": "Yes, diamonds are tied to the account, not to the device. If you sign in to the same Bigo account, both the balance and the spending history look the same."
        }
      ]
    }
  },
  "call-of-duty-mobile": {
    "uz": {
      "metaTitle": "Call of Duty Mobile CP sotib olish (Garena) | GemPay",
      "metaDescription": "Garena SG/MY Player ID bo'yicha Call of Duty: Mobile CP to'ldirish: nickname bepul tekshiriladi, so'mda UzCard, Humo, Click yoki Payme, CP 3 daqiqada.",
      "h1": "Call of Duty: Mobile CP to'ldirish — Garena ID bo'yicha, so'mda",
      "answer": "GemPay Call of Duty: Mobile ning Garena SG/MY versiyasini to'ldiradi; Global (Activision) akkauntlar bu yerda ishlamaydi. Botda o'yinni tanlab, Sozlamalardagi Player ID ni kiritasiz, tizim nickname ni bepul ko'rsatadi. Tasdiqlagandan keyin CP paketini UzCard yoki Humo bilan so'mda to'laysiz, CP taxminan 3 daqiqada tushadi. Parol so'ralmaydi.",
      "intro": [
        "CP (COD Points) — Call of Duty: Mobile ning premium valyutasi. Kredit bilan olinadigan oddiy narsalardan farqli o'laroq, CP do'konning jiddiy qismiga ketadi: Battle Pass va Battle Pass Plus, Lucky Draw va Mythic Drop tirajlari, legendar qurol chizmalari. Ko'pchilik o'yinchi CP ni mavsum boshida oladi, chunki Battle Pass ham aynan CP evaziga ochiladi.",
        "O'zbekistondan rasmiy yo'l ko'pincha yopiq: Garena to'lov sahifalari mintaqaviy kartalarni kutadi, Google Play va App Store balansi esa chet el kartasi yoki gift karta talab qiladi. GemPay da CP to'g'ridan-to'g'ri Player ID ga yoziladi, to'lov esa UzCard, Humo, Click, Payme yoki Paynet orqali so'mda o'tadi — valyuta konvertatsiyasi ham, chet el kartasi ham kerak emas."
      ],
      "spendOn": [
        "Battle Pass va Battle Pass Plus ni ochish",
        "Lucky Draw va Mythic Drop tirajlaridagi mifik qurollar",
        "Do'kondagi legendar qurol chizmalari (blueprint)",
        "Operator skinlari va mavsumiy Epic to'plamlar",
        "Battle Pass darajalarini oldindan ochish (tier skip)",
        "Cheklangan vaqtli event va crate to'plamlari"
      ],
      "packages": [
        "Garena SG/MY dagi CP zinapoyasi Global dagi yumaloq raqamlardan farq qiladi: odatda 114 CP dan boshlanadi, keyin 230, 460, 690, 1150, 2300 va undan yuqori pog'onalar keladi.",
        "Katta pog'onalarda asosiy miqdorga bonus CP qo'shib beriladi, shuning uchun bitta yirik paket bir nechta kichigidan ko'ra ko'proq CP chiqaradi; pog'onalar ro'yxati provayder tomonidan yangilanib turadi, uni doimiy deb hisoblamang.",
        "Joriy narxlar botda ko'rsatiladi."
      ],
      "steps": [
        {
          "title": "Garena versiyasini tasdiqlang",
          "text": "Botda Call of Duty: Mobile (Garena) ni tanlang. Telefoningizdagi ilova aynan Garena qurilishi bo'lishi kerak: Global (Activision) akkauntga bu yerdan CP yozib bo'lmaydi, chunki ular alohida serverlarda ishlaydi."
        },
        {
          "title": "Player ID ni kiriting",
          "text": "O'yin ichidagi Sozlamalar > User Settings dan raqamli Player ID ni oling va botdagi maydonga qo'ying. CODM Garena da server yoki platforma tanlash maydoni yo'q, faqat shu raqam so'raladi."
        },
        {
          "title": "Nickname ni tekshiring",
          "text": "Bot ID ni o'yin serveriga yuboradi va nickname ni ekranga chiqaradi. Tekshiruv bepul, bu bosqichda hech narsa yechilmaydi; nickname begona bo'lsa, raqamni qaytadan kiriting."
        },
        {
          "title": "CP paketini tanlab so'mda to'lang",
          "text": "Kerakli CP pog'onasini belgilang va UzCard, Humo, Click, Payme yoki Paynet orqali to'lang. Narx botda ko'rsatiladi va tasdiqlashdan oldin ekranda turadi."
        },
        {
          "title": "CP ni o'yinda ko'ring",
          "text": "CP taxminan 3 daqiqada tushadi. Balans darrov yangilanmasa, o'yindan chiqib qayta kiring; Battle Pass yoki Lucky Draw ni keyin shu CP bilan olasiz."
        }
      ],
      "idSteps": [
        "Call of Duty: Mobile (Garena) ni oching va asosiy ekranga o'ting.",
        "O'ng yuqori burchakdagi tishli g'ildirak — Settings tugmasini bosing.",
        "Settings oynasida User Settings (foydalanuvchi sozlamalari) bo'limini tanlang.",
        "Pastda, Legal and Privacy yozuvi yonida Player ID raqami turadi.",
        "Raqamni to'liq nusxalab, botdagi maydonga bo'sh joysiz qo'ying va nickname ni tekshiring."
      ],
      "gotcha": {
        "title": "Global ilovada o'ynab, Garena ID ga to'ldirish",
        "text": "Buyurtmalar ko'pincha shu sababdan yo'qqa chiqadi: o'yinchi Global (Activision) ilovasida o'ynaydi, ID ni esa Garena to'ldirishiga beradi. Ikki versiya alohida serverda ishlaydi, CP biridan ikkinchisiga o'tmaydi, akkauntni ko'chirishga urinish esa blok bilan tugashi mumkin. To'lovdan oldin ilova nomida Garena borligini tekshiring."
      },
      "faq": [
        {
          "q": "Player ID bilan nickname bir xil narsami?",
          "a": "Yo'q. Player ID — Sozlamalarda turadigan o'zgarmas raqam, nickname esa siz almashtira oladigan nom va u boshqa o'yinchilarda takrorlanishi mumkin. Botga faqat raqamni kiritasiz, nickname ni tizim o'zi topib beradi."
        },
        {
          "q": "Do'stimning yoki ukamning ID siga CP to'ldirsam bo'ladimi?",
          "a": "Ha. Faqat ochiq Player ID kerak, login yoki qurilmaga kirish talab qilinmaydi. Nickname ekranda chiqqanda, u haqiqatan o'sha odamning akkaunti ekanini tasdiqlab oling."
        },
        {
          "q": "PC yoki emulyatorda o'ynayman, ID boshqami?",
          "a": "Player ID akkauntga bog'langan, qurilmaga emas. Telefonda va PC da bir xil akkaunt (Garena, Facebook yoki Google) bilan kirsangiz, ID ham bir xil bo'ladi va CP o'sha balansga tushadi."
        },
        {
          "q": "CP tushdi, Battle Pass o'zi ochiladimi?",
          "a": "Yo'q. GemPay CP yetkazadi, Battle Pass va Battle Pass Plus ni esa o'yin ichidagi do'kondan shu CP evaziga o'zingiz olasiz. Lucky Draw va crate lar ham xuddi shu tartibda ishlaydi."
        },
        {
          "q": "Paketdagi bonus CP alohida tushadimi?",
          "a": "Bonus CP ni Garena paketning o'ziga biriktiradi va u umumiy balansga qo'shilib tushadi, alohida qatorda ko'rinmaydi. Ayrim bonuslar aksiya davrida yoki birinchi xaridda amal qiladi, shuning uchun ularni doimiy deb hisoblamang."
        },
        {
          "q": "Mavsum tugashiga oz qolganda CP olsam, u yonib ketadimi?",
          "a": "CP balansda muddatsiz qoladi va keyingi mavsumga o'tadi. Yonib ketadigani — Battle Pass darajalari: mavsum yakuniga bir necha kun qolganda pass olsangiz, uni to'liq yopishga ulgurmasligingiz mumkin."
        }
      ]
    },
    "ru": {
      "metaTitle": "Покупка CP в Call of Duty Mobile (Garena) | GemPay",
      "metaDescription": "Пополнение CP в Call of Duty: Mobile по Player ID Garena SG/MY: ник проверяется бесплатно, оплата в сумах через UzCard, Humo, Click или Payme, CP за 3 минуты.",
      "h1": "Пополнение CP в Call of Duty: Mobile — по Garena ID, в сумах",
      "answer": "GemPay пополняет версию Call of Duty: Mobile от Garena SG/MY; аккаунты Global (Activision) здесь не работают. В боте выбираете игру и вводите Player ID из Настроек, система бесплатно показывает ник. После подтверждения оплачиваете пакет CP картой UzCard или Humo в сумах, CP приходит примерно за 3 минуты. Пароль не запрашивается.",
      "intro": [
        "CP (COD Points) — премиальная валюта Call of Duty: Mobile. В отличие от обычных вещей за кредиты, CP уходит на серьёзную часть магазина: Battle Pass и Battle Pass Plus, розыгрыши Lucky Draw и Mythic Drop, легендарные чертежи оружия. Большинство игроков берёт CP в начале сезона, потому что и сам Battle Pass открывается именно за CP.",
        "Из Узбекистана официальный путь часто закрыт: платёжные страницы Garena ждут региональные карты, а баланс Google Play и App Store требует зарубежной карты или гифт-карты. В GemPay CP зачисляется прямо на Player ID, а оплата проходит в сумах через UzCard, Humo, Click, Payme или Paynet — ни конвертации валюты, ни зарубежной карты не нужно."
      ],
      "spendOn": [
        "Открытие Battle Pass и Battle Pass Plus",
        "Мифическое оружие в розыгрышах Lucky Draw и Mythic Drop",
        "Легендарные чертежи оружия (blueprint) в магазине",
        "Скины операторов и сезонные Epic-наборы",
        "Досрочное открытие уровней Battle Pass (tier skip)",
        "Ивенты с ограниченным временем и наборы ящиков (crate)"
      ],
      "packages": [
        "Лестница CP в Garena SG/MY отличается от круглых чисел Global: обычно она начинается со 114 CP, дальше идут ступени 230, 460, 690, 1150, 2300 и выше.",
        "На крупных ступенях к основному объёму добавляют бонусные CP, поэтому один большой пакет даёт больше CP, чем несколько мелких; список ступеней обновляется провайдером, не считайте его постоянным.",
        "Текущие цены показываются в боте."
      ],
      "steps": [
        {
          "title": "Подтвердите версию Garena",
          "text": "В боте выберите Call of Duty: Mobile (Garena). Приложение на телефоне должно быть именно сборкой Garena: на аккаунт Global (Activision) отсюда CP зачислить нельзя, они работают на отдельных серверах."
        },
        {
          "title": "Введите Player ID",
          "text": "Возьмите цифровой Player ID в игре: Настройки > User Settings — и вставьте его в поле в боте. В CODM Garena нет поля выбора сервера или платформы, спрашивается только этот номер."
        },
        {
          "title": "Проверьте ник",
          "text": "Бот отправляет ID на игровой сервер и выводит ник на экран. Проверка бесплатная, на этом шаге ничего не списывается; если ник чужой, введите номер заново."
        },
        {
          "title": "Выберите пакет CP и оплатите в сумах",
          "text": "Отметьте нужную ступень CP и оплатите через UzCard, Humo, Click, Payme или Paynet. Цена показывается в боте и остаётся на экране до подтверждения."
        },
        {
          "title": "Заберите CP в игре",
          "text": "CP приходит примерно за 3 минуты. Если баланс не обновился сразу, выйдите из игры и зайдите снова; Battle Pass или Lucky Draw потом берёте за эти CP."
        }
      ],
      "idSteps": [
        "Откройте Call of Duty: Mobile (Garena) и перейдите на главный экран.",
        "Нажмите шестерёнку в правом верхнем углу — кнопку Settings.",
        "В окне Settings выберите раздел User Settings (пользовательские настройки).",
        "Внизу, рядом с надписью Legal and Privacy, стоит номер Player ID.",
        "Скопируйте номер полностью и вставьте в поле бота без пробелов, затем проверьте ник."
      ],
      "gotcha": {
        "title": "Играть в Global, а пополнять Garena ID",
        "text": "Заказы чаще всего срываются именно из-за этого: игрок играет в приложении Global (Activision), а ID отдаёт на пополнение Garena. Две версии работают на разных серверах, CP не переходит из одной в другую, а попытка перенести аккаунт может закончиться блокировкой. Перед оплатой проверьте, что в названии приложения есть Garena."
      },
      "faq": [
        {
          "q": "Player ID и ник — это одно и то же?",
          "a": "Нет. Player ID — неизменный номер, который лежит в Настройках, а ник — имя, которое вы можете сменить, и оно может повторяться у других игроков. В бот вы вводите только номер, ник система находит сама."
        },
        {
          "q": "Можно пополнить ID друга или младшего брата?",
          "a": "Да. Нужен только открытый Player ID, логин или доступ к устройству не требуется. Когда ник появится на экране, убедитесь, что это действительно аккаунт того человека."
        },
        {
          "q": "Играю на ПК или эмуляторе, ID другой?",
          "a": "Player ID привязан к аккаунту, а не к устройству. Если на телефоне и на ПК вы заходите под одним аккаунтом (Garena, Facebook или Google), ID будет тем же и CP придёт на этот баланс."
        },
        {
          "q": "CP пришли, Battle Pass откроется сам?",
          "a": "Нет. GemPay доставляет CP, а Battle Pass и Battle Pass Plus вы берёте сами во внутриигровом магазине за эти CP. Lucky Draw и ящики работают так же."
        },
        {
          "q": "Бонусные CP из пакета приходят отдельно?",
          "a": "Бонусные CP Garena привязывает к самому пакету, и они приходят общей суммой на баланс, отдельной строкой не видны. Часть бонусов действует только в период акции или при первой покупке, поэтому не считайте их постоянными."
        },
        {
          "q": "Если взять CP под конец сезона, они сгорят?",
          "a": "CP остаётся на балансе бессрочно и переходит в следующий сезон. Сгорают уровни Battle Pass: если взять пасс за несколько дней до конца сезона, вы можете не успеть закрыть его полностью."
        }
      ]
    },
    "en": {
      "metaTitle": "Buy Call of Duty Mobile CP (Garena) | GemPay",
      "metaDescription": "Top up Call of Duty: Mobile CP by Garena SG/MY Player ID: nickname checked free, pay in so'm with UzCard, Humo, Click or Payme, CP in 3 minutes.",
      "h1": "Call of Duty: Mobile CP top-up — by Garena ID, in so'm",
      "answer": "GemPay tops up the Garena SG/MY version of Call of Duty: Mobile; Global (Activision) accounts do not work here. You pick the game in the bot and enter the Player ID from Settings, and the system shows the nickname for free. After you confirm, you pay for the CP pack with UzCard or Humo in so'm, and CP arrives in about 3 minutes. No password is requested.",
      "intro": [
        "CP (COD Points) is the premium currency of Call of Duty: Mobile. Unlike the ordinary items you buy with Credits, CP goes to the serious part of the store: Battle Pass and Battle Pass Plus, Lucky Draw and Mythic Drop pulls, legendary weapon blueprints. Most players buy CP at the start of a season, because the Battle Pass itself is unlocked with CP.",
        "From Uzbekistan the official route is often closed: Garena payment pages expect regional cards, while Google Play and App Store balance needs a foreign card or a gift card. With GemPay, CP is written straight to the Player ID and the payment goes through UzCard, Humo, Click, Payme or Paynet in so'm — no currency conversion and no foreign card."
      ],
      "spendOn": [
        "Unlocking Battle Pass and Battle Pass Plus",
        "Mythic weapons from Lucky Draw and Mythic Drop pulls",
        "Legendary weapon blueprints in the store",
        "Operator skins and seasonal Epic bundles",
        "Unlocking Battle Pass tiers early (tier skip)",
        "Limited-time events and crate bundles"
      ],
      "packages": [
        "The CP ladder on Garena SG/MY differs from the round numbers on Global: it usually starts at 114 CP, then 230, 460, 690, 1150, 2300 and higher tiers follow.",
        "Larger tiers add bonus CP on top of the base amount, so one big pack yields more CP than several small ones; the list of tiers is refreshed by the provider, so do not treat it as fixed.",
        "Current prices are shown in the bot."
      ],
      "steps": [
        {
          "title": "Confirm the Garena version",
          "text": "Pick Call of Duty: Mobile (Garena) in the bot. The app on your phone has to be the Garena build: CP cannot be sent to a Global (Activision) account from here, because they run on separate servers."
        },
        {
          "title": "Enter the Player ID",
          "text": "Take the numeric Player ID from in-game Settings > User Settings and paste it into the field in the bot. CODM Garena has no server or platform selector, only this number is asked for."
        },
        {
          "title": "Check the nickname",
          "text": "The bot sends the ID to the game server and shows the nickname on screen. The check is free and nothing is charged at this stage; if the nickname belongs to someone else, enter the number again."
        },
        {
          "title": "Pick a CP pack and pay in so'm",
          "text": "Select the CP tier you need and pay with UzCard, Humo, Click, Payme or Paynet. The price is shown in the bot and stays on screen before you confirm."
        },
        {
          "title": "See the CP in game",
          "text": "CP arrives in about 3 minutes. If the balance does not refresh right away, close the game and open it again; you then buy the Battle Pass or Lucky Draw with that CP."
        }
      ],
      "idSteps": [
        "Open Call of Duty: Mobile (Garena) and go to the main screen.",
        "Tap the gear icon in the top right corner — the Settings button.",
        "In the Settings window, choose the User Settings section.",
        "At the bottom, next to the Legal and Privacy line, sits the Player ID number.",
        "Copy the number in full, paste it into the bot field with no spaces, and check the nickname."
      ],
      "gotcha": {
        "title": "Playing on Global, topping up a Garena ID",
        "text": "This is the most common reason an order falls through: the player uses the Global (Activision) app but hands the ID to a Garena top-up. The two versions run on separate servers, CP does not move from one to the other, and trying to migrate the account can end in a ban. Before paying, check that the app name says Garena."
      },
      "faq": [
        {
          "q": "Are the Player ID and the nickname the same thing?",
          "a": "No. The Player ID is a fixed number that sits in Settings, while the nickname is a name you can change and it may be shared by other players. You only enter the number in the bot, and the system finds the nickname itself."
        },
        {
          "q": "Can I top up a friend's or my brother's ID?",
          "a": "Yes. Only the public Player ID is needed, with no login and no access to the device. When the nickname appears on screen, confirm that it really is that person's account."
        },
        {
          "q": "I play on PC or an emulator, is the ID different?",
          "a": "The Player ID is tied to the account, not the device. If you sign in on the phone and on PC with the same account (Garena, Facebook or Google), the ID is the same and CP lands on that balance."
        },
        {
          "q": "CP has arrived, does the Battle Pass unlock on its own?",
          "a": "No. GemPay delivers the CP, and you buy the Battle Pass and Battle Pass Plus yourself in the in-game store with that CP. Lucky Draw and crates work the same way."
        },
        {
          "q": "Does the bonus CP in a pack arrive separately?",
          "a": "Garena attaches bonus CP to the pack itself and it lands as part of the total balance, not as a separate line. Some bonuses apply only during a promo or on a first purchase, so do not treat them as permanent."
        },
        {
          "q": "If I buy CP near the end of a season, does it expire?",
          "a": "CP stays on the balance with no expiry and carries into the next season. What expires is Battle Pass tiers: if you buy the pass a few days before the season ends, you may not have time to finish it."
        }
      ]
    }
  },
  "delta-force": {
    "uz": {
      "answer": "O'zbekistondagi o'yinchilar Delta Force'ning Global (Level Infinite) versiyasida o'ynaydi, Garena hududida emas, shuning uchun bu yerda server tanlash yo'q: GemPay botiga faqat Player ID kiritiladi. Bot o'yin serveridan niknemni bepul chiqaradi, siz tasdiqlagach so'mda to'laysiz va Delta Coins taxminan 5 daqiqada tushadi. Karta sifatida UzCard, HUMO, Click, Payme ishlaydi.",
      "faq": [
        {
          "q": "Bot ko'rsatgan niknem men bilgan niknemdan boshqa. Nima qilay?",
          "a": "Buyurtmani tasdiqlamang. Niknem o'yin serveridan keladi, ya'ni ekranda turgan nom aynan siz kiritgan ID egasiniki. Boshqa nom chiqdi degani raqamda xato bor: ID ni profildan qayta nusxa oling va yana urinib ko'ring."
        },
        {
          "q": "Battle Pass ni to'g'ridan-to'g'ri olsa bo'ladimi, yoki avval Delta Coins kerakmi?",
          "a": "Botda Delta Coins paketlari va Battle Pass alohida bandlar sifatida turadi. Battle Pass ro'yxatda bo'lsa, uni to'g'ridan-to'g'ri olasiz; bo'lmasa coin olib, o'yin ichidagi Battle Pass ekranidan ochasiz. Joriy ro'yxat botda ko'rinadi."
        },
        {
          "q": "Bonus coin asosiy paket bilan birga keladimi?",
          "a": "Ha, bonus paketning bir qismi va alohida buyurtma emas, u asosiy miqdor bilan birga bitta yetkazishda hisobga yoziladi. Qaysi paketda qancha bonus borligi botdagi paket tavsifida yozib qo'yiladi."
        },
        {
          "q": "Mavsum tugashiga oz qolgan, hozir Battle Pass olish mantiqlimi?",
          "a": "Battle Pass darajalari o'sha mavsum ichida ochiladi, mavsum yopilgach ochilmagan darajalar qolib ketadi. Bir necha kun qolgan bo'lsa, coin ni olib qo'yib, yangi mavsum boshida Battle Pass ni ochish qulayroq. Mavsum sanalari o'yin ichidagi Battle Pass ekranida turadi."
        },
        {
          "q": "Konsolda o'ynayman, Player ID orqali to'ldirish ishlaydimi?",
          "a": "Delta Force konsolda 2025-yildan bor va akkaunt bitta Level Infinite profiliga bog'lanadi, ya'ni Player ID o'zgarmaydi. Botga o'sha raqamni kiriting: niknem chiqsa, to'ldirish shu akkauntga ketadi. Niknem chiqmasa yoki boshqa nom ko'rsatilsa, to'lamang va @StarsPaymeeSupport ga yozing."
        },
        {
          "q": "GemPay Level Infinite yoki Team Jade ning rasmiy hamkorimi?",
          "a": "Yo'q. GemPay mustaqil to'ldirish xizmati, nashriyot bilan rasmiy hamkorligi yo'q. U provayder katalogi orqali Player ID bo'yicha Delta Coins yetkazadi; parol, SMS kod yoki akkauntga kirish hech qachon so'ralmaydi."
        }
      ],
      "gotcha": {
        "text": "Delta Force'ning Garena hududidagi versiyasi, ya'ni SEA, Turkiya, MENA va LATAM, alohida o'yin hisoblanadi va uning ID'si Global akkaunt bilan mos kelmaydi. O'zbekistondagi o'yinchilar Global versiyada. Bot ID ni topmasa, avval qaysi versiyada ekaningizni tekshiring, noto'g'ri versiya uchun buyurtma bermang.",
        "title": "Garena versiyasi Global bilan bir xil emas"
      },
      "h1": "Delta Force uchun Delta Coins to'ldirish: Player ID bo'yicha, so'mda",
      "idSteps": [
        "Mobilda bosh ekranning o'ng pastidagi avatar belgisini bosing, profil kartochkasi ochiladi.",
        "Niknem ostidagi ID raqamini yonidagi nusxa olish tugmasi bilan ko'chirib oling.",
        "PC'da lobbidagi profil sahifasini oching, UID bir bosishda nusxalanadi.",
        "Raqam 11 xonali va odatda 10000 bilan boshlanadi, niknem emas aynan shu kerak.",
        "PC va mobilda bitta akkauntning ID'si bir xil, birini ko'chirsangiz kifoya."
      ],
      "intro": [
        "Delta Coins Delta Force'dagi pulli valyuta. Delta Ticket o'ynab yig'iladi, Delta Coins esa yig'ilmaydi, uni faqat sotib olish mumkin. Shuning uchun uni Havoc Warfare va Operations rejimlarida o'tirib qoladigan, mavsum boshida Battle Pass ochib qo'yadigan va operator hamda qurol ko'rinishlarini yig'adigan o'yinchilar oladi. O'yin 2024-yil oxirida PC'da, 2025-yilning aprelida mobilda chiqqan, shuning uchun o'zbek auditoriyasi hali yangi.",
        "Rasmiy yo'l, ya'ni Midasbuy yoki o'yin ichidagi do'kon, xalqaro kassa orqali ishlaydi va odatda Visa, Mastercard yoki PayPal so'raydi. UzCard bilan HUMO esa faqat O'zbekiston ichida va faqat so'mda ishlaydi. Steam orqali olganda ham to'lov xatosi va LIPASS akkaunti noto'g'ri Steam profiliga bog'lanib qolgan holatlar uchraydi. GemPay'da to'lov mahalliy kartada, so'mda ketadi va Delta Coins Player ID'ga yoziladi."
      ],
      "metaDescription": "Delta Force Global akkauntiga Delta Coins: Player ID ni kiriting, bot niknemni bepul chiqaradi, so'mda to'laysiz. UzCard, HUMO, Click, Payme. ~5 daqiqada.",
      "metaTitle": "Delta Force to'ldirish: Delta Coins so'mda | GemPay",
      "packages": [
        "Delta Coins bosqichli qator bilan sotiladi, odatda 60, 300, 680, 1280, 3280 va undan yuqori paketlar, kattalariga ustiga bonus coin qo'shiladi.",
        "Bonus ulushi paket kattalashgani sari ortadi, shuning uchun bitta yirik paket bir nechta maydasidan ko'proq coin berishi mumkin; Battle Pass botda alohida band sifatida turadi.",
        "Qatorning aniq ro'yxati va joriy narx botda ko'rsatiladi."
      ],
      "spendOn": [
        "Battle Pass: mavsumning Base va Deluxe darajalari",
        "Operatorlarni ochish va ularning ko'rinishlari",
        "Qurol skinlari hamda aksessuar to'plamlari",
        "Delta Coins ni Delta Ticket ga aylantirish",
        "Do'kondagi mavsumiy va cheklangan muddatli to'plamlar"
      ],
      "steps": [
        {
          "text": "Telegram'da @Gempayuz_bot ni oching va katalogdan Delta Force'ni tanlang. Ro'yxatda Delta Coins paketlari va Battle Pass chiqadi.",
          "title": "Botni oching va Delta Force'ni tanlang"
        },
        {
          "text": "Faqat bitta maydon bor, u ham bo'lsa Player ID. Bu 11 xonali raqam, odatda 10000 bilan boshlanadi. Server yoki platforma tanlash so'ralmaydi, chunki O'zbekistondagi akkauntlar Global versiyada; Garena hududidagi akkaunt bu yerga to'g'ri kelmaydi.",
          "title": "Player ID ni kiriting, server maydoni yo'q"
        },
        {
          "text": "Bot ID ni o'yin serveridan so'raydi va akkaunt niknemini ko'rsatadi. Bu bosqich pulsiz: niknem sizniki bo'lsa tasdiqlaysiz, bo'lmasa buyurtmani bekor qilasiz. Tasdiqlamaguningizcha hisobdan hech narsa yechilmaydi.",
          "title": "Niknemni bepul tekshiring"
        },
        {
          "text": "Delta Coins zinapoyasidan kerakli bandni yoki Battle Pass ni belgilang. To'lov so'mda ketadi: UzCard, HUMO, Click, Payme, Paynet. Joriy narx to'lovdan oldin ekranda turadi.",
          "title": "Paketni tanlang va so'mda to'lang"
        },
        {
          "text": "Yetkazish odatda 5 daqiqada tugaydi. O'yinni qayta ishga tushirsangiz yoki do'kon ekranini yangilasangiz, yangi balans ko'rinadi. Kechikish bo'lsa @StarsPaymeeSupport ga yozing.",
          "title": "Coin tushishini kuting"
        }
      ]
    },
    "ru": {
      "metaTitle": "Delta Force: пополнение Delta Coins в сумах | GemPay",
      "metaDescription": "Delta Coins для Delta Force Global: введите Player ID, бот бесплатно покажет ник, оплата в сумах. UzCard, HUMO, Click, Payme. Зачисление ~5 минут.",
      "h1": "Пополнение Delta Coins в Delta Force: по Player ID, в сумах",
      "answer": "Игроки из Узбекистана играют в глобальную версию Delta Force (Level Infinite), а не в регионе Garena, поэтому выбора сервера здесь нет: в бот GemPay вводится только Player ID. Бот бесплатно подтягивает ник с игрового сервера, после вашего подтверждения вы платите в сумах, и Delta Coins приходят примерно за 5 минут. Из карт работают UzCard, HUMO, Click, Payme.",
      "intro": [
        "Delta Coins — платная валюта Delta Force. Delta Ticket копится игрой, а Delta Coins не выпадают: их можно только купить. Поэтому их берут те, кто подолгу сидит в режимах Havoc Warfare и Operations, открывает Battle Pass в начале сезона и собирает облики операторов и оружия. Игра вышла на PC в конце 2024 года, на мобильных — в апреле 2025-го, так что узбекская аудитория здесь ещё новая.",
        "Официальный путь — Midasbuy или внутриигровой магазин — идёт через международную кассу и обычно просит Visa, Mastercard или PayPal. UzCard и HUMO работают только внутри Узбекистана и только в сумах. При покупке через Steam тоже встречаются ошибки оплаты и случаи, когда аккаунт LIPASS оказался привязан не к тому профилю Steam. В GemPay оплата идёт местной картой, в сумах, а Delta Coins зачисляются на Player ID."
      ],
      "spendOn": [
        "Battle Pass: уровни Base и Deluxe текущего сезона",
        "Открытие операторов и их облики",
        "Скины оружия и наборы аксессуаров",
        "Обмен Delta Coins на Delta Ticket",
        "Сезонные и лимитированные наборы в магазине"
      ],
      "packages": [
        "Delta Coins продаются лесенкой пакетов: обычно 60, 300, 680, 1280, 3280 и выше, к крупным сверху добавляются бонусные coin.",
        "Доля бонуса растёт вместе с размером пакета, поэтому один крупный пакет может дать больше coin, чем несколько мелких; Battle Pass стоит в боте отдельной позицией.",
        "Точный список лесенки и текущая цена показываются в боте."
      ],
      "steps": [
        {
          "title": "Откройте бот и выберите Delta Force",
          "text": "Откройте @Gempayuz_bot в Telegram и выберите Delta Force в каталоге. В списке появятся пакеты Delta Coins и Battle Pass."
        },
        {
          "title": "Введите Player ID, поля сервера нет",
          "text": "Поле здесь одно — Player ID. Это 11-значный номер, обычно начинается с 10000. Выбирать сервер или платформу не нужно: аккаунты из Узбекистана на глобальной версии, а аккаунт из региона Garena сюда не подходит."
        },
        {
          "title": "Проверьте ник бесплатно",
          "text": "Бот запрашивает ID на игровом сервере и показывает ник аккаунта. Этот шаг бесплатный: ник ваш — подтверждаете, чужой — отменяете заказ. Пока вы не подтвердили, с карты ничего не списывается."
        },
        {
          "title": "Выберите пакет и оплатите в сумах",
          "text": "Отметьте нужную позицию в лесенке Delta Coins или Battle Pass. Оплата идёт в сумах: UzCard, HUMO, Click, Payme, Paynet. Текущая цена видна на экране до оплаты."
        },
        {
          "title": "Дождитесь зачисления coin",
          "text": "Доставка обычно укладывается в 5 минут. Перезапустите игру или обновите экран магазина — увидите новый баланс. Если есть задержка, напишите в @StarsPaymeeSupport."
        }
      ],
      "idSteps": [
        "На мобильном нажмите значок аватара в правом нижнем углу главного экрана — откроется карточка профиля.",
        "Номер ID под ником скопируйте кнопкой копирования рядом с ним.",
        "На PC откройте страницу профиля в лобби: UID копируется одним нажатием.",
        "Номер 11-значный и обычно начинается с 10000, нужен именно он, а не ник.",
        "На PC и на мобильном у одного аккаунта ID одинаковый, достаточно скопировать в любом из них."
      ],
      "gotcha": {
        "title": "Версия Garena — это не Global",
        "text": "Версия Delta Force в регионе Garena, то есть SEA, Турция, MENA и LATAM, считается отдельной игрой, и её ID не совпадает с аккаунтом Global. Игроки из Узбекистана находятся на глобальной версии. Если бот не находит ID, сначала проверьте, на какой версии вы играете, и не оформляйте заказ для неверной версии."
      },
      "faq": [
        {
          "q": "Бот показал не тот ник, который я знаю. Что делать?",
          "a": "Не подтверждайте заказ. Ник приходит с игрового сервера, то есть имя на экране принадлежит владельцу именно того ID, который вы ввели. Другое имя означает ошибку в номере: скопируйте ID из профиля заново и попробуйте ещё раз."
        },
        {
          "q": "Можно взять Battle Pass напрямую или сначала нужны Delta Coins?",
          "a": "В боте пакеты Delta Coins и Battle Pass стоят отдельными позициями. Если Battle Pass есть в списке, берёте его напрямую; если нет — берёте coin и открываете Battle Pass на его экране в игре. Актуальный список виден в боте."
        },
        {
          "q": "Бонусные coin приходят вместе с основным пакетом?",
          "a": "Да, бонус — часть пакета, а не отдельный заказ: он зачисляется вместе с основным количеством одной доставкой. Сколько бонуса в каком пакете, написано в описании пакета в боте."
        },
        {
          "q": "До конца сезона осталось немного, есть ли смысл брать Battle Pass сейчас?",
          "a": "Уровни Battle Pass открываются внутри своего сезона, а после его закрытия неоткрытые уровни так и остаются закрытыми. Если осталось несколько дней, удобнее взять coin и открыть Battle Pass в начале нового сезона. Даты сезона стоят на экране Battle Pass в игре."
        },
        {
          "q": "Я играю на консоли, пополнение по Player ID работает?",
          "a": "Delta Force на консолях есть с 2025 года, и аккаунт привязан к одному профилю Level Infinite, то есть Player ID не меняется. Введите в бот этот же номер: если ник появился, пополнение уйдёт на этот аккаунт. Если ник не появился или показано чужое имя, не платите и напишите в @StarsPaymeeSupport."
        },
        {
          "q": "GemPay — официальный партнёр Level Infinite или Team Jade?",
          "a": "Нет. GemPay — независимый сервис пополнения, официального партнёрства с издателем у него нет. Он доставляет Delta Coins по Player ID через каталог провайдера; пароль, SMS-код или вход в аккаунт не запрашиваются никогда."
        }
      ]
    },
    "en": {
      "metaTitle": "Delta Force top-up: Delta Coins in so'm | GemPay",
      "metaDescription": "Delta Coins for your Delta Force Global account: enter the Player ID, the bot shows your nickname free, pay in so'm. UzCard, HUMO, Click, Payme. ~5 min.",
      "h1": "Delta Coins top-up for Delta Force: by Player ID, in so'm",
      "answer": "Players in Uzbekistan are on the Global (Level Infinite) version of Delta Force, not the Garena region, so there is no server choice here: the GemPay bot only asks for the Player ID. The bot pulls the nickname from the game server for free, you confirm, then pay in so'm, and Delta Coins arrive in about 5 minutes. UzCard, HUMO, Click and Payme all work as payment cards.",
      "intro": [
        "Delta Coins are the paid currency in Delta Force. Delta Tickets build up through play, Delta Coins do not - they can only be bought. That is why they are picked up by players who spend hours in Havoc Warfare and Operations, unlock the Battle Pass at the start of a season, and collect operator and weapon skins. The game came out on PC in late 2024 and on mobile in April 2025, so the Uzbek audience is still new to it.",
        "The official route - Midasbuy or the in-game store - runs through an international checkout and usually asks for Visa, Mastercard or PayPal. UzCard and HUMO work only inside Uzbekistan and only in so'm. Buying through Steam also brings payment errors and cases where a LIPASS account ends up linked to the wrong Steam profile. With GemPay the payment goes through a local card, in so'm, and the Delta Coins are credited to the Player ID."
      ],
      "spendOn": [
        "Battle Pass: the season's Base and Deluxe tiers",
        "Unlocking operators and their skins",
        "Weapon skins and accessory bundles",
        "Converting Delta Coins into Delta Tickets",
        "Seasonal and limited-time bundles in the store"
      ],
      "packages": [
        "Delta Coins are sold as a ladder of packs, usually 60, 300, 680, 1280, 3280 and higher, with bonus coins added on top of the larger ones.",
        "The bonus share grows as the pack gets bigger, so one large pack can give more coins than several small ones; the Battle Pass sits in the bot as a separate item.",
        "The exact ladder and the current price are shown in the bot."
      ],
      "steps": [
        {
          "title": "Open the bot and pick Delta Force",
          "text": "Open @Gempayuz_bot in Telegram and choose Delta Force from the catalogue. The list shows Delta Coins packs and the Battle Pass."
        },
        {
          "title": "Enter the Player ID, there is no server field",
          "text": "There is only one field here, and it is the Player ID: an 11-digit number that usually starts with 10000. You are not asked to pick a server or a platform, because accounts in Uzbekistan are on the Global version; a Garena-region account does not belong here."
        },
        {
          "title": "Check the nickname for free",
          "text": "The bot queries the ID on the game server and shows the account nickname. This step costs nothing: if the nickname is yours, you confirm; if it is not, you cancel the order. Nothing is charged until you confirm."
        },
        {
          "title": "Pick a pack and pay in so'm",
          "text": "Mark the item you need on the Delta Coins ladder, or the Battle Pass. Payment goes in so'm: UzCard, HUMO, Click, Payme, Paynet. The current price is on screen before you pay."
        },
        {
          "title": "Wait for the coins to land",
          "text": "Delivery usually finishes within 5 minutes. Restart the game or refresh the store screen and the new balance appears. If it is late, write to @StarsPaymeeSupport."
        }
      ],
      "idSteps": [
        "On mobile, tap the avatar icon in the bottom right of the home screen and the profile card opens.",
        "Copy the ID number under the nickname with the copy button next to it.",
        "On PC, open the profile page in the lobby; the UID copies in one click.",
        "The number is 11 digits and usually starts with 10000 - that is what you need, not the nickname.",
        "One account has the same ID on PC and mobile, so copying it in either place is enough."
      ],
      "gotcha": {
        "title": "The Garena version is not the same as Global",
        "text": "The Garena-region version of Delta Force, that is SEA, Turkey, MENA and LATAM, counts as a separate game, and its ID does not match a Global account. Players in Uzbekistan are on the Global version. If the bot cannot find the ID, first check which version you are on, and do not place an order for the wrong version."
      },
      "faq": [
        {
          "q": "The bot showed a different nickname from the one I know. What should I do?",
          "a": "Do not confirm the order. The nickname comes from the game server, so the name on screen belongs to the owner of exactly the ID you entered. A different name means there is a mistake in the number: copy the ID from your profile again and try once more."
        },
        {
          "q": "Can I buy the Battle Pass directly, or do I need Delta Coins first?",
          "a": "In the bot, Delta Coins packs and the Battle Pass are separate items. If the Battle Pass is on the list, you take it directly; if it is not, you buy coins and unlock the Battle Pass from its screen inside the game. The current list is visible in the bot."
        },
        {
          "q": "Do bonus coins come together with the main pack?",
          "a": "Yes, the bonus is part of the pack and not a separate order; it is credited together with the main amount in a single delivery. How much bonus each pack carries is written in the pack description in the bot."
        },
        {
          "q": "The season is nearly over, does it make sense to buy the Battle Pass now?",
          "a": "Battle Pass tiers unlock within their own season, and once the season closes the tiers you did not open stay closed. With only a few days left, it is easier to buy coins and unlock the Battle Pass at the start of the new season. The season dates are on the Battle Pass screen in the game."
        },
        {
          "q": "I play on console, does the Player ID top-up work?",
          "a": "Delta Force has been on consoles since 2025, and the account is tied to a single Level Infinite profile, so the Player ID does not change. Enter that same number in the bot: if the nickname appears, the top-up goes to that account. If no nickname appears or a different name is shown, do not pay and write to @StarsPaymeeSupport."
        },
        {
          "q": "Is GemPay an official partner of Level Infinite or Team Jade?",
          "a": "No. GemPay is an independent top-up service and has no official partnership with the publisher. It delivers Delta Coins by Player ID through a provider catalogue; a password, SMS code or account login is never requested."
        }
      ]
    }
  },
  "free-fire": {
    "uz": {
      "answer": "Free Fire'da server maydoni yo'q — hisob regioni birinchi kirishda biriktiriladi, shuning uchun faqat UID kerak. GemPay botida o'yinni tanlaysiz, profil avataringiz ostidagi Player ID'ni kiritasiz, bot nikni bepul ko'rsatadi, tasdiqlaganingizdan keyin paketni tanlab so'mda to'laysiz. Olmos taxminan 2 daqiqada tushadi va Free Fire MAX'da ham ko'rinadi.",
      "faq": [
        {
          "q": "Free Fire'ni to'ldirishda server tanlash kerakmi?",
          "a": "Yo'q. Free Fire'da alohida server yoki platforma maydoni yo'q — hisob regioni birinchi kirishda o'zi biriktiriladi. Botda faqat Player ID so'raladi, boshqa maydon chiqmaydi."
        },
        {
          "q": "Nikimni o'zgartirsam, UID ham o'zgaradimi?",
          "a": "Yo'q, UID akkauntga bir marta beriladi va butun umr o'zgarmaydi. Nikni almashtirsangiz ham eski raqam ishlayveradi — bot tekshiruvda sizga yangi nikni ko'rsatadi."
        },
        {
          "q": "Weekly va Monthly Membership'ni bir vaqtda ushlab tursam bo'ladimi?",
          "a": "Ha, ikkalasi bir vaqtda faol tura oladi va kunlik ulushlari qo'shilib keladi. Botda ular alohida mahsulot, ya'ni har birini alohida buyurtma qilasiz."
        },
        {
          "q": "Membership muddati tugagach avtomatik uzaytiriladimi?",
          "a": "Yo'q, bu obuna emas — bir martalik buyurtma. Muddat tugasa, kunlik olmos to'xtaydi va davom ettirish uchun yangi buyurtma berasiz. Kunlik ulushni o'yin ichida qo'lda olib turasiz, shuning uchun har kuni kirib turish kerak."
        },
        {
          "q": "Emulyatorda yoki ikkinchi telefonda o'ynasam, to'ldirish ishlaydimi?",
          "a": "Ha. Olmos qurilmaga emas, UID'ga tushadi. PC emulyatorida yoki boshqa telefonda kirsangiz ham, balans o'sha akkauntda turaveradi."
        },
        {
          "q": "Akkauntim vaqtincha bloklangan bo'lsa, to'ldirsam bo'ladimi?",
          "a": "Kutganingiz ma'qul. Buyurtma UID bo'yicha o'tsa ham, blok tugamaguncha olmosga tegina olmaysiz, doimiy ban bo'lsa esa u umuman qo'lga kirmaydi. Avval o'yin ichidagi xabardan blok muddatini tekshiring."
        }
      ],
      "gotcha": {
        "title": "Mehmon (guest) akkauntga to'ldirish",
        "text": "Free Fire'da guest akkaunt qurilma xotirasida yashaydi. Ilovani o'chirsangiz yoki telefon almashtirsangiz, u tiklanmaydi — sotib olingan olmos ham, Booyah Pass ham qaytmaydi. To'ldirishdan oldin akkauntni Google, Facebook yoki VK'ga bog'lang, keyin UID'ni kiriting."
      },
      "h1": "Free Fire olmos to'ldirish — UID bo'yicha, nik tasdiqlangandan keyin",
      "idSteps": [
        "Free Fire lobbisida chap yuqoridagi avatar rasmingizni bosing — profil kartasi ochiladi.",
        "Nikingiz ostida Player ID (UID) turadi: 9-11 raqamli, harfsiz son.",
        "Raqam yonidagi nusxalash belgisini bosing yoki uni qo'lda yozib oling.",
        "Free Fire MAX'da ham xuddi shu UID ko'rinadi, Firelink bitta akkauntni ulaydi.",
        "Nik o'zgarsa ham UID o'zgarmaydi, eski chekdagi raqam ishlayveradi."
      ],
      "intro": [
        "Olmos — Free Fire'ning ichki valyutasi. Uni asosan Booyah Pass'ning Premium yo'nalishini ochish, Diamond Royale va Evo Vault aylanishlari, Alok yoki Chrono kabi personajlarni olish uchun sarflashadi. Ko'p o'yinchi mavsum boshida bir marta to'ldiradi: pass ochilsa, qolgan mukofotlar o'ynab yig'iladi. Weekly va Monthly Membership oluvchilar esa har kuni oz-ozdan olmos yig'ib borishni afzal ko'radi.",
        "O'yin ichidagi Google Play va Garena to'lov oynasi xorijiy karta so'raydi, Codashop esa O'zbekiston uchun Free Fire yo'nalishini ochmagan. Shu sababli ko'pchilik obmennik yoki kripto orqali aylanma yo'l qidiradi. GemPay'da esa hamma narsa so'mda: UzCard, HUMO, Click, Payme yoki Paynet bilan to'laysiz, olmos to'g'ridan-to'g'ri UID'ga tushadi va akkauntga kirish talab qilinmaydi."
      ],
      "metaDescription": "Free Fire olmosini UID orqali to'ldiring: server tanlash yo'q, nik to'lovdan oldin bepul tekshiriladi, so'mda UzCard, HUMO, Click yoki Payme bilan, 2 daqiqada.",
      "metaTitle": "Free Fire olmos sotib olish — UID bilan, so'mda | GemPay",
      "packages": [
        "Olmos paketlari asosiy miqdor va bonus ko'rinishida keladi — odatda 100+10, 310+31, 520+52, 1060+106, 2180+218 va 5600+560 zinapoyasi.",
        "Ular yonida Weekly va Monthly Membership hamda Elite Pass turadi: bu mahsulotlar olmosni bir yo'la emas, kunlar davomida bosqichma-bosqich beradi (o'yin ichida bu pass endi Booyah Pass deb ataladi).",
        "Joriy narxlar botda ko'rsatiladi."
      ],
      "spendOn": [
        "Booyah Pass Premium va Premium Plus yo'nalishlari",
        "Diamond Royale va Weapon Royale aylantirishlari",
        "Evo Vault'dagi qurol skinlari va Evo tokenlari",
        "Alok, Chrono, Kelly kabi personajlarni ochish va kuchaytirish",
        "Incubator va Faded Wheel'dagi cheklangan buyumlar",
        "Pet, emote va mavsumiy kiyim to'plamlari"
      ],
      "steps": [
        {
          "title": "Botda Free Fire'ni tanlang",
          "text": "@Gempayuz_bot ni oching va ro'yxatdan Free Fire'ni bosing. Bu global versiya: Vetnam, Tailand va Indoneziya hisoblari qo'llab-quvvatlanmaydi."
        },
        {
          "title": "Player ID'ni kiriting",
          "text": "Profilingizdagi 9-11 raqamli UID'ni yozing. Free Fire'da server yoki platforma maydoni yo'q, shuning uchun boshqa hech narsa so'ralmaydi."
        },
        {
          "title": "Nikni tasdiqlang",
          "text": "Bot o'yin serveridan nikni tortib ekranda ko'rsatadi. Bu bosqich bepul va bu yerda hech narsa yechilmaydi; nik begona chiqsa, UID'ni qaytadan kiriting."
        },
        {
          "title": "Paket yoki membership tanlang",
          "text": "Bir martalik olmos paketi to'lovdan keyin darhol tushadi. Weekly yoki Monthly Membership tanlasangiz, olmos bir yo'la emas, kunlar davomida bosqichma-bosqich beriladi."
        },
        {
          "title": "So'mda to'lang",
          "text": "UzCard, HUMO, Click, Payme yoki Paynet orqali to'lov qilasiz. Olmos taxminan 2 daqiqada UID'ga tushadi, chek esa botda saqlanib qoladi."
        }
      ]
    },
    "ru": {
      "metaTitle": "Купить алмазы Free Fire по UID, за сумы | GemPay",
      "metaDescription": "Пополните алмазы Free Fire по UID: выбора сервера нет, ник бесплатно проверяется до оплаты, оплата в сумах через UzCard, HUMO, Click или Payme, за 2 минуты.",
      "h1": "Пополнение алмазов Free Fire — по UID, после подтверждения ника",
      "answer": "В Free Fire нет поля сервера — регион аккаунта закрепляется при первом входе, поэтому нужен только UID. В боте GemPay вы выбираете игру, вводите Player ID под аватаром профиля, бот бесплатно показывает ник, а после подтверждения выбираете пакет и платите в сумах. Алмазы приходят примерно за 2 минуты и видны также в Free Fire MAX.",
      "intro": [
        "Алмазы — внутренняя валюта Free Fire. Их в основном тратят на премиум-ветку Booyah Pass, на прокрутки Diamond Royale и Evo Vault, на персонажей вроде Alok или Chrono. Многие игроки пополняют один раз в начале сезона: пропуск открыт, а остальные награды добираются игрой. Те, кто берёт Weekly и Monthly Membership, наоборот предпочитают копить алмазы понемногу каждый день.",
        "Платёжное окно Google Play и Garena внутри игры просит зарубежную карту, а Codashop не открыл направление Free Fire для Узбекистана. Поэтому многие ищут обходной путь через обменники или крипту. В GemPay всё в сумах: платите картой UzCard, HUMO, через Click, Payme или Paynet, алмазы приходят прямо на UID, и вход в аккаунт не требуется."
      ],
      "spendOn": [
        "Ветки Booyah Pass Premium и Premium Plus",
        "Прокрутки Diamond Royale и Weapon Royale",
        "Скины оружия и токены Evo из Evo Vault",
        "Открытие и прокачка персонажей вроде Alok, Chrono, Kelly",
        "Ограниченные предметы в Incubator и Faded Wheel",
        "Питомцы, эмоции и сезонные наборы одежды"
      ],
      "packages": [
        "Пакеты алмазов идут как основное количество плюс бонус — обычно лестница 100+10, 310+31, 520+52, 1060+106, 2180+218 и 5600+560.",
        "Рядом с ними стоят Weekly и Monthly Membership, а также Elite Pass: эти товары выдают алмазы не разом, а постепенно по дням (внутри игры этот пропуск теперь называется Booyah Pass).",
        "Текущие цены показываются в боте."
      ],
      "steps": [
        {
          "title": "Выберите Free Fire в боте",
          "text": "Откройте @Gempayuz_bot и нажмите Free Fire в списке. Это глобальная версия: аккаунты Вьетнама, Таиланда и Индонезии не поддерживаются."
        },
        {
          "title": "Введите Player ID",
          "text": "Впишите UID из профиля, 9-11 цифр. В Free Fire нет поля сервера или платформы, поэтому больше ничего не спрашивается."
        },
        {
          "title": "Подтвердите ник",
          "text": "Бот запрашивает ник с игрового сервера и показывает его на экране. Этот шаг бесплатный, здесь ничего не списывается; если ник чужой, введите UID заново."
        },
        {
          "title": "Выберите пакет или membership",
          "text": "Разовый пакет алмазов приходит сразу после оплаты. Если выбрать Weekly или Monthly Membership, алмазы выдаются не разом, а постепенно по дням."
        },
        {
          "title": "Оплатите в сумах",
          "text": "Платите через UzCard, HUMO, Click, Payme или Paynet. Алмазы приходят на UID примерно за 2 минуты, а чек остаётся в боте."
        }
      ],
      "idSteps": [
        "В лобби Free Fire нажмите на аватар слева вверху — откроется карточка профиля.",
        "Под ником стоит Player ID (UID): число из 9-11 цифр, без букв.",
        "Нажмите значок копирования рядом с номером или перепишите его вручную.",
        "В Free Fire MAX виден тот же UID, Firelink связывает один аккаунт.",
        "Даже если сменить ник, UID не меняется — номер из старого чека работает."
      ],
      "gotcha": {
        "title": "Пополнение гостевого (guest) аккаунта",
        "text": "Гостевой аккаунт в Free Fire живёт в памяти устройства. Удалите приложение или смените телефон — он не восстановится, и ни купленные алмазы, ни Booyah Pass не вернутся. Перед пополнением привяжите аккаунт к Google, Facebook или VK, и только потом вводите UID."
      },
      "faq": [
        {
          "q": "Нужно ли выбирать сервер при пополнении Free Fire?",
          "a": "Нет. В Free Fire нет отдельного поля сервера или платформы — регион аккаунта закрепляется сам при первом входе. Бот спрашивает только Player ID, других полей не появляется."
        },
        {
          "q": "Если сменить ник, изменится ли UID?",
          "a": "Нет, UID выдаётся аккаунту один раз и не меняется никогда. Даже после смены ника старый номер продолжает работать — при проверке бот покажет вам новый ник."
        },
        {
          "q": "Можно ли держать Weekly и Monthly Membership одновременно?",
          "a": "Да, оба могут быть активны одновременно, и их ежедневные доли складываются. В боте это отдельные товары, то есть каждый заказывается отдельно."
        },
        {
          "q": "Продлевается ли membership автоматически после окончания срока?",
          "a": "Нет, это не подписка, а разовый заказ. Когда срок выйдет, ежедневные алмазы прекратятся, и для продолжения вы оформляете новый заказ. Ежедневную долю нужно забирать вручную внутри игры, поэтому заходить придётся каждый день."
        },
        {
          "q": "Если играю на эмуляторе или на втором телефоне, пополнение сработает?",
          "a": "Да. Алмазы приходят не на устройство, а на UID. Даже если зайти с эмулятора на ПК или с другого телефона, баланс останется на том же аккаунте."
        },
        {
          "q": "Можно ли пополнять, если аккаунт временно заблокирован?",
          "a": "Лучше подождать. Заказ пройдёт по UID, но до конца блокировки вы до алмазов не доберётесь, а при постоянном бане они вообще не достанутся. Сначала проверьте срок блокировки в сообщении внутри игры."
        }
      ]
    },
    "en": {
      "metaTitle": "Buy Free Fire diamonds by UID, in so'm | GemPay",
      "metaDescription": "Top up Free Fire diamonds by UID: no server to pick, your nickname is checked free before payment, pay in so'm with UzCard, HUMO, Click or Payme.",
      "h1": "Free Fire diamond top-up — by UID, after the nickname is confirmed",
      "answer": "Free Fire has no server field — the account region is attached at first login, so only the UID is needed. In the GemPay bot you pick the game, enter the Player ID under your profile avatar, the bot shows the nickname for free, and once you confirm you pick a pack and pay in so'm. Diamonds arrive in about 2 minutes and show up in Free Fire MAX as well.",
      "intro": [
        "Diamonds are Free Fire's in-game currency. They mostly go on unlocking the Premium track of the Booyah Pass, on Diamond Royale and Evo Vault spins, and on characters like Alok or Chrono. Many players top up once at the start of a season: with the pass open, the remaining rewards are collected by playing. Those who take the Weekly and Monthly Membership prefer instead to gather diamonds a little at a time each day.",
        "The in-game Google Play and Garena payment window asks for a foreign card, and Codashop has not opened a Free Fire line for Uzbekistan. That is why many people look for a workaround through exchangers or crypto. With GemPay everything is in so'm: you pay with UzCard, HUMO, Click, Payme or Paynet, the diamonds go straight to the UID, and no account login is required."
      ],
      "spendOn": [
        "Booyah Pass Premium and Premium Plus tracks",
        "Diamond Royale and Weapon Royale spins",
        "Weapon skins and Evo tokens from the Evo Vault",
        "Unlocking and upgrading characters like Alok, Chrono and Kelly",
        "Limited items in the Incubator and Faded Wheel",
        "Pets, emotes and seasonal outfit sets"
      ],
      "packages": [
        "Diamond packs come as a base amount plus a bonus — usually the 100+10, 310+31, 520+52, 1060+106, 2180+218 and 5600+560 ladder.",
        "Next to them sit the Weekly and Monthly Membership and the Elite Pass: these products give diamonds not all at once but step by step over days (in game this pass is now called the Booyah Pass).",
        "Current prices are shown in the bot."
      ],
      "steps": [
        {
          "title": "Pick Free Fire in the bot",
          "text": "Open @Gempayuz_bot and tap Free Fire in the list. This is the global version: Vietnam, Thailand and Indonesia accounts are not supported."
        },
        {
          "title": "Enter the Player ID",
          "text": "Type the 9-11 digit UID from your profile. Free Fire has no server or platform field, so nothing else is asked for."
        },
        {
          "title": "Confirm the nickname",
          "text": "The bot pulls the nickname from the game server and shows it on screen. This step is free and nothing is charged here; if the nickname is not yours, enter the UID again."
        },
        {
          "title": "Choose a pack or a membership",
          "text": "A one-off diamond pack arrives right after payment. If you choose the Weekly or Monthly Membership, the diamonds are given not all at once but step by step over days."
        },
        {
          "title": "Pay in so'm",
          "text": "You pay with UzCard, HUMO, Click, Payme or Paynet. Diamonds reach the UID in about 2 minutes, and the receipt stays in the bot."
        }
      ],
      "idSteps": [
        "In the Free Fire lobby, tap your avatar in the top left — the profile card opens.",
        "Under your nickname sits the Player ID (UID): a 9-11 digit number with no letters.",
        "Tap the copy icon next to the number or write it down by hand.",
        "Free Fire MAX shows the same UID; Firelink connects the one account.",
        "Changing your nickname does not change the UID — the number from an old receipt still works."
      ],
      "gotcha": {
        "title": "Topping up a guest account",
        "text": "A Free Fire guest account lives in the device's memory. Delete the app or change phone and it does not come back — neither the diamonds you bought nor the Booyah Pass return. Link the account to Google, Facebook or VK before topping up, and only then enter the UID."
      },
      "faq": [
        {
          "q": "Do I need to pick a server when topping up Free Fire?",
          "a": "No. Free Fire has no separate server or platform field — the account region is attached by itself at first login. The bot asks only for the Player ID, no other field appears."
        },
        {
          "q": "If I change my nickname, does the UID change too?",
          "a": "No, the UID is issued to the account once and never changes. Even after a nickname change the old number keeps working — at the check the bot will show you the new nickname."
        },
        {
          "q": "Can I hold the Weekly and Monthly Membership at the same time?",
          "a": "Yes, both can be active at once and their daily portions add up. In the bot they are separate products, so you order each one separately."
        },
        {
          "q": "Does the membership renew automatically when the term ends?",
          "a": "No, this is not a subscription but a one-off order. When the term ends the daily diamonds stop, and to continue you place a new order. The daily portion is claimed by hand inside the game, so you need to log in every day."
        },
        {
          "q": "If I play on an emulator or a second phone, does the top-up work?",
          "a": "Yes. Diamonds go to the UID, not to the device. Even if you log in from a PC emulator or another phone, the balance stays on that account."
        },
        {
          "q": "Can I top up if my account is temporarily banned?",
          "a": "Better to wait. The order will go through by UID, but you will not be able to touch the diamonds until the ban ends, and with a permanent ban they are out of reach entirely. Check the ban period first in the in-game message."
        }
      ]
    }
  },
  "honor-of-kings": {
    "uz": {
      "answer": "Honor of Kings'ning global versiyasida alohida server yoki zona maydoni yo'q: region akkaunt ochilganda belgilanadi, shuning uchun to'ldirish uchun faqat Player ID (UID) kerak. GemPay botida ID ni kiritasiz, tizim o'yin serveridan nikni bepul olib beradi, siz tasdiqlaysiz va so'mda to'laysiz. Token taxminan 3 daqiqada tushadi, nik chiqmaguncha hech narsa yechilmaydi.",
      "faq": [
        {
          "q": "Weekly Card ning kunlik tokenlarini olish uchun har kuni o'yinga kirish kerakmi?",
          "a": "Ha. Weekly Card va Weekly Card Plus tokenning bir qismini darhol, qolganini yetti kun davomida kunlik beradi. Kirmagan kuningizning ulushi qaytarilmaydi, shuning uchun kartani faol o'ynaydigan haftangizda oling."
        },
        {
          "q": "To'ldirgan tokenim Nobility darajamni ko'taradimi?",
          "a": "Nobility bali token sarflanganda yig'iladi, ya'ni token o'yin ichida biror narsaga ishlatilganda. Muddati cheklangan aksiya tokenlari odatda balga o'tmaydi, shuni hisobga oling."
        },
        {
          "q": "Google Play va Apple orqali kirgan ikki akkauntim bor, qaysi UID ni beray?",
          "a": "Har bir kirish usuli alohida akkaunt va alohida UID hosil qiladi, ular birlashtirilmaydi. Skin kerak bo'lgan profilga kiring va UID ni o'sha yerdan oling, chunki token faqat kiritilgan UID ga tushadi."
        },
        {
          "q": "Akkauntim regionini keyinchalik o'zgartira olamanmi?",
          "a": "Region akkaunt yaratilganda belgilanadi va oddiy yo'l bilan almashtirilmaydi, qahramon, skin va reyting o'sha regionda qoladi. To'ldirishga bu xalaqit bermaydi: bot regionni emas, UID ni so'raydi."
        },
        {
          "q": "Honor Pass ni ham token bilan olsam bo'ladimi?",
          "a": "Ha, Honor Pass o'yin ichida token evaziga ochiladi. Botda alohida 'Pass' tugmasi yo'q: kerakli miqdordagi token paketini olasiz, keyin Pass ni o'yinning o'zidan sotib olasiz. Mavsum tugashidan oldin ulgurish kerak."
        },
        {
          "q": "Skinga bir oz token yetmayapti, kichik paket qo'shsam bo'ladimi?",
          "a": "Ha, paketlar bir-birining ustiga qo'shiladi va balans jamlanadi. Faqat esda tuting: ilgari olgan paket hajmini takrorlasangiz, birinchi to'ldirish bonusi ikkinchi marta berilmaydi."
        }
      ],
      "gotcha": {
        "title": "Bir xil paketni takrorlash bonusni yo'qotadi",
        "text": "Birinchi to'ldirish bonusi odatda har paket hajmiga alohida beriladi: 80 uchun bir marta, 240 uchun yana bir marta. Ayni bir paketni ikkinchi bor olsangiz, bonus qaytarilmaydi. Yangi akkauntda zinapoyani pastdan yuqoriga bittadan o'tgan ma'qul."
      },
      "h1": "Honor of Kings token to'ldirish: Player ID orqali, so'mda",
      "idSteps": [
        "Honor of Kings'ni oching va lobbi chap yuqorisidagi avatarni bosing",
        "Profil sahifasida nik ostida turgan ID raqamini toping - bu Player ID",
        "Ko'rinmasa, yuqori o'ngdagi sozlamalar belgisidan 'View UID' bandini oching",
        "Raqamni to'liq nusxalang: UID nik yoki telefon almashsa ham o'zgarmaydi",
        "Botga faqat shu raqamni yuboring, parol yoki SMS kod hech qachon kerak emas"
      ],
      "intro": [
        "Token - Honor of Kings'dagi asosiy pullik valyuta. Jangda yig'iladigan Gold ko'proq qahramon ochishga ketadi, Token esa skinlar, Honor Pass va omadli quraga sarflanadi: Epic skinlar odatda 888-1388, Legendary skinlar 1688-2888 token turadi. Shuning uchun uni bitta qahramonni jiddiy o'ynaydigan yoki har mavsum Pass yig'ib boradigan o'yinchilar oladi.",
        "Rasmiy yo'l - Midasbuy yoki do'kon ichidagi to'lov - odatda xalqaro karta yoxud Google Play va App Store balansini so'raydi; UzCard bilan HUMO u yerda ro'yxatda ko'rinmaydi. GemPay shu bo'shliqni yopadi: to'lov O'zbekiston kartasi yoki Click, Payme, Paynet orqali so'mda o'tadi. Akkauntga kirish talab qilinmaydi, faqat ochiq UID yetadi."
      ],
      "metaDescription": "Honor of Kings token to'ldirish so'mda: Player ID (UID) ni kiriting, server maydoni so'ralmaydi, nik bepul tekshiriladi va token 3 daqiqada UID ga tushadi.",
      "metaTitle": "Honor of Kings token sotib olish, so'mda | GemPay",
      "packages": [
        "Token zinapoyasi odatda 80 dan boshlanadi va 240, 400, 560, 800, 1200 orqali minglik paketlargacha ko'tariladi, yiriklarining ustiga bonus token qo'shiladi.",
        "Ular yonida Weekly Card va Weekly Card Plus turadi - bu ikkisi tokenni bir yo'la emas, yetti kun davomida kunlik beradi.",
        "Har paketning hozirgi narxi botda ko'rsatiladi."
      ],
      "spendOn": [
        "Epic va Legendary skinlar - odatda 888-2888 token",
        "Honor Pass: mavsumiy skin, effekt va resurslar",
        "Yangi qahramonlarni Gold yig'ib o'tirmasdan ochish",
        "Treasure va omadli qura - noyob kristallar uchun",
        "Weekly Card hamda Weekly Card Plus obunalari",
        "Nobility darajasi: ramka, avatar va chat bezaklari"
      ],
      "steps": [
        {
          "title": "Botda Honor of Kings'ni tanlang",
          "text": "@Gempayuz_bot ni oching va katalogdan Honor of Kings'ni belgilang. Gap global versiya haqida: Xitoy versiyasi QQ va WeChat orqali ishlaydigan boshqa o'yin, unga token o'tmaydi."
        },
        {
          "title": "Player ID (UID) ni kiriting",
          "text": "Faqat raqamlardan iborat UID kifoya. Server yoki zona maydoni yo'q - HoK'da region akkaunt ochilganda belgilanadi, shuning uchun bot qo'shimcha hech narsa so'ramaydi."
        },
        {
          "title": "Ekrandagi nikni tekshiring",
          "text": "Bot o'yin serveridan nikni olib bepul ko'rsatadi. HoK'da nik takrorlanishi mumkin, UID esa noyob, shuning uchun tasdiqlashdan oldin nikni tinch o'qib chiqing. Bu bosqichgacha hisobdan pul yechilmaydi."
        },
        {
          "title": "Paketni tanlang va so'mda to'lang",
          "text": "Token paketi yoki Weekly Card ni tanlab, UzCard, HUMO, Click, Payme yoki Paynet orqali to'lang. Joriy narx tugmani bosishdan oldin ekranda turadi."
        },
        {
          "title": "Tokenni o'yinda qabul qiling",
          "text": "Token o'rtacha 3 daqiqada o'sha UID ga tushadi. Balans darrov yangilanmasa, o'yindan chiqib qayta kiring - hisob lobbi qayta yuklanganda ko'rinadi."
        }
      ]
    },
    "ru": {
      "metaTitle": "Покупка Token в Honor of Kings за сумы | GemPay",
      "metaDescription": "Пополнение Token в Honor of Kings за сумы: введите Player ID (UID), поле сервера не спрашивается, ник проверяется бесплатно, Token приходит за 3 минуты.",
      "h1": "Пополнение Token в Honor of Kings: по Player ID, в сумах",
      "answer": "В глобальной версии Honor of Kings нет отдельного поля сервера или зоны: регион задаётся при создании аккаунта, поэтому для пополнения нужен только Player ID (UID). В боте GemPay вы вводите ID, система бесплатно получает ник с игрового сервера, вы подтверждаете и платите в сумах. Token приходит примерно за 3 минуты, до появления ника ничего не списывается.",
      "intro": [
        "Token — основная платная валюта в Honor of Kings. Gold, который копится в боях, уходит в основном на открытие героев, а Token тратится на скины, Honor Pass и розыгрыши: скины Epic обычно стоят 888-1388 Token, Legendary — 1688-2888. Поэтому его берут те, кто серьёзно играет на одном герое или каждый сезон собирает Pass.",
        "Официальный путь — Midasbuy или оплата внутри магазина — обычно просит международную карту либо баланс Google Play и App Store; UzCard и HUMO там в списке не появляются. GemPay закрывает этот пробел: оплата проходит в сумах картой Узбекистана или через Click, Payme, Paynet. Вход в аккаунт не требуется, достаточно открытого UID."
      ],
      "spendOn": [
        "Скины Epic и Legendary — обычно 888-2888 Token",
        "Honor Pass: сезонный скин, эффекты и ресурсы",
        "Открытие новых героев без долгого сбора Gold",
        "Treasure и розыгрыши — ради редких кристаллов",
        "Подписки Weekly Card и Weekly Card Plus",
        "Уровень Nobility: рамки, аватары и украшения чата"
      ],
      "packages": [
        "Лестница Token обычно начинается с 80 и поднимается через 240, 400, 560, 800, 1200 до пакетов на тысячи, к крупным сверху добавляется бонусный Token.",
        "Рядом с ними стоят Weekly Card и Weekly Card Plus — эти два выдают Token не сразу, а ежедневно в течение семи дней.",
        "Текущая цена каждого пакета показывается в боте."
      ],
      "steps": [
        {
          "title": "Выберите Honor of Kings в боте",
          "text": "Откройте @Gempayuz_bot и отметьте Honor of Kings в каталоге. Речь о глобальной версии: китайская версия работает через QQ и WeChat, это другая игра, Token туда не переходит."
        },
        {
          "title": "Введите Player ID (UID)",
          "text": "Достаточно UID из одних цифр. Поля сервера или зоны нет — в HoK регион задаётся при создании аккаунта, поэтому бот больше ничего не спрашивает."
        },
        {
          "title": "Проверьте ник на экране",
          "text": "Бот получает ник с игрового сервера и показывает его бесплатно. В HoK ник может повторяться, а UID уникален, поэтому перед подтверждением спокойно прочитайте ник. До этого шага со счёта ничего не списывается."
        },
        {
          "title": "Выберите пакет и оплатите в сумах",
          "text": "Отметьте пакет Token или Weekly Card и оплатите через UzCard, HUMO, Click, Payme или Paynet. Текущая цена стоит на экране до нажатия кнопки."
        },
        {
          "title": "Заберите Token в игре",
          "text": "Token приходит на тот же UID в среднем за 3 минуты. Если баланс не обновился сразу, выйдите из игры и зайдите снова — счёт виден после перезагрузки лобби."
        }
      ],
      "idSteps": [
        "Откройте Honor of Kings и нажмите на аватар в левом верхнем углу лобби",
        "На странице профиля найдите номер ID под ником — это и есть Player ID",
        "Если его не видно, откройте пункт 'View UID' в настройках справа вверху",
        "Скопируйте номер полностью: UID не меняется при смене ника или телефона",
        "Отправьте боту только этот номер, пароль или SMS-код не нужны никогда"
      ],
      "gotcha": {
        "title": "Повтор одного пакета лишает бонуса",
        "text": "Бонус за первое пополнение обычно даётся отдельно на каждый объём пакета: один раз за 80, ещё раз за 240. Если взять тот же пакет второй раз, бонус не повторится. На новом аккаунте лучше пройти лестницу снизу вверх по одному шагу."
      },
      "faq": [
        {
          "q": "Нужно ли заходить в игру каждый день, чтобы получить дневные Token с Weekly Card?",
          "a": "Да. Weekly Card и Weekly Card Plus выдают часть Token сразу, а остальное — ежедневно в течение семи дней. Доля за пропущенный день не возвращается, поэтому берите карту на той неделе, когда играете активно."
        },
        {
          "q": "Поднимет ли пополненный Token мой уровень Nobility?",
          "a": "Очки Nobility начисляются при трате Token, то есть когда Token потрачен на что-то внутри игры. Token из акций с ограниченным сроком обычно в очки не идёт, это стоит учитывать."
        },
        {
          "q": "У меня два аккаунта — через Google Play и Apple, какой UID дать?",
          "a": "Каждый способ входа создаёт отдельный аккаунт и отдельный UID, они не объединяются. Зайдите в тот профиль, где нужен скин, и возьмите UID оттуда: Token приходит только на введённый UID."
        },
        {
          "q": "Можно ли позже сменить регион аккаунта?",
          "a": "Регион задаётся при создании аккаунта и обычным путём не меняется, герои, скины и рейтинг остаются в том регионе. Пополнению это не мешает: бот спрашивает не регион, а UID."
        },
        {
          "q": "Можно ли взять Honor Pass за Token?",
          "a": "Да, Honor Pass открывается внутри игры за Token. Отдельной кнопки 'Pass' в боте нет: вы берёте пакет Token нужного объёма, а затем покупаете Pass в самой игре. Успеть нужно до конца сезона."
        },
        {
          "q": "На скин не хватает немного Token, можно добавить маленький пакет?",
          "a": "Да, пакеты складываются друг с другом и баланс суммируется. Только помните: если повторить объём уже купленного пакета, бонус за первое пополнение второй раз не даётся."
        }
      ]
    },
    "en": {
      "metaTitle": "Buy Honor of Kings Token in so'm | GemPay",
      "metaDescription": "Honor of Kings Token top-up in so'm: enter your Player ID (UID), no server field is asked, the nickname is checked free and Token lands in 3 minutes.",
      "h1": "Honor of Kings Token top-up: by Player ID, in so'm",
      "answer": "The global version of Honor of Kings has no separate server or zone field: the region is set when the account is created, so a top-up needs only the Player ID (UID). You enter the ID in the GemPay bot, the system pulls the nickname from the game server for free, you confirm and pay in so'm. Token arrives in about 3 minutes, and nothing is charged until the nickname appears.",
      "intro": [
        "Token is the main paid currency in Honor of Kings. The Gold you collect in matches goes mostly into unlocking heroes, while Token is spent on skins, the Honor Pass and lucky draws: Epic skins usually cost 888-1388 Token, Legendary skins 1688-2888. That is why it is bought by players who main one hero seriously or who collect the Pass every season.",
        "The official route — Midasbuy or paying inside the store — normally asks for an international card or Google Play and App Store balance; UzCard and HUMO do not appear in that list. GemPay closes the gap: payment goes through an Uzbek card or Click, Payme, Paynet in so'm. No account login is required, the public UID is enough."
      ],
      "spendOn": [
        "Epic and Legendary skins — usually 888-2888 Token",
        "Honor Pass: seasonal skin, effects and resources",
        "Unlocking new heroes without grinding Gold",
        "Treasure and lucky draws — for rare crystals",
        "Weekly Card and Weekly Card Plus subscriptions",
        "Nobility level: frames, avatars and chat decorations"
      ],
      "packages": [
        "The Token ladder usually starts at 80 and climbs through 240, 400, 560, 800, 1200 up to packs in the thousands, with bonus Token added on top of the larger ones.",
        "Next to them sit Weekly Card and Weekly Card Plus — these two hand out Token daily over seven days rather than all at once.",
        "The current price of each pack is shown in the bot."
      ],
      "steps": [
        {
          "title": "Pick Honor of Kings in the bot",
          "text": "Open @Gempayuz_bot and select Honor of Kings from the catalogue. This is about the global version: the Chinese version runs through QQ and WeChat, it is a different game and Token does not carry over to it."
        },
        {
          "title": "Enter the Player ID (UID)",
          "text": "A UID made of digits only is enough. There is no server or zone field — in HoK the region is set when the account is created, so the bot asks for nothing else."
        },
        {
          "title": "Check the nickname on screen",
          "text": "The bot pulls the nickname from the game server and shows it for free. Nicknames can repeat in HoK while the UID is unique, so read the nickname calmly before you confirm. Nothing is charged up to this step."
        },
        {
          "title": "Choose a pack and pay in so'm",
          "text": "Select a Token pack or a Weekly Card and pay with UzCard, HUMO, Click, Payme or Paynet. The current price is on screen before you press the button."
        },
        {
          "title": "Receive the Token in game",
          "text": "Token lands on that same UID in about 3 minutes on average. If the balance does not refresh right away, close the game and open it again — the total shows once the lobby reloads."
        }
      ],
      "idSteps": [
        "Open Honor of Kings and tap the avatar in the top left of the lobby",
        "On the profile page, find the ID number under the nickname — that is the Player ID",
        "If it is not visible, open the 'View UID' item from the settings icon in the top right",
        "Copy the number in full: the UID does not change if the nickname or phone changes",
        "Send only that number to the bot, a password or SMS code is never needed"
      ],
      "gotcha": {
        "title": "Repeating the same pack loses the bonus",
        "text": "The first top-up bonus is usually given separately for each pack size: once for 80, once again for 240. If you take the same pack a second time, the bonus does not repeat. On a new account it is better to walk up the ladder one step at a time."
      },
      "faq": [
        {
          "q": "Do I have to open the game every day to get the daily Token from a Weekly Card?",
          "a": "Yes. Weekly Card and Weekly Card Plus give part of the Token straight away and the rest daily over seven days. The share for a day you miss is not returned, so take the card in a week when you play actively."
        },
        {
          "q": "Does topped-up Token raise my Nobility level?",
          "a": "Nobility points are earned when Token is spent, that is when Token goes towards something inside the game. Token from limited-time promos usually does not count towards points, so keep that in mind."
        },
        {
          "q": "I have two accounts, one via Google Play and one via Apple — which UID do I give?",
          "a": "Each sign-in method creates a separate account and a separate UID, and they are not merged. Log into the profile where you want the skin and take the UID from there, because Token lands only on the UID you enter."
        },
        {
          "q": "Can I change the account region later?",
          "a": "The region is set when the account is created and is not changed by any ordinary route; heroes, skins and rank stay in that region. This does not affect a top-up: the bot asks for the UID, not the region."
        },
        {
          "q": "Can I get the Honor Pass with Token as well?",
          "a": "Yes, the Honor Pass is unlocked inside the game with Token. There is no separate 'Pass' button in the bot: you take a Token pack of the size you need, then buy the Pass in the game itself. You have to do it before the season ends."
        },
        {
          "q": "I am slightly short of Token for a skin, can I add a small pack?",
          "a": "Yes, packs stack on top of each other and the balance adds up. Just remember: if you repeat the size of a pack you already bought, the first top-up bonus is not given a second time."
        }
      ]
    }
  },
  "magic-chess-go-go": {
    "uz": {
      "answer": "Magic Chess: Go Go'da ID ikki qismdan iborat: avatar ostidagi raqam va qavs ichidagi Server ID — Mobile Legends ID'si bu yerda ishlamaydi. GemPay botida shu ikkisini kiritasiz, nik bepul chiqadi, tasdiqlagach so'mda UzCard, HUMO, Click yoki Payme bilan to'laysiz. Olmos taxminan 2 daqiqada MCGG hisobiga tushadi.",
      "faq": [
        {
          "q": "MCGG'da to'ldirilgan olmos Mobile Legends do'konida ishlaydimi?",
          "a": "Yo'q. Magic Chess: Go Go alohida ilova va olmos MCGG do'koni ichida qoladi — MLBB skinlari yoki jang mukofotlariga o'tmaydi. Moonton akkaunti bitta bo'lishi ikkala o'yin hamyonini birlashtirmaydi; ular faqat kross-o'yin mukofotlari uchun bog'lanadi."
        },
        {
          "q": "O'zbekistondan o'ynayman — qaysi server mahsuloti kerak?",
          "a": "Global (APAC) versiya. Rus donat saytlarida «Rossiya» deb belgilangan alohida mahsulot turadi va u boshqa hisobga ketadi. GemPay'da region tanlash bosqichi yo'q: bot siz kiritgan User ID va Server ID juftligi bo'yicha to'g'ridan-to'g'ri o'sha akkauntga ishlaydi."
        },
        {
          "q": "Emulyator yoki PC orqali o'ynasam, olmos o'sha hisobga tushadimi?",
          "a": "Ha. Olmos qurilmaga emas, User ID va Server ID juftligiga bog'lanadi — telefonda, planshetda yoki emulyatorda kirasizmi, farqi yo'q. Bir nechta akkaunt ishlatsangiz, botga aynan qaysi biriga to'ldirayotganingizni ID orqali ko'rsating."
        },
        {
          "q": "Mehmon (guest) akkaunt bilan to'ldirsa bo'ladimi?",
          "a": "Texnik jihatdan ha, mehmon akkauntning ham User ID va Server ID si bor. Lekin u qurilmaga bog'langan: ilovani o'chirsangiz yoki telefon almashsangiz, hisob bilan birga olmos ham yo'qoladi. To'ldirishdan oldin akkauntni Moonton, Google yoki Apple ID'ga bog'lab qo'ygan tuzukroq."
        },
        {
          "q": "Botda chiqqan nik o'yindagidan boshqacha ko'rinsa-chi?",
          "a": "Nikda emoji, maxsus belgi yoki klan prefiksi bo'lsa, server ularni har xil qaytarishi mumkin — harflar mos kelsa, akkaunt o'shaniki. Butunlay boshqa nom chiqsa, to'lamang: ID'da xato bor. Raqamlarni qayta kiriting yoki @StarsPaymeeSupport ga yozing."
        },
        {
          "q": "Olmos yangi mavsum boshlanganda kuyib ketadimi?",
          "a": "Olmosning o'zi hisobda qoladi va mavsum almashganda yo'qolmaydi. Kuyadigani — pass mukofotlari: Go Go Pass yoki haftalik pass ichidagi olinmagan mukofotlar mavsum tugashi bilan yopiladi. Shuning uchun passni mavsum oxirida emas, boshida olgan foydaliroq."
        }
      ],
      "gotcha": {
        "title": "Mobile Legends ID'si bu yerga tushmaydi",
        "text": "Bu yerda pul yo'qotadigan xato bitta: Mobile Legends ID'sini kiritish. Moonton akkaunti umumiy bo'lgani bilan MCGG'ning o'z game ID'si bor, MLBB raqami esa butunlay boshqa o'yinchining Magic Chess hisobiga tushib ketishi mumkin. Botda nik chiqqach, uni MCGG'dagi nikingiz bilan solishtiring."
      },
      "h1": "Magic Chess: Go Go olmos to'ldirish — User ID va Server ID bo'yicha, 2 daqiqada",
      "idSteps": [
        "Magic Chess: Go Go'ni oching va asosiy menyu ekraniga chiqing.",
        "Yuqori chap burchakdagi avatar rasmiga bosing — profil oynasi ochiladi.",
        "«Asosiy ma'lumot» (Basic Info) bo'limida nik ostidagi ID qatorini toping.",
        "ID 100000520(1234) ko'rinishida: qavsdan oldingi qism — User ID.",
        "Qavs ichidagi raqam — Server ID; botga ikkisi alohida maydonga kiritiladi."
      ],
      "intro": [
        "Olmos — Magic Chess: Go Go'dagi yagona pullik valyuta. U jangda kuch qo'shmaydi: olmosga komandir skinlari, shaxmat taxtasi bezaklari, emotelar va mavsumiy Go Go Pass olinadi. Shuning uchun uni asosan har mavsumni oxirigacha o'ynaydigan, reyting ko'taradigan va o'z komandirini boshqalardan ajratib turishni xohlaydigan o'yinchilar sotib oladi. Yangi komandirni esa ko'pincha Chess Points bilan ochish arzonroq tushadi.",
        "Rasmiy yo'l O'zbekistonda uzilib qoladi: o'yin ichidagi to'lov Google Play yoki App Store balansini so'raydi, Codashop'ning mintaqaviy sahifalarida esa UzCard va HUMO ro'yxatda yo'q, ustiga to'lovdan oldin nik ham ko'rsatilmaydi. Rus donat saytlari alohida «Rossiya» server mahsulotini sotadi, o'zbek o'yinchisi esa Global'da. GemPay so'mda ishlaydi va Global hisobga tushiradi."
      ],
      "metaDescription": "Magic Chess: Go Go olmosini User ID va qavs ichidagi Server ID orqali to'ldiring: nik to'lovdan oldin bepul chiqadi, so'mda UzCard, HUMO, Click, Payme.",
      "metaTitle": "Magic Chess Go Go olmos sotib olish — so'mda | GemPay",
      "packages": [
        "Olmos zinapoyasi odatda 55 dan boshlanadi va 275, 565, 1160, 1770, 2975, 4165 hamda 6000 olmosgacha ko'tariladi.",
        "Olmosdan tashqari botda pass tipidagi mahsulotlar ham uchraydi — haftalik pass va mavsumiy Go Go Pass; bular olmos emas, tayyor mukofot to'plami, shuning uchun ular o'z alohida qatorida turadi.",
        "Ro'yxatdagi paketlar va joriy narxlar botda ko'rsatiladi."
      ],
      "spendOn": [
        "Go Go Pass — mavsumiy skinlar, emotelar va yulduz himoyasi kartalari",
        "Komandir skinlari hamda yulduz ko'tarish effektlari",
        "Shaxmat taxtasi bezaklari va aksessuarlar",
        "Haftalik pass — mavsum ballari tezroq to'planadi",
        "Cheklangan muddatli event to'plamlari",
        "Yangi komandirni darhol ochish (odatda 150 olmos)"
      ],
      "steps": [
        {
          "title": "Botdan Magic Chess: Go Go'ni tanlang",
          "text": "@Gempayuz_bot ni oching va katalogdan aynan Magic Chess: Go Go'ni belgilang. Mobile Legends alohida bo'lim — ikkisi bitta Moonton akkauntiga ulansa ham, ID'lari boshqa."
        },
        {
          "title": "User ID'ni kiriting",
          "text": "Profildagi qavsdan oldingi raqam. Bu MCGG'ning o'z game ID'si; Moonton akkaunti umumiy bo'lgani bilan, raqam MLBB'nikidan farq qiladi."
        },
        {
          "title": "Server ID'ni alohida maydonga yozing",
          "text": "Qavs ichidagi raqam — Server ID, ya'ni zona. U alohida maydonga kiritiladi; User ID bilan qo'shib yubormang, tizim ikkisini alohida kutadi."
        },
        {
          "title": "Nikni bepul tekshiring",
          "text": "Bot o'yin serveridan nikni tortib ekranda ko'rsatadi. Bu to'lovdan oldin bo'ladi va pul yechilmaydi — nik o'zingizniki bo'lmasa, ID raqamlarini qayta kiriting."
        },
        {
          "title": "Paketni tanlang va so'mda to'lang",
          "text": "Olmos zinapoyasidan yoki pass mahsulotlaridan birini tanlab, UzCard, HUMO, Click, Payme yoki Paynet orqali to'laysiz. Olmos taxminan 2 daqiqada hisobga tushadi."
        }
      ]
    },
    "ru": {
      "metaTitle": "Купить алмазы Magic Chess Go Go за сумы | GemPay",
      "metaDescription": "Пополните алмазы Magic Chess: Go Go по User ID и Server ID в скобках: ник виден бесплатно до оплаты, оплата в сумах картой UzCard, HUMO, Click, Payme.",
      "h1": "Пополнение алмазов Magic Chess: Go Go — по User ID и Server ID, за 2 минуты",
      "answer": "В Magic Chess: Go Go идентификатор состоит из двух частей: номер под аватаром и Server ID в скобках — ID от Mobile Legends здесь не работает. В боте GemPay вы вводите оба номера, ник показывается бесплатно, после подтверждения платите в сумах картой UzCard, HUMO, Click или Payme. Алмазы приходят на счёт MCGG примерно за 2 минуты.",
      "intro": [
        "Алмазы — единственная платная валюта в Magic Chess: Go Go. В бою они силы не добавляют: за алмазы берут скины командиров, оформление шахматной доски, эмоции и сезонный Go Go Pass. Поэтому их покупают в основном те, кто играет сезон до конца, поднимает рейтинг и хочет выделить своего командира среди остальных. А нового командира чаще выгоднее открыть за Chess Points.",
        "Официальный путь в Узбекистане обрывается: оплата внутри игры просит баланс Google Play или App Store, а на региональных страницах Codashop нет UzCard и HUMO, да и ник до оплаты там не показывают. Российские донат-сайты продают отдельный товар для сервера «Россия», а узбекский игрок сидит на Global. GemPay работает в сумах и зачисляет на аккаунт Global."
      ],
      "spendOn": [
        "Go Go Pass — сезонные скины, эмоции и карты защиты звёзд",
        "Скины командиров и эффекты повышения звёзд",
        "Оформление шахматной доски и аксессуары",
        "Недельный пропуск — очки сезона копятся быстрее",
        "Ограниченные по времени наборы ивентов",
        "Мгновенное открытие нового командира (обычно 150 алмазов)"
      ],
      "packages": [
        "Лестница алмазов обычно начинается с 55 и поднимается до 275, 565, 1160, 1770, 2975, 4165 и 6000 алмазов.",
        "Кроме алмазов в боте встречаются товары типа пропуск — недельный пропуск и сезонный Go Go Pass; это не алмазы, а готовый набор наград, поэтому они стоят отдельной строкой.",
        "Список пакетов и текущие цены показываются в боте."
      ],
      "steps": [
        {
          "title": "Выберите Magic Chess: Go Go в боте",
          "text": "Откройте @Gempayuz_bot и отметьте в каталоге именно Magic Chess: Go Go. Mobile Legends — отдельный раздел: даже если обе игры привязаны к одному аккаунту Moonton, ID у них разные."
        },
        {
          "title": "Введите User ID",
          "text": "Это номер до скобок в профиле. Собственный game ID игры MCGG; аккаунт Moonton общий, но номер отличается от номера в MLBB."
        },
        {
          "title": "Server ID впишите в отдельное поле",
          "text": "Число в скобках — это Server ID, то есть зона. Оно вводится в отдельное поле; не приписывайте его к User ID, система ждёт их по отдельности."
        },
        {
          "title": "Бесплатно проверьте ник",
          "text": "Бот запрашивает ник с игрового сервера и показывает его на экране. Это происходит до оплаты и деньги не списываются — если ник не ваш, введите номера заново."
        },
        {
          "title": "Выберите пакет и оплатите в сумах",
          "text": "Выбираете позицию из лестницы алмазов или один из пропусков и платите через UzCard, HUMO, Click, Payme или Paynet. Алмазы приходят на счёт примерно за 2 минуты."
        }
      ],
      "idSteps": [
        "Откройте Magic Chess: Go Go и выйдите на экран главного меню.",
        "Нажмите на аватар в левом верхнем углу — откроется окно профиля.",
        "В разделе «Основная информация» (Basic Info) найдите строку ID под ником.",
        "ID выглядит как 100000520(1234): часть до скобок — это User ID.",
        "Число в скобках — Server ID; в боте они вводятся в разные поля."
      ],
      "gotcha": {
        "title": "ID от Mobile Legends сюда не подходит",
        "text": "Здесь есть одна ошибка, которая стоит денег: ввести ID от Mobile Legends. Аккаунт Moonton общий, но у MCGG свой game ID, а номер из MLBB может уйти на счёт Magic Chess совсем другого игрока. Когда бот покажет ник, сверьте его со своим ником в MCGG."
      },
      "faq": [
        {
          "q": "Работают ли алмазы, пополненные в MCGG, в магазине Mobile Legends?",
          "a": "Нет. Magic Chess: Go Go — отдельное приложение, и алмазы остаются внутри магазина MCGG: на скины MLBB или награды в боях они не переходят. Один аккаунт Moonton не объединяет кошельки двух игр; они связаны только ради кросс-игровых наград."
        },
        {
          "q": "Играю из Узбекистана — товар какого сервера нужен?",
          "a": "Версия Global (APAC). На российских донат-сайтах стоит отдельный товар с пометкой «Россия», и он уходит на другой аккаунт. В GemPay шага с выбором региона нет: бот работает напрямую с тем аккаунтом, которому соответствует введённая вами пара User ID и Server ID."
        },
        {
          "q": "Если играю через эмулятор или на ПК, придут ли алмазы на тот же счёт?",
          "a": "Да. Алмазы привязаны не к устройству, а к паре User ID и Server ID — заходите вы с телефона, планшета или эмулятора, разницы нет. Если пользуетесь несколькими аккаунтами, укажите боту через ID, на какой именно пополняете."
        },
        {
          "q": "Можно ли пополнить гостевой (guest) аккаунт?",
          "a": "Технически да, у гостевого аккаунта тоже есть User ID и Server ID. Но он привязан к устройству: удалите приложение или смените телефон — и вместе со счётом пропадут алмазы. Перед пополнением лучше привязать аккаунт к Moonton, Google или Apple ID."
        },
        {
          "q": "А если ник в боте выглядит не так, как в игре?",
          "a": "Если в нике есть эмодзи, спецсимволы или клановый префикс, сервер может возвращать их по-разному — если буквы совпадают, аккаунт ваш. Если выводится совсем другое имя, не платите: в ID ошибка. Введите цифры заново или напишите в @StarsPaymeeSupport."
        },
        {
          "q": "Сгорают ли алмазы с началом нового сезона?",
          "a": "Сами алмазы остаются на счету и при смене сезона не пропадают. Сгорают награды пропуска: неполученные награды внутри Go Go Pass или недельного пропуска закрываются с концом сезона. Поэтому пропуск полезнее брать в начале сезона, а не в конце."
        }
      ]
    },
    "en": {
      "metaTitle": "Buy Magic Chess Go Go diamonds in so'm | GemPay",
      "metaDescription": "Top up Magic Chess: Go Go diamonds by User ID and the Server ID in brackets: your nickname is shown free before payment, pay in so'm with UzCard or HUMO.",
      "h1": "Magic Chess: Go Go diamond top-up — by User ID and Server ID, in 2 minutes",
      "answer": "In Magic Chess: Go Go the ID has two parts: the number under your avatar and the Server ID in brackets — a Mobile Legends ID does not work here. In the GemPay bot you enter both, your nickname is shown for free, and after you confirm you pay in so'm with UzCard, HUMO, Click or Payme. Diamonds reach the MCGG account in about 2 minutes.",
      "intro": [
        "Diamonds are the only paid currency in Magic Chess: Go Go. They add no power in a fight: diamonds buy commander skins, chessboard designs, emotes and the seasonal Go Go Pass. That is why they are mostly bought by players who play a season to the end, climb the rating and want their commander to stand out from the rest. A new commander is usually cheaper to unlock with Chess Points.",
        "The official route breaks down in Uzbekistan: in-game payment asks for a Google Play or App Store balance, and Codashop's regional pages list neither UzCard nor HUMO, nor do they show the nickname before payment. Russian top-up sites sell a separate product for the «Russia» server, while an Uzbek player is on Global. GemPay works in so'm and credits the Global account."
      ],
      "spendOn": [
        "Go Go Pass — seasonal skins, emotes and star protection cards",
        "Commander skins and star-up effects",
        "Chessboard designs and accessories",
        "Weekly pass — season points build up faster",
        "Limited-time event bundles",
        "Unlocking a new commander right away (usually 150 diamonds)"
      ],
      "packages": [
        "The diamond ladder usually starts at 55 and rises through 275, 565, 1160, 1770, 2975, 4165 and 6000 diamonds.",
        "Alongside diamonds the bot also carries pass-type products — the weekly pass and the seasonal Go Go Pass; these are not diamonds but ready-made reward sets, so they sit in their own separate line.",
        "The package list and current prices are shown in the bot."
      ],
      "steps": [
        {
          "title": "Pick Magic Chess: Go Go in the bot",
          "text": "Open @Gempayuz_bot and select Magic Chess: Go Go in the catalogue. Mobile Legends is a separate section — even when both are linked to one Moonton account, their IDs are different."
        },
        {
          "title": "Enter the User ID",
          "text": "It is the number before the brackets in your profile. This is MCGG's own game ID; the Moonton account is shared, but the number differs from the MLBB one."
        },
        {
          "title": "Put the Server ID in its own field",
          "text": "The number inside the brackets is the Server ID, that is, the zone. It goes into a separate field; do not stick it onto the User ID, the system expects the two apart."
        },
        {
          "title": "Check the nickname for free",
          "text": "The bot pulls the nickname from the game server and shows it on screen. This happens before payment and nothing is charged — if the nickname is not yours, enter the numbers again."
        },
        {
          "title": "Pick a pack and pay in so'm",
          "text": "You choose a step from the diamond ladder or one of the pass products and pay with UzCard, HUMO, Click, Payme or Paynet. Diamonds reach the account in about 2 minutes."
        }
      ],
      "idSteps": [
        "Open Magic Chess: Go Go and get to the main menu screen.",
        "Tap the avatar image in the top left corner — the profile window opens.",
        "In the Basic Info section, find the ID line under your nickname.",
        "The ID looks like 100000520(1234): the part before the brackets is the User ID.",
        "The number in the brackets is the Server ID; the bot takes the two in separate fields."
      ],
      "gotcha": {
        "title": "A Mobile Legends ID does not fit here",
        "text": "There is one mistake here that costs money: entering a Mobile Legends ID. The Moonton account is shared, but MCGG has its own game ID, and an MLBB number can land on a completely different player's Magic Chess account. When the bot shows the nickname, compare it with your nickname in MCGG."
      },
      "faq": [
        {
          "q": "Do diamonds topped up in MCGG work in the Mobile Legends shop?",
          "a": "No. Magic Chess: Go Go is a separate app and diamonds stay inside the MCGG shop — they do not carry over to MLBB skins or battle rewards. Having one Moonton account does not merge the two games' wallets; they are linked only for cross-game rewards."
        },
        {
          "q": "I play from Uzbekistan — which server's product do I need?",
          "a": "The Global (APAC) version. Russian top-up sites list a separate product marked «Russia» and it goes to a different account. GemPay has no region selection step: the bot works directly with the account matching the User ID and Server ID pair you enter."
        },
        {
          "q": "If I play through an emulator or on PC, do diamonds land on the same account?",
          "a": "Yes. Diamonds are tied to the User ID and Server ID pair, not to the device — phone, tablet or emulator makes no difference. If you use several accounts, use the ID to tell the bot exactly which one you are topping up."
        },
        {
          "q": "Can I top up a guest account?",
          "a": "Technically yes, a guest account also has a User ID and a Server ID. But it is tied to the device: delete the app or change phone and the diamonds go together with the account. It is better to link the account to Moonton, Google or Apple ID before topping up."
        },
        {
          "q": "What if the nickname in the bot looks different from the one in the game?",
          "a": "If the nickname has emoji, special characters or a clan prefix, the server may return them differently — if the letters match, the account is yours. If a completely different name appears, do not pay: there is a mistake in the ID. Re-enter the numbers or write to @StarsPaymeeSupport."
        },
        {
          "q": "Do diamonds burn out when a new season starts?",
          "a": "The diamonds themselves stay on the account and do not disappear when the season changes. What burns is pass rewards: unclaimed rewards inside the Go Go Pass or the weekly pass close at the end of the season. That is why the pass is more useful taken at the start of a season, not at the end."
        }
      ]
    }
  },
  "mobile-legends": {
    "uz": {
      "answer": "Mobile Legends'da profil ID ikki qismdan iborat: 12345678(1234) - birinchisi User ID, qavs ichidagi to'rt raqam esa Server (Zone) ID, va ikkalasi ham kerak. GemPay botida shu ikkovini kiritasiz, tizim o'yin serveridan nickname'ni bepul ko'rsatadi, siz tasdiqlaysiz, so'mda to'laysiz va olmos taxminan bir daqiqada tushadi. Parol yoki SMS kod so'ralmaydi.",
      "faq": [
        {
          "q": "Advance Server akkauntimga olmos to'ldirsam bo'ladimi?",
          "a": "Advance Server - alohida akkaunt: u yerdagi User ID va Server ID asosiy o'yindagidan farq qiladi, olmos esa ular orasida o'tmaydi. Botga asosiy akkaunt ID'sini kiriting. Advance Server uchun kerak bo'lsa, avval @StarsPaymeeSupport'ga yozib, shunday buyurtma qabul qilinishini aniqlab oling."
        },
        {
          "q": "Starlight va Weekly Diamond Pass bir vaqtning o'zida ishlaydimi?",
          "a": "Ha, ular alohida mahsulot va bir-birini bekor qilmaydi. Weekly Diamond Pass bir qism olmosni darhol beradi, qolganini bir hafta davomida har kuni o'yinga kirganingizda qo'shadi. Starlight esa oylik trek, fragment do'koni va reytingdagi qo'shimchalarni ochadi. Ikkalasini bitta akkauntda parallel yuritish mumkin."
        },
        {
          "q": "Paketdagi olmos soni bonus bilan qo'shib yozilganmi?",
          "a": "Ha, MLBB paketlari asosiy va bonus qismdan tuzilgan - masalan 78+8 jami 86 olmos beradi. Akkauntga to'liq son tushadi, lekin Moonton'ning ayrim recharge aksiyalarida hisob faqat asosiy qismdan yuritiladi, shuning uchun aksiya shartini o'yin ichida o'qib chiqqan ma'qul."
        },
        {
          "q": "Magic Wheel'dan Legend skin olish uchun qancha olmos kerak?",
          "a": "Magic Wheel kafolatni aylantirishlar soni bilan beradi - odatda 200 ta aylantirishdan keyin, ya'ni bir necha ming olmos hisobiga. Bittalab aylantirgandan ko'ra ko'p aylantirish varianti tejamliroq chiqadi. Shartlar rotatsiyadan rotatsiyaga o'zgarib turadi, shuning uchun paket olishdan oldin o'yin ichidagi tafsilotni oching."
        },
        {
          "q": "Emulyator yoki kompyuter orqali o'ynasam, ID boshqa bo'ladimi?",
          "a": "Yo'q. Emulyatorda ham xuddi shu akkauntga kirasiz, User ID va Server ID o'zgarmaydi. Profilni ochib, qavs bilan birga o'sha raqamni olasiz. Telefon va kompyuter uchun alohida to'ldirish yo'nalishi yo'q."
        },
        {
          "q": "Olmos o'rniga to'g'ridan-to'g'ri skin buyurtma qilsam bo'ladimi?",
          "a": "Yo'q, bot akkauntingizga olmos yuboradi, skinni o'yin ichidan o'zingiz tanlaysiz. Bunda hech kim akkauntingizga kirmaydi va tanlangan skin sizning hisobingizda ochiladi. Kerakli olmos miqdorini oldindan hisoblab, shunga mos paketni olganingiz qulay."
        }
      ],
      "gotcha": {
        "title": "Starlightni oy oxirida olish",
        "text": "Starlight a'zoligi kalendar oyiga bog'langan: qaysi kuni olsangiz ham, u oy tugashi bilan yopiladi. Oyning oxirgi kunlarida olsangiz, mavsum skini qo'lingizda qoladi, lekin haftalik topshiriqlar va daraja mukofotlarining katta qismini yig'ib ulgurmaysiz. Uni oy boshida olgan ma'qul."
      },
      "h1": "Mobile Legends olmos to'ldirish: User ID va Server ID bilan",
      "idSteps": [
        "O'yinni oching va ekranning chap yuqorisidagi avatar suratini bosing.",
        "Ochilgan Profile oynasida nickname ostidagi ID qatorini toping.",
        "Raqam 12345678(1234) ko'rinishida: birinchi qism User ID, qavs ichidagi to'rt raqam Server ID.",
        "ID ustiga bosib nusxa oling, qo'lda ko'chirganda bitta raqam adashib ketishi oson.",
        "Nickname'ni ham eslab qoling - bot uni ko'rsatganda solishtirish oson bo'ladi."
      ],
      "intro": [
        "Mobile Legends: Bang Bang'da olmos - skin do'koni, Magic Wheel va Lucky Box aylantirishlari, Starlight a'zoligi va yangi geroylarni ochish uchun ishlatiladigan asosiy valyuta. Uni ko'proq reyting o'ynaydigan, mavsumiy skinni yig'ib boradigan va do'stiga sovg'a qilmoqchi bo'lgan o'yinchilar oladi. Nick o'zgartirish kartasi hamda recall va emote effektlari ham shu valyutada sotiladi.",
        "O'yin ichidagi do'kon to'lovni Google Play yoki App Store balansiga yo'naltiradi, u yerda UzCard va HUMO ko'pincha o'tmaydi; xorijiy top-up saytlari esa dollarda ishlaydi va Visa, Mastercard yoki kripto so'raydi. GemPay botida hisob so'mda chiqadi, to'lovni Click, Payme, Paynet yoki mahalliy karta bilan yopasiz, olmos esa taxminan bir daqiqada akkauntga tushadi."
      ],
      "metaDescription": "MLBB olmosini User ID va qavs ichidagi Server ID orqali to'ldiring: bot nickni bepul ko'rsatadi, tasdiqlagach so'mda Click, Payme yoki UzCard bilan to'laysiz.",
      "metaTitle": "Mobile Legends olmos sotib olish - MLBB donat | GemPay",
      "packages": [
        "Olmos paketlari kichik pog'onadan boshlanib kattaga qarab ko'tariladi - odatda 86, 172, 257, 344, 429, 514, 706 va undan yuqori miqdorlar; har biri asosiy va bonus qismdan yig'ilgani uchun ro'yxatda 78+8 ko'rinishidagi yozuvni uchratasiz.",
        "Ular yonida olmos miqdori emas, muddat sotiladigan ikkita mahsulot turadi: Starlight a'zoligi (oddiy va Plus) hamda Weekly Diamond Pass - birinchisi oylik trek bilan fragment do'konini ochadi, ikkinchisi bir qism olmosni darhol, qolganini bir hafta davomida kunlik kirishda beradi.",
        "Birinchi xarid uchun ikki barobar bonusni Moonton belgilaydi va GemPay unga ta'sir qilmaydi; joriy narx botda ko'rsatiladi."
      ],
      "spendOn": [
        "Skin do'konidagi Elite, Epic va Legend skinlar",
        "Magic Wheel va Lucky Box aylantirishlari",
        "Starlight a'zoligi va uning fragment do'koni",
        "Weekly Diamond Pass hamda Twilight Pass obunalari",
        "Battle Point yetmaganda yangi geroyni ochish",
        "Nick o'zgartirish kartasi, emote va recall effektlari"
      ],
      "steps": [
        {
          "title": "Botda Mobile Legends bo'limini oching",
          "text": "@Gempayuz_bot katalogida Mobile Legends: Bang Bang'ni tanlaysiz. Ro'yxatda Magic Chess: Go Go alohida o'yin sifatida turadi, shuning uchun MLBB olmosi uchun aynan Mobile Legends bo'limiga kiring."
        },
        {
          "title": "User ID ni kiriting",
          "text": "Profildagi 8-9 xonali raqamni qavssiz, bo'shliqsiz kiritasiz. Bu akkauntning o'zini bildiradi, lekin yolg'iz o'zi yetarli emas."
        },
        {
          "title": "Server (Zone) ID ni alohida maydonga yozing",
          "text": "Qavs ichidagi to'rt xonali raqam ikkinchi maydonga kiritiladi. Ruscha manbalarda u Zone ID deb yuritiladi, farqi yo'q. Serversiz bir xil User ID boshqa serverdagi begona akkauntga to'g'ri kelishi mumkin."
        },
        {
          "title": "Chiqqan nickname'ni o'qing",
          "text": "Tizim o'yin serveridan nickname'ni bepul ko'rsatadi. O'zingizniki bo'lsa tasdiqlaysiz, notanish nick chiqsa Server ID ni qayta tekshirasiz. Tasdiqlanmaguncha hisobdan hech narsa yechilmaydi."
        },
        {
          "title": "Paketni tanlab so'mda to'lang",
          "text": "Olmos miqdorini yoki Starlight, Weekly Diamond Pass kabi obunani tanlaysiz va UzCard, HUMO, Click, Payme yoxud Paynet orqali to'laysiz. Olmos taxminan bir daqiqada akkauntga tushadi."
        }
      ]
    },
    "ru": {
      "metaTitle": "Купить алмазы Mobile Legends — донат MLBB | GemPay",
      "metaDescription": "Пополните алмазы MLBB по User ID и Server ID в скобках: бот бесплатно покажет ник, после подтверждения платите в сумах через Click, Payme или UzCard.",
      "h1": "Пополнение алмазов Mobile Legends: User ID и Server ID",
      "answer": "В Mobile Legends ID профиля состоит из двух частей: 12345678(1234) — первое число это User ID, а четыре цифры в скобках Server (Zone) ID, и нужны оба. В боте GemPay вы вводите оба номера, система бесплатно показывает nickname с игрового сервера, вы подтверждаете, платите в сумах, и алмазы приходят примерно за минуту. Пароль или SMS-код не запрашиваются.",
      "intro": [
        "В Mobile Legends: Bang Bang алмазы — основная валюта для магазина скинов, прокруток Magic Wheel и Lucky Box, подписки Starlight и открытия новых героев. Чаще их берут те, кто играет рейтинг, собирает сезонный скин или хочет сделать подарок другу. Карта смены ника, а также эффекты recall и эмоции продаются за ту же валюту.",
        "Внутриигровой магазин направляет оплату на баланс Google Play или App Store, где UzCard и HUMO часто не проходят; зарубежные топ-ап сайты работают в долларах и просят Visa, Mastercard или крипту. В боте GemPay счёт выставляется в сумах, оплату вы закрываете через Click, Payme, Paynet или местной картой, а алмазы приходят на аккаунт примерно за минуту."
      ],
      "spendOn": [
        "Скины Elite, Epic и Legend в магазине скинов",
        "Прокрутки Magic Wheel и Lucky Box",
        "Подписка Starlight и её магазин фрагментов",
        "Weekly Diamond Pass и подписка Twilight Pass",
        "Открытие нового героя, когда не хватает Battle Point",
        "Карта смены ника, эмоции и эффекты recall"
      ],
      "packages": [
        "Пакеты алмазов идут от мелкой ступени к крупной — обычно 86, 172, 257, 344, 429, 514, 706 и выше; каждый собран из основной и бонусной части, поэтому в списке встречается запись вида 78+8.",
        "Рядом с ними стоят два товара, где продаётся не количество алмазов, а срок: подписка Starlight (обычная и Plus) и Weekly Diamond Pass — первая открывает месячный трек с магазином фрагментов, вторая выдаёт часть алмазов сразу, а остальное за ежедневные входы в течение недели.",
        "Двойной бонус за первую покупку назначает Moonton, и GemPay на него не влияет; актуальная цена показывается в боте."
      ],
      "steps": [
        {
          "title": "Откройте раздел Mobile Legends в боте",
          "text": "В каталоге @Gempayuz_bot выбираете Mobile Legends: Bang Bang. В списке Magic Chess: Go Go стоит как отдельная игра, поэтому за алмазами MLBB заходите именно в раздел Mobile Legends."
        },
        {
          "title": "Введите User ID",
          "text": "8-9-значный номер из профиля вводится без скобок и без пробелов. Он обозначает сам аккаунт, но в одиночку его недостаточно."
        },
        {
          "title": "Server (Zone) ID впишите в отдельное поле",
          "text": "Четырёхзначное число из скобок вводится во второе поле. В русскоязычных источниках его называют Zone ID, разницы нет. Без сервера тот же User ID может совпасть с чужим аккаунтом на другом сервере."
        },
        {
          "title": "Прочитайте показанный nickname",
          "text": "Система бесплатно показывает nickname с игрового сервера. Если он ваш — подтверждаете, если ник незнакомый — перепроверяете Server ID. До подтверждения со счёта ничего не списывается."
        },
        {
          "title": "Выберите пакет и оплатите в сумах",
          "text": "Отмечаете количество алмазов или подписку вроде Starlight и Weekly Diamond Pass и платите через UzCard, HUMO, Click, Payme или Paynet. Алмазы приходят на аккаунт примерно за минуту."
        }
      ],
      "idSteps": [
        "Откройте игру и нажмите на аватар в левом верхнем углу экрана.",
        "В открывшемся окне Profile найдите строку ID под nickname.",
        "Номер выглядит как 12345678(1234): первая часть — User ID, четыре цифры в скобках — Server ID.",
        "Скопируйте ID нажатием, при ручном переносе легко ошибиться в одной цифре.",
        "Запомните и nickname — так будет проще сверить, когда бот его покажет."
      ],
      "gotcha": {
        "title": "Покупка Starlight в конце месяца",
        "text": "Подписка Starlight привязана к календарному месяцу: в какой бы день вы её ни взяли, она закрывается вместе с концом месяца. Если брать её в последние дни, сезонный скин у вас останется, но большую часть недельных заданий и наград за уровни собрать вы не успеете. Лучше брать её в начале месяца."
      },
      "faq": [
        {
          "q": "Можно ли пополнить алмазы на аккаунт Advance Server?",
          "a": "Advance Server — отдельный аккаунт: его User ID и Server ID отличаются от основной игры, а алмазы между ними не переносятся. Вводите в бота ID основного аккаунта. Если нужно именно для Advance Server, сначала напишите в @StarsPaymeeSupport и уточните, принимается ли такой заказ."
        },
        {
          "q": "Starlight и Weekly Diamond Pass работают одновременно?",
          "a": "Да, это отдельные товары, и они друг друга не отменяют. Weekly Diamond Pass выдаёт часть алмазов сразу, а остальное добавляет каждый день, когда вы заходите в игру в течение недели. Starlight открывает месячный трек, магазин фрагментов и добавки в рейтинге. Оба можно вести на одном аккаунте параллельно."
        },
        {
          "q": "Количество алмазов в пакете указано вместе с бонусом?",
          "a": "Да, пакеты MLBB собраны из основной и бонусной части — например, 78+8 даёт в сумме 86 алмазов. На аккаунт приходит полное число, но в отдельных recharge-акциях Moonton засчитывает только основную часть, поэтому условия акции лучше прочитать внутри игры."
        },
        {
          "q": "Сколько алмазов нужно на скин Legend из Magic Wheel?",
          "a": "Magic Wheel даёт гарантию по количеству прокруток — обычно после 200 прокруток, то есть за несколько тысяч алмазов. Вариант с большим числом прокруток выходит экономнее, чем крутить по одной. Условия меняются от ротации к ротации, поэтому перед покупкой пакета откройте подробности внутри игры."
        },
        {
          "q": "Если играю через эмулятор или на компьютере, ID будет другим?",
          "a": "Нет. В эмуляторе вы заходите в тот же аккаунт, User ID и Server ID не меняются. Откройте профиль и возьмите тот же номер вместе со скобками. Отдельного направления пополнения для телефона и компьютера нет."
        },
        {
          "q": "Можно ли заказать сразу скин вместо алмазов?",
          "a": "Нет, бот отправляет на ваш аккаунт алмазы, а скин вы выбираете сами внутри игры. При этом в аккаунт никто не заходит, и выбранный скин открывается на вашем профиле. Удобнее заранее посчитать нужное количество алмазов и взять подходящий пакет."
        }
      ]
    },
    "en": {
      "metaTitle": "Buy Mobile Legends Diamonds — MLBB Top Up | GemPay",
      "metaDescription": "Top up MLBB diamonds with your User ID and the Server ID in brackets: the bot shows your nick free, then you pay in so'm via Click, Payme or UzCard.",
      "h1": "Mobile Legends diamond top-up: User ID and Server ID",
      "answer": "In Mobile Legends the profile ID has two parts: 12345678(1234) — the first number is the User ID and the four digits in brackets are the Server (Zone) ID, and both are needed. You enter both in the GemPay bot, the system shows your nickname from the game server for free, you confirm, you pay in so'm, and the diamonds arrive in about a minute. No password or SMS code is requested.",
      "intro": [
        "In Mobile Legends: Bang Bang, diamonds are the main currency for the skin shop, Magic Wheel and Lucky Box spins, Starlight membership and unlocking new heroes. They are mostly bought by players who grind ranked, collect the seasonal skin or want to gift a friend. The name change card, along with recall and emote effects, is sold for the same currency.",
        "The in-game shop routes payment to your Google Play or App Store balance, where UzCard and HUMO often fail; foreign top-up sites work in dollars and ask for Visa, Mastercard or crypto. In the GemPay bot the bill comes in so'm, you close it with Click, Payme, Paynet or a local card, and the diamonds land on the account in about a minute."
      ],
      "spendOn": [
        "Elite, Epic and Legend skins in the skin shop",
        "Magic Wheel and Lucky Box spins",
        "Starlight membership and its fragment shop",
        "Weekly Diamond Pass and Twilight Pass subscriptions",
        "Unlocking a new hero when Battle Points fall short",
        "Name change card, emotes and recall effects"
      ],
      "packages": [
        "Diamond packs climb from small tiers upward — usually 86, 172, 257, 344, 429, 514, 706 and higher; each is put together from a base and a bonus part, which is why the list carries entries written like 78+8.",
        "Next to them sit two products that sell a period rather than an amount of diamonds: Starlight membership (standard and Plus) and Weekly Diamond Pass — the first opens a monthly track with the fragment shop, the second gives part of the diamonds at once and the rest across daily logins over a week.",
        "The double bonus on a first purchase is set by Moonton and GemPay has no effect on it; the current price is shown in the bot."
      ],
      "steps": [
        {
          "title": "Open the Mobile Legends section in the bot",
          "text": "In the @Gempayuz_bot catalogue you select Mobile Legends: Bang Bang. Magic Chess: Go Go is listed there as a separate game, so for MLBB diamonds go into the Mobile Legends section specifically."
        },
        {
          "title": "Enter the User ID",
          "text": "The 8-9 digit number from your profile goes in without brackets and without spaces. It stands for the account itself, but on its own it is not enough."
        },
        {
          "title": "Put the Server (Zone) ID in its own field",
          "text": "The four digit number from the brackets goes into the second field. Russian-language sources call it the Zone ID; there is no difference. Without the server, the same User ID can match a stranger's account on another server."
        },
        {
          "title": "Read the nickname that comes back",
          "text": "The system shows the nickname from the game server for free. If it is yours you confirm; if the nick is unfamiliar you recheck the Server ID. Nothing is charged until you confirm."
        },
        {
          "title": "Pick a pack and pay in so'm",
          "text": "You select a diamond amount or a subscription such as Starlight or Weekly Diamond Pass and pay with UzCard, HUMO, Click, Payme or Paynet. Diamonds land on the account in about a minute."
        }
      ],
      "idSteps": [
        "Open the game and tap the avatar in the top left of the screen.",
        "In the Profile window that opens, find the ID line under your nickname.",
        "The number looks like 12345678(1234): the first part is the User ID, the four digits in brackets are the Server ID.",
        "Copy the ID with a tap — one digit is easy to get wrong when typing it by hand.",
        "Note the nickname as well, so it is easy to compare when the bot shows it."
      ],
      "gotcha": {
        "title": "Buying Starlight at the end of the month",
        "text": "Starlight membership is tied to the calendar month: whichever day you buy it, it closes when the month ends. Take it in the last days and the season skin stays yours, but you will not have time to collect most of the weekly missions and tier rewards. It is better taken at the start of the month."
      },
      "faq": [
        {
          "q": "Can I top up diamonds on an Advance Server account?",
          "a": "Advance Server is a separate account: its User ID and Server ID differ from the main game, and diamonds do not carry over between them. Enter the ID of your main account in the bot. If you need it specifically for Advance Server, write to @StarsPaymeeSupport first and check whether such an order is accepted."
        },
        {
          "q": "Do Starlight and Weekly Diamond Pass work at the same time?",
          "a": "Yes, they are separate products and do not cancel each other out. Weekly Diamond Pass gives part of the diamonds right away and adds the rest each day you log into the game over a week. Starlight opens a monthly track, the fragment shop and rank extras. You can run both on one account in parallel."
        },
        {
          "q": "Is the diamond count in a pack listed with the bonus included?",
          "a": "Yes, MLBB packs are made of a base and a bonus part — 78+8, for example, gives 86 diamonds in total. The full amount lands on the account, but some Moonton recharge events count only the base part, so it is better to read the event terms inside the game."
        },
        {
          "q": "How many diamonds does a Legend skin from the Magic Wheel take?",
          "a": "The Magic Wheel gives its guarantee by number of spins — usually after 200 spins, which works out to several thousand diamonds. The multi-spin option comes out more economical than spinning one at a time. The terms change from rotation to rotation, so open the details inside the game before buying a pack."
        },
        {
          "q": "If I play on an emulator or on a computer, is the ID different?",
          "a": "No. On an emulator you log into the same account, and the User ID and Server ID do not change. Open the profile and take the same number together with the brackets. There is no separate top-up route for phone and computer."
        },
        {
          "q": "Can I order a skin directly instead of diamonds?",
          "a": "No, the bot sends diamonds to your account and you pick the skin inside the game yourself. Nobody logs into your account, and the skin you choose unlocks on your own profile. It is more convenient to work out the diamond amount in advance and take the matching pack."
        }
      ]
    }
  },
  "pubg-mobile": {
    "uz": {
      "answer": "PUBG Mobile'da server tanlash maydoni yo'q: 10-11 xonali Player ID akkauntni o'zi aniqlaydi. @Gempayuz_bot'da o'sha raqamni kiritasiz, bot o'yin serveridan niknemni bepul qaytaradi, siz tasdiqlaysiz, UC paketini tanlaysiz va so'mda — UzCard, HUMO, Click, Payme, Paynet — to'laysiz. Tasdiqlamaguningizcha hech narsa yechilmaydi. UC taxminan 2 daqiqada tushadi.",
      "faq": [
        {
          "q": "UC balansi qurilmagami yoki akkauntgami bog'lanadi?",
          "a": "Akkauntga. UC Player ID ga biriktiriladi, shuning uchun telefonni almashtirsangiz ham balans va inventar joyida qoladi. Ammo akkaunt Guest holatida bo'lsa, u bulutga saqlanmaydi: qurilmani almashtirish yoki o'yinni o'chirish bilan hammasi yo'qolishi mumkin. To'ldirishdan oldin akkauntni Facebook, Google Play, X yoki Game Center ga bog'lab qo'ying."
        },
        {
          "q": "PUBG Mobile KR yoki BGMI akkauntiga ham UC to'ldirsa bo'ladimi?",
          "a": "Yo'q. KR (Koreya/Yaponiya) va BGMI (Hindiston) — alohida ilovalar: ularda akkaunt ham, UC ham, to'ldirish tizimi ham boshqa va valyuta versiyalar orasida o'tmaydi. Katalogdagi PUBG Mobile global versiya uchun. Player ID ni qaysi ilovadan olganingizni aniqlab oling, aks holda ID topilmaydi yoki begona akkaunt chiqadi."
        },
        {
          "q": "UC tushdi — endi Royal Pass'ni qanday olaman?",
          "a": "UC balansga tushgach, o'yin lobbisidagi Royal Pass bo'limini ochib, Elite darajaga o'tishni tanlaysiz va UC bilan to'laysiz. Bu bosqich o'yin ichida bajariladi, GemPay tomonida emas. Kerakli UC miqdori sezondan sezonga o'zgarib turadi, shuning uchun paketni tanlashdan oldin o'yindagi joriy raqamga qarang."
        },
        {
          "q": "Emulyatorda (masalan GameLoop) o'ynayman — UC o'sha akkauntga tushadimi?",
          "a": "Ha. Emulyator alohida akkaunt yaratmaydi: telefonda ham, kompyuterda ham bir xil akkaunt bilan kirsangiz, Player ID bir xil bo'ladi va UC o'sha balansga tushadi. Faqat ID ni o'zingiz o'ynaydigan akkauntdan olganingizga ishonch hosil qiling."
        },
        {
          "q": "Rename Card bilan niknemni o'zgartirsam, bot qaysi nomni ko'rsatadi?",
          "a": "Yangi nomni. Player ID akkaunt yaratilganda beriladi va o'zgarmaydi, niknem esa Rename Card bilan almashtiriladi. Bot ID bo'yicha o'yin serveridan joriy nomni so'raydi, ya'ni tekshiruvda o'yin lobbisida turgan nom chiqadi. Eski nom chiqsa — ID boshqa akkauntniki bo'lishi mumkin, to'lamang."
        },
        {
          "q": "Uchinchi tomon orqali to'ldirish akkauntga bloklash xavfi tug'diradimi?",
          "a": "Bu yerda akkauntingizga hech kim kirmaydi: UC ochiq Player ID bo'yicha yetkaziladi, login, parol va SMS kodi umuman so'ralmaydi. Xavf boshqa yo'llarda — akkauntni sotuvchiga vaqtincha berish, chit dasturlar yoki «bepul UC» generatorlari. Aynan shular akkauntni yo'qotishning odatiy sababi."
        }
      ],
      "gotcha": {
        "title": "Niknemni o'qimasdan tasdiqlash",
        "text": "Player ID'da bitta raqam adashsa, u ko'pincha boshqa birovning amaldagi akkaunti bo'lib chiqadi va UC o'sha hisobga tushadi — o'yin ichida bunday o'tkazma orqaga qaytarilmaydi. Shuning uchun botdagi niknemni yuzaki emas, harfma-harf o'qing: nom sizniki bo'lmasa, to'lamang."
      },
      "h1": "PUBG Mobile UC sotib olish — Player ID orqali, so'mda",
      "idSteps": [
        "PUBG Mobile'ni oching va lobbining chap yuqori burchagidagi avatar ustiga bosing",
        "Ochilgan profil oynasida niknemingiz ostidagi 10-11 xonali raqamni toping — bu Player ID",
        "Raqam yonidagi nusxa belgisini bosing: ID buferga to'liq ko'chiriladi, bitta raqam tushib qolmaydi",
        "Botga qo'ying va chiqqan niknem o'zingizniki ekaniga ishonch hosil qilgach tasdiqlang"
      ],
      "intro": [
        "UC — PUBG Mobile'ning ichki valyutasi. Uni Royal Pass sezonini ochishga, Classic va Premium sandiqlarga, Mythic Forge aylanishlariga, X-Suit va qurol skinlariga sarflashadi. Ko'pchilik uni sezon boshida oladi: Royal Pass qanchalik erta olinsa, sezon davomida shuncha ko'p daraja mukofoti yig'iladi. Kimdir esa faqat Rename Card uchun kichik paket oladi. Balans akkauntga bog'lanadi, telefonni almashtirsangiz ham qoladi.",
        "O'zbekistondagi to'siq — to'lov bosqichi. Xalqaro to'ldirish saytlarining karta ro'yxatida odatda Visa, Mastercard, PayPal, Apple Pay yoki kripto turadi; UzCard va HUMO u yerda ko'rinmaydi, hisob esa dollarda yuritiladi va konvertatsiya qo'shimcha yo'qotish beradi. GemPay bu bosqichni olib tashlaydi: to'lov so'mda, mahalliy karta yoki hamyon orqali o'tadi, qo'llab-quvvatlash o'zbek tilida javob beradi."
      ],
      "metaDescription": "PUBG Mobile UC ni Player ID orqali to'ldiring: server maydoni yo'q, niknem to'lovdan oldin bepul tekshiriladi, so'mda UzCard yoki HUMO bilan, UC ~2 daqiqada.",
      "metaTitle": "PUBG Mobile UC sotib olish — UzCard va HUMO | GemPay",
      "packages": [
        "PUBG Mobile'da UC zinapoyasi odatda 60, 325, 660, 1800, 3850 va 8100 UC dan iborat bo'ladi; paket kattalashgani sayin asosiy miqdorga bonus UC qo'shiladi va u ham o'sha balansga tushadi.",
        "Royal Pass / Elite Pass hamda World of Wonder rejimi uchun WOW Coins alohida mahsulot sifatida uchraydi — ular UC emas, shuning uchun UC kutayotgan bo'lsangiz ularni tanlamang.",
        "Joriy narxlar va mavjud paketlar botda ko'rsatiladi."
      ],
      "spendOn": [
        "Royal Pass (o'yinda Royale Pass) va Elite darajaga o'tish",
        "Classic va Premium sandiqlar, mavsumiy qurol skinlari",
        "Mythic Forge aylanishlari va Mythic Emblem parchalari",
        "Lucky Spin va X-Suit chiqadigan tortishuvlar",
        "Rename Card — niknemni bir marta o'zgartirish",
        "Emote, mashina skinlari va do'stlarga sovg'alar"
      ],
      "steps": [
        {
          "title": "Botni oching va PUBG Mobile'ni tanlang",
          "text": "Telegramda @Gempayuz_bot ni oching va katalogdan PUBG Mobile'ni belgilang. O'yinga kirish, parol yoki SMS kodi talab qilinmaydi."
        },
        {
          "title": "Player ID ni kiriting — server tanlanmaydi",
          "text": "PUBG Mobile global akkaunt bilan ishlaydi, shuning uchun ba'zi o'yinlardagi kabi alohida Server ID maydoni yo'q. Profildagi 10-11 xonali raqamning o'zi kifoya."
        },
        {
          "title": "Niknemni tekshirib tasdiqlang",
          "text": "Bot o'yin serveridan niknemni qaytaradi va ekranda ko'rsatadi. Bu bosqich bepul va to'lovdan oldin bo'ladi: nom sizniki bo'lmasa, ortga qaytib ID ni tuzatasiz."
        },
        {
          "title": "UC paketini tanlang",
          "text": "Zinapoyadan kerakli miqdorni belgilang. Royal Pass yoki WOW Coins kerak bo'lsa, ular alohida mahsulot sifatida turadi — UC paketi bilan almashtirib yubormang."
        },
        {
          "title": "So'mda to'lang va UC ni kuting",
          "text": "UzCard, HUMO, Click, Payme yoki Paynet orqali to'laysiz. UC taxminan 2 daqiqada balansga tushadi; darhol ko'rinmasa, lobbini qayta oching."
        }
      ]
    },
    "ru": {
      "metaTitle": "Купить UC для PUBG Mobile — UzCard и HUMO | GemPay",
      "metaDescription": "Пополните UC в PUBG Mobile по Player ID: поле сервера не нужно, ник проверяется бесплатно до оплаты, платёж в сумах через UzCard или HUMO, UC за ~2 минуты.",
      "h1": "Купить UC для PUBG Mobile — по Player ID, в сумах",
      "answer": "В PUBG Mobile нет поля выбора сервера: 10-11-значный Player ID сам определяет аккаунт. В @Gempayuz_bot вы вводите этот номер, бот бесплатно возвращает ник с игрового сервера, вы подтверждаете, выбираете пакет UC и платите в сумах — UzCard, HUMO, Click, Payme, Paynet. Пока вы не подтвердите, ничего не списывается. UC приходит примерно за 2 минуты.",
      "intro": [
        "UC — внутренняя валюта PUBG Mobile. Её тратят на открытие сезона Royal Pass, на Classic и Premium сундуки, на прокрутки Mythic Forge, на X-Suit и скины оружия. Большинство берёт её в начале сезона: чем раньше открыт Royal Pass, тем больше наград за уровни соберётся за сезон. Кто-то берёт небольшой пакет только ради Rename Card. Баланс привязан к аккаунту и остаётся при смене телефона.",
        "Препятствие в Узбекистане — этап оплаты. В списке карт на международных сайтах пополнения обычно стоят Visa, Mastercard, PayPal, Apple Pay или крипта; UzCard и HUMO там не видно, счёт ведётся в долларах, а конвертация даёт дополнительные потери. GemPay убирает этот этап: оплата идёт в сумах, местной картой или кошельком, поддержка отвечает на узбекском."
      ],
      "spendOn": [
        "Royal Pass (в игре Royale Pass) и переход на уровень Elite",
        "Classic и Premium сундуки, сезонные скины оружия",
        "Прокрутки Mythic Forge и осколки Mythic Emblem",
        "Lucky Spin и розыгрыши, где выпадает X-Suit",
        "Rename Card — разовая смена ника",
        "Эмоции, скины машин и подарки друзьям"
      ],
      "packages": [
        "Лестница UC в PUBG Mobile обычно состоит из 60, 325, 660, 1800, 3850 и 8100 UC; чем крупнее пакет, тем больше бонусных UC добавляется к основному количеству, и они приходят на тот же баланс.",
        "Royal Pass / Elite Pass, а также WOW Coins для режима World of Wonder встречаются как отдельные товары — это не UC, поэтому не выбирайте их, если ждёте именно UC.",
        "Актуальные цены и доступные пакеты показываются в боте."
      ],
      "steps": [
        {
          "title": "Откройте бота и выберите PUBG Mobile",
          "text": "В Telegram откройте @Gempayuz_bot и отметьте PUBG Mobile в каталоге. Вход в игру, пароль или SMS-код не требуются."
        },
        {
          "title": "Введите Player ID — сервер не выбирается",
          "text": "PUBG Mobile работает с глобальным аккаунтом, поэтому отдельного поля Server ID, как в некоторых играх, здесь нет. Достаточно 10-11-значного номера из профиля."
        },
        {
          "title": "Проверьте ник и подтвердите",
          "text": "Бот запрашивает ник с игрового сервера и показывает его на экране. Этот шаг бесплатный и идёт до оплаты: если имя не ваше, вы возвращаетесь назад и исправляете ID."
        },
        {
          "title": "Выберите пакет UC",
          "text": "Отметьте нужное количество из лестницы. Если нужен Royal Pass или WOW Coins, они стоят как отдельные товары — не перепутайте их с пакетом UC."
        },
        {
          "title": "Оплатите в сумах и дождитесь UC",
          "text": "Оплата проходит через UzCard, HUMO, Click, Payme или Paynet. UC приходит на баланс примерно за 2 минуты; если сразу не видно, перезайдите в лобби."
        }
      ],
      "idSteps": [
        "Откройте PUBG Mobile и нажмите на аватар в левом верхнем углу лобби",
        "В открывшемся окне профиля найдите под ником 10-11-значный номер — это Player ID",
        "Нажмите значок копирования рядом с номером: ID скопируется целиком, ни одна цифра не потеряется",
        "Вставьте его в бота и подтвердите, убедившись, что показанный ник ваш"
      ],
      "gotcha": {
        "title": "Подтверждение ника не глядя",
        "text": "Если в Player ID ошибиться на одну цифру, он часто оказывается действующим аккаунтом другого человека, и UC уйдут на тот баланс — внутри игры такой перевод не отменяется. Поэтому читайте ник в боте не бегло, а посимвольно: если имя не ваше, не платите."
      },
      "faq": [
        {
          "q": "Баланс UC привязан к устройству или к аккаунту?",
          "a": "К аккаунту. UC привязывается к Player ID, поэтому при смене телефона баланс и инвентарь остаются на месте. Но если аккаунт в статусе Guest, он не сохраняется в облаке: при смене устройства или удалении игры всё может пропасть. Перед пополнением привяжите аккаунт к Facebook, Google Play, X или Game Center."
        },
        {
          "q": "Можно ли пополнить UC на аккаунт PUBG Mobile KR или BGMI?",
          "a": "Нет. KR (Корея/Япония) и BGMI (Индия) — отдельные приложения: там другой аккаунт, другие UC и другая система пополнения, и валюта между версиями не переносится. PUBG Mobile в каталоге — для глобальной версии. Уточните, из какого приложения ваш Player ID, иначе ID не найдётся или откроется чужой аккаунт."
        },
        {
          "q": "UC пришли — как теперь взять Royal Pass?",
          "a": "После зачисления UC откройте раздел Royal Pass в лобби игры, выберите переход на уровень Elite и оплатите его UC. Этот шаг делается внутри игры, а не на стороне GemPay. Нужное количество UC меняется от сезона к сезону, поэтому перед выбором пакета посмотрите текущее число в игре."
        },
        {
          "q": "Играю на эмуляторе (например GameLoop) — UC придут на тот же аккаунт?",
          "a": "Да. Эмулятор не создаёт отдельный аккаунт: если и на телефоне, и на компьютере вы входите под одним аккаунтом, Player ID один и тот же, и UC придут на тот же баланс. Главное — взять ID именно из того аккаунта, на котором вы играете."
        },
        {
          "q": "Если сменить ник через Rename Card, какое имя покажет бот?",
          "a": "Новое. Player ID выдаётся при создании аккаунта и не меняется, а ник заменяется через Rename Card. Бот запрашивает у игрового сервера текущее имя по ID, то есть при проверке выйдет то имя, что стоит в лобби игры. Если показалось старое — ID может быть от другого аккаунта, не платите."
        },
        {
          "q": "Есть ли риск блокировки аккаунта при пополнении через третью сторону?",
          "a": "Здесь в ваш аккаунт никто не заходит: UC доставляются по открытому Player ID, логин, пароль и SMS-код не запрашиваются вообще. Риск в другом — отдать аккаунт продавцу на время, читы или генераторы «бесплатных UC». Именно они и есть обычная причина потери аккаунта."
        }
      ]
    },
    "en": {
      "metaTitle": "Buy PUBG Mobile UC — UzCard and HUMO | GemPay",
      "metaDescription": "Top up PUBG Mobile UC by Player ID: no server field, your nickname is checked free before payment, pay in so'm with UzCard or HUMO, UC in about 2 minutes.",
      "h1": "Buy PUBG Mobile UC — by Player ID, paid in so'm",
      "answer": "PUBG Mobile has no server selection field: the 10-11 digit Player ID identifies the account on its own. You enter that number in @Gempayuz_bot, the bot returns your nickname from the game server for free, you confirm it, pick a UC pack and pay in so'm — UzCard, HUMO, Click, Payme, Paynet. Nothing is charged until you confirm. UC arrives in about 2 minutes.",
      "intro": [
        "UC is the in-game currency of PUBG Mobile. It goes on unlocking the Royal Pass season, on Classic and Premium crates, on Mythic Forge pulls, on X-Suits and weapon skins. Most players buy it at the start of a season: the earlier the Royal Pass is opened, the more tier rewards pile up over the season. Some take a small pack only for a Rename Card. The balance is tied to the account and stays with you when you change phones.",
        "The obstacle in Uzbekistan is the payment step. International top-up sites usually list Visa, Mastercard, PayPal, Apple Pay or crypto; UzCard and HUMO are not there, the bill is kept in dollars, and conversion costs extra. GemPay removes that step: payment goes through in so'm with a local card or wallet, and support answers in Uzbek."
      ],
      "spendOn": [
        "Royal Pass (Royale Pass in game) and the upgrade to Elite",
        "Classic and Premium crates, seasonal weapon skins",
        "Mythic Forge pulls and Mythic Emblem shards",
        "Lucky Spin and the draws that carry X-Suits",
        "Rename Card — a one-off nickname change",
        "Emotes, vehicle skins and gifts for friends"
      ],
      "packages": [
        "The UC ladder in PUBG Mobile usually runs 60, 325, 660, 1800, 3850 and 8100 UC; the larger the pack, the more bonus UC is added on top of the base amount, and it lands on the same balance.",
        "Royal Pass / Elite Pass, and WOW Coins for the World of Wonder mode, appear as separate products — they are not UC, so do not pick them if UC is what you are waiting for.",
        "Current prices and available packs are shown in the bot."
      ],
      "steps": [
        {
          "title": "Open the bot and pick PUBG Mobile",
          "text": "Open @Gempayuz_bot in Telegram and select PUBG Mobile from the catalogue. No game login, password or SMS code is required."
        },
        {
          "title": "Enter the Player ID — no server to choose",
          "text": "PUBG Mobile runs on a global account, so there is no separate Server ID field here as in some other games. The 10-11 digit number from your profile is enough."
        },
        {
          "title": "Check the nickname and confirm",
          "text": "The bot pulls the nickname from the game server and shows it on screen. This step is free and comes before payment: if the name is not yours, you go back and correct the ID."
        },
        {
          "title": "Choose a UC pack",
          "text": "Pick the amount you need from the ladder. If you want Royal Pass or WOW Coins, they sit there as separate products — do not mix them up with a UC pack."
        },
        {
          "title": "Pay in so'm and wait for the UC",
          "text": "You pay with UzCard, HUMO, Click, Payme or Paynet. UC lands on the balance in about 2 minutes; if you do not see it right away, reopen the lobby."
        }
      ],
      "idSteps": [
        "Open PUBG Mobile and tap the avatar in the top left corner of the lobby",
        "In the profile window that opens, find the 10-11 digit number under your nickname — that is the Player ID",
        "Tap the copy icon next to the number: the ID is copied in full and no digit goes missing",
        "Paste it into the bot and confirm once you are sure the nickname shown is yours"
      ],
      "gotcha": {
        "title": "Confirming the nickname without reading it",
        "text": "If one digit of the Player ID is wrong, it often turns out to be someone else's live account, and the UC goes to that balance — inside the game such a transfer cannot be reversed. So read the nickname in the bot character by character rather than at a glance: if the name is not yours, do not pay."
      },
      "faq": [
        {
          "q": "Is the UC balance tied to the device or to the account?",
          "a": "To the account. UC is attached to the Player ID, so the balance and inventory stay in place even if you change phones. But if the account is still a Guest account, it is not saved to the cloud: changing devices or deleting the game can wipe everything. Link the account to Facebook, Google Play, X or Game Center before topping up."
        },
        {
          "q": "Can I top up UC on a PUBG Mobile KR or BGMI account?",
          "a": "No. KR (Korea/Japan) and BGMI (India) are separate apps: the account, the UC and the top-up system are all different there, and the currency does not move between versions. The PUBG Mobile entry in the catalogue is for the global version. Check which app your Player ID came from, otherwise the ID will not be found or a stranger's account will come up."
        },
        {
          "q": "The UC arrived — how do I get the Royal Pass now?",
          "a": "Once the UC is on the balance, open the Royal Pass section in the game lobby, choose the upgrade to Elite and pay for it with UC. This step is done inside the game, not on the GemPay side. The UC amount needed changes from season to season, so look at the current number in game before picking a pack."
        },
        {
          "q": "I play on an emulator (GameLoop, for example) — will the UC reach that account?",
          "a": "Yes. An emulator does not create a separate account: if you log in with the same account on the phone and on the computer, the Player ID is the same and the UC lands on that balance. Just make sure you take the ID from the account you actually play on."
        },
        {
          "q": "If I change my nickname with a Rename Card, which name will the bot show?",
          "a": "The new one. The Player ID is issued when the account is created and never changes, while the nickname is swapped with a Rename Card. The bot asks the game server for the current name by ID, so the check returns the name that stands in your game lobby. If the old name comes up, the ID may belong to another account — do not pay."
        },
        {
          "q": "Does topping up through a third party risk a ban on the account?",
          "a": "Nobody logs into your account here: UC is delivered by the public Player ID, and no login, password or SMS code is requested at all. The risk lies elsewhere — handing the account to a seller for a while, cheat software, or so-called free UC generators. Those are the usual reason accounts get lost."
        }
      ]
    }
  },
  "steam": {
    "uz": {
      "metaTitle": "Steam hamyonini to'ldirish, login orqali | GemPay",
      "metaDescription": "Steam hamyoni account name - kirish logini bo'yicha to'ldiriladi, nik yoki email emas. So'mda UzCard, HUMO, Click, Payme, Paynet; balans bir daqiqada tushadi.",
      "h1": "Steam hamyonini so'mda to'ldirish: account name orqali, bir daqiqada",
      "answer": "Steam hamyoni account name bo'yicha to'ldiriladi - bu Steam'ga kirishda yoziladigan login, profildagi ko'rinadigan nik ham, email ham emas. O'yinlardagi kabi nik tasdiqlash bosqichi bu yerda yo'q, login birinchi martadanoq to'g'ri bo'lishi kerak. GemPay botida Steam tanlanadi, login kiritiladi, summa tanlanib so'mda to'lanadi, balans taxminan bir daqiqada akkauntga tushadi.",
      "intro": [
        "Steam Hamyon - o'yin ichidagi valyuta emas, akkauntning o'zidagi balans. U bilan Steam Store'dagi o'yinlar va DLC'lar, CS2 hamda Dota 2 kabi bepul o'yinlardagi ichki xaridlar, Community Market'dagi buyumlar to'lanadi. Uni ko'pincha chegirmalar davrini kutayotgan, wishlist'idagi o'yin arzonlashganda pul tayyor turishini istagan va xalqaro kartasi yo'q O'zbekistondagi PC o'yinchilari to'ldiradi.",
        "Steam kassasi UzCard va HUMO'ni qabul qilmaydi, xalqaro karta esa hammada ham yo'q va u bilan to'lov ko'pincha rad javobi bilan tugaydi. GemPay to'lovni so'mda, odatiy mahalliy usullar orqali oladi - UzCard, HUMO, Click, Payme, Paynet - va balansni akkauntga o'zi tushiradi. Konvertatsiya yoki chet el kartasini qidirish kerak bo'lmaydi."
      ],
      "spendOn": [
        "Steam Store'da o'yin, DLC va oldindan buyurtma",
        "CS2'da Prime Status va skin xaridlari",
        "Dota 2'da Dota Plus obunasi va ichki buyumlar",
        "Community Market'da skin va buyum sotib olish",
        "Do'stga Steam Gift orqali o'yin sovg'a qilish"
      ],
      "packages": [
        "Steam'da o'yinlardagi kabi paket zinapoyasi yo'q - bu yerda hamyon summalari ishlaydi va botda bir nechta tayyor to'ldirish miqdori turadi.",
        "Tanlangan summa akkaunt hamyoniga tushadi, hech qanday o'yinga bog'lanmaydi va keyin o'yinga, DLC'ga, Market buyumiga yoki bepul o'yindagi ichki xaridga sarflanadi, balans esa akkaunt qaysi valyutada ochilgan bo'lsa, o'sha valyutada ko'rinadi.",
        "Joriy miqdorlar va narx botda ko'rsatiladi."
      ],
      "steps": [
        {
          "title": "Botda Steam bo'limini oching",
          "text": "@Gempayuz_bot ni ishga tushiring va ro'yxatdan Steam'ni tanlang. Bu o'yin paketi emas, hamyon to'ldirish: tushgan balansni keyin o'zingiz istagan narsaga sarflaysiz."
        },
        {
          "title": "Account name (login) ni kiriting",
          "text": "Steam'ga kirishda yoziladigan loginni yozing. Profildagi ko'rinadigan nik ham, email manzil ham bu maydonga to'g'ri kelmaydi - ular boshqa ma'lumotlar."
        },
        {
          "title": "Loginni o'zingiz solishtiring",
          "text": "O'yinlarda tizim nikni ko'rsatadi va siz tasdiqlaysiz, Steam'da esa bunday tekshiruv yo'q. Shuning uchun yuborishdan oldin loginni Account details sahifasidagi qator bilan solishtiring."
        },
        {
          "title": "Summani tanlab so'mda to'lang",
          "text": "Botdagi to'ldirish miqdorlaridan birini tanlaysiz va UzCard, HUMO, Click, Payme yoki Paynet orqali to'laysiz. Narx botda ko'rsatiladi, to'lov tasdiqlanmaguncha hech narsa yechilmaydi."
        },
        {
          "title": "Balansni Steam'da ko'ring",
          "text": "Taxminan bir daqiqada mablag' akkaunt hamyoniga tushadi va Steam'da yuqori o'ngdagi ismingiz yonida ko'rinadi. Savol chiqsa, @StarsPaymeeSupport ga chekni yuboring."
        }
      ],
      "idSteps": [
        "Steam ilovasida yuqori o'ngdagi ismingizni bosing va Account details bo'limini oching.",
        "Sahifa boshidagi Account name qatorini toping - bu Steam'ga kirishda yoziladigan login.",
        "Profil ostida ko'rinadigan nik va email bu emas, aynan shu qatorni oling.",
        "Mobil Steam ilovasida ham: menyu, so'ng Account details - o'sha qator shu yerda.",
        "Loginni harfma-harf ko'chiring, oldida yoki oxirida bo'shliq qolib ketmasin."
      ],
      "gotcha": {
        "title": "Nik bilan loginni almashtirib yuborish",
        "text": "Steam'da ko'rinadigan nik istalgan vaqtda o'zgaradi va boshqalarda ham takrorlanadi, account name esa akkauntning o'zgarmas logini. Bu yerda nikni tasdiqlash oynasi yo'q: noto'g'ri login yozilsa, mablag' begona akkauntga tushadi va Valve hamyon pulini akkauntlar orasida ko'chirmaydi. Yuborishdan oldin loginni ikki marta solishtiring."
      },
      "faq": [
        {
          "q": "Loginimni eslay olmasam, uni qayerdan ko'raman?",
          "a": "Steam'da yuqori o'ngdagi ismingizni bosib Account details sahifasini oching - login o'sha yerda yozilgan. Email manzil login emas, brauzer yoki ilova saqlab qolgan avtomatik kirish esa loginni ko'rsatmaydi."
        },
        {
          "q": "Steam Guard yoqilgan bo'lsa to'ldirish ishlaydimi?",
          "a": "Ha. To'ldirish akkauntga kirish orqali emas, tashqaridan bajariladi, shuning uchun Steam Guard yoki mobil autentifikatorni o'chirish kerak emas. Parol, kirish kodi yoki sessiya hech qachon so'ralmaydi."
        },
        {
          "q": "Hamyondagi mablag'ni boshqa akkauntga o'tkazsa bo'ladimi?",
          "a": "Yo'q. Valve qoidasiga ko'ra hamyon balansi akkauntlar orasida ko'chirilmaydi va naqd pulga qaytarilmaydi. U faqat o'sha akkauntdagi xaridlarga ishlaydi, shu sababli login to'g'ri kiritilishi muhim."
        },
        {
          "q": "Balans qaysi valyutada ko'rinadi?",
          "a": "Steam hamyoni valyutasini akkaunt ro'yxatdan o'tgan mamlakat belgilaydi, GemPay emas. Siz to'lovni so'mda qilasiz, balans esa akkauntingiz uchun ochilgan valyutada turadi. Regionni Steam do'konidagi narx ko'rsatkichidan bilib olasiz."
        },
        {
          "q": "Yangi, hali xarid qilinmagan akkauntni to'ldirsa bo'ladimi?",
          "a": "Ha, login mavjud bo'lsa yetarli. Steam'dagi limited akkaunt cheklovi esa Valve belgilagan miqdordagi xarid yoki to'ldirishdan keyin ochiladi - buni Steam o'zi hal qiladi, GemPay bu jarayonga aralashmaydi."
        },
        {
          "q": "Balans bilan do'stimga o'yin sovg'a qila olamanmi?",
          "a": "Ha, Steam do'konidagi sovg'a sifatida sotib olish tugmasi hamyon balansidan to'laydi va o'yin do'stlar ro'yxatidagi odamga boradi. Valve ayrim regionlar orasida sovg'a yuborishni cheklaydi, buni Steam tekshiradi."
        }
      ]
    },
    "ru": {
      "metaTitle": "Пополнение кошелька Steam по логину | GemPay",
      "metaDescription": "Кошелек Steam пополняется по account name - логину для входа, а не по нику или email. В сумах: UzCard, HUMO, Click, Payme, Paynet; баланс за минуту.",
      "h1": "Пополнение кошелька Steam в сумах: по account name, за минуту",
      "answer": "Кошелек Steam пополняется по account name - это логин, который вводится при входе в Steam, а не видимый в профиле ник и не email. Шага с подтверждением ника, как в играх, здесь нет, логин должен быть верным с первого раза. В боте GemPay выбирается Steam, вводится логин, выбирается сумма и оплачивается в сумах, баланс приходит на аккаунт примерно за минуту.",
      "intro": [
        "Steam Кошелек - это не внутриигровая валюта, а баланс на самом аккаунте. Им оплачиваются игры и DLC в Steam Store, внутренние покупки в бесплатных играх вроде CS2 и Dota 2, предметы на Community Market. Чаще всего его пополняют PC-игроки из Узбекистана, которые ждут период скидок, хотят держать деньги наготове к моменту, когда игра из вишлиста подешевеет, и у которых нет международной карты.",
        "Касса Steam не принимает UzCard и HUMO, а международная карта есть не у всех, и оплата ею часто заканчивается отказом. GemPay принимает оплату в сумах привычными местными способами - UzCard, HUMO, Click, Payme, Paynet - и сам зачисляет баланс на аккаунт. Ни конвертация, ни поиск зарубежной карты не понадобятся."
      ],
      "spendOn": [
        "Игры, DLC и предзаказы в Steam Store",
        "Prime Status и покупка скинов в CS2",
        "Подписка Dota Plus и внутренние предметы в Dota 2",
        "Покупка скинов и предметов на Community Market",
        "Подарок игры другу через Steam Gift"
      ],
      "packages": [
        "В Steam нет лестницы пакетов, как в играх - здесь работают суммы кошелька, и в боте стоит несколько готовых сумм пополнения.",
        "Выбранная сумма приходит в кошелек аккаунта, не привязывается ни к одной игре и дальше тратится на игру, DLC, предмет с Market или внутреннюю покупку в бесплатной игре, а баланс отображается в той валюте, в которой открыт аккаунт.",
        "Актуальные суммы и цена показываются в боте."
      ],
      "steps": [
        {
          "title": "Откройте раздел Steam в боте",
          "text": "Запустите @Gempayuz_bot и выберите Steam из списка. Это не игровой пакет, а пополнение кошелька: пришедший баланс вы дальше тратите на то, что захотите."
        },
        {
          "title": "Введите account name (логин)",
          "text": "Напишите логин, который вводится при входе в Steam. Ни видимый в профиле ник, ни адрес email в это поле не подходят - это другие данные."
        },
        {
          "title": "Сверьте логин сами",
          "text": "В играх система показывает ник, и вы подтверждаете, а в Steam такой проверки нет. Поэтому перед отправкой сверьте логин со строкой на странице Account details."
        },
        {
          "title": "Выберите сумму и оплатите в сумах",
          "text": "Вы выбираете одну из сумм пополнения в боте и платите через UzCard, HUMO, Click, Payme или Paynet. Цена показывается в боте, до подтверждения оплаты ничего не списывается."
        },
        {
          "title": "Посмотрите баланс в Steam",
          "text": "Примерно за минуту средства приходят в кошелек аккаунта и видны в Steam рядом с вашим именем в правом верхнем углу. Если появится вопрос, отправьте чек в @StarsPaymeeSupport."
        }
      ],
      "idSteps": [
        "В Steam нажмите на свое имя в правом верхнем углу и откройте раздел Account details.",
        "Найдите в начале страницы строку Account name - это логин, который вводится при входе в Steam.",
        "Видимый под профилем ник и email - это не он, берите именно эту строку.",
        "В мобильном приложении Steam так же: меню, затем Account details - та же строка там.",
        "Перенесите логин буква в букву, чтобы в начале или в конце не остался пробел."
      ],
      "gotcha": {
        "title": "Перепутать ник с логином",
        "text": "Видимый в Steam ник меняется в любой момент и повторяется у других людей, а account name - неизменный логин аккаунта. Окна подтверждения ника здесь нет: если написать неверный логин, средства уйдут на чужой аккаунт, а Valve не переносит деньги кошелька между аккаунтами. Перед отправкой сверьте логин дважды."
      },
      "faq": [
        {
          "q": "Если я не помню свой логин, где его посмотреть?",
          "a": "В Steam нажмите на свое имя в правом верхнем углу и откройте страницу Account details - логин написан там. Адрес email логином не является, а сохраненный браузером или приложением автоматический вход логин не показывает."
        },
        {
          "q": "Работает ли пополнение, если включен Steam Guard?",
          "a": "Да. Пополнение выполняется извне, а не через вход в аккаунт, поэтому отключать Steam Guard или мобильный аутентификатор не нужно. Пароль, код входа или сессия никогда не запрашиваются."
        },
        {
          "q": "Можно ли перевести средства кошелька на другой аккаунт?",
          "a": "Нет. По правилам Valve баланс кошелька не переносится между аккаунтами и не возвращается наличными. Он работает только для покупок на том же аккаунте, поэтому важно ввести логин верно."
        },
        {
          "q": "В какой валюте отображается баланс?",
          "a": "Валюту кошелька Steam определяет страна, в которой зарегистрирован аккаунт, а не GemPay. Вы платите в сумах, а баланс стоит в той валюте, которая открыта для вашего аккаунта. Регион можно узнать по отображению цен в магазине Steam."
        },
        {
          "q": "Можно ли пополнить новый аккаунт, на котором еще не было покупок?",
          "a": "Да, достаточно того, что логин существует. А ограничение limited-аккаунта в Steam снимается после покупки или пополнения на установленную Valve сумму - это решает сам Steam, GemPay в этот процесс не вмешивается."
        },
        {
          "q": "Можно ли балансом подарить игру другу?",
          "a": "Да, кнопка покупки в подарок в магазине Steam оплачивается с баланса кошелька, и игра уходит человеку из списка друзей. Valve ограничивает отправку подарков между некоторыми регионами, это проверяет сам Steam."
        }
      ]
    },
    "en": {
      "metaTitle": "Steam wallet top-up by account name | GemPay",
      "metaDescription": "A Steam wallet is topped up by account name - the sign-in login, not a nickname or email. Pay in so'm: UzCard, HUMO, Click, Payme, Paynet; balance in a minute.",
      "h1": "Top up a Steam wallet in so'm: by account name, in a minute",
      "answer": "A Steam wallet is topped up by account name - the login you type when signing in to Steam, not the nickname shown on the profile and not the email. There is no nickname confirmation step here as there is with games, so the login has to be right the first time. In the GemPay bot you pick Steam, enter the login, choose an amount and pay in so'm, and the balance lands on the account in about a minute.",
      "intro": [
        "The Steam Wallet is not an in-game currency but a balance on the account itself. It pays for games and DLC in the Steam Store, in-game purchases in free games such as CS2 and Dota 2, and items on the Community Market. It is most often topped up by PC players in Uzbekistan who are waiting for a sale period, who want money ready for the moment a game on their wishlist drops in price, and who have no international card.",
        "The Steam checkout does not accept UzCard or HUMO, an international card is not something everyone has, and paying with one often ends in a decline. GemPay takes the payment in so'm through the usual local methods - UzCard, HUMO, Click, Payme, Paynet - and puts the balance on the account itself. No conversion and no hunt for a foreign card are needed."
      ],
      "spendOn": [
        "Games, DLC and pre-orders in the Steam Store",
        "Prime Status and skin purchases in CS2",
        "The Dota Plus subscription and in-game items in Dota 2",
        "Buying skins and items on the Community Market",
        "Gifting a game to a friend through Steam Gift"
      ],
      "packages": [
        "Steam has no pack ladder the way games do - here wallet amounts are used, and the bot holds several ready top-up amounts.",
        "The chosen amount lands in the account wallet, is not tied to any game and is then spent on a game, DLC, a Market item or an in-game purchase in a free game, while the balance is shown in whatever currency the account was opened in.",
        "The current amounts and the price are shown in the bot."
      ],
      "steps": [
        {
          "title": "Open the Steam section in the bot",
          "text": "Start @Gempayuz_bot and pick Steam from the list. This is not a game pack but a wallet top-up: you then spend the balance that arrives on whatever you want."
        },
        {
          "title": "Enter the account name (login)",
          "text": "Type the login you use when signing in to Steam. Neither the nickname shown on the profile nor the email address fits this field - those are different details."
        },
        {
          "title": "Check the login yourself",
          "text": "With games the system shows the nickname and you confirm it, but in Steam there is no such check. So before sending, compare the login with the line on the Account details page."
        },
        {
          "title": "Choose an amount and pay in so'm",
          "text": "You pick one of the top-up amounts in the bot and pay with UzCard, HUMO, Click, Payme or Paynet. The price is shown in the bot, and nothing is charged until the payment is confirmed."
        },
        {
          "title": "Check the balance in Steam",
          "text": "In about a minute the funds land in the account wallet and appear in Steam next to your name in the top right. If a question comes up, send the receipt to @StarsPaymeeSupport."
        }
      ],
      "idSteps": [
        "In Steam, click your name in the top right and open the Account details section.",
        "Find the Account name line at the top of the page - that is the login you type when signing in to Steam.",
        "The nickname shown under the profile and the email are not it; take exactly that line.",
        "It is the same in the Steam mobile app: menu, then Account details - the same line is there.",
        "Copy the login letter by letter, and make sure no space is left at the start or the end."
      ],
      "gotcha": {
        "title": "Mixing up the nickname and the login",
        "text": "The nickname shown in Steam can be changed at any time and is repeated by other people, while the account name is the account's permanent login. There is no nickname confirmation window here: if the wrong login is entered, the funds go to someone else's account, and Valve does not move wallet money between accounts. Compare the login twice before sending."
      },
      "faq": [
        {
          "q": "If I cannot remember my login, where do I look it up?",
          "a": "In Steam, click your name in the top right and open the Account details page - the login is written there. An email address is not the login, and an automatic sign-in saved by the browser or the app does not show it."
        },
        {
          "q": "Does the top-up work if Steam Guard is enabled?",
          "a": "Yes. The top-up is done from the outside, not by signing in to the account, so there is no need to turn off Steam Guard or the mobile authenticator. A password, a login code or a session is never requested."
        },
        {
          "q": "Can wallet funds be moved to another account?",
          "a": "No. Under Valve's rules the wallet balance is not transferred between accounts and is not returned as cash. It works only for purchases on that same account, which is why entering the login correctly matters."
        },
        {
          "q": "Which currency is the balance shown in?",
          "a": "The Steam wallet currency is set by the country the account is registered in, not by GemPay. You pay in so'm, while the balance sits in the currency opened for your account. You can tell the region from how prices are displayed in the Steam store."
        },
        {
          "q": "Can a new account with no purchases yet be topped up?",
          "a": "Yes, it is enough that the login exists. The limited account restriction in Steam is lifted after a purchase or top-up of the amount Valve sets - Steam handles that itself, and GemPay does not take part in that process."
        },
        {
          "q": "Can I use the balance to gift a game to a friend?",
          "a": "Yes, the buy as a gift button in the Steam store is paid from the wallet balance, and the game goes to a person on your friends list. Valve restricts gifting between some regions, and Steam checks that itself."
        }
      ]
    }
  },
};

/** Berilgan o'yin va til uchun matn (yo'q bo'lsa `null`). */
export function gameCopy(slug: string, locale: Locale): GameCopy | null {
  return GAME_CONTENT[slug]?.[locale] ?? null;
}

/**
 * Sahifa indekslanishga tayyormi.
 *
 * Matni yo'q sahifa qolipdagi umumiy jumlalar bilan chiqadi — ya'ni
 * qardosh sahifalarning nusxasi bo'ladi. Bunday sahifa `noindex` olishi
 * kerak: indeksga tushib, keyin «duplicate» deb tashlanishidan ko'ra,
 * umuman kirmagani yaxshi. Matn yozilgach belgi o'z-o'zidan yo'qoladi.
 */
export function isReadyToIndex(slug: string, locale: Locale): boolean {
  return Boolean(GAME_CONTENT[slug]?.[locale]);
}
