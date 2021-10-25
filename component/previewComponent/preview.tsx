import React, { useState } from 'react'

const createHTML = () => {
  return { __html: '<h1>First</h1><h3>Second</h3>' }
}

// TODO: XSS攻撃対策
const PreviewComponent: React.VFC = () => {
  return (
    <div>
      <div className="preview-box">
        <span className="preview-title">Preview</span>
        <div dangerouslySetInnerHTML={createHTML()}></div>
      </div>
    </div>
  )
}

export default PreviewComponent
