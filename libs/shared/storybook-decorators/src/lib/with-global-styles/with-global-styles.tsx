import React from "react"
import { CWOGlobalStyles } from "@cwo/shared/styles"

export const WithGlobalStyles = (Story: CallableFunction) => {
  return (
    <>
      <CWOGlobalStyles />
      {Story()}
    </>
  )
}
