import Weather from 'src/components/Weather/Weather'

export const QUERY = gql`
  query FindWeatherById($id: Int!) {
    weather: weather(id: $id) {
      id
      ddd_car
      Tanggal
      station_number
      Tn
      Tx
      Tavg
      RH_avg
      RR
      ss
      ff_x
      ddd_x
      ff_avg
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Weather not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ weather }) => {
  return <Weather weather={weather} />
}
