<template>
  <div>
    <Navbar />
    <Footer />
  </div>
</template>

<script>
window.onload = function () {
  document.body.style.backgroundImage = "url('img/background.jpg')";
};
import Navbar from './components/Navbar.vue';
import Footer from './components/footer.vue';
export default {
  components:{
    Navbar,
    Footer,
  }
}
</script>


<style>
  @import './assets/css/style.css';
  @import './assets/css/navbar.css';
  @import './assets/css/footer.css';
  @import './assets/css/about.css';
  @import './assets/css/services.css';
  @import './assets/css/BusinessPolicy.css';
  @import './assets/css/contact.css';
  @import './assets/css/error.css';
  @import './assets/css/icon-scroll.css';
  @import './assets/css/media.css';
</style>