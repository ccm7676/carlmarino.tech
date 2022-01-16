const startBtn = document.querySelector(".start-btn");
const mainPage = document.querySelector(".mainpage");
const menuBtns = document.querySelectorAll(".btn");
const hideMenuBtn = document.querySelector(".hide-menu-btn");
const hamburgerContainer = document.querySelector(".hamburger-container");
const menuContainer = document.querySelector(".menu-container");
const donateBtn = document.querySelector(".donate-btn");
const learnMoreBtn = document.querySelector(".learn-more-btn");
const miniMenuBtns = document.querySelectorAll(".mini-btn");
const codeBtn = document.querySelector("#code-btn");
const musicBtn = document.querySelector("#music-btn");
const photoBtn = document.querySelector("#photo-btn");
const codeContainer = document.querySelector(".code-container");
const musicContainer = document.querySelector(".music-container");
const photoContainer = document.querySelector(".photo-container");

var start = null;
var change = null;

function setMiniActive(btn){
  codeBtn.classList.remove("active");
  musicBtn.classList.remove("active");
  photoBtn.classList.remove("active");
  btn.classList.add("active");

  var selectedContainer = document.querySelector("." + btn.id.replace("-btn","") + "-container");
  codeContainer.classList.remove("active");
  musicContainer.classList.remove("active");
  photoContainer.classList.remove("active");
  selectedContainer.classList.add("active");
  
}

miniMenuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    setMiniActive(btn)
  });
});



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
  if (window.innerWidth > 1200) {
    if (!showing) {
      showMenu();
      showing = true;
    }
  }
}
