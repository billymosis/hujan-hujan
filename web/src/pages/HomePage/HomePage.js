import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import SingleWeatherCell from 'src/components/SingleWeatherCell'
import WeatherListCell from 'src/components/WeatherListCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
      <SingleWeatherCell id={5} />
      <WeatherListCell page={1} dataCount={5} />
    </>
  )
}

export default HomePage
