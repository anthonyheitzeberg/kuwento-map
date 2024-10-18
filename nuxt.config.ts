// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/lara'

export default defineNuxtConfig({
  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
  ],
  devtools: { enabled: true },
  css: [
    'primeicons/primeicons.css',
  ],
  compatibilityDate: '2024-04-03',
  primevue: {
    options: {
      ripple: true,
      inputVariant: 'outlined',
      theme: {
        preset: Aura,
      },
    },
  },
})
