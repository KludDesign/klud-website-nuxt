const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script: [
      // { src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCbysSFu2JzOapnygFIYLkFF3dzKEejU6I&callback=initMap', async: true, defer: true },
      // { src: '~/assets/js/klud.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poiret+One|Quicksand' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#FEC503',
    height: '5px'
  },

  layoutTransition: {
    name: 'page',
    mode: 'out-in'
  },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl',
    '~/assets/style/kludStyle.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    { src: '~plugins/vue-typer-plugin.js', ssr: false },
    { src: '~plugins/particles.js', ssr: false },
    { src: '~plugins/ga.js', ssr: false }
  ],

  loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/redirect-module'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios'],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },

  /*
  ** Sitemap configuration here
  */

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://klud-design.com',
  },

  /*
  ** Redirection des url
  */

  redirect: [
    { from: 'http://klud-design.fr', to: 'http://www.klud-design.com/', statusCode: 301 },
    { from: '^/index.php', to: 'http://www.klud-design.com/', statusCode: 301 },
    { from: '^/bureau_etude.php', to: '/pitch', statusCode: 301 },
    { from: '^/web.php', to: '/projets', statusCode: 301 },
    { from: '^/produit.php', to: '/projets', statusCode: 301 },
    { from: '^/mobilier.php', to: '/projets', statusCode: 301 },
    { from: '^/contact.php', to: '/contact', statusCode: 301 }
  ]

}
