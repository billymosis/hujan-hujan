import { useState } from "react"
import InputForm from "../../components/InputForm/InputForm"
import StationMap from "../../components/StationMap/StationMap"
import { useLoaderData } from "react-router-dom"

const InputPage = () => {
  const data  = useLoaderData() as stationsResponse[];
  const [location, setLocation] = useState<null | number[]>(null)
  const stations: stationsResponse[] = data || [];

  return (
    <div className="flex flex-col-reverse md:flex-row md:flex-nowrap gap-4 h-full">
      <div className="gap-4 md:w-1/4">
        <InputForm stations={stations} callLocation={setLocation} />
      </div>
      <div className="shadow-2xl w-full h-64 md:h-full relative z-0">
        <StationMap stations={stations} location={location} />
      </div>
    </div>
  )
}

export default InputPage
