import "twin.macro"
import { Section, Headline, Bloody } from "@cwo/shared/ui"
import { BandCard, BandCardProps } from "./_band-card"

export const Bands = ({ bands }: BandsProps) => {
  return (
    <Section tw="container">
      <Headline>
        <Bloody>Bands</Bloody>
      </Headline>
      <div tw="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-8 xl:mt-16">
        {bands.map((band, key) => (
          <BandCard key={key} {...band} />
        ))}
      </div>
    </Section>
  )
}

export type BandsProps = {
  bands: BandCardProps[]
}
