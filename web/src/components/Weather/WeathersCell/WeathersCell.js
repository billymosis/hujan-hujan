import { Link, routes } from '@redwoodjs/router'

import Weathers from 'src/components/Weather/Weathers'

export const QUERY = gql`
  query FindWeathers {
    weathers {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No weathers yet. '}
      <Link to={routes.newWeather()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ weathers }) => {
  return <Weathers weathers={weathers} />
}
