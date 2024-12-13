// Menambahkan event listener untuk setiap tautan
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    // Menghindari perilaku default (langsung ke target)
    e.preventDefault();

    // Mengambil ID dari href (misalnya, #section1)
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    // Jika elemen ditemukan, gulir ke elemen tersebut dengan smooth scroll
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
