<template>
  <div class="page">
    <EnHeader />
    <main>
      <slot />
    </main>
    <Loading />
  </div>
</template>

<script setup>
  useHead({
    htmlAttrs: {
      lang: "en",
    },
    meta: [{
      name:"description",
      content:"The official website"
    }]
  })
</script>
<style scoped>
div{
    font-family: 'Inter', sans-serif;
  }
</style>