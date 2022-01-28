import { MetaTags } from '@redwoodjs/web'
import CGraphCell from 'src/components/CGraphCell'

const TGraphPage = ({ stationNumber, type, dateRange }) => {
  const date = dateRange.split(',')
  const weatherType = type.split(',')
  const from = date[0]
  const to = date[1]
  const dummy = {
    Tanggal: true,
    ddd_car: false,
    station_number: false,
    Tn: false,
    Tx: false,
    Tavg: false,
    RH_avg: false,
    RR: false,
    ss: false,
    ff_x: false,
    ddd_x: false,
    ff_avg: false,
  }
  const weatherTypeObject = weatherType.map((x) => ({ [x]: true }))
  const weatherData = { ...dummy, ...Object.assign({}, ...weatherTypeObject) }

  console.log(from, to)
  return (
    <>
      <MetaTags title="TGraph" description="TGraph page" />
      <CGraphCell
        stationNumber={stationNumber}
        type={type}
        from={from}
        to={to}
        weatherData={weatherData}
        {...weatherData}
      />
    </>
  )
}

export default TGraphPage
