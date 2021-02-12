// eslint-disable-next-line @typescript-eslint/no-var-requires
const cwoTailwindConfig = require("../../libs/tailwind-config")

module.exports = {
  presets: [cwoTailwindConfig],
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
