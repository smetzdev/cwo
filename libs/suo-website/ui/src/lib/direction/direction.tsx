import "twin.macro"
import { Section, Headline, Bloody, Map, MapProps } from "@cwo/shared/ui"

export const Direction = ({ center, googleRoutesLink }: DirectionProps) => {
  return (
    <Section tw="bg-gray-800">
      <div tw="container">
        <Headline>
          <Bloody>Anfahrt</Bloody>
        </Headline>
        <div tw="mt-16 aspect-w-16 aspect-h-9 relative">
          <Map
            tw="absolute inset-0 w-full h-auto"
            center={center}
            googleRoutesLink={googleRoutesLink}
          />
        </div>
      </div>
    </Section>
  )
}

export type DirectionProps = {
  center: MapProps["center"]
  googleRoutesLink: MapProps["googleRoutesLink"]
}
