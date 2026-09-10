document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.getElementById("mobile-menu");
  const dropdowns = document.querySelectorAll(".nav-dropdown");
  const mobileQuery = window.matchMedia("(max-width: 900px)");

  const closeAllDropdowns = function (except) {
    dropdowns.forEach(function (dropdown) {
      if (dropdown === except) return;
      dropdown.classList.remove("open");
      const dropdownBtn = dropdown.querySelector(".nav-main-btn");
      if (dropdownBtn) dropdownBtn.setAttribute("aria-expanded", "false");
    });
  };

  dropdowns.forEach(function (dropdown) {
    const btn = dropdown.querySelector(".nav-main-btn");
    if (!btn) return;

    btn.addEventListener("click", function (event) {
      // Desktop: hover already reveals the submenu, let the link navigate normally.
      if (!mobileQuery.matches) return;

      // Mobile: first tap opens/closes the submenu instead of navigating away.
      event.preventDefault();
      const isOpen = dropdown.classList.contains("open");
      closeAllDropdowns(dropdown);
      dropdown.classList.toggle("open", !isOpen);
      btn.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      const isOpen = document.body.classList.toggle("menu-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      if (!isOpen) closeAllDropdowns();
    });

    navMenu.addEventListener("click", function (event) {
      const link = event.target.closest("a");
      // Ignore dropdown toggle buttons; only real submenu/nav links should close the menu.
      if (link && !link.classList.contains("nav-main-btn")) {
        document.body.classList.remove("menu-open");
        navToggle.setAttribute("aria-expanded", "false");
        closeAllDropdowns();
      }
    });

    document.addEventListener("click", function (event) {
      if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
        document.body.classList.remove("menu-open");
        navToggle.setAttribute("aria-expanded", "false");
        closeAllDropdowns();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        document.body.classList.remove("menu-open");
        navToggle.setAttribute("aria-expanded", "false");
        closeAllDropdowns();
      }
    });
  }

  const navLinks = document.querySelectorAll(".nav-links a");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  navLinks.forEach(function (link) {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  const scrollBtn = document.createElement("button");
  scrollBtn.innerText = "↑";
  scrollBtn.id = "scrollTopBtn";
  scrollBtn.type = "button";
  scrollBtn.setAttribute("aria-label", "Back to top");
  scrollBtn.title = "Back to top";
  document.body.appendChild(scrollBtn);

  let scrollTicking = false;
  const updateScrollButton = function () {
    scrollBtn.classList.toggle("is-visible", window.scrollY > 300);
    scrollTicking = false;
  };

  window.addEventListener(
    "scroll",
    function () {
      if (!scrollTicking) {
        scrollTicking = true;
        window.requestAnimationFrame(updateScrollButton);
      }
    },
    { passive: true }
  );

  updateScrollButton();

  scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
