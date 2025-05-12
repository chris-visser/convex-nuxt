import { defineNuxtModule, addPlugin, createResolver, updateRuntimeConfig } from '@nuxt/kit'
import defu from 'defu'

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

    // nuxt.options.runtimeConfig.public.convex = defu(nuxt.options.runtimeConfig.public.convex, {
    //   url: options.url,
    // })

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
