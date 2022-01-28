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
    <div className="h-screen flex flex-wrap-reverse mt-40 md:mt-0 md:flex-nowrap gap-10 px-4">
      <div className="gap-4 md:basis-1/4 basis-full flex-col">
        <InputForm stations={stations} callLocation={(x) => setLocation(x)} />
      </div>
      <div className="shadow-2xl h-fit basis-full md:basis-10/12 relative z-0">
        <StationMap stations={stations} location={location} />
      </div>
    </div>
  )
}