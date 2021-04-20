import "twin.macro"
import { Hero, HeroContent, Bloody, FormattedDate } from "@cwo/shared/ui"
import { DesktopVideo } from "./_desktop-video"

export const VideoHero = ({ date }: VideoHeroProps) => {
  return (
    <Hero tw="h-96 bg-black lg:h-screen" Background={<DesktopVideo />}>
      <HeroContent tw="bg-transparent! text-center">
        <h1 tw="text-4xl lg:text-6xl max-w-lg inline-block sm:tracking-wider">
          <Bloody>Schlacht</Bloody> <Bloody>um</Bloody>
          <br />
          <Bloody>Otzenhausen</Bloody>
        </h1>
        <p tw="font-display mt-1 lg:text-2xl text-primary sm:tracking-widest">
          <FormattedDate date={date} /> | Hunnenringhalle
        </p>
      </HeroContent>
    </Hero>
  )
}

export type VideoHeroProps = {
  date: Date
}
