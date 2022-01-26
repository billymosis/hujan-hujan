import { render } from '@redwoodjs/testing/web'

import SideBar from './SideBar'

describe('SideBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SideBar />)
    }).not.toThrow()
  })
})
