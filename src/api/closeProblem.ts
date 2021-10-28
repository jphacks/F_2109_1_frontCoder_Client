import axios from 'axios'

import { API_URL } from './endpoint'

const endpoint = `${API_URL}/v0.1.0/close`

type Props = {
  id: string
}

// TODO: 後で使うやつ？用途ど忘れしたので後で確認 by yoshikatsu
const closeProblem = async (req: Props) => {
  const data = await axios.post(endpoint, req).then((res) => {
    return res.data
  })

  return data
}

export default closeProblem
