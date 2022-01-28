import { Button } from '@mantine/core'
import { Link, routes } from '@redwoodjs/router'

const MyLink = ({ route, text, setOpen }) => {
  return (
    <Link to={route} onClick={setOpen}>
      <Button className="w-full " variant="outline">
        {text}
      </Button>
    </Link>
  )
}
const SideBar = ({ setOpen }) => {
  return (
    <div className="flex flex-col gap-4">
      <MyLink setOpen={setOpen} route={routes.home()} text={'Home'} />
      <MyLink setOpen={setOpen} route={routes.input()} text={'Input'} />
      <MyLink setOpen={setOpen} route={routes.about()} text={'About'} />
    </div>
  )
}

export default SideBar
