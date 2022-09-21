export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'FrsCodes',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },

      { name:'theme-color', content:'#202020' },
      { name: 'msapplication-navbutton-color', content: '#202020' },
      { name: 'apple-mobile-web-app-status-bar-style', content: '#202020' },

      // Primary Meta Tags
      { name: 'description', content: 'Frontend website developer' },
      //Open Graph / Facebook
      { property: 'og:type', content: 'website' },
      { property:'og:url', content:'https://frscodes.github.io/'},
      { property:'og:title', content:'FrsCodes'},
      { property:'og:description', content:'Frontend website developer'},
      { property:'og:image', content:'assets/img/meta.jpg'},
      //Twitter
      { property:'twitter:card', content:'summary_large_image'},
      { property:'twitter:url', content:'https://frscodes.github.io/'},
      { property:'twitter:title', content:'FrsCodes'},
      { property:'twitter:description', content:'Frontend website developer'},
      { property:'twitter:image', content:'assets/img/meta.jpg'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Indie+Flower&family=Nunito:wght@200;300;400;600;700;800;900&display=swap' }
    ],
    script: [
      { src: '/assets/js/main.js', async: true, defer: true },
      { src: '/assets/js/icon.js', async: true, defer: true },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.css',
    '@/assets/css/navbar.css',
    '@/assets/css/footer.css',
    '@/assets/css/about.css',
    '@/assets/css/services.css',
    '@/assets/css/BusinessPolicy.css',
    '@/assets/css/contact.css',
    '@/assets/css/error.css',
    '@/assets/css/icon-scroll.css',
    '@/assets/css/media.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: '/nuxt/'
  }
}
