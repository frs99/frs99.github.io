<template>
  <button class="btn-scroll d-f-c to-center" ref="btnscrooll" style="opacity: 0;">
    <i class="fas fa-arrow-circle-up" aria-hidden="true"></i>
  </button>
</template>

<script>
export default {
  name:scroll,
  mounted(){
    let btnScrooll = this.$refs.btnscrooll;
    window.addEventListener("scroll", () => {
      if(window.scrollY >= 1000){
        btnScrooll.style.opacity = "1";
      } else{
        btnScrooll.style.opacity = "0";
      }
    });

    btnScrooll.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  }
}
</script>