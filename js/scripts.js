// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('mobile-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const isOpen = document.body.classList.toggle('menu-open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu on link click
    navMenu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        document.body.classList.remove('menu-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu on outside click
    document.addEventListener('click', function (e) {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        document.body.classList.remove('menu-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        document.body.classList.remove('menu-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
  // Scroll to top button logic
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

  // Fade-in animation for sections
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  });

  document.querySelectorAll(".container, .hero, .team-member, .service-item, .utility-service").forEach(el => {
    el.classList.add("fade-in-observer");
    observer.observe(el);
  });
});

const links = {
  index: ["index.html", "Home"],
  about: ["about.html", "About"],
  services: ["services.html", "Services"],
  utility: ["utility.html", "Utility Locating"],
  quote: ["quote.html", "Request a Quote"],
  contact: ["contact.html", "Contact"],
  ourteam: ["ourteam.html", "Our Team"],
  careers: ["careers.html", "Careers"]
};

 // Set active nav link 
 const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("#dynamic-nav a");

 // Highlight the active nav link
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("#dynamic-nav a");

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
