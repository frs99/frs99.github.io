<template>
  <div class="text-color05 w-4/5 sm:w-3/5">

    <h1>Fares<br>Djefaflia</h1>

    <br>

    <p>Hello, my name is <strong>Fares</strong>. I am {{ age }} years old and I love logic and analysis.</p>

    <p>I am a <strong>network technician</strong> and a <strong>web developer</strong>, and <strong> UX/UI designer
      </strong>
      design.
      <br>
      I enjoy learning and contributing to open-source projects.
    </p>

    <!-- <p>I am also very interested in the sciences of Sharia and its branches.</p> -->

    <br>

    <p>I worked for two years at "<strong><a target="_blank" href="https://www.algerietelecom.dz/ar">Algerie
          Telecom</a></strong>," and the first website I programmed was in 2019.</p>

    <br>

    <p>I am proficient in using computers and the internet for various purposes, mostly in programming and design. I am
      skilled in core programming languages for front-end web development, and I am proficient in using the <strong><a
          target="_blank" href="https://vuejs.org/">Vue.js</a></strong>, <strong><a target="_blank"
          href="https://nuxt.com/">Nuxt.js</a></strong>, and <strong><a target="_blank"
          href="https://tailwindcss.com/">TailwindCSS</a></strong> frameworks.</p>

    <br>

    <p>I also have proficiency in using various Adobe programs such as <strong>Figma</strong> and
      <strong>Illustrator</strong>.
    </p>

    <br>
    <!-- 
    <p>Currently, I am working on several projects, including <strong><a target="_blank"
          href="https://github.com/himzml">Etmami</a></strong>, a special project that supports and assists digital
      activities. I am also working on <strong><a target="_blank" href="https://github.com/gheyth">@Gheyth</a></strong>,
      which provides content for the service of Islam, along with other numerous projects that you can find on my
      <strong><a target="_blank" href="/portfolio/">portfolio page</a></strong>.</p>

    <br> -->

    <p>Currently, I am learning backend development using <strong><a target="_blank"
          href="https://nodejs.org/">Node.js</a></strong> and plan to explore <strong><a target="_blank"
          href="https://flutter.dev/">Flutter</a></strong>.</p>
    <br>

    <br>

    <p>If you would like to view my resume or learn more about me, you can send an <strong><a target="_blank"
          href="mailto:frs99.me@gmail.com">email</a></strong>.</p>

    <br>

    <p>You can find me on <strong><a target="_blank" href="https://twitter.com/_frs99">Twitter</a></strong>, <strong><a
          target="_blank" href="https://github.com/frs99">GitHub</a></strong>, or <strong><a target="_blank"
          href="https://t.me/faresdjefaflia">Telegram</a></strong>.</p>

    <br>

    <p class="font-light text-sm text-left"><a target="_blank"
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> FARES {{ year }}</p>

    <div class="mt-5">
      <NuxtLink
        class="float-left inline-block bg-color04 text-color01 font-medium px-6 py-2 rounded-md mt-3 transition-all hover:ml-1"
        to="/en/" aria-label="link">/Back</NuxtLink>
      <NuxtLink
        class="float-right inline-block bg-color04 text-color01 font-medium px-6 py-2 rounded-md mt-3 transition-all hover:mr-1"
        to="/en/portfolio/" aria-label="link">/Portfolio</NuxtLink>
    </div>

  </div>
</template>

<script setup>
  let d = new Date
  let year = d.getFullYear()
  let age = year - 1999
</script>
<style scoped>
  h1{
    font-size: 38px;
    font-weight: bold;
  }
  strong a{
    text-decoration: revert;
    padding: 0 2px 0 2px;
    transition: all 0.5s;
    border-radius: 3px;
    
  } strong a:hover{background-color: #C9ADA7; color: #22223B;}
</style>