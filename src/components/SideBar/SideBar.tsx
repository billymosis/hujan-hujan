import { Button } from '@mantine/core'
import { Link } from 'react-router-dom'

type myLink = {
  route: string,
  text: string,
  setOpen: () => void
}

const MyLink = ({ route, text, setOpen }: myLink) => {
  return (
    <Link to={route} onClick={setOpen}>
      <Button className="w-full " variant="outline">
        {text}
      </Button>
    </Link>
  )
}

const SideBar = ({ setOpen }: { setOpen: () => void }) => {
  return (
    <div className="flex flex-col gap-4">
      <MyLink setOpen={setOpen} route="/" text={'Home'} />
      <MyLink setOpen={setOpen} route="/input" text={'Input'} />
      <MyLink setOpen={setOpen} route="/about" text={'About'} />
    </div>
  )
}

export default SideBar
