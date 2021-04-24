import "twin.macro"
import { Map } from "./index"

export default {
  title: "Components/Map",
  component: Map,
}

export const Base = () => (
  <div tw="aspect-w-16 aspect-h-9">
    <Map
      center={[49.60524112619236, 6.995393251916623]}
      tw="absolute h-full w-full inset-0"
    />
  </div>
)

export const WithGoogleRoutesLink = () => (
  <div tw="aspect-w-16 aspect-h-9">
    <Map
      googleRoutesLink="https://www.google.com/maps/dir//Hunnenringhalle+Otzenhausen,+Ringwallstra%C3%9Fe+8,+66620+Nonnweiler/@49.6050743,6.9931509,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47959061a7d8853d:0x3c977a515cdc0c51!2m2!1d6.9953253!2d49.6050748"
      center={[49.60524112619236, 6.995393251916623]}
      tw="absolute h-full w-full inset-0"
    />
  </div>
)
