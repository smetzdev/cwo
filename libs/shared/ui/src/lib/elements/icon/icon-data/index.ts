import { iconDataProps } from "./icon-data"

import { bandcamp } from "./bandcamp"
import { facebook } from "./facebook"
import { globe } from "./globe"
import { instagram } from "./instagram"
import { spotify } from "./spotify"
import { sword } from "./sword"
import { youtube } from "./youtube"

export const iconData = {
  bandcamp,
  facebook,
  globe,
  instagram,
  spotify,
  sword,
  youtube,
}

export type iconDataObject = {
  [key: string]: iconDataProps
}
