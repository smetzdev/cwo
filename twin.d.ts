// twin.d.ts
import "twin.macro"
import { DOMAttributes } from "react"
import styledImport from "@emotion/styled"
import { css as cssImport } from "@emotion/react"

declare module "twin.macro" {
  // The styled and css imports
  const styled: typeof styledImport
  const css: typeof cssImport
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes<T = {}> extends DOMAttributes<T> {
      as?: string | Element
    }
  }
}
