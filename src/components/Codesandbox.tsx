import { VFC } from 'react'
import { useLocation } from 'react-router'
import getID from '../utils/getID'

import switchID from '../utils/switchID'
import getCode from '../utils/getCode'

const Codesandbox: VFC = () => {
  const path = useLocation().pathname
  const id = getID(path)
  console.info(path)
  console.info(id)

  getCode()

  return (
    <iframe
      src={`https://codesandbox.io/embed/${switchID(
        1
      )}?fontsize=14&hidenavigation=1&theme=light&file=index.html`}
      className="iframe-coding"
      title={`FrontCoder 問題2`}
      id="iframe-codesandbox"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  )
}

export default Codesandbox
