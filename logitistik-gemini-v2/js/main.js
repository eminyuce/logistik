(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     1. Mobile Menu Open & Close
     ------------------------------------------------------------------------ */
  var menuToggle = document.querySelector('.menu-toggle');
  var siteNav = document.querySelector('#primary-nav');

  function setMenuOpen(isOpen) {
    if (!menuToggle || !siteNav) {
      return;
    }
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    siteNav.classList.toggle('is-open', isOpen);
  }

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', function () {
      var expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      setMenuOpen(!expanded);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && siteNav.classList.contains('is-open')) {
        setMenuOpen(false);
        menuToggle.focus();
      }
    });

    document.addEventListener('click', function (event) {
      if (!siteNav.classList.contains('is-open')) {
        return;
      }
      if (!siteNav.contains(event.target) && !menuToggle.contains(event.target)) {
        setMenuOpen(false);
      }
    });
  }

  /* ------------------------------------------------------------------------
     2. Smooth In-Page Navigation
     ------------------------------------------------------------------------ */
  var header = document.querySelector('.site-header');
  var anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      var targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') {
        return;
      }
      var targetEl = document.querySelector(targetId);
      if (!targetEl) {
        return;
      }

      event.preventDefault();
      setMenuOpen(false);

      var offset = header ? header.offsetHeight : 0;
      var targetTop = targetId === '#top'
        ? 0
        : targetEl.getBoundingClientRect().top + window.scrollY - offset;

      var prefersReduced = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: prefersReduced ? 'auto' : 'smooth'
      });
    });
  });

  /* ------------------------------------------------------------------------
     3. Interactive Services Explorer
     ------------------------------------------------------------------------ */
  var servicesData = {
    ftl: {
      kicker: 'Division 01 · Nationwide OTR',
      title: "Full Truckload (53' Dry Van)",
      desc: 'High-cube 53-foot air-ride dry vans engineered for regional and transcontinental point-to-point freight. We maintain a 3:1 trailer-to-tractor ratio so your docks can run drop-and-hook programs without driver detention.',
      image: 'assets/images/terminal-fleet.jpg',
      alt: 'IRONROAD semi-trucks lined up at a freight distribution terminal',
      specs: ['Max Payload: 45,000 lbs', "53' Air-Ride Trailers", 'Drop-Trailer Pools'],
      bullets: [
        'Direct door-to-door OTR transit across all 48 contiguous states',
        'GPS geofencing with automated arrival and POD notifications',
        'Flexible drop-trailer pools for high-volume shippers'
      ],
      equipmentOption: "53' Dry Van (FTL)"
    },
    reefer: {
      kicker: 'Division 02 · Cold Chain',
      title: 'Temperature-Controlled Reefer',
      desc: 'Precision-monitored refrigerated trailers protecting food, beverage, and pharmaceutical freight from -20°F deep freeze to +70°F climate-controlled loads with two-way satellite telemetry.',
      image: 'assets/images/hero-truck.jpg',
      alt: 'American semi-truck hauling freight down an interstate highway at sunset',
      specs: ['-20°F to +70°F Range', 'FSMA Compliant', '2-Way Temp Alerts'],
      bullets: [
        'Continuous digital temperature logging with instant exception alerts',
        'Pre-cooled trailer verification prior to dock arrival',
        'Multi-temp dual-zone units for mixed grocery and cold-chain runs'
      ],
      equipmentOption: "53' Refrigerated (Reefer)"
    },
    flatbed: {
      kicker: 'Division 03 · Open Deck & Over-Dimensional',
      title: 'Flatbed & Heavy Haul',
      desc: 'Heavy-duty flatbeds, step-decks, Conestoga rolling-tarp trailers, and RGN lowboys built for structural steel, machinery, lumber, and permitted oversize industrial freight.',
      image: 'assets/images/heavy-haul.jpg',
      alt: 'American Class-8 flatbed semi-truck hauling heavy structural steel girders on a highway',
      specs: ['48,000+ lb Capacity', '4ft–8ft Lumber Tarps', 'Oversize Permits'],
      bullets: [
        'Full state permit, pilot car, and route-survey coordination',
        'Certified coil racks, chains, binders, and weatherproof tarping',
        'Experienced open-deck drivers trained in heavy securement'
      ],
      equipmentOption: 'Flatbed / Step-Deck'
    },
    dedicated: {
      kicker: 'Division 04 · Contract Capacity',
      title: 'Dedicated Contract Fleet',
      desc: 'Guaranteed trucks, assigned company drivers, and custom KPI reporting locked exclusively to your distribution network—giving you private-fleet reliability without capital overhead.',
      image: 'assets/images/terminal-fleet.jpg',
      alt: 'Dedicated IRONROAD truck fleet parked cleanly at a modern freight terminal',
      specs: ['Guaranteed Power', 'Custom KPI Reports', 'Multi-Stop Routing'],
      bullets: [
        'Locked-in contract rates immune to spot-market volatility',
        'On-site account managers and custom EDI / API integration',
        'Scalable seasonal surge trucks drawn from our OTR fleet'
      ],
      equipmentOption: "53' Dry Van (FTL)"
    },
    expedited: {
      kicker: 'Division 05 · Time-Critical',
      title: 'Expedited Team Transit',
      desc: 'Two-driver sleeper teams that keep wheels rolling 22 hours a day for coast-to-coast deadlines, plant-down emergencies, and high-value retail product launches.',
      image: 'assets/images/hero-truck.jpg',
      alt: 'Sleeper cab semi-truck running non-stop team transit on an American highway',
      specs: ['Coast-to-Coast in 48–60h', 'Dual-Driver Teams', 'Priority Dispatch'],
      bullets: [
        'Non-stop transit eliminating single-driver HOS layovers',
        'Proactive check-calls every 4 hours plus live tracking links',
        'High-security locks and geofenced stop protocols'
      ],
      equipmentOption: 'Expedited Team'
    },
    crossdock: {
      kicker: 'Division 06 · Port & Terminal Ops',
      title: 'Port Drayage & Cross-Dock',
      desc: 'TWIC-certified port drayage at LA/Long Beach, Newark, Savannah, and Tacoma paired with high-speed container transloading into 53-foot domestic dry vans.',
      image: 'assets/images/heavy-haul.jpg',
      alt: 'Heavy freight carrier operating along major U.S. interstate corridors',
      specs: ['TWIC Certified', 'Own Chassis Pool', 'Same-Day Transload'],
      bullets: [
        'Rapid pier pull and chassis availability avoiding demurrage fees',
        '14 U.S. cross-dock facilities for palletization and consolidation',
        'Direct inland OTR forwarding to regional distribution centers'
      ],
      equipmentOption: 'Port Drayage / Intermodal'
    }
  };

  var serviceTabs = document.querySelectorAll('.service-tab');
  var stageImage = document.querySelector('#service-image');
  var stageSpecs = document.querySelector('#service-specs');
  var stageKicker = document.querySelector('#service-kicker');
  var stageTitle = document.querySelector('#service-title');
  var stageDesc = document.querySelector('#service-desc');
  var stageBullets = document.querySelector('#service-bullets');
  var stageCta = document.querySelector('#service-cta');
  var equipmentSelect = document.querySelector('#q-equipment');

  var activeEquipmentOption = servicesData.ftl.equipmentOption;

  function renderService(key) {
    var data = servicesData[key];
    if (!data) {
      return;
    }

    activeEquipmentOption = data.equipmentOption;

    if (stageImage) {
      stageImage.src = data.image;
      stageImage.alt = data.alt;
    }
    if (stageKicker) {
      stageKicker.textContent = data.kicker;
    }
    if (stageTitle) {
      stageTitle.textContent = data.title;
    }
    if (stageDesc) {
      stageDesc.textContent = data.desc;
    }
    if (stageSpecs) {
      stageSpecs.innerHTML = '';
      data.specs.forEach(function (spec) {
        var span = document.createElement('span');
        span.textContent = spec;
        stageSpecs.appendChild(span);
      });
    }
    if (stageBullets) {
      stageBullets.innerHTML = '';
      data.bullets.forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item;
        stageBullets.appendChild(li);
      });
    }
  }

  serviceTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var key = tab.getAttribute('data-service');
      serviceTabs.forEach(function (btn) {
        var isCurrent = btn === tab;
        btn.classList.toggle('is-active', isCurrent);
        btn.setAttribute('aria-selected', String(isCurrent));
      });
      renderService(key);
    });
  });

  if (stageCta && equipmentSelect) {
    stageCta.addEventListener('click', function () {
      equipmentSelect.value = activeEquipmentOption;
    });
  }

  /* ------------------------------------------------------------------------
     4. Quote Form Client-Side Validation & Success State
     ------------------------------------------------------------------------ */
  var quoteForm = document.querySelector('#quote-form');
  var quoteStatus = document.querySelector('#quote-status');

  if (quoteForm) {
    var fields = {
      name: {
        input: quoteForm.querySelector('#q-name'),
        error: quoteForm.querySelector('#err-name'),
        msg: 'Please enter your name and company.'
      },
      email: {
        input: quoteForm.querySelector('#q-email'),
        error: quoteForm.querySelector('#err-email'),
        msg: 'Please enter a valid work email address.'
      },
      origin: {
        input: quoteForm.querySelector('#q-origin'),
        error: quoteForm.querySelector('#err-origin'),
        msg: 'Please enter a pickup city and state.'
      },
      destination: {
        input: quoteForm.querySelector('#q-destination'),
        error: quoteForm.querySelector('#err-destination'),
        msg: 'Please enter a delivery city and state.'
      },
      equipment: {
        input: quoteForm.querySelector('#q-equipment'),
        error: quoteForm.querySelector('#err-equipment'),
        msg: 'Please select an equipment type.'
      },
      notes: {
        input: quoteForm.querySelector('#q-notes'),
        error: quoteForm.querySelector('#err-notes'),
        msg: 'Please describe your commodity or load notes.'
      }
    };

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    function setFieldError(field, message) {
      field.error.textContent = message;
      if (message) {
        field.input.setAttribute('aria-invalid', 'true');
      } else {
        field.input.removeAttribute('aria-invalid');
      }
    }

    function clearStatus() {
      if (!quoteStatus) {
        return;
      }
      quoteStatus.textContent = '';
      quoteStatus.className = 'form-status';
    }

    function validateField(key) {
      var field = fields[key];
      var val = field.input.value.trim();
      if (!val) {
        setFieldError(field, field.msg);
        return false;
      }
      if (key === 'email' && !emailRegex.test(val)) {
        setFieldError(field, 'Please enter a valid work email address.');
        return false;
      }
      setFieldError(field, '');
      return true;
    }

    Object.keys(fields).forEach(function (key) {
      var eventName = fields[key].input.tagName === 'SELECT' ? 'change' : 'input';
      fields[key].input.addEventListener(eventName, function () {
        if (fields[key].input.getAttribute('aria-invalid') === 'true') {
          validateField(key);
        }
        clearStatus();
      });
    });

    quoteForm.addEventListener('submit', function (event) {
      event.preventDefault();
      clearStatus();

      var firstInvalid = null;
      Object.keys(fields).forEach(function (key) {
        var valid = validateField(key);
        if (!valid && !firstInvalid) {
          firstInvalid = fields[key].input;
        }
      });

      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      quoteForm.reset();
      Object.keys(fields).forEach(function (key) {
        setFieldError(fields[key], '');
      });

      if (quoteStatus) {
        quoteStatus.textContent = 'Quote request received. Our Chicago dispatch & pricing desk will reply within 30 minutes.';
        quoteStatus.className = 'form-status form-status--success';
      }
    });
  }
})();
