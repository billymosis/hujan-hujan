import BGraph from '../BGraph/BGraph'

export const QUERY = gql`
  query StationList(
    $stationNumber: Int!
    $weatherData: WeatherInput!
    $from: Date!
    $to: Date!
    $RR: Boolean!
    $ddd_car: Boolean!
    $station_number: Boolean!
    $Tn: Boolean!
    $Tx: Boolean!
    $Tavg: Boolean!
    $RH_avg: Boolean!
    $ss: Boolean!
    $ff_x: Boolean!
    $ddd_x: Boolean!
    $ff_avg: Boolean!
  ) {
    station(stationNumber: $stationNumber) {
      station_name
      elevation
      latitude
      longitude
    }
    weatherRange(
      stationNumber: $stationNumber
      weatherData: $weatherData
      from: $from
      to: $to
    ) {
      weathers {
        Tanggal
        RR @include(if: $RR)
        ddd_car @include(if: $ddd_car)
        station_number @include(if: $station_number)
        Tn @include(if: $Tn)
        Tx @include(if: $Tx)
        Tavg @include(if: $Tavg)
        RH_avg @include(if: $RH_avg)
        RR @include(if: $RR)
        ss @include(if: $ss)
        ff_x @include(if: $ff_x)
        ddd_x @include(if: $ddd_x)
        ff_avg @include(if: $ff_avg)
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ station, weatherRange, weatherData }) => {
  console.log(weatherRange, station)
  return (
    <BGraph
      station={station}
      weatherData={weatherRange.weathers}
      weatherDataType={weatherData}
    />
  )
}
