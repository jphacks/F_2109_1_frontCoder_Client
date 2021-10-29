import axios from 'axios'

import { API_URL } from './endpoint'

const endpoint = `${API_URL}/v0.1.0/close`

type Props = {
  id: string
}

// TODO: 後で使うやつ？用途ど忘れしたので後で確認 by yoshikatsu
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
const closeProblem = async (req: Props): Promise<any> => {
  const data = await axios.post(endpoint, req).then((res) => {
    return res.data
  })

  return data
}

export default closeProblem
