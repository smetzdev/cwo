import React from "react"
import { Button } from "./button"

export default {
  title: "Button",
  component: Button,
}

export const Base = () => <Button>I am a Button</Button>
export const Link = () => (
  <Button as="a" href="#">
    Iam a link
  </Button>
)
