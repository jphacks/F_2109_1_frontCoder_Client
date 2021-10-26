import * as client from './client'
import { Dir } from '../types/schema'

export type AnswearRequest = {
  source_code: Dir[]
  browser: string
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

export const postAnswers = async function (
  data: contentsPostInterface
): Promise<any> {
  try {
    //const user: User | null = getCurrentUser()
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/1/article/create`
    if (user) {
      const idToken = await user.getIdToken(true)
      data.publisherId = user.uid
      const bufMarkDown = turndownService.turndown(data.body)
      data.bodyRaw = JSON.parse(data.bodyRaw)
      data.body = bufMarkDown
      return axios(apiUrl, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${idToken}`,
        },
        data,
      }).then((response) => {
        return response.data
      })
    } else {
      return
    }
  } catch (e: any) {
    return e
  }
}
