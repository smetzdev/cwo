import React from "react"
import { Headline } from "./index"
import { Bloody } from "../bloody"

export default {
  title: "Headline",
  component: Headline,
}

export const Base = () => <Headline>Module Headline</Headline>
export const WithBlood = () => (
  <Headline>
    <Bloody>Module Headline</Bloody>
  </Headline>
)
