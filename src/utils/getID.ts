const getID = (path: string) => {
  return Number(path.slice(-8, -7))
}

export default getID
