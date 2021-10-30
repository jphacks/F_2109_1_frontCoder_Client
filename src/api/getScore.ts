import axios from 'axios'
import { API_URL } from './endpoint'

const endpoint = `https://frontcoder.net/v0.2.0/imgScore`

type Props = {
  userId: string
  problemImageName: string
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
