import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <div className='nav'>
            LEO ALKBERG
            <div className='nav-buttons'>
                <Link to="/"><button className='button-28'>HOME</button></Link>
                <Link to="/portfolio"><button className='button-28'>PORTFOLIO</button></Link>
                <Link to="/contact"><button className='button-28'>CONTACT</button></Link>
            </div>
        </div>
    )
}

export default Nav;
