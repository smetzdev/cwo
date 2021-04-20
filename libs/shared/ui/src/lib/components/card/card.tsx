import React, { HTMLAttributes } from "react"
import "twin.macro"

export function Card({ className, children }: CardProps) {
  return (
    <article tw="bg-gray-700" className={className}>
      {children}
    </article>
  )
}

type CardProps = {
  children: React.ReactNode
} & HTMLAttributes<HTMLElement>

export * from "./card-image-wrapper"
export * from "./card-content"
