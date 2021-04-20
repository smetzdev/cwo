import React, { HTMLAttributes } from "react"
import tw, { styled } from "twin.macro"

export function CardImageWrapper({ className, children }: CardProps) {
  return (
    <StyledCardImageWrapper className={className}>
      {children}
    </StyledCardImageWrapper>
  )
}

const StyledCardImageWrapper = styled.div`
  ${tw`relative aspect-w-16 aspect-h-9`}
  & > * {
    ${tw`absolute inset-0 w-full h-full`}
  }
`

type CardProps = {
  children: React.ReactNode
} & HTMLAttributes<HTMLDivElement>
