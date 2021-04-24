import "twin.macro"
import { TileLayer, MapContainer } from "react-leaflet"
import { LatLngTuple } from "leaflet"
import "leaflet/dist/leaflet.css"
import { ExternalLinkIcon } from "@heroicons/react/solid"
import { Button } from "@cwo/shared/ui"
import { Marker } from "./_marker"

export const Map = ({ className, center, googleRoutesLink }: MapProps) => {
  return (
    <div tw="relative" className={className}>
      <MapContainer
        className={className}
        center={center}
        zoom={13}
        scrollWheelZoom={false}
        tw="h-full w-full z-0"
      >
        <TileLayer
          tw="z-0"
          url={`https://api.mapbox.com/styles/v1/raum3/ckcrduwrn0rm81iqhliytbbkp/tiles/256/{z}/{x}/{y}?access_token=${MB_TOKEN}`}
        />
        <Marker position={center}></Marker>
      </MapContainer>
      {googleRoutesLink && (
        <Button
          as="a"
          href={googleRoutesLink}
          target="_blank"
          rel="noopener noreferrer"
          tw="bg-gray-300 absolute top-0 right-0 z-10 mt-4 mr-4"
        >
          Google Maps <ExternalLinkIcon tw="w-6 h-auto inline" />
        </Button>
      )}
    </div>
  )
}

export type MapProps = {
  className?: string
  center: LatLngTuple
  googleRoutesLink?: string
}

// Mapbox Access Token
const MB_TOKEN =
  "pk.eyJ1IjoicmF1bTMiLCJhIjoiY2sxOTd6ZjV6MXRhcTNjcWozdm0yN3h1dyJ9.bbSD0f_tVSX-_hXocn2HIg"
