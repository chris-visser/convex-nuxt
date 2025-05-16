<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: convex-nuxt
- Description: My new Nuxt module
-->

# Convex Nuxt Module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Convex integration for Nuxt 3. Uses [convex-vue](https://github.com/chris-visser/convex-vue) under the hood.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)

## Features

- Supports Convex realtime queries
- SSR and SSG support via suspense

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add convex-nuxt
```

Add the Convex URL to your nuxt.config.ts:

```ts
export default defineNuxtConfig({
  modules: ['convex-nuxt'],
  convex: {
    url: 'https://your-convex-url.convex.dev', // Ideally from an env variable
  },
})
```

That's it! You can now use Convex Nuxt in your Nuxt app ✨

## Authentication

### Clerk

Create a plugin in the `plugins` directory, e.g. `plugins/convexClerk.ts` and add the following code:

```ts
export default defineNuxtPlugin(() => {
  const convex = useConvexClient() // from convex-nuxt
  const auth = useAuth() // from @clerk/nuxt

  // Whenever Convex needs a token, it will call this function
  const getToken = async () => {
    return auth.getToken.value({
      template: 'convex',
      skipCache: false,
    })
  }

  convex.setAuth(getToken)
})
```

From this point on, you can implement the Clerk module as you would normally do. Also, the Convex functions 
will have access to the logged in user like below:

```ts
export const get = query({
  args: {},
  handler: async (ctx) => {
      const identity = await ctx.auth.getUserIdentity() // The logged in user from Clerk
  },
})
```


## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  bun install
  
  # Generate type stubs
  bun run dev:prepare
  
  # Develop with the playground
  bun run dev
  
  # Build the playground
  bun run dev:build
  
  # Run ESLint
  bun run lint
  
  # Run Vitest
  bun run test
  bun run test:watch
  
  # Release new version
  bun run release
  ```

</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/convex-nuxt/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/convex-nuxt

[npm-downloads-src]: https://img.shields.io/npm/dm/convex-nuxt.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/convex-nuxt

[license-src]: https://img.shields.io/npm/l/convex-nuxt.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/convex-nuxt

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
