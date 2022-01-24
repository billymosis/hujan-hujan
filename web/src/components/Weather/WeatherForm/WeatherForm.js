import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const WeatherForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.weather?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="ddd_car"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ddd car
        </Label>
        <TextField
          name="ddd_car"
          defaultValue={props.weather?.ddd_car}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="ddd_car" className="rw-field-error" />

        <Label
          name="Tanggal"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tanggal
        </Label>
        <TextField
          name="Tanggal"
          defaultValue={props.weather?.Tanggal}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="Tanggal" className="rw-field-error" />

        <Label
          name="station_number"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Station number
        </Label>
        <NumberField
          name="station_number"
          defaultValue={props.weather?.station_number}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="station_number" className="rw-field-error" />

        <Label
          name="Tn"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tn
        </Label>
        <TextField
          name="Tn"
          defaultValue={props.weather?.Tn}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="Tn" className="rw-field-error" />

        <Label
          name="Tx"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tx
        </Label>
        <TextField
          name="Tx"
          defaultValue={props.weather?.Tx}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="Tx" className="rw-field-error" />

        <Label
          name="Tavg"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tavg
        </Label>
        <TextField
          name="Tavg"
          defaultValue={props.weather?.Tavg}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="Tavg" className="rw-field-error" />

        <Label
          name="RH_avg"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Rh avg
        </Label>
        <TextField
          name="RH_avg"
          defaultValue={props.weather?.RH_avg}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="RH_avg" className="rw-field-error" />

        <Label
          name="RR"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Rr
        </Label>
        <TextField
          name="RR"
          defaultValue={props.weather?.RR}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="RR" className="rw-field-error" />

        <Label
          name="ss"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ss
        </Label>
        <TextField
          name="ss"
          defaultValue={props.weather?.ss}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="ss" className="rw-field-error" />

        <Label
          name="ff_x"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ff x
        </Label>
        <TextField
          name="ff_x"
          defaultValue={props.weather?.ff_x}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="ff_x" className="rw-field-error" />

        <Label
          name="ddd_x"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ddd x
        </Label>
        <TextField
          name="ddd_x"
          defaultValue={props.weather?.ddd_x}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="ddd_x" className="rw-field-error" />

        <Label
          name="ff_avg"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ff avg
        </Label>
        <TextField
          name="ff_avg"
          defaultValue={props.weather?.ff_avg}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="ff_avg" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default WeatherForm
