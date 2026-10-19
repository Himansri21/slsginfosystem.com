
  // Page Boot Scroll Restoration & Reset (Prevents mobile auto-scroll to middle)
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.documentElement.classList.remove('booting');
    }, 250);

    if (!window.location.hash) {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  });

  // Hero Stats Number Loading & Ticker Animation
  function animateHeroStats() {
    const statsContainer = document.getElementById('heroStats');
    if (!statsContainer || statsContainer.dataset.animated === 'true') return;
    statsContainer.dataset.animated = 'true';

    const statElements = statsContainer.querySelectorAll('.hero-stat-num');
    statElements.forEach((el, index) => {
      const type = el.getAttribute('data-type');
      const target = el.getAttribute('data-target');
      const suffix = el.getAttribute('data-suffix') || '';

      if (type === 'num') {
        const targetNum = parseInt(target, 10);
        const duration = 1600;
        const startTime = performance.now();

        function updateNum(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentVal = Math.round(targetNum * easeOut);
          el.textContent = currentVal + suffix;
          if (progress < 1) {
            requestAnimationFrame(updateNum);
          } else {
            el.textContent = targetNum + suffix;
          }
        }
        requestAnimationFrame(updateNum);
      } else {
        const finalStr = target;
        const duration = 1100 + index * 150;
        const startTime = performance.now();
        const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        function updateTicker(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);

          if (progress < 1) {
            const resolvedCount = Math.floor(progress * finalStr.length);
            let display = finalStr.substring(0, resolvedCount);
            for (let i = resolvedCount; i < finalStr.length; i++) {
              if (finalStr[i] === ' ') {
                display += ' ';
              } else {
                display += chars[Math.floor(Math.random() * chars.length)];
              }
            }
            el.textContent = display;
            requestAnimationFrame(updateTicker);
          } else {
            el.textContent = finalStr;
          }
        }
        requestAnimationFrame(updateTicker);
      }
    });
  }

  // Trigger Hero Stats animation when in view
  if ('IntersectionObserver' in window) {
    const heroStatsEl = document.getElementById('heroStats');
    if (heroStatsEl) {
      const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateHeroStats();
            statsObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      statsObserver.observe(heroStatsEl);
    }
  } else {
    window.addEventListener('load', animateHeroStats);
  }

  // Navbar Scrolled State
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Mobile Menu Toggle
  function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const isOpen = menu.classList.toggle('open');
    document.getElementById('menuBtn').setAttribute('aria-expanded', String(isOpen));
    if (isOpen) menu.querySelector('button').focus();
    else document.getElementById('menuBtn').focus();
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  // Progressive reveal animations with IntersectionObserver
  if ('IntersectionObserver' in window) {
    document.documentElement.classList.add('js-animated');
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: "0px 0px 80px 0px" });
    reveals.forEach(el => observer.observe(el));
  }

  // Partner Filter Tabs
  function filterPartners(cat, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const cards = document.querySelectorAll('.partner-card');
    cards.forEach(card => {
      if (cat === 'all' || card.getAttribute('data-category') === cat) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Toggle Partner Product Offerings
  function toggleOfferings(btn) {
    const card = btn.closest('.partner-card');
    const offerings = card.querySelector('.partner-offerings');
    const isExpanded = offerings.classList.toggle('expanded');
    btn.querySelector('span').textContent = isExpanded ? 'Hide Product Offerings' : 'View Product Offerings';
    btn.innerHTML = (isExpanded ? '<span>Hide Product Offerings</span> &uarr;' : '<span>View Product Offerings</span> &darr;');
  }

  // Lightbox Modal for Awards
  function openModal(src, caption) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const modalCaption = document.getElementById('modalCaption');
    modalImg.src = src;
    modalCaption.textContent = caption;
    modal.classList.add('active');
  }

  function closeModal() {
    document.getElementById('imageModal').classList.remove('active');
  }

  // Form Submission Validation & Handling via FormSubmit
  function handleSubmit() {
    const form = document.getElementById('contactForm');
    const alertBox = document.getElementById('formAlert');
    const submitBtn = document.getElementById('submitBtn');

    const fields = [
      { id: 'formName', group: 'groupName', label: 'Full Name', validate: v => v.trim().length >= 2, errorMsg: 'Please enter your full name.' },
      { id: 'formCompany', group: 'groupCompany', label: 'Company / Organization', validate: v => v.trim().length >= 2, errorMsg: 'Please enter your company or organization name.' },
      { id: 'formEmail', group: 'groupEmail', label: 'Email Address', validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()), errorMsg: 'Please provide a valid corporate email address.' },
      { id: 'formPhone', group: 'groupPhone', label: 'Phone Number', validate: v => v.trim().replace(/\D/g, '').length >= 10, errorMsg: 'Please enter a valid phone number with at least 10 digits.' },
      { id: 'formService', group: 'groupService', label: 'Service Portfolio', validate: v => v && v !== '' && !v.includes('Select'), errorMsg: 'Please select a service portfolio of interest.' },
      { id: 'formMessage', group: 'groupMessage', label: 'Requirements Message', validate: v => v.trim().length >= 5, errorMsg: 'Please enter your message (at least 5 characters).' }
    ];

    let firstInvalid = null;
    const errorMessages = [];

    fields.forEach(f => {
      const el = document.getElementById(f.id);
      const grp = document.getElementById(f.group);
      const val = el ? el.value : '';
      const isValid = f.validate(val);

      if (!isValid) {
        if (grp) grp.classList.add('has-error');
        errorMessages.push(f.errorMsg);
        if (!firstInvalid) firstInvalid = el;
      } else {
        if (grp) grp.classList.remove('has-error');
      }
    });

    if (firstInvalid) {
      alertBox.className = 'form-alert error';
      alertBox.innerHTML = '<strong>Please complete all required fields:</strong><br>&bull; ' + errorMessages.join('<br>&bull; ');
      alertBox.style.display = 'block';
      firstInvalid.focus();
      return false;
    }

    // All fields are valid -> Transmit via FormSubmit
    const origText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Transmitting to SLSG...';
    submitBtn.style.opacity = '0.8';

    const formData = new FormData(form);

    fetch('https://formsubmit.co/ajax/contact@slsginfosystem.com', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Network response not ok');
    })
    .then(data => {
      alertBox.className = 'form-alert success';
      alertBox.innerHTML = '<strong>Enquiry Transmitted Successfully!</strong><br>Thank you for reaching out. Your enquiry has been routed to <em>contact@slsginfosystem.com</em> and an SLSG specialist will connect with you promptly.';
      alertBox.style.display = 'block';

      submitBtn.innerHTML = '✓ Enquiry Transmitted';
      submitBtn.style.background = 'linear-gradient(135deg, #245038, #2d7a4f)';
      submitBtn.style.opacity = '1';

      form.reset();

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = origText;
        submitBtn.style.background = '';
        setTimeout(() => {
          alertBox.style.display = 'none';
        }, 5000);
      }, 4000);
    })
    .catch(err => {
      // Fallback to standard FormSubmit submission
      form.submit();
    });

    return false;
  }

  // Clear validation error state when the user types or makes a selection
  ['formName', 'formCompany', 'formEmail', 'formPhone', 'formService', 'formMessage'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const evt = el.tagName === 'SELECT' ? 'change' : 'input';
    el.addEventListener(evt, () => {
      const grp = el.closest('.form-group');
      if (grp && grp.classList.contains('has-error')) {
        grp.classList.remove('has-error');
      }
      const alertBox = document.getElementById('formAlert');
      if (alertBox && alertBox.classList.contains('error')) {
        const remaining = document.querySelectorAll('.form-group.has-error');
        if (remaining.length === 0) {
          alertBox.style.display = 'none';
        }
      }
    });
  });

// Preserve bookmarks from the original single-page website.
(() => {
  const destinations = {
    about: 'about.html', 'vision-mission': 'about.html', values: 'about.html',
    promise: 'about.html', leadership: 'about.html', awards: 'about.html', 'why-us': 'about.html',
    services: 'services.html', industries: 'services.html', framework: 'services.html',
    partners: 'index.html', clients: 'index.html',
    locations: 'contact.html', contact: 'contact.html'
  };
  const anchor = location.hash.slice(1);
  if (destinations[anchor] && !document.getElementById(anchor)) {
    location.replace(destinations[anchor] + location.hash);
  }
  const menu = document.getElementById('mobileMenu');
  document.addEventListener('keydown', event => {
    if (!menu.classList.contains('open')) return;
    if (event.key === 'Escape') toggleMenu();
    if (event.key === 'Tab') {
      const controls = [...menu.querySelectorAll('a, button')];
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
})();
