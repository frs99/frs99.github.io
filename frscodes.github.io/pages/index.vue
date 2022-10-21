<template>
  <Main/>
</template>

<script>
import Main from '../components/home/Main.vue'
export default {
  components: {
    Main,
  },
  mounted: () => {
    document.getElementsByTagName("footer")[0].classList.remove("op0")
  }
}
</script>