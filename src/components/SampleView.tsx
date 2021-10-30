import { useState, VFC } from 'react'
import { Box } from '@mui/material'
import { useEffect } from 'react'
import '../css/coding.css'
import getSandBoxImage from '../utils/getSandBoxImage'
import log from '../../public/problem/p1.png'

const SampleView: VFC = () => {
  const [preview, setPreview] = useState('')
  useEffect(() => {
    console.info('プレビュー読み込み')
    /*const addData = {
      id: "9a1ics",
    };
    const { message } = await axios.post('source', req).then((res) => {
      return res.data;
    });
    console.info(message);*/
    setPreview(getSandBoxImage(0))
  }, [])

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
        <div className="preview">
          <img src={`/problem/p1.png`} alt="お手本" />
        </div>
      </Box>
    </div>
  )
}

export default SampleView
