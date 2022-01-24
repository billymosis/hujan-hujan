export const schema = gql`
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
  }

  type Query {
    weathers: [Weather!]! @requireAuth
    weather(id: Int!): Weather @requireAuth
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

  type Mutation {
    createWeather(input: CreateWeatherInput!): Weather! @requireAuth
    updateWeather(id: Int!, input: UpdateWeatherInput!): Weather! @requireAuth
    deleteWeather(id: Int!): Weather! @requireAuth
  }
`
