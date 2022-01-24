import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import WeatherForm from 'src/components/Weather/WeatherForm'

export const QUERY = gql`
  query EditWeatherById($id: Int!) {
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
const UPDATE_WEATHER_MUTATION = gql`
  mutation UpdateWeatherMutation($id: Int!, $input: UpdateWeatherInput!) {
    updateWeather(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ weather }) => {
  const [updateWeather, { loading, error }] = useMutation(
    UPDATE_WEATHER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Weather updated')
        navigate(routes.weathers())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateWeather({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Weather {weather.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <WeatherForm
          weather={weather}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
