import React from "react"
import "twin.macro"
import { ImageWrapper } from "./index"

export default {
  title: "Elements/ImageWrapper",
  component: ImageWrapper,
}

export const Base = () => (
  <ImageWrapper tw="h-96 w-64">
    <img
      tw="object-cover object-center"
      src="https://picsum.photos/1280/720"
      alt="DUMMY"
    />
  </ImageWrapper>
)
export const WithAspectRation = () => (
  <ImageWrapper tw="aspect-w-16 aspect-h-9">
    <img src="https://picsum.photos/1280/720" alt="DUMMY" />
  </ImageWrapper>
)
