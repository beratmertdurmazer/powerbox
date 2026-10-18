/**
 * POWERBOX TEKNOLOJİ - Main JavaScript
 * High-Converting Corporate Landing Page
 */

const PRODUCTS_DATA = {
  px1: {
    id: "px1",
    title: "Powerbox PX1 Yüksek Voltaj Koruma",
    category: "SİGORTA KUTUSU KORUMA MODÜLÜ",
    image: "assets/images/urun/px1.jpg",
    desc: "Tek bir modül ile evdeki tüm prizleri akım korumalı prize dönüştürün. Voltaj dalgalanmalarına karşı tüm elektronik cihazlarınızı koruyun.",
    features: [
      "Elektrik çarpma riski olmadan 1 dakikada kolay bağlantı",
      "Yapışkan yüzeyi ile sigorta kutunuzun yanına kırmadan delmeden anında montaj",
      "Şık tasarımı ve dijital gösterge ekranı",
      "Ekstra kapasitör devresi ile ani pik dalgalanmalarını filtreler",
      "2 Yıl Birebir Değişim Garantisi"
    ],
    waMsg: "Merhaba, Powerbox PX1 Yüksek Voltaj Koruma Modülü hakkında bilgi almak ve sipariş vermek istiyorum."
  },
  ap1: {
    id: "ap1",
    title: "Powerbox AP1 Akım Korumalı Priz",
    category: "16A GÜÇLÜ PRİZ & ENERJİ TASARRUFU",
    image: "assets/images/urun/elektrik-tasarruf.jpg",
    desc: "Rakipleri gibi sadece yüksek voltaja karşı korumaz; ekstra kapasitör haznesi sayesinde voltaj oynamalarını minimize ederek elektronik eşyalarınızın rahat çalışmasını sağlar ve ömrünü uzatır.",
    features: [
      "16A Güçlü priz yapısı ile yüksek akım çeken cihazlara tam uyum",
      "Ekstra kapasitör haznesi ile voltaj dalgalanmalarını minimize eder",
      "Elektronik cihazların rahat çalışmasını sağlayarak enerji tasarrufuna yardımcı olur",
      "Darbeli akımlara karşı maksimum güvenlik kalkanı",
      "Prize doğrudan tak-çalıştır pratik kullanım"
    ],
    waMsg: "Merhaba, Powerbox AP1 Akım Korumalı Priz hakkında bilgi almak ve sipariş vermek istiyorum."
  },
  gc1: {
    id: "gc1",
    title: "Powerbox GC1 Fişli Gaz Alarm Cihazı",
    category: "220V PRİZE TAKILAN KABLOSUZ ALARM",
    image: "assets/images/urun/gc1-gaz.jpg",
    desc: "Kurulum ve kablo çekme derdi olmadan doğrudan prize takılarak kullanılan yüksek güvenlikli gaz kaçak uyarı sistemidir.",
    features: [
      "Dış sensör yapısı ile doğalgaz kaçağını anında algılar",
      "Gaz kaçağı anında 100 dB güçlü sesli uyarı ile hemen ikaz eder",
      "Sıfır kablo çekme, doğrudan prize takılan kompakt tasarım",
      "Mutfak, kombi yanı ve doğalgaz boruları yakınında güvenle kullanım",
      "Can ve mal güvenliğini 7/24 garantiye alır"
    ],
    waMsg: "Merhaba, Powerbox GC1 Fişli Gaz Alarm Cihazı hakkında bilgi almak ve sipariş vermek istiyorum."
  },
  hasere: {
    id: "hasere",
    title: "Powerbox Gerçek 22 kHz Haşere Kovucu",
    category: "220V PRİZE TAK-ÇALIŞTIR ULTRASONİK",
    image: "assets/images/urun/hasere-kovucu.jpg",
    desc: "220V prize takılarak kullanılan Powerbox haşere kovucu, yaydığı 19-22 kHz ultrasonik ses dalgaları ile sinek, sivrisinek, fare dahil tüm haşeratı ortamdan uzaklaştırır.",
    features: [
      "Gerçek 19-22 kHz ultrasonik ses çıkışı (İnsan kulağı duymaz, haşerat terk eder)",
      "Kamera Testiyle İspatlanabilir: Cep telefonu kamerasını yaklaştırıp video kaydederek gerçek ses çıkışı hemen test edilebilir",
      "Piyasadaki sadece ışığı yanıp ses çıkarmayan sahte cihazlardan tamamen farklıdır",
      "Kimyasal, tablet veya zehir içermez, çevre ve evcil hayvan dostudur",
      "Tak-çalıştır 7/24 kesintisiz koruma sağlar"
    ],
    waMsg: "Merhaba, Powerbox 22 kHz Ultrasonik Haşere Kovucu hakkında bilgi almak ve sipariş vermek istiyorum."
  },
  px2: {
    id: "px2",
    title: "Powerbox PX2 Voltaj Koruma Modülü",
    category: "PRO SERİSİ VOLTAJ KORUMA",
    image: "assets/images/urun/px2.jpg",
    desc: "Türkiye'de ilk ve tek. Çift kademeli koruma devresi ve anlık voltaj göstergesi ile evinizdeki tüm prizleri tek noktadan güvenceye alır.",
    features: [
      "Türkiye'de ilk ve tek parafudr destekli akıllı koruma modülü",
      "Kırmadan delmeden yapışkan yüzeyi ile sigorta panosu yanına kolay montaj",
      "Anlık voltaj takip göstergesi",
      "Kombi, buzdolabı, çamaşır makinesi ve TV kartlarını yüksek voltajdan korur",
      "2 Yıl Birebir Değişim Garantisi"
    ],
    waMsg: "Merhaba, Powerbox PX2 Voltaj Koruma Modülü hakkında bilgi almak ve sipariş vermek istiyorum."
  },
  px3: {
    id: "px3",
    title: "Powerbox PX3 Voltaj Koruma Modülü",
    category: "AĞIR HİZMET & ENDÜSTRİYEL KORUMA",
    image: "assets/images/urun/px3.jpg",
    desc: "Yüksek akım ve sanayi tipi hatlar için üst düzey aşırı gerilim ve parafudr koruma modülüdür.",
    features: [
      "Ağır hizmet tipi aşırı voltaj koruma rölesi",
      "Yıldırım ve şebeke trafo arızalarına karşı tam donanımlı kalkan",
      "Trifaze ve monofaze panolara uygun kompakt yapı",
      "Fabrika, atölye, ofis ve geniş villalar için ideal koruma",
      "Türkiye'de üretilen yerli teknoloji"
    ],
    waMsg: "Merhaba, Powerbox PX3 Voltaj Koruma Modülü hakkında bilgi almak ve sipariş vermek istiyorum."
  },
  ga: {
    id: "ga",
    title: "Powerbox GA Araç İçi Gaz Alarmı",
    category: "TÜRKİYE'DE İLK VE TEK ARAÇ LPG ALARMI",
    image: "assets/images/urun/ga-arac.jpg",
    desc: "LPG'li araçlar için üretilen bu kompakt ürün montaj ve kablo çekme derdi olmadan ister seyyar ister yapışkanlı yüzeyi ile istenilen yere takılarak kullanılır.",
    features: [
      "İster 3 adet kalem pil ile seyyar, ister 12V besleme soketine aküden voltaj vererek kullanım",
      "Dış sensör yapısı ile gaz kaçağını milisaniyeler içinde algılar",
      "Gaz kaçağı anında 100 dB güçlü sesli siren ile sürücüyü ikaz eder",
      "Torpido, bagaj veya lpg tankı yakınına anında yapıştırılır",
      "Can ve yangın güvenliğini garantiye alır"
    ],
    waMsg: "Merhaba, Powerbox GA Araç İçi Gaz Alarm Cihazı hakkında bilgi almak ve sipariş vermek istiyorum."
  },
  kg: {
    id: "kg",
    title: "Powerbox KG Karavan & Tekne Gaz Alarmı",
    category: "KARAVAN VE TEKNELERE ÖZEL MOBİL ALARM",
    image: "assets/images/urun/kg-karavan.jpg",
    desc: "Karavan ve tekne sahiplerine özel olarak tasarlanan bu kompakt ürün montaj ve kablo çekme derdi olmadan seyyar veya yapışkanlı yüzeyi ile her yerde güvenle kullanılır.",
    features: [
      "İster 3 adet kalem pil ile seyyar, dilerseniz 5V adaptör ile eviniz dahil dilediğiniz yerde kullanım",
      "Dış sensör yapısı ile gaz kaçağını anında algılar",
      "Gaz kaçağını algıladığı anda 100 dB güçlü siren ile uyarı verir",
      "Uykuda karbonmonoksit ve gaz sızıntılarına karşı hayat kurtaran erken uyarı",
      "Türkiye'de ilk ve tek taşınabilir gaz güvenlik sistemi"
    ],
    waMsg: "Merhaba, Powerbox KG Karavan/Tekne Gaz Alarm Cihazı hakkında bilgi almak ve sipariş vermek istiyorum."
  }
};

const PHONE_NUMBER = "0549 409 53 53";
const WHATSAPP_INT_NUMBER = "905494095353";

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

  // Keyboard Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProductModal();
      closeVideoModal();
      if (window.closeSearch) window.closeSearch();
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
  const sections = ["hero", "urunler", "hakkimizda", "iletisim"].map(id => document.getElementById(id));

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
