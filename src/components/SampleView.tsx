import { VFC } from 'react'
import { Box } from '@mui/material'
import { useEffect } from 'react'
import '../coding.css'

const SampleView: VFC = () => {
  useEffect(() => {
    console.info('プレビュー読み込み')
    /*const addData = {
      id: "9a1ics",
    };
    const { message } = await axios.post('source', req).then((res) => {
      return res.data;
    });
    console.info(message);*/
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
          <img src={`${window.location.origin}/p1.png`} alt="お手本" />
        </div>
      </Box>
    </div>
  )
}

export default SampleView
