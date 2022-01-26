const InputForm = ({ stations }) => {

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
