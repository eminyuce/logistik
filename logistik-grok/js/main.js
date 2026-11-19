(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("#site-nav");
  var form = document.querySelector("#contact-form");

  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.textContent = open ? "Close" : "Menu";
  }

  toggle.addEventListener("click", function () {
    setMenu(!nav.classList.contains("is-open"));
  });

  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
      setMenu(false);
    }
  });

  function fieldError(field) {
    return form.querySelector('[data-error-for="' + field.name + '"]');
  }

  function setError(field, text) {
    fieldError(field).textContent = text;
    if (text) {
      field.setAttribute("aria-invalid", "true");
    } else {
      field.removeAttribute("aria-invalid");
    }
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = form.elements.name;
    var email = form.elements.email;
    var message = form.elements.message;
    var emailValue = email.value.trim();
    var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    var valid = true;

    setError(name, name.value.trim() ? "" : "Enter your name.");
    if (!emailValue) {
      setError(email, "Enter your email.");
    } else if (!emailOk) {
      setError(email, "Enter a valid email.");
    } else {
      setError(email, "");
    }
    setError(message, message.value.trim() ? "" : "Enter a message.");

    [name, email, message].forEach(function (field) {
      if (field.getAttribute("aria-invalid") === "true") {
        valid = false;
      }
    });

    var success = form.querySelector(".form-success");
    if (!valid) {
      success.hidden = true;
      var firstInvalid = form.querySelector("[aria-invalid='true']");
      if (firstInvalid) {
        firstInvalid.focus();
      }
      return;
    }

    form.reset();
    [name, email, message].forEach(function (field) {
      field.removeAttribute("aria-invalid");
    });
    success.hidden = false;
  });
})();
