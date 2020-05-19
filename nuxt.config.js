export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-32x32.png'
      },
      { rel: 'stylesheet', href: 'https://unpkg.com/aos@next/dist/aos.css' },
      { rel: 'stylesheet', href: 'https://emoji-css.afeld.me/emoji.css' },
      { rel: 'manifest', href: '/site.webmanifest' }
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/smoothScroll.js',
      mode: 'client'
      // ssr: false
    },
    // {
    //   src: '~/plugins/locomotive.js',
    //   ssr: false
    // },
    {
      src: '~/plugins/aos.js',
      // mode: 'client'
      ssr: false
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', 'vue-scrollto/nuxt'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
