<template>
  <header class="sticky">

    <!-- NAVBAR FOR MOBILE -->
    <section class="sm:hidden flex max px-6 my-0 mx-auto justify-between items-center h-20">
      <div>
        <img class="w-11 h-11" src="../assets/img/logo.png" alt="logo">
      </div>
      <div @click="OpenNavbar">
        <i class="fi fi-sr-apps text-2xl text-color04"></i>
      </div>
    </section>

    <!-- NAVBAR DESKTOP -->
    <section ref="navbar" class="
        w-full bg-color01 fixed top-0 h-0 z-50 overflow-hidden transition-all
        sm:static sm:flex sm:max px-6 my-0 mx-auto sm:justify-between sm:items-center sm:h-20">
      <div class="hidden sm:block">
        <img class="w-11 h-11" src="../assets/img/logo.png" alt="logo">
      </div>

      <!-- ICON FOR CLOSE -->
      <div @click="CloseBavbar" class="text-right mt-6 sm:hidden">
        <i class="fi fi-sr-cross-circle text-2xl text-color04 "></i>
      </div>
      <!-- ICON FOR CLOS -->

      <nav>
        <ul class="sm:flex justify-between text-color05 font-medium">
          <li class="sm:mr-5"><NuxtLink @click="CloseBavbar" class="w-full inline-block text-center py-7" to="/">Home</NuxtLink></li>
          <li class="sm:mr-5"><NuxtLink @click="CloseBavbar" class="w-full inline-block text-center py-7" to="/about/">About</NuxtLink></li>
          <li class="sm:mr-5"><NuxtLink @click="CloseBavbar" class="w-full inline-block text-center py-7" to="/portfolio/">Portfolio</NuxtLink></li>
          <li><NuxtLink @click="CloseBavbar" class="w-full inline-block text-center py-7" to="/blog/">Blog</NuxtLink></li>
        </ul>
      </nav>

      <nav>
        <ul class="w-3/4 my-10 mx-auto sm:w-auto flex justify-between text-color05 font-medium">
          <li class="sm:mr-5 flex items-center justify-center"><a target="_blank" class="flex items-center justify-center" href="https://twitter.com/_frs99"><i class="fi fi-brands-twitter text-lg h-5"></i></a></li>
          <li class="sm:mr-5 flex items-center justify-center"><a target="_blank" class="flex items-center justify-center" href="https://github.com/frs99"><i class="fi fi-brands-github text-lg h-5"></i></a></li>
          <li class="sm:mr-5 flex items-center justify-center"><a target="_blank" class="flex items-center justify-center" href="https://dev.to/frs99"><i class="fi fi-brands-dev text-lg h-5"></i></a></li>
          <li><NuxtLink class="block font-medium text-xs lang bg-color04 rounded-md py-1 px-5 sm:px-2 text-color01" to="/ar/">العربية</NuxtLink></li>
        </ul>
      </nav>
    </section>
  </header>
</template>



<script>
export default {
  methods: {
    OpenNavbar(){
      console.log(this.$refs.navbar)
      this.$refs.navbar.classList.toggle("max-h")
    },
    CloseBavbar(){
      this.$refs.navbar.classList.toggle("max-h")
    }
  },
}
</script>

<style scoped>
  a.router-link-active {
    color: #C9ADA7;
    position: relative;
  }
  a.router-link-active::after{
    content: '';
    width:15px;
    height:4px;
    border-radius: 3px;
    background-color: #C9ADA7;
    position: absolute;
    display: block;
    left: 0;
    right: 0;
    margin:auto;
    bottom:15px;
  }
  .lang{
    font-family: 'IBM Plex Sans Arabic', sans-serif !important;
    color: #22223B !important;
  }
  @media (max-width: 640px){
    .max-h{
      height: 100vh;
    }
  }
  
</style>