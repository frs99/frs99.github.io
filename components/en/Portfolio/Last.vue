<template>
  <div>
    <h1 class="font-bold text-color02 text-3xl">Last</h1>
    <p class="ml-2 font-light text-color02 text-sm mt-2">What I am working on now and continuing to do</p>

    <div class="mt-3 my-0 mx-auto sm:flex sm:flex-wrap sm:justify-between lg:max-w-2xl">
      <NuxtLink v-for="item in portfolio" :key="item" :to="item.link" class="inline-block w-full px-3 py-2 rounded-sm transition-all lg:w-80 hover:bg-color02" aria-label="link">
        <article class="flex">
          <div class="flex justify-center items-center">
            <img class="w-12" :src="item.img">
          </div>
          <div class="ml-3">
            <h2 class="text-color05 font-medium">{{item.name}}</h2>
            <p class="text-color05 text-xs font-light">{{item.description}}</p>
            <div class="flex items-center">
              <i class="text-xs text-color03 fi fi-brands-github h-3 mr-1"></i>
              <p class="text-xs text-color03">{{item.linkG}}</p>
            </div>
          </div>
        </article>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
  const {data: portfolio} = await useFetch(' /portfolioAssets/api/last.json')
</script>
