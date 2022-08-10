//FOR ADD LINK TO HOME 

let link = document.getElementsByClassName("link");

var loopA;
for ( loopA = 0; loopA < link.length; loopA++){
  link[loopA].style.cursor = "pointer";
  link[loopA].onclick = function (){
    window.location.href = "/";
  };
};


//FOR NAVBAR WITH RESPONSIVE
let navbar = document.querySelector(".navbar");

//nav list
let listNav = document.querySelector(".nav-navbar");

//icons

let respNav = document.querySelector(".resp-nav");

respNav.onclick = () => {
  listNav.classList.toggle("nav-open");
  respNav.children[0].classList.toggle("d-n");
  respNav.children[1].classList.toggle("d-n");
};

//CLOSE NAVBAR WITH CLICK
let navBtn = document.querySelectorAll(".a-navbar");
var loopB;
for(loopB = 0; loopB < navBtn.length; loopB ++){
  navBtn[loopB].addEventListener("click", () => {
    listNav.classList.toggle("nav-open");
    respNav.children[0].classList.toggle("d-n");
    respNav.children[1].classList.toggle("d-n");
  });
};


//FOR A IF = #
let a = document.getElementsByTagName("a");
var loopC;
for (loopC = 0; loopC < a.length; loopC++){
  if(a[loopC].getAttribute('href') === "#"){
    a[loopC].style.pointerEvents = "none";
  };
};


//BTN SCROOL
let btnScrooll = document.querySelector(".btn-scroll");

window.addEventListener("scroll", () => {
  if(window.scrollY >= 1000){
    btnScrooll.style.opacity = "1";
  } else{
    btnScrooll.style.opacity = "0";
  };
});

btnScrooll.addEventListener("click", () => {
  window.scrollTo(0, 0);
});