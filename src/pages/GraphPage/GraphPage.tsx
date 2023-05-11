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
import { useEffect, useState } from 'react'
import { ExportToCsv } from 'export-to-csv'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'

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

const GraphPage = () => {
  const { data: _data, type }: { data: unknown[] } = useLoaderData();
  const { state } = useLocation();
  const navigate = useNavigate();

  const [data, setData] = useState(_data.filter((x) => x.RR !== 8888))
  const [filter, setFilter] = useState(true)

  useEffect(() => {
    if (state === null) {
      navigate('/input')
    }
  }, [state])

  const weatherType = type.split(',')
  const weatherTypeObject = weatherType.map((x) => ({ [x]: true }))
  const weatherData = { ...dummy, ...Object.assign({}, ...weatherTypeObject) }
  const dataFilter = Object.fromEntries(
    Object.entries(weatherData).filter(
      ([key, value]) => value === true && key !== 'Tanggal'
    )
  )
  const [lineFilter, setLineFilter] = useState(dataFilter)
  const station: stationsResponse = {
    station_number: state.station_number || 0,
    station_name: state.station_name || '',
    latitude: state.latitude || '',
    longitude: state.longitude || '',
  }

  const handleCheck = () => {
    if (filter) {
      setFilter(false)
      setData(_data)
    } else {
      setFilter(true)
      setData(_data.filter((x) => x.RR !== 8888))
    }
  }

  const handleLine = (key: string) => {
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
    csvExporter.generateCsv(_data)
  }

  if (_data === null) {
    return <div>No Data. Sorry!</div>
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
          </p>
          <ul>
            <li>8888 means the data is not measured.</li>
            <li>9999 means there no data or no measuring activity occurs.</li>
          </ul>
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

export default GraphPage
