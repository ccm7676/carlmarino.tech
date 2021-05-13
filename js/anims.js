const codeBtn = document.querySelector(".code-btn");

//time it takes for an electron to do a full loop in milliseconds
var electronSpeed = 8000;

//anim for code electron
var path = anime.path("svg .code-path");

var codeBtnAnim = anime({
  targets: "svg .code-btn",
  translateX: path("x"),
  translateY: path("y"),
  easing: "linear",
  duration: electronSpeed,
  loop: true,
});

//anim for music electron
var path = anime.path("svg .music-path");

var musicBtnAnim = anime({
  targets: "svg .music-btn",
  translateX: path("x"),
  translateY: path("y"),
  easing: "linear",
  duration: electronSpeed,
  loop: true,
});

//anim for photo electron
var path = anime.path("svg .photo-path");

var photoBtnAnim = anime({
  targets: "svg .photo-btn",
  translateX: path("x"),
  translateY: path("y"),
  easing: "linear",
  duration: electronSpeed,
  loop: true,
});

codeBtn.addEventListener("electronEnter", () =>{
  photoBtnAnim.pause();
  musicBtnAnim.pause();
  codeBtnAnim.pause();
})

codeBtn.addEventListener("electronLeave", () => {
  photoBtnAnim.play();
  musicBtnAnim.play();
  codeBtnAnim.play();
})