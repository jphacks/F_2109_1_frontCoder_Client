import React, { useState } from 'react'

const createHTML = () => {
  return { __html: '<h1>First</h1><h3>Second</h3>' }
}

type Props = {
  htmlText: string
}

// TODO: XSS攻撃対策
const PreviewComponent: React.VFC<Props> = ({ htmlText }) => {
  return (
    <div>
      <div className="preview-box">
        <span className="preview-title">Preview</span>
        <div dangerouslySetInnerHTML={{ __html: htmlText }}></div>
      </div>
    </div>
  )
}

export default PreviewComponent
