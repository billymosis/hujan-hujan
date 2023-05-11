import { render } from '@redwoodjs/testing/web'

import InputPage from './InputPage'

describe('InputPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InputPage />)
    }).not.toThrow()
  })
})
