import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" tag={false} description={false} />
      <div>
        <h1 className="font-bold text-4xl text-blue-400"> Hujan-Hujan </h1>
        <h2 className="font-semibold text-2xl text-blue-300"> data hujan </h2>
      </div>
      <div className="my-6">
        <p>Hi! are you looking for Indonesia station rainfall data?</p>
        <p>You come at the right place!</p>
        <p>🌧☔</p>
      </div>
      <div className="my-6">
        <p>
          Just go to Input page on the side menu, It will take you to
          interactive station data input.
        </p>
        <p>Choose the data that you need within valid date range.</p>
        <p>Peek the graph, and Download it to CSV!</p>
      </div>
    </>
  )
}

export default HomePage
