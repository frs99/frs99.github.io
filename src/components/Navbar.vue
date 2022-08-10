<template>
  <!-- START HEADER -->
  <header>
    <div class="bar">
      <div class="navbar">
          <div  ref="logo" v-on:click="logo()" class="logo link d-f-c m-c">
            <img src="img/first-logo.png">
          </div>
          <div class="resp-nav" ref="respNav" v-on:click="navbar">
            <i class="fas fa-bars" aria-hidden="true"></i>
            <i class="fas fa-times d-n" aria-hidden="true"></i>
          </div>
          <div class="nav-navbar d-f-c m-c to-space-between" ref="navnavbar">
            <nav>
                <ul class="ul-navbar">
                  <li class="li-navbar">
                    <router-link to="/" class="a-navbar" v-on:click="closeNavbar(); showFooter();">Home</router-link>
                  </li>

                  <li class="li-navbar">
                    <router-link to="/aboutme" class="a-navbar" v-on:click="closeNavbar(); hideFooter()">About me</router-link>
                  </li>

                  <li class="li-navbar">
                    <router-link to="/myservies" class="a-navbar" v-on:click="closeNavbar(); hideFooter()">My Services</router-link>
                  </li>

                  <li class="li-navbar">
                    <a class="a-navbar" href="https://frscodes.github.io/portfolio/">My portfolio</a>
                  </li>
                </ul>
            </nav>
            <nav>
              <router-link to="/contact" class="btn-a">contact</router-link>
            </nav>
          </div>
      </div>
    </div>
  </header>
  <router-view/>
</template>

<script>

export default {
  name:'Navbar',
  methods: {
    //FOR ADD LINK TO LOGO
    logo: function(){
      window.location.href = "/";
    },
    //FOR NAVBAR WITH RESPONSIVE
    navbar: function(){
      //nav list
      let listNav = this.$refs.navnavbar;
      //icons
      let respNav = this.$refs.respNav;
      listNav.classList.toggle("nav-open");
      respNav.children[0].classList.toggle("d-n");
      respNav.children[1].classList.toggle("d-n");
    },
    //CLOSE NAVBAR WITH CLICK
    closeNavbar: function(){
      //nav list
      let listNav = this.$refs.navnavbar;
      //icons
      let respNav = this.$refs.respNav;
      listNav.classList.toggle("nav-open");
      respNav.children[0].classList.toggle("d-n");
      respNav.children[1].classList.toggle("d-n");
    },

    //FOR HIDE AND SHOW FOOTER
    showFooter: function(){
      document.getElementsByTagName("footer")[0].classList.remove('op0');
    },
    hideFooter: function(){
      document.getElementsByTagName("footer")[0].classList.add('op0');
    }
  },
}
</script>