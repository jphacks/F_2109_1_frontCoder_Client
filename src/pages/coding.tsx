import { VFC } from 'react'
import Footer from '../components/Footer'
import { Box } from '@mui/material'
import Codesandbox from '../components/Codesandbox'
import SampleView from '../components/SampleView'

import '../css/coding.css'

const Coding: VFC = () => {
  return (
    <div>
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
