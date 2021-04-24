import { IconProps } from "../icon"

export const getIconName = (url: string): IconName => {
  const { hostname } = new URL(url)

  /*
   * We assume that the hostname looks
   * like one of the following schemas:
   * - domain.tld
   * - subdomain.domain.tld
   */
  const hostnameParts = hostname.split(".")
  const domainName =
    hostnameParts.length === 3 ? hostnameParts[1] : hostnameParts[0]

  /*
   * return iconName if it's a valid iconName
   * else return "globe"
   */
  return socialMediaProviders.indexOf(domainName as IconName) > -1
    ? (domainName as IconName)
    : "globe"
}

// Helper
const socialMediaProviders: IconName[] = [
  "spotify",
  "youtube",
  "bandcamp",
  "facebook",
  "instagram",
]
type IconName = IconProps["name"]
