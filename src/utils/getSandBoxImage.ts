const getSandBoxImage = (id: number) => {
  const user_image =
    'https://uploads.codesandbox.io/uploads/user/306a2e3a-686f-40b1-88cc-0fa7ff187339/'
  const img_name = ['Cl66-bgSec04.jpg', '', '', '', '', '', '', '', '', '']
  return user_image + img_name[id]
}

export default getSandBoxImage
