import axios from 'axios'
import { API_URL } from './endpoint'

// const endpoint = `${API_URL}/v0.1.0/upload`
const endpoint = `https://frontcoder.net/v0.2.0/upload`

type Props = {
  userId: string
  problemImageName: string
  sourceCode: any
}

type Response = {
  url: string
}

// HACK: 構造が再帰的なため、一旦 any で凌ぐ
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
const uploadFile = async (req: Props): Promise<Response> => {
  const data = await axios.post(endpoint, req).then((res) => {
    return res.data
  })

  return data
}

export default uploadFile
