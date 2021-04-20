import React, { HTMLAttributes } from "react"
import "twin.macro"

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div tw="p-5" className={className}>
      {children}
    </div>
  )
}

type CardContentProps = {
  children: React.ReactNode | string
} & HTMLAttributes<HTMLDivElement>
