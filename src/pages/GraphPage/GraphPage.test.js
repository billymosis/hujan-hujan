import { render } from '@redwoodjs/testing/web'

import TGraphPage from './TGraphPage'

describe('TGraphPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TGraphPage />)
    }).not.toThrow()
  })
})
