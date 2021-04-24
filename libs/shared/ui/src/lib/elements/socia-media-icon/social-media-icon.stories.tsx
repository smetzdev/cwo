import "twin.macro"
import { SocialMediaIcon } from "./index"

export default {
  title: "Elements/SocialMediaIcon",
  component: SocialMediaIcon,
}

export const Base = () => (
  <div tw="grid grid-cols-3 gap-4">
    <a
      tw="bg-gray-600 p-8 flex flex-col items-center justify-center"
      href="https://open.spotify.com/artist/2ye2Wgw4gimLv2eAKyk1NB?si=GhV6m4JZRFGxL5CfSmaDiQ"
    >
      <SocialMediaIcon
        tw="w-8 h-auto"
        url="https://open.spotify.com/artist/2ye2Wgw4gimLv2eAKyk1NB?si=GhV6m4JZRFGxL5CfSmaDiQ"
      />
      <span tw="mt-2">Spotify</span>
    </a>
    <a
      tw="bg-gray-600 p-8 flex flex-col items-center justify-center"
      href="https://de-de.facebook.com/Metallica"
    >
      <SocialMediaIcon
        tw="w-8 h-auto"
        url="https://de-de.facebook.com/Metallica"
      />
      <span tw="mt-2">Facebook</span>
    </a>
    <a
      tw="bg-gray-600 p-8 flex flex-col items-center justify-center"
      href="https://thefals.bandcamp.com/"
    >
      <SocialMediaIcon tw="w-8 h-auto" url="https://thefals.bandcamp.com/" />
      <span tw="mt-2">Bandcamp</span>
    </a>
    <a
      tw="bg-gray-600 p-8 flex flex-col items-center justify-center"
      href="https://www.instagram.com/metallica/"
    >
      <SocialMediaIcon
        tw="w-8 h-auto"
        url="https://www.instagram.com/metallica/"
      />
      <span tw="mt-2">Instagram</span>
    </a>
    <a
      tw="bg-gray-600 p-8 flex flex-col items-center justify-center"
      href="https://www.metallica.com/"
    >
      <SocialMediaIcon tw="w-8 h-auto" url="https://www.metallica.com/" />
      <span tw="mt-2">Website (Globe)</span>
    </a>
  </div>
)
