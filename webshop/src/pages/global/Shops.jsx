import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import shopsLocations from "../../data/shops.json"

function Shops() {
  return (
    <div>
      <MapContainer style={{height : "500px"}} center={[59.43393013780767, 24.744218397460667]} zoom={10} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {shopsLocations.map(shop =>
      <Marker key={shop} position={[shop.lat, shop.long]}>
      <Popup>
        {shop.name} <br />
        <a target="_blank" href={shop.href}>
        {shop.address}
        </a>
      </Popup>
    </Marker>
  )}

</MapContainer>
    </div>
  )
}

export default Shops