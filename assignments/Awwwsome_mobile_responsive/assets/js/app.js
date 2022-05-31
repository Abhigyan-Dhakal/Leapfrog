const burger = document.querySelector(".hamburger");
const navBar = document.querySelector(".mobile-nav");
const cross = document.querySelector(".cross");

burger.addEventListener("click", () => {
  navBar.classList.toggle("toggle-nav");
});

cross.addEventListener("click", () => {
  navBar.classList.toggle("toggle-nav");
});
