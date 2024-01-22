/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'poppins' : ['Poppins']
    },
    extend: {
    spacing:{
        13: '3.25rem',
      }
    },
  },
  plugins: [],
}

