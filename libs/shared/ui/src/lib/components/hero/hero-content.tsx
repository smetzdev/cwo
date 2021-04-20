import tw, { styled } from "twin.macro"

/**
 * Full width/height container for content.
 * Default to flex-col with content centered everywhere
 */
export const HeroContent = styled.div`
  ${tw`absolute inset-0`};
  ${tw`flex flex-col items-center justify-center`};
  ${tw`bg-gray-900 bg-opacity-75`};
`
