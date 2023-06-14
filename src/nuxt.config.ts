// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: '',

  vite: {
    css: {
      preprocessorOptions: {
        /*
         ** Global Styles (Do not import actual styles)
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
  },

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
        include: './src/{assets/style,components,layouts,pages}/**/*.{css,sass,scss,less,stylus,vue}'
      }
    ]
  ]
})
