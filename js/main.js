/**
 * POWERBOX TEKNOLOJİ - INSTAGRAM STORY & INSTANT PRODUCT FILTER
 * Direct Phone & WhatsApp: +90 549 409 53 53
 */

document.addEventListener('DOMContentLoaded', () => {
  const storyItems = document.querySelectorAll('.story-item');
  const feedCards = document.querySelectorAll('.feed-card');
  const feedTitle = document.getElementById('feedTitle');

  const categoryTitles = {
    all: "Tüm Ürünler (8)",
    px1: "Powerbox PX1 Akım Koruma Modülü",
    "px-pro": "Powerbox PX2 & PX3 Pro Modülleri",
    ap1: "Powerbox AP1 16A Kapasitörlü Priz",
    ga: "Powerbox GA Araç İçi LPG Gaz Alarmı",
    gc1: "Powerbox GC1 Fişli Doğalgaz Alarmı",
    kg: "Powerbox KG Karavan & Tekne Alarmı",
    hasere: "Powerbox 22kHz Ultrasonik Haşere Kovucu",
    b2b: "Toptan Satış & Bayilik"
  };

  storyItems.forEach(item => {
    item.addEventListener('click', () => {
      const category = item.getAttribute('data-category');

      // Update active state on stories
      storyItems.forEach(si => si.classList.remove('active'));
      item.classList.add('active');

      if (category === 'b2b') {
        const b2bSection = document.getElementById('toptan-bilgi');
        if (b2bSection) {
          b2bSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        return;
      }

      // Update feed title
      if (feedTitle && categoryTitles[category]) {
        feedTitle.textContent = categoryTitles[category];
      }

      // Filter product cards instantly
      let visibleCount = 0;
      feedCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
            card.style.opacity = '1';
          }, 10);
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      // Smooth scroll to feed
      const feed = document.getElementById('feed');
      if (feed) {
        feed.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || !href) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
