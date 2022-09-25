import { version } from './package.json';

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
  css: ['@/assets/styles/fonts.css'],

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
        supabaseUrl: 'https://tcyatdoezydonfbffnlv.supabase.co',
        supabaseKey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjeWF0ZG9lenlkb25mYmZmbmx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQxMjkzMTEsImV4cCI6MTk3OTcwNTMxMX0.hMCLLrIozPBi2F6lVefZIVKeyhKo-k8hidpBygRvOtk',
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // https://nuxtjs.org/guide/runtime-config
  publicRuntimeConfig: {
    appVersion: version,
  },
};
