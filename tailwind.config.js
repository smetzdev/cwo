const { colors } = require("./libs/shared/designtokens/src/index")
const { boxShadow } = require("./libs/shared/tailwind-config")

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: boxShadow,
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: colors.red,
      },
      fontFamily: {
        display: ["DaysLater", "Helvetica Neue", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
