import { defineNuxtModule, addPlugin, createResolver, updateRuntimeConfig } from '@nuxt/kit'

export * from 'convex-vue'

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

    updateRuntimeConfig({
      public: {
        convex: {
          url: options.url,
          // auth: options.getAuth,
        },
      },
    })
  },
})
