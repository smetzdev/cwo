import "twin.macro"
import { MusicNoteIcon, ClockIcon } from "@heroicons/react/solid"
import {
  Card,
  CardContent,
  CardImageWrapper,
  SocialMediaIcon,
} from "@cwo/shared/ui"

export const BandCard = ({
  Image,
  title,
  genre,
  startTime,
  endTime,
  stage,
  links,
}: BandCardProps) => {
  return (
    <Card tw="flex flex-col">
      <CardImageWrapper>{Image}</CardImageWrapper>
      <CardContent tw="flex flex-1 flex-col">
        <h3 tw="text-4xl text-primary-400">{title}</h3>
        <p tw="mt-2 flex items-center text-lg">
          <MusicNoteIcon tw="w-5 h-auto inline mr-2 text-gray-400" />
          {genre}
        </p>
        <p tw="flex items-center text-lg">
          <ClockIcon tw="w-5 h-auto inline mr-2 text-gray-400" />
          {startTime} - {endTime} Uhr | {stage}
        </p>
        <div tw="mt-auto">
          <hr tw="border-gray-500 my-4" />
          <div tw="flex space-x-3 items-center">
            {links.map((link, key) => (
              <a href={link} target="_blank" rel="noreferrer noopener">
                <SocialMediaIcon tw="w-6 h-auto" key={key} url={link} />
              </a>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export type BandCardProps = {
  Image: JSX.Element
  title: string
  genre: string
  startTime: Date | string
  endTime: Date | string
  stage: string
  links: string[]
}
