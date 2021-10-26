import type { NextPage } from 'next'
import PreviewComponent from '../component/previewComponent/preview'
import AceComponent from '../component/aceComponent/ace'

//import html from '../data/webpage1/index.html'

const Home: NextPage = () => {
  return (
    <>
      <AceComponent></AceComponent>
      <div>Hel lo world</div>
      <PreviewComponent
        htmlText={`<p><a href="http://jsdf.co">&hearts; nice job!</a></p>`}
      ></PreviewComponent>
    </>
  )
}

export default Home
