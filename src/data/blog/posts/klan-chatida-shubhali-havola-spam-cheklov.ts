// Avtoblogyoz yasagan maqola (2026-11-05). Niyat: Klan yoki squad chatida jamoadoshidan «bu xabar uchun bloklanasiz» degan havola olgan o'yinchi «klan chatida shubhali havola telegram cheklov» kabi so'rov bilan uni ochsa nomidan spam ketib, akkaunti cheklanishini va jamoani qanday himoyalashni qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/faq_spam

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "klan-chatida-shubhali-havola-spam-cheklov",
  game: null,
  type: "trust",
  datePublished: "2026-11-05",
  dateModified: "2026-11-05",
  keywords: ["klan chatida shubhali havola telegram","telegram shubhali havola spam cheklov","squad chatida havola xavfli","telegram akkaunt cheklandi nima qilish","bu xabar uchun bloklanasiz havola","telegram spambot cheklov olib tashlash","o'yinchi telegram akkaunt himoyasi","подозрительная ссылка в чате клана телеграм","телеграм ограничил аккаунт за спам","ссылка вы будете заблокированы телеграм","spambot снять ограничение телеграм","как защитить чат клана в телеграм"],
  locales: {
    uz: {
      title: "Klan chatida shubhali havola keldi: Telegram akkauntni cheklaydimi?",
      metaTitle: "Klan chatida shubhali havola keldi",
      metaDescription: "Darhol emas: Spam FAQ’ga ko‘ra cheklov «Report spam» shikoyatlarini moderatorlar ko‘rib chiqqach, vaqtinchalik qo‘yiladi. Havolani baribir ochmang.",
      excerpt: "Darhol emas: Spam FAQ’ga ko‘ra cheklov «Report spam» shikoyatlarini moderatorlar ko‘rib chiqqach, vaqtinchalik qo‘yiladi. Havolani baribir ochmang.",
      answer: "Darhol emas: Spam FAQ’ga ko‘ra cheklov «Report spam» shikoyatlarini moderatorlar ko‘rib chiqqach, vaqtinchalik qo‘yiladi. Havolani baribir ochmang.",
      body: [
        {
          t: "h2",
          id: "klan-chatidagi-bloklanasiz-havolasini-ochish",
          text: "Klan chatidagi «bloklanasiz» havolasini ochish akkauntni shu zahoti cheklaydimi?",
        },
        {
          t: "p",
          text: "Telegram’ning rasmiy <a href=\"https://telegram.org/faq_spam\" target=\"_blank\" rel=\"noopener\">Spam FAQ</a> sahifasi cheklovni havola ochilgan lahza bilan bog‘lamaydi. U yerda boshqa tartib tasvirlangan. Foydalanuvchilar chatda «Report spam» tugmasini bosadi va xabarlar moderatorlarga boradi. Moderatorlar xabarni shunga loyiq deb topsagina akkaunt vaqtincha cheklanadi.",
        },
        {
          t: "p",
          text: "Telegram bu shikoyatlarni odamlar ham ko‘rib chiqishini alohida yozadi. Ya’ni «bosdingiz — hisob shu zahoti muzlaydi» degan tasavvur rasmiy tavsifga mos kelmaydi. Telegram bunday mexanizmni yangi funksiya sifatida e’lon qilgani esa bu maqolada tasdiqlanmagan.",
        },
        {
          t: "p",
          text: "Ochiq qolgan savol ham bor: havolani ochishning o‘zi nomingizdan avtomatik xabar yuboradimi? Rasmiy manbada buning tasdig‘i ham, rad etilishi ham topilmadi. Shu sabab amaliy qoida oddiy: klan chatida notanish havola ko‘rsangiz, uni bosmang va avval yuborgan odamdan so‘rang.",
        },
        {
          t: "h2",
          id: "nega-jamoadoshdan-kelgan-havolaga-ham",
          text: "Nega jamoadoshdan kelgan havolaga ham ishonib bo‘lmaydi?",
        },
        {
          t: "p",
          text: "Squad chatida odamlar bir-biriga ishonadi: birga reyting ko‘tarasiz, birga turnirga chiqasiz. Aldovchilar aynan shu ishonchdan foydalanadi.",
        },
        {
          t: "p",
          text: "Odatiy vaziyat: reyting o‘yinidan oldin chatda ko‘pdan beri jim yurgan a’zo «Klan turniri uchun ro‘yxat, bugun yopiladi» deb havola tashlaydi. Bir-ikki kishi darhol bosadi, chunki nik tanish. Keyin ma’lum bo‘ladiki, u turnir haqida hech narsa bilmagan.",
        },
        {
          t: "list",
          items: [
            "<strong>Tanish nik xavfsizlik belgisi emas.</strong> Jamoadosh havolani boshqa chatdan olib, o‘ylamay tashlagan bo‘lishi mumkin.",
            "<strong>Niqob o‘yin mavzusida bo‘ladi.</strong> Masalan: «turnir ro‘yxatiga yozil», «klanga skin giveaway», «UC tarqatilyapti», «squad uchun yangi guruh ochdik». Bular faqat misollar, statistika emas.",
            "<strong>Shoshiltirish — alohida signal.</strong> «Tez bos, aks holda bloklanasiz» kabi matn o‘ylashga vaqt qoldirmaslik uchun yoziladi.",
            "<strong>Tekshirish oson.</strong> Jamoadoshga shaxsiy chatda, havolani qo‘shmasdan yozing: «Klan chatidagi havolani o‘zing yubordingmi?». Javob kelmaguncha havolaga tegmang.",
          ],
        },
        {
          t: "p",
          text: "Agar chatda gift sotib olish yoki «garant» bot orqali savdo taklif qilinsa, bu boshqa sxema. U haqda <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">o‘yin chatidagi gift firibgarligi</a> maqolasida yozilgan.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "klan-chatidagi-qaysi-havola-odatiy",
          text: "Klan chatidagi qaysi havola odatiy, qaysi biri shubhali?",
        },
        {
          t: "p",
          text: "Bitta belgi hali xulosa emas. Lekin ikki-uchtasi birga chiqsa, havolani ochmaslik kerak.",
        },
        {
          t: "table",
          head: [
            "Belgi",
            "Odatiy holat",
            "Shubhali holat",
          ],
          rows: [
            [
              "Kim yubordi",
              "Admin yoki pin qilingan xabar",
              "Uzoq jim yurgan a’zo birdan havola tashladi",
            ],
            [
              "Matn ohangi",
              "Xotirjam, izoh bilan",
              "«Tez bos», «bloklanasiz», «faqat bugun»",
            ],
            [
              "Nima so‘raladi",
              "Hech narsa yoki faqat ochiq nik",
              "Kod, parol, raqam yoki oldindan to‘lov",
            ],
            [
              "Qayerga olib boradi",
              "Klanga ma’lum kanal yoki guruh",
              "Notanish bot, sayt yoki yangi guruh",
            ],
            [
              "Jamoadosh tasdiqlaydimi",
              "Ha, savolga oddiy javob beradi",
              "Javob yo‘q yoki yana o‘sha havolani tashlaydi",
            ],
          ],
        },
        {
          t: "p",
          text: "Spam FAQ’da odamlar so‘ralmagan reklama, havolalar, guruh va kanallarga taklif havolalari hamda tasodifiy rasmlarni yoqtirmasligi yozilgan. Shikoyatga sabab bo‘lgan xabar rasm, taklif havolasi yoki oddiy «salom» ham bo‘lishi mumkin. Bundan amaliy xulosa: shubhali havolani «ogohlantirish uchun» boshqa chatlarga tarqatsangiz, shikoyat o‘zingizga tushishi mumkin.",
        },
        {
          t: "h2",
          id: "squad-chatidagi-shikoyat-akkaunt-cheklovigacha",
          text: "Squad chatidagi shikoyat akkaunt cheklovigacha qanday yetib boradi?",
        },
        {
          t: "p",
          text: "Rasmiy tavsifga ko‘ra jarayon quyidagicha:",
        },
        {
          t: "list",
          items: [
            "nomingizdan odamlar so‘ramagan xabar ketadi;",
            "uni olganlar «Report spam» tugmasini bosadi;",
            "moderatorlar xabarlarni ko‘rib chiqadi;",
            "shikoyat asosli topilsa, akkaunt vaqtincha cheklanadi.",
          ],
        },
        {
          t: "p",
          text: "Cheklov aloqani butunlay uzmaydi. Spam FAQ’ga ko‘ra cheklangan akkaunt o‘z raqamini kontakt sifatida saqlagan odamlarga yoza oladi. U o‘ziga birinchi yozgan har kimga javob ham bera oladi.",
        },
        {
          t: "p",
          text: "O‘yinchi tilida: raqamingizni saqlagan jamoadoshlar bilan aloqa qoladi. Ammo sizni tanimaydigan turnir tashkilotchisiga birinchi bo‘lib yoza olmasligingiz mumkin. Guruh chatlariga cheklov qanday ta’sir qilishi bu manbada alohida tasvirlanmagan.",
        },
        {
          t: "p",
          text: "Muddat haqida: agar bu birinchi marta bo‘lsa va siz sanoat miqyosidagi spamer bo‘lmasangiz, cheklov ehtimol bir necha kun atrofida davom etadi. Qoidabuzarlik takrorlansa, muddat uzayadi. Notanishlarga keraksiz xabar yozish davom etsa, bu imkoniyat butunlay yo‘qolishi mumkin.",
        },
        {
          t: "h2",
          id: "havola-ochilib-ketdi-ozimni-va",
          text: "Havola ochilib ketdi: o‘zimni va squadni qanday himoyalayman?",
        },
        {
          t: "p",
          text: "Vahima qilmang: rasmiy tavsifga ko‘ra cheklov shikoyatlar ko‘rib chiqilgandan keyin keladi. Lekin quyidagi tartibni kechiktirmang.",
        },
        {
          t: "steps",
          items: [
            {
              title: "Ochilgan sahifada hech narsa kiritmang",
              text: "Kod, parol, telefon raqami va karta ma’lumoti yozilmaydi. Sahifani yoping.",
            },
            {
              title: "Nomingizdan nima ketganini tekshiring",
              text: "Klan, squad va shaxsiy chatlarni ko‘zdan kechiring: siz yozmagan xabar bormi.",
            },
            {
              title: "Klan adminiga xabar bering, lekin havolani qayta yubormang",
              text: "Uni so‘z bilan tasvirlang yoki skrinshot qiling.",
            },
            {
              title: "Jamoadoshlarni havolasiz ogohlantiring",
              text: "Bitta xabarni klan chatiga yozing. Bir xil matnni ko‘p notanish odamga ommaviy jo‘natmang — bu ham so‘ralmagan xabar sifatida shikoyat olishi mumkin.",
            },
            {
              title: "Cheklov tushsa va u nohaq bo‘lsa, @SpamBot’ga yozing",
              text: "Telegram aynan shu yo‘lni tavsiya qiladi.",
            },
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Faol seanslarni yopish va ikki bosqichli tekshiruv bo‘yicha Telegram’ning rasmiy ko‘rsatmalari bu maqolada tekshirilmagan. Ilova sozlamalaridagi maxfiylik bo‘limini va <a href=\"https://telegram.org\" target=\"_blank\" rel=\"noopener\">telegram.org</a> sahifalarini o‘zingiz ko‘rib chiqing.",
        },
        {
          t: "h2",
          id: "klan-admini-chatni-shubhali-havolalardan",
          text: "Klan admini chatni shubhali havolalardan qanday himoyalaydi?",
        },
        {
          t: "p",
          text: "Admin uchun eng foydali vosita — texnik sozlama emas, oldindan kelishilgan qoidalar. Ular klan tavsifida yoki pin qilingan xabarda tursin.",
        },
        {
          t: "list",
          items: [
            "<strong>Kerakli havolalar faqat pinda.</strong> Turnir ro‘yxati, klan kanali va qoidalar havolasi bitta pin qilingan xabarda turadi. Boshqa joydan kelgan «rasmiy» havolaga ishonilmaydi.",
            "<strong>Hech kim parol so‘ramaydi.</strong> Qoidaga yozing: donat, sovg‘a yoki giveaway uchun klanda hech kim parol, SMS kod yoki o‘yin akkaunti loginini so‘ramaydi.",
            "<strong>Shubhali havola darhol o‘chiriladi.</strong> Admin xabarni o‘chiradi, a’zolarga havolasiz izoh beradi va yuborgan a’zo bilan alohida gaplashadi. Uning akkaunti boshqa birovning qo‘lida bo‘lishi mumkin.",
            "<strong>«Ogohlantirish» zanjiri to‘xtatiladi.</strong> A’zolar havolani bir-biriga «ko‘r, shuni ochma» deb tarqatmasin: qayta yuborilgan havola baribir havola bo‘lib qoladi.",
          ],
        },
        {
          t: "p",
          text: "Guruh moderatsiyasi vositalarining aniq sozlamalari bu yerda tekshirilmagani uchun keltirilmadi. Guruhdagi stiker bilan bog‘liq xavf haqida <a href=\"/blog/oyin-guruhida-telegram-stiker-xavfi-himoya\">o‘yin guruhidagi stiker xavfi</a> maqolasini o‘qing.",
        },
        {
          t: "h2",
          id: "cheklov-tushdi-spambotga-qachon-yozish",
          text: "Cheklov tushdi: @SpamBot’ga qachon yozish, qachon kutish kerak?",
        },
        {
          t: "p",
          text: "Cheklov nohaq qo‘yilganiga ishonchingiz komil bo‘lsa, rasmiy sahifa bitta yo‘lni ko‘rsatadi — @SpamBot’ga murojaat qilish.",
        },
        {
          t: "note",
          tone: "info",
          text: "Telegram eng yaxshi tizimlar, algoritmlar va yaxshi tayyorlangan odamlar ham ba’zan xato qilishini tan oladi.",
        },
        {
          t: "p",
          text: "Yangi SIM bilan o‘ynaydiganlar uchun alohida holat bor. Spam FAQ’ga ko‘ra ayrim raqamlar oldingi egasining faoliyati yoki muayyan virtual/VOIP raqam bo‘lgani sababli tizimning haddan tashqari qattiq javobiga sabab bo‘lishi mumkin. Hech kimga ortiqcha yozmasdan cheklov olgan bo‘lsangiz, murojaatda shuni aytib o‘ting.",
        },
        {
          t: "note",
          tone: "info",
          text: "Agar xabarlarni haqiqatan o‘zingiz yuborgan bo‘lsangiz, cheklovni muddatidan oldin olib tashlab bo‘lmaydi — Telegram buni ochiq yozadi. Bu holatda muddat tugashini kutasiz.",
        },
        {
          t: "p",
          text: "Murojaat qanchalik tez yoki qanchalik tez-tez natija berishi haqida rasmiy ma’lumot yo‘q. Shuning uchun «albatta yechiladi» ham, «foydasi yo‘q» ham deb bo‘lmaydi.",
        },
        {
          t: "h2",
          id: "stars-premium-yoki-ucni-jamoadoshga",
          text: "Stars, Premium yoki UC’ni jamoadoshga havolasiz qanday yetkazish mumkin?",
        },
        {
          t: "p",
          text: "Klan chatida «sovg‘a uchun havolaga kiring» degan xabarlardan qochishning eng oson yo‘li — havola umuman kerak bo‘lmagan usulni tanlash. Buning uchun ochiq identifikator yetadi: Stars va Premium uchun @username, o‘yin valyutasi uchun Player ID.",
        },
        {
          t: "p",
          text: "<a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> orqali:",
        },
        {
          t: "list",
          items: [
            `<strong>Telegram Stars</strong> — donasi ${som(STARS_UNIT_CARD, "uz")} (UzCard/HUMO karta o‘tkazmasi yoki bot balansi) yoki ${som(STARS_UNIT_ONLINE, "uz")} (Click yoki Uzum Bank orqali). Bir buyurtmada 50 dan 10 000 tagacha olinadi va bir necha soniyada tushadi. Faqat @username kerak.`,
            `<strong>Telegram Premium</strong> — 3 oy ${som(premium(3), "uz")}, 6 oy ${som(premium(6), "uz")}, 12 oy ${som(premium(12), "uz")}. Obuna Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi, akkauntga kirilmaydi.`,
            "<strong>UC, olmos, CP</strong> — faqat Player ID kerak, parol hech qachon so‘ralmaydi. Nik to‘lovdan oldin tekshirib ko‘rsatiladi, valyuta 1–5 daqiqada tushadi.",
          ],
        },
        {
          t: "p",
          text: "O‘yin valyutasi Telegram akkauntiga emas, Player ID bo‘yicha o‘yin akkauntiga tushadi. Telegram uzilsa donat bilan nima bo‘lishi <a href=\"/blog/telegram-uzilsa-oyin-donati-buyurtmasi\">bu maqolada</a> yozilgan. Vositachi qaysi ma’lumotni so‘rashi mumkin, qaysisini so‘ramasligi kerak — <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">o‘yin hisobini xavfsiz to‘ldirish</a> qo‘llanmasida. Obuna jamoadoshga nima berishini <a href=\"/blog/telegram-premium-oyinchi-uchun\">Premium o‘yinchiga nima beradi</a> maqolasidan bilib olasiz.",
        },
        {
          t: "p",
          text: "GemPay mustaqil xizmat va Telegram yoki o‘yin ishlab chiquvchilari bilan rasmiy aloqasi borligini da’vo qilmaydi.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Spam FAQ",
              href: "https://telegram.org/faq_spam",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Havolani eng ishonchli jamoadoshim tashladi — baribir tekshirishim kerakmi?",
          a: "Ha. Nik tanish bo‘lsa ham, havola boshqa chatdan ko‘chirilgan yoki akkaunt boshqa qo‘lda bo‘lishi mumkin. Unga shaxsiy chatda, havolasiz qisqa savol yozing va javob kelguncha bosmang.",
        },
        {
          q: "Shubhali havolani klan adminiga ko‘rsatish uchun forward qilsam bo‘ladimi?",
          a: "Qayta yubormagan ma’qul: Spam FAQ’da so‘ralmagan havolalar shikoyatga sabab bo‘ladigan xabarlar qatorida tilga olinadi. Adminga skrinshot yuboring yoki havola qayerga olib borishini so‘z bilan yozing.",
        },
        {
          q: "Cheklov paytida squad chatida jamoadoshlarim bilan yozisha olamanmi?",
          a: "Rasmiy sahifa faqat shaxsiy yozishmalarni tasvirlaydi: raqamingizni saqlaganlarga yozasiz va sizga birinchi yozganlarga javob berasiz. Guruh chatlari haqida u yerda alohida gap yo‘q, buni amalda sinab ko‘ring.",
        },
        {
          q: "Turnir tashkilotchisiga yoza olmayapman — bu spam cheklovimi?",
          a: "Akkauntingiz cheklangan va tashkilotchi raqamingizni saqlamagan bo‘lsa, shunday bo‘lishi mumkin. Undan birinchi yozishini so‘rang, shunda javob qaytara olasiz; cheklov asossiz bo‘lsa, @SpamBot’ga murojaat qiling.",
        },
        {
          q: "Telegram cheklansa, o‘yindagi UC yoki olmos balansim ham yo‘qoladimi?",
          a: "Spam cheklovi Telegram akkauntiga tegishli, o‘yin valyutasi esa o‘yin akkauntida turadi. Faqat shubhali sahifaga o‘yin login yoki parolini yozgan bo‘lsangiz, o‘yin akkauntidagi kirish ma’lumotlarini zudlik bilan yangilang.",
        },
        {
          q: "Klan chatida «UC tarqatamiz, havolaga kiring» desa, ishonsa bo‘ladimi?",
          a: "Bunday xabarni shubhali deb qabul qiling, ayniqsa kod, parol yoki oldindan to‘lov so‘ralsa. GemPay’da UC olish uchun faqat Player ID kiritiladi — hech qanday havolaga kirib login berilmaydi.",
        },
      ],
    },
    ru: {
      title: "Подозрительная ссылка в чате клана: Telegram ограничит аккаунт?",
      metaTitle: "Подозрительная ссылка в чате клана",
      metaDescription: "Не сразу: по Spam FAQ ограничение временное и вводится после того, как модераторы проверят жалобы «Report spam». Но ссылку всё равно не открывайте.",
      excerpt: "Не сразу: по Spam FAQ ограничение временное и вводится после того, как модераторы проверят жалобы «Report spam». Но ссылку всё равно не открывайте.",
      answer: "Не сразу: по Spam FAQ ограничение временное и вводится после того, как модераторы проверят жалобы «Report spam». Но ссылку всё равно не открывайте.",
      body: [
        {
          t: "h2",
          id: "klan-chatidagi-bloklanasiz-havolasini-ochish",
          text: "Если открыть ссылку «вас заблокируют» из чата клана, аккаунт ограничат сразу?",
        },
        {
          t: "p",
          text: "Официальная страница <a href=\"https://telegram.org/faq_spam\" target=\"_blank\" rel=\"noopener\">Spam FAQ</a> не связывает ограничение с моментом, когда вы открыли ссылку. Там описан другой порядок. Пользователи нажимают в чате кнопку «Report spam», и сообщения уходят модераторам. Аккаунт временно ограничивают, только если модераторы решат, что сообщения это заслужили.",
        },
        {
          t: "p",
          text: "Telegram отдельно пишет, что такие жалобы проверяют и живые люди. То есть представление «нажал — аккаунт тут же заморозили» не совпадает с официальным описанием. А то, что Telegram объявлял такой механизм новой функцией, в этой статье не подтверждено.",
        },
        {
          t: "p",
          text: "Остаётся и открытый вопрос: отправляет ли само открытие ссылки автоматическое сообщение от вашего имени? В официальных источниках не нашлось ни подтверждения, ни опровержения. Поэтому практическое правило простое: увидели в чате клана незнакомую ссылку — не нажимайте и сначала спросите того, кто её прислал.",
        },
        {
          t: "h2",
          id: "nega-jamoadoshdan-kelgan-havolaga-ham",
          text: "Почему нельзя доверять даже ссылке от тиммейта?",
        },
        {
          t: "p",
          text: "В чате сквада люди доверяют друг другу: вместе поднимаете рейтинг, вместе выходите на турниры. Мошенники используют именно это доверие.",
        },
        {
          t: "p",
          text: "Типичная ситуация: перед рейтинговой игрой участник, который давно молчал в чате, кидает ссылку «Список на клановый турнир, сегодня закрывается». Пара человек сразу жмёт — ник-то знакомый. Потом выясняется, что он ничего ни о каком турнире не знал.",
        },
        {
          t: "list",
          items: [
            "<strong>Знакомый ник — не признак безопасности.</strong> Тиммейт мог взять ссылку из другого чата и переслать не задумываясь.",
            "<strong>Маскировка — под игровую тему.</strong> Например: «запишись в список турнира», «розыгрыш скина для клана», «раздают UC», «открыли новую группу для сквада». Это только примеры, а не статистика.",
            "<strong>Спешка — отдельный сигнал.</strong> Текст вроде «жми быстрее, иначе заблокируют» пишут, чтобы не оставить времени подумать.",
            "<strong>Проверить несложно.</strong> Напишите тиммейту в личку, не вставляя ссылку: «Это ты кинул ссылку в чат клана?». Пока нет ответа, ссылку не трогайте.",
          ],
        },
        {
          t: "p",
          text: "Если в чате предлагают купить подарок или провести сделку через бота-«гаранта», это другая схема. О ней — в статье про <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">мошенничество с подарками в игровом чате</a>.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "klan-chatidagi-qaysi-havola-odatiy",
          text: "Какая ссылка в чате клана обычная, а какая подозрительная?",
        },
        {
          t: "p",
          text: "Один признак ещё ни о чём не говорит. Но если совпадают два-три, ссылку лучше не открывать.",
        },
        {
          t: "table",
          head: [
            "Признак",
            "Обычная ситуация",
            "Подозрительная ситуация",
          ],
          rows: [
            [
              "Кто прислал",
              "Админ или закреплённое сообщение",
              "Давно молчавший участник вдруг кинул ссылку",
            ],
            [
              "Тон текста",
              "Спокойный, с пояснением",
              "«Жми быстрее», «заблокируют», «только сегодня»",
            ],
            [
              "Что просят",
              "Ничего или только открытый ник",
              "Код, пароль, номер или предоплату",
            ],
            [
              "Куда ведёт",
              "Известный клану канал или группа",
              "Незнакомый бот, сайт или новая группа",
            ],
            [
              "Подтверждает ли тиммейт",
              "Да, нормально отвечает на вопрос",
              "Молчит или снова кидает ту же ссылку",
            ],
          ],
        },
        {
          t: "p",
          text: "В Spam FAQ сказано, что людям не нравится получать непрошеную рекламу, ссылки, приглашения в группы и каналы и случайные фото. Причиной жалобы может стать фото, ссылка-приглашение или даже простое «привет». Практический вывод: если разошлёте подозрительную ссылку по другим чатам «для предупреждения», жалоба может прилететь вам.",
        },
        {
          t: "h2",
          id: "squad-chatidagi-shikoyat-akkaunt-cheklovigacha",
          text: "Как жалоба из чата сквада доходит до ограничения аккаунта?",
        },
        {
          t: "p",
          text: "По официальному описанию процесс выглядит так:",
        },
        {
          t: "list",
          items: [
            "от вашего имени уходит сообщение, которого люди не просили;",
            "получатели нажимают «Report spam»;",
            "модераторы рассматривают сообщения;",
            "если жалоба признана обоснованной, аккаунт временно ограничивают.",
          ],
        },
        {
          t: "p",
          text: "Ограничение не обрывает связь полностью. По Spam FAQ, ограниченный аккаунт может писать тем, у кого его номер сохранён в контактах. И всегда может ответить любому, кто написал первым.",
        },
        {
          t: "p",
          text: "На языке игрока: связь с тиммейтами, которые сохранили ваш номер, останется. А вот первым написать организатору турнира, который вас не знает, может не получиться. Как ограничение влияет на групповые чаты, в этом источнике отдельно не описано.",
        },
        {
          t: "p",
          text: "О сроках: если это случилось впервые и вы не спамер промышленного масштаба, ограничение, скорее всего, продлится несколько дней. При повторных нарушениях срок растёт. Если продолжать писать незнакомым людям нежелательные сообщения, эту возможность можно потерять навсегда.",
        },
        {
          t: "h2",
          id: "havola-ochilib-ketdi-ozimni-va",
          text: "Ссылка уже открылась: как защитить себя и сквад?",
        },
        {
          t: "p",
          text: "Без паники: по официальному описанию ограничение приходит после рассмотрения жалоб. Но с этим порядком действий не тяните.",
        },
        {
          t: "steps",
          items: [
            {
              title: "Ничего не вводите на открывшейся странице",
              text: "Ни кода, ни пароля, ни номера телефона, ни данных карты. Закройте страницу.",
            },
            {
              title: "Проверьте, что ушло от вашего имени",
              text: "Просмотрите чаты клана, сквада и личные переписки: нет ли сообщений, которых вы не писали.",
            },
            {
              title: "Сообщите админу клана, но не пересылайте ссылку",
              text: "Опишите её словами или сделайте скриншот.",
            },
            {
              title: "Предупредите тиммейтов без ссылки",
              text: "Напишите одно сообщение в чат клана. Не рассылайте одинаковый текст множеству незнакомых людей — это тоже могут отметить как непрошеное сообщение.",
            },
            {
              title: "Если ограничение пришло и оно несправедливое, напишите в @SpamBot",
              text: "Именно этот путь рекомендует Telegram.",
            },
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Официальные инструкции Telegram по завершению активных сеансов и двухэтапной проверке в этой статье не проверялись. Загляните сами в раздел конфиденциальности в настройках приложения и на страницы <a href=\"https://telegram.org\" target=\"_blank\" rel=\"noopener\">telegram.org</a>.",
        },
        {
          t: "h2",
          id: "klan-admini-chatni-shubhali-havolalardan",
          text: "Как админу клана защитить чат от подозрительных ссылок?",
        },
        {
          t: "p",
          text: "Самый полезный инструмент админа — не техническая настройка, а заранее оговорённые правила. Пусть они будут в описании клана или в закреплённом сообщении.",
        },
        {
          t: "list",
          items: [
            "<strong>Нужные ссылки — только в закрепе.</strong> Список на турнир, канал клана и правила лежат в одном закреплённом сообщении. «Официальной» ссылке из другого места не верят.",
            "<strong>Пароль никто не спрашивает.</strong> Пропишите в правилах: ради доната, подарка или розыгрыша в клане никто не просит пароль, SMS-код или логин игрового аккаунта.",
            "<strong>Подозрительная ссылка удаляется сразу.</strong> Админ удаляет сообщение, поясняет участникам без ссылки и отдельно говорит с отправителем. Его аккаунт может быть в чужих руках.",
            "<strong>Цепочку «предупреждений» останавливают.</strong> Пусть участники не пересылают ссылку друг другу с подписью «смотри, это не открывай»: пересланная ссылка всё равно остаётся ссылкой.",
          ],
        },
        {
          t: "p",
          text: "Конкретные настройки инструментов модерации групп здесь не приводятся, потому что они не проверялись. О риске, связанном со стикерами в группе, читайте в статье про <a href=\"/blog/oyin-guruhida-telegram-stiker-xavfi-himoya\">опасность стикеров в игровой группе</a>.",
        },
        {
          t: "h2",
          id: "cheklov-tushdi-spambotga-qachon-yozish",
          text: "Ограничение пришло: когда писать в @SpamBot, а когда ждать?",
        },
        {
          t: "p",
          text: "Если вы уверены, что ограничение наложено по ошибке, официальная страница указывает один путь — обратиться в @SpamBot.",
        },
        {
          t: "note",
          tone: "info",
          text: "Telegram признаёт, что даже лучшие системы, алгоритмы и хорошо обученные люди иногда ошибаются.",
        },
        {
          t: "p",
          text: "Для тех, кто играет с новой SIM-картой, есть отдельный случай. По Spam FAQ некоторые номера могут вызывать слишком жёсткую реакцию системы — из-за действий прежних владельцев или потому, что это определённые виртуальные/VOIP-номера. Если вы получили ограничение, никому лишнего не писав, укажите это в обращении.",
        },
        {
          t: "note",
          tone: "info",
          text: "Если сообщения действительно отправляли вы сами, снять ограничение досрочно нельзя — Telegram пишет об этом прямо. В этом случае остаётся дождаться окончания срока.",
        },
        {
          t: "p",
          text: "Официальных данных о том, насколько быстро и как часто обращение помогает, нет. Поэтому нельзя сказать ни «точно снимут», ни «бесполезно».",
        },
        {
          t: "h2",
          id: "stars-premium-yoki-ucni-jamoadoshga",
          text: "Как подарить тиммейту Stars, Premium или UC без всяких ссылок?",
        },
        {
          t: "p",
          text: "Проще всего уйти от сообщений «перейди по ссылке за подарком» — выбрать способ, где ссылка вообще не нужна. Достаточно открытого идентификатора: @username для Stars и Premium, Player ID для игровой валюты.",
        },
        {
          t: "p",
          text: "Через <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>:",
        },
        {
          t: "list",
          items: [
            `<strong>Telegram Stars</strong> — ${som(STARS_UNIT_CARD, "ru")} за штуку (перевод с карты UzCard/HUMO или с баланса бота) или ${som(STARS_UNIT_ONLINE, "ru")} (через Click или Uzum Bank). В одном заказе — от 50 до 10 000 штук, приходят за несколько секунд. Нужен только @username.`,
            `<strong>Telegram Premium</strong> — 3 месяца ${som(premium(3), "ru")}, 6 месяцев ${som(premium(6), "ru")}, 12 месяцев ${som(premium(12), "ru")}. Подписка подключается через официальный механизм подарков Telegram, вход в аккаунт не нужен.`,
            "<strong>UC, алмазы, CP</strong> — нужен только Player ID, пароль не спрашивают никогда. Ник проверяется и показывается до оплаты, валюта приходит за 1–5 минут.",
          ],
        },
        {
          t: "p",
          text: "Игровая валюта зачисляется не на Telegram-аккаунт, а на игровой аккаунт по Player ID. Что будет с донатом, если Telegram не работает, — <a href=\"/blog/telegram-uzilsa-oyin-donati-buyurtmasi\">в этой статье</a>. Какие данные посредник может спросить, а какие не должен, — в инструкции о <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">безопасном пополнении игрового счёта</a>. Что подписка даёт тиммейту, расскажет статья <a href=\"/blog/telegram-premium-oyinchi-uchun\">что Premium даёт игроку</a>.",
        },
        {
          t: "p",
          text: "GemPay — независимый сервис и не заявляет об официальной связи с Telegram или разработчиками игр.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Spam FAQ",
              href: "https://telegram.org/faq_spam",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Ссылку кинул мой самый надёжный тиммейт — всё равно проверять?",
          a: "Да. Даже при знакомом нике ссылка могла быть скопирована из другого чата, а аккаунт — оказаться в чужих руках. Коротко спросите его в личке, не вставляя ссылку, и не нажимайте до ответа.",
        },
        {
          q: "Можно переслать подозрительную ссылку админу клана, чтобы показать?",
          a: "Лучше не пересылать: в Spam FAQ непрошеные ссылки упоминаются среди сообщений, на которые жалуются. Отправьте админу скриншот или опишите словами, куда ведёт ссылка.",
        },
        {
          q: "Смогу ли я переписываться с тиммейтами в чате сквада во время ограничения?",
          a: "Официальная страница описывает только личную переписку: можно писать тем, кто сохранил ваш номер, и отвечать тем, кто написал первым. О групповых чатах там отдельно ничего нет — проверьте на практике.",
        },
        {
          q: "Не могу написать организатору турнира — это ограничение за спам?",
          a: "Возможно, если ваш аккаунт ограничен, а организатор не сохранил ваш номер. Попросите его написать первым — тогда сможете ответить; если ограничение необоснованное, обратитесь в @SpamBot.",
        },
        {
          q: "Если Telegram ограничат, пропадёт ли баланс UC или алмазов в игре?",
          a: "Ограничение за спам касается Telegram-аккаунта, а игровая валюта лежит на игровом аккаунте. Но если вы вводили на подозрительной странице логин или пароль от игры, срочно смените данные для входа в игровой аккаунт.",
        },
        {
          q: "В чате клана пишут «раздаём UC, переходите по ссылке» — можно верить?",
          a: "Считайте такое сообщение подозрительным, особенно если просят код, пароль или предоплату. В GemPay для покупки UC вводится только Player ID — никуда переходить и отдавать логин не нужно.",
        },
      ],
    },
  },
};

export default article;
