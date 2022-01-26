export const schema = gql`
  type Station {
    station_number: Int!
    station_name: String
    latitude: Float
    longitude: Float
    elevation: Float
    Weather: [Weather]!
    _count: Count
  }

  type Count {
    Weather: Int
  }

  type Query {
    stations: [Station!]! @requireAuth
    station(stationNumber: Int!): Station! @requireAuth
  }

  input CreateStationInput {
    station_number: Int!
    station_name: String
    latitude: Float
    longitude: Float
    elevation: Float
  }

  input UpdateStationInput {
    station_number: Int
    station_name: String
    latitude: Float
    longitude: Float
    elevation: Float
  }
`
