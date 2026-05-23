export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        rcb: {
          red: '#CC0000',
          black: '#1a1a1a',
        }
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
