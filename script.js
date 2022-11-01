const handburgerMenuContainer = document.querySelector(".handburger-menu");
const topMenu = document.querySelector(".top");
const middleMenu = document.querySelector(".middle");
const bottomMenu = document.querySelector(".bottom");
const heroSection = document.querySelector(".hero-section");
const logo = document.querySelector(".logo");
const mobileNavContainer = document.querySelector(".mobile-nav-container");
// const mobileNavContainerLeft = document.querySelector(
//   ".mobile-nav-container.left"
// );
const middleNav = document.querySelector(".middle-nav");
const navContactBtn = document.querySelector("nav a.contact-button");

const openAndCloseMenu = function () {
  topMenu.classList.toggle("down");
  middleMenu.classList.toggle("down");
  bottomMenu.classList.toggle("down");
  setTimeout(() => {
    topMenu.classList.toggle("bend");
    middleMenu.classList.toggle("bend");
    bottomMenu.classList.toggle("bend");
    mobileNavContainer.classList.toggle("show");
    middleNav.classList.toggle("show");
    navContactBtn.classList.toggle("show");
  }, 500);
};

handburgerMenuContainer.addEventListener("click", openAndCloseMenu);
mobileNavContainer.addEventListener("click", openAndCloseMenu);

middleNav.addEventListener("click", (e) => {
  e.currentTarget.classList.contains("show") && openAndCloseMenu();
});
navContactBtn.addEventListener("click", (e) => {
  e.currentTarget.classList.contains("show") && openAndCloseMenu();
});
