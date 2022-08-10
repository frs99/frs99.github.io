document.querySelector(".footer").classList.toggle("op0");
window.addEventListener("scroll", () => {
  let scroleable = document.documentElement.scrollHeight - window.innerHeight;
  let scrolled = window.scrollY;
  if(scrolled === scroleable){
    document.querySelector(".footer").classList.remove("op0");
  }
  else{
    document.querySelector(".footer").classList.add("op0");
  }
})