import { VFC } from 'react'
import { useLocation } from 'react-router'

import switchID from '../utils/switchID'

const Codesandbox: VFC = () => {
  const path = useLocation()
  const id: number = path.pathname.slice(-8, -6)
  console.info(path)
  console.info(id)

  return (
    <iframe
      src={`https://codesandbox.io/embed/${switchID(
        1
      )}?fontsize=14&hidenavigation=1&theme=light`}
      className="iframe-coding"
      title={`FrontCoder 問題${id + 1}`}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  )
}

export default Codesandbox
