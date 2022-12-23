/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#10b981',
      },
      fontFamily: {
        Roboto: [
          'Roboto Slab'
        ]
      },
    },
    container: {
      maxWidth: '100%',
      padding: "8%",
      center: true,
    },
  },
  plugins: [require('@tailwindcss/forms')]
}
