import * as client from './client'

/**
 * wip api.
 */

type Problem = {
  id: number
  image: string[]
  source_code: string
  created_at: Date
  updated_at: Date
}

export const getProblem = async (req: {}): Promise<Problem> => {
  const res = await client.get<Problem>('/problem')
  return res
}
