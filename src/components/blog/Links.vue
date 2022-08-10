<template>
    <a class="a-srv" :href="link">
        <div class="link-srv">
          <h1>{{title}}</h1>
          <p>{{info}}</p>
          <i class="fas fa-external-link-alt" aria-hidden="true"></i>
        </div>
    </a>
</template>

<script>
export default {
  name: "Links",
  props:{
    title:String,
    info:String,
    link:String,
  }
}
</script>