import { Icon } from "../icon"
import { getIconName } from "./get-icon-name"

export const SocialMediaIcon = ({ url, ...props }: SocialMediaIconProps) => {
  const iconName = getIconName(url)
  return <Icon name={iconName} {...props} />
}

export type SocialMediaIconProps = {
  url: string
}
