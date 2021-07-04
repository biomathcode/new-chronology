import React from 'react';
import {Link} from 'react-router-dom'

import Logo from '../../../asserts/Logo.svg'

import {useScroll} from './../../hooks/useScroll'

require('./Navbar.scss')



export default function Navbar() {
  const { y, x, scrollDirection } = useScroll();  

  const styles = {
    active: {
      visibility: "visible",
      transition: "all 0.5s"
    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.5s",
      transform: "translateY(-100%)"
    }
  }

    return (
        <nav className="Header" style={scrollDirection === "down" ? styles.active: styles.hidden}   >
        <Link to="/" className="Header__link">
            <img src={Logo} height="50px" width="auto" alt="logo"/>
            <div className="Header__link__title">
              Chronology
            </div>
        </Link>  
        <ul className="flex">
            <li>
              <Link to="/about" className="Header__link">About</Link>
            </li>
            <li>
              <Link to="/blog" className="Header__link">Blogs</Link>
            </li>
          </ul>
        </nav>
        
    )
}