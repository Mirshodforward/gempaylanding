// AVTOMATIK KIRITILGAN — `npm run ingest`.
// Manba reja: .plan/articles/pubg-uc-qayerdan-sotib-olish-taqqoslash.json
// Qo'lda tahrirlash mumkin; keyingi ingest faqat yangi fayllarni qo'shadi.

import type { Article } from "../types";

const article: Article = {
  slug: "pubg-uc-qayerdan-sotib-olish-taqqoslash",
  game: "pubg-mobile",
  type: "comparison",
  datePublished: "2026-08-23",
  dateModified: "2026-08-23",
  pillar: false,
  keywords: ["pubg uc qayerdan sotib olish","midasbuy uzcard qabul qiladimi","midasbuy o'zbekiston to'lov","pubg uc telegram sotuvchi xavfli","pubg uc rasmiy sayt","arzon uc qayerdan","midasbuy узбекистан оплата картой"],
  locales: {
    uz: {
      title: "Midasbuy O'zbekistonda ishlaydimi: PUBG UC to'lov usullari taqqoslandi",
      metaTitle: "Midasbuy UzCard qabul qiladimi: UC to'lov yo'llari",
      metaDescription: "Midasbuy O'zbekistonda UzCard va HUMO ni qabul qiladimi, xalqaro saytlar-chi? PUBG UC to'lov usullari jadvalda taqqoslandi: valyuta, xavf, tezlik.",
      excerpt: "Midasbuy UzCard va HUMO ni qabul qilmaydi. PUBG UC olishning to'rt yo'li — rasmiy sayt, xalqaro saytlar, Telegram sotuvchilari va GemPay — jadvalda taqqoslandi.",
      answer: "Midasbuy — PUBG UC ning rasmiy to'ldirish markazi, lekin O'zbekiston foydalanuvchisi uchun to'lov bosqichida to'xtaydi: usullar ro'yxatida UzCard va HUMO odatda yo'q. Xalqaro qayta sotuvchi saytlar ham dollarda ishlaydi va xorijiy karta so'raydi. Mahalliy karta bilan to'lanadigan yo'l — Telegram bot orqali, faqat Player ID bo'yicha to'ldirish. GemPay shu yo'ldan boradi va to'lovdan oldin niknemni bepul ko'rsatadi.",
      body: [
    { t: "h2", id: "qisqa-javob", text: "Qisqa javob: qaysi usul O'zbekistonda haqiqatan ishlaydi" },
    { t: "p", text: "Savolning amaliy tomoni deyarli har doim bitta narsaga borib taqaladi: karta. PUBG Mobile uchun UC sotadigan joylar ko'p, lekin ularning katta qismi O'zbekiston kartasi bilan to'lash imkonini bermaydi. Midasbuy rasmiy kanal bo'lsa ham, to'lov oynasiga yetganda ro'yxatda UzCard va HUMO chiqmaydi va jarayon aynan shu yerda to'xtaydi. Xalqaro qayta sotuvchi saytlarda manzara shunga o'xshash: kredit karta, PayPal, Apple Pay va kriptovalyuta bor, mahalliy karta esa yo'q." },
    { t: "p", text: "Shuning uchun amalda tanlov <strong>qaysi joy yaxshiroq</strong> degan savoldan <strong>qaysi joy mening kartamni qabul qiladi</strong> degan savolga qisqaradi. Quyida to'rt usul yonma-yon qo'yilgan: rasmiy Midasbuy, xalqaro qayta sotuvchi saytlar, Telegramdagi shaxsiy sotuvchilar va GemPay. Har birining kuchli tomoni ham, zaif tomoni ham bor. Agar UC ning o'zi nima ekani va paketlar bir-biridan nimasi bilan farq qilishi hali aniq bo'lmasa, avval <a href=\"/blog/pubg-uc-nima-paketlar-royal-pass\">UC va Royal Pass paketlari haqidagi maqolani</a> o'qib chiqing." },
    { t: "facts", items: [{"k":"Rasmiy kanal","v":"Midasbuy — Tencent'ning to'ldirish markazi"},{"k":"Mahalliy karta","v":"Midasbuy va xalqaro saytlarda UzCard, HUMO odatda yo'q"},{"k":"Xalqaro saytlar valyutasi","v":"Dollar, ustiga bank konvertatsiyasi qo'shiladi"},{"k":"So'mda to'lov","v":"UzCard, HUMO, Click, Payme, Paynet — GemPay botida"},{"k":"To'lovdan oldin","v":"Player ID bo'yicha niknem bepul ko'rsatiladi"},{"k":"Qo'llab-quvvatlash","v":"O'zbek tilida, @StarsPaymeeSupport"}] },
    { t: "h2", id: "tort-usul-jadval", text: "To'rt usul yonma-yon: to'liq jadval" },
    { t: "p", text: "Jadvaldagi <strong>faqat Player ID</strong> ustuni akkauntga kirish talab qilinmasligini, ya'ni parol yoki SMS kod so'ralmasligini bildiradi. <strong>To'lovdan oldin niknem</strong> ustuni esa pul yechilishidan avval ID kimga tegishli ekani ekranda ko'rsatiladimi yoki yo'qmi — bu noto'g'ri ID ga pul ketishining oldini oladigan yagona real himoya." },
    { t: "table", caption: "To'rt usul yonma-yon. To'lov usullari ro'yxati va yetkazish muddatlarini xizmatlar o'zgartirib turadi, shuning uchun jadval joriy holatga qaraydi.", head: ["Usul","Valyuta","To'lov usullari","Faqat Player ID","To'lovdan oldin niknem","Yetkazish","Qo'llab-quvvatlash tili","Asosiy xavf"], rows: [["Midasbuy (rasmiy)","Chet el valyutasi","Xalqaro karta, xorijiy hamyonlar","+","+","Odatda tez","Ingliz va rus tili","To'lov bosqichida to'xtash"],["Xalqaro qayta sotuvchilar","Dollar","Kredit karta, PayPal, Apple Pay, kripto","+","-","15 daqiqadan bir necha soatgacha","Ingliz tili, mashina tarjimasi","Konvertatsiya va komissiya"],["Telegram shaxsiy sotuvchilari","So'm","Shaxsiy kartaga o'tkazma","Har xil","-","Sotuvchiga bog'liq","O'zbek tili","Chek va kafolat yo'q"],["GemPay","So'm","UzCard, HUMO, Click, Payme, Paynet","+","+","Odatda 2 daqiqada","O'zbek tili","Rasmiy nashriyot hamkori emas"]] },
    { t: "h2", id: "midasbuy", text: "Midasbuy: rasmiy, lekin mahalliy kartani qabul qilmaydi" },
    { t: "p", text: "Midasbuy — Tencent'ning o'z to'ldirish markazi. Ya'ni bu qayta sotuvchi emas, o'yin nashriyotining rasmiy kanali. Ishonch tomondan bu variantga savol yo'q: aksiya davrlari, paketga qo'shiladigan bonus UC va mavsumiy tadbirlar birinchi bo'lib o'sha yerda paydo bo'ladi. Player ID ni kiritganingizda sayt akkaunt nomini ko'rsatadi, shuning uchun begona ID ga tushib qolish xavfi u yerda ham past." },
    { t: "p", text: "Muammo boshqa joyda va u butunlay texnik: to'lov. O'zbekistondan kirganingizda to'lov usullari ro'yxatida UzCard va HUMO ni topa olmaysiz, narx esa chet el valyutasida ko'rsatiladi. Demak sizga xalqaro karta yoki xorijiy elektron hamyon kerak bo'ladi. Buni Midasbuy'ning kamchiligi deb atash to'g'ri emas — sayt boshqa bozorlar uchun qurilgan va O'zbekiston to'lov tizimlari uning ro'yxatiga kirmagan." },
    { t: "p", text: "To'lov usullari ro'yxati vaqti-vaqti bilan yangilanib turadi, shuning uchun o'z kartangiz bilan bir marta tekshirib ko'rish ortiqcha bo'lmaydi. Ammo hozircha holat shunday: xorijiy karta yoki hamyon bo'lmasa, Midasbuy'da to'lov bosqichidan nariga o'tolmaysiz. Aksiya qanchalik yaxshi ko'rinmasin, undan foydalana olmaysiz." },
    { t: "h2", id: "xalqaro-saytlar", text: "Xalqaro qayta sotuvchi saytlar: dollar va tarjima muammosi" },
    { t: "p", text: "hablax va mtcgame kabi saytlar chindan ham UC sotadi va hatto o'zbekcha versiyasi ham bor. Lekin o'sha o'zbekcha sahifani ochganingizda matn mashina tarjimasi ekani darrov seziladi: harflar aralash yozilgan, jumlalar g'alati tuzilgan, ba'zi tugmalar umuman tarjima qilinmagan. Bu shunchaki estetika masalasi emas — pul to'laydigan joyda nima yozilganini tushunmaslik xato qilish ehtimolini oshiradi." },
    { t: "p", text: "To'lov ro'yxatiga qarasangiz, u yerda kredit karta, PayPal, Apple Pay va kriptovalyuta turadi. UzCard yoki HUMO yo'q. Narx dollarda ko'rsatiladi, ya'ni yakuniy summaga bank konvertatsiyasi va xalqaro to'lov komissiyasi qo'shiladi. Bu qo'shimchalar sayt sahifasida ko'rinmaydi, lekin hisobdan chiqadi." },
    { t: "p", text: "Yana bir nuqta — yetkazish shakli. Ba'zi xalqaro do'konlar UC ni to'g'ridan-to'g'ri ID ga emas, kod ko'rinishida sotadi va o'sha kodni keyin qo'lda faollashtirish kerak bo'ladi. Qo'llab-quvvatlash o'zbek tilida emas, muddat esa odatda o'n besh daqiqadan bir necha soatgacha deb ko'rsatiladi. Xorijiy kartangiz bo'lsa, bu variant ishlaydi. Bo'lmasa, u ham to'lov bosqichida tugaydi." },
    { t: "h2", id: "telegram-sotuvchilari", text: "Telegram shaxsiy sotuvchilari: arzon, lekin kafolatsiz" },
    { t: "p", text: "Halol bo'lamiz: Telegramdagi sotuvchilarning bir qismi haqiqatan ishlaydi va ba'zan narxi ham qulay chiqadi. Muammo narxda emas, muammo — hech qanday tayanch yo'qligida. Chek yo'q, buyurtma raqami yo'q, qaytarish siyosati yo'q va murojaat qiladigan rasmiy qo'llab-quvvatlash yo'q. Pul o'tkazilgandan keyin hammasi sotuvchining vijdoniga bog'lanib qoladi. Ishlaganda buni hech kim sezmaydi, ishlamaganda esa summani qaytarish yo'li qolmaydi." },
    { t: "p", text: "Quyidagi belgilardan bittasi ko'rinsa ham suhbatni to'xtatgan ma'qul." },
    { t: "list", ordered: false, items: ["Butun summani oldindan so'rash, keyin javob bermay qo'yish","Jismoniy shaxsning shaxsiy kartasiga o'tkazma talab qilish — bunday to'lovni qaytarib bo'lmaydi","Akkaunt paroli, SMS kod, elektron pochta yoki Facebook login ma'lumotini so'rash","Akkauntni vaqtincha berib turishni, ya'ni o'zi kirib to'ldirishni taklif qilish","Bozordagi odatiy darajadan keskin past narx va shoshiltirish","Chek, buyurtma raqami yoki hech qanday yozma tasdiq bermaslik"] },
    { t: "note", text: "Hech bir qonuniy to'ldirish xizmatiga sizning parolingiz, SMS kodingiz yoki akkauntga kirish huquqingiz kerak emas. To'ldirish faqat ochiq Player ID raqami orqali bajariladi. Kimdir buni so'rasa, u UC sotmaydi — u akkauntingizni olmoqchi.", title: "Parol so'ralsa, bu firibgarlik", tone: "warn" },
    { t: "p", text: "Player ID ning o'zi ochiq ma'lumot va uni berish xavfsiz — bu haqda <a href=\"/blog/pubg-mobile-player-id-qayerda\">Player ID raqami qayerda turadi degan maqolada</a> batafsil yozilgan. Xuddi shu qatorga bepul UC generatori, UC hack va o'zgartirilgan mod ilovalar ham kiradi: ular UC bermaydi, ular akkaunt ma'lumotini yig'ish uchun qilingan. Mintaqani VPN orqali almashtirib arzonroq olish maslahatlarini ham tavsiya qilmaymiz — bu akkaunt cheklanishiga olib kelishi mumkin." },
    { t: "h2", id: "gempay", text: "GemPay nima uchun O'zbekiston uchun qulay" },
    { t: "p", text: "GemPay boshqa yo'ldan boradi: butun jarayon Telegram ichida, so'mda va mahalliy to'lov tizimlari bilan kechadi. UzCard, HUMO, Click, Payme va Paynet qabul qilinadi, ya'ni xorijiy karta ham, chet el hamyoni ham, VPN ham kerak emas. Qo'llab-quvvatlash o'zbek tilida ishlaydi va @StarsPaymeeSupport orqali bog'lanish mumkin." },
    { t: "p", text: "Amaliy jihatdan asosiy farq — to'lovdan oldingi tekshiruv. Siz Player ID ni kiritasiz, tizim o'yin serveridan niknemni so'raydi va uni ekranda bepul ko'rsatadi. Agar chiqqan nom sizniki bo'lmasa, siz hali hech narsa to'lamagansiz va shunchaki ID ni tuzatasiz. Nomni tasdiqlaganingizdan keyingina paket tanlanadi va to'lov amalga oshiriladi. UC odatda 2 daqiqada Player ID ga tushadi. Kechikish bo'lsa, <a href=\"/blog/pubg-uc-kelmadi-nima-qilish\">UC kelmagan holatda nima qilish kerakligi</a> alohida maqolada tartib bilan yozilgan." },
    { t: "p", text: "Ortiqcha va'da bermaymiz. GemPay hech bir o'yin nashriyotining rasmiy hamkori emas — biz rasmiy ID orqali to'ldirish usulidan foydalanamiz, xolos. Narx ham qat'iy emas: u provayder kursiga va USDT kursiga qarab o'zgarib turadi, shuning uchun joriy narx har doim botda va <a href=\"/oyinlar/pubg-mobile\">PUBG Mobile to'ldirish sahifasida</a> ko'rsatiladi." },
    { t: "h2", id: "narx-taqqoslash", text: "Narxlarni to'g'ri taqqoslash usuli" },
    { t: "p", text: "Ko'pchilik taqqoslashni noto'g'ri qiladi: bir saytdagi dollardagi raqamni ikkinchi joydagi so'mdagi raqam bilan yonma-yon qo'yadi va birinchisi arzonroq deb xulosa chiqaradi. Aslida dollardagi raqam yakuniy summa emas. Unga bank konvertatsiyasi qo'shiladi, ba'zi banklarda xalqaro to'lov uchun alohida komissiya ushlanadi, karta valyutasi boshqa bo'lsa yana bir konvertatsiya chiqadi. Natijada hisobdan yechilgan summa saytda ko'rgan raqamdan farq qiladi." },
    { t: "p", text: "Ikkinchi chalkashlik — bonus UC. Paketlar odatda 60, 325, 660, 1800, 3850 va 8100 UC atrofida tuziladi va kattaroq paketlarga qo'shimcha bonus qo'shiladi. Ammo bu qator ham, bonuslar ham mavsumga qarab nashriyot tomonidan o'zgartirilib turadi, shuning uchun qaysi paket foydali degan savolning javobi doimiy emas. Uchinchi omil — kurs: UC narxi ko'p xizmatlarda USDT kursiga bog'langan, u esa kunlik o'zgaradi va kecha ko'rgan raqam bugun bir xil bo'lmasligi mumkin." },
    { t: "list", ordered: true, items: ["Bir xil paketni tanlang — 660 UC ni 660 UC bilan solishtiring, 325 bilan emas","Har bir joyda yakuniy, hisobdan haqiqatan yechiladigan so'mdagi summani oling","Dollardagi narxga bank konvertatsiyasi va xalqaro to'lov komissiyasini qo'shing","Bonus UC va aksiya qo'shimchalarini paketning umumiy miqdoriga kiriting","Solishtirishni bir kun ichida qiling, chunki kurs ertaga boshqacha bo'lishi mumkin"] },
    { t: "p", text: "Shu sababli bu sahifada aniq raqam yozilmaydi: har qanday yozilgan narx bir hafta ichida eskiradi. Joriy narxni botda paket tanlash bosqichida ko'rasiz va shundan keyin ham to'lashga majbur emassiz." },
    { t: "h2", id: "xulosa", text: "Xulosa va tanlash" },
    { t: "p", text: "Agar sizda xalqaro karta yoki xorijiy elektron hamyon bo'lsa, Midasbuy to'liq o'rinli variant: u rasmiy, aksiyalari bor va akkaunt nomini ham ko'rsatadi. Agar kartangiz UzCard yoki HUMO bo'lsa, bu yo'l to'lov bosqichida yopiladi va sizga so'mda ishlaydigan xizmat kerak bo'ladi. Telegramdagi shaxsiy sotuvchilar arzon ko'rinishi mumkin, lekin chek va kafolat yo'qligini oldindan hisobga oling." },
    { t: "p", text: "Qadamma-qadam ko'rsatma kerak bo'lsa, <a href=\"/blog/pubg-mobile-uc-sotib-olish\">PUBG Mobile UC sotib olish bo'yicha asosiy qo'llanmada</a> butun jarayon boshidan oxirigacha yozilgan. Boshqa o'yinlar bo'yicha holat qanaqa ekanini bilmoqchi bo'lsangiz, <a href=\"/oyinlar\">o'yinlar katalogida</a> har bir o'yin uchun alohida sahifa bor." },
    { t: "cta", text: "Kartangiz ishlashini tekshirish uchun @Gempayuz_bot da Player ID ni kiriting — niknem bepul chiqadi, to'lov esa faqat tasdiqlagandan keyin." },
    { t: "links", title: "Shu mavzudagi boshqa maqolalar", items: [{"label":"PUBG Mobile UC sotib olish: to'liq qo'llanma","href":"/blog/pubg-mobile-uc-sotib-olish"},{"label":"UC nima va Royal Pass uchun qancha kerak","href":"/blog/pubg-uc-nima-paketlar-royal-pass"},{"label":"Player ID raqamini qayerdan topish","href":"/blog/pubg-mobile-player-id-qayerda"},{"label":"UC kelmadi yoki ID topilmadi — nima qilish kerak","href":"/blog/pubg-uc-kelmadi-nima-qilish"}] }
      ],
      faq: [
              {
                      "q": "Midasbuy UzCard yoki HUMO ni qabul qiladimi?",
                      "a": "O'zbekiston foydalanuvchilari uchun Midasbuy to'lov usullari ro'yxatida UzCard va HUMO odatda mavjud emas, shuning uchun jarayon to'lov bosqichida to'xtaydi. Sizga xalqaro karta yoki xorijiy elektron hamyon kerak bo'ladi. To'lov usullari vaqti-vaqti bilan yangilanadi, lekin hozircha mahalliy kartalar u yerda ishlamaydi. Mahalliy karta bilan to'lash uchun so'mda ishlaydigan xizmat qulayroq."
              },
              {
                      "q": "Midasbuy'dan olish arzonroqmi?",
                      "a": "Ba'zi aksiya davrlarida rasmiy narx foydali chiqishi mumkin, chunki bonus UC va mavsumiy tadbirlar birinchi bo'lib o'sha yerda paydo bo'ladi. Ammo yakuniy summani hisoblashda valyuta konvertatsiyasi va bankning xalqaro to'lov komissiyasini ham qo'shish kerak. Shuning uchun taqqoslashni bir xil paket uchun hisobdan haqiqatan yechiladigan so'mdagi summa bo'yicha qiling."
              },
              {
                      "q": "Telegramdagi arzon UC sotuvchilariga ishonsa bo'ladimi?",
                      "a": "Ehtiyot bo'ling. Chek, buyurtma raqami va rasmiy qo'llab-quvvatlash bo'lmasa, muammo chiqqanda murojaat qiladigan joy qolmaydi va pulni qaytarish yo'li yo'q. Agar sotuvchi akkaunt paroli, SMS kod yoki Facebook login ma'lumotini so'rasa, bu aniq firibgarlik va suhbatni shu yerda tugatish kerak."
              },
              {
                      "q": "Akkauntni sotuvchiga berib to'ldirish xavfsizmi?",
                      "a": "Yo'q, bunday usuldan butunlay voz keching. Qonuniy to'ldirish faqat ochiq Player ID raqami orqali bajariladi va akkauntga kirish umuman talab qilinmaydi. Akkauntni birovga berish esa uni yo'qotishning keng tarqalgan sababi bo'lib qolmoqda."
              },
              {
                      "q": "VPN yoki xorijiy karta kerakmi?",
                      "a": "GemPay orqali olganda kerak emas: siz Telegram bot ichida qolasiz, so'mda to'laysiz va faqat Player ID kiritasiz. VPN orqali boshqa mamlakat mintaqasiga o'tib arzonroq olish usullarini biz tavsiya qilmaymiz. Bunday urinishlar akkaunt cheklanishiga olib kelishi mumkin va yutuqdan ko'ra zarari ko'proq."
              },
              {
                      "q": "GemPay rasmiy tarqatuvchimi?",
                      "a": "GemPay — StarsPaymee ekotizimidagi to'ldirish xizmati va biz Tencent'ning rasmiy do'koni emasmiz. Buni ochiq aytamiz. Xizmat rasmiy ID orqali to'ldirish usulidan foydalanadi, ya'ni UC to'g'ridan-to'g'ri sizning Player ID ingizga tushadi va o'rtada hech qanday kod yoki uchinchi shaxs akkaunti bo'lmaydi."
              },
              {
                      "q": "Qaysi usul eng tez ishlaydi?",
                      "a": "Amalda ID orqali to'ldirish tezroq: GemPay'da UC odatda 2 daqiqada tushadi. Ko'plab xalqaro xizmatlar o'n besh daqiqadan bir necha soatgacha muddat ko'rsatadi. Kod ko'rinishida sotiladigan variantlarda esa kodni keyin qo'lda faollashtirish kerak bo'ladi, bu yana vaqt oladi."
              }
      ],
    },
  },
};

export default article;
