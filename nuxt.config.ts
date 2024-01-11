// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', "@nuxtjs/i18n"],
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  i18n: {
    strategy: 'no_prefix',
    locales: [
      {
        code: 'id',
        name: "Indonesia",
        image: "/flag/id.svg",
      },
      {
        code: 'en',
        name: "English",
        image: "/flag/en.svg",
      },
    ],
    defaultLocale: "en",
    detectBrowserLanguage: false,
    vueI18n: "./i18n.config.ts",
  },
})
