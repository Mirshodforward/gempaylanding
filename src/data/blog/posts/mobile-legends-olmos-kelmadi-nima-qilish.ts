// AVTOMATIK KIRITILGAN — `npm run ingest`.
// Manba reja: .plan/articles/mobile-legends-olmos-kelmadi-nima-qilish.json
// Qo'lda tahrirlash mumkin; keyingi ingest faqat yangi fayllarni qo'shadi.

import type { Article } from "../types";

const article: Article = {
  slug: "mobile-legends-olmos-kelmadi-nima-qilish",
  game: "mobile-legends",
  type: "problem",
  datePublished: "2026-08-23",
  dateModified: "2026-08-23",
  pillar: false,
  keywords: ["mobile legends olmos kelmadi","mobile legends id topilmadi","mobile legends olmos tushmadi nima qilish","mlbb pul yechildi olmos yo'q","алмазы не пришли mobile legends","mobile legends noto'g'ri server id","mobile legends olmos boshqa akkauntga ketdi"],
  locales: {
    uz: {
      title: "Mobile Legends olmos kelmadi: sabablari va yechimi",
      metaTitle: "Mobile Legends olmos kelmadi: sabab va yechim",
      metaDescription: "Mobile Legends olmos kelmadimi? ID va server xatosi, region, to'lov holati — barcha sabablar va supportga nima yozish kerakligi bo'yicha qo'llanma.",
      excerpt: "To'lov o'tdi, olmos yo'q. Qayta to'lashdan oldin tekshiriladigan besh qadam, to'rtta asosiy sabab va supportga yozish uchun tayyor ro'yxat.",
      answer: "Mobile Legends olmos kelmasa, avval o'yinni to'liq yopib qayta oching va o'yin ichidagi pochta bo'limini tekshiring. Keyin kiritilgan User ID va Server ID to'g'riligini solishtiring — sabab ko'pincha shu ikkisida. To'lov o'tgani holda olmos yo'q bo'lsa, chek, ID va to'lov vaqti bilan @StarsPaymeeSupport ga yozing. Qayta to'lov qilmang.",
      body: [
    { t: "p", text: "To'lov o'tdi, bankdan xabar ham keldi, lekin o'yindagi olmos soni o'sha-o'sha turibdi. Bu holatda birinchi reaksiya odatda bitta bo'ladi — yana bir marta to'lash. Aynan shuni qilmang. Amaliyotda ko'p hollarda olmos akkauntda allaqachon turgan bo'ladi va muammo boshqa joyda: ilova eski balansni ko'rsatyapti, yoki ID bir belgiga xato kiritilgan." },
    { t: "p", text: "Quyidagi sabablar eng ko'p uchraydiganidan eng kam uchraydiganiga qarab tartiblangan. Har birini o'zingiz bir necha daqiqada tekshirib chiqasiz. Agar oxirigacha yetib ham natija bo'lmasa, oxirgi bo'limlarda supportga aynan nima yozish kerakligi va pul qaytarish qanday ishlashi yozilgan. To'ldirish jarayonining o'zi umuman qanday ketishini <a href=\"/blog/mobile-legends-olmos-sotib-olish\">Mobile Legends olmos sotib olish qo'llanmasida</a> ko'rib chiqishingiz mumkin." },
    { t: "h2", id: "birinchi-5-daqiqada", text: "Birinchi 5 daqiqada nima qilish kerak" },
    { t: "p", text: "Bu ro'yxatni tartib bilan bosib chiqing. Qadamlarni almashtirmang — har biri keyingisini ortiqcha qilib yuborishi mumkin." },
    { t: "steps", items: [{"title":"O'yinni to'liq yoping","text":"Ilovani fon rejimiga tashlab qo'yish yetarli emas. Uni ko'p vazifali oynadan butunlay olib tashlang va qaytadan oching. Shundagina klient serverdan balansni qayta so'raydi."},{"title":"O'yin ichidagi pochtani tekshiring","text":"Mobile Legends'da ba'zi narsalar to'g'ridan-to'g'ri balansga emas, o'yin ichidagi pochta qutisiga (Mail) tushadi. U yerda o'qilmagan xat tursa, uni ochib mazmunini olib qo'ying."},{"title":"To'ldirish oynasidagi balansga qarang","text":"Recharge yoki olmos to'ldirish oynasida joriy balans alohida ko'rsatiladi. Ba'zan bosh ekrandagi raqam kechikadi, to'ldirish oynasidagisi esa yangilangan bo'ladi."},{"title":"Botdagi buyurtma holatini oching","text":"@Gempayuz_bot ichida oxirgi buyurtmangiz va uning holati saqlanadi. Buyurtma bajarilgan bo'lsa, muammo o'yin klientida; bajarilmagan bo'lsa, muammo to'lov tomonida."},{"title":"Bank ilovasida tranzaksiyani tasdiqlang","text":"Bank SMS'i har doim ham tranzaksiya yakunlanganini anglatmaydi. Ilovadan tranzaksiya holati \"bajarilgan\" yoki \"kutilmoqda\" ekanini o'z ko'zingiz bilan ko'ring."}] },
    { t: "note", text: "Bu besh qadamning yarmiga yetmasdan hal bo'ladigan holatlar ko'pchilikni tashkil qiladi. Shuning uchun ikkinchi marta to'lashdan oldin ro'yxatni oxirigacha bosib chiqing — qayta to'lov muammoni hal qilmaydi, uni ikkiga ko'paytiradi.", title: "Ko'pchilik shu yerda to'xtaydi", tone: "info" },
    { t: "h2", id: "sabab-1-eski-balans", text: "Sabab 1: ilova eski balansni ko'rsatyapti" },
    { t: "p", text: "Bu eng ko'p uchraydigan holat va u aslida muammo emas. Olmos server tomonida akkauntingizga yozilgan, lekin telefondagi klient eski raqamni ushlab turibdi. Sabab oddiy: o'yin balansni har soniyada emas, ma'lum hodisalarda qayta so'raydi — masalan, ilova qayta ishga tushganda yoki to'ldirish oynasi ochilganda." },
    { t: "p", text: "Yechim ham shunga mos. Avval ilovani butunlay yoping va qayta oching. O'zgarish bo'lmasa, internetni almashtiring — Wi-Fi'dan mobil internetga yoki teskarisiga o'ting, chunki uzilib turgan ulanishda klient serverdan javob ololmayotgan bo'lishi mumkin. Shundan keyin ham eski raqam tursa, akkauntdan chiqib qayta kiring." },
    { t: "p", text: "Aynan shu bosqichda eng qimmatga tushadigan xato qilinadi: odam balansni ko'rmay turib ikkinchi marta to'laydi. Ikki to'lov ikki marta yetkazishga olib keladi va ikkinchisini qaytarish kafolatlanmaydi. Klient yangilanmaganiga ishonchingiz komil bo'lmaguncha, kutish arzonroq." },
    { t: "h2", id: "sabab-2-id-xatosi", text: "Sabab 2: User ID yoki Server ID xato kiritilgan" },
    { t: "p", text: "Mobile Legends'da identifikator ikki qismdan iborat va profil oynasida odatda <strong>123456789 (1234)</strong> ko'rinishida yoziladi. Birinchi raqam — User ID, qavs ichidagisi — Server ID. Rus tilidagi manbalarda va ko'plab xalqaro xizmatlarda u \"Zone ID\" deb ataladi, lekin gap bir xil raqam haqida ketadi. Ikkalasi ham kerak: faqat User ID bilan tizim akkauntni topa olmaydi." },
    { t: "p", text: "Amalda quyidagi xatolar takrorlanadi." },
    { t: "list", ordered: false, items: ["Server ID umuman kiritilmagan — faqat uzun raqam yozilgan.","Qavs ichidagi raqam User ID ga qo'shib yuborilgan, natijada bitta uzun va mavjud bo'lmagan raqam chiqadi.","Nusxalashda qavs belgisi yoki bo'sh joy matn bilan birga ko'chib o'tgan.","ID o'rniga nickname yozilgan — nickname bilan qidiruv ishlamaydi, u takrorlanishi mumkin.","Do'stning yoki ikkinchi akkauntning eski ID'si saqlanib qolgan va o'sha bilan to'lovga o'tilgan."] },
    { t: "note", text: "Agar ID xato kiritilgan bo'lsa-yu, o'sha ID haqiqatan mavjud bo'lsa, olmos begona akkauntga yetkaziladi. Texnik jihatdan buyurtma bajarilgan hisoblanadi va uni avtomatik ravishda qaytarib olishning imkoni yo'q. Bu Mobile Legends'ga xos emas — barcha ID orqali to'ldirish tizimlarida shunday.", title: "Xato ID ga tushgan olmos qaytmaydi", tone: "warn" },
    { t: "p", text: "GemPay botida to'lovdan oldin nickname ko'rsatilishi aynan shu xatoni to'xtatish uchun. ID ni kiritganingizdan keyin tizim o'yin serveridan nickname'ni so'raydi va uni ekranda chiqaradi — bu bosqich bepul va hech narsa yechilmaydi. Nickname sizniki bo'lmasa, to'lamang, ortga qayting va raqamlarni qaytadan kiriting. Raqamlarni qayerdan olishni <a href=\"/blog/mobile-legends-user-id-server-id-qayerda\">User ID va Server ID qayerda turishi haqidagi maqolada</a> bosqichma-bosqich ko'rsatib berilgan." },
    { t: "h2", id: "sabab-3-region", text: "Sabab 3: akkaunt boshqa regionda" },
    { t: "p", text: "Mobile Legends bir nechta mintaqaviy klient sifatida tarqatiladi va ular alohida akkaunt bazalariga ega. Ya'ni global versiyadagi ID boshqa mintaqaviy versiya bazasida umuman mavjud bo'lmaydi. \"ID topilmadi\" xatosining haqiqiy sababi ko'pincha shu — raqam to'g'ri, lekin u boshqa bazada." },
    { t: "p", text: "Qaysi versiyada o'ynayotganingizni bilishning eng ishonchli yo'li — ilovani qayerdan va qaysi nom bilan o'rnatganingizni eslash. Do'kondagi ilova nomi, kirish ekranidagi nashriyot belgisi va o'yin ichidagi til sozlamalari odatda buni ko'rsatib turadi. Agar akkauntni bir necha yil oldin boshqa telefonda ochgan bo'lsangiz va ilovani do'stlaringizdan farqli manbadan yuklagan bo'lsangiz, versiya boshqa bo'lish ehtimoli yuqori." },
    { t: "p", text: "Bu yerda internetda ko'p uchraydigan ikkita maslahatdan uzoqroq turing. Birinchisi — VPN bilan regionni \"aldab\", boshqa mintaqa bazasiga to'ldirish. Bu ishlamaydi, chunki masala IP manzilda emas, akkaunt qaysi bazada ro'yxatdan o'tganida; ustiga-ustak akkaunt xavfsizligi bilan bog'liq muammo tug'dirishi mumkin. Ikkinchisi — \"bepul olmos generatori\" yoki akkauntga kirish ma'lumotlarini so'rab \"o'zim to'ldirib beraman\" deydigan odamlar. Bularning ikkalasi ham akkauntni yo'qotishning ancha ishonchli usuli. GemPay hech qachon parol, SMS kod yoki akkauntga kirishni so'ramaydi — faqat ochiq ID va Server ID kerak bo'ladi." },
    { t: "h2", id: "sabab-4-tolov", text: "Sabab 4: to'lov o'tmagan yoki bank ushlab turibdi" },
    { t: "p", text: "Agar botdagi buyurtma bajarilmagan bo'lsa, sabab olmos yetkazishda emas, to'lovda. Eng ko'p uchraydigani — hold, ya'ni bank summani vaqtincha bloklab qo'yishi. Kartadagi mablag' kamayib ko'rinadi va SMS ham keladi, lekin tranzaksiya oxirigacha tasdiqlanmaydi. Bunday holatda summa odatda hech qanday murojaatsiz o'zi qaytadi; qancha vaqtda qaytishi bankning qoidalariga bog'liq, shuning uchun aniq muddatni faqat o'z bankingiz aytib bera oladi." },
    { t: "p", text: "Bank ilovasidagi tranzaksiya holatini o'qish shu yerda hal qiluvchi bo'ladi. \"Bajarilgan\" yoki \"o'tkazildi\" degan yozuv — pul haqiqatan ketgan. \"Kutilmoqda\", \"bloklangan\" yoki \"vaqtincha ushlab turilgan\" — bu hold va u hali yakunlanmagan. Ba'zi ilovalarda hold tarixda emas, joriy operatsiyalar ro'yxatida alohida turadi." },
    { t: "p", text: "Qolgan sabablar oddiyroq: 3-D Secure SMS kodi kiritilmagan yoki kod kech kelib sahifa yopilib qolgan; kartada internet to'lovlari yoqilmagan; kunlik yoki bir martalik limitga urilgansiz; balans yetarli emas. UzCard, HUMO, Click, Payme va Paynet orqali to'lovda bu shartlar har xil ishlaydi, shuning uchun bir usul o'tmasa boshqasini sinab ko'rish mantiqan to'g'ri — lekin faqat birinchi to'lov aniq o'tmaganiga ishonch hosil qilganingizdan keyin." },
    { t: "h2", id: "supportga-royxat", text: "Supportga yozishdan oldin shu ro'yxatni to'ldiring" },
    { t: "p", text: "Support buyurtmani ism bo'yicha emas, ma'lumotlar bo'yicha qidiradi. Quyidagilarni bitta xabarda yuborsangiz, buyurtma odatda daqiqalarda topiladi. Ularsiz suhbat savol-javob bilan cho'zilib ketadi." },
    { t: "list", ordered: false, items: ["User ID — profil oynasidagi asosiy raqam, qavssiz.","Server ID — o'sha qavs ichidagi raqam (ba'zi manbalarda Zone ID).","O'yin ichidagi nickname — buyurtmani ID bilan solishtirish uchun.","To'lov usuli: UzCard, HUMO, Click, Payme yoki Paynet.","To'lov sanasi va vaqti — daqiqasigacha, telefondagi soat bo'yicha.","Chek yoki bank tranzaksiyasining to'liq skrinshoti."] },
    { t: "note", text: "Chekdagi vaqt, summa va tranzaksiya raqami qidiruvda ishlatiladi. Faqat \"pul yechildi\" degan qismini kesib yuborsangiz, qidiruv uchun ma'lumot qolmaydi. To'liq ekranni suratga oling.", title: "Skrinshotni kesmang", tone: "good" },
    { t: "p", text: "Tayyor bo'lsangiz, hammasini bitta xabarda <a href=\"https://t.me/StarsPaymeeSupport\">@StarsPaymeeSupport</a> ga yuboring. Xabarni bo'lak-bo'lak emas, bir marta to'liq yozgan ma'qul — javob shuncha tez keladi." },
    { t: "h2", id: "pul-qaytariladimi", text: "Pul qaytariladimi va qachon" },
    { t: "p", text: "Bu yerda halol chegaralarni aytish kerak, chunki internetdagi ko'p sahifalar buni chalkashtiradi. Agar buyurtma bajarilmagan bo'lsa — ya'ni pul o'tgan, lekin olmos hech qayerga yetkazilmagan — masala hal qilinadi va mablag' qaytariladi. Bu texnik nosozlik yoki uzilib qolgan tranzaksiya holati va u supportning odatiy ishi." },
    { t: "p", text: "Agar olmos siz kiritgan ID ga to'g'ri yetkazilgan bo'lsa, buyurtma bajarilgan hisoblanadi. ID xato bo'lgani uchun olmos begona akkauntga tushgan bo'lsa ham, tizim nuqtai nazaridan hamma narsa to'g'ri ishlagan va qaytarish kafolatlanmaydi. Xuddi shu sabab tekshiruv bosqichi shunchaki formallik emas: nickname ekranda turganda uni bir marta o'qib chiqish keyinchalik hech qanday murojaat bilan tuzatib bo'lmaydigan xatoning oldini oladi." },
    { t: "p", text: "Muddat masalasida ham o'ylab topilgan raqam bermaymiz. Har bir holat alohida tekshiriladi — to'lov provayderi, bank va o'yin serveri tomonidagi yozuvlar solishtiriladi. Support holatga qarab javob beradi va nima bo'layotganini aytadi. Siz tomondan eng foydali ish — yuqoridagi ro'yxatni to'liq yuborish va javob kelguncha qayta to'lov qilmaslik. Xizmat tanlashda umuman nimaga qarash kerakligi <a href=\"/blog/mobile-legends-olmos-arzon-qayerdan-olish\">olmosni qayerdan olish arzon va xavfsiz degan taqqoslashda</a> batafsil yozilgan." },
    { t: "h2", id: "takrorlanmasligi-uchun", text: "Muammo takrorlanmasligi uchun" },
    { t: "p", text: "Keyingi safar uchun uchta odat yetarli. Birinchisi — User ID va Server ID ni bir marta to'g'ri ko'chirib, telefon eslatmalariga saqlab qo'yish; shunda har safar profil oynasini qidirib o'tirmaysiz va nusxalashda xato qilmaysiz. Ikkinchisi — to'lovdan oldin ekranda chiqqan nickname'ga har safar qarash, hatto ID saqlangan bo'lsa ham. Uchinchisi — buyurtmani bitta joydan qilish: holat va tarix bir joyda tursa, muammo chiqqanda uni topish ancha oson." },
    { t: "p", text: "Olmos paketlari qanday tuzilgani va joriy narx qayerda ko'rinishini <a href=\"/oyinlar/mobile-legends\">Mobile Legends to'ldirish sahifasida</a> ko'rasiz; boshqa o'yinlar bo'yicha esa <a href=\"/oyinlar\">o'yinlar katalogi</a> bor." },
    { t: "cta", text: "@Gempayuz_bot ni oching, ID ni kiriting va nickname ekranda chiqqanini ko'rib, keyin to'lang." },
    { t: "links", title: "Shu mavzuda yana", items: [{"label":"Mobile Legends User ID va Server ID qayerda turadi","href":"/blog/mobile-legends-user-id-server-id-qayerda"},{"label":"Mobile Legends olmos sotib olish: to'liq qo'llanma","href":"/blog/mobile-legends-olmos-sotib-olish"},{"label":"Olmosni qayerdan olish arzon va xavfsiz","href":"/blog/mobile-legends-olmos-arzon-qayerdan-olish"},{"label":"Mobile Legends olmos nima va unga nima sotib olinadi","href":"/blog/mobile-legends-olmos-nima-va-paketlar"},{"label":"Mobile Legends to'ldirish sahifasi","href":"/oyinlar/mobile-legends"}] }
      ],
      faq: [
              {
                      "q": "To'lov o'tdi, lekin olmos yo'q. Birinchi navbatda nima qilay?",
                      "a": "O'yinni to'liq yoping va qayta oching — ko'p holatda olmos allaqachon tushgan, faqat ilova eski balansni ko'rsatib turadi. So'ng o'yin ichidagi pochta bo'limini tekshiring, chunki ba'zi narsalar balansga emas, o'sha yerga tushadi. Shundan keyin ham yo'q bo'lsa, chek va ID bilan supportga yozing. Bu bosqichda qayta to'lov qilmang."
              },
              {
                      "q": "Nima uchun \"ID topilmadi\" degan xato chiqyapti?",
                      "a": "Ko'pincha Server ID kiritilmagan yoki qavs ichidagi raqam User ID ga qo'shib yozilgan. Ba'zan akkaunt boshqa mintaqaviy versiyada bo'ladi va uning ID'si global bazada topilmaydi. Raqamlarni profil oynasidan qaytadan ko'chiring, bo'sh joy va qavs belgisini olib tashlang."
              },
              {
                      "q": "Olmos boshqa akkauntga ketib qolsa qaytarib bo'ladimi?",
                      "a": "Agar ID xato kiritilgan bo'lsa, olmos o'sha ID egasiga tushadi va uni avtomatik qaytarish imkoni bo'lmaydi. Tizim uchun bu bajarilgan buyurtma hisoblanadi. Aynan shuning uchun to'lovdan oldin nickname ko'rsatiladi — u sizniki bo'lmasa, to'lamang va ID ni qaytadan kiriting."
              },
              {
                      "q": "Bank puldan yechdi, lekin buyurtma ko'rinmayapti.",
                      "a": "Ba'zi hollarda bank summani vaqtincha ushlab turadi va tranzaksiya oxirigacha tasdiqlanmaydi — bunda pul odatda o'zi qaytadi. Bank ilovasida tranzaksiya \"bajarilgan\" yoki \"kutilmoqda\" ekanini tekshiring. Holatni aniqlagach, chek skrinshoti va aniq vaqt bilan supportga murojaat qiling."
              },
              {
                      "q": "Supportga aynan nimalarni yozishim kerak?",
                      "a": "User ID, Server ID, nickname, to'lov usuli, to'lov sanasi va vaqti hamda chekning to'liq skrinshoti. Shu ma'lumotlar bo'lsa, buyurtma daqiqalarda topiladi. Skrinshotni kesmang — undagi vaqt, summa va tranzaksiya raqami qidiruvda ishlatiladi."
              },
              {
                      "q": "Qancha kutish normal hisoblanadi?",
                      "a": "Odatiy yetkazish bir daqiqa atrofida bo'ladi. Moonton tomonida texnik ishlar ketayotgan bo'lsa navbat yig'ilib, jarayon biroz cho'zilishi mumkin. Sezilarli vaqt o'tib ham hech narsa o'zgarmasa, bu allaqachon support masalasi — kutib o'tirmang."
              },
              {
                      "q": "Qayta to'lasam, ikkinchi marta yechilib ketmaydimi?",
                      "a": "Yechilishi mumkin. Birinchi buyurtma haqiqatan bajarilmaganini aniqlamasdan turib qayta to'lamang. Avval botdagi buyurtma holatini va bank tranzaksiyasini tekshiring, keyin support bilan bog'laning — ikki to'lov ikki marta yetkazishga olib kelishi mumkin."
              }
      ],
    },
  },
};

export default article;
