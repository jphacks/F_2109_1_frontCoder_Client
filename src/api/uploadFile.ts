import axios from 'axios'
import { API_URL } from './endpoint'
import { Dir } from '../types/schema'

const endpoint = `${API_URL}/v0.1.0/upload`

type Props = {
  sourceCode: Dir
  browser: string
}

const uploadFile = async (req: any) => {
  const data = await axios.post(endpoint, req).then((res) => {
    return res.data as Props
  })

  return data
}

export default uploadFile
