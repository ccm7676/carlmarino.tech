const about = document.querySelector("#about");
const code = document.querySelector("#code");
const music = document.querySelector("#music");
const photo = document.querySelector("#photo");

function SetActive(btn) {
  about.classList.remove("active");
  code.classList.remove("active");
  music.classList.remove("active");
  photo.classList.remove("active");
  btn.classList.add("active");
  document.querySelector("title").innerHTML = btn.id.charAt(0).toUpperCase() + btn.id.slice(1) + " - Carl Marino";
}

function CheckHash() {
  switch (window.location.hash) {
    case "#about":
      SetActive(about);
      break;
    case "#code":
      SetActive(code);
      break;
    case "#music":
      SetActive(music);
      break;
    case "#photo":
      SetActive(photo);
      break;
    default:
      SetActive(about);
  }
}

CheckHash();
