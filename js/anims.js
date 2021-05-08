var path = anime.path('svg .code-path');

anime({
  targets: 'svg .code-btn',
  translateX: path('x'),
  translateY: path('y'),
  easing: 'linear',
  duration: 3000,
  loop: true
});

var path = anime.path('svg .music-path');

anime({
  targets: 'svg .music-btn',
  translateX: path('x'),
  translateY: path('y'),
  easing: 'linear',
  duration: 3000,
  loop: true
});

var path = anime.path('svg .photo-path');

anime({
  targets: 'svg .photo-btn',
  translateX: path('x'),
  translateY: path('y'),
  easing: 'linear',
  duration: 3000,
  loop: true
});