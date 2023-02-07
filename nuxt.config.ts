import viteEslint from 'vite-plugin-eslint'
import viteStylelint from 'vite-plugin-stylelint'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /*
   ** Global Styles (Actual styles)
   */
  css: [
    // Actual styles entry point (as import management)
    '~/assets/style/scss/app.scss'
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
    },
    plugins: [
      viteEslint(),
      viteStylelint({
        cache: false,
        include: ['./{assets/style,components,layouts,pages}/**/*.{css,sass,scss,less,stylus}', '*.vue', '**/*.vue']
      })
    ]
  }
})
