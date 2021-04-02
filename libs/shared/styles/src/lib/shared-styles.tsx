import React from "react"
import { GlobalStyles as GlobalTwinMacroStyles } from "twin.macro"
import { BaseStyles } from "./_base-styles"
import "./_font-faces.css"

export const CWOGlobalStyles = () => (
  <>
    <GlobalTwinMacroStyles />
    <BaseStyles />
  </>
)
