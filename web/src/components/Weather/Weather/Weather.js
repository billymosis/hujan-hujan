import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_WEATHER_MUTATION = gql`
  mutation DeleteWeatherMutation($id: Int!) {
    deleteWeather(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Weather = ({ weather }) => {
  const [deleteWeather] = useMutation(DELETE_WEATHER_MUTATION, {
    onCompleted: () => {
      toast.success('Weather deleted')
      navigate(routes.weathers())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete weather ' + id + '?')) {
      deleteWeather({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Weather {weather.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{weather.id}</td>
            </tr>
            <tr>
              <th>Ddd car</th>
              <td>{weather.ddd_car}</td>
            </tr>
            <tr>
              <th>Tanggal</th>
              <td>{weather.Tanggal}</td>
            </tr>
            <tr>
              <th>Station number</th>
              <td>{weather.station_number}</td>
            </tr>
            <tr>
              <th>Tn</th>
              <td>{weather.Tn}</td>
            </tr>
            <tr>
              <th>Tx</th>
              <td>{weather.Tx}</td>
            </tr>
            <tr>
              <th>Tavg</th>
              <td>{weather.Tavg}</td>
            </tr>
            <tr>
              <th>Rh avg</th>
              <td>{weather.RH_avg}</td>
            </tr>
            <tr>
              <th>Rr</th>
              <td>{weather.RR}</td>
            </tr>
            <tr>
              <th>Ss</th>
              <td>{weather.ss}</td>
            </tr>
            <tr>
              <th>Ff x</th>
              <td>{weather.ff_x}</td>
            </tr>
            <tr>
              <th>Ddd x</th>
              <td>{weather.ddd_x}</td>
            </tr>
            <tr>
              <th>Ff avg</th>
              <td>{weather.ff_avg}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editWeather({ id: weather.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(weather.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Weather
