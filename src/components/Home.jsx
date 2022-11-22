import React from 'react'
import MarkDown from 'markdown-to-jsx'
import GetMarkdown from './GetMarkdown'

const Home = () => {
  const md = 'home.md'

  return (
    <div className="box">
      <div className= "container">
        <MarkDown className="markdown">
          {GetMarkdown(md)}
        </MarkDown>
      </div>
    </div>
  );
};

export default Home;