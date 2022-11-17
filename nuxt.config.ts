// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head :{
      meta: [
        // {meta name="viewport" content="width=device-width, initial-scale=1"}
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        // {script src="https://myawesome-lib.js"}{/script}
        // { src: 'https://awesome-lib.js' }
      ],
      link: [
        // {link rel="stylesheet" href="https://myawesome-lib.css"}
        { rel:"stylesheet", href:"https://cdn.jsdelivr.net/gh/esaturn/flaticon-uicons@V2.1.1/uicons.css" },
        { rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" },
        { rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap" },
      ],
    },
  },
  css: [
    '@/assets/css/index.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
