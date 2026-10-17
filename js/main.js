/**
 * POWERBOX TEKNOLOJİ - LIGHT THEME & SALES FUNNEL INTERACTION
 * WhatsApp & Phone: +90 549 409 53 53
 */

document.addEventListener('DOMContentLoaded', () => {
  const WHATSAPP_PHONE = "905494095353";
  const whatsappBase = `https://wa.me/${WHATSAPP_PHONE}?text=`;

  // 1. Detailed Product Database for Quick View Modal
  const productsData = {
    px1: {
      title: "POWERBOX PX1 Yüksek Voltaj Koruma Modülü",
      category: "Voltaj & Akım Koruma",
      badge: "TÜRKİYE'DE İLK VE TEK",
      badgeClass: "badge-blue",
      image: "assets/images/px1.svg",
      description: "Tek bir modül ile evinizdeki veya iş yerinizdeki TÜM prizleri anında akım korumalı prize dönüştürün! Voltaj dalgalanmalarına ve ani gerilim sıçramalarına karşı elektronik eşyalarınızı (TV, buzdolabı, çamaşır makinesi, kombi vb.) tam korur. Elektrik çarpma riski olmadan 1 dakikada sigorta kutusunun yanına kırmadan dökmeden yapışkanlı yüzeyi ile anında monte edilir. Şık tasarımı ve güçlü gösterge ışıkları sayesinde geceleri koridor lambası gibi estetik bir aydınlatma sağlar.",
      specs: [
        "Tek Modülle Tüm Ev Prizlerini Koruma",
        "Kırmadan, Delmeden Çift Taraflı Güçlü Yapışkan Taban",
        "Elektrik Çarpma Riski Olmayan Güvenli Bağlantı (1 Dk Montaj)",
        "Yüksek Voltaj ve Yıldırım/Darbe Sönümleme Devresi",
        "Gece Lambası Özellikli Şık LED Durum Göstergeleri",
        "220V Standart Şebeke ile %100 Uyumlu"
      ],
      boxContent: "Powerbox PX1 Modül, Endüstriyel Montaj Bandı, Türkçe Görsel Bağlantı Kılavuzu, 2 Yıl Garanti Belgesi.",
      waMessage: "Merhaba, Powerbox PX1 Yüksek Voltaj Koruma Modülü hakkında fiyat öğrenmek ve sipariş vermek istiyorum."
    },
    px2: {
      title: "POWERBOX PX2 PRO Voltaj Koruma Modülü",
      category: "Voltaj & Akım Koruma",
      badge: "TÜRKİYE'DE İLK VE TEK",
      badgeClass: "badge-blue",
      image: "assets/images/px2.svg",
      description: "Hassas elektronik anakartlara sahip inverter klima, yoğuşmalı kombi ve yeni nesil akıllı ev aletleri için geliştirilmiş çift seviyeli aşırı gerilim koruma modülü. Şebekedeki anlık parazit ve voltaj dalgalanmalarını filtreler, cihazların rahat çalışmasını sağlayarak motor ve kart yanmalarını engeller.",
      specs: [
        "Çift Kademeli Aşırı Gerilim Koruma Mimarisi",
        "İnverter ve Hassas Elektronik Kartlara Özel Filtreleme",
        "Pano Yanı Yapışkanlı Hızlı ve Güvenli Montaj",
        "Dinamik LED Durum ve Şebeke Sağlık Göstergesi",
        "Yüksek Joule Sönümleme Kapasitesi"
      ],
      boxContent: "Powerbox PX2 Modül, Montaj Aparatı ve Yapışkan Bant, Kullanım Kılavuzu, 2 Yıl Garanti Belgesi.",
      waMessage: "Merhaba, Powerbox PX2 Pro Modülü hakkında detaylı bilgi ve fiyat almak istiyorum."
    },
    px3: {
      title: "POWERBOX PX3 ULTRA Yüksek Voltaj Modülü",
      category: "Voltaj & Akım Koruma",
      badge: "AĞIR YÜK DAYANIMI",
      badgeClass: "badge-amber",
      image: "assets/images/px3.svg",
      description: "Geniş villalar, çok cihazlı ofisler ve endüstriyel atölyeler için tasarlanmış maksimum darbe sönümleme gücüne sahip amiral gemisi koruma ünitesi. Ağır yük değişimlerinde dahi voltaj oynamalarını minimuma indirir.",
      specs: [
        "Ağır Yük ve Sanayi/Büyük Ev Tipi Dayanım",
        "Maksimum Joule Enerji Soğurma Seviyesi",
        "Gelişmiş Çoklu Varistör ve Kapasitör Blokları",
        "Sürekli Hat İzleme ve Anlık Koruma Tetiklemesi",
        "Isıya Dayanıklı V0 Yanmaz Gövde Tasarımı"
      ],
      boxContent: "Powerbox PX3 Modül, Güçlendirilmiş Montaj Seti, Kullanım Kılavuzu, 2 Yıl Garanti Belgesi.",
      waMessage: "Merhaba, Powerbox PX3 Ultra Koruma Modülü hakkında bilgi ve fiyat teklifi almak istiyorum."
    },
    ap1: {
      title: "POWERBOX AP1 (A1) 16A Akım Koruma Prizi",
      category: "Voltaj & Akım Koruma",
      badge: "KAPASİTÖR HAZNELİ",
      badgeClass: "badge-blue",
      image: "assets/images/ap1.svg",
      description: "Rakipleri gibi sadece yüksek voltaja karşı korumaz! İçerisinde yer alan ekstra kapasitör haznesi sayesinde şebekedeki voltaj oynamalarını minimize ederek elektronik eşyalarınızın rahat çalışmasını sağlar ve ömrünü uzatır. Şık ve sade tasarımı ile satışa değil doğrudan amaca odaklanan 16A güçlü priz.",
      specs: [
        "Özel Entegre Kapasitör Haznesi ile Voltaj Filtreleme",
        "16A Ağır Yük Taşıma Kapasitesi (Kurutma, Bulaşık, Fırın vb.)",
        "Cihazların Ömrünü Uzatan Kararlı Akım Desteği",
        "Çocuk Korumalı Güvenlik Perdeleri",
        "Kompakt ve Modern Minimalist Tasarım"
      ],
      boxContent: "Powerbox AP1 16A Akım Koruma Prizi, Tanıtım ve 2 Yıl Garanti Belgesi.",
      waMessage: "Merhaba, Powerbox AP1 16A Kapasitörlü Akım Koruma Prizi hakkında bilgi ve sipariş vermek istiyorum."
    },
    ga: {
      title: "POWERBOX GA Araç İçi Gaz Alarm Cihazı",
      category: "Gaz Alarm Sistemleri",
      badge: "TÜRKİYE'DE İLK VE TEK",
      badgeClass: "badge-red",
      image: "assets/images/ga.svg",
      description: "Türkiye'de ilk ve tek! LPG'li binek araçlar, ticari taksiler ve dolmuşlar için özel olarak üretilen kompakt güvenlik sistemi. Montaj ve kablo çekme derdi olmadan ister seyyar, istenirse yapışkanlı yüzeyi ile araç içinde istenilen yere takılabilir. İster 3 adet kalem pil ile seyyar, dilerseniz 12V besleme soketine aküden voltaj vererek kullanabilirsiniz. Dış sensör yapısı ile gaz kaçağını anında algılar ve 100dB güçlü sirenle sizi erkenden uyarır.",
      specs: [
        "LPG'li Araçlar İçin Türkiye'de İlk ve Tek Özel Tasarım",
        "Kablo Çekme Derdi Yok: 3x Kalem Pil VEYA 12V Araç Soketi Desteği",
        "Seyyar Taşınabilir veya Yapışkan Yüzeyle Sabit Montaj",
        "Hassas Dış Sensör Mimarisi ile Anında Kaçak Algılama",
        "100dB Güçlü Sesli Siren ve Görsel LED Alarm",
        "Düşük Enerji Tüketimi (Aküyü Asla Yormaz)"
      ],
      boxContent: "Powerbox GA Cihazı, 12V Bağlantı Soket Kablosu, Sabitleme Yapışkanı, Kullanım Kılavuzu.",
      waMessage: "Merhaba, Powerbox GA Araç İçi LPG Gaz Alarm Cihazı hakkında bilgi ve sipariş vermek istiyorum."
    },
    gc1: {
      title: "POWERBOX GC1 Fişli Doğalgaz Alarm Cihazı",
      category: "Gaz Alarm Sistemleri",
      badge: "KÜÇÜK DETAYLAR HAYAT KURTARIR",
      badgeClass: "badge-blue",
      image: "assets/images/gc1.svg",
      description: "Unutmayın, bazen küçük detaylar hayat kurtarır! Powerbox GC1 ile kurulum ve kablo çekme derdi olmadan doğrudan herhangi bir 220V prize takılarak kullanılır. Doğalgaz sistemine uygun olarak üretilmiştir. Dış sensör yapısı ile gaz kaçağını havadaki ilk yoğunlaşmasında yakalar ve 100dB sesli uyarı vererek sizi ve ailenizi anında uyarır.",
      specs: [
        "Fişe Tak & Çalıştır (Kablo ve Usta Gerektirmez)",
        "Ev ve Mutfak Doğalgaz Hatlarına %100 Uyum",
        "Yüksek Hassasiyetli Dış Gaz Sensörü",
        "100dB Güçlü Sesli Siren İkazı",
        "7/24 Kesintisiz Güvenlik ve Düşük Güç Tüketimi"
      ],
      boxContent: "Powerbox GC1 Fişli Cihaz, Kullanma Kılavuzu, 2 Yıl Garanti Belgesi.",
      waMessage: "Merhaba, Powerbox GC1 Fişli Doğalgaz Alarm Cihazı hakkında bilgi ve sipariş vermek istiyorum."
    },
    kg: {
      title: "POWERBOX KG Pilli Karavan & Tekne Gaz Alarmı",
      category: "Gaz Alarm Sistemleri",
      badge: "KARAVAN & TEKNE ÖZEL",
      badgeClass: "badge-green",
      image: "assets/images/kg.svg",
      description: "Karavan, tekne ve tiny house sahiplerine özel olarak geliştirilmiş taşınabilir gaz kaçak alarmı. Tesisat ve kablo derdi olmadan ister seyyar, istenirse yapışkanlı yüzeyi ile istenen yere sabitlenerek kullanılabilir. İster 3 adet kalem pil ile mobil, dilerseniz 5V adaptör (USB) ile eviniz dahil dilediğiniz her yerde kullanabilirsiniz. Dış sensör yapısı ile tüp gaz ve LPG kaçaklarını anında hisseder.",
      specs: [
        "Karavan, Tekne ve Kamp Yaşamına Özel Güvenlik",
        "3x AA Kalem Pil İle Seyyar VEYA 5V USB Adaptör ile Sürekli Çalışma",
        "Yapışkanlı Taban ile Delme Gerektirmeyen Montaj",
        "Hassas Dış Sensör ve 100dB Sesli Alarm",
        "Kompakt ve Hafif Seyahat Tasarımı"
      ],
      boxContent: "Powerbox KG Cihazı, 5V Bağlantı Kablosu, Yapışkan Bant, Kullanma Kılavuzu.",
      waMessage: "Merhaba, Powerbox KG Karavan ve Tekne Gaz Alarmı hakkında bilgi ve sipariş vermek istiyorum."
    },
    hasere: {
      title: "POWERBOX Gerçek 22kHz Ultrasonik Haşere Kovucu",
      category: "Çevre & Yaşam Güvenliği",
      badge: "GERÇEK 22 kHz ÇIKIŞ",
      badgeClass: "badge-purple",
      image: "assets/images/hasere.svg",
      description: "220V prize takılarak kullanılan Powerbox Haşere Kovucu, yaydığı 19-22 kHz gerçek ultrasonik ses dalgaları ile sivrisinek, karasinek ve tüm haşeratı ortamdan uzaklaştırır. İnsan kulağı 20 kHz üstünü duyamaz, haşerat ise bu frekanstan son derece rahatsız olup kaçar. Piyasadaki sadece LED'i yanıp sönen sahte cihazların aksine, cihazımızı cep telefonunuzun kamerasını açıp video kaydı yaparak test edebilir, hoparlörden çıkan gerçek ultrasonik sesi videoda net şekilde duyabilirsiniz!",
      specs: [
        "Gerçek 19-22 kHz Ultrasonik Frekans Çıkışı",
        "Telefon Kamerası Video Kaydı ile Anında İspatlanabilir Ses",
        "Kimyasal, Tablet ve Koku Yok - %100 Çevre Dostu",
        "220V Prize Tak & Çalıştır Kolaylığı",
        "Geniş Etki Alanı ve Düşük Elektrik Sarfiyatı",
        "İnsan Kulağına Tamamen Sessiz"
      ],
      boxContent: "Powerbox Ultrasonik Haşere Kovucu, Kamera Test Kılavuzu, 2 Yıl Garanti Belgesi.",
      waMessage: "Merhaba, Powerbox Gerçek 22kHz Ultrasonik Haşere Kovucu hakkında bilgi ve sipariş vermek istiyorum."
    }
  };

  // 2. Category Filter Logic
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  function applyFilter(categoryFilter) {
    filterBtns.forEach(b => {
      if (b.getAttribute('data-filter') === categoryFilter) {
        b.classList.add('active');
        b.setAttribute('aria-selected', 'true');
      } else {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      }
    });

    productCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (categoryFilter === 'all' || cardCategory === categoryFilter) {
        card.style.display = 'flex';
        card.style.opacity = '0';
        setTimeout(() => {
          card.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
          card.style.opacity = '1';
        }, 10);
      } else {
        card.style.display = 'none';
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      applyFilter(filter);
    });
  });

  // 3. Solution Finder Buttons
  const solutionButtons = document.querySelectorAll('.btn-filter-trigger');
  solutionButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetFilter = btn.getAttribute('data-filter');
      applyFilter(targetFilter);
      const productsSection = document.getElementById('urunler');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Footer category shortcuts
  const footerLinks = document.querySelectorAll('.footer-filter-link');
  footerLinks.forEach(link => {
    link.addEventListener('click', () => {
      const target = link.getAttribute('data-target');
      applyFilter(target);
    });
  });

  // 4. Quick View Modal Popup
  const modal = document.getElementById('productModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBadge = document.getElementById('modalBadge');
  const modalImage = document.getElementById('modalImage');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalSpecs = document.getElementById('modalSpecs');
  const modalBoxContent = document.getElementById('modalBoxContent');
  const modalWaBtn = document.getElementById('modalWaBtn');

  function openModal(productId) {
    const data = productsData[productId];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalCategory.textContent = data.category;
    modalBadge.textContent = data.badge;
    modalBadge.className = `modal-badge-wrapper ${data.badgeClass}`;
    modalImage.src = data.image;
    modalImage.alt = data.title;
    modalDescription.textContent = data.description;
    modalBoxContent.textContent = data.boxContent;

    modalSpecs.innerHTML = '';
    data.specs.forEach(spec => {
      const li = document.createElement('li');
      li.textContent = spec;
      modalSpecs.appendChild(li);
    });

    modalWaBtn.href = `${whatsappBase}${encodeURIComponent(data.waMessage)}`;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  const detailBtns = document.querySelectorAll('.btn-view-detail');
  detailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const prodId = btn.getAttribute('data-product');
      openModal(prodId);
    });
  });

  modalCloseBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // 5. 1-Click WhatsApp Order Wizard
  const btnSubmitWizard = document.getElementById('btnSubmitWizard');
  if (btnSubmitWizard) {
    btnSubmitWizard.addEventListener('click', () => {
      const selectedProduct = document.getElementById('wizardProduct').value;
      const selectedType = document.getElementById('wizardType').value;
      const cityOrNote = document.getElementById('wizardCity').value.trim();

      let msg = `Merhaba, Powerbox web sitenizden ulaşıyorum.\n\n`;
      msg += `📦 İlgilendiğim Ürün: ${selectedProduct}\n`;
      msg += `💼 Talep Türü: ${selectedType}\n`;
      if (cityOrNote) {
        msg += `📍 Şehir / Not: ${cityOrNote}\n`;
      }
      msg += `\nFiyat, kargo ve sipariş süreci hakkında detaylı bilgi alabilir miyim?`;

      const targetUrl = `${whatsappBase}${encodeURIComponent(msg)}`;
      window.open(targetUrl, '_blank');
    });
  }

  // 6. Accordion FAQ
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(other => {
        other.classList.remove('active');
        other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isActive) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // 7. Mobile Drawer Nav
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('active');
      if (isOpen) {
        mobileMenu.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      } else {
        mobileMenu.classList.add('active');
        mobileToggle.setAttribute('aria-expanded', 'true');
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 8. Smooth scrolling for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || !href) return;
      const targetElem = document.querySelector(href);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
