window.onload = function () {
  document.body.style.backgroundImage = "url('assets/img/background.jpg')";
};

let LinkNavbar = document.querySelectorAll(".a-navbar")
let ListLink = document.querySelector(".nav-navbar");
let iconsOpen = document.querySelector(".fa-bars")
let iconsClose = document.querySelector(".fa-times")

for (i = 0; i < LinkNavbar.length; i++){
  LinkNavbar[i].addEventListener("click", () => {
    console.log("fares")
    ListLink.classList.toggle("nav-open");
    iconsOpen.classList.toggle("d-n");
    iconsClose.classList.toggle("d-n");
  });
};