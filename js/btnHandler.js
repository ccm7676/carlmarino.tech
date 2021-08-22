const startBtn = document.querySelector(".start-btn");
const mainPage = document.querySelector(".mainpage");
const menuBtns = document.querySelectorAll(".btn");
const collapseBtn = document.querySelector(".menu-collapse-btn");


startBtn.addEventListener("click", () => {
  mainPage.style.display = "block";
  LoadMainPage();
});

menuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.hash = btn.id;
    CheckHash();
});
});

collapseBtn.addEventListener("click", () => {
  hideMenu();
})