<template>
  <div class="text-color05 w-4/5 sm:w-3/5">
    <h1>Fares <br> Djefaflia</h1>
    <br>

    <p>Hey, my name is <strong>Fares</strong> and im {{year - 1999}} year, I love logic and analysis.
    I&#39;m also a <strong>network technician</strong> & <strong>website developer</strong>, and interested in UX/UI design, and I love open source projects.</p>
    <br>

    <p>I worked for two years at Algeria Telecom, and the first website I programmed was about {{year - 2019}} years ago.</p>
    <br>

    <p>I am good at using a computer and the Internet in several things, mostly in programming and design, and I am good at basic programming languages for a front-end web developer, and I am good at using the <strong><a href="https://vuejs.org/" target="_blank" title="@Vue.js">@Vue.js</a></strong> and <strong><a href="https://nuxt.com/" target="_blank" title="@Nuxt.js">@Nuxt.js</a></strong> and <strong><a href="https://tailwindcss.com/" target="_blank" title="Tailwind CSS">Tailwind CSS</a></strong> frameworks.</p>
    <br>

    <p>I am currently working on several projects, including the <strong><a href="https://github.com/esaturn" target="_blank" title="@ESaturn">@ESaturn</a></strong>, which supports and assists web developers, and I am working on the &quot; Hadinat <strong><a href="https://github.com/gheyth" target="_blank" title="@Gheyth">@Gheyth</a></strong> &quot; platform and its religious-spiritual content, and many other projects, that you can find in <strong><NuxtLink to="/portfolio/" title="my portfolio">my portfolio</NuxtLink></strong>.</p>
    <br>

    <p>In the future, I plan to learn the back-end development of websites and enter the world of <strong><a href="https://flutter.dev/" target="_blank" title="Flutter">Flutter</a></strong></p>
    <br>

    <p>For my resume or to know more about me, you can <strong><a target="_blank" href="mailto:djefaflia.fares@gmail.com" title="contact me">Email me</a></strong></p>
    <p>Find me on <strong><a href="https://twitter.com/_frs99" target="_blank" title="Twitter">Twitter</a></strong>, <strong><a href="https://github.com/frs99" target="_blank" title="Github">Github</a></strong> or <strong><a href="https://www.facebook.com/frs99.me" target="_blank" title="Facebook">Facebook</a></strong>.</p>
    
    <br>
    <hr class="w-5 mb-5">
    <p class="font-light text-sm"><a target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> FARES {{year}}</p>
    <div class="mt-5">
      <NuxtLink class="float-left inline-block bg-color04 text-color01 font-medium px-6 py-2 rounded-md mt-3 transition-all hover:ml-1" to="/">cd..</NuxtLink>
      <NuxtLink class="float-right inline-block bg-color04 text-color01 font-medium px-6 py-2 rounded-md mt-3 transition-all hover:mr-1" to="/portfolio/">/Portfolio</NuxtLink>
    </div>
  </div>
</template>

<script setup>
  let d = new Date
  let year = d.getFullYear()
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