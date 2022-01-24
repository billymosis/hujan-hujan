import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import WeatherForm from 'src/components/Weather/WeatherForm'

const CREATE_WEATHER_MUTATION = gql`
  mutation CreateWeatherMutation($input: CreateWeatherInput!) {
    createWeather(input: $input) {
      id
    }
  }
`

const NewWeather = () => {
  const [createWeather, { loading, error }] = useMutation(
    CREATE_WEATHER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Weather created')
        navigate(routes.weathers())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createWeather({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Weather</h2>
      </header>
      <div className="rw-segment-main">
        <WeatherForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewWeather
