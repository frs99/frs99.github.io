<template>
  <div class="box-skills d-f-c to-center">
    <BoxSkills skill="HTML5" img="html-5.png" />
    <BoxSkills skill="CSS3" img="css-3.png" />
    <BoxSkills skill="JavaScript" img="js.png" />
    <BoxSkills skill="Linux" img="linux.png" />
    <BoxSkills skill="Git" img="git.png" />
    <BoxSkills skill="Vue.js" img="vue.svg" />
    <BoxSkills skill="Nuxts" img="nuxts.png" />
    <BoxSkills skill="Adobe Xd" img="xd.png" />
    <BoxSkills skill="Illustrator" img="illustrator.png" />
    <BoxSkills skill="Photoshop" img="photoshop.png" />
    
    <div class="skills d-f-c">
      <div class="img-skills-wait d-f-c to-center"><img src="~assets/img/icons/time-left.png"></div>
    </div>
  </div>
</template>

<script>
import BoxSkills from '../blog/Box-skills.vue';
export default {
  components:{
    BoxSkills,
  }
}
</script>