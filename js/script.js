const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.querySelector(".hero-nav");
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from '@vercel/speed-insights';
injectSpeedInsights();
inject();

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});
