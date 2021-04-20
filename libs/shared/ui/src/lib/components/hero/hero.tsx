import React, { HTMLAttributes } from "react"
import "twin.macro"
import { ImageWrapper as BgWrapper } from "../../elements"

export const Hero = ({ className, children }: HeroTypes) => {
  return (
    <div tw="h-screen relative" className={className}>
      {/* Background */}
      <BgWrapper tw="absolute inset-0">
        <img src="https://picsum.photos/1280/720" alt="" />
      </BgWrapper>
      {/* Content */}
      {children}
    </div>
  )
}

export type HeroTypes = {
  children?: React.ReactNode
} & HTMLAttributes<HTMLElement>
