import { BsTrash2 } from 'react-icons/bs'
import { DateRangePicker } from '@mantine/dates'
import { Select, MultiSelect, Button } from '@mantine/core'
import { useState } from 'react'
import dayjs from 'dayjs'
import { navigate, routes } from '@redwoodjs/router'

const InputForm = ({ stations, callLocation }) => {
  const [value, setValue] = useState(null)
  const [dateValue, setDateValue] = useState([
    new Date('2000-01-01'),
    new Date('2021-12-31'),
  ])
  const [typeValue, setTypeValue] = useState([])
  const data = stations.map((x) => ({
    label: x['station_name'],
    value: x['station_number'].toString(),
    latitude: x['latitude'],
    longitude: x['longitude'],
  }))

  const dataType = [
    { value: 'Tn', label: 'Temperatur minimum (Tn)' },
    { value: 'Tx', label: 'Temperatur maksimum (Tx)' },
    { value: 'Tavg', label: 'Temperatur rata-rata (Tavg)' },
    { value: 'RH_avg', label: 'Kelembapan rata-rata (RH_avg)' },
    { value: 'RR', label: 'Curah hujan (RR)' },
    { value: 'ss', label: 'Lamanya penyinaran matahari (ss)' },
    { value: 'ff_x', label: 'Kecepatan angin maksimum (ff_x)' },
    { value: 'ddd_x', label: '  Arah angin saat kecepatan maksimum (ddd_x)' },
    { value: 'ff_avg', label: 'Kecepatan angin rata-rata (ff_avg)' },
    { value: 'ddd_car', label: 'Arah angin terbanyak (ddd_car)' },
  ]

  const selectHandler = (x) => {
    setValue(x)
    const myd = data
      .filter((y) => y.value == x)
      .map((x) => [x['latitude'], x['longitude']])[0]
    callLocation(myd)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(
      routes.tGraph({
        stationNumber: value,
        dateRange: dateValue.map((x) => dayjs(x).format('YYYY-MM-DD')),
        type: typeValue,
      })
    )
  }

  const handleClear = (e) => {
    e.preventDefault()
    setValue('')
    setDateValue(null)
    setTypeValue([])
  }

  return (
    <div className="flex flex-col gap-4">
      <form id="form1" className="flex flex-col gap-4">
        <Select
          clearable
          required
          label="Choose weather station"
          placeholder="Choose One"
          data={data.map(({ label, value }) => ({
            label: label,
            value: value,
          }))}
          searchable
          nothingFound="Data not available"
          value={value}
          onChange={(x) => selectHandler(x)}
        />
        <DateRangePicker
          required
          minDate={dayjs(new Date('2000-01-01')).toDate()}
          maxDate={dayjs(new Date('2021-12-31')).toDate()}
          label="Date range:"
          placeholder="Pick date range 2000-2021"
          value={dateValue}
          onChange={setDateValue}
          clearable
        />
        <MultiSelect
          required
          value={typeValue}
          onChange={setTypeValue}
          clearable
          data={dataType}
          label="Data type:"
          placeholder="Choose available data types"
        />
      </form>
      <div className="flex flex-row gap-2 justify-around">
        <Button
          className="bg-blue-500 w-full"
          onClick={(e) => handleSubmit(e)}
          form="form1"
          type="submit"
          radius="md"
          size="xl"
        >
          Submit
        </Button>
        <Button
          leftIcon={<BsTrash2 />}
          className="hover:bg-blue-50"
          onClick={(e) => handleClear(e)}
          type="reset"
          radius="md"
          size="xl"
          variant="outline"
        >
          Clear
        </Button>
      </div>
    </div>
  )
}

export default InputForm
