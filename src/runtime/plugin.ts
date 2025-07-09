import { convexVue } from 'convex-vue'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const options = useRuntimeConfig().public.convex
  nuxtApp.vueApp.use(convexVue, options)
})
