<template>
  <a class="a-srv" :href=link>
    <div>
        <div class="link-srv List-box-srv m-c">
          <h1>{{title}}</h1>
          <p>{{info}}</p>
          <i class="fas fa-external-link-alt" aria-hidden="true"></i>
        </div>
    </div>
  </a>
</template>

<script>
export default {
  name:'Lists',
  props:{
    title:String,
    info:String,
    link:String
  }
}
</script>