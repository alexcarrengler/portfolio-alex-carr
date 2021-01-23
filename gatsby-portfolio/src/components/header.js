import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';

import navImg from '../images/navbar-img.png'
// import {Link} from "gatsby"

import headerStyle from '../components/header.module.scss'

const Header = () => (
  <>
  <div id="top" />
  <header className={headerStyle.component}>
    <nav className={headerStyle.nav}>
      <div className={headerStyle.imgContainer} role="link" onClick={() => scrollTo('#top')}>
        <img src={navImg} alt="nav img" className={headerStyle.img}/>
      </div>
      
    </nav>
  </header>
  </>
)

export default Header
