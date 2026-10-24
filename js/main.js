/**
 * POWERBOX TEKNOLOJİ - Main JavaScript
 * High-Converting Corporate Landing Page
 */

const PRODUCTS_DATA = {
  px1: {
    id: "px1",
    title: "Powerbox PX1",
    category: "YÜKSEK VOLTAJ KORUMA MODÜLÜ",
    image: "assets/images/urun/px1.png",
    desc: "Tek bir modül ile evdeki tüm prizleri akım korumalı prize dönüştürün. Voltaj dalgalanmalarına karşı tüm elektronik cihazlarınızı koruyun.",
    features: [
      "Elektrik çarpma riski olmadan 1 dakikada kolay bağlantı",
      "Yapışkan yüzeyi ile sigorta kutunuzun yanına kırmadan delmeden anında montaj",
      "Ekranda anlık voltaj ve tüketim değerini görebilirsiniz",
      "Ekstra kapasitör devresi ile ani pik dalgalanmalarını filtreler",
      "2 Yıl Üretici Garantisi"
    ],
    waMsg: "Merhaba, Powerbox PX1 Yüksek Voltaj Koruma Modülü için toptan sipariş ve fiyat bilgisi almak istiyorum."
  },
  px2: {
    id: "px2",
    title: "Powerbox PX2",
    category: "YÜKSEK VOLTAJ KORUMA MODÜLÜ",
    image: "assets/images/urun/px2.png",
    desc: "Gelişmiş çift kademeli koruma devresi ve dijital göstergesi ile evinizdeki tüm prizleri tek noktadan güvenceye alır.",
    features: [
      "Elektrik çarpma riski olmadan 1 dakikada kolay bağlantı",
      "Yapışkan yüzeyi ile sigorta kutunuzun yanına kırmadan delmeden anında montaj",
      "Ekranda anlık voltaj değerini görebilirsiniz",
      "Ekstra kapasitör devresi ile ani pik dalgalanmalarını filtreler",
      "2 Yıl Üretici Garantisi"
    ],
    waMsg: "Merhaba, Powerbox PX2 Yüksek Voltaj Koruma Modülü için toptan sipariş ve fiyat bilgisi almak istiyorum."
  },
  px3: {
    id: "px3",
    title: "Powerbox PX3",
    category: "YÜKSEK VOLTAJ KORUMA MODÜLÜ",
    image: "assets/images/urun/px3.png",
    desc: "Yüksek akım ve sanayi tipi hatlar için üst düzey aşırı gerilim kalkanı ve pik filtreleme modülüdür.",
    features: [
      "Elektrik çarpma riski olmadan 1 dakikada kolay bağlantı",
      "Yapışkan yüzeyi ile sigorta kutunuzun yanına kırmadan delmeden anında montaj",
      "Ekstra kapasitör devresi ile ani pik dalgalanmalarını filtreler",
      "2 Yıl Üretici Garantisi"
    ],
    waMsg: "Merhaba, Powerbox PX3 Yüksek Voltaj Koruma Modülü için toptan sipariş ve fiyat bilgisi almak istiyorum."
  },
  gc1: {
    id: "gc1",
    title: "Powerbox G-C Fişli Gaz Alarm Cihazı",
    category: "220V PRİZE TAKILAN KABLOSUZ ALARM",
    image: "assets/images/urun/gc1-gaz.png",
    desc: "Kurulum ve kablo çekme derdi olmadan doğrudan prize takılarak kullanılan yüksek güvenlikli gaz kaçak uyarı sistemidir.",
    features: [
      "Dış sensör yapısı ile doğalgaz kaçağını anında algılar",
      "Gaz kaçağı anında 100 dB güçlü sesli uyarı ile hemen ikaz eder",
      "Mutfak, kombi yanı ve doğalgaz boruları yakınında güvenle kullanım",
      "Talebe göre alev algılama ve gaz çeşitlerine göre üretim yapılır",
      "Bazen küçük detaylar hayat kurtarır..!"
    ],
    waMsg: "Merhaba, Powerbox G-C Fişli Gaz Alarm Cihazı için toptan sipariş ve fiyat bilgisi almak istiyorum."
  },
  ga: {
    id: "ga",
    title: "Powerbox G-A Araç İçi Gaz Alarmı",
    category: "TÜRKİYE'DE İLK VE TEK ARAÇ LPG ALARMI",
    image: "assets/images/urun/ga-arac.png",
    desc: "LPG'li araçlar için üretilen bu ürün bagajda uygun yere koyularak sadece 12V besleme verilerek sabit veya pil kullanarak gaz kokusu endişesinde dedektör olarak kullanılabilir.",
    features: [
      "İster 3 adet kalem pil ile seyyar, ister 12V besleme soketine aküden voltaj vererek kullanım",
      "Dış sensör yapısı ile gaz kaçağını milisaniyeler içinde algılar",
      "Gaz kaçağı anında 100 dB güçlü sesli siren ile sürücüyü ikaz eder",
      "Torpido, bagaj veya LPG tankı yakınına anında yapıştırılır",
      "Talebe göre alev algılama ve gaz çeşitlerine göre üretim yapılır",
      "Bazen küçük detaylar hayat kurtarır..!"
    ],
    waMsg: "Merhaba, Powerbox G-A Araç İçi Gaz Alarmı için toptan sipariş ve fiyat bilgisi almak istiyorum."
  },
  kg: {
    id: "kg",
    title: "Powerbox K-G Karavan Gaz Alarmı",
    category: "KARAVAN VE TEKNELERE ÖZEL ALARM",
    image: "assets/images/urun/kg-karavan.png",
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
    waMsg: "Merhaba, Powerbox K-G Karavan Gaz Alarmı için toptan sipariş ve fiyat bilgisi almak istiyorum."
  },
  tasarruf: {
    id: "tasarruf",
    title: "Powerbox Elektrik Tasarruf Cihazı",
    category: "MONOFAZE & TRİFAZE ÖZEL ÜRETİM",
    image: "assets/images/kategori/elektriktasarrufcihazları.png",
    desc: "Ev ve iş yerlerine uygun monofaze ve trifaze modeller. Her kW değerine göre taleplere uygun özel yapım imalat.",
    features: [
      "Ev ve iş yerlerine uygun monofaze ve trifaze modeller",
      "Her kW değerine uygun özel mühendislik imalatı",
      "Bobinli devrelerde oluşan ısınmadan ve zorlanmadan kaynaklı kayıp enerjiyi absorbe eder, hatları rahatlatır",
      "Mini kompanzasyon görevi görür, %25'e varan tasarruf sağlar",
      "2 Yıl Üretici Garantisi"
    ],
    waMsg: "Merhaba, Powerbox Elektrik Tasarruf Cihazı (Monofaze/Trifaze) için kW değerimize uygun özel sipariş ve toptan teklif almak istiyorum."
  },
  ap1: {
    id: "ap1",
    title: "Powerbox AP1 Akım Korumalı Priz",
    category: "16A GÜÇLÜ AKIM KORUMALI PRİZ",
    image: "assets/images/urun/elektrik-tasarruf.png",
    desc: "Rakipleri gibi sadece yüksek voltaja karşı korumaz; ekstra kapasitör haznesi sayesinde voltaj oynamalarını minimize ederek elektronik eşyalarınızın rahat çalışmasını sağlar ve ömrünü uzatır.",
    features: [
      "16A Güçlü priz yapısı ile yüksek akım çeken cihazlara tam uyum",
      "Ekstra kapasitör haznesi ile voltaj dalgalanmalarını minimize eder",
      "Elektronik cihazların rahat çalışmasını sağlayarak enerji tasarrufuna yardımcı olur",
      "Prize doğrudan tak-çalıştır pratik kullanım",
      "2 Yıl Üretici Garantisi"
    ],
    waMsg: "Merhaba, Powerbox AP1 Akım Korumalı Priz için toptan sipariş ve fiyat bilgisi almak istiyorum."
  },
  hasere: {
    id: "hasere",
    title: "Powerbox Gerçek 22 kHz Haşere Kovucu",
    category: "220V PRİZE TAK-ÇALIŞTIR ULTRASONİK",
    image: "assets/images/urun/hasere-kovucu.png",
    desc: "220V prize takılarak kullanılan Powerbox haşere kovucu, yaydığı 19-22 kHz ultrasonik ses dalgaları ile sinek, sivrisinek, fare dahil tüm haşeratı ortamdan uzaklaştırır.",
    features: [
      "Gerçek 19-22 kHz ultrasonik ses çıkışı haşeratı uzaklaştırır, ortamda barınmalarına izin vermez",
      "Cep telefonu kamerasını yaklaştırıp video kaydederek gerçek ses çıkışı hemen test edilebilir",
      "Kimyasal, tablet veya zehir içermez, çevre ve evcil hayvan dostudur",
      "Tak-çalıştır 7/24 kesintisiz koruma sağlar"
    ],
    waMsg: "Merhaba, Powerbox Gerçek 22 kHz Haşere Kovucu için toptan sipariş ve fiyat bilgisi almak istiyorum."
  },
  elektrosok: {
    id: "elektrosok",
    title: "Powerbox 400 kV Elektro Şok Cihazı",
    category: "YÜKSEK GERİLİM & KİŞİSEL GÜVENLİK",
    image: "assets/images/urun/elektrosok.png",
    desc: "Kişisel güvenlik ve caydırıcı koruma için özel olarak geliştirilmiş yüksek gerilimli kompakt elektro şok cihazı.",
    features: [
      "400 kva Yüksek gerilim ark deşarjı ile üstün caydırıcı ses ve kıvılcım etkisi",
      "Taşınabilir kompakt ergonomik tasarım, kolay taşıma",
      "Kişisel savunma, esnaf ve güvenlik görevlileri için pratik caydırıcı çözüm",
      "Dahili şarj edilebilir batarya ve emniyet kilit mekanizması"
    ],
    waMsg: "Merhaba, Powerbox 400 kV Elektro Şok Cihazı için toptan sipariş ve fiyat bilgisi almak istiyorum."
  }
};

// ---------------- INSTAGRAM STORIES DATA ----------------
const STORIES_DATA = [
  {
    id: "px1",
    productId: "px1",
    tag: "YÜKSEK VOLTAJ KORUMA",
    title: "Powerbox PX1",
    desc: "Tek bir modül ile evdeki tüm prizleri akım korumalıya dönüştürün. Anlık voltaj ve tüketim ekranlı.",
    image: "assets/images/urun/px1.png",
    waMsg: "Merhaba, Powerbox PX1 Yüksek Voltaj Koruma Modülü için toptan sipariş ve fiyat bilgisi almak istiyorum."
  },
  {
    id: "px2",
    productId: "px2",
    tag: "YÜKSEK VOLTAJ KORUMA",
    title: "Powerbox PX2",
    desc: "Çift kademeli koruma devresi ve anlık dijital voltaj göstergesi ile evinizdeki tüm prizleri tek noktadan korur.",
    image: "assets/images/urun/px2.png",
    waMsg: "Merhaba, Powerbox PX2 Yüksek Voltaj Koruma Modülü için toptan sipariş ve fiyat bilgisi almak istiyorum."
  },
  {
    id: "px3",
    productId: "px3",
    tag: "YÜKSEK VOLTAJ KORUMA",
    title: "Powerbox PX3",
    desc: "Yüksek akım ve sanayi tipi hatlar için ekstra kapasitörlü aşırı gerilim kalkanı ve pik filtreleme modülüdür.",
    image: "assets/images/urun/px3.png",
    waMsg: "Merhaba, Powerbox PX3 Yüksek Voltaj Koruma Modülü için toptan sipariş ve fiyat bilgisi almak istiyorum."
  },
  {
    id: "gc1",
    productId: "gc1",
    tag: "220V KABLOSUZ ALARM",
    title: "Powerbox G-C Fişli Gaz Alarmı",
    desc: "Dış sensör yapısıyla doğalgaz kaçağını anında algılar, 100 dB güçlü sirenle ikaz eder. Bazen küçük detaylar hayat kurtarır!",
    image: "assets/images/urun/gc1-gaz.png",
    waMsg: "Merhaba, Powerbox G-C Fişli Gaz Alarm Cihazı için toptan sipariş ve fiyat bilgisi almak istiyorum."
  },
  {
    id: "ga",
    productId: "ga",
    tag: "TÜRKİYE'DE İLK VE TEK",
    title: "Powerbox G-A Araç Gaz Alarmı",
    desc: "LPG'li araçlar için 3 kalem pil veya 12V akü beslemeli milisaniyelik gaz kaçak erken uyarı dedektörü.",
    image: "assets/images/urun/ga-arac.png",
    waMsg: "Merhaba, Powerbox G-A Araç İçi Gaz Alarmı için toptan sipariş ve fiyat bilgisi almak istiyorum."
  },
  {
    id: "kg",
    productId: "kg",
    tag: "KARAVAN VE TEKNELERE ÖZEL",
    title: "Powerbox K-G Karavan Alarmı",
    desc: "Karavan ve tekneler için pilli veya 5V adaptörle mobil taşınabilir gaz ve CO erken ikaz sistemi.",
    image: "assets/images/urun/kg-karavan.png",
    waMsg: "Merhaba, Powerbox K-G Karavan Gaz Alarmı için toptan sipariş ve fiyat bilgisi almak istiyorum."
  },
  {
    id: "ap1",
    productId: "ap1",
    tag: "16A GÜÇLÜ PRİZ",
    title: "Powerbox AP1 Akım Korumalı Priz",
    desc: "Ekstra kapasitör haznesiyle voltaj oynamalarını filtreler, cihazların rahat çalışmasını sağlayarak ömrünü uzatır.",
    image: "assets/images/urun/elektrik-tasarruf.png",
    waMsg: "Merhaba, Powerbox AP1 Akım Korumalı Priz için toptan sipariş ve fiyat bilgisi almak istiyorum."
  },
  {
    id: "hasere",
    productId: "hasere",
    tag: "GERÇEK 19-22 kHz",
    title: "Powerbox Haşere Kovucu",
    desc: "Gerçek 19-22 kHz ultrasonik sesle sinek, sivrisinek ve fareleri uzaklaştırır. Telefon kamerasıyla test edilebilir!",
    image: "assets/images/urun/hasere-kovucu.png",
    waMsg: "Merhaba, Powerbox Gerçek 22 kHz Haşere Kovucu için toptan sipariş ve fiyat bilgisi almak istiyorum."
  },
  {
    id: "elektrosok",
    productId: "elektrosok",
    tag: "400 kV YÜKSEK GERİLİM",
    title: "Powerbox 400 kV Elektro Şok",
    desc: "400 kV ark deşarjı, caydırıcı ses ve kıvılcım, dahili güçlü LED el feneri ve emniyet kilidi ile caydırıcı koruma.",
    image: "assets/images/urun/elektrosok.png",
    waMsg: "Merhaba, Powerbox 400 kV Elektro Şok Cihazı için toptan sipariş ve fiyat bilgisi almak istiyorum."
  },
  {
    id: "demonte",
    productId: "demonte",
    tag: "GENÇ ÜRETİCİLER & AR-GE",
    title: "Demonte Kit & Boş Plastik Kutular",
    desc: "Yetenekli gençlerimiz ve geliştiriciler üretsin diye demonte devre kitleri ve boş plastik cihaz kutuları toptan fiyatlarla!",
    image: "assets/images/kategori/yeniurunler.png",
    waMsg: "Merhaba, Powerbox demonte kit paketleri ve boş plastik kutular hakkında toptan bilgi ve fiyat almak istiyorum."
  }
];

const PHONE_NUMBER = "0549 409 53 53";
const WHATSAPP_INT_NUMBER = "905494095353";

// ---------------- SCROLL TO DEDICATED TASARRUF SECTION ----------------
function scrollToTasarrufSection() {
  const sec = document.getElementById("elektrik-tasarruf");
  if (sec) {
    sec.scrollIntoView({ behavior: "smooth", block: "start" });
    const card = sec.querySelector(".tasarruf-card-box");
    if (card) {
      card.style.boxShadow = "0 0 0 3px #38bdf8, 0 24px 60px rgba(56, 189, 248, 0.35)";
      setTimeout(() => {
        card.style.boxShadow = "";
      }, 1500);
    }
  }
}
window.scrollToTasarrufSection = scrollToTasarrufSection;

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
function openProductModal(productId) {
  const product = PRODUCTS_DATA[productId];
  if (!product) return;

  const modal = document.getElementById("productModal");
  const modalImg = document.getElementById("modalImg");
  const modalCategoryTag = document.getElementById("modalCategoryTag");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalFeatures = document.getElementById("modalFeatures");
  const modalWaBtn = document.getElementById("modalWaBtn");

  modalImg.src = product.image;
  modalImg.alt = product.title;
  modalCategoryTag.textContent = product.category;
  modalTitle.textContent = product.title;
  modalDesc.textContent = product.desc;

  // Features list
  modalFeatures.innerHTML = product.features.map(f => `
    <div class="modal-feat-item">
      <span class="icon">✓</span>
      <span>${f}</span>
    </div>
  `).join("");

  // WhatsApp Order Link
  const encodedMsg = encodeURIComponent(product.waMsg);
  modalWaBtn.href = `https://wa.me/${WHATSAPP_INT_NUMBER}?text=${encodedMsg}`;

  // Open modal
  modal.classList.add("is-active");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  const modal = document.getElementById("productModal");
  modal.classList.remove("is-active");
  document.body.style.overflow = "";
}

// ---------------- VIDEO MODAL ----------------
function openVideoModal() {
  const modal = document.getElementById("videoModal");
  modal.classList.add("is-active");
  document.body.style.overflow = "hidden";
}

function closeVideoModal() {
  const modal = document.getElementById("videoModal");
  modal.classList.remove("is-active");
  document.body.style.overflow = "";
}

// ---------------- QUICK SEARCH ----------------
function setupSearch() {
  const searchTriggerBtn = document.getElementById("searchTriggerBtn");
  const searchModal = document.getElementById("searchModal");
  const searchCloseBtn = document.getElementById("searchCloseBtn");
  const productSearchInput = document.getElementById("productSearchInput");
  const searchResultsList = document.getElementById("searchResultsList");

  if (!searchTriggerBtn || !searchModal) return;

  function openSearch() {
    searchModal.classList.add("is-active");
    setTimeout(() => productSearchInput.focus(), 100);
    renderResults("");
  }

  function closeSearch() {
    searchModal.classList.remove("is-active");
    productSearchInput.value = "";
  }

  function renderResults(query) {
    const q = query.trim().toLowerCase();
    const productsArray = Object.values(PRODUCTS_DATA);
    const filtered = q
      ? productsArray.filter(p => 
          p.title.toLowerCase().includes(q) || 
          p.desc.toLowerCase().includes(q) || 
          p.category.toLowerCase().includes(q)
        )
      : productsArray;

    if (filtered.length === 0) {
      searchResultsList.innerHTML = `<div style="padding: 20px; text-align: center; color: #64748b; font-size: 14px;">"${query}" ile ilgili ürün bulunamadı.</div>`;
      return;
    }

    searchResultsList.innerHTML = filtered.map(p => `
      <div class="search-result-item" onclick="closeSearch(); openProductModal('${p.id}')">
        <img src="${p.image}" alt="${p.title}">
        <div>
          <h4>${p.title}</h4>
          <p>${p.desc.substring(0, 70)}...</p>
        </div>
      </div>
    `).join("");
  }

  searchTriggerBtn.addEventListener("click", openSearch);
  searchCloseBtn.addEventListener("click", closeSearch);
  searchModal.addEventListener("click", (e) => {
    if (e.target === searchModal) closeSearch();
  });

  productSearchInput.addEventListener("input", (e) => {
    renderResults(e.target.value);
  });

  window.closeSearch = closeSearch;
}

// ---------------- INSTAGRAM STORY VIEWER LOGIC ----------------
let currentStoryIndex = 0;
let storyTimer = null;
const STORY_DURATION = 5000; // 5 seconds per story

function renderStoryProgress() {
  const container = document.getElementById("storyProgressBar");
  if (!container) return;
  container.innerHTML = STORIES_DATA.map((_, i) => `
    <div class="story-progress-segment ${i < currentStoryIndex ? 'is-viewed' : ''} ${i === currentStoryIndex ? 'is-active' : ''}">
      <div class="story-progress-fill"></div>
    </div>
  `).join("");
}

function openStory(index) {
  currentStoryIndex = Math.max(0, Math.min(index, STORIES_DATA.length - 1));
  const story = STORIES_DATA[currentStoryIndex];
  if (!story) return;

  const modal = document.getElementById("storyModal");
  const slideImg = document.getElementById("storySlideImg");
  const tagPill = document.getElementById("storyTagPill");
  const captionTitle = document.getElementById("storyCaptionTitle");
  const captionDesc = document.getElementById("storyCaptionDesc");
  const waBtn = document.getElementById("storyWaBtn");

  slideImg.src = story.image;
  slideImg.alt = story.title;
  tagPill.textContent = story.tag;
  captionTitle.textContent = story.title;
  captionDesc.textContent = story.desc;

  const encodedMsg = encodeURIComponent(story.waMsg);
  waBtn.href = `https://wa.me/${WHATSAPP_INT_NUMBER}?text=${encodedMsg}`;

  renderStoryProgress();
  modal.classList.add("is-active");
  document.body.style.overflow = "hidden";

  startStoryTimer();
}

function startStoryTimer() {
  clearTimeout(storyTimer);
  storyTimer = setTimeout(() => {
    if (currentStoryIndex < STORIES_DATA.length - 1) {
      nextStory();
    } else {
      closeStory();
    }
  }, STORY_DURATION);
}

function closeStory() {
  clearTimeout(storyTimer);
  const modal = document.getElementById("storyModal");
  if (modal) modal.classList.remove("is-active");
  document.body.style.overflow = "";
}

function nextStory() {
  if (currentStoryIndex < STORIES_DATA.length - 1) {
    openStory(currentStoryIndex + 1);
  } else {
    closeStory();
  }
}

function prevStory() {
  if (currentStoryIndex > 0) {
    openStory(currentStoryIndex - 1);
  } else {
    openStory(0);
  }
}

function jumpFromStoryToProduct() {
  const story = STORIES_DATA[currentStoryIndex];
  closeStory();
  if (!story) return;

  if (story.productId === "demonte") {
    const demonteSec = document.getElementById("demonte-kit");
    if (demonteSec) demonteSec.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  // Filter category if needed and highlight card
  const card = document.querySelector(`.product-card[data-product-id="${story.productId}"]`);
  if (card) {
    const cat = card.dataset.category;
    if (cat && window.filterCategory) {
      filterCategory(cat);
    }
    setTimeout(() => {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
      card.style.transform = "scale(1.05)";
      card.style.borderColor = "#0284c7";
      setTimeout(() => {
        card.style.transform = "";
        card.style.borderColor = "";
      }, 1200);
    }, 250);
  }
}

window.openStory = openStory;
window.closeStory = closeStory;
window.nextStory = nextStory;
window.prevStory = prevStory;
window.jumpFromStoryToProduct = jumpFromStoryToProduct;

// ---------------- DOM CONTENT LOADED ----------------
document.addEventListener("DOMContentLoaded", () => {
  // Modal close buttons
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const productModal = document.getElementById("productModal");
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeProductModal);
  if (productModal) {
    productModal.addEventListener("click", (e) => {
      if (e.target === productModal) closeProductModal();
    });
  }

  // Story modal backdrop click
  const storyModal = document.getElementById("storyModal");
  if (storyModal) {
    storyModal.addEventListener("click", (e) => {
      if (e.target === storyModal) closeStory();
    });
  }

  // Video Play Button
  const heroPlayBtn = document.getElementById("heroPlayBtn");
  const videoModal = document.getElementById("videoModal");
  const videoModalClose = document.getElementById("videoModalClose");
  if (heroPlayBtn) heroPlayBtn.addEventListener("click", openVideoModal);
  if (videoModalClose) videoModalClose.addEventListener("click", closeVideoModal);
  if (videoModal) {
    videoModal.addEventListener("click", (e) => {
      if (e.target === videoModal) closeVideoModal();
    });
  }

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProductModal();
      closeVideoModal();
      closeStory();
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
