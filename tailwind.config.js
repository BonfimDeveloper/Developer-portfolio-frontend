/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%, 100%": { transform: "translateY(0)", color: "#3b82f6" }, // azul
          "50%": { transform: "translateY(-6px)", color: "#f59e0b" },   // laranja
        },
      },
      animation: {
        wave: "wave 1.2s ease-in-out infinite",
      },
      textStrokeWidth: {
        1: '1px',
        2: '2px',
        3: '3px',
      },
      textStrokeColor: {
        red: 'red',
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1300px",
        xl: "1600px",
        "2xl": "2000px",
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

