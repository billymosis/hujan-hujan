import { Button } from '@mantine/core'
import { Link, routes } from '@redwoodjs/router'

const MyLink = ({ route, text }) => {
  return (
    <Link to={route}>
      <Button className="w-full " variant="outline">
        {text}
      </Button>
    </Link>
  )
}
const SideBar = () => {
  return (
    <div className="flex flex-col gap-4">
      <MyLink route={routes.home()} text={'Home'} />
      <MyLink route={routes.input()} text={'Input'} />
      <MyLink route={routes.about()} text={'About'} />
    </div>
  )
}

export default SideBar
