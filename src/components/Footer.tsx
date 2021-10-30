import { VFC } from 'react'
import { toast } from 'react-toastify'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import getScore from '../api/getScore'
import closeProblem from '../api/closeProblem'
import uploadFile from '../api/uploadFile'
import { useHistory } from 'react-router'
import StopWatch from './StopWatch'
import getCode from '../utils/getCode'
import { db, auth } from '../config/firebase'
import runTest from '../utils/runTest'

const Footer: VFC = () => {
  const history = useHistory()
  const submitCode = async () => {
    console.info('/v0.1.0/upload')
    const req1 = {
      source_code: {
        dirName: '/',
        file: [
          {
            fileName: 'index.html',
            code: '<h1>プレビュー</h1>',
          },
        ],
        dir: [
          {
            dirName: '/src',
            file: [
              {
                fileName: 'style.css',
                code: '/*cssをここに書いてね*/',
              },
            ],
          },
        ],
      },
    }
    let imageURL = ''
    let imageScore = 0
    try {
      await uploadFile(req1).then((_url) => {
        toast.success('ソースコードのアップロードが完了しました.')
        imageURL = _url.url
        console.info(imageURL)
      })
    } catch (e) {
      console.error(e)
    }

    console.info('/v0.1.0/imgScore')
    const req2 = {
      url: 'https://dev.d2evtgvttl8fuv.amplifyapp.com/p1.png',
    }
    try {
      await getScore(req2).then((imgScore) => {
        toast.success('UIテストが完了しました.')
        console.info(imgScore)
        imageScore = imgScore.imgScore
      })
    } catch (e) {
      console.error(e)
    }

    console.info('/v0.1.0/close')

    const req3 = {
      id: '9a1ics',
    }
    try {
      await closeProblem(req3).then((message) => {
        toast.success('問題の回答が完了しました.')
        console.info(message)
      })
    } catch (e) {
      console.error(e)
    }

    const name = auth.currentUser?.displayName ?? `名無しさん`

    db.collection('/score/').add({ user: name, score: imageScore })
    history.push(`/score/${imageURL.replace(/\//g, '~')}/${imageScore}`)
  }

  const submitTest = async () => {
    console.info('start test')
    console.info('get Code!!!')
    const code = getCode()
    const tag_num = runTest(code)
    //if (tag_num === 2) {
    toast.error('画像タグの数が足りません')
    //}
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
          <StopWatch />
          <Box mr={1} ml={1}>
            <Button
              style={{ backgroundColor: '#F87896', color: '#FFFFFF' }}
              onClick={submitCode}
            >
              提出
            </Button>
          </Box>
          <Button
            style={{ backgroundColor: '#98fb98', color: '#FFFFFF' }}
            onClick={submitTest}
          >
            テスト
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Footer
