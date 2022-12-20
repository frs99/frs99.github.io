<template>
  <section class="py-20 px-10 sm:container sm:my-0 sm:mx-auto md:max-w-3xl">
    <h1 class="font-bold text-color03 text-3xl">المدونة</h1>
    <p class="font-light text-color03 text-sm mt-2">في هذه المساحة اضع ما اجربه او ما اتعلمه واريد مشاركته او الاحتفاظ به.</p>
    <p class="font-light text-color05 bg-color02 p-3 rounded-lg text-sm mt-2">لا يتم اضافة اعلانات او روابط مشبوهة مختصرة هنا.</p>

    <ContentList path="/blog" v-slot="{ list }">
      <ul>
        <li class="text-white" v-for="article in list" :key="article._path">
          <NuxtLink class="flex border border-color02 rounded-lg p-3 transition-all mt-3 hover:bg-color02" :to=article._path >
            <i class="fi fi-sr-duplicate text-color03 text-2xl"></i>
            <div class="mr-2">
              <h2 class="font-bold">{{ article.title }}</h2>
              <p class="font-light text-sm">{{ article.description }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </ContentList>
  </section>
</template>

<script setup>
  useHead({
    title: "المدونة"
  })
  definePageMeta({
    layout: "arabic",
  })
const { data } = await useAsyncData(() => queryContent('/ar/blog/').find())
</script>