<template>
  <section class="flex justify-center items-center">
    <EnHomeWelcome />
  </section>
</template>

<script setup>
  useHead({title: "Home"})
  definePageMeta({
    layout: "english",
  })
</script>

<style scoped>
  section{
    height: calc(100vh - 80px);
  }
</style>