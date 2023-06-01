/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    backgroundImage: {
      'hotel': "url('./public/hotel-1.jpg')"
    },
    extend: {
      fontFamily: {
          'lobster': ['"Lobster"', 'cursive'],
      },
    },
  },
  plugins: [],
}