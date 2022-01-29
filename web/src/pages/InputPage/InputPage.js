import { MetaTags } from '@redwoodjs/web'
import InputCell from 'src/components/InputCell'
const InputPage = () => {
  return (
    <>
      <MetaTags title="Input data hujan" tag={false} description={false} />
      <InputCell className="m-10" />
    </>
  )
}

export default InputPage
