import type { NextPage } from 'next'
import PreviewComponent from '../component/previewComponent/preview'
import AceComponent from '../component/aceComponent/ace'

import html from '../data/webpage1/index.html'

const Home: NextPage = () => {
  return (
    <>
      <AceComponent></AceComponent>
      <div>Hel lo world</div>
      <PreviewComponent htmlText={html}></PreviewComponent>
    </>
  )
}

export default Home
