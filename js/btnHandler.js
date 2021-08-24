const startBtn = document.querySelector(".start-btn");
const mainPage = document.querySelector(".mainpage");
const menuBtns = document.querySelectorAll(".btn");
const hideMenuBtn = document.querySelector(".hide-menu-btn");
const hamburgerContainer = document.querySelector(".hamburger-container");
const menuContainer = document.querySelector(".menu-container");

var start = 0;
var change = 0;

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
  if(window.innerWidth <= 450){
    hideMenuMobile();
  }
  else{
    hideMenu();
  }
  
});



hamburgerContainer.addEventListener("click", () => {
  showMenu();
});


menuContainer.ontouchstart = (event) => {
  console.log("he")
  event = event || window.event;
  event.preventDefault();
  start = event.touches[0].clientY;
  document.ontouchstop = () => {document.ontouchstop = null;document.ontouchmove = null;};
  document.ontouchmove = (event) => {
    console.log("point")
    event = event || window.event;
    event.preventDefault();
    change = start - event.touches[0].clientY;
    menuContainer.style.bottom = (((window.innerHeight - menuContainer.offsetTop)- window.innerHeight/100*90) + change).toString() + "px"; 
  }
}

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
