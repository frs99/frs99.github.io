<template>
  <section class="py-20 px-10 sm:container sm:my-0 sm:mx-auto md:max-w-3xl">
    <ContentList path="/ar/blog" v-slot="{ list }">
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
    title: "Blog"
  })
  definePageMeta({
    layout: "arabic",
  })
</script>