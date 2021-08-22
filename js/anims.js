const loadingPageContainer = document.querySelector('.loading');
const helloTxt = document.querySelector(".hello-txt");
let helloTxtTxt = "Hi, I'm Carl Marino";
let ran = false;

var t1 = anime.timeline({
    easing: 'easeInOutSine',
    duration: 1500
})

var t2 = anime.timeline({
    easing: 'easeInOutSine',
    duration: 1500
})


//start sequence 

t1
    .add({
        targets: '.logo path',
        strokeDashoffset: [anime.setDashoffset, 0],
        delay: function (el, i) { return i * 250 },
        direction: 'alternate',
        loop: false
    })
    .add({
        targets: '.loading',
        update: function () { loadingPageContainer.style.display = "none" },
        duration: 100
    }).add({
        targets: '.start-btn',
        opacity: '100%'
    }).add({
        targets: '.hello-txt',
        update: function () {
            let i = 0;
            if (ran == false) {
                setInterval(() => {

                    if (i > helloTxtTxt.length) {
                        return 0;
                    }

                    helloTxt.innerHTML += helloTxtTxt.charAt(i);
                    i++;

                }, 40)
                ran = true;
            }
        }
    })

function LoadMainPage() {
    t2
        .add({
            targets: '.start-menu',
            opacity: '0%',
            duration: 200
        })
        .add({
            targets: '.bgcircle-blue',
            width: '25vh',
            height: '25vh',
            duration: 300
        })
        .add({
            targets: '.bgcirlce-pink',
            width: '50vh',
            height: '50vh',
            duration: 300
        })
        .add({
            targets: '.menu-container',
            left: '3vh',
            duration: 500,
        })
        .add({
            targets: '.content-container',
            width: window.outerWidth - (window.outerHeight / 100 * 47),
            duration: 200,
        })
        
}

function SwitchPage(){
    anime.timeline({
        easing: 'easeInOutSine',
        duration: 1000
    })
    .add({
        targets: '.content-container',
        top: '-100%',
        opacity: 0,
        duration: 200
    })
    .add({
        targets: '.content-container',
        top: '200%',
        duration: 200
    })
    .add({
        targets: '.content-container',
        opacity: 1,
        duration: 200

    })
    .add({
        targets: '.content-container',
        top: '50%',
        duration: 200
    })
}