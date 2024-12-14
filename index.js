// Reveal on scroll

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible && elementBottom > 0) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

document.addEventListener("DOMContentLoaded", revealOnScroll);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
