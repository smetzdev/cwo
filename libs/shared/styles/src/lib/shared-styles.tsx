import React from "react"
import { GlobalStyles } from "twin.macro"
import { Global } from "@emotion/react"
import { baseStyles } from "./_base-styles"
import "./_font-faces.css"

export const CWOGlobalStyles = () => (
  <>
    <Global styles={baseStyles} />
    <GlobalStyles />
  </>
)
