import { VFC } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import { Box } from '@mui/material'
import Codesandbox from './components/Codesandbox'
import SampleView from './components/SampleView'

import './coding.css'

const Coding: VFC = () => {
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

export default Coding
