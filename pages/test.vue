<template>
  <h1>page test</h1>
</template>

<script setup>
  const { data } = await useAsyncData('home', () => queryContent('/portfolio').find())
</script>