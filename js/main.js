/* ============================================================
   Quantum ML Workshop — Main JavaScript
   ============================================================ */

/* ── Language toggle (EN / FR) ─────────────────────────────── */
(function () {
  const btn = document.getElementById('langToggle');
  if (!btn) return;

  const translations = {
    en: {
      'nav.home': 'Home', 'nav.program': 'Program', 'nav.speakers': 'Speakers', 'nav.register': 'Register',
      'about.label': 'About the Workshop',
      'about.title': 'Where Quantum Computing Meets Machine Learning',
      'about.p1': 'This one-day workshop brings together researchers and practitioners exploring the intersection of quantum computing and machine learning — with a focus on two high-impact application domains: network anomaly detection and time-series forecasting.',
      'about.p2': 'Attendees will hear recent results on quantum reservoir computing, quantum recurrent networks, gate-based models, and AI-assisted circuit optimization, with applications to time series analysis and network anomaly detection.',
      'about.cta': 'Meet the Speakers',
      'org.label': 'Organized by',
      'org.desc': 'LINCS Lab · Polytechnique Montréal — Connecting Intelligence Sustainably',
      'venue.label': 'Location',
      'venue.address.label': 'Address',
      'venue.address.val': 'Galerie Rolland (Room B-600.16)<br/>6th floor, Pavillon Principal<br/>2500 Chemin de Polytechnique<br/>Montréal, QC H3T 1J4',
      'venue.date.label': 'Date & Time',
      'venue.date.val': 'April 17, 2026 · 10:00 AM – 4:30 PM',
      'venue.transit.label': 'Transit',
      'venue.transit.val': 'Metro: Université-de-Montréal (Blue Line)<br/>Bus: 51, 119, 365, 370',
      'venue.parking.label': 'Parking',
      'venue.parking.val': 'On-campus paid parking available.',
    },
    fr: {
      'nav.home': 'Accueil', 'nav.program': 'Programme', 'nav.speakers': 'Conférenciers', 'nav.register': "S'inscrire",
      'about.label': "À propos de l'atelier",
      'about.title': "Là où l'informatique quantique rencontre l'apprentissage automatique",
      'about.p1': "Cet atelier d'une journée réunit des chercheurs et praticiens explorant l'intersection de l'informatique quantique et de l'apprentissage automatique — avec un accent sur deux domaines d'application à fort impact : la détection d'anomalies réseau et la prévision de séries temporelles.",
      'about.p2': "Les participants entendront des résultats récents sur le calcul par réservoir quantique, les réseaux récurrents quantiques, les modèles à base de portes et l'optimisation de circuits assistée par IA, avec des applications à l'analyse de séries temporelles et à la détection d'anomalies réseau.",
      'about.cta': 'Rencontrer les conférenciers',
      'org.label': 'Organisé par',
      'org.desc': 'Labo LINCS · Polytechnique Montréal — Connecter l\'intelligence durablement',
      'venue.label': 'Lieu',
      'venue.address.label': 'Adresse',
      'venue.address.val': 'Galerie Rolland (Salle B-600.16)<br/>6e étage, Pavillon Principal<br/>2500 Chemin de Polytechnique<br/>Montréal, QC H3T 1J4',
      'venue.date.label': 'Date et heure',
      'venue.date.val': '17 avril 2026 · 10h00 – 16h30',
      'venue.transit.label': 'Transport en commun',
      'venue.transit.val': 'Métro : Université-de-Montréal (Ligne bleue)<br/>Bus : 51, 119, 365, 370',
      'venue.parking.label': 'Stationnement',
      'venue.parking.val': 'Stationnement payant disponible sur le campus.',
    },
  };

  let lang = 'en';

  function applyLang(l) {
    const t = translations[l];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    document.documentElement.lang = l;
  }

  btn.addEventListener('click', () => {
    lang = lang === 'en' ? 'fr' : 'en';
    btn.textContent = lang === 'en' ? 'FR' : 'EN';
    applyLang(lang);
  });
})();

/* ── Navigation ────────────────────────────────────────────── */
(function () {
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('navHamburger');
  const navLinks = document.getElementById('navLinks');

  // Scrolled state
  function onScroll() {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger toggle
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      navLinks.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
      });
    });
  }

  // Active link highlight
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (
      href === currentPage ||
      (currentPage === '' && href === 'index.html') ||
      (currentPage === 'index.html' && href === 'index.html')
    ) {
      a.classList.add('active');
    }
  });
})();

/* ── Scroll-reveal animation ───────────────────────────────── */
(function () {
  const style = document.createElement('style');
  style.textContent = `
    .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.55s ease, transform 0.55s ease; }
    .reveal.visible { opacity: 1; transform: none; }
  `;
  document.head.appendChild(style);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.card, .topic-card, .speaker-card, .session, .venue-detail-item, .stat-item').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
})();

/* ── Registration Form → Google Sheets ────────────────────── */
(function () {
  const form = document.getElementById('registrationForm');
  if (!form) return;

  const msg = document.getElementById('formMessage');
  const btn = form.querySelector('button[type="submit"]');

  // ┌─────────────────────────────────────────────────────────┐
  // │  STEP 1: Replace this URL with your Google Apps Script  │
  // │  Web App URL after deploying (see README instructions). │
  // └─────────────────────────────────────────────────────────┘
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzkj_LCxUvz7QWN0bpsocoqwWABXIHDE6Xpq261-I3pVM4Q9d8WTR2bESSs016IO0fr/exec';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!msg || !btn) return;

    if (GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
      showMessage('error', '⚠️ Form not yet connected. Please set up the Google Apps Script URL.');
      return;
    }

    const originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Submitting…';

    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      const url = GOOGLE_SCRIPT_URL + '?payload=' + encodeURIComponent(JSON.stringify(payload));
      await sendToSheet(url);
      showMessage('success', '✓ Registration received! We will be in touch shortly.');
      form.reset();
    } catch {
      showMessage('error', 'Something went wrong. Please try again.');
    } finally {
      btn.disabled = false;
      btn.textContent = originalText;
    }
  });

  function sendToSheet(url) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = img.onerror = () => resolve();
      img.src = url;
    });
  }

  function showMessage(type, text) {
    msg.className = 'form-message ' + type;
    msg.textContent = text;
    msg.style.display = 'block';
    msg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
})();

/* ── Countdown Timer (Home page only) ─────────────────────── */
(function () {
  const el = document.getElementById('countdown');
  if (!el) return;

  const target = new Date('2026-04-17T10:00:00-04:00').getTime();

  function update() {
    const now = Date.now();
    const diff = target - now;

    if (diff <= 0) {
      el.innerHTML = '<span class="countdown-item"><span class="countdown-num">0</span><span class="countdown-label">Days</span></span>';
      return;
    }

    const days    = Math.floor(diff / 86400000);
    const hours   = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    el.innerHTML = [
      ['Days',    days],
      ['Hours',   hours],
      ['Minutes', minutes],
      ['Seconds', seconds],
    ].map(([label, val]) => `
      <div class="countdown-item">
        <span class="countdown-num">${String(val).padStart(2, '0')}</span>
        <span class="countdown-label">${label}</span>
      </div>
    `).join('<span class="countdown-sep">:</span>');
  }

  update();
  setInterval(update, 1000);
})();
