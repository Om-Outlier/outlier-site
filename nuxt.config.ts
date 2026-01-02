// Nuxt configuration for OUTLIER site
export default defineNuxtConfig({
  srcDir: '.',
  typescript: {
    strict: true,
    shim: false
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      titleTemplate: (titleChunk?: string) => titleChunk ? `${titleChunk} | OUTLIER (Thailand)` : 'OUTLIER (Thailand)',
      meta: [
        { name: 'description', content: 'OUTLIER builds and operates marketing and commercial platforms for brands across Thailand and Southeast Asia.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:site_name', content: 'OUTLIER (Thailand)' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        // Explicit favicon variants to avoid browser fallbacks to defaults
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.png' },
        { rel: 'shortcut icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/images/logo-outlier-square.png' }
      ]
    }
  },
  runtimeConfig: {
    contactStoragePath: 'data/leads.jsonl',
    public: {
      siteUrl: 'https://www.outlier.co.th'
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
  nitro: {
    preset: 'node-server'
  },
  experimental: {
    typedPages: true
  },
  build: {
    transpile: []
  },
  compatibilityDate: '2024-10-14'
})
