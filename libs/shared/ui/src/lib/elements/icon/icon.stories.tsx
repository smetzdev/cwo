import "twin.macro"
import { iconData } from "./icon-data"
import { Icon, IconProps } from "./index"

export default {
  title: "Elements/Icon",
  component: Icon,
}

export const Base = () => (
  <div tw="grid grid-cols-3 gap-4">
    {iconNames.map((iconName, key) => (
      <div tw="bg-gray-600 p-8 flex flex-col items-center justify-center">
        <Icon tw="w-8 h-auto" name={iconName as IconProps["name"]} />
        <p tw="mt-2">{iconName}</p>
      </div>
    ))}
  </div>
)

// Helpers
const iconNames: string[] = Object.keys(iconData)
