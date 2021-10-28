export type FileType = {
  fileName: string
  code: string
}

export type Dir = {
  dirName: string
  file: FileType[]
  dir: Dir[] | undefined
}

export type Problem = {
  id: number
  title: string
  discription: string
  image: string
  source_code: Dir
  created_at: Date
  updated_at: Date
}
