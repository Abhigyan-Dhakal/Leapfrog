const burger = document.querySelector(".hamburger");
const navBar = document.querySelector(".navbar");

burger.addEventListener("click", () => {
  navBar.classList.toggle("toggle-nav");
});
