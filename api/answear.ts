import * as client from './client'
import axios from 'axios'
import type { Dir } from '../types/schema'

import htmlFile from '../data/sample1/index.html'
//import cssFile from '../data/sample1/src/style.css'
//import jsFile from '../data/sample1/src/index.js'

export type uploadAnswearRequest = {
  source_code: Dir
  browser: string
}

export type uploadAnswearResponse = {
  url: string
}

export const sendAnswear = async (sourceCode) => {
  console.info('start send answer')
  const endPoint = `${process.env.NEXT_PUBLIC_API_URL}/v0.1.0/upload`

  try {
    //const sourceCode = new FormData()

    //sourceCode.append('source_code', htmlFile)
    //sourceCode.append('/src/style.css', cssFile)
    //sourceCode.append('/src/index.js', jsFile)
    //sourceCode.append('browser', 'chrome')

    return axios
      .post(endPoint, sourceCode, {
        headers: { 'content-type': 'multipart/form-data' },
      })
      .then((response) => {
        console.info(response.data)
        return response.data
      })
  } catch (e) {
    return e
  }
}

export const getScore = async (req) => {
  console.info('start')
  const endPoint = `${process.env.NEXT_PUBLIC_API_URL}/v0.1.0/imgScore`

  try {
    return axios.post(endPoint, req).then((response) => {
      console.info(response.data)
      return response.data
    })
  } catch (e) {
    return e
  }
}

export const closeProblem = async (req) => {
  console.info('start')
  const endPoint = `${process.env.NEXT_PUBLIC_API_URL}/v0.1.0/close`

  try {
    return axios.post(endPoint, req).then((response) => {
      console.info(response.data)
      return response.data
    })
  } catch (e) {
    return e
  }
}
