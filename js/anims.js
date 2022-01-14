const loadingPageContainer = document.querySelector(".loading");
const helloTxt = document.querySelector(".hello-txt");
let helloTxtTxt = "Hi, I'm Carl Marino";
let ran = false;

var t1 = anime.timeline({
  easing: "easeInOutSine",
  duration: 1500,
});

var t2 = anime.timeline({
  easing: "easeInOutSine",
  duration: 1500,
});

//start sequence

t1.add({
  targets: ".cmlogo",
  opacity: 1,
  duration: 500
}).add({
  targets: ".code-load .c",
  opacity: 1,
  duration: 50
}).add({
  targets: ".cmlogo",
  opacity: 0,
  duration: 200
}).add({
  targets: ".code-load .c",
  left: 0,
  duration: 5,
}).add({
  targets: ".code-load .o",
  opacity: 1,
  duration: 50
}).add({
  targets: ".code-load .d",
  opacity: 1,
  duration: 50
}).add({
  targets: ".code-load .e",
  opacity: 1,
  duration: 50
}).add({
  targets: ".nothing .this .is .just .a .pause",
  duration: 1000,
}).add({
  targets: ".code-load .o",
  opacity: 0,
  duration: 50
}).add({
  targets: ".code-load .d",
  opacity: 0,
  duration: 50
}).add({
  targets: ".code-load .e",
  opacity: 0,
  duration: 50
}).add({
  targets: ".code-load .c",
  left: "20vh",
  duration: 50
}).add({
  targets: ".code-load .c",
  opacity: 0,
  duration: 200
}).add({
  targets: ".cmlogo",
  opacity: 1,
  duration: 1000
}).add({
  targets: ".design-load .d",
  opacity: 1,
  duration: 300
}).add({
  targets: ".cmlogo",
  opacity: 0,
  duration: 200
}).add({
  targets: ".design-load .d",
  left: 0,
  duration: 5,
}).add({
  targets: ".design-load .e",
  opacity: 1,
  duration: 50
}).add({
  targets: ".design-load .s",
  opacity: 1,
  duration: 50
}).add({
  targets: ".design-load .i",
  opacity: 1,
  duration: 50
}).add({
  targets: ".design-load .g",
  opacity: 1,
  duration: 50
}).add({
  targets: ".design-load .n",
  opacity: 1,
  duration: 50
}).add({
  targets: ".nothing .this .is .just .a .pause",
  duration: 1000,
}).add({
  targets: ".design-load .n",
  opacity: 0,
  duration: 50
}).add({
  targets: ".design-load .g",
  opacity: 0,
  duration: 50
}).add({
  targets: ".design-load .i",
  opacity: 0,
  duration: 50
}).add({
  targets: ".design-load .s",
  opacity: 0,
  duration: 50
}).add({
  targets: ".design-load .e",
  opacity: 0,
  duration: 50
}).add({
  targets: ".design-load .d",
  opacity: 0,
  duration: 50
}).add({
  targets: ".design-load .d",
  left: "26vh",
  duration: 10
}).add({
  targets: ".design-load .d",
  opacity: 0,
  duration: 200
}).add({
  targets: ".cmlogo",
  opacity: 1,
  duration: 1000
}).add({
  targets: ".photo-load .p",
  opacity: 1,
  duration: 300
}).add({
  targets: ".cmlogo",
  opacity: 0,
  duration: 200
}).add({
  targets: ".photo-load .p",
  left: 0,
  duration: 5,
}).add({
  targets: ".photo-load .h",
  opacity: 1,
  duration: 50
}).add({
  targets: ".photo-load .o",
  opacity: 1,
  duration: 50
}).add({
  targets: ".photo-load .t",
  opacity: 1,
  duration: 50
}).add({
  targets: ".photo-load .o2",
  opacity: 1,
  duration: 50
}).add({
  targets: ".nothing .this .is .just .a .pause",
  duration: 1000,
}).add({
  targets: ".photo-load .o2",
  opacity: 0,
  duration: 50
}).add({
  targets: ".photo-load .t",
  opacity: 0,
  duration: 50
}).add({
  targets: ".photo-load .o",
  opacity: 0,
  duration: 50
}).add({
  targets: ".photo-load .h",
  opacity: 0,
  duration: 50
}).add({
  targets: ".photo-load .p",
  opacity: 0,
  duration: 50
}).add({
  targets: ".photo-load .p",
  left: "26.7vh",
  duration: 10
}).add({
  targets: ".photo-load .p",
  opacity: 0,
  duration: 200
}).add({
  targets: ".cmlogo",
  opacity: 1,
  duration: 1000
}).add({
  targets: ".music-load .m",
  opacity: 1,
  duration: 300
}).add({
  targets: ".cmlogo",
  opacity: 0,
  duration: 200
}).add({
  targets: ".music-load .m",
  left: 0,
  duration: 5,
}).add({
  targets: ".music-load .u",
  opacity: 1,
  duration: 50
}).add({
  targets: ".music-load .s",
  opacity: 1,
  duration: 50
}).add({
  targets: ".music-load .i",
  opacity: 1,
  duration: 50
}).add({
  targets: ".music-load .c",
  opacity: 1,
  duration: 50
}).add({
  targets: ".music-load",
  opacity: 0,
  delay: 400,
  duration: 1000,
}).add({
  targets: ".mainpage",
  opacity: 1,
  duration: 100,
}).add({
  targets: ".mainpage",
  update: function(){LoadMainPage()},
  duration: 50
})

function LoadMainPage() {
  t2.add({
    targets: ".start-menu",
    opacity: "0%",

    duration: 200,
  })
    .add({
      targets: ".bgcircle-blue",
      width: "25vh",
      height: "25vh",
      duration: 300,
    })
    .add({
      targets: ".bgcirlce-pink",
      width: "50vh",
      height: "50vh",
      duration: 300,
    })
    .add({
      targets: ".menu-container",
      left: function () {
        if (window.innerWidth > 1000) {
          return "3vh";
        } else {
          return "-32vh";
        }
      },
      duration: 200,
    })
    .add({
      targets: ".content-container",
      width: function () {
        if (window.innerWidth > 1000) {
          return window.outerWidth - (window.outerHeight / 100) * 47;
        } else {
          return "100%";
        }
      },
      duration: 200,
    })
    .add({ 
      targets: "body",
      update: function () {setInterval(Checker, 100);}
    
    })
}

function SwitchPage() {
  anime
    .timeline({
      easing: "easeInOutSine",
      duration: 1000,
    })
    .add({
      targets: ".content-container",
      top: "-100%",
      opacity: 0,
      duration: 200,
    })
    .add({
      targets: ".content-container",
      top: "200%",
      duration: 200,
    })
    .add({
      targets: ".content-container",
      opacity: 1,
      duration: 200,
    })
    .add({
      targets: ".content-container",
      top: "50%",
      duration: 200,
    });
}

function hideMenu() {
  anime
    .timeline({
      easing: "easeInOutSine",
      duration: 1000,
    })
    .add({
      targets: ".menu-container",
      left: "-32vh",
      duration: 200,
    })
    .add({
      targets: ".hamburger-container",
      opacity: 1,
    })
    .add({
      targets: "body",
      update: function () {
        hiding = false;
      },
    });
}

function hideMenuMobile() {
   anime
    .timeline({
      easing: "easeInOutSine",
      duration: 1000,
    })
    .add({
      targets: ".menu-container",
      bottom: "-84vh",
      duration: 200,
    })
    .add({
      targets: "body",
      update: function () {
        hiding = false;
      },
    });
}

function showMenuMobile() {
  anime({
    targets: ".menu-container",
    bottom: 0,
    duration: 200,

  })
}

function showMenu() {
  anime
    .timeline({
      easing: "easeInOutSine",
      duration: 1000,
    })
    .add({
      targets: ".hamburger-container",
      opacity: 0,
      duration: 200,
    })
    .add({
      targets: ".menu-container",
      left: "3vh",
      duration: 200,
    })
    .add({
      targets: "body",
      update: function () {
        showing = false;
      },
    });
}
