const headerText = document.querySelector(".header-text");
const codeBtn = document.querySelector(".code-btn");
const musicBtn = document.querySelector(".music-btn");
const photoBtn = document.querySelector(".photo-btn");
const aboutBtn = document.querySelector(".about-btn");
const {codeBtnAnim, musicBtnAnim,photoBtnAnim} = require("./anims.js");

//on hover
codeBtn.addEventListener("mouseenter", () => {
  headerText.innerText = "Code";
  codeBtnAnim.pause();
  musicBtnAnim.pause();
  photoBtnAnim.pause();  
});
musicBtn.addEventListener("mouseenter", () => {
  headerText.innerText = "Music";
  codeBtnAnim.pause();
  musicBtnAnim.pause();
  photoBtnAnim.pause(); 
});
photoBtn.addEventListener("mouseenter", () => {
  headerText.innerText = "Photo & Video";
  codeBtnAnim.pause();
  musicBtnAnim.pause();
  photoBtnAnim.pause(); 
});

//on leave
codeBtn.addEventListener("mouseleave", () => {
  codeBtnAnim.play();
  musicBtnAnim.play();
  photoBtnAnim.play(); 
  setTimeout(() => {
    headerText.innerText = "Hover over an electron";
  }, 1000);
});
musicBtn.addEventListener("mouseleave", () => {
  codeBtnAnim.play();
  musicBtnAnim.play();
  photoBtnAnim.play(); 
  setTimeout(() => {
    headerText.innerText = "Hover over an electron";
  }, 1000);
});
photoBtn.addEventListener("mouseleave", () => {
  codeBtnAnim.play();
  musicBtnAnim.play();
  photoBtnAnim.play(); 
  setTimeout(() => {
    headerText.innerText = "Hover over an electron";
  }, 1000);
});

//click events

aboutBtn.addEventListener("click", () => {
  window.location.href = "#about";
})

codeBtn.addEventListener("click", () => {
  window.location.href = "#code";
})

musicBtn.addEventListener("click", () => {
  window.location.href = "#music";
})

photoBtn.addEventListener("click", () => {
  window.location.href = "#photo";
})