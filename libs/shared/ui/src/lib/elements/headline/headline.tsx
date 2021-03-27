import tw, { styled } from "twin.macro"

export const Headline = styled.h2`
  ${tw`flex items-center justify-between gap-8 text-6xl`}
  &::before,&::after {
    ${tw`flex-1 h-px bg-gray-500 bg-repeat-x content`}
  }
`
