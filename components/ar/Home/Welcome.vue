<template>
  <div class="text-color05 px-6 sm:relative sm:bottom-10">
    <p class="text-left font-light text-sm">– آيات عشوائية من القرأن الكريم </p>
    <h1 class="font-black text-2xl lg:text-4xl 2xl:text-5xl mt-3">{{aya.one}}</h1>
    <h1 class="font-black text-3xl lg:text-5xl 2xl:text-6xl lg:mt-5">{{aya.two}}</h1>
    <NuxtLink class="inline-block bg-color04 text-color01 font-medium px-6 py-2 rounded-md mt-5 transition-all float-left hover:ml-1" to="/ar/about/" aria-label="link">/حول</NuxtLink>
  </div>
  <!-- <h1>{{ AyatContent[0]}}</h1> -->
</template>

<script setup>
  const { data } = await useAsyncData(() => queryContent('/ar/quran').find())
  const AyatContent = data._rawValue[0].body
  const aya = AyatContent[Math.floor(Math.random() * AyatContent.length)];

console.log(aya);
</script>

<!-- <script>
export default {
  data() {
    return {
      aya: this
    }
  },
  mounted() {
    console.log(this)
  },
}
</script> -->