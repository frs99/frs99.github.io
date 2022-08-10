<template>
  <div class="box-skills d-f-c to-center">
    <BoxSkills skill="HTML5" img="img/icons/html-5.png" />
    <BoxSkills skill="CSS3" img="img/icons/css-3.png" />
    <BoxSkills skill="JavaScript" img="img/icons/js.png" />
    <BoxSkills skill="Linux" img="img/icons/linux.png" />
    <BoxSkills skill="Git" img="img/icons/git.png" />
    <BoxSkills skill="Vue.js" img="img/icons/vue.svg" />
    <BoxSkills skill="Nuxt.Js" img="img/icons/nuxts.png" />
    <BoxSkills skill="Adobe Xd" img="img/icons/xd.png" />
    <BoxSkills skill="Illustrator" img="img/icons/illustrator.png" />
    <BoxSkills skill="Photoshop" img="img/icons/photoshop.png" />

    <div class="skills d-f-c">
        <div class="img-skills-wait d-f-c to-center"><img src="img/icons/time-left.png"></div>
    </div>
  </div>
</template>

<script>
import BoxSkills from '../blog/Box-skills.vue';
export default {
  name:'AllSkilles',
  components:{
    BoxSkills,
  }
}
</script>