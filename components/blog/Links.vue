<template>
    <NuxtLink class="a-srv" :to="link">
        <div class="link-srv">
          <h1>{{title}}</h1>
          <p>{{info}}</p>
          <i class="fas fa-external-link-alt" aria-hidden="true"></i>
        </div>
    </NuxtLink>
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