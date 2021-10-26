import * as client from './client'
import { Problem } from '../types/schema'

/**
 * wip api.
 */

export const getProblem = async (req: {}): Promise<Problem> => {
  const res = await client.get<Problem>('/problem')
  return res
}
