// 問題IDがバックエンドとCodesandBOXで違うので、フロント側で矯正する。
const switchID = (id: number) => {
  const sandbox_id = [
    'wen-ti-1-m2z2x',
    'wen-ti-2-ic2xq',
    'wen-ti-3-tppk2',
    'wen-ti-4-801p6',
    'wen-ti-5-tp853',
    'wen-ti-6-c53yy',
    'wen-ti-7-iok6r',
    'wen-ti-8-izbrm',
    'wen-ti-9-5s6e7',
    'wen-ti-10-nhuu2',
  ]

  return sandbox_id[id]
}

export default switchID
