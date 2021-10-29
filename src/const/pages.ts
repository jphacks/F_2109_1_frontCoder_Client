type Pages = {
  problemDetail: {
    label: string
    path: (id: string) => string
  }
  problemCoding: {
    label: string
    path: (id: string) => string
  }
}

export const pages: Pages = {
  problemDetail: {
    label: '問題詳細',
    path: (id: string) => `/problem/${id}/detail`,
  },
  problemCoding: {
    label: '問題回答',
    path: (id: string) => `/problem/${id}/coding`,
  },
}
