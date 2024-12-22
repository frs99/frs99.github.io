<template>
  <section class="pb-20 px-10 sm:container sm:my-0 sm:mx-auto md:max-w-3xl 2xl:max-w-5xl text-white">
    
    <div class="big-title mb-10 sm:mb-0 flex justify-center items-center">
      <h1 class="inline-block text-6xl sm:text-7xl text-color04 text-right w-96 rounded-md font-bold">{{data.title}}</h1>
    </div>

    <ul>
      <h1 class="font-bold text-2xl text-color01 rounded-md inline-block p-1 bg-color04">الفهرسة</h1>
      <li class="list-decimal mr-6 text-sm my-2" v-for="toc in data.body.toc.links" :key="toc" >
        <NuxtLink class="hover:mr-2 transition-all" :to="`#${toc.id}`">
          {{ toc.text }}
        </NuxtLink>
      </li>
    </ul>

    <!-- the content  -->
    <ContentDoc class="article-blog mt-8 text-justify prose-them01 prose-lg" />
    
    <div class="mt-5">
      <NuxtLink class="float-right inline-block bg-color04 text-color01 font-medium px-6 py-2 rounded-md mt-3 transition-all hover:mr-1" to="/blog/tech/" aria-label="link">/رجوع</NuxtLink>
      <NuxtLink target="_blank" class="float-left inline-block bg-color04 text-color01 font-medium px-6 py-2 rounded-md mt-3 transition-all hover:ml-1" to="mailto:frs99.me@gmail.com" aria-label="link">رأيك</NuxtLink>
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

<style>
.big-title {
    height: calc(100vh - 80px);
  }
  .article-blog ul li{
    list-style-type: disc;
    margin-right: 22px;
  }
  .article-blog ol li{
    list-style: decimal;
    margin-right: 22px;
  }
  .article-blog img{
    margin: 12px auto;
    padding:6px;
    border-radius: 6px;
    border: 1px solid #4A4E69;
    background-color: #4A4E69;
    
  }

  .article-blog p a, .article-blog li a {
    text-decoration: revert;
    padding: 0 2px 0 2px;
    transition: all 0.5s;
    border-radius: 3px;
    font-weight: bold;
  }
  .article-blog p a:hover, .article-blog li a:hover {
    background-color: #C9ADA7;
    color: #22223B;
  }
  .article-blog blockquote{
    padding:4px;
    padding-right: 8px;
    background-color: #4A4E69;
    border-radius: 8px;
    font-size: 14px;
  }
  .article-blog code{
    margin: 10px 0;
    overflow: auto;
    direction: ltr !important;
    background-color: #101018;
    color: #C9ADA7;
    border-radius: 3px;
    padding: 2px 6px;
  }
  .article-blog pre{
    margin: 10px 0;
    overflow: auto;
    direction: ltr !important;
    background-color: #101018;
    color: #C9ADA7;
    border-radius: 6px;
  }
/* @media (min-width:650px){
  .big-title {
      height: calc(100vh - 80px);
    }
} */
</style>