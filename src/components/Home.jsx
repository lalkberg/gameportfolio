import React from 'react'
import MarkDown from 'markdown-to-jsx'
import GetMarkdown from './GetMarkdown'

const Home = () => {
  const bio = 'bio.md'

  return (
    <div className="box">
      <div className= "container">
        <div className= "bio-card">
          <img src={require('../portfolio-images/minecraft-legends-review_aah7.jpg')} alt = ""/>
            <MarkDown className="markdown">
              {GetMarkdown(bio)}
            </MarkDown>
        </div>
      </div>
    </div>
  );
};

export default Home;