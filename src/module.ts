import { defineNuxtModule, addPlugin, createResolver, updateRuntimeConfig, addImports } from '@nuxt/kit'
import type { ConvexVueOptions } from 'convex-vue'

export default defineNuxtModule<ConvexVueOptions>({
  meta: {
    name: 'convex-nuxt',
    configKey: 'convex',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options) {
    const resolver = createResolver(import.meta.url)

    addImports([
      { name: 'useConvexClient', from: 'convex-vue' },
      { name: 'useConvexQuery', from: 'convex-vue' },
      { name: 'useConvexMutation', from: 'convex-vue' },
      { name: 'useConvexHttpQuery', from: 'convex-vue' },
    ])

    updateRuntimeConfig({
      public: {
        convex: options,
      },
    })

    addPlugin(resolver.resolve('./runtime/plugin'))
  },
})
