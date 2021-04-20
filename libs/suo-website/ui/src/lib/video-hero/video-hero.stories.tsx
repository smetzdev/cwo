import { VideoHero } from "./index"

export default {
  title: "VideoHero",
  component: VideoHero,
}

export const Base = () => <VideoHero date={new Date()} />
