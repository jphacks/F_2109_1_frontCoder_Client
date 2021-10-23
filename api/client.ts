type EmptyObject = Record<string, never>
/* TODO */
const PATH_PREFIX = `https://xxxxxxxxxxx/api`

export async function get<Response = EmptyObject>(
  path: string
): Promise<Response> {
  const url = new URL(PATH_PREFIX + path)
  const res = await fetch(url.toString(), {
    method: 'GET',
  })
  return await res.json()
}

export async function post<Body = EmptyObject, Response = EmptyObject>(
  path: string,
  body: Body = {} as Body
): Promise<Response> {
  const res = await fetch(PATH_PREFIX + path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(body),
  })
  return await res.json()
}
