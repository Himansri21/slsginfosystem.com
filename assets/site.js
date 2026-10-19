
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

  const COUNTRIES = [
    { code: 'IN', name: 'India', dial: '+91', flag: '🇮🇳', len: [10, 10], placeholder: '98765 43210' },
    { code: 'US', name: 'United States', dial: '+1', flag: '🇺🇸', len: [10, 10], placeholder: '(555) 012-3456' },
    { code: 'GB', name: 'United Kingdom', dial: '+44', flag: '🇬🇧', len: [10, 10], placeholder: '7911 123456' },
    { code: 'AE', name: 'United Arab Emirates', dial: '+971', flag: '🇦🇪', len: [9, 9], placeholder: '50 123 4567' },
    { code: 'SA', name: 'Saudi Arabia', dial: '+966', flag: '🇸🇦', len: [9, 9], placeholder: '50 123 4567' },
    { code: 'QA', name: 'Qatar', dial: '+974', flag: '🇶🇦', len: [8, 8], placeholder: '3312 3456' },
    { code: 'OM', name: 'Oman', dial: '+968', flag: '🇴🇲', len: [8, 8], placeholder: '9123 4567' },
    { code: 'KW', name: 'Kuwait', dial: '+965', flag: '🇰🇼', len: [8, 8], placeholder: '9123 4567' },
    { code: 'BH', name: 'Bahrain', dial: '+973', flag: '🇧🇭', len: [8, 8], placeholder: '3612 3456' },
    { code: 'SG', name: 'Singapore', dial: '+65', flag: '🇸🇬', len: [8, 8], placeholder: '8123 4567' },
    { code: 'AU', name: 'Australia', dial: '+61', flag: '🇦🇺', len: [9, 9], placeholder: '412 345 678' },
    { code: 'CA', name: 'Canada', dial: '+1', flag: '🇨🇦', len: [10, 10], placeholder: '(416) 555-0199' },
    { code: 'DE', name: 'Germany', dial: '+49', flag: '🇩🇪', len: [10, 11], placeholder: '151 23456789' },
    { code: 'FR', name: 'France', dial: '+33', flag: '🇫🇷', len: [9, 9], placeholder: '6 12 34 56 78' },
    { code: 'JP', name: 'Japan', dial: '+81', flag: '🇯🇵', len: [10, 10], placeholder: '90 1234 5678' },
    { code: 'NL', name: 'Netherlands', dial: '+31', flag: '🇳🇱', len: [9, 9], placeholder: '6 12345678' },
    { code: 'CH', name: 'Switzerland', dial: '+41', flag: '🇨🇭', len: [9, 9], placeholder: '79 123 45 67' },
    { code: 'ZA', name: 'South Africa', dial: '+27', flag: '🇿🇦', len: [9, 9], placeholder: '71 123 4567' },
    { code: 'MY', name: 'Malaysia', dial: '+60', flag: '🇲🇾', len: [9, 10], placeholder: '12 345 6789' },
    { code: 'NZ', name: 'New Zealand', dial: '+64', flag: '🇳🇿', len: [8, 10], placeholder: '21 123 4567' },
    { code: 'IE', name: 'Ireland', dial: '+353', flag: '🇮🇪', len: [9, 9], placeholder: '85 123 4567' },
    { code: 'IT', name: 'Italy', dial: '+39', flag: '🇮🇹', len: [9, 10], placeholder: '312 345 6789' },
    { code: 'ES', name: 'Spain', dial: '+34', flag: '🇪🇸', len: [9, 9], placeholder: '612 34 56 78' },
    { code: 'SE', name: 'Sweden', dial: '+46', flag: '🇸🇪', len: [9, 9], placeholder: '70 123 45 67' },
    { code: 'BR', name: 'Brazil', dial: '+55', flag: '🇧🇷', len: [10, 11], placeholder: '11 91234-5678' },
    { code: 'ID', name: 'Indonesia', dial: '+62', flag: '🇮🇩', len: [9, 12], placeholder: '812-3456-7890' },
    { code: 'PH', name: 'Philippines', dial: '+63', flag: '🇵🇭', len: [10, 10], placeholder: '917 123 4567' },
    { code: 'TH', name: 'Thailand', dial: '+66', flag: '🇹🇭', len: [9, 9], placeholder: '81 234 5678' },
    { code: 'VN', name: 'Vietnam', dial: '+84', flag: '🇻🇳', len: [9, 10], placeholder: '91 234 5678' },
    { code: 'NG', name: 'Nigeria', dial: '+234', flag: '🇳🇬', len: [10, 10], placeholder: '802 123 4567' },
    { code: 'KE', name: 'Kenya', dial: '+254', flag: '🇰🇪', len: [9, 9], placeholder: '712 345678' },
    { code: 'EG', name: 'Egypt', dial: '+20', flag: '🇪🇬', len: [10, 10], placeholder: '10 1234 5678' },
    { code: 'OTHER', name: 'Other Countries', dial: '+', flag: '🌐', len: [7, 15], placeholder: 'International Phone Number' }
  ];

  let currentCountryCode = 'IN';

  function getActiveCountry() {
    return COUNTRIES.find(c => c.code === currentCountryCode) || COUNTRIES[0];
  }

  function selectCountry(code) {
    const found = COUNTRIES.find(c => c.code.toUpperCase() === (code || '').toUpperCase()) || COUNTRIES[0];
    currentCountryCode = found.code;

    const selectEl = document.getElementById('countrySelect');
    if (selectEl && selectEl.value !== found.code) {
      selectEl.value = found.code;
    }

    const flagImg = document.getElementById('countryFlagImg');
    const flagEl = document.getElementById('countryFlag');
    if (flagImg) {
      if (found.code === 'OTHER') {
        flagImg.style.display = 'none';
        if (flagEl) {
          flagEl.style.display = 'inline';
          flagEl.textContent = '🌐';
        }
      } else {
        flagImg.style.display = 'inline-block';
        flagImg.src = `https://flagcdn.com/24x18/${found.code.toLowerCase()}.png`;
        flagImg.alt = `${found.name} flag`;
        if (flagEl) {
          flagEl.style.display = 'none';
          flagEl.textContent = found.flag;
        }
      }
    } else if (flagEl) {
      flagEl.textContent = found.flag;
    }

    const codeEl = document.getElementById('countryCodeText');
    if (codeEl) codeEl.textContent = found.dial;

    const phoneInput = document.getElementById('formPhone');
    if (phoneInput) {
      phoneInput.placeholder = found.placeholder;
      phoneInput.setAttribute('maxlength', String(found.len[1] + 4));
    }

    const nameInput = document.getElementById('countryNameInput');
    if (nameInput) nameInput.value = found.name;

    const dialInput = document.getElementById('countryDialInput');
    if (dialInput) dialInput.value = found.dial;

    updatePhoneUI();
  }

  function validateCurrentPhone(val) {
    const c = getActiveCountry();
    const digits = (val || '').trim().replace(/\D/g, '');
    const [min, max] = c.len;

    if (!digits) {
      return { isValid: false, errorMsg: 'Please enter your phone number.' };
    }

    if (min === max) {
      if (digits.length !== min) {
        return {
          isValid: false,
          errorMsg: `For ${c.name} (${c.dial}), please enter exactly ${min} digits. (Currently entered: ${digits.length} digits)`
        };
      }
    } else {
      if (digits.length < min || digits.length > max) {
        return {
          isValid: false,
          errorMsg: `For ${c.name} (${c.dial}), please enter between ${min} and ${max} digits. (Currently entered: ${digits.length} digits)`
        };
      }
    }

    const full = c.dial === '+' ? `+${digits}` : `${c.dial} ${digits}`;
    return { isValid: true, digits, full };
  }

  function updatePhoneUI() {
    const c = getActiveCountry();
    const phoneInput = document.getElementById('formPhone');
    const hint = document.getElementById('phoneHint');
    const hintText = document.getElementById('phoneHintText');
    const counter = document.getElementById('phoneCounter');
    if (!phoneInput || !hint || !hintText || !counter) return;

    const digits = phoneInput.value.replace(/\D/g, '');
    const [min, max] = c.len;
    const reqStr = min === max ? `${min} digits required` : `${min}–${max} digits required`;

    hintText.textContent = `${c.name}: ${reqStr}`;
    counter.textContent = `${digits.length}/${max}`;

    if (digits.length === 0) {
      hint.className = 'phone-hint';
    } else if (digits.length >= min && digits.length <= max) {
      hint.className = 'phone-hint valid';
      document.getElementById('groupPhone')?.classList.remove('has-error');
    } else {
      hint.className = digits.length > max ? 'phone-hint error' : 'phone-hint';
    }
  }

  function initCountryPicker() {
    const selectEl = document.getElementById('countrySelect');
    if (!selectEl) return;

    selectEl.innerHTML = '';
    COUNTRIES.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.code;
      opt.textContent = `${c.flag} ${c.name} (${c.dial})`;
      selectEl.appendChild(opt);
    });

    selectEl.addEventListener('change', function() {
      selectCountry(this.value);
    });

    const phoneInput = document.getElementById('formPhone');
    if (phoneInput) {
      phoneInput.addEventListener('input', function() {
        const c = getActiveCountry();
        let digits = this.value.replace(/\D/g, '');
        if (digits.length > c.len[1]) {
          digits = digits.slice(0, c.len[1]);
          this.value = digits;
        }
        updatePhoneUI();
      });
    }

    // Initialize detection
    initCountryDetection();
  }

  function initCountryDetection() {
    // 1. Instant fallback via Timezone
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      if (tz.includes('Kolkata') || tz.includes('Calcutta')) selectCountry('IN');
      else if (tz.includes('Dubai')) selectCountry('AE');
      else if (tz.includes('London')) selectCountry('GB');
      else if (tz.includes('New_York') || tz.includes('Chicago') || tz.includes('Los_Angeles')) selectCountry('US');
      else if (tz.includes('Riyadh')) selectCountry('SA');
      else if (tz.includes('Singapore')) selectCountry('SG');
      else if (tz.includes('Sydney') || tz.includes('Melbourne')) selectCountry('AU');
      else if (tz.includes('Toronto') || tz.includes('Vancouver')) selectCountry('CA');
      else if (tz.includes('Berlin')) selectCountry('DE');
      else if (tz.includes('Paris')) selectCountry('FR');
      else if (tz.includes('Tokyo')) selectCountry('JP');
      else selectCountry('IN');
    } catch (e) {
      selectCountry('IN');
    }

    // 2. Geolocation with permission check
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          try {
            const { latitude, longitude } = pos.coords;
            const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
            if (res.ok) {
              const data = await res.json();
              if (data && data.countryCode) {
                const found = COUNTRIES.find(c => c.code.toUpperCase() === data.countryCode.toUpperCase());
                if (found) {
                  selectCountry(found.code);
                }
              }
            }
          } catch (err) {
            // Geocode failed, retain timezone fallback
          }
        },
        (err) => {
          // Permission denied / dismissed: keep smooth default
        },
        { timeout: 5000, maximumAge: 300000 }
      );
    }
  }

  // Initialize picker once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCountryPicker);
  } else {
    initCountryPicker();
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
      {
        id: 'formPhone',
        group: 'groupPhone',
        label: 'Phone Number',
        validate: v => validateCurrentPhone(v).isValid,
        get errorMsg() {
          return validateCurrentPhone(document.getElementById('formPhone').value).errorMsg;
        }
      },
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

    // Format full international phone number
    const activeCountry = getActiveCountry();
    const phoneRes = validateCurrentPhone(document.getElementById('formPhone').value);
    document.getElementById('countryNameInput').value = activeCountry.name;
    document.getElementById('countryDialInput').value = activeCountry.dial;
    document.getElementById('fullPhoneInput').value = phoneRes.full;

    const formData = new FormData(form);
    formData.set('Phone_Number', phoneRes.full);

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
      selectCountry(currentCountryCode);
      updatePhoneUI();

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
  ['formName', 'formCompany', 'formEmail', 'formPhone', 'countrySelect', 'formService', 'formMessage'].forEach(id => {
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
