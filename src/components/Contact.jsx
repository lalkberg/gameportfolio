import React from 'react'
import MarkDown from 'markdown-to-jsx'
import GetMarkdown from './GetMarkdown'

export default function Contact() {
  const md = 'contact.md'

  return (
    <div className="box">
      <div className= "container">
        <MarkDown className="markdown">
          {GetMarkdown(md)}
        </MarkDown>
      </div>
    </div>
  );
}
