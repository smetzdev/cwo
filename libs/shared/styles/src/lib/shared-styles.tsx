import React from "react"
import { GlobalStyles as GlobalTwinMacroStyles } from "twin.macro"
import { Global } from "@emotion/react"
import { baseStyles } from "./_base-styles"
import "./_font-faces.css"

export const CWOGlobalStyles = () => (
  <>
    <GlobalTwinMacroStyles />
    <Global styles={baseStyles} />
  </>
)
