/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#74A257',
          500: '#0C4322',
          600: '#0B363B',
        },
      },
      backgroundImage: {
        'hero-bg': "url('/src/images/hero-bg.png')",
      },
    },
  },
  plugins: [],
};
