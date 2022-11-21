<template>
  <header class="sticky">
    <section class="max px-6 my-0 mx-auto flex justify-between items-center h-20">
      <div>
        <img class="w-11" src="~/assets/img/logo.png">
      </div>
      <nav class="">
        <ul class="flex justify-between text-color05 font-medium">
          <li class="mr-5"><NuxtLink to="/">Home</NuxtLink></li>
          <li class="mr-5"><NuxtLink to="/about/">About</NuxtLink></li>
          <li class="mr-5"><NuxtLink to="/portfolio/">Portfolio</NuxtLink></li>
          <!-- <li class="mr-5"><NuxtLink to="/contact/">Contact</NuxtLink></li> -->
          <li><NuxtLink to="/blog/">Blog</NuxtLink></li>
        </ul>
      </nav>

      <nav>
        <ul class="flex justify-between text-color05 font-medium">
          <li class="mr-5 flex items-center justify-center"><a target="_blank" class="flex items-center justify-center" href="https://twitter.com/_frs99"><i class="fi fi-brands-twitter text-lg h-5"></i></a></li>
          <li class="mr-5 flex items-center justify-center"><a target="_blank" class="flex items-center justify-center" href="https://github.com/frs99"><i class="fi fi-brands-github text-lg h-5"></i></a></li>
          <li class="mr-5 flex items-center justify-center"><a target="_blank" class="flex items-center justify-center" href="https://dev.to/frs99"><i class="fi fi-brands-dev text-lg h-5"></i></a></li>

          <li><NuxtLink class="block font-medium text-xs lang bg-color04 rounded-md py-1 px-2 text-color01" to="/ar/">العربية</NuxtLink></li>
        </ul>
      </nav>
    </section>
  </header>
</template>

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
    bottom: -10px;
  }
  .lang{
    font-family: 'IBM Plex Sans Arabic', sans-serif !important;
    color: #22223B !important;
  }
</style>