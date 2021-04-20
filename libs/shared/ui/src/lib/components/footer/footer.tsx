import React from "react"
import "twin.macro"
import { Bloody } from "../../elements"

/** Renders a flex-container with company info
 * and the children on the right side on desktop and bottom on the bottom
 */
export const Footer = ({ children }: FooterProps) => {
  const currentYear = new Date().getFullYear()
  return (
    <footer tw="bg-black py-8 font-display">
      <div tw="container md:(flex justify-end)">
        <p tw="mb-2 md:mb-0 md:mr-auto">
          <Bloody>&copy; {currentYear} Celtic Warriors Otzenhausen e.V.</Bloody>
        </p>
        {children}
      </div>
    </footer>
  )
}

export type FooterProps = {
  children?: React.ReactNode
}
