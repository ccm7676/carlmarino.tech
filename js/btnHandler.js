const startBtn = document.querySelector(".start-btn");
const mainPage = document.querySelector(".mainpage");

startBtn.addEventListener("click", () => {
    mainPage.style.display = 'block';
    LoadMainPage();
})