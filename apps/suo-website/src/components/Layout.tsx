import React from "react"
import { CWOGlobalStyles } from "@cwo/shared/styles"

export default function Layout({ children }) {
  return (
    <>
      <CWOGlobalStyles />
      {children}
    </>
  )
}
