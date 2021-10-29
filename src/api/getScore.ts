import axios from 'axios'
import { API_URL } from './endpoint'

const endpoint = `${API_URL}/v0.1.0/imgScore`

type Props = {
  url: string
}

type Response = {
  imgScore: number
  report: string
}

const getScore = async (req: Props): Promise<Response> => {
  const data = await axios.post(endpoint, req).then((res) => {
    return res.data
  })

  return data
}

export default getScore
