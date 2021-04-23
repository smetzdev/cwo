import "twin.macro"
import { iconData } from "./icon-data"

export const Icon = ({ name, ...props }: IconProps) => {
  const { width, height, Paths } = iconData[name]
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      {Paths}
    </svg>
  )
}

export type IconProps = {
  name: keyof typeof iconData
}
