const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.querySelector(".hero-nav");

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});
