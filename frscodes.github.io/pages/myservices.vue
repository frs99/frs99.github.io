<template>
  <main class="p-b p30">
    <Logo />
    <Boxservices />
    <Listservices />
    <Thanks />
    <Scroll />
  </main>
</template>

<script>
import Logo from '../components/my-services/Logo.vue';
import Boxservices from '../components/my-services/Box-services.vue';
import Listservices from '../components/my-services/List-services.vue';
import Thanks from '../components/Thanks.vue';
import Scroll from '../components/Scroll.vue';
export default {
  components:{
    Logo,
    Boxservices,
    Listservices,
    Thanks,
    Scroll
  },
  mounted: () => {
    document.getElementsByTagName("footer")[0].classList.add("op0")
  }
}
</script>