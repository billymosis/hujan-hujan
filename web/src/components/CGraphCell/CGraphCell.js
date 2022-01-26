import { DateRangePicker } from '@mantine/dates'
import { Select, MultiSelect, Button } from '@mantine/core'
import { useState } from 'react'
import {
  MapContainer,
  useMap,
  TileLayer,
  Popup,
  CircleMarker,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet'
import dayjs from 'dayjs'
import { navigate, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query StationList {
    stations {
      station_number
      station_name
      latitude
      longitude
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ stations }) => {
  const [value, setValue] = useState(null)
  const [location, setLocation] = useState(null)
  const [dateValue, setDateValue] = useState([
    new Date('2000-01-01'),
    new Date('2021-12-31'),
  ])
  const [typeValue, setTypeValue] = useState([])

  const MAP_CENTER_POS = [-1.14460503881007, 113.1897451617413]

  const dataType = [
    { value: 'Tn', label: 'Temperatur minimum (Tn)' },
    { value: 'Tx', label: 'Temperatur maksimum (Tx)' },
    { value: 'Tavg', label: 'Temperatur rata-rata (Tavg)' },
    { value: 'RH_avg', label: 'Kelembapan rata-rata (RH_avg)' },
    { value: 'RR', label: 'Curah hujan (RR)' },
    { value: 'ss', label: 'Lamanya penyinaran matahari (ss)' },
    { value: 'ff_x', label: 'Kecepatan angin maksimum (ff_x)' },
    { value: 'ddd_x', label: '  Arah angin saat kecepatan maksimum (ddd_x)' },
    { value: 'ff_avg', label: 'Kecepatan angin rata-rata (ff_avg)' },
    { value: 'ddd_car', label: 'Arah angin terbanyak (ddd_car)' },
  ]

  const data = stations.map((x) => ({
    label: x['station_name'],
    value: x['station_number'].toString(),
    latitude: x['latitude'],
    longitude: x['longitude'],
  }))

  const selectHandler = (x) => {
    setValue(x)
    const myd = data
      .filter((y) => y.value == x)
      .map((x) => [x['latitude'], x['longitude']])[0]
    setLocation(myd)
  }

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

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(
      routes.about({
        station_number: value,
        date_range: dateValue.map((x) => dayjs(x).format('YYYY-MM-DD')),
        type: typeValue,
      })
    )
  }

  return (
    <div className="h-screen grid grid-cols-6 gap-2">
      <div className="col-span-2 flex gap-4 flex-col">
      </div>
      <div className="col-span-4">
        <MapContainer
          scrollWheelZoom
          preferCanvas={true}
          className="w-full h-96 bottom-0"
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
      </div>
    </div>
  )
}
