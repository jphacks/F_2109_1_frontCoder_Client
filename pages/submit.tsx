import type { NextPage } from 'next'
import { VFC } from 'react'

import DescriptionCard from '../component/DescriptionCard'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { AppBar, Box } from '@mui/material'
import Codesandbox from '../component/Codesandbox'
import SampleView from '../component/SampleView'

const Submit: VFC = () => {
  return (
    <div>
      <Header />
      <main>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            p: 1,
            m: 1,
            height: '82vh',
          }}
        >
          {/*<DescriptionCard />*/}
          <Codesandbox />
          <SampleView />
        </Box>
      </main>
      <Footer />
    </div>
  )
}

export default Submit
