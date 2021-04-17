import tw from "twin.macro"
import { css } from "@emotion/react"

export const baseStyles = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${tw`font-display`}
  }

  a {
    ${tw`transition-colors duration-150 ease-in-out`}
  }

  a:hover {
    ${tw`text-primary-400`}
  }

  ::-moz-selection {
    ${tw`text-white bg-primary-600`}
  }

  ::selection {
    ${tw`text-white bg-primary-600`}
  }

  body {
    ${tw`text-gray-100 bg-gray-900`};
  }
`
