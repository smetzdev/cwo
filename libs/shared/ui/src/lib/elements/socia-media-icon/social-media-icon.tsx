import { Icon } from "../icon"
import { getIconName } from "./get-icon-name"

/** Retuns a social-media icon based on the url
 * if no icon could be found, it returns the "globe"-icon
 */
export const SocialMediaIcon = ({ url, ...props }: SocialMediaIconProps) => {
  const iconName = getIconName(url)
  return <Icon name={iconName} {...props} />
}

export type SocialMediaIconProps = {
  url: string
}
