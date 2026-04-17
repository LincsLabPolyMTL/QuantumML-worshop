/* ============================================================
   Quantum ML Workshop — Main JavaScript
   ============================================================ */

/* ── Language toggle (EN / FR) — all pages ─────────────────── */
(function () {
  const T = {
    en: {
      /* Nav */
      'nav.home':'Home','nav.program':'Program','nav.speakers':'Speakers','nav.register':'Register',
      /* Footer */
      'footer.copy':'© 2026 · Polytechnique Montréal',

      /* ── INDEX ── */
      'hero.badge':'Workshop · April 17, 2026',
      'hero.h1':'Advances in <span class="gradient-text">Quantum ML</span><br>for Network Anomaly Detection<br>&amp; Time-Series Forecasting',
      'hero.date':'April 17, 2026 — 10:00 AM',
      'hero.location':'Polytechnique Montréal',
      'hero.duration':'Full-Day Event',
      'hero.cta1':'View Program','hero.cta2':'Register Now',
      'hero.countdown':'Event starts in',
      'cd.days':'Days','cd.hours':'Hours','cd.minutes':'Minutes','cd.seconds':'Seconds',
      'about.label':'About the Workshop',
      'about.title':'Where Quantum Computing Meets Machine Learning',
      'about.p1':'This one-day workshop brings together researchers and practitioners exploring the intersection of quantum computing and machine learning — with a focus on two high-impact application domains: network anomaly detection and time-series forecasting.',
      'about.p2':'Attendees will hear recent results on quantum reservoir computing, quantum recurrent networks, gate-based models, and AI-assisted circuit optimization, with applications to time series analysis and network anomaly detection.',
      'about.cta':'Meet the Speakers',
      'stats.presentations':'Presentations','stats.speakers':'Speakers','stats.day':'Full Day','stats.connections':'Connections',
      'org.label':'Organized by',
      'org.desc':'LINCS Lab · Polytechnique Montréal — Connecting Intelligence Sustainably',
      'topics.label':'Key Topics','topics.title':'Research Areas',
      'topics.subtitle':'The workshop covers a broad spectrum of quantum ML techniques applied to networking and forecasting.',
      'topic1.title':'Quantum Reservoir Computing','topic1.desc':'Gate-based and dynamical reservoir models for classification and time-series learning tasks.',
      'topic2.title':'Quantum Recurrent Networks','topic2.desc':'Quantum analogues of recurrent gated architectures (LSTM/GRU) for sequential data.',
      'topic3.title':'Network Anomaly Detection','topic3.desc':'Applying quantum ML to identify anomalies and intrusions in real-time network traffic.',
      'topic4.title':'Time-Series Forecasting','topic4.desc':'Quantum kernel and circuit-based methods for multi-step prediction on temporal data.',
      'topic5.title':'AI-based Circuit Cutting','topic5.desc':'Leveraging AI to partition large quantum circuits for execution on near-term hardware.',
      'topic6.title':'Generative Quantum Models','topic6.desc':'Quantum-enhanced latent generative models for anomaly synthesis and data augmentation.',
      'sched.label':'Day at a Glance','sched.title':'April 17 Schedule',
      'sched.desc':'A full day of sequential presentations with ample time for networking, lunch, and discussion.',
      'sched.cta':'Full Program →',
      'tl.networking':'Registration & Networking','tl.networking.sub':'Welcome coffee, meet attendees',
      'tl.opening':'Opening Ceremony','tl.opening.sub':'Welcome remarks',
      'tl.wajdi':'Quantum GAN & Recurrent Networks',
      'tl.wajdi.sub':'3 presentations · <em>Wajdi Hammami</em>',
      'tl.lunch':'Lunch & Networking',
      'tl.alexis.sub':'LatentQGAN · Hybrid Quantum GAN',
      'tl.wissal.sub':'Gate-Based Quantum Reservoir Computing',
      'tl.abdallah1.sub':'QuaRK · Quantum Reservoir Kernel',
      'tl.break':'Coffee Break',
      'tl.abdallah2.sub':'GPs with Randomized Quantum Local Kernels',
      'tl.melek.sub':'AI-based Circuit Cutting',
      'tl.closing':'Discussion & Closing Remarks',
      'venue.label':'Location',
      'venue.address.label':'Address',
      'venue.address.val':'Galerie Rolland (Room B-600.16)<br/>6th floor, Pavillon Principal<br/>2500 Chemin de Polytechnique<br/>Montréal, QC H3T 1J4',
      'venue.date.label':'Date & Time','venue.date.val':'April 17, 2026 · 10:00 AM – 4:30 PM',
      'venue.transit.label':'Transit','venue.transit.val':'Metro: Université-de-Montréal (Blue Line)<br/>Bus: 51, 119, 365, 370',
      'venue.parking.label':'Parking','venue.parking.val':'On-campus paid parking available.',

      /* ── PROGRAM ── */
      'prog.hero.label':'April 17, 2026',
      'prog.hero.h1':'Workshop <span class="gradient-text">Program</span>',
      'prog.hero.title':'Workshop Program',
      'prog.hero.sub':'Polytechnique Montréal · 10:00 AM – 4:30 PM',
      'prog.notice':'The program is subject to change. Sessions, speakers, and times may be adjusted. Check this page regularly for updates.',
      'prog.morning':'Morning','prog.afternoon':'Afternoon','prog.closing':'Closing',
      'prog.type.opening':'Opening','prog.type.presentation':'Presentation','prog.type.plenary':'Plenary','prog.type.closing':'Closing',
      'prog.networking.title':'Registration & Networking','prog.networking.detail':'Welcome coffee · Meet fellow attendees · Informal discussions',
      'prog.opening.title':'Opening Ceremony & Welcome Remarks','prog.opening.speaker':'Organizers',
      'prog.lunch':'Lunch & Networking Break',
      'prog.break':'Coffee Break',
      'prog.discussion.title':'Open Discussion & Q&A','prog.discussion.speaker':'All Speakers',
      'prog.remarks.title':'Closing Remarks','prog.remarks.speaker':'Organizers',
      'prog.behalf':'Presenting on behalf of Benjamin Kalfon',

      /* ── SPEAKERS ── */
      'spk.hero.label':'Workshop Speakers',
      'spk.hero.h1':'Meet the <span class="gradient-text">Researchers</span>',
      'spk.hero.title':'Meet the Researchers',
      'spk.hero.sub':'Six presentations on quantum ML, reservoir computing, anomaly detection, and time-series forecasting.',
      'spk.behalf':'Presenting on behalf of Benjamin Kalfon',
      'spk.cta.label':'Join Us',
      'spk.cta.title':'Don\'t Miss This Workshop',
      'spk.cta.desc':'Register now to attend the Quantum ML Workshop on April 17, 2026 at Polytechnique Montréal.',
      'spk.cta.btn1':'Register Now','spk.cta.btn2':'View Program',

      /* ── REGISTRATION ── */
      'reg.hero.label':'April 17, 2026',
      'reg.hero.title':'Register to Attend',
      'reg.hero.sub':'Secure your spot at the Quantum ML Workshop at Polytechnique Montréal.',
      'reg.tab.reg':'Registration','reg.tab.comments':'Questions & Comments',
      'reg.sec.personal':'Personal Information',
      'reg.label.fname':'First Name','reg.label.lname':'Last Name',
      'reg.label.email':'Email Address',
      'reg.sec.affil':'Affiliation',
      'reg.label.institution':'Institution / Organization',
      'reg.label.dept':'Department / Lab',
      'reg.label.role':'Your Role',
      'reg.role.phd':'PhD Student','reg.role.postdoc':'Postdoc',
      'reg.role.prof':'Professor / Faculty','reg.role.scientist':'Research Scientist',
      'reg.role.industry':'Industry Professional','reg.role.master':'Master\'s Student','reg.role.other':'Other',
      'reg.sec.attendance':'Attendance Mode',
      'reg.label.attendance':'How will you attend?',
      'reg.att.inperson':'In-Person','reg.att.inperson.desc':'Galerie Rolland, Polytechnique Montréal',
      'reg.att.online':'Online','reg.att.online.desc':'Remote participation via Zoom',
      'reg.err.attendance':'Please select your attendance mode.',
      'reg.sec.interests':'Research Interests','reg.label.interests':'Topics of Interest',
      'reg.int.qrc':'Quantum Reservoir Computing','reg.int.qrn':'Quantum Recurrent Networks',
      'reg.int.nad':'Network Anomaly Detection','reg.int.tsf':'Time-Series Forecasting',
      'reg.int.acc':'AI-based Circuit Cutting','reg.int.qgm':'Quantum Generative Models',
      'reg.btn.submit':'Submit Registration',
      'reg.success.inperson':'✓ Registration confirmed! See you on April 17 at Polytechnique Montréal.',
      'reg.success.online':'✓ Registration confirmed! Check your inbox — the Zoom link is on its way.',
      'reg.sec.your':'Your Details','reg.label.question':'Question or Comment',
      'reg.btn.send':'Send Message',
      'reg.note.comments':'Your message and email will be saved and reviewed by the organizers.',
      'reg.info.title':'Event Details',
      'reg.info.date.val':'10:00 AM – 4:30 PM',
      'reg.info.admission':'Free admission','reg.info.admission.sub':'Registration required · In-person & Online',
      'reg.included.title':'What\'s Included',
      'reg.inc1':'Access to all presentations','reg.inc2':'Lunch & coffee breaks','reg.inc3':'Networking opportunities',
      'reg.sec.message':'Your Message',
      'reg.placeholder.question':'Ask a question about the workshop, logistics, presentations…',
      'spk.remote':'Remote presenter',
    },
    fr: {
      /* Nav */
      'nav.home':'Accueil','nav.program':'Programme','nav.speakers':'Conférenciers','nav.register':"S'inscrire",
      /* Footer */
      'footer.copy':'© 2026 · Polytechnique Montréal',

      /* ── INDEX ── */
      'hero.badge':'Atelier · 17 avril 2026',
      'hero.h1':'Avancées en <span class="gradient-text">ML Quantique</span><br>pour la Détection d\'Anomalies Réseau<br>&amp; la Prévision de Séries Temporelles',
      'hero.date':'17 avril 2026 — 10h00',
      'hero.location':'Polytechnique Montréal',
      'hero.duration':'Journée complète',
      'hero.cta1':'Voir le programme','hero.cta2':"S'inscrire",
      'hero.countdown':"L'événement commence dans",
      'cd.days':'Jours','cd.hours':'Heures','cd.minutes':'Minutes','cd.seconds':'Secondes',
      'about.label':"À propos de l'atelier",
      'about.title':"Là où l'informatique quantique rencontre l'apprentissage automatique",
      'about.p1':"Cet atelier d'une journée réunit des chercheurs et praticiens explorant l'intersection de l'informatique quantique et de l'apprentissage automatique — avec un accent sur deux domaines à fort impact : la détection d'anomalies réseau et la prévision de séries temporelles.",
      'about.p2':"Les participants entendront des résultats récents sur le calcul par réservoir quantique, les réseaux récurrents quantiques, les modèles à base de portes et l'optimisation de circuits assistée par IA, avec des applications à l'analyse de séries temporelles et à la détection d'anomalies réseau.",
      'about.cta':'Rencontrer les conférenciers',
      'stats.presentations':'Présentations','stats.speakers':'Conférenciers','stats.day':'Journée complète','stats.connections':'Connexions',
      'org.label':'Organisé par',
      'org.desc':"Labo LINCS · Polytechnique Montréal — Connecter l'intelligence durablement",
      'topics.label':'Thèmes principaux','topics.title':'Domaines de recherche',
      'topics.subtitle':"L'atelier couvre un large spectre de techniques d'apprentissage automatique quantique appliquées aux réseaux et à la prévision.",
      'topic1.title':'Calcul par réservoir quantique','topic1.desc':'Modèles de réservoir à base de portes et dynamiques pour la classification et les séries temporelles.',
      'topic2.title':'Réseaux récurrents quantiques','topic2.desc':'Analogues quantiques des architectures récurrentes à portes (LSTM/GRU) pour les données séquentielles.',
      'topic3.title':'Détection d\'anomalies réseau','topic3.desc':'Application du ML quantique pour identifier les anomalies et intrusions dans le trafic réseau.',
      'topic4.title':'Prévision de séries temporelles','topic4.desc':'Méthodes à noyaux quantiques et à circuits pour la prédiction multi-étapes sur données temporelles.',
      'topic5.title':'Découpe de circuits assistée par IA','topic5.desc':'Utilisation de l\'IA pour partitionner de grands circuits quantiques pour le matériel NISQ.',
      'topic6.title':'Modèles génératifs quantiques','topic6.desc':'Modèles génératifs latents améliorés par le quantique pour la synthèse d\'anomalies et l\'augmentation de données.',
      'sched.label':'Aperçu de la journée','sched.title':'Programme du 17 avril',
      'sched.desc':'Une journée complète de présentations séquentielles avec du temps pour le réseautage, le dîner et la discussion.',
      'sched.cta':'Programme complet →',
      'tl.networking':'Inscription & Réseautage','tl.networking.sub':'Café de bienvenue, rencontres',
      'tl.opening':'Mot de bienvenue','tl.opening.sub':'Cérémonie d\'ouverture',
      'tl.wajdi':'Quantum GAN & Réseaux Récurrents',
      'tl.wajdi.sub':'3 présentations · <em>Wajdi Hammami</em>',
      'tl.lunch':'Dîner & Réseautage',
      'tl.alexis.sub':'LatentQGAN · QGAN hybride',
      'tl.wissal.sub':'Calcul par réservoir quantique à base de portes',
      'tl.abdallah1.sub':'QuaRK · Noyau de réservoir quantique',
      'tl.break':'Pause-café',
      'tl.abdallah2.sub':'GPs avec noyaux locaux quantiques aléatoires',
      'tl.melek.sub':'Découpe de circuits assistée par IA',
      'tl.closing':'Discussion & Mot de clôture',
      'venue.label':'Lieu',
      'venue.address.label':'Adresse',
      'venue.address.val':'Galerie Rolland (Salle B-600.16)<br/>6e étage, Pavillon Principal<br/>2500 Chemin de Polytechnique<br/>Montréal, QC H3T 1J4',
      'venue.date.label':'Date et heure','venue.date.val':'17 avril 2026 · 10h00 – 16h30',
      'venue.transit.label':'Transport en commun','venue.transit.val':'Métro : Université-de-Montréal (Ligne bleue)<br/>Bus : 51, 119, 365, 370',
      'venue.parking.label':'Stationnement','venue.parking.val':'Stationnement payant disponible sur le campus.',

      /* ── PROGRAM ── */
      'prog.hero.label':'17 avril 2026',
      'prog.hero.h1':'<span class="gradient-text">Programme</span> de l\'atelier',
      'prog.hero.title':'Programme de l\'atelier',
      'prog.hero.sub':'Polytechnique Montréal · 10h00 – 16h30',
      'prog.notice':'Le programme est susceptible de changer. Les sessions, conférenciers et horaires peuvent être ajustés. Consultez cette page régulièrement pour les mises à jour.',
      'prog.morning':'Matin','prog.afternoon':'Après-midi','prog.closing':'Clôture',
      'prog.type.opening':'Ouverture','prog.type.presentation':'Présentation','prog.type.plenary':'Plénière','prog.type.closing':'Clôture',
      'prog.networking.title':'Inscription & Réseautage','prog.networking.detail':'Café de bienvenue · Rencontrer les participants · Discussions informelles',
      'prog.opening.title':'Mot de bienvenue','prog.opening.speaker':'Organisateurs',
      'prog.lunch':'Pause dîner & Réseautage',
      'prog.break':'Pause-café',
      'prog.discussion.title':'Discussion ouverte & Questions','prog.discussion.speaker':'Tous les conférenciers',
      'prog.remarks.title':'Mot de clôture','prog.remarks.speaker':'Organisateurs',
      'prog.behalf':'Présenté au nom de Benjamin Kalfon',

      /* ── SPEAKERS ── */
      'spk.hero.label':'Conférenciers de l\'atelier',
      'spk.hero.h1':'Rencontrer les <span class="gradient-text">Chercheurs</span>',
      'spk.hero.title':'Rencontrer les chercheurs',
      'spk.hero.sub':'Six présentations sur le ML quantique, le calcul par réservoir, la détection d\'anomalies et la prévision de séries temporelles.',
      'spk.behalf':'Présenté au nom de Benjamin Kalfon',
      'spk.cta.label':'Rejoignez-nous',
      'spk.cta.title':'Ne manquez pas cet atelier',
      'spk.cta.desc':'Inscrivez-vous maintenant pour assister à l\'atelier ML quantique le 17 avril 2026 à Polytechnique Montréal.',
      'spk.cta.btn1':"S'inscrire",'spk.cta.btn2':'Voir le programme',

      /* ── REGISTRATION ── */
      'reg.hero.label':'17 avril 2026',
      'reg.hero.title':'S\'inscrire pour participer',
      'reg.hero.sub':'Réservez votre place à l\'atelier ML quantique à Polytechnique Montréal.',
      'reg.tab.reg':'Inscription','reg.tab.comments':'Questions & Commentaires',
      'reg.sec.personal':'Informations personnelles',
      'reg.label.fname':'Prénom','reg.label.lname':'Nom de famille',
      'reg.label.email':'Adresse courriel',
      'reg.sec.affil':'Affiliation',
      'reg.label.institution':'Institution / Organisation',
      'reg.label.dept':'Département / Laboratoire',
      'reg.label.role':'Votre rôle',
      'reg.role.phd':'Étudiant(e) au doctorat','reg.role.postdoc':'Postdoc',
      'reg.role.prof':'Professeur(e) / Faculté','reg.role.scientist':'Chercheur(se) scientifique',
      'reg.role.industry':'Professionnel(le) de l\'industrie','reg.role.master':'Étudiant(e) à la maîtrise','reg.role.other':'Autre',
      'reg.sec.attendance':'Mode de participation',
      'reg.label.attendance':'Comment participerez-vous ?',
      'reg.att.inperson':'En présentiel','reg.att.inperson.desc':'Galerie Rolland, Polytechnique Montréal',
      'reg.att.online':'En ligne','reg.att.online.desc':'Participation à distance via Zoom',
      'reg.err.attendance':'Veuillez sélectionner votre mode de participation.',
      'reg.sec.interests':'Intérêts de recherche','reg.label.interests':'Sujets d\'intérêt',
      'reg.int.qrc':'Calcul par réservoir quantique','reg.int.qrn':'Réseaux récurrents quantiques',
      'reg.int.nad':'Détection d\'anomalies réseau','reg.int.tsf':'Prévision de séries temporelles',
      'reg.int.acc':'Découpe de circuits assistée par IA','reg.int.qgm':'Modèles génératifs quantiques',
      'reg.btn.submit':'Soumettre l\'inscription',
      'reg.success.inperson':'✓ Inscription confirmée ! À bientôt le 17 avril à Polytechnique Montréal.',
      'reg.success.online':'✓ Inscription confirmée ! Consultez votre boîte courriel — le lien Zoom est en route.',
      'reg.sec.your':'Vos coordonnées','reg.label.question':'Question ou commentaire',
      'reg.btn.send':'Envoyer le message',
      'reg.note.comments':'Votre message et votre courriel seront enregistrés et examinés par les organisateurs.',
      'reg.info.title':'Détails de l\'événement',
      'reg.info.date.val':'10h00 – 16h30',
      'reg.info.admission':'Entrée gratuite','reg.info.admission.sub':'Inscription requise · En présentiel & en ligne',
      'reg.included.title':'Ce qui est inclus',
      'reg.inc1':'Accès à toutes les présentations','reg.inc2':'Dîner et pauses-café','reg.inc3':'Occasions de réseautage',
      'reg.sec.message':'Votre message',
      'reg.placeholder.question':'Posez une question sur l\'atelier, la logistique, les présentations…',
      'spk.remote':'Présentateur à distance',
    },
  };

  let lang = localStorage.getItem('lang') || 'en';

  function applyLang(l) {
    const t = T[l];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) el.placeholder = t[key];
    });
    document.documentElement.lang = l;
    document.querySelectorAll('.lang-toggle').forEach(b => {
      b.textContent = l === 'en' ? 'FR' : 'EN';
    });
  }

  // Apply on load
  applyLang(lang);

  // Toggle on click
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      lang = lang === 'en' ? 'fr' : 'en';
      localStorage.setItem('lang', lang);
      applyLang(lang);
    });
  });

  // Expose for countdown
  window.getLang = () => lang;
  window.T = T;
})();

/* ── Navigation ────────────────────────────────────────────── */
(function () {
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('navHamburger');
  const navLinks = document.getElementById('navLinks');

  function onScroll() {
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      navLinks.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
      });
    });
  }

  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html') || (currentPage === 'index.html' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

/* ── Scroll-reveal animation ───────────────────────────────── */
(function () {
  const style = document.createElement('style');
  style.textContent = `.reveal{opacity:0;transform:translateY(24px);transition:opacity .55s ease,transform .55s ease}.reveal.visible{opacity:1;transform:none}`;
  document.head.appendChild(style);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.08 });

  document.querySelectorAll('.card,.topic-card,.speaker-card,.session,.venue-detail-item,.stat-item').forEach(el => {
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
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzkj_LCxUvz7QWN0bpsocoqwWABXIHDE6Xpq261-I3pVM4Q9d8WTR2bESSs016IO0fr/exec';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!msg || !btn) return;

    // Client-side validation
    const firstName  = form.querySelector('[name="firstName"]').value.trim();
    const lastName   = form.querySelector('[name="lastName"]').value.trim();
    const email      = form.querySelector('[name="email"]').value.trim();
    const institution = form.querySelector('[name="institution"]').value.trim();
    const role       = form.querySelector('[name="role"]').value;
    const attendance = form.querySelector('[name="attendance"]:checked');
    const attendanceError = document.getElementById('attendanceError');

    // Clear inline attendance error on each attempt
    if (attendanceError) { attendanceError.style.display = 'none'; attendanceError.textContent = ''; }

    if (!firstName || !lastName) {
      showMessage('error', '⚠ Please enter your first and last name.');
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showMessage('error', '⚠ Please enter a valid email address.');
      return;
    }
    if (!institution) {
      showMessage('error', '⚠ Please enter your institution or organization.');
      return;
    }
    if (!role) {
      showMessage('error', '⚠ Please select your role.');
      return;
    }
    if (!attendance) {
      // Show inline error next to the radio group
      if (attendanceError) {
        const lang = (window.getLang && window.getLang()) || 'en';
        const errMsg = (window.T && window.T[lang] && window.T[lang]['reg.err.attendance'])
          || 'Please select your attendance mode.';
        attendanceError.textContent = '⚠ ' + errMsg;
        attendanceError.style.display = 'block';
        document.getElementById('attendanceGroup').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      return;
    }

    const originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Submitting…';

    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    // Ensure attendance is always present in payload (radio value from FormData)
    payload.attendance = attendance.value;

    try {
      const url = GOOGLE_SCRIPT_URL + '?payload=' + encodeURIComponent(JSON.stringify(payload));
      await sendToSheet(url);
      const lang = (window.getLang && window.getLang()) || 'en';
      const t = window.T ? window.T[lang] : {};
      const successKey = attendance.value === 'Online' ? 'reg.success.online' : 'reg.success.inperson';
      showMessage('success', t[successKey] || '✓ Registration confirmed!');
      form.reset();
      if (attendanceError) { attendanceError.style.display = 'none'; }
    } catch {
      showMessage('error', '⚠ Something went wrong. Please try again.');
    } finally {
      btn.disabled = false;
      btn.textContent = originalText;
    }
  });

  // Clear inline attendance error as soon as the user picks an option
  form.querySelectorAll('[name="attendance"]').forEach(radio => {
    radio.addEventListener('change', () => {
      const el = document.getElementById('attendanceError');
      if (el) { el.style.display = 'none'; el.textContent = ''; }
    });
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

/* ── Countdown Timer ───────────────────────────────────────── */
(function () {
  const el = document.getElementById('countdown');
  if (!el) return;

  const target = new Date('2026-04-17T10:00:00-04:00').getTime();

  function update() {
    const diff = target - Date.now();
    if (diff <= 0) { el.innerHTML = ''; return; }

    const lang = (window.getLang && window.getLang()) || 'en';
    const t = window.T ? window.T[lang] : {};

    const parts = [
      [t['cd.days']    || 'Days',    Math.floor(diff / 86400000)],
      [t['cd.hours']   || 'Hours',   Math.floor((diff % 86400000) / 3600000)],
      [t['cd.minutes'] || 'Minutes', Math.floor((diff % 3600000) / 60000)],
      [t['cd.seconds'] || 'Seconds', Math.floor((diff % 60000) / 1000)],
    ];

    el.innerHTML = parts.map(([label, val]) => `
      <div class="countdown-item">
        <span class="countdown-num">${String(val).padStart(2, '0')}</span>
        <span class="countdown-label">${label}</span>
      </div>
    `).join('<span class="countdown-sep">:</span>');
  }

  update();
  setInterval(update, 1000);
})();
