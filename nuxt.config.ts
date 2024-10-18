// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/lara'

export default defineNuxtConfig({
  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@formkit/auto-animate',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate',
    '@nuxtjs/color-mode',
    '@nuxt/devtools',
    '@nuxt/image',
  ],
  devtools: { enabled: true },
  css: [
    'primeicons/primeicons.css',
  ],

  colorMode: {
    preference: 'light',
  },
  alias: {
    pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
  },
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
