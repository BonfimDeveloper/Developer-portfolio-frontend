/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontSize: {
        'sad-xl': '35rem',
        'sad-lg': '25rem',
        'sad-md': '20rem',
        'sad-sm': '15rem',
        'sad-xs': '10rem', // Adiciona um tamanho de fonte personalizado
         // Adiciona um tamanho de fonte personalizado
      },
    },
  },
  plugins: [],
}

