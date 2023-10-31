import React from 'react'
import { Link } from 'react-router-dom';
import backgroundVideo from './header_stefwithanf.mp4'

const Nav = () => {
    return(
        <div className='nav'>
            <div className='header-video'>
                <video autoPlay muted loop id="myVideo">
                    <source src={backgroundVideo} type="video/mp4"></source>
                </video>
            </div>
            <div className='header-name'>
                <text myName>LEO ALKBERG</text>
            </div>
            <div className='header-description'>
                <text>Game Designer | Game Programmer | Game Development Mentor</text>
            </div>
            <div className='nav-buttons'>
                <Link to="/"><button className='button-28'>HOME</button></Link>
                <Link to="/portfolio"><button className='button-28'>PORTFOLIO</button></Link>
                <Link to="/contact"><button className='button-28'>CONTACT</button></Link>
            </div>
        </div>
    )
}

export default Nav;
