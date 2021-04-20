import React from "react"
import "twin.macro"
import { Card, CardImageWrapper, CardContent } from "./card"

export default {
  title: "Components/Card",
  component: Card,
}

export const Base = () => (
  <div tw="max-w-md">
    <Card>
      <CardImageWrapper>
        <img src="https://picsum.photos/1600/900" alt="" />
      </CardImageWrapper>
      <CardContent>
        <h1>Hallo</h1>
      </CardContent>
    </Card>
  </div>
)
