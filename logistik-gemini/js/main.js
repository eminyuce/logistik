(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     1. Mobile Menu Open and Close
     ------------------------------------------------------------------------ */
  var menuToggle = document.querySelector('.menu-toggle');
  var siteNav = document.querySelector('#ana-menu');

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
      var clickedInsideNav = siteNav.contains(event.target);
      var clickedToggle = menuToggle.contains(event.target);
      if (!clickedInsideNav && !clickedToggle) {
        setMenuOpen(false);
      }
    });
  }

  /* ------------------------------------------------------------------------
     2. Smooth In-Page Navigation
     ------------------------------------------------------------------------ */
  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  var header = document.querySelector('.site-header');

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

      var headerOffset = header ? header.offsetHeight : 0;
      var targetTop = targetId === '#ust'
        ? 0
        : targetEl.getBoundingClientRect().top + window.scrollY - headerOffset;

      var prefersReducedMotion = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  });

  /* ------------------------------------------------------------------------
     3. Contact Form Validation and Success State
     ------------------------------------------------------------------------ */
  var form = document.querySelector('#contact-form');
  var statusBox = document.querySelector('#form-status');

  if (form) {
    var nameInput = form.querySelector('#contact-name');
    var emailInput = form.querySelector('#contact-email');
    var messageInput = form.querySelector('#contact-message');

    var errorName = form.querySelector('#error-name');
    var errorEmail = form.querySelector('#error-email');
    var errorMessage = form.querySelector('#error-message');

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    function setFieldError(input, errorEl, message) {
      if (!input || !errorEl) {
        return;
      }
      errorEl.textContent = message;
      if (message) {
        input.setAttribute('aria-invalid', 'true');
      } else {
        input.removeAttribute('aria-invalid');
      }
    }

    function clearStatus() {
      if (!statusBox) {
        return;
      }
      statusBox.textContent = '';
      statusBox.className = 'form-status';
    }

    function validateName() {
      var value = nameInput.value.trim();
      if (!value) {
        setFieldError(nameInput, errorName, 'Lütfen adınızı ve soyadınızı girin.');
        return false;
      }
      setFieldError(nameInput, errorName, '');
      return true;
    }

    function validateEmail() {
      var value = emailInput.value.trim();
      if (!value) {
        setFieldError(emailInput, errorEmail, 'Lütfen e-posta adresinizi girin.');
        return false;
      }
      if (!emailPattern.test(value)) {
        setFieldError(emailInput, errorEmail, 'Lütfen geçerli bir e-posta adresi girin.');
        return false;
      }
      setFieldError(emailInput, errorEmail, '');
      return true;
    }

    function validateMessage() {
      var value = messageInput.value.trim();
      if (!value) {
        setFieldError(messageInput, errorMessage, 'Lütfen mesajınızı yazın.');
        return false;
      }
      setFieldError(messageInput, errorMessage, '');
      return true;
    }

    nameInput.addEventListener('input', function () {
      if (nameInput.getAttribute('aria-invalid') === 'true') {
        validateName();
      }
      clearStatus();
    });

    emailInput.addEventListener('input', function () {
      if (emailInput.getAttribute('aria-invalid') === 'true') {
        validateEmail();
      }
      clearStatus();
    });

    messageInput.addEventListener('input', function () {
      if (messageInput.getAttribute('aria-invalid') === 'true') {
        validateMessage();
      }
      clearStatus();
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      clearStatus();

      var isNameValid = validateName();
      var isEmailValid = validateEmail();
      var isMessageValid = validateMessage();

      if (!isNameValid || !isEmailValid || !isMessageValid) {
        if (!isNameValid) {
          nameInput.focus();
        } else if (!isEmailValid) {
          emailInput.focus();
        } else {
          messageInput.focus();
        }
        return;
      }

      form.reset();
      setFieldError(nameInput, errorName, '');
      setFieldError(emailInput, errorEmail, '');
      setFieldError(messageInput, errorMessage, '');

      if (statusBox) {
        statusBox.textContent = 'Mesajınız başarıyla alındı. Northline ekibimiz en kısa sürede sizinle iletişime geçecektir.';
        statusBox.className = 'form-status form-status--success';
      }
    });
  }
})();
