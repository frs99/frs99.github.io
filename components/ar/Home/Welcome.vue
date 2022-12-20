<template>
  <div class="text-color05 px-6 sm:relative sm:bottom-10">
    <p class="text-left font-light text-sm mb-3">– آيات عشوائية من القرأن الكريم </p>
    <h1 class="font-black text-2xl lg:text-4xl 2xl:text-5xl mt-3">{{aya.one}}</h1>
    <h1 class="font-black text-3xl lg:text-5xl 2xl:text-6xl lg:mt-5">{{aya.two}}</h1>
    <NuxtLink class="inline-block bg-color04 text-color01 font-medium px-6 py-2 rounded-md mt-5 transition-all float-left hover:ml-1" to="/about/" aria-label="link">/حول</NuxtLink>
  </div>
</template>

<script setup>
  const { data } = await useAsyncData(() => queryContent('/api/dataquran').find())
  const AyatContent = data._rawValue[0].body
  const aya = AyatContent[Math.floor(Math.random() * AyatContent.length)];

console.log(`The number of verses: ${AyatContent.length} \nAnd for the source: https://github.com/frs99/frs99.github.io/blob/main/content/ar/quran/ayat.json`);
</script>