import React from "react"
import tw, { styled } from "twin.macro"
import { bloodyBase64 } from "./bloody-base64"

export const Bloody: React.FC = ({ children }) => (
  <span tw="relative inline-block">
    <BloodyBG />
    <BloodyBG tw="transform rotate-180" />
    <BloodyBG tw="bg-contain" />
    <BloodyBG tw="bg-contain transform rotate-180" />
    {children}
  </span>
)

const BloodyBG = styled.span`
  ${tw`absolute inset-0 z-10 w-full h-full pointer-events-none`};
  background-image: url(${bloodyBase64});
`
