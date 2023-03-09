const menu = document.querySelector("#navbarSupportedContent");

document.addEventListener("click", function (event) {
  if (event.target.closest("#navbarSupportedContent")) return;

  menu.classList.remove("show");
});
