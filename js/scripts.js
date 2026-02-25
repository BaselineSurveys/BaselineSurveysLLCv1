document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.getElementById("mobile-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      const isOpen = document.body.classList.toggle("menu-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        document.body.classList.remove("menu-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("click", function (event) {
      if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
        document.body.classList.remove("menu-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        document.body.classList.remove("menu-open");
        navToggle.setAttribute("aria-expanded", "false");
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
  document.body.appendChild(scrollBtn);

  scrollBtn.style.position = "fixed";
  scrollBtn.style.bottom = "20px";
  scrollBtn.style.right = "20px";
  scrollBtn.style.padding = "10px 15px";
  scrollBtn.style.border = "none";
  scrollBtn.style.background = "#5A4635";
  scrollBtn.style.color = "#fff";
  scrollBtn.style.borderRadius = "50%";
  scrollBtn.style.cursor = "pointer";
  scrollBtn.style.display = "none";
  scrollBtn.style.fontSize = "18px";
  scrollBtn.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
  scrollBtn.title = "Back to top";

  window.addEventListener("scroll", function () {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  });

  document
    .querySelectorAll(".container, .hero, .team-member, .service-item, .utility-service")
    .forEach(function (el) {
      el.classList.add("fade-in-observer");
      observer.observe(el);
    });
});
