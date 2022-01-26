import { MetaTags } from '@redwoodjs/web'
// import SingleWeatherCell from 'src/components/SingleWeatherCell'
// import WeatherListCell from 'src/components/WeatherListCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <h1> Easy Weather </h1>
      {/* <SingleWeatherCell id={5} /> */}
      {/* <WeatherListCell page={1} dataCount={5} /> */}
    </>
  )
}

export default HomePage
