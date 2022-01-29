import { MetaTags } from '@redwoodjs/web'
// import BCA from '../../assets/QRBCA_cr.jpg'
// import OVO from '../../assets/QROVO_cr.jpg'
// import GOPAY from '../../assets/QRGOPAY_cr.jpg'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" tag={false} description={false} />
      <div>
        <h1 className="font-bold text-4xl text-blue-400"> Hujan-Hujan </h1>
        <h2 className="font-semibold text-2xl text-blue-300"> data hujan </h2>
      </div>
      <div className="my-6 md:w-1/2">
        <p>
          My motivation making this site is Just for no particular reason. I got
          a lot of time before my real work start. I made this web app, fully
          operational only for 4 days. It appears to be so befuddling at first
          making this site with redwoodjs. Mainly this is my first with graphql
          and prisma framework. I understood that I downright horrendous at
          backend site, an excessive things to deal with.
        </p>
        <br />
        <p>
          Gracious no doubt! neglected to specify, This is the one that
          I&apos;ve been glad for! I completely made this site with just Neovim
          Text Editor. How cool is that. Learning unknown framework and
          polishing my VIM ability!
        </p>
        <br />
        <p>
          So the web creating process start with gathering data from BMKG site,
          I use python notebook to fetch and clean all 21 years and 190 stations
          data between 2000-2021 with 4 main libary that is requests, pandas,
          json and re (regex). Why only 21 years data? BMKG has been so bad to
          provide information which station has the data and the date range
          itself. And most engineer and SNI regulation says that 20 years data
          is enough. In the end you need to validate data with real measurement
          tho.
        </p>
        <br />
        <p>
          Done with gathering data stuff, I start with web development. And
          question popping to my head &quot;how the hell, how to fetch this
          1.454.516 or over a million data?&quot; Surely I need a server so I
          search for fullstack development framework and found redwoodjs.
        </p>
        <br />
        {/* <p> */}
        {/*   Well that is just about of about us page. To keep this website running */}
        {/*   and maintained you can donate to: */}
        {/* </p> */}
        {/* <div className="flex flex-wrap md:flex-nowrap gap-6 my-2"> */}
        {/*   <img */}
        {/*     src={GOPAY} */}
        {/*     className="w-3/4 m-auto md:w-32 md:h-32" */}
        {/*     alt="Donate Gopay" */}
        {/*   /> */}
        {/*   <img */}
        {/*     src={OVO} */}
        {/*     className="w-3/4 m-auto md:w-32 md:h-32" */}
        {/*     alt="Donate OVO" */}
        {/*   /> */}
        {/*   <img */}
        {/*     src={BCA} */}
        {/*     className="w-3/4 m-auto md:w-32 md:h-32" */}
        {/*     alt="Donate BCA" */}
        {/*   /> */}
        {/* </div> */}
        <h3 className="font-semibold text-lg mt-4">Source & Credit: </h3>
        <ul>
          <li>
            This github repo:{' '}
            <a href="https://github.com/billymosis/hujan-hujan">Github</a>
          </li>
          <li>
            BMKG DATA: <a href="http://dataonline.bmkg.go.id/">BMKG</a>
          </li>
          <li>
            Jupyter Notebook Fetching Source:{' '}
            <a href="https://colab.research.google.com/drive/1jbZ2bewpu0OJUc0aj_8wKn-i0UiIe8gX?usp=sharing">
              Google Colab
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default AboutPage
