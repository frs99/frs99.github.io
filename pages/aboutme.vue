<template>
  <main class="p-b">
    <BoxHi />
    <BoxInfo />
    <Scroll />
  </main>
</template>

<script>
// document.getElementsByTagName("footer")[0].classList.add('op0')
import BoxHi from '../components/about-me/Box-hi.vue';
import BoxInfo from '../components/about-me/Box-Info.vue';
import Scroll from '../components/Scroll.vue';
export default {
  components: {
    BoxHi,
    BoxInfo,
    Scroll
  },
  mounted: () => {
    document.getElementsByTagName("footer")[0].classList.add("op0")
  }
}
</script>