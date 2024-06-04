<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator color="#C9ADA7" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}


* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  /* text-align: justify; */
}

html {
  scroll-behavior: smooth;
}

input:focus {
  outline: none;
}

/* SCROLLBAR */
::-webkit-scrollbar {
  height:8px;
  width: 6px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background-color: #C9ADA7;
  border-radius: 2px;
}

/* For mozila */
/* @-moz-document url-prefix() {} */

/**********************/

a {
  user-select: none;
}
img{
  pointer-events: none;
}
.max{
  max-width: 1920px;
}
body{
  background-color: #22223B;
}
</style>