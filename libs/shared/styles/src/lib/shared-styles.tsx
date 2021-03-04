import React from "react"
import { GlobalStyles } from "twin.macro"
import { Global } from "@emotion/react"
import { fontFaces } from "./_font-faces"
import { baseStyles } from "./_base-styles"

export const CWOGlobalStyles = () => (
  <>
    <Global styles={fontFaces} />
    <Global styles={baseStyles} />
    <GlobalStyles />
  </>
)
