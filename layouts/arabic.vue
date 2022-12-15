<template>
  <div class="page">
    <ArHeader />
    <main>
      <slot />
    </main>
    <loading />
  </div>
</template>

<script setup>
  useHead({
    htmlAttrs: {
      lang: "ar",
      dir: "rtl"
    },
    meta: [{
      name: "description",
      content: "الموقع الرسمي"
    }],
  })
</script>

<style scoped>
div {
  font-family: 'IBM Plex Sans Arabic', sans-serif !important;
}
</style>