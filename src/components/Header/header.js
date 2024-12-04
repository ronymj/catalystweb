import React from 'react'
import './header.css'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h1>EARTH DATA, SIMPLIFIED</h1>
            <h3 className="text-light">Global Provider of Earth Observation Solutions</h3>
            <HeaderSocials/>
            <div className='me'>
                <img src={ME} alt="me"/>
            </div>
            <a href='#projects' className='scroll__down'>Scroll Down</a>
        </div>
        
        </header>
  )
}

export default Header