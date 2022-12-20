<template>
  <div class="mt-4">
    <h1 class="font-bold text-color03 text-3xl">مختبري</h1>
    <p class="mr-2 font-light text-color03 text-sm mt-2">تجارب واختبارات من ESaturn</p>
    <div class="mt-3 my-0 mx-auto sm:flex sm:flex-wrap sm:justify-between lg:max-w-2xl">
      <a v-for="item in data[1].body" :key="item" :href="item.link" target="_blank"
        class="inline-block w-full px-3 py-2 rounded-sm transition-all lg:w-80 hover:bg-color02" aria-label="link">
        <article class="flex items-center">
          <div class="flex justify-center items-center w-11">
            <i class="fi fi-brands-unity text-color03 text-4xl h-9"></i>
          </div>
          <div class="mr-3">
            <h2 class="text-color05 font-medium">{{ item.nameAr }}</h2>
            <p class="text-color05 text-xs font-light">{{ item.descriptionAr }}</p>
            <div class="flex items-center">
              <p class="text-xs text-color03">{{ item.linkG }}</p>
              <i class="text-xs text-color03 fi fi-brands-github h-3 mr-1"></i>
            </div>
          </div>
        </article>
      </a>
    </div>
  </div>
</template>

<script setup>
const { data } = await useAsyncData(() => queryContent('/api/portfolio').find())
</script>
