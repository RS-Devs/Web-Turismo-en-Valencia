const btnUp = document.querySelector("#btn-up");

window.addEventListener("scroll", () => {
  if (window.scrollY > document.querySelector("#up-butn").offsetTop) {
    btnUp.style.display = "block";
  } else {
    btnUp.style.display = "none";
  }
});
