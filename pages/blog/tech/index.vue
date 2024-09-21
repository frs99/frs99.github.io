<template>
  <section class="py-20 px-10 sm:container sm:my-0 sm:mx-auto md:max-w-3xl">
    <h1 class="font-bold text-color03 text-3xl">المدونة التقنية</h1>
    <p class="font-light text-color03 text-sm mt-2">في هذه المساحة اشارك خططي وافكاري و ما تعلمته في عالم التقنية.</p>
    <p class="font-light text-color05 bg-color02 p-3 rounded-lg text-sm mt-2">لا يتم اضافة اعلانات او روابط مشبوهة مختصرة هنا.</p>

    <p class="font-light text-color03 text-sm mt-2">كذلك!</p>

    <NuxtLink class="flex bg-color02 border border-color02  rounded-lg p-3 transition-all mt-2 items-center hover:border hover:border-color04" to=/blog/islam/>
      <i class="fi fi-sr-moon-stars text-color03 text-2xl h-6"></i>
      <div class="mr-2">
        <h2 class="font-bold text-color05">مدونة العلوم الشرعية</h2>
        <p class="font-light text-sm text-color05">عقيدة، فقه، قرآن</p>
      </div>
    </NuxtLink>

    <hr class="mt-3 w-1/2 border-t-color02">

    <ContentList path="/blog/tech" v-slot="{ list }">
      <ul>
        <li class="text-white" v-for="article in list" :key="article._path">
          <NuxtLink class="flex border border-color02 rounded-lg p-3 transition-all mt-3 hover:bg-color02" :to=article._path >
            <i class="fi fi-sr-duplicate text-color03 text-2xl"></i>
            <div class="mr-2">
              <h2 class="font-bold text-color05">{{ article.title }}</h2>
              <p class="font-light text-sm text-color04">{{ article.description }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </ContentList>
    <div class="mt-5">
      <NuxtLink class="float-right inline-block bg-color04 text-color01 font-medium px-6 py-2 rounded-md mt-3 transition-all hover:mr-1" to="/portfolio/" aria-label="link">/رجوع</NuxtLink>
      <NuxtLink class="float-left inline-block bg-color04 text-color01 font-medium px-6 py-2 rounded-md mt-3 transition-all hover:ml-1" to="/uses/" aria-label="link">/إستخداماتي</NuxtLink>
    </div>
  </section>
</template>

<script setup>
  useHead({
    title: "المدونة التقنية"
  })
  definePageMeta({
    layout: "arabic",
  })
const { data } = await useAsyncData(() => queryContent('/ar/blog/').find())
</script>