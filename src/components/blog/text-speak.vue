<template>
  <section>
    <div class="title">
        <h1>{{title}}</h1>
        <div></div>
    </div>
    <div class="box-speak m-c d-f-c">
      <div class="img-profile">
        <img src="img/profile.jpg">
      </div>
      <p class="speak">
        {{message}}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name:'TextSpeak',
  props:{
    title:String,
    message:String
  }
}
</script>