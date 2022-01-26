import { useState } from 'react'
import 'leaflet/dist/leaflet'
import InputForm from '../InputForm/InputForm'
import StationMap from '../StationMap/StationMap'

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
  const [location, setLocation] = useState(null)

  return (
    <div className="h-screen grid grid-cols-6 gap-2">
      <div className="col-span-2 flex gap-4 flex-col">
        <InputForm stations={stations} callLocation={(x) => setLocation(x)} />
      </div>
      <div className="col-span-4">
        <StationMap stations={stations} location={location} />
      </div>
    </div>
  )
}
