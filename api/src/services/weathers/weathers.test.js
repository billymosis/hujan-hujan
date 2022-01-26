import { weathers } from './weathers'

describe('weathers', () => {
  scenario('returns all weathers', async (scenario) => {
    const result = await weathers()

    expect(result.length).toEqual(Object.keys(scenario.weather).length)
  })
})
