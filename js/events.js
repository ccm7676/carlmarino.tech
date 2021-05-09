const headerText = document.querySelector(".header-text");
const codeBtn = document.querySelector(".code-btn");
const musicBtn = document.querySelector(".music-btn");
const photoBtn = document.querySelector(".photo-btn");
const aboutBtn = document.querySelector(".about-btn");

//on hover
codeBtn.addEventListener("mouseenter", () => {
  headerText.innerText = "Code";
});
musicBtn.addEventListener("mouseenter", () => {
  headerText.innerText = "Music";
});
photoBtn.addEventListener("mouseenter", () => {
  headerText.innerText = "Photo & Video";
});

//on leave
codeBtn.addEventListener("mouseleave", () => {
  setTimeout(() => {
    headerText.innerText = "Hover over an electron";
  }, 1000);
});
musicBtn.addEventListener("mouseleave", () => {
  setTimeout(() => {
    headerText.innerText = "Hover over an electron";
  }, 1000);
});
photoBtn.addEventListener("mouseleave", () => {
  setTimeout(() => {
    headerText.innerText = "Hover over an electron";
  }, 1000);
});

//click events

aboutBtn.addEventListener("click", () => {
  window.location.href = "#about";
})

codeBtn.addEventListener("click", () => {
  window.location.href = "#code";
})

musicBtn.addEventListener("click", () => {
  window.location.href = "#music";
})

photoBtn.addEventListener("click", () => {
  window.location.href = "#photo";
})