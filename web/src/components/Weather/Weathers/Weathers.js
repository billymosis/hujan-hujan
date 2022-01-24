import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Weather/WeathersCell'

const DELETE_WEATHER_MUTATION = gql`
  mutation DeleteWeatherMutation($id: Int!) {
    deleteWeather(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const WeathersList = ({ weathers }) => {
  const [deleteWeather] = useMutation(DELETE_WEATHER_MUTATION, {
    onCompleted: () => {
      toast.success('Weather deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete weather ' + id + '?')) {
      deleteWeather({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Ddd car</th>
            <th>Tanggal</th>
            <th>Station number</th>
            <th>Tn</th>
            <th>Tx</th>
            <th>Tavg</th>
            <th>Rh avg</th>
            <th>Rr</th>
            <th>Ss</th>
            <th>Ff x</th>
            <th>Ddd x</th>
            <th>Ff avg</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {weathers.map((weather) => (
            <tr key={weather.id}>
              <td>{truncate(weather.id)}</td>
              <td>{truncate(weather.ddd_car)}</td>
              <td>{truncate(weather.Tanggal)}</td>
              <td>{truncate(weather.station_number)}</td>
              <td>{truncate(weather.Tn)}</td>
              <td>{truncate(weather.Tx)}</td>
              <td>{truncate(weather.Tavg)}</td>
              <td>{truncate(weather.RH_avg)}</td>
              <td>{truncate(weather.RR)}</td>
              <td>{truncate(weather.ss)}</td>
              <td>{truncate(weather.ff_x)}</td>
              <td>{truncate(weather.ddd_x)}</td>
              <td>{truncate(weather.ff_avg)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.weather({ id: weather.id })}
                    title={'Show weather ' + weather.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editWeather({ id: weather.id })}
                    title={'Edit weather ' + weather.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete weather ' + weather.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(weather.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default WeathersList
