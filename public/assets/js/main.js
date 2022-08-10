

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



//FOR HIDE AND SHOW FOOTER
document.addEventListener("click", (e) => {
  if(e.target === a[1] || e.target === a[2]){
    document.querySelector(".footer").classList.add("footer-about");
    document.querySelector(".footer").style.opacity = "0";
    window.addEventListener("scroll", () => {
      let scroleable = document.documentElement.scrollHeight - window.innerHeight;
      let scrolled = window.scrollY;
      if(scrolled === scroleable){
        document.querySelector(".footer-about").style.opacity = "1";
      } else{
        document.querySelector(".footer-about").style.opacity = "0";
      }
    })
  } else if(e.target === a[0]){
    document.querySelector(".footer").classList.remove("footer-about");
    document.querySelector(".footer").style.opacity = "1";
  }
})

if(document.body.id === "page-about" || document.body.id === "page-services"){
  document.querySelector(".footer").classList.add("footer-about");
  document.querySelector(".footer").style.opacity = "0";
  window.addEventListener("scroll", () => {
    let scroleable = document.documentElement.scrollHeight - window.innerHeight;
    let scrolled = window.scrollY;
    if(scrolled === scroleable){
      document.querySelector(".footer-about").style.opacity = "1";
    } else{
      document.querySelector(".footer-about").style.opacity = "0";
    }
  })
} else{
  document.querySelector(".footer").classList.remove("footer-about");
  document.querySelector(".footer").style.opacity = "1";
};
