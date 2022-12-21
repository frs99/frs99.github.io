<template>
  <section class="py-20 px-10 sm:container sm:my-0 sm:mx-auto md:max-w-3xl">
    <h1 class="font-bold text-color03 text-3xl">المدونة الإسلامية</h1>
    <p class="font-light text-color03 text-sm mt-2">في هذه المساحة اشارك ملخصاتي في ما تعلمه في العلوم الشرعية.</p>
    <p class="font-light text-color05 bg-color02 p-3 rounded-lg text-sm mt-2">لا يتم اضافة اعلانات او روابط مشبوهة مختصرة هنا.</p>

    <p class="font-light text-color03 text-sm mt-2">كذلك!</p>

    <NuxtLink class="flex bg-color02 border border-color02  rounded-lg p-3 transition-all mt-2 items-center hover:border hover:border-color04" to=/blog/tech/>
      <i class="fi fi-sr-mouse text-color03 text-2xl h-6"></i>
      <div class="mr-2">
        <h2 class="font-bold text-color05">مدونة التقنية</h2>
        <p class="font-light text-sm text-color05">تصميم، برمجة، كل شيء</p>
      </div>
    </NuxtLink>

    <hr class="mt-3 w-1/2 border-t-color02">

    <ContentList path="/blog/islam" v-slot="{ list }">
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
  </section>
</template>

<script setup>
  useHead({
    title: "المدونة الإسلامية"
  })
  definePageMeta({
    layout: "arabic",
  })
</script>