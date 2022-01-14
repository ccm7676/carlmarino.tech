const about = document.querySelector("#about");
const home = document.querySelector("#home");
const proj = document.querySelector("#proj");
const article = document.querySelector("#article");

function SetActive(btn) {
  about.classList.remove("active");
  home.classList.remove("active");
  proj.classList.remove("active");
  article.classList.remove("active");
  btn.classList.add("active");
  document.querySelector("title").innerHTML = btn.id.charAt(0).toUpperCase() + btn.id.slice(1) + " - Carl Marino";
}

function CheckHash() {
  switch (window.location.hash) {
    case "#about":
      SetActive(about);
      break;
    case "#home":
      SetActive(home);
      break;
    case "#proj":
      SetActive(proj);
      break;
    case "#article":
      window.location.href = "https://ccm7676.medium.com";
      break;
    default:
      SetActive(about);
  }
}

CheckHash();
