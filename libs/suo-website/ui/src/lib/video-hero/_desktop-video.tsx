import "twin.macro"
import TimelapseVideoHigh from "./timelapse-video/720p.mp4"

export const DesktopVideo = () => (
  <video
    tw="hidden lg:block"
    autoPlay
    muted
    loop
    src={TimelapseVideoHigh}
  ></video>
)
