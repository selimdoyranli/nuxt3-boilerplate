// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // https://nuxt.com/docs/api/configuration/nuxt-config#srcdir
  srcDir: '',

  /**
   * SSR
   * https://nuxt.com/docs/api/configuration/nuxt-config#ssr
   */
  ssr: true,

  /**
   * App Config
   */
  app: {
    head: {
      title: process.env.npm_package_name || '',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
        },
        {
          hid: 'description',
          name: 'description',
          content: process.env.npm_package_description || ''
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  /**
   * Auto import components
   * https://nuxt.com/docs/api/configuration/nuxt-config#components
   */
  components: [
    {
      path: '@/components',
      pathPrefix: false,
      extensions: ['vue'],
      extendComponent(component) {
        /**
         * Remove 'Component' suffix for generated component names
         * e.g.
         *  components/Xyz.component.vue
         *    XyzComponent -> Xyz
         */
        component.pascalName = component.pascalName.replace('Component', '')
        component.kebabName = component.kebabName.replace('component', '')
      }
    }
  ],

  /**
   * Vite config
   */
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
    // Actual styles entry point
    '@/assets/style/scss/app.scss'
  ],

  /**
   * PostCSS config
   */
  postcss: {
    plugins: {
      autoprefixer: {
        grid: true
      }
    }
  },

  /**
   * Modules
   */
  modules: [
    // https://github.com/nuxt-community/eslint-module
    [
      '@nuxtjs/eslint-module',
      {
        lintOnStart: false
      }
    ],
    // https://github.com/nuxt-community/stylelint-module
    [
      '@nuxtjs/stylelint-module',
      {
        lintOnStart: false,
        include: './src/{assets/style,components,layouts,pages}/**/*.{css,sass,scss,less,stylus,vue}'
      }
    ],
    // https://pinia.vuejs.org
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate']
      }
    ]
  ],

  /**
   * Hooks
   */
  hooks: {
    'pages:extend'(pages) {
      pages.push(
        {
          name: 'index',
          path: '/',
          file: '@/pages/Home/Home.page.vue'
        },
        {
          path: '/about',
          file: '@/pages/About/About.page.vue'
        }
      )

      const vueOnlyPages = pages.filter(page => page.file?.endsWith('.vue'))

      pages.splice(0, pages.length, ...vueOnlyPages)
    }
  },

  /**
   * Auto imports
   */
  imports: {
    dirs: ['stores/**/*']
  },

  /**
   * Experimental options
   */
  experimental: {
    typedPages: true
  },

  // https://github.com/nuxt/nuxt/pull/27512
  compatibilityDate: '2024-07-04'
})
