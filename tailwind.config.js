/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'primary-action': '#80b918'
      },
      backgrounds: {
        'product-bg': "url('/data/main-category.jpg')"
      }
    },
    plugins: []
  }
};
