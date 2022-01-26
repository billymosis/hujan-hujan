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
      routes.about({
        station_number: value,
        date_range: dateValue.map((x) => dayjs(x).format('YYYY-MM-DD')),
        type: typeValue,
      })
    )
  }

  return (
    <>
      <form id="form1">
        <Select
          clearable
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
          minDate={dayjs(new Date('2000-01-01')).toDate()}
          maxDate={dayjs(new Date('2021-12-31')).toDate()}
          label="Date range:"
          placeholder="Pick date range 2000-2021"
          value={dateValue}
          onChange={setDateValue}
          clearable
        />
        <MultiSelect
          value={typeValue}
          onChange={setTypeValue}
          clearable
          data={dataType}
          label="Data type:"
          placeholder="Choose available data types"
        />
      </form>
      <Button
        onClick={(e) => handleSubmit(e)}
        form="form1"
        type="submit"
        radius="md"
        size="xl"
      >
        Submit
      </Button>
    </>
  )
}

export default InputForm
