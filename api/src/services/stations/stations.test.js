import { stations } from './stations'

describe('stations', () => {
  scenario('returns all stations', async (scenario) => {
    const result = await stations()

    expect(result.length).toEqual(Object.keys(scenario.station).length)
  })
})
