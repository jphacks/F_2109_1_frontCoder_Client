import { VFC, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import GetScore from '../api/GetScore'
//import { sendAnswear, getScore, closeProblem } from '../api/answear'

const Footer: VFC = () => {
  //const [holidays, setHolidays] = useState([])
  const submitCode = async () => {
    const addData = {
      url: 'https://www.tokyo-gas.co.jp/paccho/_assets/images/item/wall_paper/distribution/android_1080x1920/ao_android_1080x1920.jpg',
    }
    console.info('submit')
    //await getScore(addData)
    await GetScore(addData)
    /*const addData = {
      id: '9a1ics',
    }
    const { message } = await closeProblem(addData)
    console.info(message)*/
    //const sourceCode = new FormData()
    //sourceCode.append('source_code', htmlFile)

    //await sendAnswear(sourceCode)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          top: 'auto',
          bottom: 0,
        }}
        style={{
          backgroundColor: '#FFFFFF',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            style={{ backgroundColor: '#F87896', color: '#FFFFFF' }}
            onClick={submitCode}
          >
            提出
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Footer
