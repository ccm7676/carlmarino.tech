const homeDiv = document.getElementById("home");
const aboutDiv = document.getElementById("about");
const codeDiv = document.getElementById("code");
const musicDiv = document.getElementById("music");
const photoDiv = document.getElementById("photo");

const homeMode = new CustomEvent("homeMode");
const codeMode = new CustomEvent("codeMode");
const aboutMode = new CustomEvent("aboutMode");
const musicMode = new CustomEvent("musicMode");
const photoMode = new CustomEvent("photoMode");
var oldHash = window.location.hash;

// loops the switch statement
setInterval(() => {
  if (oldHash != window.location.hash) {
    oldHash = window.location.hash;

    // check hash
    switch (window.location.hash) {
      case "#home":
        codeBtn.dispatchEvent(homeMode);
        break;
      case "#about":
        codeBtn.dispatchEvent(aboutMode);
        break;
      case "#code":
        codeBtn.dispatchEvent(codeMode);
        break;
      case "#music":
        codeBtn.dispatchEvent(musicMode);
        break;
      case "#photo":
        codeBtn.dispatchEvent(photoMode);
        break;
      default:
        codeBtn.dispatchEvent(homeMode);
        break;
    }
  }
}, 100);

