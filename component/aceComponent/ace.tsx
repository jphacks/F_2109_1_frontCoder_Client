import React, { FC, useState } from 'react'
import ReactAce, { themes } from './aceInternal'

const AceComponent: React.FC = () => {
  const [editorText, setEditorText] = useState('')
  const [currentTheme, setTheme] = useState(themes.terminal)

  const onEditorTextChange = (changedText: string) => {
    setEditorText(changedText)
  }

  const onThemeChange = () => {}

  const onSend = () => {
    // TODO: Serverへのrequest処理
  }

  return (
    <>
      <h2>Ace Editor だよ</h2>
      <button onClick={onSend}>send!</button>
      <ReactAce
        onChange={onEditorTextChange}
        value={editorText}
        theme={currentTheme}
      ></ReactAce>
    </>
  )
}

export default AceComponent
