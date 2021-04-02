const { resolve } = require("path")

module.exports = {
  twin: {
    preset: "styled-components",
    config: resolve(__dirname, "tailwind.config.js"),
  },
}
