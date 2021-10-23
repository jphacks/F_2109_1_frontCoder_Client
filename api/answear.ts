import * as client from './client'

export type AnswearRequest = {
  html: string
  css: string
  javascript: string
}

export type AnswearResponse = {
  url: string
  imgScore: number
}

export const createAnswear = async (
  ans: AnswearRequest
): Promise<AnswearResponse> => {
  const res = await client.post<AnswearRequest, AnswearResponse>(
    '/answear',
    ans
  )
  return res
}
