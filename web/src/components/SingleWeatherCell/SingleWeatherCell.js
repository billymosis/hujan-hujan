export const QUERY = gql`
  query SingleWeatherQuery($id: Int!) {
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

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ weather }) => {
  return <div>{JSON.stringify(weather)}</div>
}
