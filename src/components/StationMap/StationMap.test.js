import { render } from '@redwoodjs/testing/web'

import StationMap from './StationMap'

describe('StationMap', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StationMap />)
    }).not.toThrow()
  })
})
