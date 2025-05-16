const allowConvexVueLocalPackage = {
  server: {
    fs: {
      allow: [
        '../../convex-vue',
        './',
      ],
    },
  },
}

export default defineNuxtConfig({
  modules: ['../src/module'],
  // ssr: false,
  devtools: { enabled: true },
  compatibilityDate: '2025-04-24',
  vite: allowConvexVueLocalPackage,
  convex: {
    url: process.env.NUXT_CONVEX_URL,
  },
})
