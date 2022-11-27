<template>
  <div>
    <h1 class="font-bold text-color02 text-3xl">My github</h1>
    <div class="mt-3 my-0 mx-auto sm:flex sm:flex-wrap sm:justify-between lg:max-w-2xl">
      <a v-for="r in repos" :key="r" target="_blank" class="inline-block w-full py-2 rounded-sm transition-all lg:w-80 hover:bg-color02" :href="r.html_url" aria-label="link">
        <article class="flex">
          <div class="flex justify-center items-center w-16">
            <i class="text-lg text-color02 fi fi-brands-github h-5"></i>
          </div>
          <div>
            <h2 class="text-color05 text-sm">{{"/" + r.full_name}}</h2>
          </div>
        </article>
      </a>
    </div>
  </div>
</template>

<script setup>
  const {data: repos} = await useFetch('https://api.github.com/users/frs99/repos')
</script>
