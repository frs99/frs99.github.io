<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~~/components/Footer.vue';

  const components = {
    Header, 
    Footer
  }
</script>

<style>
  body{
    font-family: 'Inter', sans-serif;
  }
</style>