/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "500px", // Alterado para 500px
        md: "800px", // Alterado para 800px
        lg: "1750px", // Alterado para 1024px
        xl: "1280px",
        "2xl": "1536px",
      },
      fontSize: {
        'sad-xl': '35rem',
        'sad-lg': '25rem',
        'sad-md': '20rem',
        'sad-sm': '15rem',
        'sad-xs': '10rem', // Adiciona um tamanho de fonte personalizado
         // Adiciona um tamanho de fonte personalizado
      },
      colors: {
        purpleCustom: 'rgb(214, 178, 255)',
        lightTheme: "#fbfefa",
        darkTheme: "#1E1E1E",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bitter: [ "Bitter", "serif" ],

      },
    },
  },
  plugins: [],
}

