import React, { useState } from 'react'
import ReactAce, {
  Theme,
  theme,
  LanguageMode,
  languageMode,
  keyBind,
  KeyBind,
} from './aceInternal'
import { createAnswear } from '../../api/answear'

type EditorText = { [P in LanguageMode]: string }

const AceComponent: React.FC = () => {
  const initialHTMLInput = '<!-- ここにHTMLを入力してください -->'
  const initialCSSInput = '/* ここにCSSを入力してください */'
  const initialJavascriptInput = '/* ここにJavaScriptを入力してください */'

  const [editorText, setEditorText] = useState<EditorText>({
    html: initialHTMLInput,
    css: initialCSSInput,
    javascript: initialJavascriptInput,
  })

  const [_theme, setTheme] = useState<Theme>(theme.terminal)
  const [_languageMode, setMode] = useState<LanguageMode>(languageMode.html)
  const [_keyBind, setKeyBind] = useState<KeyBind>(keyBind.vscode)

  const onEditorTextChange = (changedText: string) => {
    editorText[_languageMode] = changedText
    setEditorText(editorText)
  }

  const onThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as Theme)
  }

  const onLanguageModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMode(e.target.value as LanguageMode)
  }

  const onKeyBindChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setKeyBind(e.target.value as KeyBind)
  }

  const onSend = () => {
    // TODO: 確認msg的なものを入れたい.
    createAnswear(editorText)
  }

  return (
    <>
      <h2>Ace Editor だよ</h2>
      <div>
        theme
        <select name="theme" onChange={onThemeChange}>
          {Object.keys(theme).map((t) => {
            return (
              <>
                <option value={t}>{t}</option>
              </>
            )
          })}
        </select>
      </div>
      <div>
        languageMode
        <select name="languageMode" onChange={onLanguageModeChange}>
          {Object.keys(languageMode).map((t) => {
            return (
              <>
                <option value={t}>{t}</option>
              </>
            )
          })}
        </select>
      </div>
      <div>
        keybind
        <select name="keybind" onChange={onKeyBindChange}>
          {Object.keys(keyBind).map((t) => {
            return (
              <>
                <option value={t}>{t}</option>
              </>
            )
          })}
        </select>
      </div>
      <div>
        <button onClick={onSend}>send!</button>
      </div>
      <ReactAce
        onChange={onEditorTextChange}
        value={editorText[_languageMode]}
        theme={_theme}
        mode={_languageMode}
        keyboardHandler={_keyBind}
      ></ReactAce>
    </>
  )
}

export default AceComponent
