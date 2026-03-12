"use strict";

document.addEventListener('DOMContentLoaded', function () {

  // NAV SCROLL
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  // BURGER
  const burger = document.querySelector('.nav__burger');
  const mobileMenu = document.querySelector('.nav__mobile');
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }

  // FAQ
  document.querySelectorAll('.faq__question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq__item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq__item').forEach(i => {
        i.classList.remove('open');
        const s = i.querySelector('.faq__question span');
        if (s) s.textContent = '+';
      });
      if (!isOpen) {
        item.classList.add('open');
        const s = btn.querySelector('span');
        if (s) s.textContent = '−';
      }
    });
  });

  // FADE IN
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // FILTRES BOUTIQUE
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const filter = this.dataset.filter;
      document.querySelectorAll('.product-card').forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.category === filter) ? '' : 'none';
      });
    });
  });

  // OPTIONS PRODUIT
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const group = this.closest('.option-btns');
      if (group) group.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // GALERIE PRODUIT
  document.querySelectorAll('.product-gallery__thumb').forEach(thumb => {
    thumb.addEventListener('click', function () {
      document.querySelectorAll('.product-gallery__thumb').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // FORMAT CARDS
  document.querySelectorAll('.format-card').forEach(card => {
    card.addEventListener('click', function () {
      document.querySelectorAll('.format-card').forEach(c => c.classList.remove('active'));
      this.classList.add('active');
      updateOrderSummary();
    });
  });

  // DATA-OPTION
  document.querySelectorAll('[data-option]').forEach(btn => {
    btn.addEventListener('click', function () {
      const opt = this.dataset.option;
      document.querySelectorAll(`[data-option="${opt}"]`).forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      updateOrderSummary();
    });
  });

  // CALCUL PRIX ORDONNANCE
  const PRICES = {
    format: { 'A5': 19.90, 'A4': 24.90, 'A3': 34.90 },
    cadre: { 'sans': 0, 'avec': 15.00 },
    illustration: { 'aucune': 0, 'croix': 3, 'colombe': 3, 'personnalise': 8 }
  };
  let deliveryPrice = 4.90;

  function updateOrderSummary() {
    const format = document.querySelector('.format-card.active');
    const cadre = document.querySelector('[data-option="cadre"].active');
    const illus = document.querySelector('[data-option="illustration"].active');
    const fPrice = PRICES.format[format?.dataset.format] || 24.90;
    const cPrice = PRICES.cadre[cadre?.dataset.value] || 0;
    const iPrice = PRICES.illustration[illus?.dataset.value] || 0;
    const total = fPrice + cPrice + iPrice + deliveryPrice;
    const totalEl = document.getElementById('order-total');
    if (totalEl) totalEl.textContent = total.toFixed(2).replace('.', ',') + ' €';
    const fmtEl = document.getElementById('summary-format');
    if (fmtEl && format) fmtEl.textContent = format.dataset.format;
    const priceEl = document.getElementById('summary-price');
    if (priceEl) priceEl.textContent = fPrice.toFixed(2).replace('.', ',') + ' €';
    const cadreEl = document.getElementById('summary-cadre');
    if (cadreEl) cadreEl.textContent = cPrice > 0 ? '+15,00 €' : '—';
    const illusEl = document.getElementById('summary-illus');
    if (illusEl) illusEl.textContent = illus?.dataset.value === 'aucune' ? 'Aucune' : (illus?.dataset.value || 'Aucune');
    const livEl = document.getElementById('summary-livraison');
    if (livEl) livEl.textContent = deliveryPrice.toFixed(2).replace('.', ',') + ' €';
  }

  // LIVRAISON SELECT
  const paysSelect = document.getElementById('pays');
  if (paysSelect) {
    paysSelect.addEventListener('change', function () {
      const opt = this.options[this.selectedIndex];
      deliveryPrice = parseFloat(opt.dataset.price) || 4.90;
      updateOrderSummary();
    });
  }

  // UPLOAD ZONE
  const uploadZone = document.querySelector('.upload-zone');
  const fileInput = document.getElementById('file-upload');
  if (uploadZone && fileInput) {
    uploadZone.addEventListener('click', () => fileInput.click());
    uploadZone.addEventListener('dragover', e => { e.preventDefault(); uploadZone.style.borderColor = 'var(--gold)'; });
    uploadZone.addEventListener('dragleave', () => { uploadZone.style.borderColor = ''; });
    uploadZone.addEventListener('drop', e => {
      e.preventDefault(); uploadZone.style.borderColor = '';
      const files = e.dataTransfer.files;
      if (files.length) uploadZone.querySelector('p').textContent = '✓ ' + files[0].name;
    });
    fileInput.addEventListener('change', () => {
      if (fileInput.files.length) uploadZone.querySelector('p').textContent = '✓ ' + fileInput.files[0].name;
    });
  }

  // FORMULAIRE CONTACT
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = this.querySelector('[type="submit"]');
      btn.textContent = 'Message envoyé ✓';
      btn.style.background = 'var(--gold-dark)';
      btn.disabled = true;
    });
  }

  // NEWSLETTER
  const newsletterForm = document.querySelector('.newsletter__form');
  if (newsletterForm) {
    const btn = newsletterForm.querySelector('.newsletter__btn');
    const input = newsletterForm.querySelector('.newsletter__input');
    if (btn && input) {
      btn.addEventListener('click', () => {
        if (input.value.includes('@')) {
          btn.textContent = 'Inscrit ✓';
          btn.style.background = 'var(--gold-dark)';
          input.value = '';
          input.disabled = true;
          btn.disabled = true;
        }
      });
    }
  }

  updateOrderSummary();
});