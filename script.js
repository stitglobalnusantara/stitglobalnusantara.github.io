const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const backToTop = document.getElementById("backToTop");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Tutup menu navigasi" : "Buka menu navigasi");
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 450);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Menandai menu yang sesuai dengan bagian halaman yang sedang terlihat.
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`
        );
      });
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach((section) => observer.observe(section));
let indeksSlide = 0;
const daftarSlide = document.querySelectorAll('.hero-slider .slide');
const daftarDot = document.querySelectorAll('.hero-slider .dot');

function tampilkanSlide(n) {
  if (!daftarSlide.length) return;
  indeksSlide = (n + daftarSlide.length) % daftarSlide.length;

  daftarSlide.forEach((slide, i) => {
    slide.classList.toggle('active', i === indeksSlide);
  });
  daftarDot.forEach((dot, i) => {
    dot.classList.toggle('active', i === indeksSlide);
  });
}

function gantiSlide(arah) {
  tampilkanSlide(indeksSlide + arah);
}

function pilihSlide(indeks) {
  tampilkanSlide(indeks);
}

if (daftarSlide.length > 1) {
  setInterval(() => gantiSlide(1), 4000);
}