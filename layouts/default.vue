<template>
  <div>
    <Header />
    <slot />
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