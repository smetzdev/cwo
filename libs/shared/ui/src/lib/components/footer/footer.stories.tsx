import React from "react"
import { Footer } from "./index"

export default {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
}

export const Base = () => (
  <Footer>
    <p>Footer Children</p>
  </Footer>
)
