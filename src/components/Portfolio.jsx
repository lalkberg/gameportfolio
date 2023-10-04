import React from 'react'
import MarkDown from 'markdown-to-jsx'
import GetMarkdown from './GetMarkdown'
import Card from './Card'

export default function Portfolio() {
  const md = [
    'portfolio_pieces/minecraft_legends.md',
    'portfolio_pieces/unnanounced_uefn_project.md'
]

  return (
    <div className="box">
      <div className= "container">
        {CreatePortfolioCards(md)}
      </div>
    </div>
  );
}

function CreatePortfolioCards(markdownArray) {
  var reactArray = []
  for (let i = 0; i < markdownArray.length; i++) {
    const element = markdownArray[i];
    reactArray.push(
      <div className= "portfolio-card">
        <img src={require('../portfolio-images/minecraft-legends-review_aah7.jpg')}/>
        <div className= "portfolio-card-content">
          <MarkDown className="markdown">
            {GetMarkdown(element)}
          </MarkDown>
        </div>
      </div>
    )
  }
  return reactArray
}