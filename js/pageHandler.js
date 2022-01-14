const about = document.querySelector("#about");
const home = document.querySelector("#home");
const projects = document.querySelector("#projects");
const article = document.querySelector("#article");

const aboutPage = document.querySelector(".about");
const homePage = document.querySelector(".home");
const projectsPage = document.querySelector(".projects");


function SetActive(btn) {
  about.classList.remove("active");
  home.classList.remove("active");
  projects.classList.remove("active");
  article.classList.remove("active");
  btn.classList.add("active");

  aboutPage.style.display = "none";
  homePage.style.display = "none";
  projectsPage.style.display = "none";
  document.querySelector("." +btn.id).style.display = "block";

  document.querySelector("title").innerHTML =  "Carl Marino | " + btn.id.charAt(0).toUpperCase() + btn.id.slice(1) ;
}

function CheckHash() {
  switch (window.location.hash) {
    case "#about":
      SetActive(about);
      break;
    case "#home":
      SetActive(home);
      break;
    case "#projects":
      SetActive(projects);
      break;
    case "#article":
      window.location.href = "https://ccm7676.medium.com";
      break;
    default:
      SetActive(about);
  }
}

CheckHash();
