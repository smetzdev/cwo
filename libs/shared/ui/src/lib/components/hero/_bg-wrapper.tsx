import tw, { styled } from "twin.macro"
import { ImageWrapper } from "../../elements"

export const BgWrapper = styled(ImageWrapper)`
  ${tw`absolute inset-0 w-full h-full`}
  > * {
    ${tw`object-cover object-center`}
  }
`
