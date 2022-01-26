import { render } from '@redwoodjs/testing/web'

import BGraph from './BGraph'

describe('BGraph', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BGraph />)
    }).not.toThrow()
  })
})
