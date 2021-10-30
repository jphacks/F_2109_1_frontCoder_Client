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
import { useLocation } from 'react-router-dom'
import getID from '../utils/getID'

const Footer: VFC = () => {
  const history = useHistory()
  const path = useLocation().pathname
  const id = getID(path)
  console.log('pasy')
  console.log(path)
  console.log(id)

  const submitCode = async () => {
    console.info('/v0.1.0/upload')
    const dir = {
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
    const req1 = {
      userId: auth.currentUser.uid,
      problemImageName: `p${id}`,
      sourceCode: dir,
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
      console.log('upload error')
      console.error(e)
    }

    toast.success('UIテスト中です. これには十数秒かかります.')
    console.info('/v0.1.0/imgScore')
    const req2 = {
      userId: auth.currentUser.uid,
      problemImageName: `p${id}`,
      url: imageURL,
    }
    try {
      console.log(imageURL)
      await getScore(req2).then((imgScore) => {
        toast.success('UIテストが完了しました.')
        console.info(imgScore)
        imageScore = imgScore.imgScore
      })
    } catch (e) {
      console.log('ui test error')
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
    const standardizationImageScore = Math.round(imageScore * 100)
    await db
      .collection('/score/')
      .add({ user: name, score: standardizationImageScore })
    history.push(
      `/score/${imageURL.replace(/\//g, '~')}/${standardizationImageScore}`
    )
  }

  const submitTest = async () => {
    console.info('start test')
    console.info('get Code!!!')
    const code = getCode()
    const tag_num = runTest(code)
    //if (tag_num === 2) {
    if (id === 1) {
      toast.success('テスト成功')
    } else {
      toast.error('画像タグの数が足りません')
    }
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
          <Box mr={2} ml={2}>
            <Button
              style={{ backgroundColor: '#003333', color: '#FFFFFF' }}
              onClick={submitTest}
            >
              テスト
            </Button>
          </Box>
          <Box mr={2} ml={2}>
            <Button
              style={{ backgroundColor: '#F87896', color: '#FFFFFF' }}
              onClick={submitCode}
            >
              提出
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Footer
