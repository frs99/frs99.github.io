<template>
  <section>
    <h1 class="text-6xl">home</h1>
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
    height: calc(100vh - 120px);
  }
</style>