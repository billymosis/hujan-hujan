import {
  MapContainer,
  useMap,
  TileLayer,
  Popup,
  CircleMarker,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const StationMap = ({ stations, location }) => {
  const MAP_CENTER_POS = [-1.14460503881007, 113.1897451617413]
  const data = stations.map((x) => ({
    label: x['station_name'],
    value: x['station_number'].toString(),
    latitude: x['latitude'],
    longitude: x['longitude'],
  }))

  const MyMarker = ({ data }) => {
    const positions = data.map((x) => [x.latitude, x.longitude])

    return positions.map((x, i) => (
      <CircleMarker center={x} key={i} radius={3}>
        <Popup>
          <ul>
            <li className="font-bold">{data[i]['label']}</li>
            <li>Latitude: {x[0]}</li>
            <li>Longitude: {x[1]}</li>
          </ul>
        </Popup>
      </CircleMarker>
    ))
  }

  function LocationMarker({ location }) {
    const map = useMap()
    const position = location == null ? map.getCenter() : location
    map.flyTo(position, location == null ? 5 : 15, { animate: false })

    return location === null ? null : (
      <CircleMarker center={position} radius={5} pathOptions={{ color: 'red' }}>
        <Popup>You are here</Popup>
      </CircleMarker>
    )
  }
  return (
    <MapContainer
      scrollWheelZoom
      preferCanvas={true}
      className="w-full h-full bottom-0"
      center={MAP_CENTER_POS}
      zoom={5}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MyMarker data={data} />
      <LocationMarker location={location} />
    </MapContainer>
  )
}

export default StationMap
