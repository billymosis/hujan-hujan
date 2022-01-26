import { render } from '@redwoodjs/testing/web'

import InputForm from './InputForm'

describe('InputForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InputForm />)
    }).not.toThrow()
  })
})
