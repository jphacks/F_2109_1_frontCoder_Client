import type { NextPage } from 'next'
import { VFC } from 'react'

import DescriptionCard from '../component/DescriptionCard'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { AppBar } from '@mui/material'
import Codesandbox from '../component/Codesandbox'

const Submit: VFC = () => {
  return (
    <div>
      <Header />
      <main>
        {/*<DescriptionCard />*/}
        <Codesandbox />
      </main>
      <Footer />
    </div>
  )
}

export default Submit
