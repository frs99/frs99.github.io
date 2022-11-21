<template>
  <main>
    <ContentList path="/ar/blog" v-slot="{ list }">
      <ul>
        <li v-for="article in list" :key="article._path">
          <NuxtLink :to=article._path >
            <h2>{{ article.title }}</h2>
          </NuxtLink>
        </li>
      </ul>
    </ContentList>
  </main>
</template>

<script setup>

  useHead({
    title: "Blog"
  })
  definePageMeta({
    layout: "english",
  })
</script>