import axios from 'axios'
import { API_URL } from './endpoint'

const endpoint = `${API_URL}/v0.1.0/imgScore`

type Props = {
  url: string
}

const getScore = async (req: Props) => {
  const data = await axios.post(endpoint, req).then((res) => {
    return res.data
  })

  return data
}

export default getScore
