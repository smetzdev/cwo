import React, { HTMLAttributes } from "react"
import "twin.macro"
import { BgWrapper } from "./_bg-wrapper"

export const Hero = ({ className, children, Background }: HeroTypes) => {
  return (
    <div tw="h-screen relative" className={className}>
      {Background && <BgWrapper>{Background}</BgWrapper>}
      {/* Content */}
      {children}
    </div>
  )
}

export type HeroTypes = {
  children?: React.ReactNode
  Background?: JSX.Element
} & HTMLAttributes<HTMLElement>
