import { render } from '@redwoodjs/testing/web'

import Loading from './Loading'

describe('Loading', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Loading />)
    }).not.toThrow()
  })
})
