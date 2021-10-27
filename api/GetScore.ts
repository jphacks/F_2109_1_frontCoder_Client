import axios from 'axios'
//import type {  } from '../types/schema'
import { API_URL } from './endpoint'

//import Cors from 'cors'
import initMiddleware from '../utils/init-middleware'

const endpoint = `${API_URL}/imgScore`

const GetScore = async (req) => {
  const data = await axios.post(endpoint, req).then((res) => {
    return res.data
  })

  return data
}

export default GetScore
