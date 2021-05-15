const headerText = document.querySelector(".header-text");

const musicBtn = document.querySelector(".music-btn");
const photoBtn = document.querySelector(".photo-btn");
const aboutBtn = document.querySelector(".about-btn");

// create custom events

const electronEnter = new CustomEvent("electronEnter");
const electronLeave = new CustomEvent("electronLeave");
// detect when mouse starts to hover over one of the electrons

codeBtn.addEventListener("mouseenter", () => {
  headerText.innerText = "Code";
  codeBtn.dispatchEvent(electronEnter);
});
musicBtn.addEventListener("mouseenter", () => {
  headerText.innerText = "Music";
  codeBtn.dispatchEvent(electronEnter);
});
photoBtn.addEventListener("mouseenter", () => {
  headerText.innerText = "Photo & Video";
  codeBtn.dispatchEvent(electronEnter);
});

// detect when mouse stops to hover over one of the electrons

codeBtn.addEventListener("mouseleave", () => {
  codeBtn.dispatchEvent(electronLeave);
});
musicBtn.addEventListener("mouseleave", () => {
  codeBtn.dispatchEvent(electronLeave);
});
photoBtn.addEventListener("mouseleave", () => {
  codeBtn.dispatchEvent(electronLeave);
});

// detect when electron is clicked

aboutBtn.addEventListener("click", () => {
  window.location.href = "#about";
});

codeBtn.addEventListener("click", () => {
  window.location.href = "#code";
});

musicBtn.addEventListener("click", () => {
  window.location.href = "#music";
});

photoBtn.addEventListener("click", () => {
  window.location.href = "#photo";
});

// detects when the mouse stops to hover over any of the electrons

codeBtn.addEventListener("electronLeave", () => {
  headerText.innerText = "Hover over an electron";
});

//detect when page changes

codeBtn.addEventListener("homeMode", () => {
  homeDiv.style.display = "block";
  aboutDiv.style.display = "none";
  codeDiv.style.display = "none";
  musicDiv.style.display = "none";
  photoDiv.style.display = "none";
});

codeBtn.addEventListener("aboutMode", () => {
  homeDiv.style.display = "none";
  aboutDiv.style.display = "block";
  codeDiv.style.display = "none";
  musicDiv.style.display = "none";
  photoDiv.style.display = "none";
});

codeBtn.addEventListener("codeMode", () => {
  homeDiv.style.display = "none";
  aboutDiv.style.display = "none";
  codeDiv.style.display = "block";
  musicDiv.style.display = "none";
  photoDiv.style.display = "none";
});

codeBtn.addEventListener("photoMode", () => {
  homeDiv.style.display = "none";
  aboutDiv.style.display = "none";
  codeDiv.style.display = "none";
  musicDiv.style.display = "none";
  photoDiv.style.display = "block";
});

codeBtn.addEventListener("musicMode", () => {
  homeDiv.style.display = "none";
  aboutDiv.style.display = "none";
  codeDiv.style.display = "none";
  musicDiv.style.display = "block";
  photoDiv.style.display = "none";
});
