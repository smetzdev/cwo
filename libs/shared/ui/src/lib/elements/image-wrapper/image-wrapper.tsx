import tw, { styled } from "twin.macro"

/** Relative container which absolute positions
 * it's child element in full-size
 * */
export const ImageWrapper = styled.div`
  position: relative;
  > * {
    ${tw`absolute inset-0 w-full h-full`}
  }
`
