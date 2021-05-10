var path = anime.path("svg .code-path");
var electronSpeed = 8000;

anime({
  targets: "svg .code-btn",
  translateX: path("x"),
  translateY: path("y"),
  easing: "linear",
  duration: electronSpeed,
  loop: true,
});

var path = anime.path("svg .music-path");
console.log(path());
anime({
  targets: "svg .music-btn",
  translateX: path("x"),
  translateY: path("y"),
  easing: "linear",
  duration: electronSpeed,
  loop: true,
});

var path = anime.path("svg .photo-path");

anime({
  targets: "svg .photo-btn",
  translateX: path("x"),
  translateY: path("y"),
  easing: "linear",
  duration: electronSpeed,
  loop: true,
});
