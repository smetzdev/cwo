import { PointExpression, Icon } from "leaflet"
import {
  Marker as LeafletMarker,
  MarkerProps as LeafletMarkerProps,
} from "react-leaflet"
import MarkerSVG from "./marker.svg"

export const Marker = ({ children, position }: MarkerProps) => {
  // Build leaflet Icon
  const markerIconData = {
    iconUrl: MarkerSVG,
    iconSize: [32, 32] as PointExpression,
    // [16,16] is the "center" of the icon and the defaul
    iconAnchor: [16, 32] as PointExpression,
  }
  const markerIcon = new Icon(markerIconData)

  return (
    <LeafletMarker icon={markerIcon} position={position}>
      {children}
    </LeafletMarker>
  )
}

export type MarkerProps = {
  children?: React.ReactNode
  position: LeafletMarkerProps["position"]
}
