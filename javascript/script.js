const menuHamburger = document.querySelector(".menu-hamburger");
const menuHeader = document.querySelector(".menu-header");

menuHamburger.addEventListener("click", () => {
  console.log("clicked");
  menuHeader.classList.toggle("active");
});
