$(function () {
  "use strict";

  $(".form-control").on("input", function () {
    var $field = $(this).closest(".form-group");
    if (this.value) {
      $field.addClass("field--not-empty");
    } else {
      $field.removeClass("field--not-empty");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      this.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
  }

  // Form Elements
  const elements = {
    formTitle: document.getElementById("form-title"),
    submitBtn: document.getElementById("submit-btn"),
    toggleMessage: document.getElementById("toggle-message"),
    emailField: document.getElementById("email-field"),
    rememberSection: document.getElementById("remember-section"),
    toggleForm: document.getElementById("toggle-form"),
    passwordToggle: document.getElementById("password-toggle"),
    passwordInput: document.getElementById("password"),
  };

  let isSignUp = false;

  // Toggle Form Type
  function toggleFormType(event) {
    if (event) event.preventDefault();
    isSignUp = !isSignUp;

    if (isSignUp) {
      elements.formTitle.innerText = "Sign Up";
      elements.submitBtn.value = "Sign Up";
      elements.emailField.style.display = "block";
      elements.rememberSection.style.display = "none";
      elements.toggleMessage.innerHTML =
        'Already have an account? <a href="#" id="toggle-form">Log In</a>';
    } else {
      elements.formTitle.innerText = "Sign In";
      elements.submitBtn.value = "Log In";
      elements.emailField.style.display = "none";
      elements.rememberSection.style.display = "flex";
      elements.toggleMessage.innerHTML =
        'Don\'t have an account? <a href="#" id="toggle-form">Sign Up</a>';
    }

    document
      .getElementById("toggle-form")
      .addEventListener("click", toggleFormType);
  }

  // Password Toggle
  if (elements.passwordToggle && elements.passwordInput) {
    elements.passwordToggle.addEventListener("click", function () {
      const type = elements.passwordInput.getAttribute("type");
      elements.passwordInput.setAttribute(
        "type",
        type === "password" ? "text" : "password"
      );
      this.innerHTML = `<i class="icon-eye${
        type === "password" ? "-slash" : ""
      }"></i>`;
    });
  }

  // Form Toggle Event
  if (elements.toggleForm) {
    elements.toggleForm.addEventListener("click", toggleFormType);
  }
});
