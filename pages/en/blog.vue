<template>
  <section class="flex justify-center items-center px-6">
    <div class="text-color05 sm:relative sm:bottom-10">
      <h1 class="font-black text-3xl sm:text-5xl text-center mt-3">I'm sorry but for now</h1>
      <h1 class="font-black text-3xl sm:text-5xl text-center mt-3">Blogging is currently only</h1>
      <h1 class="font-black text-3xl sm:text-5xl text-center mt-3">for Arabic content</h1>
      <div class="mt-5">
        <NuxtLink class="float-left inline-block bg-color04 text-color01 font-medium px-6 py-2 rounded-md mt-3 transition-all hover:ml-1" to="/en/portfolio/">cd..</NuxtLink>
        <NuxtLink class="lang float-right inline-block bg-color04 text-color01 font-medium px-6 py-2 rounded-md mt-3 transition-all hover:mr-1" to="/blog/">/المدونة</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
  useHead({title: "Blog"})
  definePageMeta({
    layout: "english",
  })
</script>

<style scoped>
  .lang{
    font-family: 'IBM Plex Sans Arabic', sans-serif !important;
    direction: rtl;
  }
  section{
    height: calc(100vh - 80px);
  }
</style>