<template>
  <main class="p-b p30">
    <Logo />
    <Boxservies />
    <Listservies />
    <Thanks />
    <Scroll />
  </main>
</template>

<script>
document.getElementsByTagName("footer")[0].classList.add('op0')
import Logo from '../components/my-servies/Logo.vue';
import Boxservies from '../components/my-servies/Box-servies.vue';
import Listservies from '../components/my-servies/List-servies.vue';
import Thanks from '../components/Thanks.vue';
import Scroll from '../components/Scroll.vue';
export default {
  components:{
    Logo,
    Boxservies,
    Listservies,
    Thanks,
    Scroll
  },
}
</script>