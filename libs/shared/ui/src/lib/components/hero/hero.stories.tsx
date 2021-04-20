import React from "react"
import "twin.macro"
import { Hero, HeroContent } from "./index"

export default {
  title: "Components/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
}

export const Base = () => (
  <Hero>
    <HeroContent>
      <h1 tw="text-6xl">Hero</h1>
    </HeroContent>
  </Hero>
)
