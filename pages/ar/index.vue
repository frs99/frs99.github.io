<template>
  <section class="flex justify-center items-center">
    <ArHomeWelcome />
  </section>
</template>

<script setup>
useHead({
  title:"الرئيسية"
})
definePageMeta({
    layout:"arabic"
  })
</script>

<style scoped>
  section {
    height: calc(100vh - 80px);
  }
</style>