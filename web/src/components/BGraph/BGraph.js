import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { Button, Checkbox } from '@mantine/core'
import { useState } from 'react'
import { ExportToCsv } from 'export-to-csv'

const BGraph = ({ station, weatherData, weatherDataType }) => {
  const [data, setData] = useState(weatherData.filter((x) => x.RR !== 8888))
  const [filter, setFilter] = useState(true)
  const dataFilter = Object.fromEntries(
    Object.entries(weatherDataType).filter(
      ([key, value]) => value === true && key !== 'Tanggal'
    )
  )
  const [lineFilter, setLineFilter] = useState(dataFilter)

  const handleCheck = () => {
    if (filter) {
      setFilter(false)
      setData(weatherData)
    } else {
      setFilter(true)
      setData(weatherData.filter((x) => x.RR !== 8888))
    }
  }

  const handleLine = (key) => {
    setLineFilter({ ...lineFilter, [key]: !lineFilter[key] })
  }

  const handleDownload = () => {
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      showTitle: true,
      title:
        'Table generated! Please remove unused column and replace all 8888 9999 or null value to whatever you want. Buy me a burger?',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
    }

    const csvExporter = new ExportToCsv(options)
    csvExporter.generateCsv(weatherData)
  }
  return (
    <>
      <span className="flex justify-between">
        <span className="font-bold">{station.station_name}</span>
        <div className="grid md:grid-cols-3 gap-2">
          <code className="bg-gray-100 rounded-md p-1 mx-2">
            Latitude: {station.latitude}
          </code>
          <code className="bg-gray-100 rounded-md p-1 mx-2">
            Longitude: {station.longitude}
          </code>
          <code className="bg-gray-100 rounded-md p-1 mx-2">
            Elevation: {station.Elevation ? station.Elevation : 'No Data'}
          </code>
        </div>
      </span>
      <ResponsiveContainer width="100%" height={300} className="mb-6">
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          {Object.entries(lineFilter).map(([key, value], i) => (
            <Line dot={false} dataKey={key} key={i} hide={!value} />
          ))}
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="Tanggal" interval="preserveStartEnd" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex flex-col gap-4 justify-around md:flex-row">
        <div className="">
          <span className="block">Line control: </span>
          <div className="grid grid-cols-2  gap-2">
            {Object.entries(lineFilter).map(([key, value], i) => {
              return (
                <Checkbox
                  label={key}
                  checked={value}
                  onChange={() => handleLine(key)}
                  key={i}
                />
              )
            })}
          </div>
        </div>
        <div>
          <p className="text-sm">
            Some data from BMKG had special value.
            <ul>
              <li>8888 means the data is not measured.</li>
              <li>9999 means there no data or no measuring activity occurs.</li>
            </ul>
          </p>
          <p className="text-sm">
            This checkbox below hide 8888 and 9999 value from series.
          </p>
          <Checkbox
            className="mt-4"
            checked={filter}
            label="Filter unknown data"
            onChange={handleCheck}
          />
        </div>
        <div>
          <span>Label:</span>
          <ul className="text-xs">
            <li>Tn: Temperatur minimum (°C) </li>
            <li>Tx: Temperatur maksimum (°C)</li>
            <li>Tavg: Temperatur rata-rata (°C)</li>
            <li>RH_avg: Kelembapan rata-rata (%)</li>
            <li>RR: Curah hujan (mm)</li>
            <li>ss: Lamanya penyinaran matahari (jam)</li>
            <li>ff_x: Kecepatan angin maksimum (m/s)</li>
            <li>ddd_x: Arah angin saat kecepatan maksimum (°)</li>
            <li>ff_avg: Kecepatan angin rata-rata (m/s)</li>
            <li>ddd_car: Arah angin terbanyak (°)</li>
          </ul>
        </div>
        <div className="m-auto my-4">
          <Button onClick={handleDownload} className="bg-blue-500" size="xl">
            Download
          </Button>
        </div>
      </div>
    </>
  )
}

export default BGraph
