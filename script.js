const hamburger = document.querySelector(".header__hamburger-icon");
const navMenu = document.querySelector(".header__nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
