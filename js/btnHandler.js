const startBtn = document.querySelector(".start-btn");
const mainPage = document.querySelector(".mainpage");
const menuBtns = document.querySelectorAll(".btn");
const hideMenuBtn = document.querySelector(".hide-menu-btn");
const hamburgerContainer = document.querySelector(".hamburger-container");
const menuContainer = document.querySelector(".menu-container");
const donateBtn = document.querySelector(".donate-btn");
const learnMoreBtn = document.querySelector(".learn-more-btn");

var start = null;
var change = null;


learnMoreBtn.addEventListener("click", ()=>{
  SwitchPage();
  window.location.hash = "about";
  CheckHash();
})

donateBtn.addEventListener("click", () => {
  window.location.href = "https://www.buymeacoffee.com/ccm7676";
})


menuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if(btn.id == "article"){
      window.location.href = "https://ccm7676.medium.com"
    }
    else{
      SwitchPage();
      window.location.hash = btn.id;
      CheckHash();
    }
    
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

  if (change > 20) {
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
