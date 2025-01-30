import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

function Shops() {
  return (
    <div>
      <MapContainer style={{height : "500px"}} center={[59.43393013780767, 24.744218397460667]} zoom={10} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[59.43393013780767, 24.744218397460667]}>
    <Popup>
      Vabaduse väljak <br />
      <a target="_blank" href="https://www.google.com/maps/place/%C3%9Clemiste+keskus/@59.4219391,24.7912867,17z/data=!3m1!4b1!4m6!3m5!1s0x4692eb54f4edfe43:0x206e6dcbdf41435e!8m2!3d59.4219391!4d24.793867!16s%2Fm%2F0hrdb05?entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D">
      Vabaduse väljak
      </a>
    </Popup>
  </Marker>

  <Marker position={[59.42735887199273, 24.723132741641013]}>
    <Popup>
      Kristiine keskus <br />
      <a target="_blank" href="https://www.google.com/maps/place/Kristiine+Keskus/@59.4272443,24.7204988,17z/data=!3m1!4b1!4m6!3m5!1s0x4692948ff56ecd75:0x4f0fde99c451563a!8m2!3d59.4272443!4d24.7230791!16s%2Fm%2F0w7mjwq?entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D">
      Endla 45, Tallinn, Estonia
      </a>
    </Popup>
  </Marker>

</MapContainer>
    </div>
  )
}

export default Shops