import { VFC } from 'react'
import { useStopwatch } from 'react-timer-hook'

const StopWatch: VFC = () => {
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: true })

  return (
    <div style={{ textAlign: 'center', flex: 'display', flexDirection: 'row' }}>
      <div style={{ fontSize: '25px', color: 'black' }}>
        <span>{('0' + hours).slice(-2)}</span>:
        <span>{('0' + minutes).slice(-2)}</span>:
        <span>{('0' + seconds).slice(-2)}</span>
      </div>
    </div>
  )
}

export default StopWatch
