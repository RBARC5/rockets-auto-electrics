document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('nav-open');
    });
  }

  const services = [
    {
      tag: 'CHARGING SYSTEM \u00b7 SPINNING UP',
      title: 'Alternators & Starters',
      desc: 'Diagnosis, repair and on-site replacement \u2014 get you starting and charging again.',
      anim: '<div class="anim-spinner"></div>'
    },
    {
      tag: 'CLIMATE SYSTEM \u00b7 COOLING',
      title: 'Air Conditioning',
      desc: 'Leak testing, re-gas and full servicing \u2014 get cold air back before summer bites.',
      anim: '<div class="anim-wave"><span></span><span></span><span></span><span></span><span></span></div>'
    },
    {
      tag: 'FAULT FINDING \u00b7 SCANNING',
      title: 'Electrical Diagnosis',
      desc: 'Warning lights, intermittent faults and gremlins tracked down with proper scan tools.',
      anim: '<svg class="anim-scan" width="160" height="40"><polyline points="0,20 20,20 30,6 40,34 50,20 70,20 80,10 90,30 100,20 160,20"/></svg>'
    },
    {
      tag: 'TOWING SYSTEM \u00b7 SIGNAL PULSE',
      title: 'Electric Brake Controllers',
      desc: 'Supply and fit trailer brake controllers, wired in properly and tested.',
      anim: '<div class="anim-pulse"></div>'
    },
    {
      tag: 'POWER SYSTEM \u00b7 CHARGING UP',
      title: 'Dual Battery & Cruise Control',
      desc: 'Touring setups, dual battery systems and cruise control installation.',
      anim: '<div class="anim-battery"></div>'
    },
    {
      tag: 'FIT-OUT \u00b7 LIGHTING UP',
      title: 'Audio, Lighting & Accessories',
      desc: 'Stereo, lighting, reverse cameras and immobiliser fitting, done right.',
      anim: '<div class="anim-twinkle"><span></span><span></span><span></span></div>'
    }
  ];

  const tabs = document.querySelectorAll('.scanner-tab');
  const tagEl = document.getElementById('scannerTag');
  const animEl = document.getElementById('scannerAnim');
  const titleEl = document.getElementById('scannerTitle');
  const descEl = document.getElementById('scannerDesc');

  if (tabs.length) {
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const idx = parseInt(tab.dataset.service, 10);
        const s = services[idx];
        tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        tagEl.textContent = s.tag;
        titleEl.textContent = s.title;
        descEl.textContent = s.desc;
        animEl.innerHTML = s.anim;
      });
    });
  }

  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      document.getElementById('formNote').textContent =
        "This form isn't connected yet \u2014 once the backend is set up, submitting here will email you a reference number automatically.";
    });
  }

  const lookupForm = document.getElementById('lookupForm');
  if (lookupForm) {
    lookupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      document.getElementById('lookupNote').textContent =
        "Quote lookup isn't connected yet \u2014 this will let you check status once the backend is live.";
    });
  }
});
