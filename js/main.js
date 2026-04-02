/* ============================================================
   Quantum ML Workshop — Main JavaScript
   ============================================================ */

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
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxjnoO7r4gHdgKUhv94aPHzsVlIMUbdl0q7-GJeMf0NtSoJNEWYL73_P-Aiy-NDIWWY/exec';

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
      const fd = new FormData();
      fd.append('payload', JSON.stringify(payload));
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: fd,
      });
      showMessage('success', '✓ Registration received! We will be in touch shortly.');
      form.reset();
    } catch {
      showMessage('error', 'Something went wrong. Please try emailing us directly.');
    } finally {
      btn.disabled = false;
      btn.textContent = originalText;
    }
  });

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
