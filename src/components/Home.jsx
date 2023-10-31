import React from 'react'
import MarkDown from 'markdown-to-jsx'
import GetMarkdown from './GetMarkdown'

const Home = () => {
  const bio = 'bio.md'
  const hardSkills = 'hardskills.md'
  const softSkills = 'softskills.md'

  return (
    <div className="box">
      <div className= "container">
        <div className= "bio-card">
          <img src={require('../alkberg2.png')} alt = ""/>
            <MarkDown className="markdown">
              {GetMarkdown(bio)}
            </MarkDown>
        </div>
        <div className= "bio-card-skills">
          <div className= "hard-skills">
            <h1>HARD SKILLS</h1>
            <MarkDown className="markdown">
              {GetMarkdown(hardSkills)}
            </MarkDown>
          </div>
        </div>
        <div className= "bio-card-skills">
          <div className= "soft-skills">
            <h1>SOFT SKILLS</h1>
            <MarkDown className="markdown">
              {GetMarkdown(softSkills)}
            </MarkDown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;