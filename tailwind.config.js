/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "almost-black": "#010705",
        "jungle-green": "#38b388",
      },
    },
  },
  plugins: [],
};
