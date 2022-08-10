<template>
  <div class="skills d-f-c">
    <div class="img-skills d-f-c to-center"><img :src="img"></div>
    <p>{{skill}}</p>
  </div>
</template>

<script>
export default {
  name:'BoxSkills',
  props:{
    img:String,
    skill:String
  }
}
</script>