const headerText = document.querySelector(".header-text");
const codeBtn = document.querySelector(".code-btn");
const musicBtn = document.querySelector(".music-btn");
const photoBtn = document.querySelector(".photo-btn");


//hover events
codeBtn.addEventListener("mouseenter", () => {
  headerText.innerText = "Code";
});

codeBtn.addEventListener("mouseleave", () => {
  setTimeout(() => {
    headerText.innerText = "Hover over an electron";
  }, 1000);
});

musicBtn.addEventListener("mouseenter", () => {
  headerText.innerText = "Music";
});

musicBtn.addEventListener("mouseleave", () => {
  setTimeout(() => {
    headerText.innerText = "Hover over an electron";
  }, 1000);
});

photoBtn.addEventListener("mouseenter", () => {
  headerText.innerText = "Photo & Video";
});

photoBtn.addEventListener("mouseleave", () => {
  setTimeout(() => {
    headerText.innerText = "Hover over an electron";
  }, 1000);
});


//click events

photoBtn.addEventListener("click", () => {

})
