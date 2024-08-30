/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        asBlack: "#0C1015",
        asGray: "#667085",
        asBorderGray: "#BBBBBB26",
        asLightGray: "#C4C4C4A8",
        asPurple: "#853BCE",
        asLightPurple: "#853BCE1A",
        asGreen: "#19FB9B",
        asLightGreen: "#19FB9B26",
        asRed: "#3C1403",
        asLightRed: "#962D00",
        asBlue: "#1A73E8",
        asLightBlue: "#1A73E826",
        asWhite: "#F1F1FF99",
        asInputBorderGray: "#BBBBBB1F",
        asOrange: "#FC9C66",
        asPriceText: "#A1A1A1",

      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}