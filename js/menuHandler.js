const homeDiv = document.getElementById("home");
const aboutDiv = document.getElementById("about");
const codeDiv = document.getElementById("code");
const musicDiv = document.getElementById("music");
const photoDiv = document.getElementById("photo");

setInterval(() => {
  switch (
    window.location.href.substring(window.location.href.indexOf("#") + 1)
  ) {
    case "home":
      homeDiv.style.display = "block";
      aboutDiv.style.display = "none";
      codeDiv.style.display = "none";
      musicDiv.style.display = "none";
      photoDiv.style.display = "none";
      break;

    case "about":
      homeDiv.style.display = "none";
      aboutDiv.style.display = "block";
      codeDiv.style.display = "none";
      musicDiv.style.display = "none";
      photoDiv.style.display = "none";
      break;
    case "code":
      homeDiv.style.display = "none";
      aboutDiv.style.display = "none";
      codeDiv.style.display = "block";
      musicDiv.style.display = "none";
      photoDiv.style.display = "none";
      break;
    case "music":
      homeDiv.style.display = "none";
      aboutDiv.style.display = "none";
      codeDiv.style.display = "none";
      musicDiv.style.display = "block";
      photoDiv.style.display = "none";
      break;
    case "photo":
      homeDiv.style.display = "none";
      aboutDiv.style.display = "none";
      codeDiv.style.display = "none";
      musicDiv.style.display = "none";
      photoDiv.style.display = "block";
      break;
    default:
      homeDiv.style.display = "block";
      aboutDiv.style.display = "none";
      codeDiv.style.display = "none";
      musicDiv.style.display = "none";
      photoDiv.style.display = "none";
      break;
  }
}, 100);
