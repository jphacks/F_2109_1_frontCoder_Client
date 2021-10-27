import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      res.status(200).json({ message: 'GET' })
      break

    case 'POST':
      res.status(200).json({ message: 'POST' })
      break

    case 'PATCH':
      res.status(200).json({ message: 'PATCH' })
      break

    case 'DELETE':
      res.status(200).json({ message: 'PATCH' })
      break

    default:
      res.status(405).end()
      break
  }
}
