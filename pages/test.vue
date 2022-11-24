<template>
  <div>
    <h1>TEST</h1>
    <p>{{data}}</p>
  </div>
</template>

<script setup>
  const { data } = await useFetch('/api/github.json')
</script>
