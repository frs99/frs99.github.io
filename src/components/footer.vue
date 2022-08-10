<template>
  <footer class="m-c footer" ref="footer">
    <section class="d-f-c to-space-between m-c footer-box">
        <div class="copyright">
          <p>All Rights Reserved - <a href="https://frscodes.github.io/copyright/" class="copyright">FrsCodes 2022 ©</a></p>
        </div>
        <div class="other-link">
          <ul class="d-f-c to-space-between">
              <li>
                <a class="bzns" href="/businesspolicy">Business Policy</a>
              </li>
              <li>
                <a class="supportme" href="supportme">Support Me</a>
              </li>
              <li>
                <a class="contactme" href="/contact">Contact Me</a>
              </li>
              <a href="https://github.com/frscodes/frscodes.github.io" target="_blank">
                <p class="version">V4</p>
              </a>
          </ul>
        </div>
    </section>
  </footer>
</template>

<script>

export default {
  name:'Footer',
  mounted() {
      window.addEventListener("scroll", () => {
      let scroleable = document.documentElement.scrollHeight - window.innerHeight;
      let scrolled = window.scrollY;
      if(scrolled === scroleable){
        this.$refs.footer.classList.remove("op0");
      }
      else{
        this.$refs.footer.classList.add("op0");
      }
    })
  },
}
</script>