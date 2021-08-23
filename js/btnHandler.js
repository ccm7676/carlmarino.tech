const startBtn = document.querySelector(".start-btn");
const mainPage = document.querySelector(".mainpage");
const menuBtns = document.querySelectorAll(".btn");
const hideMenuBtn = document.querySelector(".hide-menu-btn");
const hamburgerContainer = document.querySelector(".hamburger-container");


startBtn.addEventListener("click", () => {
  mainPage.style.display = "block";
  startBtn.parentElement.style.display = "none";
  LoadMainPage();
});

menuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.hash = btn.id;
    CheckHash();
});
});

hideMenuBtn.addEventListener("click", () => {
  hideMenu();
})

hamburgerContainer.addEventListener("click", () => {
  showMenu();
})