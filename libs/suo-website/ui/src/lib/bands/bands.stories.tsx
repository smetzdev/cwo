import "twin.macro"
import { Bands } from "./index"
import { BandCard } from "./_band-card"
import { fakeBands } from "./band.stories.helper"

export default {
  title: "Bands",
  component: Bands,
}

export const Base = () => <Bands bands={fakeBands} />

export const SingleBand = () => (
  <div tw="max-w-md">
    <BandCard {...fakeBands[0]} />
  </div>
)
SingleBand.parameters = {
  layout: "padded",
}
