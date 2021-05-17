export default {
  target: 'static',
  head: {
    htmlAttrs: {
      lang: "en",
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { property: "og:site_name", content: "Redfern Dev" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://fukuo.design",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Faiz Ichsan Jaya | Portfolio Site",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "A portfolio website for showcasing my works and designs.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/social.png",
      },
      { property: "og:image:width", content: "740" },
      { property: "og:image:height", content: "300" },

      { name: "twitter:site", content: "@_fukuo" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://fukuo.design",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Faiz Ichsan Jaya | Portfolio Site",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "A portfolio website for showcasing my works and designs.",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "/social.png",
      },
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
      {
        rel: 'preconnect',
        href:
          'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,400;0,700;1,400&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/emoji.css/dist/emoji.min.css'
      },
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
  css: ["~/assets/scss/style.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/aos.js',
      ssr: false
    },
    '~/plugins/vue-sparkles.js',
    '~/plugins/datocms'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    'vue-scrollto/nuxt'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  }
}
