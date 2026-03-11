document.documentElement.classList.add("js");

const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle("show");
  });
}

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    if (siteNav) {
      siteNav.classList.remove("show");
    }
  });
});

const revealItems = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const trigger = window.innerHeight * 0.88;

  revealItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < trigger) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
revealOnScroll();

/* soft 3D tilt */
const tiltCards = document.querySelectorAll(".tilt-card");

tiltCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    card.style.transform =
      `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale(1.01)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";
  });
});
