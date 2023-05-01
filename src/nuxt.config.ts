// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: '',
  /*
   ** Global Styles (Actual styles)
   */
  css: [
    // Actual styles entry point (as import management)
    '~/assets/style/scss/app.scss'
  ],

  modules: [
    [
      '@nuxtjs/eslint-module',
      {
        // eslint module options
      }
    ],
    // https://github.com/nuxt-community/stylelint-module
    [
      '@nuxtjs/stylelint-module',
      {
        cache: false,
        lintOnStart: false,
        include: ['./{assets/style,components,layouts,pages}/**/*.{css,sass,scss,less,stylus,vue}']
      }
    ]
  ],

  vite: {
    css: {
      preprocessorOptions: {
        /*
         ** Global Styles (Do not import actual styles)
         ** https://www.npmjs.com/package/@nuxtjs/style-resources
         */
        scss: {
          additionalData: `
                @import "@/assets/style/scss/functions/_center.scss";
                @import "@/assets/style/scss/functions/_triangle.scss";
                @import "@/assets/style/scss/mixins/_font.scss";
                @import "@/assets/style/scss/mixins/_gradient.scss";
              `
        }
      }
    }
  }
})
