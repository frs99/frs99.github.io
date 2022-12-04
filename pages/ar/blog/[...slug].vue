<template>
  <section class="py-20 px-10 sm:container sm:my-0 sm:mx-auto md:max-w-3xl 2xl:max-w-5xl text-white">
    <ContentDoc class="article-blog" />
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
</script>
