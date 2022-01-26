import { Button } from '@mantine/core'
import { Link, routes } from '@redwoodjs/router'

const MyLink = ({ route, text }) => {
  return (
    <Link to={route}>
      <Button className="w-full" variant="filled">
        {text}
      </Button>
    </Link>
  )
}
const SideBar = () => {
  return (
    <>
      <MyLink route={routes.home()} text={'Home'} />
      {/* <MyLink route={routes.about()} text={'About'} /> */}
      <MyLink route={routes.input()} text={'Input'} />
      <MyLink route={routes.tGraph()} text={'Graph'} />
    </>
  )
}

export default SideBar
