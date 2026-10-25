/**
 * POWERBOX TEKNOLOJİ - Main JavaScript
 * High-Converting Corporate Landing Page with B2B Wholesale & Direct Retail Cart
 */

const PHONE_NUMBER = "0549 409 53 53";
const WHATSAPP_INT_NUMBER = "905494095353";

// ---------------- PRODUCTS MASTER DATA (Fiyatlar, İndirimler, Özellikler) ----------------
const PRODUCTS_DATA = {
  px1: {
    id: "px1",
    title: "Powerbox PX1",
    fullName: "Powerbox PX1 Yüksek Voltaj Koruma Modülü",
    category: "YÜKSEK VOLTAJ KORUMA MODÜLÜ",
    image: "assets/images/urun/px1.png",
    oldPrice: 950,
    price: 690,
    discount: "%27 İndirim",
    badge: "%27 İndirim",
    wholesaleTip: "Koli ve toptan alımlarda özel iskonto",
    desc: "Tek bir modül ile evdeki tüm prizleri akım korumalı prize dönüştürün. Voltaj dalgalanmalarına karşı tüm elektronik cihazlarınızı koruyun.",
    features: [
      "Elektrik çarpma riski olmadan 1 dakikada kolay bağlantı",
      "Yapışkan yüzeyi ile sigorta kutunuzun yanına kırmadan delmeden anında montaj",
      "Ekranda anlık voltaj ve tüketim değerini görebilirsiniz",
      "Ekstra kapasitör devresi ile ani pik dalgalanmalarını filtreler",
      "2 Yıl Üretici Garantisi"
    ],
    waMsg: "Merhaba Powerbox, kampanya kapsamında 1 adet Powerbox PX1 Yüksek Voltaj Koruma Modülü (690 TL) sipariş etmek istiyorum. Teslimat ve ödeme detaylarını alabilir miyim?",
    wholesaleMsg: "Merhaba Powerbox, Powerbox PX1 Yüksek Voltaj Koruma Modülü için toptan alım fiyatı ve koli iskontosu hakkında bilgi almak istiyorum."
  },
  px2: {
    id: "px2",
    title: "Powerbox PX2",
    fullName: "Powerbox PX2 Voltaj Koruma Modülü",
    category: "YÜKSEK VOLTAJ KORUMA MODÜLÜ",
    image: "assets/images/urun/px2.png",
    oldPrice: 850,
    price: 590,
    discount: "%31 İndirim",
    badge: "%31 İndirim",
    wholesaleTip: "Koli ve toptan alımlarda özel iskonto",
    desc: "Gelişmiş çift kademeli koruma devresi ve dijital göstergesi ile evinizdeki tüm prizleri tek noktadan güvenceye alır.",
    features: [
      "Elektrik çarpma riski olmadan 1 dakikada kolay bağlantı",
      "Yapışkan yüzeyi ile sigorta kutunuzun yanına kırmadan delmeden anında montaj",
      "Ekranda anlık voltaj değerini görebilirsiniz",
      "Ekstra kapasitör devresi ile ani pik dalgalanmalarını filtreler",
      "2 Yıl Üretici Garantisi"
    ],
    waMsg: "Merhaba Powerbox, kampanya kapsamında 1 adet Powerbox PX2 Voltaj Koruma Modülü (590 TL) sipariş etmek istiyorum. Teslimat ve ödeme detaylarını alabilir miyim?",
    wholesaleMsg: "Merhaba Powerbox, Powerbox PX2 Voltaj Koruma Modülü için toptan sipariş ve iskonto detayları hakkında bilgi almak istiyorum."
  },
  px3: {
    id: "px3",
    title: "Powerbox PX3",
    fullName: "Powerbox PX3 Voltaj Koruma Modülü",
    category: "YÜKSEK VOLTAJ KORUMA MODÜLÜ",
    image: "assets/images/urun/px3.png",
    oldPrice: 650,
    price: 450,
    discount: "%31 İndirim",
    badge: "%31 İndirim",
    wholesaleTip: "Koli ve toptan alımlarda özel iskonto",
    desc: "Yüksek akım ve sanayi tipi hatlar için üst düzey aşırı gerilim kalkanı ve pik filtreleme modülüdür.",
    features: [
      "Elektrik çarpma riski olmadan 1 dakikada kolay bağlantı",
      "Yapışkan yüzeyi ile sigorta kutunuzun yanına kırmadan delmeden anında montaj",
      "Ekstra kapasitör devresi ile ani pik dalgalanmalarını filtreler",
      "2 Yıl Üretici Garantisi"
    ],
    waMsg: "Merhaba Powerbox, kampanya kapsamında 1 adet Powerbox PX3 Voltaj Koruma Modülü (450 TL) sipariş etmek istiyorum. Teslimat ve ödeme detaylarını alabilir miyim?",
    wholesaleMsg: "Merhaba Powerbox, Powerbox PX3 Voltaj Koruma Modülü için toptan sipariş ve iskonto detayları hakkında bilgi almak istiyorum."
  },
  gc1: {
    id: "gc1",
    title: "Powerbox G-C Fişli Gaz Alarmı",
    fullName: "Powerbox G-C Fişli Gaz Alarm Cihazı",
    category: "220V PRİZE TAKILAN KABLOSUZ ALARM",
    image: "assets/images/urun/gc1-gaz.png",
    oldPrice: 750,
    price: 490,
    discount: "%35 İndirim",
    badge: "%35 İndirim",
    wholesaleTip: "Koli ve toptan alımlarda özel iskonto",
    desc: "Kurulum ve kablo çekme derdi olmadan doğrudan prize takılarak kullanılan yüksek güvenlikli gaz kaçak uyarı sistemidir.",
    features: [
      "Dış sensör yapısı ile doğalgaz kaçağını anında algılar",
      "Gaz kaçağı anında 100 dB güçlü sesli uyarı ile hemen ikaz eder",
      "Mutfak, kombi yanı ve doğalgaz boruları yakınında güvenle kullanım",
      "Talebe göre alev algılama ve gaz çeşitlerine göre üretim yapılır",
      "Bazen küçük detaylar hayat kurtarır..!"
    ],
    waMsg: "Merhaba Powerbox, kampanya kapsamında 1 adet Powerbox G-C Fişli Gaz Alarm Cihazı (490 TL) sipariş etmek istiyorum. Teslimat ve ödeme detaylarını alabilir miyim?",
    wholesaleMsg: "Merhaba Powerbox, Powerbox G-C Fişli Gaz Alarm Cihazı için toptan sipariş ve fiyat bilgisi almak istiyorum."
  },
  ga: {
    id: "ga",
    title: "Powerbox G-A Araç Gaz Alarmı",
    fullName: "Powerbox G-A Araç İçi Gaz Alarmı",
    category: "TÜRKİYE'DE İLK VE TEK ARAÇ LPG ALARMI",
    image: "assets/images/urun/ga-arac.png",
    oldPrice: 900,
    price: 650,
    discount: "%28 İndirim",
    badge: "%28 İndirim",
    wholesaleTip: "Koli ve toptan alımlarda özel iskonto",
    desc: "LPG'li araçlar için üretilen bu ürün bagajda uygun yere koyularak sadece 12V besleme verilerek sabit veya pil kullanarak gaz kokusu endişesinde dedektör olarak kullanılabilir.",
    features: [
      "İster 3 adet kalem pil ile seyyar, ister 12V besleme soketine aküden voltaj vererek kullanım",
      "Dış sensör yapısı ile gaz kaçağını milisaniyeler içinde algılar",
      "Gaz kaçağı anında 100 dB güçlü sesli siren ile sürücüyü ikaz eder",
      "Torpido, bagaj veya LPG tankı yakınına anında yapıştırılır",
      "Talebe göre alev algılama ve gaz çeşitlerine göre üretim yapılır",
      "Bazen küçük detaylar hayat kurtarır..!"
    ],
    waMsg: "Merhaba Powerbox, kampanya kapsamında 1 adet Powerbox G-A Araç İçi Gaz Alarmı (650 TL) sipariş etmek istiyorum. Teslimat ve ödeme detaylarını alabilir miyim?",
    wholesaleMsg: "Merhaba Powerbox, Powerbox G-A Araç İçi Gaz Alarmı için toptan sipariş ve fiyat bilgisi almak istiyorum."
  },
  kg: {
    id: "kg",
    title: "Powerbox K-G Karavan Alarmı",
    fullName: "Powerbox K-G Karavan & Tekne Gaz Alarmı",
    category: "KARAVAN VE TEKNELERE ÖZEL ALARM",
    image: "assets/images/urun/kg-karavan.png",
    oldPrice: 980,
    price: 690,
    discount: "%30 İndirim",
    badge: "%30 İndirim",
    wholesaleTip: "Koli ve toptan alımlarda özel iskonto",
    desc: "Karavan ve tekne sahiplerine özel olarak tasarlanan bu kompakt ürün montaj ve kablo çekme derdi olmadan seyyar veya yapışkanlı yüzeyi ile montaj sorunu olmadan kolayca kullanılır.",
    features: [
      "İster pil ile seyyar, dilerseniz 5V adaptör ile eviniz dahil dilediğiniz yerde kullanım",
      "Dış sensör yapısı ile gaz kaçağını anında algılar",
      "Gaz kaçağını algıladığı anda 100 dB güçlü siren ile uyarı verir",
      "Uykuda karbonmonoksit ve gaz sızıntılarına karşı hayat kurtaran erken uyarı",
      "Türkiye'de ilk ve tek taşınabilir gaz alarm cihazı",
      "Talebe göre alev algılama ve gaz çeşitlerine göre üretim yapılır",
      "Bazen küçük detaylar hayat kurtarır..!"
    ],
    waMsg: "Merhaba Powerbox, kampanya kapsamında 1 adet Powerbox K-G Karavan Gaz Alarmı (690 TL) sipariş etmek istiyorum. Teslimat ve ödeme detaylarını alabilir miyim?",
    wholesaleMsg: "Merhaba Powerbox, Powerbox K-G Karavan Gaz Alarmı için toptan sipariş ve fiyat bilgisi almak istiyorum."
  },
  tasarruf: {
    id: "tasarruf",
    title: "Elektrik Tasarruf Cihazı (Ev Tipi)",
    fullName: "Powerbox Elektrik Tasarruf Cihazı (Ev Tipi Monofaze / Sanayi Özel kW)",
    category: "MONOFAZE EV TİPİ & TRİFAZE SANAYİ",
    image: "assets/images/urun/elektrik-tasarruf.png",
    oldPrice: 1450,
    price: 990,
    discount: "%32 İndirim",
    badge: "%25 Tasarruf",
    wholesaleTip: "İş yeri ve sanayi (trifaze) kW modelleri için özel teklif",
    desc: "Ev tipi monofaze priz ve sigorta bağlantılı mini kompanzasyon cihazı. %25'e varan tasarruf sağlar. Sanayi ve iş yerleri için her kW değerine uygun trifaze özel mühendislik imalatı desteği sunulur.",
    features: [
      "Ev tipi monofaze sistemlere 1 dakikada pratik bağlantı",
      "Mini kompanzasyon görevi görür, %25'e varan elektrik tasarrufu sağlar",
      "Bobinli devrelerde oluşan ısınma ve zorlanmayı filtreler, hatları rahatlatır",
      "Sanayi ve ticari işletmeler için kW değerine göre özel imalat desteği",
      "2 Yıl Üretici Garantisi"
    ],
    waMsg: "Merhaba Powerbox, kampanya kapsamındaki Powerbox Ev Tipi Elektrik Tasarruf Cihazı (990 TL) hakkında sipariş vermek istiyorum.",
    wholesaleMsg: "Merhaba Powerbox, işletmemiz / iş yerimiz için sanayi tipi elektrik tasarruf cihazı ve kW değerimize uygun özel fiyat teklifi almak istiyorum."
  },
  ap1: {
    id: "ap1",
    title: "Powerbox AP1 Akım Korumalı Priz",
    fullName: "Powerbox AP1 16A Akım Korumalı Priz",
    category: "16A GÜÇLÜ AKIM KORUMALI PRİZ",
    image: "assets/images/urun/ap1.png",
    oldPrice: 550,
    price: 370,
    discount: "%33 İndirim",
    badge: "%33 İndirim",
    wholesaleTip: "Koli ve toptan alımlarda özel iskonto",
    desc: "Rakipleri gibi sadece yüksek voltaja karşı korumaz; ekstra kapasitör haznesi sayesinde voltaj oynamalarını minimize ederek elektronik eşyalarınızın rahat çalışmasını sağlar ve ömrünü uzatır.",
    features: [
      "16A Güçlü priz yapısı ile yüksek akım çeken cihazlara tam uyum",
      "Ekstra kapasitör haznesi ile voltaj dalgalanmalarını minimize eder",
      "Elektronik cihazların rahat çalışmasını sağlayarak enerji tasarrufuna yardımcı olur",
      "Prize doğrudan tak-çalıştır pratik kullanım",
      "2 Yıl Üretici Garantisi"
    ],
    waMsg: "Merhaba Powerbox, kampanya kapsamında 1 adet Powerbox AP1 Akım Korumalı Priz (370 TL) sipariş etmek istiyorum. Teslimat ve ödeme detaylarını alabilir miyim?",
    wholesaleMsg: "Merhaba Powerbox, Powerbox AP1 Akım Korumalı Priz için toptan koli siparişi ve fiyat teklifi almak istiyorum."
  },
  hasere: {
    id: "hasere",
    title: "Powerbox Haşere Kovucu",
    fullName: "Powerbox Gerçek 22 kHz Ultrasonik Haşere Kovucu",
    category: "220V PRİZE TAK-ÇALIŞTIR ULTRASONİK",
    image: "assets/images/urun/hasere-kovucu.png",
    oldPrice: 690,
    price: 470,
    discount: "%32 İndirim",
    badge: "%32 İndirim",
    wholesaleTip: "Koli ve toptan alımlarda özel iskonto",
    desc: "220V prize takılarak kullanılan Powerbox haşere kovucu, yaydığı 19-22 kHz ultrasonik ses dalgaları ile sinek, sivrisinek, fare dahil tüm haşeratı ortamdan uzaklaştırır.",
    features: [
      "Gerçek 19-22 kHz ultrasonik ses çıkışı haşeratı uzaklaştırır, ortamda barınmalarına izin vermez",
      "Cep telefonu kamerasını yaklaştırıp video kaydederek gerçek ses çıkışı hemen test edilebilir",
      "Kimyasal, tablet veya zehir içermez, çevre ve evcil hayvan dostudur",
      "Tak-çalıştır 7/24 kesintisiz koruma sağlar"
    ],
    waMsg: "Merhaba Powerbox, kampanya kapsamında 1 adet Powerbox Gerçek 22 kHz Haşere Kovucu (470 TL) sipariş etmek istiyorum. Teslimat ve ödeme detaylarını alabilir miyim?",
    wholesaleMsg: "Merhaba Powerbox, Powerbox Haşere Kovucu için toptan koli siparişi ve iskonto detaylarını öğrenmek istiyorum."
  },
  elektrosok: {
    id: "elektrosok",
    title: "Powerbox Elektro Şok Cihazı",
    fullName: "Powerbox 400 kV Kompakt Elektro Şok Cihazı",
    category: "YÜKSEK GERİLİM & KİŞİSEL GÜVENLİK",
    image: "assets/images/urun/elektrosok.png",
    oldPrice: 850,
    price: 590,
    discount: "%31 İndirim",
    badge: "%31 İndirim",
    wholesaleTip: "Koli ve toptan alımlarda özel iskonto",
    desc: "Kişisel güvenlik ve caydırıcı koruma için özel olarak geliştirilmiş yüksek gerilimli kompakt elektro şok cihazı.",
    features: [
      "400 kva Yüksek gerilim ark deşarjı ile üstün caydırıcı ses ve kıvılcım etkisi",
      "Taşınabilir kompakt ergonomik tasarım, kolay taşıma",
      "Kişisel savunma, esnaf ve güvenlik görevlileri için pratik caydırıcı çözüm",
      "Dahili şarj edilebilir batarya ve emniyet kilit mekanizması"
    ],
    waMsg: "Merhaba Powerbox, kampanya kapsamında 1 adet Powerbox 400 kV Elektro Şok Cihazı (590 TL) sipariş etmek istiyorum. Teslimat ve ödeme detaylarını alabilir miyim?",
    wholesaleMsg: "Merhaba Powerbox, Powerbox Elektro Şok Cihazı için toptan koli siparişi ve fiyat teklifi almak istiyorum."
  },
  demonte: {
    id: "demonte",
    title: "Demonte Kit & Boş Kutular",
    fullName: "Demonte Devre Kiti & Boş Plastik Kutular",
    category: "GENÇ ÜRETİCİLER & AR-GE",
    image: "assets/images/demonte-kutu-poster.jpg",
    oldPrice: 350,
    price: 190,
    discount: "Özel Fiyat",
    badge: "Genç Üretici",
    wholesaleTip: "Toplu okul ve proje alımlarında ekstra destek",
    desc: "Yetenekli gençlerimiz üretim yapsın, projelerini hayata geçirsin diye demonte devre kitleri ve boş plastik kutular uygun fiyatlarla!",
    features: [
      "Yetenekli gençlerimiz ve öğrenciler için özel uygun fiyat",
      "Kendi devrenizi kutulamak için yüksek kaliteli plastik kutular",
      "Demonte devre kartı ve bileşen paketleri",
      "Powerbox ailesine siz de katılın..!"
    ],
    waMsg: "Merhaba Powerbox, demonte kit paketleri ve boş plastik kutular hakkında sipariş ve bilgi almak istiyorum.",
    wholesaleMsg: "Merhaba Powerbox, demonte kit paketleri ve boş plastik kutular için toplu alım ve proje desteği hakkında görüşmek istiyorum."
  }
};

// ---------------- INSTAGRAM STORIES DATA ----------------
const STORIES_DATA = [
  {
    id: "px1",
    productId: "px1",
    tag: "YÜKSEK VOLTAJ KORUMA",
    title: "Powerbox PX1",
    desc: "Tüm prizleri tek noktadan akım korumalıya çevirir. Anlık dijital voltaj & tüketim ekranı ile kombi ve beyaz eşyalarınızı güvende tutar.",
    image: "assets/images/urun/px1.png",
    waMsg: "Merhaba, Powerbox PX1 Yüksek Voltaj Koruma Modülü için sipariş ve fiyat bilgisi almak istiyorum."
  },
  {
    id: "px2",
    productId: "px2",
    tag: "YÜKSEK VOLTAJ KORUMA",
    title: "Powerbox PX2",
    desc: "Çift kademeli koruma devresi ve dijital voltaj göstergesi ile evinizdeki tüm prizleri tek noktadan güvenceye alır.",
    image: "assets/images/urun/px2.png",
    waMsg: "Merhaba, Powerbox PX2 Voltaj Koruma Modülü için sipariş ve fiyat bilgisi almak istiyorum."
  },
  {
    id: "px3",
    productId: "px3",
    tag: "YÜKSEK VOLTAJ KORUMA",
    title: "Powerbox PX3",
    desc: "Sigorta kutusu içi kompakt montaj. Ekstra kapasitör devresi ile ani gerilim darbelerini ve pik dalgalanmalarını filtreler.",
    image: "assets/images/urun/px3.png",
    waMsg: "Merhaba, Powerbox PX3 Voltaj Koruma Modülü için sipariş ve fiyat bilgisi almak istiyorum."
  },
  {
    id: "gc1",
    productId: "gc1",
    tag: "KABLOSUZ GAZ ALARMI",
    title: "Powerbox G-C Fişli Gaz Alarmı",
    desc: "220V prize doğrudan tak-çalıştır. Dış sensörlü erken kaçak tespiti ve 100 dB güçlü siren ile mutfak ve kombiniz daima güvende.",
    image: "assets/images/urun/gc1-gaz.png",
    waMsg: "Merhaba, Powerbox G-C Fişli Gaz Alarm Cihazı için sipariş ve fiyat bilgisi almak istiyorum."
  },
  {
    id: "ga",
    productId: "ga",
    tag: "TÜRKİYE'DE İLK & TEK",
    title: "Powerbox G-A Araç Gaz Alarmı",
    desc: "LPG'li araç sahipleri için ister 3 adet kalem pil ister 12V akü beslemesiyle seyyar ve sabit sızıntı dedektörü.",
    image: "assets/images/urun/ga-arac.png",
    waMsg: "Merhaba, Powerbox G-A Araç İçi Gaz Alarmı için sipariş ve fiyat bilgisi almak istiyorum."
  },
  {
    id: "kg",
    productId: "kg",
    tag: "KARAVAN & TEKNE ÖZEL",
    title: "Powerbox K-G Karavan Alarmı",
    desc: "Karavan ve tekneler için pilli veya 5V taşınabilir mobil gaz & CO erken uyarı dedektörü.",
    image: "assets/images/urun/kg-karavan.png",
    waMsg: "Merhaba, Powerbox K-G Karavan Gaz Alarmı için sipariş ve fiyat bilgisi almak istiyorum."
  },
  {
    id: "tasarruf",
    productId: "tasarruf",
    tag: "MONOFAZE EV & TRİFAZE SANAYİ",
    title: "Powerbox Elektrik Tasarruf (Ev Tipi)",
    desc: "Ev tipi monofaze sistemlerde %25'e varan tasarruf. Sanayi tipi modeller için işletmenize özel kW teklifi alın.",
    image: "assets/images/urun/elektrik-tasarruf.png",
    waMsg: "Merhaba, Powerbox Elektrik Tasarruf Cihazı hakkında bilgi ve sipariş almak istiyorum."
  },
  {
    id: "ap1",
    productId: "ap1",
    tag: "16A GÜÇLÜ PRİZ",
    title: "Powerbox AP1 Akım Korumalı Priz",
    desc: "Ekstra kapasitör haznesi sayesinde voltaj oynamalarını filtreler, beyaz eşyaların ömrünü uzatır ve enerji tasarrufuna destek olur.",
    image: "assets/images/urun/ap1.png",
    waMsg: "Merhaba, Powerbox AP1 Akım Korumalı Priz için sipariş ve fiyat bilgisi almak istiyorum."
  },
  {
    id: "hasere",
    productId: "hasere",
    tag: "GERÇEK 19-22 kHz SES",
    title: "Powerbox Ultrasonik Haşere Kovucu",
    desc: "Zehirsiz, kokusuz, gerçek 19-22 kHz frekansla sinek, sivrisinek ve fareleri uzaklaştırır. Telefon kamerasıyla anında test edilir.",
    image: "assets/images/urun/hasere-kovucu.png",
    waMsg: "Merhaba, Powerbox Gerçek 22 kHz Haşere Kovucu için sipariş ve fiyat bilgisi almak istiyorum."
  },
  {
    id: "elektrosok",
    productId: "elektrosok",
    tag: "400 kV YÜKSEK GERİLİM",
    title: "Powerbox Elektro Şok Cihazı",
    desc: "400 kV ark deşarjı, dahili LED feneri ve emniyet kilitli kompakt gövdesiyle üst düzey caydırıcı kişisel koruma.",
    image: "assets/images/urun/elektrosok.png",
    waMsg: "Merhaba, Powerbox 400 kV Elektro Şok Cihazı için sipariş ve fiyat bilgisi almak istiyorum."
  },
  {
    id: "demonte",
    productId: "demonte",
    tag: "GENÇ ÜRETİCİLER & AR-GE",
    title: "Demonte Kit & Boş Plastik Kutular",
    desc: "Yetenekli gençlerimiz ve geliştiriciler üretsin diye demonte devre kitleri ve boş plastik cihaz kutuları avantajlı fiyatlarla!",
    image: "assets/images/demonte-kutu-poster.jpg",
    waMsg: "Merhaba, Powerbox demonte kit paketleri ve boş plastik kutular hakkında sipariş ve bilgi almak istiyorum."
  }
];

// ---------------- SHOPPING CART SYSTEM (Sepet Yönetimi & LocalStorage) ----------------
let cart = [];

function loadCart() {
  try {
    const saved = localStorage.getItem("powerbox_cart_v2");
    cart = saved ? JSON.parse(saved) : [];
  } catch (e) {
    cart = [];
  }
  renderCartUI();
}

function saveCart() {
  try {
    localStorage.setItem("powerbox_cart_v2", JSON.stringify(cart));
  } catch (e) {}
  renderCartUI();
}

function addToCart(productId, qty = 1) {
  const prod = PRODUCTS_DATA[productId];
  if (!prod) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty: qty });
  }

  saveCart();
  showToast(`✓ ${prod.title} sepete eklendi!`, true);
  animateCartButton();
}
window.addToCart = addToCart;

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  showToast("Ürün sepetten kaldırıldı.");
}
window.removeFromCart = removeFromCart;

function updateCartQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
  } else {
    saveCart();
  }
}
window.updateCartQty = updateCartQty;

function clearCart() {
  if (cart.length === 0) return;
  cart = [];
  saveCart();
  showToast("Sepetiniz temizlendi.");
}
window.clearCart = clearCart;

function getCartTotals() {
  let count = 0;
  let subtotal = 0;
  let oldSubtotal = 0;

  cart.forEach(item => {
    const prod = PRODUCTS_DATA[item.id];
    if (prod) {
      count += item.qty;
      subtotal += prod.price * item.qty;
      oldSubtotal += prod.oldPrice * item.qty;
    }
  });

  const totalDiscount = Math.max(0, oldSubtotal - subtotal);
  return { count, subtotal, oldSubtotal, totalDiscount };
}

function renderCartUI() {
  const { count, subtotal, oldSubtotal, totalDiscount } = getCartTotals();

  // Update Badges
  const headerBadge = document.getElementById("headerCartBadge");
  const floatingBadge = document.getElementById("floatingCartBadge");
  const floatingTotal = document.getElementById("floatingCartTotal");
  const drawerCount = document.getElementById("drawerCartCount");
  const dockBadge = document.getElementById("dockCartBadge");

  if (headerBadge) {
    headerBadge.textContent = count;
    headerBadge.style.display = count > 0 ? "inline-flex" : "none";
  }
  if (dockBadge) {
    dockBadge.textContent = count;
    dockBadge.style.display = count > 0 ? "inline-flex" : "none";
  }
  if (floatingBadge) {
    floatingBadge.textContent = count;
  }
  if (floatingTotal) {
    floatingTotal.textContent = `${subtotal.toLocaleString("tr-TR")} TL`;
  }
  if (drawerCount) {
    drawerCount.textContent = count;
  }

  // Floating button highlight
  const floatingBtn = document.getElementById("floatingCartBtn");
  if (floatingBtn) {
    if (count > 0) {
      floatingBtn.classList.add("has-items");
    } else {
      floatingBtn.classList.remove("has-items");
    }
  }

  // Render Drawer Content
  const drawerItems = document.getElementById("cartDrawerItems");
  const drawerEmpty = document.getElementById("cartDrawerEmpty");
  const drawerFooter = document.getElementById("cartDrawerFooter");

  if (!drawerItems) return;

  if (cart.length === 0) {
    drawerItems.innerHTML = "";
    if (drawerEmpty) drawerEmpty.style.display = "flex";
    if (drawerFooter) drawerFooter.style.display = "none";
  } else {
    if (drawerEmpty) drawerEmpty.style.display = "none";
    if (drawerFooter) drawerFooter.style.display = "block";

    drawerItems.innerHTML = cart.map(item => {
      const prod = PRODUCTS_DATA[item.id];
      if (!prod) return "";
      const lineTotal = prod.price * item.qty;
      const lineOldTotal = prod.oldPrice * item.qty;

      return `
        <div class="cart-drawer-item">
          <div class="cart-item-thumb-box">
            <img src="${prod.image}" alt="${prod.title}" class="cart-item-img">
          </div>
          <div class="cart-item-main">
            <div class="cart-item-top">
              <h4 class="cart-item-title">${prod.title}</h4>
              <button type="button" class="cart-item-delete" onclick="removeFromCart('${prod.id}')" title="Kaldır">✕</button>
            </div>
            <div class="cart-item-prices">
              <span class="cart-item-now">${prod.price.toLocaleString("tr-TR")} TL</span>
              <span class="cart-item-old">${prod.oldPrice.toLocaleString("tr-TR")} TL</span>
              <span class="cart-item-disc">${prod.discount}</span>
            </div>
            <div class="cart-item-bottom">
              <div class="cart-qty-ctrl">
                <button type="button" class="qty-btn" onclick="updateCartQty('${prod.id}', -1)" aria-label="Azalt">−</button>
                <span class="qty-display">${item.qty}</span>
                <button type="button" class="qty-btn" onclick="updateCartQty('${prod.id}', 1)" aria-label="Artır">+</button>
              </div>
              <div class="cart-item-line-total">
                <span class="lbl">Tutar:</span>
                <strong>${lineTotal.toLocaleString("tr-TR")} TL</strong>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join("");

    // Update Drawer Summary Numbers
    const sumOld = document.getElementById("cartSumOld");
    const sumDiscount = document.getElementById("cartSumDiscount");
    const sumFinal = document.getElementById("cartSumFinal");

    if (sumOld) sumOld.textContent = `${oldSubtotal.toLocaleString("tr-TR")} TL`;
    if (sumDiscount) sumDiscount.textContent = `- ${totalDiscount.toLocaleString("tr-TR")} TL`;
    if (sumFinal) sumFinal.textContent = `${subtotal.toLocaleString("tr-TR")} TL`;
  }
}

function animateCartButton() {
  const floatingBtn = document.getElementById("floatingCartBtn");
  if (floatingBtn) {
    floatingBtn.classList.remove("cart-bounce");
    void floatingBtn.offsetWidth; // trigger reflow
    floatingBtn.classList.add("cart-bounce");
  }
  const dockBtn = document.querySelector(".dock-btn-cart");
  if (dockBtn) {
    dockBtn.classList.remove("cart-bounce");
    void dockBtn.offsetWidth;
    dockBtn.classList.add("cart-bounce");
  }
}

// ---------------- WHATSAPP DIRECT BUY & CART CHECKOUT ----------------
function buyProductNow(productId) {
  const prod = PRODUCTS_DATA[productId];
  if (!prod) return;

  const msg = `Merhaba Powerbox, lansman kampanyası kapsamında 1 adet *${prod.fullName || prod.title}* (${prod.price.toLocaleString("tr-TR")} TL) indirimli perakende fiyatıyla sipariş etmek istiyorum. Teslimat ve ödeme detaylarını alabilir miyim?`;
  const url = `https://wa.me/${WHATSAPP_INT_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}
window.buyProductNow = buyProductNow;

function sendCartToWhatsApp() {
  if (cart.length === 0) {
    showToast("Sepetiniz boş! Lütfen sipariş etmek istediğiniz ürünleri sepete ekleyin.");
    return;
  }
  const { count, subtotal, oldSubtotal, totalDiscount } = getCartTotals();

  let msg = `Merhaba Powerbox, web sitenizden sepetime eklediğim ürünleri sipariş etmek istiyorum:\n\n`;
  msg += `📦 *SİPARİŞ LİSTESİ:* (${count} Adet Ürün)\n`;

  cart.forEach((item, index) => {
    const prod = PRODUCTS_DATA[item.id];
    if (prod) {
      const itemTotal = prod.price * item.qty;
      msg += `${index + 1}) *${prod.fullName || prod.title}* x ${item.qty} adet = ${itemTotal.toLocaleString("tr-TR")} TL\n`;
    }
  });

  msg += `\n💰 *TOPLAM PERAKENDE TUTAR:* ${subtotal.toLocaleString("tr-TR")} TL`;
  if (totalDiscount > 0) {
    msg += ` (Lansman İndirimiyle ${totalDiscount.toLocaleString("tr-TR")} TL Kazanç)`;
  }
  msg += `\n\nTeslimat adresi ve ödeme bilgileri (Havale / EFT / Kapıda Ödeme / Kredi Kartı) için yardımcı olabilir misiniz?`;

  const url = `https://wa.me/${WHATSAPP_INT_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}
window.sendCartToWhatsApp = sendCartToWhatsApp;

function sendCartWholesaleToWhatsApp() {
  if (cart.length === 0) {
    showToast("Sepetiniz boş! Lütfen toptan teklif almak istediğiniz ürünleri sepete ekleyin.");
    return;
  }
  let msg = `Merhaba Powerbox, web sitenizden seçtiğim ürünler için koli bazlı / toptan alım özel iskonto teklifi rica ediyorum:\n\n`;
  msg += `💼 *TALEP EDİLEN ÜRÜNLER:*\n`;

  cart.forEach((item, index) => {
    const prod = PRODUCTS_DATA[item.id];
    if (prod) {
      msg += `• *${prod.fullName || prod.title}* (Öngörülen Adet: ${item.qty})\n`;
    }
  });

  msg += `\nToptan fiyat listenizi, koli adetlerini ve teslim koşullarınızı iletebilir misiniz?`;
  const url = `https://wa.me/${WHATSAPP_INT_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}
window.sendCartWholesaleToWhatsApp = sendCartWholesaleToWhatsApp;

// ---------------- CART DRAWER TOGGLE ----------------
function openCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  if (drawer) {
    drawer.classList.add("is-active");
    document.body.style.overflow = "hidden";
  }
  // If story modal is open, close it cleanly so cart is front and center
  if (typeof closeStoryModal === "function") {
    const storyModal = document.getElementById("storyModal");
    if (storyModal && storyModal.classList.contains("is-active")) {
      closeStoryModal();
    }
  }
}
window.openCartDrawer = openCartDrawer;

function closeCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  if (drawer) {
    drawer.classList.remove("is-active");
    document.body.style.overflow = "";
  }
}
window.closeCartDrawer = closeCartDrawer;

function toggleCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  if (drawer && drawer.classList.contains("is-active")) {
    closeCartDrawer();
  } else {
    openCartDrawer();
  }
}
window.toggleCartDrawer = toggleCartDrawer;

// ---------------- TOAST NOTIFICATION SYSTEM ----------------
function showToast(message, withCartLink = false) {
  let toast = document.getElementById("pbToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "pbToast";
    toast.className = "pb-toast";
    document.body.appendChild(toast);
  }

  if (withCartLink) {
    toast.innerHTML = `
      <div class="toast-msg-wrap">
        <span>${message}</span>
        <button type="button" class="toast-cart-btn" onclick="openCartDrawer()">Sepete Git →</button>
      </div>
    `;
  } else {
    toast.innerHTML = `<span>${message}</span>`;
  }

  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3600);
}
window.showToast = showToast;

// ---------------- DEMONTE POSTER LIGHTBOX / MODAL ----------------
function openPosterModal(imageSrc, title) {
  const modal = document.getElementById("posterModal");
  const img = document.getElementById("posterModalImg");
  const heading = document.getElementById("posterModalTitle");

  if (!modal || !img) return;
  img.src = imageSrc;
  img.alt = title || "Demonte Kiti";
  if (heading) heading.textContent = title || "Demonte Devre Kiti";

  modal.classList.add("is-active");
  document.body.style.overflow = "hidden";
}
window.openPosterModal = openPosterModal;

function closePosterModal() {
  const modal = document.getElementById("posterModal");
  if (!modal) return;
  modal.classList.remove("is-active");
  document.body.style.overflow = "";
}
window.closePosterModal = closePosterModal;

// ---------------- CATEGORY FILTER ("TIK TIK" SNAPPY NAVIGATION) ----------------
function filterCategory(catKey) {
  // Update Tab Buttons
  const tabBtns = document.querySelectorAll("#categoryTabsBar .cat-tab-btn");
  tabBtns.forEach(btn => {
    if (btn.dataset.filter === catKey) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Filter Product Cards
  const cards = document.querySelectorAll("#productsGrid .product-card");
  cards.forEach(card => {
    const cardCat = card.dataset.category;
    if (catKey === "all" || cardCat === catKey) {
      card.style.display = "";
      card.classList.remove("is-hidden");
    } else {
      card.style.display = "none";
      card.classList.add("is-hidden");
    }
  });

  // If clicked from categories section or not already in products view, smooth scroll to products
  const productsSection = document.getElementById("urunler");
  if (productsSection) {
    const rect = productsSection.getBoundingClientRect();
    if (rect.top < -50 || rect.top > 300) {
      productsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}
window.filterCategory = filterCategory;

// ---------------- PRODUCT DETAIL MODAL ----------------
let currentModalProductId = null;

function openProductModal(productId) {
  const product = PRODUCTS_DATA[productId];
  if (!product) return;
  currentModalProductId = productId;

  const modal = document.getElementById("productModal");
  const modalImg = document.getElementById("modalImg");
  const modalCategoryTag = document.getElementById("modalCategoryTag");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalFeatures = document.getElementById("modalFeatures");

  // Price elements inside modal
  const modalOldPrice = document.getElementById("modalOldPrice");
  const modalFinalPrice = document.getElementById("modalFinalPrice");
  const modalDiscountTag = document.getElementById("modalDiscountTag");

  // Action buttons
  const modalDirectBuyBtn = document.getElementById("modalDirectBuyBtn");
  const modalAddCartBtn = document.getElementById("modalAddCartBtn");
  const modalWholesaleBtn = document.getElementById("modalWholesaleBtn");

  if (modalImg) {
    modalImg.src = product.image;
    modalImg.alt = product.title;
  }
  if (modalCategoryTag) modalCategoryTag.textContent = product.category;
  if (modalTitle) modalTitle.textContent = product.fullName || product.title;
  if (modalDesc) modalDesc.textContent = product.desc;

  if (modalOldPrice) modalOldPrice.textContent = `${product.oldPrice.toLocaleString("tr-TR")} TL`;
  if (modalFinalPrice) modalFinalPrice.textContent = `${product.price.toLocaleString("tr-TR")} TL`;
  if (modalDiscountTag) modalDiscountTag.textContent = product.discount;

  // Features list
  if (modalFeatures) {
    modalFeatures.innerHTML = product.features.map(f => `
      <div class="modal-feat-item">
        <span class="icon">✓</span>
        <span>${f}</span>
      </div>
    `).join("");
  }

  // Setup buttons
  if (modalDirectBuyBtn) {
    modalDirectBuyBtn.onclick = () => buyProductNow(productId);
  }
  if (modalAddCartBtn) {
    modalAddCartBtn.onclick = () => {
      addToCart(productId);
      closeProductModal();
    };
  }
  if (modalWholesaleBtn) {
    const encodedWholesale = encodeURIComponent(product.wholesaleMsg || `Merhaba, ${product.title} için toptan teklif almak istiyorum.`);
    modalWholesaleBtn.href = `https://wa.me/${WHATSAPP_INT_NUMBER}?text=${encodedWholesale}`;
    modalWholesaleBtn.innerHTML = productId === "tasarruf"
      ? `<span>🏭 Sanayi & İş Yeri (Özel kW) Teklifi Al</span>`
      : `<span>💼 Toptan Teklif İste</span>`;
  }

  // Open modal
  modal.classList.add("is-active");
  document.body.style.overflow = "hidden";
}
window.openProductModal = openProductModal;

function closeProductModal() {
  const modal = document.getElementById("productModal");
  if (modal) {
    modal.classList.remove("is-active");
    document.body.style.overflow = "";
  }
  currentModalProductId = null;
}
window.closeProductModal = closeProductModal;

// ---------------- VIDEO MODAL ----------------
function openVideoModal() {
  const modal = document.getElementById("videoModal");
  if (modal) {
    modal.classList.add("is-active");
    document.body.style.overflow = "hidden";
  }
}
window.openVideoModal = openVideoModal;

function closeVideoModal() {
  const modal = document.getElementById("videoModal");
  if (modal) {
    modal.classList.remove("is-active");
    document.body.style.overflow = "";
  }
}
window.closeVideoModal = closeVideoModal;

// ---------------- QUICK SEARCH ----------------
function setupSearch() {
  const searchTriggerBtn = document.getElementById("searchTriggerBtn");
  const searchModal = document.getElementById("searchModal");
  const searchCloseBtn = document.getElementById("searchCloseBtn");
  const productSearchInput = document.getElementById("productSearchInput");
  const searchResultsList = document.getElementById("searchResultsList");

  if (!searchTriggerBtn || !searchModal || !productSearchInput || !searchResultsList) return;

  function openSearch() {
    searchModal.classList.add("is-active");
    document.body.style.overflow = "hidden";
    setTimeout(() => productSearchInput.focus(), 100);
    renderSearchResults(productSearchInput.value);
  }

  function closeSearch() {
    searchModal.classList.remove("is-active");
    document.body.style.overflow = "";
    productSearchInput.value = "";
  }
  window.closeSearch = closeSearch;

  searchTriggerBtn.addEventListener("click", openSearch);
  if (searchCloseBtn) searchCloseBtn.addEventListener("click", closeSearch);

  searchModal.addEventListener("click", (e) => {
    if (e.target === searchModal) closeSearch();
  });

  productSearchInput.addEventListener("input", (e) => {
    renderSearchResults(e.target.value.trim());
  });

  function renderSearchResults(query) {
    const q = query.toLowerCase();
    const products = Object.values(PRODUCTS_DATA);
    const filtered = q === "" 
      ? products 
      : products.filter(p => 
          p.title.toLowerCase().includes(q) || 
          p.category.toLowerCase().includes(q) || 
          p.desc.toLowerCase().includes(q) ||
          p.id.toLowerCase().includes(q)
        );

    if (filtered.length === 0) {
      searchResultsList.innerHTML = `
        <div class="search-empty">
          <p>Aradığınız kriterlere uygun ürün bulunamadı: "<strong>${escapeHtml(query)}</strong>"</p>
        </div>
      `;
      return;
    }

    searchResultsList.innerHTML = filtered.map(p => `
      <div class="search-result-item" onclick="onSearchResultClick('${p.id}')">
        <img src="${p.image}" alt="${p.title}" class="search-thumb">
        <div class="search-info">
          <span class="search-cat">${p.category}</span>
          <h4 class="search-title">${p.title}</h4>
          <div class="search-price-row">
            <span class="search-old-price">${p.oldPrice.toLocaleString("tr-TR")} TL</span>
            <span class="search-final-price">${p.price.toLocaleString("tr-TR")} TL</span>
            <span class="search-discount-badge">${p.discount}</span>
          </div>
        </div>
        <button type="button" class="search-action-btn">İncele →</button>
      </div>
    `).join("");
  }
}

function onSearchResultClick(productId) {
  if (window.closeSearch) window.closeSearch();
  openProductModal(productId);
}
window.onSearchResultClick = onSearchResultClick;

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

// ---------------- INSTAGRAM STORY VIEWER ----------------
let currentStoryIndex = 0;
let storyTimer = null;
const STORY_DURATION = 7500; // ms

function openStory(index) {
  currentStoryIndex = index;
  const modal = document.getElementById("storyModal");
  if (!modal) return;

  modal.classList.add("is-active");
  document.body.style.overflow = "hidden";

  setupStoryProgressBars();
  showCurrentStory();
  setupStoryPauseHandlers();
}
window.openStory = openStory;

function closeStory() {
  const modal = document.getElementById("storyModal");
  if (!modal) return;

  modal.classList.remove("is-active");
  document.body.style.overflow = "";

  clearTimeout(storyTimer);
}
window.closeStory = closeStory;

function setupStoryProgressBars() {
  const container = document.getElementById("storyProgressBar");
  if (!container) return;

  container.innerHTML = STORIES_DATA.map((_, i) => `
    <div class="progress-segment" data-index="${i}">
      <div class="progress-fill"></div>
    </div>
  `).join("");
}

function showCurrentStory() {
  clearTimeout(storyTimer);

  const story = STORIES_DATA[currentStoryIndex];
  if (!story) return;
  const prod = PRODUCTS_DATA[story.productId];

  const tagEl = document.getElementById("storyTag");
  const titleEl = document.getElementById("storyTitle");
  const descEl = document.getElementById("storyDesc");
  const imgEl = document.getElementById("storyImg");
  const oldPriceEl = document.getElementById("storyOldPrice");
  const priceNowEl = document.getElementById("storyPriceNow");
  const discountTagEl = document.getElementById("storyDiscountTag");
  const wholesaleTipEl = document.getElementById("storyWholesaleTip");
  const bulletsEl = document.getElementById("storyBullets");
  const jumpBtn = document.getElementById("storyJumpBtn");

  if (tagEl) tagEl.textContent = story.tag || (prod ? prod.category : "GÜVENLİK TEKNOLOJİSİ");
  if (titleEl) titleEl.textContent = prod?.fullName || story.title;
  if (descEl) descEl.textContent = story.desc || prod?.desc || "";
  
  if (imgEl) {
    imgEl.src = story.image || prod?.image;
    imgEl.alt = story.title;
  }

  // Pricing Elements
  if (oldPriceEl) {
    oldPriceEl.textContent = prod ? `${prod.oldPrice.toLocaleString("tr-TR")} TL` : "";
  }
  if (priceNowEl) {
    priceNowEl.textContent = prod ? `${prod.price.toLocaleString("tr-TR")} TL` : "";
  }
  if (discountTagEl) {
    discountTagEl.textContent = prod?.discount || "Lansman İndirimi";
  }
  if (wholesaleTipEl) {
    wholesaleTipEl.textContent = prod?.wholesaleTip 
      ? `💼 ${prod.wholesaleTip}` 
      : "💼 Toptan alımlarda koli bazlı özel iskonto uygulanır";
  }

  // Key Highlights / Bullet Points
  if (bulletsEl) {
    if (prod && prod.features && prod.features.length > 0) {
      const topBullets = prod.features.slice(0, 2);
      bulletsEl.innerHTML = topBullets.map(f => `
        <div class="story-bullet-item">
          <span class="story-bullet-check">✓</span>
          <span class="story-bullet-text">${escapeHtml(f)}</span>
        </div>
      `).join("");
    } else {
      bulletsEl.innerHTML = "";
    }
  }

  // Jump button to full details
  if (jumpBtn) {
    jumpBtn.onclick = () => {
      closeStory();
      if (story.productId === "demonte") {
        const sec = document.getElementById("demonte-kit");
        if (sec) sec.scrollIntoView({ behavior: "smooth" });
      } else {
        openProductModal(story.productId);
      }
    };
  }

  // Update Progress Bars UI
  const segments = document.querySelectorAll("#storyProgressBar .progress-segment");
  segments.forEach((seg, i) => {
    const fill = seg.querySelector(".progress-fill");
    if (!fill) return;

    if (i < currentStoryIndex) {
      fill.style.width = "100%";
      fill.style.transition = "none";
    } else if (i === currentStoryIndex) {
      fill.style.width = "0%";
      fill.style.transition = "none";
    } else {
      fill.style.width = "0%";
      fill.style.transition = "none";
    }
  });

  // Start Fill Animation
  requestAnimationFrame(() => {
    const currentSeg = segments[currentStoryIndex];
    if (currentSeg) {
      const fill = currentSeg.querySelector(".progress-fill");
      if (fill) {
        fill.style.transition = `width ${STORY_DURATION}ms linear`;
        fill.style.width = "100%";
      }
    }
  });

  storyTimer = setTimeout(() => {
    nextStory();
  }, STORY_DURATION);
}

function buyStoryNow() {
  const story = STORIES_DATA[currentStoryIndex];
  if (!story) return;
  buyProductNow(story.productId);
}
window.buyStoryNow = buyStoryNow;

function addStoryToCart() {
  const story = STORIES_DATA[currentStoryIndex];
  if (!story) return;
  const prod = PRODUCTS_DATA[story.productId];
  addToCart(story.productId);

  // In-button feedback inside the story
  const addBtn = document.getElementById("storyAddCartBtn");
  if (addBtn) {
    const origHtml = addBtn.innerHTML;
    addBtn.innerHTML = `<span>✓ Eklendi!</span>`;
    addBtn.style.background = "#16a34a";
    addBtn.style.color = "#ffffff";
    setTimeout(() => {
      addBtn.innerHTML = origHtml;
      addBtn.style.background = "";
      addBtn.style.color = "";
    }, 2200);
  }

  showToast(`✓ ${prod ? prod.title : "Ürün"} sepete eklendi!`, true);
  
  // Pause story briefly to let the user see the addition
  clearTimeout(storyTimer);
  storyTimer = setTimeout(() => {
    nextStory();
  }, 4000);
}
window.addStoryToCart = addStoryToCart;

function setupStoryPauseHandlers() {
  const container = document.getElementById("storyContainer");
  if (!container || container._hasPauseHandlers) return;
  container._hasPauseHandlers = true;

  container.addEventListener("mouseenter", () => {
    clearTimeout(storyTimer);
    const curFill = document.querySelector(`#storyProgressBar .progress-segment[data-index="${currentStoryIndex}"] .progress-fill`);
    if (curFill) {
      const computedWidth = window.getComputedStyle(curFill).width;
      curFill.style.transition = "none";
      curFill.style.width = computedWidth;
    }
  });

  container.addEventListener("mouseleave", () => {
    showCurrentStory();
  });
}

function nextStory() {
  if (currentStoryIndex < STORIES_DATA.length - 1) {
    currentStoryIndex++;
    showCurrentStory();
  } else {
    closeStory();
  }
}
window.nextStory = nextStory;

function prevStory() {
  if (currentStoryIndex > 0) {
    currentStoryIndex--;
    showCurrentStory();
  } else {
    showCurrentStory();
  }
}
window.prevStory = prevStory;

// ---------------- DOM CONTENT LOADED INITIALIZATION ----------------
document.addEventListener("DOMContentLoaded", () => {
  // Initialize shopping cart
  loadCart();

  // Floating Cart Button Listener
  const floatingCartBtn = document.getElementById("floatingCartBtn");
  if (floatingCartBtn) {
    floatingCartBtn.addEventListener("click", toggleCartDrawer);
  }

  // Header Cart Button Listener
  const headerCartBtn = document.getElementById("headerCartBtn");
  if (headerCartBtn) {
    headerCartBtn.addEventListener("click", toggleCartDrawer);
  }

  // Cart Drawer Backdrop Close
  const cartDrawerBackdrop = document.getElementById("cartDrawerBackdrop");
  if (cartDrawerBackdrop) {
    cartDrawerBackdrop.addEventListener("click", closeCartDrawer);
  }
  const cartDrawerCloseBtn = document.getElementById("cartDrawerCloseBtn");
  if (cartDrawerCloseBtn) {
    cartDrawerCloseBtn.addEventListener("click", closeCartDrawer);
  }

  // Poster Modal Backdrop Close
  const posterModal = document.getElementById("posterModal");
  if (posterModal) {
    posterModal.addEventListener("click", (e) => {
      if (e.target === posterModal) closePosterModal();
    });
  }
  const posterModalCloseBtn = document.getElementById("posterModalCloseBtn");
  if (posterModalCloseBtn) {
    posterModalCloseBtn.addEventListener("click", closePosterModal);
  }

  // Product Modal Backdrop Close
  const productModal = document.getElementById("productModal");
  if (productModal) {
    productModal.addEventListener("click", (e) => {
      if (e.target === productModal) closeProductModal();
    });
  }
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeProductModal);
  }

  // Video Modal Backdrop Close
  const videoModal = document.getElementById("videoModal");
  if (videoModal) {
    videoModal.addEventListener("click", (e) => {
      if (e.target === videoModal) closeVideoModal();
    });
  }
  const videoCloseBtn = document.getElementById("videoCloseBtn");
  if (videoCloseBtn) {
    videoCloseBtn.addEventListener("click", closeVideoModal);
  }

  // Story Modal Backdrop Close
  const storyModal = document.getElementById("storyModal");
  if (storyModal) {
    storyModal.addEventListener("click", (e) => {
      if (e.target === storyModal) closeStory();
    });
  }
  const storyCloseBtn = document.getElementById("storyCloseBtn");
  if (storyCloseBtn) {
    storyCloseBtn.addEventListener("click", closeStory);
  }

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProductModal();
      closeVideoModal();
      closeStory();
      closePosterModal();
      closeCartDrawer();
      if (window.closeSearch) window.closeSearch();
    } else if (e.key === "ArrowRight") {
      const sModal = document.getElementById("storyModal");
      if (sModal && sModal.classList.contains("is-active")) {
        nextStory();
      }
    } else if (e.key === "ArrowLeft") {
      const sModal = document.getElementById("storyModal");
      if (sModal && sModal.classList.contains("is-active")) {
        prevStory();
      }
    }
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById("mobileMenuToggle");
  const navMenu = document.getElementById("navMenu");
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("is-open");
    });

    // Close menu when clicking link
    navMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("is-open");
      });
    });
  }

  // Active navigation highlight on scroll
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = ["hero", "kategoriler", "demonte-kit", "urunler", "hakkimizda", "iletisim"].map(id => document.getElementById(id));

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach(sec => {
      if (!sec) return;
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  });

  // Setup search
  setupSearch();
});
