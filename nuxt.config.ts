// https://nuxt.com/docs/api/configuration/nuxt-config
const BASE_URL = 'http://blog-api.weifengwa.top' // 'http://localhost:8080' //'http://blog-api.weifengwa.top'
export default defineNuxtConfig({
  app: {
    // layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    head: {
      title: '微风哇',
    },
  },
  runtimeConfig: {
    BASE_URL,
    TEST: process.env.NUXT_TEST || 'hhhh',
  },
  typescript: { shim: false },
  devtools: { enabled: false },
  modules: [
    '@element-plus/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  elementPlus: {},
  nitro: {
    // devProxy: {
    //   '/api': {
    //     target: 'http://localhost:8080',
    //   },
    // },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['@/assets/styles/main.css'],
  hooks: {
    'pages:extend'(routes) {
      routes.sort((a, b) => {
        if (a.name === 'index') {
          return -1
        }
        return 0
      })
    },
  },
})
