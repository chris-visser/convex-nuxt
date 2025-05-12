import { convexVue } from 'convex-vue'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const { url } = useRuntimeConfig().public.convex
  nuxtApp.vueApp.use(convexVue, {
    url,
  })
})
