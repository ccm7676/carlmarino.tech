const startBtn = document.querySelector(".start-btn");
const mainPage = document.querySelector(".mainpage");
const menuBtns = document.querySelectorAll(".btn");
const hideMenuBtn = document.querySelector(".hide-menu-btn");
const hamburgerContainer = document.querySelector(".hamburger-container");
const menuContainer = document.querySelector(".menu-container");

var start = null;
var change = null;

startBtn.addEventListener("click", () => {
  mainPage.style.display = "block";
  startBtn.parentElement.style.display = "none";
  LoadMainPage();
  setInterval(Checker, 100);
});

menuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    SwitchPage();
    window.location.hash = btn.id;
    CheckHash();
  });
});

hideMenuBtn.addEventListener("click", () => {
  if (window.innerWidth <= 450) {
    hideMenuMobile();
  } else {
    hideMenu();
  }
});

hamburgerContainer.addEventListener("click", () => {
  showMenu();
});

document.ontouchstart = (event) => {
  start = event.touches[0].clientY;
}

document.ontouchmove = (event) => {
  if (!start) {
    return;
  }
  change = start - event.touches[0].clientY;

  if (change > 0) {
    showMenuMobile();
  } else {
    hideMenuMobile();
  }

  change = null;
};

var hiding = false;
var showing = false;

function Checker() {
  if (window.innerWidth > 1000) {
    if (!showing) {
      showMenu();
      showing = true;
    }
  }
}
