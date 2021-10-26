import type { NextPage } from 'next'
import { VFC } from 'react'
import Header from '../component/Header'

const Submit: VFC = () => {
  return (
    <div>
      <Header />
      <iframe
        src="https://codesandbox.io/embed/frontcoder-sample1-5z2x6?fontsize=14&hidenavigation=1&theme=light"
        className="iframe-coding"
        title="FrontCoder-sample1"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </div>
  )
}

export default Submit
