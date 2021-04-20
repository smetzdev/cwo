import tw, { styled } from "twin.macro"

export const Button = styled.button<ButtonProps>`
  ${tw`inline-block px-4 py-2`}
  ${tw`transition-colors font-display`}
  ${tw`text-primary-contrast bg-primary`}
  ${tw`hover:(bg-primary-700 text-primary-contrast)`}
  ${tw`focus:(outline-none ring-1 ring-primary-300)`}
  ${tw`active:bg-primary-900`}
`

export type ButtonProps = {
  href?: string
  target?: string
  rel?: string
}
