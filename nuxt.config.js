export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'LoProKu - Lokale Produkte in Kundennähe',
    htmlAttrs: {
      lang: 'de',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://github.com/supabase-community/nuxt-supabase
    [
      'nuxt-supabase',
      {
        supabaseUrl: 'https://exvagujjflwfbrlrlhpa.supabase.co',
        supabaseKey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4dmFndWpqZmx3ZmJybHJsaHBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDcwMTU2NzIsImV4cCI6MTk2MjU5MTY3Mn0.dFpTy-iplQeRzvatiRAX1vSlLCsuikdymcprKs0X7Q4',
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
