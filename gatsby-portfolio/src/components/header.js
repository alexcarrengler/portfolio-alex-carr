import React from "react"
import navImg from '../images/navbar-img.png'
// import {Link} from "gatsby"

import headerStyle from '../components/header.module.scss'

const Header = () => (
  <header className={headerStyle.component}>
    <nav className={headerStyle.nav}>
      <div className={headerStyle.imgContainer}>
        <img src={navImg} alt="nav img" className={headerStyle.img}/>
      </div>
      
    </nav>
  </header>
)

export default Header
