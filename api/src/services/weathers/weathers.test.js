import { weathers, weather, deleteWeather } from './weathers'

describe('weathers', () => {
  scenario('returns all weathers', async (scenario) => {
    const result = await weathers()

    expect(result.length).toEqual(Object.keys(scenario.weather).length)
  })

  scenario('returns a single weather', async (scenario) => {
    const result = await weather({ id: scenario.weather.one.id })

    expect(result).toEqual(scenario.weather.one)
  })

  scenario('deletes a weather', async (scenario) => {
    const original = await deleteWeather({ id: scenario.weather.one.id })
    const result = await weather({ id: original.id })

    expect(result).toEqual(null)
  })
})
