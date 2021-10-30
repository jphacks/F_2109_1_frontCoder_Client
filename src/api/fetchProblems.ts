import axios from 'axios'
import { Problem } from '../types/schema'
import { API_URL } from './endpoint'

const endpoint = `${API_URL}/v0.2.0/problem`

const fetchProblems = async (): Promise<Problem[]> => {
  const data = await axios.post(endpoint).then((res) => {
    return res.data.problem as Problem[]
  })

  return data
}

export default fetchProblems
