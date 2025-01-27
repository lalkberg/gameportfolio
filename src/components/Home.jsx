import React from 'react'
import MarkDown from 'markdown-to-jsx'
import GetMarkdown from './GetMarkdown'
import GetProficiency from './Proficiency';

const Home = () => {
  const bio = 'bio.md'
  const hardSkills = 'hardskills.md'
  const softSkills = 'softskills.md'
  const softwareProficiency = 'softwareproficiency.md'

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
        <div className= "bio-card-skills">
          <div className= "software-proficiency">
            <h1>SOFTWARE PROFICIENCY</h1>
            <div className= "proficiency-container">
              {GetProficiency("Unity Engine", "U_Cube_1C_White.png", "Skilled")}
              {GetProficiency("Unreal Engine", "UE-Icon-2023-White.png", "Skilled")}
              {GetProficiency("Git", "2048px-Git_icon.png", "Skilled")}
              {GetProficiency("Adobe CC", "1200px-Adobe_Creative_Cloud_rainbow_icon.svg.png", "Good")}
              {GetProficiency("Affinity", "af_logo_white_pt_trans_rgb_noAffinity.png", "Good")}
              {GetProficiency("Blender", "2503px-Blender_logo_no_text.svg.png", "Good")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;