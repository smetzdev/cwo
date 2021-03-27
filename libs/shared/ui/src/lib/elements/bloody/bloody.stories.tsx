import React from "react"
import "twin.macro"
import { Bloody } from "./bloody"

export default {
  title: "Bloody",
  component: Bloody,
}

export const Base = () => (
  <Bloody>
    <span tw="text-6xl font-display">Iam bloddy text</span>
  </Bloody>
)
