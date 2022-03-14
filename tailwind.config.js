module.exports = {
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'ui-serif'],
        montserrat: ['Montserrat', 'ui-sans-serif'],
      },
      colors: {
        padua: {
          DEFAULT: '#B3EBBF',
          50: '#FDFEFC',
          100: '#F7FCF4',
          200: '#E8F8E3',
          300: '#D6F3D3',
          400: '#C3EFC6',
          500: '#B3EBBF',
          600: '#6ED994',
          700: '#32BE78',
          800: '#207A59',
          900: '#0E352D',
        },
      },
    },
  },
  plugins: [],
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`,
    `nuxt.config.{js,ts}`,
  ],
};
