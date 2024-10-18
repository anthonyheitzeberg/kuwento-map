// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/lara';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: [
    'primeicons/primeicons.css'
  ],
  devtools: { enabled: true },
  modules: ['@primevue/nuxt-module', '@nuxtjs/tailwindcss'],
  primevue: {
    options: {
      ripple: true,
      inputVariant: 'outlined',
      theme: {
        preset: Aura,
      },
    },
  }
})