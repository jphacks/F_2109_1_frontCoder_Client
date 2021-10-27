/* eslint-disable @next/next/no-img-element */
import { VFC } from 'react'
import { Card, CardContent, Divider, Box } from '@mui/material'
import sample from '../public/sample-screen.png'
import { useEffect } from 'react'
import postAnswear from '../api/answear'

const SampleView: VFC = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          height: '100%',
          overflow: 'scroll',
          pl: 1,
          pr: 1,
        }}
      >
        <img
          src="https://i.pinimg.com/originals/7d/fb/73/7dfb7328490e40dc892c9bf3f7e09ddc.jpg"
          alt="お手本"
          width="350px"
          height="1000px"
        />
      </Box>
    </div>
  )
}

export default SampleView
