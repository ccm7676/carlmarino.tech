var path = anime.path("svg .code-path");
var electronSpeed = 8000;

var codeBtnAnim = anime({
  targets: "svg .code-btn",
  translateX: path("x"),
  translateY: path("y"),
  easing: "linear",
  duration: electronSpeed,
  loop: true,
});

var path = anime.path("svg .music-path");

var musicBtnAnim = anime({
  targets: "svg .music-btn",
  translateX: path("x"),
  translateY: path("y"),
  easing: "linear",
  duration: electronSpeed,
  loop: true,
});

var path = anime.path("svg .photo-path");

var photoBtnAnim = anime({
  targets: "svg .photo-btn",
  translateX: path("x"),
  translateY: path("y"),
  easing: "linear",
  duration: electronSpeed,
  loop: true,
});

module.exports = {codeBtnAnim, musicBtnAnim,photoBtnAnim};