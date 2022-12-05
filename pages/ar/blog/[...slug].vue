<template>
  <section class="py-20 sm:py-0 px-10 sm:container sm:my-0 sm:mx-auto md:max-w-3xl 2xl:max-w-5xl text-white">
    
    <div class="big-title mb-10 sm:mb-0 flex justify-center items-center">
      <h1 class="inline-block text-5xl sm:text-6xl text-color04 text-right w-72 rounded-md font-bold">{{data.title}}</h1>
    </div>

    <ul>
      <h1 class="font-bold text-2xl text-color01 rounded-md inline-block p-1 bg-color04">الفهرسة</h1>
      <li class="list-decimal mr-6 text-sm my-2" v-for="toc in data.body.toc.links" :key="toc" >
        <NuxtLink :to="`#${toc.id}`">
          {{ toc.text }}
        </NuxtLink>
      </li>
    </ul>

    <!-- the content  -->
    <ContentDoc class="article-blog mt-8 text-justify" />
    
    <div class="mt-5">
      <NuxtLink class="float-right inline-block bg-color04 text-color01 font-medium px-6 py-2 rounded-md mt-3 transition-all hover:mr-1" to="/ar/blog/" aria-label="link">/رجوع</NuxtLink>
      <NuxtLink class="float-left inline-block bg-color04 text-color01 font-medium px-6 py-2 rounded-md mt-3 transition-all hover:ml-1" to="/ar/portfolio/" aria-label="link">مشاركة</NuxtLink>
    </div>
  </section>
</template>

<script setup>
  definePageMeta({
    layout: 'arabic'
  })

  //for add links - toc     <!-- {{data.body.toc.links}} -->
  // assets: https://content.nuxtjs.org/guide/displaying/querying/
const { path } = useRoute()

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})
</script>

<style scoped>
@media (min-width:650px){
  .big-title {
      height: calc(100vh - 80px);
    }
}
</style>