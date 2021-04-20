import React from "react"
import { CWOGlobalStyles } from "../libs/shared/styles/src"
import { withKnobs } from "@storybook/addon-knobs"

const withGlobalStyles = Story => (
  <>
    <CWOGlobalStyles />
    {Story()}
  </>
)

export const globalDecorators = [withKnobs, withGlobalStyles]
