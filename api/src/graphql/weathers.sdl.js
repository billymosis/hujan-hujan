export const schema = gql`
  scalar Date
  type Weather {
    id: Int!
    ddd_car: String
    Tanggal: String
    station_number: Int
    Tn: Float
    Tx: Float
    Tavg: Float
    RH_avg: Float
    RR: Float
    ss: Float
    ff_x: Float
    ddd_x: Float
    ff_avg: Float
    Station: Station
  }

  input WeatherInput {
    ddd_car: Boolean
    Tanggal: Boolean
    station_number: Boolean
    Tn: Boolean
    Tx: Boolean
    Tavg: Boolean
    RH_avg: Boolean
    RR: Boolean
    ss: Boolean
    ff_x: Boolean
    ddd_x: Boolean
    ff_avg: Boolean
  }

  type WeatherRange {
    weathers: [Weather!]!
    Station: Station
  }

  type WeatherPage {
    weathers: [Weather!]!
    count: Int!
  }

  type Query {
    weathers: [Weather!]! @requireAuth
    weather(id: Int!): Weather! @requireAuth
    weatherPage(page: Int, dataCount: Int): WeatherPage @requireAuth
    weatherRange(
      stationNumber: Int!
      weatherData: WeatherInput!
      from: Date
      to: Date
    ): WeatherRange @requireAuth
  }

  input CreateWeatherInput {
    ddd_car: String
    Tanggal: String
    station_number: Int
    Tn: Float
    Tx: Float
    Tavg: Float
    RH_avg: Float
    RR: Float
    ss: Float
    ff_x: Float
    ddd_x: Float
    ff_avg: Float
  }

  input UpdateWeatherInput {
    ddd_car: String
    Tanggal: String
    station_number: Int
    Tn: Float
    Tx: Float
    Tavg: Float
    RH_avg: Float
    RR: Float
    ss: Float
    ff_x: Float
    ddd_x: Float
    ff_avg: Float
  }
`
