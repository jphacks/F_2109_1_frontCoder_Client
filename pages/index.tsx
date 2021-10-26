import type { NextPage } from 'next'
import Button from '@mui/material/Button'
import Login from '../pages/login'

const Home: NextPage = () => {
  return (
    <div>
      Hel lo world
      <Button variant="contained">ボタン</Button>
      <Button variant="contained" onClick={Login}>
        ログイン画面に行こうze
      </Button>
    </div>
  )
}

export default Home
