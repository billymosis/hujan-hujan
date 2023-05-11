import { DatePicker, DateValue, DatesRangeValue } from '@mantine/dates'
import { Select, MultiSelect, Button, Input } from '@mantine/core'
import { FormEvent, useState } from 'react'
import { useNavigate, createSearchParams } from 'react-router-dom';
import dayjs from 'dayjs'

const Trash = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

const defaultDate = [
  new Date('2000-01-01'),
  new Date('2021-12-31'),
] as [DateValue, DateValue]

const InputForm = ({ stations, callLocation }: { stations: stationsResponse[], callLocation: (array: number[]) => void }) => {
  const [value, setValue] = useState<string | null>(null)
  const [dateValue, setDateValue] = useState(defaultDate)
  const [typeValue, setTypeValue] = useState<string[]>([])
  const [error, setError] = useState({ stationNumber: false, dateValue: false, typeValue: false })

  const navigate = useNavigate();

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

  const selectHandler = (x: string) => {
    setValue(x)
    const myd = data
      .filter((y) => y.value === x)
      .map((x) => [x['latitude'], x['longitude']])[0]
    callLocation(myd)
  }

  const handleChangeDateValue = (val: DatesRangeValue) => {
    setError(e => ({ ...e, dateValue: false }))
    setDateValue(val);
  }

  const handleChangeSelect = (val: string) => {
    if (!val) {
      setError(e => ({ ...e, stationNumber: true }))
      return
    }
    setError(e => ({ ...e, stationNumber: false }))
    selectHandler(val)
  }

  const handleChangeType = (val: string[]) => {
    setError(e => ({ ...e, typeValue: false }))
    setTypeValue(val);
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const _error = { ...error }
    if (typeValue.length === 0) {
      setError(e => ({ ...e, typeValue: true }))
      _error.typeValue = true;
    }
    if (dateValue.some(v => !(v instanceof Date))) {
      setError(e => ({ ...e, dateValue: true }))
      _error.dateValue = true;
    }
    if (!value) {
      setError(e => ({ ...e, stationNumber: true }))
      _error.stationNumber = true;
    }
    const checkError = Object.values(_error).some(s => s)
    if (checkError) {
      return
    }
    const obj = {
      stationNumber: value || '',
      dateRange: dateValue.map((x) => dayjs(x).format('YYYY-MM-DD')).join(','),
      type: typeValue.join(','),
    }
    navigate({ pathname: 'data', search: `?&${createSearchParams(obj)}` }, { state: stations.find(f => f.station_number === Number(value)) });
  }

  const handleClear = (e: FormEvent) => {
    e.preventDefault()
    setValue(null)
    setDateValue(defaultDate)
    setTypeValue([])
    navigate('/input')
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
          onChange={handleChangeSelect}
          error={error.stationNumber ? 'Please pick weather station' : undefined}
        />
        <div className="flex justify-center items-center flex-col">
          <DatePicker
            type="range"
            minDate={dayjs(new Date('2000-01-01')).toDate()}
            maxDate={dayjs(new Date('2021-12-31')).toDate()}
            placeholder="Pick date range 2000-2021"
            value={dateValue}
            onChange={handleChangeDateValue}
            defaultDate={new Date('2021-12-31')}
          />
          {error.dateValue ? <span className="text-red-500">Please pick the dates correctly</span> : null}
        </div>
        <Input value={`${dateValue[0]?.toLocaleDateString()} - ${dateValue[1]?.toLocaleDateString()}`} readOnly />
        <MultiSelect
          required
          value={typeValue}
          onChange={handleChangeType}
          clearable
          data={dataType}
          label="Data type:"
          placeholder="Choose available data types"
          error={error.typeValue ? 'Please pick data type' : undefined}
        />
      </form>
      <div className="flex flex-row gap-2 justify-around mb-8">
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
          leftIcon={<Trash />}
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
