import { defineNuxtModule, addPlugin, createResolver, updateRuntimeConfig, addImports } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
  url: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'convex-nuxt',
    configKey: 'convex',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options) {
    const resolver = createResolver(import.meta.url)

    addPlugin(resolver.resolve('./runtime/plugin'))

    addImports([
      { name: 'useConvexClient', from: 'convex-vue' },
      { name: 'useConvexQuery', from: 'convex-vue' },
      { name: 'useConvexMutation', from: 'convex-vue' },
      { name: 'useConvexHttpQuery', from: 'convex-vue' },
    ])

    updateRuntimeConfig({
      public: {
        convex: {
          url: options.url,
        },
      },
    })
  },
})
