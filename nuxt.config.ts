// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon', 'floating-vue/nuxt', 'nuxt-swiper', '@pinia/nuxt', '@nuxtjs/svg-sprite'],
  plugins: ['~/plugins/head.client.ts', { src: '~/plugins/video.js', mode: 'client' }],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/scss/_mixins.scss";
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_reset.scss";`,
        }
      }
    }
  },
})
