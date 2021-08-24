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

menuContainer.onmousedown = (event) => {
  console.log("he")
  event = event || window.event;
  event.preventDefault();
  start = event.clientY;
  document.onmouseup = () => {document.onmouseup = null;document.onmousemove = null;};
  document.onmousemove = (event) => {
    event = event || window.event;
    event.preventDefault();
    change = event.clientY - start;
    menuContainer.style.height = ((window.innerHeight - menuContainer.offsetTop)*100/window.innerHeight).toString() + "vh"; 
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
